var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/contracts/pond-generic-agent-front-face.ts
var POND_STAGE_DP25_GENERIC_AGENT_FRONT_FACE_CONTRACT_VERSION = "pond-generic-agent-front-face-d-p25";
var POND_STAGE_DP25_AGENT_PROFILES = Object.freeze([
  "personal_agent",
  "community_agent",
  "project_agent",
  "specialist_agent",
  "remote_external_agent"
]);
var POND_STAGE_DP25_CONNECTION_STATES = Object.freeze([
  "fixture_disconnected",
  "fixture_discovered",
  "fixture_not_admitted",
  "fixture_available",
  "fixture_busy",
  "fixture_unavailable",
  "fixture_failed"
]);
var POND_STAGE_DP25_ADMISSION_STATES = Object.freeze([
  "not_established",
  "active",
  "revoked",
  "unknown"
]);
var POND_STAGE_DP25_EXTENSION_IDS = Object.freeze([
  "toadaid.front-face.base-chat",
  "toadaid.addon.knowledge-forge"
]);
var projectionKeys = Object.freeze([
  "contractVersion",
  "kind",
  "projectionSourceId",
  "projectionSourceKind",
  "agentId",
  "displayName",
  "profile",
  "installationId",
  "connectionState",
  "admissionState",
  "declaredCapabilityRefs",
  "projectionPosture",
  "declaredCapabilityPosture",
  "admissionPosture",
  "runtimeActivationPosture",
  "authority"
]);
var record = /* @__PURE__ */ __name((value) => value !== null && typeof value === "object" && !Array.isArray(value) ? value : null, "record");
var exactKeys = /* @__PURE__ */ __name((value, expected) => Object.keys(value).length === expected.length && [...expected].every((key) => Object.hasOwn(value, key)), "exactKeys");
var boundedString = /* @__PURE__ */ __name((value, maximum) => typeof value === "string" && value.length > 0 && value.length <= maximum, "boundedString");
var distinctBoundedStrings = /* @__PURE__ */ __name((value, maximumEntries, maximumLength) => Array.isArray(value) && value.length <= maximumEntries && value.every((entry) => boundedString(entry, maximumLength)) && new Set(value).size === value.length, "distinctBoundedStrings");
var validProjection = /* @__PURE__ */ __name((value) => {
  const candidate = record(value);
  return candidate !== null && exactKeys(candidate, projectionKeys) && candidate.contractVersion === POND_STAGE_DP25_GENERIC_AGENT_FRONT_FACE_CONTRACT_VERSION && candidate.kind === "pond-generic-agent-front-face-projection" && boundedString(candidate.projectionSourceId, 128) && candidate.projectionSourceKind === "in_memory_fixture_only" && boundedString(candidate.agentId, 256) && boundedString(candidate.displayName, 80) && POND_STAGE_DP25_AGENT_PROFILES.includes(candidate.profile) && (candidate.installationId === null || boundedString(candidate.installationId, 256)) && POND_STAGE_DP25_CONNECTION_STATES.includes(candidate.connectionState) && POND_STAGE_DP25_ADMISSION_STATES.includes(candidate.admissionState) && distinctBoundedStrings(candidate.declaredCapabilityRefs, 32, 128) && candidate.projectionPosture === "frontend_fixture_projection_not_discovery_identity_proof_or_current_truth" && candidate.declaredCapabilityPosture === "declared_not_granted" && candidate.admissionPosture === "projected_state_not_an_admission_decision_or_admission_backend" && candidate.runtimeActivationPosture === "not_included" && candidate.authority === "none";
}, "validProjection");
var extensionsFor = /* @__PURE__ */ __name((selected) => Object.freeze([
  Object.freeze({
    extensionId: "toadaid.front-face.base-chat",
    label: "Base Chat",
    declaredBySelectedAgent: selected.declaredCapabilityRefs.includes(
      "toadaid.front-face.base-chat"
    ),
    state: "preview_available_no_transport",
    posture: "base_chat_target_preview_only_no_message_composition_or_delivery"
  }),
  Object.freeze(
    selected.declaredCapabilityRefs.includes("toadaid.addon.knowledge-forge") ? {
      extensionId: "toadaid.addon.knowledge-forge",
      label: "Knowledge Forge",
      declaredBySelectedAgent: true,
      state: "declared_but_withheld_no_activation",
      posture: "addon_surface_withheld_no_live_activation"
    } : {
      extensionId: "toadaid.addon.knowledge-forge",
      label: "Knowledge Forge",
      declaredBySelectedAgent: false,
      state: "not_declared",
      posture: "capability_not_declared_by_projection"
    }
  )
]), "extensionsFor");
var refused = /* @__PURE__ */ __name((reason) => Object.freeze({
  contractVersion: POND_STAGE_DP25_GENERIC_AGENT_FRONT_FACE_CONTRACT_VERSION,
  projectionState: "generic_agent_front_face_refused",
  reason,
  selectedAgent: null,
  extensions: Object.freeze([]),
  selectionChangesPresentationOnly: true,
  agentIdentityAcceptedAsAdmission: false,
  projectedAdmissionAcceptedAsAdmissionDecision: false,
  declaredCapabilityAcceptedAsGrant: false,
  connectionOpened: false,
  credentialStoredOrProjected: false,
  messageComposedOrDelivered: false,
  agentInvoked: false,
  addonActivated: false,
  currentTruthEstablished: false,
  runtimeActivationPosture: "not_included",
  authority: "none"
}), "refused");
function assessPondGenericAgentFrontFace(input) {
  if (!Array.isArray(input.projections) || input.projections.length === 0 || input.projections.length > 32 || !input.projections.every(validProjection) || !boundedString(input.selectedAgentId, 256)) return refused("generic_agent_projection_input_invalid");
  const projections = input.projections;
  if (new Set(projections.map((entry) => entry.agentId)).size !== projections.length)
    return refused("generic_agent_projection_input_invalid");
  const selected = projections.find((entry) => entry.agentId === input.selectedAgentId);
  if (selected === void 0) return refused("selected_agent_not_found");
  return Object.freeze({
    contractVersion: POND_STAGE_DP25_GENERIC_AGENT_FRONT_FACE_CONTRACT_VERSION,
    projectionState: "generic_agent_front_face_presented_fixture_only",
    reason: "generic_agent_front_face_fixture_projection_satisfied",
    selectedAgent: Object.freeze({
      agentId: selected.agentId,
      displayName: selected.displayName,
      profile: selected.profile,
      installationId: selected.installationId,
      projectionSourceId: selected.projectionSourceId,
      connectionState: selected.connectionState,
      admissionState: selected.admissionState,
      declaredCapabilityRefs: Object.freeze([...selected.declaredCapabilityRefs])
    }),
    extensions: extensionsFor(selected),
    selectionChangesPresentationOnly: true,
    agentIdentityAcceptedAsAdmission: false,
    projectedAdmissionAcceptedAsAdmissionDecision: false,
    declaredCapabilityAcceptedAsGrant: false,
    connectionOpened: false,
    credentialStoredOrProjected: false,
    messageComposedOrDelivered: false,
    agentInvoked: false,
    addonActivated: false,
    currentTruthEstablished: false,
    runtimeActivationPosture: "not_included",
    authority: "none"
  });
}
__name(assessPondGenericAgentFrontFace, "assessPondGenericAgentFrontFace");

// src/fixtures/stage-d-p25-generic-agent-front-face.ts
var projection = /* @__PURE__ */ __name((value) => Object.freeze({
  contractVersion: "pond-generic-agent-front-face-d-p25",
  kind: "pond-generic-agent-front-face-projection",
  projectionSourceId: "pond:fixture:generic-agent-front-face",
  projectionSourceKind: "in_memory_fixture_only",
  ...value,
  declaredCapabilityRefs: Object.freeze([...value.declaredCapabilityRefs]),
  projectionPosture: "frontend_fixture_projection_not_discovery_identity_proof_or_current_truth",
  declaredCapabilityPosture: "declared_not_granted",
  admissionPosture: "projected_state_not_an_admission_decision_or_admission_backend",
  runtimeActivationPosture: "not_included",
  authority: "none"
}), "projection");
var stageDP25GenericAgentProjections = Object.freeze([
  projection({
    agentId: "toadaid.agent0",
    displayName: "Agent0",
    profile: "specialist_agent",
    installationId: "toadaid.agent0.tng.primary",
    connectionState: "fixture_available",
    admissionState: "not_established",
    declaredCapabilityRefs: Object.freeze([
      "toadaid.front-face.base-chat",
      "toadaid.addon.knowledge-forge"
    ])
  }),
  projection({
    agentId: "toadaid.agent1",
    displayName: "Agent1",
    profile: "personal_agent",
    installationId: "toadaid.agent1.dell.test",
    connectionState: "fixture_disconnected",
    admissionState: "not_established",
    declaredCapabilityRefs: Object.freeze([
      "toadaid.front-face.base-chat",
      "toadaid.addon.knowledge-forge"
    ])
  }),
  projection({
    agentId: "agent:community:sample-generic",
    displayName: "Community Scout",
    profile: "remote_external_agent",
    installationId: null,
    connectionState: "fixture_discovered",
    admissionState: "unknown",
    declaredCapabilityRefs: Object.freeze(["generic.chat.base"])
  })
]);
var stageDP25GenericAgentFrontFaceMatrix = Object.freeze(
  stageDP25GenericAgentProjections.map((entry) => Object.freeze({
    fixtureLabel: `selected-${entry.agentId}`,
    selectedAgentId: entry.agentId,
    assessment: assessPondGenericAgentFrontFace({
      projections: stageDP25GenericAgentProjections,
      selectedAgentId: entry.agentId
    })
  }))
);

// src/agents/pond-stage-d-generic-agent-front-face-record.ts
var pondStageDGenericAgentFrontFaceRecord = Object.freeze({
  contractVersion: "pond-generic-agent-front-face-d-p25",
  kind: "pond-generic-agent-front-face-fixture-record",
  source: Object.freeze({
    sourceId: "pond:fixture:generic-agent-front-face",
    sourceKind: "in_memory_fixture_only",
    providerBoundaryPosture: "replaceable_frontend_projection_source_no_transport_interface_activated"
  }),
  projections: stageDP25GenericAgentProjections,
  initialSelectedAgentId: stageDP25GenericAgentProjections[0].agentId,
  standingLine: "selection changes presentation only — identity is not admission, declared capability is not authority, and no connection is opened",
  runtimeActivationPosture: "not_included",
  authority: "none"
});
var pond_stage_d_generic_agent_front_face_record_default = pondStageDGenericAgentFrontFaceRecord;

// pond-stage-d-generic-agent-front-face-entry.ts
var pond_stage_d_generic_agent_front_face_entry_default = pond_stage_d_generic_agent_front_face_record_default;
export {
  assessPondGenericAgentFrontFace,
  pond_stage_d_generic_agent_front_face_entry_default as default,
  pond_stage_d_generic_agent_front_face_record_default as pondStageDGenericAgentFrontFaceRecord
};
