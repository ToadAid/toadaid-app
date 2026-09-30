// Stage D-P16 — the conversation lane: the receiver composes messages to
// declared specialist agents inside the live D-P15 session, and every
// composition is recorded as a session-scoped conversation-context record
// assessed by the frozen record-admission ceremony — real text, real
// provenance, real trust epoch, and every refusal a mapped cause. Beside
// each recorded message the surface presents the addressed agent's live
// structural posture re-run from the receiver's own D-P0/D-P12 frozen
// records — a reflection of held facts, no memory lane, no record read.
//
// What this module never does: nothing is delivered, dispatched, or
// replied — agent reply composition has no runtime in app or law and
// delivery is its own later lane (a message may inform; a message does
// not authorize a consequence). Nothing is persisted — the recorded
// compositions live exactly as long as this shell process in module
// state, are assessed on every render at the supplied evaluation time,
// and where the session has ended (retraction, expiry, refusal) they
// present inspection-only with honest trust marks. Composed prose grants
// no authority, no membership, no room presence, no scope; no promotion
// to canonical memory or verified evidence happens here; no secret
// material is carried and no composed text ever enters an assessment
// record. Contract code reaches this module only through the committed
// generated artifact (ui/generated/), never directly from src/.

import {
  POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS,
  POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS,
  assessPondConversationRecordAdmission,
  assessPondConversationSurfacePosture,
  pondStageDP13DeskPresenceProjection,
  pondStageDP13DeskSourceContractFixture,
  pondStageDP13ForgeBindingRecord,
  pondStageDP13ModeDeclarationRecord,
  pondStageDP16ConversationRecordTemplate,
  pondStageDP16ConversationSurfaceTemplate,
  stageDP0Agent0Ref,
  stageDP0LocalPrincipalRef,
} from "./generated/pond-stage-d-live-session-conversation.js";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./generated/pond-stage-d-live-session.js";
import { heldLiveSessionRecords } from "./pond-live-session.js";

// ---------------------------------------------------------------------------
// Recorded conversation state: module scope only. Each entry carries the
// full admission input the surface re-runs (the assessments never carry
// the composed text — the text is kept beside the entry in shell state
// only, never persisted, never transported) plus the honest composition
// facts. A refused composition stores nothing.
// ---------------------------------------------------------------------------

const recordedConversationEntries = [];

const conversationRecordOf = ({
  composedText,
  addressedAgentRef,
  composedAtEpochMs,
}) =>
  Object.freeze({
    ...pondStageDP16ConversationRecordTemplate,
    composedRecordText: composedText,
    addressedAgentRef,
    conversationRecordMetadata: Object.freeze({
      ...pondStageDP16ConversationRecordTemplate
        .conversationRecordMetadata,
      composed_at_epoch_ms: composedAtEpochMs,
    }),
  });

const conversationAdmissionInputOf = ({
  conversationRecord,
  held,
  evaluatedAtEpochMs,
  maximumAgeMs,
}) =>
  Object.freeze({
    conversationRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
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

// The receiver composed text into the live session: the frozen admission
// ceremony assesses it over the held session records and a refused
// composition stores nothing. The composed text itself is validated and
// classified by the assessor — this wiring never pre-filters a refusal.
export const recordConversationComposedText = ({
  composedText,
  addressedAgentRef,
  composedAtEpochMs,
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  const conversationRecord = conversationRecordOf({
    composedText,
    addressedAgentRef,
    composedAtEpochMs,
  });
  const input = conversationAdmissionInputOf({
    conversationRecord,
    held,
    evaluatedAtEpochMs,
    maximumAgeMs,
  });
  const assessment = assessPondConversationRecordAdmission(input);
  const admitted =
    assessment.conversationRecordState ===
    "conversation_record_admitted_session_scoped_no_delivery";
  if (admitted) {
    recordedConversationEntries.push(
      Object.freeze({
        input,
        composedText,
        addressedAgentRef,
        composedAtEpochMs,
      }),
    );
  }
  return Object.freeze({
    recorded: admitted,
    assessment,
  });
};

// The presentation trust marks, rendered verbatim from the surface
// assessment's per-record entries.
const trustMarkLabels = {
  in_session_verified_boundary_session_scoped:
    "in session · verified boundary · session-scoped",
  out_of_session_untrusted_epoch_inspection_only_never_consumer_admissible:
    "out of session · untrusted epoch · inspection only · never consumer admissible",
  out_of_session_record_not_admissible:
    "out of session · record not admissible",
};

const agentPostureLabels = {
  addressed_agent_structural_posture_presented:
    "presented from the receiver's own records",
  addressed_agent_structural_posture_refused_no_declared_mode_structural_record:
    "refused — no declared-mode structural record",
};

// The conversation surface posture, re-run on every call from the recorded
// entries and the held session records at the supplied evaluation time.
// Where the session has ended every re-run refuses and the shape-valid
// held records present inspection-only — staleness and retraction are
// always the honest verdict, never a canned surface.
export const currentConversationSurfacePosture = ({
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  const conversationRecordInputs = recordedConversationEntries.map(
    (entry) => entry.input,
  );
  const input = Object.freeze({
    conversationSurfaceRecord: pondStageDP16ConversationSurfaceTemplate,
    conversationRecordInputs,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    receiverHeldAgentRef: stageDP0Agent0Ref,
    forgeBindingRecord: pondStageDP13ForgeBindingRecord,
    modeDeclarationRecord: pondStageDP13ModeDeclarationRecord,
    deskSourceContractFixture: pondStageDP13DeskSourceContractFixture,
    deskPresenceProjection: pondStageDP13DeskPresenceProjection,
    readGateRecord: held.held ? held.readGateRecord : null,
    establishmentRecord: held.held ? held.establishmentRecord : null,
    dp5CeremonyRecord: held.held ? held.legs.dp5CeremonyRecord : null,
    dp6ObservationRecord: held.held ? held.legs.dp6ObservationRecord : null,
    dp8VerifierRecord: held.held ? held.legs.dp8VerifierRecord : null,
    dp8ProofRecord: held.held ? held.legs.dp8ProofRecord : null,
    dp9IssuanceRecord: held.held ? held.legs.dp9IssuanceRecord : null,
    dp9MappingRecord: held.held ? held.legs.dp9MappingRecord : null,
    dp10ActivationRecord: held.held ? held.legs.dp10ActivationRecord : null,
    receiverRetractionRecord: held.held ? held.retractionRecord : null,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAgeMs,
  });
  const assessment = assessPondConversationSurfacePosture(input);
  const textOf = (index) =>
    index >= 0 && index < recordedConversationEntries.length
      ? recordedConversationEntries[index].composedText
      : null;
  return Object.freeze({
    assessment,
    recordTexts: recordedConversationEntries.map((entry, index) =>
      Object.freeze({
        composedText: textOf(index),
        addressedAgentRef: recordedConversationEntries[index].addressedAgentRef,
      }),
    ),
    maximumComposedTextCharacters: POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS,
  });
};

// ---------------------------------------------------------------------------
// Rendering: textContent only, refusal-first, verbatim assessment values.
// The Send handler reads and immediately wipes the textarea — the composed
// value never lingers in the surface tree. The initial render is the
// honest current posture.
// ---------------------------------------------------------------------------

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const factsList = (documentRef, facts) => {
  const list = documentRef.createElement("dl");
  list.className = "conversation-facts";
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

const renderNotEstablishedPosture = (documentRef, statusTarget) => {
  statusTarget.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      "Conversation not recorded — recording composes into the live session only. Establish the receiver-owned live session first; refused compositions store nothing.",
    ),
  );
};

const renderRecordEntry = (documentRef, entry) => {
  const item = documentRef.createElement("div");
  item.className = "conversation-record";
  item.append(
    text(documentRef, "p", "conversation-record-address", entry.addressedAgentRef),
    text(documentRef, "p", "conversation-record-text", entry.composedText),
    factsList(documentRef, [
      ["Trust mark", entry.trustMark],
      ["Reason", entry.reason],
      ["State", entry.state],
      ["Composed", entry.composedAtEpochMs],
    ]),
  );
  return item;
};

const renderAgentPostureEntry = (documentRef, echo) => {
  const item = documentRef.createElement("div");
  item.className = "conversation-posture";
  item.append(
    text(documentRef, "p", "conversation-posture-address", echo.presentationAgentRef),
    factsList(documentRef, [
      ["Posture", echo.posture],
      ["Routing state", echo.routingState],
      ["Routing reason", echo.routingReason],
      ["Declared profile", echo.declaredProfile],
      ["Desk agent join", echo.deskAgentJoinState],
      ["Declaration freshness", `${echo.declarationFreshnessDiagnosis.state} · ${echo.declarationFreshnessDiagnosis.reason} · age ${echo.declarationFreshnessDiagnosis.observationAgeMs}ms`],
    ]),
  );
  return item;
};

const renderSurface = (documentRef, surfaceTarget, run) => {
  const assessment = run.assessment;
  const scopeEnded =
    assessment.conversationSurfaceState ===
    "conversation_surface_scope_ended_records_inspection_only";
  const presented =
    assessment.conversationSurfaceState ===
    "live_session_conversation_surface_presented";
  const children = [
    text(documentRef, "p", "cockpit-note", `Conversation surface · ${assessment.conversationSurfaceState}`),
    factsList(documentRef, [
      ["Reason", assessment.reason],
      ["Session", assessment.mappedEstablishmentState],
      ["Read gate", `${assessment.mappedReadGateState} · ${assessment.mappedReadGateReason}`],
      [
        "Gate freshness",
        `${assessment.mappedReadGateFreshnessDiagnosis.state} · age ${assessment.mappedReadGateFreshnessDiagnosis.observationAgeMs}ms`,
      ],
      ["Authority", assessment.authority],
      ["Delivers or dispatches", assessment.surfaceEstablishesDeliveryOrDispatch],
      ["Composes agent replies", assessment.surfaceEstablishesAgentReplyComposition],
      ["Persists or promotes records", assessment.surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence],
    ]),
  ];
  if (scopeEnded) {
    children.push(
      text(
        documentRef,
        "p",
        "cockpit-note",
        "Session ended — the recorded compositions are confined out of session: preserved for inspection with their honest trust marks, excluded from every consumer, never admitted anywhere.",
      ),
    );
  }
  const recordList = documentRef.createElement("div");
  recordList.className = "conversation-record-list";
  run.recordTexts.forEach((recordEntry, index) => {
    const surfaceEntry = assessment.recordEntries[index];
    if (!surfaceEntry) return;
    recordList.append(
      renderRecordEntry(documentRef, {
        composedText: recordEntry.composedText,
        addressedAgentRef: recordEntry.addressedAgentRef,
        trustMark: trustMarkLabels[surfaceEntry.presentationTrustMark] ||
          surfaceEntry.presentationTrustMark,
        reason: surfaceEntry.echoedRecordReason,
        state: surfaceEntry.echoedRecordState,
        composedAtEpochMs: recordedConversationEntries[index]?.composedAtEpochMs ?? null,
      }),
    );
  });
  children.push(recordList);
  const postureList = documentRef.createElement("div");
  postureList.className = "conversation-posture-list";
  for (const echo of assessment.agentPostureEchoes) {
    postureList.append(
      renderAgentPostureEntry(documentRef, {
        presentationAgentRef: echo.presentationAgentRef,
        posture: agentPostureLabels[echo.presentedAgentPosture] ||
          echo.presentedAgentPosture,
        routingState: echo.echoedRoutingState,
        routingReason: echo.echoedRoutingReason,
        declaredProfile: echo.echoedDeclaredProfile,
        deskAgentJoinState: echo.echoedDeskAgentJoinState,
        declarationFreshnessDiagnosis: echo.echoedDeclarationFreshnessDiagnosis,
      }),
    );
  }
  children.push(postureList);
  children.push(
    text(
      documentRef,
      "p",
      "cockpit-note",
      "Compositions inform only — nothing is delivered or dispatched, agents do not reply from here, nothing persists, and composed prose grants no authority, membership, capability, or room presence. A projection of held records re-assessed on every render, never canonical state.",
    ),
  );
  surfaceTarget.replaceChildren(...children);
};

const renderPosture = (documentRef, statusTarget, surfaceTarget, run) => {
  const assessment = run.assessment;
  if (
    assessment.conversationSurfaceState ===
      "live_session_conversation_surface_presented" ||
    assessment.conversationSurfaceState ===
      "conversation_surface_scope_ended_records_inspection_only"
  ) {
    renderSurface(documentRef, surfaceTarget, run);
    statusTarget.replaceChildren(
      text(
        documentRef,
        "p",
        "cockpit-note",
        `Conversation surface re-assessed · ${assessment.conversationSurfaceState} · ${assessment.reason}`,
      ),
    );
    return;
  }
  surfaceTarget.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      "Conversation surface not presented — the live session is not established, fresh, or still open.",
    ),
    factsList(documentRef, [
      ["Reason", assessment.reason],
      ["Session", assessment.mappedEstablishmentState],
      ["Read gate", assessment.mappedReadGateState],
      ["Authority", assessment.authority],
    ]),
  );
  statusTarget.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      `Conversation surface not presented · ${assessment.conversationSurfaceState} · ${assessment.reason}`,
    ),
  );
};

export const renderPondConversation = (documentRef = globalThis.document) => {
  if (!documentRef) return false;

  const root = documentRef.querySelector("[data-conversation]");
  const addressSelect = documentRef.querySelector(
    "[data-conversation-address]",
  );
  const messageInput = documentRef.querySelector(
    "[data-conversation-composed-text]",
  );
  const sendButton = documentRef.querySelector("[data-conversation-send]");
  const statusTarget = documentRef.querySelector("[data-conversation-status]");
  const surfaceTarget = documentRef.querySelector(
    "[data-conversation-surface]",
  );
  if (
    !root || !addressSelect || !messageInput || !sendButton || !statusTarget ||
    !surfaceTarget
  ) {
    return false;
  }

  // The addressed-agent select fills deterministically from the frozen
  // declared vocabulary received through the bundle — one option per
  // declared specialist agent ref, no shell-authored values.
  addressSelect.replaceChildren(
    ...POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS.map((agentRef) => {
      const option = documentRef.createElement("option");
      option.value = agentRef;
      option.textContent = agentRef;
      return option;
    }),
  );
  messageInput.maxLength = POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS;

  const renderSurfaceNow = () => {
    const run = currentConversationSurfacePosture({
      evaluatedAtEpochMs: Date.now(),
    });
    renderPosture(documentRef, statusTarget, surfaceTarget, run);
  };

  sendButton.addEventListener("click", () => {
    const composedText = String(messageInput.value);
    messageInput.value = "";
    if (composedText.length === 0) {
      statusTarget.replaceChildren(
        text(
          documentRef,
          "p",
          "cockpit-note",
          "Refused — an empty composition has nothing to record.",
        ),
      );
      return;
    }
    const nowMs = Date.now();
    const recorded = recordConversationComposedText({
      composedText,
      addressedAgentRef: String(
        addressSelect.selectedOptions[0]?.value ?? addressSelect.value,
      ),
      composedAtEpochMs: nowMs,
      evaluatedAtEpochMs: nowMs,
    });
    if (!recorded.recorded) {
      statusTarget.replaceChildren(
        text(
          documentRef,
          "p",
          "cockpit-note",
          `Composition not recorded — ${recorded.assessment.reason}. Refused compositions store nothing.`,
        ),
      );
    } else {
      statusTarget.replaceChildren(
        text(
          documentRef,
          "p",
          "cockpit-note",
          `Recorded session-scoped · ${recorded.assessment.reason} — informed, not delivered; no agent reply; not persisted.`,
        ),
      );
    }
    renderSurfaceNow();
  });

  // The initial render is the honest current posture at the current
  // clock — staleness, retraction, and scope end are the verdict this
  // render shows.
  const initialRun = currentConversationSurfacePosture({
    evaluatedAtEpochMs: Date.now(),
  });
  renderPosture(documentRef, statusTarget, surfaceTarget, initialRun);
  root.dataset.conversationRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderPondConversation(document);
}