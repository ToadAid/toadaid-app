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
export {
  POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
  assessPondLocalPrincipalAuthenticationObservation,
  stageDP0LocalPrincipalRef
};
