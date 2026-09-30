// Stage D-P15: the live session read gate — single-principal structural
// reads, live-activated.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/evidence-activation-contract.md L109
// (an authority-affecting activation boundary requires verification that
// is "current, applicable to the production subject, and independently
// inspected"), L49-55 (completion evidence does not answer "Should this
// capability be activated?"), and L126 (an activation is not
// automatically evidence of an authority grant); contracts/
// trusted-channel-separation-contract.md L100 ("The request is not
// itself the grant") and L47; contracts/agent-identity-and-specialist-
// admission-contract.md L75, L112 ("Declared capability is not granted
// capability"), L118 (no authority inheritance), L173 ("Agent-to-agent
// communication is a later contract"); contracts/delegated-authority-
// and-capability-grant-contract.md L434-442 ("Expiry affects future
// authority. Historical evidence remains historical."); blueprints/
// community-agent-fabric.md L260, L449-451 (consequence-bearing
// collaboration is a later boundary).
//
// What the gate is honest about. The gate does NOT perform a record
// read: no store exists in this app. What it activates is the live use
// of the already-closed structural read postures — the receiver's
// single-principal structural records — for the current session. Its
// positive state is a live-wiring posture (`readGateReadUsePosture`:
// live use, not a performed read), and the D-P14 collaborative read
// does NOT ride this session: a widening to live multi-principal reads
// needs its own explicit receiver ceremony. The establishment leg and
// the frozen D-P10 activation are re-run at every assessment through
// this gate's own seam (evidence-activation L109 — the independent
// inspection IS the re-run); a stale or retracted session refuses with
// the establishment echo readable through the broken leg.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type { PondLiveSessionEstablishmentAssessment } from "./pond-live-session-establishment.js";
import { assessPondLiveSessionEstablishment } from "./pond-live-session-establishment.ts";
import type { PondPrivateReadActivationAssessment } from "./pond-private-read-activation.js";
import { assessPondPrivateReadActivation } from "./pond-private-read-activation.ts";
import { POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS } from "./pond-live-session-establishment.ts";

export type PondLiveSessionReadGateBasis =
  | "receiver_session_scoped_structural_read_live_use_not_inferred"
  // Valid-but-unsatisfied fail-closed literals: the session establishment
  // is not evidence that a read gate is open (evidence-activation L49-55),
  // and no collaborative activation widens it into this gate.
  | "inferred_from_live_session_establishment"
  | "inferred_from_collaborative_activation";

export interface PondLiveSessionReadGateMetadata {
  readonly opened_at_epoch_ms: number;
  readonly freshness_basis: "gate_open_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

export interface PondLiveSessionReadGateRecord {
  readonly contractVersion: "pond-live-session-read-gate-d-p15";
  readonly kind: "pond-live-session-read-gate";
  readonly principalRef: string;
  readonly readGateBasis: PondLiveSessionReadGateBasis;
  readonly requestedReadScope:
    | "single_principal_own_structural_records"
    | "collaborative_multi_principal_read";
  readonly readGateMetadata: PondLiveSessionReadGateMetadata;
  readonly readGateReadUsePosture: "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here";
  readonly collaborativeScopePosture:
    | "not_included_collaborative_requires_their_own_live_session_lane"
    | "collaborative_widening_attempted_refused";
  readonly agentScopePosture: "no_agent_session_no_agent_secret_no_agent_admission";
  readonly memoryLaneExclusionPosture: "read_gate_excludes_memory_narrative_transcript_lanes";
  readonly authorityPosture: "read_gate_grants_no_authority_membership_or_capability";
  readonly authority: "none";
}

// Receiver-owned read-gate checks. A check is satisfied only when the
// record's own receiver-owned literal carries, or the re-run leg it
// names is fresh and positive.
export type PondLiveSessionReadGateCheck =
  | "read_gate_record_well_formed"
  | "read_gate_bound_to_receiver_held_principal"
  | "read_gate_basis_receiver_owned_and_single_principal"
  | "live_session_establishment_reverified_positive_and_fresh"
  | "frozen_private_read_structural_activation_independently_reinspected_active"
  | "read_gate_refuses_memory_lanes_collaborative_widening_and_agent_reach";

export interface PondLiveSessionReadGateInput {
  readonly readGateRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly establishmentRecord: unknown;
  readonly dp5CeremonyRecord: unknown;
  readonly dp6ObservationRecord: unknown;
  readonly dp8VerifierRecord: unknown;
  readonly dp8ProofRecord: unknown;
  readonly dp9IssuanceRecord: unknown;
  readonly dp9MappingRecord: unknown;
  readonly dp10ActivationRecord: unknown;
  readonly receiverRetractionRecord: unknown;
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export interface PondLiveSessionReadGateAssessment {
  readonly contractVersion: "pond-live-session-read-gate-d-p15";
  readonly readGateRecordVersion: "pond-live-session-read-gate-d-p15" | "invalid";
  readonly assessmentKind: "deterministic_supplied_live_session_read_gate";
  readonly liveSessionReadGateState:
    | "no_active_live_session"
    | "live_session_scoped_single_principal_structural_reads_live_activated";
  readonly reason:
    // The establishment leg re-runs the frozen D-P10 gate itself, so a
    // frozen-activation breakage refuses at the establishment check below
    // — its frozen refusal literal stays readable verbatim in the mapped
    // echo (mappedDp10Reason), which is where this diagnosis belongs. No
    // defensive ladder literal exists for it.
    | "read_gate_record_invalid"
    | "live_session_not_established_refused_or_not_fresh"
    | "collaborative_or_agent_scope_refused"
    | "receiver_read_gate_proof_incomplete"
    | "all_read_gate_checks_satisfied";
  readonly readGateFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // Mapped echo fields: the session establishment leg (re-run through
  // this contract's own seam) and the frozen D-P10 activation, carrying
  // the frozen literals verbatim, on every arm.
  readonly mappedLiveSessionEstablishmentState: PondLiveSessionEstablishmentAssessment["sessionEstablishmentState"];
  readonly mappedLiveSessionEstablishmentReason: PondLiveSessionEstablishmentAssessment["reason"];
  readonly mappedDp10ActivationState: PondPrivateReadActivationAssessment["activationState"];
  readonly mappedDp10Reason: PondPrivateReadActivationAssessment["reason"];
  readonly mappedDp10SessionScopePosture: PondPrivateReadActivationAssessment["sessionScopePosture"];
  readonly satisfiedChecks: readonly PondLiveSessionReadGateCheck[];
  readonly unsatisfiedChecks: readonly PondLiveSessionReadGateCheck[];
  // The all-false ceiling: the read gate opens nothing beyond the live
  // use of the already-closed structural read postures — no grant, no
  // write/send/sign, no content or memory access, no credential, no
  // authority — and never claims current truth or an agent reach.
  readonly readGateEstablishesGrant: false;
  readonly readGateEstablishesWriteSendOrSignCapability: false;
  readonly readGateEstablishesContentOrMemoryAccess: false;
  readonly sessionGrantsAgentAccess: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const readGateChecks = Object.freeze([
  "read_gate_record_well_formed",
  "read_gate_bound_to_receiver_held_principal",
  "read_gate_basis_receiver_owned_and_single_principal",
  "live_session_establishment_reverified_positive_and_fresh",
  "frozen_private_read_structural_activation_independently_reinspected_active",
  "read_gate_refuses_memory_lanes_collaborative_widening_and_agent_reach",
] as const satisfies readonly PondLiveSessionReadGateCheck[]);

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

const wellFormedPrincipalRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("principal:") &&
  value.length > "principal:".length;

const safeNonNegativeInteger = (value: unknown): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0;

// The D-P2 freshness diagnosis over the read-gate open event, with the
// same ordering and literals; the fresh boundary is inclusive.
const diagnoseGateFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.opened_at_epoch_ms) ||
    checked.freshness_basis !== "gate_open_event_time_only" ||
    checked.currentness_posture !== "not_established_consumer_must_evaluate"
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
  const openedAt = checked.opened_at_epoch_ms as number;
  if (openedAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - openedAt;
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

const validReadGateRecord = (value: unknown): boolean => {
  const readGate = record(value);
  const metadata = record(readGate?.readGateMetadata);
  return (
    readGate !== null &&
    exactKeys(readGate, [
      "contractVersion",
      "kind",
      "principalRef",
      "readGateBasis",
      "requestedReadScope",
      "readGateMetadata",
      "readGateReadUsePosture",
      "collaborativeScopePosture",
      "agentScopePosture",
      "memoryLaneExclusionPosture",
      "authorityPosture",
      "authority",
    ]) &&
    readGate.contractVersion === "pond-live-session-read-gate-d-p15" &&
    readGate.kind === "pond-live-session-read-gate" &&
    wellFormedPrincipalRef(readGate.principalRef) &&
    [
      "receiver_session_scoped_structural_read_live_use_not_inferred",
      "inferred_from_live_session_establishment",
      "inferred_from_collaborative_activation",
    ].includes(String(readGate.readGateBasis)) &&
    [
      "single_principal_own_structural_records",
      "collaborative_multi_principal_read",
    ].includes(String(readGate.requestedReadScope)) &&
    metadata !== null &&
    exactKeys(metadata, [
      "opened_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadata.opened_at_epoch_ms) &&
    metadata.freshness_basis === "gate_open_event_time_only" &&
    metadata.currentness_posture ===
      "not_established_consumer_must_evaluate" &&
    readGate.readGateReadUsePosture ===
      "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here" &&
    [
      "not_included_collaborative_requires_their_own_live_session_lane",
      "collaborative_widening_attempted_refused",
    ].includes(String(readGate.collaborativeScopePosture)) &&
    readGate.agentScopePosture ===
      "no_agent_session_no_agent_secret_no_agent_admission" &&
    readGate.memoryLaneExclusionPosture ===
      "read_gate_excludes_memory_narrative_transcript_lanes" &&
    readGate.authorityPosture ===
      "read_gate_grants_no_authority_membership_or_capability" &&
    readGate.authority === "none" &&
    !hasForbiddenKey(readGate, POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS)
  );
};

const readGateAssessment = (
  reason: PondLiveSessionReadGateAssessment["reason"],
  readGateRecordVersion: PondLiveSessionReadGateAssessment["readGateRecordVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedEstablishment: PondMappedEstablishmentEcho,
  mappedDp10: PondMappedDp10Echo,
  satisfiedChecks: readonly PondLiveSessionReadGateCheck[],
  unsatisfiedChecks: readonly PondLiveSessionReadGateCheck[],
): PondLiveSessionReadGateAssessment => {
  const opened = reason === "all_read_gate_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-live-session-read-gate-d-p15",
    readGateRecordVersion,
    assessmentKind: "deterministic_supplied_live_session_read_gate",
    liveSessionReadGateState: opened
      ? "live_session_scoped_single_principal_structural_reads_live_activated"
      : "no_active_live_session",
    reason,
    readGateFreshnessDiagnosis: diagnosis,
    mappedLiveSessionEstablishmentState: mappedEstablishment.state,
    mappedLiveSessionEstablishmentReason: mappedEstablishment.reason,
    mappedDp10ActivationState: mappedDp10.state,
    mappedDp10Reason: mappedDp10.reason,
    mappedDp10SessionScopePosture: mappedDp10.scopePosture,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    readGateEstablishesGrant: false,
    readGateEstablishesWriteSendOrSignCapability: false,
    readGateEstablishesContentOrMemoryAccess: false,
    sessionGrantsAgentAccess: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

interface PondMappedEstablishmentEcho {
  readonly state: PondLiveSessionEstablishmentAssessment["sessionEstablishmentState"];
  readonly reason: PondLiveSessionEstablishmentAssessment["reason"];
}

interface PondMappedDp10Echo {
  readonly state: PondPrivateReadActivationAssessment["activationState"];
  readonly reason: PondPrivateReadActivationAssessment["reason"];
  readonly scopePosture: PondPrivateReadActivationAssessment["sessionScopePosture"];
}

export function assessPondLiveSessionReadGate(
  input: PondLiveSessionReadGateInput,
): PondLiveSessionReadGateAssessment {
  // The echoes are computed on every arm, through broken legs too: the
  // establishment leg (re-run through this gate's own seam) and the
  // frozen D-P10 activation stay readable even when the gate refuses.
  const establishmentLeg = assessPondLiveSessionEstablishment({
    establishmentRecord: input.establishmentRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp6ObservationRecord: input.dp6ObservationRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    dp10ActivationRecord: input.dp10ActivationRecord,
    receiverRetractionRecord: input.receiverRetractionRecord,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  });
  const dp10Leg = assessPondPrivateReadActivation({
    activationRecord: input.dp10ActivationRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  });
  const mappedEstablishment: PondMappedEstablishmentEcho = {
    state: establishmentLeg.sessionEstablishmentState,
    reason: establishmentLeg.reason,
  };
  const mappedDp10: PondMappedDp10Echo = {
    state: dp10Leg["activationState"],
    reason: dp10Leg.reason,
    scopePosture: dp10Leg["sessionScopePosture"],
  };
  const fallbackDiagnosis = diagnoseGateFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validReadGateRecord(input.readGateRecord))
    return readGateAssessment(
      "read_gate_record_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedEstablishment,
      mappedDp10,
      [],
      readGateChecks,
    );
  const readGate = input.readGateRecord as Record<string, unknown>;

  // The gate's own freshness first, then the legs (mirroring the
  // establishment ladder: a closed or stale gate refuses before the legs
  // are read, and the echoes stay readable).
  const ownDiagnosis = diagnoseGateFreshness(
    readGate.readGateMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (ownDiagnosis.state !== "fresh" || establishmentLeg.sessionEstablishmentState !== "live_session_scoped_authentication_established")
    return readGateAssessment(
      "live_session_not_established_refused_or_not_fresh",
      "pond-live-session-read-gate-d-p15",
      ownDiagnosis,
      mappedEstablishment,
      mappedDp10,
      [],
      readGateChecks,
    );
  const values = [
    wellFormedPrincipalRef(readGate.principalRef),
    wellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
      readGate.principalRef === input.receiverHeldPrincipalRef,
    readGate.readGateBasis ===
      "receiver_session_scoped_structural_read_live_use_not_inferred" &&
      readGate.requestedReadScope === "single_principal_own_structural_records",
    establishmentLeg.sessionEstablishmentState ===
      "live_session_scoped_authentication_established",
    dp10Leg["activationState"] ===
      "fixture_structural_session_scoped_private_read_activation",
    readGate.requestedReadScope ===
      "single_principal_own_structural_records" &&
      readGate.collaborativeScopePosture ===
        "not_included_collaborative_requires_their_own_live_session_lane" &&
      readGate.agentScopePosture ===
        "no_agent_session_no_agent_secret_no_agent_admission" &&
      readGate.memoryLaneExclusionPosture ===
        "read_gate_excludes_memory_narrative_transcript_lanes",
  ];
  const satisfied = readGateChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = readGateChecks.filter(
    (_, index) => values[index] !== true,
  );
  if (!values[5])
    return readGateAssessment(
      "collaborative_or_agent_scope_refused",
      "pond-live-session-read-gate-d-p15",
      ownDiagnosis,
      mappedEstablishment,
      mappedDp10,
      [],
      readGateChecks,
    );
  return readGateAssessment(
    unsatisfied.length === 0
      ? "all_read_gate_checks_satisfied"
      : "receiver_read_gate_proof_incomplete",
    "pond-live-session-read-gate-d-p15",
    ownDiagnosis,
    mappedEstablishment,
    mappedDp10,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The read gate opens nothing
// beyond the live use of the already-closed structural read postures.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP15Invariant_ReadGateChecksExact = Assert<
  Equal<
    PondLiveSessionReadGateCheck,
    | "read_gate_record_well_formed"
    | "read_gate_bound_to_receiver_held_principal"
    | "read_gate_basis_receiver_owned_and_single_principal"
    | "live_session_establishment_reverified_positive_and_fresh"
    | "frozen_private_read_structural_activation_independently_reinspected_active"
    | "read_gate_refuses_memory_lanes_collaborative_widening_and_agent_reach"
  >
>;
export type PondStageDP15Invariant_ReadGateStatesExact = Assert<
  Equal<
    PondLiveSessionReadGateAssessment["liveSessionReadGateState"],
    "no_active_live_session" | "live_session_scoped_single_principal_structural_reads_live_activated"
  >
>;
export type PondStageDP15Invariant_ReadGateReasonsExact = Assert<
  Equal<
    PondLiveSessionReadGateAssessment["reason"],
    | "read_gate_record_invalid"
    | "live_session_not_established_refused_or_not_fresh"
    | "collaborative_or_agent_scope_refused"
    | "receiver_read_gate_proof_incomplete"
    | "all_read_gate_checks_satisfied"
  >
>;
export type PondStageDP15Invariant_ReadGateNeverBecomesGrantWriteMemoryOrAuthority =
  Assert<
    Equal<
      [
        PondLiveSessionReadGateAssessment["readGateEstablishesGrant"],
        PondLiveSessionReadGateAssessment["readGateEstablishesWriteSendOrSignCapability"],
        PondLiveSessionReadGateAssessment["readGateEstablishesContentOrMemoryAccess"],
        PondLiveSessionReadGateAssessment["sessionGrantsAgentAccess"],
        PondLiveSessionReadGateAssessment["credentialAdmitted"],
        PondLiveSessionReadGateAssessment["principalIdAcceptedAsAuthorization"],
        PondLiveSessionReadGateAssessment["personalMemoryContentAdmitted"],
        PondLiveSessionReadGateAssessment["currentTruthAdmitted"],
        PondLiveSessionReadGateAssessment["runtimeActivationPosture"],
        PondLiveSessionReadGateAssessment["authority"],
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        "not_included",
        "none",
      ]
    >
  >;
export type PondStageDP15Invariant_NoForbiddenReadGateRecordKeys = Assert<
  HasAnyKey<PondLiveSessionReadGateRecord, (typeof POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP15Invariant_NoForbiddenReadGateAssessmentKeys = Assert<
  HasAnyKey<PondLiveSessionReadGateAssessment, (typeof POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS)[number]> extends false
    ? true
    : false
>;