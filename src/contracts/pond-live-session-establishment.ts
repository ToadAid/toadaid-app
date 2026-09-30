// Stage D-P15: the live authentication session establishment ceremony.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/trusted-channel-separation-contract.md
// L100 "An operator request may trigger a governed authority decision.
// The request is not itself the grant." and L47 (the trusted boundary
// must not be writable through operator messages, documents, provider
// output, or conversation history); contracts/evidence-activation-
// contract.md L49-55 (completion evidence does not answer "Should this
// capability be activated?") and L109 (an authority-affecting activation
// boundary requires verification that is current and independently
// inspected); contracts/agent-identity-and-specialist-admission-
// contract.md L75 ("Authentication is not authorization — a valid
// signature may prove control of an identifier; it does not prove
// membership, capability, delivery rights, acceptance, or administrator
// rights"), L112 ("Declared capability is not granted capability"), L118
// (no authority inheritance from any provider session or prior action);
// contracts/delegated-authority-and-capability-grant-contract.md L434-442
// ("Expiry affects future authority. Historical evidence remains
// historical." — an old receipt cannot restore an expired authority);
// blueprints/community-agent-fabric.md L260 ("An authenticated peer is
// not an authorized peer").
//
// Recorded law silences. No canonical law defines sessions, session
// machinery, session lifetime, the "once per session" vocabulary, or a
// shared presentation frame for an agent family — every one of those
// literals below is a receiver-recorded app-side decision, exercised as
// refusal vocabulary, not as new authority. The D-P2 freshness machinery
// is the only law-side clock vocabulary and is reused as-is (inclusive
// fresh boundary; a diagnosis is never an admission). The new
// establishment metadata triple therefore pins its own freshness basis
// literal (`establishment_event_time_only`) the same way D-P10 pinned
// `activation_event_time_only`, reimplementing the D-P2 diagnosis with
// identical ordering and literals.
//
// What the cut performs. The frozen D-P6/D-P8 records describe structure
// and carry their fixture posture literals verbatim; this ceremony is the
// separately planned activation they both defer to: over a real shell
// gesture the receiver performs the local authentication event (D-P6)
// and the knowledge-factor challenge-response (D-P8), re-inspects its own
// frozen private-read activation through the frozen D-P10 gate over the
// raw leg records (evidence-activation L109 — the independent inspection
// IS the re-run through the gate), and binds them into one live,
// session-scoped, restart-expiring, receiver-retractable establishment.
// The performed truth lives in this cut's own state vocabulary — the
// frozen D-P8/D-P6 authentication-carrier names (the `live`-prefixed and
// `Performed`-suffixed fields the frozen D-P6/D-P8 assessments own) are
// never re-carried here; this cut's assessments never carry the frozen
// D-P10 session-scope key either, because the frozen D-P10 assessment
// owns that field name (use `establishmentScopePosture`). The desktop shell is
// recorded as the shared presentation frame for the receiver's agent
// family; the session itself stays receiver-owned — no agent gains a
// session, a secret, or an admission from it, and the scopes never
// collapse. Collaborative (multi-principal) reads do not ride this
// session: they require their own live session lane. Every check is
// receiver-owned; a retraction recorded on the session is a present fact
// that refuses the establishment outright (revocability is real).

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type { PondLocalPrincipalAuthenticationObservationAssessment } from "./pond-local-principal-authentication-observation.js";
import { assessPondLocalPrincipalAuthenticationObservation } from "./pond-local-principal-authentication-observation.ts";
import type { PondLocalAuthenticationChallengeAssessment } from "./pond-local-authentication-mechanic.js";
import { assessPondLocalAuthenticationChallengeProof } from "./pond-local-authentication-mechanic.ts";
import type { PondPrivateReadActivationAssessment } from "./pond-private-read-activation.js";
import { assessPondPrivateReadActivation } from "./pond-private-read-activation.ts";
import { POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS } from "./pond-collaborative-read-activation.ts";

// The basis vocabulary: one true performed basis and five refused
// inference bases. A session established by any refused basis is exactly
// what this ceremony exists to refuse — no presence inference, no wallet
// inference, no producer self-assertion, no structural-readiness
// completion, no observed-agent presence ever establishes a live session
// (evidence-activation L49-55; trusted-channel L100).
export type PondLiveSessionEstablishmentBasis =
  | "receiver_performed_local_authentication_session_establishment_not_inferred"
  | "inferred_from_session_presence"
  | "inferred_from_wallet_connection"
  | "asserted_by_shell_producer"
  | "inferred_from_structural_readiness"
  | "inferred_from_observed_agent_presence";

export interface PondLiveSessionEstablishmentMetadata {
  readonly established_at_epoch_ms: number;
  readonly freshness_basis: "establishment_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

// The retraction record the receiver may lodge on a live session: a
// present fact of retraction, not a staleness diagnosis. A malformed
// retraction claim is honest input invalidity — the establishment can
// never be evaluated over a malformed retraction claim.
export interface PondLiveSessionRetractionRecord {
  readonly contractVersion: "pond-live-session-retraction-d-p15";
  readonly kind: "pond-live-session-retraction";
  readonly retracted_at_epoch_ms: number;
  readonly retractionPosture: "receiver_recorded_live_session_retraction_no_grant";
  readonly authority: "none";
}

export interface PondLiveSessionEstablishmentRecord {
  readonly contractVersion: "pond-live-session-establishment-d-p15";
  readonly kind: "pond-live-session-establishment";
  readonly principalRef: string;
  readonly establishmentBasis: PondLiveSessionEstablishmentBasis;
  readonly establishedCapability: "receiver_live_session_scoped_shell_authentication";
  readonly establishmentMetadata: PondLiveSessionEstablishmentMetadata;
  readonly establishmentScopePosture:
    | "not_established"
    | "live_session_scoped_receiver_shell_restart_ends_establishment"
    | "shell_process_scope_not_restart_ending_refused";
  readonly establishmentRevocabilityPosture:
    | "not_established"
    | "establishment_revocable_by_receiver_retraction";
  // Receiver trusted-policy attribution only — the same posture family
  // D-P10 pinned, never a grant.
  readonly establishmentAttributionPosture: "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant";
  // Agents gain nothing: no agent session, no agent secret, no agent
  // admission exists on this session, ever.
  readonly agentScopePosture: "no_agent_session_no_agent_secret_no_agent_admission";
  // The desktop shell is the shared presentation frame for the
  // receiver's agent family; the session never collapses into the frame.
  readonly sharedSurfacePosture: "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse";
  // The frozen D-P10 collaborative-scope field name is banned for
  // this cut; this is the cut's own widening-refusal key.
  readonly collaborativeWideningPosture: "not_included_collaborative_reads_require_their_own_live_session_lane";
  readonly activatedReadScopePosture: "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign";
  readonly memoryLaneExclusionPosture: "establishment_excludes_memory_narrative_transcript_lanes";
  readonly authorityPosture: "establishment_grants_no_authority_membership_or_capability";
  readonly authority: "none";
}

// Receiver-owned establishment checks. A check is satisfied only when
// the record's own proof field carries the performed literal or the
// re-run frozen leg it names is fresh and positive.
export type PondLiveSessionEstablishmentCheck =
  | "establishment_record_well_formed"
  | "establishment_bound_to_receiver_held_principal"
  | "establishment_basis_receiver_performed_not_inferred"
  | "shell_authentication_event_observed_by_receiver_fresh"
  | "knowledge_factor_verified_fresh_and_recompute_agreed"
  | "frozen_private_read_activation_reinspected_structurally_active_and_session_current"
  | "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching"
  | "establishment_excludes_memory_lanes_and_collaborative_widening";

export interface PondLiveSessionEstablishmentInput {
  readonly establishmentRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
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

export interface PondLiveSessionEstablishmentAssessment {
  readonly contractVersion: "pond-live-session-establishment-d-p15";
  readonly establishmentRecordVersion: "pond-live-session-establishment-d-p15" | "invalid";
  readonly assessmentKind: "deterministic_supplied_live_session_establishment";
  readonly sessionEstablishmentState:
    | "not_established"
    | "live_session_scoped_authentication_established";
  readonly reason:
    | "establishment_record_invalid"
    | "receiver_retraction_on_record"
    | "session_establishment_not_session_current"
    | "authentication_event_not_observed_refused_or_unfresh"
    | "knowledge_factor_not_verified_or_unfresh"
    | "frozen_activation_not_structurally_ready_or_not_session_current"
    | "session_scope_posture_not_restart_ending_or_not_agent_free"
    | "receiver_session_establishment_proof_incomplete"
    | "all_session_establishment_checks_satisfied";
  readonly establishmentFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly establishmentScopePosture:
    | "not_established"
    | "live_session_scoped_receiver_shell_restart_ends_establishment"
    | "shell_process_scope_not_restart_ending_refused";
  // Mapped per-leg sub-states, typed to the frozen contracts and carrying
  // their literals verbatim (the D-P11 mapped precedent): the frozen
  // assessors keep their own honesty; these fields are this cut's echo of
  // it, computed on every arm of every input, through broken legs too.
  readonly mappedDp6ObservationState: PondLocalPrincipalAuthenticationObservationAssessment["authenticationObservationState"];
  readonly mappedDp6Reason: PondLocalPrincipalAuthenticationObservationAssessment["reason"];
  readonly mappedDp6FreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly mappedDp8MechanicState: PondLocalAuthenticationChallengeAssessment["authenticationMechanicState"];
  readonly mappedDp8Reason: PondLocalAuthenticationChallengeAssessment["reason"];
  readonly mappedDp8Comparison: PondLocalAuthenticationChallengeAssessment["comparison"];
  readonly mappedDp8RecomputedComparison: PondLocalAuthenticationChallengeAssessment["recomputedComparison"];
  readonly mappedDp8FreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly mappedDp10ActivationState: PondPrivateReadActivationAssessment["activationState"];
  readonly mappedDp10Reason: PondPrivateReadActivationAssessment["reason"];
  readonly mappedDp10SessionScopePosture: PondPrivateReadActivationAssessment["sessionScopePosture"];
  readonly satisfiedChecks: readonly PondLiveSessionEstablishmentCheck[];
  readonly unsatisfiedChecks: readonly PondLiveSessionEstablishmentCheck[];
  // The all-false ceiling: the session is a receiver-owned, non-grant,
  // restart-expiring authentication fact. It never becomes a grant, a
  // membership/admission, an agent reach, a credential, a PrincipalId
  // authorization, or memory admission, and it never claims current
  // truth. The frozen falsifiable authentication-carrier names stay
  // false in the frozen tuples and are never carried here.
  readonly sessionEstablishesGrant: false;
  readonly sessionEstablishesMembershipOrAdmission: false;
  readonly sessionGrantsAgentAccess: false;
  readonly sessionEstablishesCurrentTruth: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const establishmentChecks = Object.freeze([
  "establishment_record_well_formed",
  "establishment_bound_to_receiver_held_principal",
  "establishment_basis_receiver_performed_not_inferred",
  "shell_authentication_event_observed_by_receiver_fresh",
  "knowledge_factor_verified_fresh_and_recompute_agreed",
  "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
  "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
  "establishment_excludes_memory_lanes_and_collaborative_widening",
] as const satisfies readonly PondLiveSessionEstablishmentCheck[]);

// Keys whose presence in a session establishment record would mean the
// secret, an agent session/admission, a chat-message lane, a credential,
// or a cross-principal batch entered the session as data. The frozen
// D-P6/D-P8/D-P10 inventories plus the D-P14 plural-batch keys and the
// agent-reach keys this cut exists to refuse. The exact-key deep walk
// means the cut's own longer keys (which contain the fragment `session`
// only) are unaffected mechanically — the discipline is still pinned:
// no record here ever stores, transports, or renders the secret, and no
// agent ever gains session state from it.
export const POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS = Object.freeze([
  // The D-P14 inventory is the union of the D-P6/D-P8/D-P10 inventories
  // plus the plural-batch keys — the widest frozen inventory to date.
  ...POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS,
  // The agent-reach keys this cut exists to refuse: an agent never gains
  // a session, a secret, or an admission from the receiver's session, and
  // no chat-message lane enters it.
  "agentSession",
  "agentSecret",
  "agentAdmission",
  "chatMessage",
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

const wellFormedPrincipalRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("principal:") &&
  value.length > "principal:".length;

const safeNonNegativeInteger = (value: unknown): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0;

// The D-P2 freshness diagnosis, reimplemented with the same ordering and
// literals over the establishment metadata: metadata, then evaluation
// time, then maximum age, then future time; the fresh boundary is
// inclusive. A diagnosis is a diagnosis, never an admission.
const diagnoseEstablishmentFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.established_at_epoch_ms) ||
    checked.freshness_basis !== "establishment_event_time_only" ||
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
  const establishedAt = checked.established_at_epoch_ms as number;
  if (establishedAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - establishedAt;
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

const validRetractionRecord = (value: unknown): boolean => {
  if (value === null) return true;
  const retraction = record(value);
  return (
    retraction !== null &&
    exactKeys(retraction, [
      "contractVersion",
      "kind",
      "retracted_at_epoch_ms",
      "retractionPosture",
      "authority",
    ]) &&
    retraction.contractVersion === "pond-live-session-retraction-d-p15" &&
    retraction.kind === "pond-live-session-retraction" &&
    safeNonNegativeInteger(retraction.retracted_at_epoch_ms) &&
    retraction.retractionPosture ===
      "receiver_recorded_live_session_retraction_no_grant" &&
    retraction.authority === "none" &&
    !hasForbiddenKey(retraction, POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS)
  );
};

const validEstablishmentRecord = (value: unknown): boolean => {
  const establishment = record(value);
  const metadata = record(establishment?.establishmentMetadata);
  return (
    establishment !== null &&
    exactKeys(establishment, [
      "contractVersion",
      "kind",
      "principalRef",
      "establishmentBasis",
      "establishedCapability",
      "establishmentMetadata",
      "establishmentScopePosture",
      "establishmentRevocabilityPosture",
      "establishmentAttributionPosture",
      "agentScopePosture",
      "sharedSurfacePosture",
      "collaborativeWideningPosture",
      "activatedReadScopePosture",
      "memoryLaneExclusionPosture",
      "authorityPosture",
      "authority",
    ]) &&
    establishment.contractVersion === "pond-live-session-establishment-d-p15" &&
    establishment.kind === "pond-live-session-establishment" &&
    wellFormedPrincipalRef(establishment.principalRef) &&
    [
      "receiver_performed_local_authentication_session_establishment_not_inferred",
      "inferred_from_session_presence",
      "inferred_from_wallet_connection",
      "asserted_by_shell_producer",
      "inferred_from_structural_readiness",
      "inferred_from_observed_agent_presence",
    ].includes(String(establishment.establishmentBasis)) &&
    establishment.establishedCapability ===
      "receiver_live_session_scoped_shell_authentication" &&
    metadata !== null &&
    exactKeys(metadata, [
      "established_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadata.established_at_epoch_ms) &&
    metadata.freshness_basis === "establishment_event_time_only" &&
    metadata.currentness_posture ===
      "not_established_consumer_must_evaluate" &&
    [
      "not_established",
      "live_session_scoped_receiver_shell_restart_ends_establishment",
      "shell_process_scope_not_restart_ending_refused",
    ].includes(String(establishment.establishmentScopePosture)) &&
    [
      "not_established",
      "establishment_revocable_by_receiver_retraction",
    ].includes(String(establishment.establishmentRevocabilityPosture)) &&
    establishment.establishmentAttributionPosture ===
      "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant" &&
    establishment.agentScopePosture ===
      "no_agent_session_no_agent_secret_no_agent_admission" &&
    establishment.sharedSurfacePosture ===
      "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse" &&
    establishment.collaborativeWideningPosture ===
      "not_included_collaborative_reads_require_their_own_live_session_lane" &&
    establishment.activatedReadScopePosture ===
      "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign" &&
    establishment.memoryLaneExclusionPosture ===
      "establishment_excludes_memory_narrative_transcript_lanes" &&
    establishment.authorityPosture ===
      "establishment_grants_no_authority_membership_or_capability" &&
    establishment.authority === "none" &&
    !hasForbiddenKey(establishment, POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS)
  );
};

const establishmentAssessment = (
  reason: PondLiveSessionEstablishmentAssessment["reason"],
  establishmentRecordVersion: PondLiveSessionEstablishmentAssessment["establishmentRecordVersion"],
  establishmentScopePosture: PondLiveSessionEstablishmentAssessment["establishmentScopePosture"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedDp6: PondMappedDp6Echo,
  mappedDp8: PondMappedDp8Echo,
  mappedDp10: PondMappedDp10Echo,
  satisfiedChecks: readonly PondLiveSessionEstablishmentCheck[],
  unsatisfiedChecks: readonly PondLiveSessionEstablishmentCheck[],
): PondLiveSessionEstablishmentAssessment => {
  const established = reason === "all_session_establishment_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-live-session-establishment-d-p15",
    establishmentRecordVersion,
    assessmentKind: "deterministic_supplied_live_session_establishment",
    sessionEstablishmentState: established
      ? "live_session_scoped_authentication_established"
      : "not_established",
    reason,
    establishmentFreshnessDiagnosis: diagnosis,
    establishmentScopePosture: establishmentScopePosture,
    mappedDp6ObservationState: mappedDp6.state,
    mappedDp6Reason: mappedDp6.reason,
    mappedDp6FreshnessDiagnosis: mappedDp6.diagnosis,
    mappedDp8MechanicState: mappedDp8.mechanicState,
    mappedDp8Reason: mappedDp8.reason,
    mappedDp8Comparison: mappedDp8.comparison,
    mappedDp8RecomputedComparison: mappedDp8.recomputed,
    mappedDp8FreshnessDiagnosis: mappedDp8.diagnosis,
    mappedDp10ActivationState: mappedDp10.state,
    mappedDp10Reason: mappedDp10.reason,
    mappedDp10SessionScopePosture: mappedDp10.scopePosture,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The session is a receiver-owned authentication fact only: it never
    // becomes a grant, a membership or admission, an agent reach, a
    // credential, a PrincipalId authorization, memory admission, or
    // authority, and it never claims current truth. Authentication is not
    // authorization (agent-identity L75); the request is not itself the
    // grant (trusted-channel L100).
    sessionEstablishesGrant: false,
    sessionEstablishesMembershipOrAdmission: false,
    sessionGrantsAgentAccess: false,
    sessionEstablishesCurrentTruth: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

// The mapped echo shapes (mirroring the D-P14 leg interfaces — typed to
// the frozen contracts so a drift is a compile error, values carried
// verbatim from the frozen assessments). Field names stay generic: the
// frozen D-P10 field names the echoes read are tied through quoted-index
// reads in the builder, never re-declared as this cut's own names.
interface PondMappedDp6Echo {
  readonly state: PondLocalPrincipalAuthenticationObservationAssessment["authenticationObservationState"];
  readonly reason: PondLocalPrincipalAuthenticationObservationAssessment["reason"];
  readonly diagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
}

interface PondMappedDp8Echo {
  readonly mechanicState: PondLocalAuthenticationChallengeAssessment["authenticationMechanicState"];
  readonly reason: PondLocalAuthenticationChallengeAssessment["reason"];
  readonly comparison: PondLocalAuthenticationChallengeAssessment["comparison"];
  readonly recomputed: PondLocalAuthenticationChallengeAssessment["recomputedComparison"];
  readonly diagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
}

interface PondMappedDp10Echo {
  readonly state: PondPrivateReadActivationAssessment["activationState"];
  readonly reason: PondPrivateReadActivationAssessment["reason"];
  readonly scopePosture: PondPrivateReadActivationAssessment["sessionScopePosture"];
}

export function assessPondLiveSessionEstablishment(
  input: PondLiveSessionEstablishmentInput,
): PondLiveSessionEstablishmentAssessment {
  // The echoes are computed on every arm, before any cause is chosen: a
  // broken leg never unbinds the receiver's records, and an invalid arm
  // still diagnoses (D-P13 echo discipline).
  const dp6Leg = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: input.dp6ObservationRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    evaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    maximumAgeMs: input.receiverMaximumAgeMs,
  });
  const dp8Leg = assessPondLocalAuthenticationChallengeProof({
    proofRecord: input.dp8ProofRecord,
    verifierRecord: input.dp8VerifierRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    evaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    maximumAgeMs: input.receiverMaximumAgeMs,
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
  const mappedDp6: PondMappedDp6Echo = {
    state: dp6Leg.authenticationObservationState,
    reason: dp6Leg.reason,
    diagnosis: dp6Leg.freshnessDiagnosis,
  };
  const mappedDp8: PondMappedDp8Echo = {
    mechanicState: dp8Leg.authenticationMechanicState,
    reason: dp8Leg.reason,
    comparison: dp8Leg.comparison,
    recomputed: dp8Leg.recomputedComparison,
    diagnosis: dp8Leg.freshnessDiagnosis,
  };
  const mappedDp10: PondMappedDp10Echo = {
    state: dp10Leg["activationState"],
    reason: dp10Leg.reason,
    scopePosture: dp10Leg["sessionScopePosture"],
  };
  // The D-P8 fallback pattern: diagnose the raw evaluation pair even when
  // the record never becomes valid, so every arm carries an honest
  // establishment diagnosis.
  const fallbackDiagnosis = diagnoseEstablishmentFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (
    !validEstablishmentRecord(input.establishmentRecord) ||
    !validRetractionRecord(input.receiverRetractionRecord)
  )
    return establishmentAssessment(
      "establishment_record_invalid",
      "invalid",
      "not_established",
      fallbackDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks,
    );
  const establishment = input.establishmentRecord as Record<string, unknown>;
  const scopePosture = establishment.establishmentScopePosture as PondLiveSessionEstablishmentAssessment["establishmentScopePosture"];

  // The establishment record is valid here, so its own metadata is
  // diagnosed honestly — the fallback diagnosis above only covers the
  // record-invalid arm, where metadata may genuinely be absent.
  const ownDiagnosis = diagnoseEstablishmentFreshness(
    establishment.establishmentMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  const sessionCurrent = ownDiagnosis.state === "fresh";

  // Retraction is a present fact, checked before the legs: a retracted
  // session is refused regardless of how fresh the legs once were — and
  // the echo keeps the establishment's own honest freshness verdict.
  if (input.receiverRetractionRecord !== null)
    return establishmentAssessment(
      "receiver_retraction_on_record",
      "pond-live-session-establishment-d-p15",
      scopePosture,
      ownDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks,
    );

  // Session currency: the establishment event must be inside the declared
  // maximum age — required independently of the legs, so an expired
  // session refuses first even when every leg was once fresh (the frozen
  // echoes still carry each leg's own honest verdict).
  if (!sessionCurrent)
    return establishmentAssessment(
      "session_establishment_not_session_current",
      "pond-live-session-establishment-d-p15",
      scopePosture,
      ownDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks,
    );

  const dp6Observed =
    dp6Leg.reason === "all_observation_checks_satisfied" &&
    dp6Leg.freshnessDiagnosis.state === "fresh";
  const dp8Verified =
    dp8Leg.authenticationMechanicState === "receiver_verified_knowledge_factor" &&
    dp8Leg.freshnessDiagnosis.state === "fresh";
  const dp10Active =
    dp10Leg["activationState"] ===
    "fixture_structural_session_scoped_private_read_activation";

  const values = [
    wellFormedPrincipalRef(establishment.principalRef),
    wellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
      establishment.principalRef === input.receiverHeldPrincipalRef,
    establishment.establishmentBasis ===
      "receiver_performed_local_authentication_session_establishment_not_inferred",
    dp6Observed,
    dp8Verified,
    dp10Active,
    sessionCurrent &&
      establishment.establishmentScopePosture ===
        "live_session_scoped_receiver_shell_restart_ends_establishment" &&
      establishment.establishmentRevocabilityPosture ===
        "establishment_revocable_by_receiver_retraction" &&
      establishment.agentScopePosture ===
        "no_agent_session_no_agent_secret_no_agent_admission" &&
      establishment.sharedSurfacePosture ===
        "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
    establishment.memoryLaneExclusionPosture ===
      "establishment_excludes_memory_narrative_transcript_lanes" &&
      establishment.collaborativeWideningPosture ===
        "not_included_collaborative_reads_require_their_own_live_session_lane",
  ];
  const satisfied = establishmentChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = establishmentChecks.filter(
    (_, index) => values[index] !== true,
  );

  // The cause ladder reads only the honest mapped echoes it has: each
  // cause names exactly the leg that failed, no defensive literal
  // downstream of a cause.
  if (!dp6Observed)
    return establishmentAssessment(
      "authentication_event_not_observed_refused_or_unfresh",
      "pond-live-session-establishment-d-p15",
      scopePosture,
      ownDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks,
    );
  if (!dp8Verified)
    return establishmentAssessment(
      "knowledge_factor_not_verified_or_unfresh",
      "pond-live-session-establishment-d-p15",
      scopePosture,
      ownDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks,
    );
  if (!dp10Active)
    return establishmentAssessment(
      "frozen_activation_not_structurally_ready_or_not_session_current",
      "pond-live-session-establishment-d-p15",
      scopePosture,
      ownDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks,
    );
  // The scope posture is the declarative blocker when it is the one that
  // failed: a fresh-but-carried-over (non-restart-ending) scope, an
  // agent-reaching scope, a frame-collapse posture, or an
  // non-revocable establishment refuses here, as its own cause. (session
  // currency is already refused by its own cause above; the memory-lane
  // and collaborative-widening exclusions fold into the final
  // proof-incomplete cause with their unsatisfied check names intact.)
  if (!values[6])
    return establishmentAssessment(
      "session_scope_posture_not_restart_ending_or_not_agent_free",
      "pond-live-session-establishment-d-p15",
      scopePosture,
      ownDiagnosis,
      mappedDp6,
      mappedDp8,
      mappedDp10,
      [],
      establishmentChecks,
    );
  return establishmentAssessment(
    unsatisfied.length === 0
      ? "all_session_establishment_checks_satisfied"
      : "receiver_session_establishment_proof_incomplete",
    "pond-live-session-establishment-d-p15",
    scopePosture,
    ownDiagnosis,
    mappedDp6,
    mappedDp8,
    mappedDp10,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The establishment is performed,
// session-scoped, non-grant, and never becomes a membership, an agent
// reach, a credential, or authority.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP15Invariant_EstablishmentChecksExact = Assert<
  Equal<
    PondLiveSessionEstablishmentCheck,
    | "establishment_record_well_formed"
    | "establishment_bound_to_receiver_held_principal"
    | "establishment_basis_receiver_performed_not_inferred"
    | "shell_authentication_event_observed_by_receiver_fresh"
    | "knowledge_factor_verified_fresh_and_recompute_agreed"
    | "frozen_private_read_activation_reinspected_structurally_active_and_session_current"
    | "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching"
    | "establishment_excludes_memory_lanes_and_collaborative_widening"
  >
>;
export type PondStageDP15Invariant_StatesExact = Assert<
  Equal<
    PondLiveSessionEstablishmentAssessment["sessionEstablishmentState"],
    "not_established" | "live_session_scoped_authentication_established"
  >
>;
export type PondStageDP15Invariant_ReasonsExact = Assert<
  Equal<
    PondLiveSessionEstablishmentAssessment["reason"],
    | "establishment_record_invalid"
    | "receiver_retraction_on_record"
    | "session_establishment_not_session_current"
    | "authentication_event_not_observed_refused_or_unfresh"
    | "knowledge_factor_not_verified_or_unfresh"
    | "frozen_activation_not_structurally_ready_or_not_session_current"
    | "session_scope_posture_not_restart_ending_or_not_agent_free"
    | "receiver_session_establishment_proof_incomplete"
    | "all_session_establishment_checks_satisfied"
  >
>;
export type PondStageDP15Invariant_FreshnessVocabularyMatchesDP2 = Assert<
  Equal<
    PondLiveSessionEstablishmentAssessment["establishmentFreshnessDiagnosis"],
    PondAgentPresenceObservationFreshnessDiagnosis
  >
>;
export type PondStageDP15Invariant_EstablishmentNeverBecomesGrantMembershipAgentOrAuthority =
  Assert<
    Equal<
      [
        PondLiveSessionEstablishmentAssessment["sessionEstablishesGrant"],
        PondLiveSessionEstablishmentAssessment["sessionEstablishesMembershipOrAdmission"],
        PondLiveSessionEstablishmentAssessment["sessionGrantsAgentAccess"],
        PondLiveSessionEstablishmentAssessment["sessionEstablishesCurrentTruth"],
        PondLiveSessionEstablishmentAssessment["credentialAdmitted"],
        PondLiveSessionEstablishmentAssessment["principalIdAcceptedAsAuthorization"],
        PondLiveSessionEstablishmentAssessment["personalMemoryContentAdmitted"],
        PondLiveSessionEstablishmentAssessment["currentTruthAdmitted"],
        PondLiveSessionEstablishmentAssessment["runtimeActivationPosture"],
        PondLiveSessionEstablishmentAssessment["authority"],
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
export type PondStageDP15Invariant_NoForbiddenEstablishmentRecordKeys = Assert<
  HasAnyKey<PondLiveSessionEstablishmentRecord, (typeof POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP15Invariant_NoForbiddenEstablishmentAssessmentKeys = Assert<
  HasAnyKey<PondLiveSessionEstablishmentAssessment, (typeof POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS)[number]> extends false
    ? true
    : false
>;