// Deterministic render ceremony for the Stage D-P25 generic-agent front face.
import { build } from "esbuild";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const checkOnly = process.argv.includes("--check");
const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const fromRoot = (path) => new URL(path, `file://${repositoryRoot}/`);
const esbuildPackage = JSON.parse(
  await readFile(fromRoot("node_modules/esbuild/package.json"), "utf8"),
);

const options = {
  stdin: {
    contents:
      'import record from "./src/agents/pond-stage-d-generic-agent-front-face-record.js";\n' +
      'export { assessPondGenericAgentFrontFace } from "./src/contracts/pond-generic-agent-front-face.js";\n' +
      "export { record as pondStageDGenericAgentFrontFaceRecord };\n" +
      "export default record;\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-d-generic-agent-front-face-entry.ts",
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
  logLevel: "silent",
};

const normalized = (value) => {
  const stripped = value.replace(/[ \t]+$/gm, "");
  return stripped.endsWith("\n") ? stripped : `${stripped}\n`;
};

const result = await build({ ...options, write: false });
const bundleText = normalized(result.outputFiles[0].text);
const bundleUrl = fromRoot("ui/generated/pond-stage-d-generic-agent-front-face.js");

const provenance = {
  record: "src/agents/pond-stage-d-generic-agent-front-face-record.ts",
  inputs: [
    "src/contracts/pond-generic-agent-front-face.ts",
    "src/fixtures/stage-d-p25-generic-agent-front-face.ts",
  ],
  renderedStages: ["D-P25"],
  contractVersions: ["pond-generic-agent-front-face-d-p25"],
  bundler: { name: "esbuild", version: esbuildPackage.version },
  authority: "none",
  runtimeActivationPosture: "not_included",
  note:
    "In-memory generic-agent projection only; selection changes presentation " +
    "without opening a channel, accepting admission, granting capability, " +
    "delivering a message, invoking an agent, or activating an add-on.",
};
const provenanceText = `${JSON.stringify(provenance, null, 2)}\n`;
const provenanceUrl = fromRoot(
  "ui/generated/pond-stage-d-generic-agent-front-face-provenance.json",
);

if (checkOnly) {
  const [committedBundle, committedProvenance] = await Promise.all([
    readFile(bundleUrl, "utf8"),
    readFile(provenanceUrl, "utf8"),
  ]);
  if (committedBundle !== bundleText || committedProvenance !== provenanceText) {
    console.error("STALE: Stage D-P25 generated artifacts differ from a fresh render.");
    process.exit(1);
  }
  console.log("POND_STAGE_D_GENERIC_AGENT_FRONT_FACE_RENDER_CHECK_PASS");
} else {
  await Promise.all([
    writeFile(bundleUrl, bundleText),
    writeFile(provenanceUrl, provenanceText),
  ]);
  console.log("POND_STAGE_D_GENERIC_AGENT_FRONT_FACE_RENDERED");
}
