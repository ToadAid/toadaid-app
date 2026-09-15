// Stage C-P8 exact Bridge source rebinding for configured-origin identity.
//
// This fixture contract identifies the merged owner-side source shape. It does
// not connect to Bridge, verify the configured remote, prove delivery, or admit
// current truth.

import type { PondBridgeRepoStatusFullHeadSourceBindingFixture } from "./pond-bridge-repo-status-full-head-source-binding.js";

export type PondBridgeOriginIdentityProjectedSnapshotField =
  | PondBridgeRepoStatusFullHeadSourceBindingFixture["projectedSnapshotFields"][number]
  | "configured_origin_identity"
  | "origin_identity_posture";

export interface PondBridgeRepoStatusOriginIdentitySourceBindingFixture {
  readonly contractVersion:
    "pond-bridge-repo-status-origin-identity-source-binding-c-p8";
  readonly supersededBinding: {
    readonly contractVersion:
      PondBridgeRepoStatusFullHeadSourceBindingFixture["contractVersion"];
    readonly sourceCommit: "c9be94541406571eaea034aa61678e912f088cb8";
    readonly reason: "source_contract_added_sanitized_configured_origin_identity";
  };
  readonly responsibilityBasis:
    PondBridgeRepoStatusFullHeadSourceBindingFixture["responsibilityBasis"];
  readonly sourceIdentity: {
    readonly repositoryOwner: "ToadAid";
    readonly repositoryName: "mirror-desktop-bridge";
    readonly branch: "main";
    readonly commit: "56bae7363b18e180cfb5bb95da67803b2f847080";
    readonly modulePath: "src/liveReadOnlyRepoStatusAdapterIntegration.ts";
    readonly resultType: "LiveRepoStatusIntegrationResult";
    readonly snapshotType: "IntegratedRepoStatusAdapterSnapshot";
    readonly stage: "stage_1i_live_readonly_repo_status_adapter_integration";
    readonly mode: "gated_live_client_adapter_integration";
    readonly integrationId: "integration.live-repo-status.adapter";
    readonly bindingPosture: "exact_merged_source_contract_identity";
  };
  readonly projectedResultFields:
    PondBridgeRepoStatusFullHeadSourceBindingFixture["projectedResultFields"];
  readonly projectedSnapshotFields:
    readonly PondBridgeOriginIdentityProjectedSnapshotField[];
  readonly observationMetadataContract:
    PondBridgeRepoStatusFullHeadSourceBindingFixture["observationMetadataContract"];
  readonly fullHeadContract:
    PondBridgeRepoStatusFullHeadSourceBindingFixture["fullHeadContract"];
  readonly configuredOriginIdentityContract: {
    readonly containerField: "adapter_snapshot";
    readonly identityField: "configured_origin_identity";
    readonly postureField: "origin_identity_posture";
    readonly supportedHost: "github.com";
    readonly identityFields: readonly [
      "host",
      "owner",
      "name",
      "observation_basis",
      "remote_verification",
      "raw_origin_url_projected",
      "authority",
    ];
    readonly observationBasis: "parsed_local_git_origin_url";
    readonly remoteVerification: "not_performed";
    readonly rawOriginUrlProjected: false;
    readonly sourceValidationPosture:
      "optional_structurally_validated_before_adapter_projection";
  };
  readonly sourceRuntimePosture: "implemented_default_disabled";
  readonly sourceMcpExposurePosture: "disabled";
  readonly sourceObservationPosture: "source_observation_time_present";
  readonly fullHeadObservationPosture: "validated_full_head_present";
  readonly repositoryIdentityObservationPosture:
    "configured_origin_identity_observable_not_remote_verified";
  readonly currentTruthPosture:
    "blocked_pending_trusted_delivery_and_live_origin_proof";
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

export type PondStageCP8SourceInvariant_ExactBridgeCommit = Assert<
  Equal<
    PondBridgeRepoStatusOriginIdentitySourceBindingFixture["sourceIdentity"]["commit"],
    "56bae7363b18e180cfb5bb95da67803b2f847080"
  >
>;
export type PondStageCP8SourceInvariant_OriginFieldsProjected = Assert<
  Equal<
    Extract<
      PondBridgeOriginIdentityProjectedSnapshotField,
      "configured_origin_identity" | "origin_identity_posture"
    >,
    "configured_origin_identity" | "origin_identity_posture"
  >
>;
export type PondStageCP8SourceInvariant_RemoteStillUnverified = Assert<
  Equal<
    [
      PondBridgeRepoStatusOriginIdentitySourceBindingFixture["configuredOriginIdentityContract"]["remoteVerification"],
      PondBridgeRepoStatusOriginIdentitySourceBindingFixture["trustedChannelPosture"],
      PondBridgeRepoStatusOriginIdentitySourceBindingFixture["authority"],
    ],
    ["not_performed", "not_established", "none"]
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
  | "session"
  | "rawOriginUrl";

export type PondStageCP8SourceInvariant_NoTransportEffectAuthorityOrRawUrlFields =
  Assert<
    Equal<
      HasAnyKey<
        PondBridgeRepoStatusOriginIdentitySourceBindingFixture,
        ForbiddenSourceBindingKeys
      >,
      false
    >
  >;
