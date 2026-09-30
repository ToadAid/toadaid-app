// Render ceremony for the Stage D-P15 live session lane. Bundles the two
// D-P15 session assessors, the D-P0 receiver-held principal and agent-0
// refs, and the D-P2 declared-maximum-age constant into one committed ESM
// file under ui/generated/, and writes a deterministic provenance stamp.
// Mirrors scripts/render-stage-d-local-authentication.mjs: argument-free,
// repository-root-relative, the produced artifacts are committed directly —
// CI does not run this script (pass --check to byte-verify the committed
// artifacts against a rebuild).
import { build } from "esbuild";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const checkOnly = process.argv.includes("--check");

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const resolveFromRoot = (path) => new URL(path, `file://${repositoryRoot}/`);

const esbuildPackage = JSON.parse(
  await readFile(resolveFromRoot("node_modules/esbuild/package.json"), "utf8")
);

const buildOptions = {
  // A tiny stdin entry re-exports the frozen contract code the shell
  // wiring module runs in the browser. The .ts sourcefile name lets
  // esbuild resolve the contract chain's `.js` specifiers to their `.ts`
  // sources.
  stdin: {
    contents:
      'import { assessPondLiveSessionEstablishment } from "./src/contracts/pond-live-session-establishment.js";\n' +
      'import { assessPondLiveSessionReadGate } from "./src/contracts/pond-live-session-read-gate.js";\n' +
      'import { stageDP0LocalPrincipalRef, stageDP0Agent0Ref } from "./src/fixtures/stage-d-p0-agent-presence.js";\n' +
      'import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./src/contracts/pond-agent-presence-observation-intake.js";\n' +
      'import { stageDP9IssuanceComplete, stageDP9MappingEstablished } from "./src/fixtures/stage-d-p9-principal-identity.js";\n' +
      'import { stageDP10ActivationComplete } from "./src/fixtures/stage-d-p10-private-reads.js";\n' +
      "// The frozen leg records the shell side receives verbatim: the hand-written ui\n" +
      "// module never restates the D-P9/D-P10 record shapes (the frozen D-P9/D-P10\n" +
      "// hygiene walks refuse their vocabulary outside generated artifacts).\n" +
      "const pondStageDP9IssuanceRecord = stageDP9IssuanceComplete.issuanceRecord;\n" +
      "const pondStageDP9MappingRecord = stageDP9MappingEstablished.mappingRecord;\n" +
      "const pondStageDP10ActivationRecordTemplate = stageDP10ActivationComplete.activationRecord;\n" +
      "export { assessPondLiveSessionEstablishment, assessPondLiveSessionReadGate, stageDP0LocalPrincipalRef, stageDP0Agent0Ref, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS, pondStageDP9IssuanceRecord, pondStageDP9MappingRecord, pondStageDP10ActivationRecordTemplate };\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-d-live-session-entry.ts",
  },
  bundle: true,
  format: "esm",
  platform: "browser",
  target: ["es2022"],
  splitting: false,
  minify: false,
  keepNames: true,
  legalComments: "none",
  charset: "utf8",
  logLevel: "info",
};

// Strip per-line trailing whitespace from the generated bundle: generated
// output can carry it, the committed-range `git diff --check` gate flags it,
// and the gitattributes `whitespace` attribute does not suppress `--check`
// detection on current git. Strip-in-place keeps the artifact deterministic.
const stripTrailingWhitespace = (text) => {
  const stripped = text.replace(/[ \t]+$/gm, "");
  return stripped.endsWith("\n") ? stripped : stripped + "\n";
};

let bundleText;
if (checkOnly) {
  const result = await build({ ...buildOptions, write: false });
  bundleText = stripTrailingWhitespace(result.outputFiles[0].text);
} else {
  const outfile = fileURLToPath(
    resolveFromRoot("ui/generated/pond-stage-d-live-session.js")
  );
  await build({ ...buildOptions, outfile });
  const bundle = await readFile(outfile, "utf8");
  bundleText = stripTrailingWhitespace(bundle);
  await writeFile(outfile, bundleText);
}

// Provenance stamp: the bundler version is read from the installed package,
// never from a literal here, and there is no timestamp, so identical inputs
// produce identical bytes. The rendered contract versions are extracted from
// the produced bundle itself rather than restated by hand.
const contractVersions = [
  ...new Set(bundleText.match(/pond-[a-z0-9-]+-d-p[0-9]+/g) || []),
].sort();

const provenance = {
  record: "src/contracts/pond-live-session-establishment.ts",
  inputs: [
    "src/contracts/pond-live-session-read-gate.ts",
    "src/fixtures/stage-d-p0-agent-presence.ts",
    "src/contracts/pond-agent-presence-observation-intake.ts",
    "src/fixtures/stage-d-p9-principal-identity.ts",
    "src/fixtures/stage-d-p10-private-reads.ts",
  ],
  renderedStages: ["D-P0", "D-P2", "D-P15"],
  contractVersions,
  bundler: { name: "esbuild", version: esbuildPackage.version },
  build: {
    format: "esm",
    platform: "browser",
    target: "es2022",
    minify: false,
    splitting: false,
  },
  authority: "none",
  mutationPosture: "none_read_only",
  runtimeActivationPosture: "not_included",
  note:
    "Live session-lane support only: the bundle carries the two D-P15 " +
    "assessors — the receiver-performed live session establishment over " +
    "the verified knowledge factor and the re-inspected frozen D-P10 " +
    "activation plus its session-scoped single-principal structural-read " +
    "gate — the receiver-held D-P0 principal ref and agent-0 ref, the " +
    "D-P2 declared maximum age, and the frozen D-P9 issuance/mapping and " +
    "D-P10 activation leg records the shell side receives verbatim (the " +
    "hand-written ui module never restates frozen shapes). The session " +
    "stays receiver-owned: no agent gains session, secret, or admission; " +
    "no secret material is carried, stored, or transported; no " +
    "persistence; no grant, membership, admission, or authority; " +
    "collaborative reads refuse (their own later lane); current truth " +
    "stays withheld.",
};
const provenanceText = JSON.stringify(provenance, null, 2) + "\n";

const provenancePath = resolveFromRoot(
  "ui/generated/pond-stage-d-live-session-provenance.json"
);
if (checkOnly) {
  const committedBundle = await readFile(
    resolveFromRoot("ui/generated/pond-stage-d-live-session.js"),
    "utf8"
  );
  const committedProvenance = await readFile(provenancePath, "utf8");
  if (committedBundle !== bundleText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session.js differs from a fresh render."
    );
    process.exit(1);
  }
  if (committedProvenance !== provenanceText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-provenance.json differs from a fresh render."
    );
    process.exit(1);
  }
  console.log("POND_STAGE_D_LIVE_SESSION_RENDER_CHECK_PASS");
} else {
  await mkdir(dirname(fileURLToPath(provenancePath)), { recursive: true });
  await writeFile(provenancePath, provenanceText);
  console.log("POND_STAGE_D_LIVE_SESSION_RENDERED");
}