// Stage A5 fixture relationship projections.
//
// These types compose the A4 observation envelope for presentation only. They
// do not create, store, evaluate, mutate, grant, revoke, or enforce canonical
// relationships or authority.

import type {
  PondProjectionEnvelope,
  PondProjectionObservationState,
  PondScopeRef,
} from "./pond-projection-envelope.js";
import type { PondAgentRef, PondPrincipalRef } from "./pond-front-agent.js";

declare const grantRefBrand: unique symbol;

// Pond-local identity for a projected Grant only. This does not define the
// canonical GrantId format.
export type PondGrantRef = string & { readonly [grantRefBrand]: "PondGrantRef" };

export type PondRelationshipProjectionKind =
  | "principal_agent_identity_binding"
  | "scope_membership"
  | "agent_admission"
  | "cross_scope_release"
  | "grant_applicability_lifecycle";

export type PondPrincipalAgentBindingState =
  | "not_established"
  | "observed_fixture_binding"
  | "revoked"
  | "unknown";

export type PondScopeMembershipState =
  | "not_established"
  | "active"
  | "revoked"
  | "unknown";

export type PondAgentAdmissionState =
  | "not_established"
  | "active"
  | "revoked"
  | "unknown";

export type PondCrossScopeReleaseState =
  | "not_established"
  | "established"
  | "unknown";

export type PondGrantLifecycleState =
  | "not_established"
  | "applicable"
  | "not_applicable"
  | "expired"
  | "revoked"
  | "unknown";

export type PondGrantGrantee =
  | {
      readonly kind: "principal";
      readonly principalRef: PondPrincipalRef;
    }
  | {
      readonly kind: "agent";
      readonly agentRef: PondAgentRef;
    };

interface PondRelationshipProjectionBase {
  readonly contractVersion: "pond-relationship-projection-a5";
  readonly authority: "none";
  readonly projectionPosture: "fixture_non_authoritative_relationship_projection";
  readonly projection: PondProjectionEnvelope;
}

export interface PondPrincipalAgentIdentityBindingProjection
  extends PondRelationshipProjectionBase {
  readonly kind: "principal_agent_identity_binding";
  readonly principalRef: PondPrincipalRef;
  readonly agentRef: PondAgentRef;
  readonly state: PondPrincipalAgentBindingState;
}

export interface PondScopeMembershipProjection
  extends PondRelationshipProjectionBase {
  readonly kind: "scope_membership";
  readonly principalRef: PondPrincipalRef;
  readonly scopeRef: PondScopeRef;
  readonly state: PondScopeMembershipState;
}

export interface PondAgentAdmissionProjection
  extends PondRelationshipProjectionBase {
  readonly kind: "agent_admission";
  readonly agentRef: PondAgentRef;
  readonly governingScopeRef: PondScopeRef;
  readonly state: PondAgentAdmissionState;
}

export interface PondCrossScopeReleaseProjection
  extends PondRelationshipProjectionBase {
  readonly kind: "cross_scope_release";
  readonly sourceScopeRef: PondScopeRef;
  readonly destinationScopeRef: PondScopeRef;
  readonly state: PondCrossScopeReleaseState;
  readonly releaseOperation: "not_performed";
}

export interface PondGrantApplicabilityLifecycleProjection
  extends PondRelationshipProjectionBase {
  readonly kind: "grant_applicability_lifecycle";
  readonly grantRef: PondGrantRef;
  readonly scopeRef: PondScopeRef;
  readonly grantee: PondGrantGrantee;
  readonly state: PondGrantLifecycleState;
  readonly effectiveAuthorityEvaluation: "not_performed";
}

export type PondRelationshipProjection =
  | PondPrincipalAgentIdentityBindingProjection
  | PondScopeMembershipProjection
  | PondAgentAdmissionProjection
  | PondCrossScopeReleaseProjection
  | PondGrantApplicabilityLifecycleProjection;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type KeysOfUnion<T> = T extends unknown ? keyof T : never;
type HasAnyKey<T, K extends PropertyKey> = Extract<KeysOfUnion<T>, K> extends never
  ? false
  : true;

export type PondStageA5Invariant_RelationshipKindsExact = Assert<
  Equal<
    PondRelationshipProjection["kind"],
    | "principal_agent_identity_binding"
    | "scope_membership"
    | "agent_admission"
    | "cross_scope_release"
    | "grant_applicability_lifecycle"
  >
>;
export type PondStageA5Invariant_PrincipalAgentBindingStatesExact = Assert<
  Equal<
    PondPrincipalAgentBindingState,
    "not_established" | "observed_fixture_binding" | "revoked" | "unknown"
  >
>;
export type PondStageA5Invariant_MembershipStatesExact = Assert<
  Equal<PondScopeMembershipState, "not_established" | "active" | "revoked" | "unknown">
>;
export type PondStageA5Invariant_AdmissionStatesExact = Assert<
  Equal<PondAgentAdmissionState, "not_established" | "active" | "revoked" | "unknown">
>;
export type PondStageA5Invariant_ReleaseStatesExact = Assert<
  Equal<PondCrossScopeReleaseState, "not_established" | "established" | "unknown">
>;
export type PondStageA5Invariant_GrantStatesExact = Assert<
  Equal<
    PondGrantLifecycleState,
    | "not_established"
    | "applicable"
    | "not_applicable"
    | "expired"
    | "revoked"
    | "unknown"
  >
>;
export type PondStageA5Invariant_AuthorityNone = Assert<
  Equal<PondRelationshipProjection["authority"], "none">
>;
export type PondStageA5Invariant_ComposesA4Envelope = Assert<
  Equal<PondRelationshipProjection["projection"], PondProjectionEnvelope>
>;
export type PondStageA5Invariant_MembershipCannotExpire = Assert<
  Equal<Extract<PondScopeMembershipState, "expired">, never>
>;
export type PondStageA5Invariant_ReleaseCannotBeRevoked = Assert<
  Equal<Extract<PondCrossScopeReleaseState, "revoked">, never>
>;
export type PondStageA5Invariant_GrantGranteeKindsExact = Assert<
  Equal<PondGrantGrantee["kind"], "principal" | "agent">
>;
export type PondStageA5Invariant_GrantGranteeNotString = Assert<
  Equal<PondGrantGrantee extends string ? true : false, false>
>;
export type PondStageA5Invariant_GrantRefNotPrincipalRef = Assert<
  Equal<Equal<PondGrantRef, PondPrincipalRef>, false>
>;
export type PondStageA5Invariant_GrantRefNotAgentRef = Assert<
  Equal<Equal<PondGrantRef, PondAgentRef>, false>
>;
export type PondStageA5Invariant_GrantRefNotScopeRef = Assert<
  Equal<Equal<PondGrantRef, PondScopeRef>, false>
>;
export type PondStageA5Invariant_NoRelationshipOwnedObservationField = Assert<
  Equal<HasAnyKey<PondRelationshipProjection, "observation" | "freshness">, false>
>;
export type PondStageA5Invariant_A4ObservationStatesUnchanged = Assert<
  Equal<
    PondProjectionObservationState,
    "fresh" | "stale" | "missing" | "unknown" | "conflicting"
  >
>;

type ForbiddenRelationshipProjectionKeys =
  | "execute"
  | "canExecute"
  | "mayExecute"
  | "approve"
  | "canApprove"
  | "mayApprove"
  | "canMutate"
  | "mayMutate"
  | "authorize"
  | "authorized"
  | "isAuthorized"
  | "effectiveAuthority";

export type PondStageA5Invariant_NoEffectOrAuthorityFields = Assert<
  Equal<
    HasAnyKey<PondRelationshipProjection, ForbiddenRelationshipProjectionKeys>,
    false
  >
>;
