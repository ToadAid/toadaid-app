// Stage D-P4 selftest: the live-observation admission composition.
// Recomputes every fixture arm over its pinned inputs plus the
// directly-imported D-P0 projection fixture, table-drives the fail-closed
// invalid compositions, pins the refused posture across all assessments
// (ready is never live), and round-trips JSON. All inputs are imported
// directly under node type-stripping: the D-P4 contract, the D-P4 fixture
// (zero value imports), the D-P0 contract and fixture, and the D-P2/D-P3
// contracts for vocabulary cross-checks.

import assert from "node:assert/strict";
import { assessPondAgentPresenceLiveObservationAdmission } from "../src/contracts/pond-agent-presence-live-observation-admission.ts";
import {
  stageDP4LiveObservationAdmissionNotReady,
  stageDP4LiveObservationAdmissionReady,
  stageDP4LiveObservationAdmissionMatrix,
} from "../src/fixtures/stage-d-p4-agent-presence-live-observation-admission.ts";
import {
  stageDP0AgentPresenceProjection,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";

// ------------------------------------------------------------
// Block 1 — fixture matrix: every arm's pinned assessment is exactly what
// the classifier produces over its pinned inputs plus the D-P0 projection
// fixture.
// ------------------------------------------------------------

for (const entry of stageDP4LiveObservationAdmissionMatrix) {
  const recomputed = assessPondAgentPresenceLiveObservationAdmission({
    channelEstablishment: entry.channelEstablishmentRecord,
    sourceContractFixture: entry.sourceContractFixture,
    projection: stageDP0AgentPresenceProjection,
    observationCandidate: entry.observationCandidate,
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

// The ready arm: structurally ready — and still nothing live.
const ready = stageDP4LiveObservationAdmissionReady.assessment;
assert.equal(ready.readinessState, "structurally_ready_pending_actual_observation");
assert.equal(ready.reason, "structurally_ready_pending_actual_observation");
assert.deepEqual(ready.satisfiedChecks, [
  "channel_ceremony_fully_satisfied",
  "desk_source_contract_commit_identity_bound",
  "presence_projection_structurally_admissible",
  "observation_candidate_fresh_and_well_formed",
]);
assert.deepEqual(ready.unsatisfiedChecks, []);
assert.equal(ready.liveObservationPerformed, false);
assert.equal(ready.livePresencePresentation, "withheld_no_live_observation_performed");
assert.equal(ready.authority, "none");
assert.deepEqual(ready.freshnessDiagnosis, {
  state: "fresh",
  reason: "within_declared_maximum_age",
  observationAgeMs: 30_000,
});

const notReady = stageDP4LiveObservationAdmissionNotReady.assessment;
assert.equal(notReady.readinessState, "not_ready");
assert.equal(notReady.reason, "receiver_live_proof_incomplete");
assert.deepEqual(notReady.unsatisfiedChecks, ["channel_ceremony_fully_satisfied"]);
assert.equal(notReady.liveObservationPerformed, false);

// ------------------------------------------------------------
// Block 2 — invalid compositions: fail-closed on every broken input.
// ------------------------------------------------------------

const readyEntry = stageDP4LiveObservationAdmissionReady;
const deskCommit = "57b5c8b966d3eb58cf239b2f3f1598f09f24b296";

const invalidCompositions = [
  ["ceremony record invalid", { channelEstablishment: { ...readyEntry.channelEstablishmentRecord, precedencePosture: "receiver_trusts_everything" } }],
  ["ceremony incomplete", { channelEstablishment: stageDP4LiveObservationAdmissionNotReady.channelEstablishmentRecord, expectedUnsatisfied: ["channel_ceremony_fully_satisfied"] }],
  ["identity mismatch: different valid 40-hex commit", { channelEstablishment: { ...readyEntry.channelEstablishmentRecord, sourceContractCommit: "10572a61f2562277a0c5804edfa979b71b539397" }, expectedUnsatisfied: ["desk_source_contract_commit_identity_bound"] }],
  ["source contract fixture invalid", { sourceContractFixture: { ...readyEntry.sourceContractFixture, authority: "some" }, expectedUnsatisfied: ["desk_source_contract_commit_identity_bound"] }],
  ["projection invalid: authority widened", { projection: { ...stageDP0AgentPresenceProjection, authority: "borrowed" }, expectedUnsatisfied: ["presence_projection_structurally_admissible"] }],
  ["candidate stale: 80s old", { observationCandidate: { ...readyEntry.observationCandidate, observationMetadata: { ...readyEntry.observationCandidate.observationMetadata, observed_at_epoch_ms: readyEntry.evaluatedAtEpochMs - 80_000 } }, expectedUnsatisfied: ["observation_candidate_fresh_and_well_formed"] }],
  ["candidate invalid: memory key smuggled in", { observationCandidate: { ...readyEntry.observationCandidate, memoryTranscript: "desk journal prose" }, expectedUnsatisfied: ["observation_candidate_fresh_and_well_formed"] }],
  ["evaluation time NaN: freshness unknown", { evaluatedAtEpochMs: Number.NaN, expectedUnsatisfied: ["observation_candidate_fresh_and_well_formed"] }],
];
for (const [label, overrides] of invalidCompositions) {
  const result = assessPondAgentPresenceLiveObservationAdmission({
    channelEstablishment: overrides.channelEstablishment ?? readyEntry.channelEstablishmentRecord,
    sourceContractFixture: overrides.sourceContractFixture ?? readyEntry.sourceContractFixture,
    projection: overrides.projection ?? stageDP0AgentPresenceProjection,
    observationCandidate: overrides.observationCandidate ?? readyEntry.observationCandidate,
    evaluatedAtEpochMs: overrides.evaluatedAtEpochMs ?? readyEntry.evaluatedAtEpochMs,
    maximumAgeMs: readyEntry.maximumAgeMs,
  });
  assert.equal(result.readinessState, "not_ready", `invalid composition "${label}"`);
  assert.equal(result.reason, "receiver_live_proof_incomplete", label);
  if (overrides.expectedUnsatisfied) {
    for (const check of overrides.expectedUnsatisfied) {
      assert.ok(
        result.unsatisfiedChecks.includes(check),
        `invalid composition "${label}" must leave ${check} unsatisfied`,
      );
    }
  }
  // Even an incomplete composition cannot relax the refused tuple.
  assert.equal(result.liveObservationPerformed, false, label);
  assert.equal(result.observedPresenceAcceptedAsAuthentication, false, label);
  assert.equal(result.observedIdentityAcceptedAsPrincipalId, false, label);
  assert.equal(result.personalMemoryContentAdmitted, false, label);
  assert.equal(result.localPrincipalBindingEstablished, false, label);
  assert.equal(result.currentTruthAdmitted, false, label);
  assert.equal(result.runtimeActivationPosture, "not_included", label);
  assert.equal(result.authority, "none", label);
}

// The identity-mismatch case maps NO D-P0 identity check: a mismatched
// committed SHA must not satisfy exact_source_contract_identity.
const mismatched = assessPondAgentPresenceLiveObservationAdmission({
  channelEstablishment: {
    ...readyEntry.channelEstablishmentRecord,
    sourceContractCommit: "10572a61f2562277a0c5804edfa979b71b539397",
  },
  sourceContractFixture: readyEntry.sourceContractFixture,
  projection: stageDP0AgentPresenceProjection,
  observationCandidate: readyEntry.observationCandidate,
  evaluatedAtEpochMs: readyEntry.evaluatedAtEpochMs,
  maximumAgeMs: readyEntry.maximumAgeMs,
});
assert.equal(mismatched.readinessState, "not_ready");
assert.deepEqual(mismatched.mappedDp0SatisfiedChecks, [
  "receiver_owned_presence_observation_channel",
]);
assert.ok(
  mismatched.mappedDp0UnsatisfiedChecks.includes(
    "exact_source_contract_identity",
  ),
);

// ------------------------------------------------------------
// Block 3 — D-P0 mapping on the ready arm: exactly the identity and
// channel checks map satisfied; the other six stay owed in canonical
// order; D-P0's refused tuple holds.
// ------------------------------------------------------------

assert.deepEqual(ready.mappedDp0SatisfiedChecks, [
  "exact_source_contract_identity",
  "receiver_owned_presence_observation_channel",
]);
assert.deepEqual(ready.mappedDp0UnsatisfiedChecks, [
  "exact_secret_free_runtime_fact_inventory",
  "runtime_facts_separated_from_personal_memory_channels",
  "identity_claim_evidence_independently_reproduced",
  "local_principal_binding_established_before_private_reads",
  "observed_identity_kept_separate_from_principal_id",
  "live_presence_observation_observed",
]);
assert.equal(ready.observedPresenceAcceptedAsAuthentication, false);
assert.equal(ready.observedIdentityAcceptedAsPrincipalId, false);
assert.equal(ready.personalMemoryContentAdmitted, false);
assert.equal(ready.localPrincipalBindingEstablished, false);
assert.equal(ready.currentTruthAdmitted, false);
assert.equal(ready.authority, "none");

// The composition binds the same committed desk SHA everywhere — the
// ceremony record, the source-contract fixture, and the candidate's claim.
assert.equal(
  stageDP4LiveObservationAdmissionReady.channelEstablishmentRecord
    .sourceContractCommit,
  deskCommit,
);
assert.equal(
  stageDP4LiveObservationAdmissionReady.observationCandidate
    .claimedSourceContractCommit,
  deskCommit,
);

// ------------------------------------------------------------
// Block 4 — shared posture loop over every assessment: refused tuple
// pinned, everything frozen.
// ------------------------------------------------------------

const allAssessments = [
  ...stageDP4LiveObservationAdmissionMatrix.map((entry) => entry.assessment),
];
for (const result of allAssessments) {
  assert.equal(result.assessmentKind, "deterministic_supplied_live_observation_composition");
  assert.equal(result.livePresencePresentation, "withheld_no_live_observation_performed");
  assert.equal(result.liveObservationPerformed, false);
  assert.equal(result.observedPresenceAcceptedAsAuthentication, false);
  assert.equal(result.observedIdentityAcceptedAsPrincipalId, false);
  assert.equal(result.personalMemoryContentAdmitted, false);
  assert.equal(result.localPrincipalBindingEstablished, false);
  assert.equal(result.currentTruthAdmitted, false);
  assert.equal(result.runtimeActivationPosture, "not_included");
  assert.equal(result.authority, "none");
  assert.equal(Object.isFrozen(result), true);
  assert.equal(Object.isFrozen(result.satisfiedChecks), true);
  assert.equal(Object.isFrozen(result.unsatisfiedChecks), true);
  assert.equal(Object.isFrozen(result.mappedDp0SatisfiedChecks), true);
  assert.equal(Object.isFrozen(result.mappedDp0UnsatisfiedChecks), true);
  assert.equal(Object.isFrozen(result.freshnessDiagnosis), true);
}
for (const entry of stageDP4LiveObservationAdmissionMatrix) {
  assert.equal(Object.isFrozen(entry), true);
  assert.equal(Object.isFrozen(entry.channelEstablishmentRecord), true);
  assert.equal(Object.isFrozen(entry.observationCandidate), true);
}

// ------------------------------------------------------------
// Block 5 — JSON round-trip: assessments are plain data.
// ------------------------------------------------------------

for (const result of allAssessments) {
  const roundTripped = JSON.parse(JSON.stringify(result));
  assert.deepStrictEqual(roundTripped, result);
}

console.log("POND_STAGE_DP4_LIVE_OBSERVATION_ADMISSION_SELFTEST_PASS");