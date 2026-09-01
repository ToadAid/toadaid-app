// Stage 0B-P2 host-neutral Pond front-agent contract.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture. These types
// are UI/runtime projections only and MUST NOT be treated as authority records.

declare const principalRefBrand: unique symbol;
declare const scopeRefBrand: unique symbol;
declare const agentRefBrand: unique symbol;
declare const pluginRefBrand: unique symbol;

export type PondPrincipalRef = string & { readonly [principalRefBrand]: "PondPrincipalRef" };
export type PondScopeRef = string & { readonly [scopeRefBrand]: "PondScopeRef" };
export type PondAgentRef = string & { readonly [agentRefBrand]: "PondAgentRef" };
export type PondPluginRef = string & { readonly [pluginRefBrand]: "PondPluginRef" };

export type PondScopeKind = "personal" | "shared" | "project" | "public";
export type PondCapabilityEffectClass = "read" | "proposal";

export interface PondNonAuthoritativeRelationshipClaimsProjection {
  readonly membership: "not_established";
  readonly agentAdmission: "not_established";
  readonly crossScopeRelease: "not_established";
  readonly delegatedAuthority: "not_established";
}

export interface PondScopeContextProjection {
  readonly principalRef: PondPrincipalRef;
  readonly scopeRef: PondScopeRef;
  readonly scopeKind: PondScopeKind;
  readonly source: "fixture";
  readonly activeScopePosture: "single_scope_fixture_projection";
  readonly authority: "none";
  readonly nonAuthoritativeRelationshipClaims: PondNonAuthoritativeRelationshipClaimsProjection;
}

export interface PondDisabledAuthorityProjection {
  readonly posture: "disabled";
  readonly mayApprove: false;
  readonly mayExecute: false;
  readonly mayMutate: false;
  readonly reason: "stage0b_fixture_only";
}

export interface PondCapabilityProjection {
  readonly capabilityRef: string;
  readonly label: string;
  readonly effectClass: PondCapabilityEffectClass;
}

export interface PondPluginProjection {
  readonly pluginRef: PondPluginRef;
  readonly agentRef: PondAgentRef;
  readonly label: string;
  readonly visibleInScopeRefs: readonly PondScopeRef[];
  readonly capabilities: readonly PondCapabilityProjection[];
  readonly authority: PondDisabledAuthorityProjection;
}

export interface PondStage0BGates {
  readonly liveTools: false;
  readonly network: false;
  readonly persistence: false;
  readonly approvalRecording: false;
  readonly execution: false;
}

export interface PondFrontAgentState {
  readonly contractVersion: "stage0b-p2";
  readonly kind: "pond-front-agent";
  readonly role: "coordinate-explain-propose";
  readonly scopeContext: PondScopeContextProjection;
  readonly plugins: readonly PondPluginProjection[];
  readonly selectedPluginRef: PondPluginRef | null;
  readonly gates: PondStage0BGates;
}

// Compile-time invariants for this cut. Scope selection establishes context
// only, and every effect gate remains permanently false at Stage 0B-P2.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasKey<T, K extends PropertyKey> = K extends keyof T ? true : false;

export type PondStage0BP2Invariant_ScopeKindsExact = Assert<
  Equal<PondScopeKind, "personal" | "shared" | "project" | "public">
>;
export type PondStage0BP2Invariant_ScopeAuthorityNone = Assert<
  Equal<PondScopeContextProjection["authority"], "none">
>;
export type PondStage0BP2Invariant_MembershipNotEstablished = Assert<
  Equal<PondNonAuthoritativeRelationshipClaimsProjection["membership"], "not_established">
>;
export type PondStage0BP2Invariant_AgentAdmissionNotEstablished = Assert<
  Equal<PondNonAuthoritativeRelationshipClaimsProjection["agentAdmission"], "not_established">
>;
export type PondStage0BP2Invariant_CrossScopeReleaseNotEstablished = Assert<
  Equal<PondNonAuthoritativeRelationshipClaimsProjection["crossScopeRelease"], "not_established">
>;
export type PondStage0BP2Invariant_DelegatedAuthorityNotEstablished = Assert<
  Equal<PondNonAuthoritativeRelationshipClaimsProjection["delegatedAuthority"], "not_established">
>;
export type PondStage0BP2Invariant_NoPluginExecuteField = Assert<
  Equal<HasKey<PondPluginProjection, "execute">, false>
>;
export type PondStage0BP2Invariant_NoFrontAgentExecuteField = Assert<
  Equal<HasKey<PondFrontAgentState, "execute">, false>
>;
export type PondStage0BP2Invariant_NoPluralScopeContexts = Assert<
  Equal<HasKey<PondFrontAgentState, "scopeContexts">, false>
>;
export type PondStage0BP2Invariant_ExecutionGateFalse = Assert<
  Equal<PondStage0BGates["execution"], false>
>;
