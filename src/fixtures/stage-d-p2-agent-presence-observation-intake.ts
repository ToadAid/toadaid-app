// Stage D-P2 fixture: the live-presence observation intake matrix. Four
// candidate-state vocabulary arms — no observation, a claim without
// observation metadata, a stale-dated claim, and a fresh-dated claim — each
// frozen together with the exact assessment the D-P2 intake classifier
// produces for it. Zero value imports: every import is type-only, so the
// selftest imports this file directly under node type-stripping. Every arm
// is refused: even the fresh arm's diagnosis is a diagnosis, not an
// admission. `satisfies` typing keeps arm-level literals sharp so the
// fixture invariants can pin the diagnosis/refusal pairing.

import type {
  PondAgentPresenceObservationCandidate,
  PondAgentPresenceObservationIntakeAssessment,
} from "../contracts/pond-agent-presence-observation-intake.js";

export interface PondStageDP2ObservationIntakeFixtureEntry {
  readonly fixtureLabel: string;
  readonly candidate: PondAgentPresenceObservationCandidate;
  readonly evaluatedAtEpochMs: number;
  readonly maximumAgeMs: number;
  readonly assessment: PondAgentPresenceObservationIntakeAssessment;
}

// Evaluation time shared by every arm; observation times are offset from it.
const evaluatedAtEpochMs = 1_800_000_060_000;
const maximumAgeMs = 60_000;

const candidate = (
  candidateState: PondAgentPresenceObservationCandidate["candidateState"],
  claimedSourceContractCommit: PondAgentPresenceObservationCandidate["claimedSourceContractCommit"],
  observationMetadata: PondAgentPresenceObservationCandidate["observationMetadata"],
): PondAgentPresenceObservationCandidate =>
  Object.freeze({
    contractVersion: "pond-agent-presence-observation-intake-d-p2",
    kind: "pond-agent-presence-observation-candidate",
    candidateState,
    channelState: "not_established",
    claimedSourceContractCommit,
    observedTools: Object.freeze(["runtime_status", "identity_status"]),
    observationMetadata,
    secretFreeFieldInventoryPosture: "not_observed",
    personalMemoryLaneContentPosture: "excluded_by_contract",
    requestedEffectPosture: "none_read_only",
  }) as PondAgentPresenceObservationCandidate;

const metadata = (observedAtEpochMs: number) =>
  Object.freeze({
    observed_at_epoch_ms: observedAtEpochMs,
    freshness_basis: "source_observation_time_only",
    currentness_posture: "not_established_consumer_must_evaluate",
  }) as PondAgentPresenceObservationCandidate["observationMetadata"];

// The desk's committed source-contract SHA: the claim the receiver would
// have to verify. A claim satisfies no intake check.
const deskCommit = "57b5c8b966d3eb58cf239b2f3f1598f09f24b296";

const refusedChecks = Object.freeze([
  "receiver_owned_observation_channel_established",
  "desk_source_contract_commit_verified_by_receiver",
  "observation_metadata_reproduced_from_bound_contract",
  "observation_freshness_within_declared_maximum_age",
  "secret_free_observation_field_inventory",
  "personal_memory_lanes_excluded",
  "no_effect_or_transport_requested",
] as const);

export const stageDP2NoObservationIntake = Object.freeze({
  fixtureLabel: "no_observation_present",
  candidate: candidate("no_observation_present", "not_claimed", "not_included"),
  evaluatedAtEpochMs,
  maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-agent-presence-observation-intake-d-p2",
    candidateStateAssessed: "no_observation_present",
    assessmentKind: "deterministic_supplied_observation_candidate",
    candidatePayloadPosture: "not_included_fixture_state_only",
    intakeState: "refused_no_trusted_observation_channel",
    refusalReason: "receiver_owned_channel_not_established",
    canonicalOutcome: "refused",
    presentationState: "degraded",
    freshnessDiagnosis: Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null,
    }),
    satisfiedChecks: Object.freeze([] as const),
    unsatisfiedChecks: refusedChecks,
    livePresenceObservationAdmitted: false,
    observedPresenceAcceptedAsAuthentication: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    snapshotPresentation: "withheld",
    fallbackPosture: Object.freeze({
      directDeskInvocation: "forbidden",
      alternateChannelSelection: "forbidden",
      credentialUse: "forbidden",
    }),
    effectPosture: Object.freeze({
      transportInvocation: "not_performed",
      polling: "not_performed",
      persistence: "not_performed",
      approval: "not_performed",
      mutation: "not_performed",
      execution: "not_performed",
    }),
    trustedChannelPosture: "not_established",
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondAgentPresenceObservationIntakeAssessment,
}) satisfies PondStageDP2ObservationIntakeFixtureEntry;

export const stageDP2ClaimWithoutMetadataIntake = Object.freeze({
  fixtureLabel: "claim_without_observation_metadata",
  candidate: candidate(
    "claim_without_observation_metadata",
    deskCommit,
    "not_included",
  ),
  evaluatedAtEpochMs,
  maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-agent-presence-observation-intake-d-p2",
    candidateStateAssessed: "claim_without_observation_metadata",
    assessmentKind: "deterministic_supplied_observation_candidate",
    candidatePayloadPosture: "not_included_fixture_state_only",
    intakeState: "refused_no_trusted_observation_channel",
    refusalReason: "receiver_owned_channel_not_established",
    canonicalOutcome: "refused",
    presentationState: "degraded",
    freshnessDiagnosis: Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null,
    }),
    satisfiedChecks: Object.freeze([] as const),
    unsatisfiedChecks: refusedChecks,
    livePresenceObservationAdmitted: false,
    observedPresenceAcceptedAsAuthentication: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    snapshotPresentation: "withheld",
    fallbackPosture: Object.freeze({
      directDeskInvocation: "forbidden",
      alternateChannelSelection: "forbidden",
      credentialUse: "forbidden",
    }),
    effectPosture: Object.freeze({
      transportInvocation: "not_performed",
      polling: "not_performed",
      persistence: "not_performed",
      approval: "not_performed",
      mutation: "not_performed",
      execution: "not_performed",
    }),
    trustedChannelPosture: "not_established",
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondAgentPresenceObservationIntakeAssessment,
}) satisfies PondStageDP2ObservationIntakeFixtureEntry;

// Stale arm: observed 80s before evaluation, over the 60s declared maximum.
export const stageDP2ClaimWithStaleObservationIntake = Object.freeze({
  fixtureLabel: "claim_with_stale_observation",
  candidate: candidate(
    "claim_with_stale_observation",
    deskCommit,
    metadata(1_799_999_980_000),
  ),
  evaluatedAtEpochMs,
  maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-agent-presence-observation-intake-d-p2",
    candidateStateAssessed: "claim_with_stale_observation",
    assessmentKind: "deterministic_supplied_observation_candidate",
    candidatePayloadPosture: "not_included_fixture_state_only",
    intakeState: "refused_no_trusted_observation_channel",
    refusalReason: "receiver_owned_channel_not_established",
    canonicalOutcome: "refused",
    presentationState: "degraded",
    freshnessDiagnosis: Object.freeze({
      state: "stale",
      reason: "declared_maximum_age_expired",
      observationAgeMs: 80_000,
    }),
    satisfiedChecks: Object.freeze([] as const),
    unsatisfiedChecks: refusedChecks,
    livePresenceObservationAdmitted: false,
    observedPresenceAcceptedAsAuthentication: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    snapshotPresentation: "withheld",
    fallbackPosture: Object.freeze({
      directDeskInvocation: "forbidden",
      alternateChannelSelection: "forbidden",
      credentialUse: "forbidden",
    }),
    effectPosture: Object.freeze({
      transportInvocation: "not_performed",
      polling: "not_performed",
      persistence: "not_performed",
      approval: "not_performed",
      mutation: "not_performed",
      execution: "not_performed",
    }),
    trustedChannelPosture: "not_established",
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondAgentPresenceObservationIntakeAssessment,
}) satisfies PondStageDP2ObservationIntakeFixtureEntry;

// Fresh arm: observed 30s before evaluation, within the declared maximum —
// diagnosed fresh, yet still refused, because the receiver owns no channel.
export const stageDP2ClaimWithFreshObservationIntake = Object.freeze({
  fixtureLabel: "claim_with_fresh_observation",
  candidate: candidate(
    "claim_with_fresh_observation",
    deskCommit,
    metadata(1_800_000_030_000),
  ),
  evaluatedAtEpochMs,
  maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-agent-presence-observation-intake-d-p2",
    candidateStateAssessed: "claim_with_fresh_observation",
    assessmentKind: "deterministic_supplied_observation_candidate",
    candidatePayloadPosture: "not_included_fixture_state_only",
    intakeState: "refused_no_trusted_observation_channel",
    refusalReason: "receiver_owned_channel_not_established",
    canonicalOutcome: "refused",
    presentationState: "degraded",
    freshnessDiagnosis: Object.freeze({
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: 30_000,
    }),
    satisfiedChecks: Object.freeze([] as const),
    unsatisfiedChecks: refusedChecks,
    livePresenceObservationAdmitted: false,
    observedPresenceAcceptedAsAuthentication: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    snapshotPresentation: "withheld",
    fallbackPosture: Object.freeze({
      directDeskInvocation: "forbidden",
      alternateChannelSelection: "forbidden",
      credentialUse: "forbidden",
    }),
    effectPosture: Object.freeze({
      transportInvocation: "not_performed",
      polling: "not_performed",
      persistence: "not_performed",
      approval: "not_performed",
      mutation: "not_performed",
      execution: "not_performed",
    }),
    trustedChannelPosture: "not_established",
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondAgentPresenceObservationIntakeAssessment,
}) satisfies PondStageDP2ObservationIntakeFixtureEntry;

export const stageDP2ObservationIntakeMatrix: readonly PondStageDP2ObservationIntakeFixtureEntry[] =
  Object.freeze([
    stageDP2NoObservationIntake,
    stageDP2ClaimWithoutMetadataIntake,
    stageDP2ClaimWithStaleObservationIntake,
    stageDP2ClaimWithFreshObservationIntake,
  ]);

// Compile-time fixture invariants: the fresh arm is diagnosed fresh yet
// still refused; the stale arm stale yet refused; the no-metadata arms
// unknown.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP2FixtureInvariant_MatrixStatesExact = Assert<
  Equal<
    (typeof stageDP2ObservationIntakeMatrix)[number]["candidate"]["candidateState"],
    "no_observation_present" | "claim_without_observation_metadata" | "claim_with_stale_observation" | "claim_with_fresh_observation"
  >
>;
export type PondStageDP2FixtureInvariant_FreshArmDiagnosedFreshYetRefused =
  Assert<
    Equal<
      [
        typeof stageDP2ClaimWithFreshObservationIntake["assessment"]["freshnessDiagnosis"]["state"],
        typeof stageDP2ClaimWithFreshObservationIntake["assessment"]["canonicalOutcome"],
      ],
      ["fresh", "refused"]
    >
  >;
export type PondStageDP2FixtureInvariant_StaleArmDiagnosedStaleYetRefused =
  Assert<
    Equal<
      [
        typeof stageDP2ClaimWithStaleObservationIntake["assessment"]["freshnessDiagnosis"]["state"],
        typeof stageDP2ClaimWithStaleObservationIntake["assessment"]["canonicalOutcome"],
      ],
      ["stale", "refused"]
    >
  >;
export type PondStageDP2FixtureInvariant_NoObservationArmsDiagnosedUnknown =
  Assert<
    Equal<
      typeof stageDP2NoObservationIntake["assessment"]["freshnessDiagnosis"]["state"],
      "unknown"
    >
  >;