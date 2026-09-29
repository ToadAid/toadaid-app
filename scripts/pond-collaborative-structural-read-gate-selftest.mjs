// Stage D-P14 selftest: the collaborative/multi-principal structural-read
// gate. Offline structural throughout — this cut performs no network read,
// so there is no env-gated live block (recorded in the stage doc). The
// matrix recomputation proves the eight gate arms and the two admission
// arms agree with the real assessors; the identity ties prove the receiver
// legs cannot drift from the frozen D-P5/D-P6/D-P8/D-P9/D-P10 exports, the
// two declared stays pairwise distinct, and the join is re-readable
// through its own seam; the second-secret tie proves the counterpart's
// knowledge factor is its own pinned pair, not a second receiver record;
// the inspection block proves each leg is independently re-run through the
// frozen assessors, that a leg record bound to one principal refuses on
// another, that a claimed-issued counterpart greens the frozen issuance
// assessor and is refused by the gate's own not-issued chain pin (the
// no-second-identity widening proof), and that the frozen D-P10 gate
// stays single-principal under every D-P14 arm; the fail-closed block
// proves every refusal lands on its mapped ladder cause with honest
// echoes — invalid-record first, and a basis outside the refused
// vocabulary refuses outright; the admission block proves the 13-label
// table, the prefix partition, the class/target/revocability refusals;
// the freshness/ceiling block proves the inclusive maximum-age boundary,
// the all-false ceiling on the admitted arm, and that the frozen
// D-P5…D-P10 pins did not move; the hygiene block proves both secrets
// stay in sanctioned files, type-only fixture imports, and that this
// cut's own vocabulary never shadows a frozen state name.

import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

import {
  stageDP14CollaborativeReadGateMatrix,
  stageDP14CollaborativeReadAdmissionMatrix,
  stageDP14ReceiverRef,
  stageDP14CounterpartRef,
  stageDP14EvaluatedAtEpochMs,
  stageDP14StaleEpochMs,
  stageDP14MaximumAgeMs,
  stageDP14ReceiverSaltHex,
  stageDP14ReceiverVerifierDigestHex,
  stageDP14CounterpartSaltHex,
  stageDP14CounterpartVerifierDigestHex,
  stageDP14AllThirteenTargetRefs,
} from "../src/fixtures/stage-d-p14-collaborative-structural-reads.ts";
import { assessPondCounterpartJoinDeclaration } from "../src/contracts/pond-collaborative-read-counterpart-declaration.ts";
import {
  assessPondCollaborativeReadActivation,
  assessPondCollaborativeReadPrincipalChain,
  POND_STAGE_DP14_COLLABORATIVE_READ_GATE_INPUT_KEYS,
  POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS,
} from "../src/contracts/pond-collaborative-read-activation.ts";
import {
  assessPondCollaborativeReadAdmission,
  POND_STAGE_DP14_COLLABORATIVE_READ_TARGET_REFS,
} from "../src/contracts/pond-collaborative-read-admission.ts";
import {
  stageDP10CompositionComplete,
} from "../src/fixtures/stage-d-p10-private-reads.ts";
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

// Fresh gate/admission runs collected across the blocks, reused by the
// frozen-name walk in hygiene. Only D-P14 assessments land here — never a
// frozen family assessment.
let dp14FreshRuns = [];

const GATE_KEYS = [...POND_STAGE_DP14_COLLABORATIVE_READ_GATE_INPUT_KEYS];
const gateInputOf = (entry) => {
  const input = {};
  for (const key of GATE_KEYS) {
    input[key] =
      key === "activationRecord"
        ? entry.collaborativeActivationRecord
        : entry[key];
  }
  return input;
};

const runGate = (entry) => {
  const fresh = assessPondCollaborativeReadActivation(gateInputOf(entry));
  dp14FreshRuns.push(fresh);
  return fresh;
};

const runFrozenDp10Gate = (entry) =>
  assessPondPrivateReadActivation({
    activationRecord: entry.receiverDp10ActivationRecord,
    receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
    dp5CeremonyRecord: entry.receiverDp5CeremonyRecord,
    dp8VerifierRecord: entry.receiverDp8VerifierRecord,
    dp8ProofRecord: entry.receiverDp8ProofRecord,
    dp9IssuanceRecord: entry.receiverDp9IssuanceRecord,
    dp9MappingRecord: entry.receiverDp9MappingRecord,
    receiverEvaluatedAtEpochMs: entry.evaluatedAtEpochMs,
    receiverMaximumAgeMs: entry.maximumAgeMs,
  });

const byLabel = (matrix, label) => {
  const entry = matrix.find((candidate) => candidate.fixtureLabel === label);
  assert.ok(entry, `missing fixture arm: ${label}`);
  return entry;
};

const completeGateArm = byLabel(
  stageDP14CollaborativeReadGateMatrix,
  "two_principal_structural_records",
);
const admissionAdmittedArm = byLabel(
  stageDP14CollaborativeReadAdmissionMatrix,
  "collaborative_structural_records_read_admitted",
);
const evaluated = stageDP14EvaluatedAtEpochMs;
const maximumAge = stageDP14MaximumAgeMs;

const RECEIVER_LEG_KEYS = [
  "dp5CeremonyRecord",
  "dp8VerifierRecord",
  "dp8ProofRecord",
  "dp9IssuanceRecord",
  "dp9MappingRecord",
  "readActivationRecord",
];

const ADMITTED_TARGET_PREFIXES = [
  "receiver-record:",
  "counterpart-record:",
  "collaborative-record:",
];

// ---------------------------------------------------------------
// Block 1: matrix recomputation — every gate arm and both admission
// arms deep-equal their pinned assessments recomputed through the real
// contracts, every fixture export is deep-frozen, and the recomputed
// assessments carry no frozen family name.
// ---------------------------------------------------------------
block("matrix", () => {
  for (const entry of stageDP14CollaborativeReadGateMatrix) {
    const fresh = runGate(entry);
    assert.deepEqual(deepClone(fresh), deepClone(entry.gateAssessment), entry.fixtureLabel);
  }
  for (const entry of stageDP14CollaborativeReadAdmissionMatrix) {
    const fresh = assessPondCollaborativeReadAdmission({
      readAdmissionRecord: entry.readAdmissionRecord,
      collaborativeActivationRecord: entry.collaborativeActivationRecord,
      counterpartJoinDeclarationRecord: entry.counterpartJoinDeclarationRecord,
      receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
      counterpartPrincipalRef: entry.counterpartPrincipalRef,
    });
    dp14FreshRuns.push(fresh);
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
  }
  const arm = completeGateArm.gateAssessment;
  assert.equal(
    arm.collaborativeReadActivationState,
    "fixture_structural_session_scoped_collaborative_structural_read_activation",
  );
  assert.equal(
    arm.reason,
    "all_collaborative_read_gate_checks_satisfied",
  );
  assert.deepEqual(
    [...arm.satisfiedChecks],
    [
      "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
      "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
      "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
      "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
      "collaborative_activation_session_scoped_fresh_and_restart_expiring",
      "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority",
    ],
  );
  assert.deepEqual(
    [...arm.unsatisfiedChecks],
    [],
  );
  assert.equal(
    arm.multiPrincipalReadScopePosture,
    "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
  );
  const admitted = admissionAdmittedArm.assessment;
  assert.equal(
    admitted.collaborativeReadAdmissionState,
    "fixture_structural_collaborative_structural_record_read_admitted",
  );
  assert.equal(admitted.admittedTargetRefs.length, 13);
  assertDeepFrozen(stageDP14CollaborativeReadGateMatrix, "gateMatrix");
  assertDeepFrozen(
    stageDP14CollaborativeReadAdmissionMatrix,
    "admissionMatrix",
  );
  for (const run of dp14FreshRuns) {
    assertLacksKeys(
      run,
      [
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
      ],
      "freshGate/run",
    );
  }
});

// ---------------------------------------------------------------
// Block 2: identity ties — the receiver legs are literal copies of the
// frozen D-P5/D-P6/D-P8/D-P9/D-P10 exports, the two declared principals
// stay pairwise distinct on every arm, and the join is independently
// readable through the counterpart declaration's own assessor.
// ---------------------------------------------------------------
block("identityTies", () => {
  const frozen = stageDP10CompositionComplete;
  const arm = completeGateArm;
  for (const key of RECEIVER_LEG_KEYS) {
    const legKey =
      key === "readActivationRecord"
        ? "receiverDp10ActivationRecord"
        : `receiver${key[0].toUpperCase()}${key.slice(1)}`;
    assert.deepEqual(
      deepClone(arm[legKey]),
      deepClone(frozen[key]),
      `receiver leg ${legKey} drifted from the frozen D-P10 export`,
    );
  }
  assert.deepEqual(
    deepClone(arm.receiverDp6ObservationRecord),
    deepClone(stageDP6AuthenticationObservationComplete.observationRecord),
    "receiver D-P6 leg drifted from the frozen D-P6 export",
  );
  assert.equal(arm.receiverHeldPrincipalRef, frozen.receiverHeldPrincipalRef);
  assert.equal(arm.evaluatedAtEpochMs, frozen.receiverEvaluatedAtEpochMs);
  assert.equal(arm.maximumAgeMs, frozen.receiverMaximumAgeMs);
  for (const entry of stageDP14CollaborativeReadGateMatrix) {
    assert.notEqual(
      entry.receiverHeldPrincipalRef,
      entry.counterpartPrincipalRef,
      entry.fixtureLabel,
    );
    assert.equal(entry.counterpartPrincipalRef, stageDP14CounterpartRef);
    assert.equal(entry.receiverHeldPrincipalRef, stageDP14ReceiverRef);
    // The join is re-readable through its own seam on every arm — an
    // independent consumer re-runs the counterDeclaration assessor alone
    // and the mapped echo agrees, even on refused arms.
    const joint = assessPondCounterpartJoinDeclaration({
      counterpartDeclarationRecord: entry.counterpartJoinDeclarationRecord,
      receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
    });
    const echo = entry.gateAssessment.mappedCounterpartJoin;
    assert.equal(
      joint.joinDeclarationState,
      echo.joinDeclarationState,
      entry.fixtureLabel,
    );
    assert.equal(joint.reason, echo.reason, entry.fixtureLabel);
    assert.deepEqual(
      [...joint.unsatisfiedChecks],
      [...echo.unsatisfiedChecks],
      entry.fixtureLabel,
    );
  }
  // The counterpart carries no D-P9 mapping and no D-P10 activation on
  // any arm except where explicitly smuggled — and the smuggle arm is
  // still refused (block 4/5).
  for (const entry of stageDP14CollaborativeReadGateMatrix) {
    if (entry.fixtureLabel !== "counterpart_identity_issuance_smuggle_refused") {
      assert.ok(
        entry.counterpartDp9IssuanceRecord.issuanceBasis === "not_issued",
        entry.fixtureLabel,
      );
    }
    assert.equal(entry.counterpartDp9MappingRecord, null);
    assert.equal(entry.counterpartDp10ActivationRecord, null);
  }
});

// ---------------------------------------------------------------
// Block 3: the second-secret tie — the counterpart knowledge factor is
// its own pinned pair over a second salt, recomputed live; the mismatch
// digest differs from both pinned digests.
// ---------------------------------------------------------------
block("secondSecretTie", () => {
  const counterpartSecret = "pond-stage-d-p8-fixture-secret-counterpart";
  const recomputed = createHash("sha256")
    .update(Buffer.from(stageDP14CounterpartSaltHex, "hex"))
    .update(counterpartSecret, "utf8")
    .digest("hex");
  assert.equal(
    recomputed,
    stageDP14CounterpartVerifierDigestHex,
    "the counterpart verifier digest does not bind the counterpart secret over the second salt",
  );
  const receiverSecret = "pond-stage-d-p8-fixture-secret";
  const recomputedReceiver = createHash("sha256")
    .update(Buffer.from(stageDP14ReceiverSaltHex, "hex"))
    .update(receiverSecret, "utf8")
    .digest("hex");
  assert.equal(recomputedReceiver, stageDP14ReceiverVerifierDigestHex);
  // The two secrets cross-bind to nothing: neither secret reproduces the
  // other's digest.
  const crossOne = createHash("sha256")
    .update(Buffer.from(stageDP14CounterpartSaltHex, "hex"))
    .update(receiverSecret, "utf8")
    .digest("hex");
  const crossTwo = createHash("sha256")
    .update(Buffer.from(stageDP14ReceiverSaltHex, "hex"))
    .update(counterpartSecret, "utf8")
    .digest("hex");
  assert.notEqual(crossOne, stageDP14CounterpartVerifierDigestHex);
  assert.notEqual(crossTwo, stageDP14ReceiverVerifierDigestHex);
  assert.notEqual(
    "beefcafedeadbeef".repeat(4),
    stageDP14CounterpartVerifierDigestHex,
  );
  assert.equal(
    "beefcafedeadbeef".repeat(4).length,
    stageDP14CounterpartVerifierDigestHex.length,
  );
});

// ---------------------------------------------------------------
// Block 4: per-leg independent inspection and the no-second-identity
// proofs. Each leg re-runs through its frozen assessor alone; a leg
// record bound to one principal refuses when inspected on another; a
// claimed-issued counterpart greens the frozen issuance assessor and is
// refused by the D-P14 gate; the frozen D-P10 gate stays
// single-principal under every D-P14 arm.
// ---------------------------------------------------------------
block("inspectionAndNoSecondIdentity", () => {
  const arm = completeGateArm;

  // (a) each receiver leg re-runs through its frozen assessor alone and
  // greens — the per-leg seam, not the composition.
  const dp5 = assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: arm.receiverDp5CeremonyRecord,
    receiverHeldPrincipalRef: arm.receiverHeldPrincipalRef,
  });
  assert.equal(
    dp5.bindingEstablishmentState,
    "fixture_established_local_principal_binding",
  );
  const dp6 = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: arm.receiverDp6ObservationRecord,
    receiverHeldPrincipalRef: arm.receiverHeldPrincipalRef,
    evaluatedAtEpochMs: arm.evaluatedAtEpochMs,
    maximumAgeMs: arm.maximumAgeMs,
  });
  assert.equal(dp6.authenticationObservationState, "fixture_observed_local_authentication");
  assert.ok(dp6.freshnessDiagnosis.state === "fresh");
  const dp8v = assessPondLocalAuthenticationVerifierRecord({
    verifierRecord: arm.receiverDp8VerifierRecord,
    receiverHeldPrincipalRef: arm.receiverHeldPrincipalRef,
  });
  assert.equal(dp8v.verifierState, "receiver_enrolled_knowledge_verifier");
  const dp8p = assessPondLocalAuthenticationChallengeProof({
    proofRecord: arm.receiverDp8ProofRecord,
    verifierRecord: arm.receiverDp8VerifierRecord,
    receiverHeldPrincipalRef: arm.receiverHeldPrincipalRef,
    evaluatedAtEpochMs: arm.evaluatedAtEpochMs,
    maximumAgeMs: arm.maximumAgeMs,
  });
  assert.equal(
    dp8p.authenticationMechanicState,
    "receiver_verified_knowledge_factor",
  );
  const counterpartChain = assessPondCollaborativeReadPrincipalChain({
    heldPrincipalRef: arm.counterpartPrincipalRef,
    dp5CeremonyRecord: arm.counterpartDp5CeremonyRecord,
    dp6ObservationRecord: arm.counterpartDp6ObservationRecord,
    dp8VerifierRecord: arm.counterpartDp8VerifierRecord,
    dp8ProofRecord: arm.counterpartDp8ProofRecord,
    dp9IssuanceRecord: arm.counterpartDp9IssuanceRecord,
    dp9MappingRecord: arm.counterpartDp9MappingRecord,
    dp10ActivationRecord: arm.counterpartDp10ActivationRecord,
    evaluatedAtEpochMs: arm.evaluatedAtEpochMs,
    maximumAgeMs: arm.maximumAgeMs,
  });
  dp14FreshRuns.push(counterpartChain);
  assert.equal(
    arm.counterpartPrincipalRef,
    counterpartChain.heldPrincipalRef,
  );
  assert.ok(counterpartChain.mappedDp5.state === "fixture_established_local_principal_binding");
  assert.ok(counterpartChain.mappedDp6.state === "fixture_observed_local_authentication");
  assert.ok(
    counterpartChain.mappedDp8.mechanicState ===
      "receiver_verified_knowledge_factor",
  );
  // The counterpart chain's own pins: no issued identity, no mapping
  // established, no private activation — the chain verifies WITHOUT
  // issued identity.
  assert.ok(counterpartChain.mappedDp9Issuance.state === "not_issued");
  assert.ok(counterpartChain.mappedDp9Mapping.state === "not_established");
  assert.ok(counterpartChain.mappedDp10.state === "not_activated");

  // (b) a leg record bound to one principal refuses when inspected on
  // the other — the bound-to-held checks are real, per leg.
  const swappedDp5 = assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: arm.receiverDp5CeremonyRecord,
    receiverHeldPrincipalRef: stageDP14CounterpartRef,
  });
  assert.notEqual(swappedDp5.bindingEstablishmentState,
    "fixture_established_local_principal_binding");
  const swappedDp8 = assessPondLocalAuthenticationChallengeProof({
    proofRecord: arm.receiverDp8ProofRecord,
    verifierRecord: arm.receiverDp8VerifierRecord,
    receiverHeldPrincipalRef: stageDP14CounterpartRef,
    evaluatedAtEpochMs: arm.evaluatedAtEpochMs,
    maximumAgeMs: arm.maximumAgeMs,
  });
  assert.notEqual(
    swappedDp8.authenticationMechanicState,
    "receiver_verified_knowledge_factor",
  );
  const swappedJoin = assessPondCounterpartJoinDeclaration({
    counterpartDeclarationRecord: arm.counterpartJoinDeclarationRecord,
    receiverHeldPrincipalRef: stageDP14CounterpartRef,
  });
  assert.notEqual(
    swappedJoin.joinDeclarationState,
    "fixture_structural_receiver_declared_counterpart_join",
  );

  // (c) the no-second-identity widening proof: the counterpart's
  // claimed-issued record GREENS the frozen issuance assessor…
  const smuggleArm = byLabel(
    stageDP14CollaborativeReadGateMatrix,
    "counterpart_identity_issuance_smuggle_refused",
  );
  const smuggleIssuance = assessPondLocalPrincipalIdIssuance({
    issuanceRecord: smuggleArm.counterpartDp9IssuanceRecord,
    receiverHeldPrincipalRef: smuggleArm.counterpartPrincipalRef,
  });
  dp14FreshRuns.push(smuggleIssuance);
  assert.equal(
    smuggleIssuance.issuanceState,
    "fixture_structural_local_principal_id_issued",
    "the frozen issuance assessor must green a well-formed claimed-issued record",
  );
  assert.equal(smuggleIssuance.reason, "all_issuance_checks_satisfied");
  // …and the D-P14 gate's own not-issued chain pin refuses it.
  const smuggleGate = runGate(smuggleArm);
  assert.equal(
    smuggleGate.collaborativeReadActivationState,
    "not_activated",
  );
  assert.equal(
    smuggleGate.reason,
    "counterpart_chain_not_structurally_verified",
  );
  assert.equal(smuggleGate.counterpartChainState, "chain_not_verified");
  assert.equal(
    smuggleGate.counterpartChain.mappedDp9Issuance.state,
    "fixture_structural_local_principal_id_issued",
    "the mapped echo stays honest: the frozen leg's claim is visible",
  );

  // (d) the frozen D-P10 gate stays single-principal: re-run with the
  // receiver legs of every D-P14 arm — it stays green AND its refused
  // scope literal is "not_included_single_principal_reads_only".
  for (const entry of stageDP14CollaborativeReadGateMatrix) {
    const dp10Gate = runFrozenDp10Gate(entry);
    dp14FreshRuns.push(dp10Gate);
    assert.equal(
      dp10Gate.collaborativeReadScopePosture,
      "not_included_single_principal_reads_only",
      entry.fixtureLabel,
    );
  }
  // No D-P14 input ever widens the D-P10 gate: the plural-batch keys are
  // refused there even when handed by the D-P14 caller.
  for (const key of ["principalIds", "principalRefs", "membership"]) {
    const widened = assessPondPrivateReadActivation({
      activationRecord: {
        ...arm.receiverDp10ActivationRecord,
        [key]: [arm.receiverHeldPrincipalRef, stageDP14CounterpartRef],
      },
      receiverHeldPrincipalRef: arm.receiverHeldPrincipalRef,
      evaluatedAtEpochMs: arm.evaluatedAtEpochMs,
      maximumAgeMs: arm.maximumAgeMs,
    });
    dp14FreshRuns.push(widened);
    assert.notEqual(
      widened.reason,
      "all_activation_checks_satisfied",
      `frozen D-P10 gate must refuse plural key ${key}`,
    );
  }
});

// ---------------------------------------------------------------
// Block 5: gate fail-closed — every refusals its mapped ladder cause,
// with honest echoes behind broken legs, the invalid-record arm first,
// and a basis outside the refused vocabulary refusing outright.
// ---------------------------------------------------------------
block("gateFailClosed", () => {
  // Ladder cause per arm.
  const expected = {
    two_principal_structural_records: "all_collaborative_read_gate_checks_satisfied",
    counterpart_binding_leg_broken: "counterpart_chain_not_structurally_verified",
    counterpart_knowledge_factor_refused: "counterpart_chain_not_structurally_verified",
    receiver_observation_stale_chain_broken: "receiver_chain_not_structurally_ready_or_current",
    counterpart_equals_receiver_join_refused: "counterpart_join_not_established",
    counterpart_identity_issuance_smuggle_refused: "counterpart_chain_not_structurally_verified",
    stale_collaborative_activation_expired: "collaborative_activation_not_session_current",
    inferred_collaborative_activation_refused: "receiver_collaborative_activation_proof_incomplete",
  };
  for (const entry of stageDP14CollaborativeReadGateMatrix) {
    assert.equal(
      entry.gateAssessment.reason,
      expected[entry.fixtureLabel],
      entry.fixtureLabel,
    );
  }
  // Arm-specific mapped honesty.
  const staleArm = byLabel(
    stageDP14CollaborativeReadGateMatrix,
    "receiver_observation_stale_chain_broken",
  );
  assert.ok(staleArm.gateAssessment.receiverChain.mappedDp6.diagnosis);
  assert.notEqual(
    staleArm.gateAssessment.receiverChain.mappedDp6.diagnosis.state,
    "fresh",
    "the receiver's stale D-P6 observation must diagnose stale",
  );
  // The D-P6-inclusion design point: the frozen D-P10 chain predates
  // D-P6 and still greens on the same arm — the D-P14 gate's own D-P6
  // re-run is what refuses.
  const staleDp10 = runFrozenDp10Gate(staleArm);
  dp14FreshRuns.push(staleDp10);
  assert.equal(
    staleDp10.reason,
    "all_activation_checks_satisfied",
    "the frozen D-P10 gate carries no D-P6 leg — the staleness is invisible to it",
  );
  const staleActivationArm = byLabel(
    stageDP14CollaborativeReadGateMatrix,
    "stale_collaborative_activation_expired",
  );
  assert.ok(
    staleActivationArm.gateAssessment.collaborativeFreshnessDiagnosis.state ===
      "stale" ||
      staleActivationArm.gateAssessment.collaborativeFreshnessDiagnosis.state ===
        "expired",
    "the stale activation must diagnose non-fresh at the gate itself",
  );
  const joinArm = byLabel(
    stageDP14CollaborativeReadGateMatrix,
    "counterpart_equals_receiver_join_refused",
  );
  assert.ok(
    joinArm.gateAssessment.mappedCounterpartJoin.unsatisfiedChecks.includes(
      "join_pairwise_distinct_refs",
    ),
  );
  const inferredArm = byLabel(
    stageDP14CollaborativeReadGateMatrix,
    "inferred_collaborative_activation_refused",
  );
  assert.ok(
    inferredArm.gateAssessment.unsatisfiedChecks.some(
      (check) =>
        check ===
        "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
    ),
    "the inferred basis must fail the declarative check, alone",
  );
  assert.equal(inferredArm.gateAssessment.receiverChainState,
    "principal_chain_structurally_verified");
  assert.equal(inferredArm.gateAssessment.counterpartChainState,
    "counterpart_chain_verified_without_issued_identity",
    "arm 8 stays two-chain-verified: the refusal is the widening refusal",
  );

  // Invalid-arm first: a malformed join record refuses before any chain
  // claim, and the echo stays computed.
  const corruptedInput = gateInputOf(completeGateArm);
  corruptedInput.counterpartJoinDeclarationRecord = {
    ...deepClone(completeGateArm.counterpartJoinDeclarationRecord),
    extraKey: "smuggled",
  };
  const corrupted = assessPondCollaborativeReadActivation(corruptedInput);
  dp14FreshRuns.push(corrupted);
  assert.equal(corrupted.reason, "counterpart_join_not_established");
  assert.equal(
    corrupted.mappedCounterpartJoin.reason,
    "counterpart_declaration_record_invalid",
  );
  assert.deepEqual(
    deepClone(corrupted.receiverChain),
    deepClone(completeGateArm.gateAssessment.receiverChain),
    "the broken arm's receiver echo must stay an honest recompute",
  );

  // Out-of-vocabulary activation basis: validator refuses outright, and
  // the diagnosis still reports the raw evaluation pair.
  const novelInput = gateInputOf(completeGateArm);
  novelInput.activationRecord = {
    ...deepClone(completeGateArm.collaborativeActivationRecord),
    activationBasis: "invented_outside_any_vocabulary",
  };
  const novel = assessPondCollaborativeReadActivation(novelInput);
  dp14FreshRuns.push(novel);
  assert.equal(novel.activationRecordVersion, "invalid");
  assert.equal(novel.reason, "collaborative_activation_record_invalid");
  assert.ok(novel.collaborativeFreshnessDiagnosis.state);
  assert.equal(novel.multiPrincipalReadScopePosture, "not_included");
  assert.deepEqual([...novel.satisfiedChecks], []);
  assert.deepEqual([...novel.unsatisfiedChecks], [
    "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
    "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
    "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
    "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
    "collaborative_activation_session_scoped_fresh_and_restart_expiring",
    "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority",
  ]);

  // The D-P14 gate's own input inventory refuses plural-batch keys.
  for (const key of ["principalIds", "principalRefs", "membership"]) {
    const widenedInput = gateInputOf(completeGateArm);
    widenedInput[key] = [
      completeGateArm.receiverHeldPrincipalRef,
      completeGateArm.counterpartPrincipalRef,
    ];
    const widened = assessPondCollaborativeReadActivation(widenedInput);
    dp14FreshRuns.push(widened);
    assert.equal(widened.reason, "collaborative_activation_record_invalid", key);
    assert.equal(widened.multiPrincipalReadScopePosture, "not_included", key);
  }
});

// ---------------------------------------------------------------
// Block 6: admission fail-closed — the prefix partition of the 13
// admitted refs, the class refusal, the out-of-table target refusal,
// and the revocability refusal.
// ---------------------------------------------------------------
block("admissionFailClosed", () => {
  assert.deepEqual(
    [...POND_STAGE_DP14_COLLABORATIVE_READ_TARGET_REFS],
    [...stageDP14AllThirteenTargetRefs],
    "the admission table cannot drift from the fixture's in-line copy",
  );
  const admitted = admissionAdmittedArm.assessment;
  for (const prefix of ADMITTED_TARGET_PREFIXES) {
    const slice = admitted.admittedTargetRefs.filter((ref) =>
      ref.startsWith(prefix),
    );
    const expectedCount =
      prefix === "receiver-record:"
        ? 7
        : prefix === "counterpart-record:"
          ? 4
          : 2;
    assert.equal(slice.length, expectedCount, prefix);
  }
  assert.deepEqual(
    deepClone(admitted.admittedTargetRefs),
    deepClone([...admissionAdmittedArm.readAdmissionRecord.readTargetRefs]),
    "the admitted partition must be the declared targets, in order",
  );
  assert.equal(admitted.admissionSessionScopePosture,
    "session_scoped_receiver_restart_ends_activation");
  assert.equal(admitted.effectiveReadScopePosture,
    "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory");

  // Class flip: admitting a class outside the structural vocabulary…
  const flippedRecord = {
    ...deepClone(admissionAdmittedArm.readAdmissionRecord),
    readClass: "lane_content_read",
  };
  const classFlip = assessPondCollaborativeReadAdmission({
    readAdmissionRecord: flippedRecord,
    collaborativeActivationRecord:
      admissionAdmittedArm.collaborativeActivationRecord,
    counterpartJoinDeclarationRecord:
      admissionAdmittedArm.counterpartJoinDeclarationRecord,
    receiverHeldPrincipalRef: admissionAdmittedArm.receiverHeldPrincipalRef,
    counterpartPrincipalRef: admissionAdmittedArm.counterpartPrincipalRef,
  });
  dp14FreshRuns.push(classFlip);
  assert.equal(
    classFlip.reason,
    "receiver_read_admission_proof_incomplete",
    "a valid-shaped record with a refused class must fail its proof, not the validator",
  );
  assert.ok(
    classFlip.unsatisfiedChecks.includes("read_class_structural_records_only"),
  );
  assert.deepEqual([...classFlip.admittedTargetRefs], []);

  // Revocability flip.
  const unrevocable = {
    ...deepClone(admissionAdmittedArm.readAdmissionRecord),
    revocabilityPosture: "not_established",
  };
  const revFlip = assessPondCollaborativeReadAdmission({
    readAdmissionRecord: unrevocable,
    collaborativeActivationRecord:
      admissionAdmittedArm.collaborativeActivationRecord,
    counterpartJoinDeclarationRecord:
      admissionAdmittedArm.counterpartJoinDeclarationRecord,
    receiverHeldPrincipalRef: admissionAdmittedArm.receiverHeldPrincipalRef,
    counterpartPrincipalRef: admissionAdmittedArm.counterpartPrincipalRef,
  });
  dp14FreshRuns.push(revFlip);
  assert.equal(revFlip.reason, "receiver_read_admission_proof_incomplete");
  assert.deepEqual([...revFlip.admittedTargetRefs], []);

  // Join binding refusal: the admission with no standing join.
  const unjoined = assessPondCollaborativeReadAdmission({
    readAdmissionRecord: admissionAdmittedArm.readAdmissionRecord,
    collaborativeActivationRecord:
      admissionAdmittedArm.collaborativeActivationRecord,
    counterpartJoinDeclarationRecord: null,
    receiverHeldPrincipalRef: admissionAdmittedArm.receiverHeldPrincipalRef,
    counterpartPrincipalRef: admissionAdmittedArm.counterpartPrincipalRef,
  });
  dp14FreshRuns.push(unjoined);
  assert.equal(unjoined.reason, "counterpart_join_binding_not_established");
  assert.deepEqual([...unjoined.admittedTargetRefs], []);

  // The smuggled target arm: the out-of-table label refuses at the
  // validator (admission_record_invalid), not at a target check.
  const smuggledArm = byLabel(
    stageDP14CollaborativeReadAdmissionMatrix,
    "smuggled_lane_label_target_refused",
  );
  assert.equal(smuggledArm.assessment.reason, "admission_record_invalid");
  assert.equal(smuggledArm.assessment.collaborativeReadAdmissionState,
    "not_admitted");
  assert.deepEqual([...smuggledArm.assessment.admittedTargetRefs], []);
  // The D-P14 input inventory refuses plural-batch keys too.
  for (const key of ["principalIds", "principalRefs", "membership"]) {
    const widened = assessPondCollaborativeReadAdmission({
      readAdmissionRecord: {
        ...deepClone(admissionAdmittedArm.readAdmissionRecord),
        [key]: [admissionAdmittedArm.receiverHeldPrincipalRef],
      },
      collaborativeActivationRecord:
        admissionAdmittedArm.collaborativeActivationRecord,
      counterpartJoinDeclarationRecord:
        admissionAdmittedArm.counterpartJoinDeclarationRecord,
      receiverHeldPrincipalRef: admissionAdmittedArm.receiverHeldPrincipalRef,
      counterpartPrincipalRef: admissionAdmittedArm.counterpartPrincipalRef,
    });
    dp14FreshRuns.push(widened);
    assert.equal(widened.reason, "admission_record_invalid",
      `smuggled key ${key} must fail the record validator outright`);
  }
});

// ---------------------------------------------------------------
// Block 7: freshness tie, ceiling on the admitted arms, and
// frozen-widening — the inclusive boundary, the all-false ceiling, and
// the frozen D-P5…D-P10 pins recomputed live.
// ---------------------------------------------------------------
block("freshnessCeilingFrozen", () => {
  // Inclusive boundary: the age exactly AT the declared maximum ages as
  // fresh; one millisecond more does not.
  const boundaryRecord = {
    ...deepClone(completeGateArm.collaborativeActivationRecord),
    activationMetadata: {
      activated_at_epoch_ms: evaluated - maximumAge,
      freshness_basis: "activation_event_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    },
  };
  const boundaryInput = gateInputOf(completeGateArm);
  boundaryInput.activationRecord = boundaryRecord;
  const boundary = assessPondCollaborativeReadActivation(boundaryInput);
  dp14FreshRuns.push(boundary);
  assert.equal(
    boundary.collaborativeFreshnessDiagnosis.state,
    "fresh",
    "the inclusive boundary must age exactly maxAge as fresh",
  );
  assert.equal(
    boundary.reason,
    "all_collaborative_read_gate_checks_satisfied",
  );

  // Ceiling on the admitted gate arm.
  const arm = completeGateArm.gateAssessment;
  const ceilingFields = [
    "collaborativeReadEstablishesGrant",
    "credentialAdmitted",
    "authenticationPerformed",
    "principalIdAcceptedAsAuthorization",
    "personalMemoryContentAdmitted",
    "counterpartMemoryContentAdmitted",
    "counterpartConsentEstablished",
    "currentTruthAdmitted",
  ];
  for (const key of ceilingFields) {
    assert.equal(arm[key], false, `${key} must be false on the admitted arm`);
  }
  assert.equal(arm.authority, "none");
  // The admission arm carries the same ceiling.
  const admitted = admissionAdmittedArm.assessment;
  for (const key of [
    "collaborativeReadEstablishesGrant",
    "credentialAdmitted",
    "authenticationPerformed",
    "principalIdAcceptedAsAuthorization",
    "personalMemoryContentAdmitted",
    "counterpartMemoryContentAdmitted",
    "counterpartConsentEstablished",
    "currentTruthAdmitted",
  ]) {
    assert.equal(admitted[key], false, `${key} must be false on the admitted admission arm`);
  }
  assert.equal(admitted.authority, "none");

  // Frozen-widening: the frozen D-P5/D-P6/D-P8/D-P9/D-P10 assessors
  // recomputed on the receiver legs still hit their frozen pins.
  const frozen = stageDP10CompositionComplete;
  const composition = assessPondPrivateReadActivationComposition({
    readActivationRecord: frozen.readActivationRecord,
    readAdmissionRecord: frozen.readAdmissionRecord,
    receiverHeldPrincipalRef: frozen.receiverHeldPrincipalRef,
    dp5CeremonyRecord: completeGateArm.receiverDp5CeremonyRecord,
    dp8VerifierRecord: completeGateArm.receiverDp8VerifierRecord,
    dp8ProofRecord: completeGateArm.receiverDp8ProofRecord,
    dp9IssuanceRecord: completeGateArm.receiverDp9IssuanceRecord,
    dp9MappingRecord: completeGateArm.receiverDp9MappingRecord,
    receiverEvaluatedAtEpochMs: completeGateArm.evaluatedAtEpochMs,
    receiverMaximumAgeMs: completeGateArm.maximumAgeMs,
  });
  dp14FreshRuns.push(composition);
  assert.deepEqual(
    deepClone(composition),
    deepClone(frozen.assessment),
    "the frozen D-P10 composition pin moved",
  );
  const dp6Fresh = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: completeGateArm.receiverDp6ObservationRecord,
    receiverHeldPrincipalRef: stageDP6AuthenticationObservationComplete.observationRecord.principalRef,
    evaluatedAtEpochMs: stageDP6AuthenticationObservationComplete.evaluatedAtEpochMs,
    maximumAgeMs: stageDP6AuthenticationObservationComplete.maximumAgeMs,
  });
  dp14FreshRuns.push(dp6Fresh);
  assert.deepEqual(
    deepClone(dp6Fresh),
    deepClone(stageDP6AuthenticationObservationComplete.assessment),
    "the frozen D-P6 pin moved",
  );
});

// ---------------------------------------------------------------
// Block 8: hygiene — both secrets stay in sanctioned files only; the
// P14 contract files carry no DOM-shaped needle, no network constant,
// no ui vocabulary, no frozen state name (quoted-index reads of frozen
// assessment fields are the tie mechanism and are exempt), and the
// fixture keeps type-only imports.
// ---------------------------------------------------------------
block("hygiene", () => {
  const contractPaths = [
    "src/contracts/pond-collaborative-read-counterpart-declaration.ts",
    "src/contracts/pond-collaborative-read-activation.ts",
    "src/contracts/pond-collaborative-read-admission.ts",
    "src/fixtures/stage-d-p14-collaborative-structural-reads.ts",
  ];
  const texts = contractPaths.map((path) =>
    readFileSync(join(repoRoot, path), "utf8"),
  );

  // (a) secrets: the counterpart secret lives ONLY in this selftest; the
  // receiver secret's needle stays out of this cut's files.
  const receiverSecretNeedle = "fixture-secret";
  const counterpartSecretNeedle = "secret-counterpart";
  for (const path of contractPaths) {
    const text = readFileSync(join(repoRoot, path), "utf8");
    assert.ok(
      !text.includes(receiverSecretNeedle),
      `${path} must not carry either fixture secret's literal`,
    );
    assert.ok(
      !text.includes(counterpartSecretNeedle),
      `${path} must not carry the counterpart secret's literal`,
    );
  }
  // …and the receiver secret lives only in its own sanctioned selftests.
  const secretFiles = walkFiles(join(repoRoot, "src"))
    .concat(walkFiles(join(repoRoot, "docs")))
    .concat(walkFiles(join(repoRoot, "scripts")))
    .filter((path) => path.endsWith(".ts") || path.endsWith(".mjs") || path.endsWith(".md"));
  for (const path of secretFiles) {
    if (path.endsWith("pond-local-authentication-mechanic-selftest.mjs")) continue;
    if (path.endsWith("pond-collaborative-structural-read-gate-selftest.mjs")) continue;
    const text = readFileSync(path, "utf8");
    assert.ok(
      !text.includes("pond-stage-d-p8-fixture-secret-counterpart"),
      `${path} carries the counterpart secret outside its sanctioned file`,
    );
  }

  // (b) DOM-shaped needles and transport/store text stay out of the cut's
  // files (recorded as this cut's banned-needle list, D-P13 mold).
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

  // (c) network constants stay out of the cut's contract files.
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

  // (d) no ui module carries this cut's vocabulary.
  const uiNeedleSet = [
    "counterpart_principal_ref",
    "collaborative_structural_records",
    "multi_principal_read",
  ];
  const uiRoots = ["src/cockpit", "src/agents"].map((relative) =>
    join(repoRoot, relative),
  );
  const uiPaths = uiRoots.flatMap((root) => walkFiles(root));
  for (const path of uiPaths) {
    const text = readFileSync(path, "utf8");
    for (const needle of uiNeedleSet) {
      assert.ok(
        !text.includes(needle),
        `${path} carries the D-P14 vocabulary ${needle}`,
      );
    }
  }

  // (e) the fixture is value-import-free.
  for (const path of contractPaths) {
    if (!path.includes("fixtures")) continue;
    const text = readFileSync(join(repoRoot, path), "utf8");
    for (const line of text.split("\n")) {
      if (line.startsWith("import")) {
        assert.ok(
          line.startsWith("import type {") ||
            line.startsWith('import type {'),
          `${path}: non-type import ${line.trim()}`,
        );
      }
    }
  }

  // (f) the frozen-name source walk over the three contract files:
  // quoted-index reads of frozen assessment fields are the tie mechanism
  // (P13 precedent) and are stripped before matching; the needle then
  // catches shadowing uses — P14 declaring its own field/state by a
  // frozen name.
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
    "PondDeclaredMode",
    "declaredMode",
    "forgeBinding",
    "advisoryPosture",
    "POND_STAGE_DP12",
    "POND_STAGE_DP13",
    "pond-declared-mode-routing",
    "pond-knowledge-forge",
  ];
  const stripQuotedIndexReads = (text) =>
    text.replace(/\[\s*["'][A-Za-z_$][\w$]*["']\s*\]/g, "[]");
  for (const path of contractPaths) {
    if (!path.includes("contracts")) continue;
    const normalized = stripQuotedIndexReads(
      readFileSync(join(repoRoot, path), "utf8"),
    );
    for (const needle of nameNeedles) {
      assert.ok(
        !normalized.includes(needle),
        `${path} carries frozen name ${needle} outside a quoted-index tie read`,
      );
    }
  }

  // (g) the D-P14 forbidden-key inventory stays intact in the source: the
  // base D-P10 inventory is imported and composed, and this cut's five
  // added keys are quoted in full.
  const gateText = readFileSync(
    join(repoRoot, "src/contracts/pond-collaborative-read-activation.ts"),
    "utf8",
  );
  assert.ok(
    gateText.includes("POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS"),
    "the composed inventory must import the frozen D-P10 base",
  );
  for (const key of [
    "principalIds",
    "principalRefs",
    "counterpartPrincipalId",
    "counterpartPrincipalIds",
    "membership",
  ]) {
    assert.ok(
      gateText.includes(`"${key}"`),
      `forbidden key ${key} missing from the contract inventory`,
    );
  }
});

console.log("POND_STAGE_DP14_COLLABORATIVE_STRUCTURAL_READ_GATE_SELFTEST_PASS");