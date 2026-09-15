import type { PondBridgeStage39ARepoStatusSourceBindingFixture } from "./pond-bridge-stage39a-repo-status-source-binding.js";

export type PondBridgeStdioDeliveryAdmissionCheck =
  | "exact_direct_child_process_ownership"
  | "exact_stage39a_server_identity"
  | "mcp_initialization_completed"
  | "exact_four_readonly_tool_inventory"
  | "startup_target_digest_matched"
  | "structured_content_separated_from_operator_input"
  | "receiver_channel_precedence_verified"
  | "live_tool_invocation_observed";

export interface PondBridgeStdioDeliveryCandidate {
  readonly source_stage: "stage_39a_portable_readonly_mcp_visibility";
  readonly tool_name: "mirror_repo_status";
  readonly transport: "stdio";
  readonly structural_channel: "mcp_structured_tool_result";
  readonly target_identity_sha256: string;
  readonly producer_channel_authority: "not_established_by_producer";
  readonly receiver_observation: {
    readonly process_ownership: "not_observed" | "exact_direct_child";
    readonly server_identity: "not_observed" | "exact_stage39a";
    readonly initialization: "not_observed" | "mcp_initialized";
    readonly tool_inventory: "not_observed" | "exact_four_readonly";
    readonly target_binding: "not_compared" | "exact_digest_match";
    readonly content_channel:
      | "not_observed"
      | "structured_content_separate_from_operator_input";
    readonly precedence:
      | "not_verified"
      | "receiver_owned_evidence_channel";
    readonly live_invocation: "not_performed" | "observed";
  };
}

export interface PondBridgeStdioDeliveryAdmissionInput {
  readonly sourceBinding: unknown;
  readonly deliveryCandidate: unknown;
}

export interface PondBridgeStdioDeliveryAdmissionAssessment {
  readonly contractVersion: "pond-bridge-stdio-delivery-admission-c-p9";
  readonly sourceBindingContractVersion:
    PondBridgeStage39ARepoStatusSourceBindingFixture["contractVersion"];
  readonly assessmentKind: "deterministic_supplied_delivery_candidate";
  readonly admissionState:
    | "insufficient_evidence"
    | "structurally_admissible_fixture";
  readonly reason:
    | "source_binding_invalid"
    | "delivery_candidate_invalid"
    | "receiver_proof_incomplete"
    | "all_required_fixture_checks_satisfied";
  readonly satisfiedChecks: readonly PondBridgeStdioDeliveryAdmissionCheck[];
  readonly unsatisfiedChecks: readonly PondBridgeStdioDeliveryAdmissionCheck[];
  readonly producerAuthorityAcceptedAsProof: false;
  readonly productionProofEstablished: false;
  readonly currentTruthAdmitted: false;
  readonly snapshotPresentation: "withheld";
  readonly canonicalOutcome: "insufficient_evidence";
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const checks = Object.freeze([
  "exact_direct_child_process_ownership",
  "exact_stage39a_server_identity",
  "mcp_initialization_completed",
  "exact_four_readonly_tool_inventory",
  "startup_target_digest_matched",
  "structured_content_separated_from_operator_input",
  "receiver_channel_precedence_verified",
  "live_tool_invocation_observed",
] as const satisfies readonly PondBridgeStdioDeliveryAdmissionCheck[]);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;

const exactArray = (value: unknown, expected: readonly string[]) =>
  Array.isArray(value) &&
  value.length === expected.length &&
  value.every((entry, index) => entry === expected[index]);

const exactKeys = (
  value: Record<string, unknown>,
  expected: readonly string[],
) => exactArray(Object.keys(value).sort(), [...expected].sort());

const validSourceBinding = (value: unknown) => {
  const candidate = record(value);
  const source = record(candidate?.sourceIdentity);
  const delivery = record(candidate?.deliveryEvidenceContract);
  return (
    candidate !== null &&
    source !== null &&
    delivery !== null &&
    exactKeys(candidate, [
      "contractVersion",
      "sourceIdentity",
      "requiredEvidenceFields",
      "deliveryEvidenceContract",
      "toolInventoryCount",
      "readOnlyToolInventory",
      "rawOriginUrlProjected",
      "remoteVerification",
      "pondClientRuntimePosture",
      "authority",
    ]) &&
    exactKeys(source, [
      "repositoryOwner",
      "repositoryName",
      "branch",
      "commit",
      "modulePath",
      "stage",
      "toolName",
      "transport",
      "bindingPosture",
    ]) &&
    exactKeys(delivery, [
      "structuralChannel",
      "targetBindingField",
      "producerAuthorityPosture",
    ]) &&
    candidate?.contractVersion ===
      "pond-bridge-stage39a-repo-status-source-binding-c-p9" &&
    source?.repositoryOwner === "ToadAid" &&
    source.repositoryName === "mirror-desktop-bridge" &&
    source.branch === "main" &&
    source.commit === "595016262507d21aa34997277b9197ce89fda378" &&
    source.modulePath === "src/stage39PortableReadOnlyMcpVisibility.ts" &&
    source.stage === "stage_39a_portable_readonly_mcp_visibility" &&
    source.toolName === "mirror_repo_status" &&
    source.transport === "stdio" &&
    source.bindingPosture === "exact_merged_source_contract_identity" &&
    exactArray(candidate.requiredEvidenceFields, [
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
    ]) &&
    delivery?.structuralChannel === "mcp_structured_tool_result" &&
    delivery.targetBindingField === "target_identity_sha256" &&
    delivery.producerAuthorityPosture === "not_established_by_producer" &&
    candidate.toolInventoryCount === 4 &&
    exactArray(candidate.readOnlyToolInventory, [
      "mirror_bridge_status",
      "mirror_repo_status",
      "mirror_repo_tree",
      "mirror_read_text_file",
    ]) &&
    candidate.rawOriginUrlProjected === false &&
    candidate.remoteVerification === "not_performed" &&
    candidate.pondClientRuntimePosture === "not_included" &&
    candidate.authority === "none"
  );
};

const validCandidate = (
  value: unknown,
): PondBridgeStdioDeliveryCandidate | null => {
  const candidate = record(value);
  const receiver = record(candidate?.receiver_observation);
  if (
    candidate === null ||
    receiver === null ||
    !exactKeys(candidate, [
      "source_stage",
      "tool_name",
      "transport",
      "structural_channel",
      "target_identity_sha256",
      "producer_channel_authority",
      "receiver_observation",
    ]) ||
    !exactKeys(receiver, [
      "process_ownership",
      "server_identity",
      "initialization",
      "tool_inventory",
      "target_binding",
      "content_channel",
      "precedence",
      "live_invocation",
    ]) ||
    candidate?.source_stage !== "stage_39a_portable_readonly_mcp_visibility" ||
    candidate.tool_name !== "mirror_repo_status" ||
    candidate.transport !== "stdio" ||
    candidate.structural_channel !== "mcp_structured_tool_result" ||
    typeof candidate.target_identity_sha256 !== "string" ||
    !/^[0-9a-f]{64}$/.test(candidate.target_identity_sha256) ||
    candidate.producer_channel_authority !== "not_established_by_producer" ||
    !["not_observed", "exact_direct_child"].includes(String(receiver.process_ownership)) ||
    !["not_observed", "exact_stage39a"].includes(String(receiver.server_identity)) ||
    !["not_observed", "mcp_initialized"].includes(String(receiver.initialization)) ||
    !["not_observed", "exact_four_readonly"].includes(String(receiver.tool_inventory)) ||
    !["not_compared", "exact_digest_match"].includes(String(receiver.target_binding)) ||
    !["not_observed", "structured_content_separate_from_operator_input"].includes(String(receiver.content_channel)) ||
    !["not_verified", "receiver_owned_evidence_channel"].includes(String(receiver.precedence)) ||
    !["not_performed", "observed"].includes(String(receiver.live_invocation))
  ) return null;
  return value as PondBridgeStdioDeliveryCandidate;
};

const assessment = (
  reason: PondBridgeStdioDeliveryAdmissionAssessment["reason"],
  satisfiedChecks: readonly PondBridgeStdioDeliveryAdmissionCheck[],
  unsatisfiedChecks: readonly PondBridgeStdioDeliveryAdmissionCheck[],
): PondBridgeStdioDeliveryAdmissionAssessment =>
  Object.freeze({
    contractVersion: "pond-bridge-stdio-delivery-admission-c-p9",
    sourceBindingContractVersion:
      "pond-bridge-stage39a-repo-status-source-binding-c-p9",
    assessmentKind: "deterministic_supplied_delivery_candidate",
    admissionState:
      reason === "all_required_fixture_checks_satisfied"
        ? "structurally_admissible_fixture"
        : "insufficient_evidence",
    reason,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    producerAuthorityAcceptedAsProof: false,
    productionProofEstablished: false,
    currentTruthAdmitted: false,
    snapshotPresentation: "withheld",
    canonicalOutcome: "insufficient_evidence",
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondBridgeStdioDeliveryAdmission(
  input: PondBridgeStdioDeliveryAdmissionInput,
): PondBridgeStdioDeliveryAdmissionAssessment {
  if (!validSourceBinding(input.sourceBinding))
    return assessment("source_binding_invalid", [], checks);
  const candidate = validCandidate(input.deliveryCandidate);
  if (candidate === null)
    return assessment("delivery_candidate_invalid", [], checks);

  const receiver = candidate.receiver_observation;
  const values = [
    receiver.process_ownership === "exact_direct_child",
    receiver.server_identity === "exact_stage39a",
    receiver.initialization === "mcp_initialized",
    receiver.tool_inventory === "exact_four_readonly",
    receiver.target_binding === "exact_digest_match",
    receiver.content_channel ===
      "structured_content_separate_from_operator_input",
    receiver.precedence === "receiver_owned_evidence_channel",
    receiver.live_invocation === "observed",
  ];
  const satisfied = checks.filter((_, index) => values[index]);
  const unsatisfied = checks.filter((_, index) => !values[index]);
  return assessment(
    unsatisfied.length === 0
      ? "all_required_fixture_checks_satisfied"
      : "receiver_proof_incomplete",
    satisfied,
    unsatisfied,
  );
}

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageCP9Invariant_FixtureNeverBecomesProductionProof = Assert<
  Equal<
    [
      PondBridgeStdioDeliveryAdmissionAssessment["producerAuthorityAcceptedAsProof"],
      PondBridgeStdioDeliveryAdmissionAssessment["productionProofEstablished"],
      PondBridgeStdioDeliveryAdmissionAssessment["currentTruthAdmitted"],
      PondBridgeStdioDeliveryAdmissionAssessment["authority"],
    ],
    [false, false, false, "none"]
  >
>;
