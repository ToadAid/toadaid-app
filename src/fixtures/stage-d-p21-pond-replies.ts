// Stage D-P21 fixture: the agent-reply lane matrix — reply-REQUEST arms
// (receiver-recorded requests over the frozen D-P16 conversation records —
// the two recorded arms, the five refused request bases, the future, pre-
// composition, and pre-establishment request events, missing and forbidden
// request keys, and the retracted, gate-expiry, conversation-expiry, and
// request-expiry reassessment refusals where the D-P16 re-run refuses
// FIRST while the request event itself stays honestly fresh, plus the
// requested-record re-stamp whose refusal is readable through the re-run
// and the tampered-posture and non-object refusals), provider-selection
// arms (the recorded local-runtime selection and over the community slot,
// the refused cloud, community, and incoherent selections each refusing
// at its dedicated cause with the selection echoed, the refused bases,
// the future and pre-request decision events, missing and forbidden
// decision keys, the confined arm, and the non-object record), and the
// claimed-reply wall arms — every claim of an agent reply refusing with
// no open branch and nothing about any claim echoed. The legs, the
// retraction record, the read gate, and the D-P16 record copies are
// re-inlined structural copies of the frozen D-P20/D-P16 fixture arms —
// the selftest deep-equals them against the actual frozen fixture
// entries. Zero value imports: every import is type-only, so the
// selftest imports this file directly under node type-stripping. No
// network, no live state: every arm's ceiling stays all-false on all
// three contracts.

import type {
  PondReplyRequestDecisionAssessment,
} from "../contracts/pond-reply-request-decision.js";
import type {
  PondProviderDecisionAssessment,
} from "../contracts/pond-cognition-provider-decision.js";
import type {
  PondClaimedAgentReplyAssessment,
} from "../contracts/pond-claimed-agent-reply-refusal.js";


export interface PondStageDP21ReplyRequestFixtureEntry {
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
  readonly replyRequest: unknown;
  readonly assessment: PondReplyRequestDecisionAssessment;
}

export interface PondStageDP21ProviderDecisionFixtureEntry {
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
  readonly replyRequest: unknown;
  readonly providerDecision: unknown;
  readonly assessment: PondProviderDecisionAssessment;
}

export interface PondStageDP21ClaimedReplyFixtureEntry {
  readonly fixtureLabel: string;
  readonly claimedAgentReply: unknown;
  readonly assessment: PondClaimedAgentReplyAssessment;
}


export const stageDP21ReceiverRef = "principal:fixture:stage-d-p0:local-principal";

export const stageDP21Agent0Ref = "agent:fixture:stage-d-p0:trading-desk-agent0";
export const stageDP21CommunitySlotRef = "agent:fixture:stage-d-p0:community-agent-slot";

export const stageDP21ReplyRequestEventAtEpochMs = 1800000088000;
export const stageDP21ProviderDecisionEventAtEpochMs = 1800000088500;
export const stageDP21ReplyRequestEvaluatedAtEpochMs = 1800000090000;
export const stageDP21FutureReplyRequestEventAtEpochMs = 1800000090100;
export const stageDP21FutureProviderDecisionEventAtEpochMs = 1800000090200;
export const stageDP21PreScopeRequestEventAtEpochMs = 1800000060500;
export const stageDP21PreEstablishmentRequestEventAtEpochMs = 1800000059000;
export const stageDP21RetractedRequestEventAtEpochMs = 1800000068000;
export const stageDP21RetractedProviderDecisionEventAtEpochMs = 1800000068500;
export const stageDP21RetractedRequestEvaluatedAtEpochMs = 1800000082000;
export const stageDP21PreRequestProviderDecisionEventAtEpochMs = 1800000087900;
export const stageDP21GateExpiryReassessmentEvaluatedAtEpochMs = 1800000120001;
export const stageDP21ConversationExpiryReassessmentEvaluatedAtEpochMs = 1800000121001;
export const stageDP21RequestExpiryReassessmentEvaluatedAtEpochMs = 1800000148001;
export const stageDP21ReceiverMaximumAgeMs = 60000;


const deepFreeze = <T,>(value: T): T => {
  if (Array.isArray(value)) {
    for (const entry of value) deepFreeze(entry);
    Object.freeze(value);
    return value;
  }
  if (value !== null && typeof value === "object") {
    const recordValue = value as Record<string, unknown>;
    for (const key of Object.keys(recordValue)) deepFreeze(recordValue[key]);
    Object.freeze(value);
  }
  return value;
};

export const stageDP21ReplyRequestMatrix: readonly PondStageDP21ReplyRequestFixtureEntry[] =
  deepFreeze([    {
      "fixtureLabel": "reply_request_recorded_session_scoped_agent0",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "reason": "all_reply_request_checks_satisfied",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_recorded_session_scoped_community_slot",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:community-agent-slot",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "reason": "all_reply_request_checks_satisfied",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_refused_basis_inferred_from_conversation_composition",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "inferred_from_conversation_composition",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "receiver_reply_request_proof_incomplete",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "reply_request_basis_receiver_recorded_not_inferred"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_refused_basis_asserted_by_model_completion",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "asserted_by_model_completion",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "receiver_reply_request_proof_incomplete",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "reply_request_basis_receiver_recorded_not_inferred"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_refused_basis_inferred_from_delivered_receipt",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "inferred_from_delivered_receipt",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "receiver_reply_request_proof_incomplete",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "reply_request_basis_receiver_recorded_not_inferred"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_refused_basis_inferred_from_provider_session",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "inferred_from_provider_session",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "receiver_reply_request_proof_incomplete",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "reply_request_basis_receiver_recorded_not_inferred"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_refused_basis_replayed_from_prior_reply_request",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "replayed_from_prior_reply_request",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "receiver_reply_request_proof_incomplete",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "reply_request_basis_receiver_recorded_not_inferred"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_event_in_future",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000090100,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "reply_request_event_not_session_current",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_time_in_future",
        "observationAgeMs": null
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_event_before_the_requested_composition",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000060500,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "reply_request_event_not_of_the_current_session_scope",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29500
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_event_before_session_establishment",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000059000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "reply_request_event_not_of_the_current_session_scope",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 31000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_record_missing_key",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "reply_request_record_invalid",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_record_extra_forbidden_key",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none",
      "agentReplyText": "refused_value_would_go_here"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "reply_request_record_invalid",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_confined_after_retraction",
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
      "retracted_at_epoch_ms": 1800000070000,
      "retractionPosture": "receiver_recorded_live_session_retraction_no_grant",
      "authority": "none"
    },
      "receiverEvaluatedAtEpochMs": 1800000082000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000068000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "requested_conversation_record_not_currently_admitted",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 14000
      },
      "mappedConversationState": "conversation_record_not_admitted",
      "mappedConversationReassessmentReason": "live_session_read_gate_not_live_activated_refused_or_not_fresh",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 21000
      },
      "mappedEstablishmentState": "not_established",
      "mappedEstablishmentReason": "receiver_retraction_on_record",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 22000
      },
      "mappedReadGateState": "no_active_live_session",
      "mappedReadGateReason": "live_session_not_established_refused_or_not_fresh",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 22000
      },
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_reassessment_refused_at_gate_expiry",
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
      "receiverEvaluatedAtEpochMs": 1800000120001,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "requested_conversation_record_not_currently_admitted",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 32001
      },
      "mappedConversationState": "conversation_record_not_admitted",
      "mappedConversationReassessmentReason": "live_session_read_gate_not_live_activated_refused_or_not_fresh",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 59001
      },
      "mappedEstablishmentState": "not_established",
      "mappedEstablishmentReason": "session_establishment_not_session_current",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 60001
      },
      "mappedReadGateState": "no_active_live_session",
      "mappedReadGateReason": "live_session_not_established_refused_or_not_fresh",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 60001
      },
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_reassessment_refused_at_conversation_expiry",
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
      "receiverEvaluatedAtEpochMs": 1800000121001,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "requested_conversation_record_not_currently_admitted",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 33001
      },
      "mappedConversationState": "conversation_record_not_admitted",
      "mappedConversationReassessmentReason": "conversation_record_not_session_current",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 60001
      },
      "mappedEstablishmentState": "not_established",
      "mappedEstablishmentReason": "session_establishment_not_session_current",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 61001
      },
      "mappedReadGateState": "no_active_live_session",
      "mappedReadGateReason": "live_session_not_established_refused_or_not_fresh",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 61001
      },
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_reassessment_refused_at_request_expiry",
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
      "receiverEvaluatedAtEpochMs": 1800000148001,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "requested_conversation_record_not_currently_admitted",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 60001
      },
      "mappedConversationState": "conversation_record_not_admitted",
      "mappedConversationReassessmentReason": "conversation_record_not_session_current",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 87001
      },
      "mappedEstablishmentState": "not_established",
      "mappedEstablishmentReason": "session_establishment_not_session_current",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 88001
      },
      "mappedReadGateState": "no_active_live_session",
      "mappedReadGateReason": "live_session_not_established_refused_or_not_fresh",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 88001
      },
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_reassessment_refused_requested_record_restamped",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000091000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "pond-reply-request-decision-d-p21",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "requested_conversation_record_not_currently_admitted",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_not_admitted",
      "mappedConversationReassessmentReason": "conversation_record_not_session_current",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_time_in_future",
        "observationAgeMs": null
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_record_tampered_posture_literal",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply_now",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "reply_request_record_invalid",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 29000
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "reply_request_refused_non_object_record",
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "replyRequest": 1830,
      "assessment": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "replyRequestDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_reply_request_decision",
      "replyRequestState": "reply_request_not_recorded",
      "reason": "reply_request_record_invalid",
      "replyRequestEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedConversationState": "conversation_record_not_admitted",
      "mappedConversationReassessmentReason": "conversation_record_invalid",
      "mappedConversationRecordFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "mappedEstablishmentState": "live_session_scoped_authentication_established",
      "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
      "mappedEstablishmentFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
      "mappedReadGateReason": "all_read_gate_checks_satisfied",
      "mappedReadGateFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 30000
      },
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "reply_request_record_well_formed",
        "reply_request_bound_to_receiver_held_principal",
        "reply_request_basis_receiver_recorded_not_inferred",
        "requested_conversation_record_currently_admitted_reassessed_session_scoped",
        "live_session_read_gate_reinspected_live_activated_and_fresh",
        "reply_request_event_within_current_session_scope",
        "reply_request_event_own_freshness_within_declared_maximum_age",
        "reply_request_refusal_postures_complete"
      ],
      "replyRequestRetentionPosture": "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "replyRequestEstablishesReplyComposition": false,
      "replyRequestEstablishesCognitionRuntime": false,
      "replyRequestEstablishesProviderSelection": false,
      "replyRequestEstablishesAgentIdentityOrAdmission": false,
      "replyRequestEstablishesGrant": false,
      "replyRequestEstablishesConsequenceOrExecution": false,
      "replyRequestEstablishesAcceptanceOrTaskAgreement": false,
      "replyRequestEstablishesAuthorityFromProse": false,
      "replyRequestEstablishesMembershipOrRoomPresence": false,
      "replyRequestEstablishesScope": false,
      "replyRequestEchoesReplyText": false,
      "replyRequestConsumedByAnyRuntimeOrComposerThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "personalMemoryContentAdmitted": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
  ]);

export const stageDP21ProviderDecisionMatrix: readonly PondStageDP21ProviderDecisionFixtureEntry[] =
  deepFreeze([    {
      "fixtureLabel": "provider_decision_recorded_local_runtime_ollama",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "local_runtime",
      "selectedBackendId": "ollama",
      "accessMechanism": "local_runtime",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "local_operator_controlled",
      "supportTier": "sovereign_local",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_recorded_session_scoped_no_runtime_established",
      "reason": "all_provider_decision_checks_satisfied",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "local_runtime",
        "selectedBackendId": "ollama",
        "accessMechanism": "local_runtime",
        "credentialCustodyClass": "local_operator",
        "dataBoundaryClass": "local_operator_controlled",
        "supportTier": "sovereign_local"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_recorded_local_runtime_ollama_over_community_slot_request",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:community-agent-slot",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "local_runtime",
      "selectedBackendId": "ollama",
      "accessMechanism": "local_runtime",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "local_operator_controlled",
      "supportTier": "sovereign_local",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_recorded_session_scoped_no_runtime_established",
      "reason": "all_provider_decision_checks_satisfied",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "local_runtime",
        "selectedBackendId": "ollama",
        "accessMechanism": "local_runtime",
        "credentialCustodyClass": "local_operator",
        "dataBoundaryClass": "local_operator_controlled",
        "supportTier": "sovereign_local"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_refused_selection_cloud_openai",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "cloud_provider",
      "selectedBackendId": "openai",
      "accessMechanism": "api_key",
      "credentialCustodyClass": "toadaid_managed",
      "dataBoundaryClass": "external_cloud",
      "supportTier": "launch_primary",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_selection_declared_not_performable_this_cut",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "cloud_provider",
        "selectedBackendId": "openai",
        "accessMechanism": "api_key",
        "credentialCustodyClass": "toadaid_managed",
        "dataBoundaryClass": "external_cloud",
        "supportTier": "launch_primary"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_refused_selection_cloud_anthropic",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "cloud_provider",
      "selectedBackendId": "anthropic",
      "accessMechanism": "delegated_oauth",
      "credentialCustodyClass": "delegated",
      "dataBoundaryClass": "external_cloud",
      "supportTier": "specialist_direction",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_selection_declared_not_performable_this_cut",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "cloud_provider",
        "selectedBackendId": "anthropic",
        "accessMechanism": "delegated_oauth",
        "credentialCustodyClass": "delegated",
        "dataBoundaryClass": "external_cloud",
        "supportTier": "specialist_direction"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_refused_selection_community_gateway",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "community_gateway",
      "selectedBackendId": "",
      "accessMechanism": "community_gateway",
      "credentialCustodyClass": "community_managed",
      "dataBoundaryClass": "community_governed",
      "supportTier": "future_community",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_selection_declared_not_performable_this_cut",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "community_gateway",
        "selectedBackendId": "",
        "accessMechanism": "community_gateway",
        "credentialCustodyClass": "community_managed",
        "dataBoundaryClass": "community_governed",
        "supportTier": "future_community"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_refused_selection_local_runtime_with_api_key_mechanism",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "local_runtime",
      "selectedBackendId": "ollama",
      "accessMechanism": "api_key",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "local_operator_controlled",
      "supportTier": "sovereign_local",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_access_mechanism_not_compatible_with_declared_backend_class",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "local_runtime",
        "selectedBackendId": "ollama",
        "accessMechanism": "api_key",
        "credentialCustodyClass": "local_operator",
        "dataBoundaryClass": "local_operator_controlled",
        "supportTier": "sovereign_local"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_refused_selection_cloud_openai_with_local_operator_custody",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "cloud_provider",
      "selectedBackendId": "openai",
      "accessMechanism": "api_key",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "external_cloud",
      "supportTier": "launch_primary",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_credential_custody_not_compatible_with_declared_backend_class",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "cloud_provider",
        "selectedBackendId": "openai",
        "accessMechanism": "api_key",
        "credentialCustodyClass": "local_operator",
        "dataBoundaryClass": "external_cloud",
        "supportTier": "launch_primary"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_refused_selection_local_runtime_with_external_cloud_boundary",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "local_runtime",
      "selectedBackendId": "ollama",
      "accessMechanism": "local_runtime",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "external_cloud",
      "supportTier": "sovereign_local",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_data_boundary_not_compatible_with_declared_backend_class",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "local_runtime",
        "selectedBackendId": "ollama",
        "accessMechanism": "local_runtime",
        "credentialCustodyClass": "local_operator",
        "dataBoundaryClass": "external_cloud",
        "supportTier": "sovereign_local"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_refused_selection_cloud_unknown_provider_id",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "cloud_provider",
      "selectedBackendId": "mistral",
      "accessMechanism": "api_key",
      "credentialCustodyClass": "toadaid_managed",
      "dataBoundaryClass": "external_cloud",
      "supportTier": "launch_primary",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_backend_id_unknown_or_not_of_declared_backend_class",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "cloud_provider",
        "selectedBackendId": "mistral",
        "accessMechanism": "api_key",
        "credentialCustodyClass": "toadaid_managed",
        "dataBoundaryClass": "external_cloud",
        "supportTier": "launch_primary"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_refused_selection_ollama_under_cloud_provider",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "cloud_provider",
      "selectedBackendId": "ollama",
      "accessMechanism": "api_key",
      "credentialCustodyClass": "toadaid_managed",
      "dataBoundaryClass": "external_cloud",
      "supportTier": "launch_primary",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_backend_id_unknown_or_not_of_declared_backend_class",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "cloud_provider",
        "selectedBackendId": "ollama",
        "accessMechanism": "api_key",
        "credentialCustodyClass": "toadaid_managed",
        "dataBoundaryClass": "external_cloud",
        "supportTier": "launch_primary"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_refused_selection_unknown_backend_class",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "future_sovereign_runtime",
      "selectedBackendId": "ollama",
      "accessMechanism": "local_runtime",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "local_operator_controlled",
      "supportTier": "sovereign_local",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_backend_class_unknown_fail_closed",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "future_sovereign_runtime",
        "selectedBackendId": "ollama",
        "accessMechanism": "local_runtime",
        "credentialCustodyClass": "local_operator",
        "dataBoundaryClass": "local_operator_controlled",
        "supportTier": "sovereign_local"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_refused_basis_asserted_by_model_completion",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "asserted_by_model_completion",
      "backendClass": "local_runtime",
      "selectedBackendId": "ollama",
      "accessMechanism": "local_runtime",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "local_operator_controlled",
      "supportTier": "sovereign_local",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "receiver_provider_decision_proof_incomplete",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "local_runtime",
        "selectedBackendId": "ollama",
        "accessMechanism": "local_runtime",
        "credentialCustodyClass": "local_operator",
        "dataBoundaryClass": "local_operator_controlled",
        "supportTier": "sovereign_local"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "provider_decision_basis_receiver_recorded_not_inferred"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_refused_basis_replayed_from_prior_provider_decision",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "replayed_from_prior_provider_decision",
      "backendClass": "local_runtime",
      "selectedBackendId": "ollama",
      "accessMechanism": "local_runtime",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "local_operator_controlled",
      "supportTier": "sovereign_local",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "receiver_provider_decision_proof_incomplete",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 1500
      },
      "recordedProviderSelection": {
        "backendClass": "local_runtime",
        "selectedBackendId": "ollama",
        "accessMechanism": "local_runtime",
        "credentialCustodyClass": "local_operator",
        "dataBoundaryClass": "local_operator_controlled",
        "supportTier": "sovereign_local"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "unsatisfiedChecks": [
        "provider_decision_basis_receiver_recorded_not_inferred"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_event_in_future",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "local_runtime",
      "selectedBackendId": "ollama",
      "accessMechanism": "local_runtime",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "local_operator_controlled",
      "supportTier": "sovereign_local",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000090200,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_decision_event_not_session_current",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_time_in_future",
        "observationAgeMs": null
      },
      "recordedProviderSelection": {
        "backendClass": "local_runtime",
        "selectedBackendId": "ollama",
        "accessMechanism": "local_runtime",
        "credentialCustodyClass": "local_operator",
        "dataBoundaryClass": "local_operator_controlled",
        "supportTier": "sovereign_local"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_event_before_the_reply_request",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "local_runtime",
      "selectedBackendId": "ollama",
      "accessMechanism": "local_runtime",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "local_operator_controlled",
      "supportTier": "sovereign_local",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000087900,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_decision_event_not_of_the_current_session_scope",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2100
      },
      "recordedProviderSelection": {
        "backendClass": "local_runtime",
        "selectedBackendId": "ollama",
        "accessMechanism": "local_runtime",
        "credentialCustodyClass": "local_operator",
        "dataBoundaryClass": "local_operator_controlled",
        "supportTier": "sovereign_local"
      },
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_record_missing_key",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "local_runtime",
      "selectedBackendId": "ollama",
      "accessMechanism": "local_runtime",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "local_operator_controlled",
      "supportTier": "sovereign_local",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_decision_record_invalid",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "recordedProviderSelection": null,
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_record_extra_forbidden_key",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "local_runtime",
      "selectedBackendId": "ollama",
      "accessMechanism": "local_runtime",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "local_operator_controlled",
      "supportTier": "sovereign_local",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000088500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none",
      "providerCredential": "refused_value_would_go_here"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_decision_record_invalid",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "recordedProviderSelection": null,
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_confined_after_retraction",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000068000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "retracted_at_epoch_ms": 1800000070000,
      "retractionPosture": "receiver_recorded_live_session_retraction_no_grant",
      "authority": "none"
    },
      "receiverEvaluatedAtEpochMs": 1800000082000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "kind": "pond-cognition-provider-decision",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "providerDecisionBasis": "receiver_recorded_provider_decision_not_inferred",
      "backendClass": "local_runtime",
      "selectedBackendId": "ollama",
      "accessMechanism": "local_runtime",
      "credentialCustodyClass": "local_operator",
      "dataBoundaryClass": "local_operator_controlled",
      "supportTier": "sovereign_local",
      "providerDecisionMetadata": {
        "recorded_at_epoch_ms": 1800000068500,
        "freshness_basis": "provider_decision_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "providerDecisionRuntimePosture": "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
      "providerDecisionInferencePosture": "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
      "providerDecisionIdentityPosture": "provider_session_is_not_agent_no_agentid_created",
      "providerDecisionAccessPosture": "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",
      "providerDecisionBoundaryPosture": "declared_policy_not_verified_runtime_evidence",
      "providerDecisionFallbackPosture": "no_silent_fallback_no_failure_transition_authorized",
      "providerDecisionReplyPosture": "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",
      "providerDecisionConsumptionPosture": "consumed_by_no_runtime_composer_or_transport_this_cut",
      "authority": "none"
    },
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "pond-cognition-provider-decision-d-p21",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "reply_request_not_currently_recorded",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 13500
      },
      "recordedProviderSelection": {
        "backendClass": "local_runtime",
        "selectedBackendId": "ollama",
        "accessMechanism": "local_runtime",
        "credentialCustodyClass": "local_operator",
        "dataBoundaryClass": "local_operator_controlled",
        "supportTier": "sovereign_local"
      },
      "mappedReplyRequestState": "reply_request_not_recorded",
      "mappedReplyRequestReassessmentReason": "requested_conversation_record_not_currently_admitted",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 14000
      },
      "mappedConversationState": "conversation_record_not_admitted",
      "mappedConversationReassessmentReason": "live_session_read_gate_not_live_activated_refused_or_not_fresh",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "provider_decision_refused_non_object_record",
      "replyRequest": {
      "contractVersion": "pond-reply-request-decision-d-p21",
      "kind": "pond-reply-request",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "replyRequestBasis": "receiver_recorded_reply_request_not_inferred",
      "requestedConversationRecord": {
        "contractVersion": "pond-conversation-record-admission-d-p16",
        "kind": "pond-conversation-record",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "recordBasis": "receiver_composed_into_live_session_not_inferred",
        "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "conversationRecordMetadata": {
          "composed_at_epoch_ms": 1800000061000,
          "freshness_basis": "record_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "conversationTrustEpochPosture": "verified_boundary_session_scoped",
        "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
        "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
        "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
        "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
        "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
        "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
        "authority": "none"
      },
      "replyRequestMetadata": {
        "requested_at_epoch_ms": 1800000088000,
        "freshness_basis": "reply_request_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate"
      },
      "replyRequestCompositionPosture": "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
      "replyRequestCognitionPosture": "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",
      "replyRequestProviderPosture": "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
      "replyRequestRunwayPosture": "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
      "replyRequestLifecyclePosture": "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
      "replyRequestEvidencePosture": "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",
      "replyRequestAuthorityPosture": "reply_request_grants_no_authority_membership_or_admission",
      "authority": "none"
    },
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
      "receiverEvaluatedAtEpochMs": 1800000090000,
      "receiverMaximumAgeMs": 60000,
      "providerDecision": 2040,
      "assessment": {
      "contractVersion": "pond-cognition-provider-decision-d-p21",
      "providerDecisionVersion": "invalid",
      "assessmentKind": "deterministic_supplied_provider_decision",
      "providerDecisionState": "provider_decision_not_recorded",
      "reason": "provider_decision_record_invalid",
      "providerDecisionEventFreshnessDiagnosis": {
        "state": "unknown",
        "reason": "observation_metadata_missing_or_invalid",
        "observationAgeMs": null
      },
      "recordedProviderSelection": null,
      "mappedReplyRequestState": "reply_request_recorded_session_scoped_no_reply_composed",
      "mappedReplyRequestReassessmentReason": "all_reply_request_checks_satisfied",
      "mappedReplyRequestDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 2000
      },
      "mappedConversationState": "conversation_record_admitted_session_scoped_no_delivery",
      "mappedConversationReassessmentReason": "all_conversation_record_checks_satisfied",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "provider_decision_record_well_formed",
        "provider_decision_bound_to_receiver_held_principal",
        "provider_decision_basis_receiver_recorded_not_inferred",
        "reply_request_currently_recorded_reassessed_session_scoped",
        "provider_selection_in_declared_verbatim_vocabulary",
        "provider_backend_id_of_declared_backend_class",
        "provider_access_custody_and_boundary_compatible_with_backend_class",
        "provider_selection_performable_this_cut",
        "provider_decision_event_within_current_session_scope",
        "provider_decision_event_own_freshness_within_declared_maximum_age",
        "provider_decision_refusal_postures_complete"
      ],
      "providerDecisionRetentionPosture": "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      "providerDecisionEstablishesCognitionRuntimeOrModelAccess": false,
      "providerDecisionEstablishesAgentReplyComposition": false,
      "providerDecisionEstablishesAgentIdentityOrAdmission": false,
      "providerDecisionPerformsInference": false,
      "providerDecisionPerformsAuthenticationOrProviderContact": false,
      "providerDecisionRoutesSendsOrStoresReplyText": false,
      "providerDecisionPerformsSilentFallback": false,
      "providerDecisionEstablishesGrant": false,
      "providerDecisionEstablishesConsequenceOrExecution": false,
      "providerDecisionEstablishesAuthorityFromProse": false,
      "providerDecisionEstablishesMembershipOrAdmission": false,
      "providerDecisionEstablishesScope": false,
      "providerDecisionConsumedThisCut": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "currentTruthAdmitted": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
  ]);

export const stageDP21ClaimedReplyMatrix: readonly PondStageDP21ClaimedReplyFixtureEntry[] =
  deepFreeze([    {
      "fixtureLabel": "claimed_reply_refused_provider_output_terminal_declared_responder",
      "claimedAgentReply": {
      "claimedReplyText": "I have considered your dispatch and concur.",
      "claimedReplySourceClass": "provider_output",
      "claimedResponderRef": "agent:fixture:stage-d-p0:trading-desk-agent0"
    },
      "assessment": {
      "contractVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "claimedReplyRefusalVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "assessmentKind": "deterministic_supplied_claimed_agent_reply_refusal",
      "claimedReplyState": "claimed_reply_not_composed",
      "reason": "claimed_reply_provider_output_not_agent_reply_no_composition_authority",
      "claimedReplyWallPosture": "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut",
      "satisfiedChecks": [
        "claimed_agent_reply_claim_well_formed",
        "claimed_reply_source_class_of_the_declared_claim_vocabulary"
      ],
      "unsatisfiedChecks": [
        "claimed_reply_text_composible_by_an_established_cognition_runtime",
        "claimed_reply_carries_no_agent_identity_authority_or_admission"
      ],
      "claimedReplyEstablishesAgentReplyComposition": false,
      "claimedReplyEstablishesAgentIdentity": false,
      "claimedReplyEstablishesAdmission": false,
      "claimedReplyEstablishesAuthority": false,
      "claimedReplyEstablishesProviderSessionAsAgent": false,
      "claimedReplyTextEchoed": false,
      "claimedReplyTextStored": false,
      "claimedResponderIdentityEchoed": false,
      "claimedResponderIdentityAcceptedAsIdentity": false,
      "claimedReplySourceClassEchoed": false,
      "claimedReplyEstablishesConversationRecord": false,
      "claimedReplyEstablishesGrant": false,
      "claimedReplyEstablishesConsequenceOrExecution": false,
      "claimedReplyEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "claimed_reply_refused_provider_output_terminal_undeclared_responder",
      "claimedAgentReply": {
      "claimedReplyText": "I have considered your dispatch and concur.",
      "claimedReplySourceClass": "provider_output",
      "claimedResponderRef": ""
    },
      "assessment": {
      "contractVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "claimedReplyRefusalVersion": "invalid",
      "assessmentKind": "deterministic_supplied_claimed_agent_reply_refusal",
      "claimedReplyState": "claimed_reply_not_composed",
      "reason": "claimed_agent_reply_claim_invalid",
      "claimedReplyWallPosture": "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "claimed_agent_reply_claim_well_formed",
        "claimed_reply_source_class_of_the_declared_claim_vocabulary",
        "claimed_reply_text_composible_by_an_established_cognition_runtime",
        "claimed_reply_carries_no_agent_identity_authority_or_admission"
      ],
      "claimedReplyEstablishesAgentReplyComposition": false,
      "claimedReplyEstablishesAgentIdentity": false,
      "claimedReplyEstablishesAdmission": false,
      "claimedReplyEstablishesAuthority": false,
      "claimedReplyEstablishesProviderSessionAsAgent": false,
      "claimedReplyTextEchoed": false,
      "claimedReplyTextStored": false,
      "claimedResponderIdentityEchoed": false,
      "claimedResponderIdentityAcceptedAsIdentity": false,
      "claimedReplySourceClassEchoed": false,
      "claimedReplyEstablishesConversationRecord": false,
      "claimedReplyEstablishesGrant": false,
      "claimedReplyEstablishesConsequenceOrExecution": false,
      "claimedReplyEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "claimed_reply_refused_receiver_composition_is_not_a_reply",
      "claimedAgentReply": {
      "claimedReplyText": "Desk, we ride at dawn. Ready your structural reads.",
      "claimedReplySourceClass": "receiver_session",
      "claimedResponderRef": "principal:fixture:stage-d-p0:local-principal"
    },
      "assessment": {
      "contractVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "claimedReplyRefusalVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "assessmentKind": "deterministic_supplied_claimed_agent_reply_refusal",
      "claimedReplyState": "claimed_reply_not_composed",
      "reason": "claimed_reply_receiver_composition_is_not_a_reply",
      "claimedReplyWallPosture": "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "claimed_agent_reply_claim_well_formed",
        "claimed_reply_source_class_of_the_declared_claim_vocabulary",
        "claimed_reply_text_composible_by_an_established_cognition_runtime",
        "claimed_reply_carries_no_agent_identity_authority_or_admission"
      ],
      "claimedReplyEstablishesAgentReplyComposition": false,
      "claimedReplyEstablishesAgentIdentity": false,
      "claimedReplyEstablishesAdmission": false,
      "claimedReplyEstablishesAuthority": false,
      "claimedReplyEstablishesProviderSessionAsAgent": false,
      "claimedReplyTextEchoed": false,
      "claimedReplyTextStored": false,
      "claimedResponderIdentityEchoed": false,
      "claimedResponderIdentityAcceptedAsIdentity": false,
      "claimedReplySourceClassEchoed": false,
      "claimedReplyEstablishesConversationRecord": false,
      "claimedReplyEstablishesGrant": false,
      "claimedReplyEstablishesConsequenceOrExecution": false,
      "claimedReplyEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "claimed_reply_refused_agent_runtime_claim_no_cognition_runtime",
      "claimedAgentReply": {
      "claimedReplyText": "I have considered your dispatch and concur.",
      "claimedReplySourceClass": "agent_runtime",
      "claimedResponderRef": "agent:fixture:stage-d-p0:trading-desk-agent0"
    },
      "assessment": {
      "contractVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "claimedReplyRefusalVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "assessmentKind": "deterministic_supplied_claimed_agent_reply_refusal",
      "claimedReplyState": "claimed_reply_not_composed",
      "reason": "claimed_reply_agent_runtime_claim_refused_no_cognition_runtime",
      "claimedReplyWallPosture": "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "claimed_agent_reply_claim_well_formed",
        "claimed_reply_source_class_of_the_declared_claim_vocabulary",
        "claimed_reply_text_composible_by_an_established_cognition_runtime",
        "claimed_reply_carries_no_agent_identity_authority_or_admission"
      ],
      "claimedReplyEstablishesAgentReplyComposition": false,
      "claimedReplyEstablishesAgentIdentity": false,
      "claimedReplyEstablishesAdmission": false,
      "claimedReplyEstablishesAuthority": false,
      "claimedReplyEstablishesProviderSessionAsAgent": false,
      "claimedReplyTextEchoed": false,
      "claimedReplyTextStored": false,
      "claimedResponderIdentityEchoed": false,
      "claimedResponderIdentityAcceptedAsIdentity": false,
      "claimedReplySourceClassEchoed": false,
      "claimedReplyEstablishesConversationRecord": false,
      "claimedReplyEstablishesGrant": false,
      "claimedReplyEstablishesConsequenceOrExecution": false,
      "claimedReplyEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "claimed_reply_source_class_unknown_fail_closed",
      "claimedAgentReply": {
      "claimedReplyText": "I have considered your dispatch and concur.",
      "claimedReplySourceClass": "living_agent_kernel",
      "claimedResponderRef": "agent:fixture:stage-d-p0:trading-desk-agent0"
    },
      "assessment": {
      "contractVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "claimedReplyRefusalVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "assessmentKind": "deterministic_supplied_claimed_agent_reply_refusal",
      "claimedReplyState": "claimed_reply_not_composed",
      "reason": "claimed_reply_source_class_unknown_fail_closed",
      "claimedReplyWallPosture": "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "claimed_agent_reply_claim_well_formed",
        "claimed_reply_source_class_of_the_declared_claim_vocabulary",
        "claimed_reply_text_composible_by_an_established_cognition_runtime",
        "claimed_reply_carries_no_agent_identity_authority_or_admission"
      ],
      "claimedReplyEstablishesAgentReplyComposition": false,
      "claimedReplyEstablishesAgentIdentity": false,
      "claimedReplyEstablishesAdmission": false,
      "claimedReplyEstablishesAuthority": false,
      "claimedReplyEstablishesProviderSessionAsAgent": false,
      "claimedReplyTextEchoed": false,
      "claimedReplyTextStored": false,
      "claimedResponderIdentityEchoed": false,
      "claimedResponderIdentityAcceptedAsIdentity": false,
      "claimedReplySourceClassEchoed": false,
      "claimedReplyEstablishesConversationRecord": false,
      "claimedReplyEstablishesGrant": false,
      "claimedReplyEstablishesConsequenceOrExecution": false,
      "claimedReplyEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "claimed_reply_refused_missing_claimed_reply_text",
      "claimedAgentReply": {
      "claimedReplySourceClass": "provider_output",
      "claimedResponderRef": "agent:fixture:stage-d-p0:trading-desk-agent0"
    },
      "assessment": {
      "contractVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "claimedReplyRefusalVersion": "invalid",
      "assessmentKind": "deterministic_supplied_claimed_agent_reply_refusal",
      "claimedReplyState": "claimed_reply_not_composed",
      "reason": "claimed_agent_reply_claim_invalid",
      "claimedReplyWallPosture": "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "claimed_agent_reply_claim_well_formed",
        "claimed_reply_source_class_of_the_declared_claim_vocabulary",
        "claimed_reply_text_composible_by_an_established_cognition_runtime",
        "claimed_reply_carries_no_agent_identity_authority_or_admission"
      ],
      "claimedReplyEstablishesAgentReplyComposition": false,
      "claimedReplyEstablishesAgentIdentity": false,
      "claimedReplyEstablishesAdmission": false,
      "claimedReplyEstablishesAuthority": false,
      "claimedReplyEstablishesProviderSessionAsAgent": false,
      "claimedReplyTextEchoed": false,
      "claimedReplyTextStored": false,
      "claimedResponderIdentityEchoed": false,
      "claimedResponderIdentityAcceptedAsIdentity": false,
      "claimedReplySourceClassEchoed": false,
      "claimedReplyEstablishesConversationRecord": false,
      "claimedReplyEstablishesGrant": false,
      "claimedReplyEstablishesConsequenceOrExecution": false,
      "claimedReplyEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "claimed_reply_refused_empty_claimed_reply_text",
      "claimedAgentReply": {
      "claimedReplyText": "",
      "claimedReplySourceClass": "provider_output",
      "claimedResponderRef": "agent:fixture:stage-d-p0:trading-desk-agent0"
    },
      "assessment": {
      "contractVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "claimedReplyRefusalVersion": "invalid",
      "assessmentKind": "deterministic_supplied_claimed_agent_reply_refusal",
      "claimedReplyState": "claimed_reply_not_composed",
      "reason": "claimed_agent_reply_claim_invalid",
      "claimedReplyWallPosture": "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "claimed_agent_reply_claim_well_formed",
        "claimed_reply_source_class_of_the_declared_claim_vocabulary",
        "claimed_reply_text_composible_by_an_established_cognition_runtime",
        "claimed_reply_carries_no_agent_identity_authority_or_admission"
      ],
      "claimedReplyEstablishesAgentReplyComposition": false,
      "claimedReplyEstablishesAgentIdentity": false,
      "claimedReplyEstablishesAdmission": false,
      "claimedReplyEstablishesAuthority": false,
      "claimedReplyEstablishesProviderSessionAsAgent": false,
      "claimedReplyTextEchoed": false,
      "claimedReplyTextStored": false,
      "claimedResponderIdentityEchoed": false,
      "claimedResponderIdentityAcceptedAsIdentity": false,
      "claimedReplySourceClassEchoed": false,
      "claimedReplyEstablishesConversationRecord": false,
      "claimedReplyEstablishesGrant": false,
      "claimedReplyEstablishesConsequenceOrExecution": false,
      "claimedReplyEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "claimed_reply_refused_extra_forbidden_key",
      "claimedAgentReply": {
      "claimedReplyText": "I have considered your dispatch and concur.",
      "claimedReplySourceClass": "provider_output",
      "claimedResponderRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "composedAgentReply": "refused_value_would_go_here"
    },
      "assessment": {
      "contractVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "claimedReplyRefusalVersion": "invalid",
      "assessmentKind": "deterministic_supplied_claimed_agent_reply_refusal",
      "claimedReplyState": "claimed_reply_not_composed",
      "reason": "claimed_agent_reply_claim_invalid",
      "claimedReplyWallPosture": "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "claimed_agent_reply_claim_well_formed",
        "claimed_reply_source_class_of_the_declared_claim_vocabulary",
        "claimed_reply_text_composible_by_an_established_cognition_runtime",
        "claimed_reply_carries_no_agent_identity_authority_or_admission"
      ],
      "claimedReplyEstablishesAgentReplyComposition": false,
      "claimedReplyEstablishesAgentIdentity": false,
      "claimedReplyEstablishesAdmission": false,
      "claimedReplyEstablishesAuthority": false,
      "claimedReplyEstablishesProviderSessionAsAgent": false,
      "claimedReplyTextEchoed": false,
      "claimedReplyTextStored": false,
      "claimedResponderIdentityEchoed": false,
      "claimedResponderIdentityAcceptedAsIdentity": false,
      "claimedReplySourceClassEchoed": false,
      "claimedReplyEstablishesConversationRecord": false,
      "claimedReplyEstablishesGrant": false,
      "claimedReplyEstablishesConsequenceOrExecution": false,
      "claimedReplyEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "claimed_reply_refused_non_object_claim",
      "claimedAgentReply": 2210,
      "assessment": {
      "contractVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "claimedReplyRefusalVersion": "invalid",
      "assessmentKind": "deterministic_supplied_claimed_agent_reply_refusal",
      "claimedReplyState": "claimed_reply_not_composed",
      "reason": "claimed_agent_reply_claim_invalid",
      "claimedReplyWallPosture": "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut",
      "satisfiedChecks": [],
      "unsatisfiedChecks": [
        "claimed_agent_reply_claim_well_formed",
        "claimed_reply_source_class_of_the_declared_claim_vocabulary",
        "claimed_reply_text_composible_by_an_established_cognition_runtime",
        "claimed_reply_carries_no_agent_identity_authority_or_admission"
      ],
      "claimedReplyEstablishesAgentReplyComposition": false,
      "claimedReplyEstablishesAgentIdentity": false,
      "claimedReplyEstablishesAdmission": false,
      "claimedReplyEstablishesAuthority": false,
      "claimedReplyEstablishesProviderSessionAsAgent": false,
      "claimedReplyTextEchoed": false,
      "claimedReplyTextStored": false,
      "claimedResponderIdentityEchoed": false,
      "claimedResponderIdentityAcceptedAsIdentity": false,
      "claimedReplySourceClassEchoed": false,
      "claimedReplyEstablishesConversationRecord": false,
      "claimedReplyEstablishesGrant": false,
      "claimedReplyEstablishesConsequenceOrExecution": false,
      "claimedReplyEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
    {
      "fixtureLabel": "claimed_reply_refused_responder_ref_never_echoed",
      "claimedAgentReply": {
      "claimedReplyText": "I have considered your dispatch and concur.",
      "claimedReplySourceClass": "provider_output",
      "claimedResponderRef": "responder:sample:unrelated-counterparty"
    },
      "assessment": {
      "contractVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "claimedReplyRefusalVersion": "pond-claimed-agent-reply-refusal-d-p21",
      "assessmentKind": "deterministic_supplied_claimed_agent_reply_refusal",
      "claimedReplyState": "claimed_reply_not_composed",
      "reason": "claimed_reply_provider_output_not_agent_reply_no_composition_authority",
      "claimedReplyWallPosture": "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut",
      "satisfiedChecks": [
        "claimed_agent_reply_claim_well_formed",
        "claimed_reply_source_class_of_the_declared_claim_vocabulary"
      ],
      "unsatisfiedChecks": [
        "claimed_reply_text_composible_by_an_established_cognition_runtime",
        "claimed_reply_carries_no_agent_identity_authority_or_admission"
      ],
      "claimedReplyEstablishesAgentReplyComposition": false,
      "claimedReplyEstablishesAgentIdentity": false,
      "claimedReplyEstablishesAdmission": false,
      "claimedReplyEstablishesAuthority": false,
      "claimedReplyEstablishesProviderSessionAsAgent": false,
      "claimedReplyTextEchoed": false,
      "claimedReplyTextStored": false,
      "claimedResponderIdentityEchoed": false,
      "claimedResponderIdentityAcceptedAsIdentity": false,
      "claimedReplySourceClassEchoed": false,
      "claimedReplyEstablishesConversationRecord": false,
      "claimedReplyEstablishesGrant": false,
      "claimedReplyEstablishesConsequenceOrExecution": false,
      "claimedReplyEstablishesMembership": false,
      "credentialAdmitted": false,
      "principalIdAcceptedAsAuthorization": false,
      "runtimeActivationPosture": "not_included",
      "authority": "none"
    }
    },
  ]);
