// Stage D-P14 collaborative structural-read activation gate.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture: scope
// sovereignty L205 reserves every exceptional administrative read to
// "separately defined authority, scope, audience, audit, and human-
// governed policy" — this gate is that separately defined read boundary,
// and it defines no authority. Social-control-plane L255-257 ("Agents may
// collaborate. Humans remain sovereign. Shared scopes own only what is
// explicitly theirs."), L102 (joining does not merge scopes), and L172
// (the only two-principals sentence, isolation) bound what the join can
// mean: two explicitly declared principals, their own structural records,
// nothing shared and nothing merged. Trusted-channel L80-100: the six
// protected classes stay protected and "the request is not itself the
// grant" (L100). Evidence-activation L49-55 and L109: activation is a
// separate receiver-owned transition and verification must be "current,
// applicable to the production subject, and independently inspected" —
// the independent inspection here is this cut's own per-principal chain
// re-run, one held ref per frozen leg. Derived-evidence L176-184 and L186
// (the two-projection rule): reading another record's structural chain is
// evidence of structure, never a second projection of truth; the
// current-truth ceiling stays closed. Attestation L459-465: narrow-claim
// precedent — the activated capability is one narrow read class over two
// named principals. Community-agent-fabric L449-451: a consequence-
// bearing collaboration would cross a different boundary; nothing here
// is consequence-bearing. Agent-identity L112/L118/L173: no declared
// capability is granted capability, nothing inherits, and no
// agent-to-agent communication is joined. GOVERNANCE L188-204 (L192):
// this gate introduces NO authority class — no capability class, no
// grant, no delegation, audience = the two declared principals only — so
// the non-trip recording rule is not tripped. Law defines no multi-
// principal read protocol: the target labels, postures, and vocabulary
// below are receiver-recorded app-side decisions under scope-sovereignty
// L205, and NO routing-by-posture, capability, or authority law is
// implied by them.
//
// One held ref per leg: each per-principal leg calls its frozen assessor
// with that principal's own ref — a frozen assessor is never fed two
// principals in one call. The receiver carries its full frozen D-P5/D-P6/
// D-P8/D-P9/D-P10 chain; the counterpart carries a structurally verified
// chain WITHOUT an issued identity — the counterpart's D-P9 legs are
// pinned `not_issued`-shaped inputs, its D-P9 mapping and D-P10
// activation legs are null-armed, and any smuggled issuance record that
// greens through the frozen assessor is refused here by the chain
// re-run's own `not_issued` pin. No assessment here carries any frozen
// D-P0…D-P13 state name — the frozen tuples stay the only carriers of
// those names; the new positive scope field is
// `multiPrincipalReadScopePosture`, owned by this cut from D-P14 onward.

import type {
  PondAgentPresenceObservationFreshnessDiagnosis,
} from "./pond-agent-presence-observation-intake.js";
import type {
  PondCounterpartJoinDeclarationAssessment,
  PondCounterpartJoinCheck,
} from "./pond-collaborative-read-counterpart-declaration.js";
import {
  assessPondCounterpartJoinDeclaration,
} from "./pond-collaborative-read-counterpart-declaration.ts";
import type { PondLocalPrincipalBindingEstablishmentAssessment } from "./pond-local-principal-binding-establishment.js";
import {
  assessPondLocalPrincipalBindingEstablishment,
} from "./pond-local-principal-binding-establishment.ts";
import type { PondLocalPrincipalAuthenticationObservationAssessment } from "./pond-local-principal-authentication-observation.js";
import {
  assessPondLocalPrincipalAuthenticationObservation,
} from "./pond-local-principal-authentication-observation.ts";
import type {
  PondLocalAuthenticationChallengeAssessment,
  PondLocalAuthenticationVerifierAssessment,
} from "./pond-local-authentication-mechanic.js";
import {
  assessPondLocalAuthenticationVerifierRecord,
  assessPondLocalAuthenticationChallengeProof,
} from "./pond-local-authentication-mechanic.ts";
import type { PondLocalPrincipalIdIssuanceAssessment } from "./pond-local-principal-id-issuance.js";
import {
  assessPondLocalPrincipalIdIssuance,
} from "./pond-local-principal-id-issuance.ts";
import type { PondErc8004IdentityMappingAssessment } from "./pond-erc8004-identity-mapping.js";
import {
  assessPondErc8004IdentityMapping,
} from "./pond-erc8004-identity-mapping.ts";
import type { PondPrivateReadActivationAssessment } from "./pond-private-read-activation.js";
import {
  POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS,
} from "./pond-private-read-activation.ts";
import {
  assessPondPrivateReadActivation,
} from "./pond-private-read-activation.ts";

// The counterpart identity leg: the receiver-side pin for what a declared
// counterpart is. The counterpart is a pre-existing, receiver-recorded
// principal ref that nobody issues anything for — no second identity is
// created, accepted, or smuggled through this cut.
export const POND_STAGE_DP14_COUNTERPART_IDENTITY_POSTURES = Object.freeze([
  "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
] as const);

export type PondCollaborativeReadActivationBasis =
  | "not_activated"
  | "receiver_explicit_collaborative_activation_not_inferred"
  // Valid-but-unsatisfied fail-closed literals: a collaborative
  // activation claimed from any of these bases is exactly what this gate
  // exists to refuse. Structural chain readiness, the two single-
  // principal activations, counterpart presence, and operator prompts
  // are completion evidence and inference — completion never answers
  // whether to widen the read (evidence-activation L49-55; trusted-
  // channel L80-100; "the request is not itself the grant").
  | "inferred_from_structural_chain_readiness"
  | "derived_from_single_principal_activations"
  | "inferred_from_counterpart_presence"
  | "inferred_from_operator_prompt";

export interface PondCollaborativeReadActivationMetadata {
  readonly activated_at_epoch_ms: number;
  readonly freshness_basis: "activation_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

export interface PondCollaborativeReadActivationRecord {
  readonly contractVersion: "pond-collaborative-read-activation-d-p14";
  readonly kind: "pond-collaborative-read-activation";
  readonly receiverHeldPrincipalRef: string;
  readonly counterpartPrincipalRef: string;
  readonly activationBasis: PondCollaborativeReadActivationBasis;
  readonly activatedCapability: "collaborative_structural_records_read_of_both_declared_principals";
  readonly activationMetadata: PondCollaborativeReadActivationMetadata;
  readonly effectiveCapabilityScopePosture: "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory";
  readonly multiPrincipalReadScopePosture: "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory";
  readonly sessionScopePosture:
    | "not_established"
    | "session_scoped_receiver_restart_ends_activation";
  readonly revocabilityPosture:
    | "not_established"
    | "collaborative_activation_revocable_by_receiver_retraction";
  readonly trustedPolicyAttributionPosture: "activation_attributable_to_receiver_trusted_runtime_policy_no_grant";
  readonly grantSufficiencyPosture: "activation_requires_no_grant";
  readonly counterpartIdentityPosture: "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity";
  readonly consentPosture: "receiver_recorded_session_join_only_no_counterpart_consent_claim";
  readonly memoryLaneExclusionPosture: "activation_excludes_memory_narrative_transcript_lanes";
  readonly authority: "none";
}

export type PondCollaborativeReadActivationCheck =
  | "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals"
  | "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14"
  | "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10"
  | "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14"
  | "collaborative_activation_session_scoped_fresh_and_restart_expiring"
  | "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority";

export interface PondCollaborativeReadActivationInput {
  readonly activationRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly counterpartPrincipalRef: unknown;
  readonly counterpartJoinDeclarationRecord: unknown;
  readonly receiverDp5CeremonyRecord: unknown;
  readonly receiverDp6ObservationRecord: unknown;
  readonly receiverDp8VerifierRecord: unknown;
  readonly receiverDp8ProofRecord: unknown;
  readonly receiverDp9IssuanceRecord: unknown;
  readonly receiverDp9MappingRecord: unknown;
  readonly receiverDp10ActivationRecord: unknown;
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

export const POND_STAGE_DP14_COLLABORATIVE_READ_GATE_INPUT_KEYS = Object.freeze(
  [
    "activationRecord",
    "receiverHeldPrincipalRef",
    "counterpartPrincipalRef",
    "counterpartJoinDeclarationRecord",
    "receiverDp5CeremonyRecord",
    "receiverDp6ObservationRecord",
    "receiverDp8VerifierRecord",
    "receiverDp8ProofRecord",
    "receiverDp9IssuanceRecord",
    "receiverDp9MappingRecord",
    "receiverDp10ActivationRecord",
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

// Frozen-name rule: the D-P0…D-P13 tuples stay the only carriers of their
// state names. The base D-P10 inventory plus the plural-batch keys this
// gate refuses — no caller may smuggle a multi-principal batch or a
// cross-principal label through a nested record, and no frozen name is
// widened by this cut.
export const POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS = Object.freeze(
  [
    ...POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS,
    "principalIds",
    "principalRefs",
    "counterpartPrincipalId",
    "counterpartPrincipalIds",
    "membership",
  ] as const,
);

// --- Mapped per-leg sub-states, typed to the frozen contracts ---

export interface PondMappedDp5Leg {
  readonly state: PondLocalPrincipalBindingEstablishmentAssessment["bindingEstablishmentState"];
  readonly reason: PondLocalPrincipalBindingEstablishmentAssessment["reason"];
}

export interface PondMappedDp6Leg {
  readonly state: PondLocalPrincipalAuthenticationObservationAssessment["authenticationObservationState"];
  readonly reason: PondLocalPrincipalAuthenticationObservationAssessment["reason"];
  readonly diagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
}

export interface PondMappedDp8Leg {
  readonly verifierState: PondLocalAuthenticationVerifierAssessment["verifierState"];
  readonly verifierReason: PondLocalAuthenticationVerifierAssessment["reason"];
  readonly mechanicState: PondLocalAuthenticationChallengeAssessment["authenticationMechanicState"];
  readonly mechanicReason: PondLocalAuthenticationChallengeAssessment["reason"];
  readonly diagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
}

export interface PondMappedDp9IssuanceLeg {
  readonly state: PondLocalPrincipalIdIssuanceAssessment["issuanceState"];
  readonly reason: PondLocalPrincipalIdIssuanceAssessment["reason"];
}

export interface PondMappedDp9MappingLeg {
  readonly state: PondErc8004IdentityMappingAssessment["mappingEstablishmentState"];
  readonly reason: PondErc8004IdentityMappingAssessment["reason"];
}

export interface PondMappedDp10Leg {
  readonly state: PondPrivateReadActivationAssessment["activationState"];
  readonly reason: PondPrivateReadActivationAssessment["reason"];
  readonly diagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
}

// The exported per-principal re-runner: one held ref per call, one leg
// record per frozen assessor. Every sub-state is the mapped verdict of
// the frozen assessor it came from; a null D-P9 mapping or D-P10
// activation leg is honestly refused by the frozen assessor it reaches
// (fail-closed, never a crash, never a fabrication).
export interface PondCollaborativeReadPrincipalChainInput {
  readonly heldPrincipalRef: unknown;
  readonly dp5CeremonyRecord: unknown;
  readonly dp6ObservationRecord: unknown;
  readonly dp8VerifierRecord: unknown;
  readonly dp8ProofRecord: unknown;
  readonly dp9IssuanceRecord: unknown;
  readonly dp9MappingRecord: unknown;
  readonly dp10ActivationRecord: unknown;
  readonly evaluatedAtEpochMs: unknown;
  readonly maximumAgeMs: unknown;
}

export interface PondCollaborativeReadPrincipalChainMapped {
  readonly heldPrincipalRef: string | null;
  readonly mappedDp5: PondMappedDp5Leg;
  readonly mappedDp6: PondMappedDp6Leg;
  readonly mappedDp8: PondMappedDp8Leg;
  readonly mappedDp9Issuance: PondMappedDp9IssuanceLeg;
  readonly mappedDp9Mapping: PondMappedDp9MappingLeg;
  readonly mappedDp10: PondMappedDp10Leg;
}

export const assessPondCollaborativeReadPrincipalChain = (
  input: PondCollaborativeReadPrincipalChainInput,
): PondCollaborativeReadPrincipalChainMapped => {
  const dp5 = assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: input.dp5CeremonyRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef,
  });
  const dp6 = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: input.dp6ObservationRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef,
    evaluatedAtEpochMs: input.evaluatedAtEpochMs,
    maximumAgeMs: input.maximumAgeMs,
  });
  const dp8Verifier = assessPondLocalAuthenticationVerifierRecord({
    verifierRecord: input.dp8VerifierRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef,
  });
  const dp8Challenge = assessPondLocalAuthenticationChallengeProof({
    proofRecord: input.dp8ProofRecord,
    verifierRecord: input.dp8VerifierRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef,
    evaluatedAtEpochMs: input.evaluatedAtEpochMs,
    maximumAgeMs: input.maximumAgeMs,
  });
  const dp9Issuance = assessPondLocalPrincipalIdIssuance({
    issuanceRecord: input.dp9IssuanceRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef,
  });
  const dp9Mapping = assessPondErc8004IdentityMapping({
    mappingRecord: input.dp9MappingRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef,
    receiverVerification: "not_performed",
  });
  const dp10 = assessPondPrivateReadActivation({
    activationRecord: input.dp10ActivationRecord,
    receiverHeldPrincipalRef: input.heldPrincipalRef,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    receiverEvaluatedAtEpochMs: input.evaluatedAtEpochMs,
    receiverMaximumAgeMs: input.maximumAgeMs,
  });
  return Object.freeze({
    heldPrincipalRef:
      typeof input.heldPrincipalRef === "string"
        ? input.heldPrincipalRef
        : null,
    mappedDp5: Object.freeze({
      state: dp5.bindingEstablishmentState,
      reason: dp5.reason,
    }),
    mappedDp6: Object.freeze({
      state: dp6.authenticationObservationState,
      reason: dp6.reason,
      diagnosis: dp6.freshnessDiagnosis,
    }),
    mappedDp8: Object.freeze({
      verifierState: dp8Verifier.verifierState,
      verifierReason: dp8Verifier.reason,
      mechanicState: dp8Challenge.authenticationMechanicState,
      mechanicReason: dp8Challenge.reason,
      diagnosis: dp8Challenge.freshnessDiagnosis,
    }),
    mappedDp9Issuance: Object.freeze({
      state: dp9Issuance.issuanceState,
      reason: dp9Issuance.reason,
    }),
    // The receiver-verification of a mapping is always `not_performed`
    // on this lane: a mapping's live verification is the D-P11 seam's
    // exclusive job, and a structural mapping record is evidence of
    // receiver ownership only.
    mappedDp9Mapping: Object.freeze({
      state: dp9Mapping["mappingEstablishmentState"],
      reason: dp9Mapping.reason,
    }),
    mappedDp10: Object.freeze({
      state: dp10["activationState"],
      reason: dp10.reason,
      diagnosis: dp10.activationFreshnessDiagnosis,
    }),
  });
};

export type PondReceiverPrincipalChainState =
  | "principal_chain_structurally_verified"
  | "chain_not_verified";

export type PondCounterpartPrincipalChainState =
  | "counterpart_chain_verified_without_issued_identity"
  | "chain_not_verified";

export interface PondCollaborativeReadActivationAssessment {
  readonly contractVersion: "pond-collaborative-read-activation-d-p14";
  readonly activationRecordVersion:
    | "pond-collaborative-read-activation-d-p14"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_collaborative_read_activation";
  readonly collaborativeReadActivationState:
    | "not_activated"
    | "fixture_structural_session_scoped_collaborative_structural_read_activation";
  readonly reason:
    | "collaborative_activation_record_invalid"
    | "counterpart_join_not_established"
    | "receiver_chain_not_structurally_ready_or_current"
    | "counterpart_chain_not_structurally_verified"
    | "collaborative_activation_not_session_current"
    | "receiver_collaborative_activation_proof_incomplete"
    | "all_collaborative_read_gate_checks_satisfied";
  readonly mappedCounterpartJoin: {
    readonly joinDeclarationState: PondCounterpartJoinDeclarationAssessment["joinDeclarationState"];
    readonly reason: PondCounterpartJoinDeclarationAssessment["reason"];
    readonly unsatisfiedChecks: readonly PondCounterpartJoinCheck[];
  };
  readonly receiverChain: PondCollaborativeReadPrincipalChainMapped;
  readonly counterpartChain: PondCollaborativeReadPrincipalChainMapped;
  readonly receiverChainState: PondReceiverPrincipalChainState;
  readonly counterpartChainState: PondCounterpartPrincipalChainState;
  readonly collaborativeFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly multiPrincipalReadScopePosture:
    | "not_included"
    | "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory";
  readonly satisfiedChecks: readonly PondCollaborativeReadActivationCheck[];
  readonly unsatisfiedChecks: readonly PondCollaborativeReadActivationCheck[];
  readonly collaborativeReadEstablishesGrant: false;
  readonly credentialAdmitted: false;
  readonly authenticationPerformed: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly counterpartMemoryContentAdmitted: false;
  readonly counterpartConsentEstablished: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const gateChecks = Object.freeze([
  "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
  "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
  "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
  "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
  "collaborative_activation_session_scoped_fresh_and_restart_expiring",
  "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority",
] as const satisfies readonly PondCollaborativeReadActivationCheck[]);

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
// literals as the frozen gates carry it: metadata, then evaluation time,
// then maximum age, then future time; the fresh boundary is inclusive.
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

const validCollaborativeActivationRecord = (value: unknown): boolean => {
  const activation = record(value);
  const metadata = record(activation?.activationMetadata);
  return (
    activation !== null &&
    exactKeys(activation, [
      "contractVersion",
      "kind",
      "receiverHeldPrincipalRef",
      "counterpartPrincipalRef",
      "activationBasis",
      "activatedCapability",
      "activationMetadata",
      "effectiveCapabilityScopePosture",
      "multiPrincipalReadScopePosture",
      "sessionScopePosture",
      "revocabilityPosture",
      "trustedPolicyAttributionPosture",
      "grantSufficiencyPosture",
      "counterpartIdentityPosture",
      "consentPosture",
      "memoryLaneExclusionPosture",
      "authority",
    ]) &&
    activation.contractVersion === "pond-collaborative-read-activation-d-p14" &&
    activation.kind === "pond-collaborative-read-activation" &&
    wellFormedPrincipalRef(activation.receiverHeldPrincipalRef) &&
    wellFormedPrincipalRef(activation.counterpartPrincipalRef) &&
    [
      "not_activated",
      "receiver_explicit_collaborative_activation_not_inferred",
      "inferred_from_structural_chain_readiness",
      "derived_from_single_principal_activations",
      "inferred_from_counterpart_presence",
      "inferred_from_operator_prompt",
    ].includes(String(activation.activationBasis)) &&
    activation.activatedCapability ===
      "collaborative_structural_records_read_of_both_declared_principals" &&
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
      "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory" &&
    activation.multiPrincipalReadScopePosture ===
      "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory" &&
    [
      "not_established",
      "session_scoped_receiver_restart_ends_activation",
    ].includes(String(activation.sessionScopePosture)) &&
    [
      "not_established",
      "collaborative_activation_revocable_by_receiver_retraction",
    ].includes(String(activation.revocabilityPosture)) &&
    activation.trustedPolicyAttributionPosture ===
      "activation_attributable_to_receiver_trusted_runtime_policy_no_grant" &&
    activation.grantSufficiencyPosture === "activation_requires_no_grant" &&
    activation.counterpartIdentityPosture ===
      "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity" &&
    activation.consentPosture ===
      "receiver_recorded_session_join_only_no_counterpart_consent_claim" &&
    activation.memoryLaneExclusionPosture ===
      "activation_excludes_memory_narrative_transcript_lanes" &&
    activation.authority === "none" &&
    String(activation.receiverHeldPrincipalRef) !==
      String(activation.counterpartPrincipalRef) &&
    !hasForbiddenKey(
      activation,
      POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS,
    )
  );
};

const gateAssessment = (
  reason: PondCollaborativeReadActivationAssessment["reason"],
  activationRecordVersion: PondCollaborativeReadActivationAssessment["activationRecordVersion"],
  mappedCounterpartJoin: PondCollaborativeReadActivationAssessment["mappedCounterpartJoin"],
  receiverChain: PondCollaborativeReadPrincipalChainMapped,
  counterpartChain: PondCollaborativeReadPrincipalChainMapped,
  receiverChainState: PondReceiverPrincipalChainState,
  counterpartChainState: PondCounterpartPrincipalChainState,
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  satisfiedChecks: readonly PondCollaborativeReadActivationCheck[],
  unsatisfiedChecks: readonly PondCollaborativeReadActivationCheck[],
): PondCollaborativeReadActivationAssessment => {
  const activated =
    reason === "all_collaborative_read_gate_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-collaborative-read-activation-d-p14",
    activationRecordVersion,
    assessmentKind:
      "deterministic_supplied_collaborative_read_activation",
    collaborativeReadActivationState: activated
      ? "fixture_structural_session_scoped_collaborative_structural_read_activation"
      : "not_activated",
    reason,
    mappedCounterpartJoin,
    receiverChain,
    counterpartChain,
    receiverChainState,
    counterpartChainState,
    collaborativeFreshnessDiagnosis: diagnosis,
    multiPrincipalReadScopePosture: activated
      ? "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory"
      : "not_included",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The collaborative activation is session-scoped read scope over two
    // named principals' structural records only: it never becomes a
    // grant, a credential admission, an authentication, an authorization
    // by PrincipalId, a memory crossing (either principal's), an opened
    // counterpart consent, a current-truth claim, or authority. No
    // second identity is issued or accepted.
    collaborativeReadEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    counterpartMemoryContentAdmitted: false,
    counterpartConsentEstablished: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

const receiverChainOk = (
  chain: PondCollaborativeReadPrincipalChainMapped,
): boolean =>
  chain.mappedDp5.state === "fixture_established_local_principal_binding" &&
  chain.mappedDp5.reason === "all_ceremony_checks_satisfied" &&
  chain.mappedDp6.state === "fixture_observed_local_authentication" &&
  chain.mappedDp6.reason === "all_observation_checks_satisfied" &&
  chain.mappedDp6.diagnosis.state === "fresh" &&
  chain.mappedDp8.verifierState === "receiver_enrolled_knowledge_verifier" &&
  chain.mappedDp8.verifierReason === "verifier_enrolled" &&
  chain.mappedDp8.mechanicState === "receiver_verified_knowledge_factor" &&
  chain.mappedDp8.mechanicReason === "all_challenge_checks_satisfied" &&
  chain.mappedDp8.diagnosis.state === "fresh" &&
  chain.mappedDp9Issuance.state ===
    "fixture_structural_local_principal_id_issued" &&
  chain.mappedDp9Issuance.reason === "all_issuance_checks_satisfied" &&
  chain.mappedDp9Mapping.state ===
    "fixture_structural_receiver_owned_mapping" &&
  (chain.mappedDp9Mapping.reason === "onchain_verification_not_performed" ||
    chain.mappedDp9Mapping.reason === "all_mapping_checks_satisfied") &&
  chain.mappedDp10.state ===
    "fixture_structural_session_scoped_private_read_activation" &&
  chain.mappedDp10.reason === "all_activation_checks_satisfied" &&
  chain.mappedDp10.diagnosis.state === "fresh";

const counterpartChainOk = (
  chain: PondCollaborativeReadPrincipalChainMapped,
): boolean =>
  chain.mappedDp5.state === "fixture_established_local_principal_binding" &&
  chain.mappedDp5.reason === "all_ceremony_checks_satisfied" &&
  chain.mappedDp6.state === "fixture_observed_local_authentication" &&
  chain.mappedDp6.reason === "all_observation_checks_satisfied" &&
  chain.mappedDp6.diagnosis.state === "fresh" &&
  chain.mappedDp8.verifierState === "receiver_enrolled_knowledge_verifier" &&
  chain.mappedDp8.verifierReason === "verifier_enrolled" &&
  chain.mappedDp8.mechanicState === "receiver_verified_knowledge_factor" &&
  chain.mappedDp8.mechanicReason === "all_challenge_checks_satisfied" &&
  chain.mappedDp8.diagnosis.state === "fresh" &&
  // The no-second-identity pins: the counterpart carries no issued
  // PrincipalId, no ERC-8004 mapping, and no private-read activation. A
  // claimed-issued issuance record greens through the frozen assessor
  // (that is exactly what it would claim) and is refused here by this pin.
  chain.mappedDp9Issuance.state === "not_issued" &&
  chain.mappedDp9Issuance.reason === "receiver_issuance_proof_incomplete" &&
  chain.mappedDp9Mapping.state === "not_established" &&
  chain.mappedDp9Mapping.reason === "mapping_record_invalid" &&
  chain.mappedDp10.state === "not_activated" &&
  chain.mappedDp10.reason === "activation_record_invalid";

export function assessPondCollaborativeReadActivation(
  input: PondCollaborativeReadActivationInput,
): PondCollaborativeReadActivationAssessment {
  // Every echo is computed even on arms that refuse — the D-P8 fallback
  // pattern generalized: honest mapped sub-states stay readable through
  // broken legs.
  const mappedInput = record(input);
  const joinAssessment = assessPondCounterpartJoinDeclaration({
    counterpartDeclarationRecord:
      mappedInput?.counterpartJoinDeclarationRecord ?? null,
    receiverHeldPrincipalRef: mappedInput?.receiverHeldPrincipalRef ?? null,
  });
  const receiverChain = assessPondCollaborativeReadPrincipalChain({
    heldPrincipalRef: mappedInput?.receiverHeldPrincipalRef ?? null,
    dp5CeremonyRecord: mappedInput?.receiverDp5CeremonyRecord ?? null,
    dp6ObservationRecord: mappedInput?.receiverDp6ObservationRecord ?? null,
    dp8VerifierRecord: mappedInput?.receiverDp8VerifierRecord ?? null,
    dp8ProofRecord: mappedInput?.receiverDp8ProofRecord ?? null,
    dp9IssuanceRecord: mappedInput?.receiverDp9IssuanceRecord ?? null,
    dp9MappingRecord: mappedInput?.receiverDp9MappingRecord ?? null,
    dp10ActivationRecord: mappedInput?.receiverDp10ActivationRecord ?? null,
    evaluatedAtEpochMs: mappedInput?.evaluatedAtEpochMs ?? null,
    maximumAgeMs: mappedInput?.maximumAgeMs ?? null,
  });
  const counterpartChain = assessPondCollaborativeReadPrincipalChain({
    heldPrincipalRef: mappedInput?.counterpartPrincipalRef ?? null,
    dp5CeremonyRecord: mappedInput?.counterpartDp5CeremonyRecord ?? null,
    dp6ObservationRecord: mappedInput?.counterpartDp6ObservationRecord ?? null,
    dp8VerifierRecord: mappedInput?.counterpartDp8VerifierRecord ?? null,
    dp8ProofRecord: mappedInput?.counterpartDp8ProofRecord ?? null,
    dp9IssuanceRecord: mappedInput?.counterpartDp9IssuanceRecord ?? null,
    dp9MappingRecord: mappedInput?.counterpartDp9MappingRecord ?? null,
    dp10ActivationRecord: mappedInput?.counterpartDp10ActivationRecord ?? null,
    evaluatedAtEpochMs: mappedInput?.evaluatedAtEpochMs ?? null,
    maximumAgeMs: mappedInput?.maximumAgeMs ?? null,
  });
  const joinEcho = Object.freeze({
    joinDeclarationState: joinAssessment.joinDeclarationState,
    reason: joinAssessment.reason,
    unsatisfiedChecks: joinAssessment.unsatisfiedChecks,
  });

  // D-P10 fallback pattern: diagnose the raw evaluation pair even when
  // nothing downstream is valid, so every arm carries an honest
  // diagnosis.
  const fallbackDiagnosis = diagnoseFreshness(
    null,
    mappedInput?.evaluatedAtEpochMs ?? null,
    mappedInput?.maximumAgeMs ?? null,
  );

  if (
    !exactKeys(
      mappedInput ?? {},
      POND_STAGE_DP14_COLLABORATIVE_READ_GATE_INPUT_KEYS,
    )
  )
    return gateAssessment(
      "collaborative_activation_record_invalid",
      "invalid",
      joinEcho,
      receiverChain,
      counterpartChain,
      receiverChainOk(receiverChain)
        ? "principal_chain_structurally_verified"
        : "chain_not_verified",
      counterpartChainOk(counterpartChain)
        ? "counterpart_chain_verified_without_issued_identity"
        : "chain_not_verified",
      fallbackDiagnosis,
      [],
      gateChecks,
    );
  if (!validCollaborativeActivationRecord(input.activationRecord))
    return gateAssessment(
      "collaborative_activation_record_invalid",
      "invalid",
      joinEcho,
      receiverChain,
      counterpartChain,
      receiverChainOk(receiverChain)
        ? "principal_chain_structurally_verified"
        : "chain_not_verified",
      counterpartChainOk(counterpartChain)
        ? "counterpart_chain_verified_without_issued_identity"
        : "chain_not_verified",
      fallbackDiagnosis,
      [],
      gateChecks,
    );
  const activation = input.activationRecord as Record<string, unknown>;

  // Session currency of the collaborative activation itself: the
  // restart-ending posture plus the declared maximum age.
  const diagnosis = diagnoseFreshness(
    activation.activationMetadata,
    input.evaluatedAtEpochMs,
    input.maximumAgeMs,
  );
  const sessionCurrent = diagnosis.state === "fresh";

  // Cause-ordered ladder, one cause per arm — the D-P13 mold. Each cause
  // reads its own mapped echo; nothing downstream of a cause is claimed.
  if (joinAssessment.joinDeclarationState !==
    "fixture_structural_receiver_declared_counterpart_join")
    return gateAssessment(
      "counterpart_join_not_established",
      "pond-collaborative-read-activation-d-p14",
      joinEcho,
      receiverChain,
      counterpartChain,
      receiverChainOk(receiverChain)
        ? "principal_chain_structurally_verified"
        : "chain_not_verified",
      counterpartChainOk(counterpartChain)
        ? "counterpart_chain_verified_without_issued_identity"
        : "chain_not_verified",
      diagnosis,
      [],
      gateChecks,
    );
  if (!receiverChainOk(receiverChain))
    return gateAssessment(
      "receiver_chain_not_structurally_ready_or_current",
      "pond-collaborative-read-activation-d-p14",
      joinEcho,
      receiverChain,
      counterpartChain,
      "chain_not_verified",
      counterpartChainOk(counterpartChain)
        ? "counterpart_chain_verified_without_issued_identity"
        : "chain_not_verified",
      diagnosis,
      [],
      gateChecks,
    );
  if (!counterpartChainOk(counterpartChain))
    return gateAssessment(
      "counterpart_chain_not_structurally_verified",
      "pond-collaborative-read-activation-d-p14",
      joinEcho,
      receiverChain,
      counterpartChain,
      "principal_chain_structurally_verified",
      "chain_not_verified",
      diagnosis,
      [],
      gateChecks,
    );
  if (!sessionCurrent)
    return gateAssessment(
      "collaborative_activation_not_session_current",
      "pond-collaborative-read-activation-d-p14",
      joinEcho,
      receiverChain,
      counterpartChain,
      "principal_chain_structurally_verified",
      "counterpart_chain_verified_without_issued_identity",
      diagnosis,
      [],
      gateChecks,
    );

  const values = [
    activation.activationBasis ===
      "receiver_explicit_collaborative_activation_not_inferred" &&
      activation.receiverHeldPrincipalRef ===
        input.receiverHeldPrincipalRef &&
      activation.counterpartPrincipalRef ===
        input.counterpartPrincipalRef,
    joinAssessment.joinDeclarationState ===
      "fixture_structural_receiver_declared_counterpart_join",
    receiverChainOk(receiverChain),
    counterpartChainOk(counterpartChain),
    sessionCurrent &&
      activation.sessionScopePosture ===
        "session_scoped_receiver_restart_ends_activation",
    activation.memoryLaneExclusionPosture ===
      "activation_excludes_memory_narrative_transcript_lanes" &&
      activation.consentPosture ===
        "receiver_recorded_session_join_only_no_counterpart_consent_claim" &&
      activation.counterpartIdentityPosture ===
        "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity" &&
      activation.trustedPolicyAttributionPosture ===
        "activation_attributable_to_receiver_trusted_runtime_policy_no_grant" &&
      activation.grantSufficiencyPosture === "activation_requires_no_grant" &&
      activation.revocabilityPosture ===
        "collaborative_activation_revocable_by_receiver_retraction" &&
      activation.authority === "none" &&
      activation.multiPrincipalReadScopePosture ===
        "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
  ];
  const satisfied = gateChecks.filter((_, index) => values[index] === true);
  const unsatisfied = gateChecks.filter((_, index) => values[index] !== true);
  const activated = unsatisfied.length === 0;
  return gateAssessment(
    activated
      ? "all_collaborative_read_gate_checks_satisfied"
      : "receiver_collaborative_activation_proof_incomplete",
    "pond-collaborative-read-activation-d-p14",
    joinEcho,
    receiverChain,
    counterpartChain,
    "principal_chain_structurally_verified",
    "counterpart_chain_verified_without_issued_identity",
    diagnosis,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The collaborative activation is
// explicit, dual-bound, session-scoped, non-grant, consent-free,
// second-identity-free, memory-free, and authority-none.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP14Invariant_GateChecksExact = Assert<
  Equal<
    PondCollaborativeReadActivationCheck,
    | "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals"
    | "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14"
    | "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10"
    | "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14"
    | "collaborative_activation_session_scoped_fresh_and_restart_expiring"
    | "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority"
  >
>;
export type PondStageDP14Invariant_GateStatesExact = Assert<
  Equal<
    PondCollaborativeReadActivationAssessment["collaborativeReadActivationState"],
    | "not_activated"
    | "fixture_structural_session_scoped_collaborative_structural_read_activation"
  >
>;
export type PondStageDP14Invariant_GateReasonsExact = Assert<
  Equal<
    PondCollaborativeReadActivationAssessment["reason"],
    | "collaborative_activation_record_invalid"
    | "counterpart_join_not_established"
    | "receiver_chain_not_structurally_ready_or_current"
    | "counterpart_chain_not_structurally_verified"
    | "collaborative_activation_not_session_current"
    | "receiver_collaborative_activation_proof_incomplete"
    | "all_collaborative_read_gate_checks_satisfied"
  >
>;
export type PondStageDP14Invariant_GateNeverBecomesGrantCredentialMemoryIdentityOrAuthority =
  Assert<
    Equal<
      [
        PondCollaborativeReadActivationAssessment["collaborativeReadEstablishesGrant"],
        PondCollaborativeReadActivationAssessment["credentialAdmitted"],
        PondCollaborativeReadActivationAssessment["authenticationPerformed"],
        PondCollaborativeReadActivationAssessment["principalIdAcceptedAsAuthorization"],
        PondCollaborativeReadActivationAssessment["personalMemoryContentAdmitted"],
        PondCollaborativeReadActivationAssessment["counterpartMemoryContentAdmitted"],
        PondCollaborativeReadActivationAssessment["counterpartConsentEstablished"],
        PondCollaborativeReadActivationAssessment["currentTruthAdmitted"],
        PondCollaborativeReadActivationAssessment["runtimeActivationPosture"],
        PondCollaborativeReadActivationAssessment["authority"],
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
export type PondStageDP14Invariant_GateBasisVocabularyExact = Assert<
  Equal<
    PondCollaborativeReadActivationBasis,
    | "not_activated"
    | "receiver_explicit_collaborative_activation_not_inferred"
    | "inferred_from_structural_chain_readiness"
    | "derived_from_single_principal_activations"
    | "inferred_from_counterpart_presence"
    | "inferred_from_operator_prompt"
  >
>;
export type PondStageDP14Invariant_NoForbiddenGateRecordKeys = Assert<
  HasAnyKey<
    PondCollaborativeReadActivationRecord,
    (typeof POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS)[number]
  > extends false
    ? true
    : false
>;
export type PondStageDP14Invariant_NoForbiddenGateAssessmentKeys = Assert<
  HasAnyKey<
    PondCollaborativeReadActivationAssessment,
    (typeof POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS)[number]
  > extends false
    ? true
    : false
>;