var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/contracts/pond-agent-presence-projection.ts
var admissionChecks = Object.freeze([
  "exact_source_contract_identity",
  "exact_secret_free_runtime_fact_inventory",
  "receiver_owned_presence_observation_channel",
  "runtime_facts_separated_from_personal_memory_channels",
  "identity_claim_evidence_independently_reproduced",
  "local_principal_binding_established_before_private_reads",
  "observed_identity_kept_separate_from_principal_id",
  "live_presence_observation_observed"
]);
var POND_STAGE_D_P0_FORBIDDEN_PRESENCE_RECORD_KEYS = Object.freeze([
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "execute",
  "canExecute",
  "mayMutate",
  "approve",
  "grant",
  "apiKey",
  "secret",
  "token",
  "PrincipalId",
  "principalId"
]);
var POND_STAGE_D_P0_FORBIDDEN_LIVE_CONNECTION_KEYS = Object.freeze([
  "connect",
  "listen",
  "poll",
  "subscribe"
]);

// src/contracts/pond-agent-registration-evidence.ts
var POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION = "pond-agent-registration-evidence-d-p24";
var POND_STAGE_DP24_AGENT_REGISTRATION_TYPE_KINDS = Object.freeze([
  "eip_8004_registration_v1_style_self_describing_document",
  "unrecognized_self_describing_registration_document"
]);
var POND_STAGE_DP24_REGISTRATION_DIGEST_BASES = Object.freeze([
  "sha256_registration_file_bytes_v1"
]);
var POND_STAGE_DP24_ONCHAIN_EVIDENCE_SLOT_STATUSES = Object.freeze([
  "not_observed_no_registration_coordinate_is_invented"
]);
var POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_BASES = Object.freeze([
  "receiver_presented_registration_evidence_from_a_supplied_registration_document",
  "claimed_observed_registration_not_supplied"
]);
var POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_POSTURES = Object.freeze({
  evidencePosture: "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
  notRuntimeIdentityPosture: "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
  noInventionPosture: "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
  admissionPosture: "registration_evidence_does_not_establish_local_admission",
  channelPosture: "no_channel_is_opened_presentation_is_not_a_connection",
  erc8004CeilingPosture: "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
  verificationApplicabilityPosture: "source_verified_never_presented_as_wiring_or_live_verified"
});
var POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_RECORD_KEYS = Object.freeze([
  "admissionPosture",
  "agentEvidenceRef",
  "authority",
  "channelPosture",
  "contractVersion",
  "evidenceBasis",
  "evidencePosture",
  "erc8004CeilingPosture",
  "evidenceProvenance",
  "kind",
  "noInventionPosture",
  "notRuntimeIdentityPosture",
  "onchainEvidenceSlot",
  "registrationActive",
  "registrationDigest",
  "registrationEvidenceConsumedThisCut",
  "registrationName",
  "registrationServiceCount",
  "registrationServiceNames",
  "registrationTypeKind",
  "supportedTrust",
  "verificationApplicabilityPosture",
  "x402Support"
]);
var POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CHECKS = Object.freeze([
  "agent_registration_evidence_record_well_formed",
  "presentation_digest_sha256_recomputed_and_agrees",
  "registration_digest_basis_declared_file_bytes",
  "onchain_evidence_slot_honestly_not_observed",
  "agent_registration_evidence_refusal_postures_complete",
  "agent_registration_evidence_fresh_by_provenance_observation_time",
  "registration_evidence_consumed_by_nothing_and_authority_none"
]);
var POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_REASONS = Object.freeze([
  "agent_registration_evidence_record_invalid",
  "registration_digest_agreement_not_proven",
  "onchain_coordinate_claimed_without_onchain_evidence",
  "agent_registration_evidence_not_fresh",
  "receiver_registration_evidence_proof_incomplete",
  "agent_registration_evidence_derived_evidence_only_presentation_satisfied"
]);
var POND_STAGE_DP24_FORBIDDEN_AGENT_IDENTITY_EVIDENCE_KEYS = Object.freeze([
  ...POND_STAGE_D_P0_FORBIDDEN_PRESENCE_RECORD_KEYS,
  ...POND_STAGE_D_P0_FORBIDDEN_LIVE_CONNECTION_KEYS,
  "admissionRecord",
  "channelBindingRecord",
  "agentCardOffer",
  "registrationWrite"
]);
var record = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" && !Array.isArray(value) ? value : null, "record");
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
var safeNonNegativeInteger = /* @__PURE__ */ __name((value) => typeof value === "number" && Number.isSafeInteger(value) && value >= 0, "safeNonNegativeInteger");
var isNonEmptyString = /* @__PURE__ */ __name((value) => typeof value === "string" && value.length > 0, "isNonEmptyString");
var validDigestHex = /* @__PURE__ */ __name((value) => typeof value === "string" && /^[0-9a-f]{64}$/.test(value), "validDigestHex");
var distinctNonEmptyStrings = /* @__PURE__ */ __name((value) => Array.isArray(value) && value.every((entry) => typeof entry === "string" && entry.length > 0) && new Set(value).size === value.length, "distinctNonEmptyStrings");
var diagnoseRegistrationEvidenceFreshness = /* @__PURE__ */ __name((provenance, evaluatedAtEpochMs, maximumAgeMs) => {
  const checked = record(provenance);
  if (checked === null || !safeNonNegativeInteger(checked.observedAtEpochMs) || !isNonEmptyString(checked.registrationSourceRef) || !isNonEmptyString(checked.observedBy))
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
  const observedAtEpochMs = checked["observedAtEpochMs"];
  if (observedAtEpochMs > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null
    });
  const age = evaluatedAtEpochMs - observedAtEpochMs;
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
}, "diagnoseRegistrationEvidenceFreshness");
function assessPondAgentRegistrationEvidence(input) {
  const inputRecord = record(input);
  const inputWellFormed = inputRecord !== null && exactKeys(inputRecord, [
    "registrationEvidenceRecord",
    "receiverRecomputedDigestHex",
    "receiverEvaluatedAtEpochMs",
    "receiverMaximumAgeMs"
  ]);
  const candidate = inputWellFormed ? record(inputRecord["registrationEvidenceRecord"]) : null;
  const wellFormed = candidate !== null && exactKeys(candidate, [
    ...POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_RECORD_KEYS
  ]) && candidate["contractVersion"] === POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION && candidate["kind"] === "pond-agent-registration-evidence-record" && isNonEmptyString(candidate["agentEvidenceRef"]) && POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_BASES.includes(
    String(candidate["evidenceBasis"])
  ) && isNonEmptyString(candidate["registrationName"]) && POND_STAGE_DP24_AGENT_REGISTRATION_TYPE_KINDS.includes(
    String(candidate["registrationTypeKind"])
  ) && safeNonNegativeInteger(candidate["registrationServiceCount"]) && distinctNonEmptyStrings(candidate["registrationServiceNames"]) && candidate["registrationServiceNames"].length === candidate["registrationServiceCount"] && typeof candidate["registrationActive"] === "boolean" && typeof candidate["x402Support"] === "boolean" && distinctNonEmptyStrings(candidate["supportedTrust"]) && (() => {
    const digest = record(candidate["registrationDigest"]);
    return digest !== null && exactKeys(digest, ["claimedDigestHex", "digestBasis"]) && validDigestHex(digest["claimedDigestHex"]) && isNonEmptyString(digest["digestBasis"]);
  })() && (() => {
    const provenance2 = record(candidate["evidenceProvenance"]);
    return provenance2 !== null && exactKeys(provenance2, [
      "registrationSourceRef",
      "observedAtEpochMs",
      "observedBy"
    ]) && isNonEmptyString(provenance2["registrationSourceRef"]) && safeNonNegativeInteger(provenance2["observedAtEpochMs"]) && isNonEmptyString(provenance2["observedBy"]);
  })() && (() => {
    const slot = record(candidate["onchainEvidenceSlot"]);
    return slot !== null && exactKeys(slot, [
      "status",
      "chainIdObserved",
      "registryAddress",
      "agentIdObserved",
      "ownerObserved"
    ]) && isNonEmptyString(slot["status"]) && (slot["chainIdObserved"] === null || isNonEmptyString(slot["chainIdObserved"])) && (slot["registryAddress"] === null || isNonEmptyString(slot["registryAddress"])) && (slot["agentIdObserved"] === null || isNonEmptyString(slot["agentIdObserved"])) && (slot["ownerObserved"] === null || isNonEmptyString(slot["ownerObserved"]));
  })();
  const provenance = wellFormed ? candidate !== null ? record(candidate["evidenceProvenance"]) : null : null;
  const receiverRecomputedDigestHex = inputWellFormed && inputRecord !== null ? inputRecord["receiverRecomputedDigestHex"] : null;
  const receiverEvaluatedAtEpochMs = inputWellFormed && inputRecord !== null ? inputRecord["receiverEvaluatedAtEpochMs"] : null;
  const receiverMaximumAgeMs = inputWellFormed && inputRecord !== null ? inputRecord["receiverMaximumAgeMs"] : null;
  const freshness = diagnoseRegistrationEvidenceFreshness(
    provenance,
    receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs
  );
  const claimedDigestHex = wellFormed && (() => {
    const digest = record(candidate["registrationDigest"]);
    return digest !== null ? digest["claimedDigestHex"] : null;
  })();
  const digestBasis = wellFormed ? record(candidate["registrationDigest"])["digestBasis"] : null;
  const digestRecomputeAgrees = claimedDigestHex !== null && validDigestHex(receiverRecomputedDigestHex) && claimedDigestHex === receiverRecomputedDigestHex;
  const basisProven = wellFormed && digestBasis === POND_STAGE_DP24_REGISTRATION_DIGEST_BASES[0];
  const onchainSlotStatus = wellFormed ? record(candidate["onchainEvidenceSlot"])["status"] : null;
  const onchainSlotClaimed = wellFormed && (() => {
    const slot = record(candidate["onchainEvidenceSlot"]);
    return slot["status"] !== POND_STAGE_DP24_ONCHAIN_EVIDENCE_SLOT_STATUSES[0] || slot["chainIdObserved"] !== null || slot["registryAddress"] !== null || slot["agentIdObserved"] !== null || slot["ownerObserved"] !== null;
  })();
  const posturesComplete = wellFormed && Object.entries(POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_POSTURES).every(
    ([postureKey, postureLiteral]) => candidate[postureKey] === postureLiteral
  );
  const fresh = freshness.state === "fresh";
  const consumedNothing = wellFormed && candidate["registrationEvidenceConsumedThisCut"] === false && candidate["authority"] === "none" && !hasForbiddenKey(candidate, POND_STAGE_DP24_FORBIDDEN_AGENT_IDENTITY_EVIDENCE_KEYS);
  const suppliedBasisProven = wellFormed && candidate["evidenceBasis"] === POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_BASES[0];
  const checkValues = [
    wellFormed,
    digestRecomputeAgrees,
    basisProven,
    wellFormed && !onchainSlotClaimed,
    posturesComplete,
    fresh,
    consumedNothing && suppliedBasisProven
  ];
  const satisfied = POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CHECKS.filter(
    (_, index) => checkValues[index] === true
  );
  const unsatisfied = POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CHECKS.filter(
    (_, index) => checkValues[index] !== true
  );
  let reason;
  if (!wellFormed) reason = "agent_registration_evidence_record_invalid";
  else if (!digestRecomputeAgrees || !basisProven)
    reason = "registration_digest_agreement_not_proven";
  else if (onchainSlotClaimed)
    reason = "onchain_coordinate_claimed_without_onchain_evidence";
  else if (!fresh) reason = "agent_registration_evidence_not_fresh";
  else if (unsatisfied.length > 0)
    reason = "receiver_registration_evidence_proof_incomplete";
  else reason = "agent_registration_evidence_derived_evidence_only_presentation_satisfied";
  const green = unsatisfied.length === 0 && suppliedBasisProven && fresh;
  return Object.freeze({
    contractVersion: POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION,
    agentRegistrationEvidenceState: green ? "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel" : "agent_registration_evidence_not_presentation_ready",
    reason,
    satisfiedChecks: Object.freeze(satisfied),
    unsatisfiedChecks: Object.freeze(unsatisfied),
    agentRegistrationEvidenceVersion: wellFormed ? POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION : "invalid",
    evidenceBasis: candidate !== null && isNonEmptyString(candidate["evidenceBasis"]) ? candidate["evidenceBasis"] : null,
    evidenceFreshnessDiagnosis: freshness,
    registrationDigestClaimedHex: typeof claimedDigestHex === "string" ? claimedDigestHex : null,
    presentationDigestRecomputeAgrees: digestRecomputeAgrees,
    onchainEvidenceSlotStatus: typeof onchainSlotStatus === "string" ? onchainSlotStatus : null,
    agentRegistrationEvidenceEstablishesAdmission: false,
    agentRegistrationEvidenceEstablishesMembership: false,
    agentRegistrationEvidenceEstablishesChannel: false,
    agentRegistrationEvidenceEstablishesAuthority: false,
    agentRegistrationEvidenceEstablishesCapability: false,
    agentRegistrationEvidenceEstablishesGrant: false,
    agentRegistrationEvidenceEstablishesConsequenceOrExecution: false,
    registrationPresentedEstablishesRuntimeIdentity: false,
    registrationDigestAcceptedAsPrincipalId: false,
    erc8004IdentityAcceptedAsPrincipalId: false,
    erc8004ValidationAcceptedAsAcceptance: false,
    erc8004ReputationAcceptedAsAuthority: false,
    erc8004RegistryRecordAcceptedAsLocalAdmission: false,
    presentedEvidencePromotedToCanonicalCurrentState: false,
    admissionWidenedByPresentation: false,
    sourceVerifiedPresentedAsWiringOrLiveVerified: false,
    registrationEvidenceConsumedThisCut: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
    ...POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_POSTURES
  });
}
__name(assessPondAgentRegistrationEvidence, "assessPondAgentRegistrationEvidence");

// src/fixtures/stage-d-p24-agent-identity-evidence.ts
var stageDP24CanonicalTranscriptionLines = Object.freeze([
  "registrationTypeKind=eip_8004_registration_v1_style_self_describing_document",
  "registrationName=ToadAid Trading Desk",
  "registrationServiceCount=2",
  "registrationServiceName=github version=v1",
  "registrationServiceName=home version=v1",
  "registrationActive=true",
  "x402Support=false",
  "supportedTrust=reputation"
]);
var stageDP24DeskRegistrationDigestHex = "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83";
var stageDP24CanonicalTranscriptionDigestHex = "7ad2520e3430db741b322bd370ff2a8b087a975a84bdd903b21b7bb59b17a53d";
var stageDP24DeskRegistrationSourceRef = "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json";
var stageDP24DeskRegistrationAgentEvidenceRef = "agent:fixture:stage-d-p24:trading-desk-registration-evidence";
var stageDP24DeskRegistrationName = "ToadAid Trading Desk";
var stageDP24DeskRegistrationTypeKind = "eip_8004_registration_v1_style_self_describing_document";
var stageDP24DeskRegistrationServiceNames = Object.freeze(["github", "home"]);
var stageDP24DeskRegistrationServiceCount = 2;
var stageDP24DeskRegistrationActive = true;
var stageDP24DeskRegistrationX402Support = false;
var stageDP24DeskRegistrationSupportedTrust = Object.freeze(["reputation"]);
var stageDP24DeskRegistrationObservedBy = "receiver-local-inspection";
var stageDP24DeskRegistrationObservedAtEpochMs = 180000007e4;
var deepFreeze = /* @__PURE__ */ __name((value) => {
  if (Array.isArray(value)) {
    for (const item of value) deepFreeze(item);
    Object.freeze(value);
    return value;
  }
  if (value !== null && typeof value === "object") {
    const recordValue = value;
    for (const item of Object.values(recordValue)) deepFreeze(item);
    Object.freeze(value);
  }
  return value;
}, "deepFreeze");
var stageDP24AgentRegistrationEvidenceMatrix = deepFreeze([
  {
    fixtureLabel: "desk-registration-presented-green",
    registrationEvidenceRecord: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "kind": "pond-agent-registration-evidence-record",
      "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "registrationName": "ToadAid Trading Desk",
      "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
      "registrationServiceCount": 2,
      "registrationServiceNames": [
        "github",
        "home"
      ],
      "registrationActive": true,
      "x402Support": false,
      "supportedTrust": [
        "reputation"
      ],
      "registrationDigest": {
        "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "digestBasis": "sha256_registration_file_bytes_v1"
      },
      "evidenceProvenance": {
        "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
        "observedAtEpochMs": 180000007e4,
        "observedBy": "receiver-local-inspection"
      },
      "onchainEvidenceSlot": {
        "status": "not_observed_no_registration_coordinate_is_invented",
        "chainIdObserved": null,
        "registryAddress": null,
        "agentIdObserved": null,
        "ownerObserved": null
      },
      "registrationEvidenceConsumedThisCut": false,
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071e3,
    receiverMaximumAgeMs: 6e4,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel",
      "reason": "agent_registration_evidence_derived_evidence_only_presentation_satisfied",
      "satisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "presentation_digest_sha256_recomputed_and_agrees",
        "registration_digest_basis_declared_file_bytes",
        "onchain_evidence_slot_honestly_not_observed",
        "agent_registration_evidence_refusal_postures_complete",
        "agent_registration_evidence_fresh_by_provenance_observation_time",
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "unsatisfiedChecks": [],
      "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "evidenceFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1e3
      },
      "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
      "presentationDigestRecomputeAgrees": true,
      "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  },
  {
    fixtureLabel: "registration-record-non-object",
    registrationEvidenceRecord: "not-a-record",
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071e3,
    receiverMaximumAgeMs: 6e4,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
      "reason": "agent_registration_evidence_record_invalid",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "presentation_digest_sha256_recomputed_and_agrees",
        "registration_digest_basis_declared_file_bytes",
        "onchain_evidence_slot_honestly_not_observed",
        "agent_registration_evidence_refusal_postures_complete",
        "agent_registration_evidence_fresh_by_provenance_observation_time",
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "agentRegistrationEvidenceVersion": "invalid",
      "evidenceBasis": null,
      "evidenceFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "registrationDigestClaimedHex": null,
      "presentationDigestRecomputeAgrees": false,
      "onchainEvidenceSlotStatus": null,
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  },
  {
    fixtureLabel: "registration-record-missing-key",
    registrationEvidenceRecord: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "kind": "pond-agent-registration-evidence-record",
      "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "registrationName": "ToadAid Trading Desk",
      "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
      "registrationServiceCount": 2,
      "registrationServiceNames": [
        "github",
        "home"
      ],
      "registrationActive": true,
      "supportedTrust": [
        "reputation"
      ],
      "registrationDigest": {
        "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "digestBasis": "sha256_registration_file_bytes_v1"
      },
      "evidenceProvenance": {
        "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
        "observedAtEpochMs": 180000007e4,
        "observedBy": "receiver-local-inspection"
      },
      "onchainEvidenceSlot": {
        "status": "not_observed_no_registration_coordinate_is_invented",
        "chainIdObserved": null,
        "registryAddress": null,
        "agentIdObserved": null,
        "ownerObserved": null
      },
      "registrationEvidenceConsumedThisCut": false,
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071e3,
    receiverMaximumAgeMs: 6e4,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
      "reason": "agent_registration_evidence_record_invalid",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "presentation_digest_sha256_recomputed_and_agrees",
        "registration_digest_basis_declared_file_bytes",
        "onchain_evidence_slot_honestly_not_observed",
        "agent_registration_evidence_refusal_postures_complete",
        "agent_registration_evidence_fresh_by_provenance_observation_time",
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "agentRegistrationEvidenceVersion": "invalid",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "evidenceFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "registrationDigestClaimedHex": null,
      "presentationDigestRecomputeAgrees": false,
      "onchainEvidenceSlotStatus": null,
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  },
  {
    fixtureLabel: "registration-record-extra-forbidden-key",
    registrationEvidenceRecord: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "kind": "pond-agent-registration-evidence-record",
      "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "registrationName": "ToadAid Trading Desk",
      "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
      "registrationServiceCount": 2,
      "registrationServiceNames": [
        "github",
        "home"
      ],
      "registrationActive": true,
      "x402Support": false,
      "supportedTrust": [
        "reputation"
      ],
      "registrationDigest": {
        "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "digestBasis": "sha256_registration_file_bytes_v1"
      },
      "evidenceProvenance": {
        "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
        "observedAtEpochMs": 180000007e4,
        "observedBy": "receiver-local-inspection"
      },
      "onchainEvidenceSlot": {
        "status": "not_observed_no_registration_coordinate_is_invented",
        "chainIdObserved": null,
        "registryAddress": null,
        "agentIdObserved": null,
        "ownerObserved": null
      },
      "registrationEvidenceConsumedThisCut": false,
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified",
      "apiKey": "never-carried-value"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071e3,
    receiverMaximumAgeMs: 6e4,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
      "reason": "agent_registration_evidence_record_invalid",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "presentation_digest_sha256_recomputed_and_agrees",
        "registration_digest_basis_declared_file_bytes",
        "onchain_evidence_slot_honestly_not_observed",
        "agent_registration_evidence_refusal_postures_complete",
        "agent_registration_evidence_fresh_by_provenance_observation_time",
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "agentRegistrationEvidenceVersion": "invalid",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "evidenceFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "registrationDigestClaimedHex": null,
      "presentationDigestRecomputeAgrees": false,
      "onchainEvidenceSlotStatus": null,
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  },
  {
    fixtureLabel: "registration-record-deep-planted-forbidden-key",
    registrationEvidenceRecord: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "kind": "pond-agent-registration-evidence-record",
      "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "registrationName": "ToadAid Trading Desk",
      "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
      "registrationServiceCount": 2,
      "registrationServiceNames": [
        "github",
        "home"
      ],
      "registrationActive": true,
      "x402Support": false,
      "supportedTrust": [
        "reputation"
      ],
      "registrationDigest": {
        "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "digestBasis": "sha256_registration_file_bytes_v1"
      },
      "evidenceProvenance": {
        "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
        "observedAtEpochMs": 180000007e4,
        "observedBy": {
          "token": "never-carried"
        }
      },
      "onchainEvidenceSlot": {
        "status": "not_observed_no_registration_coordinate_is_invented",
        "chainIdObserved": null,
        "registryAddress": null,
        "agentIdObserved": null,
        "ownerObserved": null
      },
      "registrationEvidenceConsumedThisCut": false,
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071e3,
    receiverMaximumAgeMs: 6e4,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
      "reason": "agent_registration_evidence_record_invalid",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "presentation_digest_sha256_recomputed_and_agrees",
        "registration_digest_basis_declared_file_bytes",
        "onchain_evidence_slot_honestly_not_observed",
        "agent_registration_evidence_refusal_postures_complete",
        "agent_registration_evidence_fresh_by_provenance_observation_time",
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "agentRegistrationEvidenceVersion": "invalid",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "evidenceFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "registrationDigestClaimedHex": null,
      "presentationDigestRecomputeAgrees": false,
      "onchainEvidenceSlotStatus": null,
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  },
  {
    fixtureLabel: "tampered-digest",
    registrationEvidenceRecord: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "kind": "pond-agent-registration-evidence-record",
      "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "registrationName": "ToadAid Trading Desk",
      "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
      "registrationServiceCount": 2,
      "registrationServiceNames": [
        "github",
        "home"
      ],
      "registrationActive": true,
      "x402Support": false,
      "supportedTrust": [
        "reputation"
      ],
      "registrationDigest": {
        "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb8f",
        "digestBasis": "sha256_registration_file_bytes_v1"
      },
      "evidenceProvenance": {
        "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
        "observedAtEpochMs": 180000007e4,
        "observedBy": "receiver-local-inspection"
      },
      "onchainEvidenceSlot": {
        "status": "not_observed_no_registration_coordinate_is_invented",
        "chainIdObserved": null,
        "registryAddress": null,
        "agentIdObserved": null,
        "ownerObserved": null
      },
      "registrationEvidenceConsumedThisCut": false,
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071e3,
    receiverMaximumAgeMs: 6e4,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
      "reason": "registration_digest_agreement_not_proven",
      "satisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "registration_digest_basis_declared_file_bytes",
        "onchain_evidence_slot_honestly_not_observed",
        "agent_registration_evidence_refusal_postures_complete",
        "agent_registration_evidence_fresh_by_provenance_observation_time",
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "unsatisfiedChecks": [
        "presentation_digest_sha256_recomputed_and_agrees"
      ],
      "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "evidenceFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1e3
      },
      "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb8f",
      "presentationDigestRecomputeAgrees": false,
      "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  },
  {
    fixtureLabel: "wrong-digest-basis",
    registrationEvidenceRecord: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "kind": "pond-agent-registration-evidence-record",
      "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "registrationName": "ToadAid Trading Desk",
      "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
      "registrationServiceCount": 2,
      "registrationServiceNames": [
        "github",
        "home"
      ],
      "registrationActive": true,
      "x402Support": false,
      "supportedTrust": [
        "reputation"
      ],
      "registrationDigest": {
        "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "digestBasis": "sha256_serialized_json_bytes_v1"
      },
      "evidenceProvenance": {
        "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
        "observedAtEpochMs": 180000007e4,
        "observedBy": "receiver-local-inspection"
      },
      "onchainEvidenceSlot": {
        "status": "not_observed_no_registration_coordinate_is_invented",
        "chainIdObserved": null,
        "registryAddress": null,
        "agentIdObserved": null,
        "ownerObserved": null
      },
      "registrationEvidenceConsumedThisCut": false,
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071e3,
    receiverMaximumAgeMs: 6e4,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
      "reason": "registration_digest_agreement_not_proven",
      "satisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "presentation_digest_sha256_recomputed_and_agrees",
        "onchain_evidence_slot_honestly_not_observed",
        "agent_registration_evidence_refusal_postures_complete",
        "agent_registration_evidence_fresh_by_provenance_observation_time",
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "unsatisfiedChecks": [
        "registration_digest_basis_declared_file_bytes"
      ],
      "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "evidenceFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1e3
      },
      "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
      "presentationDigestRecomputeAgrees": true,
      "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  },
  {
    fixtureLabel: "onchain-slot-claimed",
    registrationEvidenceRecord: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "kind": "pond-agent-registration-evidence-record",
      "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "registrationName": "ToadAid Trading Desk",
      "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
      "registrationServiceCount": 2,
      "registrationServiceNames": [
        "github",
        "home"
      ],
      "registrationActive": true,
      "x402Support": false,
      "supportedTrust": [
        "reputation"
      ],
      "registrationDigest": {
        "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "digestBasis": "sha256_registration_file_bytes_v1"
      },
      "evidenceProvenance": {
        "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
        "observedAtEpochMs": 180000007e4,
        "observedBy": "receiver-local-inspection"
      },
      "onchainEvidenceSlot": {
        "status": "claimed_observed_by_the_presenting_party",
        "chainIdObserved": null,
        "registryAddress": null,
        "agentIdObserved": "1",
        "ownerObserved": null
      },
      "registrationEvidenceConsumedThisCut": false,
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071e3,
    receiverMaximumAgeMs: 6e4,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
      "reason": "onchain_coordinate_claimed_without_onchain_evidence",
      "satisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "presentation_digest_sha256_recomputed_and_agrees",
        "registration_digest_basis_declared_file_bytes",
        "agent_registration_evidence_refusal_postures_complete",
        "agent_registration_evidence_fresh_by_provenance_observation_time",
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "unsatisfiedChecks": [
        "onchain_evidence_slot_honestly_not_observed"
      ],
      "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "evidenceFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1e3
      },
      "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
      "presentationDigestRecomputeAgrees": true,
      "onchainEvidenceSlotStatus": "claimed_observed_by_the_presenting_party",
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  },
  {
    fixtureLabel: "claimed-observed-basis-refused",
    registrationEvidenceRecord: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "kind": "pond-agent-registration-evidence-record",
      "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
      "evidenceBasis": "claimed_observed_registration_not_supplied",
      "registrationName": "ToadAid Trading Desk",
      "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
      "registrationServiceCount": 2,
      "registrationServiceNames": [
        "github",
        "home"
      ],
      "registrationActive": true,
      "x402Support": false,
      "supportedTrust": [
        "reputation"
      ],
      "registrationDigest": {
        "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "digestBasis": "sha256_registration_file_bytes_v1"
      },
      "evidenceProvenance": {
        "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
        "observedAtEpochMs": 180000007e4,
        "observedBy": "receiver-local-inspection"
      },
      "onchainEvidenceSlot": {
        "status": "not_observed_no_registration_coordinate_is_invented",
        "chainIdObserved": null,
        "registryAddress": null,
        "agentIdObserved": null,
        "ownerObserved": null
      },
      "registrationEvidenceConsumedThisCut": false,
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071e3,
    receiverMaximumAgeMs: 6e4,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
      "reason": "receiver_registration_evidence_proof_incomplete",
      "satisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "presentation_digest_sha256_recomputed_and_agrees",
        "registration_digest_basis_declared_file_bytes",
        "onchain_evidence_slot_honestly_not_observed",
        "agent_registration_evidence_refusal_postures_complete",
        "agent_registration_evidence_fresh_by_provenance_observation_time"
      ],
      "unsatisfiedChecks": [
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
      "evidenceBasis": "claimed_observed_registration_not_supplied",
      "evidenceFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1e3
      },
      "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
      "presentationDigestRecomputeAgrees": true,
      "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  },
  {
    fixtureLabel: "stale-observation",
    registrationEvidenceRecord: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "kind": "pond-agent-registration-evidence-record",
      "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "registrationName": "ToadAid Trading Desk",
      "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
      "registrationServiceCount": 2,
      "registrationServiceNames": [
        "github",
        "home"
      ],
      "registrationActive": true,
      "x402Support": false,
      "supportedTrust": [
        "reputation"
      ],
      "registrationDigest": {
        "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "digestBasis": "sha256_registration_file_bytes_v1"
      },
      "evidenceProvenance": {
        "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
        "observedAtEpochMs": 180000007e4,
        "observedBy": "receiver-local-inspection"
      },
      "onchainEvidenceSlot": {
        "status": "not_observed_no_registration_coordinate_is_invented",
        "chainIdObserved": null,
        "registryAddress": null,
        "agentIdObserved": null,
        "ownerObserved": null
      },
      "registrationEvidenceConsumedThisCut": false,
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000141e3,
    receiverMaximumAgeMs: 6e4,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
      "reason": "agent_registration_evidence_not_fresh",
      "satisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "presentation_digest_sha256_recomputed_and_agrees",
        "registration_digest_basis_declared_file_bytes",
        "onchain_evidence_slot_honestly_not_observed",
        "agent_registration_evidence_refusal_postures_complete",
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "unsatisfiedChecks": [
        "agent_registration_evidence_fresh_by_provenance_observation_time"
      ],
      "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "evidenceFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 71e3
      },
      "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
      "presentationDigestRecomputeAgrees": true,
      "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  },
  {
    fixtureLabel: "future-observation",
    registrationEvidenceRecord: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "kind": "pond-agent-registration-evidence-record",
      "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "registrationName": "ToadAid Trading Desk",
      "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
      "registrationServiceCount": 2,
      "registrationServiceNames": [
        "github",
        "home"
      ],
      "registrationActive": true,
      "x402Support": false,
      "supportedTrust": [
        "reputation"
      ],
      "registrationDigest": {
        "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "digestBasis": "sha256_registration_file_bytes_v1"
      },
      "evidenceProvenance": {
        "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
        "observedAtEpochMs": 180000007e4,
        "observedBy": "receiver-local-inspection"
      },
      "onchainEvidenceSlot": {
        "status": "not_observed_no_registration_coordinate_is_invented",
        "chainIdObserved": null,
        "registryAddress": null,
        "agentIdObserved": null,
        "ownerObserved": null
      },
      "registrationEvidenceConsumedThisCut": false,
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000069e3,
    receiverMaximumAgeMs: 6e4,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
      "reason": "agent_registration_evidence_not_fresh",
      "satisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "presentation_digest_sha256_recomputed_and_agrees",
        "registration_digest_basis_declared_file_bytes",
        "onchain_evidence_slot_honestly_not_observed",
        "agent_registration_evidence_refusal_postures_complete",
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "unsatisfiedChecks": [
        "agent_registration_evidence_fresh_by_provenance_observation_time"
      ],
      "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "evidenceFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_time_in_future",
        "observationAgeMs": null
      },
      "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
      "presentationDigestRecomputeAgrees": true,
      "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  },
  {
    fixtureLabel: "unrecognized-type-kind-presented",
    registrationEvidenceRecord: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "kind": "pond-agent-registration-evidence-record",
      "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "registrationName": "ToadAid Trading Desk",
      "registrationTypeKind": "unrecognized_self_describing_registration_document",
      "registrationServiceCount": 2,
      "registrationServiceNames": [
        "github",
        "home"
      ],
      "registrationActive": true,
      "x402Support": false,
      "supportedTrust": [
        "reputation"
      ],
      "registrationDigest": {
        "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "digestBasis": "sha256_registration_file_bytes_v1"
      },
      "evidenceProvenance": {
        "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
        "observedAtEpochMs": 180000007e4,
        "observedBy": "receiver-local-inspection"
      },
      "onchainEvidenceSlot": {
        "status": "not_observed_no_registration_coordinate_is_invented",
        "chainIdObserved": null,
        "registryAddress": null,
        "agentIdObserved": null,
        "ownerObserved": null
      },
      "registrationEvidenceConsumedThisCut": false,
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071e3,
    receiverMaximumAgeMs: 6e4,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel",
      "reason": "agent_registration_evidence_derived_evidence_only_presentation_satisfied",
      "satisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "presentation_digest_sha256_recomputed_and_agrees",
        "registration_digest_basis_declared_file_bytes",
        "onchain_evidence_slot_honestly_not_observed",
        "agent_registration_evidence_refusal_postures_complete",
        "agent_registration_evidence_fresh_by_provenance_observation_time",
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "unsatisfiedChecks": [],
      "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
      "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
      "evidenceFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1e3
      },
      "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
      "presentationDigestRecomputeAgrees": true,
      "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  },
  {
    fixtureLabel: "garbage-input",
    registrationEvidenceRecord: void 0,
    receiverRecomputedDigestHex: void 0,
    receiverEvaluatedAtEpochMs: void 0,
    receiverMaximumAgeMs: void 0,
    assessment: {
      "contractVersion": "pond-agent-registration-evidence-d-p24",
      "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
      "reason": "agent_registration_evidence_record_invalid",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "agent_registration_evidence_record_well_formed",
        "presentation_digest_sha256_recomputed_and_agrees",
        "registration_digest_basis_declared_file_bytes",
        "onchain_evidence_slot_honestly_not_observed",
        "agent_registration_evidence_refusal_postures_complete",
        "agent_registration_evidence_fresh_by_provenance_observation_time",
        "registration_evidence_consumed_by_nothing_and_authority_none"
      ],
      "agentRegistrationEvidenceVersion": "invalid",
      "evidenceBasis": null,
      "evidenceFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "registrationDigestClaimedHex": null,
      "presentationDigestRecomputeAgrees": false,
      "onchainEvidenceSlotStatus": null,
      "agentRegistrationEvidenceEstablishesAdmission": false,
      "agentRegistrationEvidenceEstablishesMembership": false,
      "agentRegistrationEvidenceEstablishesChannel": false,
      "agentRegistrationEvidenceEstablishesAuthority": false,
      "agentRegistrationEvidenceEstablishesCapability": false,
      "agentRegistrationEvidenceEstablishesGrant": false,
      "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
      "registrationPresentedEstablishesRuntimeIdentity": false,
      "registrationDigestAcceptedAsPrincipalId": false,
      "erc8004IdentityAcceptedAsPrincipalId": false,
      "erc8004ValidationAcceptedAsAcceptance": false,
      "erc8004ReputationAcceptedAsAuthority": false,
      "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
      "presentedEvidencePromotedToCanonicalCurrentState": false,
      "admissionWidenedByPresentation": false,
      "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
      "registrationEvidenceConsumedThisCut": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none",
      "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
      "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
      "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
      "admissionPosture": "registration_evidence_does_not_establish_local_admission",
      "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
      "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    }
  }
]);

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

// src/agents/pond-stage-d-agent-registry-record.ts
if (stageDP0Agent0Record.identityClaim.claimStatus !== "not_observed") {
  throw new TypeError("stage-d-p0 identity claim observation drift");
}
if (stageDP0Agent0Record.authority !== "none") {
  throw new TypeError("stage-d-p0 agent presence authority drift");
}
if (stageDP24AgentRegistrationEvidenceMatrix.length !== 13) {
  throw new TypeError("stage-d-p24 registration evidence matrix inventory drift");
}
var greenArm = stageDP24AgentRegistrationEvidenceMatrix[0];
if (greenArm === void 0) {
  throw new TypeError("stage-d-p24 registration evidence green arm drift");
}
if (greenArm.fixtureLabel !== "desk-registration-presented-green" || greenArm.assessment.contractVersion !== "pond-agent-registration-evidence-d-p24" || greenArm.assessment.registrationDigestClaimedHex !== stageDP24DeskRegistrationDigestHex) {
  throw new TypeError("stage-d-p24 registration evidence green arm drift");
}
if (greenArm.assessment.agentRegistrationEvidenceState !== "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel" || greenArm.assessment.reason !== "agent_registration_evidence_derived_evidence_only_presentation_satisfied" || greenArm.assessment.satisfiedChecks.length !== 7 || greenArm.assessment.unsatisfiedChecks.length !== 0) {
  throw new TypeError("stage-d-p24 registration evidence green assessment drift");
}
if (greenArm.assessment.authority !== "none" || greenArm.assessment.runtimeActivationPosture !== "not_included" || greenArm.assessment.registrationEvidenceConsumedThisCut !== false) {
  throw new TypeError("stage-d-p24 registration evidence authority drift");
}
var greenRecordValue = greenArm.registrationEvidenceRecord;
if (greenRecordValue["registrationDigest"] === void 0 || greenRecordValue["registrationDigest"]["claimedDigestHex"] !== stageDP24DeskRegistrationDigestHex) {
  throw new TypeError("stage-d-p24 registration digest pin drift");
}
if (greenArm.assessment.evidenceFreshnessDiagnosis.state !== "fresh") {
  throw new TypeError("stage-d-p24 registration evidence freshness drift");
}
var presentationAssessment = assessPondAgentRegistrationEvidence({
  registrationEvidenceRecord: greenArm.registrationEvidenceRecord,
  receiverRecomputedDigestHex: greenArm.receiverRecomputedDigestHex,
  receiverEvaluatedAtEpochMs: greenArm.receiverEvaluatedAtEpochMs,
  receiverMaximumAgeMs: greenArm.receiverMaximumAgeMs
});
if (presentationAssessment.agentRegistrationEvidenceState !== "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel") {
  throw new TypeError("stage-d-p24 re-performed presentation drift");
}
var pondStageDAgentRegistryRecord = {
  contractVersion: "pond-agent-registration-evidence-d-p24",
  kind: "pond-agent-registry-evidence-presentation",
  agentEvidenceRef: stageDP24DeskRegistrationAgentEvidenceRef,
  registrationName: stageDP24DeskRegistrationName,
  registrationTypeKind: stageDP24DeskRegistrationTypeKind,
  registrationServiceCount: stageDP24DeskRegistrationServiceCount,
  registrationServiceNames: stageDP24DeskRegistrationServiceNames,
  registrationActive: stageDP24DeskRegistrationActive,
  x402Support: stageDP24DeskRegistrationX402Support,
  supportedTrust: stageDP24DeskRegistrationSupportedTrust,
  registrationDigestHex: stageDP24DeskRegistrationDigestHex,
  registrationDigestBasis: "sha256_registration_file_bytes_v1",
  canonicalTranscriptionDigestHex: stageDP24CanonicalTranscriptionDigestHex,
  registrationSourceRef: stageDP24DeskRegistrationSourceRef,
  observedAtEpochMs: stageDP24DeskRegistrationObservedAtEpochMs,
  observedBy: stageDP24DeskRegistrationObservedBy,
  presentationState: presentationAssessment.agentRegistrationEvidenceState,
  presentationReason: presentationAssessment.reason,
  satisfiedChecks: presentationAssessment.satisfiedChecks,
  unsatisfiedChecks: presentationAssessment.unsatisfiedChecks,
  freshnessState: presentationAssessment.evidenceFreshnessDiagnosis.state,
  onchainEvidenceSlotStatus: presentationAssessment.onchainEvidenceSlotStatus ?? "not_observed_no_registration_coordinate_is_invented",
  evidencePostures: {
    evidencePosture: presentationAssessment.evidencePosture,
    notRuntimeIdentityPosture: presentationAssessment.notRuntimeIdentityPosture,
    noInventionPosture: presentationAssessment.noInventionPosture,
    admissionPosture: presentationAssessment.admissionPosture,
    channelPosture: presentationAssessment.channelPosture,
    erc8004CeilingPosture: presentationAssessment.erc8004CeilingPosture,
    verificationApplicabilityPosture: presentationAssessment.verificationApplicabilityPosture
  },
  registryEvidenceStandingLine: "community agents' registrations present here as evidence only — presentation is not admission, opens no channel, grants no authority",
  authority: "none",
  runtimeActivationPosture: "not_included"
};
Object.freeze(pondStageDAgentRegistryRecord);
var pond_stage_d_agent_registry_record_default = pondStageDAgentRegistryRecord;

// pond-stage-d-agent-registry-entry.ts
var pond_stage_d_agent_registry_entry_default = pond_stage_d_agent_registry_record_default;
export {
  pond_stage_d_agent_registry_entry_default as default,
  pond_stage_d_agent_registry_record_default as pondStageDAgentRegistryRecord
};
