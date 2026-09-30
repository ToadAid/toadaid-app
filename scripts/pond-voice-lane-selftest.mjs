// Stage D-P22 selftest: the Pond voice lane — one selftest over the
// three contracts of the cut. The matrix block proves every voice-
// request arm, every transcription-selection arm, and every claimed-
// voice wall arm agrees with its real assessor deep-equal and deep-
// frozen with all-false ceilings on every arm; the identity ties prove
// the request's gate legs cannot drift from the frozen D-P20 policy
// arms, that the retracted voice request predates the whole D-P21
// reply chain (the lane's scope binds only the establishment — the
// reply lane is not a parent), that the clock pins descend
// arithmetically with the staleness-unreachability honesty (the
// request event postdates the establishment, so its own staleness
// cause is reachable on this clock only via a future event), that the
// exactly-one performable transcription selection is the local ASR,
// and the assessor plumbing ties through the committed bundle; the
// negatives block refuses every refused request and decision basis on
// its own check alone with every leg echo green, every incoherent or
// external transcription selection at its dedicated cause with the
// selection echoed, every invalid, freshness, and scope arm, and every
// wall class at its own cause (the terminal fold honest); the
// lifecycle block proves the ladder-order freshness honesty — a far-
// future evaluation makes the legs refuse FIRST (the gate re-run's
// refusal) while the request's own diagnosis still carries its honest
// stale state verbatim, and the re-assess-after-retraction honesty for
// BOTH records against the D-P19 receipt's frozen-at-issuance contrast
// (the wall unchanged, it never had session legs to lose); the fail-
// closed block refuses garbage without throwing on all three
// contracts; the ceiling block proves the inventory slices and the
// widen probes (the D-P21 union plus exactly four voice-lane keys);
// the claim-tie block proves the voice lane carries no agent
// identity of any kind, no model/ASR/harness reference, no transcript
// text anywhere, and the wall echoes NOTHING about any claim (zero
// claimed-* values, not even text this receiver composed); the
// hygiene block walks DOM needles, network constants, banned frozen
// names, audio-capture needles, and the env-prefix family; and the
// ui wiring block proves the committed generated bundle, the shell
// module's walks, and the fixture-clock shell drive — establish,
// RECORD THE VOICE INPUT REQUEST, record the transcription decision,
// refused replay for both, out-of-range index, the reply/delivery
// lanes asserted untouched, then retract with BOTH rows confined
// verbatim (count-stable, never deleted) and the wall holding
// unchanged. Offline structural; no env-gated block exists in this
// cut (it holds no secret-bearing ceremony).

import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  stageDP22VoiceRequestMatrix,
  stageDP22TranscriptionMatrix,
  stageDP22ClaimedVoiceMatrix,
  stageDP22ReceiverRef,
  stageDP22VoiceRequestEventAtEpochMs,
  stageDP22TranscriptionDecisionEventAtEpochMs,
  stageDP22VoiceRequestEvaluatedAtEpochMs,
  stageDP22FutureVoiceRequestEventAtEpochMs,
  stageDP22FutureTranscriptionDecisionEventAtEpochMs,
  stageDP22RetractedVoiceRequestEventAtEpochMs,
  stageDP22RetractedTranscriptionDecisionEventAtEpochMs,
  stageDP22RetractedRequestEvaluatedAtEpochMs,
  stageDP22PreEstablishmentVoiceRequestEventAtEpochMs,
  stageDP22PreRequestTranscriptionDecisionEventAtEpochMs,
  stageDP22GateExpiryReassessmentEvaluatedAtEpochMs,
  stageDP22VoiceRequestExpiryReassessmentEvaluatedAtEpochMs,
  stageDP22TranscriptionExpiryReassessmentEvaluatedAtEpochMs,
  stageDP22ReceiverMaximumAgeMs,
  stageDP22ClaimedTranscriptText,
  stageDP22ClaimedVoiceSourceRef,
  stageDP22ClaimedVoiceSourceRefDistinct,
  stageDP22ComposedProseClaimText,
} from "../src/fixtures/stage-d-p22-pond-voice.ts";
import {
  assessPondVoiceInputRequestDecision,
  POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS,
} from "../src/contracts/pond-voice-input-request-decision.ts";
import {
  assessPondVoiceTranscriptionProviderDecision,
  POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS,
} from "../src/contracts/pond-voice-transcription-provider-decision.ts";
import {
  assessPondClaimedVoiceRefusal,
  POND_STAGE_DP22_DECLARED_CLAIMED_VOICE_CAPTURE_CLASSES,
} from "../src/contracts/pond-claimed-voice-refusal.ts";

import {
  stageDP21ReplyRequestEventAtEpochMs,
  stageDP21ProviderDecisionEventAtEpochMs,
} from "../src/fixtures/stage-d-p21-pond-replies.ts";
import { POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS } from "../src/contracts/pond-reply-request-decision.ts";

import {
  stageDP20TransportPolicyMatrix,
  stageDP20GateExpiryPolicyEvaluatedAtEpochMs,
  stageDP20ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p20-pond-transport.ts";

import {
  stageDP19ReceiptMatrix,
} from "../src/fixtures/stage-d-p19-pond-receipts.ts";

import {
  stageDP15SessionEntryLiveSessionEstablished,
  stageDP15EvaluatedAtEpochMs,
} from "../src/fixtures/stage-d-p15-live-session.ts";
import { stageDP6AuthenticationObservationComplete } from "../src/fixtures/stage-d-p6-local-principal-authentication-observation.ts";

import {
  assessPondVoiceInputRequestDecision as assessGeneratedVoiceInputRequestDecision,
  assessPondVoiceTranscriptionProviderDecision as assessGeneratedTranscriptionProviderDecision,
  assessPondClaimedVoiceRefusal as assessGeneratedClaimedVoiceRefusal,
  pondStageDP22VoiceRequestTemplate,
  pondStageDP22TranscriptionDecisionTemplate,
} from "../ui/generated/pond-stage-d-live-session-voice.js";
import {
  currentClaimedVoiceWallPosture,
  currentVoicePosture,
  heldVoiceRequestEntries,
  recordTranscriptionDecision,
  recordVoiceInputRequest,
  renderPondVoice,
} from "../ui/pond-voice.js";
import { establishLiveSession, retractLiveSession } from "../ui/pond-live-session.js";
import { heldDeliveryDecisions } from "../ui/pond-delivery.js";
import { heldDispatchDecisions } from "../ui/pond-dispatch.js";
import { heldReplyRequestEntries } from "../ui/pond-replies.js";
import { heldConversationRecordEntries } from "../ui/pond-conversation.js";

const repoRoot = new URL("..", import.meta.url).pathname;
const deepClone = (value) => JSON.parse(JSON.stringify(value));
const assertDeepFrozen = (value, path) => {
  if (value === null || typeof value !== "object") return;
  assert.ok(Object.isFrozen(value), `not frozen: ${path}`);
  for (const key of Object.keys(value))
    assertDeepFrozen(value[key], `${path}.${key}`);
};
const assertLacksKeys = (value, banned, path) => {
  if (value === null || typeof value !== "object") return;
  for (const key of Object.keys(value)) {
    assert.ok(!banned.includes(key), `banned key ${key} at ${path}`);
    assertLacksKeys(value[key], banned, `${path}.${key}`);
  }
};
const walkFiles = (root) => {
  const paths = [];
  const walk = (directory) => {
    for (const name of readdirSync(directory)) {
      const current = join(directory, name);
      if (statSync(current).isDirectory()) walk(current);
      else paths.push(current);
    }
  };
  walk(root);
  return paths;
};
const readModule = (path) => readFileSync(join(repoRoot, path), "utf8");

let blocks = 0;
const block = (label, run) => {
  blocks += 1;
  console.log(`block ${blocks}: ${label}`);
  run();
};

// Input-shape helpers: the voice-fixture entries carry exactly the
// assessor input the contract demands — the input builder re-assembles
// it in the contract's exact key order so the recompute is a clean
// re-run.
const VOICE_REQUEST_INPUT_KEYS = [
  "voiceInputRequest",
  "receiverHeldPrincipalRef",
  "readGateRecord",
  "establishmentRecord",
  "dp5CeremonyRecord",
  "dp6ObservationRecord",
  "dp8VerifierRecord",
  "dp8ProofRecord",
  "dp9IssuanceRecord",
  "dp9MappingRecord",
  "dp10ActivationRecord",
  "receiverRetractionRecord",
  "receiverEvaluatedAtEpochMs",
  "receiverMaximumAgeMs",
];

// The 13 shared gate legs (request legs minus the request) tie against
// the frozen D-P20 policy arms.
const GATE_LEG_KEYS = VOICE_REQUEST_INPUT_KEYS.filter(
  (key) => key !== "voiceInputRequest",
);

// The 15-key transcription input: the request's 14 keys plus the
// decision.
const TRANSCRIPTION_INPUT_KEYS = [...VOICE_REQUEST_INPUT_KEYS, "transcriptionDecision"];

const requestInputOf = (entry) => {
  const input = {};
  for (const key of VOICE_REQUEST_INPUT_KEYS) input[key] = entry[key];
  return input;
};
const transcriptionInputOf = (entry) => {
  const input = {};
  for (const key of TRANSCRIPTION_INPUT_KEYS) input[key] = entry[key];
  return input;
};
const wallInputOf = (entry) => ({
  claimedVoiceTranscript: entry.claimedVoiceTranscript,
});

const byLabel = (matrix, label) => {
  const entry = matrix.find((candidate) => candidate.fixtureLabel === label);
  assert.ok(entry, `missing fixture arm: ${label}`);
  return entry;
};

const evaluated = stageDP22VoiceRequestEvaluatedAtEpochMs;
const maximumAge = stageDP22ReceiverMaximumAgeMs;

const requestRecordedArm = byLabel(
  stageDP22VoiceRequestMatrix,
  "voice_request_recorded_session_scoped",
);
const transcriptionRecordedArm = byLabel(
  stageDP22TranscriptionMatrix,
  "transcription_decision_recorded_local_asr_engine",
);

// The cut's own fresh runs — only D-P22 assessments ever land here.
const freshRuns = [];
const runRequest = (entry) => {
  const fresh = assessPondVoiceInputRequestDecision(requestInputOf(entry));
  freshRuns.push(fresh);
  return fresh;
};
const runFreshRequest = (input) => assessPondVoiceInputRequestDecision(input);
const runTranscription = (entry) => {
  const fresh = assessPondVoiceTranscriptionProviderDecision(
    transcriptionInputOf(entry),
  );
  freshRuns.push(fresh);
  return fresh;
};
const runFreshTranscription = (input) =>
  assessPondVoiceTranscriptionProviderDecision(input);
const wallFreshRuns = [];
const runWall = (entry) => {
  const fresh = assessPondClaimedVoiceRefusal(wallInputOf(entry));
  wallFreshRuns.push(fresh);
  return fresh;
};
const runFreshWall = (input) => assessPondClaimedVoiceRefusal(input);

// The all-false ceiling families of this cut — all THREE contracts
// walked literally on every arm: the request ceiling (a sender-side ask
// that captures nothing and grants nothing), the decision ceiling (a
// declaration of what a future runtime would ride, consumed by nothing
// this cut), and the wall ceiling (a refusal echoes nothing about any
// claim).
const REQUEST_CEILING_KEYS = [
  "voiceRequestEstablishesVoiceCaptureOrCaptureRecord",
  "voiceRequestEstablishesTranscriptionRuntimeOrOutput",
  "voiceRequestEstablishesTranscriptionSelection",
  "voiceRequestEstablishesAgentIdentityOrAdmission",
  "voiceRequestEstablishesGrant",
  "voiceRequestEstablishesConsequenceOrExecution",
  "voiceRequestEstablishesAcceptanceOrTaskAgreement",
  "voiceRequestEstablishesAuthorityFromProse",
  "voiceRequestEstablishesMembershipOrRoomPresence",
  "voiceRequestEstablishesScope",
  "voiceRequestEchoesTranscriptText",
  "voiceRequestCollapsesSpokenAndTypedChannels",
  "voiceRequestConsumedByAnyRuntimeOrCapturerThisCut",
  "credentialAdmitted",
  "principalIdAcceptedAsAuthorization",
  "currentTruthAdmitted",
];

const TRANSCRIPTION_CEILING_KEYS = [
  "transcriptionDecisionEstablishesTranscriptionRuntimeOrModelAccess",
  "transcriptionDecisionEstablishesVoiceCaptureOrCapturedAudioRecord",
  "transcriptionDecisionEstablishesTranscriptionOutput",
  "transcriptionDecisionPerformsCaptureOrAudioIo",
  "transcriptionDecisionPerformsTranscriptionOrModelContact",
  "transcriptionDecisionPerformsAuthenticationOrBackendContact",
  "transcriptionDecisionPerformsSilentFallback",
  "transcriptionDecisionEstablishesGrant",
  "transcriptionDecisionEstablishesConsequenceOrExecution",
  "transcriptionDecisionEstablishesAuthorityFromProse",
  "transcriptionDecisionEstablishesMembershipOrAdmission",
  "transcriptionDecisionEstablishesScope",
  "transcriptionDecisionConsumedThisCut",
  "credentialAdmitted",
  "principalIdAcceptedAsAuthorization",
  "currentTruthAdmitted",
];

const WALL_CEILING_KEYS = [
  "claimedVoiceEstablishesOperatorUtterance",
  "claimedVoiceEstablishesTranscriptEvidence",
  "claimedVoiceEstablishesAgentIdentity",
  "claimedVoiceEstablishesAdmission",
  "claimedVoiceEstablishesAuthority",
  "claimedVoiceTranscriptTextEchoed",
  "claimedVoiceTranscriptTextStored",
  "claimedVoiceSourceRefEchoed",
  "claimedVoiceSourceRefAcceptedAsIdentity",
  "claimedVoiceCaptureClassEchoed",
  "claimedVoiceEstablishesLiveSessionOrReadGate",
  "claimedVoiceEstablishesGrant",
  "claimedVoiceEstablishesConsequenceOrExecution",
  "claimedVoiceEstablishesMembership",
  "credentialAdmitted",
  "principalIdAcceptedAsAuthorization",
];

// The recorded voice-input-request record's exact key set — pinned here
// so the claim-tie block and the ceiling block can lean on the shape.
// No captured-audio field and no transcript-text field exist: the
// request asks only to PROVIDE voice input.
const VOICE_RECORD_KEYS = [
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
];

// The transcription-decision record's exact key set — 20 keys, no model
// or ASR reference, no credential, no audio, no transcription output.
const TRANSCRIPTION_RECORD_KEYS = [
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
];

// Walk a value's strings against a probe — the zero-echo proof leans on
// it for every wall arm.
const carriesString = (value, probe) => {
  if (typeof value === "string") return value.includes(probe);
  if (value === null || typeof value !== "object") return false;
  return Object.values(value).some((entry) => carriesString(entry, probe));
};

// The five refused voice-request bases; each refuses on the basis check
// alone, every leg echo green.
const REFUSED_REQUEST_BASES = [
  "inferred_from_conversation_composition",
  "inferred_from_device_presence",
  "asserted_by_model_completion",
  "inferred_from_provider_session",
  "replayed_from_prior_voice_request",
];

// The five refused transcription-decision bases.
const REFUSED_TRANSCRIPTION_BASES = [
  "inferred_from_voice_request",
  "asserted_by_model_completion",
  "inferred_from_provider_session",
  "inferred_from_credential_availability",
  "replayed_from_prior_transcription_decision",
];

// The declared vocabularies re-declared verbatim — the external
// selections probed fresh in the negatives block. The transcription
// vocabularies are MINTED by this lane; the custody, boundary, and
// tier sets are re-declared verbatim from the frozen D-P21 provider
// decision.
const BACKEND_CLASSES = ["local_asr", "cloud_asr", "community_gateway"];
const ACCESS_MECHANISMS = [
  "local_asr",
  "api_key",
  "delegated_oauth",
  "interactive_subscription",
  "workload_identity",
  "community_gateway",
];
const CUSTODY_CLASSES = [
  "toadaid_managed",
  "principal_managed",
  "delegated",
  "local_operator",
  "community_managed",
];
const DATA_BOUNDARIES = [
  "external_cloud",
  "local_operator_controlled",
  "community_governed",
];
const SUPPORT_TIERS = [
  "launch_primary",
  "premium",
  "standard",
  "experimental",
  "preview",
  "community",
  "sovereign_local",
];

// The three declared claimed-voice capture classes — a claim-recognition
// vocabulary, never declared intake (the D-P21 deviation mold; the
// D-P20 intake-class declaration is unchanged). Every class still
// refuses — the terminal class is the honest one: text over an
// utterance never captured.
const CLAIMED_VOICE_CAPTURE_CLASSES = [
  "captured_audio",
  "synthesized_audio",
  "transcribed_text",
];

const terminalArm = byLabel(
  stageDP22ClaimedVoiceMatrix,
  "claimed_voice_refused_transcribed_text_terminal_declared_ref",
);

// ---------------------------------------------------------------
// Block 1: matrix recompute — every voice-request arm deep-equals its
// pinned assessment, every arm and assessment is deep-frozen, the
// recorded request arm carries the exact positive verdict with the
// honest freshness arithmetic and the full mapped echo set, every
// arm's ceiling stays all-false; every transcription arm likewise with
// the ONE performable selection echoed verbatim; every wall arm
// refuses with the single literal state, the wall ceiling all-false,
// and the refusal version marked invalid exactly on invalid claims.
// ---------------------------------------------------------------
block("matrix", () => {
  assert.equal(
    stageDP22VoiceRequestMatrix.length,
    14,
    "the voice-request matrix is pinned at 14 arms",
  );
  assert.equal(
    stageDP22TranscriptionMatrix.length,
    21,
    "the transcription matrix is pinned at 21 arms (the plan's pinned count reconciled with its own named arm list — the recorded deviations list the arithmetic)",
  );
  assert.equal(
    stageDP22ClaimedVoiceMatrix.length,
    10,
    "the claimed-voice matrix is pinned at 10 arms",
  );
  for (const arm of stageDP22VoiceRequestMatrix) {
    assert.ok(arm.fixtureLabel, "every arm carries a fixture label");
    const fresh = runRequest(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `arm ${arm.fixtureLabel}`);
    assert.equal(
      fresh.contractVersion,
      "pond-voice-input-request-decision-d-p22",
      arm.fixtureLabel,
    );
    assert.ok(
      fresh.voiceInputRequestState === "voice_input_request_not_recorded" ||
        fresh.voiceInputRequestState ===
          "voice_input_request_recorded_session_scoped_no_capture_no_transcription",
      arm.fixtureLabel,
    );
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.satisfiedChecks), arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.unsatisfiedChecks), arm.fixtureLabel);
    assertLacksKeys(
      fresh,
      POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS,
      `arm ${arm.fixtureLabel}`,
    );
    for (const ceilingKey of REQUEST_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }

  // The recorded request arm carries the full positive verdict with the
  // request recorded as session-scoped governance that captures nothing
  // and composes nothing.
  assert.equal(
    requestRecordedArm.assessment.voiceInputRequestState,
    "voice_input_request_recorded_session_scoped_no_capture_no_transcription",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.reason,
    "all_voice_request_checks_satisfied",
    requestRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    deepClone(requestRecordedArm.assessment.voiceInputRequestEventFreshnessDiagnosis),
    { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 1000 },
    `${requestRecordedArm.fixtureLabel}: the request event's freshness arithmetic is exact`,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedReadGateReassessmentReason,
    "all_read_gate_checks_satisfied",
    requestRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    deepClone(requestRecordedArm.assessment.mappedReadGateFreshnessDiagnosis),
    {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: evaluated - 1800000060000,
    },
    `${requestRecordedArm.fixtureLabel}: the read-gate echo's own arithmetic is exact`,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedEstablishmentState,
    "live_session_scoped_authentication_established",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedEstablishmentReason,
    "all_session_establishment_checks_satisfied",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedDp10ActivationState,
    "fixture_structural_session_scoped_private_read_activation",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedDp10Reason,
    "all_activation_checks_satisfied",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedDp10SessionScopePosture,
    "session_scoped_receiver_restart_ends_activation",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.voiceInputRequestRetentionPosture,
    "voice_input_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    requestRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    Object.keys(requestRecordedArm.voiceInputRequest).sort(),
    [...VOICE_RECORD_KEYS].sort(),
    `${requestRecordedArm.fixtureLabel}: the request record has exactly the pinned keys`,
  );
  assert.equal(requestRecordedArm.voiceInputRequest.authority, "none", requestRecordedArm.fixtureLabel);
  assert.equal(
    requestRecordedArm.voiceInputRequest.voiceInputRequestMetadata.voice_requested_at_epoch_ms,
    stageDP22VoiceRequestEventAtEpochMs,
    `${requestRecordedArm.fixtureLabel}: the request event is the pinned instant`,
  );

  for (const arm of stageDP22TranscriptionMatrix) {
    assert.ok(arm.fixtureLabel, "every transcription arm carries a fixture label");
    const fresh = runTranscription(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `transcription arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `transcription arm ${arm.fixtureLabel}`);
    assert.equal(
      fresh.contractVersion,
      "pond-voice-transcription-provider-decision-d-p22",
      arm.fixtureLabel,
    );
    assert.ok(
      fresh.transcriptionDecisionState === "transcription_decision_not_recorded" ||
        fresh.transcriptionDecisionState ===
          "transcription_decision_recorded_session_scoped_no_runtime_established",
      arm.fixtureLabel,
    );
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.equal(fresh.transcriptionDecisionConsumedThisCut, false, arm.fixtureLabel);
    assert.equal(fresh.transcriptionDecisionPerformsSilentFallback, false, arm.fixtureLabel);
    assert.equal(fresh.transcriptionDecisionPerformsCaptureOrAudioIo, false, arm.fixtureLabel);
    assertLacksKeys(
      fresh,
      POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS,
      `transcription arm ${arm.fixtureLabel}`,
    );
    for (const ceilingKey of TRANSCRIPTION_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `transcription ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }

  // The recorded decision arm carries the full positive verdict with the
  // ONE performable selection echoed verbatim and both mapped echo
  // trios readable one depth deeper than the D-P21 provider set.
  assert.equal(
    transcriptionRecordedArm.assessment.transcriptionDecisionState,
    "transcription_decision_recorded_session_scoped_no_runtime_established",
    transcriptionRecordedArm.fixtureLabel,
  );
  assert.equal(
    transcriptionRecordedArm.assessment.reason,
    "all_transcription_decision_checks_satisfied",
    transcriptionRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    deepClone(transcriptionRecordedArm.assessment.recordedTranscriptionSelection),
    deepClone(POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS[0]),
    `${transcriptionRecordedArm.fixtureLabel}: the ONE performable selection is echoed verbatim`,
  );
  assert.equal(
    transcriptionRecordedArm.assessment.mappedVoiceRequestState,
    "voice_input_request_recorded_session_scoped_no_capture_no_transcription",
    transcriptionRecordedArm.fixtureLabel,
  );
  assert.equal(
    transcriptionRecordedArm.assessment.mappedVoiceRequestReassessmentReason,
    "all_voice_request_checks_satisfied",
    transcriptionRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    deepClone(transcriptionRecordedArm.assessment.mappedVoiceRequestDiagnosis),
    { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 1000 },
    `${transcriptionRecordedArm.fixtureLabel}: the request echo's own diagnosis rides verbatim`,
  );
  assert.equal(
    transcriptionRecordedArm.assessment.mappedReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
    transcriptionRecordedArm.fixtureLabel,
  );
  assert.equal(
    transcriptionRecordedArm.assessment.transcriptionDecisionRetentionPosture,
    "transcription_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    transcriptionRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    Object.keys(transcriptionRecordedArm.transcriptionDecision).sort(),
    [...TRANSCRIPTION_RECORD_KEYS].sort(),
    `${transcriptionRecordedArm.fixtureLabel}: the decision record has exactly the pinned keys`,
  );
  assert.equal(
    transcriptionRecordedArm.transcriptionDecision.authority,
    "none",
    transcriptionRecordedArm.fixtureLabel,
  );
  assert.equal(
    transcriptionRecordedArm.transcriptionDecision.transcriptionDecisionMetadata.recorded_at_epoch_ms,
    stageDP22TranscriptionDecisionEventAtEpochMs,
    `${transcriptionRecordedArm.fixtureLabel}: the decision event is the pinned instant`,
  );

  // Every wall arm refuses — one state, the standing posture, the wall
  // ceiling all-false, the version marked invalid exactly on invalid
  // claims, and zero claim echo on every arm (not even of the
  // receiver-composed prose arm whose text is a known D-P16 fact).
  for (const arm of stageDP22ClaimedVoiceMatrix) {
    assert.ok(arm.fixtureLabel, "every wall arm carries a fixture label");
    const fresh = runWall(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `wall arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `wall arm ${arm.fixtureLabel}`);
    assert.equal(
      fresh.claimedVoiceState,
      "claimed_voice_transcript_not_composed",
      arm.fixtureLabel,
    );
    assert.equal(fresh.claimedVoiceWallPosture,
      "standing_claimed_voice_wall_refused_no_transcription_runtime_exists_this_cut",
      arm.fixtureLabel);
    // The version marks the refusal's own declarative state: a
    // well-shaped claim keeps the cut's version; an invalid claim
    // refuses as invalid (the honest fallback).
    assert.ok(
      fresh.claimedVoiceRefusalVersion ===
      (fresh.reason === "pond_claimed_voice_claim_invalid"
        ? "invalid"
        : "pond-claimed-voice-refusal-d-p22"),
      arm.fixtureLabel,
    );
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assertLacksKeys(
      fresh,
      POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS,
      `wall arm ${arm.fixtureLabel}`,
    );
    for (const ceilingKey of WALL_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `wall ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
    const claim = arm.claimedVoiceTranscript ?? {};
    // The zero-echo probe walks the claim's VALUES (the text, the
    // source, and the class). The declared class literal is not probed
    // as a value: the terminal cause names the declared vocabulary
    // literal by way of its own cause name — an honest vocabulary
    // reference, never the echo of a claim. The source and text are
    // probed on every arm.
    const claimValues = [
      claim.claimedTranscriptText,
      claim.claimedVoiceSourceRef,
    ].filter((value) => typeof value === "string" && value.length > 0);
    for (const value of claimValues) {
      assert.ok(
        !carriesString(fresh, value),
        `wall arm ${arm.fixtureLabel} echoes a claimed value: ${value}`,
      );
    }
  }
});

// ---------------------------------------------------------------
// Block 2: identity ties — the request's gate legs cannot drift from the
// frozen D-P20 policy arms; the retracted voice request predates the
// whole D-P21 reply chain (the lane's scope binds only the
// establishment — the reply lane is NOT a parent and must not
// postdate); the exactly-one performable selection is the local ASR;
// the clock pins descend arithmetically with the staleness-
// unreachability honesty; and the assessor plumbing ties through the
// committed bundle.
// ---------------------------------------------------------------
block("identityTies", () => {
  const dp20RecordedArm = byLabel(
    stageDP20TransportPolicyMatrix,
    "transport_policy_recorded_in_process_agent0",
  );
  // The 13 shared gate legs tie against the frozen D-P20 recorded arm's
  // legs by subtraction. A drifted leg is a silently widened session —
  // the tie refuses it whole.
  for (const key of GATE_LEG_KEYS) {
    assert.deepEqual(
      deepClone(requestRecordedArm[key]),
      deepClone(dp20RecordedArm[key]),
      `the voice-request leg ${key} refuses to drift from the frozen D-P20 policy arm`,
    );
  }
  for (const key of GATE_LEG_KEYS) {
    assert.deepEqual(
      deepClone(transcriptionRecordedArm[key]),
      deepClone(dp20RecordedArm[key]),
      `the transcription-entry leg ${key} refuses to drift from the frozen D-P20 policy arm`,
    );
  }

  // The dv and kind pins ride the records verbatim.
  assert.equal(
    requestRecordedArm.voiceInputRequest.contractVersion,
    "pond-voice-input-request-decision-d-p22",
  );
  assert.equal(requestRecordedArm.voiceInputRequest.kind, "pond-voice-input-request");
  assert.equal(
    transcriptionRecordedArm.transcriptionDecision.contractVersion,
    "pond-voice-transcription-provider-decision-d-p22",
  );
  assert.equal(
    transcriptionRecordedArm.transcriptionDecision.kind,
    "pond-voice-transcription-provider-decision",
  );

  // The ONE performable selection is exactly the local ASR tuple — no
  // cloud class, no gateway, no credential path anywhere in the list.
  assert.deepEqual(deepClone(POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS), [
    {
      transcriptionBackendClass: "local_asr",
      selectedTranscriptionBackendId: "local_asr_engine",
      transcriptionAccessMechanism: "local_asr",
      credentialCustodyClass: "local_operator",
      dataBoundaryClass: "local_operator_controlled",
      supportTier: "sovereign_local",
    },
  ]);
  assert.equal(POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS.length, 1);

  // The declared vocabularies' breadth — claimed from the frozen probe
  // walk in the negatives block; the declared capture classes tie here.
  assert.deepEqual(
    [...POND_STAGE_DP22_DECLARED_CLAIMED_VOICE_CAPTURE_CLASSES],
    CLAIMED_VOICE_CAPTURE_CLASSES,
  );
  assert.equal(POND_STAGE_DP22_DECLARED_CLAIMED_VOICE_CAPTURE_CLASSES.length, 3);

  // The clock pins: full lifecycle-order proof over the frozen chain
  // and this cut's two events. The establishment is 60 000; the
  // retracted voice request (68 000) — the cut's own lane instant —
  // predates the ENTIRE D-P21 reply chain (88 000+): the reply lane is
  // not a parent, and the voice request's scope binds only the floor
  // of the establishment.
  assert.equal(
    stageDP22RetractedVoiceRequestEventAtEpochMs,
    1800000068000,
    "the retracted voice request rides the declared lane instant",
  );
  assert.ok(
    stageDP22RetractedVoiceRequestEventAtEpochMs < stageDP21ReplyRequestEventAtEpochMs &&
      stageDP22RetractedVoiceRequestEventAtEpochMs < stageDP21ProviderDecisionEventAtEpochMs,
    "the retracted voice request predates the whole D-P21 reply chain — its scope binds only the establishment, never a reply-lane record (do-not-postdate: the voice lane must not be re-parented onto the reply lane)",
  );
  assert.ok(
    stageDP22RetractedVoiceRequestEventAtEpochMs < stageDP22VoiceRequestEventAtEpochMs,
    "the retracted probe event precedes the recorded request event",
  );
  assert.ok(
    stageDP22VoiceRequestEventAtEpochMs < stageDP22TranscriptionDecisionEventAtEpochMs,
    "the request event precedes the decision event that rides it",
  );
  assert.ok(
    stageDP22TranscriptionDecisionEventAtEpochMs <= evaluated,
    "the decision event does not postdate the evaluation instant",
  );
  assert.ok(
    stageDP22FutureVoiceRequestEventAtEpochMs > evaluated &&
      stageDP22FutureTranscriptionDecisionEventAtEpochMs > evaluated,
    "the future events sit beyond the evaluation instant",
  );
  assert.ok(
    stageDP22PreEstablishmentVoiceRequestEventAtEpochMs === 1800000059000 &&
      stageDP22PreEstablishmentVoiceRequestEventAtEpochMs < 1800000060000,
    "the pre-establishment request event precedes the session",
  );
  assert.ok(
    stageDP22PreRequestTranscriptionDecisionEventAtEpochMs === 1800000088500 &&
      stageDP22PreRequestTranscriptionDecisionEventAtEpochMs >
        stageDP22PreEstablishmentVoiceRequestEventAtEpochMs &&
      stageDP22PreRequestTranscriptionDecisionEventAtEpochMs <
        stageDP22VoiceRequestEventAtEpochMs,
    "the pre-request decision event sits in-scope and fresh but before the voice request it must ride",
  );
  assert.ok(
    stageDP22RetractedRequestEvaluatedAtEpochMs === 1800000082000,
    "the retracted re-assessment pin is the declared instant",
  );
  assert.ok(
    stageDP22GateExpiryReassessmentEvaluatedAtEpochMs === 1800000120001 &&
      stageDP22VoiceRequestExpiryReassessmentEvaluatedAtEpochMs === 1800000149001 &&
      stageDP22TranscriptionExpiryReassessmentEvaluatedAtEpochMs === 1800000149501,
    "the reassessment-refusal pins are past their own lane instants",
  );
  assert.ok(
    stageDP20GateExpiryPolicyEvaluatedAtEpochMs === stageDP22GateExpiryReassessmentEvaluatedAtEpochMs,
    "the pinned read-gate expiry ties the frozen D-P20 pin",
  );
  // Both freshness windows are exact arithmetic from the frozen pins.
  assert.deepEqual(
    deepClone(requestRecordedArm.assessment.voiceInputRequestEventFreshnessDiagnosis),
    {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: evaluated - stageDP22VoiceRequestEventAtEpochMs,
    },
    "the request event's freshness arithmetic is the declared pins",
  );
  assert.deepEqual(
    deepClone(
      transcriptionRecordedArm.assessment.transcriptionDecisionEventFreshnessDiagnosis,
    ),
    {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: evaluated - stageDP22TranscriptionDecisionEventAtEpochMs,
    },
    "the decision event's freshness arithmetic is the declared pins",
  );

  // The staleness-unreachability honesty: the request event must
  // postdate the establishment it rides (89000 > 60000), so the
  // earliest in-scope request event is 60000 — while the staleness
  // boundary is evaluated − 60000 = 30000. No in-scope event can ever
  // be stale on this clock: the request's own staleness cause is
  // reachable ONLY via a future event (and the future arm proves
  // exactly that path). The decision's earliest in-scope event is the
  // request event itself (89000) — one rung deeper, same honesty.
  const stalenessBoundary = evaluated - maximumAge;
  assert.equal(stalenessBoundary, 1800000030000, "the staleness boundary");
  assert.ok(
    stalenessBoundary < 1800000060000,
    "the staleness boundary precedes the earliest in-scope request event — the staleness refusal is a future-event-only cause on this clock",
  );
  assert.ok(
    stalenessBoundary < stageDP22VoiceRequestEventAtEpochMs,
    "the staleness boundary precedes the request event the decision rides",
  );
  assert.ok(
    stageDP22VoiceRequestEventAtEpochMs > 1800000060000,
    "the request event postdates the establishment it rides",
  );

  // The expiry arithmetic is exact: the voice-request expiry sits one
  // tick past its own declared maximum age, and the transcription one
  // tick past its.
  assert.equal(
    stageDP22VoiceRequestExpiryReassessmentEvaluatedAtEpochMs - stageDP22VoiceRequestEventAtEpochMs,
    60001,
  );
  assert.equal(
    stageDP22TranscriptionExpiryReassessmentEvaluatedAtEpochMs -
      stageDP22TranscriptionDecisionEventAtEpochMs,
    60001,
  );

  // The receiver ref ties the frozen D-P0 family.
  assert.equal(stageDP22ReceiverRef, "principal:fixture:stage-d-p0:local-principal");
  assert.equal(requestRecordedArm.voiceInputRequest.principalRef, stageDP22ReceiverRef);
  assert.equal(
    transcriptionRecordedArm.transcriptionDecision.principalRef,
    stageDP22ReceiverRef,
  );
  assert.equal(maximumAge, stageDP20ReceiverMaximumAgeMs, "the maximum age ties the frozen D-P2 machinery");

  // The declared transcription vocabularies' breadth — the custody,
  // boundary, and tier sets are the frozen D-P21 provider sets
  // re-declared verbatim; the backend, id, and mechanism sets are minted.
  assert.deepEqual(BACKEND_CLASSES, ["local_asr", "cloud_asr", "community_gateway"]);
  assert.equal(ACCESS_MECHANISMS.length, 6);
  assert.deepEqual(CUSTODY_CLASSES, [
    "toadaid_managed",
    "principal_managed",
    "delegated",
    "local_operator",
    "community_managed",
  ]);
  assert.deepEqual(DATA_BOUNDARIES, [
    "external_cloud",
    "local_operator_controlled",
    "community_governed",
  ]);
  assert.deepEqual(SUPPORT_TIERS, [
    "launch_primary",
    "premium",
    "standard",
    "experimental",
    "preview",
    "community",
    "sovereign_local",
  ]);
});

// ---------------------------------------------------------------
// Block 3: recompute-agreement negatives — every refused request basis
// on its own check alone with every leg echo green; every refused
// transcription basis alike; every incoherent or external selection at
// its dedicated cause with the selection echoed and the request re-run
// green; every invalid, future, and scope arm; and every wall class at
// its own cause with the terminal fold honest.
// ---------------------------------------------------------------
block("recomputeAgreementNegatives", () => {
  for (const basis of REFUSED_REQUEST_BASES) {
    const arm = byLabel(
      stageDP22VoiceRequestMatrix,
      `voice_request_refused_basis_${basis}`,
    );
    const fresh = runRequest(arm);
    assert.equal(fresh.voiceInputRequestState, "voice_input_request_not_recorded", arm.fixtureLabel);
    assert.equal(fresh.reason, "receiver_voice_request_proof_incomplete", arm.fixtureLabel);
    assert.deepEqual(
      fresh.unsatisfiedChecks,
      ["voice_request_basis_receiver_recorded_not_inferred"],
      arm.fixtureLabel,
    );
    assert.equal(fresh.satisfiedChecks.length, 6, arm.fixtureLabel);
    // Every leg echo stays green: the basis is the only failure.
    assert.equal(
      fresh.mappedEstablishmentState,
      "live_session_scoped_authentication_established",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      arm.fixtureLabel,
    );
    assert.equal(fresh.voiceInputRequestEventFreshnessDiagnosis.state, "fresh", arm.fixtureLabel);
  }

  // The future request event: the request's OWN freshness cause fires
  // while the gate re-run stays green (the ladder-order honesty —
  // proven against the staleness-unreachability arithmetic in block 2
  // that no in-scope event can be stale on this clock).
  const futureRun = runRequest(
    byLabel(stageDP22VoiceRequestMatrix, "voice_request_event_in_future"),
  );
  assert.equal(futureRun.reason, "voice_request_event_not_session_current");
  assert.equal(
    futureRun.mappedReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
    "the gate re-run stays green while the request event is in the future",
  );
  assert.deepEqual(
    deepClone(futureRun.voiceInputRequestEventFreshnessDiagnosis),
    { state: "unknown", reason: "observation_time_in_future", observationAgeMs: null },
  );

  // The pre-establishment request event refuses at the scope cause with
  // the gate re-run still green (the scope reads only the
  // establishment's floor — proven one lane shallower than the D-P21
  // request's conversation-bounded scope).
  const preScopeRun = runRequest(
    byLabel(stageDP22VoiceRequestMatrix, "voice_request_event_before_session_establishment"),
  );
  assert.equal(preScopeRun.reason, "voice_request_event_not_of_the_current_session_scope");
  assert.equal(
    preScopeRun.mappedReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
  );
  assert.deepEqual(
    deepClone(preScopeRun.voiceInputRequestEventFreshnessDiagnosis),
    { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 31000 },
    "the pre-scope request event stays honestly fresh — its ordering is the refusal",
  );

  // The invalid-cause arms: a missing key, an extra forbidden key, and
  // a tampered posture literal — all refuse at the invalid cause with
  // the version marked invalid, the honest fallback diagnosis, and the
  // leg echoes still green. The garbage and deep-planted classes in
  // this list ride malformed inputs, so their echoes honestly refuse
  // too — the non-object arm's legs are garbage, the mapped echo
  // carries the re-run's own honest verdict, and nothing is fabricated
  // either way.
  for (const label of [
    "voice_request_record_missing_key",
    "voice_request_record_extra_forbidden_key",
    "voice_request_record_tampered_posture_literal",
    "voice_request_refused_non_object_record",
  ]) {
    const fresh = runRequest(byLabel(stageDP22VoiceRequestMatrix, label));
    assert.equal(fresh.reason, "voice_request_record_invalid", label);
    assert.equal(fresh.voiceInputRequestState, "voice_input_request_not_recorded", label);
    assert.equal(fresh.voiceInputRequestDecisionVersion, "invalid", label);
    assert.deepEqual(
      deepClone(fresh.voiceInputRequestEventFreshnessDiagnosis),
      {
        state: "unknown",
        reason: "observation_metadata_missing_or_invalid",
        observationAgeMs: null,
      },
      label,
    );
    assert.ok(fresh.mappedEstablishmentState !== null, `${label}: echoes always carried`);
    assert.ok(fresh.mappedReadGateState !== null, `${label}: echoes always carried`);
    if (label !== "voice_request_refused_non_object_record") {
      assert.equal(
        fresh.mappedReadGateState,
        "live_session_scoped_single_principal_structural_reads_live_activated",
        `${label}: the leg echoes stay readable through an invalid record`,
      );
    }
  }

  // The transcription refused bases refuse on the basis check alone.
  for (const basis of REFUSED_TRANSCRIPTION_BASES) {
    const arm = byLabel(
      stageDP22TranscriptionMatrix,
      `transcription_decision_refused_basis_${basis}`,
    );
    const fresh = runTranscription(arm);
    assert.equal(fresh.transcriptionDecisionState, "transcription_decision_not_recorded", arm.fixtureLabel);
    assert.equal(fresh.reason, "receiver_transcription_decision_proof_incomplete", arm.fixtureLabel);
    assert.deepEqual(
      fresh.unsatisfiedChecks,
      ["transcription_decision_basis_receiver_recorded_not_inferred"],
      arm.fixtureLabel,
    );
    assert.equal(fresh.satisfiedChecks.length, 10, arm.fixtureLabel);
    // The request re-run echo stays green: the refusal is the
    // decision's alone.
    assert.equal(
      fresh.mappedVoiceRequestState,
      "voice_input_request_recorded_session_scoped_no_capture_no_transcription",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedVoiceRequestReassessmentReason,
      "all_voice_request_checks_satisfied",
      arm.fixtureLabel,
    );
  }

  // The per-class cause walk: every incoherent or external selection
  // refuses at its dedicated cause with the selection echoed and the
  // request re-run green.
  const selectionCases = [
    ["transcription_decision_refused_selection_unknown_backend_class", "transcription_backend_class_unknown_fail_closed", "server_asr", ""],
    ["transcription_decision_refused_selection_cloud_asr_with_minted_id", "transcription_backend_id_unknown_or_not_of_declared_backend_class", "cloud_asr", "mistral_asr"],
    ["transcription_decision_refused_selection_local_asr_with_cloud_mechanism", "transcription_backend_id_unknown_or_not_of_declared_backend_class", "local_asr", ""],
    ["transcription_decision_refused_selection_local_asr_with_api_key_mechanism", "transcription_access_mechanism_not_compatible_with_declared_backend_class", "local_asr", "local_asr_engine"],
    ["transcription_decision_refused_selection_local_asr_with_toadaid_managed_custody", "transcription_credential_custody_not_compatible_with_declared_backend_class", "local_asr", "local_asr_engine"],
    ["transcription_decision_refused_selection_local_asr_with_external_cloud_boundary", "transcription_data_boundary_not_compatible_with_declared_backend_class", "local_asr", "local_asr_engine"],
    ["transcription_decision_refused_selection_unknown_support_tier", "transcription_selection_declared_not_performable_this_cut", "local_asr", "local_asr_engine"],
    ["transcription_decision_refused_selection_cloud_asr", "transcription_selection_declared_not_performable_this_cut", "cloud_asr", ""],
    ["transcription_decision_refused_selection_community_gateway", "transcription_selection_declared_not_performable_this_cut", "community_gateway", ""],
  ];
  for (const [label, expectedReason, expectedClass, expectedId] of selectionCases) {
    const arm = byLabel(stageDP22TranscriptionMatrix, label);
    const fresh = runTranscription(arm);
    assert.equal(fresh.reason, expectedReason, arm.fixtureLabel);
    assert.equal(fresh.transcriptionDecisionState, "transcription_decision_not_recorded", arm.fixtureLabel);
    assert.ok(fresh.recordedTranscriptionSelection !== null, arm.fixtureLabel);
    assert.equal(fresh.recordedTranscriptionSelection.transcriptionBackendClass, expectedClass, arm.fixtureLabel);
    assert.equal(fresh.recordedTranscriptionSelection.selectedTranscriptionBackendId, expectedId, arm.fixtureLabel);
    // The request re-run echo stays green — the refusal is the
    // selection's alone.
    assert.equal(
      fresh.mappedVoiceRequestState,
      "voice_input_request_recorded_session_scoped_no_capture_no_transcription",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedVoiceRequestReassessmentReason,
      "all_voice_request_checks_satisfied",
      arm.fixtureLabel,
    );
  }
  // The unknown class is echoed too (fail-closed is honest): the
  // assessment carries exactly what the receiver named — the empty id
  // rides the minted empty literal for the unknown class, the
  // receiver-declared companion fields ride verbatim, and nothing is
  // fabricated either way.
  assert.deepEqual(
    deepClone(
      runTranscription(byLabel(stageDP22TranscriptionMatrix, "transcription_decision_refused_selection_unknown_backend_class"))
        .recordedTranscriptionSelection,
    ),
    {
      transcriptionBackendClass: "server_asr",
      selectedTranscriptionBackendId: "",
      transcriptionAccessMechanism: "api_key",
      credentialCustodyClass: "toadaid_managed",
      dataBoundaryClass: "external_cloud",
      supportTier: "launch_primary",
    },
    "the unknown backend class echoes what the receiver named, with the empty minted id",
  );

  // The transcription invalid arms: missing key with a null selection
  // echo and the honest fallback, the extra forbidden key, and a
  // non-object record. The request re-run echo stays green.
  const transcriptionMissing = runTranscription(
    byLabel(stageDP22TranscriptionMatrix, "transcription_decision_record_missing_key"),
  );
  assert.equal(transcriptionMissing.reason, "transcription_decision_record_invalid");
  assert.equal(transcriptionMissing.transcriptionDecisionVersion, "invalid");
  assert.equal(transcriptionMissing.recordedTranscriptionSelection, null);
  assert.equal(
    transcriptionMissing.mappedVoiceRequestState,
    "voice_input_request_recorded_session_scoped_no_capture_no_transcription",
    "the request echo stays readable through an invalid decision record",
  );
  for (const label of [
    "transcription_decision_record_extra_forbidden_key",
    "transcription_decision_refused_non_object_record",
  ]) {
    const fresh = runTranscription(byLabel(stageDP22TranscriptionMatrix, label));
    assert.equal(fresh.reason, "transcription_decision_record_invalid", label);
    assert.equal(fresh.recordedTranscriptionSelection, null, label);
    assert.equal(fresh.mappedVoiceRequestReassessmentReason, "all_voice_request_checks_satisfied", label);
  }

  // The decision future arm: the decision's own freshness cause on its
  // own diagnosis while the request re-run stays green.
  const decisionFuture = runTranscription(
    byLabel(stageDP22TranscriptionMatrix, "transcription_decision_event_in_future"),
  );
  assert.equal(
    decisionFuture.reason,
    "transcription_decision_event_not_session_current",
  );
  assert.deepEqual(
    deepClone(decisionFuture.transcriptionDecisionEventFreshnessDiagnosis),
    { state: "unknown", reason: "observation_time_in_future", observationAgeMs: null },
  );
  assert.equal(
    decisionFuture.mappedVoiceRequestState,
    "voice_input_request_recorded_session_scoped_no_capture_no_transcription",
  );
  // The before-the-request arm: the scope cause — a decision before its
  // voice request is out of the session scope.
  const beforeRequest = runTranscription(
    byLabel(stageDP22TranscriptionMatrix, "transcription_decision_event_before_the_voice_request"),
  );
  assert.equal(
    beforeRequest.reason,
    "transcription_decision_event_not_of_the_current_session_scope",
  );
  assert.deepEqual(
    deepClone(beforeRequest.transcriptionDecisionEventFreshnessDiagnosis),
    { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 1500 },
    "the pre-request decision event stays honestly fresh — its ordering is the refusal",
  );

  // The wall per-cause walk: each class refuses at its own cause.
  const wallCauseCases = [
    ["claimed_voice_refused_transcribed_text_terminal_declared_ref", "pond_claimed_voice_transcribed_text_refused_no_transcription_over_an_utterance_never_captured"],
    ["claimed_voice_refused_synthesized_audio", "pond_claimed_voice_synthesized_audio_refused_no_tts_runtime_exists"],
    ["claimed_voice_refused_captured_audio", "pond_claimed_voice_captured_audio_refused_no_capture_runtime_no_capture_observed"],
    ["claimed_voice_capture_class_unknown_fail_closed", "pond_claimed_voice_capture_class_unknown_fail_closed"],
    ["claimed_voice_refused_transcribed_text_source_ref_never_echoed", "pond_claimed_voice_transcribed_text_refused_no_transcription_over_an_utterance_never_captured"],
    ["claimed_voice_refused_transcript_of_composed_prose", "pond_claimed_voice_transcribed_text_refused_no_transcription_over_an_utterance_never_captured"],
    ["claimed_voice_refused_missing_claimed_transcript_text", "pond_claimed_voice_claim_invalid"],
    ["claimed_voice_refused_empty_claimed_transcript_text", "pond_claimed_voice_claim_invalid"],
    ["claimed_voice_refused_extra_forbidden_key", "pond_claimed_voice_claim_invalid"],
    ["claimed_voice_refused_non_object_claim", "pond_claimed_voice_claim_invalid"],
  ];
  for (const [label, expectedReason] of wallCauseCases) {
    const arm = byLabel(stageDP22ClaimedVoiceMatrix, label);
    const fresh = runWall(arm);
    assert.equal(fresh.reason, expectedReason, arm.fixtureLabel);
    assert.equal(fresh.claimedVoiceState, "claimed_voice_transcript_not_composed", arm.fixtureLabel);
  }

  // The terminal arms carry the honest fold: the shape and vocabulary
  // checks green, the two never-passing checks unsatisfied.
  for (const arm of [
    terminalArm,
    byLabel(stageDP22ClaimedVoiceMatrix, "claimed_voice_refused_transcribed_text_source_ref_never_echoed"),
    byLabel(stageDP22ClaimedVoiceMatrix, "claimed_voice_refused_transcript_of_composed_prose"),
  ]) {
    const fresh = runWall(arm);
    assert.deepEqual(
      [...fresh.satisfiedChecks],
      [
        "pond_claimed_voice_claim_well_formed",
        "pond_claimed_voice_capture_class_of_the_declared_claim_vocabulary",
      ],
      arm.fixtureLabel,
    );
    assert.deepEqual(
      [...fresh.unsatisfiedChecks],
      [
        "pond_claimed_voice_transcript_composible_by_an_established_transcription_runtime",
        "pond_claimed_voice_carries_no_capture_authority_or_operator_identity",
      ],
      arm.fixtureLabel,
    );
  }
});

// ---------------------------------------------------------------
// Block 4: lifecycle — ladder-order freshness honesty beyond the matrix
// arms: a far-future evaluation makes the whole gate re-run refuse
// FIRST (its own refusal carried verbatim as the mapped reassessment
// reason) while the request's own diagnosis still carries its honest
// stale state; the gate-expiry arm keeps the request honestly fresh
// while the reassessment refuses; the confined transcription reads its
// request's confinement one rung deeper; the re-assess-after-retraction
// honesty for BOTH records against the D-P19 receipt's frozen-at-
// issuance contrast; and the wall unchanged through retraction (no
// session legs).
// ---------------------------------------------------------------
block("lifecycle", () => {
  // The base-arm age arithmetic is exact.
  assert.equal(
    requestRecordedArm.assessment.voiceInputRequestEventFreshnessDiagnosis.observationAgeMs,
    evaluated - stageDP22VoiceRequestEventAtEpochMs,
  );

  // A far-future evaluation: the request's OWN event goes stale
  // (150 000 − 89 000 = 61 001 > 60 000) — but the legs are STALER, so
  // the gate re-run refuses FIRST while the request's own diagnosis
  // carries its honest stale state verbatim at the ladder's deeper
  // position. Ladder order, never newest-event arithmetic.
  const staleRun = assessPondVoiceInputRequestDecision({
    ...requestInputOf(requestRecordedArm),
    receiverEvaluatedAtEpochMs: 1800000150001,
  });
  assert.equal(staleRun.reason, "live_session_read_gate_not_currently_live");
  assert.equal(
    staleRun.mappedReadGateReassessmentReason,
    "live_session_not_established_refused_or_not_fresh",
    "the reassessment outranks the request event — the gate re-run refuses first",
  );
  assert.equal(
    staleRun.mappedReadGateState,
    "no_active_live_session",
    "the gate re-run's own verdict rides verbatim",
  );
  assert.equal(
    staleRun.voiceInputRequestEventFreshnessDiagnosis.state,
    "stale",
    "the request event's own diagnosis never lies even when the ladder never reaches it",
  );
  assert.equal(staleRun.voiceInputRequestEventFreshnessDiagnosis.observationAgeMs, 61001);

  // The expiry arms: the request event stays honestly fresh while the
  // reassessment refuses — the ages are exact arithmetic from the
  // frozen pins. The gate-expiry refusal rides the mapped read-gate
  // echo.
  assert.equal(
    stageDP22GateExpiryReassessmentEvaluatedAtEpochMs - stageDP22VoiceRequestEventAtEpochMs,
    31001,
  );
  const gateExpiryRun = runRequest(
    byLabel(stageDP22VoiceRequestMatrix, "voice_request_reassessment_refused_at_gate_expiry"),
  );
  assert.equal(gateExpiryRun.reason, "live_session_read_gate_not_currently_live");
  assert.equal(
    gateExpiryRun.voiceInputRequestEventFreshnessDiagnosis.state,
    "fresh",
    "the request event stays honestly fresh while the reassessment refuses",
  );
  assert.equal(
    gateExpiryRun.mappedReadGateState,
    "no_active_live_session",
    "the gate-expiry refusal reads through the mapped read-gate echo",
  );

  // The transcription lane one rung deeper: at the far-future
  // evaluation the request's re-run refuses first and the decision's
  // cause is the request's refusal; at the gate expiry the decision's
  // own event stays honestly fresh (30 501) while the request's
  // refusal propagates. The selection echo survives both refusals —
  // the assessed selection is what the receiver named, never lost.
  assert.equal(
    stageDP22TranscriptionExpiryReassessmentEvaluatedAtEpochMs - stageDP22TranscriptionDecisionEventAtEpochMs,
    60001,
  );
  const transcriptionStaleRun = assessPondVoiceTranscriptionProviderDecision({
    ...transcriptionInputOf(transcriptionRecordedArm),
    receiverEvaluatedAtEpochMs: 1800000150001,
  });
  assert.equal(transcriptionStaleRun.reason, "voice_request_not_currently_recorded");
  assert.equal(
    transcriptionStaleRun.mappedVoiceRequestReassessmentReason,
    "live_session_read_gate_not_currently_live",
    "the decision reads the request's own ladder verdict one rung deeper",
  );
  assert.equal(
    transcriptionStaleRun.transcriptionDecisionEventFreshnessDiagnosis.state,
    "stale",
    "the decision event's own diagnosis still carries its honest stale state verbatim",
  );
  assert.equal(
    transcriptionStaleRun.transcriptionDecisionEventFreshnessDiagnosis.observationAgeMs,
    60501,
  );
  assert.deepEqual(
    deepClone(transcriptionStaleRun.recordedTranscriptionSelection),
    deepClone(POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS[0]),
    "the decision's selection echo survives the ladder refusal verbatim",
  );
  assert.equal(
    stageDP22GateExpiryReassessmentEvaluatedAtEpochMs - stageDP22TranscriptionDecisionEventAtEpochMs,
    30501,
  );
  const transcriptionGateExpiryRun = assessPondVoiceTranscriptionProviderDecision({
    ...transcriptionInputOf(transcriptionRecordedArm),
    receiverEvaluatedAtEpochMs: stageDP22GateExpiryReassessmentEvaluatedAtEpochMs,
  });
  assert.equal(transcriptionGateExpiryRun.reason, "voice_request_not_currently_recorded");
  assert.equal(
    transcriptionGateExpiryRun.transcriptionDecisionEventFreshnessDiagnosis.state,
    "fresh",
    "the decision event stays honestly fresh while the request's re-run refuses",
  );
  assert.deepEqual(
    deepClone(transcriptionGateExpiryRun.mappedVoiceRequestDiagnosis),
    { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 31001 },
    "the request echo's own diagnosis stays honest at the gate expiry",
  );

  // THE RE-ASSESS-AFTER-RETRACTION HONESTY — recorded deviation: BOTH
  // records confine honestly after retraction, deliberately opposite to
  // the D-P19 receipt's frozen-at-issuance presentation. The two
  // retention postures pin the split.
  assert.equal(
    byLabel(stageDP22VoiceRequestMatrix, "voice_request_confined_after_retraction").assessment.voiceInputRequestRetentionPosture,
    "voice_input_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    "the request's retention posture names the reassessment honesty verbatim",
  );
  assert.equal(
    byLabel(stageDP22VoiceRequestMatrix, "voice_request_confined_after_retraction").assessment.reason,
    "live_session_read_gate_not_currently_live",
    "the confined request refuses at the gate re-run — the retraction feeds every reassessment",
  );
  assert.equal(
    runRequest(byLabel(stageDP22VoiceRequestMatrix, "voice_request_confined_after_retraction"))
      .voiceInputRequestEventFreshnessDiagnosis.observationAgeMs,
    14000,
    "the confined request event stays honestly fresh — its staleness is not the refusal",
  );
  assert.equal(
    byLabel(stageDP22TranscriptionMatrix, "transcription_decision_confined_after_retraction").assessment.transcriptionDecisionRetentionPosture,
    "transcription_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    "the decision's retention posture names the reassessment honesty verbatim",
  );
  assert.equal(
    runTranscription(byLabel(stageDP22TranscriptionMatrix, "transcription_decision_confined_after_retraction")).reason,
    "voice_request_not_currently_recorded",
    "the confined decision refuses through the confined request — two depths of honest echo",
  );
  assert.equal(
    runTranscription(byLabel(stageDP22TranscriptionMatrix, "transcription_decision_confined_after_retraction"))
      .mappedVoiceRequestReassessmentReason,
    "live_session_read_gate_not_currently_live",
    "the confined decision reads the request's confinement verbatim, two depths down",
  );
  const dp19AdmittedArm = byLabel(
    stageDP19ReceiptMatrix,
    "receipt_recorded_over_performed_dispatch",
  );
  assert.equal(
    dp19AdmittedArm.deliveryReceipt.receiptRetentionPosture,
    "receipt_is_module_state_process_lifetime_no_indefinite_retention_delivery_does_not_grant_retention",
    "the D-P19 receipt's retention posture never claims the reassessment honesty",
  );
  assert.notEqual(
    dp19AdmittedArm.deliveryReceipt.receiptRetentionPosture,
    "voice_input_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    "the receipt is frozen at issuance; the D-P22 records are not — the postures split deliberately",
  );

  // The wall unchanged through retraction — it never had session legs to
  // lose: the wall input carries no clock and no session leg, so the
  // same call before and after any session state gives one deep-equal
  // posture.
  const wallArm = byLabel(
    stageDP22ClaimedVoiceMatrix,
    "claimed_voice_refused_transcribed_text_terminal_declared_ref",
  );
  const wallBefore = runFreshWall(wallInputOf(wallArm));
  const wallAfter = runFreshWall(wallInputOf(wallArm));
  assert.deepEqual(deepClone(wallBefore), deepClone(wallAfter));
  assert.equal(wallBefore.claimedVoiceWallPosture,
    "standing_claimed_voice_wall_refused_no_transcription_runtime_exists_this_cut");

  // The recorded arm's postures ride verbatim — no capture, no
  // transcription, no runtime, no fallback, no consumption this cut.
  assert.equal(
    requestRecordedArm.voiceInputRequest.voiceRequestCapturePosture,
    "voice_input_request_requests_no_capture_the_mic_stays_disabled_this_cut",
  );
  assert.equal(
    requestRecordedArm.voiceInputRequest.voiceRequestTranscriptionPosture,
    "no_transcription_composed_by_a_request_transcription_is_the_provider_decision_lane",
  );
  assert.equal(
    requestRecordedArm.voiceInputRequest.voiceRequestRunwayPosture,
    "voice_runway_only_no_capture_or_transcription_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_causes",
  );
  assert.equal(
    requestRecordedArm.voiceInputRequest.voiceRequestChannelPosture,
    "spoken_operator_input_is_not_the_typed_channel_the_channels_never_become_interchangeable_because_they_serialize_as_text",
  );
  assert.equal(
    requestRecordedArm.voiceInputRequest.voiceRequestScopePosture,
    "a_microphone_device_is_not_a_principal_scope_is_never_created_from_physical_presence_or_a_channel",
  );
  assert.equal(
    requestRecordedArm.voiceInputRequest.voiceRequestEvidencePosture,
    "voice_request_is_not_evidence_an_observation_alone_is_never_canonical_evidence_uncertainty_is_never_serialized_as_a_zero",
  );
  assert.equal(
    requestRecordedArm.voiceInputRequest.voiceRequestAuthorityPosture,
    "voice_request_grants_no_authority_membership_or_admission",
  );
  for (const arm of [transcriptionRecordedArm]) {
    assert.equal(
      arm.transcriptionDecision.transcriptionDecisionRuntimePosture,
      "no_transcription_runtime_established_the_decision_records_a_selection_not_a_runtime",
    );
    assert.equal(
      arm.transcriptionDecision.transcriptionDecisionCapturePosture,
      "performs_no_capture_no_audio_io_no_recording",
    );
    assert.equal(
      arm.transcriptionDecision.transcriptionDecisionIdentityPosture,
      "provider_session_is_not_agent_no_agentid_created",
    );
    assert.equal(
      arm.transcriptionDecision.transcriptionDecisionConsumptionPosture,
      "consumed_by_no_runtime_composer_or_transport_this_cut",
    );
    assert.equal(arm.transcriptionDecision.authority, "none");
  }
});

// ---------------------------------------------------------------
// Block 5: fail-closed — garbage inputs refuse without throwing on all
// three contracts.
// ---------------------------------------------------------------
block("failClosed", () => {
  const validRequest = deepClone(requestRecordedArm.voiceInputRequest);
  const validLegs = requestInputOf(requestRecordedArm);
  const garbageRequestInputs = [
    null,
    undefined,
    0,
    "a voice request, please",
    [],
    {},
    { voiceInputRequest: null },
    { voiceInputRequest: "not a record" },
    { voiceInputRequest: [] },
    { voiceInputRequest: validRequest },
    { ...validLegs, establishmentRecord: null, voiceInputRequest: validRequest },
    { ...validLegs, voiceInputRequest: { ...validRequest, voiceInputRequestMetadata: null } },
    { ...validLegs, voiceInputRequest: { ...validRequest, voiceInputRequestMetadata: 42 } },
    {
      ...validLegs,
      voiceInputRequest: { ...validRequest, voiceInputRequestBasis: "inferred_from_vibes" },
    },
    {
      ...validLegs,
      voiceInputRequest: { ...validRequest, voiceRequestRunwayPosture: "a capture runtime exists hereafter" },
    },
  ];
  for (const input of garbageRequestInputs) {
    let assessment = null;
    assert.doesNotThrow(() => {
      assessment = assessPondVoiceInputRequestDecision(input);
    });
    assert.equal(assessment.voiceInputRequestState, "voice_input_request_not_recorded", "garbage refuses");
    assert.ok(assessment.mappedEstablishmentState !== null, "establishment echoes always carried");
    assert.ok(assessment.mappedReadGateState !== null, "read-gate echoes always carried");
    assert.ok(assessment.voiceInputRequestEventFreshnessDiagnosis !== null, "diagnosis always carried");
    assertLacksKeys(assessment, POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS, "garbage request assessment");
    for (const ceilingKey of REQUEST_CEILING_KEYS) {
      assert.equal(assessment[ceilingKey], false, `request ceiling ${ceilingKey} on garbage input`);
    }
  }
  // The exact breakage classes: everything without a valid voice-request
  // record is invalid; the valid request over healthy legs keeps the
  // cut's version.
  assert.doesNotThrow(() => {
    const healthy = assessPondVoiceInputRequestDecision(validLegs);
    assert.equal(healthy.contractVersion, "pond-voice-input-request-decision-d-p22");
    assert.equal(healthy.voiceInputRequestDecisionVersion, "pond-voice-input-request-decision-d-p22");
  });

  // A valid request whose metadata carries a nested forbidden key deep
  // inside: the deep walk refuses.
  const nestedForbidden = assessPondVoiceInputRequestDecision({
    ...validLegs,
    voiceInputRequest: {
      ...validRequest,
      voiceInputRequestMetadata: {
        ...validRequest.voiceInputRequestMetadata,
        voice_requested_at_epoch_ms: { outer: { audioTranscriptText: "would_go_here" } },
      },
    },
  });
  assert.equal(nestedForbidden.reason, "voice_request_record_invalid");

  // Transcription garbage: the same garbage classes over the
  // transcription input.
  const validDecision = deepClone(transcriptionRecordedArm.transcriptionDecision);
  const validTranscriptionLegs = transcriptionInputOf(transcriptionRecordedArm);
  const garbageTranscriptionInputs = [
    null,
    undefined,
    7,
    "transcribe my voice forever",
    [],
    {},
    { transcriptionDecision: null },
    { transcriptionDecision: [] },
    { transcriptionDecision: validDecision },
    { ...validTranscriptionLegs, voiceInputRequest: null, transcriptionDecision: validDecision },
    {
      ...validTranscriptionLegs,
      transcriptionDecision: { ...validDecision, supportTier: "beyond_sovereign" },
    },
  ];
  for (const input of garbageTranscriptionInputs) {
    let assessment = null;
    assert.doesNotThrow(() => {
      assessment = assessPondVoiceTranscriptionProviderDecision(input);
    });
    assert.equal(assessment.transcriptionDecisionState, "transcription_decision_not_recorded", "garbage refuses");
    assert.ok(assessment.mappedVoiceRequestState !== null, "request echoes always carried");
    assert.ok(assessment.mappedReadGateState !== null, "read-gate echoes always carried");
    assert.ok(assessment.transcriptionDecisionEventFreshnessDiagnosis !== null, "diagnosis always carried");
    assertLacksKeys(assessment, POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS, "garbage transcription assessment");
    for (const ceilingKey of TRANSCRIPTION_CEILING_KEYS) {
      assert.equal(assessment[ceilingKey], false, `transcription ceiling ${ceilingKey} on garbage input`);
    }
  }

  // A valid decision whose metadata carries a nested forbidden key deep
  // inside: the deep walk refuses.
  const nestedTranscriptionForbidden = assessPondVoiceTranscriptionProviderDecision({
    ...validTranscriptionLegs,
    transcriptionDecision: {
      ...validDecision,
      transcriptionDecisionMetadata: {
        ...validDecision.transcriptionDecisionMetadata,
        recorded_at_epoch_ms: { outer: { waveformEvidence: "would_go_here" } },
      },
    },
  });
  assert.equal(nestedTranscriptionForbidden.reason, "transcription_decision_record_invalid");

  // Wall garbage: one exact key, nothing echoed, no throw.
  for (const input of [
    null,
    undefined,
    0,
    "transcript of my voice, please",
    [],
    {},
    { claimedVoiceTranscript: null },
    { claimedVoiceTranscript: [] },
    { claimedVoiceTranscript: "a text alone is not a claim" },
    {
      claimedVoiceTranscript: {
        claimedTranscriptText: { nested: { claimedVoiceTranscript: "would_go_here" } },
        claimedVoiceCaptureClass: "transcribed_text",
        claimedVoiceSourceRef: "operator:probe",
      },
    },
  ]) {
    let refusal = null;
    assert.doesNotThrow(() => {
      refusal = assessPondClaimedVoiceRefusal(input);
    });
    assert.equal(refusal.claimedVoiceState, "claimed_voice_transcript_not_composed", "garbage refuses");
    assert.equal(refusal.claimedVoiceWallPosture,
      "standing_claimed_voice_wall_refused_no_transcription_runtime_exists_this_cut");
    assert.ok(!carriesString(refusal, "would_go_here"), "the wall echoes no claim value");
    assertLacksKeys(refusal, POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS, "wall garbage assessment");
    for (const ceilingKey of WALL_CEILING_KEYS) {
      assert.equal(refusal[ceilingKey], false, `wall ceiling ${ceilingKey} on garbage input`);
    }
  }
});

// ---------------------------------------------------------------
// Block 6: ceiling and widen — the inventory slice ties (the D-P21
// union plus exactly four voice-lane keys), the widen probes, and the
// ceilings over fresh runs.
// ---------------------------------------------------------------
block("ceilingAndWiden", () => {
  const fullDP21 = [...POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS];
  assert.deepEqual(
    POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS.slice(0, fullDP21.length),
    fullDP21,
    "the D-P22 inventory keeps the frozen D-P21 union verbatim",
  );
  assert.equal(
    POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS.length,
    fullDP21.length + 4,
    "the D-P22 inventory is exactly the D-P21 union plus four keys",
  );
  assert.deepEqual(
    POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS.slice(-4),
    ["capturedAudioRecord", "waveformEvidence", "claimedVoiceTranscript", "audioTranscriptText"],
    "the four voice-lane keys are the widen, in the declared order",
  );

  // The widen probes: every voice-lane key this cut exists to refuse —
  // plus the inherited lane vocabulary — refuses the record whole. The
  // planted value is never a URL (a value is not a transport).
  const validLegs = requestInputOf(requestRecordedArm);
  for (const key of [
    "capturedAudioRecord",
    "waveformEvidence",
    "claimedVoiceTranscript",
    "audioTranscriptText",
    "agentReplyText",
    "composedAgentReply",
    "claimedAgentReply",
    "providerCredential",
    "chatMessage",
  ]) {
    const widened = assessPondVoiceInputRequestDecision({
      ...validLegs,
      voiceInputRequest: {
        ...deepClone(requestRecordedArm.voiceInputRequest),
        [key]: "refused_value_would_go_here",
      },
    });
    assert.equal(widened.reason, "voice_request_record_invalid", `widen probe ${key}`);
    assert.equal(widened.voiceInputRequestState, "voice_input_request_not_recorded", `widen probe ${key}`);
  }

  // The transcription record widens the same way: a forbidden record
  // field refuses the decision whole; a captured-audio record is
  // exactly what the decision must never carry.
  const validTranscriptionLegs = transcriptionInputOf(transcriptionRecordedArm);
  for (const key of [
    "capturedAudioRecord",
    "waveformEvidence",
    "audioTranscriptText",
    "providerCredential",
  ]) {
    const widened = assessPondVoiceTranscriptionProviderDecision({
      ...validTranscriptionLegs,
      transcriptionDecision: {
        ...deepClone(transcriptionRecordedArm.transcriptionDecision),
        [key]: "refused_value_would_go_here",
      },
    });
    assert.equal(widened.reason, "transcription_decision_record_invalid", `transcription widen probe ${key}`);
    assert.equal(widened.recordedTranscriptionSelection, null, `transcription widen probe ${key}`);
  }

  // The wall widens the same way: a forbidden claim key refuses whole.
  for (const key of ["capturedAudioRecord", "waveformEvidence", "audioTranscriptText"]) {
    const widenedWall = assessPondClaimedVoiceRefusal({
      claimedVoiceTranscript: {
        claimedTranscriptText: "your voice input has been considered.",
        claimedVoiceCaptureClass: "transcribed_text",
        claimedVoiceSourceRef: "operator:probe",
        [key]: "refused_value_would_go_here",
      },
    });
    assert.equal(widenedWall.reason, "pond_claimed_voice_claim_invalid", `wall widen probe ${key}`);
    assert.equal(widenedWall.claimedVoiceState, "claimed_voice_transcript_not_composed", `wall widen probe ${key}`);
  }

  // The does-not-establish family is all-false on fresh runs of the
  // recorded arms, the retention postures ride verbatim, and the
  // runtime-activation and authority postures stay pinned.
  {
    const fresh = runRequest(requestRecordedArm);
    for (const ceilingKey of REQUEST_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `request ceiling ${ceilingKey} on ${requestRecordedArm.fixtureLabel}`);
    }
    assert.equal(fresh.voiceRequestConsumedByAnyRuntimeOrCapturerThisCut, false, requestRecordedArm.fixtureLabel);
    assert.equal(fresh.voiceRequestEchoesTranscriptText, false, requestRecordedArm.fixtureLabel);
  }
  {
    const fresh = runTranscription(transcriptionRecordedArm);
    for (const ceilingKey of TRANSCRIPTION_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `transcription ceiling ${ceilingKey} on ${transcriptionRecordedArm.fixtureLabel}`);
    }
    assert.equal(fresh.transcriptionDecisionConsumedThisCut, false, transcriptionRecordedArm.fixtureLabel);
  }
  for (const arm of stageDP22ClaimedVoiceMatrix) {
    const fresh = runWall(arm);
    for (const ceilingKey of WALL_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `wall ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }
});

// ---------------------------------------------------------------
// Block 7: claim tie — the voice lane's records carry no agent
// identity of any kind, no model or ASR or harness reference, and no
// transcript text anywhere; the wall echoes NOTHING about any claim —
// no claim value appears in any serialized refusal, including the arm
// whose claimed text is the very prose this receiver composed (a known
// D-P16 fact echoed NOWHERE by the wall) and the arm whose source is a
// distinguishable counterparty (a different claim reads out the same
// refusal verbatim — the source echoes nowhere); the wall input is
// exactly one key.
// ---------------------------------------------------------------
block("claimTie", () => {
  assert.deepEqual(
    Object.keys(requestRecordedArm.voiceInputRequest).sort(),
    [...VOICE_RECORD_KEYS].sort(),
    "the request record has exactly the pinned keys — no capture, no transcript text",
  );
  assert.deepEqual(
    Object.keys(transcriptionRecordedArm.transcriptionDecision).sort(),
    [...TRANSCRIPTION_RECORD_KEYS].sort(),
    "the decision record has exactly the pinned keys — no model or ASR reference",
  );
  assert.deepEqual(
    Object.keys(requestInputOf(requestRecordedArm)).sort(),
    [...VOICE_REQUEST_INPUT_KEYS].sort(),
    "the request input has exactly the 14 pinned keys",
  );
  assert.deepEqual(
    Object.keys(transcriptionInputOf(transcriptionRecordedArm)).sort(),
    [...TRANSCRIPTION_INPUT_KEYS].sort(),
    "the transcription input has exactly the 15 pinned keys",
  );

  // The voice lane carries NO agent identity of any kind: no agent ref
  // scheme appears anywhere in a request or decision record or
  // assessment.
  for (const arm of stageDP22VoiceRequestMatrix) {
    assert.ok(
      !JSON.stringify(arm.voiceInputRequest ?? {}).includes("agent:"),
      `${arm.fixtureLabel}: the request record carries no agent ref`,
    );
    assert.ok(
      !JSON.stringify(runRequest(arm)).includes("agent:"),
      `${arm.fixtureLabel}: the request assessment echoes no agent ref`,
    );
  }
  for (const arm of stageDP22TranscriptionMatrix) {
    assert.ok(
      !JSON.stringify(arm.transcriptionDecision ?? {}).includes("agent:"),
      `${arm.fixtureLabel}: the decision record carries no agent ref`,
    );
    assert.ok(
      !JSON.stringify(runTranscription(arm)).includes("agent:"),
      `${arm.fixtureLabel}: the decision assessment echoes no agent ref`,
    );
  }

  // The transcription decision carries no model, harness, or ASR-model
  // reference: the exact key set is the proof (a comment recording the
  // deviation may name the words, the record never carries the key).
  for (const arm of stageDP22TranscriptionMatrix) {
    const record = arm.transcriptionDecision;
    if (record === null || typeof record !== "object") continue;
    for (const key of Object.keys(record)) {
      assert.ok(
        !/^(modelRef|harnessRef|asrModelRef)$/i.test(key),
        `the transcription record must never carry ${key}`,
      );
    }
  }

  // No transcript text anywhere in any request or decision assessment —
  // neither a claimed transcript text nor the composed prose this
  // receiver itself composed (a known D-P16 fact echoed NOWHERE by this
  // lane either).
  for (const arm of stageDP22VoiceRequestMatrix) {
    const fresh = runRequest(arm);
    assert.ok(
      !carriesString(fresh, stageDP22ClaimedTranscriptText),
      `the request assessment must never carry the claimed transcript text (${arm.fixtureLabel})`,
    );
    assert.ok(
      !carriesString(fresh, stageDP22ComposedProseClaimText),
      `the request assessment must never carry the composed prose (${arm.fixtureLabel})`,
    );
    assert.equal(fresh.voiceRequestEchoesTranscriptText, false, arm.fixtureLabel);
  }
  for (const arm of stageDP22TranscriptionMatrix) {
    const fresh = runTranscription(arm);
    assert.ok(
      !carriesString(fresh, stageDP22ClaimedTranscriptText),
      `the decision assessment must never carry the claimed transcript text (${arm.fixtureLabel})`,
    );
    assert.ok(
      !carriesString(fresh, stageDP22ComposedProseClaimText),
      `the decision assessment must never carry the composed prose (${arm.fixtureLabel})`,
    );
  }

  // The wall: every claimed-* field the assessment shape carries reads
  // out a refusal, never a claim — the state and posture are the
  // single refusing literals and every claim-echo negation is all-false.
  const wallFresh = runWall(terminalArm);
  const claimedAssessmentKeys = Object.keys(wallFresh).filter((key) => key.startsWith("claimed"));
  for (const key of claimedAssessmentKeys) {
    const value = wallFresh[key];
    if (value === "claimed_voice_transcript_not_composed" || value === "pond-claimed-voice-refusal-d-p22") continue;
    if (typeof key === "string" && key.startsWith("claimedVoiceEstablishes")) {
      assert.equal(value, false, `the wall's ${key} must read out a refusal`);
      continue;
    }
    if (typeof key === "string" && (key.endsWith("Echoed") || key.endsWith("Stored") || key.endsWith("AcceptedAsIdentity"))) {
      assert.equal(value, false, `the wall's ${key} is a negation that stays false`);
      continue;
    }
    assert.ok(
      typeof value === "string" || value === false,
      `the wall's ${key} carries a refusal, never a claim value`,
    );
  }

  // The known-text arm (the wall against the receiver's own D-P16
  // prose) and the distinguishable-source arm: different claims,
  // identical refusals — nothing about any claim echoes anywhere.
  const composedProseArm = byLabel(
    stageDP22ClaimedVoiceMatrix,
    "claimed_voice_refused_transcript_of_composed_prose",
  );
  assert.equal(composedProseArm.claimedVoiceTranscript.claimedTranscriptText, stageDP22ComposedProseClaimText);
  const composedWallRun = runWall(composedProseArm);
  assert.ok(
    !carriesString(composedWallRun, stageDP22ComposedProseClaimText),
    "the wall never echoes even the text this receiver composed",
  );
  const distinctSourceArm = byLabel(
    stageDP22ClaimedVoiceMatrix,
    "claimed_voice_refused_transcribed_text_source_ref_never_echoed",
  );
  assert.notEqual(
    distinctSourceArm.claimedVoiceTranscript.claimedVoiceSourceRef,
    terminalArm.claimedVoiceTranscript.claimedVoiceSourceRef,
    "the two terminal arms carry different claimed sources",
  );
  assert.deepEqual(
    deepClone(runWall(distinctSourceArm)),
    deepClone(runWall(terminalArm)),
    "a different claimed source reads out the same refusal verbatim — the source echoes nowhere",
  );
  for (const serializedProbe of [...stageDP22ClaimedVoiceMatrix]) {
    const serialized = JSON.stringify(runWall(serializedProbe));
    const claim = serializedProbe.claimedVoiceTranscript ?? {};
    for (const value of [
      typeof claim.claimedTranscriptText === "string" ? claim.claimedTranscriptText : null,
      typeof claim.claimedVoiceSourceRef === "string" ? claim.claimedVoiceSourceRef : null,
    ]) {
      if (value === null || value.length === 0) continue;
      assert.ok(!serialized.includes(value), "no claim value in the serialized refusal");
    }
  }

  // The wall input is exactly one key.
  assert.deepEqual(
    Object.keys(wallInputOf(terminalArm)).sort(),
    ["claimedVoiceTranscript"],
    "the wall input carries exactly the one claim key",
  );
});

// ---------------------------------------------------------------
// Block 8: hygiene — DOM-shaped needles and network constants stay out
// of the cut's contracts and fixture; the fixture stays value-import-
// free; the banned frozen names never re-declare; the env-prefix family
// stays out of every file of this cut; and the hand-written voice
// module stays walked — including the audio-capture needles that would
// turn the runway into a recorder.
// ---------------------------------------------------------------
block("hygiene", () => {
  const contractPaths = [
    "src/contracts/pond-voice-input-request-decision.ts",
    "src/contracts/pond-voice-transcription-provider-decision.ts",
    "src/contracts/pond-claimed-voice-refusal.ts",
    "src/fixtures/stage-d-p22-pond-voice.ts",
  ];
  const texts = contractPaths.map((path) => readModule(path));

  // (a) DOM-shaped needles stay out of the cut's contract and fixture
  // files.
  const domNeedles = [
    "document.",
    "window.",
    "localStorage",
    "createElement",
    "innerHTML",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "WebSocket",
  ];
  contractPaths.forEach((path, index) => {
    for (const needle of domNeedles) {
      assert.ok(!texts[index].includes(needle), `${path} carries the DOM needle ${needle}`);
    }
  });

  // (b) network constants stay out of the cut's contract and fixture
  // files — fixture VALUES are never endpoints either (the planted
  // probe values are refused placeholders).
  const networkNeedles = ["wss://", "https://", "http://", "eth_node", "json_rpc", "0x"];
  contractPaths.forEach((path, index) => {
    for (const needle of networkNeedles) {
      assert.ok(!texts[index].includes(needle), `${path} carries the network constant ${needle}`);
    }
  });

  // (b2) the audio-capture needles stay out of the contracts and
  // fixture: the B2 invariant (voice affordance != recording) is a
  // source-level ban — no capture surface can be declared in governed
  // code this cut.
  const audioNeedles = ["getUserMedia", "mediaDevices", "AudioContext", "MediaRecorder", "AudioWorklet"];
  contractPaths.forEach((path, index) => {
    for (const needle of audioNeedles) {
      assert.ok(!texts[index].includes(needle), `${path} carries the audio-capture constant ${needle}`);
    }
  });

  // (c) the fixture is value-import-free (type-only imports only).
  const fixtureText = texts[3];
  for (const line of fixtureText.split("\n")) {
    if (line.startsWith("import")) {
      assert.ok(
        line.startsWith("import type {"),
        `the fixture carries a non-type import: ${line.trim()}`,
      );
    }
  }

  // (d) the banned-name source walk over the three contract files:
  // quoted-index reads of frozen fields and import lines are the tie/leg
  // plumbing (the established exemption) and are stripped before
  // matching.
  const nameNeedles = [
    "privateReadsActivated",
    "principalIdIssued",
    "mappingEstablishmentState",
    "onchainVerificationState",
    "collaborativeReadPosture",
    "collaborativeReadScopePosture",
    "readScopePosture",
    "activationState",
    "readAdmissionState",
    "privateReadActivationState",
    "sessionScopePosture",
    "authenticationPerformed",
    "POND_STAGE_DP12",
    "POND_STAGE_DP13",
    "pond-knowledge-forge",
    "fixture_structural_session_scoped_private_read_activation",
    "fixture_structural_session_scoped_collaborative_structural_read_activation",
    "all_activation_checks_satisfied",
  ];
  const stripQuotedIndexReads = (text) =>
    text.replace(/[[\s]*["'][A-Za-z_$][\w$]*["']\s*\]/g, "[]");
  const stripImports = (text) =>
    text.split("\n").filter((line) => !line.startsWith("import")).join("\n");
  for (const contractPath of contractPaths.slice(0, 3)) {
    const normalized = stripImports(stripQuotedIndexReads(readModule(contractPath)));
    for (const needle of nameNeedles) {
      assert.ok(
        !normalized.includes(needle),
        `${contractPath} carries frozen name ${needle} outside the leg plumbing`,
      );
    }
  }

  // (e) the inventory union stays intact: the D-P22 inventory is the
  // imported D-P21 base, and the second and third contracts import the
  // D-P22 union by value — one widening per lane.
  assert.ok(
    texts[0].includes("POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS"),
    "the composed inventory must import the frozen D-P21 base",
  );
  assert.ok(
    texts[1].includes("POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS") &&
      texts[2].includes("POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS"),
    "the transcription contract and the wall share the same inventory import",
  );
  for (const key of ["capturedAudioRecord", "waveformEvidence", "claimedVoiceTranscript", "audioTranscriptText"]) {
    assert.ok(texts[0].includes(`"${key}"`), `forbidden key ${key} missing from the contract inventory`);
  }
  assert.ok(
    texts[1].includes('from "./pond-voice-input-request-decision.ts"') &&
      texts[2].includes('from "./pond-voice-input-request-decision.ts"'),
    "contracts 2 and 3 import contract 1's inventory via the .ts specifier",
  );

  // (f) the env-needle family stays out of every file of this cut: no
  // secret-bearing ceremony exists, so even the shared live-session env
  // prefix never appears. The ban matches the shared prefix — never the
  // full env name.
  for (const path of [
    "src/contracts/pond-voice-input-request-decision.ts",
    "src/contracts/pond-voice-transcription-provider-decision.ts",
    "src/contracts/pond-claimed-voice-refusal.ts",
    "src/fixtures/stage-d-p22-pond-voice.ts",
    "docs/stage-d-p22-pond-voice-lane.md",
    "ui/pond-voice.js",
  ]) {
    const fileText = readModule(path);
    assert.ok(
      !fileText.includes("TOADAID_LIVE_"),
      `${path} carries a live-session env-prefixed name`,
    );
  }

  // (g) the hand-written voice module stays walked: it reaches contract
  // code only through the generated bundles and the sibling lane
  // modules — no src import, no frozen contract name, no transport,
  // store, or capture needle.
  const moduleText = readModule("ui/pond-voice.js");
  assert.ok(
    !moduleText.includes('from "../src/'),
    "the module must never import src contracts directly",
  );
  for (const frozenName of [
    "pond-local-principal-id-issuance",
    "pond-erc8004-identity-mapping",
    "pond-principal-identity-readiness-composition",
    "pond-private-read-activation",
    "pond-private-read-admission",
    "pond-knowledge-forge",
  ]) {
    assert.ok(
      !moduleText.includes(frozenName),
      "the hand-written voice module carries frozen vocabulary",
    );
  }
  for (const forbidden of [
    "__TAURI__",
    "invoke(",
    "fetch(",
    "XMLHttpRequest",
    "WebSocket",
    "EventSource",
    "localStorage",
    "sessionStorage",
    "getUserMedia",
    "mediaDevices",
    "AudioContext",
    "MediaRecorder",
  ]) {
    assert.ok(!moduleText.includes(forbidden), `the module must not carry ${forbidden}`);
  }
  assert.match(
    moduleText,
    /from "\.\/generated\/pond-stage-d-live-session-voice\.js"/,
    "the voice module imports through the committed generated artifact",
  );
  assert.match(
    moduleText,
    /from "\.\/generated\/pond-stage-d-live-session\.js"/,
    "the voice module reads the declared maximum age through the frozen session bundle",
  );
  assert.match(
    moduleText,
    /from "\.\/pond-live-session\.js"/,
    "the voice module reads the sibling live-session lane's held records",
  );
  assert.match(
    moduleText,
    /if \(typeof document !== "undefined"\) \{\s*renderPondVoice\(document\);\s*\}/,
    "the voice module self-mounts like its sibling lane modules",
  );

  // (h) package and CI wiring assert step by step.
  const packageJson = JSON.parse(readModule("package.json"));
  assert.equal(
    packageJson.scripts["test:stage-d-p22"],
    "node scripts/pond-voice-lane-selftest.mjs",
  );
  assert.equal(
    packageJson.scripts["stage-d:render-live-session-voice"],
    "node scripts/render-stage-d-live-session-voice.mjs",
  );
  const ci = readModule(".github/workflows/ci.yml");
  assert.equal(
    ci.split("Verify Stage D-P22 pond voice lane").length - 1,
    2,
    "the CI verify step appears exactly once in each job",
  );

  // (i) the provenance ties: the D-P22 provenance names the voice-input
  // request record as its record, renders the stages through D-P22,
  // carries the re-run chain's rendered stages, and the frozen D-P21
  // and D-P20 provenances stay untouched.
  const voiceProvenance = JSON.parse(
    readModule("ui/generated/pond-stage-d-live-session-voice-provenance.json"),
  );
  assert.equal(voiceProvenance.record, "src/contracts/pond-voice-input-request-decision.ts");
  assert.deepEqual(
    voiceProvenance.renderedStages.slice(-1),
    ["D-P22"],
    "the voice provenance extends the rendered stages through D-P22",
  );
  assert.ok(
    voiceProvenance.renderedStages.includes("D-P15") &&
      voiceProvenance.renderedStages.includes("D-P21"),
    "the voice provenance carries the re-run chain's rendered stages",
  );
  assert.ok(
    !voiceProvenance.inputs.includes("src/contracts/pond-cognition-provider-decision.ts"),
    "the voice bundle never re-runs the D-P21 cognition provider — the transcription lane is its own",
  );
  const repliesProvenance = JSON.parse(
    readModule("ui/generated/pond-stage-d-live-session-replies-provenance.json"),
  );
  assert.ok(
    !repliesProvenance.renderedStages.includes("D-P22"),
    "the frozen D-P21 provenance stays untouched",
  );
  const transportProvenance = JSON.parse(
    readModule("ui/generated/pond-stage-d-live-session-transport-provenance.json"),
  );
  assert.ok(
    !transportProvenance.renderedStages.includes("D-P21"),
    "the frozen D-P20 provenance stays untouched",
  );
});

block("uiWiring", () => {
  // (a) the generated-bundle tie: the committed artifact is the only
  // bridge from the shell module to the contracts; the three assessors
  // recompute the established arms identically to the src contracts.
  const srcRequestRun = assessPondVoiceInputRequestDecision(
    requestInputOf(requestRecordedArm),
  );
  const genRequestRun = assessGeneratedVoiceInputRequestDecision(
    requestInputOf(requestRecordedArm),
  );
  assert.deepEqual(deepClone(genRequestRun), deepClone(srcRequestRun));
  const refusedRequestArm = byLabel(
    stageDP22VoiceRequestMatrix,
    "voice_request_refused_basis_asserted_by_model_completion",
  );
  assert.deepEqual(
    deepClone(assessGeneratedVoiceInputRequestDecision(requestInputOf(refusedRequestArm))),
    deepClone(assessPondVoiceInputRequestDecision(requestInputOf(refusedRequestArm))),
  );
  const srcTranscriptionRun = assessPondVoiceTranscriptionProviderDecision(
    transcriptionInputOf(transcriptionRecordedArm),
  );
  assert.deepEqual(
    deepClone(assessGeneratedTranscriptionProviderDecision(transcriptionInputOf(transcriptionRecordedArm))),
    deepClone(srcTranscriptionRun),
  );
  const refusedTranscriptionArm = byLabel(
    stageDP22TranscriptionMatrix,
    "transcription_decision_refused_selection_cloud_asr",
  );
  assert.deepEqual(
    deepClone(
      assessGeneratedTranscriptionProviderDecision(transcriptionInputOf(refusedTranscriptionArm)),
    ),
    deepClone(assessPondVoiceTranscriptionProviderDecision(transcriptionInputOf(refusedTranscriptionArm))),
  );
  const wallRefusedArm = byLabel(
    stageDP22ClaimedVoiceMatrix,
    "claimed_voice_refused_transcribed_text_terminal_declared_ref",
  );
  assert.deepEqual(
    deepClone(assessGeneratedClaimedVoiceRefusal(wallInputOf(wallRefusedArm))),
    deepClone(assessPondClaimedVoiceRefusal(wallInputOf(wallRefusedArm))),
  );

  // The bundle's request template plus the receiver-own fields equals
  // the pinned recorded request — the shell never restates a posture
  // literal; the pinned open slots are exactly the principal ref and
  // the request-event instant.
  const requestTemplateTie = {
    ...pondStageDP22VoiceRequestTemplate,
    voiceInputRequestMetadata: {
      ...pondStageDP22VoiceRequestTemplate.voiceInputRequestMetadata,
      voice_requested_at_epoch_ms:
        requestRecordedArm.voiceInputRequest.voiceInputRequestMetadata.voice_requested_at_epoch_ms,
    },
    principalRef: requestRecordedArm.voiceInputRequest.principalRef,
  };
  assert.deepEqual(
    deepClone(requestTemplateTie),
    deepClone(requestRecordedArm.voiceInputRequest),
    "the re-filled request template equals the pinned recorded request verbatim",
  );
  const transcriptionTemplateTie = {
    ...pondStageDP22TranscriptionDecisionTemplate,
    transcriptionDecisionMetadata: {
      ...pondStageDP22TranscriptionDecisionTemplate.transcriptionDecisionMetadata,
      recorded_at_epoch_ms:
        transcriptionRecordedArm.transcriptionDecision.transcriptionDecisionMetadata.recorded_at_epoch_ms,
    },
    principalRef: transcriptionRecordedArm.transcriptionDecision.principalRef,
  };
  assert.deepEqual(
    deepClone(transcriptionTemplateTie),
    deepClone(transcriptionRecordedArm.transcriptionDecision),
    "the re-filled decision template equals the pinned recorded decision verbatim",
  );

  // (b) render drive — fail-closed on missing document/nodes.
  assert.equal(renderPondVoice(undefined), false);
  const elementStub = () => {
    const element = {
      className: "",
      textContent: "",
      children: [],
      listeners: {},
      dataset: {},
      attributes: {},
      type: "",
      disabled: false,
      setAttribute(name, value) {
        element.attributes[name] = String(value);
      },
      addEventListener(type, handler) {
        (element.listeners[type] ??= []).push(handler);
      },
      append(...nodes) {
        element.children.push(...nodes);
      },
      replaceChildren(...nodes) {
        element.children = nodes;
      },
    };
    return element;
  };
  const documentStub = () => {
    const nodes = {
      voiceNote: elementStub(),
      voiceStatus: elementStub(),
      voiceList: elementStub(),
      voiceWall: elementStub(),
    };
    return {
      nodes,
      querySelector(selector) {
        if (selector === "[data-voice-note]") return nodes.voiceNote;
        if (selector === "[data-voice-status]") return nodes.voiceStatus;
        if (selector === "[data-voice-list]") return nodes.voiceList;
        if (selector === "[data-voice-wall]") return nodes.voiceWall;
        return null;
      },
      createElement(tag) {
        const node = elementStub();
        node.tagName = tag;
        return node;
      },
    };
  };
  const missingStatus = documentStub();
  missingStatus.nodes.voiceStatus = null;
  assert.equal(renderPondVoice(missingStatus), false);
  const missingList = documentStub();
  missingList.nodes.voiceList = null;
  assert.equal(renderPondVoice(missingList), false);
  const missingNote = documentStub();
  missingNote.nodes.voiceNote = null;
  assert.equal(renderPondVoice(missingNote), false);
  const missingWall = documentStub();
  missingWall.nodes.voiceWall = null;
  assert.equal(renderPondVoice(missingWall), false);

  // The render drive on the empty shell state: the honest empty posture.
  const collectText = (node) =>
    [node.textContent, ...node.children.map(collectText)].join("\n");
  const liveDocument = documentStub();
  assert.equal(renderPondVoice(liveDocument), true);
  assert.equal(liveDocument.nodes.voiceNote.dataset.voiceRendered, "true");
  assert.match(
    collectText(liveDocument.nodes.voiceList),
    /No voice input request recorded/,
  );
  assert.match(collectText(liveDocument.nodes.voiceWall), /Claimed-voice wall/);

  // (c) the shell drive on the fixture clock — the voice-lane lifecycle.
  // Determinism comes from the contract's purity, never from the wall
  // clock. The lane is touched by nothing the reply or delivery lanes
  // run: the drive establishes, records the voice input request, records
  // the transcription decision, and never enters the reply or delivery
  // lanes at all.
  const establishedArmD15 = stageDP15SessionEntryLiveSessionEstablished;
  const nowMs = stageDP15EvaluatedAtEpochMs;
  const verifierRecord = deepClone(establishedArmD15.dp8VerifierRecord);
  const proofRecord = deepClone(establishedArmD15.dp8ProofRecord);
  const observationRecord = deepClone(
    stageDP6AuthenticationObservationComplete.observationRecord,
  );
  const establishment = establishLiveSession({
    verifierRecord,
    proofRecord,
    observationRecord,
    evaluatedAtEpochMs: nowMs,
    maximumAgeMs: maximumAge,
  });
  assert.equal(
    establishment.sessionState,
    "live_session_scoped_authentication_established",
    "the shell-drive establishment must succeed over the healthy legs",
  );

  // Record the voice input request: the request event postdates the
  // establishment it rides, evaluated inside its own freshness window
  // on the held session legs. The request captures nothing and is
  // consumed by no runtime or capturer this cut.
  const requestEventAt = nowMs + 29000;
  const requestEvaluatedAt = requestEventAt + 1000;
  assert.ok(requestEvaluatedAt - requestEventAt <= maximumAge);
  const recordedRequest = recordVoiceInputRequest({
    voiceRequestedAtEpochMs: requestEventAt,
    evaluatedAtEpochMs: requestEvaluatedAt,
  });
  assert.equal(recordedRequest.recorded, true, "the healthy request must record");
  assert.equal(
    recordedRequest.assessment.voiceInputRequestState,
    "voice_input_request_recorded_session_scoped_no_capture_no_transcription",
  );
  assert.equal(
    recordedRequest.assessment.reason,
    "all_voice_request_checks_satisfied",
  );
  assert.equal(recordedRequest.assessment.authority, "none");
  assert.equal(
    recordedRequest.assessment.voiceInputRequestEventFreshnessDiagnosis.observationAgeMs,
    requestEvaluatedAt - requestEventAt,
  );
  for (const ceilingKey of REQUEST_CEILING_KEYS) {
    assert.equal(
      recordedRequest.assessment[ceilingKey],
      false,
      `ceiling ${ceilingKey} in the drive`,
    );
  }
  const requestHold = heldVoiceRequestEntries();
  assert.equal(requestHold.held, true);
  assert.equal(requestHold.entries.length, 1);
  assert.equal(
    requestHold.entries[0].voiceInputRequest.principalRef,
    stageDP22ReceiverRef,
  );
  const voiceHold = currentVoicePosture({ evaluatedAtEpochMs: requestEvaluatedAt });
  assert.equal(voiceHold.held, true);
  assert.equal(voiceHold.requests.length, 1);
  assert.equal(voiceHold.requests[0].presentationMark, "in_session");
  assert.equal(voiceHold.decisions.length, 0, "no decision exists before the request is decided");
  assert.equal(
    voiceHold.requests[0].voiceInputRequest.voiceInputRequestMetadata.voice_requested_at_epoch_ms,
    requestEventAt,
  );

  // Record the transcription decision over the recorded request: the
  // ONE performable selection, no capture and no audio I/O and no
  // transcription — and the decision is consumed by nothing this cut.
  const decisionEventAt = nowMs + 29500;
  const decisionEvaluatedAt = nowMs + 30000;
  assert.ok(decisionEvaluatedAt - decisionEventAt <= maximumAge);
  assert.ok(decisionEventAt >= requestEventAt, "the decision event postdates the request it rides");
  const recordedDecision = recordTranscriptionDecision({
    voiceRequestIndex: 0,
    transcriptionDecisionRecordedAtEpochMs: decisionEventAt,
    evaluatedAtEpochMs: decisionEvaluatedAt,
  });
  assert.equal(recordedDecision.recorded, true, "the healthy decision must record");
  assert.equal(
    recordedDecision.assessment.transcriptionDecisionState,
    "transcription_decision_recorded_session_scoped_no_runtime_established",
  );
  assert.equal(
    recordedDecision.assessment.reason,
    "all_transcription_decision_checks_satisfied",
  );
  assert.deepEqual(
    deepClone(recordedDecision.assessment.recordedTranscriptionSelection),
    deepClone(POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS[0]),
  );
  assert.equal(recordedDecision.assessment.transcriptionDecisionConsumedThisCut, false);
  assert.equal(recordedDecision.assessment.credentialAdmitted, false);
  assert.equal(recordedDecision.assessment.authority, "none");
  assert.equal(
    recordedDecision.assessment.transcriptionDecisionEventFreshnessDiagnosis.observationAgeMs,
    decisionEvaluatedAt - decisionEventAt,
  );
  for (const ceilingKey of TRANSCRIPTION_CEILING_KEYS) {
    assert.equal(
      recordedDecision.assessment[ceilingKey],
      false,
      `transcription ceiling ${ceilingKey} in the drive`,
    );
  }
  const decisionHold = currentVoicePosture({ evaluatedAtEpochMs: decisionEvaluatedAt });
  assert.equal(decisionHold.decisions.length, 1);
  assert.equal(decisionHold.decisions[0].presentationMark, "in_session");
  assert.deepEqual(
    deepClone(decisionHold.decisions[0].recordedTranscriptionSelection),
    deepClone(POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS[0]),
  );

  // The standing claimed-voice wall: always refusing, no storage, no
  // affordance.
  const wallHold = currentClaimedVoiceWallPosture();
  assert.equal(
    wallHold.reason,
    "pond_claimed_voice_transcribed_text_refused_no_transcription_over_an_utterance_never_captured",
  );
  assert.equal(wallHold.claimedVoiceState, "claimed_voice_transcript_not_composed");
  assert.deepEqual(
    deepClone(wallHold.declaredClaimCaptureClasses),
    deepClone(POND_STAGE_DP22_DECLARED_CLAIMED_VOICE_CAPTURE_CLASSES),
  );
  const wallAgain = currentClaimedVoiceWallPosture();
  assert.deepEqual(deepClone(wallAgain), deepClone(wallHold), "the wall holds no state");

  // The re-recorded voice request (the replayed basis is recorded by the
  // module and the ceremony refuses it at its own declarative check —
  // nothing is stored, the counts stay exactly 1).
  const replayedRequest = recordVoiceInputRequest({
    voiceRequestedAtEpochMs: requestEventAt + 50,
    evaluatedAtEpochMs: requestEvaluatedAt,
  });
  assert.equal(replayedRequest.recorded, false, "a replayed request refuses");
  assert.equal(
    replayedRequest.assessment.reason,
    "receiver_voice_request_proof_incomplete",
  );
  assert.deepEqual(
    replayedRequest.assessment.unsatisfiedChecks,
    ["voice_request_basis_receiver_recorded_not_inferred"],
    "the replay refuses on the basis check alone, every leg echo green",
  );
  assert.equal(heldVoiceRequestEntries().entries.length, 1);

  // The replayed transcription decision refuses the same way.
  const replayedDecision = recordTranscriptionDecision({
    voiceRequestIndex: 0,
    transcriptionDecisionRecordedAtEpochMs: decisionEventAt + 50,
    evaluatedAtEpochMs: decisionEvaluatedAt,
  });
  assert.equal(replayedDecision.recorded, false, "a replayed decision refuses");
  assert.equal(
    replayedDecision.assessment.reason,
    "receiver_transcription_decision_proof_incomplete",
  );
  assert.deepEqual(
    replayedDecision.assessment.unsatisfiedChecks,
    ["transcription_decision_basis_receiver_recorded_not_inferred"],
  );
  assert.equal(heldVoiceRequestEntries().entries.length, 1);

  // An out-of-range index refuses before any input exists.
  const outOfRangeDecision = recordTranscriptionDecision({
    voiceRequestIndex: 9,
    transcriptionDecisionRecordedAtEpochMs: decisionEventAt,
    evaluatedAtEpochMs: decisionEvaluatedAt,
  });
  assert.equal(outOfRangeDecision.recorded, false);
  assert.equal(outOfRangeDecision.assessment, null);
  assert.equal(outOfRangeDecision.refusalReason, "voice_request_index_out_of_range");
  assert.equal(heldVoiceRequestEntries().entries.length, 1);

  // The neighboring lanes stay untouched by the voice lane throughout:
  // the drive recorded no delivery decision, no dispatch, no reply
  // request, and no conversation record — the stores hold exactly
  // nothing.
  assert.equal(heldDeliveryDecisions().decisions.length, 0);
  assert.equal(heldDispatchDecisions().decisions.length, 0);
  assert.equal(heldReplyRequestEntries().entries.length, 0);
  assert.equal(heldConversationRecordEntries().entries.length, 0);

  // Retract: both recorded rows CONFINE honestly (the D-P20 governance
  // posture — module state, process lifetime, never deleted) — unlike
  // the D-P19 receipt, which survives retraction as frozen historical
  // evidence. Each row presents its reassessment's own cause verbatim.
  const retractionAt = nowMs + 4000;
  const retraction = retractLiveSession({ retractedAtEpochMs: retractionAt });
  assert.equal(retraction.retracted, true);
  const confinedAt = nowMs + 5000;
  const confinedRun = currentVoicePosture({ evaluatedAtEpochMs: confinedAt });
  assert.equal(
    confinedRun.requests.length,
    1,
    "the request row survives as module state — confined, not deleted",
  );
  assert.equal(
    confinedRun.requests[0].presentationMark,
    "confined_reassessment_refusal",
    "the request confines honestly — the governance reassessment governs it",
  );
  assert.equal(
    confinedRun.requests[0].reassessmentReason,
    "live_session_read_gate_not_currently_live",
    "the confined request presents the reassessment's own cause verbatim",
  );
  assert.equal(
    confinedRun.requests[0].voiceInputRequest.voiceInputRequestMetadata.voice_requested_at_epoch_ms,
    requestEventAt,
    "the recorded request facts stay verbatim after the session ends",
  );
  assert.equal(
    confinedRun.decisions.length,
    1,
    "the decision row survives as module state — confined, not deleted",
  );
  assert.equal(
    confinedRun.decisions[0].presentationMark,
    "confined_reassessment_refusal",
  );
  assert.equal(
    confinedRun.decisions[0].reassessmentReason,
    "voice_request_not_currently_recorded",
    "the confined decision presents the reassessment's own cause verbatim",
  );
  assert.deepEqual(
    deepClone(confinedRun.decisions[0].recordedTranscriptionSelection),
    deepClone(POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS[0]),
    "the confined row's recorded selection stays verbatim",
  );

  // The wall panel holds unchanged through the retraction — the wall
  // never had session legs to lose.
  const confinedWall = currentClaimedVoiceWallPosture();
  assert.deepEqual(deepClone(confinedWall), deepClone(wallHold));

  // A request over the confined lane refuses and stores nothing; the
  // transcription lane refuses at the request reassessment one rung
  // deeper.
  const postRetractionRequest = recordVoiceInputRequest({
    voiceRequestedAtEpochMs: confinedAt,
    evaluatedAtEpochMs: confinedAt,
  });
  assert.equal(postRetractionRequest.recorded, false);
  assert.equal(
    postRetractionRequest.assessment.reason,
    "live_session_read_gate_not_currently_live",
    "a request over a confined session refuses at the gate re-run",
  );
  const postRetractionDecision = recordTranscriptionDecision({
    voiceRequestIndex: 0,
    transcriptionDecisionRecordedAtEpochMs: confinedAt,
    evaluatedAtEpochMs: confinedAt,
  });
  assert.equal(postRetractionDecision.recorded, false);
  assert.equal(
    postRetractionDecision.assessment.reason,
    "voice_request_not_currently_recorded",
    "a decision over a confined request refuses at the request reassessment",
  );
  assert.equal(heldVoiceRequestEntries().entries.length, 1);
  assert.equal(heldDeliveryDecisions().decisions.length, 0);
  assert.equal(heldDispatchDecisions().decisions.length, 0);

  // (d) markup contract on ui/pond-desktop.html — the voice region is
  // additive, the mic stays disabled (the B2 invariant: voice affordance
  // != recording), and the modules load in lane order (transport <
  // replies < voice < shell).
  const html = readModule("ui/pond-desktop.html");
  assert.match(html, /data-voice-note/);
  assert.match(html, /data-voice-status/);
  assert.match(html, /data-voice-list/);
  assert.match(html, /data-voice-wall/);
  assert.match(html, /mic-button" type="button" disabled/);
  const transportTag = html.indexOf('src="pond-transport.js"');
  const repliesTag = html.indexOf('src="pond-replies.js"');
  const voiceTag = html.indexOf('src="pond-voice.js"');
  const shellTag = html.indexOf('src="pond-shell.js"');
  assert.ok(voiceTag !== -1, "the voice module script tag is present");
  assert.ok(transportTag < repliesTag, "the replies module loads after the transport module");
  assert.ok(repliesTag < voiceTag, "the voice module loads after the replies module");
  assert.ok(voiceTag < shellTag, "the voice module loads before the shell module");

  // (e) the neighboring lanes stay untouched by the voice lane: the
  // frozen D-P16..D-P21 modules never mention it.
  const dispatchModuleText = readModule("ui/pond-dispatch.js");
  const receiptsModuleText = readModule("ui/pond-receipts.js");
  const deliveryModuleText = readModule("ui/pond-delivery.js");
  const conversationModuleText = readModule("ui/pond-conversation.js");
  const sessionModuleText = readModule("ui/pond-live-session.js");
  const transportModuleText = readModule("ui/pond-transport.js");
  const repliesModuleText = readModule("ui/pond-replies.js");
  assert.ok(!dispatchModuleText.includes("pond-voice"), "pond-dispatch.js stays untouched by the voice lane");
  assert.ok(!receiptsModuleText.includes("pond-voice"), "pond-receipts.js stays untouched by the voice lane");
  assert.ok(!deliveryModuleText.includes("pond-voice"), "pond-delivery.js stays untouched by the voice lane");
  assert.ok(!conversationModuleText.includes("pond-voice"), "pond-conversation.js stays untouched by the voice lane");
  assert.ok(!sessionModuleText.includes("pond-voice"), "pond-live-session.js stays untouched by the voice lane");
  assert.ok(!transportModuleText.includes("pond-voice"), "pond-transport.js stays untouched by the voice lane");
  assert.ok(!repliesModuleText.includes("pond-voice"), "pond-replies.js stays untouched by the voice lane");
});

console.log(
  `POND_STAGE_DP22_POND_VOICE_LANE_SELFTEST_PASS · ${blocks} blocks`,
);