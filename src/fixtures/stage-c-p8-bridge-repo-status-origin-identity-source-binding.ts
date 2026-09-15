import type { PondBridgeRepoStatusOriginIdentitySourceBindingFixture } from "../contracts/pond-bridge-repo-status-origin-identity-source-binding.js";
import { stageCP7BridgeRepoStatusFullHeadSourceBinding } from "./stage-c-p7-bridge-repo-status-full-head-source-binding.js";

export const stageCP8BridgeRepoStatusOriginIdentitySourceBinding = {
  contractVersion:
    "pond-bridge-repo-status-origin-identity-source-binding-c-p8",
  supersededBinding: {
    contractVersion:
      stageCP7BridgeRepoStatusFullHeadSourceBinding.contractVersion,
    sourceCommit:
      stageCP7BridgeRepoStatusFullHeadSourceBinding.sourceIdentity.commit,
    reason: "source_contract_added_sanitized_configured_origin_identity",
  },
  responsibilityBasis:
    stageCP7BridgeRepoStatusFullHeadSourceBinding.responsibilityBasis,
  sourceIdentity: {
    ...stageCP7BridgeRepoStatusFullHeadSourceBinding.sourceIdentity,
    commit: "56bae7363b18e180cfb5bb95da67803b2f847080",
  },
  projectedResultFields:
    stageCP7BridgeRepoStatusFullHeadSourceBinding.projectedResultFields,
  projectedSnapshotFields: [
    ...stageCP7BridgeRepoStatusFullHeadSourceBinding.projectedSnapshotFields,
    "configured_origin_identity",
    "origin_identity_posture",
  ],
  observationMetadataContract:
    stageCP7BridgeRepoStatusFullHeadSourceBinding.observationMetadataContract,
  fullHeadContract:
    stageCP7BridgeRepoStatusFullHeadSourceBinding.fullHeadContract,
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
} as const satisfies PondBridgeRepoStatusOriginIdentitySourceBindingFixture;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageCP8FixtureInvariant_AddsOnlyOriginIdentityFields = Assert<
  Equal<
    typeof stageCP8BridgeRepoStatusOriginIdentitySourceBinding["projectedSnapshotFields"],
    readonly [
      ...typeof stageCP7BridgeRepoStatusFullHeadSourceBinding["projectedSnapshotFields"],
      "configured_origin_identity",
      "origin_identity_posture",
    ]
  >
>;
export type PondStageCP8FixtureInvariant_ExactMergedSourceCommit = Assert<
  Equal<
    typeof stageCP8BridgeRepoStatusOriginIdentitySourceBinding["sourceIdentity"]["commit"],
    "56bae7363b18e180cfb5bb95da67803b2f847080"
  >
>;
