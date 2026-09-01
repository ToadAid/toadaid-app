import type {
  PondIsolationRecordRef,
  PondScopeIsolationProofCorpus,
  PondScopeIsolationProofLaw,
  PondScopeIsolationProofViewFixture,
  PondScopeOwnedIsolationRecordFixture,
} from "../contracts/pond-scope-isolation-proof.js";
import type {
  PondProjectionEnvelope,
  PondProjectionSourceRef,
  PondProjectionSubjectRef,
  PondScopeRef,
} from "../contracts/pond-projection-envelope.js";
import type { PondPrincipalRef } from "../contracts/pond-front-agent.js";
import type { PondScopeMembershipProjection } from "../contracts/pond-relationship-projections.js";

// Literal-preserving fixture-local constructors. They return the exact
// literal type intersected with the Pond branded type so compile-time
// assertions can distinguish each fixture identity.

const asPrincipalRef = <T extends string>(value: T): T & PondPrincipalRef =>
  value as T & PondPrincipalRef;
const asScopeRef = <T extends string>(value: T): T & PondScopeRef =>
  value as T & PondScopeRef;
const asRecordRef = <T extends string>(value: T): T & PondIsolationRecordRef =>
  value as T & PondIsolationRecordRef;
const asSubjectRef = <T extends string>(value: T): T & PondProjectionSubjectRef =>
  value as T & PondProjectionSubjectRef;

// ------------------------------------------------------------
// Exactly two fixture principals.
// ------------------------------------------------------------

export const stageA6PrincipalARef =
  asPrincipalRef("principal:fixture:stage-a6:principal-a");
export const stageA6PrincipalBRef =
  asPrincipalRef("principal:fixture:stage-a6:principal-b");

// ------------------------------------------------------------
// Exactly five fixture scopes.
// ------------------------------------------------------------

export const stageA6PersonalScopeARef = asScopeRef("scope:fixture:stage-a6:personal-a");
export const stageA6PersonalScopeBRef = asScopeRef("scope:fixture:stage-a6:personal-b");
export const stageA6SharedScopeYRef = asScopeRef("scope:fixture:stage-a6:shared-y");
export const stageA6ProjectScopeXRef = asScopeRef("scope:fixture:stage-a6:project-x");
export const stageA6PublicScopeZRef = asScopeRef("scope:fixture:stage-a6:public-z");

// ------------------------------------------------------------
// Exactly one identity-only scope-owned record per scope. No record body,
// no fake secrets, credentials, profile details, conversation text, or
// memory text.
// ------------------------------------------------------------

export const stageA6PersonalScopeARecord = {
  recordRef: asRecordRef("record:fixture:stage-a6:personal-a"),
  ownerScopeRef: stageA6PersonalScopeARef,
  ownerScopeKind: "personal",
  provenancePosture: "fixture_scope_owned",
  contentPosture: "identity_only_no_content_body",
  authority: "none",
} as const satisfies PondScopeOwnedIsolationRecordFixture;

export const stageA6PersonalScopeBRecord = {
  recordRef: asRecordRef("record:fixture:stage-a6:personal-b"),
  ownerScopeRef: stageA6PersonalScopeBRef,
  ownerScopeKind: "personal",
  provenancePosture: "fixture_scope_owned",
  contentPosture: "identity_only_no_content_body",
  authority: "none",
} as const satisfies PondScopeOwnedIsolationRecordFixture;

export const stageA6SharedScopeYRecord = {
  recordRef: asRecordRef("record:fixture:stage-a6:shared-y"),
  ownerScopeRef: stageA6SharedScopeYRef,
  ownerScopeKind: "shared",
  provenancePosture: "fixture_scope_owned",
  contentPosture: "identity_only_no_content_body",
  authority: "none",
} as const satisfies PondScopeOwnedIsolationRecordFixture;

export const stageA6ProjectScopeXRecord = {
  recordRef: asRecordRef("record:fixture:stage-a6:project-x"),
  ownerScopeRef: stageA6ProjectScopeXRef,
  ownerScopeKind: "project",
  provenancePosture: "fixture_scope_owned",
  contentPosture: "identity_only_no_content_body",
  authority: "none",
} as const satisfies PondScopeOwnedIsolationRecordFixture;

export const stageA6PublicScopeZRecord = {
  recordRef: asRecordRef("record:fixture:stage-a6:public-z"),
  ownerScopeRef: stageA6PublicScopeZRef,
  ownerScopeKind: "public",
  provenancePosture: "fixture_scope_owned",
  contentPosture: "identity_only_no_content_body",
  authority: "none",
} as const satisfies PondScopeOwnedIsolationRecordFixture;

// ------------------------------------------------------------
// Inert fresh A5 membership projections. These are relationship
// projections only: authority none, no Release, no admission, no Grant,
// no effective authority, and fresh only in the A4 fixture sense.
// No personal-scope membership projections and no public membership.
// ------------------------------------------------------------

const projectionSourceRef =
  "projection-source:fixture:stage-a6:scope-isolation-proof" as PondProjectionSourceRef;

const freshMembershipEnvelope = (
  sourceScopeRef: PondScopeRef,
  projectedSubjectRef: PondProjectionSubjectRef,
): PondProjectionEnvelope => ({
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
    subjectRef: projectedSubjectRef,
    subjectRevision: "fixture-a6-r1",
    subjectDigest: "fixture-digest:fixture-a6-r1",
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

const membershipProjectionBase = {
  contractVersion: "pond-relationship-projection-a5",
  authority: "none",
  projectionPosture: "fixture_non_authoritative_relationship_projection",
  kind: "scope_membership",
} as const;

export const stageA6MembershipProjectionPrincipalASharedY = {
  ...membershipProjectionBase,
  principalRef: stageA6PrincipalARef,
  scopeRef: stageA6SharedScopeYRef,
  state: "active",
  projection: freshMembershipEnvelope(
    stageA6SharedScopeYRef,
    asSubjectRef("relationship:fixture:stage-a6:membership:a-shared-y"),
  ),
} as const satisfies PondScopeMembershipProjection;

export const stageA6MembershipProjectionPrincipalBSharedY = {
  ...membershipProjectionBase,
  principalRef: stageA6PrincipalBRef,
  scopeRef: stageA6SharedScopeYRef,
  state: "active",
  projection: freshMembershipEnvelope(
    stageA6SharedScopeYRef,
    asSubjectRef("relationship:fixture:stage-a6:membership:b-shared-y"),
  ),
} as const satisfies PondScopeMembershipProjection;

export const stageA6MembershipProjectionPrincipalAProjectX = {
  ...membershipProjectionBase,
  principalRef: stageA6PrincipalARef,
  scopeRef: stageA6ProjectScopeXRef,
  state: "active",
  projection: freshMembershipEnvelope(
    stageA6ProjectScopeXRef,
    asSubjectRef("relationship:fixture:stage-a6:membership:a-project-x"),
  ),
} as const satisfies PondScopeMembershipProjection;

export const stageA6MembershipProjectionPrincipalBProjectX = {
  ...membershipProjectionBase,
  principalRef: stageA6PrincipalBRef,
  scopeRef: stageA6ProjectScopeXRef,
  state: "active",
  projection: freshMembershipEnvelope(
    stageA6ProjectScopeXRef,
    asSubjectRef("relationship:fixture:stage-a6:membership:b-project-x"),
  ),
} as const satisfies PondScopeMembershipProjection;

export const stageA6MembershipProjectionMatrix = [
  stageA6MembershipProjectionPrincipalASharedY,
  stageA6MembershipProjectionPrincipalBSharedY,
  stageA6MembershipProjectionPrincipalAProjectX,
  stageA6MembershipProjectionPrincipalBProjectX,
] as const satisfies readonly PondScopeMembershipProjection[];

// ------------------------------------------------------------
// Deterministic isolation views. Personal and public views carry no
// membership context; shared and project views carry the A5 active
// membership projection as projection context only.
// ------------------------------------------------------------

const proofViewBase = {
  contractVersion: "pond-scope-isolation-proof-a6",
  proofPosture: "deterministic_fixture_type_proof_only",
  membershipContextPosture: "projection_context_only_not_authority",
  selectionPosture: "exact_scope_owned_records_only",
  ambientUnion: "forbidden",
  crossScopeReleaseApplied: false,
  authority: "none",
} as const;

export const stageA6PersonalAView = {
  ...proofViewBase,
  viewerPrincipalRef: stageA6PrincipalARef,
  viewScopeRef: stageA6PersonalScopeARef,
  viewScopeKind: "personal",
  membershipContext: null,
  includedRecordRefs: [stageA6PersonalScopeARecord.recordRef],
  excludedRecordRefs: [
    stageA6PersonalScopeBRecord.recordRef,
    stageA6SharedScopeYRecord.recordRef,
    stageA6ProjectScopeXRecord.recordRef,
    stageA6PublicScopeZRecord.recordRef,
  ],
} as const satisfies PondScopeIsolationProofViewFixture;

export const stageA6PersonalBView = {
  ...proofViewBase,
  viewerPrincipalRef: stageA6PrincipalBRef,
  viewScopeRef: stageA6PersonalScopeBRef,
  viewScopeKind: "personal",
  membershipContext: null,
  includedRecordRefs: [stageA6PersonalScopeBRecord.recordRef],
  excludedRecordRefs: [
    stageA6PersonalScopeARecord.recordRef,
    stageA6SharedScopeYRecord.recordRef,
    stageA6ProjectScopeXRecord.recordRef,
    stageA6PublicScopeZRecord.recordRef,
  ],
} as const satisfies PondScopeIsolationProofViewFixture;

export const stageA6SharedAView = {
  ...proofViewBase,
  viewerPrincipalRef: stageA6PrincipalARef,
  viewScopeRef: stageA6SharedScopeYRef,
  viewScopeKind: "shared",
  membershipContext: stageA6MembershipProjectionPrincipalASharedY,
  includedRecordRefs: [stageA6SharedScopeYRecord.recordRef],
  excludedRecordRefs: [
    stageA6PersonalScopeARecord.recordRef,
    stageA6PersonalScopeBRecord.recordRef,
    stageA6ProjectScopeXRecord.recordRef,
    stageA6PublicScopeZRecord.recordRef,
  ],
} as const satisfies PondScopeIsolationProofViewFixture;

export const stageA6SharedBView = {
  ...proofViewBase,
  viewerPrincipalRef: stageA6PrincipalBRef,
  viewScopeRef: stageA6SharedScopeYRef,
  viewScopeKind: "shared",
  membershipContext: stageA6MembershipProjectionPrincipalBSharedY,
  includedRecordRefs: [stageA6SharedScopeYRecord.recordRef],
  excludedRecordRefs: [
    stageA6PersonalScopeARecord.recordRef,
    stageA6PersonalScopeBRecord.recordRef,
    stageA6ProjectScopeXRecord.recordRef,
    stageA6PublicScopeZRecord.recordRef,
  ],
} as const satisfies PondScopeIsolationProofViewFixture;

export const stageA6ProjectAView = {
  ...proofViewBase,
  viewerPrincipalRef: stageA6PrincipalARef,
  viewScopeRef: stageA6ProjectScopeXRef,
  viewScopeKind: "project",
  membershipContext: stageA6MembershipProjectionPrincipalAProjectX,
  includedRecordRefs: [stageA6ProjectScopeXRecord.recordRef],
  excludedRecordRefs: [
    stageA6PersonalScopeARecord.recordRef,
    stageA6PersonalScopeBRecord.recordRef,
    stageA6SharedScopeYRecord.recordRef,
    stageA6PublicScopeZRecord.recordRef,
  ],
} as const satisfies PondScopeIsolationProofViewFixture;

export const stageA6ProjectBView = {
  ...proofViewBase,
  viewerPrincipalRef: stageA6PrincipalBRef,
  viewScopeRef: stageA6ProjectScopeXRef,
  viewScopeKind: "project",
  membershipContext: stageA6MembershipProjectionPrincipalBProjectX,
  includedRecordRefs: [stageA6ProjectScopeXRecord.recordRef],
  excludedRecordRefs: [
    stageA6PersonalScopeARecord.recordRef,
    stageA6PersonalScopeBRecord.recordRef,
    stageA6SharedScopeYRecord.recordRef,
    stageA6PublicScopeZRecord.recordRef,
  ],
} as const satisfies PondScopeIsolationProofViewFixture;

export const stageA6PublicAView = {
  ...proofViewBase,
  viewerPrincipalRef: stageA6PrincipalARef,
  viewScopeRef: stageA6PublicScopeZRef,
  viewScopeKind: "public",
  membershipContext: null,
  includedRecordRefs: [stageA6PublicScopeZRecord.recordRef],
  excludedRecordRefs: [
    stageA6PersonalScopeARecord.recordRef,
    stageA6PersonalScopeBRecord.recordRef,
    stageA6SharedScopeYRecord.recordRef,
    stageA6ProjectScopeXRecord.recordRef,
  ],
} as const satisfies PondScopeIsolationProofViewFixture;

export const stageA6PublicBView = {
  ...proofViewBase,
  viewerPrincipalRef: stageA6PrincipalBRef,
  viewScopeRef: stageA6PublicScopeZRef,
  viewScopeKind: "public",
  membershipContext: null,
  includedRecordRefs: [stageA6PublicScopeZRecord.recordRef],
  excludedRecordRefs: [
    stageA6PersonalScopeARecord.recordRef,
    stageA6PersonalScopeBRecord.recordRef,
    stageA6SharedScopeYRecord.recordRef,
    stageA6ProjectScopeXRecord.recordRef,
  ],
} as const satisfies PondScopeIsolationProofViewFixture;

export const stageA6IsolationProofLaw = {
  law: "membership_does_not_union_personal_state",
  membershipUnionsPersonalState: false,
  membershipExposesPersonalMemory: false,
  renderingOrRetrievalIsRelease: false,
  proofConfersAuthority: false,
  reproofRequiredForLaterScopeBearingLayers: true,
} as const satisfies PondScopeIsolationProofLaw;

export const stageA6ScopeIsolationProofCorpus = {
  contractVersion: "pond-scope-isolation-proof-a6",
  proofPosture: "deterministic_fixture_type_proof_only",
  records: [
    stageA6PersonalScopeARecord,
    stageA6PersonalScopeBRecord,
    stageA6SharedScopeYRecord,
    stageA6ProjectScopeXRecord,
    stageA6PublicScopeZRecord,
  ],
  views: [
    stageA6PersonalAView,
    stageA6PersonalBView,
    stageA6SharedAView,
    stageA6SharedBView,
    stageA6ProjectAView,
    stageA6ProjectBView,
    stageA6PublicAView,
    stageA6PublicBView,
  ],
  proofLaw: stageA6IsolationProofLaw,
} as const satisfies PondScopeIsolationProofCorpus;

// ------------------------------------------------------------
// Compile-time proof invariants. Bounded and readable; these are type
// distinctions over literal-preserving fixture identities, not a theorem
// prover and not a runtime isolation proof.
// ------------------------------------------------------------

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type NotEqual<A, B> = Equal<A, B> extends true ? false : true;
type Includes<T extends readonly unknown[], Candidate> =
  T extends readonly [infer Head, ...infer Rest]
    ? Equal<Head, Candidate> extends true
      ? true
      : Includes<Rest, Candidate>
    : false;

// Every record is owned by exactly its own scope.
export type PondStageA6Invariant_PersonalARecordOwnedByPersonalA = Assert<
  Equal<typeof stageA6PersonalScopeARecord["ownerScopeRef"], typeof stageA6PersonalScopeARef>
>;
export type PondStageA6Invariant_PersonalBRecordOwnedByPersonalB = Assert<
  Equal<typeof stageA6PersonalScopeBRecord["ownerScopeRef"], typeof stageA6PersonalScopeBRef>
>;
export type PondStageA6Invariant_SharedYRecordOwnedBySharedY = Assert<
  Equal<typeof stageA6SharedScopeYRecord["ownerScopeRef"], typeof stageA6SharedScopeYRef>
>;
export type PondStageA6Invariant_ProjectXRecordOwnedByProjectX = Assert<
  Equal<typeof stageA6ProjectScopeXRecord["ownerScopeRef"], typeof stageA6ProjectScopeXRef>
>;
export type PondStageA6Invariant_PublicZRecordOwnedByPublicZ = Assert<
  Equal<typeof stageA6PublicScopeZRecord["ownerScopeRef"], typeof stageA6PublicScopeZRef>
>;
export type PondStageA6Invariant_PersonalARecordKindPersonal = Assert<
  Equal<typeof stageA6PersonalScopeARecord["ownerScopeKind"], "personal">
>;
export type PondStageA6Invariant_PersonalBRecordKindPersonal = Assert<
  Equal<typeof stageA6PersonalScopeBRecord["ownerScopeKind"], "personal">
>;
export type PondStageA6Invariant_SharedYRecordKindShared = Assert<
  Equal<typeof stageA6SharedScopeYRecord["ownerScopeKind"], "shared">
>;
export type PondStageA6Invariant_ProjectXRecordKindProject = Assert<
  Equal<typeof stageA6ProjectScopeXRecord["ownerScopeKind"], "project">
>;
export type PondStageA6Invariant_PublicZRecordKindPublic = Assert<
  Equal<typeof stageA6PublicScopeZRecord["ownerScopeKind"], "public">
>;

// A. Personal isolation: each personal view includes exactly its own record.
export type PondStageA6Invariant_PersonalAIncludesExactlyOwnRecord = Assert<
  Equal<
    typeof stageA6PersonalAView["includedRecordRefs"],
    readonly [typeof stageA6PersonalScopeARecord["recordRef"]]
  >
>;
export type PondStageA6Invariant_PersonalBIncludesExactlyOwnRecord = Assert<
  Equal<
    typeof stageA6PersonalBView["includedRecordRefs"],
    readonly [typeof stageA6PersonalScopeBRecord["recordRef"]]
  >
>;

// B/C. Shared and project views include exactly the scope's own record.
export type PondStageA6Invariant_SharedAIncludesExactlySharedYRecord = Assert<
  Equal<
    typeof stageA6SharedAView["includedRecordRefs"],
    readonly [typeof stageA6SharedScopeYRecord["recordRef"]]
  >
>;
export type PondStageA6Invariant_SharedBIncludesExactlySharedYRecord = Assert<
  Equal<
    typeof stageA6SharedBView["includedRecordRefs"],
    readonly [typeof stageA6SharedScopeYRecord["recordRef"]]
  >
>;
export type PondStageA6Invariant_ProjectAIncludesExactlyProjectXRecord = Assert<
  Equal<
    typeof stageA6ProjectAView["includedRecordRefs"],
    readonly [typeof stageA6ProjectScopeXRecord["recordRef"]]
  >
>;
export type PondStageA6Invariant_ProjectBIncludesExactlyProjectXRecord = Assert<
  Equal<
    typeof stageA6ProjectBView["includedRecordRefs"],
    readonly [typeof stageA6ProjectScopeXRecord["recordRef"]]
  >
>;

// E. Public views include exactly the public-scope-owned record.
export type PondStageA6Invariant_PublicAIncludesExactlyPublicZRecord = Assert<
  Equal<
    typeof stageA6PublicAView["includedRecordRefs"],
    readonly [typeof stageA6PublicScopeZRecord["recordRef"]]
  >
>;
export type PondStageA6Invariant_PublicBIncludesExactlyPublicZRecord = Assert<
  Equal<
    typeof stageA6PublicBView["includedRecordRefs"],
    readonly [typeof stageA6PublicScopeZRecord["recordRef"]]
  >
>;

// D. Same shared/project membership does not union personal state: A and B
// see the same scope-owned set, and each single-element set contains no
// ambient union of multiple scope owners.
export type PondStageA6Invariant_SharedAAndBIncludeSameSet = Assert<
  Equal<
    typeof stageA6SharedAView["includedRecordRefs"],
    typeof stageA6SharedBView["includedRecordRefs"]
  >
>;
export type PondStageA6Invariant_ProjectAAndBIncludeSameSet = Assert<
  Equal<
    typeof stageA6ProjectAView["includedRecordRefs"],
    typeof stageA6ProjectBView["includedRecordRefs"]
  >
>;
export type PondStageA6Invariant_PublicAAndBIncludeSameSet = Assert<
  Equal<
    typeof stageA6PublicAView["includedRecordRefs"],
    typeof stageA6PublicBView["includedRecordRefs"]
  >
>;
export type PondStageA6Invariant_PersonalAAndBIncludeDifferentSets = Assert<
  NotEqual<
    typeof stageA6PersonalAView["includedRecordRefs"],
    typeof stageA6PersonalBView["includedRecordRefs"]
  >
>;
export type PondStageA6Invariant_SameViewerDifferentViewDifferentSet = Assert<
  Equal<
    typeof stageA6SharedAView["viewerPrincipalRef"],
    typeof stageA6PersonalAView["viewerPrincipalRef"]
  >
>;
export type PondStageA6Invariant_SameViewerSetChangesWithScope = Assert<
  NotEqual<
    typeof stageA6SharedAView["includedRecordRefs"],
    typeof stageA6PersonalAView["includedRecordRefs"]
  >
>;

// Shared views exclude both personal records.
export type PondStageA6Invariant_SharedAExcludesPersonalA = Assert<
  Includes<
    typeof stageA6SharedAView["excludedRecordRefs"],
    typeof stageA6PersonalScopeARecord["recordRef"]
  >
>;
export type PondStageA6Invariant_SharedAExcludesPersonalB = Assert<
  Includes<
    typeof stageA6SharedAView["excludedRecordRefs"],
    typeof stageA6PersonalScopeBRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_SharedBExcludesPersonalA = Assert<
  Includes<
    typeof stageA6SharedBView["excludedRecordRefs"],
    typeof stageA6PersonalScopeARecord["recordRef"]
  >
>;
export type PondStageA6Invariant_SharedBExcludesPersonalB = Assert<
  Includes<
    typeof stageA6SharedBView["excludedRecordRefs"],
    typeof stageA6PersonalScopeBRecord["recordRef"]
  >
>;

// Project views exclude both personal records.
export type PondStageA6Invariant_ProjectAExcludesPersonalA = Assert<
  Includes<
    typeof stageA6ProjectAView["excludedRecordRefs"],
    typeof stageA6PersonalScopeARecord["recordRef"]
  >
>;
export type PondStageA6Invariant_ProjectAExcludesPersonalB = Assert<
  Includes<
    typeof stageA6ProjectAView["excludedRecordRefs"],
    typeof stageA6PersonalScopeBRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_ProjectBExcludesPersonalA = Assert<
  Includes<
    typeof stageA6ProjectBView["excludedRecordRefs"],
    typeof stageA6PersonalScopeARecord["recordRef"]
  >
>;
export type PondStageA6Invariant_ProjectBExcludesPersonalB = Assert<
  Includes<
    typeof stageA6ProjectBView["excludedRecordRefs"],
    typeof stageA6PersonalScopeBRecord["recordRef"]
  >
>;

// Public views exclude both personal records and the shared/project records.
export type PondStageA6Invariant_PublicAExcludesPersonalA = Assert<
  Includes<
    typeof stageA6PublicAView["excludedRecordRefs"],
    typeof stageA6PersonalScopeARecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PublicAExcludesPersonalB = Assert<
  Includes<
    typeof stageA6PublicAView["excludedRecordRefs"],
    typeof stageA6PersonalScopeBRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PublicAExcludesSharedY = Assert<
  Includes<
    typeof stageA6PublicAView["excludedRecordRefs"],
    typeof stageA6SharedScopeYRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PublicAExcludesProjectX = Assert<
  Includes<
    typeof stageA6PublicAView["excludedRecordRefs"],
    typeof stageA6ProjectScopeXRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PublicBExcludesPersonalA = Assert<
  Includes<
    typeof stageA6PublicBView["excludedRecordRefs"],
    typeof stageA6PersonalScopeARecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PublicBExcludesPersonalB = Assert<
  Includes<
    typeof stageA6PublicBView["excludedRecordRefs"],
    typeof stageA6PersonalScopeBRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PublicBExcludesSharedY = Assert<
  Includes<
    typeof stageA6PublicBView["excludedRecordRefs"],
    typeof stageA6SharedScopeYRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PublicBExcludesProjectX = Assert<
  Includes<
    typeof stageA6PublicBView["excludedRecordRefs"],
    typeof stageA6ProjectScopeXRecord["recordRef"]
  >
>;

// Personal views exclude the other four scope-owned records.
export type PondStageA6Invariant_PersonalAExcludesPersonalB = Assert<
  Includes<
    typeof stageA6PersonalAView["excludedRecordRefs"],
    typeof stageA6PersonalScopeBRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PersonalAExcludesSharedY = Assert<
  Includes<
    typeof stageA6PersonalAView["excludedRecordRefs"],
    typeof stageA6SharedScopeYRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PersonalAExcludesProjectX = Assert<
  Includes<
    typeof stageA6PersonalAView["excludedRecordRefs"],
    typeof stageA6ProjectScopeXRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PersonalAExcludesPublicZ = Assert<
  Includes<
    typeof stageA6PersonalAView["excludedRecordRefs"],
    typeof stageA6PublicScopeZRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PersonalBExcludesPersonalA = Assert<
  Includes<
    typeof stageA6PersonalBView["excludedRecordRefs"],
    typeof stageA6PersonalScopeARecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PersonalBExcludesSharedY = Assert<
  Includes<
    typeof stageA6PersonalBView["excludedRecordRefs"],
    typeof stageA6SharedScopeYRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PersonalBExcludesProjectX = Assert<
  Includes<
    typeof stageA6PersonalBView["excludedRecordRefs"],
    typeof stageA6ProjectScopeXRecord["recordRef"]
  >
>;
export type PondStageA6Invariant_PersonalBExcludesPublicZ = Assert<
  Includes<
    typeof stageA6PersonalBView["excludedRecordRefs"],
    typeof stageA6PublicScopeZRecord["recordRef"]
  >
>;

// Membership projection context: active A5 projections for A and B in Shared
// Y and Project X, as projection context only.
export type PondStageA6Invariant_MembershipProjectionsAllActive = Assert<
  Equal<typeof stageA6MembershipProjectionMatrix[number]["state"], "active">
>;
export type PondStageA6Invariant_MembershipProjectionsAuthorityNone = Assert<
  Equal<typeof stageA6MembershipProjectionMatrix[number]["authority"], "none">
>;
export type PondStageA6Invariant_SharedAndProjectViewsCarryA5Context = Assert<
  Equal<
    | typeof stageA6SharedAView["membershipContext"]
    | typeof stageA6SharedBView["membershipContext"]
    | typeof stageA6ProjectAView["membershipContext"]
    | typeof stageA6ProjectBView["membershipContext"],
    | typeof stageA6MembershipProjectionPrincipalASharedY
    | typeof stageA6MembershipProjectionPrincipalBSharedY
    | typeof stageA6MembershipProjectionPrincipalAProjectX
    | typeof stageA6MembershipProjectionPrincipalBProjectX
  >
>;
export type PondStageA6Invariant_PersonalAndPublicViewsHaveNoMembershipContext = Assert<
  Equal<
    | typeof stageA6PersonalAView["membershipContext"]
    | typeof stageA6PersonalBView["membershipContext"]
    | typeof stageA6PublicAView["membershipContext"]
    | typeof stageA6PublicBView["membershipContext"],
    null
  >
>;

// View scope kinds are exact.
export type PondStageA6Invariant_PersonalAViewKindPersonal = Assert<
  Equal<typeof stageA6PersonalAView["viewScopeKind"], "personal">
>;
export type PondStageA6Invariant_PersonalBViewKindPersonal = Assert<
  Equal<typeof stageA6PersonalBView["viewScopeKind"], "personal">
>;
export type PondStageA6Invariant_SharedViewsKindShared = Assert<
  Equal<
    typeof stageA6SharedAView["viewScopeKind"] | typeof stageA6SharedBView["viewScopeKind"],
    "shared"
  >
>;
export type PondStageA6Invariant_ProjectViewsKindProject = Assert<
  Equal<
    typeof stageA6ProjectAView["viewScopeKind"] | typeof stageA6ProjectBView["viewScopeKind"],
    "project"
  >
>;
export type PondStageA6Invariant_PublicViewsKindPublic = Assert<
  Equal<
    typeof stageA6PublicAView["viewScopeKind"] | typeof stageA6PublicBView["viewScopeKind"],
    "public"
  >
>;

// Corpus shape: exactly five records, exactly eight views, and the law holds.
export type PondStageA6Invariant_CorpusHasExactlyFiveRecords = Assert<
  Equal<typeof stageA6ScopeIsolationProofCorpus["records"]["length"], 5>
>;
export type PondStageA6Invariant_CorpusHasExactlyEightViews = Assert<
  Equal<typeof stageA6ScopeIsolationProofCorpus["views"]["length"], 8>
>;
export type PondStageA6Invariant_CorpusViewsReleaseFalse = Assert<
  Equal<typeof stageA6ScopeIsolationProofCorpus["views"][number]["crossScopeReleaseApplied"], false>
>;
export type PondStageA6Invariant_CorpusViewsAmbientUnionForbidden = Assert<
  Equal<typeof stageA6ScopeIsolationProofCorpus["views"][number]["ambientUnion"], "forbidden">
>;
export type PondStageA6Invariant_CorpusViewsAuthorityNone = Assert<
  Equal<typeof stageA6ScopeIsolationProofCorpus["views"][number]["authority"], "none">
>;
export type PondStageA6Invariant_CorpusViewsSelectionExactScopeOwnedOnly = Assert<
  Equal<
    typeof stageA6ScopeIsolationProofCorpus["views"][number]["selectionPosture"],
    "exact_scope_owned_records_only"
  >
>;
export type PondStageA6Invariant_CorpusRecordsAuthorityNone = Assert<
  Equal<typeof stageA6ScopeIsolationProofCorpus["records"][number]["authority"], "none">
>;
export type PondStageA6Invariant_CorpusRecordsIdentityOnly = Assert<
  Equal<
    typeof stageA6ScopeIsolationProofCorpus["records"][number]["contentPosture"],
    "identity_only_no_content_body"
  >
>;
export type PondStageA6Invariant_LawMembershipDoesNotUnionPersonalState = Assert<
  Equal<typeof stageA6IsolationProofLaw["membershipUnionsPersonalState"], false>
>;
export type PondStageA6Invariant_LawMembershipExposesNoPersonalMemory = Assert<
  Equal<typeof stageA6IsolationProofLaw["membershipExposesPersonalMemory"], false>
>;
export type PondStageA6Invariant_LawRenderingOrRetrievalIsNotRelease = Assert<
  Equal<typeof stageA6IsolationProofLaw["renderingOrRetrievalIsRelease"], false>
>;
export type PondStageA6Invariant_LawProofConfersNoAuthority = Assert<
  Equal<typeof stageA6IsolationProofLaw["proofConfersAuthority"], false>
>;
export type PondStageA6Invariant_LawLaterLayersMustReprove = Assert<
  Equal<typeof stageA6IsolationProofLaw["reproofRequiredForLaterScopeBearingLayers"], true>
>;