// Stage D-P2 receiver-owned live-presence observation intake seam.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture
// (contracts/agent-identity-and-specialist-admission-contract.md,
// contracts/trusted-channel-separation-contract.md). This cut establishes
// the deterministic intake seam that D-P0's `receiver_owned_presence_
// observation_channel` and `live_presence_observation_observed` checks
// point at: the vocabulary a future live desk observation would flow
// through. Every candidate — including a fresh, well-formed one — is
// refused, because no trusted receiver-owned channel exists. A freshness
// diagnosis is computed, never admitted: it is a diagnosis, not an
// admission. The refusal posture is the completion of this cut, not a
// gap in it.

export type PondAgentPresenceObservationCandidateState =
  | "no_observation_present"
  | "claim_without_observation_metadata"
  | "claim_with_stale_observation"
  | "claim_with_fresh_observation";

// Source-owned observation-time metadata: the C-P4 vocabulary, reused so a
// future live observation carries the same shape the Bridge cut already
// bound. Present only when the candidate actually claims an observation.
export interface PondAgentPresenceObservationMetadata {
  readonly observed_at_epoch_ms: number;
  readonly freshness_basis: "source_observation_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

// The candidate is state vocabulary only: no real payload, no
// self-attestation accepted. `claimedSourceContractCommit` is a claim the
// receiver must independently verify — a claim never satisfies a check.
export interface PondAgentPresenceObservationCandidate {
  readonly contractVersion: "pond-agent-presence-observation-intake-d-p2";
  readonly kind: "pond-agent-presence-observation-candidate";
  readonly candidateState: PondAgentPresenceObservationCandidateState;
  readonly channelState: "not_established";
  readonly claimedSourceContractCommit: string | "not_claimed";
  readonly observedTools: readonly ("runtime_status" | "identity_status")[];
  readonly observationMetadata:
    | PondAgentPresenceObservationMetadata
    | "not_included";
  readonly secretFreeFieldInventoryPosture: "not_observed";
  readonly personalMemoryLaneContentPosture: "excluded_by_contract";
  readonly requestedEffectPosture: "none_read_only";
}

export type PondAgentPresenceObservationFreshnessState =
  | "fresh"
  | "stale"
  | "unknown";

export type PondAgentPresenceObservationFreshnessReason =
  | "within_declared_maximum_age"
  | "declared_maximum_age_expired"
  | "observation_metadata_missing_or_invalid"
  | "evaluation_time_invalid"
  | "maximum_age_invalid"
  | "observation_time_in_future";

export interface PondAgentPresenceObservationFreshnessDiagnosis {
  readonly state: PondAgentPresenceObservationFreshnessState;
  readonly reason: PondAgentPresenceObservationFreshnessReason;
  readonly observationAgeMs: number | null;
}

// Receiver-owned intake checks. Every check stays unsatisfied on every
// outcome of this cut: there is no trusted receiver-owned channel, so
// nothing can be verified, reproduced, or excluded by receiver proof.
export type PondAgentPresenceObservationIntakeCheck =
  | "receiver_owned_observation_channel_established"
  | "desk_source_contract_commit_verified_by_receiver"
  | "observation_metadata_reproduced_from_bound_contract"
  | "observation_freshness_within_declared_maximum_age"
  | "secret_free_observation_field_inventory"
  | "personal_memory_lanes_excluded"
  | "no_effect_or_transport_requested";

export interface PondAgentPresenceObservationIntakeInput {
  readonly candidate: unknown;
  readonly evaluatedAtEpochMs: unknown;
  readonly maximumAgeMs: unknown;
}

export interface PondAgentPresenceObservationIntakeAssessment {
  readonly contractVersion: "pond-agent-presence-observation-intake-d-p2";
  readonly candidateStateAssessed:
    | PondAgentPresenceObservationCandidateState
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_observation_candidate";
  readonly candidatePayloadPosture: "not_included_fixture_state_only";
  readonly intakeState: "refused_no_trusted_observation_channel";
  readonly refusalReason:
    | "receiver_owned_channel_not_established"
    | "observation_candidate_invalid";
  readonly canonicalOutcome: "refused";
  readonly presentationState: "degraded";
  readonly freshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // Type-level pin: no intake check is ever satisfied by this cut.
  readonly satisfiedChecks: readonly [];
  readonly unsatisfiedChecks: readonly PondAgentPresenceObservationIntakeCheck[];
  readonly livePresenceObservationAdmitted: false;
  readonly observedPresenceAcceptedAsAuthentication: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly snapshotPresentation: "withheld";
  readonly fallbackPosture: {
    readonly directDeskInvocation: "forbidden";
    readonly alternateChannelSelection: "forbidden";
    readonly credentialUse: "forbidden";
  };
  readonly effectPosture: {
    readonly transportInvocation: "not_performed";
    readonly polling: "not_performed";
    readonly persistence: "not_performed";
    readonly approval: "not_performed";
    readonly mutation: "not_performed";
    readonly execution: "not_performed";
  };
  readonly trustedChannelPosture: "not_established";
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

export const POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS = 60_000 as const;

const intakeChecks = Object.freeze([
  "receiver_owned_observation_channel_established",
  "desk_source_contract_commit_verified_by_receiver",
  "observation_metadata_reproduced_from_bound_contract",
  "observation_freshness_within_declared_maximum_age",
  "secret_free_observation_field_inventory",
  "personal_memory_lanes_excluded",
  "no_effect_or_transport_requested",
] as const satisfies readonly PondAgentPresenceObservationIntakeCheck[]);

// Keys whose presence anywhere in a candidate would mean a live-connection
// or effect channel, a credential, desk personal memory, or an
// identity-binding collapse entered the intake as data.
export const POND_STAGE_D_P2_FORBIDDEN_INTAKE_KEYS = Object.freeze([
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "endpoint",
  "transport",
  "connect",
  "fetch",
  "poll",
  "subscribe",
  "listen",
  "invoke",
  "execute",
  "canExecute",
  "mayMutate",
  "approve",
  "grant",
  "apiKey",
  "secret",
  "token",
  "session",
] as const);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;

const exactArray = (value: unknown, expected: readonly string[]) =>
  Array.isArray(value) &&
  value.length === expected.length &&
  value.every((entry, index) => entry === expected[index]);

const exactKeys = (
  value: Record<string, unknown>,
  expected: readonly string[],
) => exactArray(Object.keys(value).sort(), [...expected].sort());

const hasForbiddenKey = (
  value: unknown,
  forbidden: readonly string[],
): boolean => {
  const stack: unknown[] = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
};

const safeNonNegativeInteger = (value: unknown): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0;

const validObservationMetadata = (value: unknown): boolean => {
  const metadata = record(value);
  return (
    metadata !== null &&
    exactKeys(metadata, [
      "observed_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadata.observed_at_epoch_ms) &&
    metadata.freshness_basis === "source_observation_time_only" &&
    metadata.currentness_posture ===
      "not_established_consumer_must_evaluate"
  );
};

const candidateStates = Object.freeze([
  "no_observation_present",
  "claim_without_observation_metadata",
  "claim_with_stale_observation",
  "claim_with_fresh_observation",
] as const satisfies readonly PondAgentPresenceObservationCandidateState[]);

const statesWithoutMetadata = Object.freeze([
  "no_observation_present",
  "claim_without_observation_metadata",
] as const);

const validCandidate = (value: unknown): boolean => {
  const candidate = record(value);
  if (
    candidate === null ||
    !exactKeys(candidate, [
      "contractVersion",
      "kind",
      "candidateState",
      "channelState",
      "claimedSourceContractCommit",
      "observedTools",
      "observationMetadata",
      "secretFreeFieldInventoryPosture",
      "personalMemoryLaneContentPosture",
      "requestedEffectPosture",
    ]) ||
    candidate.contractVersion !==
      "pond-agent-presence-observation-intake-d-p2" ||
    candidate.kind !== "pond-agent-presence-observation-candidate" ||
    !candidateStates.includes(candidate.candidateState as never) ||
    candidate.channelState !== "not_established" ||
    (candidate.claimedSourceContractCommit !== "not_claimed" &&
      (typeof candidate.claimedSourceContractCommit !== "string" ||
        !/^[0-9a-f]{40}$/.test(candidate.claimedSourceContractCommit))) ||
    !exactArray(candidate.observedTools, [
      "runtime_status",
      "identity_status",
    ]) ||
    candidate.secretFreeFieldInventoryPosture !== "not_observed" ||
    candidate.personalMemoryLaneContentPosture !== "excluded_by_contract" ||
    candidate.requestedEffectPosture !== "none_read_only" ||
    hasForbiddenKey(candidate, POND_STAGE_D_P2_FORBIDDEN_INTAKE_KEYS)
  )
    return false;
  // Metadata presence must agree with the state label: a "claim_with_*"
  // state carries source-owned metadata, the other two states carry none.
  if (candidate.observationMetadata === "not_included")
    return statesWithoutMetadata.includes(
      candidate.candidateState as (typeof statesWithoutMetadata)[number],
    );
  return (
    !statesWithoutMetadata.includes(
      candidate.candidateState as (typeof statesWithoutMetadata)[number],
    ) && validObservationMetadata(candidate.observationMetadata)
  );
};

// The freshness diagnosis is deterministic and source-owned-time only. It is
// computed for every candidate that carries well-formed metadata and is a
// diagnosis, never an admission: even "fresh" refuses at intake.
const diagnoseFreshness = (
  candidate: Record<string, unknown>,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const metadata =
    candidate.observationMetadata === "not_included"
      ? null
      : record(candidate.observationMetadata);
  if (
    metadata === null ||
    !safeNonNegativeInteger(metadata.observed_at_epoch_ms) ||
    metadata.freshness_basis !== "source_observation_time_only" ||
    metadata.currentness_posture !==
      "not_established_consumer_must_evaluate"
  )
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null,
    });
  if (!safeNonNegativeInteger(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null,
    });
  if (!safeNonNegativeInteger(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null,
    });
  const observedAt = metadata.observed_at_epoch_ms as number;
  if (observedAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - observedAt;
  return Object.freeze(
    age <= (maximumAgeMs as number)
      ? {
          state: "fresh",
          reason: "within_declared_maximum_age",
          observationAgeMs: age,
        }
      : {
          state: "stale",
          reason: "declared_maximum_age_expired",
          observationAgeMs: age,
        },
  );
};

const assessment = (
  candidateStateAssessed: PondAgentPresenceObservationIntakeAssessment["candidateStateAssessed"],
  refusalReason: PondAgentPresenceObservationIntakeAssessment["refusalReason"],
  freshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
): PondAgentPresenceObservationIntakeAssessment =>
  Object.freeze({
    contractVersion: "pond-agent-presence-observation-intake-d-p2",
    candidateStateAssessed,
    assessmentKind: "deterministic_supplied_observation_candidate",
    candidatePayloadPosture: "not_included_fixture_state_only",
    intakeState: "refused_no_trusted_observation_channel",
    refusalReason,
    canonicalOutcome: "refused",
    presentationState: "degraded",
    freshnessDiagnosis,
    satisfiedChecks: Object.freeze([] as const),
    unsatisfiedChecks: Object.freeze([...intakeChecks]),
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
  });

const unknownDiagnosis = Object.freeze({
  state: "unknown",
  reason: "observation_metadata_missing_or_invalid",
  observationAgeMs: null,
}) as PondAgentPresenceObservationFreshnessDiagnosis;

export function assessPondAgentPresenceObservationIntake(
  input: PondAgentPresenceObservationIntakeInput,
): PondAgentPresenceObservationIntakeAssessment {
  if (!validCandidate(input.candidate))
    return assessment("invalid", "observation_candidate_invalid", unknownDiagnosis);
  const candidate = input.candidate as Record<string, unknown>;
  // A well-formed candidate is still refused unconditionally: the receiver
  // has no trusted observation channel, so nothing else can be verified.
  return assessment(
    candidate.candidateState as PondAgentPresenceObservationCandidateState,
    "receiver_owned_channel_not_established",
    diagnoseFreshness(candidate, input.evaluatedAtEpochMs, input.maximumAgeMs),
  );
}

// Compile-time invariants for this cut. The intake seam never admits a
// live presence observation, never satisfies a check, and never becomes
// authentication, admission, or authority.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP2Invariant_CandidateStatesExact = Assert<
  Equal<
    PondAgentPresenceObservationCandidateState,
    "no_observation_present" | "claim_without_observation_metadata" | "claim_with_stale_observation" | "claim_with_fresh_observation"
  >
>;
export type PondStageDP2Invariant_FreshnessStatesExact = Assert<
  Equal<
    PondAgentPresenceObservationFreshnessState,
    "fresh" | "stale" | "unknown"
  >
>;
export type PondStageDP2Invariant_RefusalReasonsExact = Assert<
  Equal<
    PondAgentPresenceObservationIntakeAssessment["refusalReason"],
    "receiver_owned_channel_not_established" | "observation_candidate_invalid"
  >
>;
export type PondStageDP2Invariant_CanonicalOutcomeRefused = Assert<
  Equal<PondAgentPresenceObservationIntakeAssessment["canonicalOutcome"], "refused">
>;
export type PondStageDP2Invariant_AllChecksUnsatisfied = Assert<
  Equal<PondAgentPresenceObservationIntakeAssessment["satisfiedChecks"], readonly []>
>;
export type PondStageDP2Invariant_ObservationIntakeNeverAdmitsLivePresence =
  Assert<
    Equal<
      [
        PondAgentPresenceObservationIntakeAssessment["livePresenceObservationAdmitted"],
        PondAgentPresenceObservationIntakeAssessment["observedPresenceAcceptedAsAuthentication"],
        PondAgentPresenceObservationIntakeAssessment["personalMemoryContentAdmitted"],
        PondAgentPresenceObservationIntakeAssessment["currentTruthAdmitted"],
        PondAgentPresenceObservationIntakeAssessment["runtimeActivationPosture"],
        PondAgentPresenceObservationIntakeAssessment["authority"],
      ],
      [false, false, false, false, "not_included", "none"]
    >
  >;
export type PondStageDP2Invariant_NoForbiddenCandidateKeys = Assert<
  HasAnyKey<PondAgentPresenceObservationCandidate, (typeof POND_STAGE_D_P2_FORBIDDEN_INTAKE_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP2Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondAgentPresenceObservationIntakeAssessment, (typeof POND_STAGE_D_P2_FORBIDDEN_INTAKE_KEYS)[number]> extends false
    ? true
    : false
>;