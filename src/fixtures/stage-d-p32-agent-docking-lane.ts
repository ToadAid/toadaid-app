import {
  assessPondAgentDockingBrief,
  type PondStageDP32DockingBrief,
} from "../contracts/pond-agent-docking-lane.ts";

const brief = (
  value: Omit<PondStageDP32DockingBrief,
    "contractVersion" | "kind" | "dockingPosture" |
    "runtimeActivationPosture" | "authority">,
): PondStageDP32DockingBrief => Object.freeze({
  contractVersion: "pond-agent-docking-lane-d-p32",
  kind: "pond-agent-docking-brief",
  ...value,
  presentedEvidence: Object.freeze(
    value.presentedEvidence.map((entry) => Object.freeze(entry)),
  ),
  declaredCapabilityRefs: Object.freeze([...value.declaredCapabilityRefs]),
  dockingPosture:
    "fixture_dock_brief_not_a_dock_operation_admission_decision_or_intake",
  runtimeActivationPosture: "not_included",
  authority: "none",
});

// Two docking briefs, both fixture-only. The first is the same sampled
// remote-external stranger the D-P25 front face projects (Community Scout,
// admission unknown); the second is a community-profile instance whose
// admission is simply not established. Neither brief has ever been admitted,
// verified, joined, granted, or invoked.
export const stageDP32AgentDockingBriefs = Object.freeze([
  brief({
    agentId: "agent:community:sample-generic",
    displayName: "Community Scout",
    profile: "remote_external_agent",
    admissionState: "unknown",
    presentedEvidence: Object.freeze([
      Object.freeze({
        evidenceClass: "a2a_agent_card",
        presentedRef: "https://scout.example/.well-known/agent-card.json",
        verificationBasis: "declared_not_verified",
      }),
      Object.freeze({
        evidenceClass: "deployment_identity",
        presentedRef: "fixture:deployment:scout-remote-host",
        verificationBasis: "declared_not_verified",
      }),
    ] as const),
    requestedScopeRelationshipRef:
      "scope:fixture:shared-sample-shared-community-scope",
    declaredCapabilityRefs: Object.freeze(["generic.chat.base"] as const),
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
        verificationBasis: "declared_not_verified",
      }),
    ] as const),
    requestedScopeRelationshipRef:
      "scope:fixture:project-sample-lore-forge",
    declaredCapabilityRefs: Object.freeze([
      "generic.lore.draft",
      "generic.chat.base",
    ] as const),
  }),
] as const);

export const stageDP32AgentDockingLaneMatrix = Object.freeze(
  stageDP32AgentDockingBriefs.map((entry) => Object.freeze({
    fixtureLabel: `dock-brief-${entry.agentId}`,
    assessment: assessPondAgentDockingBrief({ brief: entry }),
  })),
);