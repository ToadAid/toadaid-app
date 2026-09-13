import type { PondReadOnlyTruthSourceResponsibilityBinding } from "../contracts/pond-read-only-truth-source-responsibility.js";

const sourceResponsibilityBase = {
  contractVersion: "pond-read-only-truth-source-responsibility-c-p0",
  semanticOwner: "canonical_architecture",
  responsibilityPosture:
    "canonical_logical_allocation_not_concrete_runtime_source",
  pondRole: "consumer_presenter_only",
  concreteSourceIdentityPosture: "not_bound",
  storageOwnerPosture: "not_selected_by_canonical_architecture",
  apiProtocolPosture: "not_selected",
  trustedChannelPosture: "not_established",
  freshnessObservationPosture: "not_performed",
  runtimeIntegrationPosture: "not_included",
  authority: "none",
} as const;

export const stageCP0GovernanceEligibilityResponsibility = {
  ...sourceResponsibilityBase,
  concern: "current_governance_eligibility_evaluation",
  runtimeResponsibility: "mirror_core",
} as const satisfies PondReadOnlyTruthSourceResponsibilityBinding;

export const stageCP0WorkspaceTargetResponsibility = {
  ...sourceResponsibilityBase,
  concern: "workspace_repository_target_resolution",
  runtimeResponsibility: "mirror_desktop_bridge",
} as const satisfies PondReadOnlyTruthSourceResponsibilityBinding;

export const stageCP0RepositoryEvidenceResponsibility = {
  ...sourceResponsibilityBase,
  concern: "repository_analysis_and_source_evidence",
  runtimeResponsibility: "toadaid_coder",
} as const satisfies PondReadOnlyTruthSourceResponsibilityBinding;

export const stageCP0ReceiptCaptureResponsibility = {
  ...sourceResponsibilityBase,
  concern: "receipt_evidence_capture_and_forwarding",
  runtimeResponsibility: "mirror_desktop_bridge",
} as const satisfies PondReadOnlyTruthSourceResponsibilityBinding;

export const stageCP0SourceResponsibilityMatrix = [
  stageCP0GovernanceEligibilityResponsibility,
  stageCP0WorkspaceTargetResponsibility,
  stageCP0RepositoryEvidenceResponsibility,
  stageCP0ReceiptCaptureResponsibility,
] as const satisfies readonly [
  PondReadOnlyTruthSourceResponsibilityBinding,
  PondReadOnlyTruthSourceResponsibilityBinding,
  PondReadOnlyTruthSourceResponsibilityBinding,
  PondReadOnlyTruthSourceResponsibilityBinding,
];

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageCP0FixtureInvariant_ConcernOrderExact = Assert<
  Equal<
    [
      typeof stageCP0SourceResponsibilityMatrix[0]["concern"],
      typeof stageCP0SourceResponsibilityMatrix[1]["concern"],
      typeof stageCP0SourceResponsibilityMatrix[2]["concern"],
      typeof stageCP0SourceResponsibilityMatrix[3]["concern"],
    ],
    [
      "current_governance_eligibility_evaluation",
      "workspace_repository_target_resolution",
      "repository_analysis_and_source_evidence",
      "receipt_evidence_capture_and_forwarding",
    ]
  >
>;
export type PondStageCP0FixtureInvariant_ResponsibilityOrderExact = Assert<
  Equal<
    [
      typeof stageCP0SourceResponsibilityMatrix[0]["runtimeResponsibility"],
      typeof stageCP0SourceResponsibilityMatrix[1]["runtimeResponsibility"],
      typeof stageCP0SourceResponsibilityMatrix[2]["runtimeResponsibility"],
      typeof stageCP0SourceResponsibilityMatrix[3]["runtimeResponsibility"],
    ],
    [
      "mirror_core",
      "mirror_desktop_bridge",
      "toadaid_coder",
      "mirror_desktop_bridge",
    ]
  >
>;
export type PondStageCP0FixtureInvariant_AllConcreteSourcesUnbound = Assert<
  Equal<
    typeof stageCP0SourceResponsibilityMatrix[number]["concreteSourceIdentityPosture"],
    "not_bound"
  >
>;
export type PondStageCP0FixtureInvariant_AllStorageOwnersUnselected = Assert<
  Equal<
    typeof stageCP0SourceResponsibilityMatrix[number]["storageOwnerPosture"],
    "not_selected_by_canonical_architecture"
  >
>;
export type PondStageCP0FixtureInvariant_AllIntegrationExcluded = Assert<
  Equal<
    [
      typeof stageCP0SourceResponsibilityMatrix[number]["trustedChannelPosture"],
      typeof stageCP0SourceResponsibilityMatrix[number]["freshnessObservationPosture"],
      typeof stageCP0SourceResponsibilityMatrix[number]["runtimeIntegrationPosture"],
      typeof stageCP0SourceResponsibilityMatrix[number]["authority"],
    ],
    ["not_established", "not_performed", "not_included", "none"]
  >
>;
