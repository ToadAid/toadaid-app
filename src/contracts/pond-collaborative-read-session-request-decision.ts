// Stage D-P23: the collaborative live read lane — receiver-recorded
// collaborative-read-SESSION request decisions over the frozen D-P15 live
// session, plus the performed collaborative-live-read admission decision
// declared in pond-collaborative-read-live-admission-decision.ts and the
// standing claimed-collaborative wall declared in pond-claimed-
// collaborative-read-refusal.ts.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): the lane's own law anchors are composed, because no
// single law sentence owns a collaborative read — scope-sovereignty L72-79
// (a shared scope is an explicitly joined collaborative scope; membership
// is explicit; removing membership revokes future shared access; shared
// state does not imply access to any member's personal state; shared
// membership does not itself grant a capability, credential view, delivery
// right, repository mutation right, or administrator role), L52-60 (the
// audience is exactly three forms: one exact principal, the exact active
// membership of one scope, deliberate public — two principals compose
// legally ONLY as the exact declared membership of one scope, never an
// ad-hoc pair), L50 (membership is never created by presence in a room),
// L15/L21 (a provider, session, room, or channel is never a principal and
// never creates a scope), L104/L174-187 (every scope crossing requires an
// explicit RELEASE preserving provenance; memory never crosses scopes —
// no Release is recorded anywhere in this lane), social-control-plane L178
// (routing must not flatten all activity into one undifferentiated
// session — the collaborative lane is a separate structural lane, never a
// flattened joint session), L166-170 (scope relationship != shared runtime
// trust), trusted-channel L13 (inputs with different trust semantics must
// travel through different structural channels — the compositional anchor
// for why collaborative reads ride their own recorded lane instead of the
// single-principal session), L35 (fail closed), agent-to-agent L25 ("A
// message may request a capability. The request itself grants nothing." —
// this request grants nothing, admits nothing, reads nothing).
//
// Recorded law silences. No canonical law defines live-session semantics
// for more than one principal: "counterpart", "multi-principal", "joint
// read", and "shared session" are named ZERO times in canonical law, and
// "two principals" appears exactly once (social-control-plane L172)
// demanding isolation, not a protocol. The room model and the community-
// agent runtime are declared deferrals (messaging L236-250; community-
// agent-fabric §36; the allocation waves name community/project runtime
// and external interop as later waves). The receiver-recorded choice this
// lane records in that silence: the explicit shared scope and the explicit
// membership ARE the receiver-recorded request plus the frozen D-P14
// counterpart join pair — no scope object and no membership registry is
// created (the object-form mint is refused at the inventory level, see
// `sharedScopeObject` below). Every literal below is a receiver-recorded
// app-side decision exercising refusal law, not new authority.
//
// What the cut performs. The receiver records ONE collaborative-read
// session request over a currently live D-P15 session — a request that
// declares the session's audience (the exact declared counterpart set of
// the D-P14 join: two pairwise-distinct principal refs) and admits
// nothing. The ceremony re-runs — through its own seams — the frozen
// D-P15 live-session read gate over the SAME 13 legs and the SAME
// evaluation pair (the D-P22 mechanism one lane later), and the frozen
// D-P14 counterpart join declaration over the join record the request is
// bound to. NO record is read by any arm of this contract — the request
// is a recorded lane declaration, not a read; the performed live-read
// admission is the next contract's lane rung, and the standing
// claimed-collaborative wall refuses every claimed read result.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type {
  PondLiveSessionReadGateAssessment,
} from "./pond-live-session-read-gate.js";
import {
  assessPondLiveSessionReadGate,
} from "./pond-live-session-read-gate.ts";
import type {
  PondCounterpartJoinDeclarationAssessment,
} from "./pond-collaborative-read-counterpart-declaration.js";
import {
  assessPondCounterpartJoinDeclaration,
} from "./pond-collaborative-read-counterpart-declaration.ts";
// The forbidden-key inventory: the frozen D-P22 union widened exactly
// once by this lane (see the constant below).
import {
  POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS,
} from "./pond-voice-input-request-decision.ts";

// The collaborative-read-session-request basis vocabulary: one true
// receiver-recorded basis and five refused bases. A collaborative read
// session is a current stance of the receiving side — nothing in a room,
// a conversation, an agent membership, two principals appearing in one
// view, or a counterpart's own declaration may record it here. The
// room-presence refusal carries the scope-sovereignty anchor: membership
// is never created by presence in a room (L50). The
// two-principals-in-view refusal carries the audience anchor: two
// principals compose an audience ONLY as the exact declared membership of
// one scope, never as an ad-hoc pair spotted in a view (L52-60).
export type PondCollaborativeReadSessionRequestBasis =
  | "receiver_recorded_collaborative_read_session_request_not_inferred"
  | "inferred_from_room_or_conversation_presence"
  | "inferred_from_agent_or_provider_membership"
  | "inferred_from_two_principals_in_view"
  | "asserted_by_counterpart_declaration"
  | "replayed_from_prior_collaborative_read_request";

// The receiver-recorded collaborative-read-request event metadata: the
// request event's own time source, its freshness basis (event time only —
// the D-P2 ordering), and the explicit currentness posture: a recorded
// request is NOT established — every consumer must evaluate.
export interface PondCollaborativeReadSessionRequestEventMetadata {
  readonly collaborative_read_requested_at_epoch_ms: number;
  readonly freshness_basis: "collaborative_read_request_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

// The receiver-recorded collaborative-read session request: 15 exact
// keys — one wider than the D-P22 voice request (the declared
// counterpartPrincipalRef slot: the audience law demands the request name
// its exact declared set, and that set is the D-P14 join's declared pair).
// The record does NOT reuse the frozen D-P15 gate's refused enum phrase as
// any positive literal — that phrase stays exclusively the frozen gate's
// refusal vocabulary, reachable only through mapped echoes of its
// assessments.
export interface PondCollaborativeReadSessionRequestRecord {
  readonly contractVersion: "pond-collaborative-read-session-request-decision-d-p23";
  readonly kind: "pond-collaborative-read-session-request";
  readonly principalRef: string;
  readonly counterpartPrincipalRef: string;
  readonly collaborativeReadRequestBasis: PondCollaborativeReadSessionRequestBasis;
  readonly collaborativeReadRequestMetadata: PondCollaborativeReadSessionRequestEventMetadata;
  readonly collaborativeRequestLanePosture: "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride";
  readonly collaborativeRequestAudiencePosture: "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref";
  readonly collaborativeRequestScopePosture: "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created";
  readonly collaborativeRequestPersonalStatePosture: "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here";
  readonly counterpartIdentityPosture: "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id";
  readonly sessionScopePosture:
    | "not_established"
    | "session_scoped_receiver_restart_ends_request"
    | "restart_carrying_refused";
  readonly memoryLaneExclusionPosture: "collaborative_read_request_excludes_memory_narrative_transcript_lanes";
  readonly authorityPosture: "the_request_grants_no_authority_membership_read_or_admission";
  readonly authority: "none";
}

// Receiver-owned collaborative-read-request checks.
export type PondCollaborativeReadSessionRequestCheck =
  | "collaborative_read_request_record_well_formed"
  | "collaborative_read_request_bound_to_receiver_held_principal"
  | "counterpart_join_declared_binding_pairwise_distinct_d_p14"
  | "collaborative_read_request_basis_receiver_recorded_not_inferred"
  | "live_session_read_gate_reinspected_live_activated_and_fresh"
  | "collaborative_read_request_event_within_current_session_scope"
  | "collaborative_read_request_event_own_freshness_within_declared_maximum_age"
  | "collaborative_read_request_refusal_postures_complete";

// The collaborative-read-session-request decision input: 15 exact keys —
// the D-P22 voice-lane input shape (the request + the 13 frozen gate
// legs) plus the declared counterpart join record the request is bound
// to. One evaluation pair serves the request event's freshness and every
// leg's re-run inside the reassessment (the D-P22 shared-pair rule).
export interface PondCollaborativeReadSessionRequestDecisionInput {
  readonly collaborativeReadSessionRequest: unknown;
  readonly counterpartJoinDeclarationRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
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
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export const POND_STAGE_DP23_COLLABORATIVE_READ_SESSION_REQUEST_INPUT_KEYS =
  Object.freeze(
    [
      "collaborativeReadSessionRequest",
      "counterpartJoinDeclarationRecord",
      "receiverHeldPrincipalRef",
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
      "receiverEvaluatedAtEpochMs",
      "receiverMaximumAgeMs",
    ] as const,
  );

// The collaborative-read-session-request decision assessment.
export interface PondCollaborativeReadSessionRequestDecisionAssessment {
  readonly contractVersion: "pond-collaborative-read-session-request-decision-d-p23";
  readonly collaborativeReadRequestDecisionVersion:
    | "pond-collaborative-read-session-request-decision-d-p23"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_collaborative_read_session_request_decision";
  readonly collaborativeReadSessionRequestState:
    | "collaborative_read_session_request_not_recorded"
    | "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read";
  readonly reason:
    | "collaborative_read_request_record_invalid"
    | "live_session_read_gate_not_currently_live"
    | "counterpart_join_binding_not_established"
    | "collaborative_read_request_event_not_of_the_current_session_scope"
    | "collaborative_read_request_event_not_session_current"
    | "receiver_collaborative_read_request_proof_incomplete"
    | "all_collaborative_read_request_checks_satisfied";
  readonly collaborativeReadRequestEventFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // Mapped echo fields: the frozen re-runs' own fields carried verbatim on
  // every arm — the D-P15 gate's state, reason, and own diagnosis with ITS
  // mapped echoes (the establishment and the frozen D-P10 activation), and
  // the D-P14 join's state and reason — so a refusal one depth down stays
  // readable at this cut without new literals for it. Field names stay
  // this cut's own; the frozen carrier names are never re-declared here.
  readonly mappedCounterpartJoinState: PondCounterpartJoinDeclarationAssessment["joinDeclarationState"];
  readonly mappedCounterpartJoinReason: PondCounterpartJoinDeclarationAssessment["reason"];
  readonly mappedReadGateState: PondLiveSessionReadGateAssessment["liveSessionReadGateState"];
  readonly mappedReadGateReassessmentReason: PondLiveSessionReadGateAssessment["reason"];
  readonly mappedReadGateFreshnessDiagnosis: PondLiveSessionReadGateAssessment["readGateFreshnessDiagnosis"];
  readonly mappedEstablishmentState: PondLiveSessionReadGateAssessment["mappedLiveSessionEstablishmentState"];
  readonly mappedEstablishmentReason: PondLiveSessionReadGateAssessment["mappedLiveSessionEstablishmentReason"];
  readonly mappedDp10ActivationState: PondLiveSessionReadGateAssessment["mappedDp10ActivationState"];
  readonly mappedDp10Reason: PondLiveSessionReadGateAssessment["mappedDp10Reason"];
  readonly mappedDp10SessionScopePosture: PondLiveSessionReadGateAssessment["mappedDp10SessionScopePosture"];
  readonly satisfiedChecks: readonly PondCollaborativeReadSessionRequestCheck[];
  readonly unsatisfiedChecks: readonly PondCollaborativeReadSessionRequestCheck[];
  // The retention posture: a request is module state of process lifetime
  // with no indefinite retention, and it re-assesses honestly after
  // retraction — the D-P20 governance posture (a request is session-scoped
  // stance whose applicability the reassessment governs; nothing
  // downstream reads it, and frozen survival would dress a dead request as
  // a live ask).
  readonly collaborativeReadRequestRetentionPosture: "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction";
  // The all-false ceiling: a recorded collaborative-read request is a
  // receiver-side lane declaration, nothing more. It never establishes a
  // read, record read, or read result, a scope object or membership
  // registry, a live counterpart or counterpart chain, agent identity or
  // admission, a grant, consequence or execution, authority from prose,
  // membership or room presence, or a scope; it never crosses a scope or
  // admits personal state; it accepts no ERC-8004 identity as a
  // PrincipalId; and it admits no credential and no current truth.
  readonly collaborativeReadRequestEstablishesReadOrRecordRead: false;
  readonly collaborativeReadRequestEstablishesReadResult: false;
  readonly collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry: false;
  readonly collaborativeReadRequestEstablishesLiveCounterpartOrChain: false;
  readonly collaborativeReadRequestEstablishesAgentIdentityOrAdmission: false;
  readonly collaborativeReadRequestEstablishesGrant: false;
  readonly collaborativeReadRequestEstablishesConsequenceOrExecution: false;
  readonly collaborativeReadRequestEstablishesAuthorityFromProse: false;
  readonly collaborativeReadRequestEstablishesMembershipOrRoomPresence: false;
  readonly collaborativeReadRequestEstablishesScope: false;
  readonly collaborativeReadRequestCrossesScopeOrAdmitsPersonalState: false;
  readonly collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId: false;
  readonly collaborativeReadRequestConsumedThisCut: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

// The forbidden-key inventory: the frozen D-P22 union plus the four
// collaborative-lane keys this lane exists to refuse — a claimed
// performed-read result record, a claimed-collaborative-read-content
// record object (the wall's own input key, riding as a member), a claimed
// LIVE counterpart authentication chain (the counterpart stays structural
// and never-issued — this is the lane's core refusal materialized as a
// key), and a shared-scope object or membership registry (the explicit
// scope stays the recorded request + declared join pair). A nested claim
// object planted inside any record of this lane refuses in the deep walk.
export const POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS =
  Object.freeze([
    ...POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS,
    "collaborativeReadResult",
    "claimedCollaborativeReadContent",
    "counterpartLiveLegs",
    "sharedScopeObject",
  ] as const);

const collaborativeReadSessionRequestChecks = Object.freeze([
  "collaborative_read_request_record_well_formed",
  "collaborative_read_request_bound_to_receiver_held_principal",
  "counterpart_join_declared_binding_pairwise_distinct_d_p14",
  "collaborative_read_request_basis_receiver_recorded_not_inferred",
  "live_session_read_gate_reinspected_live_activated_and_fresh",
  "collaborative_read_request_event_within_current_session_scope",
  "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
  "collaborative_read_request_refusal_postures_complete",
] as const satisfies readonly PondCollaborativeReadSessionRequestCheck[]);

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
// literals over the request-event metadata: metadata, then evaluation
// time, then maximum age, then future time; the fresh boundary is
// inclusive. A diagnosis is a diagnosis, never an admission.
const diagnoseCollaborativeReadRequestFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.collaborative_read_requested_at_epoch_ms) ||
    checked.freshness_basis !== "collaborative_read_request_event_time_only" ||
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
  const collaborativeReadRequestedAt = checked[
    "collaborative_read_requested_at_epoch_ms"
  ] as number;
  if (collaborativeReadRequestedAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - collaborativeReadRequestedAt;
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

const collaborativeReadRequestBasisVocabulary = [
  "receiver_recorded_collaborative_read_session_request_not_inferred",
  "inferred_from_room_or_conversation_presence",
  "inferred_from_agent_or_provider_membership",
  "inferred_from_two_principals_in_view",
  "asserted_by_counterpart_declaration",
  "replayed_from_prior_collaborative_read_request",
];

// The eight declarative-refusal posture fields: each field must carry its
// exact posture literal for the request record to be validly shaped.
const posturesComplete = (recordValue: Record<string, unknown>) =>
  recordValue.collaborativeRequestLanePosture ===
    "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride" &&
  recordValue.collaborativeRequestAudiencePosture ===
    "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref" &&
  recordValue.collaborativeRequestScopePosture ===
    "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created" &&
  recordValue.collaborativeRequestPersonalStatePosture ===
    "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here" &&
  recordValue.counterpartIdentityPosture ===
    "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id" &&
  recordValue.sessionScopePosture ===
    "session_scoped_receiver_restart_ends_request" &&
  recordValue.memoryLaneExclusionPosture ===
    "collaborative_read_request_excludes_memory_narrative_transcript_lanes";

const exactCollaborativeReadRequestEventMetadata = (value: unknown): boolean => {
  const metadataValue = record(value);
  return (
    metadataValue !== null &&
    exactKeys(metadataValue, [
      "collaborative_read_requested_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(
      metadataValue.collaborative_read_requested_at_epoch_ms,
    ) &&
    metadataValue.freshness_basis ===
      "collaborative_read_request_event_time_only" &&
    metadataValue.currentness_posture ===
      "not_established_consumer_must_evaluate"
  );
};

// Valid request-record shape only — record validity, not admission. The
// join record and the session legs under the request are the re-runs'
// material, not this check's: the re-runs validate the join and the gate
// and the establishment chain wholesale, and their conclusions are
// carried verbatim as the mapped echoes. No read result, no scope object,
// no live-leg claim, and no counterpart identity material of any kind
// exists anywhere on the record.
const validCollaborativeReadSessionRequestRecord = (value: unknown): boolean => {
  const requestValue = record(value);
  return (
    requestValue !== null &&
    exactKeys(requestValue, [
      "contractVersion",
      "kind",
      "principalRef",
      "counterpartPrincipalRef",
      "collaborativeReadRequestBasis",
      "collaborativeReadRequestMetadata",
      "collaborativeRequestLanePosture",
      "collaborativeRequestAudiencePosture",
      "collaborativeRequestScopePosture",
      "collaborativeRequestPersonalStatePosture",
      "counterpartIdentityPosture",
      "sessionScopePosture",
      "memoryLaneExclusionPosture",
      "authorityPosture",
      "authority",
    ]) &&
    requestValue.contractVersion ===
      "pond-collaborative-read-session-request-decision-d-p23" &&
    requestValue.kind === "pond-collaborative-read-session-request" &&
    collaborativeReadRequestBasisVocabulary.includes(
      String(requestValue.collaborativeReadRequestBasis),
    ) &&
    exactCollaborativeReadRequestEventMetadata(
      requestValue.collaborativeReadRequestMetadata,
    ) &&
    wellFormedPrincipalRef(requestValue.principalRef) &&
    wellFormedPrincipalRef(requestValue.counterpartPrincipalRef) &&
    posturesComplete(requestValue) &&
    requestValue.authorityPosture ===
      "the_request_grants_no_authority_membership_read_or_admission" &&
    requestValue.authority === "none" &&
    !hasForbiddenKey(
      requestValue,
      POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS,
    )
  );
};

// The D-P15 gate legs, verbatim: the request's re-run consumes the frozen
// classifier over the SAME legs the shell holds — all 13, never the
// spread (spreading the 15-key input would pass the request and the join
// into the re-run; the projection is the type-tie seam).
const fullLiveSessionGateLegs = (
  input: PondCollaborativeReadSessionRequestDecisionInput,
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
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  }) as const;

// The mapped echo shapes (the D-P22 mapped precedent — typed to the
// frozen assessments so a drift is a compile error, values carried
// verbatim from their fields, including THEIR mapped echoes verbatim).
// Field names stay generic; the frozen names the echoes read are tied
// through quoted-index reads in the builder, never re-declared as this
// cut's own names and never dotted here.
interface PondMappedReadGateEcho {
  readonly state: PondLiveSessionReadGateAssessment["liveSessionReadGateState"];
  readonly reason: PondLiveSessionReadGateAssessment["reason"];
  readonly diagnosis: PondLiveSessionReadGateAssessment["readGateFreshnessDiagnosis"];
}

interface PondMappedEstablishmentEcho {
  readonly state: PondLiveSessionReadGateAssessment["mappedLiveSessionEstablishmentState"];
  readonly reason: PondLiveSessionReadGateAssessment["mappedLiveSessionEstablishmentReason"];
}

interface PondMappedDp10Echo {
  readonly state: PondLiveSessionReadGateAssessment["mappedDp10ActivationState"];
  readonly reason: PondLiveSessionReadGateAssessment["mappedDp10Reason"];
  readonly scopePosture: PondLiveSessionReadGateAssessment["mappedDp10SessionScopePosture"];
}

interface PondMappedCounterpartJoinEcho {
  readonly state: PondCounterpartJoinDeclarationAssessment["joinDeclarationState"];
  readonly reason: PondCounterpartJoinDeclarationAssessment["reason"];
}

const collaborativeReadRequestAssessment = (
  reason: PondCollaborativeReadSessionRequestDecisionAssessment["reason"],
  collaborativeReadRequestDecisionVersion: PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestDecisionVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedReadGate: PondMappedReadGateEcho,
  mappedEstablishment: PondMappedEstablishmentEcho,
  mappedDp10: PondMappedDp10Echo,
  mappedCounterpartJoin: PondMappedCounterpartJoinEcho,
  satisfiedChecks: readonly PondCollaborativeReadSessionRequestCheck[],
  unsatisfiedChecks: readonly PondCollaborativeReadSessionRequestCheck[],
): PondCollaborativeReadSessionRequestDecisionAssessment => {
  const recorded = reason === "all_collaborative_read_request_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-collaborative-read-session-request-decision-d-p23",
    collaborativeReadRequestDecisionVersion,
    assessmentKind:
      "deterministic_supplied_collaborative_read_session_request_decision",
    collaborativeReadSessionRequestState: recorded
      ? "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read"
      : "collaborative_read_session_request_not_recorded",
    reason,
    collaborativeReadRequestEventFreshnessDiagnosis: diagnosis,
    mappedCounterpartJoinState: mappedCounterpartJoin.state,
    mappedCounterpartJoinReason: mappedCounterpartJoin.reason,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReassessmentReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    mappedEstablishmentState: mappedEstablishment.state,
    mappedEstablishmentReason: mappedEstablishment.reason,
    mappedDp10ActivationState: mappedDp10.state,
    mappedDp10Reason: mappedDp10.reason,
    mappedDp10SessionScopePosture: mappedDp10.scopePosture,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The retention posture: honest re-assessment after retraction — the
    // D-P20 governance posture (a request is session-scoped stance, not
    // frozen evidence).
    collaborativeReadRequestRetentionPosture:
      "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction" as const,
    // A recorded collaborative-read request is a receiver-side lane
    // declaration, nothing more (see the ceiling commentary on the
    // interface for the law anchors).
    collaborativeReadRequestEstablishesReadOrRecordRead: false,
    collaborativeReadRequestEstablishesReadResult: false,
    collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry: false,
    collaborativeReadRequestEstablishesLiveCounterpartOrChain: false,
    collaborativeReadRequestEstablishesAgentIdentityOrAdmission: false,
    collaborativeReadRequestEstablishesGrant: false,
    collaborativeReadRequestEstablishesConsequenceOrExecution: false,
    collaborativeReadRequestEstablishesAuthorityFromProse: false,
    collaborativeReadRequestEstablishesMembershipOrRoomPresence: false,
    collaborativeReadRequestEstablishesScope: false,
    collaborativeReadRequestCrossesScopeOrAdmitsPersonalState: false,
    collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId: false,
    collaborativeReadRequestConsumedThisCut: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondCollaborativeReadSessionRequestDecision(
  input: PondCollaborativeReadSessionRequestDecisionInput,
): PondCollaborativeReadSessionRequestDecisionAssessment {
  // The fail-closed gate on the input object itself: garbage never throws
  // — a non-object input degrades to an empty record the validation and
  // re-runs refuse honestly (the D-P8 fail-closed discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondCollaborativeReadSessionRequestDecisionInput;
  // The echoes are computed on every arm, before any cause is chosen: a
  // broken request never unbinds the receiver's session or the declared
  // join, and an invalid arm still diagnoses (the D-P13 echo discipline).
  // Both re-runs go through this contract's own seams (evidence-activation
  // L109 — the independent inspection IS the re-run): the frozen D-P15
  // read-gate ceremony re-runs over the SAME held legs and the SAME
  // evaluation pair, and inside it the frozen D-P15 establishment chain
  // and the frozen D-P10 activation re-run again; the frozen D-P14
  // counterpart join ceremony re-runs over the declared join record.
  const gateReassessment = assessPondLiveSessionReadGate(
    fullLiveSessionGateLegs(input),
  );
  const counterpartJoinReassessment = assessPondCounterpartJoinDeclaration({
    counterpartDeclarationRecord: input.counterpartJoinDeclarationRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
  });
  const mappedReadGate: PondMappedReadGateEcho = {
    state: gateReassessment["liveSessionReadGateState"],
    reason: gateReassessment["reason"],
    diagnosis: gateReassessment["readGateFreshnessDiagnosis"],
  };
  const mappedEstablishment: PondMappedEstablishmentEcho = {
    state: gateReassessment["mappedLiveSessionEstablishmentState"],
    reason: gateReassessment["mappedLiveSessionEstablishmentReason"],
  };
  const mappedDp10: PondMappedDp10Echo = {
    state: gateReassessment["mappedDp10ActivationState"],
    reason: gateReassessment["mappedDp10Reason"],
    scopePosture: gateReassessment["mappedDp10SessionScopePosture"],
  };
  const mappedCounterpartJoin: PondMappedCounterpartJoinEcho = {
    state: counterpartJoinReassessment["joinDeclarationState"],
    reason: counterpartJoinReassessment["reason"],
  };
  // The D-P16 fallback pattern: diagnose the raw evaluation pair even
  // when the request never becomes valid, so every arm carries an honest
  // request-event diagnosis.
  const fallbackDiagnosis = diagnoseCollaborativeReadRequestFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validCollaborativeReadSessionRequestRecord(
    input.collaborativeReadSessionRequest,
  ))
    return collaborativeReadRequestAssessment(
      "collaborative_read_request_record_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      mappedCounterpartJoin,
      [],
      collaborativeReadSessionRequestChecks,
    );
  const requestValue =
    input.collaborativeReadSessionRequest as Record<string, unknown>;
  const requestEventMetadata = record(
    requestValue["collaborativeReadRequestMetadata"],
  );
  const collaborativeReadRequestedAt = requestEventMetadata?.[
    "collaborative_read_requested_at_epoch_ms"
  ] as number | undefined;

  // The request event's own diagnosis first as data: the metadata is
  // valid already, so the diagnosis (fresh or not) is honest on every
  // remaining arm — but the re-runs' verdicts outrank it in the ladder (a
  // collaborative read request rides a CURRENTLY live session), so a
  // not-currently-live gate refuses first (the single-principal gate —
  // the D-P23 record rides it, never replaces it), then a not-established
  // join.
  const requestDiagnosis = diagnoseCollaborativeReadRequestFreshness(
    requestEventMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );

  // The frozen D-P15 re-run's verdict outranks everything but the record
  // shape: a session whose read gate is not currently live-activated can
  // never carry a collaborative read request, and the re-run's own reason
  // is carried verbatim as the mapped reassessment reason — the honest
  // echo.
  if (
    gateReassessment["liveSessionReadGateState"] !==
    "live_session_scoped_single_principal_structural_reads_live_activated"
  )
    return collaborativeReadRequestAssessment(
      "live_session_read_gate_not_currently_live",
      "pond-collaborative-read-session-request-decision-d-p23",
      requestDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      mappedCounterpartJoin,
      [],
      collaborativeReadSessionRequestChecks,
    );

  // The frozen D-P14 join re-run's verdict next: the request is bound to
  // the declared join — a join that is not established (invalid, or its
  // checks incomplete) cannot carry the request's audience, and the
  // re-run's own reason is carried verbatim in the mapped echo.
  if (
    counterpartJoinReassessment["joinDeclarationState"] !==
    "fixture_structural_receiver_declared_counterpart_join"
  )
    return collaborativeReadRequestAssessment(
      "counterpart_join_binding_not_established",
      "pond-collaborative-read-session-request-decision-d-p23",
      requestDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      mappedCounterpartJoin,
      [],
      collaborativeReadSessionRequestChecks,
    );

  // Session-scope binding for the request event comes first in this
  // ladder: the recorded request must postdate the current session's
  // establishment event — a request recorded before the session it would
  // ride is not in the current scope. No lane composition bounds it: the
  // collaborative-read request's parent is the D-P15 establishment +
  // read gate + the D-P14 join itself. The re-run validated the
  // establishment above, so its metadata is read through that validated
  // form (the D-P22 scope pattern). This ladder's order is this cut's
  // own recorded choice (scope refusal before the event's own
  // staleness); the D-P22 order was the mirror, and both orders keep
  // every cause honest and every echo readable.
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
    typeof collaborativeReadRequestedAt !== "number" ||
    collaborativeReadRequestedAt < establishedAt
  )
    return collaborativeReadRequestAssessment(
      "collaborative_read_request_event_not_of_the_current_session_scope",
      "pond-collaborative-read-session-request-decision-d-p23",
      requestDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      mappedCounterpartJoin,
      [],
      collaborativeReadSessionRequestChecks,
    );

  // The request event's own freshness after the scope fold: a stale
  // request event is a dead ask (the D-P20 governance posture), and the
  // diagnosis carries the stale state honestly.
  if (requestDiagnosis.state !== "fresh")
    return collaborativeReadRequestAssessment(
      "collaborative_read_request_event_not_session_current",
      "pond-collaborative-read-session-request-decision-d-p23",
      requestDiagnosis,
      mappedReadGate,
      mappedEstablishment,
      mappedDp10,
      mappedCounterpartJoin,
      [],
      collaborativeReadSessionRequestChecks,
    );

  // The remaining declarative checks, evaluated honestly over the
  // validated records and the re-run verdicts: the refused bases fold
  // here with the unsatisfied check names readable, never behind a
  // defensive literal.
  const values = [
    true,
    requestValue["principalRef"] === input.receiverHeldPrincipalRef &&
      wellFormedPrincipalRef(input.receiverHeldPrincipalRef),
    requestValue["counterpartPrincipalRef"] ===
      (input.counterpartJoinDeclarationRecord as Record<string, unknown>)[
        "counterpartPrincipalRef"
      ] &&
      String(requestValue["principalRef"]) !==
        String(requestValue["counterpartPrincipalRef"]),
    requestValue["collaborativeReadRequestBasis"] ===
      "receiver_recorded_collaborative_read_session_request_not_inferred",
    gateReassessment["liveSessionReadGateState"] ===
      "live_session_scoped_single_principal_structural_reads_live_activated" &&
      gateReassessment["readGateFreshnessDiagnosis"].state === "fresh",
    typeof establishedAt === "number" &&
      typeof collaborativeReadRequestedAt === "number" &&
      collaborativeReadRequestedAt >= establishedAt,
    requestDiagnosis.state === "fresh",
    posturesComplete(requestValue),
  ];
  const satisfied = collaborativeReadSessionRequestChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = collaborativeReadSessionRequestChecks.filter(
    (_, index) => values[index] !== true,
  );
  return collaborativeReadRequestAssessment(
    unsatisfied.length === 0
      ? "all_collaborative_read_request_checks_satisfied"
      : "receiver_collaborative_read_request_proof_incomplete",
    "pond-collaborative-read-session-request-decision-d-p23",
    requestDiagnosis,
    mappedReadGate,
    mappedEstablishment,
    mappedDp10,
    mappedCounterpartJoin,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. A recorded collaborative-read
// request is receiver-side governance only: it never establishes a read,
// a read result, a scope object or membership registry, a live
// counterpart or chain, agent identity or admission, a grant, a
// consequence or execution, prose authority, membership or room presence,
// or a scope; it never crosses a scope or admits personal state; it
// accepts no ERC-8004 identity as a PrincipalId; and it admits no
// credential and no current truth.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP23Invariant_CollaborativeReadRequestChecksExact =
  Assert<
    Equal<
      PondCollaborativeReadSessionRequestCheck,
      | "collaborative_read_request_record_well_formed"
      | "collaborative_read_request_bound_to_receiver_held_principal"
      | "counterpart_join_declared_binding_pairwise_distinct_d_p14"
      | "collaborative_read_request_basis_receiver_recorded_not_inferred"
      | "live_session_read_gate_reinspected_live_activated_and_fresh"
      | "collaborative_read_request_event_within_current_session_scope"
      | "collaborative_read_request_event_own_freshness_within_declared_maximum_age"
      | "collaborative_read_request_refusal_postures_complete"
    >
  >;
export type PondStageDP23Invariant_CollaborativeReadRequestStatesExact =
  Assert<
    Equal<
      PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadSessionRequestState"],
      | "collaborative_read_session_request_not_recorded"
      | "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read"
    >
  >;
export type PondStageDP23Invariant_CollaborativeReadRequestReasonsExact =
  Assert<
    Equal<
      PondCollaborativeReadSessionRequestDecisionAssessment["reason"],
      | "collaborative_read_request_record_invalid"
      | "live_session_read_gate_not_currently_live"
      | "counterpart_join_binding_not_established"
      | "collaborative_read_request_event_not_of_the_current_session_scope"
      | "collaborative_read_request_event_not_session_current"
      | "receiver_collaborative_read_request_proof_incomplete"
      | "all_collaborative_read_request_checks_satisfied"
    >
  >;
export type PondStageDP23Invariant_BasisVocabularyExact = Assert<
  Equal<
    PondCollaborativeReadSessionRequestBasis,
    | "receiver_recorded_collaborative_read_session_request_not_inferred"
    | "inferred_from_room_or_conversation_presence"
    | "inferred_from_agent_or_provider_membership"
    | "inferred_from_two_principals_in_view"
    | "asserted_by_counterpart_declaration"
    | "replayed_from_prior_collaborative_read_request"
  >
>;
export type PondStageDP23Invariant_EventMetadataExact = Assert<
  Equal<
    PondCollaborativeReadSessionRequestEventMetadata,
    {
      readonly collaborative_read_requested_at_epoch_ms: number;
      readonly freshness_basis: "collaborative_read_request_event_time_only";
      readonly currentness_posture: "not_established_consumer_must_evaluate";
    }
  >
>;
export type PondStageDP23Invariant_RequestPosturesExact = Assert<
  Equal<
    PondCollaborativeReadSessionRequestRecord,
    {
      readonly contractVersion: "pond-collaborative-read-session-request-decision-d-p23";
      readonly kind: "pond-collaborative-read-session-request";
      readonly principalRef: string;
      readonly counterpartPrincipalRef: string;
      readonly collaborativeReadRequestBasis: PondCollaborativeReadSessionRequestBasis;
      readonly collaborativeReadRequestMetadata: PondCollaborativeReadSessionRequestEventMetadata;
      readonly collaborativeRequestLanePosture: "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride";
      readonly collaborativeRequestAudiencePosture: "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref";
      readonly collaborativeRequestScopePosture: "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created";
      readonly collaborativeRequestPersonalStatePosture: "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here";
      readonly counterpartIdentityPosture: "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id";
      readonly sessionScopePosture:
        | "not_established"
        | "session_scoped_receiver_restart_ends_request"
        | "restart_carrying_refused";
      readonly memoryLaneExclusionPosture: "collaborative_read_request_excludes_memory_narrative_transcript_lanes";
      readonly authorityPosture: "the_request_grants_no_authority_membership_read_or_admission";
      readonly authority: "none";
    }
  >
>;
export type PondStageDP23Invariant_MappedReadGateTiedToDP15 = Assert<
  Equal<
    PondCollaborativeReadSessionRequestDecisionAssessment["mappedReadGateState"],
    PondLiveSessionReadGateAssessment["liveSessionReadGateState"]
  >
>;
export type PondStageDP23Invariant_MappedCounterpartJoinTiedToDP14 = Assert<
  Equal<
    PondCollaborativeReadSessionRequestDecisionAssessment["mappedCounterpartJoinState"],
    PondCounterpartJoinDeclarationAssessment["joinDeclarationState"]
  >
>;
export type PondStageDP23Invariant_CollaborativeReadRequestEstablishesNothing =
  Assert<
    Equal<
      [
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestEstablishesReadOrRecordRead"],
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestEstablishesReadResult"],
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry"],
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestEstablishesLiveCounterpartOrChain"],
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestEstablishesAgentIdentityOrAdmission"],
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestEstablishesGrant"],
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestEstablishesConsequenceOrExecution"],
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestEstablishesAuthorityFromProse"],
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestEstablishesMembershipOrRoomPresence"],
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestEstablishesScope"],
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestCrossesScopeOrAdmitsPersonalState"],
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId"],
        PondCollaborativeReadSessionRequestDecisionAssessment["collaborativeReadRequestConsumedThisCut"],
        PondCollaborativeReadSessionRequestDecisionAssessment["credentialAdmitted"],
        PondCollaborativeReadSessionRequestDecisionAssessment["principalIdAcceptedAsAuthorization"],
        PondCollaborativeReadSessionRequestDecisionAssessment["currentTruthAdmitted"],
        PondCollaborativeReadSessionRequestDecisionAssessment["runtimeActivationPosture"],
        PondCollaborativeReadSessionRequestDecisionAssessment["authority"],
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
export type PondStageDP23Invariant_NoForbiddenRequestKeys = Assert<
  HasAnyKey<
    PondCollaborativeReadSessionRequestRecord,
    (typeof POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS)[number]
  > extends false
    ? true
    : false
>;
export type PondStageDP23Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<
    PondCollaborativeReadSessionRequestDecisionAssessment,
    (typeof POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS)[number]
  > extends false
    ? true
    : false
>;