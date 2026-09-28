// Render ceremony for the Stage D-P1 Agents view fixture presentation.
// Bundles the canonical presence-projection record (src/agents/
// pond-stage-d-agents-record.ts) into one committed ESM file under
// ui/generated/, and writes a deterministic provenance stamp. Mirrors
// scripts/render-stage-c-cockpit-fixture.mjs: argument-free,
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
  // A tiny stdin entry re-exports the record as both a named and a default
  // export, so the UI renderer's import shape is guaranteed regardless of how
  // the record module evolves. The .ts sourcefile name lets esbuild resolve
  // the fixture chain's `.js` specifiers to their `.ts` sources.
  stdin: {
    contents:
      'import pondStageDAgentsRecord from "./src/agents/pond-stage-d-agents-record.js";\n' +
      "export { pondStageDAgentsRecord };\n" +
      "export default pondStageDAgentsRecord;\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-d-agents-entry.ts",
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
    resolveFromRoot("ui/generated/pond-stage-d-agents-fixture.js")
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
  record: "src/agents/pond-stage-d-agents-record.ts",
  inputs: [
    "src/fixtures/stage-d-p0-agent-presence.ts",
    "src/contracts/pond-agent-presence-source-binding.ts",
  ],
  renderedStages: ["D-P0", "D-P1"],
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
    "D-P0 observed-agent presence fixture and trading-desk source contract " +
    "and admits no transport, live observation, authentication, mutation, or current truth.",
};
const provenanceText = JSON.stringify(provenance, null, 2) + "\n";

const provenancePath = resolveFromRoot(
  "ui/generated/pond-stage-d-agents-fixture-provenance.json"
);
if (checkOnly) {
  const committedBundle = await readFile(
    resolveFromRoot("ui/generated/pond-stage-d-agents-fixture.js"),
    "utf8"
  );
  const committedProvenance = await readFile(provenancePath, "utf8");
  if (committedBundle !== bundleText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-agents-fixture.js differs from a fresh render."
    );
    process.exit(1);
  }
  if (committedProvenance !== provenanceText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-agents-fixture-provenance.json differs from a fresh render."
    );
    process.exit(1);
  }
  console.log("POND_STAGE_D_AGENTS_FIXTURE_RENDER_CHECK_PASS");
} else {
  await mkdir(dirname(fileURLToPath(provenancePath)), { recursive: true });
  await writeFile(provenancePath, provenanceText);
  console.log("POND_STAGE_D_AGENTS_FIXTURE_RENDERED");
}