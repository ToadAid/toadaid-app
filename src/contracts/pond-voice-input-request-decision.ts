// Stage D-P22: the voice lane — receiver-recorded voice-input-REQUEST
// decisions over the frozen D-P15 live session, plus the standing
// claimed-voice wall declared in pond-claimed-voice-refusal.ts and the
// transcription-selection decision declared in pond-voice-transcription-
// provider-decision.ts.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): the lane's own law anchor is the lane's core
// refusals — spoken operator input is not the typed channel, and the
// channels never become interchangeable because they serialize as text;
// operator input may express requests, instructions, questions, and
// supplied content (it expresses a REQUEST here, nothing more). A
// request grants nothing (agent-to-agent L25: "A message may request a
// capability. The request itself grants nothing."). A MICROPHONE DEVICE
// IS NOT A PRINCIPAL: scope-sovereignty L15 ("A provider, model, browser,
// device, session, room, repository, wallet, or conversation is not
// automatically a principal.") and L21 (scope is never created by
// implication from physical presence, a provider session, or a channel).
// Voice is a capture posture, never an evidence posture (evidence is
// a typed literal away from authority — an observation alone is never
// canonical evidence, observations may be wrong, and an optimistic zero
// is never serialized in their place); a spoken ask must never become an
// accepted task (a request is not execution — approval is not execution;
// governance operates by explicit ceremony, never by ambient presence).
// blueprints/governed-runtime-component-allocation.md L481 (the operator/
// task input row: "Requested intent and supplied content"; its must-not
// column: "Identity, Grant, approval, or policy state by prose alone")
// and the frozen B2 stage docs of THIS repo (`voice affordance !=
// recording` — the mic affordance and a recording capability are
// different things, asserted independently by the static-visual stages).
//
// Recorded law silences. Voice, speech, audio, transcription,
// microphone, and speech synthesis are named ZERO times in canonical
// law. Voice interaction is NOT on the messaging deferral list — it is
// simply unaddressed, NOT deferred (the allocation waves name community/
// project runtime and external interop, neither of which owns human-input
// capture). No canonical component owns human-input capture (the Bridge's
// only "capture" vocabulary is receipt and evidence capture). Every
// literal below is a receiver-recorded app-side decision, recorded here
// rather than in a law amendment.
//
// What the cut performs. The receiver records ONE voice-input request —
// a request to PROVIDE voice input over the current live session. The
// record is NOT a fabricated observation of a captured utterance: no
// capture mechanism exists this cut, so recording "I observed a spoken
// utterance" would be exactly the typed-literal-as-evidence mistake the
// evidence law warns about — the honest shape is a REQUEST. The ceremony
// re-runs — through its own seam — the frozen D-P15 live-session read
// gate over the SAME legs and the SAME re-timed evaluation pair (the
// D-P21 mechanism one lane later, one rung shallower: D-P20 re-ran
// D-P17, D-P21 re-ran D-P16, D-P22 re-runs the D-P15 gate directly —
// the voice request's parent is the D-P15 establishment + read gate
// itself, not the D-P16 conversation lane and not the D-P21 reply lane),
// and that re-run re-runs the frozen D-P15 establishment chain inside it.
// NO AUDIO is captured by any arm of this contract — the mic stays
// disabled, the record's own state literal says so
// (`no_capture_no_transcription`), and no captured state exists in the
// state set: a future capture-and-transcribe runtime cut swaps the
// refusal causes (the runway). The request carries no destination, no
// agent ref, no device identity, and no transcript text — because no
// audio exists and no transcription exists.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type {
  PondLiveSessionReadGateAssessment,
} from "./pond-live-session-read-gate.js";
import {
  assessPondLiveSessionReadGate,
} from "./pond-live-session-read-gate.ts";
// The forbidden-key inventory: the frozen D-P21 union widened exactly
// once by this lane (see the constant below).
import {
  POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS,
} from "./pond-reply-request-decision.ts";

// The voice-input-request basis vocabulary: one true receiver-recorded
// basis and five refused bases. A request to provide voice input is a
// current stance of the receiving side — nothing in a conversation
// composition, a microphone's physical presence, a model completion, a
// provider session, or a prior request may record it here. The
// device-presence refusal carries the scope-sovereignty anchor: a scope
// is never created from physical presence or a channel, and a
// microphone device is never a principal.
export type PondVoiceInputRequestBasis =
  | "receiver_recorded_voice_request_not_inferred"
  | "inferred_from_conversation_composition"
  | "inferred_from_device_presence"
  | "asserted_by_model_completion"
  | "inferred_from_provider_session"
  | "replayed_from_prior_voice_request";

// The receiver-recorded voice-request event metadata: the request event's
// own time source, its freshness basis (event time only — the D-P2
// ordering), and the explicit currentness posture: a recorded request is
// NOT established — every consumer must evaluate.
export interface PondVoiceInputRequestEventMetadata {
  readonly voice_requested_at_epoch_ms: number;
  readonly freshness_basis: "voice_request_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

// The receiver-recorded voice-input request: 13 exact keys — one narrower
// than the D-P21 reply request (no child-record slot: the voice request
// rides the live session itself, no composition and no reply request).
// No destination field, no agent ref, no device field, no transcript
// field — the request asks to PROVIDE voice input; it carries nothing.
export interface PondVoiceInputRequest {
  readonly contractVersion: "pond-voice-input-request-decision-d-p22";
  readonly kind: "pond-voice-input-request";
  readonly principalRef: string;
  readonly voiceInputRequestBasis: PondVoiceInputRequestBasis;
  readonly voiceInputRequestMetadata: PondVoiceInputRequestEventMetadata;
  readonly voiceRequestCapturePosture: "voice_input_request_requests_no_capture_the_mic_stays_disabled_this_cut";
  readonly voiceRequestTranscriptionPosture: "no_transcription_composed_by_a_request_transcription_is_the_provider_decision_lane";
  readonly voiceRequestRunwayPosture: "voice_runway_only_no_capture_or_transcription_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_causes";
  readonly voiceRequestChannelPosture: "spoken_operator_input_is_not_the_typed_channel_the_channels_never_become_interchangeable_because_they_serialize_as_text";
  readonly voiceRequestScopePosture: "a_microphone_device_is_not_a_principal_scope_is_never_created_from_physical_presence_or_a_channel";
  readonly voiceRequestEvidencePosture: "voice_request_is_not_evidence_an_observation_alone_is_never_canonical_evidence_uncertainty_is_never_serialized_as_a_zero";
  readonly voiceRequestAuthorityPosture: "voice_request_grants_no_authority_membership_or_admission";
  readonly authority: "none";
}

// Receiver-owned voice-input-request checks (L49-55).
export type PondVoiceInputRequestCheck =
  | "voice_request_record_well_formed"
  | "voice_request_bound_to_receiver_held_principal"
  | "voice_request_basis_receiver_recorded_not_inferred"
  | "live_session_read_gate_reinspected_live_activated_and_fresh"
  | "voice_request_event_within_current_session_scope"
  | "voice_request_event_own_freshness_within_declared_maximum_age"
  | "voice_request_refusal_postures_complete";

// The voice-input-request decision input: 14 exact keys — the D-P15
// read-gate input with the gate-record slot already held by the shell
// and the request record added (the D-P21 structural position: the
// request rides the held session, whose 13 gate legs it carries). One
// evaluation pair serves the request event's freshness and every leg's
// re-run inside the reassessment.
export interface PondVoiceInputRequestDecisionInput {
  readonly voiceInputRequest: unknown;
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

// The voice-input-request decision assessment.
export interface PondVoiceInputRequestDecisionAssessment {
  readonly contractVersion: "pond-voice-input-request-decision-d-p22";
  readonly voiceInputRequestDecisionVersion:
    | "pond-voice-input-request-decision-d-p22"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_voice_input_request_decision";
  readonly voiceInputRequestState:
    | "voice_input_request_not_recorded"
    | "voice_input_request_recorded_session_scoped_no_capture_no_transcription";
  readonly reason:
    | "voice_request_record_invalid"
    | "live_session_read_gate_not_currently_live"
    | "voice_request_event_not_session_current"
    | "voice_request_event_not_of_the_current_session_scope"
    | "receiver_voice_request_proof_incomplete"
    | "all_voice_request_checks_satisfied";
  readonly voiceInputRequestEventFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // Mapped echo fields: the frozen D-P15 re-run's own fields carried
  // verbatim on every arm — the gate's state, reason, and own diagnosis,
  // and ITS mapped echoes (the D-P15 establishment and the frozen D-P10
  // activation) — so a refusal one depth down stays readable at this cut
  // without new literals for it. Field names stay this cut's own; the
  // frozen carrier names are never re-declared here.
  readonly mappedReadGateState: PondLiveSessionReadGateAssessment["liveSessionReadGateState"];
  readonly mappedReadGateReassessmentReason: PondLiveSessionReadGateAssessment["reason"];
  readonly mappedReadGateFreshnessDiagnosis: PondLiveSessionReadGateAssessment["readGateFreshnessDiagnosis"];
  readonly mappedEstablishmentState: PondLiveSessionReadGateAssessment["mappedLiveSessionEstablishmentState"];
  readonly mappedEstablishmentReason: PondLiveSessionReadGateAssessment["mappedLiveSessionEstablishmentReason"];
  readonly mappedDp10ActivationState: PondLiveSessionReadGateAssessment["mappedDp10ActivationState"];
  readonly mappedDp10Reason: PondLiveSessionReadGateAssessment["mappedDp10Reason"];
  readonly mappedDp10SessionScopePosture: PondLiveSessionReadGateAssessment["mappedDp10SessionScopePosture"];
  readonly satisfiedChecks: readonly PondVoiceInputRequestCheck[];
  readonly unsatisfiedChecks: readonly PondVoiceInputRequestCheck[];
  // The retention posture: a request is module state of process lifetime
  // with no indefinite retention, and it re-assesses honestly after
  // retraction — the D-P20/D-P21 governance posture (a request is
  // session-scoped stance whose applicability the reassessment governs;
  // nothing downstream reads it, and frozen survival would dress a dead
  // request as a live ask).
  readonly voiceInputRequestRetentionPosture: "voice_input_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction";
  // The all-false ceiling: a recorded voice request is a receiver-side
  // ask, nothing more. It never establishes voice capture or a capture
  // record, a transcription runtime or output, a transcription selection,
  // agent identity or admission, a grant, a consequence or execution, an
  // acceptance or task agreement (a spoken ask must never become an
  // accepted task), prose authority, membership or room presence, or a
  // scope; it never collapses the spoken and typed channels; it echoes no
  // transcript text; it is consumed by no runtime or capturer this cut;
  // and it admits no credential, no PrincipalId authorization, and no
  // current truth.
  readonly voiceRequestEstablishesVoiceCaptureOrCaptureRecord: false;
  readonly voiceRequestEstablishesTranscriptionRuntimeOrOutput: false;
  readonly voiceRequestEstablishesTranscriptionSelection: false;
  readonly voiceRequestEstablishesAgentIdentityOrAdmission: false;
  readonly voiceRequestEstablishesGrant: false;
  readonly voiceRequestEstablishesConsequenceOrExecution: false;
  readonly voiceRequestEstablishesAcceptanceOrTaskAgreement: false;
  readonly voiceRequestEstablishesAuthorityFromProse: false;
  readonly voiceRequestEstablishesMembershipOrRoomPresence: false;
  readonly voiceRequestEstablishesScope: false;
  readonly voiceRequestEchoesTranscriptText: false;
  readonly voiceRequestCollapsesSpokenAndTypedChannels: false;
  readonly voiceRequestConsumedByAnyRuntimeOrCapturerThisCut: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

// The forbidden-key inventory: the frozen D-P21 union plus the four
// voice-lane keys this lane exists to refuse — a captured-audio record
// object, waveform or fingerprint data dressed as evidence, a
// claimed-transcript record object, and transcript text as a record
// field would each be exactly what the voice runway must never
// materialize as data (voice affordance != recording). The wall's input
// key rides as a member: a nested claim object planted inside any
// record of this lane refuses in the deep walk.
export const POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS = Object.freeze([
  ...POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS,
  "capturedAudioRecord",
  "waveformEvidence",
  "claimedVoiceTranscript",
  "audioTranscriptText",
] as const);

const voiceRequestChecks = Object.freeze([
  "voice_request_record_well_formed",
  "voice_request_bound_to_receiver_held_principal",
  "voice_request_basis_receiver_recorded_not_inferred",
  "live_session_read_gate_reinspected_live_activated_and_fresh",
  "voice_request_event_within_current_session_scope",
  "voice_request_event_own_freshness_within_declared_maximum_age",
  "voice_request_refusal_postures_complete",
] as const satisfies readonly PondVoiceInputRequestCheck[]);

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
const diagnoseVoiceRequestFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.voice_requested_at_epoch_ms) ||
    checked.freshness_basis !== "voice_request_event_time_only" ||
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
  const voiceRequestedAt = checked.voice_requested_at_epoch_ms as number;
  if (voiceRequestedAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - voiceRequestedAt;
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

const voiceRequestBasisVocabulary = [
  "receiver_recorded_voice_request_not_inferred",
  "inferred_from_conversation_composition",
  "inferred_from_device_presence",
  "asserted_by_model_completion",
  "inferred_from_provider_session",
  "replayed_from_prior_voice_request",
];

// The seven declarative-refusal posture fields: each field must carry its
// exact posture literal for the request record to be validly shaped, and
// the posture completeness rides inside the well-formed check and the
// declarative check below.
const posturesComplete = (recordValue: Record<string, unknown>) =>
  recordValue.voiceRequestCapturePosture ===
    "voice_input_request_requests_no_capture_the_mic_stays_disabled_this_cut" &&
  recordValue.voiceRequestTranscriptionPosture ===
    "no_transcription_composed_by_a_request_transcription_is_the_provider_decision_lane" &&
  recordValue.voiceRequestRunwayPosture ===
    "voice_runway_only_no_capture_or_transcription_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_causes" &&
  recordValue.voiceRequestChannelPosture ===
    "spoken_operator_input_is_not_the_typed_channel_the_channels_never_become_interchangeable_because_they_serialize_as_text" &&
  recordValue.voiceRequestScopePosture ===
    "a_microphone_device_is_not_a_principal_scope_is_never_created_from_physical_presence_or_a_channel" &&
  recordValue.voiceRequestEvidencePosture ===
    "voice_request_is_not_evidence_an_observation_alone_is_never_canonical_evidence_uncertainty_is_never_serialized_as_a_zero" &&
  recordValue.voiceRequestAuthorityPosture ===
    "voice_request_grants_no_authority_membership_or_admission";

const exactVoiceRequestEventMetadata = (value: unknown): boolean => {
  const metadataValue = record(value);
  return (
    metadataValue !== null &&
    exactKeys(metadataValue, [
      "voice_requested_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadataValue.voice_requested_at_epoch_ms) &&
    metadataValue.freshness_basis === "voice_request_event_time_only" &&
    metadataValue.currentness_posture ===
      "not_established_consumer_must_evaluate"
  );
};

// Valid request-record shape only — record validity, not admission. The
// session legs under the request are the re-run's material, not this
// check's: the re-run validates the gate and the establishment chain
// wholesale, and its conclusion is carried verbatim as the mapped echo.
// No transcript text, no agent ref, no device field, and no capture
// claim exists anywhere on the record.
const validVoiceInputRequestRecord = (value: unknown): boolean => {
  const requestValue = record(value);
  return (
    requestValue !== null &&
    exactKeys(requestValue, [
      "contractVersion",
      "kind",
      "principalRef",
      "voiceInputRequestBasis",
      "voiceInputRequestMetadata",
      "voiceRequestCapturePosture",
      "voiceRequestTranscriptionPosture",
      "voiceRequestRunwayPosture",
      "voiceRequestChannelPosture",
      "voiceRequestScopePosture",
      "voiceRequestEvidencePosture",
      "voiceRequestAuthorityPosture",
      "authority",
    ]) &&
    requestValue.contractVersion ===
      "pond-voice-input-request-decision-d-p22" &&
    requestValue.kind === "pond-voice-input-request" &&
    voiceRequestBasisVocabulary.includes(
      String(requestValue.voiceInputRequestBasis),
    ) &&
    exactVoiceRequestEventMetadata(requestValue.voiceInputRequestMetadata) &&
    wellFormedPrincipalRef(requestValue.principalRef) &&
    posturesComplete(requestValue) &&
    requestValue.authority === "none" &&
    !hasForbiddenKey(requestValue, POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS)
  );
};

// The D-P15 gate legs, verbatim: the request's re-run consumes the
// frozen classifier over the SAME legs the shell holds — all 13, never
// the spread (spreading the 14-key input would pass the request into
// the re-run; the projection is the type-tie seam).
const fullLiveSessionGateLegs = (input: PondVoiceInputRequestDecisionInput) =>
  ({
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

// The mapped echo shapes (the D-P21 mapped precedent — typed to the
// frozen reassessment so a drift is a compile error, values carried
// verbatim from its fields, including ITS mapped echoes verbatim).
// Field names stay generic; the frozen names the echoes read are tied
// through quoted-index reads in the builder, never re-declared as this
// cut's own names and never dotted here.
interface PondMappedReadGateEcho {
  readonly state: PondLiveSessionReadGateAssessment["liveSessionReadGateState"];
  readonly reason: PondLiveSessionReadGateAssessment["reason"];
  readonly diagnosis: PondLiveSessionReadGateAssessment["readGateFreshnessDiagnosis"];
}

interface PondMappedEstablishmentEcho {
  readonly state: PondLiveSessionReadGateAssessment["mappedLiveSessionEstablishmentState"];
  readonly reason: PondLiveSessionReadGateAssessment["mappedLiveSessionEstablishmentReason"];
}

interface PondMappedDp10Echo {
  readonly state: PondLiveSessionReadGateAssessment["mappedDp10ActivationState"];
  readonly reason: PondLiveSessionReadGateAssessment["mappedDp10Reason"];
  readonly scopePosture: PondLiveSessionReadGateAssessment["mappedDp10SessionScopePosture"];
}

const voiceRequestAssessment = (
  reason: PondVoiceInputRequestDecisionAssessment["reason"],
  voiceInputRequestDecisionVersion: PondVoiceInputRequestDecisionAssessment["voiceInputRequestDecisionVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedReadGate: PondMappedReadGateEcho,
  mappedEstablishment: PondMappedEstablishmentEcho,
  mappedDp10: PondMappedDp10Echo,
  satisfiedChecks: readonly PondVoiceInputRequestCheck[],
  unsatisfiedChecks: readonly PondVoiceInputRequestCheck[],
): PondVoiceInputRequestDecisionAssessment => {
  const recorded = reason === "all_voice_request_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-voice-input-request-decision-d-p22",
    voiceInputRequestDecisionVersion,
    assessmentKind: "deterministic_supplied_voice_input_request_decision",
    voiceInputRequestState: recorded
      ? "voice_input_request_recorded_session_scoped_no_capture_no_transcription"
      : "voice_input_request_not_recorded",
    reason,
    voiceInputRequestEventFreshnessDiagnosis: diagnosis,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReassessmentReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    mappedEstablishmentState: mappedEstablishment.state,
    mappedEstablishmentReason: mappedEstablishment.reason,
    mappedDp10ActivationState: mappedDp10.state,
    mappedDp10Reason: mappedDp10.reason,
    mappedDp10SessionScopePosture: mappedDp10.scopePosture,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The retention posture: honest re-assessment after retraction — the
    // D-P20/D-P21 governance posture (a request is session-scoped
    // stance, not frozen evidence).
    voiceInputRequestRetentionPosture:
      "voice_input_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction" as const,
    // A recorded voice request is a receiver-side ask, nothing more (see
    // the ceiling commentary on the interface for the law anchors).
    voiceRequestEstablishesVoiceCaptureOrCaptureRecord: false,
    voiceRequestEstablishesTranscriptionRuntimeOrOutput: false,
    voiceRequestEstablishesTranscriptionSelection: false,
    voiceRequestEstablishesAgentIdentityOrAdmission: false,
    voiceRequestEstablishesGrant: false,
    voiceRequestEstablishesConsequenceOrExecution: false,
    voiceRequestEstablishesAcceptanceOrTaskAgreement: false,
    voiceRequestEstablishesAuthorityFromProse: false,
    voiceRequestEstablishesMembershipOrRoomPresence: false,
    voiceRequestEstablishesScope: false,
    voiceRequestEchoesTranscriptText: false,
    voiceRequestCollapsesSpokenAndTypedChannels: false,
    voiceRequestConsumedByAnyRuntimeOrCapturerThisCut: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondVoiceInputRequestDecision(
  input: PondVoiceInputRequestDecisionInput,
): PondVoiceInputRequestDecisionAssessment {
  // The fail-closed gate on the input object itself: garbage never throws
  // — a non-object input degrades to an empty record the validation and
  // re-runs refuse honestly (the D-P8 fail-closed discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondVoiceInputRequestDecisionInput;
  // The echoes are computed on every arm, before any cause is chosen: a
  // broken request never unbinds the receiver's session, and an invalid
  // arm still diagnoses (D-P13 echo discipline). The D-P15 gate re-run
  // goes through this contract's own seam (evidence-activation L109 — the
  // independent inspection IS the re-run): the frozen read-gate ceremony
  // re-runs itself over the SAME held legs and the SAME re-timed
  // evaluation pair, and inside it the frozen D-P15 establishment chain
  // and the frozen D-P10 activation re-run again.
  const gateReassessment = assessPondLiveSessionReadGate(
    fullLiveSessionGateLegs(input),
  );
  const mappedReadGate: PondMappedReadGateEcho = {
    state: gateReassessment["liveSessionReadGateState"],
    reason: gateReassessment["reason"],
    diagnosis: gateReassessment["readGateFreshnessDiagnosis"],
  };
  const mappedEstablishment: PondMappedEstablishmentEcho = {
    state: gateReassessment["mappedLiveSessionEstablishmentState"],
    reason: gateReassessment["mappedLiveSessionEstablishmentReason"],
  };
  const mappedDp10: PondMappedDp10Echo = {
    state: gateReassessment["mappedDp10ActivationState"],
    reason: gateReassessment["mappedDp10Reason"],
    scopePosture: gateReassessment["mappedDp10SessionScopePosture"],
  };
  // The D-P16 fallback pattern: diagnose the raw evaluation pair even
  // when the request never becomes valid, so every arm carries an honest
  // request-event diagnosis.
  const fallbackDiagnosis = diagnoseVoiceRequestFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validVoiceInputRequestRecord(input.voiceInputRequest))
    return voiceRequestAssessment(
      "voice_request_record_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      [],
      voiceRequestChecks,
    );
  const requestValue = input.voiceInputRequest as Record<string, unknown>;
  const requestEventMetadata = record(requestValue["voiceInputRequestMetadata"]);
  const voiceRequestedAt = requestEventMetadata?.[
    "voice_requested_at_epoch_ms"
  ] as number | undefined;

  // The request event's own diagnosis first as data: the metadata is
  // valid already, so the diagnosis (fresh or not) is honest on every
  // remaining arm — but the D-P15 re-run's verdict outranks it in the
  // ladder (a voice request rides a CURRENTLY live session; a request in
  // a vacuum would be a floating voice declaration with no session to
  // ride), so a not-currently-live gate refuses before the event's
  // freshness is even asked, with the event diagnosis still readable.
  const requestDiagnosis = diagnoseVoiceRequestFreshness(
    requestEventMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );

  // The frozen D-P15 re-run's verdict is the verdict: a session whose
  // read gate is not currently live-activated can never carry a voice
  // request, and the re-run's own reason (its own freshness cause, its
  // scope cause, or its own invalid cause) is carried verbatim as the
  // mapped reassessment reason — the honest echo.
  if (
    gateReassessment["liveSessionReadGateState"] !==
    "live_session_scoped_single_principal_structural_reads_live_activated"
  )
    return voiceRequestAssessment(
      "live_session_read_gate_not_currently_live",
      "pond-voice-input-request-decision-d-p22",
      requestDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      [],
      voiceRequestChecks,
    );

  // The request event's own freshness. The request must postdate the
  // establishment it rides (you cannot request to speak into a session
  // that does not yet exist), so on the frozen chain the request event is
  // YOUNGER than every leg event — the newest-event arithmetic of the
  // later lanes does not hold here, freshness is evaluated honestly on
  // the request event alone against the shared evaluation pair, and the
  // selftest proves the isolation by ladder order rather than by age
  // arithmetic (the D-P21 request-event honesty, one rung shallower).
  if (requestDiagnosis.state !== "fresh")
    return voiceRequestAssessment(
      "voice_request_event_not_session_current",
      "pond-voice-input-request-decision-d-p22",
      requestDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      [],
      voiceRequestChecks,
    );

  // Session-scope binding for the request event: the recorded request
  // must postdate the current session's establishment event — a request
  // recorded before the session it would ride is not in the current
  // scope. No composition and no conversation lane bounds it: the voice
  // request's parent is the D-P15 establishment + read gate itself. The
  // re-run validated the establishment above, so its metadata is read
  // through that validated form (the D-P18 scope pattern, one lane
  // shallower).
  const establishmentMetadata = record(
    (input.establishmentRecord as Record<string, unknown>)[
      "establishmentMetadata"
    ],
  );
  const establishedAt = establishmentMetadata?.[
    "established_at_epoch_ms"
  ] as number | undefined;
  if (
    typeof establishedAt !== "number" ||
    typeof voiceRequestedAt !== "number" ||
    voiceRequestedAt < establishedAt
  )
    return voiceRequestAssessment(
      "voice_request_event_not_of_the_current_session_scope",
      "pond-voice-input-request-decision-d-p22",
      requestDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      [],
      voiceRequestChecks,
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
    requestValue["voiceInputRequestBasis"] ===
      "receiver_recorded_voice_request_not_inferred",
    gateReassessment["liveSessionReadGateState"] ===
      "live_session_scoped_single_principal_structural_reads_live_activated" &&
      gateReassessment["readGateFreshnessDiagnosis"].state === "fresh",
    typeof establishedAt === "number" &&
      typeof voiceRequestedAt === "number" &&
      voiceRequestedAt >= establishedAt,
    requestDiagnosis.state === "fresh",
    posturesComplete(requestValue),
  ];
  const satisfied = voiceRequestChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = voiceRequestChecks.filter(
    (_, index) => values[index] !== true,
  );
  return voiceRequestAssessment(
    unsatisfied.length === 0
      ? "all_voice_request_checks_satisfied"
      : "receiver_voice_request_proof_incomplete",
    "pond-voice-input-request-decision-d-p22",
    requestDiagnosis,
    mappedReadGate,
    mappedEstablishment,
    mappedDp10,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. A recorded voice request is
// receiver-side governance only: it never establishes voice capture or a
// capture record, a transcription runtime or output, a transcription
// selection, agent identity or admission, a grant, a consequence or
// execution, an acceptance or task agreement, prose authority, membership
// or room presence, or a scope; it never collapses the spoken and typed
// channels; it echoes no transcript text; it is consumed by no runtime
// or capturer this cut; and it admits no credential, no PrincipalId
// authorization, and no current truth.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP22Invariant_VoiceRequestChecksExact = Assert<
  Equal<
    PondVoiceInputRequestCheck,
    | "voice_request_record_well_formed"
    | "voice_request_bound_to_receiver_held_principal"
    | "voice_request_basis_receiver_recorded_not_inferred"
    | "live_session_read_gate_reinspected_live_activated_and_fresh"
    | "voice_request_event_within_current_session_scope"
    | "voice_request_event_own_freshness_within_declared_maximum_age"
    | "voice_request_refusal_postures_complete"
  >
>;
export type PondStageDP22Invariant_VoiceRequestStatesExact = Assert<
  Equal<
    PondVoiceInputRequestDecisionAssessment["voiceInputRequestState"],
    | "voice_input_request_not_recorded"
    | "voice_input_request_recorded_session_scoped_no_capture_no_transcription"
  >
>;
export type PondStageDP22Invariant_VoiceRequestReasonsExact = Assert<
  Equal<
    PondVoiceInputRequestDecisionAssessment["reason"],
    | "voice_request_record_invalid"
    | "live_session_read_gate_not_currently_live"
    | "voice_request_event_not_session_current"
    | "voice_request_event_not_of_the_current_session_scope"
    | "receiver_voice_request_proof_incomplete"
    | "all_voice_request_checks_satisfied"
  >
>;
export type PondStageDP22Invariant_BasisVocabularyExact = Assert<
  Equal<
    PondVoiceInputRequestBasis,
    | "receiver_recorded_voice_request_not_inferred"
    | "inferred_from_conversation_composition"
    | "inferred_from_device_presence"
    | "asserted_by_model_completion"
    | "inferred_from_provider_session"
    | "replayed_from_prior_voice_request"
  >
>;
export type PondStageDP22Invariant_EventMetadataExact = Assert<
  Equal<
    PondVoiceInputRequestEventMetadata,
    {
      readonly voice_requested_at_epoch_ms: number;
      readonly freshness_basis: "voice_request_event_time_only";
      readonly currentness_posture: "not_established_consumer_must_evaluate";
    }
  >
>;
export type PondStageDP22Invariant_RequestPosturesExact = Assert<
  Equal<
    PondVoiceInputRequest,
    {
      readonly contractVersion: "pond-voice-input-request-decision-d-p22";
      readonly kind: "pond-voice-input-request";
      readonly principalRef: string;
      readonly voiceInputRequestBasis: PondVoiceInputRequestBasis;
      readonly voiceInputRequestMetadata: PondVoiceInputRequestEventMetadata;
      readonly voiceRequestCapturePosture: "voice_input_request_requests_no_capture_the_mic_stays_disabled_this_cut";
      readonly voiceRequestTranscriptionPosture: "no_transcription_composed_by_a_request_transcription_is_the_provider_decision_lane";
      readonly voiceRequestRunwayPosture: "voice_runway_only_no_capture_or_transcription_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_causes";
      readonly voiceRequestChannelPosture: "spoken_operator_input_is_not_the_typed_channel_the_channels_never_become_interchangeable_because_they_serialize_as_text";
      readonly voiceRequestScopePosture: "a_microphone_device_is_not_a_principal_scope_is_never_created_from_physical_presence_or_a_channel";
      readonly voiceRequestEvidencePosture: "voice_request_is_not_evidence_an_observation_alone_is_never_canonical_evidence_uncertainty_is_never_serialized_as_a_zero";
      readonly voiceRequestAuthorityPosture: "voice_request_grants_no_authority_membership_or_admission";
      readonly authority: "none";
    }
  >
>;
export type PondStageDP22Invariant_MappedReadGateTiedToDP15 = Assert<
  Equal<
    PondVoiceInputRequestDecisionAssessment["mappedReadGateState"],
    PondLiveSessionReadGateAssessment["liveSessionReadGateState"]
  >
>;
export type PondStageDP22Invariant_MappedReadGateReasonTiedToDP15 = Assert<
  Equal<
    PondVoiceInputRequestDecisionAssessment["mappedReadGateReassessmentReason"],
    PondLiveSessionReadGateAssessment["reason"]
  >
>;
export type PondStageDP22Invariant_MappedEstablishmentThroughDP15 = Assert<
  Equal<
    PondVoiceInputRequestDecisionAssessment["mappedEstablishmentState"],
    PondLiveSessionReadGateAssessment["mappedLiveSessionEstablishmentState"]
  > extends true
    ? Equal<
        PondVoiceInputRequestDecisionAssessment["mappedEstablishmentReason"],
        PondLiveSessionReadGateAssessment["mappedLiveSessionEstablishmentReason"]
      >
    : false
>;
export type PondStageDP22Invariant_MappedDp10ThroughDP15 = Assert<
  Equal<
    PondVoiceInputRequestDecisionAssessment["mappedDp10ActivationState"],
    PondLiveSessionReadGateAssessment["mappedDp10ActivationState"]
  > extends true
    ? Equal<
        PondVoiceInputRequestDecisionAssessment["mappedDp10Reason"],
        PondLiveSessionReadGateAssessment["mappedDp10Reason"]
      > extends true
      ? Equal<
          PondVoiceInputRequestDecisionAssessment["mappedDp10SessionScopePosture"],
          PondLiveSessionReadGateAssessment["mappedDp10SessionScopePosture"]
        >
      : false
    : false
>;
export type PondStageDP22Invariant_VoiceRequestEstablishesNothing = Assert<
  Equal<
    [
      PondVoiceInputRequestDecisionAssessment["voiceRequestEstablishesVoiceCaptureOrCaptureRecord"],
      PondVoiceInputRequestDecisionAssessment["voiceRequestEstablishesTranscriptionRuntimeOrOutput"],
      PondVoiceInputRequestDecisionAssessment["voiceRequestEstablishesTranscriptionSelection"],
      PondVoiceInputRequestDecisionAssessment["voiceRequestEstablishesAgentIdentityOrAdmission"],
      PondVoiceInputRequestDecisionAssessment["voiceRequestEstablishesGrant"],
      PondVoiceInputRequestDecisionAssessment["voiceRequestEstablishesConsequenceOrExecution"],
      PondVoiceInputRequestDecisionAssessment["voiceRequestEstablishesAcceptanceOrTaskAgreement"],
      PondVoiceInputRequestDecisionAssessment["voiceRequestEstablishesAuthorityFromProse"],
      PondVoiceInputRequestDecisionAssessment["voiceRequestEstablishesMembershipOrRoomPresence"],
      PondVoiceInputRequestDecisionAssessment["voiceRequestEstablishesScope"],
      PondVoiceInputRequestDecisionAssessment["voiceRequestEchoesTranscriptText"],
      PondVoiceInputRequestDecisionAssessment["voiceRequestCollapsesSpokenAndTypedChannels"],
      PondVoiceInputRequestDecisionAssessment["voiceRequestConsumedByAnyRuntimeOrCapturerThisCut"],
      PondVoiceInputRequestDecisionAssessment["credentialAdmitted"],
      PondVoiceInputRequestDecisionAssessment["principalIdAcceptedAsAuthorization"],
      PondVoiceInputRequestDecisionAssessment["currentTruthAdmitted"],
      PondVoiceInputRequestDecisionAssessment["runtimeActivationPosture"],
      PondVoiceInputRequestDecisionAssessment["authority"],
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
export type PondStageDP22Invariant_NoForbiddenRequestKeys = Assert<
  HasAnyKey<PondVoiceInputRequest, (typeof POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP22Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondVoiceInputRequestDecisionAssessment, (typeof POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS)[number]> extends false
    ? true
    : false
>;