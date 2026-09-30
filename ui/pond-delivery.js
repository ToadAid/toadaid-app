// Stage D-P17 — the delivery lane: the receiver prepares delivery
// candidates for recorded session-scoped compositions, and every
// candidate is assessed by the frozen delivery-candidate decision
// ceremony — the delivered record copy keeping its D-P16 dv and kind
// verbatim, the destination bound to the record's own addressed agent,
// and the delivery intent carried as a receiver-recorded event over the
// live D-P15 session. Beside each recorded decision the lane presents
// the verbatim verdict facts: a prepared candidate records intent only
// and never dispatches.
//
// What this module never does: nothing is transported, dispatched, sent,
// or receipted — transport and dispatch are refused until their own later
// lane (a message may inform; a message does not authorize a
// consequence), no task acceptance or agreement is equipped, no grant,
// membership, admission, or cognition runtime is established. Nothing is
// persisted — the recorded decisions live exactly as long as this shell
// process in module state, are re-assessed on every render at the
// supplied evaluation time (frozen inputs, fresh re-read, no mutation),
// and where the session has ended the verdicts honestly refuse. A
// refused preparation stores nothing. Contract code reaches this module
// only through the committed generated artifact (ui/generated/), never
// directly from src/.

import {
  assessPondDeliveryCandidateDecision,
  pondStageDP17DeliveryCandidateTemplate,
} from "./generated/pond-stage-d-live-session-delivery.js";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./generated/pond-stage-d-live-session.js";
import { heldLiveSessionRecords } from "./pond-live-session.js";
import {
  currentConversationSurfacePosture,
  heldConversationRecordEntries,
} from "./pond-conversation.js";

// ---------------------------------------------------------------------------
// Recorded delivery decisions: module scope only. Each entry carries the
// full frozen decision input the posture re-runs plus the honest
// composition facts (the delivered text stays beside the entry in shell
// state only — the assessments never carry composed text). A refused
// preparation stores nothing.
// ---------------------------------------------------------------------------

const recordedDeliveryDecisions = [];

const deliveryCandidateOf = ({ deliveredConversationRecord, addressedAgentRef, recordedAtEpochMs }) =>
  Object.freeze({
    ...pondStageDP17DeliveryCandidateTemplate,
    deliveredConversationRecord: Object.freeze({ ...deliveredConversationRecord }),
    addressedAgentRef,
    deliveryIntentMetadata: Object.freeze({
      ...pondStageDP17DeliveryCandidateTemplate.deliveryIntentMetadata,
      recorded_at_epoch_ms: recordedAtEpochMs,
    }),
  });

const deliveryDecisionInputOf = ({ deliveryCandidate, held, evaluatedAtEpochMs, maximumAgeMs }) =>
  Object.freeze({
    deliveryCandidate,
    receiverHeldPrincipalRef: held.principalRef,
    readGateRecord: held.readGateRecord,
    establishmentRecord: held.establishmentRecord,
    dp5CeremonyRecord: held.legs.dp5CeremonyRecord,
    dp6ObservationRecord: held.legs.dp6ObservationRecord,
    dp8VerifierRecord: held.legs.dp8VerifierRecord,
    dp8ProofRecord: held.legs.dp8ProofRecord,
    dp9IssuanceRecord: held.legs.dp9IssuanceRecord,
    dp9MappingRecord: held.legs.dp9MappingRecord,
    dp10ActivationRecord: held.legs.dp10ActivationRecord,
    receiverRetractionRecord: held.retractionRecord,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAgeMs,
  });

// The receiver prepares a delivery candidate for a recorded composition:
// the delivered record copy is the held record itself (D-P16 dv and kind
// preserved verbatim), the destination is the record's own addressed
// agent (the receiver-recorded audience tie), and the intent event is the
// supplied clock value. The frozen decision ceremony assesses the whole
// thing over the held session records and a refused preparation stores
// nothing. The ceremony never pre-filters a refusal and never re-stamps
// the delivered copy.
export const recordDeliveryCandidatePreparation = ({
  conversationRecordIndex,
  recordedAtEpochMs,
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  const conversationHold = heldConversationRecordEntries();
  const entryIndex =
    typeof conversationRecordIndex === "number" &&
    Number.isSafeInteger(conversationRecordIndex) &&
    conversationRecordIndex >= 0 &&
    conversationRecordIndex < conversationHold.entries.length
      ? conversationRecordIndex
      : null;
  const heldEntry = entryIndex === null ? null : conversationHold.entries[entryIndex];
  const preparedCandidate = heldEntry === null
    ? pondStageDP17DeliveryCandidateTemplate
    : deliveryCandidateOf({
        deliveredConversationRecord: heldEntry.input.conversationRecord,
        addressedAgentRef: heldEntry.addressedAgentRef,
        recordedAtEpochMs,
      });
  const input = deliveryDecisionInputOf({
    deliveryCandidate: preparedCandidate,
    held,
    evaluatedAtEpochMs,
    maximumAgeMs,
  });
  const assessment = assessPondDeliveryCandidateDecision(input);
  const prepared =
    assessment.deliveryCandidateState ===
    "delivery_candidate_prepared_session_scoped_no_dispatch";
  if (prepared) {
    recordedDeliveryDecisions.push(
      Object.freeze({
        input,
        composedText: heldEntry.composedText,
        addressedAgentRef: heldEntry.addressedAgentRef,
        conversationRecordIndex: entryIndex,
        recordedAtEpochMs,
      }),
    );
  }
  return Object.freeze({
    recorded: prepared,
    assessment,
  });
};

// The delivery posture, re-run on every call from the recorded decisions
// at the supplied evaluation time and retraction record: frozen inputs,
// fresh re-read, no mutation — staleness and retraction are always the
// honest verdict, never a canned decision.
export const currentDeliveryPosture = ({
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  const assessments = recordedDeliveryDecisions.map((decision) =>
    assessPondDeliveryCandidateDecision({
      ...decision.input,
      receiverRetractionRecord: held.retractionRecord,
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
    }),
  );
  return Object.freeze({
    assessments,
    deliveredTexts: recordedDeliveryDecisions.map((decision) =>
      Object.freeze({
        composedText: decision.composedText,
        addressedAgentRef: decision.addressedAgentRef,
      }),
    ),
    decidedFacts: recordedDeliveryDecisions.map((decision) =>
      Object.freeze({
        conversationRecordIndex: decision.conversationRecordIndex,
        recordedAtEpochMs: decision.recordedAtEpochMs,
      }),
    ),
  });
};

// The held delivery decisions, read-only for the sibling dispatch lane
// (the D-P15/D-P16 held-record precedent): frozen, empty when nothing was
// prepared, and never mutated by the caller.
export const heldDeliveryDecisions = () =>
  Object.freeze({
    held: recordedDeliveryDecisions.length > 0,
    decisions: recordedDeliveryDecisions.map((decision) =>
      Object.freeze({
        input: decision.input,
        composedText: decision.composedText,
        addressedAgentRef: decision.addressedAgentRef,
        conversationRecordIndex: decision.conversationRecordIndex,
        recordedAtEpochMs: decision.recordedAtEpochMs,
      }),
    ),
  });

// ---------------------------------------------------------------------------
// Rendering: textContent only, refusal-first, verbatim assessment values.
// The delivered texts render beside the decisions from shell state only —
// the assessments never carry composed text. The prepare affordance is
// offered only for records the conversation surface marks in-session;
// confined records present inspection-only honest refusal text.
// ---------------------------------------------------------------------------

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const factsList = (documentRef, facts) => {
  const list = documentRef.createElement("dl");
  list.className = "delivery-facts";
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

const verdictLabel = (assessment) =>
  assessment.deliveryCandidateState ===
  "delivery_candidate_prepared_session_scoped_no_dispatch"
    ? "prepared session-scoped · no dispatch"
    : "not prepared";

const renderDecisionEntry = (documentRef, decision) => {
  const item = documentRef.createElement("div");
  item.className = "delivery-decision";
  item.append(
    text(documentRef, "p", "delivery-decision-verdict", verdictLabel(decision.assessment)),
    text(documentRef, "p", "delivery-decision-destination", decision.deliveredText.addressedAgentRef),
    factsList(documentRef, [
      ["Reason", decision.assessment.reason],
      ["State", decision.assessment.deliveryCandidateState],
      [
        "Intent freshness",
        `${decision.assessment.deliveryIntentFreshnessDiagnosis.state} · ${decision.assessment.deliveryIntentFreshnessDiagnosis.reason} · age ${decision.assessment.deliveryIntentFreshnessDiagnosis.observationAgeMs}ms`,
      ],
      ["Delivered record", decision.assessment.mappedDeliveredRecordAdmissionState],
      ["Delivered record reason", decision.assessment.mappedDeliveredRecordAdmissionReason],
      ["Read gate", `${decision.assessment.mappedReadGateState} · ${decision.assessment.mappedReadGateReason}`],
      ["Performs transport or dispatch", decision.assessment.deliveryPerformsTransportOrDispatch],
      ["Claims a receipt", decision.assessment.deliveryReceiptAdmitted],
      ["Authorizes a consequence", decision.assessment.deliveryEstablishesConsequenceOrExecution],
      ["Equips task acceptance", decision.assessment.deliveryEstablishesAcceptanceOrTaskAgreement],
      ["Authority", decision.assessment.authority],
    ]),
  );
  return item;
};

const renderHeldRecordRow = (documentRef, row) => {
  const item = documentRef.createElement("div");
  item.className = "delivery-record";
  item.append(
    text(documentRef, "p", "delivery-record-address", row.addressedAgentRef),
    text(documentRef, "p", "delivery-record-text", row.composedText),
    factsList(documentRef, [
      ["Trust mark", row.trustMark],
      ["Composed", row.composedAtEpochMs],
    ]),
  );
  if (row.affordance) {
    item.append(row.affordance);
  }
  return item;
};

const renderDecisions = (documentRef, listTarget, statusTarget, run) => {
  const children = [];
  if (run.assessments.length === 0) {
    children.push(
      text(
        documentRef,
        "p",
        "cockpit-note",
        "No delivery candidates prepared — preparing requires a recorded composition and the live session. Nothing is transported or dispatched here.",
      ),
    );
  }
  run.assessments.forEach((assessment, index) => {
    children.push(
      renderDecisionEntry(documentRef, {
        assessment,
        deliveredText: run.deliveredTexts[index],
      }),
    );
  });
  listTarget.replaceChildren(...children);
  statusTarget.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      `Delivery posture re-assessed · ${run.assessments.length} recorded decision${run.assessments.length === 1 ? "" : "s"} · a prepared candidate records intent only and never dispatches`,
    ),
  );
};

export const renderPondDelivery = (documentRef = globalThis.document) => {
  if (!documentRef) return false;

  const root = documentRef.querySelector("[data-delivery-note]");
  const statusTarget = documentRef.querySelector("[data-delivery-status]");
  const listTarget = documentRef.querySelector("[data-delivery-list]");
  if (!root || !statusTarget || !listTarget) return false;

  const conversationRun = currentConversationSurfacePosture({
    evaluatedAtEpochMs: Date.now(),
  });
  const conversationHold = heldConversationRecordEntries();

  const recordList = documentRef.createElement("div");
  recordList.className = "delivery-record-list";
  conversationRun.recordTexts.forEach((recordEntry, index) => {
    const surfaceEntry = conversationRun.assessment.recordEntries[index];
    const heldEntry = conversationHold.entries[index];
    const inSession =
      surfaceEntry?.presentationTrustMark ===
      "in_session_verified_boundary_session_scoped";
    const affordance = documentRef.createElement("button");
    affordance.type = "button";
    affordance.className = "delivery-affordance";
    if (inSession && heldEntry) {
      affordance.textContent = "Prepare delivery";
      affordance.addEventListener("click", () => {
        const nowMs = Date.now();
        const prepared = recordDeliveryCandidatePreparation({
          conversationRecordIndex: index,
          recordedAtEpochMs: nowMs,
          evaluatedAtEpochMs: nowMs,
        });
        if (!prepared.recorded) {
          // Nothing stored — the honest refusal is the whole update.
          statusTarget.replaceChildren(
            text(
              documentRef,
              "p",
              "cockpit-note",
              `Preparation refused — ${prepared.assessment.reason}. Refused preparations store nothing.`,
            ),
          );
          return;
        }
        renderDecisionsNow();
      });
    } else {
      affordance.disabled = true;
      affordance.textContent = "Delivery not admissible — inspection only";
      affordance.setAttribute("data-delivery-refused-entry", "true");
    }
    recordList.append(
      renderHeldRecordRow(documentRef, {
        composedText: recordEntry.composedText,
        addressedAgentRef: recordEntry.addressedAgentRef,
        trustMark: surfaceEntry?.presentationTrustMark ?? "record_not_presented",
        composedAtEpochMs: heldEntry?.composedAtEpochMs ?? null,
        affordance,
      }),
    );
  });

  const renderDecisionsNow = () => {
    renderDecisions(documentRef, listTarget, statusTarget, currentDeliveryPosture({
      evaluatedAtEpochMs: Date.now(),
    }));
  };
  const renderRecordRowsNow = () => {
    root.replaceChildren(
      text(
        documentRef,
        "p",
        "cockpit-note",
        "Delivery prepares receiver-recorded candidates over admitted compositions — the delivered record keeps its recorded dv verbatim, and nothing is transported or dispatched from this lane.",
      ),
      recordList,
    );
  };

  renderDecisionsNow();
  renderRecordRowsNow();
  root.dataset.deliveryRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderPondDelivery(document);
}