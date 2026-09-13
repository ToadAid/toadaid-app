// Stage C-P7 exact full-HEAD target comparison over supplied fixture data.
//
// Full-HEAD equality improves target evidence but cannot establish exact
// repository identity while repository owner and trusted delivery are absent.

import type { PondBridgeRepoStatusObservationAgeAssessment } from "./pond-bridge-repo-status-observation-age.js";
import type { PondBridgeRepoStatusFullHeadSourceBindingFixture } from "./pond-bridge-repo-status-full-head-source-binding.js";
import type { PondReadOnlyRepositoryTargetFixture } from "./pond-read-only-repository-target.js";

export type PondBridgeFullHeadTargetConflictDimension =
  | "repository_name_from_root_label"
  | "branch_name"
  | "head_commit_full";

export type PondBridgeFullHeadTargetComparisonReason =
  | "source_binding_invalid"
  | "observation_age_not_fresh"
  | "expected_target_invalid"
  | "snapshot_candidate_invalid"
  | "projected_fields_conflict"
  | "exact_repository_owner_not_observable";

export interface PondBridgeFullHeadTargetComparisonInput {
  readonly sourceBinding: unknown;
  readonly expectedTarget: unknown;
  readonly snapshotCandidate: unknown;
  readonly ageAssessment: unknown;
}

interface PondBridgeFullHeadTargetComparisonBase {
  readonly contractVersion:
    "pond-bridge-repo-status-full-head-target-comparison-c-p7";
  readonly sourceBindingContractVersion:
    PondBridgeRepoStatusFullHeadSourceBindingFixture["contractVersion"];
  readonly targetSchemaContractVersion:
    PondReadOnlyRepositoryTargetFixture["contractVersion"];
  readonly ageAssessmentContractVersion:
    PondBridgeRepoStatusObservationAgeAssessment["contractVersion"];
  readonly comparisonKind:
    "deterministic_fixture_sanitized_full_head_comparison";
  readonly targetComparisonState: "conflicting" | "insufficient_evidence";
  readonly reason: PondBridgeFullHeadTargetComparisonReason;
  readonly sourceBindingComparisonPosture:
    | "not_performed_source_binding_invalid"
    | "exact_fixture_source_binding_validated_no_live_origin_proof";
  readonly canonicalConflictEstablished: false;
  readonly exactTargetMatchEstablished: false;
  readonly currentTruthAdmitted: false;
  readonly snapshotPresentation: "withheld";
  readonly presentationState: "degraded";
  readonly trustedChannelPosture: "not_established";
  readonly canonicalOutcome: "insufficient_evidence";
  readonly authority: "none";
}

export interface PondBridgeFullHeadTargetComparisonEvidence {
  readonly source: {
    readonly repositoryOwner: "ToadAid";
    readonly repositoryName: "mirror-desktop-bridge";
    readonly branch: "main";
    readonly commit: "c9be94541406571eaea034aa61678e912f088cb8";
    readonly projectedFullHeadField: "head_sha_full";
  };
  readonly expected: {
    readonly repositoryOwner: string;
    readonly repositoryName: string;
    readonly branchName: string;
    readonly headCommit: string;
    readonly pathClass: "repository_root";
  };
  readonly projected: {
    readonly repoRootLabel: string;
    readonly branchName: string;
    readonly headShaShort: string;
    readonly headShaFull: string;
    readonly repositoryOwner: null;
  };
  readonly fieldComparisons: {
    readonly repositoryNameFromRootLabel: "matched" | "conflicting";
    readonly branchName: "matched" | "conflicting";
    readonly headCommitFull: "matched" | "conflicting";
    readonly repositoryOwner: "not_observable_by_bound_source_contract";
  };
  readonly repoRootLabelComparisonPosture:
    "sanitized_basename_candidate_not_repository_identity_proof";
  readonly fullHeadComparisonPosture:
    "exact_40_hex_value_compared_fixture_only";
}

export type PondBridgeFullHeadTargetComparisonAssessment =
  | (PondBridgeFullHeadTargetComparisonBase & {
      readonly comparisonPerformed: false;
      readonly targetComparisonState: "insufficient_evidence";
      readonly reason:
        | "source_binding_invalid"
        | "observation_age_not_fresh"
        | "expected_target_invalid"
        | "snapshot_candidate_invalid";
      readonly comparisonEvidence: null;
      readonly conflictDimensions: readonly [];
    })
  | (PondBridgeFullHeadTargetComparisonBase & {
      readonly comparisonPerformed: true;
      readonly reason:
        | "projected_fields_conflict"
        | "exact_repository_owner_not_observable";
      readonly comparisonEvidence: PondBridgeFullHeadTargetComparisonEvidence;
      readonly conflictDimensions:
        readonly PondBridgeFullHeadTargetConflictDimension[];
    });

const baseAssessment = Object.freeze({
  contractVersion:
    "pond-bridge-repo-status-full-head-target-comparison-c-p7",
  sourceBindingContractVersion:
    "pond-bridge-repo-status-full-head-source-binding-c-p7",
  targetSchemaContractVersion: "pond-read-only-repository-target-c-p1",
  ageAssessmentContractVersion:
    "pond-bridge-repo-status-observation-age-c-p5",
  comparisonKind: "deterministic_fixture_sanitized_full_head_comparison",
  canonicalConflictEstablished: false,
  exactTargetMatchEstablished: false,
  currentTruthAdmitted: false,
  snapshotPresentation: "withheld",
  presentationState: "degraded",
  trustedChannelPosture: "not_established",
  canonicalOutcome: "insufficient_evidence",
  authority: "none",
} as const);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;

const boundedText = (value: unknown, maximumLength: number): value is string =>
  typeof value === "string" &&
  value.length > 0 &&
  value.length <= maximumLength &&
  value === value.trim() &&
  !/[\u0000-\u001f\u007f]/.test(value);

const fullCommit = (value: unknown): value is string =>
  typeof value === "string" && /^[0-9a-f]{40}$/.test(value);

const shortCommit = (value: unknown): value is string =>
  typeof value === "string" && /^[0-9a-f]{7,40}$/.test(value);

const nonNegativeSafeInteger = (value: unknown): value is number =>
  Number.isSafeInteger(value) && Number(value) >= 0;

const exactStringArray = (
  value: unknown,
  expected: readonly string[],
): boolean =>
  Array.isArray(value) &&
  value.length === expected.length &&
  value.every((entry, index) => entry === expected[index]);

const validSourceBinding = (
  value: unknown,
): value is PondBridgeRepoStatusFullHeadSourceBindingFixture => {
  const candidate = record(value);
  const superseded = record(candidate?.supersededBinding);
  const responsibility = record(candidate?.responsibilityBasis);
  const source = record(candidate?.sourceIdentity);
  const observationMetadata = record(candidate?.observationMetadataContract);
  const fullHead = record(candidate?.fullHeadContract);
  return (
    candidate?.contractVersion ===
      "pond-bridge-repo-status-full-head-source-binding-c-p7" &&
    superseded?.contractVersion ===
      "pond-bridge-repo-status-observation-source-binding-c-p4" &&
    superseded.sourceCommit ===
      "dfc9b59084e36324b1d97c0e8f9f1f72441970d7" &&
    superseded.reason === "source_contract_added_validated_full_head" &&
    responsibility?.concern === "workspace_repository_target_resolution" &&
    responsibility.runtimeResponsibility === "mirror_desktop_bridge" &&
    source?.repositoryOwner === "ToadAid" &&
    source.repositoryName === "mirror-desktop-bridge" &&
    source.branch === "main" &&
    source.commit === "c9be94541406571eaea034aa61678e912f088cb8" &&
    source.modulePath ===
      "src/liveReadOnlyRepoStatusAdapterIntegration.ts" &&
    source.resultType === "LiveRepoStatusIntegrationResult" &&
    source.snapshotType === "IntegratedRepoStatusAdapterSnapshot" &&
    source.stage === "stage_1i_live_readonly_repo_status_adapter_integration" &&
    source.mode === "gated_live_client_adapter_integration" &&
    source.integrationId === "integration.live-repo-status.adapter" &&
    source.bindingPosture === "exact_merged_source_contract_identity" &&
    exactStringArray(candidate.projectedResultFields, [
      "state",
      "safe_to_display",
      "adapter_snapshot",
      "live_client_evidence_reference",
      "redaction_report",
      "truncation_report",
      "receipt_reference",
      "blocked_reasons",
      "blocked_authority_statement",
    ]) &&
    exactStringArray(candidate.projectedSnapshotFields, [
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
    ]) &&
    observationMetadata?.containerField === "observation_metadata" &&
    observationMetadata.observedAtField === "observed_at_epoch_ms" &&
    observationMetadata.observedAtUnit === "unix_epoch_milliseconds" &&
    observationMetadata.freshnessBasisField === "freshness_basis" &&
    observationMetadata.freshnessBasis === "source_observation_time_only" &&
    observationMetadata.currentnessPostureField === "currentness_posture" &&
    observationMetadata.currentnessPosture ===
      "not_established_consumer_must_evaluate" &&
    fullHead?.containerField === "adapter_snapshot" &&
    fullHead.field === "head_sha_full" &&
    fullHead.format === "lowercase_hex_40" &&
    fullHead.sourceValidationPosture ===
      "required_fail_closed_before_ready" &&
    candidate.sourceRuntimePosture === "implemented_default_disabled" &&
    candidate.sourceMcpExposurePosture === "disabled" &&
    candidate.sourceObservationPosture === "source_observation_time_present" &&
    candidate.fullHeadObservationPosture === "validated_full_head_present" &&
    candidate.repositoryOwnerObservationPosture ===
      "not_observable_by_bound_source_contract" &&
    candidate.currentTruthPosture ===
      "blocked_pending_exact_repository_owner_and_trusted_channel" &&
    candidate.trustedChannelPosture === "not_established" &&
    candidate.pondTransportPosture === "not_included" &&
    candidate.runtimeIntegrationPosture === "not_included" &&
    candidate.authority === "none"
  );
};

const freshAgeAssessment = (
  value: unknown,
): value is PondBridgeRepoStatusObservationAgeAssessment & {
  readonly observationAgeState: "fresh";
} => {
  const candidate = record(value);
  return (
    candidate?.contractVersion ===
      "pond-bridge-repo-status-observation-age-c-p5" &&
    candidate.metadataSchemaContractVersion ===
      "pond-bridge-repo-status-observation-source-binding-c-p4" &&
    candidate.assessmentKind === "deterministic_fixture_observation_age" &&
    candidate.observationAgeState === "fresh" &&
    candidate.reason === "within_declared_maximum_age" &&
    nonNegativeSafeInteger(candidate.observedAtEpochMs) &&
    nonNegativeSafeInteger(candidate.evaluatedAtEpochMs) &&
    nonNegativeSafeInteger(candidate.maximumAgeMs) &&
    nonNegativeSafeInteger(candidate.observationAgeMs) &&
    candidate.observedAtEpochMs <= candidate.evaluatedAtEpochMs &&
    candidate.observationAgeMs ===
      candidate.evaluatedAtEpochMs - candidate.observedAtEpochMs &&
    candidate.observationAgeMs <= candidate.maximumAgeMs &&
    candidate.freshnessBasis ===
      "source_observation_time_compared_to_fixture_declared_maximum_age" &&
    candidate.currentTruthAdmitted === false &&
    candidate.snapshotPresentation === "withheld" &&
    candidate.trustedChannelPosture === "not_established" &&
    candidate.canonicalOutcome === "insufficient_evidence" &&
    candidate.authority === "none"
  );
};

interface ValidExpectedTarget {
  readonly repositoryOwner: string;
  readonly repositoryName: string;
  readonly branchName: string;
  readonly headCommit: string;
}

const validExpectedTarget = (value: unknown): ValidExpectedTarget | null => {
  const target = record(value);
  const repository = record(target?.repository);
  const branch = record(target?.branch);
  const head = record(target?.head);
  const path = record(target?.path);
  if (
    target?.contractVersion !== "pond-read-only-repository-target-c-p1" ||
    !boundedText(repository?.owner, 160) ||
    !boundedText(repository?.name, 160) ||
    repository.identityPosture !==
      "fixture_exact_owner_name_not_remote_verified" ||
    !boundedText(branch?.name, 160) ||
    branch.bindingPosture !== "fixture_branch_name_not_live_resolved" ||
    !fullCommit(head?.commit) ||
    head.bindingPosture !== "fixture_parent_commit_not_live_head" ||
    path?.pathClass !== "repository_root" ||
    path.repositoryRelativePath !== "." ||
    path.bindingPosture !== "fixture_exact_repository_root" ||
    target?.operationClass !== "read" ||
    target.operationPosture !== "identity_only_not_performed" ||
    target.targetPosture !==
      "fixture_identity_only_not_grant_or_authoritative_runtime_target" ||
    target.authority !== "none"
  ) {
    return null;
  }
  return Object.freeze({
    repositoryOwner: repository.owner,
    repositoryName: repository.name,
    branchName: branch.name,
    headCommit: head.commit,
  });
};

interface ValidSnapshotCandidate {
  readonly repoRootLabel: string;
  readonly branchName: string;
  readonly headShaShort: string;
  readonly headShaFull: string;
}

const validSnapshotCandidate = (
  value: unknown,
): ValidSnapshotCandidate | null => {
  const candidate = record(value);
  if (
    candidate === null ||
    !boundedText(candidate.repo_root_label, 160) ||
    !boundedText(candidate.branch_name, 160) ||
    !shortCommit(candidate.head_sha_short) ||
    !fullCommit(candidate.head_sha_full) ||
    !candidate.head_sha_full.startsWith(candidate.head_sha_short)
  ) {
    return null;
  }
  return Object.freeze({
    repoRootLabel: candidate.repo_root_label,
    branchName: candidate.branch_name,
    headShaShort: candidate.head_sha_short,
    headShaFull: candidate.head_sha_full,
  });
};

const notPerformed = (
  reason: Extract<
    PondBridgeFullHeadTargetComparisonReason,
    | "source_binding_invalid"
    | "observation_age_not_fresh"
    | "expected_target_invalid"
    | "snapshot_candidate_invalid"
  >,
): PondBridgeFullHeadTargetComparisonAssessment =>
  Object.freeze({
    ...baseAssessment,
    sourceBindingComparisonPosture:
      reason === "source_binding_invalid"
        ? "not_performed_source_binding_invalid"
        : "exact_fixture_source_binding_validated_no_live_origin_proof",
    comparisonPerformed: false,
    targetComparisonState: "insufficient_evidence",
    reason,
    comparisonEvidence: null,
    conflictDimensions: Object.freeze([] as const),
  });

export function comparePondBridgeRepoStatusFullHeadTarget(
  input: PondBridgeFullHeadTargetComparisonInput,
): PondBridgeFullHeadTargetComparisonAssessment {
  if (!validSourceBinding(input.sourceBinding)) {
    return notPerformed("source_binding_invalid");
  }
  if (!freshAgeAssessment(input.ageAssessment)) {
    return notPerformed("observation_age_not_fresh");
  }
  const expected = validExpectedTarget(input.expectedTarget);
  if (expected === null) return notPerformed("expected_target_invalid");
  const projected = validSnapshotCandidate(input.snapshotCandidate);
  if (projected === null) return notPerformed("snapshot_candidate_invalid");

  const repositoryNameFromRootLabel =
    projected.repoRootLabel === expected.repositoryName
      ? "matched"
      : "conflicting";
  const branchName =
    projected.branchName === expected.branchName ? "matched" : "conflicting";
  const headCommitFull =
    projected.headShaFull === expected.headCommit ? "matched" : "conflicting";
  const conflictDimensions: PondBridgeFullHeadTargetConflictDimension[] = [];
  if (repositoryNameFromRootLabel === "conflicting")
    conflictDimensions.push("repository_name_from_root_label");
  if (branchName === "conflicting") conflictDimensions.push("branch_name");
  if (headCommitFull === "conflicting")
    conflictDimensions.push("head_commit_full");

  const comparisonEvidence = Object.freeze({
    source: Object.freeze({
      repositoryOwner: "ToadAid" as const,
      repositoryName: "mirror-desktop-bridge" as const,
      branch: "main" as const,
      commit: "c9be94541406571eaea034aa61678e912f088cb8" as const,
      projectedFullHeadField: "head_sha_full" as const,
    }),
    expected: Object.freeze({
      repositoryOwner: expected.repositoryOwner,
      repositoryName: expected.repositoryName,
      branchName: expected.branchName,
      headCommit: expected.headCommit,
      pathClass: "repository_root" as const,
    }),
    projected: Object.freeze({
      repoRootLabel: projected.repoRootLabel,
      branchName: projected.branchName,
      headShaShort: projected.headShaShort,
      headShaFull: projected.headShaFull,
      repositoryOwner: null,
    }),
    fieldComparisons: Object.freeze({
      repositoryNameFromRootLabel,
      branchName,
      headCommitFull,
      repositoryOwner: "not_observable_by_bound_source_contract" as const,
    }),
    repoRootLabelComparisonPosture:
      "sanitized_basename_candidate_not_repository_identity_proof" as const,
    fullHeadComparisonPosture:
      "exact_40_hex_value_compared_fixture_only" as const,
  });
  const conflicting = conflictDimensions.length > 0;
  return Object.freeze({
    ...baseAssessment,
    sourceBindingComparisonPosture:
      "exact_fixture_source_binding_validated_no_live_origin_proof",
    comparisonPerformed: true,
    targetComparisonState: conflicting
      ? "conflicting"
      : "insufficient_evidence",
    reason: conflicting
      ? "projected_fields_conflict"
      : "exact_repository_owner_not_observable",
    comparisonEvidence,
    conflictDimensions: Object.freeze(conflictDimensions),
  });
}

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends PropertyKey> = Extract<keyof T, K> extends never
  ? false
  : true;

export type PondStageCP7Invariant_NoExactMatchOrCurrentTruth = Assert<
  Equal<
    [
      PondBridgeFullHeadTargetComparisonAssessment["canonicalConflictEstablished"],
      PondBridgeFullHeadTargetComparisonAssessment["exactTargetMatchEstablished"],
      PondBridgeFullHeadTargetComparisonAssessment["currentTruthAdmitted"],
      PondBridgeFullHeadTargetComparisonAssessment["snapshotPresentation"],
      PondBridgeFullHeadTargetComparisonAssessment["canonicalOutcome"],
      PondBridgeFullHeadTargetComparisonAssessment["authority"],
    ],
    [false, false, false, "withheld", "insufficient_evidence", "none"]
  >
>;

type ForbiddenComparisonKeys =
  | "endpoint"
  | "transport"
  | "connect"
  | "fetch"
  | "poll"
  | "cache"
  | "persist"
  | "approve"
  | "grant"
  | "execute"
  | "mutate"
  | "authorize"
  | "credential"
  | "secret"
  | "token"
  | "session";

export type PondStageCP7Invariant_NoTransportEffectOrAuthorityFields = Assert<
  Equal<
    HasAnyKey<
      PondBridgeFullHeadTargetComparisonAssessment,
      ForbiddenComparisonKeys
    >,
    false
  >
>;
