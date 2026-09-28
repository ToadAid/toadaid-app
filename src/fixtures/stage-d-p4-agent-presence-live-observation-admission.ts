// Stage D-P4 fixture: the live-observation admission composition matrix.
// Two arms — a structurally ready composition (ceremony complete, desk
// identity bound, projection admissible, candidate fresh: exactly two D-P0
// receiver checks mapped satisfied, readiness declared, nothing live) and
// a not-ready one (incomplete ceremony: only the identity check mapped).
// Zero value imports: the D-P0 projection is supplied by the selftest's
// own direct import of the D-P0 fixture and referenced here by label.
// `satisfies` typing keeps arm-level literals sharp for the fixture
// invariants.

import type {
  PondAgentPresenceChannelEstablishmentRecord,
} from "../contracts/pond-agent-presence-channel-establishment.js";
import type {
  PondAgentPresenceObservationCandidate,
} from "../contracts/pond-agent-presence-observation-intake.js";
import type {
  PondObservedAgentSourceContractFixture,
} from "../contracts/pond-agent-presence-projection.js";
import type {
  PondAgentPresenceLiveObservationAdmissionAssessment,
} from "../contracts/pond-agent-presence-live-observation-admission.js";

export interface PondStageDP4LiveObservationAdmissionFixtureEntry {
  readonly fixtureLabel: string;
  readonly channelEstablishmentRecord: PondAgentPresenceChannelEstablishmentRecord;
  readonly sourceContractFixture: PondObservedAgentSourceContractFixture;
  readonly observationCandidate: PondAgentPresenceObservationCandidate;
  readonly evaluatedAtEpochMs: number;
  readonly maximumAgeMs: number;
  readonly projectionFixture: "stage-d-p0-agent-presence.ts";
  readonly assessment: PondAgentPresenceLiveObservationAdmissionAssessment;
}

// The desk's committed source-contract SHA, bound by committed SHA only.
const deskCommit = "57b5c8b966d3eb58cf239b2f3f1598f09f24b296";

const evaluatedAtEpochMs = 1_800_000_060_000;
const maximumAgeMs = 60_000;

const ceremonyRecord = (
  channelKind: PondAgentPresenceChannelEstablishmentRecord["channelKind"],
  processOwnership: PondAgentPresenceChannelEstablishmentRecord["ownershipProof"]["processOwnership"],
  parentRuntime: PondAgentPresenceChannelEstablishmentRecord["ownershipProof"]["parentRuntime"],
) =>
  Object.freeze({
    contractVersion: "pond-agent-presence-channel-establishment-d-p3",
    kind: "pond-agent-presence-channel-establishment",
    channelKind,
    ownershipProof: Object.freeze({ processOwnership, parentRuntime }),
    establishesSemanticClasses: Object.freeze([
      "observed_agent_presence",
    ] as const),
    forbiddenSemanticCrossings: Object.freeze({
      trustedRuntimeConfiguration: "forbidden",
      canonicalMemory: "forbidden",
      authorityDecisions: "forbidden",
      operatorInput: "forbidden",
    }),
    channelAuthorityStatement:
      "channel_authoritative_for_presence_semantic_class_only",
    precedencePosture:
      "receiver_authoritative_no_conflicting_upstream_configuration_observed",
    sourceContractCommit: deskCommit,
    secretFreeChannelInventoryPosture:
      "inventory_secret_free_not_observed_by_receiver",
    authority: "none",
  }) satisfies PondAgentPresenceChannelEstablishmentRecord;

const sourceContractFixture = Object.freeze({
  contractVersion: "pond-agent-presence-source-contract-d-p0",
  kind: "pond-agent-presence-source-contract",
  sourceContract: Object.freeze({
    repository: "trading-desk",
    boundSourceCommit: deskCommit,
    observedTools: Object.freeze(["runtime_status", "identity_status"] as const),
    sourcePosture: "read_only_tool_contract_only_no_live_connection",
  }),
  authority: "none",
}) satisfies PondObservedAgentSourceContractFixture;

const observationCandidate = () =>
  Object.freeze({
    contractVersion: "pond-agent-presence-observation-intake-d-p2",
    kind: "pond-agent-presence-observation-candidate",
    candidateState: "claim_with_fresh_observation",
    channelState: "not_established",
    claimedSourceContractCommit: deskCommit,
    observedTools: Object.freeze(["runtime_status", "identity_status"] as const),
    observationMetadata: Object.freeze({
      observed_at_epoch_ms: 1_800_000_030_000,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    secretFreeFieldInventoryPosture: "not_observed",
    personalMemoryLaneContentPosture: "excluded_by_contract",
    requestedEffectPosture: "none_read_only",
  }) satisfies PondAgentPresenceObservationCandidate;

const refusedPosture = Object.freeze({
  liveObservationPerformed: false,
  observedPresenceAcceptedAsAuthentication: false,
  observedIdentityAcceptedAsPrincipalId: false,
  personalMemoryContentAdmitted: false,
  localPrincipalBindingEstablished: false,
  currentTruthAdmitted: false,
  runtimeActivationPosture: "not_included",
  authority: "none",
} as const);

// Ready arm: ceremony complete, identity bound, projection admissible,
// candidate fresh — structurally ready, and still nothing live.
export const stageDP4LiveObservationAdmissionReady = Object.freeze({
  fixtureLabel: "structurally_ready",
  channelEstablishmentRecord: ceremonyRecord(
    "stdio_direct_child_process",
    "exact_direct_child",
    "pond_desktop_shell",
  ),
  sourceContractFixture,
  observationCandidate: observationCandidate(),
  evaluatedAtEpochMs,
  maximumAgeMs,
  projectionFixture: "stage-d-p0-agent-presence.ts",
  assessment: Object.freeze({
    contractVersion: "pond-agent-presence-live-observation-admission-d-p4",
    assessmentKind: "deterministic_supplied_live_observation_composition",
    readinessState: "structurally_ready_pending_actual_observation",
    reason: "structurally_ready_pending_actual_observation",
    freshnessDiagnosis: Object.freeze({
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: 30_000,
    }),
    mappedDp0SatisfiedChecks: Object.freeze([
      "exact_source_contract_identity",
      "receiver_owned_presence_observation_channel",
    ] as const),
    mappedDp0UnsatisfiedChecks: Object.freeze([
      "exact_secret_free_runtime_fact_inventory",
      "runtime_facts_separated_from_personal_memory_channels",
      "identity_claim_evidence_independently_reproduced",
      "local_principal_binding_established_before_private_reads",
      "observed_identity_kept_separate_from_principal_id",
      "live_presence_observation_observed",
    ] as const),
    livePresencePresentation: "withheld_no_live_observation_performed",
    satisfiedChecks: Object.freeze([
      "channel_ceremony_fully_satisfied",
      "desk_source_contract_commit_identity_bound",
      "presence_projection_structurally_admissible",
      "observation_candidate_fresh_and_well_formed",
    ] as const),
    unsatisfiedChecks: Object.freeze([] as const),
    ...refusedPosture,
  }) satisfies PondAgentPresenceLiveObservationAdmissionAssessment,
}) satisfies PondStageDP4LiveObservationAdmissionFixtureEntry;

// Not-ready arm: ceremony incomplete (channel kind and process ownership
// unproven) while the identity binding, projection, and fresh candidate
// still hold — only the identity check maps, and readiness stays not ready.
export const stageDP4LiveObservationAdmissionNotReady = Object.freeze({
  fixtureLabel: "not_ready_incomplete_ceremony",
  channelEstablishmentRecord: ceremonyRecord(
    "not_established",
    "not_observed",
    "not_observed",
  ),
  sourceContractFixture,
  observationCandidate: observationCandidate(),
  evaluatedAtEpochMs,
  maximumAgeMs,
  projectionFixture: "stage-d-p0-agent-presence.ts",
  assessment: Object.freeze({
    contractVersion: "pond-agent-presence-live-observation-admission-d-p4",
    assessmentKind: "deterministic_supplied_live_observation_composition",
    readinessState: "not_ready",
    reason: "receiver_live_proof_incomplete",
    freshnessDiagnosis: Object.freeze({
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: 30_000,
    }),
    mappedDp0SatisfiedChecks: Object.freeze([
      "exact_source_contract_identity",
    ] as const),
    mappedDp0UnsatisfiedChecks: Object.freeze([
      "exact_secret_free_runtime_fact_inventory",
      "receiver_owned_presence_observation_channel",
      "runtime_facts_separated_from_personal_memory_channels",
      "identity_claim_evidence_independently_reproduced",
      "local_principal_binding_established_before_private_reads",
      "observed_identity_kept_separate_from_principal_id",
      "live_presence_observation_observed",
    ] as const),
    livePresencePresentation: "withheld_no_live_observation_performed",
    satisfiedChecks: Object.freeze([
      "desk_source_contract_commit_identity_bound",
      "presence_projection_structurally_admissible",
      "observation_candidate_fresh_and_well_formed",
    ] as const),
    unsatisfiedChecks: Object.freeze([
      "channel_ceremony_fully_satisfied",
    ] as const),
    ...refusedPosture,
  }) satisfies PondAgentPresenceLiveObservationAdmissionAssessment,
}) satisfies PondStageDP4LiveObservationAdmissionFixtureEntry;

export const stageDP4LiveObservationAdmissionMatrix: readonly PondStageDP4LiveObservationAdmissionFixtureEntry[] =
  Object.freeze([
    stageDP4LiveObservationAdmissionReady,
    stageDP4LiveObservationAdmissionNotReady,
  ]);

// Compile-time fixture invariants: readiness is structural only — even the
// ready arm withholds the live presence presentation and performs no
// observation.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP4FixtureInvariant_ReadyArmPendingActualObservation =
  Assert<
    Equal<
      [
        typeof stageDP4LiveObservationAdmissionReady["assessment"]["readinessState"],
        typeof stageDP4LiveObservationAdmissionReady["assessment"]["livePresencePresentation"],
      ],
      [
        "structurally_ready_pending_actual_observation",
        "withheld_no_live_observation_performed",
      ]
    >
  >;
export type PondStageDP4FixtureInvariant_NotReadyArmStateLiteral = Assert<
  Equal<
    typeof stageDP4LiveObservationAdmissionNotReady["assessment"]["readinessState"],
    "not_ready"
  >
>;
export type PondStageDP4FixtureInvariant_MappedPairExact = Assert<
  Equal<
    typeof stageDP4LiveObservationAdmissionReady["assessment"]["mappedDp0SatisfiedChecks"],
    readonly ["exact_source_contract_identity", "receiver_owned_presence_observation_channel"]
  >
>;