// Stage D-P9 principal identity readiness composition.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture:
// contracts/scope-sovereignty-contract.md (the principal is the explicitly
// identified actor; PrincipalId has no defined format, issuer, or
// lifecycle), contracts/delegated-authority-and-capability-grant-contract.md
// L288-315 (the safe chain PrincipalId → explicit principal-agent
// relationship → local admitted AgentId ↔ verified ERC-8004 binding; the
// binding is insufficient by itself to establish a Grant), and the identity
// laws (Principal is not agent; authentication is not authorization;
// onchain identity is not local authority). This cut composes the full
// Stage D chain into one deterministic readiness assessment: the receiver's
// local principal binding ceremony (D-P5), the verified fresh knowledge
// factor (D-P8), the receiver's explicit local PrincipalId issuance (D-P9),
// and the receiver's explicit ERC-8004 identity mapping record (D-P9).
// Structural readiness is where the identity chain ends and private reads
// still begin refused: readiness is never private-read activation, never a
// credential, never authorization — identity vocabulary only. The refused
// tuple is pinned on every arm.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import { assessPondLocalPrincipalBindingEstablishment } from "./pond-local-principal-binding-establishment.ts";
import { assessPondLocalAuthenticationChallengeProof } from "./pond-local-authentication-mechanic.ts";
import { assessPondLocalPrincipalIdIssuance } from "./pond-local-principal-id-issuance.ts";
import { assessPondErc8004IdentityMapping } from "./pond-erc8004-identity-mapping.ts";
import type { PondLocalPrincipalIdIssuanceCheck } from "./pond-local-principal-id-issuance.js";
import type { PondErc8004IdentityMappingCheck } from "./pond-erc8004-identity-mapping.js";
import type { PondLocalPrincipalBindingEstablishmentCheck } from "./pond-local-principal-binding-establishment.js";
import type { PondLocalAuthenticationChallengeCheck } from "./pond-local-authentication-mechanic.js";

export type PondPrincipalIdentityReadinessCheck =
  | "local_principal_binding_established_dp5"
  | "knowledge_factor_verified_dp8"
  | "local_principal_id_issued_dp9"
  | "erc8004_mapping_record_established_dp9";

export type PondPrincipalIdentityReadinessState =
  | "not_ready"
  | "structurally_ready_private_reads_still_refused";

export interface PondPrincipalIdentityReadinessCompositionInput {
  readonly dp5CeremonyRecord: unknown;
  readonly dp8VerifierRecord: unknown;
  readonly dp8ProofRecord: unknown;
  readonly dp9IssuanceRecord: unknown;
  readonly dp9MappingRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly receiverVerifiedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export interface PondPrincipalIdentityReadinessCompositionAssessment {
  readonly contractVersion: "pond-principal-identity-readiness-composition-d-p9";
  readonly assessmentKind: "deterministic_supplied_principal_identity_readiness_composition";
  readonly readinessState: PondPrincipalIdentityReadinessState;
  readonly reason:
    | "receiver_private_read_proof_incomplete"
    | "structurally_ready_private_reads_still_refused";
  readonly dp8FreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly mappedDp5SatisfiedChecks: readonly PondLocalPrincipalBindingEstablishmentCheck[];
  readonly mappedDp8SatisfiedChecks: readonly PondLocalAuthenticationChallengeCheck[];
  readonly mappedDp9IssuanceSatisfiedChecks: readonly PondLocalPrincipalIdIssuanceCheck[];
  readonly mappedDp9MappingSatisfiedChecks: readonly PondErc8004IdentityMappingCheck[];
  readonly satisfiedChecks: readonly PondPrincipalIdentityReadinessCheck[];
  readonly unsatisfiedChecks: readonly PondPrincipalIdentityReadinessCheck[];
  readonly privateReadsActivated: false;
  readonly credentialAdmitted: false;
  readonly authenticationPerformed: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly erc8004IdentityAcceptedAsPrincipalId: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const readinessChecks = Object.freeze([
  "local_principal_binding_established_dp5",
  "knowledge_factor_verified_dp8",
  "local_principal_id_issued_dp9",
  "erc8004_mapping_record_established_dp9",
] as const satisfies readonly PondPrincipalIdentityReadinessCheck[]);

const compositionAssessment = (
  reason: PondPrincipalIdentityReadinessCompositionAssessment["reason"],
  dp8FreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedDp5SatisfiedChecks: readonly PondLocalPrincipalBindingEstablishmentCheck[],
  mappedDp8SatisfiedChecks: readonly PondLocalAuthenticationChallengeCheck[],
  mappedDp9IssuanceSatisfiedChecks: readonly PondLocalPrincipalIdIssuanceCheck[],
  mappedDp9MappingSatisfiedChecks: readonly PondErc8004IdentityMappingCheck[],
  satisfiedChecks: readonly PondPrincipalIdentityReadinessCheck[],
  unsatisfiedChecks: readonly PondPrincipalIdentityReadinessCheck[],
): PondPrincipalIdentityReadinessCompositionAssessment =>
  Object.freeze({
    contractVersion: "pond-principal-identity-readiness-composition-d-p9",
    assessmentKind: "deterministic_supplied_principal_identity_readiness_composition",
    readinessState:
      reason === "structurally_ready_private_reads_still_refused"
        ? "structurally_ready_private_reads_still_refused"
        : "not_ready",
    reason,
    dp8FreshnessDiagnosis,
    mappedDp5SatisfiedChecks: Object.freeze([...mappedDp5SatisfiedChecks]),
    mappedDp8SatisfiedChecks: Object.freeze([...mappedDp8SatisfiedChecks]),
    mappedDp9IssuanceSatisfiedChecks: Object.freeze([
      ...mappedDp9IssuanceSatisfiedChecks,
    ]),
    mappedDp9MappingSatisfiedChecks: Object.freeze([
      ...mappedDp9MappingSatisfiedChecks,
    ]),
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The identity chain completing never becomes private reads: the
    // issuance and the mapping are identity vocabulary, and authorization
    // is a separate, later, explicitly governed mechanism.
    privateReadsActivated: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    erc8004IdentityAcceptedAsPrincipalId: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondPrincipalIdentityReadinessComposition(
  input: PondPrincipalIdentityReadinessCompositionInput,
): PondPrincipalIdentityReadinessCompositionAssessment {
  // 1. The D-P5 local principal binding ceremony must be fully satisfied.
  const ceremony = assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: input.dp5CeremonyRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
  });
  const ceremonyEstablished = ceremony.reason === "all_ceremony_checks_satisfied";

  // 2. The D-P8 knowledge factor must be verified and fresh: proving
  // control is not authorization, so this is an identity-chain readiness
  // fact only.
  const proof = assessPondLocalAuthenticationChallengeProof({
    proofRecord: input.dp8ProofRecord,
    verifierRecord: input.dp8VerifierRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    evaluatedAtEpochMs: input.receiverVerifiedAtEpochMs,
    maximumAgeMs: input.receiverMaximumAgeMs,
  });
  const knowledgeFactorVerified =
    proof.authenticationMechanicState === "receiver_verified_knowledge_factor" &&
    proof.freshnessDiagnosis.state === "fresh";

  // 3. The D-P9 issuance must carry the receiver's explicit, ref-preserving,
  // local issuance vocabulary.
  const issuance = assessPondLocalPrincipalIdIssuance({
    issuanceRecord: input.dp9IssuanceRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
  });
  const principalIdIssued =
    issuance.issuanceState === "fixture_structural_local_principal_id_issued";

  // 4. The D-P9 mapping record must be established: the explicit,
  // revocable, replaceable receiver-owned mapping — verification stays
  // honestly unperformed this cut and is not required for structural
  // readiness, exactly because the mapping is insufficient for anything.
  const mapping = assessPondErc8004IdentityMapping({
    mappingRecord: input.dp9MappingRecord,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    receiverVerification: "not_performed",
  });
  const mappingEstablished =
    mapping.mappingEstablishmentState ===
    "fixture_structural_receiver_owned_mapping";

  const values = [
    ceremonyEstablished,
    knowledgeFactorVerified,
    principalIdIssued,
    mappingEstablished,
  ];
  const satisfied = readinessChecks.filter((_, index) => values[index]);
  const unsatisfied = readinessChecks.filter((_, index) => !values[index]);
  // Structural readiness is the composition's completion: it never becomes
  // private-read activation, a credential, or authority.
  return compositionAssessment(
    unsatisfied.length === 0
      ? "structurally_ready_private_reads_still_refused"
      : "receiver_private_read_proof_incomplete",
    proof.freshnessDiagnosis,
    ceremony.satisfiedChecks,
    proof.satisfiedChecks,
    issuance.satisfiedChecks,
    mapping.satisfiedChecks,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. Readiness never becomes private
// reads, a credential, or authority.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP9Invariant_ReadinessChecksExact = Assert<
  Equal<
    PondPrincipalIdentityReadinessCheck,
    | "local_principal_binding_established_dp5"
    | "knowledge_factor_verified_dp8"
    | "local_principal_id_issued_dp9"
    | "erc8004_mapping_record_established_dp9"
  >
>;
export type PondStageDP9Invariant_ReadinessStatesExact = Assert<
  Equal<
    PondPrincipalIdentityReadinessState,
    "not_ready" | "structurally_ready_private_reads_still_refused"
  >
>;
export type PondStageDP9Invariant_ReadinessNeverBecomesPrivateReadsOrAuthority =
  Assert<
    Equal<
      [
        PondPrincipalIdentityReadinessCompositionAssessment["privateReadsActivated"],
        PondPrincipalIdentityReadinessCompositionAssessment["credentialAdmitted"],
        PondPrincipalIdentityReadinessCompositionAssessment["authenticationPerformed"],
        PondPrincipalIdentityReadinessCompositionAssessment["principalIdAcceptedAsAuthorization"],
        PondPrincipalIdentityReadinessCompositionAssessment["erc8004IdentityAcceptedAsPrincipalId"],
        PondPrincipalIdentityReadinessCompositionAssessment["personalMemoryContentAdmitted"],
        PondPrincipalIdentityReadinessCompositionAssessment["currentTruthAdmitted"],
        PondPrincipalIdentityReadinessCompositionAssessment["runtimeActivationPosture"],
        PondPrincipalIdentityReadinessCompositionAssessment["authority"],
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        "not_included",
        "none",
      ]
    >
  >;