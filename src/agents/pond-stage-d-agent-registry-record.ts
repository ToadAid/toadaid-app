// Stage D-P24 — Agent registry evidence presentation record.
//
// Single source of truth for the Pond's new agent-registry panel: every
// presented value is picked (never re-exported wholesale) from the
// receiver-recorded registration-evidence record and its real D-P24
// assessment, re-performed here at record-build time over the pinned
// desk template-one arm. Presentation is derived evidence only: the
// record carries no admission, no membership, no channel, no transport,
// no live read, no authentication, no onchain coordinate, no mutation,
// and no current truth — presentation is not a connection, and the
// desk's status HTTP server is never contacted.
//
// The D-P0 tie is checked on every record build: the desk's onchain
// identity claim slot in the frozen D-P0 presence panel is exactly the
// all-null not-observed vocabulary this lane upgrades into a presented
// registration evidence record — no drift between the two panels' honest
// posture is permitted.

import { assessPondAgentRegistrationEvidence } from "../contracts/pond-agent-registration-evidence.js";
import {
  stageDP24AgentRegistrationEvidenceMatrix,
  stageDP24CanonicalTranscriptionDigestHex,
  stageDP24DeskRegistrationActive,
  stageDP24DeskRegistrationAgentEvidenceRef,
  stageDP24DeskRegistrationDigestHex,
  stageDP24DeskRegistrationName,
  stageDP24DeskRegistrationObservedAtEpochMs,
  stageDP24DeskRegistrationObservedBy,
  stageDP24DeskRegistrationServiceCount,
  stageDP24DeskRegistrationServiceNames,
  stageDP24DeskRegistrationSourceRef,
  stageDP24DeskRegistrationSupportedTrust,
  stageDP24DeskRegistrationTypeKind,
  stageDP24DeskRegistrationX402Support,
  stageDP24ReceiverEvaluatedAtEpochMs,
  stageDP24ReceiverMaximumAgeMs,
} from "../fixtures/stage-d-p24-agent-identity-evidence.js";
import { stageDP0Agent0Record } from "../fixtures/stage-d-p0-agent-presence.js";

// Fail-closed drift guards: any drift between the pinned constants, the
// pinned green arm, and the D-P0 identity-claim slot stops the record
// (and the render) here.
if (stageDP0Agent0Record.identityClaim.claimStatus !== "not_observed") {
  throw new TypeError("stage-d-p0 identity claim observation drift");
}
if (stageDP0Agent0Record.authority !== "none") {
  throw new TypeError("stage-d-p0 agent presence authority drift");
}
if (stageDP24AgentRegistrationEvidenceMatrix.length !== 13) {
  throw new TypeError("stage-d-p24 registration evidence matrix inventory drift");
}
const greenArm = stageDP24AgentRegistrationEvidenceMatrix[0];
if (greenArm === undefined) {
  throw new TypeError("stage-d-p24 registration evidence green arm drift");
}
if (
  greenArm.fixtureLabel !== "desk-registration-presented-green" ||
  greenArm.assessment.contractVersion !== "pond-agent-registration-evidence-d-p24" ||
  greenArm.assessment.registrationDigestClaimedHex !== stageDP24DeskRegistrationDigestHex
) {
  throw new TypeError("stage-d-p24 registration evidence green arm drift");
}
if (greenArm.assessment.agentRegistrationEvidenceState !==
    "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel" ||
  greenArm.assessment.reason !==
    "agent_registration_evidence_derived_evidence_only_presentation_satisfied" ||
  greenArm.assessment.satisfiedChecks.length !== 7 ||
  greenArm.assessment.unsatisfiedChecks.length !== 0) {
  throw new TypeError("stage-d-p24 registration evidence green assessment drift");
}
if (greenArm.assessment.authority !== "none" ||
  greenArm.assessment.runtimeActivationPosture !== "not_included" ||
  greenArm.assessment.registrationEvidenceConsumedThisCut !== false) {
  throw new TypeError("stage-d-p24 registration evidence authority drift");
}
const greenRecordValue = greenArm.registrationEvidenceRecord as Record<string, unknown>;
if (greenRecordValue["registrationDigest"] === undefined ||
  (greenRecordValue["registrationDigest"] as Record<string, unknown>)["claimedDigestHex"] !==
    stageDP24DeskRegistrationDigestHex) {
  throw new TypeError("stage-d-p24 registration digest pin drift");
}
if (greenArm.assessment.evidenceFreshnessDiagnosis.state !== "fresh") {
  throw new TypeError("stage-d-p24 registration evidence freshness drift");
}

// The D-P24 presentation is re-performed at record-build time over the
// pinned green arm: the real assessor, the same evaluation pair, and the
// green verdict asserted before anything is exported.
const presentationAssessment = assessPondAgentRegistrationEvidence({
  registrationEvidenceRecord: greenArm.registrationEvidenceRecord,
  receiverRecomputedDigestHex: greenArm.receiverRecomputedDigestHex,
  receiverEvaluatedAtEpochMs: greenArm.receiverEvaluatedAtEpochMs,
  receiverMaximumAgeMs: greenArm.receiverMaximumAgeMs,
});

if (presentationAssessment.agentRegistrationEvidenceState !==
    "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel") {
  throw new TypeError("stage-d-p24 re-performed presentation drift");
}

export interface PondStageDAgentRegistryRecord {
  readonly contractVersion: "pond-agent-registration-evidence-d-p24";
  readonly kind: "pond-agent-registry-evidence-presentation";
  readonly agentEvidenceRef: string;
  readonly registrationName: string;
  readonly registrationTypeKind: string;
  readonly registrationServiceCount: number;
  readonly registrationServiceNames: readonly string[];
  readonly registrationActive: boolean;
  readonly x402Support: boolean;
  readonly supportedTrust: readonly string[];
  readonly registrationDigestHex: string;
  readonly registrationDigestBasis: string;
  readonly canonicalTranscriptionDigestHex: string;
  readonly registrationSourceRef: string;
  readonly observedAtEpochMs: number;
  readonly observedBy: string;
  readonly presentationState: string;
  readonly presentationReason: string;
  readonly satisfiedChecks: readonly string[];
  readonly unsatisfiedChecks: readonly string[];
  readonly freshnessState: string;
  readonly onchainEvidenceSlotStatus: string;
  readonly evidencePostures: {
    readonly evidencePosture: string;
    readonly notRuntimeIdentityPosture: string;
    readonly noInventionPosture: string;
    readonly admissionPosture: string;
    readonly channelPosture: string;
    readonly erc8004CeilingPosture: string;
    readonly verificationApplicabilityPosture: string;
  };
  readonly registryEvidenceStandingLine: string;
  readonly authority: "none";
  readonly runtimeActivationPosture: "not_included";
}

export const pondStageDAgentRegistryRecord: PondStageDAgentRegistryRecord = {
  contractVersion: "pond-agent-registration-evidence-d-p24",
  kind: "pond-agent-registry-evidence-presentation",
  agentEvidenceRef: stageDP24DeskRegistrationAgentEvidenceRef,
  registrationName: stageDP24DeskRegistrationName,
  registrationTypeKind: stageDP24DeskRegistrationTypeKind,
  registrationServiceCount: stageDP24DeskRegistrationServiceCount,
  registrationServiceNames: stageDP24DeskRegistrationServiceNames,
  registrationActive: stageDP24DeskRegistrationActive,
  x402Support: stageDP24DeskRegistrationX402Support,
  supportedTrust: stageDP24DeskRegistrationSupportedTrust,
  registrationDigestHex: stageDP24DeskRegistrationDigestHex,
  registrationDigestBasis: "sha256_registration_file_bytes_v1",
  canonicalTranscriptionDigestHex: stageDP24CanonicalTranscriptionDigestHex,
  registrationSourceRef: stageDP24DeskRegistrationSourceRef,
  observedAtEpochMs: stageDP24DeskRegistrationObservedAtEpochMs,
  observedBy: stageDP24DeskRegistrationObservedBy,
  presentationState: presentationAssessment.agentRegistrationEvidenceState,
  presentationReason: presentationAssessment.reason,
  satisfiedChecks: presentationAssessment.satisfiedChecks,
  unsatisfiedChecks: presentationAssessment.unsatisfiedChecks,
  freshnessState: presentationAssessment.evidenceFreshnessDiagnosis.state,
  onchainEvidenceSlotStatus:
    presentationAssessment.onchainEvidenceSlotStatus ??
    "not_observed_no_registration_coordinate_is_invented",
  evidencePostures: {
    evidencePosture: presentationAssessment.evidencePosture,
    notRuntimeIdentityPosture: presentationAssessment.notRuntimeIdentityPosture,
    noInventionPosture: presentationAssessment.noInventionPosture,
    admissionPosture: presentationAssessment.admissionPosture,
    channelPosture: presentationAssessment.channelPosture,
    erc8004CeilingPosture: presentationAssessment.erc8004CeilingPosture,
    verificationApplicabilityPosture:
      presentationAssessment.verificationApplicabilityPosture,
  },
  registryEvidenceStandingLine:
    "community agents' registrations present here as evidence only — presentation is not admission, opens no channel, grants no authority",
  authority: "none",
  runtimeActivationPosture: "not_included",
} as const;

Object.freeze(pondStageDAgentRegistryRecord);

export default pondStageDAgentRegistryRecord;