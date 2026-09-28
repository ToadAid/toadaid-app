import assert from "node:assert/strict";

import { assessPondAgentPresenceAdmission } from "../src/contracts/pond-agent-presence-projection.ts";
import {
  stageDP0Agent0Record,
  stageDP0Agent0RuntimeFacts,
  stageDP0AgentPresenceProjection,
  stageDP0CommunityAgentSlotRecord,
  stageDP0PersonalMemoryBoundary,
  stageDP0ProjectAgentSlotRecord,
  stageDP0TradingDeskSourceCommit,
  stageDP0TradingDeskSourceContract,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";

// ---------------------------------------------------------------------------
// Receiver observation vocabulary. The all-unsatisfied baseline is the honest
// state of this cut: Pond has observed nothing through a Pond-owned channel.
// ---------------------------------------------------------------------------

const allSatisfiedObservation = {
  sourceContractIdentityMatch: "exact_source_contract_match",
  runtimeFactInventoryMatch: "exact_seven_fact_inventory_match",
  presenceObservationChannel: "receiver_owned_channel_observed",
  runtimeFactChannelSeparation: "runtime_facts_channel_separated",
  identityClaimReproduction: "evidence_independently_reproduced",
  principalBindingEstablished: "receiver_authenticated_local_binding",
  identitySeparationFromPrincipal: "receiver_verified_identity_separation",
  liveObservation: "observed",
};

const baselineObservation = {
  sourceContractIdentityMatch: "not_observed",
  runtimeFactInventoryMatch: "not_observed",
  presenceObservationChannel: "not_observed",
  runtimeFactChannelSeparation: "not_observed",
  identityClaimReproduction: "not_observed",
  principalBindingEstablished: "not_established",
  identitySeparationFromPrincipal: "not_observed",
  liveObservation: "not_performed",
};

const allChecksInOrder = [
  "exact_source_contract_identity",
  "exact_secret_free_runtime_fact_inventory",
  "receiver_owned_presence_observation_channel",
  "runtime_facts_separated_from_personal_memory_channels",
  "identity_claim_evidence_independently_reproduced",
  "local_principal_binding_established_before_private_reads",
  "observed_identity_kept_separate_from_principal_id",
  "live_presence_observation_observed",
];

const assess = (projection, receiverObservation = baselineObservation) =>
  assessPondAgentPresenceAdmission({ projection, receiverObservation });

const assertRefusedTuple = (result) => {
  assert.equal(result.observedPresenceAcceptedAsAuthentication, false);
  assert.equal(result.observedIdentityAcceptedAsPrincipalId, false);
  assert.equal(result.personalMemoryContentAdmitted, false);
  assert.equal(result.localPrincipalBindingEstablished, false);
  assert.equal(result.currentTruthAdmitted, false);
  assert.equal(result.runtimeActivationPosture, "not_included");
  assert.equal(result.authority, "none");
};

// ---------------------------------------------------------------------------
// Block 1 — default fixture admission stays refused with all eight checks
// unsatisfied, in the canonical order.
// ---------------------------------------------------------------------------

const defaultAssessment = assess(stageDP0AgentPresenceProjection);
assert.equal(defaultAssessment.admissionState, "insufficient_evidence");
assert.equal(defaultAssessment.reason, "receiver_proof_incomplete");
assert.equal(defaultAssessment.satisfiedChecks.length, 0);
assert.deepEqual(defaultAssessment.unsatisfiedChecks, allChecksInOrder);
assert.equal(
  defaultAssessment.projectionContractVersion,
  "pond-agent-presence-projection-d-p0",
);

// ---------------------------------------------------------------------------
// Block 2 — flipping each receiver field independently satisfies exactly the
// check it names.
// ---------------------------------------------------------------------------

const fieldToCheck = [
  ["sourceContractIdentityMatch", "exact_source_contract_identity"],
  ["runtimeFactInventoryMatch", "exact_secret_free_runtime_fact_inventory"],
  ["presenceObservationChannel", "receiver_owned_presence_observation_channel"],
  [
    "runtimeFactChannelSeparation",
    "runtime_facts_separated_from_personal_memory_channels",
  ],
  [
    "identityClaimReproduction",
    "identity_claim_evidence_independently_reproduced",
  ],
  [
    "principalBindingEstablished",
    "local_principal_binding_established_before_private_reads",
  ],
  [
    "identitySeparationFromPrincipal",
    "observed_identity_kept_separate_from_principal_id",
  ],
  ["liveObservation", "live_presence_observation_observed"],
];
const unmetFieldByCheck = {
  exact_source_contract_identity: "sourceContractIdentityMatch",
  exact_secret_free_runtime_fact_inventory: "runtimeFactInventoryMatch",
  receiver_owned_presence_observation_channel: "presenceObservationChannel",
  runtime_facts_separated_from_personal_memory_channels:
    "runtimeFactChannelSeparation",
  identity_claim_evidence_independently_reproduced:
    "identityClaimReproduction",
  local_principal_binding_established_before_private_reads:
    "principalBindingEstablished",
  observed_identity_kept_separate_from_principal_id:
    "identitySeparationFromPrincipal",
  live_presence_observation_observed: "liveObservation",
};
const singlySatisfied = fieldToCheck.map(([field, check]) => {
  const observation = {
    ...allSatisfiedObservation,
    [field]: baselineObservation[field],
  };
  const result = assess(stageDP0AgentPresenceProjection, observation);
  assert.equal(result.reason, "receiver_proof_incomplete");
  assert.deepEqual(result.unsatisfiedChecks, [check]);
  assert.equal(result.satisfiedChecks.length, 7);
  return result;
});

// ---------------------------------------------------------------------------
// Block 3 — the fully satisfied fixture observation is structurally
// admissible, and the refused tuple still holds.
// ---------------------------------------------------------------------------

const fullySatisfied = assess(
  stageDP0AgentPresenceProjection,
  allSatisfiedObservation,
);
assert.equal(fullySatisfied.admissionState, "structurally_admissible_fixture");
assert.equal(fullySatisfied.reason, "all_required_fixture_checks_satisfied");
assert.deepEqual(fullySatisfied.satisfiedChecks, allChecksInOrder);
assert.deepEqual(fullySatisfied.unsatisfiedChecks, []);
assertRefusedTuple(fullySatisfied);

// ---------------------------------------------------------------------------
// Blocks 4-5 — fail-closed invalids.
// ---------------------------------------------------------------------------

const tamperedAgent0 = (overrides) => ({
  ...stageDP0AgentPresenceProjection,
  observedAgents: [
    { ...stageDP0Agent0Record, ...overrides },
    stageDP0CommunityAgentSlotRecord,
    stageDP0ProjectAgentSlotRecord,
  ],
});

const projectionInvalids = [
  ["null projection", null],
  [
    "bad contractVersion",
    { ...stageDP0AgentPresenceProjection, contractVersion: "d-p1" },
  ],
  [
    "journal key injected into Agent0 record",
    tamperedAgent0({ journal: "desk journal lane" }),
  ],
  [
    "memory key injected into local binding",
    {
      ...stageDP0AgentPresenceProjection,
      localPrincipalBinding: {
        ...stageDP0AgentPresenceProjection.localPrincipalBinding,
        memory: "desk memory lane",
      },
    },
  ],
  [
    "onchain identity claimed as principal identity",
    tamperedAgent0({
      identityClaim: {
        ...stageDP0Agent0Record.identityClaim,
        relationshipClaims: {
          onchainIdentityIsPrincipalIdentity: true,
          onchainIdentityEstablishesLocalAdmission: false,
          onchainIdentityEstablishesAuthority: false,
        },
      },
    }),
  ],
  [
    "principal-shaped agentRef",
    tamperedAgent0({ agentRef: "principal:fixture:stage-d-p0:bogus" }),
  ],
  [
    "invented profileClass",
    tamperedAgent0({ profileClass: "worker_agent" }),
  ],
  [
    "authority widened on projection",
    { ...stageDP0AgentPresenceProjection, authority: "receiver" },
  ],
  [
    "transport claimed as agent identity",
    tamperedAgent0({
      transport: { ...stageDP0Agent0Record.transport, transportIsAgentIdentity: true },
    }),
  ],
  [
    "desk narrative lane claimed admitted",
    tamperedAgent0({
      personalMemoryBoundary: {
        ...stageDP0PersonalMemoryBoundary,
        deskNarrativeLaneAdmitted: true,
      },
    }),
  ],
];
for (const [label, projection] of projectionInvalids) {
  const result = assess(projection, allSatisfiedObservation);
  assert.equal(result.admissionState, "insufficient_evidence", label);
  assert.equal(result.reason, "presence_projection_invalid", label);
  assert.equal(result.projectionContractVersion, "invalid", label);
  assert.deepEqual(result.unsatisfiedChecks, allChecksInOrder, label);
  assertRefusedTuple(result);
}

const observationInvalids = [
  ["null observation", null],
  [
    "producer-authored identity separation claim",
    {
      ...allSatisfiedObservation,
      identitySeparationFromPrincipal:
        "identity_separation_asserted_by_producer",
    },
  ],
  [
    "invented principal binding literal",
    {
      ...allSatisfiedObservation,
      principalBindingEstablished: "binding_asserted_by_producer",
    },
  ],
  [
    "live connection asserted without observation",
    { ...allSatisfiedObservation, liveObservation: "connected" },
  ],
];
for (const [label, observation] of observationInvalids) {
  const result = assess(stageDP0AgentPresenceProjection, observation);
  assert.equal(result.admissionState, "insufficient_evidence", label);
  assert.equal(result.reason, "admission_observation_invalid", label);
  assert.equal(
    result.projectionContractVersion,
    "pond-agent-presence-projection-d-p0",
    label,
  );
  assert.deepEqual(result.unsatisfiedChecks, allChecksInOrder, label);
  assertRefusedTuple(result);
}

// ---------------------------------------------------------------------------
// Block 6 — every assessment in this run is frozen, as are its check arrays.
// ---------------------------------------------------------------------------

for (const result of [defaultAssessment, ...singlySatisfied, fullySatisfied]) {
  assert.equal(Object.isFrozen(result), true);
  assert.equal(Object.isFrozen(result.satisfiedChecks), true);
  assert.equal(Object.isFrozen(result.unsatisfiedChecks), true);
}

// ---------------------------------------------------------------------------
// Blocks 7-13 — fixture truths.
// ---------------------------------------------------------------------------

// Block 7: Agent0 exact keys, ref, class, and status.
assert.deepEqual(Object.keys(stageDP0Agent0Record).sort(), [
  "agentRef",
  "authority",
  "identityClaim",
  "label",
  "observedAt",
  "personalMemoryBoundary",
  "presenceStatus",
  "profileClass",
  "relationshipState",
  "runtimeFacts",
  "transport",
]);
assert.equal(stageDP0Agent0Record.agentRef, "agent:fixture:stage-d-p0:trading-desk-agent0");
assert.equal(stageDP0Agent0Record.label, "Trading Desk (Agent0)");
assert.equal(stageDP0Agent0Record.profileClass, "personal_agent");
assert.equal(stageDP0Agent0Record.presenceStatus, "fixture_observed_not_live");
assert.equal(stageDP0Agent0Record.authority, "none");

// Block 8: the identity-claim vocabulary is bound but never observed, and no
// VERIFIED ERC-8004 evidence is fabricated.
assert.equal(stageDP0Agent0Record.identityClaim.claimStatus, "not_observed");
assert.deepEqual(stageDP0Agent0Record.identityClaim.evidence, {
  chainIdObserved: null,
  registryAddress: null,
  agentId: null,
  ownerObserved: null,
  blockTag: null,
});
assert.equal(
  stageDP0Agent0Record.identityClaim.evidencePosture,
  "observed_evidence_only_no_local_authority",
);

// Block 9: exactly the seven runtime_status labels in tool order, with
// brain/execution transcribed from the source contract and the rest honestly
// not observed.
assert.deepEqual(
  stageDP0Agent0RuntimeFacts.map((fact) => fact.factLabel),
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
assert.equal(stageDP0Agent0RuntimeFacts[0].observedValue, "glm");
assert.equal(stageDP0Agent0RuntimeFacts[0].valuePosture, "transcribed_from_source_contract");
assert.equal(stageDP0Agent0RuntimeFacts[3].observedValue, "dry_run");
assert.equal(stageDP0Agent0RuntimeFacts[3].valuePosture, "transcribed_from_source_contract");
for (const index of [1, 2, 4, 5, 6]) {
  assert.equal(stageDP0Agent0RuntimeFacts[index].observedValue, null);
  assert.equal(stageDP0Agent0RuntimeFacts[index].valuePosture, "not_observed");
}

// Block 10: the community and project relationship slots stay inert.
assert.equal(stageDP0CommunityAgentSlotRecord.presenceStatus, "not_observed");
assert.equal(stageDP0CommunityAgentSlotRecord.runtimeFacts.length, 0);
assert.equal(stageDP0ProjectAgentSlotRecord.presenceStatus, "not_observed");
assert.equal(stageDP0ProjectAgentSlotRecord.runtimeFacts.length, 0);
assert.deepEqual(stageDP0ProjectAgentSlotRecord.relationshipState, {
  membership: "not_established",
  agentAdmission: "not_established",
  scopeBinding: "not_established",
  delegatedAuthority: "not_established",
});
assert.equal(stageDP0AgentPresenceProjection.communityRelationshipState, "not_established");
assert.equal(stageDP0AgentPresenceProjection.projectRelationshipState, "not_established");

// Block 11: the local principal binding is a fixture projection only —
// never authenticated, ceremony not defined this cut.
assert.deepEqual(stageDP0AgentPresenceProjection.localPrincipalBinding, {
  principalRef: "principal:fixture:stage-d-p0:local-principal",
  bindingState: "fixture_local_projection",
  authenticationPerformed: false,
  ceremonyPosture: "not_defined_this_cut",
});

// Block 12: no desk personal-memory lane is admitted anywhere, and no
// forbidden key exists anywhere in the frozen fixture.
for (const boundary of [
  stageDP0PersonalMemoryBoundary,
  stageDP0Agent0Record.personalMemoryBoundary,
  stageDP0CommunityAgentSlotRecord.personalMemoryBoundary,
  stageDP0ProjectAgentSlotRecord.personalMemoryBoundary,
  stageDP0AgentPresenceProjection.personalMemoryBoundary,
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
      throw new Error(`forbidden key present in fixture: ${key}`);
    }
    collectKeys(value[key], seen);
  }
  return seen;
};
collectKeys(stageDP0AgentPresenceProjection);
collectKeys(stageDP0TradingDeskSourceContract);

// Block 13: ref namespaces are disjoint, the desk source contract is bound by
// committed SHA only, and the whole fixture is deep-frozen.
assert.equal(
  stageDP0AgentPresenceProjection.localPrincipalBinding.principalRef.startsWith(
    "principal:",
  ),
  true,
);
for (const record of stageDP0AgentPresenceProjection.observedAgents) {
  assert.equal(record.agentRef.startsWith("principal:"), false);
  assert.equal(record.agentRef.startsWith("agent:"), true);
}
assert.equal(stageDP0TradingDeskSourceCommit, "57b5c8b966d3eb58cf239b2f3f1598f09f24b296");
assert.equal(/^[0-9a-f]{40}$/.test(stageDP0TradingDeskSourceCommit), true);
assert.deepEqual(stageDP0TradingDeskSourceContract.sourceContract.observedTools, [
  "runtime_status",
  "identity_status",
]);
assert.equal(
  stageDP0TradingDeskSourceContract.sourceContract.sourcePosture,
  "read_only_tool_contract_only_no_live_connection",
);
assert.equal(Object.isFrozen(stageDP0AgentPresenceProjection), true);
assert.equal(Object.isFrozen(stageDP0Agent0Record), true);
assert.equal(Object.isFrozen(stageDP0Agent0RuntimeFacts), true);
assert.equal(Object.isFrozen(stageDP0TradingDeskSourceContract), true);

// The default fixture admission is refused; the refused tuple held on every
// assessment produced above (blocks 1-5 each asserted it). The one-pass
// structural ceiling: fixture observation is never identity proof.
assertRefusedTuple(defaultAssessment);

console.log("POND_STAGE_DP0_AGENT_PRESENCE_PROJECTION_SELFTEST_PASS");