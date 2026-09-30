// Stage D-P22: the transcription-selection decision — the receiver
// records WHICH transcription backend a future runtime WOULD ride, over
// a currently recorded voice-input request (contract (a)). The decision
// performs NO capture, NO transcription inference, NO audio I/O, NO
// authentication, NO backend contact, and is consumed by nothing this
// cut — it is a declaration of what a future runtime would ride, and
// the declared-not-performable refusals are exactly the honest record of
// that.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): transcription has NO declared channel class in the
// fabric input-class table (blueprints/fabric L296-309 — no audio row,
// and L298: "Exact schemas and owners remain deferred"), so transcribed
// operator text enters either via a domain-specific channel under
// trusted-channel L35 ("Additional domain-specific channels may exist…
// fail closed") or as transcribed text under the allocation L481
// operator/task-input row ("Requested intent and supplied content"; its
// must-not column: "Identity, Grant, approval, or policy state by prose
// alone"). THIS CUT RECORDS ITS OWN CHOICE: the lane records a decision
// about a LOCAL ASR runtime — no cloud, no community gateway, no
// credential path — and future transcription output enters as supplied
// content, never canonical evidence. No model or ASR-model reference is
// carried: a model reference without a performed backend contact is an
// unverified claim, and this decision performs no contact (the D-P21
// provider-decision discipline, verbatim).
//
// Vocabulary posture. The backend-class, backend-id, and access-mechanism
// vocabularies below are MINTED by this lane, not Equal-pinned: no voice
// provider substrate exists in the frozen foundation (the D-P21
// substrate declares cognition providers only; the fabric input-class
// table has no audio row, and its schemas/owners are explicitly
// deferred). The custody, boundary, and support-tier sets, by contrast,
// ARE re-declared verbatim from the frozen D-P21 provider decision's
// declared sets and Equal-pinned to those declaration types in the
// invariants block — the credential-governance vocabulary is shared
// lane-wide by recorded law, and a drift there is a compile error.
// Cloud and community selections carry the EMPTY backend-id literal: an
// id is minted only by a performed contact, and this cut performs none —
// a minted id like `mistral_asr` under `cloud_asr` is exactly the
// unverified claim the discipline refuses.
//
// The ONE performable selection is the local ASR tuple: it is the only
// selection touching no external provider, no credential path, and no
// external boundary. Every cloud or community selection is declared
// vocabulary that refuses at its dedicated performability cause with
// the selection echoed.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type { PondVoiceInputRequestDecisionAssessment } from "./pond-voice-input-request-decision.js";
import {
  assessPondVoiceInputRequestDecision,
  POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS,
} from "./pond-voice-input-request-decision.ts";
// The custody, data-boundary, and support-tier declaration types are
// re-declared verbatim from the frozen D-P21 provider decision's
// declared sets (same literals, including `sovereign_local`), and
// Equal-pinned to them in the invariants block below — the credential-
// governance vocabulary is consumed, not invented, and a drift is a
// compile error.
import type {
  PondCredentialCustodyClassDeclaration,
  PondCognitionDataBoundaryClassDeclaration,
  PondCognitionSupportTierDeclaration,
} from "./pond-cognition-provider-decision.js";

// The MINTED transcription-backend-class vocabulary: three classes — a
// local ASR runtime, a cloud ASR service, and a community gateway. No
// substrate exists for voice; these are this lane's own declaration, no
// Equal pin (fabric L296-309).
export type PondTranscriptionBackendClassDeclaration =
  | "local_asr"
  | "cloud_asr"
  | "community_gateway";

// The MINTED selected-backend-id vocabulary: ONE local id, deliberately
// structural, plus the empty literal. Cloud and community selections
// carry the empty literal — an id is minted only by a performed backend
// contact, and this cut performs none, so any other string under a
// cloud/community class is an unverified claim that refuses at the id
// cause.
export type PondSelectedTranscriptionBackendId =
  | "local_asr_engine"
  | "";

// The MINTED access-mechanism vocabulary: the local mechanism plus the
// four credential paths (renamed in kind from the cognition list, whose
// `local_runtime` mechanism is a runtime name, not an ASR name).
export type PondTranscriptionAccessMechanismDeclaration =
  | "local_asr"
  | "api_key"
  | "delegated_oauth"
  | "interactive_subscription"
  | "workload_identity"
  | "community_gateway";

// The re-declared custody / boundary / tier sets, verbatim from the
// frozen D-P21 provider decision (Equal-pinned in the invariants block).
export type PondTranscriptionCredentialCustodyClass =
  PondCredentialCustodyClassDeclaration;
export type PondTranscriptionDataBoundaryClass =
  PondCognitionDataBoundaryClassDeclaration;
export type PondTranscriptionSupportTier = PondCognitionSupportTierDeclaration;

const transcriptionBackendClassVocabulary: readonly PondTranscriptionBackendClassDeclaration[] = [
  "local_asr",
  "cloud_asr",
  "community_gateway",
];

const transcriptionAccessMechanismVocabulary: readonly PondTranscriptionAccessMechanismDeclaration[] = [
  "local_asr",
  "api_key",
  "delegated_oauth",
  "interactive_subscription",
  "workload_identity",
  "community_gateway",
];

const credentialCustodyVocabulary: readonly PondTranscriptionCredentialCustodyClass[] = [
  "toadaid_managed",
  "principal_managed",
  "delegated",
  "local_operator",
  "community_managed",
];

const dataBoundaryVocabulary: readonly PondTranscriptionDataBoundaryClass[] = [
  "external_cloud",
  "local_operator_controlled",
  "community_governed",
];

const supportTierVocabulary: readonly PondTranscriptionSupportTier[] = [
  "launch_primary",
  "launch_primary_alternate",
  "specialist_direction",
  "evaluation_candidate",
  "experimental",
  "sovereign_local",
  "future_community",
];

// The per-class compatibility matrix. The local ASR consumes no
// credential path (a local operator-controlled boundary); the cloud ASR
// consumes one (an external-cloud boundary); the community gateway rides
// the future community governance. Frozen, deterministic — an
// incoherent selection refuses at its own incoherence cause.
const classMechanismVocabulary = {
  local_asr: ["local_asr"],
  cloud_asr: [
    "api_key",
    "delegated_oauth",
    "interactive_subscription",
    "workload_identity",
  ],
  community_gateway: ["community_gateway"],
} as const;

const classCustodyVocabulary = {
  local_asr: ["local_operator"],
  cloud_asr: ["toadaid_managed", "principal_managed", "delegated"],
  community_gateway: ["community_managed"],
} as const;

const classDataBoundary = {
  local_asr: "local_operator_controlled",
  cloud_asr: "external_cloud",
  community_gateway: "community_governed",
} as const;

// The ONE performable selection this cut: the only one touching no
// external provider, no credential path, and no external boundary.
export const POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS = Object.freeze(
  [
    Object.freeze({
      transcriptionBackendClass: "local_asr",
      selectedTranscriptionBackendId: "local_asr_engine",
      transcriptionAccessMechanism: "local_asr",
      credentialCustodyClass: "local_operator",
      dataBoundaryClass: "local_operator_controlled",
      supportTier: "sovereign_local",
    }),
  ] as const,
);

// The selection echo's shape: what the receiver NAMED, carried as the
// named strings themselves (the D-P21 echo precedent — an echoed
// selection may name values outside the declared vocabularies; that is
// exactly what the refusals surface).
export interface PondStageDP22RecordedTranscriptionSelection {
  readonly transcriptionBackendClass: string;
  readonly selectedTranscriptionBackendId: string;
  readonly transcriptionAccessMechanism: string;
  readonly credentialCustodyClass: string;
  readonly dataBoundaryClass: string;
  readonly supportTier: string;
}

// The transcription-decision basis vocabulary: one true receiver-recorded
// basis and five refused bases (the D-P20/D-P21 basis mold). A
// transcription decision is a current stance of the receiving side —
// nothing in the voice request, a model completion, a provider session,
// available credentials, or a prior decision may record it here.
export type PondTranscriptionDecisionBasis =
  | "receiver_recorded_transcription_decision_not_inferred"
  | "inferred_from_voice_request"
  | "asserted_by_model_completion"
  | "inferred_from_provider_session"
  | "inferred_from_credential_availability"
  | "replayed_from_prior_transcription_decision";

export interface PondTranscriptionDecisionEventMetadata {
  readonly recorded_at_epoch_ms: number;
  readonly freshness_basis: "transcription_decision_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

// The receiver-recorded transcription decision: 20 exact keys. NO
// runtime is established, NO ASR-model reference is carried, NO audio is
// captured, NO transcription is composed, and NO credential is admitted.
export interface PondTranscriptionDecision {
  readonly contractVersion: "pond-voice-transcription-provider-decision-d-p22";
  readonly kind: "pond-voice-transcription-provider-decision";
  readonly principalRef: string;
  readonly transcriptionDecisionBasis: PondTranscriptionDecisionBasis;
  readonly transcriptionBackendClass: PondTranscriptionBackendClassDeclaration;
  readonly selectedTranscriptionBackendId: PondSelectedTranscriptionBackendId;
  readonly transcriptionAccessMechanism: PondTranscriptionAccessMechanismDeclaration;
  readonly credentialCustodyClass: PondTranscriptionCredentialCustodyClass;
  readonly dataBoundaryClass: PondTranscriptionDataBoundaryClass;
  readonly supportTier: PondTranscriptionSupportTier;
  readonly transcriptionDecisionMetadata: PondTranscriptionDecisionEventMetadata;
  readonly transcriptionDecisionRuntimePosture: "no_transcription_runtime_established_the_decision_records_a_selection_not_a_runtime";
  readonly transcriptionDecisionCapturePosture: "performs_no_capture_no_audio_io_no_recording";
  readonly transcriptionDecisionIdentityPosture: "provider_session_is_not_agent_no_agentid_created";
  readonly transcriptionDecisionAccessPosture: "declared_capability_not_granted_no_credential_admitted_no_authentication_performed";
  readonly transcriptionDecisionBoundaryPosture: "declared_policy_not_verified_runtime_evidence";
  readonly transcriptionDecisionFallbackPosture: "no_silent_fallback_no_failure_transition_authorized";
  readonly transcriptionDecisionVoicePosture: "no_transcription_composed_the_decision_rides_a_currently_recorded_voice_request_only";
  readonly transcriptionDecisionConsumptionPosture: "consumed_by_no_runtime_composer_or_transport_this_cut";
  readonly authority: "none";
}

// Receiver-owned transcription-decision checks (L49-55).
export type PondTranscriptionDecisionCheck =
  | "transcription_decision_record_well_formed"
  | "transcription_decision_bound_to_receiver_held_principal"
  | "transcription_decision_basis_receiver_recorded_not_inferred"
  | "voice_request_currently_recorded_reassessed_session_scoped"
  | "transcription_selection_in_declared_verbatim_vocabulary"
  | "transcription_backend_id_of_declared_backend_class"
  | "transcription_access_custody_and_boundary_compatible_with_backend_class"
  | "transcription_selection_performable_this_cut"
  | "transcription_decision_event_within_current_session_scope"
  | "transcription_decision_event_own_freshness_within_declared_maximum_age"
  | "transcription_decision_refusal_postures_complete";

// The transcription-decision input: 15 exact keys — the voice-request
// decision input verbatim (the shape the voice module stores) plus the
// transcription decision. One evaluation pair serves the decision
// event's freshness and every leg's re-run inside the reassessment.
export interface PondVoiceTranscriptionProviderDecisionInput {
  readonly transcriptionDecision: unknown;
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

// The transcription-decision assessment.
export interface PondVoiceTranscriptionProviderDecisionAssessment {
  readonly contractVersion: "pond-voice-transcription-provider-decision-d-p22";
  readonly transcriptionDecisionVersion:
    | "pond-voice-transcription-provider-decision-d-p22"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_transcription_provider_decision";
  readonly transcriptionDecisionState:
    | "transcription_decision_not_recorded"
    | "transcription_decision_recorded_session_scoped_no_runtime_established";
  readonly reason:
    | "transcription_decision_record_invalid"
    | "voice_request_not_currently_recorded"
    | "transcription_backend_class_unknown_fail_closed"
    | "transcription_backend_id_unknown_or_not_of_declared_backend_class"
    | "transcription_access_mechanism_not_compatible_with_declared_backend_class"
    | "transcription_credential_custody_not_compatible_with_declared_backend_class"
    | "transcription_data_boundary_not_compatible_with_declared_backend_class"
    | "transcription_selection_declared_not_performable_this_cut"
    | "transcription_decision_event_not_session_current"
    | "transcription_decision_event_not_of_the_current_session_scope"
    | "receiver_transcription_decision_proof_incomplete"
    | "all_transcription_decision_checks_satisfied";
  readonly transcriptionDecisionEventFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // The selection echo, computed on every arm where the record is
  // validly shaped (null on an invalid record). A declared-not-performable
  // selection is echoed at its dedicated cause; this echo carries what
  // the receiver named, never what any runtime contacted.
  readonly recordedTranscriptionSelection: PondStageDP22RecordedTranscriptionSelection | null;
  // Mapped echo fields: the frozen voice-request re-run's own fields
  // carried verbatim on every arm, and THROUGH them the read gate's
  // verdict — one depth deeper readable than the D-P21 provider set,
  // because the voice request's mapped echoes already carry the gate.
  readonly mappedVoiceRequestState: PondVoiceInputRequestDecisionAssessment["voiceInputRequestState"];
  readonly mappedVoiceRequestReassessmentReason: PondVoiceInputRequestDecisionAssessment["reason"];
  readonly mappedVoiceRequestDiagnosis: PondVoiceInputRequestDecisionAssessment["voiceInputRequestEventFreshnessDiagnosis"];
  readonly mappedReadGateState: PondVoiceInputRequestDecisionAssessment["mappedReadGateState"];
  readonly mappedReadGateReassessmentReason: PondVoiceInputRequestDecisionAssessment["mappedReadGateReassessmentReason"];
  readonly mappedReadGateFreshnessDiagnosis: PondVoiceInputRequestDecisionAssessment["mappedReadGateFreshnessDiagnosis"];
  readonly satisfiedChecks: readonly PondTranscriptionDecisionCheck[];
  readonly unsatisfiedChecks: readonly PondTranscriptionDecisionCheck[];
  // The retention posture: the D-P20/D-P21 decision posture (a decision
  // is session-scoped stance whose applicability the reassessment
  // governs).
  readonly transcriptionDecisionRetentionPosture: "transcription_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction";
  // The all-false ceiling: a recorded decision is a declaration of WHAT
  // a future runtime WOULD ride, nothing more. It never establishes a
  // transcription runtime or model access, voice capture or a captured
  // audio record, or transcription output; it performs no capture or
  // audio I/O, no transcription or model contact, no authentication or
  // backend contact, and no silent fallback; it never establishes a
  // grant, a consequence or execution, prose authority, membership or
  // admission, or a scope; it is consumed by nothing this cut; and it
  // admits no credential, no PrincipalId authorization, and no current
  // truth.
  readonly transcriptionDecisionEstablishesTranscriptionRuntimeOrModelAccess: false;
  readonly transcriptionDecisionEstablishesVoiceCaptureOrCapturedAudioRecord: false;
  readonly transcriptionDecisionEstablishesTranscriptionOutput: false;
  readonly transcriptionDecisionPerformsCaptureOrAudioIo: false;
  readonly transcriptionDecisionPerformsTranscriptionOrModelContact: false;
  readonly transcriptionDecisionPerformsAuthenticationOrBackendContact: false;
  readonly transcriptionDecisionPerformsSilentFallback: false;
  readonly transcriptionDecisionEstablishesGrant: false;
  readonly transcriptionDecisionEstablishesConsequenceOrExecution: false;
  readonly transcriptionDecisionEstablishesAuthorityFromProse: false;
  readonly transcriptionDecisionEstablishesMembershipOrAdmission: false;
  readonly transcriptionDecisionEstablishesScope: false;
  readonly transcriptionDecisionConsumedThisCut: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const transcriptionDecisionChecks = Object.freeze([
  "transcription_decision_record_well_formed",
  "transcription_decision_bound_to_receiver_held_principal",
  "transcription_decision_basis_receiver_recorded_not_inferred",
  "voice_request_currently_recorded_reassessed_session_scoped",
  "transcription_selection_in_declared_verbatim_vocabulary",
  "transcription_backend_id_of_declared_backend_class",
  "transcription_access_custody_and_boundary_compatible_with_backend_class",
  "transcription_selection_performable_this_cut",
  "transcription_decision_event_within_current_session_scope",
  "transcription_decision_event_own_freshness_within_declared_maximum_age",
  "transcription_decision_refusal_postures_complete",
] as const satisfies readonly PondTranscriptionDecisionCheck[]);

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

// The D-P2 freshness diagnosis over the decision-event metadata (same
// ordering: metadata, then evaluation time, then maximum age, then
// future time; the fresh boundary is inclusive).
const diagnoseTranscriptionDecisionFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.recorded_at_epoch_ms) ||
    checked.freshness_basis !== "transcription_decision_event_time_only" ||
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

const transcriptionBasisVocabulary = [
  "receiver_recorded_transcription_decision_not_inferred",
  "inferred_from_voice_request",
  "asserted_by_model_completion",
  "inferred_from_provider_session",
  "inferred_from_credential_availability",
  "replayed_from_prior_transcription_decision",
];

// The eight declarative-refusal posture fields.
const posturesComplete = (recordValue: Record<string, unknown>) =>
  recordValue.transcriptionDecisionRuntimePosture ===
    "no_transcription_runtime_established_the_decision_records_a_selection_not_a_runtime" &&
  recordValue.transcriptionDecisionCapturePosture ===
    "performs_no_capture_no_audio_io_no_recording" &&
  recordValue.transcriptionDecisionIdentityPosture ===
    "provider_session_is_not_agent_no_agentid_created" &&
  recordValue.transcriptionDecisionAccessPosture ===
    "declared_capability_not_granted_no_credential_admitted_no_authentication_performed" &&
  recordValue.transcriptionDecisionBoundaryPosture ===
    "declared_policy_not_verified_runtime_evidence" &&
  recordValue.transcriptionDecisionFallbackPosture ===
    "no_silent_fallback_no_failure_transition_authorized" &&
  recordValue.transcriptionDecisionVoicePosture ===
    "no_transcription_composed_the_decision_rides_a_currently_recorded_voice_request_only" &&
  recordValue.transcriptionDecisionConsumptionPosture ===
    "consumed_by_no_runtime_composer_or_transport_this_cut";

const exactTranscriptionDecisionEventMetadata = (value: unknown): boolean => {
  const metadataValue = record(value);
  return (
    metadataValue !== null &&
    exactKeys(metadataValue, [
      "recorded_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadataValue.recorded_at_epoch_ms) &&
    metadataValue.freshness_basis === "transcription_decision_event_time_only" &&
    metadataValue.currentness_posture ===
      "not_established_consumer_must_evaluate"
  );
};

// Valid decision-record shape only — record validity, not admission.
// The voice request under the decision is the re-run's material, not
// this check's: the re-run validates the request and its gate
// reassessment wholesale, and its conclusion is carried verbatim as the
// mapped echo. Selection validity rides the SELECTION-VALIDITY check
// (`transcription_selection_in_declared_verbatim_vocabulary`), the id
// check, the compatibility check, and the performability check below —
// never here.
const validTranscriptionDecisionRecord = (value: unknown): boolean => {
  const decisionValue = record(value);
  return (
    decisionValue !== null &&
    exactKeys(decisionValue, [
      "contractVersion",
      "kind",
      "principalRef",
      "transcriptionDecisionBasis",
      "transcriptionBackendClass",
      "selectedTranscriptionBackendId",
      "transcriptionAccessMechanism",
      "credentialCustodyClass",
      "dataBoundaryClass",
      "supportTier",
      "transcriptionDecisionMetadata",
      "transcriptionDecisionRuntimePosture",
      "transcriptionDecisionCapturePosture",
      "transcriptionDecisionIdentityPosture",
      "transcriptionDecisionAccessPosture",
      "transcriptionDecisionBoundaryPosture",
      "transcriptionDecisionFallbackPosture",
      "transcriptionDecisionVoicePosture",
      "transcriptionDecisionConsumptionPosture",
      "authority",
    ]) &&
    decisionValue.contractVersion ===
      "pond-voice-transcription-provider-decision-d-p22" &&
    decisionValue.kind === "pond-voice-transcription-provider-decision" &&
    transcriptionBasisVocabulary.includes(
      String(decisionValue.transcriptionDecisionBasis),
    ) &&
    typeof decisionValue.transcriptionBackendClass === "string" &&
    typeof decisionValue.selectedTranscriptionBackendId === "string" &&
    typeof decisionValue.transcriptionAccessMechanism === "string" &&
    typeof decisionValue.credentialCustodyClass === "string" &&
    typeof decisionValue.dataBoundaryClass === "string" &&
    typeof decisionValue.supportTier === "string" &&
    exactTranscriptionDecisionEventMetadata(
      decisionValue.transcriptionDecisionMetadata,
    ) &&
    wellFormedPrincipalRef(decisionValue.principalRef) &&
    posturesComplete(decisionValue) &&
    decisionValue.authority === "none" &&
    !hasForbiddenKey(decisionValue, POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS)
  );
};

// The voice-request legs, verbatim: the decision's re-run consumes the
// frozen classifier over the SAME request legs the voice module stored
// — the 14 request keys, never the decision key (spreading the 15-key
// input would pass the decision into the re-run; the projection is the
// type-tie seam).
const fullVoiceRequestLegs = (
  input: PondVoiceTranscriptionProviderDecisionInput,
) =>
  ({
    voiceInputRequest: input.voiceInputRequest,
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

// The mapped echo shapes (typed to the frozen reassessment so a drift
// is a compile error, values carried verbatim from its fields — and
// THROUGH the request re-run the gate's mapped echoes ride one depth
// deeper readable).
interface PondMappedVoiceRequestEcho {
  readonly state: PondVoiceInputRequestDecisionAssessment["voiceInputRequestState"];
  readonly reason: PondVoiceInputRequestDecisionAssessment["reason"];
  readonly eventDiagnosis: PondVoiceInputRequestDecisionAssessment["voiceInputRequestEventFreshnessDiagnosis"];
}

interface PondMappedReadGateEcho {
  readonly state: PondVoiceInputRequestDecisionAssessment["mappedReadGateState"];
  readonly reason: PondVoiceInputRequestDecisionAssessment["mappedReadGateReassessmentReason"];
  readonly diagnosis: PondVoiceInputRequestDecisionAssessment["mappedReadGateFreshnessDiagnosis"];
}

const transcriptionAssessment = (
  reason: PondVoiceTranscriptionProviderDecisionAssessment["reason"],
  transcriptionDecisionVersion: PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  recordedTranscriptionSelection: PondVoiceTranscriptionProviderDecisionAssessment["recordedTranscriptionSelection"],
  mappedVoiceRequest: PondMappedVoiceRequestEcho,
  mappedReadGate: PondMappedReadGateEcho,
  satisfiedChecks: readonly PondTranscriptionDecisionCheck[],
  unsatisfiedChecks: readonly PondTranscriptionDecisionCheck[],
): PondVoiceTranscriptionProviderDecisionAssessment => {
  const recorded = reason === "all_transcription_decision_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-voice-transcription-provider-decision-d-p22",
    transcriptionDecisionVersion,
    assessmentKind: "deterministic_supplied_transcription_provider_decision",
    transcriptionDecisionState: recorded
      ? "transcription_decision_recorded_session_scoped_no_runtime_established"
      : "transcription_decision_not_recorded",
    reason,
    transcriptionDecisionEventFreshnessDiagnosis: diagnosis,
    recordedTranscriptionSelection,
    mappedVoiceRequestState: mappedVoiceRequest.state,
    mappedVoiceRequestReassessmentReason: mappedVoiceRequest.reason,
    mappedVoiceRequestDiagnosis: mappedVoiceRequest.eventDiagnosis,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReassessmentReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The retention posture: honest re-assessment after retraction — the
    // D-P20/D-P21 decision posture.
    transcriptionDecisionRetentionPosture:
      "transcription_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction" as const,
    // A recorded decision is a declaration of WHAT a future runtime
    // would ride, nothing more (see the ceiling commentary on the
    // interface for the law anchors).
    transcriptionDecisionEstablishesTranscriptionRuntimeOrModelAccess: false,
    transcriptionDecisionEstablishesVoiceCaptureOrCapturedAudioRecord: false,
    transcriptionDecisionEstablishesTranscriptionOutput: false,
    transcriptionDecisionPerformsCaptureOrAudioIo: false,
    transcriptionDecisionPerformsTranscriptionOrModelContact: false,
    transcriptionDecisionPerformsAuthenticationOrBackendContact: false,
    transcriptionDecisionPerformsSilentFallback: false,
    transcriptionDecisionEstablishesGrant: false,
    transcriptionDecisionEstablishesConsequenceOrExecution: false,
    transcriptionDecisionEstablishesAuthorityFromProse: false,
    transcriptionDecisionEstablishesMembershipOrAdmission: false,
    transcriptionDecisionEstablishesScope: false,
    transcriptionDecisionConsumedThisCut: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

// The selection echo built from a validated-shape record (valid
// vocabulary membership or not — the echo carries what the receiver
// NAMED once the record shape is valid; an invalid record echoes null).
const selectionOf = (
  decisionValue: Record<string, unknown>,
): PondStageDP22RecordedTranscriptionSelection =>
  Object.freeze({
    transcriptionBackendClass: String(
      decisionValue["transcriptionBackendClass"],
    ),
    selectedTranscriptionBackendId: String(
      decisionValue["selectedTranscriptionBackendId"],
    ),
    transcriptionAccessMechanism: String(
      decisionValue["transcriptionAccessMechanism"],
    ),
    credentialCustodyClass: String(decisionValue["credentialCustodyClass"]),
    dataBoundaryClass: String(decisionValue["dataBoundaryClass"]),
    supportTier: String(decisionValue["supportTier"]),
  });

export function assessPondVoiceTranscriptionProviderDecision(
  input: PondVoiceTranscriptionProviderDecisionInput,
): PondVoiceTranscriptionProviderDecisionAssessment {
  // The fail-closed gate on the input object itself: garbage never throws
  // — a non-object input degrades to an empty record the validation and
  // re-runs refuse honestly (the D-P8 fail-closed discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondVoiceTranscriptionProviderDecisionInput;
  // The echoes are computed on every arm, before any cause is chosen: a
  // broken decision never unbinds the receiver's request, and an invalid
  // arm still diagnoses (D-P13 echo discipline). The voice-request
  // re-run goes through this contract's own seam (evidence-activation
  // L109 — the independent inspection IS the re-run): the frozen
  // pond-voice-input-request ceremony re-runs itself over the SAME
  // request legs and the SAME re-timed evaluation pair, and inside it
  // the frozen D-P15 read gate and establishment chain re-run again.
  const requestReassessment = assessPondVoiceInputRequestDecision(
    fullVoiceRequestLegs(input),
  );
  const mappedVoiceRequest: PondMappedVoiceRequestEcho = {
    state: requestReassessment["voiceInputRequestState"],
    reason: requestReassessment["reason"],
    eventDiagnosis:
      requestReassessment["voiceInputRequestEventFreshnessDiagnosis"],
  };
  const mappedReadGate: PondMappedReadGateEcho = {
    state: requestReassessment["mappedReadGateState"],
    reason: requestReassessment["mappedReadGateReassessmentReason"],
    diagnosis: requestReassessment["mappedReadGateFreshnessDiagnosis"],
  };
  // The D-P16 fallback pattern: diagnose the raw evaluation pair even
  // when the decision never becomes valid, so every arm carries an
  // honest decision-event diagnosis.
  const fallbackDiagnosis = diagnoseTranscriptionDecisionFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validTranscriptionDecisionRecord(input.transcriptionDecision))
    return transcriptionAssessment(
      "transcription_decision_record_invalid",
      "invalid",
      fallbackDiagnosis,
      null,
      mappedVoiceRequest,
      mappedReadGate,
      [],
      transcriptionDecisionChecks,
    );
  const decisionValue = input.transcriptionDecision as Record<
    string,
    unknown
  >;
  const decisionEventMetadata = record(
    decisionValue["transcriptionDecisionMetadata"],
  );
  const selection = selectionOf(decisionValue);
  const backendClass = String(decisionValue["transcriptionBackendClass"]);
  const selectedBackendId = String(
    decisionValue["selectedTranscriptionBackendId"],
  );
  const accessMechanism = String(
    decisionValue["transcriptionAccessMechanism"],
  );
  const credentialCustody = String(decisionValue["credentialCustodyClass"]);
  const dataBoundary = String(decisionValue["dataBoundaryClass"]);
  const supportTier = String(decisionValue["supportTier"]);

  // The decision event's own diagnosis first as data — but the
  // voice-request re-run's verdict outranks it in the ladder (a
  // transcription decision rides a CURRENTLY recorded voice request; a
  // selection in a vacuum would be a floating transcription declaration
  // with no request to ride — and a request in a vacuum is exactly
  // INFERRED-FROM-VOICE-REQUEST, the basis the decision itself refuses),
  // so it refuses before the event's freshness is even asked, with the
  // event diagnosis still readable.
  const decisionDiagnosis = diagnoseTranscriptionDecisionFreshness(
    decisionEventMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );

  // The frozen voice-request re-run's verdict is the verdict.
  if (
    requestReassessment["voiceInputRequestState"] !==
    "voice_input_request_recorded_session_scoped_no_capture_no_transcription"
  )
    return transcriptionAssessment(
      "voice_request_not_currently_recorded",
      "pond-voice-transcription-provider-decision-d-p22",
      decisionDiagnosis,
      selection,
      mappedVoiceRequest,
      mappedReadGate,
      [],
      transcriptionDecisionChecks,
    );

  // Coherence refusals BEFORE performability: an incoherent selection
  // refuses at its own incoherence even though it would refuse anyway —
  // the refusal must honestly name WHY it cannot be performed.
  if (!transcriptionBackendClassVocabulary.includes(
      backendClass as PondTranscriptionBackendClassDeclaration,
    ))
    return transcriptionAssessment(
      "transcription_backend_class_unknown_fail_closed",
      "pond-voice-transcription-provider-decision-d-p22",
      decisionDiagnosis,
      selection,
      mappedVoiceRequest,
      mappedReadGate,
      [],
      transcriptionDecisionChecks,
    );
  const expectedBackendId: readonly string[] =
    backendClass === "local_asr"
      ? ["local_asr_engine"]
      : backendClass === "cloud_asr"
      ? [""]
      : [""];
  if (!expectedBackendId.includes(selectedBackendId))
    return transcriptionAssessment(
      "transcription_backend_id_unknown_or_not_of_declared_backend_class",
      "pond-voice-transcription-provider-decision-d-p22",
      decisionDiagnosis,
      selection,
      mappedVoiceRequest,
      mappedReadGate,
      [],
      transcriptionDecisionChecks,
    );
  // The per-class rows are widened to readonly string[] at the read
  // site: the aliased performability narrowing later would otherwise
  // make the tuple `.includes` casts degenerate to `never` (the D-P21
  // read-site widening, verbatim).
  const classMechanisms: readonly string[] =
    classMechanismVocabulary[
      backendClass as keyof typeof classMechanismVocabulary
    ];
  if (transcriptionAccessMechanismVocabulary.indexOf(
      accessMechanism as PondTranscriptionAccessMechanismDeclaration,
    ) === -1 ||
    !classMechanisms.includes(accessMechanism))
    return transcriptionAssessment(
      "transcription_access_mechanism_not_compatible_with_declared_backend_class",
      "pond-voice-transcription-provider-decision-d-p22",
      decisionDiagnosis,
      selection,
      mappedVoiceRequest,
      mappedReadGate,
      [],
      transcriptionDecisionChecks,
    );
  const classCustody: readonly string[] =
    classCustodyVocabulary[
      backendClass as keyof typeof classCustodyVocabulary
    ];
  if (credentialCustodyVocabulary.indexOf(
      credentialCustody as PondTranscriptionCredentialCustodyClass,
    ) === -1 ||
    !classCustody.includes(credentialCustody))
    return transcriptionAssessment(
      "transcription_credential_custody_not_compatible_with_declared_backend_class",
      "pond-voice-transcription-provider-decision-d-p22",
      decisionDiagnosis,
      selection,
      mappedVoiceRequest,
      mappedReadGate,
      [],
      transcriptionDecisionChecks,
    );
  const expectedBoundary = classDataBoundary[
    backendClass as keyof typeof classDataBoundary
  ];
  if (dataBoundary !== expectedBoundary)
    return transcriptionAssessment(
      "transcription_data_boundary_not_compatible_with_declared_backend_class",
      "pond-voice-transcription-provider-decision-d-p22",
      decisionDiagnosis,
      selection,
      mappedVoiceRequest,
      mappedReadGate,
      [],
      transcriptionDecisionChecks,
    );
  // A support tier OUTSIDE the declared vocabulary makes the declared
  // selection non-performable (no tier exists to stand under) — the
  // refusal is honest at the performability cause with the selection
  // echoed: the tier is not class-scoped, so it is not a coherence
  // refusal, and no third cause exists for it (the D-P21 refusal
  // posture, verbatim).
  if (!supportTierVocabulary.includes(
      supportTier as PondTranscriptionSupportTier,
    ))
    return transcriptionAssessment(
      "transcription_selection_declared_not_performable_this_cut",
      "pond-voice-transcription-provider-decision-d-p22",
      decisionDiagnosis,
      selection,
      mappedVoiceRequest,
      mappedReadGate,
      [],
      transcriptionDecisionChecks,
    );

  // Performability: only the local-ASR selection records here — every
  // cloud or community selection is declared vocabulary that refuses at
  // its dedicated cause with the selection echoed. No credential path
  // exists, no gateway endpoint exists, and no ASR-model reference is
  // carried because this decision performs no contact.
  const performable =
    POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS[0];
  const selectionIsPerformable =
    backendClass === performable.transcriptionBackendClass &&
    selectedBackendId === performable.selectedTranscriptionBackendId &&
    accessMechanism === performable.transcriptionAccessMechanism &&
    credentialCustody === performable.credentialCustodyClass &&
    dataBoundary === performable.dataBoundaryClass &&
    supportTier === performable.supportTier;
  if (!selectionIsPerformable)
    return transcriptionAssessment(
      "transcription_selection_declared_not_performable_this_cut",
      "pond-voice-transcription-provider-decision-d-p22",
      decisionDiagnosis,
      selection,
      mappedVoiceRequest,
      mappedReadGate,
      [],
      transcriptionDecisionChecks,
    );

  // The decision event's own freshness. The decision must postdate the
  // request it rides (a selection before its request is a floating
  // declaration — the scope check below carries that), so on the frozen
  // chain the decision event is YOUNGER than every leg event — the
  // newest-event arithmetic of the later lanes does not hold here too,
  // freshness is evaluated honestly on the decision event alone against
  // the shared evaluation pair (the D-P20 policy-event honesty).
  if (decisionDiagnosis.state !== "fresh")
    return transcriptionAssessment(
      "transcription_decision_event_not_session_current",
      "pond-voice-transcription-provider-decision-d-p22",
      decisionDiagnosis,
      selection,
      mappedVoiceRequest,
      mappedReadGate,
      [],
      transcriptionDecisionChecks,
    );

  // Session-scope binding for the decision event: the recorded decision
  // must postdate the current session's establishment event and the
  // voice-request event it rides — a decision recorded before the
  // session or the request is not in the current scope. The re-run
  // validated the request above, and the request's re-run validated the
  // establishment, so their metadata is read through those validated
  // forms (the D-P18 scope pattern one lane deeper).
  const establishmentMetadata = record(
    (input.establishmentRecord as Record<string, unknown>)[
      "establishmentMetadata"
    ],
  );
  const requestValue = input.voiceInputRequest as Record<string, unknown>;
  const requestEventMetadata = record(
    requestValue["voiceInputRequestMetadata"],
  );
  const establishedAt = establishmentMetadata?.[
    "established_at_epoch_ms"
  ] as number | undefined;
  const voiceRequestedAt = (requestEventMetadata ?? {})[
    "voice_requested_at_epoch_ms"
  ] as number | undefined;
  const decisionRecordedAt = decisionEventMetadata?.[
    "recorded_at_epoch_ms"
  ] as number | undefined;
  if (
    typeof establishedAt !== "number" ||
    typeof voiceRequestedAt !== "number" ||
    typeof decisionRecordedAt !== "number" ||
    decisionRecordedAt < establishedAt ||
    decisionRecordedAt < voiceRequestedAt
  )
    return transcriptionAssessment(
      "transcription_decision_event_not_of_the_current_session_scope",
      "pond-voice-transcription-provider-decision-d-p22",
      decisionDiagnosis,
      selection,
      mappedVoiceRequest,
      mappedReadGate,
      [],
      transcriptionDecisionChecks,
    );

  // The remaining declarative checks, evaluated honestly over the
  // validated record and the re-run verdict: the refused bases fold here
  // with the unsatisfied check names readable (L49-55 — every leg green
  // except the declarative checks that failed), never behind a defensive
  // literal.
  const values = [
    true,
    decisionValue["principalRef"] === input.receiverHeldPrincipalRef &&
      wellFormedPrincipalRef(input.receiverHeldPrincipalRef),
    decisionValue["transcriptionDecisionBasis"] ===
      "receiver_recorded_transcription_decision_not_inferred",
    requestReassessment["voiceInputRequestState"] ===
      "voice_input_request_recorded_session_scoped_no_capture_no_transcription",
    transcriptionBackendClassVocabulary.includes(
      backendClass as PondTranscriptionBackendClassDeclaration,
    ) && expectedBackendId.includes(selectedBackendId),
    expectedBackendId.includes(selectedBackendId),
    classMechanisms.includes(accessMechanism) &&
      classCustody.includes(credentialCustody) &&
      dataBoundary === expectedBoundary &&
      supportTierVocabulary.includes(supportTier as PondTranscriptionSupportTier),
    selectionIsPerformable,
    typeof establishedAt === "number" &&
      typeof voiceRequestedAt === "number" &&
      typeof decisionRecordedAt === "number" &&
      decisionRecordedAt >= establishedAt &&
      decisionRecordedAt >= voiceRequestedAt,
    decisionDiagnosis.state === "fresh",
    posturesComplete(decisionValue),
  ];
  const satisfied = transcriptionDecisionChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = transcriptionDecisionChecks.filter(
    (_, index) => values[index] !== true,
  );
  return transcriptionAssessment(
    unsatisfied.length === 0
      ? "all_transcription_decision_checks_satisfied"
      : "receiver_transcription_decision_proof_incomplete",
    "pond-voice-transcription-provider-decision-d-p22",
    decisionDiagnosis,
    selection,
    mappedVoiceRequest,
    mappedReadGate,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants. The MINTED vocabularies carry no Equal pin —
// no voice substrate exists to pin against (fabric L296-309). The
// custody, boundary, and tier sets ARE Equal-pinned to the frozen D-P21
// provider decision's declaration types: the credential-governance
// vocabulary is consumed, not invented, and a drift is a compile error.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP22Invariant_TranscriptionChecksExact = Assert<
  Equal<
    PondTranscriptionDecisionCheck,
    | "transcription_decision_record_well_formed"
    | "transcription_decision_bound_to_receiver_held_principal"
    | "transcription_decision_basis_receiver_recorded_not_inferred"
    | "voice_request_currently_recorded_reassessed_session_scoped"
    | "transcription_selection_in_declared_verbatim_vocabulary"
    | "transcription_backend_id_of_declared_backend_class"
    | "transcription_access_custody_and_boundary_compatible_with_backend_class"
    | "transcription_selection_performable_this_cut"
    | "transcription_decision_event_within_current_session_scope"
    | "transcription_decision_event_own_freshness_within_declared_maximum_age"
    | "transcription_decision_refusal_postures_complete"
  >
>;
export type PondStageDP22Invariant_TranscriptionStatesExact = Assert<
  Equal<
    PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionState"],
    | "transcription_decision_not_recorded"
    | "transcription_decision_recorded_session_scoped_no_runtime_established"
  >
>;
export type PondStageDP22Invariant_TranscriptionReasonsExact = Assert<
  Equal<
    PondVoiceTranscriptionProviderDecisionAssessment["reason"],
    | "transcription_decision_record_invalid"
    | "voice_request_not_currently_recorded"
    | "transcription_backend_class_unknown_fail_closed"
    | "transcription_backend_id_unknown_or_not_of_declared_backend_class"
    | "transcription_access_mechanism_not_compatible_with_declared_backend_class"
    | "transcription_credential_custody_not_compatible_with_declared_backend_class"
    | "transcription_data_boundary_not_compatible_with_declared_backend_class"
    | "transcription_selection_declared_not_performable_this_cut"
    | "transcription_decision_event_not_session_current"
    | "transcription_decision_event_not_of_the_current_session_scope"
    | "receiver_transcription_decision_proof_incomplete"
    | "all_transcription_decision_checks_satisfied"
  >
>;
export type PondStageDP22Invariant_BasisVocabularyExact = Assert<
  Equal<
    PondTranscriptionDecisionBasis,
    | "receiver_recorded_transcription_decision_not_inferred"
    | "inferred_from_voice_request"
    | "asserted_by_model_completion"
    | "inferred_from_provider_session"
    | "inferred_from_credential_availability"
    | "replayed_from_prior_transcription_decision"
  >
>;
export type PondStageDP22Invariant_CustodyClassesVerbatim = Assert<
  Equal<PondTranscriptionCredentialCustodyClass, PondCredentialCustodyClassDeclaration>
>;
export type PondStageDP22Invariant_DataBoundaryClassesVerbatim = Assert<
  Equal<PondTranscriptionDataBoundaryClass, PondCognitionDataBoundaryClassDeclaration>
>;
export type PondStageDP22Invariant_SupportTiersVerbatim = Assert<
  Equal<PondTranscriptionSupportTier, PondCognitionSupportTierDeclaration>
>;
export type PondStageDP22Invariant_PerformableSelectionsExactlyOne = Assert<
  Equal<
    typeof POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS,
    readonly [
      Readonly<{
        transcriptionBackendClass: "local_asr";
        selectedTranscriptionBackendId: "local_asr_engine";
        transcriptionAccessMechanism: "local_asr";
        credentialCustodyClass: "local_operator";
        dataBoundaryClass: "local_operator_controlled";
        supportTier: "sovereign_local";
      }>,
    ]
  >
>;
export type PondStageDP22Invariant_MappedVoiceRequestTied = Assert<
  Equal<
    PondVoiceTranscriptionProviderDecisionAssessment["mappedVoiceRequestState"],
    PondVoiceInputRequestDecisionAssessment["voiceInputRequestState"]
  >
>;
export type PondStageDP22Invariant_MappedReadGateThroughRequest = Assert<
  Equal<
    PondVoiceTranscriptionProviderDecisionAssessment["mappedReadGateState"],
    PondVoiceInputRequestDecisionAssessment["mappedReadGateState"]
  > extends true
    ? Equal<
        PondVoiceTranscriptionProviderDecisionAssessment["mappedReadGateReassessmentReason"],
        PondVoiceInputRequestDecisionAssessment["mappedReadGateReassessmentReason"]
      > extends true
      ? Equal<
          PondVoiceTranscriptionProviderDecisionAssessment["mappedReadGateFreshnessDiagnosis"],
          PondVoiceInputRequestDecisionAssessment["mappedReadGateFreshnessDiagnosis"]
        >
      : false
    : false
>;
export type PondStageDP22Invariant_TranscriptionEstablishesNothing = Assert<
  Equal<
    [
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionEstablishesTranscriptionRuntimeOrModelAccess"],
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionEstablishesVoiceCaptureOrCapturedAudioRecord"],
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionEstablishesTranscriptionOutput"],
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionPerformsCaptureOrAudioIo"],
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionPerformsTranscriptionOrModelContact"],
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionPerformsAuthenticationOrBackendContact"],
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionPerformsSilentFallback"],
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionEstablishesGrant"],
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionEstablishesConsequenceOrExecution"],
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionEstablishesAuthorityFromProse"],
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionEstablishesMembershipOrAdmission"],
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionEstablishesScope"],
      PondVoiceTranscriptionProviderDecisionAssessment["transcriptionDecisionConsumedThisCut"],
      PondVoiceTranscriptionProviderDecisionAssessment["credentialAdmitted"],
      PondVoiceTranscriptionProviderDecisionAssessment["principalIdAcceptedAsAuthorization"],
      PondVoiceTranscriptionProviderDecisionAssessment["currentTruthAdmitted"],
      PondVoiceTranscriptionProviderDecisionAssessment["runtimeActivationPosture"],
      PondVoiceTranscriptionProviderDecisionAssessment["authority"],
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
export type PondStageDP22Invariant_NoForbiddenDecisionKeys = Assert<
  HasAnyKey<PondTranscriptionDecision, (typeof POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP22Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondVoiceTranscriptionProviderDecisionAssessment, (typeof POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS)[number]> extends false
    ? true
    : false
>;