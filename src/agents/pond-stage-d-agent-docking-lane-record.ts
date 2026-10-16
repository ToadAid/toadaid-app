import { stageDP32AgentDockingBriefs } from
  "../fixtures/stage-d-p32-agent-docking-lane.js";

export const pondStageDAgentDockingLaneRecord = Object.freeze({
  contractVersion: "pond-agent-docking-lane-d-p32" as const,
  kind: "pond-agent-docking-lane-fixture-record" as const,
  source: Object.freeze({
    sourceId: "pond:fixture:agent-docking-lane",
    sourceKind: "in_memory_fixture_only" as const,
    providerBoundaryPosture:
      "replaceable_frontend_projection_source_no_transport_or_intake_interface_activated" as const,
  }),
  briefs: stageDP32AgentDockingBriefs,
  standingLine:
    "the docking bay presents the admission ceremony only — admission is a human-sovereign scope-governed decision, no step is performed, and no intake channel exists",
  runtimeActivationPosture: "not_included" as const,
  authority: "none" as const,
});

export default pondStageDAgentDockingLaneRecord;