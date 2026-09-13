// Stage C-P6 deterministic Bridge repository-status target comparison.
//
// The classifier may derive disagreement among sanitized projected fields. It
// cannot establish exact repository identity, canonical conflict, current
// truth, or authority without owner/full-HEAD evidence and a trusted channel.

import type { PondBridgeRepoStatusObservationAgeAssessment } from "./pond-bridge-repo-status-observation-age.js";
import type { PondReadOnlyRepositoryTargetFixture } from "./pond-read-only-repository-target.js";

export type PondBridgeRepoStatusTargetConflictDimension =
  | "repository_name_from_root_label"
  | "branch_name"
  | "head_commit_prefix";

export type PondBridgeRepoStatusTargetComparisonState =
  | "conflicting"
  | "insufficient_evidence";

export type PondBridgeRepoStatusTargetComparisonReason =
  | "observation_age_not_fresh"
  | "expected_target_invalid"
  | "snapshot_candidate_invalid"
  | "projected_fields_conflict"
  | "exact_repository_owner_and_full_head_not_observable";

export interface PondBridgeRepoStatusTargetComparisonInput {
  readonly expectedTarget: unknown;
  readonly snapshotCandidate: unknown;
  readonly ageAssessment: unknown;
}

interface PondBridgeRepoStatusTargetComparisonBase {
  readonly contractVersion: "pond-bridge-repo-status-target-comparison-c-p6";
  readonly targetSchemaContractVersion:
    PondReadOnlyRepositoryTargetFixture["contractVersion"];
  readonly ageAssessmentContractVersion:
    PondBridgeRepoStatusObservationAgeAssessment["contractVersion"];
  readonly comparisonKind:
    "deterministic_fixture_sanitized_projected_field_comparison";
  readonly targetComparisonState: PondBridgeRepoStatusTargetComparisonState;
  readonly reason: PondBridgeRepoStatusTargetComparisonReason;
  readonly sourceBindingComparisonPosture:
    "not_performed_fixture_dependency_only";
  readonly canonicalConflictEstablished: false;
  readonly exactTargetMatchEstablished: false;
  readonly currentTruthAdmitted: false;
  readonly snapshotPresentation: "withheld";
  readonly presentationState: "degraded";
  readonly trustedChannelPosture: "not_established";
  readonly canonicalOutcome: "insufficient_evidence";
  readonly authority: "none";
}

export interface PondBridgeRepoStatusTargetComparisonEvidence {
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
    readonly repositoryOwner: null;
    readonly headCommitFull: null;
  };
  readonly fieldComparisons: {
    readonly repositoryNameFromRootLabel: "matched" | "conflicting";
    readonly branchName: "matched" | "conflicting";
    readonly headCommitPrefix: "matched" | "conflicting";
    readonly repositoryOwner: "not_observable_by_bound_source_contract";
    readonly headCommitFull: "not_observable_by_bound_source_contract";
  };
  readonly repoRootLabelComparisonPosture:
    "sanitized_basename_candidate_not_repository_identity_proof";
  readonly headPrefixComparisonPosture:
    "short_sha_candidate_not_full_commit_identity_proof";
}

export type PondBridgeRepoStatusTargetComparisonAssessment =
  | (PondBridgeRepoStatusTargetComparisonBase & {
      readonly comparisonPerformed: false;
      readonly targetComparisonState: "insufficient_evidence";
      readonly reason:
        | "observation_age_not_fresh"
        | "expected_target_invalid"
        | "snapshot_candidate_invalid";
      readonly comparisonEvidence: null;
      readonly conflictDimensions: readonly [];
    })
  | (PondBridgeRepoStatusTargetComparisonBase & {
      readonly comparisonPerformed: true;
      readonly targetComparisonState: "conflicting" | "insufficient_evidence";
      readonly reason:
        | "projected_fields_conflict"
        | "exact_repository_owner_and_full_head_not_observable";
      readonly comparisonEvidence: PondBridgeRepoStatusTargetComparisonEvidence;
      readonly conflictDimensions:
        readonly PondBridgeRepoStatusTargetConflictDimension[];
    });

const baseAssessment = Object.freeze({
  contractVersion: "pond-bridge-repo-status-target-comparison-c-p6",
  targetSchemaContractVersion: "pond-read-only-repository-target-c-p1",
  ageAssessmentContractVersion:
    "pond-bridge-repo-status-observation-age-c-p5",
  comparisonKind:
    "deterministic_fixture_sanitized_projected_field_comparison",
  sourceBindingComparisonPosture: "not_performed_fixture_dependency_only",
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

const freshAgeAssessment = (
  value: unknown,
): value is PondBridgeRepoStatusObservationAgeAssessment & {
  readonly observationAgeState: "fresh";
} => {
  const candidate = record(value);
  return (
    candidate !== null &&
    candidate.contractVersion ===
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
    candidate.presentationState === "degraded" &&
    candidate.sourceBindingComparisonPosture ===
      "not_performed_fixture_dependency_only" &&
    candidate.targetComparisonPosture === "not_performed" &&
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
    repository?.identityPosture !==
      "fixture_exact_owner_name_not_remote_verified" ||
    !boundedText(branch?.name, 160) ||
    branch?.bindingPosture !== "fixture_branch_name_not_live_resolved" ||
    !fullCommit(head?.commit) ||
    head?.bindingPosture !== "fixture_parent_commit_not_live_head" ||
    path?.pathClass !== "repository_root" ||
    path?.repositoryRelativePath !== "." ||
    path?.bindingPosture !== "fixture_exact_repository_root" ||
    target?.operationClass !== "read" ||
    target?.operationPosture !== "identity_only_not_performed" ||
    target?.targetPosture !==
      "fixture_identity_only_not_grant_or_authoritative_runtime_target" ||
    target?.authority !== "none"
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
}

const validSnapshotCandidate = (
  value: unknown,
): ValidSnapshotCandidate | null => {
  const candidate = record(value);
  if (
    candidate === null ||
    !boundedText(candidate.repo_root_label, 160) ||
    !boundedText(candidate.branch_name, 160) ||
    !shortCommit(candidate.head_sha_short)
  ) {
    return null;
  }
  return Object.freeze({
    repoRootLabel: candidate.repo_root_label,
    branchName: candidate.branch_name,
    headShaShort: candidate.head_sha_short,
  });
};

const notPerformed = (
  reason: Extract<
    PondBridgeRepoStatusTargetComparisonReason,
    | "observation_age_not_fresh"
    | "expected_target_invalid"
    | "snapshot_candidate_invalid"
  >,
): PondBridgeRepoStatusTargetComparisonAssessment =>
  Object.freeze({
    ...baseAssessment,
    comparisonPerformed: false,
    targetComparisonState: "insufficient_evidence",
    reason,
    comparisonEvidence: null,
    conflictDimensions: Object.freeze([] as const),
  });

export function comparePondBridgeRepoStatusTarget(
  input: PondBridgeRepoStatusTargetComparisonInput,
): PondBridgeRepoStatusTargetComparisonAssessment {
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
  const headCommitPrefix = expected.headCommit.startsWith(projected.headShaShort)
    ? "matched"
    : "conflicting";
  const conflictDimensions: PondBridgeRepoStatusTargetConflictDimension[] = [];
  if (repositoryNameFromRootLabel === "conflicting")
    conflictDimensions.push("repository_name_from_root_label");
  if (branchName === "conflicting") conflictDimensions.push("branch_name");
  if (headCommitPrefix === "conflicting")
    conflictDimensions.push("head_commit_prefix");

  const comparisonEvidence = Object.freeze({
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
      repositoryOwner: null,
      headCommitFull: null,
    }),
    fieldComparisons: Object.freeze({
      repositoryNameFromRootLabel,
      branchName,
      headCommitPrefix,
      repositoryOwner: "not_observable_by_bound_source_contract" as const,
      headCommitFull: "not_observable_by_bound_source_contract" as const,
    }),
    repoRootLabelComparisonPosture:
      "sanitized_basename_candidate_not_repository_identity_proof" as const,
    headPrefixComparisonPosture:
      "short_sha_candidate_not_full_commit_identity_proof" as const,
  });
  const conflicting = conflictDimensions.length > 0;
  return Object.freeze({
    ...baseAssessment,
    comparisonPerformed: true,
    targetComparisonState: conflicting
      ? "conflicting"
      : "insufficient_evidence",
    reason: conflicting
      ? "projected_fields_conflict"
      : "exact_repository_owner_and_full_head_not_observable",
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

export type PondStageCP6Invariant_StatesExcludeExactMatch = Assert<
  Equal<
    PondBridgeRepoStatusTargetComparisonState,
    "conflicting" | "insufficient_evidence"
  >
>;
export type PondStageCP6Invariant_CurrentTruthAlwaysWithheld = Assert<
  Equal<
    [
      PondBridgeRepoStatusTargetComparisonAssessment["canonicalConflictEstablished"],
      PondBridgeRepoStatusTargetComparisonAssessment["exactTargetMatchEstablished"],
      PondBridgeRepoStatusTargetComparisonAssessment["currentTruthAdmitted"],
      PondBridgeRepoStatusTargetComparisonAssessment["snapshotPresentation"],
      PondBridgeRepoStatusTargetComparisonAssessment["canonicalOutcome"],
      PondBridgeRepoStatusTargetComparisonAssessment["authority"],
    ],
    [false, false, false, "withheld", "insufficient_evidence", "none"]
  >
>;

type ForbiddenTargetComparisonKeys =
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

export type PondStageCP6Invariant_NoTransportEffectOrAuthorityFields = Assert<
  Equal<
    HasAnyKey<
      PondBridgeRepoStatusTargetComparisonAssessment,
      ForbiddenTargetComparisonKeys
    >,
    false
  >
>;
