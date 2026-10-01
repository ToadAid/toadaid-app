// Stage D-P23 — the collaborative multi-principal live read lane: the
// receiver records one collaborative-read session REQUEST over the held
// D-P15 live session — a request to read structural records jointly with
// the ONE declared counterpart of the D-P14 join; it admits nothing,
// creates no scope object and no membership registry (the recorded
// request + the declared join pair ARE the explicit scope and
// membership), crosses no scope, and grants nothing — and one
// collaborative live-read activation decision — the frozen D-P14
// structural spine (assessPondCollaborativeReadActivation +
// assessPondCollaborativeReadAdmission) re-run unchanged over the live
// receiver legs and the structural never-issued counterpart legs,
// riding a currently recorded request; the decision performs no record
// content read, no counterpart contact, no write, no send, no sign, and
// is consumed by nothing — beside a standing fail-closed
// claimed-collaborative wall refusing every claimed collaborative read
// result with zero echo (not even text this receiver itself composed).
// No record-content read, no joint read result, no consequence-bearing
// collaboration exists in app or law.
//
// What this module never does: no record content of any principal is
// read or stored; no ERC-8004 or other registry contact; no counterpart
// authentication, issuance, mapping, or activation claim; no scope
// object or membership registry; no Release; no memory, narrative, or
// transcript lane read; nothing persisted; the request, live-read, and
// wall rows present assessment values verbatim (textContent only).
//
// The records are session-scoped governance whose applicability the
// reassessment governs: both records re-assess honestly per call —
// unlike the D-P19 receipts (frozen at issuance, inspection-only), a
// confined record presents its reassessment's verbatim refusal.
//
// Contract code reaches this module only through the committed generated
// artifact (ui/generated/), never directly from src/.

import {
  assessPondCollaborativeReadSessionRequestDecision,
  assessPondCollaborativeReadLiveAdmissionDecision,
  assessPondClaimedCollaborativeReadRefusal,
  POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES,
  pondStageDP23CollaborativeReadSessionRequestTemplate,
  pondStageDP23CollaborativeLiveAdmissionTemplate,
  pondStageDP14CollaborativeActivationRecordTemplate,
  pondStageDP14CollaborativeAdmissionRecordTemplate,
  pondStageDP23CounterpartLegsBundle,
  pondStageDP23HealthyCounterpartJoinRecord,
} from "./generated/pond-stage-d-live-session-collaborative-read.js";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./generated/pond-stage-d-live-session.js";
import { heldLiveSessionRecords } from "./pond-live-session.js";

// ---------------------------------------------------------------------------
// Recorded collaborative-read lane records: module scope only. Each entry
// carries its record and its own recording facts beside the held entry's
// honest facts (no record content of any principal exists anywhere —
// nothing is read this cut). A refused record stores nothing.
// ---------------------------------------------------------------------------

const recordedCollaborativeReadRequestEntries = [];
const recordedCollaborativeLiveReadEntries = [];

// The counterpart legs bundle, the healthy join record, and the declared
// counterpart ref reach this module only through the generated artifact.
const counterpartJoinRecord = pondStageDP23HealthyCounterpartJoinRecord;
const counterpartLegsBundle = pondStageDP23CounterpartLegsBundle;
const counterpartPrincipalRef =
  counterpartJoinRecord.counterpartPrincipalRef;

// The receiver records one collaborative-read session request over the
// currently established, currently live D-P15 session — one per session.
// No index ride exists: the request's parent is the establishment + read
// gate + the declared join itself, so a second recording attempt carries
// the replayed basis and refuses at the basis check, storing nothing.
// The request input carries the 13 gate legs picked verbatim from the
// held session's leg set (spread BEFORE the retraction override) with
// the live legs (retraction, evaluation pair) assessed at recording
// time. No held session, a replayed attempt, or a refused assessment all
// refuse honestly and store nothing.
export const recordCollaborativeReadSessionRequest = ({
  collaborativeReadRequestedAtEpochMs,
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
  const collaborativeReadSessionRequest = Object.freeze({
    ...pondStageDP23CollaborativeReadSessionRequestTemplate,
    collaborativeReadRequestMetadata: Object.freeze({
      ...pondStageDP23CollaborativeReadSessionRequestTemplate
        .collaborativeReadRequestMetadata,
      collaborative_read_requested_at_epoch_ms:
        collaborativeReadRequestedAtEpochMs,
    }),
    principalRef: held.principalRef,
    counterpartPrincipalRef,
    collaborativeReadRequestBasis: recordedCollaborativeReadRequestEntries
      .length > 0
      ? "replayed_from_prior_collaborative_read_request"
      : "receiver_recorded_collaborative_read_session_request_not_inferred",
  });
  const input = Object.freeze({
    collaborativeReadSessionRequest,
    counterpartJoinDeclarationRecord: counterpartJoinRecord,
    receiverHeldPrincipalRef: held.principalRef,
    readGateRecord: held.readGateRecord,
    establishmentRecord: held.establishmentRecord,
    ...held.legs,
    receiverRetractionRecord: held.retractionRecord,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAgeMs,
  });
  const assessment = assessPondCollaborativeReadSessionRequestDecision(input);
  const recorded =
    assessment.collaborativeReadSessionRequestState ===
    "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read";
  if (recorded) {
    recordedCollaborativeReadRequestEntries.push(
      Object.freeze({
        input,
        collaborativeReadSessionRequest,
        collaborativeReadRequestedAtEpochMs,
      }),
    );
  }
  return Object.freeze({
    recorded,
    assessment,
  });
};

// The held collaborative-read-request entries, exposed read-only to the
// sibling live-read lane in this module. A refused request stores
// nothing and never appears here.
export const heldCollaborativeReadRequestEntries = () => {
  if (recordedCollaborativeReadRequestEntries.length === 0) {
    return Object.freeze({ held: false, entries: Object.freeze([]) });
  }
  return Object.freeze({
    held: true,
    entries: Object.freeze([...recordedCollaborativeReadRequestEntries]),
  });
};

// The receiver performs one collaborative live-read activation decision —
// the frozen D-P14 structural spine re-run over live receiver legs and
// the structural counterpart legs, riding a request whose re-run is
// currently recorded at the decision's own evaluation instant. The
// request's own input keys are re-declared only through the 26-key
// projection (the D-P21 riding-copy lesson — the pair carries the
// recorded request's own record and legs, never a re-derived set). An
// out-of-range request index, a replayed activation, or a refusal all
// refuse honestly and store nothing.
export const performCollaborativeLiveReadActivation = ({
  collaborativeReadRequestIndex,
  collaborativeLiveReadRecordedAtEpochMs,
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const requestHold = heldCollaborativeReadRequestEntries();
  const requestIndex =
    typeof collaborativeReadRequestIndex === "number" &&
    Number.isSafeInteger(collaborativeReadRequestIndex) &&
    collaborativeReadRequestIndex >= 0 &&
    collaborativeReadRequestIndex < requestHold.entries.length
      ? collaborativeReadRequestIndex
      : null;
  // Out-of-range request indexes refuse before any input exists — there
  // is no request for the activation to ride, so no assessment is
  // fabricated here.
  if (requestIndex === null) {
    return Object.freeze({
      recorded: false,
      assessment: null,
      refusalReason: "collaborative_read_request_index_out_of_range",
    });
  }
  const heldRequest = requestHold.entries[requestIndex];
  const replayed = recordedCollaborativeLiveReadEntries.some(
    (entry) => entry.collaborativeReadRequestIndex === requestIndex,
  );
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  // Without held live-session records the request re-run cannot be
  // performed or fabricated — the activation refuses and stores nothing.
  if (!held.held) {
    return Object.freeze({
      recorded: false,
      assessment: null,
      refusalReason: "live_session_records_not_held",
    });
  }
  const collaborativeReadLiveAdmission = Object.freeze({
    ...pondStageDP23CollaborativeLiveAdmissionTemplate,
    collaborativeLiveReadMetadata: Object.freeze({
      ...pondStageDP23CollaborativeLiveAdmissionTemplate
        .collaborativeLiveReadMetadata,
      collaborative_live_read_recorded_at_epoch_ms:
        collaborativeLiveReadRecordedAtEpochMs,
    }),
    receiverHeldPrincipalRef: held.principalRef,
    counterpartPrincipalRef,
    collaborativeLiveReadBasis: replayed
      ? "replayed_from_prior_collaborative_live_read"
      : "receiver_performed_collaborative_live_read_not_inferred",
  });
  // The D-P14-shaped spine records are re-timed from the frozen
  // templates: the activation's activated_at instant is the performed
  // live-read event time itself, and the admission rides the template's
  // declared 13-label table verbatim.
  const collaborativeActivationRecord = Object.freeze({
    ...pondStageDP14CollaborativeActivationRecordTemplate,
    activationMetadata: Object.freeze({
      ...pondStageDP14CollaborativeActivationRecordTemplate
        .activationMetadata,
      activated_at_epoch_ms: collaborativeLiveReadRecordedAtEpochMs,
    }),
  });
  const readAdmissionRecord = Object.freeze(
    pondStageDP14CollaborativeAdmissionRecordTemplate,
  );
  const input = Object.freeze({
    collaborativeReadLiveAdmission,
    receiverHeldPrincipalRef: held.principalRef,
    counterpartPrincipalRef,
    collaborativeReadSessionRequest: heldRequest.collaborativeReadSessionRequest,
    counterpartJoinDeclarationRecord: counterpartJoinRecord,
    collaborativeActivationRecord,
    readAdmissionRecord,
    readGateRecord: held.readGateRecord,
    establishmentRecord: held.establishmentRecord,
    ...held.legs,
    receiverRetractionRecord: held.retractionRecord,
    ...counterpartLegsBundle,
    evaluatedAtEpochMs,
    maximumAgeMs,
  });
  const assessment = assessPondCollaborativeReadLiveAdmissionDecision(input);
  const recorded =
    assessment.collaborativeLiveReadState ===
    "collaborative_live_structural_records_read_admitted_session_scoped_no_scope_object_no_content";
  if (recorded) {
    recordedCollaborativeLiveReadEntries.push(
      Object.freeze({
        input,
        collaborativeReadLiveAdmission,
        collaborativeReadRequestIndex: requestIndex,
        collaborativeLiveReadRecordedAtEpochMs,
        recordedAdmittedTargetRefs: assessment.recordedAdmittedTargetRefs,
      }),
    );
  }
  return Object.freeze({
    recorded,
    assessment,
  });
};

// The held collaborative live-read entries, exposed read-only. A refused
// activation stores nothing and never appears here.
export const heldCollaborativeLiveReadEntries = () => {
  if (recordedCollaborativeLiveReadEntries.length === 0) {
    return Object.freeze({ held: false, entries: Object.freeze([]) });
  }
  return Object.freeze({
    held: true,
    entries: Object.freeze([...recordedCollaborativeLiveReadEntries]),
  });
};

// The collaborative-read posture: the recorded records re-assess honestly
// per call (the deliberate contrast with the D-P19 receipts'
// frozen-at-issuance presentation) — while the underlying records ride a
// currently live session, the records stand; once the session has ended
// or the reassessment refuses, the row presents the reassessment's
// verbatim refusal. Staleness never deletes a record; it just stops
// being live governance.
export const currentCollaborativeReadPosture = ({
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  const retractionRecord = held.held ? held.retractionRecord : null;
  const requestHonestLegs = {
    receiverRetractionRecord: retractionRecord,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAgeMs,
  };
  const liveReadHonestLegs = {
    receiverRetractionRecord: retractionRecord,
    evaluatedAtEpochMs,
    maximumAgeMs,
  };
  const requests = recordedCollaborativeReadRequestEntries.map((entry) => {
    const reassessment = assessPondCollaborativeReadSessionRequestDecision({
      ...entry.input,
      ...requestHonestLegs,
    });
    const stillInSession =
      reassessment.collaborativeReadSessionRequestState ===
      "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read";
    return Object.freeze({
      collaborativeReadSessionRequest: entry.collaborativeReadSessionRequest,
      collaborativeReadRequestedAtEpochMs:
        entry.collaborativeReadRequestedAtEpochMs,
      presentationMark: stillInSession
        ? "in_session"
        : "confined_reassessment_refusal",
      reassessmentReason: reassessment.reason,
    });
  });
  const liveReads = recordedCollaborativeLiveReadEntries.map((entry) => {
    const reassessment = assessPondCollaborativeReadLiveAdmissionDecision({
      ...entry.input,
      ...liveReadHonestLegs,
    });
    const stillInSession =
      reassessment.collaborativeLiveReadState ===
      "collaborative_live_structural_records_read_admitted_session_scoped_no_scope_object_no_content";
    return Object.freeze({
      collaborativeReadLiveAdmission: entry.collaborativeReadLiveAdmission,
      recordedAdmittedTargetRefs: reassessment.recordedAdmittedTargetRefs,
      collaborativeReadRequestIndex: entry.collaborativeReadRequestIndex,
      collaborativeLiveReadRecordedAtEpochMs:
        entry.collaborativeLiveReadRecordedAtEpochMs,
      presentationMark: stillInSession
        ? "in_session"
        : "confined_reassessment_refusal",
      reassessmentReason: reassessment.reason,
    });
  });
  return Object.freeze({
    held: requests.length > 0 || liveReads.length > 0,
    requests,
    liveReads,
  });
};

// The standing claimed-collaborative wall posture: evaluated against a
// sample claim so the rendered panel presents the wall's own verified
// refusal posture verbatim rather than restated prose. The wall holds no
// module state here, stores nothing, and echoes nothing about any claim
// (not even text this receiver itself composed); no affordance exists,
// because nothing can be offered.
export const currentClaimedCollaborativeReadWallPosture = () => {
  const sample = assessPondClaimedCollaborativeReadRefusal({
    claimedCollaborativeRead: {
      claimedCollaborativeReadText:
        "sample claimed collaborative read result is never echoed or stored",
      claimedCollaborativeReadClass: "joint_collaborative_read_content",
      claimedCollaborativeReadSourceRef:
        "counterpart:sample:claimed-collaborative-read-never-echoed",
    },
  });
  return Object.freeze({
    reason: sample.reason,
    claimedCollaborativeReadState: sample.claimedCollaborativeReadState,
    declaredClaimCollaborativeReadClasses:
      POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES,
  });
};

// ---------------------------------------------------------------------------
// Rendering: textContent only, refusal-first, verbatim assessment values.
// The request rows present the recorded facts verbatim with the honest
// reassessment mark; the request affordance is offered only while the
// held session's read gate re-runs currently live-activated at the live
// evaluation time and no request is recorded yet (one per session). The
// claimed-collaborative wall panel is static prose — no wall affordance
// exists, because nothing can be offered.
// ---------------------------------------------------------------------------

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const factsList = (documentRef, facts) => {
  const list = documentRef.createElement("dl");
  list.className = "collab-read-facts";
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
    ? "collaborative read record · session-scoped governance"
    : `collaborative read record confined — ${reassessmentReason}`;

export const renderPondCollaborativeRead = (documentRef = globalThis.document) => {
  if (!documentRef) return false;

  const root = documentRef.querySelector("[data-collab-read-note]");
  const statusTarget = documentRef.querySelector("[data-collab-read-status]");
  const listTarget = documentRef.querySelector("[data-collab-read-list]");
  const wallTarget = documentRef.querySelector("[data-collab-read-wall]");
  if (!root || !statusTarget || !listTarget || !wallTarget) return false;

  const nowMs = Date.now();
  const collabHold = currentCollaborativeReadPosture({
    evaluatedAtEpochMs: nowMs,
  });
  const wallPosture = currentClaimedCollaborativeReadWallPosture();

  const recordList = documentRef.createElement("div");
  recordList.className = "collab-read-list";
  collabHold.requests.forEach((row) => {
    const item = documentRef.createElement("div");
    item.className = "collab-read-record";
    item.append(
      text(
        documentRef,
        "p",
        "collab-read-record-verdict",
        presentationLabel(row.presentationMark, row.reassessmentReason),
      ),
      factsList(documentRef, [
        ["Basis", row.collaborativeReadSessionRequest.collaborativeReadRequestBasis],
        [
          "Requested at",
          row.collaborativeReadSessionRequest.collaborativeReadRequestMetadata
            .collaborative_read_requested_at_epoch_ms,
        ],
        [
          "Lane posture",
          row.collaborativeReadSessionRequest.collaborativeRequestLanePosture,
        ],
        [
          "Audience posture",
          row.collaborativeReadSessionRequest.collaborativeRequestAudiencePosture,
        ],
        [
          "Scope posture",
          row.collaborativeReadSessionRequest.collaborativeRequestScopePosture,
        ],
        [
          "Personal-state posture",
          row.collaborativeReadSessionRequest.collaborativeRequestPersonalStatePosture,
        ],
        [
          "Counterpart identity posture",
          row.collaborativeReadSessionRequest.counterpartIdentityPosture,
        ],
        [
          "Memory-lane exclusion",
          row.collaborativeReadSessionRequest.memoryLaneExclusionPosture,
        ],
        [
          "Request consumption",
          row.collaborativeReadSessionRequest.collaborativeReadRequestMetadata
            .currentness_posture,
        ],
        ["Authority", row.collaborativeReadSessionRequest.authority],
      ]),
    );
    recordList.append(item);
  });
  if (collabHold.requests.length === 0) {
    recordList.append(
      text(
        documentRef,
        "p",
        "cockpit-note",
        "No collaborative read request recorded — recording one requires a currently live session whose read gate re-runs live-activated. The counterpart stays structural never-issued; no record content is read this cut.",
      ),
    );
  }

  collabHold.liveReads.forEach((row) => {
    const item = documentRef.createElement("div");
    item.className = "collab-read-record";
    item.append(
      text(
        documentRef,
        "p",
        "collab-read-record-verdict",
        presentationLabel(row.presentationMark, row.reassessmentReason),
      ),
      factsList(documentRef, [
        [
          "Admitted targets",
          `${row.recordedAdmittedTargetRefs.length} structural record labels`,
        ],
        ["Live-read basis", row.collaborativeReadLiveAdmission.collaborativeLiveReadBasis],
        [
          "Recorded at",
          row.collaborativeReadLiveAdmission.collaborativeLiveReadMetadata
            .collaborative_live_read_recorded_at_epoch_ms,
        ],
        [
          "Requested scope",
          row.collaborativeReadLiveAdmission.requestedCollaborativeReadScope,
        ],
        [
          "Audience binding",
          row.collaborativeReadLiveAdmission.audienceBindingPosture,
        ],
        [
          "Counterpart chain posture",
          row.collaborativeReadLiveAdmission.counterpartChainPosture,
        ],
        [
          "Scope crossing",
          row.collaborativeReadLiveAdmission.scopeCrossingPosture,
        ],
        [
          "Scope object posture",
          row.collaborativeReadLiveAdmission.scopeObjectPosture,
        ],
        ["Truth posture", row.collaborativeReadLiveAdmission.truthPosture],
        [
          "ERC-8004 evidence posture",
          row.collaborativeReadLiveAdmission.erc8004EvidencePosture,
        ],
        [
          "Activation consumption",
          row.collaborativeReadLiveAdmission.collaborativeLiveReadMetadata
            .currentness_posture,
        ],
        ["Authority", row.collaborativeReadLiveAdmission.authority],
      ]),
    );
    recordList.append(item);
  });

  // The collaborative-read-request affordance rides the held session: one
  // request per session, offered only while the held session's read gate
  // re-runs currently live-activated at the live evaluation time and no
  // request is recorded yet. A replayed attempt presents inspection-only
  // honest refusal text.
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs: nowMs });
  if (held.held) {
    const candidateRequest = Object.freeze({
      ...pondStageDP23CollaborativeReadSessionRequestTemplate,
      collaborativeReadRequestMetadata: Object.freeze({
        ...pondStageDP23CollaborativeReadSessionRequestTemplate
          .collaborativeReadRequestMetadata,
        collaborative_read_requested_at_epoch_ms: nowMs,
      }),
      principalRef: held.principalRef,
      counterpartPrincipalRef,
    });
    const reassessment = assessPondCollaborativeReadSessionRequestDecision({
      collaborativeReadSessionRequest: candidateRequest,
      counterpartJoinDeclarationRecord: counterpartJoinRecord,
      receiverHeldPrincipalRef: held.principalRef,
      readGateRecord: held.readGateRecord,
      establishmentRecord: held.establishmentRecord,
      ...held.legs,
      receiverRetractionRecord: held.retractionRecord,
      receiverEvaluatedAtEpochMs: nowMs,
      receiverMaximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
    });
    const requestable =
      reassessment.collaborativeReadSessionRequestState ===
      "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read";
    const alreadyRequested = collabHold.requests.length > 0;
    const item = documentRef.createElement("div");
    item.className = "collab-read-record";
    const affordance = documentRef.createElement("button");
    affordance.type = "button";
    affordance.className = "collab-read-affordance";
    affordance.setAttribute("data-collab-read-record-request", "true");
    if (!alreadyRequested && requestable) {
      affordance.textContent =
        "Record collaborative read request · declares the counterpart, admits nothing";
      affordance.addEventListener("click", () => {
        const recordNow = Date.now();
        const result = recordCollaborativeReadSessionRequest({
          collaborativeReadRequestedAtEpochMs: recordNow,
          evaluatedAtEpochMs: recordNow,
        });
        if (!result.recorded) {
          // Nothing stored — the honest refusal is the whole update.
          statusTarget.replaceChildren(
            text(
              documentRef,
              "p",
              "cockpit-note",
              `Collaborative read request refused — ${result.refusalReason ?? result.assessment.reason}. Refused requests store nothing.`,
            ),
          );
          return;
        }
        // The posture rows re-assess honestly per render: the whole
        // render re-runs, the list stays index-paired, and the new row
        // presents its reassessment honestly.
        renderPondCollaborativeRead(documentRef);
      });
    } else if (alreadyRequested) {
      affordance.disabled = true;
      affordance.textContent =
        "Recorded — reuse refused as a replayed request";
      affordance.setAttribute("data-collab-read-refused-replay", "true");
    } else {
      affordance.disabled = true;
      affordance.textContent = `Request not admissible — ${reassessment.reason}`;
      affordance.setAttribute("data-collab-read-refused-entry", "true");
    }
    item.append(affordance);
    recordList.append(item);
  }

  // The live-read-activation affordances ride the recorded request rows:
  // one activation per request, offered only while the request's re-run
  // is still currently recorded at the live evaluation time and not yet
  // activated. Replayed and confining requests present inspection-only
  // honest refusal text; the activation performs no record-content read,
  // no counterpart contact, and no write, send, or sign.
  const requestHold = heldCollaborativeReadRequestEntries();
  const activatedIndexes = new Set(
    collabHold.liveReads.map((row) => row.collaborativeReadRequestIndex),
  );
  requestHold.entries.forEach((requestEntry, index) => {
    const activated = activatedIndexes.has(index);
    const held2 = heldLiveSessionRecords({ evaluatedAtEpochMs: nowMs });
    const reassessment = assessPondCollaborativeReadSessionRequestDecision({
      ...requestEntry.input,
      receiverRetractionRecord: held2.retractionRecord,
      receiverEvaluatedAtEpochMs: nowMs,
      receiverMaximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
    });
    const activatable =
      reassessment.collaborativeReadSessionRequestState ===
      "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read";
    const item = documentRef.createElement("div");
    item.className = "collab-read-record";
    const affordance = documentRef.createElement("button");
    affordance.type = "button";
    affordance.className = "collab-read-affordance";
    affordance.setAttribute("data-collab-read-perform-activation", "true");
    if (!activated && activatable) {
      affordance.textContent =
        "Perform collaborative read activation · structural postures only, no content";
      affordance.addEventListener("click", () => {
        const recordNow = Date.now();
        const result = performCollaborativeLiveReadActivation({
          collaborativeReadRequestIndex: index,
          collaborativeLiveReadRecordedAtEpochMs: recordNow,
          evaluatedAtEpochMs: recordNow,
        });
        if (!result.recorded) {
          // Nothing stored — the honest refusal is the whole update.
          statusTarget.replaceChildren(
            text(
              documentRef,
              "p",
              "cockpit-note",
              `Collaborative read activation refused — ${result.refusalReason ?? result.assessment.reason}. Refused activations store nothing and perform no record-content read, no counterpart contact, and no write, send, or sign.`,
            ),
          );
          return;
        }
        renderPondCollaborativeRead(documentRef);
      });
    } else if (activated) {
      affordance.disabled = true;
      affordance.textContent =
        "Performed — reuse refused as a replayed activation";
      affordance.setAttribute("data-collab-read-refused-replay", "true");
    } else {
      affordance.disabled = true;
      affordance.textContent = `Activation not admissible — ${reassessment.reason}`;
      affordance.setAttribute("data-collab-read-refused-entry", "true");
    }
    item.append(affordance);
    recordList.append(item);
  });

  // The standing claimed-collaborative wall panel: static prose with no
  // affordance — every claimed collaborative read result refuses, so the
  // panel can never offer anything. The wall's own verified standing
  // refusal posture is presented verbatim into the static
  // [data-collab-read-wall] anchor; nothing about any claim is echoed
  // (not even text this receiver itself composed).
  wallTarget.className = "collab-read-wall";
  wallTarget.setAttribute(
    "data-collab-read-wall-presented",
    String(
      wallPosture.claimedCollaborativeReadState ===
        "claimed_collaborative_read_content_not_composed",
    ),
  );
  wallTarget.replaceChildren(
    text(
      documentRef,
      "p",
      "collab-read-wall-verdict",
      `Claimed-collaborative wall · ${wallPosture.reason}`,
    ),
    factsList(documentRef, [
      ["Claimed-collaborative state", wallPosture.claimedCollaborativeReadState],
      [
        "Declared claim content classes",
        wallPosture.declaredClaimCollaborativeReadClasses.join(", "),
      ],
      [
        "Wall posture",
        "standing fail-closed — no collaborative read result exists this cut: no record content of any principal is read, the counterpart is structural never-issued with no live counterpart chain, and no joint read is composable; no claimed read-result text, source, or class is echoed or stored; a refusal stores nothing",
      ],
    ]),
  );

  listTarget.replaceChildren(recordList);

  const renderPondCollaborativeReadNow = () => {
    const liveHold = currentCollaborativeReadPosture({
      evaluatedAtEpochMs: Date.now(),
    });
    statusTarget.replaceChildren(
      text(
        documentRef,
        "p",
        "cockpit-note",
        `Collaborative read posture · ${liveHold.requests.length} recorded collaborative read request${liveHold.requests.length === 1 ? "" : "s"} · ${liveHold.liveReads.length} collaborative live-read activation${liveHold.liveReads.length === 1 ? "" : "s"} · re-assessed honestly — a record stands while its underlying record rides a currently live session, confines verbatim otherwise; the lane reads no record content of any principal, crosses no scope, and composes nothing`,
      ),
    );
  };
  root.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      "The collaborative read lane lays the runway: the receiver records one collaborative read request over the live session (the exact declared counterpart pair, no scope object, no membership registry, and nothing admitted), performs one collaborative live-read activation over it (the frozen structural spine re-run over live receiver legs and the structural counterpart — structural presence only, no content), and the standing claimed-collaborative wall refuses every claimed read result — no record-content read, no live counterpart, no joint read result exists here.",
    ),
  );
  renderPondCollaborativeReadNow();
  root.dataset.collabReadRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderPondCollaborativeRead(document);
}