var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/fixtures/stage-b1-host-neutral-state.ts
var principalRef = /* @__PURE__ */ __name((value) => value, "principalRef");
var agentRef = /* @__PURE__ */ __name((value) => value, "agentRef");
var scopeRef = /* @__PURE__ */ __name((value) => value, "scopeRef");
var snapshotRef = /* @__PURE__ */ __name((value) => value, "snapshotRef");
var eventRef = /* @__PURE__ */ __name((value) => value, "eventRef");
var commandIntentRef = /* @__PURE__ */ __name((value) => value, "commandIntentRef");
var projectionSourceRef = /* @__PURE__ */ __name((value) => value, "projectionSourceRef");
var projectionSubjectRef = /* @__PURE__ */ __name((value) => value, "projectionSubjectRef");
var principalA = principalRef("fixture:principal-a");
var projectX = scopeRef("fixture:scope-project-x");
var specialistAgent = agentRef("fixture:agent-specialist-a");
var sourceRef = projectionSourceRef("fixture:stage-b1-source");
var noEvidence = [];
var freshEnvelope = /* @__PURE__ */ __name((subjectRef, revision, digest) => {
  const envelope = {
    contractVersion: "pond-projection-envelope-a4",
    authority: "none",
    sourceClass: "fixture",
    sourceRef,
    projectionMechanism: "fixture",
    trustPosture: "non_authoritative_fixture",
    sourceScopeRef: projectX,
    audiencePosture: "not_established",
    disclosurePosture: "fixture_only_no_release_established",
    subject: {
      subjectRef,
      subjectRevision: revision,
      subjectDigest: digest,
      digestPosture: "fixture_identity_value_not_runtime_proof",
      bindingComparison: "not_performed_fixture_only"
    },
    observation: {
      state: "fresh",
      observedAt: "2026-01-15T12:00:00.000Z",
      freshUntil: "2026-01-15T12:05:00.000Z",
      freshnessBasis: "fixture_declared_interval"
    },
    applicability: "applicable",
    evidenceReferences: noEvidence,
    redactionPosture: "none",
    canonicalOutcome: null
  };
  return envelope;
}, "freshEnvelope");
var presentation = {
  hostBinding: "none_host_neutral",
  sourceScopePosture: "preserved_from_projection",
  audienceChangePosture: "not_performed",
  crossScopeReleasePosture: "not_performed",
  authority: "none"
};
var stageB1Snapshot = {
  contractVersion: "pond-host-neutral-state-b1",
  kind: "snapshot",
  snapshotRef: snapshotRef("fixture:snapshot-b1-001"),
  activeContext: {
    principalRef: principalA,
    scopeRef: projectX,
    scopeKind: "project",
    agentRef: specialistAgent,
    posture: "fixture_active_context_reference_only",
    authority: "none"
  },
  presentation,
  projection: freshEnvelope(
    projectionSubjectRef("fixture:subject-b1-snapshot"),
    "fixture-b1-snapshot-r1",
    "fixture-digest:b1-snapshot-r1"
  ),
  gates: {
    liveTools: false,
    network: false,
    persistence: false,
    delivery: false,
    approvalRecording: false,
    execution: false
  },
  authority: "none"
};
var stageB1Events = [
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "event",
    eventRef: eventRef("fixture:event-b1-snapshot-presented"),
    snapshotRef: stageB1Snapshot.snapshotRef,
    eventClass: "fixture_snapshot_presented",
    scopeRef: projectX,
    agentRef: specialistAgent,
    posture: "fixture_presentation_event_not_runtime_event",
    presentation,
    projection: freshEnvelope(
      projectionSubjectRef("fixture:subject-b1-event-snapshot"),
      "fixture-b1-event-snapshot-r1",
      "fixture-digest:b1-event-snapshot-r1"
    ),
    authority: "none"
  },
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "event",
    eventRef: eventRef("fixture:event-b1-scope-presented"),
    snapshotRef: stageB1Snapshot.snapshotRef,
    eventClass: "fixture_scope_context_presented",
    scopeRef: projectX,
    agentRef: specialistAgent,
    posture: "fixture_presentation_event_not_runtime_event",
    presentation,
    projection: freshEnvelope(
      projectionSubjectRef("fixture:subject-b1-event-scope"),
      "fixture-b1-event-scope-r1",
      "fixture-digest:b1-event-scope-r1"
    ),
    authority: "none"
  },
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "event",
    eventRef: eventRef("fixture:event-b1-agent-presented"),
    snapshotRef: stageB1Snapshot.snapshotRef,
    eventClass: "fixture_agent_identity_presented",
    scopeRef: projectX,
    agentRef: specialistAgent,
    posture: "fixture_presentation_event_not_runtime_event",
    presentation,
    projection: freshEnvelope(
      projectionSubjectRef("fixture:subject-b1-event-agent"),
      "fixture-b1-event-agent-r1",
      "fixture-digest:b1-event-agent-r1"
    ),
    authority: "none"
  }
];
var stageB1CommandIntents = [
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "command_intent",
    commandIntentRef: commandIntentRef("fixture:intent-b1-navigate-home"),
    sourceSnapshotRef: stageB1Snapshot.snapshotRef,
    principalRef: principalA,
    sourceScopeRef: projectX,
    intentClass: "navigate",
    target: {
      kind: "view",
      viewRef: "pond.home"
    },
    posture: "ui_intent_only_not_command_dispatch",
    dispatchPosture: "not_performed",
    deliveryPosture: "not_performed",
    approvalRecordingPosture: "not_performed",
    executionPosture: "not_performed",
    authority: "none"
  },
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "command_intent",
    commandIntentRef: commandIntentRef("fixture:intent-b1-navigate-world"),
    sourceSnapshotRef: stageB1Snapshot.snapshotRef,
    principalRef: principalA,
    sourceScopeRef: projectX,
    intentClass: "navigate",
    target: {
      kind: "view",
      viewRef: "pond.world"
    },
    posture: "ui_intent_only_not_command_dispatch",
    dispatchPosture: "not_performed",
    deliveryPosture: "not_performed",
    approvalRecordingPosture: "not_performed",
    executionPosture: "not_performed",
    authority: "none"
  },
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "command_intent",
    commandIntentRef: commandIntentRef("fixture:intent-b1-select-scope"),
    sourceSnapshotRef: stageB1Snapshot.snapshotRef,
    principalRef: principalA,
    sourceScopeRef: projectX,
    intentClass: "select_scope",
    target: {
      kind: "scope",
      scopeRef: projectX
    },
    posture: "ui_intent_only_not_command_dispatch",
    dispatchPosture: "not_performed",
    deliveryPosture: "not_performed",
    approvalRecordingPosture: "not_performed",
    executionPosture: "not_performed",
    authority: "none"
  },
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "command_intent",
    commandIntentRef: commandIntentRef("fixture:intent-b1-select-agent"),
    sourceSnapshotRef: stageB1Snapshot.snapshotRef,
    principalRef: principalA,
    sourceScopeRef: projectX,
    intentClass: "select_agent",
    target: {
      kind: "agent",
      agentRef: specialistAgent
    },
    posture: "ui_intent_only_not_command_dispatch",
    dispatchPosture: "not_performed",
    deliveryPosture: "not_performed",
    approvalRecordingPosture: "not_performed",
    executionPosture: "not_performed",
    authority: "none"
  }
];

// src/fixtures/stage-c-p0-source-responsibility.ts
var sourceResponsibilityBase = {
  contractVersion: "pond-read-only-truth-source-responsibility-c-p0",
  semanticOwner: "canonical_architecture",
  responsibilityPosture: "canonical_logical_allocation_not_concrete_runtime_source",
  pondRole: "consumer_presenter_only",
  concreteSourceIdentityPosture: "not_bound",
  storageOwnerPosture: "not_selected_by_canonical_architecture",
  apiProtocolPosture: "not_selected",
  trustedChannelPosture: "not_established",
  freshnessObservationPosture: "not_performed",
  runtimeIntegrationPosture: "not_included",
  authority: "none"
};
var stageCP0GovernanceEligibilityResponsibility = {
  ...sourceResponsibilityBase,
  concern: "current_governance_eligibility_evaluation",
  runtimeResponsibility: "mirror_core"
};
var stageCP0WorkspaceTargetResponsibility = {
  ...sourceResponsibilityBase,
  concern: "workspace_repository_target_resolution",
  runtimeResponsibility: "mirror_desktop_bridge"
};
var stageCP0RepositoryEvidenceResponsibility = {
  ...sourceResponsibilityBase,
  concern: "repository_analysis_and_source_evidence",
  runtimeResponsibility: "toadaid_coder"
};
var stageCP0ReceiptCaptureResponsibility = {
  ...sourceResponsibilityBase,
  concern: "receipt_evidence_capture_and_forwarding",
  runtimeResponsibility: "mirror_desktop_bridge"
};

// src/fixtures/stage-c-p1-read-only-repository-target.ts
var repositoryHeadCommit = /* @__PURE__ */ __name((value) => value, "repositoryHeadCommit");
var stageCP1ReadOnlyRepositoryTarget = {
  contractVersion: "pond-read-only-repository-target-c-p1",
  repository: {
    owner: "ToadAid",
    name: "toadaid-app",
    identityPosture: "fixture_exact_owner_name_not_remote_verified"
  },
  branch: {
    name: "main",
    bindingPosture: "fixture_branch_name_not_live_resolved"
  },
  head: {
    commit: repositoryHeadCommit(
      "adda2fc7807a504b5621c18a3aa84ce8f3004440"
    ),
    bindingPosture: "fixture_parent_commit_not_live_head"
  },
  path: {
    pathClass: "repository_root",
    repositoryRelativePath: ".",
    bindingPosture: "fixture_exact_repository_root"
  },
  operationClass: "read",
  operationPosture: "identity_only_not_performed",
  projectScopeBinding: {
    scopeRef: stageB1Snapshot.activeContext.scopeRef,
    posture: "fixture_explicit_association_not_membership_ownership_or_authority"
  },
  sourceResponsibility: stageCP0WorkspaceTargetResponsibility,
  targetPosture: "fixture_identity_only_not_grant_or_authoritative_runtime_target",
  authority: "none"
};

// src/contracts/pond-bridge-repo-status-observation-age.ts
var validEpochMilliseconds = /* @__PURE__ */ __name((value) => Number.isSafeInteger(value) && Number(value) >= 0, "validEpochMilliseconds");
var validMaximumAge = /* @__PURE__ */ __name((value) => Number.isSafeInteger(value) && Number(value) >= 0, "validMaximumAge");
var exactObservationMetadata = /* @__PURE__ */ __name((value) => {
  if (value === null || typeof value !== "object") return false;
  const metadata = value;
  return validEpochMilliseconds(metadata.observed_at_epoch_ms) && metadata.freshness_basis === "source_observation_time_only" && metadata.currentness_posture === "not_established_consumer_must_evaluate";
}, "exactObservationMetadata");
var baseAssessment = Object.freeze({
  contractVersion: "pond-bridge-repo-status-observation-age-c-p5",
  metadataSchemaContractVersion: "pond-bridge-repo-status-observation-source-binding-c-p4",
  sourceBindingComparisonPosture: "not_performed_fixture_dependency_only",
  assessmentKind: "deterministic_fixture_observation_age",
  currentTruthAdmitted: false,
  snapshotPresentation: "withheld",
  presentationState: "degraded",
  targetComparisonPosture: "not_performed",
  trustedChannelPosture: "not_established",
  canonicalOutcome: "insufficient_evidence",
  authority: "none"
});
var unknownAssessment = /* @__PURE__ */ __name((reason, observedAtEpochMs, evaluatedAtEpochMs2, maximumAgeMs) => Object.freeze({
  ...baseAssessment,
  observationAgeState: "unknown",
  reason,
  observedAtEpochMs,
  evaluatedAtEpochMs: evaluatedAtEpochMs2,
  maximumAgeMs,
  observationAgeMs: null,
  freshnessBasis: "comparison_not_performed_invalid_input"
}), "unknownAssessment");
function classifyPondBridgeRepoStatusObservationAge(input) {
  const evaluatedAtEpochMs2 = validEpochMilliseconds(input.evaluatedAtEpochMs) ? input.evaluatedAtEpochMs : null;
  const maximumAgeMs = validMaximumAge(input.maximumAgeMs) ? input.maximumAgeMs : null;
  if (!exactObservationMetadata(input.observationMetadata)) {
    return unknownAssessment(
      "observation_metadata_missing_or_invalid",
      null,
      evaluatedAtEpochMs2,
      maximumAgeMs
    );
  }
  const observedAtEpochMs = input.observationMetadata.observed_at_epoch_ms;
  if (evaluatedAtEpochMs2 === null) {
    return unknownAssessment(
      "evaluation_time_invalid",
      observedAtEpochMs,
      null,
      maximumAgeMs
    );
  }
  if (maximumAgeMs === null) {
    return unknownAssessment(
      "maximum_age_invalid",
      observedAtEpochMs,
      evaluatedAtEpochMs2,
      null
    );
  }
  if (observedAtEpochMs > evaluatedAtEpochMs2) {
    return unknownAssessment(
      "observation_time_in_future",
      observedAtEpochMs,
      evaluatedAtEpochMs2,
      maximumAgeMs
    );
  }
  const observationAgeMs = evaluatedAtEpochMs2 - observedAtEpochMs;
  const fresh = observationAgeMs <= maximumAgeMs;
  return Object.freeze({
    ...baseAssessment,
    observationAgeState: fresh ? "fresh" : "stale",
    reason: fresh ? "within_declared_maximum_age" : "declared_maximum_age_expired",
    observedAtEpochMs,
    evaluatedAtEpochMs: evaluatedAtEpochMs2,
    maximumAgeMs,
    observationAgeMs,
    freshnessBasis: "source_observation_time_compared_to_fixture_declared_maximum_age"
  });
}
__name(classifyPondBridgeRepoStatusObservationAge, "classifyPondBridgeRepoStatusObservationAge");

// src/contracts/pond-bridge-repo-status-target-comparison.ts
var baseAssessment2 = Object.freeze({
  contractVersion: "pond-bridge-repo-status-target-comparison-c-p6",
  targetSchemaContractVersion: "pond-read-only-repository-target-c-p1",
  ageAssessmentContractVersion: "pond-bridge-repo-status-observation-age-c-p5",
  comparisonKind: "deterministic_fixture_sanitized_projected_field_comparison",
  sourceBindingComparisonPosture: "not_performed_fixture_dependency_only",
  canonicalConflictEstablished: false,
  exactTargetMatchEstablished: false,
  currentTruthAdmitted: false,
  snapshotPresentation: "withheld",
  presentationState: "degraded",
  trustedChannelPosture: "not_established",
  canonicalOutcome: "insufficient_evidence",
  authority: "none"
});
var record = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var boundedText = /* @__PURE__ */ __name((value, maximumLength) => typeof value === "string" && value.length > 0 && value.length <= maximumLength && value === value.trim() && !/[\u0000-\u001f\u007f]/.test(value), "boundedText");
var fullCommit = /* @__PURE__ */ __name((value) => typeof value === "string" && /^[0-9a-f]{40}$/.test(value), "fullCommit");
var shortCommit = /* @__PURE__ */ __name((value) => typeof value === "string" && /^[0-9a-f]{7,40}$/.test(value), "shortCommit");
var nonNegativeSafeInteger = /* @__PURE__ */ __name((value) => Number.isSafeInteger(value) && Number(value) >= 0, "nonNegativeSafeInteger");
var freshAgeAssessment = /* @__PURE__ */ __name((value) => {
  const candidate = record(value);
  return candidate !== null && candidate.contractVersion === "pond-bridge-repo-status-observation-age-c-p5" && candidate.metadataSchemaContractVersion === "pond-bridge-repo-status-observation-source-binding-c-p4" && candidate.assessmentKind === "deterministic_fixture_observation_age" && candidate.observationAgeState === "fresh" && candidate.reason === "within_declared_maximum_age" && nonNegativeSafeInteger(candidate.observedAtEpochMs) && nonNegativeSafeInteger(candidate.evaluatedAtEpochMs) && nonNegativeSafeInteger(candidate.maximumAgeMs) && nonNegativeSafeInteger(candidate.observationAgeMs) && candidate.observedAtEpochMs <= candidate.evaluatedAtEpochMs && candidate.observationAgeMs === candidate.evaluatedAtEpochMs - candidate.observedAtEpochMs && candidate.observationAgeMs <= candidate.maximumAgeMs && candidate.freshnessBasis === "source_observation_time_compared_to_fixture_declared_maximum_age" && candidate.currentTruthAdmitted === false && candidate.snapshotPresentation === "withheld" && candidate.presentationState === "degraded" && candidate.sourceBindingComparisonPosture === "not_performed_fixture_dependency_only" && candidate.targetComparisonPosture === "not_performed" && candidate.trustedChannelPosture === "not_established" && candidate.canonicalOutcome === "insufficient_evidence" && candidate.authority === "none";
}, "freshAgeAssessment");
var validExpectedTarget = /* @__PURE__ */ __name((value) => {
  const target = record(value);
  const repository = record(target?.repository);
  const branch = record(target?.branch);
  const head = record(target?.head);
  const path = record(target?.path);
  if (target?.contractVersion !== "pond-read-only-repository-target-c-p1" || !boundedText(repository?.owner, 160) || !boundedText(repository?.name, 160) || repository?.identityPosture !== "fixture_exact_owner_name_not_remote_verified" || !boundedText(branch?.name, 160) || branch?.bindingPosture !== "fixture_branch_name_not_live_resolved" || !fullCommit(head?.commit) || head?.bindingPosture !== "fixture_parent_commit_not_live_head" || path?.pathClass !== "repository_root" || path?.repositoryRelativePath !== "." || path?.bindingPosture !== "fixture_exact_repository_root" || target?.operationClass !== "read" || target?.operationPosture !== "identity_only_not_performed" || target?.targetPosture !== "fixture_identity_only_not_grant_or_authoritative_runtime_target" || target?.authority !== "none") {
    return null;
  }
  return Object.freeze({
    repositoryOwner: repository.owner,
    repositoryName: repository.name,
    branchName: branch.name,
    headCommit: head.commit
  });
}, "validExpectedTarget");
var validSnapshotCandidate = /* @__PURE__ */ __name((value) => {
  const candidate = record(value);
  if (candidate === null || !boundedText(candidate.repo_root_label, 160) || !boundedText(candidate.branch_name, 160) || !shortCommit(candidate.head_sha_short)) {
    return null;
  }
  return Object.freeze({
    repoRootLabel: candidate.repo_root_label,
    branchName: candidate.branch_name,
    headShaShort: candidate.head_sha_short
  });
}, "validSnapshotCandidate");
var notPerformed = /* @__PURE__ */ __name((reason) => Object.freeze({
  ...baseAssessment2,
  comparisonPerformed: false,
  targetComparisonState: "insufficient_evidence",
  reason,
  comparisonEvidence: null,
  conflictDimensions: Object.freeze([])
}), "notPerformed");
function comparePondBridgeRepoStatusTarget(input) {
  if (!freshAgeAssessment(input.ageAssessment)) {
    return notPerformed("observation_age_not_fresh");
  }
  const expected = validExpectedTarget(input.expectedTarget);
  if (expected === null) return notPerformed("expected_target_invalid");
  const projected = validSnapshotCandidate(input.snapshotCandidate);
  if (projected === null) return notPerformed("snapshot_candidate_invalid");
  const repositoryNameFromRootLabel = projected.repoRootLabel === expected.repositoryName ? "matched" : "conflicting";
  const branchName = projected.branchName === expected.branchName ? "matched" : "conflicting";
  const headCommitPrefix = expected.headCommit.startsWith(projected.headShaShort) ? "matched" : "conflicting";
  const conflictDimensions = [];
  if (repositoryNameFromRootLabel === "conflicting")
    conflictDimensions.push("repository_name_from_root_label");
  if (branchName === "conflicting") conflictDimensions.push("branch_name");
  if (headCommitPrefix === "conflicting")
    conflictDimensions.push("head_commit_prefix");
  const comparisonEvidence = Object.freeze({
    expected: Object.freeze({
      repositoryOwner: expected.repositoryOwner,
      repositoryName: expected.repositoryName,
      branchName: expected.branchName,
      headCommit: expected.headCommit,
      pathClass: "repository_root"
    }),
    projected: Object.freeze({
      repoRootLabel: projected.repoRootLabel,
      branchName: projected.branchName,
      headShaShort: projected.headShaShort,
      repositoryOwner: null,
      headCommitFull: null
    }),
    fieldComparisons: Object.freeze({
      repositoryNameFromRootLabel,
      branchName,
      headCommitPrefix,
      repositoryOwner: "not_observable_by_bound_source_contract",
      headCommitFull: "not_observable_by_bound_source_contract"
    }),
    repoRootLabelComparisonPosture: "sanitized_basename_candidate_not_repository_identity_proof",
    headPrefixComparisonPosture: "short_sha_candidate_not_full_commit_identity_proof"
  });
  const conflicting = conflictDimensions.length > 0;
  return Object.freeze({
    ...baseAssessment2,
    comparisonPerformed: true,
    targetComparisonState: conflicting ? "conflicting" : "insufficient_evidence",
    reason: conflicting ? "projected_fields_conflict" : "exact_repository_owner_and_full_head_not_observable",
    comparisonEvidence,
    conflictDimensions: Object.freeze(conflictDimensions)
  });
}
__name(comparePondBridgeRepoStatusTarget, "comparePondBridgeRepoStatusTarget");

// src/fixtures/stage-c-p6-bridge-repo-status-target-comparison.ts
var evaluatedAtEpochMs = 180000006e4;
var stageCP6FreshObservationAge = classifyPondBridgeRepoStatusObservationAge({
  observationMetadata: {
    observed_at_epoch_ms: evaluatedAtEpochMs - 3e4,
    freshness_basis: "source_observation_time_only",
    currentness_posture: "not_established_consumer_must_evaluate"
  },
  evaluatedAtEpochMs,
  maximumAgeMs: 6e4
});
var stageCP6PartialTargetComparison = comparePondBridgeRepoStatusTarget({
  expectedTarget: stageCP1ReadOnlyRepositoryTarget,
  snapshotCandidate: {
    repo_root_label: "toadaid-app",
    branch_name: "main",
    head_sha_short: "adda2fc"
  },
  ageAssessment: stageCP6FreshObservationAge
});

// src/contracts/pond-bridge-repo-status-full-head-target-comparison.ts
var baseAssessment3 = Object.freeze({
  contractVersion: "pond-bridge-repo-status-full-head-target-comparison-c-p7",
  sourceBindingContractVersion: "pond-bridge-repo-status-full-head-source-binding-c-p7",
  targetSchemaContractVersion: "pond-read-only-repository-target-c-p1",
  ageAssessmentContractVersion: "pond-bridge-repo-status-observation-age-c-p5",
  comparisonKind: "deterministic_fixture_sanitized_full_head_comparison",
  canonicalConflictEstablished: false,
  exactTargetMatchEstablished: false,
  currentTruthAdmitted: false,
  snapshotPresentation: "withheld",
  presentationState: "degraded",
  trustedChannelPosture: "not_established",
  canonicalOutcome: "insufficient_evidence",
  authority: "none"
});
var record2 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var boundedText2 = /* @__PURE__ */ __name((value, maximumLength) => typeof value === "string" && value.length > 0 && value.length <= maximumLength && value === value.trim() && !/[\u0000-\u001f\u007f]/.test(value), "boundedText");
var fullCommit2 = /* @__PURE__ */ __name((value) => typeof value === "string" && /^[0-9a-f]{40}$/.test(value), "fullCommit");
var shortCommit2 = /* @__PURE__ */ __name((value) => typeof value === "string" && /^[0-9a-f]{7,40}$/.test(value), "shortCommit");
var nonNegativeSafeInteger2 = /* @__PURE__ */ __name((value) => Number.isSafeInteger(value) && Number(value) >= 0, "nonNegativeSafeInteger");
var exactStringArray = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactStringArray");
var validSourceBinding = /* @__PURE__ */ __name((value) => {
  const candidate = record2(value);
  const superseded = record2(candidate?.supersededBinding);
  const responsibility = record2(candidate?.responsibilityBasis);
  const source = record2(candidate?.sourceIdentity);
  const observationMetadata = record2(candidate?.observationMetadataContract);
  const fullHead2 = record2(candidate?.fullHeadContract);
  return candidate?.contractVersion === "pond-bridge-repo-status-full-head-source-binding-c-p7" && superseded?.contractVersion === "pond-bridge-repo-status-observation-source-binding-c-p4" && superseded.sourceCommit === "dfc9b59084e36324b1d97c0e8f9f1f72441970d7" && superseded.reason === "source_contract_added_validated_full_head" && responsibility?.concern === "workspace_repository_target_resolution" && responsibility.runtimeResponsibility === "mirror_desktop_bridge" && source?.repositoryOwner === "ToadAid" && source.repositoryName === "mirror-desktop-bridge" && source.branch === "main" && source.commit === "c9be94541406571eaea034aa61678e912f088cb8" && source.modulePath === "src/liveReadOnlyRepoStatusAdapterIntegration.ts" && source.resultType === "LiveRepoStatusIntegrationResult" && source.snapshotType === "IntegratedRepoStatusAdapterSnapshot" && source.stage === "stage_1i_live_readonly_repo_status_adapter_integration" && source.mode === "gated_live_client_adapter_integration" && source.integrationId === "integration.live-repo-status.adapter" && source.bindingPosture === "exact_merged_source_contract_identity" && exactStringArray(candidate.projectedResultFields, [
    "state",
    "safe_to_display",
    "adapter_snapshot",
    "live_client_evidence_reference",
    "redaction_report",
    "truncation_report",
    "receipt_reference",
    "blocked_reasons",
    "blocked_authority_statement"
  ]) && exactStringArray(candidate.projectedSnapshotFields, [
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
    "head_sha_full"
  ]) && observationMetadata?.containerField === "observation_metadata" && observationMetadata.observedAtField === "observed_at_epoch_ms" && observationMetadata.observedAtUnit === "unix_epoch_milliseconds" && observationMetadata.freshnessBasisField === "freshness_basis" && observationMetadata.freshnessBasis === "source_observation_time_only" && observationMetadata.currentnessPostureField === "currentness_posture" && observationMetadata.currentnessPosture === "not_established_consumer_must_evaluate" && fullHead2?.containerField === "adapter_snapshot" && fullHead2.field === "head_sha_full" && fullHead2.format === "lowercase_hex_40" && fullHead2.sourceValidationPosture === "required_fail_closed_before_ready" && candidate.sourceRuntimePosture === "implemented_default_disabled" && candidate.sourceMcpExposurePosture === "disabled" && candidate.sourceObservationPosture === "source_observation_time_present" && candidate.fullHeadObservationPosture === "validated_full_head_present" && candidate.repositoryOwnerObservationPosture === "not_observable_by_bound_source_contract" && candidate.currentTruthPosture === "blocked_pending_exact_repository_owner_and_trusted_channel" && candidate.trustedChannelPosture === "not_established" && candidate.pondTransportPosture === "not_included" && candidate.runtimeIntegrationPosture === "not_included" && candidate.authority === "none";
}, "validSourceBinding");
var freshAgeAssessment2 = /* @__PURE__ */ __name((value) => {
  const candidate = record2(value);
  return candidate?.contractVersion === "pond-bridge-repo-status-observation-age-c-p5" && candidate.metadataSchemaContractVersion === "pond-bridge-repo-status-observation-source-binding-c-p4" && candidate.assessmentKind === "deterministic_fixture_observation_age" && candidate.observationAgeState === "fresh" && candidate.reason === "within_declared_maximum_age" && nonNegativeSafeInteger2(candidate.observedAtEpochMs) && nonNegativeSafeInteger2(candidate.evaluatedAtEpochMs) && nonNegativeSafeInteger2(candidate.maximumAgeMs) && nonNegativeSafeInteger2(candidate.observationAgeMs) && candidate.observedAtEpochMs <= candidate.evaluatedAtEpochMs && candidate.observationAgeMs === candidate.evaluatedAtEpochMs - candidate.observedAtEpochMs && candidate.observationAgeMs <= candidate.maximumAgeMs && candidate.freshnessBasis === "source_observation_time_compared_to_fixture_declared_maximum_age" && candidate.currentTruthAdmitted === false && candidate.snapshotPresentation === "withheld" && candidate.trustedChannelPosture === "not_established" && candidate.canonicalOutcome === "insufficient_evidence" && candidate.authority === "none";
}, "freshAgeAssessment");
var validExpectedTarget2 = /* @__PURE__ */ __name((value) => {
  const target = record2(value);
  const repository = record2(target?.repository);
  const branch = record2(target?.branch);
  const head = record2(target?.head);
  const path = record2(target?.path);
  if (target?.contractVersion !== "pond-read-only-repository-target-c-p1" || !boundedText2(repository?.owner, 160) || !boundedText2(repository?.name, 160) || repository.identityPosture !== "fixture_exact_owner_name_not_remote_verified" || !boundedText2(branch?.name, 160) || branch.bindingPosture !== "fixture_branch_name_not_live_resolved" || !fullCommit2(head?.commit) || head.bindingPosture !== "fixture_parent_commit_not_live_head" || path?.pathClass !== "repository_root" || path.repositoryRelativePath !== "." || path.bindingPosture !== "fixture_exact_repository_root" || target?.operationClass !== "read" || target.operationPosture !== "identity_only_not_performed" || target.targetPosture !== "fixture_identity_only_not_grant_or_authoritative_runtime_target" || target.authority !== "none") {
    return null;
  }
  return Object.freeze({
    repositoryOwner: repository.owner,
    repositoryName: repository.name,
    branchName: branch.name,
    headCommit: head.commit
  });
}, "validExpectedTarget");
var validSnapshotCandidate2 = /* @__PURE__ */ __name((value) => {
  const candidate = record2(value);
  if (candidate === null || !boundedText2(candidate.repo_root_label, 160) || !boundedText2(candidate.branch_name, 160) || !shortCommit2(candidate.head_sha_short) || !fullCommit2(candidate.head_sha_full) || !candidate.head_sha_full.startsWith(candidate.head_sha_short)) {
    return null;
  }
  return Object.freeze({
    repoRootLabel: candidate.repo_root_label,
    branchName: candidate.branch_name,
    headShaShort: candidate.head_sha_short,
    headShaFull: candidate.head_sha_full
  });
}, "validSnapshotCandidate");
var notPerformed2 = /* @__PURE__ */ __name((reason) => Object.freeze({
  ...baseAssessment3,
  sourceBindingComparisonPosture: reason === "source_binding_invalid" ? "not_performed_source_binding_invalid" : "exact_fixture_source_binding_validated_no_live_origin_proof",
  comparisonPerformed: false,
  targetComparisonState: "insufficient_evidence",
  reason,
  comparisonEvidence: null,
  conflictDimensions: Object.freeze([])
}), "notPerformed");
function comparePondBridgeRepoStatusFullHeadTarget(input) {
  if (!validSourceBinding(input.sourceBinding)) {
    return notPerformed2("source_binding_invalid");
  }
  if (!freshAgeAssessment2(input.ageAssessment)) {
    return notPerformed2("observation_age_not_fresh");
  }
  const expected = validExpectedTarget2(input.expectedTarget);
  if (expected === null) return notPerformed2("expected_target_invalid");
  const projected = validSnapshotCandidate2(input.snapshotCandidate);
  if (projected === null) return notPerformed2("snapshot_candidate_invalid");
  const repositoryNameFromRootLabel = projected.repoRootLabel === expected.repositoryName ? "matched" : "conflicting";
  const branchName = projected.branchName === expected.branchName ? "matched" : "conflicting";
  const headCommitFull = projected.headShaFull === expected.headCommit ? "matched" : "conflicting";
  const conflictDimensions = [];
  if (repositoryNameFromRootLabel === "conflicting")
    conflictDimensions.push("repository_name_from_root_label");
  if (branchName === "conflicting") conflictDimensions.push("branch_name");
  if (headCommitFull === "conflicting")
    conflictDimensions.push("head_commit_full");
  const comparisonEvidence = Object.freeze({
    source: Object.freeze({
      repositoryOwner: "ToadAid",
      repositoryName: "mirror-desktop-bridge",
      branch: "main",
      commit: "c9be94541406571eaea034aa61678e912f088cb8",
      projectedFullHeadField: "head_sha_full"
    }),
    expected: Object.freeze({
      repositoryOwner: expected.repositoryOwner,
      repositoryName: expected.repositoryName,
      branchName: expected.branchName,
      headCommit: expected.headCommit,
      pathClass: "repository_root"
    }),
    projected: Object.freeze({
      repoRootLabel: projected.repoRootLabel,
      branchName: projected.branchName,
      headShaShort: projected.headShaShort,
      headShaFull: projected.headShaFull,
      repositoryOwner: null
    }),
    fieldComparisons: Object.freeze({
      repositoryNameFromRootLabel,
      branchName,
      headCommitFull,
      repositoryOwner: "not_observable_by_bound_source_contract"
    }),
    repoRootLabelComparisonPosture: "sanitized_basename_candidate_not_repository_identity_proof",
    fullHeadComparisonPosture: "exact_40_hex_value_compared_fixture_only"
  });
  const conflicting = conflictDimensions.length > 0;
  return Object.freeze({
    ...baseAssessment3,
    sourceBindingComparisonPosture: "exact_fixture_source_binding_validated_no_live_origin_proof",
    comparisonPerformed: true,
    targetComparisonState: conflicting ? "conflicting" : "insufficient_evidence",
    reason: conflicting ? "projected_fields_conflict" : "exact_repository_owner_not_observable",
    comparisonEvidence,
    conflictDimensions: Object.freeze(conflictDimensions)
  });
}
__name(comparePondBridgeRepoStatusFullHeadTarget, "comparePondBridgeRepoStatusFullHeadTarget");

// src/fixtures/stage-c-p2-bridge-repo-status-source-binding.ts
var stageCP2BridgeRepoStatusSourceBinding = {
  contractVersion: "pond-bridge-repo-status-source-binding-c-p2",
  responsibilityBasis: {
    concern: stageCP0WorkspaceTargetResponsibility.concern,
    runtimeResponsibility: stageCP0WorkspaceTargetResponsibility.runtimeResponsibility
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
    bindingPosture: "exact_merged_source_contract_identity"
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
    "blocked_authority_statement"
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
    "prompt_injection_boundary"
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
  authority: "none"
};

// src/fixtures/stage-c-p4-bridge-repo-status-observation-source-binding.ts
var stageCP4BridgeRepoStatusObservationSourceBinding = {
  contractVersion: "pond-bridge-repo-status-observation-source-binding-c-p4",
  supersededBinding: {
    contractVersion: stageCP2BridgeRepoStatusSourceBinding.contractVersion,
    sourceCommit: stageCP2BridgeRepoStatusSourceBinding.sourceIdentity.commit,
    reason: "source_contract_added_observation_metadata"
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
    bindingPosture: "exact_merged_source_contract_identity"
  },
  projectedResultFields: stageCP2BridgeRepoStatusSourceBinding.projectedResultFields,
  projectedSnapshotFields: [
    ...stageCP2BridgeRepoStatusSourceBinding.projectedSnapshotFields,
    "observation_metadata"
  ],
  observationMetadataContract: {
    containerField: "observation_metadata",
    observedAtField: "observed_at_epoch_ms",
    observedAtUnit: "unix_epoch_milliseconds",
    freshnessBasisField: "freshness_basis",
    freshnessBasis: "source_observation_time_only",
    currentnessPostureField: "currentness_posture",
    currentnessPosture: "not_established_consumer_must_evaluate"
  },
  sourceRuntimePosture: "implemented_default_disabled",
  sourceMcpExposurePosture: "disabled",
  boundedStatusLinesPosture: "withheld_from_initial_pond_projection",
  commandReceiptPreviewPosture: "withheld_from_initial_pond_projection",
  sourceObservationPosture: "source_observation_time_present",
  currentTruthPosture: "blocked_pending_pond_freshness_policy_target_comparison_and_trusted_channel",
  trustedChannelPosture: "not_established",
  pondTransportPosture: "not_included",
  runtimeIntegrationPosture: "not_included",
  authority: "none"
};

// src/fixtures/stage-c-p7-bridge-repo-status-full-head-source-binding.ts
var stageCP7BridgeRepoStatusFullHeadSourceBinding = {
  contractVersion: "pond-bridge-repo-status-full-head-source-binding-c-p7",
  supersededBinding: {
    contractVersion: stageCP4BridgeRepoStatusObservationSourceBinding.contractVersion,
    sourceCommit: stageCP4BridgeRepoStatusObservationSourceBinding.sourceIdentity.commit,
    reason: "source_contract_added_validated_full_head"
  },
  responsibilityBasis: stageCP4BridgeRepoStatusObservationSourceBinding.responsibilityBasis,
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
    bindingPosture: "exact_merged_source_contract_identity"
  },
  projectedResultFields: stageCP4BridgeRepoStatusObservationSourceBinding.projectedResultFields,
  projectedSnapshotFields: [
    ...stageCP4BridgeRepoStatusObservationSourceBinding.projectedSnapshotFields,
    "head_sha_full"
  ],
  observationMetadataContract: stageCP4BridgeRepoStatusObservationSourceBinding.observationMetadataContract,
  fullHeadContract: {
    containerField: "adapter_snapshot",
    field: "head_sha_full",
    format: "lowercase_hex_40",
    sourceValidationPosture: "required_fail_closed_before_ready"
  },
  sourceRuntimePosture: "implemented_default_disabled",
  sourceMcpExposurePosture: "disabled",
  sourceObservationPosture: "source_observation_time_present",
  fullHeadObservationPosture: "validated_full_head_present",
  repositoryOwnerObservationPosture: "not_observable_by_bound_source_contract",
  currentTruthPosture: "blocked_pending_exact_repository_owner_and_trusted_channel",
  trustedChannelPosture: "not_established",
  pondTransportPosture: "not_included",
  runtimeIntegrationPosture: "not_included",
  authority: "none"
};

// src/fixtures/stage-c-p7-bridge-repo-status-full-head-target-comparison.ts
var stageCP7FullHeadTargetComparison = comparePondBridgeRepoStatusFullHeadTarget({
  sourceBinding: stageCP7BridgeRepoStatusFullHeadSourceBinding,
  expectedTarget: stageCP1ReadOnlyRepositoryTarget,
  snapshotCandidate: {
    repo_root_label: "toadaid-app",
    branch_name: "main",
    head_sha_short: "adda2fc",
    head_sha_full: "adda2fc7807a504b5621c18a3aa84ce8f3004440"
  },
  ageAssessment: stageCP6FreshObservationAge
});

// src/contracts/pond-bridge-repo-status-origin-identity-target-comparison.ts
var baseAssessment4 = Object.freeze({
  contractVersion: "pond-bridge-repo-status-origin-identity-target-comparison-c-p8",
  sourceBindingContractVersion: "pond-bridge-repo-status-origin-identity-source-binding-c-p8",
  targetSchemaContractVersion: "pond-read-only-repository-target-c-p1",
  ageAssessmentContractVersion: "pond-bridge-repo-status-observation-age-c-p5",
  comparisonKind: "deterministic_fixture_sanitized_origin_identity_full_head_comparison",
  canonicalConflictEstablished: false,
  currentTruthAdmitted: false,
  snapshotPresentation: "withheld",
  presentationState: "degraded",
  remoteVerificationPosture: "not_performed",
  trustedChannelPosture: "not_established",
  canonicalOutcome: "insufficient_evidence",
  authority: "none"
});
var record3 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var boundedText3 = /* @__PURE__ */ __name((value, maximumLength) => typeof value === "string" && value.length > 0 && value.length <= maximumLength && value === value.trim() && !/[\u0000-\u001f\u007f]/.test(value), "boundedText");
var fullCommit3 = /* @__PURE__ */ __name((value) => typeof value === "string" && /^[0-9a-f]{40}$/.test(value), "fullCommit");
var shortCommit3 = /* @__PURE__ */ __name((value) => typeof value === "string" && /^[0-9a-f]{7,40}$/.test(value), "shortCommit");
var nonNegativeSafeInteger3 = /* @__PURE__ */ __name((value) => Number.isSafeInteger(value) && Number(value) >= 0, "nonNegativeSafeInteger");
var exactStringArray2 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactStringArray");
var validSourceBinding2 = /* @__PURE__ */ __name((value) => {
  const candidate = record3(value);
  const superseded = record3(candidate?.supersededBinding);
  const responsibility = record3(candidate?.responsibilityBasis);
  const source = record3(candidate?.sourceIdentity);
  const observationMetadata = record3(candidate?.observationMetadataContract);
  const fullHead2 = record3(candidate?.fullHeadContract);
  const originIdentity2 = record3(candidate?.configuredOriginIdentityContract);
  return candidate?.contractVersion === "pond-bridge-repo-status-origin-identity-source-binding-c-p8" && superseded?.contractVersion === "pond-bridge-repo-status-full-head-source-binding-c-p7" && superseded.sourceCommit === "c9be94541406571eaea034aa61678e912f088cb8" && superseded.reason === "source_contract_added_sanitized_configured_origin_identity" && responsibility?.concern === "workspace_repository_target_resolution" && responsibility.runtimeResponsibility === "mirror_desktop_bridge" && source?.repositoryOwner === "ToadAid" && source.repositoryName === "mirror-desktop-bridge" && source.branch === "main" && source.commit === "56bae7363b18e180cfb5bb95da67803b2f847080" && source.modulePath === "src/liveReadOnlyRepoStatusAdapterIntegration.ts" && source.resultType === "LiveRepoStatusIntegrationResult" && source.snapshotType === "IntegratedRepoStatusAdapterSnapshot" && source.stage === "stage_1i_live_readonly_repo_status_adapter_integration" && source.mode === "gated_live_client_adapter_integration" && source.integrationId === "integration.live-repo-status.adapter" && source.bindingPosture === "exact_merged_source_contract_identity" && exactStringArray2(candidate.projectedResultFields, [
    "state",
    "safe_to_display",
    "adapter_snapshot",
    "live_client_evidence_reference",
    "redaction_report",
    "truncation_report",
    "receipt_reference",
    "blocked_reasons",
    "blocked_authority_statement"
  ]) && exactStringArray2(candidate.projectedSnapshotFields, [
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
    "origin_identity_posture"
  ]) && observationMetadata?.containerField === "observation_metadata" && observationMetadata.observedAtField === "observed_at_epoch_ms" && observationMetadata.observedAtUnit === "unix_epoch_milliseconds" && observationMetadata.freshnessBasisField === "freshness_basis" && observationMetadata.freshnessBasis === "source_observation_time_only" && observationMetadata.currentnessPostureField === "currentness_posture" && observationMetadata.currentnessPosture === "not_established_consumer_must_evaluate" && fullHead2?.containerField === "adapter_snapshot" && fullHead2.field === "head_sha_full" && fullHead2.format === "lowercase_hex_40" && fullHead2.sourceValidationPosture === "required_fail_closed_before_ready" && originIdentity2?.containerField === "adapter_snapshot" && originIdentity2.identityField === "configured_origin_identity" && originIdentity2.postureField === "origin_identity_posture" && originIdentity2.supportedHost === "github.com" && exactStringArray2(originIdentity2.identityFields, [
    "host",
    "owner",
    "name",
    "observation_basis",
    "remote_verification",
    "raw_origin_url_projected",
    "authority"
  ]) && originIdentity2.observationBasis === "parsed_local_git_origin_url" && originIdentity2.remoteVerification === "not_performed" && originIdentity2.rawOriginUrlProjected === false && originIdentity2.sourceValidationPosture === "optional_structurally_validated_before_adapter_projection" && candidate.sourceRuntimePosture === "implemented_default_disabled" && candidate.sourceMcpExposurePosture === "disabled" && candidate.sourceObservationPosture === "source_observation_time_present" && candidate.fullHeadObservationPosture === "validated_full_head_present" && candidate.repositoryIdentityObservationPosture === "configured_origin_identity_observable_not_remote_verified" && candidate.currentTruthPosture === "blocked_pending_trusted_delivery_and_live_origin_proof" && candidate.trustedChannelPosture === "not_established" && candidate.pondTransportPosture === "not_included" && candidate.runtimeIntegrationPosture === "not_included" && candidate.authority === "none";
}, "validSourceBinding");
var freshAgeAssessment3 = /* @__PURE__ */ __name((value) => {
  const candidate = record3(value);
  return candidate?.contractVersion === "pond-bridge-repo-status-observation-age-c-p5" && candidate.metadataSchemaContractVersion === "pond-bridge-repo-status-observation-source-binding-c-p4" && candidate.assessmentKind === "deterministic_fixture_observation_age" && candidate.observationAgeState === "fresh" && candidate.reason === "within_declared_maximum_age" && nonNegativeSafeInteger3(candidate.observedAtEpochMs) && nonNegativeSafeInteger3(candidate.evaluatedAtEpochMs) && nonNegativeSafeInteger3(candidate.maximumAgeMs) && nonNegativeSafeInteger3(candidate.observationAgeMs) && candidate.observedAtEpochMs <= candidate.evaluatedAtEpochMs && candidate.observationAgeMs === candidate.evaluatedAtEpochMs - candidate.observedAtEpochMs && candidate.observationAgeMs <= candidate.maximumAgeMs && candidate.freshnessBasis === "source_observation_time_compared_to_fixture_declared_maximum_age" && candidate.currentTruthAdmitted === false && candidate.snapshotPresentation === "withheld" && candidate.trustedChannelPosture === "not_established" && candidate.canonicalOutcome === "insufficient_evidence" && candidate.authority === "none";
}, "freshAgeAssessment");
var validExpectedTarget3 = /* @__PURE__ */ __name((value) => {
  const target = record3(value);
  const repository = record3(target?.repository);
  const branch = record3(target?.branch);
  const head = record3(target?.head);
  const path = record3(target?.path);
  if (target?.contractVersion !== "pond-read-only-repository-target-c-p1" || !boundedText3(repository?.owner, 160) || !boundedText3(repository?.name, 160) || repository.identityPosture !== "fixture_exact_owner_name_not_remote_verified" || !boundedText3(branch?.name, 160) || branch.bindingPosture !== "fixture_branch_name_not_live_resolved" || !fullCommit3(head?.commit) || head.bindingPosture !== "fixture_parent_commit_not_live_head" || path?.pathClass !== "repository_root" || path.repositoryRelativePath !== "." || path.bindingPosture !== "fixture_exact_repository_root" || target?.operationClass !== "read" || target.operationPosture !== "identity_only_not_performed" || target.targetPosture !== "fixture_identity_only_not_grant_or_authoritative_runtime_target" || target.authority !== "none") {
    return null;
  }
  return Object.freeze({
    repositoryOwner: repository.owner,
    repositoryName: repository.name,
    branchName: branch.name,
    headCommit: head.commit
  });
}, "validExpectedTarget");
var validSnapshotCandidate3 = /* @__PURE__ */ __name((value) => {
  const candidate = record3(value);
  const originIdentity2 = record3(candidate?.configured_origin_identity);
  if (candidate === null || candidate.origin_identity_posture !== "parsed_supported_origin" || !boundedText3(candidate.repo_root_label, 160) || !boundedText3(candidate.branch_name, 160) || !shortCommit3(candidate.head_sha_short) || !fullCommit3(candidate.head_sha_full) || !candidate.head_sha_full.startsWith(candidate.head_sha_short) || originIdentity2?.host !== "github.com" || !boundedText3(originIdentity2.owner, 100) || !/^[A-Za-z0-9_.-]+$/.test(originIdentity2.owner) || !boundedText3(originIdentity2.name, 100) || !/^[A-Za-z0-9_.-]+$/.test(originIdentity2.name) || originIdentity2.observation_basis !== "parsed_local_git_origin_url" || originIdentity2.remote_verification !== "not_performed" || originIdentity2.raw_origin_url_projected !== false || originIdentity2.authority !== "none" || Object.keys(originIdentity2).some(
    (key) => ![
      "host",
      "owner",
      "name",
      "observation_basis",
      "remote_verification",
      "raw_origin_url_projected",
      "authority"
    ].includes(key)
  )) {
    return null;
  }
  return Object.freeze({
    originHost: "github.com",
    repositoryOwner: originIdentity2.owner,
    repositoryName: originIdentity2.name,
    repoRootLabel: candidate.repo_root_label,
    branchName: candidate.branch_name,
    headShaShort: candidate.head_sha_short,
    headShaFull: candidate.head_sha_full
  });
}, "validSnapshotCandidate");
var notPerformed3 = /* @__PURE__ */ __name((reason) => Object.freeze({
  ...baseAssessment4,
  sourceBindingComparisonPosture: reason === "source_binding_invalid" ? "not_performed_source_binding_invalid" : "exact_fixture_source_binding_validated_no_live_origin_or_delivery_proof",
  comparisonPerformed: false,
  targetComparisonState: "insufficient_evidence",
  reason,
  exactTargetMatchEstablished: false,
  exactTargetMatchPosture: "not_established",
  comparisonEvidence: null,
  conflictDimensions: Object.freeze([])
}), "notPerformed");
function comparePondBridgeRepoStatusOriginIdentityTarget(input) {
  if (!validSourceBinding2(input.sourceBinding)) {
    return notPerformed3("source_binding_invalid");
  }
  if (!freshAgeAssessment3(input.ageAssessment)) {
    return notPerformed3("observation_age_not_fresh");
  }
  const expected = validExpectedTarget3(input.expectedTarget);
  if (expected === null) return notPerformed3("expected_target_invalid");
  const projected = validSnapshotCandidate3(input.snapshotCandidate);
  if (projected === null) return notPerformed3("snapshot_candidate_invalid");
  const fieldComparisons = Object.freeze({
    repositoryOwner: projected.repositoryOwner === expected.repositoryOwner ? "matched" : "conflicting",
    repositoryName: projected.repositoryName === expected.repositoryName ? "matched" : "conflicting",
    repositoryNameFromRootLabel: projected.repoRootLabel === expected.repositoryName ? "matched" : "conflicting",
    branchName: projected.branchName === expected.branchName ? "matched" : "conflicting",
    headCommitFull: projected.headShaFull === expected.headCommit ? "matched" : "conflicting"
  });
  const conflictDimensions = [];
  if (fieldComparisons.repositoryOwner === "conflicting")
    conflictDimensions.push("repository_owner");
  if (fieldComparisons.repositoryName === "conflicting")
    conflictDimensions.push("repository_name");
  if (fieldComparisons.repositoryNameFromRootLabel === "conflicting")
    conflictDimensions.push("repository_name_from_root_label");
  if (fieldComparisons.branchName === "conflicting")
    conflictDimensions.push("branch_name");
  if (fieldComparisons.headCommitFull === "conflicting")
    conflictDimensions.push("head_commit_full");
  const comparisonEvidence = Object.freeze({
    source: Object.freeze({
      repositoryOwner: "ToadAid",
      repositoryName: "mirror-desktop-bridge",
      branch: "main",
      commit: "56bae7363b18e180cfb5bb95da67803b2f847080",
      projectedOriginIdentityField: "configured_origin_identity",
      projectedFullHeadField: "head_sha_full"
    }),
    expected: Object.freeze({
      repositoryOwner: expected.repositoryOwner,
      repositoryName: expected.repositoryName,
      branchName: expected.branchName,
      headCommit: expected.headCommit,
      pathClass: "repository_root"
    }),
    projected: Object.freeze({
      originHost: projected.originHost,
      repositoryOwner: projected.repositoryOwner,
      repositoryName: projected.repositoryName,
      repoRootLabel: projected.repoRootLabel,
      branchName: projected.branchName,
      headShaShort: projected.headShaShort,
      headShaFull: projected.headShaFull,
      rawOriginUrlProjected: false
    }),
    fieldComparisons,
    originIdentityComparisonPosture: "configured_origin_values_compared_fixture_only_not_remote_verified",
    repoRootLabelComparisonPosture: "sanitized_basename_corroboration_only_not_repository_identity_proof",
    fullHeadComparisonPosture: "exact_40_hex_value_compared_fixture_only"
  });
  if (conflictDimensions.length > 0) {
    return Object.freeze({
      ...baseAssessment4,
      sourceBindingComparisonPosture: "exact_fixture_source_binding_validated_no_live_origin_or_delivery_proof",
      comparisonPerformed: true,
      targetComparisonState: "conflicting",
      reason: "projected_fields_conflict",
      exactTargetMatchEstablished: false,
      exactTargetMatchPosture: "not_established",
      comparisonEvidence,
      conflictDimensions: Object.freeze(conflictDimensions)
    });
  }
  return Object.freeze({
    ...baseAssessment4,
    sourceBindingComparisonPosture: "exact_fixture_source_binding_validated_no_live_origin_or_delivery_proof",
    comparisonPerformed: true,
    targetComparisonState: "matched",
    reason: "exact_fixture_values_match_trusted_delivery_not_established",
    exactTargetMatchEstablished: true,
    exactTargetMatchPosture: "exact_supplied_fixture_values_only",
    comparisonEvidence,
    conflictDimensions: Object.freeze([])
  });
}
__name(comparePondBridgeRepoStatusOriginIdentityTarget, "comparePondBridgeRepoStatusOriginIdentityTarget");

// src/fixtures/stage-c-p8-bridge-repo-status-origin-identity-source-binding.ts
var stageCP8BridgeRepoStatusOriginIdentitySourceBinding = {
  contractVersion: "pond-bridge-repo-status-origin-identity-source-binding-c-p8",
  supersededBinding: {
    contractVersion: stageCP7BridgeRepoStatusFullHeadSourceBinding.contractVersion,
    sourceCommit: stageCP7BridgeRepoStatusFullHeadSourceBinding.sourceIdentity.commit,
    reason: "source_contract_added_sanitized_configured_origin_identity"
  },
  responsibilityBasis: stageCP7BridgeRepoStatusFullHeadSourceBinding.responsibilityBasis,
  sourceIdentity: {
    ...stageCP7BridgeRepoStatusFullHeadSourceBinding.sourceIdentity,
    commit: "56bae7363b18e180cfb5bb95da67803b2f847080"
  },
  projectedResultFields: stageCP7BridgeRepoStatusFullHeadSourceBinding.projectedResultFields,
  projectedSnapshotFields: [
    ...stageCP7BridgeRepoStatusFullHeadSourceBinding.projectedSnapshotFields,
    "configured_origin_identity",
    "origin_identity_posture"
  ],
  observationMetadataContract: stageCP7BridgeRepoStatusFullHeadSourceBinding.observationMetadataContract,
  fullHeadContract: stageCP7BridgeRepoStatusFullHeadSourceBinding.fullHeadContract,
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
      "authority"
    ],
    observationBasis: "parsed_local_git_origin_url",
    remoteVerification: "not_performed",
    rawOriginUrlProjected: false,
    sourceValidationPosture: "optional_structurally_validated_before_adapter_projection"
  },
  sourceRuntimePosture: "implemented_default_disabled",
  sourceMcpExposurePosture: "disabled",
  sourceObservationPosture: "source_observation_time_present",
  fullHeadObservationPosture: "validated_full_head_present",
  repositoryIdentityObservationPosture: "configured_origin_identity_observable_not_remote_verified",
  currentTruthPosture: "blocked_pending_trusted_delivery_and_live_origin_proof",
  trustedChannelPosture: "not_established",
  pondTransportPosture: "not_included",
  runtimeIntegrationPosture: "not_included",
  authority: "none"
};

// src/fixtures/stage-c-p8-bridge-repo-status-origin-identity-target-comparison.ts
var stageCP8OriginIdentityTargetComparison = comparePondBridgeRepoStatusOriginIdentityTarget({
  sourceBinding: stageCP8BridgeRepoStatusOriginIdentitySourceBinding,
  expectedTarget: stageCP1ReadOnlyRepositoryTarget,
  snapshotCandidate: {
    repo_root_label: "toadaid-app",
    configured_origin_identity: {
      host: "github.com",
      owner: "ToadAid",
      name: "toadaid-app",
      observation_basis: "parsed_local_git_origin_url",
      remote_verification: "not_performed",
      raw_origin_url_projected: false,
      authority: "none"
    },
    origin_identity_posture: "parsed_supported_origin",
    branch_name: "main",
    head_sha_short: "adda2fc",
    head_sha_full: "adda2fc7807a504b5621c18a3aa84ce8f3004440"
  },
  ageAssessment: stageCP6FreshObservationAge
});

// src/fixtures/stage-c-p9-bridge-stage39a-repo-status-source-binding.ts
var stageCP9BridgeStage39ARepoStatusSourceBinding = {
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
    bindingPosture: "exact_merged_source_contract_identity"
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
    "authority_granted"
  ],
  deliveryEvidenceContract: {
    structuralChannel: "mcp_structured_tool_result",
    targetBindingField: "target_identity_sha256",
    producerAuthorityPosture: "not_established_by_producer"
  },
  toolInventoryCount: 4,
  readOnlyToolInventory: [
    "mirror_bridge_status",
    "mirror_repo_status",
    "mirror_repo_tree",
    "mirror_read_text_file"
  ],
  rawOriginUrlProjected: false,
  remoteVerification: "not_performed",
  pondClientRuntimePosture: "not_included",
  authority: "none"
};

// src/contracts/pond-bridge-stdio-delivery-admission.ts
var checks = Object.freeze([
  "exact_direct_child_process_ownership",
  "exact_stage39a_server_identity",
  "mcp_initialization_completed",
  "exact_four_readonly_tool_inventory",
  "startup_target_digest_matched",
  "structured_content_separated_from_operator_input",
  "receiver_channel_precedence_verified",
  "live_tool_invocation_observed"
]);
var record4 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var exactArray = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys = /* @__PURE__ */ __name((value, expected) => exactArray(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var validSourceBinding3 = /* @__PURE__ */ __name((value) => {
  const candidate = record4(value);
  const source = record4(candidate?.sourceIdentity);
  const delivery = record4(candidate?.deliveryEvidenceContract);
  return candidate !== null && source !== null && delivery !== null && exactKeys(candidate, [
    "contractVersion",
    "sourceIdentity",
    "requiredEvidenceFields",
    "deliveryEvidenceContract",
    "toolInventoryCount",
    "readOnlyToolInventory",
    "rawOriginUrlProjected",
    "remoteVerification",
    "pondClientRuntimePosture",
    "authority"
  ]) && exactKeys(source, [
    "repositoryOwner",
    "repositoryName",
    "branch",
    "commit",
    "modulePath",
    "stage",
    "toolName",
    "transport",
    "bindingPosture"
  ]) && exactKeys(delivery, [
    "structuralChannel",
    "targetBindingField",
    "producerAuthorityPosture"
  ]) && candidate?.contractVersion === "pond-bridge-stage39a-repo-status-source-binding-c-p9" && source?.repositoryOwner === "ToadAid" && source.repositoryName === "mirror-desktop-bridge" && source.branch === "main" && source.commit === "595016262507d21aa34997277b9197ce89fda378" && source.modulePath === "src/stage39PortableReadOnlyMcpVisibility.ts" && source.stage === "stage_39a_portable_readonly_mcp_visibility" && source.toolName === "mirror_repo_status" && source.transport === "stdio" && source.bindingPosture === "exact_merged_source_contract_identity" && exactArray(candidate.requiredEvidenceFields, [
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
    "authority_granted"
  ]) && delivery?.structuralChannel === "mcp_structured_tool_result" && delivery.targetBindingField === "target_identity_sha256" && delivery.producerAuthorityPosture === "not_established_by_producer" && candidate.toolInventoryCount === 4 && exactArray(candidate.readOnlyToolInventory, [
    "mirror_bridge_status",
    "mirror_repo_status",
    "mirror_repo_tree",
    "mirror_read_text_file"
  ]) && candidate.rawOriginUrlProjected === false && candidate.remoteVerification === "not_performed" && candidate.pondClientRuntimePosture === "not_included" && candidate.authority === "none";
}, "validSourceBinding");
var validCandidate = /* @__PURE__ */ __name((value) => {
  const candidate = record4(value);
  const receiver = record4(candidate?.receiver_observation);
  if (candidate === null || receiver === null || !exactKeys(candidate, [
    "source_stage",
    "tool_name",
    "transport",
    "structural_channel",
    "target_identity_sha256",
    "producer_channel_authority",
    "receiver_observation"
  ]) || !exactKeys(receiver, [
    "process_ownership",
    "server_identity",
    "initialization",
    "tool_inventory",
    "target_binding",
    "content_channel",
    "precedence",
    "live_invocation"
  ]) || candidate?.source_stage !== "stage_39a_portable_readonly_mcp_visibility" || candidate.tool_name !== "mirror_repo_status" || candidate.transport !== "stdio" || candidate.structural_channel !== "mcp_structured_tool_result" || typeof candidate.target_identity_sha256 !== "string" || !/^[0-9a-f]{64}$/.test(candidate.target_identity_sha256) || candidate.producer_channel_authority !== "not_established_by_producer" || !["not_observed", "exact_direct_child"].includes(String(receiver.process_ownership)) || !["not_observed", "exact_stage39a"].includes(String(receiver.server_identity)) || !["not_observed", "mcp_initialized"].includes(String(receiver.initialization)) || !["not_observed", "exact_four_readonly"].includes(String(receiver.tool_inventory)) || !["not_compared", "exact_digest_match"].includes(String(receiver.target_binding)) || !["not_observed", "structured_content_separate_from_operator_input"].includes(String(receiver.content_channel)) || !["not_verified", "receiver_owned_evidence_channel"].includes(String(receiver.precedence)) || !["not_performed", "observed"].includes(String(receiver.live_invocation))) return null;
  return value;
}, "validCandidate");
var assessment = /* @__PURE__ */ __name((reason, satisfiedChecks, unsatisfiedChecks) => Object.freeze({
  contractVersion: "pond-bridge-stdio-delivery-admission-c-p9",
  sourceBindingContractVersion: "pond-bridge-stage39a-repo-status-source-binding-c-p9",
  assessmentKind: "deterministic_supplied_delivery_candidate",
  admissionState: reason === "all_required_fixture_checks_satisfied" ? "structurally_admissible_fixture" : "insufficient_evidence",
  reason,
  satisfiedChecks: Object.freeze([...satisfiedChecks]),
  unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
  producerAuthorityAcceptedAsProof: false,
  productionProofEstablished: false,
  currentTruthAdmitted: false,
  snapshotPresentation: "withheld",
  canonicalOutcome: "insufficient_evidence",
  runtimeActivationPosture: "not_included",
  authority: "none"
}), "assessment");
function assessPondBridgeStdioDeliveryAdmission(input) {
  if (!validSourceBinding3(input.sourceBinding))
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
    receiver.content_channel === "structured_content_separate_from_operator_input",
    receiver.precedence === "receiver_owned_evidence_channel",
    receiver.live_invocation === "observed"
  ];
  const satisfied = checks.filter((_, index) => values[index]);
  const unsatisfied = checks.filter((_, index) => !values[index]);
  return assessment(
    unsatisfied.length === 0 ? "all_required_fixture_checks_satisfied" : "receiver_proof_incomplete",
    satisfied,
    unsatisfied
  );
}
__name(assessPondBridgeStdioDeliveryAdmission, "assessPondBridgeStdioDeliveryAdmission");

// src/fixtures/stage-c-p9-bridge-stdio-delivery-admission.ts
var stageCP9BridgeStdioDeliveryAdmission = assessPondBridgeStdioDeliveryAdmission({
  sourceBinding: stageCP9BridgeStage39ARepoStatusSourceBinding,
  deliveryCandidate: {
    source_stage: "stage_39a_portable_readonly_mcp_visibility",
    tool_name: "mirror_repo_status",
    transport: "stdio",
    structural_channel: "mcp_structured_tool_result",
    target_identity_sha256: "0000000000000000000000000000000000000000000000000000000000000000",
    producer_channel_authority: "not_established_by_producer",
    receiver_observation: {
      process_ownership: "not_observed",
      server_identity: "not_observed",
      initialization: "not_observed",
      tool_inventory: "not_observed",
      target_binding: "not_compared",
      content_channel: "not_observed",
      precedence: "not_verified",
      live_invocation: "not_performed"
    }
  }
});

// src/cockpit/pond-stage-c-cockpit-record.ts
var bridgeBinding = stageCP9BridgeStage39ARepoStatusSourceBinding;
var freshnessAge = stageCP6FreshObservationAge;
var partialComparison = stageCP6PartialTargetComparison;
var fullHeadComparison = stageCP7FullHeadTargetComparison;
var originIdentityComparison = stageCP8OriginIdentityTargetComparison;
var deliveryAdmissionAssessment = stageCP9BridgeStdioDeliveryAdmission;
if (partialComparison.comparisonEvidence === null) {
  throw new TypeError("stage-c-p6 fixture comparison evidence missing");
}
if (fullHeadComparison.comparisonEvidence === null) {
  throw new TypeError("stage-c-p7 fixture comparison evidence missing");
}
if (originIdentityComparison.comparisonEvidence === null) {
  throw new TypeError("stage-c-p8 fixture comparison evidence missing");
}
if (originIdentityComparison.targetComparisonState !== "matched" || originIdentityComparison.exactTargetMatchEstablished !== true || originIdentityComparison.exactTargetMatchPosture !== "exact_supplied_fixture_values_only") {
  throw new TypeError(
    "stage-c-p8 fixture comparison is not the exact fixture match"
  );
}
var originIdentityMatchEstablished = originIdentityComparison.exactTargetMatchEstablished;
var sourceBinding = Object.freeze({
  contractVersion: bridgeBinding.contractVersion,
  repositoryOwner: bridgeBinding.sourceIdentity.repositoryOwner,
  repositoryName: bridgeBinding.sourceIdentity.repositoryName,
  branch: bridgeBinding.sourceIdentity.branch,
  commit: bridgeBinding.sourceIdentity.commit,
  modulePath: bridgeBinding.sourceIdentity.modulePath,
  stage: bridgeBinding.sourceIdentity.stage,
  toolName: bridgeBinding.sourceIdentity.toolName,
  transport: bridgeBinding.sourceIdentity.transport,
  bindingPosture: bridgeBinding.sourceIdentity.bindingPosture,
  structuralChannel: bridgeBinding.deliveryEvidenceContract.structuralChannel,
  producerAuthorityPosture: bridgeBinding.deliveryEvidenceContract.producerAuthorityPosture,
  requiredEvidenceFields: Object.freeze([
    ...bridgeBinding.requiredEvidenceFields
  ]),
  requiredEvidenceFieldsCount: bridgeBinding.requiredEvidenceFields.length,
  toolInventoryCount: bridgeBinding.toolInventoryCount,
  readOnlyToolInventory: Object.freeze([
    ...bridgeBinding.readOnlyToolInventory
  ]),
  rawOriginUrlProjected: bridgeBinding.rawOriginUrlProjected,
  remoteVerification: bridgeBinding.remoteVerification,
  pondClientRuntimePosture: bridgeBinding.pondClientRuntimePosture,
  authority: bridgeBinding.authority
});
var freshness = Object.freeze({
  contractVersion: freshnessAge.contractVersion,
  assessmentKind: freshnessAge.assessmentKind,
  observationAgeState: freshnessAge.observationAgeState,
  reason: freshnessAge.reason,
  observedAtEpochMs: freshnessAge.observedAtEpochMs,
  evaluatedAtEpochMs: freshnessAge.evaluatedAtEpochMs,
  maximumAgeMs: freshnessAge.maximumAgeMs,
  observationAgeMs: freshnessAge.observationAgeMs,
  freshnessBasis: freshnessAge.freshnessBasis,
  currentTruthAdmitted: freshnessAge.currentTruthAdmitted,
  snapshotPresentation: freshnessAge.snapshotPresentation,
  presentationState: freshnessAge.presentationState,
  trustedChannelPosture: freshnessAge.trustedChannelPosture,
  canonicalOutcome: freshnessAge.canonicalOutcome,
  authority: freshnessAge.authority
});
var expectedTarget = Object.freeze({
  contractVersion: stageCP1ReadOnlyRepositoryTarget.contractVersion,
  repositoryOwner: stageCP1ReadOnlyRepositoryTarget.repository.owner,
  repositoryName: stageCP1ReadOnlyRepositoryTarget.repository.name,
  repositoryIdentityPosture: stageCP1ReadOnlyRepositoryTarget.repository.identityPosture,
  branchName: stageCP1ReadOnlyRepositoryTarget.branch.name,
  branchBindingPosture: stageCP1ReadOnlyRepositoryTarget.branch.bindingPosture,
  headCommit: stageCP1ReadOnlyRepositoryTarget.head.commit,
  headBindingPosture: stageCP1ReadOnlyRepositoryTarget.head.bindingPosture,
  pathClass: stageCP1ReadOnlyRepositoryTarget.path.pathClass,
  operationClass: stageCP1ReadOnlyRepositoryTarget.operationClass,
  targetPosture: stageCP1ReadOnlyRepositoryTarget.targetPosture,
  authority: stageCP1ReadOnlyRepositoryTarget.authority
});
var partialHeadPrefix = Object.freeze({
  contractVersion: partialComparison.contractVersion,
  sourceBindingComparisonPosture: partialComparison.sourceBindingComparisonPosture,
  comparisonPerformed: partialComparison.comparisonPerformed,
  targetComparisonState: partialComparison.targetComparisonState,
  reason: partialComparison.reason,
  conflictDimensions: Object.freeze([...partialComparison.conflictDimensions]),
  fieldComparisons: Object.freeze({
    repositoryNameFromRootLabel: partialComparison.comparisonEvidence.fieldComparisons.repositoryNameFromRootLabel,
    branchName: partialComparison.comparisonEvidence.fieldComparisons.branchName,
    headCommitPrefix: partialComparison.comparisonEvidence.fieldComparisons.headCommitPrefix,
    repositoryOwner: partialComparison.comparisonEvidence.fieldComparisons.repositoryOwner,
    headCommitFull: partialComparison.comparisonEvidence.fieldComparisons.headCommitFull
  }),
  exactTargetMatchEstablished: partialComparison.exactTargetMatchEstablished,
  currentTruthAdmitted: partialComparison.currentTruthAdmitted,
  snapshotPresentation: partialComparison.snapshotPresentation,
  presentationState: partialComparison.presentationState,
  canonicalOutcome: partialComparison.canonicalOutcome,
  authority: partialComparison.authority
});
var fullHead = Object.freeze({
  contractVersion: fullHeadComparison.contractVersion,
  sourceBindingComparisonPosture: fullHeadComparison.sourceBindingComparisonPosture,
  comparisonPerformed: fullHeadComparison.comparisonPerformed,
  targetComparisonState: fullHeadComparison.targetComparisonState,
  reason: fullHeadComparison.reason,
  conflictDimensions: Object.freeze([
    ...fullHeadComparison.conflictDimensions
  ]),
  fieldComparisons: Object.freeze({
    repositoryNameFromRootLabel: fullHeadComparison.comparisonEvidence.fieldComparisons.repositoryNameFromRootLabel,
    branchName: fullHeadComparison.comparisonEvidence.fieldComparisons.branchName,
    headCommitFull: fullHeadComparison.comparisonEvidence.fieldComparisons.headCommitFull,
    repositoryOwner: fullHeadComparison.comparisonEvidence.fieldComparisons.repositoryOwner
  }),
  exactTargetMatchEstablished: fullHeadComparison.exactTargetMatchEstablished,
  currentTruthAdmitted: fullHeadComparison.currentTruthAdmitted,
  snapshotPresentation: fullHeadComparison.snapshotPresentation,
  presentationState: fullHeadComparison.presentationState,
  canonicalOutcome: fullHeadComparison.canonicalOutcome,
  authority: fullHeadComparison.authority
});
var originIdentity = Object.freeze({
  contractVersion: originIdentityComparison.contractVersion,
  sourceBindingComparisonPosture: originIdentityComparison.sourceBindingComparisonPosture,
  comparisonPerformed: originIdentityComparison.comparisonPerformed,
  targetComparisonState: originIdentityComparison.targetComparisonState,
  reason: originIdentityComparison.reason,
  conflictDimensions: Object.freeze([
    ...originIdentityComparison.conflictDimensions
  ]),
  fieldComparisons: Object.freeze({
    repositoryOwner: originIdentityComparison.comparisonEvidence.fieldComparisons.repositoryOwner,
    repositoryName: originIdentityComparison.comparisonEvidence.fieldComparisons.repositoryName,
    repositoryNameFromRootLabel: originIdentityComparison.comparisonEvidence.fieldComparisons.repositoryNameFromRootLabel,
    branchName: originIdentityComparison.comparisonEvidence.fieldComparisons.branchName,
    headCommitFull: originIdentityComparison.comparisonEvidence.fieldComparisons.headCommitFull
  }),
  exactTargetMatchEstablished: originIdentityMatchEstablished,
  exactTargetMatchPosture: originIdentityComparison.exactTargetMatchPosture,
  remoteVerificationPosture: originIdentityComparison.remoteVerificationPosture,
  currentTruthAdmitted: originIdentityComparison.currentTruthAdmitted,
  snapshotPresentation: originIdentityComparison.snapshotPresentation,
  presentationState: originIdentityComparison.presentationState,
  canonicalOutcome: originIdentityComparison.canonicalOutcome,
  authority: originIdentityComparison.authority
});
var targetComparisonChain = Object.freeze({
  expectedTarget,
  partialHeadPrefix,
  fullHead,
  originIdentity
});
var deliveryAdmission = Object.freeze({
  contractVersion: deliveryAdmissionAssessment.contractVersion,
  sourceBindingContractVersion: deliveryAdmissionAssessment.sourceBindingContractVersion,
  assessmentKind: deliveryAdmissionAssessment.assessmentKind,
  admissionState: deliveryAdmissionAssessment.admissionState,
  reason: deliveryAdmissionAssessment.reason,
  satisfiedChecks: Object.freeze([
    ...deliveryAdmissionAssessment.satisfiedChecks
  ]),
  unsatisfiedChecks: Object.freeze([
    ...deliveryAdmissionAssessment.unsatisfiedChecks
  ]),
  producerAuthorityAcceptedAsProof: deliveryAdmissionAssessment.producerAuthorityAcceptedAsProof,
  productionProofEstablished: deliveryAdmissionAssessment.productionProofEstablished,
  currentTruthAdmitted: deliveryAdmissionAssessment.currentTruthAdmitted,
  snapshotPresentation: deliveryAdmissionAssessment.snapshotPresentation,
  canonicalOutcome: deliveryAdmissionAssessment.canonicalOutcome,
  runtimeActivationPosture: deliveryAdmissionAssessment.runtimeActivationPosture,
  authority: deliveryAdmissionAssessment.authority
});
var denialPosture = Object.freeze({
  rendererFailurePosture: "fail_closed_all_values_unavailable",
  fallbackRenderingForbidden: true,
  mutationPerformed: false,
  runtimeActivationPosture: "not_included",
  authority: "none"
});
var sanitizedReceiptReference = Object.freeze({
  receiptRef: "receipt:fixture:stage-c:bridge-repo-status-observation-001",
  receiptRefPosture: "opaque_fixture_identity_not_canonical_receipt_id_format",
  receiptBodyPresentation: "not_present",
  verificationPosture: "not_performed",
  acceptancePosture: "not_established",
  authority: "none"
});
var pondStageCCockpitRecord = Object.freeze({
  cockpitRecordVersion: "pond-stage-c-cockpit-record-c-p10",
  authority: "none",
  presentationPosture: "fixture_rendered_presentation_only",
  mutationPosture: "none_read_only",
  sourceBinding,
  freshness,
  targetComparisonChain,
  deliveryAdmission,
  denialPosture,
  sanitizedReceiptReference
});
var pond_stage_c_cockpit_record_default = pondStageCCockpitRecord;

// pond-stage-c-cockpit-entry.ts
var pond_stage_c_cockpit_entry_default = pond_stage_c_cockpit_record_default;
export {
  pond_stage_c_cockpit_entry_default as default,
  pond_stage_c_cockpit_record_default as pondStageCCockpitRecord
};
