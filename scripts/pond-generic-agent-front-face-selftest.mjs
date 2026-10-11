#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  POND_STAGE_DP25_CONNECTION_STATES,
  assessPondGenericAgentFrontFace,
} from "../src/contracts/pond-generic-agent-front-face.ts";
import {
  stageDP25GenericAgentFrontFaceMatrix,
  stageDP25GenericAgentProjections,
} from "../src/fixtures/stage-d-p25-generic-agent-front-face.ts";
import generatedRecord, {
  assessPondGenericAgentFrontFace as generatedAssessor,
} from "../ui/generated/pond-stage-d-generic-agent-front-face.js";
import { renderPondGenericAgentFrontFace } from
  "../ui/pond-generic-agent-front-face.js";

const readRepo = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const clone = (value) => JSON.parse(JSON.stringify(value));
const effectCeilings = [
  "agentIdentityAcceptedAsAdmission",
  "projectedAdmissionAcceptedAsAdmissionDecision",
  "declaredCapabilityAcceptedAsGrant",
  "connectionOpened",
  "credentialStoredOrProjected",
  "messageComposedOrDelivered",
  "agentInvoked",
  "addonActivated",
  "currentTruthEstablished",
];

const assertCeiling = (assessment) => {
  for (const key of effectCeilings) assert.equal(assessment[key], false, key);
  assert.equal(assessment.runtimeActivationPosture, "not_included");
  assert.equal(assessment.authority, "none");
  assert.equal(assessment.selectionChangesPresentationOnly, true);
};

// 1. The three fixture agents all pass through the same generic seam.
assert.equal(stageDP25GenericAgentFrontFaceMatrix.length, 3);
assert.deepEqual(
  stageDP25GenericAgentFrontFaceMatrix.map((entry) => entry.assessment.selectedAgent.displayName),
  ["Agent0", "Agent1", "Community Scout"],
);
for (const entry of stageDP25GenericAgentFrontFaceMatrix) {
  assert.equal(
    entry.assessment.projectionState,
    "generic_agent_front_face_presented_fixture_only",
  );
  assertCeiling(entry.assessment);
}

// 2. Capabilities affect presentation only. Knowledge Forge is visible but
// withheld for Agent0/Agent1 and not declared for the generic community agent.
for (const entry of stageDP25GenericAgentFrontFaceMatrix.slice(0, 2)) {
  const forge = entry.assessment.extensions.find(
    (extension) => extension.extensionId === "toadaid.addon.knowledge-forge",
  );
  assert.equal(forge.state, "declared_but_withheld_no_activation");
}
assert.equal(
  stageDP25GenericAgentFrontFaceMatrix[2].assessment.extensions.find(
    (extension) => extension.extensionId === "toadaid.addon.knowledge-forge",
  ).state,
  "not_declared",
);

// 3. Every requested connection-state visual vocabulary is structurally
// accepted, but none changes the effect ceiling.
for (const connectionState of POND_STAGE_DP25_CONNECTION_STATES) {
  const projections = clone(stageDP25GenericAgentProjections);
  projections[0].connectionState = connectionState;
  const assessment = assessPondGenericAgentFrontFace({
    projections,
    selectedAgentId: projections[0].agentId,
  });
  assert.equal(assessment.selectedAgent.connectionState, connectionState);
  assertCeiling(assessment);
}

// 4. Unknown selection, duplicate identities, extra fields, and malformed
// capability inventories fail closed and echo no agent.
const unknown = assessPondGenericAgentFrontFace({
  projections: stageDP25GenericAgentProjections,
  selectedAgentId: "agent:missing",
});
assert.equal(unknown.reason, "selected_agent_not_found");
assert.equal(unknown.selectedAgent, null);
assertCeiling(unknown);

for (const projections of [
  [stageDP25GenericAgentProjections[0], stageDP25GenericAgentProjections[0]],
  [{ ...clone(stageDP25GenericAgentProjections[0]), credential: "forbidden" }],
  [{ ...clone(stageDP25GenericAgentProjections[0]), declaredCapabilityRefs: [""] }],
]) {
  const assessment = assessPondGenericAgentFrontFace({
    projections,
    selectedAgentId: stageDP25GenericAgentProjections[0].agentId,
  });
  assert.equal(assessment.reason, "generic_agent_projection_input_invalid");
  assert.equal(assessment.selectedAgent, null);
  assertCeiling(assessment);
}

// 5. The generated browser record stays tied to source and exposes no
// transport or send method.
assert.equal(generatedRecord.contractVersion, "pond-generic-agent-front-face-d-p25");
assert.equal(generatedRecord.projections.length, 3);
assert.equal(generatedRecord.authority, "none");
assert.equal(generatedRecord.runtimeActivationPosture, "not_included");
assert.equal(typeof generatedAssessor, "function");
for (const forbidden of ["assessSelection", "connect", "send", "deliver", "invoke", "admit", "activateAddon"]) {
  assert.equal(Object.hasOwn(generatedRecord, forbidden), false, forbidden);
}

// 6. Drive the real renderer with a tiny DOM: native select, visible status,
// textContent-only output, and a keyboard-native change event.
const node = (tag = "div") => ({
  tag,
  dataset: {},
  children: [],
  textContent: "",
  value: "",
  disabled: false,
  listeners: {},
  append(...children) { this.children.push(...children); },
  replaceChildren(...children) { this.children = children; },
  addEventListener(kind, listener) { this.listeners[kind] = listener; },
});
const selector = node("select");
const status = node("p");
const facts = node("dl");
const capabilities = node("ul");
const extensions = node("ul");
const nodes = new Map([
  ["[data-generic-agent-select]", selector],
  ["[data-generic-agent-status]", status],
  ["[data-generic-agent-facts]", facts],
  ["[data-generic-agent-capabilities]", capabilities],
  ["[data-generic-agent-extensions]", extensions],
]);
const root = node("section");
root.dataset.genericAgentRecordVersion = "pond-generic-agent-front-face-d-p25";
root.querySelector = (query) => nodes.get(query) ?? null;
const doc = {
  querySelector: (query) => query === "[data-generic-agent-front-face]" ? root : null,
  createElement: (tag) => node(tag),
};
assert.equal(renderPondGenericAgentFrontFace(doc), true);
assert.equal(selector.children.length, 3);
assert.equal(root.dataset.selectedAgentId, "toadaid.agent0");
assert.match(status.textContent, /frontend preview only/);
assert.match(status.textContent, /No connection opened/);
assert.equal(extensions.children.length, 2);
selector.value = "agent:community:sample-generic";
assert.equal(selector.listeners.change(), true);
assert.equal(root.dataset.selectedAgentId, "agent:community:sample-generic");
assert.match(status.textContent, /Community Scout/);
assert.match(status.textContent, /admission unknown/);

// 7. Shell and hygiene: additive panel, native labelled control, polite
// status, visible focus, no transport primitives, and generated parity wire.
const [html, css, ui, packageJson] = await Promise.all([
  readRepo("ui/pond-desktop.html"),
  readRepo("ui/pond-desktop.css"),
  readRepo("ui/pond-generic-agent-front-face.js"),
  readRepo("package.json"),
]);
assert.match(html, /data-generic-agent-front-face/);
assert.match(html, /label for="pond-generic-agent-select"/);
assert.match(html, /data-generic-agent-status aria-live="polite" aria-atomic="true"/);
assert.match(html, /src="pond-generic-agent-front-face\.js"/);
assert.match(css, /generic-agent-picker select:focus-visible/);
assert.match(css, /min-height: 44px/);
for (const forbidden of ["fetch(", "WebSocket", "localStorage", "sessionStorage"])
  assert.equal(ui.includes(forbidden), false, forbidden);
assert.match(packageJson, /test:stage-d-p25/);
assert.match(packageJson, /stage-d:render-generic-agent-front-face/);

console.log("POND_STAGE_DP25_GENERIC_AGENT_FRONT_FACE_SELFTEST_PASS · 7 blocks");
