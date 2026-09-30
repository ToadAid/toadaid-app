// Stage D-P22 — the voice lane: the receiver records one voice-input
// REQUEST — a request to PROVIDE voice input over the live session; it
// captures nothing (the mic stays disabled), composes no transcription,
// carries no destination, agent ref, device identity, or transcript
// text, and grants nothing — and one transcription-selection decision —
// the local-ASR selection, the only performable selection this cut,
// riding a currently recorded voice request; the decision performs no
// capture, no audio I/O, no transcription inference, no authentication,
// no backend contact, no fallback, and is consumed by nothing — and a
// standing fail-closed claimed-voice wall refuses every claimed voice
// transcript, capture, or synthesis. No capture runtime or transcription
// runtime exists in app or law.
//
// What this module never does: no browser audio capture of any kind (no
// media-capture surface — the needle list in the lane selftest proves it
// at source level), no
// audio I/O, no recording, no waveform, no TTS, no ASR runtime or model
// contact, no credential handling, no transcript text in any assessment
// — the claimed-voice wall echoes nothing (not even text this receiver
// itself composed); nothing is persisted; the reply, delivery, and
// conversation lanes are touched by nothing here.
//
// The records are session-scoped governance whose applicability the
// reassessment governs: both records re-assess honestly per call —
// unlike the D-P19 receipts (frozen at issuance, inspection-only), a
// confined record presents its reassessment's verbatim refusal.
//
// Contract code reaches this module only through the committed generated
// artifact (ui/generated/), never directly from src/.

import {
  assessPondVoiceInputRequestDecision,
  assessPondVoiceTranscriptionProviderDecision,
  assessPondClaimedVoiceRefusal,
  POND_STAGE_DP22_DECLARED_CLAIMED_VOICE_CAPTURE_CLASSES,
  pondStageDP22VoiceRequestTemplate,
  pondStageDP22TranscriptionDecisionTemplate,
} from "./generated/pond-stage-d-live-session-voice.js";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./generated/pond-stage-d-live-session.js";
import { heldLiveSessionRecords } from "./pond-live-session.js";

// ---------------------------------------------------------------------------
// Recorded voice-lane records: module scope only. Each entry carries its
// record and its own recording facts beside the held entry's honest facts
// (no transcript text exists anywhere — nothing is captured this cut). A
// refused record stores nothing.
// ---------------------------------------------------------------------------

const recordedVoiceRequestEntries = [];
const recordedTranscriptionDecisionEntries = [];

// The receiver records one voice-input request over the currently
// established, currently live D-P15 session — one per session. No index
// ride exists: the voice request's parent is the establishment + read
// gate itself, so a second recording attempt carries the replayed basis
// and refuses at the basis check, storing nothing. The request input
// carries the 13 gate legs picked verbatim from the held session's leg
// set (spread BEFORE the retraction override) with the live legs
// (retraction, evaluation pair) assessed at recording time. No held
// session, a replayed attempt, or a refused assessment all refuse
// honestly and store nothing.
export const recordVoiceInputRequest = ({
  voiceRequestedAtEpochMs,
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  // Without held live-session records the D-P15 read-gate re-run cannot
  // be performed or fabricated — the request refuses and stores nothing.
  if (!held.held) {
    return Object.freeze({
      recorded: false,
      assessment: null,
      refusalReason: "live_session_records_not_held",
    });
  }
  const voiceInputRequest = Object.freeze({
    ...pondStageDP22VoiceRequestTemplate,
    voiceInputRequestMetadata: Object.freeze({
      ...pondStageDP22VoiceRequestTemplate.voiceInputRequestMetadata,
      voice_requested_at_epoch_ms: voiceRequestedAtEpochMs,
    }),
    principalRef: held.principalRef,
    voiceInputRequestBasis: recordedVoiceRequestEntries.length > 0
      ? "replayed_from_prior_voice_request"
      : "receiver_recorded_voice_request_not_inferred",
  });
  const input = Object.freeze({
    voiceInputRequest,
    receiverHeldPrincipalRef: held.principalRef,
    readGateRecord: held.readGateRecord,
    establishmentRecord: held.establishmentRecord,
    ...held.legs,
    receiverRetractionRecord: held.retractionRecord,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAgeMs,
  });
  const assessment = assessPondVoiceInputRequestDecision(input);
  const recorded =
    assessment.voiceInputRequestState ===
    "voice_input_request_recorded_session_scoped_no_capture_no_transcription";
  if (recorded) {
    recordedVoiceRequestEntries.push(
      Object.freeze({
        input,
        voiceInputRequest,
        voiceRequestedAtEpochMs,
      }),
    );
  }
  return Object.freeze({
    recorded,
    assessment,
  });
};

// The held voice-request entries, exposed read-only to the sibling
// transcription lane in this module. A refused request stores nothing
// and never appears here.
export const heldVoiceRequestEntries = () => {
  if (recordedVoiceRequestEntries.length === 0) {
    return Object.freeze({ held: false, entries: Object.freeze([]) });
  }
  return Object.freeze({
    held: true,
    entries: Object.freeze([...recordedVoiceRequestEntries]),
  });
};

// The receiver records one transcription-selection decision — the local-
// ASR template's selection, the only performable selection — riding a
// voice request whose re-run is currently recorded at the decision's own
// evaluation instant. The request's own input is never restated: the
// decision input carries the request's 14 keys spread verbatim with the
// live legs overridden from the held session records, and the decision
// record aside (the D-P21 riding-copy lesson — the spread carries the
// request's own legs, never a re-derived set). An out-of-range request
// index, a replayed decision, or a refusal all refuse honestly and
// store nothing.
export const recordTranscriptionDecision = ({
  voiceRequestIndex,
  transcriptionDecisionRecordedAtEpochMs,
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const requestHold = heldVoiceRequestEntries();
  const requestIndex =
    typeof voiceRequestIndex === "number" &&
    Number.isSafeInteger(voiceRequestIndex) &&
    voiceRequestIndex >= 0 &&
    voiceRequestIndex < requestHold.entries.length
      ? voiceRequestIndex
      : null;
  // Out-of-range voice requests refuse before any input exists — there
  // is no request for the selection to ride, so no assessment is
  // fabricated here.
  if (requestIndex === null) {
    return Object.freeze({
      recorded: false,
      assessment: null,
      refusalReason: "voice_request_index_out_of_range",
    });
  }
  const heldRequest = requestHold.entries[requestIndex];
  const replayed = recordedTranscriptionDecisionEntries.some(
    (entry) => entry.voiceRequestIndex === requestIndex,
  );
  const transcriptionDecision = Object.freeze({
    ...pondStageDP22TranscriptionDecisionTemplate,
    transcriptionDecisionMetadata: Object.freeze({
      ...pondStageDP22TranscriptionDecisionTemplate.transcriptionDecisionMetadata,
      recorded_at_epoch_ms: transcriptionDecisionRecordedAtEpochMs,
    }),
    principalRef: heldRequest.input.receiverHeldPrincipalRef,
    transcriptionDecisionBasis: replayed
      ? "replayed_from_prior_transcription_decision"
      : "receiver_recorded_transcription_decision_not_inferred",
  });
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  // Without held live-session records the request re-run cannot be
  // performed or fabricated — the decision refuses and stores nothing.
  if (!held.held) {
    return Object.freeze({
      recorded: false,
      assessment: null,
      refusalReason: "live_session_records_not_held",
    });
  }
  const input = Object.freeze({
    ...heldRequest.input,
    receiverRetractionRecord: held.retractionRecord,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAgeMs,
    transcriptionDecision,
  });
  const assessment = assessPondVoiceTranscriptionProviderDecision(input);
  const recorded =
    assessment.transcriptionDecisionState ===
    "transcription_decision_recorded_session_scoped_no_runtime_established";
  if (recorded) {
    recordedTranscriptionDecisionEntries.push(
      Object.freeze({
        input,
        transcriptionDecision,
        voiceRequestIndex: requestIndex,
        recordedTranscriptionSelection: assessment.recordedTranscriptionSelection,
        transcriptionDecisionRecordedAtEpochMs,
      }),
    );
  }
  return Object.freeze({
    recorded,
    assessment,
  });
};

// The voice posture: the recorded records re-assess honestly per call
// (the deliberate contrast with the D-P19 receipts' frozen-at-issuance
// presentation) — while the underlying records ride a currently live
// session, the records stand; once the session has ended or the
// reassessment refuses, the row presents the reassessment's verbatim
// refusal. Staleness never deletes a record; it just stops being live
// governance.
export const currentVoicePosture = ({
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  const retractionRecord = held.held ? held.retractionRecord : null;
  const honestLegs = {
    receiverRetractionRecord: retractionRecord,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAgeMs,
  };
  const requests = recordedVoiceRequestEntries.map((entry) => {
    const reassessment = assessPondVoiceInputRequestDecision({
      ...entry.input,
      ...honestLegs,
    });
    const stillInSession =
      reassessment.voiceInputRequestState ===
      "voice_input_request_recorded_session_scoped_no_capture_no_transcription";
    return Object.freeze({
      voiceInputRequest: entry.voiceInputRequest,
      voiceRequestedAtEpochMs: entry.voiceRequestedAtEpochMs,
      presentationMark: stillInSession
        ? "in_session"
        : "confined_reassessment_refusal",
      reassessmentReason: reassessment.reason,
    });
  });
  const decisions = recordedTranscriptionDecisionEntries.map((entry) => {
    const reassessment = assessPondVoiceTranscriptionProviderDecision({
      ...entry.input,
      ...honestLegs,
    });
    const stillInSession =
      reassessment.transcriptionDecisionState ===
      "transcription_decision_recorded_session_scoped_no_runtime_established";
    return Object.freeze({
      transcriptionDecision: entry.transcriptionDecision,
      recordedTranscriptionSelection: assessmentSelectionOf(
        reassessment,
        entry,
      ),
      voiceRequestIndex: entry.voiceRequestIndex,
      transcriptionDecisionRecordedAtEpochMs:
        entry.transcriptionDecisionRecordedAtEpochMs,
      presentationMark: stillInSession
        ? "in_session"
        : "confined_reassessment_refusal",
      reassessmentReason: reassessment.reason,
    });
  });
  return Object.freeze({
    held: requests.length > 0 || decisions.length > 0,
    requests,
    decisions,
  });
};

// The decision row's selection readout: the decision's own echo when the
// reassessment still reads it, the recorded echo beside the entry
// otherwise. `recordedTranscriptionSelection` is null on an invalid
// record — the recorded echo is the honest fallback, and the row never
// restates a selection the assessment itself does not carry.
const assessmentSelectionOf = (reassessment, entry) =>
  reassessment.recordedTranscriptionSelection ??
  entry.recordedTranscriptionSelection;

// The standing claimed-voice wall posture: evaluated against a sample
// claim so the rendered panel presents the wall's own verified refusal
// posture verbatim rather than restated prose. The wall holds no module
// state here, stores nothing, and echoes nothing about any claim; no
// affordance exists, because nothing can be offered.
export const currentClaimedVoiceWallPosture = () => {
  const sample = assessPondClaimedVoiceRefusal({
    claimedVoiceTranscript: {
      claimedTranscriptText:
        "sample claimed transcript text is never echoed or stored",
      claimedVoiceCaptureClass: "transcribed_text",
      claimedVoiceSourceRef: "operator:sample:claimed-utterance-never-echoed",
    },
  });
  return Object.freeze({
    reason: sample.reason,
    claimedVoiceState: sample.claimedVoiceState,
    declaredClaimCaptureClasses:
      POND_STAGE_DP22_DECLARED_CLAIMED_VOICE_CAPTURE_CLASSES,
  });
};

// ---------------------------------------------------------------------------
// Rendering: textContent only, refusal-first, verbatim assessment values.
// The request rows present the recorded facts verbatim with the honest
// reassessment mark; the request affordance is offered only while the
// held session's read gate re-runs currently live-activated at the live
// evaluation time and no request is recorded yet (one per session). The
// claimed-voice wall panel is static prose — no wall affordance exists,
// because nothing can be offered.
// ---------------------------------------------------------------------------

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const factsList = (documentRef, facts) => {
  const list = documentRef.createElement("dl");
  list.className = "voice-facts";
  for (const [label, value] of facts) {
    const row = documentRef.createElement("div");
    row.append(
      text(documentRef, "dt", null, label),
      text(documentRef, "dd", null, value),
    );
    list.append(row);
  }
  return list;
};

const presentationLabel = (mark, reassessmentReason) =>
  mark === "in_session"
    ? "voice lane record · session-scoped governance"
    : `voice lane record confined — ${reassessmentReason}`;

export const renderPondVoice = (documentRef = globalThis.document) => {
  if (!documentRef) return false;

  const root = documentRef.querySelector("[data-voice-note]");
  const statusTarget = documentRef.querySelector("[data-voice-status]");
  const listTarget = documentRef.querySelector("[data-voice-list]");
  const wallTarget = documentRef.querySelector("[data-voice-wall]");
  if (!root || !statusTarget || !listTarget || !wallTarget) return false;

  const nowMs = Date.now();
  const voiceHold = currentVoicePosture({
    evaluatedAtEpochMs: nowMs,
  });
  const wallPosture = currentClaimedVoiceWallPosture();

  const recordList = documentRef.createElement("div");
  recordList.className = "voice-list";
  voiceHold.requests.forEach((row) => {
    const item = documentRef.createElement("div");
    item.className = "voice-record";
    item.append(
      text(documentRef, "p", "voice-record-verdict", presentationLabel(row.presentationMark, row.reassessmentReason)),
      factsList(documentRef, [
        ["Basis", row.voiceInputRequest.voiceInputRequestBasis],
        ["Requested at", row.voiceInputRequest.voiceInputRequestMetadata.voice_requested_at_epoch_ms],
        ["Capture posture", row.voiceInputRequest.voiceRequestCapturePosture],
        ["Transcription posture", row.voiceInputRequest.voiceRequestTranscriptionPosture],
        ["Runway posture", row.voiceInputRequest.voiceRequestRunwayPosture],
        ["Channel posture", row.voiceInputRequest.voiceRequestChannelPosture],
        ["Scope posture", row.voiceInputRequest.voiceRequestScopePosture],
        ["Evidence posture", row.voiceInputRequest.voiceRequestEvidencePosture],
        ["Request authority posture", row.voiceInputRequest.voiceRequestAuthorityPosture],
        ["Request consumption", row.voiceInputRequest.voiceInputRequestMetadata.currentness_posture],
        ["Authority", row.voiceInputRequest.authority],
      ]),
    );
    recordList.append(item);
  });
  if (voiceHold.requests.length === 0) {
    recordList.append(
      text(
        documentRef,
        "p",
        "cockpit-note",
        "No voice input request recorded — recording one requires a currently live session whose read gate re-runs live-activated. No capture runtime or transcription runtime exists here; the mic stays disabled.",
      ),
    );
  }

  voiceHold.decisions.forEach((row) => {
    const item = documentRef.createElement("div");
    item.className = "voice-record";
    const selection = row.recordedTranscriptionSelection ?? row.transcriptionDecision;
    item.append(
      text(documentRef, "p", "voice-record-verdict", presentationLabel(row.presentationMark, row.reassessmentReason)),
      factsList(documentRef, [
        ["Backend class", selection.transcriptionBackendClass],
        ["Selected backend id", selection.selectedTranscriptionBackendId],
        ["Access mechanism", selection.transcriptionAccessMechanism],
        ["Credential custody", selection.credentialCustodyClass],
        ["Data boundary", selection.dataBoundaryClass],
        ["Support tier", selection.supportTier],
        ["Decision basis", row.transcriptionDecision.transcriptionDecisionBasis],
        ["Recorded at", row.transcriptionDecision.transcriptionDecisionMetadata.recorded_at_epoch_ms],
        ["Runtime posture", row.transcriptionDecision.transcriptionDecisionRuntimePosture],
        ["Capture posture", row.transcriptionDecision.transcriptionDecisionCapturePosture],
        ["Identity posture", row.transcriptionDecision.transcriptionDecisionIdentityPosture],
        ["Access posture", row.transcriptionDecision.transcriptionDecisionAccessPosture],
        ["Boundary posture", row.transcriptionDecision.transcriptionDecisionBoundaryPosture],
        ["Fallback posture", row.transcriptionDecision.transcriptionDecisionFallbackPosture],
        ["Voice posture", row.transcriptionDecision.transcriptionDecisionVoicePosture],
        ["Consumption posture", row.transcriptionDecision.transcriptionDecisionConsumptionPosture],
        ["Decision consumption", row.transcriptionDecision.transcriptionDecisionMetadata.currentness_posture],
        ["Authority", row.transcriptionDecision.authority],
      ]),
    );
    recordList.append(item);
  });

  // The voice-request affordance rides the held session: one request per
  // session, offered only while the held session's read gate re-runs
  // currently live-activated at the live evaluation time and no request
  // is recorded yet. A replayed attempt presents inspection-only honest
  // refusal text.
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs: nowMs });
  if (held.held) {
    const candidateRequest = Object.freeze({
      ...pondStageDP22VoiceRequestTemplate,
      voiceInputRequestMetadata: Object.freeze({
        ...pondStageDP22VoiceRequestTemplate.voiceInputRequestMetadata,
        voice_requested_at_epoch_ms: nowMs,
      }),
      principalRef: held.principalRef,
    });
    const reassessment = assessPondVoiceInputRequestDecision({
      voiceInputRequest: candidateRequest,
      receiverHeldPrincipalRef: held.principalRef,
      readGateRecord: held.readGateRecord,
      establishmentRecord: held.establishmentRecord,
      ...held.legs,
      receiverRetractionRecord: held.retractionRecord,
      receiverEvaluatedAtEpochMs: nowMs,
      receiverMaximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
    });
    const requestable =
      reassessment.voiceInputRequestState ===
      "voice_input_request_recorded_session_scoped_no_capture_no_transcription";
    const alreadyRequested = voiceHold.requests.length > 0;
    const item = documentRef.createElement("div");
    item.className = "voice-record";
    const affordance = documentRef.createElement("button");
    affordance.type = "button";
    affordance.className = "voice-affordance";
    if (!alreadyRequested && requestable) {
      affordance.textContent = "Record voice input request · requests nothing, captures nothing";
      affordance.addEventListener("click", () => {
        const recordNow = Date.now();
        const result = recordVoiceInputRequest({
          voiceRequestedAtEpochMs: recordNow,
          evaluatedAtEpochMs: recordNow,
        });
        if (!result.recorded) {
          // Nothing stored — the honest refusal is the whole update.
          statusTarget.replaceChildren(
            text(
              documentRef,
              "p",
              "cockpit-note",
              `Voice request refused — ${result.refusalReason ?? result.assessment.reason}. Refused requests store nothing.`,
            ),
          );
          return;
        }
        // The posture rows re-assess honestly per render: the whole
        // render re-runs, the list stays index-paired, and the new row
        // presents its reassessment honestly.
        renderPondVoice(documentRef);
      });
    } else if (alreadyRequested) {
      affordance.disabled = true;
      affordance.textContent = "Recorded — reuse refused as a replayed request";
      affordance.setAttribute("data-voice-refused-replay", "true");
    } else {
      affordance.disabled = true;
      affordance.textContent = `Request not admissible — ${reassessment.reason}`;
      affordance.setAttribute("data-voice-refused-entry", "true");
    }
    item.append(affordance);
    recordList.append(item);
  }

  // The transcription-decision affordances ride the recorded request
  // rows: one decision per request, offered only while the request's
  // re-run is still currently recorded at the live evaluation time and
  // not yet decided. Replayed and confining requests present
  // inspection-only honest refusal text; the decision record itself is
  // offered only in the one performable selection (the button label
  // says exactly that).
  const requestHold = heldVoiceRequestEntries();
  const decidedIndexes = new Set(
    voiceHold.decisions.map((row) => row.voiceRequestIndex),
  );
  requestHold.entries.forEach((requestEntry, index) => {
    const decided = decidedIndexes.has(index);
    const held2 = heldLiveSessionRecords({ evaluatedAtEpochMs: nowMs });
    const reassessment = assessPondVoiceInputRequestDecision({
      ...requestEntry.input,
      receiverRetractionRecord: held2.retractionRecord,
      receiverEvaluatedAtEpochMs: nowMs,
      receiverMaximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
    });
    const decisionable =
      reassessment.voiceInputRequestState ===
      "voice_input_request_recorded_session_scoped_no_capture_no_transcription";
    const item = documentRef.createElement("div");
    item.className = "voice-record";
    const affordance = documentRef.createElement("button");
    affordance.type = "button";
    affordance.className = "voice-affordance";
    if (!decided && decisionable) {
      affordance.textContent =
        "Record transcription decision · local runtime declaration only";
      affordance.addEventListener("click", () => {
        const recordNow = Date.now();
        const result = recordTranscriptionDecision({
          voiceRequestIndex: index,
          transcriptionDecisionRecordedAtEpochMs: recordNow,
          evaluatedAtEpochMs: recordNow,
        });
        if (!result.recorded) {
          // Nothing stored — the honest refusal is the whole update.
          statusTarget.replaceChildren(
            text(
              documentRef,
              "p",
              "cockpit-note",
              `Transcription decision refused — ${result.refusalReason ?? result.assessment.reason}. Refused decisions store nothing and perform no capture, transcription, or backend contact.`,
            ),
          );
          return;
        }
        renderPondVoice(documentRef);
      });
    } else if (decided) {
      affordance.disabled = true;
      affordance.textContent = "Recorded — reuse refused as a replayed decision";
      affordance.setAttribute("data-voice-refused-replay", "true");
    } else {
      affordance.disabled = true;
      affordance.textContent = `Decision not admissible — ${reassessment.reason}`;
      affordance.setAttribute("data-voice-refused-entry", "true");
    }
    item.append(affordance);
    recordList.append(item);
  });

  // The standing claimed-voice wall panel: static prose with no
  // affordance — every claimed voice transcript refuses, so the panel
  // can never offer anything. The wall's own verified standing refusal
  // posture is presented verbatim into the static [data-voice-wall]
  // anchor; nothing about any claim is echoed.
  wallTarget.className = "voice-wall";
  wallTarget.setAttribute("data-voice-wall-presented", String(wallPosture.claimedVoiceState === "claimed_voice_transcript_not_composed"));
  wallTarget.replaceChildren(
    text(documentRef, "p", "voice-wall-verdict", `Claimed-voice wall · ${wallPosture.reason}`),
    factsList(documentRef, [
      ["Claimed-voice state", wallPosture.claimedVoiceState],
      [
        "Declared claim capture classes",
        wallPosture.declaredClaimCaptureClasses.join(", "),
      ],
      [
        "Wall posture",
        "standing fail-closed — no capture runtime and no transcription runtime exist in app or law, so no transcript is composable over an utterance never captured; no claimed transcript text, source, or capture class is echoed or stored; a refusal stores nothing; the mic stays disabled",
      ],
    ]),
  );

  const renderPondVoiceNow = () => {
    const liveHold = currentVoicePosture({ evaluatedAtEpochMs: Date.now() });
    statusTarget.replaceChildren(
      text(
        documentRef,
        "p",
        "cockpit-note",
        `Voice posture · ${liveHold.requests.length} recorded voice request${liveHold.requests.length === 1 ? "" : "s"} · ${liveHold.decisions.length} transcription decision${liveHold.decisions.length === 1 ? "" : "s"} · re-assessed honestly — a record stands while its underlying record rides a currently live session, confines verbatim otherwise; the lane performs no capture, no audio I/O, no transcription, and composes nothing`,
      ),
    );
  };
  listTarget.replaceChildren(recordList);
  renderPondVoiceNow();
  root.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      "The voice lane lays the runway: the receiver records one voice input request over the live session (the request requests nothing beyond providing voice input, captures nothing, and grants nothing), one transcription selection over the recorded request (the local runtime, declared — with no capture, audio I/O, transcription, authentication, backend contact, or fallback), and the standing claimed-voice wall refuses every claimed transcript — no capture runtime, transcription runtime, transcript, or transcript text exists here.",
    ),
  );
  root.dataset.voiceRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderPondVoice(document);
}