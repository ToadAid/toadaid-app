// Stage D-P6 fixture: the local principal authentication observation
// matrix. Two arms — a structurally complete observation (all seven
// receiver-owned checks satisfied, yet still a fixture: no live
// authentication event performed) and an incomplete one (event not
// observed, shell channel not established). Zero value imports: every
// import is type-only, so the selftest imports this file directly under
// node type-stripping and cross-checks the principal ref against the D-P0
// fixture's own ref. `satisfies` typing keeps arm-level literals sharp
// for the fixture invariants.

import type {
  PondLocalPrincipalAuthenticationObservationAssessment,
  PondLocalPrincipalAuthenticationObservationRecord,
} from "../contracts/pond-local-principal-authentication-observation.js";

export interface PondStageDP6AuthenticationObservationFixtureEntry {
  readonly fixtureLabel: string;
  readonly observationRecord: PondLocalPrincipalAuthenticationObservationRecord;
  readonly evaluatedAtEpochMs: number;
  readonly maximumAgeMs: number;
  readonly assessment: PondLocalPrincipalAuthenticationObservationAssessment;
}

// The Stage D local principal, carried from the D-P0 projection: the
// observation lands on exactly this ref — one binding, one ref. The
// selftest cross-checks this literal against the directly-imported
// stageDP0LocalPrincipalRef.
const principalRef = "principal:fixture:stage-d-p0:local-principal";

const evaluatedAtEpochMs = 1_800_000_060_000;
const maximumAgeMs = 60_000;

const observationRecord = (
  eventState: PondLocalPrincipalAuthenticationObservationRecord["eventState"],
  observationChannel: PondLocalPrincipalAuthenticationObservationRecord["observationChannel"],
  secretFreeFieldInventoryPosture: PondLocalPrincipalAuthenticationObservationRecord["secretFreeFieldInventoryPosture"],
  memoryLaneExclusionPosture: PondLocalPrincipalAuthenticationObservationRecord["memoryLaneExclusionPosture"],
  authenticationPosture: PondLocalPrincipalAuthenticationObservationRecord["authenticationPosture"],
  observedAtEpochMs: number,
) =>
  Object.freeze({
    contractVersion: "pond-local-principal-authentication-observation-d-p6",
    kind: "pond-local-principal-authentication-observation",
    principalRef,
    eventState,
    observationChannel,
    secretFreeFieldInventoryPosture,
    observationMetadata: Object.freeze({
      observed_at_epoch_ms: observedAtEpochMs,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    memoryLaneExclusionPosture,
    authorityPosture: "observation_grants_no_authority_membership_or_capability",
    authenticationPosture,
    authority: "none",
  }) satisfies PondLocalPrincipalAuthenticationObservationRecord;

const satisfiedChecks = Object.freeze([
  "authentication_event_receiver_observed",
  "authentication_event_bound_to_receiver_held_principal",
  "authentication_observation_channel_receiver_owned",
  "authentication_observation_secret_free",
  "authentication_observation_fresh",
  "authentication_observation_excludes_memory_and_lane_content",
  "authentication_observation_grants_no_authority",
] as const);

const incompleteSatisfiedChecks = Object.freeze([
  "authentication_event_bound_to_receiver_held_principal",
  "authentication_observation_secret_free",
  "authentication_observation_fresh",
  "authentication_observation_excludes_memory_and_lane_content",
  "authentication_observation_grants_no_authority",
] as const);

const incompleteUnsatisfiedChecks = Object.freeze([
  "authentication_event_receiver_observed",
  "authentication_observation_channel_receiver_owned",
] as const);

// Complete arm: a structurally complete observation — every receiver-owned
// check satisfied — that still never becomes a live authentication event,
// a credential admission, or authority.
export const stageDP6AuthenticationObservationComplete = Object.freeze({
  fixtureLabel: "complete_observation",
  observationRecord: observationRecord(
    "receiver_observed_local_authentication_event",
    "receiver_owned_local_shell_channel",
    "inventory_secret_free_no_credential_field_observed",
    "observation_excludes_memory_narrative_transcript_lanes",
    "fixture_structural_only_no_live_authentication",
    1_800_000_030_000,
  ),
  evaluatedAtEpochMs,
  maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-local-principal-authentication-observation-d-p6",
    observationRecordVersion:
      "pond-local-principal-authentication-observation-d-p6",
    assessmentKind: "deterministic_supplied_authentication_observation",
    authenticationObservationState: "fixture_observed_local_authentication",
    reason: "all_observation_checks_satisfied",
    freshnessDiagnosis: Object.freeze({
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: 30_000,
    }),
    authenticationPosture: "fixture_structural_only_no_live_authentication",
    satisfiedChecks,
    unsatisfiedChecks: Object.freeze([] as const),
    liveAuthenticationPerformed: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    principalIdIssued: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondLocalPrincipalAuthenticationObservationAssessment,
}) satisfies PondStageDP6AuthenticationObservationFixtureEntry;

// Incomplete arm: the event is not observed and the shell channel is not
// established — the receiver proof is incomplete even though the event is
// bound to the held principal, the inventory is secret-free, the
// observation is fresh, lanes are excluded, and authority stays none.
export const stageDP6AuthenticationObservationIncomplete = Object.freeze({
  fixtureLabel: "incomplete_observation",
  observationRecord: observationRecord(
    "not_observed",
    "not_established",
    "inventory_secret_free_no_credential_field_observed",
    "observation_excludes_memory_narrative_transcript_lanes",
    "not_established",
    1_800_000_030_000,
  ),
  evaluatedAtEpochMs,
  maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-local-principal-authentication-observation-d-p6",
    observationRecordVersion:
      "pond-local-principal-authentication-observation-d-p6",
    assessmentKind: "deterministic_supplied_authentication_observation",
    authenticationObservationState: "not_observed",
    reason: "receiver_authentication_proof_incomplete",
    freshnessDiagnosis: Object.freeze({
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: 30_000,
    }),
    authenticationPosture: "not_established",
    satisfiedChecks: incompleteSatisfiedChecks,
    unsatisfiedChecks: incompleteUnsatisfiedChecks,
    liveAuthenticationPerformed: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    principalIdIssued: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondLocalPrincipalAuthenticationObservationAssessment,
}) satisfies PondStageDP6AuthenticationObservationFixtureEntry;

export const stageDP6AuthenticationObservationMatrix: readonly PondStageDP6AuthenticationObservationFixtureEntry[] =
  Object.freeze([
    stageDP6AuthenticationObservationComplete,
    stageDP6AuthenticationObservationIncomplete,
  ]);

// Compile-time fixture invariants: the complete observation is all-satisfied
// yet structurally only (no live authentication performed); the incomplete
// arm stays not_observed.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP6FixtureInvariant_CompleteArmAllSatisfiedYetNoLiveEvent =
  Assert<
    Equal<
      [
        typeof stageDP6AuthenticationObservationComplete["assessment"]["authenticationPosture"],
        typeof stageDP6AuthenticationObservationComplete["assessment"]["liveAuthenticationPerformed"],
        typeof stageDP6AuthenticationObservationComplete["assessment"]["principalIdIssued"],
        typeof stageDP6AuthenticationObservationComplete["assessment"]["authority"],
      ],
      ["fixture_structural_only_no_live_authentication", false, false, "none"]
    >
  >;
export type PondStageDP6FixtureInvariant_IncompleteArmNotObserved = Assert<
  Equal<
    typeof stageDP6AuthenticationObservationIncomplete["assessment"]["authenticationObservationState"],
    "not_observed"
  >
>;
export type PondStageDP6FixtureInvariant_CompleteArmSatisfiedTuple = Assert<
  Equal<
    typeof stageDP6AuthenticationObservationComplete["assessment"]["satisfiedChecks"],
    readonly [
      "authentication_event_receiver_observed",
      "authentication_event_bound_to_receiver_held_principal",
      "authentication_observation_channel_receiver_owned",
      "authentication_observation_secret_free",
      "authentication_observation_fresh",
      "authentication_observation_excludes_memory_and_lane_content",
      "authentication_observation_grants_no_authority",
    ]
  >
>;