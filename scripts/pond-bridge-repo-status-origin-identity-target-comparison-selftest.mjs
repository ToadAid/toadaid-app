import assert from "node:assert/strict";

import { classifyPondBridgeRepoStatusObservationAge } from "../src/contracts/pond-bridge-repo-status-observation-age.ts";
import { comparePondBridgeRepoStatusOriginIdentityTarget } from "../src/contracts/pond-bridge-repo-status-origin-identity-target-comparison.ts";

const sourceBinding = {
  contractVersion: "pond-bridge-repo-status-origin-identity-source-binding-c-p8",
  supersededBinding: {
    contractVersion: "pond-bridge-repo-status-full-head-source-binding-c-p7",
    sourceCommit: "c9be94541406571eaea034aa61678e912f088cb8",
    reason: "source_contract_added_sanitized_configured_origin_identity",
  },
  responsibilityBasis: {
    concern: "workspace_repository_target_resolution",
    runtimeResponsibility: "mirror_desktop_bridge",
  },
  sourceIdentity: {
    repositoryOwner: "ToadAid",
    repositoryName: "mirror-desktop-bridge",
    branch: "main",
    commit: "56bae7363b18e180cfb5bb95da67803b2f847080",
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
    "configured_origin_identity",
    "origin_identity_posture",
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
  configuredOriginIdentityContract: {
    containerField: "adapter_snapshot",
    identityField: "configured_origin_identity",
    postureField: "origin_identity_posture",
    supportedHost: "github.com",
    identityFields: [
      "host",
      "owner",
      "name",
      "observation_basis",
      "remote_verification",
      "raw_origin_url_projected",
      "authority",
    ],
    observationBasis: "parsed_local_git_origin_url",
    remoteVerification: "not_performed",
    rawOriginUrlProjected: false,
    sourceValidationPosture:
      "optional_structurally_validated_before_adapter_projection",
  },
  sourceRuntimePosture: "implemented_default_disabled",
  sourceMcpExposurePosture: "disabled",
  sourceObservationPosture: "source_observation_time_present",
  fullHeadObservationPosture: "validated_full_head_present",
  repositoryIdentityObservationPosture:
    "configured_origin_identity_observable_not_remote_verified",
  currentTruthPosture:
    "blocked_pending_trusted_delivery_and_live_origin_proof",
  trustedChannelPosture: "not_established",
  pondTransportPosture: "not_included",
  runtimeIntegrationPosture: "not_included",
  authority: "none",
};

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
const matchingIdentity = {
  host: "github.com",
  owner: "ToadAid",
  name: "toadaid-app",
  observation_basis: "parsed_local_git_origin_url",
  remote_verification: "not_performed",
  raw_origin_url_projected: false,
  authority: "none",
};
const matchingCandidate = {
  repo_root_label: "toadaid-app",
  branch_name: "main",
  head_sha_short: "adda2fc",
  head_sha_full: "adda2fc7807a504b5621c18a3aa84ce8f3004440",
  configured_origin_identity: matchingIdentity,
  origin_identity_posture: "parsed_supported_origin",
};
const compare = (overrides = {}) =>
  comparePondBridgeRepoStatusOriginIdentityTarget({
    sourceBinding,
    expectedTarget,
    snapshotCandidate: matchingCandidate,
    ageAssessment: ageAssessment(evaluatedAtEpochMs - 30_000),
    ...overrides,
  });

assert.equal(
  sourceBinding.sourceIdentity.commit,
  "56bae7363b18e180cfb5bb95da67803b2f847080",
);
assert.deepEqual(
  sourceBinding.configuredOriginIdentityContract.identityFields,
  [
    "host",
    "owner",
    "name",
    "observation_basis",
    "remote_verification",
    "raw_origin_url_projected",
    "authority",
  ],
);

const matched = compare();
assert.equal(matched.comparisonPerformed, true);
assert.equal(matched.targetComparisonState, "matched");
assert.equal(
  matched.reason,
  "exact_fixture_values_match_trusted_delivery_not_established",
);
assert.equal(matched.exactTargetMatchEstablished, true);
assert.equal(
  matched.exactTargetMatchPosture,
  "exact_supplied_fixture_values_only",
);
assert.deepEqual(matched.conflictDimensions, []);
assert.equal(matched.comparisonEvidence.projected.rawOriginUrlProjected, false);

const conflictCases = [
  [
    {
      ...matchingCandidate,
      configured_origin_identity: { ...matchingIdentity, owner: "Other" },
    },
    ["repository_owner"],
  ],
  [
    {
      ...matchingCandidate,
      configured_origin_identity: { ...matchingIdentity, name: "other-repo" },
    },
    ["repository_name"],
  ],
  [{ ...matchingCandidate, repo_root_label: "other-repo" }, ["repository_name_from_root_label"]],
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
      ...matchingCandidate,
      repo_root_label: "other-repo",
      branch_name: "feature",
      head_sha_short: "abcdef1",
      head_sha_full: "abcdef1234567890abcdef1234567890abcdef12",
      configured_origin_identity: {
        ...matchingIdentity,
        owner: "Other",
        name: "other-repo",
      },
    },
    [
      "repository_owner",
      "repository_name",
      "repository_name_from_root_label",
      "branch_name",
      "head_commit_full",
    ],
  ],
];
const conflicts = conflictCases.map(([snapshotCandidate, dimensions]) => {
  const result = compare({ snapshotCandidate });
  assert.equal(result.comparisonPerformed, true);
  assert.equal(result.targetComparisonState, "conflicting");
  assert.equal(result.reason, "projected_fields_conflict");
  assert.deepEqual(result.conflictDimensions, dimensions);
  assert.equal(result.canonicalConflictEstablished, false);
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
        projectedSnapshotFields:
          sourceBinding.projectedSnapshotFields.slice(0, -1),
      },
    },
    "source_binding_invalid",
  ],
  [
    { ageAssessment: ageAssessment(evaluatedAtEpochMs - 60_001) },
    "observation_age_not_fresh",
  ],
  [{ expectedTarget: null }, "expected_target_invalid"],
  [{ snapshotCandidate: null }, "snapshot_candidate_invalid"],
  [
    { snapshotCandidate: { ...matchingCandidate, configured_origin_identity: null } },
    "snapshot_candidate_invalid",
  ],
  [
    {
      snapshotCandidate: {
        ...matchingCandidate,
        configured_origin_identity: null,
        origin_identity_posture: "origin_unavailable_or_unsupported",
      },
    },
    "snapshot_candidate_invalid",
  ],
  [
    {
      snapshotCandidate: {
        ...matchingCandidate,
        configured_origin_identity: {
          ...matchingIdentity,
          raw_origin_url: "https://token@github.com/ToadAid/toadaid-app.git",
        },
      },
    },
    "snapshot_candidate_invalid",
  ],
  [
    { snapshotCandidate: { ...matchingCandidate, head_sha_full: "not-a-sha" } },
    "snapshot_candidate_invalid",
  ],
  [
    { snapshotCandidate: { ...matchingCandidate, head_sha_short: "abcdef1" } },
    "snapshot_candidate_invalid",
  ],
];
const refused = refusedCases.map(([overrides, reason]) => {
  const result = compare(overrides);
  assert.equal(result.comparisonPerformed, false);
  assert.equal(result.targetComparisonState, "insufficient_evidence");
  assert.equal(result.reason, reason);
  assert.equal(result.comparisonEvidence, null);
  assert.deepEqual(result.conflictDimensions, []);
  return result;
});

for (const result of [matched, ...conflicts, ...refused]) {
  assert.equal(result.canonicalConflictEstablished, false);
  assert.equal(result.currentTruthAdmitted, false);
  assert.equal(result.snapshotPresentation, "withheld");
  assert.equal(result.presentationState, "degraded");
  assert.equal(result.remoteVerificationPosture, "not_performed");
  assert.equal(result.trustedChannelPosture, "not_established");
  assert.equal(result.canonicalOutcome, "insufficient_evidence");
  assert.equal(result.authority, "none");
  assert.equal(Object.isFrozen(result), true);
}

console.log("POND_STAGE_CP8_ORIGIN_IDENTITY_TARGET_COMPARISON_SELFTEST_PASS");
