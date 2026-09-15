import assert from "node:assert/strict";

import { assessPondBridgeStdioDeliveryAdmission } from "../src/contracts/pond-bridge-stdio-delivery-admission.ts";

const sourceBinding = {
  contractVersion: "pond-bridge-stage39a-repo-status-source-binding-c-p9",
  sourceIdentity: {
    repositoryOwner: "ToadAid",
    repositoryName: "mirror-desktop-bridge",
    branch: "main",
    commit: "595016262507d21aa34997277b9197ce89fda378",
    modulePath: "src/stage39PortableReadOnlyMcpVisibility.ts",
    stage: "stage_39a_portable_readonly_mcp_visibility",
    toolName: "mirror_repo_status",
    transport: "stdio",
    bindingPosture: "exact_merged_source_contract_identity",
  },
  requiredEvidenceFields: [
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
  ],
  deliveryEvidenceContract: {
    structuralChannel: "mcp_structured_tool_result",
    targetBindingField: "target_identity_sha256",
    producerAuthorityPosture: "not_established_by_producer",
  },
  toolInventoryCount: 4,
  readOnlyToolInventory: [
    "mirror_bridge_status",
    "mirror_repo_status",
    "mirror_repo_tree",
    "mirror_read_text_file",
  ],
  rawOriginUrlProjected: false,
  remoteVerification: "not_performed",
  pondClientRuntimePosture: "not_included",
  authority: "none",
};
const completeReceiverObservation = {
  process_ownership: "exact_direct_child",
  server_identity: "exact_stage39a",
  initialization: "mcp_initialized",
  tool_inventory: "exact_four_readonly",
  target_binding: "exact_digest_match",
  content_channel: "structured_content_separate_from_operator_input",
  precedence: "receiver_owned_evidence_channel",
  live_invocation: "observed",
};
const candidate = {
  source_stage: "stage_39a_portable_readonly_mcp_visibility",
  tool_name: "mirror_repo_status",
  transport: "stdio",
  structural_channel: "mcp_structured_tool_result",
  target_identity_sha256:
    "abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
  producer_channel_authority: "not_established_by_producer",
  receiver_observation: completeReceiverObservation,
};
const assess = (overrides = {}) =>
  assessPondBridgeStdioDeliveryAdmission({
    sourceBinding,
    deliveryCandidate: candidate,
    ...overrides,
  });

const complete = assess();
assert.equal(complete.admissionState, "structurally_admissible_fixture");
assert.equal(complete.reason, "all_required_fixture_checks_satisfied");
assert.equal(complete.satisfiedChecks.length, 8);
assert.deepEqual(complete.unsatisfiedChecks, []);

const receiverCases = [
  ["process_ownership", "not_observed", "exact_direct_child_process_ownership"],
  ["server_identity", "not_observed", "exact_stage39a_server_identity"],
  ["initialization", "not_observed", "mcp_initialization_completed"],
  ["tool_inventory", "not_observed", "exact_four_readonly_tool_inventory"],
  ["target_binding", "not_compared", "startup_target_digest_matched"],
  ["content_channel", "not_observed", "structured_content_separated_from_operator_input"],
  ["precedence", "not_verified", "receiver_channel_precedence_verified"],
  ["live_invocation", "not_performed", "live_tool_invocation_observed"],
];
const incomplete = receiverCases.map(([field, value, check]) => {
  const result = assess({
    deliveryCandidate: {
      ...candidate,
      receiver_observation: {
        ...completeReceiverObservation,
        [field]: value,
      },
    },
  });
  assert.equal(result.admissionState, "insufficient_evidence");
  assert.equal(result.reason, "receiver_proof_incomplete");
  assert.deepEqual(result.unsatisfiedChecks, [check]);
  return result;
});

const invalidCases = [
  [{ sourceBinding: null }, "source_binding_invalid"],
  [
    {
      sourceBinding: {
        ...sourceBinding,
        sourceIdentity: {
          ...sourceBinding.sourceIdentity,
          commit: "0000000000000000000000000000000000000000",
        },
      },
    },
    "source_binding_invalid",
  ],
  [
    {
      sourceBinding: {
        ...sourceBinding,
        readOnlyToolInventory: [...sourceBinding.readOnlyToolInventory, "extra"],
      },
    },
    "source_binding_invalid",
  ],
  [{ deliveryCandidate: null }, "delivery_candidate_invalid"],
  [
    {
      deliveryCandidate: {
        ...candidate,
        target_identity_sha256: "not-a-digest",
      },
    },
    "delivery_candidate_invalid",
  ],
  [
    {
      deliveryCandidate: {
        ...candidate,
        producer_channel_authority: "trusted",
      },
    },
    "delivery_candidate_invalid",
  ],
  [
    {
      deliveryCandidate: {
        ...candidate,
        authority: "trusted",
      },
    },
    "delivery_candidate_invalid",
  ],
];
const invalid = invalidCases.map(([overrides, reason]) => {
  const result = assess(overrides);
  assert.equal(result.admissionState, "insufficient_evidence");
  assert.equal(result.reason, reason);
  assert.equal(result.satisfiedChecks.length, 0);
  assert.equal(result.unsatisfiedChecks.length, 8);
  return result;
});

for (const result of [complete, ...incomplete, ...invalid]) {
  assert.equal(result.producerAuthorityAcceptedAsProof, false);
  assert.equal(result.productionProofEstablished, false);
  assert.equal(result.currentTruthAdmitted, false);
  assert.equal(result.snapshotPresentation, "withheld");
  assert.equal(result.canonicalOutcome, "insufficient_evidence");
  assert.equal(result.runtimeActivationPosture, "not_included");
  assert.equal(result.authority, "none");
  assert.equal(Object.isFrozen(result), true);
  assert.equal(Object.isFrozen(result.satisfiedChecks), true);
  assert.equal(Object.isFrozen(result.unsatisfiedChecks), true);
}

console.log("POND_STAGE_CP9_STDIO_DELIVERY_ADMISSION_SELFTEST_PASS");
