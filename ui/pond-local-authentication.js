// Stage D-P7 live shell wiring: the pond desktop shell observes its own
// local authentication event and feeds the frozen D-P6 performer. The
// gesture affordance contributes only the observation clock — the shell
// builds the D-P6 observation record itself, carrying shell-vocabulary
// posture literals and the observation timestamp and never any
// operator-authored content — and the frozen classifier's assessment,
// including its refusal tuple, is rendered verbatim. No credential is
// requested, checked, or stored; no PrincipalId is issued; no state is
// kept or flipped; Stage D stays blocked on the authentication mechanic
// and private-read activation. Contract code reaches this module only
// through the committed generated artifact (ui/generated/), never
// directly from src/.

import {
  POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
  assessPondLocalPrincipalAuthenticationObservation,
  stageDP0LocalPrincipalRef,
} from "./generated/pond-stage-d-local-authentication.js";

// The pure observation step: the shell observes its own local
// authentication event (the local operator's gesture on the shell's own
// surface) and builds the D-P6 record for it — the fact of the event,
// never a credential. The frozen classifier assesses it; its refused
// tuple arrives from the contract and is restated nowhere. Pure in the
// timestamps: the browser tail passes the clock read once, the selftest
// passes pinned times.
export const observeLocalAuthenticationEvent = ({
  observedAtEpochMs,
  evaluatedAtEpochMs,
}) => {
  const observationRecord = Object.freeze({
    contractVersion: "pond-local-principal-authentication-observation-d-p6",
    kind: "pond-local-principal-authentication-observation",
    principalRef: stageDP0LocalPrincipalRef,
    eventState: "receiver_observed_local_authentication_event",
    observationChannel: "receiver_owned_local_shell_channel",
    secretFreeFieldInventoryPosture:
      "inventory_secret_free_no_credential_field_observed",
    observationMetadata: Object.freeze({
      observed_at_epoch_ms: observedAtEpochMs,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    memoryLaneExclusionPosture:
      "observation_excludes_memory_narrative_transcript_lanes",
    authorityPosture: "observation_grants_no_authority_membership_or_capability",
    authenticationPosture: "fixture_structural_only_no_live_authentication",
    authority: "none",
  });
  const assessment = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    evaluatedAtEpochMs,
    maximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
  });
  return Object.freeze({ observationRecord, assessment });
};

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const renderNotObservedPosture = (documentRef, statusTarget) => {
  statusTarget.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      "Not observed — the shell has not observed a local authentication event in this session.",
    ),
  );
};

const renderObservationAssessment = (documentRef, statusTarget, observation) => {
  const { assessment } = observation;
  const facts = [
    ["Reason", assessment.reason],
    [
      "Freshness",
      `${assessment.freshnessDiagnosis.state} · ${assessment.freshnessDiagnosis.reason} · age ${assessment.freshnessDiagnosis.observationAgeMs}ms`,
    ],
    ["Posture", assessment.authenticationPosture],
    ["Satisfied checks", assessment.satisfiedChecks.join(", ")],
    ["Live authentication performed", assessment.liveAuthenticationPerformed],
    ["PrincipalId issued", assessment.principalIdIssued],
    ["Authority", assessment.authority],
  ];

  const factsList = documentRef.createElement("dl");
  factsList.className = "cockpit-facts";
  for (const [label, value] of facts) {
    const row = documentRef.createElement("div");
    row.append(
      text(documentRef, "dt", null, label),
      text(documentRef, "dd", null, value),
    );
    factsList.append(row);
  }

  statusTarget.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      `Observed local authentication event · ${assessment.authenticationObservationState}`,
    ),
    factsList,
    text(
      documentRef,
      "p",
      "cockpit-note",
      "Fact of the event only — the shell observed the local operator's gesture; no credential requested, checked, or stored; no PrincipalId issued; Stage D stays blocked on the authentication mechanic and private-read activation.",
    ),
  );
};

export const renderPondLocalAuthentication = (
  documentRef = globalThis.document,
) => {
  if (!documentRef) return false;

  const root = documentRef.querySelector("[data-local-authentication]");
  const gestureButton = documentRef.querySelector(
    "[data-local-authentication-gesture]",
  );
  const statusTarget = documentRef.querySelector(
    "[data-local-authentication-status]",
  );
  if (!root || !gestureButton || !statusTarget) return false;

  gestureButton.addEventListener("click", () => {
    // The clock is read once: observation time and evaluation time are the
    // same instant, so the observation is fresh by construction and never
    // diagnosed as a future observation.
    const nowMs = Date.now();
    renderObservationAssessment(
      documentRef,
      statusTarget,
      observeLocalAuthenticationEvent({
        observedAtEpochMs: nowMs,
        evaluatedAtEpochMs: nowMs,
      }),
    );
  });

  renderNotObservedPosture(documentRef, statusTarget);
  root.dataset.localAuthenticationRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderPondLocalAuthentication(document);
}