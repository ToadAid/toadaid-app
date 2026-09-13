import assert from "node:assert/strict";

import { classifyPondBridgeRepoStatusObservationAge } from "../src/contracts/pond-bridge-repo-status-observation-age.ts";
import { comparePondBridgeRepoStatusTarget } from "../src/contracts/pond-bridge-repo-status-target-comparison.ts";

const evaluatedAtEpochMs = 1_800_000_060_000;
const ageAssessment = (observedAtEpochMs) =>
  classifyPondBridgeRepoStatusObservationAge({
    observationMetadata: {
      observed_at_epoch_ms: observedAtEpochMs,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    },
    evaluatedAtEpochMs,
    maximumAgeMs: 60_000,
  });
const expectedTarget = {
  contractVersion: "pond-read-only-repository-target-c-p1",
  repository: {
    owner: "ToadAid",
    name: "toadaid-app",
    identityPosture: "fixture_exact_owner_name_not_remote_verified",
  },
  branch: {
    name: "main",
    bindingPosture: "fixture_branch_name_not_live_resolved",
  },
  head: {
    commit: "adda2fc7807a504b5621c18a3aa84ce8f3004440",
    bindingPosture: "fixture_parent_commit_not_live_head",
  },
  path: {
    pathClass: "repository_root",
    repositoryRelativePath: ".",
    bindingPosture: "fixture_exact_repository_root",
  },
  operationClass: "read",
  operationPosture: "identity_only_not_performed",
  targetPosture:
    "fixture_identity_only_not_grant_or_authoritative_runtime_target",
  authority: "none",
};
const matchingCandidate = {
  repo_root_label: "toadaid-app",
  branch_name: "main",
  head_sha_short: "adda2fc",
};
const compare = (overrides = {}) =>
  comparePondBridgeRepoStatusTarget({
    expectedTarget,
    snapshotCandidate: matchingCandidate,
    ageAssessment: ageAssessment(evaluatedAtEpochMs - 30_000),
    ...overrides,
  });

const partial = compare();
assert.equal(partial.comparisonPerformed, true);
assert.equal(partial.targetComparisonState, "insufficient_evidence");
assert.equal(
  partial.reason,
  "exact_repository_owner_and_full_head_not_observable",
);
assert.deepEqual(partial.conflictDimensions, []);
assert.equal(
  partial.comparisonEvidence.fieldComparisons.repositoryOwner,
  "not_observable_by_bound_source_contract",
);
assert.equal(
  partial.comparisonEvidence.fieldComparisons.headCommitFull,
  "not_observable_by_bound_source_contract",
);

const conflictCases = [
  [
    { ...matchingCandidate, repo_root_label: "other-repo" },
    ["repository_name_from_root_label"],
  ],
  [{ ...matchingCandidate, branch_name: "feature" }, ["branch_name"]],
  [{ ...matchingCandidate, head_sha_short: "abcdef1" }, ["head_commit_prefix"]],
  [
    {
      repo_root_label: "other-repo",
      branch_name: "feature",
      head_sha_short: "abcdef1",
    },
    ["repository_name_from_root_label", "branch_name", "head_commit_prefix"],
  ],
];
const conflictResults = conflictCases.map(([snapshotCandidate, dimensions]) => {
  const result = compare({ snapshotCandidate });
  assert.equal(result.comparisonPerformed, true);
  assert.equal(result.targetComparisonState, "conflicting");
  assert.equal(result.reason, "projected_fields_conflict");
  assert.deepEqual(result.conflictDimensions, dimensions);
  assert.equal(result.canonicalConflictEstablished, false);
  return result;
});

const refusedCases = [
  [
    { ageAssessment: ageAssessment(evaluatedAtEpochMs - 60_001) },
    "observation_age_not_fresh",
  ],
  [
    {
      ageAssessment: {
        ...ageAssessment(evaluatedAtEpochMs - 30_000),
        observationAgeMs: 0,
      },
    },
    "observation_age_not_fresh",
  ],
  [{ expectedTarget: null }, "expected_target_invalid"],
  [{ snapshotCandidate: null }, "snapshot_candidate_invalid"],
  [
    { snapshotCandidate: { ...matchingCandidate, head_sha_short: "not-a-sha" } },
    "snapshot_candidate_invalid",
  ],
];
const refusedResults = refusedCases.map(([overrides, reason]) => {
  const result = compare(overrides);
  assert.equal(result.comparisonPerformed, false);
  assert.equal(result.targetComparisonState, "insufficient_evidence");
  assert.equal(result.reason, reason);
  assert.equal(result.comparisonEvidence, null);
  assert.deepEqual(result.conflictDimensions, []);
  return result;
});

for (const result of [partial, ...conflictResults, ...refusedResults]) {
  assert.equal(result.sourceBindingComparisonPosture, "not_performed_fixture_dependency_only");
  assert.equal(result.canonicalConflictEstablished, false);
  assert.equal(result.exactTargetMatchEstablished, false);
  assert.equal(result.currentTruthAdmitted, false);
  assert.equal(result.snapshotPresentation, "withheld");
  assert.equal(result.presentationState, "degraded");
  assert.equal(result.trustedChannelPosture, "not_established");
  assert.equal(result.canonicalOutcome, "insufficient_evidence");
  assert.equal(result.authority, "none");
  assert.equal(Object.isFrozen(result), true);
}

console.log("POND_STAGE_CP6_TARGET_COMPARISON_SELFTEST_PASS");
