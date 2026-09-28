import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

// Recompute the Stage D Agents record from the canonical D-P0 fixture chain
// over the D-P1 source-binding contract, then require exact parity with the
// committed generated artifact. Any fixture, contract, or record-module pick
// drift fails loudly here instead of surfacing in UI.
import { assessPondAgentPresenceSourceBinding } from "../src/contracts/pond-agent-presence-source-binding.ts";
import generated from "../ui/generated/pond-stage-d-agents-fixture.js";
import * as generatedModule from "../ui/generated/pond-stage-d-agents-fixture.js";

// ---------------------------------------------------------------------------
// Recomputed record over the directly-imported D-P0 fixture (it has zero
// value imports, so node strips its types and imports it directly).
// ---------------------------------------------------------------------------

import {
  stageDP0Agent0Record,
  stageDP0AgentPresenceProjection,
  stageDP0CommunityAgentSlotRecord,
  stageDP0PersonalMemoryBoundary,
  stageDP0ProjectAgentSlotRecord,
  stageDP0TradingDeskSourceContract,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";

const recomputedSourceBindingAssessment = assessPondAgentPresenceSourceBinding({
  sourceContractFixture: stageDP0TradingDeskSourceContract,
  projection: stageDP0AgentPresenceProjection,
});

const recomputedSourceBinding = Object.freeze({
  contractVersion: recomputedSourceBindingAssessment.contractVersion,
  sourceContractFixtureVersion:
    recomputedSourceBindingAssessment.sourceContractFixtureVersion,
  repository: stageDP0TradingDeskSourceContract.sourceContract.repository,
  boundSourceCommit:
    stageDP0TradingDeskSourceContract.sourceContract.boundSourceCommit,
  observedTools: Object.freeze([
    ...stageDP0TradingDeskSourceContract.sourceContract.observedTools,
  ]),
  sourcePosture: stageDP0TradingDeskSourceContract.sourceContract.sourcePosture,
  bindingState: recomputedSourceBindingAssessment.bindingState,
  reason: recomputedSourceBindingAssessment.reason,
  satisfiedChecks: Object.freeze([
    ...recomputedSourceBindingAssessment.satisfiedChecks,
  ]),
  unsatisfiedChecks: Object.freeze([
    ...recomputedSourceBindingAssessment.unsatisfiedChecks,
  ]),
  liveSourceContractVerifiedByReceiver:
    recomputedSourceBindingAssessment.liveSourceContractVerifiedByReceiver,
  presenceRecordsAcceptedAsLiveObservation:
    recomputedSourceBindingAssessment.presenceRecordsAcceptedAsLiveObservation,
  runtimeActivationPosture:
    recomputedSourceBindingAssessment.runtimeActivationPosture,
  authority: recomputedSourceBindingAssessment.authority,
});

const recomputedPrincipalBinding = Object.freeze({
  principalRef: stageDP0AgentPresenceProjection.localPrincipalBinding.principalRef,
  bindingState: stageDP0AgentPresenceProjection.localPrincipalBinding.bindingState,
  authenticationPerformed:
    stageDP0AgentPresenceProjection.localPrincipalBinding.authenticationPerformed,
  ceremonyPosture:
    stageDP0AgentPresenceProjection.localPrincipalBinding.ceremonyPosture,
  authority: "none",
});

const pickAgent = (agent) =>
  Object.freeze({
    agentRef: agent.agentRef,
    label: agent.label,
    profileClass: agent.profileClass,
    presenceStatus: agent.presenceStatus,
    transport: agent.transport.transport,
    transportIsAgentIdentity: agent.transport.transportIsAgentIdentity,
    transportEstablishesAdmission:
      agent.transport.transportEstablishesAdmission,
    liveConnectionPosture: agent.transport.liveConnectionPosture,
    runtimeFacts: Object.freeze(
      agent.runtimeFacts.map((fact) =>
        Object.freeze({
          factLabel: fact.factLabel,
          sourceTool: fact.sourceTool,
          observedValue: fact.observedValue,
          valuePosture: fact.valuePosture,
        }),
      ),
    ),
    identityClaimStatus: agent.identityClaim.claimStatus,
    identityClaimEvidencePosture: agent.identityClaim.evidencePosture,
    onchainIdentityIsPrincipalIdentity:
      agent.identityClaim.relationshipClaims.onchainIdentityIsPrincipalIdentity,
    relationshipState: Object.freeze({ ...agent.relationshipState }),
    personalMemoryBoundary: Object.freeze({ ...agent.personalMemoryBoundary }),
    authority: agent.authority,
  });

const recomputedAgents = Object.freeze([
  pickAgent(stageDP0Agent0Record),
  pickAgent(stageDP0CommunityAgentSlotRecord),
  pickAgent(stageDP0ProjectAgentSlotRecord),
]);

const allEightUnsatisfied = [
  "exact_source_contract_identity",
  "exact_secret_free_runtime_fact_inventory",
  "receiver_owned_presence_observation_channel",
  "runtime_facts_separated_from_personal_memory_channels",
  "identity_claim_evidence_independently_reproduced",
  "local_principal_binding_established_before_private_reads",
  "observed_identity_kept_separate_from_principal_id",
  "live_presence_observation_observed",
];

const recomputedAdmission = Object.freeze({
  contractVersion: "pond-agent-presence-admission-d-p0",
  admissionState: "insufficient_evidence",
  reason: "receiver_proof_incomplete",
  satisfiedChecks: Object.freeze([]),
  unsatisfiedChecks: Object.freeze([...allEightUnsatisfied]),
  observedPresenceAcceptedAsAuthentication: false,
  observedIdentityAcceptedAsPrincipalId: false,
  personalMemoryContentAdmitted: false,
  localPrincipalBindingEstablished: false,
  currentTruthAdmitted: false,
  runtimeActivationPosture: "not_included",
  authority: "none",
});

const recomputedDenialPosture = Object.freeze({
  rendererFailurePosture: "fail_closed_all_values_unavailable",
  fallbackRenderingForbidden: true,
  liveObservationPerformed: false,
  mutationPerformed: false,
  runtimeActivationPosture: "not_included",
  authority: "none",
});

const recomputedPersonalMemoryBoundary = Object.freeze({
  ...stageDP0PersonalMemoryBoundary,
});

const recomputed = Object.freeze({
  agentsRecordVersion: "pond-stage-d-agents-record-d-p1",
  authority: "none",
  presentationPosture: "fixture_rendered_presentation_only",
  mutationPosture: "none_read_only",
  truthPosture: "withheld_fixture_projection_only",
  sourceBinding: recomputedSourceBinding,
  principalBinding: recomputedPrincipalBinding,
  agents: recomputedAgents,
  admission: recomputedAdmission,
  denialPosture: recomputedDenialPosture,
  personalMemoryBoundary: recomputedPersonalMemoryBoundary,
});

// ---------------------------------------------------------------------------
// Block 1 — parity: default === named, and the committed artifact deep-equals
// the recomputed record.
// ---------------------------------------------------------------------------

assert.equal(generated, generatedModule.pondStageDAgentsRecord);
assert.deepStrictEqual(generated, recomputed);
assert.equal(generated.agentsRecordVersion, "pond-stage-d-agents-record-d-p1");

// ---------------------------------------------------------------------------
// Block 2 — source-binding classification: exact fixture → structural
// fixture binding with the refused tuple held; tampered inputs fail closed.
// ---------------------------------------------------------------------------

const exactAssessment = assessPondAgentPresenceSourceBinding({
  sourceContractFixture: stageDP0TradingDeskSourceContract,
  projection: stageDP0AgentPresenceProjection,
});
assert.equal(exactAssessment.bindingState, "fixture_bound_committed_source_contract");
assert.equal(
  exactAssessment.reason,
  "fixture_source_binding_structurally_admissible",
);
assert.deepEqual(exactAssessment.unsatisfiedChecks, []);
assert.deepEqual(exactAssessment.satisfiedChecks, [
  "exact_repository_identity",
  "exact_committed_source_commit_binding",
  "exact_observed_tool_inventory",
  "read_only_source_posture",
  "presence_records_sourced_from_bound_contract",
  "no_live_connection_in_binding",
]);
assert.equal(exactAssessment.liveSourceContractVerifiedByReceiver, false);
assert.equal(exactAssessment.presenceRecordsAcceptedAsLiveObservation, false);
assert.equal(exactAssessment.currentTruthAdmitted, false);
assert.equal(exactAssessment.runtimeActivationPosture, "not_included");
assert.equal(exactAssessment.authority, "none");

const tamperedProjection = (overrides) => ({
  ...stageDP0AgentPresenceProjection,
  observedAgents: [
    { ...stageDP0Agent0Record, ...overrides },
    stageDP0CommunityAgentSlotRecord,
    stageDP0ProjectAgentSlotRecord,
  ],
});

const bindingInvalids = [
  [
    "null source fixture",
    null,
    stageDP0AgentPresenceProjection,
    "source_contract_fixture_invalid",
  ],
  [
    "tampered commit",
    {
      ...stageDP0TradingDeskSourceContract,
      sourceContract: {
        ...stageDP0TradingDeskSourceContract.sourceContract,
        boundSourceCommit: "not-a-40-hex-commit-sha",
      },
    },
    stageDP0AgentPresenceProjection,
    "source_contract_fixture_invalid",
  ],
  [
    "invented observed tool",
    {
      ...stageDP0TradingDeskSourceContract,
      sourceContract: {
        ...stageDP0TradingDeskSourceContract.sourceContract,
        observedTools: ["runtime_status", "identity_status", "wallet_send"],
      },
    },
    stageDP0AgentPresenceProjection,
    "source_contract_fixture_invalid",
  ],
  [
    "live source posture",
    {
      ...stageDP0TradingDeskSourceContract,
      sourceContract: {
        ...stageDP0TradingDeskSourceContract.sourceContract,
        sourcePosture: "live_connection_established",
      },
    },
    stageDP0AgentPresenceProjection,
    "source_contract_fixture_invalid",
  ],
  [
    "live-connection key injected",
    {
      ...stageDP0TradingDeskSourceContract,
      sourceContract: {
        ...stageDP0TradingDeskSourceContract.sourceContract,
        connect: "wss://desk.example",
      },
    },
    stageDP0AgentPresenceProjection,
    "source_contract_fixture_invalid",
  ],
  [
    "null projection",
    stageDP0TradingDeskSourceContract,
    null,
    "projection_invalid",
  ],
  [
    "authority widened on Agent0",
    stageDP0TradingDeskSourceContract,
    tamperedProjection({ authority: "receiver" }),
    "projection_invalid",
  ],
  [
    "principal-shaped agentRef",
    stageDP0TradingDeskSourceContract,
    tamperedProjection({ agentRef: "principal:fixture:stage-d-p0:bogus" }),
    "projection_invalid",
  ],
  [
    "desk memory lane claimed admitted",
    stageDP0TradingDeskSourceContract,
    {
      ...stageDP0AgentPresenceProjection,
      personalMemoryBoundary: {
        ...stageDP0PersonalMemoryBoundary,
        deskMemoryLaneAdmitted: true,
      },
    },
    "projection_invalid",
  ],
  [
    "authentication claimed performed",
    stageDP0TradingDeskSourceContract,
    {
      ...stageDP0AgentPresenceProjection,
      localPrincipalBinding: {
        ...stageDP0AgentPresenceProjection.localPrincipalBinding,
        authenticationPerformed: true,
      },
    },
    "projection_invalid",
  ],
];
for (const [label, sourceFixture, projection, reason] of bindingInvalids) {
  const result = assessPondAgentPresenceSourceBinding({
    sourceContractFixture: sourceFixture,
    projection,
  });
  assert.equal(result.bindingState, "not_established", label);
  assert.equal(result.reason, reason, label);
  assert.equal(
    result.sourceContractFixtureVersion,
    reason === "source_contract_fixture_invalid"
      ? "invalid"
      : "pond-agent-presence-source-contract-d-p0",
    label,
  );
  assert.equal(result.satisfiedChecks.length, 0, label);
  assert.deepEqual(result.unsatisfiedChecks, allBindingChecks(), label);
  assert.equal(result.liveSourceContractVerifiedByReceiver, false, label);
  assert.equal(result.presenceRecordsAcceptedAsLiveObservation, false, label);
  assert.equal(result.currentTruthAdmitted, false, label);
  assert.equal(result.runtimeActivationPosture, "not_included", label);
  assert.equal(result.authority, "none", label);
}
function allBindingChecks() {
  return [
    "exact_repository_identity",
    "exact_committed_source_commit_binding",
    "exact_observed_tool_inventory",
    "read_only_source_posture",
    "presence_records_sourced_from_bound_contract",
    "no_live_connection_in_binding",
  ];
}

// ---------------------------------------------------------------------------
// Block 3 — record invariants: postures, Agent0 exact shape, inert slots,
// admission all-unsatisfied, denied postures.
// ---------------------------------------------------------------------------

assert.equal(generated.authority, "none");
assert.equal(generated.presentationPosture, "fixture_rendered_presentation_only");
assert.equal(generated.mutationPosture, "none_read_only");
assert.equal(generated.truthPosture, "withheld_fixture_projection_only");
assert.deepEqual(generated.sourceBinding, {
  contractVersion: "pond-agent-presence-source-binding-d-p1",
  sourceContractFixtureVersion: "pond-agent-presence-source-contract-d-p0",
  repository: "trading-desk",
  boundSourceCommit: "57b5c8b966d3eb58cf239b2f3f1598f09f24b296",
  observedTools: ["runtime_status", "identity_status"],
  sourcePosture: "read_only_tool_contract_only_no_live_connection",
  bindingState: "fixture_bound_committed_source_contract",
  reason: "fixture_source_binding_structurally_admissible",
  satisfiedChecks: allBindingChecks(),
  unsatisfiedChecks: [],
  liveSourceContractVerifiedByReceiver: false,
  presenceRecordsAcceptedAsLiveObservation: false,
  runtimeActivationPosture: "not_included",
  authority: "none",
});
assert.deepEqual(generated.principalBinding, {
  principalRef: "principal:fixture:stage-d-p0:local-principal",
  bindingState: "fixture_local_projection",
  authenticationPerformed: false,
  ceremonyPosture: "not_defined_this_cut",
  authority: "none",
});
assert.equal(generated.agents.length, 3);
const agent0 = generated.agents[0];
assert.equal(agent0.agentRef, "agent:fixture:stage-d-p0:trading-desk-agent0");
assert.equal(agent0.label, "Trading Desk (Agent0)");
assert.equal(agent0.profileClass, "personal_agent");
assert.equal(agent0.presenceStatus, "fixture_observed_not_live");
assert.equal(agent0.transport, "telegram");
assert.equal(agent0.transportIsAgentIdentity, false);
assert.equal(agent0.transportEstablishesAdmission, false);
assert.equal(agent0.liveConnectionPosture, "not_included");
assert.deepEqual(
  agent0.runtimeFacts.map((fact) => fact.factLabel),
  [
    "brain",
    "provider",
    "model",
    "execution",
    "trading_state",
    "hands",
    "doctor_cheap_check",
  ],
);
assert.equal(agent0.runtimeFacts[0].observedValue, "glm");
assert.equal(agent0.runtimeFacts[3].observedValue, "dry_run");
assert.equal(agent0.identityClaimStatus, "not_observed");
assert.equal(agent0.onchainIdentityIsPrincipalIdentity, false);
assert.deepEqual(agent0.relationshipState, {
  membership: "not_established",
  agentAdmission: "not_established",
  scopeBinding: "not_established",
  delegatedAuthority: "not_established",
});
for (const slot of [generated.agents[1], generated.agents[2]]) {
  assert.equal(slot.presenceStatus, "not_observed");
  assert.equal(slot.runtimeFacts.length, 0);
  assert.equal(slot.authority, "none");
}
assert.deepEqual(generated.admission, {
  contractVersion: "pond-agent-presence-admission-d-p0",
  admissionState: "insufficient_evidence",
  reason: "receiver_proof_incomplete",
  satisfiedChecks: [],
  unsatisfiedChecks: [...allEightUnsatisfied],
  observedPresenceAcceptedAsAuthentication: false,
  observedIdentityAcceptedAsPrincipalId: false,
  personalMemoryContentAdmitted: false,
  localPrincipalBindingEstablished: false,
  currentTruthAdmitted: false,
  runtimeActivationPosture: "not_included",
  authority: "none",
});
assert.deepEqual(generated.denialPosture, recomputedDenialPosture);

// ---------------------------------------------------------------------------
// Block 4 — memory-lane exclusion everywhere in the record.
// ---------------------------------------------------------------------------

for (const boundary of [
  generated.personalMemoryBoundary,
  ...generated.agents.map((agent) => agent.personalMemoryBoundary),
]) {
  assert.deepEqual(boundary, {
    deskJournalLaneAdmitted: false,
    deskMemoryLaneAdmitted: false,
    deskNarrativeLaneAdmitted: false,
    deskTranscriptLaneAdmitted: false,
  });
}
const forbiddenKeys = [
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "execute",
  "canExecute",
  "mayMutate",
  "approve",
  "grant",
  "apiKey",
  "secret",
  "token",
  "PrincipalId",
  "principalId",
  "connect",
  "listen",
  "poll",
  "subscribe",
];
const collectKeys = (value, seen = new Set()) => {
  if (value === null || typeof value !== "object" || seen.has(value)) return seen;
  seen.add(value);
  for (const key of Object.keys(value)) {
    if (forbiddenKeys.includes(key)) {
      throw new Error(`forbidden key present in record: ${key}`);
    }
    collectKeys(value[key], seen);
  }
  return seen;
};
collectKeys(recomputed);

// ---------------------------------------------------------------------------
// Block 5 — artifact hygiene and provenance stamp.
// ---------------------------------------------------------------------------

const bundleText = await readFile(
  new URL("../ui/generated/pond-stage-d-agents-fixture.js", import.meta.url),
  "utf8",
);
assert.equal(bundleText.endsWith("\n"), true);
assert.equal(/\n\n$/.test(bundleText), false);
assert.equal(/[ \t]+\n/.test(bundleText), false);
assert.equal(/console\./.test(bundleText), false);

const provenance = JSON.parse(
  await readFile(
    new URL("../ui/generated/pond-stage-d-agents-fixture-provenance.json", import.meta.url),
    "utf8",
  ),
);
assert.equal(provenance.record, "src/agents/pond-stage-d-agents-record.ts");
assert.deepEqual(provenance.inputs, [
  "src/fixtures/stage-d-p0-agent-presence.ts",
  "src/contracts/pond-agent-presence-source-binding.ts",
]);
assert.deepEqual(provenance.renderedStages, ["D-P0", "D-P1"]);
assert.deepEqual(provenance.contractVersions, [
  "pond-agent-presence-admission-d-p0",
  "pond-agent-presence-projection-d-p0",
  "pond-agent-presence-source-binding-d-p1",
  "pond-agent-presence-source-contract-d-p0",
  "pond-stage-d-agents-record-d-p1",
]);
assert.equal(provenance.bundler.name, "esbuild");
assert.equal(typeof provenance.bundler.version, "string");
assert.equal(provenance.authority, "none");
assert.equal(provenance.mutationPosture, "none_read_only");
assert.equal(provenance.runtimeActivationPosture, "not_included");
assert.equal("timestamp" in provenance, false);

// ---------------------------------------------------------------------------
// Block 6 — freeze + JSON round-trip.
// ---------------------------------------------------------------------------

assert.equal(Object.isFrozen(recomputed), true);
assert.deepEqual(JSON.parse(JSON.stringify(recomputed)), JSON.parse(JSON.stringify(generated)));

console.log("POND_STAGE_DP1_AGENTS_VIEW_FIXTURE_SELFTEST_PASS");