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
var gateChecks = Object.freeze([
  "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
  "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
  "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
  "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
  "collaborative_activation_session_scoped_fresh_and_restart_expiring",
  "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority"
]);

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
var safeNonNegativeInteger4 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var diagnoseEstablishmentFreshness = /* @__PURE__ */ __name((metadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const checked = record7(metadata);
  if (checked === null || !safeNonNegativeInteger4(checked.established_at_epoch_ms) || checked.freshness_basis !== "establishment_event_time_only" || checked.currentness_posture !== "not_established_consumer_must_evaluate")
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
  const retraction = record7(value);
  return retraction !== null && exactKeys7(retraction, [
    "contractVersion",
    "kind",
    "retracted_at_epoch_ms",
    "retractionPosture",
    "authority"
  ]) && retraction.contractVersion === "pond-live-session-retraction-d-p15" && retraction.kind === "pond-live-session-retraction" && safeNonNegativeInteger4(retraction.retracted_at_epoch_ms) && retraction.retractionPosture === "receiver_recorded_live_session_retraction_no_grant" && retraction.authority === "none" && !hasForbiddenKey7(retraction, POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS);
}, "validRetractionRecord");
var validEstablishmentRecord = /* @__PURE__ */ __name((value) => {
  const establishment = record7(value);
  const metadata = record7(establishment?.establishmentMetadata);
  return establishment !== null && exactKeys7(establishment, [
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
  ]) && establishment.contractVersion === "pond-live-session-establishment-d-p15" && establishment.kind === "pond-live-session-establishment" && wellFormedPrincipalRef6(establishment.principalRef) && [
    "receiver_performed_local_authentication_session_establishment_not_inferred",
    "inferred_from_session_presence",
    "inferred_from_wallet_connection",
    "asserted_by_shell_producer",
    "inferred_from_structural_readiness",
    "inferred_from_observed_agent_presence"
  ].includes(String(establishment.establishmentBasis)) && establishment.establishedCapability === "receiver_live_session_scoped_shell_authentication" && metadata !== null && exactKeys7(metadata, [
    "established_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger4(metadata.established_at_epoch_ms) && metadata.freshness_basis === "establishment_event_time_only" && metadata.currentness_posture === "not_established_consumer_must_evaluate" && [
    "not_established",
    "live_session_scoped_receiver_shell_restart_ends_establishment",
    "shell_process_scope_not_restart_ending_refused"
  ].includes(String(establishment.establishmentScopePosture)) && [
    "not_established",
    "establishment_revocable_by_receiver_retraction"
  ].includes(String(establishment.establishmentRevocabilityPosture)) && establishment.establishmentAttributionPosture === "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant" && establishment.agentScopePosture === "no_agent_session_no_agent_secret_no_agent_admission" && establishment.sharedSurfacePosture === "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse" && establishment.collaborativeWideningPosture === "not_included_collaborative_reads_require_their_own_live_session_lane" && establishment.activatedReadScopePosture === "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign" && establishment.memoryLaneExclusionPosture === "establishment_excludes_memory_narrative_transcript_lanes" && establishment.authorityPosture === "establishment_grants_no_authority_membership_or_capability" && establishment.authority === "none" && !hasForbiddenKey7(establishment, POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS);
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
    wellFormedPrincipalRef6(establishment.principalRef),
    wellFormedPrincipalRef6(input.receiverHeldPrincipalRef) && establishment.principalRef === input.receiverHeldPrincipalRef,
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
var safeNonNegativeInteger5 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var diagnoseGateFreshness = /* @__PURE__ */ __name((metadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const checked = record8(metadata);
  if (checked === null || !safeNonNegativeInteger5(checked.opened_at_epoch_ms) || checked.freshness_basis !== "gate_open_event_time_only" || checked.currentness_posture !== "not_established_consumer_must_evaluate")
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
  const readGate = record8(value);
  const metadata = record8(readGate?.readGateMetadata);
  return readGate !== null && exactKeys8(readGate, [
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
  ]) && readGate.contractVersion === "pond-live-session-read-gate-d-p15" && readGate.kind === "pond-live-session-read-gate" && wellFormedPrincipalRef7(readGate.principalRef) && [
    "receiver_session_scoped_structural_read_live_use_not_inferred",
    "inferred_from_live_session_establishment",
    "inferred_from_collaborative_activation"
  ].includes(String(readGate.readGateBasis)) && [
    "single_principal_own_structural_records",
    "collaborative_multi_principal_read"
  ].includes(String(readGate.requestedReadScope)) && metadata !== null && exactKeys8(metadata, [
    "opened_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger5(metadata.opened_at_epoch_ms) && metadata.freshness_basis === "gate_open_event_time_only" && metadata.currentness_posture === "not_established_consumer_must_evaluate" && readGate.readGateReadUsePosture === "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here" && [
    "not_included_collaborative_requires_their_own_live_session_lane",
    "collaborative_widening_attempted_refused"
  ].includes(String(readGate.collaborativeScopePosture)) && readGate.agentScopePosture === "no_agent_session_no_agent_secret_no_agent_admission" && readGate.memoryLaneExclusionPosture === "read_gate_excludes_memory_narrative_transcript_lanes" && readGate.authorityPosture === "read_gate_grants_no_authority_membership_or_capability" && readGate.authority === "none" && !hasForbiddenKey8(readGate, POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS);
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
    wellFormedPrincipalRef7(readGate.principalRef),
    wellFormedPrincipalRef7(input.receiverHeldPrincipalRef) && readGate.principalRef === input.receiverHeldPrincipalRef,
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
var POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS = 2e3;
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
var safeNonNegativeInteger6 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var diagnoseRecordFreshness = /* @__PURE__ */ __name((metadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const checked = record9(metadata);
  if (checked === null || !safeNonNegativeInteger6(checked.composed_at_epoch_ms) || checked.freshness_basis !== "record_event_time_only" || checked.currentness_posture !== "not_established_consumer_must_evaluate")
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
  const composedAt = checked.composed_at_epoch_ms;
  if (composedAt > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null
    });
  const age = evaluatedAtEpochMs - composedAt;
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
}, "diagnoseRecordFreshness");
var validConversationRecord = /* @__PURE__ */ __name((value) => {
  const conversationRecord = record9(value);
  const metadata = record9(conversationRecord?.conversationRecordMetadata);
  return conversationRecord !== null && exactKeys9(conversationRecord, [
    "contractVersion",
    "kind",
    "principalRef",
    "recordBasis",
    "composedRecordText",
    "addressedAgentRef",
    "conversationRecordMetadata",
    "conversationTrustEpochPosture",
    "conversationProvenancePosture",
    "conversationScopePosture",
    "conversationDeliveryPosture",
    "conversationReplyPosture",
    "conversationMemoryPosture",
    "conversationAuthorityPosture",
    "authority"
  ]) && conversationRecord.contractVersion === "pond-conversation-record-admission-d-p16" && conversationRecord.kind === "pond-conversation-record" && wellFormedPrincipalRef8(conversationRecord.principalRef) && [
    "receiver_composed_into_live_session_not_inferred",
    "inferred_from_provider_session",
    "asserted_by_model_completion",
    "inferred_from_room_presence",
    "inferred_from_conversation_summary",
    "replayed_from_prior_conversation_history"
  ].includes(String(conversationRecord.recordBasis)) && typeof conversationRecord.composedRecordText === "string" && typeof conversationRecord.addressedAgentRef === "string" && conversationRecord.addressedAgentRef.length > 0 && metadata !== null && exactKeys9(metadata, [
    "composed_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger6(metadata.composed_at_epoch_ms) && metadata.freshness_basis === "record_event_time_only" && metadata.currentness_posture === "not_established_consumer_must_evaluate" && [
    "verified_boundary_session_scoped",
    "confined_but_unverified",
    "legacy"
  ].includes(String(conversationRecord.conversationTrustEpochPosture)) && refusalPosturesAllValidVocabulary(conversationRecord) && conversationRecord.authority === "none" && !hasForbiddenKey9(
    conversationRecord,
    POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS
  );
}, "validConversationRecord");
var refusalPosturesAllValidVocabulary = /* @__PURE__ */ __name((recordValue) => [
  [
    conversationRecordProvenanceVocabulary,
    recordValue.conversationProvenancePosture
  ],
  [conversationRecordScopeVocabulary, recordValue.conversationScopePosture],
  [
    conversationRecordDeliveryVocabulary,
    recordValue.conversationDeliveryPosture
  ],
  [conversationRecordReplyVocabulary, recordValue.conversationReplyPosture],
  [conversationRecordMemoryVocabulary, recordValue.conversationMemoryPosture],
  [
    conversationRecordAuthorityVocabulary,
    recordValue.conversationAuthorityPosture
  ]
].every(([vocabulary, value]) => vocabulary.includes(String(value))), "refusalPosturesAllValidVocabulary");
var conversationRecordProvenanceVocabulary = [
  "receiver_authored_composed_in_session_not_agent_authored_not_remote"
];
var conversationRecordScopeVocabulary = [
  "session_scoped_module_state_never_persisted_scope_never_created_from_prose"
];
var conversationRecordDeliveryVocabulary = [
  "message_informed_not_delivered_delivery_refused_until_its_own_lane"
];
var conversationRecordReplyVocabulary = [
  "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law"
];
var conversationRecordMemoryVocabulary = [
  "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence"
];
var conversationRecordAuthorityVocabulary = [
  "composed_prose_grants_no_authority_membership_or_capability_no_room_membership"
];
var fullGateLegs = /* @__PURE__ */ __name((input) => ({
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
}), "fullGateLegs");
var admissionAssessment = /* @__PURE__ */ __name((reason, conversationRecordVersion, diagnosis, mappedEstablishment, mappedReadGate, satisfiedChecks, unsatisfiedChecks) => {
  const admitted = reason === "all_conversation_record_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-conversation-record-admission-d-p16",
    conversationRecordVersion,
    assessmentKind: "deterministic_supplied_conversation_record_admission",
    conversationRecordState: admitted ? "conversation_record_admitted_session_scoped_no_delivery" : "conversation_record_not_admitted",
    reason,
    conversationRecordFreshnessDiagnosis: diagnosis,
    mappedEstablishmentState: mappedEstablishment.state,
    mappedEstablishmentReason: mappedEstablishment.reason,
    mappedEstablishmentFreshnessDiagnosis: mappedEstablishment.diagnosis,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The composed text is informable content only, and it never leaves
    // this record: no delivery, no dispatch, no agent reply, no prose
    // authority, no scope, no membership or room presence, no memory or
    // evidence promotion, no current truth, no credential, no PrincipalId
    // authorization (trusted-channel L87-100, L146, L160;
    // agent-to-agent L29; runtime-allocation L481).
    messageEstablishesDeliveryOrDispatch: false,
    messageEstablishesAgentReplyComposition: false,
    messageEstablishesAuthorityFromProse: false,
    messageEstablishesScope: false,
    messageEstablishesMembershipOrRoomPresence: false,
    messagePromotedToCanonicalMemoryOrVerifiedEvidence: false,
    messageEstablishesCurrentTruth: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "admissionAssessment");
function assessPondConversationRecordAdmission(input) {
  const normalizedInput = record9(input);
  input = normalizedInput === null ? {} : normalizedInput;
  const gateLegs = fullGateLegs(input);
  const establishmentLeg = assessPondLiveSessionEstablishment(gateLegs);
  const readGateLeg = assessPondLiveSessionReadGate({
    readGateRecord: input.readGateRecord,
    ...gateLegs
  });
  const mappedEstablishment = {
    state: establishmentLeg["sessionEstablishmentState"],
    reason: establishmentLeg.reason,
    diagnosis: establishmentLeg["establishmentFreshnessDiagnosis"]
  };
  const mappedReadGate = {
    state: readGateLeg["liveSessionReadGateState"],
    reason: readGateLeg.reason,
    diagnosis: readGateLeg["readGateFreshnessDiagnosis"]
  };
  const fallbackDiagnosis = diagnoseRecordFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  if (!validConversationRecord(input.conversationRecord))
    return admissionAssessment(
      "conversation_record_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks
    );
  const recordValue = input.conversationRecord;
  const ownDiagnosis = diagnoseRecordFreshness(
    recordValue["conversationRecordMetadata"],
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  if (ownDiagnosis.state !== "fresh")
    return admissionAssessment(
      "conversation_record_not_session_current",
      "pond-conversation-record-admission-d-p16",
      ownDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks
    );
  if (readGateLeg["liveSessionReadGateState"] !== "live_session_scoped_single_principal_structural_reads_live_activated")
    return admissionAssessment(
      "live_session_read_gate_not_live_activated_refused_or_not_fresh",
      "pond-conversation-record-admission-d-p16",
      ownDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks
    );
  const reestablishmentMetadata = record9(
    input.establishmentRecord["establishmentMetadata"]
  );
  const composedAt = recordValue["conversationRecordMetadata"]["composed_at_epoch_ms"];
  const establishmentEvent = reestablishmentMetadata?.["established_at_epoch_ms"];
  if (typeof establishmentEvent !== "number" || composedAt < establishmentEvent)
    return admissionAssessment(
      "conversation_record_not_of_the_current_session_scope",
      "pond-conversation-record-admission-d-p16",
      ownDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks
    );
  if (recordValue.conversationTrustEpochPosture !== "verified_boundary_session_scoped")
    return admissionAssessment(
      "conversation_record_trust_epoch_not_admissible",
      "pond-conversation-record-admission-d-p16",
      ownDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks
    );
  if (!POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS.includes(
    recordValue.addressedAgentRef
  ))
    return admissionAssessment(
      "conversation_record_addressed_agent_not_declared",
      "pond-conversation-record-admission-d-p16",
      ownDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks
    );
  const composedText = recordValue.composedRecordText;
  if (composedText.length === 0 || composedText.length > POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS)
    return admissionAssessment(
      "conversation_record_composed_text_empty_or_over_recorded_maximum",
      "pond-conversation-record-admission-d-p16",
      ownDiagnosis,
      mappedEstablishment,
      mappedReadGate,
      [],
      conversationRecordChecks
    );
  const values = [
    true,
    recordValue.principalRef === input.receiverHeldPrincipalRef && wellFormedPrincipalRef8(input.receiverHeldPrincipalRef),
    recordValue.recordBasis === "receiver_composed_into_live_session_not_inferred",
    recordValue.conversationTrustEpochPosture === "verified_boundary_session_scoped",
    composedText.length > 0 && composedText.length <= POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS,
    POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS.includes(
      recordValue.addressedAgentRef
    ),
    typeof establishmentEvent === "number" && composedAt >= establishmentEvent,
    readGateLeg["liveSessionReadGateState"] === "live_session_scoped_single_principal_structural_reads_live_activated" && readGateLeg["readGateFreshnessDiagnosis"].state === "fresh",
    ownDiagnosis.state === "fresh"
  ];
  const satisfied = conversationRecordChecks.filter(
    (_, index) => values[index] === true
  );
  const unsatisfied = conversationRecordChecks.filter(
    (_, index) => values[index] !== true
  );
  return admissionAssessment(
    unsatisfied.length === 0 ? "all_conversation_record_checks_satisfied" : "receiver_conversation_record_proof_incomplete",
    "pond-conversation-record-admission-d-p16",
    ownDiagnosis,
    mappedEstablishment,
    mappedReadGate,
    satisfied,
    unsatisfied
  );
}
__name(assessPondConversationRecordAdmission, "assessPondConversationRecordAdmission");

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
var record10 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" && !Array.isArray(value) ? value : null, "record");
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
var safeNonNegativeInteger7 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var diagnoseReplyRequestFreshness = /* @__PURE__ */ __name((metadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const checked = record10(metadata);
  if (checked === null || !safeNonNegativeInteger7(checked.requested_at_epoch_ms) || checked.freshness_basis !== "reply_request_event_time_only" || checked.currentness_posture !== "not_established_consumer_must_evaluate")
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
  const requestedAt = checked.requested_at_epoch_ms;
  if (requestedAt > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null
    });
  const age = evaluatedAtEpochMs - requestedAt;
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
}, "diagnoseReplyRequestFreshness");
var replyRequestBasisVocabulary = [
  "receiver_recorded_reply_request_not_inferred",
  "inferred_from_conversation_composition",
  "asserted_by_model_completion",
  "inferred_from_delivered_receipt",
  "inferred_from_provider_session",
  "replayed_from_prior_reply_request"
];
var posturesComplete = /* @__PURE__ */ __name((recordValue) => recordValue.replyRequestCompositionPosture === "reply_request_requests_a_reply_none_is_composed_request_grants_nothing" && recordValue.replyRequestCognitionPosture === "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none" && recordValue.replyRequestProviderPosture === "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane" && recordValue.replyRequestRunwayPosture === "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply" && recordValue.replyRequestLifecyclePosture === "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized" && recordValue.replyRequestEvidencePosture === "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt" && recordValue.replyRequestAuthorityPosture === "reply_request_grants_no_authority_membership_or_admission", "posturesComplete");
var exactReplyRequestEventMetadata = /* @__PURE__ */ __name((value) => {
  const metadataValue = record10(value);
  return metadataValue !== null && exactKeys10(metadataValue, [
    "requested_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger7(metadataValue.requested_at_epoch_ms) && metadataValue.freshness_basis === "reply_request_event_time_only" && metadataValue.currentness_posture === "not_established_consumer_must_evaluate";
}, "exactReplyRequestEventMetadata");
var validReplyRequestRecord = /* @__PURE__ */ __name((value) => {
  const requestValue = record10(value);
  return requestValue !== null && exactKeys10(requestValue, [
    "contractVersion",
    "kind",
    "principalRef",
    "replyRequestBasis",
    "requestedConversationRecord",
    "replyRequestMetadata",
    "replyRequestCompositionPosture",
    "replyRequestCognitionPosture",
    "replyRequestProviderPosture",
    "replyRequestRunwayPosture",
    "replyRequestLifecyclePosture",
    "replyRequestEvidencePosture",
    "replyRequestAuthorityPosture",
    "authority"
  ]) && requestValue.contractVersion === "pond-reply-request-decision-d-p21" && requestValue.kind === "pond-reply-request" && replyRequestBasisVocabulary.includes(
    String(requestValue.replyRequestBasis)
  ) && record10(requestValue.requestedConversationRecord) !== null && exactReplyRequestEventMetadata(requestValue.replyRequestMetadata) && wellFormedPrincipalRef9(requestValue.principalRef) && posturesComplete(requestValue) && requestValue.authority === "none" && !hasForbiddenKey10(requestValue, POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS);
}, "validReplyRequestRecord");
var requestAssessment = /* @__PURE__ */ __name((reason, replyRequestDecisionVersion, diagnosis, mappedConversation, mappedEstablishment, mappedReadGate, satisfiedChecks, unsatisfiedChecks) => {
  const recorded = reason === "all_reply_request_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-reply-request-decision-d-p21",
    replyRequestDecisionVersion,
    assessmentKind: "deterministic_supplied_reply_request_decision",
    replyRequestState: recorded ? "reply_request_recorded_session_scoped_no_reply_composed" : "reply_request_not_recorded",
    reason,
    replyRequestEventFreshnessDiagnosis: diagnosis,
    mappedConversationState: mappedConversation.state,
    mappedConversationReassessmentReason: mappedConversation.reason,
    mappedConversationRecordFreshnessDiagnosis: mappedConversation.recordDiagnosis,
    mappedEstablishmentState: mappedEstablishment.state,
    mappedEstablishmentReason: mappedEstablishment.reason,
    mappedEstablishmentFreshnessDiagnosis: mappedEstablishment.diagnosis,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The retention posture: honest re-assessment after retraction — the
    // D-P20 policy posture (a request is session-scoped stance, not
    // frozen evidence).
    replyRequestRetentionPosture: "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    // A recorded request is a sender-side ask, nothing more (see the
    // ceiling commentary on the interface for the law anchors).
    replyRequestEstablishesReplyComposition: false,
    replyRequestEstablishesCognitionRuntime: false,
    replyRequestEstablishesProviderSelection: false,
    replyRequestEstablishesAgentIdentityOrAdmission: false,
    replyRequestEstablishesGrant: false,
    replyRequestEstablishesConsequenceOrExecution: false,
    replyRequestEstablishesAcceptanceOrTaskAgreement: false,
    replyRequestEstablishesAuthorityFromProse: false,
    replyRequestEstablishesMembershipOrRoomPresence: false,
    replyRequestEstablishesScope: false,
    replyRequestEchoesReplyText: false,
    replyRequestConsumedByAnyRuntimeOrComposerThisCut: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "requestAssessment");
function assessPondReplyRequestDecision(input) {
  const normalizedInput = record10(input);
  input = normalizedInput === null ? {} : normalizedInput;
  const requestedRecord = record10(
    (record10(input.replyRequest) ?? {})["requestedConversationRecord"]
  );
  const conversationReassessment = assessPondConversationRecordAdmission({
    conversationRecord: requestedRecord,
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
  });
  const mappedConversation = {
    state: conversationReassessment["conversationRecordState"],
    reason: conversationReassessment["reason"],
    recordDiagnosis: conversationReassessment["conversationRecordFreshnessDiagnosis"]
  };
  const mappedEstablishment = {
    state: conversationReassessment["mappedEstablishmentState"],
    reason: conversationReassessment["mappedEstablishmentReason"],
    diagnosis: conversationReassessment["mappedEstablishmentFreshnessDiagnosis"]
  };
  const mappedReadGate = {
    state: conversationReassessment["mappedReadGateState"],
    reason: conversationReassessment["mappedReadGateReason"],
    diagnosis: conversationReassessment["mappedReadGateFreshnessDiagnosis"]
  };
  const fallbackDiagnosis = diagnoseReplyRequestFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  if (!validReplyRequestRecord(input.replyRequest))
    return requestAssessment(
      "reply_request_record_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedConversation,
      mappedEstablishment,
      mappedReadGate,
      [],
      replyRequestChecks
    );
  const requestValue = input.replyRequest;
  const requestEventMetadata = record10(requestValue["replyRequestMetadata"]);
  const requestedAt = requestEventMetadata?.["requested_at_epoch_ms"];
  const requestDiagnosis = diagnoseReplyRequestFreshness(
    requestEventMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  if (conversationReassessment["conversationRecordState"] !== "conversation_record_admitted_session_scoped_no_delivery")
    return requestAssessment(
      "requested_conversation_record_not_currently_admitted",
      "pond-reply-request-decision-d-p21",
      requestDiagnosis,
      mappedConversation,
      mappedEstablishment,
      mappedReadGate,
      [],
      replyRequestChecks
    );
  if (requestDiagnosis.state !== "fresh")
    return requestAssessment(
      "reply_request_event_not_session_current",
      "pond-reply-request-decision-d-p21",
      requestDiagnosis,
      mappedConversation,
      mappedEstablishment,
      mappedReadGate,
      [],
      replyRequestChecks
    );
  const establishmentMetadata = record10(
    input.establishmentRecord["establishmentMetadata"]
  );
  const composedAt = (record10(requestedRecord) ?? {})["conversationRecordMetadata"]["composed_at_epoch_ms"];
  const establishedAt = establishmentMetadata?.["established_at_epoch_ms"];
  if (typeof establishedAt !== "number" || typeof composedAt !== "number" || typeof requestedAt !== "number" || requestedAt < establishedAt || requestedAt < composedAt)
    return requestAssessment(
      "reply_request_event_not_of_the_current_session_scope",
      "pond-reply-request-decision-d-p21",
      requestDiagnosis,
      mappedConversation,
      mappedEstablishment,
      mappedReadGate,
      [],
      replyRequestChecks
    );
  const values = [
    true,
    requestValue["principalRef"] === input.receiverHeldPrincipalRef && wellFormedPrincipalRef9(input.receiverHeldPrincipalRef),
    requestValue["replyRequestBasis"] === "receiver_recorded_reply_request_not_inferred",
    conversationReassessment["conversationRecordState"] === "conversation_record_admitted_session_scoped_no_delivery",
    conversationReassessment["mappedReadGateState"] === "live_session_scoped_single_principal_structural_reads_live_activated" && conversationReassessment["mappedReadGateFreshnessDiagnosis"].state === "fresh",
    typeof establishedAt === "number" && typeof composedAt === "number" && typeof requestedAt === "number" && requestedAt >= establishedAt && requestedAt >= composedAt,
    requestDiagnosis.state === "fresh",
    posturesComplete(requestValue)
  ];
  const satisfied = replyRequestChecks.filter(
    (_, index) => values[index] === true
  );
  const unsatisfied = replyRequestChecks.filter(
    (_, index) => values[index] !== true
  );
  return requestAssessment(
    unsatisfied.length === 0 ? "all_reply_request_checks_satisfied" : "receiver_reply_request_proof_incomplete",
    "pond-reply-request-decision-d-p21",
    requestDiagnosis,
    mappedConversation,
    mappedEstablishment,
    mappedReadGate,
    satisfied,
    unsatisfied
  );
}
__name(assessPondReplyRequestDecision, "assessPondReplyRequestDecision");

// src/contracts/pond-cognition-provider-decision.ts
var backendClassVocabulary = [
  "cloud_provider",
  "local_runtime",
  "community_gateway"
];
var cloudProviderIdVocabulary = [
  "openai",
  "google",
  "xai",
  "anthropic",
  "deepseek"
];
var localRuntimeVocabulary = [
  "ollama"
];
var accessMechanismVocabulary = [
  "api_key",
  "delegated_oauth",
  "interactive_subscription",
  "workload_identity",
  "local_runtime",
  "community_gateway"
];
var credentialCustodyVocabulary = [
  "toadaid_managed",
  "principal_managed",
  "delegated",
  "local_operator",
  "community_managed"
];
var supportTierVocabulary = [
  "launch_primary",
  "launch_primary_alternate",
  "specialist_direction",
  "evaluation_candidate",
  "experimental",
  "sovereign_local",
  "future_community"
];
var classMechanismVocabulary = {
  cloud_provider: [
    "api_key",
    "delegated_oauth",
    "interactive_subscription",
    "workload_identity"
  ],
  local_runtime: ["local_runtime"],
  community_gateway: ["community_gateway"]
};
var classCustodyVocabulary = {
  cloud_provider: ["toadaid_managed", "principal_managed", "delegated"],
  local_runtime: ["local_operator"],
  community_gateway: ["community_managed"]
};
var classDataBoundary = {
  cloud_provider: "external_cloud",
  local_runtime: "local_operator_controlled",
  community_gateway: "community_governed"
};
var POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS = Object.freeze(
  [
    Object.freeze({
      backendClass: "local_runtime",
      selectedBackendId: "ollama",
      accessMechanism: "local_runtime",
      credentialCustodyClass: "local_operator",
      dataBoundaryClass: "local_operator_controlled",
      supportTier: "sovereign_local"
    })
  ]
);
var providerDecisionChecks = Object.freeze([
  "provider_decision_record_well_formed",
  "provider_decision_bound_to_receiver_held_principal",
  "provider_decision_basis_receiver_recorded_not_inferred",
  "reply_request_currently_recorded_reassessed_session_scoped",
  "provider_selection_in_declared_verbatim_vocabulary",
  "provider_backend_id_of_declared_backend_class",
  "provider_access_custody_and_boundary_compatible_with_backend_class",
  "provider_selection_performable_this_cut",
  "provider_decision_event_within_current_session_scope",
  "provider_decision_event_own_freshness_within_declared_maximum_age",
  "provider_decision_refusal_postures_complete"
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
var safeNonNegativeInteger8 = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var diagnoseProviderDecisionFreshness = /* @__PURE__ */ __name((metadata, evaluatedAtEpochMs, maximumAgeMs) => {
  const checked = record11(metadata);
  if (checked === null || !safeNonNegativeInteger8(checked.recorded_at_epoch_ms) || checked.freshness_basis !== "provider_decision_event_time_only" || checked.currentness_posture !== "not_established_consumer_must_evaluate")
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger8(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null
    });
  if (!safeNonNegativeInteger8(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null
    });
  const recordedAt = checked.recorded_at_epoch_ms;
  if (recordedAt > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null
    });
  const age = evaluatedAtEpochMs - recordedAt;
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
}, "diagnoseProviderDecisionFreshness");
var providerBasisVocabulary = [
  "receiver_recorded_provider_decision_not_inferred",
  "inferred_from_reply_request",
  "asserted_by_model_completion",
  "inferred_from_provider_session",
  "inferred_from_credential_availability",
  "replayed_from_prior_provider_decision"
];
var posturesComplete2 = /* @__PURE__ */ __name((recordValue) => recordValue.providerDecisionRuntimePosture === "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime" && recordValue.providerDecisionInferencePosture === "performs_no_inference_no_authentication_no_provider_contact_no_fallback" && recordValue.providerDecisionIdentityPosture === "provider_session_is_not_agent_no_agentid_created" && recordValue.providerDecisionAccessPosture === "declared_capability_not_granted_no_credential_admitted_no_authentication_performed" && recordValue.providerDecisionBoundaryPosture === "declared_policy_not_verified_runtime_evidence" && recordValue.providerDecisionFallbackPosture === "no_silent_fallback_no_failure_transition_authorized" && recordValue.providerDecisionReplyPosture === "no_reply_composed_the_decision_rides_a_recorded_reply_request_only" && recordValue.providerDecisionConsumptionPosture === "consumed_by_no_runtime_composer_or_transport_this_cut", "posturesComplete");
var exactProviderDecisionEventMetadata = /* @__PURE__ */ __name((value) => {
  const metadataValue = record11(value);
  return metadataValue !== null && exactKeys11(metadataValue, [
    "recorded_at_epoch_ms",
    "freshness_basis",
    "currentness_posture"
  ]) && safeNonNegativeInteger8(metadataValue.recorded_at_epoch_ms) && metadataValue.freshness_basis === "provider_decision_event_time_only" && metadataValue.currentness_posture === "not_established_consumer_must_evaluate";
}, "exactProviderDecisionEventMetadata");
var validProviderDecisionRecord = /* @__PURE__ */ __name((value) => {
  const decisionValue = record11(value);
  return decisionValue !== null && exactKeys11(decisionValue, [
    "contractVersion",
    "kind",
    "principalRef",
    "providerDecisionBasis",
    "backendClass",
    "selectedBackendId",
    "accessMechanism",
    "credentialCustodyClass",
    "dataBoundaryClass",
    "supportTier",
    "providerDecisionMetadata",
    "providerDecisionRuntimePosture",
    "providerDecisionInferencePosture",
    "providerDecisionIdentityPosture",
    "providerDecisionAccessPosture",
    "providerDecisionBoundaryPosture",
    "providerDecisionFallbackPosture",
    "providerDecisionReplyPosture",
    "providerDecisionConsumptionPosture",
    "authority"
  ]) && decisionValue.contractVersion === "pond-cognition-provider-decision-d-p21" && decisionValue.kind === "pond-cognition-provider-decision" && providerBasisVocabulary.includes(String(decisionValue.providerDecisionBasis)) && typeof decisionValue.backendClass === "string" && typeof decisionValue.selectedBackendId === "string" && typeof decisionValue.accessMechanism === "string" && typeof decisionValue.credentialCustodyClass === "string" && typeof decisionValue.dataBoundaryClass === "string" && typeof decisionValue.supportTier === "string" && exactProviderDecisionEventMetadata(decisionValue.providerDecisionMetadata) && wellFormedPrincipalRef10(decisionValue.principalRef) && posturesComplete2(decisionValue) && decisionValue.authority === "none" && !hasForbiddenKey11(decisionValue, POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS);
}, "validProviderDecisionRecord");
var fullReplyRequestLegs = /* @__PURE__ */ __name((input) => ({
  replyRequest: input.replyRequest,
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
}), "fullReplyRequestLegs");
var providerAssessment = /* @__PURE__ */ __name((reason, providerDecisionVersion, diagnosis, recordedProviderSelection, mappedReplyRequest, mappedConversation, satisfiedChecks, unsatisfiedChecks) => {
  const recorded = reason === "all_provider_decision_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-cognition-provider-decision-d-p21",
    providerDecisionVersion,
    assessmentKind: "deterministic_supplied_provider_decision",
    providerDecisionState: recorded ? "provider_decision_recorded_session_scoped_no_runtime_established" : "provider_decision_not_recorded",
    reason,
    providerDecisionEventFreshnessDiagnosis: diagnosis,
    recordedProviderSelection,
    mappedReplyRequestState: mappedReplyRequest.state,
    mappedReplyRequestReassessmentReason: mappedReplyRequest.reason,
    mappedReplyRequestDiagnosis: mappedReplyRequest.eventDiagnosis,
    mappedConversationState: mappedConversation.state,
    mappedConversationReassessmentReason: mappedConversation.reason,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The retention posture: honest re-assessment after retraction — the
    // D-P20 policy posture.
    providerDecisionRetentionPosture: "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    // A recorded decision is a declaration of WHAT a future runtime
    // would ride, nothing more (see the ceiling commentary on the
    // interface for the law anchors).
    providerDecisionEstablishesCognitionRuntimeOrModelAccess: false,
    providerDecisionEstablishesAgentReplyComposition: false,
    providerDecisionEstablishesAgentIdentityOrAdmission: false,
    providerDecisionPerformsInference: false,
    providerDecisionPerformsAuthenticationOrProviderContact: false,
    providerDecisionRoutesSendsOrStoresReplyText: false,
    providerDecisionPerformsSilentFallback: false,
    providerDecisionEstablishesGrant: false,
    providerDecisionEstablishesConsequenceOrExecution: false,
    providerDecisionEstablishesAuthorityFromProse: false,
    providerDecisionEstablishesMembershipOrAdmission: false,
    providerDecisionEstablishesScope: false,
    providerDecisionConsumedThisCut: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "providerAssessment");
var selectionOf = /* @__PURE__ */ __name((decisionValue) => Object.freeze({
  backendClass: String(decisionValue["backendClass"]),
  selectedBackendId: String(decisionValue["selectedBackendId"]),
  accessMechanism: String(decisionValue["accessMechanism"]),
  credentialCustodyClass: String(decisionValue["credentialCustodyClass"]),
  dataBoundaryClass: String(decisionValue["dataBoundaryClass"]),
  supportTier: String(decisionValue["supportTier"])
}), "selectionOf");
function assessPondCognitionProviderDecision(input) {
  const normalizedInput = record11(input);
  input = normalizedInput === null ? {} : normalizedInput;
  const requestReassessment = assessPondReplyRequestDecision(
    fullReplyRequestLegs(input)
  );
  const mappedReplyRequest = {
    state: requestReassessment["replyRequestState"],
    reason: requestReassessment["reason"],
    eventDiagnosis: requestReassessment["replyRequestEventFreshnessDiagnosis"]
  };
  const mappedConversation = {
    state: requestReassessment["mappedConversationState"],
    reason: requestReassessment["mappedConversationReassessmentReason"]
  };
  const fallbackDiagnosis = diagnoseProviderDecisionFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  if (!validProviderDecisionRecord(input.providerDecision))
    return providerAssessment(
      "provider_decision_record_invalid",
      "invalid",
      fallbackDiagnosis,
      null,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks
    );
  const decisionValue = input.providerDecision;
  const decisionEventMetadata = record11(
    decisionValue["providerDecisionMetadata"]
  );
  const selection = selectionOf(decisionValue);
  const backendClass = String(decisionValue["backendClass"]);
  const selectedBackendId = String(decisionValue["selectedBackendId"]);
  const accessMechanism = String(decisionValue["accessMechanism"]);
  const credentialCustody = String(decisionValue["credentialCustodyClass"]);
  const dataBoundary = String(decisionValue["dataBoundaryClass"]);
  const supportTier = String(decisionValue["supportTier"]);
  const decisionDiagnosis = diagnoseProviderDecisionFreshness(
    decisionEventMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs
  );
  if (requestReassessment["replyRequestState"] !== "reply_request_recorded_session_scoped_no_reply_composed")
    return providerAssessment(
      "reply_request_not_currently_recorded",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks
    );
  if (!backendClassVocabulary.includes(
    backendClass
  ))
    return providerAssessment(
      "provider_backend_class_unknown_fail_closed",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks
    );
  const expectedBackendId = backendClass === "cloud_provider" ? cloudProviderIdVocabulary : backendClass === "local_runtime" ? localRuntimeVocabulary : [""];
  if (!expectedBackendId.includes(selectedBackendId))
    return providerAssessment(
      "provider_backend_id_unknown_or_not_of_declared_backend_class",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks
    );
  const classMechanisms = classMechanismVocabulary[backendClass];
  if (accessMechanismVocabulary.indexOf(
    accessMechanism
  ) === -1 || !classMechanisms.includes(accessMechanism))
    return providerAssessment(
      "provider_access_mechanism_not_compatible_with_declared_backend_class",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks
    );
  const classCustody = classCustodyVocabulary[backendClass];
  if (credentialCustodyVocabulary.indexOf(
    credentialCustody
  ) === -1 || !classCustody.includes(credentialCustody))
    return providerAssessment(
      "provider_credential_custody_not_compatible_with_declared_backend_class",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks
    );
  const expectedBoundary = classDataBoundary[backendClass];
  if (dataBoundary !== expectedBoundary)
    return providerAssessment(
      "provider_data_boundary_not_compatible_with_declared_backend_class",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks
    );
  if (!supportTierVocabulary.includes(
    supportTier
  ))
    return providerAssessment(
      "provider_selection_declared_not_performable_this_cut",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks
    );
  const performable = POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS[0];
  const selectionIsPerformable = backendClass === performable.backendClass && selectedBackendId === performable.selectedBackendId && accessMechanism === performable.accessMechanism && credentialCustody === performable.credentialCustodyClass && dataBoundary === performable.dataBoundaryClass && supportTier === performable.supportTier;
  if (!selectionIsPerformable)
    return providerAssessment(
      "provider_selection_declared_not_performable_this_cut",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks
    );
  if (decisionDiagnosis.state !== "fresh")
    return providerAssessment(
      "provider_decision_event_not_session_current",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks
    );
  const establishmentMetadata = record11(
    input.establishmentRecord["establishmentMetadata"]
  );
  const requestValue = input.replyRequest;
  const requestedMetadata = record11(
    (record11(requestValue["requestedConversationRecord"]) ?? {})["conversationRecordMetadata"]
  );
  const requestEventMetadata = record11(requestValue["replyRequestMetadata"]);
  const establishedAt = establishmentMetadata?.["established_at_epoch_ms"];
  const composedAt = (requestedMetadata ?? {})["composed_at_epoch_ms"];
  const requestedAt = (requestEventMetadata ?? {})["requested_at_epoch_ms"];
  const decisionRecordedAt = decisionEventMetadata?.["recorded_at_epoch_ms"];
  if (typeof establishedAt !== "number" || typeof composedAt !== "number" || typeof requestedAt !== "number" || typeof decisionRecordedAt !== "number" || decisionRecordedAt < establishedAt || decisionRecordedAt < composedAt || decisionRecordedAt < requestedAt)
    return providerAssessment(
      "provider_decision_event_not_of_the_current_session_scope",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks
    );
  const values = [
    true,
    decisionValue["principalRef"] === input.receiverHeldPrincipalRef && wellFormedPrincipalRef10(input.receiverHeldPrincipalRef),
    decisionValue["providerDecisionBasis"] === "receiver_recorded_provider_decision_not_inferred",
    requestReassessment["replyRequestState"] === "reply_request_recorded_session_scoped_no_reply_composed",
    backendClassVocabulary.includes(
      backendClass
    ) && expectedBackendId.includes(selectedBackendId),
    expectedBackendId.includes(selectedBackendId),
    classMechanisms.includes(accessMechanism) && classCustody.includes(credentialCustody) && dataBoundary === expectedBoundary && supportTierVocabulary.includes(
      supportTier
    ),
    selectionIsPerformable,
    typeof establishedAt === "number" && typeof composedAt === "number" && typeof requestedAt === "number" && typeof decisionRecordedAt === "number" && decisionRecordedAt >= establishedAt && decisionRecordedAt >= composedAt && decisionRecordedAt >= requestedAt,
    decisionDiagnosis.state === "fresh",
    posturesComplete2(decisionValue)
  ];
  const satisfied = providerDecisionChecks.filter(
    (_, index) => values[index] === true
  );
  const unsatisfied = providerDecisionChecks.filter(
    (_, index) => values[index] !== true
  );
  return providerAssessment(
    unsatisfied.length === 0 ? "all_provider_decision_checks_satisfied" : "receiver_provider_decision_proof_incomplete",
    "pond-cognition-provider-decision-d-p21",
    decisionDiagnosis,
    selection,
    mappedReplyRequest,
    mappedConversation,
    satisfied,
    unsatisfied
  );
}
__name(assessPondCognitionProviderDecision, "assessPondCognitionProviderDecision");

// src/contracts/pond-claimed-agent-reply-refusal.ts
var sourceClassVocabulary = [
  "receiver_session",
  "agent_runtime",
  "provider_output"
];
var POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES = Object.freeze([
  "receiver_session",
  "agent_runtime",
  "provider_output"
]);
var claimedReplyChecks = Object.freeze([
  "claimed_agent_reply_claim_well_formed",
  "claimed_reply_source_class_of_the_declared_claim_vocabulary",
  "claimed_reply_text_composible_by_an_established_cognition_runtime",
  "claimed_reply_carries_no_agent_identity_authority_or_admission"
]);
var record12 = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" && !Array.isArray(value) ? value : null, "record");
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
var nonEmptyString = /* @__PURE__ */ __name((value) => typeof value === "string" && value.length > 0, "nonEmptyString");
var validClaimedAgentReply = /* @__PURE__ */ __name((value) => {
  const claimValue = record12(value);
  return claimValue !== null && exactKeys12(claimValue, [
    "claimedReplyText",
    "claimedReplySourceClass",
    "claimedResponderRef"
  ]) && nonEmptyString(claimValue.claimedReplyText) && nonEmptyString(claimValue.claimedReplySourceClass) && nonEmptyString(claimValue.claimedResponderRef) && !hasForbiddenKey12(
    claimValue,
    POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS
  );
}, "validClaimedAgentReply");
var refusalAssessment = /* @__PURE__ */ __name((reason, claimedReplyRefusalVersion, satisfiedChecks, unsatisfiedChecks) => {
  return Object.freeze({
    contractVersion: "pond-claimed-agent-reply-refusal-d-p21",
    claimedReplyRefusalVersion,
    assessmentKind: "deterministic_supplied_claimed_agent_reply_refusal",
    claimedReplyState: "claimed_reply_not_composed",
    reason,
    // The standing posture: the wall is standing and fail-closed on
    // every arm — nothing this cut assesses composes a reply.
    claimedReplyWallPosture: "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The all-false ceiling: a refusal is evidence of nothing and echoes
    // nothing (admission L77, L112, L116-118; allocation L101, L498;
    // fabric L305-312, L321, L329; messaging L29, L102, L131-141, L176,
    // L189; scope-sov L15, L209).
    claimedReplyEstablishesAgentReplyComposition: false,
    claimedReplyEstablishesAgentIdentity: false,
    claimedReplyEstablishesAdmission: false,
    claimedReplyEstablishesAuthority: false,
    claimedReplyEstablishesProviderSessionAsAgent: false,
    claimedReplyTextEchoed: false,
    claimedReplyTextStored: false,
    claimedResponderIdentityEchoed: false,
    claimedResponderIdentityAcceptedAsIdentity: false,
    claimedReplySourceClassEchoed: false,
    claimedReplyEstablishesConversationRecord: false,
    claimedReplyEstablishesGrant: false,
    claimedReplyEstablishesConsequenceOrExecution: false,
    claimedReplyEstablishesMembership: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}, "refusalAssessment");
function assessPondClaimedAgentReplyRefusal(input) {
  const normalizedInput = record12(input);
  input = normalizedInput === null ? {} : normalizedInput;
  if (!validClaimedAgentReply(input.claimedAgentReply))
    return refusalAssessment(
      "claimed_agent_reply_claim_invalid",
      "invalid",
      [],
      claimedReplyChecks
    );
  const claimValue = input.claimedAgentReply;
  const claimedClass = String(claimValue["claimedReplySourceClass"]);
  if (!sourceClassVocabulary.includes(claimedClass))
    return refusalAssessment(
      "claimed_reply_source_class_unknown_fail_closed",
      "pond-claimed-agent-reply-refusal-d-p21",
      [],
      claimedReplyChecks
    );
  if (claimedClass === "receiver_session")
    return refusalAssessment(
      "claimed_reply_receiver_composition_is_not_a_reply",
      "pond-claimed-agent-reply-refusal-d-p21",
      [],
      claimedReplyChecks
    );
  if (claimedClass === "agent_runtime")
    return refusalAssessment(
      "claimed_reply_agent_runtime_claim_refused_no_cognition_runtime",
      "pond-claimed-agent-reply-refusal-d-p21",
      [],
      claimedReplyChecks
    );
  const values = [
    true,
    POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES.includes(
      claimedClass
    ),
    false,
    false
  ];
  const satisfied = claimedReplyChecks.filter(
    (_, index) => values[index] === true
  );
  const unsatisfied = claimedReplyChecks.filter(
    (_, index) => values[index] !== true
  );
  return refusalAssessment(
    "claimed_reply_provider_output_not_agent_reply_no_composition_authority",
    "pond-claimed-agent-reply-refusal-d-p21",
    satisfied,
    unsatisfied
  );
}
__name(assessPondClaimedAgentReplyRefusal, "assessPondClaimedAgentReplyRefusal");

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

// pond-stage-d-live-session-replies-entry.ts
var pondStageDP21ReplyRequestTemplate = Object.freeze({
  contractVersion: "pond-reply-request-decision-d-p21",
  kind: "pond-reply-request",
  principalRef: "",
  replyRequestBasis: "receiver_recorded_reply_request_not_inferred",
  requestedConversationRecord: null,
  replyRequestMetadata: Object.freeze({
    requested_at_epoch_ms: 0,
    freshness_basis: "reply_request_event_time_only",
    currentness_posture: "not_established_consumer_must_evaluate"
  }),
  replyRequestCompositionPosture: "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
  replyRequestCognitionPosture: "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
  replyRequestProviderPosture: "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
  replyRequestRunwayPosture: "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
  replyRequestLifecyclePosture: "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
  replyRequestEvidencePosture: "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
  replyRequestAuthorityPosture: "reply_request_grants_no_authority_membership_or_admission",
  authority: "none"
});
var pondStageDP21ProviderDecisionTemplate = Object.freeze({
  contractVersion: "pond-cognition-provider-decision-d-p21",
  kind: "pond-cognition-provider-decision",
  principalRef: "",
  providerDecisionBasis: "receiver_recorded_provider_decision_not_inferred",
  backendClass: "local_runtime",
  selectedBackendId: "ollama",
  accessMechanism: "local_runtime",
  credentialCustodyClass: "local_operator",
  dataBoundaryClass: "local_operator_controlled",
  supportTier: "sovereign_local",
  providerDecisionMetadata: Object.freeze({
    recorded_at_epoch_ms: 0,
    freshness_basis: "provider_decision_event_time_only",
    currentness_posture: "not_established_consumer_must_evaluate"
  }),
  providerDecisionRuntimePosture: "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
  providerDecisionInferencePosture: "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
  providerDecisionIdentityPosture: "provider_session_is_not_agent_no_agentid_created",
  providerDecisionAccessPosture: "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
  providerDecisionBoundaryPosture: "declared_policy_not_verified_runtime_evidence",
  providerDecisionFallbackPosture: "no_silent_fallback_no_failure_transition_authorized",
  providerDecisionReplyPosture: "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
  providerDecisionConsumptionPosture: "consumed_by_no_runtime_composer_or_transport_this_cut",
  authority: "none"
});
export {
  POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS,
  POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS,
  POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES,
  POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS,
  POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS,
  POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
  assessPondClaimedAgentReplyRefusal,
  assessPondCognitionProviderDecision,
  assessPondConversationRecordAdmission,
  assessPondReplyRequestDecision,
  pondStageDP21ProviderDecisionTemplate,
  pondStageDP21ReplyRequestTemplate,
  stageDP0Agent0Ref,
  stageDP0CommunityAgentSlotRef,
  stageDP0LocalPrincipalRef,
  stageDP0ProjectAgentSlotRef
};
