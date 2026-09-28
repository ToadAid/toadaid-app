// Stage D-P6 receiver-owned local principal authentication observation
// performer seam.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture
// (contracts/scope-sovereignty-contract.md: a provider, model, browser,
// device, session, room, repository, wallet, or conversation is not
// automatically a principal; contracts/agent-identity-and-specialist-
// admission-contract.md: "Authentication is not authorization", external
// identity is evidence only, and the binding is revocable independently of
// provider session, transport, or external registry; contracts/
// trusted-channel-separation-contract.md: the binding must not be writable
// through operator messages, documents, provider output, or conversation
// history). This cut establishes the performer seam for the one thing every
// prior Stage D cut deferred: the receiver's own observed local
// authentication event. The observation record carries the FACT of the
// event — never a credential — bound to the receiver-held principal over a
// receiver-owned local shell channel, with a freshness diagnosis on the
// observation that reuses the D-P2 vocabulary verbatim (a diagnosis is not
// an admission), and with producer-asserted or session/wallet-inferred
// event claims failing closed as valid-but-unsatisfied records. The fixture
// observation can complete structurally, and even then it never becomes a
// live authentication, a credential admission, a PrincipalId issuance, or
// authority: the actual shell event emission is a later, separately
// planned activation, and no credential backend, key format, or identity
// provider is chosen by this contract.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";

export type PondLocalPrincipalAuthenticationEventState =
  | "not_observed"
  | "receiver_observed_local_authentication_event"
  // Valid-but-unsatisfied fail-closed literals: an event claimed from any
  // of these states is exactly what the performer exists to refuse. A
  // producer self-assertion, session presence, or wallet connection never
  // establishes an authentication observation; the record stays valid and
  // its event check stays unsatisfied.
  | "asserted_by_producer"
  | "inferred_from_session_presence"
  | "inferred_from_wallet_connection";

export type PondLocalPrincipalAuthenticationObservationChannel =
  | "not_established"
  | "receiver_owned_local_shell_channel";

// The D-P2 freshness vocabulary, reused verbatim: the diagnosis is a
// diagnosis, never an admission.
export type PondLocalPrincipalAuthenticationFreshnessState =
  | "fresh"
  | "stale"
  | "unknown";

export type PondLocalPrincipalAuthenticationFreshnessReason =
  | "within_declared_maximum_age"
  | "declared_maximum_age_expired"
  | "observation_metadata_missing_or_invalid"
  | "evaluation_time_invalid"
  | "maximum_age_invalid"
  | "observation_time_in_future";

export interface PondLocalPrincipalAuthenticationObservationMetadata {
  readonly observed_at_epoch_ms: number;
  readonly freshness_basis: "source_observation_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

export interface PondLocalPrincipalAuthenticationObservationRecord {
  readonly contractVersion: "pond-local-principal-authentication-observation-d-p6";
  readonly kind: "pond-local-principal-authentication-observation";
  readonly principalRef: string;
  readonly eventState: PondLocalPrincipalAuthenticationEventState;
  readonly observationChannel: PondLocalPrincipalAuthenticationObservationChannel;
  readonly secretFreeFieldInventoryPosture:
    | "not_observed"
    | "inventory_secret_free_no_credential_field_observed";
  readonly observationMetadata: PondLocalPrincipalAuthenticationObservationMetadata;
  readonly memoryLaneExclusionPosture:
    | "not_established"
    | "observation_excludes_memory_narrative_transcript_lanes";
  readonly authorityPosture: "observation_grants_no_authority_membership_or_capability";
  readonly authenticationPosture:
    | "not_established"
    | "fixture_structural_only_no_live_authentication";
  readonly authority: "none";
}

// Receiver-owned performer checks. A check is satisfied only when the
// record's own proof field carries the receiver-observed literal; a
// producer assertion, a session inference, or a wallet inference never
// satisfies any of them.
export type PondLocalPrincipalAuthenticationObservationCheck =
  | "authentication_event_receiver_observed"
  | "authentication_event_bound_to_receiver_held_principal"
  | "authentication_observation_channel_receiver_owned"
  | "authentication_observation_secret_free"
  | "authentication_observation_fresh"
  | "authentication_observation_excludes_memory_and_lane_content"
  | "authentication_observation_grants_no_authority";

export interface PondLocalPrincipalAuthenticationObservationInput {
  readonly observationRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly evaluatedAtEpochMs: unknown;
  readonly maximumAgeMs: unknown;
}

export interface PondLocalPrincipalAuthenticationObservationAssessment {
  readonly contractVersion: "pond-local-principal-authentication-observation-d-p6";
  readonly observationRecordVersion:
    | "pond-local-principal-authentication-observation-d-p6"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_authentication_observation";
  readonly authenticationObservationState:
    | "not_observed"
    | "fixture_observed_local_authentication";
  readonly reason:
    | "observation_record_invalid"
    | "receiver_authentication_proof_incomplete"
    | "all_observation_checks_satisfied";
  readonly freshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly authenticationPosture:
    | "not_established"
    | "fixture_structural_only_no_live_authentication";
  readonly satisfiedChecks: readonly PondLocalPrincipalAuthenticationObservationCheck[];
  readonly unsatisfiedChecks: readonly PondLocalPrincipalAuthenticationObservationCheck[];
  readonly liveAuthenticationPerformed: false;
  readonly observedPresenceAcceptedAsAuthentication: false;
  readonly observedIdentityAcceptedAsPrincipalId: false;
  readonly principalIdIssued: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const observationChecks = Object.freeze([
  "authentication_event_receiver_observed",
  "authentication_event_bound_to_receiver_held_principal",
  "authentication_observation_channel_receiver_owned",
  "authentication_observation_secret_free",
  "authentication_observation_fresh",
  "authentication_observation_excludes_memory_and_lane_content",
  "authentication_observation_grants_no_authority",
] as const satisfies readonly PondLocalPrincipalAuthenticationObservationCheck[]);

// Keys whose presence in an observation record would mean a credential (a
// password, secret, token, wallet address), desk personal memory, an
// effect/transport channel, or an identity-binding collapse (a PrincipalId
// field) entered the observation as data. The record carries the FACT of
// the event, never the credential itself.
export const POND_STAGE_DP6_FORBIDDEN_OBSERVATION_KEYS = Object.freeze([
  "PrincipalId",
  "principalId",
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
  "secret",
  "token",
  "apiKey",
  "password",
  "passphrase",
  "session",
  "wallet",
  "address",
  "credential",
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

// The D-P2 observation metadata vocabulary, reused verbatim: source-owned
// observation time only, and currentness explicitly the consumer's job.
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
    metadata.currentness_posture === "not_established_consumer_must_evaluate"
  );
};

// The D-P2 freshness diagnosis, reimplemented with the same ordering and
// literals: metadata, then evaluation time, then maximum age, then future
// time; the fresh boundary is inclusive. A diagnosis is never an admission.
const diagnoseFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.observed_at_epoch_ms) ||
    checked.freshness_basis !== "source_observation_time_only" ||
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
  const observedAt = checked.observed_at_epoch_ms as number;
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

const validObservationRecord = (value: unknown): boolean => {
  const observation = record(value);
  if (
    observation === null ||
    !exactKeys(observation, [
      "contractVersion",
      "kind",
      "principalRef",
      "eventState",
      "observationChannel",
      "secretFreeFieldInventoryPosture",
      "observationMetadata",
      "memoryLaneExclusionPosture",
      "authorityPosture",
      "authenticationPosture",
      "authority",
    ]) ||
    observation.contractVersion !==
      "pond-local-principal-authentication-observation-d-p6" ||
    observation.kind !== "pond-local-principal-authentication-observation" ||
    !wellFormedPrincipalRef(observation.principalRef) ||
    ![
      "not_observed",
      "receiver_observed_local_authentication_event",
      "asserted_by_producer",
      "inferred_from_session_presence",
      "inferred_from_wallet_connection",
    ].includes(String(observation.eventState)) ||
    !["not_established", "receiver_owned_local_shell_channel"].includes(
      String(observation.observationChannel),
    ) ||
    ![
      "not_observed",
      "inventory_secret_free_no_credential_field_observed",
    ].includes(String(observation.secretFreeFieldInventoryPosture)) ||
    !validObservationMetadata(observation.observationMetadata) ||
    ![
      "not_established",
      "observation_excludes_memory_narrative_transcript_lanes",
    ].includes(String(observation.memoryLaneExclusionPosture)) ||
    observation.authorityPosture !==
      "observation_grants_no_authority_membership_or_capability" ||
    ![
      "not_established",
      "fixture_structural_only_no_live_authentication",
    ].includes(String(observation.authenticationPosture)) ||
    observation.authority !== "none" ||
    hasForbiddenKey(observation, POND_STAGE_DP6_FORBIDDEN_OBSERVATION_KEYS)
  )
    return false;
  return true;
};

const assessment = (
  reason: PondLocalPrincipalAuthenticationObservationAssessment["reason"],
  observationRecordVersion: PondLocalPrincipalAuthenticationObservationAssessment["observationRecordVersion"],
  freshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  satisfiedChecks: readonly PondLocalPrincipalAuthenticationObservationCheck[],
  unsatisfiedChecks: readonly PondLocalPrincipalAuthenticationObservationCheck[],
): PondLocalPrincipalAuthenticationObservationAssessment =>
  Object.freeze({
    contractVersion: "pond-local-principal-authentication-observation-d-p6",
    observationRecordVersion,
    assessmentKind: "deterministic_supplied_authentication_observation",
    authenticationObservationState:
      reason === "all_observation_checks_satisfied"
        ? "fixture_observed_local_authentication"
        : "not_observed",
    reason,
    freshnessDiagnosis,
    authenticationPosture:
      reason === "all_observation_checks_satisfied"
        ? "fixture_structural_only_no_live_authentication"
        : "not_established",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The performer seam accepts the fact of an observed event: it never
    // performs one, never admits a credential, never issues a PrincipalId,
    // never admits memory, and never grants authority. The actual shell
    // event emission is a later, separately planned activation.
    liveAuthenticationPerformed: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    principalIdIssued: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondLocalPrincipalAuthenticationObservation(
  input: PondLocalPrincipalAuthenticationObservationInput,
): PondLocalPrincipalAuthenticationObservationAssessment {
  if (!validObservationRecord(input.observationRecord)) {
    const invalidDiagnosis = diagnoseFreshness(
      record(input.observationRecord)?.observationMetadata,
      input.evaluatedAtEpochMs,
      input.maximumAgeMs,
    );
    return assessment(
      "observation_record_invalid",
      "invalid",
      invalidDiagnosis,
      [],
      observationChecks,
    );
  }
  const observation = input.observationRecord as Record<string, unknown>;
  const freshnessDiagnosis = diagnoseFreshness(
    observation.observationMetadata,
    input.evaluatedAtEpochMs,
    input.maximumAgeMs,
  );
  const values = [
    observation.eventState === "receiver_observed_local_authentication_event",
    // The event must land on the receiver's own held principal — the same
    // ref the receiver's D-P0 projection binds — never an invented or
    // externally observed one.
    wellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
      observation.principalRef === input.receiverHeldPrincipalRef,
    observation.observationChannel === "receiver_owned_local_shell_channel",
    observation.secretFreeFieldInventoryPosture ===
      "inventory_secret_free_no_credential_field_observed",
    freshnessDiagnosis.state === "fresh",
    observation.memoryLaneExclusionPosture ===
      "observation_excludes_memory_narrative_transcript_lanes",
    // The no-authority posture is the structural fact itself (already
    // validated); this check restates it as the receiver's own satisfied
    // proof.
    observation.authorityPosture ===
      "observation_grants_no_authority_membership_or_capability",
  ];
  const satisfied = observationChecks.filter((_, index) => values[index]);
  const unsatisfied = observationChecks.filter((_, index) => !values[index]);
  // The fixture observation can complete structurally, but it never
  // becomes a live authentication event or authority.
  return assessment(
    unsatisfied.length === 0
      ? "all_observation_checks_satisfied"
      : "receiver_authentication_proof_incomplete",
    "pond-local-principal-authentication-observation-d-p6",
    freshnessDiagnosis,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The performer seam proves
// observation vocabulary only: it never becomes a live authentication
// event, a credential admission, a PrincipalId issuance, or authority.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP6Invariant_EventStatesExact = Assert<
  Equal<
    PondLocalPrincipalAuthenticationEventState,
    | "not_observed"
    | "receiver_observed_local_authentication_event"
    | "asserted_by_producer"
    | "inferred_from_session_presence"
    | "inferred_from_wallet_connection"
  >
>;
export type PondStageDP6Invariant_StatesExact = Assert<
  Equal<
    PondLocalPrincipalAuthenticationObservationAssessment["authenticationObservationState"],
    "not_observed" | "fixture_observed_local_authentication"
  >
>;
export type PondStageDP6Invariant_ReasonsExact = Assert<
  Equal<
    PondLocalPrincipalAuthenticationObservationAssessment["reason"],
    | "observation_record_invalid"
    | "receiver_authentication_proof_incomplete"
    | "all_observation_checks_satisfied"
  >
>;
export type PondStageDP6Invariant_FreshnessVocabularyMatchesDP2 = Assert<
  Equal<
    PondLocalPrincipalAuthenticationObservationAssessment["freshnessDiagnosis"],
    PondAgentPresenceObservationFreshnessDiagnosis
  >
>;
export type PondStageDP6Invariant_ObservationNeverBecomesPrincipalIdCredentialOrAuthority =
  Assert<
    Equal<
      [
        PondLocalPrincipalAuthenticationObservationAssessment["liveAuthenticationPerformed"],
        PondLocalPrincipalAuthenticationObservationAssessment["observedPresenceAcceptedAsAuthentication"],
        PondLocalPrincipalAuthenticationObservationAssessment["observedIdentityAcceptedAsPrincipalId"],
        PondLocalPrincipalAuthenticationObservationAssessment["principalIdIssued"],
        PondLocalPrincipalAuthenticationObservationAssessment["personalMemoryContentAdmitted"],
        PondLocalPrincipalAuthenticationObservationAssessment["currentTruthAdmitted"],
        PondLocalPrincipalAuthenticationObservationAssessment["runtimeActivationPosture"],
        PondLocalPrincipalAuthenticationObservationAssessment["authority"],
      ],
      [false, false, false, false, false, false, "not_included", "none"]
    >
  >;
export type PondStageDP6Invariant_NoForbiddenRecordKeys = Assert<
  HasAnyKey<PondLocalPrincipalAuthenticationObservationRecord, (typeof POND_STAGE_DP6_FORBIDDEN_OBSERVATION_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP6Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondLocalPrincipalAuthenticationObservationAssessment, (typeof POND_STAGE_DP6_FORBIDDEN_OBSERVATION_KEYS)[number]> extends false
    ? true
    : false
>;