// Stage D-P11 selftest: live receiver-side onchain verification of the
// ERC-8004 identity mapping. Offline structural by default; the live
// Base-mainnet observation block is env-gated (TOADAID_LIVE_ERC8004_VERIFY
// === "1", never set by CI). The matrix recomputation proves the fixtures
// and the classifiers agree; the identity ties prove one binding, one ref,
// and that the inlined frozen all-null mapping copy equals the actual
// D-P9 fixture record; the observation fail-closed block proves claimed,
// third-party, cached, and replayed bases, one-endpoint "agreement",
// digest mismatch, and D-P2-literal freshness diagnoses stay refused while
// a reverted ownerOf is honestly carried but unsatisfied; the verification
// fail-closed block proves the mapping-invalid, unestablished, independent-
// ly-unverified, reproduction, and literal-missing refusals — including
// every single-evidence-field mismatch; the frozen-widening block proves
// the D-P9 mapping still reports onchain_verification_not_performed over
// the non-null claim and no D-P11 assessment carries a frozen tuple name;
// the digest tie proves the claimed digests equal a real node:crypto
// sha256 over the contract's own canonical lines; the hygiene block
// proves the fixture stays type-only and the real network constants live
// only under scripts/.

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  stageDP11ObservationComplete,
  stageDP11ObservationClaimedRefused,
  stageDP11ObservationMatrix,
  stageDP11VerificationComplete,
  stageDP11VerificationFrozenAllNullRefused,
  stageDP11VerificationStaleRefused,
  stageDP11VerificationMatrix,
} from "../src/fixtures/stage-d-p11-erc8004-identity-verification.ts";
import {
  assessPondErc8004OnchainObservation,
  pondErc8004CanonicalObservationDigestLines,
} from "../src/contracts/pond-erc8004-identity-observation.ts";
import { assessPondErc8004OnchainVerification } from "../src/contracts/pond-erc8004-identity-verification.ts";
import { POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS } from "../src/contracts/pond-private-read-activation.ts";
import { assessPondErc8004IdentityMapping } from "../src/contracts/pond-erc8004-identity-mapping.ts";
import { stageDP0LocalPrincipalRef } from "../src/fixtures/stage-d-p0-agent-presence.ts";
import { stageDP5LocalPrincipalBindingComplete } from "../src/fixtures/stage-d-p5-local-principal-binding.ts";
import { stageDP6AuthenticationObservationComplete } from "../src/fixtures/stage-d-p6-local-principal-authentication-observation.ts";
import { stageDP8MechanicComplete } from "../src/fixtures/stage-d-p8-local-authentication-mechanic.ts";
import {
  stageDP9CompositionComplete,
  stageDP9MappingEstablished,
  stageDP9MappingUnestablished,
} from "../src/fixtures/stage-d-p9-principal-identity.ts";
import { assessPondLocalPrincipalBindingEstablishment } from "../src/contracts/pond-local-principal-binding-establishment.ts";
import { assessPondLocalAuthenticationChallengeProof } from "../src/contracts/pond-local-authentication-mechanic.ts";
import { assessPondLocalPrincipalAuthenticationObservation } from "../src/contracts/pond-local-principal-authentication-observation.ts";
import { assessPondPrincipalIdentityReadinessComposition } from "../src/contracts/pond-principal-identity-readiness-composition.ts";
import { assertClientShape } from "../scripts/pond-erc8004-identity-rpc-client.mjs";

const repoRoot = new URL("..", import.meta.url).pathname;

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const assertDeepFrozen = (value, path) => {
  assert.ok(Object.isFrozen(value), `not frozen: ${path}`);
  for (const entry of Object.values(value)) {
    if (entry !== null && typeof entry === "object") {
      assertDeepFrozen(entry, `${path}.${String(entry)}`);
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

const receiverHeldPrincipalRef = stageDP0LocalPrincipalRef;
const receiverVerificationLiteral = "receiver_observed_onchain_identity_evidence";

let blocks = 0;
const block = (label, run) => {
  blocks += 1;
  console.log(`block ${blocks}: ${label}`);
  run();
};

// Fresh runs collected across the fail-closed blocks, reused by the
// frozen-widening block's frozen-name walk. Only D-P11 assessments land
// here — never a frozen family assessment.
let dp11Runners = [];
const collectObservation = (record, recomputedDigestHex, evaluated, maxAge) => {
  const fresh = assessPondErc8004OnchainObservation({
    observationRecord: record,
    receiverRecomputedDigestHex: recomputedDigestHex,
    receiverEvaluatedAtEpochMs: evaluated,
    receiverMaximumAgeMs: maxAge,
  });
  dp11Runners.push(fresh);
  return fresh;
};
const collectVerification = (input) => {
  const fresh = assessPondErc8004OnchainVerification({
    dp9MappingRecord: input.dp9MappingRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    observationRecord: input.observationRecord,
    receiverVerification: input.receiverVerification,
    receiverRecomputedDigestHex: input.receiverRecomputedDigestHex,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  });
  dp11Runners.push(fresh);
  return fresh;
};

// The sha256 over the contract's own canonical lines — the one definition
// the classifier compares against, recomputed here with node:crypto.
const sha256Hex = (lines) => createHash("sha256").update(lines).digest("hex");

const digestLines = (record) =>
  pondErc8004CanonicalObservationDigestLines(record);

const allObservationChecks = [
  "observation_record_well_formed",
  "observation_basis_explicitly_receiver_performed",
  "two_endpoint_agreement_recorded_and_self_reviewed",
  "owner_read_outcome_observed",
  "digest_claim_matches_recomputed_digest",
  "observation_fresh_and_not_future",
  "distinctness_claims_all_false_and_scopes_held",
  "observation_names_no_principal_and_grants_no_authority",
];
const allVerificationChecks = [
  "mapping_record_valid_and_established_dp9_carried_forward",
  "receiver_held_principal_ref_binds_the_mapping",
  "observation_independently_valid_performed_and_fresh",
  "observed_evidence_reproduces_mapping_verification_evidence",
  "receiver_verification_literal_affirmed_not_the_only_proof",
  "evidence_ceiling_held_no_binding_authority_or_current_truth",
];

// ---------------------------------------------------------------
// Block 1: fixture matrix recompute — every pinned assessment equals a
// fresh run of its classifier.
// ---------------------------------------------------------------
block("matrix recompute", () => {
  for (const entry of stageDP11ObservationMatrix) {
    const fresh = assessPondErc8004OnchainObservation({
      observationRecord: entry.observationRecord,
      receiverRecomputedDigestHex: entry.receiverRecomputedDigestHex,
      receiverEvaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
      receiverMaximumAgeMs: entry.receiverMaximumAgeMs,
    });
    assert.equal(
      fresh.contractVersion,
      "pond-erc8004-identity-observation-d-p11",
    );
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(fresh, `observation:${entry.fixtureLabel}`);
  }
  for (const entry of stageDP11VerificationMatrix) {
    const fresh = assessPondErc8004OnchainVerification({
      dp9MappingRecord: entry.dp9MappingRecord,
      receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
      observationRecord: entry.observationRecord,
      receiverVerification: entry.receiverVerification,
      receiverRecomputedDigestHex: entry.receiverRecomputedDigestHex,
      receiverEvaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
      receiverMaximumAgeMs: entry.receiverMaximumAgeMs,
    });
    assert.equal(
      fresh.contractVersion,
      "pond-erc8004-identity-verification-d-p11",
    );
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(fresh, `verification:${entry.fixtureLabel}`);
  }
  assert.equal(stageDP11ObservationMatrix.length, 2);
  assert.equal(stageDP11VerificationMatrix.length, 3);
});

// ---------------------------------------------------------------
// Block 2: identity ties — one binding, one ref. Every observation record
// lands on the structural surface in offline mode; every verification
// record lands on the D-P0-held principal ref, the D-P9 mapping's
// erc8004 label, and the same agent; the inlined frozen all-null copy
// equals the actual D-P9 fixture record.
// ---------------------------------------------------------------
block("identity ties", () => {
  for (const entry of stageDP11ObservationMatrix) {
    assert.equal(entry.observationRecord.observationSurface, "structural_fixture");
    assert.equal(
      entry.observationRecord.contractVersion,
      "pond-erc8004-identity-observation-d-p11",
    );
  }
  for (const entry of stageDP11VerificationMatrix) {
    assert.equal(entry.dp9MappingRecord.principalRef, stageDP0LocalPrincipalRef);
    assert.equal(entry.receiverHeldPrincipalRef, stageDP0LocalPrincipalRef);
    assert.equal(
      entry.dp9MappingRecord.erc8004IdentityRef,
      stageDP9MappingEstablished.mappingRecord.erc8004IdentityRef,
    );
    assert.equal(
      entry.dp9MappingRecord.agentRef,
      "agent:fixture:stage-d-p0:trading-desk-agent0",
    );
    assert.equal(entry.observationRecord.observedAgentId, "1");
    assert.equal(
      entry.observationRecord.contractVersion,
      "pond-erc8004-identity-observation-d-p11",
    );
    assert.equal(
      entry.assessment.contractVersion,
      "pond-erc8004-identity-verification-d-p11",
    );
  }
  // The frozen all-null arm's inlined mapping copy equals the actual frozen
  // D-P9 established record — the honest object of this cut's refusal.
  assert.deepEqual(
    deepClone(stageDP11VerificationFrozenAllNullRefused.dp9MappingRecord),
    deepClone(stageDP9MappingEstablished.mappingRecord),
    "frozen all-null mapping copy",
  );
  // One distinctness tuple across the mapping and its observation.
  assert.deepEqual(
    deepClone(stageDP11ObservationComplete.observationRecord.observationDistinctnessClaims),
    deepClone(stageDP11VerificationComplete.dp9MappingRecord.mappingDistinctnessClaims),
    "distinctness tuple tie",
  );
});

// ---------------------------------------------------------------
// Block 3: observation fail-closed — tampered records, refused bases,
// one-endpoint "agreement", digest mismatch, reverted ownerOf carried
// honestly, and D-P2-literal freshness diagnoses.
// ---------------------------------------------------------------
block("observation fail-closed", () => {
  const complete = stageDP11ObservationComplete;
  const tamper = (mutate) => {
    const record = deepClone(complete.observationRecord);
    mutate(record);
    return record;
  };
  const run = (record, recomputed) =>
    collectObservation(
      record,
      recomputed === undefined ? complete.receiverRecomputedDigestHex : recomputed,
      complete.receiverEvaluatedAtEpochMs,
      complete.receiverMaximumAgeMs,
    );

  // Structural tampering: kind, version, extra keys (including payload
  // smuggles), a deleted key, and a null chainId are all invalid, with
  // D-P8's fallback diagnosis pattern — an unknown diagnosis over the raw
  // pair.
  const structurallyTampered = [
    [(r) => { r.kind = "tampered-kind"; }, "kind"],
    [(r) => { r.contractVersion = "d-p9-version"; }, "contractVersion"],
    [(r) => { r.grantId = "smuggled"; }, "grantId"],
    [(r) => { r.payload = { content: "smuggled" }; }, "payload"],
    [(r) => { r.content = "smuggled"; }, "content"],
    [(r) => { delete r.retrievalProvenance; }, "missing provenance"],
    [(r) => { r.canonicalSource.chainId = null; }, "chainId"],
  ];
  for (const [mutate, label] of structurallyTampered) {
    const fresh = run(tamper(mutate));
    assert.equal(fresh.reason, "observation_record_invalid", `structural tamper: ${label}`);
    assert.equal(fresh.observationState, "not_observed", label);
    assert.equal(fresh.observationRecordVersion, "invalid", label);
    assert.equal(fresh.mappedEndpointAgreement, "invalid", label);
    assert.deepEqual(fresh.satisfiedChecks, [], label);
    assert.deepEqual(fresh.unsatisfiedChecks, allObservationChecks, label);
    assert.deepEqual(
      deepClone(fresh.observationFreshnessDiagnosis),
      { state: "unknown", reason: "observation_metadata_missing_or_invalid", observationAgeMs: null },
      label,
    );
  }

  // Every refused basis is record-valid and fails closed on the receiver-
  // performed check — the vocabulary is carried honestly, not malformed.
  const refusedBases = [
    "not_performed",
    "claimed_receiver_observation_not_performed",
    "reported_by_third_party",
    "inferred_from_cached_projection",
    "replayed_from_prior_observation",
  ];
  for (const basis of refusedBases) {
    const fresh = run(tamper((r) => { r.observationBasis = basis; }));
    assert.equal(
      fresh.reason,
      "observation_not_performed_by_receiver",
      `refused basis: ${basis}`,
    );
    assert.equal(
      fresh.observationRecordVersion,
      "pond-erc8004-identity-observation-d-p11",
      basis,
    );
    assert.equal(fresh.observationState, "not_observed", basis);
    assert.deepEqual(fresh.satisfiedChecks, [], basis);
    assert.deepEqual(fresh.unsatisfiedChecks, allObservationChecks, basis);
    assert.deepEqual(
      deepClone(fresh.observationFreshnessDiagnosis),
      deepClone(complete.assessment.observationFreshnessDiagnosis),
      basis,
    );
  }

  // The two-endpoint rule is record-level: a recorded "agreed" agreement
  // over one endpoint is a malformed record, not a satisfied check.
  const oneEndpoint = run(
    tamper((r) => {
      r.retrievalProvenance.queriedRpcEndpointHosts = ["only-one-endpoint"];
      r.retrievalProvenance.endpointsQueriedCount = 1;
    }),
  );
  assert.equal(oneEndpoint.reason, "observation_record_invalid", "one-endpoint agreed");
  assert.equal(oneEndpoint.observationRecordVersion, "invalid", "one-endpoint agreed");

  // A disagreed or not-established agreement, or a not-established trust
  // review, is a valid record that fails the two-endpoint check.
  for (const [agreement, detail] of [
    ["disagreed", "endpoints_mismatched"],
    ["not_established", null],
  ]) {
    const fresh = run(
      tamper((r) => {
        r.retrievalProvenance.endpointAgreement = agreement;
        r.retrievalProvenance.agreementDetail = detail;
      }),
    );
    assert.equal(
      fresh.reason,
      "two_endpoint_agreement_not_recorded",
      `agreement: ${agreement}`,
    );
    assert.equal(
      fresh.observationRecordVersion,
      "pond-erc8004-identity-observation-d-p11",
      agreement,
    );
    assert.equal(fresh.mappedEndpointAgreement, agreement, agreement);
  }
  const unreviewed = run(tamper((r) => { r.trustReviewState = "not_established"; }));
  assert.equal(unreviewed.reason, "two_endpoint_agreement_not_recorded", "trust review");

  // A reverted ownerOf is honestly carried — the record is valid — and
  // exactly the owner-read check stays unsatisfied.
  const revertedRecord = tamper((r) => {
    r.performedOwnerRead.observedOwner = null;
    r.performedOwnerRead.readOutcome = "owner_read_reverted_no_owner_observed";
  });
  const reverted = run(revertedRecord, sha256Hex(digestLines(revertedRecord)));
  assert.equal(reverted.reason, "owner_not_observed", "reverted ownerOf");
  assert.equal(
    reverted.observationRecordVersion,
    "pond-erc8004-identity-observation-d-p11",
    "reverted ownerOf record version",
  );
  assert.ok(
    reverted.unsatisfiedChecks.includes("owner_read_outcome_observed"),
    "reverted ownerOf unsatisfied check",
  );

  // The digest leg: a tampered claimed digest — or any single-field flip
  // over the canonical lines — is a mismatch, never silently accepted.
  const digestTampered = run(tamper((r) => {
    r.observedEvidenceDigest.claimedDigestHex = "0".repeat(64);
  }));
  assert.equal(digestTampered.reason, "digest_claim_mismatch", "digest tamper");
  // ...or any single-field flip over the canonical lines: the honest
  // receiver recomputes over the flipped record and the flip is caught.
  const agentIdFlippedRecord = tamper((r) => { r.observedAgentId = "2"; });
  const agentIdFlipped = run(
    agentIdFlippedRecord,
    sha256Hex(digestLines(agentIdFlippedRecord)),
  );
  assert.equal(agentIdFlipped.reason, "digest_claim_mismatch", "agentId flip");

  // Freshness: the stale fixture arm, a future observation time, and
  // invalid evaluation pairs — each carries its D-P2-literal diagnosis.
  const stale = collectObservation(
    stageDP11VerificationStaleRefused.observationRecord,
    stageDP11VerificationStaleRefused.receiverRecomputedDigestHex,
    complete.receiverEvaluatedAtEpochMs,
    complete.receiverMaximumAgeMs,
  );
  assert.equal(stale.reason, "observation_not_fresh", "stale");
  assert.deepEqual(
    deepClone(stale.observationFreshnessDiagnosis),
    { state: "stale", reason: "declared_maximum_age_expired", observationAgeMs: 60_001 },
    "stale diagnosis",
  );
  // The future arm and the invalid-pair arms below isolate the freshness
  // leg: the claimed digest is made consistent with the mutated content so
  // the earlier digest check passes and freshness alone refuses.
  const recomputeClaimed = (record) => {
    record.observedEvidenceDigest.claimedDigestHex =
      sha256Hex(digestLines(record));
    return record;
  };
  const futureRecord = recomputeClaimed(
    tamper((r) => {
      r.observationMetadata.observed_at_epoch_ms =
        complete.receiverEvaluatedAtEpochMs + 1;
    }),
  );
  const future = run(futureRecord, futureRecord.observedEvidenceDigest.claimedDigestHex);
  assert.equal(future.reason, "observation_not_fresh", "future");
  assert.deepEqual(
    deepClone(future.observationFreshnessDiagnosis),
    { state: "unknown", reason: "observation_time_in_future", observationAgeMs: null },
    "future diagnosis",
  );
  for (const [evaluated, maximum, pairReason] of [
    ["not-a-number", complete.receiverMaximumAgeMs, "evaluation_time_invalid"],
    [complete.receiverEvaluatedAtEpochMs, -1, "maximum_age_invalid"],
    [complete.receiverEvaluatedAtEpochMs, "not-a-number", "maximum_age_invalid"],
  ]) {
    const record = recomputeClaimed(
      tamper((r) => {
        r.observationMetadata.observed_at_epoch_ms = 1_800_000_010_000;
      }),
    );
    const fresh = collectObservation(
      record,
      record.observedEvidenceDigest.claimedDigestHex,
      evaluated,
      maximum,
    );
    // observed_at sits fresh-valid, so the refusal reason comes purely
    // from the invalid evaluation pair.
    assert.equal(fresh.reason, "observation_not_fresh", `invalid pair: ${pairReason}`);
    assert.deepEqual(
      deepClone(fresh.observationFreshnessDiagnosis),
      { state: "unknown", reason: pairReason, observationAgeMs: null },
      `invalid pair diagnosis: ${pairReason}`,
    );
  }

  // The record carries no principal ref — binding happens only through the
  // separately governed D-P9 mapping.
  assert.ok(
    !Object.prototype.hasOwnProperty.call(
      stageDP11ObservationComplete.observationRecord,
      "principalRef",
    ),
    "observation carries principalRef",
  );

  // The forbidden inventory never appears in a fixture record.
  assertNoForbiddenKeys(
    stageDP11ObservationComplete.observationRecord,
    POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS,
    "observation record",
  );
});

// ---------------------------------------------------------------
// Block 4: verification fail-closed — invalid mapping, unestablished
// mapping, refused observation, frozen all-null, every single-evidence-
// field mismatch, literal missing, and unbound held ref.
// ---------------------------------------------------------------
block("verification fail-closed", () => {
  const completeInput = {
    dp9MappingRecord: stageDP11VerificationComplete.dp9MappingRecord,
    receiverHeldPrincipalRef,
    observationRecord: stageDP11VerificationComplete.observationRecord,
    receiverVerification: receiverVerificationLiteral,
    receiverRecomputedDigestHex: stageDP11VerificationComplete.receiverRecomputedDigestHex,
    receiverEvaluatedAtEpochMs: stageDP11VerificationComplete.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: stageDP11VerificationComplete.receiverMaximumAgeMs,
  };

  // Invalid mapping record.
  const invalidMapping = collectVerification({
    ...completeInput,
    dp9MappingRecord: { kind: "tampered" },
  });
  assert.equal(invalidMapping.reason, "mapping_record_invalid_or_unestablished", "invalid mapping");
  assert.equal(invalidMapping.verificationState, "not_verified", "invalid mapping");
  assert.equal(invalidMapping.mappedMappingEstablishmentState, "invalid", "invalid mapping");
  assert.equal(invalidMapping.mappedMappingReason, "mapping_record_invalid", "invalid mapping");
  assert.deepEqual(invalidMapping.satisfiedChecks, [], "invalid mapping");

  // Unestablished mapping: the frozen equivalence-claim record is a valid
  // record whose unsatisfied frozen checks are not confined to the two
  // legs this cut re-performs — so the mapping leg honestly refuses here.
  const unestablished = collectVerification({
    ...completeInput,
    dp9MappingRecord: stageDP9MappingUnestablished.mappingRecord,
  });
  assert.equal(unestablished.reason, "mapping_record_invalid_or_unestablished", "unestablished mapping");
  assert.equal(unestablished.verificationState, "not_verified", "unestablished mapping");
  assert.equal(
    unestablished.mappedMappingEstablishmentState,
    "not_established",
    "unestablished mapping state",
  );

  // Refused observation (claimed basis flip): the observation leg refuses
  // independently and the verification refuses with it.
  const observationRefused = collectVerification({
    ...completeInput,
    observationRecord: stageDP11ObservationClaimedRefused.observationRecord,
  });
  assert.equal(
    observationRefused.reason,
    "observation_not_independently_verified",
    "claimed observation",
  );
  assert.equal(
    observationRefused.mappedObservationReason,
    "observation_not_performed_by_receiver",
    "claimed observation mapped reason",
  );
  assert.deepEqual(
    observationRefused.satisfiedChecks,
    [allVerificationChecks[0], allVerificationChecks[1]],
    "claimed observation satisfied",
  );
  assert.deepEqual(
    observationRefused.unsatisfiedChecks,
    [
      allVerificationChecks[2],
      allVerificationChecks[3],
      allVerificationChecks[4],
      allVerificationChecks[5],
    ],
    "claimed observation unsatisfied",
  );

  // The frozen all-null arm: record valid, reproduction fails — never
  // "mapping invalid".
  const frozenAllNull = collectVerification({
    ...completeInput,
    dp9MappingRecord: stageDP11VerificationFrozenAllNullRefused.dp9MappingRecord,
  });
  assert.equal(
    frozenAllNull.reason,
    "observed_evidence_does_not_reproduce_mapping_evidence",
    "frozen all-null",
  );
  assert.equal(frozenAllNull.verificationState, "not_verified", "frozen all-null");
  assert.equal(
    frozenAllNull.mappedMappingEstablishmentState,
    "fixture_structural_receiver_owned_mapping",
    "frozen all-null mapping state",
  );
  assert.deepEqual(
    frozenAllNull.unsatisfiedChecks,
    ["observed_evidence_reproduces_mapping_verification_evidence"],
    "frozen all-null unsatisfied",
  );

  // Each of the five evidence fields, individually mismatched, refuses the
  // reproduction check — never anything upstream of it.
  const evidenceFields = [
    ["chainIdObserved", "1"],
    ["registryAddress", "0x0000000000000000000000000000000000000001"],
    ["agentId", "999"],
    ["ownerObserved", "0x0000000000000000000000000000000000000001"],
    ["blockTag", "another-block-tag"],
  ];
  for (const [field, value] of evidenceFields) {
    const mappingRecord = deepClone(stageDP11VerificationComplete.dp9MappingRecord);
    mappingRecord.verificationEvidence = {
      ...deepClone(mappingRecord.verificationEvidence),
      [field]: value,
    };
    const fresh = collectVerification({ ...completeInput, dp9MappingRecord: mappingRecord });
    assert.equal(
      fresh.reason,
      "observed_evidence_does_not_reproduce_mapping_evidence",
      `evidence mismatch: ${field}`,
    );
    assert.equal(fresh.verificationState, "not_verified", field);
    assert.deepEqual(
      fresh.unsatisfiedChecks,
      ["observed_evidence_reproduces_mapping_verification_evidence"],
      `evidence mismatch unsatisfied: ${field}`,
    );
  }

  // The receiver-observed literal is one conjunct, never the proof.
  const literalMissing = collectVerification({
    ...completeInput,
    receiverVerification: "not_performed",
  });
  assert.equal(literalMissing.reason, "receiver_verification_literal_missing", "literal missing");
  assert.equal(literalMissing.verificationState, "not_verified", "literal missing");
  assert.deepEqual(
    literalMissing.satisfiedChecks,
    [
      allVerificationChecks[0],
      allVerificationChecks[1],
      allVerificationChecks[2],
      allVerificationChecks[3],
      allVerificationChecks[5],
    ],
    "literal missing satisfied",
  );

  // A foreign held ref unbinds the mapping.
  const foreignRef = collectVerification({
    ...completeInput,
    receiverHeldPrincipalRef: "principal:fixture:stage-d-p0:some-other-principal",
  });
  assert.equal(foreignRef.reason, "receiver_held_principal_ref_unbound", "foreign ref");
  assert.equal(foreignRef.verificationState, "not_verified", "foreign ref");
  assert.deepEqual(foreignRef.satisfiedChecks, [allVerificationChecks[0]], "foreign ref satisfied");
});

// ---------------------------------------------------------------
// Block 5: frozen widening proof — the D-P5/D-P6/D-P8/D-P9 frozen
// assessors still report their exact pinned tuples, the frozen mapping
// assessor still refuses onchain verification over the non-null claim, the
// readiness composition still hardcodes not_performed, and no D-P11
// assessment carries a frozen tuple name; runtime activation stays
// not_included everywhere.
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

  const dp8Fresh = assessPondLocalAuthenticationChallengeProof({
    proofRecord: stageDP8MechanicComplete.proofRecord,
    verifierRecord: stageDP8MechanicComplete.verifierRecord,
    receiverHeldPrincipalRef,
    evaluatedAtEpochMs: stageDP8MechanicComplete.evaluatedAtEpochMs,
    maximumAgeMs: stageDP8MechanicComplete.maximumAgeMs,
  });
  assert.deepEqual(
    deepClone(dp8Fresh),
    deepClone(stageDP8MechanicComplete.assessment),
  );
  assert.equal(dp8Fresh.authenticationMechanicState, "receiver_verified_knowledge_factor");

  // The frozen D-P9 mapping assessor over the D-P11 positive arm's non-null
  // claim: the seam did not move. The claim is valid, the mapping stays
  // established, and the frozen onchain-verification check stays false —
  // in the frozen vocabulary, forever.
  const mappingSeamRun = assessPondErc8004IdentityMapping({
    mappingRecord: stageDP11VerificationComplete.dp9MappingRecord,
    receiverHeldPrincipalRef,
    receiverVerification: receiverVerificationLiteral,
  });
  assert.equal(mappingSeamRun.reason, "onchain_verification_not_performed", "frozen seam");
  assert.equal(mappingSeamRun.onchainVerificationState, "not_verified", "frozen seam");
  assert.equal(
    mappingSeamRun.mappingEstablishmentState,
    "fixture_structural_receiver_owned_mapping",
    "frozen seam establishment",
  );
  assert.deepEqual(
    deepClone(mappingSeamRun.unsatisfiedChecks),
    ["onchain_verification_evidence_independently_observed"],
    "frozen seam unsatisfied",
  );

  // The D-P9 readiness composition still hardcodes receiverVerification
  // "not_performed" and private reads stay refused: verification widens
  // nothing.
  const compositionContractText = readFileSync(
    join(repoRoot, "src/contracts/pond-principal-identity-readiness-composition.ts"),
    "utf8",
  );
  assert.ok(
    compositionContractText.includes('receiverVerification: "not_performed"'),
    "readiness composition hardcode moved",
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
  assert.equal(dp9CompositionFresh.privateReadsActivated, false);
  assert.equal(
    dp9CompositionFresh.readinessState,
    "structurally_ready_private_reads_still_refused",
  );

  // No D-P11 assessment — observation, verification — carries a frozen
  // tuple name; the frozen D-P9/D-P10 names stay the frozen family's only
  // carriers.
  const frozenNames = [
    "onchainVerificationState",
    "mappingEstablishmentState",
    "mappingEstablishesGrant",
    "privateReadsActivated",
    "erc8004IdentityAcceptedAsPrincipalId",
    "onchainIdentityAcceptedAsAuthentication",
  ];
  for (const entry of stageDP11ObservationMatrix) {
    assertLacksKeys(entry.assessment, frozenNames, `observation:${entry.fixtureLabel}`);
  }
  for (const entry of stageDP11VerificationMatrix) {
    assertLacksKeys(entry.assessment, frozenNames, `verification:${entry.fixtureLabel}`);
  }
  for (const fresh of dp11Runners) {
    assertLacksKeys(fresh, frozenNames, "fresh D-P11 assessment");
    assert.equal(fresh.runtimeActivationPosture, "not_included", "activation posture");
    assert.equal(fresh.authority, "none", "authority ceiling");
  }
});

// ---------------------------------------------------------------
// Block 6: digest tie — the claimed digests equal a real node:crypto
// sha256 over the contract's own canonical lines; any single-field flip
// changes the digest; the helper is honest over non-records.
// ---------------------------------------------------------------
block("digest tie", () => {
  const complete = stageDP11ObservationComplete;
  assert.equal(
    sha256Hex(digestLines(complete.observationRecord)),
    complete.observationRecord.observedEvidenceDigest.claimedDigestHex,
    "complete digest tie",
  );
  const staleRecord = stageDP11VerificationStaleRefused.observationRecord;
  assert.equal(
    sha256Hex(digestLines(staleRecord)),
    staleRecord.observedEvidenceDigest.claimedDigestHex,
    "stale digest tie",
  );
  const flipped = deepClone(complete.observationRecord);
  flipped.observedAgentId = "2";
  assert.notEqual(
    sha256Hex(digestLines(flipped)),
    complete.observationRecord.observedEvidenceDigest.claimedDigestHex,
    "single-field flip changes the digest",
  );
  assert.equal(digestLines("not-a-record"), null, "helper refuses non-records");
});

// ---------------------------------------------------------------
// Block 7: structural gate + env-gated live block. CI and every offline
// run stay structural; the live block runs only when
// TOADAID_LIVE_ERC8004_VERIFY === "1" and exercises the same runner
// function the standalone script runs — the performed path is the
// exercised path.
// ---------------------------------------------------------------
block("structural gate and live observation", () => {
  for (const entry of stageDP11ObservationMatrix) {
    assert.equal(entry.observationRecord.observationSurface, "structural_fixture");
  }
  if (process.env.TOADAID_LIVE_ERC8004_VERIFY !== "1") {
    console.log("  live observation block skipped (TOADAID_LIVE_ERC8004_VERIFY not set)");
    return;
  }
  console.log("  live observation asserts follow the hygiene block (env set)");
});

const runLiveObservationAsserts = async () => {
  const { performErc8004IdentityObservation, liveObservationConfig } =
    await import("../scripts/pond-erc8004-identity-observation-live.mjs");
  const { record, assessment, recomputedDigestHex } =
    await performErc8004IdentityObservation(liveObservationConfig.defaultAgentId);
  dp11Runners.push(assessment);
  // The live read is a performed receiver observation the observation
  // classifier fully admits.
  assert.equal(assessment.reason, "all_observation_checks_satisfied", "live observation refused");
  assert.equal(record.observationSurface, "live_base_mainnet_read_only_rpc");
  assert.equal(record.canonicalSource.chainId, "8453");
  assert.equal(record.retrievalProvenance.endpointAgreement, "agreed");
  assert.equal(record.retrievalProvenance.endpointsQueriedCount, 2);
  assert.equal(record.authority, "none");
  assert.equal(
    sha256Hex(digestLines(record)),
    record.observedEvidenceDigest.claimedDigestHex,
    "live digest recompute",
  );
  assert.equal(sha256Hex(digestLines(record)), recomputedDigestHex, "runner recompute mismatch");

  // Verification against the receiver's own structural fixture mapping
  // honestly refuses: the live read observes the real registry; the
  // fixture mapping claims structural evidence that names no real NFT.
  // Evidence only — never verification by surface.
  const liveVerification = assessPondErc8004OnchainVerification({
    dp9MappingRecord: stageDP11VerificationComplete.dp9MappingRecord,
    receiverHeldPrincipalRef,
    observationRecord: record,
    receiverVerification: receiverVerificationLiteral,
    receiverRecomputedDigestHex: recomputedDigestHex,
    receiverEvaluatedAtEpochMs: Date.now(),
    receiverMaximumAgeMs: liveObservationConfig.maximumAgeMs,
  });
  dp11Runners.push(liveVerification);
  assert.equal(
    liveVerification.reason,
    "observed_evidence_does_not_reproduce_mapping_evidence",
    "live verification must honestly refuse the structural mapping",
  );
  assert.equal(liveVerification.verificationState, "not_verified", "live verification state");
  assert.equal(
    liveVerification.mappedMappingEstablishmentState,
    "fixture_structural_receiver_owned_mapping",
    "live verification mapping state",
  );
  assert.deepEqual(deepClone(liveVerification.mappedObservationUnsatisfiedChecks), [],
    "live observation independently verified");
};

// ---------------------------------------------------------------
// Block 8: hygiene — the fixture stays type-only, the real network
// constants live only under scripts/, the ui surface carries no D-P11
// vocabulary, and the rpc client self-audits its transport shape.
// ---------------------------------------------------------------
block("hygiene", () => {
  const fixtureText = readFileSync(
    join(repoRoot, "src/fixtures/stage-d-p11-erc8004-identity-verification.ts"),
    "utf8",
  );
  const importLines = fixtureText
    .split("\n")
    .filter((line) => line.startsWith("import "));
  assert.ok(importLines.length >= 4);
  for (const line of importLines) {
    assert.ok(line.startsWith("import type "), `value import: ${line}`);
  }
  for (const banned of [
    "fetch(",
    "localStorage",
    "sessionStorage",
    "XMLHttpRequest",
    "WebSocket",
  ]) {
    assert.ok(!fixtureText.includes(banned), `banned in fixture: ${banned}`);
  }

  // The real network constants — registry address, RPC hosts, ownerOf
  // selector — never appear anywhere under src/. They live only under
  // scripts/.
  for (const srcPath of walkFiles(join(repoRoot, "src"))) {
    const text = readFileSync(srcPath, "utf8");
    for (const banned of [
      "0x8004A169FB4a3325136EB29fA0ceB6D2e539a432",
      "mainnet.base.org",
      "base-rpc.publicnode.com",
      "6352211e",
    ]) {
      assert.ok(!text.includes(banned), `banned network constant in ${srcPath}: ${banned}`);
    }
  }

  // The two D-P11 contracts carry no network vocabulary at all.
  for (const contractName of [
    "src/contracts/pond-erc8004-identity-observation.ts",
    "src/contracts/pond-erc8004-identity-verification.ts",
  ]) {
    const text = readFileSync(join(repoRoot, contractName), "utf8");
    for (const banned of ["fetch(", "http://", "https://", "0x8004A169"]) {
      assert.ok(!text.includes(banned), `banned in ${contractName}: ${banned}`);
    }
  }

  // The ui surface carries no D-P11 vocabulary.
  for (const uiPath of walkFiles(join(repoRoot, "ui"))) {
    const text = readFileSync(uiPath, "utf8");
    assert.ok(
      !text.includes("pond-erc8004-identity-observation") &&
        !text.includes("pond-erc8004-identity-verification") &&
        !text.includes("d-p11"),
      `ui carries D-P11 vocabulary: ${uiPath}`,
    );
  }

  // The rpc client's own transport self-audit: no signing, no keys, no
  // transaction-shaped method anywhere in its module text.
  assert.equal(assertClientShape(), true, "rpc client self-audit");
});

if (process.env.TOADAID_LIVE_ERC8004_VERIFY === "1") {
  await runLiveObservationAsserts();
} else {
  console.log("live observation block: skipped (offline structural mode, CI-safe)");
}

console.log("POND_STAGE_DP11_ERC8004_IDENTITY_ONCHAIN_VERIFICATION_SELFTEST_PASS");