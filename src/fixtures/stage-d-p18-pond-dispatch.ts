// Stage D-P18 fixture: the dispatch lane matrix — the receiver-performed
// in-process dispatch arms over the D-P17 decision arms (the admitted
// dispatch over the prepared agent-0 candidate; five refused dispatch
// bases, including the replayed-dispatch basis; a tampered dispatch
// posture; missing and forbidden extra keys; the admitted community-slot
// dispatch; the stale and re-stamped and invalid candidates refusing only
// through the reassessment's own verdict, mapped verbatim; a future
// dispatch event; a pre-scope and a pre-establishment dispatch event; the
// retracted-session confinement; the gate-expiry and intent-expiry
// confinements where the reassessment refuses while the dispatch event
// itself stays honestly fresh). The legs, the retraction record, and the
// read gate are re-inlined structural copies of the frozen D-P17 fixture
// arms and exports — the selftest deep-equals them against the actual
// frozen fixture entries. Zero value imports: every import is type-only,
// so the selftest imports this file directly under node type-stripping.
// No network, no live state: every arm's ceiling stays all-false and this
// cut's assessments never carry a frozen D-P0…D-P16 tuple name.

import type {
  PondDispatchDecisionAssessment,
} from "../contracts/pond-dispatch-decision.js";

export interface PondStageDP18DispatchFixtureEntry {
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
  readonly dispatchMetadata: unknown;
  readonly assessment: PondDispatchDecisionAssessment;
}

// --- Pinned receiver, destination, and clock constants (each tied to the
// frozen D-P17 fixture pins by the selftest) ---

export const stageDP18ReceiverRef = "principal:fixture:stage-d-p0:local-principal";

export const stageDP18Agent0Ref = "agent:fixture:stage-d-p0:trading-desk-agent0";
export const stageDP18CommunitySlotRef = "agent:fixture:stage-d-p0:community-agent-slot";

export const stageDP18EvaluatedAtEpochMs = 1800000090000;
export const stageDP18DispatchedAtEpochMs = 1800000085000;
export const stageDP18DispatchFutureEventAtEpochMs = 1800000090100;
export const stageDP18PreScopeDispatchAtEpochMs = 1800000060500;
export const stageDP18PreEstablishmentDispatchAtEpochMs = 1800000059000;
export const stageDP18RetractedDispatchAtEpochMs = 1800000065000;
export const stageDP18RetractedEvaluatedAtEpochMs = 1800000082000;
export const stageDP18GateExpiryEvaluatedAtEpochMs = 1800000120001;
export const stageDP18IntentExpiryEvaluatedAtEpochMs = 1800000141001;
export const stageDP18ReceiverMaximumAgeMs = 60000;

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

// --- Dispatch-decision arms ---

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
export const stageDP18DispatchMatrix: readonly PondStageDP18DispatchFixtureEntry[] =
  deepFreeze([
    {
      fixtureLabel: "dispatch_admitted_over_prepared_candidate",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_performed_session_scoped_in_process_no_receipt",
        "reason": "all_dispatch_checks_satisfied",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 5000
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "unsatisfiedChecks": [],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_refused_basis_inferred_from_delivery_preparation",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "inferred_from_delivery_preparation",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "receiver_dispatch_proof_incomplete",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 5000
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "unsatisfiedChecks": [
          "dispatch_basis_receiver_performed_not_inferred"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_refused_basis_asserted_by_model_completion",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "asserted_by_model_completion",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "receiver_dispatch_proof_incomplete",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 5000
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "unsatisfiedChecks": [
          "dispatch_basis_receiver_performed_not_inferred"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_refused_basis_replayed_from_prior_dispatch_decision",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "replayed_from_prior_dispatch_decision",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "receiver_dispatch_proof_incomplete",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 5000
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "unsatisfiedChecks": [
          "dispatch_basis_receiver_performed_not_inferred"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_refused_basis_inferred_from_channel_visibility",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "inferred_from_channel_visibility",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "receiver_dispatch_proof_incomplete",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 5000
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "unsatisfiedChecks": [
          "dispatch_basis_receiver_performed_not_inferred"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_refused_basis_scheduled_or_queued_automatically",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "scheduled_or_queued_automatically",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "receiver_dispatch_proof_incomplete",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 5000
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "unsatisfiedChecks": [
          "dispatch_basis_receiver_performed_not_inferred"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_refused_tampered_dispatch_posture",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "external_transport_performed_to_declared_destination",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "invalid",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "dispatch_decision_invalid",
        "dispatchEventFreshnessDiagnosis": {
          "state": "unknown",
          "reason": "observation_metadata_missing_or_invalid",
          "observationAgeMs": null
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_refused_missing_key",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "invalid",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "dispatch_decision_invalid",
        "dispatchEventFreshnessDiagnosis": {
          "state": "unknown",
          "reason": "observation_metadata_missing_or_invalid",
          "observationAgeMs": null
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_refused_extra_key_dispatch_queue_entry",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none",
        "dispatchQueueEntry": {
          "queue": "would_queue_here"
        }
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "invalid",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "dispatch_decision_invalid",
        "dispatchEventFreshnessDiagnosis": {
          "state": "unknown",
          "reason": "observation_metadata_missing_or_invalid",
          "observationAgeMs": null
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_admitted_community_slot",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_performed_session_scoped_in_process_no_receipt",
        "reason": "all_dispatch_checks_satisfied",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 5000
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "unsatisfiedChecks": [],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_refused_delivered_record_stale_in_reassessment",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "delivery_candidate_not_currently_prepared",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 5000
        },
        "mappedCandidateState": "delivery_candidate_not_prepared",
        "mappedCandidateReassessmentReason": "delivered_record_not_currently_admitted",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_refused_delivered_record_re_stamped_in_reassessment",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "delivery_candidate_not_currently_prepared",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 5000
        },
        "mappedCandidateState": "delivery_candidate_not_prepared",
        "mappedCandidateReassessmentReason": "delivered_record_not_currently_admitted",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_refused_candidate_invalid_in_reassessment",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "delivery_candidate_not_currently_prepared",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 5000
        },
        "mappedCandidateState": "delivery_candidate_not_prepared",
        "mappedCandidateReassessmentReason": "delivery_candidate_invalid",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_event_refused_in_future",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000090100,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "dispatch_event_not_session_current",
        "dispatchEventFreshnessDiagnosis": {
          "state": "unknown",
          "reason": "observation_time_in_future",
          "observationAgeMs": null
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_event_refused_before_session_scope",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000060500,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "dispatch_event_not_of_the_current_session_scope",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 29500
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_event_refused_before_establishment",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000059000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "dispatch_event_not_of_the_current_session_scope",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 31000
        },
        "mappedCandidateState": "delivery_candidate_prepared_session_scoped_no_dispatch",
        "mappedCandidateReassessmentReason": "all_delivery_candidate_checks_satisfied",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_confined_after_retraction",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18RetractedEvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000065000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "delivery_candidate_not_currently_prepared",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 17000
        },
        "mappedCandidateState": "delivery_candidate_not_prepared",
        "mappedCandidateReassessmentReason": "live_session_read_gate_not_live_activated_refused_or_not_fresh",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_confined_at_gate_expiry",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18GateExpiryEvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "delivery_candidate_not_currently_prepared",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 35001
        },
        "mappedCandidateState": "delivery_candidate_not_prepared",
        "mappedCandidateReassessmentReason": "live_session_read_gate_not_live_activated_refused_or_not_fresh",
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
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
    {
      fixtureLabel: "dispatch_refused_intent_expired_in_reassessment",
      receiverHeldPrincipalRef: stageDP18ReceiverRef,
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
      receiverEvaluatedAtEpochMs: stageDP18IntentExpiryEvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP18ReceiverMaximumAgeMs,
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
      dispatchMetadata: {
        "dispatch_basis": "receiver_performed_in_process_dispatch_not_inferred",
        "dispatched_at_epoch_ms": 1800000085000,
        "freshness_basis": "dispatch_event_time_only",
        "currentness_posture": "not_established_consumer_must_evaluate",
        "dispatchTransportPosture": "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
        "dispatchPresentationPosture": "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
        "dispatchConsumptionPosture": "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
        "dispatchConsequencePosture": "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
        "dispatchAcceptancePosture": "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
        "dispatchEvidencePosture": "no_receipt_claimed_receipt_requires_its_own_governed_lane",
        "dispatchAuthorityPosture": "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
        "authority": "none"
      },
      assessment: {
        "contractVersion": "pond-dispatch-decision-d-p18",
        "dispatchDecisionVersion": "pond-dispatch-decision-d-p18",
        "assessmentKind": "deterministic_supplied_dispatch_decision",
        "dispatchState": "dispatch_not_performed",
        "reason": "delivery_candidate_not_currently_prepared",
        "dispatchEventFreshnessDiagnosis": {
          "state": "fresh",
          "reason": "within_declared_maximum_age",
          "observationAgeMs": 56001
        },
        "mappedCandidateState": "delivery_candidate_not_prepared",
        "mappedCandidateReassessmentReason": "delivery_intent_not_session_current",
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
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
          "dispatch_decision_well_formed",
          "dispatch_candidate_bound_to_receiver_held_principal",
          "dispatch_basis_receiver_performed_not_inferred",
          "delivery_candidate_reassessment_currently_prepared",
          "dispatch_event_own_freshness_within_declared_maximum_age",
          "dispatch_event_within_current_session_scope",
          "dispatch_postures_complete"
        ],
        "dispatchPerformsExternalTransport": false,
        "dispatchEstablishesGrant": false,
        "dispatchEstablishesConsequenceOrExecution": false,
        "dispatchEstablishesAcceptanceOrAgentReply": false,
        "dispatchEstablishesAgentCognitionRuntime": false,
        "dispatchEstablishesAuthorityFromProse": false,
        "dispatchEstablishesMembershipOrAdmission": false,
        "dispatchQueuedOrRetriedOrScheduled": false,
        "dispatchReceiptAdmitted": false,
        "dispatchEstablishesScope": false,
        "credentialAdmitted": false,
        "principalIdAcceptedAsAuthorization": false,
        "personalMemoryContentAdmitted": false,
        "currentTruthAdmitted": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none"
      },
    },
  ]);
