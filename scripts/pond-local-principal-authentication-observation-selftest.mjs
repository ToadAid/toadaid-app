// Stage D-P6 selftest: the local principal authentication observation
// performer seam. Recomputes every fixture arm over its pinned inputs plus
// the directly-imported D-P0 local principal ref, table-drives the invalid
// and fail-closed records, pins the upgrade ties (performer-complete
// observation upgrades the D-P5 ceremony's authentication observation, and
// the D-P0 principal checks stay exactly the two satisfied), and
// round-trips JSON. All inputs are imported directly under node
// type-stripping: the D-P6 contract, the D-P6 fixture (zero value
// imports), the D-P5 contract, and the D-P0 contract and fixture for the
// ties.

import assert from "node:assert/strict";
import { assessPondLocalPrincipalAuthenticationObservation } from "../src/contracts/pond-local-principal-authentication-observation.ts";
import {
  stageDP6AuthenticationObservationComplete,
  stageDP6AuthenticationObservationIncomplete,
  stageDP6AuthenticationObservationMatrix,
} from "../src/fixtures/stage-d-p6-local-principal-authentication-observation.ts";
import { assessPondLocalPrincipalBindingEstablishment } from "../src/contracts/pond-local-principal-binding-establishment.ts";
import {
  assessPondAgentPresenceAdmission,
} from "../src/contracts/pond-agent-presence-projection.ts";
import {
  stageDP0AgentPresenceProjection,
  stageDP0LocalPrincipalRef,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";

// ------------------------------------------------------------
// Block 1 — fixture matrix: every arm's pinned assessment is exactly what
// the classifier produces over its pinned record, times, and the
// receiver-held D-P0 principal ref. One binding, one ref: the fixture's
// principal ref must be the D-P0 fixture's own local principal.
// ------------------------------------------------------------

for (const entry of stageDP6AuthenticationObservationMatrix) {
  assert.equal(
    entry.observationRecord.principalRef,
    stageDP0LocalPrincipalRef,
    `fixture arm ${entry.fixtureLabel} must bind the D-P0 local principal`,
  );
  const recomputed = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: entry.observationRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    evaluatedAtEpochMs: entry.evaluatedAtEpochMs,
    maximumAgeMs: entry.maximumAgeMs,
  });
  assert.deepStrictEqual(
    recomputed,
    entry.assessment,
    `fixture arm ${entry.fixtureLabel} must match a fresh classification`,
  );
  assert.equal(Object.isFrozen(recomputed), true);
}

// The complete arm: structurally observed — and still no live
// authentication, no PrincipalId, no authority.
const complete = stageDP6AuthenticationObservationComplete.assessment;
assert.equal(complete.authenticationObservationState, "fixture_observed_local_authentication");
assert.equal(complete.reason, "all_observation_checks_satisfied");
assert.equal(complete.authenticationPosture, "fixture_structural_only_no_live_authentication");
assert.deepEqual(complete.satisfiedChecks, [
  "authentication_event_receiver_observed",
  "authentication_event_bound_to_receiver_held_principal",
  "authentication_observation_channel_receiver_owned",
  "authentication_observation_secret_free",
  "authentication_observation_fresh",
  "authentication_observation_excludes_memory_and_lane_content",
  "authentication_observation_grants_no_authority",
]);
assert.deepEqual(complete.unsatisfiedChecks, []);
assert.deepEqual(complete.freshnessDiagnosis, {
  state: "fresh",
  reason: "within_declared_maximum_age",
  observationAgeMs: 30_000,
});
assert.equal(complete.liveAuthenticationPerformed, false);
assert.equal(complete.principalIdIssued, false);
assert.equal(complete.authority, "none");

const incomplete = stageDP6AuthenticationObservationIncomplete.assessment;
assert.equal(incomplete.authenticationObservationState, "not_observed");
assert.equal(incomplete.reason, "receiver_authentication_proof_incomplete");
assert.deepEqual(incomplete.unsatisfiedChecks, [
  "authentication_event_receiver_observed",
  "authentication_observation_channel_receiver_owned",
]);
assert.equal(incomplete.liveAuthenticationPerformed, false);

// ------------------------------------------------------------
// Block 2 — invalid records: typed refusal on every broken input.
// ------------------------------------------------------------

const completeEntry = stageDP6AuthenticationObservationComplete;

const invalidRecords = [
  ["tampered contractVersion", { contractVersion: "pond-local-principal-authentication-observation-d-p5" }],
  ["tampered kind", { kind: "pond-local-principal-binding-establishment" }],
  ["non-principal ref", { principalRef: "wallet:0xdeadbeef" }],
  ["empty ref body", { principalRef: "principal:" }],
  ["principalId key smuggle", { principalId: "principal:fixture:stage-d-p0:local-principal" }],
  ["memory lane key smuggle", { memoryTranscript: "desk journal prose" }],
  ["credential key smuggle", { credential: "v1" }],
  ["password key smuggle", { password: "hunter2" }],
  ["live-connection key smuggle", { connect: "stdio" }],
  ["authority widened", { authority: "authentication" }],
  ["unknown event state", { eventState: "self_certified_by_producer" }],
  ["unknown authentication posture", { authenticationPosture: "live_authentication_performed" }],
  ["metadata key mutated", { observationMetadata: { observed_at_epoch_ms: 1_800_000_030_000, freshness_basis: "receiver_clock", currentness_posture: "not_established_consumer_must_evaluate" } }],
];
for (const [label, overrides] of invalidRecords) {
  const observationRecord = { ...completeEntry.observationRecord };
  for (const [key, value] of Object.entries(overrides)) {
    observationRecord[key] = value;
  }
  const result = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    evaluatedAtEpochMs: completeEntry.evaluatedAtEpochMs,
    maximumAgeMs: completeEntry.maximumAgeMs,
  });
  assert.equal(result.reason, "observation_record_invalid", label);
  assert.equal(result.observationRecordVersion, "invalid", label);
  assert.equal(result.authenticationObservationState, "not_observed", label);
  assert.deepEqual(result.satisfiedChecks, [], label);
  assert.equal(result.liveAuthenticationPerformed, false, label);
  assert.equal(result.principalIdIssued, false, label);
  assert.equal(result.authority, "none", label);
}

// Missing-key and extra-key cases mutate the key set structurally.
const missingKey = { ...completeEntry.observationRecord };
delete missingKey.authorityPosture;
assert.equal(
  assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: missingKey,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    evaluatedAtEpochMs: completeEntry.evaluatedAtEpochMs,
    maximumAgeMs: completeEntry.maximumAgeMs,
  }).reason,
  "observation_record_invalid",
);
const extraKey = { ...completeEntry.observationRecord, operatorNote: "ok" };
assert.equal(
  assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: extraKey,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    evaluatedAtEpochMs: completeEntry.evaluatedAtEpochMs,
    maximumAgeMs: completeEntry.maximumAgeMs,
  }).reason,
  "observation_record_invalid",
);

// A mismatched receiver-held ref: a valid record bound to a different
// principal — the identity check fails closed, the binding is not the
// receiver's own.
const mismatched = assessPondLocalPrincipalAuthenticationObservation({
  observationRecord: completeEntry.observationRecord,
  receiverHeldPrincipalRef: "principal:fixture:operator-a",
  evaluatedAtEpochMs: completeEntry.evaluatedAtEpochMs,
  maximumAgeMs: completeEntry.maximumAgeMs,
});
assert.equal(mismatched.reason, "receiver_authentication_proof_incomplete");
assert.ok(
  mismatched.unsatisfiedChecks.includes(
    "authentication_event_bound_to_receiver_held_principal",
  ),
);

// ------------------------------------------------------------
// Block 3 — valid-but-unsatisfied fail-closed records: a claimed
// producer-asserted or session/wallet-inferred event, a stale observation,
// an invalid evaluation time, and a future observation time each keep the
// record valid and leave their checks unsatisfied.
// ------------------------------------------------------------

const forbiddenEventStates = [
  "asserted_by_producer",
  "inferred_from_session_presence",
  "inferred_from_wallet_connection",
];
for (const eventState of forbiddenEventStates) {
  const result = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: { ...completeEntry.observationRecord, eventState },
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    evaluatedAtEpochMs: completeEntry.evaluatedAtEpochMs,
    maximumAgeMs: completeEntry.maximumAgeMs,
  });
  assert.equal(result.reason, "receiver_authentication_proof_incomplete", eventState);
  assert.equal(result.observationRecordVersion, "pond-local-principal-authentication-observation-d-p6", eventState);
  assert.ok(
    result.unsatisfiedChecks.includes("authentication_event_receiver_observed"),
    `${eventState} must leave the receiver-observed event check unsatisfied`,
  );
  assert.equal(result.authenticationObservationState, "not_observed", eventState);
}

// Stale observation: 80s old — valid record, freshness diagnosed stale,
// freshness check unsatisfied, reason preserved.
const stale = assessPondLocalPrincipalAuthenticationObservation({
  observationRecord: {
    ...completeEntry.observationRecord,
    observationMetadata: {
      ...completeEntry.observationRecord.observationMetadata,
      observed_at_epoch_ms: completeEntry.evaluatedAtEpochMs - 80_000,
    },
  },
  receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
  evaluatedAtEpochMs: completeEntry.evaluatedAtEpochMs,
  maximumAgeMs: completeEntry.maximumAgeMs,
});
assert.equal(stale.reason, "receiver_authentication_proof_incomplete");
assert.deepEqual(stale.freshnessDiagnosis, {
  state: "stale",
  reason: "declared_maximum_age_expired",
  observationAgeMs: 80_000,
});
assert.ok(stale.unsatisfiedChecks.includes("authentication_observation_fresh"));
assert.equal(stale.authenticationObservationState, "not_observed");

// NaN evaluation time: freshness unknown, check unsatisfied, no error.
const nanEvaluated = assessPondLocalPrincipalAuthenticationObservation({
  observationRecord: completeEntry.observationRecord,
  receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
  evaluatedAtEpochMs: Number.NaN,
  maximumAgeMs: completeEntry.maximumAgeMs,
});
assert.equal(nanEvaluated.reason, "receiver_authentication_proof_incomplete");
assert.deepEqual(nanEvaluated.freshnessDiagnosis, {
  state: "unknown",
  reason: "evaluation_time_invalid",
  observationAgeMs: null,
});
assert.ok(nanEvaluated.unsatisfiedChecks.includes("authentication_observation_fresh"));

// Future observation time: freshness unknown, not stale.
const futureTime = assessPondLocalPrincipalAuthenticationObservation({
  observationRecord: {
    ...completeEntry.observationRecord,
    observationMetadata: {
      ...completeEntry.observationRecord.observationMetadata,
      observed_at_epoch_ms: completeEntry.evaluatedAtEpochMs + 5_000,
    },
  },
  receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
  evaluatedAtEpochMs: completeEntry.evaluatedAtEpochMs,
  maximumAgeMs: completeEntry.maximumAgeMs,
});
assert.equal(futureTime.reason, "receiver_authentication_proof_incomplete");
assert.deepEqual(futureTime.freshnessDiagnosis, {
  state: "unknown",
  reason: "observation_time_in_future",
  observationAgeMs: null,
});

// ------------------------------------------------------------
// Block 4 — upgrade ties.
// (a) The performer-complete observation upgrades the D-P5 ceremony's
// authentication observation: the ceremony completes with all seven
// checks satisfied. Control: with the authentication observation still
// not observed, the ceremony check stays unsatisfied.
// (b) The D-P0 tie: the binding-proven observation still satisfies
// exactly the two principal checks of the eight D-P0 receiver checks.
// ------------------------------------------------------------

const upgradedCeremonyRecord = {
  contractVersion: "pond-local-principal-binding-establishment-d-p5",
  kind: "pond-local-principal-binding-establishment",
  principalRef: stageDP0LocalPrincipalRef,
  bindingBasis: "receiver_owned_explicit_binding",
  authenticationObservation: "receiver_observed_local_authentication",
  identitySeparationPosture: "receiver_verified_agent_identity_distinct_from_principal",
  memoryLaneExclusionPosture: "binding_excludes_memory_narrative_transcript_lanes",
  authorityPosture: "binding_grants_no_authority_membership_or_capability",
  revocabilityPosture: "binding_revocable_independently_of_transport_provider_or_registry",
  authenticationPosture: "fixture_structural_only_no_real_authentication",
  authority: "none",
};
const upgraded = assessPondLocalPrincipalBindingEstablishment({
  ceremonyRecord: upgradedCeremonyRecord,
  receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
});
assert.equal(upgraded.reason, "all_ceremony_checks_satisfied");
assert.equal(upgraded.bindingEstablishmentState, "fixture_established_local_principal_binding");
assert.deepEqual(upgraded.satisfiedChecks, [
  "principal_ref_well_formed",
  "binding_bound_to_receiver_held_principal",
  "binding_explicitly_receiver_owned",
  "local_authentication_observed_by_receiver",
  "identity_separation_from_observed_agent_verified",
  "binding_excludes_memory_and_lane_content",
  "binding_grants_no_authority_and_stays_revocable",
]);
assert.equal(upgraded.authenticationPerformed, false);
assert.equal(upgraded.principalIdIssued, false);

const controlCeremony = assessPondLocalPrincipalBindingEstablishment({
  ceremonyRecord: {
    ...upgradedCeremonyRecord,
    authenticationObservation: "not_observed",
  },
  receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
});
assert.equal(controlCeremony.reason, "receiver_binding_proof_incomplete");
assert.ok(
  controlCeremony.unsatisfiedChecks.includes(
    "local_authentication_observed_by_receiver",
  ),
);

const bindingProvenObservation = {
  sourceContractIdentityMatch: "not_observed",
  runtimeFactInventoryMatch: "not_observed",
  presenceObservationChannel: "not_observed",
  runtimeFactChannelSeparation: "not_observed",
  identityClaimReproduction: "not_observed",
  principalBindingEstablished: "receiver_authenticated_local_binding",
  identitySeparationFromPrincipal: "receiver_verified_identity_separation",
  liveObservation: "not_performed",
};
const bindingSatisfied = assessPondAgentPresenceAdmission({
  projection: stageDP0AgentPresenceProjection,
  receiverObservation: bindingProvenObservation,
});
assert.deepEqual(bindingSatisfied.satisfiedChecks, [
  "local_principal_binding_established_before_private_reads",
  "observed_identity_kept_separate_from_principal_id",
]);
assert.equal(bindingSatisfied.observedPresenceAcceptedAsAuthentication, false);
assert.equal(bindingSatisfied.observedIdentityAcceptedAsPrincipalId, false);
assert.equal(bindingSatisfied.localPrincipalBindingEstablished, false);
assert.equal(bindingSatisfied.authority, "none");

// ------------------------------------------------------------
// Block 5 — shared posture loop over every assessment and JSON
// round-trip: assessments are plain frozen data.
// ------------------------------------------------------------

const allAssessments = [
  ...stageDP6AuthenticationObservationMatrix.map((entry) => entry.assessment),
];
for (const result of allAssessments) {
  assert.equal(result.assessmentKind, "deterministic_supplied_authentication_observation");
  assert.equal(result.liveAuthenticationPerformed, false);
  assert.equal(result.observedPresenceAcceptedAsAuthentication, false);
  assert.equal(result.observedIdentityAcceptedAsPrincipalId, false);
  assert.equal(result.principalIdIssued, false);
  assert.equal(result.personalMemoryContentAdmitted, false);
  assert.equal(result.currentTruthAdmitted, false);
  assert.equal(result.runtimeActivationPosture, "not_included");
  assert.equal(result.authority, "none");
  assert.equal(Object.isFrozen(result), true);
  assert.equal(Object.isFrozen(result.satisfiedChecks), true);
  assert.equal(Object.isFrozen(result.unsatisfiedChecks), true);
  assert.equal(Object.isFrozen(result.freshnessDiagnosis), true);
}
for (const entry of stageDP6AuthenticationObservationMatrix) {
  assert.equal(Object.isFrozen(entry), true);
  assert.equal(Object.isFrozen(entry.observationRecord), true);
}
for (const result of allAssessments) {
  const roundTripped = JSON.parse(JSON.stringify(result));
  assert.deepStrictEqual(roundTripped, result);
}

console.log("POND_STAGE_DP6_LOCAL_PRINCIPAL_AUTHENTICATION_OBSERVATION_SELFTEST_PASS");