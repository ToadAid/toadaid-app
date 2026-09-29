// Stage D-P10 private-read activation ceremony.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture: the
// evidence-activation contract separates evidence of behavior from
// authority to activate behavior — activation is "a separate state
// transition" (candidate → verified candidate → a separate governance
// boundary → activated with explicit effective capabilities), requires at
// an authority-affecting boundary that verification be "current,
// applicable to the production subject, and independently inspected"
// (activation_denied otherwise), and states that completion evidence does
// not answer "Should this capability be activated?" — so no identity-chain
// readiness alone activates anything. The capability-authority boundary
// makes every read a capability and requires "any transition that
// broadens effective authority" to be "attributable to trusted runtime
// policy or explicit governance"; the delegated-authority contract
// (L414: "A Grant is necessary only where the applicable policy requires
// delegated authority") leaves the principal's own reads a non-grant
// space — the receiver's activation record attributes itself to receiver
// trusted-runtime policy and creates no Grant, no GrantId, no grant
// lifecycle. Scope sovereignty law 9 ("Temporary authority does not
// silently survive restart") is modeled as session-scoped activation;
// law 1 and law 6 hold as postures ("Memory never grants permission",
// "Personal state is private by default"); collaborative reads and any
// memory-lane crossing or release stay outside this cut. The activated
// read class is honest about what this app holds: the receiver's own
// principal-structural records — re-inspected through their own frozen
// assessors at the composition, which IS the independent inspection the
// activation law requires. No assessment here carries a
// `privateReadsActivated` key — the frozen D-P0…D-P9 tuples remain the
// only carriers of that name, always false; this cut's honesty lives in
// its own state vocabulary.

import type {
  PondAgentPresenceObservationFreshnessDiagnosis,
} from "./pond-agent-presence-observation-intake.js";
import type { PondPrincipalIdentityReadinessCompositionAssessment } from "./pond-principal-identity-readiness-composition.js";
import { assessPondPrincipalIdentityReadinessComposition } from "./pond-principal-identity-readiness-composition.ts";
import type { PondPrincipalIdentityReadinessCheck } from "./pond-principal-identity-readiness-composition.js";

export type PondPrivateReadActivationBasis =
  | "not_activated"
  | "receiver_explicit_activation_not_inferred"
  // Valid-but-unsatisfied fail-closed literals: an activation claimed from
  // any of these bases is exactly what the ceremony exists to refuse.
  // Structural readiness, identity-chain completion, issuance, and mapping
  // are completion evidence — completion never answers whether to
  // activate (evidence-activation L49-55); an operator prompt is never an
  // authority decision (trusted-channel: no prompt grants authority).
  | "inferred_from_structural_readiness"
  | "inferred_from_identity_chain_completion"
  | "derived_from_issuance_or_mapping"
  | "inferred_from_operator_prompt";

export interface PondPrivateReadActivationMetadata {
  readonly activated_at_epoch_ms: number;
  readonly freshness_basis: "activation_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

export interface PondPrivateReadActivationRecord {
  readonly contractVersion: "pond-private-read-activation-d-p10";
  readonly kind: "pond-private-read-activation";
  readonly principalRef: string;
  readonly activationBasis: PondPrivateReadActivationBasis;
  readonly activatedCapability: "receiver_private_read_of_own_structural_records";
  readonly activationMetadata: PondPrivateReadActivationMetadata;
  readonly effectiveCapabilityScopePosture: "read_only_single_principal_own_structural_records_no_write_no_send_no_sign";
  readonly activationScopePosture:
    | "not_established"
    | "session_scoped_receiver_restart_ends_activation";
  readonly revocabilityPosture:
    | "not_established"
    | "activation_revocable_by_receiver_retraction";
  readonly trustedPolicyAttributionPosture: "activation_attributable_to_receiver_trusted_runtime_policy_no_grant";
  readonly grantSufficiencyPosture: "activation_requires_no_grant";
  readonly identityChainPosture: "activation_requires_current_verified_principal_identity_chain";
  readonly collaborativeReadPosture: "not_included_single_principal_reads_only";
  readonly memoryLaneAuthorityPosture: "activation_authorizes_no_memory_lane_crossing_or_release";
  readonly authorityPosture: "activation_grants_no_authority_beyond_activated_read_scope";
  readonly authority: "none";
}

// Receiver-owned activation checks. A check is satisfied only when the
// record's own proof field carries the receiver-owned literal; a readiness
// or chain-completion inferred activation never satisfies any of them.
export type PondPrivateReadActivationCheck =
  | "principal_ref_well_formed"
  | "activation_bound_to_receiver_held_principal"
  | "activation_basis_explicitly_receiver_owned_not_inferred_from_readiness"
  | "identity_chain_structurally_ready_and_current"
  | "activation_session_scoped_fresh_and_restart_expiring"
  | "activation_requires_no_grant_trusted_policy_attributed_and_stays_revocable"
  | "activation_excludes_memory_lanes_and_multi_principal_scope";

export interface PondPrivateReadActivationInput {
  readonly activationRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly dp5CeremonyRecord: unknown;
  readonly dp8VerifierRecord: unknown;
  readonly dp8ProofRecord: unknown;
  readonly dp9IssuanceRecord: unknown;
  readonly dp9MappingRecord: unknown;
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export interface PondPrivateReadActivationAssessment {
  readonly contractVersion: "pond-private-read-activation-d-p10";
  readonly activationRecordVersion: "pond-private-read-activation-d-p10" | "invalid";
  readonly assessmentKind: "deterministic_supplied_private_read_activation";
  readonly activationState:
    | "not_activated"
    | "fixture_structural_session_scoped_private_read_activation";
  readonly reason:
    | "activation_record_invalid"
    | "identity_chain_not_structurally_ready"
    | "activation_not_session_current"
    | "receiver_activation_proof_incomplete"
    | "all_activation_checks_satisfied";
  readonly activationFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly effectiveReadScopePosture: "read_only_single_principal_own_structural_records_no_write_no_send_no_sign";
  readonly sessionScopePosture:
    | "not_established"
    | "session_scoped_receiver_restart_ends_activation";
  readonly collaborativeReadScopePosture: "not_included_single_principal_reads_only";
  readonly identityChainReadinessState:
    | "not_ready"
    | "structurally_ready_private_reads_still_refused";
  readonly identityChainUnsatisfiedChecks: readonly PondPrincipalIdentityReadinessCheck[];
  readonly satisfiedChecks: readonly PondPrivateReadActivationCheck[];
  readonly unsatisfiedChecks: readonly PondPrivateReadActivationCheck[];
  readonly activationEstablishesGrant: false;
  readonly credentialAdmitted: false;
  readonly authenticationPerformed: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const activationChecks = Object.freeze([
  "principal_ref_well_formed",
  "activation_bound_to_receiver_held_principal",
  "activation_basis_explicitly_receiver_owned_not_inferred_from_readiness",
  "identity_chain_structurally_ready_and_current",
  "activation_session_scoped_fresh_and_restart_expiring",
  "activation_requires_no_grant_trusted_policy_attributed_and_stays_revocable",
  "activation_excludes_memory_lanes_and_multi_principal_scope",
] as const satisfies readonly PondPrivateReadActivationCheck[]);

// Keys whose presence in an activation or read record would mean the read
// became a content store, a credential, secret, transport, or authority
// artifact. The D-P9 inventory plus the read-content-shaped and grant
// identity keys.
export const POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS = Object.freeze([
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
  "plaintext",
  "answer",
  "privateKey",
  "mnemonic",
  "content",
  "payload",
  "body",
  "snippet",
  "excerpt",
  "quote",
  "grantId",
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
) =>
  exactArray(Object.keys(value).sort(), [...expected].sort());

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
// literals: metadata, then evaluation time, then maximum age, then future
// time; the fresh boundary is inclusive. A diagnosis is a diagnosis,
// never an admission.
const diagnoseFreshness = (
  activationMetadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const metadata = record(activationMetadata);
  if (
    metadata === null ||
    !safeNonNegativeInteger(metadata.activated_at_epoch_ms) ||
    metadata.freshness_basis !== "activation_event_time_only" ||
    metadata.currentness_posture !== "not_established_consumer_must_evaluate"
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
  const activated_at_epoch_ms = metadata.activated_at_epoch_ms as number;
  if (activated_at_epoch_ms > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - activated_at_epoch_ms;
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

const validActivationRecord = (value: unknown): boolean => {
  const activation = record(value);
  const metadata = record(activation?.activationMetadata);
  return (
    activation !== null &&
    exactKeys(activation, [
      "contractVersion",
      "kind",
      "principalRef",
      "activationBasis",
      "activatedCapability",
      "activationMetadata",
      "effectiveCapabilityScopePosture",
      "activationScopePosture",
      "revocabilityPosture",
      "trustedPolicyAttributionPosture",
      "grantSufficiencyPosture",
      "identityChainPosture",
      "collaborativeReadPosture",
      "memoryLaneAuthorityPosture",
      "authorityPosture",
      "authority",
    ]) &&
    activation.contractVersion === "pond-private-read-activation-d-p10" &&
    activation.kind === "pond-private-read-activation" &&
    wellFormedPrincipalRef(activation.principalRef) &&
    [
      "not_activated",
      "receiver_explicit_activation_not_inferred",
      "inferred_from_structural_readiness",
      "inferred_from_identity_chain_completion",
      "derived_from_issuance_or_mapping",
      "inferred_from_operator_prompt",
    ].includes(String(activation.activationBasis)) &&
    activation.activatedCapability ===
      "receiver_private_read_of_own_structural_records" &&
    metadata !== null &&
    exactKeys(metadata, [
      "activated_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadata.activated_at_epoch_ms) &&
    metadata.freshness_basis === "activation_event_time_only" &&
    metadata.currentness_posture ===
      "not_established_consumer_must_evaluate" &&
    activation.effectiveCapabilityScopePosture ===
      "read_only_single_principal_own_structural_records_no_write_no_send_no_sign" &&
    [
      "not_established",
      "session_scoped_receiver_restart_ends_activation",
    ].includes(String(activation.activationScopePosture)) &&
    [
      "not_established",
      "activation_revocable_by_receiver_retraction",
    ].includes(String(activation.revocabilityPosture)) &&
    activation.trustedPolicyAttributionPosture ===
      "activation_attributable_to_receiver_trusted_runtime_policy_no_grant" &&
    activation.grantSufficiencyPosture === "activation_requires_no_grant" &&
    activation.identityChainPosture ===
      "activation_requires_current_verified_principal_identity_chain" &&
    activation.collaborativeReadPosture ===
      "not_included_single_principal_reads_only" &&
    activation.memoryLaneAuthorityPosture ===
      "activation_authorizes_no_memory_lane_crossing_or_release" &&
    activation.authorityPosture ===
      "activation_grants_no_authority_beyond_activated_read_scope" &&
    activation.authority === "none" &&
    !hasForbiddenKey(activation, POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS)
  );
};

const activationAssessment = (
  reason: PondPrivateReadActivationAssessment["reason"],
  activationRecordVersion: PondPrivateReadActivationAssessment["activationRecordVersion"],
  sessionScopePosture: PondPrivateReadActivationAssessment["sessionScopePosture"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  identityChainReadinessState: PondPrivateReadActivationAssessment["identityChainReadinessState"],
  identityChainUnsatisfiedChecks: readonly PondPrincipalIdentityReadinessCheck[],
  satisfiedChecks: readonly PondPrivateReadActivationCheck[],
  unsatisfiedChecks: readonly PondPrivateReadActivationCheck[],
): PondPrivateReadActivationAssessment => {
  const activated = reason === "all_activation_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-private-read-activation-d-p10",
    activationRecordVersion,
    assessmentKind: "deterministic_supplied_private_read_activation",
    activationState: activated
      ? "fixture_structural_session_scoped_private_read_activation"
      : "not_activated",
    reason,
    activationFreshnessDiagnosis: diagnosis,
    effectiveReadScopePosture:
      "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
    sessionScopePosture: activated
      ? sessionScopePosture
      : activationRecordVersion === "invalid"
        ? "not_established"
        : sessionScopePosture,
    collaborativeReadScopePosture: "not_included_single_principal_reads_only",
    identityChainReadinessState,
    identityChainUnsatisfiedChecks: Object.freeze([
      ...identityChainUnsatisfiedChecks,
    ]),
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The activation is non-grant receiver trusted-policy attribution
    // only: it never becomes a grant, a credential admission, an
    // authentication, memory admission, a current-truth claim, or
    // authority. The frozen D-P0…D-P9 `privateReadsActivated: false`
    // literal stays the only carrier of that name; this cut's honesty
    // lives in its own state vocabulary, so no field here flips the
    // frozen tuple.
    activationEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondPrivateReadActivation(
  input: PondPrivateReadActivationInput,
): PondPrivateReadActivationAssessment {
  // D-P8 fallback pattern: diagnose the raw evaluation pair even when the
  // record never becomes valid, so every arm carries an honest diagnosis.
  const fallbackDiagnosis = diagnoseFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validActivationRecord(input.activationRecord))
    return activationAssessment(
      "activation_record_invalid",
      "invalid",
      "not_established",
      fallbackDiagnosis,
      "not_ready",
      [],
      [],
      activationChecks,
    );
  const activation = input.activationRecord as Record<string, unknown>;

  // The identity chain is re-read through its own composition: the read
  // of the chain happens here, and readiness alone still activates
  // nothing (evidence-activation L49-55).
  const identityChain = assessPondPrincipalIdentityReadinessComposition({
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    receiverVerifiedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  });
  const identityChainReady =
    identityChain.readinessState === "structurally_ready_private_reads_still_refused" &&
    identityChain.dp8FreshnessDiagnosis.state === "fresh";

  // Session currency: the activation event must be inside the declared
  // maximum age, and the session scope must be the restart-ending
  // posture. Law 9: temporary authority does not silently survive
  // restart — a fresh-but-carried-over activation is not modeled here;
  // only the explicit session posture satisfies.
  const diagnosis = diagnoseFreshness(
    activation.activationMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  const sessionCurrent = diagnosis.state === "fresh";

  if (!identityChainReady)
    return activationAssessment(
      "identity_chain_not_structurally_ready",
      "pond-private-read-activation-d-p10",
      activation.activationScopePosture as PondPrivateReadActivationAssessment["sessionScopePosture"],
      diagnosis,
      identityChain.readinessState,
      identityChain.unsatisfiedChecks,
      [],
      activationChecks,
    );
  if (!sessionCurrent)
    return activationAssessment(
      "activation_not_session_current",
      "pond-private-read-activation-d-p10",
      activation.activationScopePosture as PondPrivateReadActivationAssessment["sessionScopePosture"],
      diagnosis,
      identityChain.readinessState,
      [],
      [],
      activationChecks,
    );

  const values = [
    wellFormedPrincipalRef(activation.principalRef),
    wellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
      activation.principalRef === input.receiverHeldPrincipalRef,
    activation.activationBasis === "receiver_explicit_activation_not_inferred",
    identityChainReady,
    sessionCurrent &&
      activation.activationScopePosture ===
        "session_scoped_receiver_restart_ends_activation",
    activation.trustedPolicyAttributionPosture ===
      "activation_attributable_to_receiver_trusted_runtime_policy_no_grant" &&
      activation.grantSufficiencyPosture === "activation_requires_no_grant" &&
      activation.revocabilityPosture ===
        "activation_revocable_by_receiver_retraction",
    activation.memoryLaneAuthorityPosture ===
      "activation_authorizes_no_memory_lane_crossing_or_release" &&
      activation.collaborativeReadPosture ===
        "not_included_single_principal_reads_only",
  ];
  const satisfied = activationChecks.filter((_, index) => values[index] === true);
  const unsatisfied = activationChecks.filter((_, index) => values[index] !== true);
  return activationAssessment(
    unsatisfied.length === 0
      ? "all_activation_checks_satisfied"
      : "receiver_activation_proof_incomplete",
    "pond-private-read-activation-d-p10",
    activation.activationScopePosture as PondPrivateReadActivationAssessment["sessionScopePosture"],
    diagnosis,
    identityChain.readinessState,
    [],
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The activation is explicit,
// session-scoped, non-grant, and never becomes a credential, an
// authentication, memory admission, or authority.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP10Invariant_ActivationChecksExact = Assert<
  Equal<
    PondPrivateReadActivationCheck,
    | "principal_ref_well_formed"
    | "activation_bound_to_receiver_held_principal"
    | "activation_basis_explicitly_receiver_owned_not_inferred_from_readiness"
    | "identity_chain_structurally_ready_and_current"
    | "activation_session_scoped_fresh_and_restart_expiring"
    | "activation_requires_no_grant_trusted_policy_attributed_and_stays_revocable"
    | "activation_excludes_memory_lanes_and_multi_principal_scope"
  >
>;
export type PondStageDP10Invariant_ActivationStatesExact = Assert<
  Equal<
    PondPrivateReadActivationAssessment["activationState"],
    "not_activated" | "fixture_structural_session_scoped_private_read_activation"
  >
>;
export type PondStageDP10Invariant_ActivationReasonsExact = Assert<
  Equal<
    PondPrivateReadActivationAssessment["reason"],
    | "activation_record_invalid"
    | "identity_chain_not_structurally_ready"
    | "activation_not_session_current"
    | "receiver_activation_proof_incomplete"
    | "all_activation_checks_satisfied"
  >
>;
export type PondStageDP10Invariant_ActivationNeverBecomesGrantCredentialOrAuthority =
  Assert<
    Equal<
      [
        PondPrivateReadActivationAssessment["activationEstablishesGrant"],
        PondPrivateReadActivationAssessment["credentialAdmitted"],
        PondPrivateReadActivationAssessment["authenticationPerformed"],
        PondPrivateReadActivationAssessment["principalIdAcceptedAsAuthorization"],
        PondPrivateReadActivationAssessment["personalMemoryContentAdmitted"],
        PondPrivateReadActivationAssessment["currentTruthAdmitted"],
        PondPrivateReadActivationAssessment["runtimeActivationPosture"],
        PondPrivateReadActivationAssessment["authority"],
      ],
      [
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
export type PondStageDP10Invariant_NoForbiddenActivationRecordKeys = Assert<
  HasAnyKey<PondPrivateReadActivationRecord, (typeof POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP10Invariant_NoForbiddenActivationAssessmentKeys = Assert<
  HasAnyKey<PondPrivateReadActivationAssessment, (typeof POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS)[number]> extends false
    ? true
    : false
>;