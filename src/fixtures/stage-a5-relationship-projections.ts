import type {
  PondAgentAdmissionProjection,
  PondCrossScopeReleaseProjection,
  PondGrantApplicabilityLifecycleProjection,
  PondGrantRef,
  PondPrincipalAgentIdentityBindingProjection,
  PondRelationshipProjection,
  PondScopeMembershipProjection,
} from "../contracts/pond-relationship-projections.js";
import type {
  PondProjectionEnvelope,
  PondProjectionSourceRef,
  PondProjectionSubjectRef,
  PondScopeRef,
} from "../contracts/pond-projection-envelope.js";
import type { PondAgentRef, PondPrincipalRef } from "../contracts/pond-front-agent.js";

const principalRef = "principal:fixture:operator-a" as PondPrincipalRef;
const projectAgentRef = "agent:fixture:project-alpha" as PondAgentRef;
const projectScopeRef = "scope:fixture:project-alpha" as PondScopeRef;
const publicScopeRef = "scope:fixture:public-alpha" as PondScopeRef;
const grantRef = "grant:fixture:project-alpha:proposal" as PondGrantRef;
const projectionSourceRef =
  "projection-source:fixture:project-alpha:relationships" as PondProjectionSourceRef;

const subjectRef = (value: string): PondProjectionSubjectRef =>
  value as PondProjectionSubjectRef;

const freshRelationshipEnvelope = (
  projectedSubjectRef: PondProjectionSubjectRef,
  subjectRevision: string,
): PondProjectionEnvelope => ({
  contractVersion: "pond-projection-envelope-a4",
  authority: "none",
  sourceClass: "fixture",
  sourceRef: projectionSourceRef,
  projectionMechanism: "fixture",
  trustPosture: "non_authoritative_fixture",
  sourceScopeRef: projectScopeRef,
  audiencePosture: "not_established",
  disclosurePosture: "fixture_only_no_release_established",
  subject: {
    subjectRef: projectedSubjectRef,
    subjectRevision,
    subjectDigest: `fixture-digest:${subjectRevision}`,
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
  evidenceReferences: [],
  redactionPosture: "none",
  canonicalOutcome: null,
});

const staleRelationshipEnvelope = (
  projectedSubjectRef: PondProjectionSubjectRef,
  subjectRevision: string,
): PondProjectionEnvelope => ({
  contractVersion: "pond-projection-envelope-a4",
  authority: "none",
  sourceClass: "fixture",
  sourceRef: projectionSourceRef,
  projectionMechanism: "fixture",
  trustPosture: "non_authoritative_fixture",
  sourceScopeRef: projectScopeRef,
  audiencePosture: "not_established",
  disclosurePosture: "fixture_only_no_release_established",
  subject: {
    subjectRef: projectedSubjectRef,
    subjectRevision,
    subjectDigest: `fixture-digest:${subjectRevision}`,
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
  evidenceReferences: [],
  redactionPosture: "none",
  canonicalOutcome: "insufficient_evidence",
});

const conflictingRelationshipEnvelope = (
  projectedSubjectRef: PondProjectionSubjectRef,
): PondProjectionEnvelope => ({
  contractVersion: "pond-projection-envelope-a4",
  authority: "none",
  sourceClass: "fixture",
  sourceRef: projectionSourceRef,
  projectionMechanism: "fixture",
  trustPosture: "non_authoritative_fixture",
  sourceScopeRef: projectScopeRef,
  audiencePosture: "not_established",
  disclosurePosture: "fixture_only_no_release_established",
  subject: {
    subjectRef: projectedSubjectRef,
    subjectRevision: "fixture-expected-r2",
    subjectDigest: "fixture-digest:fixture-expected-r2",
    digestPosture: "fixture_identity_value_not_runtime_proof",
    bindingComparison: "not_performed_fixture_only",
  },
  observation: {
    state: "conflicting",
    observations: [
      {
        observedAt: "2026-01-15T12:00:00.000Z",
        subjectRevision: "fixture-r1-active",
        subjectDigest: "fixture-digest:fixture-r1-active",
      },
      {
        observedAt: "2026-01-15T12:01:00.000Z",
        subjectRevision: "fixture-r2-revoked",
        subjectDigest: "fixture-digest:fixture-r2-revoked",
      },
    ],
    freshnessBasis: "fixture_conflict_requires_canonical_reconciliation",
    reconciliationPosture: "canonical_source_required_no_winner_selected",
  },
  applicability: "applicable",
  evidenceReferences: [],
  redactionPosture: "none",
  canonicalOutcome: "insufficient_evidence",
});

const relationshipBase = {
  contractVersion: "pond-relationship-projection-a5",
  authority: "none",
  projectionPosture: "fixture_non_authoritative_relationship_projection",
} as const;

export const stageA5PrincipalAgentBindingNotEstablishedFixture = {
  ...relationshipBase,
  kind: "principal_agent_identity_binding",
  principalRef,
  agentRef: projectAgentRef,
  state: "not_established",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:principal-agent:not-established"),
    "fixture-r1",
  ),
} satisfies PondPrincipalAgentIdentityBindingProjection;

export const stageA5MembershipNotEstablishedFixture = {
  ...relationshipBase,
  kind: "scope_membership",
  principalRef,
  scopeRef: projectScopeRef,
  state: "not_established",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:membership:not-established"),
    "fixture-r1",
  ),
} satisfies PondScopeMembershipProjection;

export const stageA5AdmissionNotEstablishedFixture = {
  ...relationshipBase,
  kind: "agent_admission",
  agentRef: projectAgentRef,
  governingScopeRef: projectScopeRef,
  state: "not_established",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:admission:not-established"),
    "fixture-r1",
  ),
} satisfies PondAgentAdmissionProjection;

export const stageA5ReleaseNotEstablishedFixture = {
  ...relationshipBase,
  kind: "cross_scope_release",
  sourceScopeRef: projectScopeRef,
  destinationScopeRef: publicScopeRef,
  state: "not_established",
  releaseOperation: "not_performed",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:release:not-established"),
    "fixture-r1",
  ),
} satisfies PondCrossScopeReleaseProjection;

export const stageA5GrantNotEstablishedFixture = {
  ...relationshipBase,
  kind: "grant_applicability_lifecycle",
  grantRef,
  scopeRef: projectScopeRef,
  grantee: { kind: "agent", agentRef: projectAgentRef },
  state: "not_established",
  effectiveAuthorityEvaluation: "not_performed",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:grant:not-established"),
    "fixture-r1",
  ),
} satisfies PondGrantApplicabilityLifecycleProjection;

export const stageA5FreshActiveMembershipFixture = {
  ...relationshipBase,
  kind: "scope_membership",
  principalRef,
  scopeRef: projectScopeRef,
  state: "active",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:membership:active"),
    "fixture-r3-active",
  ),
} satisfies PondScopeMembershipProjection;

export const stageA5FreshRevokedMembershipFixture = {
  ...relationshipBase,
  kind: "scope_membership",
  principalRef,
  scopeRef: projectScopeRef,
  state: "revoked",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:membership:revoked"),
    "fixture-r4-revoked",
  ),
} satisfies PondScopeMembershipProjection;

export const stageA5StaleHistoricallyActiveMembershipFixture = {
  ...relationshipBase,
  kind: "scope_membership",
  principalRef,
  scopeRef: projectScopeRef,
  state: "active",
  projection: staleRelationshipEnvelope(
    subjectRef("relationship:fixture:membership:historically-active"),
    "fixture-r2-active",
  ),
} satisfies PondScopeMembershipProjection;

export const stageA5ConflictingMembershipFixture = {
  ...relationshipBase,
  kind: "scope_membership",
  principalRef,
  scopeRef: projectScopeRef,
  state: "unknown",
  projection: conflictingRelationshipEnvelope(
    subjectRef("relationship:fixture:membership:conflicting"),
  ),
} satisfies PondScopeMembershipProjection;

export const stageA5FreshActiveAdmissionFixture = {
  ...relationshipBase,
  kind: "agent_admission",
  agentRef: projectAgentRef,
  governingScopeRef: projectScopeRef,
  state: "active",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:admission:active"),
    "fixture-r2-active",
  ),
} satisfies PondAgentAdmissionProjection;

export const stageA5FreshRevokedAdmissionFixture = {
  ...relationshipBase,
  kind: "agent_admission",
  agentRef: projectAgentRef,
  governingScopeRef: projectScopeRef,
  state: "revoked",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:admission:revoked"),
    "fixture-r3-revoked",
  ),
} satisfies PondAgentAdmissionProjection;

export const stageA5FreshObservedIdentityBindingFixture = {
  ...relationshipBase,
  kind: "principal_agent_identity_binding",
  principalRef,
  agentRef: projectAgentRef,
  state: "observed_fixture_binding",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:principal-agent:observed-binding"),
    "fixture-r2-observed",
  ),
} satisfies PondPrincipalAgentIdentityBindingProjection;

export const stageA5FreshEstablishedReleaseFixture = {
  ...relationshipBase,
  kind: "cross_scope_release",
  sourceScopeRef: projectScopeRef,
  destinationScopeRef: publicScopeRef,
  state: "established",
  releaseOperation: "not_performed",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:release:established"),
    "fixture-r2-established",
  ),
} satisfies PondCrossScopeReleaseProjection;

export const stageA5FreshApplicableGrantFixture = {
  ...relationshipBase,
  kind: "grant_applicability_lifecycle",
  grantRef,
  scopeRef: projectScopeRef,
  grantee: { kind: "agent", agentRef: projectAgentRef },
  state: "applicable",
  effectiveAuthorityEvaluation: "not_performed",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:grant:applicable"),
    "fixture-r2-applicable",
  ),
} satisfies PondGrantApplicabilityLifecycleProjection;

export const stageA5FreshExpiredGrantFixture = {
  ...relationshipBase,
  kind: "grant_applicability_lifecycle",
  grantRef,
  scopeRef: projectScopeRef,
  grantee: { kind: "principal", principalRef },
  state: "expired",
  effectiveAuthorityEvaluation: "not_performed",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:grant:expired"),
    "fixture-r3-expired",
  ),
} satisfies PondGrantApplicabilityLifecycleProjection;

export const stageA5FreshRevokedGrantFixture = {
  ...relationshipBase,
  kind: "grant_applicability_lifecycle",
  grantRef,
  scopeRef: projectScopeRef,
  grantee: { kind: "agent", agentRef: projectAgentRef },
  state: "revoked",
  effectiveAuthorityEvaluation: "not_performed",
  projection: freshRelationshipEnvelope(
    subjectRef("relationship:fixture:grant:revoked"),
    "fixture-r4-revoked",
  ),
} satisfies PondGrantApplicabilityLifecycleProjection;

export const stageA5RelationshipProjectionFixtureMatrix = [
  stageA5PrincipalAgentBindingNotEstablishedFixture,
  stageA5MembershipNotEstablishedFixture,
  stageA5AdmissionNotEstablishedFixture,
  stageA5ReleaseNotEstablishedFixture,
  stageA5GrantNotEstablishedFixture,
  stageA5FreshActiveMembershipFixture,
  stageA5FreshRevokedMembershipFixture,
  stageA5StaleHistoricallyActiveMembershipFixture,
  stageA5ConflictingMembershipFixture,
  stageA5FreshActiveAdmissionFixture,
  stageA5FreshRevokedAdmissionFixture,
  stageA5FreshObservedIdentityBindingFixture,
  stageA5FreshEstablishedReleaseFixture,
  stageA5FreshApplicableGrantFixture,
  stageA5FreshExpiredGrantFixture,
  stageA5FreshRevokedGrantFixture,
] as const satisfies readonly PondRelationshipProjection[];
