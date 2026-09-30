var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/contracts/pond-local-principal-authentication-observation.ts
var observationChecks = Object.freeze([
  "authentication_event_receiver_observed",
  "authentication_event_bound_to_receiver_held_principal",
  "authentication_observation_channel_receiver_owned",
  "authentication_observation_secret_free",
  "authentication_observation_fresh",
  "authentication_observation_excludes_memory_and_lane_content",
  "authentication_observation_grants_no_authority"
]);
var POND_STAGE_DP6_FORBIDDEN_OBSERVATION_KEYS = Object.freeze([
  "PrincipalId",
  "principalId",
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "endpoint",
  "transport",
  "connect",
  "fetch",
  "poll",
  "subscribe",
  "secret",
  "token",
  "apiKey",
  "password",
  "passphrase",
  "session",
  "wallet",
  "address",
  "credential"
]);
var record = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var exactArray = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys = /* @__PURE__ */ __name((value, expected) => exactArray(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var hasForbiddenKey = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var wellFormedPrincipalRef = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "wellFormedPrincipalRef");
var safeNonNegativeInteger = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var validObservationMetadata = /* @__PURE__ */ __name((value) => {
  const metadata = record(value);
  return metadata !== null && exactKeys(metadata, [
    "observed_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger(metadata.observed_at_epoch_ms) && metadata.freshness_basis === "source_observation_time_only" && metadata.currentness_posture === "not_established_consumer_must_evaluate";
}, "validObservationMetadata");
var diagnoseFreshness = /* @__PURE__ */ __name((metadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const checked = record(metadata);
  if (checked === null || !safeNonNegativeInteger(checked.observed_at_epoch_ms) || checked.freshness_basis !== "source_observation_time_only" || checked.currentness_posture !== "not_established_consumer_must_evaluate")
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null
    });
  const observedAt = checked.observed_at_epoch_ms;
  if (observedAt > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null
    });
  const age = evaluatedAtEpochMs - observedAt;
  return Object.freeze(
    age <= maximumAgeMs ? {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: age
    } : {
      state: "stale",
      reason: "declared_maximum_age_expired",
      observationAgeMs: age
    }
  );
}, "diagnoseFreshness");
var validObservationRecord = /* @__PURE__ */ __name((value) => {
  const observation = record(value);
  if (observation === null || !exactKeys(observation, [
    "contractVersion",
    "kind",
    "principalRef",
    "eventState",
    "observationChannel",
    "secretFreeFieldInventoryPosture",
    "observationMetadata",
    "memoryLaneExclusionPosture",
    "authorityPosture",
    "authenticationPosture",
    "authority"
  ]) || observation.contractVersion !== "pond-local-principal-authentication-observation-d-p6" || observation.kind !== "pond-local-principal-authentication-observation" || !wellFormedPrincipalRef(observation.principalRef) || ![
    "not_observed",
    "receiver_observed_local_authentication_event",
    "asserted_by_producer",
    "inferred_from_session_presence",
    "inferred_from_wallet_connection"
  ].includes(String(observation.eventState)) || !["not_established", "receiver_owned_local_shell_channel"].includes(
    String(observation.observationChannel)
  ) || ![
    "not_observed",
    "inventory_secret_free_no_credential_field_observed"
  ].includes(String(observation.secretFreeFieldInventoryPosture)) || !validObservationMetadata(observation.observationMetadata) || ![
    "not_established",
    "observation_excludes_memory_narrative_transcript_lanes"
  ].includes(String(observation.memoryLaneExclusionPosture)) || observation.authorityPosture !== "observation_grants_no_authority_membership_or_capability" || ![
    "not_established",
    "fixture_structural_only_no_live_authentication"
  ].includes(String(observation.authenticationPosture)) || observation.authority !== "none" || hasForbiddenKey(observation, POND_STAGE_DP6_FORBIDDEN_OBSERVATION_KEYS))
    return false;
  return true;
}, "validObservationRecord");
var assessment = /* @__PURE__ */ __name((reason, observationRecordVersion, freshnessDiagnosis, satisfiedChecks, unsatisfiedChecks) => Object.freeze({
  contractVersion: "pond-local-principal-authentication-observation-d-p6",
  observationRecordVersion,
  assessmentKind: "deterministic_supplied_authentication_observation",
  authenticationObservationState: reason === "all_observation_checks_satisfied" ? "fixture_observed_local_authentication" : "not_observed",
  reason,
  freshnessDiagnosis,
  authenticationPosture: reason === "all_observation_checks_satisfied" ? "fixture_structural_only_no_live_authentication" : "not_established",
  satisfiedChecks: Object.freeze([...satisfiedChecks]),
  unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
  // The performer seam accepts the fact of an observed event: it never
  // performs one, never admits a credential, never issues a PrincipalId,
  // never admits memory, and never grants authority. The actual shell
  // event emission is a later, separately planned activation.
  liveAuthenticationPerformed: false,
  observedPresenceAcceptedAsAuthentication: false,
  observedIdentityAcceptedAsPrincipalId: false,
  principalIdIssued: false,
  personalMemoryContentAdmitted: false,
  currentTruthAdmitted: false,
  runtimeActivationPosture: "not_included",
  authority: "none"
}), "assessment");
function assessPondLocalPrincipalAuthenticationObservation(input) {
  if (!validObservationRecord(input.observationRecord)) {
    const invalidDiagnosis = diagnoseFreshness(
      record(input.observationRecord)?.observationMetadata,
      input.evaluatedAtEpochMs,
      input.maximumAgeMs
    );
    return assessment(
      "observation_record_invalid",
      "invalid",
      invalidDiagnosis,
      [],
      observationChecks
    );
  }
  const observation = input.observationRecord;
  const freshnessDiagnosis = diagnoseFreshness(
    observation.observationMetadata,
    input.evaluatedAtEpochMs,
    input.maximumAgeMs
  );
  const values = [
    observation.eventState === "receiver_observed_local_authentication_event",
    // The event must land on the receiver's own held principal — the same
    // ref the receiver's D-P0 projection binds — never an invented or
    // externally observed one.
    wellFormedPrincipalRef(input.receiverHeldPrincipalRef) && observation.principalRef === input.receiverHeldPrincipalRef,
    observation.observationChannel === "receiver_owned_local_shell_channel",
    observation.secretFreeFieldInventoryPosture === "inventory_secret_free_no_credential_field_observed",
    freshnessDiagnosis.state === "fresh",
    observation.memoryLaneExclusionPosture === "observation_excludes_memory_narrative_transcript_lanes",
    // The no-authority posture is the structural fact itself (already
    // validated); this check restates it as the receiver's own satisfied
    // proof.
    observation.authorityPosture === "observation_grants_no_authority_membership_or_capability"
  ];
  const satisfied = observationChecks.filter((_, index) => values[index]);
  const unsatisfied = observationChecks.filter((_, index) => !values[index]);
  return assessment(
    unsatisfied.length === 0 ? "all_observation_checks_satisfied" : "receiver_authentication_proof_incomplete",
    "pond-local-principal-authentication-observation-d-p6",
    freshnessDiagnosis,
    satisfied,
    unsatisfied
  );
}
__name(assessPondLocalPrincipalAuthenticationObservation, "assessPondLocalPrincipalAuthenticationObservation");

// src/contracts/pond-local-authentication-mechanic.ts
var POND_STAGE_DP8_FORBIDDEN_MECHANIC_KEYS = Object.freeze([
  "PrincipalId",
  "principalId",
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "endpoint",
  "transport",
  "connect",
  "fetch",
  "poll",
  "subscribe",
  "secret",
  "token",
  "apiKey",
  "password",
  "passphrase",
  "session",
  "wallet",
  "address",
  "credential",
  "plaintext",
  "answer"
]);
var verifierChecks = Object.freeze([
  "verifier_well_formed",
  "verifier_bound_to_receiver_held_principal",
  "verifier_secret_free",
  "verifier_excludes_memory_and_lane_content",
  "verifier_grants_no_authority"
]);
var challengeChecks = Object.freeze([
  "mechanic_class_receiver_owned",
  "challenge_bound_to_receiver_held_principal",
  "verifier_binding_exact_match",
  "comparison_recomputed",
  "comparison_fresh",
  "proof_excludes_memory_and_lane_content",
  "challenge_grants_no_authority"
]);
var isSha256DigestHex = /* @__PURE__ */ __name((value) => typeof value === "string" && /^[0-9a-f]{64}$/.test(value), "isSha256DigestHex");
var isSaltHex = /* @__PURE__ */ __name((value) => typeof value === "string" && value.length >= 32 && value.length % 2 === 0 && /^[0-9a-f]+$/.test(value), "isSaltHex");
var isWellFormedPrincipalRef = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "isWellFormedPrincipalRef");
var record2 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var exactArray2 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys2 = /* @__PURE__ */ __name((value, expected) => exactArray2(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var hasForbiddenKey2 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record2(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var safeNonNegativeInteger2 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var diagnoseFreshness2 = /* @__PURE__ */ __name((metadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const checked = record2(metadata);
  if (checked === null || !safeNonNegativeInteger2(checked.observed_at_epoch_ms) || checked.freshness_basis !== "source_observation_time_only" || checked.currentness_posture !== "not_established_consumer_must_evaluate")
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger2(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger2(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null
    });
  const comparisonAt = checked.observed_at_epoch_ms;
  if (comparisonAt > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null
    });
  const age = evaluatedAtEpochMs - comparisonAt;
  return Object.freeze(
    age <= maximumAgeMs ? {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: age
    } : {
      state: "stale",
      reason: "declared_maximum_age_expired",
      observationAgeMs: age
    }
  );
}, "diagnoseFreshness");
var validVerifierBinding = /* @__PURE__ */ __name((value) => {
  const binding = record2(value);
  return binding !== null && exactKeys2(binding, ["algorithm", "saltHex", "verifierDigestHex"]) && binding.algorithm === "sha256" && isSaltHex(binding.saltHex) && isSha256DigestHex(binding.verifierDigestHex);
}, "validVerifierBinding");
var validChallengeDigestBinding = /* @__PURE__ */ __name((value) => {
  const binding = record2(value);
  return binding !== null && exactKeys2(binding, [
    "algorithm",
    "saltHex",
    "verifierDigestHex",
    "responseDigestHex"
  ]) && binding.algorithm === "sha256" && isSaltHex(binding.saltHex) && isSha256DigestHex(binding.verifierDigestHex) && isSha256DigestHex(binding.responseDigestHex);
}, "validChallengeDigestBinding");
var validVerifierRecord = /* @__PURE__ */ __name((value) => {
  const verifier = record2(value);
  if (verifier === null || !exactKeys2(verifier, [
    "contractVersion",
    "kind",
    "principalRef",
    "mechanicClass",
    "verifierBinding",
    "secretFreeInventoryPosture",
    "memoryLaneExclusionPosture",
    "authorityPosture",
    "revocabilityPosture",
    "authority"
  ]) || verifier.contractVersion !== "pond-local-authentication-mechanic-d-p8" || verifier.kind !== "pond-local-authentication-verifier" || !isWellFormedPrincipalRef(verifier.principalRef) || verifier.mechanicClass !== "local_knowledge_factor_challenge_response" || !validVerifierBinding(verifier.verifierBinding) || verifier.secretFreeInventoryPosture !== "verifier_digest_only_no_secret_material" || verifier.memoryLaneExclusionPosture !== "binding_excludes_memory_narrative_transcript_lanes" || verifier.authorityPosture !== "verifier_grants_no_authority_membership_or_capability" || verifier.revocabilityPosture !== "verifier_revocable_by_re_enrollment" || verifier.authority !== "none" || hasForbiddenKey2(verifier, POND_STAGE_DP8_FORBIDDEN_MECHANIC_KEYS))
    return false;
  return true;
}, "validVerifierRecord");
var validComparisonMetadata = /* @__PURE__ */ __name((value) => {
  const metadata = record2(value);
  return metadata !== null && exactKeys2(metadata, [
    "observed_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger2(metadata.observed_at_epoch_ms) && metadata.freshness_basis === "source_observation_time_only" && metadata.currentness_posture === "not_established_consumer_must_evaluate";
}, "validComparisonMetadata");
var validProofRecord = /* @__PURE__ */ __name((value) => {
  const proof = record2(value);
  if (proof === null || !exactKeys2(proof, [
    "contractVersion",
    "kind",
    "principalRef",
    "mechanicClass",
    "challengeDigestBinding",
    "comparison",
    "comparisonMetadata",
    "secretFreeInventoryPosture",
    "memoryLaneExclusionPosture",
    "authorityPosture",
    "authority"
  ]) || proof.contractVersion !== "pond-local-authentication-mechanic-d-p8" || proof.kind !== "pond-local-authentication-challenge-proof" || !isWellFormedPrincipalRef(proof.principalRef) || proof.mechanicClass !== "local_knowledge_factor_challenge_response" || !validChallengeDigestBinding(proof.challengeDigestBinding) || ![
    "not_compared",
    "exact_digest_match",
    "digest_mismatch"
  ].includes(String(proof.comparison)) || !validComparisonMetadata(proof.comparisonMetadata) || proof.secretFreeInventoryPosture !== "response_digest_only_no_secret_material" || proof.memoryLaneExclusionPosture !== "proof_excludes_memory_narrative_transcript_lanes" || proof.authorityPosture !== "challenge_grants_no_authority_membership_or_capability" || proof.authority !== "none" || hasForbiddenKey2(proof, POND_STAGE_DP8_FORBIDDEN_MECHANIC_KEYS))
    return false;
  return true;
}, "validProofRecord");
var recognizedComparison = /* @__PURE__ */ __name((value) => [
  "not_compared",
  "exact_digest_match",
  "digest_mismatch"
].includes(String(value)) ? value : "not_compared", "recognizedComparison");
var verifierAssessment = /* @__PURE__ */ __name((reason, verifierRecordVersion, secretFreeInventoryPosture, revocabilityPosture, satisfiedChecks, unsatisfiedChecks) => Object.freeze({
  contractVersion: "pond-local-authentication-mechanic-d-p8",
  verifierRecordVersion,
  assessmentKind: "deterministic_supplier_verifier_record",
  verifierState: reason === "verifier_enrolled" ? "receiver_enrolled_knowledge_verifier" : "not_established",
  reason,
  secretFreeInventoryPosture,
  revocabilityPosture,
  satisfiedChecks: Object.freeze([...satisfiedChecks]),
  unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
  credentialAdmitted: false,
  observedPresenceAcceptedAsAuthentication: false,
  observedIdentityAcceptedAsPrincipalId: false,
  principalIdIssued: false,
  personalMemoryContentAdmitted: false,
  currentTruthAdmitted: false,
  runtimeActivationPosture: "not_included",
  authority: "none"
}), "verifierAssessment");
function assessPondLocalAuthenticationVerifierRecord(input) {
  if (!validVerifierRecord(input.verifierRecord)) {
    return verifierAssessment(
      "verifier_record_invalid",
      "invalid",
      "not_established",
      "not_established",
      [],
      verifierChecks
    );
  }
  const verifier = input.verifierRecord;
  const bound = isWellFormedPrincipalRef(input.receiverHeldPrincipalRef) && verifier.principalRef === input.receiverHeldPrincipalRef;
  const values = [
    verifier.mechanicClass === "local_knowledge_factor_challenge_response",
    bound,
    verifier.secretFreeInventoryPosture === "verifier_digest_only_no_secret_material",
    verifier.memoryLaneExclusionPosture === "binding_excludes_memory_narrative_transcript_lanes",
    verifier.authorityPosture === "verifier_grants_no_authority_membership_or_capability"
  ];
  const satisfied = verifierChecks.filter((_, index) => values[index]);
  const unsatisfied = verifierChecks.filter((_, index) => !values[index]);
  return verifierAssessment(
    bound ? "verifier_enrolled" : "receiver_held_principal_not_bound",
    "pond-local-authentication-mechanic-d-p8",
    bound ? "verifier_digest_only_no_secret_material" : "not_established",
    bound ? "verifier_revocable_by_re_enrollment" : "not_established",
    satisfied,
    unsatisfied
  );
}
__name(assessPondLocalAuthenticationVerifierRecord, "assessPondLocalAuthenticationVerifierRecord");
var challengeAssessment = /* @__PURE__ */ __name((reason, proofRecordVersion, verifierRecordVersion, comparison, recomputedComparison, freshnessDiagnosis, satisfiedChecks, unsatisfiedChecks) => {
  const allSatisfied = unsatisfiedChecks.length === 0;
  return Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    proofRecordVersion,
    verifierRecordVersion,
    assessmentKind: "deterministic_supplied_challenge_round",
    authenticationMechanicState: allSatisfied ? "receiver_verified_knowledge_factor" : "not_verified",
    reason,
    comparison,
    recomputedComparison,
    freshnessDiagnosis,
    authenticationPosture: allSatisfied ? "receiver_verified_local_knowledge_factor" : "not_established",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    credentialAdmitted: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    principalIdIssued: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "challengeAssessment");
function assessPondLocalAuthenticationChallengeProof(input) {
  const verifierIsValid = validVerifierRecord(input.verifierRecord);
  const proofIsValid = validProofRecord(input.proofRecord);
  const proofRecordVersion = proofIsValid ? "pond-local-authentication-mechanic-d-p8" : "invalid";
  const verifierRecordVersion = verifierIsValid ? "pond-local-authentication-mechanic-d-p8" : "invalid";
  const fallbackDiagnosis = diagnoseFreshness2(
    record2(input.proofRecord)?.comparisonMetadata,
    input.evaluatedAtEpochMs,
    input.maximumAgeMs
  );
  if (!verifierIsValid || !proofIsValid) {
    return challengeAssessment(
      !verifierIsValid ? "verifier_record_invalid" : "proof_record_invalid",
      proofRecordVersion,
      verifierRecordVersion,
      proofIsValid ? recognizedComparison(record2(input.proofRecord)?.comparison) : "not_compared",
      "not_compared",
      fallbackDiagnosis,
      [],
      challengeChecks
    );
  }
  const proof = input.proofRecord;
  const proofBinding = proof.challengeDigestBinding;
  const verifier = input.verifierRecord;
  const verifierBinding = verifier.verifierBinding;
  const comparison = proof.comparison;
  const freshnessDiagnosis = diagnoseFreshness2(
    proof.comparisonMetadata,
    input.evaluatedAtEpochMs,
    input.maximumAgeMs
  );
  const digestMatch = proofBinding.responseDigestHex === verifierBinding.verifierDigestHex;
  const recomputedComparison = digestMatch ? "exact_digest_match" : "digest_mismatch";
  const claimedComparisonAgrees = comparison === recomputedComparison && digestMatch;
  const values = [
    proof.mechanicClass === "local_knowledge_factor_challenge_response",
    isWellFormedPrincipalRef(input.receiverHeldPrincipalRef) && proof.principalRef === input.receiverHeldPrincipalRef,
    proofBinding.saltHex === verifierBinding.saltHex && proofBinding.verifierDigestHex === verifierBinding.verifierDigestHex && verifier.principalRef === proof.principalRef,
    claimedComparisonAgrees,
    freshnessDiagnosis.state === "fresh",
    proof.memoryLaneExclusionPosture === "proof_excludes_memory_narrative_transcript_lanes",
    proof.authorityPosture === "challenge_grants_no_authority_membership_or_capability"
  ];
  const satisfied = challengeChecks.filter((_, index) => values[index]);
  const unsatisfied = challengeChecks.filter((_, index) => !values[index]);
  return challengeAssessment(
    unsatisfied.length === 0 ? "all_challenge_checks_satisfied" : "receiver_challenge_proof_incomplete",
    proofRecordVersion,
    verifierRecordVersion,
    comparison,
    recomputedComparison,
    freshnessDiagnosis,
    satisfied,
    unsatisfied
  );
}
__name(assessPondLocalAuthenticationChallengeProof, "assessPondLocalAuthenticationChallengeProof");

// src/contracts/pond-local-principal-binding-establishment.ts
var ceremonyChecks = Object.freeze([
  "principal_ref_well_formed",
  "binding_bound_to_receiver_held_principal",
  "binding_explicitly_receiver_owned",
  "local_authentication_observed_by_receiver",
  "identity_separation_from_observed_agent_verified",
  "binding_excludes_memory_and_lane_content",
  "binding_grants_no_authority_and_stays_revocable"
]);
var POND_STAGE_DP5_FORBIDDEN_BINDING_KEYS = Object.freeze([
  "PrincipalId",
  "principalId",
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "endpoint",
  "transport",
  "connect",
  "fetch",
  "poll",
  "subscribe",
  "secret",
  "token",
  "apiKey",
  "session",
  "wallet",
  "address",
  "credential"
]);
var record3 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var exactArray3 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys3 = /* @__PURE__ */ __name((value, expected) => exactArray3(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var hasForbiddenKey3 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record3(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var wellFormedPrincipalRef2 = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "wellFormedPrincipalRef");
var validCeremonyRecord = /* @__PURE__ */ __name((value) => {
  const ceremony = record3(value);
  return ceremony !== null && exactKeys3(ceremony, [
    "contractVersion",
    "kind",
    "principalRef",
    "bindingBasis",
    "authenticationObservation",
    "identitySeparationPosture",
    "memoryLaneExclusionPosture",
    "authorityPosture",
    "revocabilityPosture",
    "authenticationPosture",
    "authority"
  ]) && ceremony.contractVersion === "pond-local-principal-binding-establishment-d-p5" && ceremony.kind === "pond-local-principal-binding-establishment" && wellFormedPrincipalRef2(ceremony.principalRef) && [
    "not_established",
    "receiver_owned_explicit_binding",
    "inferred_from_presence",
    "inferred_from_provider_session",
    "inferred_from_wallet",
    "inferred_from_memory",
    "inferred_from_conversation"
  ].includes(String(ceremony.bindingBasis)) && ["not_observed", "receiver_observed_local_authentication"].includes(
    String(ceremony.authenticationObservation)
  ) && [
    "not_verified",
    "receiver_verified_agent_identity_distinct_from_principal"
  ].includes(String(ceremony.identitySeparationPosture)) && [
    "not_established",
    "binding_excludes_memory_narrative_transcript_lanes"
  ].includes(String(ceremony.memoryLaneExclusionPosture)) && ceremony.authorityPosture === "binding_grants_no_authority_membership_or_capability" && [
    "not_established",
    "binding_revocable_independently_of_transport_provider_or_registry"
  ].includes(String(ceremony.revocabilityPosture)) && ["not_established", "fixture_structural_only_no_real_authentication"].includes(
    String(ceremony.authenticationPosture)
  ) && ceremony.authority === "none" && !hasForbiddenKey3(ceremony, POND_STAGE_DP5_FORBIDDEN_BINDING_KEYS);
}, "validCeremonyRecord");
var assessment2 = /* @__PURE__ */ __name((reason, ceremonyRecordVersion, satisfiedChecks, unsatisfiedChecks) => Object.freeze({
  contractVersion: "pond-local-principal-binding-establishment-d-p5",
  ceremonyRecordVersion,
  assessmentKind: "deterministic_supplied_local_principal_binding",
  bindingEstablishmentState: reason === "all_ceremony_checks_satisfied" ? "fixture_established_local_principal_binding" : "not_established",
  reason,
  authenticationPosture: reason === "all_ceremony_checks_satisfied" ? "fixture_structural_only_no_real_authentication" : "not_established",
  satisfiedChecks: Object.freeze([...satisfiedChecks]),
  unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
  // The ceremony proves binding vocabulary only: it never becomes a real
  // authentication, a PrincipalId issuance, memory admission, or
  // authority. authenticationPerformed stays false even on the complete
  // fixture arm — the real credential event is a later, separately
  // planned cut.
  authenticationPerformed: false,
  principalIdIssued: false,
  observedPresenceAcceptedAsAuthentication: false,
  observedIdentityAcceptedAsPrincipalId: false,
  personalMemoryContentAdmitted: false,
  currentTruthAdmitted: false,
  runtimeActivationPosture: "not_included",
  authority: "none"
}), "assessment");
function assessPondLocalPrincipalBindingEstablishment(input) {
  if (!validCeremonyRecord(input.ceremonyRecord))
    return assessment2("ceremony_record_invalid", "invalid", [], ceremonyChecks);
  const ceremony = input.ceremonyRecord;
  const values = [
    wellFormedPrincipalRef2(ceremony.principalRef),
    // The binding must land on the receiver's own held principal — the
    // same ref the receiver's D-P0 projection binds — never an invented or
    // externally observed one.
    wellFormedPrincipalRef2(input.receiverHeldPrincipalRef) && ceremony.principalRef === input.receiverHeldPrincipalRef,
    // An explicitly receiver-owned binding satisfies; an inferred basis
    // (presence, provider session, wallet, memory, conversation) is a
    // valid record whose binding check stays unsatisfied — fail closed
    // without erroring, mirroring D-P3's unknown_channel_precedence.
    ceremony.bindingBasis === "receiver_owned_explicit_binding",
    ceremony.authenticationObservation === "receiver_observed_local_authentication",
    ceremony.identitySeparationPosture === "receiver_verified_agent_identity_distinct_from_principal",
    ceremony.memoryLaneExclusionPosture === "binding_excludes_memory_narrative_transcript_lanes",
    // The no-authority posture is the structural fact itself (already
    // validated); the revocability literal restates the receiver's own
    // satisfied proof.
    ceremony.revocabilityPosture === "binding_revocable_independently_of_transport_provider_or_registry"
  ];
  const satisfied = ceremonyChecks.filter((_, index) => values[index]);
  const unsatisfied = ceremonyChecks.filter((_, index) => !values[index]);
  return assessment2(
    unsatisfied.length === 0 ? "all_ceremony_checks_satisfied" : "receiver_binding_proof_incomplete",
    "pond-local-principal-binding-establishment-d-p5",
    satisfied,
    unsatisfied
  );
}
__name(assessPondLocalPrincipalBindingEstablishment, "assessPondLocalPrincipalBindingEstablishment");

// src/contracts/pond-local-principal-id-issuance.ts
var issuanceChecks = Object.freeze([
  "principal_ref_well_formed",
  "issued_ref_is_receiver_held_ref",
  "issuance_explicitly_receiver_owned",
  "principal_id_distinct_from_agent_onchain_wallet_and_grant_ids",
  "binding_established_before_issuance",
  "issuance_excludes_memory_and_lane_content",
  "issuance_grants_no_authority_and_stays_revocable"
]);
var POND_STAGE_DP9_FORBIDDEN_ISSUANCE_KEYS = Object.freeze([
  "PrincipalId",
  "principalId",
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "endpoint",
  "transport",
  "connect",
  "fetch",
  "poll",
  "subscribe",
  "secret",
  "token",
  "apiKey",
  "password",
  "passphrase",
  "session",
  "wallet",
  "address",
  "credential",
  "plaintext",
  "answer",
  "privateKey",
  "mnemonic"
]);
var record4 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var exactKeys4 = /* @__PURE__ */ __name((value, expected) => exactArray4(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var exactArray4 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var hasForbiddenKey4 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record4(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var wellFormedPrincipalRef3 = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "wellFormedPrincipalRef");
var validIssuanceRecord = /* @__PURE__ */ __name((value) => {
  const issuance = record4(value);
  const distinctnessClaims = record4(issuance?.issuanceDistinctnessClaims);
  return issuance !== null && exactKeys4(issuance, [
    "contractVersion",
    "kind",
    "principalRef",
    "issuanceBasis",
    "issuedRefPosture",
    "issuanceDistinctnessClaims",
    "bindingEstablishmentPosture",
    "memoryLaneExclusionPosture",
    "authorityPosture",
    "revocabilityPosture",
    "authority"
  ]) && issuance.contractVersion === "pond-local-principal-id-issuance-d-p9" && issuance.kind === "pond-local-principal-id-issuance" && wellFormedPrincipalRef3(issuance.principalRef) && [
    "not_issued",
    "receiver_issued_local_principal_id",
    "inferred_from_presence",
    "derived_from_wallet_address",
    "derived_from_observed_onchain_identity",
    "derived_from_erc8004_binding"
  ].includes(String(issuance.issuanceBasis)) && [
    "not_issued",
    "receiver_held_ref_declared_issued_no_second_identity"
  ].includes(String(issuance.issuedRefPosture)) && distinctnessClaims !== null && exactKeys4(distinctnessClaims, [
    "isAgentId",
    "isErc8004AgentId",
    "isWalletAddress",
    "isGrantId",
    "isAttestationId",
    "isProviderSessionId",
    "isDisplayName"
  ]) && distinctnessClaims.isAgentId === false && distinctnessClaims.isErc8004AgentId === false && distinctnessClaims.isWalletAddress === false && distinctnessClaims.isGrantId === false && distinctnessClaims.isAttestationId === false && distinctnessClaims.isProviderSessionId === false && distinctnessClaims.isDisplayName === false && [
    "not_established",
    "receiver_binding_established_before_issuance"
  ].includes(String(issuance.bindingEstablishmentPosture)) && [
    "not_established",
    "issuance_excludes_memory_narrative_transcript_lanes"
  ].includes(String(issuance.memoryLaneExclusionPosture)) && issuance.authorityPosture === "issuance_grants_no_authority_membership_or_capability" && [
    "not_established",
    "issued_principal_id_revocable_by_receiver_replacement"
  ].includes(String(issuance.revocabilityPosture)) && issuance.authority === "none" && !hasForbiddenKey4(issuance, POND_STAGE_DP9_FORBIDDEN_ISSUANCE_KEYS);
}, "validIssuanceRecord");
var issuanceAssessment = /* @__PURE__ */ __name((reason, issuanceRecordVersion, issuedRefPosture, satisfiedChecks, unsatisfiedChecks) => {
  const issued = reason === "all_issuance_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-local-principal-id-issuance-d-p9",
    issuanceRecordVersion,
    assessmentKind: "deterministic_supplied_local_principal_id_issuance",
    issuanceState: issued ? "fixture_structural_local_principal_id_issued" : "not_issued",
    reason,
    issuedRefPosture: issued ? issuedRefPosture : issuanceRecordVersion === "invalid" ? "not_issued" : issuedRefPosture,
    issuanceCredentialScopePosture: "local_identity_label_only_no_credential_no_authenticator_no_session",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The issuance proves identity vocabulary only: it never becomes a
    // credential admission, an authentication, memory admission, or
    // authority. The frozen D-P0…D-P8 `principalIdIssued: false` literals
    // stay the carriers of that name; this cut's honesty lives in its own
    // state vocabulary, so no field here flips the frozen tuple.
    credentialAdmitted: false,
    authenticationPerformed: false,
    observedIdentityAcceptedAsPrincipalId: false,
    erc8004IdentityAcceptedAsPrincipalId: false,
    walletAddressAcceptedAsPrincipalId: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "issuanceAssessment");
function assessPondLocalPrincipalIdIssuance(input) {
  if (!validIssuanceRecord(input.issuanceRecord))
    return issuanceAssessment(
      "issuance_record_invalid",
      "invalid",
      "not_issued",
      [],
      issuanceChecks
    );
  const issuance = input.issuanceRecord;
  const values = [
    wellFormedPrincipalRef3(issuance.principalRef),
    // The issued PrincipalId is the receiver's own already-held ref
    // declared issued in place — one binding, one ref; no second identity
    // artifact is created.
    wellFormedPrincipalRef3(input.receiverHeldPrincipalRef) && issuance.principalRef === input.receiverHeldPrincipalRef && issuance.issuedRefPosture === "receiver_held_ref_declared_issued_no_second_identity",
    issuance.issuanceBasis === "receiver_issued_local_principal_id",
    // The all-false distinctness tuple is validated at record level; the
    // check restates that the receiver affirmed the cross-class
    // distinctness with the satisfied postures around it.
    issuance.authorityPosture === "issuance_grants_no_authority_membership_or_capability",
    issuance.bindingEstablishmentPosture === "receiver_binding_established_before_issuance",
    issuance.memoryLaneExclusionPosture === "issuance_excludes_memory_narrative_transcript_lanes",
    issuance.revocabilityPosture === "issued_principal_id_revocable_by_receiver_replacement"
  ];
  const satisfied = issuanceChecks.filter((_, index) => values[index]);
  const unsatisfied = issuanceChecks.filter((_, index) => !values[index]);
  return issuanceAssessment(
    unsatisfied.length === 0 ? "all_issuance_checks_satisfied" : "receiver_issuance_proof_incomplete",
    "pond-local-principal-id-issuance-d-p9",
    issuance.issuedRefPosture,
    satisfied,
    unsatisfied
  );
}
__name(assessPondLocalPrincipalIdIssuance, "assessPondLocalPrincipalIdIssuance");

// src/contracts/pond-erc8004-identity-mapping.ts
var mappingChecks = Object.freeze([
  "principal_ref_well_formed",
  "agent_ref_well_formed_and_distinct_from_principal",
  "erc8004_identity_ref_well_formed",
  "mapping_bound_to_receiver_held_principal",
  "mapping_explicitly_receiver_owned_not_inferred_or_equivalence",
  "mapping_preserves_identity_distinctness",
  "mapping_revocable_replaceable_and_insufficient_for_grant",
  "onchain_verification_evidence_independently_observed"
]);
var POND_STAGE_DP9_FORBIDDEN_MAPPING_KEYS = Object.freeze([
  "PrincipalId",
  "principalId",
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "endpoint",
  "transport",
  "connect",
  "fetch",
  "poll",
  "subscribe",
  "secret",
  "token",
  "apiKey",
  "password",
  "passphrase",
  "session",
  "wallet",
  "address",
  "credential",
  "plaintext",
  "answer",
  "privateKey",
  "mnemonic",
  "signature"
]);
var record5 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var exactKeys5 = /* @__PURE__ */ __name((value, expected) => exactArray5(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var exactArray5 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var hasForbiddenKey5 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record5(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var wellFormedPrincipalRef4 = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "wellFormedPrincipalRef");
var wellFormedAgentRef = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("agent:") && value.length > "agent:".length && !value.includes("principal:") && !value.includes("erc8004:"), "wellFormedAgentRef");
var wellFormedErc8004IdentityRef = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("erc8004:") && value.length > "erc8004:".length && !value.includes("principal:") && !value.includes("agent:"), "wellFormedErc8004IdentityRef");
var stringOrNull = /* @__PURE__ */ __name((value) => value === null || typeof value === "string", "stringOrNull");
var validVerificationEvidence = /* @__PURE__ */ __name((value) => {
  const evidence = record5(value);
  return evidence !== null && exactKeys5(evidence, [
    "chainIdObserved",
    "registryAddress",
    "agentId",
    "ownerObserved",
    "blockTag"
  ]) && stringOrNull(evidence.chainIdObserved) && stringOrNull(evidence.registryAddress) && stringOrNull(evidence.agentId) && stringOrNull(evidence.ownerObserved) && stringOrNull(evidence.blockTag);
}, "validVerificationEvidence");
var validMappingRecord = /* @__PURE__ */ __name((value) => {
  const mapping = record5(value);
  const distinctnessClaims = record5(mapping?.mappingDistinctnessClaims);
  return mapping !== null && exactKeys5(mapping, [
    "contractVersion",
    "kind",
    "principalRef",
    "agentRef",
    "erc8004IdentityRef",
    "mappingBasis",
    "mappingDistinctnessClaims",
    "verificationEvidence",
    "verificationPosture",
    "revocabilityReplaceabilityPosture",
    "grantSufficiencyPosture",
    "memoryLaneExclusionPosture",
    "authorityPosture",
    "authority"
  ]) && mapping.contractVersion === "pond-erc8004-identity-mapping-d-p9" && mapping.kind === "pond-erc8004-identity-mapping" && wellFormedPrincipalRef4(mapping.principalRef) && wellFormedAgentRef(mapping.agentRef) && wellFormedErc8004IdentityRef(mapping.erc8004IdentityRef) && [
    "not_established",
    "receiver_owned_explicit_mapping_binding",
    "inferred_from_wallet_ownership",
    "inferred_from_onchain_observation",
    "inferred_from_provider_session",
    "equivalence_claim_not_explicit_binding"
  ].includes(String(mapping.mappingBasis)) && distinctnessClaims !== null && exactKeys5(distinctnessClaims, [
    "onchainIdentityIsPrincipalIdentity",
    "onchainIdentityEstablishesLocalAdmission",
    "onchainIdentityEstablishesAuthority",
    "onchainIdentityIsLocalAgentId"
  ]) && distinctnessClaims.onchainIdentityIsPrincipalIdentity === false && distinctnessClaims.onchainIdentityEstablishesLocalAdmission === false && distinctnessClaims.onchainIdentityEstablishesAuthority === false && distinctnessClaims.onchainIdentityIsLocalAgentId === false && validVerificationEvidence(mapping.verificationEvidence) && [
    "not_established",
    "no_onchain_observation_performed_verification_unavailable"
  ].includes(String(mapping.verificationPosture)) && [
    "not_established",
    "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet"
  ].includes(String(mapping.revocabilityReplaceabilityPosture)) && mapping.grantSufficiencyPosture === "mapping_insufficient_by_itself_to_establish_a_grant" && [
    "not_established",
    "mapping_excludes_memory_narrative_transcript_lanes"
  ].includes(String(mapping.memoryLaneExclusionPosture)) && mapping.authorityPosture === "mapping_grants_no_authority_membership_or_capability" && mapping.authority === "none" && !hasForbiddenKey5(mapping, POND_STAGE_DP9_FORBIDDEN_MAPPING_KEYS);
}, "validMappingRecord");
var mappingAssessment = /* @__PURE__ */ __name((reason, mappingRecordVersion, revocabilityReplaceabilityPosture, established, verified, satisfiedChecks, unsatisfiedChecks) => {
  return Object.freeze({
    contractVersion: "pond-erc8004-identity-mapping-d-p9",
    mappingRecordVersion,
    assessmentKind: "deterministic_supplied_erc8004_identity_mapping",
    mappingEstablishmentState: established ? "fixture_structural_receiver_owned_mapping" : "not_established",
    onchainVerificationState: verified ? "verified_against_onchain_evidence" : "not_verified",
    reason,
    revocabilityReplaceabilityPosture: established ? revocabilityReplaceabilityPosture : mappingRecordVersion === "invalid" ? "not_established" : revocabilityReplaceabilityPosture,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The mapping is identity bookkeeping only: the opaque ERC-8004 label
    // never becomes the PrincipalId, an authentication, a grant, or
    // membership — L313's insufficiency carries into every arm.
    erc8004IdentityAcceptedAsPrincipalId: false,
    onchainIdentityAcceptedAsAuthentication: false,
    mappingEstablishesGrant: false,
    mappingEstablishesMembershipOrAdmission: false,
    credentialAdmitted: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "mappingAssessment");
function assessPondErc8004IdentityMapping(input) {
  if (!validMappingRecord(input.mappingRecord))
    return mappingAssessment(
      "mapping_record_invalid",
      "invalid",
      "not_established",
      false,
      false,
      [],
      mappingChecks
    );
  const mapping = input.mappingRecord;
  const values = [
    wellFormedPrincipalRef4(mapping.principalRef),
    wellFormedAgentRef(mapping.agentRef) && mapping.agentRef !== mapping.principalRef,
    wellFormedErc8004IdentityRef(mapping.erc8004IdentityRef),
    wellFormedPrincipalRef4(input.receiverHeldPrincipalRef) && mapping.principalRef === input.receiverHeldPrincipalRef,
    mapping.mappingBasis === "receiver_owned_explicit_mapping_binding",
    // The all-false distinctness tuple is validated at record level; the
    // check restates that the receiver affirmed the D-P0 relationship
    // literals plus the agent-identity law around satisfied postures.
    mapping.grantSufficiencyPosture === "mapping_insufficient_by_itself_to_establish_a_grant",
    mapping.revocabilityReplaceabilityPosture === "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet" && mapping.grantSufficiencyPosture === "mapping_insufficient_by_itself_to_establish_a_grant",
    // Fail-closed by construction this cut: no onchain observation surface
    // exists in Pond, so no supplied evidence — however complete or
    // honestly non-null — can be independently reproduced here. The
    // receiver-observed verification literal is the honest seam for the
    // dedicated verification cut and still does not satisfy this check.
    false
  ];
  const satisfied = mappingChecks.filter((_, index) => values[index] === true);
  const unsatisfied = mappingChecks.filter((_, index) => values[index] !== true);
  const recordChecksSatisfied = values.slice(0, 7).every(Boolean);
  const verificationSatisfied = values[7] === true;
  return mappingAssessment(
    values[7] ? "all_mapping_checks_satisfied" : recordChecksSatisfied ? "onchain_verification_not_performed" : "receiver_mapping_proof_incomplete",
    "pond-erc8004-identity-mapping-d-p9",
    mapping.revocabilityReplaceabilityPosture,
    recordChecksSatisfied,
    verificationSatisfied,
    satisfied,
    unsatisfied
  );
}
__name(assessPondErc8004IdentityMapping, "assessPondErc8004IdentityMapping");

// src/contracts/pond-principal-identity-readiness-composition.ts
var readinessChecks = Object.freeze([
  "local_principal_binding_established_dp5",
  "knowledge_factor_verified_dp8",
  "local_principal_id_issued_dp9",
  "erc8004_mapping_record_established_dp9"
]);
var compositionAssessment = /* @__PURE__ */ __name((reason, dp8FreshnessDiagnosis, mappedDp5SatisfiedChecks, mappedDp8SatisfiedChecks, mappedDp9IssuanceSatisfiedChecks, mappedDp9MappingSatisfiedChecks, satisfiedChecks, unsatisfiedChecks) => Object.freeze({
  contractVersion: "pond-principal-identity-readiness-composition-d-p9",
  assessmentKind: "deterministic_supplied_principal_identity_readiness_composition",
  readinessState: reason === "structurally_ready_private_reads_still_refused" ? "structurally_ready_private_reads_still_refused" : "not_ready",
  reason,
  dp8FreshnessDiagnosis,
  mappedDp5SatisfiedChecks: Object.freeze([...mappedDp5SatisfiedChecks]),
  mappedDp8SatisfiedChecks: Object.freeze([...mappedDp8SatisfiedChecks]),
  mappedDp9IssuanceSatisfiedChecks: Object.freeze([
    ...mappedDp9IssuanceSatisfiedChecks
  ]),
  mappedDp9MappingSatisfiedChecks: Object.freeze([
    ...mappedDp9MappingSatisfiedChecks
  ]),
  satisfiedChecks: Object.freeze([...satisfiedChecks]),
  unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
  // The identity chain completing never becomes private reads: the
  // issuance and the mapping are identity vocabulary, and authorization
  // is a separate, later, explicitly governed mechanism.
  privateReadsActivated: false,
  credentialAdmitted: false,
  authenticationPerformed: false,
  principalIdAcceptedAsAuthorization: false,
  erc8004IdentityAcceptedAsPrincipalId: false,
  personalMemoryContentAdmitted: false,
  currentTruthAdmitted: false,
  runtimeActivationPosture: "not_included",
  authority: "none"
}), "compositionAssessment");
function assessPondPrincipalIdentityReadinessComposition(input) {
  const ceremony = assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: input.dp5CeremonyRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef
  });
  const ceremonyEstablished = ceremony.reason === "all_ceremony_checks_satisfied";
  const proof = assessPondLocalAuthenticationChallengeProof({
    proofRecord: input.dp8ProofRecord,
    verifierRecord: input.dp8VerifierRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    evaluatedAtEpochMs: input.receiverVerifiedAtEpochMs,
    maximumAgeMs: input.receiverMaximumAgeMs
  });
  const knowledgeFactorVerified = proof.authenticationMechanicState === "receiver_verified_knowledge_factor" && proof.freshnessDiagnosis.state === "fresh";
  const issuance = assessPondLocalPrincipalIdIssuance({
    issuanceRecord: input.dp9IssuanceRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef
  });
  const principalIdIssued = issuance.issuanceState === "fixture_structural_local_principal_id_issued";
  const mapping = assessPondErc8004IdentityMapping({
    mappingRecord: input.dp9MappingRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    receiverVerification: "not_performed"
  });
  const mappingEstablished = mapping.mappingEstablishmentState === "fixture_structural_receiver_owned_mapping";
  const values = [
    ceremonyEstablished,
    knowledgeFactorVerified,
    principalIdIssued,
    mappingEstablished
  ];
  const satisfied = readinessChecks.filter((_, index) => values[index]);
  const unsatisfied = readinessChecks.filter((_, index) => !values[index]);
  return compositionAssessment(
    unsatisfied.length === 0 ? "structurally_ready_private_reads_still_refused" : "receiver_private_read_proof_incomplete",
    proof.freshnessDiagnosis,
    ceremony.satisfiedChecks,
    proof.satisfiedChecks,
    issuance.satisfiedChecks,
    mapping.satisfiedChecks,
    satisfied,
    unsatisfied
  );
}
__name(assessPondPrincipalIdentityReadinessComposition, "assessPondPrincipalIdentityReadinessComposition");

// src/contracts/pond-private-read-activation.ts
var activationChecks = Object.freeze([
  "principal_ref_well_formed",
  "activation_bound_to_receiver_held_principal",
  "activation_basis_explicitly_receiver_owned_not_inferred_from_readiness",
  "identity_chain_structurally_ready_and_current",
  "activation_session_scoped_fresh_and_restart_expiring",
  "activation_requires_no_grant_trusted_policy_attributed_and_stays_revocable",
  "activation_excludes_memory_lanes_and_multi_principal_scope"
]);
var POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS = Object.freeze([
  "PrincipalId",
  "principalId",
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "endpoint",
  "transport",
  "connect",
  "fetch",
  "poll",
  "subscribe",
  "secret",
  "token",
  "apiKey",
  "password",
  "passphrase",
  "session",
  "wallet",
  "address",
  "credential",
  "plaintext",
  "answer",
  "privateKey",
  "mnemonic",
  "content",
  "payload",
  "body",
  "snippet",
  "excerpt",
  "quote",
  "grantId"
]);
var record6 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var exactArray6 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys6 = /* @__PURE__ */ __name((value, expected) => exactArray6(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var hasForbiddenKey6 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record6(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var wellFormedPrincipalRef5 = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "wellFormedPrincipalRef");
var safeNonNegativeInteger3 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var diagnoseFreshness3 = /* @__PURE__ */ __name((activationMetadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const metadata = record6(activationMetadata);
  if (metadata === null || !safeNonNegativeInteger3(metadata.activated_at_epoch_ms) || metadata.freshness_basis !== "activation_event_time_only" || metadata.currentness_posture !== "not_established_consumer_must_evaluate")
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger3(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger3(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null
    });
  const activated_at_epoch_ms = metadata.activated_at_epoch_ms;
  if (activated_at_epoch_ms > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null
    });
  const age = evaluatedAtEpochMs - activated_at_epoch_ms;
  return Object.freeze(
    age <= maximumAgeMs ? {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: age
    } : {
      state: "stale",
      reason: "declared_maximum_age_expired",
      observationAgeMs: age
    }
  );
}, "diagnoseFreshness");
var validActivationRecord = /* @__PURE__ */ __name((value) => {
  const activation = record6(value);
  const metadata = record6(activation?.activationMetadata);
  return activation !== null && exactKeys6(activation, [
    "contractVersion",
    "kind",
    "principalRef",
    "activationBasis",
    "activatedCapability",
    "activationMetadata",
    "effectiveCapabilityScopePosture",
    "activationScopePosture",
    "revocabilityPosture",
    "trustedPolicyAttributionPosture",
    "grantSufficiencyPosture",
    "identityChainPosture",
    "collaborativeReadPosture",
    "memoryLaneAuthorityPosture",
    "authorityPosture",
    "authority"
  ]) && activation.contractVersion === "pond-private-read-activation-d-p10" && activation.kind === "pond-private-read-activation" && wellFormedPrincipalRef5(activation.principalRef) && [
    "not_activated",
    "receiver_explicit_activation_not_inferred",
    "inferred_from_structural_readiness",
    "inferred_from_identity_chain_completion",
    "derived_from_issuance_or_mapping",
    "inferred_from_operator_prompt"
  ].includes(String(activation.activationBasis)) && activation.activatedCapability === "receiver_private_read_of_own_structural_records" && metadata !== null && exactKeys6(metadata, [
    "activated_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger3(metadata.activated_at_epoch_ms) && metadata.freshness_basis === "activation_event_time_only" && metadata.currentness_posture === "not_established_consumer_must_evaluate" && activation.effectiveCapabilityScopePosture === "read_only_single_principal_own_structural_records_no_write_no_send_no_sign" && [
    "not_established",
    "session_scoped_receiver_restart_ends_activation"
  ].includes(String(activation.activationScopePosture)) && [
    "not_established",
    "activation_revocable_by_receiver_retraction"
  ].includes(String(activation.revocabilityPosture)) && activation.trustedPolicyAttributionPosture === "activation_attributable_to_receiver_trusted_runtime_policy_no_grant" && activation.grantSufficiencyPosture === "activation_requires_no_grant" && activation.identityChainPosture === "activation_requires_current_verified_principal_identity_chain" && activation.collaborativeReadPosture === "not_included_single_principal_reads_only" && activation.memoryLaneAuthorityPosture === "activation_authorizes_no_memory_lane_crossing_or_release" && activation.authorityPosture === "activation_grants_no_authority_beyond_activated_read_scope" && activation.authority === "none" && !hasForbiddenKey6(activation, POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS);
}, "validActivationRecord");
var activationAssessment = /* @__PURE__ */ __name((reason, activationRecordVersion, sessionScopePosture, diagnosis, identityChainReadinessState, identityChainUnsatisfiedChecks, satisfiedChecks, unsatisfiedChecks) => {
  const activated = reason === "all_activation_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-private-read-activation-d-p10",
    activationRecordVersion,
    assessmentKind: "deterministic_supplied_private_read_activation",
    activationState: activated ? "fixture_structural_session_scoped_private_read_activation" : "not_activated",
    reason,
    activationFreshnessDiagnosis: diagnosis,
    effectiveReadScopePosture: "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
    sessionScopePosture: activated ? sessionScopePosture : activationRecordVersion === "invalid" ? "not_established" : sessionScopePosture,
    collaborativeReadScopePosture: "not_included_single_principal_reads_only",
    identityChainReadinessState,
    identityChainUnsatisfiedChecks: Object.freeze([
      ...identityChainUnsatisfiedChecks
    ]),
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The activation is non-grant receiver trusted-policy attribution
    // only: it never becomes a grant, a credential admission, an
    // authentication, memory admission, a current-truth claim, or
    // authority. The frozen D-P0…D-P9 `privateReadsActivated: false`
    // literal stays the only carrier of that name; this cut's honesty
    // lives in its own state vocabulary, so no field here flips the
    // frozen tuple.
    activationEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "activationAssessment");
function assessPondPrivateReadActivation(input) {
  const fallbackDiagnosis = diagnoseFreshness3(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  if (!validActivationRecord(input.activationRecord))
    return activationAssessment(
      "activation_record_invalid",
      "invalid",
      "not_established",
      fallbackDiagnosis,
      "not_ready",
      [],
      [],
      activationChecks
    );
  const activation = input.activationRecord;
  const identityChain = assessPondPrincipalIdentityReadinessComposition({
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    receiverVerifiedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs
  });
  const identityChainReady = identityChain.readinessState === "structurally_ready_private_reads_still_refused" && identityChain.dp8FreshnessDiagnosis.state === "fresh";
  const diagnosis = diagnoseFreshness3(
    activation.activationMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  const sessionCurrent = diagnosis.state === "fresh";
  if (!identityChainReady)
    return activationAssessment(
      "identity_chain_not_structurally_ready",
      "pond-private-read-activation-d-p10",
      activation.activationScopePosture,
      diagnosis,
      identityChain.readinessState,
      identityChain.unsatisfiedChecks,
      [],
      activationChecks
    );
  if (!sessionCurrent)
    return activationAssessment(
      "activation_not_session_current",
      "pond-private-read-activation-d-p10",
      activation.activationScopePosture,
      diagnosis,
      identityChain.readinessState,
      [],
      [],
      activationChecks
    );
  const values = [
    wellFormedPrincipalRef5(activation.principalRef),
    wellFormedPrincipalRef5(input.receiverHeldPrincipalRef) && activation.principalRef === input.receiverHeldPrincipalRef,
    activation.activationBasis === "receiver_explicit_activation_not_inferred",
    identityChainReady,
    sessionCurrent && activation.activationScopePosture === "session_scoped_receiver_restart_ends_activation",
    activation.trustedPolicyAttributionPosture === "activation_attributable_to_receiver_trusted_runtime_policy_no_grant" && activation.grantSufficiencyPosture === "activation_requires_no_grant" && activation.revocabilityPosture === "activation_revocable_by_receiver_retraction",
    activation.memoryLaneAuthorityPosture === "activation_authorizes_no_memory_lane_crossing_or_release" && activation.collaborativeReadPosture === "not_included_single_principal_reads_only"
  ];
  const satisfied = activationChecks.filter((_, index) => values[index] === true);
  const unsatisfied = activationChecks.filter((_, index) => values[index] !== true);
  return activationAssessment(
    unsatisfied.length === 0 ? "all_activation_checks_satisfied" : "receiver_activation_proof_incomplete",
    "pond-private-read-activation-d-p10",
    activation.activationScopePosture,
    diagnosis,
    identityChain.readinessState,
    [],
    satisfied,
    unsatisfied
  );
}
__name(assessPondPrivateReadActivation, "assessPondPrivateReadActivation");

// src/contracts/pond-collaborative-read-counterpart-declaration.ts
var counterpartJoinChecks = Object.freeze([
  "counterpart_declaration_well_formed",
  "join_pairwise_distinct_refs",
  "join_basis_explicitly_receiver_declared_not_inferred",
  "counterpart_held_ref_pre_existing_never_issued",
  "join_session_scoped_and_revocable",
  "join_excludes_memory_and_personal_state_isolation",
  "join_requires_no_grant_and_no_consent_claim"
]);
var record7 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var exactArray7 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys7 = /* @__PURE__ */ __name((value, expected) => exactArray7(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var hasForbiddenKey7 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record7(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var wellFormedPrincipalRef6 = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "wellFormedPrincipalRef");
var validCounterpartDeclarationRecord = /* @__PURE__ */ __name((value) => {
  const declaration = record7(value);
  return declaration !== null && exactKeys7(declaration, [
    "contractVersion",
    "kind",
    "receiverHeldPrincipalRef",
    "counterpartPrincipalRef",
    "joinBasis",
    "heldRefPosture",
    "issuedIdPosture",
    "sessionScopePosture",
    "revocabilityPosture",
    "consentPosture",
    "grantSufficiencyPosture",
    "personalStateIsolationPosture",
    "memoryLaneExclusionPosture",
    "authorityPosture",
    "authority"
  ]) && declaration.contractVersion === "pond-collaborative-read-counterpart-declaration-d-p14" && declaration.kind === "pond-collaborative-read-counterpart-declaration" && wellFormedPrincipalRef6(declaration.receiverHeldPrincipalRef) && wellFormedPrincipalRef6(declaration.counterpartPrincipalRef) && [
    "receiver_declared_explicit_collaborative_session_join",
    "inferred_from_shared_project_presence",
    "inferred_from_agent_membership",
    "inferred_from_shared_scope_composition",
    "inferred_from_conversation_participation"
  ].includes(String(declaration.joinBasis)) && [
    "not_established",
    "receiver_recorded_pre_existing_ref_never_issued"
  ].includes(String(declaration.heldRefPosture)) && [
    "counterpart_carries_no_issued_principal_id",
    "counterpart_principal_id_issued_claim"
  ].includes(String(declaration.issuedIdPosture)) && [
    "not_established",
    "session_scoped_receiver_restart_ends_join"
  ].includes(String(declaration.sessionScopePosture)) && [
    "not_established",
    "join_revocable_by_receiver_retraction"
  ].includes(String(declaration.revocabilityPosture)) && declaration.consentPosture === "receiver_recorded_session_join_only_no_counterpart_consent_claim" && declaration.grantSufficiencyPosture === "join_requires_no_grant_and_establishes_no_grant" && declaration.personalStateIsolationPosture === "counterpart_personal_state_not_merged_and_not_read_by_this_join" && [
    "not_established",
    "join_excludes_memory_narrative_transcript_lanes"
  ].includes(String(declaration.memoryLaneExclusionPosture)) && declaration.authorityPosture === "join_grants_no_authority_membership_or_capability" && declaration.authority === "none" && !hasForbiddenKey7(
    declaration,
    POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS
  );
}, "validCounterpartDeclarationRecord");
var counterpartJoinAssessment = /* @__PURE__ */ __name((reason, counterpartDeclarationRecordVersion, satisfiedChecks, unsatisfiedChecks) => {
  const established = reason === "all_counterpart_join_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-collaborative-read-counterpart-declaration-d-p14",
    counterpartDeclarationRecordVersion,
    assessmentKind: "deterministic_supplied_counterpart_join_declaration",
    joinDeclarationState: established ? "fixture_structural_receiver_declared_counterpart_join" : "join_not_established",
    reason,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The join is a session-scoped, receiver-owned declaration only: it
    // never becomes a grant, opens counterpart consent, issues a second
    // PrincipalId, admits a credential, performs an authentication,
    // admits memory content, claims current truth, or becomes authority.
    joinEstablishesGrant: false,
    counterpartConsentEstablished: false,
    counterpartPrincipalIdIssuedByThisCut: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "counterpartJoinAssessment");
function assessPondCounterpartJoinDeclaration(input) {
  if (!validCounterpartDeclarationRecord(input.counterpartDeclarationRecord))
    return counterpartJoinAssessment(
      "counterpart_declaration_record_invalid",
      "invalid",
      [],
      counterpartJoinChecks
    );
  const declaration = input.counterpartDeclarationRecord;
  const values = [
    true,
    wellFormedPrincipalRef6(declaration.counterpartPrincipalRef) && String(declaration.counterpartPrincipalRef) !== String(declaration.receiverHeldPrincipalRef) && wellFormedPrincipalRef6(input.receiverHeldPrincipalRef) && declaration.receiverHeldPrincipalRef === input.receiverHeldPrincipalRef,
    declaration.joinBasis === "receiver_declared_explicit_collaborative_session_join",
    declaration.heldRefPosture === "receiver_recorded_pre_existing_ref_never_issued" && declaration.issuedIdPosture === "counterpart_carries_no_issued_principal_id",
    declaration.sessionScopePosture === "session_scoped_receiver_restart_ends_join" && declaration.revocabilityPosture === "join_revocable_by_receiver_retraction",
    declaration.memoryLaneExclusionPosture === "join_excludes_memory_narrative_transcript_lanes" && declaration.personalStateIsolationPosture === "counterpart_personal_state_not_merged_and_not_read_by_this_join",
    declaration.grantSufficiencyPosture === "join_requires_no_grant_and_establishes_no_grant" && declaration.consentPosture === "receiver_recorded_session_join_only_no_counterpart_consent_claim"
  ];
  const satisfied = counterpartJoinChecks.filter(
    (_, index) => values[index] === true
  );
  const unsatisfied = counterpartJoinChecks.filter(
    (_, index) => values[index] !== true
  );
  const established = unsatisfied.length === 0;
  return counterpartJoinAssessment(
    established ? "all_counterpart_join_checks_satisfied" : "receiver_join_declaration_proof_incomplete",
    "pond-collaborative-read-counterpart-declaration-d-p14",
    satisfied,
    unsatisfied
  );
}
__name(assessPondCounterpartJoinDeclaration, "assessPondCounterpartJoinDeclaration");

// src/contracts/pond-collaborative-read-activation.ts
var POND_STAGE_DP14_COUNTERPART_IDENTITY_POSTURES = Object.freeze([
  "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity"
]);
var POND_STAGE_DP14_COLLABORATIVE_READ_GATE_INPUT_KEYS = Object.freeze(
  [
    "activationRecord",
    "receiverHeldPrincipalRef",
    "counterpartPrincipalRef",
    "counterpartJoinDeclarationRecord",
    "receiverDp5CeremonyRecord",
    "receiverDp6ObservationRecord",
    "receiverDp8VerifierRecord",
    "receiverDp8ProofRecord",
    "receiverDp9IssuanceRecord",
    "receiverDp9MappingRecord",
    "receiverDp10ActivationRecord",
    "counterpartDp5CeremonyRecord",
    "counterpartDp6ObservationRecord",
    "counterpartDp8VerifierRecord",
    "counterpartDp8ProofRecord",
    "counterpartDp9IssuanceRecord",
    "counterpartDp9MappingRecord",
    "counterpartDp10ActivationRecord",
    "evaluatedAtEpochMs",
    "maximumAgeMs"
  ]
);
var POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS = Object.freeze(
  [
    ...POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS,
    "principalIds",
    "principalRefs",
    "counterpartPrincipalId",
    "counterpartPrincipalIds",
    "membership"
  ]
);
var assessPondCollaborativeReadPrincipalChain = /* @__PURE__ */ __name((input) => {
  const dp5 = assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: input.dp5CeremonyRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef
  });
  const dp6 = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: input.dp6ObservationRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef,
    evaluatedAtEpochMs: input.evaluatedAtEpochMs,
    maximumAgeMs: input.maximumAgeMs
  });
  const dp8Verifier = assessPondLocalAuthenticationVerifierRecord({
    verifierRecord: input.dp8VerifierRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef
  });
  const dp8Challenge = assessPondLocalAuthenticationChallengeProof({
    proofRecord: input.dp8ProofRecord,
    verifierRecord: input.dp8VerifierRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef,
    evaluatedAtEpochMs: input.evaluatedAtEpochMs,
    maximumAgeMs: input.maximumAgeMs
  });
  const dp9Issuance = assessPondLocalPrincipalIdIssuance({
    issuanceRecord: input.dp9IssuanceRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef
  });
  const dp9Mapping = assessPondErc8004IdentityMapping({
    mappingRecord: input.dp9MappingRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef,
    receiverVerification: "not_performed"
  });
  const dp10 = assessPondPrivateReadActivation({
    activationRecord: input.dp10ActivationRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    receiverEvaluatedAtEpochMs: input.evaluatedAtEpochMs,
    receiverMaximumAgeMs: input.maximumAgeMs
  });
  return Object.freeze({
    heldPrincipalRef: typeof input.heldPrincipalRef === "string" ? input.heldPrincipalRef : null,
    mappedDp5: Object.freeze({
      state: dp5.bindingEstablishmentState,
      reason: dp5.reason
    }),
    mappedDp6: Object.freeze({
      state: dp6.authenticationObservationState,
      reason: dp6.reason,
      diagnosis: dp6.freshnessDiagnosis
    }),
    mappedDp8: Object.freeze({
      verifierState: dp8Verifier.verifierState,
      verifierReason: dp8Verifier.reason,
      mechanicState: dp8Challenge.authenticationMechanicState,
      mechanicReason: dp8Challenge.reason,
      diagnosis: dp8Challenge.freshnessDiagnosis
    }),
    mappedDp9Issuance: Object.freeze({
      state: dp9Issuance.issuanceState,
      reason: dp9Issuance.reason
    }),
    // The receiver-verification of a mapping is always `not_performed`
    // on this lane: a mapping's live verification is the D-P11 seam's
    // exclusive job, and a structural mapping record is evidence of
    // receiver ownership only.
    mappedDp9Mapping: Object.freeze({
      state: dp9Mapping["mappingEstablishmentState"],
      reason: dp9Mapping.reason
    }),
    mappedDp10: Object.freeze({
      state: dp10["activationState"],
      reason: dp10.reason,
      diagnosis: dp10.activationFreshnessDiagnosis
    })
  });
}, "assessPondCollaborativeReadPrincipalChain");
var gateChecks = Object.freeze([
  "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
  "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
  "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
  "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
  "collaborative_activation_session_scoped_fresh_and_restart_expiring",
  "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority"
]);
var record8 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var exactArray8 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys8 = /* @__PURE__ */ __name((value, expected) => exactArray8(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var hasForbiddenKey8 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record8(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var wellFormedPrincipalRef7 = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "wellFormedPrincipalRef");
var safeNonNegativeInteger4 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var diagnoseFreshness4 = /* @__PURE__ */ __name((activationMetadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const metadata = record8(activationMetadata);
  if (metadata === null || !safeNonNegativeInteger4(metadata.activated_at_epoch_ms) || metadata.freshness_basis !== "activation_event_time_only" || metadata.currentness_posture !== "not_established_consumer_must_evaluate")
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger4(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger4(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null
    });
  const activated_at_epoch_ms = metadata.activated_at_epoch_ms;
  if (activated_at_epoch_ms > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null
    });
  const age = evaluatedAtEpochMs - activated_at_epoch_ms;
  return Object.freeze(
    age <= maximumAgeMs ? {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: age
    } : {
      state: "stale",
      reason: "declared_maximum_age_expired",
      observationAgeMs: age
    }
  );
}, "diagnoseFreshness");
var validCollaborativeActivationRecord = /* @__PURE__ */ __name((value) => {
  const activation = record8(value);
  const metadata = record8(activation?.activationMetadata);
  return activation !== null && exactKeys8(activation, [
    "contractVersion",
    "kind",
    "receiverHeldPrincipalRef",
    "counterpartPrincipalRef",
    "activationBasis",
    "activatedCapability",
    "activationMetadata",
    "effectiveCapabilityScopePosture",
    "multiPrincipalReadScopePosture",
    "sessionScopePosture",
    "revocabilityPosture",
    "trustedPolicyAttributionPosture",
    "grantSufficiencyPosture",
    "counterpartIdentityPosture",
    "consentPosture",
    "memoryLaneExclusionPosture",
    "authority"
  ]) && activation.contractVersion === "pond-collaborative-read-activation-d-p14" && activation.kind === "pond-collaborative-read-activation" && wellFormedPrincipalRef7(activation.receiverHeldPrincipalRef) && wellFormedPrincipalRef7(activation.counterpartPrincipalRef) && [
    "not_activated",
    "receiver_explicit_collaborative_activation_not_inferred",
    "inferred_from_structural_chain_readiness",
    "derived_from_single_principal_activations",
    "inferred_from_counterpart_presence",
    "inferred_from_operator_prompt"
  ].includes(String(activation.activationBasis)) && activation.activatedCapability === "collaborative_structural_records_read_of_both_declared_principals" && metadata !== null && exactKeys8(metadata, [
    "activated_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger4(metadata.activated_at_epoch_ms) && metadata.freshness_basis === "activation_event_time_only" && metadata.currentness_posture === "not_established_consumer_must_evaluate" && activation.effectiveCapabilityScopePosture === "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory" && activation.multiPrincipalReadScopePosture === "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory" && [
    "not_established",
    "session_scoped_receiver_restart_ends_activation"
  ].includes(String(activation.sessionScopePosture)) && [
    "not_established",
    "collaborative_activation_revocable_by_receiver_retraction"
  ].includes(String(activation.revocabilityPosture)) && activation.trustedPolicyAttributionPosture === "activation_attributable_to_receiver_trusted_runtime_policy_no_grant" && activation.grantSufficiencyPosture === "activation_requires_no_grant" && activation.counterpartIdentityPosture === "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity" && activation.consentPosture === "receiver_recorded_session_join_only_no_counterpart_consent_claim" && activation.memoryLaneExclusionPosture === "activation_excludes_memory_narrative_transcript_lanes" && activation.authority === "none" && String(activation.receiverHeldPrincipalRef) !== String(activation.counterpartPrincipalRef) && !hasForbiddenKey8(
    activation,
    POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS
  );
}, "validCollaborativeActivationRecord");
var gateAssessment = /* @__PURE__ */ __name((reason, activationRecordVersion, mappedCounterpartJoin, receiverChain, counterpartChain, receiverChainState, counterpartChainState, diagnosis, satisfiedChecks, unsatisfiedChecks) => {
  const activated = reason === "all_collaborative_read_gate_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-collaborative-read-activation-d-p14",
    activationRecordVersion,
    assessmentKind: "deterministic_supplied_collaborative_read_activation",
    collaborativeReadActivationState: activated ? "fixture_structural_session_scoped_collaborative_structural_read_activation" : "not_activated",
    reason,
    mappedCounterpartJoin,
    receiverChain,
    counterpartChain,
    receiverChainState,
    counterpartChainState,
    collaborativeFreshnessDiagnosis: diagnosis,
    multiPrincipalReadScopePosture: activated ? "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory" : "not_included",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The collaborative activation is session-scoped read scope over two
    // named principals' structural records only: it never becomes a
    // grant, a credential admission, an authentication, an authorization
    // by PrincipalId, a memory crossing (either principal's), an opened
    // counterpart consent, a current-truth claim, or authority. No
    // second identity is issued or accepted.
    collaborativeReadEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    counterpartMemoryContentAdmitted: false,
    counterpartConsentEstablished: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "gateAssessment");
var receiverChainOk = /* @__PURE__ */ __name((chain) => chain.mappedDp5.state === "fixture_established_local_principal_binding" && chain.mappedDp5.reason === "all_ceremony_checks_satisfied" && chain.mappedDp6.state === "fixture_observed_local_authentication" && chain.mappedDp6.reason === "all_observation_checks_satisfied" && chain.mappedDp6.diagnosis.state === "fresh" && chain.mappedDp8.verifierState === "receiver_enrolled_knowledge_verifier" && chain.mappedDp8.verifierReason === "verifier_enrolled" && chain.mappedDp8.mechanicState === "receiver_verified_knowledge_factor" && chain.mappedDp8.mechanicReason === "all_challenge_checks_satisfied" && chain.mappedDp8.diagnosis.state === "fresh" && chain.mappedDp9Issuance.state === "fixture_structural_local_principal_id_issued" && chain.mappedDp9Issuance.reason === "all_issuance_checks_satisfied" && chain.mappedDp9Mapping.state === "fixture_structural_receiver_owned_mapping" && (chain.mappedDp9Mapping.reason === "onchain_verification_not_performed" || chain.mappedDp9Mapping.reason === "all_mapping_checks_satisfied") && chain.mappedDp10.state === "fixture_structural_session_scoped_private_read_activation" && chain.mappedDp10.reason === "all_activation_checks_satisfied" && chain.mappedDp10.diagnosis.state === "fresh", "receiverChainOk");
var counterpartChainOk = /* @__PURE__ */ __name((chain) => chain.mappedDp5.state === "fixture_established_local_principal_binding" && chain.mappedDp5.reason === "all_ceremony_checks_satisfied" && chain.mappedDp6.state === "fixture_observed_local_authentication" && chain.mappedDp6.reason === "all_observation_checks_satisfied" && chain.mappedDp6.diagnosis.state === "fresh" && chain.mappedDp8.verifierState === "receiver_enrolled_knowledge_verifier" && chain.mappedDp8.verifierReason === "verifier_enrolled" && chain.mappedDp8.mechanicState === "receiver_verified_knowledge_factor" && chain.mappedDp8.mechanicReason === "all_challenge_checks_satisfied" && chain.mappedDp8.diagnosis.state === "fresh" && // The no-second-identity pins: the counterpart carries no issued
// PrincipalId, no ERC-8004 mapping, and no private-read activation. A
// claimed-issued issuance record greens through the frozen assessor
// (that is exactly what it would claim) and is refused here by this pin.
chain.mappedDp9Issuance.state === "not_issued" && chain.mappedDp9Issuance.reason === "receiver_issuance_proof_incomplete" && chain.mappedDp9Mapping.state === "not_established" && chain.mappedDp9Mapping.reason === "mapping_record_invalid" && chain.mappedDp10.state === "not_activated" && chain.mappedDp10.reason === "activation_record_invalid", "counterpartChainOk");
function assessPondCollaborativeReadActivation(input) {
  const mappedInput = record8(input);
  const joinAssessment = assessPondCounterpartJoinDeclaration({
    counterpartDeclarationRecord: mappedInput?.counterpartJoinDeclarationRecord ?? null,
    receiverHeldPrincipalRef: mappedInput?.receiverHeldPrincipalRef ?? null
  });
  const receiverChain = assessPondCollaborativeReadPrincipalChain({
    heldPrincipalRef: mappedInput?.receiverHeldPrincipalRef ?? null,
    dp5CeremonyRecord: mappedInput?.receiverDp5CeremonyRecord ?? null,
    dp6ObservationRecord: mappedInput?.receiverDp6ObservationRecord ?? null,
    dp8VerifierRecord: mappedInput?.receiverDp8VerifierRecord ?? null,
    dp8ProofRecord: mappedInput?.receiverDp8ProofRecord ?? null,
    dp9IssuanceRecord: mappedInput?.receiverDp9IssuanceRecord ?? null,
    dp9MappingRecord: mappedInput?.receiverDp9MappingRecord ?? null,
    dp10ActivationRecord: mappedInput?.receiverDp10ActivationRecord ?? null,
    evaluatedAtEpochMs: mappedInput?.evaluatedAtEpochMs ?? null,
    maximumAgeMs: mappedInput?.maximumAgeMs ?? null
  });
  const counterpartChain = assessPondCollaborativeReadPrincipalChain({
    heldPrincipalRef: mappedInput?.counterpartPrincipalRef ?? null,
    dp5CeremonyRecord: mappedInput?.counterpartDp5CeremonyRecord ?? null,
    dp6ObservationRecord: mappedInput?.counterpartDp6ObservationRecord ?? null,
    dp8VerifierRecord: mappedInput?.counterpartDp8VerifierRecord ?? null,
    dp8ProofRecord: mappedInput?.counterpartDp8ProofRecord ?? null,
    dp9IssuanceRecord: mappedInput?.counterpartDp9IssuanceRecord ?? null,
    dp9MappingRecord: mappedInput?.counterpartDp9MappingRecord ?? null,
    dp10ActivationRecord: mappedInput?.counterpartDp10ActivationRecord ?? null,
    evaluatedAtEpochMs: mappedInput?.evaluatedAtEpochMs ?? null,
    maximumAgeMs: mappedInput?.maximumAgeMs ?? null
  });
  const joinEcho = Object.freeze({
    joinDeclarationState: joinAssessment.joinDeclarationState,
    reason: joinAssessment.reason,
    unsatisfiedChecks: joinAssessment.unsatisfiedChecks
  });
  const fallbackDiagnosis = diagnoseFreshness4(
    null,
    mappedInput?.evaluatedAtEpochMs ?? null,
    mappedInput?.maximumAgeMs ?? null
  );
  if (!exactKeys8(
    mappedInput ?? {},
    POND_STAGE_DP14_COLLABORATIVE_READ_GATE_INPUT_KEYS
  ))
    return gateAssessment(
      "collaborative_activation_record_invalid",
      "invalid",
      joinEcho,
      receiverChain,
      counterpartChain,
      receiverChainOk(receiverChain) ? "principal_chain_structurally_verified" : "chain_not_verified",
      counterpartChainOk(counterpartChain) ? "counterpart_chain_verified_without_issued_identity" : "chain_not_verified",
      fallbackDiagnosis,
      [],
      gateChecks
    );
  if (!validCollaborativeActivationRecord(input.activationRecord))
    return gateAssessment(
      "collaborative_activation_record_invalid",
      "invalid",
      joinEcho,
      receiverChain,
      counterpartChain,
      receiverChainOk(receiverChain) ? "principal_chain_structurally_verified" : "chain_not_verified",
      counterpartChainOk(counterpartChain) ? "counterpart_chain_verified_without_issued_identity" : "chain_not_verified",
      fallbackDiagnosis,
      [],
      gateChecks
    );
  const activation = input.activationRecord;
  const diagnosis = diagnoseFreshness4(
    activation.activationMetadata,
    input.evaluatedAtEpochMs,
    input.maximumAgeMs
  );
  const sessionCurrent = diagnosis.state === "fresh";
  if (joinAssessment.joinDeclarationState !== "fixture_structural_receiver_declared_counterpart_join")
    return gateAssessment(
      "counterpart_join_not_established",
      "pond-collaborative-read-activation-d-p14",
      joinEcho,
      receiverChain,
      counterpartChain,
      receiverChainOk(receiverChain) ? "principal_chain_structurally_verified" : "chain_not_verified",
      counterpartChainOk(counterpartChain) ? "counterpart_chain_verified_without_issued_identity" : "chain_not_verified",
      diagnosis,
      [],
      gateChecks
    );
  if (!receiverChainOk(receiverChain))
    return gateAssessment(
      "receiver_chain_not_structurally_ready_or_current",
      "pond-collaborative-read-activation-d-p14",
      joinEcho,
      receiverChain,
      counterpartChain,
      "chain_not_verified",
      counterpartChainOk(counterpartChain) ? "counterpart_chain_verified_without_issued_identity" : "chain_not_verified",
      diagnosis,
      [],
      gateChecks
    );
  if (!counterpartChainOk(counterpartChain))
    return gateAssessment(
      "counterpart_chain_not_structurally_verified",
      "pond-collaborative-read-activation-d-p14",
      joinEcho,
      receiverChain,
      counterpartChain,
      "principal_chain_structurally_verified",
      "chain_not_verified",
      diagnosis,
      [],
      gateChecks
    );
  if (!sessionCurrent)
    return gateAssessment(
      "collaborative_activation_not_session_current",
      "pond-collaborative-read-activation-d-p14",
      joinEcho,
      receiverChain,
      counterpartChain,
      "principal_chain_structurally_verified",
      "counterpart_chain_verified_without_issued_identity",
      diagnosis,
      [],
      gateChecks
    );
  const values = [
    activation.activationBasis === "receiver_explicit_collaborative_activation_not_inferred" && activation.receiverHeldPrincipalRef === input.receiverHeldPrincipalRef && activation.counterpartPrincipalRef === input.counterpartPrincipalRef,
    joinAssessment.joinDeclarationState === "fixture_structural_receiver_declared_counterpart_join",
    receiverChainOk(receiverChain),
    counterpartChainOk(counterpartChain),
    sessionCurrent && activation.sessionScopePosture === "session_scoped_receiver_restart_ends_activation",
    activation.memoryLaneExclusionPosture === "activation_excludes_memory_narrative_transcript_lanes" && activation.consentPosture === "receiver_recorded_session_join_only_no_counterpart_consent_claim" && activation.counterpartIdentityPosture === "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity" && activation.trustedPolicyAttributionPosture === "activation_attributable_to_receiver_trusted_runtime_policy_no_grant" && activation.grantSufficiencyPosture === "activation_requires_no_grant" && activation.revocabilityPosture === "collaborative_activation_revocable_by_receiver_retraction" && activation.authority === "none" && activation.multiPrincipalReadScopePosture === "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory"
  ];
  const satisfied = gateChecks.filter((_, index) => values[index] === true);
  const unsatisfied = gateChecks.filter((_, index) => values[index] !== true);
  const activated = unsatisfied.length === 0;
  return gateAssessment(
    activated ? "all_collaborative_read_gate_checks_satisfied" : "receiver_collaborative_activation_proof_incomplete",
    "pond-collaborative-read-activation-d-p14",
    joinEcho,
    receiverChain,
    counterpartChain,
    "principal_chain_structurally_verified",
    "counterpart_chain_verified_without_issued_identity",
    diagnosis,
    satisfied,
    unsatisfied
  );
}
__name(assessPondCollaborativeReadActivation, "assessPondCollaborativeReadActivation");

// src/contracts/pond-live-session-establishment.ts
var establishmentChecks = Object.freeze([
  "establishment_record_well_formed",
  "establishment_bound_to_receiver_held_principal",
  "establishment_basis_receiver_performed_not_inferred",
  "shell_authentication_event_observed_by_receiver_fresh",
  "knowledge_factor_verified_fresh_and_recompute_agreed",
  "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
  "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
  "establishment_excludes_memory_lanes_and_collaborative_widening"
]);
var POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS = Object.freeze([
  // The D-P14 inventory is the union of the D-P6/D-P8/D-P10 inventories
  // plus the plural-batch keys — the widest frozen inventory to date.
  ...POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS,
  // The agent-reach keys this cut exists to refuse: an agent never gains
  // a session, a secret, or an admission from the receiver's session, and
  // no chat-message lane enters it.
  "agentSession",
  "agentSecret",
  "agentAdmission",
  "chatMessage"
]);
var record9 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var exactArray9 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys9 = /* @__PURE__ */ __name((value, expected) => exactArray9(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var hasForbiddenKey9 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record9(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var wellFormedPrincipalRef8 = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "wellFormedPrincipalRef");
var safeNonNegativeInteger5 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var diagnoseEstablishmentFreshness = /* @__PURE__ */ __name((metadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const checked = record9(metadata);
  if (checked === null || !safeNonNegativeInteger5(checked.established_at_epoch_ms) || checked.freshness_basis !== "establishment_event_time_only" || checked.currentness_posture !== "not_established_consumer_must_evaluate")
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger5(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger5(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null
    });
  const establishedAt = checked.established_at_epoch_ms;
  if (establishedAt > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null
    });
  const age = evaluatedAtEpochMs - establishedAt;
  return Object.freeze(
    age <= maximumAgeMs ? {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: age
    } : {
      state: "stale",
      reason: "declared_maximum_age_expired",
      observationAgeMs: age
    }
  );
}, "diagnoseEstablishmentFreshness");
var validRetractionRecord = /* @__PURE__ */ __name((value) => {
  if (value === null) return true;
  const retraction = record9(value);
  return retraction !== null && exactKeys9(retraction, [
    "contractVersion",
    "kind",
    "retracted_at_epoch_ms",
    "retractionPosture",
    "authority"
  ]) && retraction.contractVersion === "pond-live-session-retraction-d-p15" && retraction.kind === "pond-live-session-retraction" && safeNonNegativeInteger5(retraction.retracted_at_epoch_ms) && retraction.retractionPosture === "receiver_recorded_live_session_retraction_no_grant" && retraction.authority === "none" && !hasForbiddenKey9(retraction, POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS);
}, "validRetractionRecord");
var validEstablishmentRecord = /* @__PURE__ */ __name((value) => {
  const establishment = record9(value);
  const metadata = record9(establishment?.establishmentMetadata);
  return establishment !== null && exactKeys9(establishment, [
    "contractVersion",
    "kind",
    "principalRef",
    "establishmentBasis",
    "establishedCapability",
    "establishmentMetadata",
    "establishmentScopePosture",
    "establishmentRevocabilityPosture",
    "establishmentAttributionPosture",
    "agentScopePosture",
    "sharedSurfacePosture",
    "collaborativeWideningPosture",
    "activatedReadScopePosture",
    "memoryLaneExclusionPosture",
    "authorityPosture",
    "authority"
  ]) && establishment.contractVersion === "pond-live-session-establishment-d-p15" && establishment.kind === "pond-live-session-establishment" && wellFormedPrincipalRef8(establishment.principalRef) && [
    "receiver_performed_local_authentication_session_establishment_not_inferred",
    "inferred_from_session_presence",
    "inferred_from_wallet_connection",
    "asserted_by_shell_producer",
    "inferred_from_structural_readiness",
    "inferred_from_observed_agent_presence"
  ].includes(String(establishment.establishmentBasis)) && establishment.establishedCapability === "receiver_live_session_scoped_shell_authentication" && metadata !== null && exactKeys9(metadata, [
    "established_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger5(metadata.established_at_epoch_ms) && metadata.freshness_basis === "establishment_event_time_only" && metadata.currentness_posture === "not_established_consumer_must_evaluate" && [
    "not_established",
    "live_session_scoped_receiver_shell_restart_ends_establishment",
    "shell_process_scope_not_restart_ending_refused"
  ].includes(String(establishment.establishmentScopePosture)) && [
    "not_established",
    "establishment_revocable_by_receiver_retraction"
  ].includes(String(establishment.establishmentRevocabilityPosture)) && establishment.establishmentAttributionPosture === "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant" && establishment.agentScopePosture === "no_agent_session_no_agent_secret_no_agent_admission" && establishment.sharedSurfacePosture === "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse" && establishment.collaborativeWideningPosture === "not_included_collaborative_reads_require_their_own_live_session_lane" && establishment.activatedReadScopePosture === "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign" && establishment.memoryLaneExclusionPosture === "establishment_excludes_memory_narrative_transcript_lanes" && establishment.authorityPosture === "establishment_grants_no_authority_membership_or_capability" && establishment.authority === "none" && !hasForbiddenKey9(establishment, POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS);
}, "validEstablishmentRecord");
var establishmentAssessment = /* @__PURE__ */ __name((reason, establishmentRecordVersion, establishmentScopePosture, diagnosis, mappedDp6, mappedDp8, mappedDp10, satisfiedChecks, unsatisfiedChecks) => {
  const established = reason === "all_session_establishment_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-live-session-establishment-d-p15",
    establishmentRecordVersion,
    assessmentKind: "deterministic_supplied_live_session_establishment",
    sessionEstablishmentState: established ? "live_session_scoped_authentication_established" : "not_established",
    reason,
    establishmentFreshnessDiagnosis: diagnosis,
    establishmentScopePosture,
    mappedDp6ObservationState: mappedDp6.state,
    mappedDp6Reason: mappedDp6.reason,
    mappedDp6FreshnessDiagnosis: mappedDp6.diagnosis,
    mappedDp8MechanicState: mappedDp8.mechanicState,
    mappedDp8Reason: mappedDp8.reason,
    mappedDp8Comparison: mappedDp8.comparison,
    mappedDp8RecomputedComparison: mappedDp8.recomputed,
    mappedDp8FreshnessDiagnosis: mappedDp8.diagnosis,
    mappedDp10ActivationState: mappedDp10.state,
    mappedDp10Reason: mappedDp10.reason,
    mappedDp10SessionScopePosture: mappedDp10.scopePosture,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The session is a receiver-owned authentication fact only: it never
    // becomes a grant, a membership or admission, an agent reach, a
    // credential, a PrincipalId authorization, memory admission, or
    // authority, and it never claims current truth. Authentication is not
    // authorization (agent-identity L75); the request is not itself the
    // grant (trusted-channel L100).
    sessionEstablishesGrant: false,
    sessionEstablishesMembershipOrAdmission: false,
    sessionGrantsAgentAccess: false,
    sessionEstablishesCurrentTruth: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "establishmentAssessment");
function assessPondLiveSessionEstablishment(input) {
  const dp6Leg = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: input.dp6ObservationRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    evaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    maximumAgeMs: input.receiverMaximumAgeMs
  });
  const dp8Leg = assessPondLocalAuthenticationChallengeProof({
    proofRecord: input.dp8ProofRecord,
    verifierRecord: input.dp8VerifierRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    evaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    maximumAgeMs: input.receiverMaximumAgeMs
  });
  const dp10Leg = assessPondPrivateReadActivation({
    activationRecord: input.dp10ActivationRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs
  });
  const mappedDp6 = {
    state: dp6Leg.authenticationObservationState,
    reason: dp6Leg.reason,
    diagnosis: dp6Leg.freshnessDiagnosis
  };
  const mappedDp8 = {
    mechanicState: dp8Leg.authenticationMechanicState,
    reason: dp8Leg.reason,
    comparison: dp8Leg.comparison,
    recomputed: dp8Leg.recomputedComparison,
    diagnosis: dp8Leg.freshnessDiagnosis
  };
  const mappedDp10 = {
    state: dp10Leg["activationState"],
    reason: dp10Leg.reason,
    scopePosture: dp10Leg["sessionScopePosture"]
  };
  const fallbackDiagnosis = diagnoseEstablishmentFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  if (!validEstablishmentRecord(input.establishmentRecord) || !validRetractionRecord(input.receiverRetractionRecord))
    return establishmentAssessment(
      "establishment_record_invalid",
      "invalid",
      "not_established",
      fallbackDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks
    );
  const establishment = input.establishmentRecord;
  const scopePosture = establishment.establishmentScopePosture;
  const ownDiagnosis = diagnoseEstablishmentFreshness(
    establishment.establishmentMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  const sessionCurrent = ownDiagnosis.state === "fresh";
  if (input.receiverRetractionRecord !== null)
    return establishmentAssessment(
      "receiver_retraction_on_record",
      "pond-live-session-establishment-d-p15",
      scopePosture,
      ownDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks
    );
  if (!sessionCurrent)
    return establishmentAssessment(
      "session_establishment_not_session_current",
      "pond-live-session-establishment-d-p15",
      scopePosture,
      ownDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks
    );
  const dp6Observed = dp6Leg.reason === "all_observation_checks_satisfied" && dp6Leg.freshnessDiagnosis.state === "fresh";
  const dp8Verified = dp8Leg.authenticationMechanicState === "receiver_verified_knowledge_factor" && dp8Leg.freshnessDiagnosis.state === "fresh";
  const dp10Active = dp10Leg["activationState"] === "fixture_structural_session_scoped_private_read_activation";
  const values = [
    wellFormedPrincipalRef8(establishment.principalRef),
    wellFormedPrincipalRef8(input.receiverHeldPrincipalRef) && establishment.principalRef === input.receiverHeldPrincipalRef,
    establishment.establishmentBasis === "receiver_performed_local_authentication_session_establishment_not_inferred",
    dp6Observed,
    dp8Verified,
    dp10Active,
    sessionCurrent && establishment.establishmentScopePosture === "live_session_scoped_receiver_shell_restart_ends_establishment" && establishment.establishmentRevocabilityPosture === "establishment_revocable_by_receiver_retraction" && establishment.agentScopePosture === "no_agent_session_no_agent_secret_no_agent_admission" && establishment.sharedSurfacePosture === "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
    establishment.memoryLaneExclusionPosture === "establishment_excludes_memory_narrative_transcript_lanes" && establishment.collaborativeWideningPosture === "not_included_collaborative_reads_require_their_own_live_session_lane"
  ];
  const satisfied = establishmentChecks.filter(
    (_, index) => values[index] === true
  );
  const unsatisfied = establishmentChecks.filter(
    (_, index) => values[index] !== true
  );
  if (!dp6Observed)
    return establishmentAssessment(
      "authentication_event_not_observed_refused_or_unfresh",
      "pond-live-session-establishment-d-p15",
      scopePosture,
      ownDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks
    );
  if (!dp8Verified)
    return establishmentAssessment(
      "knowledge_factor_not_verified_or_unfresh",
      "pond-live-session-establishment-d-p15",
      scopePosture,
      ownDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks
    );
  if (!dp10Active)
    return establishmentAssessment(
      "frozen_activation_not_structurally_ready_or_not_session_current",
      "pond-live-session-establishment-d-p15",
      scopePosture,
      ownDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks
    );
  if (!values[6])
    return establishmentAssessment(
      "session_scope_posture_not_restart_ending_or_not_agent_free",
      "pond-live-session-establishment-d-p15",
      scopePosture,
      ownDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks
    );
  return establishmentAssessment(
    unsatisfied.length === 0 ? "all_session_establishment_checks_satisfied" : "receiver_session_establishment_proof_incomplete",
    "pond-live-session-establishment-d-p15",
    scopePosture,
    ownDiagnosis,
    mappedDp6,
    mappedDp8,
    mappedDp10,
    satisfied,
    unsatisfied
  );
}
__name(assessPondLiveSessionEstablishment, "assessPondLiveSessionEstablishment");

// src/contracts/pond-live-session-read-gate.ts
var readGateChecks = Object.freeze([
  "read_gate_record_well_formed",
  "read_gate_bound_to_receiver_held_principal",
  "read_gate_basis_receiver_owned_and_single_principal",
  "live_session_establishment_reverified_positive_and_fresh",
  "frozen_private_read_structural_activation_independently_reinspected_active",
  "read_gate_refuses_memory_lanes_collaborative_widening_and_agent_reach"
]);
var record10 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var exactArray10 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys10 = /* @__PURE__ */ __name((value, expected) => exactArray10(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var hasForbiddenKey10 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record10(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var wellFormedPrincipalRef9 = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "wellFormedPrincipalRef");
var safeNonNegativeInteger6 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var diagnoseGateFreshness = /* @__PURE__ */ __name((metadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const checked = record10(metadata);
  if (checked === null || !safeNonNegativeInteger6(checked.opened_at_epoch_ms) || checked.freshness_basis !== "gate_open_event_time_only" || checked.currentness_posture !== "not_established_consumer_must_evaluate")
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger6(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger6(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null
    });
  const openedAt = checked.opened_at_epoch_ms;
  if (openedAt > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null
    });
  const age = evaluatedAtEpochMs - openedAt;
  return Object.freeze(
    age <= maximumAgeMs ? {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: age
    } : {
      state: "stale",
      reason: "declared_maximum_age_expired",
      observationAgeMs: age
    }
  );
}, "diagnoseGateFreshness");
var validReadGateRecord = /* @__PURE__ */ __name((value) => {
  const readGate = record10(value);
  const metadata = record10(readGate?.readGateMetadata);
  return readGate !== null && exactKeys10(readGate, [
    "contractVersion",
    "kind",
    "principalRef",
    "readGateBasis",
    "requestedReadScope",
    "readGateMetadata",
    "readGateReadUsePosture",
    "collaborativeScopePosture",
    "agentScopePosture",
    "memoryLaneExclusionPosture",
    "authorityPosture",
    "authority"
  ]) && readGate.contractVersion === "pond-live-session-read-gate-d-p15" && readGate.kind === "pond-live-session-read-gate" && wellFormedPrincipalRef9(readGate.principalRef) && [
    "receiver_session_scoped_structural_read_live_use_not_inferred",
    "inferred_from_live_session_establishment",
    "inferred_from_collaborative_activation"
  ].includes(String(readGate.readGateBasis)) && [
    "single_principal_own_structural_records",
    "collaborative_multi_principal_read"
  ].includes(String(readGate.requestedReadScope)) && metadata !== null && exactKeys10(metadata, [
    "opened_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger6(metadata.opened_at_epoch_ms) && metadata.freshness_basis === "gate_open_event_time_only" && metadata.currentness_posture === "not_established_consumer_must_evaluate" && readGate.readGateReadUsePosture === "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here" && [
    "not_included_collaborative_requires_their_own_live_session_lane",
    "collaborative_widening_attempted_refused"
  ].includes(String(readGate.collaborativeScopePosture)) && readGate.agentScopePosture === "no_agent_session_no_agent_secret_no_agent_admission" && readGate.memoryLaneExclusionPosture === "read_gate_excludes_memory_narrative_transcript_lanes" && readGate.authorityPosture === "read_gate_grants_no_authority_membership_or_capability" && readGate.authority === "none" && !hasForbiddenKey10(readGate, POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS);
}, "validReadGateRecord");
var readGateAssessment = /* @__PURE__ */ __name((reason, readGateRecordVersion, diagnosis, mappedEstablishment, mappedDp10, satisfiedChecks, unsatisfiedChecks) => {
  const opened = reason === "all_read_gate_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-live-session-read-gate-d-p15",
    readGateRecordVersion,
    assessmentKind: "deterministic_supplied_live_session_read_gate",
    liveSessionReadGateState: opened ? "live_session_scoped_single_principal_structural_reads_live_activated" : "no_active_live_session",
    reason,
    readGateFreshnessDiagnosis: diagnosis,
    mappedLiveSessionEstablishmentState: mappedEstablishment.state,
    mappedLiveSessionEstablishmentReason: mappedEstablishment.reason,
    mappedDp10ActivationState: mappedDp10.state,
    mappedDp10Reason: mappedDp10.reason,
    mappedDp10SessionScopePosture: mappedDp10.scopePosture,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    readGateEstablishesGrant: false,
    readGateEstablishesWriteSendOrSignCapability: false,
    readGateEstablishesContentOrMemoryAccess: false,
    sessionGrantsAgentAccess: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "readGateAssessment");
function assessPondLiveSessionReadGate(input) {
  const establishmentLeg = assessPondLiveSessionEstablishment({
    establishmentRecord: input.establishmentRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp6ObservationRecord: input.dp6ObservationRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    dp10ActivationRecord: input.dp10ActivationRecord,
    receiverRetractionRecord: input.receiverRetractionRecord,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs
  });
  const dp10Leg = assessPondPrivateReadActivation({
    activationRecord: input.dp10ActivationRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs
  });
  const mappedEstablishment = {
    state: establishmentLeg.sessionEstablishmentState,
    reason: establishmentLeg.reason
  };
  const mappedDp10 = {
    state: dp10Leg["activationState"],
    reason: dp10Leg.reason,
    scopePosture: dp10Leg["sessionScopePosture"]
  };
  const fallbackDiagnosis = diagnoseGateFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  if (!validReadGateRecord(input.readGateRecord))
    return readGateAssessment(
      "read_gate_record_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedEstablishment,
      mappedDp10,
      [],
      readGateChecks
    );
  const readGate = input.readGateRecord;
  const ownDiagnosis = diagnoseGateFreshness(
    readGate.readGateMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  if (ownDiagnosis.state !== "fresh" || establishmentLeg.sessionEstablishmentState !== "live_session_scoped_authentication_established")
    return readGateAssessment(
      "live_session_not_established_refused_or_not_fresh",
      "pond-live-session-read-gate-d-p15",
      ownDiagnosis,
      mappedEstablishment,
      mappedDp10,
      [],
      readGateChecks
    );
  const values = [
    wellFormedPrincipalRef9(readGate.principalRef),
    wellFormedPrincipalRef9(input.receiverHeldPrincipalRef) && readGate.principalRef === input.receiverHeldPrincipalRef,
    readGate.readGateBasis === "receiver_session_scoped_structural_read_live_use_not_inferred" && readGate.requestedReadScope === "single_principal_own_structural_records",
    establishmentLeg.sessionEstablishmentState === "live_session_scoped_authentication_established",
    dp10Leg["activationState"] === "fixture_structural_session_scoped_private_read_activation",
    readGate.requestedReadScope === "single_principal_own_structural_records" && readGate.collaborativeScopePosture === "not_included_collaborative_requires_their_own_live_session_lane" && readGate.agentScopePosture === "no_agent_session_no_agent_secret_no_agent_admission" && readGate.memoryLaneExclusionPosture === "read_gate_excludes_memory_narrative_transcript_lanes"
  ];
  const satisfied = readGateChecks.filter(
    (_, index) => values[index] === true
  );
  const unsatisfied = readGateChecks.filter(
    (_, index) => values[index] !== true
  );
  if (!values[5])
    return readGateAssessment(
      "collaborative_or_agent_scope_refused",
      "pond-live-session-read-gate-d-p15",
      ownDiagnosis,
      mappedEstablishment,
      mappedDp10,
      [],
      readGateChecks
    );
  return readGateAssessment(
    unsatisfied.length === 0 ? "all_read_gate_checks_satisfied" : "receiver_read_gate_proof_incomplete",
    "pond-live-session-read-gate-d-p15",
    ownDiagnosis,
    mappedEstablishment,
    mappedDp10,
    satisfied,
    unsatisfied
  );
}
__name(assessPondLiveSessionReadGate, "assessPondLiveSessionReadGate");

// src/contracts/pond-conversation-record-admission.ts
var POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS = Object.freeze([
  "agent:fixture:stage-d-p0:trading-desk-agent0",
  "agent:fixture:stage-d-p0:community-agent-slot",
  "agent:fixture:stage-d-p0:project-agent-slot"
]);
var POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS = Object.freeze([
  ...POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS,
  "agentReply",
  "agentReplyComposition",
  "deliveredMessage",
  "replyComposition"
]);
var conversationRecordChecks = Object.freeze([
  "conversation_record_well_formed",
  "conversation_record_bound_to_receiver_held_principal",
  "conversation_record_basis_receiver_composed_not_inferred",
  "conversation_record_trust_epoch_verified_boundary_session_scoped",
  "composed_text_non_empty_within_recorded_maximum",
  "addressed_agent_reference_declared_in_conversation_vocabulary",
  "composed_at_within_current_session_scope",
  "live_session_read_gate_reinspected_live_activated_and_fresh",
  "conversation_record_own_freshness_within_declared_maximum_age"
]);

// src/contracts/pond-delivery-candidate-decision.ts
var POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS = Object.freeze([
  ...POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS,
  "dispatchedMessage",
  "sentMessage",
  "deliveryReceipt",
  "agentTaskAcceptance"
]);
var deliveryCandidateChecks = Object.freeze([
  "delivery_candidate_well_formed",
  "delivery_candidate_bound_to_receiver_held_principal",
  "delivery_basis_receiver_recorded_not_inferred",
  "delivery_destination_declared_in_conversation_vocabulary",
  "delivery_destination_bound_to_delivered_record",
  "delivered_conversation_record_reinspected_admitted_session_scoped",
  "delivery_intent_within_current_session_scope",
  "live_session_read_gate_reinspected_live_activated_and_fresh",
  "delivery_refusal_postures_complete",
  "delivery_intent_own_freshness_within_declared_maximum_age"
]);

// src/contracts/pond-dispatch-decision.ts
var POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS = Object.freeze([
  ...POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS,
  "dispatchReceipt",
  "dispatchQueueEntry",
  "dispatchRetryRecord",
  "externalTransportRecord"
]);
var dispatchChecks = Object.freeze([
  "dispatch_decision_well_formed",
  "dispatch_candidate_bound_to_receiver_held_principal",
  "dispatch_basis_receiver_performed_not_inferred",
  "delivery_candidate_reassessment_currently_prepared",
  "dispatch_event_own_freshness_within_declared_maximum_age",
  "dispatch_event_within_current_session_scope",
  "dispatch_postures_complete"
]);

// src/contracts/pond-delivery-receipt.ts
var POND_STAGE_DP19_DECLARED_RECEIPT_STATES = Object.freeze([
  "accepted_for_delivery",
  "refused",
  "destination_resolved",
  "delivered",
  "failed"
]);
var POND_STAGE_DP19_PERFORMABLE_RECEIPT_STATES = Object.freeze([
  "delivered"
]);
var POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS = Object.freeze([
  ...POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS,
  "receiptSignature",
  "receiptChain",
  "paymentReceipt",
  "resultProof"
]);
var receiptChecks = Object.freeze([
  "receipt_record_well_formed",
  "receipt_derives_from_currently_performed_dispatch",
  "receipt_state_performable_this_cut",
  "receipt_basis_receiver_observed_not_inferred",
  "receipt_proof_binding_agrees_with_dispatch_reassessment",
  "receipt_event_own_freshness_within_declared_maximum_age",
  "receipt_event_after_the_dispatch_it_certifies"
]);

// src/contracts/pond-transport-policy-decision.ts
var POND_STAGE_DP20_PERFORMABLE_TRANSPORT_POLICIES = Object.freeze([
  "in_process_local_conversation_context_delivery_only"
]);
var POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS = Object.freeze([
  ...POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS,
  "transportEndpoint",
  "a2aAgentCard",
  "mcpRuntimeSchema",
  "remoteGrant"
]);
var transportPolicyChecks = Object.freeze([
  "transport_policy_record_well_formed",
  "transport_policy_bound_to_receiver_held_principal",
  "policy_basis_receiver_recorded_not_inferred",
  "transport_policy_in_performable_vocabulary",
  "transport_policy_declares_no_external_transport",
  "delivery_candidate_currently_prepared_reassessed_session_scoped",
  "transport_policy_event_within_current_session_scope",
  "transport_policy_event_own_freshness_within_declared_maximum_age",
  "transport_policy_refusal_postures_complete"
]);

// src/contracts/pond-reply-request-decision.ts
var POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS = Object.freeze([
  ...POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS,
  "agentReplyText",
  "composedAgentReply",
  "claimedAgentReply",
  "providerCredential"
]);
var replyRequestChecks = Object.freeze([
  "reply_request_record_well_formed",
  "reply_request_bound_to_receiver_held_principal",
  "reply_request_basis_receiver_recorded_not_inferred",
  "requested_conversation_record_currently_admitted_reassessed_session_scoped",
  "live_session_read_gate_reinspected_live_activated_and_fresh",
  "reply_request_event_within_current_session_scope",
  "reply_request_event_own_freshness_within_declared_maximum_age",
  "reply_request_refusal_postures_complete"
]);

// src/contracts/pond-voice-input-request-decision.ts
var POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS = Object.freeze([
  ...POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS,
  "capturedAudioRecord",
  "waveformEvidence",
  "claimedVoiceTranscript",
  "audioTranscriptText"
]);
var voiceRequestChecks = Object.freeze([
  "voice_request_record_well_formed",
  "voice_request_bound_to_receiver_held_principal",
  "voice_request_basis_receiver_recorded_not_inferred",
  "live_session_read_gate_reinspected_live_activated_and_fresh",
  "voice_request_event_within_current_session_scope",
  "voice_request_event_own_freshness_within_declared_maximum_age",
  "voice_request_refusal_postures_complete"
]);

// src/contracts/pond-collaborative-read-session-request-decision.ts
var POND_STAGE_DP23_COLLABORATIVE_READ_SESSION_REQUEST_INPUT_KEYS = Object.freeze(
  [
    "collaborativeReadSessionRequest",
    "counterpartJoinDeclarationRecord",
    "receiverHeldPrincipalRef",
    "readGateRecord",
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
    "receiverMaximumAgeMs"
  ]
);
var POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS = Object.freeze([
  ...POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS,
  "collaborativeReadResult",
  "claimedCollaborativeReadContent",
  "counterpartLiveLegs",
  "sharedScopeObject"
]);
var collaborativeReadSessionRequestChecks = Object.freeze([
  "collaborative_read_request_record_well_formed",
  "collaborative_read_request_bound_to_receiver_held_principal",
  "counterpart_join_declared_binding_pairwise_distinct_d_p14",
  "collaborative_read_request_basis_receiver_recorded_not_inferred",
  "live_session_read_gate_reinspected_live_activated_and_fresh",
  "collaborative_read_request_event_within_current_session_scope",
  "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
  "collaborative_read_request_refusal_postures_complete"
]);
var record11 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" && !Array.isArray(value) ? value : null, "record");
var exactArray11 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys11 = /* @__PURE__ */ __name((value, expected) => exactArray11(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var hasForbiddenKey11 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record11(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var wellFormedPrincipalRef10 = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "wellFormedPrincipalRef");
var safeNonNegativeInteger7 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var diagnoseCollaborativeReadRequestFreshness = /* @__PURE__ */ __name((metadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const checked = record11(metadata);
  if (checked === null || !safeNonNegativeInteger7(checked.collaborative_read_requested_at_epoch_ms) || checked.freshness_basis !== "collaborative_read_request_event_time_only" || checked.currentness_posture !== "not_established_consumer_must_evaluate")
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger7(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger7(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null
    });
  const collaborativeReadRequestedAt = checked["collaborative_read_requested_at_epoch_ms"];
  if (collaborativeReadRequestedAt > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null
    });
  const age = evaluatedAtEpochMs - collaborativeReadRequestedAt;
  return Object.freeze(
    age <= maximumAgeMs ? {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: age
    } : {
      state: "stale",
      reason: "declared_maximum_age_expired",
      observationAgeMs: age
    }
  );
}, "diagnoseCollaborativeReadRequestFreshness");
var collaborativeReadRequestBasisVocabulary = [
  "receiver_recorded_collaborative_read_session_request_not_inferred",
  "inferred_from_room_or_conversation_presence",
  "inferred_from_agent_or_provider_membership",
  "inferred_from_two_principals_in_view",
  "asserted_by_counterpart_declaration",
  "replayed_from_prior_collaborative_read_request"
];
var posturesComplete = /* @__PURE__ */ __name((recordValue) => recordValue.collaborativeRequestLanePosture === "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride" && recordValue.collaborativeRequestAudiencePosture === "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref" && recordValue.collaborativeRequestScopePosture === "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created" && recordValue.collaborativeRequestPersonalStatePosture === "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here" && recordValue.counterpartIdentityPosture === "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id" && recordValue.sessionScopePosture === "session_scoped_receiver_restart_ends_request" && recordValue.memoryLaneExclusionPosture === "collaborative_read_request_excludes_memory_narrative_transcript_lanes", "posturesComplete");
var exactCollaborativeReadRequestEventMetadata = /* @__PURE__ */ __name((value) => {
  const metadataValue = record11(value);
  return metadataValue !== null && exactKeys11(metadataValue, [
    "collaborative_read_requested_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger7(
    metadataValue.collaborative_read_requested_at_epoch_ms
  ) && metadataValue.freshness_basis === "collaborative_read_request_event_time_only" && metadataValue.currentness_posture === "not_established_consumer_must_evaluate";
}, "exactCollaborativeReadRequestEventMetadata");
var validCollaborativeReadSessionRequestRecord = /* @__PURE__ */ __name((value) => {
  const requestValue = record11(value);
  return requestValue !== null && exactKeys11(requestValue, [
    "contractVersion",
    "kind",
    "principalRef",
    "counterpartPrincipalRef",
    "collaborativeReadRequestBasis",
    "collaborativeReadRequestMetadata",
    "collaborativeRequestLanePosture",
    "collaborativeRequestAudiencePosture",
    "collaborativeRequestScopePosture",
    "collaborativeRequestPersonalStatePosture",
    "counterpartIdentityPosture",
    "sessionScopePosture",
    "memoryLaneExclusionPosture",
    "authorityPosture",
    "authority"
  ]) && requestValue.contractVersion === "pond-collaborative-read-session-request-decision-d-p23" && requestValue.kind === "pond-collaborative-read-session-request" && collaborativeReadRequestBasisVocabulary.includes(
    String(requestValue.collaborativeReadRequestBasis)
  ) && exactCollaborativeReadRequestEventMetadata(
    requestValue.collaborativeReadRequestMetadata
  ) && wellFormedPrincipalRef10(requestValue.principalRef) && wellFormedPrincipalRef10(requestValue.counterpartPrincipalRef) && posturesComplete(requestValue) && requestValue.authorityPosture === "the_request_grants_no_authority_membership_read_or_admission" && requestValue.authority === "none" && !hasForbiddenKey11(
    requestValue,
    POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS
  );
}, "validCollaborativeReadSessionRequestRecord");
var fullLiveSessionGateLegs = /* @__PURE__ */ __name((input) => ({
  receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
  readGateRecord: input.readGateRecord,
  establishmentRecord: input.establishmentRecord,
  dp5CeremonyRecord: input.dp5CeremonyRecord,
  dp6ObservationRecord: input.dp6ObservationRecord,
  dp8VerifierRecord: input.dp8VerifierRecord,
  dp8ProofRecord: input.dp8ProofRecord,
  dp9IssuanceRecord: input.dp9IssuanceRecord,
  dp9MappingRecord: input.dp9MappingRecord,
  dp10ActivationRecord: input.dp10ActivationRecord,
  receiverRetractionRecord: input.receiverRetractionRecord,
  receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
  receiverMaximumAgeMs: input.receiverMaximumAgeMs
}), "fullLiveSessionGateLegs");
var collaborativeReadRequestAssessment = /* @__PURE__ */ __name((reason, collaborativeReadRequestDecisionVersion, diagnosis, mappedReadGate, mappedEstablishment, mappedDp10, mappedCounterpartJoin, satisfiedChecks, unsatisfiedChecks) => {
  const recorded = reason === "all_collaborative_read_request_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-collaborative-read-session-request-decision-d-p23",
    collaborativeReadRequestDecisionVersion,
    assessmentKind: "deterministic_supplied_collaborative_read_session_request_decision",
    collaborativeReadSessionRequestState: recorded ? "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read" : "collaborative_read_session_request_not_recorded",
    reason,
    collaborativeReadRequestEventFreshnessDiagnosis: diagnosis,
    mappedCounterpartJoinState: mappedCounterpartJoin.state,
    mappedCounterpartJoinReason: mappedCounterpartJoin.reason,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReassessmentReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    mappedEstablishmentState: mappedEstablishment.state,
    mappedEstablishmentReason: mappedEstablishment.reason,
    mappedDp10ActivationState: mappedDp10.state,
    mappedDp10Reason: mappedDp10.reason,
    mappedDp10SessionScopePosture: mappedDp10.scopePosture,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The retention posture: honest re-assessment after retraction — the
    // D-P20 governance posture (a request is session-scoped stance, not
    // frozen evidence).
    collaborativeReadRequestRetentionPosture: "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    // A recorded collaborative-read request is a receiver-side lane
    // declaration, nothing more (see the ceiling commentary on the
    // interface for the law anchors).
    collaborativeReadRequestEstablishesReadOrRecordRead: false,
    collaborativeReadRequestEstablishesReadResult: false,
    collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry: false,
    collaborativeReadRequestEstablishesLiveCounterpartOrChain: false,
    collaborativeReadRequestEstablishesAgentIdentityOrAdmission: false,
    collaborativeReadRequestEstablishesGrant: false,
    collaborativeReadRequestEstablishesConsequenceOrExecution: false,
    collaborativeReadRequestEstablishesAuthorityFromProse: false,
    collaborativeReadRequestEstablishesMembershipOrRoomPresence: false,
    collaborativeReadRequestEstablishesScope: false,
    collaborativeReadRequestCrossesScopeOrAdmitsPersonalState: false,
    collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId: false,
    collaborativeReadRequestConsumedThisCut: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "collaborativeReadRequestAssessment");
function assessPondCollaborativeReadSessionRequestDecision(input) {
  const normalizedInput = record11(input);
  input = normalizedInput === null ? {} : normalizedInput;
  const gateReassessment = assessPondLiveSessionReadGate(
    fullLiveSessionGateLegs(input)
  );
  const counterpartJoinReassessment = assessPondCounterpartJoinDeclaration({
    counterpartDeclarationRecord: input.counterpartJoinDeclarationRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef
  });
  const mappedReadGate = {
    state: gateReassessment["liveSessionReadGateState"],
    reason: gateReassessment["reason"],
    diagnosis: gateReassessment["readGateFreshnessDiagnosis"]
  };
  const mappedEstablishment = {
    state: gateReassessment["mappedLiveSessionEstablishmentState"],
    reason: gateReassessment["mappedLiveSessionEstablishmentReason"]
  };
  const mappedDp10 = {
    state: gateReassessment["mappedDp10ActivationState"],
    reason: gateReassessment["mappedDp10Reason"],
    scopePosture: gateReassessment["mappedDp10SessionScopePosture"]
  };
  const mappedCounterpartJoin = {
    state: counterpartJoinReassessment["joinDeclarationState"],
    reason: counterpartJoinReassessment["reason"]
  };
  const fallbackDiagnosis = diagnoseCollaborativeReadRequestFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  if (!validCollaborativeReadSessionRequestRecord(
    input.collaborativeReadSessionRequest
  ))
    return collaborativeReadRequestAssessment(
      "collaborative_read_request_record_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      mappedCounterpartJoin,
      [],
      collaborativeReadSessionRequestChecks
    );
  const requestValue = input.collaborativeReadSessionRequest;
  const requestEventMetadata = record11(
    requestValue["collaborativeReadRequestMetadata"]
  );
  const collaborativeReadRequestedAt = requestEventMetadata?.["collaborative_read_requested_at_epoch_ms"];
  const requestDiagnosis = diagnoseCollaborativeReadRequestFreshness(
    requestEventMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  if (gateReassessment["liveSessionReadGateState"] !== "live_session_scoped_single_principal_structural_reads_live_activated")
    return collaborativeReadRequestAssessment(
      "live_session_read_gate_not_currently_live",
      "pond-collaborative-read-session-request-decision-d-p23",
      requestDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      mappedCounterpartJoin,
      [],
      collaborativeReadSessionRequestChecks
    );
  if (counterpartJoinReassessment["joinDeclarationState"] !== "fixture_structural_receiver_declared_counterpart_join")
    return collaborativeReadRequestAssessment(
      "counterpart_join_binding_not_established",
      "pond-collaborative-read-session-request-decision-d-p23",
      requestDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      mappedCounterpartJoin,
      [],
      collaborativeReadSessionRequestChecks
    );
  const establishmentMetadata = record11(
    input.establishmentRecord["establishmentMetadata"]
  );
  const establishedAt = establishmentMetadata?.["established_at_epoch_ms"];
  if (typeof establishedAt !== "number" || typeof collaborativeReadRequestedAt !== "number" || collaborativeReadRequestedAt < establishedAt)
    return collaborativeReadRequestAssessment(
      "collaborative_read_request_event_not_of_the_current_session_scope",
      "pond-collaborative-read-session-request-decision-d-p23",
      requestDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      mappedCounterpartJoin,
      [],
      collaborativeReadSessionRequestChecks
    );
  if (requestDiagnosis.state !== "fresh")
    return collaborativeReadRequestAssessment(
      "collaborative_read_request_event_not_session_current",
      "pond-collaborative-read-session-request-decision-d-p23",
      requestDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      mappedCounterpartJoin,
      [],
      collaborativeReadSessionRequestChecks
    );
  const values = [
    true,
    requestValue["principalRef"] === input.receiverHeldPrincipalRef && wellFormedPrincipalRef10(input.receiverHeldPrincipalRef),
    requestValue["counterpartPrincipalRef"] === input.counterpartJoinDeclarationRecord["counterpartPrincipalRef"] && String(requestValue["principalRef"]) !== String(requestValue["counterpartPrincipalRef"]),
    requestValue["collaborativeReadRequestBasis"] === "receiver_recorded_collaborative_read_session_request_not_inferred",
    gateReassessment["liveSessionReadGateState"] === "live_session_scoped_single_principal_structural_reads_live_activated" && gateReassessment["readGateFreshnessDiagnosis"].state === "fresh",
    typeof establishedAt === "number" && typeof collaborativeReadRequestedAt === "number" && collaborativeReadRequestedAt >= establishedAt,
    requestDiagnosis.state === "fresh",
    posturesComplete(requestValue)
  ];
  const satisfied = collaborativeReadSessionRequestChecks.filter(
    (_, index) => values[index] === true
  );
  const unsatisfied = collaborativeReadSessionRequestChecks.filter(
    (_, index) => values[index] !== true
  );
  return collaborativeReadRequestAssessment(
    unsatisfied.length === 0 ? "all_collaborative_read_request_checks_satisfied" : "receiver_collaborative_read_request_proof_incomplete",
    "pond-collaborative-read-session-request-decision-d-p23",
    requestDiagnosis,
    mappedReadGate,
    mappedEstablishment,
    mappedDp10,
    mappedCounterpartJoin,
    satisfied,
    unsatisfied
  );
}
__name(assessPondCollaborativeReadSessionRequestDecision, "assessPondCollaborativeReadSessionRequestDecision");

// src/contracts/pond-collaborative-read-admission.ts
var POND_STAGE_DP14_COLLABORATIVE_READ_TARGET_REFS = Object.freeze([
  "receiver-record:pond-local-principal-binding-establishment-d-p5",
  "receiver-record:pond-local-principal-authentication-observation-d-p6",
  "receiver-record:pond-local-authentication-mechanic-d-p8",
  "receiver-record:pond-local-principal-id-issuance-d-p9",
  "receiver-record:pond-erc8004-identity-mapping-d-p9",
  "receiver-record:pond-principal-identity-readiness-composition-d-p9",
  "receiver-record:pond-private-read-activation-d-p10",
  "counterpart-record:pond-local-principal-binding-establishment-d-p5",
  "counterpart-record:pond-local-principal-authentication-observation-d-p6",
  "counterpart-record:pond-local-authentication-mechanic-d-p8",
  "counterpart-record:pond-collaborative-read-counterpart-declaration-d-p14",
  "collaborative-record:pond-collaborative-read-activation-d-p14",
  "collaborative-record:pond-collaborative-read-admission-d-p14"
]);
var admissionChecks = Object.freeze([
  "read_admission_bound_to_both_declared_principals",
  "read_basis_explicitly_receiver_owned_not_inferred",
  "read_class_structural_records_only",
  "read_targets_within_collaborative_activation_scope",
  "read_admission_excludes_memory_and_lane_content",
  "read_admission_requires_no_grant_and_stays_revocable",
  "read_admission_inspection_is_the_gate_recomputation"
]);
var record12 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" ? value : null, "record");
var exactArray12 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys12 = /* @__PURE__ */ __name((value, expected) => exactArray12(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var hasForbiddenKey12 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record12(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var wellFormedPrincipalRef11 = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "wellFormedPrincipalRef");
var safeNonNegativeInteger8 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var validCollaborativeActivationStructure = /* @__PURE__ */ __name((value, receiverHeldPrincipalRef, counterpartPrincipalRef) => {
  const activation = record12(value);
  const metadata = record12(activation?.activationMetadata);
  return activation !== null && exactKeys12(activation, [
    "contractVersion",
    "kind",
    "receiverHeldPrincipalRef",
    "counterpartPrincipalRef",
    "activationBasis",
    "activatedCapability",
    "activationMetadata",
    "effectiveCapabilityScopePosture",
    "multiPrincipalReadScopePosture",
    "sessionScopePosture",
    "revocabilityPosture",
    "trustedPolicyAttributionPosture",
    "grantSufficiencyPosture",
    "counterpartIdentityPosture",
    "consentPosture",
    "memoryLaneExclusionPosture",
    "authority"
  ]) && activation.contractVersion === "pond-collaborative-read-activation-d-p14" && activation.kind === "pond-collaborative-read-activation" && activation.receiverHeldPrincipalRef === receiverHeldPrincipalRef && activation.counterpartPrincipalRef === counterpartPrincipalRef && activation.activationBasis === "receiver_explicit_collaborative_activation_not_inferred" && activation.activatedCapability === "collaborative_structural_records_read_of_both_declared_principals" && metadata !== null && exactKeys12(metadata, [
    "activated_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger8(metadata.activated_at_epoch_ms) && metadata.freshness_basis === "activation_event_time_only" && metadata.currentness_posture === "not_established_consumer_must_evaluate" && activation.effectiveCapabilityScopePosture === "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory" && activation.multiPrincipalReadScopePosture === "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory" && activation.sessionScopePosture === "session_scoped_receiver_restart_ends_activation" && activation.revocabilityPosture === "collaborative_activation_revocable_by_receiver_retraction" && activation.trustedPolicyAttributionPosture === "activation_attributable_to_receiver_trusted_runtime_policy_no_grant" && activation.grantSufficiencyPosture === "activation_requires_no_grant" && activation.counterpartIdentityPosture === "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity" && activation.consentPosture === "receiver_recorded_session_join_only_no_counterpart_consent_claim" && activation.memoryLaneExclusionPosture === "activation_excludes_memory_narrative_transcript_lanes" && activation.authority === "none" && !hasForbiddenKey12(
    activation,
    POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS
  );
}, "validCollaborativeActivationStructure");
var validReadAdmissionRecord = /* @__PURE__ */ __name((value) => {
  const admission = record12(value);
  if (admission === null) return false;
  if (!exactKeys12(admission, [
    "contractVersion",
    "kind",
    "receiverHeldPrincipalRef",
    "counterpartPrincipalRef",
    "readClass",
    "readTargetRefs",
    "readBasis",
    "activationBindingPosture",
    "inspectionPosture",
    "scopingPosture",
    "truthPosture",
    "grantSufficiencyPosture",
    "laneExclusionPosture",
    "counterpartScopeExclusionPosture",
    "revocabilityPosture",
    "authority"
  ]))
    return false;
  if (admission.contractVersion !== "pond-collaborative-read-admission-d-p14" || admission.kind !== "pond-collaborative-read-admission" || !wellFormedPrincipalRef11(admission.receiverHeldPrincipalRef) || !wellFormedPrincipalRef11(admission.counterpartPrincipalRef) || String(admission.receiverHeldPrincipalRef) === String(admission.counterpartPrincipalRef))
    return false;
  if (![
    "principal_structural_record_read",
    "lane_content_read",
    "authority_record_read",
    "credential_record_read",
    "counterpart_private_state_read"
  ].includes(String(admission.readClass)))
    return false;
  const targets = admission.readTargetRefs;
  if (!Array.isArray(targets) || targets.length === 0 || !targets.every(
    (target) => typeof target === "string" && POND_STAGE_DP14_COLLABORATIVE_READ_TARGET_REFS.includes(target)
  ))
    return false;
  if (![
    "receiver_requested_collaborative_structural_records_read",
    "inferred_from_joint_session_join",
    "derived_from_single_principal_activations",
    "inferred_from_chain_completion",
    "lane_content_read_requested",
    "authority_record_read_requested",
    "credential_record_read_requested",
    "counterpart_private_state_read_requested"
  ].includes(String(admission.readBasis)))
    return false;
  return admission.activationBindingPosture === "read_admitted_only_within_session_scoped_collaborative_activation" && admission.inspectionPosture === "receiver_upstream_assessors_recomputed_by_the_d_p14_gate" && admission.scopingPosture === "audience_bound_to_the_two_declared_principals_only" && admission.truthPosture === "structural_presence_only_no_current_truth_claim" && admission.grantSufficiencyPosture === "read_requires_no_grant_receiver_trusted_policy_scope" && admission.laneExclusionPosture === "admission_excludes_memory_narrative_transcript_lanes" && admission.counterpartScopeExclusionPosture === "counterpart_records_structural_only_no_counterpart_private_state_read" && [
    "not_established",
    "read_revocable_by_activation_retraction"
  ].includes(String(admission.revocabilityPosture)) && admission.authority === "none" && !hasForbiddenKey12(
    admission,
    POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS
  );
}, "validReadAdmissionRecord");
var admissionAssessment = /* @__PURE__ */ __name((reason, admissionRecordVersion, mappedCounterpartJoin, admissionSessionScopePosture, admittedTargetRefs, satisfiedChecks, unsatisfiedChecks) => {
  const admitted = reason === "all_collaborative_read_admission_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-collaborative-read-admission-d-p14",
    admissionRecordVersion,
    assessmentKind: "deterministic_supplied_collaborative_read_admission",
    collaborativeReadAdmissionState: admitted ? "fixture_structural_collaborative_structural_record_read_admitted" : "not_admitted",
    reason,
    admittedTargetRefs: Object.freeze([
      ...admitted ? admittedTargetRefs : []
    ]),
    mappedCounterpartJoin,
    admissionSessionScopePosture,
    effectiveReadScopePosture: "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
    readTruthPosture: "structural_presence_only_no_current_truth_claim",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The admitted collaborative read is non-grant receiver
    // trusted-policy scope only: it never becomes a grant, a credential
    // admission, an authentication, an authorization by PrincipalId,
    // either principal's memory content, an opened counterpart consent, a
    // current-truth claim, or authority.
    collaborativeReadEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    counterpartMemoryContentAdmitted: false,
    counterpartConsentEstablished: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "admissionAssessment");
var allAdmissionChecks = admissionChecks;
var neverAdmittedJoinEcho = Object.freeze({
  joinDeclarationState: "join_not_established",
  reason: "counterpart_declaration_record_invalid"
});
function assessPondCollaborativeReadAdmission(input) {
  const receiverHeldPrincipalRef = input.receiverHeldPrincipalRef;
  const counterpartPrincipalRef = input.counterpartPrincipalRef;
  const refsWellFormedAndDistinct = wellFormedPrincipalRef11(receiverHeldPrincipalRef) && wellFormedPrincipalRef11(counterpartPrincipalRef) && String(receiverHeldPrincipalRef) !== String(counterpartPrincipalRef);
  if (!validReadAdmissionRecord(input.readAdmissionRecord))
    return admissionAssessment(
      "admission_record_invalid",
      "invalid",
      neverAdmittedJoinEcho,
      "not_established",
      [],
      [],
      allAdmissionChecks
    );
  if (!refsWellFormedAndDistinct || !validCollaborativeActivationStructure(
    input.collaborativeActivationRecord,
    receiverHeldPrincipalRef,
    counterpartPrincipalRef
  ))
    return admissionAssessment(
      "collaborative_activation_record_invalid",
      "pond-collaborative-read-admission-d-p14",
      neverAdmittedJoinEcho,
      "not_established",
      [],
      [],
      allAdmissionChecks
    );
  const jointAssessment = assessPondCounterpartJoinDeclaration({
    counterpartDeclarationRecord: input.counterpartJoinDeclarationRecord,
    receiverHeldPrincipalRef
  });
  const joinEcho = Object.freeze({
    joinDeclarationState: jointAssessment.joinDeclarationState,
    reason: jointAssessment.reason
  });
  if (jointAssessment.joinDeclarationState !== "fixture_structural_receiver_declared_counterpart_join")
    return admissionAssessment(
      "counterpart_join_binding_not_established",
      "pond-collaborative-read-admission-d-p14",
      joinEcho,
      "not_established",
      [],
      [],
      allAdmissionChecks
    );
  const admission = input.readAdmissionRecord;
  const targets = admission.readTargetRefs.map(
    (target) => String(target)
  );
  const targetsInScope = activationBindingValid(admission, input.collaborativeActivationRecord) && targets.every(
    (target) => POND_STAGE_DP14_COLLABORATIVE_READ_TARGET_REFS.includes(target)
  );
  const values = [
    // read_admission_bound_to_both_declared_principals
    admission.receiverHeldPrincipalRef === receiverHeldPrincipalRef && admission.counterpartPrincipalRef === counterpartPrincipalRef,
    // read_basis_explicitly_receiver_owned_not_inferred
    admission.readBasis === "receiver_requested_collaborative_structural_records_read",
    // read_class_structural_records_only
    admission.readClass === "principal_structural_record_read",
    // read_targets_within_collaborative_activation_scope
    targetsInScope,
    // read_admission_excludes_memory_and_lane_content
    admission.laneExclusionPosture === "admission_excludes_memory_narrative_transcript_lanes" && admission.counterpartScopeExclusionPosture === "counterpart_records_structural_only_no_counterpart_private_state_read" && admission.truthPosture === "structural_presence_only_no_current_truth_claim",
    // read_admission_requires_no_grant_and_stays_revocable
    admission.grantSufficiencyPosture === "read_requires_no_grant_receiver_trusted_policy_scope" && admission.revocabilityPosture === "read_revocable_by_activation_retraction",
    // read_admission_inspection_is_the_gate_recomputation
    admission.inspectionPosture === "receiver_upstream_assessors_recomputed_by_the_d_p14_gate"
  ];
  const satisfied = admissionChecks.filter((_, index) => values[index] === true);
  const unsatisfied = admissionChecks.filter((_, index) => values[index] !== true);
  const admitted = unsatisfied.length === 0;
  return admissionAssessment(
    admitted ? "all_collaborative_read_admission_checks_satisfied" : "receiver_read_admission_proof_incomplete",
    "pond-collaborative-read-admission-d-p14",
    joinEcho,
    "session_scoped_receiver_restart_ends_activation",
    targets,
    satisfied,
    unsatisfied
  );
}
__name(assessPondCollaborativeReadAdmission, "assessPondCollaborativeReadAdmission");
var activationBindingValid = /* @__PURE__ */ __name((admission, collaborativeActivationRecord) => {
  const activation = record12(collaborativeActivationRecord);
  if (activation === null) return false;
  const metadata = record12(activation.activationMetadata);
  return activation.receiverHeldPrincipalRef === admission.receiverHeldPrincipalRef && activation.counterpartPrincipalRef === admission.counterpartPrincipalRef && activation.sessionScopePosture === "session_scoped_receiver_restart_ends_activation" && metadata !== null && safeNonNegativeInteger8(metadata.activated_at_epoch_ms);
}, "activationBindingValid");

// src/contracts/pond-collaborative-read-live-admission-decision.ts
var POND_STAGE_DP23_COLLABORATIVE_READ_LIVE_ADMISSION_DECISION_INPUT_KEYS = Object.freeze(
  [
    "collaborativeReadLiveAdmission",
    "receiverHeldPrincipalRef",
    "counterpartPrincipalRef",
    "collaborativeReadSessionRequest",
    "counterpartJoinDeclarationRecord",
    "collaborativeActivationRecord",
    "readAdmissionRecord",
    "readGateRecord",
    "establishmentRecord",
    "dp5CeremonyRecord",
    "dp6ObservationRecord",
    "dp8VerifierRecord",
    "dp8ProofRecord",
    "dp9IssuanceRecord",
    "dp9MappingRecord",
    "dp10ActivationRecord",
    "receiverRetractionRecord",
    "counterpartDp5CeremonyRecord",
    "counterpartDp6ObservationRecord",
    "counterpartDp8VerifierRecord",
    "counterpartDp8ProofRecord",
    "counterpartDp9IssuanceRecord",
    "counterpartDp9MappingRecord",
    "counterpartDp10ActivationRecord",
    "evaluatedAtEpochMs",
    "maximumAgeMs"
  ]
);
var collaborativeLiveReadChecks = Object.freeze([
  "collaborative_live_read_record_well_formed",
  "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
  "collaborative_live_read_basis_receiver_performed_not_inferred",
  "collaborative_read_request_currently_recorded_reassessed",
  "live_session_read_gate_reinspected_live_activated_and_fresh",
  "frozen_dp14_collaborative_activation_reinspected_activated",
  "frozen_dp14_collaborative_admission_reinspected_admitted",
  "collaborative_live_read_event_within_current_session_scope",
  "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
  "collaborative_live_read_refusal_postures_complete"
]);
var record13 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" && !Array.isArray(value) ? value : null, "record");
var exactArray13 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys13 = /* @__PURE__ */ __name((value, expected) => exactArray13(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var hasForbiddenKey13 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record13(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var wellFormedPrincipalRef12 = /* @__PURE__ */ __name((value) => typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length, "wellFormedPrincipalRef");
var safeNonNegativeInteger9 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var diagnoseCollaborativeLiveReadFreshness = /* @__PURE__ */ __name((metadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const checked = record13(metadata);
  if (checked === null || !safeNonNegativeInteger9(
    checked.collaborative_live_read_recorded_at_epoch_ms
  ) || checked.freshness_basis !== "collaborative_live_read_event_time_only" || checked.currentness_posture !== "not_established_consumer_must_evaluate")
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger9(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger9(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null
    });
  const collaborativeLiveReadRecordedAt = checked["collaborative_live_read_recorded_at_epoch_ms"];
  if (collaborativeLiveReadRecordedAt > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null
    });
  const age = evaluatedAtEpochMs - collaborativeLiveReadRecordedAt;
  return Object.freeze(
    age <= maximumAgeMs ? {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: age
    } : {
      state: "stale",
      reason: "declared_maximum_age_expired",
      observationAgeMs: age
    }
  );
}, "diagnoseCollaborativeLiveReadFreshness");
var collaborativeLiveReadBasisVocabulary = [
  "receiver_performed_collaborative_live_read_not_inferred",
  "derived_from_single_principal_activations",
  "inferred_from_counterpart_presence",
  "inferred_from_structural_chain_readiness",
  "asserted_by_counterpart",
  "replayed_from_prior_collaborative_live_read"
];
var posturesComplete2 = /* @__PURE__ */ __name((recordValue) => recordValue.requestedCollaborativeReadScope === "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory" && recordValue.audienceBindingPosture === "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix" && recordValue.counterpartChainPosture === "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists" && recordValue.scopeCrossingPosture === "no_scope_crossing_no_release_recorded_memory_never_crosses" && recordValue.scopeObjectPosture === "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership" && recordValue.truthPosture === "structural_presence_only_no_current_truth_claim" && recordValue.sessionScopePosture === "session_scoped_receiver_restart_ends_the_live_read" && recordValue.revocabilityPosture === "live_read_revocable_by_receiver_retraction" && recordValue.erc8004EvidencePosture === "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission" && recordValue.authorityPosture === "the_live_read_admission_grants_no_authority_membership_or_capability", "posturesComplete");
var exactCollaborativeLiveReadEventMetadata = /* @__PURE__ */ __name((value) => {
  const metadataValue = record13(value);
  return metadataValue !== null && exactKeys13(metadataValue, [
    "collaborative_live_read_recorded_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger9(
    metadataValue.collaborative_live_read_recorded_at_epoch_ms
  ) && metadataValue.freshness_basis === "collaborative_live_read_event_time_only" && metadataValue.currentness_posture === "not_established_consumer_must_evaluate";
}, "exactCollaborativeLiveReadEventMetadata");
var validCollaborativeLiveReadRecord = /* @__PURE__ */ __name((value) => {
  const liveReadValue = record13(value);
  return liveReadValue !== null && exactKeys13(liveReadValue, [
    "contractVersion",
    "kind",
    "receiverHeldPrincipalRef",
    "counterpartPrincipalRef",
    "collaborativeLiveReadBasis",
    "collaborativeLiveReadMetadata",
    "requestedCollaborativeReadScope",
    "audienceBindingPosture",
    "counterpartChainPosture",
    "scopeCrossingPosture",
    "scopeObjectPosture",
    "truthPosture",
    "sessionScopePosture",
    "revocabilityPosture",
    "erc8004EvidencePosture",
    "authorityPosture",
    "authority"
  ]) && liveReadValue.contractVersion === "pond-collaborative-read-live-admission-decision-d-p23" && liveReadValue.kind === "pond-collaborative-read-live-admission" && collaborativeLiveReadBasisVocabulary.includes(
    String(liveReadValue.collaborativeLiveReadBasis)
  ) && exactCollaborativeLiveReadEventMetadata(
    liveReadValue.collaborativeLiveReadMetadata
  ) && wellFormedPrincipalRef12(liveReadValue.receiverHeldPrincipalRef) && wellFormedPrincipalRef12(liveReadValue.counterpartPrincipalRef) && String(liveReadValue.receiverHeldPrincipalRef) !== String(liveReadValue.counterpartPrincipalRef) && posturesComplete2(liveReadValue) && liveReadValue.authority === "none" && !hasForbiddenKey13(
    liveReadValue,
    POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS
  );
}, "validCollaborativeLiveReadRecord");
var fullLiveSessionGateLegs2 = /* @__PURE__ */ __name((input) => ({
  receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
  readGateRecord: input.readGateRecord,
  establishmentRecord: input.establishmentRecord,
  dp5CeremonyRecord: input.dp5CeremonyRecord,
  dp6ObservationRecord: input.dp6ObservationRecord,
  dp8VerifierRecord: input.dp8VerifierRecord,
  dp8ProofRecord: input.dp8ProofRecord,
  dp9IssuanceRecord: input.dp9IssuanceRecord,
  dp9MappingRecord: input.dp9MappingRecord,
  dp10ActivationRecord: input.dp10ActivationRecord,
  receiverRetractionRecord: input.receiverRetractionRecord,
  receiverEvaluatedAtEpochMs: input.evaluatedAtEpochMs,
  receiverMaximumAgeMs: input.maximumAgeMs
}), "fullLiveSessionGateLegs");
var fullRequestCeremonyLegs = /* @__PURE__ */ __name((input) => ({
  collaborativeReadSessionRequest: input.collaborativeReadSessionRequest,
  counterpartJoinDeclarationRecord: input.counterpartJoinDeclarationRecord,
  receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
  readGateRecord: input.readGateRecord,
  establishmentRecord: input.establishmentRecord,
  dp5CeremonyRecord: input.dp5CeremonyRecord,
  dp6ObservationRecord: input.dp6ObservationRecord,
  dp8VerifierRecord: input.dp8VerifierRecord,
  dp8ProofRecord: input.dp8ProofRecord,
  dp9IssuanceRecord: input.dp9IssuanceRecord,
  dp9MappingRecord: input.dp9MappingRecord,
  dp10ActivationRecord: input.dp10ActivationRecord,
  receiverRetractionRecord: input.receiverRetractionRecord,
  receiverEvaluatedAtEpochMs: input.evaluatedAtEpochMs,
  receiverMaximumAgeMs: input.maximumAgeMs
}), "fullRequestCeremonyLegs");
var fullDp14ActivationLegs = /* @__PURE__ */ __name((input) => ({
  activationRecord: input.collaborativeActivationRecord,
  receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
  counterpartPrincipalRef: input.counterpartPrincipalRef,
  counterpartJoinDeclarationRecord: input.counterpartJoinDeclarationRecord,
  receiverDp5CeremonyRecord: input.dp5CeremonyRecord,
  receiverDp6ObservationRecord: input.dp6ObservationRecord,
  receiverDp8VerifierRecord: input.dp8VerifierRecord,
  receiverDp8ProofRecord: input.dp8ProofRecord,
  receiverDp9IssuanceRecord: input.dp9IssuanceRecord,
  receiverDp9MappingRecord: input.dp9MappingRecord,
  receiverDp10ActivationRecord: input.dp10ActivationRecord,
  counterpartDp5CeremonyRecord: input.counterpartDp5CeremonyRecord,
  counterpartDp6ObservationRecord: input.counterpartDp6ObservationRecord,
  counterpartDp8VerifierRecord: input.counterpartDp8VerifierRecord,
  counterpartDp8ProofRecord: input.counterpartDp8ProofRecord,
  counterpartDp9IssuanceRecord: input.counterpartDp9IssuanceRecord,
  counterpartDp9MappingRecord: input.counterpartDp9MappingRecord,
  counterpartDp10ActivationRecord: input.counterpartDp10ActivationRecord,
  evaluatedAtEpochMs: input.evaluatedAtEpochMs,
  maximumAgeMs: input.maximumAgeMs
}), "fullDp14ActivationLegs");
var fullDp14AdmissionLegs = /* @__PURE__ */ __name((input) => ({
  readAdmissionRecord: input.readAdmissionRecord,
  collaborativeActivationRecord: input.collaborativeActivationRecord,
  counterpartJoinDeclarationRecord: input.counterpartJoinDeclarationRecord,
  receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
  counterpartPrincipalRef: input.counterpartPrincipalRef
}), "fullDp14AdmissionLegs");
var collaborativeLiveReadAssessment = /* @__PURE__ */ __name((reason, collaborativeLiveReadDecisionVersion, diagnosis, mappedRequest, mappedReadGate, mappedDp14Activation, mappedDp14ReceiverChain, mappedDp14CounterpartChain, mappedDp14Admission, admittedTargetRefs, satisfiedChecks, unsatisfiedChecks) => {
  const recorded = reason === "all_collaborative_live_read_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-collaborative-read-live-admission-decision-d-p23",
    collaborativeLiveReadDecisionVersion,
    assessmentKind: "deterministic_supplied_collaborative_live_read_admission_decision",
    collaborativeLiveReadState: recorded ? "collaborative_live_structural_records_read_admitted_session_scoped_no_scope_object_no_content" : "collaborative_live_read_not_recorded",
    reason,
    collaborativeLiveReadEventFreshnessDiagnosis: diagnosis,
    mappedCollaborativeReadRequestState: mappedRequest.state,
    mappedReadRequestReassessmentReason: mappedRequest.reason,
    mappedReadRequestFreshnessDiagnosis: mappedRequest.diagnosis,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReassessmentReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    mappedDp14ActivationState: mappedDp14Activation.state,
    mappedDp14ActivationReason: mappedDp14Activation.reason,
    mappedDp14ReceiverChain,
    mappedDp14CounterpartChain,
    mappedDp14AdmissionState: mappedDp14Admission.state,
    mappedDp14AdmissionReason: mappedDp14Admission.reason,
    recordedAdmittedTargetRefs: Object.freeze([...admittedTargetRefs]),
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The retention posture: honest re-assessment after retraction — the
    // D-P20 governance posture (a recorded admission is session-scoped
    // stance, not frozen evidence).
    collaborativeLiveReadRetentionPosture: "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    // A performed collaborative live read is an admitted structural
    // inspection scope, nothing more (see the ceiling commentary on the
    // interface for the law anchors).
    collaborativeLiveReadEstablishesReadResultOrContent: false,
    collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry: false,
    collaborativeLiveReadEstablishesLiveCounterpartOrChain: false,
    collaborativeLiveReadEstablishesAgentIdentityOrAdmission: false,
    collaborativeLiveReadEstablishesGrant: false,
    collaborativeLiveReadEstablishesConsequenceOrExecution: false,
    collaborativeLiveReadEstablishesAuthorityFromProse: false,
    collaborativeLiveReadEstablishesMembershipOrRoomPresence: false,
    collaborativeLiveReadEstablishesScope: false,
    collaborativeLiveReadCrossesScopeOrAdmitsPersonalState: false,
    collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent: false,
    collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId: false,
    collaborativeLiveReadConsumedThisCut: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "collaborativeLiveReadAssessment");
function assessPondCollaborativeReadLiveAdmissionDecision(input) {
  const normalizedInput = record13(input);
  input = normalizedInput === null ? {} : normalizedInput;
  const requestReassessment = assessPondCollaborativeReadSessionRequestDecision(
    fullRequestCeremonyLegs(input)
  );
  const gateReassessment = assessPondLiveSessionReadGate(
    fullLiveSessionGateLegs2(input)
  );
  const dp14ActivationReassessment = assessPondCollaborativeReadActivation(
    fullDp14ActivationLegs(input)
  );
  const dp14AdmissionReassessment = assessPondCollaborativeReadAdmission(
    fullDp14AdmissionLegs(input)
  );
  const mappedRequest = {
    state: requestReassessment["collaborativeReadSessionRequestState"],
    reason: requestReassessment["reason"],
    diagnosis: requestReassessment["collaborativeReadRequestEventFreshnessDiagnosis"]
  };
  const mappedReadGate = {
    state: gateReassessment["liveSessionReadGateState"],
    reason: gateReassessment["reason"],
    diagnosis: gateReassessment["readGateFreshnessDiagnosis"]
  };
  const mappedDp14Activation = {
    state: dp14ActivationReassessment["collaborativeReadActivationState"],
    reason: dp14ActivationReassessment["reason"]
  };
  const mappedDp14ReceiverChain = dp14ActivationReassessment["receiverChain"];
  const mappedDp14CounterpartChain = dp14ActivationReassessment["counterpartChain"];
  const mappedDp14Admission = {
    state: dp14AdmissionReassessment["collaborativeReadAdmissionState"],
    reason: dp14AdmissionReassessment["reason"]
  };
  const admittedTargetRefs = dp14AdmissionReassessment["admittedTargetRefs"];
  const fallbackDiagnosis = diagnoseCollaborativeLiveReadFreshness(
    null,
    input.evaluatedAtEpochMs,
    input.maximumAgeMs
  );
  if (!validCollaborativeLiveReadRecord(input.collaborativeReadLiveAdmission))
    return collaborativeLiveReadAssessment(
      "collaborative_live_read_record_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks
    );
  const liveReadValue = input.collaborativeReadLiveAdmission;
  const liveReadEventMetadata = record13(
    liveReadValue["collaborativeLiveReadMetadata"]
  );
  const collaborativeLiveReadRecordedAt = liveReadEventMetadata?.["collaborative_live_read_recorded_at_epoch_ms"];
  const liveReadDiagnosis = diagnoseCollaborativeLiveReadFreshness(
    liveReadEventMetadata,
    input.evaluatedAtEpochMs,
    input.maximumAgeMs
  );
  if (gateReassessment["liveSessionReadGateState"] !== "live_session_scoped_single_principal_structural_reads_live_activated")
    return collaborativeLiveReadAssessment(
      "live_session_read_gate_not_currently_live",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks
    );
  if (requestReassessment["collaborativeReadSessionRequestState"] !== "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read")
    return collaborativeLiveReadAssessment(
      "collaborative_read_request_not_currently_recorded",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks
    );
  const dp14Reason = dp14ActivationReassessment["reason"];
  if (dp14Reason === "receiver_chain_not_structurally_ready_or_current")
    return collaborativeLiveReadAssessment(
      "frozen_dp14_receiver_chain_not_ready_or_current",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks
    );
  if (dp14Reason === "counterpart_chain_not_structurally_verified")
    return collaborativeLiveReadAssessment(
      "counterpart_chain_refused_structural_never_issued_or_not_current",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks
    );
  if (dp14Reason === "collaborative_activation_not_session_current")
    return collaborativeLiveReadAssessment(
      "frozen_dp14_collaborative_activation_not_session_current",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks
    );
  if (dp14AdmissionReassessment["collaborativeReadAdmissionState"] !== "fixture_structural_collaborative_structural_record_read_admitted")
    return collaborativeLiveReadAssessment(
      "frozen_dp14_admission_refused",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks
    );
  const establishmentMetadata = record13(
    input.establishmentRecord["establishmentMetadata"]
  );
  const establishedAt = establishmentMetadata?.["established_at_epoch_ms"];
  if (typeof establishedAt !== "number" || typeof collaborativeLiveReadRecordedAt !== "number" || collaborativeLiveReadRecordedAt < establishedAt)
    return collaborativeLiveReadAssessment(
      "collaborative_live_read_event_not_of_the_current_session_scope",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks
    );
  if (liveReadDiagnosis.state !== "fresh")
    return collaborativeLiveReadAssessment(
      "collaborative_live_read_event_not_session_current",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks
    );
  const values = [
    true,
    liveReadValue["receiverHeldPrincipalRef"] === input.receiverHeldPrincipalRef && liveReadValue["counterpartPrincipalRef"] === input.counterpartPrincipalRef && wellFormedPrincipalRef12(input.receiverHeldPrincipalRef) && wellFormedPrincipalRef12(input.counterpartPrincipalRef) && String(input.receiverHeldPrincipalRef) !== String(input.counterpartPrincipalRef),
    liveReadValue["collaborativeLiveReadBasis"] === "receiver_performed_collaborative_live_read_not_inferred",
    requestReassessment["collaborativeReadSessionRequestState"] === "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
    gateReassessment["liveSessionReadGateState"] === "live_session_scoped_single_principal_structural_reads_live_activated" && gateReassessment["readGateFreshnessDiagnosis"].state === "fresh",
    dp14ActivationReassessment["collaborativeReadActivationState"] === "fixture_structural_session_scoped_collaborative_structural_read_activation",
    dp14AdmissionReassessment["collaborativeReadAdmissionState"] === "fixture_structural_collaborative_structural_record_read_admitted",
    typeof establishedAt === "number" && typeof collaborativeLiveReadRecordedAt === "number" && collaborativeLiveReadRecordedAt >= establishedAt,
    liveReadDiagnosis.state === "fresh",
    posturesComplete2(liveReadValue)
  ];
  const satisfied = collaborativeLiveReadChecks.filter(
    (_, index) => values[index] === true
  );
  const unsatisfied = collaborativeLiveReadChecks.filter(
    (_, index) => values[index] !== true
  );
  return collaborativeLiveReadAssessment(
    unsatisfied.length === 0 ? "all_collaborative_live_read_checks_satisfied" : "receiver_collaborative_live_read_proof_incomplete",
    "pond-collaborative-read-live-admission-decision-d-p23",
    liveReadDiagnosis,
    mappedRequest,
    mappedReadGate,
    mappedDp14Activation,
    mappedDp14ReceiverChain,
    mappedDp14CounterpartChain,
    mappedDp14Admission,
    admittedTargetRefs,
    satisfied,
    unsatisfied
  );
}
__name(assessPondCollaborativeReadLiveAdmissionDecision, "assessPondCollaborativeReadLiveAdmissionDecision");

// src/contracts/pond-claimed-collaborative-read-refusal.ts
var contentClassVocabulary = [
  "receiver_structural_record_content",
  "counterpart_structural_record_content",
  "joint_collaborative_read_content"
];
var POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES = Object.freeze([
  "receiver_structural_record_content",
  "counterpart_structural_record_content",
  "joint_collaborative_read_content"
]);
var claimedCollaborativeReadChecks = Object.freeze([
  "pond_claimed_collaborative_read_claim_well_formed",
  "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary",
  "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime",
  "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership"
]);
var record14 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" && !Array.isArray(value) ? value : null, "record");
var exactArray14 = /* @__PURE__ */ __name((value, expected) => Array.isArray(value) && value.length === expected.length && value.every((entry, index) => entry === expected[index]), "exactArray");
var exactKeys14 = /* @__PURE__ */ __name((value, expected) => exactArray14(Object.keys(value).sort(), [...expected].sort()), "exactKeys");
var hasForbiddenKey14 = /* @__PURE__ */ __name((value, forbidden) => {
  const stack = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record14(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
}, "hasForbiddenKey");
var nonEmptyString = /* @__PURE__ */ __name((value) => typeof value === "string" && value.length > 0, "nonEmptyString");
var validClaimedCollaborativeRead = /* @__PURE__ */ __name((value) => {
  const claimValue = record14(value);
  return claimValue !== null && exactKeys14(claimValue, [
    "claimedCollaborativeReadText",
    "claimedCollaborativeReadClass",
    "claimedCollaborativeReadSourceRef"
  ]) && nonEmptyString(claimValue.claimedCollaborativeReadText) && nonEmptyString(claimValue.claimedCollaborativeReadClass) && nonEmptyString(claimValue.claimedCollaborativeReadSourceRef) && !hasForbiddenKey14(
    claimValue,
    POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS
  );
}, "validClaimedCollaborativeRead");
var refusalAssessment = /* @__PURE__ */ __name((reason, claimedCollaborativeReadRefusalVersion, satisfiedChecks, unsatisfiedChecks) => {
  return Object.freeze({
    contractVersion: "pond-claimed-collaborative-read-refusal-d-p23",
    claimedCollaborativeReadRefusalVersion,
    assessmentKind: "deterministic_supplied_claimed_collaborative_read_refusal",
    claimedCollaborativeReadState: "claimed_collaborative_read_content_not_composed",
    reason,
    // The standing posture: the wall is standing and fail-closed on
    // every arm — nothing this cut assesses composes a collaborative
    // read result.
    claimedCollaborativeReadWallPosture: "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The all-false ceiling: a refusal is evidence of nothing and echoes
    // nothing (evidence law; trusted-channel L7, L35; scope-sov L72-79,
    // L104; attestation L419-427).
    claimedCollaborativeReadEstablishesReadResult: false,
    claimedCollaborativeReadEstablishesStructuralRecordEvidence: false,
    claimedCollaborativeReadEstablishesCounterpartIdentity: false,
    claimedCollaborativeReadEstablishesAdmission: false,
    claimedCollaborativeReadEstablishesAuthority: false,
    claimedCollaborativeReadContentEchoed: false,
    claimedCollaborativeReadContentStored: false,
    claimedCollaborativeReadSourceRefEchoed: false,
    claimedCollaborativeReadSourceRefAcceptedAsIdentity: false,
    claimedCollaborativeReadClassEchoed: false,
    claimedCollaborativeReadEstablishesLiveSessionOrReadGate: false,
    claimedCollaborativeReadEstablishesGrant: false,
    claimedCollaborativeReadEstablishesConsequenceOrExecution: false,
    claimedCollaborativeReadEstablishesMembership: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "refusalAssessment");
function assessPondClaimedCollaborativeReadRefusal(input) {
  const normalizedInput = record14(input);
  input = normalizedInput === null ? {} : normalizedInput;
  if (!validClaimedCollaborativeRead(input.claimedCollaborativeRead))
    return refusalAssessment(
      "pond_claimed_collaborative_read_claim_invalid",
      "invalid",
      [],
      claimedCollaborativeReadChecks
    );
  const claimValue = input.claimedCollaborativeRead;
  const claimedClass = String(claimValue["claimedCollaborativeReadClass"]);
  if (!contentClassVocabulary.includes(claimedClass))
    return refusalAssessment(
      "pond_claimed_collaborative_read_class_unknown_fail_closed",
      "pond-claimed-collaborative-read-refusal-d-p23",
      [],
      claimedCollaborativeReadChecks
    );
  if (claimedClass === "receiver_structural_record_content")
    return refusalAssessment(
      "pond_claimed_collaborative_receiver_record_content_refused_no_record_read_is_performed_this_cut",
      "pond-claimed-collaborative-read-refusal-d-p23",
      [],
      claimedCollaborativeReadChecks
    );
  if (claimedClass === "counterpart_structural_record_content")
    return refusalAssessment(
      "pond_claimed_collaborative_counterpart_record_content_refused_the_counterpart_is_structural_never_issued_no_live_counterpart_chain_exists",
      "pond-claimed-collaborative-read-refusal-d-p23",
      [],
      claimedCollaborativeReadChecks
    );
  const values = [
    true,
    POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES.includes(
      claimedClass
    ),
    false,
    false
  ];
  const satisfied = claimedCollaborativeReadChecks.filter(
    (_, index) => values[index] === true
  );
  const unsatisfied = claimedCollaborativeReadChecks.filter(
    (_, index) => values[index] !== true
  );
  return refusalAssessment(
    "pond_claimed_collaborative_joint_read_content_refused_no_collaborative_read_result_exists_this_cut",
    "pond-claimed-collaborative-read-refusal-d-p23",
    satisfied,
    unsatisfied
  );
}
__name(assessPondClaimedCollaborativeReadRefusal, "assessPondClaimedCollaborativeReadRefusal");

// src/fixtures/stage-d-p0-agent-presence.ts
var asPrincipalRef = /* @__PURE__ */ __name((value) => value, "asPrincipalRef");
var stageDP0LocalPrincipalRef = asPrincipalRef("principal:fixture:stage-d-p0:local-principal");
var stageDP0Agent0Ref = "agent:fixture:stage-d-p0:trading-desk-agent0";
var stageDP0CommunityAgentSlotRef = "agent:fixture:stage-d-p0:community-agent-slot";
var stageDP0ProjectAgentSlotRef = "agent:fixture:stage-d-p0:project-agent-slot";
var stageDP0TradingDeskSourceCommit = "57b5c8b966d3eb58cf239b2f3f1598f09f24b296";
var stageDP0TradingDeskSourceContract = Object.freeze({
  contractVersion: "pond-agent-presence-source-contract-d-p0",
  kind: "pond-agent-presence-source-contract",
  sourceContract: Object.freeze({
    repository: "trading-desk",
    boundSourceCommit: stageDP0TradingDeskSourceCommit,
    observedTools: Object.freeze(["runtime_status", "identity_status"]),
    sourcePosture: "read_only_tool_contract_only_no_live_connection"
  }),
  authority: "none"
});
var runtimeFact = /* @__PURE__ */ __name((factLabel, observedValue) => observedValue === null ? Object.freeze({
  factLabel,
  sourceTool: "runtime_status",
  observedValue: null,
  valuePosture: "not_observed"
}) : Object.freeze({
  factLabel,
  sourceTool: "runtime_status",
  observedValue,
  valuePosture: "transcribed_from_source_contract"
}), "runtimeFact");
var stageDP0Agent0RuntimeFacts = Object.freeze([
  runtimeFact("brain", "glm"),
  runtimeFact("provider", null),
  runtimeFact("model", null),
  runtimeFact("execution", "dry_run"),
  runtimeFact("trading_state", null),
  runtimeFact("hands", null),
  runtimeFact("doctor_cheap_check", null)
]);
var stageDP0Agent0Transport = Object.freeze({
  transport: "telegram",
  transportIsAgentIdentity: false,
  transportEstablishesAdmission: false,
  liveConnectionPosture: "not_included"
});
var stageDP0Agent0IdentityClaim = Object.freeze({
  claimStatus: "not_observed",
  evidence: Object.freeze({
    chainIdObserved: null,
    registryAddress: null,
    agentId: null,
    ownerObserved: null,
    blockTag: null
  }),
  evidencePosture: "observed_evidence_only_no_local_authority",
  relationshipClaims: Object.freeze({
    onchainIdentityIsPrincipalIdentity: false,
    onchainIdentityEstablishesLocalAdmission: false,
    onchainIdentityEstablishesAuthority: false
  })
});
var refusedRelationshipState = Object.freeze({
  membership: "not_established",
  agentAdmission: "not_established",
  scopeBinding: "not_established",
  delegatedAuthority: "not_established"
});
var stageDP0PersonalMemoryBoundary = Object.freeze({
  deskJournalLaneAdmitted: false,
  deskMemoryLaneAdmitted: false,
  deskNarrativeLaneAdmitted: false,
  deskTranscriptLaneAdmitted: false
});
var inertTransport = Object.freeze({
  transport: "not_observed",
  transportIsAgentIdentity: false,
  transportEstablishesAdmission: false,
  liveConnectionPosture: "not_included"
});
var inertIdentityClaim = Object.freeze({
  claimStatus: "not_observed",
  evidence: stageDP0Agent0IdentityClaim.evidence,
  evidencePosture: "observed_evidence_only_no_local_authority",
  relationshipClaims: stageDP0Agent0IdentityClaim.relationshipClaims
});
var stageDP0Agent0Record = Object.freeze({
  agentRef: stageDP0Agent0Ref,
  label: "Trading Desk (Agent0)",
  profileClass: "personal_agent",
  presenceStatus: "fixture_observed_not_live",
  observedAt: "fixture:stage-d-p0",
  transport: stageDP0Agent0Transport,
  runtimeFacts: stageDP0Agent0RuntimeFacts,
  identityClaim: stageDP0Agent0IdentityClaim,
  relationshipState: refusedRelationshipState,
  personalMemoryBoundary: stageDP0PersonalMemoryBoundary,
  authority: "none"
});
var stageDP0CommunityAgentSlotRecord = Object.freeze({
  agentRef: stageDP0CommunityAgentSlotRef,
  label: "Community agent slot",
  profileClass: "community_agent",
  presenceStatus: "not_observed",
  observedAt: "fixture:stage-d-p0",
  transport: inertTransport,
  runtimeFacts: Object.freeze([]),
  identityClaim: inertIdentityClaim,
  relationshipState: refusedRelationshipState,
  personalMemoryBoundary: stageDP0PersonalMemoryBoundary,
  authority: "none"
});
var stageDP0ProjectAgentSlotRecord = Object.freeze({
  agentRef: stageDP0ProjectAgentSlotRef,
  label: "Project agent slot",
  profileClass: "project_agent",
  presenceStatus: "not_observed",
  observedAt: "fixture:stage-d-p0",
  transport: inertTransport,
  runtimeFacts: Object.freeze([]),
  identityClaim: inertIdentityClaim,
  relationshipState: refusedRelationshipState,
  personalMemoryBoundary: stageDP0PersonalMemoryBoundary,
  authority: "none"
});
var stageDP0AgentPresenceProjection = Object.freeze({
  contractVersion: "pond-agent-presence-projection-d-p0",
  kind: "pond-agent-presence-projection",
  posture: "fixture_observed_presence_projection_authority_none",
  localPrincipalBinding: Object.freeze({
    principalRef: stageDP0LocalPrincipalRef,
    bindingState: "fixture_local_projection",
    authenticationPerformed: false,
    ceremonyPosture: "not_defined_this_cut"
  }),
  observedAgents: Object.freeze([
    stageDP0Agent0Record,
    stageDP0CommunityAgentSlotRecord,
    stageDP0ProjectAgentSlotRecord
  ]),
  communityRelationshipState: "not_established",
  projectRelationshipState: "not_established",
  personalMemoryBoundary: stageDP0PersonalMemoryBoundary,
  authority: "none"
});

// src/contracts/pond-agent-presence-observation-intake.ts
var POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS = 6e4;
var intakeChecks = Object.freeze([
  "receiver_owned_observation_channel_established",
  "desk_source_contract_commit_verified_by_receiver",
  "observation_metadata_reproduced_from_bound_contract",
  "observation_freshness_within_declared_maximum_age",
  "secret_free_observation_field_inventory",
  "personal_memory_lanes_excluded",
  "no_effect_or_transport_requested"
]);
var POND_STAGE_D_P2_FORBIDDEN_INTAKE_KEYS = Object.freeze([
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "endpoint",
  "transport",
  "connect",
  "fetch",
  "poll",
  "subscribe",
  "listen",
  "invoke",
  "execute",
  "canExecute",
  "mayMutate",
  "approve",
  "grant",
  "apiKey",
  "secret",
  "token",
  "session"
]);
var candidateStates = Object.freeze([
  "no_observation_present",
  "claim_without_observation_metadata",
  "claim_with_stale_observation",
  "claim_with_fresh_observation"
]);
var statesWithoutMetadata = Object.freeze([
  "no_observation_present",
  "claim_without_observation_metadata"
]);
var unknownDiagnosis = Object.freeze({
  state: "unknown",
  reason: "observation_metadata_missing_or_invalid",
  observationAgeMs: null
});

// pond-stage-d-live-session-collaborative-read-entry.ts
var pondStageDP23CollaborativeReadSessionRequestTemplate = Object.freeze({
  "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
  "kind": "pond-collaborative-read-session-request",
  "principalRef": "",
  "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
  "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
  "collaborativeReadRequestMetadata": {
    "collaborative_read_requested_at_epoch_ms": 0,
    "freshness_basis": "collaborative_read_request_event_time_only",
    "currentness_posture": "not_established_consumer_must_evaluate"
  },
  "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
  "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
  "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
  "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
  "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
  "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
  "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
  "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
  "authority": "none"
});
var pondStageDP23CollaborativeLiveAdmissionTemplate = Object.freeze({
  "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
  "kind": "pond-collaborative-read-live-admission",
  "receiverHeldPrincipalRef": "",
  "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
  "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
  "collaborativeLiveReadMetadata": {
    "collaborative_live_read_recorded_at_epoch_ms": 0,
    "freshness_basis": "collaborative_live_read_event_time_only",
    "currentness_posture": "not_established_consumer_must_evaluate"
  },
  "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
  "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
  "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
  "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
  "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
  "truthPosture": "structural_presence_only_no_current_truth_claim",
  "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
  "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
  "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
  "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
  "authority": "none"
});
var pondStageDP14CollaborativeActivationRecordTemplate = Object.freeze({
  "contractVersion": "pond-collaborative-read-activation-d-p14",
  "kind": "pond-collaborative-read-activation",
  "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
  "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
  "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
  "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
  "activationMetadata": {
    "activated_at_epoch_ms": 0,
    "freshness_basis": "activation_event_time_only",
    "currentness_posture": "not_established_consumer_must_evaluate"
  },
  "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
  "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
  "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
  "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
  "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
  "grantSufficiencyPosture": "activation_requires_no_grant",
  "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
  "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
  "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
  "authority": "none"
});
var pondStageDP14CollaborativeAdmissionRecordTemplate = Object.freeze({
  "contractVersion": "pond-collaborative-read-admission-d-p14",
  "kind": "pond-collaborative-read-admission",
  "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
  "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
  "readClass": "principal_structural_record_read",
  "readTargetRefs": [
    "receiver-record:pond-local-principal-binding-establishment-d-p5",
    "receiver-record:pond-local-principal-authentication-observation-d-p6",
    "receiver-record:pond-local-authentication-mechanic-d-p8",
    "receiver-record:pond-local-principal-id-issuance-d-p9",
    "receiver-record:pond-erc8004-identity-mapping-d-p9",
    "receiver-record:pond-principal-identity-readiness-composition-d-p9",
    "receiver-record:pond-private-read-activation-d-p10",
    "counterpart-record:pond-local-principal-binding-establishment-d-p5",
    "counterpart-record:pond-local-principal-authentication-observation-d-p6",
    "counterpart-record:pond-local-authentication-mechanic-d-p8",
    "counterpart-record:pond-collaborative-read-counterpart-declaration-d-p14",
    "collaborative-record:pond-collaborative-read-activation-d-p14",
    "collaborative-record:pond-collaborative-read-admission-d-p14"
  ],
  "readBasis": "receiver_requested_collaborative_structural_records_read",
  "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
  "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
  "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
  "truthPosture": "structural_presence_only_no_current_truth_claim",
  "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
  "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
  "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
  "revocabilityPosture": "read_revocable_by_activation_retraction",
  "authority": "none"
});
var pondStageDP23CounterpartLegsBundle = Object.freeze({
  "counterpartDp5CeremonyRecord": {
    "contractVersion": "pond-local-principal-binding-establishment-d-p5",
    "kind": "pond-local-principal-binding-establishment",
    "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "bindingBasis": "receiver_owned_explicit_binding",
    "authenticationObservation": "receiver_observed_local_authentication",
    "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
    "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
    "authorityPosture": "binding_grants_no_authority_membership_or_capability",
    "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
    "authenticationPosture": "fixture_structural_only_no_real_authentication",
    "authority": "none"
  },
  "counterpartDp6ObservationRecord": {
    "contractVersion": "pond-local-principal-authentication-observation-d-p6",
    "kind": "pond-local-principal-authentication-observation",
    "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "eventState": "receiver_observed_local_authentication_event",
    "observationChannel": "receiver_owned_local_shell_channel",
    "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
    "observationMetadata": {
      "observed_at_epoch_ms": 180000002e4,
      "freshness_basis": "source_observation_time_only",
      "currentness_posture": "not_established_consumer_must_evaluate"
    },
    "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
    "authorityPosture": "observation_grants_no_authority_membership_or_capability",
    "authenticationPosture": "fixture_structural_only_no_live_authentication",
    "authority": "none"
  },
  "counterpartDp8VerifierRecord": {
    "contractVersion": "pond-local-authentication-mechanic-d-p8",
    "kind": "pond-local-authentication-verifier",
    "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "mechanicClass": "local_knowledge_factor_challenge_response",
    "verifierBinding": {
      "algorithm": "sha256",
      "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
      "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
    },
    "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
    "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
    "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
    "revocabilityPosture": "verifier_revocable_by_re_enrollment",
    "authority": "none"
  },
  "counterpartDp8ProofRecord": {
    "contractVersion": "pond-local-authentication-mechanic-d-p8",
    "kind": "pond-local-authentication-challenge-proof",
    "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "mechanicClass": "local_knowledge_factor_challenge_response",
    "challengeDigestBinding": {
      "algorithm": "sha256",
      "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
      "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
      "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
    },
    "comparison": "exact_digest_match",
    "comparisonMetadata": {
      "observed_at_epoch_ms": 180000006e4,
      "freshness_basis": "source_observation_time_only",
      "currentness_posture": "not_established_consumer_must_evaluate"
    },
    "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
    "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
    "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
    "authority": "none"
  },
  "counterpartDp9IssuanceRecord": {
    "contractVersion": "pond-local-principal-id-issuance-d-p9",
    "kind": "pond-local-principal-id-issuance",
    "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "issuanceBasis": "not_issued",
    "issuedRefPosture": "not_issued",
    "issuanceDistinctnessClaims": {
      "isAgentId": false,
      "isErc8004AgentId": false,
      "isWalletAddress": false,
      "isGrantId": false,
      "isAttestationId": false,
      "isProviderSessionId": false,
      "isDisplayName": false
    },
    "bindingEstablishmentPosture": "not_established",
    "memoryLaneExclusionPosture": "not_established",
    "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
    "revocabilityPosture": "not_established",
    "authority": "none"
  },
  "counterpartDp9MappingRecord": null,
  "counterpartDp10ActivationRecord": null
});
var pondStageDP23HealthyCounterpartJoinRecord = Object.freeze({
  "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
  "kind": "pond-collaborative-read-counterpart-declaration",
  "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
  "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
  "joinBasis": "receiver_declared_explicit_collaborative_session_join",
  "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
  "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
  "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
  "revocabilityPosture": "join_revocable_by_receiver_retraction",
  "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
  "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
  "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
  "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
  "authorityPosture": "join_grants_no_authority_membership_or_capability",
  "authority": "none"
});
var pondStageDP23CounterpartPrincipalRef = "principal:fixture:stage-d-p14:counterpart-principal";
export {
  POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES,
  POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS,
  POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
  assessPondClaimedCollaborativeReadRefusal,
  assessPondCollaborativeReadLiveAdmissionDecision,
  assessPondCollaborativeReadSessionRequestDecision,
  pondStageDP14CollaborativeActivationRecordTemplate,
  pondStageDP14CollaborativeAdmissionRecordTemplate,
  pondStageDP23CollaborativeLiveAdmissionTemplate,
  pondStageDP23CollaborativeReadSessionRequestTemplate,
  pondStageDP23CounterpartLegsBundle,
  pondStageDP23CounterpartPrincipalRef,
  pondStageDP23HealthyCounterpartJoinRecord,
  stageDP0LocalPrincipalRef
};
