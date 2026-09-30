// Stage D-P15 selftest: the live authentication session lane. The matrix
// recomputation proves the fourteen session arms and the four read-gate
// arms agree with the real assessors; the identity ties prove the receiver
// legs cannot drift from the frozen D-P5/D-P6/D-P8/D-P9/D-P10 exports and
// that the receiver secret binds the pinned verifier digest; the negatives
// block proves every recompute break lands on its mapped cause; the
// lifecycle block proves the inclusive freshness boundary, the future-time
// refusal, invalid-record first, retraction-first, and the expired
// reassessment; the gate block proves the refusals land with honest frozen
// echoes and that the D-P14 collaborative lane recomposes unchanged (no
// widening); the ceiling/frozen block proves the all-false ceiling and
// that the frozen pins did not move; the hygiene block proves the secrets
// and the env name stay out of every non-sanctioned file, the banned
// vocabulary out of the cut's own sources, and the inventory union intact;
// the ui wiring block proves the committed generated bundle, the render
// drive, the additive markup, and the module hygiene; and the env-gated
// live block performs the real receiver cycle (secret from env only,
// fresh generated salt, recompute over node:crypto) and proves expiry by
// pure parameter arithmetic — never in CI.

import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { createHash, randomBytes } from "node:crypto";

import {
  stageDP15LiveSessionMatrix,
  stageDP15LiveReadGateMatrix,
  stageDP15ReceiverRef,
  stageDP15EvaluatedAtEpochMs,
  stageDP15ExpiredEvaluationEpochMs,
  stageDP15StaleEpochMs,
  stageDP15ReceiverMaximumAgeMs,
  stageDP15HealthyObservedAtEpochMs,
  stageDP15ReceiverSaltHex,
  stageDP15ReceiverVerifierDigestHex,
  stageDP15MismatchDigestHex,
} from "../src/fixtures/stage-d-p15-live-session.ts";
import {
  assessPondLiveSessionEstablishment,
  POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS,
} from "../src/contracts/pond-live-session-establishment.ts";
import { assessPondLiveSessionReadGate } from "../src/contracts/pond-live-session-read-gate.ts";

import { stageDP10CompositionComplete } from "../src/fixtures/stage-d-p10-private-reads.ts";
import { stageDP6AuthenticationObservationComplete } from "../src/fixtures/stage-d-p6-local-principal-authentication-observation.ts";
import { assessPondLocalPrincipalBindingEstablishment } from "../src/contracts/pond-local-principal-binding-establishment.ts";
import { assessPondLocalPrincipalAuthenticationObservation } from "../src/contracts/pond-local-principal-authentication-observation.ts";
import {
  assessPondLocalAuthenticationVerifierRecord,
  assessPondLocalAuthenticationChallengeProof,
} from "../src/contracts/pond-local-authentication-mechanic.ts";
import { assessPondLocalPrincipalIdIssuance } from "../src/contracts/pond-local-principal-id-issuance.ts";
import { assessPondErc8004IdentityMapping } from "../src/contracts/pond-erc8004-identity-mapping.ts";
import { assessPondPrivateReadActivation } from "../src/contracts/pond-private-read-activation.ts";
import { assessPondPrivateReadActivationComposition } from "../src/contracts/pond-private-read-activation-composition.ts";
import {
  assessPondCollaborativeReadActivation,
  POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS,
} from "../src/contracts/pond-collaborative-read-activation.ts";
import { stageDP14CollaborativeReadGateMatrix } from "../src/fixtures/stage-d-p14-collaborative-structural-reads.ts";

import {
  assessPondLiveSessionEstablishment as assessGeneratedEstablishment,
  assessPondLiveSessionReadGate as assessGeneratedReadGate,
} from "../ui/generated/pond-stage-d-live-session.js";
import {
  currentLiveReadGatePosture,
  currentLiveSessionPosture,
  establishLiveSession,
  renderPondLiveSession,
  retractLiveSession,
} from "../ui/pond-live-session.js";

const repoRoot = new URL("..", import.meta.url).pathname;

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const assertDeepFrozen = (value, path) => {
  assert.ok(Object.isFrozen(value), `not frozen: ${path}`);
  for (const entry of Object.values(value)) {
    if (entry !== null && typeof entry === "object") {
      assertDeepFrozen(entry, `${path}.*`);
    }
  }
};

const assertLacksKeys = (value, banned, path) => {
  if (value === null || typeof value !== "object") return;
  for (const key of Object.keys(value)) {
    assert.ok(
      !banned.includes(key),
      `assessment carries frozen name ${key} at ${path}`,
    );
    assertLacksKeys(value[key], banned, `${path}.${key}`);
  }
};

const walkFiles = (root) => {
  const paths = [];
  const walk = (directory) => {
    for (const name of readdirSync(directory)) {
      const current = join(directory, name);
      if (statSync(current).isDirectory()) walk(current);
      else paths.push(current);
    }
  };
  walk(root);
  return paths;
};

let blocks = 0;
const block = (label, run) => {
  blocks += 1;
  console.log(`block ${blocks}: ${label}`);
  run();
};

// Fresh establishment/gate runs collected across the blocks, reused by
// the frozen-name walk in hygiene. Only D-P15 assessments land here —
// never a frozen family assessment.
let dp15FreshRuns = [];

const SESSION_KEYS = [
  "receiverHeldPrincipalRef",
  "establishmentRecord",
  "dp5CeremonyRecord",
  "dp6ObservationRecord",
  "dp8VerifierRecord",
  "dp8ProofRecord",
  "dp9IssuanceRecord",
  "dp9MappingRecord",
  "dp10ActivationRecord",
  "receiverRetractionRecord",
  "receiverEvaluatedAtEpochMs",
  "receiverMaximumAgeMs",
];

const GATE_KEYS = [
  "receiverHeldPrincipalRef",
  "establishmentRecord",
  "dp5CeremonyRecord",
  "dp6ObservationRecord",
  "dp8VerifierRecord",
  "dp8ProofRecord",
  "dp9IssuanceRecord",
  "dp9MappingRecord",
  "dp10ActivationRecord",
  "receiverRetractionRecord",
  "receiverEvaluatedAtEpochMs",
  "receiverMaximumAgeMs",
];

const sessionInputOf = (entry) => {
  const input = {};
  for (const key of SESSION_KEYS) input[key] = entry[key];
  return input;
};

const gateInputOf = (entry) => {
  const input = {};
  for (const key of GATE_KEYS) input[key] = entry[key];
  input.readGateRecord = entry.readGateRecord;
  return input;
};

const runEstablishment = (entry) => {
  const fresh = assessPondLiveSessionEstablishment(sessionInputOf(entry));
  dp15FreshRuns.push(fresh);
  return fresh;
};

const runReadGate = (entry) => {
  const fresh = assessPondLiveSessionReadGate(gateInputOf(entry));
  dp15FreshRuns.push(fresh);
  return fresh;
};

const byLabel = (matrix, label) => {
  const entry = matrix.find((candidate) => candidate.fixtureLabel === label);
  assert.ok(entry, `missing fixture arm: ${label}`);
  return entry;
};

const evaluated = stageDP15EvaluatedAtEpochMs;
const maximumAge = stageDP15ReceiverMaximumAgeMs;
const staleEpoch = stageDP15StaleEpochMs;
const expiredEvaluation = stageDP15ExpiredEvaluationEpochMs;

const establishedArm = byLabel(
  stageDP15LiveSessionMatrix,
  "live_session_established",
);
const gateActiveArm = byLabel(
  stageDP15LiveReadGateMatrix,
  "live_session_private_reads_live_activated",
);

const frozenArm = () => stageDP10CompositionComplete;

// ---------------------------------------------------------------
// Block 1: matrix recomputation — every session arm and gate arm
// deep-equal their pinned assessments recomputed through the real
// contracts, the positive arms carry the exact satisfied-check lists,
// every fixture export is deep-frozen, and the recomputed assessments
// carry no frozen family name.
// ---------------------------------------------------------------
block("matrix", () => {
  for (const entry of stageDP15LiveSessionMatrix) {
    const fresh = runEstablishment(entry);
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
  }
  for (const entry of stageDP15LiveReadGateMatrix) {
    const fresh = runReadGate(entry);
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
  }
  const arm = establishedArm.assessment;
  assert.equal(
    arm.sessionEstablishmentState,
    "live_session_scoped_authentication_established",
  );
  assert.equal(arm.reason, "all_session_establishment_checks_satisfied");
  assert.deepEqual(
    [...arm.satisfiedChecks],
    [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "establishment_basis_receiver_performed_not_inferred",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening",
    ],
  );
  assert.deepEqual(
    [...arm.unsatisfiedChecks],
    [],
  );
  assert.equal(
    arm.establishmentScopePosture,
    "live_session_scoped_receiver_shell_restart_ends_establishment",
  );
  const gate = gateActiveArm.assessment;
  assert.equal(
    gate.liveSessionReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
  );
  assert.equal(gate.reason, "all_read_gate_checks_satisfied");
  assert.deepEqual(
    [...gate.satisfiedChecks],
    [
      "read_gate_record_well_formed",
      "read_gate_bound_to_receiver_held_principal",
      "read_gate_basis_receiver_owned_and_single_principal",
      "live_session_establishment_reverified_positive_and_fresh",
      "frozen_private_read_structural_activation_independently_reinspected_active",
      "read_gate_refuses_memory_lanes_collaborative_widening_and_agent_reach",
    ],
  );
  assert.deepEqual([...gate.unsatisfiedChecks], []);
  assertDeepFrozen(stageDP15LiveSessionMatrix, "sessionMatrix");
  assertDeepFrozen(stageDP15LiveReadGateMatrix, "gateMatrix");
  // The frozen-name walk over the fresh runs: the D-P14 banned list, the
  // D-P12/P13 vocabularies, and this cut's own frozen-name bans
  // (sessionScopePosture / activationState are never this cut's own
  // names — the mapped echoes carry them only behind mapped* prefixes).
  const bannedNames = [
    "privateReadsActivated",
    "principalIdIssued",
    "mappingEstablishmentState",
    "onchainVerificationState",
    "collaborativeReadPosture",
    "collaborativeReadScopePosture",
    "readScopePosture",
    "activationState",
    "readAdmissionState",
    "privateReadActivationState",
    "sessionScopePosture",
    "declaredMode",
    "forgeBinding",
    "advisoryPosture",
    "collaborativeReadActivationState",
  ];
  for (const run of dp15FreshRuns) {
    assertLacksKeys(run, bannedNames, "freshRun");
  }
});

// ---------------------------------------------------------------
// Block 2: identity ties — the receiver legs are literal copies of the
// frozen D-P5/D-P6/D-P8/D-P9/D-P10 exports, one ref everywhere, the
// receiver secret binds the pinned verifier digest, and the mapped echoes
// agree with direct frozen-assessor re-runs on every arm (including the
// refused ones).
// ---------------------------------------------------------------
block("identityTies", () => {
  // (a) the pinned receiver secret — sanctioned to this selftest block.
  const receiverSecret = "pond-stage-d-p8-fixture-secret";
  const recomputed = createHash("sha256")
    .update(Buffer.from(stageDP15ReceiverSaltHex, "hex"))
    .update(receiverSecret, "utf8")
    .digest("hex");
  assert.equal(
    recomputed,
    stageDP15ReceiverVerifierDigestHex,
    "the pinned verifier digest does not bind the receiver secret over the pinned salt",
  );
  // The mismatch digest is honestly different, but the same length.
  assert.notEqual(stageDP15MismatchDigestHex, stageDP15ReceiverVerifierDigestHex);
  assert.equal(
    stageDP15MismatchDigestHex.length,
    stageDP15ReceiverVerifierDigestHex.length,
  );

  // (b) every leg on the established arm ties to the frozen export.
  const frozen = stageDP10CompositionComplete;
  const arm = establishedArm;
  assert.deepEqual(
    deepClone(arm.dp5CeremonyRecord),
    deepClone(frozen.dp5CeremonyRecord),
    "receiver D-P5 leg drifted from the frozen D-P10 export",
  );
  assert.deepEqual(
    deepClone(arm.dp8VerifierRecord),
    deepClone(frozen.dp8VerifierRecord),
    "receiver D-P8 verifier leg drifted from the frozen D-P10 export",
  );
  assert.deepEqual(
    deepClone(arm.dp8ProofRecord),
    deepClone(frozen.dp8ProofRecord),
    "receiver D-P8 proof leg drifted from the frozen D-P10 export",
  );
  assert.deepEqual(
    deepClone(arm.dp9IssuanceRecord),
    deepClone(frozen.dp9IssuanceRecord),
    "receiver D-P9 issuance leg drifted from the frozen D-P10 export",
  );
  assert.deepEqual(
    deepClone(arm.dp9MappingRecord),
    deepClone(frozen.dp9MappingRecord),
    "receiver D-P9 mapping leg drifted from the frozen D-P10 export",
  );
  assert.deepEqual(
    deepClone(arm.dp10ActivationRecord),
    deepClone(frozen.readActivationRecord),
    "receiver D-P10 activation leg drifted from the frozen D-P10 export",
  );
  assert.deepEqual(
    deepClone(arm.dp6ObservationRecord),
    deepClone(stageDP6AuthenticationObservationComplete.observationRecord),
    "receiver D-P6 leg drifted from the frozen D-P6 export",
  );
  assert.equal(arm.receiverHeldPrincipalRef, frozen.receiverHeldPrincipalRef);
  assert.equal(arm.receiverEvaluatedAtEpochMs, frozen.receiverEvaluatedAtEpochMs);
  assert.equal(arm.receiverMaximumAgeMs, frozen.receiverMaximumAgeMs);

  // (c) one ref everywhere: the establishment and read-gate records are
  // bound to the receiver-held ref on every arm.
  for (const entry of stageDP15LiveSessionMatrix) {
    assert.equal(entry.receiverHeldPrincipalRef, stageDP15ReceiverRef, entry.fixtureLabel);
    assert.equal(entry.establishmentRecord.principalRef, stageDP15ReceiverRef, entry.fixtureLabel);
  }
  for (const entry of stageDP15LiveReadGateMatrix) {
    assert.equal(entry.receiverHeldPrincipalRef, stageDP15ReceiverRef, entry.fixtureLabel);
    assert.equal(entry.establishmentRecord.principalRef, stageDP15ReceiverRef, entry.fixtureLabel);
    assert.equal(entry.readGateRecord.principalRef, stageDP15ReceiverRef, entry.fixtureLabel);
  }

  // (d) the mapped echoes agree with direct frozen-assessor re-runs on
  // every session arm — including every refusal arm.
  for (const entry of stageDP15LiveSessionMatrix) {
    const dp6Direct = assessPondLocalPrincipalAuthenticationObservation({
      observationRecord: entry.dp6ObservationRecord,
      receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
      evaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
      maximumAgeMs: entry.receiverMaximumAgeMs,
    });
    const echo6 = entry.assessment;
    assert.equal(dp6Direct.authenticationObservationState, echo6.mappedDp6ObservationState, entry.fixtureLabel);
    assert.equal(dp6Direct.reason, echo6.mappedDp6Reason, entry.fixtureLabel);
    assert.deepEqual(
      deepClone(dp6Direct.freshnessDiagnosis),
      deepClone(echo6.mappedDp6FreshnessDiagnosis),
      entry.fixtureLabel,
    );
    if (entry.dp8VerifierRecord !== null && entry.dp8ProofRecord !== null) {
      const dp8Direct = assessPondLocalAuthenticationChallengeProof({
        proofRecord: entry.dp8ProofRecord,
        verifierRecord: entry.dp8VerifierRecord,
        receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
        evaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
        maximumAgeMs: entry.receiverMaximumAgeMs,
      });
      assert.equal(dp8Direct.authenticationMechanicState, echo6.mappedDp8MechanicState, entry.fixtureLabel);
      assert.equal(dp8Direct.reason, echo6.mappedDp8Reason, entry.fixtureLabel);
      assert.equal(dp8Direct.comparison, echo6.mappedDp8Comparison, entry.fixtureLabel);
      assert.equal(dp8Direct.recomputedComparison, echo6.mappedDp8RecomputedComparison, entry.fixtureLabel);
    }
    if (entry.dp10ActivationRecord !== null) {
      const dp10Direct = assessPondPrivateReadActivation({
        activationRecord: entry.dp10ActivationRecord,
        receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
        dp5CeremonyRecord: entry.dp5CeremonyRecord,
        dp8VerifierRecord: entry.dp8VerifierRecord,
        dp8ProofRecord: entry.dp8ProofRecord,
        dp9IssuanceRecord: entry.dp9IssuanceRecord,
        dp9MappingRecord: entry.dp9MappingRecord,
        receiverEvaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
        receiverMaximumAgeMs: entry.receiverMaximumAgeMs,
      });
      assert.equal(dp10Direct.activationState, echo6.mappedDp10ActivationState, entry.fixtureLabel);
      assert.equal(dp10Direct.reason, echo6.mappedDp10Reason, entry.fixtureLabel);
    }
  }
});

// ---------------------------------------------------------------
// Block 3: recompute-agreement negatives — a claimed comparison that
// contradicts the digests, an honestly different digest, a salt flip, and
// a ref swap all refuse with their mapped causes and honest echoes.
// ---------------------------------------------------------------
block("recomputeAgreementNegatives", () => {
  // (a) claimed comparison disagrees: digests match but the claimed
  // comparison says mismatch — the recompute law refuses (fixture arm 4).
  const disagreement = byLabel(
    stageDP15LiveSessionMatrix,
    "claimed_comparison_disagrees_with_recompute",
  ).assessment;
  assert.equal(disagreement.reason, "knowledge_factor_not_verified_or_unfresh");
  assert.equal(disagreement.mappedDp8RecomputedComparison, "exact_digest_match");
  assert.equal(disagreement.mappedDp8Comparison, "digest_mismatch");

  // (b) the honestly mismatching proof (fixture arm 3): the claimed
  // comparison agrees with an honest recompute — but recompute verdict is
  // mismatch, so verification still refuses.
  const mismatch = byLabel(
    stageDP15LiveSessionMatrix,
    "verifier_proof_digest_mismatch",
  ).assessment;
  assert.equal(mismatch.reason, "knowledge_factor_not_verified_or_unfresh");
  assert.equal(mismatch.mappedDp8MechanicState, "not_verified");
  assert.equal(mismatch.mappedDp8Reason, "receiver_challenge_proof_incomplete");
  assert.equal(mismatch.mappedDp8Comparison, "digest_mismatch");
  assert.equal(mismatch.mappedDp8RecomputedComparison, "digest_mismatch");

  // (c) a salt flip between verifier and proof: the proof's own binding
  // no longer matches the enrolled verifier — refused with the frozen
  // D-P8 reason visible in the mapped echo.
  const healthy = sessionInputOf(establishedArm);
  const saltFlip = {
    ...healthy,
    dp8VerifierRecord: {
      ...deepClone(healthy.dp8VerifierRecord),
      verifierBinding: {
        ...deepClone(healthy.dp8VerifierRecord).verifierBinding,
        saltHex: "ff1b2c3d4e5f60718293a4b5c6d7e8f9",
      },
    },
  };
  const saltFlipRun = assessPondLiveSessionEstablishment(saltFlip);
  dp15FreshRuns.push(saltFlipRun);
  assert.equal(
    saltFlipRun.reason,
    "knowledge_factor_not_verified_or_unfresh",
    "a flipped salt must refuse the knowledge-factor check",
  );
  assert.equal(saltFlipRun.mappedDp8Reason, "receiver_challenge_proof_incomplete");

  // (d) ref swap: an establishment record bound to another principal —
  // the binding check alone unsatisfies, and no leg covers for it.
  const refSwap = {
    ...healthy,
    establishmentRecord: {
      ...deepClone(healthy.establishmentRecord),
      principalRef: "principal:other:not-the-receiver",
    },
  };
  const refSwapRun = assessPondLiveSessionEstablishment(refSwap);
  dp15FreshRuns.push(refSwapRun);
  assert.equal(refSwapRun.reason, "receiver_session_establishment_proof_incomplete");
  assert.ok(
    refSwapRun.unsatisfiedChecks.includes(
      "establishment_bound_to_receiver_held_principal",
    ),
  );

  // (e) a D-P6 observation bound to another principal refuses at the
  // observation cause.
  const observationSwap = {
    ...healthy,
    dp6ObservationRecord: {
      ...deepClone(healthy.dp6ObservationRecord),
      principalRef: "principal:other:not-the-receiver",
    },
  };
  const observationSwapRun = assessPondLiveSessionEstablishment(observationSwap);
  dp15FreshRuns.push(observationSwapRun);
  assert.equal(
    observationSwapRun.reason,
    "authentication_event_not_observed_refused_or_unfresh",
  );
});

// ---------------------------------------------------------------
// Block 4: session lifecycle — the inclusive freshness boundary, the
// future-time refusal, invalid records refuse first, retraction is
// checked before the legs, expiry is reassessment-conditional, and the
// frozen D-P10 echo stays readable underneath every refusal.
// ---------------------------------------------------------------
block("sessionLifecycle", () => {
  const healthy = sessionInputOf(establishedArm);

  // (a) inclusive boundary: the establishment event exactly AT the
  // declared maximum age is fresh; one millisecond more is not.
  const boundaryInput = {
    ...healthy,
    establishmentRecord: {
      ...deepClone(healthy.establishmentRecord),
      establishmentMetadata: {
        established_at_epoch_ms: evaluated - maximumAge,
        freshness_basis: "establishment_event_time_only",
        currentness_posture: "not_established_consumer_must_evaluate",
      },
    },
  };
  const boundaryRun = assessPondLiveSessionEstablishment(boundaryInput);
  dp15FreshRuns.push(boundaryRun);
  assert.equal(boundaryRun.reason, "all_session_establishment_checks_satisfied");
  assert.equal(boundaryRun.establishmentFreshnessDiagnosis.state, "fresh");
  assert.equal(boundaryRun.establishmentFreshnessDiagnosis.observationAgeMs, maximumAge);
  const pastInput = {
    ...boundaryInput,
    establishmentRecord: {
      ...deepClone(boundaryInput.establishmentRecord),
      establishmentMetadata: {
        established_at_epoch_ms: evaluated - maximumAge - 1,
        freshness_basis: "establishment_event_time_only",
        currentness_posture: "not_established_consumer_must_evaluate",
      },
    },
  };
  const pastRun = assessPondLiveSessionEstablishment(pastInput);
  dp15FreshRuns.push(pastRun);
  assert.equal(pastRun.reason, "session_establishment_not_session_current");
  assert.equal(pastRun.establishmentFreshnessDiagnosis.reason, "declared_maximum_age_expired");

  // (b) a future establishment time refuses on its own diagnosis — the
  // evaluation clock never backdates a session.
  const futureInput = {
    ...healthy,
    establishmentRecord: {
      ...deepClone(healthy.establishmentRecord),
      establishmentMetadata: {
        established_at_epoch_ms: evaluated + 1_000,
        freshness_basis: "establishment_event_time_only",
        currentness_posture: "not_established_consumer_must_evaluate",
      },
    },
  };
  const futureRun = assessPondLiveSessionEstablishment(futureInput);
  dp15FreshRuns.push(futureRun);
  assert.equal(futureRun.reason, "session_establishment_not_session_current");
  assert.equal(futureRun.establishmentFreshnessDiagnosis.state, "unknown");
  assert.equal(futureRun.establishmentFreshnessDiagnosis.reason, "observation_time_in_future");

  // (c) invalid records refuse FIRST with the fallback diagnosis: a
  // missing key on an otherwise-healthy record is establishment_record_invalid,
  // scope posture honestly "not_established", version "invalid".
  const corruptInput = {
    ...healthy,
    establishmentRecord: (() => {
      const clone = deepClone(healthy.establishmentRecord);
      delete clone.establishmentBasis;
      return clone;
    })(),
  };
  const corruptRun = assessPondLiveSessionEstablishment(corruptInput);
  dp15FreshRuns.push(corruptRun);
  assert.equal(corruptRun.reason, "establishment_record_invalid");
  assert.equal(corruptRun.establishmentRecordVersion, "invalid");
  assert.equal(corruptRun.establishmentScopePosture, "not_established");
  assert.equal(
    corruptRun.establishmentFreshnessDiagnosis.reason,
    "observation_metadata_missing_or_invalid",
  );

  // (d) retraction is checked before the legs: the retracted arm carries
  // the retraction cause, an honest fresh diagnosis (the establishment
  // record itself was never invalid), and the frozen D-P10 echo still
  // readable underneath.
  const retracted = byLabel(
    stageDP15LiveSessionMatrix,
    "receiver_retraction_refused",
  ).assessment;
  assert.equal(retracted.reason, "receiver_retraction_on_record");
  assert.equal(retracted.establishmentFreshnessDiagnosis.state, "fresh");
  assert.equal(
    retracted.establishmentFreshnessDiagnosis.reason,
    "within_declared_maximum_age",
  );
  assert.equal(
    retracted.mappedDp10ActivationState,
    "fixture_structural_session_scoped_private_read_activation",
  );
  assert.equal(retracted.mappedDp10Reason, "all_activation_checks_satisfied");

  // (e) the expired reassessment: the legs' own echoes grow stale
  // honestly alongside the session refusal — no echo survives on stale
  // legs pretending freshness.
  const expired = byLabel(
    stageDP15LiveSessionMatrix,
    "session_not_fresh_at_reassessment",
  ).assessment;
  assert.equal(expired.reason, "session_establishment_not_session_current");
  assert.equal(expired.establishmentFreshnessDiagnosis.reason, "declared_maximum_age_expired");
  assert.equal(expired.establishmentFreshnessDiagnosis.observationAgeMs, maximumAge + 1);
  assert.equal(expired.mappedDp6FreshnessDiagnosis.state, "stale");
  assert.equal(
    expired.mappedDp6FreshnessDiagnosis.observationAgeMs,
    expiredEvaluation - stageDP15HealthyObservedAtEpochMs,
  );

  // (f) the no-secret arm: absent verifier and proof legs refuse with the
  // frozen D-P8 verdicts echoed verbatim; the diagnosis still computes.
  const noSecret = byLabel(
    stageDP15LiveSessionMatrix,
    "no_secret_ever_set",
  ).assessment;
  assert.equal(noSecret.reason, "knowledge_factor_not_verified_or_unfresh");
  assert.equal(noSecret.mappedDp8MechanicState, "not_verified");
  assert.equal(noSecret.mappedDp8Reason, "verifier_record_invalid");
  assert.equal(noSecret.mappedDp8FreshnessDiagnosis.state, "unknown");

  // (g) the stale frozen activation: legs green, session fresh — and the
  // one-millisecond-past frozen D-P10 activation refuses at the mapped
  // cause, echoing the frozen refusal verbatim.
  const staleFrozen = byLabel(
    stageDP15LiveSessionMatrix,
    "stale_frozen_activation_refused",
  ).assessment;
  assert.equal(
    staleFrozen.reason,
    "frozen_activation_not_structurally_ready_or_not_session_current",
  );
  assert.equal(staleFrozen.mappedDp10ActivationState, "not_activated");
  assert.equal(staleFrozen.mappedDp10Reason, "activation_not_session_current");
  assert.ok(
    staleFrozen.unsatisfiedChecks.includes(
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
    ),
  );
});

// ---------------------------------------------------------------
// Block 5: gate fail-closed and the no-widening proofs — the gate
// refusals land with honest frozen echoes; collaborative widening refuses
// at the dedicated scope cause; the D-P14 collaborative lane recomposes
// unchanged; the D-P14 vocabulary cannot enter this cut's records.
// ---------------------------------------------------------------
block("gateFailClosed", () => {
  // (a) the broken-establishment arm refuses at the gate's mapped cause
  // while the frozen D-P10 echo stays positive underneath.
  const brokenEstablishment = byLabel(
    stageDP15LiveReadGateMatrix,
    "gate_without_established_session",
  ).assessment;
  assert.equal(brokenEstablishment.reason, "live_session_not_established_refused_or_not_fresh");
  assert.equal(brokenEstablishment.liveSessionReadGateState, "no_active_live_session");
  assert.equal(
    brokenEstablishment.mappedLiveSessionEstablishmentReason,
    "receiver_session_establishment_proof_incomplete",
  );
  assert.equal(
    brokenEstablishment.mappedDp10ActivationState,
    "fixture_structural_session_scoped_private_read_activation",
  );
  assert.equal(brokenEstablishment.mappedDp10Reason, "all_activation_checks_satisfied");

  // (b) the broken frozen activation at the gate: the establishment
  // re-run refuses (its chain includes the frozen D-P10 gate), the gate
  // refuses with it, and the mapped echo carries the frozen refusal
  // verbatim.
  const brokenFrozen = byLabel(
    stageDP15LiveReadGateMatrix,
    "frozen_activation_broken_at_gate",
  ).assessment;
  assert.equal(brokenFrozen.reason, "live_session_not_established_refused_or_not_fresh");
  assert.equal(brokenFrozen.mappedLiveSessionEstablishmentReason, "frozen_activation_not_structurally_ready_or_not_session_current");
  assert.equal(brokenFrozen.mappedDp10ActivationState, "not_activated");
  assert.equal(brokenFrozen.mappedDp10Reason, "activation_record_invalid");

  // (c) collaborative widening refuses at the dedicated scope cause:
  // requesting the D-P14 collaborative scope against the live session is
  // a widening attempt, and the live session never rides it.
  const collaborativeWideningEntry = byLabel(
    stageDP15LiveReadGateMatrix,
    "collaborative_widening_refused",
  );
  const collaborativeWidening = collaborativeWideningEntry.assessment;
  assert.equal(collaborativeWidening.reason, "collaborative_or_agent_scope_refused");
  assert.equal(
    collaborativeWideningEntry.readGateRecord.requestedReadScope,
    "collaborative_multi_principal_read",
  );
  // The session leg echo stays positive on the widening arm — only the
  // requested cooperative scope is the blocker.
  assert.equal(
    collaborativeWidening.mappedLiveSessionEstablishmentState,
    "live_session_scoped_authentication_established",
  );

  // (d) a corrupted read-gate record refuses first.
  const corruptedGateInput = {
    ...gateInputOf(gateActiveArm),
    readGateRecord: (() => {
      const clone = deepClone(gateActiveArm.readGateRecord);
      delete clone.readGateBasis;
      return clone;
    })(),
  };
  const corruptedGateRun = assessPondLiveSessionReadGate(corruptedGateInput);
  dp15FreshRuns.push(corruptedGateRun);
  assert.equal(corruptedGateRun.reason, "read_gate_record_invalid");

  // (e) no-widening: the D-P14 collaborative lane recomposes unchanged
  // over its own frozen fixture — its state did not move to ride the
  // live session.
  const counterpartComplete = byLabel(
    stageDP14CollaborativeReadGateMatrix,
    "two_principal_structural_records",
  );
  const dp14KeysFrozen = assessPondCollaborativeReadActivation({
    activationRecord: counterpartComplete.collaborativeActivationRecord,
    receiverHeldPrincipalRef: counterpartComplete.receiverHeldPrincipalRef,
    counterpartPrincipalRef: counterpartComplete.counterpartPrincipalRef,
    counterpartJoinDeclarationRecord:
      counterpartComplete.counterpartJoinDeclarationRecord,
    receiverDp5CeremonyRecord: counterpartComplete.receiverDp5CeremonyRecord,
    receiverDp6ObservationRecord:
      counterpartComplete.receiverDp6ObservationRecord,
    receiverDp8VerifierRecord: counterpartComplete.receiverDp8VerifierRecord,
    receiverDp8ProofRecord: counterpartComplete.receiverDp8ProofRecord,
    receiverDp9IssuanceRecord: counterpartComplete.receiverDp9IssuanceRecord,
    receiverDp9MappingRecord: counterpartComplete.receiverDp9MappingRecord,
    receiverDp10ActivationRecord:
      counterpartComplete.receiverDp10ActivationRecord,
    counterpartDp5CeremonyRecord: counterpartComplete.counterpartDp5CeremonyRecord,
    counterpartDp6ObservationRecord:
      counterpartComplete.counterpartDp6ObservationRecord,
    counterpartDp8VerifierRecord:
      counterpartComplete.counterpartDp8VerifierRecord,
    counterpartDp8ProofRecord: counterpartComplete.counterpartDp8ProofRecord,
    counterpartDp9IssuanceRecord:
      counterpartComplete.counterpartDp9IssuanceRecord,
    counterpartDp9MappingRecord: counterpartComplete.counterpartDp9MappingRecord,
    counterpartDp10ActivationRecord:
      counterpartComplete.counterpartDp10ActivationRecord,
    evaluatedAtEpochMs: counterpartComplete.evaluatedAtEpochMs,
    maximumAgeMs: counterpartComplete.maximumAgeMs,
  });
  assert.equal(
    dp14KeysFrozen.collaborativeReadActivationState,
    "fixture_structural_session_scoped_collaborative_structural_read_activation",
    "the frozen D-P14 pin moved",
  );
  assert.equal(
    dp14KeysFrozen.reason,
    "all_collaborative_read_gate_checks_satisfied",
  );

  // (f) the D-P14 inventory is a strict subset: the composed D-P15
  // inventory carries every banned D-P14 key plus this cut's own four.
  for (const key of POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS) {
    assert.ok(
      POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS.includes(key),
      `forbidden key ${key} lost from the composed inventory`,
    );
  }
});

// ---------------------------------------------------------------
// Block 6: ceiling and frozen pins — the all-false ceiling on every
// positive arm, `authenticationPerformed` is absent everywhere, and the
// frozen D-P6/D-P10 pins recomputed live did not move.
// ---------------------------------------------------------------
block("ceilingAndFrozen", () => {
  const arm = establishedArm.assessment;
  const ceilingFields = [
    "sessionEstablishesGrant",
    "sessionEstablishesMembershipOrAdmission",
    "sessionGrantsAgentAccess",
    "sessionEstablishesCurrentTruth",
    "credentialAdmitted",
    "principalIdAcceptedAsAuthorization",
    "personalMemoryContentAdmitted",
    "currentTruthAdmitted",
  ];
  for (const key of ceilingFields) {
    assert.equal(arm[key], false, `${key} must be false on the established arm`);
  }
  assert.equal(arm.authority, "none");
  assert.equal(arm.runtimeActivationPosture, "not_included");
  assert.ok(
    !("authenticationPerformed" in arm),
    "the session assessment must never claim an authenticationPerformed flag",
  );
  assert.ok(
    !("sessionScopePosture" in arm),
    "the session assessment must never carry the frozen D-P10 scope name",
  );

  const gate = gateActiveArm.assessment;
  for (const key of [
    "readGateEstablishesGrant",
    "readGateEstablishesWriteSendOrSignCapability",
    "readGateEstablishesContentOrMemoryAccess",
    "sessionGrantsAgentAccess",
    "credentialAdmitted",
    "principalIdAcceptedAsAuthorization",
    "personalMemoryContentAdmitted",
    "currentTruthAdmitted",
  ]) {
    assert.equal(gate[key], false, `${key} must be false on the active gate arm`);
  }
  assert.equal(gate.authority, "none");
  assert.equal(gate.runtimeActivationPosture, "not_included");
  assert.ok(
    !("authenticationPerformed" in gate),
    "the gate assessment must never claim an authenticationPerformed flag",
  );

  // The frozen D-P10 composition and D-P6 pins recomputed live did not
  // move — the live session lane composes over frozen truth.
  const frozenComposition = assessPondPrivateReadActivationComposition({
    readActivationRecord: frozenArm().readActivationRecord,
    readAdmissionRecord: frozenArm().readAdmissionRecord,
    receiverHeldPrincipalRef: frozenArm().receiverHeldPrincipalRef,
    dp5CeremonyRecord: establishedArm.dp5CeremonyRecord,
    dp8VerifierRecord: establishedArm.dp8VerifierRecord,
    dp8ProofRecord: establishedArm.dp8ProofRecord,
    dp9IssuanceRecord: establishedArm.dp9IssuanceRecord,
    dp9MappingRecord: establishedArm.dp9MappingRecord,
    receiverEvaluatedAtEpochMs: establishedArm.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: establishedArm.receiverMaximumAgeMs,
  });
  dp15FreshRuns.push(frozenComposition);
  assert.deepEqual(
    deepClone(frozenComposition),
    deepClone(stageDP10CompositionComplete.assessment),
    "the frozen D-P10 composition pin moved",
  );
  const dp6Fresh = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: establishedArm.dp6ObservationRecord,
    receiverHeldPrincipalRef:
      stageDP6AuthenticationObservationComplete.observationRecord.principalRef,
    evaluatedAtEpochMs: stageDP6AuthenticationObservationComplete.evaluatedAtEpochMs,
    maximumAgeMs: stageDP6AuthenticationObservationComplete.maximumAgeMs,
  });
  dp15FreshRuns.push(dp6Fresh);
  assert.deepEqual(
    deepClone(dp6Fresh),
    deepClone(stageDP6AuthenticationObservationComplete.assessment),
    "the frozen D-P6 pin moved",
  );
});

// ---------------------------------------------------------------
// Block 7: hygiene — the secrets and the env name stay in sanctioned
// files only; the contract+fixture files carry no DOM-shaped needle, no
// network constant, no ui vocabulary, and no banned frozen name (quoted-
// index ties are the mapped plumbing and are exempt); the fixture keeps
// type-only imports; the forbidden-key union stays intact.
// ---------------------------------------------------------------
block("hygiene", () => {
  const contractPaths = [
    "src/contracts/pond-live-session-establishment.ts",
    "src/contracts/pond-live-session-read-gate.ts",
    "src/fixtures/stage-d-p15-live-session.ts",
  ];
  const texts = contractPaths.map((path) =>
    readFileSync(join(repoRoot, path), "utf8"),
  );

  // (a) secrets stay out of the cut's own files: the receiver secret's
  // needle — which is also a substring of the counterpart secret's needle
  // — appears in no contract/fixture file of this cut.
  for (const path of contractPaths) {
    const text = readFileSync(join(repoRoot, path), "utf8");
    assert.ok(
      !text.includes("fixture-secret"),
      `${path} carries a fixture secret's literal`,
    );
  }

  // (b) the env-gated live secret is env-only: its env name appears in no
  // file of the repository except the sanctioned selftests and this cut's
  // own doc (which records the invocation), and no literal secret ever
  // appears in fixture, src, ui, or docs. The counterpart secret's needle
  // is NOT re-scanned here — the frozen D-P14 walk owns that duty; this
  // cut's receiver secret needle is the D-P8 one, scanned in (a).
  const sanctionedForSecretNeedle = [
    "pond-live-session-establishment-selftest.mjs",
    "pond-local-authentication-mechanic-selftest.mjs",
    "pond-collaborative-structural-read-gate-selftest.mjs",
    "pond-local-principal-authentication-observation-selftest.mjs",
    "pond-private-read-activation-selftest.mjs",
    "pond-principal-id-issuance-erc8004-mapping-selftest.mjs",
    "pond-stage-d-p7-shell-wiring-selftest.mjs",
  ];
  const scannedFiles = walkFiles(join(repoRoot, "src"))
    .concat(walkFiles(join(repoRoot, "docs")))
    .concat(walkFiles(join(repoRoot, "scripts")))
    .concat(walkFiles(join(repoRoot, "ui")))
    .filter(
      (path) =>
        path.endsWith(".ts") ||
        path.endsWith(".mjs") ||
        path.endsWith(".md") ||
        path.endsWith(".js"),
    );
  for (const path of scannedFiles) {
    const name = path.split("/").pop();
    if (sanctionedForSecretNeedle.some((sanctioned) => name.endsWith(sanctioned)))
      continue;
    if (path.includes("generated")) continue; // committed bundle derives from src
    if (path.includes("stage-d-p15-live-authentication-session.md")) continue; // env-gated invocation is recorded there
    const text = readFileSync(path, "utf8");
    assert.ok(
      !text.includes("TOADAID_LIVE_LOCAL_AUTHENTICATION_SECRET"),
      `${path} mentions the live-secret env name outside the sanctioned selftest`,
    );
    assert.ok(
      !text.includes("TOADAID_LIVE_D_P15_SESSION"),
      `${path} mentions the env-gate name outside the sanctioned selftest`,
    );
  }

  // (c) DOM-shaped needles and transport/store text stay out of the
  // cut's contract and fixture files.
  const domNeedles = [
    "document.",
    "window.",
    "localStorage",
    "createElement",
    "innerHTML",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "WebSocket",
  ];
  contractPaths.forEach((path, index) => {
    for (const needle of domNeedles) {
      assert.ok(
        !texts[index].includes(needle),
        `${path} carries the DOM/transport needle ${needle}`,
      );
    }
  });

  // (d) network constants stay out of the cut's contract files.
  const networkNeedles = [
    "registryAddress: \"0x",
    "wss://",
    "https://",
    "http://",
    "eth_node",
    "json_rpc",
  ];
  contractPaths.forEach((path, index) => {
    for (const needle of networkNeedles) {
      assert.ok(
        !texts[index].includes(needle),
        `${path} carries the network constant ${needle}`,
      );
    }
  });

  // (e) the fixture is value-import-free.
  for (const path of contractPaths) {
    if (!path.includes("fixtures")) continue;
    const text = readFileSync(join(repoRoot, path), "utf8");
    for (const line of text.split("\n")) {
      if (line.startsWith("import")) {
        assert.ok(
          line.startsWith("import type {") || line.startsWith("import type {"),
          `${path}: non-type import ${line.trim()}`,
        );
      }
    }
  }

  // (f) the banned-name source walk over the two contract files: quoted-
  // index reads of frozen fields are the tie mechanism (D-P9 mapping/
  // D-P10 activation echoes) and are stripped before matching; the
  // needle then catches this cut re-declaring a frozen name as its own.
  const nameNeedles = [
    "privateReadsActivated",
    "principalIdIssued",
    "mappingEstablishmentState",
    "onchainVerificationState",
    "collaborativeReadPosture",
    "collaborativeReadScopePosture",
    "readScopePosture",
    "activationState",
    "readAdmissionState",
    "privateReadActivationState",
    "sessionScopePosture",
    "PondDeclaredMode",
    "declaredMode",
    "forgeBinding",
    "advisoryPosture",
    "POND_STAGE_DP12",
    "POND_STAGE_DP13",
    "pond-declared-mode-routing",
    "pond-knowledge-forge",
    "authenticationPerformed",
  ];
  const stripQuotedIndexReads = (text) =>
    text.replace(/\[\s*["'][A-Za-z_$][\w$]*["']\s*\]/g, "[]");
  for (const path of contractPaths) {
    if (!path.includes("contracts")) continue;
    const normalized = stripQuotedIndexReads(readFileSync(join(repoRoot, path), "utf8"));
    for (const needle of nameNeedles) {
      assert.ok(
        !normalized.includes(needle),
        `${path} carries frozen name ${needle} outside a quoted-index tie read`,
      );
    }
  }

  // (g) the inventory union stays intact: the D-P14 widest inventory is
  // the imported base, and this cut's four agent-reach keys are quoted in
  // full — the composed walk is exactly one key longer per addition.
  const contractText = texts[0];
  assert.ok(
    contractText.includes("POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS"),
    "the composed inventory must import the frozen D-P14 base",
  );
  for (const key of ["agentSession", "agentSecret", "agentAdmission", "chatMessage"]) {
    assert.ok(
      contractText.includes(`"${key}"`),
      `forbidden key ${key} missing from the contract inventory`,
    );
  }
  assert.equal(
    POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS.length,
    POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS.length + 4,
  );
});

// ---------------------------------------------------------------
// Block 8: ui wiring — the committed generated bundle ties to the src
// contracts; the render drive covers fail-closed, refusals, and the
// positive lifecycle; the markup contract holds; the module text stays
// clean; package.json wires the selftest and the render ceremony.
// ---------------------------------------------------------------
block("uiWiring", () => {
  // (a) generated-bundle tie: the committed artifact is the only bridge
  // from the ui module to the contracts, and its exported assessors
  // recompute the established arm identically to the src contracts.
  const srcRun = assessPondLiveSessionEstablishment(
    sessionInputOf(establishedArm),
  );
  const genRun = assessGeneratedEstablishment(sessionInputOf(establishedArm));
  assert.deepEqual(deepClone(genRun), deepClone(srcRun));
  const gateSrcRun = assessPondLiveSessionReadGate(gateInputOf(gateActiveArm));
  const gateGenRun = assessGeneratedReadGate(gateInputOf(gateActiveArm));
  assert.deepEqual(deepClone(gateGenRun), deepClone(gateSrcRun));

  // (b) render drive — fail-closed on missing document/elements.
  assert.equal(renderPondLiveSession(undefined), false);
  const elementStub = () => {
    const element = {
      className: "",
      textContent: "",
      children: [],
      listeners: {},
      dataset: {},
      value: "",
      addEventListener(type, handler) {
        (element.listeners[type] ??= []).push(handler);
      },
      append(...nodes) {
        element.children.push(...nodes);
      },
      replaceChildren(...nodes) {
        element.children = nodes;
      },
    };
    return element;
  };
  const documentStub = (withInput) => {
    const nodes = {
      root: elementStub(),
      establish: elementStub(),
      retract: elementStub(),
      status: elementStub(),
      input: withInput ? elementStub() : null,
    };
    const created = [];
    return {
      nodes,
      created,
      querySelector(selector) {
        if (selector === "[data-live-session]") return nodes.root;
        if (selector === "[data-live-session-establish]") return nodes.establish;
        if (selector === "[data-live-session-retract]") return nodes.retract;
        if (selector === "[data-live-session-status]") return nodes.status;
        if (selector === "[data-live-session-secret]") return nodes.input;
        return null;
      },
      createElement() {
        const node = elementStub();
        created.push(node);
        return node;
      },
    };
  };
  const missingStatus = documentStub(true);
  missingStatus.nodes.status = null;
  assert.equal(renderPondLiveSession(missingStatus), false);
  const missingRetract = documentStub(true);
  missingRetract.nodes.retract = null;
  assert.equal(renderPondLiveSession(missingRetract), false);

  // (c) the render drive on the empty module state — every refused path
  // is a synchronous render: the not-established note, the absent-verifier
  // establish refusal, and the nothing-to-retract note.
  const collectText = (node) =>
    [node.textContent, ...node.children.map(collectText)].join("\n");
  const renderedDocument = documentStub(true);
  assert.equal(renderPondLiveSession(renderedDocument), true);
  assert.equal(
    renderedDocument.nodes.root.dataset.liveSessionRendered,
    "true",
  );
  assert.match(
    collectText(renderedDocument.nodes.status),
    /Live session not established/,
  );
  const establishClick = renderedDocument.nodes.establish.listeners.click[0];
  assert.equal(
    typeof establishClick(),
    "undefined",
    "the absent-verifier refusal is a synchronous render",
  );
  assert.match(
    collectText(renderedDocument.nodes.status),
    /Refused — establish requires an enrolled local verifier first/,
  );
  const retractClick = renderedDocument.nodes.retract.listeners.click[0];
  assert.equal(typeof retractClick(), "undefined");
  assert.match(
    collectText(renderedDocument.nodes.status),
    /Nothing to retract/,
  );

  // (c2) the shell drive on the positive lifecycle: the live session
  // module exercises establish → current posture → expired posture →
  // retraction posture → read gate over the fixture clock — determinism
  // comes from the contract's purity, never from the wall clock.
  const observationRecord = deepClone(
    stageDP6AuthenticationObservationComplete.observationRecord,
  );
  const nowMs = evaluated;
  const verifierRecord = deepClone(establishedArm.dp8VerifierRecord);
  const proofRecord = deepClone(establishedArm.dp8ProofRecord);
  const establishment = establishLiveSession({
    verifierRecord,
    proofRecord,
    observationRecord,
    evaluatedAtEpochMs: nowMs,
    maximumAgeMs: maximumAge,
  });
  assert.equal(
    establishment.sessionState,
    "live_session_scoped_authentication_established",
    "the shell-drive establishment must succeed over the healthy legs",
  );
  const healthyPosture = currentLiveSessionPosture({ evaluatedAtEpochMs: nowMs });
  assert.equal(healthyPosture.assessment.reason, "all_session_establishment_checks_satisfied");
  const expiredPosture = currentLiveSessionPosture({
    evaluatedAtEpochMs: nowMs + maximumAge + 1,
  });
  assert.equal(expiredPosture.assessment.reason, "session_establishment_not_session_current");
  assert.equal(expiredPosture.sessionEstablishmentState, "not_established");
  const healthyGate = currentLiveReadGatePosture({ evaluatedAtEpochMs: nowMs });
  assert.equal(
    healthyGate.liveSessionReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
  );
  const expiredGate = currentLiveReadGatePosture({
    evaluatedAtEpochMs: nowMs + maximumAge + 1,
  });
  assert.equal(expiredGate.liveSessionReadGateState, "no_active_live_session");
  assert.equal(
    expiredGate.assessment.reason,
    "live_session_not_established_refused_or_not_fresh",
  );
  const retraction = retractLiveSession({ retractedAtEpochMs: nowMs + 1 });
  assert.equal(retraction.retracted, true);
  assert.equal(retraction.posture.reason, "receiver_retraction_on_record");
  const retractedGate = currentLiveReadGatePosture({ evaluatedAtEpochMs: nowMs + 1 });
  assert.equal(retractedGate.liveSessionReadGateState, "no_active_live_session");
  // The next established posture after retract stays refused — retraction
  // is a present fact on every re-assessment.
  const retractedPosture = currentLiveSessionPosture({ evaluatedAtEpochMs: nowMs + 2 });
  assert.equal(retractedPosture.assessment.reason, "receiver_retraction_on_record");
  // A re-establish over the healthy legs clears the retraction and
  // re-establishes honestly.
  const reestablish = establishLiveSession({
    verifierRecord,
    proofRecord,
    observationRecord: deepClone(stageDP6AuthenticationObservationComplete.observationRecord),
    evaluatedAtEpochMs: nowMs + 3,
    maximumAgeMs: maximumAge,
  });
  assert.equal(reestablish.sessionState, "live_session_scoped_authentication_established");
  // (d) markup contract on ui/pond-desktop.html — additive section and
  // script tag present, the D-P7/D-P1 pinned blocks intact.
  const html = readFileSync(join(repoRoot, "ui/pond-desktop.html"), "utf8");
  assert.match(html, /data-live-session>/);
  assert.match(html, /agents-live-session-title/);
  assert.match(html, /Live session — receiver-owned authentication gate/);
  assert.match(html, /data-live-session-establish/);
  assert.match(html, /data-live-session-retract/);
  assert.match(html, /data-live-session-status/);
  assert.match(
    html,
    /<script type="module" src="pond-live-session\.js"><\/script>/,
  );
  assert.match(html, /data-local-authentication/);
  assert.match(html, /data-agents-value="principalBinding\.principalRef"/);

  // (e) module-text hygiene and package.json wiring.
  const moduleText = readFileSync(join(repoRoot, "ui/pond-live-session.js"), "utf8");
  assert.match(
    moduleText,
    /from "\.\/generated\/pond-stage-d-live-session\.js"/,
  );
  assert.ok(
    !moduleText.includes('from "../src/'),
    "the shell module must never import src contracts directly",
  );
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
    assert.ok(
      !moduleText.includes(forbidden),
      `live-session shell module must not carry ${forbidden}`,
    );
  }
  const localModuleText = readFileSync(
    join(repoRoot, "ui/pond-local-authentication.js"),
    "utf8",
  );
  assert.ok(
    localModuleText.includes("export const enrolledLocalVerifierSnapshot"),
    "the D-P7 module must export the additive verifier snapshot",
  );
  const packageJson = JSON.parse(
    readFileSync(join(repoRoot, "package.json"), "utf8"),
  );
  assert.equal(
    packageJson.scripts["test:stage-d-p15"],
    "node scripts/pond-live-session-establishment-selftest.mjs",
  );
  assert.equal(
    packageJson.scripts["stage-d:render-live-session"],
    "node scripts/render-stage-d-live-session.mjs",
  );
});

// ---------------------------------------------------------------
// Block 9: env-gated live — the real receiver cycle with the secret read
// from the environment only, a fresh generated salt, recompute over
// node:crypto, establishment, and expiry by pure parameter arithmetic.
// Never set in CI: the gate keeps the offline sweep offline.
// ---------------------------------------------------------------
block("envGatedLive", () => {
  if (process.env.TOADAID_LIVE_D_P15_SESSION !== "1") {
    console.log("  (offline — set TOADAID_LIVE_D_P15_SESSION=1 to run the live cycle)");
    return;
  }
  const secret = process.env.TOADAID_LIVE_LOCAL_AUTHENTICATION_SECRET;
  assert.ok(
    typeof secret === "string" && secret.length > 0,
    "the env-gated live block requires a non-empty local authentication secret",
  );
  // The live secret never equals or contains a sanctioned fixture literal.
  assert.ok(
    !secret.includes("pond-stage-d-p8-fixture-secret"),
    "the live secret must not reuse a pinned fixture secret",
  );
  const saltHex = randomBytes(16).toString("hex");
  const liveVerifierDigestHex = createHash("sha256")
    .update(Buffer.from(saltHex, "hex"))
    .update(secret, "utf8")
    .digest("hex");

  const runtimeNow = 1_900_000_000_000;
  const verifierRecord = {
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    kind: "pond-local-authentication-verifier",
    principalRef: stageDP15ReceiverRef,
    mechanicClass: "local_knowledge_factor_challenge_response",
    verifierBinding: {
      algorithm: "sha256",
      saltHex,
      verifierDigestHex: liveVerifierDigestHex,
    },
    secretFreeInventoryPosture: "verifier_digest_only_no_secret_material",
    memoryLaneExclusionPosture:
      "binding_excludes_memory_narrative_transcript_lanes",
    authorityPosture: "verifier_grants_no_authority_membership_or_capability",
    revocabilityPosture: "verifier_revocable_by_re_enrollment",
    authority: "none",
  };
  const proofRecord = {
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    kind: "pond-local-authentication-challenge-proof",
    principalRef: stageDP15ReceiverRef,
    mechanicClass: "local_knowledge_factor_challenge_response",
    challengeDigestBinding: {
      algorithm: "sha256",
      saltHex,
      verifierDigestHex: liveVerifierDigestHex,
      responseDigestHex: liveVerifierDigestHex,
    },
    comparison: "exact_digest_match",
    comparisonMetadata: {
      observed_at_epoch_ms: runtimeNow,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    },
    secretFreeInventoryPosture: "response_digest_only_no_secret_material",
    memoryLaneExclusionPosture:
      "proof_excludes_memory_narrative_transcript_lanes",
    authorityPosture:
      "challenge_grants_no_authority_membership_or_capability",
    authority: "none",
  };
  const verifierRun = assessPondLocalAuthenticationVerifierRecord({
    verifierRecord,
    receiverHeldPrincipalRef: stageDP15ReceiverRef,
  });
  assert.equal(verifierRun.verifierState, "receiver_enrolled_knowledge_verifier");
  const proofRun = assessPondLocalAuthenticationChallengeProof({
    proofRecord,
    verifierRecord,
    receiverHeldPrincipalRef: stageDP15ReceiverRef,
    evaluatedAtEpochMs: runtimeNow,
    maximumAgeMs: 60_000,
  });
  assert.equal(proofRun.authenticationMechanicState, "receiver_verified_knowledge_factor");

  // The live establishment over the runtime receiver legs — the frozen
  // D-P10 activation record freshly built at the establishment event.
  const establishmentRecord = {
    contractVersion: "pond-live-session-establishment-d-p15",
    kind: "pond-live-session-establishment",
    principalRef: stageDP15ReceiverRef,
    establishmentBasis:
      "receiver_performed_local_authentication_session_establishment_not_inferred",
    establishedCapability: "receiver_live_session_scoped_shell_authentication",
    establishmentMetadata: {
      established_at_epoch_ms: runtimeNow,
      freshness_basis: "establishment_event_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    },
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
  };
  const liveRun = assessPondLiveSessionEstablishment({
    establishmentRecord,
    receiverHeldPrincipalRef: stageDP15ReceiverRef,
    dp5CeremonyRecord: stageDP15LiveSessionMatrix[0].dp5CeremonyRecord,
    dp6ObservationRecord: {
      ...stageDP15LiveSessionMatrix[0].dp6ObservationRecord,
      observationMetadata: {
        observed_at_epoch_ms: runtimeNow,
        freshness_basis: "source_observation_time_only",
        currentness_posture: "not_established_consumer_must_evaluate",
      },
    },
    dp8VerifierRecord: verifierRecord,
    dp8ProofRecord: proofRecord,
    dp9IssuanceRecord: stageDP15LiveSessionMatrix[0].dp9IssuanceRecord,
    dp9MappingRecord: stageDP15LiveSessionMatrix[0].dp9MappingRecord,
    dp10ActivationRecord: {
      ...stageDP15LiveSessionMatrix[0].dp10ActivationRecord,
      activationMetadata: {
        activated_at_epoch_ms: runtimeNow,
        freshness_basis: "activation_event_time_only",
        currentness_posture: "not_established_consumer_must_evaluate",
      },
    },
    receiverRetractionRecord: null,
    receiverEvaluatedAtEpochMs: runtimeNow,
    receiverMaximumAgeMs: 60_000,
  });
  assert.equal(
    liveRun.sessionEstablishmentState,
    "live_session_scoped_authentication_established",
    JSON.stringify(liveRun.reason),
  );
  assert.equal(liveRun.reason, "all_session_establishment_checks_satisfied");
  // Expiry by pure parameter: the contract is pure, so the same input one
  // millisecond past the maximum age refuses — no sleeping, no clock
  // injection.
  const expiredRun = assessPondLiveSessionEstablishment({
    establishmentRecord,
    receiverHeldPrincipalRef: stageDP15ReceiverRef,
    dp5CeremonyRecord: stageDP15LiveSessionMatrix[0].dp5CeremonyRecord,
    dp6ObservationRecord: {
      ...stageDP15LiveSessionMatrix[0].dp6ObservationRecord,
      observationMetadata: {
        observed_at_epoch_ms: runtimeNow,
        freshness_basis: "source_observation_time_only",
        currentness_posture: "not_established_consumer_must_evaluate",
      },
    },
    dp8VerifierRecord: verifierRecord,
    dp8ProofRecord: proofRecord,
    dp9IssuanceRecord: stageDP15LiveSessionMatrix[0].dp9IssuanceRecord,
    dp9MappingRecord: stageDP15LiveSessionMatrix[0].dp9MappingRecord,
    dp10ActivationRecord: stageDP15LiveSessionMatrix[0].dp10ActivationRecord,
    receiverRetractionRecord: null,
    receiverEvaluatedAtEpochMs: runtimeNow + 60_001,
    receiverMaximumAgeMs: 60_000,
  });
  assert.equal(expiredRun.reason, "session_establishment_not_session_current");
  // Secret hygiene over the produced artifacts: no produced record or
  // assessment carries the env secret or any banned key.
  const produced = [liveRun, expiredRun];
  for (const entry of produced) assertLacksKeys(entry, [...POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS], "liveRun");
  const serialized = JSON.stringify(produced);
  assert.ok(
    !serialized.includes(secret),
    "the live secret must never serialize into a produced artifact",
  );
});

console.log("POND_STAGE_DP15_LIVE_SESSION_SELFTEST_PASS");
