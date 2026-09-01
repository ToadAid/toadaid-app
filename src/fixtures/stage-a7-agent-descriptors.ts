import type {
  PondAgentDescriptorProjection,
  PondDescriptorExplicitDenial,
  PondDescriptorProfile,
  PondServiceToolRef,
} from "../contracts/pond-agent-descriptor.js";
import type { PondAgentRef } from "../contracts/pond-front-agent.js";
import type {
  PondProjectionEnvelope,
  PondProjectionEvidenceRef,
  PondProjectionEvidenceReferences,
  PondProjectionSourceRef,
  PondProjectionSubjectRef,
  PondScopeRef,
} from "../contracts/pond-projection-envelope.js";
import type { PondAgentAdmissionProjection } from "../contracts/pond-relationship-projections.js";

const asAgentRef = <T extends string>(value: T): T & PondAgentRef =>
  value as T & PondAgentRef;
const asScopeRef = <T extends string>(value: T): T & PondScopeRef =>
  value as T & PondScopeRef;
const asServiceToolRef = <T extends string>(value: T): T & PondServiceToolRef =>
  value as T & PondServiceToolRef;
const asProjectionSourceRef = <T extends string>(
  value: T,
): T & PondProjectionSourceRef => value as T & PondProjectionSourceRef;
const asProjectionSubjectRef = <T extends string>(
  value: T,
): T & PondProjectionSubjectRef => value as T & PondProjectionSubjectRef;
const asEvidenceRef = <T extends string>(
  value: T,
): T & PondProjectionEvidenceRef => value as T & PondProjectionEvidenceRef;

export const stageA7PersonalScopeARef = asScopeRef("scope:fixture:stage-a7:personal-a");
export const stageA7SharedScopeYRef = asScopeRef("scope:fixture:stage-a7:shared-y");
export const stageA7ProjectScopeXRef = asScopeRef("scope:fixture:stage-a7:project-x");
export const stageA7PublicScopeZRef = asScopeRef("scope:fixture:stage-a7:public-z");

export const stageA7PersonalAgentRef = asAgentRef("agent:fixture:stage-a7:personal");
export const stageA7CommunityAgentRef = asAgentRef("agent:fixture:stage-a7:community");
export const stageA7ProjectAgentRef = asAgentRef("agent:fixture:stage-a7:project");
export const stageA7SpecialistAgentRef = asAgentRef("agent:fixture:stage-a7:specialist");
export const stageA7RemoteExternalAgentRef = asAgentRef("agent:fixture:stage-a7:remote-external");
export const stageA7ServiceToolRef = asServiceToolRef("service-tool:fixture:stage-a7:readonly-status");

const projectionSourceRef =
  asProjectionSourceRef("projection-source:fixture:stage-a7:agent-descriptors");

const specialistEvidenceRef =
  asEvidenceRef("evidence:fixture:stage-a7:specialist-manifest");
const remoteIdentityEvidenceRef =
  asEvidenceRef("evidence:fixture:stage-a7:remote-identity");
const remoteCapabilityEvidenceRef =
  asEvidenceRef("evidence:fixture:stage-a7:remote-capability");

const noEvidence = [] as const satisfies PondProjectionEvidenceReferences;
const specialistEvidence = [
  { evidenceRef: specialistEvidenceRef, posture: "reference_only_not_verified" },
] as const satisfies PondProjectionEvidenceReferences;
const remoteEvidence = [
  { evidenceRef: remoteIdentityEvidenceRef, posture: "reference_only_not_verified" },
  { evidenceRef: remoteCapabilityEvidenceRef, posture: "reference_only_not_verified" },
] as const satisfies PondProjectionEvidenceReferences;

const freshEnvelope = <
  const TSourceScopeRef extends PondScopeRef,
  const TSubjectRef extends PondProjectionSubjectRef,
  const TSubjectRevision extends string,
  const TSubjectDigest extends string,
  const TEvidenceReferences extends PondProjectionEvidenceReferences,
>(
  sourceScopeRef: TSourceScopeRef,
  subjectRef: TSubjectRef,
  subjectRevision: TSubjectRevision,
  subjectDigest: TSubjectDigest,
  evidenceReferences: TEvidenceReferences,
) => {
  const envelope = {
    contractVersion: "pond-projection-envelope-a4",
    authority: "none",
    sourceClass: "fixture",
    sourceRef: projectionSourceRef,
    projectionMechanism: "fixture",
    trustPosture: "non_authoritative_fixture",
    sourceScopeRef,
    audiencePosture: "not_established",
    disclosurePosture: "fixture_only_no_release_established",
    subject: {
      subjectRef,
      subjectRevision,
      subjectDigest,
      digestPosture: "fixture_identity_value_not_runtime_proof",
      bindingComparison: "not_performed_fixture_only",
    },
    observation: {
      state: "fresh",
      observedAt: "2026-01-15T12:00:00.000Z",
      freshUntil: "2026-01-15T12:05:00.000Z",
      freshnessBasis: "fixture_declared_interval",
    },
    applicability: "applicable",
    evidenceReferences,
    redactionPosture: "none",
    canonicalOutcome: null,
  } as const;

  return envelope satisfies PondProjectionEnvelope;
};

const staleEnvelope = <
  const TSourceScopeRef extends PondScopeRef,
  const TSubjectRef extends PondProjectionSubjectRef,
  const TSubjectRevision extends string,
  const TSubjectDigest extends string,
  const TEvidenceReferences extends PondProjectionEvidenceReferences,
>(
  sourceScopeRef: TSourceScopeRef,
  subjectRef: TSubjectRef,
  subjectRevision: TSubjectRevision,
  subjectDigest: TSubjectDigest,
  evidenceReferences: TEvidenceReferences,
) => {
  const envelope = {
    contractVersion: "pond-projection-envelope-a4",
    authority: "none",
    sourceClass: "fixture",
    sourceRef: projectionSourceRef,
    projectionMechanism: "fixture",
    trustPosture: "non_authoritative_fixture",
    sourceScopeRef,
    audiencePosture: "not_established",
    disclosurePosture: "fixture_only_no_release_established",
    subject: {
      subjectRef,
      subjectRevision,
      subjectDigest,
      digestPosture: "fixture_identity_value_not_runtime_proof",
      bindingComparison: "not_performed_fixture_only",
    },
    observation: {
      state: "stale",
      observedAt: "2026-01-15T11:00:00.000Z",
      expiredAt: "2026-01-15T11:05:00.000Z",
      freshnessBasis: "fixture_declared_interval_expired",
    },
    applicability: "applicable",
    evidenceReferences,
    redactionPosture: "none",
    canonicalOutcome: "insufficient_evidence",
  } as const;

  return envelope satisfies PondProjectionEnvelope;
};

const conflictingEnvelope = <
  const TSourceScopeRef extends PondScopeRef,
  const TSubjectRef extends PondProjectionSubjectRef,
>(
  sourceScopeRef: TSourceScopeRef,
  subjectRef: TSubjectRef,
) => {
  const envelope = {
    contractVersion: "pond-projection-envelope-a4",
    authority: "none",
    sourceClass: "fixture",
    sourceRef: projectionSourceRef,
    projectionMechanism: "fixture",
    trustPosture: "non_authoritative_fixture",
    sourceScopeRef,
    audiencePosture: "not_established",
    disclosurePosture: "fixture_only_no_release_established",
    subject: {
      subjectRef,
      subjectRevision: "fixture-a7-project-conflict",
      subjectDigest: "fixture-digest:a7-project-conflict",
      digestPosture: "fixture_identity_value_not_runtime_proof",
      bindingComparison: "not_performed_fixture_only",
    },
    observation: {
      state: "conflicting",
      observations: [
        {
          observedAt: "2026-01-15T12:00:00.000Z",
          subjectRevision: "fixture-a7-project-r1",
          subjectDigest: "fixture-digest:a7-project-r1",
        },
        {
          observedAt: "2026-01-15T12:00:30.000Z",
          subjectRevision: "fixture-a7-project-r2",
          subjectDigest: "fixture-digest:a7-project-r2",
        },
      ],
      freshnessBasis: "fixture_conflict_requires_canonical_reconciliation",
      reconciliationPosture: "canonical_source_required_no_winner_selected",
    },
    applicability: "unknown",
    evidenceReferences: noEvidence,
    redactionPosture: "none",
    canonicalOutcome: "insufficient_evidence",
  } as const;

  return envelope satisfies PondProjectionEnvelope;
};

const admissionBase = {
  contractVersion: "pond-relationship-projection-a5",
  authority: "none",
  projectionPosture: "fixture_non_authoritative_relationship_projection",
  kind: "agent_admission",
} as const;

export const stageA7PersonalAdmissionContext = {
  ...admissionBase,
  agentRef: stageA7PersonalAgentRef,
  governingScopeRef: stageA7PersonalScopeARef,
  state: "not_established",
  projection: freshEnvelope(
    stageA7PersonalScopeARef,
    asProjectionSubjectRef("relationship:fixture:stage-a7:admission:personal"),
    "fixture-a7-personal-admission-r1",
    "fixture-digest:a7-personal-admission-r1",
    noEvidence,
  ),
} as const satisfies PondAgentAdmissionProjection;

export const stageA7CommunityAdmissionContext = {
  ...admissionBase,
  agentRef: stageA7CommunityAgentRef,
  governingScopeRef: stageA7SharedScopeYRef,
  state: "active",
  projection: freshEnvelope(
    stageA7SharedScopeYRef,
    asProjectionSubjectRef("relationship:fixture:stage-a7:admission:community"),
    "fixture-a7-community-admission-r1",
    "fixture-digest:a7-community-admission-r1",
    noEvidence,
  ),
} as const satisfies PondAgentAdmissionProjection;

export const stageA7ProjectAdmissionContext = {
  ...admissionBase,
  agentRef: stageA7ProjectAgentRef,
  governingScopeRef: stageA7ProjectScopeXRef,
  state: "active",
  projection: freshEnvelope(
    stageA7ProjectScopeXRef,
    asProjectionSubjectRef("relationship:fixture:stage-a7:admission:project"),
    "fixture-a7-project-admission-r1",
    "fixture-digest:a7-project-admission-r1",
    noEvidence,
  ),
} as const satisfies PondAgentAdmissionProjection;

export const stageA7SpecialistAdmissionContext = {
  ...admissionBase,
  agentRef: stageA7SpecialistAgentRef,
  governingScopeRef: stageA7ProjectScopeXRef,
  state: "active",
  projection: freshEnvelope(
    stageA7ProjectScopeXRef,
    asProjectionSubjectRef("relationship:fixture:stage-a7:admission:specialist"),
    "fixture-a7-specialist-admission-r1",
    "fixture-digest:a7-specialist-admission-r1",
    specialistEvidence,
  ),
} as const satisfies PondAgentAdmissionProjection;

export const stageA7RemoteAdmissionContext = {
  ...admissionBase,
  agentRef: stageA7RemoteExternalAgentRef,
  governingScopeRef: stageA7PublicScopeZRef,
  state: "not_established",
  projection: freshEnvelope(
    stageA7PublicScopeZRef,
    asProjectionSubjectRef("relationship:fixture:stage-a7:admission:remote"),
    "fixture-a7-remote-admission-r1",
    "fixture-digest:a7-remote-admission-r1",
    remoteEvidence,
  ),
} as const satisfies PondAgentAdmissionProjection;

export const stageA7RevokedSpecialistAdmissionContext = {
  ...admissionBase,
  agentRef: stageA7SpecialistAgentRef,
  governingScopeRef: stageA7ProjectScopeXRef,
  state: "revoked",
  projection: freshEnvelope(
    stageA7ProjectScopeXRef,
    asProjectionSubjectRef("relationship:fixture:stage-a7:admission:specialist-revoked"),
    "fixture-a7-specialist-admission-r2-revoked",
    "fixture-digest:a7-specialist-admission-r2-revoked",
    specialistEvidence,
  ),
} as const satisfies PondAgentAdmissionProjection;

const descriptorBase = {
  contractVersion: "pond-agent-descriptor-a7",
  descriptorPosture: "fixture_non_authoritative_versioned_descriptor",
  visibilityPosture: "fixture_visible",
  admissionDecisionPosture: "not_performed",
  currentAuthorityPosture: "not_evaluated_descriptor_cannot_authorize",
  versioningPosture: "a4_subject_revision_digest_is_descriptor_version",
  authority: "none",
} as const;

const visibleReachability = {
  state: "fixture_advertised",
  posture: "fixture_declaration_not_transport_proof",
  endpointPosture: "not_included",
  authority: "none",
} as const;

const noReachability = {
  state: "not_established",
  posture: "fixture_declaration_not_transport_proof",
  endpointPosture: "not_included",
  authority: "none",
} as const;

export const stageA7PersonalDescriptor = {
  ...descriptorBase,
  subjectKind: "agent",
  profile: "personal_agent",
  agentRef: stageA7PersonalAgentRef,
  declaredDomain: "personal_continuity_fixture",
  scopeRelationships: [{
    scopeRef: stageA7PersonalScopeARef,
    relationship: "personal_context",
    posture: "declared_relationship_not_membership_admission_or_release",
  }],
  declaredCapabilities: [{
    capabilityRef: "capability:fixture:stage-a7:personal-context-proposal",
    label: "Personal-context coordination proposal",
    declarationPosture: "declared_not_granted",
  }],
  explicitDenials: ["no_execution_authority", "no_approval_authority", "no_grant_authority"],
  reachability: noReachability,
  admissionContext: stageA7PersonalAdmissionContext,
  admissionContextPosture: "a5_projection_context_only_not_admission_decision",
  projection: freshEnvelope(
    stageA7PersonalScopeARef,
    asProjectionSubjectRef("descriptor:fixture:stage-a7:personal"),
    "fixture-a7-personal-r1",
    "fixture-digest:a7-personal-r1",
    noEvidence,
  ),
} as const satisfies PondAgentDescriptorProjection;

export const stageA7CommunityDescriptor = {
  ...descriptorBase,
  subjectKind: "agent",
  profile: "community_agent",
  agentRef: stageA7CommunityAgentRef,
  declaredDomain: "shared_scope_coordination_fixture",
  scopeRelationships: [{
    scopeRef: stageA7SharedScopeYRef,
    relationship: "serves_shared_scope",
    posture: "declared_relationship_not_membership_admission_or_release",
  }],
  declaredCapabilities: [{
    capabilityRef: "capability:fixture:stage-a7:community-summary-proposal",
    label: "Community-owned summary proposal",
    declarationPosture: "declared_not_granted",
  }],
  explicitDenials: [
    "no_execution_authority",
    "no_approval_authority",
    "no_grant_authority",
    "no_member_personal_memory_inheritance",
  ],
  reachability: visibleReachability,
  admissionContext: stageA7CommunityAdmissionContext,
  admissionContextPosture: "a5_projection_context_only_not_admission_decision",
  projection: freshEnvelope(
    stageA7SharedScopeYRef,
    asProjectionSubjectRef("descriptor:fixture:stage-a7:community"),
    "fixture-a7-community-r1",
    "fixture-digest:a7-community-r1",
    noEvidence,
  ),
} as const satisfies PondAgentDescriptorProjection;

export const stageA7ProjectDescriptor = {
  ...descriptorBase,
  subjectKind: "agent",
  profile: "project_agent",
  agentRef: stageA7ProjectAgentRef,
  declaredDomain: "project_coordination_fixture",
  scopeRelationships: [{
    scopeRef: stageA7ProjectScopeXRef,
    relationship: "serves_project_scope",
    posture: "declared_relationship_not_membership_admission_or_release",
  }],
  declaredCapabilities: [{
    capabilityRef: "capability:fixture:stage-a7:project-status-proposal",
    label: "Project-status coordination proposal",
    declarationPosture: "declared_not_granted",
  }],
  explicitDenials: [
    "no_execution_authority",
    "no_approval_authority",
    "no_grant_authority",
    "no_repository_mutation_authority",
  ],
  reachability: visibleReachability,
  admissionContext: stageA7ProjectAdmissionContext,
  admissionContextPosture: "a5_projection_context_only_not_admission_decision",
  projection: freshEnvelope(
    stageA7ProjectScopeXRef,
    asProjectionSubjectRef("descriptor:fixture:stage-a7:project"),
    "fixture-a7-project-r1",
    "fixture-digest:a7-project-r1",
    noEvidence,
  ),
} as const satisfies PondAgentDescriptorProjection;

export const stageA7SpecialistDescriptor = {
  ...descriptorBase,
  subjectKind: "agent",
  profile: "specialist_agent",
  agentRef: stageA7SpecialistAgentRef,
  declaredDomain: "bounded_repository_analysis_fixture",
  scopeRelationships: [{
    scopeRef: stageA7ProjectScopeXRef,
    relationship: "bounded_specialist_scope",
    posture: "declared_relationship_not_membership_admission_or_release",
  }],
  declaredCapabilities: [
    {
      capabilityRef: "capability:fixture:stage-a7:repository-analysis",
      label: "Repository analysis",
      declarationPosture: "declared_not_granted",
    },
    {
      capabilityRef: "capability:fixture:stage-a7:patch-proposal",
      label: "Patch proposal",
      declarationPosture: "declared_not_granted",
    },
  ],
  explicitDenials: [
    "no_execution_authority",
    "no_approval_authority",
    "no_grant_authority",
    "declared_capability_not_granted",
    "no_repository_mutation_authority",
  ],
  reachability: visibleReachability,
  admissionContext: stageA7SpecialistAdmissionContext,
  admissionContextPosture: "a5_projection_context_only_not_admission_decision",
  projection: freshEnvelope(
    stageA7ProjectScopeXRef,
    asProjectionSubjectRef("descriptor:fixture:stage-a7:specialist"),
    "fixture-a7-specialist-r1",
    "fixture-digest:a7-specialist-r1",
    specialistEvidence,
  ),
} as const satisfies PondAgentDescriptorProjection;

export const stageA7RemoteExternalDescriptor = {
  ...descriptorBase,
  subjectKind: "agent",
  profile: "remote_external_agent",
  agentRef: stageA7RemoteExternalAgentRef,
  declaredDomain: "external_candidate_interaction_fixture",
  scopeRelationships: [{
    scopeRef: stageA7PublicScopeZRef,
    relationship: "external_scope_not_established",
    posture: "declared_relationship_not_membership_admission_or_release",
  }],
  declaredCapabilities: [{
    capabilityRef: "capability:fixture:stage-a7:candidate-message",
    label: "Candidate-message advertisement",
    declarationPosture: "declared_not_granted",
  }],
  explicitDenials: [
    "no_execution_authority",
    "no_approval_authority",
    "no_grant_authority",
    "no_local_direct_authority",
  ],
  reachability: visibleReachability,
  admissionContext: stageA7RemoteAdmissionContext,
  admissionContextPosture: "a5_projection_context_only_not_admission_decision",
  projection: freshEnvelope(
    stageA7PublicScopeZRef,
    asProjectionSubjectRef("descriptor:fixture:stage-a7:remote-external"),
    "fixture-a7-remote-external-r1",
    "fixture-digest:a7-remote-external-r1",
    remoteEvidence,
  ),
} as const satisfies PondAgentDescriptorProjection;

export const stageA7ServiceToolDescriptor = {
  ...descriptorBase,
  subjectKind: "service_tool",
  profile: "service_tool",
  serviceToolRef: stageA7ServiceToolRef,
  autonomyPosture: "not_asserted_as_autonomous_agent",
  declaredDomain: "readonly_status_service_fixture",
  scopeRelationships: [{
    scopeRef: stageA7ProjectScopeXRef,
    relationship: "service_exposure_scope",
    posture: "declared_relationship_not_membership_admission_or_release",
  }],
  declaredCapabilities: [{
    capabilityRef: "capability:fixture:stage-a7:readonly-status",
    label: "Read-only status projection",
    declarationPosture: "declared_not_granted",
  }],
  explicitDenials: [
    "no_execution_authority",
    "no_approval_authority",
    "no_grant_authority",
    "not_an_autonomous_agent",
  ],
  reachability: visibleReachability,
  admissionContext: null,
  admissionContextPosture: "not_applicable_service_tool_is_not_agent_admission",
  projection: freshEnvelope(
    stageA7ProjectScopeXRef,
    asProjectionSubjectRef("descriptor:fixture:stage-a7:service-tool"),
    "fixture-a7-service-tool-r1",
    "fixture-digest:a7-service-tool-r1",
    noEvidence,
  ),
} as const satisfies PondAgentDescriptorProjection;

export const stageA7RevokedSpecialistDescriptor = {
  ...stageA7SpecialistDescriptor,
  admissionContext: stageA7RevokedSpecialistAdmissionContext,
  projection: freshEnvelope(
    stageA7ProjectScopeXRef,
    asProjectionSubjectRef("descriptor:fixture:stage-a7:specialist-revoked"),
    "fixture-a7-specialist-r2-revoked",
    "fixture-digest:a7-specialist-r2-revoked",
    specialistEvidence,
  ),
} as const satisfies PondAgentDescriptorProjection;

export const stageA7StaleSpecialistDescriptor = {
  ...stageA7SpecialistDescriptor,
  projection: staleEnvelope(
    stageA7ProjectScopeXRef,
    asProjectionSubjectRef("descriptor:fixture:stage-a7:specialist-stale"),
    "fixture-a7-specialist-r1-stale",
    "fixture-digest:a7-specialist-r1-stale",
    specialistEvidence,
  ),
} as const satisfies PondAgentDescriptorProjection;

export const stageA7ConflictingProjectDescriptor = {
  ...stageA7ProjectDescriptor,
  projection: conflictingEnvelope(
    stageA7ProjectScopeXRef,
    asProjectionSubjectRef("descriptor:fixture:stage-a7:project-conflicting"),
  ),
} as const satisfies PondAgentDescriptorProjection;

export const stageA7PrimaryDescriptorMatrix = [
  stageA7PersonalDescriptor,
  stageA7CommunityDescriptor,
  stageA7ProjectDescriptor,
  stageA7SpecialistDescriptor,
  stageA7RemoteExternalDescriptor,
  stageA7ServiceToolDescriptor,
] as const satisfies readonly PondAgentDescriptorProjection[];

export const stageA7DegradedDescriptorMatrix = [
  stageA7RevokedSpecialistDescriptor,
  stageA7StaleSpecialistDescriptor,
  stageA7ConflictingProjectDescriptor,
] as const satisfies readonly PondAgentDescriptorProjection[];

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;
type Includes<T extends readonly unknown[], Candidate> =
  T extends readonly [infer Head, ...infer Rest]
    ? Equal<Head, Candidate> extends true ? true : Includes<Rest, Candidate>
    : false;

export type PondStageA7Invariant_PrimaryMatrixHasSixProfiles = Assert<
  Equal<typeof stageA7PrimaryDescriptorMatrix["length"], 6>
>;
export type PondStageA7Invariant_PrimaryProfilesExact = Assert<
  Equal<typeof stageA7PrimaryDescriptorMatrix[number]["profile"], PondDescriptorProfile>
>;
export type PondStageA7Invariant_PrimaryAuthorityNone = Assert<
  Equal<typeof stageA7PrimaryDescriptorMatrix[number]["authority"], "none">
>;
export type PondStageA7Invariant_PrimaryCurrentAuthorityNotEvaluated = Assert<
  Equal<
    typeof stageA7PrimaryDescriptorMatrix[number]["currentAuthorityPosture"],
    "not_evaluated_descriptor_cannot_authorize"
  >
>;
export type PondStageA7Invariant_PrimaryAdmissionDecisionNotPerformed = Assert<
  Equal<
    typeof stageA7PrimaryDescriptorMatrix[number]["admissionDecisionPosture"],
    "not_performed"
  >
>;
export type PondStageA7Invariant_PrimaryVersioningUsesA4Subject = Assert<
  Equal<
    typeof stageA7PrimaryDescriptorMatrix[number]["versioningPosture"],
    "a4_subject_revision_digest_is_descriptor_version"
  >
>;
export type PondStageA7Invariant_PrimaryDeclaredCapabilitiesNotGranted = Assert<
  Equal<
    typeof stageA7PrimaryDescriptorMatrix[number]["declaredCapabilities"][number]["declarationPosture"],
    "declared_not_granted"
  >
>;
export type PondStageA7Invariant_PersonalCanDeclareCapabilityWithoutAdmission = Assert<
  Equal<typeof stageA7PersonalDescriptor["admissionContext"]["state"], "not_established">
>;
export type PondStageA7Invariant_PersonalStillHasNoAuthority = Assert<
  Equal<typeof stageA7PersonalDescriptor["authority"], "none">
>;
export type PondStageA7Invariant_RemoteVisibleReachableButNotAdmitted = Assert<
  Equal<
    [
      typeof stageA7RemoteExternalDescriptor["visibilityPosture"],
      typeof stageA7RemoteExternalDescriptor["reachability"]["state"],
      typeof stageA7RemoteExternalDescriptor["admissionContext"]["state"],
      typeof stageA7RemoteExternalDescriptor["authority"]
    ],
    ["fixture_visible", "fixture_advertised", "not_established", "none"]
  >
>;
export type PondStageA7Invariant_RemoteHasNoLocalDirectAuthorityDenial = Assert<
  Includes<typeof stageA7RemoteExternalDescriptor["explicitDenials"], "no_local_direct_authority">
>;
export type PondStageA7Invariant_ServiceToolIsNotAgent = Assert<
  Equal<
    [
      typeof stageA7ServiceToolDescriptor["subjectKind"],
      typeof stageA7ServiceToolDescriptor["profile"],
      typeof stageA7ServiceToolDescriptor["autonomyPosture"],
      typeof stageA7ServiceToolDescriptor["admissionContext"]
    ],
    ["service_tool", "service_tool", "not_asserted_as_autonomous_agent", null]
  >
>;
export type PondStageA7Invariant_ServiceToolDeniesAutonomousAgent = Assert<
  Includes<typeof stageA7ServiceToolDescriptor["explicitDenials"], "not_an_autonomous_agent">
>;
export type PondStageA7Invariant_RevokedSpecialistDescriptorCanStillBeFresh = Assert<
  Equal<
    [
      typeof stageA7RevokedSpecialistDescriptor["projection"]["observation"]["state"],
      typeof stageA7RevokedSpecialistDescriptor["admissionContext"]["state"],
      typeof stageA7RevokedSpecialistDescriptor["reachability"]["state"],
      typeof stageA7RevokedSpecialistDescriptor["authority"]
    ],
    ["fresh", "revoked", "fixture_advertised", "none"]
  >
>;
export type PondStageA7Invariant_StaleDescriptorRefusesCurrentUse = Assert<
  Equal<
    [
      typeof stageA7StaleSpecialistDescriptor["projection"]["observation"]["state"],
      typeof stageA7StaleSpecialistDescriptor["projection"]["canonicalOutcome"],
      typeof stageA7StaleSpecialistDescriptor["admissionContext"]["state"],
      typeof stageA7StaleSpecialistDescriptor["authority"]
    ],
    ["stale", "insufficient_evidence", "active", "none"]
  >
>;
export type PondStageA7Invariant_ConflictingDescriptorChoosesNoWinner = Assert<
  Equal<
    [
      typeof stageA7ConflictingProjectDescriptor["projection"]["observation"]["state"],
      typeof stageA7ConflictingProjectDescriptor["projection"]["observation"]["reconciliationPosture"],
      typeof stageA7ConflictingProjectDescriptor["projection"]["canonicalOutcome"],
      typeof stageA7ConflictingProjectDescriptor["authority"]
    ],
    ["conflicting", "canonical_source_required_no_winner_selected", "insufficient_evidence", "none"]
  >
>;
export type PondStageA7Invariant_SpecialistEvidenceReferenceOnly = Assert<
  Equal<
    typeof stageA7SpecialistDescriptor["projection"]["evidenceReferences"][0]["posture"],
    "reference_only_not_verified"
  >
>;
export type PondStageA7Invariant_RemoteCarriesTwoEvidenceRefs = Assert<
  Equal<typeof stageA7RemoteExternalDescriptor["projection"]["evidenceReferences"]["length"], 2>
>;
export type PondStageA7Invariant_SpecialistVersionDigestExact = Assert<
  Equal<
    [
      typeof stageA7SpecialistDescriptor["projection"]["subject"]["subjectRevision"],
      typeof stageA7SpecialistDescriptor["projection"]["subject"]["subjectDigest"],
      typeof stageA7SpecialistDescriptor["projection"]["subject"]["digestPosture"]
    ],
    [
      "fixture-a7-specialist-r1",
      "fixture-digest:a7-specialist-r1",
      "fixture_identity_value_not_runtime_proof"
    ]
  >
>;
export type PondStageA7Invariant_CommunityDeniesPersonalMemoryInheritance = Assert<
  Includes<
    typeof stageA7CommunityDescriptor["explicitDenials"],
    "no_member_personal_memory_inheritance"
  >
>;
export type PondStageA7Invariant_ProjectDeniesRepositoryMutationAuthority = Assert<
  Includes<
    typeof stageA7ProjectDescriptor["explicitDenials"],
    "no_repository_mutation_authority"
  >
>;
export type PondStageA7Invariant_SpecialistDeclaresNotGranted = Assert<
  Includes<
    typeof stageA7SpecialistDescriptor["explicitDenials"],
    "declared_capability_not_granted"
  >
>;
export type PondStageA7Invariant_AllDegradedAuthorityNone = Assert<
  Equal<typeof stageA7DegradedDescriptorMatrix[number]["authority"], "none">
>;
type StageA7PrimaryExplicitDenial =
  typeof stageA7PrimaryDescriptorMatrix[number]["explicitDenials"][number];

export type PondStageA7Invariant_ExplicitDenialVocabularyUsed = Assert<
  Equal<StageA7PrimaryExplicitDenial, PondDescriptorExplicitDenial>
>;
