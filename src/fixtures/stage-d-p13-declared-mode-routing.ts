// Stage D-P13 fixture: the declared-mode routing matrix — eight arms
// over the one routing consumer (three complete profiles, stale
// declaration, refused inference basis, forge leg broken, the declared
// agent not observed in the desk projection, desk leg broken). Zero
// value imports: every import is type-only, so the selftest imports
// this file directly under node type-stripping. The routing records
// re-inline structural copies of the D-P12 forge binding record and the
// D-P0 desk source contract and presence projection — the same literals
// the D-P12 fixture and the frozen D-P0 fixture carry; the selftest
// deep-equals those copies against the actual frozen exports. No
// network, no live forge state: the routing posture is advisory only
// and every arm's ceiling stays all-false.

import type {
  PondDeclaredModeRoutingAssessment,
  PondDeclaredModeRoutingAdvisoryPosture,
  PondDeclaredModeRoutingCheck,
} from "../contracts/pond-declared-mode-routing.js";
import type { PondKnowledgeForgeSurfaceId } from "../contracts/pond-knowledge-forge-surface-binding.js";
import type { PondKnowledgeForgeBoundDeclaredModeCompositionCheck } from "../contracts/pond-knowledge-forge-bound-declared-mode-composition.js";
import type { PondAgentDeclaredOperationalModeCheck } from "../contracts/pond-agent-declared-operational-mode.js";

export interface PondStageDP13RoutingFixtureEntry {
  readonly fixtureLabel: string;
  readonly forgeBindingRecord: unknown;
  readonly modeDeclarationRecord: unknown;
  readonly deskSourceContractFixture: unknown;
  readonly deskPresenceProjection: unknown;
  readonly receiverHeldAgentRef: string;
  readonly receiverEvaluatedAtEpochMs: number;
  readonly receiverMaximumAgeMs: number;
  readonly assessment: PondDeclaredModeRoutingAssessment;
}

// The receiver-held agent ref, the never-observed slot ref, and the
// D-P13 evaluation pair — carried from the D-P12 convention: the
// declaration event sits inside the declared maximum age on the fresh
// arms (age 0) and one millisecond past it on the stale arm (age
// 60_001).
const agentRef = "agent:fixture:stage-d-p0:trading-desk-agent0";
const notObservedAgentRef = "agent:fixture:stage-d-p0:community-agent-slot";
const architectureCommit = "bc7a971dfb243f0aa4417da6cef85cc56204f783";
const knowledgeLawAnchor = "Build capability. Never manufacture authority.";
const evaluatedAtEpochMs = 1_800_000_060_000;
const maximumAgeMs = 60_000;
const staleDeclaredAtEpochMs = 1_799_999_999_999;

// ------------------------------------------------------------
// Forge binding record: re-inlined structural copies of the D-P12
// complete and tampered-commit arms (the selftest block 2 deep-equals
// the complete record against the D-P12 fixture's record).
// ------------------------------------------------------------

const forgeSurface = (
  surfaceId: string,
  surfaceKind: string,
  forgeCommit: string,
  forgeTree: string,
  companionRepository: string,
  companionCommit: string,
  surfaceProjectionPosture: string,
) =>
  Object.freeze({
    surfaceId,
    surfaceKind,
    forgeRepository: "ToadAid/knowledge-forge",
    forgeCommit,
    forgeTree,
    companionRepository,
    companionCommit,
    surfaceProjectionPosture,
    authorityPosture: Object.freeze({
      knowledgeAuthority: "KNOWLEDGE_ONLY",
      executionAuthority: "NONE",
      runtimeConnection: "NOT_INCLUDED",
      mutation: "NONE",
      activation: "NOT_INCLUDED",
    }),
  });

const forgeSurfaces = () =>
  Object.freeze({
    "knowledge-forge-p5b-desktop-projection": forgeSurface(
      "knowledge-forge-p5b-desktop-projection",
      "desktop_projection",
      "41a15164f091f63e9a4d3b06c5ac4e43c9d4755b",
      "53bc0ef4a92dc65fe83cd26c28df0ee4a0152bb1",
      "ToadAid/toadaid-architecture",
      architectureCommit,
      "fixture_bound_snapshot_not_current_truth",
    ),
    "knowledge-forge-p5c-skill-library-browser": forgeSurface(
      "knowledge-forge-p5c-skill-library-browser",
      "skill_library_browser",
      "caa4bdf3b4fbd95a9d8f0a2686798cc9e1a6f0ad",
      "1ef8fe116e65bd0ac4eb832451d195831c2c396e",
      "ToadAid/toadaid-app",
      "d0c10d0a22054837fa583381132c60be0cef7f15",
      "fixture_metadata_not_live_registry_truth",
    ),
    "knowledge-forge-p5d-evidence-inspector": forgeSurface(
      "knowledge-forge-p5d-evidence-inspector",
      "evidence_inspector",
      "d4cf038eb188975e9ac4a5d875c15998e366a8ee",
      "60e7b36b61c4ac9617c2ef1df0a787b56e7eef0f",
      "ToadAid/toadaid-app",
      "3117bb66c7ab88f6e1abcac6e0101ff07fe68506",
      "fixture_evidence_not_live_registry_truth",
    ),
    "knowledge-forge-p5e-governed-workflow-console": forgeSurface(
      "knowledge-forge-p5e-governed-workflow-console",
      "governed_workflow_console",
      "368077ee22b692f6879659d47b276f5edda5c113",
      "d346931179979e34fe9a37b2d85aa0276ca04c2c",
      "ToadAid/toadaid-app",
      "8de15239a150f5433d3b8c41f4a4c0dcfa66d8c4",
      "workflow_preview_not_live_mutation",
    ),
  });

const workflowConsoleLifecycle = Object.freeze({
  surfaceId: "knowledge-forge-p5e-governed-workflow-console",
  lifecycleAuthority: "EXTERNAL_REQUIRED_NOT_ESTABLISHED",
  persistence: "NONE",
  executable: false,
});

const forgeBindingRecord = () =>
  Object.freeze({
    contractVersion: "pond-knowledge-forge-surface-binding-d-p12",
    kind: "pond-knowledge-forge-surface-binding",
    architectureCommit,
    lawAnchor: knowledgeLawAnchor,
    surfaces: forgeSurfaces(),
    workflowConsoleLifecycle,
    authority: "none",
  });

const tamperedSurfaces = () => {
  const base = forgeSurfaces();
  const p5d = base["knowledge-forge-p5d-evidence-inspector"];
  return p5d === undefined
    ? base
    : Object.freeze({
        ...base,
        "knowledge-forge-p5d-evidence-inspector": Object.freeze({
          ...p5d,
          forgeCommit: "d4cf038eb188975e9ac4a5d875c15998e366a8e0",
        }),
      });
};

const tamperedForgeBindingRecord = () =>
  Object.freeze({
    contractVersion: "pond-knowledge-forge-surface-binding-d-p12",
    kind: "pond-knowledge-forge-surface-binding",
    architectureCommit,
    lawAnchor: knowledgeLawAnchor,
    surfaces: tamperedSurfaces(),
    workflowConsoleLifecycle,
    authority: "none",
  });

// ------------------------------------------------------------
// Declared operational-mode declaration builder. The agent ref is a
// parameter: the not-observed arm deliberately declares the community
// slot's ref so the join leg — this cut's own contribution — is what
// refuses it.
// ------------------------------------------------------------

const stricterLaneRefusalPosture = Object.freeze({
  laneAdmissionEstablished: false,
  walletOrSigningAuthorityRefused: true,
  tradingExecutionRefused: true,
  credentialUseRefused: true,
  deploymentOrDestructiveMutationRefused: true,
  publicPublishingOrSocialPostingRefused: true,
}) as {
  readonly laneAdmissionEstablished: false;
  readonly walletOrSigningAuthorityRefused: true;
  readonly tradingExecutionRefused: true;
  readonly credentialUseRefused: true;
  readonly deploymentOrDestructiveMutationRefused: true;
  readonly publicPublishingOrSocialPostingRefused: true;
};

const modeDeclarationRecord = (
  agentRefIn: string,
  declaredProfile: string,
  declarationBasis: string,
  declaredAtEpochMs: number,
) =>
  Object.freeze({
    contractVersion: "pond-agent-declared-operational-mode-d-p12",
    kind: "pond-agent-declared-operational-mode-declaration",
    agentRef: agentRefIn,
    declaredProfile: declaredProfile as "TRADING",
    declarationBasis: declarationBasis as "receiver_recorded_explicit_declared_profile",
    declarationEvent: Object.freeze({
      declared_at_epoch_ms: declaredAtEpochMs,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    stricterLaneRefusalPosture,
    authority: "none",
  });

// ------------------------------------------------------------
// Desk-side structural copies: the D-P0 source contract and presence
// projection, inlined (selftest block 2 deep-equals these copies against
// the direct D-P0 fixture exports).
// ------------------------------------------------------------

const deskSourceContractFixture = Object.freeze({
  contractVersion: "pond-agent-presence-source-contract-d-p0",
  kind: "pond-agent-presence-source-contract",
  sourceContract: Object.freeze({
    repository: "trading-desk",
    boundSourceCommit: "57b5c8b966d3eb58cf239b2f3f1598f09f24b296",
    observedTools: Object.freeze(["runtime_status", "identity_status"]),
    sourcePosture: "read_only_tool_contract_only_no_live_connection",
  }),
  authority: "none",
});

const deskPersonalMemoryBoundary = Object.freeze({
  deskJournalLaneAdmitted: false,
  deskMemoryLaneAdmitted: false,
  deskNarrativeLaneAdmitted: false,
  deskTranscriptLaneAdmitted: false,
});

const deskInertTransport = Object.freeze({
  transport: "not_observed",
  transportIsAgentIdentity: false,
  transportEstablishesAdmission: false,
  liveConnectionPosture: "not_included",
});

const deskTransport = Object.freeze({
  transport: "telegram",
  transportIsAgentIdentity: false,
  transportEstablishesAdmission: false,
  liveConnectionPosture: "not_included",
});

const deskRefusedRuntimeFact = (factLabel: string) =>
  Object.freeze({
    factLabel,
    sourceTool: "runtime_status",
    observedValue: null,
    valuePosture: "not_observed",
  });

const deskObservedRuntimeFact = (factLabel: string, observedValue: string) =>
  Object.freeze({
    factLabel,
    sourceTool: "runtime_status",
    observedValue,
    valuePosture: "transcribed_from_source_contract",
  });

const deskIdentityClaimEvidence = Object.freeze({
  chainIdObserved: null,
  registryAddress: null,
  agentId: null,
  ownerObserved: null,
  blockTag: null,
});

const deskIdentityClaimRelationshipClaims = Object.freeze({
  onchainIdentityIsPrincipalIdentity: false,
  onchainIdentityEstablishesLocalAdmission: false,
  onchainIdentityEstablishesAuthority: false,
});

const deskInertIdentityClaim = Object.freeze({
  claimStatus: "not_observed",
  evidence: deskIdentityClaimEvidence,
  evidencePosture: "observed_evidence_only_no_local_authority",
  relationshipClaims: deskIdentityClaimRelationshipClaims,
});

const deskRefusedRelationshipState = Object.freeze({
  membership: "not_established",
  agentAdmission: "not_established",
  scopeBinding: "not_established",
  delegatedAuthority: "not_established",
});

const deskObservedAgent = (
  agentRefIn: string,
  label: string,
  profileClass: "personal_agent" | "community_agent" | "project_agent",
  presenceStatus: string,
  transport: unknown,
  runtimeFacts: readonly unknown[],
  identityClaimIn: unknown,
) =>
  Object.freeze({
    agentRef: agentRefIn,
    label,
    profileClass,
    presenceStatus,
    observedAt: "fixture:stage-d-p0",
    transport,
    runtimeFacts: Object.freeze([...runtimeFacts]),
    identityClaim: identityClaimIn,
    relationshipState: deskRefusedRelationshipState,
    personalMemoryBoundary: deskPersonalMemoryBoundary,
    authority: "none",
  });

const deskAgent0Record = deskObservedAgent(
  agentRef,
  "Trading Desk (Agent0)",
  "personal_agent",
  "fixture_observed_not_live",
  deskTransport,
  [
    deskObservedRuntimeFact("brain", "glm"),
    deskRefusedRuntimeFact("provider"),
    deskRefusedRuntimeFact("model"),
    deskObservedRuntimeFact("execution", "dry_run"),
    deskRefusedRuntimeFact("trading_state"),
    deskRefusedRuntimeFact("hands"),
    deskRefusedRuntimeFact("doctor_cheap_check"),
  ],
  Object.freeze({
    claimStatus: "not_observed",
    evidence: deskIdentityClaimEvidence,
    evidencePosture: "observed_evidence_only_no_local_authority",
    relationshipClaims: deskIdentityClaimRelationshipClaims,
  }),
);

const deskCommunitySlotRecord = deskObservedAgent(
  "agent:fixture:stage-d-p0:community-agent-slot",
  "Community agent slot",
  "community_agent",
  "not_observed",
  deskInertTransport,
  [],
  deskInertIdentityClaim,
);

const deskProjectSlotRecord = deskObservedAgent(
  "agent:fixture:stage-d-p0:project-agent-slot",
  "Project agent slot",
  "project_agent",
  "not_observed",
  deskInertTransport,
  [],
  deskInertIdentityClaim,
);

const deskPresenceProjection = Object.freeze({
  contractVersion: "pond-agent-presence-projection-d-p0",
  kind: "pond-agent-presence-projection",
  posture: "fixture_observed_presence_projection_authority_none",
  localPrincipalBinding: Object.freeze({
    principalRef: "principal:fixture:stage-d-p0:local-principal",
    bindingState: "fixture_local_projection",
    authenticationPerformed: false,
    ceremonyPosture: "not_defined_this_cut",
  }),
  observedAgents: Object.freeze([
    deskAgent0Record,
    deskCommunitySlotRecord,
    deskProjectSlotRecord,
  ]),
  communityRelationshipState: "not_established",
  projectRelationshipState: "not_established",
  personalMemoryBoundary: deskPersonalMemoryBoundary,
  authority: "none",
});

// The desk-leg-broken arm flips one protected projection posture literal —
// the frozen D-P1 leg honestly refuses the projection.
const deskProjectionPostureTampered = Object.freeze({
  ...deskPresenceProjection,
  posture: "tampered_projection_posture",
});

// ------------------------------------------------------------
// The receiver-recorded advisory rows, re-inlined as the routing
// contract's frozen table pins them (selftest block 6 deep-equals these
// rows against the contract constants).
// ------------------------------------------------------------

const tradingPostureRow: Readonly<
  Record<PondKnowledgeForgeSurfaceId, PondDeclaredModeRoutingAdvisoryPosture>
> = Object.freeze({
  "knowledge-forge-p5b-desktop-projection": "advisory_excluded",
  "knowledge-forge-p5c-skill-library-browser": "advisory_relevant",
  "knowledge-forge-p5d-evidence-inspector": "advisory_relevant",
  "knowledge-forge-p5e-governed-workflow-console": "advisory_excluded",
});

const helperPostureRow: Readonly<
  Record<PondKnowledgeForgeSurfaceId, PondDeclaredModeRoutingAdvisoryPosture>
> = Object.freeze({
  "knowledge-forge-p5b-desktop-projection": "advisory_relevant",
  "knowledge-forge-p5c-skill-library-browser": "advisory_excluded",
  "knowledge-forge-p5d-evidence-inspector": "advisory_relevant",
  "knowledge-forge-p5e-governed-workflow-console": "advisory_excluded",
});

const builderPostureRow: Readonly<
  Record<PondKnowledgeForgeSurfaceId, PondDeclaredModeRoutingAdvisoryPosture>
> = Object.freeze({
  "knowledge-forge-p5b-desktop-projection": "advisory_relevant",
  "knowledge-forge-p5c-skill-library-browser": "advisory_relevant",
  "knowledge-forge-p5d-evidence-inspector": "advisory_excluded",
  "knowledge-forge-p5e-governed-workflow-console": "advisory_excluded",
});

// ------------------------------------------------------------
// Pinned routing assessments.
// ------------------------------------------------------------

const positiveAssessment = (
  declaredProfileIn: "TRADING" | "HELPER" | "BUILDER",
  postureRowIn: Readonly<
    Record<PondKnowledgeForgeSurfaceId, PondDeclaredModeRoutingAdvisoryPosture>
  >,
): PondDeclaredModeRoutingAssessment =>
  Object.freeze({
    contractVersion: "pond-declared-mode-routing-d-p13",
    assessmentKind: "deterministic_supplied_declared_mode_routing_posture",
    routingState: "declared_mode_routing_established",
    reason: "declared_mode_routing_established",
    mappedCompositionState: "forge_bound_declared_profile_recorded",
    mappedCompositionReason: "all_composition_checks_satisfied",
    mappedCompositionUnsatisfiedChecks: Object.freeze([]),
    mappedDeclaredModeReason: "all_declared_mode_checks_satisfied",
    mappedDeclaredModeUnsatisfiedChecks: Object.freeze([]),
    mappedForgeBindingReason: "forge_surface_binding_structurally_recorded",
    mappedDeskSourceBindingReason:
      "fixture_source_binding_structurally_admissible",
    declaredProfile: declaredProfileIn,
    refusedDeclarationBasis: null,
    declarationFreshnessDiagnosis: Object.freeze({
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: 0,
    }),
    mappedDeskAgentJoinState: "agent_record_observed",
    advisoryPostureBySurfaceId: postureRowIn,
    satisfiedChecks: Object.freeze([
      "composition_fully_satisfied_dp12",
      "declared_agent_observed_in_desk_projection",
      "declared_profile_routing_row_recorded",
      "routing_ceiling_held_no_authority_grant_or_admission",
    ] as readonly PondDeclaredModeRoutingCheck[]),
    unsatisfiedChecks: Object.freeze([]),
    routingEstablishesCapability: false,
    routingEstablishesGrant: false,
    routingEstablishesAdmission: false,
    routingEstablishesAuthority: false,
    skillContentAdmitted: false,
    knowledgeContentLoadedIntoAgentContext: false,
    forgeLifecycleMutationAvailable: false,
    credentialAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

// Shared refusal body: every refusal keeps the ceiling all-false and
// the honest mapped sub-states per arm.
const refusalAssessment = (
  reasonIn: PondDeclaredModeRoutingAssessment["reason"],
  overrides: {
    mappedCompositionState: PondDeclaredModeRoutingAssessment["mappedCompositionState"];
    mappedCompositionReason: PondDeclaredModeRoutingAssessment["mappedCompositionReason"];
    mappedCompositionUnsatisfiedChecks: readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[];
    mappedDeclaredModeReason: PondDeclaredModeRoutingAssessment["mappedDeclaredModeReason"];
    mappedDeclaredModeUnsatisfiedChecks: readonly PondAgentDeclaredOperationalModeCheck[];
    mappedForgeBindingReason: PondDeclaredModeRoutingAssessment["mappedForgeBindingReason"];
    mappedDeskSourceBindingReason: PondDeclaredModeRoutingAssessment["mappedDeskSourceBindingReason"];
    declaredProfileIn: PondDeclaredModeRoutingAssessment["declaredProfile"];
    refusedDeclarationBasisIn: PondDeclaredModeRoutingAssessment["refusedDeclarationBasis"];
    declarationFreshnessDiagnosisIn: PondDeclaredModeRoutingAssessment["declarationFreshnessDiagnosis"];
    mappedDeskAgentJoinStateIn: PondDeclaredModeRoutingAssessment["mappedDeskAgentJoinState"];
    advisoryPostureBySurfaceIdIn: PondDeclaredModeRoutingAssessment["advisoryPostureBySurfaceId"];
    satisfiedChecksIn: readonly PondDeclaredModeRoutingCheck[];
    unsatisfiedChecksIn: readonly PondDeclaredModeRoutingCheck[];
  },
): PondDeclaredModeRoutingAssessment =>
  Object.freeze({
    contractVersion: "pond-declared-mode-routing-d-p13",
    assessmentKind: "deterministic_supplied_declared_mode_routing_posture",
    routingState: "routing_not_established",
    reason: reasonIn,
    mappedCompositionState: overrides.mappedCompositionState,
    mappedCompositionReason: overrides.mappedCompositionReason,
    mappedCompositionUnsatisfiedChecks: Object.freeze([
      ...overrides.mappedCompositionUnsatisfiedChecks,
    ]),
    mappedDeclaredModeReason: overrides.mappedDeclaredModeReason,
    mappedDeclaredModeUnsatisfiedChecks: Object.freeze([
      ...overrides.mappedDeclaredModeUnsatisfiedChecks,
    ]),
    mappedForgeBindingReason: overrides.mappedForgeBindingReason,
    mappedDeskSourceBindingReason: overrides.mappedDeskSourceBindingReason,
    declaredProfile: overrides.declaredProfileIn,
    refusedDeclarationBasis: overrides.refusedDeclarationBasisIn,
    declarationFreshnessDiagnosis: overrides.declarationFreshnessDiagnosisIn,
    mappedDeskAgentJoinState: overrides.mappedDeskAgentJoinStateIn,
    advisoryPostureBySurfaceId: overrides.advisoryPostureBySurfaceIdIn,
    satisfiedChecks: Object.freeze([...overrides.satisfiedChecksIn]),
    unsatisfiedChecks: Object.freeze([...overrides.unsatisfiedChecksIn]),
    routingEstablishesCapability: false,
    routingEstablishesGrant: false,
    routingEstablishesAdmission: false,
    routingEstablishesAuthority: false,
    skillContentAdmitted: false,
    knowledgeContentLoadedIntoAgentContext: false,
    forgeLifecycleMutationAvailable: false,
    credentialAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

const freshDiagnosis = Object.freeze({
  state: "fresh",
  reason: "within_declared_maximum_age",
  observationAgeMs: 0,
}) as PondDeclaredModeRoutingAssessment["declarationFreshnessDiagnosis"];

const staleDiagnosis = Object.freeze({
  state: "stale",
  reason: "declared_maximum_age_expired",
  observationAgeMs: 60_001,
}) as PondDeclaredModeRoutingAssessment["declarationFreshnessDiagnosis"];

// Refusal check sets: the composition leg refused (stale/inferred/
// forge-broken/desk-broken arms), or the join leg refused
// (not-observed arm).
const compositionRefusedChecks = Object.freeze([
  "declared_agent_observed_in_desk_projection",
  "declared_profile_routing_row_recorded",
  "routing_ceiling_held_no_authority_grant_or_admission",
] as readonly PondDeclaredModeRoutingCheck[]);
const compositionRefusedUnsatisfied = Object.freeze([
  "composition_fully_satisfied_dp12",
] as readonly PondDeclaredModeRoutingCheck[]);
const joinRefusedChecks = Object.freeze([
  "composition_fully_satisfied_dp12",
  "declared_profile_routing_row_recorded",
  "routing_ceiling_held_no_authority_grant_or_admission",
] as readonly PondDeclaredModeRoutingCheck[]);
const joinRefusedUnsatisfied = Object.freeze([
  "declared_agent_observed_in_desk_projection",
] as readonly PondDeclaredModeRoutingCheck[]);

export const stageDP13RoutingMatrix: readonly PondStageDP13RoutingFixtureEntry[] =
  Object.freeze([
    {
      fixtureLabel: "stage-d-p13:routing:trading-complete",
      forgeBindingRecord: forgeBindingRecord(),
      modeDeclarationRecord: modeDeclarationRecord(
        agentRef,
        "TRADING",
        "receiver_recorded_explicit_declared_profile",
        evaluatedAtEpochMs,
      ),
      deskSourceContractFixture,
      deskPresenceProjection,
      receiverHeldAgentRef: agentRef,
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
      assessment: positiveAssessment("TRADING", tradingPostureRow),
    },
    {
      fixtureLabel: "stage-d-p13:routing:helper-complete",
      forgeBindingRecord: forgeBindingRecord(),
      modeDeclarationRecord: modeDeclarationRecord(
        agentRef,
        "HELPER",
        "receiver_recorded_explicit_declared_profile",
        evaluatedAtEpochMs,
      ),
      deskSourceContractFixture,
      deskPresenceProjection,
      receiverHeldAgentRef: agentRef,
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
      assessment: positiveAssessment("HELPER", helperPostureRow),
    },
    {
      fixtureLabel: "stage-d-p13:routing:builder-complete",
      forgeBindingRecord: forgeBindingRecord(),
      modeDeclarationRecord: modeDeclarationRecord(
        agentRef,
        "BUILDER",
        "receiver_recorded_explicit_declared_profile",
        evaluatedAtEpochMs,
      ),
      deskSourceContractFixture,
      deskPresenceProjection,
      receiverHeldAgentRef: agentRef,
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
      assessment: positiveAssessment("BUILDER", builderPostureRow),
    },
    {
      fixtureLabel: "stage-d-p13:routing:stale-declaration",
      forgeBindingRecord: forgeBindingRecord(),
      modeDeclarationRecord: modeDeclarationRecord(
        agentRef,
        "TRADING",
        "receiver_recorded_explicit_declared_profile",
        staleDeclaredAtEpochMs,
      ),
      deskSourceContractFixture,
      deskPresenceProjection,
      receiverHeldAgentRef: agentRef,
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
      assessment: refusalAssessment(
        "declaration_not_fresh_within_declared_maximum_age",
        {
          mappedCompositionState: "not_composed",
          mappedCompositionReason: "declared_mode_not_established",
          mappedCompositionUnsatisfiedChecks: Object.freeze([
            "declared_operational_mode_recorded_dp12",
            "declaration_fresh_within_declared_maximum_age_dp12",
          ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
          mappedDeclaredModeReason:
            "declaration_not_fresh_within_declared_maximum_age",
          mappedDeclaredModeUnsatisfiedChecks: Object.freeze([
            "declaration_fresh_within_declared_maximum_age",
          ] as readonly PondAgentDeclaredOperationalModeCheck[]),
          mappedForgeBindingReason:
            "forge_surface_binding_structurally_recorded",
          mappedDeskSourceBindingReason:
            "fixture_source_binding_structurally_admissible",
          declaredProfileIn: "TRADING",
          refusedDeclarationBasisIn: null,
          declarationFreshnessDiagnosisIn: staleDiagnosis,
          mappedDeskAgentJoinStateIn: "agent_record_observed",
          advisoryPostureBySurfaceIdIn: tradingPostureRow,
          satisfiedChecksIn: compositionRefusedChecks,
          unsatisfiedChecksIn: compositionRefusedUnsatisfied,
        },
      ),
    },
    {
      fixtureLabel: "stage-d-p13:routing:inferred-basis-refused",
      forgeBindingRecord: forgeBindingRecord(),
      modeDeclarationRecord: modeDeclarationRecord(
        agentRef,
        "TRADING",
        "inferred_from_purpose",
        evaluatedAtEpochMs,
      ),
      deskSourceContractFixture,
      deskPresenceProjection,
      receiverHeldAgentRef: agentRef,
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
      assessment: refusalAssessment(
        "declaration_basis_inference_refused",
        {
          mappedCompositionState: "not_composed",
          mappedCompositionReason: "declared_mode_not_established",
          mappedCompositionUnsatisfiedChecks: Object.freeze([
            "declared_operational_mode_recorded_dp12",
          ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
          mappedDeclaredModeReason: "declaration_basis_inference_refused",
          mappedDeclaredModeUnsatisfiedChecks: Object.freeze([
            "declaration_basis_receiver_recorded_only",
          ] as readonly PondAgentDeclaredOperationalModeCheck[]),
          mappedForgeBindingReason:
            "forge_surface_binding_structurally_recorded",
          mappedDeskSourceBindingReason:
            "fixture_source_binding_structurally_admissible",
          declaredProfileIn: "TRADING",
          refusedDeclarationBasisIn: "inferred_from_purpose",
          declarationFreshnessDiagnosisIn: freshDiagnosis,
          mappedDeskAgentJoinStateIn: "agent_record_observed",
          advisoryPostureBySurfaceIdIn: tradingPostureRow,
          satisfiedChecksIn: compositionRefusedChecks,
          unsatisfiedChecksIn: compositionRefusedUnsatisfied,
        },
      ),
    },
    {
      fixtureLabel: "stage-d-p13:routing:forge-leg-broken",
      forgeBindingRecord: tamperedForgeBindingRecord(),
      modeDeclarationRecord: modeDeclarationRecord(
        agentRef,
        "TRADING",
        "receiver_recorded_explicit_declared_profile",
        evaluatedAtEpochMs,
      ),
      deskSourceContractFixture,
      deskPresenceProjection,
      receiverHeldAgentRef: agentRef,
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
      assessment: refusalAssessment(
        "composition_not_complete",
        {
          mappedCompositionState: "not_composed",
          mappedCompositionReason: "composition_proof_incomplete",
          mappedCompositionUnsatisfiedChecks: Object.freeze([
            "forge_surface_binding_fully_satisfied_dp12",
          ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
          mappedDeclaredModeReason: "all_declared_mode_checks_satisfied",
          mappedDeclaredModeUnsatisfiedChecks: Object.freeze([]),
          mappedForgeBindingReason: "forge_surface_provenance_incomplete",
          mappedDeskSourceBindingReason:
            "fixture_source_binding_structurally_admissible",
          declaredProfileIn: "TRADING",
          refusedDeclarationBasisIn: null,
          declarationFreshnessDiagnosisIn: freshDiagnosis,
          mappedDeskAgentJoinStateIn: "agent_record_observed",
          advisoryPostureBySurfaceIdIn: tradingPostureRow,
          satisfiedChecksIn: compositionRefusedChecks,
          unsatisfiedChecksIn: compositionRefusedUnsatisfied,
        },
      ),
    },
    {
      fixtureLabel: "stage-d-p13:routing:declared-agent-not-observed",
      forgeBindingRecord: forgeBindingRecord(),
      modeDeclarationRecord: modeDeclarationRecord(
        notObservedAgentRef,
        "TRADING",
        "receiver_recorded_explicit_declared_profile",
        evaluatedAtEpochMs,
      ),
      deskSourceContractFixture,
      deskPresenceProjection,
      receiverHeldAgentRef: notObservedAgentRef,
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
      assessment: refusalAssessment(
        "declared_agent_not_observed",
        {
          // The composition is all-satisfied by construction — the held
          // ref equals the declared ref — so the join leg, this cut's
          // own contribution, is what refuses: the community slot's
          // record carries presenceStatus "not_observed".
          mappedCompositionState: "forge_bound_declared_profile_recorded",
          mappedCompositionReason: "all_composition_checks_satisfied",
          mappedCompositionUnsatisfiedChecks: Object.freeze([]),
          mappedDeclaredModeReason: "all_declared_mode_checks_satisfied",
          mappedDeclaredModeUnsatisfiedChecks: Object.freeze([]),
          mappedForgeBindingReason:
            "forge_surface_binding_structurally_recorded",
          mappedDeskSourceBindingReason:
            "fixture_source_binding_structurally_admissible",
          declaredProfileIn: "TRADING",
          refusedDeclarationBasisIn: null,
          declarationFreshnessDiagnosisIn: freshDiagnosis,
          mappedDeskAgentJoinStateIn: "agent_record_presence_not_established",
          advisoryPostureBySurfaceIdIn: tradingPostureRow,
          satisfiedChecksIn: joinRefusedChecks,
          unsatisfiedChecksIn: joinRefusedUnsatisfied,
        },
      ),
    },
    {
      fixtureLabel: "stage-d-p13:routing:desk-leg-broken",
      forgeBindingRecord: forgeBindingRecord(),
      modeDeclarationRecord: modeDeclarationRecord(
        agentRef,
        "TRADING",
        "receiver_recorded_explicit_declared_profile",
        evaluatedAtEpochMs,
      ),
      deskSourceContractFixture,
      deskPresenceProjection: deskProjectionPostureTampered,
      receiverHeldAgentRef: agentRef,
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
      assessment: refusalAssessment(
        "composition_not_complete",
        {
          mappedCompositionState: "not_composed",
          mappedCompositionReason: "desk_source_binding_not_established",
          mappedCompositionUnsatisfiedChecks: Object.freeze([
            "desk_source_binding_still_admissible_dp1",
          ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
          mappedDeclaredModeReason: "all_declared_mode_checks_satisfied",
          mappedDeclaredModeUnsatisfiedChecks: Object.freeze([]),
          mappedForgeBindingReason:
            "forge_surface_binding_structurally_recorded",
          mappedDeskSourceBindingReason: "projection_invalid",
          declaredProfileIn: "TRADING",
          refusedDeclarationBasisIn: null,
          declarationFreshnessDiagnosisIn: freshDiagnosis,
          // The join reads the projection independently and honestly
          // maps the agent record as observed even though the desk leg
          // refused — a posture flip does not unobserve the agent.
          mappedDeskAgentJoinStateIn: "agent_record_observed",
          advisoryPostureBySurfaceIdIn: tradingPostureRow,
          satisfiedChecksIn: compositionRefusedChecks,
          unsatisfiedChecksIn: compositionRefusedUnsatisfied,
        },
      ),
    },
  ]);

export const stageDP13AgentRef = agentRef;
export const stageDP13NotObservedAgentRef = notObservedAgentRef;
export const stageDP13EvaluatedAtEpochMs = evaluatedAtEpochMs;
export const stageDP13MaximumAgeMs = maximumAgeMs;
export const stageDP13StaleDeclaredAtEpochMs = staleDeclaredAtEpochMs;