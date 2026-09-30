// Stage D-P9 selftest: local PrincipalId issuance + ERC-8004 identity
// mapping vocabulary, with the refused readiness composition. The matrix
// recomputation proves the fixtures and the classifier agree; the identity
// ties prove one binding, one ref (the D-P0 hold); the fail-closed blocks
// prove wallet-derived, presence-inferred, and equivalence-claim issuances
// and mappings stay refused while fabricated or
// receiver-observed-but-unreproduced onchain evidence never verifies; the
// frozen-widening block proves the D-P5/D-P6/D-P8 frozen tuples still hold;
// the composition block proves structural readiness ends with private
// reads refused; the hygiene block proves the fixture stays type-only and
// the ui surface untouched.

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

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
import {
  assessPondLocalPrincipalIdIssuance,
  POND_STAGE_DP9_FORBIDDEN_ISSUANCE_KEYS,
} from "../src/contracts/pond-local-principal-id-issuance.ts";
import {
  assessPondErc8004IdentityMapping,
  POND_STAGE_DP9_FORBIDDEN_MAPPING_KEYS,
} from "../src/contracts/pond-erc8004-identity-mapping.ts";
import { assessPondPrincipalIdentityReadinessComposition } from "../src/contracts/pond-principal-identity-readiness-composition.ts";
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
import { assessPondLocalPrincipalBindingEstablishment } from "../src/contracts/pond-local-principal-binding-establishment.ts";
import { assessPondLocalAuthenticationChallengeProof } from "../src/contracts/pond-local-authentication-mechanic.ts";
import { assessPondLocalPrincipalAuthenticationObservation } from "../src/contracts/pond-local-principal-authentication-observation.ts";

// The pinned challenge secret lives here alone — never in the fixtures or
// the contracts. This is the same D-P8 fixture secret: the D-P9 fixture
// carries the resulting digests only, so the composition's verified
// knowledge factor ties to the D-P8 mechanic byte for byte.
const POND_STAGE_DP9_CHALLENGE_SECRET = "pond-stage-d-p8-fixture-secret";
const POND_STAGE_DP9_OTHER_SECRET = "another-pond-secret";
const saltHex = "0a1b2c3d4e5f60718293a4b5c6d7e8f9";
const verifierDigestHex =
  "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f";
const otherResponseDigestHex =
  "b54534785d54c4046e3781a1934df25caa4db9c94ee2751dccd868b88744191c";

const repoRoot = new URL("..", import.meta.url).pathname;

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const digestHex = (text) =>
  createHash("sha256")
    .update(Buffer.concat([Buffer.from(saltHex, "hex"), Buffer.from(text, "utf8")]))
    .digest("hex");

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

let blocks = 0;
const block = (label, run) => {
  blocks += 1;
  console.log(`block ${blocks}: ${label}`);
  run();
};

// ---------------------------------------------------------------
// Block 1: fixture matrix recompute — every pinned assessment equals a
// fresh run of its classifier.
// ---------------------------------------------------------------
block("matrix recompute", () => {
  for (const entry of stageDP9IssuanceMatrix) {
    const fresh = assessPondLocalPrincipalIdIssuance({
      issuanceRecord: entry.issuanceRecord,
      receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
    });
    assert.equal(fresh.contractVersion, "pond-local-principal-id-issuance-d-p9");
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(fresh, `issuance:${entry.fixtureLabel}`);
  }
  for (const entry of stageDP9MappingMatrix) {
    const fresh = assessPondErc8004IdentityMapping({
      mappingRecord: entry.mappingRecord,
      receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
      receiverVerification: entry.receiverVerification,
    });
    assert.equal(fresh.contractVersion, "pond-erc8004-identity-mapping-d-p9");
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(fresh, `mapping:${entry.fixtureLabel}`);
  }
  for (const entry of stageDP9CompositionMatrix) {
    const fresh = assessPondPrincipalIdentityReadinessComposition({
      dp5CeremonyRecord: entry.dp5CeremonyRecord,
      dp8VerifierRecord: entry.dp8VerifierRecord,
      dp8ProofRecord: entry.dp8ProofRecord,
      dp9IssuanceRecord: entry.dp9IssuanceRecord,
      dp9MappingRecord: entry.dp9MappingRecord,
      receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
      receiverVerifiedAtEpochMs: entry.receiverVerifiedAtEpochMs,
      receiverMaximumAgeMs: entry.receiverMaximumAgeMs,
    });
    assert.equal(
      fresh.contractVersion,
      "pond-principal-identity-readiness-composition-d-p9",
    );
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(fresh, `composition:${entry.fixtureLabel}`);
  }
  assert.equal(stageDP9IssuanceMatrix.length, 2);
  assert.equal(stageDP9MappingMatrix.length, 2);
  assert.equal(stageDP9CompositionMatrix.length, 2);
});

// ---------------------------------------------------------------
// Block 2: identity ties — one binding, one ref. Every D-P9 record lands
// on the D-P0-held principal ref; the mapping's agent ref is the D-P0
// Agent0; the composition's inlined D-P5/D-P8 copies equal the actual
// D-P5/D-P8 fixture records; cross-prefix labels are refused.
// ---------------------------------------------------------------
block("identity ties", () => {
  for (const entry of stageDP9IssuanceMatrix) {
    assert.equal(entry.issuanceRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.receiverHeldPrincipalRef, stageDP0LocalPrincipalRef);
  }
  for (const entry of stageDP9MappingMatrix) {
    assert.equal(entry.mappingRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.receiverHeldPrincipalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.mappingRecord.agentRef, stageDP0Agent0Ref);
  }
  for (const entry of stageDP9CompositionMatrix) {
    assert.equal(entry.dp5CeremonyRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.dp8VerifierRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.dp8ProofRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.dp9IssuanceRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.dp9MappingRecord.principalRef, stageDP0LocalPrincipalRef);
    // One binding, one ref: the inlined copies equal the actual upstream
    // fixture records, so the composition recomputes over the same
    // ceremony and challenge round the D-P5/D-P8 fixtures pin.
    assert.deepEqual(
      deepClone(entry.dp5CeremonyRecord),
      deepClone(stageDP5LocalPrincipalBindingComplete.ceremonyRecord),
      entry.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(entry.dp8VerifierRecord),
      deepClone(stageDP8MechanicComplete.verifierRecord),
      entry.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(entry.dp8ProofRecord),
      deepClone(stageDP8MechanicComplete.proofRecord),
      entry.fixtureLabel,
    );
  }
  // The complete issuance and the complete mapping are the same records
  // the composition arms carry.
  assert.deepEqual(
    deepClone(stageDP9CompositionComplete.dp9IssuanceRecord),
    deepClone(stageDP9IssuanceComplete.issuanceRecord),
  );
  assert.deepEqual(
    deepClone(stageDP9CompositionComplete.dp9MappingRecord),
    deepClone(stageDP9MappingEstablished.mappingRecord),
  );

  // Cross-prefix guards: an ERC-8004 label that embeds a principal or
  // agent ref, and an agent ref that embeds either, are refused as an
  // identity collapse before any check runs.
  const established = stageDP9MappingEstablished.mappingRecord;
  for (const tamperedRef of [
    "erc8004:principal:fixture:stage-d-p0:local-principal",
    "erc8004:agent:fixture:stage-d-p0:x",
  ]) {
    const tampered = deepClone(established);
    tampered.erc8004IdentityRef = tamperedRef;
    assert.equal(
      assessPondErc8004IdentityMapping({
        mappingRecord: tampered,
        receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
        receiverVerification: "not_performed",
      }).reason,
      "mapping_record_invalid",
      tamperedRef,
    );
  }
  for (const tamperedRef of [
    "agent:principal:fixture:stage-d-p0:local-principal",
    "agent:erc8004:fixture:stage-d-p9:x",
  ]) {
    const tampered = deepClone(established);
    tampered.agentRef = tamperedRef;
    assert.equal(
      assessPondErc8004IdentityMapping({
        mappingRecord: tampered,
        receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
        receiverVerification: "not_performed",
      }).reason,
      "mapping_record_invalid",
      tamperedRef,
    );
  }
});

// ---------------------------------------------------------------
// Block 3: issuance fail-closed — structural tampering is invalid;
// wallet/identity-derived and presence-inferred bases stay
// valid-but-unsatisfied and never issue; a mismatched held ref never
// issues; the forbidden-key inventory stays frozen and covers the
// key-ownership keys.
// ---------------------------------------------------------------
block("issuance fail-closed", () => {
  const completeRecord = stageDP9IssuanceComplete.issuanceRecord;
  const invalidReason = "issuance_record_invalid";

  const assertInvalid = (value, label) => {
    const fresh = assessPondLocalPrincipalIdIssuance({
      issuanceRecord: value,
      receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    });
    assert.equal(fresh.reason, invalidReason, label);
    assert.equal(fresh.issuanceState, "not_issued", label);
    assert.equal(fresh.issuanceRecordVersion, "invalid", label);
    assert.equal(fresh.satisfiedChecks.length, 0, label);
  };

  assertInvalid({ ...deepClone(completeRecord), kind: "pond-local-principal-id-issuance-x" }, "kind");
  assertInvalid(
    { ...deepClone(completeRecord), contractVersion: "pond-local-principal-id-issuance-d-p8" },
    "contract version",
  );
  assertInvalid(
    { ...deepClone(completeRecord), principalId: "principal:fixture:x" },
    "PrincipalId key smuggle",
  );
  assertInvalid(
    { ...deepClone(completeRecord), privateKey: "0xdeadbeef" },
    "privateKey key smuggle",
  );
  assertInvalid(
    { ...deepClone(completeRecord), mnemonic: "some seed words" },
    "mnemonic key smuggle",
  );
  assertInvalid(
    { ...deepClone(completeRecord), unknownExtraKey: 1 },
    "extra key",
  );
  const missingKey = deepClone(completeRecord);
  delete missingKey.issuedRefPosture;
  assertInvalid(missingKey, "missing key");
  assertInvalid(
    { ...deepClone(completeRecord), principalRef: "wallet:0xfrog" },
    "wallet-shaped principal ref",
  );
  const flippedClaims = deepClone(completeRecord);
  flippedClaims.issuanceDistinctnessClaims = {
    ...deepClone(flippedClaims.issuanceDistinctnessClaims),
    isAgentId: true,
  };
  assertInvalid(flippedClaims, "distinctness flip");

  // Valid-but-unsatisfied: every refused basis stays a valid record whose
  // issuance never happens.
  for (const refusedBasis of [
    "not_issued",
    "inferred_from_presence",
    "derived_from_wallet_address",
    "derived_from_observed_onchain_identity",
    "derived_from_erc8004_binding",
  ]) {
    const tampered = deepClone(completeRecord);
    tampered.issuanceBasis = refusedBasis;
    const fresh = assessPondLocalPrincipalIdIssuance({
      issuanceRecord: tampered,
      receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    });
    assert.equal(fresh.reason, "receiver_issuance_proof_incomplete", refusedBasis);
    assert.equal(fresh.issuanceState, "not_issued", refusedBasis);
    assert.equal(fresh.credentialAdmitted, false, refusedBasis);
    assert.equal(fresh.walletAddressAcceptedAsPrincipalId, false, refusedBasis);
    assert.ok(
      fresh.unsatisfiedChecks.includes("issuance_explicitly_receiver_owned"),
      refusedBasis,
    );
  }

  // A well-formed but foreign held ref never issues.
  const foreign = assessPondLocalPrincipalIdIssuance({
    issuanceRecord: completeRecord,
    receiverHeldPrincipalRef: "principal:somewhere-else:other-principal",
  });
  assert.equal(foreign.reason, "receiver_issuance_proof_incomplete");
  assert.equal(foreign.issuanceState, "not_issued");
  assert.ok(
    foreign.unsatisfiedChecks.includes("issued_ref_is_receiver_held_ref"),
  );

  assert.ok(Object.isFrozen(POND_STAGE_DP9_FORBIDDEN_ISSUANCE_KEYS));
  for (const key of ["privateKey", "mnemonic", "credential", "token"]) {
    assert.ok(POND_STAGE_DP9_FORBIDDEN_ISSUANCE_KEYS.includes(key), key);
  }
  assert.equal(POND_STAGE_DP9_FORBIDDEN_ISSUANCE_KEYS.length, 26);
});

// ---------------------------------------------------------------
// Block 4: mapping fail-closed — inferred and equivalence bases stay
// valid-but-unsatisfied; fabricated evidence is supplied data and never
// satisfies the verification check; even the receiver-observed literal
// leaves the verification honestly unperformed; the mapping never
// establishes a grant.
// ---------------------------------------------------------------
block("mapping fail-closed", () => {
  const establishedRecord = stageDP9MappingEstablished.mappingRecord;
  const invalidReason = "mapping_record_invalid";

  const freshOn = (record, receiverVerification = "not_performed") =>
    assessPondErc8004IdentityMapping({
      mappingRecord: record,
      receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
      receiverVerification,
    });

  const assertInvalid = (value, label) => {
    const fresh = freshOn(value);
    assert.equal(fresh.reason, invalidReason, label);
    assert.equal(fresh.mappingEstablishmentState, "not_established", label);
    assert.equal(fresh.mappingRecordVersion, "invalid", label);
    assert.equal(fresh.satisfiedChecks.length, 0, label);
  };

  assertInvalid(
    { ...deepClone(establishedRecord), kind: "pond-erc8004-identity-mapping-x" },
    "kind",
  );
  assertInvalid(
    { ...deepClone(establishedRecord), contractVersion: "pond-erc8004-identity-mapping-d-p8" },
    "contract version",
  );
  assertInvalid(
    { ...deepClone(establishedRecord), signature: { r: "0x1", s: "0x2" } },
    "signature key smuggle",
  );
  assertInvalid(
    { ...deepClone(establishedRecord), walletAddress: "0xfrog" },
    "wallet key smuggle",
  );
  assertInvalid(
    { ...deepClone(establishedRecord), extraKey: 1 },
    "extra key",
  );
  const badDistinctness = deepClone(establishedRecord);
  badDistinctness.mappingDistinctnessClaims = {
    ...deepClone(establishedRecord.mappingDistinctnessClaims),
    onchainIdentityEstablishesAuthority: true,
  };
  assertInvalid(badDistinctness, "distinctness flip");
  const fabricatedAgentEquivalence = deepClone(establishedRecord);
  fabricatedAgentEquivalence.agentRef = stageDP0LocalPrincipalRef;
  assertInvalid(fabricatedAgentEquivalence, "agent ref equals principal ref");

  // Inferred and claimed bases: valid, honestly carried, and refused.
  for (const refusedBasis of [
    "inferred_from_wallet_ownership",
    "inferred_from_onchain_observation",
    "inferred_from_provider_session",
    "equivalence_claim_not_explicit_binding",
  ]) {
    const tampered = deepClone(establishedRecord);
    tampered.mappingBasis = refusedBasis;
    const fresh = freshOn(tampered);
    assert.equal(fresh.reason, "receiver_mapping_proof_incomplete", refusedBasis);
    assert.equal(fresh.mappingEstablishmentState, "not_established", refusedBasis);
    assert.equal(fresh.mappingEstablishesGrant, false, refusedBasis);
    assert.ok(
      fresh.unsatisfiedChecks.includes(
        "mapping_explicitly_receiver_owned_not_inferred_or_equivalence",
      ),
      refusedBasis,
    );
  }

  // Fabricated, complete evidence is supplied data: the record stays
  // valid, the verification check stays unsatisfied, and the honest
  // completion posture is exactly onchain_verification_not_performed.
  const fabricated = deepClone(establishedRecord);
  fabricated.verificationEvidence = {
    chainIdObserved: "8453",
    registryAddress: "0x0000000000000000000000000000000000000000",
    agentId: "1",
    ownerObserved: "0x000000000000000000000000000000000000dead",
    blockTag: "latest",
  };
  const fabricatedFresh = freshOn(fabricated);
  assert.equal(fabricatedFresh.reason, "onchain_verification_not_performed");
  assert.equal(fabricatedFresh.onchainVerificationState, "not_verified");
  assert.ok(
    fabricatedFresh.unsatisfiedChecks.includes(
      "onchain_verification_evidence_independently_observed",
    ),
  );

  // The receiver-observed verification literal is the honest seam for the
  // dedicated verification cut and still verifies nothing here.
  const receiverObserved = freshOn(establishedRecord, "receiver_observed_onchain_identity_evidence");
  assert.equal(receiverObserved.reason, "onchain_verification_not_performed");
  assert.equal(receiverObserved.onchainVerificationState, "not_verified");
  assert.equal(
    receiverObserved.mappingEstablishmentState,
    "fixture_structural_receiver_owned_mapping",
  );
  assert.deepEqual(
    deepClone(receiverObserved),
    deepClone(stageDP9MappingEstablished.assessment),
  );

  assert.ok(Object.isFrozen(POND_STAGE_DP9_FORBIDDEN_MAPPING_KEYS));
  for (const key of ["privateKey", "mnemonic", "signature", "credential"]) {
    assert.ok(POND_STAGE_DP9_FORBIDDEN_MAPPING_KEYS.includes(key), key);
  }
  assert.equal(POND_STAGE_DP9_FORBIDDEN_MAPPING_KEYS.length, 27);
});

// ---------------------------------------------------------------
// Block 5: frozen widening proof — the D-P5, D-P6, and D-P8 frozen
// assessors still report their exact pinned tuples on their own fixtures,
// and principalIdIssued stays false in every one of them: the issuance
// vocabulary exists only in D-P9's own state vocabulary.
// ---------------------------------------------------------------
block("frozen widening proof", () => {
  const dp5Fresh = assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: stageDP5LocalPrincipalBindingComplete.ceremonyRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
  });
  assert.deepEqual(
    deepClone(dp5Fresh),
    deepClone(stageDP5LocalPrincipalBindingComplete.assessment),
  );
  assert.equal(dp5Fresh.principalIdIssued, false);

  const dp6Fresh = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: stageDP6AuthenticationObservationComplete.observationRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
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
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    evaluatedAtEpochMs: stageDP8MechanicComplete.evaluatedAtEpochMs,
    maximumAgeMs: stageDP8MechanicComplete.maximumAgeMs,
  });
  assert.deepEqual(
    deepClone(dp8ChallengeFresh),
    deepClone(stageDP8MechanicComplete.assessment),
  );
  assert.equal(dp8ChallengeFresh.principalIdIssued, false);
  assert.equal(
    dp8ChallengeFresh.authenticationMechanicState,
    "receiver_verified_knowledge_factor",
  );

  // The D-P9 issuance assessment deliberately carries no principalIdIssued
  // field — the frozen family keeps its false literals as the only
  // carriers of that name.
  for (const entry of stageDP9IssuanceMatrix) {
    assert.ok(
      !Object.prototype.hasOwnProperty.call(entry.assessment, "principalIdIssued"),
    );
  }
  for (const entry of stageDP9MappingMatrix) {
    assert.ok(
      !Object.prototype.hasOwnProperty.call(entry.assessment, "principalIdIssued"),
    );
  }
  for (const entry of stageDP9CompositionMatrix) {
    assert.ok(
      !Object.prototype.hasOwnProperty.call(entry.assessment, "principalIdIssued"),
    );
  }

  assert.equal(stageDP5LocalPrincipalBindingIncomplete.assessment.principalIdIssued, false);
  assert.equal(stageDP6AuthenticationObservationIncomplete.assessment.principalIdIssued, false);
  assert.equal(stageDP8MechanicIncomplete.assessment.principalIdIssued, false);
});

// ---------------------------------------------------------------
// Block 6: composition recompute, digest tie, and the four individually
// breakable readiness checks.
// ---------------------------------------------------------------
block("composition and digest tie", () => {
  // The digest formula ties: sha256(bytes(saltHex) || utf8(secret)) is
  // exactly the fixture's verifier digest, and the other secret reproduces
  // the mismatch digest — the composition's verified knowledge factor is
  // the D-P8 mechanic, byte for byte.
  assert.equal(digestHex(POND_STAGE_DP9_CHALLENGE_SECRET), verifierDigestHex);
  assert.equal(digestHex(POND_STAGE_DP9_OTHER_SECRET), otherResponseDigestHex);
  assert.equal(
    stageDP9CompositionComplete.dp8VerifierRecord.verifierBinding.verifierDigestHex,
    verifierDigestHex,
  );

  const completeRun = () =>
    assessPondPrincipalIdentityReadinessComposition({
      dp5CeremonyRecord: stageDP9CompositionComplete.dp5CeremonyRecord,
      dp8VerifierRecord: stageDP9CompositionComplete.dp8VerifierRecord,
      dp8ProofRecord: stageDP9CompositionComplete.dp8ProofRecord,
      dp9IssuanceRecord: stageDP9CompositionComplete.dp9IssuanceRecord,
      dp9MappingRecord: stageDP9CompositionComplete.dp9MappingRecord,
      receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
      receiverVerifiedAtEpochMs: stageDP9CompositionComplete.receiverVerifiedAtEpochMs,
      receiverMaximumAgeMs: stageDP9CompositionComplete.receiverMaximumAgeMs,
    });
  const complete = completeRun();
  assert.equal(complete.readinessState, "structurally_ready_private_reads_still_refused");
  assert.deepEqual(deepClone(complete), deepClone(stageDP9CompositionComplete.assessment));
  // Structural readiness still refuses everything private reads would
  // need — on the complete arm.
  assert.equal(complete.privateReadsActivated, false);
  assert.equal(complete.principalIdAcceptedAsAuthorization, false);
  assert.equal(complete.erc8004IdentityAcceptedAsPrincipalId, false);
  assert.equal(complete.authority, "none");

  // Each readiness check is individually unsatisfiable by breaking exactly
  // one input.
  const oneBroken = (name, brokenInput) => {
    const fresh = assessPondPrincipalIdentityReadinessComposition({
      dp5CeremonyRecord: stageDP9CompositionComplete.dp5CeremonyRecord,
      dp8VerifierRecord: stageDP9CompositionComplete.dp8VerifierRecord,
      dp8ProofRecord: stageDP9CompositionComplete.dp8ProofRecord,
      dp9IssuanceRecord: stageDP9CompositionComplete.dp9IssuanceRecord,
      dp9MappingRecord: stageDP9CompositionComplete.dp9MappingRecord,
      receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
      receiverVerifiedAtEpochMs: stageDP9CompositionComplete.receiverVerifiedAtEpochMs,
      receiverMaximumAgeMs: stageDP9CompositionComplete.receiverMaximumAgeMs,
      ...brokenInput,
    });
    assert.equal(fresh.readinessState, "not_ready", name);
    assert.equal(fresh.reason, "receiver_private_read_proof_incomplete", name);
    assert.deepEqual(fresh.unsatisfiedChecks, [name], name);
    assert.equal(fresh.privateReadsActivated, false, name);
    return fresh;
  };
  const incompleteCeremony = deepClone(stageDP9CompositionComplete.dp5CeremonyRecord);
  incompleteCeremony.bindingBasis = "not_established";
  oneBroken("local_principal_binding_established_dp5", {
    dp5CeremonyRecord: incompleteCeremony,
  });
  const mismatchedProof = deepClone(stageDP8MechanicIncomplete.proofRecord);
  oneBroken("knowledge_factor_verified_dp8", {
    dp8ProofRecord: mismatchedProof,
  });
  oneBroken("local_principal_id_issued_dp9", {
    dp9IssuanceRecord: stageDP9IssuanceIncomplete.issuanceRecord,
  });
  oneBroken("erc8004_mapping_record_established_dp9", {
    dp9MappingRecord: stageDP9MappingUnestablished.mappingRecord,
  });

  // The pinned incomplete arm matches its fresh run.
  const incompleteRun = assessPondPrincipalIdentityReadinessComposition({
    dp5CeremonyRecord: stageDP9CompositionIncomplete.dp5CeremonyRecord,
    dp8VerifierRecord: stageDP9CompositionIncomplete.dp8VerifierRecord,
    dp8ProofRecord: stageDP9CompositionIncomplete.dp8ProofRecord,
    dp9IssuanceRecord: stageDP9CompositionIncomplete.dp9IssuanceRecord,
    dp9MappingRecord: stageDP9CompositionIncomplete.dp9MappingRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
    receiverVerifiedAtEpochMs: stageDP9CompositionIncomplete.receiverVerifiedAtEpochMs,
    receiverMaximumAgeMs: stageDP9CompositionIncomplete.receiverMaximumAgeMs,
  });
  assert.deepEqual(
    deepClone(incompleteRun),
    deepClone(stageDP9CompositionIncomplete.assessment),
  );

  // No assessment key can carry a credential, secret, or identity collapse.
  for (const fresh of [
    complete,
    incompleteRun,
    ...stageDP9IssuanceMatrix.map((entry) =>
      assessPondLocalPrincipalIdIssuance({
        issuanceRecord: entry.issuanceRecord,
        receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
      }),
    ),
    ...stageDP9MappingMatrix.map((entry) =>
      assessPondErc8004IdentityMapping({
        mappingRecord: entry.mappingRecord,
        receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
        receiverVerification: entry.receiverVerification,
      }),
    ),
  ]) {
    assertNoForbiddenKeys(fresh, POND_STAGE_DP9_FORBIDDEN_ISSUANCE_KEYS, "assessment");
  }
});

// ---------------------------------------------------------------
// Block 7: hygiene — the fixture stays type-only, the pinned secret never
// reaches the fixtures or contracts, the ui surface carries no D-P9
// vocabulary, and the assessment/forbidden-key inventories stay frozen.
// ---------------------------------------------------------------
block("hygiene", () => {
  const fixtureText = readFileSync(
    join(repoRoot, "src/fixtures/stage-d-p9-principal-identity.ts"),
    "utf8",
  );
  // Zero value imports: every import line is type-only.
  const importLines = fixtureText
    .split("\n")
    .filter((line) => line.startsWith("import "));
  assert.ok(importLines.length >= 6);
  for (const line of importLines) {
    assert.ok(line.startsWith("import type "), `value import: ${line}`);
  }
  assert.ok(!fixtureText.includes(POND_STAGE_DP9_CHALLENGE_SECRET));
  assert.ok(!fixtureText.includes(POND_STAGE_DP9_OTHER_SECRET));

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

  // The pinned secret never reaches any contract either.
  for (const contractName of [
    "src/contracts/pond-local-principal-id-issuance.ts",
    "src/contracts/pond-erc8004-identity-mapping.ts",
    "src/contracts/pond-principal-identity-readiness-composition.ts",
  ]) {
    const text = readFileSync(join(repoRoot, contractName), "utf8");
    assert.ok(!text.includes(POND_STAGE_DP9_CHALLENGE_SECRET), contractName);
    assert.ok(!text.includes("another-pond-secret"), contractName);
  }

  // The ui surface carries no D-P9 vocabulary: the contract names and the
  // stage tag appear nowhere under ui/. Recorded deliberate exemption
  // (D-P15 cross-cut reconciliation, owner-approved 2026-09-29): the D-P15
  // generated bundle carries the D-P9 leg assessors as plumbing — the D-P15
  // establishment re-runs them at every assessment (evidence-activation
  // L109) — so its committed artifact may name them; no hand-written ui
  // module may ever do so, and every other file under ui/ stays walked.
  for (const uiPath of uiFilePaths(join(repoRoot, "ui"))) {
    if (uiPath.includes("pond-stage-d-live-session")) continue;
    const text = readFileSync(uiPath, "utf8");
    assert.ok(
      !text.includes("pond-local-principal-id-issuance") &&
        !text.includes("pond-erc8004-identity-mapping") &&
        !text.includes("pond-principal-identity-readiness-composition") &&
        !text.includes("d-p9"),
      `ui carries D-P9 vocabulary: ${uiPath}`,
    );
  }

  // The assessment keys stay free of the forbidden inventories on the
  // type level is proven by tsc; here the record keys are proven at
  // runtime for every fixture record.
  for (const entry of stageDP9IssuanceMatrix) {
    assertNoForbiddenKeys(
      entry.issuanceRecord,
      POND_STAGE_DP9_FORBIDDEN_ISSUANCE_KEYS,
      `issuance/${entry.fixtureLabel}`,
    );
  }
  for (const entry of stageDP9MappingMatrix) {
    assertNoForbiddenKeys(
      entry.mappingRecord,
      POND_STAGE_DP9_FORBIDDEN_MAPPING_KEYS,
      `mapping/${entry.fixtureLabel}`,
    );
  }
});

console.log("POND_STAGE_DP9_PRINCIPAL_ID_ISSUANCE_ERC8004_MAPPING_SELFTEST_PASS");