// Stage D-P5 selftest: the local principal binding establishment ceremony.
// Recomputes every fixture arm over its pinned inputs plus the
// directly-imported D-P0 local principal ref, table-drives the invalid and
// fail-closed records, pins the D-P0 tie (the ceremony's proof maps to
// exactly the two principal checks of the eight D-P0 receiver checks),
// and round-trips JSON. All inputs are imported directly under node
// type-stripping: the D-P5 contract, the D-P5 fixture (zero value
// imports), and the D-P0 contract and fixture for the tie.

import assert from "node:assert/strict";
import { assessPondLocalPrincipalBindingEstablishment } from "../src/contracts/pond-local-principal-binding-establishment.ts";
import {
  stageDP5LocalPrincipalBindingComplete,
  stageDP5LocalPrincipalBindingIncomplete,
  stageDP5LocalPrincipalBindingMatrix,
} from "../src/fixtures/stage-d-p5-local-principal-binding.ts";
import {
  assessPondAgentPresenceAdmission,
} from "../src/contracts/pond-agent-presence-projection.ts";
import {
  stageDP0AgentPresenceProjection,
  stageDP0LocalPrincipalRef,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";

// ------------------------------------------------------------
// Block 1 — fixture matrix: every arm's pinned assessment is exactly what
// the classifier produces over its pinned record plus the receiver-held
// D-P0 principal ref. One binding, one ref: the fixture's principal ref
// must be the D-P0 fixture's own local principal.
// ------------------------------------------------------------

for (const entry of stageDP5LocalPrincipalBindingMatrix) {
  assert.equal(
    entry.ceremonyRecord.principalRef,
    stageDP0LocalPrincipalRef,
    `fixture arm ${entry.fixtureLabel} must bind the D-P0 local principal`,
  );
  const recomputed = assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: entry.ceremonyRecord,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
  });
  assert.deepStrictEqual(
    recomputed,
    entry.assessment,
    `fixture arm ${entry.fixtureLabel} must match a fresh classification`,
  );
  assert.equal(Object.isFrozen(recomputed), true);
}

// The complete arm: structurally established — and still no real
// authentication, no PrincipalId, no authority.
const complete = stageDP5LocalPrincipalBindingComplete.assessment;
assert.equal(complete.bindingEstablishmentState, "fixture_established_local_principal_binding");
assert.equal(complete.reason, "all_ceremony_checks_satisfied");
assert.equal(complete.authenticationPosture, "fixture_structural_only_no_real_authentication");
assert.deepEqual(complete.satisfiedChecks, [
  "principal_ref_well_formed",
  "binding_bound_to_receiver_held_principal",
  "binding_explicitly_receiver_owned",
  "local_authentication_observed_by_receiver",
  "identity_separation_from_observed_agent_verified",
  "binding_excludes_memory_and_lane_content",
  "binding_grants_no_authority_and_stays_revocable",
]);
assert.deepEqual(complete.unsatisfiedChecks, []);
assert.equal(complete.authenticationPerformed, false);
assert.equal(complete.principalIdIssued, false);
assert.equal(complete.authority, "none");

const incomplete = stageDP5LocalPrincipalBindingIncomplete.assessment;
assert.equal(incomplete.bindingEstablishmentState, "not_established");
assert.equal(incomplete.reason, "receiver_binding_proof_incomplete");
assert.deepEqual(incomplete.unsatisfiedChecks, [
  "binding_explicitly_receiver_owned",
  "local_authentication_observed_by_receiver",
  "identity_separation_from_observed_agent_verified",
]);
assert.equal(incomplete.authenticationPerformed, false);

// ------------------------------------------------------------
// Block 2 — invalid records: typed refusal on every broken input.
// ------------------------------------------------------------

const completeEntry = stageDP5LocalPrincipalBindingComplete;

const invalidRecords = [
  ["tampered contractVersion", { contractVersion: "pond-local-principal-binding-establishment-d-p0" }],
  ["tampered kind", { kind: "pond-agent-presence-channel-establishment" }],
  ["non-principal ref", { principalRef: "wallet:0xdeadbeef" }],
  ["empty ref body", { principalRef: "principal:" }],
  ["mismatched receiver-held ref", { receiverHeldRef: "principal:fixture:operator-a" }],
  ["principalId key smuggle", { principalId: "principal:fixture:stage-d-p0:local-principal" }],
  ["memory lane key smuggle", { memoryTranscript: "desk journal prose" }],
  ["credential key smuggle", { credential: "v1" }],
  ["live-connection key smuggle", { connect: "stdio" }],
  ["authority widened", { authority: "binding" }],
  ["unknown binding basis", { bindingBasis: "self_asserted_by_producer" }],
  ["unknown authentication posture", { authenticationPosture: "real_authentication_performed" }],
];
for (const [label, overrides] of invalidRecords) {
  const ceremonyRecord = { ...completeEntry.ceremonyRecord };
  const receiverHeld = stageDP0LocalPrincipalRef;
  for (const [key, value] of Object.entries(overrides)) {
    if (key === "receiverHeldRef") continue;
    ceremonyRecord[key] = value;
  }
  const result = assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord,
    receiverHeldPrincipalRef: overrides.receiverHeldRef ?? receiverHeld,
  });
  if (label === "mismatched receiver-held ref") {
    // A valid record bound to a different principal: the identity check
    // fails closed — the binding is not the receiver's own.
    assert.equal(result.reason, "receiver_binding_proof_incomplete", label);
    assert.ok(
      result.unsatisfiedChecks.includes("binding_bound_to_receiver_held_principal"),
      label,
    );
  } else {
    assert.equal(result.reason, "ceremony_record_invalid", label);
    assert.equal(result.bindingEstablishmentState, "not_established", label);
    assert.deepEqual(result.satisfiedChecks, [], label);
  }
  assert.equal(result.authenticationPerformed, false, label);
  assert.equal(result.principalIdIssued, false, label);
  assert.equal(result.authority, "none", label);
}

// Missing-key and extra-key cases mutate the key set structurally.
const missingKey = { ...completeEntry.ceremonyRecord };
delete missingKey.revocabilityPosture;
assert.equal(
  assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: missingKey,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
  }).reason,
  "ceremony_record_invalid",
);
const extraKey = { ...completeEntry.ceremonyRecord, operatorNote: "ok" };
assert.equal(
  assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: extraKey,
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
  }).reason,
  "ceremony_record_invalid",
);
// A non-string receiver-held ref cannot bind, even to a well-formed record.
assert.equal(
  assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: completeEntry.ceremonyRecord,
    receiverHeldPrincipalRef: 42,
  }).reason,
  "receiver_binding_proof_incomplete",
);

// ------------------------------------------------------------
// Block 3 — valid-but-unsatisfied fail-closed records: an inferred basis
// claims exactly what the ceremony refuses; the record stays valid and the
// binding checks stay unsatisfied, mirroring D-P3's unknown precedence.
// ------------------------------------------------------------

const forbiddenBases = [
  "inferred_from_presence",
  "inferred_from_provider_session",
  "inferred_from_wallet",
  "inferred_from_memory",
  "inferred_from_conversation",
];
for (const basis of forbiddenBases) {
  const result = assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: { ...completeEntry.ceremonyRecord, bindingBasis: basis },
    receiverHeldPrincipalRef: stageDP0LocalPrincipalRef,
  });
  assert.equal(result.reason, "receiver_binding_proof_incomplete", basis);
  assert.equal(result.ceremonyRecordVersion, "pond-local-principal-binding-establishment-d-p5", basis);
  assert.ok(
    result.unsatisfiedChecks.includes("binding_explicitly_receiver_owned"),
    `${basis} must leave the receiver-owned binding check unsatisfied`,
  );
  assert.equal(result.bindingEstablishmentState, "not_established", basis);
  assert.equal(result.authenticationPerformed, false, basis);
}

// ------------------------------------------------------------
// Block 4 — D-P0 tie: the ceremony-complete record's proof maps to
// exactly the two principal checks of the eight D-P0 receiver checks —
// the first two of the six D-P4 left owed.
// ------------------------------------------------------------

const bindingProvenObservation = {
  sourceContractIdentityMatch: "not_observed",
  runtimeFactInventoryMatch: "not_observed",
  presenceObservationChannel: "not_observed",
  runtimeFactChannelSeparation: "not_observed",
  identityClaimReproduction: "not_observed",
  principalBindingEstablished: "receiver_authenticated_local_binding",
  identitySeparationFromPrincipal: "receiver_verified_identity_separation",
  liveObservation: "not_performed",
};
const bindingSatisfied = assessPondAgentPresenceAdmission({
  projection: stageDP0AgentPresenceProjection,
  receiverObservation: bindingProvenObservation,
});
assert.equal(bindingSatisfied.projectionContractVersion, "pond-agent-presence-projection-d-p0");
assert.equal(bindingSatisfied.reason, "receiver_proof_incomplete");
assert.deepEqual(bindingSatisfied.satisfiedChecks, [
  "local_principal_binding_established_before_private_reads",
  "observed_identity_kept_separate_from_principal_id",
]);
assert.deepEqual(bindingSatisfied.unsatisfiedChecks, [
  "exact_source_contract_identity",
  "exact_secret_free_runtime_fact_inventory",
  "receiver_owned_presence_observation_channel",
  "runtime_facts_separated_from_personal_memory_channels",
  "identity_claim_evidence_independently_reproduced",
  "live_presence_observation_observed",
]);
assert.equal(bindingSatisfied.observedPresenceAcceptedAsAuthentication, false);
assert.equal(bindingSatisfied.observedIdentityAcceptedAsPrincipalId, false);
assert.equal(bindingSatisfied.personalMemoryContentAdmitted, false);
assert.equal(bindingSatisfied.localPrincipalBindingEstablished, false);
assert.equal(bindingSatisfied.currentTruthAdmitted, false);
assert.equal(bindingSatisfied.runtimeActivationPosture, "not_included");
assert.equal(bindingSatisfied.authority, "none");

// Control: with nothing observed, zero checks are satisfied.
const control = assessPondAgentPresenceAdmission({
  projection: stageDP0AgentPresenceProjection,
  receiverObservation: {
    sourceContractIdentityMatch: "not_observed",
    runtimeFactInventoryMatch: "not_observed",
    presenceObservationChannel: "not_observed",
    runtimeFactChannelSeparation: "not_observed",
    identityClaimReproduction: "not_observed",
    principalBindingEstablished: "not_established",
    identitySeparationFromPrincipal: "not_observed",
    liveObservation: "not_performed",
  },
});
assert.deepEqual(control.satisfiedChecks, []);

// ------------------------------------------------------------
// Block 5 — shared posture loop over every assessment and JSON
// round-trip: assessments are plain frozen data.
// ------------------------------------------------------------

const allAssessments = [
  ...stageDP5LocalPrincipalBindingMatrix.map((entry) => entry.assessment),
];
for (const result of allAssessments) {
  assert.equal(result.assessmentKind, "deterministic_supplied_local_principal_binding");
  assert.equal(result.authenticationPerformed, false);
  assert.equal(result.principalIdIssued, false);
  assert.equal(result.observedPresenceAcceptedAsAuthentication, false);
  assert.equal(result.observedIdentityAcceptedAsPrincipalId, false);
  assert.equal(result.personalMemoryContentAdmitted, false);
  assert.equal(result.currentTruthAdmitted, false);
  assert.equal(result.runtimeActivationPosture, "not_included");
  assert.equal(result.authority, "none");
  assert.equal(Object.isFrozen(result), true);
  assert.equal(Object.isFrozen(result.satisfiedChecks), true);
  assert.equal(Object.isFrozen(result.unsatisfiedChecks), true);
}
for (const entry of stageDP5LocalPrincipalBindingMatrix) {
  assert.equal(Object.isFrozen(entry), true);
  assert.equal(Object.isFrozen(entry.ceremonyRecord), true);
}
for (const result of allAssessments) {
  const roundTripped = JSON.parse(JSON.stringify(result));
  assert.deepStrictEqual(roundTripped, result);
}

console.log("POND_STAGE_DP5_LOCAL_PRINCIPAL_BINDING_SELFTEST_PASS");