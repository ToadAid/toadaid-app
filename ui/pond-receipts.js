// Stage D-P19 — the delivery-receipt lane: the receiver records one
// `delivered` receipt — the only performable state this cut — over a
// currently performed D-P18 in-process dispatch, and the recorded receipt
// is frozen at issuance: historical evidence from that moment on. The
// receipt proves that the in-process delivery completed — and nothing
// else: no recipient agreement, no task acceptance, no capability
// authorization, no action, no payment, no result correctness, no grant,
// no consequence, no membership, no admission, no cognition runtime, no
// authority.
//
// What this module never does: nothing crosses a channel class — no
// external transport of any kind (no A2A, MCP, socket, network, queue,
// retry, or scheduling); no consequence or task acceptance is
// established; nothing is persisted. One receipt per dispatch: a repeat
// attempt records the refused basis it is
// (`replayed_from_prior_receipt_decision`) and the ceremony refuses it at
// its own declarative check — a refused receipt stores nothing.
//
// The historical-evidence posture (never re-assessed, never deleted):
// re-reads of a recorded receipt present the recorded facts verbatim.
// The dispatch lane's frozen re-run is consulted ONLY to set the honest
// presentation mark — in-session while the dispatch is still currently
// performed at the supplied evaluation time, inspection-only afterwards —
// and never to re-assess the receipt's validity, re-stamp its event, or
// delete it. Module state only, process lifetime: retention stays a
// deferral, and delivery granted no retention.
//
// Contract code reaches this module only through the committed generated
// artifact (ui/generated/), never directly from src/.

import {
  assessPondDeliveryReceiptDecision,
  assessPondDispatchDecision,
  pondStageDP19DeliveryReceiptTemplate,
} from "./generated/pond-stage-d-live-session-receipts.js";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./generated/pond-stage-d-live-session.js";
import { heldDispatchDecisions } from "./pond-dispatch.js";
import { heldLiveSessionRecords } from "./pond-live-session.js";

// ---------------------------------------------------------------------------
// Recorded receipt decisions: module scope only. Each entry carries the
// receipt record and its own issuance facts beside the held dispatch
// entry's honest facts (the delivered text stays beside the entry in shell
// state only — the assessments never carry text). A refused receipt stores
// nothing.
// ---------------------------------------------------------------------------

const recordedReceiptDecisions = [];

// The receiver records one `delivered` receipt over a dispatch decision
// whose re-run is currently performed at the receipt's own evaluation
// instant. The dispatch input comes from the held dispatch entries — never
// restated, never copied with altered shape — and the receipt record is
// built from the frozen template with the receiver-own identity fields
// filled (the delivered-to agent echo stays the certified candidate's own
// addressed agent; the receipt-event instant keeps the receipt its own
// event-time freshness). A receipt over a dispatch whose re-run refuses,
// a receipt in a non-performable state, or a replayed receipt attempt all
// refuse honestly and store nothing.
export const recordDeliveryReceipt = ({
  dispatchDecisionIndex,
  receiptEventAtEpochMs,
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const dispatchHold = heldDispatchDecisions();
  const decisionIndex =
    typeof dispatchDecisionIndex === "number" &&
    Number.isSafeInteger(dispatchDecisionIndex) &&
    dispatchDecisionIndex >= 0 &&
    dispatchDecisionIndex < dispatchHold.decisions.length
      ? dispatchDecisionIndex
      : null;
  // Out-of-range dispatches refuse before any input exists — there is no
  // dispatch to certify, so no assessment is fabricated here.
  if (decisionIndex === null) {
    return Object.freeze({
      recorded: false,
      assessment: null,
      refusalReason: "dispatch_decision_index_out_of_range",
    });
  }
  const heldDecision = dispatchHold.decisions[decisionIndex];
  const replayed = recordedReceiptDecisions.some(
    (decision) => decision.dispatchDecisionIndex === decisionIndex,
  );
  const receipt = Object.freeze({
    ...pondStageDP19DeliveryReceiptTemplate,
    deliveryReceiptMetadata: Object.freeze({
      ...pondStageDP19DeliveryReceiptTemplate.deliveryReceiptMetadata,
      recorded_at_epoch_ms: receiptEventAtEpochMs,
    }),
    deliveredToAgentRef: heldDecision.addressedAgentRef,
    dispatchedAtEventEpochMs: heldDecision.dispatchedAtEpochMs,
    receiptBasis: replayed
      ? "replayed_from_prior_receipt_decision"
      : "receiver_observed_in_process_delivery_completed_not_inferred",
  });
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  const input = Object.freeze({
    ...heldDecision.input,
    receiverRetractionRecord: held.retractionRecord,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAgeMs,
    deliveryReceipt: receipt,
  });
  const assessment = assessPondDeliveryReceiptDecision(input);
  const recorded =
    assessment.receiptState ===
    "receipt_recorded_session_scoped_historical_evidence";
  if (recorded) {
    recordedReceiptDecisions.push(
      Object.freeze({
        input,
        receipt,
        deliveredText: heldDecision.dispatchedText,
        deliveredToAgentRef: heldDecision.addressedAgentRef,
        dispatchDecisionIndex: decisionIndex,
        receiptEventAtEpochMs,
      }),
    );
  }
  return Object.freeze({
    recorded,
    assessment,
  });
};

// The receipt posture: the recorded receipts read back VERBATIM — the
// recorded facts are never re-assessed for validity, re-stamped, or
// deleted, even after the session has ended (historical correction law).
// The frozen dispatch re-run over each receipt's own dispatch input is
// consulted only for the honest presentation mark: in-session while the
// certified dispatch is still currently performed, inspection-only
// afterwards. Staleness never denies the receipt and never deletes it.
export const currentReceiptPosture = ({
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  const receipts = recordedReceiptDecisions.map((decision) => {
    // Presentation support only — the receipt facts themselves are never
    // touched by this re-run.
    const stillInSession =
      assessPondDispatchDecision({
        ...decision.input,
        receiverRetractionRecord: held.retractionRecord,
        receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
        receiverMaximumAgeMs: maximumAgeMs,
      }).dispatchState ===
      "dispatch_performed_session_scoped_in_process_no_receipt";
    return Object.freeze({
      receipt: decision.receipt,
      deliveredText: decision.deliveredText,
      deliveredToAgentRef: decision.deliveredToAgentRef,
      dispatchDecisionIndex: decision.dispatchDecisionIndex,
      receiptEventAtEpochMs: decision.receiptEventAtEpochMs,
      presentationMark: stillInSession ? "in_session" : "inspection_only",
    });
  });
  return Object.freeze({
    held: receipts.length > 0,
    receipts,
  });
};

// ---------------------------------------------------------------------------
// Rendering: textContent only, refusal-first, verbatim recorded values.
// The receipt rows present the recorded facts verbatim with the honest
// presentation mark; the receipt affordance is offered only over a held
// dispatch that is still currently performed and not yet receipted.
// ---------------------------------------------------------------------------

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const factsList = (documentRef, facts) => {
  const list = documentRef.createElement("dl");
  list.className = "receipt-facts";
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

const presentationLabel = (mark) =>
  mark === "in_session"
    ? "receipt recorded · historical evidence · in session"
    : "receipt recorded · historical evidence · inspection-only (session ended)";

export const renderPondReceipt = (documentRef = globalThis.document) => {
  if (!documentRef) return false;

  const root = documentRef.querySelector("[data-receipt-note]");
  const statusTarget = documentRef.querySelector("[data-receipt-status]");
  const listTarget = documentRef.querySelector("[data-receipt-list]");
  if (!root || !statusTarget || !listTarget) return false;

  const nowMs = Date.now();
  const receiptHold = currentReceiptPosture({ evaluatedAtEpochMs: nowMs });
  const dispatchHold = heldDispatchDecisions();
  const receiptedIndexes = new Set(
    receiptHold.receipts.map((row) => row.dispatchDecisionIndex),
  );
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs: nowMs });

  const recordList = documentRef.createElement("div");
  recordList.className = "receipt-list";
  receiptHold.receipts.forEach((row) => {
    const item = documentRef.createElement("div");
    item.className = "receipt-record";
    item.append(
      text(documentRef, "p", "receipt-record-verdict", presentationLabel(row.presentationMark)),
      text(documentRef, "p", "receipt-record-destination", row.deliveredToAgentRef),
      factsList(documentRef, [
        ["State", row.receipt.receiptState],
        ["Basis", row.receipt.receiptBasis],
        ["Recorded at", row.receipt.deliveryReceiptMetadata.recorded_at_epoch_ms],
        ["Certifies dispatch at", row.receipt.dispatchedAtEventEpochMs],
        [
          "Proof binding",
          `${row.receipt.proofBinding.expectedDispatchDecisionVersion} · ${row.receipt.proofBinding.comparisonResult}`,
        ],
        ["Retention", row.receipt.receiptRetentionPosture],
        ["Authority", row.receipt.authority],
      ]),
    );
    item.append(
      text(documentRef, "p", "receipt-record-text", row.deliveredText),
    );
    recordList.append(item);
  });
  if (receiptHold.receipts.length === 0) {
    recordList.append(
      text(
        documentRef,
        "p",
        "cockpit-note",
        "No delivery receipts recorded — recording a receipt requires a currently performed in-process dispatch. No signature, chain, payment receipt, or result proof exists here.",
      ),
    );
  }

  // The receipt affordances ride the dispatch entries: one receipt per
  // dispatch, offered only while the certified dispatch re-runs currently
  // performed at the live evaluation time; replayed and out-of-session
  // dispatches present inspection-only honest refusal text.
  dispatchHold.decisions.forEach((decision, index) => {
    const receipted = receiptedIndexes.has(index);
    const reassessment = assessPondDispatchDecision({
      ...decision.input,
      receiverRetractionRecord: held.retractionRecord,
      receiverEvaluatedAtEpochMs: nowMs,
      receiverMaximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
    });
    const performed =
      reassessment.dispatchState ===
      "dispatch_performed_session_scoped_in_process_no_receipt";
    const item = documentRef.createElement("div");
    item.className = "receipt-record";
    item.append(
      text(documentRef, "p", "receipt-record-destination", decision.addressedAgentRef),
      text(documentRef, "p", "receipt-record-text", decision.dispatchedText),
    );
    const affordance = documentRef.createElement("button");
    affordance.type = "button";
    affordance.className = "receipt-affordance";
    if (!receipted && performed) {
      affordance.textContent = "Record receipt · delivered";
      affordance.addEventListener("click", () => {
        const recordNow = Date.now();
        const recorded = recordDeliveryReceipt({
          dispatchDecisionIndex: index,
          receiptEventAtEpochMs: recordNow,
          evaluatedAtEpochMs: recordNow,
        });
        if (!recorded.recorded) {
          // Nothing stored — the honest refusal is the whole update.
          statusTarget.replaceChildren(
            text(
              documentRef,
              "p",
              "cockpit-note",
              `Receipt refused — ${recorded.refusalReason ?? recorded.assessment.reason}. Refused receipts store nothing.`,
            ),
          );
          return;
        }
        // A recorded receipt re-reads the recorded facts verbatim: the
        // whole render re-runs, the list stays index-paired, and the new
        // receipt row presents itself at its issuance facts.
        renderPondReceipt(documentRef);
      });
    } else if (receipted) {
      affordance.disabled = true;
      affordance.textContent = "Receipted — reuse refused as a replayed receipt";
      affordance.setAttribute("data-receipt-refused-replay", "true");
    } else {
      affordance.disabled = true;
      affordance.textContent = `Receipt not admissible — ${reassessment.reason}`;
      affordance.setAttribute("data-receipt-refused-entry", "true");
    }
    item.append(affordance);
    recordList.append(item);
  });

  const renderPondReceiptNow = () => {
    const liveHold = currentReceiptPosture({ evaluatedAtEpochMs: Date.now() });
    statusTarget.replaceChildren(
      text(
        documentRef,
        "p",
        "cockpit-note",
        `Receipt posture · ${liveHold.receipts.length} recorded receipt${liveHold.receipts.length === 1 ? "" : "s"} · frozen at issuance — re-reads present the recorded facts verbatim, never re-assessed, never deleted; receipts prove delivery alone`,
      ),
    );
  };
  listTarget.replaceChildren(recordList);
  renderPondReceiptNow();
  root.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      "Receipts record the receiver's observation of the in-process delivery completing — one per dispatch, frozen at issuance as historical evidence: a receipt never proves recipient agreement, task acceptance, capability authorization, action, payment, or result correctness.",
    ),
  );
  root.dataset.receiptRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderPondReceipt(document);
}