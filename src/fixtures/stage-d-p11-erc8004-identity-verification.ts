// Stage D-P11 fixture: the ERC-8004 onchain identity observation and
// verification matrix — the performed receiver observation (complete /
// claimed-and-refused) and the verification over the D-P9 mapping plus the
// observation (complete / frozen all-null evidence refused / stale
// observation refused). Zero value imports: every import is type-only, so
// the selftest imports this file directly under node type-stripping. The
// verification arms inline literal copies of the D-P9 mapping record —
// including the frozen all-null `verificationEvidence` established record —
// the selftest deep-equals those copies against the actual D-P9 fixture
// export. Observation records use structural placeholders only: no real
// registry address, no real owner, no real block tag is pinned here — the
// live read's real values pin only in scripts/ (the live runner), never in
// this fixture. `satisfies` typing keeps arm-level literals sharp.

import type {
  PondErc8004OnchainObservationAssessment,
  PondErc8004OnchainObservationRecord,
} from "../contracts/pond-erc8004-identity-observation.js";
import type {
  PondErc8004OnchainVerificationAssessment,
} from "../contracts/pond-erc8004-identity-verification.js";
import type {
  PondErc8004IdentityMappingRecord,
} from "../contracts/pond-erc8004-identity-mapping.js";
import type { PondObservedIdentityClaimEvidence } from "../contracts/pond-agent-presence-projection.js";
import type {
  PondAgentPresenceObservationFreshnessDiagnosis,
} from "../contracts/pond-agent-presence-observation-intake.js";

export interface PondStageDP11ObservationFixtureEntry {
  readonly fixtureLabel: string;
  readonly observationRecord: PondErc8004OnchainObservationRecord;
  readonly receiverRecomputedDigestHex: string;
  readonly receiverEvaluatedAtEpochMs: number;
  readonly receiverMaximumAgeMs: number;
  readonly assessment: PondErc8004OnchainObservationAssessment;
}

export interface PondStageDP11VerificationFixtureEntry {
  readonly fixtureLabel: string;
  readonly dp9MappingRecord: PondErc8004IdentityMappingRecord;
  readonly observationRecord: PondErc8004OnchainObservationRecord;
  readonly receiverHeldPrincipalRef: string;
  readonly receiverRecomputedDigestHex: string;
  readonly receiverVerification:
    | "not_performed"
    | "receiver_observed_onchain_identity_evidence";
  readonly receiverEvaluatedAtEpochMs: number;
  readonly receiverMaximumAgeMs: number;
  readonly assessment: PondErc8004OnchainVerificationAssessment;
}

// The Stage D local principal and the trading-desk Agent0 and the opaque
// ERC-8004 label, carried from the D-P9 fixture: the verification arm
// lands on exactly the frozen mapping record — one principal, one agent,
// one label. The selftest cross-checks these literals against the
// directly-imported D-P9 fixture exports.
const principalRef = "principal:fixture:stage-d-p0:local-principal";
const agentRef = "agent:fixture:stage-d-p0:trading-desk-agent0";
const erc8004IdentityRef = "erc8004:fixture:stage-d-p9:base-agent-id";

// The D-P11 evaluation pair, carried from the D-P8/D-P9 convention: the
// observation event sits inside the declared maximum age on the complete
// arms (age 0), and one millisecond past it on the stale arm (age 60_001).
const evaluatedAtEpochMs = 1_800_000_060_000;
const maximumAgeMs = 60_000;
const staleObservedAtEpochMs = 1_799_999_999_999;

// Structural placeholders only — the real registry address and real owner
// addresses never appear in a frozen fixture.
const structuralRegistryAddress = "0x0000000000000000000000000000000000000000";
const structuralOwner = "0x0000000000000000000000000000000000000000";
const structuralBlockTag = "42_000_000_structural";

const structuralEvidence = Object.freeze({
  chainIdObserved: "8453",
  registryAddress: structuralRegistryAddress,
  agentId: "1",
  ownerObserved: structuralOwner,
  blockTag: structuralBlockTag,
}) satisfies PondObservedIdentityClaimEvidence;

const frozenAllNullEvidence = Object.freeze({
  chainIdObserved: null,
  registryAddress: null,
  agentId: null,
  ownerObserved: null,
  blockTag: null,
}) satisfies PondObservedIdentityClaimEvidence;

const freshDiagnosis = Object.freeze({
  state: "fresh",
  reason: "within_declared_maximum_age",
  observationAgeMs: 0,
}) satisfies PondAgentPresenceObservationFreshnessDiagnosis;

const staleDiagnosis = Object.freeze({
  state: "stale",
  reason: "declared_maximum_age_expired",
  observationAgeMs: 60_001,
}) satisfies PondAgentPresenceObservationFreshnessDiagnosis;

// The observed-fact digests of the two fixture observation records: the
// sha256 of the canonical observation lines over each record's own fields
// (digestBasis "sha256_canonical_observation_lines_v1"). The selftest
// recomputes both with node:crypto over the contract's canonical-lines
// helper — the claimed digest never becomes a hardcoded guess; block 6
// proves the tie.
const completeDigestHex =
  "ac15032966dc37060d1c7471ff662778fc8acf76499010d35924203a4780a0e2";
const staleDigestHex =
  "17ddb882da0b6d4d2ead1ca5b84b010ed0f1d25558da92bda9d2758b7c5aa266";

const observationRecord = (observedAtEpochMs: number) =>
  Object.freeze({
    contractVersion: "pond-erc8004-identity-observation-d-p11",
    kind: "pond-erc8004-onchain-identity-observation",
    observationBasis: "performed_receiver_observation",
    observationSurface: "structural_fixture",
    canonicalSource: Object.freeze({
      chainId: "8453",
      registryAddress: structuralRegistryAddress,
      registryKind: "erc8004_identity_registry",
    }),
    observedAgentId: "1",
    performedOwnerRead: Object.freeze({
      method: "ownerOf(uint256)",
      readBasis: "direct_eth_call_at_explicit_pinned_block",
      observedOwner: structuralOwner,
      readOutcome: "observed_owner",
    }),
    retrievalProvenance: Object.freeze({
      queriedRpcEndpointHosts: Object.freeze([
        "structural-registry-endpoint-a",
        "structural-registry-endpoint-b",
      ] as const),
      endpointsQueriedCount: 2,
      endpointAgreement: "agreed",
      agreementDetail: null,
    }),
    observationMetadata: Object.freeze({
      observed_at_epoch_ms: observedAtEpochMs,
      observedBlockTag: structuralBlockTag,
      observedBlockHash: null,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    observedEvidenceDigest: Object.freeze({
      claimedDigestHex: observedAtEpochMs === evaluatedAtEpochMs
        ? completeDigestHex
        : staleDigestHex,
      digestBasis: "sha256_canonical_observation_lines_v1",
    }),
    trustReviewState: "receiver_performed_two_endpoint_self_reviewed",
    evidencePosture: "observed_evidence_only_no_local_authority",
    observedClaimPosture:
      "historical_point_in_time_observation_not_current_truth_not_future_ownership",
    scopePosture:
      "read_only_observation_evidence_only_no_admission_no_grant_no_registration_no_signing",
    observationDistinctnessClaims: Object.freeze({
      onchainIdentityIsPrincipalIdentity: false,
      onchainIdentityEstablishesLocalAdmission: false,
      onchainIdentityEstablishesAuthority: false,
      onchainIdentityIsLocalAgentId: false,
    }),
    authorityPosture: "observation_grants_no_authority_membership_or_capability",
    authority: "none",
  }) satisfies PondErc8004OnchainObservationRecord;

// The claimed-receipt arm reuses the complete record shape but carries the
// refused basis: a claimed observation is carried honestly in the record
// vocabulary — and exactly what the classifier refuses.
const claimedObservationRecord = () =>
  Object.freeze({
    ...observationRecord(evaluatedAtEpochMs),
    observationBasis: "claimed_receiver_observation_not_performed",
  }) satisfies PondErc8004OnchainObservationRecord;

const mappingRecord = (verificationEvidence: PondObservedIdentityClaimEvidence) =>
  Object.freeze({
    contractVersion: "pond-erc8004-identity-mapping-d-p9",
    kind: "pond-erc8004-identity-mapping",
    principalRef,
    agentRef,
    erc8004IdentityRef,
    mappingBasis: "receiver_owned_explicit_mapping_binding",
    mappingDistinctnessClaims: Object.freeze({
      onchainIdentityIsPrincipalIdentity: false,
      onchainIdentityEstablishesLocalAdmission: false,
      onchainIdentityEstablishesAuthority: false,
      onchainIdentityIsLocalAgentId: false,
    }),
    verificationEvidence,
    verificationPosture:
      "no_onchain_observation_performed_verification_unavailable",
    revocabilityReplaceabilityPosture:
      "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
    grantSufficiencyPosture:
      "mapping_insufficient_by_itself_to_establish_a_grant",
    memoryLaneExclusionPosture:
      "mapping_excludes_memory_narrative_transcript_lanes",
    authorityPosture: "mapping_grants_no_authority_membership_or_capability",
    authority: "none",
  }) satisfies PondErc8004IdentityMappingRecord;

export const stageDP11ObservationComplete = Object.freeze({
  fixtureLabel: "performed_two_endpoint_receiver_observation",
  observationRecord: observationRecord(evaluatedAtEpochMs),
  receiverRecomputedDigestHex: completeDigestHex,
  receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
  receiverMaximumAgeMs: maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-erc8004-identity-observation-d-p11",
    observationRecordVersion: "pond-erc8004-identity-observation-d-p11",
    assessmentKind: "deterministic_supplied_erc8004_onchain_observation",
    observationState: "performed_receiver_onchain_observation_recorded",
    reason: "all_observation_checks_satisfied",
    observationFreshnessDiagnosis: freshDiagnosis,
    mappedEndpointAgreement: "agreed",
    satisfiedChecks: Object.freeze([
      "observation_record_well_formed",
      "observation_basis_explicitly_receiver_performed",
      "two_endpoint_agreement_recorded_and_self_reviewed",
      "owner_read_outcome_observed",
      "digest_claim_matches_recomputed_digest",
      "observation_fresh_and_not_future",
      "distinctness_claims_all_false_and_scopes_held",
      "observation_names_no_principal_and_grants_no_authority",
    ] as const),
    unsatisfiedChecks: Object.freeze([] as const),
    observationAcceptsOwnerAsPrincipalId: false,
    observationEstablishesAdmission: false,
    credentialAdmitted: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondErc8004OnchainObservationAssessment,
}) satisfies PondStageDP11ObservationFixtureEntry;

export const stageDP11ObservationClaimedRefused = Object.freeze({
  fixtureLabel: "claimed_observation_not_performed_refused",
  observationRecord: claimedObservationRecord(),
  receiverRecomputedDigestHex: completeDigestHex,
  receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
  receiverMaximumAgeMs: maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-erc8004-identity-observation-d-p11",
    observationRecordVersion: "pond-erc8004-identity-observation-d-p11",
    assessmentKind: "deterministic_supplied_erc8004_onchain_observation",
    observationState: "not_observed",
    reason: "observation_not_performed_by_receiver",
    observationFreshnessDiagnosis: freshDiagnosis,
    mappedEndpointAgreement: "agreed",
    satisfiedChecks: Object.freeze([] as const),
    unsatisfiedChecks: Object.freeze([
      "observation_record_well_formed",
      "observation_basis_explicitly_receiver_performed",
      "two_endpoint_agreement_recorded_and_self_reviewed",
      "owner_read_outcome_observed",
      "digest_claim_matches_recomputed_digest",
      "observation_fresh_and_not_future",
      "distinctness_claims_all_false_and_scopes_held",
      "observation_names_no_principal_and_grants_no_authority",
    ] as const),
    observationAcceptsOwnerAsPrincipalId: false,
    observationEstablishesAdmission: false,
    credentialAdmitted: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondErc8004OnchainObservationAssessment,
}) satisfies PondStageDP11ObservationFixtureEntry;

export const stageDP11ObservationMatrix: readonly PondStageDP11ObservationFixtureEntry[] =
  Object.freeze([stageDP11ObservationComplete, stageDP11ObservationClaimedRefused]);

// Complete verification arm: the receiver's verified mapping — a
// D-P9-contract-valid mapping record whose claimed verification evidence
// carries the structural performed fields, the complete observation
// record, and the affirmed receiver-observed literal. The frozen mapping
// assessor honestly still reports `onchain_verification_not_performed`
// inside the mapped sub-state — the seam did not move; the verification
// outcome lives entirely in this cut's own state.
export const stageDP11VerificationComplete = Object.freeze({
  fixtureLabel: "receiver_verified_against_performed_observation",
  dp9MappingRecord: mappingRecord(structuralEvidence),
  observationRecord: observationRecord(evaluatedAtEpochMs),
  receiverHeldPrincipalRef: principalRef,
  receiverRecomputedDigestHex: completeDigestHex,
  receiverVerification: "receiver_observed_onchain_identity_evidence",
  receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
  receiverMaximumAgeMs: maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-erc8004-identity-verification-d-p11",
    assessmentKind: "deterministic_supplied_erc8004_identity_mapping_verification",
    verificationState:
      "fixture_structural_receiver_verified_against_performed_observation",
    reason: "all_verification_checks_satisfied",
    mappedMappingEstablishmentState: "fixture_structural_receiver_owned_mapping",
    mappedMappingReason: "onchain_verification_not_performed",
    mappedMappingUnsatisfiedChecks: Object.freeze([
      "onchain_verification_evidence_independently_observed",
    ] as const),
    mappedObservationState: "performed_receiver_onchain_observation_recorded",
    mappedObservationReason: "all_observation_checks_satisfied",
    mappedObservationUnsatisfiedChecks: Object.freeze([] as const),
    observationFreshnessDiagnosis: freshDiagnosis,
    satisfiedChecks: Object.freeze([
      "mapping_record_valid_and_established_dp9_carried_forward",
      "receiver_held_principal_ref_binds_the_mapping",
      "observation_independently_valid_performed_and_fresh",
      "observed_evidence_reproduces_mapping_verification_evidence",
      "receiver_verification_literal_affirmed_not_the_only_proof",
      "evidence_ceiling_held_no_binding_authority_or_current_truth",
    ] as const),
    unsatisfiedChecks: Object.freeze([] as const),
    verificationEstablishesGrant: false,
    erc8004VerifiedBindingAcceptedAsPrincipalId: false,
    erc8004VerifiedBindingAcceptedAsAuthentication: false,
    verificationEstablishesMembershipOrAdmission: false,
    credentialAdmitted: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondErc8004OnchainVerificationAssessment,
}) satisfies PondStageDP11VerificationFixtureEntry;

// Frozen all-null arm: the frozen D-P9 established mapping record —
// inlined literally, `verificationEvidence` all null — plus the complete
// observation record. The record is valid and established; the
// reproduction is what fails: the all-null claimed evidence does not
// reproduce the performed observation. That distinction is the honesty of
// this cut — the frozen seam record stays unverified forever, without any
// frozen change.
export const stageDP11VerificationFrozenAllNullRefused = Object.freeze({
  fixtureLabel: "frozen_all_null_evidence_does_not_reproduce",
  dp9MappingRecord: mappingRecord(frozenAllNullEvidence),
  observationRecord: observationRecord(evaluatedAtEpochMs),
  receiverHeldPrincipalRef: principalRef,
  receiverRecomputedDigestHex: completeDigestHex,
  receiverVerification: "receiver_observed_onchain_identity_evidence",
  receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
  receiverMaximumAgeMs: maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-erc8004-identity-verification-d-p11",
    assessmentKind: "deterministic_supplied_erc8004_identity_mapping_verification",
    verificationState: "not_verified",
    reason: "observed_evidence_does_not_reproduce_mapping_evidence",
    mappedMappingEstablishmentState: "fixture_structural_receiver_owned_mapping",
    mappedMappingReason: "onchain_verification_not_performed",
    mappedMappingUnsatisfiedChecks: Object.freeze([
      "onchain_verification_evidence_independently_observed",
    ] as const),
    mappedObservationState: "performed_receiver_onchain_observation_recorded",
    mappedObservationReason: "all_observation_checks_satisfied",
    mappedObservationUnsatisfiedChecks: Object.freeze([] as const),
    observationFreshnessDiagnosis: freshDiagnosis,
    satisfiedChecks: Object.freeze([
      "mapping_record_valid_and_established_dp9_carried_forward",
      "receiver_held_principal_ref_binds_the_mapping",
      "observation_independently_valid_performed_and_fresh",
      "receiver_verification_literal_affirmed_not_the_only_proof",
      "evidence_ceiling_held_no_binding_authority_or_current_truth",
    ] as const),
    unsatisfiedChecks: Object.freeze([
      "observed_evidence_reproduces_mapping_verification_evidence",
    ] as const),
    verificationEstablishesGrant: false,
    erc8004VerifiedBindingAcceptedAsPrincipalId: false,
    erc8004VerifiedBindingAcceptedAsAuthentication: false,
    verificationEstablishesMembershipOrAdmission: false,
    credentialAdmitted: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondErc8004OnchainVerificationAssessment,
}) satisfies PondStageDP11VerificationFixtureEntry;

// Stale arm: the positive records with the observation event one
// millisecond past the declared maximum age — the observation leg honestly
// refuses freshness and the verification refuses with it, carrying the
// observation's own diagnosis as the mapped sub-state.
export const stageDP11VerificationStaleRefused = Object.freeze({
  fixtureLabel: "stale_observation_does_not_independently_verify",
  dp9MappingRecord: mappingRecord(structuralEvidence),
  observationRecord: observationRecord(staleObservedAtEpochMs),
  receiverHeldPrincipalRef: principalRef,
  receiverRecomputedDigestHex: staleDigestHex,
  receiverVerification: "receiver_observed_onchain_identity_evidence",
  receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
  receiverMaximumAgeMs: maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-erc8004-identity-verification-d-p11",
    assessmentKind: "deterministic_supplied_erc8004_identity_mapping_verification",
    verificationState: "not_verified",
    reason: "observation_not_independently_verified",
    mappedMappingEstablishmentState: "fixture_structural_receiver_owned_mapping",
    mappedMappingReason: "onchain_verification_not_performed",
    mappedMappingUnsatisfiedChecks: Object.freeze([
      "onchain_verification_evidence_independently_observed",
    ] as const),
    mappedObservationState: "not_observed",
    mappedObservationReason: "observation_not_fresh",
    mappedObservationUnsatisfiedChecks: Object.freeze([
      "observation_record_well_formed",
      "observation_basis_explicitly_receiver_performed",
      "two_endpoint_agreement_recorded_and_self_reviewed",
      "owner_read_outcome_observed",
      "digest_claim_matches_recomputed_digest",
      "observation_fresh_and_not_future",
      "distinctness_claims_all_false_and_scopes_held",
      "observation_names_no_principal_and_grants_no_authority",
    ] as const),
    observationFreshnessDiagnosis: staleDiagnosis,
    satisfiedChecks: Object.freeze([
      "mapping_record_valid_and_established_dp9_carried_forward",
      "receiver_held_principal_ref_binds_the_mapping",
    ] as const),
    unsatisfiedChecks: Object.freeze([
      "observation_independently_valid_performed_and_fresh",
      "observed_evidence_reproduces_mapping_verification_evidence",
      "receiver_verification_literal_affirmed_not_the_only_proof",
      "evidence_ceiling_held_no_binding_authority_or_current_truth",
    ] as const),
    verificationEstablishesGrant: false,
    erc8004VerifiedBindingAcceptedAsPrincipalId: false,
    erc8004VerifiedBindingAcceptedAsAuthentication: false,
    verificationEstablishesMembershipOrAdmission: false,
    credentialAdmitted: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondErc8004OnchainVerificationAssessment,
}) satisfies PondStageDP11VerificationFixtureEntry;

export const stageDP11VerificationMatrix: readonly PondStageDP11VerificationFixtureEntry[] =
  Object.freeze([
    stageDP11VerificationComplete,
    stageDP11VerificationFrozenAllNullRefused,
    stageDP11VerificationStaleRefused,
  ]);

// Compile-time fixture invariants: the positive literal carries no frozen
// verification name, and the refused arms refuse in the honest order —
// reproduction missing, not record invalid — for the all-null frozen arm.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP11FixtureInvariant_CompleteObservationStateExact = Assert<
  Equal<
    typeof stageDP11ObservationComplete["assessment"]["observationState"],
    "performed_receiver_onchain_observation_recorded"
  >
>;
export type PondStageDP11FixtureInvariant_ClaimedRefusedReasonExact = Assert<
  Equal<
    typeof stageDP11ObservationClaimedRefused["assessment"]["reason"],
    "observation_not_performed_by_receiver"
  >
>;
export type PondStageDP11FixtureInvariant_CompleteVerificationStateExact = Assert<
  Equal<
    typeof stageDP11VerificationComplete["assessment"]["verificationState"],
    "fixture_structural_receiver_verified_against_performed_observation"
  >
>;
export type PondStageDP11FixtureInvariant_FrozenAllNullReasonExact = Assert<
  Equal<
    typeof stageDP11VerificationFrozenAllNullRefused["assessment"]["reason"],
    "observed_evidence_does_not_reproduce_mapping_evidence"
  >
>;
export type PondStageDP11FixtureInvariant_StaleReasonExact = Assert<
  Equal<
    typeof stageDP11VerificationStaleRefused["assessment"]["reason"],
    "observation_not_independently_verified"
  >
>;
export type PondStageDP11FixtureInvariant_MatricesExact = Assert<
  Equal<
    [
      typeof stageDP11ObservationMatrix,
      typeof stageDP11VerificationMatrix,
    ],
    [
      readonly PondStageDP11ObservationFixtureEntry[],
      readonly PondStageDP11VerificationFixtureEntry[],
    ]
  >
>;
export type PondStageDP11FixtureInvariant_NeverCarriesFrozenVerificationNames = Assert<
  HasAnyKey<
    PondErc8004OnchainVerificationAssessment,
    | "onchainVerificationState"
    | "mappingEstablishmentState"
    | "mappingEstablishesGrant"
    | "privateReadsActivated"
  > extends false
    ? true
    : false
>;