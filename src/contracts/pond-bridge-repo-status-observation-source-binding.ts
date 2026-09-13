// Stage C-P4 Bridge repo-status observation source rebinding contract.
//
// This binds newly available source observation metadata for later fixture
// evaluation. It does not evaluate freshness, establish a trusted channel,
// ingest a live result, or admit repository truth as current.

import type {
  PondBridgeRepoStatusProjectedResultField,
  PondBridgeRepoStatusProjectedSnapshotField,
  PondBridgeTargetResponsibilityBasis,
} from "./pond-bridge-repo-status-source-binding.js";

export type PondBridgeObservedRepoStatusProjectedSnapshotField =
  | PondBridgeRepoStatusProjectedSnapshotField
  | "observation_metadata";

export interface PondBridgeRepoStatusObservationSourceBindingFixture {
  readonly contractVersion:
    "pond-bridge-repo-status-observation-source-binding-c-p4";
  readonly supersededBinding: {
    readonly contractVersion: "pond-bridge-repo-status-source-binding-c-p2";
    readonly sourceCommit: "ea86681f2db2113c40911c2d585b19f41be1a124";
    readonly reason: "source_contract_added_observation_metadata";
  };
  readonly responsibilityBasis: PondBridgeTargetResponsibilityBasis;
  readonly sourceIdentity: {
    readonly repositoryOwner: "ToadAid";
    readonly repositoryName: "mirror-desktop-bridge";
    readonly branch: "main";
    readonly commit: "dfc9b59084e36324b1d97c0e8f9f1f72441970d7";
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
    readonly PondBridgeObservedRepoStatusProjectedSnapshotField[];
  readonly observationMetadataContract: {
    readonly containerField: "observation_metadata";
    readonly observedAtField: "observed_at_epoch_ms";
    readonly observedAtUnit: "unix_epoch_milliseconds";
    readonly freshnessBasisField: "freshness_basis";
    readonly freshnessBasis: "source_observation_time_only";
    readonly currentnessPostureField: "currentness_posture";
    readonly currentnessPosture:
      "not_established_consumer_must_evaluate";
  };
  readonly sourceRuntimePosture: "implemented_default_disabled";
  readonly sourceMcpExposurePosture: "disabled";
  readonly boundedStatusLinesPosture:
    "withheld_from_initial_pond_projection";
  readonly commandReceiptPreviewPosture:
    "withheld_from_initial_pond_projection";
  readonly sourceObservationPosture: "source_observation_time_present";
  readonly currentTruthPosture:
    "blocked_pending_pond_freshness_policy_target_comparison_and_trusted_channel";
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

export type PondStageCP4Invariant_SourceIdentityExact = Assert<
  Equal<
    [
      PondBridgeRepoStatusObservationSourceBindingFixture["sourceIdentity"]["repositoryOwner"],
      PondBridgeRepoStatusObservationSourceBindingFixture["sourceIdentity"]["repositoryName"],
      PondBridgeRepoStatusObservationSourceBindingFixture["sourceIdentity"]["branch"],
      PondBridgeRepoStatusObservationSourceBindingFixture["sourceIdentity"]["commit"],
    ],
    [
      "ToadAid",
      "mirror-desktop-bridge",
      "main",
      "dfc9b59084e36324b1d97c0e8f9f1f72441970d7",
    ]
  >
>;
export type PondStageCP4Invariant_ObservationMetadataExact = Assert<
  Equal<
    PondBridgeRepoStatusObservationSourceBindingFixture["observationMetadataContract"],
    {
      readonly containerField: "observation_metadata";
      readonly observedAtField: "observed_at_epoch_ms";
      readonly observedAtUnit: "unix_epoch_milliseconds";
      readonly freshnessBasisField: "freshness_basis";
      readonly freshnessBasis: "source_observation_time_only";
      readonly currentnessPostureField: "currentness_posture";
      readonly currentnessPosture:
        "not_established_consumer_must_evaluate";
    }
  >
>;
export type PondStageCP4Invariant_ObservationMetadataProjected = Assert<
  Equal<
    Extract<
      PondBridgeObservedRepoStatusProjectedSnapshotField,
      "observation_metadata"
    >,
    "observation_metadata"
  >
>;
export type PondStageCP4Invariant_CurrentTruthStillBlocked = Assert<
  Equal<
    [
      PondBridgeRepoStatusObservationSourceBindingFixture["sourceObservationPosture"],
      PondBridgeRepoStatusObservationSourceBindingFixture["currentTruthPosture"],
      PondBridgeRepoStatusObservationSourceBindingFixture["trustedChannelPosture"],
      PondBridgeRepoStatusObservationSourceBindingFixture["runtimeIntegrationPosture"],
    ],
    [
      "source_observation_time_present",
      "blocked_pending_pond_freshness_policy_target_comparison_and_trusted_channel",
      "not_established",
      "not_included",
    ]
  >
>;
export type PondStageCP4Invariant_AuthorityNone = Assert<
  Equal<
    PondBridgeRepoStatusObservationSourceBindingFixture["authority"],
    "none"
  >
>;

type ForbiddenObservationSourceBindingKeys =
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

export type PondStageCP4Invariant_NoTransportEffectOrAuthorityFields = Assert<
  Equal<
    HasAnyKey<
      PondBridgeRepoStatusObservationSourceBindingFixture,
      ForbiddenObservationSourceBindingKeys
    >,
    false
  >
>;
