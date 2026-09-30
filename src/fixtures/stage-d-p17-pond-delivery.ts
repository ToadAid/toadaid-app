// Stage D-P17 fixture: the delivery lane matrix — the delivery-candidate
// decision arms (the admitted delivered-record candidate; five refused
// inference bases; undeclared destination; destination-vs-record tie
// break; future and pre-scope intent events; a stale delivered record; a
// tampered refusal posture; missing and forbidden extra keys; the
// retracted-session and gate-expiry and intent-expiry confinements; the
// re-stamped delivered copy). The legs and the delivered-record copies
// are re-inlined structural copies of the frozen D-P16 fixture arms and
// the frozen D-P15 retraction record — the selftest deep-equals them
// against the actual frozen fixture entries. Zero value imports: every
// import is type-only, so the selftest imports this file directly under
// node type-stripping. No network, no live state: every arm's ceiling
// stays all-false and this cut's assessments never carry a frozen
// D-P0…D-P15 tuple name.

import type {
  PondDeliveryCandidateDecisionAssessment,
} from "../contracts/pond-delivery-candidate-decision.js";

export interface PondStageDP17DecisionFixtureEntry {
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
  readonly deliveryCandidate: unknown;
  readonly assessment: PondDeliveryCandidateDecisionAssessment;
}

// --- Pinned receiver, destination, and clock constants (each tied to the
// frozen D-P16 fixture pins by the selftest) ---

export const stageDP17ReceiverRef = "principal:fixture:stage-d-p0:local-principal";

export const stageDP17Agent0Ref = "agent:fixture:stage-d-p0:trading-desk-agent0";
export const stageDP17CommunitySlotRef = "agent:fixture:stage-d-p0:community-agent-slot";
export const stageDP17ProjectSlotRef = "agent:fixture:stage-d-p0:project-agent-slot";
export const stageDP17UndeclaredDestinationRef = "agent:stage-d-p17:undeclared-agent";

export const stageDP17EstablishedAtEpochMs = 1800000060000;
export const stageDP17ComposedAtEpochMs = 1800000061000;
export const stageDP17RecordedIntentAtEpochMs = 1800000081000;
export const stageDP17EvaluatedAtEpochMs = 1800000090000;
export const stageDP17GateExpiryEvaluatedAtEpochMs = 1800000120001;
export const stageDP17IntentExpiryEvaluatedAtEpochMs = 1800000141001;
export const stageDP17RetractedEvaluatedAtEpochMs = 1800000082000;
export const stageDP17StaleComposedAtEpochMs = 1799999999999;
export const stageDP17ReceiverMaximumAgeMs = 60000;

export const stageDP17ReadGateRecord = {
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
  };

const legs = Object.freeze({
  establishmentRecord: Object.freeze({
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
    }) as unknown,
  dp5CeremonyRecord: Object.freeze({
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
    }) as unknown,
  dp6ObservationRecord: Object.freeze({
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
    }) as unknown,
  dp8VerifierRecord: Object.freeze({
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
    }) as unknown,
  dp8ProofRecord: Object.freeze({
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
    }) as unknown,
  dp9IssuanceRecord: Object.freeze({
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
    }) as unknown,
  dp9MappingRecord: Object.freeze({
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
    }) as unknown,
  dp10ActivationRecord: Object.freeze({
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
    }) as unknown,
});

const retractionRecord = Object.freeze({
    "contractVersion": "pond-live-session-retraction-d-p15",
    "kind": "pond-live-session-retraction",
    "retracted_at_epoch_ms": 1800000070000,
    "retractionPosture": "receiver_recorded_live_session_retraction_no_grant",
    "authority": "none"
  }) as unknown;

// --- Delivery-candidate decision arms ---

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
export const stageDP17DecisionMatrix: readonly PondStageDP17DecisionFixtureEntry[] =
  deepFreeze([
    {
      fixtureLabel: "delivery_candidate_admitted",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "reason": "all_delivery_candidate_checks_satisfied",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 9000
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "unsatisfiedChecks": [],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_inferred_from_message_composition",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "inferred_from_message_composition",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "receiver_delivery_candidate_proof_incomplete",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 9000
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "unsatisfiedChecks": [
          "delivery_basis_receiver_recorded_not_inferred"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_inferred_from_channel_visibility",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "inferred_from_channel_visibility",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "receiver_delivery_candidate_proof_incomplete",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 9000
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "unsatisfiedChecks": [
          "delivery_basis_receiver_recorded_not_inferred"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_asserted_by_model_completion",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "asserted_by_model_completion",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "receiver_delivery_candidate_proof_incomplete",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 9000
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "unsatisfiedChecks": [
          "delivery_basis_receiver_recorded_not_inferred"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_inferred_from_room_presence",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "inferred_from_room_presence",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "receiver_delivery_candidate_proof_incomplete",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 9000
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "unsatisfiedChecks": [
          "delivery_basis_receiver_recorded_not_inferred"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_replayed_from_prior_delivery_decision",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "replayed_from_prior_delivery_decision",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "receiver_delivery_candidate_proof_incomplete",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 9000
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "unsatisfiedChecks": [
          "delivery_basis_receiver_recorded_not_inferred"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_destination_undeclared",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:stage-d-p17:undeclared-agent",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "delivery_destination_not_declared",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 9000
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_destination_not_bound_to_record",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "receiver_delivery_candidate_proof_incomplete",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 9000
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "unsatisfiedChecks": [
          "delivery_destination_bound_to_delivered_record"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_intent_event_in_future",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000090100,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "delivery_intent_not_session_current",
        "deliveryIntentFreshnessDiagnosis": {
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_intent_before_session_scope",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000055000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "delivery_intent_not_of_the_current_session_scope",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 35000
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_delivered_record_stale",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
          "contractVersion": "pond-conversation-record-admission-d-p16",
          "kind": "pond-conversation-record",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "recordBasis": "receiver_composed_into_live_session_not_inferred",
          "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
          "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
          "conversationRecordMetadata": {
            "composed_at_epoch_ms": 1799999999999,
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "delivered_record_not_currently_admitted",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 9000
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_not_admitted",
        "mappedDeliveredRecordAdmissionReason": "conversation_record_not_session_current",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_tampered_delivery_posture",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "transport_performed_to_declared_destination",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "invalid",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "delivery_candidate_invalid",
        "deliveryIntentFreshnessDiagnosis": {
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_missing_key",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "invalid",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "delivery_candidate_invalid",
        "deliveryIntentFreshnessDiagnosis": {
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_extra_key_dispatched_message",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none",
        "dispatchedMessage": {
          "transport": "would_dispatch_here"
        }
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "invalid",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "delivery_candidate_invalid",
        "deliveryIntentFreshnessDiagnosis": {
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_admitted_session_scoped_no_delivery",
        "mappedDeliveredRecordAdmissionReason": "all_conversation_record_checks_satisfied",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_confined_after_retraction",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: retractionRecord,
      receiverEvaluatedAtEpochMs: stageDP17RetractedEvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "live_session_read_gate_not_live_activated_refused_or_not_fresh",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 1000
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_not_admitted",
        "mappedDeliveredRecordAdmissionReason": "live_session_read_gate_not_live_activated_refused_or_not_fresh",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_confined_at_gate_expiry",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17GateExpiryEvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "live_session_read_gate_not_live_activated_refused_or_not_fresh",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 39001
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_not_admitted",
        "mappedDeliveredRecordAdmissionReason": "live_session_read_gate_not_live_activated_refused_or_not_fresh",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_intent_expired",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17IntentExpiryEvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "delivery_intent_not_session_current",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "stale",
          "reason": "declared_maximum_age_expired",
          "observationAgeMs": 60001
        },
        "mappedEstablishmentState": "not_established",
        "mappedEstablishmentReason": "session_establishment_not_session_current",
        "mappedEstablishmentFreshnessDiagnosis": {
          "state": "stale",
          "reason": "declared_maximum_age_expired",
          "observationAgeMs": 81001
        },
        "mappedReadGateState": "no_active_live_session",
        "mappedReadGateReason": "live_session_not_established_refused_or_not_fresh",
        "mappedReadGateFreshnessDiagnosis": {
          "state": "stale",
          "reason": "declared_maximum_age_expired",
          "observationAgeMs": 81001
        },
        "mappedDeliveredRecordAdmissionState": "conversation_record_not_admitted",
        "mappedDeliveredRecordAdmissionReason": "conversation_record_not_session_current",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "delivery_candidate_refused_delivered_record_re_stamped",
      receiverHeldPrincipalRef: stageDP17ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP17EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP17ReceiverMaximumAgeMs,
      deliveryCandidate: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "kind": "pond-delivery-candidate",
        "principalRef": "principal:fixture:stage-d-p0:local-principal",
        "deliveryBasis": "receiver_recorded_delivery_intent_not_inferred",
        "deliveredConversationRecord": {
          "contractVersion": "pond-delivery-candidate-decision-d-p17",
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
        "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
        "deliveryIntentMetadata": {
          "recorded_at_epoch_ms": 1800000081000,
          "freshness_basis": "delivery_intent_event_time_only",
          "currentness_posture": "not_established_consumer_must_evaluate"
        },
        "deliveryAudiencePosture": "destination_audience_bound_to_declared_agent_receiver_recorded_not_inferred_from_channel_or_model",
        "deliveryTransportPosture": "no_transport_performed_dispatch_refused_until_its_own_lane",
        "deliveryConsequencePosture": "delivery_informs_receivers_evaluate_independently_no_consequence_authorized",
        "deliveryAcceptancePosture": "delivery_equips_no_task_acceptance_or_agreement",
        "deliveryEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "deliveryAuthorityPosture": "delivery_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-delivery-candidate-decision-d-p17",
        "deliveryCandidateVersion": "pond-delivery-candidate-decision-d-p17",
        "assessmentKind": "deterministic_supplied_delivery_candidate_decision",
        "deliveryCandidateState": "delivery_candidate_not_prepared",
        "reason": "delivered_record_not_currently_admitted",
        "deliveryIntentFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 9000
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
        "mappedDeliveredRecordAdmissionState": "conversation_record_not_admitted",
        "mappedDeliveredRecordAdmissionReason": "conversation_record_invalid",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "delivery_candidate_well_formed",
          "delivery_candidate_bound_to_receiver_held_principal",
          "delivery_basis_receiver_recorded_not_inferred",
          "delivery_destination_declared_in_conversation_vocabulary",
          "delivery_destination_bound_to_delivered_record",
          "delivered_conversation_record_reinspected_admitted_session_scoped",
          "delivery_intent_within_current_session_scope",
          "live_session_read_gate_reinspected_live_activated_and_fresh",
          "delivery_refusal_postures_complete",
          "delivery_intent_own_freshness_within_declared_maximum_age"
        ],
        "deliveryPerformsTransportOrDispatch": false,
        "deliveryEstablishesGrant": false,
        "deliveryEstablishesConsequenceOrExecution": false,
        "deliveryEstablishesAcceptanceOrTaskAgreement": false,
        "deliveryEstablishesAuthorityFromProse": false,
        "deliveryEstablishesMembershipOrAdmission": false,
        "deliveryEstablishesAgentCognitionRuntime": false,
        "deliveryReceiptAdmitted": false,
        "deliveryEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
  ]);
