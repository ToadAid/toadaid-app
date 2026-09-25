import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import {
  KNOWLEDGE_FORGE_P5B_FIXTURE,
  renderKnowledgeForgeSurface,
} from "../ui/pond-knowledge-forge.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const html = await readFile(path.join(root, "ui", "pond-desktop.html"), "utf8");
const shell = await readFile(path.join(root, "ui", "pond-shell.js"), "utf8");
const css = await readFile(path.join(root, "ui", "pond-desktop.css"), "utf8");
const moduleText = await readFile(
  path.join(root, "ui", "pond-knowledge-forge.js"),
  "utf8",
);

const fixture = KNOWLEDGE_FORGE_P5B_FIXTURE;

assert.equal(fixture.schemaVersion, "0.1");
assert.equal(fixture.sourceBinding.repository, "ToadAid/knowledge-forge");
assert.equal(
  fixture.sourceBinding.commit,
  "41a15164f091f63e9a4d3b06c5ac4e43c9d4755b",
);
assert.equal(
  fixture.sourceBinding.tree,
  "53bc0ef4a92dc65fe83cd26c28df0ee4a0152bb1",
);
assert.equal(
  fixture.architectureBinding.commit,
  "bc7a971dfb243f0aa4417da6cef85cc56204f783",
);

assert.deepEqual(
  fixture.operatorCli.map((entry) => entry.command),
  ["validate-package", "registry-inspect", "discover", "load-current"],
);

assert.equal(fixture.posture.knowledgeAuthority, "KNOWLEDGE_ONLY");
assert.equal(fixture.posture.instructionAuthority, "NONE");
assert.equal(fixture.posture.executionAuthority, "NONE");
assert.equal(fixture.posture.runtimeConnection, "NOT_INCLUDED");
assert.equal(fixture.posture.mutation, "NONE");
assert.equal(fixture.posture.activation, "NOT_INCLUDED");
assert.equal(fixture.posture.hostIntegration, "NOT_INCLUDED");

assert.ok(
  fixture.boundaries.includes("KNOWLEDGE != CONTEXT != MEMORY != AUTHORITY"),
);
assert.ok(
  fixture.boundaries.includes("Procedure knowledge has zero execution authority"),
);

assert.equal(renderKnowledgeForgeSurface(undefined), false);

assert.match(html, /data-pond-view-link="knowledge"/);
assert.match(html, /data-pond-view="knowledge"/);
assert.match(html, /id="pond-knowledge"/);
assert.match(html, /data-runtime-connection="not_included"/);
assert.match(html, /data-authority="none"/);
assert.match(html, /pond-knowledge-forge\.js/);

assert.match(shell, /new Set\(\["home", "world", "knowledge"\]\)/);
assert.match(shell, /"#pond-knowledge": "knowledge"/);
assert.match(shell, /view === "knowledge"/);
assert.match(css, /\.knowledge-stage/);
assert.match(css, /\.forge-grid/);

for (const forbidden of [
  "__TAURI__",
  "invoke(",
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
]) {
  assert.equal(
    moduleText.includes(forbidden),
    false,
    `Knowledge Forge P5B module must not activate ${forbidden}`,
  );
}

console.log("P5B_KNOWLEDGE_FORGE_DESKTOP_SURFACE_SELFTEST_GREEN");
