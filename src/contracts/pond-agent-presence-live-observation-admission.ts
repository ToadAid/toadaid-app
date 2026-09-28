// Stage D-P4 live-observation admission composition.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture
// (contracts/trusted-channel-separation-contract.md,
// contracts/agent-identity-and-specialist-admission-contract.md). This cut
// composes the Stage D chain into one deterministic readiness assessment:
// the fully satisfied receiver-owned channel ceremony (D-P3), the carried
// desk source-contract identity binding (D-P1/D-P0), a structurally
// admissible presence projection (D-P0), and a fresh well-formed
// observation candidate (D-P2). Structural readiness maps exactly two
// D-P0 receiver checks to satisfied — exact_source_contract_identity and
// receiver_owned_presence_observation_channel — and restates the other six
// as the live proof still owed. Readiness is never a performed live
// observation, never authentication, never memory admission, never
// authority: the refused tuple is pinned on every arm.

import type { PondAgentPresenceAdmissionCheck } from "./pond-agent-presence-projection.js";
import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import { assessPondAgentPresenceAdmission } from "./pond-agent-presence-projection.ts";
import {
  assessPondAgentPresenceObservationIntake,
} from "./pond-agent-presence-observation-intake.ts";
import {
  assessPondAgentPresenceChannelEstablishment,
} from "./pond-agent-presence-channel-establishment.ts";

export type PondAgentPresenceLiveObservationReadinessCheck =
  | "channel_ceremony_fully_satisfied"
  | "desk_source_contract_commit_identity_bound"
  | "presence_projection_structurally_admissible"
  | "observation_candidate_fresh_and_well_formed";

export type PondAgentPresenceLiveObservationReadinessState =
  | "not_ready"
  | "structurally_ready_pending_actual_observation";

export interface PondAgentPresenceLiveObservationAdmissionInput {
  readonly channelEstablishment: unknown;
  readonly sourceContractFixture: unknown;
  readonly projection: unknown;
  readonly observationCandidate: unknown;
  readonly evaluatedAtEpochMs: unknown;
  readonly maximumAgeMs: unknown;
}

export interface PondAgentPresenceLiveObservationAdmissionAssessment {
  readonly contractVersion: "pond-agent-presence-live-observation-admission-d-p4";
  readonly assessmentKind: "deterministic_supplied_live_observation_composition";
  readonly readinessState: PondAgentPresenceLiveObservationReadinessState;
  readonly reason:
    | "receiver_live_proof_incomplete"
    | "structurally_ready_pending_actual_observation";
  readonly freshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly mappedDp0SatisfiedChecks: readonly PondAgentPresenceAdmissionCheck[];
  readonly mappedDp0UnsatisfiedChecks: readonly PondAgentPresenceAdmissionCheck[];
  readonly livePresencePresentation: "withheld_no_live_observation_performed";
  readonly satisfiedChecks: readonly PondAgentPresenceLiveObservationReadinessCheck[];
  readonly unsatisfiedChecks: readonly PondAgentPresenceLiveObservationReadinessCheck[];
  readonly liveObservationPerformed: false;
  readonly observedPresenceAcceptedAsAuthentication: false;
  readonly observedIdentityAcceptedAsPrincipalId: false;
  readonly personalMemoryContentAdmitted: false;
  readonly localPrincipalBindingEstablished: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const readinessChecks = Object.freeze([
  "channel_ceremony_fully_satisfied",
  "desk_source_contract_commit_identity_bound",
  "presence_projection_structurally_admissible",
  "observation_candidate_fresh_and_well_formed",
] as const satisfies readonly PondAgentPresenceLiveObservationReadinessCheck[]);

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

// The D-P1 shape of the desk source-contract fixture: the identity side of
// the composition. Validated locally so this contract stays
// self-contained in its own vocabulary.
const validDeskSourceContractFixture = (value: unknown): boolean => {
  const fixture = record(value);
  const source = record(record(value)?.sourceContract);
  return (
    fixture !== null &&
    source !== null &&
    exactKeys(fixture, ["contractVersion", "kind", "sourceContract", "authority"]) &&
    fixture.contractVersion ===
      "pond-agent-presence-source-contract-d-p0" &&
    fixture.kind === "pond-agent-presence-source-contract" &&
    exactKeys(source, [
      "repository",
      "boundSourceCommit",
      "observedTools",
      "sourcePosture",
    ]) &&
    source.repository === "trading-desk" &&
    typeof source.boundSourceCommit === "string" &&
    /^[0-9a-f]{40}$/.test(source.boundSourceCommit) &&
    exactArray(source.observedTools, ["runtime_status", "identity_status"]) &&
    source.sourcePosture === "read_only_tool_contract_only_no_live_connection" &&
    fixture.authority === "none"
  );
};

const assessment = (
  reason: PondAgentPresenceLiveObservationAdmissionAssessment["reason"],
  freshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedDp0SatisfiedChecks: readonly PondAgentPresenceAdmissionCheck[],
  mappedDp0UnsatisfiedChecks: readonly PondAgentPresenceAdmissionCheck[],
  satisfiedChecks: readonly PondAgentPresenceLiveObservationReadinessCheck[],
  unsatisfiedChecks: readonly PondAgentPresenceLiveObservationReadinessCheck[],
): PondAgentPresenceLiveObservationAdmissionAssessment =>
  Object.freeze({
    contractVersion: "pond-agent-presence-live-observation-admission-d-p4",
    assessmentKind: "deterministic_supplied_live_observation_composition",
    readinessState:
      reason === "structurally_ready_pending_actual_observation"
        ? "structurally_ready_pending_actual_observation"
        : "not_ready",
    reason,
    freshnessDiagnosis,
    mappedDp0SatisfiedChecks: Object.freeze([...mappedDp0SatisfiedChecks]),
    mappedDp0UnsatisfiedChecks: Object.freeze([...mappedDp0UnsatisfiedChecks]),
    livePresencePresentation: "withheld_no_live_observation_performed",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    liveObservationPerformed: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    personalMemoryContentAdmitted: false,
    localPrincipalBindingEstablished: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondAgentPresenceLiveObservationAdmission(
  input: PondAgentPresenceLiveObservationAdmissionInput,
): PondAgentPresenceLiveObservationAdmissionAssessment {
  // 1. The channel ceremony must be fully satisfied by the receiver.
  const ceremony = assessPondAgentPresenceChannelEstablishment({
    establishmentRecord: input.channelEstablishment,
  });
  const ceremonyComplete = ceremony.reason === "all_ceremony_checks_satisfied";

  // 2. The desk source-contract identity must bind: a valid committed
  // fixture whose bound SHA equals the ceremony record's carried commit.
  // This comparison is orthogonal to ceremony completion — the receiver
  // matches the carried commit against its own independently held D-P1
  // binding; ceremony completeness is reported separately as check 1.
  const ceremonyRecord = record(input.channelEstablishment);
  const ceremonyCommit =
    typeof ceremonyRecord?.sourceContractCommit === "string"
      ? ceremonyRecord.sourceContractCommit
      : null;
  const identityBound =
    validDeskSourceContractFixture(input.sourceContractFixture) &&
    typeof ceremonyCommit === "string" &&
    ceremonyCommit ===
      (record((input.sourceContractFixture as {
        readonly sourceContract: { readonly boundSourceCommit: unknown };
      }).sourceContract)?.boundSourceCommit ?? null);

  // 3. The presence projection must be structurally admissible: proven by
  // running D-P0's own admission with the mapped receiver observation —
  // exactly two fields mapped, everything else still not observed.
  const mappedObservation = {
    sourceContractIdentityMatch: identityBound
      ? "exact_source_contract_match"
      : "not_observed",
    runtimeFactInventoryMatch: "not_observed",
    presenceObservationChannel: ceremonyComplete
      ? "receiver_owned_channel_observed"
      : "not_observed",
    runtimeFactChannelSeparation: "not_observed",
    identityClaimReproduction: "not_observed",
    principalBindingEstablished: "not_established",
    identitySeparationFromPrincipal: "not_observed",
    liveObservation: "not_performed",
  };
  const dP0 = assessPondAgentPresenceAdmission({
    projection: input.projection,
    receiverObservation: mappedObservation,
  });
  const projectionAdmissible = dP0.projectionContractVersion !== "invalid";

  // 4. The observation candidate must be well-formed and diagnosed fresh.
  // The D-P2 intake still refuses — a diagnosis is not an admission — so
  // freshness is carried here as a readiness fact only.
  const intake = assessPondAgentPresenceObservationIntake({
    candidate: input.observationCandidate,
    evaluatedAtEpochMs: input.evaluatedAtEpochMs,
    maximumAgeMs: input.maximumAgeMs,
  });
  const candidateReady =
    intake.refusalReason === "receiver_owned_channel_not_established" &&
    intake.freshnessDiagnosis.state === "fresh";

  const values = [
    ceremonyComplete,
    identityBound,
    projectionAdmissible,
    candidateReady,
  ];
  const satisfied = readinessChecks.filter((_, index) => values[index]);
  const unsatisfied = readinessChecks.filter((_, index) => !values[index]);
  // Structural readiness is the composition's completion: it never
  // becomes a performed live observation, authentication, or authority.
  return assessment(
    unsatisfied.length === 0
      ? "structurally_ready_pending_actual_observation"
      : "receiver_live_proof_incomplete",
    intake.freshnessDiagnosis,
    dP0.satisfiedChecks,
    dP0.unsatisfiedChecks,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. Structural readiness never becomes
// a performed live observation, authentication, memory admission, or
// authority.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP4Invariant_ReadinessChecksExact = Assert<
  Equal<
    PondAgentPresenceLiveObservationReadinessCheck,
    "channel_ceremony_fully_satisfied" | "desk_source_contract_commit_identity_bound" | "presence_projection_structurally_admissible" | "observation_candidate_fresh_and_well_formed"
  >
>;
export type PondStageDP4Invariant_ReadinessStatesExact = Assert<
  Equal<
    PondAgentPresenceLiveObservationReadinessState,
    "not_ready" | "structurally_ready_pending_actual_observation"
  >
>;
export type PondStageDP4Invariant_ReadinessNeverBecomesLiveObservationOrAuthority =
  Assert<
    Equal<
      [
        PondAgentPresenceLiveObservationAdmissionAssessment["liveObservationPerformed"],
        PondAgentPresenceLiveObservationAdmissionAssessment["observedPresenceAcceptedAsAuthentication"],
        PondAgentPresenceLiveObservationAdmissionAssessment["observedIdentityAcceptedAsPrincipalId"],
        PondAgentPresenceLiveObservationAdmissionAssessment["personalMemoryContentAdmitted"],
        PondAgentPresenceLiveObservationAdmissionAssessment["localPrincipalBindingEstablished"],
        PondAgentPresenceLiveObservationAdmissionAssessment["currentTruthAdmitted"],
        PondAgentPresenceLiveObservationAdmissionAssessment["runtimeActivationPosture"],
        PondAgentPresenceLiveObservationAdmissionAssessment["authority"],
      ],
      [false, false, false, false, false, false, "not_included", "none"]
    >
  >;