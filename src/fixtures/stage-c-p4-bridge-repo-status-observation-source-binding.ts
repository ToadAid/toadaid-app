import type { PondBridgeRepoStatusObservationSourceBindingFixture } from "../contracts/pond-bridge-repo-status-observation-source-binding.js";
import { stageCP2BridgeRepoStatusSourceBinding } from "./stage-c-p2-bridge-repo-status-source-binding.js";

export const stageCP4BridgeRepoStatusObservationSourceBinding = {
  contractVersion:
    "pond-bridge-repo-status-observation-source-binding-c-p4",
  supersededBinding: {
    contractVersion: stageCP2BridgeRepoStatusSourceBinding.contractVersion,
    sourceCommit: stageCP2BridgeRepoStatusSourceBinding.sourceIdentity.commit,
    reason: "source_contract_added_observation_metadata",
  },
  responsibilityBasis: stageCP2BridgeRepoStatusSourceBinding.responsibilityBasis,
  sourceIdentity: {
    repositoryOwner: "ToadAid",
    repositoryName: "mirror-desktop-bridge",
    branch: "main",
    commit: "dfc9b59084e36324b1d97c0e8f9f1f72441970d7",
    modulePath: "src/liveReadOnlyRepoStatusAdapterIntegration.ts",
    resultType: "LiveRepoStatusIntegrationResult",
    snapshotType: "IntegratedRepoStatusAdapterSnapshot",
    stage: "stage_1i_live_readonly_repo_status_adapter_integration",
    mode: "gated_live_client_adapter_integration",
    integrationId: "integration.live-repo-status.adapter",
    bindingPosture: "exact_merged_source_contract_identity",
  },
  projectedResultFields:
    stageCP2BridgeRepoStatusSourceBinding.projectedResultFields,
  projectedSnapshotFields: [
    ...stageCP2BridgeRepoStatusSourceBinding.projectedSnapshotFields,
    "observation_metadata",
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
  sourceRuntimePosture: "implemented_default_disabled",
  sourceMcpExposurePosture: "disabled",
  boundedStatusLinesPosture: "withheld_from_initial_pond_projection",
  commandReceiptPreviewPosture: "withheld_from_initial_pond_projection",
  sourceObservationPosture: "source_observation_time_present",
  currentTruthPosture:
    "blocked_pending_pond_freshness_policy_target_comparison_and_trusted_channel",
  trustedChannelPosture: "not_established",
  pondTransportPosture: "not_included",
  runtimeIntegrationPosture: "not_included",
  authority: "none",
} as const satisfies PondBridgeRepoStatusObservationSourceBindingFixture;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageCP4FixtureInvariant_SupersededBindingExact = Assert<
  Equal<
    typeof stageCP4BridgeRepoStatusObservationSourceBinding["supersededBinding"],
    {
      readonly contractVersion: "pond-bridge-repo-status-source-binding-c-p2";
      readonly sourceCommit: "ea86681f2db2113c40911c2d585b19f41be1a124";
      readonly reason: "source_contract_added_observation_metadata";
    }
  >
>;
export type PondStageCP4FixtureInvariant_ExactMergedSourceCommit = Assert<
  Equal<
    typeof stageCP4BridgeRepoStatusObservationSourceBinding["sourceIdentity"]["commit"],
    "dfc9b59084e36324b1d97c0e8f9f1f72441970d7"
  >
>;
export type PondStageCP4FixtureInvariant_ResultAllowlistReused = Assert<
  Equal<
    typeof stageCP4BridgeRepoStatusObservationSourceBinding["projectedResultFields"],
    typeof stageCP2BridgeRepoStatusSourceBinding["projectedResultFields"]
  >
>;
export type PondStageCP4FixtureInvariant_SnapshotAllowlistAddsOnlyObservationMetadata = Assert<
  Equal<
    typeof stageCP4BridgeRepoStatusObservationSourceBinding["projectedSnapshotFields"],
    readonly [
      ...typeof stageCP2BridgeRepoStatusSourceBinding["projectedSnapshotFields"],
      "observation_metadata",
    ]
  >
>;
export type PondStageCP4FixtureInvariant_CurrentnessNotEstablished = Assert<
  Equal<
    [
      typeof stageCP4BridgeRepoStatusObservationSourceBinding["observationMetadataContract"]["freshnessBasis"],
      typeof stageCP4BridgeRepoStatusObservationSourceBinding["observationMetadataContract"]["currentnessPosture"],
      typeof stageCP4BridgeRepoStatusObservationSourceBinding["currentTruthPosture"],
      typeof stageCP4BridgeRepoStatusObservationSourceBinding["authority"],
    ],
    [
      "source_observation_time_only",
      "not_established_consumer_must_evaluate",
      "blocked_pending_pond_freshness_policy_target_comparison_and_trusted_channel",
      "none",
    ]
  >
>;
