import {
  assessPondGenericAgentFrontFace,
  type PondStageDP25AgentProjection,
} from "../contracts/pond-generic-agent-front-face.ts";

const projection = (
  value: Omit<PondStageDP25AgentProjection,
    "contractVersion" | "kind" | "projectionSourceId" |
    "projectionSourceKind" | "projectionPosture" |
    "declaredCapabilityPosture" | "admissionPosture" |
    "runtimeActivationPosture" | "authority">,
): PondStageDP25AgentProjection => Object.freeze({
  contractVersion: "pond-generic-agent-front-face-d-p25",
  kind: "pond-generic-agent-front-face-projection",
  projectionSourceId: "pond:fixture:generic-agent-front-face",
  projectionSourceKind: "in_memory_fixture_only",
  ...value,
  declaredCapabilityRefs: Object.freeze([...value.declaredCapabilityRefs]),
  projectionPosture:
    "frontend_fixture_projection_not_discovery_identity_proof_or_current_truth",
  declaredCapabilityPosture: "declared_not_granted",
  admissionPosture:
    "projected_state_not_an_admission_decision_or_admission_backend",
  runtimeActivationPosture: "not_included",
  authority: "none",
});

export const stageDP25GenericAgentProjections = Object.freeze([
  projection({
    agentId: "toadaid.agent0",
    displayName: "Agent0",
    profile: "specialist_agent",
    installationId: "toadaid.agent0.tng.primary",
    connectionState: "fixture_available",
    admissionState: "not_established",
    declaredCapabilityRefs: Object.freeze([
      "toadaid.front-face.base-chat",
      "toadaid.addon.knowledge-forge",
    ]),
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
      "toadaid.addon.knowledge-forge",
    ]),
  }),
  projection({
    agentId: "agent:community:sample-generic",
    displayName: "Community Scout",
    profile: "remote_external_agent",
    installationId: null,
    connectionState: "fixture_discovered",
    admissionState: "unknown",
    declaredCapabilityRefs: Object.freeze(["generic.chat.base"]),
  }),
] as const);

export const stageDP25GenericAgentFrontFaceMatrix = Object.freeze(
  stageDP25GenericAgentProjections.map((entry) => Object.freeze({
    fixtureLabel: `selected-${entry.agentId}`,
    selectedAgentId: entry.agentId,
    assessment: assessPondGenericAgentFrontFace({
      projections: stageDP25GenericAgentProjections,
      selectedAgentId: entry.agentId,
    }),
  })),
);
