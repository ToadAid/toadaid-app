import { createHash } from "node:crypto";
import { constants as fsConstants } from "node:fs";
import {
  lstat,
  mkdtemp,
  mkdir,
  open,
  readFile,
  realpath,
  rename,
  rm,
  symlink,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import {
  isAbsolute,
  join,
  relative,
  resolve,
  sep,
} from "node:path";
import { pathToFileURL } from "node:url";

const CONTRACT_VERSION =
  "pond-local-visual-asset-observer-b2-p4b-p5";
const ASSET_ROOT = "ui/assets/";
const READ_CHUNK_BYTES = 64 * 1024;
const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

const DESCRIPTOR_BOUNDARY_AVAILABLE =
  Number.isInteger(fsConstants.O_RDONLY) &&
  Number.isInteger(fsConstants.O_DIRECTORY) &&
  Number.isInteger(fsConstants.O_NOFOLLOW);

const DIRECTORY_OPEN_FLAGS = DESCRIPTOR_BOUNDARY_AVAILABLE
  ? fsConstants.O_RDONLY |
    fsConstants.O_DIRECTORY |
    fsConstants.O_NOFOLLOW
  : null;

const FILE_OPEN_FLAGS = DESCRIPTOR_BOUNDARY_AVAILABLE
  ? fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW
  : null;

const refusal = (repositoryPath, reason) => ({
  contractVersion: CONTRACT_VERSION,
  outcome: "refused",
  repositoryPath,
  reasons: [reason],
  posture: "fail_closed_no_file_facts",
  provenancePosture: "not_observed_by_this_layer",
  admissionPosture: "not_admitted",
  authority: "none",
});

const safeRepositoryPath = (value) => {
  if (
    typeof value !== "string" ||
    value.length === 0 ||
    value !== value.trim() ||
    isAbsolute(value) ||
    value.startsWith("/") ||
    value.includes("\\") ||
    value.includes("://") ||
    value.includes("%") ||
    value.includes("?") ||
    value.includes("#") ||
    /[\u0000-\u001f\u007f]/.test(value)
  ) {
    return false;
  }

  const segments = value.split("/");
  if (
    segments.some(
      (segment) =>
        segment.length === 0 ||
        segment === "." ||
        segment === "..",
    )
  ) {
    return false;
  }

  return value.startsWith(ASSET_ROOT);
};

const sameFileIdentity = (left, right) =>
  left.dev === right.dev &&
  left.ino === right.ino;

const sameStableStat = (left, right) =>
  sameFileIdentity(left, right) &&
  left.size === right.size &&
  left.mtimeNs === right.mtimeNs &&
  left.ctimeNs === right.ctimeNs;

const inside = (root, candidate) => {
  const rel = relative(root, candidate);
  return (
    rel.length > 0 &&
    rel !== ".." &&
    !rel.startsWith(`..${sep}`) &&
    !isAbsolute(rel)
  );
};

const procFdPath = (fileHandle) =>
  `/proc/self/fd/${fileHandle.fd}`;

const closeHandles = async (handles) => {
  for (const handle of [...handles].reverse()) {
    await handle.close().catch(() => {});
  }
};

const openErrorReason = (error) => {
  const code =
    error !== null &&
    typeof error === "object" &&
    "code" in error
      ? error.code
      : null;

  if (code === "ELOOP") {
    return "symlink_refused";
  }

  if (code === "ENOTDIR") {
    return "non_regular_file";
  }

  return "io_failure";
};

const openPinnedRepositoryFile = async ({
  canonicalRepoRoot,
  repositoryPath,
  targetPath,
  proofBeforeFinalOpen = null,
}) => {
  if (
    !DESCRIPTOR_BOUNDARY_AVAILABLE ||
    DIRECTORY_OPEN_FLAGS === null ||
    FILE_OPEN_FLAGS === null
  ) {
    return {
      refusalReason: "host_boundary_unavailable",
      handles: [],
      fileHandle: null,
      fileStat: null,
    };
  }

  try {
    await realpath("/proc/self/fd");
  } catch {
    return {
      refusalReason: "host_boundary_unavailable",
      handles: [],
      fileHandle: null,
      fileStat: null,
    };
  }

  const handles = [];

  const fail = async (reason) => {
    await closeHandles(handles);
    return {
      refusalReason: reason,
      handles: [],
      fileHandle: null,
      fileStat: null,
    };
  };

  try {
    let parentHandle = await open(
      canonicalRepoRoot,
      DIRECTORY_OPEN_FLAGS,
    );
    handles.push(parentHandle);

    const rootStat = await parentHandle.stat({ bigint: true });
    if (!rootStat.isDirectory()) {
      return fail("non_regular_file");
    }

    const pinnedRoot = await realpath(procFdPath(parentHandle));
    if (pinnedRoot !== canonicalRepoRoot) {
      return fail("file_identity_changed");
    }

    const segments = repositoryPath.split("/");
    const parentSegments = segments.slice(0, -1);
    const fileName = segments.at(-1);

    if (typeof fileName !== "string" || fileName.length === 0) {
      return fail("unsafe_or_outside_asset_root");
    }

    for (const segment of parentSegments) {
      const childPath = join(procFdPath(parentHandle), segment);
      const lexicalStat = await lstat(childPath, {
        bigint: true,
      });

      if (lexicalStat.isSymbolicLink()) {
        return fail("symlink_refused");
      }

      if (!lexicalStat.isDirectory()) {
        return fail("non_regular_file");
      }

      const childHandle = await open(
        childPath,
        DIRECTORY_OPEN_FLAGS,
      );
      handles.push(childHandle);

      const childStat = await childHandle.stat({
        bigint: true,
      });
      if (
        !childStat.isDirectory() ||
        !sameFileIdentity(lexicalStat, childStat)
      ) {
        return fail("file_identity_changed");
      }

      parentHandle = childHandle;
    }

    if (proofBeforeFinalOpen !== null) {
      await proofBeforeFinalOpen();
    }

    const finalPath = join(procFdPath(parentHandle), fileName);
    const lexicalFileStat = await lstat(finalPath, {
      bigint: true,
    });

    if (lexicalFileStat.isSymbolicLink()) {
      return fail("symlink_refused");
    }

    if (!lexicalFileStat.isFile()) {
      return fail("non_regular_file");
    }

    const fileHandle = await open(finalPath, FILE_OPEN_FLAGS);
    handles.push(fileHandle);

    const fileStat = await fileHandle.stat({ bigint: true });
    if (
      !fileStat.isFile() ||
      !sameFileIdentity(lexicalFileStat, fileStat)
    ) {
      return fail("file_identity_changed");
    }

    const pinnedTarget = await realpath(
      procFdPath(fileHandle),
    );
    if (pinnedTarget !== targetPath) {
      return fail("file_identity_changed");
    }

    return {
      refusalReason: null,
      handles,
      fileHandle,
      fileStat,
    };
  } catch (error) {
    return fail(openErrorReason(error));
  }
};

const readPass = async (
  fileHandle,
  onFirstChunk,
  collectHeader,
) => {
  const hash = createHash("sha256");
  const buffer = Buffer.allocUnsafe(READ_CHUNK_BYTES);
  const header = collectHeader ? Buffer.alloc(24) : null;
  let headerBytes = 0;
  let totalBytes = 0n;
  let position = 0;
  let firstChunk = true;

  for (;;) {
    const { bytesRead } = await fileHandle.read(
      buffer,
      0,
      buffer.length,
      position,
    );

    if (bytesRead === 0) {
      break;
    }

    const chunk = buffer.subarray(0, bytesRead);
    hash.update(chunk);
    totalBytes += BigInt(bytesRead);
    position += bytesRead;

    if (header !== null && headerBytes < header.length) {
      const remaining = header.length - headerBytes;
      const copyBytes = Math.min(remaining, bytesRead);
      chunk.copy(header, headerBytes, 0, copyBytes);
      headerBytes += copyBytes;
    }

    if (firstChunk && onFirstChunk !== null) {
      firstChunk = false;
      await onFirstChunk();
    } else {
      firstChunk = false;
    }
  }

  return {
    sha256: hash.digest("hex"),
    byteSize: totalBytes,
    header:
      header === null
        ? null
        : header.subarray(0, headerBytes),
  };
};

const parsePngHeader = (header) => {
  if (header === null || header.length < 24) {
    return null;
  }

  if (!header.subarray(0, 8).equals(PNG_SIGNATURE)) {
    return null;
  }

  if (
    header.readUInt32BE(8) !== 13 ||
    header.toString("ascii", 12, 16) !== "IHDR"
  ) {
    return null;
  }

  const width = header.readUInt32BE(16);
  const height = header.readUInt32BE(20);

  if (width === 0 || height === 0) {
    return null;
  }

  return { width, height };
};

const observeInternal = async ({
  repoRoot,
  repositoryPath,
  proofBeforeFinalOpen = null,
  proofAfterFirstReadChunk = null,
}) => {
  const printablePath =
    typeof repositoryPath === "string" ? repositoryPath : null;

  if (
    typeof repoRoot !== "string" ||
    repoRoot.trim().length === 0 ||
    !safeRepositoryPath(repositoryPath)
  ) {
    return refusal(printablePath, "unsafe_or_outside_asset_root");
  }

  if (!repositoryPath.toLowerCase().endsWith(".png")) {
    return refusal(repositoryPath, "unsupported_format");
  }

  let canonicalRepoRoot;
  let canonicalAssetRoot;
  let targetPath;

  try {
    canonicalRepoRoot = await realpath(resolve(repoRoot));
    canonicalAssetRoot = await realpath(
      join(canonicalRepoRoot, "ui", "assets"),
    );
    targetPath = resolve(
      canonicalRepoRoot,
      ...repositoryPath.split("/"),
    );
  } catch {
    return refusal(repositoryPath, "io_failure");
  }

  if (
    !inside(canonicalRepoRoot, canonicalAssetRoot) ||
    !inside(canonicalAssetRoot, targetPath)
  ) {
    return refusal(repositoryPath, "unsafe_or_outside_asset_root");
  }

  const pinned = await openPinnedRepositoryFile({
    canonicalRepoRoot,
    repositoryPath,
    targetPath,
    proofBeforeFinalOpen,
  });

  if (
    pinned.refusalReason !== null ||
    pinned.fileHandle === null ||
    pinned.fileStat === null
  ) {
    return refusal(
      repositoryPath,
      pinned.refusalReason ?? "io_failure",
    );
  }

  const pinnedHandles = pinned.handles;
  const handle = pinned.fileHandle;
  const handleStatBefore = pinned.fileStat;

  try {
    const firstPass = await readPass(
      handle,
      proofAfterFirstReadChunk,
      true,
    );
    const handleStatBetween = await handle.stat({ bigint: true });
    const secondPass = await readPass(handle, null, false);
    const handleStatAfter = await handle.stat({ bigint: true });

    let pinnedPathAfter;
    try {
      pinnedPathAfter = await realpath(procFdPath(handle));
    } catch {
      return refusal(
        repositoryPath,
        "file_identity_changed",
      );
    }

    if (pinnedPathAfter !== targetPath) {
      return refusal(
        repositoryPath,
        "file_identity_changed",
      );
    }

    const reopened = await openPinnedRepositoryFile({
      canonicalRepoRoot,
      repositoryPath,
      targetPath,
    });

    if (
      reopened.refusalReason !== null ||
      reopened.fileHandle === null ||
      reopened.fileStat === null
    ) {
      return refusal(
        repositoryPath,
        reopened.refusalReason ===
          "host_boundary_unavailable"
          ? "host_boundary_unavailable"
          : "file_identity_changed",
      );
    }

    try {
      if (
        !sameFileIdentity(
          handleStatBefore,
          reopened.fileStat,
        )
      ) {
        return refusal(
          repositoryPath,
          "file_identity_changed",
        );
      }
    } finally {
      await closeHandles(reopened.handles);
    }

    if (
      !sameStableStat(handleStatBefore, handleStatBetween) ||
      !sameStableStat(handleStatBetween, handleStatAfter) ||
      firstPass.byteSize !== secondPass.byteSize ||
      firstPass.sha256 !== secondPass.sha256 ||
      firstPass.byteSize !== handleStatBefore.size ||
      secondPass.byteSize !== handleStatAfter.size
    ) {
      return refusal(repositoryPath, "changed_during_observation");
    }

    const png = parsePngHeader(firstPass.header);
    if (png === null) {
      return refusal(repositoryPath, "malformed_png_header");
    }

    if (firstPass.byteSize > BigInt(Number.MAX_SAFE_INTEGER)) {
      return refusal(repositoryPath, "unsupported_file_size");
    }

    return {
      contractVersion: CONTRACT_VERSION,
      outcome: "observed_file_facts",
      repositoryPath,
      sha256: firstPass.sha256,
      byteSize: Number(firstPass.byteSize),
      format: "png",
      mimeType: "image/png",
      width: png.width,
      height: png.height,
      posture: "stable_local_file_facts_observed",
      provenancePosture: "not_observed_by_this_layer",
      admissionPosture: "not_admitted",
      authority: "none",
    };
  } catch {
    return refusal(repositoryPath, "io_failure");
  } finally {
    await closeHandles(pinnedHandles);
  }
};

export const observeLocalVisualAssetFileFacts = async ({
  repoRoot,
  repositoryPath,
}) =>
  observeInternal({
    repoRoot,
    repositoryPath,
  });

const requireObserved = (label, result) => {
  if (result.outcome !== "observed_file_facts") {
    throw new Error(
      `${label}: expected observation, got ${JSON.stringify(result)}`,
    );
  }
  return result;
};

const requireRefusal = (label, result, reason) => {
  if (
    result.outcome !== "refused" ||
    !result.reasons.includes(reason)
  ) {
    throw new Error(
      `${label}: expected ${reason}, got ${JSON.stringify(result)}`,
    );
  }
};

const oneByOneTransparentPng = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y9ZQmcAAAAASUVORK5CYII=",
  "base64",
);

const runSelfTest = async () => {
  const root = await mkdtemp(
    join(tmpdir(), "toadaid-p4b-p5-observer-"),
  );
  const outsideRoot = await mkdtemp(
    join(tmpdir(), "toadaid-p4b-p5-observer-outside-"),
  );

  try {
    await mkdir(join(root, "ui", "assets", "nested"), {
      recursive: true,
    });

    const goodPath = "ui/assets/nested/good.png";
    const goodAbsolute = join(root, ...goodPath.split("/"));
    await writeFile(goodAbsolute, oneByOneTransparentPng);

    const expectedHash = createHash("sha256")
      .update(oneByOneTransparentPng)
      .digest("hex");

    const good = requireObserved(
      "valid PNG",
      await observeLocalVisualAssetFileFacts({
        repoRoot: root,
        repositoryPath: goodPath,
      }),
    );

    if (
      good.sha256 !== expectedHash ||
      good.byteSize !== oneByOneTransparentPng.length ||
      good.width !== 1 ||
      good.height !== 1 ||
      good.provenancePosture !== "not_observed_by_this_layer" ||
      good.admissionPosture !== "not_admitted" ||
      good.authority !== "none"
    ) {
      throw new Error("valid PNG observation facts mismatch");
    }

    requireRefusal(
      "path traversal",
      await observeLocalVisualAssetFileFacts({
        repoRoot: root,
        repositoryPath: "ui/assets/../outside.png",
      }),
      "unsafe_or_outside_asset_root",
    );

    requireRefusal(
      "percent path semantics",
      await observeLocalVisualAssetFileFacts({
        repoRoot: root,
        repositoryPath: "ui/assets/%2e%2e/outside.png",
      }),
      "unsafe_or_outside_asset_root",
    );

    await writeFile(
      join(root, "outside.png"),
      oneByOneTransparentPng,
    );
    await symlink(
      join(root, "outside.png"),
      join(root, "ui", "assets", "linked.png"),
    );
    requireRefusal(
      "symlink",
      await observeLocalVisualAssetFileFacts({
        repoRoot: root,
        repositoryPath: "ui/assets/linked.png",
      }),
      "symlink_refused",
    );

    const raceDirectory = join(
      root,
      "ui",
      "assets",
      "race",
    );
    const raceOriginal = join(
      root,
      "ui",
      "assets",
      "race-original",
    );
    await mkdir(raceDirectory);
    await writeFile(
      join(raceDirectory, "race.png"),
      oneByOneTransparentPng,
    );
    await writeFile(
      join(outsideRoot, "race.png"),
      Buffer.concat([
        oneByOneTransparentPng,
        Buffer.from("outside-root-race-bytes"),
      ]),
    );

    let namespaceSwapRan = false;
    const namespaceSwapResult = await observeInternal({
      repoRoot: root,
      repositoryPath: "ui/assets/race/race.png",
      proofBeforeFinalOpen: async () => {
        namespaceSwapRan = true;
        await rename(raceDirectory, raceOriginal);
        await symlink(outsideRoot, raceDirectory);
      },
    });

    if (!namespaceSwapRan) {
      throw new Error("namespace-swap proof hook did not run");
    }
    requireRefusal(
      "intermediate directory namespace swap",
      namespaceSwapResult,
      "file_identity_changed",
    );

    await mkdir(join(root, "ui", "assets", "directory.png"));
    requireRefusal(
      "non-regular file",
      await observeLocalVisualAssetFileFacts({
        repoRoot: root,
        repositoryPath: "ui/assets/directory.png",
      }),
      "non_regular_file",
    );

    await writeFile(
      join(root, "ui", "assets", "bad.png"),
      Buffer.from("not a png"),
    );
    requireRefusal(
      "malformed PNG",
      await observeLocalVisualAssetFileFacts({
        repoRoot: root,
        repositoryPath: "ui/assets/bad.png",
      }),
      "malformed_png_header",
    );

    await writeFile(
      join(root, "ui", "assets", "unsupported.webp"),
      Buffer.from("synthetic webp placeholder"),
    );
    requireRefusal(
      "unsupported format",
      await observeLocalVisualAssetFileFacts({
        repoRoot: root,
        repositoryPath: "ui/assets/unsupported.webp",
      }),
      "unsupported_format",
    );

    requireRefusal(
      "missing file",
      await observeLocalVisualAssetFileFacts({
        repoRoot: root,
        repositoryPath: "ui/assets/missing.png",
      }),
      "io_failure",
    );

    const changingPath = "ui/assets/changing.png";
    const changingAbsolute = join(
      root,
      ...changingPath.split("/"),
    );
    const changingBytes = Buffer.concat([
      oneByOneTransparentPng,
      Buffer.alloc(READ_CHUNK_BYTES * 2, 0x41),
    ]);
    await writeFile(changingAbsolute, changingBytes);

    let mutationRan = false;
    const changingResult = await observeInternal({
      repoRoot: root,
      repositoryPath: changingPath,
      proofAfterFirstReadChunk: async () => {
        mutationRan = true;
        const mutated = await readFile(changingAbsolute);
        mutated[0] ^= 0x01;
        await writeFile(changingAbsolute, mutated);
      },
    });

    if (!mutationRan) {
      throw new Error("mutation proof hook did not run");
    }
    requireRefusal(
      "mutation during observation",
      changingResult,
      "changed_during_observation",
    );

    console.log("P4B_P5_SELF_TEST_VALID_PNG=PASS");
    console.log("P4B_P5_SELF_TEST_PATH_TRAVERSAL=PASS");
    console.log("P4B_P5_SELF_TEST_PERCENT_PATH=PASS");
    console.log("P4B_P5_SELF_TEST_SYMLINK=PASS");
    console.log("P4B_P5_SELF_TEST_NAMESPACE_SWAP=PASS");
    console.log("P4B_P5_SELF_TEST_NON_REGULAR=PASS");
    console.log("P4B_P5_SELF_TEST_MALFORMED_PNG=PASS");
    console.log("P4B_P5_SELF_TEST_UNSUPPORTED_FORMAT=PASS");
    console.log("P4B_P5_SELF_TEST_IO_FAILURE=PASS");
    console.log("P4B_P5_SELF_TEST_MUTATION=PASS");
    console.log(
      "P4B_P5_LOCAL_VISUAL_ASSET_EVIDENCE_OBSERVER_SELF_TEST_COMPLETE",
    );
  } finally {
    await rm(root, { recursive: true, force: true });
    await rm(outsideRoot, { recursive: true, force: true });
  }
};

const readArgument = (name) => {
  const index = process.argv.indexOf(name);
  if (index < 0 || index + 1 >= process.argv.length) {
    return null;
  }
  return process.argv[index + 1];
};

const isMain =
  process.argv[1] !== undefined &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href;

if (isMain) {
  if (process.argv.includes("--self-test")) {
    await runSelfTest();
  } else {
    const repoRoot = readArgument("--repo-root");
    const repositoryPath = readArgument("--path");

    if (repoRoot === null || repositoryPath === null) {
      console.error(
        "usage: node scripts/pond-local-visual-asset-evidence-observer.mjs --repo-root <repo> --path <ui/assets/file.png>",
      );
      process.exitCode = 2;
    } else {
      const result = await observeLocalVisualAssetFileFacts({
        repoRoot,
        repositoryPath,
      });
      console.log(JSON.stringify(result, null, 2));
      process.exitCode =
        result.outcome === "observed_file_facts" ? 0 : 2;
    }
  }
}
