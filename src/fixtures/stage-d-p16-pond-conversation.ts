// Stage D-P16 fixture: the conversation lane matrix — the composed-record
// admission arms (admitted agent-0 / community-slot / project-slot and the
// 2000-character boundary text; refused inference bases; empty and
// over-long composed text; undeclared addressed agent; confined and legacy
// trust epochs; missing key; extra reply key; future and pre-scope and
// stale compositions; tampered refusal posture) and the conversation
// surface arms (presented with records; presented empty; never
// established; scope-ended expired and retracted with records; four
// refused bases; tampered surface posture; confined record marked
// inspection-only; earlier-session records refused). The legs are re-inlined structural copies of the
// frozen D-P15 and D-P13 exports — the selftest deep-equals them against
// the actual frozen fixture entries. Zero value imports: every import is
// type-only, so the selftest imports this file directly under node
// type-stripping. No network, no live state: every arm's ceiling stays
// all-false and this cut's assessments never carry a frozen D-P0…D-P15
// tuple name.

import type {
  PondConversationRecordAdmissionAssessment,
} from "../contracts/pond-conversation-record-admission.js";
import type {
  PondConversationSurfacePostureAssessment,
} from "../contracts/pond-conversation-surface-posture.js";

export interface PondStageDP16RecordFixtureEntry {
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
  readonly conversationRecord: unknown;
  readonly assessment: PondConversationRecordAdmissionAssessment;
}

export interface PondStageDP16SurfaceFixtureEntry {
  readonly fixtureLabel: string;
  readonly receiverHeldPrincipalRef: string;
  readonly receiverHeldAgentRef: string;
  readonly conversationRecordInputs: readonly unknown[];
  readonly forgeBindingRecord: unknown;
  readonly modeDeclarationRecord: unknown;
  readonly deskSourceContractFixture: unknown;
  readonly deskPresenceProjection: unknown;
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
  readonly conversationSurfaceRecord: unknown;
  readonly assessment: PondConversationSurfacePostureAssessment;
}

// --- Frozen structural copies (the selftest ties these to the actual
// frozen D-P15/D-P13 fixture entries) ---

export const stageDP16ReceiverRef = "principal:fixture:stage-d-p0:local-principal";

export const stageDP16ReadGateRecord = Object.freeze({
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
});

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
}),
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
}),
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
}),
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
}),
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
}),
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
}),
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
}),
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
}),
});

const forgeLegs = Object.freeze({
  forgeBindingRecord: Object.freeze({
  "contractVersion": "pond-knowledge-forge-surface-binding-d-p12",
  "kind": "pond-knowledge-forge-surface-binding",
  "architectureCommit": "bc7a971dfb243f0aa4417da6cef85cc56204f783",
  "lawAnchor": "Build capability. Never manufacture authority.",
  "surfaces": {
    "knowledge-forge-p5b-desktop-projection": {
      "surfaceId": "knowledge-forge-p5b-desktop-projection",
      "surfaceKind": "desktop_projection",
      "forgeRepository": "ToadAid/knowledge-forge",
      "forgeCommit": "41a15164f091f63e9a4d3b06c5ac4e43c9d4755b",
      "forgeTree": "53bc0ef4a92dc65fe83cd26c28df0ee4a0152bb1",
      "companionRepository": "ToadAid/toadaid-architecture",
      "companionCommit": "bc7a971dfb243f0aa4417da6cef85cc56204f783",
      "surfaceProjectionPosture": "fixture_bound_snapshot_not_current_truth",
      "authorityPosture": {
        "knowledgeAuthority": "KNOWLEDGE_ONLY",
        "executionAuthority": "NONE",
        "runtimeConnection": "NOT_INCLUDED",
        "mutation": "NONE",
        "activation": "NOT_INCLUDED"
      }
    },
    "knowledge-forge-p5c-skill-library-browser": {
      "surfaceId": "knowledge-forge-p5c-skill-library-browser",
      "surfaceKind": "skill_library_browser",
      "forgeRepository": "ToadAid/knowledge-forge",
      "forgeCommit": "caa4bdf3b4fbd95a9d8f0a2686798cc9e1a6f0ad",
      "forgeTree": "1ef8fe116e65bd0ac4eb832451d195831c2c396e",
      "companionRepository": "ToadAid/toadaid-app",
      "companionCommit": "d0c10d0a22054837fa583381132c60be0cef7f15",
      "surfaceProjectionPosture": "fixture_metadata_not_live_registry_truth",
      "authorityPosture": {
        "knowledgeAuthority": "KNOWLEDGE_ONLY",
        "executionAuthority": "NONE",
        "runtimeConnection": "NOT_INCLUDED",
        "mutation": "NONE",
        "activation": "NOT_INCLUDED"
      }
    },
    "knowledge-forge-p5d-evidence-inspector": {
      "surfaceId": "knowledge-forge-p5d-evidence-inspector",
      "surfaceKind": "evidence_inspector",
      "forgeRepository": "ToadAid/knowledge-forge",
      "forgeCommit": "d4cf038eb188975e9ac4a5d875c15998e366a8ee",
      "forgeTree": "60e7b36b61c4ac9617c2ef1df0a787b56e7eef0f",
      "companionRepository": "ToadAid/toadaid-app",
      "companionCommit": "3117bb66c7ab88f6e1abcac6e0101ff07fe68506",
      "surfaceProjectionPosture": "fixture_evidence_not_live_registry_truth",
      "authorityPosture": {
        "knowledgeAuthority": "KNOWLEDGE_ONLY",
        "executionAuthority": "NONE",
        "runtimeConnection": "NOT_INCLUDED",
        "mutation": "NONE",
        "activation": "NOT_INCLUDED"
      }
    },
    "knowledge-forge-p5e-governed-workflow-console": {
      "surfaceId": "knowledge-forge-p5e-governed-workflow-console",
      "surfaceKind": "governed_workflow_console",
      "forgeRepository": "ToadAid/knowledge-forge",
      "forgeCommit": "368077ee22b692f6879659d47b276f5edda5c113",
      "forgeTree": "d346931179979e34fe9a37b2d85aa0276ca04c2c",
      "companionRepository": "ToadAid/toadaid-app",
      "companionCommit": "8de15239a150f5433d3b8c41f4a4c0dcfa66d8c4",
      "surfaceProjectionPosture": "workflow_preview_not_live_mutation",
      "authorityPosture": {
        "knowledgeAuthority": "KNOWLEDGE_ONLY",
        "executionAuthority": "NONE",
        "runtimeConnection": "NOT_INCLUDED",
        "mutation": "NONE",
        "activation": "NOT_INCLUDED"
      }
    }
  },
  "workflowConsoleLifecycle": {
    "surfaceId": "knowledge-forge-p5e-governed-workflow-console",
    "lifecycleAuthority": "EXTERNAL_REQUIRED_NOT_ESTABLISHED",
    "persistence": "NONE",
    "executable": false
  },
  "authority": "none"
}),
  modeDeclarationRecord: Object.freeze({
  "contractVersion": "pond-agent-declared-operational-mode-d-p12",
  "kind": "pond-agent-declared-operational-mode-declaration",
  "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
  "declaredProfile": "TRADING",
  "declarationBasis": "receiver_recorded_explicit_declared_profile",
  "declarationEvent": {
    "declared_at_epoch_ms": 1800000060000,
    "freshness_basis": "source_observation_time_only",
    "currentness_posture": "not_established_consumer_must_evaluate"
  },
  "stricterLaneRefusalPosture": {
    "laneAdmissionEstablished": false,
    "walletOrSigningAuthorityRefused": true,
    "tradingExecutionRefused": true,
    "credentialUseRefused": true,
    "deploymentOrDestructiveMutationRefused": true,
    "publicPublishingOrSocialPostingRefused": true
  },
  "authority": "none"
}),
  deskSourceContractFixture: Object.freeze({
  "contractVersion": "pond-agent-presence-source-contract-d-p0",
  "kind": "pond-agent-presence-source-contract",
  "sourceContract": {
    "repository": "trading-desk",
    "boundSourceCommit": "57b5c8b966d3eb58cf239b2f3f1598f09f24b296",
    "observedTools": [
      "runtime_status",
      "identity_status"
    ],
    "sourcePosture": "read_only_tool_contract_only_no_live_connection"
  },
  "authority": "none"
}),
  deskPresenceProjection: Object.freeze({
  "contractVersion": "pond-agent-presence-projection-d-p0",
  "kind": "pond-agent-presence-projection",
  "posture": "fixture_observed_presence_projection_authority_none",
  "localPrincipalBinding": {
    "principalRef": "principal:fixture:stage-d-p0:local-principal",
    "bindingState": "fixture_local_projection",
    "authenticationPerformed": false,
    "ceremonyPosture": "not_defined_this_cut"
  },
  "observedAgents": [
    {
      "agentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "label": "Trading Desk (Agent0)",
      "profileClass": "personal_agent",
      "presenceStatus": "fixture_observed_not_live",
      "observedAt": "fixture:stage-d-p0",
      "transport": {
        "transport": "telegram",
        "transportIsAgentIdentity": false,
        "transportEstablishesAdmission": false,
        "liveConnectionPosture": "not_included"
      },
      "runtimeFacts": [
        {
          "factLabel": "brain",
          "sourceTool": "runtime_status",
          "observedValue": "glm",
          "valuePosture": "transcribed_from_source_contract"
        },
        {
          "factLabel": "provider",
          "sourceTool": "runtime_status",
          "observedValue": null,
          "valuePosture": "not_observed"
        },
        {
          "factLabel": "model",
          "sourceTool": "runtime_status",
          "observedValue": null,
          "valuePosture": "not_observed"
        },
        {
          "factLabel": "execution",
          "sourceTool": "runtime_status",
          "observedValue": "dry_run",
          "valuePosture": "transcribed_from_source_contract"
        },
        {
          "factLabel": "trading_state",
          "sourceTool": "runtime_status",
          "observedValue": null,
          "valuePosture": "not_observed"
        },
        {
          "factLabel": "hands",
          "sourceTool": "runtime_status",
          "observedValue": null,
          "valuePosture": "not_observed"
        },
        {
          "factLabel": "doctor_cheap_check",
          "sourceTool": "runtime_status",
          "observedValue": null,
          "valuePosture": "not_observed"
        }
      ],
      "identityClaim": {
        "claimStatus": "not_observed",
        "evidence": {
          "chainIdObserved": null,
          "registryAddress": null,
          "agentId": null,
          "ownerObserved": null,
          "blockTag": null
        },
        "evidencePosture": "observed_evidence_only_no_local_authority",
        "relationshipClaims": {
          "onchainIdentityIsPrincipalIdentity": false,
          "onchainIdentityEstablishesLocalAdmission": false,
          "onchainIdentityEstablishesAuthority": false
        }
      },
      "relationshipState": {
        "membership": "not_established",
        "agentAdmission": "not_established",
        "scopeBinding": "not_established",
        "delegatedAuthority": "not_established"
      },
      "personalMemoryBoundary": {
        "deskJournalLaneAdmitted": false,
        "deskMemoryLaneAdmitted": false,
        "deskNarrativeLaneAdmitted": false,
        "deskTranscriptLaneAdmitted": false
      },
      "authority": "none"
    },
    {
      "agentRef": "agent:fixture:stage-d-p0:community-agent-slot",
      "label": "Community agent slot",
      "profileClass": "community_agent",
      "presenceStatus": "not_observed",
      "observedAt": "fixture:stage-d-p0",
      "transport": {
        "transport": "not_observed",
        "transportIsAgentIdentity": false,
        "transportEstablishesAdmission": false,
        "liveConnectionPosture": "not_included"
      },
      "runtimeFacts": [],
      "identityClaim": {
        "claimStatus": "not_observed",
        "evidence": {
          "chainIdObserved": null,
          "registryAddress": null,
          "agentId": null,
          "ownerObserved": null,
          "blockTag": null
        },
        "evidencePosture": "observed_evidence_only_no_local_authority",
        "relationshipClaims": {
          "onchainIdentityIsPrincipalIdentity": false,
          "onchainIdentityEstablishesLocalAdmission": false,
          "onchainIdentityEstablishesAuthority": false
        }
      },
      "relationshipState": {
        "membership": "not_established",
        "agentAdmission": "not_established",
        "scopeBinding": "not_established",
        "delegatedAuthority": "not_established"
      },
      "personalMemoryBoundary": {
        "deskJournalLaneAdmitted": false,
        "deskMemoryLaneAdmitted": false,
        "deskNarrativeLaneAdmitted": false,
        "deskTranscriptLaneAdmitted": false
      },
      "authority": "none"
    },
    {
      "agentRef": "agent:fixture:stage-d-p0:project-agent-slot",
      "label": "Project agent slot",
      "profileClass": "project_agent",
      "presenceStatus": "not_observed",
      "observedAt": "fixture:stage-d-p0",
      "transport": {
        "transport": "not_observed",
        "transportIsAgentIdentity": false,
        "transportEstablishesAdmission": false,
        "liveConnectionPosture": "not_included"
      },
      "runtimeFacts": [],
      "identityClaim": {
        "claimStatus": "not_observed",
        "evidence": {
          "chainIdObserved": null,
          "registryAddress": null,
          "agentId": null,
          "ownerObserved": null,
          "blockTag": null
        },
        "evidencePosture": "observed_evidence_only_no_local_authority",
        "relationshipClaims": {
          "onchainIdentityIsPrincipalIdentity": false,
          "onchainIdentityEstablishesLocalAdmission": false,
          "onchainIdentityEstablishesAuthority": false
        }
      },
      "relationshipState": {
        "membership": "not_established",
        "agentAdmission": "not_established",
        "scopeBinding": "not_established",
        "delegatedAuthority": "not_established"
      },
      "personalMemoryBoundary": {
        "deskJournalLaneAdmitted": false,
        "deskMemoryLaneAdmitted": false,
        "deskNarrativeLaneAdmitted": false,
        "deskTranscriptLaneAdmitted": false
      },
      "authority": "none"
    }
  ],
  "communityRelationshipState": "not_established",
  "projectRelationshipState": "not_established",
  "personalMemoryBoundary": {
    "deskJournalLaneAdmitted": false,
    "deskMemoryLaneAdmitted": false,
    "deskNarrativeLaneAdmitted": false,
    "deskTranscriptLaneAdmitted": false
  },
  "authority": "none"
}),
});

export const stageDP16Agent0Ref = "agent:fixture:stage-d-p0:trading-desk-agent0";
export const stageDP16CommunitySlotRef = "agent:fixture:stage-d-p0:community-agent-slot";
export const stageDP16ProjectSlotRef = "agent:fixture:stage-d-p0:project-agent-slot";
export const stageDP16UndeclaredAgentRef = "agent:stage-d-p16:undeclared-agent";
export const stageDP16ComposedAtEpochMs = 1800000061000;
export const stageDP16EstablishedAtEpochMs = 1800000060000;
export const stageDP16ExpiredEvaluationEpochMs = 1800000120001;
export const stageDP16StaleEpochMs = 1799999999999;
export const stageDP16RetractedAtEpochMs = 1800000070000;
export const stageDP16RetractedEvaluatedEpochMs = 1800000075000;
export const stageDP16EvaluatedAtEpochMs = 1800000080000;
export const stageDP16ReceiverMaximumAgeMs = 60000;

export const stageDP16BoundaryComposedText = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
export const stageDP16OverComposedText = "a".repeat(2001);

// --- Composed-record admission arms ---

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
export const stageDP16RecordMatrix: readonly PondStageDP16RecordFixtureEntry[] =
  deepFreeze([
    {
      fixtureLabel: "conversation_record_admitted",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_admitted_session_scoped_no_delivery",
  "reason": "all_conversation_record_checks_satisfied",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "unsatisfiedChecks": [],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_admitted_community_slot",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_admitted_session_scoped_no_delivery",
  "reason": "all_conversation_record_checks_satisfied",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "unsatisfiedChecks": [],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_admitted_project_slot",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "kind": "pond-conversation-record",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "recordBasis": "receiver_composed_into_live_session_not_inferred",
  "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
  "addressedAgentRef": "agent:fixture:stage-d-p0:project-agent-slot",
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_admitted_session_scoped_no_delivery",
  "reason": "all_conversation_record_checks_satisfied",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "unsatisfiedChecks": [],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_admitted_boundary_text_2000",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "kind": "pond-conversation-record",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "recordBasis": "receiver_composed_into_live_session_not_inferred",
  "composedRecordText": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_admitted_session_scoped_no_delivery",
  "reason": "all_conversation_record_checks_satisfied",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "unsatisfiedChecks": [],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_inferred_from_provider_session",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "kind": "pond-conversation-record",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "recordBasis": "inferred_from_provider_session",
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "receiver_conversation_record_proof_incomplete",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "unsatisfiedChecks": [
    "conversation_record_basis_receiver_composed_not_inferred"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_asserted_by_model_completion",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "kind": "pond-conversation-record",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "recordBasis": "asserted_by_model_completion",
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "receiver_conversation_record_proof_incomplete",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "unsatisfiedChecks": [
    "conversation_record_basis_receiver_composed_not_inferred"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_inferred_from_room_presence",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "kind": "pond-conversation-record",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "recordBasis": "inferred_from_room_presence",
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "receiver_conversation_record_proof_incomplete",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "unsatisfiedChecks": [
    "conversation_record_basis_receiver_composed_not_inferred"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_inferred_from_conversation_summary",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "kind": "pond-conversation-record",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "recordBasis": "inferred_from_conversation_summary",
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "receiver_conversation_record_proof_incomplete",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "unsatisfiedChecks": [
    "conversation_record_basis_receiver_composed_not_inferred"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_replayed_from_prior_conversation_history",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "kind": "pond-conversation-record",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "recordBasis": "replayed_from_prior_conversation_history",
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "receiver_conversation_record_proof_incomplete",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "unsatisfiedChecks": [
    "conversation_record_basis_receiver_composed_not_inferred"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_empty_text",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "kind": "pond-conversation-record",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "recordBasis": "receiver_composed_into_live_session_not_inferred",
  "composedRecordText": "",
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "conversation_record_composed_text_empty_or_over_recorded_maximum",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_text_over_maximum",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "kind": "pond-conversation-record",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "recordBasis": "receiver_composed_into_live_session_not_inferred",
  "composedRecordText": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "conversation_record_composed_text_empty_or_over_recorded_maximum",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_undeclared_agent_ref",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "kind": "pond-conversation-record",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "recordBasis": "receiver_composed_into_live_session_not_inferred",
  "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
  "addressedAgentRef": "agent:stage-d-p16:undeclared-agent",
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "conversation_record_addressed_agent_not_declared",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_confined_but_unverified_epoch",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
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
  "conversationTrustEpochPosture": "confined_but_unverified",
  "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
  "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
  "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "conversation_record_trust_epoch_not_admissible",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_legacy_epoch",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
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
  "conversationTrustEpochPosture": "legacy",
  "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
  "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
  "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "conversation_record_trust_epoch_not_admissible",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 19000
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_missing_key",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
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
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "invalid",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "conversation_record_invalid",
  "conversationRecordFreshnessDiagnosis": {
    "state": "unknown",
    "reason": "observation_metadata_missing_or_invalid",
    "observationAgeMs": null
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_extra_key_agent_reply",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
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
  "authority": "none",
  "agentReply": {
    "composed": "ready"
  }
},
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "invalid",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "conversation_record_invalid",
  "conversationRecordFreshnessDiagnosis": {
    "state": "unknown",
    "reason": "observation_metadata_missing_or_invalid",
    "observationAgeMs": null
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_future_composed_at",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "kind": "pond-conversation-record",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "recordBasis": "receiver_composed_into_live_session_not_inferred",
  "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
  "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
  "conversationRecordMetadata": {
    "composed_at_epoch_ms": 1800000080001,
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "conversation_record_not_session_current",
  "conversationRecordFreshnessDiagnosis": {
    "state": "unknown",
    "reason": "observation_time_in_future",
    "observationAgeMs": null
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_composed_before_scope",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "kind": "pond-conversation-record",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "recordBasis": "receiver_composed_into_live_session_not_inferred",
  "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
  "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
  "conversationRecordMetadata": {
    "composed_at_epoch_ms": 1800000059999,
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "conversation_record_not_of_the_current_session_scope",
  "conversationRecordFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20001
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_stale_composition",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
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
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "pond-conversation-record-admission-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "conversation_record_not_session_current",
  "conversationRecordFreshnessDiagnosis": {
    "state": "stale",
    "reason": "declared_maximum_age_expired",
    "observationAgeMs": 80001
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_record_refused_tampered_delivery_posture",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      readGateRecord: stageDP16ReadGateRecord,
      establishmentRecord: legs.establishmentRecord,
      dp5CeremonyRecord: legs.dp5CeremonyRecord,
      dp6ObservationRecord: legs.dp6ObservationRecord,
      dp8VerifierRecord: legs.dp8VerifierRecord,
      dp8ProofRecord: legs.dp8ProofRecord,
      dp9IssuanceRecord: legs.dp9IssuanceRecord,
      dp9MappingRecord: legs.dp9MappingRecord,
      dp10ActivationRecord: legs.dp10ActivationRecord,
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: stageDP16EvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
      conversationRecord: {
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
  "conversationDeliveryPosture": "message_delivered_agent_composed_reply_established",
  "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
  "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-record-admission-d-p16",
  "conversationRecordVersion": "invalid",
  "assessmentKind": "deterministic_supplied_conversation_record_admission",
  "conversationRecordState": "conversation_record_not_admitted",
  "reason": "conversation_record_invalid",
  "conversationRecordFreshnessDiagnosis": {
    "state": "unknown",
    "reason": "observation_metadata_missing_or_invalid",
    "observationAgeMs": null
  },
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedEstablishmentFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_record_well_formed",
    "conversation_record_bound_to_receiver_held_principal",
    "conversation_record_basis_receiver_composed_not_inferred",
    "conversation_record_trust_epoch_verified_boundary_session_scoped",
    "composed_text_non_empty_within_recorded_maximum",
    "addressed_agent_reference_declared_in_conversation_vocabulary",
    "composed_at_within_current_session_scope",
    "live_session_read_gate_reinspected_live_activated_and_fresh",
    "conversation_record_own_freshness_within_declared_maximum_age"
  ],
  "messageEstablishesDeliveryOrDispatch": false,
  "messageEstablishesAgentReplyComposition": false,
  "messageEstablishesAuthorityFromProse": false,
  "messageEstablishesScope": false,
  "messageEstablishesMembershipOrRoomPresence": false,
  "messagePromotedToCanonicalMemoryOrVerifiedEvidence": false,
  "messageEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "principalIdAcceptedAsAuthorization": false,
  "personalMemoryContentAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
  ]);

// --- Conversation surface arms ---

export const stageDP16SurfaceMatrix: readonly PondStageDP16SurfaceFixtureEntry[] =
  deepFreeze([
    {
      fixtureLabel: "conversation_surface_presented_with_records",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      receiverHeldAgentRef: stageDP16Agent0Ref,
      conversationRecordInputs: [
  {
    "conversationRecord": {
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
    "receiverMaximumAgeMs": 60000
  },
  {
    "conversationRecord": {
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
    "receiverMaximumAgeMs": 60000
  }
],
      forgeBindingRecord: forgeLegs.forgeBindingRecord,
      modeDeclarationRecord: forgeLegs.modeDeclarationRecord,
      deskSourceContractFixture: forgeLegs.deskSourceContractFixture,
      deskPresenceProjection: forgeLegs.deskPresenceProjection,
      readGateRecord: {
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
      establishmentRecord: {
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
      dp5CeremonyRecord: {
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
      dp6ObservationRecord: {
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
      dp8VerifierRecord: {
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
      dp8ProofRecord: {
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
      dp9IssuanceRecord: {
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
      dp9MappingRecord: {
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
      dp10ActivationRecord: {
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
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000080000,
      receiverMaximumAgeMs: 60000,
      conversationSurfaceRecord: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "kind": "pond-conversation-surface",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "surfaceBasis": "receiver_recorded_conversation_surface_presentation_not_inferred",
  "surfacePresentationPosture": "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",
  "conversationTrustEpochPosture": "verified_boundary_session_scoped",
  "agentPosturePresentationPosture": "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
  "surfaceEndPosture": "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "surfaceDeliveryRefusalPosture": "surface_informs_nothing_is_delivered_dispatched_or_replied",
  "surfaceMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "surfaceAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "surfaceRecordVersion": "pond-conversation-surface-posture-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_surface_posture",
  "conversationSurfaceState": "live_session_conversation_surface_presented",
  "reason": "all_conversation_surface_checks_satisfied",
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "recordEntries": [
    {
      "presentationTrustMark": "in_session_verified_boundary_session_scoped",
      "echoedRecordState": "conversation_record_admitted_session_scoped_no_delivery",
      "echoedRecordReason": "all_conversation_record_checks_satisfied"
    },
    {
      "presentationTrustMark": "in_session_verified_boundary_session_scoped",
      "echoedRecordState": "conversation_record_admitted_session_scoped_no_delivery",
      "echoedRecordReason": "all_conversation_record_checks_satisfied"
    }
  ],
  "agentPostureEchoes": [
    {
      "presentationAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "presentedAgentPosture": "addressed_agent_structural_posture_presented",
      "echoedRoutingState": "declared_mode_routing_established",
      "echoedRoutingReason": "declared_mode_routing_established",
      "echoedDeclaredProfile": "TRADING",
      "echoedRefusedDeclarationBasis": null,
      "echoedDeskAgentJoinState": "agent_record_observed",
      "echoedDeclarationFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      }
    },
    {
      "presentationAgentRef": "agent:fixture:stage-d-p0:community-agent-slot",
      "presentedAgentPosture": "addressed_agent_structural_posture_refused_no_declared_mode_structural_record",
      "echoedRoutingState": "routing_not_established",
      "echoedRoutingReason": "composition_not_complete",
      "echoedDeclaredProfile": "TRADING",
      "echoedRefusedDeclarationBasis": null,
      "echoedDeskAgentJoinState": "agent_record_observed",
      "echoedDeclarationFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      }
    }
  ],
  "satisfiedChecks": [
    "conversation_surface_record_well_formed",
    "conversation_surface_bound_to_receiver_held_principal",
    "conversation_surface_basis_receiver_recorded_not_inferred",
    "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
    "presented_records_all_within_current_session_scope",
    "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
    "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  ],
  "unsatisfiedChecks": [],
  "surfaceEstablishesGrant": false,
  "surfaceEstablishesDeliveryOrDispatch": false,
  "surfaceEstablishesAgentReplyComposition": false,
  "surfaceEstablishesAuthorityFromProse": false,
  "surfaceEstablishesMembershipOrRoomPresence": false,
  "surfaceEstablishesAgentAccess": false,
  "surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence": false,
  "surfaceEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "personalMemoryContentAdmitted": false,
  "currentTruthAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_surface_presented_empty",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      receiverHeldAgentRef: stageDP16Agent0Ref,
      conversationRecordInputs: [],
      forgeBindingRecord: forgeLegs.forgeBindingRecord,
      modeDeclarationRecord: forgeLegs.modeDeclarationRecord,
      deskSourceContractFixture: forgeLegs.deskSourceContractFixture,
      deskPresenceProjection: forgeLegs.deskPresenceProjection,
      readGateRecord: {
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
      establishmentRecord: {
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
      dp5CeremonyRecord: {
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
      dp6ObservationRecord: {
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
      dp8VerifierRecord: {
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
      dp8ProofRecord: {
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
      dp9IssuanceRecord: {
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
      dp9MappingRecord: {
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
      dp10ActivationRecord: {
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
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000080000,
      receiverMaximumAgeMs: 60000,
      conversationSurfaceRecord: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "kind": "pond-conversation-surface",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "surfaceBasis": "receiver_recorded_conversation_surface_presentation_not_inferred",
  "surfacePresentationPosture": "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",
  "conversationTrustEpochPosture": "verified_boundary_session_scoped",
  "agentPosturePresentationPosture": "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
  "surfaceEndPosture": "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "surfaceDeliveryRefusalPosture": "surface_informs_nothing_is_delivered_dispatched_or_replied",
  "surfaceMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "surfaceAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "surfaceRecordVersion": "pond-conversation-surface-posture-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_surface_posture",
  "conversationSurfaceState": "live_session_conversation_surface_presented",
  "reason": "all_conversation_surface_checks_satisfied",
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "recordEntries": [],
  "agentPostureEchoes": [],
  "satisfiedChecks": [
    "conversation_surface_record_well_formed",
    "conversation_surface_bound_to_receiver_held_principal",
    "conversation_surface_basis_receiver_recorded_not_inferred",
    "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
    "presented_records_all_within_current_session_scope",
    "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
    "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  ],
  "unsatisfiedChecks": [],
  "surfaceEstablishesGrant": false,
  "surfaceEstablishesDeliveryOrDispatch": false,
  "surfaceEstablishesAgentReplyComposition": false,
  "surfaceEstablishesAuthorityFromProse": false,
  "surfaceEstablishesMembershipOrRoomPresence": false,
  "surfaceEstablishesAgentAccess": false,
  "surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence": false,
  "surfaceEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "personalMemoryContentAdmitted": false,
  "currentTruthAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_surface_refused_never_established",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      receiverHeldAgentRef: stageDP16Agent0Ref,
      conversationRecordInputs: [],
      forgeBindingRecord: forgeLegs.forgeBindingRecord,
      modeDeclarationRecord: forgeLegs.modeDeclarationRecord,
      deskSourceContractFixture: forgeLegs.deskSourceContractFixture,
      deskPresenceProjection: forgeLegs.deskPresenceProjection,
      readGateRecord: {
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
      establishmentRecord: {
  "contractVersion": "pond-live-session-establishment-d-p15",
  "kind": "pond-live-session-establishment",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "establishmentBasis": "inferred_from_session_presence",
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
      dp5CeremonyRecord: {
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
      dp6ObservationRecord: {
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
      dp8VerifierRecord: {
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
      dp8ProofRecord: {
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
      dp9IssuanceRecord: {
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
      dp9MappingRecord: {
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
      dp10ActivationRecord: {
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
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000080000,
      receiverMaximumAgeMs: 60000,
      conversationSurfaceRecord: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "kind": "pond-conversation-surface",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "surfaceBasis": "receiver_recorded_conversation_surface_presentation_not_inferred",
  "surfacePresentationPosture": "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",
  "conversationTrustEpochPosture": "verified_boundary_session_scoped",
  "agentPosturePresentationPosture": "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
  "surfaceEndPosture": "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "surfaceDeliveryRefusalPosture": "surface_informs_nothing_is_delivered_dispatched_or_replied",
  "surfaceMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "surfaceAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "surfaceRecordVersion": "pond-conversation-surface-posture-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_surface_posture",
  "conversationSurfaceState": "conversation_surface_not_presented",
  "reason": "live_session_not_established_refused_or_not_fresh",
  "mappedEstablishmentState": "not_established",
  "mappedEstablishmentReason": "receiver_session_establishment_proof_incomplete",
  "mappedReadGateState": "no_active_live_session",
  "mappedReadGateReason": "live_session_not_established_refused_or_not_fresh",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "recordEntries": [],
  "agentPostureEchoes": [],
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_surface_record_well_formed",
    "conversation_surface_bound_to_receiver_held_principal",
    "conversation_surface_basis_receiver_recorded_not_inferred",
    "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
    "presented_records_all_within_current_session_scope",
    "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
    "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  ],
  "surfaceEstablishesGrant": false,
  "surfaceEstablishesDeliveryOrDispatch": false,
  "surfaceEstablishesAgentReplyComposition": false,
  "surfaceEstablishesAuthorityFromProse": false,
  "surfaceEstablishesMembershipOrRoomPresence": false,
  "surfaceEstablishesAgentAccess": false,
  "surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence": false,
  "surfaceEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "personalMemoryContentAdmitted": false,
  "currentTruthAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_surface_scope_ended_expired_with_records",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      receiverHeldAgentRef: stageDP16Agent0Ref,
      conversationRecordInputs: [
  {
    "conversationRecord": {
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
    "receiverMaximumAgeMs": 60000
  },
  {
    "conversationRecord": {
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
    "receiverMaximumAgeMs": 60000
  }
],
      forgeBindingRecord: forgeLegs.forgeBindingRecord,
      modeDeclarationRecord: forgeLegs.modeDeclarationRecord,
      deskSourceContractFixture: forgeLegs.deskSourceContractFixture,
      deskPresenceProjection: forgeLegs.deskPresenceProjection,
      readGateRecord: {
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
      establishmentRecord: {
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
      dp5CeremonyRecord: {
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
      dp6ObservationRecord: {
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
      dp8VerifierRecord: {
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
      dp8ProofRecord: {
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
      dp9IssuanceRecord: {
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
      dp9MappingRecord: {
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
      dp10ActivationRecord: {
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
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000120001,
      receiverMaximumAgeMs: 60000,
      conversationSurfaceRecord: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "kind": "pond-conversation-surface",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "surfaceBasis": "receiver_recorded_conversation_surface_presentation_not_inferred",
  "surfacePresentationPosture": "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",
  "conversationTrustEpochPosture": "verified_boundary_session_scoped",
  "agentPosturePresentationPosture": "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
  "surfaceEndPosture": "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "surfaceDeliveryRefusalPosture": "surface_informs_nothing_is_delivered_dispatched_or_replied",
  "surfaceMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "surfaceAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "surfaceRecordVersion": "pond-conversation-surface-posture-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_surface_posture",
  "conversationSurfaceState": "conversation_surface_scope_ended_records_inspection_only",
  "reason": "live_session_not_established_refused_or_not_fresh",
  "mappedEstablishmentState": "not_established",
  "mappedEstablishmentReason": "session_establishment_not_session_current",
  "mappedReadGateState": "no_active_live_session",
  "mappedReadGateReason": "live_session_not_established_refused_or_not_fresh",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "stale",
    "reason": "declared_maximum_age_expired",
    "observationAgeMs": 60001
  },
  "recordEntries": [
    {
      "presentationTrustMark": "out_of_session_record_not_admissible",
      "echoedRecordState": "conversation_record_not_admitted",
      "echoedRecordReason": "live_session_read_gate_not_live_activated_refused_or_not_fresh"
    },
    {
      "presentationTrustMark": "out_of_session_record_not_admissible",
      "echoedRecordState": "conversation_record_not_admitted",
      "echoedRecordReason": "live_session_read_gate_not_live_activated_refused_or_not_fresh"
    }
  ],
  "agentPostureEchoes": [
    {
      "presentationAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "presentedAgentPosture": "addressed_agent_structural_posture_refused_no_declared_mode_structural_record",
      "echoedRoutingState": "routing_not_established",
      "echoedRoutingReason": "declaration_not_fresh_within_declared_maximum_age",
      "echoedDeclaredProfile": "TRADING",
      "echoedRefusedDeclarationBasis": null,
      "echoedDeskAgentJoinState": "agent_record_observed",
      "echoedDeclarationFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 60001
      }
    },
    {
      "presentationAgentRef": "agent:fixture:stage-d-p0:community-agent-slot",
      "presentedAgentPosture": "addressed_agent_structural_posture_refused_no_declared_mode_structural_record",
      "echoedRoutingState": "routing_not_established",
      "echoedRoutingReason": "declaration_not_fresh_within_declared_maximum_age",
      "echoedDeclaredProfile": "TRADING",
      "echoedRefusedDeclarationBasis": null,
      "echoedDeskAgentJoinState": "agent_record_observed",
      "echoedDeclarationFreshnessDiagnosis": {
        "state": "stale",
        "reason": "declared_maximum_age_expired",
        "observationAgeMs": 60001
      }
    }
  ],
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_surface_record_well_formed",
    "conversation_surface_bound_to_receiver_held_principal",
    "conversation_surface_basis_receiver_recorded_not_inferred",
    "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
    "presented_records_all_within_current_session_scope",
    "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
    "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  ],
  "surfaceEstablishesGrant": false,
  "surfaceEstablishesDeliveryOrDispatch": false,
  "surfaceEstablishesAgentReplyComposition": false,
  "surfaceEstablishesAuthorityFromProse": false,
  "surfaceEstablishesMembershipOrRoomPresence": false,
  "surfaceEstablishesAgentAccess": false,
  "surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence": false,
  "surfaceEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "personalMemoryContentAdmitted": false,
  "currentTruthAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_surface_scope_ended_retracted_with_records",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      receiverHeldAgentRef: stageDP16Agent0Ref,
      conversationRecordInputs: [
  {
    "conversationRecord": {
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
    "receiverMaximumAgeMs": 60000
  }
],
      forgeBindingRecord: forgeLegs.forgeBindingRecord,
      modeDeclarationRecord: forgeLegs.modeDeclarationRecord,
      deskSourceContractFixture: forgeLegs.deskSourceContractFixture,
      deskPresenceProjection: forgeLegs.deskPresenceProjection,
      readGateRecord: {
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
      establishmentRecord: {
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
      dp5CeremonyRecord: {
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
      dp6ObservationRecord: {
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
      dp8VerifierRecord: {
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
      dp8ProofRecord: {
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
      dp9IssuanceRecord: {
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
      dp9MappingRecord: {
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
      dp10ActivationRecord: {
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
      receiverRetractionRecord: {
  "contractVersion": "pond-live-session-retraction-d-p15",
  "kind": "pond-live-session-retraction",
  "retracted_at_epoch_ms": 1800000070000,
  "retractionPosture": "receiver_recorded_live_session_retraction_no_grant",
  "authority": "none"
},
      receiverEvaluatedAtEpochMs: 1800000075000,
      receiverMaximumAgeMs: 60000,
      conversationSurfaceRecord: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "kind": "pond-conversation-surface",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "surfaceBasis": "receiver_recorded_conversation_surface_presentation_not_inferred",
  "surfacePresentationPosture": "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",
  "conversationTrustEpochPosture": "verified_boundary_session_scoped",
  "agentPosturePresentationPosture": "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
  "surfaceEndPosture": "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "surfaceDeliveryRefusalPosture": "surface_informs_nothing_is_delivered_dispatched_or_replied",
  "surfaceMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "surfaceAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "surfaceRecordVersion": "pond-conversation-surface-posture-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_surface_posture",
  "conversationSurfaceState": "conversation_surface_scope_ended_records_inspection_only",
  "reason": "live_session_not_established_refused_or_not_fresh",
  "mappedEstablishmentState": "not_established",
  "mappedEstablishmentReason": "receiver_retraction_on_record",
  "mappedReadGateState": "no_active_live_session",
  "mappedReadGateReason": "live_session_not_established_refused_or_not_fresh",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 15000
  },
  "recordEntries": [
    {
      "presentationTrustMark": "out_of_session_record_not_admissible",
      "echoedRecordState": "conversation_record_not_admitted",
      "echoedRecordReason": "live_session_read_gate_not_live_activated_refused_or_not_fresh"
    }
  ],
  "agentPostureEchoes": [
    {
      "presentationAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "presentedAgentPosture": "addressed_agent_structural_posture_presented",
      "echoedRoutingState": "declared_mode_routing_established",
      "echoedRoutingReason": "declared_mode_routing_established",
      "echoedDeclaredProfile": "TRADING",
      "echoedRefusedDeclarationBasis": null,
      "echoedDeskAgentJoinState": "agent_record_observed",
      "echoedDeclarationFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 15000
      }
    }
  ],
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_surface_record_well_formed",
    "conversation_surface_bound_to_receiver_held_principal",
    "conversation_surface_basis_receiver_recorded_not_inferred",
    "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
    "presented_records_all_within_current_session_scope",
    "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
    "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  ],
  "surfaceEstablishesGrant": false,
  "surfaceEstablishesDeliveryOrDispatch": false,
  "surfaceEstablishesAgentReplyComposition": false,
  "surfaceEstablishesAuthorityFromProse": false,
  "surfaceEstablishesMembershipOrRoomPresence": false,
  "surfaceEstablishesAgentAccess": false,
  "surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence": false,
  "surfaceEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "personalMemoryContentAdmitted": false,
  "currentTruthAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_surface_refused_inferred_from_live_session_establishment",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      receiverHeldAgentRef: stageDP16Agent0Ref,
      conversationRecordInputs: [
  {
    "conversationRecord": {
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
    "receiverMaximumAgeMs": 60000
  }
],
      forgeBindingRecord: forgeLegs.forgeBindingRecord,
      modeDeclarationRecord: forgeLegs.modeDeclarationRecord,
      deskSourceContractFixture: forgeLegs.deskSourceContractFixture,
      deskPresenceProjection: forgeLegs.deskPresenceProjection,
      readGateRecord: {
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
      establishmentRecord: {
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
      dp5CeremonyRecord: {
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
      dp6ObservationRecord: {
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
      dp8VerifierRecord: {
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
      dp8ProofRecord: {
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
      dp9IssuanceRecord: {
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
      dp9MappingRecord: {
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
      dp10ActivationRecord: {
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
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000080000,
      receiverMaximumAgeMs: 60000,
      conversationSurfaceRecord: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "kind": "pond-conversation-surface",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "surfaceBasis": "inferred_from_live_session_establishment",
  "surfacePresentationPosture": "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",
  "conversationTrustEpochPosture": "verified_boundary_session_scoped",
  "agentPosturePresentationPosture": "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
  "surfaceEndPosture": "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "surfaceDeliveryRefusalPosture": "surface_informs_nothing_is_delivered_dispatched_or_replied",
  "surfaceMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "surfaceAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "surfaceRecordVersion": "pond-conversation-surface-posture-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_surface_posture",
  "conversationSurfaceState": "conversation_surface_not_presented",
  "reason": "receiver_conversation_surface_proof_incomplete",
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "recordEntries": [
    {
      "presentationTrustMark": "in_session_verified_boundary_session_scoped",
      "echoedRecordState": "conversation_record_admitted_session_scoped_no_delivery",
      "echoedRecordReason": "all_conversation_record_checks_satisfied"
    }
  ],
  "agentPostureEchoes": [
    {
      "presentationAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "presentedAgentPosture": "addressed_agent_structural_posture_presented",
      "echoedRoutingState": "declared_mode_routing_established",
      "echoedRoutingReason": "declared_mode_routing_established",
      "echoedDeclaredProfile": "TRADING",
      "echoedRefusedDeclarationBasis": null,
      "echoedDeskAgentJoinState": "agent_record_observed",
      "echoedDeclarationFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      }
    }
  ],
  "satisfiedChecks": [
    "conversation_surface_record_well_formed",
    "conversation_surface_bound_to_receiver_held_principal",
    "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
    "presented_records_all_within_current_session_scope",
    "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
    "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  ],
  "unsatisfiedChecks": [
    "conversation_surface_basis_receiver_recorded_not_inferred"
  ],
  "surfaceEstablishesGrant": false,
  "surfaceEstablishesDeliveryOrDispatch": false,
  "surfaceEstablishesAgentReplyComposition": false,
  "surfaceEstablishesAuthorityFromProse": false,
  "surfaceEstablishesMembershipOrRoomPresence": false,
  "surfaceEstablishesAgentAccess": false,
  "surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence": false,
  "surfaceEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "personalMemoryContentAdmitted": false,
  "currentTruthAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_surface_refused_inferred_from_conversation_history",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      receiverHeldAgentRef: stageDP16Agent0Ref,
      conversationRecordInputs: [
  {
    "conversationRecord": {
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
    "receiverMaximumAgeMs": 60000
  }
],
      forgeBindingRecord: forgeLegs.forgeBindingRecord,
      modeDeclarationRecord: forgeLegs.modeDeclarationRecord,
      deskSourceContractFixture: forgeLegs.deskSourceContractFixture,
      deskPresenceProjection: forgeLegs.deskPresenceProjection,
      readGateRecord: {
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
      establishmentRecord: {
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
      dp5CeremonyRecord: {
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
      dp6ObservationRecord: {
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
      dp8VerifierRecord: {
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
      dp8ProofRecord: {
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
      dp9IssuanceRecord: {
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
      dp9MappingRecord: {
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
      dp10ActivationRecord: {
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
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000080000,
      receiverMaximumAgeMs: 60000,
      conversationSurfaceRecord: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "kind": "pond-conversation-surface",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "surfaceBasis": "inferred_from_conversation_history",
  "surfacePresentationPosture": "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",
  "conversationTrustEpochPosture": "verified_boundary_session_scoped",
  "agentPosturePresentationPosture": "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
  "surfaceEndPosture": "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "surfaceDeliveryRefusalPosture": "surface_informs_nothing_is_delivered_dispatched_or_replied",
  "surfaceMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "surfaceAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "surfaceRecordVersion": "pond-conversation-surface-posture-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_surface_posture",
  "conversationSurfaceState": "conversation_surface_not_presented",
  "reason": "receiver_conversation_surface_proof_incomplete",
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "recordEntries": [
    {
      "presentationTrustMark": "in_session_verified_boundary_session_scoped",
      "echoedRecordState": "conversation_record_admitted_session_scoped_no_delivery",
      "echoedRecordReason": "all_conversation_record_checks_satisfied"
    }
  ],
  "agentPostureEchoes": [
    {
      "presentationAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "presentedAgentPosture": "addressed_agent_structural_posture_presented",
      "echoedRoutingState": "declared_mode_routing_established",
      "echoedRoutingReason": "declared_mode_routing_established",
      "echoedDeclaredProfile": "TRADING",
      "echoedRefusedDeclarationBasis": null,
      "echoedDeskAgentJoinState": "agent_record_observed",
      "echoedDeclarationFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      }
    }
  ],
  "satisfiedChecks": [
    "conversation_surface_record_well_formed",
    "conversation_surface_bound_to_receiver_held_principal",
    "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
    "presented_records_all_within_current_session_scope",
    "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
    "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  ],
  "unsatisfiedChecks": [
    "conversation_surface_basis_receiver_recorded_not_inferred"
  ],
  "surfaceEstablishesGrant": false,
  "surfaceEstablishesDeliveryOrDispatch": false,
  "surfaceEstablishesAgentReplyComposition": false,
  "surfaceEstablishesAuthorityFromProse": false,
  "surfaceEstablishesMembershipOrRoomPresence": false,
  "surfaceEstablishesAgentAccess": false,
  "surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence": false,
  "surfaceEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "personalMemoryContentAdmitted": false,
  "currentTruthAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_surface_refused_asserted_by_shell_producer",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      receiverHeldAgentRef: stageDP16Agent0Ref,
      conversationRecordInputs: [
  {
    "conversationRecord": {
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
    "receiverMaximumAgeMs": 60000
  }
],
      forgeBindingRecord: forgeLegs.forgeBindingRecord,
      modeDeclarationRecord: forgeLegs.modeDeclarationRecord,
      deskSourceContractFixture: forgeLegs.deskSourceContractFixture,
      deskPresenceProjection: forgeLegs.deskPresenceProjection,
      readGateRecord: {
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
      establishmentRecord: {
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
      dp5CeremonyRecord: {
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
      dp6ObservationRecord: {
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
      dp8VerifierRecord: {
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
      dp8ProofRecord: {
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
      dp9IssuanceRecord: {
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
      dp9MappingRecord: {
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
      dp10ActivationRecord: {
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
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000080000,
      receiverMaximumAgeMs: 60000,
      conversationSurfaceRecord: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "kind": "pond-conversation-surface",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "surfaceBasis": "asserted_by_shell_producer",
  "surfacePresentationPosture": "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",
  "conversationTrustEpochPosture": "verified_boundary_session_scoped",
  "agentPosturePresentationPosture": "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
  "surfaceEndPosture": "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "surfaceDeliveryRefusalPosture": "surface_informs_nothing_is_delivered_dispatched_or_replied",
  "surfaceMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "surfaceAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "surfaceRecordVersion": "pond-conversation-surface-posture-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_surface_posture",
  "conversationSurfaceState": "conversation_surface_not_presented",
  "reason": "receiver_conversation_surface_proof_incomplete",
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "recordEntries": [
    {
      "presentationTrustMark": "in_session_verified_boundary_session_scoped",
      "echoedRecordState": "conversation_record_admitted_session_scoped_no_delivery",
      "echoedRecordReason": "all_conversation_record_checks_satisfied"
    }
  ],
  "agentPostureEchoes": [
    {
      "presentationAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "presentedAgentPosture": "addressed_agent_structural_posture_presented",
      "echoedRoutingState": "declared_mode_routing_established",
      "echoedRoutingReason": "declared_mode_routing_established",
      "echoedDeclaredProfile": "TRADING",
      "echoedRefusedDeclarationBasis": null,
      "echoedDeskAgentJoinState": "agent_record_observed",
      "echoedDeclarationFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      }
    }
  ],
  "satisfiedChecks": [
    "conversation_surface_record_well_formed",
    "conversation_surface_bound_to_receiver_held_principal",
    "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
    "presented_records_all_within_current_session_scope",
    "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
    "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  ],
  "unsatisfiedChecks": [
    "conversation_surface_basis_receiver_recorded_not_inferred"
  ],
  "surfaceEstablishesGrant": false,
  "surfaceEstablishesDeliveryOrDispatch": false,
  "surfaceEstablishesAgentReplyComposition": false,
  "surfaceEstablishesAuthorityFromProse": false,
  "surfaceEstablishesMembershipOrRoomPresence": false,
  "surfaceEstablishesAgentAccess": false,
  "surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence": false,
  "surfaceEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "personalMemoryContentAdmitted": false,
  "currentTruthAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_surface_refused_inferred_from_room_presence",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      receiverHeldAgentRef: stageDP16Agent0Ref,
      conversationRecordInputs: [
  {
    "conversationRecord": {
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
    "receiverMaximumAgeMs": 60000
  }
],
      forgeBindingRecord: forgeLegs.forgeBindingRecord,
      modeDeclarationRecord: forgeLegs.modeDeclarationRecord,
      deskSourceContractFixture: forgeLegs.deskSourceContractFixture,
      deskPresenceProjection: forgeLegs.deskPresenceProjection,
      readGateRecord: {
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
      establishmentRecord: {
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
      dp5CeremonyRecord: {
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
      dp6ObservationRecord: {
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
      dp8VerifierRecord: {
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
      dp8ProofRecord: {
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
      dp9IssuanceRecord: {
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
      dp9MappingRecord: {
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
      dp10ActivationRecord: {
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
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000080000,
      receiverMaximumAgeMs: 60000,
      conversationSurfaceRecord: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "kind": "pond-conversation-surface",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "surfaceBasis": "inferred_from_room_presence",
  "surfacePresentationPosture": "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",
  "conversationTrustEpochPosture": "verified_boundary_session_scoped",
  "agentPosturePresentationPosture": "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
  "surfaceEndPosture": "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "surfaceDeliveryRefusalPosture": "surface_informs_nothing_is_delivered_dispatched_or_replied",
  "surfaceMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "surfaceAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "surfaceRecordVersion": "pond-conversation-surface-posture-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_surface_posture",
  "conversationSurfaceState": "conversation_surface_not_presented",
  "reason": "receiver_conversation_surface_proof_incomplete",
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "recordEntries": [
    {
      "presentationTrustMark": "in_session_verified_boundary_session_scoped",
      "echoedRecordState": "conversation_record_admitted_session_scoped_no_delivery",
      "echoedRecordReason": "all_conversation_record_checks_satisfied"
    }
  ],
  "agentPostureEchoes": [
    {
      "presentationAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "presentedAgentPosture": "addressed_agent_structural_posture_presented",
      "echoedRoutingState": "declared_mode_routing_established",
      "echoedRoutingReason": "declared_mode_routing_established",
      "echoedDeclaredProfile": "TRADING",
      "echoedRefusedDeclarationBasis": null,
      "echoedDeskAgentJoinState": "agent_record_observed",
      "echoedDeclarationFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      }
    }
  ],
  "satisfiedChecks": [
    "conversation_surface_record_well_formed",
    "conversation_surface_bound_to_receiver_held_principal",
    "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
    "presented_records_all_within_current_session_scope",
    "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
    "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  ],
  "unsatisfiedChecks": [
    "conversation_surface_basis_receiver_recorded_not_inferred"
  ],
  "surfaceEstablishesGrant": false,
  "surfaceEstablishesDeliveryOrDispatch": false,
  "surfaceEstablishesAgentReplyComposition": false,
  "surfaceEstablishesAuthorityFromProse": false,
  "surfaceEstablishesMembershipOrRoomPresence": false,
  "surfaceEstablishesAgentAccess": false,
  "surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence": false,
  "surfaceEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "personalMemoryContentAdmitted": false,
  "currentTruthAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_surface_refused_tampered_posture",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      receiverHeldAgentRef: stageDP16Agent0Ref,
      conversationRecordInputs: [
  {
    "conversationRecord": {
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
    "receiverMaximumAgeMs": 60000
  }
],
      forgeBindingRecord: forgeLegs.forgeBindingRecord,
      modeDeclarationRecord: forgeLegs.modeDeclarationRecord,
      deskSourceContractFixture: forgeLegs.deskSourceContractFixture,
      deskPresenceProjection: forgeLegs.deskPresenceProjection,
      readGateRecord: {
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
      establishmentRecord: {
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
      dp5CeremonyRecord: {
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
      dp6ObservationRecord: {
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
      dp8VerifierRecord: {
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
      dp8ProofRecord: {
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
      dp9IssuanceRecord: {
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
      dp9MappingRecord: {
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
      dp10ActivationRecord: {
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
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000080000,
      receiverMaximumAgeMs: 60000,
      conversationSurfaceRecord: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "kind": "pond-conversation-surface",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "surfaceBasis": "receiver_recorded_conversation_surface_presentation_not_inferred",
  "surfacePresentationPosture": "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",
  "conversationTrustEpochPosture": "verified_boundary_session_scoped",
  "agentPosturePresentationPosture": "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
  "surfaceEndPosture": "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "surfaceDeliveryRefusalPosture": "surface_informs_nothing_is_delivered_dispatched_or_replied",
  "surfaceMemoryPosture": "conversation_context_promoted_to_canonical_memory",
  "surfaceAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "surfaceRecordVersion": "invalid",
  "assessmentKind": "deterministic_supplied_conversation_surface_posture",
  "conversationSurfaceState": "conversation_surface_not_presented",
  "reason": "conversation_surface_record_invalid",
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "recordEntries": [
    {
      "presentationTrustMark": "in_session_verified_boundary_session_scoped",
      "echoedRecordState": "conversation_record_admitted_session_scoped_no_delivery",
      "echoedRecordReason": "all_conversation_record_checks_satisfied"
    }
  ],
  "agentPostureEchoes": [
    {
      "presentationAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "presentedAgentPosture": "addressed_agent_structural_posture_presented",
      "echoedRoutingState": "declared_mode_routing_established",
      "echoedRoutingReason": "declared_mode_routing_established",
      "echoedDeclaredProfile": "TRADING",
      "echoedRefusedDeclarationBasis": null,
      "echoedDeskAgentJoinState": "agent_record_observed",
      "echoedDeclarationFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      }
    }
  ],
  "satisfiedChecks": [],
  "unsatisfiedChecks": [
    "conversation_surface_record_well_formed",
    "conversation_surface_bound_to_receiver_held_principal",
    "conversation_surface_basis_receiver_recorded_not_inferred",
    "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
    "presented_records_all_within_current_session_scope",
    "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
    "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  ],
  "surfaceEstablishesGrant": false,
  "surfaceEstablishesDeliveryOrDispatch": false,
  "surfaceEstablishesAgentReplyComposition": false,
  "surfaceEstablishesAuthorityFromProse": false,
  "surfaceEstablishesMembershipOrRoomPresence": false,
  "surfaceEstablishesAgentAccess": false,
  "surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence": false,
  "surfaceEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "personalMemoryContentAdmitted": false,
  "currentTruthAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_surface_presented_with_confined_record_marked_inspection_only",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      receiverHeldAgentRef: stageDP16Agent0Ref,
      conversationRecordInputs: [
  {
    "conversationRecord": {
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
      "conversationTrustEpochPosture": "confined_but_unverified",
      "conversationProvenancePosture": "receiver_authored_composed_in_session_not_agent_authored_not_remote",
      "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
      "conversationDeliveryPosture": "message_informed_not_delivered_delivery_refused_until_its_own_lane",
      "conversationReplyPosture": "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
      "conversationMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
      "conversationAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
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
    "receiverEvaluatedAtEpochMs": 1800000080000,
    "receiverMaximumAgeMs": 60000
  }
],
      forgeBindingRecord: forgeLegs.forgeBindingRecord,
      modeDeclarationRecord: forgeLegs.modeDeclarationRecord,
      deskSourceContractFixture: forgeLegs.deskSourceContractFixture,
      deskPresenceProjection: forgeLegs.deskPresenceProjection,
      readGateRecord: {
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
      establishmentRecord: {
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
      dp5CeremonyRecord: {
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
      dp6ObservationRecord: {
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
      dp8VerifierRecord: {
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
      dp8ProofRecord: {
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
      dp9IssuanceRecord: {
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
      dp9MappingRecord: {
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
      dp10ActivationRecord: {
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
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000080000,
      receiverMaximumAgeMs: 60000,
      conversationSurfaceRecord: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "kind": "pond-conversation-surface",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "surfaceBasis": "receiver_recorded_conversation_surface_presentation_not_inferred",
  "surfacePresentationPosture": "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",
  "conversationTrustEpochPosture": "verified_boundary_session_scoped",
  "agentPosturePresentationPosture": "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
  "surfaceEndPosture": "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "surfaceDeliveryRefusalPosture": "surface_informs_nothing_is_delivered_dispatched_or_replied",
  "surfaceMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "surfaceAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "surfaceRecordVersion": "pond-conversation-surface-posture-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_surface_posture",
  "conversationSurfaceState": "live_session_conversation_surface_presented",
  "reason": "all_conversation_surface_checks_satisfied",
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "recordEntries": [
    {
      "presentationTrustMark": "out_of_session_untrusted_epoch_inspection_only_never_consumer_admissible",
      "echoedRecordState": "conversation_record_not_admitted",
      "echoedRecordReason": "conversation_record_trust_epoch_not_admissible"
    }
  ],
  "agentPostureEchoes": [
    {
      "presentationAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "presentedAgentPosture": "addressed_agent_structural_posture_presented",
      "echoedRoutingState": "declared_mode_routing_established",
      "echoedRoutingReason": "declared_mode_routing_established",
      "echoedDeclaredProfile": "TRADING",
      "echoedRefusedDeclarationBasis": null,
      "echoedDeskAgentJoinState": "agent_record_observed",
      "echoedDeclarationFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      }
    }
  ],
  "satisfiedChecks": [
    "conversation_surface_record_well_formed",
    "conversation_surface_bound_to_receiver_held_principal",
    "conversation_surface_basis_receiver_recorded_not_inferred",
    "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
    "presented_records_all_within_current_session_scope",
    "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
    "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  ],
  "unsatisfiedChecks": [],
  "surfaceEstablishesGrant": false,
  "surfaceEstablishesDeliveryOrDispatch": false,
  "surfaceEstablishesAgentReplyComposition": false,
  "surfaceEstablishesAuthorityFromProse": false,
  "surfaceEstablishesMembershipOrRoomPresence": false,
  "surfaceEstablishesAgentAccess": false,
  "surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence": false,
  "surfaceEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "personalMemoryContentAdmitted": false,
  "currentTruthAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
    {
      fixtureLabel: "conversation_surface_refused_records_from_earlier_session_scope",
      receiverHeldPrincipalRef: stageDP16ReceiverRef,
      receiverHeldAgentRef: stageDP16Agent0Ref,
      conversationRecordInputs: [
  {
    "conversationRecord": {
      "contractVersion": "pond-conversation-record-admission-d-p16",
      "kind": "pond-conversation-record",
      "principalRef": "principal:fixture:stage-d-p0:local-principal",
      "recordBasis": "receiver_composed_into_live_session_not_inferred",
      "composedRecordText": "Desk, we ride at dawn. Ready your structural reads.",
      "addressedAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "conversationRecordMetadata": {
        "composed_at_epoch_ms": 1800000059999,
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
    "receiverMaximumAgeMs": 60000
  }
],
      forgeBindingRecord: forgeLegs.forgeBindingRecord,
      modeDeclarationRecord: forgeLegs.modeDeclarationRecord,
      deskSourceContractFixture: forgeLegs.deskSourceContractFixture,
      deskPresenceProjection: forgeLegs.deskPresenceProjection,
      readGateRecord: {
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
      establishmentRecord: {
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
      dp5CeremonyRecord: {
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
      dp6ObservationRecord: {
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
      dp8VerifierRecord: {
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
      dp8ProofRecord: {
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
      dp9IssuanceRecord: {
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
      dp9MappingRecord: {
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
      dp10ActivationRecord: {
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
      receiverRetractionRecord: null,
      receiverEvaluatedAtEpochMs: 1800000080000,
      receiverMaximumAgeMs: 60000,
      conversationSurfaceRecord: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "kind": "pond-conversation-surface",
  "principalRef": "principal:fixture:stage-d-p0:local-principal",
  "surfaceBasis": "receiver_recorded_conversation_surface_presentation_not_inferred",
  "surfacePresentationPosture": "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",
  "conversationTrustEpochPosture": "verified_boundary_session_scoped",
  "agentPosturePresentationPosture": "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
  "surfaceEndPosture": "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",
  "conversationScopePosture": "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
  "surfaceDeliveryRefusalPosture": "surface_informs_nothing_is_delivered_dispatched_or_replied",
  "surfaceMemoryPosture": "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
  "surfaceAuthorityPosture": "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
  "authority": "none"
},
      assessment: {
  "contractVersion": "pond-conversation-surface-posture-d-p16",
  "surfaceRecordVersion": "pond-conversation-surface-posture-d-p16",
  "assessmentKind": "deterministic_supplied_conversation_surface_posture",
  "conversationSurfaceState": "conversation_surface_not_presented",
  "reason": "receiver_conversation_surface_proof_incomplete",
  "mappedEstablishmentState": "live_session_scoped_authentication_established",
  "mappedEstablishmentReason": "all_session_establishment_checks_satisfied",
  "mappedReadGateState": "live_session_scoped_single_principal_structural_reads_live_activated",
  "mappedReadGateReason": "all_read_gate_checks_satisfied",
  "mappedReadGateFreshnessDiagnosis": {
    "state": "fresh",
    "reason": "within_declared_maximum_age",
    "observationAgeMs": 20000
  },
  "recordEntries": [
    {
      "presentationTrustMark": "out_of_session_record_not_admissible",
      "echoedRecordState": "conversation_record_not_admitted",
      "echoedRecordReason": "conversation_record_not_of_the_current_session_scope"
    }
  ],
  "agentPostureEchoes": [
    {
      "presentationAgentRef": "agent:fixture:stage-d-p0:trading-desk-agent0",
      "presentedAgentPosture": "addressed_agent_structural_posture_presented",
      "echoedRoutingState": "declared_mode_routing_established",
      "echoedRoutingReason": "declared_mode_routing_established",
      "echoedDeclaredProfile": "TRADING",
      "echoedRefusedDeclarationBasis": null,
      "echoedDeskAgentJoinState": "agent_record_observed",
      "echoedDeclarationFreshnessDiagnosis": {
        "state": "fresh",
        "reason": "within_declared_maximum_age",
        "observationAgeMs": 20000
      }
    }
  ],
  "satisfiedChecks": [
    "conversation_surface_record_well_formed",
    "conversation_surface_bound_to_receiver_held_principal",
    "conversation_surface_basis_receiver_recorded_not_inferred",
    "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
    "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
    "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  ],
  "unsatisfiedChecks": [
    "presented_records_all_within_current_session_scope"
  ],
  "surfaceEstablishesGrant": false,
  "surfaceEstablishesDeliveryOrDispatch": false,
  "surfaceEstablishesAgentReplyComposition": false,
  "surfaceEstablishesAuthorityFromProse": false,
  "surfaceEstablishesMembershipOrRoomPresence": false,
  "surfaceEstablishesAgentAccess": false,
  "surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence": false,
  "surfaceEstablishesCurrentTruth": false,
  "credentialAdmitted": false,
  "personalMemoryContentAdmitted": false,
  "currentTruthAdmitted": false,
  "runtimeActivationPosture": "not_included",
  "authority": "none"
},
    },
  ]);
