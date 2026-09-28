// Stage D-P1 — Agents view fixture presentation record.
//
// Single source of truth for the Home view's Agents view panel: every
// presented value is picked (never re-exported wholesale) from the canonical
// D-P0 identity-bound observed-agent presence fixture and its trading-desk
// source contract, and the D-P1 source-binding assessment is performed here.
// Presentation is not authority: the record carries no transport, no live
// observation, no authentication, no runtime activation, no mutation, and no
// current truth — all eight receiver-owned live-presence admission checks
// stay unsatisfied and the desk's personal-memory lanes are excluded.

import { stageDP0AgentPresenceProjection } from "../fixtures/stage-d-p0-agent-presence.js";
import {
  stageDP0Agent0Record,
  stageDP0CommunityAgentSlotRecord,
  stageDP0PersonalMemoryBoundary,
  stageDP0ProjectAgentSlotRecord,
  stageDP0TradingDeskSourceContract,
} from "../fixtures/stage-d-p0-agent-presence.js";
import { assessPondAgentPresenceSourceBinding } from "../contracts/pond-agent-presence-source-binding.js";

// Fail-closed guards: the presented posture is the D-P0 fixture's refused
// posture. Any drift stops the record (and the render) here.
if (stageDP0AgentPresenceProjection.contractVersion !== "pond-agent-presence-projection-d-p0") {
  throw new TypeError("stage-d-p0 fixture projection contract version drift");
}
if (stageDP0AgentPresenceProjection.authority !== "none") {
  throw new TypeError("stage-d-p0 fixture projection authority drift");
}
if (stageDP0Agent0Record.agentRef !== "agent:fixture:stage-d-p0:trading-desk-agent0") {
  throw new TypeError("stage-d-p0 fixture Agent0 ref drift");
}
if (
  stageDP0Agent0Record.profileClass !== "personal_agent" ||
  stageDP0Agent0Record.presenceStatus !== "fixture_observed_not_live" ||
  stageDP0Agent0Record.authority !== "none"
) {
  throw new TypeError("stage-d-p0 fixture Agent0 posture drift");
}
if (stageDP0Agent0Record.runtimeFacts.length !== 7) {
  throw new TypeError("stage-d-p0 fixture Agent0 runtime fact inventory drift");
}
for (const fact of stageDP0Agent0Record.runtimeFacts) {
  if (fact.sourceTool !== "runtime_status") {
    throw new TypeError("stage-d-p0 fixture runtime fact source tool drift");
  }
}
if (stageDP0Agent0Record.identityClaim.claimStatus !== "not_observed") {
  throw new TypeError("stage-d-p0 fixture identity claim observation drift");
}
if (
  stageDP0CommunityAgentSlotRecord.presenceStatus !== "not_observed" ||
  stageDP0ProjectAgentSlotRecord.presenceStatus !== "not_observed"
) {
  throw new TypeError("stage-d-p0 fixture relationship slot posture drift");
}

// D-P1 source binding over the D-P0 fixture: structural fixture binding
// only — the refused tuple stays on every outcome.
const sourceBindingAssessment = assessPondAgentPresenceSourceBinding({
  sourceContractFixture: stageDP0TradingDeskSourceContract,
  projection: stageDP0AgentPresenceProjection,
});
if (
  sourceBindingAssessment.reason !==
  "fixture_source_binding_structurally_admissible"
) {
  throw new TypeError("stage-d-p1 fixture source binding not structurally admissible");
}

const sourceBinding = Object.freeze({
  contractVersion: sourceBindingAssessment.contractVersion,
  sourceContractFixtureVersion: sourceBindingAssessment.sourceContractFixtureVersion,
  repository: stageDP0TradingDeskSourceContract.sourceContract.repository,
  boundSourceCommit: stageDP0TradingDeskSourceContract.sourceContract.boundSourceCommit,
  observedTools: Object.freeze([
    ...stageDP0TradingDeskSourceContract.sourceContract.observedTools,
  ]),
  sourcePosture: stageDP0TradingDeskSourceContract.sourceContract.sourcePosture,
  bindingState: sourceBindingAssessment.bindingState,
  reason: sourceBindingAssessment.reason,
  satisfiedChecks: Object.freeze([...sourceBindingAssessment.satisfiedChecks]),
  unsatisfiedChecks: Object.freeze([
    ...sourceBindingAssessment.unsatisfiedChecks,
  ]),
  liveSourceContractVerifiedByReceiver:
    sourceBindingAssessment.liveSourceContractVerifiedByReceiver,
  presenceRecordsAcceptedAsLiveObservation:
    sourceBindingAssessment.presenceRecordsAcceptedAsLiveObservation,
  runtimeActivationPosture: sourceBindingAssessment.runtimeActivationPosture,
  authority: sourceBindingAssessment.authority,
});

const principalBinding = Object.freeze({
  principalRef: stageDP0AgentPresenceProjection.localPrincipalBinding.principalRef,
  bindingState: stageDP0AgentPresenceProjection.localPrincipalBinding.bindingState,
  authenticationPerformed:
    stageDP0AgentPresenceProjection.localPrincipalBinding.authenticationPerformed,
  ceremonyPosture:
    stageDP0AgentPresenceProjection.localPrincipalBinding.ceremonyPosture,
  authority: "none" as const,
});

const pickAgent = (
  agent: typeof stageDP0Agent0Record | typeof stageDP0CommunityAgentSlotRecord,
) =>
  Object.freeze({
    agentRef: agent.agentRef,
    label: agent.label,
    profileClass: agent.profileClass,
    presenceStatus: agent.presenceStatus,
    transport: agent.transport.transport,
    transportIsAgentIdentity: agent.transport.transportIsAgentIdentity,
    transportEstablishesAdmission: agent.transport.transportEstablishesAdmission,
    liveConnectionPosture: agent.transport.liveConnectionPosture,
    runtimeFacts: Object.freeze(
      agent.runtimeFacts.map((fact) =>
        Object.freeze({
          factLabel: fact.factLabel,
          sourceTool: fact.sourceTool,
          observedValue: fact.observedValue,
          valuePosture: fact.valuePosture,
        }),
      ),
    ),
    identityClaimStatus: agent.identityClaim.claimStatus,
    identityClaimEvidencePosture: agent.identityClaim.evidencePosture,
    onchainIdentityIsPrincipalIdentity:
      agent.identityClaim.relationshipClaims.onchainIdentityIsPrincipalIdentity,
    relationshipState: Object.freeze({ ...agent.relationshipState }),
    personalMemoryBoundary: Object.freeze({ ...agent.personalMemoryBoundary }),
    authority: agent.authority,
  });

const agents = Object.freeze([
  pickAgent(stageDP0Agent0Record),
  pickAgent(stageDP0CommunityAgentSlotRecord),
  pickAgent(stageDP0ProjectAgentSlotRecord),
]);

// D-P0 admission posture, restated from the record's own contract literals:
// all eight receiver-owned live-presence admission checks stay unsatisfied in
// canonical order (the D-P0 selftest pins the classifier; the presented
// record carries its canonical all-unsatisfied state).
const admission = Object.freeze({
  contractVersion: "pond-agent-presence-admission-d-p0" as const,
  admissionState: "insufficient_evidence" as const,
  reason: "receiver_proof_incomplete" as const,
  satisfiedChecks: Object.freeze([] as readonly string[]),
  unsatisfiedChecks: Object.freeze([
    "exact_source_contract_identity",
    "exact_secret_free_runtime_fact_inventory",
    "receiver_owned_presence_observation_channel",
    "runtime_facts_separated_from_personal_memory_channels",
    "identity_claim_evidence_independently_reproduced",
    "local_principal_binding_established_before_private_reads",
    "observed_identity_kept_separate_from_principal_id",
    "live_presence_observation_observed",
  ] as const satisfies readonly string[]),
  observedPresenceAcceptedAsAuthentication: false,
  observedIdentityAcceptedAsPrincipalId: false,
  personalMemoryContentAdmitted: false,
  localPrincipalBindingEstablished: false,
  currentTruthAdmitted: false,
  runtimeActivationPosture: "not_included" as const,
  authority: "none" as const,
});

// Renderer-denial posture: any missing node or field must withhold every
// value (fail closed); fallback rendering is forbidden, and nothing here can
// observe, authenticate, mutate, or grant authority.
const denialPosture = Object.freeze({
  rendererFailurePosture: "fail_closed_all_values_unavailable",
  fallbackRenderingForbidden: true,
  liveObservationPerformed: false,
  mutationPerformed: false,
  runtimeActivationPosture: "not_included",
  authority: "none",
});

const personalMemoryBoundary = Object.freeze({
  ...stageDP0PersonalMemoryBoundary,
});

export const pondStageDAgentsRecord = Object.freeze({
  agentsRecordVersion: "pond-stage-d-agents-record-d-p1",
  authority: "none",
  presentationPosture: "fixture_rendered_presentation_only",
  mutationPosture: "none_read_only",
  truthPosture: "withheld_fixture_projection_only",
  sourceBinding,
  principalBinding,
  agents,
  admission,
  denialPosture,
  personalMemoryBoundary,
} as const);

export default pondStageDAgentsRecord;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP1AgentsRecordInvariant_AuthorityNone = Assert<
  Equal<typeof pondStageDAgentsRecord["authority"], "none">
>;
export type PondStageDP1AgentsRecordInvariant_MutationNoneReadOnly = Assert<
  Equal<typeof pondStageDAgentsRecord["mutationPosture"], "none_read_only">
>;
export type PondStageDP1AgentsRecordInvariant_TruthWithheld = Assert<
  Equal<typeof pondStageDAgentsRecord["truthPosture"], "withheld_fixture_projection_only">
>;
export type PondStageDP1AgentsRecordInvariant_AdmissionAllUnsatisfied = Assert<
  Equal<
    [
      typeof pondStageDAgentsRecord["admission"]["admissionState"],
      typeof pondStageDAgentsRecord["admission"]["observedPresenceAcceptedAsAuthentication"],
      typeof pondStageDAgentsRecord["admission"]["observedIdentityAcceptedAsPrincipalId"],
      typeof pondStageDAgentsRecord["admission"]["personalMemoryContentAdmitted"],
      typeof pondStageDAgentsRecord["admission"]["localPrincipalBindingEstablished"],
      typeof pondStageDAgentsRecord["admission"]["currentTruthAdmitted"],
      typeof pondStageDAgentsRecord["admission"]["runtimeActivationPosture"],
      typeof pondStageDAgentsRecord["admission"]["authority"],
    ],
    ["insufficient_evidence", false, false, false, false, false, "not_included", "none"]
  >
>;
export type PondStageDP1AgentsRecordInvariant_MemoryBoundaryAllRefused = Assert<
  Equal<
    [
      typeof pondStageDAgentsRecord["personalMemoryBoundary"]["deskJournalLaneAdmitted"],
      typeof pondStageDAgentsRecord["personalMemoryBoundary"]["deskMemoryLaneAdmitted"],
      typeof pondStageDAgentsRecord["personalMemoryBoundary"]["deskNarrativeLaneAdmitted"],
      typeof pondStageDAgentsRecord["personalMemoryBoundary"]["deskTranscriptLaneAdmitted"],
    ],
    [false, false, false, false]
  >
>;
export type PondStageDP1AgentsRecordInvariant_BindingNeverLiveVerification =
  Assert<
    Equal<
      [
        typeof pondStageDAgentsRecord["sourceBinding"]["liveSourceContractVerifiedByReceiver"],
        typeof pondStageDAgentsRecord["sourceBinding"]["presenceRecordsAcceptedAsLiveObservation"],
      ],
      [false, false]
    >
  >;