// Stage D-P23 fixture matrices: the collaborative multi-principal live read
// lane. Pinned arms over the frozen D-P15 live-session receiver legs
// re-inlined from the frozen D-P22 fixture's recorded arm — the
// collaborative read request's parent is the D-P15 establishment + read
// gate + the D-P14 join (NOT the D-P16 conversation lane, and NOT the
// D-P20 transport, D-P21 reply, or D-P22 voice chains), so the 13 gate
// legs here are the SAME structural copies the frozen D-P20/D-P21/D-P22
// recorded arms carry. The counterpart legs are re-inlined from the
// frozen D-P14 structural fixture with the lane's recorded D-P6
// re-timing, and the counterpart stays structural never-issued at every
// rung. Every assessment below was produced by running the REAL D-P23
// assessors over the pinned arm and serializing the result verbatim —
// the selftest re-runs the assessors and deep-equals the pin.
//
// Zero value imports (type-only, hygiene-enforced); deepFreeze over
// everything. This cut never carries the D-P14 counterpart fixture
// secret (which never enters this repository's lane files); the D-P14
// counterpart pair is pinned at the digest level in the lane selftest.
//
// Clock chain: establishment 60000 < retracted request event 68000 <
// request event 65000/65500 eval < shared live-read event 66000 <
// performed eval 80000 (live-read event age 14000; counterpart D-P6 age
// 60000 fresh Inclusive) < counterpart-expiry eval 80001 (counterpart
// D-P6 age 60001 stale; the D-P15 gate still green) < future live-read
// event 80100 < retraction 82000 < confined eval 83000 < policy 84500 <
// reply 88000 < voice 89000/89500 < receiver-expiry eval 90001 < future
// request event 90000 < far-future eval 200000; maximumAgeMs 60000.
// Do-not-postdate: the collaborative request (65000) predates the whole
// frozen D-P20 (84500), D-P21 (88000), and D-P22 (89000+) chains; its
// confinement is proven only by retraction.
import type {
  PondCollaborativeReadSessionRequestDecisionAssessment,
} from "../contracts/pond-collaborative-read-session-request-decision.js";
import type {
  PondCollaborativeReadLiveAdmissionDecisionAssessment,
} from "../contracts/pond-collaborative-read-live-admission-decision.js";
import type {
  PondClaimedCollaborativeReadRefusalAssessment,
} from "../contracts/pond-claimed-collaborative-read-refusal.js";


export interface PondStageDP23CollaborativeReadRequestFixtureEntry {
  readonly fixtureLabel: string;
  readonly receiverHeldPrincipalRef: string;
  readonly readGateRecord: unknown;
  readonly establishmentRecord: unknown;
  readonly dp5CeremonyRecord: unknown;
  readonly dp6ObservationRecord: unknown;
  readonly dp8VerifierRecord: unknown;
  readonly dp8ProofRecord: unknown;
  readonly dp9IssuanceRecord: unknown;
  readonly dp9MappingRecord: unknown;
  readonly dp10ActivationRecord: unknown;
  readonly receiverRetractionRecord: unknown;
  readonly receiverEvaluatedAtEpochMs: number;
  readonly receiverMaximumAgeMs: number;
  readonly counterpartJoinDeclarationRecord: unknown;
  readonly collaborativeReadSessionRequest: unknown;
  readonly assessment: PondCollaborativeReadSessionRequestDecisionAssessment;
}

export interface PondStageDP23CollaborativeLiveReadFixtureEntry {
  readonly fixtureLabel: string;
  readonly receiverHeldPrincipalRef: string;
  readonly counterpartPrincipalRef: string;
  readonly collaborativeReadSessionRequest: unknown;
  readonly counterpartJoinDeclarationRecord: unknown;
  readonly collaborativeActivationRecord: unknown;
  readonly readAdmissionRecord: unknown;
  readonly readGateRecord: unknown;
  readonly establishmentRecord: unknown;
  readonly dp5CeremonyRecord: unknown;
  readonly dp6ObservationRecord: unknown;
  readonly dp8VerifierRecord: unknown;
  readonly dp8ProofRecord: unknown;
  readonly dp9IssuanceRecord: unknown;
  readonly dp9MappingRecord: unknown;
  readonly dp10ActivationRecord: unknown;
  readonly receiverRetractionRecord: unknown;
  readonly counterpartDp5CeremonyRecord: unknown;
  readonly counterpartDp6ObservationRecord: unknown;
  readonly counterpartDp8VerifierRecord: unknown;
  readonly counterpartDp8ProofRecord: unknown;
  readonly counterpartDp9IssuanceRecord: unknown;
  readonly counterpartDp9MappingRecord: unknown;
  readonly counterpartDp10ActivationRecord: unknown;
  readonly evaluatedAtEpochMs: number;
  readonly maximumAgeMs: number;
  readonly collaborativeReadLiveAdmission: unknown;
  readonly assessment: PondCollaborativeReadLiveAdmissionDecisionAssessment;
}

export interface PondStageDP23ClaimedCollaborativeReadFixtureEntry {
  readonly fixtureLabel: string;
  readonly claimedCollaborativeRead: unknown;
  readonly assessment: PondClaimedCollaborativeReadRefusalAssessment;
}


export const stageDP23ReceiverRef = "principal:fixture:stage-d-p0:local-principal";
export const stageDP23CounterpartRef = "principal:fixture:stage-d-p14:counterpart-principal";

export const stageDP23EstablishedAtEpochMs = 1800000060000;
export const stageDP23ReceiverDp6ObservedAtEpochMs = 1800000030000;
export const stageDP23CounterpartDp6RetimedObservedAtEpochMs = 1800000020000;
export const stageDP23CollaborativeReadRequestEventAtEpochMs = 1800000065000;
export const stageDP23CollaborativeReadRequestEvaluatedAtEpochMs = 1800000065500;
export const stageDP23CollaborativeLiveReadEventAtEpochMs = 1800000066000;
export const stageDP23CollaborativeLiveReadEvaluatedAtEpochMs = 1800000080000;
export const stageDP23CounterpartExpiredEvaluatedAtEpochMs = 1800000080001;
export const stageDP23ReceiverExpiredEvaluatedAtEpochMs = 1800000090001;
export const stageDP23FutureCollaborativeReadRequestEventAtEpochMs = 1800000090000;
export const stageDP23FutureCollaborativeLiveReadEventAtEpochMs = 1800000080100;
export const stageDP23PreEstablishmentRequestEventAtEpochMs = 1800000059000;
export const stageDP23FarFutureLadderOrderEvaluatedAtEpochMs = 1800000200000;
export const stageDP23RetractedRequestEventAtEpochMs = 1800000068000;
export const stageDP23RetractedLiveReadEventAtEpochMs = 1800000068500;
export const stageDP23RetractionRecordedAtEpochMs = 1800000082000;
export const stageDP23ConfinedReassessmentEvaluatedAtEpochMs = 1800000083000;
export const stageDP23ReceiverMaximumAgeMs = 60000;
export const stageDP23DP14ActivationActivatedAtEpochMs = 1800000066000;
export const stageDP23DP14StaleActivationActivatedAtEpochMs = 1800000010000;

export const stageDP23ClaimedCollaborativeReadText = "claimed collaborative read result asserted by a counterpart is never echoed or stored";
export const stageDP23ClaimedCollaborativeReadSourceRef = "counterpart:sample:claimed-collaborative-read-source";
export const stageDP23ClaimedCollaborativeReadSourceRefDistinct = "counterpart:other:distinct-claimed-collaborative-read-source";
export const stageDP23ComposedProseClaimText = "Desk, we ride at dawn. Ready your structural reads.";

export const stageDP23ReceiverSaltHex = "0a1b2c3d4e5f60718293a4b5c6d7e8f9";
export const stageDP23ReceiverVerifierDigestHex = "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f";
export const stageDP23CounterpartSaltHex = "f1e2d3c4b5a60718293a4b5c6d7e8f90";
export const stageDP23CounterpartVerifierDigestHex = "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b";
export const stageDP23AllThirteenTargetRefs = [
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
  ];

const deepFreeze = <T,>(value: T): T => {
  if (Array.isArray(value)) {
    for (const item of value) deepFreeze(item);
    Object.freeze(value);
    return value;
  }
  if (value !== null && typeof value === "object") {
    const recordValue = value as Record<string, unknown>;
    for (const item of Object.values(recordValue)) deepFreeze(item);
    Object.freeze(value);
  }
  return value;
};


export const pondStageDP23CollaborativeReadSessionRequestTemplate: Readonly<Record<string, unknown>> = {
    "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
    "kind": "pond-collaborative-read-session-request",
    "principalRef": "",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
    "collaborativeReadRequestMetadata": {
      "collaborative_read_requested_at_epoch_ms": 0,
      "freshness_basis": "collaborative_read_request_event_time_only",
      "currentness_posture": "not_established_consumer_must_evaluate"
    },
    "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
    "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
    "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
    "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
    "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
    "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
    "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
    "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
    "authority": "none"
  };

export const pondStageDP23CollaborativeLiveAdmissionTemplate: Readonly<Record<string, unknown>> = {
    "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
    "kind": "pond-collaborative-read-live-admission",
    "receiverHeldPrincipalRef": "",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
    "collaborativeLiveReadMetadata": {
      "collaborative_live_read_recorded_at_epoch_ms": 0,
      "freshness_basis": "collaborative_live_read_event_time_only",
      "currentness_posture": "not_established_consumer_must_evaluate"
    },
    "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
    "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
    "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
    "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
    "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
    "truthPosture": "structural_presence_only_no_current_truth_claim",
    "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
    "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
    "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
    "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
    "authority": "none"
  };

export const pondStageDP14CollaborativeActivationRecordTemplate: Readonly<Record<string, unknown>> = {
    "contractVersion": "pond-collaborative-read-activation-d-p14",
    "kind": "pond-collaborative-read-activation",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
    "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
    "activationMetadata": {
      "activated_at_epoch_ms": 0,
      "freshness_basis": "activation_event_time_only",
      "currentness_posture": "not_established_consumer_must_evaluate"
    },
    "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
    "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
    "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
    "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
    "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
    "grantSufficiencyPosture": "activation_requires_no_grant",
    "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
    "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
    "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
    "authority": "none"
  };

export const pondStageDP14CollaborativeAdmissionRecordTemplate: Readonly<Record<string, unknown>> = {
    "contractVersion": "pond-collaborative-read-admission-d-p14",
    "kind": "pond-collaborative-read-admission",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "readClass": "principal_structural_record_read",
    "readTargetRefs": [
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
    "readBasis": "receiver_requested_collaborative_structural_records_read",
    "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
    "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
    "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
    "truthPosture": "structural_presence_only_no_current_truth_claim",
    "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
    "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
    "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
    "revocabilityPosture": "read_revocable_by_activation_retraction",
    "authority": "none"
  };

export const pondStageDP23CounterpartLegsBundle: Readonly<Record<string, unknown>> = {
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null
  };

export const stageDP23HealthyCounterpartJoinRecord: Readonly<Record<string, unknown>> = {
    "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
    "kind": "pond-collaborative-read-counterpart-declaration",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "joinBasis": "receiver_declared_explicit_collaborative_session_join",
    "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
    "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
    "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
    "revocabilityPosture": "join_revocable_by_receiver_retraction",
    "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
    "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
    "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
    "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
    "authorityPosture": "join_grants_no_authority_membership_or_capability",
    "authority": "none"
  };


export const stageDP23CollaborativeReadSessionRequestMatrix: readonly PondStageDP23CollaborativeReadRequestFixtureEntry[] = deepFreeze([
  {
    "fixtureLabel": "collaborative_read_request_recorded_session_scoped_no_scope_object",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000065500,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "reason": "all_collaborative_read_request_checks_satisfied",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 500
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 5500
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "collaborative_read_request_basis_receiver_recorded_not_inferred",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_refused_basis_inferred_from_room_or_conversation_presence",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000065500,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "inferred_from_room_or_conversation_presence",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "receiver_collaborative_read_request_proof_incomplete",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 500
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 5500
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "collaborative_read_request_basis_receiver_recorded_not_inferred"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_refused_basis_inferred_from_agent_or_provider_membership",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000065500,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "inferred_from_agent_or_provider_membership",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "receiver_collaborative_read_request_proof_incomplete",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 500
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 5500
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "collaborative_read_request_basis_receiver_recorded_not_inferred"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_refused_basis_inferred_from_two_principals_in_view",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000065500,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "inferred_from_two_principals_in_view",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "receiver_collaborative_read_request_proof_incomplete",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 500
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 5500
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "collaborative_read_request_basis_receiver_recorded_not_inferred"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_refused_basis_asserted_by_counterpart_declaration",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000065500,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "asserted_by_counterpart_declaration",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "receiver_collaborative_read_request_proof_incomplete",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 500
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 5500
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "collaborative_read_request_basis_receiver_recorded_not_inferred"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_refused_basis_replayed_from_prior_collaborative_read_request",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000065500,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "replayed_from_prior_collaborative_read_request",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "receiver_collaborative_read_request_proof_incomplete",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 500
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 5500
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "collaborative_read_request_basis_receiver_recorded_not_inferred"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_counterpart_self_join_refused",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000065500,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "counterpart_join_binding_not_established",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 500
      },
      "mappedCounterpartJoinState": "join_not_established",
      "mappedCounterpartJoinReason": "receiver_join_declaration_proof_incomplete",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 5500
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "collaborative_read_request_basis_receiver_recorded_not_inferred",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_confined_after_retraction",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": {
      "contractVersion": "pond-live-session-retraction-d-p15",
      "kind": "pond-live-session-retraction",
      "retracted_at_epoch_ms": 1800000082000,
      "retractionPosture": "receiver_recorded_live_session_retraction_no_grant",
      "authority": "none"
    },
    "receiverEvaluatedAtEpochMs": 1800000083000,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000068000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "live_session_read_gate_not_currently_live",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "no_active_live_session",
      "mappedReadGateReassessmentReason": "live_session_not_established_refused_or_not_fresh",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 23000
      },
      "mappedEstablishmentState": "not_established",
      "mappedEstablishmentReason": "receiver_retraction_on_record",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "collaborative_read_request_basis_receiver_recorded_not_inferred",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_event_before_session_establishment",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000065500,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000059000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "collaborative_read_request_event_not_of_the_current_session_scope",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 6500
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 5500
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "collaborative_read_request_basis_receiver_recorded_not_inferred",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_event_in_future",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000080000,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000090000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "collaborative_read_request_event_not_session_current",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_time_in_future",
        "observationAgeMs": null
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "collaborative_read_request_basis_receiver_recorded_not_inferred",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_ladder_order_far_future_eval",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000200000,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "live_session_read_gate_not_currently_live",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 135000
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "no_active_live_session",
      "mappedReadGateReassessmentReason": "live_session_not_established_refused_or_not_fresh",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 140000
      },
      "mappedEstablishmentState": "not_established",
      "mappedEstablishmentReason": "session_establishment_not_session_current",
      "mappedDp10ActivationState": "not_activated",
      "mappedDp10Reason": "identity_chain_not_structurally_ready",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "collaborative_read_request_basis_receiver_recorded_not_inferred",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_record_missing_key",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000065500,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "collaborative_read_request_record_invalid",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 5500
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "collaborative_read_request_basis_receiver_recorded_not_inferred",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_record_extra_forbidden_key",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000065500,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none",
      "sharedScopeObject": {
        "declaredScope": "ad hoc pair"
      }
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "collaborative_read_request_record_invalid",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 5500
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "collaborative_read_request_basis_receiver_recorded_not_inferred",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_record_tampered_posture_literal",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000065500,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_with_a_scope_object",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "collaborative_read_request_record_invalid",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 5500
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "collaborative_read_request_basis_receiver_recorded_not_inferred",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_read_request_refused_non_object_record",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "receiverEvaluatedAtEpochMs": 1800000065500,
    "receiverMaximumAgeMs": 60000,
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeReadSessionRequest": "a collaborative read request asserted as prose",
    "assessment": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "collaborativeReadRequestDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_collaborative_read_session_request_decision",
      "collaborativeReadSessionRequestState": "collaborative_read_session_request_not_recorded",
      "reason": "collaborative_read_request_record_invalid",
      "collaborativeReadRequestEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedCounterpartJoinState": "fixture_structural_receiver_declared_counterpart_join",
      "mappedCounterpartJoinReason": "all_counterpart_join_checks_satisfied",
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 5500
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedDp10ActivationState": "fixture_structural_session_scoped_private_read_activation",
      "mappedDp10Reason": "all_activation_checks_satisfied",
      "mappedDp10SessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_read_request_record_well_formed",
        "collaborative_read_request_bound_to_receiver_held_principal",
        "counterpart_join_declared_binding_pairwise_distinct_d_p14",
        "collaborative_read_request_basis_receiver_recorded_not_inferred",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "collaborative_read_request_event_within_current_session_scope",
        "collaborative_read_request_event_own_freshness_within_declared_maximum_age",
        "collaborative_read_request_refusal_postures_complete"
      ],
      "collaborativeReadRequestRetentionPosture": "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeReadRequestEstablishesReadOrRecordRead": false,
      "collaborativeReadRequestEstablishesReadResult": false,
      "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeReadRequestEstablishesLiveCounterpartOrChain": false,
      "collaborativeReadRequestEstablishesAgentIdentityOrAdmission": false,
      "collaborativeReadRequestEstablishesGrant": false,
      "collaborativeReadRequestEstablishesConsequenceOrExecution": false,
      "collaborativeReadRequestEstablishesAuthorityFromProse": false,
      "collaborativeReadRequestEstablishesMembershipOrRoomPresence": false,
      "collaborativeReadRequestEstablishesScope": false,
      "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeReadRequestConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
]);

export const stageDP23CollaborativeLiveReadMatrix: readonly PondStageDP23CollaborativeLiveReadFixtureEntry[] = deepFreeze([
  {
    "fixtureLabel": "collaborative_live_read_recorded_both_chains_green_at_inclusive_boundary",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000066000,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_structural_records_read_admitted_session_scoped_no_scope_object_no_content",
      "reason": "all_collaborative_live_read_checks_satisfied",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 14000
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "mappedReadRequestReassessmentReason": "all_collaborative_read_request_checks_satisfied",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedDp14ActivationState": "fixture_structural_session_scoped_collaborative_structural_read_activation",
      "mappedDp14ActivationReason": "all_collaborative_read_gate_checks_satisfied",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50000
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
            "observationAgeMs": 20000
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
            "observationAgeMs": 20000
          }
        }
      },
      "mappedDp14CounterpartChain": {
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
            "observationAgeMs": 60000
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
            "observationAgeMs": 20000
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [
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
      "satisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_refused_basis_replayed_from_prior_collaborative_live_read",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "replayed_from_prior_collaborative_live_read",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000066000,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "receiver_collaborative_live_read_proof_incomplete",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 14000
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "mappedReadRequestReassessmentReason": "all_collaborative_read_request_checks_satisfied",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedDp14ActivationState": "fixture_structural_session_scoped_collaborative_structural_read_activation",
      "mappedDp14ActivationReason": "all_collaborative_read_gate_checks_satisfied",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50000
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
            "observationAgeMs": 20000
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
            "observationAgeMs": 20000
          }
        }
      },
      "mappedDp14CounterpartChain": {
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
            "observationAgeMs": 60000
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
            "observationAgeMs": 20000
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [
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
      "satisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "collaborative_live_read_basis_receiver_performed_not_inferred"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_request_not_currently_recorded_rung",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "replayed_from_prior_collaborative_read_request",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000066000,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "collaborative_read_request_not_currently_recorded",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 14000
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_not_recorded",
      "mappedReadRequestReassessmentReason": "receiver_collaborative_read_request_proof_incomplete",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedDp14ActivationState": "fixture_structural_session_scoped_collaborative_structural_read_activation",
      "mappedDp14ActivationReason": "all_collaborative_read_gate_checks_satisfied",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50000
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
            "observationAgeMs": 20000
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
            "observationAgeMs": 20000
          }
        }
      },
      "mappedDp14CounterpartChain": {
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
            "observationAgeMs": 60000
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
            "observationAgeMs": 20000
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_counterpart_issued_identity_smuggle_refused",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000066000,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "counterpart_chain_refused_structural_never_issued_or_not_current",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 14000
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "mappedReadRequestReassessmentReason": "all_collaborative_read_request_checks_satisfied",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedDp14ActivationState": "not_activated",
      "mappedDp14ActivationReason": "counterpart_chain_not_structurally_verified",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50000
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
            "observationAgeMs": 20000
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
            "observationAgeMs": 20000
          }
        }
      },
      "mappedDp14CounterpartChain": {
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
            "observationAgeMs": 60000
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
            "observationAgeMs": 20000
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_receiver_chain_stale_refused_at_gate_rung_first",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000090001,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000066000,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "live_session_read_gate_not_currently_live",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 24001
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_not_recorded",
      "mappedReadRequestReassessmentReason": "live_session_read_gate_not_currently_live",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 25001
      },
      "mappedReadGateState": "no_active_live_session",
      "mappedReadGateReassessmentReason": "live_session_not_established_refused_or_not_fresh",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30001
      },
      "mappedDp14ActivationState": "not_activated",
      "mappedDp14ActivationReason": "receiver_chain_not_structurally_ready_or_current",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 30001
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
            "observationAgeMs": 30001
          }
        }
      },
      "mappedDp14CounterpartChain": {
        "heldPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
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
            "observationAgeMs": 70001
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
            "observationAgeMs": 30001
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_counterpart_chain_expired_own_death",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080001,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000066000,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "counterpart_chain_refused_structural_never_issued_or_not_current",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 14001
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "mappedReadRequestReassessmentReason": "all_collaborative_read_request_checks_satisfied",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15001
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20001
      },
      "mappedDp14ActivationState": "not_activated",
      "mappedDp14ActivationReason": "counterpart_chain_not_structurally_verified",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50001
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
            "observationAgeMs": 20001
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
            "observationAgeMs": 20001
          }
        }
      },
      "mappedDp14CounterpartChain": {
        "heldPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
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
            "observationAgeMs": 20001
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_admission_target_out_of_table_refused",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
        "collaborative-record:stage-d-p23-fourteenth-target-refused"
      ],
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000066000,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "frozen_dp14_admission_refused",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 14000
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "mappedReadRequestReassessmentReason": "all_collaborative_read_request_checks_satisfied",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedDp14ActivationState": "fixture_structural_session_scoped_collaborative_structural_read_activation",
      "mappedDp14ActivationReason": "all_collaborative_read_gate_checks_satisfied",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50000
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
            "observationAgeMs": 20000
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
            "observationAgeMs": 20000
          }
        }
      },
      "mappedDp14CounterpartChain": {
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
            "observationAgeMs": 60000
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
            "observationAgeMs": 20000
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
      "mappedDp14AdmissionState": "not_admitted",
      "mappedDp14AdmissionReason": "admission_record_invalid",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_frozen_dp14_admission_record_invalid",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000066000,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "frozen_dp14_admission_refused",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 14000
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "mappedReadRequestReassessmentReason": "all_collaborative_read_request_checks_satisfied",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedDp14ActivationState": "fixture_structural_session_scoped_collaborative_structural_read_activation",
      "mappedDp14ActivationReason": "all_collaborative_read_gate_checks_satisfied",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50000
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
            "observationAgeMs": 20000
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
            "observationAgeMs": 20000
          }
        }
      },
      "mappedDp14CounterpartChain": {
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
            "observationAgeMs": 60000
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
            "observationAgeMs": 20000
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
      "mappedDp14AdmissionState": "not_admitted",
      "mappedDp14AdmissionReason": "admission_record_invalid",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_dp14_activation_stale_refused",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000010000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000066000,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "frozen_dp14_collaborative_activation_not_session_current",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 14000
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "mappedReadRequestReassessmentReason": "all_collaborative_read_request_checks_satisfied",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedDp14ActivationState": "not_activated",
      "mappedDp14ActivationReason": "collaborative_activation_not_session_current",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50000
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
            "observationAgeMs": 20000
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
            "observationAgeMs": 20000
          }
        }
      },
      "mappedDp14CounterpartChain": {
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
            "observationAgeMs": 60000
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
            "observationAgeMs": 20000
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_confined_after_retraction",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000068000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": {
      "contractVersion": "pond-live-session-retraction-d-p15",
      "kind": "pond-live-session-retraction",
      "retracted_at_epoch_ms": 1800000082000,
      "retractionPosture": "receiver_recorded_live_session_retraction_no_grant",
      "authority": "none"
    },
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000083000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000068500,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "live_session_read_gate_not_currently_live",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 14500
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_not_recorded",
      "mappedReadRequestReassessmentReason": "live_session_read_gate_not_currently_live",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "no_active_live_session",
      "mappedReadGateReassessmentReason": "live_session_not_established_refused_or_not_fresh",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 23000
      },
      "mappedDp14ActivationState": "not_activated",
      "mappedDp14ActivationReason": "counterpart_chain_not_structurally_verified",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 53000
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
            "observationAgeMs": 23000
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
            "observationAgeMs": 23000
          }
        }
      },
      "mappedDp14CounterpartChain": {
        "heldPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
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
            "observationAgeMs": 63000
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
            "observationAgeMs": 23000
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_event_in_future",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000080100,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "collaborative_live_read_event_not_session_current",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_time_in_future",
        "observationAgeMs": null
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "mappedReadRequestReassessmentReason": "all_collaborative_read_request_checks_satisfied",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedDp14ActivationState": "fixture_structural_session_scoped_collaborative_structural_read_activation",
      "mappedDp14ActivationReason": "all_collaborative_read_gate_checks_satisfied",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50000
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
            "observationAgeMs": 20000
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
            "observationAgeMs": 20000
          }
        }
      },
      "mappedDp14CounterpartChain": {
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
            "observationAgeMs": 60000
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
            "observationAgeMs": 20000
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_record_missing_key",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000066000,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "collaborative_live_read_record_invalid",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "mappedReadRequestReassessmentReason": "all_collaborative_read_request_checks_satisfied",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedDp14ActivationState": "fixture_structural_session_scoped_collaborative_structural_read_activation",
      "mappedDp14ActivationReason": "all_collaborative_read_gate_checks_satisfied",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50000
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
            "observationAgeMs": 20000
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
            "observationAgeMs": 20000
          }
        }
      },
      "mappedDp14CounterpartChain": {
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
            "observationAgeMs": 60000
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
            "observationAgeMs": 20000
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_record_extra_forbidden_key",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000066000,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "no_shared_scope_object_no_membership_registry_the_recorded_request_and_the_declared_join_are_the_explicit_scope_and_membership",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none",
      "counterpartLiveLegs": [
        "claimed live chain leg"
      ]
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "collaborative_live_read_record_invalid",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "mappedReadRequestReassessmentReason": "all_collaborative_read_request_checks_satisfied",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedDp14ActivationState": "fixture_structural_session_scoped_collaborative_structural_read_activation",
      "mappedDp14ActivationReason": "all_collaborative_read_gate_checks_satisfied",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50000
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
            "observationAgeMs": 20000
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
            "observationAgeMs": 20000
          }
        }
      },
      "mappedDp14CounterpartChain": {
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
            "observationAgeMs": 60000
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
            "observationAgeMs": 20000
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_record_tampered_posture_literal",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "kind": "pond-collaborative-read-live-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeLiveReadBasis": "receiver_performed_collaborative_live_read_not_inferred",
      "collaborativeLiveReadMetadata": {
        "collaborative_live_read_recorded_at_epoch_ms": 1800000066000,
        "freshness_basis": "collaborative_live_read_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "requestedCollaborativeReadScope": "collaborative_structural_records_read_of_the_exact_declared_counterpart_set_only_no_write_no_send_no_sign_no_memory",
      "audienceBindingPosture": "admitted_targets_audience_bound_to_the_two_declared_principals_only_by_prefix",
      "counterpartChainPosture": "counterpart_chain_structural_never_issued_no_live_counterpart_authentication_exists",
      "scopeCrossingPosture": "no_scope_crossing_no_release_recorded_memory_never_crosses",
      "scopeObjectPosture": "a_shared_scope_object_and_a_membership_registry_are_created",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_the_live_read",
      "revocabilityPosture": "live_read_revocable_by_receiver_retraction",
      "erc8004EvidencePosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
      "authorityPosture": "the_live_read_admission_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "collaborative_live_read_record_invalid",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "mappedReadRequestReassessmentReason": "all_collaborative_read_request_checks_satisfied",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedDp14ActivationState": "fixture_structural_session_scoped_collaborative_structural_read_activation",
      "mappedDp14ActivationReason": "all_collaborative_read_gate_checks_satisfied",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50000
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
            "observationAgeMs": 20000
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
            "observationAgeMs": 20000
          }
        }
      },
      "mappedDp14CounterpartChain": {
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
            "observationAgeMs": 60000
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
            "observationAgeMs": 20000
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "collaborative_live_read_refused_non_object_record",
    "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
    "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
    "collaborativeReadSessionRequest": {
      "contractVersion": "pond-collaborative-read-session-request-decision-d-p23",
      "kind": "pond-collaborative-read-session-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "collaborativeReadRequestBasis": "receiver_recorded_collaborative_read_session_request_not_inferred",
      "collaborativeReadRequestMetadata": {
        "collaborative_read_requested_at_epoch_ms": 1800000065000,
        "freshness_basis": "collaborative_read_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "collaborativeRequestLanePosture": "collaborative_reads_never_ride_a_single_principal_session_this_request_is_their_own_recorded_lane_ride",
      "collaborativeRequestAudiencePosture": "the_exact_declared_counterpart_set_of_the_join_two_declared_principals_no_ad_hoc_pair_no_third_ref",
      "collaborativeRequestScopePosture": "explicit_receiver_recorded_collaborative_read_session_no_scope_object_no_membership_registry_is_created",
      "collaborativeRequestPersonalStatePosture": "no_personal_state_surfaces_out_of_any_scope_no_release_is_recorded_here",
      "counterpartIdentityPosture": "counterpart_identity_is_receiver_recorded_erc8004_is_evidence_only_never_a_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_request",
      "memoryLaneExclusionPosture": "collaborative_read_request_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "the_request_grants_no_authority_membership_read_or_admission",
      "authority": "none"
    },
    "counterpartJoinDeclarationRecord": {
      "contractVersion": "pond-collaborative-read-counterpart-declaration-d-p14",
      "kind": "pond-collaborative-read-counterpart-declaration",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "joinBasis": "receiver_declared_explicit_collaborative_session_join",
      "heldRefPosture": "receiver_recorded_pre_existing_ref_never_issued",
      "issuedIdPosture": "counterpart_carries_no_issued_principal_id",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_join",
      "revocabilityPosture": "join_revocable_by_receiver_retraction",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "grantSufficiencyPosture": "join_requires_no_grant_and_establishes_no_grant",
      "personalStateIsolationPosture": "counterpart_personal_state_not_merged_and_not_read_by_this_join",
      "memoryLaneExclusionPosture": "join_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "join_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "collaborativeActivationRecord": {
      "contractVersion": "pond-collaborative-read-activation-d-p14",
      "kind": "pond-collaborative-read-activation",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "activationBasis": "receiver_explicit_collaborative_activation_not_inferred",
      "activatedCapability": "collaborative_structural_records_read_of_both_declared_principals",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000066000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "multiPrincipalReadScopePosture": "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
      "sessionScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "collaborative_activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "counterpartIdentityPosture": "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity",
      "consentPosture": "receiver_recorded_session_join_only_no_counterpart_consent_claim",
      "memoryLaneExclusionPosture": "activation_excludes_memory_narrative_transcript_lanes",
      "authority": "none"
    },
    "readAdmissionRecord": {
      "contractVersion": "pond-collaborative-read-admission-d-p14",
      "kind": "pond-collaborative-read-admission",
      "receiverHeldPrincipalRef": "principal:fixture:stage-d-p0:local-principal",
      "counterpartPrincipalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "readClass": "principal_structural_record_read",
      "readTargetRefs": [
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
      "readBasis": "receiver_requested_collaborative_structural_records_read",
      "activationBindingPosture": "read_admitted_only_within_session_scoped_collaborative_activation",
      "inspectionPosture": "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
      "scopingPosture": "audience_bound_to_the_two_declared_principals_only",
      "truthPosture": "structural_presence_only_no_current_truth_claim",
      "grantSufficiencyPosture": "read_requires_no_grant_receiver_trusted_policy_scope",
      "laneExclusionPosture": "admission_excludes_memory_narrative_transcript_lanes",
      "counterpartScopeExclusionPosture": "counterpart_records_structural_only_no_counterpart_private_state_read",
      "revocabilityPosture": "read_revocable_by_activation_retraction",
      "authority": "none"
    },
    "readGateRecord": {
      "contractVersion": "pond-live-session-read-gate-d-p15",
      "kind": "pond-live-session-read-gate",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "readGateBasis": "receiver_session_scoped_structural_read_live_use_not_inferred",
      "requestedReadScope": "single_principal_own_structural_records",
      "readGateMetadata": {
        "opened_at_epoch_ms": 1800000060000,
        "freshness_basis": "gate_open_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "readGateReadUsePosture": "live_use_of_already_closed_structural_read_postures_no_record_read_is_performed_here",
      "collaborativeScopePosture": "not_included_collaborative_requires_their_own_live_session_lane",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "memoryLaneExclusionPosture": "read_gate_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "read_gate_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "establishmentRecord": {
      "contractVersion": "pond-live-session-establishment-d-p15",
      "kind": "pond-live-session-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "establishmentBasis": "receiver_performed_local_authentication_session_establishment_not_inferred",
      "establishedCapability": "receiver_live_session_scoped_shell_authentication",
      "establishmentMetadata": {
        "established_at_epoch_ms": 1800000060000,
        "freshness_basis": "establishment_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "establishmentScopePosture": "live_session_scoped_receiver_shell_restart_ends_establishment",
      "establishmentRevocabilityPosture": "establishment_revocable_by_receiver_retraction",
      "establishmentAttributionPosture": "establishment_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "agentScopePosture": "no_agent_session_no_agent_secret_no_agent_admission",
      "sharedSurfacePosture": "desktop_shell_shared_presentation_frame_session_stays_receiver_owned_no_scope_collapse",
      "collaborativeWideningPosture": "not_included_collaborative_reads_require_their_own_live_session_lane",
      "activatedReadScopePosture": "live_session_activates_single_principal_structural_read_postures_no_write_no_send_no_sign",
      "memoryLaneExclusionPosture": "establishment_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "establishment_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "dp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000030000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "dp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "dp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
        "verifierDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f",
        "responseDigestHex": "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "issuanceBasis": "receiver_issued_local_principal_id",
      "issuedRefPosture": "receiver_held_ref_declared_issued_no_second_identity",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "receiver_binding_established_before_issuance",
      "memoryLaneExclusionPosture": "issuance_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "issued_principal_id_revocable_by_receiver_replacement",
      "authority": "none"
    },
    "dp9MappingRecord": {
      "contractVersion": "pond-erc8004-identity-mapping-d-p9",
      "kind": "pond-erc8004-identity-mapping",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "erc8004IdentityRef": "erc8004:fixture:stage-d-p9:base-agent-id",
      "mappingBasis": "receiver_owned_explicit_mapping_binding",
      "mappingDistinctnessClaims": {
        "onchainIdentityIsPrincipalIdentity": false,
        "onchainIdentityEstablishesLocalAdmission": false,
        "onchainIdentityEstablishesAuthority": false,
        "onchainIdentityIsLocalAgentId": false
      },
      "verificationEvidence": {
        "chainIdObserved": null,
        "registryAddress": null,
        "agentId": null,
        "ownerObserved": null,
        "blockTag": null
      },
      "verificationPosture": "no_onchain_observation_performed_verification_unavailable",
      "revocabilityReplaceabilityPosture": "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
      "grantSufficiencyPosture": "mapping_insufficient_by_itself_to_establish_a_grant",
      "memoryLaneExclusionPosture": "mapping_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "mapping_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "dp10ActivationRecord": {
      "contractVersion": "pond-private-read-activation-d-p10",
      "kind": "pond-private-read-activation",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "activationBasis": "receiver_explicit_activation_not_inferred",
      "activatedCapability": "receiver_private_read_of_own_structural_records",
      "activationMetadata": {
        "activated_at_epoch_ms": 1800000060000,
        "freshness_basis": "activation_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "effectiveCapabilityScopePosture": "read_only_single_principal_own_structural_records_no_write_no_send_no_sign",
      "activationScopePosture": "session_scoped_receiver_restart_ends_activation",
      "revocabilityPosture": "activation_revocable_by_receiver_retraction",
      "trustedPolicyAttributionPosture": "activation_attributable_to_receiver_trusted_runtime_policy_no_grant",
      "grantSufficiencyPosture": "activation_requires_no_grant",
      "identityChainPosture": "activation_requires_current_verified_principal_identity_chain",
      "collaborativeReadPosture": "not_included_single_principal_reads_only",
      "memoryLaneAuthorityPosture": "activation_authorizes_no_memory_lane_crossing_or_release",
      "authorityPosture": "activation_grants_no_authority_beyond_activated_read_scope",
      "authority": "none"
    },
    "receiverRetractionRecord": null,
    "counterpartDp5CeremonyRecord": {
      "contractVersion": "pond-local-principal-binding-establishment-d-p5",
      "kind": "pond-local-principal-binding-establishment",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "bindingBasis": "receiver_owned_explicit_binding",
      "authenticationObservation": "receiver_observed_local_authentication",
      "identitySeparationPosture": "receiver_verified_agent_identity_distinct_from_principal",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "binding_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "binding_revocable_independently_of_transport_provider_or_registry",
      "authenticationPosture": "fixture_structural_only_no_real_authentication",
      "authority": "none"
    },
    "counterpartDp6ObservationRecord": {
      "contractVersion": "pond-local-principal-authentication-observation-d-p6",
      "kind": "pond-local-principal-authentication-observation",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "eventState": "receiver_observed_local_authentication_event",
      "observationChannel": "receiver_owned_local_shell_channel",
      "secretFreeFieldInventoryPosture": "inventory_secret_free_no_credential_field_observed",
      "observationMetadata": {
        "observed_at_epoch_ms": 1800000020000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "memoryLaneExclusionPosture": "observation_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "observation_grants_no_authority_membership_or_capability",
      "authenticationPosture": "fixture_structural_only_no_live_authentication",
      "authority": "none"
    },
    "counterpartDp8VerifierRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-verifier",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "verifierBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "secretFreeInventoryPosture": "verifier_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "binding_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "verifier_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "verifier_revocable_by_re_enrollment",
      "authority": "none"
    },
    "counterpartDp8ProofRecord": {
      "contractVersion": "pond-local-authentication-mechanic-d-p8",
      "kind": "pond-local-authentication-challenge-proof",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "mechanicClass": "local_knowledge_factor_challenge_response",
      "challengeDigestBinding": {
        "algorithm": "sha256",
        "saltHex": "f1e2d3c4b5a60718293a4b5c6d7e8f90",
        "verifierDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b",
        "responseDigestHex": "8c6479e60f542c9445d659c0ac7838d275f8761700373fa8c57da1fbe206509b"
      },
      "comparison": "exact_digest_match",
      "comparisonMetadata": {
        "observed_at_epoch_ms": 1800000060000,
        "freshness_basis": "source_observation_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "secretFreeInventoryPosture": "response_digest_only_no_secret_material",
      "memoryLaneExclusionPosture": "proof_excludes_memory_narrative_transcript_lanes",
      "authorityPosture": "challenge_grants_no_authority_membership_or_capability",
      "authority": "none"
    },
    "counterpartDp9IssuanceRecord": {
      "contractVersion": "pond-local-principal-id-issuance-d-p9",
      "kind": "pond-local-principal-id-issuance",
      "principalRef": "principal:fixture:stage-d-p14:counterpart-principal",
      "issuanceBasis": "not_issued",
      "issuedRefPosture": "not_issued",
      "issuanceDistinctnessClaims": {
        "isAgentId": false,
        "isErc8004AgentId": false,
        "isWalletAddress": false,
        "isGrantId": false,
        "isAttestationId": false,
        "isProviderSessionId": false,
        "isDisplayName": false
      },
      "bindingEstablishmentPosture": "not_established",
      "memoryLaneExclusionPosture": "not_established",
      "authorityPosture": "issuance_grants_no_authority_membership_or_capability",
      "revocabilityPosture": "not_established",
      "authority": "none"
    },
    "counterpartDp9MappingRecord": null,
    "counterpartDp10ActivationRecord": null,
    "evaluatedAtEpochMs": 1800000080000,
    "maximumAgeMs": 60000,
    "collaborativeReadLiveAdmission": "a collaborative live read decision asserted as prose",
    "assessment": {
      "contractVersion": "pond-collaborative-read-live-admission-decision-d-p23",
      "collaborativeLiveReadDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_collaborative_live_read_admission_decision",
      "collaborativeLiveReadState": "collaborative_live_read_not_recorded",
      "reason": "collaborative_live_read_record_invalid",
      "collaborativeLiveReadEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedCollaborativeReadRequestState": "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      "mappedReadRequestReassessmentReason": "all_collaborative_read_request_checks_satisfied",
      "mappedReadRequestFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReassessmentReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      },
      "mappedDp14ActivationState": "fixture_structural_session_scoped_collaborative_structural_read_activation",
      "mappedDp14ActivationReason": "all_collaborative_read_gate_checks_satisfied",
      "mappedDp14ReceiverChain": {
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
            "observationAgeMs": 50000
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
            "observationAgeMs": 20000
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
            "observationAgeMs": 20000
          }
        }
      },
      "mappedDp14CounterpartChain": {
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
            "observationAgeMs": 60000
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
            "observationAgeMs": 20000
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
      "mappedDp14AdmissionState": "fixture_structural_collaborative_structural_record_read_admitted",
      "mappedDp14AdmissionReason": "all_collaborative_read_admission_checks_satisfied",
      "recordedAdmittedTargetRefs": [],
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "collaborative_live_read_record_well_formed",
        "collaborative_live_read_bound_to_both_declared_pairwise_distinct_principals",
        "collaborative_live_read_basis_receiver_performed_not_inferred",
        "collaborative_read_request_currently_recorded_reassessed",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "frozen_dp14_collaborative_activation_reinspected_activated",
        "frozen_dp14_collaborative_admission_reinspected_admitted",
        "collaborative_live_read_event_within_current_session_scope",
        "collaborative_live_read_event_own_freshness_within_declared_maximum_age",
        "collaborative_live_read_refusal_postures_complete"
      ],
      "collaborativeLiveReadRetentionPosture": "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "collaborativeLiveReadEstablishesReadResultOrContent": false,
      "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry": false,
      "collaborativeLiveReadEstablishesLiveCounterpartOrChain": false,
      "collaborativeLiveReadEstablishesAgentIdentityOrAdmission": false,
      "collaborativeLiveReadEstablishesGrant": false,
      "collaborativeLiveReadEstablishesConsequenceOrExecution": false,
      "collaborativeLiveReadEstablishesAuthorityFromProse": false,
      "collaborativeLiveReadEstablishesMembershipOrRoomPresence": false,
      "collaborativeLiveReadEstablishesScope": false,
      "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState": false,
      "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent": false,
      "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId": false,
      "collaborativeLiveReadConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
]);

export const stageDP23ClaimedCollaborativeReadMatrix: readonly PondStageDP23ClaimedCollaborativeReadFixtureEntry[] = deepFreeze([
  {
    "fixtureLabel": "claimed_joint_collaborative_read_content_refused_no_result_exists",
    "claimedCollaborativeRead": {
      "claimedCollaborativeReadText": "claimed collaborative read result asserted by a counterpart is never echoed or stored",
      "claimedCollaborativeReadClass": "joint_collaborative_read_content",
      "claimedCollaborativeReadSourceRef": "counterpart:sample:claimed-collaborative-read-source"
    },
    "assessment": {
      "contractVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "claimedCollaborativeReadRefusalVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "assessmentKind": "deterministic_supplied_claimed_collaborative_read_refusal",
      "claimedCollaborativeReadState": "claimed_collaborative_read_content_not_composed",
      "reason": "pond_claimed_collaborative_joint_read_content_refused_no_collaborative_read_result_exists_this_cut",
      "claimedCollaborativeReadWallPosture": "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut",
      "satisfiedChecks": [
        "pond_claimed_collaborative_read_claim_well_formed",
        "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary"
      ],
      "unsatisfiedChecks": [
        "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime",
        "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership"
      ],
      "claimedCollaborativeReadEstablishesReadResult": false,
      "claimedCollaborativeReadEstablishesStructuralRecordEvidence": false,
      "claimedCollaborativeReadEstablishesCounterpartIdentity": false,
      "claimedCollaborativeReadEstablishesAdmission": false,
      "claimedCollaborativeReadEstablishesAuthority": false,
      "claimedCollaborativeReadContentEchoed": false,
      "claimedCollaborativeReadContentStored": false,
      "claimedCollaborativeReadSourceRefEchoed": false,
      "claimedCollaborativeReadSourceRefAcceptedAsIdentity": false,
      "claimedCollaborativeReadClassEchoed": false,
      "claimedCollaborativeReadEstablishesLiveSessionOrReadGate": false,
      "claimedCollaborativeReadEstablishesGrant": false,
      "claimedCollaborativeReadEstablishesConsequenceOrExecution": false,
      "claimedCollaborativeReadEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "claimed_counterpart_record_content_refused",
    "claimedCollaborativeRead": {
      "claimedCollaborativeReadText": "claimed collaborative read result asserted by a counterpart is never echoed or stored",
      "claimedCollaborativeReadClass": "counterpart_structural_record_content",
      "claimedCollaborativeReadSourceRef": "counterpart:sample:claimed-collaborative-read-source"
    },
    "assessment": {
      "contractVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "claimedCollaborativeReadRefusalVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "assessmentKind": "deterministic_supplied_claimed_collaborative_read_refusal",
      "claimedCollaborativeReadState": "claimed_collaborative_read_content_not_composed",
      "reason": "pond_claimed_collaborative_counterpart_record_content_refused_the_counterpart_is_structural_never_issued_no_live_counterpart_chain_exists",
      "claimedCollaborativeReadWallPosture": "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "pond_claimed_collaborative_read_claim_well_formed",
        "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary",
        "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime",
        "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership"
      ],
      "claimedCollaborativeReadEstablishesReadResult": false,
      "claimedCollaborativeReadEstablishesStructuralRecordEvidence": false,
      "claimedCollaborativeReadEstablishesCounterpartIdentity": false,
      "claimedCollaborativeReadEstablishesAdmission": false,
      "claimedCollaborativeReadEstablishesAuthority": false,
      "claimedCollaborativeReadContentEchoed": false,
      "claimedCollaborativeReadContentStored": false,
      "claimedCollaborativeReadSourceRefEchoed": false,
      "claimedCollaborativeReadSourceRefAcceptedAsIdentity": false,
      "claimedCollaborativeReadClassEchoed": false,
      "claimedCollaborativeReadEstablishesLiveSessionOrReadGate": false,
      "claimedCollaborativeReadEstablishesGrant": false,
      "claimedCollaborativeReadEstablishesConsequenceOrExecution": false,
      "claimedCollaborativeReadEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "claimed_receiver_record_content_refused",
    "claimedCollaborativeRead": {
      "claimedCollaborativeReadText": "claimed collaborative read result asserted by a counterpart is never echoed or stored",
      "claimedCollaborativeReadClass": "receiver_structural_record_content",
      "claimedCollaborativeReadSourceRef": "counterpart:sample:claimed-collaborative-read-source"
    },
    "assessment": {
      "contractVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "claimedCollaborativeReadRefusalVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "assessmentKind": "deterministic_supplied_claimed_collaborative_read_refusal",
      "claimedCollaborativeReadState": "claimed_collaborative_read_content_not_composed",
      "reason": "pond_claimed_collaborative_receiver_record_content_refused_no_record_read_is_performed_this_cut",
      "claimedCollaborativeReadWallPosture": "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "pond_claimed_collaborative_read_claim_well_formed",
        "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary",
        "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime",
        "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership"
      ],
      "claimedCollaborativeReadEstablishesReadResult": false,
      "claimedCollaborativeReadEstablishesStructuralRecordEvidence": false,
      "claimedCollaborativeReadEstablishesCounterpartIdentity": false,
      "claimedCollaborativeReadEstablishesAdmission": false,
      "claimedCollaborativeReadEstablishesAuthority": false,
      "claimedCollaborativeReadContentEchoed": false,
      "claimedCollaborativeReadContentStored": false,
      "claimedCollaborativeReadSourceRefEchoed": false,
      "claimedCollaborativeReadSourceRefAcceptedAsIdentity": false,
      "claimedCollaborativeReadClassEchoed": false,
      "claimedCollaborativeReadEstablishesLiveSessionOrReadGate": false,
      "claimedCollaborativeReadEstablishesGrant": false,
      "claimedCollaborativeReadEstablishesConsequenceOrExecution": false,
      "claimedCollaborativeReadEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "claimed_class_unknown_fail_closed",
    "claimedCollaborativeRead": {
      "claimedCollaborativeReadText": "claimed collaborative read result asserted by a counterpart is never echoed or stored",
      "claimedCollaborativeReadClass": "claimed_read_result_from_an_unknown_class",
      "claimedCollaborativeReadSourceRef": "counterpart:sample:claimed-collaborative-read-source"
    },
    "assessment": {
      "contractVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "claimedCollaborativeReadRefusalVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "assessmentKind": "deterministic_supplied_claimed_collaborative_read_refusal",
      "claimedCollaborativeReadState": "claimed_collaborative_read_content_not_composed",
      "reason": "pond_claimed_collaborative_read_class_unknown_fail_closed",
      "claimedCollaborativeReadWallPosture": "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "pond_claimed_collaborative_read_claim_well_formed",
        "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary",
        "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime",
        "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership"
      ],
      "claimedCollaborativeReadEstablishesReadResult": false,
      "claimedCollaborativeReadEstablishesStructuralRecordEvidence": false,
      "claimedCollaborativeReadEstablishesCounterpartIdentity": false,
      "claimedCollaborativeReadEstablishesAdmission": false,
      "claimedCollaborativeReadEstablishesAuthority": false,
      "claimedCollaborativeReadContentEchoed": false,
      "claimedCollaborativeReadContentStored": false,
      "claimedCollaborativeReadSourceRefEchoed": false,
      "claimedCollaborativeReadSourceRefAcceptedAsIdentity": false,
      "claimedCollaborativeReadClassEchoed": false,
      "claimedCollaborativeReadEstablishesLiveSessionOrReadGate": false,
      "claimedCollaborativeReadEstablishesGrant": false,
      "claimedCollaborativeReadEstablishesConsequenceOrExecution": false,
      "claimedCollaborativeReadEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "claimed_refused_missing_claim_key",
    "claimedCollaborativeRead": {
      "claimedCollaborativeReadClass": "joint_collaborative_read_content",
      "claimedCollaborativeReadSourceRef": "counterpart:sample:claimed-collaborative-read-source"
    },
    "assessment": {
      "contractVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "claimedCollaborativeReadRefusalVersion": "invalid",
      "assessmentKind": "deterministic_supplied_claimed_collaborative_read_refusal",
      "claimedCollaborativeReadState": "claimed_collaborative_read_content_not_composed",
      "reason": "pond_claimed_collaborative_read_claim_invalid",
      "claimedCollaborativeReadWallPosture": "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "pond_claimed_collaborative_read_claim_well_formed",
        "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary",
        "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime",
        "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership"
      ],
      "claimedCollaborativeReadEstablishesReadResult": false,
      "claimedCollaborativeReadEstablishesStructuralRecordEvidence": false,
      "claimedCollaborativeReadEstablishesCounterpartIdentity": false,
      "claimedCollaborativeReadEstablishesAdmission": false,
      "claimedCollaborativeReadEstablishesAuthority": false,
      "claimedCollaborativeReadContentEchoed": false,
      "claimedCollaborativeReadContentStored": false,
      "claimedCollaborativeReadSourceRefEchoed": false,
      "claimedCollaborativeReadSourceRefAcceptedAsIdentity": false,
      "claimedCollaborativeReadClassEchoed": false,
      "claimedCollaborativeReadEstablishesLiveSessionOrReadGate": false,
      "claimedCollaborativeReadEstablishesGrant": false,
      "claimedCollaborativeReadEstablishesConsequenceOrExecution": false,
      "claimedCollaborativeReadEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "claimed_refused_extra_forbidden_key",
    "claimedCollaborativeRead": {
      "claimedCollaborativeReadText": "claimed collaborative read result asserted by a counterpart is never echoed or stored",
      "claimedCollaborativeReadClass": "joint_collaborative_read_content",
      "claimedCollaborativeReadSourceRef": "counterpart:sample:claimed-collaborative-read-source",
      "counterpartLiveLegs": [
        "claimed live chain leg"
      ]
    },
    "assessment": {
      "contractVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "claimedCollaborativeReadRefusalVersion": "invalid",
      "assessmentKind": "deterministic_supplied_claimed_collaborative_read_refusal",
      "claimedCollaborativeReadState": "claimed_collaborative_read_content_not_composed",
      "reason": "pond_claimed_collaborative_read_claim_invalid",
      "claimedCollaborativeReadWallPosture": "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "pond_claimed_collaborative_read_claim_well_formed",
        "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary",
        "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime",
        "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership"
      ],
      "claimedCollaborativeReadEstablishesReadResult": false,
      "claimedCollaborativeReadEstablishesStructuralRecordEvidence": false,
      "claimedCollaborativeReadEstablishesCounterpartIdentity": false,
      "claimedCollaborativeReadEstablishesAdmission": false,
      "claimedCollaborativeReadEstablishesAuthority": false,
      "claimedCollaborativeReadContentEchoed": false,
      "claimedCollaborativeReadContentStored": false,
      "claimedCollaborativeReadSourceRefEchoed": false,
      "claimedCollaborativeReadSourceRefAcceptedAsIdentity": false,
      "claimedCollaborativeReadClassEchoed": false,
      "claimedCollaborativeReadEstablishesLiveSessionOrReadGate": false,
      "claimedCollaborativeReadEstablishesGrant": false,
      "claimedCollaborativeReadEstablishesConsequenceOrExecution": false,
      "claimedCollaborativeReadEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "claimed_refused_non_object_claim",
    "claimedCollaborativeRead": "a claimed joint read result asserted as prose",
    "assessment": {
      "contractVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "claimedCollaborativeReadRefusalVersion": "invalid",
      "assessmentKind": "deterministic_supplied_claimed_collaborative_read_refusal",
      "claimedCollaborativeReadState": "claimed_collaborative_read_content_not_composed",
      "reason": "pond_claimed_collaborative_read_claim_invalid",
      "claimedCollaborativeReadWallPosture": "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "pond_claimed_collaborative_read_claim_well_formed",
        "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary",
        "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime",
        "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership"
      ],
      "claimedCollaborativeReadEstablishesReadResult": false,
      "claimedCollaborativeReadEstablishesStructuralRecordEvidence": false,
      "claimedCollaborativeReadEstablishesCounterpartIdentity": false,
      "claimedCollaborativeReadEstablishesAdmission": false,
      "claimedCollaborativeReadEstablishesAuthority": false,
      "claimedCollaborativeReadContentEchoed": false,
      "claimedCollaborativeReadContentStored": false,
      "claimedCollaborativeReadSourceRefEchoed": false,
      "claimedCollaborativeReadSourceRefAcceptedAsIdentity": false,
      "claimedCollaborativeReadClassEchoed": false,
      "claimedCollaborativeReadEstablishesLiveSessionOrReadGate": false,
      "claimedCollaborativeReadEstablishesGrant": false,
      "claimedCollaborativeReadEstablishesConsequenceOrExecution": false,
      "claimedCollaborativeReadEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "claimed_refused_source_ref_distinct_never_echoed",
    "claimedCollaborativeRead": {
      "claimedCollaborativeReadText": "claimed collaborative read result asserted by a counterpart is never echoed or stored",
      "claimedCollaborativeReadClass": "joint_collaborative_read_content",
      "claimedCollaborativeReadSourceRef": "counterpart:other:distinct-claimed-collaborative-read-source"
    },
    "assessment": {
      "contractVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "claimedCollaborativeReadRefusalVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "assessmentKind": "deterministic_supplied_claimed_collaborative_read_refusal",
      "claimedCollaborativeReadState": "claimed_collaborative_read_content_not_composed",
      "reason": "pond_claimed_collaborative_joint_read_content_refused_no_collaborative_read_result_exists_this_cut",
      "claimedCollaborativeReadWallPosture": "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut",
      "satisfiedChecks": [
        "pond_claimed_collaborative_read_claim_well_formed",
        "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary"
      ],
      "unsatisfiedChecks": [
        "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime",
        "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership"
      ],
      "claimedCollaborativeReadEstablishesReadResult": false,
      "claimedCollaborativeReadEstablishesStructuralRecordEvidence": false,
      "claimedCollaborativeReadEstablishesCounterpartIdentity": false,
      "claimedCollaborativeReadEstablishesAdmission": false,
      "claimedCollaborativeReadEstablishesAuthority": false,
      "claimedCollaborativeReadContentEchoed": false,
      "claimedCollaborativeReadContentStored": false,
      "claimedCollaborativeReadSourceRefEchoed": false,
      "claimedCollaborativeReadSourceRefAcceptedAsIdentity": false,
      "claimedCollaborativeReadClassEchoed": false,
      "claimedCollaborativeReadEstablishesLiveSessionOrReadGate": false,
      "claimedCollaborativeReadEstablishesGrant": false,
      "claimedCollaborativeReadEstablishesConsequenceOrExecution": false,
      "claimedCollaborativeReadEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
  {
    "fixtureLabel": "claimed_refused_receiver_composed_prose",
    "claimedCollaborativeRead": {
      "claimedCollaborativeReadText": "Desk, we ride at dawn. Ready your structural reads.",
      "claimedCollaborativeReadClass": "joint_collaborative_read_content",
      "claimedCollaborativeReadSourceRef": "counterpart:sample:claimed-collaborative-read-source"
    },
    "assessment": {
      "contractVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "claimedCollaborativeReadRefusalVersion": "pond-claimed-collaborative-read-refusal-d-p23",
      "assessmentKind": "deterministic_supplied_claimed_collaborative_read_refusal",
      "claimedCollaborativeReadState": "claimed_collaborative_read_content_not_composed",
      "reason": "pond_claimed_collaborative_joint_read_content_refused_no_collaborative_read_result_exists_this_cut",
      "claimedCollaborativeReadWallPosture": "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut",
      "satisfiedChecks": [
        "pond_claimed_collaborative_read_claim_well_formed",
        "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary"
      ],
      "unsatisfiedChecks": [
        "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime",
        "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership"
      ],
      "claimedCollaborativeReadEstablishesReadResult": false,
      "claimedCollaborativeReadEstablishesStructuralRecordEvidence": false,
      "claimedCollaborativeReadEstablishesCounterpartIdentity": false,
      "claimedCollaborativeReadEstablishesAdmission": false,
      "claimedCollaborativeReadEstablishesAuthority": false,
      "claimedCollaborativeReadContentEchoed": false,
      "claimedCollaborativeReadContentStored": false,
      "claimedCollaborativeReadSourceRefEchoed": false,
      "claimedCollaborativeReadSourceRefAcceptedAsIdentity": false,
      "claimedCollaborativeReadClassEchoed": false,
      "claimedCollaborativeReadEstablishesLiveSessionOrReadGate": false,
      "claimedCollaborativeReadEstablishesGrant": false,
      "claimedCollaborativeReadEstablishesConsequenceOrExecution": false,
      "claimedCollaborativeReadEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
  },
]);
