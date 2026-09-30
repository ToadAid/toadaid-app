// Stage D-P15 — live session lane: the receiver-performed local
// authentication becomes the live, session-scoped, restart-expiring,
// retractable session the desktop shell runs behind, and the session-scoped
// single-principal structural-read gate opens only over it. The shell
// performs the whole receiver cycle itself — enroll (D-P8 module), observe,
// challenge round, establish — and every leg record is built right here,
// carrying only shell-vocabulary posture literals plus timestamps and
// digests, never any operator-authored content and never any secret
// material (the supplied value is hashed and discarded; only its salt-bound
// digest ever enters a record). The frozen D-P15 assessors re-run the whole
// frozen chain — D-P5 ceremony, D-P6 observation, D-P8 mechanic, D-P9
// issuance and mapping, and the frozen D-P10 private-read activation — and
// refuse with mapped causes on every break. The session stays strictly
// receiver-owned: this is the shared presentation frame for all of our
// agents, but agents gain no session, no secret, and no admission, scopes
// do not collapse, and the memory/narrative lanes stay excluded. Retraction
// is a receiver action: a retracted session refuses regardless of how fresh
// its legs once were. The current posture is re-assessed on every render
// from the held records and the supplied evaluation time, so staleness and
// expiry are always the honest verdict — a projection of the held fact,
// never canonical state. No grant, membership, admission, credential,
// PrincipalId authorization, memory content, current truth, write, send,
// or sign; authority stays `none`; contract code reaches this module only
// through the committed generated artifact (ui/generated/), never directly
// from src/.

import {
  POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
  assessPondLiveSessionEstablishment,
  assessPondLiveSessionReadGate,
  pondStageDP10ActivationRecordTemplate,
  pondStageDP9IssuanceRecord,
  pondStageDP9MappingRecord,
  stageDP0Agent0Ref,
  stageDP0LocalPrincipalRef,
} from "./generated/pond-stage-d-live-session.js";
import {
  computeSecretDigestHex,
  enrolledLocalVerifierSnapshot,
  observeLocalAuthenticationEvent,
  runLocalAuthenticationChallengeRound,
} from "./pond-local-authentication.js";

// ---------------------------------------------------------------------------
// Runtime receiver-recorded leg records. The D-P9 issuance and mapping
// records are received verbatim from the frozen fixtures through the
// generated bundle — never restated here. The D-P10 activation record is
// built fresh at establishment time by re-timing the frozen template; the
// basis literals are the positive receiver-performed ones — the frozen
// assessors re-inspect them on every assessment and refuse with mapped
// causes on any break.
// ---------------------------------------------------------------------------

const bindingCeremonyRecordOf = () =>
  Object.freeze({
    contractVersion: "pond-local-principal-binding-establishment-d-p5",
    kind: "pond-local-principal-binding-establishment",
    principalRef: stageDP0LocalPrincipalRef,
    bindingBasis: "receiver_owned_explicit_binding",
    authenticationObservation: "receiver_observed_local_authentication",
    identitySeparationPosture:
      "receiver_verified_agent_identity_distinct_from_principal",
    memoryLaneExclusionPosture:
      "binding_excludes_memory_narrative_transcript_lanes",
    authorityPosture: "binding_grants_no_authority_membership_or_capability",
    revocabilityPosture:
      "binding_revocable_independently_of_transport_provider_or_registry",
    authenticationPosture: "fixture_structural_only_no_real_authentication",
    authority: "none",
  });

const activationRecordOf = (activatedAtEpochMs) =>
  Object.freeze({
    ...pondStageDP10ActivationRecordTemplate,
    activationMetadata: Object.freeze({
      ...pondStageDP10ActivationRecordTemplate.activationMetadata,
      activated_at_epoch_ms: activatedAtEpochMs,
    }),
  });

const establishmentRecordOf = (establishedAtEpochMs) =>
  Object.freeze({
    contractVersion: "pond-live-session-establishment-d-p15",
    kind: "pond-live-session-establishment",
    principalRef: stageDP0LocalPrincipalRef,
    establishmentBasis:
      "receiver_performed_local_authentication_session_establishment_not_inferred",
    establishedCapability: "receiver_live_session_scoped_shell_authentication",
    establishmentMetadata: Object.freeze({
      established_at_epoch_ms: establishedAtEpochMs,
      freshness_basis: "establishment_event_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    establishmentScopePosture:
      "live_session_scoped_receiver_shell_restart_ends_establishment",
    establishmentRevocabilityPosture:
      "establishment_revocable_by_receiver_retraction",
    establishmentAttributionPosture:
      "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
    agentScopePosture: "no_agent_session_no_agent_secret_no_agent_admission",
    sharedSurfacePosture:
      "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
    collaborativeWideningPosture:
      "not_included_collaborative_reads_require_their_own_live_session_lane",
    activatedReadScopePosture:
      "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
    memoryLaneExclusionPosture:
      "establishment_excludes_memory_narrative_transcript_lanes",
    authorityPosture:
      "establishment_grants_no_authority_membership_or_capability",
    authority: "none",
  });

const retractionRecordOf = (retractedAtEpochMs) =>
  Object.freeze({
    contractVersion: "pond-live-session-retraction-d-p15",
    kind: "pond-live-session-retraction",
    retracted_at_epoch_ms: retractedAtEpochMs,
    retractionPosture: "receiver_recorded_live_session_retraction_no_grant",
    authority: "none",
  });

const readGateRecordOf = (openedAtEpochMs) =>
  Object.freeze({
    contractVersion: "pond-live-session-read-gate-d-p15",
    kind: "pond-live-session-read-gate",
    principalRef: stageDP0LocalPrincipalRef,
    readGateBasis: "receiver_session_scoped_structural_read_live_use_not_inferred",
    requestedReadScope: "single_principal_own_structural_records",
    readGateMetadata: Object.freeze({
      opened_at_epoch_ms: openedAtEpochMs,
      freshness_basis: "gate_open_event_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    readGateReadUsePosture:
      "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
    collaborativeScopePosture:
      "not_included_collaborative_requires_their_own_live_session_lane",
    agentScopePosture: "no_agent_session_no_agent_secret_no_agent_admission",
    memoryLaneExclusionPosture:
      "read_gate_excludes_memory_narrative_transcript_lanes",
    authorityPosture: "read_gate_grants_no_authority_membership_or_capability",
    authority: "none",
  });

// ---------------------------------------------------------------------------
// Session state: module scope only — the receiver's live session lives
// exactly as long as this shell does, is refused to any agent, and is
// retracted by receiver action. Nothing is persisted.
// ---------------------------------------------------------------------------

let sessionEstablishmentRecord = null;
let sessionLegs = null;
let sessionRetractionRecord = null;

const legsFromShell = ({
  verifierRecord,
  proofRecord,
  observationRecord,
  evaluatedAtEpochMs,
}) =>
  Object.freeze({
    dp5CeremonyRecord: bindingCeremonyRecordOf(),
    dp6ObservationRecord: observationRecord,
    dp8VerifierRecord: verifierRecord,
    dp8ProofRecord: proofRecord,
    dp9IssuanceRecord: pondStageDP9IssuanceRecord,
    dp9MappingRecord: pondStageDP9MappingRecord,
    dp10ActivationRecord: activationRecordOf(evaluatedAtEpochMs),
    receiverRetractionRecord: null,
  });

// The receiver establishes the live session from performed records —
// observed authentication event, enrolled verifier, and the proof record of
// a fresh challenge round. The assessor re-runs the whole frozen chain and
// refuses with mapped causes on any break; a refused establishment stores
// nothing.
export const establishLiveSession = ({
  verifierRecord,
  proofRecord,
  observationRecord,
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const legs = legsFromShell({
    verifierRecord,
    proofRecord,
    observationRecord,
    evaluatedAtEpochMs,
  });
  const establishmentRecord = establishmentRecordOf(evaluatedAtEpochMs);
  const input = Object.freeze({
    establishmentRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    ...legs,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAgeMs,
  });
  const assessment = assessPondLiveSessionEstablishment(input);
  if (assessment.sessionEstablishmentState === "live_session_scoped_authentication_established") {
    sessionEstablishmentRecord = establishmentRecord;
    sessionLegs = legs;
    // A fresh establishment is not a retraction cycle: any retraction is
    // cleared when a new receiver-performed session is established.
    sessionRetractionRecord = null;
  }
  return Object.freeze({
    sessionState: assessment.sessionEstablishmentState,
    establishmentAssessment: assessment,
  });
};

// The receiver retracts: a present retraction record is fed to every
// re-assessment from here on, and the session refuses at the retraction
// cause regardless of how fresh its legs once were.
export const retractLiveSession = ({ retractedAtEpochMs }) => {
  if (sessionEstablishmentRecord === null) {
    return Object.freeze({
      retracted: false,
      posture: null,
    });
  }
  sessionRetractionRecord = retractionRecordOf(retractedAtEpochMs);
  return Object.freeze({
    retracted: true,
    posture: reassessLiveSession({ evaluatedAtEpochMs: retractedAtEpochMs }),
  });
};

const reassessLiveSession = ({ evaluatedAtEpochMs }) => {
  if (sessionEstablishmentRecord === null) return null;
  return assessPondLiveSessionEstablishment({
    establishmentRecord: sessionEstablishmentRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    ...sessionLegs,
    receiverRetractionRecord: sessionRetractionRecord,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
  });
};

// The current posture re-assesses the held records against the supplied
// evaluation time — staleness and expiry are the honest verdict on every
// render, retraction first.
export const currentLiveSessionPosture = ({ evaluatedAtEpochMs }) => {
  if (sessionEstablishmentRecord === null) {
    return Object.freeze({
      sessionEstablishmentState: "not_established",
      establishmentAttemptRecorded: false,
      assessment: null,
    });
  }
  const assessment = reassessLiveSession({ evaluatedAtEpochMs });
  return Object.freeze({
    sessionEstablishmentState: assessment.sessionEstablishmentState,
    establishmentAttemptRecorded: true,
    assessment,
  });
};

// The live read gate: opened per rendered posture over the held session,
// never persistent. Refuses when the session is not established, fresh,
// or session-scoped — a refused gate reads nothing.
export const currentLiveReadGatePosture = ({ evaluatedAtEpochMs }) => {
  if (sessionEstablishmentRecord === null) {
    return Object.freeze({
      liveSessionReadGateState: null,
      assessment: null,
    });
  }
  const assessment = assessPondLiveSessionReadGate({
    readGateRecord: readGateRecordOf(evaluatedAtEpochMs),
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    establishmentRecord: sessionEstablishmentRecord,
    ...sessionLegs,
    receiverRetractionRecord: sessionRetractionRecord,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
  });
  return Object.freeze({
    liveSessionReadGateState: assessment.liveSessionReadGateState,
    assessment,
  });
};

// The held session records, exposed read-only to a sibling presentation
// module (the conversation lane). Returns the receiver-held principal ref,
// the establishment record, the frozen leg set, the current retraction
// record, and a gate record opened at the supplied evaluation time — the
// same record `currentLiveReadGatePosture` builds. Nothing is copied for
// mutation and nothing is persisted; `held` is false when no establishment
// attempt is recorded.
export const heldLiveSessionRecords = ({ evaluatedAtEpochMs }) => {
  if (sessionEstablishmentRecord === null) {
    return Object.freeze({ held: false });
  }
  return Object.freeze({
    held: true,
    principalRef: stageDP0LocalPrincipalRef,
    establishmentRecord: sessionEstablishmentRecord,
    legs: sessionLegs,
    retractionRecord: sessionRetractionRecord,
    readGateRecord: readGateRecordOf(evaluatedAtEpochMs),
  });
};

// ---------------------------------------------------------------------------
// Rendering: textContent only, refusal-first, verbatim assessment values.
// The establish button performs the whole receiver cycle — enroll check,
// observation, challenge round from the supplied value, establishment. The
// supplied value is hashed and wiped; it never leaves the handler.
// ---------------------------------------------------------------------------

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const factsList = (documentRef, facts) => {
  const list = documentRef.createElement("dl");
  list.className = "cockpit-facts";
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
      "Live session not established. Establishing requires the performed receiver cycle: enrolled verifier, observed authentication event, and a passing challenge round with an honestly claimed comparison — and it refuses if any leg breaks. Agents gain no session, no secret, no admission.",
    ),
  );
};

const renderSessionPosture = (documentRef, statusTarget, assessment) => {
  statusTarget.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      `Live session · ${assessment.sessionEstablishmentState}`,
    ),
    factsList(documentRef, [
      ["Reason", assessment.reason],
      [
        "Session freshness",
        `${assessment.establishmentFreshnessDiagnosis.state} · ${assessment.establishmentFreshnessDiagnosis.reason} · age ${assessment.establishmentFreshnessDiagnosis.observationAgeMs}ms`,
      ],
      ["Scope", assessment.establishmentScopePosture],
      ["Knowledge factor", `${assessment.mappedDp8MechanicState} · recomputed ${assessment.mappedDp8RecomputedComparison}`],
      ["Frozen D-P10 activation", `${assessment.mappedDp10ActivationState} · ${assessment.mappedDp10Reason}`],
      ["Agents", "no_agent_session_no_agent_secret_no_agent_admission"],
      ["Session grants agent access", assessment.sessionGrantsAgentAccess],
      ["Session establishes grant", assessment.sessionEstablishesGrant],
      ["Credential admitted", assessment.credentialAdmitted],
      ["Current truth admitted", assessment.currentTruthAdmitted],
      ["Authority", assessment.authority],
    ]),
    text(
      documentRef,
      "p",
      "cockpit-note",
      "Session-scoped single-principal structural reads only — no write, send, sign, grant, membership, or admission; memory and narrative lanes excluded; a projection of the held records re-assessed on every render, never canonical state.",
    ),
  );
};

const wipeSessionInput = (inputNode) => {
  inputNode.value = "";
};

const readOptionalNode = (documentRef, selector) =>
  documentRef.querySelector(selector);

export const renderPondLiveSession = (documentRef = globalThis.document) => {
  if (!documentRef) return false;

  const root = documentRef.querySelector("[data-live-session]");
  const establishButton = documentRef.querySelector(
    "[data-live-session-establish]",
  );
  const retractButton = documentRef.querySelector(
    "[data-live-session-retract]",
  );
  const statusTarget = documentRef.querySelector("[data-live-session-status]");
  if (!root || !establishButton || !retractButton || !statusTarget) return false;

  const localInput = readOptionalNode(documentRef, "[data-live-session-secret]");

  establishButton.addEventListener("click", () => {
    const nowMs = Date.now();
    const snapshot = enrolledLocalVerifierSnapshot();
    if (snapshot === null) {
      statusTarget.replaceChildren(
        text(
          documentRef,
          "p",
          "cockpit-note",
          "Refused — establish requires an enrolled local verifier first (enroll in the local authentication panel).",
        ),
      );
      return;
    }
    if (!localInput) return;
    const localValue = String(localInput.value);
    wipeSessionInput(localInput);
    if (localValue.length === 0) {
      statusTarget.replaceChildren(
        text(
          documentRef,
          "p",
          "cockpit-note",
          "Refused — establishing the live session requires the local authentication value for a fresh challenge round.",
        ),
      );
      return;
    }
    const observation = observeLocalAuthenticationEvent({
      observedAtEpochMs: nowMs,
      evaluatedAtEpochMs: nowMs,
    });
    return computeSecretDigestHex(
      snapshot.verifierRecord.verifierBinding.saltHex,
      localValue,
    ).then((responseDigestHex) => {
      const round = runLocalAuthenticationChallengeRound({
        verifierRecord: snapshot.verifierRecord,
        responseDigestHex,
        comparedAtEpochMs: nowMs,
        evaluatedAtEpochMs: nowMs,
        maximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
      });
      const establishment = establishLiveSession({
        verifierRecord: snapshot.verifierRecord,
        proofRecord: round.proofRecord,
        observationRecord: observation.observationRecord,
        evaluatedAtEpochMs: nowMs,
      });
      renderSessionPosture(
        documentRef,
        statusTarget,
        establishment.establishmentAssessment,
      );
    });
  });

  retractButton.addEventListener("click", () => {
    const nowMs = Date.now();
    const retraction = retractLiveSession({ retractedAtEpochMs: nowMs });
    if (!retraction.retracted) {
      statusTarget.replaceChildren(
        text(
          documentRef,
          "p",
          "cockpit-note",
          "Nothing to retract — no receiver-recorded live session establishment attempt exists in this session.",
        ),
      );
      return;
    }
    statusTarget.replaceChildren(
      text(
        documentRef,
        "p",
        "cockpit-note",
        "Retracted. The retraction record refuses every re-assessment from here on — a retracted session is a present fact, regardless of how fresh its legs once were.",
      ),
      factsList(
        documentRef,
        retraction.posture
          ? [
              ["Reason", retraction.posture.reason],
              ["Authority", retraction.posture.authority],
            ]
          : [],
      ),
    );
  });

  // The initial render is the honest current posture: re-assessed from
  // the held records at the current clock — staleness, expiry, and
  // retraction are all the verdict this render shows, never a canned
  // posture.
  const posture = currentLiveSessionPosture({ evaluatedAtEpochMs: Date.now() });
  if (posture.establishmentAttemptRecorded && posture.assessment !== null) {
    renderSessionPosture(documentRef, statusTarget, posture.assessment);
  } else {
    renderNotEstablishedPosture(documentRef, statusTarget);
  }
  root.dataset.liveSessionRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderPondLiveSession(document);
}