// Stage D-P28 — the chat surface: one bubble transcript presenting the
// receiver's recorded compositions as chat bubbles, each with its honest
// posture rows beneath it — delivery, dispatch, receipt, policy, and reply
// labels carried from the frozen lane postures themselves, correlated
// purely through the lanes' own held-record exports (conversationRecord
// index → delivery decision → dispatch decision → receipt; policy off the
// delivery decision; reply off the conversation record; voice is
// session-scoped, so it renders as the transcript's footer posture line).
//
// What this module never does: it records nothing, mutates nothing, and
// triggers nothing — it is a projection over the frozen lane modules' own
// re-assessed postures (fresh re-reads at one shared evaluation instant),
// it owns no records, keeps no state, and consumes nothing; the lane
// affordances stay inside the D-P16..D-P22 lane stacks the frozen renderers
// already fill. Re-presents vocabulary values only: every posture line's
// verdict label is drawn from a fixed mapping over the frozen assessment
// states and presentation marks, and any unmapped value renders verbatim —
// never invented prose in place of a value. Nothing is persisted — this
// renderer keeps nothing beyond the render itself, and the transcript
// re-presents on shell navigation and on any click inside the shell (the
// lane mutations are click-driven; render order is fresh-reads, never
// cache). Contract code reaches this module only through the committed
// generated artifacts (ui/generated/), never directly from src/.

import { currentConversationSurfacePosture } from "./pond-conversation.js";
import { currentDeliveryPosture } from "./pond-delivery.js";
import { currentDispatchPosture } from "./pond-dispatch.js";
import { currentReceiptPosture } from "./pond-receipts.js";
import { currentTransportPosture } from "./pond-transport.js";
import { currentReplyPosture } from "./pond-replies.js";
import { currentVoicePosture } from "./pond-voice.js";

// Verdict labels over the frozen vocabulary values; the raw value renders
// verbatim whenever the mapping lacks it, so a future state literal can
// never be silently re-named here.
const deliveryVerdictLabels = {
  delivery_candidate_prepared_session_scoped_no_dispatch:
    "prepared · no dispatch",
};

const dispatchVerdictLabels = {
  dispatch_performed_session_scoped_in_process_no_receipt:
    "performed in-process · no receipt",
};

const receiptVerdictLabels = {
  delivered: "delivered receipt recorded",
};

const policyVerdictLabels = {
  transport_policy_recorded_session_scoped_no_external_transport:
    "in-process delivery policy recorded",
};

const replyVerdictLabels = {
  reply_request_recorded_session_scoped_no_reply_composed:
    "reply requested · none composed",
};

const presentationMarkLabels = {
  in_session: "",
  inspection_only: "inspection-only",
  confined_reassessment_refusal: "confined · reassessment refuses",
};

const trustMarkLabels = {
  in_session_verified_boundary_session_scoped:
    "in session · verified boundary · session-scoped",
  out_of_session_untrusted_epoch_inspection_only_never_consumer_admissible:
    "out of session · untrusted epoch · inspection only · never consumer admissible",
  out_of_session_record_not_admissible: "out of session · record not admissible",
};

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const labelOf = (labels, value) => labels[value] ?? value;

const markSuffix = (mark) => {
  const label = labelOf(presentationMarkLabels, mark);
  return label ? ` · ${label}` : "";
};

// One posture row per recorded lane event touching this composition. The
// row's text is `delivery · verdict· mark` and nothing else — the lane's
// honest label, never a promotion of it.
const postureRow = (documentRef, lane, verdict, mark = "") =>
  text(
    documentRef,
    "p",
    "chat-posture-row",
    `${lane} · ${verdict}${markSuffix(mark)}`,
  );

const renderBubble = (
  documentRef,
  { composedText, addressedAgentRef, trustMark, rows },
) => {
  const bubble = documentRef.createElement("div");
  bubble.className = "chat-bubble";
  bubble.append(
    text(documentRef, "p", "chat-bubble-head", addressedAgentRef),
    text(documentRef, "p", "chat-bubble-text", composedText),
    text(documentRef, "p", "chat-bubble-trust", trustMark),
  );
  if (rows.length > 0) {
    const rowsWrap = documentRef.createElement("div");
    rowsWrap.className = "chat-posture-rows";
    for (const row of rows) rowsWrap.append(row);
    bubble.append(rowsWrap);
  }
  return bubble;
};

// The transcript posture at one shared evaluation instant: every frozen
// lane posture re-reads fresh through its own export — no state here.
const chatSurfacePosture = ({ evaluatedAtEpochMs }) => {
  const conversation = currentConversationSurfacePosture({ evaluatedAtEpochMs });
  const delivery = currentDeliveryPosture({ evaluatedAtEpochMs });
  const dispatch = currentDispatchPosture({ evaluatedAtEpochMs });
  const receipts = currentReceiptPosture({ evaluatedAtEpochMs });
  const transport = currentTransportPosture({ evaluatedAtEpochMs });
  const replies = currentReplyPosture({ evaluatedAtEpochMs });
  const voice = currentVoicePosture({ evaluatedAtEpochMs });
  return {
    conversation,
    delivery,
    dispatch,
    receipts,
    transport,
    replies,
    voice,
  };
};

const bubblesOf = (documentRef, posture) => {
  const { conversation, delivery, dispatch, receipts, transport, replies } =
    posture;
  const bubbles = [];
  conversation.recordTexts.forEach((recordText, index) => {
    const surfaceEntry = conversation.assessment.recordEntries[index];
    const rows = [];
    delivery.decidedFacts.forEach((fact, deliveryIndex) => {
      if (fact.conversationRecordIndex !== index) return;
      const deliveryAssessment = delivery.assessments[deliveryIndex];
      rows.push(
        postureRow(
          documentRef,
          "delivery",
          labelOf(deliveryVerdictLabels, deliveryAssessment.deliveryCandidateState),
        ),
      );
      transport.policies.forEach((policy) => {
        if (policy.deliveryDecisionIndex !== deliveryIndex) return;
        rows.push(
          postureRow(
            documentRef,
            "policy",
            policyVerdictLabels
              .transport_policy_recorded_session_scoped_no_external_transport,
            policy.presentationMark,
          ),
        );
      });
      dispatch.decidedFacts.forEach((dispatchFact, dispatchIndex) => {
        if (dispatchFact.deliveryDecisionIndex !== deliveryIndex) return;
        const dispatchAssessment = dispatch.assessments[dispatchIndex];
        rows.push(
          postureRow(
            documentRef,
            "dispatch",
            labelOf(dispatchVerdictLabels, dispatchAssessment.dispatchState),
          ),
        );
        receipts.receipts.forEach((receipt) => {
          if (receipt.dispatchDecisionIndex !== dispatchIndex) return;
          rows.push(
            postureRow(
              documentRef,
              "receipt",
              receiptVerdictLabels.delivered,
              receipt.presentationMark,
            ),
          );
        });
      });
    });
    replies.requests.forEach((request) => {
      if (request.conversationRecordIndex !== index) return;
      rows.push(
        postureRow(
          documentRef,
          "reply",
          replyVerdictLabels
            .reply_request_recorded_session_scoped_no_reply_composed,
          request.presentationMark,
        ),
      );
    });
    bubbles.push(
      renderBubble(documentRef, {
        composedText: recordText.composedText,
        addressedAgentRef: recordText.addressedAgentRef,
        trustMark: surfaceEntry
          ? labelOf(trustMarkLabels, surfaceEntry.presentationTrustMark)
          : "record not presented",
        rows,
      }),
    );
  });
  return bubbles;
};

// The recorded posture facts these rows re-present are single-state by
// construction: the receipts lane records only its performable `delivered`
// state, the transport lane only its in-process policy, and the reply lane
// only its request state — a refused input stores nothing — so the row's
// verdict is the lane's one recorded value and the honest confinedness
// lives in the presentation mark. The delivery and dispatch rows speak
// from their lanes' re-assessed state values through the label maps above.

const renderTransientPostureNote = (documentRef, run) => {
  const children = [];
  const assessment = run.conversation.assessment;
  children.push(
    text(
      documentRef,
      "p",
      "chat-transcript-header",
      `transcript · ${assessment.mappedEstablishmentState} · read gate ${assessment.mappedReadGateState}`,
    ),
  );
  if (run.voice.held) {
    children.push(
      text(
        documentRef,
        "p",
        "chat-posture-row chat-voice-line",
        `voice · ${run.voice.requests.length} request${run.voice.requests.length === 1 ? "" : "s"} · ${run.voice.decisions.length} transcription decision${run.voice.decisions.length === 1 ? "" : "s"} · no capture performed`,
      ),
    );
  }
  return children;
};

const renderChatTranscript = (documentRef, transcriptTarget) => {
  const run = chatSurfacePosture({ evaluatedAtEpochMs: Date.now() });
  const bubbles = bubblesOf(documentRef, run);
  const children = [
    ...renderTransientPostureNote(documentRef, run),
    ...bubbles,
  ];
  if (bubbles.length === 0) {
    children.push(
      text(
        documentRef,
        "p",
        "cockpit-note",
        "Nothing composed yet — compositions record into the live session only, and refused compositions store nothing.",
      ),
    );
  }
  transcriptTarget.replaceChildren(...children);
};

// Presentation-only render: fail-closed on a missing target, and the
// re-presentation triggers are the shell's own navigation and clicks —
// the lane mutations are click-driven, so a post-handler click re-run
// sees the frozen lanes' fresh postures. No timer, no mutation of any
// lane, no record anywhere.
export const renderPondChatSurface = (documentRef = globalThis.document) => {
  if (!documentRef) return false;
  const transcriptTarget = documentRef.querySelector("[data-chat-transcript]");
  if (!transcriptTarget) return false;

  documentRef.addEventListener("click", () => {
    renderChatTranscript(documentRef, transcriptTarget);
  });
  globalThis.addEventListener?.("focus", () => {
    renderChatTranscript(documentRef, transcriptTarget);
  });
  globalThis.addEventListener?.("popstate", () => {
    renderChatTranscript(documentRef, transcriptTarget);
  });

  renderChatTranscript(documentRef, transcriptTarget);
  return true;
};

if (typeof document !== "undefined") {
  renderPondChatSurface(document);
}