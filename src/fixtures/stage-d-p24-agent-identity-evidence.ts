// Stage D-P24 fixture matrices: the agent registration evidence lane (registration
// evidence only). Template one is the trading-desk frog's file-only registration
// (desk commit 73229a7): a self-describing registration document carried here WITHOUT its
// url-shaped values — the source file's exact bytes are pinned by the sha256
// digest below; the values (the type URI, the image pointer, the service
// endpoints) live in the source and never enter this repository. The onchain
// evidence slot is honestly all-null under the not-observed status: the desk has
// NO onchain registration evidence, per the desk's own no-invention doctrine
// (its earlier invented coordinate was removed; the registrations field is
// added only from onchain evidence).
//
// Every assessment below was produced by running the REAL
// assessPondAgentRegistrationEvidence over the pinned arm and serializing the
// result verbatim — the selftest re-runs the assessor and deep-equals the pin.
//
// Zero value imports (type-only, hygiene-enforced); deepFreeze over everything.
// This fixture carries no URL, no chain coordinate, no credential, and no
// secret — the D-P14 counterpart fixture secret never enters this file or any
// file of this cut.
//
// Clock chain: observed 1800000070000 < fresh eval 1800000071000 (age 1000,
// fresh inclusive) < stale eval 1800000141000 (age 71000, stale; maximumAgeMs
// 60000) < future eval 1800000069000 (before observed; the observation would
// be in the future of the evaluation).
import type {
  PondAgentRegistrationEvidenceAssessment,
} from "../contracts/pond-agent-registration-evidence.js";

export interface PondStageDP24AgentRegistrationEvidenceFixtureEntry {
  readonly fixtureLabel: string;
  readonly registrationEvidenceRecord: unknown;
  readonly receiverRecomputedDigestHex: unknown;
  readonly receiverEvaluatedAtEpochMs: number;
  readonly receiverMaximumAgeMs: number;
  readonly assessment: PondAgentRegistrationEvidenceAssessment;
}

// The desk's OWN canonical transcription of its registration content with the
// url-shaped values dropped — the receiver-recorded cross-check anchor for the
// transcription itself. This is the fixture-level second pin: the file-bytes
// digest ties the source file, and a sha256 over these exact lines (pinned
// below) ties the transcription carried here. Re-computable offline by the
// selftest without any temple access.
export const stageDP24CanonicalTranscriptionLines = Object.freeze([
    "registrationTypeKind=eip_8004_registration_v1_style_self_describing_document",
    "registrationName=ToadAid Trading Desk",
    "registrationServiceCount=2",
    "registrationServiceName=github version=v1",
    "registrationServiceName=home version=v1",
    "registrationActive=true",
    "x402Support=false",
    "supportedTrust=reputation",
] as const);

// Pinned arm constants.
export const stageDP24DeskRegistrationDigestHex = "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83";
export const stageDP24CanonicalTranscriptionDigestHex = "7ad2520e3430db741b322bd370ff2a8b087a975a84bdd903b21b7bb59b17a53d";
export const stageDP24DeskRegistrationSourceRef = "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json";
export const stageDP24DeskRegistrationAgentEvidenceRef = "agent:fixture:stage-d-p24:trading-desk-registration-evidence";
export const stageDP24DeskRegistrationName = "ToadAid Trading Desk";
export const stageDP24DeskRegistrationTypeKind = "eip_8004_registration_v1_style_self_describing_document";
export const stageDP24DeskRegistrationServiceNames = Object.freeze(["github", "home"] as const);
export const stageDP24DeskRegistrationServiceCount = 2;
export const stageDP24DeskRegistrationActive = true;
export const stageDP24DeskRegistrationX402Support = false;
export const stageDP24DeskRegistrationSupportedTrust = Object.freeze(["reputation"] as const);
export const stageDP24DeskRegistrationObservedBy = "receiver-local-inspection";
export const stageDP24DeskRegistrationObservedAtEpochMs = 1800000070000;
export const stageDP24ReceiverEvaluatedAtEpochMs = 1800000071000;
export const stageDP24StaleEvaluatedAtEpochMs = 1800000141000;
export const stageDP24FutureEvaluatedAtEpochMs = 1800000069000;
export const stageDP24ReceiverMaximumAgeMs = 60000;

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

// The open registration-evidence template: future toadgang registrations
// (OpenClaw, Hermes, anything self-describing) fill exactly this shape —
// the presented content, the provenance pair, and the digest anchor. No
// admission capability, no channel, no authority — presentation only.
export const pondStageDP24AgentRegistrationEvidenceTemplate: Readonly<Record<string, unknown>> = {
    "contractVersion": "pond-agent-registration-evidence-d-p24",
    "kind": "pond-agent-registration-evidence-record",
    "agentEvidenceRef": "",
    "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
    "registrationName": "",
    "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
    "registrationServiceCount": 0,
    "registrationServiceNames": [],
    "registrationActive": false,
    "x402Support": false,
    "supportedTrust": [],
    "registrationDigest": {
      "claimedDigestHex": "",
      "digestBasis": "sha256_registration_file_bytes_v1"
    },
    "evidenceProvenance": {
      "registrationSourceRef": "",
      "observedAtEpochMs": 0,
      "observedBy": ""
    },
    "onchainEvidenceSlot": {
      "status": "not_observed_no_registration_coordinate_is_invented",
      "chainIdObserved": null,
      "registryAddress": null,
      "agentIdObserved": null,
      "ownerObserved": null
    },
    "registrationEvidenceConsumedThisCut": false,
    "authority": "none",
    "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
    "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
    "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
    "admissionPosture": "registration_evidence_does_not_establish_local_admission",
    "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
    "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
    "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
  };

// The pinned green record: the desk's registration transcription at
// its commit, presented as derived evidence.
const greenRecord = {
    "contractVersion": "pond-agent-registration-evidence-d-p24",
    "kind": "pond-agent-registration-evidence-record",
    "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
    "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
    "registrationName": "ToadAid Trading Desk",
    "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
    "registrationServiceCount": 2,
    "registrationServiceNames": [
      "github",
      "home"
    ],
    "registrationActive": true,
    "x402Support": false,
    "supportedTrust": [
      "reputation"
    ],
    "registrationDigest": {
      "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
      "digestBasis": "sha256_registration_file_bytes_v1"
    },
    "evidenceProvenance": {
      "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
      "observedAtEpochMs": 1800000070000,
      "observedBy": "receiver-local-inspection"
    },
    "onchainEvidenceSlot": {
      "status": "not_observed_no_registration_coordinate_is_invented",
      "chainIdObserved": null,
      "registryAddress": null,
      "agentIdObserved": null,
      "ownerObserved": null
    },
    "registrationEvidenceConsumedThisCut": false,
    "authority": "none",
    "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
    "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
    "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
    "admissionPosture": "registration_evidence_does_not_establish_local_admission",
    "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
    "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
    "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
  };

export const stageDP24AgentRegistrationEvidenceMatrix: readonly PondStageDP24AgentRegistrationEvidenceFixtureEntry[] = deepFreeze([
  {
    fixtureLabel: "desk-registration-presented-green",
    registrationEvidenceRecord: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "kind": "pond-agent-registration-evidence-record",
        "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "registrationName": "ToadAid Trading Desk",
        "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
        "registrationServiceCount": 2,
        "registrationServiceNames": [
            "github",
            "home"
        ],
        "registrationActive": true,
        "x402Support": false,
        "supportedTrust": [
            "reputation"
        ],
        "registrationDigest": {
            "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
            "digestBasis": "sha256_registration_file_bytes_v1"
        },
        "evidenceProvenance": {
            "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
            "observedAtEpochMs": 1800000070000,
            "observedBy": "receiver-local-inspection"
        },
        "onchainEvidenceSlot": {
            "status": "not_observed_no_registration_coordinate_is_invented",
            "chainIdObserved": null,
            "registryAddress": null,
            "agentIdObserved": null,
            "ownerObserved": null
        },
        "registrationEvidenceConsumedThisCut": false,
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071000,
    receiverMaximumAgeMs: 60000,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel",
        "reason": "agent_registration_evidence_derived_evidence_only_presentation_satisfied",
        "satisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "presentation_digest_sha256_recomputed_and_agrees",
            "registration_digest_basis_declared_file_bytes",
            "onchain_evidence_slot_honestly_not_observed",
            "agent_registration_evidence_refusal_postures_complete",
            "agent_registration_evidence_fresh_by_provenance_observation_time",
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "unsatisfiedChecks": [],
        "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "evidenceFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 1000
        },
        "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "presentationDigestRecomputeAgrees": true,
        "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
  {
    fixtureLabel: "registration-record-non-object",
    registrationEvidenceRecord: "not-a-record",
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071000,
    receiverMaximumAgeMs: 60000,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
        "reason": "agent_registration_evidence_record_invalid",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "presentation_digest_sha256_recomputed_and_agrees",
            "registration_digest_basis_declared_file_bytes",
            "onchain_evidence_slot_honestly_not_observed",
            "agent_registration_evidence_refusal_postures_complete",
            "agent_registration_evidence_fresh_by_provenance_observation_time",
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "agentRegistrationEvidenceVersion": "invalid",
        "evidenceBasis": null,
        "evidenceFreshnessDiagnosis": {
            "state": "unknown",
            "reason": "observation_metadata_missing_or_invalid",
            "observationAgeMs": null
        },
        "registrationDigestClaimedHex": null,
        "presentationDigestRecomputeAgrees": false,
        "onchainEvidenceSlotStatus": null,
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
  {
    fixtureLabel: "registration-record-missing-key",
    registrationEvidenceRecord: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "kind": "pond-agent-registration-evidence-record",
        "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "registrationName": "ToadAid Trading Desk",
        "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
        "registrationServiceCount": 2,
        "registrationServiceNames": [
            "github",
            "home"
        ],
        "registrationActive": true,
        "supportedTrust": [
            "reputation"
        ],
        "registrationDigest": {
            "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
            "digestBasis": "sha256_registration_file_bytes_v1"
        },
        "evidenceProvenance": {
            "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
            "observedAtEpochMs": 1800000070000,
            "observedBy": "receiver-local-inspection"
        },
        "onchainEvidenceSlot": {
            "status": "not_observed_no_registration_coordinate_is_invented",
            "chainIdObserved": null,
            "registryAddress": null,
            "agentIdObserved": null,
            "ownerObserved": null
        },
        "registrationEvidenceConsumedThisCut": false,
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071000,
    receiverMaximumAgeMs: 60000,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
        "reason": "agent_registration_evidence_record_invalid",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "presentation_digest_sha256_recomputed_and_agrees",
            "registration_digest_basis_declared_file_bytes",
            "onchain_evidence_slot_honestly_not_observed",
            "agent_registration_evidence_refusal_postures_complete",
            "agent_registration_evidence_fresh_by_provenance_observation_time",
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "agentRegistrationEvidenceVersion": "invalid",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "evidenceFreshnessDiagnosis": {
            "state": "unknown",
            "reason": "observation_metadata_missing_or_invalid",
            "observationAgeMs": null
        },
        "registrationDigestClaimedHex": null,
        "presentationDigestRecomputeAgrees": false,
        "onchainEvidenceSlotStatus": null,
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
  {
    fixtureLabel: "registration-record-extra-forbidden-key",
    registrationEvidenceRecord: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "kind": "pond-agent-registration-evidence-record",
        "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "registrationName": "ToadAid Trading Desk",
        "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
        "registrationServiceCount": 2,
        "registrationServiceNames": [
            "github",
            "home"
        ],
        "registrationActive": true,
        "x402Support": false,
        "supportedTrust": [
            "reputation"
        ],
        "registrationDigest": {
            "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
            "digestBasis": "sha256_registration_file_bytes_v1"
        },
        "evidenceProvenance": {
            "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
            "observedAtEpochMs": 1800000070000,
            "observedBy": "receiver-local-inspection"
        },
        "onchainEvidenceSlot": {
            "status": "not_observed_no_registration_coordinate_is_invented",
            "chainIdObserved": null,
            "registryAddress": null,
            "agentIdObserved": null,
            "ownerObserved": null
        },
        "registrationEvidenceConsumedThisCut": false,
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified",
        "apiKey": "never-carried-value"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071000,
    receiverMaximumAgeMs: 60000,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
        "reason": "agent_registration_evidence_record_invalid",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "presentation_digest_sha256_recomputed_and_agrees",
            "registration_digest_basis_declared_file_bytes",
            "onchain_evidence_slot_honestly_not_observed",
            "agent_registration_evidence_refusal_postures_complete",
            "agent_registration_evidence_fresh_by_provenance_observation_time",
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "agentRegistrationEvidenceVersion": "invalid",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "evidenceFreshnessDiagnosis": {
            "state": "unknown",
            "reason": "observation_metadata_missing_or_invalid",
            "observationAgeMs": null
        },
        "registrationDigestClaimedHex": null,
        "presentationDigestRecomputeAgrees": false,
        "onchainEvidenceSlotStatus": null,
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
  {
    fixtureLabel: "registration-record-deep-planted-forbidden-key",
    registrationEvidenceRecord: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "kind": "pond-agent-registration-evidence-record",
        "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "registrationName": "ToadAid Trading Desk",
        "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
        "registrationServiceCount": 2,
        "registrationServiceNames": [
            "github",
            "home"
        ],
        "registrationActive": true,
        "x402Support": false,
        "supportedTrust": [
            "reputation"
        ],
        "registrationDigest": {
            "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
            "digestBasis": "sha256_registration_file_bytes_v1"
        },
        "evidenceProvenance": {
            "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
            "observedAtEpochMs": 1800000070000,
            "observedBy": {
                "token": "never-carried"
            }
        },
        "onchainEvidenceSlot": {
            "status": "not_observed_no_registration_coordinate_is_invented",
            "chainIdObserved": null,
            "registryAddress": null,
            "agentIdObserved": null,
            "ownerObserved": null
        },
        "registrationEvidenceConsumedThisCut": false,
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071000,
    receiverMaximumAgeMs: 60000,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
        "reason": "agent_registration_evidence_record_invalid",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "presentation_digest_sha256_recomputed_and_agrees",
            "registration_digest_basis_declared_file_bytes",
            "onchain_evidence_slot_honestly_not_observed",
            "agent_registration_evidence_refusal_postures_complete",
            "agent_registration_evidence_fresh_by_provenance_observation_time",
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "agentRegistrationEvidenceVersion": "invalid",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "evidenceFreshnessDiagnosis": {
            "state": "unknown",
            "reason": "observation_metadata_missing_or_invalid",
            "observationAgeMs": null
        },
        "registrationDigestClaimedHex": null,
        "presentationDigestRecomputeAgrees": false,
        "onchainEvidenceSlotStatus": null,
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
  {
    fixtureLabel: "tampered-digest",
    registrationEvidenceRecord: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "kind": "pond-agent-registration-evidence-record",
        "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "registrationName": "ToadAid Trading Desk",
        "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
        "registrationServiceCount": 2,
        "registrationServiceNames": [
            "github",
            "home"
        ],
        "registrationActive": true,
        "x402Support": false,
        "supportedTrust": [
            "reputation"
        ],
        "registrationDigest": {
            "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb8f",
            "digestBasis": "sha256_registration_file_bytes_v1"
        },
        "evidenceProvenance": {
            "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
            "observedAtEpochMs": 1800000070000,
            "observedBy": "receiver-local-inspection"
        },
        "onchainEvidenceSlot": {
            "status": "not_observed_no_registration_coordinate_is_invented",
            "chainIdObserved": null,
            "registryAddress": null,
            "agentIdObserved": null,
            "ownerObserved": null
        },
        "registrationEvidenceConsumedThisCut": false,
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071000,
    receiverMaximumAgeMs: 60000,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
        "reason": "registration_digest_agreement_not_proven",
        "satisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "registration_digest_basis_declared_file_bytes",
            "onchain_evidence_slot_honestly_not_observed",
            "agent_registration_evidence_refusal_postures_complete",
            "agent_registration_evidence_fresh_by_provenance_observation_time",
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "unsatisfiedChecks": [
            "presentation_digest_sha256_recomputed_and_agrees"
        ],
        "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "evidenceFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 1000
        },
        "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb8f",
        "presentationDigestRecomputeAgrees": false,
        "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
  {
    fixtureLabel: "wrong-digest-basis",
    registrationEvidenceRecord: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "kind": "pond-agent-registration-evidence-record",
        "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "registrationName": "ToadAid Trading Desk",
        "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
        "registrationServiceCount": 2,
        "registrationServiceNames": [
            "github",
            "home"
        ],
        "registrationActive": true,
        "x402Support": false,
        "supportedTrust": [
            "reputation"
        ],
        "registrationDigest": {
            "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
            "digestBasis": "sha256_serialized_json_bytes_v1"
        },
        "evidenceProvenance": {
            "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
            "observedAtEpochMs": 1800000070000,
            "observedBy": "receiver-local-inspection"
        },
        "onchainEvidenceSlot": {
            "status": "not_observed_no_registration_coordinate_is_invented",
            "chainIdObserved": null,
            "registryAddress": null,
            "agentIdObserved": null,
            "ownerObserved": null
        },
        "registrationEvidenceConsumedThisCut": false,
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071000,
    receiverMaximumAgeMs: 60000,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
        "reason": "registration_digest_agreement_not_proven",
        "satisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "presentation_digest_sha256_recomputed_and_agrees",
            "onchain_evidence_slot_honestly_not_observed",
            "agent_registration_evidence_refusal_postures_complete",
            "agent_registration_evidence_fresh_by_provenance_observation_time",
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "unsatisfiedChecks": [
            "registration_digest_basis_declared_file_bytes"
        ],
        "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "evidenceFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 1000
        },
        "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "presentationDigestRecomputeAgrees": true,
        "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
  {
    fixtureLabel: "onchain-slot-claimed",
    registrationEvidenceRecord: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "kind": "pond-agent-registration-evidence-record",
        "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "registrationName": "ToadAid Trading Desk",
        "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
        "registrationServiceCount": 2,
        "registrationServiceNames": [
            "github",
            "home"
        ],
        "registrationActive": true,
        "x402Support": false,
        "supportedTrust": [
            "reputation"
        ],
        "registrationDigest": {
            "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
            "digestBasis": "sha256_registration_file_bytes_v1"
        },
        "evidenceProvenance": {
            "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
            "observedAtEpochMs": 1800000070000,
            "observedBy": "receiver-local-inspection"
        },
        "onchainEvidenceSlot": {
            "status": "claimed_observed_by_the_presenting_party",
            "chainIdObserved": null,
            "registryAddress": null,
            "agentIdObserved": "1",
            "ownerObserved": null
        },
        "registrationEvidenceConsumedThisCut": false,
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071000,
    receiverMaximumAgeMs: 60000,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
        "reason": "onchain_coordinate_claimed_without_onchain_evidence",
        "satisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "presentation_digest_sha256_recomputed_and_agrees",
            "registration_digest_basis_declared_file_bytes",
            "agent_registration_evidence_refusal_postures_complete",
            "agent_registration_evidence_fresh_by_provenance_observation_time",
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "unsatisfiedChecks": [
            "onchain_evidence_slot_honestly_not_observed"
        ],
        "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "evidenceFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 1000
        },
        "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "presentationDigestRecomputeAgrees": true,
        "onchainEvidenceSlotStatus": "claimed_observed_by_the_presenting_party",
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
  {
    fixtureLabel: "claimed-observed-basis-refused",
    registrationEvidenceRecord: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "kind": "pond-agent-registration-evidence-record",
        "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
        "evidenceBasis": "claimed_observed_registration_not_supplied",
        "registrationName": "ToadAid Trading Desk",
        "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
        "registrationServiceCount": 2,
        "registrationServiceNames": [
            "github",
            "home"
        ],
        "registrationActive": true,
        "x402Support": false,
        "supportedTrust": [
            "reputation"
        ],
        "registrationDigest": {
            "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
            "digestBasis": "sha256_registration_file_bytes_v1"
        },
        "evidenceProvenance": {
            "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
            "observedAtEpochMs": 1800000070000,
            "observedBy": "receiver-local-inspection"
        },
        "onchainEvidenceSlot": {
            "status": "not_observed_no_registration_coordinate_is_invented",
            "chainIdObserved": null,
            "registryAddress": null,
            "agentIdObserved": null,
            "ownerObserved": null
        },
        "registrationEvidenceConsumedThisCut": false,
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071000,
    receiverMaximumAgeMs: 60000,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
        "reason": "receiver_registration_evidence_proof_incomplete",
        "satisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "presentation_digest_sha256_recomputed_and_agrees",
            "registration_digest_basis_declared_file_bytes",
            "onchain_evidence_slot_honestly_not_observed",
            "agent_registration_evidence_refusal_postures_complete",
            "agent_registration_evidence_fresh_by_provenance_observation_time"
        ],
        "unsatisfiedChecks": [
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
        "evidenceBasis": "claimed_observed_registration_not_supplied",
        "evidenceFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 1000
        },
        "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "presentationDigestRecomputeAgrees": true,
        "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
  {
    fixtureLabel: "stale-observation",
    registrationEvidenceRecord: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "kind": "pond-agent-registration-evidence-record",
        "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "registrationName": "ToadAid Trading Desk",
        "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
        "registrationServiceCount": 2,
        "registrationServiceNames": [
            "github",
            "home"
        ],
        "registrationActive": true,
        "x402Support": false,
        "supportedTrust": [
            "reputation"
        ],
        "registrationDigest": {
            "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
            "digestBasis": "sha256_registration_file_bytes_v1"
        },
        "evidenceProvenance": {
            "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
            "observedAtEpochMs": 1800000070000,
            "observedBy": "receiver-local-inspection"
        },
        "onchainEvidenceSlot": {
            "status": "not_observed_no_registration_coordinate_is_invented",
            "chainIdObserved": null,
            "registryAddress": null,
            "agentIdObserved": null,
            "ownerObserved": null
        },
        "registrationEvidenceConsumedThisCut": false,
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000141000,
    receiverMaximumAgeMs: 60000,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
        "reason": "agent_registration_evidence_not_fresh",
        "satisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "presentation_digest_sha256_recomputed_and_agrees",
            "registration_digest_basis_declared_file_bytes",
            "onchain_evidence_slot_honestly_not_observed",
            "agent_registration_evidence_refusal_postures_complete",
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "unsatisfiedChecks": [
            "agent_registration_evidence_fresh_by_provenance_observation_time"
        ],
        "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "evidenceFreshnessDiagnosis": {
            "state": "stale",
            "reason": "declared_maximum_age_expired",
            "observationAgeMs": 71000
        },
        "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "presentationDigestRecomputeAgrees": true,
        "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
  {
    fixtureLabel: "future-observation",
    registrationEvidenceRecord: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "kind": "pond-agent-registration-evidence-record",
        "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "registrationName": "ToadAid Trading Desk",
        "registrationTypeKind": "eip_8004_registration_v1_style_self_describing_document",
        "registrationServiceCount": 2,
        "registrationServiceNames": [
            "github",
            "home"
        ],
        "registrationActive": true,
        "x402Support": false,
        "supportedTrust": [
            "reputation"
        ],
        "registrationDigest": {
            "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
            "digestBasis": "sha256_registration_file_bytes_v1"
        },
        "evidenceProvenance": {
            "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
            "observedAtEpochMs": 1800000070000,
            "observedBy": "receiver-local-inspection"
        },
        "onchainEvidenceSlot": {
            "status": "not_observed_no_registration_coordinate_is_invented",
            "chainIdObserved": null,
            "registryAddress": null,
            "agentIdObserved": null,
            "ownerObserved": null
        },
        "registrationEvidenceConsumedThisCut": false,
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000069000,
    receiverMaximumAgeMs: 60000,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
        "reason": "agent_registration_evidence_not_fresh",
        "satisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "presentation_digest_sha256_recomputed_and_agrees",
            "registration_digest_basis_declared_file_bytes",
            "onchain_evidence_slot_honestly_not_observed",
            "agent_registration_evidence_refusal_postures_complete",
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "unsatisfiedChecks": [
            "agent_registration_evidence_fresh_by_provenance_observation_time"
        ],
        "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "evidenceFreshnessDiagnosis": {
            "state": "unknown",
            "reason": "observation_time_in_future",
            "observationAgeMs": null
        },
        "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "presentationDigestRecomputeAgrees": true,
        "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
  {
    fixtureLabel: "unrecognized-type-kind-presented",
    registrationEvidenceRecord: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "kind": "pond-agent-registration-evidence-record",
        "agentEvidenceRef": "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "registrationName": "ToadAid Trading Desk",
        "registrationTypeKind": "unrecognized_self_describing_registration_document",
        "registrationServiceCount": 2,
        "registrationServiceNames": [
            "github",
            "home"
        ],
        "registrationActive": true,
        "x402Support": false,
        "supportedTrust": [
            "reputation"
        ],
        "registrationDigest": {
            "claimedDigestHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
            "digestBasis": "sha256_registration_file_bytes_v1"
        },
        "evidenceProvenance": {
            "registrationSourceRef": "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
            "observedAtEpochMs": 1800000070000,
            "observedBy": "receiver-local-inspection"
        },
        "onchainEvidenceSlot": {
            "status": "not_observed_no_registration_coordinate_is_invented",
            "chainIdObserved": null,
            "registryAddress": null,
            "agentIdObserved": null,
            "ownerObserved": null
        },
        "registrationEvidenceConsumedThisCut": false,
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
    receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
    receiverEvaluatedAtEpochMs: 1800000071000,
    receiverMaximumAgeMs: 60000,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel",
        "reason": "agent_registration_evidence_derived_evidence_only_presentation_satisfied",
        "satisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "presentation_digest_sha256_recomputed_and_agrees",
            "registration_digest_basis_declared_file_bytes",
            "onchain_evidence_slot_honestly_not_observed",
            "agent_registration_evidence_refusal_postures_complete",
            "agent_registration_evidence_fresh_by_provenance_observation_time",
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "unsatisfiedChecks": [],
        "agentRegistrationEvidenceVersion": "pond-agent-registration-evidence-d-p24",
        "evidenceBasis": "receiver_presented_registration_evidence_from_a_supplied_registration_document",
        "evidenceFreshnessDiagnosis": {
            "state": "fresh",
            "reason": "within_declared_maximum_age",
            "observationAgeMs": 1000
        },
        "registrationDigestClaimedHex": "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
        "presentationDigestRecomputeAgrees": true,
        "onchainEvidenceSlotStatus": "not_observed_no_registration_coordinate_is_invented",
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
  {
    fixtureLabel: "garbage-input",
    registrationEvidenceRecord: undefined,
    receiverRecomputedDigestHex: undefined,
    receiverEvaluatedAtEpochMs: undefined,
    receiverMaximumAgeMs: undefined,
    assessment: {
        "contractVersion": "pond-agent-registration-evidence-d-p24",
        "agentRegistrationEvidenceState": "agent_registration_evidence_not_presentation_ready",
        "reason": "agent_registration_evidence_record_invalid",
        "satisfiedChecks": [],
        "unsatisfiedChecks": [
            "agent_registration_evidence_record_well_formed",
            "presentation_digest_sha256_recomputed_and_agrees",
            "registration_digest_basis_declared_file_bytes",
            "onchain_evidence_slot_honestly_not_observed",
            "agent_registration_evidence_refusal_postures_complete",
            "agent_registration_evidence_fresh_by_provenance_observation_time",
            "registration_evidence_consumed_by_nothing_and_authority_none"
        ],
        "agentRegistrationEvidenceVersion": "invalid",
        "evidenceBasis": null,
        "evidenceFreshnessDiagnosis": {
            "state": "unknown",
            "reason": "observation_metadata_missing_or_invalid",
            "observationAgeMs": null
        },
        "registrationDigestClaimedHex": null,
        "presentationDigestRecomputeAgrees": false,
        "onchainEvidenceSlotStatus": null,
        "agentRegistrationEvidenceEstablishesAdmission": false,
        "agentRegistrationEvidenceEstablishesMembership": false,
        "agentRegistrationEvidenceEstablishesChannel": false,
        "agentRegistrationEvidenceEstablishesAuthority": false,
        "agentRegistrationEvidenceEstablishesCapability": false,
        "agentRegistrationEvidenceEstablishesGrant": false,
        "agentRegistrationEvidenceEstablishesConsequenceOrExecution": false,
        "registrationPresentedEstablishesRuntimeIdentity": false,
        "registrationDigestAcceptedAsPrincipalId": false,
        "erc8004IdentityAcceptedAsPrincipalId": false,
        "erc8004ValidationAcceptedAsAcceptance": false,
        "erc8004ReputationAcceptedAsAuthority": false,
        "erc8004RegistryRecordAcceptedAsLocalAdmission": false,
        "presentedEvidencePromotedToCanonicalCurrentState": false,
        "admissionWidenedByPresentation": false,
        "sourceVerifiedPresentedAsWiringOrLiveVerified": false,
        "registrationEvidenceConsumedThisCut": false,
        "runtimeActivationPosture": "not_included",
        "authority": "none",
        "evidencePosture": "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
        "notRuntimeIdentityPosture": "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
        "noInventionPosture": "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
        "admissionPosture": "registration_evidence_does_not_establish_local_admission",
        "channelPosture": "no_channel_is_opened_presentation_is_not_a_connection",
        "erc8004CeilingPosture": "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
        "verificationApplicabilityPosture": "source_verified_never_presented_as_wiring_or_live_verified"
    },
  },
] as unknown as PondStageDP24AgentRegistrationEvidenceFixtureEntry[]);
