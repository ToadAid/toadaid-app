// Deterministic render ceremony for the Stage D-P32 agent docking lane.
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
      'import record from "./src/agents/pond-stage-d-agent-docking-lane-record.js";\n' +
      'export { assessPondAgentDockingBrief } from "./src/contracts/pond-agent-docking-lane.js";\n' +
      "export { record as pondStageDAgentDockingLaneRecord };\n" +
      "export default record;\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-d-agent-docking-lane-entry.ts",
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
const bundleUrl = fromRoot("ui/generated/pond-stage-d-agent-docking-lane.js");

const provenance = {
  record: "src/agents/pond-stage-d-agent-docking-lane-record.ts",
  inputs: [
    "src/contracts/pond-agent-docking-lane.ts",
    "src/fixtures/stage-d-p32-agent-docking-lane.ts",
  ],
  renderedStages: ["D-P32"],
  contractVersions: ["pond-agent-docking-lane-d-p32"],
  bundler: { name: "esbuild", version: esbuildPackage.version },
  authority: "none",
  runtimeActivationPosture: "not_included",
  note:
    "In-memory docking-brief presentation only; the lane presents the canonical " +
    "admission ceremony without performing any step, verifying evidence, making " +
    "an admission decision, issuing an AgentId, establishing a scope " +
    "relationship, opening a standing intake channel, granting capability, " +
    "delivering a message, or invoking an agent.",
};
const provenanceText = `${JSON.stringify(provenance, null, 2)}\n`;
const provenanceUrl = fromRoot(
  "ui/generated/pond-stage-d-agent-docking-lane-provenance.json",
);

if (checkOnly) {
  const [committedBundle, committedProvenance] = await Promise.all([
    readFile(bundleUrl, "utf8"),
    readFile(provenanceUrl, "utf8"),
  ]);
  if (committedBundle !== bundleText || committedProvenance !== provenanceText) {
    console.error("STALE: Stage D-P32 generated artifacts differ from a fresh render.");
    process.exit(1);
  }
  console.log("POND_STAGE_D_AGENT_DOCKING_LANE_RENDER_CHECK_PASS");
} else {
  await Promise.all([
    writeFile(bundleUrl, bundleText),
    writeFile(provenanceUrl, provenanceText),
  ]);
  console.log("POND_STAGE_D_AGENT_DOCKING_LANE_RENDERED");
}