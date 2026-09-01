import type {
  PondRouteCandidateProposal,
  PondRouteCandidateRef,
  PondRouteCandidateRefusalEvidence,
} from "../contracts/pond-route-candidate-proposal.js";
import type { PondPrincipalRef } from "../contracts/pond-front-agent.js";
import type {
  PondProjectionEnvelope,
  PondProjectionEvidenceReferences,
  PondProjectionSourceRef,
  PondProjectionSubjectRef,
  PondScopeRef,
} from "../contracts/pond-projection-envelope.js";
import type { PondCrossScopeReleaseProjection } from "../contracts/pond-relationship-projections.js";
import {
  stageA7ConflictingProjectDescriptor,
  stageA7PersonalScopeARef,
  stageA7ProjectAgentRef,
  stageA7ProjectScopeXRef,
  stageA7RemoteExternalAgentRef,
  stageA7RemoteExternalDescriptor,
  stageA7RevokedSpecialistDescriptor,
  stageA7ServiceToolDescriptor,
  stageA7ServiceToolRef,
  stageA7SpecialistAgentRef,
  stageA7SpecialistDescriptor,
  stageA7StaleSpecialistDescriptor,
  stageA7PublicScopeZRef,
} from "./stage-a7-agent-descriptors.js";

const asPrincipalRef = <T extends string>(value: T): T & PondPrincipalRef =>
  value as T & PondPrincipalRef;
const asRouteCandidateRef = <T extends string>(value: T): T & PondRouteCandidateRef =>
  value as T & PondRouteCandidateRef;
const asProjectionSourceRef = <T extends string>(
  value: T,
): T & PondProjectionSourceRef => value as T & PondProjectionSourceRef;
const asProjectionSubjectRef = <T extends string>(
  value: T,
): T & PondProjectionSubjectRef => value as T & PondProjectionSubjectRef;

export const stageA8PrincipalARef =
  asPrincipalRef("principal:fixture:stage-a8:principal-a");

const projectionSourceRef =
  asProjectionSourceRef("projection-source:fixture:stage-a8:route-candidates");
const noEvidence = [] as const satisfies PondProjectionEvidenceReferences;

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

export const stageA8SourceProjection = freshEnvelope(
  stageA7PersonalScopeARef,
  asProjectionSubjectRef("source:fixture:stage-a8:principal-a-personal-a"),
  "fixture-a8-source-r1",
  "fixture-digest:a8-source-r1",
  noEvidence,
);

const releaseBase = {
  contractVersion: "pond-relationship-projection-a5",
  authority: "none",
  projectionPosture: "fixture_non_authoritative_relationship_projection",
  kind: "cross_scope_release",
  releaseOperation: "not_performed",
} as const;

export const stageA8EstablishedReleasePersonalToProject = {
  ...releaseBase,
  sourceScopeRef: stageA7PersonalScopeARef,
  destinationScopeRef: stageA7ProjectScopeXRef,
  state: "established",
  projection: freshEnvelope(
    stageA7PersonalScopeARef,
    asProjectionSubjectRef("relationship:fixture:stage-a8:release:personal-project:established"),
    "fixture-a8-release-project-r1",
    "fixture-digest:a8-release-project-r1",
    noEvidence,
  ),
} as const satisfies PondCrossScopeReleaseProjection;

export const stageA8NotEstablishedReleasePersonalToProject = {
  ...releaseBase,
  sourceScopeRef: stageA7PersonalScopeARef,
  destinationScopeRef: stageA7ProjectScopeXRef,
  state: "not_established",
  projection: freshEnvelope(
    stageA7PersonalScopeARef,
    asProjectionSubjectRef("relationship:fixture:stage-a8:release:personal-project:not-established"),
    "fixture-a8-release-project-r0",
    "fixture-digest:a8-release-project-r0",
    noEvidence,
  ),
} as const satisfies PondCrossScopeReleaseProjection;

export const stageA8EstablishedReleasePersonalToPublic = {
  ...releaseBase,
  sourceScopeRef: stageA7PersonalScopeARef,
  destinationScopeRef: stageA7PublicScopeZRef,
  state: "established",
  projection: freshEnvelope(
    stageA7PersonalScopeARef,
    asProjectionSubjectRef("relationship:fixture:stage-a8:release:personal-public:established"),
    "fixture-a8-release-public-r1",
    "fixture-digest:a8-release-public-r1",
    noEvidence,
  ),
} as const satisfies PondCrossScopeReleaseProjection;

const refusalEvidence = <
  const TCondition extends PondRouteCandidateRefusalEvidence["condition"],
  const TOutcome extends PondRouteCandidateRefusalEvidence["canonicalOutcome"],
  const TProjection extends PondProjectionEnvelope,
>(
  condition: TCondition,
  canonicalOutcome: TOutcome,
  projection: TProjection,
) => {
  const evidence = {
    condition,
    canonicalOutcome,
    projection,
    posture: "fixture_projection_evidence_only_not_route_authority",
  } as const;

  return evidence satisfies PondRouteCandidateRefusalEvidence;
};

const routeBase = {
  contractVersion: "pond-route-candidate-proposal-a8",
  proposalPosture: "deterministic_fixture_inert_route_candidate",
  source: {
    principalRef: stageA8PrincipalARef,
    scopeRef: stageA7PersonalScopeARef,
    agentRef: null,
    posture: "fixture_source_identity_reference_only",
  },
  routeSelectionPosture: "candidate_not_selected",
  deliveryEligibilityPosture: "not_evaluated",
  deliveryDecisionPosture: "not_performed",
  consequenceAuthorizationPosture: "not_evaluated",
  effectPosture: {
    delivery: "not_performed",
    dispatch: "not_performed",
    invocation: "not_performed",
    release: "not_performed",
    grant: "not_performed",
    approval: "not_performed",
    mutation: "not_performed",
    execution: "not_performed",
  },
  authority: "none",
} as const;

const candidateAssessment = {
  state: "candidate",
  posture: "structurally_complete_fixture_candidate_not_delivery_eligible",
  canonicalRefusalOutcome: null,
  refusalEvidence: [],
} as const;

const specialistDestination = {
  scopeRef: stageA7ProjectScopeXRef,
  audience: {
    kind: "exact_agent",
    agentRef: stageA7SpecialistAgentRef,
    posture: "fixture_destination_reference_not_delivery_decision",
  },
  posture: "fixture_destination_reference_only",
} as const;

const specialistTarget = {
  kind: "agent",
  agentRef: stageA7SpecialistAgentRef,
  descriptor: stageA7SpecialistDescriptor,
  posture: "a7_descriptor_context_only_not_admission_grant_or_authority",
} as const;

const specialistRelease = {
  kind: "cross_scope",
  releaseProjection: stageA8EstablishedReleasePersonalToProject,
  posture: "a5_projection_context_only_not_release_operation",
} as const;

export const stageA8SpecialistCandidate = {
  ...routeBase,
  routeCandidateRef: asRouteCandidateRef("route-candidate:fixture:stage-a8:specialist"),
  destination: specialistDestination,
  target: specialistTarget,
  releaseContext: specialistRelease,
  provenance: {
    sourceProjection: stageA8SourceProjection,
    targetDescriptorProjection: stageA7SpecialistDescriptor.projection,
    posture: "a4_projection_chain_fixture_only_not_trusted_route_authority",
  },
  assessment: candidateAssessment,
  projection: freshEnvelope(
    stageA7PersonalScopeARef,
    asProjectionSubjectRef("route-candidate:fixture:stage-a8:specialist"),
    "fixture-a8-route-specialist-r1",
    "fixture-digest:a8-route-specialist-r1",
    noEvidence,
  ),
} as const satisfies PondRouteCandidateProposal;

export const stageA8ServiceToolCandidate = {
  ...routeBase,
  routeCandidateRef: asRouteCandidateRef("route-candidate:fixture:stage-a8:service-tool"),
  destination: {
    scopeRef: stageA7ProjectScopeXRef,
    audience: {
      kind: "scope",
      scopeRef: stageA7ProjectScopeXRef,
      posture: "fixture_destination_reference_not_delivery_decision",
    },
    posture: "fixture_destination_reference_only",
  },
  target: {
    kind: "service_tool",
    serviceToolRef: stageA7ServiceToolRef,
    descriptor: stageA7ServiceToolDescriptor,
    posture: "a7_descriptor_context_only_not_admission_grant_or_authority",
  },
  releaseContext: specialistRelease,
  provenance: {
    sourceProjection: stageA8SourceProjection,
    targetDescriptorProjection: stageA7ServiceToolDescriptor.projection,
    posture: "a4_projection_chain_fixture_only_not_trusted_route_authority",
  },
  assessment: candidateAssessment,
  projection: freshEnvelope(
    stageA7PersonalScopeARef,
    asProjectionSubjectRef("route-candidate:fixture:stage-a8:service-tool"),
    "fixture-a8-route-service-tool-r1",
    "fixture-digest:a8-route-service-tool-r1",
    noEvidence,
  ),
} as const satisfies PondRouteCandidateProposal;

export const stageA8NoReleaseRefusal = {
  ...routeBase,
  routeCandidateRef: asRouteCandidateRef("route-candidate:fixture:stage-a8:no-release"),
  destination: specialistDestination,
  target: specialistTarget,
  releaseContext: {
    kind: "cross_scope",
    releaseProjection: stageA8NotEstablishedReleasePersonalToProject,
    posture: "a5_projection_context_only_not_release_operation",
  },
  provenance: {
    sourceProjection: stageA8SourceProjection,
    targetDescriptorProjection: stageA7SpecialistDescriptor.projection,
    posture: "a4_projection_chain_fixture_only_not_trusted_route_authority",
  },
  assessment: {
    state: "refused",
    posture: "fail_closed_fixture_route_candidate_refusal",
    canonicalRefusalOutcome: "refused",
    refusalEvidence: [
      refusalEvidence(
        "cross_scope_release_not_established",
        "refused",
        stageA8NotEstablishedReleasePersonalToProject.projection,
      ),
    ],
  },
  projection: freshEnvelope(
    stageA7PersonalScopeARef,
    asProjectionSubjectRef("route-candidate:fixture:stage-a8:no-release"),
    "fixture-a8-route-no-release-r1",
    "fixture-digest:a8-route-no-release-r1",
    noEvidence,
  ),
} as const satisfies PondRouteCandidateProposal;

export const stageA8StaleDescriptorRefusal = {
  ...routeBase,
  routeCandidateRef: asRouteCandidateRef("route-candidate:fixture:stage-a8:stale-descriptor"),
  destination: specialistDestination,
  target: {
    kind: "agent",
    agentRef: stageA7SpecialistAgentRef,
    descriptor: stageA7StaleSpecialistDescriptor,
    posture: "a7_descriptor_context_only_not_admission_grant_or_authority",
  },
  releaseContext: specialistRelease,
  provenance: {
    sourceProjection: stageA8SourceProjection,
    targetDescriptorProjection: stageA7StaleSpecialistDescriptor.projection,
    posture: "a4_projection_chain_fixture_only_not_trusted_route_authority",
  },
  assessment: {
    state: "refused",
    posture: "fail_closed_fixture_route_candidate_refusal",
    canonicalRefusalOutcome: "insufficient_evidence",
    refusalEvidence: [
      refusalEvidence(
        "target_descriptor_not_current",
        "insufficient_evidence",
        stageA7StaleSpecialistDescriptor.projection,
      ),
    ],
  },
  projection: freshEnvelope(
    stageA7PersonalScopeARef,
    asProjectionSubjectRef("route-candidate:fixture:stage-a8:stale-descriptor"),
    "fixture-a8-route-stale-r1",
    "fixture-digest:a8-route-stale-r1",
    noEvidence,
  ),
} as const satisfies PondRouteCandidateProposal;

export const stageA8ConflictingDescriptorRefusal = {
  ...routeBase,
  routeCandidateRef: asRouteCandidateRef("route-candidate:fixture:stage-a8:conflicting-descriptor"),
  destination: {
    scopeRef: stageA7ProjectScopeXRef,
    audience: {
      kind: "exact_agent",
      agentRef: stageA7ProjectAgentRef,
      posture: "fixture_destination_reference_not_delivery_decision",
    },
    posture: "fixture_destination_reference_only",
  },
  target: {
    kind: "agent",
    agentRef: stageA7ProjectAgentRef,
    descriptor: stageA7ConflictingProjectDescriptor,
    posture: "a7_descriptor_context_only_not_admission_grant_or_authority",
  },
  releaseContext: specialistRelease,
  provenance: {
    sourceProjection: stageA8SourceProjection,
    targetDescriptorProjection: stageA7ConflictingProjectDescriptor.projection,
    posture: "a4_projection_chain_fixture_only_not_trusted_route_authority",
  },
  assessment: {
    state: "refused",
    posture: "fail_closed_fixture_route_candidate_refusal",
    canonicalRefusalOutcome: "insufficient_evidence",
    refusalEvidence: [
      refusalEvidence(
        "target_descriptor_conflicting",
        "insufficient_evidence",
        stageA7ConflictingProjectDescriptor.projection,
      ),
    ],
  },
  projection: freshEnvelope(
    stageA7PersonalScopeARef,
    asProjectionSubjectRef("route-candidate:fixture:stage-a8:conflicting-descriptor"),
    "fixture-a8-route-conflicting-r1",
    "fixture-digest:a8-route-conflicting-r1",
    noEvidence,
  ),
} as const satisfies PondRouteCandidateProposal;

export const stageA8RevokedAdmissionRefusal = {
  ...routeBase,
  routeCandidateRef: asRouteCandidateRef("route-candidate:fixture:stage-a8:revoked-admission"),
  destination: specialistDestination,
  target: {
    kind: "agent",
    agentRef: stageA7SpecialistAgentRef,
    descriptor: stageA7RevokedSpecialistDescriptor,
    posture: "a7_descriptor_context_only_not_admission_grant_or_authority",
  },
  releaseContext: specialistRelease,
  provenance: {
    sourceProjection: stageA8SourceProjection,
    targetDescriptorProjection: stageA7RevokedSpecialistDescriptor.projection,
    posture: "a4_projection_chain_fixture_only_not_trusted_route_authority",
  },
  assessment: {
    state: "refused",
    posture: "fail_closed_fixture_route_candidate_refusal",
    canonicalRefusalOutcome: "revoked",
    refusalEvidence: [
      refusalEvidence(
        "target_admission_revoked",
        "revoked",
        stageA7RevokedSpecialistDescriptor.admissionContext.projection,
      ),
    ],
  },
  projection: freshEnvelope(
    stageA7PersonalScopeARef,
    asProjectionSubjectRef("route-candidate:fixture:stage-a8:revoked-admission"),
    "fixture-a8-route-revoked-r1",
    "fixture-digest:a8-route-revoked-r1",
    noEvidence,
  ),
} as const satisfies PondRouteCandidateProposal;

export const stageA8RemoteExternalAdmissionRefusal = {
  ...routeBase,
  routeCandidateRef: asRouteCandidateRef("route-candidate:fixture:stage-a8:remote-not-admitted"),
  destination: {
    scopeRef: stageA7PublicScopeZRef,
    audience: {
      kind: "exact_agent",
      agentRef: stageA7RemoteExternalAgentRef,
      posture: "fixture_destination_reference_not_delivery_decision",
    },
    posture: "fixture_destination_reference_only",
  },
  target: {
    kind: "agent",
    agentRef: stageA7RemoteExternalAgentRef,
    descriptor: stageA7RemoteExternalDescriptor,
    posture: "a7_descriptor_context_only_not_admission_grant_or_authority",
  },
  releaseContext: {
    kind: "cross_scope",
    releaseProjection: stageA8EstablishedReleasePersonalToPublic,
    posture: "a5_projection_context_only_not_release_operation",
  },
  provenance: {
    sourceProjection: stageA8SourceProjection,
    targetDescriptorProjection: stageA7RemoteExternalDescriptor.projection,
    posture: "a4_projection_chain_fixture_only_not_trusted_route_authority",
  },
  assessment: {
    state: "refused",
    posture: "fail_closed_fixture_route_candidate_refusal",
    canonicalRefusalOutcome: "refused",
    refusalEvidence: [
      refusalEvidence(
        "target_admission_not_established",
        "refused",
        stageA7RemoteExternalDescriptor.admissionContext.projection,
      ),
    ],
  },
  projection: freshEnvelope(
    stageA7PersonalScopeARef,
    asProjectionSubjectRef("route-candidate:fixture:stage-a8:remote-not-admitted"),
    "fixture-a8-route-remote-r1",
    "fixture-digest:a8-route-remote-r1",
    noEvidence,
  ),
} as const satisfies PondRouteCandidateProposal;

export const stageA8CandidateMatrix = [
  stageA8SpecialistCandidate,
  stageA8ServiceToolCandidate,
] as const satisfies readonly PondRouteCandidateProposal[];

export const stageA8RefusalMatrix = [
  stageA8NoReleaseRefusal,
  stageA8StaleDescriptorRefusal,
  stageA8ConflictingDescriptorRefusal,
  stageA8RevokedAdmissionRefusal,
  stageA8RemoteExternalAdmissionRefusal,
] as const satisfies readonly PondRouteCandidateProposal[];

export const stageA8RouteCandidateMatrix = [
  ...stageA8CandidateMatrix,
  ...stageA8RefusalMatrix,
] as const satisfies readonly PondRouteCandidateProposal[];

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;
type Includes<T extends readonly unknown[], Candidate> =
  T extends readonly [infer Head, ...infer Rest]
    ? Equal<Head, Candidate> extends true ? true : Includes<Rest, Candidate>
    : false;

export type PondStageA8Invariant_MatrixHasSeven = Assert<
  Equal<typeof stageA8RouteCandidateMatrix["length"], 7>
>;
export type PondStageA8Invariant_CandidateMatrixHasTwo = Assert<
  Equal<typeof stageA8CandidateMatrix["length"], 2>
>;
export type PondStageA8Invariant_RefusalMatrixHasFive = Assert<
  Equal<typeof stageA8RefusalMatrix["length"], 5>
>;
export type PondStageA8Invariant_AllAuthorityNone = Assert<
  Equal<typeof stageA8RouteCandidateMatrix[number]["authority"], "none">
>;
export type PondStageA8Invariant_AllRoutesUnselected = Assert<
  Equal<
    typeof stageA8RouteCandidateMatrix[number]["routeSelectionPosture"],
    "candidate_not_selected"
  >
>;
export type PondStageA8Invariant_AllDeliveryDecisionsNotPerformed = Assert<
  Equal<
    typeof stageA8RouteCandidateMatrix[number]["deliveryDecisionPosture"],
    "not_performed"
  >
>;
export type PondStageA8Invariant_AllConsequenceAuthorizationNotEvaluated = Assert<
  Equal<
    typeof stageA8RouteCandidateMatrix[number]["consequenceAuthorizationPosture"],
    "not_evaluated"
  >
>;
export type PondStageA8Invariant_SpecialistCandidatePreservesSourceDestinationTarget = Assert<
  Equal<
    [
      typeof stageA8SpecialistCandidate["source"]["principalRef"],
      typeof stageA8SpecialistCandidate["source"]["scopeRef"],
      typeof stageA8SpecialistCandidate["destination"]["scopeRef"],
      typeof stageA8SpecialistCandidate["destination"]["audience"]["agentRef"],
      typeof stageA8SpecialistCandidate["target"]["agentRef"],
    ],
    [
      typeof stageA8PrincipalARef,
      typeof stageA7PersonalScopeARef,
      typeof stageA7ProjectScopeXRef,
      typeof stageA7SpecialistAgentRef,
      typeof stageA7SpecialistAgentRef,
    ]
  >
>;
export type PondStageA8Invariant_SpecialistCandidateIsOnlyCandidate = Assert<
  Equal<
    [
      typeof stageA8SpecialistCandidate["assessment"]["state"],
      typeof stageA8SpecialistCandidate["assessment"]["canonicalRefusalOutcome"],
      typeof stageA8SpecialistCandidate["assessment"]["refusalEvidence"]["length"],
      typeof stageA8SpecialistCandidate["deliveryEligibilityPosture"],
    ],
    ["candidate", null, 0, "not_evaluated"]
  >
>;

export type PondStageA8Invariant_ServiceToolCandidateDoesNotBecomeAgent = Assert<
  Equal<
    [
      typeof stageA8ServiceToolCandidate["target"]["kind"],
      typeof stageA8ServiceToolCandidate["target"]["descriptor"]["subjectKind"],
      typeof stageA8ServiceToolCandidate["target"]["descriptor"]["admissionContext"],
      typeof stageA8ServiceToolCandidate["destination"]["audience"]["kind"],
      typeof stageA8ServiceToolCandidate["authority"],
    ],
    ["service_tool", "service_tool", null, "scope", "none"]
  >
>;
export type PondStageA8Invariant_NoReleaseRefuses = Assert<
  Equal<
    [
      typeof stageA8NoReleaseRefusal["releaseContext"]["releaseProjection"]["state"],
      typeof stageA8NoReleaseRefusal["assessment"]["state"],
      typeof stageA8NoReleaseRefusal["assessment"]["canonicalRefusalOutcome"],
      typeof stageA8NoReleaseRefusal["assessment"]["refusalEvidence"][0]["condition"],
    ],
    ["not_established", "refused", "refused", "cross_scope_release_not_established"]
  >
>;
export type PondStageA8Invariant_StaleDescriptorRefusesWithInsufficientEvidence = Assert<
  Equal<
    [
      typeof stageA8StaleDescriptorRefusal["target"]["descriptor"]["projection"]["observation"]["state"],
      typeof stageA8StaleDescriptorRefusal["target"]["descriptor"]["projection"]["canonicalOutcome"],
      typeof stageA8StaleDescriptorRefusal["assessment"]["canonicalRefusalOutcome"],
      typeof stageA8StaleDescriptorRefusal["projection"]["observation"]["state"],
    ],
    ["stale", "insufficient_evidence", "insufficient_evidence", "fresh"]
  >
>;
export type PondStageA8Invariant_ConflictingDescriptorChoosesNoWinner = Assert<
  Equal<
    [
      typeof stageA8ConflictingDescriptorRefusal["target"]["descriptor"]["projection"]["observation"]["state"],
      typeof stageA8ConflictingDescriptorRefusal["target"]["descriptor"]["projection"]["observation"]["reconciliationPosture"],
      typeof stageA8ConflictingDescriptorRefusal["assessment"]["canonicalRefusalOutcome"],
    ],
    ["conflicting", "canonical_source_required_no_winner_selected", "insufficient_evidence"]
  >
>;


export type PondStageA8Invariant_RemoteExternalStillDeniesLocalDirectAuthority = Assert<
  Includes<
    typeof stageA8RemoteExternalAdmissionRefusal["target"]["descriptor"]["explicitDenials"],
    "no_local_direct_authority"
  >
>;
export type PondStageA8Invariant_SpecialistProvenanceBindsTargetDescriptorProjection = Assert<
  Equal<
    typeof stageA8SpecialistCandidate["provenance"]["targetDescriptorProjection"]["subject"]["subjectRef"],
    typeof stageA8SpecialistCandidate["target"]["descriptor"]["projection"]["subject"]["subjectRef"]
  >
>;
