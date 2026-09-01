// Stage 0B-P1 host-neutral Pond front-agent contract.
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

export interface PondScopeContextProjection {
  readonly principalRef: PondPrincipalRef;
  readonly scopeRef: PondScopeRef;
  readonly scopeKind: PondScopeKind;
  readonly source: "fixture";
  readonly authority: "none";
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
  readonly contractVersion: "stage0b-p1";
  readonly kind: "pond-front-agent";
  readonly role: "coordinate-explain-propose";
  readonly scopeContext: PondScopeContextProjection;
  readonly plugins: readonly PondPluginProjection[];
  readonly selectedPluginRef: PondPluginRef | null;
  readonly gates: PondStage0BGates;
}

// Compile-time invariants for this cut. The front-facing Pond projection has no
// execution member, and every effect gate is permanently false at Stage 0B-P1.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasKey<T, K extends PropertyKey> = K extends keyof T ? true : false;

export type PondStage0BP1Invariant_NoPluginExecuteField = Assert<
  Equal<HasKey<PondPluginProjection, "execute">, false>
>;
export type PondStage0BP1Invariant_NoFrontAgentExecuteField = Assert<
  Equal<HasKey<PondFrontAgentState, "execute">, false>
>;
export type PondStage0BP1Invariant_AuthorityDisabled = Assert<
  Equal<PondDisabledAuthorityProjection["posture"], "disabled">
>;
export type PondStage0BP1Invariant_ExecutionGateFalse = Assert<
  Equal<PondStage0BGates["execution"], false>
>;
