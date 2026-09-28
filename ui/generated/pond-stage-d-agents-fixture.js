var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

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

// src/contracts/pond-agent-presence-source-binding.ts
var bindingChecks = Object.freeze([
  "exact_repository_identity",
  "exact_committed_source_commit_binding",
  "exact_observed_tool_inventory",
  "read_only_source_posture",
  "presence_records_sourced_from_bound_contract",
  "no_live_connection_in_binding"
]);
var POND_STAGE_D_P1_FORBIDDEN_BINDING_KEYS = Object.freeze([
  "connect",
  "listen",
  "poll",
  "subscribe",
  "execute",
  "canExecute",
  "mayMutate",
  "approve",
  "grant",
  "apiKey",
  "secret",
  "token"
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
var validSourceContractFixture = /* @__PURE__ */ __name((value) => {
  const fixture = record(value);
  const source = record(record(value)?.sourceContract);
  return fixture !== null && source !== null && exactKeys(fixture, ["contractVersion", "kind", "sourceContract", "authority"]) && fixture.contractVersion === "pond-agent-presence-source-contract-d-p0" && fixture.kind === "pond-agent-presence-source-contract" && exactKeys(source, [
    "repository",
    "boundSourceCommit",
    "observedTools",
    "sourcePosture"
  ]) && source.repository === "trading-desk" && typeof source.boundSourceCommit === "string" && /^[0-9a-f]{40}$/.test(source.boundSourceCommit) && exactArray(source.observedTools, ["runtime_status", "identity_status"]) && source.sourcePosture === "read_only_tool_contract_only_no_live_connection" && fixture.authority === "none" && !hasForbiddenKey(fixture, POND_STAGE_D_P1_FORBIDDEN_BINDING_KEYS);
}, "validSourceContractFixture");
var validProjectionForBinding = /* @__PURE__ */ __name((value) => {
  const projection = record(value);
  if (projection === null || !exactKeys(projection, [
    "contractVersion",
    "kind",
    "posture",
    "localPrincipalBinding",
    "observedAgents",
    "communityRelationshipState",
    "projectRelationshipState",
    "personalMemoryBoundary",
    "authority"
  ]) || projection.contractVersion !== "pond-agent-presence-projection-d-p0" || projection.kind !== "pond-agent-presence-projection" || projection.posture !== "fixture_observed_presence_projection_authority_none" || !Array.isArray(projection.observedAgents) || projection.observedAgents.length === 0 || projection.communityRelationshipState !== "not_established" || projection.projectRelationshipState !== "not_established" || projection.authority !== "none")
    return false;
  const boundary = record(projection.personalMemoryBoundary);
  if (boundary === null || !exactKeys(boundary, [
    "deskJournalLaneAdmitted",
    "deskMemoryLaneAdmitted",
    "deskNarrativeLaneAdmitted",
    "deskTranscriptLaneAdmitted"
  ]) || ["deskJournalLaneAdmitted", "deskMemoryLaneAdmitted", "deskNarrativeLaneAdmitted", "deskTranscriptLaneAdmitted"].some(
    (key) => boundary[key] !== false
  ))
    return false;
  const binding = record(projection.localPrincipalBinding);
  if (binding === null || binding.authenticationPerformed !== false || binding.ceremonyPosture !== "not_defined_this_cut")
    return false;
  for (const entry of projection.observedAgents) {
    const agent = record(entry);
    if (agent === null || typeof agent.agentRef !== "string" || !agent.agentRef.startsWith("agent:") || agent.authority !== "none")
      return false;
  }
  return !hasForbiddenKey(projection, POND_STAGE_D_P1_FORBIDDEN_BINDING_KEYS);
}, "validProjectionForBinding");
var assessment = /* @__PURE__ */ __name((reason, sourceContractFixtureVersion, satisfiedChecks, unsatisfiedChecks) => Object.freeze({
  contractVersion: "pond-agent-presence-source-binding-d-p1",
  sourceContractFixtureVersion,
  assessmentKind: "deterministic_supplied_source_binding",
  bindingState: reason === "fixture_source_binding_structurally_admissible" ? "fixture_bound_committed_source_contract" : "not_established",
  reason,
  satisfiedChecks: Object.freeze([...satisfiedChecks]),
  unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
  liveSourceContractVerifiedByReceiver: false,
  presenceRecordsAcceptedAsLiveObservation: false,
  currentTruthAdmitted: false,
  runtimeActivationPosture: "not_included",
  authority: "none"
}), "assessment");
function assessPondAgentPresenceSourceBinding(input) {
  const sourceFixtureValid = validSourceContractFixture(input.sourceContractFixture);
  if (!sourceFixtureValid)
    return assessment(
      "source_contract_fixture_invalid",
      "invalid",
      [],
      bindingChecks
    );
  if (!validProjectionForBinding(input.projection))
    return assessment(
      "projection_invalid",
      "pond-agent-presence-source-contract-d-p0",
      [],
      bindingChecks
    );
  const source = input.sourceContractFixture.sourceContract;
  const values = [
    source.repository === "trading-desk",
    /^[0-9a-f]{40}$/.test(source.boundSourceCommit),
    exactArray(source.observedTools, ["runtime_status", "identity_status"]),
    source.sourcePosture === "read_only_tool_contract_only_no_live_connection",
    Array.isArray(
      input.projection.observedAgents
    ) && input.projection.observedAgents.length > 0,
    !hasForbiddenKey(
      input.sourceContractFixture,
      POND_STAGE_D_P1_FORBIDDEN_BINDING_KEYS
    ) && !hasForbiddenKey(
      input.projection,
      POND_STAGE_D_P1_FORBIDDEN_BINDING_KEYS
    )
  ];
  const satisfied = bindingChecks.filter((_, index) => values[index]);
  const unsatisfied = bindingChecks.filter((_, index) => !values[index]);
  return assessment(
    unsatisfied.length === 0 ? "fixture_source_binding_structurally_admissible" : "receiver_live_verification_incomplete",
    "pond-agent-presence-source-contract-d-p0",
    satisfied,
    unsatisfied
  );
}
__name(assessPondAgentPresenceSourceBinding, "assessPondAgentPresenceSourceBinding");

// src/agents/pond-stage-d-agents-record.ts
if (stageDP0AgentPresenceProjection.contractVersion !== "pond-agent-presence-projection-d-p0") {
  throw new TypeError("stage-d-p0 fixture projection contract version drift");
}
if (stageDP0AgentPresenceProjection.authority !== "none") {
  throw new TypeError("stage-d-p0 fixture projection authority drift");
}
if (stageDP0Agent0Record.agentRef !== "agent:fixture:stage-d-p0:trading-desk-agent0") {
  throw new TypeError("stage-d-p0 fixture Agent0 ref drift");
}
if (stageDP0Agent0Record.profileClass !== "personal_agent" || stageDP0Agent0Record.presenceStatus !== "fixture_observed_not_live" || stageDP0Agent0Record.authority !== "none") {
  throw new TypeError("stage-d-p0 fixture Agent0 posture drift");
}
if (stageDP0Agent0Record.runtimeFacts.length !== 7) {
  throw new TypeError("stage-d-p0 fixture Agent0 runtime fact inventory drift");
}
for (const fact of stageDP0Agent0Record.runtimeFacts) {
  if (fact.sourceTool !== "runtime_status") {
    throw new TypeError("stage-d-p0 fixture runtime fact source tool drift");
  }
}
if (stageDP0Agent0Record.identityClaim.claimStatus !== "not_observed") {
  throw new TypeError("stage-d-p0 fixture identity claim observation drift");
}
if (stageDP0CommunityAgentSlotRecord.presenceStatus !== "not_observed" || stageDP0ProjectAgentSlotRecord.presenceStatus !== "not_observed") {
  throw new TypeError("stage-d-p0 fixture relationship slot posture drift");
}
var sourceBindingAssessment = assessPondAgentPresenceSourceBinding({
  sourceContractFixture: stageDP0TradingDeskSourceContract,
  projection: stageDP0AgentPresenceProjection
});
if (sourceBindingAssessment.reason !== "fixture_source_binding_structurally_admissible") {
  throw new TypeError("stage-d-p1 fixture source binding not structurally admissible");
}
var sourceBinding = Object.freeze({
  contractVersion: sourceBindingAssessment.contractVersion,
  sourceContractFixtureVersion: sourceBindingAssessment.sourceContractFixtureVersion,
  repository: stageDP0TradingDeskSourceContract.sourceContract.repository,
  boundSourceCommit: stageDP0TradingDeskSourceContract.sourceContract.boundSourceCommit,
  observedTools: Object.freeze([
    ...stageDP0TradingDeskSourceContract.sourceContract.observedTools
  ]),
  sourcePosture: stageDP0TradingDeskSourceContract.sourceContract.sourcePosture,
  bindingState: sourceBindingAssessment.bindingState,
  reason: sourceBindingAssessment.reason,
  satisfiedChecks: Object.freeze([...sourceBindingAssessment.satisfiedChecks]),
  unsatisfiedChecks: Object.freeze([
    ...sourceBindingAssessment.unsatisfiedChecks
  ]),
  liveSourceContractVerifiedByReceiver: sourceBindingAssessment.liveSourceContractVerifiedByReceiver,
  presenceRecordsAcceptedAsLiveObservation: sourceBindingAssessment.presenceRecordsAcceptedAsLiveObservation,
  runtimeActivationPosture: sourceBindingAssessment.runtimeActivationPosture,
  authority: sourceBindingAssessment.authority
});
var principalBinding = Object.freeze({
  principalRef: stageDP0AgentPresenceProjection.localPrincipalBinding.principalRef,
  bindingState: stageDP0AgentPresenceProjection.localPrincipalBinding.bindingState,
  authenticationPerformed: stageDP0AgentPresenceProjection.localPrincipalBinding.authenticationPerformed,
  ceremonyPosture: stageDP0AgentPresenceProjection.localPrincipalBinding.ceremonyPosture,
  authority: "none"
});
var pickAgent = /* @__PURE__ */ __name((agent) => Object.freeze({
  agentRef: agent.agentRef,
  label: agent.label,
  profileClass: agent.profileClass,
  presenceStatus: agent.presenceStatus,
  transport: agent.transport.transport,
  transportIsAgentIdentity: agent.transport.transportIsAgentIdentity,
  transportEstablishesAdmission: agent.transport.transportEstablishesAdmission,
  liveConnectionPosture: agent.transport.liveConnectionPosture,
  runtimeFacts: Object.freeze(
    agent.runtimeFacts.map(
      (fact) => Object.freeze({
        factLabel: fact.factLabel,
        sourceTool: fact.sourceTool,
        observedValue: fact.observedValue,
        valuePosture: fact.valuePosture
      })
    )
  ),
  identityClaimStatus: agent.identityClaim.claimStatus,
  identityClaimEvidencePosture: agent.identityClaim.evidencePosture,
  onchainIdentityIsPrincipalIdentity: agent.identityClaim.relationshipClaims.onchainIdentityIsPrincipalIdentity,
  relationshipState: Object.freeze({ ...agent.relationshipState }),
  personalMemoryBoundary: Object.freeze({ ...agent.personalMemoryBoundary }),
  authority: agent.authority
}), "pickAgent");
var agents = Object.freeze([
  pickAgent(stageDP0Agent0Record),
  pickAgent(stageDP0CommunityAgentSlotRecord),
  pickAgent(stageDP0ProjectAgentSlotRecord)
]);
var admission = Object.freeze({
  contractVersion: "pond-agent-presence-admission-d-p0",
  admissionState: "insufficient_evidence",
  reason: "receiver_proof_incomplete",
  satisfiedChecks: Object.freeze([]),
  unsatisfiedChecks: Object.freeze([
    "exact_source_contract_identity",
    "exact_secret_free_runtime_fact_inventory",
    "receiver_owned_presence_observation_channel",
    "runtime_facts_separated_from_personal_memory_channels",
    "identity_claim_evidence_independently_reproduced",
    "local_principal_binding_established_before_private_reads",
    "observed_identity_kept_separate_from_principal_id",
    "live_presence_observation_observed"
  ]),
  observedPresenceAcceptedAsAuthentication: false,
  observedIdentityAcceptedAsPrincipalId: false,
  personalMemoryContentAdmitted: false,
  localPrincipalBindingEstablished: false,
  currentTruthAdmitted: false,
  runtimeActivationPosture: "not_included",
  authority: "none"
});
var denialPosture = Object.freeze({
  rendererFailurePosture: "fail_closed_all_values_unavailable",
  fallbackRenderingForbidden: true,
  liveObservationPerformed: false,
  mutationPerformed: false,
  runtimeActivationPosture: "not_included",
  authority: "none"
});
var personalMemoryBoundary = Object.freeze({
  ...stageDP0PersonalMemoryBoundary
});
var pondStageDAgentsRecord = Object.freeze({
  agentsRecordVersion: "pond-stage-d-agents-record-d-p1",
  authority: "none",
  presentationPosture: "fixture_rendered_presentation_only",
  mutationPosture: "none_read_only",
  truthPosture: "withheld_fixture_projection_only",
  sourceBinding,
  principalBinding,
  agents,
  admission,
  denialPosture,
  personalMemoryBoundary
});
var pond_stage_d_agents_record_default = pondStageDAgentsRecord;

// pond-stage-d-agents-entry.ts
var pond_stage_d_agents_entry_default = pond_stage_d_agents_record_default;
export {
  pond_stage_d_agents_entry_default as default,
  pond_stage_d_agents_record_default as pondStageDAgentsRecord
};
