// Stage C-P2 Mirror Desktop Bridge repo-status source binding contract.
//
// This binds an existing external source schema for Pond projection planning.
// It does not connect to Bridge, consume a result, or establish freshness,
// trusted transport, authority, or runtime activation.

import type { PondReadOnlyTruthSourceResponsibilityBinding } from "./pond-read-only-truth-source-responsibility.js";

export type PondBridgeTargetResponsibilityBasis = Pick<
  PondReadOnlyTruthSourceResponsibilityBinding,
  "concern" | "runtimeResponsibility"
> & {
  readonly concern: "workspace_repository_target_resolution";
  readonly runtimeResponsibility: "mirror_desktop_bridge";
};

export type PondBridgeRepoStatusProjectedResultField =
  | "state"
  | "safe_to_display"
  | "adapter_snapshot"
  | "live_client_evidence_reference"
  | "redaction_report"
  | "truncation_report"
  | "receipt_reference"
  | "blocked_reasons"
  | "blocked_authority_statement";

export type PondBridgeRepoStatusProjectedSnapshotField =
  | "repo_root_label"
  | "branch_name"
  | "head_sha_short"
  | "upstream_label"
  | "upstream_available"
  | "has_uncommitted_changes"
  | "has_untracked_changes"
  | "has_staged_changes"
  | "has_unstaged_changes"
  | "ahead_count"
  | "behind_count"
  | "status_summary"
  | "evidence_reference"
  | "truncation_report"
  | "prompt_injection_boundary";

export interface PondBridgeRepoStatusSourceBindingFixture {
  readonly contractVersion: "pond-bridge-repo-status-source-binding-c-p2";
  readonly responsibilityBasis: PondBridgeTargetResponsibilityBasis;
  readonly sourceIdentity: {
    readonly repositoryOwner: "ToadAid";
    readonly repositoryName: "mirror-desktop-bridge";
    readonly branch: "main";
    readonly commit: "ea86681f2db2113c40911c2d585b19f41be1a124";
    readonly modulePath: "src/liveReadOnlyRepoStatusAdapterIntegration.ts";
    readonly resultType: "LiveRepoStatusIntegrationResult";
    readonly snapshotType: "IntegratedRepoStatusAdapterSnapshot";
    readonly stage: "stage_1i_live_readonly_repo_status_adapter_integration";
    readonly mode: "gated_live_client_adapter_integration";
    readonly integrationId: "integration.live-repo-status.adapter";
    readonly bindingPosture: "exact_merged_source_contract_identity";
  };
  readonly projectedResultFields:
    readonly PondBridgeRepoStatusProjectedResultField[];
  readonly projectedSnapshotFields:
    readonly PondBridgeRepoStatusProjectedSnapshotField[];
  readonly sourceRuntimePosture: "implemented_default_disabled";
  readonly sourceMcpExposurePosture: "disabled";
  readonly boundedStatusLinesPosture: "withheld_from_initial_pond_projection";
  readonly commandReceiptPreviewPosture: "withheld_from_initial_pond_projection";
  readonly sourceFreshnessFieldPosture:
    "absent_no_observed_at_or_freshness_field";
  readonly currentTruthPosture:
    "blocked_source_contract_cannot_establish_freshness";
  readonly trustedChannelPosture: "not_established";
  readonly pondTransportPosture: "not_included";
  readonly runtimeIntegrationPosture: "not_included";
  readonly authority: "none";
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

export type PondStageCP2Invariant_SourceRepositoryExact = Assert<
  Equal<
    [
      PondBridgeRepoStatusSourceBindingFixture["sourceIdentity"]["repositoryOwner"],
      PondBridgeRepoStatusSourceBindingFixture["sourceIdentity"]["repositoryName"],
      PondBridgeRepoStatusSourceBindingFixture["sourceIdentity"]["branch"],
      PondBridgeRepoStatusSourceBindingFixture["sourceIdentity"]["commit"],
    ],
    [
      "ToadAid",
      "mirror-desktop-bridge",
      "main",
      "ea86681f2db2113c40911c2d585b19f41be1a124",
    ]
  >
>;
export type PondStageCP2Invariant_ResponsibilityIsBridgeTargetResolution = Assert<
  Equal<
    [
      PondBridgeRepoStatusSourceBindingFixture["responsibilityBasis"]["concern"],
      PondBridgeRepoStatusSourceBindingFixture["responsibilityBasis"]["runtimeResponsibility"],
    ],
    ["workspace_repository_target_resolution", "mirror_desktop_bridge"]
  >
>;
export type PondStageCP2Invariant_StatusLinesWithheld = Assert<
  Equal<
    Extract<PondBridgeRepoStatusProjectedSnapshotField, "bounded_status_lines">,
    never
  >
>;
export type PondStageCP2Invariant_CommandReceiptPreviewWithheld = Assert<
  Equal<
    Extract<
      PondBridgeRepoStatusProjectedResultField,
      "command_receipt_preview"
    >,
    never
  >
>;
export type PondStageCP2Invariant_ReceiptReferenceAllowed = Assert<
  Equal<
    Extract<PondBridgeRepoStatusProjectedResultField, "receipt_reference">,
    "receipt_reference"
  >
>;
export type PondStageCP2Invariant_CurrentTruthBlockedWithoutFreshness = Assert<
  Equal<
    [
      PondBridgeRepoStatusSourceBindingFixture["sourceFreshnessFieldPosture"],
      PondBridgeRepoStatusSourceBindingFixture["currentTruthPosture"],
    ],
    [
      "absent_no_observed_at_or_freshness_field",
      "blocked_source_contract_cannot_establish_freshness",
    ]
  >
>;
export type PondStageCP2Invariant_AuthorityNone = Assert<
  Equal<PondBridgeRepoStatusSourceBindingFixture["authority"], "none">
>;

type ForbiddenBridgeSourceBindingKeys =
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

export type PondStageCP2Invariant_NoTransportEffectOrAuthorityFields = Assert<
  Equal<
    HasAnyKey<
      PondBridgeRepoStatusSourceBindingFixture,
      ForbiddenBridgeSourceBindingKeys
    >,
    false
  >
>;
