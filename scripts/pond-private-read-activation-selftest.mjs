// Stage D-P10 selftest: private-read activation as a receiver-explicit
// session-scoped gate over structural records. The matrix recomputation
// proves the fixtures and the classifiers agree; the identity ties prove
// one binding, one ref and that the inlined chain copies equal the actual
// D-P5/D-P8/D-P9 fixture records; the fail-closed blocks prove readiness-
// inferred, chain-completion-derived, issuance/mapping-derived, and
// operator-prompt activations, plus lane/content/cross-principal reads and
// activation-inferred read bases stay refused while stale and future
// activation events never renew the session scope; the frozen-widening
// block proves the D-P0..D-P9 frozen tuples still hold and no D-P10
// assessment carries the frozen `privateReadsActivated` name; the
// composition block proves the endpoint is individually breakable at every
// check; the hygiene block proves the fixture stays type-only and the ui
// surface untouched.

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  stageDP10ActivationComplete,
  stageDP10ActivationRefused,
  stageDP10ActivationMatrix,
  stageDP10AdmissionAdmitted,
  stageDP10AdmissionRefused,
  stageDP10AdmissionMatrix,
  stageDP10CompositionComplete,
  stageDP10CompositionStale,
  stageDP10CompositionAdmissionIncomplete,
  stageDP10CompositionMatrix,
} from "../src/fixtures/stage-d-p10-private-reads.ts";
import {
  assessPondPrivateReadActivation,
  POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS,
} from "../src/contracts/pond-private-read-activation.ts";
import {
  assessPondPrivateReadAdmission,
  POND_STAGE_DP10_PRIVATE_READ_TARGET_REFS,
} from "../src/contracts/pond-private-read-admission.ts";
import { assessPondPrivateReadActivationComposition } from "../src/contracts/pond-private-read-activation-composition.ts";
import {
  stageDP0LocalPrincipalRef,
  stageDP0Agent0Ref,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";
import {
  stageDP5LocalPrincipalBindingComplete,
  stageDP5LocalPrincipalBindingIncomplete,
} from "../src/fixtures/stage-d-p5-local-principal-binding.ts";
import {
  stageDP6AuthenticationObservationComplete,
  stageDP6AuthenticationObservationIncomplete,
} from "../src/fixtures/stage-d-p6-local-principal-authentication-observation.ts";
import {
  stageDP8MechanicComplete,
  stageDP8MechanicIncomplete,
} from "../src/fixtures/stage-d-p8-local-authentication-mechanic.ts";
import {
  stageDP9IssuanceComplete,
  stageDP9IssuanceIncomplete,
  stageDP9IssuanceMatrix,
  stageDP9MappingEstablished,
  stageDP9MappingUnestablished,
  stageDP9MappingMatrix,
  stageDP9CompositionComplete,
  stageDP9CompositionIncomplete,
  stageDP9CompositionMatrix,
} from "../src/fixtures/stage-d-p9-principal-identity.ts";
import { assessPondLocalPrincipalBindingEstablishment } from "../src/contracts/pond-local-principal-binding-establishment.ts";
import { assessPondLocalAuthenticationChallengeProof } from "../src/contracts/pond-local-authentication-mechanic.ts";
import { assessPondLocalPrincipalAuthenticationObservation } from "../src/contracts/pond-local-principal-authentication-observation.ts";
import { assessPondLocalPrincipalIdIssuance } from "../src/contracts/pond-local-principal-id-issuance.ts";
import { assessPondErc8004IdentityMapping } from "../src/contracts/pond-erc8004-identity-mapping.ts";
import { assessPondPrincipalIdentityReadinessComposition } from "../src/contracts/pond-principal-identity-readiness-composition.ts";

// The pinned D-P8 secrets live here alone — never in the fixtures or the
// contracts. The D-P10 composition recomputes over the same D-P8 digest
// binding, so the digest tie is re-proven against these pins.
const POND_STAGE_DP10_CHALLENGE_SECRET = "pond-stage-d-p8-fixture-secret";

const repoRoot = new URL("..", import.meta.url).pathname;

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const assertDeepFrozen = (value, path) => {
  assert.ok(Object.isFrozen(value), `not frozen: ${path}`);
  for (const entry of Object.values(value)) {
    if (entry !== null && typeof entry === "object") {
      assertDeepFrozen(entry, `${path}[${String(entry ?? "")}]`);
    }
  }
};

const assertNoForbiddenKeys = (value, forbidden, path) => {
  if (value === null || typeof value !== "object") return;
  for (const key of Object.keys(value)) {
    assert.ok(!forbidden.includes(key), `forbidden key ${key} at ${path}`);
    assertNoForbiddenKeys(value[key], forbidden, `${path}.${key}`);
  }
};

const uiFilePaths = (root) => {
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

const receiverHeldPrincipalRef = stageDP0LocalPrincipalRef;

// The activation ceremony needs the identity chain as its input: the
// selftest draws the complete chain records from the D-P9 composition
// fixture, so the activation recomputes over exactly the chain the D-P9
// fixture pins.
const completeChainFromDp9 = {
  dp5CeremonyRecord: stageDP9CompositionComplete.dp5CeremonyRecord,
  dp8VerifierRecord: stageDP9CompositionComplete.dp8VerifierRecord,
  dp8ProofRecord: stageDP9CompositionComplete.dp8ProofRecord,
  dp9IssuanceRecord: stageDP9CompositionComplete.dp9IssuanceRecord,
  dp9MappingRecord: stageDP9CompositionComplete.dp9MappingRecord,
};

let blocks = 0;
const block = (label, run) => {
  blocks += 1;
  console.log(`block ${blocks}: ${label}`);
  run();
};

// Fresh D-P10 runs collected in the frozen-widening block, reused by the
// composition block's forbidden-key walk.
let dp10Runners = [];

// ---------------------------------------------------------------
// Block 1: fixture matrix recompute — every pinned assessment equals a
// fresh run of its classifier.
// ---------------------------------------------------------------
block("matrix recompute", () => {
  for (const entry of stageDP10ActivationMatrix) {
    const fresh = assessPondPrivateReadActivation({
      activationRecord: entry.activationRecord,
      receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
      ...completeChainFromDp9,
      receiverEvaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
      receiverMaximumAgeMs: entry.receiverMaximumAgeMs,
    });
    assert.equal(fresh.contractVersion, "pond-private-read-activation-d-p10");
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(fresh, `activation:${entry.fixtureLabel}`);
  }
  for (const entry of stageDP10AdmissionMatrix) {
    const fresh = assessPondPrivateReadAdmission({
      readAdmissionRecord: entry.readAdmissionRecord,
      activationRecord: entry.activationRecord,
      receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
    });
    assert.equal(fresh.contractVersion, "pond-private-read-admission-d-p10");
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(fresh, `admission:${entry.fixtureLabel}`);
  }
  for (const entry of stageDP10CompositionMatrix) {
    const fresh = assessPondPrivateReadActivationComposition({
      readActivationRecord: entry.readActivationRecord,
      readAdmissionRecord: entry.readAdmissionRecord,
      receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
      dp5CeremonyRecord: entry.dp5CeremonyRecord,
      dp8VerifierRecord: entry.dp8VerifierRecord,
      dp8ProofRecord: entry.dp8ProofRecord,
      dp9IssuanceRecord: entry.dp9IssuanceRecord,
      dp9MappingRecord: entry.dp9MappingRecord,
      receiverEvaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
      receiverMaximumAgeMs: entry.receiverMaximumAgeMs,
    });
    assert.equal(
      fresh.contractVersion,
      "pond-private-read-activation-composition-d-p10",
    );
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(fresh, `composition:${entry.fixtureLabel}`);
  }
  assert.equal(stageDP10ActivationMatrix.length, 2);
  assert.equal(stageDP10AdmissionMatrix.length, 2);
  assert.equal(stageDP10CompositionMatrix.length, 3);
});

// ---------------------------------------------------------------
// Block 2: identity ties — one binding, one ref. Every D-P10 record lands
// on the D-P0-held principal ref; the inlined upstream copies equal the
// actual D-P5/D-P8/D-P9 fixture records; the pinned target table is the
// one the admission contract freezes.
// ---------------------------------------------------------------
block("identity ties", () => {
  for (const entry of stageDP10ActivationMatrix) {
    assert.equal(entry.activationRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.receiverHeldPrincipalRef, stageDP0LocalPrincipalRef);
  }
  for (const entry of stageDP10AdmissionMatrix) {
    assert.equal(entry.readAdmissionRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.activationRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.receiverHeldPrincipalRef, stageDP0LocalPrincipalRef);
  }
  for (const entry of stageDP10CompositionMatrix) {
    assert.equal(
      entry.readActivationRecord.principalRef,
      stageDP0LocalPrincipalRef,
    );
    assert.equal(entry.readAdmissionRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.dp5CeremonyRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.dp8VerifierRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.dp8ProofRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.dp9IssuanceRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.dp9MappingRecord.principalRef, stageDP0LocalPrincipalRef);
    // One binding, one ref: the inlined copies equal the actual upstream
    // fixture records, so the composition recomputes over the same
    // ceremony, challenge round, issuance, and mapping the earlier
    // fixtures pin.
    assert.deepEqual(
      deepClone(entry.dp5CeremonyRecord),
      deepClone(stageDP9CompositionComplete.dp5CeremonyRecord),
      entry.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(entry.dp8VerifierRecord),
      deepClone(stageDP9CompositionComplete.dp8VerifierRecord),
      entry.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(entry.dp8ProofRecord),
      deepClone(stageDP9CompositionComplete.dp8ProofRecord),
      entry.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(entry.dp9IssuanceRecord),
      deepClone(stageDP9CompositionComplete.dp9IssuanceRecord),
      entry.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(entry.dp9MappingRecord),
      deepClone(stageDP9CompositionComplete.dp9MappingRecord),
      entry.fixtureLabel,
    );
  }

  // The pinned target table is exactly the six receiver-record labels —
  // deep equality in order, from either side.
  assert.deepEqual(deepClone(POND_STAGE_DP10_PRIVATE_READ_TARGET_REFS), [
    "receiver-record:pond-local-principal-binding-establishment-d-p5",
    "receiver-record:pond-local-authentication-mechanic-d-p8",
    "receiver-record:pond-local-principal-id-issuance-d-p9",
    "receiver-record:pond-erc8004-identity-mapping-d-p9",
    "receiver-record:pond-principal-identity-readiness-composition-d-p9",
    "receiver-record:pond-private-read-activation-d-p10",
  ]);
  assert.ok(Object.isFrozen(POND_STAGE_DP10_PRIVATE_READ_TARGET_REFS));
  // The agent ref stays the D-P0 Agent0 and never appears in the read
  // targets: no cross-principal or lane content enters the table.
  assert.equal(stageDP0Agent0Ref, "agent:fixture:stage-d-p0:trading-desk-agent0");
  for (const target of POND_STAGE_DP10_PRIVATE_READ_TARGET_REFS) {
    assert.ok(target.startsWith("receiver-record:"), target);
    assert.ok(!target.startsWith("agent:"), target);
    assert.ok(!target.includes("memory"), target);
  }
});

// ---------------------------------------------------------------
// Block 3: activation fail-closed — structural tampering is invalid; all
// four read-readiness bases stay valid-but-unsatisfied and never activate;
// a foreign held ref never activates; stale and future activation events
// and unusable evaluation inputs are not session current; the
// forbidden-key inventory stays frozen at 33.
// ---------------------------------------------------------------
block("activation fail-closed", () => {
  const completeRecord = stageDP10ActivationComplete.activationRecord;
  const invalidReason = "activation_record_invalid";

  const assertInvalid = (value, label) => {
    const fresh = assessPondPrivateReadActivation({
      activationRecord: value,
      receiverHeldPrincipalRef,
      ...completeChainFromDp9,
      receiverEvaluatedAtEpochMs:
        stageDP10ActivationComplete.receiverEvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP10ActivationComplete.receiverMaximumAgeMs,
    });
    assert.equal(fresh.reason, invalidReason, label);
    assert.equal(fresh.activationState, "not_activated", label);
    assert.equal(fresh.activationRecordVersion, "invalid", label);
    assert.equal(fresh.satisfiedChecks.length, 0, label);
  };

  assertInvalid({ ...deepClone(completeRecord), kind: "pond-private-read-activation-x" }, "kind");
  assertInvalid(
    { ...deepClone(completeRecord), contractVersion: "pond-private-read-activation-d-p9" },
    "contract version",
  );
  assertInvalid(
    { ...deepClone(completeRecord), principalId: "principal:fixture:x" },
    "principalId key smuggle",
  );
  assertInvalid(
    { ...deepClone(completeRecord), payload: { some: "content" } },
    "payload key smuggle",
  );
  assertInvalid(
    { ...deepClone(completeRecord), content: "memory lane text" },
    "content key smuggle",
  );
  assertInvalid(
    { ...deepClone(completeRecord), grantId: "grant:fixture:x" },
    "grantId key smuggle",
  );
  assertInvalid({ ...deepClone(completeRecord), unknownExtraKey: 1 }, "extra key");
  const missingKey = deepClone(completeRecord);
  delete missingKey.revocabilityPosture;
  assertInvalid(missingKey, "missing key");
  assertInvalid(
    { ...deepClone(completeRecord), principalRef: "wallet:0xfrog" },
    "wallet-shaped principal ref",
  );

  // Valid-but-unsatisfied: every refused basis stays a valid record whose
  // activation never happens — readiness, chain completion, issuance,
  // mapping, and operator prompts are completion evidence, never the
  // governance decision.
  for (const refusedBasis of [
    "inferred_from_structural_readiness",
    "inferred_from_identity_chain_completion",
    "derived_from_issuance_or_mapping",
    "inferred_from_operator_prompt",
  ]) {
    const tampered = deepClone(completeRecord);
    tampered.activationBasis = refusedBasis;
    const fresh = assessPondPrivateReadActivation({
      activationRecord: tampered,
      receiverHeldPrincipalRef,
      ...completeChainFromDp9,
      receiverEvaluatedAtEpochMs:
        stageDP10ActivationComplete.receiverEvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP10ActivationComplete.receiverMaximumAgeMs,
    });
    assert.equal(fresh.reason, "receiver_activation_proof_incomplete", refusedBasis);
    assert.equal(fresh.activationState, "not_activated", refusedBasis);
    assert.equal(fresh.activationEstablishesGrant, false, refusedBasis);
    assert.ok(
      fresh.unsatisfiedChecks.includes(
        "activation_basis_explicitly_receiver_owned_not_inferred_from_readiness",
      ),
      refusedBasis,
    );
  }

  // A well-formed but foreign held ref breaks the identity chain's
  // receiver-held binding, and the chain boundary refuses first.
  const foreign = assessPondPrivateReadActivation({
    activationRecord: completeRecord,
    receiverHeldPrincipalRef: "principal:somewhere-else:other-principal",
    ...completeChainFromDp9,
    receiverEvaluatedAtEpochMs:
      stageDP10ActivationComplete.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: stageDP10ActivationComplete.receiverMaximumAgeMs,
  });
  assert.equal(foreign.reason, "identity_chain_not_structurally_ready");
  assert.equal(foreign.activationState, "not_activated");

  // Stale activation event, future activation event, and unusable
  // evaluation inputs all fail session currency — while the identity
  // chain beneath them stays fresh.
  const stale = assessPondPrivateReadActivation({
    activationRecord: {
      ...deepClone(completeRecord),
      activationMetadata: {
        ...deepClone(completeRecord.activationMetadata),
        activated_at_epoch_ms: 1_799_999_999_999,
      },
    },
    receiverHeldPrincipalRef,
    ...completeChainFromDp9,
    receiverEvaluatedAtEpochMs:
      stageDP10ActivationComplete.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: stageDP10ActivationComplete.receiverMaximumAgeMs,
  });
  assert.equal(stale.reason, "activation_not_session_current");
  assert.equal(stale.activationState, "not_activated");
  assert.equal(stale.activationFreshnessDiagnosis.state, "stale");
  assert.equal(stale.activationFreshnessDiagnosis.observationAgeMs, 60_001);

  const future = assessPondPrivateReadActivation({
    activationRecord: {
      ...deepClone(completeRecord),
      activationMetadata: {
        ...deepClone(completeRecord.activationMetadata),
        activated_at_epoch_ms: 1_800_000_060_001,
      },
    },
    receiverHeldPrincipalRef,
    ...completeChainFromDp9,
    receiverEvaluatedAtEpochMs:
      stageDP10ActivationComplete.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: stageDP10ActivationComplete.receiverMaximumAgeMs,
  });
  assert.equal(future.reason, "activation_not_session_current");
  assert.equal(future.activationFreshnessDiagnosis.reason, "observation_time_in_future");

  // An unusable evaluation pair poisons the identity chain's freshness
  // first — the chain boundary refuses before the activation session
  // check, exactly like the foreign held ref above: one receiver
  // evaluation pair feeds both windows, and a broken pair is a broken
  // chain.
  const unusableEvaluated = assessPondPrivateReadActivation({
    activationRecord: completeRecord,
    receiverHeldPrincipalRef,
    ...completeChainFromDp9,
    receiverEvaluatedAtEpochMs: "not-a-time",
    receiverMaximumAgeMs: stageDP10ActivationComplete.receiverMaximumAgeMs,
  });
  assert.equal(unusableEvaluated.reason, "identity_chain_not_structurally_ready");
  assert.equal(unusableEvaluated.activationState, "not_activated");

  // The identity chain stays fresh under stale and future activation
  // events — the diagnosis is a diagnosis, never the chain's verdict.
  for (const fresh of [stale, future]) {
    assert.equal(
      fresh.identityChainReadinessState,
      "structurally_ready_private_reads_still_refused",
    );
  }

  assert.ok(Object.isFrozen(POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS));
  for (const key of ["privateKey", "mnemonic", "content", "payload", "grantId", "credential"]) {
    assert.ok(POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS.includes(key), key);
  }
  assert.equal(POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS.length, 33);
});

// ---------------------------------------------------------------
// Block 4: admission fail-closed — all four refused read classes and read
// bases stay valid-but-unsatisfied; unknown or empty targets never admit;
// a structurally-unacceptable activation record refuses the read before
// any check runs; an unestablished revocability posture is unsatisfied.
// ---------------------------------------------------------------
block("admission fail-closed", () => {
  const admittedRecord = stageDP10AdmissionAdmitted.readAdmissionRecord;
  const completeActivation = stageDP10AdmissionAdmitted.activationRecord;

  const freshOn = (readAdmissionRecord, activationRecord = completeActivation) =>
    assessPondPrivateReadAdmission({
      readAdmissionRecord,
      activationRecord,
      receiverHeldPrincipalRef,
    });

  const assertInvalid = (value, activationRecord, label) => {
    const fresh = freshOn(value, activationRecord);
    assert.equal(fresh.reason, "admission_record_invalid", label);
    assert.equal(fresh.readAdmissionState, "not_admitted", label);
    assert.equal(fresh.admissionRecordVersion, "invalid", label);
    assert.equal(fresh.satisfiedChecks.length, 0, label);
  };

  assertInvalid({ ...deepClone(admittedRecord), kind: "pond-private-read-admission-x" }, completeActivation, "kind");
  assertInvalid(
    { ...deepClone(admittedRecord), contractVersion: "pond-private-read-admission-d-p9" },
    completeActivation,
    "contract version",
  );
  assertInvalid(
    { ...deepClone(admittedRecord), content: "memory lane text" },
    completeActivation,
    "content key smuggle",
  );
  assertInvalid(
    { ...deepClone(admittedRecord), payload: { some: "payload" } },
    completeActivation,
    "payload key smuggle",
  );
  assertInvalid({ ...deepClone(admittedRecord), extraKey: 1 }, completeActivation, "extra key");
  const missingKey = deepClone(admittedRecord);
  delete missingKey.truthPosture;
  assertInvalid(missingKey, completeActivation, "missing key");
  assertInvalid(
    { ...deepClone(admittedRecord), principalRef: "wallet:0xfrog" },
    completeActivation,
    "wallet-shaped principal ref",
  );
  assertInvalid(
    {
      ...deepClone(admittedRecord),
      readTargetRefs: [...deepClone(admittedRecord.readTargetRefs), "agent:fixture:stage-d-p0:trading-desk-agent0"],
    },
    completeActivation,
    "unknown target appended",
  );
  assertInvalid(
    { ...deepClone(admittedRecord), readTargetRefs: [] },
    completeActivation,
    "empty targets",
  );
  assertInvalid(
    { ...deepClone(admittedRecord), readTargetRefs: "not-an-array" },
    completeActivation,
    "targets not an array",
  );

  // A broken carrier activation refuses the read before any check runs.
  const brokenActivation = { ...deepClone(completeActivation), kind: "pond-private-read-activation-x" };
  assert.equal(
    freshOn(admittedRecord, brokenActivation).reason,
    "activation_record_invalid",
  );
  const inferredActivation = {
    ...deepClone(completeActivation),
    activationBasis: "inferred_from_structural_readiness",
  };
  assert.equal(
    freshOn(admittedRecord, inferredActivation).reason,
    "activation_record_invalid",
    "activation inferred from readiness unbindable",
  );

  // Valid-but-unsatisfied: refused read classes, refused read bases, a
  // foreign held ref, and an unestablished revocability posture.
  for (const refusedClass of [
    "lane_content_read",
    "authority_record_read",
    "credential_record_read",
    "cross_principal_record_read",
  ]) {
    const tampered = deepClone(admittedRecord);
    tampered.readClass = refusedClass;
    const fresh = freshOn(tampered);
    assert.equal(fresh.reason, "receiver_read_admission_proof_incomplete", refusedClass);
    assert.equal(fresh.readAdmissionState, "not_admitted", refusedClass);
    assert.equal(fresh.readEstablishesGrant, false, refusedClass);
    assert.ok(
      fresh.unsatisfiedChecks.includes("read_class_structural_records_only"),
      refusedClass,
    );
  }
  for (const refusedBasis of [
    "inferred_from_activation",
    "authority_record_read_requested",
    "credential_record_read_requested",
    "cross_principal_record_read_requested",
  ]) {
    const tampered = deepClone(admittedRecord);
    tampered.readBasis = refusedBasis;
    const fresh = freshOn(tampered);
    assert.equal(fresh.reason, "receiver_read_admission_proof_incomplete", refusedBasis);
    assert.ok(
      fresh.unsatisfiedChecks.includes(
        "read_basis_explicitly_receiver_owned_not_inferred",
      ),
      refusedBasis,
    );
  }
  const foreign = freshOn(admittedRecord);
  assert.equal(
    assessPondPrivateReadAdmission({
      readAdmissionRecord: admittedRecord,
      activationRecord: completeActivation,
      receiverHeldPrincipalRef: "principal:somewhere-else:other-principal",
    }).reason,
    "receiver_read_admission_proof_incomplete",
    "foreign held ref",
  );
  const unrevocable = deepClone(admittedRecord);
  unrevocable.revocabilityPosture = "not_established";
  assert.equal(
    freshOn(unrevocable).reason,
    "receiver_read_admission_proof_incomplete",
    "unestablished revocability",
  );
  // A target outside the pinned table is an invalid record — the
  // fail-closed record boundary fires before any check.
  const targetBreach = deepClone(admittedRecord);
  targetBreach.readTargetRefs = [
    "receiver-record:pond-private-read-activation-d-p10-x",
  ];
  assert.equal(
    freshOn(targetBreach).reason,
    "admission_record_invalid",
    "target breach record boundary",
  );
  // In-table targets with an activation bound to a different principal
  // are valid records whose session-scope check stays unsatisfied.
  const foreignBindingActivation = {
    ...deepClone(completeActivation),
    principalRef: "principal:fixture:stage-d-p0:some-other-principal",
  };
  const unbound = freshOn(admittedRecord, foreignBindingActivation);
  assert.equal(
    unbound.reason,
    "receiver_read_admission_proof_incomplete",
    "foreign activation binding",
  );
  assert.ok(
    unbound.unsatisfiedChecks.includes(
      "read_targets_within_activated_session_scope",
    ),
    "foreign activation binding check",
  );
});

// ---------------------------------------------------------------
// Block 5: frozen widening proof — the D-P5/D-P6/D-P8 frozen assessors
// still report their exact pinned tuples, the D-P9 composition still
// yields privateReadsActivated false, and no D-P10 assessment carries
// the frozen name; runtime activation stays not_included everywhere.
// ---------------------------------------------------------------
block("frozen widening proof", () => {
  const dp5Fresh = assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: stageDP5LocalPrincipalBindingComplete.ceremonyRecord,
    receiverHeldPrincipalRef,
  });
  assert.deepEqual(
    deepClone(dp5Fresh),
    deepClone(stageDP5LocalPrincipalBindingComplete.assessment),
  );
  assert.equal(dp5Fresh.principalIdIssued, false);

  const dp6Fresh = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: stageDP6AuthenticationObservationComplete.observationRecord,
    receiverHeldPrincipalRef,
    evaluatedAtEpochMs: stageDP6AuthenticationObservationComplete.evaluatedAtEpochMs,
    maximumAgeMs: stageDP6AuthenticationObservationComplete.maximumAgeMs,
  });
  assert.deepEqual(
    deepClone(dp6Fresh),
    deepClone(stageDP6AuthenticationObservationComplete.assessment),
  );
  assert.equal(dp6Fresh.principalIdIssued, false);

  const dp8ChallengeFresh = assessPondLocalAuthenticationChallengeProof({
    proofRecord: stageDP8MechanicComplete.proofRecord,
    verifierRecord: stageDP8MechanicComplete.verifierRecord,
    receiverHeldPrincipalRef,
    evaluatedAtEpochMs: stageDP8MechanicComplete.evaluatedAtEpochMs,
    maximumAgeMs: stageDP8MechanicComplete.maximumAgeMs,
  });
  assert.deepEqual(
    deepClone(dp8ChallengeFresh),
    deepClone(stageDP8MechanicComplete.assessment),
  );
  assert.equal(
    dp8ChallengeFresh.authenticationMechanicState,
    "receiver_verified_knowledge_factor",
  );

  const dp9CompositionFresh = assessPondPrincipalIdentityReadinessComposition({
    dp5CeremonyRecord: stageDP9CompositionComplete.dp5CeremonyRecord,
    dp8VerifierRecord: stageDP9CompositionComplete.dp8VerifierRecord,
    dp8ProofRecord: stageDP9CompositionComplete.dp8ProofRecord,
    dp9IssuanceRecord: stageDP9CompositionComplete.dp9IssuanceRecord,
    dp9MappingRecord: stageDP9CompositionComplete.dp9MappingRecord,
    receiverHeldPrincipalRef,
    receiverVerifiedAtEpochMs: stageDP9CompositionComplete.receiverVerifiedAtEpochMs,
    receiverMaximumAgeMs: stageDP9CompositionComplete.receiverMaximumAgeMs,
  });
  assert.deepEqual(
    deepClone(dp9CompositionFresh),
    deepClone(stageDP9CompositionComplete.assessment),
  );
  // The frozen D-P9 tuple still pins: the chain completes, private reads
  // stay refused there.
  assert.equal(dp9CompositionFresh.privateReadsActivated, false);
  assert.equal(
    dp9CompositionFresh.readinessState,
    "structurally_ready_private_reads_still_refused",
  );

  // No D-P10 assessment — activation, admission, composition — carries the
  // frozen `privateReadsActivated` name; the D-P10 honesty lives in its
  // own state vocabulary.
  // The D-P10 runners collected here are reused by block 6's forbidden-key
  // walk.
  dp10Runners = [
    ...stageDP10ActivationMatrix.map((entry) =>
      assessPondPrivateReadActivation({
        activationRecord: entry.activationRecord,
        receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
        ...completeChainFromDp9,
        receiverEvaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
        receiverMaximumAgeMs: entry.receiverMaximumAgeMs,
      }),
    ),
    ...stageDP10AdmissionMatrix.map((entry) =>
      assessPondPrivateReadAdmission({
        readAdmissionRecord: entry.readAdmissionRecord,
        activationRecord: entry.activationRecord,
        receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
      }),
    ),
    ...stageDP10CompositionMatrix.map((entry) =>
      assessPondPrivateReadActivationComposition({
        readActivationRecord: entry.readActivationRecord,
        readAdmissionRecord: entry.readAdmissionRecord,
        receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
        dp5CeremonyRecord: entry.dp5CeremonyRecord,
        dp8VerifierRecord: entry.dp8VerifierRecord,
        dp8ProofRecord: entry.dp8ProofRecord,
        dp9IssuanceRecord: entry.dp9IssuanceRecord,
        dp9MappingRecord: entry.dp9MappingRecord,
        receiverEvaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
        receiverMaximumAgeMs: entry.receiverMaximumAgeMs,
      }),
    ),
  ];
  for (const fresh of dp10Runners) {
    assert.ok(
      !Object.prototype.hasOwnProperty.call(fresh, "privateReadsActivated"),
    );
    assert.equal(fresh.runtimeActivationPosture, "not_included");
    assert.equal(fresh.authority, "none");
  }
  // And each refused arm stays refused.
  assert.equal(stageDP10ActivationRefused.assessment.activationState, "not_activated");
  assert.equal(stageDP10AdmissionRefused.assessment.readAdmissionState, "not_admitted");
  assert.equal(stageDP5LocalPrincipalBindingIncomplete.assessment.principalIdIssued, false);
  assert.equal(stageDP6AuthenticationObservationIncomplete.assessment.principalIdIssued, false);
  assert.equal(stageDP8MechanicIncomplete.assessment.principalIdIssued, false);
});

// ---------------------------------------------------------------
// Block 6: composition recompute, the digest tie, and the five checks
// individually unsatisfiable; the D-P9-chain tamper tie.
// ---------------------------------------------------------------
block("composition and digest tie", () => {
  // The digest formula ties: sha256(bytes(saltHex) || utf8(secret)) is
  // exactly the D-P8/D-P9 verifier digest the D-P10 chain carries. The
  // pinned secret lives in this selftest alone.
  const saltHex = "0a1b2c3d4e5f60718293a4b5c6d7e8f9";
  const verifierDigestHex =
    "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f";
  const digestHex = (text) =>
    createHash("sha256")
      .update(Buffer.concat([Buffer.from(saltHex, "hex"), Buffer.from(text, "utf8")]))
      .digest("hex");
  assert.equal(
    digestHex(POND_STAGE_DP10_CHALLENGE_SECRET),
    verifierDigestHex,
  );
  assert.equal(
    stageDP10CompositionComplete.dp8VerifierRecord.verifierBinding.verifierDigestHex,
    verifierDigestHex,
  );

  const completeRun = () =>
    assessPondPrivateReadActivationComposition({
      readActivationRecord: stageDP10CompositionComplete.readActivationRecord,
      readAdmissionRecord: stageDP10CompositionComplete.readAdmissionRecord,
      receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
      dp5CeremonyRecord: stageDP10CompositionComplete.dp5CeremonyRecord,
      dp8VerifierRecord: stageDP10CompositionComplete.dp8VerifierRecord,
      dp8ProofRecord: stageDP10CompositionComplete.dp8ProofRecord,
      dp9IssuanceRecord: stageDP10CompositionComplete.dp9IssuanceRecord,
      dp9MappingRecord: stageDP10CompositionComplete.dp9MappingRecord,
      receiverEvaluatedAtEpochMs: stageDP10CompositionComplete.receiverEvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP10CompositionComplete.receiverMaximumAgeMs,
    });
  const complete = completeRun();
  assert.equal(
    complete.privateReadActivationState,
    "fixture_structural_private_reads_activated_structural_records_only",
  );
  assert.deepEqual(deepClone(complete), deepClone(stageDP10CompositionComplete.assessment));
  // The complete arm stays bounded: no grant, no credential, no truth
  // claim, no authority, session-scoped only.
  assert.equal(complete.activationEstablishesGrant, false);
  assert.equal(complete.readEstablishesGrant, false);
  assert.equal(complete.currentTruthAdmitted, false);
  assert.equal(complete.collaborativeReadScopePosture, "not_included_single_principal_reads_only");
  assert.equal(complete.authority, "none");

  // Each composition check is unsatisfiable by a single input break.
  // Layered contracts legitimately co-refuse, so a break may carry
  // neighbors; the assertion pins exactly which check the break proves.
  const unsatContains = (brokenInput, checkName) => {
    const fresh = assessPondPrivateReadActivationComposition({
      readActivationRecord: stageDP10CompositionComplete.readActivationRecord,
      readAdmissionRecord: stageDP10CompositionComplete.readAdmissionRecord,
      receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
      dp5CeremonyRecord: stageDP10CompositionComplete.dp5CeremonyRecord,
      dp8VerifierRecord: stageDP10CompositionComplete.dp8VerifierRecord,
      dp8ProofRecord: stageDP10CompositionComplete.dp8ProofRecord,
      dp9IssuanceRecord: stageDP10CompositionComplete.dp9IssuanceRecord,
      dp9MappingRecord: stageDP10CompositionComplete.dp9MappingRecord,
      receiverEvaluatedAtEpochMs: stageDP10CompositionComplete.receiverEvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP10CompositionComplete.receiverMaximumAgeMs,
      ...brokenInput,
    });
    assert.equal(fresh.privateReadActivationState, "not_activated", checkName);
    assert.ok(
      fresh.unsatisfiedChecks.includes(checkName),
      `${checkName}: unsatisfied set=${JSON.stringify(fresh.unsatisfiedChecks)}`,
    );
    assert.equal(fresh.activationEstablishesGrant, false, checkName);
    assert.equal(fresh.readEstablishesGrant, false, checkName);
    return fresh;
  };

  // Check 1: the identity chain breaks on the wallet-derived issuance.
  unsatContains(
    { dp9IssuanceRecord: stageDP9IssuanceIncomplete.issuanceRecord },
    "identity_chain_structurally_ready_dp5_dp8_dp9",
  );

  // Check 2: a readiness-inferred activation never completes the
  // ceremony check.
  const readinessInferredActivation = {
    ...deepClone(stageDP10CompositionComplete.readActivationRecord),
    activationBasis: "inferred_from_structural_readiness",
  };
  unsatContains(
    { readActivationRecord: readinessInferredActivation },
    "activation_ceremony_complete_dp10",
  );

  // Check 3: the stale fixture arm — session currency expired.
  assert.equal(
    stageDP10CompositionStale.assessment.reason,
    "activation_not_session_current",
  );
  assert.ok(
    stageDP10CompositionStale.assessment.unsatisfiedChecks.includes(
      "activation_session_current_within_declared_maximum_age_dp10",
    ),
  );

  // Check 4: an activation-inferred read basis refuses the admission, and
  // with it the endpoint.
  const activationInferredAdmission = {
    ...deepClone(stageDP10CompositionComplete.readAdmissionRecord),
    readBasis: "inferred_from_activation",
  };
  unsatContains(
    { readAdmissionRecord: activationInferredAdmission },
    "read_admission_complete_and_bound_to_session_scoped_activation_dp10",
  );

  // Check 5: a target outside the pinned table never counts as
  // re-inspected.
  const unknownTargetAdmission = {
    ...deepClone(stageDP10CompositionComplete.readAdmissionRecord),
  };
  unknownTargetAdmission.readTargetRefs = [
    "agent:fixture:stage-d-p0:trading-desk-agent0",
  ];
  unsatContains(
    { readAdmissionRecord: unknownTargetAdmission },
    "read_targets_independently_reinspected_structural_records_only_dp10",
  );

  // The pinned stale and admission-incomplete arms match their fresh runs.
  const staleRun = assessPondPrivateReadActivationComposition({
    readActivationRecord: stageDP10CompositionStale.readActivationRecord,
    readAdmissionRecord: stageDP10CompositionStale.readAdmissionRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    dp5CeremonyRecord: stageDP10CompositionStale.dp5CeremonyRecord,
    dp8VerifierRecord: stageDP10CompositionStale.dp8VerifierRecord,
    dp8ProofRecord: stageDP10CompositionStale.dp8ProofRecord,
    dp9IssuanceRecord: stageDP10CompositionStale.dp9IssuanceRecord,
    dp9MappingRecord: stageDP10CompositionStale.dp9MappingRecord,
    receiverEvaluatedAtEpochMs: stageDP10CompositionStale.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: stageDP10CompositionStale.receiverMaximumAgeMs,
  });
  assert.deepEqual(deepClone(staleRun), deepClone(stageDP10CompositionStale.assessment));
  const admissionIncompleteRun = assessPondPrivateReadActivationComposition({
    readActivationRecord: stageDP10CompositionAdmissionIncomplete.readActivationRecord,
    readAdmissionRecord: stageDP10CompositionAdmissionIncomplete.readAdmissionRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    dp5CeremonyRecord: stageDP10CompositionAdmissionIncomplete.dp5CeremonyRecord,
    dp8VerifierRecord: stageDP10CompositionAdmissionIncomplete.dp8VerifierRecord,
    dp8ProofRecord: stageDP10CompositionAdmissionIncomplete.dp8ProofRecord,
    dp9IssuanceRecord: stageDP10CompositionAdmissionIncomplete.dp9IssuanceRecord,
    dp9MappingRecord: stageDP10CompositionAdmissionIncomplete.dp9MappingRecord,
    receiverEvaluatedAtEpochMs: stageDP10CompositionAdmissionIncomplete.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: stageDP10CompositionAdmissionIncomplete.receiverMaximumAgeMs,
  });
  assert.deepEqual(
    deepClone(admissionIncompleteRun),
    deepClone(stageDP10CompositionAdmissionIncomplete.assessment),
  );

  // The D-P9-chain tamper tie: a wallet-derived issuance breaks the D-P9
  // composition and, through it, the D-P10 endpoint never activates.
  const tamperedDp9 = assessPondPrincipalIdentityReadinessComposition({
    dp5CeremonyRecord: stageDP10CompositionComplete.dp5CeremonyRecord,
    dp8VerifierRecord: stageDP10CompositionComplete.dp8VerifierRecord,
    dp8ProofRecord: stageDP10CompositionComplete.dp8ProofRecord,
    dp9IssuanceRecord: stageDP9IssuanceIncomplete.issuanceRecord,
    dp9MappingRecord: stageDP10CompositionComplete.dp9MappingRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    receiverVerifiedAtEpochMs: stageDP10CompositionComplete.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: stageDP10CompositionComplete.receiverMaximumAgeMs,
  });
  assert.equal(
    tamperedDp9.readinessState,
    "not_ready",
    "D-P9 chaining tamper",
  );
  assert.equal(tamperedDp9.privateReadsActivated, false, "D-P9 chaining tamper");

  // No assessment key can carry a credential, secret, or read payload.
  for (const fresh of [complete, staleRun, admissionIncompleteRun, ...dp10Runners]) {
    assertNoForbiddenKeys(fresh, POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS, "assessment");
  }
});

// ---------------------------------------------------------------
// Block 7: hygiene — the fixture stays type-only, the pinned secret never
// reaches the fixtures or contracts, the ui surface carries no D-P10
// vocabulary, and the assessment/record keys stay free of the forbidden
// inventory.
// ---------------------------------------------------------------
block("hygiene", () => {
  const fixtureText = readFileSync(
    join(repoRoot, "src/fixtures/stage-d-p10-private-reads.ts"),
    "utf8",
  );
  // Zero value imports: every import line is type-only.
  const importLines = fixtureText
    .split("\n")
    .filter((line) => line.startsWith("import "));
  assert.ok(importLines.length >= 8);
  for (const line of importLines) {
    assert.ok(line.startsWith("import type "), `value import: ${line}`);
  }
  assert.ok(!fixtureText.includes(POND_STAGE_DP10_CHALLENGE_SECRET));

  // Banned module-text vocabulary is absent from the fixture.
  for (const banned of [
    "password",
    "passphrase",
    "localStorage",
    "sessionStorage",
    "XMLHttpRequest",
    "WebSocket",
    "EventSource",
    "__TAURI__",
    "invoke(",
    "fetch(",
  ]) {
    assert.ok(!fixtureText.includes(banned), `banned: ${banned}`);
  }

  // The pinned secret never reaches any D-P10 contract either.
  for (const contractName of [
    "src/contracts/pond-private-read-activation.ts",
    "src/contracts/pond-private-read-admission.ts",
    "src/contracts/pond-private-read-activation-composition.ts",
  ]) {
    const text = readFileSync(join(repoRoot, contractName), "utf8");
    assert.ok(!text.includes(POND_STAGE_DP10_CHALLENGE_SECRET), contractName);
    assert.ok(!text.includes("another-pond-secret"), contractName);
  }

  // The ui surface carries no D-P10 vocabulary: the contract names and the
  // stage tag appear nowhere under ui/.
  for (const uiPath of uiFilePaths(join(repoRoot, "ui"))) {
    const text = readFileSync(uiPath, "utf8");
    assert.ok(
      !text.includes("pond-private-read-activation") &&
        !text.includes("pond-private-read-admission") &&
        !text.includes("pond-private-read-activation-composition") &&
        !text.includes("d-p10"),
      `ui carries D-P10 vocabulary: ${uiPath}`,
    );
  }

  // Every fixture's record keys and assessment keys stay free of the
  // forbidden inventory at runtime.
  for (const entry of stageDP10ActivationMatrix) {
    assertNoForbiddenKeys(
      entry.activationRecord,
      POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS,
      `activation/${entry.fixtureLabel}`,
    );
    assertNoForbiddenKeys(
      entry.assessment,
      POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS,
      `activation-assessment/${entry.fixtureLabel}`,
    );
  }
  for (const entry of stageDP10AdmissionMatrix) {
    assertNoForbiddenKeys(
      entry.readAdmissionRecord,
      POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS,
      `admission/${entry.fixtureLabel}`,
    );
    assertNoForbiddenKeys(
      entry.assessment,
      POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS,
      `admission-assessment/${entry.fixtureLabel}`,
    );
  }
  for (const entry of stageDP10CompositionMatrix) {
    assert.ok(
      !Object.prototype.hasOwnProperty.call(entry.assessment, "privateReadsActivated"),
      entry.fixtureLabel,
    );
  }
});

console.log("POND_STAGE_DP10_PRIVATE_READ_ACTIVATION_SELFTEST_PASS");