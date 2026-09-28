// Stage D-P3 selftest: the receiver-owned trusted-channel establishment
// ceremony. Recomputes every fixture arm's assessment through the
// classifier, table-drives the fail-closed invalid records, demonstrates
// the D-P0 tie (the ceremony vocabulary is exactly what satisfies D-P0's
// receiver_owned_presence_observation_channel check when supplied), pins
// the refused posture across all assessments, and round-trips JSON. All
// inputs are imported directly under node type-stripping: the D-P3
// contract, the D-P3 fixture (zero value imports), and the D-P0 contract
// and fixture.

import assert from "node:assert/strict";
import {
  assessPondAgentPresenceChannelEstablishment,
  POND_STAGE_DP3_FORBIDDEN_CHANNEL_KEYS,
  POND_STAGE_DP3_FORBIDDEN_LIVE_CONNECTION_KEYS,
} from "../src/contracts/pond-agent-presence-channel-establishment.ts";
import {
  assessPondAgentPresenceAdmission,
} from "../src/contracts/pond-agent-presence-projection.ts";
import {
  stageDP3ChannelEstablishmentComplete,
  stageDP3ChannelEstablishmentIncomplete,
  stageDP3ChannelEstablishmentMatrix,
} from "../src/fixtures/stage-d-p3-agent-presence-channel-establishment.ts";
import {
  stageDP0AgentPresenceProjection,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";

// ------------------------------------------------------------
// Block 1 — fixture matrix: every arm's pinned assessment is exactly what
// the classifier produces for its establishment record.
// ------------------------------------------------------------

for (const entry of stageDP3ChannelEstablishmentMatrix) {
  const recomputed = assessPondAgentPresenceChannelEstablishment({
    establishmentRecord: entry.establishmentRecord,
  });
  assert.deepStrictEqual(
    recomputed,
    entry.assessment,
    `fixture arm ${entry.fixtureLabel} must match a fresh classification`,
  );
  assert.equal(Object.isFrozen(recomputed), true);
  assert.equal(Object.isFrozen(entry.establishmentRecord), true);
}

// The complete arm: every receiver-owned check satisfied in canonical
// order — and still a fixture, never a live channel or authority.
const complete = stageDP3ChannelEstablishmentComplete.assessment;
assert.deepEqual(complete.satisfiedChecks, [
  "exact_channel_kind_receiver_owned",
  "process_ownership_observed_exact_direct_child",
  "channel_authoritative_only_for_presence_semantic_class",
  "channel_cannot_write_trusted_configuration",
  "secret_free_channel_inventory",
  "source_contract_commit_binding_carried",
  "no_conflicting_upstream_channel_precedence",
]);
assert.deepEqual(complete.unsatisfiedChecks, []);
assert.equal(complete.channelEstablishmentState, "fixture_established_receiver_owned_channel");
assert.equal(complete.reason, "all_ceremony_checks_satisfied");
assert.equal(complete.trustedChannelPosture, "fixture_structural_only_no_live_channel");
assert.equal(complete.liveObservationPerformed, false);
assert.equal(complete.authority, "none");

// The incomplete arm: receiver proof incomplete, state not_established,
// with the two ownership checks unsatisfied first in canonical order.
const incomplete = stageDP3ChannelEstablishmentIncomplete.assessment;
assert.deepEqual(incomplete.satisfiedChecks, [
  "channel_authoritative_only_for_presence_semantic_class",
  "channel_cannot_write_trusted_configuration",
  "secret_free_channel_inventory",
  "source_contract_commit_binding_carried",
  "no_conflicting_upstream_channel_precedence",
]);
assert.deepEqual(incomplete.unsatisfiedChecks, [
  "exact_channel_kind_receiver_owned",
  "process_ownership_observed_exact_direct_child",
]);
assert.equal(incomplete.channelEstablishmentState, "not_established");
assert.equal(incomplete.reason, "receiver_channel_proof_incomplete");
assert.equal(incomplete.trustedChannelPosture, "not_established");

// ------------------------------------------------------------
// Block 2 — invalid records: fail-closed vocabulary, exact-keys, and
// forbidden-key validation.
// ------------------------------------------------------------

const completeRecord = stageDP3ChannelEstablishmentComplete.establishmentRecord;

const invalidRecords = [
  ["memory-lane semantic class claimed", { ...completeRecord, establishesSemanticClasses: ["observed_agent_presence", "canonical_memory"] }],
  ["empty semantic classes", { ...completeRecord, establishesSemanticClasses: [] }],
  ["credential key smuggled in", { ...completeRecord, apiKey: "sk-test" }],
  ["memory lane key smuggled in", { ...completeRecord, memoryTranscript: "desk journal prose" }],
  ["wrong channel kind", { ...completeRecord, channelKind: "local_http_listener" }],
  ["connect key smuggled in", { ...completeRecord, connect: "wss://desk.invalid" }],
  ["self-asserted ownership without observation", { ...completeRecord, ownershipProof: { processOwnership: "self_asserted_by_producer", parentRuntime: "pond_desktop_shell" } }],
  ["unknown precedence posture", { ...completeRecord, precedencePosture: "receiver_trusts_everything" }],
  ["non-40-hex commit", { ...completeRecord, sourceContractCommit: "not-a-40-hex-commit-sha" }],
  ["wrong contractVersion", { ...completeRecord, contractVersion: "pond-agent-presence-channel-establishment-d-p2" }],
  ["wrong kind", { ...completeRecord, kind: "pond-agent-presence-channel-execution" }],
  ["crossing relaxed to permitted", { ...completeRecord, forbiddenSemanticCrossings: { trustedRuntimeConfiguration: "forbidden", canonicalMemory: "forbidden", authorityDecisions: "forbidden", operatorInput: "permitted" } }],
  ["missing secretFree posture key", (({ secretFreeChannelInventoryPosture, ...rest }) => rest)(completeRecord)],
  ["null record", null],
  ["array record", [completeRecord]],
];
for (const [label, tamperedRecord] of invalidRecords) {
  const result = assessPondAgentPresenceChannelEstablishment({
    establishmentRecord: tamperedRecord,
  });
  assert.equal(
    result.reason,
    "establishment_record_invalid",
    `invalid-record case "${label}"`,
  );
  assert.equal(result.establishmentRecordVersion, "invalid", label);
  assert.equal(result.channelEstablishmentState, "not_established", label);
  assert.equal(result.trustedChannelPosture, "not_established", label);
  assert.deepEqual(result.satisfiedChecks, [], label);
  // Even a rejected record cannot relax the refused tuple.
  assert.equal(result.liveObservationPerformed, false, label);
  assert.equal(result.observedPresenceAcceptedAsAuthentication, false, label);
  assert.equal(result.personalMemoryContentAdmitted, false, label);
  assert.equal(result.currentTruthAdmitted, false, label);
  assert.equal(result.runtimeActivationPosture, "not_included", label);
  assert.equal(result.authority, "none", label);
}

// The unknown-channel-precedence record is a VALID record whose ceremony
// check stays unsatisfied: unknown precedence fails closed, not errored.
const unknownPrecedence = assessPondAgentPresenceChannelEstablishment({
  establishmentRecord: {
    ...completeRecord,
    precedencePosture: "unknown_channel_precedence",
  },
});
assert.equal(unknownPrecedence.reason, "receiver_channel_proof_incomplete");
assert.equal(unknownPrecedence.channelEstablishmentState, "not_established");
assert.ok(
  unknownPrecedence.unsatisfiedChecks.includes(
    "no_conflicting_upstream_channel_precedence",
  ),
);

// ------------------------------------------------------------
// Block 3 — D-P0 tie: the ceremony vocabulary is exactly what satisfies
// D-P0's receiver_owned_presence_observation_channel check, as a
// deterministic supplied receiver observation. No live observation is
// performed; liveObservation stays not_performed.
// ------------------------------------------------------------

const channelProvenObservation = {
  sourceContractIdentityMatch: "not_observed",
  runtimeFactInventoryMatch: "not_observed",
  presenceObservationChannel: "receiver_owned_channel_observed",
  runtimeFactChannelSeparation: "not_observed",
  identityClaimReproduction: "not_observed",
  principalBindingEstablished: "not_established",
  identitySeparationFromPrincipal: "not_observed",
  liveObservation: "not_performed",
};
const channelSatisfied = assessPondAgentPresenceAdmission({
  projection: stageDP0AgentPresenceProjection,
  receiverObservation: channelProvenObservation,
});
assert.equal(channelSatisfied.projectionContractVersion, "pond-agent-presence-projection-d-p0");
assert.equal(channelSatisfied.reason, "receiver_proof_incomplete");
assert.deepEqual(channelSatisfied.satisfiedChecks, [
  "receiver_owned_presence_observation_channel",
]);
assert.deepEqual(channelSatisfied.unsatisfiedChecks, [
  "exact_source_contract_identity",
  "exact_secret_free_runtime_fact_inventory",
  "runtime_facts_separated_from_personal_memory_channels",
  "identity_claim_evidence_independently_reproduced",
  "local_principal_binding_established_before_private_reads",
  "observed_identity_kept_separate_from_principal_id",
  "live_presence_observation_observed",
]);
assert.equal(channelSatisfied.observedPresenceAcceptedAsAuthentication, false);
assert.equal(channelSatisfied.observedIdentityAcceptedAsPrincipalId, false);
assert.equal(channelSatisfied.personalMemoryContentAdmitted, false);
assert.equal(channelSatisfied.localPrincipalBindingEstablished, false);
assert.equal(channelSatisfied.currentTruthAdmitted, false);
assert.equal(channelSatisfied.runtimeActivationPosture, "not_included");
assert.equal(channelSatisfied.authority, "none");

// Control: with nothing observed, zero checks are satisfied.
const controlObservation = {
  sourceContractIdentityMatch: "not_observed",
  runtimeFactInventoryMatch: "not_observed",
  presenceObservationChannel: "not_observed",
  runtimeFactChannelSeparation: "not_observed",
  identityClaimReproduction: "not_observed",
  principalBindingEstablished: "not_established",
  identitySeparationFromPrincipal: "not_observed",
  liveObservation: "not_performed",
};
const control = assessPondAgentPresenceAdmission({
  projection: stageDP0AgentPresenceProjection,
  receiverObservation: controlObservation,
});
assert.deepEqual(control.satisfiedChecks, []);
assert.equal(control.reason, "receiver_proof_incomplete");

// The ceremony record binds the same desk source-contract SHA the D-P0
// fixture's source contract names — committed SHA only, never a moving
// main.
assert.equal(
  completeRecord.sourceContractCommit,
  "57b5c8b966d3eb58cf239b2f3f1598f09f24b296",
);
assert.equal(stageDP0AgentPresenceProjection.authority, "none");

// ------------------------------------------------------------
// Block 4 — shared posture loop over every assessment in this file:
// refused tuple pinned, everything frozen, forbidden-key vocabulary
// exported and covering the lanes and effects the ceremony refuses.
// ------------------------------------------------------------

const allAssessments = [
  ...stageDP3ChannelEstablishmentMatrix.map((entry) => entry.assessment),
];
for (const result of allAssessments) {
  assert.equal(result.assessmentKind, "deterministic_supplied_channel_establishment");
  assert.equal(result.observedPresenceAcceptedAsAuthentication, false);
  assert.equal(result.personalMemoryContentAdmitted, false);
  assert.equal(result.currentTruthAdmitted, false);
  assert.equal(result.runtimeActivationPosture, "not_included");
  assert.equal(result.authority, "none");
  assert.equal(Object.isFrozen(result), true);
  assert.equal(Object.isFrozen(result.satisfiedChecks), true);
  assert.equal(Object.isFrozen(result.unsatisfiedChecks), true);
}
for (const key of [
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "apiKey",
  "secret",
  "token",
  "credential",
  "execute",
  "approve",
  "PrincipalId",
  "principalId",
]) {
  assert.ok(POND_STAGE_DP3_FORBIDDEN_CHANNEL_KEYS.includes(key), `forbidden key ${key}`);
}
for (const key of ["connect", "listen", "poll", "subscribe"]) {
  assert.ok(
    POND_STAGE_DP3_FORBIDDEN_LIVE_CONNECTION_KEYS.includes(key),
    `forbidden live-connection key ${key}`,
  );
}

// ------------------------------------------------------------
// Block 5 — JSON round-trip: assessments are plain data.
// ------------------------------------------------------------

for (const result of allAssessments) {
  const roundTripped = JSON.parse(JSON.stringify(result));
  assert.deepStrictEqual(roundTripped, result);
}

console.log("POND_STAGE_DP3_CHANNEL_ESTABLISHMENT_SELFTEST_PASS");