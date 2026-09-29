// Stage D-P8 local authentication mechanic selftest. Drives the real
// knowledge-factor mechanic four ways — the frozen fixture matrix
// recomputed through the TS contract, the node-crypto digest-formula tie,
// an invalid/unsatisfied fail-closed table, and the D-P6/D-P8 composition
// tie on one pinned round — then drives the shell wiring (module-scope
// enrollment, challenge round, refused-tuple rendering) with a DOM stub
// and pins the static markup and module-text hygiene. Every assessment,
// verified or not, must carry the refused tuple: a verified knowledge
// factor is never a PrincipalId, a credential admission, or authority.

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import {
  stageDP8MechanicComplete,
  stageDP8MechanicIncomplete,
  stageDP8MechanicMatrix,
} from "../src/fixtures/stage-d-p8-local-authentication-mechanic.ts";
import {
  assessPondLocalAuthenticationChallengeProof as tsAssessChallenge,
  assessPondLocalAuthenticationVerifierRecord as tsAssessVerifier,
  POND_STAGE_DP8_FORBIDDEN_MECHANIC_KEYS,
} from "../src/contracts/pond-local-authentication-mechanic.ts";
import {
  computeSecretDigestHex,
  enrollLocalAuthenticationVerifier,
  observeLocalAuthenticationEvent,
  renderPondLocalAuthentication,
  runLocalAuthenticationChallengeRound,
} from "../ui/pond-local-authentication.js";
import {
  assessPondLocalAuthenticationChallengeProof,
  POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
  stageDP0LocalPrincipalRef,
} from "../ui/generated/pond-stage-d-local-authentication.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const html = await readFile(path.join(root, "ui", "pond-desktop.html"), "utf8");
const moduleText = await readFile(
  path.join(root, "ui", "pond-local-authentication.js"),
  "utf8",
);
const packageJson = JSON.parse(
  await readFile(path.join(root, "package.json"), "utf8"),
);

// The pinned secrets live ONLY in this selftest — the fixture carries
// digests, the contract carries format checks, the shell discards the
// value after digest computation.
const POND_STAGE_DP8_PINNED_SECRET = "pond-stage-d-p8-fixture-secret";
const POND_STAGE_DP8_OTHER_SECRET = "another-pond-secret";

const SHA256_DIGEST_PATTERN = /^[0-9a-f]{64}$/;

// ---------------------------------------------------------------------------
// Block 1 — fixture matrix recompute: the frozen fixture arms are exactly
// what the TS contract produces from the fixture inputs, and every arm
// carries the refused tuple.
// ---------------------------------------------------------------------------

assert.equal(
  stageDP0LocalPrincipalRef,
  "principal:fixture:stage-d-p0:local-principal",
);
assert.equal(POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS, 60_000);

assert.equal(stageDP8MechanicMatrix.length, 2);
assert.deepEqual(
  stageDP8MechanicMatrix.map((entry) => entry.fixtureLabel),
  ["complete_challenge_round", "mismatch_challenge_round"],
);

for (const entry of stageDP8MechanicMatrix) {
  assert.deepEqual(
    tsAssessVerifier({
      verifierRecord: entry.verifierRecord,
      receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    }),
    entry.verifierAssessment,
    `verifier assessment drift in arm ${entry.fixtureLabel}`,
  );
  assert.deepEqual(
    tsAssessChallenge({
      proofRecord: entry.proofRecord,
      verifierRecord: entry.verifierRecord,
      receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
      evaluatedAtEpochMs: entry.evaluatedAtEpochMs,
      maximumAgeMs: entry.maximumAgeMs,
    }),
    entry.assessment,
    `challenge assessment drift in arm ${entry.fixtureLabel}`,
  );

  // Deep freeze, plain serializability, digest format pins, and the
  // refused tuple on every arm — verified or not.
  assert.equal(Object.isFrozen(entry.verifierRecord), true);
  assert.equal(Object.isFrozen(entry.proofRecord), true);
  assert.equal(Object.isFrozen(entry.verifierAssessment), true);
  assert.equal(Object.isFrozen(entry.assessment), true);
  assert.deepEqual(JSON.parse(JSON.stringify(entry)), entry);

  const proofBinding = entry.proofRecord.challengeDigestBinding;
  assert.match(proofBinding.saltHex, /^([0-9a-f]{2})+$/);
  assert.match(proofBinding.verifierDigestHex, SHA256_DIGEST_PATTERN);
  assert.match(proofBinding.responseDigestHex, SHA256_DIGEST_PATTERN);
  assert.equal(proofBinding.saltHex.length % 2, 0);
  assert.equal(proofBinding.saltHex.length >= 32, true);

  for (const arm of [entry.verifierAssessment, entry.assessment]) {
    assert.equal(arm.credentialAdmitted, false);
    assert.equal(arm.observedPresenceAcceptedAsAuthentication, false);
    assert.equal(arm.observedIdentityAcceptedAsPrincipalId, false);
    assert.equal(arm.principalIdIssued, false);
    assert.equal(arm.personalMemoryContentAdmitted, false);
    assert.equal(arm.currentTruthAdmitted, false);
    assert.equal(arm.runtimeActivationPosture, "not_included");
    assert.equal(arm.authority, "none");
  }

  // Forbidden-key walk over the record shapes the fixture proves.
  const walk = (node) => {
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    if (node !== null && typeof node === "object") {
      assert.deepEqual(
        POND_STAGE_DP8_FORBIDDEN_MECHANIC_KEYS.filter((key) =>
          Object.keys(node).includes(key),
        ),
        [],
        `mechanic record must not carry forbidden keys in arm ${entry.fixtureLabel}`,
      );
      Object.values(node).forEach(walk);
    }
  };
  walk(entry.verifierRecord);
  walk(entry.proofRecord);
}

// Arm-specific pins: the complete arm genuinely verifies the knowledge
// factor; the mismatch arm stays not_verified with the receiver's own
// recomputation; the D-P6 vocabulary stays structural.
assert.equal(
  stageDP8MechanicComplete.assessment.authenticationMechanicState,
  "receiver_verified_knowledge_factor",
);
assert.equal(
  stageDP8MechanicComplete.assessment.reason,
  "all_challenge_checks_satisfied",
);
assert.equal(
  stageDP8MechanicComplete.assessment.authenticationPosture,
  "receiver_verified_local_knowledge_factor",
);
assert.deepEqual(stageDP8MechanicComplete.assessment.unsatisfiedChecks, []);
assert.equal(
  stageDP8MechanicComplete.assessment.recomputedComparison,
  "exact_digest_match",
);
assert.deepEqual(stageDP8MechanicComplete.assessment.freshnessDiagnosis, {
  state: "fresh",
  reason: "within_declared_maximum_age",
  observationAgeMs: 0,
});

assert.equal(
  stageDP8MechanicIncomplete.assessment.authenticationMechanicState,
  "not_verified",
);
assert.equal(
  stageDP8MechanicIncomplete.assessment.reason,
  "receiver_challenge_proof_incomplete",
);
assert.equal(stageDP8MechanicIncomplete.assessment.comparison, "digest_mismatch");
assert.equal(
  stageDP8MechanicIncomplete.assessment.recomputedComparison,
  "digest_mismatch",
);
assert.deepEqual(stageDP8MechanicIncomplete.assessment.unsatisfiedChecks, [
  "comparison_recomputed",
]);
assert.equal(
  stageDP8MechanicIncomplete.verifierAssessment.verifierState,
  "receiver_enrolled_knowledge_verifier",
);

// The fixture lands on exactly the D-P0 held principal: one binding, one
// ref, still.
assert.equal(
  stageDP8MechanicComplete.verifierRecord.principalRef,
  stageDP0LocalPrincipalRef,
);
assert.equal(
  stageDP8MechanicComplete.proofRecord.principalRef,
  stageDP0LocalPrincipalRef,
);

// ---------------------------------------------------------------------------
// Block 2 — digest-formula tie: node:crypto reproduces the fixture digests
// from the pinned salt and the pinned secrets, and the shell's webcrypto
// helper computes the identical digests.
// ---------------------------------------------------------------------------

const pinnedSaltHex =
  stageDP8MechanicComplete.verifierRecord.verifierBinding.saltHex;

const nodeDigest = (secret) =>
  createHash("sha256")
    .update(Buffer.from(pinnedSaltHex, "hex"))
    .update(secret, "utf8")
    .digest("hex");

assert.match(pinnedSaltHex, /^([0-9a-f]{2})+$/);
assert.equal(pinnedSaltHex.length, 32);

const pinnedVerifierDigestHex =
  stageDP8MechanicComplete.proofRecord.challengeDigestBinding.verifierDigestHex;
const pinnedOtherDigestHex =
  stageDP8MechanicIncomplete.proofRecord.challengeDigestBinding
    .responseDigestHex;

assert.equal(
  nodeDigest(POND_STAGE_DP8_PINNED_SECRET),
  pinnedVerifierDigestHex,
  "the pinned formula must reproduce the fixture verifier digest",
);
assert.equal(
  nodeDigest(POND_STAGE_DP8_OTHER_SECRET),
  pinnedOtherDigestHex,
  "the pinned formula must reproduce the fixture mismatch digest",
);
assert.notEqual(pinnedVerifierDigestHex, pinnedOtherDigestHex);

assert.equal(
  await computeSecretDigestHex(pinnedSaltHex, POND_STAGE_DP8_PINNED_SECRET),
  pinnedVerifierDigestHex,
  "the shell webcrypto helper must agree with the node:crypto formula",
);
assert.equal(
  await computeSecretDigestHex(pinnedSaltHex, POND_STAGE_DP8_OTHER_SECRET),
  pinnedOtherDigestHex,
);
assert.match(
  await computeSecretDigestHex(pinnedSaltHex, "anything-at-all"),
  SHA256_DIGEST_PATTERN,
);

// ---------------------------------------------------------------------------
// Block 3 — bundle parity: the committed generated artifact's D-P8 export
// agrees with the directly-imported TS contract on both fixture arms.
// ---------------------------------------------------------------------------

assert.equal(typeof assessPondLocalAuthenticationChallengeProof, "function");
for (const entry of stageDP8MechanicMatrix) {
  assert.deepEqual(
    assessPondLocalAuthenticationChallengeProof({
      proofRecord: entry.proofRecord,
      verifierRecord: entry.verifierRecord,
      receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
      evaluatedAtEpochMs: entry.evaluatedAtEpochMs,
      maximumAgeMs: entry.maximumAgeMs,
    }),
    entry.assessment,
    `bundle challenge drift in arm ${entry.fixtureLabel}`,
  );
}

// ---------------------------------------------------------------------------
// Block 4 — fail-closed table: a tampered or smuggled record is valid
// vocabulary refused, never a crash.
// ---------------------------------------------------------------------------

const freshChallengeInput = (proofOverrides = {}, overrides = {}) => ({
  proofRecord: { ...stageDP8MechanicComplete.proofRecord, ...proofOverrides },
  verifierRecord: stageDP8MechanicComplete.verifierRecord,
  receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
  evaluatedAtEpochMs: stageDP8MechanicComplete.evaluatedAtEpochMs,
  maximumAgeMs: stageDP8MechanicComplete.maximumAgeMs,
  ...overrides,
});

const refusedTuple = (assessment) => {
  assert.equal(assessment.credentialAdmitted, false);
  assert.equal(assessment.observedPresenceAcceptedAsAuthentication, false);
  assert.equal(assessment.observedIdentityAcceptedAsPrincipalId, false);
  assert.equal(assessment.principalIdIssued, false);
  assert.equal(assessment.personalMemoryContentAdmitted, false);
  assert.equal(assessment.currentTruthAdmitted, false);
  assert.equal(assessment.runtimeActivationPosture, "not_included");
  assert.equal(assessment.authority, "none");
};

const expectVerifierInvalid = (label, mutate) => {
  const verifierRecord = JSON.parse(
    JSON.stringify(stageDP8MechanicComplete.verifierRecord),
  );
  mutate(verifierRecord);
  const assessment = tsAssessVerifier({
    verifierRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
  });
  assert.equal(assessment.verifierState, "not_established", label);
  assert.equal(assessment.verifierRecordVersion, "invalid", label);
  assert.equal(assessment.reason, "verifier_record_invalid", label);
  assert.deepEqual(assessment.unsatisfiedChecks, [
    "verifier_well_formed",
    "verifier_bound_to_receiver_held_principal",
    "verifier_secret_free",
    "verifier_excludes_memory_and_lane_content",
    "verifier_grants_no_authority",
  ], label);
  refusedTuple(assessment);
};

expectVerifierInvalid("tampered-verifier-contract-version", (verifier) => {
  verifier.contractVersion = "pond-local-authentication-mechanic-d-p2";
});
expectVerifierInvalid("tampered-verifier-kind", (verifier) => {
  verifier.kind = "pond-local-authentication-challenge-proof";
});
expectVerifierInvalid("tampered-verifier-mechanic-class", (verifier) => {
  verifier.mechanicClass = "local_knowledge_factor_prompt_replay";
});
expectVerifierInvalid("tampered-verifier-authority", (verifier) => {
  verifier.authority = "receiver_granted";
});
expectVerifierInvalid("extra-verifier-key", (verifier) => {
  verifier.extra = true;
});
expectVerifierInvalid("malformed-verifier-digest", (verifier) => {
  verifier.verifierBinding.verifierDigestHex = "zz";
});
expectVerifierInvalid("odd-length-verifier-salt", (verifier) => {
  verifier.verifierBinding.saltHex = "0a1b2c3d4e5f60718293a4b5c6d7e8f9a";
});

const tamperedVerifierRef = tsAssessVerifier({
  verifierRecord: stageDP8MechanicComplete.verifierRecord,
  receiverHeldPrincipalRef: "principal:fixture:stage-d-p0:someone-else",
});
assert.equal(tamperedVerifierRef.verifierState, "not_established");
assert.equal(tamperedVerifierRef.verifierRecordVersion,
  "pond-local-authentication-mechanic-d-p8");
assert.equal(tamperedVerifierRef.reason, "receiver_held_principal_not_bound");
assert.deepEqual(tamperedVerifierRef.unsatisfiedChecks, [
  "verifier_bound_to_receiver_held_principal",
]);
refusedTuple(tamperedVerifierRef);

const expectInvalidProof = (label, proofOverrides) => {
  const assessment = tsAssessChallenge(freshChallengeInput(proofOverrides));
  assert.equal(
    assessment.reason,
    "proof_record_invalid",
    `${label} must fail closed as proof_record_invalid`,
  );
  assert.equal(assessment.proofRecordVersion, "invalid");
  assert.equal(assessment.authenticationMechanicState, "not_verified");
  assert.deepEqual(assessment.unsatisfiedChecks, [
    "mechanic_class_receiver_owned",
    "challenge_bound_to_receiver_held_principal",
    "verifier_binding_exact_match",
    "comparison_recomputed",
    "comparison_fresh",
    "proof_excludes_memory_and_lane_content",
    "challenge_grants_no_authority",
  ]);
  refusedTuple(assessment);
};

expectInvalidProof("kind-swap", {
  kind: "pond-local-authentication-verifier",
});
expectInvalidProof("bad-response-digest-format", {
  challengeDigestBinding: {
    ...stageDP8MechanicComplete.proofRecord.challengeDigestBinding,
    responseDigestHex: "zz",
  },
});
expectInvalidProof("unknown-comparison-literal", {
  comparison: "receiver_asserted_match",
});
expectInvalidProof("tampered-proof-authority", {
  authority: "receiver_granted",
});
expectInvalidProof("extra-proof-key", { extra: true });

// Forbidden-key smuggling — the secret itself and credential-shaped keys
// must never enter a mechanic record as data.
const smuggleProof = (smuggledKey, value) => {
  const proofRecord = JSON.parse(
    JSON.stringify(stageDP8MechanicComplete.proofRecord),
  );
  const lastKey = Object.keys(proofRecord).pop();
  proofRecord[lastKey] = value;
  proofRecord[smuggledKey] = value;
  return tsAssessChallenge(freshChallengeInput({}, { proofRecord }));
};
for (const [smuggledKey, value] of [
  ["plaintext", "the answer is 42"],
  ["answer", "pond"],
  ["secret", "pond-stage-d-p8-fixture-secret"],
  ["token", "ey"],
  ["PrincipalId", "principal:issued:somewhere"],
]) {
  const assessment = smuggleProof(smuggledKey, value);
  assert.equal(
    assessment.reason,
    "proof_record_invalid",
    `smuggled key ${smuggledKey} must fail closed`,
  );
  assert.equal(assessment.proofRecordVersion, "invalid");
  refusedTuple(assessment);
}

// ---------------------------------------------------------------------------
// Block 5 — valid-but-unsatisfied fail-closed: an honest mismatch, an
// unclaimed comparison, claimed-vs-recomputed disagreements, and any
// non-fresh clock never verify, while the record stays valid.
// ---------------------------------------------------------------------------

const expectIncomplete = (label, assessment, unsatisfiedChecks) => {
  assert.equal(assessment.reason, "receiver_challenge_proof_incomplete", label);
  assert.equal(assessment.authenticationMechanicState, "not_verified", label);
  assert.deepEqual(assessment.unsatisfiedChecks, unsatisfiedChecks, label);
  assert.equal(assessment.proofRecordVersion,
    "pond-local-authentication-mechanic-d-p8", label);
  refusedTuple(assessment);
};

const honestMismatch = tsAssessChallenge({
  proofRecord: stageDP8MechanicIncomplete.proofRecord,
  verifierRecord: stageDP8MechanicComplete.verifierRecord,
  receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
  evaluatedAtEpochMs: stageDP8MechanicComplete.evaluatedAtEpochMs,
  maximumAgeMs: stageDP8MechanicComplete.maximumAgeMs,
});
assert.equal(honestMismatch.comparison, "digest_mismatch");
assert.equal(honestMismatch.recomputedComparison, "digest_mismatch");
expectIncomplete("honest-mismatch", honestMismatch, [
  "comparison_recomputed",
]);

const unclaimedMatch = tsAssessChallenge(
  freshChallengeInput({ comparison: "not_compared" }),
);
assert.equal(unclaimedMatch.comparison, "not_compared");
assert.equal(unclaimedMatch.recomputedComparison, "exact_digest_match");
refusedTuple(unclaimedMatch);

// Claimed-vs-recomputed disagreement fails closed in both directions: a
// record is valid, the verification refuses.
const mismatchClaimedAsMatch = tsAssessChallenge(
  freshChallengeInput({
    challengeDigestBinding: {
      ...stageDP8MechanicComplete.proofRecord.challengeDigestBinding,
      responseDigestHex: pinnedOtherDigestHex,
    },
    comparison: "exact_digest_match",
  }),
);
assert.equal(mismatchClaimedAsMatch.comparison, "exact_digest_match");
assert.equal(mismatchClaimedAsMatch.recomputedComparison, "digest_mismatch");
expectIncomplete(
  "mismatch-claimed-as-match",
  mismatchClaimedAsMatch,
  ["comparison_recomputed"],
);

const matchClaimedAsMismatch = tsAssessChallenge(
  freshChallengeInput({ comparison: "digest_mismatch" }),
);
assert.equal(matchClaimedAsMismatch.comparison, "digest_mismatch");
assert.equal(matchClaimedAsMismatch.recomputedComparison, "exact_digest_match");
expectIncomplete(
  "match-claimed-as-mismatch",
  matchClaimedAsMismatch,
  ["comparison_recomputed"],
);

// Stale, future, NaN, and non-integer clocks fail comparison_fresh with
// the D-P2 diagnosis, while the record stays valid.
const staleAssessment = tsAssessChallenge(
  freshChallengeInput({
    comparisonMetadata: {
      observed_at_epoch_ms: stageDP8MechanicComplete.evaluatedAtEpochMs - 80_000,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    },
  }),
);
assert.deepEqual(staleAssessment.freshnessDiagnosis, {
  state: "stale",
  reason: "declared_maximum_age_expired",
  observationAgeMs: 80_000,
});
expectIncomplete("stale-comparison", staleAssessment, ["comparison_fresh"]);

const futureAssessment = tsAssessChallenge({
  ...freshChallengeInput(),
  evaluatedAtEpochMs: 1_800_000_050_000,
});
assert.deepEqual(futureAssessment.freshnessDiagnosis, {
  state: "unknown",
  reason: "observation_time_in_future",
  observationAgeMs: null,
});
expectIncomplete("future-comparison", futureAssessment, ["comparison_fresh"]);

const nanEvaluatedAssessment = tsAssessChallenge({
  ...freshChallengeInput(),
  evaluatedAtEpochMs: Number.NaN,
});
assert.deepEqual(nanEvaluatedAssessment.freshnessDiagnosis, {
  state: "unknown",
  reason: "evaluation_time_invalid",
  observationAgeMs: null,
});
expectIncomplete("nan-evaluated", nanEvaluatedAssessment, ["comparison_fresh"]);

const invalidMetadataAssessment = tsAssessChallenge(
  freshChallengeInput({
    comparisonMetadata: {
      observed_at_epoch_ms: stageDP8MechanicComplete.evaluatedAtEpochMs,
    },
  }),
);
assert.equal(invalidMetadataAssessment.reason, "proof_record_invalid");
assert.deepEqual(invalidMetadataAssessment.freshnessDiagnosis, {
  state: "unknown",
  reason: "observation_metadata_missing_or_invalid",
  observationAgeMs: null,
});
refusedTuple(invalidMetadataAssessment);

// A mismatched receiver-held ref is a valid proof whose binding fails.
const mismatchedReceiverAssessment = tsAssessChallenge(
  freshChallengeInput(
    {},
    { receiverHeldPrincipalRef: "principal:fixture:stage-d-p0:someone-else" },
  ),
);
expectIncomplete(
  "mismatched-receiver-ref",
  mismatchedReceiverAssessment,
  ["challenge_bound_to_receiver_held_principal"],
);

// ---------------------------------------------------------------------------
// Block 6 — composition tie: one pinned round, two layers on one ref and
// one clock read. The D-P6 observation completes as the unchanged
// fact-of-event while the D-P8 mechanic carries the verified factor; the
// control round stays not_verified.
// ---------------------------------------------------------------------------

const pinnedComparedAt = 1_800_000_060_000;
const pinnedEvaluatedAt = pinnedComparedAt;

const compositionObservation = observeLocalAuthenticationEvent({
  observedAtEpochMs: pinnedComparedAt,
  evaluatedAtEpochMs: pinnedEvaluatedAt,
});
const compositionVerifier = enrollLocalAuthenticationVerifier({
  saltHex: pinnedSaltHex,
  verifierDigestHex: pinnedVerifierDigestHex,
});
assert.deepEqual(
  compositionVerifier.verifierRecord,
  stageDP8MechanicComplete.verifierRecord,
  "the pinned formula plus the module-record builder must equal the fixture verifier",
);
assert.equal(
  compositionVerifier.assessment.verifierState,
  "receiver_enrolled_knowledge_verifier",
);
assert.equal(compositionVerifier.assessment.reason, "verifier_enrolled");
refusedTuple(compositionVerifier.assessment);

const compositionResponseDigest = await computeSecretDigestHex(
  pinnedSaltHex,
  POND_STAGE_DP8_PINNED_SECRET,
);
assert.equal(compositionResponseDigest, pinnedVerifierDigestHex);
const compositionRound = runLocalAuthenticationChallengeRound({
  verifierRecord: compositionVerifier.verifierRecord,
  responseDigestHex: compositionResponseDigest,
  comparedAtEpochMs: pinnedComparedAt,
  evaluatedAtEpochMs: pinnedEvaluatedAt,
  maximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
});

assert.equal(
  compositionRound.proofRecord.principalRef,
  compositionObservation.observationRecord.principalRef,
  "one binding, one ref across the D-P6 and D-P8 layers",
);
assert.equal(
  compositionRound.proofRecord.comparisonMetadata.observed_at_epoch_ms,
  compositionObservation.observationRecord.observationMetadata
    .observed_at_epoch_ms,
  "one clock read, same instant across the layers",
);

// The D-P8 layer verifies while the D-P6 layer stays structural only.
assert.equal(
  compositionObservation.assessment.authenticationObservationState,
  "fixture_observed_local_authentication",
  "the frozen D-P6 vocabulary classifies the same round structurally",
);
assert.equal(
  compositionObservation.assessment.authenticationPosture,
  "fixture_structural_only_no_live_authentication",
);
assert.equal(
  compositionRound.assessment.authenticationMechanicState,
  "receiver_verified_knowledge_factor",
);
assert.equal(
  compositionRound.assessment.reason,
  "all_challenge_checks_satisfied",
);
assert.equal(
  compositionRound.assessment.authenticationPosture,
  "receiver_verified_local_knowledge_factor",
);
assert.deepEqual(compositionRound.assessment.unsatisfiedChecks, []);
refusedTuple(compositionRound.assessment);

// Control: a wrong knowledge factor on the same round shape never
// verifies, while the D-P6 fact-of-event still completes structurally.
const controlRound = runLocalAuthenticationChallengeRound({
  verifierRecord: compositionVerifier.verifierRecord,
  responseDigestHex: await computeSecretDigestHex(
    pinnedSaltHex,
    POND_STAGE_DP8_OTHER_SECRET,
  ),
  comparedAtEpochMs: pinnedComparedAt,
  evaluatedAtEpochMs: pinnedEvaluatedAt,
  maximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
});
assert.equal(controlRound.assessment.authenticationMechanicState, "not_verified");
assert.deepEqual(controlRound.assessment.unsatisfiedChecks, [
  "comparison_recomputed",
]);
refusedTuple(controlRound.assessment);
assert.equal(
  controlRound.proofRecord.principalRef,
  compositionObservation.observationRecord.principalRef,
);

// ---------------------------------------------------------------------------
// Block 7 — shell wiring drive: fail-closed on missing document; the
// D-P7 fact-of-event click without an enrolled verifier; module-scope
// enrollment; the challenge click renders the D-P8 assessment verbatim
// with the value wiped; the wrong value is refused.
// ---------------------------------------------------------------------------

assert.equal(renderPondLocalAuthentication(undefined), false);

const elementStub = () => {
  const element = {
    className: "",
    textContent: "",
    value: "",
    children: [],
    listeners: {},
    dataset: {},
    addEventListener(type, handler) {
      (element.listeners[type] ??= []).push(handler);
    },
    append(...nodes) {
      element.children.push(...nodes);
    },
    replaceChildren(...nodes) {
      element.children = nodes;
    },
    focus() {},
    blur() {},
  };
  return element;
};

const documentStub = (withEnrollment = false) => {
  const nodes = {
    root: elementStub(),
    gestureButton: elementStub(),
    status: elementStub(),
    secretInput: withEnrollment ? elementStub() : null,
    enrollButton: withEnrollment ? elementStub() : null,
  };
  return {
    nodes,
    querySelector(selector) {
      if (selector === "[data-local-authentication]") return nodes.root;
      if (selector === "[data-local-authentication-gesture]")
        return nodes.gestureButton;
      if (selector === "[data-local-authentication-status]")
        return nodes.status;
      if (selector === "[data-local-authentication-secret]")
        return nodes.secretInput;
      if (selector === "[data-local-authentication-enroll]")
        return nodes.enrollButton;
      return null;
    },
    createElement() {
      return elementStub();
    },
  };
};

const collectText = (node) =>
  [node.textContent, ...node.children.map(collectText)].join("\n");

// The minimal host shape — exactly the D-P7 selftest's stub, with no
// D-P8 affordances anywhere — keeps the D-P7 fact-of-event flow.
const plainDocument = documentStub(false);
assert.equal(renderPondLocalAuthentication(plainDocument), true);
assert.equal(
  plainDocument.nodes.root.dataset.localAuthenticationRendered,
  "true",
);
plainDocument.nodes.gestureButton.listeners.click[0]();
assert.match(
  collectText(plainDocument.nodes.status),
  /Observed local authentication event · fixture_observed_local_authentication/,
);
assert.match(collectText(plainDocument.nodes.status), /PrincipalId issued\nfalse/);

// The enrollment path: the supplied value is wiped immediately and the
// module-scope verifier is armed.
const enrolledDocument = documentStub(true);
assert.equal(renderPondLocalAuthentication(enrolledDocument), true);
enrolledDocument.nodes.secretInput.value = POND_STAGE_DP8_PINNED_SECRET;
await enrolledDocument.nodes.enrollButton.listeners.click[0]();
assert.equal(enrolledDocument.nodes.secretInput.value, "");
assert.match(
  collectText(enrolledDocument.nodes.status),
  /Local verifier enrolled · receiver_enrolled_knowledge_verifier/,
);
assert.match(collectText(enrolledDocument.nodes.status), /Digest only/);
assert.match(collectText(enrolledDocument.nodes.status), /PrincipalId issued\nfalse/);
assert.match(collectText(enrolledDocument.nodes.status), /Authority\nnone/);

// The enrolled gesture with the right value verifies the knowledge factor
// and renders the D-P8 assessment verbatim.
enrolledDocument.nodes.secretInput.value = POND_STAGE_DP8_PINNED_SECRET;
await enrolledDocument.nodes.gestureButton.listeners.click[0]();
const verifiedText = collectText(enrolledDocument.nodes.status);
assert.match(
  verifiedText,
  /Local authentication event · fixture_observed_local_authentication · receiver_verified_knowledge_factor/,
);
assert.match(
  verifiedText,
  /Comparison\nexact_digest_match · recomputed exact_digest_match/,
);
assert.match(verifiedText, /Posture\nreceiver_verified_local_knowledge_factor/);
assert.match(verifiedText, /PrincipalId issued\nfalse/);
assert.match(verifiedText, /Authority\nnone/);
assert.match(verifiedText, /proving control is not authorization/);
assert.equal(enrolledDocument.nodes.secretInput.value, "");

// The same enrolled gesture with a wrong value is refused.
enrolledDocument.nodes.secretInput.value = POND_STAGE_DP8_OTHER_SECRET;
await enrolledDocument.nodes.gestureButton.listeners.click[0]();
const mismatchedText = collectText(enrolledDocument.nodes.status);
assert.match(
  mismatchedText,
  /Local authentication event · fixture_observed_local_authentication · not_verified/,
);
assert.match(
  mismatchedText,
  /Comparison\ndigest_mismatch · recomputed digest_mismatch/,
);
assert.equal(
  /receiver_verified_local_knowledge_factor/.test(mismatchedText),
  false,
);
assert.match(mismatchedText, /PrincipalId issued\nfalse/);

// With an enrolled verifier but nothing supplied, the gesture still
// renders the D-P6 fact-of-event line.
await enrolledDocument.nodes.gestureButton.listeners.click[0]();
assert.match(
  collectText(enrolledDocument.nodes.status),
  /Observed local authentication event · fixture_observed_local_authentication/,
);

// ---------------------------------------------------------------------------
// Block 8 — static markup contract and module-text hygiene.
// ---------------------------------------------------------------------------

// The D-P7 pinned markup stays intact.
assert.match(html, /data-local-authentication>/);
assert.match(html, /agents-local-authentication-title/);
assert.match(html, /Local authentication — live shell observation/);
assert.match(
  html,
  /id="pond-local-authentication-gesture" data-local-authentication-gesture/,
);
assert.match(html, /data-local-authentication-status/);
assert.match(
  html,
  /<script type="module" src="pond-local-authentication\.js"><\/script>/,
);
assert.match(html, /data-agents-value="principalBinding\.principalRef"/);
assert.match(html, /data-agents-value="principalBinding\.bindingState"/);
assert.match(
  html,
  /data-agents-value="principalBinding\.authenticationPerformed"/,
);
assert.match(html, /data-agents-value="principalBinding\.ceremonyPosture"/);
assert.match(
  html,
  /Fixture projection only — Stage D stays blocked on real authentication and local principal binding\./,
);

// The D-P8 enrollment affordance is additive markup in the same panel:
// the masked input lives in the HTML, never in module text.
assert.match(
  html,
  /<input type="password" id="pond-local-authentication-secret" data-local-authentication-secret/,
);
assert.match(html, /data-local-authentication-enroll/);
assert.match(html, /Local knowledge-factor mechanic \(Stage D-P8\): enroll a local verifier/);

// The module text carries no secret material, no storage, no transport,
// no persistence.
for (const forbidden of [
  "__TAURI__",
  "invoke(",
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "localStorage",
  "sessionStorage",
  "password",
  "passphrase",
]) {
  assert.equal(
    moduleText.includes(forbidden),
    false,
    `shell wiring module must not carry ${forbidden}`,
  );
}
assert.match(
  moduleText,
  /from "\.\/generated\/pond-stage-d-local-authentication\.js"/,
);

// The pinned secret itself must never appear in the module.
assert.equal(
  moduleText.includes(POND_STAGE_DP8_PINNED_SECRET),
  false,
  "the pinned secret must exist only in this selftest",
);

assert.equal(
  packageJson.scripts["test:stage-d-p8"],
  "node scripts/pond-local-authentication-mechanic-selftest.mjs",
);

// The `typeof document` tail guard is a no-op under node — importing this
// module here already proves the guard skipped the auto-mount.
assert.equal(globalThis.document, undefined);

console.log("POND_STAGE_DP8_LOCAL_AUTHENTICATION_MECHANIC_SELFTEST_PASS");