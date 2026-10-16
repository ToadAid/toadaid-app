var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/contracts/pond-agent-docking-lane.ts
var POND_STAGE_DP32_AGENT_DOCKING_LANE_CONTRACT_VERSION = "pond-agent-docking-lane-d-p32";
var POND_STAGE_DP32_DOCKING_PROFILES = Object.freeze([
  "community_agent",
  "remote_external_agent"
]);
var POND_STAGE_DP32_EVIDENCE_CLASSES = Object.freeze([
  "a2a_agent_card",
  "cryptographic_signature",
  "mcp_or_service_identity",
  "wallet_address",
  "erc8004_identity",
  "dns_or_domain_binding",
  "provider_identity",
  "deployment_identity"
]);
var POND_STAGE_DP32_ADMISSION_STATES = Object.freeze([
  "not_established",
  "active",
  "revoked",
  "unknown"
]);
var POND_STAGE_DP32_SEQUENCE_STEPS = Object.freeze([
  "external_identity_evidence",
  "evidence_verification",
  "local_agentid_and_binding_decision",
  "explicit_scope_relationship",
  "capability_eligibility",
  "separate_current_capability_authorization"
]);
var stepLabels = Object.freeze({
  external_identity_evidence: "external identity evidence",
  evidence_verification: "verification",
  local_agentid_and_binding_decision: "local AgentId and binding decision",
  explicit_scope_relationship: "explicit scope relationship where admitted",
  capability_eligibility: "capability eligibility",
  separate_current_capability_authorization: "separate current capability authorization"
});
var evidenceClassLabelOf = /* @__PURE__ */ __name((value) => ({
  a2a_agent_card: "A2A AgentCard",
  cryptographic_signature: "cryptographic signature",
  mcp_or_service_identity: "MCP or service identity",
  wallet_address: "wallet address",
  erc8004_identity: "ERC-8004 identity",
  dns_or_domain_binding: "DNS or domain binding",
  provider_identity: "provider identity",
  deployment_identity: "deployment identity"
})[value], "evidenceClassLabelOf");
var briefKeys = Object.freeze([
  "contractVersion",
  "kind",
  "agentId",
  "displayName",
  "profile",
  "admissionState",
  "presentedEvidence",
  "requestedScopeRelationshipRef",
  "declaredCapabilityRefs",
  "dockingPosture",
  "runtimeActivationPosture",
  "authority"
]);
var record = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" && !Array.isArray(value) ? value : null, "record");
var exactKeys = /* @__PURE__ */ __name((value, expected) => Object.keys(value).length === expected.length && [...expected].every((key) => Object.hasOwn(value, key)), "exactKeys");
var boundedString = /* @__PURE__ */ __name((value, maximum) => typeof value === "string" && value.length > 0 && value.length <= maximum, "boundedString");
var distinctBoundedStrings = /* @__PURE__ */ __name((value, maximumEntries, maximumLength) => Array.isArray(value) && value.length <= maximumEntries && value.every((entry) => boundedString(entry, maximumLength)) && new Set(value).size === value.length, "distinctBoundedStrings");
var validEvidence = /* @__PURE__ */ __name((value) => {
  const candidate = record(value);
  return candidate !== null && exactKeys(candidate, ["evidenceClass", "presentedRef", "verificationBasis"]) && POND_STAGE_DP32_EVIDENCE_CLASSES.includes(
    candidate.evidenceClass
  ) && boundedString(candidate.presentedRef, 256) && candidate.verificationBasis === "declared_not_verified";
}, "validEvidence");
var validBrief = /* @__PURE__ */ __name((value) => {
  const candidate = record(value);
  return candidate !== null && exactKeys(candidate, briefKeys) && candidate.contractVersion === POND_STAGE_DP32_AGENT_DOCKING_LANE_CONTRACT_VERSION && candidate.kind === "pond-agent-docking-brief" && boundedString(candidate.agentId, 256) && boundedString(candidate.displayName, 80) && POND_STAGE_DP32_DOCKING_PROFILES.includes(candidate.profile) && POND_STAGE_DP32_ADMISSION_STATES.includes(candidate.admissionState) && Array.isArray(candidate.presentedEvidence) && candidate.presentedEvidence.length <= 8 && candidate.presentedEvidence.every(validEvidence) && new Set(
    candidate.presentedEvidence.map((entry) => entry.presentedRef)
  ).size === candidate.presentedEvidence.length && boundedString(candidate.requestedScopeRelationshipRef, 256) && distinctBoundedStrings(candidate.declaredCapabilityRefs, 32, 128) && candidate.dockingPosture === "fixture_dock_brief_not_a_dock_operation_admission_decision_or_intake" && candidate.runtimeActivationPosture === "not_included" && candidate.authority === "none";
}, "validBrief");
var walls = Object.freeze({
  whoMayAdmitPosture: "human_governing_authority_of_the_relevant_scope_no_agent_provider_transport_message_attestation_or_automated_rule",
  admissionDecisionPosture: "not_made_human_sovereign_decision_required",
  standingIntakePosture: "refused_no_standing_intake_path_for_an_unadmitted_sender_the_default_not_a_configurable_choice",
  profileInterlockPosture: "admitted_remote_origin_serves_as_a_community_agent_profile_instance_under_the_same_law",
  consequencePathPosture: "identity_admitted_scope_grant_policy_approval_sequence_unchanged_and_untouched",
  revocationEstopPosture: "revocation_and_external_estop_dominant_across_providers_and_transports"
});
var refused = /* @__PURE__ */ __name(() => Object.freeze({
  contractVersion: POND_STAGE_DP32_AGENT_DOCKING_LANE_CONTRACT_VERSION,
  dockingLaneState: "agent_docking_lane_refused",
  reason: "docking_brief_input_invalid",
  presentedBrief: null,
  sequence: Object.freeze([]),
  presentedEvidence: Object.freeze([]),
  walls,
  dockingChangesPresentationOnly: true,
  admissionDecisionMade: false,
  admissionRecordIssued: false,
  evidenceVerified: false,
  agentIdIssued: false,
  scopeRelationshipEstablished: false,
  standingIntakeOpened: false,
  membershipCreated: false,
  grantIssued: false,
  capabilityAuthorized: false,
  credentialStoredOrProjected: false,
  messageComposedOrDelivered: false,
  agentInvoked: false,
  runtimeActivationPosture: "not_included",
  authority: "none"
}), "refused");
function assessPondAgentDockingBrief(input) {
  if (!validBrief(input.brief)) return refused();
  const brief2 = input.brief;
  return Object.freeze({
    contractVersion: POND_STAGE_DP32_AGENT_DOCKING_LANE_CONTRACT_VERSION,
    dockingLaneState: "agent_docking_lane_presented_fixture_only",
    reason: "agent_docking_lane_fixture_projection_satisfied",
    presentedBrief: Object.freeze({
      agentId: brief2.agentId,
      displayName: brief2.displayName,
      profile: brief2.profile,
      admissionState: brief2.admissionState,
      requestedScopeRelationshipRef: brief2.requestedScopeRelationshipRef
    }),
    sequence: Object.freeze(
      POND_STAGE_DP32_SEQUENCE_STEPS.map((stepId) => Object.freeze({
        stepId,
        stepLabel: stepLabels[stepId],
        stepPosture: "declared_not_performed"
      }))
    ),
    presentedEvidence: Object.freeze(
      brief2.presentedEvidence.map((entry) => Object.freeze({
        evidenceClass: entry.evidenceClass,
        evidenceClassLabel: evidenceClassLabelOf(entry.evidenceClass),
        presentedRef: entry.presentedRef,
        verificationBasis: entry.verificationBasis
      }))
    ),
    walls,
    dockingChangesPresentationOnly: true,
    admissionDecisionMade: false,
    admissionRecordIssued: false,
    evidenceVerified: false,
    agentIdIssued: false,
    scopeRelationshipEstablished: false,
    standingIntakeOpened: false,
    membershipCreated: false,
    grantIssued: false,
    capabilityAuthorized: false,
    credentialStoredOrProjected: false,
    messageComposedOrDelivered: false,
    agentInvoked: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}
__name(assessPondAgentDockingBrief, "assessPondAgentDockingBrief");

// src/fixtures/stage-d-p32-agent-docking-lane.ts
var brief = /* @__PURE__ */ __name((value) => Object.freeze({
  contractVersion: "pond-agent-docking-lane-d-p32",
  kind: "pond-agent-docking-brief",
  ...value,
  presentedEvidence: Object.freeze(
    value.presentedEvidence.map((entry) => Object.freeze(entry))
  ),
  declaredCapabilityRefs: Object.freeze([...value.declaredCapabilityRefs]),
  dockingPosture: "fixture_dock_brief_not_a_dock_operation_admission_decision_or_intake",
  runtimeActivationPosture: "not_included",
  authority: "none"
}), "brief");
var stageDP32AgentDockingBriefs = Object.freeze([
  brief({
    agentId: "agent:community:sample-generic",
    displayName: "Community Scout",
    profile: "remote_external_agent",
    admissionState: "unknown",
    presentedEvidence: Object.freeze([
      Object.freeze({
        evidenceClass: "a2a_agent_card",
        presentedRef: "https://scout.example/.well-known/agent-card.json",
        verificationBasis: "declared_not_verified"
      }),
      Object.freeze({
        evidenceClass: "deployment_identity",
        presentedRef: "fixture:deployment:scout-remote-host",
        verificationBasis: "declared_not_verified"
      })
    ]),
    requestedScopeRelationshipRef: "scope:fixture:shared-sample-shared-community-scope",
    declaredCapabilityRefs: Object.freeze(["generic.chat.base"])
  }),
  brief({
    agentId: "agent:project:sample-loremason",
    displayName: "Lore Mason",
    profile: "community_agent",
    admissionState: "not_established",
    presentedEvidence: Object.freeze([
      Object.freeze({
        evidenceClass: "mcp_or_service_identity",
        presentedRef: "fixture:mcp:sample-loremason-service",
        verificationBasis: "declared_not_verified"
      })
    ]),
    requestedScopeRelationshipRef: "scope:fixture:project-sample-lore-forge",
    declaredCapabilityRefs: Object.freeze([
      "generic.lore.draft",
      "generic.chat.base"
    ])
  })
]);
var stageDP32AgentDockingLaneMatrix = Object.freeze(
  stageDP32AgentDockingBriefs.map((entry) => Object.freeze({
    fixtureLabel: `dock-brief-${entry.agentId}`,
    assessment: assessPondAgentDockingBrief({ brief: entry })
  }))
);

// src/agents/pond-stage-d-agent-docking-lane-record.ts
var pondStageDAgentDockingLaneRecord = Object.freeze({
  contractVersion: "pond-agent-docking-lane-d-p32",
  kind: "pond-agent-docking-lane-fixture-record",
  source: Object.freeze({
    sourceId: "pond:fixture:agent-docking-lane",
    sourceKind: "in_memory_fixture_only",
    providerBoundaryPosture: "replaceable_frontend_projection_source_no_transport_or_intake_interface_activated"
  }),
  briefs: stageDP32AgentDockingBriefs,
  standingLine: "the docking bay presents the admission ceremony only — admission is a human-sovereign scope-governed decision, no step is performed, and no intake channel exists",
  runtimeActivationPosture: "not_included",
  authority: "none"
});
var pond_stage_d_agent_docking_lane_record_default = pondStageDAgentDockingLaneRecord;

// pond-stage-d-agent-docking-lane-entry.ts
var pond_stage_d_agent_docking_lane_entry_default = pond_stage_d_agent_docking_lane_record_default;
export {
  assessPondAgentDockingBrief,
  pond_stage_d_agent_docking_lane_entry_default as default,
  pond_stage_d_agent_docking_lane_record_default as pondStageDAgentDockingLaneRecord
};
