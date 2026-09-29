// Stage D-P14 fixture: the collaborative/multi-principal structural-read
// matrix — the receiver-declared counterpart join, the gate over both
// principals' re-run chains (complete / join pairwise broken / counterpart
// binding broken / counterpart knowledge factor broken / receiver
// observation stale / counterpart identity smuggled / stale activation /
// inferred activation / smuggled admission target), and the 13-label read
// admission (admitted / out-of-table target refused). Zero value imports:
// every import is type-only, so the selftest imports this file directly
// under node type-stripping. The receiver legs inline literal copies of
// the frozen D-P5 ceremony, D-P6 observation, D-P8 verifier and proof
// records, D-P9 issuance and mapping records, and the D-P10 activation
// record — the selftest deep-equals those copies against the actual
// frozen fixture exports. The D-P8 counterpart pair binds a SECOND salt
// and a second pinned knowledge-factor verifier digest; the counterpart
// SECRET lives only in the sanctioned selftest. The selftest recomputes
// every pinned assessment through the real gate and its frozen legs.

import type {
  PondCollaborativeReadCounterpartDeclarationRecord,
} from "../contracts/pond-collaborative-read-counterpart-declaration.js";
import type {
  PondCollaborativeReadActivationRecord,
  PondCollaborativeReadActivationAssessment,
} from "../contracts/pond-collaborative-read-activation.js";
import type {
  PondCollaborativeReadAdmissionRecord,
  PondCollaborativeReadAdmissionAssessment,
} from "../contracts/pond-collaborative-read-admission.js";
import type {
  PondLocalPrincipalIdIssuanceRecord,
} from "../contracts/pond-local-principal-id-issuance.js";
import type {
  PondErc8004IdentityMappingRecord,
} from "../contracts/pond-erc8004-identity-mapping.js";
import type {
  PondLocalAuthenticationChallengeProofRecord,
  PondLocalAuthenticationVerifierRecord,
} from "../contracts/pond-local-authentication-mechanic.js";
import type {
  PondLocalPrincipalBindingEstablishmentRecord,
} from "../contracts/pond-local-principal-binding-establishment.js";
import type {
  PondLocalPrincipalAuthenticationObservationRecord,
} from "../contracts/pond-local-principal-authentication-observation.js";
import type {
  PondPrivateReadActivationRecord,
} from "../contracts/pond-private-read-activation.js";

export interface PondStageDP14CollaborativeReadFixtureEntry {
  readonly fixtureLabel: string;
  readonly receiverHeldPrincipalRef: string;
  readonly counterpartPrincipalRef: string;
  readonly counterpartJoinDeclarationRecord: PondCollaborativeReadCounterpartDeclarationRecord;
  readonly collaborativeActivationRecord: PondCollaborativeReadActivationRecord;
  readonly receiverDp5CeremonyRecord: PondLocalPrincipalBindingEstablishmentRecord;
  readonly receiverDp6ObservationRecord: PondLocalPrincipalAuthenticationObservationRecord;
  readonly receiverDp8VerifierRecord: PondLocalAuthenticationVerifierRecord;
  readonly receiverDp8ProofRecord: PondLocalAuthenticationChallengeProofRecord;
  readonly receiverDp9IssuanceRecord: PondLocalPrincipalIdIssuanceRecord;
  readonly receiverDp9MappingRecord: PondErc8004IdentityMappingRecord;
  readonly receiverDp10ActivationRecord: PondPrivateReadActivationRecord;
  readonly counterpartDp5CeremonyRecord: PondLocalPrincipalBindingEstablishmentRecord;
  readonly counterpartDp6ObservationRecord: PondLocalPrincipalAuthenticationObservationRecord;
  readonly counterpartDp8VerifierRecord: PondLocalAuthenticationVerifierRecord;
  readonly counterpartDp8ProofRecord: PondLocalAuthenticationChallengeProofRecord;
  readonly counterpartDp9IssuanceRecord: PondLocalPrincipalIdIssuanceRecord;
  readonly counterpartDp9MappingRecord: PondErc8004IdentityMappingRecord | null;
  readonly counterpartDp10ActivationRecord: PondPrivateReadActivationRecord | null;
  readonly evaluatedAtEpochMs: number;
  readonly maximumAgeMs: number;
  readonly gateAssessment: PondCollaborativeReadActivationAssessment;
}

export interface PondStageDP14CollaborativeReadAdmissionFixtureEntry {
  readonly fixtureLabel: string;
  readonly receiverHeldPrincipalRef: string;
  readonly counterpartPrincipalRef: string;
  readonly readAdmissionRecord: PondCollaborativeReadAdmissionRecord;
  readonly collaborativeActivationRecord: PondCollaborativeReadActivationRecord;
  readonly counterpartJoinDeclarationRecord: PondCollaborativeReadCounterpartDeclarationRecord;
  readonly assessment: PondCollaborativeReadAdmissionAssessment;
}

const deepFreeze = <T,>(value: T): T => {
  if (Array.isArray(value)) {
    for (const entry of value) deepFreeze(entry);
    Object.freeze(value);
    return value;
  }
  if (value !== null && typeof value === "object") {
    const r = value as Record<string, unknown>;
    for (const key of Object.keys(r)) deepFreeze(r[key]);
    Object.freeze(value);
  }
  return value;
};

// The Stage D local principal, carried from the D-P0 fixture — the same
// one-binding-one-ref principal across D-P5/D-P6/D-P8/D-P9/D-P10.
const receiverRef = "principal:fixture:stage-d-p0:local-principal" as const;

// The counterpart — the FIRST Stage D fixture to name a second principal
// ref. It is pre-existing by receiver declaration and carries nothing:
// no issuance, no mapping, no private-read activation, ever.
const counterpartRef = "principal:fixture:stage-d-p14:counterpart-principal" as const;

const evaluatedAtEpochMs = 1_800_000_060_000;
const receiverMaximumAgeMs = 60_000;
// One millisecond past the declared maximum age at the same evaluation
// time — the stale-arm event instant.
const staleEpochMs = 1_799_999_999_999;

// The receiver's D-P8 digest binding, carried from the D-P8/P10 fixtures
// (digests only — the pinned receiver secret lives in its own selftest).
const receiverSaltHex = "0a1b2c3d4e5f60718293a4b5c6d7e8f9";
const receiverVerifierDigestHex =
  "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f";

// The counterpart's SECOND salt and knowledge-factor verifier digest —
// recompute-pinned by the sanctioned selftest over the counterpart secret.
const counterpartSaltHex = "f1e2d3c4b5a60718293a4b5c6d7e8f90";
const counterpartVerifierDigestHex =
  "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b";
// The arm-3 mismatch digest: the same length, honestly different.
const counterpartMismatchDigestHex = "beefcafedeadbeef".repeat(4);

// --- Receiver leg records (literal copies of the frozen exports) ---

const receiverDp5CeremonyRecord = Object.freeze({
  contractVersion: "pond-local-principal-binding-establishment-d-p5",
  kind: "pond-local-principal-binding-establishment",
  principalRef: receiverRef,
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

const receiverDp6ObservationRecord = Object.freeze({
  contractVersion: "pond-local-principal-authentication-observation-d-p6",
  kind: "pond-local-principal-authentication-observation",
  principalRef: receiverRef,
  eventState: "receiver_observed_local_authentication_event",
  observationChannel: "receiver_owned_local_shell_channel",
  secretFreeFieldInventoryPosture:
    "inventory_secret_free_no_credential_field_observed",
  observationMetadata: Object.freeze({
    observed_at_epoch_ms: 1_800_000_030_000,
    freshness_basis: "source_observation_time_only",
    currentness_posture: "not_established_consumer_must_evaluate",
  }),
  memoryLaneExclusionPosture:
    "observation_excludes_memory_narrative_transcript_lanes",
  authorityPosture:
    "observation_grants_no_authority_membership_or_capability",
  authenticationPosture: "fixture_structural_only_no_live_authentication",
  authority: "none",
}) satisfies PondLocalPrincipalAuthenticationObservationRecord;

const receiverDp8VerifierRecord = Object.freeze({
  contractVersion: "pond-local-authentication-mechanic-d-p8",
  kind: "pond-local-authentication-verifier",
  principalRef: receiverRef,
  mechanicClass: "local_knowledge_factor_challenge_response",
  verifierBinding: Object.freeze({
    algorithm: "sha256",
    saltHex: receiverSaltHex,
    verifierDigestHex: receiverVerifierDigestHex,
  }),
  secretFreeInventoryPosture: "verifier_digest_only_no_secret_material",
  memoryLaneExclusionPosture:
    "binding_excludes_memory_narrative_transcript_lanes",
  authorityPosture: "verifier_grants_no_authority_membership_or_capability",
  revocabilityPosture: "verifier_revocable_by_re_enrollment",
  authority: "none",
}) satisfies PondLocalAuthenticationVerifierRecord;

const receiverDp8ProofRecord = Object.freeze({
  contractVersion: "pond-local-authentication-mechanic-d-p8",
  kind: "pond-local-authentication-challenge-proof",
  principalRef: receiverRef,
  mechanicClass: "local_knowledge_factor_challenge_response",
  challengeDigestBinding: Object.freeze({
    algorithm: "sha256",
    saltHex: receiverSaltHex,
    verifierDigestHex: receiverVerifierDigestHex,
    responseDigestHex: receiverVerifierDigestHex,
  }),
  comparison: "exact_digest_match",
  comparisonMetadata: Object.freeze({
    observed_at_epoch_ms: evaluatedAtEpochMs,
    freshness_basis: "source_observation_time_only",
    currentness_posture: "not_established_consumer_must_evaluate",
  }),
  secretFreeInventoryPosture: "response_digest_only_no_secret_material",
  memoryLaneExclusionPosture:
    "proof_excludes_memory_narrative_transcript_lanes",
  authorityPosture:
    "challenge_grants_no_authority_membership_or_capability",
  authority: "none",
}) satisfies PondLocalAuthenticationChallengeProofRecord;

const receiverDp9IssuanceRecord = Object.freeze({
  contractVersion: "pond-local-principal-id-issuance-d-p9",
  kind: "pond-local-principal-id-issuance",
  principalRef: receiverRef,
  issuanceBasis: "receiver_issued_local_principal_id",
  issuedRefPosture: "receiver_held_ref_declared_issued_no_second_identity",
  issuanceDistinctnessClaims: Object.freeze({
    isAgentId: false,
    isErc8004AgentId: false,
    isWalletAddress: false,
    isGrantId: false,
    isAttestationId: false,
    isProviderSessionId: false,
    isDisplayName: false,
  }),
  bindingEstablishmentPosture: "receiver_binding_established_before_issuance",
  memoryLaneExclusionPosture:
    "issuance_excludes_memory_narrative_transcript_lanes",
  authorityPosture: "issuance_grants_no_authority_membership_or_capability",
  revocabilityPosture: "issued_principal_id_revocable_by_receiver_replacement",
  authority: "none",
}) satisfies PondLocalPrincipalIdIssuanceRecord;

const receiverDp9MappingRecord = Object.freeze({
  contractVersion: "pond-erc8004-identity-mapping-d-p9",
  kind: "pond-erc8004-identity-mapping",
  principalRef: receiverRef,
  agentRef: "agent:fixture:stage-d-p0:trading-desk-agent0",
  erc8004IdentityRef: "erc8004:fixture:stage-d-p9:base-agent-id",
  mappingBasis: "receiver_owned_explicit_mapping_binding",
  mappingDistinctnessClaims: Object.freeze({
    onchainIdentityIsPrincipalIdentity: false,
    onchainIdentityEstablishesLocalAdmission: false,
    onchainIdentityEstablishesAuthority: false,
    onchainIdentityIsLocalAgentId: false,
  }),
  verificationEvidence: Object.freeze({
    chainIdObserved: null,
    registryAddress: null,
    agentId: null,
    ownerObserved: null,
    blockTag: null,
  }),
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

const receiverDp10ActivationRecord = Object.freeze({
  contractVersion: "pond-private-read-activation-d-p10",
  kind: "pond-private-read-activation",
  principalRef: receiverRef,
  activationBasis: "receiver_explicit_activation_not_inferred",
  activatedCapability: "receiver_private_read_of_own_structural_records",
  activationMetadata: Object.freeze({
    activated_at_epoch_ms: evaluatedAtEpochMs,
    freshness_basis: "activation_event_time_only",
    currentness_posture: "not_established_consumer_must_evaluate",
  }),
  effectiveCapabilityScopePosture:
    "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
  activationScopePosture: "session_scoped_receiver_restart_ends_activation",
  revocabilityPosture: "activation_revocable_by_receiver_retraction",
  trustedPolicyAttributionPosture:
    "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
  grantSufficiencyPosture: "activation_requires_no_grant",
  identityChainPosture:
    "activation_requires_current_verified_principal_identity_chain",
  collaborativeReadPosture: "not_included_single_principal_reads_only",
  memoryLaneAuthorityPosture:
    "activation_authorizes_no_memory_lane_crossing_or_release",
  authorityPosture:
    "activation_grants_no_authority_beyond_activated_read_scope",
  authority: "none",
}) satisfies PondPrivateReadActivationRecord;

// --- Counterpart leg records ---

const counterpartDp5CeremonyRecord = (
  bindingBasis: PondLocalPrincipalBindingEstablishmentRecord["bindingBasis"],
) =>
  Object.freeze({
    contractVersion: "pond-local-principal-binding-establishment-d-p5",
    kind: "pond-local-principal-binding-establishment",
    principalRef: counterpartRef,
    bindingBasis,
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

const counterpartHealthyDp5 = counterpartDp5CeremonyRecord(
  "receiver_owned_explicit_binding",
);

const counterpartDp6ObservationRecord = (observedAt: number) =>
  Object.freeze({
    contractVersion: "pond-local-principal-authentication-observation-d-p6",
    kind: "pond-local-principal-authentication-observation",
    principalRef: counterpartRef,
    eventState: "receiver_observed_local_authentication_event",
    observationChannel: "receiver_owned_local_shell_channel",
    secretFreeFieldInventoryPosture:
      "inventory_secret_free_no_credential_field_observed",
    observationMetadata: Object.freeze({
      observed_at_epoch_ms: observedAt,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    memoryLaneExclusionPosture:
      "observation_excludes_memory_narrative_transcript_lanes",
    authorityPosture:
      "observation_grants_no_authority_membership_or_capability",
    authenticationPosture: "fixture_structural_only_no_live_authentication",
    authority: "none",
  }) satisfies PondLocalPrincipalAuthenticationObservationRecord;

const counterpartHealthyDp6 =
  counterpartDp6ObservationRecord(1_800_000_030_000);

const counterpartVerifierRecord = (verifierDigestHex: string) =>
  Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    kind: "pond-local-authentication-verifier",
    principalRef: counterpartRef,
    mechanicClass: "local_knowledge_factor_challenge_response",
    verifierBinding: Object.freeze({
      algorithm: "sha256",
      saltHex: counterpartSaltHex,
      verifierDigestHex,
    }),
    secretFreeInventoryPosture: "verifier_digest_only_no_secret_material",
    memoryLaneExclusionPosture:
      "binding_excludes_memory_narrative_transcript_lanes",
    authorityPosture:
      "verifier_grants_no_authority_membership_or_capability",
    revocabilityPosture: "verifier_revocable_by_re_enrollment",
    authority: "none",
  }) satisfies PondLocalAuthenticationVerifierRecord;

const counterpartProofRecord = (
  verifierDigestHex: string,
  responseDigestHex: string,
) =>
  Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    kind: "pond-local-authentication-challenge-proof",
    principalRef: counterpartRef,
    mechanicClass: "local_knowledge_factor_challenge_response",
    challengeDigestBinding: Object.freeze({
      algorithm: "sha256",
      saltHex: counterpartSaltHex,
      verifierDigestHex,
      responseDigestHex,
    }),
    comparison: "exact_digest_match",
    comparisonMetadata: Object.freeze({
      observed_at_epoch_ms: evaluatedAtEpochMs,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    secretFreeInventoryPosture: "response_digest_only_no_secret_material",
    memoryLaneExclusionPosture:
      "proof_excludes_memory_narrative_transcript_lanes",
    authorityPosture:
      "challenge_grants_no_authority_membership_or_capability",
    authority: "none",
  }) satisfies PondLocalAuthenticationChallengeProofRecord;

const counterpartHealthyVerifier = counterpartVerifierRecord(
  counterpartVerifierDigestHex,
);
const counterpartHealthyProof = counterpartProofRecord(
  counterpartVerifierDigestHex,
  counterpartVerifierDigestHex,
);

// The counterpart carries NO issued PrincipalId — this not-issued-shaped
// record is the honest pinned arm. The smuggle variant below claims the
// issued literals: the frozen issuance assessor greens it (that is
// exactly what it would claim), and the D-P14 gate's own `not_issued`
// pin refuses it.
const counterpartNotIssuedRecord = Object.freeze({
  contractVersion: "pond-local-principal-id-issuance-d-p9",
  kind: "pond-local-principal-id-issuance",
  principalRef: counterpartRef,
  issuanceBasis: "not_issued",
  issuedRefPosture: "not_issued",
  issuanceDistinctnessClaims: Object.freeze({
    isAgentId: false,
    isErc8004AgentId: false,
    isWalletAddress: false,
    isGrantId: false,
    isAttestationId: false,
    isProviderSessionId: false,
    isDisplayName: false,
  }),
  bindingEstablishmentPosture: "not_established",
  memoryLaneExclusionPosture: "not_established",
  authorityPosture: "issuance_grants_no_authority_membership_or_capability",
  revocabilityPosture: "not_established",
  authority: "none",
}) satisfies PondLocalPrincipalIdIssuanceRecord;

const counterpartSmuggledIssuanceRecord = Object.freeze({
  ...counterpartNotIssuedRecord,
  issuanceBasis: "receiver_issued_local_principal_id",
  issuedRefPosture: "receiver_held_ref_declared_issued_no_second_identity",
  bindingEstablishmentPosture:
    "receiver_binding_established_before_issuance",
  memoryLaneExclusionPosture:
    "issuance_excludes_memory_narrative_transcript_lanes",
  revocabilityPosture:
    "issued_principal_id_revocable_by_receiver_replacement",
}) satisfies PondLocalPrincipalIdIssuanceRecord;

// --- The join, the collaborative activation, the read admission ---

const counterpartJoinDeclarationRecord = (
  declarationCounterpartRef: string,
) =>
  Object.freeze({
    contractVersion: "pond-collaborative-read-counterpart-declaration-d-p14",
    kind: "pond-collaborative-read-counterpart-declaration",
    receiverHeldPrincipalRef: receiverRef,
    counterpartPrincipalRef: declarationCounterpartRef,
    joinBasis: "receiver_declared_explicit_collaborative_session_join",
    heldRefPosture: "receiver_recorded_pre_existing_ref_never_issued",
    issuedIdPosture: "counterpart_carries_no_issued_principal_id",
    sessionScopePosture: "session_scoped_receiver_restart_ends_join",
    revocabilityPosture: "join_revocable_by_receiver_retraction",
    consentPosture:
      "receiver_recorded_session_join_only_no_counterpart_consent_claim",
    grantSufficiencyPosture:
      "join_requires_no_grant_and_establishes_no_grant",
    personalStateIsolationPosture:
      "counterpart_personal_state_not_merged_and_not_read_by_this_join",
    memoryLaneExclusionPosture:
      "join_excludes_memory_narrative_transcript_lanes",
    authorityPosture: "join_grants_no_authority_membership_or_capability",
    authority: "none",
  }) satisfies PondCollaborativeReadCounterpartDeclarationRecord;

const healthyJoin =
  counterpartJoinDeclarationRecord(counterpartRef);

const collaborativeActivationRecord = (
  activation_basis: PondCollaborativeReadActivationRecord["activationBasis"],
  activated_at: number,
) =>
  Object.freeze({
    contractVersion: "pond-collaborative-read-activation-d-p14",
    kind: "pond-collaborative-read-activation",
    receiverHeldPrincipalRef: receiverRef,
    counterpartPrincipalRef: counterpartRef,
    activationBasis: activation_basis,
    activatedCapability:
      "collaborative_structural_records_read_of_both_declared_principals",
    activationMetadata: Object.freeze({
      activated_at_epoch_ms: activated_at,
      freshness_basis: "activation_event_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    effectiveCapabilityScopePosture:
      "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
    multiPrincipalReadScopePosture:
      "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
    sessionScopePosture: "session_scoped_receiver_restart_ends_activation",
    revocabilityPosture:
      "collaborative_activation_revocable_by_receiver_retraction",
    trustedPolicyAttributionPosture:
      "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
    grantSufficiencyPosture: "activation_requires_no_grant",
    counterpartIdentityPosture:
      "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
    consentPosture:
      "receiver_recorded_session_join_only_no_counterpart_consent_claim",
    memoryLaneExclusionPosture:
      "activation_excludes_memory_narrative_transcript_lanes",
    authority: "none",
  }) satisfies PondCollaborativeReadActivationRecord;

const healthyActivation = collaborativeActivationRecord(
  "receiver_explicit_collaborative_activation_not_inferred",
  evaluatedAtEpochMs,
);

// All 13 labels sit inside the activated scope: the receiver's seven
// structural records, the counterpart's four, and the cut's own two
// records — audience-bound per prefix.
const allThirteenTargetRefs = [
  "receiver-record:pond-local-principal-binding-establishment-d-p5",
  "receiver-record:pond-local-principal-authentication-observation-d-p6",
  "receiver-record:pond-local-authentication-mechanic-d-p8",
  "receiver-record:pond-local-principal-id-issuance-d-p9",
  "receiver-record:pond-erc8004-identity-mapping-d-p9",
  "receiver-record:pond-principal-identity-readiness-composition-d-p9",
  "receiver-record:pond-private-read-activation-d-p10",
  "counterpart-record:pond-local-principal-binding-establishment-d-p5",
  "counterpart-record:pond-local-principal-authentication-observation-d-p6",
  "counterpart-record:pond-local-authentication-mechanic-d-p8",
  "counterpart-record:pond-collaborative-read-counterpart-declaration-d-p14",
  "collaborative-record:pond-collaborative-read-activation-d-p14",
  "collaborative-record:pond-collaborative-read-admission-d-p14",
];

const collaborativeReadAdmissionRecord = (
  read_basis: PondCollaborativeReadAdmissionRecord["readBasis"],
  readTargetRefs: readonly string[],
) =>
  Object.freeze({
    contractVersion: "pond-collaborative-read-admission-d-p14",
    kind: "pond-collaborative-read-admission",
    receiverHeldPrincipalRef: receiverRef,
    counterpartPrincipalRef: counterpartRef,
    readClass: "principal_structural_record_read",
    readTargetRefs: Object.freeze([...readTargetRefs]),
    readBasis: read_basis,
    activationBindingPosture:
      "read_admitted_only_within_session_scoped_collaborative_activation",
    inspectionPosture:
      "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
    scopingPosture:
      "audience_bound_to_the_two_declared_principals_only",
    truthPosture: "structural_presence_only_no_current_truth_claim",
    grantSufficiencyPosture:
      "read_requires_no_grant_receiver_trusted_policy_scope",
    laneExclusionPosture:
      "admission_excludes_memory_narrative_transcript_lanes",
    counterpartScopeExclusionPosture:
      "counterpart_records_structural_only_no_counterpart_private_state_read",
    revocabilityPosture: "read_revocable_by_activation_retraction",
    authority: "none",
  }) satisfies PondCollaborativeReadAdmissionRecord;

const healthyAdmissionRecord = collaborativeReadAdmissionRecord(
  "receiver_requested_collaborative_structural_records_read",
  allThirteenTargetRefs,
);

const completeCounterpartLegs = {
  counterpartDp5CeremonyRecord: counterpartHealthyDp5,
  counterpartDp6ObservationRecord: counterpartHealthyDp6,
  counterpartDp8VerifierRecord: counterpartHealthyVerifier,
  counterpartDp8ProofRecord: counterpartHealthyProof,
  counterpartDp9IssuanceRecord: counterpartNotIssuedRecord,
  counterpartDp9MappingRecord: null,
  counterpartDp10ActivationRecord: null,
};

// --- Gate arms ---

const baseEntry = (
  fixtureLabel: string,
  records: Omit<
    PondStageDP14CollaborativeReadFixtureEntry,
    "fixtureLabel" | "gateAssessment" | "evaluatedAtEpochMs" | "maximumAgeMs" | "receiverHeldPrincipalRef" | "counterpartPrincipalRef"
  >,
) => ({
  fixtureLabel,
  receiverHeldPrincipalRef: receiverRef,
  counterpartPrincipalRef: counterpartRef,
  ...records,
  evaluatedAtEpochMs,
  maximumAgeMs: receiverMaximumAgeMs,
});

// Arm 1 — complete: the receiver's explicit, session-scoped,
// restart-expiring collaborative activation over two declared
// principals, both chains structure-verified by the per-leg re-runs.
export const stageDP14GateEntryComplete = {
  ...baseEntry("two_principal_structural_records", {
    counterpartJoinDeclarationRecord: healthyJoin,
    collaborativeActivationRecord: healthyActivation,
    receiverDp5CeremonyRecord,
    receiverDp6ObservationRecord,
    receiverDp8VerifierRecord,
    receiverDp8ProofRecord,
    receiverDp9IssuanceRecord,
    receiverDp9MappingRecord,
    receiverDp10ActivationRecord,
    ...completeCounterpartLegs,
  }),
  gateAssessment: {
    "contractVersion": "pond-collaborative-read-activation-d-p14",
    "activationRecordVersion": "pond-collaborative-read-activation-d-p14",
    "assessmentKind": "deterministic_supplied_collaborative_read_activation",
    "collaborativeReadActivationState": "fixture_structural_session_scoped_collaborative_structural_read_activation",
    "reason": "all_collaborative_read_gate_checks_satisfied",
    "mappedCounterpartJoin": {
      "joinDeclarationState": "fixture_structural_receiver_declared_counterpart_join",
      "reason": "all_counterpart_join_checks_satisfied",
      "unsatisfiedChecks": []
    },
    "receiverChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "fixture_structural_local_principal_id_issued",
        "reason": "all_issuance_checks_satisfied"
      },
      "mappedDp9Mapping": {
        "state": "fixture_structural_receiver_owned_mapping",
        "reason": "onchain_verification_not_performed"
      },
      "mappedDp10": {
        "state": "fixture_structural_session_scoped_private_read_activation",
        "reason": "all_activation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      }
    },
    "counterpartChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "not_issued",
        "reason": "receiver_issuance_proof_incomplete"
      },
      "mappedDp9Mapping": {
        "state": "not_established",
        "reason": "mapping_record_invalid"
      },
      "mappedDp10": {
        "state": "not_activated",
        "reason": "activation_record_invalid",
        "diagnosis": {
          "state": "unknown",
          "reason": "observation_metadata_missing_or_invalid",
          "observationAgeMs": null
        }
      }
    },
    "receiverChainState": "principal_chain_structurally_verified",
    "counterpartChainState": "counterpart_chain_verified_without_issued_identity",
    "collaborativeFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
    "satisfiedChecks": [
      "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
      "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
      "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
      "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
      "collaborative_activation_session_scoped_fresh_and_restart_expiring",
      "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority"
    ],
    "unsatisfiedChecks": [],
    "collaborativeReadEstablishesGrant": false,
    "credentialAdmitted": false,
    "authenticationPerformed": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "counterpartMemoryContentAdmitted": false,
    "counterpartConsentEstablished": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP14CollaborativeReadFixtureEntry;

// Arm 2 — the counterpart's binding leg was declared from shared project
// presence, not receiver ownership: the chain re-run refuses the leg.
export const stageDP14GateEntryCounterpartBindingBroken = {
  ...baseEntry("counterpart_binding_leg_broken", {
    counterpartJoinDeclarationRecord: healthyJoin,
    collaborativeActivationRecord: healthyActivation,
    receiverDp5CeremonyRecord,
    receiverDp6ObservationRecord,
    receiverDp8VerifierRecord,
    receiverDp8ProofRecord,
    receiverDp9IssuanceRecord,
    receiverDp9MappingRecord,
    receiverDp10ActivationRecord,
    ...completeCounterpartLegs,
    counterpartDp5CeremonyRecord: counterpartDp5CeremonyRecord(
      "inferred_from_presence",
    ),
  }),
  gateAssessment: {
    "contractVersion": "pond-collaborative-read-activation-d-p14",
    "activationRecordVersion": "pond-collaborative-read-activation-d-p14",
    "assessmentKind": "deterministic_supplied_collaborative_read_activation",
    "collaborativeReadActivationState": "not_activated",
    "reason": "counterpart_chain_not_structurally_verified",
    "mappedCounterpartJoin": {
      "joinDeclarationState": "fixture_structural_receiver_declared_counterpart_join",
      "reason": "all_counterpart_join_checks_satisfied",
      "unsatisfiedChecks": []
    },
    "receiverChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "fixture_structural_local_principal_id_issued",
        "reason": "all_issuance_checks_satisfied"
      },
      "mappedDp9Mapping": {
        "state": "fixture_structural_receiver_owned_mapping",
        "reason": "onchain_verification_not_performed"
      },
      "mappedDp10": {
        "state": "fixture_structural_session_scoped_private_read_activation",
        "reason": "all_activation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      }
    },
    "counterpartChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mappedDp5": {
        "state": "not_established",
        "reason": "receiver_binding_proof_incomplete"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "not_issued",
        "reason": "receiver_issuance_proof_incomplete"
      },
      "mappedDp9Mapping": {
        "state": "not_established",
        "reason": "mapping_record_invalid"
      },
      "mappedDp10": {
        "state": "not_activated",
        "reason": "activation_record_invalid",
        "diagnosis": {
          "state": "unknown",
          "reason": "observation_metadata_missing_or_invalid",
          "observationAgeMs": null
        }
      }
    },
    "receiverChainState": "principal_chain_structurally_verified",
    "counterpartChainState": "chain_not_verified",
    "collaborativeFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "multiPrincipalReadScopePosture": "not_included",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
      "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
      "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
      "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
      "collaborative_activation_session_scoped_fresh_and_restart_expiring",
      "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority"
    ],
    "collaborativeReadEstablishesGrant": false,
    "credentialAdmitted": false,
    "authenticationPerformed": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "counterpartMemoryContentAdmitted": false,
    "counterpartConsentEstablished": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP14CollaborativeReadFixtureEntry;

// Arm 3 — the counterpart's second knowledge factor fails: the proof
// digest does not reproduce the second verifier digest.
export const stageDP14GateEntryCounterpartKnowledgeFactorBroken = {
  ...baseEntry("counterpart_knowledge_factor_refused", {
    counterpartJoinDeclarationRecord: healthyJoin,
    collaborativeActivationRecord: healthyActivation,
    receiverDp5CeremonyRecord,
    receiverDp6ObservationRecord,
    receiverDp8VerifierRecord,
    receiverDp8ProofRecord,
    receiverDp9IssuanceRecord,
    receiverDp9MappingRecord,
    receiverDp10ActivationRecord,
    ...completeCounterpartLegs,
    counterpartDp8ProofRecord: counterpartProofRecord(
      counterpartVerifierDigestHex,
      counterpartMismatchDigestHex,
    ),
  }),
  gateAssessment: {
    "contractVersion": "pond-collaborative-read-activation-d-p14",
    "activationRecordVersion": "pond-collaborative-read-activation-d-p14",
    "assessmentKind": "deterministic_supplied_collaborative_read_activation",
    "collaborativeReadActivationState": "not_activated",
    "reason": "counterpart_chain_not_structurally_verified",
    "mappedCounterpartJoin": {
      "joinDeclarationState": "fixture_structural_receiver_declared_counterpart_join",
      "reason": "all_counterpart_join_checks_satisfied",
      "unsatisfiedChecks": []
    },
    "receiverChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "fixture_structural_local_principal_id_issued",
        "reason": "all_issuance_checks_satisfied"
      },
      "mappedDp9Mapping": {
        "state": "fixture_structural_receiver_owned_mapping",
        "reason": "onchain_verification_not_performed"
      },
      "mappedDp10": {
        "state": "fixture_structural_session_scoped_private_read_activation",
        "reason": "all_activation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      }
    },
    "counterpartChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "not_verified",
        "mechanicReason": "receiver_challenge_proof_incomplete",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "not_issued",
        "reason": "receiver_issuance_proof_incomplete"
      },
      "mappedDp9Mapping": {
        "state": "not_established",
        "reason": "mapping_record_invalid"
      },
      "mappedDp10": {
        "state": "not_activated",
        "reason": "activation_record_invalid",
        "diagnosis": {
          "state": "unknown",
          "reason": "observation_metadata_missing_or_invalid",
          "observationAgeMs": null
        }
      }
    },
    "receiverChainState": "principal_chain_structurally_verified",
    "counterpartChainState": "chain_not_verified",
    "collaborativeFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "multiPrincipalReadScopePosture": "not_included",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
      "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
      "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
      "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
      "collaborative_activation_session_scoped_fresh_and_restart_expiring",
      "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority"
    ],
    "collaborativeReadEstablishesGrant": false,
    "credentialAdmitted": false,
    "authenticationPerformed": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "counterpartMemoryContentAdmitted": false,
    "counterpartConsentEstablished": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP14CollaborativeReadFixtureEntry;

// Arm 4 — the RECEIVER's authentication observation is stale: the D-P6
// leg the D-P10 chain predated is exactly the leg this cut re-runs.
export const stageDP14GateEntryReceiverObservationStale = {
  ...baseEntry("receiver_observation_stale_chain_broken", {
    counterpartJoinDeclarationRecord: healthyJoin,
    collaborativeActivationRecord: healthyActivation,
    receiverDp5CeremonyRecord,
    receiverDp6ObservationRecord: {
      ...receiverDp6ObservationRecord,
      observationMetadata: Object.freeze({
        observed_at_epoch_ms: staleEpochMs,
        freshness_basis: "source_observation_time_only",
        currentness_posture: "not_established_consumer_must_evaluate",
      }),
    } as PondLocalPrincipalAuthenticationObservationRecord,
    receiverDp8VerifierRecord,
    receiverDp8ProofRecord,
    receiverDp9IssuanceRecord,
    receiverDp9MappingRecord,
    receiverDp10ActivationRecord,
    ...completeCounterpartLegs,
  }),
  gateAssessment: {
    "contractVersion": "pond-collaborative-read-activation-d-p14",
    "activationRecordVersion": "pond-collaborative-read-activation-d-p14",
    "assessmentKind": "deterministic_supplied_collaborative_read_activation",
    "collaborativeReadActivationState": "not_activated",
    "reason": "receiver_chain_not_structurally_ready_or_current",
    "mappedCounterpartJoin": {
      "joinDeclarationState": "fixture_structural_receiver_declared_counterpart_join",
      "reason": "all_counterpart_join_checks_satisfied",
      "unsatisfiedChecks": []
    },
    "receiverChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "not_observed",
        "reason": "receiver_authentication_proof_incomplete",
        "diagnosis": {
          "state": "stale",
          "reason": "declared_maximum_age_expired",
          "observationAgeMs": 60001
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "fixture_structural_local_principal_id_issued",
        "reason": "all_issuance_checks_satisfied"
      },
      "mappedDp9Mapping": {
        "state": "fixture_structural_receiver_owned_mapping",
        "reason": "onchain_verification_not_performed"
      },
      "mappedDp10": {
        "state": "fixture_structural_session_scoped_private_read_activation",
        "reason": "all_activation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      }
    },
    "counterpartChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "not_issued",
        "reason": "receiver_issuance_proof_incomplete"
      },
      "mappedDp9Mapping": {
        "state": "not_established",
        "reason": "mapping_record_invalid"
      },
      "mappedDp10": {
        "state": "not_activated",
        "reason": "activation_record_invalid",
        "diagnosis": {
          "state": "unknown",
          "reason": "observation_metadata_missing_or_invalid",
          "observationAgeMs": null
        }
      }
    },
    "receiverChainState": "chain_not_verified",
    "counterpartChainState": "counterpart_chain_verified_without_issued_identity",
    "collaborativeFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "multiPrincipalReadScopePosture": "not_included",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
      "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
      "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
      "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
      "collaborative_activation_session_scoped_fresh_and_restart_expiring",
      "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority"
    ],
    "collaborativeReadEstablishesGrant": false,
    "credentialAdmitted": false,
    "authenticationPerformed": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "counterpartMemoryContentAdmitted": false,
    "counterpartConsentEstablished": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP14CollaborativeReadFixtureEntry;

// Arm 5 — the join's counterpart ref equals the receiver's own ref: the
// pairwise-distinct join check refuses the self-join.
export const stageDP14GateEntrySelfJoinRefused = {
  ...baseEntry("counterpart_equals_receiver_join_refused", {
    counterpartJoinDeclarationRecord:
      counterpartJoinDeclarationRecord(receiverRef),
    collaborativeActivationRecord: healthyActivation,
    receiverDp5CeremonyRecord,
    receiverDp6ObservationRecord,
    receiverDp8VerifierRecord,
    receiverDp8ProofRecord,
    receiverDp9IssuanceRecord,
    receiverDp9MappingRecord,
    receiverDp10ActivationRecord,
    ...completeCounterpartLegs,
  }),
  gateAssessment: {
    "contractVersion": "pond-collaborative-read-activation-d-p14",
    "activationRecordVersion": "pond-collaborative-read-activation-d-p14",
    "assessmentKind": "deterministic_supplied_collaborative_read_activation",
    "collaborativeReadActivationState": "not_activated",
    "reason": "counterpart_join_not_established",
    "mappedCounterpartJoin": {
      "joinDeclarationState": "join_not_established",
      "reason": "receiver_join_declaration_proof_incomplete",
      "unsatisfiedChecks": [
        "join_pairwise_distinct_refs"
      ]
    },
    "receiverChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "fixture_structural_local_principal_id_issued",
        "reason": "all_issuance_checks_satisfied"
      },
      "mappedDp9Mapping": {
        "state": "fixture_structural_receiver_owned_mapping",
        "reason": "onchain_verification_not_performed"
      },
      "mappedDp10": {
        "state": "fixture_structural_session_scoped_private_read_activation",
        "reason": "all_activation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      }
    },
    "counterpartChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "not_issued",
        "reason": "receiver_issuance_proof_incomplete"
      },
      "mappedDp9Mapping": {
        "state": "not_established",
        "reason": "mapping_record_invalid"
      },
      "mappedDp10": {
        "state": "not_activated",
        "reason": "activation_record_invalid",
        "diagnosis": {
          "state": "unknown",
          "reason": "observation_metadata_missing_or_invalid",
          "observationAgeMs": null
        }
      }
    },
    "receiverChainState": "principal_chain_structurally_verified",
    "counterpartChainState": "counterpart_chain_verified_without_issued_identity",
    "collaborativeFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "multiPrincipalReadScopePosture": "not_included",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
      "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
      "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
      "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
      "collaborative_activation_session_scoped_fresh_and_restart_expiring",
      "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority"
    ],
    "collaborativeReadEstablishesGrant": false,
    "credentialAdmitted": false,
    "authenticationPerformed": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "counterpartMemoryContentAdmitted": false,
    "counterpartConsentEstablished": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP14CollaborativeReadFixtureEntry;

// Arm 6 — the widening proof: the counterpart's issuance record claims
// the issued literals and greens through the frozen issuance assessor,
// but the counterpart chain re-run's own `not_issued` pin refuses it.
// No second identity is ever created or accepted.
export const stageDP14GateEntryCounterpartIdentitySmuggled = {
  ...baseEntry("counterpart_identity_issuance_smuggle_refused", {
    counterpartJoinDeclarationRecord: healthyJoin,
    collaborativeActivationRecord: healthyActivation,
    receiverDp5CeremonyRecord,
    receiverDp6ObservationRecord,
    receiverDp8VerifierRecord,
    receiverDp8ProofRecord,
    receiverDp9IssuanceRecord,
    receiverDp9MappingRecord,
    receiverDp10ActivationRecord,
    ...completeCounterpartLegs,
    counterpartDp9IssuanceRecord: counterpartSmuggledIssuanceRecord,
  }),
  gateAssessment: {
    "contractVersion": "pond-collaborative-read-activation-d-p14",
    "activationRecordVersion": "pond-collaborative-read-activation-d-p14",
    "assessmentKind": "deterministic_supplied_collaborative_read_activation",
    "collaborativeReadActivationState": "not_activated",
    "reason": "counterpart_chain_not_structurally_verified",
    "mappedCounterpartJoin": {
      "joinDeclarationState": "fixture_structural_receiver_declared_counterpart_join",
      "reason": "all_counterpart_join_checks_satisfied",
      "unsatisfiedChecks": []
    },
    "receiverChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "fixture_structural_local_principal_id_issued",
        "reason": "all_issuance_checks_satisfied"
      },
      "mappedDp9Mapping": {
        "state": "fixture_structural_receiver_owned_mapping",
        "reason": "onchain_verification_not_performed"
      },
      "mappedDp10": {
        "state": "fixture_structural_session_scoped_private_read_activation",
        "reason": "all_activation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      }
    },
    "counterpartChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "fixture_structural_local_principal_id_issued",
        "reason": "all_issuance_checks_satisfied"
      },
      "mappedDp9Mapping": {
        "state": "not_established",
        "reason": "mapping_record_invalid"
      },
      "mappedDp10": {
        "state": "not_activated",
        "reason": "activation_record_invalid",
        "diagnosis": {
          "state": "unknown",
          "reason": "observation_metadata_missing_or_invalid",
          "observationAgeMs": null
        }
      }
    },
    "receiverChainState": "principal_chain_structurally_verified",
    "counterpartChainState": "chain_not_verified",
    "collaborativeFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "multiPrincipalReadScopePosture": "not_included",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
      "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
      "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
      "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
      "collaborative_activation_session_scoped_fresh_and_restart_expiring",
      "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority"
    ],
    "collaborativeReadEstablishesGrant": false,
    "credentialAdmitted": false,
    "authenticationPerformed": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "counterpartMemoryContentAdmitted": false,
    "counterpartConsentEstablished": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP14CollaborativeReadFixtureEntry;

// Arm 7 — the collaborative activation itself expired: both chains stay
// fully verified and fresh, and the session-scoped activation does not
// silently survive (scope law 9: restart ends activation).
export const stageDP14GateEntryStaleActivation = {
  ...baseEntry("stale_collaborative_activation_expired", {
    counterpartJoinDeclarationRecord: healthyJoin,
    collaborativeActivationRecord: collaborativeActivationRecord(
      "receiver_explicit_collaborative_activation_not_inferred",
      staleEpochMs,
    ),
    receiverDp5CeremonyRecord,
    receiverDp6ObservationRecord,
    receiverDp8VerifierRecord,
    receiverDp8ProofRecord,
    receiverDp9IssuanceRecord,
    receiverDp9MappingRecord,
    receiverDp10ActivationRecord,
    ...completeCounterpartLegs,
  }),
  gateAssessment: {
    "contractVersion": "pond-collaborative-read-activation-d-p14",
    "activationRecordVersion": "pond-collaborative-read-activation-d-p14",
    "assessmentKind": "deterministic_supplied_collaborative_read_activation",
    "collaborativeReadActivationState": "not_activated",
    "reason": "collaborative_activation_not_session_current",
    "mappedCounterpartJoin": {
      "joinDeclarationState": "fixture_structural_receiver_declared_counterpart_join",
      "reason": "all_counterpart_join_checks_satisfied",
      "unsatisfiedChecks": []
    },
    "receiverChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "fixture_structural_local_principal_id_issued",
        "reason": "all_issuance_checks_satisfied"
      },
      "mappedDp9Mapping": {
        "state": "fixture_structural_receiver_owned_mapping",
        "reason": "onchain_verification_not_performed"
      },
      "mappedDp10": {
        "state": "fixture_structural_session_scoped_private_read_activation",
        "reason": "all_activation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      }
    },
    "counterpartChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "not_issued",
        "reason": "receiver_issuance_proof_incomplete"
      },
      "mappedDp9Mapping": {
        "state": "not_established",
        "reason": "mapping_record_invalid"
      },
      "mappedDp10": {
        "state": "not_activated",
        "reason": "activation_record_invalid",
        "diagnosis": {
          "state": "unknown",
          "reason": "observation_metadata_missing_or_invalid",
          "observationAgeMs": null
        }
      }
    },
    "receiverChainState": "principal_chain_structurally_verified",
    "counterpartChainState": "counterpart_chain_verified_without_issued_identity",
    "collaborativeFreshnessDiagnosis": {
      "state": "stale",
      "reason": "declared_maximum_age_expired",
      "observationAgeMs": 60001
    },
    "multiPrincipalReadScopePosture": "not_included",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals",
      "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
      "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
      "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
      "collaborative_activation_session_scoped_fresh_and_restart_expiring",
      "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority"
    ],
    "collaborativeReadEstablishesGrant": false,
    "credentialAdmitted": false,
    "authenticationPerformed": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "counterpartMemoryContentAdmitted": false,
    "counterpartConsentEstablished": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP14CollaborativeReadFixtureEntry;

// Arm 8 — the activation claimed from the two single-principal
// activations completing: chains green, session current, and the
// declarative check refused — completion evidence never answers whether
// to widen the read.
export const stageDP14GateEntryInferredActivation = {
  ...baseEntry("inferred_collaborative_activation_refused", {
    counterpartJoinDeclarationRecord: healthyJoin,
    collaborativeActivationRecord: collaborativeActivationRecord(
      "derived_from_single_principal_activations",
      evaluatedAtEpochMs,
    ),
    receiverDp5CeremonyRecord,
    receiverDp6ObservationRecord,
    receiverDp8VerifierRecord,
    receiverDp8ProofRecord,
    receiverDp9IssuanceRecord,
    receiverDp9MappingRecord,
    receiverDp10ActivationRecord,
    ...completeCounterpartLegs,
  }),
  gateAssessment: {
    "contractVersion": "pond-collaborative-read-activation-d-p14",
    "activationRecordVersion": "pond-collaborative-read-activation-d-p14",
    "assessmentKind": "deterministic_supplied_collaborative_read_activation",
    "collaborativeReadActivationState": "not_activated",
    "reason": "receiver_collaborative_activation_proof_incomplete",
    "mappedCounterpartJoin": {
      "joinDeclarationState": "fixture_structural_receiver_declared_counterpart_join",
      "reason": "all_counterpart_join_checks_satisfied",
      "unsatisfiedChecks": []
    },
    "receiverChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "fixture_structural_local_principal_id_issued",
        "reason": "all_issuance_checks_satisfied"
      },
      "mappedDp9Mapping": {
        "state": "fixture_structural_receiver_owned_mapping",
        "reason": "onchain_verification_not_performed"
      },
      "mappedDp10": {
        "state": "fixture_structural_session_scoped_private_read_activation",
        "reason": "all_activation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      }
    },
    "counterpartChain": {
      "heldPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mappedDp5": {
        "state": "fixture_established_local_principal_binding",
        "reason": "all_ceremony_checks_satisfied"
      },
      "mappedDp6": {
        "state": "fixture_observed_local_authentication",
        "reason": "all_observation_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 30000
        }
      },
      "mappedDp8": {
        "verifierState": "receiver_enrolled_knowledge_verifier",
        "verifierReason": "verifier_enrolled",
        "mechanicState": "receiver_verified_knowledge_factor",
        "mechanicReason": "all_challenge_checks_satisfied",
        "diagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 0
        }
      },
      "mappedDp9Issuance": {
        "state": "not_issued",
        "reason": "receiver_issuance_proof_incomplete"
      },
      "mappedDp9Mapping": {
        "state": "not_established",
        "reason": "mapping_record_invalid"
      },
      "mappedDp10": {
        "state": "not_activated",
        "reason": "activation_record_invalid",
        "diagnosis": {
          "state": "unknown",
          "reason": "observation_metadata_missing_or_invalid",
          "observationAgeMs": null
        }
      }
    },
    "receiverChainState": "principal_chain_structurally_verified",
    "counterpartChainState": "counterpart_chain_verified_without_issued_identity",
    "collaborativeFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "multiPrincipalReadScopePosture": "not_included",
    "satisfiedChecks": [
      "counterpart_join_declared_pairwise_distinct_and_session_scoped_d_p14",
      "receiver_identity_chain_structurally_ready_and_current_dp5_dp6_dp8_dp9_dp10",
      "counterpart_chain_structurally_verified_without_issued_identity_no_private_activation_d_p14",
      "collaborative_activation_session_scoped_fresh_and_restart_expiring",
      "collaborative_ceiling_held_no_grant_no_memory_no_second_identity_no_authority"
    ],
    "unsatisfiedChecks": [
      "collaborative_activation_explicitly_receiver_declared_bound_to_both_principals"
    ],
    "collaborativeReadEstablishesGrant": false,
    "credentialAdmitted": false,
    "authenticationPerformed": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "counterpartMemoryContentAdmitted": false,
    "counterpartConsentEstablished": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP14CollaborativeReadFixtureEntry;

export const stageDP14CollaborativeReadGateMatrix = deepFreeze([
  stageDP14GateEntryComplete,
  stageDP14GateEntryCounterpartBindingBroken,
  stageDP14GateEntryCounterpartKnowledgeFactorBroken,
  stageDP14GateEntryReceiverObservationStale,
  stageDP14GateEntrySelfJoinRefused,
  stageDP14GateEntryCounterpartIdentitySmuggled,
  stageDP14GateEntryStaleActivation,
  stageDP14GateEntryInferredActivation,
]);

// --- Admission entries ---

// Admission arm 1 — admitted: the receiver explicitly requested the
// collaborative structural-records read inside the completed
// activation, over all 13 table targets.
export const stageDP14AdmissionEntryAdmitted = {
  fixtureLabel: "collaborative_structural_records_read_admitted",
  receiverHeldPrincipalRef: receiverRef,
  counterpartPrincipalRef: counterpartRef,
  readAdmissionRecord: healthyAdmissionRecord,
  collaborativeActivationRecord: healthyActivation,
  counterpartJoinDeclarationRecord: healthyJoin,
  assessment: {
    "contractVersion": "pond-collaborative-read-admission-d-p14",
    "admissionRecordVersion": "pond-collaborative-read-admission-d-p14",
    "assessmentKind": "deterministic_supplied_collaborative_read_admission",
    "collaborativeReadAdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
    "reason": "all_collaborative_read_admission_checks_satisfied",
    "admittedTargetRefs": [
      "receiver-record:pond-local-principal-binding-establishment-d-p5",
      "receiver-record:pond-local-principal-authentication-observation-d-p6",
      "receiver-record:pond-local-authentication-mechanic-d-p8",
      "receiver-record:pond-local-principal-id-issuance-d-p9",
      "receiver-record:pond-erc8004-identity-mapping-d-p9",
      "receiver-record:pond-principal-identity-readiness-composition-d-p9",
      "receiver-record:pond-private-read-activation-d-p10",
      "counterpart-record:pond-local-principal-binding-establishment-d-p5",
      "counterpart-record:pond-local-principal-authentication-observation-d-p6",
      "counterpart-record:pond-local-authentication-mechanic-d-p8",
      "counterpart-record:pond-collaborative-read-counterpart-declaration-d-p14",
      "collaborative-record:pond-collaborative-read-activation-d-p14",
      "collaborative-record:pond-collaborative-read-admission-d-p14"
    ],
    "mappedCounterpartJoin": {
      "joinDeclarationState": "fixture_structural_receiver_declared_counterpart_join",
      "reason": "all_counterpart_join_checks_satisfied"
    },
    "admissionSessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "effectiveReadScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
    "readTruthPosture": "structural_presence_only_no_current_truth_claim",
    "satisfiedChecks": [
      "read_admission_bound_to_both_declared_principals",
      "read_basis_explicitly_receiver_owned_not_inferred",
      "read_class_structural_records_only",
      "read_targets_within_collaborative_activation_scope",
      "read_admission_excludes_memory_and_lane_content",
      "read_admission_requires_no_grant_and_stays_revocable",
      "read_admission_inspection_is_the_gate_recomputation"
    ],
    "unsatisfiedChecks": [],
    "collaborativeReadEstablishesGrant": false,
    "credentialAdmitted": false,
    "authenticationPerformed": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "counterpartMemoryContentAdmitted": false,
    "counterpartConsentEstablished": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP14CollaborativeReadAdmissionFixtureEntry;

// Admission arm 2 — refused: a smuggled lane-shaped target label is
// outside the 13-label table, so the admission record never validates —
// the vocabulary guard IS the target refusal.
export const stageDP14AdmissionEntrySmuggledTarget = {
  fixtureLabel: "smuggled_lane_label_target_refused",
  receiverHeldPrincipalRef: receiverRef,
  counterpartPrincipalRef: counterpartRef,
  readAdmissionRecord: collaborativeReadAdmissionRecord(
    "receiver_requested_collaborative_structural_records_read",
    ["lane-record:knowledge-forge-surface"],
  ),
  collaborativeActivationRecord: healthyActivation,
  counterpartJoinDeclarationRecord: healthyJoin,
  assessment: {
    "contractVersion": "pond-collaborative-read-admission-d-p14",
    "admissionRecordVersion": "invalid",
    "assessmentKind": "deterministic_supplied_collaborative_read_admission",
    "collaborativeReadAdmissionState": "not_admitted",
    "reason": "admission_record_invalid",
    "admittedTargetRefs": [],
    "mappedCounterpartJoin": {
      "joinDeclarationState": "join_not_established",
      "reason": "counterpart_declaration_record_invalid"
    },
    "admissionSessionScopePosture": "not_established",
    "effectiveReadScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
    "readTruthPosture": "structural_presence_only_no_current_truth_claim",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "read_admission_bound_to_both_declared_principals",
      "read_basis_explicitly_receiver_owned_not_inferred",
      "read_class_structural_records_only",
      "read_targets_within_collaborative_activation_scope",
      "read_admission_excludes_memory_and_lane_content",
      "read_admission_requires_no_grant_and_stays_revocable",
      "read_admission_inspection_is_the_gate_recomputation"
    ],
    "collaborativeReadEstablishesGrant": false,
    "credentialAdmitted": false,
    "authenticationPerformed": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "counterpartMemoryContentAdmitted": false,
    "counterpartConsentEstablished": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP14CollaborativeReadAdmissionFixtureEntry;

export const stageDP14CollaborativeReadAdmissionMatrix = deepFreeze([
  stageDP14AdmissionEntryAdmitted,
  stageDP14AdmissionEntrySmuggledTarget,
]);

// Compile-time fixture invariants: the complete arm's gate completes,
// never becomes a grant, opens no consent, and stays authority-none;
// the admission admits structural records only.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP14FixtureInvariant_CompleteGateStructuralRecordsOnly =
  Assert<
    Equal<
      [
        typeof stageDP14GateEntryComplete["gateAssessment"]["collaborativeReadEstablishesGrant"],
        typeof stageDP14GateEntryComplete["gateAssessment"]["counterpartConsentEstablished"],
        typeof stageDP14GateEntryComplete["gateAssessment"]["currentTruthAdmitted"],
        typeof stageDP14GateEntryComplete["gateAssessment"]["authority"],
      ],
      [false, false, false, "none"]
    >
  >;
export type PondStageDP14FixtureInvariant_CompleteGateDualBinding = Assert<
  Equal<
    [
      typeof stageDP14GateEntryComplete["receiverHeldPrincipalRef"],
      typeof stageDP14GateEntryComplete["counterpartPrincipalRef"],
    ],
    [
      "principal:fixture:stage-d-p0:local-principal",
      "principal:fixture:stage-d-p14:counterpart-principal",
    ]
  >
>;
export type PondStageDP14FixtureInvariant_CompleteAdmissionStructuralOnly =
  Assert<
    Equal<
      [
        ["fixture_structural_collaborative_structural_record_read_admitted"] extends [
          typeof stageDP14AdmissionEntryAdmitted["assessment"]["collaborativeReadAdmissionState"],
        ]
          ? true
          : false,
        typeof stageDP14AdmissionEntryAdmitted["assessment"]["collaborativeReadEstablishesGrant"],
      ],
      [true, false]
    >
  >;
// --- Flat pinned constants for the selftest's ties ---
export const stageDP14ReceiverRef = receiverRef;
export const stageDP14CounterpartRef = counterpartRef;
export const stageDP14EvaluatedAtEpochMs = evaluatedAtEpochMs;
export const stageDP14StaleEpochMs = staleEpochMs;
export const stageDP14MaximumAgeMs = receiverMaximumAgeMs;
export const stageDP14ReceiverSaltHex = receiverSaltHex;
export const stageDP14ReceiverVerifierDigestHex = receiverVerifierDigestHex;
export const stageDP14CounterpartSaltHex = counterpartSaltHex;
export const stageDP14CounterpartVerifierDigestHex =
  counterpartVerifierDigestHex;
export const stageDP14AllThirteenTargetRefs = Object.freeze(
  [...allThirteenTargetRefs],
);
