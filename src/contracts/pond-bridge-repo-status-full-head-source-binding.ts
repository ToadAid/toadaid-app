// Stage C-P7 exact Bridge source rebinding for full repository HEAD evidence.
//
// This is a fixture contract only. It identifies the merged owner-side source
// shape; it does not connect to Bridge, prove delivery, or admit current truth.

import type {
  PondBridgeObservedRepoStatusProjectedSnapshotField,
  PondBridgeRepoStatusObservationSourceBindingFixture,
} from "./pond-bridge-repo-status-observation-source-binding.js";

export type PondBridgeFullHeadProjectedSnapshotField =
  | PondBridgeObservedRepoStatusProjectedSnapshotField
  | "head_sha_full";

export interface PondBridgeRepoStatusFullHeadSourceBindingFixture {
  readonly contractVersion:
    "pond-bridge-repo-status-full-head-source-binding-c-p7";
  readonly supersededBinding: {
    readonly contractVersion:
      PondBridgeRepoStatusObservationSourceBindingFixture["contractVersion"];
    readonly sourceCommit: "dfc9b59084e36324b1d97c0e8f9f1f72441970d7";
    readonly reason: "source_contract_added_validated_full_head";
  };
  readonly responsibilityBasis:
    PondBridgeRepoStatusObservationSourceBindingFixture["responsibilityBasis"];
  readonly sourceIdentity: {
    readonly repositoryOwner: "ToadAid";
    readonly repositoryName: "mirror-desktop-bridge";
    readonly branch: "main";
    readonly commit: "c9be94541406571eaea034aa61678e912f088cb8";
    readonly modulePath: "src/liveReadOnlyRepoStatusAdapterIntegration.ts";
    readonly resultType: "LiveRepoStatusIntegrationResult";
    readonly snapshotType: "IntegratedRepoStatusAdapterSnapshot";
    readonly stage: "stage_1i_live_readonly_repo_status_adapter_integration";
    readonly mode: "gated_live_client_adapter_integration";
    readonly integrationId: "integration.live-repo-status.adapter";
    readonly bindingPosture: "exact_merged_source_contract_identity";
  };
  readonly projectedResultFields:
    PondBridgeRepoStatusObservationSourceBindingFixture["projectedResultFields"];
  readonly projectedSnapshotFields:
    readonly PondBridgeFullHeadProjectedSnapshotField[];
  readonly observationMetadataContract:
    PondBridgeRepoStatusObservationSourceBindingFixture["observationMetadataContract"];
  readonly fullHeadContract: {
    readonly containerField: "adapter_snapshot";
    readonly field: "head_sha_full";
    readonly format: "lowercase_hex_40";
    readonly sourceValidationPosture: "required_fail_closed_before_ready";
  };
  readonly sourceRuntimePosture: "implemented_default_disabled";
  readonly sourceMcpExposurePosture: "disabled";
  readonly sourceObservationPosture: "source_observation_time_present";
  readonly fullHeadObservationPosture: "validated_full_head_present";
  readonly repositoryOwnerObservationPosture:
    "not_observable_by_bound_source_contract";
  readonly currentTruthPosture:
    "blocked_pending_exact_repository_owner_and_trusted_channel";
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

export type PondStageCP7SourceInvariant_ExactBridgeCommit = Assert<
  Equal<
    PondBridgeRepoStatusFullHeadSourceBindingFixture["sourceIdentity"]["commit"],
    "c9be94541406571eaea034aa61678e912f088cb8"
  >
>;
export type PondStageCP7SourceInvariant_FullHeadProjected = Assert<
  Equal<
    Extract<PondBridgeFullHeadProjectedSnapshotField, "head_sha_full">,
    "head_sha_full"
  >
>;
export type PondStageCP7SourceInvariant_OwnerStillUnavailable = Assert<
  Equal<
    [
      PondBridgeRepoStatusFullHeadSourceBindingFixture["repositoryOwnerObservationPosture"],
      PondBridgeRepoStatusFullHeadSourceBindingFixture["trustedChannelPosture"],
      PondBridgeRepoStatusFullHeadSourceBindingFixture["authority"],
    ],
    ["not_observable_by_bound_source_contract", "not_established", "none"]
  >
>;

type ForbiddenSourceBindingKeys =
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

export type PondStageCP7SourceInvariant_NoTransportEffectOrAuthorityFields =
  Assert<
    Equal<
      HasAnyKey<
        PondBridgeRepoStatusFullHeadSourceBindingFixture,
        ForbiddenSourceBindingKeys
      >,
      false
    >
  >;
