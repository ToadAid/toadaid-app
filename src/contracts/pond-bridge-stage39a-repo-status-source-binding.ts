// Stage C-P9 exact binding to the merged Bridge Stage 39A-R1 result contract.
// This identifies a source shape; it does not launch Bridge or prove delivery.

export interface PondBridgeStage39ARepoStatusSourceBindingFixture {
  readonly contractVersion: "pond-bridge-stage39a-repo-status-source-binding-c-p9";
  readonly sourceIdentity: {
    readonly repositoryOwner: "ToadAid";
    readonly repositoryName: "mirror-desktop-bridge";
    readonly branch: "main";
    readonly commit: "595016262507d21aa34997277b9197ce89fda378";
    readonly modulePath: "src/stage39PortableReadOnlyMcpVisibility.ts";
    readonly stage: "stage_39a_portable_readonly_mcp_visibility";
    readonly toolName: "mirror_repo_status";
    readonly transport: "stdio";
    readonly bindingPosture: "exact_merged_source_contract_identity";
  };
  readonly requiredEvidenceFields: readonly [
    "repo_root_label",
    "configured_origin_identity",
    "origin_identity_posture",
    "branch_name",
    "head_sha_short",
    "head_sha_full",
    "upstream_available",
    "observation_metadata",
    "evidence_reference",
    "truncation_report",
    "delivery_evidence",
    "receipt_id",
    "mutation_performed",
    "authority_granted",
  ];
  readonly deliveryEvidenceContract: {
    readonly structuralChannel: "mcp_structured_tool_result";
    readonly targetBindingField: "target_identity_sha256";
    readonly producerAuthorityPosture: "not_established_by_producer";
  };
  readonly toolInventoryCount: 4;
  readonly readOnlyToolInventory: readonly [
    "mirror_bridge_status",
    "mirror_repo_status",
    "mirror_repo_tree",
    "mirror_read_text_file",
  ];
  readonly rawOriginUrlProjected: false;
  readonly remoteVerification: "not_performed";
  readonly pondClientRuntimePosture: "not_included";
  readonly authority: "none";
}

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageCP9SourceInvariant_ExactMergedBridgeCommit = Assert<
  Equal<
    PondBridgeStage39ARepoStatusSourceBindingFixture["sourceIdentity"]["commit"],
    "595016262507d21aa34997277b9197ce89fda378"
  >
>;
export type PondStageCP9SourceInvariant_FourReadOnlyTools = Assert<
  Equal<PondBridgeStage39ARepoStatusSourceBindingFixture["toolInventoryCount"], 4>
>;
export type PondStageCP9SourceInvariant_NoAuthority = Assert<
  Equal<PondBridgeStage39ARepoStatusSourceBindingFixture["authority"], "none">
>;
