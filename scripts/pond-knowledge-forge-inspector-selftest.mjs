import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import {
  KNOWLEDGE_FORGE_P5D_INSPECTOR_FIXTURE,
  getInspectionForSkill,
  renderKnowledgeForgeInspector,
} from "../ui/pond-knowledge-forge-inspector.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const html = await readFile(path.join(root, "ui", "pond-desktop.html"), "utf8");
const css = await readFile(path.join(root, "ui", "pond-desktop.css"), "utf8");
const inspectorText = await readFile(path.join(root, "ui", "pond-knowledge-forge-inspector.js"), "utf8");
const libraryText = await readFile(path.join(root, "ui", "pond-knowledge-forge-library.js"), "utf8");
const packageJson = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"));

const fixture = KNOWLEDGE_FORGE_P5D_INSPECTOR_FIXTURE;
assert.equal(fixture.schemaVersion, "0.1");
assert.equal(fixture.sourceBinding.forgeCommit, "d4cf038eb188975e9ac4a5d875c15998e366a8ee");
assert.equal(fixture.sourceBinding.forgeTree, "60e7b36b61c4ac9617c2ef1df0a787b56e7eef0f");
assert.equal(fixture.sourceBinding.pondCommit, "3117bb66c7ab88f6e1abcac6e0101ff07fe68506");
assert.equal(fixture.sourceBinding.pondTree, "12903cb30a0184c3e253752fb945ef88b8b155c5");
assert.equal(fixture.posture.authority, "KNOWLEDGE_ONLY");
assert.equal(fixture.posture.executionAuthority, "NONE");
assert.equal(fixture.posture.runtimeConnection, "NOT_INCLUDED");
assert.equal(fixture.posture.mutation, "NONE");
assert.equal(fixture.posture.activation, "NOT_INCLUDED");
assert.equal(fixture.posture.sourceBodiesVisible, false);
assert.equal(fixture.posture.claimBodiesVisible, false);
assert.equal(fixture.posture.exactSupportTextVisible, false);

const skillIds = Object.keys(fixture.inspections);
assert.equal(skillIds.length, 4);

for (const skillId of skillIds) {
  const inspection = getInspectionForSkill(skillId);
  assert.ok(inspection);
  assert.equal(inspection.skillId, skillId);
  assert.equal(inspection.authority, "KNOWLEDGE_ONLY");
  assert.equal(inspection.executionAuthority, "NONE");
  assert.ok(inspection.sourceBindings.length >= 1);
  assert.ok(inspection.versionLineage.length >= 1);
  assert.equal(inspection.faithfulness.state, "VALIDATED");
  assert.equal(inspection.faithfulness.valid, true);
  assert.equal(inspection.faithfulness.candidateSha256, inspection.provenance.candidateSha256);

  for (const source of inspection.sourceBindings) {
    assert.match(source.sourceId, /^source:sha256:[0-9a-f]{64}$/);
    assert.match(source.exactBytesSha256, /^[0-9a-f]{64}$/);
    assert.ok(!Object.hasOwn(source, "text"));
    assert.ok(!Object.hasOwn(source, "body"));
    assert.ok(!Object.hasOwn(source, "content"));
  }

  for (const unit of inspection.faithfulness.unitResults) {
    assert.equal(unit.entailment, "SUPPORTED");
    assert.equal(unit.qualifiersPreserved, true);
    assert.match(unit.claimSha256, /^[0-9a-f]{64}$/);
    assert.match(unit.supportSpanSha256, /^[0-9a-f]{64}$/);
    assert.ok(!Object.hasOwn(unit, "claimText"));
    assert.ok(!Object.hasOwn(unit, "supportText"));
  }
}

assert.equal(getInspectionForSkill("skill:fixture:nope"), null);
assert.equal(renderKnowledgeForgeInspector("skill:fixture:nope", undefined), false);
assert.match(html, /data-forge-inspector/);
assert.match(html, /data-forge-inspector-sources/);
assert.match(html, /data-forge-inspector-versions/);
assert.match(html, /data-forge-inspector-provenance/);
assert.match(html, /data-forge-inspector-faithfulness/);
assert.match(html, /pond-knowledge-forge-inspector\.js/);
assert.match(css, /\.forge-inspector-shell/);
assert.match(css, /\.forge-inspector-grid/);
assert.match(css, /\.forge-inspector-record/);
assert.match(libraryText, /knowledge-forge-skill-selected/);
assert.match(libraryText, /dispatchEvent/);
assert.equal(
  packageJson.scripts["test:p5d-knowledge-forge-inspector"],
  "node scripts/pond-knowledge-forge-inspector-selftest.mjs",
);

for (const forbidden of ["__TAURI__", "invoke(", "fetch(", "XMLHttpRequest", "WebSocket", "EventSource"]) {
  assert.equal(inspectorText.includes(forbidden), false, `P5D inspector module must not activate ${forbidden}`);
}

console.log("P5D_KNOWLEDGE_FORGE_EVIDENCE_INSPECTOR_SELFTEST_GREEN");
