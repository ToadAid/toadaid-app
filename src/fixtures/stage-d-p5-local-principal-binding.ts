// Stage D-P5 fixture: the local principal binding establishment matrix.
// Two arms — a structurally complete ceremony (all seven receiver-owned
// checks satisfied, yet still a fixture: no real authentication, no
// PrincipalId issuance) and an incomplete one (binding basis not
// established, authentication not observed, identity separation not
// verified). Zero value imports: every import is type-only, so the
// selftest imports this file directly under node type-stripping and
// cross-checks the principal ref against the D-P0 fixture's own ref.
// `satisfies` typing keeps arm-level literals sharp for the fixture
// invariants.

import type {
  PondLocalPrincipalBindingEstablishmentAssessment,
  PondLocalPrincipalBindingEstablishmentRecord,
} from "../contracts/pond-local-principal-binding-establishment.js";

export interface PondStageDP5LocalPrincipalBindingFixtureEntry {
  readonly fixtureLabel: string;
  readonly ceremonyRecord: PondLocalPrincipalBindingEstablishmentRecord;
  readonly assessment: PondLocalPrincipalBindingEstablishmentAssessment;
}

// The Stage D local principal, carried from the D-P0 projection: the
// ceremony binds exactly this ref — one binding, one ref. The selftest
// cross-checks this literal against the directly-imported
// stageDP0LocalPrincipalRef.
const principalRef = "principal:fixture:stage-d-p0:local-principal";

const ceremonyRecord = (
  bindingBasis: PondLocalPrincipalBindingEstablishmentRecord["bindingBasis"],
  authenticationObservation: PondLocalPrincipalBindingEstablishmentRecord["authenticationObservation"],
  identitySeparationPosture: PondLocalPrincipalBindingEstablishmentRecord["identitySeparationPosture"],
  authenticationPosture: PondLocalPrincipalBindingEstablishmentRecord["authenticationPosture"],
) =>
  Object.freeze({
    contractVersion: "pond-local-principal-binding-establishment-d-p5",
    kind: "pond-local-principal-binding-establishment",
    principalRef,
    bindingBasis,
    authenticationObservation,
    identitySeparationPosture,
    memoryLaneExclusionPosture:
      "binding_excludes_memory_narrative_transcript_lanes",
    authorityPosture: "binding_grants_no_authority_membership_or_capability",
    revocabilityPosture:
      "binding_revocable_independently_of_transport_provider_or_registry",
    authenticationPosture,
    authority: "none",
  }) satisfies PondLocalPrincipalBindingEstablishmentRecord;

const satisfiedChecks = Object.freeze([
  "principal_ref_well_formed",
  "binding_bound_to_receiver_held_principal",
  "binding_explicitly_receiver_owned",
  "local_authentication_observed_by_receiver",
  "identity_separation_from_observed_agent_verified",
  "binding_excludes_memory_and_lane_content",
  "binding_grants_no_authority_and_stays_revocable",
] as const);

const incompleteSatisfiedChecks = Object.freeze([
  "principal_ref_well_formed",
  "binding_bound_to_receiver_held_principal",
  "binding_excludes_memory_and_lane_content",
  "binding_grants_no_authority_and_stays_revocable",
] as const);

const incompleteUnsatisfiedChecks = Object.freeze([
  "binding_explicitly_receiver_owned",
  "local_authentication_observed_by_receiver",
  "identity_separation_from_observed_agent_verified",
] as const);

// Complete arm: a structurally complete ceremony — every receiver-owned
// check satisfied — that still never becomes a real authentication, a
// PrincipalId issuance, or authority.
export const stageDP5LocalPrincipalBindingComplete = Object.freeze({
  fixtureLabel: "complete_ceremony",
  ceremonyRecord: ceremonyRecord(
    "receiver_owned_explicit_binding",
    "receiver_observed_local_authentication",
    "receiver_verified_agent_identity_distinct_from_principal",
    "fixture_structural_only_no_real_authentication",
  ),
  assessment: Object.freeze({
    contractVersion: "pond-local-principal-binding-establishment-d-p5",
    ceremonyRecordVersion: "pond-local-principal-binding-establishment-d-p5",
    assessmentKind: "deterministic_supplied_local_principal_binding",
    bindingEstablishmentState: "fixture_established_local_principal_binding",
    reason: "all_ceremony_checks_satisfied",
    authenticationPosture: "fixture_structural_only_no_real_authentication",
    satisfiedChecks,
    unsatisfiedChecks: Object.freeze([] as const),
    authenticationPerformed: false,
    principalIdIssued: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondLocalPrincipalBindingEstablishmentAssessment,
}) satisfies PondStageDP5LocalPrincipalBindingFixtureEntry;

// Incomplete arm: the binding basis is not established, the local
// authentication was not observed, and the identity separation is not
// verified — the receiver proof is incomplete even though the ref is
// well formed, bound to the held principal, lane-excluding, and
// revocable.
export const stageDP5LocalPrincipalBindingIncomplete = Object.freeze({
  fixtureLabel: "incomplete_ceremony",
  ceremonyRecord: ceremonyRecord(
    "not_established",
    "not_observed",
    "not_verified",
    "not_established",
  ),
  assessment: Object.freeze({
    contractVersion: "pond-local-principal-binding-establishment-d-p5",
    ceremonyRecordVersion: "pond-local-principal-binding-establishment-d-p5",
    assessmentKind: "deterministic_supplied_local_principal_binding",
    bindingEstablishmentState: "not_established",
    reason: "receiver_binding_proof_incomplete",
    authenticationPosture: "not_established",
    satisfiedChecks: incompleteSatisfiedChecks,
    unsatisfiedChecks: incompleteUnsatisfiedChecks,
    authenticationPerformed: false,
    principalIdIssued: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondLocalPrincipalBindingEstablishmentAssessment,
}) satisfies PondStageDP5LocalPrincipalBindingFixtureEntry;

export const stageDP5LocalPrincipalBindingMatrix: readonly PondStageDP5LocalPrincipalBindingFixtureEntry[] =
  Object.freeze([
    stageDP5LocalPrincipalBindingComplete,
    stageDP5LocalPrincipalBindingIncomplete,
  ]);

// Compile-time fixture invariants: the complete ceremony is all-satisfied
// yet structurally only (no real authentication, no PrincipalId); the
// incomplete arm stays not_established.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP5FixtureInvariant_CompleteArmAllSatisfiedYetNoRealAuthentication =
  Assert<
    Equal<
      [
        typeof stageDP5LocalPrincipalBindingComplete["assessment"]["authenticationPosture"],
        typeof stageDP5LocalPrincipalBindingComplete["assessment"]["authenticationPerformed"],
        typeof stageDP5LocalPrincipalBindingComplete["assessment"]["principalIdIssued"],
        typeof stageDP5LocalPrincipalBindingComplete["assessment"]["authority"],
      ],
      ["fixture_structural_only_no_real_authentication", false, false, "none"]
    >
  >;
export type PondStageDP5FixtureInvariant_IncompleteArmNotEstablished = Assert<
  Equal<
    typeof stageDP5LocalPrincipalBindingIncomplete["assessment"]["bindingEstablishmentState"],
    "not_established"
  >
>;
export type PondStageDP5FixtureInvariant_CompleteArmSatisfiedTuple = Assert<
  Equal<
    typeof stageDP5LocalPrincipalBindingComplete["assessment"]["satisfiedChecks"],
    readonly [
      "principal_ref_well_formed",
      "binding_bound_to_receiver_held_principal",
      "binding_explicitly_receiver_owned",
      "local_authentication_observed_by_receiver",
      "identity_separation_from_observed_agent_verified",
      "binding_excludes_memory_and_lane_content",
      "binding_grants_no_authority_and_stays_revocable",
    ]
  >
>;