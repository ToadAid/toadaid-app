// Stage D-P21 — the agent-reply lane: the receiver records one reply
// REQUEST — a reply to a composed conversation record; the request
// composes nothing, grants nothing — and one cognition provider-selection
// decision — the local-runtime selection, the only performable selection
// this cut, over a currently recorded reply request; the decision
// performs no inference, no authentication, no provider contact, no
// routing, and no fallback and is consumed by nothing — and a standing
// fail-closed claimed-reply wall refuses every claimed agent reply. No
// cognition runtime exists in app or law.
//
// What this module never does: no reply runtime, no composer, no
// cognition runtime, no provider credential, no provider contact, no
// inference, no reply text in any assessment — the claimed-reply wall
// echoes nothing (not even text this receiver itself composed); nothing
// is persisted; the delivery lanes are touched by nothing here.
//
// The records are session-scoped governance whose applicability the
// reassessment governs: both records re-assess honestly per call —
// unlike the D-P19 receipts (frozen at issuance, inspection-only), a
// confined record presents its reassessment's verbatim refusal.
//
// Contract code reaches this module only through the committed generated
// artifact (ui/generated/), never directly from src/.

import {
  assessPondReplyRequestDecision,
  assessPondCognitionProviderDecision,
  assessPondClaimedAgentReplyRefusal,
  POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES,
  pondStageDP21ReplyRequestTemplate,
  pondStageDP21ProviderDecisionTemplate,
} from "./generated/pond-stage-d-live-session-replies.js";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./generated/pond-stage-d-live-session.js";
import { heldConversationRecordEntries } from "./pond-conversation.js";
import { heldLiveSessionRecords } from "./pond-live-session.js";

// ---------------------------------------------------------------------------
// Recorded reply-lane records: module scope only. Each entry carries its
// record and its own recording facts beside the held entry's honest facts
// (the requested copy's composed text stays beside the entry in shell
// state only — no assessment ever carries text). A refused record stores
// nothing.
// ---------------------------------------------------------------------------

const recordedReplyRequestEntries = [];
const recordedProviderDecisionEntries = [];

// The receiver records one reply request over a conversation record
// whose D-P16 admission re-run is currently admitted at the request's
// own evaluation instant. The conversation entry's own input is never
// restated: the request rides the record it names, and the request
// input carries the 13 gate legs picked verbatim from the held entry's
// input with the live legs (retraction, evaluation pair) overridden
// from the held session records at recording time. A replayed request
// attempt, a request over a not-currently-admitted record, or an
// out-of-range index all refuse honestly and store nothing.
export const recordReplyRequest = ({
  conversationRecordIndex,
  replyRequestedAtEpochMs,
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const conversationHold = heldConversationRecordEntries();
  const recordIndex =
    typeof conversationRecordIndex === "number" &&
    Number.isSafeInteger(conversationRecordIndex) &&
    conversationRecordIndex >= 0 &&
    conversationRecordIndex < conversationHold.entries.length
      ? conversationRecordIndex
      : null;
  // Out-of-range conversation records refuse before any input exists —
  // there is no record to request a reply to, so no assessment is
  // fabricated here.
  if (recordIndex === null) {
    return Object.freeze({
      recorded: false,
      assessment: null,
      refusalReason: "conversation_record_index_out_of_range",
    });
  }
  const heldConversation = conversationHold.entries[recordIndex];
  const replayed = recordedReplyRequestEntries.some(
    (entry) => entry.conversationRecordIndex === recordIndex,
  );
  const replyRequest = Object.freeze({
    ...pondStageDP21ReplyRequestTemplate,
    replyRequestMetadata: Object.freeze({
      ...pondStageDP21ReplyRequestTemplate.replyRequestMetadata,
      requested_at_epoch_ms: replyRequestedAtEpochMs,
    }),
    principalRef: heldConversation.input.receiverHeldPrincipalRef,
    requestedConversationRecord: heldConversation.input.conversationRecord,
    replyRequestBasis: replayed
      ? "replayed_from_prior_reply_request"
      : "receiver_recorded_reply_request_not_inferred",
  });
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  // Without held live-session records the D-P16 re-run cannot be
  // performed or fabricated — the request refuses and stores nothing.
  if (!held.held) {
    return Object.freeze({
      recorded: false,
      assessment: null,
      refusalReason: "live_session_records_not_held",
    });
  }
  const input = Object.freeze({
    replyRequest,
    receiverHeldPrincipalRef: heldConversation.input.receiverHeldPrincipalRef,
    readGateRecord: heldConversation.input.readGateRecord,
    establishmentRecord: heldConversation.input.establishmentRecord,
    dp5CeremonyRecord: heldConversation.input.dp5CeremonyRecord,
    dp6ObservationRecord: heldConversation.input.dp6ObservationRecord,
    dp8VerifierRecord: heldConversation.input.dp8VerifierRecord,
    dp8ProofRecord: heldConversation.input.dp8ProofRecord,
    dp9IssuanceRecord: heldConversation.input.dp9IssuanceRecord,
    dp9MappingRecord: heldConversation.input.dp9MappingRecord,
    dp10ActivationRecord: heldConversation.input.dp10ActivationRecord,
    receiverRetractionRecord: held.retractionRecord,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAgeMs,
  });
  const assessment = assessPondReplyRequestDecision(input);
  const recorded =
    assessment.replyRequestState ===
    "reply_request_recorded_session_scoped_no_reply_composed";
  if (recorded) {
    recordedReplyRequestEntries.push(
      Object.freeze({
        input,
        replyRequest,
        addressedAgentRef: heldConversation.addressedAgentRef,
        conversationComposedText: heldConversation.composedText,
        conversationRecordIndex: recordIndex,
        replyRequestedAtEpochMs,
      }),
    );
  }
  return Object.freeze({
    recorded,
    assessment,
  });
};

// The held reply-request entries, exposed read-only to a sibling lane
// module. A refused request stores nothing and never appears here.
export const heldReplyRequestEntries = () => {
  if (recordedReplyRequestEntries.length === 0) {
    return Object.freeze({ held: false, entries: Object.freeze([]) });
  }
  return Object.freeze({
    held: true,
    entries: Object.freeze([...recordedReplyRequestEntries]),
  });
};

// The receiver records one cognition provider-selection decision — the
// local-runtime template's selection, the only performable selection —
// over a reply request whose re-run is currently recorded at the
// decision's own evaluation instant. The request's own input is never
// restated: the decision input carries the request's 14 keys with the
// live legs overridden from the held session records, and the decision
// record aside. Replaying the provider decision for a request, a
// decision over a not-currently-recorded request, or an out-of-range
// index all refuse honestly and store nothing.
export const recordCognitionProviderDecision = ({
  replyRequestIndex,
  providerDecisionRecordedAtEpochMs,
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const requestHold = heldReplyRequestEntries();
  const requestIndex =
    typeof replyRequestIndex === "number" &&
    Number.isSafeInteger(replyRequestIndex) &&
    replyRequestIndex >= 0 &&
    replyRequestIndex < requestHold.entries.length
      ? replyRequestIndex
      : null;
  // Out-of-range reply requests refuse before any input exists — there
  // is no request for the selection to ride, so no assessment is
  // fabricated here.
  if (requestIndex === null) {
    return Object.freeze({
      recorded: false,
      assessment: null,
      refusalReason: "reply_request_index_out_of_range",
    });
  }
  const heldRequest = requestHold.entries[requestIndex];
  const replayed = recordedProviderDecisionEntries.some(
    (entry) => entry.replyRequestIndex === requestIndex,
  );
  const providerDecision = Object.freeze({
    ...pondStageDP21ProviderDecisionTemplate,
    providerDecisionMetadata: Object.freeze({
      ...pondStageDP21ProviderDecisionTemplate.providerDecisionMetadata,
      recorded_at_epoch_ms: providerDecisionRecordedAtEpochMs,
    }),
    principalRef: heldRequest.input.receiverHeldPrincipalRef,
    providerDecisionBasis: replayed
      ? "replayed_from_prior_provider_decision"
      : "receiver_recorded_provider_decision_not_inferred",
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
    providerDecision,
  });
  const assessment = assessPondCognitionProviderDecision(input);
  const recorded =
    assessment.providerDecisionState ===
    "provider_decision_recorded_session_scoped_no_runtime_established";
  if (recorded) {
    recordedProviderDecisionEntries.push(
      Object.freeze({
        input,
        providerDecision,
        addressedAgentRef: heldRequest.addressedAgentRef,
        conversationComposedText: heldRequest.conversationComposedText,
        replyRequestIndex: requestIndex,
        recordedProviderSelection: assessment.recordedProviderSelection,
        providerDecisionRecordedAtEpochMs,
      }),
    );
  }
  return Object.freeze({
    recorded,
    assessment,
  });
};

// The reply posture: the recorded records re-assess honestly per call
// (the deliberate contrast with the D-P19 receipts' frozen-at-issuance
// presentation) — while the underlying record rides a currently admitted
// composition, the record stands; once the session has ended or the
// reassessment refuses, the row presents the reassessment's verbatim
// refusal. Staleness never deletes a record; it just stops being live
// governance.
export const currentReplyPosture = ({
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
  const requests = recordedReplyRequestEntries.map((entry) => {
    const reassessment = assessPondReplyRequestDecision({
      ...entry.input,
      ...honestLegs,
    });
    const stillInSession =
      reassessment.replyRequestState ===
      "reply_request_recorded_session_scoped_no_reply_composed";
    return Object.freeze({
      replyRequest: entry.replyRequest,
      addressedAgentRef: entry.addressedAgentRef,
      conversationComposedText: entry.conversationComposedText,
      conversationRecordIndex: entry.conversationRecordIndex,
      replyRequestedAtEpochMs: entry.replyRequestedAtEpochMs,
      presentationMark: stillInSession
        ? "in_session"
        : "confined_reassessment_refusal",
      reassessmentReason: reassessment.reason,
    });
  });
  const providerDecisions = recordedProviderDecisionEntries.map((entry) => {
    const reassessment = assessPondCognitionProviderDecision({
      ...entry.input,
      ...honestLegs,
    });
    const stillInSession =
      reassessment.providerDecisionState ===
      "provider_decision_recorded_session_scoped_no_runtime_established";
    return Object.freeze({
      providerDecision: entry.providerDecision,
      recordedProviderSelection: assessmentSelectionOf(reassessment, entry),
      addressedAgentRef: entry.addressedAgentRef,
      conversationComposedText: entry.conversationComposedText,
      replyRequestIndex: entry.replyRequestIndex,
      providerDecisionRecordedAtEpochMs: entry.providerDecisionRecordedAtEpochMs,
      presentationMark: stillInSession
        ? "in_session"
        : "confined_reassessment_refusal",
      reassessmentReason: reassessment.reason,
    });
  });
  return Object.freeze({
    held: requests.length > 0 || providerDecisions.length > 0,
    requests,
    providerDecisions,
  });
};

// The provider row's selection readout: the decision's own echo when the
// reassessment still reads it, the recorded echo beside the entry
// otherwise. `recordedProviderSelection` is null on an invalid record —
// the recorded echo is the honest fallback, and the row never restates a
// selection the assessment itself does not carry.
const assessmentSelectionOf = (reassessment, entry) =>
  reassessment.recordedProviderSelection ?? entry.recordedProviderSelection;

// The standing claimed-reply wall posture: evaluated against a sample
// claim so the rendered panel presents the wall's own verified refusal
// posture verbatim rather than restated prose. The wall holds no module
// state here, stores nothing, and echoes nothing about any claim; no
// affordance exists, because nothing can be offered.
export const currentClaimedReplyWallPosture = () => {
  const sample = assessPondClaimedAgentReplyRefusal({
    claimedAgentReply: {
      claimedReplyText: "sample claimed reply text is never echoed or stored",
      claimedReplySourceClass: "provider_output",
      claimedResponderRef: "agent:sample:claimed-responder-never-echoed",
    },
  });
  return Object.freeze({
    reason: sample.reason,
    claimedReplyState: sample.claimedReplyState,
    declaredClaimSourceClasses:
      POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES,
  });
};

// ---------------------------------------------------------------------------
// Rendering: textContent only, refusal-first, verbatim assessment values.
// The request rows present the recorded facts verbatim with the honest
// reassessment mark; the record affordances are offered only over a held
// entry whose re-run is still currently green and not yet recorded. The
// claimed-reply wall panel is static prose — no wall affordance exists,
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
  list.className = "reply-facts";
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
    ? "reply lane record · session-scoped governance"
    : `reply lane record confined — ${reassessmentReason}`;

export const renderPondReplies = (documentRef = globalThis.document) => {
  if (!documentRef) return false;

  const root = documentRef.querySelector("[data-reply-note]");
  const statusTarget = documentRef.querySelector("[data-reply-status]");
  const listTarget = documentRef.querySelector("[data-reply-list]");
  if (!root || !statusTarget || !listTarget) return false;

  const nowMs = Date.now();
  const replyHold = currentReplyPosture({
    evaluatedAtEpochMs: nowMs,
  });
  const conversationHold = heldConversationRecordEntries();
  const requestRecordedIndexes = new Set(
    replyHold.requests.map((row) => row.conversationRecordIndex),
  );
  const wallPosture = currentClaimedReplyWallPosture();

  const recordList = documentRef.createElement("div");
  recordList.className = "reply-list";
  replyHold.requests.forEach((row) => {
    const item = documentRef.createElement("div");
    item.className = "reply-record";
    item.append(
      text(documentRef, "p", "reply-record-verdict", presentationLabel(row.presentationMark, row.reassessmentReason)),
      text(documentRef, "p", "reply-record-destination", row.addressedAgentRef),
      text(documentRef, "p", "reply-record-text", row.conversationComposedText),
      factsList(documentRef, [
        ["Basis", row.replyRequest.replyRequestBasis],
        ["Requested at", row.replyRequest.replyRequestMetadata.requested_at_epoch_ms],
        ["Composition posture", row.replyRequest.replyRequestCompositionPosture],
        ["Cognition posture", row.replyRequest.replyRequestCognitionPosture],
        ["Provider posture", row.replyRequest.replyRequestProviderPosture],
        ["Runway posture", row.replyRequest.replyRequestRunwayPosture],
        ["Lifecycle posture", row.replyRequest.replyRequestLifecyclePosture],
        ["Evidence posture", row.replyRequest.replyRequestEvidencePosture],
        ["Request authority posture", row.replyRequest.replyRequestAuthorityPosture],
        ["Request consumption", row.replyRequest.replyRequestMetadata.currentness_posture],
        ["Authority", row.replyRequest.authority],
      ]),
    );
    recordList.append(item);
  });
  if (replyHold.requests.length === 0) {
    recordList.append(
      text(
        documentRef,
        "p",
        "cockpit-note",
        "No reply request recorded — recording one requires a currently admitted conversation record. No cognition runtime, composer, or provider selection exists here.",
      ),
    );
  }

  replyHold.providerDecisions.forEach((row) => {
    const item = documentRef.createElement("div");
    item.className = "reply-record";
    const selection = row.recordedProviderSelection ?? row.providerDecision;
    item.append(
      text(documentRef, "p", "reply-record-verdict", presentationLabel(row.presentationMark, row.reassessmentReason)),
      text(documentRef, "p", "reply-record-destination", row.addressedAgentRef),
      factsList(documentRef, [
        ["Backend class", selection.backendClass],
        ["Selected backend id", selection.selectedBackendId],
        ["Access mechanism", selection.accessMechanism],
        ["Credential custody", selection.credentialCustodyClass],
        ["Data boundary", selection.dataBoundaryClass],
        ["Support tier", selection.supportTier],
        ["Decision basis", row.providerDecision.providerDecisionBasis],
        ["Recorded at", row.providerDecision.providerDecisionMetadata.recorded_at_epoch_ms],
        ["Runtime posture", row.providerDecision.providerDecisionRuntimePosture],
        ["Inference posture", row.providerDecision.providerDecisionInferencePosture],
        ["Identity posture", row.providerDecision.providerDecisionIdentityPosture],
        ["Access posture", row.providerDecision.providerDecisionAccessPosture],
        ["Boundary posture", row.providerDecision.providerDecisionBoundaryPosture],
        ["Fallback posture", row.providerDecision.providerDecisionFallbackPosture],
        ["Reply posture", row.providerDecision.providerDecisionReplyPosture],
        ["Consumption posture", row.providerDecision.providerDecisionConsumptionPosture],
        ["Decision consumption", row.providerDecision.providerDecisionMetadata.currentness_posture],
        ["Authority", row.providerDecision.authority],
      ]),
    );
    recordList.append(item);
  });

  // The request affordances ride the held conversation entries: one
  // request per record, offered only while the record's admission
  // re-runs currently admitted at the live evaluation time and not yet
  // requested. Replayed and out-of-session records present
  // inspection-only honest refusal text.
  conversationHold.entries.forEach((conversationEntry, index) => {
    const recorded = requestRecordedIndexes.has(index);
    const held2 = heldLiveSessionRecords({ evaluatedAtEpochMs: nowMs });
    const candidateRequest = Object.freeze({
      ...pondStageDP21ReplyRequestTemplate,
      replyRequestMetadata: Object.freeze({
        ...pondStageDP21ReplyRequestTemplate.replyRequestMetadata,
        requested_at_epoch_ms: nowMs,
      }),
      principalRef: conversationEntry.input.receiverHeldPrincipalRef,
      requestedConversationRecord: conversationEntry.input.conversationRecord,
    });
    const reassessment = assessPondReplyRequestDecision({
      replyRequest: candidateRequest,
      receiverHeldPrincipalRef: conversationEntry.input.receiverHeldPrincipalRef,
      readGateRecord: conversationEntry.input.readGateRecord,
      establishmentRecord: conversationEntry.input.establishmentRecord,
      dp5CeremonyRecord: conversationEntry.input.dp5CeremonyRecord,
      dp6ObservationRecord: conversationEntry.input.dp6ObservationRecord,
      dp8VerifierRecord: conversationEntry.input.dp8VerifierRecord,
      dp8ProofRecord: conversationEntry.input.dp8ProofRecord,
      dp9IssuanceRecord: conversationEntry.input.dp9IssuanceRecord,
      dp9MappingRecord: conversationEntry.input.dp9MappingRecord,
      dp10ActivationRecord: conversationEntry.input.dp10ActivationRecord,
      receiverRetractionRecord: held2.retractionRecord,
      receiverEvaluatedAtEpochMs: nowMs,
      receiverMaximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
    });
    const requestable =
      reassessment.replyRequestState ===
      "reply_request_recorded_session_scoped_no_reply_composed";
    const item = documentRef.createElement("div");
    item.className = "reply-record";
    item.append(
      text(documentRef, "p", "reply-record-destination", conversationEntry.addressedAgentRef),
      text(documentRef, "p", "reply-record-text", conversationEntry.composedText),
    );
    const affordance = documentRef.createElement("button");
    affordance.type = "button";
    affordance.className = "reply-affordance";
    if (!recorded && requestable) {
      affordance.textContent = "Record reply request · requests nothing, composes nothing";
      affordance.addEventListener("click", () => {
        const recordNow = Date.now();
        const result = recordReplyRequest({
          conversationRecordIndex: index,
          replyRequestedAtEpochMs: recordNow,
          evaluatedAtEpochMs: recordNow,
        });
        if (!result.recorded) {
          // Nothing stored — the honest refusal is the whole update.
          statusTarget.replaceChildren(
            text(
              documentRef,
              "p",
              "cockpit-note",
              `Reply request refused — ${result.refusalReason ?? result.assessment.reason}. Refused requests store nothing.`,
            ),
          );
          return;
        }
        // The posture rows re-assess honestly per render: the whole
        // render re-runs, the list stays index-paired, and the new row
        // presents its reassessment honestly.
        renderPondReplies(documentRef);
      });
    } else if (recorded) {
      affordance.disabled = true;
      affordance.textContent = "Recorded — reuse refused as a replayed request";
      affordance.setAttribute("data-reply-refused-replay", "true");
    } else {
      affordance.disabled = true;
      affordance.textContent = `Request not admissible — ${reassessment.reason}`;
      affordance.setAttribute("data-reply-refused-entry", "true");
    }
    item.append(affordance);
    recordList.append(item);
  });

  // The provider-decision affordances ride the recorded request rows: one
  // decision per request, offered only while the request's re-run is
  // still currently recorded at the live evaluation time and not yet
  // decided. Replayed and confining requests present inspection-only
  // honest refusal text; the provider record itself is offered only in
  // the one performable selection (the button label says exactly that).
  const requestHold = heldReplyRequestEntries();
  const decidedIndexes = new Set(
    replyHold.providerDecisions.map((row) => row.replyRequestIndex),
  );
  requestHold.entries.forEach((requestEntry, index) => {
    const decided = decidedIndexes.has(index);
    const held3 = heldLiveSessionRecords({ evaluatedAtEpochMs: nowMs });
    const reassessment = assessPondReplyRequestDecision({
      ...requestEntry.input,
      receiverRetractionRecord: held3.retractionRecord,
      receiverEvaluatedAtEpochMs: nowMs,
      receiverMaximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
    });
    const decisionable =
      reassessment.replyRequestState ===
      "reply_request_recorded_session_scoped_no_reply_composed";
    const item = documentRef.createElement("div");
    item.className = "reply-record";
    item.append(
      text(documentRef, "p", "reply-record-destination", requestEntry.addressedAgentRef),
      text(documentRef, "p", "reply-record-text", requestEntry.conversationComposedText),
    );
    const affordance = documentRef.createElement("button");
    affordance.type = "button";
    affordance.className = "reply-affordance";
    if (!decided && decisionable) {
      affordance.textContent = "Record provider decision · local runtime declaration only";
      affordance.addEventListener("click", () => {
        const recordNow = Date.now();
        const result = recordCognitionProviderDecision({
          replyRequestIndex: index,
          providerDecisionRecordedAtEpochMs: recordNow,
          evaluatedAtEpochMs: recordNow,
        });
        if (!result.recorded) {
          // Nothing stored — the honest refusal is the whole update.
          statusTarget.replaceChildren(
            text(
              documentRef,
              "p",
              "cockpit-note",
              `Provider decision refused — ${result.refusalReason ?? result.assessment.reason}. Refused decisions store nothing and perform no provider contact.`,
            ),
          );
          return;
        }
        renderPondReplies(documentRef);
      });
    } else if (decided) {
      affordance.disabled = true;
      affordance.textContent = "Recorded — reuse refused as a replayed decision";
      affordance.setAttribute("data-reply-refused-replay", "true");
    } else {
      affordance.disabled = true;
      affordance.textContent = `Decision not admissible — ${reassessment.reason}`;
      affordance.setAttribute("data-reply-refused-entry", "true");
    }
    item.append(affordance);
    recordList.append(item);
  });

  // The standing claimed-reply wall panel: static prose with no
  // affordance — every claimed agent reply refuses, so the panel can
  // never offer anything. The wall's own verified standing refusal
  // posture is presented verbatim; nothing about any claim is echoed.
  const wallPanel = documentRef.createElement("div");
  wallPanel.className = "reply-wall";
  wallPanel.setAttribute("data-reply-wall", "true");
  wallPanel.append(
    text(documentRef, "p", "reply-wall-verdict", `Claimed-reply wall · ${wallPosture.reason}`),
    factsList(documentRef, [
      ["Claimed-reply state", wallPosture.claimedReplyState],
      [
        "Declared claim source classes",
        wallPosture.declaredClaimSourceClasses.join(", "),
      ],
      [
        "Wall posture",
        "standing fail-closed — no cognition runtime exists in app or law, so nothing composes a reply; no claimed reply text, responder, or source class is echoed or stored; a refusal stores nothing",
      ],
    ]),
  );
  wallPanel.setAttribute(
    "data-reply-wall-presented",
    String(wallPosture.claimedReplyState === "claimed_reply_not_composed"),
  );

  const renderPondRepliesNow = () => {
    const liveHold = currentReplyPosture({ evaluatedAtEpochMs: Date.now() });
    statusTarget.replaceChildren(
      text(
        documentRef,
        "p",
        "cockpit-note",
        `Reply posture · ${liveHold.requests.length} recorded request${liveHold.requests.length === 1 ? "" : "s"} · ${liveHold.providerDecisions.length} provider decision${liveHold.providerDecisions.length === 1 ? "" : "s"} · re-assessed honestly — a record stands while its underlying record rides a currently admitted composition, confines verbatim otherwise; the lane performs no inference, no provider contact, and composes nothing`,
      ),
    );
  };
  listTarget.replaceChildren(recordList, wallPanel);
  renderPondRepliesNow();
  root.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      "The reply lane lays the runway: the receiver records one reply request over a composed conversation record (the request composes nothing and grants nothing), one provider selection over the recorded request (the local runtime, declared — with no inference, authentication, provider contact, routing, or fallback), and the standing claimed-reply wall refuses every claimed agent reply — no cognition runtime, composer, credential, or reply text exists here.",
    ),
  );
  root.dataset.replyRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderPondReplies(document);
}