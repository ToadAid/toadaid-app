// Stage D-P23: the performed collaborative-live-read admission decision.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): this is the performed rung of the collaborative live
// read lane — the receiver records ONE live collaborative-read admission
// over a currently recorded session request, and its reason ladder re-runs
// — through its own seams, never by inherited verdict (evidence-activation
// L109: verification must be "current, applicable to the production
// subject, and independently inspected") — four frozen ceremonies over
// the SAME legs: the contract-1 collaborative-read-session request
// ceremony, the frozen D-P15 live-session read gate, the frozen D-P14
// collaborative-read activation gate, and the frozen D-P14 collaborative
// read admission. All four re-run unchanged; the lane owns only its own
// state vocabulary, its own ladder, and its own mapped echoes.
//
// The receiver legs ride the held D-P15 session (the same D-P5/D-P6/
// D-P8/D-P9/D-P10 chain the gate holds). The counterpart legs are
// STRUCTURAL and NEVER-ISSUED — no live counterpart authentication exists
// anywhere in this lane: the counterpart chain rides the D-P14
// never-issued pins (a claimed-issued issuance record that greens through
// the frozen assessor is refused here by the chain re-run's own pin, the
// no-second-identity widening proof — now proven over live receiver
// legs). No record content is read by any arm of this contract: the
// admitted surface is the frozen D-P14 13-label structural target table,
// and the admission is an ADMISSION of structural records to inspect —
// not a read result, not content, not truth (the current-truth ceiling
// stays closed; the D-P14 truth posture re-records verbatim).
//
// Scope law: no Release is recorded anywhere in this lane (scope-sov
// L104/L174-187); the explicit shared scope IS the receiver-recorded
// request plus the declared D-P14 join pair — no scope object, no
// membership registry (the object-form mint is refused at the inventory
// level). The audience is the exact declared counterpart set of the join
// (scope-sov L52-60), never an ad-hoc pair, never a third ref. ERC-8004
// is evidence only (attestation L419-427). Shared membership grants no
// capability, credential view, delivery right, or administrator role
// (scope-sov L72-79). Law silence on live-session semantics for more
// than one principal: see contract-1's recorded-law-silences commentary;
// every literal below is a receiver-recorded app-side decision
// exercising refusal law.
//
// The shared-pair rule: ONE evaluation pair (evaluatedAtEpochMs /
// maximumAgeMs) serves every seam this contract re-runs — the D-P14 chain
// re-runs take the pair under those names, and the frozen D-P15 gate
// re-run takes the SAME instants projected into its
// `receiverEvaluatedAtEpochMs` / `receiverMaximumAgeMs` input names. A
// shared-pair disagreement is structurally impossible, so no dedicated
// refusal cause exists for one.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type {
  PondLiveSessionReadGateAssessment,
} from "./pond-live-session-read-gate.js";
import {
  assessPondLiveSessionReadGate,
} from "./pond-live-session-read-gate.ts";
import type {
  PondCollaborativeReadActivationAssessment,
  PondCollaborativeReadPrincipalChainMapped,
} from "./pond-collaborative-read-activation.js";
import {
  assessPondCollaborativeReadActivation,
} from "./pond-collaborative-read-activation.ts";
import type {
  PondCollaborativeReadAdmissionAssessment,
} from "./pond-collaborative-read-admission.js";
import {
  assessPondCollaborativeReadAdmission,
} from "./pond-collaborative-read-admission.ts";
import type {
  PondCollaborativeReadSessionRequestDecisionAssessment,
} from "./pond-collaborative-read-session-request-decision.js";
import {
  assessPondCollaborativeReadSessionRequestDecision,
  POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS,
} from "./pond-collaborative-read-session-request-decision.ts";

// The performed-collaborative-live-read basis vocabulary: one true
// receiver-performed basis and five refused bases. A performed
// collaborative live read is a current stance of the receiving side —
// nothing in a structural chain's completion, a counterpart's presence,
// the two single-principal activations, or the counterpart's own claim
// may perform it here. The derived-from-single-principal refusals carry
// the D-P14 gate's own basis refusals (the two single-principal
// activations existing does not perform the collaborative one —
// completion never answers whether to widen).
export type PondCollaborativeLiveReadBasis =
  | "receiver_performed_collaborative_live_read_not_inferred"
  | "derived_from_single_principal_activations"
  | "inferred_from_counterpart_presence"
  | "inferred_from_structural_chain_readiness"
  | "asserted_by_counterpart"
  | "replayed_from_prior_collaborative_live_read";

// The receiver-recorded collaborative-live-read event metadata: the
// admission event's own time source, its freshness basis (event time only
// — the D-P2 ordering), and the explicit currentness posture: a recorded
// live read is NOT established — every consumer must evaluate.
export interface PondCollaborativeLiveReadEventMetadata {
  readonly collaborative_live_read_recorded_at_epoch_ms: number;
  readonly freshness_basis: "collaborative_live_read_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

// The receiver-performed collaborative-live-read admission record: 17
// exact keys — the lane's own decision record over the frozen D-P14
// records it re-runs (which ride in the input, never INSIDE this record:
// a D-P14 record nested here would be inventory-refused by the deep
// walk).
export interface PondCollaborativeReadLiveAdmissionRecord {
  readonly contractVersion: "pond-collaborative-read-live-admission-decision-d-p23";
  readonly kind: "pond-collaborative-read-live-admission";
  readonly receiverHeldPrincipalRef: string;
  readonly counterpartPrincipalRef: string;
  readonly collaborativeLiveReadBasis: PondCollaborativeLiveReadBasis;
  readonly collaborativeLiveReadMetadata: PondCollaborativeLiveReadEventMetadata;
  readonly requestedCollaborativeReadScope: "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory";
  readonly audienceBindingPosture: "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix";
  readonly counterpartChainPosture: "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists";
  readonly scopeCrossingPosture: "no_scope_crossing_no_release_recorded_memory_never_crosses";
  readonly scopeObjectPosture: "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership";
  readonly truthPosture: "structural_presence_only_no_current_truth_claim";
  readonly sessionScopePosture:
    | "not_established"
    | "session_scoped_receiver_restart_ends_the_live_read";
  readonly revocabilityPosture:
    | "not_established"
    | "live_read_revocable_by_receiver_retraction";
  readonly erc8004EvidencePosture: "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission";
  readonly authorityPosture: "the_live_read_admission_grants_no_authority_membership_or_capability";
  readonly authority: "none";
}

// Receiver-owned collaborative-live-read checks: the lane's own four
// declarative checks plus the six re-run checks (the request ceremony,
// the independent gate re-inspection, the frozen D-P14 activation, the
// frozen D-P14 admission, and the event's scope and own freshness).
export type PondCollaborativeLiveReadCheck =
  | "collaborative_live_read_record_well_formed"
  | "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals"
  | "collaborative_live_read_basis_receiver_performed_not_inferred"
  | "collaborative_read_request_currently_recorded_reassessed"
  | "live_session_read_gate_reinspected_live_activated_and_fresh"
  | "frozen_dp14_collaborative_activation_reinspected_activated"
  | "frozen_dp14_collaborative_admission_reinspected_admitted"
  | "collaborative_live_read_event_within_current_session_scope"
  | "collaborative_live_read_event_own_freshness_within_declared_maximum_age"
  | "collaborative_live_read_refusal_postures_complete";

// The live-admission decision input: 26 exact keys — the contract-1
// request ceremony's 15 (the request, the declared join, the 13 frozen
// gate legs) plus the two declared refs by name, the frozen D-P14-shaped
// activation and admission records, and the counterpart's seven
// structural never-issued legs. No counterpart retraction slot exists —
// the counterpart carries no session retraction anywhere in the D-P14
// input and none is minted here.
export interface PondCollaborativeReadLiveAdmissionDecisionInput {
  readonly collaborativeReadLiveAdmission: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly counterpartPrincipalRef: unknown;
  readonly collaborativeReadSessionRequest: unknown;
  readonly counterpartJoinDeclarationRecord: unknown;
  readonly collaborativeActivationRecord: unknown;
  readonly readAdmissionRecord: unknown;
  readonly readGateRecord: unknown;
  readonly establishmentRecord: unknown;
  readonly dp5CeremonyRecord: unknown;
  readonly dp6ObservationRecord: unknown;
  readonly dp8VerifierRecord: unknown;
  readonly dp8ProofRecord: unknown;
  readonly dp9IssuanceRecord: unknown;
  readonly dp9MappingRecord: unknown;
  readonly dp10ActivationRecord: unknown;
  readonly receiverRetractionRecord: unknown;
  readonly counterpartDp5CeremonyRecord: unknown;
  readonly counterpartDp6ObservationRecord: unknown;
  readonly counterpartDp8VerifierRecord: unknown;
  readonly counterpartDp8ProofRecord: unknown;
  readonly counterpartDp9IssuanceRecord: unknown;
  readonly counterpartDp9MappingRecord: unknown;
  readonly counterpartDp10ActivationRecord: unknown;
  readonly evaluatedAtEpochMs: unknown;
  readonly maximumAgeMs: unknown;
}

export const POND_STAGE_DP23_COLLABORATIVE_READ_LIVE_ADMISSION_DECISION_INPUT_KEYS =
  Object.freeze(
    [
      "collaborativeReadLiveAdmission",
      "receiverHeldPrincipalRef",
      "counterpartPrincipalRef",
      "collaborativeReadSessionRequest",
      "counterpartJoinDeclarationRecord",
      "collaborativeActivationRecord",
      "readAdmissionRecord",
      "readGateRecord",
      "establishmentRecord",
      "dp5CeremonyRecord",
      "dp6ObservationRecord",
      "dp8VerifierRecord",
      "dp8ProofRecord",
      "dp9IssuanceRecord",
      "dp9MappingRecord",
      "dp10ActivationRecord",
      "receiverRetractionRecord",
      "counterpartDp5CeremonyRecord",
      "counterpartDp6ObservationRecord",
      "counterpartDp8VerifierRecord",
      "counterpartDp8ProofRecord",
      "counterpartDp9IssuanceRecord",
      "counterpartDp9MappingRecord",
      "counterpartDp10ActivationRecord",
      "evaluatedAtEpochMs",
      "maximumAgeMs",
    ] as const,
  );

// The collaborative-live-read admission decision assessment.
export interface PondCollaborativeReadLiveAdmissionDecisionAssessment {
  readonly contractVersion: "pond-collaborative-read-live-admission-decision-d-p23";
  readonly collaborativeLiveReadDecisionVersion:
    | "pond-collaborative-read-live-admission-decision-d-p23"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_collaborative_live_read_admission_decision";
  readonly collaborativeLiveReadState:
    | "collaborative_live_read_not_recorded"
    | "collaborative_live_structural_records_read_admitted_session_scoped_no_scope_object_no_content";
  readonly reason:
    | "collaborative_live_read_record_invalid"
    | "live_session_read_gate_not_currently_live"
    | "collaborative_read_request_not_currently_recorded"
    | "frozen_dp14_receiver_chain_not_ready_or_current"
    | "counterpart_chain_refused_structural_never_issued_or_not_current"
    | "frozen_dp14_collaborative_activation_not_session_current"
    | "frozen_dp14_admission_refused"
    | "collaborative_live_read_event_not_of_the_current_session_scope"
    | "collaborative_live_read_event_not_session_current"
    | "receiver_collaborative_live_read_proof_incomplete"
    | "all_collaborative_live_read_checks_satisfied";
  readonly collaborativeLiveReadEventFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // Mapped echo fields: every re-run's own fields carried verbatim on
  // every arm, computed before any cause is chosen — the request
  // ceremony's state/reason/diagnosis, the independent gate re-run's
  // state/reason/diagnosis, the frozen D-P14 activation's state/reason,
  // BOTH frozen per-principal chain echoes WHOLE (typed to the frozen
  // chain-mapped interface, so a frozen-field drift is a compile error),
  // the frozen D-P14 admission's state/reason, and the admitted target
  // refs the frozen admission carried (empty unless admitted).
  readonly mappedCollaborativeReadRequestState: PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadSessionRequestState"];
  readonly mappedReadRequestReassessmentReason: PondCollaborativeReadSessionRequestDecisionAssessment["reason"];
  readonly mappedReadRequestFreshnessDiagnosis: PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestEventFreshnessDiagnosis"];
  readonly mappedReadGateState: PondLiveSessionReadGateAssessment["liveSessionReadGateState"];
  readonly mappedReadGateReassessmentReason: PondLiveSessionReadGateAssessment["reason"];
  readonly mappedReadGateFreshnessDiagnosis: PondLiveSessionReadGateAssessment["readGateFreshnessDiagnosis"];
  readonly mappedDp14ActivationState: PondCollaborativeReadActivationAssessment["collaborativeReadActivationState"];
  readonly mappedDp14ActivationReason: PondCollaborativeReadActivationAssessment["reason"];
  readonly mappedDp14ReceiverChain: PondCollaborativeReadPrincipalChainMapped;
  readonly mappedDp14CounterpartChain: PondCollaborativeReadPrincipalChainMapped;
  readonly mappedDp14AdmissionState: PondCollaborativeReadAdmissionAssessment["collaborativeReadAdmissionState"];
  readonly mappedDp14AdmissionReason: PondCollaborativeReadAdmissionAssessment["reason"];
  readonly recordedAdmittedTargetRefs: readonly string[];
  readonly satisfiedChecks: readonly PondCollaborativeLiveReadCheck[];
  readonly unsatisfiedChecks: readonly PondCollaborativeLiveReadCheck[];
  // The retention posture: the performed live read is module state of
  // process lifetime with no indefinite retention, and it re-assesses
  // honestly after retraction — the D-P20 governance posture.
  readonly collaborativeLiveReadRetentionPosture: "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction";
  // The all-false ceiling: a performed collaborative live read is an
  // admitted structural-records inspection scope, nothing more. It never
  // establishes content or a read result, a scope object or membership
  // registry, a live counterpart or chain, agent identity or admission,
  // a grant, consequence or execution, authority from prose, membership
  // or room presence, or a scope; it never crosses a scope or admits
  // personal (memory) state from either principal; it accepts no ERC-8004
  // identity as a PrincipalId; and it admits no credential and no
  // current truth.
  readonly collaborativeLiveReadEstablishesReadResultOrContent: false;
  readonly collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry: false;
  readonly collaborativeLiveReadEstablishesLiveCounterpartOrChain: false;
  readonly collaborativeLiveReadEstablishesAgentIdentityOrAdmission: false;
  readonly collaborativeLiveReadEstablishesGrant: false;
  readonly collaborativeLiveReadEstablishesConsequenceOrExecution: false;
  readonly collaborativeLiveReadEstablishesAuthorityFromProse: false;
  readonly collaborativeLiveReadEstablishesMembershipOrRoomPresence: false;
  readonly collaborativeLiveReadEstablishesScope: false;
  readonly collaborativeLiveReadCrossesScopeOrAdmitsPersonalState: false;
  readonly collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent: false;
  readonly collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId: false;
  readonly collaborativeLiveReadConsumedThisCut: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const collaborativeLiveReadChecks = Object.freeze([
  "collaborative_live_read_record_well_formed",
  "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
  "collaborative_live_read_basis_receiver_performed_not_inferred",
  "collaborative_read_request_currently_recorded_reassessed",
  "live_session_read_gate_reinspected_live_activated_and_fresh",
  "frozen_dp14_collaborative_activation_reinspected_activated",
  "frozen_dp14_collaborative_admission_reinspected_admitted",
  "collaborative_live_read_event_within_current_session_scope",
  "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
  "collaborative_live_read_refusal_postures_complete",
] as const satisfies readonly PondCollaborativeLiveReadCheck[]);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object" && !Array.isArray(value)
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

// The D-P2 freshness diagnosis, reimplemented with the same ordering and
// literals over the live-read-event metadata: metadata, then evaluation
// time, then maximum age, then future time; the fresh boundary is
// inclusive. A diagnosis is a diagnosis, never an admission.
const diagnoseCollaborativeLiveReadFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(
      checked.collaborative_live_read_recorded_at_epoch_ms,
    ) ||
    checked.freshness_basis !== "collaborative_live_read_event_time_only" ||
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
  const collaborativeLiveReadRecordedAt = checked[
    "collaborative_live_read_recorded_at_epoch_ms"
  ] as number;
  if (collaborativeLiveReadRecordedAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - collaborativeLiveReadRecordedAt;
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

const collaborativeLiveReadBasisVocabulary = [
  "receiver_performed_collaborative_live_read_not_inferred",
  "derived_from_single_principal_activations",
  "inferred_from_counterpart_presence",
  "inferred_from_structural_chain_readiness",
  "asserted_by_counterpart",
  "replayed_from_prior_collaborative_live_read",
];

// The ten declarative-refusal posture fields.
const posturesComplete = (recordValue: Record<string, unknown>) =>
  recordValue.requestedCollaborativeReadScope ===
    "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory" &&
  recordValue.audienceBindingPosture ===
    "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix" &&
  recordValue.counterpartChainPosture ===
    "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists" &&
  recordValue.scopeCrossingPosture ===
    "no_scope_crossing_no_release_recorded_memory_never_crosses" &&
  recordValue.scopeObjectPosture ===
    "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership" &&
  recordValue.truthPosture ===
    "structural_presence_only_no_current_truth_claim" &&
  recordValue.sessionScopePosture ===
    "session_scoped_receiver_restart_ends_the_live_read" &&
  recordValue.revocabilityPosture ===
    "live_read_revocable_by_receiver_retraction" &&
  recordValue.erc8004EvidencePosture ===
    "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission" &&
  recordValue.authorityPosture ===
    "the_live_read_admission_grants_no_authority_membership_or_capability";

const exactCollaborativeLiveReadEventMetadata = (value: unknown): boolean => {
  const metadataValue = record(value);
  return (
    metadataValue !== null &&
    exactKeys(metadataValue, [
      "collaborative_live_read_recorded_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(
      metadataValue.collaborative_live_read_recorded_at_epoch_ms,
    ) &&
    metadataValue.freshness_basis ===
      "collaborative_live_read_event_time_only" &&
    metadataValue.currentness_posture ===
      "not_established_consumer_must_evaluate"
  );
};

// Valid live-read-record shape only — record validity, not admission.
// The re-runs under the record are the checks' material, not this
// check's. No read result, no scope object, no live-leg claim, and no
// counterpart identity material of any kind exists anywhere on the
// record.
const validCollaborativeLiveReadRecord = (value: unknown): boolean => {
  const liveReadValue = record(value);
  return (
    liveReadValue !== null &&
    exactKeys(liveReadValue, [
      "contractVersion",
      "kind",
      "receiverHeldPrincipalRef",
      "counterpartPrincipalRef",
      "collaborativeLiveReadBasis",
      "collaborativeLiveReadMetadata",
      "requestedCollaborativeReadScope",
      "audienceBindingPosture",
      "counterpartChainPosture",
      "scopeCrossingPosture",
      "scopeObjectPosture",
      "truthPosture",
      "sessionScopePosture",
      "revocabilityPosture",
      "erc8004EvidencePosture",
      "authorityPosture",
      "authority",
    ]) &&
    liveReadValue.contractVersion ===
      "pond-collaborative-read-live-admission-decision-d-p23" &&
    liveReadValue.kind === "pond-collaborative-read-live-admission" &&
    collaborativeLiveReadBasisVocabulary.includes(
      String(liveReadValue.collaborativeLiveReadBasis),
    ) &&
    exactCollaborativeLiveReadEventMetadata(
      liveReadValue.collaborativeLiveReadMetadata,
    ) &&
    wellFormedPrincipalRef(liveReadValue.receiverHeldPrincipalRef) &&
    wellFormedPrincipalRef(liveReadValue.counterpartPrincipalRef) &&
    String(liveReadValue.receiverHeldPrincipalRef) !==
      String(liveReadValue.counterpartPrincipalRef) &&
    posturesComplete(liveReadValue) &&
    liveReadValue.authority === "none" &&
    !hasForbiddenKey(
      liveReadValue,
      POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS,
    )
  );
};

// The frozen re-run projections, each through this contract's own seam.
// All four carry the shared evaluation pair (see the header's shared-pair
// rule); no projection ever spreads the input record itself.
const fullLiveSessionGateLegs = (
  input: PondCollaborativeReadLiveAdmissionDecisionInput,
) =>
  ({
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    readGateRecord: input.readGateRecord,
    establishmentRecord: input.establishmentRecord,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp6ObservationRecord: input.dp6ObservationRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    dp10ActivationRecord: input.dp10ActivationRecord,
    receiverRetractionRecord: input.receiverRetractionRecord,
    receiverEvaluatedAtEpochMs: input.evaluatedAtEpochMs,
    receiverMaximumAgeMs: input.maximumAgeMs,
  }) as const;

const fullRequestCeremonyLegs = (
  input: PondCollaborativeReadLiveAdmissionDecisionInput,
) =>
  ({
    collaborativeReadSessionRequest: input.collaborativeReadSessionRequest,
    counterpartJoinDeclarationRecord: input.counterpartJoinDeclarationRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    readGateRecord: input.readGateRecord,
    establishmentRecord: input.establishmentRecord,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp6ObservationRecord: input.dp6ObservationRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    dp10ActivationRecord: input.dp10ActivationRecord,
    receiverRetractionRecord: input.receiverRetractionRecord,
    receiverEvaluatedAtEpochMs: input.evaluatedAtEpochMs,
    receiverMaximumAgeMs: input.maximumAgeMs,
  }) as const;

const fullDp14ActivationLegs = (
  input: PondCollaborativeReadLiveAdmissionDecisionInput,
) =>
  ({
    activationRecord: input.collaborativeActivationRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    counterpartPrincipalRef: input.counterpartPrincipalRef,
    counterpartJoinDeclarationRecord: input.counterpartJoinDeclarationRecord,
    receiverDp5CeremonyRecord: input.dp5CeremonyRecord,
    receiverDp6ObservationRecord: input.dp6ObservationRecord,
    receiverDp8VerifierRecord: input.dp8VerifierRecord,
    receiverDp8ProofRecord: input.dp8ProofRecord,
    receiverDp9IssuanceRecord: input.dp9IssuanceRecord,
    receiverDp9MappingRecord: input.dp9MappingRecord,
    receiverDp10ActivationRecord: input.dp10ActivationRecord,
    counterpartDp5CeremonyRecord: input.counterpartDp5CeremonyRecord,
    counterpartDp6ObservationRecord: input.counterpartDp6ObservationRecord,
    counterpartDp8VerifierRecord: input.counterpartDp8VerifierRecord,
    counterpartDp8ProofRecord: input.counterpartDp8ProofRecord,
    counterpartDp9IssuanceRecord: input.counterpartDp9IssuanceRecord,
    counterpartDp9MappingRecord: input.counterpartDp9MappingRecord,
    counterpartDp10ActivationRecord: input.counterpartDp10ActivationRecord,
    evaluatedAtEpochMs: input.evaluatedAtEpochMs,
    maximumAgeMs: input.maximumAgeMs,
  }) as const;

const fullDp14AdmissionLegs = (
  input: PondCollaborativeReadLiveAdmissionDecisionInput,
) =>
  ({
    readAdmissionRecord: input.readAdmissionRecord,
    collaborativeActivationRecord: input.collaborativeActivationRecord,
    counterpartJoinDeclarationRecord: input.counterpartJoinDeclarationRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    counterpartPrincipalRef: input.counterpartPrincipalRef,
  }) as const;

// The mapped echo shapes (typed to the frozen assessments so a drift is a
// compile error, values carried verbatim from their fields). Field names
// stay generic; the frozen names the echoes read are tied through
// quoted-index reads in the builder, never re-declared as this cut's own
// names and never dotted here.
interface PondMappedRequestEcho {
  readonly state: PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadSessionRequestState"];
  readonly reason: PondCollaborativeReadSessionRequestDecisionAssessment["reason"];
  readonly diagnosis: PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestEventFreshnessDiagnosis"];
}

interface PondMappedReadGateEcho {
  readonly state: PondLiveSessionReadGateAssessment["liveSessionReadGateState"];
  readonly reason: PondLiveSessionReadGateAssessment["reason"];
  readonly diagnosis: PondLiveSessionReadGateAssessment["readGateFreshnessDiagnosis"];
}

interface PondMappedDp14ActivationEcho {
  readonly state: PondCollaborativeReadActivationAssessment["collaborativeReadActivationState"];
  readonly reason: PondCollaborativeReadActivationAssessment["reason"];
}

interface PondMappedDp14AdmissionEcho {
  readonly state: PondCollaborativeReadAdmissionAssessment["collaborativeReadAdmissionState"];
  readonly reason: PondCollaborativeReadAdmissionAssessment["reason"];
}

const collaborativeLiveReadAssessment = (
  reason: PondCollaborativeReadLiveAdmissionDecisionAssessment["reason"],
  collaborativeLiveReadDecisionVersion: PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadDecisionVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedRequest: PondMappedRequestEcho,
  mappedReadGate: PondMappedReadGateEcho,
  mappedDp14Activation: PondMappedDp14ActivationEcho,
  mappedDp14ReceiverChain: PondCollaborativeReadPrincipalChainMapped,
  mappedDp14CounterpartChain: PondCollaborativeReadPrincipalChainMapped,
  mappedDp14Admission: PondMappedDp14AdmissionEcho,
  admittedTargetRefs: readonly string[],
  satisfiedChecks: readonly PondCollaborativeLiveReadCheck[],
  unsatisfiedChecks: readonly PondCollaborativeLiveReadCheck[],
): PondCollaborativeReadLiveAdmissionDecisionAssessment => {
  const recorded = reason === "all_collaborative_live_read_checks_satisfied";
  return Object.freeze({
    contractVersion:
      "pond-collaborative-read-live-admission-decision-d-p23",
    collaborativeLiveReadDecisionVersion,
    assessmentKind:
      "deterministic_supplied_collaborative_live_read_admission_decision",
    collaborativeLiveReadState: recorded
      ? "collaborative_live_structural_records_read_admitted_session_scoped_no_scope_object_no_content"
      : "collaborative_live_read_not_recorded",
    reason,
    collaborativeLiveReadEventFreshnessDiagnosis: diagnosis,
    mappedCollaborativeReadRequestState: mappedRequest.state,
    mappedReadRequestReassessmentReason: mappedRequest.reason,
    mappedReadRequestFreshnessDiagnosis: mappedRequest.diagnosis,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReassessmentReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    mappedDp14ActivationState: mappedDp14Activation.state,
    mappedDp14ActivationReason: mappedDp14Activation.reason,
    mappedDp14ReceiverChain: mappedDp14ReceiverChain,
    mappedDp14CounterpartChain: mappedDp14CounterpartChain,
    mappedDp14AdmissionState: mappedDp14Admission.state,
    mappedDp14AdmissionReason: mappedDp14Admission.reason,
    recordedAdmittedTargetRefs: Object.freeze([...admittedTargetRefs]),
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The retention posture: honest re-assessment after retraction — the
    // D-P20 governance posture (a recorded admission is session-scoped
    // stance, not frozen evidence).
    collaborativeLiveReadRetentionPosture:
      "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction" as const,
    // A performed collaborative live read is an admitted structural
    // inspection scope, nothing more (see the ceiling commentary on the
    // interface for the law anchors).
    collaborativeLiveReadEstablishesReadResultOrContent: false,
    collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry: false,
    collaborativeLiveReadEstablishesLiveCounterpartOrChain: false,
    collaborativeLiveReadEstablishesAgentIdentityOrAdmission: false,
    collaborativeLiveReadEstablishesGrant: false,
    collaborativeLiveReadEstablishesConsequenceOrExecution: false,
    collaborativeLiveReadEstablishesAuthorityFromProse: false,
    collaborativeLiveReadEstablishesMembershipOrRoomPresence: false,
    collaborativeLiveReadEstablishesScope: false,
    collaborativeLiveReadCrossesScopeOrAdmitsPersonalState: false,
    collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent: false,
    collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId: false,
    collaborativeLiveReadConsumedThisCut: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondCollaborativeReadLiveAdmissionDecision(
  input: PondCollaborativeReadLiveAdmissionDecisionInput,
): PondCollaborativeReadLiveAdmissionDecisionAssessment {
  // The fail-closed gate on the input object itself: garbage never throws
  // — a non-object input degrades to an empty record the validation and
  // re-runs refuse honestly (the D-P8 fail-closed discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondCollaborativeReadLiveAdmissionDecisionInput;
  // The echoes are computed on every arm, before any cause is chosen (the
  // D-P13 echo discipline): all four re-runs run even on arms that refuse
  // — a broken live read never unbinds the receiver's session, the
  // declared join, the request, or the frozen D-P14 spine.
  const requestReassessment = assessPondCollaborativeReadSessionRequestDecision(
    fullRequestCeremonyLegs(input),
  );
  const gateReassessment = assessPondLiveSessionReadGate(
    fullLiveSessionGateLegs(input),
  );
  const dp14ActivationReassessment = assessPondCollaborativeReadActivation(
    fullDp14ActivationLegs(input),
  );
  const dp14AdmissionReassessment = assessPondCollaborativeReadAdmission(
    fullDp14AdmissionLegs(input),
  );
  const mappedRequest: PondMappedRequestEcho = {
    state: requestReassessment["collaborativeReadSessionRequestState"],
    reason: requestReassessment["reason"],
    diagnosis: requestReassessment[
      "collaborativeReadRequestEventFreshnessDiagnosis"
    ],
  };
  const mappedReadGate: PondMappedReadGateEcho = {
    state: gateReassessment["liveSessionReadGateState"],
    reason: gateReassessment["reason"],
    diagnosis: gateReassessment["readGateFreshnessDiagnosis"],
  };
  const mappedDp14Activation: PondMappedDp14ActivationEcho = {
    state: dp14ActivationReassessment["collaborativeReadActivationState"],
    reason: dp14ActivationReassessment["reason"],
  };
  const mappedDp14ReceiverChain = dp14ActivationReassessment["receiverChain"];
  const mappedDp14CounterpartChain =
    dp14ActivationReassessment["counterpartChain"];
  const mappedDp14Admission: PondMappedDp14AdmissionEcho = {
    state: dp14AdmissionReassessment["collaborativeReadAdmissionState"],
    reason: dp14AdmissionReassessment["reason"],
  };
  const admittedTargetRefs = dp14AdmissionReassessment["admittedTargetRefs"];
  // The D-P16 fallback pattern: diagnose the raw evaluation pair even
  // when the record never becomes valid, so every arm carries an honest
  // live-read-event diagnosis.
  const fallbackDiagnosis = diagnoseCollaborativeLiveReadFreshness(
    null,
    input.evaluatedAtEpochMs,
    input.maximumAgeMs,
  );
  if (!validCollaborativeLiveReadRecord(input.collaborativeReadLiveAdmission))
    return collaborativeLiveReadAssessment(
      "collaborative_live_read_record_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks,
    );
  const liveReadValue =
    input.collaborativeReadLiveAdmission as Record<string, unknown>;
  const liveReadEventMetadata = record(
    liveReadValue["collaborativeLiveReadMetadata"],
  );
  const collaborativeLiveReadRecordedAt = liveReadEventMetadata?.[
    "collaborative_live_read_recorded_at_epoch_ms"
  ] as number | undefined;

  // The live-read event's own diagnosis first as data: the metadata is
  // valid already, so the diagnosis (fresh or not) is honest on every
  // remaining arm — but the re-runs' verdicts outrank it in the ladder.
  const liveReadDiagnosis = diagnoseCollaborativeLiveReadFreshness(
    liveReadEventMetadata,
    input.evaluatedAtEpochMs,
    input.maximumAgeMs,
  );

  // Ladder rung 2 — the INDEPENDENT gate re-run's verdict (check 5's
  // own data, not the request re-run's): a session whose read gate is
  // not currently live-activated can never carry a collaborative live
  // read, and the re-run's own reason is carried verbatim as the mapped
  // reassessment reason.
  if (
    gateReassessment["liveSessionReadGateState"] !==
    "live_session_scoped_single_principal_structural_reads_live_activated"
  )
    return collaborativeLiveReadAssessment(
      "live_session_read_gate_not_currently_live",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks,
    );

  // Ladder rung 3 — the request ceremony re-run's verdict: the live read
  // rides a CURRENTLY recorded request, and every request-run refusal
  // (record invalid, join binding, scope, or its own staleness) folds
  // here with the request re-run's own reason readable verbatim one
  // depth down.
  if (
    requestReassessment["collaborativeReadSessionRequestState"] !==
    "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read"
  )
    return collaborativeLiveReadAssessment(
      "collaborative_read_request_not_currently_recorded",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks,
    );

  // Ladder rungs 4-6 — the frozen D-P14 activation re-run's cause-mapped
  // refusals, each with the frozen cause readable verbatim in the mapped
  // activation reason and BOTH frozen chain echoes whole: the receiver
  // chain, the counterpart chain (whose never-issued pins make the
  // no-second-identity widening proof visible at the lane's own
  // counterpart cause), and the activation's own session currency.
  const dp14Reason = dp14ActivationReassessment["reason"];
  if (dp14Reason === "receiver_chain_not_structurally_ready_or_current")
    return collaborativeLiveReadAssessment(
      "frozen_dp14_receiver_chain_not_ready_or_current",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks,
    );
  if (dp14Reason === "counterpart_chain_not_structurally_verified")
    return collaborativeLiveReadAssessment(
      "counterpart_chain_refused_structural_never_issued_or_not_current",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks,
    );
  if (dp14Reason === "collaborative_activation_not_session_current")
    return collaborativeLiveReadAssessment(
      "frozen_dp14_collaborative_activation_not_session_current",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks,
    );

  // Ladder rung 7 — the frozen D-P14 admission re-run's verdict: the
  // live read is admitted only inside the frozen D-P14 admission of the
  // 13-label structural table. (A frozen D-P14 activation refusal with
  // any other reason — record invalid, join not established, or its own
  // declarative incompleteness — falls past this rung into the
  // declarative values below, where check 6 stays unsatisfied and the
  // proof-incomplete cause fires honestly with every echo readable.)
  if (
    dp14AdmissionReassessment["collaborativeReadAdmissionState"] !==
    "fixture_structural_collaborative_structural_record_read_admitted"
  )
    return collaborativeLiveReadAssessment(
      "frozen_dp14_admission_refused",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks,
    );

  // Ladder rung 8 — session-scope binding for the live-read event: the
  // performed read must postdate the current session's establishment
  // event, read through the gate-validated establishment form (the
  // D-P22 scope pattern). The re-runs above already validated it.
  const establishmentMetadata = record(
    (input.establishmentRecord as Record<string, unknown>)[
      "establishmentMetadata"
    ],
  );
  const establishedAt = establishmentMetadata?.[
    "established_at_epoch_ms"
  ] as number | undefined;
  if (
    typeof establishedAt !== "number" ||
    typeof collaborativeLiveReadRecordedAt !== "number" ||
    collaborativeLiveReadRecordedAt < establishedAt
  )
    return collaborativeLiveReadAssessment(
      "collaborative_live_read_event_not_of_the_current_session_scope",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks,
    );

  // Ladder rung 9 — the live-read event's own freshness: a stale live
  // read is a dead admission (the D-P20 governance posture), and the
  // diagnosis carries the stale state honestly.
  if (liveReadDiagnosis.state !== "fresh")
    return collaborativeLiveReadAssessment(
      "collaborative_live_read_event_not_session_current",
      "pond-collaborative-read-live-admission-decision-d-p23",
      liveReadDiagnosis,
      mappedRequest,
      mappedReadGate,
      mappedDp14Activation,
      mappedDp14ReceiverChain,
      mappedDp14CounterpartChain,
      mappedDp14Admission,
      [],
      [],
      collaborativeLiveReadChecks,
    );

  // The remaining declarative checks, evaluated honestly over the
  // validated records and the re-run verdicts: the refused bases fold
  // here with the unsatisfied check names readable, never behind a
  // defensive literal.
  const values = [
    true,
    liveReadValue["receiverHeldPrincipalRef"] ===
      input.receiverHeldPrincipalRef &&
      liveReadValue["counterpartPrincipalRef"] ===
        input.counterpartPrincipalRef &&
      wellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
      wellFormedPrincipalRef(input.counterpartPrincipalRef) &&
      String(input.receiverHeldPrincipalRef) !==
        String(input.counterpartPrincipalRef),
    liveReadValue["collaborativeLiveReadBasis"] ===
      "receiver_performed_collaborative_live_read_not_inferred",
    requestReassessment["collaborativeReadSessionRequestState"] ===
      "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
    gateReassessment["liveSessionReadGateState"] ===
      "live_session_scoped_single_principal_structural_reads_live_activated" &&
      gateReassessment["readGateFreshnessDiagnosis"].state === "fresh",
    dp14ActivationReassessment["collaborativeReadActivationState"] ===
      "fixture_structural_session_scoped_collaborative_structural_read_activation",
    dp14AdmissionReassessment["collaborativeReadAdmissionState"] ===
      "fixture_structural_collaborative_structural_record_read_admitted",
    typeof establishedAt === "number" &&
      typeof collaborativeLiveReadRecordedAt === "number" &&
      collaborativeLiveReadRecordedAt >= establishedAt,
    liveReadDiagnosis.state === "fresh",
    posturesComplete(liveReadValue),
  ];
  const satisfied = collaborativeLiveReadChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = collaborativeLiveReadChecks.filter(
    (_, index) => values[index] !== true,
  );
  return collaborativeLiveReadAssessment(
    unsatisfied.length === 0
      ? "all_collaborative_live_read_checks_satisfied"
      : "receiver_collaborative_live_read_proof_incomplete",
    "pond-collaborative-read-live-admission-decision-d-p23",
    liveReadDiagnosis,
    mappedRequest,
    mappedReadGate,
    mappedDp14Activation,
    mappedDp14ReceiverChain,
    mappedDp14CounterpartChain,
    mappedDp14Admission,
    admittedTargetRefs,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. A performed collaborative live
// read is an admitted structural inspection scope only: it never
// establishes content or a read result, a scope object or membership
// registry, a live counterpart or chain, agent identity or admission, a
// grant, consequence or execution, prose authority, membership or room
// presence, or a scope; it never crosses a scope or admits personal state
// from either principal; it accepts no ERC-8004 identity as a PrincipalId;
// and it admits no credential and no current truth.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP23Invariant_CollaborativeLiveReadChecksExact = Assert<
  Equal<
    PondCollaborativeLiveReadCheck,
    | "collaborative_live_read_record_well_formed"
    | "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals"
    | "collaborative_live_read_basis_receiver_performed_not_inferred"
    | "collaborative_read_request_currently_recorded_reassessed"
    | "live_session_read_gate_reinspected_live_activated_and_fresh"
    | "frozen_dp14_collaborative_activation_reinspected_activated"
    | "frozen_dp14_collaborative_admission_reinspected_admitted"
    | "collaborative_live_read_event_within_current_session_scope"
    | "collaborative_live_read_event_own_freshness_within_declared_maximum_age"
    | "collaborative_live_read_refusal_postures_complete"
  >
>;
export type PondStageDP23Invariant_CollaborativeLiveReadStatesExact = Assert<
  Equal<
    PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadState"],
    | "collaborative_live_read_not_recorded"
    | "collaborative_live_structural_records_read_admitted_session_scoped_no_scope_object_no_content"
  >
>;
export type PondStageDP23Invariant_CollaborativeLiveReadReasonsExact = Assert<
  Equal<
    PondCollaborativeReadLiveAdmissionDecisionAssessment["reason"],
    | "collaborative_live_read_record_invalid"
    | "live_session_read_gate_not_currently_live"
    | "collaborative_read_request_not_currently_recorded"
    | "frozen_dp14_receiver_chain_not_ready_or_current"
    | "counterpart_chain_refused_structural_never_issued_or_not_current"
    | "frozen_dp14_collaborative_activation_not_session_current"
    | "frozen_dp14_admission_refused"
    | "collaborative_live_read_event_not_of_the_current_session_scope"
    | "collaborative_live_read_event_not_session_current"
    | "receiver_collaborative_live_read_proof_incomplete"
    | "all_collaborative_live_read_checks_satisfied"
  >
>;
export type PondStageDP23Invariant_LiveReadBasisVocabularyExact = Assert<
  Equal<
    PondCollaborativeLiveReadBasis,
    | "receiver_performed_collaborative_live_read_not_inferred"
    | "derived_from_single_principal_activations"
    | "inferred_from_counterpart_presence"
    | "inferred_from_structural_chain_readiness"
    | "asserted_by_counterpart"
    | "replayed_from_prior_collaborative_live_read"
  >
>;
export type PondStageDP23Invariant_LiveReadPosturesExact = Assert<
  Equal<
    PondCollaborativeReadLiveAdmissionRecord,
    {
      readonly contractVersion: "pond-collaborative-read-live-admission-decision-d-p23";
      readonly kind: "pond-collaborative-read-live-admission";
      readonly receiverHeldPrincipalRef: string;
      readonly counterpartPrincipalRef: string;
      readonly collaborativeLiveReadBasis: PondCollaborativeLiveReadBasis;
      readonly collaborativeLiveReadMetadata: PondCollaborativeLiveReadEventMetadata;
      readonly requestedCollaborativeReadScope: "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory";
      readonly audienceBindingPosture: "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix";
      readonly counterpartChainPosture: "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists";
      readonly scopeCrossingPosture: "no_scope_crossing_no_release_recorded_memory_never_crosses";
      readonly scopeObjectPosture: "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership";
      readonly truthPosture: "structural_presence_only_no_current_truth_claim";
      readonly sessionScopePosture:
        | "not_established"
        | "session_scoped_receiver_restart_ends_the_live_read";
      readonly revocabilityPosture:
        | "not_established"
        | "live_read_revocable_by_receiver_retraction";
      readonly erc8004EvidencePosture: "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission";
      readonly authorityPosture: "the_live_read_admission_grants_no_authority_membership_or_capability";
      readonly authority: "none";
    }
  >
>;
export type PondStageDP23Invariant_MappedDp14ActivationTiedToDP14 = Assert<
  Equal<
    PondCollaborativeReadLiveAdmissionDecisionAssessment["mappedDp14ActivationState"],
    PondCollaborativeReadActivationAssessment["collaborativeReadActivationState"]
  >
>;
export type PondStageDP23Invariant_MappedDp14AdmissionTiedToDP14 = Assert<
  Equal<
    PondCollaborativeReadLiveAdmissionDecisionAssessment["mappedDp14AdmissionState"],
    PondCollaborativeReadAdmissionAssessment["collaborativeReadAdmissionState"]
  >
>;
export type PondStageDP23Invariant_MappedRequestTiedToContractOne = Assert<
  Equal<
    PondCollaborativeReadLiveAdmissionDecisionAssessment["mappedCollaborativeReadRequestState"],
    PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadSessionRequestState"]
  >
>;
export type PondStageDP23Invariant_MappedChainsWhole = Assert<
  Equal<
    PondCollaborativeReadLiveAdmissionDecisionAssessment["mappedDp14ReceiverChain"],
    PondCollaborativeReadPrincipalChainMapped
  > extends true
    ? Equal<
        PondCollaborativeReadLiveAdmissionDecisionAssessment["mappedDp14CounterpartChain"],
        PondCollaborativeReadPrincipalChainMapped
      >
    : false
>;
export type PondStageDP23Invariant_CollaborativeLiveReadEstablishesNothing =
  Assert<
    Equal<
      [
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadEstablishesReadResultOrContent"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadEstablishesLiveCounterpartOrChain"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadEstablishesAgentIdentityOrAdmission"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadEstablishesGrant"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadEstablishesConsequenceOrExecution"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadEstablishesAuthorityFromProse"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadEstablishesMembershipOrRoomPresence"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadEstablishesScope"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadCrossesScopeOrAdmitsPersonalState"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["collaborativeLiveReadConsumedThisCut"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["credentialAdmitted"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["principalIdAcceptedAsAuthorization"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["currentTruthAdmitted"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["runtimeActivationPosture"],
        PondCollaborativeReadLiveAdmissionDecisionAssessment["authority"],
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
export type PondStageDP23Invariant_NoForbiddenLiveReadKeys = Assert<
  HasAnyKey<
    PondCollaborativeReadLiveAdmissionRecord,
    (typeof POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS)[number]
  > extends false
    ? true
    : false
>;
export type PondStageDP23Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<
    PondCollaborativeReadLiveAdmissionDecisionAssessment,
    (typeof POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS)[number]
  > extends false
    ? true
    : false
>;