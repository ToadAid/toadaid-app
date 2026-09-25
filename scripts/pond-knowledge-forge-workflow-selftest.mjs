import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import {
  KNOWLEDGE_FORGE_P5E_WORKFLOW_CONTRACT,
  buildWorkflowPreview,
  renderKnowledgeForgeWorkflow,
} from "../ui/pond-knowledge-forge-workflow.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const html = await readFile(path.join(root, "ui", "pond-desktop.html"), "utf8");
const css = await readFile(path.join(root, "ui", "pond-desktop.css"), "utf8");
const moduleText = await readFile(
  path.join(root, "ui", "pond-knowledge-forge-workflow.js"),
  "utf8",
);
const packageJson = JSON.parse(
  await readFile(path.join(root, "package.json"), "utf8"),
);

const contract = KNOWLEDGE_FORGE_P5E_WORKFLOW_CONTRACT;

assert.equal(contract.schemaVersion, "0.1");
assert.equal(contract.sourceBinding.forgeCommit, "368077ee22b692f6879659d47b276f5edda5c113");
assert.equal(contract.sourceBinding.forgeTree, "d346931179979e34fe9a37b2d85aa0276ca04c2c");
assert.equal(contract.sourceBinding.pondCommit, "8de15239a150f5433d3b8c41f4a4c0dcfa66d8c4");
assert.equal(contract.sourceBinding.pondTree, "f513da15a0c9f56d47a3137acd3ccc841f8da8b3");

assert.equal(contract.posture.authority, "KNOWLEDGE_ONLY");
assert.equal(contract.posture.instructionAuthority, "NONE");
assert.equal(contract.posture.executionAuthority, "NONE");
assert.equal(
  contract.posture.lifecycleAuthority,
  "EXTERNAL_REQUIRED_NOT_ESTABLISHED",
);
assert.equal(contract.posture.runtimeConnection, "NOT_INCLUDED");
assert.equal(contract.posture.hostIntegration, "NOT_INCLUDED");
assert.equal(contract.posture.mutation, "NONE");
assert.equal(contract.posture.activation, "NOT_INCLUDED");
assert.equal(contract.posture.persistence, "NONE");

assert.deepEqual(Object.keys(contract.operations), [
  "COMPILE",
  "VALIDATE",
  "PROMOTE",
  "DISPUTE",
  "REVOKE",
]);

assert.deepEqual(contract.operations.VALIDATE.allowedFrom, ["COMPILED_CANDIDATE"]);
assert.equal(contract.operations.VALIDATE.targetState, "VALIDATED");
assert.deepEqual(contract.operations.PROMOTE.allowedFrom, ["VALIDATED"]);
assert.equal(contract.operations.PROMOTE.targetState, "PROMOTED");
assert.ok(contract.operations.PROMOTE.requiredEvidence.includes("decision_ref"));
assert.ok(contract.operations.DISPUTE.requiredEvidence.includes("incident_ref"));
assert.ok(contract.operations.DISPUTE.requiredEvidence.includes("reason"));
assert.ok(contract.operations.REVOKE.requiredEvidence.includes("incident_ref"));
assert.ok(contract.operations.REVOKE.requiredEvidence.includes("reason"));
assert.ok(contract.operations.REVOKE.requiredEvidence.includes("decision_ref"));

const incomplete = buildWorkflowPreview(
  "PROMOTE",
  "skill:fixture:approval-governance",
  {},
);
assert.equal(incomplete.readyForExternalHandoff, false);
assert.deepEqual(incomplete.missingEvidence, ["decision_ref"]);
assert.equal(incomplete.executionAuthority, "NONE");
assert.equal(incomplete.mutation, "NONE");
assert.equal(incomplete.activation, "NOT_INCLUDED");
assert.equal(incomplete.executable, false);

const complete = buildWorkflowPreview(
  "REVOKE",
  "skill:fixture:incident-example",
  {
    incident_ref: "incident:fixture:source-review",
    reason: "fixture evidence no longer trusted",
    decision_ref: "decision:external:fixture-1",
  },
);
assert.equal(complete.readyForExternalHandoff, true);
assert.deepEqual(complete.missingEvidence, []);
assert.equal(
  complete.lifecycleAuthority,
  "EXTERNAL_REQUIRED_NOT_ESTABLISHED",
);
assert.equal(complete.targetState, "REVOKED");
assert.equal(complete.executable, false);

assert.throws(
  () => buildWorkflowPreview("DELETE_EVERYTHING", "skill:fixture:any", {}),
  /unknown workflow operation/,
);

assert.equal(renderKnowledgeForgeWorkflow(undefined), false);

assert.match(html, /data-forge-workflow/);
assert.match(html, /data-workflow-operation="COMPILE"/);
assert.match(html, /data-workflow-operation="VALIDATE"/);
assert.match(html, /data-workflow-operation="PROMOTE"/);
assert.match(html, /data-workflow-operation="DISPUTE"/);
assert.match(html, /data-workflow-operation="REVOKE"/);
assert.match(html, /data-forge-workflow-fields/);
assert.match(html, /data-forge-workflow-preview/);
assert.match(html, /data-forge-workflow-build-preview/);
assert.match(html, /disabled[^>]*>Execute not included</);
assert.match(html, /pond-knowledge-forge-workflow\.js/);

assert.match(css, /\.forge-workflow-shell/);
assert.match(css, /\.forge-workflow-operations/);
assert.match(css, /\.forge-workflow-preview/);

assert.equal(
  packageJson.scripts["test:p5e-knowledge-forge-workflow"],
  "node scripts/pond-knowledge-forge-workflow-selftest.mjs",
);

for (const forbidden of [
  "__TAURI__",
  "invoke(",
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "localStorage",
  "sessionStorage",
]) {
  assert.equal(
    moduleText.includes(forbidden),
    false,
    `P5E workflow module must not activate ${forbidden}`,
  );
}

console.log("P5E_KNOWLEDGE_FORGE_GOVERNED_WORKFLOW_SELFTEST_GREEN");
