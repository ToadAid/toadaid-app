// Stage D-P11 ERC-8004 identity mapping onchain verification.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture: this is
// the dedicated verification cut the D-P9 mapping contract named — the
// seam "receiver_observed_onchain_identity_evidence ... verifies nothing
// without independently reproduced evidence". The derived-evidence
// contract's core law (L11-13) requires the claim to be derived from the
// observation mechanism it describes ("A type-safe literal can still be
// false", L39); the derived path is `canonical source → explicit
// ref/revision → direct current read → derived claim` (L164-186). The
// verification here composes the frozen D-P9 mapping assessor's fresh
// re-run with the re-run of the D-P11 observation classifier over the
// performed observation record — that re-inspection of the record's own
// proof fields is the independent inspection evidence-activation L109
// requires at an authority-affecting boundary — and then demands exact
// field-by-field reproduction of the mapping's claimed verification
// evidence by the performed observation (the frozen mapping check 8's
// stated demand, made real in this cut's own vocabulary). The frozen D-P9
// readiness composition is deliberately NOT re-run here: it hardcodes
// `receiverVerification: "not_performed"` (L167), and re-running it would
// imply verification widens readiness — the mapping stays insufficient by
// itself to establish a Grant (delegated-authority L313; attestation L427
// "ERC-8004 registry record != local admission"; agent-identity law 8
// "Onchain identity is not local authority"). Verification-applicability
// L184: `source_verified != wiring_verified != live_verified` — the live
// read is live proof for the observation subject and inherits nothing.
// No field here flips a frozen D-P9 tuple: the D-P9 assessment names
// (erc8004IdentityAcceptedAsPrincipalId, onchainVerificationState,
// mappingEstablishmentState, mappingEstablishesGrant, privateReadsActivated)
// stay the frozen family's only carriers; this cut's honesty lives in its
// `erc8004VerifiedBinding*` and `verificationEstablishes*` vocabulary.

import type {
  PondAgentPresenceObservationFreshnessDiagnosis,
} from "./pond-agent-presence-observation-intake.js";
import type {
  PondErc8004IdentityMappingCheck,
  PondErc8004ReceiverVerification,
} from "./pond-erc8004-identity-mapping.js";
import { assessPondErc8004IdentityMapping } from "./pond-erc8004-identity-mapping.ts";
import type {
  PondErc8004OnchainObservationCheck,
} from "./pond-erc8004-identity-observation.js";
import { assessPondErc8004OnchainObservation } from "./pond-erc8004-identity-observation.ts";

// The D-P9 mapping check names for the two legs this cut re-performs
// (the frozen mapping's own vocabulary, carried forward as the mapped
// sub-state; no mapping check is ever redefined here).
const frozenMappingBindingCheck =
  "mapping_bound_to_receiver_held_principal" as const;
const frozenMappingVerificationCheck =
  "onchain_verification_evidence_independently_observed" as const;

export type PondErc8004OnchainVerificationCheck =
  | "mapping_record_valid_and_established_dp9_carried_forward"
  | "receiver_held_principal_ref_binds_the_mapping"
  | "observation_independently_valid_performed_and_fresh"
  | "observed_evidence_reproduces_mapping_verification_evidence"
  | "receiver_verification_literal_affirmed_not_the_only_proof"
  | "evidence_ceiling_held_no_binding_authority_or_current_truth";

export interface PondErc8004OnchainVerificationInput {
  readonly dp9MappingRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly observationRecord: unknown;
  // The receiver's affirmed seam literal — D-P9's typed input verbatim.
  // It is one conjunct below (check 5) and never the proof: checks 3 and
  // 4 are the performed-observation legs. A type-safe literal can still
  // be false (derived-evidence L39).
  readonly receiverVerification: PondErc8004ReceiverVerification;
  readonly receiverRecomputedDigestHex: unknown;
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export interface PondErc8004OnchainVerificationAssessment {
  readonly contractVersion: "pond-erc8004-identity-verification-d-p11";
  readonly assessmentKind: "deterministic_supplied_erc8004_identity_mapping_verification";
  readonly verificationState:
    | "not_verified"
    | "fixture_structural_receiver_verified_against_performed_observation";
  readonly reason:
    | "mapping_record_invalid_or_unestablished"
    | "receiver_held_principal_ref_unbound"
    | "observation_not_independently_verified"
    | "observed_evidence_does_not_reproduce_mapping_evidence"
    | "receiver_verification_literal_missing"
    | "receiver_verification_proof_incomplete"
    | "all_verification_checks_satisfied";
  readonly mappedMappingEstablishmentState:
    | "not_established"
    | "fixture_structural_receiver_owned_mapping"
    | "invalid";
  readonly mappedMappingReason:
    | "mapping_record_invalid"
    | "receiver_mapping_proof_incomplete"
    | "onchain_verification_not_performed"
    | "all_mapping_checks_satisfied";
  readonly mappedMappingUnsatisfiedChecks: readonly PondErc8004IdentityMappingCheck[];
  readonly mappedObservationState:
    | "not_observed"
    | "performed_receiver_onchain_observation_recorded"
    | "invalid";
  readonly mappedObservationReason:
    | "observation_record_invalid"
    | "observation_not_performed_by_receiver"
    | "owner_not_observed"
    | "digest_claim_mismatch"
    | "observation_not_fresh"
    | "two_endpoint_agreement_not_recorded"
    | "observation_proof_incomplete"
    | "all_observation_checks_satisfied";
  readonly mappedObservationUnsatisfiedChecks: readonly PondErc8004OnchainObservationCheck[];
  readonly observationFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly satisfiedChecks: readonly PondErc8004OnchainVerificationCheck[];
  readonly unsatisfiedChecks: readonly PondErc8004OnchainVerificationCheck[];
  // The verification is evidence reproduction only: the reproduced
  // binding never becomes a grant, a credential, an authentication, a
  // PrincipalId accepted as authorization, membership or admission, a
  // memory admission, a current-truth claim, or authority.
  readonly verificationEstablishesGrant: false;
  readonly erc8004VerifiedBindingAcceptedAsPrincipalId: false;
  readonly erc8004VerifiedBindingAcceptedAsAuthentication: false;
  readonly verificationEstablishesMembershipOrAdmission: false;
  readonly credentialAdmitted: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const verificationChecks = Object.freeze([
  "mapping_record_valid_and_established_dp9_carried_forward",
  "receiver_held_principal_ref_binds_the_mapping",
  "observation_independently_valid_performed_and_fresh",
  "observed_evidence_reproduces_mapping_verification_evidence",
  "receiver_verification_literal_affirmed_not_the_only_proof",
  "evidence_ceiling_held_no_binding_authority_or_current_truth",
] as const satisfies readonly PondErc8004OnchainVerificationCheck[]);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;

const wellFormedPrincipalRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("principal:") &&
  value.length > "principal:".length;

const verificationAssessment = (
  reason: PondErc8004OnchainVerificationAssessment["reason"],
  mappedMappingEstablishmentState: PondErc8004OnchainVerificationAssessment["mappedMappingEstablishmentState"],
  mappedMappingReason: PondErc8004OnchainVerificationAssessment["mappedMappingReason"],
  mappedMappingUnsatisfiedChecks: readonly PondErc8004IdentityMappingCheck[],
  mappedObservationState: PondErc8004OnchainVerificationAssessment["mappedObservationState"],
  mappedObservationReason: PondErc8004OnchainVerificationAssessment["mappedObservationReason"],
  mappedObservationUnsatisfiedChecks: readonly PondErc8004OnchainObservationCheck[],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  satisfiedChecks: readonly PondErc8004OnchainVerificationCheck[],
  unsatisfiedChecks: readonly PondErc8004OnchainVerificationCheck[],
): PondErc8004OnchainVerificationAssessment => {
  const verified = reason === "all_verification_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-erc8004-identity-verification-d-p11",
    assessmentKind: "deterministic_supplied_erc8004_identity_mapping_verification",
    verificationState: verified
      ? "fixture_structural_receiver_verified_against_performed_observation"
      : "not_verified",
    reason,
    mappedMappingEstablishmentState,
    mappedMappingReason,
    mappedMappingUnsatisfiedChecks: Object.freeze([
      ...mappedMappingUnsatisfiedChecks,
    ]),
    mappedObservationState,
    mappedObservationReason,
    mappedObservationUnsatisfiedChecks: Object.freeze([
      ...mappedObservationUnsatisfiedChecks,
    ]),
    observationFreshnessDiagnosis: diagnosis,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The verification is evidence reproduction only, on every arm: the
    // reproduced binding never becomes a grant, credential, authentication,
    // PrincipalId authorization, membership, memory admission,
    // current-truth claim, or authority. The frozen D-P9 tuple names stay
    // the frozen family's only carriers.
    verificationEstablishesGrant: false,
    erc8004VerifiedBindingAcceptedAsPrincipalId: false,
    erc8004VerifiedBindingAcceptedAsAuthentication: false,
    verificationEstablishesMembershipOrAdmission: false,
    credentialAdmitted: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondErc8004OnchainVerification(
  input: PondErc8004OnchainVerificationInput,
): PondErc8004OnchainVerificationAssessment {
  // The independent re-inspection of both legs: the frozen D-P9 mapping
  // assessor is re-run over the supplied record, and the D-P11
  // observation classifier is re-run over the supplied observation record
  // and the receiver's own recomputed digest. Neither re-run trusts a
  // prior assessment.
  const mappingRun = assessPondErc8004IdentityMapping({
    mappingRecord: input.dp9MappingRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    receiverVerification: input.receiverVerification,
  });
  const mappingRecord = record(input.dp9MappingRecord);

  const observationRun = assessPondErc8004OnchainObservation({
    observationRecord: input.observationRecord,
    receiverRecomputedDigestHex: input.receiverRecomputedDigestHex,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  });
  const observationRecord = record(input.observationRecord);

  const mappedMappingEstablishmentState =
    mappingRun.mappingRecordVersion === "invalid"
      ? "invalid"
      : mappingRun.mappingEstablishmentState;
  const mappedObservationState =
    observationRun.observationRecordVersion === "invalid"
      ? "invalid"
      : observationRun.observationState;

  // Check 1 — the mapping record is valid and every unsatisfied frozen
  // mapping check is one of the two legs this verification re-performs
  // (the binding leg via check 2, the onchain-verification leg via
  // checks 3-5). This is layered partiality in the D-P10 mold: the legs
  // re-performed later are not failures here, so each refusal stays
  // honestly attributable to its own check.
  const mappingReadyExceptReperformedLegs =
    mappingRun.mappingRecordVersion ===
      "pond-erc8004-identity-mapping-d-p9" &&
    mappingRun.unsatisfiedChecks.every(
      (check) =>
        check === frozenMappingBindingCheck ||
        check === frozenMappingVerificationCheck,
    );

  // Check 2 — the receiver's held principal ref binds the mapping
  // (restated from the freshly validated record itself).
  const heldRefBinds =
    wellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
    mappingRecord !== null &&
    mappingRecord.principalRef === input.receiverHeldPrincipalRef;

  // Check 3 — the observation leg: the re-run observation classifier must
  // admit the record as a performed receiver observation, fresh.
  const observationVerified =
    observationRun.reason === "all_observation_checks_satisfied";

  // Check 4 — exact field-by-field reproduction, all five evidence
  // fields non-null on both sides: the mapping's claimed verification
  // evidence must equal the performed observation's directly observed
  // fields. A valid mapping with all-null claimed evidence refuses here —
  // the record is valid; the reproduction is what fails.
  const claimedEvidence = record(mappingRecord?.verificationEvidence);
  const canonicalSource = record(observationRecord?.canonicalSource);
  const performedOwnerRead = record(observationRecord?.performedOwnerRead);
  const observationMetadata = record(observationRecord?.observationMetadata);
  const reproduces =
    mappingRecord !== null &&
    observationRecord !== null &&
    claimedEvidence !== null &&
    claimedEvidence.chainIdObserved !== null &&
    claimedEvidence.registryAddress !== null &&
    claimedEvidence.agentId !== null &&
    claimedEvidence.ownerObserved !== null &&
    claimedEvidence.blockTag !== null &&
    typeof claimedEvidence.chainIdObserved === "string" &&
    typeof claimedEvidence.registryAddress === "string" &&
    typeof claimedEvidence.agentId === "string" &&
    typeof claimedEvidence.ownerObserved === "string" &&
    typeof claimedEvidence.blockTag === "string" &&
    canonicalSource !== null &&
    performedOwnerRead !== null &&
    observationMetadata !== null &&
    typeof observationRecord?.observedAgentId === "string" &&
    typeof performedOwnerRead.observedOwner === "string" &&
    typeof canonicalSource.chainId === "string" &&
    typeof canonicalSource.registryAddress === "string" &&
    typeof observationMetadata.observedBlockTag === "string" &&
    claimedEvidence.chainIdObserved === canonicalSource.chainId &&
    claimedEvidence.registryAddress === canonicalSource.registryAddress &&
    claimedEvidence.agentId === observationRecord?.observedAgentId &&
    claimedEvidence.ownerObserved === performedOwnerRead.observedOwner &&
    claimedEvidence.blockTag === observationMetadata.observedBlockTag;

  // Check 5 — the receiver affirmed the seam literal; one conjunct among
  // the performed-observation checks, never the proof.
  const literalAffirmed =
    input.receiverVerification ===
    "receiver_observed_onchain_identity_evidence";

  // Check 6 — the ceiling: the ceiling is record-validated on both legs;
  // the check restates it so the output can never claim current truth,
  // future ownership, admission, or authority.
  const ceilingHeld =
    mappingRun.mappingEstablishmentState ===
      "fixture_structural_receiver_owned_mapping" &&
    observationRecord !== null &&
    observationRecord.observedClaimPosture ===
      "historical_point_in_time_observation_not_current_truth_not_future_ownership" &&
    observationRecord.scopePosture ===
      "read_only_observation_evidence_only_no_admission_no_grant_no_registration_no_signing";

  if (!mappingReadyExceptReperformedLegs)
    return verificationAssessment(
      "mapping_record_invalid_or_unestablished",
      mappedMappingEstablishmentState,
      mappingRun.reason,
      mappingRun.unsatisfiedChecks,
      mappedObservationState,
      observationRun.reason,
      observationRun.unsatisfiedChecks,
      observationRun.observationFreshnessDiagnosis,
      [],
      verificationChecks.filter(
        (check) => check !== verificationChecks[0],
      ),
    );
  if (!heldRefBinds)
    return verificationAssessment(
      "receiver_held_principal_ref_unbound",
      mappedMappingEstablishmentState,
      mappingRun.reason,
      mappingRun.unsatisfiedChecks,
      mappedObservationState,
      observationRun.reason,
      observationRun.unsatisfiedChecks,
      observationRun.observationFreshnessDiagnosis,
      [verificationChecks[0]],
      verificationChecks.filter((check) => check !== verificationChecks[0]),
    );
  if (!observationVerified)
    return verificationAssessment(
      "observation_not_independently_verified",
      mappedMappingEstablishmentState,
      mappingRun.reason,
      mappingRun.unsatisfiedChecks,
      mappedObservationState,
      observationRun.reason,
      observationRun.unsatisfiedChecks,
      observationRun.observationFreshnessDiagnosis,
      [verificationChecks[0], verificationChecks[1]],
      verificationChecks.filter(
        (check) => check !== verificationChecks[0] && check !== verificationChecks[1],
      ),
    );

  const values = [
    mappingReadyExceptReperformedLegs,
    heldRefBinds,
    observationVerified,
    reproduces,
    literalAffirmed,
    ceilingHeld,
  ];
  const satisfied = verificationChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = verificationChecks.filter(
    (_, index) => values[index] !== true,
  );
  return verificationAssessment(
    unsatisfied.length === 0
      ? "all_verification_checks_satisfied"
      : !reproduces
        ? "observed_evidence_does_not_reproduce_mapping_evidence"
        : !literalAffirmed
          ? "receiver_verification_literal_missing"
          : "receiver_verification_proof_incomplete",
    mappedMappingEstablishmentState,
    mappingRun.reason,
    mappingRun.unsatisfiedChecks,
    mappedObservationState,
    observationRun.reason,
    observationRun.unsatisfiedChecks,
    observationRun.observationFreshnessDiagnosis,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The verification is evidence
// reproduction only: it never becomes a grant, a credential, an
// authentication, a PrincipalId authorization, membership, memory
// admission, a current-truth claim, or authority; no frozen D-P9 or
// D-P10 tuple name appears on this assessment.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP11Invariant_VerificationChecksExact = Assert<
  Equal<
    PondErc8004OnchainVerificationCheck,
    | "mapping_record_valid_and_established_dp9_carried_forward"
    | "receiver_held_principal_ref_binds_the_mapping"
    | "observation_independently_valid_performed_and_fresh"
    | "observed_evidence_reproduces_mapping_verification_evidence"
    | "receiver_verification_literal_affirmed_not_the_only_proof"
    | "evidence_ceiling_held_no_binding_authority_or_current_truth"
  >
>;
export type PondStageDP11Invariant_VerificationStatesExact = Assert<
  Equal<
    PondErc8004OnchainVerificationAssessment["verificationState"],
    "not_verified" | "fixture_structural_receiver_verified_against_performed_observation"
  >
>;
export type PondStageDP11Invariant_VerificationReasonsExact = Assert<
  Equal<
    PondErc8004OnchainVerificationAssessment["reason"],
    | "mapping_record_invalid_or_unestablished"
    | "receiver_held_principal_ref_unbound"
    | "observation_not_independently_verified"
    | "observed_evidence_does_not_reproduce_mapping_evidence"
    | "receiver_verification_literal_missing"
    | "receiver_verification_proof_incomplete"
    | "all_verification_checks_satisfied"
  >
>;
export type PondStageDP11Invariant_VerificationNeverBecomesGrantCredentialOrAuthority =
  Assert<
    Equal<
      [
        PondErc8004OnchainVerificationAssessment["verificationEstablishesGrant"],
        PondErc8004OnchainVerificationAssessment["erc8004VerifiedBindingAcceptedAsPrincipalId"],
        PondErc8004OnchainVerificationAssessment["erc8004VerifiedBindingAcceptedAsAuthentication"],
        PondErc8004OnchainVerificationAssessment["verificationEstablishesMembershipOrAdmission"],
        PondErc8004OnchainVerificationAssessment["credentialAdmitted"],
        PondErc8004OnchainVerificationAssessment["personalMemoryContentAdmitted"],
        PondErc8004OnchainVerificationAssessment["currentTruthAdmitted"],
        PondErc8004OnchainVerificationAssessment["runtimeActivationPosture"],
        PondErc8004OnchainVerificationAssessment["authority"],
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
export type PondStageDP11Invariant_NoFrozenFamilyKeysOnVerificationAssessment =
  Assert<
    HasAnyKey<
      PondErc8004OnchainVerificationAssessment,
      | "erc8004IdentityAcceptedAsPrincipalId"
      | "onchainVerificationState"
      | "mappingEstablishmentState"
      | "mappingEstablishesGrant"
      | "privateReadsActivated"
    > extends false
      ? true
      : false
  >;