// Stage D-P15 fixture: the live-session matrix — the receiver-performed
// local authentication session establishment (live established / stale
// authentication event / digest mismatch / claimed-comparison disagreement
// / five inference bases / retraction / carried-over scope / expired at
// reassessment / no secret ever set / stale frozen activation), the
// single-principal live read gate (activated / broken establishment /
// broken frozen activation / collaborative widening refused), and the
// pinned assessments. Zero value imports: every import is type-only, so
// the selftest imports this file directly under node type-stripping. The
// legs inline literal copies of the frozen D-P5 ceremony, D-P6
// observation, D-P8 verifier and proof records, D-P9 issuance and mapping
// records, and the D-P10 activation record — the selftest deep-equals
// those copies against the actual frozen fixture exports. The pinned
// receiver SECRET lives only in the sanctioned selftest, exactly the
// D-P8/D-P14 precedent — the session the fixture pins is a structure of
// digests, never a secret. The selftest recomputes every pinned
// assessment through the real contracts and their frozen legs.

import type {
  PondLiveSessionEstablishmentRecord,
  PondLiveSessionEstablishmentAssessment,
  PondLiveSessionRetractionRecord,
  PondLiveSessionEstablishmentBasis,
} from "../contracts/pond-live-session-establishment.js";
import type {
  PondLiveSessionReadGateRecord,
  PondLiveSessionReadGateAssessment,
  PondLiveSessionReadGateBasis,
} from "../contracts/pond-live-session-read-gate.js";
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

export interface PondStageDP15LiveSessionFixtureEntry {
  readonly fixtureLabel: string;
  readonly receiverHeldPrincipalRef: string;
  readonly establishmentRecord: PondLiveSessionEstablishmentRecord;
  readonly dp5CeremonyRecord: PondLocalPrincipalBindingEstablishmentRecord;
  readonly dp6ObservationRecord: PondLocalPrincipalAuthenticationObservationRecord;
  readonly dp8VerifierRecord: PondLocalAuthenticationVerifierRecord | null;
  readonly dp8ProofRecord: PondLocalAuthenticationChallengeProofRecord | null;
  readonly dp9IssuanceRecord: PondLocalPrincipalIdIssuanceRecord;
  readonly dp9MappingRecord: PondErc8004IdentityMappingRecord;
  readonly dp10ActivationRecord: PondPrivateReadActivationRecord | null;
  readonly receiverRetractionRecord: PondLiveSessionRetractionRecord | null;
  readonly receiverEvaluatedAtEpochMs: number;
  readonly receiverMaximumAgeMs: number;
  readonly assessment: PondLiveSessionEstablishmentAssessment;
}

export interface PondStageDP15LiveReadGateFixtureEntry {
  readonly fixtureLabel: string;
  readonly receiverHeldPrincipalRef: string;
  readonly readGateRecord: PondLiveSessionReadGateRecord;
  readonly establishmentRecord: PondLiveSessionEstablishmentRecord;
  readonly dp5CeremonyRecord: PondLocalPrincipalBindingEstablishmentRecord;
  readonly dp6ObservationRecord: PondLocalPrincipalAuthenticationObservationRecord;
  readonly dp8VerifierRecord: PondLocalAuthenticationVerifierRecord;
  readonly dp8ProofRecord: PondLocalAuthenticationChallengeProofRecord;
  readonly dp9IssuanceRecord: PondLocalPrincipalIdIssuanceRecord;
  readonly dp9MappingRecord: PondErc8004IdentityMappingRecord;
  readonly dp10ActivationRecord: PondPrivateReadActivationRecord | null;
  readonly receiverRetractionRecord: PondLiveSessionRetractionRecord | null;
  readonly receiverEvaluatedAtEpochMs: number;
  readonly receiverMaximumAgeMs: number;
  readonly assessment: PondLiveSessionReadGateAssessment;
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

// The establishment event lands inside the declared maximum age of
// itself; the stale event instant is one millisecond past the same
// boundary, the expired REassessment instant is one millisecond past the
// establishment-to-evaluation boundary (the inclusive-fresh proof lives
// in the selftest over pure arithmetic — no waiting).
const evaluatedAtEpochMs = 1_800_000_060_000;
const receiverMaximumAgeMs = 60_000;
const staleEpochMs = 1_799_999_999_999;
const expiredEvaluationEpochMs = 1_800_000_120_001;

// The receiver's D-P8 digest binding, carried from the D-P8/P10/P14
// fixtures (digests only — the pinned receiver secret lives in its own
// selftest).
const receiverSaltHex = "0a1b2c3d4e5f60718293a4b5c6d7e8f9";
const receiverVerifierDigestHex =
  "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f";
// The mismatch digest: the same length, honestly different.
const mismatchDigestHex = "beefcafedeadbeef".repeat(4);

const healthyObservedAtEpochMs = 1_800_000_030_000;

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

const receiverDp6ObservationRecord = (observedAt: number) =>
  Object.freeze({
    contractVersion: "pond-local-principal-authentication-observation-d-p6",
    kind: "pond-local-principal-authentication-observation",
    principalRef: receiverRef,
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

const healthyDp6ObservationRecord = receiverDp6ObservationRecord(
  healthyObservedAtEpochMs,
);

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

const receiverDp8ProofRecord = (
  responseDigestHex: string,
  comparison: PondLocalAuthenticationChallengeProofRecord["comparison"],
  observedAt: number,
) =>
  Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    kind: "pond-local-authentication-challenge-proof",
    principalRef: receiverRef,
    mechanicClass: "local_knowledge_factor_challenge_response",
    challengeDigestBinding: Object.freeze({
      algorithm: "sha256",
      saltHex: receiverSaltHex,
      verifierDigestHex: receiverVerifierDigestHex,
      responseDigestHex,
    }),
    comparison,
    comparisonMetadata: Object.freeze({
      observed_at_epoch_ms: observedAt,
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

const healthyDp8ProofRecord = receiverDp8ProofRecord(
  receiverVerifierDigestHex,
  "exact_digest_match",
  evaluatedAtEpochMs,
);

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

const receiverDp10ActivationRecord = (activatedAt: number) =>
  Object.freeze({
    contractVersion: "pond-private-read-activation-d-p10",
    kind: "pond-private-read-activation",
    principalRef: receiverRef,
    activationBasis: "receiver_explicit_activation_not_inferred",
    activatedCapability: "receiver_private_read_of_own_structural_records",
    activationMetadata: Object.freeze({
      activated_at_epoch_ms: activatedAt,
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

const healthyDp10ActivationRecord = receiverDp10ActivationRecord(
  evaluatedAtEpochMs,
);

// --- D-P15 establishment, retraction, and read-gate record factories ---

const establishmentRecordOf = (
  basis: PondLiveSessionEstablishmentBasis,
  scopePosture: PondLiveSessionEstablishmentRecord["establishmentScopePosture"] = "live_session_scoped_receiver_shell_restart_ends_establishment",
) =>
  Object.freeze({
    contractVersion: "pond-live-session-establishment-d-p15",
    kind: "pond-live-session-establishment",
    principalRef: receiverRef,
    establishmentBasis: basis,
    establishedCapability: "receiver_live_session_scoped_shell_authentication",
    establishmentMetadata: Object.freeze({
      established_at_epoch_ms: evaluatedAtEpochMs,
      freshness_basis: "establishment_event_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    establishmentScopePosture: scopePosture,
    establishmentRevocabilityPosture:
      "establishment_revocable_by_receiver_retraction",
    establishmentAttributionPosture:
      "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
    agentScopePosture: "no_agent_session_no_agent_secret_no_agent_admission",
    sharedSurfacePosture:
      "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
    collaborativeWideningPosture:
      "not_included_collaborative_reads_require_their_own_live_session_lane",
    activatedReadScopePosture:
      "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
    memoryLaneExclusionPosture:
      "establishment_excludes_memory_narrative_transcript_lanes",
    authorityPosture:
      "establishment_grants_no_authority_membership_or_capability",
    authority: "none",
  }) satisfies PondLiveSessionEstablishmentRecord;

const healthyEstablishmentRecord = establishmentRecordOf(
  "receiver_performed_local_authentication_session_establishment_not_inferred",
);

const retractionRecordOf = (retractedAt: number) =>
  Object.freeze({
    contractVersion: "pond-live-session-retraction-d-p15",
    kind: "pond-live-session-retraction",
    retracted_at_epoch_ms: retractedAt,
    retractionPosture: "receiver_recorded_live_session_retraction_no_grant",
    authority: "none",
  }) satisfies PondLiveSessionRetractionRecord;

const readGateRecordOf = (
  basis: PondLiveSessionReadGateBasis,
  requestedReadScope: PondLiveSessionReadGateRecord["requestedReadScope"],
  collaborativeScopePosture: PondLiveSessionReadGateRecord["collaborativeScopePosture"],
) =>
  Object.freeze({
    contractVersion: "pond-live-session-read-gate-d-p15",
    kind: "pond-live-session-read-gate",
    principalRef: receiverRef,
    readGateBasis: basis,
    requestedReadScope,
    readGateMetadata: Object.freeze({
      opened_at_epoch_ms: evaluatedAtEpochMs,
      freshness_basis: "gate_open_event_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    readGateReadUsePosture:
      "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
    collaborativeScopePosture,
    agentScopePosture: "no_agent_session_no_agent_secret_no_agent_admission",
    memoryLaneExclusionPosture:
      "read_gate_excludes_memory_narrative_transcript_lanes",
    authorityPosture:
      "read_gate_grants_no_authority_membership_or_capability",
    authority: "none",
  }) satisfies PondLiveSessionReadGateRecord;

const healthyReadGateRecord = readGateRecordOf(
  "receiver_session_scoped_structural_read_live_use_not_inferred",
  "single_principal_own_structural_records",
  "not_included_collaborative_requires_their_own_live_session_lane",
);

// --- Session arms ---

const healthyLegs = {
  dp5CeremonyRecord: receiverDp5CeremonyRecord,
  dp6ObservationRecord: healthyDp6ObservationRecord,
  dp8VerifierRecord: receiverDp8VerifierRecord,
  dp8ProofRecord: healthyDp8ProofRecord,
  dp9IssuanceRecord: receiverDp9IssuanceRecord,
  dp9MappingRecord: receiverDp9MappingRecord,
  dp10ActivationRecord: healthyDp10ActivationRecord,
};

const baseEntry = (
  fixtureLabel: string,
  records: Omit<
    PondStageDP15LiveSessionFixtureEntry,
    "fixtureLabel" | "assessment" | "receiverHeldPrincipalRef" | "receiverEvaluatedAtEpochMs" | "receiverMaximumAgeMs"
  >,
) => ({
  fixtureLabel,
  receiverHeldPrincipalRef: receiverRef,
  ...records,
  receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
  receiverMaximumAgeMs: receiverMaximumAgeMs,
});

// Arm 1 — the live session: over the performed shell authentication event
// and the verified knowledge factor, re-inspected through the frozen
// D-P10 gate, the receiver establishes the live, session-scoped,
// restart-expiring, retractable session.
export const stageDP15SessionEntryLiveSessionEstablished = {
  ...baseEntry("live_session_established", {
    establishmentRecord: healthyEstablishmentRecord,
    ...healthyLegs,
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "live_session_scoped_authentication_established",
    "reason": "all_session_establishment_checks_satisfied",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "fixture_observed_local_authentication",
    "mappedDp6Reason": "all_observation_checks_satisfied",
    "mappedDp6FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 30000
    },
    "mappedDp8MechanicState": "receiver_verified_knowledge_factor",
    "mappedDp8Reason": "all_challenge_checks_satisfied",
    "mappedDp8Comparison": "exact_digest_match",
    "mappedDp8RecomputedComparison": "exact_digest_match",
    "mappedDp8FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
    "mappedDp10Reason": "all_activation_checks_satisfied",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "establishment_basis_receiver_performed_not_inferred",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "unsatisfiedChecks": [],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

// Arm 2 — the authentication event stale: the D-P6 re-run diagnoses the
// staleness while the frozen D-P10 echo stays active underneath (the
// frozen gate predates D-P6 — the honest mismatch the D-P14 precedent
// pinned).
export const stageDP15SessionEntryStaleAuthenticationEvent = {
  ...baseEntry("stale_authentication_event", {
    establishmentRecord: healthyEstablishmentRecord,
    ...healthyLegs,
    dp6ObservationRecord: receiverDp6ObservationRecord(staleEpochMs),
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "authentication_event_not_observed_refused_or_unfresh",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "not_observed",
    "mappedDp6Reason": "receiver_authentication_proof_incomplete",
    "mappedDp6FreshnessDiagnosis": {
      "state": "stale",
      "reason": "declared_maximum_age_expired",
      "observationAgeMs": 60001
    },
    "mappedDp8MechanicState": "receiver_verified_knowledge_factor",
    "mappedDp8Reason": "all_challenge_checks_satisfied",
    "mappedDp8Comparison": "exact_digest_match",
    "mappedDp8RecomputedComparison": "exact_digest_match",
    "mappedDp8FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
    "mappedDp10Reason": "all_activation_checks_satisfied",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "establishment_basis_receiver_performed_not_inferred",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

// Arm 3 — the knowledge factor mismatch: an honestly-claimed mismatch is
// a valid record whose verification still fails closed (the frozen D-P8
// recompute law); the frozen D-P10 echo carries the chain refusal.
export const stageDP15SessionEntryVerifierProofDigestMismatch = {
  ...baseEntry("verifier_proof_digest_mismatch", {
    establishmentRecord: healthyEstablishmentRecord,
    ...healthyLegs,
    dp8ProofRecord: receiverDp8ProofRecord(
      mismatchDigestHex,
      "digest_mismatch",
      evaluatedAtEpochMs,
    ),
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "knowledge_factor_not_verified_or_unfresh",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "fixture_observed_local_authentication",
    "mappedDp6Reason": "all_observation_checks_satisfied",
    "mappedDp6FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 30000
    },
    "mappedDp8MechanicState": "not_verified",
    "mappedDp8Reason": "receiver_challenge_proof_incomplete",
    "mappedDp8Comparison": "digest_mismatch",
    "mappedDp8RecomputedComparison": "digest_mismatch",
    "mappedDp8FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedDp10ActivationState": "not_activated",
    "mappedDp10Reason": "identity_chain_not_structurally_ready",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "establishment_basis_receiver_performed_not_inferred",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

// Arm 4 — the claimed comparison disagrees with the recomputation: the
// digests match but the claim contradicts them — a self-asserted
// comparison is not proof.
export const stageDP15SessionEntryClaimedComparisonDisagreement = {
  ...baseEntry("claimed_comparison_disagrees_with_recompute", {
    establishmentRecord: healthyEstablishmentRecord,
    ...healthyLegs,
    dp8ProofRecord: receiverDp8ProofRecord(
      receiverVerifierDigestHex,
      "digest_mismatch",
      evaluatedAtEpochMs,
    ),
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "knowledge_factor_not_verified_or_unfresh",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "fixture_observed_local_authentication",
    "mappedDp6Reason": "all_observation_checks_satisfied",
    "mappedDp6FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 30000
    },
    "mappedDp8MechanicState": "not_verified",
    "mappedDp8Reason": "receiver_challenge_proof_incomplete",
    "mappedDp8Comparison": "digest_mismatch",
    "mappedDp8RecomputedComparison": "exact_digest_match",
    "mappedDp8FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedDp10ActivationState": "not_activated",
    "mappedDp10Reason": "identity_chain_not_structurally_ready",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "establishment_basis_receiver_performed_not_inferred",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

// Arms 5-9 — the five refused inference bases: every leg green, the
// session current, the scope right — and the basis check alone
// unsatisfies. Completion evidence never answers whether to establish
// (evidence-activation L49-55).
export const stageDP15SessionEntryInferredFromSessionPresence = {
  ...baseEntry("inferred_from_session_presence", {
    establishmentRecord: establishmentRecordOf(
      "inferred_from_session_presence",
    ),
    ...healthyLegs,
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "receiver_session_establishment_proof_incomplete",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "fixture_observed_local_authentication",
    "mappedDp6Reason": "all_observation_checks_satisfied",
    "mappedDp6FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 30000
    },
    "mappedDp8MechanicState": "receiver_verified_knowledge_factor",
    "mappedDp8Reason": "all_challenge_checks_satisfied",
    "mappedDp8Comparison": "exact_digest_match",
    "mappedDp8RecomputedComparison": "exact_digest_match",
    "mappedDp8FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
    "mappedDp10Reason": "all_activation_checks_satisfied",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "unsatisfiedChecks": [
      "establishment_basis_receiver_performed_not_inferred"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

export const stageDP15SessionEntryInferredFromWalletConnection = {
  ...baseEntry("inferred_from_wallet_connection", {
    establishmentRecord: establishmentRecordOf(
      "inferred_from_wallet_connection",
    ),
    ...healthyLegs,
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "receiver_session_establishment_proof_incomplete",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "fixture_observed_local_authentication",
    "mappedDp6Reason": "all_observation_checks_satisfied",
    "mappedDp6FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 30000
    },
    "mappedDp8MechanicState": "receiver_verified_knowledge_factor",
    "mappedDp8Reason": "all_challenge_checks_satisfied",
    "mappedDp8Comparison": "exact_digest_match",
    "mappedDp8RecomputedComparison": "exact_digest_match",
    "mappedDp8FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
    "mappedDp10Reason": "all_activation_checks_satisfied",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "unsatisfiedChecks": [
      "establishment_basis_receiver_performed_not_inferred"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

export const stageDP15SessionEntryAssertedByShellProducer = {
  ...baseEntry("asserted_by_shell_producer", {
    establishmentRecord: establishmentRecordOf("asserted_by_shell_producer"),
    ...healthyLegs,
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "receiver_session_establishment_proof_incomplete",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "fixture_observed_local_authentication",
    "mappedDp6Reason": "all_observation_checks_satisfied",
    "mappedDp6FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 30000
    },
    "mappedDp8MechanicState": "receiver_verified_knowledge_factor",
    "mappedDp8Reason": "all_challenge_checks_satisfied",
    "mappedDp8Comparison": "exact_digest_match",
    "mappedDp8RecomputedComparison": "exact_digest_match",
    "mappedDp8FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
    "mappedDp10Reason": "all_activation_checks_satisfied",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "unsatisfiedChecks": [
      "establishment_basis_receiver_performed_not_inferred"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

export const stageDP15SessionEntryInferredFromStructuralReadiness = {
  ...baseEntry("inferred_from_structural_readiness", {
    establishmentRecord: establishmentRecordOf(
      "inferred_from_structural_readiness",
    ),
    ...healthyLegs,
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "receiver_session_establishment_proof_incomplete",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "fixture_observed_local_authentication",
    "mappedDp6Reason": "all_observation_checks_satisfied",
    "mappedDp6FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 30000
    },
    "mappedDp8MechanicState": "receiver_verified_knowledge_factor",
    "mappedDp8Reason": "all_challenge_checks_satisfied",
    "mappedDp8Comparison": "exact_digest_match",
    "mappedDp8RecomputedComparison": "exact_digest_match",
    "mappedDp8FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
    "mappedDp10Reason": "all_activation_checks_satisfied",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "unsatisfiedChecks": [
      "establishment_basis_receiver_performed_not_inferred"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

export const stageDP15SessionEntryInferredFromObservedAgentPresence = {
  ...baseEntry("inferred_from_observed_agent_presence", {
    establishmentRecord: establishmentRecordOf(
      "inferred_from_observed_agent_presence",
    ),
    ...healthyLegs,
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "receiver_session_establishment_proof_incomplete",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "fixture_observed_local_authentication",
    "mappedDp6Reason": "all_observation_checks_satisfied",
    "mappedDp6FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 30000
    },
    "mappedDp8MechanicState": "receiver_verified_knowledge_factor",
    "mappedDp8Reason": "all_challenge_checks_satisfied",
    "mappedDp8Comparison": "exact_digest_match",
    "mappedDp8RecomputedComparison": "exact_digest_match",
    "mappedDp8FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
    "mappedDp10Reason": "all_activation_checks_satisfied",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "unsatisfiedChecks": [
      "establishment_basis_receiver_performed_not_inferred"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

// Arm 10 — retraction: a present fact, checked before the legs — a
// retracted session is refused regardless of how fresh the legs once
// were.
export const stageDP15SessionEntryReceiverRetractionRefused = {
  ...baseEntry("receiver_retraction_refused", {
    establishmentRecord: healthyEstablishmentRecord,
    ...healthyLegs,
    receiverRetractionRecord: retractionRecordOf(expiredEvaluationEpochMs),
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "receiver_retraction_on_record",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "fixture_observed_local_authentication",
    "mappedDp6Reason": "all_observation_checks_satisfied",
    "mappedDp6FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 30000
    },
    "mappedDp8MechanicState": "receiver_verified_knowledge_factor",
    "mappedDp8Reason": "all_challenge_checks_satisfied",
    "mappedDp8Comparison": "exact_digest_match",
    "mappedDp8RecomputedComparison": "exact_digest_match",
    "mappedDp8FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
    "mappedDp10Reason": "all_activation_checks_satisfied",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "establishment_basis_receiver_performed_not_inferred",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

// Arm 11 — carried-over scope: process-scoped persistence that does not
// end at restart refuses at its own cause; a session never silently
// survives restart.
export const stageDP15SessionEntryCarriedOverScopeRefused = {
  ...baseEntry("carried_over_scope_refused", {
    establishmentRecord: establishmentRecordOf(
      "receiver_performed_local_authentication_session_establishment_not_inferred",
      "shell_process_scope_not_restart_ending_refused",
    ),
    ...healthyLegs,
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "session_scope_posture_not_restart_ending_or_not_agent_free",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "shell_process_scope_not_restart_ending_refused",
    "mappedDp6ObservationState": "fixture_observed_local_authentication",
    "mappedDp6Reason": "all_observation_checks_satisfied",
    "mappedDp6FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 30000
    },
    "mappedDp8MechanicState": "receiver_verified_knowledge_factor",
    "mappedDp8Reason": "all_challenge_checks_satisfied",
    "mappedDp8Comparison": "exact_digest_match",
    "mappedDp8RecomputedComparison": "exact_digest_match",
    "mappedDp8FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
    "mappedDp10Reason": "all_activation_checks_satisfied",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "establishment_basis_receiver_performed_not_inferred",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

// Arm 12 — expired at reassessment: the legs were once fresh and the
// establishment was once live, but the evaluation time is past the
// establishment event's maximum age — the session refuses first, and the
// leg echoes stay honest about their own staleness.
export const stageDP15SessionEntryNotFreshAtReassessment = {
  ...baseEntry("session_not_fresh_at_reassessment", {
    establishmentRecord: healthyEstablishmentRecord,
    ...healthyLegs,
    receiverRetractionRecord: null,
  }),
  receiverEvaluatedAtEpochMs: expiredEvaluationEpochMs,
  receiverMaximumAgeMs: receiverMaximumAgeMs,
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "session_establishment_not_session_current",
    "establishmentFreshnessDiagnosis": {
      "state": "stale",
      "reason": "declared_maximum_age_expired",
      "observationAgeMs": 60001
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "not_observed",
    "mappedDp6Reason": "receiver_authentication_proof_incomplete",
    "mappedDp6FreshnessDiagnosis": {
      "state": "stale",
      "reason": "declared_maximum_age_expired",
      "observationAgeMs": 90001
    },
    "mappedDp8MechanicState": "not_verified",
    "mappedDp8Reason": "receiver_challenge_proof_incomplete",
    "mappedDp8Comparison": "exact_digest_match",
    "mappedDp8RecomputedComparison": "exact_digest_match",
    "mappedDp8FreshnessDiagnosis": {
      "state": "stale",
      "reason": "declared_maximum_age_expired",
      "observationAgeMs": 60001
    },
    "mappedDp10ActivationState": "not_activated",
    "mappedDp10Reason": "identity_chain_not_structurally_ready",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "establishment_basis_receiver_performed_not_inferred",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

// Arm 13 — no secret ever set: the verifier and proof legs are absent.
// No secret, no challenge round, no session.
export const stageDP15SessionEntryNoSecretEverSet = {
  ...baseEntry("no_secret_ever_set", {
    establishmentRecord: healthyEstablishmentRecord,
    ...healthyLegs,
    dp8VerifierRecord: null,
    dp8ProofRecord: null,
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "knowledge_factor_not_verified_or_unfresh",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "fixture_observed_local_authentication",
    "mappedDp6Reason": "all_observation_checks_satisfied",
    "mappedDp6FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 30000
    },
    "mappedDp8MechanicState": "not_verified",
    "mappedDp8Reason": "verifier_record_invalid",
    "mappedDp8Comparison": "not_compared",
    "mappedDp8RecomputedComparison": "not_compared",
    "mappedDp8FreshnessDiagnosis": {
      "state": "unknown",
      "reason": "observation_metadata_missing_or_invalid",
      "observationAgeMs": null
    },
    "mappedDp10ActivationState": "not_activated",
    "mappedDp10Reason": "identity_chain_not_structurally_ready",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "establishment_basis_receiver_performed_not_inferred",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

// Arm 14 — the stale frozen activation: the establishment is fresh and
// the legs are fresh, but the frozen D-P10 activation is one
// millisecond past ITS own maximum age at this evaluation — its gate
// refuses on its own diagnosis, and the establishment refuses at the
// mapped cause.
export const stageDP15SessionEntryStaleFrozenActivation = {
  ...baseEntry("stale_frozen_activation_refused", {
    establishmentRecord: healthyEstablishmentRecord,
    ...healthyLegs,
    dp10ActivationRecord: receiverDp10ActivationRecord(staleEpochMs),
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-establishment-d-p15",
    "establishmentRecordVersion": "pond-live-session-establishment-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_establishment",
    "sessionEstablishmentState": "not_established",
    "reason": "frozen_activation_not_structurally_ready_or_not_session_current",
    "establishmentFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
    "mappedDp6ObservationState": "fixture_observed_local_authentication",
    "mappedDp6Reason": "all_observation_checks_satisfied",
    "mappedDp6FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 30000
    },
    "mappedDp8MechanicState": "receiver_verified_knowledge_factor",
    "mappedDp8Reason": "all_challenge_checks_satisfied",
    "mappedDp8Comparison": "exact_digest_match",
    "mappedDp8RecomputedComparison": "exact_digest_match",
    "mappedDp8FreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedDp10ActivationState": "not_activated",
    "mappedDp10Reason": "activation_not_session_current",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "establishment_record_well_formed",
      "establishment_bound_to_receiver_held_principal",
      "establishment_basis_receiver_performed_not_inferred",
      "shell_authentication_event_observed_by_receiver_fresh",
      "knowledge_factor_verified_fresh_and_recompute_agreed",
      "frozen_private_read_activation_reinspected_structurally_active_and_session_current",
      "establishment_restart_ending_revocable_and_shared_frame_never_agent_reaching",
      "establishment_excludes_memory_lanes_and_collaborative_widening"
    ],
    "sessionEstablishesGrant": false,
    "sessionEstablishesMembershipOrAdmission": false,
    "sessionGrantsAgentAccess": false,
    "sessionEstablishesCurrentTruth": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveSessionFixtureEntry;

export const stageDP15LiveSessionMatrix = deepFreeze([
  stageDP15SessionEntryLiveSessionEstablished,
  stageDP15SessionEntryStaleAuthenticationEvent,
  stageDP15SessionEntryVerifierProofDigestMismatch,
  stageDP15SessionEntryClaimedComparisonDisagreement,
  stageDP15SessionEntryInferredFromSessionPresence,
  stageDP15SessionEntryInferredFromWalletConnection,
  stageDP15SessionEntryAssertedByShellProducer,
  stageDP15SessionEntryInferredFromStructuralReadiness,
  stageDP15SessionEntryInferredFromObservedAgentPresence,
  stageDP15SessionEntryReceiverRetractionRefused,
  stageDP15SessionEntryCarriedOverScopeRefused,
  stageDP15SessionEntryNotFreshAtReassessment,
  stageDP15SessionEntryNoSecretEverSet,
  stageDP15SessionEntryStaleFrozenActivation,
]);

// --- Read-gate arms ---

const healthyReadGateLegs = {
  dp5CeremonyRecord: receiverDp5CeremonyRecord,
  dp6ObservationRecord: healthyDp6ObservationRecord,
  dp8VerifierRecord: receiverDp8VerifierRecord,
  dp8ProofRecord: healthyDp8ProofRecord,
  dp9IssuanceRecord: receiverDp9IssuanceRecord,
  dp9MappingRecord: receiverDp9MappingRecord,
};

const baseReadGateEntry = (
  fixtureLabel: string,
  records: Omit<
    PondStageDP15LiveReadGateFixtureEntry,
    "fixtureLabel" | "assessment" | "receiverHeldPrincipalRef" | "receiverEvaluatedAtEpochMs" | "receiverMaximumAgeMs"
  >,
) => ({
  fixtureLabel,
  receiverHeldPrincipalRef: receiverRef,
  ...records,
  receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
  receiverMaximumAgeMs: receiverMaximumAgeMs,
});

// Gate arm 1 — the live read gate: the established session re-verified,
// the frozen activation independently re-inspected, the live use of the
// single-principal structural read postures activated for the session.
export const stageDP15ReadGateEntryActivated = {
  ...baseReadGateEntry("live_session_private_reads_live_activated", {
    readGateRecord: healthyReadGateRecord,
    establishmentRecord: healthyEstablishmentRecord,
    ...healthyReadGateLegs,
    dp10ActivationRecord: healthyDp10ActivationRecord,
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-read-gate-d-p15",
    "readGateRecordVersion": "pond-live-session-read-gate-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_read_gate",
    "liveSessionReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
    "reason": "all_read_gate_checks_satisfied",
    "readGateFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedLiveSessionEstablishmentState": "live_session_scoped_authentication_established",
    "mappedLiveSessionEstablishmentReason": "all_session_establishment_checks_satisfied",
    "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
    "mappedDp10Reason": "all_activation_checks_satisfied",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [
      "read_gate_record_well_formed",
      "read_gate_bound_to_receiver_held_principal",
      "read_gate_basis_receiver_owned_and_single_principal",
      "live_session_establishment_reverified_positive_and_fresh",
      "frozen_private_read_structural_activation_independently_reinspected_active",
      "read_gate_refuses_memory_lanes_collaborative_widening_and_agent_reach"
    ],
    "unsatisfiedChecks": [],
    "readGateEstablishesGrant": false,
    "readGateEstablishesWriteSendOrSignCapability": false,
    "readGateEstablishesContentOrMemoryAccess": false,
    "sessionGrantsAgentAccess": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveReadGateFixtureEntry;

// Gate arm 2 — the gate closes with the session unavailable: a broken
// establishment refusal keeps the frozen D-P10 echo readable — the
// mapped echo shows the frozen activation still active underneath.
export const stageDP15ReadGateEntryBrokenEstablishment = {
  ...baseReadGateEntry("gate_without_established_session", {
    readGateRecord: healthyReadGateRecord,
    establishmentRecord: establishmentRecordOf(
      "inferred_from_session_presence",
    ),
    ...healthyReadGateLegs,
    dp10ActivationRecord: healthyDp10ActivationRecord,
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-read-gate-d-p15",
    "readGateRecordVersion": "pond-live-session-read-gate-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_read_gate",
    "liveSessionReadGateState": "no_active_live_session",
    "reason": "live_session_not_established_refused_or_not_fresh",
    "readGateFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedLiveSessionEstablishmentState": "not_established",
    "mappedLiveSessionEstablishmentReason": "receiver_session_establishment_proof_incomplete",
    "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
    "mappedDp10Reason": "all_activation_checks_satisfied",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "read_gate_record_well_formed",
      "read_gate_bound_to_receiver_held_principal",
      "read_gate_basis_receiver_owned_and_single_principal",
      "live_session_establishment_reverified_positive_and_fresh",
      "frozen_private_read_structural_activation_independently_reinspected_active",
      "read_gate_refuses_memory_lanes_collaborative_widening_and_agent_reach"
    ],
    "readGateEstablishesGrant": false,
    "readGateEstablishesWriteSendOrSignCapability": false,
    "readGateEstablishesContentOrMemoryAccess": false,
    "sessionGrantsAgentAccess": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveReadGateFixtureEntry;

// Gate arm 3 — the frozen activation broken at the gate: with the
// D-P10 activation leg absent, the establishment re-run refuses and the
// gate refuses with it — the mapped echo carries the frozen refusal
// verbatim (`activation_record_invalid`), which is where the honest
// frozen-activation diagnosis belongs (no defensive ladder literal).
export const stageDP15ReadGateEntryBrokenFrozenActivation = {
  ...baseReadGateEntry("frozen_activation_broken_at_gate", {
    readGateRecord: healthyReadGateRecord,
    establishmentRecord: healthyEstablishmentRecord,
    ...healthyReadGateLegs,
    dp10ActivationRecord: null,
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-read-gate-d-p15",
    "readGateRecordVersion": "pond-live-session-read-gate-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_read_gate",
    "liveSessionReadGateState": "no_active_live_session",
    "reason": "live_session_not_established_refused_or_not_fresh",
    "readGateFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedLiveSessionEstablishmentState": "not_established",
    "mappedLiveSessionEstablishmentReason": "frozen_activation_not_structurally_ready_or_not_session_current",
    "mappedDp10ActivationState": "not_activated",
    "mappedDp10Reason": "activation_record_invalid",
    "mappedDp10SessionScopePosture": "not_established",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "read_gate_record_well_formed",
      "read_gate_bound_to_receiver_held_principal",
      "read_gate_basis_receiver_owned_and_single_principal",
      "live_session_establishment_reverified_positive_and_fresh",
      "frozen_private_read_structural_activation_independently_reinspected_active",
      "read_gate_refuses_memory_lanes_collaborative_widening_and_agent_reach"
    ],
    "readGateEstablishesGrant": false,
    "readGateEstablishesWriteSendOrSignCapability": false,
    "readGateEstablishesContentOrMemoryAccess": false,
    "sessionGrantsAgentAccess": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveReadGateFixtureEntry;

// Gate arm 4 — collaborative widening refused: the D-P14 collaborative
// read does NOT ride the live session — the requested scope alone
// unsatisfies the scope check and lands the dedicated refusal cause.
export const stageDP15ReadGateEntryCollaborativeWideningRefused = {
  ...baseReadGateEntry("collaborative_widening_refused", {
    readGateRecord: readGateRecordOf(
      "receiver_session_scoped_structural_read_live_use_not_inferred",
      "collaborative_multi_principal_read",
      "collaborative_widening_attempted_refused",
    ),
    establishmentRecord: healthyEstablishmentRecord,
    ...healthyReadGateLegs,
    dp10ActivationRecord: healthyDp10ActivationRecord,
    receiverRetractionRecord: null,
  }),
  assessment: {
    "contractVersion": "pond-live-session-read-gate-d-p15",
    "readGateRecordVersion": "pond-live-session-read-gate-d-p15",
    "assessmentKind": "deterministic_supplied_live_session_read_gate",
    "liveSessionReadGateState": "no_active_live_session",
    "reason": "collaborative_or_agent_scope_refused",
    "readGateFreshnessDiagnosis": {
      "state": "fresh",
      "reason": "within_declared_maximum_age",
      "observationAgeMs": 0
    },
    "mappedLiveSessionEstablishmentState": "live_session_scoped_authentication_established",
    "mappedLiveSessionEstablishmentReason": "all_session_establishment_checks_satisfied",
    "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
    "mappedDp10Reason": "all_activation_checks_satisfied",
    "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "satisfiedChecks": [],
    "unsatisfiedChecks": [
      "read_gate_record_well_formed",
      "read_gate_bound_to_receiver_held_principal",
      "read_gate_basis_receiver_owned_and_single_principal",
      "live_session_establishment_reverified_positive_and_fresh",
      "frozen_private_read_structural_activation_independently_reinspected_active",
      "read_gate_refuses_memory_lanes_collaborative_widening_and_agent_reach"
    ],
    "readGateEstablishesGrant": false,
    "readGateEstablishesWriteSendOrSignCapability": false,
    "readGateEstablishesContentOrMemoryAccess": false,
    "sessionGrantsAgentAccess": false,
    "credentialAdmitted": false,
    "principalIdAcceptedAsAuthorization": false,
    "personalMemoryContentAdmitted": false,
    "currentTruthAdmitted": false,
    "runtimeActivationPosture": "not_included",
    "authority": "none"
  },
} satisfies PondStageDP15LiveReadGateFixtureEntry;

export const stageDP15LiveReadGateMatrix = deepFreeze([
  stageDP15ReadGateEntryActivated,
  stageDP15ReadGateEntryBrokenEstablishment,
  stageDP15ReadGateEntryBrokenFrozenActivation,
  stageDP15ReadGateEntryCollaborativeWideningRefused,
]);

// --- Flat pinned constants (the selftest ties these to the frozen
// D-P0/D-P8 fixture exports and recomputes over them) ---

export const stageDP15ReceiverRef = receiverRef;
export const stageDP15EvaluatedAtEpochMs = evaluatedAtEpochMs;
export const stageDP15ExpiredEvaluationEpochMs = expiredEvaluationEpochMs;
export const stageDP15StaleEpochMs = staleEpochMs;
export const stageDP15ReceiverMaximumAgeMs = receiverMaximumAgeMs;
export const stageDP15HealthyObservedAtEpochMs = healthyObservedAtEpochMs;
export const stageDP15ReceiverSaltHex = receiverSaltHex;
export const stageDP15ReceiverVerifierDigestHex = receiverVerifierDigestHex;
export const stageDP15MismatchDigestHex = mismatchDigestHex;