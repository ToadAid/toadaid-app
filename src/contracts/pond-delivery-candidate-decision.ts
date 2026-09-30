// Stage D-P17: the delivery lane — receiver-recorded delivery-candidate
// decisions over admitted conversation records.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/agent-to-agent-messaging-and-delivery-
// contract.md L29 ("A message may inform. A message does not authorize a
// consequence."), L5 and L63-65 (a delivery decision is a current policy
// decision of the receiving side — delivery authority is never inferred
// from the message itself), L118-129 (the audience ladder: presence is
// not membership, membership is not audience, audience is not capability,
// capability is not authority; channel visibility proves nothing), L151-169
// (the staged delivery-admission lifecycle — this cut implements its
// DECISION stage only), L189 ("The two lifecycles must not collapse"),
// L197-199 (revocation before delivery denies; the stop takes precedence —
// implemented honestly as retraction and freshness refusal), L201-205 (a
// receipt proves nothing beyond acceptance-for-delivery — none is claimed
// here), L232 (transport neutrality — no transport is performed),
// L245-246 (the delivery-state host is a deferred runtime concern — these
// decisions stay receiver-recorded in shell state); contracts/
// scope-sovereignty-contract.md L54-60 (an audience is never inferred by
// a model, channel visibility, or suggestion) and L144-148 (delivery is
// audience-bound and must bind source scope, destination audience,
// capability, and current policy); blueprints/social-control-plane.md
// L195 (routing is not authorization); blueprints/delegated-authority
// -lifecycle.md L325-333 (message delivery consumes no grant — and
// nothing here dispatches, so no duplicate-delivery reconciliation can
// arise; recorded as a mute); contracts/trusted-channel-separation-
// contract.md L28 (the conversation-context channel class — this cut
// moves nothing between classes: the candidate is a receiver-recorded
// presentation posture, never a channel crossing); contracts/
// evidence-activation-contract.md L49-55 and L109 (the independent
// inspection IS the re-run through the consumer's own seam, on every
// arm).
//
// Recorded law silences. No canonical law defines an app-side
// delivery-candidate vocabulary, a delivery-decision admission ceremony
// for receiver-recorded session records, a delivery-decision state set,
// or a delivery-intent event freshness basis; the canonical non-claims
// defer storage, routing, and transport wholesale. Every literal below is
// a receiver-recorded app-side decision, exercised as refusal vocabulary,
// not as new authority.
//
// What the cut performs. The receiver prepares a delivery candidate for
// an already-admitted D-P16 composition: the candidate carries the exact
// delivered copy of the admitted conversation record (its D-P16 dv and
// kind preserved verbatim — never re-stamped here), a receiver-recorded
// destination bound to the record's own addressed agent, and a
// receiver-recorded delivery-intent event time. This ceremony re-runs,
// through its own seam, the frozen D-P16 record admission over the
// delivered copy (per-assessment re-timing of the evaluation pair and the
// retraction record — the D-P15 reassessment precedent), the frozen D-P15
// read gate, and the frozen establishment. A delivered record that is not
// currently admitted can never carry a delivery candidate. The decision
// prepares nothing but the decision itself: no transport, no dispatch, no
// receipt, no consequence, no task acceptance, no grant, no membership,
// no admission, no cognition runtime. Dispatch is refused until its own
// later lane.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type { PondConversationRecord } from "./pond-conversation-record-admission.js";
import type { PondConversationRecordAdmissionAssessment } from "./pond-conversation-record-admission.js";
import type { PondLiveSessionEstablishmentAssessment } from "./pond-live-session-establishment.js";
import type { PondLiveSessionReadGateAssessment } from "./pond-live-session-read-gate.js";
import {
  assessPondConversationRecordAdmission,
  POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS,
  POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS,
} from "./pond-conversation-record-admission.ts";
import { assessPondLiveSessionEstablishment } from "./pond-live-session-establishment.ts";
import { assessPondLiveSessionReadGate } from "./pond-live-session-read-gate.ts";

// The delivery-candidate basis vocabulary: one true receiver-recorded
// intent basis and five refused inference bases. The D-P5/L5 rule holds:
// a delivery decision is a current policy decision of the receiving
// side — nothing in the composed message, the channel, a model
// completion, room presence, or a prior decision may record the intent
// here.
export type PondDeliveryCandidateBasis =
  | "receiver_recorded_delivery_intent_not_inferred"
  | "inferred_from_message_composition"
  | "inferred_from_channel_visibility"
  | "asserted_by_model_completion"
  | "inferred_from_room_presence"
  | "replayed_from_prior_delivery_decision";

export interface PondDeliveryIntentMetadata {
  readonly recorded_at_epoch_ms: number;
  readonly freshness_basis: "delivery_intent_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

// The receiver-recorded delivery-candidate record: 14 exact keys. The
// delivered copy of the conversation record keeps the frozen D-P16 dv and
// kind verbatim — this cut never re-stamps it, and a re-stamped copy is
// refused by the delivered-record re-run, not reformed here.
export interface PondDeliveryCandidate {
  readonly contractVersion: "pond-delivery-candidate-decision-d-p17";
  readonly kind: "pond-delivery-candidate";
  readonly principalRef: string;
  readonly deliveryBasis: PondDeliveryCandidateBasis;
  readonly deliveredConversationRecord: PondConversationRecord;
  readonly addressedAgentRef: string;
  readonly deliveryIntentMetadata: PondDeliveryIntentMetadata;
  readonly deliveryAudiencePosture: "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model";
  readonly deliveryTransportPosture: "no_transport_performed_dispatch_refused_until_its_own_lane";
  readonly deliveryConsequencePosture: "delivery_informs_receivers_evaluate_independently_no_consequence_authorized";
  readonly deliveryAcceptancePosture: "delivery_equips_no_task_acceptance_or_agreement";
  readonly deliveryEvidencePosture: "no_receipt_claimed_receipt_requires_its_own_governed_lane";
  readonly deliveryAuthorityPosture: "delivery_grants_no_authority_membership_capability_or_cognition_runtime";
  readonly authority: "none";
}

// Receiver-owned delivery-candidate checks (L49-55).
export type PondDeliveryCandidateCheck =
  | "delivery_candidate_well_formed"
  | "delivery_candidate_bound_to_receiver_held_principal"
  | "delivery_basis_receiver_recorded_not_inferred"
  | "delivery_destination_declared_in_conversation_vocabulary"
  | "delivery_destination_bound_to_delivered_record"
  | "delivered_conversation_record_reinspected_admitted_session_scoped"
  | "delivery_intent_within_current_session_scope"
  | "live_session_read_gate_reinspected_live_activated_and_fresh"
  | "delivery_refusal_postures_complete"
  | "delivery_intent_own_freshness_within_declared_maximum_age";

export interface PondDeliveryCandidateDecisionInput {
  readonly deliveryCandidate: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly readGateRecord: unknown;
  readonly establishmentRecord: unknown;
  readonly dp5CeremonyRecord: unknown;
  readonly dp6ObservationRecord: unknown;
  readonly dp8VerifierRecord: unknown;
  readonly dp8ProofRecord: unknown;
  readonly dp9IssuanceRecord: unknown;
  readonly dp9MappingRecord: unknown;
  readonly dp10ActivationRecord: unknown;
  readonly receiverRetractionRecord: unknown;
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export interface PondDeliveryCandidateDecisionAssessment {
  readonly contractVersion: "pond-delivery-candidate-decision-d-p17";
  readonly deliveryCandidateVersion:
    | "pond-delivery-candidate-decision-d-p17"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_delivery_candidate_decision";
  readonly deliveryCandidateState:
    | "delivery_candidate_not_prepared"
    | "delivery_candidate_prepared_session_scoped_no_dispatch";
  readonly reason:
    | "delivery_candidate_invalid"
    | "delivery_intent_not_session_current"
    | "live_session_read_gate_not_live_activated_refused_or_not_fresh"
    | "delivered_record_not_currently_admitted"
    | "delivery_intent_not_of_the_current_session_scope"
    | "delivery_destination_not_declared"
    | "receiver_delivery_candidate_proof_incomplete"
    | "all_delivery_candidate_checks_satisfied";
  readonly deliveryIntentFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // Mapped echo fields: the frozen legs re-run through this contract's
  // own seam (evidence-activation L109), carrying the frozen literals
  // verbatim on every arm, through broken legs too, including the
  // delivered-record re-run conclusion — without it a not-currently-
  // admitted record has nothing readable. Field names stay this cut's
  // own; the frozen carrier names are never re-declared here.
  readonly mappedEstablishmentState: PondLiveSessionEstablishmentAssessment["sessionEstablishmentState"];
  readonly mappedEstablishmentReason: PondLiveSessionEstablishmentAssessment["reason"];
  readonly mappedEstablishmentFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly mappedReadGateState: PondLiveSessionReadGateAssessment["liveSessionReadGateState"];
  readonly mappedReadGateReason: PondLiveSessionReadGateAssessment["reason"];
  readonly mappedReadGateFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly mappedDeliveredRecordAdmissionState: PondConversationRecordAdmissionAssessment["conversationRecordState"];
  readonly mappedDeliveredRecordAdmissionReason: PondConversationRecordAdmissionAssessment["reason"];
  readonly satisfiedChecks: readonly PondDeliveryCandidateCheck[];
  readonly unsatisfiedChecks: readonly PondDeliveryCandidateCheck[];
  // The all-false ceiling: a prepared delivery candidate is a decision to
  // record intent, nothing more. It never transports or dispatches, never
  // establishes a grant, a consequence, an execution, a task acceptance,
  // an agreement, a membership or admission, a cognition runtime, a
  // receipt, a scope, a credential, a PrincipalId authorization, memory
  // content, or current truth (agent-to-agent L29, L189, L201-205;
  // scope-sov L54-60; delegated-authority L325-333; runtime-allocation
  // L481).
  readonly deliveryPerformsTransportOrDispatch: false;
  readonly deliveryEstablishesGrant: false;
  readonly deliveryEstablishesConsequenceOrExecution: false;
  readonly deliveryEstablishesAcceptanceOrTaskAgreement: false;
  readonly deliveryEstablishesAuthorityFromProse: false;
  readonly deliveryEstablishesMembershipOrAdmission: false;
  readonly deliveryEstablishesAgentCognitionRuntime: false;
  readonly deliveryReceiptAdmitted: false;
  readonly deliveryEstablishesScope: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

// The declared delivery-destination vocabulary: the D-P16 declared
// conversation vocabulary, re-exported by identity. Naming a ref here
// declares it a valid destination for a delivery candidate only — never
// an admission, never a capability, never membership (scope-sov L54-60;
// agent-to-agent L118-129). The selftest ties this object identity to the
// frozen D-P16 constant.
export const POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS =
  POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS;

// Keys whose presence in a delivery candidate or its decision would mean
// a dispatched or sent message, a delivery receipt, an agent task
// acceptance, or any frozen session-side class entered the decision as
// data. The frozen D-P16 inventory plus the four delivery keys this lane
// exists to refuse. The exact-key deep walk means the cut's own longer
// key names are unaffected mechanically.
export const POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS = Object.freeze([
  ...POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS,
  "dispatchedMessage",
  "sentMessage",
  "deliveryReceipt",
  "agentTaskAcceptance",
] as const);

const deliveryCandidateChecks = Object.freeze([
  "delivery_candidate_well_formed",
  "delivery_candidate_bound_to_receiver_held_principal",
  "delivery_basis_receiver_recorded_not_inferred",
  "delivery_destination_declared_in_conversation_vocabulary",
  "delivery_destination_bound_to_delivered_record",
  "delivered_conversation_record_reinspected_admitted_session_scoped",
  "delivery_intent_within_current_session_scope",
  "live_session_read_gate_reinspected_live_activated_and_fresh",
  "delivery_refusal_postures_complete",
  "delivery_intent_own_freshness_within_declared_maximum_age",
] as const satisfies readonly PondDeliveryCandidateCheck[]);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object" && !Array.isArray(value)
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

const hasForbiddenKey = (
  value: unknown,
  forbidden: readonly string[],
): boolean => {
  const stack: unknown[] = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
};

const wellFormedPrincipalRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("principal:") &&
  value.length > "principal:".length;

const safeNonNegativeInteger = (value: unknown): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0;

// The D-P2 freshness diagnosis, reimplemented with the same ordering and
// literals over the delivery-intent metadata: metadata, then evaluation
// time, then maximum age, then future time; the fresh boundary is
// inclusive. A diagnosis is a diagnosis, never an admission.
const diagnoseIntentFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.recorded_at_epoch_ms) ||
    checked.freshness_basis !== "delivery_intent_event_time_only" ||
    checked.currentness_posture !== "not_established_consumer_must_evaluate"
  )
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null,
    });
  if (!safeNonNegativeInteger(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null,
    });
  if (!safeNonNegativeInteger(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null,
    });
  const recordedAt = checked.recorded_at_epoch_ms as number;
  if (recordedAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - recordedAt;
  return Object.freeze(
    age <= (maximumAgeMs as number)
      ? {
          state: "fresh",
          reason: "within_declared_maximum_age",
          observationAgeMs: age,
        }
      : {
          state: "stale",
          reason: "declared_maximum_age_expired",
          observationAgeMs: age,
        },
  );
};

const deliveryAudienceVocabulary = [
  "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
];
const deliveryTransportVocabulary = [
  "no_transport_performed_dispatch_refused_until_its_own_lane",
];
const deliveryConsequenceVocabulary = [
  "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
];
const deliveryAcceptanceVocabulary = [
  "delivery_equips_no_task_acceptance_or_agreement",
];
const deliveryEvidenceVocabulary = [
  "no_receipt_claimed_receipt_requires_its_own_governed_lane",
];
const deliveryAuthorityVocabulary = [
  "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
];

// The six declarative-refusal posture fields: each field must carry a
// string in its own class for the record to be validly shaped, and the
// dedicated posture check below refuses every non-complete arm at the
// proof-incomplete cause.
const refusalPosturesAllValidVocabulary = (
  candidateValue: Record<string, unknown>,
): boolean =>
  [
    [deliveryAudienceVocabulary, candidateValue.deliveryAudiencePosture],
    [deliveryTransportVocabulary, candidateValue.deliveryTransportPosture],
    [
      deliveryConsequenceVocabulary,
      candidateValue.deliveryConsequencePosture,
    ],
    [
      deliveryAcceptanceVocabulary,
      candidateValue.deliveryAcceptancePosture,
    ],
    [deliveryEvidenceVocabulary, candidateValue.deliveryEvidencePosture],
    [deliveryAuthorityVocabulary, candidateValue.deliveryAuthorityPosture],
  ].every(([vocabulary, value]) =>
    (vocabulary as readonly string[]).includes(String(value)),
  );

const refusalPosturesComplete = (candidateValue: Record<string, unknown>) =>
  candidateValue.deliveryAudiencePosture ===
    "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model" &&
  candidateValue.deliveryTransportPosture ===
    "no_transport_performed_dispatch_refused_until_its_own_lane" &&
  candidateValue.deliveryConsequencePosture ===
    "delivery_informs_receivers_evaluate_independently_no_consequence_authorized" &&
  candidateValue.deliveryAcceptancePosture ===
    "delivery_equips_no_task_acceptance_or_agreement" &&
  candidateValue.deliveryEvidencePosture ===
    "no_receipt_claimed_receipt_requires_its_own_governed_lane" &&
  candidateValue.deliveryAuthorityPosture ===
    "delivery_grants_no_authority_membership_capability_or_cognition_runtime";

// Valid vocabulary shapes only — candidate validity, not candidate
// admission. The delivered conversation copy inside the candidate is the
// re-run's material, not this check's: it must be present as a record
// object, and its full admission validation happens only in the re-run,
// whose conclusion (admitted or not) is carried verbatim as the mapped
// echo. The delivered copy is never re-stamped here and never repaired.
const validDeliveryCandidate = (value: unknown): boolean => {
  const candidateValue = record(value);
  const intentMetadata = record(candidateValue?.deliveryIntentMetadata);
  return (
    candidateValue !== null &&
    exactKeys(candidateValue, [
      "contractVersion",
      "kind",
      "principalRef",
      "deliveryBasis",
      "deliveredConversationRecord",
      "addressedAgentRef",
      "deliveryIntentMetadata",
      "deliveryAudiencePosture",
      "deliveryTransportPosture",
      "deliveryConsequencePosture",
      "deliveryAcceptancePosture",
      "deliveryEvidencePosture",
      "deliveryAuthorityPosture",
      "authority",
    ]) &&
    candidateValue.contractVersion ===
      "pond-delivery-candidate-decision-d-p17" &&
    candidateValue.kind === "pond-delivery-candidate" &&
    wellFormedPrincipalRef(candidateValue.principalRef) &&
    [
      "receiver_recorded_delivery_intent_not_inferred",
      "inferred_from_message_composition",
      "inferred_from_channel_visibility",
      "asserted_by_model_completion",
      "inferred_from_room_presence",
      "replayed_from_prior_delivery_decision",
    ].includes(String(candidateValue.deliveryBasis)) &&
    record(candidateValue.deliveredConversationRecord) !== null &&
    typeof candidateValue.addressedAgentRef === "string" &&
    candidateValue.addressedAgentRef.length > 0 &&
    intentMetadata !== null &&
    exactKeys(intentMetadata, [
      "recorded_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(intentMetadata.recorded_at_epoch_ms) &&
    intentMetadata.freshness_basis === "delivery_intent_event_time_only" &&
    intentMetadata.currentness_posture ===
      "not_established_consumer_must_evaluate" &&
    refusalPosturesAllValidVocabulary(candidateValue) &&
    candidateValue.authority === "none" &&
    !hasForbiddenKey(
      candidateValue,
      POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS,
    )
  );
};

const fullGateLegs = (input: PondDeliveryCandidateDecisionInput) =>
  ({
    establishmentRecord: input.establishmentRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp6ObservationRecord: input.dp6ObservationRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    dp10ActivationRecord: input.dp10ActivationRecord,
    receiverRetractionRecord: input.receiverRetractionRecord,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  }) as const;

const decisionAssessment = (
  reason: PondDeliveryCandidateDecisionAssessment["reason"],
  deliveryCandidateVersion: PondDeliveryCandidateDecisionAssessment["deliveryCandidateVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedEstablishment: PondMappedEstablishmentEcho,
  mappedReadGate: PondMappedReadGateEcho,
  mappedDeliveredRecord: PondMappedDeliveredRecordEcho,
  satisfiedChecks: readonly PondDeliveryCandidateCheck[],
  unsatisfiedChecks: readonly PondDeliveryCandidateCheck[],
): PondDeliveryCandidateDecisionAssessment => {
  const prepared = reason === "all_delivery_candidate_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-delivery-candidate-decision-d-p17",
    deliveryCandidateVersion,
    assessmentKind: "deterministic_supplied_delivery_candidate_decision",
    deliveryCandidateState: prepared
      ? "delivery_candidate_prepared_session_scoped_no_dispatch"
      : "delivery_candidate_not_prepared",
    reason,
    deliveryIntentFreshnessDiagnosis: diagnosis,
    mappedEstablishmentState: mappedEstablishment.state,
    mappedEstablishmentReason: mappedEstablishment.reason,
    mappedEstablishmentFreshnessDiagnosis: mappedEstablishment.diagnosis,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    mappedDeliveredRecordAdmissionState: mappedDeliveredRecord.state,
    mappedDeliveredRecordAdmissionReason: mappedDeliveredRecord.reason,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // A prepared delivery candidate records intent only, and it never
    // leaves that state: no transport or dispatch, no grant, no
    // consequence or execution, no task acceptance or agreement, no prose
    // authority, no membership or admission, no cognition runtime, no
    // receipt, no scope, no credential, no PrincipalId authorization, no
    // memory content, no current truth (agent-to-agent L29, L189,
    // L201-205; delegated-authority L325-333; runtime-allocation L481).
    deliveryPerformsTransportOrDispatch: false,
    deliveryEstablishesGrant: false,
    deliveryEstablishesConsequenceOrExecution: false,
    deliveryEstablishesAcceptanceOrTaskAgreement: false,
    deliveryEstablishesAuthorityFromProse: false,
    deliveryEstablishesMembershipOrAdmission: false,
    deliveryEstablishesAgentCognitionRuntime: false,
    deliveryReceiptAdmitted: false,
    deliveryEstablishesScope: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

// The mapped echo shapes (the D-P15/D-P16 mapped precedent — typed to
// the frozen contracts so a drift is a compile error, values carried
// verbatim from the frozen assessments). Field names stay generic; the
// frozen names the echoes read are tied through quoted-index reads in
// the builder, never re-declared as this cut's own names and never
// dotted here.
interface PondMappedEstablishmentEcho {
  readonly state: PondLiveSessionEstablishmentAssessment["sessionEstablishmentState"];
  readonly reason: PondLiveSessionEstablishmentAssessment["reason"];
  readonly diagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
}

interface PondMappedReadGateEcho {
  readonly state: PondLiveSessionReadGateAssessment["liveSessionReadGateState"];
  readonly reason: PondLiveSessionReadGateAssessment["reason"];
  readonly diagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
}

interface PondMappedDeliveredRecordEcho {
  readonly state: PondConversationRecordAdmissionAssessment["conversationRecordState"];
  readonly reason: PondConversationRecordAdmissionAssessment["reason"];
}

export function assessPondDeliveryCandidateDecision(
  input: PondDeliveryCandidateDecisionInput,
): PondDeliveryCandidateDecisionAssessment {
  // The fail-closed gate on the input object itself: garbage never throws
  // — a non-object input degrades to an empty record the validation and
  // leg re-runs refuse honestly (the D-P8 fail-closed discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondDeliveryCandidateDecisionInput;
  // The echoes are computed on every arm, before any cause is chosen: a
  // broken leg never unbinds the receiver's records, and an invalid arm
  // still diagnoses (D-P13 echo discipline). Both the establishment
  // re-run and the read-gate re-run go through this contract's own seam
  // (evidence-activation L109 — the independent inspection IS the
  // re-run); the gate re-run itself re-runs the whole frozen D-P5…
  // D-P10 chain inside it, and the delivered-record re-run below re-runs
  // them again over the delivered copy through its own frozen seam.
  const gateLegs = fullGateLegs(input);
  const establishmentLeg = assessPondLiveSessionEstablishment(gateLegs);
  const readGateLeg = assessPondLiveSessionReadGate({
    readGateRecord: input.readGateRecord,
    ...gateLegs,
  });
  const mappedEstablishment: PondMappedEstablishmentEcho = {
    state: establishmentLeg["sessionEstablishmentState"],
    reason: establishmentLeg.reason,
    diagnosis: establishmentLeg["establishmentFreshnessDiagnosis"],
  };
  const mappedReadGate: PondMappedReadGateEcho = {
    state: readGateLeg["liveSessionReadGateState"],
    reason: readGateLeg.reason,
    diagnosis: readGateLeg["readGateFreshnessDiagnosis"],
  };
  // The delivered-record re-run runs on every arm too — the delivered
  // copy rides the same re-timed evaluation pair and retraction record
  // the legs carry (the design-B re-timing precedent), so a not-currently-
  // admitted record is readable at its own mapped echo even where no
  // candidate cause points at it.
  const deliveredRecord = record(
    record(input.deliveryCandidate)?.["deliveredConversationRecord"],
  ) ?? null;
  const deliveredRecordLeg = assessPondConversationRecordAdmission({
    conversationRecord: deliveredRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    readGateRecord: input.readGateRecord,
    establishmentRecord: input.establishmentRecord,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp6ObservationRecord: input.dp6ObservationRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    dp10ActivationRecord: input.dp10ActivationRecord,
    receiverRetractionRecord: input.receiverRetractionRecord,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  });
  const mappedDeliveredRecord: PondMappedDeliveredRecordEcho = {
    state: deliveredRecordLeg["conversationRecordState"],
    reason: deliveredRecordLeg.reason,
  };
  // The D-P16 fallback pattern: diagnose the raw evaluation pair even
  // when the candidate never becomes valid, so every arm carries an
  // honest intent diagnosis.
  const fallbackDiagnosis = diagnoseIntentFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validDeliveryCandidate(input.deliveryCandidate))
    return decisionAssessment(
      "delivery_candidate_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      mappedDeliveredRecord,
      [],
      deliveryCandidateChecks,
    );
  const candidateValue = input.deliveryCandidate as Record<string, unknown>;

  // The delivery intent's own freshness first — an expired or future
  // intent event refuses before the legs are read, and the echoes stay
  // readable.
  const intentDiagnosis = diagnoseIntentFreshness(
    (candidateValue["deliveryIntentMetadata"] as Record<string, unknown>) ?? null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (intentDiagnosis.state !== "fresh")
    return decisionAssessment(
      "delivery_intent_not_session_current",
      "pond-delivery-candidate-decision-d-p17",
      intentDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      mappedDeliveredRecord,
      [],
      deliveryCandidateChecks,
    );

  // The live read gate, re-run fresh through the seam above: a closed,
  // refused, or unfresh gate prepares no delivery candidate — the
  // session the intent rides must be live right now, not was established
  // once.
  if (
    readGateLeg["liveSessionReadGateState"] !==
      "live_session_scoped_single_principal_structural_reads_live_activated"
  )
    return decisionAssessment(
      "live_session_read_gate_not_live_activated_refused_or_not_fresh",
      "pond-delivery-candidate-decision-d-p17",
      intentDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      mappedDeliveredRecord,
      [],
      deliveryCandidateChecks,
    );

  // A delivered record that is not currently admitted can never carry a
  // delivery candidate — the re-run's conclusion is the verdict, and its
  // mapped echo stays readable.
  if (
    deliveredRecordLeg["conversationRecordState"] !==
    "conversation_record_admitted_session_scoped_no_delivery"
  )
    return decisionAssessment(
      "delivered_record_not_currently_admitted",
      "pond-delivery-candidate-decision-d-p17",
      intentDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      mappedDeliveredRecord,
      [],
      deliveryCandidateChecks,
    );

  // Session-scope binding for the intent event: the recorded intent must
  // postdate both the current session's establishment event and the
  // delivered record's own composition event — an intent recorded from an
  // earlier session instance, or from before the composition it would
  // deliver, never enters the current scope. The delivered-record re-run
  // above validated the delivered copy, so its metadata is read through
  // that validated record; the establishment metadata likewise through
  // its validated re-run.
  const reestablishmentMetadata = record(
    (input.establishmentRecord as Record<string, unknown>)["establishmentMetadata"],
  );
  const deliveredMetadata = record(
    (candidateValue["deliveredConversationRecord"] as Record<string, unknown>)[
      "conversationRecordMetadata"
    ],
  );
  const recordedAt = (candidateValue["deliveryIntentMetadata"] as Record<string, unknown>)[
    "recorded_at_epoch_ms"
  ] as number;
  const composedAt = (deliveredMetadata ?? {})["composed_at_epoch_ms"] as
    | number
    | undefined;
  const establishmentEvent = reestablishmentMetadata?.["established_at_epoch_ms"] as
    | number
    | undefined;
  if (
    typeof establishmentEvent !== "number" ||
    typeof composedAt !== "number" ||
    typeof recordedAt !== "number" ||
    recordedAt < establishmentEvent ||
    recordedAt < composedAt
  )
    return decisionAssessment(
      "delivery_intent_not_of_the_current_session_scope",
      "pond-delivery-candidate-decision-d-p17",
      intentDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      mappedDeliveredRecord,
      [],
      deliveryCandidateChecks,
    );

  // The declared delivery-destination vocabulary: a candidate addressed
  // outside the frozen declared conversation vocabulary refuses at its
  // own dedicated cause — the receiver-recorded audience is never an
  // inferred one (scope-sov L54-60).
  const destinationDeclared = (
    POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS as readonly string[]
  ).includes(candidateValue.addressedAgentRef as string);
  if (!destinationDeclared)
    return decisionAssessment(
      "delivery_destination_not_declared",
      "pond-delivery-candidate-decision-d-p17",
      intentDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      mappedDeliveredRecord,
      [],
      deliveryCandidateChecks,
    );

  // The remaining declarative checks, evaluated honestly over the
  // validated candidate: the refused bases and the destination-vs-record
  // tie fold here with their unsatisfied check names readable (L49-55 —
  // every leg green except the declarative checks that failed), never
  // behind a defensive literal.
  const deliveredRecordValue = candidateValue[
    "deliveredConversationRecord"
  ] as Record<string, unknown>;
  const values = [
    true,
    candidateValue.principalRef === input.receiverHeldPrincipalRef &&
      wellFormedPrincipalRef(input.receiverHeldPrincipalRef),
    candidateValue.deliveryBasis ===
      "receiver_recorded_delivery_intent_not_inferred",
    destinationDeclared,
    candidateValue.addressedAgentRef ===
      deliveredRecordValue["addressedAgentRef"],
    mappedDeliveredRecord.state ===
      "conversation_record_admitted_session_scoped_no_delivery",
    typeof establishmentEvent === "number" &&
      typeof composedAt === "number" &&
      recordedAt >= establishmentEvent &&
      recordedAt >= composedAt,
    readGateLeg["liveSessionReadGateState"] ===
      "live_session_scoped_single_principal_structural_reads_live_activated" &&
      readGateLeg["readGateFreshnessDiagnosis"].state === "fresh",
    refusalPosturesComplete(candidateValue),
    intentDiagnosis.state === "fresh",
  ];
  const satisfied = deliveryCandidateChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = deliveryCandidateChecks.filter(
    (_, index) => values[index] !== true,
  );
  return decisionAssessment(
    unsatisfied.length === 0
      ? "all_delivery_candidate_checks_satisfied"
      : "receiver_delivery_candidate_proof_incomplete",
    "pond-delivery-candidate-decision-d-p17",
    intentDiagnosis,
    mappedEstablishment,
    mappedReadGate,
    mappedDeliveredRecord,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. A prepared delivery candidate is
// an intent-recording fact only; it never dispatches, never establishes a
// grant, consequence, acceptance, membership, admission, cognition
// runtime, receipt, scope, credential, authorization, memory content, or
// current truth.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP17Invariant_ChecksExact = Assert<
  Equal<
    PondDeliveryCandidateCheck,
    | "delivery_candidate_well_formed"
    | "delivery_candidate_bound_to_receiver_held_principal"
    | "delivery_basis_receiver_recorded_not_inferred"
    | "delivery_destination_declared_in_conversation_vocabulary"
    | "delivery_destination_bound_to_delivered_record"
    | "delivered_conversation_record_reinspected_admitted_session_scoped"
    | "delivery_intent_within_current_session_scope"
    | "live_session_read_gate_reinspected_live_activated_and_fresh"
    | "delivery_refusal_postures_complete"
    | "delivery_intent_own_freshness_within_declared_maximum_age"
  >
>;
export type PondStageDP17Invariant_StatesExact = Assert<
  Equal<
    PondDeliveryCandidateDecisionAssessment["deliveryCandidateState"],
    | "delivery_candidate_not_prepared"
    | "delivery_candidate_prepared_session_scoped_no_dispatch"
  >
>;
export type PondStageDP17Invariant_ReasonsExact = Assert<
  Equal<
    PondDeliveryCandidateDecisionAssessment["reason"],
    | "delivery_candidate_invalid"
    | "delivery_intent_not_session_current"
    | "live_session_read_gate_not_live_activated_refused_or_not_fresh"
    | "delivered_record_not_currently_admitted"
    | "delivery_intent_not_of_the_current_session_scope"
    | "delivery_destination_not_declared"
    | "receiver_delivery_candidate_proof_incomplete"
    | "all_delivery_candidate_checks_satisfied"
  >
>;
export type PondStageDP17Invariant_MappedEstablishmentStateTiedToDP15 = Assert<
  Equal<
    PondDeliveryCandidateDecisionAssessment["mappedEstablishmentState"],
    PondLiveSessionEstablishmentAssessment["sessionEstablishmentState"]
  >
>;
export type PondStageDP17Invariant_MappedEstablishmentReasonTiedToDP15 = Assert<
  Equal<
    PondDeliveryCandidateDecisionAssessment["mappedEstablishmentReason"],
    PondLiveSessionEstablishmentAssessment["reason"]
  >
>;
export type PondStageDP17Invariant_MappedReadGateStateTiedToDP15Gate = Assert<
  Equal<
    PondDeliveryCandidateDecisionAssessment["mappedReadGateState"],
    PondLiveSessionReadGateAssessment["liveSessionReadGateState"]
  >
>;
export type PondStageDP17Invariant_MappedReadGateReasonTiedToDP15Gate = Assert<
  Equal<
    PondDeliveryCandidateDecisionAssessment["mappedReadGateReason"],
    PondLiveSessionReadGateAssessment["reason"]
  >
>;
export type PondStageDP17Invariant_MappedDeliveredRecordStateTiedToDP16 = Assert<
  Equal<
    PondDeliveryCandidateDecisionAssessment["mappedDeliveredRecordAdmissionState"],
    PondConversationRecordAdmissionAssessment["conversationRecordState"]
  >
>;
export type PondStageDP17Invariant_MappedDeliveredRecordReasonTiedToDP16 = Assert<
  Equal<
    PondDeliveryCandidateDecisionAssessment["mappedDeliveredRecordAdmissionReason"],
    PondConversationRecordAdmissionAssessment["reason"]
  >
>;
export type PondStageDP17Invariant_DeliveryNeverDispatchesGrantsAcceptsOrClaims =
  Assert<
    Equal<
      [
        PondDeliveryCandidateDecisionAssessment["deliveryPerformsTransportOrDispatch"],
        PondDeliveryCandidateDecisionAssessment["deliveryEstablishesGrant"],
        PondDeliveryCandidateDecisionAssessment["deliveryEstablishesConsequenceOrExecution"],
        PondDeliveryCandidateDecisionAssessment["deliveryEstablishesAcceptanceOrTaskAgreement"],
        PondDeliveryCandidateDecisionAssessment["deliveryEstablishesAuthorityFromProse"],
        PondDeliveryCandidateDecisionAssessment["deliveryEstablishesMembershipOrAdmission"],
        PondDeliveryCandidateDecisionAssessment["deliveryEstablishesAgentCognitionRuntime"],
        PondDeliveryCandidateDecisionAssessment["deliveryReceiptAdmitted"],
        PondDeliveryCandidateDecisionAssessment["deliveryEstablishesScope"],
        PondDeliveryCandidateDecisionAssessment["credentialAdmitted"],
        PondDeliveryCandidateDecisionAssessment["principalIdAcceptedAsAuthorization"],
        PondDeliveryCandidateDecisionAssessment["personalMemoryContentAdmitted"],
        PondDeliveryCandidateDecisionAssessment["currentTruthAdmitted"],
        PondDeliveryCandidateDecisionAssessment["runtimeActivationPosture"],
        PondDeliveryCandidateDecisionAssessment["authority"],
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        "not_included",
        "none",
      ]
    >
  >;
export type PondStageDP17Invariant_NoForbiddenCandidateKeys = Assert<
  HasAnyKey<PondDeliveryCandidate, (typeof POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP17Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondDeliveryCandidateDecisionAssessment, (typeof POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP17Invariant_DeclaredDestinationsTiedToDP16 = Assert<
  Equal<
    (typeof POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS)[number],
    (typeof POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS)[number]
  >
>;