import type { PondBridgeRepoStatusSourceBindingFixture } from "../contracts/pond-bridge-repo-status-source-binding.js";
import { stageCP0WorkspaceTargetResponsibility } from "./stage-c-p0-source-responsibility.js";

export const stageCP2BridgeRepoStatusSourceBinding = {
  contractVersion: "pond-bridge-repo-status-source-binding-c-p2",
  responsibilityBasis: {
    concern: stageCP0WorkspaceTargetResponsibility.concern,
    runtimeResponsibility:
      stageCP0WorkspaceTargetResponsibility.runtimeResponsibility,
  },
  sourceIdentity: {
    repositoryOwner: "ToadAid",
    repositoryName: "mirror-desktop-bridge",
    branch: "main",
    commit: "ea86681f2db2113c40911c2d585b19f41be1a124",
    modulePath: "src/liveReadOnlyRepoStatusAdapterIntegration.ts",
    resultType: "LiveRepoStatusIntegrationResult",
    snapshotType: "IntegratedRepoStatusAdapterSnapshot",
    stage: "stage_1i_live_readonly_repo_status_adapter_integration",
    mode: "gated_live_client_adapter_integration",
    integrationId: "integration.live-repo-status.adapter",
    bindingPosture: "exact_merged_source_contract_identity",
  },
  projectedResultFields: [
    "state",
    "safe_to_display",
    "adapter_snapshot",
    "live_client_evidence_reference",
    "redaction_report",
    "truncation_report",
    "receipt_reference",
    "blocked_reasons",
    "blocked_authority_statement",
  ],
  projectedSnapshotFields: [
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
  ],
  sourceRuntimePosture: "implemented_default_disabled",
  sourceMcpExposurePosture: "disabled",
  boundedStatusLinesPosture: "withheld_from_initial_pond_projection",
  commandReceiptPreviewPosture: "withheld_from_initial_pond_projection",
  sourceFreshnessFieldPosture: "absent_no_observed_at_or_freshness_field",
  currentTruthPosture: "blocked_source_contract_cannot_establish_freshness",
  trustedChannelPosture: "not_established",
  pondTransportPosture: "not_included",
  runtimeIntegrationPosture: "not_included",
  authority: "none",
} as const satisfies PondBridgeRepoStatusSourceBindingFixture;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageCP2FixtureInvariant_ExactSourceIdentity = Assert<
  Equal<
    typeof stageCP2BridgeRepoStatusSourceBinding["sourceIdentity"],
    {
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
    }
  >
>;
export type PondStageCP2FixtureInvariant_ExactCP0ResponsibilityReuse = Assert<
  Equal<
    [
      typeof stageCP2BridgeRepoStatusSourceBinding["responsibilityBasis"]["concern"],
      typeof stageCP2BridgeRepoStatusSourceBinding["responsibilityBasis"]["runtimeResponsibility"],
    ],
    [
      typeof stageCP0WorkspaceTargetResponsibility["concern"],
      typeof stageCP0WorkspaceTargetResponsibility["runtimeResponsibility"],
    ]
  >
>;
export type PondStageCP2FixtureInvariant_ResultAllowlistExact = Assert<
  Equal<
    typeof stageCP2BridgeRepoStatusSourceBinding["projectedResultFields"],
    readonly [
      "state",
      "safe_to_display",
      "adapter_snapshot",
      "live_client_evidence_reference",
      "redaction_report",
      "truncation_report",
      "receipt_reference",
      "blocked_reasons",
      "blocked_authority_statement",
    ]
  >
>;
export type PondStageCP2FixtureInvariant_UnsafeDetailFieldsWithheld = Assert<
  Equal<
    [
      typeof stageCP2BridgeRepoStatusSourceBinding["boundedStatusLinesPosture"],
      typeof stageCP2BridgeRepoStatusSourceBinding["commandReceiptPreviewPosture"],
    ],
    [
      "withheld_from_initial_pond_projection",
      "withheld_from_initial_pond_projection",
    ]
  >
>;
export type PondStageCP2FixtureInvariant_FreshnessBlocksCurrentTruth = Assert<
  Equal<
    [
      typeof stageCP2BridgeRepoStatusSourceBinding["sourceFreshnessFieldPosture"],
      typeof stageCP2BridgeRepoStatusSourceBinding["currentTruthPosture"],
      typeof stageCP2BridgeRepoStatusSourceBinding["trustedChannelPosture"],
      typeof stageCP2BridgeRepoStatusSourceBinding["runtimeIntegrationPosture"],
      typeof stageCP2BridgeRepoStatusSourceBinding["authority"],
    ],
    [
      "absent_no_observed_at_or_freshness_field",
      "blocked_source_contract_cannot_establish_freshness",
      "not_established",
      "not_included",
      "none",
    ]
  >
>;
