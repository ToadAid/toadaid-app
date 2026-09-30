// Stage D-P20 fixture: the message-transport lane matrix — receiver-recorded
// transport-policy arms over the frozen D-P17 candidate legs (the policy
// stage one lane earlier than dispatch: the performed in-process policy
// over the prepared agent-0 candidate and over the prepared community-slot
// candidate; the five refused policy bases, including the replayed basis;
// the three external selections — A2A, queue, Telegram — refusing at the
// dedicated cause with the selected literal echoed; the future, pre-scope,
// and pre-establishment policy events; missing and forbidden policy keys;
// and the retracted, gate-expiry, and intent-expiry reassessment refusals
// where the D-P17 re-run refuses while the policy event itself stays
// honestly fresh — plus the delivered-record re-stamp whose refusal is
// readable three depths down), and the inbound-wall arms — every claim of
// remote external message intake refusing with no open branch. The legs,
// the retraction record, and the read gate are re-inlined structural
// copies of the frozen D-P17/D-P18 fixture arms — the selftest deep-equals
// them against the actual frozen fixture entries. Zero value imports:
// every import is type-only, so the selftest imports this file directly
// under node type-stripping. No network, no live state: every arm's
// ceiling stays all-false on both contracts.

import type {
  PondTransportPolicyDecisionAssessment,
} from "../contracts/pond-transport-policy-decision.js";
import type {
  PondRemoteMessageIntakeAssessment,
} from "../contracts/pond-remote-message-refusal.js";

export interface PondStageDP20TransportPolicyFixtureEntry {
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
  readonly transportPolicy: unknown;
  readonly assessment: PondTransportPolicyDecisionAssessment;
}

export interface PondStageDP20RemoteMessageFixtureEntry {
  readonly fixtureLabel: string;
  readonly remoteMessageClaim: unknown;
  readonly assessment: PondRemoteMessageIntakeAssessment;
}

// --- Pinned receiver, destination, and clock constants (each tied to the
// frozen D-P17/D-P18/D-P19 fixture pins by the selftest); the policy event
// sits between the delivery intent (81_000) and the dispatch (85_000) —
// the fixture arm ordering itself proves the lifecycle order ---

export const stageDP20ReceiverRef = "principal:fixture:stage-d-p0:local-principal";

export const stageDP20Agent0Ref = "agent:fixture:stage-d-p0:trading-desk-agent0";
export const stageDP20CommunitySlotRef = "agent:fixture:stage-d-p0:community-agent-slot";

export const stageDP20PolicyEvaluatedAtEpochMs = 1800000090000;
export const stageDP20PolicyEventAtEpochMs = 1800000084500;
export const stageDP20FuturePolicyEventAtEpochMs = 1800000090100;
export const stageDP20PreScopePolicyEventAtEpochMs = 1800000080500;
export const stageDP20PreEstablishmentPolicyEventAtEpochMs = 1800000059000;
export const stageDP20RetractedPolicyEventAtEpochMs = 1800000065500;
export const stageDP20RetractedPolicyEvaluatedAtEpochMs = 1800000082000;
export const stageDP20GateExpiryPolicyEvaluatedAtEpochMs = 1800000120001;
export const stageDP20IntentExpiryPolicyEvaluatedAtEpochMs = 1800000141001;
export const stageDP20ReceiverMaximumAgeMs = 60000;

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
export const stageDP20TransportPolicyMatrix: readonly PondStageDP20TransportPolicyFixtureEntry[] =
  deepFreeze([
    {
      fixtureLabel: "transport_policy_recorded_in_process_agent0",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_recorded_session_scoped_no_external_transport",
          "reason": "all_transport_policy_checks_satisfied",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 5500
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "unsatisfiedChecks": [],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_recorded_in_process_community_slot",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "addressedAgentRef": "agent:fixture:stage-d-p0:community-agent-slot",
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_recorded_session_scoped_no_external_transport",
          "reason": "all_transport_policy_checks_satisfied",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 5500
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "unsatisfiedChecks": [],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_refused_basis_inferred_from_prepared_candidate",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "inferred_from_prepared_candidate",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "receiver_transport_policy_proof_incomplete",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 5500
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "unsatisfiedChecks": [
            "policy_basis_receiver_recorded_not_inferred"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_refused_basis_inferred_from_receipt",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "inferred_from_receipt",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "receiver_transport_policy_proof_incomplete",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 5500
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "unsatisfiedChecks": [
            "policy_basis_receiver_recorded_not_inferred"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_refused_basis_asserted_by_model_completion",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "asserted_by_model_completion",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "receiver_transport_policy_proof_incomplete",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 5500
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "unsatisfiedChecks": [
            "policy_basis_receiver_recorded_not_inferred"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_refused_basis_inferred_from_channel_visibility",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "inferred_from_channel_visibility",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "receiver_transport_policy_proof_incomplete",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 5500
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "unsatisfiedChecks": [
            "policy_basis_receiver_recorded_not_inferred"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_refused_basis_replayed_from_prior_policy_decision",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "replayed_from_prior_policy_decision",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "receiver_transport_policy_proof_incomplete",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 5500
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "unsatisfiedChecks": [
            "policy_basis_receiver_recorded_not_inferred"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_refused_external_a2a",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "external_transport_policy_a2a",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "transport_policy_not_performable_this_cut",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 5500
          },
          "recordedTransportPolicy": "external_transport_policy_a2a",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_refused_external_queue",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "external_transport_policy_queue",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "transport_policy_not_performable_this_cut",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 5500
          },
          "recordedTransportPolicy": "external_transport_policy_queue",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_refused_external_telegram",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "external_transport_policy_telegram",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "transport_policy_not_performable_this_cut",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 5500
          },
          "recordedTransportPolicy": "external_transport_policy_telegram",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_event_in_future",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000090100,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "transport_policy_event_not_session_current",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "unknown",
            "reason": "observation_time_in_future",
            "observationAgeMs": null
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_event_before_delivery_intent",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000080500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "transport_policy_event_not_of_the_current_session_scope",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 9500
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_event_before_session_establishment",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000059000,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "transport_policy_event_not_of_the_current_session_scope",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 31000
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_record_missing_key",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "invalid",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "transport_policy_record_invalid",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "unknown",
            "reason": "observation_metadata_missing_or_invalid",
            "observationAgeMs": null
          },
          "recordedTransportPolicy": null,
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_record_extra_forbidden_key",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none",
          "transportEndpoint": "refused_value_would_go_here"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "invalid",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "transport_policy_record_invalid",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "unknown",
            "reason": "observation_metadata_missing_or_invalid",
            "observationAgeMs": null
          },
          "recordedTransportPolicy": null,
          "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
          "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_confined_after_retraction",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000065500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: retractionRecord,
      receiverEvaluatedAtEpochMs: 1800000082000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "delivery_candidate_not_currently_prepared",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 16500
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_not_prepared",
          "mappedCandidateReassessmentReason": "live_session_read_gate_not_live_activated_refused_or_not_fresh",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_reassessment_refused_at_gate_expiry",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000120001,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "delivery_candidate_not_currently_prepared",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 35501
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_not_prepared",
          "mappedCandidateReassessmentReason": "live_session_read_gate_not_live_activated_refused_or_not_fresh",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_reassessment_refused_at_intent_expiry",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000141001,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "delivery_candidate_not_currently_prepared",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 56501
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_not_prepared",
          "mappedCandidateReassessmentReason": "delivery_intent_not_session_current",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
    {
      fixtureLabel: "transport_policy_reassessment_refused_delivered_record_restamped",
      receiverHeldPrincipalRef: stageDP20ReceiverRef,
      readGateRecord: stageDP17ReadGateRecord,
      transportPolicy: {
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "kind": "pond-transport-policy",
          "principalRef": "principal:fixture:stage-d-p0:local-principal",
          "policyBasis": "receiver_recorded_transport_policy_not_inferred",
          "transportPolicy": "in_process_local_conversation_context_delivery_only",
          "transportPolicyMetadata": {
            "recorded_at_epoch_ms": 1800000084500,
            "freshness_basis": "transport_policy_event_time_only",
            "currentness_posture": "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
          },
          "policyTransportPosture": "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",
          "policyRuntimePosture": "no_transport_runtime_endpoint_or_queue_established",
          "policyChannelAuthorityPosture": "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
          "policyAcceptancePosture": "policy_establishes_no_acceptance_agreement_or_reply",
          "policyEvidencePosture": "policy_is_not_evidence_and_claims_no_receipt",
          "policyAuthorityPosture": "policy_grants_no_authority_membership_or_admission",
          "authority": "none"
        },
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000090000,
      receiverMaximumAgeMs: stageDP20ReceiverMaximumAgeMs,
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
          "contractVersion": "pond-transport-policy-decision-d-p20",
          "transportPolicyDecisionVersion": "pond-transport-policy-decision-d-p20",
          "assessmentKind": "deterministic_supplied_transport_policy_decision",
          "transportPolicyState": "transport_policy_not_recorded",
          "reason": "delivery_candidate_not_currently_prepared",
          "transportPolicyEventFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 5500
          },
          "recordedTransportPolicy": "in_process_local_conversation_context_delivery_only",
          "mappedCandidateState": "delivery_candidate_not_prepared",
          "mappedCandidateReassessmentReason": "delivered_record_not_currently_admitted",
          "mappedCandidateIntentDiagnosis": {
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
            "transport_policy_record_well_formed",
            "transport_policy_bound_to_receiver_held_principal",
            "policy_basis_receiver_recorded_not_inferred",
            "transport_policy_in_performable_vocabulary",
            "transport_policy_declares_no_external_transport",
            "delivery_candidate_currently_prepared_reassessed_session_scoped",
            "transport_policy_event_within_current_session_scope",
            "transport_policy_event_own_freshness_within_declared_maximum_age",
            "transport_policy_refusal_postures_complete"
          ],
          "transportPolicyRetentionPosture": "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
          "policyEstablishesExternalTransportRuntime": false,
          "policyEstablishesChannelAuthority": false,
          "policyEstablishesAgentIdentityOrAdmission": false,
          "policyEstablishesGrant": false,
          "policyEstablishesConsequenceOrExecution": false,
          "policyEstablishesAcceptanceOrTaskAgreement": false,
          "policyEstablishesAuthorityFromProse": false,
          "policyEstablishesMembershipOrAdmission": false,
          "policyEstablishesAgentCognitionRuntime": false,
          "policyEstablishesScope": false,
          "transportAcceptedAsAgentIdentity": false,
          "transportPolicyConsumedThisCut": false,
          "credentialAdmitted": false,
          "principalIdAcceptedAsAuthorization": false,
          "personalMemoryContentAdmitted": false,
          "currentTruthAdmitted": false,
          "runtimeActivationPosture": "not_included",
          "authority": "none"
        },
    },
  ]);

export const stageDP20RemoteMessageMatrix: readonly PondStageDP20RemoteMessageFixtureEntry[] =
  deepFreeze([
    {
      fixtureLabel: "remote_message_refused_honest_untrusted_self_declaration",
      remoteMessageClaim: {
        "claimedTransport": "a2a",
        "claimedChannelClass": "untrusted_external_input",
        "senderEvidenceRef": "evidence:fixture:remote:sender-key-thumbprint"
      },
      assessment: {
        "contractVersion": "pond-remote-message-refusal-d-p20",
        "remoteMessageRefusalVersion": "pond-remote-message-refusal-d-p20",
        "assessmentKind": "deterministic_supplied_remote_message_intake_refusal",
        "intakeState": "remote_message_not_intaked",
        "reason": "remote_message_intake_refused_no_remote_agent_admission",
        "remoteMessageIntakePosture": "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut",
        "satisfiedChecks": [
          "remote_message_claim_well_formed",
          "claimed_channel_class_of_the_declared_message_vocabulary"
        ],
        "unsatisfiedChecks": [
          "claimed_channel_class_declared_for_receiver_intake",
          "remote_message_sender_locally_admitted"
        ],
        "remoteMessageEstablishesAuthority": false,
        "remoteMessageEstablishesAdmission": false,
        "remoteMessageEstablishesAgentIdentity": false,
        "remoteMessageEstablishesMembership": false,
        "remoteMessageEstablishesCapabilityOrGrant": false,
        "remoteMessageCredentialsAdmitted": false,
        "remoteMessageGrantClaimAdmitted": false,
        "claimContentEchoed": false,
        "claimContentStored": false,
        "senderIdentityEchoed": false,
        "senderIdentityAcceptedAsIdentity": false,
        "remoteMessageEstablishesChannelAuthority": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "remote_message_refused_claims_trusted_class_conversation_context",
      remoteMessageClaim: {
        "claimedTransport": "a2a",
        "claimedChannelClass": "conversation_context",
        "senderEvidenceRef": "evidence:fixture:remote:sender-key-thumbprint"
      },
      assessment: {
        "contractVersion": "pond-remote-message-refusal-d-p20",
        "remoteMessageRefusalVersion": "pond-remote-message-refusal-d-p20",
        "assessmentKind": "deterministic_supplied_remote_message_intake_refusal",
        "intakeState": "remote_message_not_intaked",
        "reason": "remote_message_claimed_trusted_channel_class",
        "remoteMessageIntakePosture": "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "remote_message_claim_well_formed",
          "claimed_channel_class_of_the_declared_message_vocabulary",
          "claimed_channel_class_declared_for_receiver_intake",
          "remote_message_sender_locally_admitted"
        ],
        "remoteMessageEstablishesAuthority": false,
        "remoteMessageEstablishesAdmission": false,
        "remoteMessageEstablishesAgentIdentity": false,
        "remoteMessageEstablishesMembership": false,
        "remoteMessageEstablishesCapabilityOrGrant": false,
        "remoteMessageCredentialsAdmitted": false,
        "remoteMessageGrantClaimAdmitted": false,
        "claimContentEchoed": false,
        "claimContentStored": false,
        "senderIdentityEchoed": false,
        "senderIdentityAcceptedAsIdentity": false,
        "remoteMessageEstablishesChannelAuthority": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "remote_message_refused_claims_trusted_class_operator",
      remoteMessageClaim: {
        "claimedTransport": "a2a",
        "claimedChannelClass": "operator",
        "senderEvidenceRef": "evidence:fixture:remote:sender-key-thumbprint"
      },
      assessment: {
        "contractVersion": "pond-remote-message-refusal-d-p20",
        "remoteMessageRefusalVersion": "pond-remote-message-refusal-d-p20",
        "assessmentKind": "deterministic_supplied_remote_message_intake_refusal",
        "intakeState": "remote_message_not_intaked",
        "reason": "remote_message_claimed_trusted_channel_class",
        "remoteMessageIntakePosture": "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "remote_message_claim_well_formed",
          "claimed_channel_class_of_the_declared_message_vocabulary",
          "claimed_channel_class_declared_for_receiver_intake",
          "remote_message_sender_locally_admitted"
        ],
        "remoteMessageEstablishesAuthority": false,
        "remoteMessageEstablishesAdmission": false,
        "remoteMessageEstablishesAgentIdentity": false,
        "remoteMessageEstablishesMembership": false,
        "remoteMessageEstablishesCapabilityOrGrant": false,
        "remoteMessageCredentialsAdmitted": false,
        "remoteMessageGrantClaimAdmitted": false,
        "claimContentEchoed": false,
        "claimContentStored": false,
        "senderIdentityEchoed": false,
        "senderIdentityAcceptedAsIdentity": false,
        "remoteMessageEstablishesChannelAuthority": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "remote_message_refused_claims_trusted_class_authority_decision",
      remoteMessageClaim: {
        "claimedTransport": "a2a",
        "claimedChannelClass": "authority_decision",
        "senderEvidenceRef": "evidence:fixture:remote:sender-key-thumbprint"
      },
      assessment: {
        "contractVersion": "pond-remote-message-refusal-d-p20",
        "remoteMessageRefusalVersion": "pond-remote-message-refusal-d-p20",
        "assessmentKind": "deterministic_supplied_remote_message_intake_refusal",
        "intakeState": "remote_message_not_intaked",
        "reason": "remote_message_claimed_trusted_channel_class",
        "remoteMessageIntakePosture": "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "remote_message_claim_well_formed",
          "claimed_channel_class_of_the_declared_message_vocabulary",
          "claimed_channel_class_declared_for_receiver_intake",
          "remote_message_sender_locally_admitted"
        ],
        "remoteMessageEstablishesAuthority": false,
        "remoteMessageEstablishesAdmission": false,
        "remoteMessageEstablishesAgentIdentity": false,
        "remoteMessageEstablishesMembership": false,
        "remoteMessageEstablishesCapabilityOrGrant": false,
        "remoteMessageCredentialsAdmitted": false,
        "remoteMessageGrantClaimAdmitted": false,
        "claimContentEchoed": false,
        "claimContentStored": false,
        "senderIdentityEchoed": false,
        "senderIdentityAcceptedAsIdentity": false,
        "remoteMessageEstablishesChannelAuthority": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "remote_message_refused_unknown_channel_class_fail_closed",
      remoteMessageClaim: {
        "claimedTransport": "a2a",
        "claimedChannelClass": "carrier_pigeon",
        "senderEvidenceRef": "evidence:fixture:remote:sender-key-thumbprint"
      },
      assessment: {
        "contractVersion": "pond-remote-message-refusal-d-p20",
        "remoteMessageRefusalVersion": "pond-remote-message-refusal-d-p20",
        "assessmentKind": "deterministic_supplied_remote_message_intake_refusal",
        "intakeState": "remote_message_not_intaked",
        "reason": "remote_message_channel_class_unknown_fail_closed",
        "remoteMessageIntakePosture": "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "remote_message_claim_well_formed",
          "claimed_channel_class_of_the_declared_message_vocabulary",
          "claimed_channel_class_declared_for_receiver_intake",
          "remote_message_sender_locally_admitted"
        ],
        "remoteMessageEstablishesAuthority": false,
        "remoteMessageEstablishesAdmission": false,
        "remoteMessageEstablishesAgentIdentity": false,
        "remoteMessageEstablishesMembership": false,
        "remoteMessageEstablishesCapabilityOrGrant": false,
        "remoteMessageCredentialsAdmitted": false,
        "remoteMessageGrantClaimAdmitted": false,
        "claimContentEchoed": false,
        "claimContentStored": false,
        "senderIdentityEchoed": false,
        "senderIdentityAcceptedAsIdentity": false,
        "remoteMessageEstablishesChannelAuthority": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "remote_message_refused_missing_claimed_transport",
      remoteMessageClaim: {
        "claimedChannelClass": "untrusted_external_input",
        "senderEvidenceRef": "evidence:fixture:remote:sender-key-thumbprint"
      },
      assessment: {
        "contractVersion": "pond-remote-message-refusal-d-p20",
        "remoteMessageRefusalVersion": "invalid",
        "assessmentKind": "deterministic_supplied_remote_message_intake_refusal",
        "intakeState": "remote_message_not_intaked",
        "reason": "remote_message_claim_invalid",
        "remoteMessageIntakePosture": "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "remote_message_claim_well_formed",
          "claimed_channel_class_of_the_declared_message_vocabulary",
          "claimed_channel_class_declared_for_receiver_intake",
          "remote_message_sender_locally_admitted"
        ],
        "remoteMessageEstablishesAuthority": false,
        "remoteMessageEstablishesAdmission": false,
        "remoteMessageEstablishesAgentIdentity": false,
        "remoteMessageEstablishesMembership": false,
        "remoteMessageEstablishesCapabilityOrGrant": false,
        "remoteMessageCredentialsAdmitted": false,
        "remoteMessageGrantClaimAdmitted": false,
        "claimContentEchoed": false,
        "claimContentStored": false,
        "senderIdentityEchoed": false,
        "senderIdentityAcceptedAsIdentity": false,
        "remoteMessageEstablishesChannelAuthority": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "remote_message_refused_extra_forbidden_key",
      remoteMessageClaim: {
        "claimedTransport": "a2a",
        "claimedChannelClass": "untrusted_external_input",
        "senderEvidenceRef": "evidence:fixture:remote:sender-key-thumbprint",
        "remoteGrant": "grant:fixture:remote"
      },
      assessment: {
        "contractVersion": "pond-remote-message-refusal-d-p20",
        "remoteMessageRefusalVersion": "invalid",
        "assessmentKind": "deterministic_supplied_remote_message_intake_refusal",
        "intakeState": "remote_message_not_intaked",
        "reason": "remote_message_claim_invalid",
        "remoteMessageIntakePosture": "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "remote_message_claim_well_formed",
          "claimed_channel_class_of_the_declared_message_vocabulary",
          "claimed_channel_class_declared_for_receiver_intake",
          "remote_message_sender_locally_admitted"
        ],
        "remoteMessageEstablishesAuthority": false,
        "remoteMessageEstablishesAdmission": false,
        "remoteMessageEstablishesAgentIdentity": false,
        "remoteMessageEstablishesMembership": false,
        "remoteMessageEstablishesCapabilityOrGrant": false,
        "remoteMessageCredentialsAdmitted": false,
        "remoteMessageGrantClaimAdmitted": false,
        "claimContentEchoed": false,
        "claimContentStored": false,
        "senderIdentityEchoed": false,
        "senderIdentityAcceptedAsIdentity": false,
        "remoteMessageEstablishesChannelAuthority": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "remote_message_refused_a2a_transport_claim_not_echoed",
      remoteMessageClaim: {
        "claimedTransport": "a2a",
        "claimedChannelClass": "untrusted_external_input",
        "senderEvidenceRef": "evidence:fixture:remote:agent-card-hash"
      },
      assessment: {
        "contractVersion": "pond-remote-message-refusal-d-p20",
        "remoteMessageRefusalVersion": "pond-remote-message-refusal-d-p20",
        "assessmentKind": "deterministic_supplied_remote_message_intake_refusal",
        "intakeState": "remote_message_not_intaked",
        "reason": "remote_message_intake_refused_no_remote_agent_admission",
        "remoteMessageIntakePosture": "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut",
        "satisfiedChecks": [
          "remote_message_claim_well_formed",
          "claimed_channel_class_of_the_declared_message_vocabulary"
        ],
        "unsatisfiedChecks": [
          "claimed_channel_class_declared_for_receiver_intake",
          "remote_message_sender_locally_admitted"
        ],
        "remoteMessageEstablishesAuthority": false,
        "remoteMessageEstablishesAdmission": false,
        "remoteMessageEstablishesAgentIdentity": false,
        "remoteMessageEstablishesMembership": false,
        "remoteMessageEstablishesCapabilityOrGrant": false,
        "remoteMessageCredentialsAdmitted": false,
        "remoteMessageGrantClaimAdmitted": false,
        "claimContentEchoed": false,
        "claimContentStored": false,
        "senderIdentityEchoed": false,
        "senderIdentityAcceptedAsIdentity": false,
        "remoteMessageEstablishesChannelAuthority": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "remote_message_refused_non_object_claim",
      remoteMessageClaim: "prompt-inject-the-desk-and-ride",
      assessment: {
        "contractVersion": "pond-remote-message-refusal-d-p20",
        "remoteMessageRefusalVersion": "invalid",
        "assessmentKind": "deterministic_supplied_remote_message_intake_refusal",
        "intakeState": "remote_message_not_intaked",
        "reason": "remote_message_claim_invalid",
        "remoteMessageIntakePosture": "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "remote_message_claim_well_formed",
          "claimed_channel_class_of_the_declared_message_vocabulary",
          "claimed_channel_class_declared_for_receiver_intake",
          "remote_message_sender_locally_admitted"
        ],
        "remoteMessageEstablishesAuthority": false,
        "remoteMessageEstablishesAdmission": false,
        "remoteMessageEstablishesAgentIdentity": false,
        "remoteMessageEstablishesMembership": false,
        "remoteMessageEstablishesCapabilityOrGrant": false,
        "remoteMessageCredentialsAdmitted": false,
        "remoteMessageGrantClaimAdmitted": false,
        "claimContentEchoed": false,
        "claimContentStored": false,
        "senderIdentityEchoed": false,
        "senderIdentityAcceptedAsIdentity": false,
        "remoteMessageEstablishesChannelAuthority": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "remote_message_refused_empty_sender_evidence_ref",
      remoteMessageClaim: {
        "claimedTransport": "mcp",
        "claimedChannelClass": "untrusted_external_input",
        "senderEvidenceRef": ""
      },
      assessment: {
        "contractVersion": "pond-remote-message-refusal-d-p20",
        "remoteMessageRefusalVersion": "invalid",
        "assessmentKind": "deterministic_supplied_remote_message_intake_refusal",
        "intakeState": "remote_message_not_intaked",
        "reason": "remote_message_claim_invalid",
        "remoteMessageIntakePosture": "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "remote_message_claim_well_formed",
          "claimed_channel_class_of_the_declared_message_vocabulary",
          "claimed_channel_class_declared_for_receiver_intake",
          "remote_message_sender_locally_admitted"
        ],
        "remoteMessageEstablishesAuthority": false,
        "remoteMessageEstablishesAdmission": false,
        "remoteMessageEstablishesAgentIdentity": false,
        "remoteMessageEstablishesMembership": false,
        "remoteMessageEstablishesCapabilityOrGrant": false,
        "remoteMessageCredentialsAdmitted": false,
        "remoteMessageGrantClaimAdmitted": false,
        "claimContentEchoed": false,
        "claimContentStored": false,
        "senderIdentityEchoed": false,
        "senderIdentityAcceptedAsIdentity": false,
        "remoteMessageEstablishesChannelAuthority": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
  ]);
