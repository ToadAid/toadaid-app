import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

// Recompute the cockpit record from the canonical Stage C contracts over the
// same inlined fixture inputs the C-P8/C-P9 selftests pin, then require exact
// parity with the committed generated artifact. Any fixture-chain, contract,
// or record-module pick drift fails loudly here instead of surfacing in UI.
import { classifyPondBridgeRepoStatusObservationAge } from "../src/contracts/pond-bridge-repo-status-observation-age.ts";
import { comparePondBridgeRepoStatusTarget } from "../src/contracts/pond-bridge-repo-status-target-comparison.ts";
import { comparePondBridgeRepoStatusFullHeadTarget } from "../src/contracts/pond-bridge-repo-status-full-head-target-comparison.ts";
import { comparePondBridgeRepoStatusOriginIdentityTarget } from "../src/contracts/pond-bridge-repo-status-origin-identity-target-comparison.ts";
import { assessPondBridgeStdioDeliveryAdmission } from "../src/contracts/pond-bridge-stdio-delivery-admission.ts";

import generated from "../ui/generated/pond-stage-c-fixture.js";
import * as generatedModule from "../ui/generated/pond-stage-c-fixture.js";

// ---------------------------------------------------------------------------
// Inlined canonical fixture inputs (node cannot import src/fixtures/* because
// their value imports use `.js` specifiers; these blocks mirror the fixtures
// exactly, as the C-P8/C-P9 selftests already do).
// ---------------------------------------------------------------------------

const evaluatedAtEpochMs = 1_800_000_060_000;

const expectedTarget = {
  contractVersion: "pond-read-only-repository-target-c-p1",
  repository: {
    owner: "ToadAid",
    name: "toadaid-app",
    identityPosture: "fixture_exact_owner_name_not_remote_verified",
  },
  branch: {
    name: "main",
    bindingPosture: "fixture_branch_name_not_live_resolved",
  },
  head: {
    commit: "adda2fc7807a504b5621c18a3aa84ce8f3004440",
    bindingPosture: "fixture_parent_commit_not_live_head",
  },
  path: {
    pathClass: "repository_root",
    repositoryRelativePath: ".",
    bindingPosture: "fixture_exact_repository_root",
  },
  operationClass: "read",
  operationPosture: "identity_only_not_performed",
  targetPosture:
    "fixture_identity_only_not_grant_or_authoritative_runtime_target",
  authority: "none",
};

const ageAssessment = classifyPondBridgeRepoStatusObservationAge({
  observationMetadata: {
    observed_at_epoch_ms: evaluatedAtEpochMs - 30_000,
    freshness_basis: "source_observation_time_only",
    currentness_posture: "not_established_consumer_must_evaluate",
  },
  evaluatedAtEpochMs,
  maximumAgeMs: 60_000,
});

const fullHeadSourceBinding = {
  contractVersion: "pond-bridge-repo-status-full-head-source-binding-c-p7",
  supersededBinding: {
    contractVersion: "pond-bridge-repo-status-observation-source-binding-c-p4",
    sourceCommit: "dfc9b59084e36324b1d97c0e8f9f1f72441970d7",
    reason: "source_contract_added_validated_full_head",
  },
  responsibilityBasis: {
    concern: "workspace_repository_target_resolution",
    runtimeResponsibility: "mirror_desktop_bridge",
  },
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
    "observation_metadata",
    "head_sha_full",
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
  repositoryOwnerObservationPosture: "not_observable_by_bound_source_contract",
  currentTruthPosture:
    "blocked_pending_exact_repository_owner_and_trusted_channel",
  trustedChannelPosture: "not_established",
  pondTransportPosture: "not_included",
  runtimeIntegrationPosture: "not_included",
  authority: "none",
};

const originIdentitySourceBinding = {
  contractVersion: "pond-bridge-repo-status-origin-identity-source-binding-c-p8",
  supersededBinding: {
    contractVersion: "pond-bridge-repo-status-full-head-source-binding-c-p7",
    sourceCommit: "c9be94541406571eaea034aa61678e912f088cb8",
    reason: "source_contract_added_sanitized_configured_origin_identity",
  },
  responsibilityBasis: {
    concern: "workspace_repository_target_resolution",
    runtimeResponsibility: "mirror_desktop_bridge",
  },
  sourceIdentity: {
    repositoryOwner: "ToadAid",
    repositoryName: "mirror-desktop-bridge",
    branch: "main",
    commit: "56bae7363b18e180cfb5bb95da67803b2f847080",
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
    "observation_metadata",
    "head_sha_full",
    "configured_origin_identity",
    "origin_identity_posture",
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
  fullHeadContract: {
    containerField: "adapter_snapshot",
    field: "head_sha_full",
    format: "lowercase_hex_40",
    sourceValidationPosture: "required_fail_closed_before_ready",
  },
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
};

const stage39aSourceBinding = {
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

// ---------------------------------------------------------------------------
// Recompute every chain element through the canonical contracts.
// ---------------------------------------------------------------------------

const partialComparison = comparePondBridgeRepoStatusTarget({
  expectedTarget,
  snapshotCandidate: {
    repo_root_label: "toadaid-app",
    branch_name: "main",
    head_sha_short: "adda2fc",
  },
  ageAssessment,
});

const fullHeadComparison = comparePondBridgeRepoStatusFullHeadTarget({
  sourceBinding: fullHeadSourceBinding,
  expectedTarget,
  snapshotCandidate: {
    repo_root_label: "toadaid-app",
    branch_name: "main",
    head_sha_short: "adda2fc",
    head_sha_full: "adda2fc7807a504b5621c18a3aa84ce8f3004440",
  },
  ageAssessment,
});

const originIdentityComparison = comparePondBridgeRepoStatusOriginIdentityTarget(
  {
    sourceBinding: originIdentitySourceBinding,
    expectedTarget,
    snapshotCandidate: {
      repo_root_label: "toadaid-app",
      configured_origin_identity: {
        host: "github.com",
        owner: "ToadAid",
        name: "toadaid-app",
        observation_basis: "parsed_local_git_origin_url",
        remote_verification: "not_performed",
        raw_origin_url_projected: false,
        authority: "none",
      },
      origin_identity_posture: "parsed_supported_origin",
      branch_name: "main",
      head_sha_short: "adda2fc",
      head_sha_full: "adda2fc7807a504b5621c18a3aa84ce8f3004440",
    },
    ageAssessment,
  },
);

const deliveryAdmission = assessPondBridgeStdioDeliveryAdmission({
  sourceBinding: stage39aSourceBinding,
  deliveryCandidate: {
    source_stage: "stage_39a_portable_readonly_mcp_visibility",
    tool_name: "mirror_repo_status",
    transport: "stdio",
    structural_channel: "mcp_structured_tool_result",
    target_identity_sha256:
      "0000000000000000000000000000000000000000000000000000000000000000",
    producer_channel_authority: "not_established_by_producer",
    receiver_observation: {
      process_ownership: "not_observed",
      server_identity: "not_observed",
      initialization: "not_observed",
      tool_inventory: "not_observed",
      target_binding: "not_compared",
      content_channel: "not_observed",
      precedence: "not_verified",
      live_invocation: "not_performed",
    },
  },
});

// ---------------------------------------------------------------------------
// Rebuild the record with the same field picks as
// src/cockpit/pond-stage-c-cockpit-record.ts — parity against the generated
// artifact is exactly this pick-set equality.
// ---------------------------------------------------------------------------

const recomputed = {
  cockpitRecordVersion: "pond-stage-c-cockpit-record-c-p10",
  authority: "none",
  presentationPosture: "fixture_rendered_presentation_only",
  mutationPosture: "none_read_only",
  sourceBinding: {
    contractVersion: stage39aSourceBinding.contractVersion,
    repositoryOwner: stage39aSourceBinding.sourceIdentity.repositoryOwner,
    repositoryName: stage39aSourceBinding.sourceIdentity.repositoryName,
    branch: stage39aSourceBinding.sourceIdentity.branch,
    commit: stage39aSourceBinding.sourceIdentity.commit,
    modulePath: stage39aSourceBinding.sourceIdentity.modulePath,
    stage: stage39aSourceBinding.sourceIdentity.stage,
    toolName: stage39aSourceBinding.sourceIdentity.toolName,
    transport: stage39aSourceBinding.sourceIdentity.transport,
    bindingPosture: stage39aSourceBinding.sourceIdentity.bindingPosture,
    structuralChannel:
      stage39aSourceBinding.deliveryEvidenceContract.structuralChannel,
    producerAuthorityPosture:
      stage39aSourceBinding.deliveryEvidenceContract.producerAuthorityPosture,
    requiredEvidenceFields: [...stage39aSourceBinding.requiredEvidenceFields],
    requiredEvidenceFieldsCount:
      stage39aSourceBinding.requiredEvidenceFields.length,
    toolInventoryCount: stage39aSourceBinding.toolInventoryCount,
    readOnlyToolInventory: [...stage39aSourceBinding.readOnlyToolInventory],
    rawOriginUrlProjected: stage39aSourceBinding.rawOriginUrlProjected,
    remoteVerification: stage39aSourceBinding.remoteVerification,
    pondClientRuntimePosture: stage39aSourceBinding.pondClientRuntimePosture,
    authority: stage39aSourceBinding.authority,
  },
  freshness: {
    contractVersion: ageAssessment.contractVersion,
    assessmentKind: ageAssessment.assessmentKind,
    observationAgeState: ageAssessment.observationAgeState,
    reason: ageAssessment.reason,
    observedAtEpochMs: ageAssessment.observedAtEpochMs,
    evaluatedAtEpochMs: ageAssessment.evaluatedAtEpochMs,
    maximumAgeMs: ageAssessment.maximumAgeMs,
    observationAgeMs: ageAssessment.observationAgeMs,
    freshnessBasis: ageAssessment.freshnessBasis,
    currentTruthAdmitted: ageAssessment.currentTruthAdmitted,
    snapshotPresentation: ageAssessment.snapshotPresentation,
    presentationState: ageAssessment.presentationState,
    trustedChannelPosture: ageAssessment.trustedChannelPosture,
    canonicalOutcome: ageAssessment.canonicalOutcome,
    authority: ageAssessment.authority,
  },
  targetComparisonChain: {
    expectedTarget: {
      contractVersion: expectedTarget.contractVersion,
      repositoryOwner: expectedTarget.repository.owner,
      repositoryName: expectedTarget.repository.name,
      repositoryIdentityPosture: expectedTarget.repository.identityPosture,
      branchName: expectedTarget.branch.name,
      branchBindingPosture: expectedTarget.branch.bindingPosture,
      headCommit: expectedTarget.head.commit,
      headBindingPosture: expectedTarget.head.bindingPosture,
      pathClass: expectedTarget.path.pathClass,
      operationClass: expectedTarget.operationClass,
      targetPosture: expectedTarget.targetPosture,
      authority: expectedTarget.authority,
    },
    partialHeadPrefix: {
      contractVersion: partialComparison.contractVersion,
      sourceBindingComparisonPosture:
        partialComparison.sourceBindingComparisonPosture,
      comparisonPerformed: partialComparison.comparisonPerformed,
      targetComparisonState: partialComparison.targetComparisonState,
      reason: partialComparison.reason,
      conflictDimensions: [...partialComparison.conflictDimensions],
      fieldComparisons: {
        repositoryNameFromRootLabel:
          partialComparison.comparisonEvidence.fieldComparisons
            .repositoryNameFromRootLabel,
        branchName:
          partialComparison.comparisonEvidence.fieldComparisons.branchName,
        headCommitPrefix:
          partialComparison.comparisonEvidence.fieldComparisons
            .headCommitPrefix,
        repositoryOwner:
          partialComparison.comparisonEvidence.fieldComparisons.repositoryOwner,
        headCommitFull:
          partialComparison.comparisonEvidence.fieldComparisons.headCommitFull,
      },
      exactTargetMatchEstablished: partialComparison.exactTargetMatchEstablished,
      currentTruthAdmitted: partialComparison.currentTruthAdmitted,
      snapshotPresentation: partialComparison.snapshotPresentation,
      presentationState: partialComparison.presentationState,
      canonicalOutcome: partialComparison.canonicalOutcome,
      authority: partialComparison.authority,
    },
    fullHead: {
      contractVersion: fullHeadComparison.contractVersion,
      sourceBindingComparisonPosture:
        fullHeadComparison.sourceBindingComparisonPosture,
      comparisonPerformed: fullHeadComparison.comparisonPerformed,
      targetComparisonState: fullHeadComparison.targetComparisonState,
      reason: fullHeadComparison.reason,
      conflictDimensions: [...fullHeadComparison.conflictDimensions],
      fieldComparisons: {
        repositoryNameFromRootLabel:
          fullHeadComparison.comparisonEvidence.fieldComparisons
            .repositoryNameFromRootLabel,
        branchName:
          fullHeadComparison.comparisonEvidence.fieldComparisons.branchName,
        headCommitFull:
          fullHeadComparison.comparisonEvidence.fieldComparisons.headCommitFull,
        repositoryOwner:
          fullHeadComparison.comparisonEvidence.fieldComparisons.repositoryOwner,
      },
      exactTargetMatchEstablished: fullHeadComparison.exactTargetMatchEstablished,
      currentTruthAdmitted: fullHeadComparison.currentTruthAdmitted,
      snapshotPresentation: fullHeadComparison.snapshotPresentation,
      presentationState: fullHeadComparison.presentationState,
      canonicalOutcome: fullHeadComparison.canonicalOutcome,
      authority: fullHeadComparison.authority,
    },
    originIdentity: {
      contractVersion: originIdentityComparison.contractVersion,
      sourceBindingComparisonPosture:
        originIdentityComparison.sourceBindingComparisonPosture,
      comparisonPerformed: originIdentityComparison.comparisonPerformed,
      targetComparisonState: originIdentityComparison.targetComparisonState,
      reason: originIdentityComparison.reason,
      conflictDimensions: [...originIdentityComparison.conflictDimensions],
      fieldComparisons: {
        repositoryOwner:
          originIdentityComparison.comparisonEvidence.fieldComparisons
            .repositoryOwner,
        repositoryName:
          originIdentityComparison.comparisonEvidence.fieldComparisons
            .repositoryName,
        repositoryNameFromRootLabel:
          originIdentityComparison.comparisonEvidence.fieldComparisons
            .repositoryNameFromRootLabel,
        branchName:
          originIdentityComparison.comparisonEvidence.fieldComparisons.branchName,
        headCommitFull:
          originIdentityComparison.comparisonEvidence.fieldComparisons
            .headCommitFull,
      },
      exactTargetMatchEstablished:
        originIdentityComparison.exactTargetMatchEstablished,
      exactTargetMatchPosture: originIdentityComparison.exactTargetMatchPosture,
      remoteVerificationPosture:
        originIdentityComparison.remoteVerificationPosture,
      currentTruthAdmitted: originIdentityComparison.currentTruthAdmitted,
      snapshotPresentation: originIdentityComparison.snapshotPresentation,
      presentationState: originIdentityComparison.presentationState,
      canonicalOutcome: originIdentityComparison.canonicalOutcome,
      authority: originIdentityComparison.authority,
    },
  },
  deliveryAdmission: {
    contractVersion: deliveryAdmission.contractVersion,
    sourceBindingContractVersion: deliveryAdmission.sourceBindingContractVersion,
    assessmentKind: deliveryAdmission.assessmentKind,
    admissionState: deliveryAdmission.admissionState,
    reason: deliveryAdmission.reason,
    satisfiedChecks: [...deliveryAdmission.satisfiedChecks],
    unsatisfiedChecks: [...deliveryAdmission.unsatisfiedChecks],
    producerAuthorityAcceptedAsProof:
      deliveryAdmission.producerAuthorityAcceptedAsProof,
    productionProofEstablished: deliveryAdmission.productionProofEstablished,
    currentTruthAdmitted: deliveryAdmission.currentTruthAdmitted,
    snapshotPresentation: deliveryAdmission.snapshotPresentation,
    canonicalOutcome: deliveryAdmission.canonicalOutcome,
    runtimeActivationPosture: deliveryAdmission.runtimeActivationPosture,
    authority: deliveryAdmission.authority,
  },
  denialPosture: {
    rendererFailurePosture: "fail_closed_all_values_unavailable",
    fallbackRenderingForbidden: true,
    mutationPerformed: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  },
  sanitizedReceiptReference: {
    receiptRef: "receipt:fixture:stage-c:bridge-repo-status-observation-001",
    receiptRefPosture:
      "opaque_fixture_identity_not_canonical_receipt_id_format",
    receiptBodyPresentation: "not_present",
    verificationPosture: "not_performed",
    acceptancePosture: "not_established",
    authority: "none",
  },
};

// ---------------------------------------------------------------------------
// Parity: the committed artifact must equal the recomputed record exactly.
// ---------------------------------------------------------------------------

assert.equal(generated, generatedModule.pondStageCCockpitRecord);
assert.deepStrictEqual(generated, recomputed);

const record = generated;

// ---------------------------------------------------------------------------
// Identity constants — the exact merged source identities the panel presents.
// ---------------------------------------------------------------------------

assert.equal(record.cockpitRecordVersion, "pond-stage-c-cockpit-record-c-p10");
assert.equal(record.authority, "none");
assert.equal(record.presentationPosture, "fixture_rendered_presentation_only");
assert.equal(record.mutationPosture, "none_read_only");
assert.equal(
  record.sourceBinding.commit,
  "595016262507d21aa34997277b9197ce89fda378",
);
assert.equal(
  record.targetComparisonChain.expectedTarget.headCommit,
  "adda2fc7807a504b5621c18a3aa84ce8f3004440",
);
assert.equal(
  record.sourceBinding.contractVersion,
  "pond-bridge-stage39a-repo-status-source-binding-c-p9",
);
assert.equal(record.sourceBinding.toolName, "mirror_repo_status");
assert.equal(record.sourceBinding.transport, "stdio");
assert.equal(record.sourceBinding.pondClientRuntimePosture, "not_included");
assert.deepEqual(record.sourceBinding.readOnlyToolInventory, [
  "mirror_bridge_status",
  "mirror_repo_status",
  "mirror_repo_tree",
  "mirror_read_text_file",
]);
assert.equal(record.sourceBinding.requiredEvidenceFields.length, 14);

// ---------------------------------------------------------------------------
// Freshness: fresh against the fixture-declared maximum, truth still withheld.
// ---------------------------------------------------------------------------

assert.equal(record.freshness.observationAgeState, "fresh");
assert.equal(record.freshness.reason, "within_declared_maximum_age");
assert.equal(record.freshness.observedAtEpochMs, 1_800_000_030_000);
assert.equal(record.freshness.evaluatedAtEpochMs, 1_800_000_060_000);
assert.equal(record.freshness.maximumAgeMs, 60_000);
assert.equal(record.freshness.observationAgeMs, 30_000);
assert.equal(
  record.freshness.freshnessBasis,
  "source_observation_time_compared_to_fixture_declared_maximum_age",
);

// ---------------------------------------------------------------------------
// Target identity chain: prefix refused -> full HEAD refused -> exact fixture
// match that is explicitly NOT current truth.
// ---------------------------------------------------------------------------

const chain = record.targetComparisonChain;
assert.equal(chain.partialHeadPrefix.targetComparisonState, "insufficient_evidence");
assert.equal(
  chain.partialHeadPrefix.reason,
  "exact_repository_owner_and_full_head_not_observable",
);
assert.equal(chain.fullHead.targetComparisonState, "insufficient_evidence");
assert.equal(chain.fullHead.reason, "exact_repository_owner_not_observable");
assert.equal(chain.fullHead.fieldComparisons.headCommitFull, "matched");
assert.equal(
  chain.fullHead.fieldComparisons.repositoryOwner,
  "not_observable_by_bound_source_contract",
);
assert.equal(chain.originIdentity.targetComparisonState, "matched");
assert.equal(
  chain.originIdentity.reason,
  "exact_fixture_values_match_trusted_delivery_not_established",
);
assert.equal(chain.originIdentity.exactTargetMatchEstablished, true);
assert.equal(
  chain.originIdentity.exactTargetMatchPosture,
  "exact_supplied_fixture_values_only",
);
assert.deepEqual(chain.originIdentity.conflictDimensions, []);
assert.equal(chain.originIdentity.remoteVerificationPosture, "not_performed");
for (const entry of [
  chain.partialHeadPrefix,
  chain.fullHead,
  chain.originIdentity,
]) {
  assert.equal(entry.currentTruthAdmitted, false);
  assert.equal(entry.snapshotPresentation, "withheld");
  assert.equal(entry.presentationState, "degraded");
  assert.equal(entry.canonicalOutcome, "insufficient_evidence");
  assert.equal(entry.authority, "none");
}

// ---------------------------------------------------------------------------
// Delivery admission: all eight receiver checks unsatisfied, canonical order.
// ---------------------------------------------------------------------------

assert.equal(record.deliveryAdmission.admissionState, "insufficient_evidence");
assert.equal(record.deliveryAdmission.reason, "receiver_proof_incomplete");
assert.deepEqual(record.deliveryAdmission.satisfiedChecks, []);
assert.deepEqual(record.deliveryAdmission.unsatisfiedChecks, [
  "exact_direct_child_process_ownership",
  "exact_stage39a_server_identity",
  "mcp_initialization_completed",
  "exact_four_readonly_tool_inventory",
  "startup_target_digest_matched",
  "structured_content_separated_from_operator_input",
  "receiver_channel_precedence_verified",
  "live_tool_invocation_observed",
]);
assert.equal(record.deliveryAdmission.producerAuthorityAcceptedAsProof, false);
assert.equal(record.deliveryAdmission.productionProofEstablished, false);
assert.equal(record.deliveryAdmission.currentTruthAdmitted, false);
assert.equal(record.deliveryAdmission.snapshotPresentation, "withheld");
assert.equal(record.deliveryAdmission.canonicalOutcome, "insufficient_evidence");
assert.equal(record.deliveryAdmission.runtimeActivationPosture, "not_included");
assert.equal(record.deliveryAdmission.authority, "none");

// ---------------------------------------------------------------------------
// Denial posture and receipt bounds.
// ---------------------------------------------------------------------------

assert.deepEqual(record.denialPosture, {
  rendererFailurePosture: "fail_closed_all_values_unavailable",
  fallbackRenderingForbidden: true,
  mutationPerformed: false,
  runtimeActivationPosture: "not_included",
  authority: "none",
});
assert.deepEqual(record.sanitizedReceiptReference, {
  receiptRef: "receipt:fixture:stage-c:bridge-repo-status-observation-001",
  receiptRefPosture: "opaque_fixture_identity_not_canonical_receipt_id_format",
  receiptBodyPresentation: "not_present",
  verificationPosture: "not_performed",
  acceptancePosture: "not_established",
  authority: "none",
});

// ---------------------------------------------------------------------------
// Freezing and JSON safety (textContent rendering never sees live objects).
// ---------------------------------------------------------------------------

assert.equal(Object.isFrozen(record), true);
assert.equal(Object.isFrozen(record.sourceBinding), true);
assert.equal(Object.isFrozen(record.freshness), true);
assert.equal(Object.isFrozen(record.targetComparisonChain), true);
assert.equal(Object.isFrozen(record.targetComparisonChain.expectedTarget), true);
assert.equal(
  Object.isFrozen(record.targetComparisonChain.originIdentity.fieldComparisons),
  true,
);
assert.equal(Object.isFrozen(record.deliveryAdmission), true);
assert.equal(Object.isFrozen(record.deliveryAdmission.unsatisfiedChecks), true);
assert.equal(Object.isFrozen(record.denialPosture), true);
assert.equal(Object.isFrozen(record.sanitizedReceiptReference), true);

assert.deepStrictEqual(
  JSON.parse(JSON.stringify(record)),
  JSON.parse(JSON.stringify(recomputed)),
);

// ---------------------------------------------------------------------------
// Artifact hygiene: the committed bundle and provenance stamp.
// ---------------------------------------------------------------------------

const bundleText = await readFile(
  new URL("../ui/generated/pond-stage-c-fixture.js", import.meta.url),
  "utf8",
);
assert.equal(bundleText.includes("console."), false);
assert.equal(bundleText.endsWith("\n"), true);
assert.equal(bundleText.endsWith("\n\n"), false);
assert.equal(/[ \t]+$/m.test(bundleText), false);

const provenance = JSON.parse(
  await readFile(
    new URL(
      "../ui/generated/pond-stage-c-fixture-provenance.json",
      import.meta.url,
    ),
    "utf8",
  ),
);
assert.equal(provenance.authority, "none");
assert.equal(provenance.mutationPosture, "none_read_only");
assert.equal(provenance.runtimeActivationPosture, "not_included");
assert.equal(provenance.bundler.name, "esbuild");
assert.deepEqual(provenance.renderedStages, [
  "C-P1",
  "C-P5",
  "C-P6",
  "C-P7",
  "C-P8",
  "C-P9",
]);
for (const contractVersion of [
  "pond-read-only-repository-target-c-p1",
  "pond-bridge-repo-status-observation-age-c-p5",
  "pond-bridge-repo-status-target-comparison-c-p6",
  "pond-bridge-repo-status-full-head-target-comparison-c-p7",
  "pond-bridge-repo-status-origin-identity-target-comparison-c-p8",
  "pond-bridge-stage39a-repo-status-source-binding-c-p9",
  "pond-bridge-stdio-delivery-admission-c-p9",
  "pond-stage-c-cockpit-record-c-p10",
]) {
  assert.equal(
    provenance.contractVersions.includes(contractVersion),
    true,
    `provenance missing ${contractVersion}`,
  );
}

console.log("POND_STAGE_CP10_COCKPIT_FIXTURE_SELFTEST_PASS");