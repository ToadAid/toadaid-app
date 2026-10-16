#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  POND_STAGE_DP32_ADMISSION_STATES,
  POND_STAGE_DP32_DOCKING_PROFILES,
  POND_STAGE_DP32_EVIDENCE_CLASSES,
  POND_STAGE_DP32_SEQUENCE_STEPS,
  assessPondAgentDockingBrief,
} from "../src/contracts/pond-agent-docking-lane.ts";
import {
  stageDP32AgentDockingBriefs,
  stageDP32AgentDockingLaneMatrix,
} from "../src/fixtures/stage-d-p32-agent-docking-lane.ts";
import generatedRecord, {
  assessPondAgentDockingBrief as generatedAssessor,
} from "../ui/generated/pond-stage-d-agent-docking-lane.js";
import { renderPondAgentDockingLane } from
  "../ui/pond-agent-docking-lane.js";

const readRepo = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const clone = (value) => JSON.parse(JSON.stringify(value));
const effectCeilings = [
  "admissionDecisionMade",
  "admissionRecordIssued",
  "evidenceVerified",
  "agentIdIssued",
  "scopeRelationshipEstablished",
  "standingIntakeOpened",
  "membershipCreated",
  "grantIssued",
  "capabilityAuthorized",
  "credentialStoredOrProjected",
  "messageComposedOrDelivered",
  "agentInvoked",
];

const assertCeiling = (assessment) => {
  for (const key of effectCeilings) assert.equal(assessment[key], false, key);
  assert.equal(assessment.runtimeActivationPosture, "not_included");
  assert.equal(assessment.authority, "none");
  assert.equal(assessment.dockingChangesPresentationOnly, true);
};

// 1. Two fixture docking briefs pass through the same presentation seam:
// the admitted-nowhere stranger carried over from D-P25, and a community
// profile instance whose admission is simply not established.
assert.equal(stageDP32AgentDockingLaneMatrix.length, 2);
assert.deepEqual(
  stageDP32AgentDockingLaneMatrix.map((entry) => entry.fixtureLabel),
  ["dock-brief-agent:community:sample-generic",
    "dock-brief-agent:project:sample-loremason"],
);
assert.deepEqual(
  stageDP32AgentDockingLaneMatrix.map((entry) => entry.assessment.presentedBrief.displayName),
  ["Community Scout", "Lore Mason"],
);
assert.deepEqual(
  stageDP32AgentDockingBriefs.map((brief) => [brief.profile, brief.admissionState]),
  [["remote_external_agent", "unknown"],
    ["community_agent", "not_established"]],
);
assert.deepEqual(
  stageDP32AgentDockingBriefs[0].presentedEvidence.map((entry) => entry.evidenceClass),
  ["a2a_agent_card", "deployment_identity"],
);
assert.deepEqual(
  stageDP32AgentDockingBriefs[1].presentedEvidence.map((entry) => entry.evidenceClass),
  ["mcp_or_service_identity"],
);
for (const entry of stageDP32AgentDockingLaneMatrix) {
  const assessment = entry.assessment;
  assert.equal(assessment.dockingLaneState, "agent_docking_lane_presented_fixture_only");
  assert.equal(
    assessment.reason,
    "agent_docking_lane_fixture_projection_satisfied",
  );
  assert.deepEqual(
    assessment.sequence.map((step) => [step.stepId, step.stepPosture]),
    POND_STAGE_DP32_SEQUENCE_STEPS.map((stepId) => [stepId, "declared_not_performed"]),
  );
  for (const entry2 of assessment.presentedEvidence) {
    assert.equal(entry2.verificationBasis, "declared_not_verified");
  }
  assertCeiling(assessment);
}

// 2. Brief validity is exact-shape and fail-closed: extra fields, planted
// keys, unknown evidence classes, duplicates, wrong versions and postures
// all refuse the whole brief and echo nothing.
const validBrief = stageDP32AgentDockingBriefs[0];
const invalidForms = [
  clone(validBrief),
  { brief: { ...clone(validBrief), credential: "forbidden" } },
  { brief: { ...clone(validBrief), authority: "some" } },
  {
    brief: {
      ...clone(validBrief),
      presentedEvidence: [
        { ...clone(validBrief.presentedEvidence[0]), evidenceClass: "friend_vouch" },
      ],
    },
  },
  { brief: { ...clone(validBrief), presentedEvidence: [clone(validBrief.presentedEvidence[0]), clone(validBrief.presentedEvidence[0])] } },
  { brief: { ...clone(validBrief), agentId: "agent:community:sample-generic", admissionState: "member" } },
  { brief: { ...clone(validBrief), profile: "personal_agent" } },
  { brief: { ...clone(validBrief), contractVersion: "pond-agent-docking-lane-d-p31" } },
  { brief: { ...clone(validBrief), dockingPosture: "dock_operation_available" } },
  { brief: { ...clone(validBrief), presentedEvidence: [...clone(validBrief.presentedEvidence), clone(validBrief.presentedEvidence[0])] } },
  { brief: { ...clone(validBrief), declaredCapabilityRefs: ["a", "a"] } },
  { brief: {} },
  { other: true },
  { brief: null },
];
for (const input of invalidForms.slice(1)) {
  const assessment = assessPondAgentDockingBrief(input);
  assert.equal(assessment.dockingLaneState, "agent_docking_lane_refused", input);
  assert.equal(assessment.reason, "docking_brief_input_invalid");
  assert.equal(assessment.presentedBrief, null);
  assert.deepEqual(assessment.sequence, []);
  assertCeiling(assessment);
}
// A planted field that is itself never presented: the refusal path never
// mirrors the dossier back, so the planted credential VALUE leaves no trace
// (the word "credential" legitimately appears in the effect-ceiling key).
const planted = assessPondAgentDockingBrief(invalidForms[2]);
assert.equal(JSON.stringify(planted).includes("forbidden"), false);

// 3. Vocabularies stay frozen at canonical shape: two admission-law
// profiles, the eight canonical evidence classes, four admission states,
// six sequence steps, and the standing walls.
assert.deepEqual(POND_STAGE_DP32_DOCKING_PROFILES, ["community_agent", "remote_external_agent"]);
assert.deepEqual(POND_STAGE_DP32_EVIDENCE_CLASSES, [
  "a2a_agent_card",
  "cryptographic_signature",
  "mcp_or_service_identity",
  "wallet_address",
  "erc8004_identity",
  "dns_or_domain_binding",
  "provider_identity",
  "deployment_identity",
]);
assert.deepEqual(POND_STAGE_DP32_ADMISSION_STATES, ["not_established", "active", "revoked", "unknown"]);
assert.deepEqual(POND_STAGE_DP32_SEQUENCE_STEPS, [
  "external_identity_evidence",
  "evidence_verification",
  "local_agentid_and_binding_decision",
  "explicit_scope_relationship",
  "capability_eligibility",
  "separate_current_capability_authorization",
]);
const walls = stageDP32AgentDockingLaneMatrix[0].assessment.walls;
assert.match(walls.whoMayAdmitPosture, /human_governing_authority_of_the_relevant_scope/);
assert.match(walls.whoMayAdmitPosture, /no_agent_provider_transport_message_attestation_or_automated_rule/);
assert.match(walls.admissionDecisionPosture, /human_sovereign_decision_required/);
assert.match(walls.standingIntakePosture, /refused_no_standing_intake_path_for_an_unadmitted_sender/);
assert.match(walls.standingIntakePosture, /the_default_not_a_configurable_choice/);
assert.match(walls.profileInterlockPosture, /community_agent_profile_instance/);
assert.match(walls.consequencePathPosture, /identity_admitted_scope_grant_policy_approval_sequence_unchanged_and_untouched/);
assert.match(walls.revocationEstopPosture, /dominant_across_providers_and_transports/);

// 4. The generated browser record stays version-tied and exposes no
// transport, admission, send, or invoke surface.
assert.equal(generatedRecord.contractVersion, "pond-agent-docking-lane-d-p32");
assert.equal(generatedRecord.briefs.length, 2);
assert.equal(generatedRecord.authority, "none");
assert.equal(generatedRecord.runtimeActivationPosture, "not_included");
assert.equal(typeof generatedAssessor, "function");
assert.equal(generatedAssessor({ brief: generatedRecord.briefs[0] }).dockingLaneState === stageDP32AgentDockingLaneMatrix[0].assessment.dockingLaneState, true);
for (const forbidden of ["admit", "verify", "openIntake", "connect", "send", "deliver", "invoke", "grant", "join"]) {
  assert.equal(Object.hasOwn(generatedRecord, forbidden), false, forbidden);
}

// 5. Drive the real renderer with a tiny DOM: two fill-once brief panels,
// evidence and sequence as text only, walls filled, fail-closed posture on a
// version mismatch, and a refused panel when a committed brief is invalid.
const node = (tag = "div") => ({
  tag,
  dataset: {},
  classList: { classes: new Set(), add(value) { this.classes.add(value); } },
  children: [],
  textContent: "",
  value: "",
  disabled: false,
  append(...children) { this.children.push(...children); },
  replaceChildren(...children) { this.children = children; },
  addEventListener() {},
});
const briefsHost = node("div");
const wallFacts = node("dl");
const standingLine = node("p");
const nodes = new Map([
  ["[data-docking-briefs]", briefsHost],
  ["[data-docking-wall-facts]", wallFacts],
  ["[data-docking-standing-line]", standingLine],
]);
const root = node("section");
root.dataset.dockingRecordVersion = "pond-agent-docking-lane-d-p32";
root.querySelector = (query) => nodes.get(query) ?? null;
const doc = {
  querySelector: (query) => query === "[data-agent-docking-lane]" ? root : null,
  createElement: (tag) => node(tag),
};
assert.equal(renderPondAgentDockingLane(doc), true);
assert.equal(briefsHost.children.length, 2);
assert.equal(root.dataset.dockingRenderPosture, "rendered_fixture_only");
assert.equal(root.dataset.authority, "none");
const firstPanel = briefsHost.children[0];
assert.equal(firstPanel.dataset.dockingBriefState, "presented_fixture_only");
assert.equal(firstPanel.dataset.admissionState, "unknown");
const renderedText = JSON.stringify(firstPanel);
assert.match(renderedText, /A2A AgentCard/);
assert.match(renderedText, /declared, not verified/);
assert.match(renderedText, /declared, not performed/);
assert.match(renderedText, /separate current capability authorization/);
assert.equal(briefsHost.children[1].dataset.admissionState, "not_established");
assert.equal(wallFacts.children.length, 6);
assert.match(standingLine.textContent, /presents the admission ceremony only/);
assert.match(standingLine.textContent, /no intake channel exists/);

// Fail-closed: a record-version tie break refuses everything.
const wrongVersionDoc = {
  ...doc,
  querySelector: (query) => query === "[data-agent-docking-lane]" ? root : null,
};
root.dataset.dockingRecordVersion = "pond-agent-docking-lane-d-p00";
assert.equal(renderPondAgentDockingLane(wrongVersionDoc), false);
assert.equal(root.dataset.dockingRenderPosture, "fail_closed");
assert.match(standingLine.textContent, /projection record failed validation/);

// A committed brief that stopped validating renders a refused panel while
// the rest of the lane stays presented.
const mutatedRecord = {
  ...clone(generatedRecord),
  briefs: [clone(generatedRecord.briefs[0]), "garbage"],
};
root.dataset.dockingRecordVersion = "pond-agent-docking-lane-d-p32";
const mutatedNodes = new Map([
  ["[data-docking-briefs]", node("div")],
  ["[data-docking-wall-facts]", wallFacts],
  ["[data-docking-standing-line]", standingLine],
]);
root.querySelector = (query) => mutatedNodes.get(query) ?? null;
assert.equal(renderPondAgentDockingLane(doc, mutatedRecord), true);
assert.equal(mutatedNodes.get("[data-docking-briefs]").children[0].dataset.dockingBriefState, "presented_fixture_only");
assert.equal(mutatedNodes.get("[data-docking-briefs]").children[1].classList.classes.has("docking-brief-refused"), true);

// 6. Shell and hygiene: additive panel placed after the front face and
// before the stage boundary note, script before the shell, no transport
// primitives anywhere, and the 10px floor holds inside the D-P32 block.
const [html, css, ui, packageJson] = await Promise.all([
  readRepo("ui/pond-desktop.html"),
  readRepo("ui/pond-desktop.css"),
  readRepo("ui/pond-agent-docking-lane.js"),
  readRepo("package.json"),
]);
await readRepo("ui/generated/pond-stage-d-agent-docking-lane.js");
await readRepo("ui/generated/pond-stage-d-agent-docking-lane-provenance.json");
const frontFaceAt = html.indexOf("data-generic-agent-front-face");
const dockLaneAt = html.indexOf("data-agent-docking-lane");
const boundaryAt = html.indexOf("world-boundary-note", dockLaneAt);
const shellScriptAt = html.indexOf('src="pond-shell.js"');
const laneScriptAt = html.indexOf('src="pond-agent-docking-lane.js"');
assert.ok(frontFaceAt > 0 && dockLaneAt > frontFaceAt, "the docking bay lands after the front face");
assert.ok(dockLaneAt < boundaryAt, "the stage boundary note still closes the view");
assert.ok(laneScriptAt > 0 && laneScriptAt < shellScriptAt, "the lane loads before the shell");
assert.match(html, /data-docking-record-version="pond-agent-docking-lane-d-p32"/);
assert.match(html, /data-agent-docking-lane/);
assert.match(html, /data-docking-briefs/);
assert.match(css, /\.agents-stage \.agent-docking-lane/);
assert.equal(css.includes("agent-docking-lane {"), false, "the dock styles stay agents-stage scoped");
for (const forbidden of ["fetch(", "WebSocket", "localStorage", "sessionStorage", "innerHTML"]) {
  assert.equal(ui.includes(forbidden), false, forbidden);
}
const block = css.slice(css.indexOf("Stage D-P32"));
for (const size of [...block.matchAll(/font-size: (\d+(?:\.\d+)?)px/g)].map((m) => Number.parseFloat(m[1]))) {
  assert.ok(size >= 10, `the D-P32 block must keep the ladder floor: found ${size}`);
}

// 7. Wiring: package scripts, the render-check determinism command, and CI
// steps after D-P31 in both verify jobs.
assert.match(packageJson, /"test:stage-d-p32": "node scripts\/pond-agent-docking-lane-selftest\.mjs"/);
assert.match(packageJson, /"stage-d:render-agent-docking-lane": "node scripts\/render-stage-d-agent-docking-lane\.mjs"/);
const ci = await readRepo(".github/workflows/ci.yml");
const steps = (ci.match(/Verify Stage D-P32 agent docking lane/g) || []).length;
assert.equal(steps, 2, "the D-P32 step must run in both verify jobs");
assert.match(
  ci,
  /Verify Stage D-P31 chat surface room[\s\S]{0,600}Verify Stage D-P32 agent docking lane[\s\S]{0,300}Check committed diff whitespace/,
  "the D-P32 step must land after D-P31 in lane order",
);

console.log("POND_STAGE_DP32_AGENT_DOCKING_LANE_SELFTEST_PASS · 7 blocks");