// Stage D-P9 ERC-8004 identity mapping contract.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture:
// contracts/delegated-authority-and-capability-grant-contract.md L288-315
// "Base ERC-8004 user-account identity direction" reserves the safe chain
// `Human User → PrincipalId → (explicit principal-agent relationship) →
// local admitted AgentId ↔ verified Base ERC-8004 Agent ID binding` for a
// dedicated identity-mapping architecture cut, and requires the binding to
// be "explicit, separately governed, verifiable, revocable or replaceable
// where later policy requires, and insufficient by itself to establish a
// Grant" (L313). L315 defines no registry address, no chain contract, no
// token/NFT semantics, no smart-contract schema, no registration flow, no
// wallet binding, no key ownership, and authorizes no chain activity — so
// this contract defines an opaque identity label only. The D-P0 identity
// vocabulary carries through unchanged: onchain identity is not the
// principal identity, does not establish local admission, does not
// establish authority, and is not the local AgentId — external identity is
// evidence only, and onchain identity is not local authority (identity law
// 8). This cut separates establishment from verification: the receiver may
// explicitly bind its principal to an opaque ERC-8004 identity label, but
// no onchain observation surface exists in Pond yet, so the verification
// check is fail-closed by construction and no supplied evidence — however
// complete — can be independently reproduced here. The positive
// verification vocabulary exists in the type and is unreachable this cut.

import type { PondObservedIdentityClaimEvidence } from "./pond-agent-presence-projection.js";

export type PondErc8004MappingBasis =
  | "not_established"
  | "receiver_owned_explicit_mapping_binding"
  // Valid-but-unsatisfied fail-closed literals: a mapping claimed from any
  // of these bases is exactly what the contract exists to refuse. A
  // wallet holding, an onchain observation, a provider session, and a bare
  // equivalence claim are never an explicit, separately governed binding
  // (delegated-authority L313).
  | "inferred_from_wallet_ownership"
  | "inferred_from_onchain_observation"
  | "inferred_from_provider_session"
  | "equivalence_claim_not_explicit_binding";

// The D-P0 relationship literals verbatim, plus the agent-identity law:
// the onchain identity is not the local AgentId.
export interface PondErc8004MappingDistinctnessClaims {
  readonly onchainIdentityIsPrincipalIdentity: false;
  readonly onchainIdentityEstablishesLocalAdmission: false;
  readonly onchainIdentityEstablishesAuthority: false;
  readonly onchainIdentityIsLocalAgentId: false;
}

export interface PondErc8004IdentityMappingRecord {
  readonly contractVersion: "pond-erc8004-identity-mapping-d-p9";
  readonly kind: "pond-erc8004-identity-mapping";
  readonly principalRef: string;
  readonly agentRef: string;
  readonly erc8004IdentityRef: string;
  readonly mappingBasis: PondErc8004MappingBasis;
  readonly mappingDistinctnessClaims: PondErc8004MappingDistinctnessClaims;
  readonly verificationEvidence: PondObservedIdentityClaimEvidence;
  readonly verificationPosture:
    | "not_established"
    | "no_onchain_observation_performed_verification_unavailable";
  readonly revocabilityReplaceabilityPosture:
    | "not_established"
    | "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet";
  readonly grantSufficiencyPosture: "mapping_insufficient_by_itself_to_establish_a_grant";
  readonly memoryLaneExclusionPosture:
    | "not_established"
    | "mapping_excludes_memory_narrative_transcript_lanes";
  readonly authorityPosture: "mapping_grants_no_authority_membership_or_capability";
  readonly authority: "none";
}

export type PondErc8004IdentityMappingCheck =
  | "principal_ref_well_formed"
  | "agent_ref_well_formed_and_distinct_from_principal"
  | "erc8004_identity_ref_well_formed"
  | "mapping_bound_to_receiver_held_principal"
  | "mapping_explicitly_receiver_owned_not_inferred_or_equivalence"
  | "mapping_preserves_identity_distinctness"
  | "mapping_revocable_replaceable_and_insufficient_for_grant"
  // The verification check: unmet in every arm this cut. No onchain
  // observation surface exists in Pond, so no supplied evidence is
  // independently observable.
  | "onchain_verification_evidence_independently_observed";

// The receiver's honest verification posture — the activation seam for the
// dedicated onchain-verification cut. Even the receiver-observed literal
// never satisfies the verification check without independently reproduced
// evidence, which this cut cannot produce.
export type PondErc8004ReceiverVerification =
  | "not_performed"
  | "receiver_observed_onchain_identity_evidence";

export interface PondErc8004IdentityMappingInput {
  readonly mappingRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly receiverVerification: PondErc8004ReceiverVerification;
}

export interface PondErc8004IdentityMappingAssessment {
  readonly contractVersion: "pond-erc8004-identity-mapping-d-p9";
  readonly mappingRecordVersion: "pond-erc8004-identity-mapping-d-p9" | "invalid";
  readonly assessmentKind: "deterministic_supplied_erc8004_identity_mapping";
  readonly mappingEstablishmentState:
    | "not_established"
    | "fixture_structural_receiver_owned_mapping";
  readonly onchainVerificationState:
    | "not_verified"
    | "verified_against_onchain_evidence";
  readonly reason:
    | "mapping_record_invalid"
    | "receiver_mapping_proof_incomplete"
    | "onchain_verification_not_performed"
    | "all_mapping_checks_satisfied";
  readonly revocabilityReplaceabilityPosture:
    | "not_established"
    | "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet";
  readonly satisfiedChecks: readonly PondErc8004IdentityMappingCheck[];
  readonly unsatisfiedChecks: readonly PondErc8004IdentityMappingCheck[];
  readonly erc8004IdentityAcceptedAsPrincipalId: false;
  readonly onchainIdentityAcceptedAsAuthentication: false;
  readonly mappingEstablishesGrant: false;
  readonly mappingEstablishesMembershipOrAdmission: false;
  readonly credentialAdmitted: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const mappingChecks = Object.freeze([
  "principal_ref_well_formed",
  "agent_ref_well_formed_and_distinct_from_principal",
  "erc8004_identity_ref_well_formed",
  "mapping_bound_to_receiver_held_principal",
  "mapping_explicitly_receiver_owned_not_inferred_or_equivalence",
  "mapping_preserves_identity_distinctness",
  "mapping_revocable_replaceable_and_insufficient_for_grant",
  "onchain_verification_evidence_independently_observed",
] as const satisfies readonly PondErc8004IdentityMappingCheck[]);

// Same inventory the issuance contract carries, with signature-material
// keys added: a mapping that carried a signature would pretend an
// off-chain attestation could stand in for independently observed onchain
// evidence.
export const POND_STAGE_DP9_FORBIDDEN_MAPPING_KEYS = Object.freeze([
  "PrincipalId",
  "principalId",
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "endpoint",
  "transport",
  "connect",
  "fetch",
  "poll",
  "subscribe",
  "secret",
  "token",
  "apiKey",
  "password",
  "passphrase",
  "session",
  "wallet",
  "address",
  "credential",
  "plaintext",
  "answer",
  "privateKey",
  "mnemonic",
  "signature",
] as const);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;

const exactKeys = (value: Record<string, unknown>, expected: readonly string[]) =>
  exactArray(Object.keys(value).sort(), [...expected].sort());

const exactArray = (value: unknown, expected: readonly string[]) =>
  Array.isArray(value) &&
  value.length === expected.length &&
  value.every((entry, index) => entry === expected[index]);

const hasForbiddenKey = (
  value: unknown,
  forbidden: readonly string[],
): boolean => {
  const stack: unknown[] = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
};

const wellFormedPrincipalRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("principal:") &&
  value.length > "principal:".length;

// Agent refs carry the agent: prefix and never embed a principal ref —
// Principal is not agent, and the classes never collapse.
const wellFormedAgentRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("agent:") &&
  value.length > "agent:".length &&
  !value.includes("principal:") &&
  !value.includes("erc8004:");

// The ERC-8004 identity ref is an opaque label under the erc8004: prefix
// only: no registry semantics, no chain schema, no wallet or key material,
// and no embedded principal or agent ref.
const wellFormedErc8004IdentityRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("erc8004:") &&
  value.length > "erc8004:".length &&
  !value.includes("principal:") &&
  !value.includes("agent:");

const stringOrNull = (value: unknown): boolean =>
  value === null || typeof value === "string";

const validVerificationEvidence = (value: unknown): boolean => {
  const evidence = record(value);
  return (
    evidence !== null &&
    exactKeys(evidence, [
      "chainIdObserved",
      "registryAddress",
      "agentId",
      "ownerObserved",
      "blockTag",
    ]) &&
    stringOrNull(evidence.chainIdObserved) &&
    stringOrNull(evidence.registryAddress) &&
    stringOrNull(evidence.agentId) &&
    stringOrNull(evidence.ownerObserved) &&
    stringOrNull(evidence.blockTag)
  );
};

const validMappingRecord = (value: unknown): boolean => {
  const mapping = record(value);
  const distinctnessClaims = record(mapping?.mappingDistinctnessClaims);
  return (
    mapping !== null &&
    exactKeys(mapping, [
      "contractVersion",
      "kind",
      "principalRef",
      "agentRef",
      "erc8004IdentityRef",
      "mappingBasis",
      "mappingDistinctnessClaims",
      "verificationEvidence",
      "verificationPosture",
      "revocabilityReplaceabilityPosture",
      "grantSufficiencyPosture",
      "memoryLaneExclusionPosture",
      "authorityPosture",
      "authority",
    ]) &&
    mapping.contractVersion === "pond-erc8004-identity-mapping-d-p9" &&
    mapping.kind === "pond-erc8004-identity-mapping" &&
    wellFormedPrincipalRef(mapping.principalRef) &&
    wellFormedAgentRef(mapping.agentRef) &&
    wellFormedErc8004IdentityRef(mapping.erc8004IdentityRef) &&
    [
      "not_established",
      "receiver_owned_explicit_mapping_binding",
      "inferred_from_wallet_ownership",
      "inferred_from_onchain_observation",
      "inferred_from_provider_session",
      "equivalence_claim_not_explicit_binding",
    ].includes(String(mapping.mappingBasis)) &&
    distinctnessClaims !== null &&
    exactKeys(distinctnessClaims, [
      "onchainIdentityIsPrincipalIdentity",
      "onchainIdentityEstablishesLocalAdmission",
      "onchainIdentityEstablishesAuthority",
      "onchainIdentityIsLocalAgentId",
    ]) &&
    distinctnessClaims.onchainIdentityIsPrincipalIdentity === false &&
    distinctnessClaims.onchainIdentityEstablishesLocalAdmission === false &&
    distinctnessClaims.onchainIdentityEstablishesAuthority === false &&
    distinctnessClaims.onchainIdentityIsLocalAgentId === false &&
    validVerificationEvidence(mapping.verificationEvidence) &&
    [
      "not_established",
      "no_onchain_observation_performed_verification_unavailable",
    ].includes(String(mapping.verificationPosture)) &&
    [
      "not_established",
      "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet",
    ].includes(String(mapping.revocabilityReplaceabilityPosture)) &&
    mapping.grantSufficiencyPosture ===
      "mapping_insufficient_by_itself_to_establish_a_grant" &&
    [
      "not_established",
      "mapping_excludes_memory_narrative_transcript_lanes",
    ].includes(String(mapping.memoryLaneExclusionPosture)) &&
    mapping.authorityPosture ===
      "mapping_grants_no_authority_membership_or_capability" &&
    mapping.authority === "none" &&
    !hasForbiddenKey(mapping, POND_STAGE_DP9_FORBIDDEN_MAPPING_KEYS)
  );
};

const mappingAssessment = (
  reason: PondErc8004IdentityMappingAssessment["reason"],
  mappingRecordVersion: PondErc8004IdentityMappingAssessment["mappingRecordVersion"],
  revocabilityReplaceabilityPosture: PondErc8004IdentityMappingAssessment["revocabilityReplaceabilityPosture"],
  established: boolean,
  verified: boolean,
  satisfiedChecks: readonly PondErc8004IdentityMappingCheck[],
  unsatisfiedChecks: readonly PondErc8004IdentityMappingCheck[],
): PondErc8004IdentityMappingAssessment => {
  return Object.freeze({
    contractVersion: "pond-erc8004-identity-mapping-d-p9",
    mappingRecordVersion,
    assessmentKind: "deterministic_supplied_erc8004_identity_mapping",
    mappingEstablishmentState: established
      ? "fixture_structural_receiver_owned_mapping"
      : "not_established",
    onchainVerificationState: verified
      ? "verified_against_onchain_evidence"
      : "not_verified",
    reason,
    revocabilityReplaceabilityPosture: established
      ? revocabilityReplaceabilityPosture
      : mappingRecordVersion === "invalid"
        ? "not_established"
        : revocabilityReplaceabilityPosture,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The mapping is identity bookkeeping only: the opaque ERC-8004 label
    // never becomes the PrincipalId, an authentication, a grant, or
    // membership — L313's insufficiency carries into every arm.
    erc8004IdentityAcceptedAsPrincipalId: false,
    onchainIdentityAcceptedAsAuthentication: false,
    mappingEstablishesGrant: false,
    mappingEstablishesMembershipOrAdmission: false,
    credentialAdmitted: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondErc8004IdentityMapping(
  input: PondErc8004IdentityMappingInput,
): PondErc8004IdentityMappingAssessment {
  if (!validMappingRecord(input.mappingRecord))
    return mappingAssessment(
      "mapping_record_invalid",
      "invalid",
      "not_established",
      false,
      false,
      [],
      mappingChecks,
    );
  const mapping = input.mappingRecord as Record<string, unknown>;
  const values = [
    wellFormedPrincipalRef(mapping.principalRef),
    wellFormedAgentRef(mapping.agentRef) &&
      mapping.agentRef !== mapping.principalRef,
    wellFormedErc8004IdentityRef(mapping.erc8004IdentityRef),
    wellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
      mapping.principalRef === input.receiverHeldPrincipalRef,
    mapping.mappingBasis === "receiver_owned_explicit_mapping_binding",
    // The all-false distinctness tuple is validated at record level; the
    // check restates that the receiver affirmed the D-P0 relationship
    // literals plus the agent-identity law around satisfied postures.
    mapping.grantSufficiencyPosture ===
      "mapping_insufficient_by_itself_to_establish_a_grant",
    mapping.revocabilityReplaceabilityPosture ===
      "mapping_revocable_and_replaceable_independently_of_registry_transport_or_wallet" &&
      mapping.grantSufficiencyPosture ===
        "mapping_insufficient_by_itself_to_establish_a_grant",
    // Fail-closed by construction this cut: no onchain observation surface
    // exists in Pond, so no supplied evidence — however complete or
    // honestly non-null — can be independently reproduced here. The
    // receiver-observed verification literal is the honest seam for the
    // dedicated verification cut and still does not satisfy this check.
    false,
  ];
  const satisfied = mappingChecks.filter((_, index) => values[index] === true);
  const unsatisfied = mappingChecks.filter((_, index) => values[index] !== true);
  const recordChecksSatisfied = values.slice(0, 7).every(Boolean);
  const verificationSatisfied = values[7] === true;
  return mappingAssessment(
    values[7]
      ? "all_mapping_checks_satisfied"
      : recordChecksSatisfied
        ? "onchain_verification_not_performed"
        : "receiver_mapping_proof_incomplete",
    "pond-erc8004-identity-mapping-d-p9",
    mapping.revocabilityReplaceabilityPosture as PondErc8004IdentityMappingAssessment["revocabilityReplaceabilityPosture"],
    recordChecksSatisfied,
    verificationSatisfied,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The mapping is explicit, revocable,
// and insufficient for a grant; the positive onchain-verification
// vocabulary stays unreachable while no observation surface exists.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP9Invariant_MappingChecksExact = Assert<
  Equal<
    PondErc8004IdentityMappingCheck,
    | "principal_ref_well_formed"
    | "agent_ref_well_formed_and_distinct_from_principal"
    | "erc8004_identity_ref_well_formed"
    | "mapping_bound_to_receiver_held_principal"
    | "mapping_explicitly_receiver_owned_not_inferred_or_equivalence"
    | "mapping_preserves_identity_distinctness"
    | "mapping_revocable_replaceable_and_insufficient_for_grant"
    | "onchain_verification_evidence_independently_observed"
  >
>;
export type PondStageDP9Invariant_MappingStatesExact = Assert<
  Equal<
    [
      PondErc8004IdentityMappingAssessment["mappingEstablishmentState"],
      PondErc8004IdentityMappingAssessment["onchainVerificationState"],
    ],
    [
      "not_established" | "fixture_structural_receiver_owned_mapping",
      "not_verified" | "verified_against_onchain_evidence",
    ]
  >
>;
export type PondStageDP9Invariant_MappingReasonsExact = Assert<
  Equal<
    PondErc8004IdentityMappingAssessment["reason"],
    | "mapping_record_invalid"
    | "receiver_mapping_proof_incomplete"
    | "onchain_verification_not_performed"
    | "all_mapping_checks_satisfied"
  >
>;
export type PondStageDP9Invariant_MappingNeverBecomesGrantOrPrincipalId =
  Assert<
    Equal<
      [
        PondErc8004IdentityMappingAssessment["erc8004IdentityAcceptedAsPrincipalId"],
        PondErc8004IdentityMappingAssessment["onchainIdentityAcceptedAsAuthentication"],
        PondErc8004IdentityMappingAssessment["mappingEstablishesGrant"],
        PondErc8004IdentityMappingAssessment["mappingEstablishesMembershipOrAdmission"],
        PondErc8004IdentityMappingAssessment["credentialAdmitted"],
        PondErc8004IdentityMappingAssessment["personalMemoryContentAdmitted"],
        PondErc8004IdentityMappingAssessment["currentTruthAdmitted"],
        PondErc8004IdentityMappingAssessment["runtimeActivationPosture"],
        PondErc8004IdentityMappingAssessment["authority"],
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
export type PondStageDP9Invariant_NoForbiddenMappingRecordKeys = Assert<
  HasAnyKey<PondErc8004IdentityMappingRecord, (typeof POND_STAGE_DP9_FORBIDDEN_MAPPING_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP9Invariant_NoForbiddenMappingAssessmentKeys = Assert<
  HasAnyKey<PondErc8004IdentityMappingAssessment, (typeof POND_STAGE_DP9_FORBIDDEN_MAPPING_KEYS)[number]> extends false
    ? true
    : false
>;