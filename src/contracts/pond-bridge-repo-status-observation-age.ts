// Stage C-P5 deterministic Bridge repo-status observation-age classifier.
//
// This pure classifier derives age freshness from supplied fixture inputs. A
// fresh age classification does not establish trusted delivery, target match,
// applicability, canonical current truth, approval, or authority.

import type { PondBridgeRepoStatusObservationSourceBindingFixture } from "./pond-bridge-repo-status-observation-source-binding.js";

export const POND_STAGE_CP5_FIXTURE_MAXIMUM_AGE_MS = 60_000 as const;

export interface PondBridgeRepoStatusObservationMetadataInput {
  readonly observed_at_epoch_ms: unknown;
  readonly freshness_basis: unknown;
  readonly currentness_posture: unknown;
}

export interface PondBridgeRepoStatusObservationAgeInput {
  readonly observationMetadata: unknown;
  readonly evaluatedAtEpochMs: unknown;
  readonly maximumAgeMs: unknown;
}

export type PondBridgeRepoStatusObservationAgeState =
  | "fresh"
  | "stale"
  | "unknown";

export type PondBridgeRepoStatusObservationAgeReason =
  | "within_declared_maximum_age"
  | "declared_maximum_age_expired"
  | "observation_metadata_missing_or_invalid"
  | "evaluation_time_invalid"
  | "maximum_age_invalid"
  | "observation_time_in_future";

interface PondBridgeRepoStatusObservationAgeAssessmentBase {
  readonly contractVersion: "pond-bridge-repo-status-observation-age-c-p5";
  readonly metadataSchemaContractVersion:
    PondBridgeRepoStatusObservationSourceBindingFixture["contractVersion"];
  readonly sourceBindingComparisonPosture:
    "not_performed_fixture_dependency_only";
  readonly assessmentKind: "deterministic_fixture_observation_age";
  readonly observationAgeState: PondBridgeRepoStatusObservationAgeState;
  readonly reason: PondBridgeRepoStatusObservationAgeReason;
  readonly currentTruthAdmitted: false;
  readonly snapshotPresentation: "withheld";
  readonly presentationState: "degraded";
  readonly targetComparisonPosture: "not_performed";
  readonly trustedChannelPosture: "not_established";
  readonly canonicalOutcome: "insufficient_evidence";
  readonly authority: "none";
}

export type PondBridgeRepoStatusObservationAgeAssessment =
  | (PondBridgeRepoStatusObservationAgeAssessmentBase & {
      readonly observationAgeState: "fresh" | "stale";
      readonly reason:
        | "within_declared_maximum_age"
        | "declared_maximum_age_expired";
      readonly observedAtEpochMs: number;
      readonly evaluatedAtEpochMs: number;
      readonly maximumAgeMs: number;
      readonly observationAgeMs: number;
      readonly freshnessBasis:
        "source_observation_time_compared_to_fixture_declared_maximum_age";
    })
  | (PondBridgeRepoStatusObservationAgeAssessmentBase & {
      readonly observationAgeState: "unknown";
      readonly reason: Exclude<
        PondBridgeRepoStatusObservationAgeReason,
        "within_declared_maximum_age" | "declared_maximum_age_expired"
      >;
      readonly observedAtEpochMs: number | null;
      readonly evaluatedAtEpochMs: number | null;
      readonly maximumAgeMs: number | null;
      readonly observationAgeMs: null;
      readonly freshnessBasis: "comparison_not_performed_invalid_input";
    });

const validEpochMilliseconds = (value: unknown): value is number =>
  Number.isSafeInteger(value) && Number(value) >= 0;

const validMaximumAge = (value: unknown): value is number =>
  Number.isSafeInteger(value) && Number(value) >= 0;

const exactObservationMetadata = (
  value: unknown,
): value is {
  readonly observed_at_epoch_ms: number;
  readonly freshness_basis: "source_observation_time_only";
  readonly currentness_posture:
    "not_established_consumer_must_evaluate";
} => {
  if (value === null || typeof value !== "object") return false;
  const metadata = value as Partial<PondBridgeRepoStatusObservationMetadataInput>;
  return (
    validEpochMilliseconds(metadata.observed_at_epoch_ms) &&
    metadata.freshness_basis === "source_observation_time_only" &&
    metadata.currentness_posture ===
      "not_established_consumer_must_evaluate"
  );
};

const baseAssessment = Object.freeze({
  contractVersion: "pond-bridge-repo-status-observation-age-c-p5",
  metadataSchemaContractVersion:
    "pond-bridge-repo-status-observation-source-binding-c-p4",
  sourceBindingComparisonPosture: "not_performed_fixture_dependency_only",
  assessmentKind: "deterministic_fixture_observation_age",
  currentTruthAdmitted: false,
  snapshotPresentation: "withheld",
  presentationState: "degraded",
  targetComparisonPosture: "not_performed",
  trustedChannelPosture: "not_established",
  canonicalOutcome: "insufficient_evidence",
  authority: "none",
} as const);

const unknownAssessment = (
  reason: Extract<
    PondBridgeRepoStatusObservationAgeReason,
    | "observation_metadata_missing_or_invalid"
    | "evaluation_time_invalid"
    | "maximum_age_invalid"
    | "observation_time_in_future"
  >,
  observedAtEpochMs: number | null,
  evaluatedAtEpochMs: number | null,
  maximumAgeMs: number | null,
): PondBridgeRepoStatusObservationAgeAssessment =>
  Object.freeze({
    ...baseAssessment,
    observationAgeState: "unknown",
    reason,
    observedAtEpochMs,
    evaluatedAtEpochMs,
    maximumAgeMs,
    observationAgeMs: null,
    freshnessBasis: "comparison_not_performed_invalid_input",
  });

export function classifyPondBridgeRepoStatusObservationAge(
  input: PondBridgeRepoStatusObservationAgeInput,
): PondBridgeRepoStatusObservationAgeAssessment {
  const evaluatedAtEpochMs = validEpochMilliseconds(input.evaluatedAtEpochMs)
    ? input.evaluatedAtEpochMs
    : null;
  const maximumAgeMs = validMaximumAge(input.maximumAgeMs)
    ? input.maximumAgeMs
    : null;

  if (!exactObservationMetadata(input.observationMetadata)) {
    return unknownAssessment(
      "observation_metadata_missing_or_invalid",
      null,
      evaluatedAtEpochMs,
      maximumAgeMs,
    );
  }

  const observedAtEpochMs = input.observationMetadata.observed_at_epoch_ms;
  if (evaluatedAtEpochMs === null) {
    return unknownAssessment(
      "evaluation_time_invalid",
      observedAtEpochMs,
      null,
      maximumAgeMs,
    );
  }
  if (maximumAgeMs === null) {
    return unknownAssessment(
      "maximum_age_invalid",
      observedAtEpochMs,
      evaluatedAtEpochMs,
      null,
    );
  }
  if (observedAtEpochMs > evaluatedAtEpochMs) {
    return unknownAssessment(
      "observation_time_in_future",
      observedAtEpochMs,
      evaluatedAtEpochMs,
      maximumAgeMs,
    );
  }

  const observationAgeMs = evaluatedAtEpochMs - observedAtEpochMs;
  const fresh = observationAgeMs <= maximumAgeMs;
  return Object.freeze({
    ...baseAssessment,
    observationAgeState: fresh ? "fresh" : "stale",
    reason: fresh
      ? "within_declared_maximum_age"
      : "declared_maximum_age_expired",
    observedAtEpochMs,
    evaluatedAtEpochMs,
    maximumAgeMs,
    observationAgeMs,
    freshnessBasis:
      "source_observation_time_compared_to_fixture_declared_maximum_age",
  });
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

export type PondStageCP5Invariant_ObservationStatesExact = Assert<
  Equal<PondBridgeRepoStatusObservationAgeState, "fresh" | "stale" | "unknown">
>;
export type PondStageCP5Invariant_CurrentTruthAlwaysWithheld = Assert<
  Equal<
    [
      PondBridgeRepoStatusObservationAgeAssessment["currentTruthAdmitted"],
      PondBridgeRepoStatusObservationAgeAssessment["snapshotPresentation"],
      PondBridgeRepoStatusObservationAgeAssessment["sourceBindingComparisonPosture"],
      PondBridgeRepoStatusObservationAgeAssessment["canonicalOutcome"],
      PondBridgeRepoStatusObservationAgeAssessment["authority"],
    ],
    [
      false,
      "withheld",
      "not_performed_fixture_dependency_only",
      "insufficient_evidence",
      "none",
    ]
  >
>;

type ForbiddenObservationAgeAssessmentKeys =
  | "endpoint"
  | "transport"
  | "connect"
  | "fetch"
  | "poll"
  | "cache"
  | "persist"
  | "approve"
  | "grant"
  | "execute"
  | "mutate"
  | "authorize"
  | "credential"
  | "secret"
  | "token"
  | "session";

export type PondStageCP5Invariant_NoTransportEffectOrAuthorityFields = Assert<
  Equal<
    HasAnyKey<
      PondBridgeRepoStatusObservationAgeAssessment,
      ForbiddenObservationAgeAssessmentKeys
    >,
    false
  >
>;
