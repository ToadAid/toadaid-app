// Stage D-P22: the claimed-voice wall — a standing fail-closed refusal
// ceremony for claims of a voice transcript, capture, or synthesis.
// Companion contracts: pond-voice-input-request-decision.ts and pond-
// voice-transcription-provider-decision.ts (one lane, three contracts).
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/trusted-channel-separation-contract.md
// L7 (channels must never become interchangeable because they serialize
// as text — the lane's own anchor: a claimed transcript recasting a
// spoken utterance as typed text is exactly that collapse), L23-33 (the
// declared channel classes — no voice/audio class exists among them),
// and L35 (unknown names fail closed), contracts/scope-sovereignty-
// contract.md L15 and L21 (a microphone device is not a principal, and
// scope is never created from physical presence or a channel — a claimed
// capture confers no operator identity or scope), blueprints/fabric
// L296-309 (the input-class table has NO audio row) and
// governed-runtime-component-allocation.md L481 (the operator/task-input
// row: "Requested intent and supplied content"; its must-not column:
// "Identity, Grant, approval, or policy state by prose alone"), and
// L49-55 of contracts/evidence-activation-contract.md (receiver-owned
// checks, evaluated honestly even where nothing can pass), with the
// evidence law's core refusal: an observation alone is never canonical
// evidence, observations may be wrong, a typed literal is not itself
// evidence, and an optimistic zero is never serialized in their place
// (a claimed transcript of an utterance that was never captured this cut
// is an observation of an event that never happened).
//
// Recorded law silences. Voice, speech, audio, transcription,
// microphone, and speech synthesis are named ZERO times in canonical
// law — voice interaction is unaddressed by law, NOT deferred (not on
// the messaging deferral list; the allocation waves name community/
// project runtime and external interop, neither of which owns human-
// input capture), and no canonical component owns human-input capture.
// Every literal below is a receiver-recorded app-side decision, recorded
// here rather than in a law amendment.
//
// What the wall performs. The wall assesses ONE claimed voice transcript
// and refuses it — every path refuses, no open branch exists. The wall's
// capture-class vocabulary is a claim-RECOGNITION vocabulary, never a
// declared intake: naming the three classes a claim can honestly present
// declares no capture lane, no recording affordance, and no synthesis
// authority (the B2 invariant "voice affordance != recording" stands —
// the mic button stays literally dead). NO capture runtime exists this
// cut (the mic never opened, so a claimed capture is an observation of
// an event that never happened), NO TTS runtime exists, and NO
// transcription exists over an utterance never captured — so every
// claimed transcript, of every class, composes nothing. The assessment
// echoes NOTHING about the claim — no transcript text, no source
// identity, no capture class: a claim asserts, and a refusal is not a
// record of what arrived. Not even text this receiver itself composed is
// echoed (the D-P21 composed-prose precedent, now over the spoken-lane
// analog).

import {
  POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS,
} from "./pond-voice-input-request-decision.ts";

// The declared claimed-voice capture-class vocabulary: the three classes
// a claim can honestly present about how its text came to be. This is a
// claim-RECOGNITION vocabulary — declaring it declares NO capture lane
// and NO recording affordance (the B2 invariant "voice affordance !=
// recording"; the D-P20 wall's standing intake declaration is unchanged;
// no channel class, trusted or otherwise, admits a claimed utterance
// here). `captured_audio` — a claim that audio was captured, and no
// capture runtime exists this cut; `synthesized_audio` — a claim that
// speech was synthesized, and no TTS runtime exists; `transcribed_text`
// — the terminal honest class: text claimed to have been transcribed
// from an utterance never captured, which still refuses terminally.
export type PondClaimedVoiceCaptureClass =
  | "captured_audio"
  | "synthesized_audio"
  | "transcribed_text";

const captureClassVocabulary = [
  "captured_audio",
  "synthesized_audio",
  "transcribed_text",
];

export const POND_STAGE_DP22_DECLARED_CLAIMED_VOICE_CAPTURE_CLASSES =
  Object.freeze([
    "captured_audio",
    "synthesized_audio",
    "transcribed_text",
  ] as const);

// The claim a counterpart may put forward: three exact string keys — the
// transcript text it CLAIMS was produced, the class it claims produced
// it, and the source it claims produced it. NO envelope, audio id, or
// device-identifier field exists at the shape level, so no claimed
// capture infrastructure can ever enter an assessment field.
export interface PondClaimedVoiceTranscript {
  readonly claimedTranscriptText: string;
  readonly claimedVoiceCaptureClass: string;
  readonly claimedVoiceSourceRef: string;
}

// The claimed-voice refusal input: ONE exact key. No session legs, no
// evaluation pair, no clock — the wall stands outside any session, and
// nothing about any claim is stored anywhere. The key is itself a
// forbidden-inventory key (`claimedVoiceTranscript`), closing the
// nested-claim-object hole in the deep walk (the D-P21 precedent).
export interface PondClaimedVoiceDecisionInput {
  readonly claimedVoiceTranscript: unknown;
}

// Receiver-owned claimed-voice checks (L49-55): the conditions under
// which composing a claimed transcript could be lawful, evaluated
// honestly even where nothing passes. The last two CAN NEVER PASS this
// cut: no transcription runtime exists over an utterance never captured,
// so no claimed text is composable, and no claimed transcript can carry
// capture authority or operator identity (scope-sov L15, L21; allocation
// L481 must-not). A source's declaredness folds into the terminal arm's
// honest readout as data, never as a third state or a separate
// vocabulary.
export type PondClaimedVoiceCheck =
  | "pond_claimed_voice_claim_well_formed"
  | "pond_claimed_voice_capture_class_of_the_declared_claim_vocabulary"
  | "pond_claimed_voice_transcript_composible_by_an_established_transcription_runtime"
  | "pond_claimed_voice_carries_no_capture_authority_or_operator_identity";

// The refusal assessment. The state set is ONE literal (the D-P20/D-P21
// wall deviation mold): refusals are not records, and no composed state
// exists this cut.
export interface PondClaimedVoiceRefusalAssessment {
  readonly contractVersion: "pond-claimed-voice-refusal-d-p22";
  readonly claimedVoiceRefusalVersion:
    | "pond-claimed-voice-refusal-d-p22"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_claimed_voice_refusal";
  readonly claimedVoiceState: "claimed_voice_transcript_not_composed";
  readonly reason:
    | "pond_claimed_voice_claim_invalid"
    | "pond_claimed_voice_capture_class_unknown_fail_closed"
    | "pond_claimed_voice_captured_audio_refused_no_capture_runtime_no_capture_observed"
    | "pond_claimed_voice_synthesized_audio_refused_no_tts_runtime_exists"
    | "pond_claimed_voice_transcribed_text_refused_no_transcription_over_an_utterance_never_captured";
  readonly claimedVoiceWallPosture: "standing_claimed_voice_wall_refused_no_transcription_runtime_exists_this_cut";
  readonly satisfiedChecks: readonly PondClaimedVoiceCheck[];
  readonly unsatisfiedChecks: readonly PondClaimedVoiceCheck[];
  // The all-false ceiling: a claimed transcript is evidence of nothing
  // and echoes nothing. It establishes no operator utterance, no
  // transcript evidence, no agent identity, no admission, no authority,
  // and no live session or read gate; the text, the source identity, and
  // the capture class are echoed and stored NOWHERE and a claimed source
  // is never accepted as an identity; it establishes no grant, no
  // consequence or execution, and no membership; and the standing
  // inherited ceiling holds (evidence law: an observation alone is never
  // canonical evidence, a typed literal is not evidence, no optimistic
  // zero; trusted-channel L7, L35; scope-sov L15, L21; allocation L481;
  // fabric L296-309; B2: voice affordance != recording).
  readonly claimedVoiceEstablishesOperatorUtterance: false;
  readonly claimedVoiceEstablishesTranscriptEvidence: false;
  readonly claimedVoiceEstablishesAgentIdentity: false;
  readonly claimedVoiceEstablishesAdmission: false;
  readonly claimedVoiceEstablishesAuthority: false;
  readonly claimedVoiceTranscriptTextEchoed: false;
  readonly claimedVoiceTranscriptTextStored: false;
  readonly claimedVoiceSourceRefEchoed: false;
  readonly claimedVoiceSourceRefAcceptedAsIdentity: false;
  readonly claimedVoiceCaptureClassEchoed: false;
  readonly claimedVoiceEstablishesLiveSessionOrReadGate: false;
  readonly claimedVoiceEstablishesGrant: false;
  readonly claimedVoiceEstablishesConsequenceOrExecution: false;
  readonly claimedVoiceEstablishesMembership: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const claimedVoiceChecks = Object.freeze([
  "pond_claimed_voice_claim_well_formed",
  "pond_claimed_voice_capture_class_of_the_declared_claim_vocabulary",
  "pond_claimed_voice_transcript_composible_by_an_established_transcription_runtime",
  "pond_claimed_voice_carries_no_capture_authority_or_operator_identity",
] as const satisfies readonly PondClaimedVoiceCheck[]);

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

const nonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.length > 0;

// Valid claim SHAPE only — stringness of the three declared fields,
// never vocabulary membership (an unknown class name is a well-formed
// claim that fail-closes at its own cause below) and never validity of
// what the claim asserts (a claim asserts; it is never authoritative).
// The claimed source's presence keeps the claim coherent about WHAT
// produced it; the ref itself is never echoed anywhere.
const validClaimedVoiceTranscript = (value: unknown): boolean => {
  const claimValue = record(value);
  return (
    claimValue !== null &&
    exactKeys(claimValue, [
      "claimedTranscriptText",
      "claimedVoiceCaptureClass",
      "claimedVoiceSourceRef",
    ]) &&
    nonEmptyString(claimValue.claimedTranscriptText) &&
    nonEmptyString(claimValue.claimedVoiceCaptureClass) &&
    nonEmptyString(claimValue.claimedVoiceSourceRef) &&
    !hasForbiddenKey(
      claimValue,
      POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS,
    )
  );
};

// The refusal assessment builder: identical shape on every arm — one
// state, one posture, all-false ceiling, zero claimed-* echo. `satisfied`
// is nonempty only on the terminal arm, where the honest fold makes the
// shape- and vocabulary-side checks readable alongside the two that can
// never pass.
const refusalAssessment = (
  reason: PondClaimedVoiceRefusalAssessment["reason"],
  claimedVoiceRefusalVersion: PondClaimedVoiceRefusalAssessment["claimedVoiceRefusalVersion"],
  satisfiedChecks: readonly PondClaimedVoiceCheck[],
  unsatisfiedChecks: readonly PondClaimedVoiceCheck[],
): PondClaimedVoiceRefusalAssessment => {
  return Object.freeze({
    contractVersion: "pond-claimed-voice-refusal-d-p22",
    claimedVoiceRefusalVersion,
    assessmentKind: "deterministic_supplied_claimed_voice_refusal",
    claimedVoiceState: "claimed_voice_transcript_not_composed" as const,
    reason,
    // The standing posture: the wall is standing and fail-closed on
    // every arm — nothing this cut assesses composes a transcript.
    claimedVoiceWallPosture:
      "standing_claimed_voice_wall_refused_no_transcription_runtime_exists_this_cut" as const,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The all-false ceiling: a refusal is evidence of nothing and echoes
    // nothing (evidence law; trusted-channel L7, L35; scope-sov L15, L21;
    // allocation L481; fabric L296-309; B2: voice affordance !=
    // recording).
    claimedVoiceEstablishesOperatorUtterance: false,
    claimedVoiceEstablishesTranscriptEvidence: false,
    claimedVoiceEstablishesAgentIdentity: false,
    claimedVoiceEstablishesAdmission: false,
    claimedVoiceEstablishesAuthority: false,
    claimedVoiceTranscriptTextEchoed: false,
    claimedVoiceTranscriptTextStored: false,
    claimedVoiceSourceRefEchoed: false,
    claimedVoiceSourceRefAcceptedAsIdentity: false,
    claimedVoiceCaptureClassEchoed: false,
    claimedVoiceEstablishesLiveSessionOrReadGate: false,
    claimedVoiceEstablishesGrant: false,
    claimedVoiceEstablishesConsequenceOrExecution: false,
    claimedVoiceEstablishesMembership: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondClaimedVoiceRefusal(
  input: PondClaimedVoiceDecisionInput,
): PondClaimedVoiceRefusalAssessment {
  // The fail-closed gate on the input object itself: garbage never
  // throws — a non-object input degrades to an empty record the claim
  // validation refuses as shape-invalid (the D-P8 fail-closed
  // discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondClaimedVoiceDecisionInput;
  if (!validClaimedVoiceTranscript(input.claimedVoiceTranscript))
    return refusalAssessment(
      "pond_claimed_voice_claim_invalid",
      "invalid",
      [],
      claimedVoiceChecks,
    );
  const claimValue = input.claimedVoiceTranscript as Record<string, unknown>;
  const claimedClass = String(claimValue["claimedVoiceCaptureClass"]);

  // Cause 2: the class name is not of the declared claim-recognition
  // vocabulary at all — unknown names FAIL CLOSED rather than inherit
  // recognition from a neighboring class (trusted-channel L35).
  if (!captureClassVocabulary.includes(claimedClass))
    return refusalAssessment(
      "pond_claimed_voice_capture_class_unknown_fail_closed",
      "pond-claimed-voice-refusal-d-p22",
      [],
      claimedVoiceChecks,
    );

  // Cause 3: a claimed capture — the mic never opened this cut, so a
  // claimed capture is an observation of an event that never happened:
  // an observation alone is never canonical evidence, and no capture
  // runtime exists to have made the observation true. Refused without
  // echoing the text or the claimed capture.
  if (claimedClass === "captured_audio")
    return refusalAssessment(
      "pond_claimed_voice_captured_audio_refused_no_capture_runtime_no_capture_observed",
      "pond-claimed-voice-refusal-d-p22",
      [],
      claimedVoiceChecks,
    );

  // Cause 4: a claimed synthesis — some runtime is claimed to have
  // spoken the text, and NO TTS runtime exists in app or law.
  if (claimedClass === "synthesized_audio")
    return refusalAssessment(
      "pond_claimed_voice_synthesized_audio_refused_no_tts_runtime_exists",
      "pond-claimed-voice-refusal-d-p22",
      [],
      claimedVoiceChecks,
    );

  // Cause 5 — terminal: the claim is well-formed and honestly declared
  // (`transcribed_text` is the only class left), and still refuses: the
  // text is claimed to be a transcription of an utterance NEVER captured
  // this cut, no transcription runtime exists, and a typed transcript of
  // a spoken utterance must never collapse the two channels (trusted-
  // channel L7 — the channels never become interchangeable because they
  // serialize as text). The honest fold makes the shape- and vocabulary-
  // side checks readable alongside the two that can never pass; the
  // claimed source's declaredness rides this readout as data (a
  // well-formed claim carries it by shape, so the fold's honest readout
  // is the shape-side checks green against the two never-passing ceiling
  // checks — no third-state vocabulary exists and none is invented).
  const values = [
    true,
    POND_STAGE_DP22_DECLARED_CLAIMED_VOICE_CAPTURE_CLASSES.includes(
      claimedClass as (typeof POND_STAGE_DP22_DECLARED_CLAIMED_VOICE_CAPTURE_CLASSES)[number],
    ),
    false,
    false,
  ];
  const satisfied = claimedVoiceChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = claimedVoiceChecks.filter(
    (_, index) => values[index] !== true,
  );
  return refusalAssessment(
    "pond_claimed_voice_transcribed_text_refused_no_transcription_over_an_utterance_never_captured",
    "pond-claimed-voice-refusal-d-p22",
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The wall is standing and
// fail-closed: one state, every path refusing, zero claimed-* echo,
// nothing established.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP22Invariant_ClaimedVoiceChecksExact = Assert<
  Equal<
    PondClaimedVoiceCheck,
    | "pond_claimed_voice_claim_well_formed"
    | "pond_claimed_voice_capture_class_of_the_declared_claim_vocabulary"
    | "pond_claimed_voice_transcript_composible_by_an_established_transcription_runtime"
    | "pond_claimed_voice_carries_no_capture_authority_or_operator_identity"
  >
>;
export type PondStageDP22Invariant_ClaimedVoiceStateSingleLiteral = Assert<
  Equal<PondClaimedVoiceRefusalAssessment["claimedVoiceState"], "claimed_voice_transcript_not_composed">
>;
export type PondStageDP22Invariant_ClaimedVoiceReasonsExact = Assert<
  Equal<
    PondClaimedVoiceRefusalAssessment["reason"],
    | "pond_claimed_voice_claim_invalid"
    | "pond_claimed_voice_capture_class_unknown_fail_closed"
    | "pond_claimed_voice_captured_audio_refused_no_capture_runtime_no_capture_observed"
    | "pond_claimed_voice_synthesized_audio_refused_no_tts_runtime_exists"
    | "pond_claimed_voice_transcribed_text_refused_no_transcription_over_an_utterance_never_captured"
  >
>;
export type PondStageDP22Invariant_CaptureClassesExact = Assert<
  Equal<
    PondClaimedVoiceCaptureClass,
    | "captured_audio"
    | "synthesized_audio"
    | "transcribed_text"
  >
>;
export type PondStageDP22Invariant_ClaimedVoiceEstablishesNothing = Assert<
  Equal<
    [
      PondClaimedVoiceRefusalAssessment["claimedVoiceEstablishesOperatorUtterance"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceEstablishesTranscriptEvidence"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceEstablishesAgentIdentity"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceEstablishesAdmission"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceEstablishesAuthority"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceTranscriptTextEchoed"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceTranscriptTextStored"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceSourceRefEchoed"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceSourceRefAcceptedAsIdentity"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceCaptureClassEchoed"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceEstablishesLiveSessionOrReadGate"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceEstablishesGrant"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceEstablishesConsequenceOrExecution"],
      PondClaimedVoiceRefusalAssessment["claimedVoiceEstablishesMembership"],
      PondClaimedVoiceRefusalAssessment["credentialAdmitted"],
      PondClaimedVoiceRefusalAssessment["principalIdAcceptedAsAuthorization"],
      PondClaimedVoiceRefusalAssessment["runtimeActivationPosture"],
      PondClaimedVoiceRefusalAssessment["authority"],
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
export type PondStageDP22Invariant_NoForbiddenClaimKeys = Assert<
  HasAnyKey<PondClaimedVoiceTranscript, (typeof POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP22Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondClaimedVoiceRefusalAssessment, (typeof POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS)[number]> extends false
    ? true
    : false
>;