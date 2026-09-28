// Stage D-P0 fixture: the identity-bound observed-agent presence projection
// with the locally running trading-desk Agent0 as the first fixture-observed
// agent. The desk's secret-free `runtime_status` labels are transcribed from
// its source contract (defaults only — Pond never invoked the running desk),
// and the ERC-8004 identity-claim vocabulary is bound WITHOUT any observation:
// claimStatus stays `not_observed` and no evidence is fabricated. Every
// relationship state, memory lane, and authority flag stays refused.

import type {
  PondAgentPresenceProjection,
  PondObservedAgentSourceContractFixture,
  PondObservedAgentPresenceRecord,
  PondObservedAgentRuntimeFact,
  PondObservedIdentityClaimProjection,
  PondObservedTransportProjection,
} from "../contracts/pond-agent-presence-projection.js";
import type { PondPrincipalRef } from "../contracts/pond-front-agent.js";

// Literal-preserving fixture-local constructors (pattern from
// stage-a6-scope-isolation-proof.ts): each returns the exact literal type
// intersected with the Pond branded type.
const asPrincipalRef = <T extends string>(value: T): T & PondPrincipalRef =>
  value as T & PondPrincipalRef;

export const stageDP0LocalPrincipalRef =
  asPrincipalRef("principal:fixture:stage-d-p0:local-principal");

export const stageDP0Agent0Ref = "agent:fixture:stage-d-p0:trading-desk-agent0";
export const stageDP0CommunityAgentSlotRef =
  "agent:fixture:stage-d-p0:community-agent-slot";
export const stageDP0ProjectAgentSlotRef =
  "agent:fixture:stage-d-p0:project-agent-slot";

// ------------------------------------------------------------
// Source contract: trading-desk main, bound by committed SHA only.
// ------------------------------------------------------------

export const stageDP0TradingDeskSourceCommit =
  "57b5c8b966d3eb58cf239b2f3f1598f09f24b296";

export const stageDP0TradingDeskSourceContract = Object.freeze({
  contractVersion: "pond-agent-presence-source-contract-d-p0",
  kind: "pond-agent-presence-source-contract",
  sourceContract: Object.freeze({
    repository: "trading-desk",
    boundSourceCommit: stageDP0TradingDeskSourceCommit,
    observedTools: Object.freeze(["runtime_status", "identity_status"]),
    sourcePosture: "read_only_tool_contract_only_no_live_connection",
  }),
  authority: "none",
}) as PondObservedAgentSourceContractFixture;

// ------------------------------------------------------------
// Agent0 runtime facts: exactly the seven `runtime_status` labels in tool
// order. Brain and execution are transcribed from the desk's source-contract
// defaults; the remaining five are honestly not observed.
// ------------------------------------------------------------

const runtimeFact = (
  factLabel: PondObservedAgentRuntimeFact["factLabel"],
  observedValue: string | null,
): PondObservedAgentRuntimeFact =>
  observedValue === null
    ? Object.freeze({
        factLabel,
        sourceTool: "runtime_status",
        observedValue: null,
        valuePosture: "not_observed",
      })
    : Object.freeze({
        factLabel,
        sourceTool: "runtime_status",
        observedValue,
        valuePosture: "transcribed_from_source_contract",
      });

export const stageDP0Agent0RuntimeFacts: readonly PondObservedAgentRuntimeFact[] =
  Object.freeze([
    runtimeFact("brain", "glm"),
    runtimeFact("provider", null),
    runtimeFact("model", null),
    runtimeFact("execution", "dry_run"),
    runtimeFact("trading_state", null),
    runtimeFact("hands", null),
    runtimeFact("doctor_cheap_check", null),
  ]);

export const stageDP0Agent0Transport: PondObservedTransportProjection =
  Object.freeze({
    transport: "telegram",
    transportIsAgentIdentity: false,
    transportEstablishesAdmission: false,
    liveConnectionPosture: "not_included",
  });

// The ERC-8004 vocabulary is bound but never observed: no VERIFIED claim is
// fabricated from the desk's configuration.
export const stageDP0Agent0IdentityClaim: PondObservedIdentityClaimProjection =
  Object.freeze({
    claimStatus: "not_observed",
    evidence: Object.freeze({
      chainIdObserved: null,
      registryAddress: null,
      agentId: null,
      ownerObserved: null,
      blockTag: null,
    }),
    evidencePosture: "observed_evidence_only_no_local_authority",
    relationshipClaims: Object.freeze({
      onchainIdentityIsPrincipalIdentity: false,
      onchainIdentityEstablishesLocalAdmission: false,
      onchainIdentityEstablishesAuthority: false,
    }),
  });

const refusedRelationshipState = Object.freeze({
  membership: "not_established",
  agentAdmission: "not_established",
  scopeBinding: "not_established",
  delegatedAuthority: "not_established",
} as const);

export const stageDP0PersonalMemoryBoundary = Object.freeze({
  deskJournalLaneAdmitted: false,
  deskMemoryLaneAdmitted: false,
  deskNarrativeLaneAdmitted: false,
  deskTranscriptLaneAdmitted: false,
} as const);

const inertTransport: PondObservedTransportProjection = Object.freeze({
  transport: "not_observed",
  transportIsAgentIdentity: false,
  transportEstablishesAdmission: false,
  liveConnectionPosture: "not_included",
});

const inertIdentityClaim: PondObservedIdentityClaimProjection =
  Object.freeze({
    claimStatus: "not_observed",
    evidence: stageDP0Agent0IdentityClaim.evidence,
    evidencePosture: "observed_evidence_only_no_local_authority",
    relationshipClaims: stageDP0Agent0IdentityClaim.relationshipClaims,
  });

export const stageDP0Agent0Record: PondObservedAgentPresenceRecord =
  Object.freeze({
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
    authority: "none",
  });

export const stageDP0CommunityAgentSlotRecord: PondObservedAgentPresenceRecord =
  Object.freeze({
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
    authority: "none",
  });

export const stageDP0ProjectAgentSlotRecord: PondObservedAgentPresenceRecord =
  Object.freeze({
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
    authority: "none",
  });

export const stageDP0AgentPresenceProjection: PondAgentPresenceProjection =
  Object.freeze({
    contractVersion: "pond-agent-presence-projection-d-p0",
    kind: "pond-agent-presence-projection",
    posture: "fixture_observed_presence_projection_authority_none",
    localPrincipalBinding: Object.freeze({
      principalRef: stageDP0LocalPrincipalRef,
      bindingState: "fixture_local_projection",
      authenticationPerformed: false,
      ceremonyPosture: "not_defined_this_cut",
    }),
    observedAgents: Object.freeze([
      stageDP0Agent0Record,
      stageDP0CommunityAgentSlotRecord,
      stageDP0ProjectAgentSlotRecord,
    ]),
    communityRelationshipState: "not_established",
    projectRelationshipState: "not_established",
    personalMemoryBoundary: stageDP0PersonalMemoryBoundary,
    authority: "none",
  });