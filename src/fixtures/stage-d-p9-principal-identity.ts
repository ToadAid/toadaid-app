// Stage D-P9 fixture: the principal-identity matrix — local PrincipalId
// issuance (complete / wallet-derived-and-refused), the ERC-8004 identity
// mapping (established-but-unverified / equivalence-claim-and-refused), and
// the readiness composition over the D-P5 ceremony, the D-P8 verified
// knowledge factor, and the two D-P9 records (structurally ready with
// private reads still refused / incomplete). Zero value imports: every
// import is type-only, so the selftest imports this file directly under
// node type-stripping. The composition arms inline literal copies of the
// D-P5 ceremony record and the D-P8 verifier and proof records — the
// selftest cross-checks those copies against the actual D-P5/D-P8 fixture
// exports. `satisfies` typing keeps arm-level literals sharp for the
// fixture invariants.

import type {
  PondLocalPrincipalIdIssuanceAssessment,
  PondLocalPrincipalIdIssuanceRecord,
} from "../contracts/pond-local-principal-id-issuance.js";
import type {
  PondErc8004IdentityMappingAssessment,
  PondErc8004IdentityMappingRecord,
} from "../contracts/pond-erc8004-identity-mapping.js";
import type {
  PondLocalAuthenticationChallengeProofRecord,
  PondLocalAuthenticationVerifierRecord,
} from "../contracts/pond-local-authentication-mechanic.js";
import type { PondLocalPrincipalBindingEstablishmentRecord } from "../contracts/pond-local-principal-binding-establishment.js";
import type { PondPrincipalIdentityReadinessCompositionAssessment } from "../contracts/pond-principal-identity-readiness-composition.js";
import type { PondAgentPresenceObservationFreshnessDiagnosis } from "../contracts/pond-agent-presence-observation-intake.js";
import type { PondObservedIdentityClaimEvidence } from "../contracts/pond-agent-presence-projection.js";

export interface PondStageDP9IssuanceFixtureEntry {
  readonly fixtureLabel: string;
  readonly issuanceRecord: PondLocalPrincipalIdIssuanceRecord;
  readonly receiverHeldPrincipalRef: string;
  readonly assessment: PondLocalPrincipalIdIssuanceAssessment;
}

export interface PondStageDP9MappingFixtureEntry {
  readonly fixtureLabel: string;
  readonly mappingRecord: PondErc8004IdentityMappingRecord;
  readonly receiverHeldPrincipalRef: string;
  readonly receiverVerification:
    | "not_performed"
    | "receiver_observed_onchain_identity_evidence";
  readonly assessment: PondErc8004IdentityMappingAssessment;
}

export interface PondStageDP9CompositionFixtureEntry {
  readonly fixtureLabel: string;
  readonly dp5CeremonyRecord: PondLocalPrincipalBindingEstablishmentRecord;
  readonly dp8VerifierRecord: PondLocalAuthenticationVerifierRecord;
  readonly dp8ProofRecord: PondLocalAuthenticationChallengeProofRecord;
  readonly dp9IssuanceRecord: PondLocalPrincipalIdIssuanceRecord;
  readonly dp9MappingRecord: PondErc8004IdentityMappingRecord;
  readonly receiverHeldPrincipalRef: string;
  readonly receiverVerifiedAtEpochMs: number;
  readonly receiverMaximumAgeMs: number;
  readonly assessment: PondPrincipalIdentityReadinessCompositionAssessment;
}

// The Stage D local principal and the trading-desk Agent0, carried from
// the D-P0 fixture: the issuance and the mapping land on exactly these
// refs — one principal, one agent ref, one opaque ERC-8004 label. The
// selftest cross-checks these literals against the directly-imported
// D-P0 fixture exports.
const principalRef = "principal:fixture:stage-d-p0:local-principal";
const agentRef = "agent:fixture:stage-d-p0:trading-desk-agent0";
const erc8004IdentityRef = "erc8004:fixture:stage-d-p9:base-agent-id";

// The D-P8 digest binding, carried from the D-P8 fixture (digests only —
// the pinned secret lives in the selftest alone).
const saltHex = "0a1b2c3d4e5f60718293a4b5c6d7e8f9";
const verifierDigestHex =
  "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f";
const comparedAtEpochMs = 1_800_000_060_000;
const evaluatedAtEpochMs = 1_800_000_060_000;
const maximumAgeMs = 60_000;

const allIssuanceChecks = Object.freeze([
  "principal_ref_well_formed",
  "issued_ref_is_receiver_held_ref",
  "issuance_explicitly_receiver_owned",
  "principal_id_distinct_from_agent_onchain_wallet_and_grant_ids",
  "binding_established_before_issuance",
  "issuance_excludes_memory_and_lane_content",
  "issuance_grants_no_authority_and_stays_revocable",
] as const);

const issuanceRecord = (
  issuanceBasis: PondLocalPrincipalIdIssuanceRecord["issuanceBasis"],
  issuedRefPosture: PondLocalPrincipalIdIssuanceRecord["issuedRefPosture"],
  bindingEstablishmentPosture: PondLocalPrincipalIdIssuanceRecord["bindingEstablishmentPosture"],
  memoryLaneExclusionPosture: PondLocalPrincipalIdIssuanceRecord["memoryLaneExclusionPosture"],
  revocabilityPosture: PondLocalPrincipalIdIssuanceRecord["revocabilityPosture"],
) =>
  Object.freeze({
    contractVersion: "pond-local-principal-id-issuance-d-p9",
    kind: "pond-local-principal-id-issuance",
    principalRef,
    issuanceBasis,
    issuedRefPosture,
    issuanceDistinctnessClaims: Object.freeze({
      isAgentId: false,
      isErc8004AgentId: false,
      isWalletAddress: false,
      isGrantId: false,
      isAttestationId: false,
      isProviderSessionId: false,
      isDisplayName: false,
    }),
    bindingEstablishmentPosture,
    memoryLaneExclusionPosture,
    authorityPosture:
      "issuance_grants_no_authority_membership_or_capability",
    revocabilityPosture,
    authority: "none",
  }) satisfies PondLocalPrincipalIdIssuanceRecord;

// Complete arm: the receiver explicitly identifies itself with its own
// already-held ref — one binding, one ref, no second identity — issued in
// place, binding established first, lanes excluded, revocable, and yet
// only ever a local identity label: no credential, no authenticator, no
// session, no authority.
export const stageDP9IssuanceComplete = Object.freeze({
  fixtureLabel: "receiver_issued_local_principal_id",
  issuanceRecord: issuanceRecord(
    "receiver_issued_local_principal_id",
    "receiver_held_ref_declared_issued_no_second_identity",
    "receiver_binding_established_before_issuance",
    "issuance_excludes_memory_narrative_transcript_lanes",
    "issued_principal_id_revocable_by_receiver_replacement",
  ),
  receiverHeldPrincipalRef: principalRef,
  assessment: Object.freeze({
    contractVersion: "pond-local-principal-id-issuance-d-p9",
    issuanceRecordVersion: "pond-local-principal-id-issuance-d-p9",
    assessmentKind: "deterministic_supplied_local_principal_id_issuance",
    issuanceState: "fixture_structural_local_principal_id_issued",
    reason: "all_issuance_checks_satisfied",
    issuedRefPosture: "receiver_held_ref_declared_issued_no_second_identity",
    issuanceCredentialScopePosture:
      "local_identity_label_only_no_credential_no_authenticator_no_session",
    satisfiedChecks: allIssuanceChecks,
    unsatisfiedChecks: Object.freeze([] as const),
    credentialAdmitted: false,
    authenticationPerformed: false,
    observedIdentityAcceptedAsPrincipalId: false,
    erc8004IdentityAcceptedAsPrincipalId: false,
    walletAddressAcceptedAsPrincipalId: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondLocalPrincipalIdIssuanceAssessment,
}) satisfies PondStageDP9IssuanceFixtureEntry;

// Incomplete arm: an issuance claimed from a wallet address — valid
// vocabulary, honestly carried, and exactly what the ceremony refuses. The
// record stays not_issued: a wallet address is never a PrincipalId
// (external identity is evidence only).
export const stageDP9IssuanceIncomplete = Object.freeze({
  fixtureLabel: "wallet_derived_issuance_refused",
  issuanceRecord: issuanceRecord(
    "derived_from_wallet_address",
    "not_issued",
    "not_established",
    "not_established",
    "not_established",
  ),
  receiverHeldPrincipalRef: principalRef,
  assessment: Object.freeze({
    contractVersion: "pond-local-principal-id-issuance-d-p9",
    issuanceRecordVersion: "pond-local-principal-id-issuance-d-p9",
    assessmentKind: "deterministic_supplied_local_principal_id_issuance",
    issuanceState: "not_issued",
    reason: "receiver_issuance_proof_incomplete",
    issuedRefPosture: "not_issued",
    issuanceCredentialScopePosture:
      "local_identity_label_only_no_credential_no_authenticator_no_session",
    satisfiedChecks: Object.freeze([
      "principal_ref_well_formed",
      "principal_id_distinct_from_agent_onchain_wallet_and_grant_ids",
    ] as const),
    unsatisfiedChecks: Object.freeze([
      "issued_ref_is_receiver_held_ref",
      "issuance_explicitly_receiver_owned",
      "binding_established_before_issuance",
      "issuance_excludes_memory_and_lane_content",
      "issuance_grants_no_authority_and_stays_revocable",
    ] as const),
    credentialAdmitted: false,
    authenticationPerformed: false,
    observedIdentityAcceptedAsPrincipalId: false,
    erc8004IdentityAcceptedAsPrincipalId: false,
    walletAddressAcceptedAsPrincipalId: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondLocalPrincipalIdIssuanceAssessment,
}) satisfies PondStageDP9IssuanceFixtureEntry;

export const stageDP9IssuanceMatrix: readonly PondStageDP9IssuanceFixtureEntry[] =
  Object.freeze([stageDP9IssuanceComplete, stageDP9IssuanceIncomplete]);

const allNullEvidence = Object.freeze({
  chainIdObserved: null,
  registryAddress: null,
  agentId: null,
  ownerObserved: null,
  blockTag: null,
}) satisfies PondObservedIdentityClaimEvidence;

const mappingRecord = (
  mappingBasis: PondErc8004IdentityMappingRecord["mappingBasis"],
  verificationPosture: PondErc8004IdentityMappingRecord["verificationPosture"],
  revocabilityReplaceabilityPosture: PondErc8004IdentityMappingRecord["revocabilityReplaceabilityPosture"],
  memoryLaneExclusionPosture: PondErc8004IdentityMappingRecord["memoryLaneExclusionPosture"],
) =>
  Object.freeze({
    contractVersion: "pond-erc8004-identity-mapping-d-p9",
    kind: "pond-erc8004-identity-mapping",
    principalRef,
    agentRef,
    erc8004IdentityRef,
    mappingBasis,
    mappingDistinctnessClaims: Object.freeze({
      onchainIdentityIsPrincipalIdentity: false,
      onchainIdentityEstablishesLocalAdmission: false,
      onchainIdentityEstablishesAuthority: false,
      onchainIdentityIsLocalAgentId: false,
    }),
    verificationEvidence: allNullEvidence,
    verificationPosture,
    revocabilityReplaceabilityPosture,
    grantSufficiencyPosture:
      "mapping_insufficient_by_itself_to_establish_a_grant",
    memoryLaneExclusionPosture,
    authorityPosture: "mapping_grants_no_authority_membership_or_capability",
    authority: "none",
  }) satisfies PondErc8004IdentityMappingRecord;

// Established arm: the receiver's explicit, revocable, replaceable mapping
// binding — and the honest completion posture: every establishment check
// satisfied while the onchain verification is reported as not performed,
// because no onchain observation surface exists in Pond yet.
export const stageDP9MappingEstablished = Object.freeze({
  fixtureLabel: "receiver_owned_mapping_unverified",
  mappingRecord: mappingRecord(
    "receiver_owned_explicit_mapping_binding",
    "no_onchain_observation_performed_verification_unavailable",
    "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
    "mapping_excludes_memory_narrative_transcript_lanes",
  ),
  receiverHeldPrincipalRef: principalRef,
  receiverVerification: "not_performed",
  assessment: Object.freeze({
    contractVersion: "pond-erc8004-identity-mapping-d-p9",
    mappingRecordVersion: "pond-erc8004-identity-mapping-d-p9",
    assessmentKind: "deterministic_supplied_erc8004_identity_mapping",
    mappingEstablishmentState: "fixture_structural_receiver_owned_mapping",
    onchainVerificationState: "not_verified",
    reason: "onchain_verification_not_performed",
    revocabilityReplaceabilityPosture:
      "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
    satisfiedChecks: Object.freeze([
      "principal_ref_well_formed",
      "agent_ref_well_formed_and_distinct_from_principal",
      "erc8004_identity_ref_well_formed",
      "mapping_bound_to_receiver_held_principal",
      "mapping_explicitly_receiver_owned_not_inferred_or_equivalence",
      "mapping_preserves_identity_distinctness",
      "mapping_revocable_replaceable_and_insufficient_for_grant",
    ] as const),
    unsatisfiedChecks: Object.freeze([
      "onchain_verification_evidence_independently_observed",
    ] as const),
    erc8004IdentityAcceptedAsPrincipalId: false,
    onchainIdentityAcceptedAsAuthentication: false,
    mappingEstablishesGrant: false,
    mappingEstablishesMembershipOrAdmission: false,
    credentialAdmitted: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondErc8004IdentityMappingAssessment,
}) satisfies PondStageDP9MappingFixtureEntry;

// Unestablished arm: a bare equivalence claim — valid vocabulary carried
// honestly, and exactly what the contract refuses: a claim is never an
// explicit, separately governed binding.
export const stageDP9MappingUnestablished = Object.freeze({
  fixtureLabel: "equivalence_claim_refused",
  mappingRecord: mappingRecord(
    "equivalence_claim_not_explicit_binding",
    "not_established",
    "not_established",
    "not_established",
  ),
  receiverHeldPrincipalRef: principalRef,
  receiverVerification: "not_performed",
  assessment: Object.freeze({
    contractVersion: "pond-erc8004-identity-mapping-d-p9",
    mappingRecordVersion: "pond-erc8004-identity-mapping-d-p9",
    assessmentKind: "deterministic_supplied_erc8004_identity_mapping",
    mappingEstablishmentState: "not_established",
    onchainVerificationState: "not_verified",
    reason: "receiver_mapping_proof_incomplete",
    revocabilityReplaceabilityPosture: "not_established",
    satisfiedChecks: Object.freeze([
      "principal_ref_well_formed",
      "agent_ref_well_formed_and_distinct_from_principal",
      "erc8004_identity_ref_well_formed",
      "mapping_bound_to_receiver_held_principal",
      "mapping_preserves_identity_distinctness",
    ] as const),
    unsatisfiedChecks: Object.freeze([
      "mapping_explicitly_receiver_owned_not_inferred_or_equivalence",
      "mapping_revocable_replaceable_and_insufficient_for_grant",
      "onchain_verification_evidence_independently_observed",
    ] as const),
    erc8004IdentityAcceptedAsPrincipalId: false,
    onchainIdentityAcceptedAsAuthentication: false,
    mappingEstablishesGrant: false,
    mappingEstablishesMembershipOrAdmission: false,
    credentialAdmitted: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondErc8004IdentityMappingAssessment,
}) satisfies PondStageDP9MappingFixtureEntry;

export const stageDP9MappingMatrix: readonly PondStageDP9MappingFixtureEntry[] =
  Object.freeze([stageDP9MappingEstablished, stageDP9MappingUnestablished]);

// Inlined literal copies of the D-P5 ceremony record and the D-P8 verifier
// and proof records for the composition arms — the selftest deep-equals
// these against the actual D-P5/D-P8 fixture exports.
const dp5CeremonyRecord = Object.freeze({
  contractVersion: "pond-local-principal-binding-establishment-d-p5",
  kind: "pond-local-principal-binding-establishment",
  principalRef,
  bindingBasis: "receiver_owned_explicit_binding",
  authenticationObservation: "receiver_observed_local_authentication",
  identitySeparationPosture:
    "receiver_verified_agent_identity_distinct_from_principal",
  memoryLaneExclusionPosture:
    "binding_excludes_memory_narrative_transcript_lanes",
  authorityPosture: "binding_grants_no_authority_membership_or_capability",
  revocabilityPosture:
    "binding_revocable_independently_of_transport_provider_or_registry",
  authenticationPosture: "fixture_structural_only_no_real_authentication",
  authority: "none",
}) satisfies PondLocalPrincipalBindingEstablishmentRecord;

const dp8VerifierRecord = Object.freeze({
  contractVersion: "pond-local-authentication-mechanic-d-p8",
  kind: "pond-local-authentication-verifier",
  principalRef,
  mechanicClass: "local_knowledge_factor_challenge_response",
  verifierBinding: Object.freeze({
    algorithm: "sha256",
    saltHex,
    verifierDigestHex,
  }),
  secretFreeInventoryPosture: "verifier_digest_only_no_secret_material",
  memoryLaneExclusionPosture:
    "binding_excludes_memory_narrative_transcript_lanes",
  authorityPosture: "verifier_grants_no_authority_membership_or_capability",
  revocabilityPosture: "verifier_revocable_by_re_enrollment",
  authority: "none",
}) satisfies PondLocalAuthenticationVerifierRecord;

const dp8ProofRecord = Object.freeze({
  contractVersion: "pond-local-authentication-mechanic-d-p8",
  kind: "pond-local-authentication-challenge-proof",
  principalRef,
  mechanicClass: "local_knowledge_factor_challenge_response",
  challengeDigestBinding: Object.freeze({
    algorithm: "sha256",
    saltHex,
    verifierDigestHex,
    responseDigestHex: verifierDigestHex,
  }),
  comparison: "exact_digest_match",
  comparisonMetadata: Object.freeze({
    observed_at_epoch_ms: comparedAtEpochMs,
    freshness_basis: "source_observation_time_only",
    currentness_posture: "not_established_consumer_must_evaluate",
  }),
  secretFreeInventoryPosture: "response_digest_only_no_secret_material",
  memoryLaneExclusionPosture:
    "proof_excludes_memory_narrative_transcript_lanes",
  authorityPosture: "challenge_grants_no_authority_membership_or_capability",
  authority: "none",
}) satisfies PondLocalAuthenticationChallengeProofRecord;

const zeroAgeDiagnosis = Object.freeze({
  state: "fresh",
  reason: "within_declared_maximum_age",
  observationAgeMs: 0,
}) satisfies PondAgentPresenceObservationFreshnessDiagnosis;

const mappedDp5Satisfied = Object.freeze([
  "principal_ref_well_formed",
  "binding_bound_to_receiver_held_principal",
  "binding_explicitly_receiver_owned",
  "local_authentication_observed_by_receiver",
  "identity_separation_from_observed_agent_verified",
  "binding_excludes_memory_and_lane_content",
  "binding_grants_no_authority_and_stays_revocable",
] as const);

const mappedDp8Satisfied = Object.freeze([
  "mechanic_class_receiver_owned",
  "challenge_bound_to_receiver_held_principal",
  "verifier_binding_exact_match",
  "comparison_recomputed",
  "comparison_fresh",
  "proof_excludes_memory_and_lane_content",
  "challenge_grants_no_authority",
] as const);

const mappedDp9MappingSatisfied = Object.freeze([
  "principal_ref_well_formed",
  "agent_ref_well_formed_and_distinct_from_principal",
  "erc8004_identity_ref_well_formed",
  "mapping_bound_to_receiver_held_principal",
  "mapping_explicitly_receiver_owned_not_inferred_or_equivalence",
  "mapping_preserves_identity_distinctness",
  "mapping_revocable_replaceable_and_insufficient_for_grant",
] as const);

// Complete arm: the whole chain — binding ceremony, verified fresh
// knowledge factor, explicit issuance, explicit mapping — and the
// composition honestly ends where it ends: structurally ready, with
// private reads still refused.
export const stageDP9CompositionComplete = Object.freeze({
  fixtureLabel: "structurally_ready_private_reads_still_refused",
  dp5CeremonyRecord,
  dp8VerifierRecord,
  dp8ProofRecord,
  dp9IssuanceRecord: issuanceRecord(
    "receiver_issued_local_principal_id",
    "receiver_held_ref_declared_issued_no_second_identity",
    "receiver_binding_established_before_issuance",
    "issuance_excludes_memory_narrative_transcript_lanes",
    "issued_principal_id_revocable_by_receiver_replacement",
  ),
  dp9MappingRecord: mappingRecord(
    "receiver_owned_explicit_mapping_binding",
    "no_onchain_observation_performed_verification_unavailable",
    "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
    "mapping_excludes_memory_narrative_transcript_lanes",
  ),
  receiverHeldPrincipalRef: principalRef,
  receiverVerifiedAtEpochMs: evaluatedAtEpochMs,
  receiverMaximumAgeMs: maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-principal-identity-readiness-composition-d-p9",
    assessmentKind: "deterministic_supplied_principal_identity_readiness_composition",
    readinessState: "structurally_ready_private_reads_still_refused",
    reason: "structurally_ready_private_reads_still_refused",
    dp8FreshnessDiagnosis: zeroAgeDiagnosis,
    mappedDp5SatisfiedChecks: mappedDp5Satisfied,
    mappedDp8SatisfiedChecks: mappedDp8Satisfied,
    mappedDp9IssuanceSatisfiedChecks: allIssuanceChecks,
    mappedDp9MappingSatisfiedChecks: mappedDp9MappingSatisfied,
    satisfiedChecks: Object.freeze([
      "local_principal_binding_established_dp5",
      "knowledge_factor_verified_dp8",
      "local_principal_id_issued_dp9",
      "erc8004_mapping_record_established_dp9",
    ] as const),
    unsatisfiedChecks: Object.freeze([] as const),
    privateReadsActivated: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    erc8004IdentityAcceptedAsPrincipalId: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondPrincipalIdentityReadinessCompositionAssessment,
}) satisfies PondStageDP9CompositionFixtureEntry;

// Incomplete arm: the issuance refused and the mapping an equivalence
// claim, while the ceremony and the challenge round stay complete — the
// identity chain is only as ready as its two missing links.
export const stageDP9CompositionIncomplete = Object.freeze({
  fixtureLabel: "issuance_and_mapping_missing",
  dp5CeremonyRecord,
  dp8VerifierRecord,
  dp8ProofRecord,
  dp9IssuanceRecord: issuanceRecord(
    "derived_from_wallet_address",
    "not_issued",
    "not_established",
    "not_established",
    "not_established",
  ),
  dp9MappingRecord: mappingRecord(
    "equivalence_claim_not_explicit_binding",
    "not_established",
    "not_established",
    "not_established",
  ),
  receiverHeldPrincipalRef: principalRef,
  receiverVerifiedAtEpochMs: evaluatedAtEpochMs,
  receiverMaximumAgeMs: maximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-principal-identity-readiness-composition-d-p9",
    assessmentKind: "deterministic_supplied_principal_identity_readiness_composition",
    readinessState: "not_ready",
    reason: "receiver_private_read_proof_incomplete",
    dp8FreshnessDiagnosis: zeroAgeDiagnosis,
    mappedDp5SatisfiedChecks: mappedDp5Satisfied,
    mappedDp8SatisfiedChecks: mappedDp8Satisfied,
    mappedDp9IssuanceSatisfiedChecks: Object.freeze([
      "principal_ref_well_formed",
      "principal_id_distinct_from_agent_onchain_wallet_and_grant_ids",
    ] as const),
    mappedDp9MappingSatisfiedChecks: Object.freeze([
      "principal_ref_well_formed",
      "agent_ref_well_formed_and_distinct_from_principal",
      "erc8004_identity_ref_well_formed",
      "mapping_bound_to_receiver_held_principal",
      "mapping_preserves_identity_distinctness",
    ] as const),
    satisfiedChecks: Object.freeze([
      "local_principal_binding_established_dp5",
      "knowledge_factor_verified_dp8",
    ] as const),
    unsatisfiedChecks: Object.freeze([
      "local_principal_id_issued_dp9",
      "erc8004_mapping_record_established_dp9",
    ] as const),
    privateReadsActivated: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    erc8004IdentityAcceptedAsPrincipalId: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondPrincipalIdentityReadinessCompositionAssessment,
}) satisfies PondStageDP9CompositionFixtureEntry;

export const stageDP9CompositionMatrix: readonly PondStageDP9CompositionFixtureEntry[] =
  Object.freeze([stageDP9CompositionComplete, stageDP9CompositionIncomplete]);

// Compile-time fixture invariants: the issuance is issued-and-refused-only
// (identity label, never credential or authority); the mapping is
// established with verification honestly unperformed; the composition is
// structurally ready with private reads still refused.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP9FixtureInvariant_CompleteIssuanceRefusedTuple = Assert<
  Equal<
    [
      typeof stageDP9IssuanceComplete["assessment"]["credentialAdmitted"],
      typeof stageDP9IssuanceComplete["assessment"]["authenticationPerformed"],
      typeof stageDP9IssuanceComplete["assessment"]["erc8004IdentityAcceptedAsPrincipalId"],
      typeof stageDP9IssuanceComplete["assessment"]["walletAddressAcceptedAsPrincipalId"],
      typeof stageDP9IssuanceComplete["assessment"]["runtimeActivationPosture"],
      typeof stageDP9IssuanceComplete["assessment"]["authority"],
    ],
    [false, false, false, false, "not_included", "none"]
  >
>;
export type PondStageDP9FixtureInvariant_IncompleteIssuanceNotIssued = Assert<
  Equal<
    typeof stageDP9IssuanceIncomplete["assessment"]["issuanceState"],
    "not_issued"
  >
>;
export type PondStageDP9FixtureInvariant_EstablishedMappingVerificationHonest =
  Assert<
    Equal<
      [
        typeof stageDP9MappingEstablished["assessment"]["mappingEstablishmentState"],
        typeof stageDP9MappingEstablished["assessment"]["onchainVerificationState"],
        typeof stageDP9MappingEstablished["assessment"]["mappingEstablishesGrant"],
      ],
      [
        "fixture_structural_receiver_owned_mapping",
        "not_verified",
        false,
      ]
    >
  >;
export type PondStageDP9FixtureInvariant_CompleteCompositionPrivatelyRefused =
  Assert<
    Equal<
      [
        typeof stageDP9CompositionComplete["assessment"]["readinessState"],
        typeof stageDP9CompositionComplete["assessment"]["privateReadsActivated"],
        typeof stageDP9CompositionComplete["assessment"]["principalIdAcceptedAsAuthorization"],
      ],
      ["structurally_ready_private_reads_still_refused", false, false]
    >
  >;
export type PondStageDP9FixtureInvariant_IncompleteCompositionNotReady = Assert<
  Equal<
    typeof stageDP9CompositionIncomplete["assessment"]["readinessState"],
    "not_ready"
  >
>;