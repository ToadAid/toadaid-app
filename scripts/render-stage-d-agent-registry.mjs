// Render ceremony for the Stage D-P24 agent registry evidence panel.
// Bundles the presented registration-evidence record (src/agents/
// pond-stage-d-agent-registry-record.ts) into one committed ESM file under
// ui/generated/, and writes a deterministic provenance stamp. Mirrors
// scripts/render-stage-d-agents-fixture.mjs: argument-free, repository-root-
// relative, the produced artifacts are committed directly — CI does not run
// this script (pass --check to byte-verify the committed artifacts against
// a rebuild).
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
  // A tiny stdin entry re-exports the presented record as both a named and a
  // default export, so the UI renderer's import shape is guaranteed
  // regardless of how the record module evolves. The .ts sourcefile name
  // lets esbuild resolve the record chain's `.js` specifiers to their `.ts`
  // sources.
  stdin: {
    contents:
      'import pondStageDAgentRegistryRecord from "./src/agents/pond-stage-d-agent-registry-record.js";\n' +
      "export { pondStageDAgentRegistryRecord };\n" +
      "export default pondStageDAgentRegistryRecord;\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-d-agent-registry-entry.ts",
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
    resolveFromRoot("ui/generated/pond-stage-d-agent-registry.js")
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
  record: "src/agents/pond-stage-d-agent-registry-record.ts",
  inputs: [
    "src/fixtures/stage-d-p24-agent-identity-evidence.ts",
    "src/contracts/pond-agent-registration-evidence.ts",
    "src/fixtures/stage-d-p0-agent-presence.ts",
  ],
  renderedStages: ["D-P0", "D-P24"],
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
    "Registration-evidence presentation only; the record presents the " +
    "desk's supplied registration as digest-anchored derived evidence with " +
    "honest all-null onchain slots and admits no admission, membership, " +
    "channel, transport, live observation, onchain read or write, " +
    "authentication, mutation, or current truth.",
};
const provenanceText = JSON.stringify(provenance, null, 2) + "\n";

const provenancePath = resolveFromRoot(
  "ui/generated/pond-stage-d-agent-registry-provenance.json"
);
if (checkOnly) {
  const committedBundle = await readFile(
    resolveFromRoot("ui/generated/pond-stage-d-agent-registry.js"),
    "utf8"
  );
  const committedProvenance = await readFile(provenancePath, "utf8");
  if (committedBundle !== bundleText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-agent-registry.js differs from a fresh render."
    );
    process.exit(1);
  }
  if (committedProvenance !== provenanceText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-agent-registry-provenance.json differs from a fresh render."
    );
    process.exit(1);
  }
  console.log("POND_STAGE_D_AGENT_REGISTRY_RENDER_CHECK_PASS");
} else {
  await mkdir(dirname(fileURLToPath(provenancePath)), { recursive: true });
  await writeFile(provenancePath, provenanceText);
  console.log("POND_STAGE_D_AGENT_REGISTRY_RENDERED");
}