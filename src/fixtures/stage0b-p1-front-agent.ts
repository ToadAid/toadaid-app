import type {
  PondAgentRef,
  PondFrontAgentState,
  PondPluginRef,
  PondPrincipalRef,
  PondScopeRef,
} from "../contracts/pond-front-agent.js";

const principalRef = "principal:fixture:operator-a" as PondPrincipalRef;
const projectScopeRef = "scope:fixture:project-alpha" as PondScopeRef;
const coderAgentRef = "agent:fixture:coder" as PondAgentRef;
const coderPluginRef = "plugin:fixture:coder" as PondPluginRef;

export const stage0bP1FrontAgentFixture = {
  contractVersion: "stage0b-p1",
  kind: "pond-front-agent",
  role: "coordinate-explain-propose",
  scopeContext: {
    principalRef,
    scopeRef: projectScopeRef,
    scopeKind: "project",
    source: "fixture",
    authority: "none",
  },
  plugins: [
    {
      pluginRef: coderPluginRef,
      agentRef: coderAgentRef,
      label: "Fixture Coder Specialist",
      visibleInScopeRefs: [projectScopeRef],
      capabilities: [
        {
          capabilityRef: "repository.status",
          label: "Repository status projection",
          effectClass: "read",
        },
        {
          capabilityRef: "repository.change.proposal",
          label: "Repository change proposal",
          effectClass: "proposal",
        },
      ],
      authority: {
        posture: "disabled",
        mayApprove: false,
        mayExecute: false,
        mayMutate: false,
        reason: "stage0b_fixture_only",
      },
    },
  ],
  selectedPluginRef: coderPluginRef,
  gates: {
    liveTools: false,
    network: false,
    persistence: false,
    approvalRecording: false,
    execution: false,
  },
} satisfies PondFrontAgentState;
