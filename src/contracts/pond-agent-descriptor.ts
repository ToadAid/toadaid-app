// Stage A7 versioned agent-descriptor projection contract.
//
// This is fixture-only presentation vocabulary. Descriptor != admission
// != Grant != current authority.

import type { PondAgentRef } from "./pond-front-agent.js";
import type { PondProjectionEnvelope, PondScopeRef } from "./pond-projection-envelope.js";
import type { PondAgentAdmissionProjection } from "./pond-relationship-projections.js";

declare const serviceToolRefBrand: unique symbol;

export type PondServiceToolRef = string & {
  readonly [serviceToolRefBrand]: "PondServiceToolRef";
};

export type PondAgentProfile =
  | "personal_agent"
  | "community_agent"
  | "project_agent"
  | "specialist_agent"
  | "remote_external_agent";

export type PondDescriptorProfile = PondAgentProfile | "service_tool";
export type PondDescriptorVisibilityPosture = "fixture_visible" | "fixture_hidden";
export type PondDescriptorReachabilityState =
  | "not_established"
  | "fixture_advertised"
  | "fixture_unreachable"
  | "unknown";

export interface PondDescriptorReachabilityProjection {
  readonly state: PondDescriptorReachabilityState;
  readonly posture: "fixture_declaration_not_transport_proof";
  readonly endpointPosture: "not_included";
  readonly authority: "none";
}

export type PondDescriptorScopeRelationshipKind =
  | "personal_context"
  | "serves_shared_scope"
  | "serves_project_scope"
  | "bounded_specialist_scope"
  | "external_scope_not_established"
  | "service_exposure_scope";

export interface PondDescriptorScopeRelationship {
  readonly scopeRef: PondScopeRef;
  readonly relationship: PondDescriptorScopeRelationshipKind;
  readonly posture: "declared_relationship_not_membership_admission_or_release";
}

export interface PondDescriptorDeclaredCapability {
  readonly capabilityRef: string;
  readonly label: string;
  readonly declarationPosture: "declared_not_granted";
}

export type PondDescriptorExplicitDenial =
  | "no_execution_authority"
  | "no_approval_authority"
  | "no_grant_authority"
  | "no_member_personal_memory_inheritance"
  | "no_repository_mutation_authority"
  | "declared_capability_not_granted"
  | "no_local_direct_authority"
  | "not_an_autonomous_agent";

interface PondAgentDescriptorProjectionBase {
  readonly contractVersion: "pond-agent-descriptor-a7";
  readonly descriptorPosture: "fixture_non_authoritative_versioned_descriptor";
  readonly declaredDomain: string;
  readonly scopeRelationships: readonly PondDescriptorScopeRelationship[];
  readonly visibilityPosture: PondDescriptorVisibilityPosture;
  readonly declaredCapabilities: readonly PondDescriptorDeclaredCapability[];
  readonly explicitDenials: readonly PondDescriptorExplicitDenial[];
  readonly reachability: PondDescriptorReachabilityProjection;
  readonly admissionDecisionPosture: "not_performed";
  readonly currentAuthorityPosture: "not_evaluated_descriptor_cannot_authorize";
  readonly versioningPosture: "a4_subject_revision_digest_is_descriptor_version";
  readonly authority: "none";
  readonly projection: PondProjectionEnvelope;
}

export interface PondAgentProfileDescriptorProjection
  extends PondAgentDescriptorProjectionBase {
  readonly subjectKind: "agent";
  readonly profile: PondAgentProfile;
  readonly agentRef: PondAgentRef;
  readonly admissionContext: PondAgentAdmissionProjection | null;
  readonly admissionContextPosture: "a5_projection_context_only_not_admission_decision";
}

export interface PondServiceToolProfileDescriptorProjection
  extends PondAgentDescriptorProjectionBase {
  readonly subjectKind: "service_tool";
  readonly profile: "service_tool";
  readonly serviceToolRef: PondServiceToolRef;
  readonly autonomyPosture: "not_asserted_as_autonomous_agent";
  readonly admissionContext: null;
  readonly admissionContextPosture: "not_applicable_service_tool_is_not_agent_admission";
}

export type PondAgentDescriptorProjection =
  | PondAgentProfileDescriptorProjection
  | PondServiceToolProfileDescriptorProjection;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;
type KeysOfUnion<T> = T extends unknown ? keyof T : never;
type HasAnyKey<T, K extends PropertyKey> =
  Extract<KeysOfUnion<T>, K> extends never ? false : true;

export type PondStageA7Invariant_ProfilesExact = Assert<
  Equal<
    PondDescriptorProfile,
    | "personal_agent"
    | "community_agent"
    | "project_agent"
    | "specialist_agent"
    | "remote_external_agent"
    | "service_tool"
  >
>;
export type PondStageA7Invariant_AuthorityNone = Assert<
  Equal<PondAgentDescriptorProjection["authority"], "none">
>;
export type PondStageA7Invariant_ComposesA4Envelope = Assert<
  Equal<PondAgentDescriptorProjection["projection"], PondProjectionEnvelope>
>;
export type PondStageA7Invariant_CurrentAuthorityNotEvaluated = Assert<
  Equal<
    PondAgentDescriptorProjection["currentAuthorityPosture"],
    "not_evaluated_descriptor_cannot_authorize"
  >
>;
export type PondStageA7Invariant_AdmissionDecisionNotPerformed = Assert<
  Equal<PondAgentDescriptorProjection["admissionDecisionPosture"], "not_performed">
>;
export type PondStageA7Invariant_VersioningOwnedByA4Subject = Assert<
  Equal<
    PondAgentDescriptorProjection["versioningPosture"],
    "a4_subject_revision_digest_is_descriptor_version"
  >
>;
export type PondStageA7Invariant_DeclaredCapabilityNotGranted = Assert<
  Equal<PondDescriptorDeclaredCapability["declarationPosture"], "declared_not_granted">
>;
export type PondStageA7Invariant_ReachabilityAuthorityNone = Assert<
  Equal<PondDescriptorReachabilityProjection["authority"], "none">
>;
export type PondStageA7Invariant_ReachabilityNoEndpoint = Assert<
  Equal<PondDescriptorReachabilityProjection["endpointPosture"], "not_included">
>;
export type PondStageA7Invariant_ServiceToolHasNoAgentRef = Assert<
  Equal<HasAnyKey<PondServiceToolProfileDescriptorProjection, "agentRef">, false>
>;
export type PondStageA7Invariant_AgentProfileHasNoServiceToolRef = Assert<
  Equal<HasAnyKey<PondAgentProfileDescriptorProjection, "serviceToolRef">, false>
>;
export type PondStageA7Invariant_ServiceToolAdmissionNull = Assert<
  Equal<PondServiceToolProfileDescriptorProjection["admissionContext"], null>
>;

type ForbiddenDescriptorKeys =
  | "execute" | "canExecute" | "mayExecute"
  | "approve" | "canApprove" | "mayApprove"
  | "mutate" | "canMutate" | "mayMutate"
  | "authorize" | "authorized" | "isAuthorized"
  | "effectiveAuthority" | "grant" | "grantRef"
  | "route" | "deliver" | "invoke"
  | "wallet" | "signer" | "secret" | "credential";

export type PondStageA7Invariant_NoEffectGrantOrAuthorityFields = Assert<
  Equal<HasAnyKey<PondAgentDescriptorProjection, ForbiddenDescriptorKeys>, false>
>;
