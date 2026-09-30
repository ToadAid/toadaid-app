// Stage D-P21: the agent-reply lane — receiver-recorded reply-request
// decisions over admitted D-P16 conversation records, plus the
// standing claimed-reply wall declared in pond-claimed-agent-reply-
// refusal.ts and the provider-selection decision declared in pond-
// cognition-provider-decision.ts.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/agent-to-agent-messaging-and-delivery-
// contract.md L41 and L91 (the ONLY occurrences of "reply" in law — a
// message "may carry … a reply/correlation reference" and the envelope
// field `reply_to`: correlation vocabulary, never a reply lifecycle),
// L25 ("A message may request a capability. The request itself grants
// nothing."), L29 ("A message may inform. A message does not authorize
// a consequence."), L98-102 (the broad message classes — no REPLY class
// exists, and L102: "no authority-bearing message type"), L171-187 (the
// consequence lifecycle — its second stage, "recipient reasoning" L176,
// is the only cognition-adjacent term in messaging law and is owned by
// no canonical owner; the stage order puts recipient reasoning AFTER a
// delivered request, which is a recipient-side stage this cut cannot
// occupy: no inbound intake exists — the D-P20 wall refuses it — and no
// recipient runtime exists, so the request-for-reply is recorded
// sender-side over the receiver's own composition; the future runtime
// cut moves reply evaluation to the recipient side), L189 ("The two
// lifecycles must not collapse"), L236-250 (the deferral list — reply
// composition is NOT on it: it is simply unaddressed by law; no
// cognition owner is named anywhere, and agent-to-agent reply is named
// in no ROADMAP wave), L254 ("Delivery may carry governed information to
// an eligible audience. It never converts a message, identity, or
// request into authority to cause a consequence."), contracts/agent-
// identity-and-specialist-admission-contract.md L73-77 ("Principal is
// not agent", "Agent identity is not authority", "Authentication is not
// authorization", "Provider session is not agent — ChatGPT, Codex,
// Claude, API, local-model, and other reasoning sessions do not
// automatically create an AgentId"), L112 ("Declared capability is not
// granted capability"), L116-118 (authority is inherited from nothing —
// not from a provider session, a prior receipt or action, an A2A
// message, MCP discovery, or an attestation), L133 (remote external
// agents default to no local direct authority), blueprints/governed-
// runtime-component-allocation.md L101 (reasoning != authorization),
// L448 (a reasoning-client row must not own authority, identity, or
// consequence permission), L498 ("Advisory outputs include plans,
// analyses, proposed artifacts, messages, attestations … State-changing
// outputs are limited to consequences separately admitted by current
// governance" — the ceiling any future reply text lives under),
// blueprints/community-agent-fabric.md L321 ("informational responses
// and bounded summaries" — the only law vocabulary for a conversational
// agent response, none of which this cut can produce) and L329 (those
// outputs are advisory or evidentiary unless a separate consequence
// lifecycle authorizes and executes an effect),
// contracts/trusted-channel-separation-contract.md L28, L87-100, L160
// (operator input may establish a requested intent and supplied content;
// "No prompt, retrieved document, conversation summary, or model
// completion may directly grant authority"), and L49-55 and L109 of
// contracts/evidence-activation-contract.md (the independent inspection
// IS the re-run — on every arm).
//
// Recorded law silences. No canonical law defines a reply-composition
// lifecycle, a reply-request record, a composer, a REPLY message class,
// a cognition runtime, or a cognition owner; reply composition is not
// deferred by L236-250 — it is simply unaddressed. Every literal below
// is a receiver-recorded app-side decision, recorded here rather than
// in a law amendment.
//
// What the cut performs. The receiver records ONE reply request over a
// conversation record that is CURRENTLY admitted at the request's own
// evaluation instant. The ceremony re-runs — through its own seam — the
// frozen D-P16 conversation-record admission over the SAME record legs
// and the SAME re-timed evaluation pair (the D-P20 transport-policy
// mechanism one lane earlier: D-P20 re-ran D-P17; D-P21 re-runs D-P16),
// and that re-run re-runs the frozen D-P15 establishment chain inside
// it. A composition that is not currently admitted can never carry a
// reply request. NO reply is composed by any arm of this contract — the
// recorded state's own literal says so (`no_reply_composed`), and no
// composed state exists in the state set: a future cognition-runtime cut
// swaps the refusal cause for a composed reply (the runway). The
// request carries no destination of its own — the addressed agent flows
// only through the requested composition's own addressed agent — and it
// echoes no reply text, because no reply text exists.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type { PondConversationRecordAdmissionAssessment } from "./pond-conversation-record-admission.js";
import type { PondConversationRecord } from "./pond-conversation-record-admission.js";
import {
  assessPondConversationRecordAdmission,
} from "./pond-conversation-record-admission.ts";
import { POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS } from "./pond-transport-policy-decision.ts";

// The reply-request basis vocabulary: one true receiver-recorded basis
// and five refused bases. A request is a current stance of the receiving
// side — nothing in the composition itself, a model completion, a
// delivered receipt, a provider session, or a prior request may record
// it here.
export type PondReplyRequestBasis =
  | "receiver_recorded_reply_request_not_inferred"
  | "inferred_from_conversation_composition"
  | "asserted_by_model_completion"
  | "inferred_from_delivered_receipt"
  | "inferred_from_provider_session"
  | "replayed_from_prior_reply_request";

// The receiver-recorded reply-request event metadata: the request event's
// own time source, its freshness basis (event time only — the D-P2
// ordering), and the explicit currentness posture: a recorded request is
// NOT established — every consumer must evaluate.
export interface PondReplyRequestEventMetadata {
  readonly requested_at_epoch_ms: number;
  readonly freshness_basis: "reply_request_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

// The receiver-recorded reply request: 14 exact keys. The requested
// conversation record rides INSIDE the request (the D-P17 delivered-copy
// precedent, sender-side) — dv/kind preserved verbatim, never
// re-stamped. No destination field exists here — the addressed agent
// flows only through the requested composition's own addressed agent.
export interface PondReplyRequest {
  readonly contractVersion: "pond-reply-request-decision-d-p21";
  readonly kind: "pond-reply-request";
  readonly principalRef: string;
  readonly replyRequestBasis: PondReplyRequestBasis;
  readonly requestedConversationRecord: PondConversationRecord;
  readonly replyRequestMetadata: PondReplyRequestEventMetadata;
  readonly replyRequestCompositionPosture: "reply_request_requests_a_reply_none_is_composed_request_grants_nothing";
  readonly replyRequestCognitionPosture: "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none";
  readonly replyRequestProviderPosture: "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane";
  readonly replyRequestRunwayPosture: "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply";
  readonly replyRequestLifecyclePosture: "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized";
  readonly replyRequestEvidencePosture: "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt";
  readonly replyRequestAuthorityPosture: "reply_request_grants_no_authority_membership_or_admission";
  readonly authority: "none";
}

// Receiver-owned reply-request checks (L49-55).
export type PondReplyRequestCheck =
  | "reply_request_record_well_formed"
  | "reply_request_bound_to_receiver_held_principal"
  | "reply_request_basis_receiver_recorded_not_inferred"
  | "requested_conversation_record_currently_admitted_reassessed_session_scoped"
  | "live_session_read_gate_reinspected_live_activated_and_fresh"
  | "reply_request_event_within_current_session_scope"
  | "reply_request_event_own_freshness_within_declared_maximum_age"
  | "reply_request_refusal_postures_complete";

// The reply-request decision input: 14 exact keys — the D-P16
// conversation-record admission input with the conversational-record slot
// occupied by the request record itself (the D-P17 structural position:
// the requested composition rides inside the request). One evaluation
// pair serves the request event's freshness and every leg's re-run
// inside the reassessment.
export interface PondReplyRequestDecisionInput {
  readonly replyRequest: unknown;
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

// The reply-request decision assessment.
export interface PondReplyRequestDecisionAssessment {
  readonly contractVersion: "pond-reply-request-decision-d-p21";
  readonly replyRequestDecisionVersion:
    | "pond-reply-request-decision-d-p21"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_reply_request_decision";
  readonly replyRequestState:
    | "reply_request_not_recorded"
    | "reply_request_recorded_session_scoped_no_reply_composed";
  readonly reason:
    | "reply_request_record_invalid"
    | "requested_conversation_record_not_currently_admitted"
    | "reply_request_event_not_session_current"
    | "reply_request_event_not_of_the_current_session_scope"
    | "receiver_reply_request_proof_incomplete"
    | "all_reply_request_checks_satisfied";
  readonly replyRequestEventFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // Mapped echo fields: the frozen D-P16 re-run's own fields carried
  // verbatim on every arm — the requested composition's state, reason,
  // and own record diagnosis, and ITS mapped echoes (the D-P15
  // establishment and read gate) — so a refusal two depths down stays
  // readable at this cut without new literals for it. Field names stay
  // this cut's own; the frozen carrier names are never re-declared here.
  readonly mappedConversationState: PondConversationRecordAdmissionAssessment["conversationRecordState"];
  readonly mappedConversationReassessmentReason: PondConversationRecordAdmissionAssessment["reason"];
  readonly mappedConversationRecordFreshnessDiagnosis: PondConversationRecordAdmissionAssessment["conversationRecordFreshnessDiagnosis"];
  readonly mappedEstablishmentState: PondConversationRecordAdmissionAssessment["mappedEstablishmentState"];
  readonly mappedEstablishmentReason: PondConversationRecordAdmissionAssessment["mappedEstablishmentReason"];
  readonly mappedEstablishmentFreshnessDiagnosis: PondConversationRecordAdmissionAssessment["mappedEstablishmentFreshnessDiagnosis"];
  readonly mappedReadGateState: PondConversationRecordAdmissionAssessment["mappedReadGateState"];
  readonly mappedReadGateReason: PondConversationRecordAdmissionAssessment["mappedReadGateReason"];
  readonly mappedReadGateFreshnessDiagnosis: PondConversationRecordAdmissionAssessment["mappedReadGateFreshnessDiagnosis"];
  readonly satisfiedChecks: readonly PondReplyRequestCheck[];
  readonly unsatisfiedChecks: readonly PondReplyRequestCheck[];
  // The retention posture: a request is module state of process lifetime
  // with no indefinite retention, and it re-assesses honestly after
  // retraction — the D-P20 policy posture (a request is session-scoped
  // stance whose applicability the reassessment governs; nothing
  // downstream reads it, and frozen survival would dress a dead request
  // as a live ask).
  readonly replyRequestRetentionPosture: "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction";
  // The all-false ceiling: a recorded request is a sender-side ask,
  // nothing more. It never establishes reply composition, a cognition
  // runtime, a provider selection, agent identity or admission, a grant,
  // a consequence or execution, an acceptance or agreement, prose
  // authority, membership or room presence, or a scope; it echoes no
  // reply text; it is consumed by no runtime or composer this cut; and
  // it admits no credential, no PrincipalId authorization, no personal
  // memory content, and no current truth (agent-to-agent L25, L29,
  // L102, L176, L189, L236-250, L254; admission L73-78, L112, L116-118,
  // L133; allocation L101, L448, L498; fabric L321, L329; trusted-
  // channel L87-100, L160).
  readonly replyRequestEstablishesReplyComposition: false;
  readonly replyRequestEstablishesCognitionRuntime: false;
  readonly replyRequestEstablishesProviderSelection: false;
  readonly replyRequestEstablishesAgentIdentityOrAdmission: false;
  readonly replyRequestEstablishesGrant: false;
  readonly replyRequestEstablishesConsequenceOrExecution: false;
  readonly replyRequestEstablishesAcceptanceOrTaskAgreement: false;
  readonly replyRequestEstablishesAuthorityFromProse: false;
  readonly replyRequestEstablishesMembershipOrRoomPresence: false;
  readonly replyRequestEstablishesScope: false;
  readonly replyRequestEchoesReplyText: false;
  readonly replyRequestConsumedByAnyRuntimeOrComposerThisCut: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

// The forbidden-key inventory: the frozen D-P20 union plus the four
// reply-lane keys this lane exists to refuse — reply text as a record
// field, a composed-reply record object, a claimed-reply record object,
// and a provider credential would each be exactly what the runway must
// never materialize as data (cognition is not a provider account).
export const POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS = Object.freeze([
  ...POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS,
  "agentReplyText",
  "composedAgentReply",
  "claimedAgentReply",
  "providerCredential",
] as const);

const replyRequestChecks = Object.freeze([
  "reply_request_record_well_formed",
  "reply_request_bound_to_receiver_held_principal",
  "reply_request_basis_receiver_recorded_not_inferred",
  "requested_conversation_record_currently_admitted_reassessed_session_scoped",
  "live_session_read_gate_reinspected_live_activated_and_fresh",
  "reply_request_event_within_current_session_scope",
  "reply_request_event_own_freshness_within_declared_maximum_age",
  "reply_request_refusal_postures_complete",
] as const satisfies readonly PondReplyRequestCheck[]);

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
// literals over the request-event metadata: metadata, then evaluation
// time, then maximum age, then future time; the fresh boundary is
// inclusive. A diagnosis is a diagnosis, never an admission.
const diagnoseReplyRequestFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.requested_at_epoch_ms) ||
    checked.freshness_basis !== "reply_request_event_time_only" ||
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
  const requestedAt = checked.requested_at_epoch_ms as number;
  if (requestedAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - requestedAt;
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

const replyRequestBasisVocabulary = [
  "receiver_recorded_reply_request_not_inferred",
  "inferred_from_conversation_composition",
  "asserted_by_model_completion",
  "inferred_from_delivered_receipt",
  "inferred_from_provider_session",
  "replayed_from_prior_reply_request",
];

// The seven declarative-refusal posture fields: each field must carry its
// exact posture literal for the request record to be validly shaped, and
// the posture completeness rides inside the well-formed check and the
// declarative check below.
const posturesComplete = (recordValue: Record<string, unknown>) =>
  recordValue.replyRequestCompositionPosture ===
    "reply_request_requests_a_reply_none_is_composed_request_grants_nothing" &&
  recordValue.replyRequestCognitionPosture ===
    "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none" &&
  recordValue.replyRequestProviderPosture ===
    "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane" &&
  recordValue.replyRequestRunwayPosture ===
    "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply" &&
  recordValue.replyRequestLifecyclePosture ===
    "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized" &&
  recordValue.replyRequestEvidencePosture ===
    "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt" &&
  recordValue.replyRequestAuthorityPosture ===
    "reply_request_grants_no_authority_membership_or_admission";

const exactReplyRequestEventMetadata = (value: unknown): boolean => {
  const metadataValue = record(value);
  return (
    metadataValue !== null &&
    exactKeys(metadataValue, [
      "requested_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadataValue.requested_at_epoch_ms) &&
    metadataValue.freshness_basis === "reply_request_event_time_only" &&
    metadataValue.currentness_posture ===
      "not_established_consumer_must_evaluate"
  );
};

// Valid request-record shape only — record validity, not admission. The
// requested conversation record under the request is the re-run's
// material, not this check's: it must be present as a record object, and
// its full admission (currently admitted or not) happens only in the
// frozen D-P16 re-run, whose conclusion is carried verbatim as the
// mapped echo. The composition is never re-stamped here and never
// repaired (the D-P17 delivered-copy precedent, sender-side).
const validReplyRequestRecord = (value: unknown): boolean => {
  const requestValue = record(value);
  return (
    requestValue !== null &&
    exactKeys(requestValue, [
      "contractVersion",
      "kind",
      "principalRef",
      "replyRequestBasis",
      "requestedConversationRecord",
      "replyRequestMetadata",
      "replyRequestCompositionPosture",
      "replyRequestCognitionPosture",
      "replyRequestProviderPosture",
      "replyRequestRunwayPosture",
      "replyRequestLifecyclePosture",
      "replyRequestEvidencePosture",
      "replyRequestAuthorityPosture",
      "authority",
    ]) &&
    requestValue.contractVersion === "pond-reply-request-decision-d-p21" &&
    requestValue.kind === "pond-reply-request" &&
    replyRequestBasisVocabulary.includes(
      String(requestValue.replyRequestBasis),
    ) &&
    record(requestValue.requestedConversationRecord) !== null &&
    exactReplyRequestEventMetadata(requestValue.replyRequestMetadata) &&
    wellFormedPrincipalRef(requestValue.principalRef) &&
    posturesComplete(requestValue) &&
    requestValue.authority === "none" &&
    !hasForbiddenKey(requestValue, POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS)
  );
};

// The D-P16 record legs, verbatim: the request's re-run consumes the
// frozen classifier over the SAME composition the request names — the
// requested copy read out of the request record — and the gate legs the
// shell holds. The 14 D-P16 keys, never the spread.
const fullRequestedConversationLegs = (
  input: PondReplyRequestDecisionInput,
  requestedRecord: Record<string, unknown>,
) =>
  ({
    conversationRecord: requestedRecord,
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
  }) as const;

// The mapped echo shapes (the D-P20 mapped precedent — typed to the
// frozen reassessment so a drift is a compile error, values carried
// verbatim from its fields, including ITS mapped echoes verbatim).
// Field names stay generic; the frozen names the echoes read are tied
// through quoted-index reads in the builder, never re-declared as this
// cut's own names and never dotted here.
interface PondMappedConversationEcho {
  readonly state: PondConversationRecordAdmissionAssessment["conversationRecordState"];
  readonly reason: PondConversationRecordAdmissionAssessment["reason"];
  recordDiagnosis: PondConversationRecordAdmissionAssessment["conversationRecordFreshnessDiagnosis"];
}

interface PondMappedEstablishmentEcho {
  readonly state: PondConversationRecordAdmissionAssessment["mappedEstablishmentState"];
  readonly reason: PondConversationRecordAdmissionAssessment["mappedEstablishmentReason"];
  readonly diagnosis: PondConversationRecordAdmissionAssessment["mappedEstablishmentFreshnessDiagnosis"];
}

interface PondMappedReadGateEcho {
  readonly state: PondConversationRecordAdmissionAssessment["mappedReadGateState"];
  readonly reason: PondConversationRecordAdmissionAssessment["mappedReadGateReason"];
  readonly diagnosis: PondConversationRecordAdmissionAssessment["mappedReadGateFreshnessDiagnosis"];
}

const requestAssessment = (
  reason: PondReplyRequestDecisionAssessment["reason"],
  replyRequestDecisionVersion: PondReplyRequestDecisionAssessment["replyRequestDecisionVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedConversation: PondMappedConversationEcho,
  mappedEstablishment: PondMappedEstablishmentEcho,
  mappedReadGate: PondMappedReadGateEcho,
  satisfiedChecks: readonly PondReplyRequestCheck[],
  unsatisfiedChecks: readonly PondReplyRequestCheck[],
): PondReplyRequestDecisionAssessment => {
  const recorded = reason === "all_reply_request_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-reply-request-decision-d-p21",
    replyRequestDecisionVersion,
    assessmentKind: "deterministic_supplied_reply_request_decision",
    replyRequestState: recorded
      ? "reply_request_recorded_session_scoped_no_reply_composed"
      : "reply_request_not_recorded",
    reason,
    replyRequestEventFreshnessDiagnosis: diagnosis,
    mappedConversationState: mappedConversation.state,
    mappedConversationReassessmentReason: mappedConversation.reason,
    mappedConversationRecordFreshnessDiagnosis:
      mappedConversation.recordDiagnosis,
    mappedEstablishmentState: mappedEstablishment.state,
    mappedEstablishmentReason: mappedEstablishment.reason,
    mappedEstablishmentFreshnessDiagnosis: mappedEstablishment.diagnosis,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The retention posture: honest re-assessment after retraction — the
    // D-P20 policy posture (a request is session-scoped stance, not
    // frozen evidence).
    replyRequestRetentionPosture:
      "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction" as const,
    // A recorded request is a sender-side ask, nothing more (see the
    // ceiling commentary on the interface for the law anchors).
    replyRequestEstablishesReplyComposition: false,
    replyRequestEstablishesCognitionRuntime: false,
    replyRequestEstablishesProviderSelection: false,
    replyRequestEstablishesAgentIdentityOrAdmission: false,
    replyRequestEstablishesGrant: false,
    replyRequestEstablishesConsequenceOrExecution: false,
    replyRequestEstablishesAcceptanceOrTaskAgreement: false,
    replyRequestEstablishesAuthorityFromProse: false,
    replyRequestEstablishesMembershipOrRoomPresence: false,
    replyRequestEstablishesScope: false,
    replyRequestEchoesReplyText: false,
    replyRequestConsumedByAnyRuntimeOrComposerThisCut: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondReplyRequestDecision(
  input: PondReplyRequestDecisionInput,
): PondReplyRequestDecisionAssessment {
  // The fail-closed gate on the input object itself: garbage never throws
  // — a non-object input degrades to an empty record the validation and
  // re-runs refuse honestly (the D-P8 fail-closed discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondReplyRequestDecisionInput;
  // The echoes are computed on every arm, before any cause is chosen: a
  // broken request never unbinds the receiver's records, and an invalid
  // arm still diagnoses (D-P13 echo discipline). The D-P16 re-run goes
  // through this contract's own seam (evidence-activation L109 — the
  // independent inspection IS the re-run; derived-evidence single-source
  // — the request consumes the canonical classifier's result): the
  // frozen D-P16 ceremony re-runs itself over the SAME composition (the
  // requested copy read out of the request) and the SAME re-timed
  // evaluation pair, and inside it the frozen D-P15 read gate and
  // establishment chain re-run again.
  const requestedRecord = record(
    (record(input.replyRequest) ?? {})["requestedConversationRecord"],
  );
  const conversationReassessment = assessPondConversationRecordAdmission({
    conversationRecord: requestedRecord,
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
  const mappedConversation: PondMappedConversationEcho = {
    state: conversationReassessment["conversationRecordState"],
    reason: conversationReassessment["reason"],
    recordDiagnosis:
      conversationReassessment["conversationRecordFreshnessDiagnosis"],
  };
  const mappedEstablishment: PondMappedEstablishmentEcho = {
    state: conversationReassessment["mappedEstablishmentState"],
    reason: conversationReassessment["mappedEstablishmentReason"],
    diagnosis:
      conversationReassessment["mappedEstablishmentFreshnessDiagnosis"],
  };
  const mappedReadGate: PondMappedReadGateEcho = {
    state: conversationReassessment["mappedReadGateState"],
    reason: conversationReassessment["mappedReadGateReason"],
    diagnosis: conversationReassessment["mappedReadGateFreshnessDiagnosis"],
  };
  // The D-P16 fallback pattern: diagnose the raw evaluation pair even
  // when the request never becomes valid, so every arm carries an honest
  // request-event diagnosis.
  const fallbackDiagnosis = diagnoseReplyRequestFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validReplyRequestRecord(input.replyRequest))
    return requestAssessment(
      "reply_request_record_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedConversation,
      mappedEstablishment,
      mappedReadGate,
      [],
      replyRequestChecks,
    );
  const requestValue = input.replyRequest as Record<string, unknown>;
  const requestEventMetadata = record(requestValue["replyRequestMetadata"]);
  const requestedAt = requestEventMetadata?.[
    "requested_at_epoch_ms"
  ] as number | undefined;

  // The request event's own diagnosis first as data: the metadata is
  // valid already, so the diagnosis (fresh or not) is honest on every
  // remaining arm — but the D-P16 re-run's verdict outranks it in the
  // ladder (a request is a sender-side stance over a composition that
  // must be currently admitted; L171-187 — the recipient-reasoning stage
  // sits inside the consequence lifecycle, never before an admitted
  // record here), so a not-currently-admitted composition refuses before
  // the event's freshness is even asked, with the event diagnosis still
  // readable.
  const requestDiagnosis = diagnoseReplyRequestFreshness(
    requestEventMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );

  // The frozen D-P16 re-run's verdict is the verdict: a composition that
  // is not currently admitted at the request's evaluation instant can
  // never carry a reply request, and the re-run's own reason (its own
  // freshness cause, its gate cause, its scope cause, its epoch or
  // addressee cause, or its own invalid cause) is carried verbatim as
  // the mapped reassessment reason — the honest echo.
  if (
    conversationReassessment["conversationRecordState"] !==
    "conversation_record_admitted_session_scoped_no_delivery"
  )
    return requestAssessment(
      "requested_conversation_record_not_currently_admitted",
      "pond-reply-request-decision-d-p21",
      requestDiagnosis,
      mappedConversation,
      mappedEstablishment,
      mappedReadGate,
      [],
      replyRequestChecks,
    );

  // The request event's own freshness. The request must postdate the
  // composition it requests a reply to (you cannot ask for a reply
  // before you have composed what the reply is to), so on the frozen
  // chain the request event is YOUNGER than every leg event — the newest-
  // event arithmetic of the later lanes does not hold here, freshness is
  // evaluated honestly on the request event alone against the shared
  // evaluation pair, and the selftest proves the isolation by ladder
  // order rather than by age arithmetic (the D-P20 policy-event honesty,
  // inverted).
  if (requestDiagnosis.state !== "fresh")
    return requestAssessment(
      "reply_request_event_not_session_current",
      "pond-reply-request-decision-d-p21",
      requestDiagnosis,
      mappedConversation,
      mappedEstablishment,
      mappedReadGate,
      [],
      replyRequestChecks,
    );

  // Session-scope binding for the request event: the recorded request
  // must postdate the current session's establishment event and the
  // composition event it names — a request recorded before the session
  // it would ride, or before the composition it would ask a reply of, is
  // not in the current scope. The re-run validated the establishment and
  // the composition above, so their metadata is read through those
  // validated forms (the D-P18 scope pattern two lanes earlier).
  const establishmentMetadata = record(
    (input.establishmentRecord as Record<string, unknown>)[
      "establishmentMetadata"
    ],
  );
  const composedAt = (
    (record(requestedRecord) ??
      {})["conversationRecordMetadata"] as Record<string, unknown>
  )["composed_at_epoch_ms"] as number | undefined;
  const establishedAt = establishmentMetadata?.[
    "established_at_epoch_ms"
  ] as number | undefined;
  if (
    typeof establishedAt !== "number" ||
    typeof composedAt !== "number" ||
    typeof requestedAt !== "number" ||
    requestedAt < establishedAt ||
    requestedAt < composedAt
  )
    return requestAssessment(
      "reply_request_event_not_of_the_current_session_scope",
      "pond-reply-request-decision-d-p21",
      requestDiagnosis,
      mappedConversation,
      mappedEstablishment,
      mappedReadGate,
      [],
      replyRequestChecks,
    );

  // The remaining declarative checks, evaluated honestly over the
  // validated record and the re-run verdict: the refused bases fold here
  // with the unsatisfied check names readable (L49-55 — every leg green
  // except the declarative checks that failed), never behind a defensive
  // literal.
  const values = [
    true,
    requestValue["principalRef"] === input.receiverHeldPrincipalRef &&
      wellFormedPrincipalRef(input.receiverHeldPrincipalRef),
    requestValue["replyRequestBasis"] ===
      "receiver_recorded_reply_request_not_inferred",
    conversationReassessment["conversationRecordState"] ===
      "conversation_record_admitted_session_scoped_no_delivery",
    conversationReassessment["mappedReadGateState"] ===
      "live_session_scoped_single_principal_structural_reads_live_activated" &&
      conversationReassessment["mappedReadGateFreshnessDiagnosis"]
        .state === "fresh",
    typeof establishedAt === "number" &&
      typeof composedAt === "number" &&
      typeof requestedAt === "number" &&
      requestedAt >= establishedAt &&
      requestedAt >= composedAt,
    requestDiagnosis.state === "fresh",
    posturesComplete(requestValue),
  ];
  const satisfied = replyRequestChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = replyRequestChecks.filter(
    (_, index) => values[index] !== true,
  );
  return requestAssessment(
    unsatisfied.length === 0
      ? "all_reply_request_checks_satisfied"
      : "receiver_reply_request_proof_incomplete",
    "pond-reply-request-decision-d-p21",
    requestDiagnosis,
    mappedConversation,
    mappedEstablishment,
    mappedReadGate,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. A recorded request is
// sender-side governance only: it never establishes reply composition, a
// cognition runtime, a provider selection, agent identity or admission,
// a grant, a consequence or execution, an acceptance or agreement, prose
// authority, membership or room presence, or a scope; it echoes no reply
// text; it is consumed by no runtime or composer this cut; and it admits
// no credential, no PrincipalId authorization, no personal memory
// content, and no current truth.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP21Invariant_ChecksExact = Assert<
  Equal<
    PondReplyRequestCheck,
    | "reply_request_record_well_formed"
    | "reply_request_bound_to_receiver_held_principal"
    | "reply_request_basis_receiver_recorded_not_inferred"
    | "requested_conversation_record_currently_admitted_reassessed_session_scoped"
    | "live_session_read_gate_reinspected_live_activated_and_fresh"
    | "reply_request_event_within_current_session_scope"
    | "reply_request_event_own_freshness_within_declared_maximum_age"
    | "reply_request_refusal_postures_complete"
  >
>;
export type PondStageDP21Invariant_StatesExact = Assert<
  Equal<
    PondReplyRequestDecisionAssessment["replyRequestState"],
    | "reply_request_not_recorded"
    | "reply_request_recorded_session_scoped_no_reply_composed"
  >
>;
export type PondStageDP21Invariant_ReasonsExact = Assert<
  Equal<
    PondReplyRequestDecisionAssessment["reason"],
    | "reply_request_record_invalid"
    | "requested_conversation_record_not_currently_admitted"
    | "reply_request_event_not_session_current"
    | "reply_request_event_not_of_the_current_session_scope"
    | "receiver_reply_request_proof_incomplete"
    | "all_reply_request_checks_satisfied"
  >
>;
export type PondStageDP21Invariant_BasisVocabularyExact = Assert<
  Equal<
    PondReplyRequestBasis,
    | "receiver_recorded_reply_request_not_inferred"
    | "inferred_from_conversation_composition"
    | "asserted_by_model_completion"
    | "inferred_from_delivered_receipt"
    | "inferred_from_provider_session"
    | "replayed_from_prior_reply_request"
  >
>;
export type PondStageDP21Invariant_EventMetadataExact = Assert<
  Equal<
    PondReplyRequestEventMetadata,
    {
      readonly requested_at_epoch_ms: number;
      readonly freshness_basis: "reply_request_event_time_only";
      readonly currentness_posture: "not_established_consumer_must_evaluate";
    }
  >
>;
export type PondStageDP21Invariant_RequestPosturesExact = Assert<
  Equal<
    PondReplyRequest,
    {
      readonly contractVersion: "pond-reply-request-decision-d-p21";
      readonly kind: "pond-reply-request";
      readonly principalRef: string;
      readonly replyRequestBasis: PondReplyRequestBasis;
      readonly requestedConversationRecord: PondConversationRecord;
      readonly replyRequestMetadata: PondReplyRequestEventMetadata;
      readonly replyRequestCompositionPosture: "reply_request_requests_a_reply_none_is_composed_request_grants_nothing";
      readonly replyRequestCognitionPosture: "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none";
      readonly replyRequestProviderPosture: "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane";
      readonly replyRequestRunwayPosture: "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply";
      readonly replyRequestLifecyclePosture: "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized";
      readonly replyRequestEvidencePosture: "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt";
      readonly replyRequestAuthorityPosture: "reply_request_grants_no_authority_membership_or_admission";
      readonly authority: "none";
    }
  >
>;
export type PondStageDP21Invariant_MappedConversationStateTiedToDP16 = Assert<
  Equal<
    PondReplyRequestDecisionAssessment["mappedConversationState"],
    PondConversationRecordAdmissionAssessment["conversationRecordState"]
  >
>;
export type PondStageDP21Invariant_MappedConversationReasonTiedToDP16 = Assert<
  Equal<
    PondReplyRequestDecisionAssessment["mappedConversationReassessmentReason"],
    PondConversationRecordAdmissionAssessment["reason"]
  >
>;
export type PondStageDP21Invariant_MappedEstablishmentThroughDP16 = Assert<
  Equal<
    PondReplyRequestDecisionAssessment["mappedEstablishmentState"],
    PondConversationRecordAdmissionAssessment["mappedEstablishmentState"]
  > extends true
    ? Equal<
        PondReplyRequestDecisionAssessment["mappedEstablishmentReason"],
        PondConversationRecordAdmissionAssessment["mappedEstablishmentReason"]
      > extends true
      ? Equal<
          PondReplyRequestDecisionAssessment["mappedEstablishmentFreshnessDiagnosis"],
          PondConversationRecordAdmissionAssessment["mappedEstablishmentFreshnessDiagnosis"]
        >
      : false
    : false
>;
export type PondStageDP21Invariant_MappedReadGateThroughDP16 = Assert<
  Equal<
    PondReplyRequestDecisionAssessment["mappedReadGateState"],
    PondConversationRecordAdmissionAssessment["mappedReadGateState"]
  > extends true
    ? Equal<
        PondReplyRequestDecisionAssessment["mappedReadGateReason"],
        PondConversationRecordAdmissionAssessment["mappedReadGateReason"]
      > extends true
      ? Equal<
          PondReplyRequestDecisionAssessment["mappedReadGateFreshnessDiagnosis"],
          PondConversationRecordAdmissionAssessment["mappedReadGateFreshnessDiagnosis"]
        >
      : false
    : false
>;
export type PondStageDP21Invariant_RequestEstablishesNothing = Assert<
  Equal<
    [
      PondReplyRequestDecisionAssessment["replyRequestEstablishesReplyComposition"],
      PondReplyRequestDecisionAssessment["replyRequestEstablishesCognitionRuntime"],
      PondReplyRequestDecisionAssessment["replyRequestEstablishesProviderSelection"],
      PondReplyRequestDecisionAssessment["replyRequestEstablishesAgentIdentityOrAdmission"],
      PondReplyRequestDecisionAssessment["replyRequestEstablishesGrant"],
      PondReplyRequestDecisionAssessment["replyRequestEstablishesConsequenceOrExecution"],
      PondReplyRequestDecisionAssessment["replyRequestEstablishesAcceptanceOrTaskAgreement"],
      PondReplyRequestDecisionAssessment["replyRequestEstablishesAuthorityFromProse"],
      PondReplyRequestDecisionAssessment["replyRequestEstablishesMembershipOrRoomPresence"],
      PondReplyRequestDecisionAssessment["replyRequestEstablishesScope"],
      PondReplyRequestDecisionAssessment["replyRequestEchoesReplyText"],
      PondReplyRequestDecisionAssessment["replyRequestConsumedByAnyRuntimeOrComposerThisCut"],
      PondReplyRequestDecisionAssessment["credentialAdmitted"],
      PondReplyRequestDecisionAssessment["principalIdAcceptedAsAuthorization"],
      PondReplyRequestDecisionAssessment["personalMemoryContentAdmitted"],
      PondReplyRequestDecisionAssessment["currentTruthAdmitted"],
      PondReplyRequestDecisionAssessment["runtimeActivationPosture"],
      PondReplyRequestDecisionAssessment["authority"],
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
      false,
      false,
      false,
      "not_included",
      "none",
    ]
  >
>;
export type PondStageDP21Invariant_NoForbiddenRequestKeys = Assert<
  HasAnyKey<PondReplyRequest, (typeof POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP21Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondReplyRequestDecisionAssessment, (typeof POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS)[number]> extends false
    ? true
    : false
>;