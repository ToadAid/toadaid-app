// Stage D-P10 fixture: the private-read activation matrix — the
// activation ceremony (complete / readiness-inferred-and-refused), the
// per-read admission (admitted / lane-content-read-refused), and the
// endpoint composition over the full chain (complete / stale activation /
// admission incomplete). Zero value imports: every import is type-only,
// so the selftest imports this file directly under node type-stripping.
// The composition and activation arms inline literal copies of the D-P5
// ceremony, the D-P8 verifier and proof records, and the D-P9 issuance
// and mapping records — the selftest deep-equals those copies against the
// actual D-P5/D-P8/D-P9 fixture exports. `satisfies` typing keeps
// arm-level literals sharp for the fixture invariants.

import type {
  PondPrivateReadActivationAssessment,
  PondPrivateReadActivationRecord,
} from "../contracts/pond-private-read-activation.js";
import type {
  PondPrivateReadAdmissionAssessment,
  PondPrivateReadAdmissionRecord,
} from "../contracts/pond-private-read-admission.js";
import type { PondPrivateReadCompositionAssessment } from "../contracts/pond-private-read-activation-composition.js";
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
import type { PondLocalPrincipalBindingEstablishmentRecord } from "../contracts/pond-local-principal-binding-establishment.js";
import type { PondAgentPresenceObservationFreshnessDiagnosis } from "../contracts/pond-agent-presence-observation-intake.js";

export interface PondStageDP10ActivationFixtureEntry {
  readonly fixtureLabel: string;
  readonly activationRecord: PondPrivateReadActivationRecord;
  readonly receiverHeldPrincipalRef: string;
  readonly receiverEvaluatedAtEpochMs: number;
  readonly receiverMaximumAgeMs: number;
  readonly assessment: PondPrivateReadActivationAssessment;
}

export interface PondStageDP10AdmissionFixtureEntry {
  readonly fixtureLabel: string;
  readonly readAdmissionRecord: PondPrivateReadAdmissionRecord;
  readonly activationRecord: PondPrivateReadActivationRecord;
  readonly receiverHeldPrincipalRef: string;
  readonly assessment: PondPrivateReadAdmissionAssessment;
}

export interface PondStageDP10CompositionFixtureEntry {
  readonly fixtureLabel: string;
  readonly readActivationRecord: PondPrivateReadActivationRecord;
  readonly readAdmissionRecord: PondPrivateReadAdmissionRecord;
  readonly receiverHeldPrincipalRef: string;
  readonly dp5CeremonyRecord: PondLocalPrincipalBindingEstablishmentRecord;
  readonly dp8VerifierRecord: PondLocalAuthenticationVerifierRecord;
  readonly dp8ProofRecord: PondLocalAuthenticationChallengeProofRecord;
  readonly dp9IssuanceRecord: PondLocalPrincipalIdIssuanceRecord;
  readonly dp9MappingRecord: PondErc8004IdentityMappingRecord;
  readonly receiverEvaluatedAtEpochMs: number;
  readonly receiverMaximumAgeMs: number;
  readonly assessment: PondPrivateReadCompositionAssessment;
}

// The Stage D local principal, carried from the D-P0 fixture — the same
// one-binding-one-ref principal across D-P5/D-P8/D-P9 and now D-P10.
const principalRef = "principal:fixture:stage-d-p0:local-principal";

// The D-P8 digest binding, carried from the D-P8 fixture (digests only —
// the pinned secret lives in the selftest alone). The activation event
// shares the D-P8 comparison instant, so a fresh chain and a fresh
// activation are the same zero-age facts.
const saltHex = "0a1b2c3d4e5f60718293a4b5c6d7e8f9";
const verifierDigestHex =
  "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f";
const activatedAtEpochMs = 1_800_000_060_000;
const receiverEvaluatedAtEpochMs = 1_800_000_060_000;
const receiverMaximumAgeMs = 60_000;
// The stale arm's activation event: one millisecond past the declared
// maximum age at the same evaluation time — the chain stays fresh, the
// activation does not.
const staleActivatedAtEpochMs = 1_799_999_999_999;

const allActivationChecks = Object.freeze([
  "principal_ref_well_formed",
  "activation_bound_to_receiver_held_principal",
  "activation_basis_explicitly_receiver_owned_not_inferred_from_readiness",
  "identity_chain_structurally_ready_and_current",
  "activation_session_scoped_fresh_and_restart_expiring",
  "activation_requires_no_grant_trusted_policy_attributed_and_stays_revocable",
  "activation_excludes_memory_lanes_and_multi_principal_scope",
] as const);

const activationRecord = (
  activationBasis: PondPrivateReadActivationRecord["activationBasis"],
  activationScopePosture: PondPrivateReadActivationRecord["activationScopePosture"],
  revocabilityPosture: PondPrivateReadActivationRecord["revocabilityPosture"],
  activated_at_epoch_ms: number,
) =>
  Object.freeze({
    contractVersion: "pond-private-read-activation-d-p10",
    kind: "pond-private-read-activation",
    principalRef,
    activationBasis,
    activatedCapability: "receiver_private_read_of_own_structural_records",
    activationMetadata: Object.freeze({
      activated_at_epoch_ms,
      freshness_basis: "activation_event_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    effectiveCapabilityScopePosture:
      "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
    activationScopePosture,
    revocabilityPosture,
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

const zeroAgeDiagnosis = Object.freeze({
  state: "fresh",
  reason: "within_declared_maximum_age",
  observationAgeMs: 0,
}) satisfies PondAgentPresenceObservationFreshnessDiagnosis;

const staleDiagnosis = Object.freeze({
  state: "stale",
  reason: "declared_maximum_age_expired",
  observationAgeMs: 60_001,
}) satisfies PondAgentPresenceObservationFreshnessDiagnosis;

// Complete arm: the receiver's explicit, session-scoped, restart-expiring,
// revocable, non-grant activation of its own structural-record reads — and
// the identity chain beneath it is verified fresh by the re-run.
export const stageDP10ActivationComplete = Object.freeze({
  fixtureLabel: "receiver_explicit_session_scoped_activation",
  activationRecord: activationRecord(
    "receiver_explicit_activation_not_inferred",
    "session_scoped_receiver_restart_ends_activation",
    "activation_revocable_by_receiver_retraction",
    activatedAtEpochMs,
  ),
  receiverHeldPrincipalRef: principalRef,
  receiverEvaluatedAtEpochMs,
  receiverMaximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-private-read-activation-d-p10",
    activationRecordVersion: "pond-private-read-activation-d-p10",
    assessmentKind: "deterministic_supplied_private_read_activation",
    activationState: "fixture_structural_session_scoped_private_read_activation",
    reason: "all_activation_checks_satisfied",
    activationFreshnessDiagnosis: zeroAgeDiagnosis,
    effectiveReadScopePosture:
      "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
    sessionScopePosture: "session_scoped_receiver_restart_ends_activation",
    collaborativeReadScopePosture: "not_included_single_principal_reads_only",
    identityChainReadinessState:
      "structurally_ready_private_reads_still_refused",
    identityChainUnsatisfiedChecks: Object.freeze([] as const),
    satisfiedChecks: allActivationChecks,
    unsatisfiedChecks: Object.freeze([] as const),
    activationEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondPrivateReadActivationAssessment,
}) satisfies PondStageDP10ActivationFixtureEntry;

// Refused arm: the completion-evidence arm. The record is valid and the
// identity chain is ready, but the activation is claimed from structural
// readiness — exactly what the evidence-activation law refuses: completion
// evidence does not answer whether to activate.
export const stageDP10ActivationRefused = Object.freeze({
  fixtureLabel: "activation_inferred_from_readiness_refused",
  activationRecord: activationRecord(
    "inferred_from_structural_readiness",
    "session_scoped_receiver_restart_ends_activation",
    "activation_revocable_by_receiver_retraction",
    activatedAtEpochMs,
  ),
  receiverHeldPrincipalRef: principalRef,
  receiverEvaluatedAtEpochMs,
  receiverMaximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-private-read-activation-d-p10",
    activationRecordVersion: "pond-private-read-activation-d-p10",
    assessmentKind: "deterministic_supplied_private_read_activation",
    activationState: "not_activated",
    reason: "receiver_activation_proof_incomplete",
    activationFreshnessDiagnosis: zeroAgeDiagnosis,
    effectiveReadScopePosture:
      "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
    sessionScopePosture: "session_scoped_receiver_restart_ends_activation",
    collaborativeReadScopePosture: "not_included_single_principal_reads_only",
    identityChainReadinessState:
      "structurally_ready_private_reads_still_refused",
    identityChainUnsatisfiedChecks: Object.freeze([] as const),
    satisfiedChecks: Object.freeze([
      "principal_ref_well_formed",
      "activation_bound_to_receiver_held_principal",
      "identity_chain_structurally_ready_and_current",
      "activation_session_scoped_fresh_and_restart_expiring",
      "activation_requires_no_grant_trusted_policy_attributed_and_stays_revocable",
      "activation_excludes_memory_lanes_and_multi_principal_scope",
    ] as const),
    unsatisfiedChecks: Object.freeze([
      "activation_basis_explicitly_receiver_owned_not_inferred_from_readiness",
    ] as const),
    activationEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondPrivateReadActivationAssessment,
}) satisfies PondStageDP10ActivationFixtureEntry;

export const stageDP10ActivationMatrix: readonly PondStageDP10ActivationFixtureEntry[] =
  Object.freeze([stageDP10ActivationComplete, stageDP10ActivationRefused]);

// The read targets the admitted arm reads: the five principal-structural
// classes of the identity chain. All six receiver-record labels are in the
// pinned table; the activation record itself is not among the read
// targets this arm asks for.
const admittedTargetRefs = Object.freeze([
  "receiver-record:pond-local-principal-binding-establishment-d-p5",
  "receiver-record:pond-local-authentication-mechanic-d-p8",
  "receiver-record:pond-local-principal-id-issuance-d-p9",
  "receiver-record:pond-erc8004-identity-mapping-d-p9",
  "receiver-record:pond-principal-identity-readiness-composition-d-p9",
] as const);

const readAdmissionRecord = (
  readBasis: PondPrivateReadAdmissionRecord["readBasis"],
  revocabilityPosture: PondPrivateReadAdmissionRecord["revocabilityPosture"],
  readTargetRefs: readonly string[],
) =>
  Object.freeze({
    contractVersion: "pond-private-read-admission-d-p10",
    kind: "pond-private-read-admission",
    principalRef,
    readClass: "principal_structural_record_read",
    readTargetRefs: Object.freeze([...readTargetRefs]),
    readBasis,
    activationBindingPosture: "read_admitted_only_within_session_scoped_activation",
    inspectionPosture: "receiver_upstream_assessors_recomputed_at_composition",
    readScopePosture: "single_principal_own_structural_records_only",
    truthPosture: "structural_presence_only_no_current_truth_claim",
    grantSufficiencyPosture: "read_requires_no_grant_receiver_trusted_policy_scope",
    laneExclusionPosture: "admission_excludes_memory_narrative_transcript_lanes",
    revocabilityPosture,
    authority: "none",
  }) satisfies PondPrivateReadAdmissionRecord;

// Admitted arm: the receiver explicitly requested its own structural
// records, and the read binds inside the completed activation.
export const stageDP10AdmissionAdmitted = Object.freeze({
  fixtureLabel: "receiver_requested_own_record_read_admitted",
  readAdmissionRecord: readAdmissionRecord(
    "receiver_requested_own_record_read",
    "read_revocable_by_activation_retraction",
    admittedTargetRefs,
  ),
  activationRecord: activationRecord(
    "receiver_explicit_activation_not_inferred",
    "session_scoped_receiver_restart_ends_activation",
    "activation_revocable_by_receiver_retraction",
    activatedAtEpochMs,
  ),
  receiverHeldPrincipalRef: principalRef,
  assessment: Object.freeze({
    contractVersion: "pond-private-read-admission-d-p10",
    admissionRecordVersion: "pond-private-read-admission-d-p10",
    assessmentKind: "deterministic_supplied_private_read_admission",
    readAdmissionState: "fixture_structural_structural_record_read_admitted",
    reason: "all_read_admission_checks_satisfied",
    admittedTargetRefs,
    admissionSessionScopePosture: "session_scoped_receiver_restart_ends_activation",
    effectiveReadScopePosture: "single_principal_own_structural_records_only",
    readTruthPosture: "structural_presence_only_no_current_truth_claim",
    satisfiedChecks: Object.freeze([
      "principal_ref_well_formed",
      "read_admission_bound_to_receiver_held_principal",
      "read_basis_explicitly_receiver_owned_not_inferred",
      "read_class_structural_records_only",
      "read_targets_within_activated_session_scope",
      "read_admission_excludes_memory_and_lane_content",
      "read_admission_requires_no_grant_and_stays_revocable",
    ] as const),
    unsatisfiedChecks: Object.freeze([] as const),
    readEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondPrivateReadAdmissionAssessment,
}) satisfies PondStageDP10AdmissionFixtureEntry;

// Refused arm: a lane-content read requested through an admission-shaped
// record — valid vocabulary, honestly carried, and exactly what admission
// exists to refuse.
export const stageDP10AdmissionRefused = Object.freeze({
  fixtureLabel: "lane_content_read_requested_refused",
  readAdmissionRecord: readAdmissionRecord(
    "lane_content_read_requested",
    "read_revocable_by_activation_retraction",
    admittedTargetRefs,
  ),
  activationRecord: activationRecord(
    "receiver_explicit_activation_not_inferred",
    "session_scoped_receiver_restart_ends_activation",
    "activation_revocable_by_receiver_retraction",
    activatedAtEpochMs,
  ),
  receiverHeldPrincipalRef: principalRef,
  assessment: Object.freeze({
    contractVersion: "pond-private-read-admission-d-p10",
    admissionRecordVersion: "pond-private-read-admission-d-p10",
    assessmentKind: "deterministic_supplied_private_read_admission",
    readAdmissionState: "not_admitted",
    reason: "receiver_read_admission_proof_incomplete",
    admittedTargetRefs: Object.freeze([] as const),
    admissionSessionScopePosture: "session_scoped_receiver_restart_ends_activation",
    effectiveReadScopePosture: "single_principal_own_structural_records_only",
    readTruthPosture: "structural_presence_only_no_current_truth_claim",
    satisfiedChecks: Object.freeze([
      "principal_ref_well_formed",
      "read_admission_bound_to_receiver_held_principal",
      "read_class_structural_records_only",
      "read_targets_within_activated_session_scope",
      "read_admission_excludes_memory_and_lane_content",
      "read_admission_requires_no_grant_and_stays_revocable",
    ] as const),
    unsatisfiedChecks: Object.freeze([
      "read_basis_explicitly_receiver_owned_not_inferred",
    ] as const),
    readEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondPrivateReadAdmissionAssessment,
}) satisfies PondStageDP10AdmissionFixtureEntry;

export const stageDP10AdmissionMatrix: readonly PondStageDP10AdmissionFixtureEntry[] =
  Object.freeze([stageDP10AdmissionAdmitted, stageDP10AdmissionRefused]);

// Inlined literal copies of the D-P5 ceremony record and the D-P8 verifier
// and proof records, plus the D-P9 issuance and mapping factories — the
// selftest deep-equals these against the actual D-P5/D-P8/D-P9 fixture
// exports.
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
    observed_at_epoch_ms: activatedAtEpochMs,
    freshness_basis: "source_observation_time_only",
    currentness_posture: "not_established_consumer_must_evaluate",
  }),
  secretFreeInventoryPosture: "response_digest_only_no_secret_material",
  memoryLaneExclusionPosture:
    "proof_excludes_memory_narrative_transcript_lanes",
  authorityPosture: "challenge_grants_no_authority_membership_or_capability",
  authority: "none",
}) satisfies PondLocalAuthenticationChallengeProofRecord;

const dp9IssuanceRecord = Object.freeze({
  contractVersion: "pond-local-principal-id-issuance-d-p9",
  kind: "pond-local-principal-id-issuance",
  principalRef,
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

const dp9MappingRecord = Object.freeze({
  contractVersion: "pond-erc8004-identity-mapping-d-p9",
  kind: "pond-erc8004-identity-mapping",
  principalRef,
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

const completeActivationRecord = activationRecord(
  "receiver_explicit_activation_not_inferred",
  "session_scoped_receiver_restart_ends_activation",
  "activation_revocable_by_receiver_retraction",
  activatedAtEpochMs,
);

// Complete arm: the whole endpoint — chain ready, explicit activation
// current, read admitted, targets re-inspected — honestly completed as a
// session-scoped, structural-records-only activation.
export const stageDP10CompositionComplete = Object.freeze({
  fixtureLabel: "structural_records_only_reads_activated",
  readActivationRecord: completeActivationRecord,
  readAdmissionRecord: readAdmissionRecord(
    "receiver_requested_own_record_read",
    "read_revocable_by_activation_retraction",
    admittedTargetRefs,
  ),
  receiverHeldPrincipalRef: principalRef,
  dp5CeremonyRecord,
  dp8VerifierRecord,
  dp8ProofRecord,
  dp9IssuanceRecord,
  dp9MappingRecord,
  receiverEvaluatedAtEpochMs,
  receiverMaximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-private-read-activation-composition-d-p10",
    assessmentKind: "deterministic_supplied_private_read_activation_composition",
    privateReadActivationState:
      "fixture_structural_private_reads_activated_structural_records_only",
    reason: "all_private_read_activation_checks_satisfied",
    mappedActivationState:
      "fixture_structural_session_scoped_private_read_activation",
    mappedActivationReason: "all_activation_checks_satisfied",
    mappedReadAdmissionState:
      "fixture_structural_structural_record_read_admitted",
    mappedReadAdmissionReason: "all_read_admission_checks_satisfied",
    mappedIdentityChainReadinessState:
      "structurally_ready_private_reads_still_refused",
    mappedIdentityChainUnsatisfiedChecks: Object.freeze([] as const),
    mappedActivationUnsatisfiedChecks: Object.freeze([] as const),
    mappedAdmissionUnsatisfiedChecks: Object.freeze([] as const),
    activationFreshnessDiagnosis: zeroAgeDiagnosis,
    effectiveReadScopePosture:
      "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
    readTruthPosture: "structural_presence_only_no_current_truth_claim",
    collaborativeReadScopePosture: "not_included_single_principal_reads_only",
    sessionScopePosture: "session_scoped_receiver_restart_ends_activation",
    satisfiedChecks: Object.freeze([
      "identity_chain_structurally_ready_dp5_dp8_dp9",
      "activation_ceremony_complete_dp10",
      "activation_session_current_within_declared_maximum_age_dp10",
      "read_admission_complete_and_bound_to_session_scoped_activation_dp10",
      "read_targets_independently_reinspected_structural_records_only_dp10",
    ] as const),
    unsatisfiedChecks: Object.freeze([] as const),
    activationEstablishesGrant: false,
    readEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondPrivateReadCompositionAssessment,
}) satisfies PondStageDP10CompositionFixtureEntry;

// Stale arm: identical inputs with an activation event one millisecond
// past the declared maximum age — the chain is still fresh, the activation
// is not, and law 9 holds: the session-scoped activation expired.
export const stageDP10CompositionStale = Object.freeze({
  fixtureLabel: "stale_session_scoped_activation_expired",
  readActivationRecord: activationRecord(
    "receiver_explicit_activation_not_inferred",
    "session_scoped_receiver_restart_ends_activation",
    "activation_revocable_by_receiver_retraction",
    staleActivatedAtEpochMs,
  ),
  readAdmissionRecord: readAdmissionRecord(
    "receiver_requested_own_record_read",
    "read_revocable_by_activation_retraction",
    admittedTargetRefs,
  ),
  receiverHeldPrincipalRef: principalRef,
  dp5CeremonyRecord,
  dp8VerifierRecord,
  dp8ProofRecord,
  dp9IssuanceRecord,
  dp9MappingRecord,
  receiverEvaluatedAtEpochMs,
  receiverMaximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-private-read-activation-composition-d-p10",
    assessmentKind: "deterministic_supplied_private_read_activation_composition",
    privateReadActivationState: "not_activated",
    reason: "activation_not_session_current",
    mappedActivationState: "not_activated",
    mappedActivationReason: "activation_not_session_current",
    mappedReadAdmissionState:
      "fixture_structural_structural_record_read_admitted",
    mappedReadAdmissionReason: "all_read_admission_checks_satisfied",
    mappedIdentityChainReadinessState:
      "structurally_ready_private_reads_still_refused",
    mappedIdentityChainUnsatisfiedChecks: Object.freeze([] as const),
    mappedActivationUnsatisfiedChecks: allActivationChecks,
    mappedAdmissionUnsatisfiedChecks: Object.freeze([] as const),
    activationFreshnessDiagnosis: staleDiagnosis,
    effectiveReadScopePosture:
      "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
    readTruthPosture: "structural_presence_only_no_current_truth_claim",
    collaborativeReadScopePosture: "not_included_single_principal_reads_only",
    sessionScopePosture: "session_scoped_receiver_restart_ends_activation",
    satisfiedChecks: Object.freeze([
      "identity_chain_structurally_ready_dp5_dp8_dp9",
    ] as const),
    unsatisfiedChecks: Object.freeze([
      "activation_ceremony_complete_dp10",
      "activation_session_current_within_declared_maximum_age_dp10",
      "read_admission_complete_and_bound_to_session_scoped_activation_dp10",
      "read_targets_independently_reinspected_structural_records_only_dp10",
    ] as const),
    activationEstablishesGrant: false,
    readEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondPrivateReadCompositionAssessment,
}) satisfies PondStageDP10CompositionFixtureEntry;

// Admission-incomplete arm: the chain and the complete activation stand,
// but the read claimed from the activation instead of the receiver's
// request is refused — and with it, the endpoint composition.
export const stageDP10CompositionAdmissionIncomplete = Object.freeze({
  fixtureLabel: "activation_inferred_read_admission_refused",
  readActivationRecord: completeActivationRecord,
  readAdmissionRecord: readAdmissionRecord(
    "inferred_from_activation",
    "read_revocable_by_activation_retraction",
    admittedTargetRefs,
  ),
  receiverHeldPrincipalRef: principalRef,
  dp5CeremonyRecord,
  dp8VerifierRecord,
  dp8ProofRecord,
  dp9IssuanceRecord,
  dp9MappingRecord,
  receiverEvaluatedAtEpochMs,
  receiverMaximumAgeMs,
  assessment: Object.freeze({
    contractVersion: "pond-private-read-activation-composition-d-p10",
    assessmentKind: "deterministic_supplied_private_read_activation_composition",
    privateReadActivationState: "not_activated",
    reason: "receiver_private_read_activation_proof_incomplete",
    mappedActivationState:
      "fixture_structural_session_scoped_private_read_activation",
    mappedActivationReason: "all_activation_checks_satisfied",
    mappedReadAdmissionState: "not_admitted",
    mappedReadAdmissionReason: "receiver_read_admission_proof_incomplete",
    mappedIdentityChainReadinessState:
      "structurally_ready_private_reads_still_refused",
    mappedIdentityChainUnsatisfiedChecks: Object.freeze([] as const),
    mappedActivationUnsatisfiedChecks: Object.freeze([] as const),
    mappedAdmissionUnsatisfiedChecks: Object.freeze([
      "read_basis_explicitly_receiver_owned_not_inferred",
    ] as const),
    activationFreshnessDiagnosis: zeroAgeDiagnosis,
    effectiveReadScopePosture:
      "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
    readTruthPosture: "structural_presence_only_no_current_truth_claim",
    collaborativeReadScopePosture: "not_included_single_principal_reads_only",
    sessionScopePosture: "session_scoped_receiver_restart_ends_activation",
    satisfiedChecks: Object.freeze([
      "identity_chain_structurally_ready_dp5_dp8_dp9",
      "activation_ceremony_complete_dp10",
      "activation_session_current_within_declared_maximum_age_dp10",
      "read_targets_independently_reinspected_structural_records_only_dp10",
    ] as const),
    unsatisfiedChecks: Object.freeze([
      "read_admission_complete_and_bound_to_session_scoped_activation_dp10",
    ] as const),
    activationEstablishesGrant: false,
    readEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondPrivateReadCompositionAssessment,
}) satisfies PondStageDP10CompositionFixtureEntry;

export const stageDP10CompositionMatrix: readonly PondStageDP10CompositionFixtureEntry[] =
  Object.freeze([
    stageDP10CompositionComplete,
    stageDP10CompositionStale,
    stageDP10CompositionAdmissionIncomplete,
  ]);

// Compile-time fixture invariants: the complete activation is
// session-scoped and never a grant; the admission's read never becomes
// authority or truth; the composition completes only over structural
// records and never carries the frozen `privateReadsActivated` name.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP10FixtureInvariant_CompleteActivationSessionScopedNonGrant =
  Assert<
    Equal<
      [
        typeof stageDP10ActivationComplete["assessment"]["activationState"],
        typeof stageDP10ActivationComplete["assessment"]["activationEstablishesGrant"],
        typeof stageDP10ActivationComplete["assessment"]["currentTruthAdmitted"],
        typeof stageDP10ActivationComplete["assessment"]["authority"],
      ],
      [
        "fixture_structural_session_scoped_private_read_activation",
        false,
        false,
        "none",
      ]
    >
  >;
export type PondStageDP10FixtureInvariant_RefusedActivationNotActivated =
  Assert<
    Equal<
      typeof stageDP10ActivationRefused["assessment"]["activationState"],
      "not_activated"
    >
  >;
export type PondStageDP10FixtureInvariant_IncompleteAdmissionNotAdmitted =
  Assert<
    Equal<
      [
        typeof stageDP10AdmissionRefused["assessment"]["readAdmissionState"],
        typeof stageDP10AdmissionRefused["assessment"]["readEstablishesGrant"],
      ],
      ["not_admitted", false]
    >
  >;
export type PondStageDP10FixtureInvariant_CompleteCompositionStructuralRecordsOnly =
  Assert<
    Equal<
      [
        typeof stageDP10CompositionComplete["assessment"]["privateReadActivationState"],
        typeof stageDP10CompositionComplete["assessment"]["readTruthPosture"],
        typeof stageDP10CompositionComplete["assessment"]["readEstablishesGrant"],
      ],
      [
        "fixture_structural_private_reads_activated_structural_records_only",
        "structural_presence_only_no_current_truth_claim",
        false,
      ]
    >
  >;
export type PondStageDP10FixtureInvariant_StaleCompositionNotActivated = Assert<
  Equal<
    [
      typeof stageDP10CompositionStale["assessment"]["privateReadActivationState"],
      typeof stageDP10CompositionStale["assessment"]["reason"],
    ],
    ["not_activated", "activation_not_session_current"]
  >
>;