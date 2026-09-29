// Stage D-P12 fixture: the knowledge-forge surface binding and declared
// operational-mode matrix — the forge surface binding (complete /
// tampered-commit refusal), the declared operational-mode declarations
// (TRADING / HELPER complete, inference refused, stale refusal), and the
// composition arms (complete / each leg broken). Zero value imports: every
// import is type-only, so the selftest imports this file directly under
// node type-stripping. The forge binding records inline the four forge
// surfaces' provenance commitments — the same literals the contract's
// frozen commitment table pins; the selftest re-extracts them from the
// four ui/pond-knowledge-forge*.js modules directly, so the binding, the
// contract table, and the ui cannot drift apart. The composition desk-side
// records inline structural copies of the D-P0 source contract and
// presence projection — the selftest deep-equals those copies against the
// actual D-P0 fixture exports. No network, no live forge state: every
// literal is structural provenance the receiver already holds in its own
// ui surfaces.

import type {
  PondKnowledgeForgeSurfaceBindingAssessment,
  PondKnowledgeForgeSurfaceBindingCheck,
} from "../contracts/pond-knowledge-forge-surface-binding.js";
import type {
  PondAgentDeclaredOperationalModeAssessment,
  PondAgentDeclaredOperationalModeCheck,
} from "../contracts/pond-agent-declared-operational-mode.js";
import type {
  PondKnowledgeForgeBoundDeclaredModeCompositionAssessment,
  PondKnowledgeForgeBoundDeclaredModeCompositionCheck,
} from "../contracts/pond-knowledge-forge-bound-declared-mode-composition.js";
import type { PondAgentPresenceSourceBindingCheck } from "../contracts/pond-agent-presence-source-binding.js";

export interface PondStageDP12ForgeBindingFixtureEntry {
  readonly fixtureLabel: string;
  readonly forgeBindingRecord: unknown;
  readonly assessment: PondKnowledgeForgeSurfaceBindingAssessment;
}

export interface PondStageDP12ModeFixtureEntry {
  readonly fixtureLabel: string;
  readonly modeDeclarationRecord: unknown;
  readonly receiverEvaluatedAtEpochMs: number;
  readonly receiverMaximumAgeMs: number;
  readonly assessment: PondAgentDeclaredOperationalModeAssessment;
}

export interface PondStageDP12CompositionFixtureEntry {
  readonly fixtureLabel: string;
  readonly forgeBindingRecord: unknown;
  readonly modeDeclarationRecord: unknown;
  readonly deskSourceContractFixture: unknown;
  readonly deskPresenceProjection: unknown;
  readonly receiverHeldAgentRef: string;
  readonly receiverEvaluatedAtEpochMs: number;
  readonly receiverMaximumAgeMs: number;
  readonly assessment: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment;
}

// The receiver-held agent ref and the D-P12 evaluation pair, carried from
// the D-P0/D-P8/D-P9/D-P11 convention: the declaration event sits inside
// the declared maximum age on the complete arms (age 0), and one
// millisecond past it on the stale arm (age 60_001).
const agentRef = "agent:fixture:stage-d-p0:trading-desk-agent0";
const architectureCommit = "bc7a971dfb243f0aa4417da6cef85cc56204f783";
const knowledgeLawAnchor = "Build capability. Never manufacture authority.";
const evaluatedAtEpochMs = 1_800_000_060_000;
const maximumAgeMs = 60_000;
const staleDeclaredAtEpochMs = 1_799_999_999_999;

// The four forge surfaces' provenance commitments — exact commits, trees,
// companion repositories, projection postures, and the normalized
// authority-posture intersection all four ui posture objects carry.
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

// The tampered-commit arm flips one hex character of the p5d forge commit —
// the record stays 40-hex and well-shaped, so the refusal is exact-
// provenance (check 2), never a malformed record.
// The tampered-commit arm flips one hex character of the p5d forge commit —
// the record stays 40-hex and well-shaped, so the refusal is exact-
// provenance (check 2), never a malformed record.
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
// Declared operational-mode arms.
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
  declaredProfile: string,
  declarationBasis: string,
  declaredAtEpochMs: number,
) =>
  Object.freeze({
    contractVersion: "pond-agent-declared-operational-mode-d-p12",
    kind: "pond-agent-declared-operational-mode-declaration",
    agentRef,
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

const tradingCompleteAssessment: PondAgentDeclaredOperationalModeAssessment =
  Object.freeze({
    contractVersion: "pond-agent-declared-operational-mode-d-p12",
    assessmentKind: "deterministic_supplied_declared_operational_mode",
    declaredModeState: "receiver_recorded_declared_mode_evidence_only",
    reason: "all_declared_mode_checks_satisfied",
    refusedDeclarationBasis: null,
    declaredProfile: "TRADING",
    declarationFreshnessDiagnosis: Object.freeze({
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: 0,
    }),
    stricterLaneRefusalPosture,
    satisfiedChecks: Object.freeze([
      "declaration_record_well_formed",
      "one_agent_one_profile_binding",
      "declaration_basis_receiver_recorded_only",
      "declared_profile_in_vocabulary",
      "declaration_fresh_within_declared_maximum_age",
      "stricter_lane_refusal_posture_held",
      "declaration_is_evidence_only_ceiling_held",
    ] as readonly PondAgentDeclaredOperationalModeCheck[]),
    unsatisfiedChecks: Object.freeze([]),
    declaredProfileEstablishesAuthority: false,
    declaredProfileEstablishesGrant: false,
    declaredProfileEstablishesCapability: false,
    declaredProfileEstablishesAdmission: false,
    credentialAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

const helperCompleteAssessment: PondAgentDeclaredOperationalModeAssessment =
  Object.freeze({
    ...tradingCompleteAssessment,
    declaredProfile: "HELPER",
  });

const inferredFromPurposeAssessment: PondAgentDeclaredOperationalModeAssessment =
  Object.freeze({
    contractVersion: "pond-agent-declared-operational-mode-d-p12",
    assessmentKind: "deterministic_supplied_declared_operational_mode",
    declaredModeState: "not_established",
    reason: "declaration_basis_inference_refused",
    refusedDeclarationBasis: "inferred_from_purpose",
    declaredProfile: "TRADING",
    declarationFreshnessDiagnosis: Object.freeze({
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: 0,
    }),
    stricterLaneRefusalPosture,
    satisfiedChecks: Object.freeze([
      "declaration_record_well_formed",
      "one_agent_one_profile_binding",
      "declared_profile_in_vocabulary",
      "declaration_fresh_within_declared_maximum_age",
      "stricter_lane_refusal_posture_held",
      "declaration_is_evidence_only_ceiling_held",
    ] as readonly PondAgentDeclaredOperationalModeCheck[]),
    unsatisfiedChecks: Object.freeze([
      "declaration_basis_receiver_recorded_only",
    ] as readonly PondAgentDeclaredOperationalModeCheck[]),
    declaredProfileEstablishesAuthority: false,
    declaredProfileEstablishesGrant: false,
    declaredProfileEstablishesCapability: false,
    declaredProfileEstablishesAdmission: false,
    credentialAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

const staleAssessment: PondAgentDeclaredOperationalModeAssessment = Object.freeze(
  {
    contractVersion: "pond-agent-declared-operational-mode-d-p12",
    assessmentKind: "deterministic_supplied_declared_operational_mode",
    declaredModeState: "not_established",
    reason: "declaration_not_fresh_within_declared_maximum_age",
    refusedDeclarationBasis: null,
    declaredProfile: "TRADING",
    declarationFreshnessDiagnosis: Object.freeze({
      state: "stale",
      reason: "declared_maximum_age_expired",
      observationAgeMs: 60_001,
    }),
    stricterLaneRefusalPosture,
    satisfiedChecks: Object.freeze([
      "declaration_record_well_formed",
      "one_agent_one_profile_binding",
      "declaration_basis_receiver_recorded_only",
      "declared_profile_in_vocabulary",
      "stricter_lane_refusal_posture_held",
      "declaration_is_evidence_only_ceiling_held",
    ] as readonly PondAgentDeclaredOperationalModeCheck[]),
    unsatisfiedChecks: Object.freeze([
      "declaration_fresh_within_declared_maximum_age",
    ] as readonly PondAgentDeclaredOperationalModeCheck[]),
    declaredProfileEstablishesAuthority: false,
    declaredProfileEstablishesGrant: false,
    declaredProfileEstablishesCapability: false,
    declaredProfileEstablishesAdmission: false,
    credentialAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  },
);

// ------------------------------------------------------------
// Composition desk-side structural copies: the D-P0 source contract and
// presence projection, inlined (selftest block 2 deep-equals these
// copies against the direct D-P0 fixture exports).
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
// the frozen D-P1 assessor honestly refuses the projection.
const deskProjectionPostureTampered = Object.freeze({
  ...deskPresenceProjection,
  posture: "tampered_projection_posture",
});

const forgeCompleteAssessment: PondKnowledgeForgeSurfaceBindingAssessment =
  Object.freeze({
    contractVersion: "pond-knowledge-forge-surface-binding-d-p12",
    assessmentKind: "deterministic_supplied_knowledge_forge_surface_binding",
    bindingState: "fixture_bound_forge_surface_provenance",
    reason: "forge_surface_binding_structurally_recorded",
    satisfiedChecks: Object.freeze([
      "binding_record_well_formed_frozen_vocabulary",
      "exact_forge_source_identity_per_surface",
      "forge_surface_posture_literals_held",
      "knowledge_law_anchor_held",
      "surface_inventory_exact_and_receiver_recorded",
      "no_live_connection_lifecycle_or_mutation_posture",
    ] as readonly PondKnowledgeForgeSurfaceBindingCheck[]),
    unsatisfiedChecks: Object.freeze([]),
    forgeSurfaceProvenanceReverifiedByReceiver: false,
    forgeSurfaceAcceptedAsCurrentRegistryTruth: false,
    skillContentAdmitted: false,
    forgeLifecycleMutationAvailable: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

const forgeTamperedAssessment: PondKnowledgeForgeSurfaceBindingAssessment =
  Object.freeze({
    ...forgeCompleteAssessment,
    bindingState: "not_established",
    reason: "forge_surface_provenance_incomplete",
    satisfiedChecks: Object.freeze([
      "binding_record_well_formed_frozen_vocabulary",
      "forge_surface_posture_literals_held",
      "knowledge_law_anchor_held",
      "surface_inventory_exact_and_receiver_recorded",
      "no_live_connection_lifecycle_or_mutation_posture",
    ] as readonly PondKnowledgeForgeSurfaceBindingCheck[]),
    unsatisfiedChecks: Object.freeze([
      "exact_forge_source_identity_per_surface",
    ] as readonly PondKnowledgeForgeSurfaceBindingCheck[]),
  });

export const stageDP12ForgeBindingMatrix: readonly PondStageDP12ForgeBindingFixtureEntry[] =
  Object.freeze([
    {
      fixtureLabel: "stage-d-p12:forge-binding:complete",
      forgeBindingRecord: forgeBindingRecord(),
      assessment: forgeCompleteAssessment,
    },
    {
      fixtureLabel: "stage-d-p12:forge-binding:tampered-commit-refused",
      forgeBindingRecord: tamperedForgeBindingRecord(),
      assessment: forgeTamperedAssessment,
    },
  ]);

export const stageDP12ModeMatrix: readonly PondStageDP12ModeFixtureEntry[] =
  Object.freeze([
    {
      fixtureLabel: "stage-d-p12:declared-mode:trading-complete",
      modeDeclarationRecord: modeDeclarationRecord(
        "TRADING",
        "receiver_recorded_explicit_declared_profile",
        evaluatedAtEpochMs,
      ),
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
      assessment: tradingCompleteAssessment,
    },
    {
      fixtureLabel: "stage-d-p12:declared-mode:helper-complete",
      modeDeclarationRecord: modeDeclarationRecord(
        "HELPER",
        "receiver_recorded_explicit_declared_profile",
        evaluatedAtEpochMs,
      ),
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
      assessment: helperCompleteAssessment,
    },
    {
      fixtureLabel: "stage-d-p12:declared-mode:inferred-from-purpose-refused",
      modeDeclarationRecord: modeDeclarationRecord(
        "TRADING",
        "inferred_from_purpose",
        evaluatedAtEpochMs,
      ),
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
      assessment: inferredFromPurposeAssessment,
    },
    {
      fixtureLabel: "stage-d-p12:declared-mode:stale-refused",
      modeDeclarationRecord: modeDeclarationRecord(
        "TRADING",
        "receiver_recorded_explicit_declared_profile",
        staleDeclaredAtEpochMs,
      ),
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
      assessment: staleAssessment,
    },
  ]);

const compositionCompleteAssessment: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment =
  Object.freeze({
    contractVersion:
      "pond-knowledge-forge-bound-declared-mode-composition-d-p12",
    assessmentKind:
      "deterministic_supplied_knowledge_forge_bound_declared_mode_composition",
    compositionState: "forge_bound_declared_profile_recorded",
    reason: "all_composition_checks_satisfied",
    mappedForgeBindingState: "fixture_bound_forge_surface_provenance",
    mappedForgeBindingReason: "forge_surface_binding_structurally_recorded",
    mappedDeclaredModeState: "receiver_recorded_declared_mode_evidence_only",
    mappedDeclaredModeReason: "all_declared_mode_checks_satisfied",
    mappedDeskSourceBindingState: "fixture_bound_committed_source_contract",
    mappedDeskSourceBindingReason:
      "fixture_source_binding_structurally_admissible",
    mappedForgeUnsatisfiedChecks: Object.freeze([]),
    mappedDeclaredModeUnsatisfiedChecks: Object.freeze([]),
    mappedDeskSourceUnsatisfiedChecks: Object.freeze([]),
    declarationFreshnessDiagnosis: Object.freeze({
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: 0,
    }),
    satisfiedChecks: Object.freeze([
      "forge_surface_binding_fully_satisfied_dp12",
      "declared_operational_mode_recorded_dp12",
      "declaration_fresh_within_declared_maximum_age_dp12",
      "desk_source_binding_still_admissible_dp1",
      "composition_ceiling_held_no_capability_grant_or_authority",
    ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
    unsatisfiedChecks: Object.freeze([]),
    forgeBoundDeclaredProfileEstablishesGrant: false,
    forgeBoundDeclaredProfileEstablishesCapability: false,
    declaredProfileEstablishesAuthority: false,
    declaredProfileEstablishesGrant: false,
    declaredProfileEstablishesCapability: false,
    declaredProfileEstablishesAdmission: false,
    skillContentAdmitted: false,
    forgeLifecycleMutationAvailable: false,
    knowledgeContentLoadedIntoAgentContext: false,
    credentialAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

const compositionForgeBrokenAssessment: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment =
  Object.freeze({
    ...compositionCompleteAssessment,
    compositionState: "not_composed",
    reason: "composition_proof_incomplete",
    mappedForgeBindingState: "not_established",
    mappedForgeBindingReason: "forge_surface_provenance_incomplete",
    mappedForgeUnsatisfiedChecks: Object.freeze([
      "exact_forge_source_identity_per_surface",
    ] as readonly PondKnowledgeForgeSurfaceBindingCheck[]),
    satisfiedChecks: Object.freeze([
      "declared_operational_mode_recorded_dp12",
      "declaration_fresh_within_declared_maximum_age_dp12",
      "desk_source_binding_still_admissible_dp1",
      "composition_ceiling_held_no_capability_grant_or_authority",
    ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
    unsatisfiedChecks: Object.freeze([
      "forge_surface_binding_fully_satisfied_dp12",
    ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
  });

const compositionModeRefusedAssessment: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment =
  Object.freeze({
    ...compositionCompleteAssessment,
    compositionState: "not_composed",
    reason: "declared_mode_not_established",
    mappedDeclaredModeState: "not_established",
    mappedDeclaredModeReason: "declaration_basis_inference_refused",
    mappedDeclaredModeUnsatisfiedChecks: Object.freeze([
      "declaration_basis_receiver_recorded_only",
    ] as readonly PondAgentDeclaredOperationalModeCheck[]),
    satisfiedChecks: Object.freeze([
      "forge_surface_binding_fully_satisfied_dp12",
      "declaration_fresh_within_declared_maximum_age_dp12",
      "desk_source_binding_still_admissible_dp1",
      "composition_ceiling_held_no_capability_grant_or_authority",
    ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
    unsatisfiedChecks: Object.freeze([
      "declared_operational_mode_recorded_dp12",
    ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
  });

const compositionDeskBrokenAssessment: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment =
  Object.freeze({
    ...compositionCompleteAssessment,
    compositionState: "not_composed",
    reason: "desk_source_binding_not_established",
    mappedDeskSourceBindingState: "not_established",
    mappedDeskSourceBindingReason: "projection_invalid",
    mappedDeskSourceUnsatisfiedChecks: Object.freeze([
      "exact_repository_identity",
      "exact_committed_source_commit_binding",
      "exact_observed_tool_inventory",
      "read_only_source_posture",
      "presence_records_sourced_from_bound_contract",
      "no_live_connection_in_binding",
    ] as readonly PondAgentPresenceSourceBindingCheck[]),
    satisfiedChecks: Object.freeze([
      "forge_surface_binding_fully_satisfied_dp12",
      "declared_operational_mode_recorded_dp12",
      "declaration_fresh_within_declared_maximum_age_dp12",
      "composition_ceiling_held_no_capability_grant_or_authority",
    ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
    unsatisfiedChecks: Object.freeze([
      "desk_source_binding_still_admissible_dp1",
    ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
  });

const compositionStaleAssessment: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment =
  Object.freeze({
    ...compositionCompleteAssessment,
    compositionState: "not_composed",
    reason: "declared_mode_not_established",
    mappedDeclaredModeState: "not_established",
    mappedDeclaredModeReason:
      "declaration_not_fresh_within_declared_maximum_age",
    mappedDeclaredModeUnsatisfiedChecks: Object.freeze([
      "declaration_fresh_within_declared_maximum_age",
    ] as readonly PondAgentDeclaredOperationalModeCheck[]),
    declarationFreshnessDiagnosis: Object.freeze({
      state: "stale",
      reason: "declared_maximum_age_expired",
      observationAgeMs: 60_001,
    }),
    satisfiedChecks: Object.freeze([
      "forge_surface_binding_fully_satisfied_dp12",
      "desk_source_binding_still_admissible_dp1",
      "composition_ceiling_held_no_capability_grant_or_authority",
    ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
    unsatisfiedChecks: Object.freeze([
      "declared_operational_mode_recorded_dp12",
      "declaration_fresh_within_declared_maximum_age_dp12",
    ] as readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]),
  });

const compositionMatrixEntry = (
  fixtureLabel: string,
  forgeBindingRecordIn: unknown,
  modeDeclarationRecordIn: unknown,
  deskPresenceProjectionIn: unknown,
  assessment: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment,
): PondStageDP12CompositionFixtureEntry =>
  Object.freeze({
    fixtureLabel,
    forgeBindingRecord: forgeBindingRecordIn,
    modeDeclarationRecord: modeDeclarationRecordIn,
    deskSourceContractFixture,
    deskPresenceProjection: deskPresenceProjectionIn,
    receiverHeldAgentRef: agentRef,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAgeMs,
    assessment,
  });

export const stageDP12CompositionMatrix: readonly PondStageDP12CompositionFixtureEntry[] =
  Object.freeze([
    compositionMatrixEntry(
      "stage-d-p12:composition:complete",
      forgeBindingRecord(),
      modeDeclarationRecord(
        "TRADING",
        "receiver_recorded_explicit_declared_profile",
        evaluatedAtEpochMs,
      ),
      deskPresenceProjection,
      compositionCompleteAssessment,
    ),
    compositionMatrixEntry(
      "stage-d-p12:composition:forge-leg-broken",
      tamperedForgeBindingRecord(),
      modeDeclarationRecord(
        "TRADING",
        "receiver_recorded_explicit_declared_profile",
        evaluatedAtEpochMs,
      ),
      deskPresenceProjection,
      compositionForgeBrokenAssessment,
    ),
    compositionMatrixEntry(
      "stage-d-p12:composition:mode-leg-refused",
      forgeBindingRecord(),
      modeDeclarationRecord(
        "TRADING",
        "inferred_from_purpose",
        evaluatedAtEpochMs,
      ),
      deskPresenceProjection,
      compositionModeRefusedAssessment,
    ),
    compositionMatrixEntry(
      "stage-d-p12:composition:desk-leg-broken",
      forgeBindingRecord(),
      modeDeclarationRecord(
        "TRADING",
        "receiver_recorded_explicit_declared_profile",
        evaluatedAtEpochMs,
      ),
      deskProjectionPostureTampered,
      compositionDeskBrokenAssessment,
    ),
    compositionMatrixEntry(
      "stage-d-p12:composition:stale-declaration",
      forgeBindingRecord(),
      modeDeclarationRecord(
        "TRADING",
        "receiver_recorded_explicit_declared_profile",
        staleDeclaredAtEpochMs,
      ),
      deskPresenceProjection,
      compositionStaleAssessment,
    ),
  ]);

export const stageDP12AgentRef = agentRef;
export const stageDP12EvaluatedAtEpochMs = evaluatedAtEpochMs;
export const stageDP12MaximumAgeMs = maximumAgeMs;
export const stageDP12StaleDeclaredAtEpochMs = staleDeclaredAtEpochMs;