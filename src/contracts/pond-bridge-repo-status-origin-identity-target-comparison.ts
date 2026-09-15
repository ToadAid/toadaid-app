// Stage C-P8 configured-origin identity target comparison over supplied data.
//
// An exact owner/name/branch/full-HEAD fixture match remains non-current and
// non-authoritative while remote verification and trusted delivery are absent.

import type { PondBridgeRepoStatusObservationAgeAssessment } from "./pond-bridge-repo-status-observation-age.js";
import type { PondBridgeRepoStatusOriginIdentitySourceBindingFixture } from "./pond-bridge-repo-status-origin-identity-source-binding.js";
import type { PondReadOnlyRepositoryTargetFixture } from "./pond-read-only-repository-target.js";

export type PondBridgeOriginIdentityTargetConflictDimension =
  | "repository_owner"
  | "repository_name"
  | "repository_name_from_root_label"
  | "branch_name"
  | "head_commit_full";

export type PondBridgeOriginIdentityTargetComparisonReason =
  | "source_binding_invalid"
  | "observation_age_not_fresh"
  | "expected_target_invalid"
  | "snapshot_candidate_invalid"
  | "projected_fields_conflict"
  | "exact_fixture_values_match_trusted_delivery_not_established";

export interface PondBridgeOriginIdentityTargetComparisonInput {
  readonly sourceBinding: unknown;
  readonly expectedTarget: unknown;
  readonly snapshotCandidate: unknown;
  readonly ageAssessment: unknown;
}

interface PondBridgeOriginIdentityTargetComparisonBase {
  readonly contractVersion:
    "pond-bridge-repo-status-origin-identity-target-comparison-c-p8";
  readonly sourceBindingContractVersion:
    PondBridgeRepoStatusOriginIdentitySourceBindingFixture["contractVersion"];
  readonly targetSchemaContractVersion:
    PondReadOnlyRepositoryTargetFixture["contractVersion"];
  readonly ageAssessmentContractVersion:
    PondBridgeRepoStatusObservationAgeAssessment["contractVersion"];
  readonly comparisonKind:
    "deterministic_fixture_sanitized_origin_identity_full_head_comparison";
  readonly targetComparisonState:
    | "matched"
    | "conflicting"
    | "insufficient_evidence";
  readonly reason: PondBridgeOriginIdentityTargetComparisonReason;
  readonly sourceBindingComparisonPosture:
    | "not_performed_source_binding_invalid"
    | "exact_fixture_source_binding_validated_no_live_origin_or_delivery_proof";
  readonly canonicalConflictEstablished: false;
  readonly exactTargetMatchEstablished: boolean;
  readonly exactTargetMatchPosture:
    | "not_established"
    | "exact_supplied_fixture_values_only";
  readonly currentTruthAdmitted: false;
  readonly snapshotPresentation: "withheld";
  readonly presentationState: "degraded";
  readonly remoteVerificationPosture: "not_performed";
  readonly trustedChannelPosture: "not_established";
  readonly canonicalOutcome: "insufficient_evidence";
  readonly authority: "none";
}

export interface PondBridgeOriginIdentityTargetComparisonEvidence {
  readonly source: {
    readonly repositoryOwner: "ToadAid";
    readonly repositoryName: "mirror-desktop-bridge";
    readonly branch: "main";
    readonly commit: "56bae7363b18e180cfb5bb95da67803b2f847080";
    readonly projectedOriginIdentityField: "configured_origin_identity";
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
    readonly originHost: "github.com";
    readonly repositoryOwner: string;
    readonly repositoryName: string;
    readonly repoRootLabel: string;
    readonly branchName: string;
    readonly headShaShort: string;
    readonly headShaFull: string;
    readonly rawOriginUrlProjected: false;
  };
  readonly fieldComparisons: {
    readonly repositoryOwner: "matched" | "conflicting";
    readonly repositoryName: "matched" | "conflicting";
    readonly repositoryNameFromRootLabel: "matched" | "conflicting";
    readonly branchName: "matched" | "conflicting";
    readonly headCommitFull: "matched" | "conflicting";
  };
  readonly originIdentityComparisonPosture:
    "configured_origin_values_compared_fixture_only_not_remote_verified";
  readonly repoRootLabelComparisonPosture:
    "sanitized_basename_corroboration_only_not_repository_identity_proof";
  readonly fullHeadComparisonPosture:
    "exact_40_hex_value_compared_fixture_only";
}

export type PondBridgeOriginIdentityTargetComparisonAssessment =
  | (PondBridgeOriginIdentityTargetComparisonBase & {
      readonly comparisonPerformed: false;
      readonly targetComparisonState: "insufficient_evidence";
      readonly reason:
        | "source_binding_invalid"
        | "observation_age_not_fresh"
        | "expected_target_invalid"
        | "snapshot_candidate_invalid";
      readonly exactTargetMatchEstablished: false;
      readonly exactTargetMatchPosture: "not_established";
      readonly comparisonEvidence: null;
      readonly conflictDimensions: readonly [];
    })
  | (PondBridgeOriginIdentityTargetComparisonBase & {
      readonly comparisonPerformed: true;
      readonly targetComparisonState: "conflicting";
      readonly reason: "projected_fields_conflict";
      readonly exactTargetMatchEstablished: false;
      readonly exactTargetMatchPosture: "not_established";
      readonly comparisonEvidence:
        PondBridgeOriginIdentityTargetComparisonEvidence;
      readonly conflictDimensions:
        readonly PondBridgeOriginIdentityTargetConflictDimension[];
    })
  | (PondBridgeOriginIdentityTargetComparisonBase & {
      readonly comparisonPerformed: true;
      readonly targetComparisonState: "matched";
      readonly reason:
        "exact_fixture_values_match_trusted_delivery_not_established";
      readonly exactTargetMatchEstablished: true;
      readonly exactTargetMatchPosture: "exact_supplied_fixture_values_only";
      readonly comparisonEvidence:
        PondBridgeOriginIdentityTargetComparisonEvidence;
      readonly conflictDimensions: readonly [];
    });

const baseAssessment = Object.freeze({
  contractVersion:
    "pond-bridge-repo-status-origin-identity-target-comparison-c-p8",
  sourceBindingContractVersion:
    "pond-bridge-repo-status-origin-identity-source-binding-c-p8",
  targetSchemaContractVersion: "pond-read-only-repository-target-c-p1",
  ageAssessmentContractVersion:
    "pond-bridge-repo-status-observation-age-c-p5",
  comparisonKind:
    "deterministic_fixture_sanitized_origin_identity_full_head_comparison",
  canonicalConflictEstablished: false,
  currentTruthAdmitted: false,
  snapshotPresentation: "withheld",
  presentationState: "degraded",
  remoteVerificationPosture: "not_performed",
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
): value is PondBridgeRepoStatusOriginIdentitySourceBindingFixture => {
  const candidate = record(value);
  const superseded = record(candidate?.supersededBinding);
  const responsibility = record(candidate?.responsibilityBasis);
  const source = record(candidate?.sourceIdentity);
  const observationMetadata = record(candidate?.observationMetadataContract);
  const fullHead = record(candidate?.fullHeadContract);
  const originIdentity = record(candidate?.configuredOriginIdentityContract);
  return (
    candidate?.contractVersion ===
      "pond-bridge-repo-status-origin-identity-source-binding-c-p8" &&
    superseded?.contractVersion ===
      "pond-bridge-repo-status-full-head-source-binding-c-p7" &&
    superseded.sourceCommit ===
      "c9be94541406571eaea034aa61678e912f088cb8" &&
    superseded.reason ===
      "source_contract_added_sanitized_configured_origin_identity" &&
    responsibility?.concern === "workspace_repository_target_resolution" &&
    responsibility.runtimeResponsibility === "mirror_desktop_bridge" &&
    source?.repositoryOwner === "ToadAid" &&
    source.repositoryName === "mirror-desktop-bridge" &&
    source.branch === "main" &&
    source.commit === "56bae7363b18e180cfb5bb95da67803b2f847080" &&
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
      "configured_origin_identity",
      "origin_identity_posture",
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
    originIdentity?.containerField === "adapter_snapshot" &&
    originIdentity.identityField === "configured_origin_identity" &&
    originIdentity.postureField === "origin_identity_posture" &&
    originIdentity.supportedHost === "github.com" &&
    exactStringArray(originIdentity.identityFields, [
      "host",
      "owner",
      "name",
      "observation_basis",
      "remote_verification",
      "raw_origin_url_projected",
      "authority",
    ]) &&
    originIdentity.observationBasis === "parsed_local_git_origin_url" &&
    originIdentity.remoteVerification === "not_performed" &&
    originIdentity.rawOriginUrlProjected === false &&
    originIdentity.sourceValidationPosture ===
      "optional_structurally_validated_before_adapter_projection" &&
    candidate.sourceRuntimePosture === "implemented_default_disabled" &&
    candidate.sourceMcpExposurePosture === "disabled" &&
    candidate.sourceObservationPosture === "source_observation_time_present" &&
    candidate.fullHeadObservationPosture === "validated_full_head_present" &&
    candidate.repositoryIdentityObservationPosture ===
      "configured_origin_identity_observable_not_remote_verified" &&
    candidate.currentTruthPosture ===
      "blocked_pending_trusted_delivery_and_live_origin_proof" &&
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
  readonly originHost: "github.com";
  readonly repositoryOwner: string;
  readonly repositoryName: string;
  readonly repoRootLabel: string;
  readonly branchName: string;
  readonly headShaShort: string;
  readonly headShaFull: string;
}

const validSnapshotCandidate = (
  value: unknown,
): ValidSnapshotCandidate | null => {
  const candidate = record(value);
  const originIdentity = record(candidate?.configured_origin_identity);
  if (
    candidate === null ||
    candidate.origin_identity_posture !== "parsed_supported_origin" ||
    !boundedText(candidate.repo_root_label, 160) ||
    !boundedText(candidate.branch_name, 160) ||
    !shortCommit(candidate.head_sha_short) ||
    !fullCommit(candidate.head_sha_full) ||
    !candidate.head_sha_full.startsWith(candidate.head_sha_short) ||
    originIdentity?.host !== "github.com" ||
    !boundedText(originIdentity.owner, 100) ||
    !/^[A-Za-z0-9_.-]+$/.test(originIdentity.owner) ||
    !boundedText(originIdentity.name, 100) ||
    !/^[A-Za-z0-9_.-]+$/.test(originIdentity.name) ||
    originIdentity.observation_basis !== "parsed_local_git_origin_url" ||
    originIdentity.remote_verification !== "not_performed" ||
    originIdentity.raw_origin_url_projected !== false ||
    originIdentity.authority !== "none" ||
    Object.keys(originIdentity).some(
      (key) =>
        ![
          "host",
          "owner",
          "name",
          "observation_basis",
          "remote_verification",
          "raw_origin_url_projected",
          "authority",
        ].includes(key),
    )
  ) {
    return null;
  }
  return Object.freeze({
    originHost: "github.com",
    repositoryOwner: originIdentity.owner,
    repositoryName: originIdentity.name,
    repoRootLabel: candidate.repo_root_label,
    branchName: candidate.branch_name,
    headShaShort: candidate.head_sha_short,
    headShaFull: candidate.head_sha_full,
  });
};

const notPerformed = (
  reason: Extract<
    PondBridgeOriginIdentityTargetComparisonReason,
    | "source_binding_invalid"
    | "observation_age_not_fresh"
    | "expected_target_invalid"
    | "snapshot_candidate_invalid"
  >,
): PondBridgeOriginIdentityTargetComparisonAssessment =>
  Object.freeze({
    ...baseAssessment,
    sourceBindingComparisonPosture:
      reason === "source_binding_invalid"
        ? "not_performed_source_binding_invalid"
        : "exact_fixture_source_binding_validated_no_live_origin_or_delivery_proof",
    comparisonPerformed: false,
    targetComparisonState: "insufficient_evidence",
    reason,
    exactTargetMatchEstablished: false,
    exactTargetMatchPosture: "not_established",
    comparisonEvidence: null,
    conflictDimensions: Object.freeze([] as const),
  });

export function comparePondBridgeRepoStatusOriginIdentityTarget(
  input: PondBridgeOriginIdentityTargetComparisonInput,
): PondBridgeOriginIdentityTargetComparisonAssessment {
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

  const fieldComparisons = Object.freeze({
    repositoryOwner:
      projected.repositoryOwner === expected.repositoryOwner
        ? ("matched" as const)
        : ("conflicting" as const),
    repositoryName:
      projected.repositoryName === expected.repositoryName
        ? ("matched" as const)
        : ("conflicting" as const),
    repositoryNameFromRootLabel:
      projected.repoRootLabel === expected.repositoryName
        ? ("matched" as const)
        : ("conflicting" as const),
    branchName:
      projected.branchName === expected.branchName
        ? ("matched" as const)
        : ("conflicting" as const),
    headCommitFull:
      projected.headShaFull === expected.headCommit
        ? ("matched" as const)
        : ("conflicting" as const),
  });
  const conflictDimensions: PondBridgeOriginIdentityTargetConflictDimension[] =
    [];
  if (fieldComparisons.repositoryOwner === "conflicting")
    conflictDimensions.push("repository_owner");
  if (fieldComparisons.repositoryName === "conflicting")
    conflictDimensions.push("repository_name");
  if (fieldComparisons.repositoryNameFromRootLabel === "conflicting")
    conflictDimensions.push("repository_name_from_root_label");
  if (fieldComparisons.branchName === "conflicting")
    conflictDimensions.push("branch_name");
  if (fieldComparisons.headCommitFull === "conflicting")
    conflictDimensions.push("head_commit_full");

  const comparisonEvidence = Object.freeze({
    source: Object.freeze({
      repositoryOwner: "ToadAid" as const,
      repositoryName: "mirror-desktop-bridge" as const,
      branch: "main" as const,
      commit: "56bae7363b18e180cfb5bb95da67803b2f847080" as const,
      projectedOriginIdentityField: "configured_origin_identity" as const,
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
      originHost: projected.originHost,
      repositoryOwner: projected.repositoryOwner,
      repositoryName: projected.repositoryName,
      repoRootLabel: projected.repoRootLabel,
      branchName: projected.branchName,
      headShaShort: projected.headShaShort,
      headShaFull: projected.headShaFull,
      rawOriginUrlProjected: false as const,
    }),
    fieldComparisons,
    originIdentityComparisonPosture:
      "configured_origin_values_compared_fixture_only_not_remote_verified" as const,
    repoRootLabelComparisonPosture:
      "sanitized_basename_corroboration_only_not_repository_identity_proof" as const,
    fullHeadComparisonPosture:
      "exact_40_hex_value_compared_fixture_only" as const,
  });

  if (conflictDimensions.length > 0) {
    return Object.freeze({
      ...baseAssessment,
      sourceBindingComparisonPosture:
        "exact_fixture_source_binding_validated_no_live_origin_or_delivery_proof",
      comparisonPerformed: true,
      targetComparisonState: "conflicting",
      reason: "projected_fields_conflict",
      exactTargetMatchEstablished: false,
      exactTargetMatchPosture: "not_established",
      comparisonEvidence,
      conflictDimensions: Object.freeze(conflictDimensions),
    });
  }

  return Object.freeze({
    ...baseAssessment,
    sourceBindingComparisonPosture:
      "exact_fixture_source_binding_validated_no_live_origin_or_delivery_proof",
    comparisonPerformed: true,
    targetComparisonState: "matched",
    reason: "exact_fixture_values_match_trusted_delivery_not_established",
    exactTargetMatchEstablished: true,
    exactTargetMatchPosture: "exact_supplied_fixture_values_only",
    comparisonEvidence,
    conflictDimensions: Object.freeze([] as const),
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

export type PondStageCP8Invariant_CurrentTruthAlwaysWithheld = Assert<
  Equal<
    [
      PondBridgeOriginIdentityTargetComparisonAssessment["canonicalConflictEstablished"],
      PondBridgeOriginIdentityTargetComparisonAssessment["currentTruthAdmitted"],
      PondBridgeOriginIdentityTargetComparisonAssessment["snapshotPresentation"],
      PondBridgeOriginIdentityTargetComparisonAssessment["canonicalOutcome"],
      PondBridgeOriginIdentityTargetComparisonAssessment["authority"],
    ],
    [false, false, "withheld", "insufficient_evidence", "none"]
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
  | "session"
  | "rawOriginUrl";

export type PondStageCP8Invariant_NoTransportEffectAuthorityOrRawUrlFields =
  Assert<
    Equal<
      HasAnyKey<
        PondBridgeOriginIdentityTargetComparisonAssessment,
        ForbiddenComparisonKeys
      >,
      false
    >
  >;
