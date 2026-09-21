// Render ceremony for the Stage C-P10 Bridge cockpit fixture presentation.
// Bundles the canonical fixture-chain record (src/cockpit/
// pond-stage-c-cockpit-record.ts) into one committed ESM file under
// ui/generated/, and writes a deterministic provenance stamp. Mirrors
// scripts/vendor-walletconnect.mjs: argument-free, repository-root-relative,
// the produced artifacts are committed directly — CI does not run this script
// (pass --check to byte-verify the committed artifacts against a rebuild).
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
  // A tiny stdin entry re-exports the record as both a named and a default
  // export, so the UI renderer's import shape is guaranteed regardless of how
  // the record module evolves. The .ts sourcefile name lets esbuild resolve
  // the fixture chain's `.js` specifiers to their `.ts` sources.
  stdin: {
    contents:
      'import pondStageCCockpitRecord from "./src/cockpit/pond-stage-c-cockpit-record.js";\n' +
      "export { pondStageCCockpitRecord };\n" +
      "export default pondStageCCockpitRecord;\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-c-cockpit-entry.ts",
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
    resolveFromRoot("ui/generated/pond-stage-c-fixture.js")
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
  ...new Set(bundleText.match(/pond-[a-z0-9-]+-c-p[0-9]+/g) || []),
].sort();

const provenance = {
  record: "src/cockpit/pond-stage-c-cockpit-record.ts",
  inputs: [
    "src/fixtures/stage-c-p1-read-only-repository-target.ts",
    "src/fixtures/stage-c-p6-bridge-repo-status-target-comparison.ts",
    "src/fixtures/stage-c-p7-bridge-repo-status-full-head-target-comparison.ts",
    "src/fixtures/stage-c-p8-bridge-repo-status-origin-identity-target-comparison.ts",
    "src/fixtures/stage-c-p9-bridge-stage39a-repo-status-source-binding.ts",
    "src/fixtures/stage-c-p9-bridge-stdio-delivery-admission.ts",
  ],
  renderedStages: ["C-P1", "C-P5", "C-P6", "C-P7", "C-P8", "C-P9"],
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
    "Fixture-rendered presentation only; the record binds the canonical " +
    "C-P1..C-P9 fixture chain and admits no transport, mutation, or current truth.",
};
const provenanceText = JSON.stringify(provenance, null, 2) + "\n";

const provenancePath = resolveFromRoot(
  "ui/generated/pond-stage-c-fixture-provenance.json"
);
if (checkOnly) {
  const committedBundle = await readFile(
    resolveFromRoot("ui/generated/pond-stage-c-fixture.js"),
    "utf8"
  );
  const committedProvenance = await readFile(provenancePath, "utf8");
  if (committedBundle !== bundleText) {
    console.error(
      "STALE: ui/generated/pond-stage-c-fixture.js differs from a fresh render."
    );
    process.exit(1);
  }
  if (committedProvenance !== provenanceText) {
    console.error(
      "STALE: ui/generated/pond-stage-c-fixture-provenance.json differs from a fresh render."
    );
    process.exit(1);
  }
  console.log("POND_STAGE_C_COCKPIT_FIXTURE_RENDER_CHECK_PASS");
} else {
  await mkdir(dirname(fileURLToPath(provenancePath)), { recursive: true });
  await writeFile(provenancePath, provenanceText);
  console.log("POND_STAGE_C_COCKPIT_FIXTURE_RENDERED");
}