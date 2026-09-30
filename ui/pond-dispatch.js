// Stage D-P18 — the dispatch lane: the receiver performs one in-process,
// local, session-scoped dispatch of a currently prepared D-P17 delivery
// candidate, and every dispatch is assessed by the frozen dispatch-decision
// ceremony — the candidate re-run carrying the D-P17 verdict verbatim (and
// transitively the D-P16 record admission, the D-P15 read gate, and the
// establishment), and the dispatch event keeping its own receiver-recorded
// freshness basis. Beside each recorded dispatch the lane presents the
// verbatim verdict facts.
//
// What this module never does: nothing crosses a channel class — no
// external transport of any kind (no A2A, MCP, socket, network, queue,
// retry, or scheduling); no receipt is claimed or admitted; no
// consequence, task
// acceptance, agent reply, grant, membership, admission, or cognition
// runtime is established; a performed dispatch carries governed
// information to an eligible audience and never converts it into
// authority. One dispatch per candidate: a repeat attempt is recorded as
// the refused basis it is (`replayed_from_prior_dispatch_decision`) and
// the ceremony refuses it — a refused attempt stores nothing. Nothing is
// persisted: the recorded dispatches live exactly as long as this shell
// process in module state, are re-assessed on every render at the supplied
// evaluation time (frozen inputs, fresh re-read, no mutation), and where
// the session has ended the verdicts honestly refuse. Contract code
// reaches this module only through the committed generated artifact
// (ui/generated/), never directly from src/.

import {
  assessPondDispatchDecision,
  assessPondDeliveryCandidateDecision,
  pondStageDP18DispatchMetadataTemplate,
} from "./generated/pond-stage-d-live-session-dispatch.js";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./generated/pond-stage-d-live-session.js";
import { heldDeliveryDecisions } from "./pond-delivery.js";
import { heldLiveSessionRecords } from "./pond-live-session.js";

// ---------------------------------------------------------------------------
// Recorded dispatch decisions: module scope only. Each entry carries the
// full frozen dispatch input the posture re-runs plus the honest delivery
// facts (the dispatched text stays beside the entry in shell state only —
// the assessments never carry text, and the candidate under the dispatch
// stays the held delivery decision's own candidate, never a copy restated
// here). A refused dispatch stores nothing.
// ---------------------------------------------------------------------------

const recordedDispatchDecisions = [];

const dispatchMetadataOf = ({ basis, dispatchedAtEpochMs }) =>
  Object.freeze({
    ...pondStageDP18DispatchMetadataTemplate,
    dispatch_basis: basis,
    dispatched_at_epoch_ms: dispatchedAtEpochMs,
  });

const dispatchInputOf = ({
  deliveryCandidate,
  dispatchMetadata,
  held,
  evaluatedAtEpochMs,
  maximumAgeMs,
}) =>
  Object.freeze({
    deliveryCandidate,
    dispatchMetadata,
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

// The receiver performs one in-process dispatch of a prepared delivery
// candidate. The candidate comes from the held delivery decision — never
// restated, never copied with altered dv — and the session legs come from
// the held live session records at the evaluation instant. The frozen
// ceremony assesses the whole thing; a performed dispatch stores its
// verified entry, a refused one stores nothing. Repeat dispatches of a
// candidate that already has a recorded dispatch are recorded as the
// refused basis they are (the receiver-recorded replay basis) so the
// ceremony refuses them at its own declarative check — the
// consumed-request marker stays module state per the law's deferral.
export const performReceiverDispatch = ({
  deliveryDecisionIndex,
  dispatchedAtEpochMs,
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const deliveryHold = heldDeliveryDecisions();
  const decisionIndex =
    typeof deliveryDecisionIndex === "number" &&
    Number.isSafeInteger(deliveryDecisionIndex) &&
    deliveryDecisionIndex >= 0 &&
    deliveryDecisionIndex < deliveryHold.decisions.length
      ? deliveryDecisionIndex
      : null;
  // Out-of-range decisions refuse before any input exists — there is no
  // candidate to assess, so no assessment is fabricated here.
  if (decisionIndex === null) {
    return Object.freeze({
      recorded: false,
      assessment: null,
      refusalReason: "delivery_decision_index_out_of_range",
    });
  }
  const heldDecision = deliveryHold.decisions[decisionIndex];
  const replayed = recordedDispatchDecisions.some(
    (decision) => decision.deliveryDecisionIndex === decisionIndex,
  );
  const metadata = dispatchMetadataOf({
    basis: replayed
      ? "replayed_from_prior_dispatch_decision"
      : "receiver_performed_in_process_dispatch_not_inferred",
    dispatchedAtEpochMs,
  });
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  const input = dispatchInputOf({
    deliveryCandidate: heldDecision.input.deliveryCandidate,
    dispatchMetadata: metadata,
    held,
    evaluatedAtEpochMs,
    maximumAgeMs,
  });
  const assessment = assessPondDispatchDecision(input);
  const performed =
    assessment.dispatchState ===
    "dispatch_performed_session_scoped_in_process_no_receipt";
  if (performed) {
    recordedDispatchDecisions.push(
      Object.freeze({
        input,
        dispatchedText: heldDecision.composedText,
        addressedAgentRef: heldDecision.addressedAgentRef,
        deliveryDecisionIndex: decisionIndex,
        dispatchedAtEpochMs,
      }),
    );
  }
  return Object.freeze({
    recorded: performed,
    assessment,
  });
};

// The dispatch posture, re-run on every call from the recorded dispatches
// at the supplied evaluation time and retraction record: frozen inputs,
// fresh re-read, no mutation — staleness and retraction are always the
// honest verdict, never a canned decision.
export const currentDispatchPosture = ({
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  const assessments = recordedDispatchDecisions.map((decision) =>
    assessPondDispatchDecision({
      ...decision.input,
      receiverRetractionRecord: held.retractionRecord,
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
    }),
  );
  return Object.freeze({
    assessments,
    dispatchedTexts: recordedDispatchDecisions.map((decision) =>
      Object.freeze({
        dispatchedText: decision.dispatchedText,
        addressedAgentRef: decision.addressedAgentRef,
      }),
    ),
    decidedFacts: recordedDispatchDecisions.map((decision) =>
      Object.freeze({
        deliveryDecisionIndex: decision.deliveryDecisionIndex,
        dispatchedAtEpochMs: decision.dispatchedAtEpochMs,
      }),
    ),
  });
};

// The additive held-decision export: the receipt lane consumes the stored
// dispatch entries verbatim — frozen shape, no widening, one additive
// export in the D-P15/D-P16/D-P17-D-P18 precedent (the D-P19 receipts
// module never restates a dispatch shape).
export const heldDispatchDecisions = () =>
  Object.freeze({
    held: recordedDispatchDecisions.length > 0,
    decisions: recordedDispatchDecisions.map((decision) =>
      Object.freeze({
        input: decision.input,
        dispatchedText: decision.dispatchedText,
        addressedAgentRef: decision.addressedAgentRef,
        deliveryDecisionIndex: decision.deliveryDecisionIndex,
        dispatchedAtEpochMs: decision.dispatchedAtEpochMs,
      }),
    ),
  });

// ---------------------------------------------------------------------------
// Rendering: textContent only, refusal-first, verbatim assessment values.
// The dispatched texts render beside the dispatch decisions from shell
// state only — the assessments never carry text. The dispatch affordance
// is offered only for delivery decisions whose candidate is still
// currently prepared (the frozen D-P17 re-run through the dispatch
// bundle's own seam) and not yet dispatched; replayed candidates and
// confined or stale candidates present inspection-only honest refusal
// text.
// ---------------------------------------------------------------------------

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const factsList = (documentRef, facts) => {
  const list = documentRef.createElement("dl");
  list.className = "dispatch-facts";
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
  assessment.dispatchState ===
  "dispatch_performed_session_scoped_in_process_no_receipt"
    ? "dispatched once · in-process · no receipt"
    : "not dispatched";

const renderDispatchEntry = (documentRef, dispatch) => {
  const item = documentRef.createElement("div");
  item.className = "dispatch-decision";
  item.append(
    text(documentRef, "p", "dispatch-decision-verdict", verdictLabel(dispatch.assessment)),
    text(documentRef, "p", "dispatch-decision-destination", dispatch.dispatchedText.addressedAgentRef),
    factsList(documentRef, [
      ["Reason", dispatch.assessment.reason],
      ["State", dispatch.assessment.dispatchState],
      [
        "Candidate reassessment",
        `${dispatch.assessment.mappedCandidateState} · ${dispatch.assessment.mappedCandidateReassessmentReason}`,
      ],
      [
        "Dispatch event freshness",
        `${dispatch.assessment.dispatchEventFreshnessDiagnosis.state} · ${dispatch.assessment.dispatchEventFreshnessDiagnosis.reason} · age ${dispatch.assessment.dispatchEventFreshnessDiagnosis.observationAgeMs}ms`,
      ],
      ["Performs external transport", dispatch.assessment.dispatchPerformsExternalTransport],
      ["Queued retried or scheduled", dispatch.assessment.dispatchQueuedOrRetriedOrScheduled],
      ["Claims a receipt", dispatch.assessment.dispatchReceiptAdmitted],
      ["Establishes agent reply or acceptance", dispatch.assessment.dispatchEstablishesAcceptanceOrAgentReply],
      ["Authority", dispatch.assessment.authority],
    ]),
  );
  return item;
};

const renderHeldCandidateRow = (documentRef, row) => {
  const item = documentRef.createElement("div");
  item.className = "dispatch-record";
  item.append(
    text(documentRef, "p", "dispatch-record-address", row.addressedAgentRef),
    text(documentRef, "p", "dispatch-record-text", row.composedText),
    factsList(documentRef, [
      ["Prepared decision", row.preparedReason],
      ["Prepared", row.recordedAtEpochMs],
    ]),
  );
  if (row.affordance) {
    item.append(row.affordance);
  }
  return item;
};

const renderDispatches = (documentRef, listTarget, statusTarget, run) => {
  const children = [];
  if (run.assessments.length === 0) {
    children.push(
      text(
        documentRef,
        "p",
        "cockpit-note",
        "No in-process dispatches performed — dispatching requires a prepared delivery candidate and the live session. No external transport exists here.",
      ),
    );
  }
  run.assessments.forEach((assessment, index) => {
    children.push(
      renderDispatchEntry(documentRef, {
        assessment,
        dispatchedText: run.dispatchedTexts[index],
      }),
    );
  });
  listTarget.replaceChildren(...children);
  statusTarget.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      `Dispatch posture re-assessed · ${run.assessments.length} recorded dispatch${run.assessments.length === 1 ? "" : "es"} · one dispatch per candidate — reuse refuses as a replayed dispatch, and no receipt, transport, or reply exists here`,
    ),
  );
};

export const renderPondDispatch = (documentRef = globalThis.document) => {
  if (!documentRef) return false;

  const root = documentRef.querySelector("[data-dispatch-note]");
  const statusTarget = documentRef.querySelector("[data-dispatch-status]");
  const listTarget = documentRef.querySelector("[data-dispatch-list]");
  if (!root || !statusTarget || !listTarget) return false;

  const deliveryHold = heldDeliveryDecisions();

  const recordList = documentRef.createElement("div");
  recordList.className = "dispatch-record-list";
  deliveryHold.decisions.forEach((decision, index) => {
    const replayed = recordedDispatchDecisions.some(
      (stored) => stored.deliveryDecisionIndex === index,
    );
    const nowMs = Date.now();
    const held = heldLiveSessionRecords({ evaluatedAtEpochMs: nowMs });
    const reassessment = assessPondDeliveryCandidateDecision({
      ...decision.input,
      receiverRetractionRecord: held.retractionRecord,
      receiverEvaluatedAtEpochMs: nowMs,
      receiverMaximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
    });
    const prepared =
      reassessment.deliveryCandidateState ===
      "delivery_candidate_prepared_session_scoped_no_dispatch";
    const affordance = documentRef.createElement("button");
    affordance.type = "button";
    affordance.className = "dispatch-affordance";
    if (!replayed && prepared) {
      affordance.textContent = "Dispatch once · in-process";
      affordance.addEventListener("click", () => {
        const nowMs = Date.now();
        const dispatched = performReceiverDispatch({
          deliveryDecisionIndex: index,
          dispatchedAtEpochMs: nowMs,
          evaluatedAtEpochMs: nowMs,
        });
        if (!dispatched.recorded) {
          // Nothing stored — the honest refusal is the whole update.
          statusTarget.replaceChildren(
            text(
              documentRef,
              "p",
              "cockpit-note",
              `Dispatch refused — ${dispatched.refusalReason ?? dispatched.assessment.reason}. Refused dispatches store nothing.`,
            ),
          );
          return;
        }
        renderDispatchesNow();
      });
    } else if (replayed) {
      affordance.disabled = true;
      affordance.textContent = "Dispatched — reuse refused as a replayed dispatch";
      affordance.setAttribute("data-dispatch-refused-replay", "true");
    } else {
      affordance.disabled = true;
      affordance.textContent = `Dispatch not admissible — ${reassessment.reason}`;
      affordance.setAttribute("data-dispatch-refused-entry", "true");
    }
    recordList.append(
      renderHeldCandidateRow(documentRef, {
        composedText: decision.composedText,
        addressedAgentRef: decision.addressedAgentRef,
        preparedReason: decision.input.deliveryCandidate.deliveryBasis,
        recordedAtEpochMs: decision.recordedAtEpochMs,
        affordance,
      }),
    );
  });

  const renderDispatchesNow = () => {
    renderDispatches(documentRef, listTarget, statusTarget, currentDispatchPosture({
      evaluatedAtEpochMs: Date.now(),
    }));
  };
  const renderRecordRowsNow = () => {
    root.replaceChildren(
      text(
        documentRef,
        "p",
        "cockpit-note",
        "Dispatch performs one receiver-recorded in-process delivery of a prepared candidate — session-scoped, local, and channel-neutral, with no external transport, queue, receipt, reply, or authority anywhere in the lane.",
      ),
      recordList,
    );
  };

  renderDispatchesNow();
  renderRecordRowsNow();
  root.dataset.dispatchRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderPondDispatch(document);
}