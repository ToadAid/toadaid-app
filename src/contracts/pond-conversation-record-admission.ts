// Stage D-P16: the conversation lane — composed-record admission over the
// live session.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/trusted-channel-separation-contract.md
// L28 (the conversation-context channel is one of the seven channel
// classes), L87-100 (operator input may establish a requested intent and
// supplied content — "The request is not itself the grant"), L102-107
// (conversation history is contextual evidence about prior turns — it
// must carry provenance and a trust epoch distinguishing legacy /
// confined-but-unverified / verified-boundary history, and it is never
// automatically canonical memory, verified evidence, or trusted
// configuration), L146 (promotion to those classes requires an explicit
// governed transformation — refused here outright), L160 ("No prompt,
// retrieved document, conversation summary, or model completion may
// directly grant authority"), and L170 (memory and conversation stay
// separate stores); contracts/agent-to-agent-messaging-contract.md L29
// ("A message may inform. A message does not authorize a consequence."),
// L133-136 (agent-authored text stays untrusted even when
// authenticated), and L207-216 (room presence is not ToadAid
// membership); blueprints/governed-runtime-component-allocation.md L481
// (operator input may never establish identity, a Grant, an approval,
// policy, or authority by prose alone); contracts/
// evidence-activation-contract.md L49-55 (completion evidence does not
// answer "Should this capability be established?") and L109 (the
// independent inspection IS the re-run through the consumer's own seam).
//
// Recorded law silences. No canonical law defines composed-record
// admission vocabulary, a conversation-surface presentation contract, a
// receiver-recorded trust-epoch mapping for app-side session records, or
// a composed-text bound — every literal below is a receiver-recorded
// app-side decision, exercised as refusal vocabulary, not as new
// authority.
//
// What the cut performs. The receiver composes a message over the live
// session established by D-P15; this ceremony records it as a
// session-scoped conversation-context record — real composed text, real
// provenance, a receiver-recorded trust epoch — gated by a fresh, live
// re-run of the frozen D-P15 read gate through this contract's own seam
// (which itself re-runs the establishment and the whole frozen D-P5…
// D-P10 chain). The record is never persisted, never delivered, and
// never promoted: delivery is its own later lane, agent reply
// composition does not exist in app or law (no cognition runtime is
// established), memory promotion needs the governed transformation law
// already names, and composed prose grants nothing (L87-100, L160: the
// request is not itself the grant). A record composed before the current
// session's establishment event — including one held from an earlier
// session instance — never re-enters the current session scope, so a
// retraction-and-re-establish cycle cannot resurrect stale conversation.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type { PondLiveSessionEstablishmentAssessment } from "./pond-live-session-establishment.js";
import { POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS } from "./pond-live-session-establishment.ts";
import { assessPondLiveSessionEstablishment } from "./pond-live-session-establishment.ts";
import type { PondLiveSessionReadGateAssessment } from "./pond-live-session-read-gate.js";
import { assessPondLiveSessionReadGate } from "./pond-live-session-read-gate.ts";

// The basis vocabulary: one true receiver-composed basis and five refused
// inference bases. A record admitted from any refused basis is exactly
// what this ceremony exists to refuse — no provider-session inference, no
// model self-assertion, no room-presence inference, no summary reuse, no
// replay out of prior history ever admits a composed record (trusted-
// channel L87-100, L102-107; agent-to-agent L29).
export type PondConversationRecordBasis =
  | "receiver_composed_into_live_session_not_inferred"
  | "inferred_from_provider_session"
  | "asserted_by_model_completion"
  | "inferred_from_room_presence"
  | "inferred_from_conversation_summary"
  | "replayed_from_prior_conversation_history";

// The receiver-recorded trust-epoch mapping of trusted-channel L102-107's
// three conversation-history classes onto this app's session records.
// Verified-boundary history: receiver-composed inside a live gated
// session — the only admissible epoch. Confined-but-unverified and
// legacy records stay valid vocabulary (a store may honestly carry them)
// but are never consumer-admissible here — the surface marks them
// inspection-only.
export type PondConversationTrustEpochPosture =
  | "verified_boundary_session_scoped"
  | "confined_but_unverified"
  | "legacy";

export interface PondConversationRecordMetadata {
  readonly composed_at_epoch_ms: number;
  readonly freshness_basis: "record_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

export interface PondConversationRecord {
  readonly contractVersion: "pond-conversation-record-admission-d-p16";
  readonly kind: "pond-conversation-record";
  readonly principalRef: string;
  readonly recordBasis: PondConversationRecordBasis;
  readonly composedRecordText: string;
  readonly addressedAgentRef: string;
  readonly conversationRecordMetadata: PondConversationRecordMetadata;
  readonly conversationTrustEpochPosture: PondConversationTrustEpochPosture;
  readonly conversationProvenancePosture: "receiver_authored_composed_in_session_not_agent_authored_not_remote";
  readonly conversationScopePosture: "session_scoped_module_state_never_persisted_scope_never_created_from_prose";
  readonly conversationDeliveryPosture: "message_informed_not_delivered_delivery_refused_until_its_own_lane";
  readonly conversationReplyPosture: "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law";
  readonly conversationMemoryPosture: "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence";
  readonly conversationAuthorityPosture: "composed_prose_grants_no_authority_membership_or_capability_no_room_membership";
  readonly authority: "none";
}

// Receiver-owned composed-record checks. A check is satisfied only when
// the record's own proof field carries the performed literal or the
// re-run frozen leg it names is fresh and positive.
export type PondConversationRecordCheck =
  | "conversation_record_well_formed"
  | "conversation_record_bound_to_receiver_held_principal"
  | "conversation_record_basis_receiver_composed_not_inferred"
  | "conversation_record_trust_epoch_verified_boundary_session_scoped"
  | "composed_text_non_empty_within_recorded_maximum"
  | "addressed_agent_reference_declared_in_conversation_vocabulary"
  | "composed_at_within_current_session_scope"
  | "live_session_read_gate_reinspected_live_activated_and_fresh"
  | "conversation_record_own_freshness_within_declared_maximum_age";

export interface PondConversationRecordAdmissionInput {
  readonly conversationRecord: unknown;
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

export interface PondConversationRecordAdmissionAssessment {
  readonly contractVersion: "pond-conversation-record-admission-d-p16";
  readonly conversationRecordVersion:
    | "pond-conversation-record-admission-d-p16"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_conversation_record_admission";
  readonly conversationRecordState:
    | "conversation_record_not_admitted"
    | "conversation_record_admitted_session_scoped_no_delivery";
  readonly reason:
    | "conversation_record_invalid"
    | "conversation_record_not_session_current"
    | "live_session_read_gate_not_live_activated_refused_or_not_fresh"
    | "conversation_record_not_of_the_current_session_scope"
    | "conversation_record_trust_epoch_not_admissible"
    | "conversation_record_addressed_agent_not_declared"
    | "conversation_record_composed_text_empty_or_over_recorded_maximum"
    | "receiver_conversation_record_proof_incomplete"
    | "all_conversation_record_checks_satisfied";
  readonly conversationRecordFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // Mapped echo fields: the frozen legs re-run through this contract's
  // own seam (evidence-activation L109), carrying the frozen literals
  // verbatim on every arm, through broken legs too. Field names stay
  // this cut's own — the frozen D-P15 carrier names are never
  // re-declared here.
  readonly mappedEstablishmentState: PondLiveSessionEstablishmentAssessment["sessionEstablishmentState"];
  readonly mappedEstablishmentReason: PondLiveSessionEstablishmentAssessment["reason"];
  readonly mappedEstablishmentFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly mappedReadGateState: PondLiveSessionReadGateAssessment["liveSessionReadGateState"];
  readonly mappedReadGateReason: PondLiveSessionReadGateAssessment["reason"];
  readonly mappedReadGateFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly satisfiedChecks: readonly PondConversationRecordCheck[];
  readonly unsatisfiedChecks: readonly PondConversationRecordCheck[];
  // The all-false ceiling: a composed record is informable content only.
  // It never becomes a delivery, a dispatch, an agent reply, an authority
  // statement, a scope, a membership or room presence, canonical memory
  // or verified evidence, current truth, a credential, or a PrincipalId
  // authorization (trusted-channel L87-100, L146, L160; agent-to-agent
  // L29; runtime-allocation L481).
  readonly messageEstablishesDeliveryOrDispatch: false;
  readonly messageEstablishesAgentReplyComposition: false;
  readonly messageEstablishesAuthorityFromProse: false;
  readonly messageEstablishesScope: false;
  readonly messageEstablishesMembershipOrRoomPresence: false;
  readonly messagePromotedToCanonicalMemoryOrVerifiedEvidence: false;
  readonly messageEstablishesCurrentTruth: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

// The receiver-recorded declared conversation vocabulary: the D-P0 agent
// family's three refs. Naming a ref here declares it a valid record
// addressee only — never an admission, never a capability, never room
// membership (room presence is not ToadAid membership; agent-to-agent
// L207-216). The selftest ties these literals to the frozen D-P0
// fixture exports.
export const POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS = Object.freeze([
  "agent:fixture:stage-d-p0:trading-desk-agent0",
  "agent:fixture:stage-d-p0:community-agent-slot",
  "agent:fixture:stage-d-p0:project-agent-slot",
] as const);

// The receiver-recorded composed-text bound: a non-empty composition of
// at most 2000 characters. Law is silent on any bound; this is a
// receiver-recorded app-side decision recorded in the lane's stage notes.
export const POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS = 2000;

// Keys whose presence in a conversation record would mean an agent reply,
// a delivered message, a reply-composition artifact, or any of the
// frozen session-side classes (the secret, an agent session/admission, a
// chat-message lane, a credential, a cross-principal batch) entered the
// record as data. The D-P15 union plus the four reply/delivery keys this
// cut exists to refuse. The exact-key deep walk means the cut's own
// longer keys are unaffected mechanically.
export const POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS = Object.freeze([
  ...POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS,
  "agentReply",
  "agentReplyComposition",
  "deliveredMessage",
  "replyComposition",
] as const);

const conversationRecordChecks = Object.freeze([
  "conversation_record_well_formed",
  "conversation_record_bound_to_receiver_held_principal",
  "conversation_record_basis_receiver_composed_not_inferred",
  "conversation_record_trust_epoch_verified_boundary_session_scoped",
  "composed_text_non_empty_within_recorded_maximum",
  "addressed_agent_reference_declared_in_conversation_vocabulary",
  "composed_at_within_current_session_scope",
  "live_session_read_gate_reinspected_live_activated_and_fresh",
  "conversation_record_own_freshness_within_declared_maximum_age",
] as const satisfies readonly PondConversationRecordCheck[]);

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
// literals over the composed-record metadata: metadata, then evaluation
// time, then maximum age, then future time; the fresh boundary is
// inclusive. A diagnosis is a diagnosis, never an admission.
const diagnoseRecordFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.composed_at_epoch_ms) ||
    checked.freshness_basis !== "record_event_time_only" ||
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
  const composedAt = checked.composed_at_epoch_ms as number;
  if (composedAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - composedAt;
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

const refusalPosturesComplete = (recordValue: Record<string, unknown>) =>
  recordValue.conversationProvenancePosture ===
    "receiver_authored_composed_in_session_not_agent_authored_not_remote" &&
  recordValue.conversationScopePosture ===
    "session_scoped_module_state_never_persisted_scope_never_created_from_prose" &&
  recordValue.conversationDeliveryPosture ===
    "message_informed_not_delivered_delivery_refused_until_its_own_lane" &&
  recordValue.conversationReplyPosture ===
    "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law" &&
  recordValue.conversationMemoryPosture ===
    "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence" &&
  recordValue.conversationAuthorityPosture ===
    "composed_prose_grants_no_authority_membership_or_capability_no_room_membership";

// Valid vocabulary shapes only — record validity, not record admission.
// A confined-but-unverified or legacy epoch stays a validly shaped record
// (the surface marks it inspection-only); a record with wrong posture
// literals is invalid outright, its declarative refusals unreadable.
const validConversationRecord = (value: unknown): boolean => {
  const conversationRecord = record(value);
  const metadata = record(conversationRecord?.conversationRecordMetadata);
  return (
    conversationRecord !== null &&
    exactKeys(conversationRecord, [
      "contractVersion",
      "kind",
      "principalRef",
      "recordBasis",
      "composedRecordText",
      "addressedAgentRef",
      "conversationRecordMetadata",
      "conversationTrustEpochPosture",
      "conversationProvenancePosture",
      "conversationScopePosture",
      "conversationDeliveryPosture",
      "conversationReplyPosture",
      "conversationMemoryPosture",
      "conversationAuthorityPosture",
      "authority",
    ]) &&
    conversationRecord.contractVersion ===
      "pond-conversation-record-admission-d-p16" &&
    conversationRecord.kind === "pond-conversation-record" &&
    wellFormedPrincipalRef(conversationRecord.principalRef) &&
    [
      "receiver_composed_into_live_session_not_inferred",
      "inferred_from_provider_session",
      "asserted_by_model_completion",
      "inferred_from_room_presence",
      "inferred_from_conversation_summary",
      "replayed_from_prior_conversation_history",
    ].includes(String(conversationRecord.recordBasis)) &&
    typeof conversationRecord.composedRecordText === "string" &&
    typeof conversationRecord.addressedAgentRef === "string" &&
    conversationRecord.addressedAgentRef.length > 0 &&
    metadata !== null &&
    exactKeys(metadata, [
      "composed_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadata.composed_at_epoch_ms) &&
    metadata.freshness_basis === "record_event_time_only" &&
    metadata.currentness_posture ===
      "not_established_consumer_must_evaluate" &&
    [
      "verified_boundary_session_scoped",
      "confined_but_unverified",
      "legacy",
    ].includes(String(conversationRecord.conversationTrustEpochPosture)) &&
    refusalPosturesAllValidVocabulary(conversationRecord as Record<string, unknown>) &&
    conversationRecord.authority === "none" &&
    !hasForbiddenKey(
      conversationRecord,
      POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS,
    )
  );
};

// Vocabulary membership (not the satisfaction of the refusals) for the
// six declarative-refusal posture fields: each field must carry a string
// in its own class. The dedicated posture check below then refuses every
// non-complete arm — a tampered or absent refusal is a declarative
// failure readable at the proof-incomplete cause, never silently
// reformed.
const refusalPosturesAllValidVocabulary = (
  recordValue: Record<string, unknown>,
): boolean =>
  [
    [
      conversationRecordProvenanceVocabulary,
      recordValue.conversationProvenancePosture,
    ],
    [conversationRecordScopeVocabulary, recordValue.conversationScopePosture],
    [
      conversationRecordDeliveryVocabulary,
      recordValue.conversationDeliveryPosture,
    ],
    [conversationRecordReplyVocabulary, recordValue.conversationReplyPosture],
    [conversationRecordMemoryVocabulary, recordValue.conversationMemoryPosture],
    [
      conversationRecordAuthorityVocabulary,
      recordValue.conversationAuthorityPosture,
    ],
  ].every(([vocabulary, value]) => (vocabulary as readonly string[]).includes(String(value)));

const conversationRecordProvenanceVocabulary = [
  "receiver_authored_composed_in_session_not_agent_authored_not_remote",
];
const conversationRecordScopeVocabulary = [
  "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
];
const conversationRecordDeliveryVocabulary = [
  "message_informed_not_delivered_delivery_refused_until_its_own_lane",
];
const conversationRecordReplyVocabulary = [
  "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
];
const conversationRecordMemoryVocabulary = [
  "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
];
const conversationRecordAuthorityVocabulary = [
  "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
];

const fullGateLegs = (input: PondConversationRecordAdmissionInput) =>
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

const admissionAssessment = (
  reason: PondConversationRecordAdmissionAssessment["reason"],
  conversationRecordVersion: PondConversationRecordAdmissionAssessment["conversationRecordVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedEstablishment: PondMappedEstablishmentEcho,
  mappedReadGate: PondMappedReadGateEcho,
  satisfiedChecks: readonly PondConversationRecordCheck[],
  unsatisfiedChecks: readonly PondConversationRecordCheck[],
): PondConversationRecordAdmissionAssessment => {
  const admitted = reason === "all_conversation_record_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-conversation-record-admission-d-p16",
    conversationRecordVersion,
    assessmentKind: "deterministic_supplied_conversation_record_admission",
    conversationRecordState: admitted
      ? "conversation_record_admitted_session_scoped_no_delivery"
      : "conversation_record_not_admitted",
    reason,
    conversationRecordFreshnessDiagnosis: diagnosis,
    mappedEstablishmentState: mappedEstablishment.state,
    mappedEstablishmentReason: mappedEstablishment.reason,
    mappedEstablishmentFreshnessDiagnosis: mappedEstablishment.diagnosis,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The composed text is informable content only, and it never leaves
    // this record: no delivery, no dispatch, no agent reply, no prose
    // authority, no scope, no membership or room presence, no memory or
    // evidence promotion, no current truth, no credential, no PrincipalId
    // authorization (trusted-channel L87-100, L146, L160;
    // agent-to-agent L29; runtime-allocation L481).
    messageEstablishesDeliveryOrDispatch: false,
    messageEstablishesAgentReplyComposition: false,
    messageEstablishesAuthorityFromProse: false,
    messageEstablishesScope: false,
    messageEstablishesMembershipOrRoomPresence: false,
    messagePromotedToCanonicalMemoryOrVerifiedEvidence: false,
    messageEstablishesCurrentTruth: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

// The mapped echo shapes (the D-P15 mapped precedent — typed to the
// frozen contracts so a drift is a compile error, values carried
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

export function assessPondConversationRecordAdmission(
  input: PondConversationRecordAdmissionInput,
): PondConversationRecordAdmissionAssessment {
  // The fail-closed gate on the input object itself: garbage never throws
  // — a non-object input degrades to an empty record the validation and
  // leg re-runs refuse honestly (the D-P8 fail-closed discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondConversationRecordAdmissionInput;
  // The echoes are computed on every arm, before any cause is chosen: a
  // broken leg never unbinds the receiver's records, and an invalid arm
  // still diagnoses (D-P13 echo discipline). Both the establishment
  // re-run and the read-gate re-run go through this contract's own seam
  // (evidence-activation L109 — the independent inspection IS the
  // re-run); the gate re-run itself re-runs the whole frozen D-P5…
  // D-P10 chain inside it.
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
  // The D-P8 fallback pattern: diagnose the raw evaluation pair even when
  // the record never becomes valid, so every arm carries an honest
  // record diagnosis.
  const fallbackDiagnosis = diagnoseRecordFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validConversationRecord(input.conversationRecord))
    return admissionAssessment(
      "conversation_record_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks,
    );
  const recordValue = input.conversationRecord as Record<string, unknown>;

  // The record's own freshness first — an expired composition refuses
  // before the legs are read, and the echoes stay readable.
  const ownDiagnosis = diagnoseRecordFreshness(
    recordValue["conversationRecordMetadata"] as Record<string, unknown> | null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (ownDiagnosis.state !== "fresh")
    return admissionAssessment(
      "conversation_record_not_session_current",
      "pond-conversation-record-admission-d-p16",
      ownDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks,
    );

  // The live read gate, re-run fresh through the seam above: a closed,
  // refused, or unfresh gate admits no composed record — the session the
  // composition rides must be live right now, not was established once.
  if (
    readGateLeg["liveSessionReadGateState"] !==
      "live_session_scoped_single_principal_structural_reads_live_activated"
  )
    return admissionAssessment(
      "live_session_read_gate_not_live_activated_refused_or_not_fresh",
      "pond-conversation-record-admission-d-p16",
      ownDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks,
    );

  // Session-scope binding: the composition's event time must be at or
  // after the current session's establishment event — an earlier-session
  // record (one held from before a retraction-cycle re-establishment)
  // never re-enters the current scope. The re-run establishment was
  // validated well-formed above, so its own metadata is read here
  // through the validated record, not carried from this cut's own
  // vocabulary.
  const reestablishmentMetadata = record(
    (input.establishmentRecord as Record<string, unknown>)["establishmentMetadata"],
  );
  const composedAt = (recordValue["conversationRecordMetadata"] as Record<string, unknown>)["composed_at_epoch_ms"] as number;
  const establishmentEvent = reestablishmentMetadata?.["established_at_epoch_ms"] as number | undefined;
  if (
    typeof establishmentEvent !== "number" ||
    composedAt < establishmentEvent
  )
    return admissionAssessment(
      "conversation_record_not_of_the_current_session_scope",
      "pond-conversation-record-admission-d-p16",
      ownDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks,
    );

  // The admissible trust epoch: only verified-boundary, session-scoped
  // history is consumer-admissible. Confined-but-unverified and legacy
  // records stay validly shaped vocabulary but refuse here with an
  // honest dedicated cause.
  if (
    recordValue.conversationTrustEpochPosture !==
    "verified_boundary_session_scoped"
  )
    return admissionAssessment(
      "conversation_record_trust_epoch_not_admissible",
      "pond-conversation-record-admission-d-p16",
      ownDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks,
    );

  // The declared conversation vocabulary: a record addressed outside the
  // D-P0 agent family's three declared refs refuses at its own cause.
  if (
    !(POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS as readonly string[]).includes(
      recordValue.addressedAgentRef as string,
    )
  )
    return admissionAssessment(
      "conversation_record_addressed_agent_not_declared",
      "pond-conversation-record-admission-d-p16",
      ownDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks,
    );

  // The composed-text bound: non-empty (an empty send is not a
  // composition) and at most the recorded maximum.
  const composedText = recordValue.composedRecordText as string;
  if (
    composedText.length === 0 ||
    composedText.length > POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS
  )
    return admissionAssessment(
      "conversation_record_composed_text_empty_or_over_recorded_maximum",
      "pond-conversation-record-admission-d-p16",
      ownDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks,
    );

  // The remaining declarative checks, evaluated honestly over the
  // validated record: the refused bases fold here with their unsatisfied
  // check names readable (L49-55 — every leg green except the declarative
  // one that failed), never behind a defensive literal.
  const values = [
    true,
    recordValue.principalRef === input.receiverHeldPrincipalRef &&
      wellFormedPrincipalRef(input.receiverHeldPrincipalRef),
    recordValue.recordBasis ===
      "receiver_composed_into_live_session_not_inferred",
    recordValue.conversationTrustEpochPosture ===
      "verified_boundary_session_scoped",
    composedText.length > 0 &&
      composedText.length <= POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS,
    (POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS as readonly string[]).includes(
      recordValue.addressedAgentRef as string,
    ),
    typeof establishmentEvent === "number" && composedAt >= establishmentEvent,
    readGateLeg["liveSessionReadGateState"] ===
      "live_session_scoped_single_principal_structural_reads_live_activated" &&
      readGateLeg["readGateFreshnessDiagnosis"].state === "fresh",
    ownDiagnosis.state === "fresh",
  ];
  const satisfied = conversationRecordChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = conversationRecordChecks.filter(
    (_, index) => values[index] !== true,
  );
  return admissionAssessment(
    unsatisfied.length === 0
      ? "all_conversation_record_checks_satisfied"
      : "receiver_conversation_record_proof_incomplete",
    "pond-conversation-record-admission-d-p16",
    ownDiagnosis,
    mappedEstablishment,
    mappedReadGate,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The composed record is an
// informable, session-scoped, non-persisted content fact only; it never
// becomes delivery, reply, prose authority, memory, or current truth.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP16Invariant_RecordChecksExact = Assert<
  Equal<
    PondConversationRecordCheck,
    | "conversation_record_well_formed"
    | "conversation_record_bound_to_receiver_held_principal"
    | "conversation_record_basis_receiver_composed_not_inferred"
    | "conversation_record_trust_epoch_verified_boundary_session_scoped"
    | "composed_text_non_empty_within_recorded_maximum"
    | "addressed_agent_reference_declared_in_conversation_vocabulary"
    | "composed_at_within_current_session_scope"
    | "live_session_read_gate_reinspected_live_activated_and_fresh"
    | "conversation_record_own_freshness_within_declared_maximum_age"
  >
>;
export type PondStageDP16Invariant_RecordStatesExact = Assert<
  Equal<
    PondConversationRecordAdmissionAssessment["conversationRecordState"],
    | "conversation_record_not_admitted"
    | "conversation_record_admitted_session_scoped_no_delivery"
  >
>;
export type PondStageDP16Invariant_RecordReasonsExact = Assert<
  Equal<
    PondConversationRecordAdmissionAssessment["reason"],
    | "conversation_record_invalid"
    | "conversation_record_not_session_current"
    | "live_session_read_gate_not_live_activated_refused_or_not_fresh"
    | "conversation_record_not_of_the_current_session_scope"
    | "conversation_record_trust_epoch_not_admissible"
    | "conversation_record_addressed_agent_not_declared"
    | "conversation_record_composed_text_empty_or_over_recorded_maximum"
    | "receiver_conversation_record_proof_incomplete"
    | "all_conversation_record_checks_satisfied"
  >
>;
export type PondStageDP16Invariant_RecordTrustEpochVocabularyExact = Assert<
  Equal<
    PondConversationTrustEpochPosture,
    "verified_boundary_session_scoped" | "confined_but_unverified" | "legacy"
  >
>;
export type PondStageDP16Invariant_MappedEstablishmentStateTiedToDP15 = Assert<
  Equal<
    PondConversationRecordAdmissionAssessment["mappedEstablishmentState"],
    PondLiveSessionEstablishmentAssessment["sessionEstablishmentState"]
  >
>;
export type PondStageDP16Invariant_MappedEstablishmentReasonTiedToDP15 = Assert<
  Equal<
    PondConversationRecordAdmissionAssessment["mappedEstablishmentReason"],
    PondLiveSessionEstablishmentAssessment["reason"]
  >
>;
export type PondStageDP16Invariant_MappedReadGateStateTiedToDP15Gate = Assert<
  Equal<
    PondConversationRecordAdmissionAssessment["mappedReadGateState"],
    PondLiveSessionReadGateAssessment["liveSessionReadGateState"]
  >
>;
export type PondStageDP16Invariant_MappedReadGateReasonTiedToDP15Gate = Assert<
  Equal<
    PondConversationRecordAdmissionAssessment["mappedReadGateReason"],
    PondLiveSessionReadGateAssessment["reason"]
  >
>;
export type PondStageDP16Invariant_MessageNeverEstablishesDeliveryReplyAuthorityOrMemory =
  Assert<
    Equal<
      [
        PondConversationRecordAdmissionAssessment["messageEstablishesDeliveryOrDispatch"],
        PondConversationRecordAdmissionAssessment["messageEstablishesAgentReplyComposition"],
        PondConversationRecordAdmissionAssessment["messageEstablishesAuthorityFromProse"],
        PondConversationRecordAdmissionAssessment["messageEstablishesScope"],
        PondConversationRecordAdmissionAssessment["messageEstablishesMembershipOrRoomPresence"],
        PondConversationRecordAdmissionAssessment["messagePromotedToCanonicalMemoryOrVerifiedEvidence"],
        PondConversationRecordAdmissionAssessment["messageEstablishesCurrentTruth"],
        PondConversationRecordAdmissionAssessment["credentialAdmitted"],
        PondConversationRecordAdmissionAssessment["principalIdAcceptedAsAuthorization"],
        PondConversationRecordAdmissionAssessment["personalMemoryContentAdmitted"],
        PondConversationRecordAdmissionAssessment["runtimeActivationPosture"],
        PondConversationRecordAdmissionAssessment["authority"],
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
        "not_included",
        "none",
      ]
    >
  >;
export type PondStageDP16Invariant_NoForbiddenRecordKeys = Assert<
  HasAnyKey<PondConversationRecord, (typeof POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP16Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondConversationRecordAdmissionAssessment, (typeof POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP16Invariant_DeclaredRefsPairwiseDistinct = Assert<
  Equal<
    (typeof POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS)[number],
    "agent:fixture:stage-d-p0:trading-desk-agent0" | "agent:fixture:stage-d-p0:community-agent-slot" | "agent:fixture:stage-d-p0:project-agent-slot"
  >
>;
export type PondStageDP16Invariant_MaximumComposedTextIsPositive = Assert<
  Equal<typeof POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS, 2000>
>;