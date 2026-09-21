// Stage C-P10 — Bridge cockpit fixture presentation record.
//
// Single source of truth for the Home view's Stage C cockpit panel: every
// presented value is picked (never re-exported wholesale) from the canonical
// C-P1..C-P9 fixture chain and deep-frozen here. Presentation is not
// authority: the record carries no transport, no runtime activation, no
// mutation, and no current truth — the canonical outcome stays
// insufficient_evidence everywhere and the receipt body is never presented.

import { stageCP1ReadOnlyRepositoryTarget } from "../fixtures/stage-c-p1-read-only-repository-target.js";
import {
  stageCP6FreshObservationAge,
  stageCP6PartialTargetComparison,
} from "../fixtures/stage-c-p6-bridge-repo-status-target-comparison.js";
import { stageCP7FullHeadTargetComparison } from "../fixtures/stage-c-p7-bridge-repo-status-full-head-target-comparison.js";
import { stageCP8OriginIdentityTargetComparison } from "../fixtures/stage-c-p8-bridge-repo-status-origin-identity-target-comparison.js";
import { stageCP9BridgeStage39ARepoStatusSourceBinding } from "../fixtures/stage-c-p9-bridge-stage39a-repo-status-source-binding.js";
import { stageCP9BridgeStdioDeliveryAdmission } from "../fixtures/stage-c-p9-bridge-stdio-delivery-admission.js";

const bridgeBinding = stageCP9BridgeStage39ARepoStatusSourceBinding;
const freshnessAge = stageCP6FreshObservationAge;
const partialComparison = stageCP6PartialTargetComparison;
const fullHeadComparison = stageCP7FullHeadTargetComparison;
const originIdentityComparison = stageCP8OriginIdentityTargetComparison;
const deliveryAdmissionAssessment = stageCP9BridgeStdioDeliveryAdmission;

// Fail-closed guards: the comparison contracts type their evidence as
// `… | null` for refused inputs, and the canonical fixture chain must be the
// performed branches. Any drift stops the record (and the render) here.
if (partialComparison.comparisonEvidence === null) {
  throw new TypeError("stage-c-p6 fixture comparison evidence missing");
}
if (fullHeadComparison.comparisonEvidence === null) {
  throw new TypeError("stage-c-p7 fixture comparison evidence missing");
}
if (originIdentityComparison.comparisonEvidence === null) {
  throw new TypeError("stage-c-p8 fixture comparison evidence missing");
}
if (
  originIdentityComparison.targetComparisonState !== "matched" ||
  originIdentityComparison.exactTargetMatchEstablished !== true ||
  originIdentityComparison.exactTargetMatchPosture !==
    "exact_supplied_fixture_values_only"
) {
  throw new TypeError(
    "stage-c-p8 fixture comparison is not the exact fixture match",
  );
}
const originIdentityMatchEstablished =
  originIdentityComparison.exactTargetMatchEstablished;

// Bridge Stage 39A-R1 source binding: the exact merged source contract the
// presented posture is bound to, plus the read-only tool inventory it admits.
const sourceBinding = Object.freeze({
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
  producerAuthorityPosture:
    bridgeBinding.deliveryEvidenceContract.producerAuthorityPosture,
  requiredEvidenceFields: Object.freeze([
    ...bridgeBinding.requiredEvidenceFields,
  ]),
  requiredEvidenceFieldsCount: bridgeBinding.requiredEvidenceFields.length,
  toolInventoryCount: bridgeBinding.toolInventoryCount,
  readOnlyToolInventory: Object.freeze([
    ...bridgeBinding.readOnlyToolInventory,
  ]),
  rawOriginUrlProjected: bridgeBinding.rawOriginUrlProjected,
  remoteVerification: bridgeBinding.remoteVerification,
  pondClientRuntimePosture: bridgeBinding.pondClientRuntimePosture,
  authority: bridgeBinding.authority,
});

// C-P5 freshness classification over the fixture observation metadata: fresh
// against the fixture-declared maximum age, with current truth still withheld.
const freshness = Object.freeze({
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
  authority: freshnessAge.authority,
});

// The expected C-P1 read-only repository target the comparisons run against.
const expectedTarget = Object.freeze({
  contractVersion: stageCP1ReadOnlyRepositoryTarget.contractVersion,
  repositoryOwner: stageCP1ReadOnlyRepositoryTarget.repository.owner,
  repositoryName: stageCP1ReadOnlyRepositoryTarget.repository.name,
  repositoryIdentityPosture:
    stageCP1ReadOnlyRepositoryTarget.repository.identityPosture,
  branchName: stageCP1ReadOnlyRepositoryTarget.branch.name,
  branchBindingPosture: stageCP1ReadOnlyRepositoryTarget.branch.bindingPosture,
  headCommit: stageCP1ReadOnlyRepositoryTarget.head.commit,
  headBindingPosture: stageCP1ReadOnlyRepositoryTarget.head.bindingPosture,
  pathClass: stageCP1ReadOnlyRepositoryTarget.path.pathClass,
  operationClass: stageCP1ReadOnlyRepositoryTarget.operationClass,
  targetPosture: stageCP1ReadOnlyRepositoryTarget.targetPosture,
  authority: stageCP1ReadOnlyRepositoryTarget.authority,
});

// C-P6: prefix-only comparison — repository owner and full HEAD are not
// observable by the bound source contract, so the chain stays refused.
const partialHeadPrefix = Object.freeze({
  contractVersion: partialComparison.contractVersion,
  sourceBindingComparisonPosture:
    partialComparison.sourceBindingComparisonPosture,
  comparisonPerformed: partialComparison.comparisonPerformed,
  targetComparisonState: partialComparison.targetComparisonState,
  reason: partialComparison.reason,
  conflictDimensions: Object.freeze([...partialComparison.conflictDimensions]),
  fieldComparisons: Object.freeze({
    repositoryNameFromRootLabel:
      partialComparison.comparisonEvidence.fieldComparisons
        .repositoryNameFromRootLabel,
    branchName: partialComparison.comparisonEvidence.fieldComparisons.branchName,
    headCommitPrefix:
      partialComparison.comparisonEvidence.fieldComparisons.headCommitPrefix,
    repositoryOwner:
      partialComparison.comparisonEvidence.fieldComparisons.repositoryOwner,
    headCommitFull:
      partialComparison.comparisonEvidence.fieldComparisons.headCommitFull,
  }),
  exactTargetMatchEstablished: partialComparison.exactTargetMatchEstablished,
  currentTruthAdmitted: partialComparison.currentTruthAdmitted,
  snapshotPresentation: partialComparison.snapshotPresentation,
  presentationState: partialComparison.presentationState,
  canonicalOutcome: partialComparison.canonicalOutcome,
  authority: partialComparison.authority,
});

// C-P7: full-HEAD comparison — the 40-hex HEAD matches exactly, the repository
// owner still is not observable by the bound source contract.
const fullHead = Object.freeze({
  contractVersion: fullHeadComparison.contractVersion,
  sourceBindingComparisonPosture:
    fullHeadComparison.sourceBindingComparisonPosture,
  comparisonPerformed: fullHeadComparison.comparisonPerformed,
  targetComparisonState: fullHeadComparison.targetComparisonState,
  reason: fullHeadComparison.reason,
  conflictDimensions: Object.freeze([
    ...fullHeadComparison.conflictDimensions,
  ]),
  fieldComparisons: Object.freeze({
    repositoryNameFromRootLabel:
      fullHeadComparison.comparisonEvidence.fieldComparisons
        .repositoryNameFromRootLabel,
    branchName:
      fullHeadComparison.comparisonEvidence.fieldComparisons.branchName,
    headCommitFull:
      fullHeadComparison.comparisonEvidence.fieldComparisons.headCommitFull,
    repositoryOwner:
      fullHeadComparison.comparisonEvidence.fieldComparisons.repositoryOwner,
  }),
  exactTargetMatchEstablished: fullHeadComparison.exactTargetMatchEstablished,
  currentTruthAdmitted: fullHeadComparison.currentTruthAdmitted,
  snapshotPresentation: fullHeadComparison.snapshotPresentation,
  presentationState: fullHeadComparison.presentationState,
  canonicalOutcome: fullHeadComparison.canonicalOutcome,
  authority: fullHeadComparison.authority,
});

// C-P8: configured-origin identity comparison — every supplied fixture value
// matches exactly, yet the match is exact_supplied_fixture_values_only and
// current truth stays withheld pending trusted delivery and live origin proof.
const originIdentity = Object.freeze({
  contractVersion: originIdentityComparison.contractVersion,
  sourceBindingComparisonPosture:
    originIdentityComparison.sourceBindingComparisonPosture,
  comparisonPerformed: originIdentityComparison.comparisonPerformed,
  targetComparisonState: originIdentityComparison.targetComparisonState,
  reason: originIdentityComparison.reason,
  conflictDimensions: Object.freeze([
    ...originIdentityComparison.conflictDimensions,
  ]),
  fieldComparisons: Object.freeze({
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
  }),
  exactTargetMatchEstablished: originIdentityMatchEstablished,
  exactTargetMatchPosture: originIdentityComparison.exactTargetMatchPosture,
  remoteVerificationPosture:
    originIdentityComparison.remoteVerificationPosture,
  currentTruthAdmitted: originIdentityComparison.currentTruthAdmitted,
  snapshotPresentation: originIdentityComparison.snapshotPresentation,
  presentationState: originIdentityComparison.presentationState,
  canonicalOutcome: originIdentityComparison.canonicalOutcome,
  authority: originIdentityComparison.authority,
});

const targetComparisonChain = Object.freeze({
  expectedTarget,
  partialHeadPrefix,
  fullHead,
  originIdentity,
});

// C-P9: receiver-owned STDIO delivery admission over the zero-digest fixture
// candidate — every receiver proof is unobserved, so all eight checks stay
// unsatisfied in canonical order and the snapshot presentation is withheld.
const deliveryAdmission = Object.freeze({
  contractVersion: deliveryAdmissionAssessment.contractVersion,
  sourceBindingContractVersion:
    deliveryAdmissionAssessment.sourceBindingContractVersion,
  assessmentKind: deliveryAdmissionAssessment.assessmentKind,
  admissionState: deliveryAdmissionAssessment.admissionState,
  reason: deliveryAdmissionAssessment.reason,
  satisfiedChecks: Object.freeze([
    ...deliveryAdmissionAssessment.satisfiedChecks,
  ]),
  unsatisfiedChecks: Object.freeze([
    ...deliveryAdmissionAssessment.unsatisfiedChecks,
  ]),
  producerAuthorityAcceptedAsProof:
    deliveryAdmissionAssessment.producerAuthorityAcceptedAsProof,
  productionProofEstablished:
    deliveryAdmissionAssessment.productionProofEstablished,
  currentTruthAdmitted: deliveryAdmissionAssessment.currentTruthAdmitted,
  snapshotPresentation: deliveryAdmissionAssessment.snapshotPresentation,
  canonicalOutcome: deliveryAdmissionAssessment.canonicalOutcome,
  runtimeActivationPosture: deliveryAdmissionAssessment.runtimeActivationPosture,
  authority: deliveryAdmissionAssessment.authority,
});

// Renderer-denial posture: any missing node or field must withhold every
// value (fail closed); fallback rendering is forbidden, and nothing here can
// mutate, activate, or grant authority.
const denialPosture = Object.freeze({
  rendererFailurePosture: "fail_closed_all_values_unavailable",
  fallbackRenderingForbidden: true,
  mutationPerformed: false,
  runtimeActivationPosture: "not_included",
  authority: "none",
});

// Structural receipt reference only — the receipt body is never present in
// this record, so the panel can never present it.
const sanitizedReceiptReference = Object.freeze({
  receiptRef: "receipt:fixture:stage-c:bridge-repo-status-observation-001",
  receiptRefPosture: "opaque_fixture_identity_not_canonical_receipt_id_format",
  receiptBodyPresentation: "not_present",
  verificationPosture: "not_performed",
  acceptancePosture: "not_established",
  authority: "none",
});

export const pondStageCCockpitRecord = Object.freeze({
  cockpitRecordVersion: "pond-stage-c-cockpit-record-c-p10",
  authority: "none",
  presentationPosture: "fixture_rendered_presentation_only",
  mutationPosture: "none_read_only",
  sourceBinding,
  freshness,
  targetComparisonChain,
  deliveryAdmission,
  denialPosture,
  sanitizedReceiptReference,
} as const);

export default pondStageCCockpitRecord;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageCP10CockpitRecordInvariant_AuthorityNone = Assert<
  Equal<typeof pondStageCCockpitRecord["authority"], "none">
>;
export type PondStageCP10CockpitRecordInvariant_MutationNoneReadOnly = Assert<
  Equal<typeof pondStageCCockpitRecord["mutationPosture"], "none_read_only">
>;
export type PondStageCP10CockpitRecordInvariant_DeliveryTruthWithheld = Assert<
  Equal<
    [
      typeof pondStageCCockpitRecord["deliveryAdmission"]["currentTruthAdmitted"],
      typeof pondStageCCockpitRecord["deliveryAdmission"]["snapshotPresentation"],
      typeof pondStageCCockpitRecord["deliveryAdmission"]["canonicalOutcome"],
      typeof pondStageCCockpitRecord["deliveryAdmission"]["runtimeActivationPosture"],
    ],
    [false, "withheld", "insufficient_evidence", "not_included"]
  >
>;
export type PondStageCP10CockpitRecordInvariant_ReceiptBodyNeverPresented =
  Assert<
    Equal<
      typeof pondStageCCockpitRecord["sanitizedReceiptReference"]["receiptBodyPresentation"],
      "not_present"
    >
  >;
export type PondStageCP10CockpitRecordInvariant_ExactMatchNeverCurrentTruth =
  Assert<
    Equal<
      [
        typeof pondStageCCockpitRecord["targetComparisonChain"]["originIdentity"]["exactTargetMatchEstablished"],
        typeof pondStageCCockpitRecord["targetComparisonChain"]["originIdentity"]["exactTargetMatchPosture"],
      ],
      [true, "exact_supplied_fixture_values_only"]
    >
  >;