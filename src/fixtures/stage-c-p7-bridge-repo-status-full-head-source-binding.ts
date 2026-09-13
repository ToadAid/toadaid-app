import type { PondBridgeRepoStatusFullHeadSourceBindingFixture } from "../contracts/pond-bridge-repo-status-full-head-source-binding.js";
import { stageCP4BridgeRepoStatusObservationSourceBinding } from "./stage-c-p4-bridge-repo-status-observation-source-binding.js";

export const stageCP7BridgeRepoStatusFullHeadSourceBinding = {
  contractVersion: "pond-bridge-repo-status-full-head-source-binding-c-p7",
  supersededBinding: {
    contractVersion:
      stageCP4BridgeRepoStatusObservationSourceBinding.contractVersion,
    sourceCommit:
      stageCP4BridgeRepoStatusObservationSourceBinding.sourceIdentity.commit,
    reason: "source_contract_added_validated_full_head",
  },
  responsibilityBasis:
    stageCP4BridgeRepoStatusObservationSourceBinding.responsibilityBasis,
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
  projectedResultFields:
    stageCP4BridgeRepoStatusObservationSourceBinding.projectedResultFields,
  projectedSnapshotFields: [
    ...stageCP4BridgeRepoStatusObservationSourceBinding.projectedSnapshotFields,
    "head_sha_full",
  ],
  observationMetadataContract:
    stageCP4BridgeRepoStatusObservationSourceBinding.observationMetadataContract,
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
} as const satisfies PondBridgeRepoStatusFullHeadSourceBindingFixture;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageCP7FixtureInvariant_AddsOnlyFullHead = Assert<
  Equal<
    typeof stageCP7BridgeRepoStatusFullHeadSourceBinding["projectedSnapshotFields"],
    readonly [
      ...typeof stageCP4BridgeRepoStatusObservationSourceBinding["projectedSnapshotFields"],
      "head_sha_full",
    ]
  >
>;
export type PondStageCP7FixtureInvariant_ExactMergedSourceCommit = Assert<
  Equal<
    typeof stageCP7BridgeRepoStatusFullHeadSourceBinding["sourceIdentity"]["commit"],
    "c9be94541406571eaea034aa61678e912f088cb8"
  >
>;
