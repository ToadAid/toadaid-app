import assert from "node:assert/strict";

import { classifyPondBridgeRepoStatusObservationAge } from "../src/contracts/pond-bridge-repo-status-observation-age.ts";
import { comparePondBridgeRepoStatusFullHeadTarget } from "../src/contracts/pond-bridge-repo-status-full-head-target-comparison.ts";

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
const sourceBinding = {
  contractVersion: "pond-bridge-repo-status-full-head-source-binding-c-p7",
  supersededBinding: {
    contractVersion:
      "pond-bridge-repo-status-observation-source-binding-c-p4",
    sourceCommit: "dfc9b59084e36324b1d97c0e8f9f1f72441970d7",
    reason: "source_contract_added_validated_full_head",
  },
  responsibilityBasis: {
    concern: "workspace_repository_target_resolution",
    runtimeResponsibility: "mirror_desktop_bridge",
  },
  sourceIdentity: {
    repositoryOwner: "ToadAid",
    repositoryName: "mirror-desktop-bridge",
    branch: "main",
    commit: "c9be94541406571eaea034aa61678e912f088cb8",
    modulePath: "src/liveReadOnlyRepoStatusAdapterIntegration.ts",
    resultType: "LiveRepoStatusIntegrationResult",
    snapshotType: "IntegratedRepoStatusAdapterSnapshot",
    stage: "stage_1i_live_readonly_repo_status_adapter_integration",
    mode: "gated_live_client_adapter_integration",
    integrationId: "integration.live-repo-status.adapter",
    bindingPosture: "exact_merged_source_contract_identity",
  },
  projectedResultFields: [
    "state",
    "safe_to_display",
    "adapter_snapshot",
    "live_client_evidence_reference",
    "redaction_report",
    "truncation_report",
    "receipt_reference",
    "blocked_reasons",
    "blocked_authority_statement",
  ],
  projectedSnapshotFields: [
    "repo_root_label",
    "branch_name",
    "head_sha_short",
    "upstream_label",
    "upstream_available",
    "has_uncommitted_changes",
    "has_untracked_changes",
    "has_staged_changes",
    "has_unstaged_changes",
    "ahead_count",
    "behind_count",
    "status_summary",
    "evidence_reference",
    "truncation_report",
    "prompt_injection_boundary",
    "observation_metadata",
    "head_sha_full",
  ],
  observationMetadataContract: {
    containerField: "observation_metadata",
    observedAtField: "observed_at_epoch_ms",
    observedAtUnit: "unix_epoch_milliseconds",
    freshnessBasisField: "freshness_basis",
    freshnessBasis: "source_observation_time_only",
    currentnessPostureField: "currentness_posture",
    currentnessPosture: "not_established_consumer_must_evaluate",
  },
  fullHeadContract: {
    containerField: "adapter_snapshot",
    field: "head_sha_full",
    format: "lowercase_hex_40",
    sourceValidationPosture: "required_fail_closed_before_ready",
  },
  sourceRuntimePosture: "implemented_default_disabled",
  sourceMcpExposurePosture: "disabled",
  sourceObservationPosture: "source_observation_time_present",
  fullHeadObservationPosture: "validated_full_head_present",
  repositoryOwnerObservationPosture:
    "not_observable_by_bound_source_contract",
  currentTruthPosture:
    "blocked_pending_exact_repository_owner_and_trusted_channel",
  trustedChannelPosture: "not_established",
  pondTransportPosture: "not_included",
  runtimeIntegrationPosture: "not_included",
  authority: "none",
};

const evaluatedAtEpochMs = 1_800_000_060_000;
const freshAgeAssessment = classifyPondBridgeRepoStatusObservationAge({
  observationMetadata: {
    observed_at_epoch_ms: evaluatedAtEpochMs - 30_000,
    freshness_basis: "source_observation_time_only",
    currentness_posture: "not_established_consumer_must_evaluate",
  },
  evaluatedAtEpochMs,
  maximumAgeMs: 60_000,
});
const matchingCandidate = {
  repo_root_label: "toadaid-app",
  branch_name: "main",
  head_sha_short: "adda2fc",
  head_sha_full: "adda2fc7807a504b5621c18a3aa84ce8f3004440",
};
const compare = (overrides = {}) =>
  comparePondBridgeRepoStatusFullHeadTarget({
    sourceBinding,
    expectedTarget,
    snapshotCandidate: matchingCandidate,
    ageAssessment: freshAgeAssessment,
    ...overrides,
  });

assert.equal(sourceBinding.sourceIdentity.commit, "c9be94541406571eaea034aa61678e912f088cb8");
assert.equal(
  sourceBinding.projectedSnapshotFields.at(-1),
  "head_sha_full",
);
assert.equal(
  sourceBinding.repositoryOwnerObservationPosture,
  "not_observable_by_bound_source_contract",
);

const matching = compare();
assert.equal(matching.comparisonPerformed, true);
assert.equal(matching.targetComparisonState, "insufficient_evidence");
assert.equal(matching.reason, "exact_repository_owner_not_observable");
assert.deepEqual(matching.conflictDimensions, []);
assert.equal(
  matching.comparisonEvidence.fieldComparisons.headCommitFull,
  "matched",
);
assert.equal(
  matching.comparisonEvidence.fieldComparisons.repositoryOwner,
  "not_observable_by_bound_source_contract",
);
assert.equal(
  matching.comparisonEvidence.projected.headShaFull,
  expectedTarget.head.commit,
);

const conflictCases = [
  [
    { ...matchingCandidate, repo_root_label: "other-repo" },
    ["repository_name_from_root_label"],
  ],
  [{ ...matchingCandidate, branch_name: "feature" }, ["branch_name"]],
  [
    {
      ...matchingCandidate,
      head_sha_short: "abcdef1",
      head_sha_full: "abcdef1234567890abcdef1234567890abcdef12",
    },
    ["head_commit_full"],
  ],
  [
    {
      repo_root_label: "other-repo",
      branch_name: "feature",
      head_sha_short: "abcdef1",
      head_sha_full: "abcdef1234567890abcdef1234567890abcdef12",
    },
    ["repository_name_from_root_label", "branch_name", "head_commit_full"],
  ],
];
const conflictResults = conflictCases.map(([snapshotCandidate, dimensions]) => {
  const result = compare({ snapshotCandidate });
  assert.equal(result.comparisonPerformed, true);
  assert.equal(result.targetComparisonState, "conflicting");
  assert.equal(result.reason, "projected_fields_conflict");
  assert.deepEqual(result.conflictDimensions, dimensions);
  return result;
});

const refusedCases = [
  [{ sourceBinding: null }, "source_binding_invalid"],
  [
    {
      sourceBinding: {
        ...sourceBinding,
        sourceIdentity: {
          ...sourceBinding.sourceIdentity,
          commit: "0000000000000000000000000000000000000000",
        },
      },
    },
    "source_binding_invalid",
  ],
  [
    {
      sourceBinding: {
        ...sourceBinding,
        projectedSnapshotFields: sourceBinding.projectedSnapshotFields.slice(
          0,
          -1,
        ),
      },
    },
    "source_binding_invalid",
  ],
  [
    {
      ageAssessment: classifyPondBridgeRepoStatusObservationAge({
        observationMetadata: {
          observed_at_epoch_ms: evaluatedAtEpochMs - 60_001,
          freshness_basis: "source_observation_time_only",
          currentness_posture: "not_established_consumer_must_evaluate",
        },
        evaluatedAtEpochMs,
        maximumAgeMs: 60_000,
      }),
    },
    "observation_age_not_fresh",
  ],
  [{ expectedTarget: null }, "expected_target_invalid"],
  [{ snapshotCandidate: null }, "snapshot_candidate_invalid"],
  [
    { snapshotCandidate: { ...matchingCandidate, head_sha_full: "adda2fc" } },
    "snapshot_candidate_invalid",
  ],
  [
    {
      snapshotCandidate: {
        ...matchingCandidate,
        head_sha_short: "abcdef1",
      },
    },
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

for (const result of [matching, ...conflictResults, ...refusedResults]) {
  assert.equal(
    result.sourceBindingComparisonPosture,
    result.reason === "source_binding_invalid"
      ? "not_performed_source_binding_invalid"
      : "exact_fixture_source_binding_validated_no_live_origin_proof",
  );
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

console.log("POND_STAGE_CP7_FULL_HEAD_TARGET_COMPARISON_SELFTEST_PASS");
