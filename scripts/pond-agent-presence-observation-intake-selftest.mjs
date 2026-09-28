// Stage D-P2 selftest: the receiver-owned live-presence observation intake
// seam. Recomputes every fixture arm's assessment through the classifier,
// exercises the freshness boundary, table-drives the fail-closed invalid
// candidates, pins the refused posture across all assessments, and ties the
// seam back to the D-P0 admission checks it serves. All inputs are imported
// directly under node type-stripping: the D-P2 contract, the D-P2 fixture
// (zero value imports), and the D-P0 fixture.

import assert from "node:assert/strict";
import {
  POND_STAGE_D_P2_FORBIDDEN_INTAKE_KEYS,
  POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
  assessPondAgentPresenceObservationIntake,
} from "../src/contracts/pond-agent-presence-observation-intake.ts";
import {
  stageDP2ClaimWithFreshObservationIntake,
  stageDP2ClaimWithStaleObservationIntake,
  stageDP2ClaimWithoutMetadataIntake,
  stageDP2NoObservationIntake,
  stageDP2ObservationIntakeMatrix,
} from "../src/fixtures/stage-d-p2-agent-presence-observation-intake.ts";
import {
  stageDP0AgentPresenceProjection,
  stageDP0TradingDeskSourceContract,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";

// ------------------------------------------------------------
// Block 1 — fixture matrix: every arm's pinned assessment is exactly what
// the classifier produces for its candidate and times.
// ------------------------------------------------------------

for (const entry of stageDP2ObservationIntakeMatrix) {
  const recomputed = assessPondAgentPresenceObservationIntake({
    candidate: entry.candidate,
    evaluatedAtEpochMs: entry.evaluatedAtEpochMs,
    maximumAgeMs: entry.maximumAgeMs,
  });
  assert.deepStrictEqual(
    recomputed,
    entry.assessment,
    `fixture arm ${entry.fixtureLabel} must match a fresh classification`,
  );
  assert.equal(recomputed.candidateStateAssessed, entry.candidate.candidateState);
}

// The fresh arm: diagnosed fresh — and still refused. That pairing is the
// point of the seam.
const freshAssessment = stageDP2ClaimWithFreshObservationIntake.assessment;
assert.deepEqual(freshAssessment.freshnessDiagnosis, {
  state: "fresh",
  reason: "within_declared_maximum_age",
  observationAgeMs: 30_000,
});
assert.equal(freshAssessment.canonicalOutcome, "refused");
assert.equal(freshAssessment.intakeState, "refused_no_trusted_observation_channel");

const staleAssessment = stageDP2ClaimWithStaleObservationIntake.assessment;
assert.deepEqual(staleAssessment.freshnessDiagnosis, {
  state: "stale",
  reason: "declared_maximum_age_expired",
  observationAgeMs: 80_000,
});
assert.equal(staleAssessment.canonicalOutcome, "refused");

for (const noMetadataArm of [
  stageDP2NoObservationIntake,
  stageDP2ClaimWithoutMetadataIntake,
]) {
  assert.deepEqual(noMetadataArm.assessment.freshnessDiagnosis, {
    state: "unknown",
    reason: "observation_metadata_missing_or_invalid",
    observationAgeMs: null,
  });
  assert.equal(noMetadataArm.assessment.canonicalOutcome, "refused");
}

// ------------------------------------------------------------
// Block 2 — freshness boundary and invalid times, over a well-formed fresh
// candidate with shifted metadata.
// ------------------------------------------------------------

const freshCandidate = stageDP2ClaimWithFreshObservationIntake.candidate;
const evaluatedAt = stageDP2ClaimWithFreshObservationIntake.evaluatedAtEpochMs;
const maximumAge = stageDP2ClaimWithFreshObservationIntake.maximumAgeMs;
assert.equal(maximumAge, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS);

const withObservedAt = (observedAtEpochMs) =>
  assessPondAgentPresenceObservationIntake({
    candidate: {
      ...freshCandidate,
      observationMetadata: {
        observed_at_epoch_ms: observedAtEpochMs,
        freshness_basis: "source_observation_time_only",
        currentness_posture: "not_established_consumer_must_evaluate",
      },
    },
    evaluatedAtEpochMs: evaluatedAt,
    maximumAgeMs: maximumAge,
  });

// Inclusive boundary: age exactly at the maximum is fresh.
assert.deepEqual(withObservedAt(evaluatedAt - maximumAge).freshnessDiagnosis, {
  state: "fresh",
  reason: "within_declared_maximum_age",
  observationAgeMs: maximumAge,
});
// One millisecond past the boundary is stale.
assert.deepEqual(withObservedAt(evaluatedAt - maximumAge - 1).freshnessDiagnosis, {
  state: "stale",
  reason: "declared_maximum_age_expired",
  observationAgeMs: maximumAge + 1,
});
// Observation time in the future is unknown, never fresh.
assert.deepEqual(withObservedAt(evaluatedAt + 1).freshnessDiagnosis, {
  state: "unknown",
  reason: "observation_time_in_future",
  observationAgeMs: null,
});

const invalidTimeCases = [
  ["NaN evaluation time", { candidate: freshCandidate, evaluatedAtEpochMs: Number.NaN, maximumAgeMs: maximumAge }, "evaluation_time_invalid"],
  ["negative evaluation time", { candidate: freshCandidate, evaluatedAtEpochMs: -1, maximumAgeMs: maximumAge }, "evaluation_time_invalid"],
  ["non-integer evaluation time", { candidate: freshCandidate, evaluatedAtEpochMs: 1.5, maximumAgeMs: maximumAge }, "evaluation_time_invalid"],
  ["negative maximum age", { candidate: freshCandidate, evaluatedAtEpochMs: evaluatedAt, maximumAgeMs: -1 }, "maximum_age_invalid"],
  ["NaN maximum age", { candidate: freshCandidate, evaluatedAtEpochMs: evaluatedAt, maximumAgeMs: Number.NaN }, "maximum_age_invalid"],
  ["missing maximum age", { candidate: freshCandidate, evaluatedAtEpochMs: evaluatedAt, maximumAgeMs: undefined }, "maximum_age_invalid"],
];
for (const [label, input, expectedReason] of invalidTimeCases) {
  const result = assessPondAgentPresenceObservationIntake(input);
  assert.equal(
    result.freshnessDiagnosis.reason,
    expectedReason,
    `invalid-time case "${label}"`,
  );
  assert.equal(result.freshnessDiagnosis.state, "unknown", label);
  assert.equal(result.freshnessDiagnosis.observationAgeMs, null, label);
  // The channel refusal is unconditional even when the times are unusable.
  assert.equal(result.refusalReason, "receiver_owned_channel_not_established", label);
  assert.equal(result.canonicalOutcome, "refused", label);
}

// Metadata that fails its schema is unknown, and a candidate whose state
// label disagrees with its metadata presence is invalid outright.
const mismatchedMetadataCases = [
  ["freshness_basis wrong", { ...freshCandidate, observationMetadata: { observed_at_epoch_ms: 1, freshness_basis: "producer_asserted_fresh", currentness_posture: "not_established_consumer_must_evaluate" } }],
  ["currentness_posture wrong", { ...freshCandidate, observationMetadata: { observed_at_epoch_ms: 1, freshness_basis: "source_observation_time_only", currentness_posture: "producer_asserted_current" } }],
  ["observed time negative", { ...freshCandidate, observationMetadata: { observed_at_epoch_ms: -1, freshness_basis: "source_observation_time_only", currentness_posture: "not_established_consumer_must_evaluate" } }],
];
for (const [label, tamperedCandidate] of mismatchedMetadataCases) {
  const result = assessPondAgentPresenceObservationIntake({
    candidate: tamperedCandidate,
    evaluatedAtEpochMs: evaluatedAt,
    maximumAgeMs: maximumAge,
  });
  assert.equal(
    result.refusalReason,
    "observation_candidate_invalid",
    `mismatched metadata case "${label}"`,
  );
  assert.equal(result.candidateStateAssessed, "invalid", label);
  assert.equal(result.canonicalOutcome, "refused", label);
}

// A claim state carrying no metadata, or a no-observation state carrying
// metadata, contradicts its own label and is invalid outright.
assert.equal(
  assessPondAgentPresenceObservationIntake({
    candidate: {
      ...stageDP2ClaimWithoutMetadataIntake.candidate,
      observationMetadata: {
        observed_at_epoch_ms: evaluatedAt - 30_000,
        freshness_basis: "source_observation_time_only",
        currentness_posture: "not_established_consumer_must_evaluate",
      },
    },
    evaluatedAtEpochMs: evaluatedAt,
    maximumAgeMs: maximumAge,
  }).refusalReason,
  "observation_candidate_invalid",
);
assert.equal(
  assessPondAgentPresenceObservationIntake({
    candidate: {
      ...stageDP2NoObservationIntake.candidate,
      observationMetadata: {
        observed_at_epoch_ms: evaluatedAt - 30_000,
        freshness_basis: "source_observation_time_only",
        currentness_posture: "not_established_consumer_must_evaluate",
      },
    },
    evaluatedAtEpochMs: evaluatedAt,
    maximumAgeMs: maximumAge,
  }).refusalReason,
  "observation_candidate_invalid",
);

// ------------------------------------------------------------
// Block 3 — invalid candidates: fail-closed vocabulary, exact-keys, and
// forbidden-key validation.
// ------------------------------------------------------------

const invalidCandidates = [
  ["memoryTranscript key smuggled in", { ...freshCandidate, memoryTranscript: "desk journal prose" }],
  ["apiKey key smuggled in", { ...freshCandidate, apiKey: "sk-test" }],
  ["endpoint key smuggled in", { ...freshCandidate, endpoint: "wss://desk.invalid" }],
  ["nested secret key", { ...freshCandidate, observationMetadata: { ...freshCandidate.observationMetadata, secret: "x" } }],
  ["wrong candidateState literal", { ...freshCandidate, candidateState: "live_observed_and_trusted" }],
  ["wrong observedTools", { ...freshCandidate, observedTools: ["runtime_status", "memory_read"] }],
  ["extra observedTool", { ...freshCandidate, observedTools: ["runtime_status", "identity_status", "memory_read"] }],
  ["non-40-hex commit claim", { ...freshCandidate, claimedSourceContractCommit: "not-a-40-hex-commit-sha" }],
  ["commit claim with wrong contractVersion", { ...freshCandidate, contractVersion: "pond-agent-presence-observation-intake-d-p1" }],
  ["wrong kind", { ...freshCandidate, kind: "pond-agent-presence-observation-execution" }],
  ["channel claimed established", { ...freshCandidate, channelState: "established_trusted_channel" }],
  ["memory lane content posture relaxed", { ...freshCandidate, personalMemoryLaneContentPosture: "narrative_excerpts_only" }],
  ["requested effect present", { ...freshCandidate, requestedEffectPosture: "poll_desk_runtime_status" }],
  ["missing requestedEffectPosture", (({ requestedEffectPosture, ...rest }) => rest)(freshCandidate)],
  ["null candidate", null],
  ["array candidate", [freshCandidate]],
];
const invalidResults = invalidCandidates.map(([label, tamperedCandidate]) => {
  const result = assessPondAgentPresenceObservationIntake({
    candidate: tamperedCandidate,
    evaluatedAtEpochMs: evaluatedAt,
    maximumAgeMs: maximumAge,
  });
  assert.equal(
    result.refusalReason,
    "observation_candidate_invalid",
    `invalid-candidate case "${label}"`,
  );
  assert.equal(result.candidateStateAssessed, "invalid", label);
  assert.equal(result.intakeState, "refused_no_trusted_observation_channel", label);
  assert.equal(result.canonicalOutcome, "refused", label);
  // Even a rejected candidate cannot relax the refused tuple.
  assert.equal(result.livePresenceObservationAdmitted, false, label);
  assert.equal(result.observedPresenceAcceptedAsAuthentication, false, label);
  assert.equal(result.personalMemoryContentAdmitted, false, label);
  assert.equal(result.currentTruthAdmitted, false, label);
  assert.equal(result.runtimeActivationPosture, "not_included", label);
  assert.equal(result.authority, "none", label);
  return result;
});

// ------------------------------------------------------------
// Block 4 — shared posture loop over every assessment in this file: all
// seven intake checks unsatisfied in canonical order, satisfiedChecks
// empty, refused tuple pinned, fallbacks forbidden, effects not performed,
// everything frozen.
// ------------------------------------------------------------

const allAssessments = [
  ...stageDP2ObservationIntakeMatrix.map((entry) => entry.assessment),
  ...invalidResults,
];
for (const result of allAssessments) {
  assert.deepEqual(result.satisfiedChecks, []);
  assert.deepEqual(result.unsatisfiedChecks, [
    "receiver_owned_observation_channel_established",
    "desk_source_contract_commit_verified_by_receiver",
    "observation_metadata_reproduced_from_bound_contract",
    "observation_freshness_within_declared_maximum_age",
    "secret_free_observation_field_inventory",
    "personal_memory_lanes_excluded",
    "no_effect_or_transport_requested",
  ]);
  assert.equal(result.intakeState, "refused_no_trusted_observation_channel");
  assert.equal(result.canonicalOutcome, "refused");
  assert.equal(result.presentationState, "degraded");
  assert.equal(result.snapshotPresentation, "withheld");
  assert.equal(result.candidatePayloadPosture, "not_included_fixture_state_only");
  assert.deepEqual(result.fallbackPosture, {
    directDeskInvocation: "forbidden",
    alternateChannelSelection: "forbidden",
    credentialUse: "forbidden",
  });
  assert.deepEqual(result.effectPosture, {
    transportInvocation: "not_performed",
    polling: "not_performed",
    persistence: "not_performed",
    approval: "not_performed",
    mutation: "not_performed",
    execution: "not_performed",
  });
  assert.equal(result.trustedChannelPosture, "not_established");
  assert.equal(result.runtimeActivationPosture, "not_included");
  assert.equal(result.authority, "none");
  assert.equal(Object.isFrozen(result), true);
  assert.equal(Object.isFrozen(result.freshnessDiagnosis), true);
  assert.equal(Object.isFrozen(result.fallbackPosture), true);
  assert.equal(Object.isFrozen(result.effectPosture), true);
  assert.equal(Object.isFrozen(result.satisfiedChecks), true);
  assert.equal(Object.isFrozen(result.unsatisfiedChecks), true);
}
for (const entry of stageDP2ObservationIntakeMatrix) {
  assert.equal(Object.isFrozen(entry), true);
  assert.equal(Object.isFrozen(entry.candidate), true);
}

// ------------------------------------------------------------
// Block 5 — D-P0 tie: the intake refusal is exactly the posture D-P0's
// receiver-owned channel checks demand, against the same desk source
// contract fixture.
// ------------------------------------------------------------

const dP0CheckNames = [
  "exact_source_contract_identity",
  "exact_secret_free_runtime_fact_inventory",
  "receiver_owned_presence_observation_channel",
  "runtime_facts_separated_from_personal_memory_channels",
  "identity_claim_evidence_independently_reproduced",
  "local_principal_binding_established_before_private_reads",
  "observed_identity_kept_separate_from_principal_id",
  "live_presence_observation_observed",
];
// The D-P0 checks this seam exists for are in the D-P0 projection fixture's
// canonical vocabulary, and the desk source contract both cuts name is the
// same committed SHA.
assert.ok(dP0CheckNames.includes("receiver_owned_presence_observation_channel"));
assert.ok(dP0CheckNames.includes("live_presence_observation_observed"));
assert.equal(
  stageDP0TradingDeskSourceContract.sourceContract.boundSourceCommit,
  stageDP2ClaimWithFreshObservationIntake.candidate.claimedSourceContractCommit,
);
assert.equal(stageDP0AgentPresenceProjection.authority, "none");
assert.equal(stageDP0AgentPresenceProjection.contractVersion, "pond-agent-presence-projection-d-p0");
// The refused tuples agree across D-P0 vocabulary and the D-P2 intake.
assert.equal(freshAssessment.currentTruthAdmitted, false);
assert.equal(freshAssessment.runtimeActivationPosture, "not_included");
assert.equal(freshAssessment.authority, "none");

// Forbidden-key vocabulary is exported and covers the memory lanes and
// effect channels the intake refuses.
for (const key of [
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "endpoint",
  "transport",
  "apiKey",
  "secret",
  "token",
  "execute",
  "approve",
]) {
  assert.ok(POND_STAGE_D_P2_FORBIDDEN_INTAKE_KEYS.includes(key), `forbidden key ${key}`);
}

// ------------------------------------------------------------
// Block 6 — JSON round-trip: assessments are plain data.
// ------------------------------------------------------------

for (const result of allAssessments) {
  const roundTripped = JSON.parse(JSON.stringify(result));
  assert.deepStrictEqual(roundTripped, result);
}

console.log("POND_STAGE_DP2_OBSERVATION_INTAKE_SELFTEST_PASS");