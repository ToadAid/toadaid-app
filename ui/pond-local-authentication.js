// Stage D-P7 live shell wiring + the Stage D-P8 real mechanic: the pond
// desktop shell observes its own local authentication event and feeds the
// frozen D-P6 performer, and — once the operator enrolls a local verifier —
// the same gesture becomes a real knowledge-factor challenge-response fed
// to the frozen D-P8 mechanic classifier. The gesture contributes only the
// observation clock; the shell builds every record itself, carrying only
// shell-vocabulary posture literals plus timestamps and digests, and never
// any operator-authored content. The enrollment verifier is salt + digest
// only: the secret is computed into a digest and immediately discarded,
// lives in module scope for the session, and is never stored, transported,
// or rendered. The frozen assessments, including their refusal tuples, are
// rendered verbatim. No PrincipalId is issued; no authority is granted;
// Stage D stays blocked on PrincipalId issuance, private-read activation,
// and persistence. Contract code reaches this module only through the
// committed generated artifact (ui/generated/), never directly from src/.

import {
  POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
  assessPondLocalAuthenticationChallengeProof,
  assessPondLocalAuthenticationVerifierRecord,
  assessPondLocalPrincipalAuthenticationObservation,
  stageDP0LocalPrincipalRef,
} from "./generated/pond-stage-d-local-authentication.js";

// The pure observation step (D-P7): the shell observes its own local
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

// The verifier enrollment step (D-P8): pure in the supplied salt and digest
// — the caller computes the digest with the pinned formula
// sha256(bytes(saltHex) || utf8(secret)); the function never sees the
// secret. Returns the frozen verifier record and the frozen classifier's
// enrollment assessment.
export const enrollLocalAuthenticationVerifier = ({
  saltHex,
  verifierDigestHex,
}) => {
  const verifierRecord = Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    kind: "pond-local-authentication-verifier",
    principalRef: stageDP0LocalPrincipalRef,
    mechanicClass: "local_knowledge_factor_challenge_response",
    verifierBinding: Object.freeze({
      algorithm: "sha256",
      saltHex,
      verifierDigestHex,
    }),
    secretFreeInventoryPosture: "verifier_digest_only_no_secret_material",
    memoryLaneExclusionPosture:
      "binding_excludes_memory_narrative_transcript_lanes",
    authorityPosture: "verifier_grants_no_authority_membership_or_capability",
    revocabilityPosture: "verifier_revocable_by_re_enrollment",
    authority: "none",
  });
  const assessment = assessPondLocalAuthenticationVerifierRecord({
    verifierRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
  });
  return Object.freeze({ verifierRecord, assessment });
};

// The challenge round (D-P8): pure in the supplied response digest and the
// clock. The shell honestly claims the comparison the digests imply; the
// frozen classifier recomputes the comparison itself and refuses any
// claimed comparison that disagrees. The secret never appears here — only
// its digest.
export const runLocalAuthenticationChallengeRound = ({
  verifierRecord,
  responseDigestHex,
  comparedAtEpochMs,
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const binding = verifierRecord.verifierBinding;
  const digestMatch = responseDigestHex === binding.verifierDigestHex;
  const proofRecord = Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    kind: "pond-local-authentication-challenge-proof",
    principalRef: stageDP0LocalPrincipalRef,
    mechanicClass: "local_knowledge_factor_challenge_response",
    challengeDigestBinding: Object.freeze({
      algorithm: "sha256",
      saltHex: binding.saltHex,
      verifierDigestHex: binding.verifierDigestHex,
      responseDigestHex,
    }),
    comparison: digestMatch ? "exact_digest_match" : "digest_mismatch",
    comparisonMetadata: Object.freeze({
      observed_at_epoch_ms: comparedAtEpochMs,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    secretFreeInventoryPosture: "response_digest_only_no_secret_material",
    memoryLaneExclusionPosture:
      "proof_excludes_memory_narrative_transcript_lanes",
    authorityPosture: "challenge_grants_no_authority_membership_or_capability",
    authority: "none",
  });
  const assessment = assessPondLocalAuthenticationChallengeProof({
    proofRecord,
    verifierRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    evaluatedAtEpochMs,
    maximumAgeMs,
  });
  return Object.freeze({ proofRecord, assessment });
};

// Digest computation for the shell (D-P8): the pinned formula
// sha256(bytes(saltHex) || utf8(secret)) over webcrypto. The caller passes
// the secret string and immediately discards it; it never leaves the
// handler.
const hexToBytes = (hex) => {
  const bytes = new Uint8Array(hex.length / 2);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = Number.parseInt(hex.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
};

export const computeSecretDigestHex = (saltHex, localValue) =>
  crypto.subtle
    .digest(
      "SHA-256",
      new Uint8Array([
        ...hexToBytes(saltHex),
        ...new TextEncoder().encode(localValue),
      ]),
    )
    .then((buffer) =>
      Array.from(new Uint8Array(buffer))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join(""),
    );

const freshSaltHex = () =>
  Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

// Session-scoped verifier only: never persisted, never stored beyond the
// module, revoked by re-enrollment or by closing the shell.
let enrolledVerifierRecord = null;

// Additive D-P15 read access: a frozen snapshot of the enrolled verifier
// record plus its freshly recomputed assessment, or null when nothing has
// been enrolled. No behavior change here — the snapshot is a consumer's
// read of the module-scope record, not a mutation of the enrollment flow.
export const enrolledLocalVerifierSnapshot = () =>
  enrolledVerifierRecord === null
    ? null
    : Object.freeze({
        verifierRecord: enrolledVerifierRecord,
        assessment: assessPondLocalAuthenticationVerifierRecord({
          verifierRecord: enrolledVerifierRecord,
          receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
        }),
      });

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

  statusTarget.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      `Observed local authentication event · ${assessment.authenticationObservationState}`,
    ),
    factsList(documentRef, facts),
    text(
      documentRef,
      "p",
      "cockpit-note",
      "Fact of the event only — the shell observed the local operator's gesture; no credential requested, checked, or stored; no PrincipalId issued; Stage D stays blocked on the authentication mechanic and private-read activation.",
    ),
  );
};

const renderEnrollmentPosture = (documentRef, statusTarget, enrollment) => {
  const { assessment } = enrollment;
  statusTarget.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      `Local verifier enrolled · ${assessment.verifierState}`,
    ),
    factsList(documentRef, [
      ["Reason", assessment.reason],
      ["Posture", assessment.revocabilityPosture],
      ["Inventory", assessment.secretFreeInventoryPosture],
      ["Credential admitted", assessment.credentialAdmitted],
      ["PrincipalId issued", assessment.principalIdIssued],
      ["Authority", assessment.authority],
    ]),
    text(
      documentRef,
      "p",
      "cockpit-note",
      "Digest only — the local value was discarded right after digest computation; verifier binding is salt + digest only, module-scoped for this session, never stored, and revocable by re-enrollment.",
    ),
  );
};

const renderChallengeAssessment = (
  documentRef,
  statusTarget,
  observation,
  round,
) => {
  const { assessment } = round;
  statusTarget.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      `Local authentication event · ${observation.assessment.authenticationObservationState} · ${assessment.authenticationMechanicState}`,
    ),
    factsList(documentRef, [
      ["Reason", assessment.reason],
      [
        "Comparison",
        `${assessment.comparison} · recomputed ${assessment.recomputedComparison}`,
      ],
      [
        "Freshness",
        `${assessment.freshnessDiagnosis.state} · ${assessment.freshnessDiagnosis.reason} · age ${assessment.freshnessDiagnosis.observationAgeMs}ms`,
      ],
      ["Posture", assessment.authenticationPosture],
      ["Credential admitted", assessment.credentialAdmitted],
      ["PrincipalId issued", assessment.principalIdIssued],
      ["Authority", assessment.authority],
    ]),
    text(
      documentRef,
      "p",
      "cockpit-note",
      "Verified knowledge factor only — proving control is not authorization: no PrincipalId issued, no credential stored, memory excluded, private-read activation stays refused, and Stage D stays blocked on PrincipalId issuance and private-read activation.",
    ),
  );
};

const enrollmentAssessmentAccepted = (enrollment) =>
  enrollment.assessment.verifierState === "receiver_enrolled_knowledge_verifier";

const readOptionalNode = (documentRef, selector) =>
  documentRef.querySelector(selector);

const wipeLocalInput = (inputNode) => {
  inputNode.value = "";
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

  // Optional D-P8 affordances: present in the desktop shell panel, absent
  // in minimal hosts, so the D-P7 fact-of-event flow works everywhere.
  const localInput = readOptionalNode(
    documentRef,
    "[data-local-authentication-secret]",
  );
  const enrollButton = readOptionalNode(
    documentRef,
    "[data-local-authentication-enroll]",
  );

  if (enrollButton && localInput) {
    enrollButton.addEventListener("click", () => {
      // The enrollment digest uses a fresh session salt. The supplied
      // value is wiped immediately — it never leaves the handler.
      const localValue = String(localInput.value);
      wipeLocalInput(localInput);
      if (localValue.length === 0) return;
      const saltHex = freshSaltHex();
      return computeSecretDigestHex(saltHex, localValue).then((verifierDigestHex) => {
        const enrollment = enrollLocalAuthenticationVerifier({
          saltHex,
          verifierDigestHex,
        });
        if (enrollmentAssessmentAccepted(enrollment)) {
          enrolledVerifierRecord = enrollment.verifierRecord;
        }
        renderEnrollmentPosture(documentRef, statusTarget, enrollment);
      });
    });
  }

  gestureButton.addEventListener("click", () => {
    // The clock is read once: observation time and evaluation time are the
    // same instant, so the observation is fresh by construction and never
    // diagnosed as a future observation.
    const nowMs = Date.now();
    const observation = observeLocalAuthenticationEvent({
      observedAtEpochMs: nowMs,
      evaluatedAtEpochMs: nowMs,
    });
    if (enrolledVerifierRecord && localInput) {
      // Enrolled: the gesture is a real challenge round. The supplied
      // value becomes a response digest and is then discarded — it never
      // enters any record, log, or storage.
      const challengeValue = String(localInput.value);
      wipeLocalInput(localInput);
      if (challengeValue.length === 0) {
        renderObservationAssessment(documentRef, statusTarget, observation);
        return;
      }
      return computeSecretDigestHex(
        enrolledVerifierRecord.verifierBinding.saltHex,
        challengeValue,
      ).then((responseDigestHex) => {
        const round = runLocalAuthenticationChallengeRound({
          verifierRecord: enrolledVerifierRecord,
          responseDigestHex,
          comparedAtEpochMs: nowMs,
          evaluatedAtEpochMs: nowMs,
          maximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
        });
        renderChallengeAssessment(
          documentRef,
          statusTarget,
          observation,
          round,
        );
      });
      return;
    }
    renderObservationAssessment(documentRef, statusTarget, observation);
  });

  renderNotObservedPosture(documentRef, statusTarget);
  root.dataset.localAuthenticationRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderPondLocalAuthentication(document);
}