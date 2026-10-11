import { stageDP25GenericAgentProjections } from
  "../fixtures/stage-d-p25-generic-agent-front-face.js";

export const pondStageDGenericAgentFrontFaceRecord = Object.freeze({
  contractVersion: "pond-generic-agent-front-face-d-p25" as const,
  kind: "pond-generic-agent-front-face-fixture-record" as const,
  source: Object.freeze({
    sourceId: "pond:fixture:generic-agent-front-face",
    sourceKind: "in_memory_fixture_only" as const,
    providerBoundaryPosture:
      "replaceable_frontend_projection_source_no_transport_interface_activated" as const,
  }),
  projections: stageDP25GenericAgentProjections,
  initialSelectedAgentId: stageDP25GenericAgentProjections[0].agentId,
  standingLine:
    "selection changes presentation only — identity is not admission, declared capability is not authority, and no connection is opened",
  runtimeActivationPosture: "not_included" as const,
  authority: "none" as const,
});

export default pondStageDGenericAgentFrontFaceRecord;
