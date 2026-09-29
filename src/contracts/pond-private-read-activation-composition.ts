// Stage D-P10 private-read activation composition.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture: the
// evidence-activation contract's lifecycle is candidate → verified
// candidate → a separate governance boundary → activated, and the
// activation requires that verification be "current, applicable to the
// production subject, and independently inspected" (activation_denied
// otherwise) — so this endpoint composition re-reads the full chain
// through its own frozen assessors: the D-P9 principal identity
// readiness composition (the independent re-inspection of the receiver's
// own principal-structural records), the D-P10 activation ceremony, and
// the D-P10 per-read admission. The activated read is honest about its
// ceiling: the receiver's own structural records, session-scoped,
// non-grant, restart-expiring, never memory-lane content, never
// collaborative, never a current-truth claim. No assessment here carries
// a `privateReadsActivated` key — the frozen D-P0…D-P9 tuples remain the
// only carriers of that name; the composition's honesty lives in its own
// state vocabulary.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import { assessPondPrincipalIdentityReadinessComposition } from "./pond-principal-identity-readiness-composition.ts";
import { assessPondPrivateReadActivation } from "./pond-private-read-activation.ts";
import { assessPondPrivateReadAdmission } from "./pond-private-read-admission.ts";
import type { PondPrincipalIdentityReadinessCheck } from "./pond-principal-identity-readiness-composition.js";
import type { PondPrivateReadActivationCheck } from "./pond-private-read-activation.js";
import type { PondPrivateReadAdmissionCheck } from "./pond-private-read-admission.js";
import {
  POND_STAGE_DP10_PRIVATE_READ_TARGET_REFS,
} from "./pond-private-read-admission.ts";

export type PondPrivateReadCompositionCheck =
  | "identity_chain_structurally_ready_dp5_dp8_dp9"
  | "activation_ceremony_complete_dp10"
  | "activation_session_current_within_declared_maximum_age_dp10"
  | "read_admission_complete_and_bound_to_session_scoped_activation_dp10"
  | "read_targets_independently_reinspected_structural_records_only_dp10";

export type PondPrivateReadCompositionState =
  | "not_activated"
  | "fixture_structural_private_reads_activated_structural_records_only";

export interface PondPrivateReadCompositionInput {
  readonly readActivationRecord: unknown;
  readonly readAdmissionRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly dp5CeremonyRecord: unknown;
  readonly dp8VerifierRecord: unknown;
  readonly dp8ProofRecord: unknown;
  readonly dp9IssuanceRecord: unknown;
  readonly dp9MappingRecord: unknown;
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export interface PondPrivateReadCompositionAssessment {
  readonly contractVersion: "pond-private-read-activation-composition-d-p10";
  readonly assessmentKind: "deterministic_supplied_private_read_activation_composition";
  readonly privateReadActivationState: PondPrivateReadCompositionState;
  readonly reason:
    | "receiver_private_read_activation_proof_incomplete"
    | "identity_chain_not_structurally_ready"
    | "activation_not_session_current"
    | "all_private_read_activation_checks_satisfied";
  readonly mappedActivationState:
    | "not_activated"
    | "fixture_structural_session_scoped_private_read_activation";
  readonly mappedActivationReason:
    | "activation_record_invalid"
    | "identity_chain_not_structurally_ready"
    | "activation_not_session_current"
    | "receiver_activation_proof_incomplete"
    | "all_activation_checks_satisfied";
  readonly mappedReadAdmissionState:
    | "not_admitted"
    | "fixture_structural_structural_record_read_admitted";
  readonly mappedReadAdmissionReason:
    | "admission_record_invalid"
    | "activation_record_invalid"
    | "receiver_read_admission_proof_incomplete"
    | "all_read_admission_checks_satisfied";
  readonly mappedIdentityChainReadinessState:
    | "not_ready"
    | "structurally_ready_private_reads_still_refused";
  readonly mappedIdentityChainUnsatisfiedChecks: readonly PondPrincipalIdentityReadinessCheck[];
  readonly mappedActivationUnsatisfiedChecks: readonly PondPrivateReadActivationCheck[];
  readonly mappedAdmissionUnsatisfiedChecks: readonly PondPrivateReadAdmissionCheck[];
  readonly activationFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly effectiveReadScopePosture: "read_only_single_principal_own_structural_records_no_write_no_send_no_sign";
  readonly readTruthPosture: "structural_presence_only_no_current_truth_claim";
  readonly collaborativeReadScopePosture: "not_included_single_principal_reads_only";
  readonly sessionScopePosture:
    | "not_established"
    | "session_scoped_receiver_restart_ends_activation";
  readonly satisfiedChecks: readonly PondPrivateReadCompositionCheck[];
  readonly unsatisfiedChecks: readonly PondPrivateReadCompositionCheck[];
  readonly activationEstablishesGrant: false;
  readonly readEstablishesGrant: false;
  readonly credentialAdmitted: false;
  readonly authenticationPerformed: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const compositionChecks = Object.freeze([
  "identity_chain_structurally_ready_dp5_dp8_dp9",
  "activation_ceremony_complete_dp10",
  "activation_session_current_within_declared_maximum_age_dp10",
  "read_admission_complete_and_bound_to_session_scoped_activation_dp10",
  "read_targets_independently_reinspected_structural_records_only_dp10",
] as const satisfies readonly PondPrivateReadCompositionCheck[]);

const compositionAssessment = (
  reason: PondPrivateReadCompositionAssessment["reason"],
  mappedActivationState: PondPrivateReadCompositionAssessment["mappedActivationState"],
  mappedActivationReason: PondPrivateReadCompositionAssessment["mappedActivationReason"],
  mappedReadAdmissionState: PondPrivateReadCompositionAssessment["mappedReadAdmissionState"],
  mappedReadAdmissionReason: PondPrivateReadCompositionAssessment["mappedReadAdmissionReason"],
  mappedIdentityChainReadinessState: PondPrivateReadCompositionAssessment["mappedIdentityChainReadinessState"],
  mappedIdentityChainUnsatisfiedChecks: readonly PondPrincipalIdentityReadinessCheck[],
  mappedActivationUnsatisfiedChecks: readonly PondPrivateReadActivationCheck[],
  mappedAdmissionUnsatisfiedChecks: readonly PondPrivateReadAdmissionCheck[],
  activationFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  sessionScopePosture: PondPrivateReadCompositionAssessment["sessionScopePosture"],
  satisfiedChecks: readonly PondPrivateReadCompositionCheck[],
  unsatisfiedChecks: readonly PondPrivateReadCompositionCheck[],
): PondPrivateReadCompositionAssessment =>
  Object.freeze({
    contractVersion: "pond-private-read-activation-composition-d-p10",
    assessmentKind: "deterministic_supplied_private_read_activation_composition",
    privateReadActivationState:
      reason === "all_private_read_activation_checks_satisfied"
        ? "fixture_structural_private_reads_activated_structural_records_only"
        : "not_activated",
    reason,
    mappedActivationState,
    mappedActivationReason,
    mappedReadAdmissionState,
    mappedReadAdmissionReason,
    mappedIdentityChainReadinessState,
    mappedIdentityChainUnsatisfiedChecks: Object.freeze([
      ...mappedIdentityChainUnsatisfiedChecks,
    ]),
    mappedActivationUnsatisfiedChecks: Object.freeze([
      ...mappedActivationUnsatisfiedChecks,
    ]),
    mappedAdmissionUnsatisfiedChecks: Object.freeze([
      ...mappedAdmissionUnsatisfiedChecks,
    ]),
    activationFreshnessDiagnosis,
    effectiveReadScopePosture:
      "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
    readTruthPosture: "structural_presence_only_no_current_truth_claim",
    collaborativeReadScopePosture: "not_included_single_principal_reads_only",
    sessionScopePosture,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The composition's completion never becomes a grant, a credential
    // admission, an authentication, memory admission, a current-truth
    // claim, or authority. The frozen D-P0…D-P9 `privateReadsActivated:
    // false` literal stays the only carrier of that name; this cut's
    // honesty lives in its own state vocabulary.
    activationEstablishesGrant: false,
    readEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondPrivateReadActivationComposition(
  input: PondPrivateReadCompositionInput,
): PondPrivateReadCompositionAssessment {
  // The read of the chain: the D-P9 composition re-runs the receiver's
  // own frozen identity-chain assessors — that re-inspection is the
  // evidence-activation contract's independent inspection.
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

  // The D-P10 activation ceremony over the same supplied records.
  const activation = assessPondPrivateReadActivation({
    activationRecord: input.readActivationRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  });

  // The per-read admission binds to the activation record structurally.
  const admission = assessPondPrivateReadAdmission({
    readAdmissionRecord: input.readAdmissionRecord,
    activationRecord: input.readActivationRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
  });

  const activationSessionCurrent =
    activation.reason !== "activation_not_session_current" &&
    activation.activationFreshnessDiagnosis.state === "fresh";
  const admitted =
    admission.readAdmissionState ===
    "fixture_structural_structural_record_read_admitted";

  // Check 5 is read directly off the supplied admission record: every
  // target must sit inside the pinned receiver-record table and name a
  // record class this composition run actually re-validates (the D-P9
  // chain via the re-run, the activation via contract 1, the admission
  // via contract 2).
  const admissionRecord =
    input.readAdmissionRecord !== null &&
    typeof input.readAdmissionRecord === "object"
      ? (input.readAdmissionRecord as Record<string, unknown>)
      : null;
  const declaredTargets = admissionRecord?.readTargetRefs;
  const targetsReinspected =
    Array.isArray(declaredTargets) &&
    declaredTargets.length > 0 &&
    declaredTargets.every(
      (target) =>
        typeof target === "string" &&
        (POND_STAGE_DP10_PRIVATE_READ_TARGET_REFS as readonly string[]).includes(
          target,
        ),
    );

  if (!identityChainReady)
    return compositionAssessment(
      "identity_chain_not_structurally_ready",
      "not_activated",
      activation.reason,
      admission.readAdmissionState,
      admission.reason,
      "not_ready",
      identityChain.unsatisfiedChecks,
      [],
      admission.unsatisfiedChecks,
      activation.activationFreshnessDiagnosis,
      activation.sessionScopePosture,
      [],
      compositionChecks,
    );
  if (activation.reason === "activation_not_session_current")
    return compositionAssessment(
      "activation_not_session_current",
      "not_activated",
      activation.reason,
      admission.readAdmissionState,
      admission.reason,
      identityChain.readinessState,
      [],
      activation.unsatisfiedChecks,
      admission.unsatisfiedChecks,
      activation.activationFreshnessDiagnosis,
      activation.sessionScopePosture,
      ["identity_chain_structurally_ready_dp5_dp8_dp9"],
      [
        "activation_ceremony_complete_dp10",
        "activation_session_current_within_declared_maximum_age_dp10",
        "read_admission_complete_and_bound_to_session_scoped_activation_dp10",
        "read_targets_independently_reinspected_structural_records_only_dp10",
      ],
    );

  const values = [
    identityChainReady,
    activation.reason === "all_activation_checks_satisfied",
    activationSessionCurrent,
    admitted,
    targetsReinspected,
  ];
  const satisfied = compositionChecks.filter((_, index) => values[index] === true);
  const unsatisfied = compositionChecks.filter((_, index) => values[index] !== true);
  return compositionAssessment(
    unsatisfied.length === 0
      ? "all_private_read_activation_checks_satisfied"
      : "receiver_private_read_activation_proof_incomplete",
    activation.activationState,
    activation.reason,
    admission.readAdmissionState,
    admission.reason,
    identityChain.readinessState,
    [],
    activation.unsatisfiedChecks,
    admission.unsatisfiedChecks,
    activation.activationFreshnessDiagnosis,
    activation.sessionScopePosture,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The endpoint composition's
// completion is a session-scoped, non-grant, structural-records-only read
// activation — never a credential, memory admission, current-truth claim,
// or authority, and never the frozen `privateReadsActivated` name.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondCompositionDP10Invariant_CompositionChecksExact = Assert<
  Equal<
    PondPrivateReadCompositionCheck,
    | "identity_chain_structurally_ready_dp5_dp8_dp9"
    | "activation_ceremony_complete_dp10"
    | "activation_session_current_within_declared_maximum_age_dp10"
    | "read_admission_complete_and_bound_to_session_scoped_activation_dp10"
    | "read_targets_independently_reinspected_structural_records_only_dp10"
  >
>;
export type PondCompositionDP10Invariant_CompositionStatesExact = Assert<
  Equal<
    PondPrivateReadCompositionState,
    "not_activated" | "fixture_structural_private_reads_activated_structural_records_only"
  >
>;
export type PondCompositionDP10Invariant_CompositionReasonsExact = Assert<
  Equal<
    PondPrivateReadCompositionAssessment["reason"],
    | "receiver_private_read_activation_proof_incomplete"
    | "identity_chain_not_structurally_ready"
    | "activation_not_session_current"
    | "all_private_read_activation_checks_satisfied"
  >
>;
export type PondCompositionDP10Invariant_CompositionNeverBecomesGrantCredentialOrAuthority =
  Assert<
    Equal<
      [
        PondPrivateReadCompositionAssessment["activationEstablishesGrant"],
        PondPrivateReadCompositionAssessment["readEstablishesGrant"],
        PondPrivateReadCompositionAssessment["credentialAdmitted"],
        PondPrivateReadCompositionAssessment["authenticationPerformed"],
        PondPrivateReadCompositionAssessment["principalIdAcceptedAsAuthorization"],
        PondPrivateReadCompositionAssessment["personalMemoryContentAdmitted"],
        PondPrivateReadCompositionAssessment["currentTruthAdmitted"],
        PondPrivateReadCompositionAssessment["runtimeActivationPosture"],
        PondPrivateReadCompositionAssessment["authority"],
      ],
      [
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
export type PondCompositionDP10Invariant_CarriesNoPrivateReadsActivatedKey =
  Assert<
    HasAnyKey<PondPrivateReadCompositionAssessment, "privateReadsActivated"> extends false
      ? true
      : false
  >;