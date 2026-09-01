// Stage A6 multi-principal + scope-isolation proof contract.
//
// This is an inert fixture/type proof vocabulary only. It defines no runtime
// storage, retrieval, cache, index, event stream, transport, authorization,
// Release operation, or authority. Scopes do not merge, and membership never
// exposes personal state under this law.

import type { PondPrincipalRef, PondScopeKind } from "./pond-front-agent.js";
import type { PondScopeRef } from "./pond-projection-envelope.js";
import type { PondScopeMembershipProjection } from "./pond-relationship-projections.js";

declare const isolationRecordRefBrand: unique symbol;

// Pond-local identity for one inert fixture record used in the isolation
// proof. This is not a memory ID, database key standard, canonical content ID,
// Release record, receipt, or evidence identity, and it defines no canonical
// ID format.
export type PondIsolationRecordRef = string & {
  readonly [isolationRecordRefBrand]: "PondIsolationRecordRef";
};

// One identity-only, scope-owned fixture record. It carries ownership
// identity, never a content body.
export interface PondScopeOwnedIsolationRecordFixture {
  readonly recordRef: PondIsolationRecordRef;
  readonly ownerScopeRef: PondScopeRef;
  readonly ownerScopeKind: PondScopeKind;
  readonly provenancePosture: "fixture_scope_owned";
  readonly contentPosture: "identity_only_no_content_body";
  readonly authority: "none";
}

// One deterministic proof case. It says: given this inert fixture topology,
// this exact scope view contains only its scope-owned fixture records. It
// does NOT say the viewer is runtime-authorized to read the scope; A6
// performs no read-authorization evaluation.
export interface PondScopeIsolationProofViewFixture {
  readonly contractVersion: "pond-scope-isolation-proof-a6";
  readonly proofPosture: "deterministic_fixture_type_proof_only";
  readonly viewerPrincipalRef: PondPrincipalRef;
  readonly viewScopeRef: PondScopeRef;
  readonly viewScopeKind: PondScopeKind;
  // A5 projection context only. This is not authentication, a canonical
  // membership store, admission, Release, capability, or authority.
  readonly membershipContext: PondScopeMembershipProjection | null;
  readonly membershipContextPosture: "projection_context_only_not_authority";
  readonly includedRecordRefs: readonly PondIsolationRecordRef[];
  readonly excludedRecordRefs: readonly PondIsolationRecordRef[];
  readonly selectionPosture: "exact_scope_owned_records_only";
  readonly ambientUnion: "forbidden";
  readonly crossScopeReleaseApplied: false;
  readonly authority: "none";
}

// The inert law the corpus demonstrates. Fixture values only; no evaluator.
export interface PondScopeIsolationProofLaw {
  readonly law:
    | "scope_views_contain_only_scope_owned_records"
    | "membership_does_not_union_personal_state";
  readonly membershipUnionsPersonalState: false;
  readonly membershipExposesPersonalMemory: false;
  readonly renderingOrRetrievalIsRelease: false;
  readonly proofConfersAuthority: false;
  readonly reproofRequiredForLaterScopeBearingLayers: true;
}

export interface PondScopeIsolationProofCorpus {
  readonly contractVersion: "pond-scope-isolation-proof-a6";
  readonly proofPosture: "deterministic_fixture_type_proof_only";
  readonly records: readonly PondScopeOwnedIsolationRecordFixture[];
  readonly views: readonly PondScopeIsolationProofViewFixture[];
  readonly proofLaw: PondScopeIsolationProofLaw;
}

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends PropertyKey> = Extract<keyof T, K> extends never
  ? false
  : true;

export type PondStageA6Invariant_ScopeKindsExact = Assert<
  Equal<PondScopeKind, "personal" | "shared" | "project" | "public">
>;
export type PondStageA6Invariant_RecordRefIsString = Assert<
  Equal<PondIsolationRecordRef extends string ? true : false, true>
>;
export type PondStageA6Invariant_RecordRefNotPrincipalRef = Assert<
  Equal<Equal<PondIsolationRecordRef, PondPrincipalRef>, false>
>;
export type PondStageA6Invariant_RecordRefNotScopeRef = Assert<
  Equal<Equal<PondIsolationRecordRef, PondScopeRef>, false>
>;
export type PondStageA6Invariant_RecordAuthorityNone = Assert<
  Equal<PondScopeOwnedIsolationRecordFixture["authority"], "none">
>;
export type PondStageA6Invariant_RecordContentPostureIdentityOnly = Assert<
  Equal<
    PondScopeOwnedIsolationRecordFixture["contentPosture"],
    "identity_only_no_content_body"
  >
>;
export type PondStageA6Invariant_ViewAuthorityNone = Assert<
  Equal<PondScopeIsolationProofViewFixture["authority"], "none">
>;
export type PondStageA6Invariant_ViewReleaseLiteralFalse = Assert<
  Equal<PondScopeIsolationProofViewFixture["crossScopeReleaseApplied"], false>
>;
export type PondStageA6Invariant_ViewAmbientUnionForbidden = Assert<
  Equal<PondScopeIsolationProofViewFixture["ambientUnion"], "forbidden">
>;
export type PondStageA6Invariant_MembershipContextIsA5OrNull = Assert<
  Equal<
    PondScopeIsolationProofViewFixture["membershipContext"],
    PondScopeMembershipProjection | null
  >
>;
export type PondStageA6Invariant_ProofPostureFixtureOnly = Assert<
  Equal<
    PondScopeIsolationProofViewFixture["proofPosture"],
    "deterministic_fixture_type_proof_only"
  >
>;

type ForbiddenProofViewKeys =
  | "execute"
  | "canExecute"
  | "mayExecute"
  | "approve"
  | "canApprove"
  | "mayApprove"
  | "mutate"
  | "canMutate"
  | "mayMutate"
  | "authorize"
  | "authorized"
  | "isAuthorized"
  | "release"
  | "releaseOperation"
  | "persistence"
  | "cache"
  | "index";

export type PondStageA6Invariant_NoEffectOrAuthorityOrStorageFields = Assert<
  Equal<
    HasAnyKey<PondScopeIsolationProofViewFixture, ForbiddenProofViewKeys>,
    false
  >
>;