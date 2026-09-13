import assert from "node:assert/strict";

import {
  POND_STAGE_CP5_FIXTURE_MAXIMUM_AGE_MS,
  classifyPondBridgeRepoStatusObservationAge,
} from "../src/contracts/pond-bridge-repo-status-observation-age.ts";

const evaluatedAtEpochMs = 1_800_000_060_000;
const metadata = (observedAtEpochMs) => ({
  observed_at_epoch_ms: observedAtEpochMs,
  freshness_basis: "source_observation_time_only",
  currentness_posture: "not_established_consumer_must_evaluate",
});
const classify = (observationMetadata, overrides = {}) =>
  classifyPondBridgeRepoStatusObservationAge({
    observationMetadata,
    evaluatedAtEpochMs,
    maximumAgeMs: POND_STAGE_CP5_FIXTURE_MAXIMUM_AGE_MS,
    ...overrides,
  });

const fresh = classify(metadata(evaluatedAtEpochMs - 30_000));
assert.equal(fresh.observationAgeState, "fresh");
assert.equal(fresh.reason, "within_declared_maximum_age");
assert.equal(fresh.observationAgeMs, 30_000);

const exactBoundary = classify(
  metadata(evaluatedAtEpochMs - POND_STAGE_CP5_FIXTURE_MAXIMUM_AGE_MS),
);
assert.equal(exactBoundary.observationAgeState, "fresh");
assert.equal(exactBoundary.observationAgeMs, 60_000);

const stale = classify(
  metadata(evaluatedAtEpochMs - POND_STAGE_CP5_FIXTURE_MAXIMUM_AGE_MS - 1),
);
assert.equal(stale.observationAgeState, "stale");
assert.equal(stale.reason, "declared_maximum_age_expired");
assert.equal(stale.observationAgeMs, 60_001);

const future = classify(metadata(evaluatedAtEpochMs + 1));
assert.equal(future.observationAgeState, "unknown");
assert.equal(future.reason, "observation_time_in_future");
assert.equal(future.observationAgeMs, null);

const invalidCases = [
  [null, {}, "observation_metadata_missing_or_invalid"],
  [metadata(-1), {}, "observation_metadata_missing_or_invalid"],
  [
    { ...metadata(evaluatedAtEpochMs), freshness_basis: "invented" },
    {},
    "observation_metadata_missing_or_invalid",
  ],
  [
    {
      ...metadata(evaluatedAtEpochMs),
      currentness_posture: "current",
    },
    {},
    "observation_metadata_missing_or_invalid",
  ],
  [metadata(evaluatedAtEpochMs), { evaluatedAtEpochMs: Number.NaN }, "evaluation_time_invalid"],
  [metadata(evaluatedAtEpochMs), { maximumAgeMs: -1 }, "maximum_age_invalid"],
];

const invalidResults = invalidCases.map(
  ([observationMetadata, overrides, expectedReason]) => {
    const result = classify(observationMetadata, overrides);
    assert.equal(result.observationAgeState, "unknown");
    assert.equal(result.reason, expectedReason);
    assert.equal(result.observationAgeMs, null);
    return result;
  },
);

for (const result of [fresh, exactBoundary, stale, future, ...invalidResults]) {
  assert.equal(result.currentTruthAdmitted, false);
  assert.equal(result.snapshotPresentation, "withheld");
  assert.equal(result.presentationState, "degraded");
  assert.equal(
    result.sourceBindingComparisonPosture,
    "not_performed_fixture_dependency_only",
  );
  assert.equal(result.targetComparisonPosture, "not_performed");
  assert.equal(result.trustedChannelPosture, "not_established");
  assert.equal(result.canonicalOutcome, "insufficient_evidence");
  assert.equal(result.authority, "none");
  assert.equal(Object.isFrozen(result), true);
}

console.log("POND_STAGE_CP5_OBSERVATION_AGE_SELFTEST_PASS");
