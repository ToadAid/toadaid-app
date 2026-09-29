// Stage D-P9 local PrincipalId issuance ceremony.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture:
// contracts/scope-sovereignty-contract.md owns PrincipalId — "A principal is
// the explicitly identified human or other separately admitted actor to
// which a ToadAid identity, membership, grant, delivery, or receipt may
// bind" — a provider, model, browser, device, session, room, repository,
// wallet, or conversation is never automatically a principal, and the law
// deliberately defines no format, issuer, or lifecycle for the PrincipalId
// token. contracts/delegated-authority-and-capability-grant-contract.md
// reserves the ERC-8004 identity mapping for a dedicated identity-mapping
// architecture cut and the identity contract's laws hold throughout:
// principal is not agent, authentication is not authorization, external
// identity is evidence, onchain identity is not local authority. This cut
// is the receiver's first honest local PrincipalId issuance surface: the
// receiver explicitly identifies itself with its own already-held principal
// ref — one binding, one ref, no second identity — issued in place,
// revocable by receiver replacement, distinct as a class from AgentId,
// ERC-8004 Agent ID, wallet address, GrantId, AttestationId,
// provider-session ids, and display names, and carrying the vocabulary of
// a local identity label only: no credential, no authenticator, no
// session, no authority, no membership, no capability. The forbidden-key
// inventory keeps a "principalId" key — or any credential-shaped key — out
// of the record; the identity travels as a principal ref, never as issued
// credence.

export type PondPrincipalIdIssuanceBasis =
  | "not_issued"
  | "receiver_issued_local_principal_id"
  // Valid-but-unsatisfied fail-closed literals: an issuance claimed from
  // any of these bases is exactly what the ceremony exists to refuse. A
  // PrincipalId never comes from presence, a wallet address, an observed
  // onchain identity, or the ERC-8004 binding — external identity is
  // evidence only (identity law 4).
  | "inferred_from_presence"
  | "derived_from_wallet_address"
  | "derived_from_observed_onchain_identity"
  | "derived_from_erc8004_binding";

// Cross-class distinctness, carried as receiver-owned hard-false claims:
// the issued PrincipalId is distinct from every other identity class the
// law distinguishes it from (the GrantId/AttestationId distinctness lists
// and the identity laws).
export interface PondPrincipalIdIssuanceDistinctnessClaims {
  readonly isAgentId: false;
  readonly isErc8004AgentId: false;
  readonly isWalletAddress: false;
  readonly isGrantId: false;
  readonly isAttestationId: false;
  readonly isProviderSessionId: false;
  readonly isDisplayName: false;
}

export interface PondLocalPrincipalIdIssuanceRecord {
  readonly contractVersion: "pond-local-principal-id-issuance-d-p9";
  readonly kind: "pond-local-principal-id-issuance";
  readonly principalRef: string;
  readonly issuanceBasis: PondPrincipalIdIssuanceBasis;
  readonly issuedRefPosture:
    | "not_issued"
    | "receiver_held_ref_declared_issued_no_second_identity";
  readonly issuanceDistinctnessClaims: PondPrincipalIdIssuanceDistinctnessClaims;
  readonly bindingEstablishmentPosture:
    | "not_established"
    | "receiver_binding_established_before_issuance";
  readonly memoryLaneExclusionPosture:
    | "not_established"
    | "issuance_excludes_memory_narrative_transcript_lanes";
  readonly authorityPosture: "issuance_grants_no_authority_membership_or_capability";
  readonly revocabilityPosture:
    | "not_established"
    | "issued_principal_id_revocable_by_receiver_replacement";
  readonly authority: "none";
}

// Receiver-owned issuance checks. A check is satisfied only when the
// record's own proof field carries the receiver-owned literal; an inferred
// or wallet/identity-derived issuance never satisfies any of them.
export type PondLocalPrincipalIdIssuanceCheck =
  | "principal_ref_well_formed"
  | "issued_ref_is_receiver_held_ref"
  | "issuance_explicitly_receiver_owned"
  | "principal_id_distinct_from_agent_onchain_wallet_and_grant_ids"
  | "binding_established_before_issuance"
  | "issuance_excludes_memory_and_lane_content"
  | "issuance_grants_no_authority_and_stays_revocable";

export interface PondLocalPrincipalIdIssuanceInput {
  readonly issuanceRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
}

export interface PondLocalPrincipalIdIssuanceAssessment {
  readonly contractVersion: "pond-local-principal-id-issuance-d-p9";
  readonly issuanceRecordVersion:
    | "pond-local-principal-id-issuance-d-p9"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_local_principal_id_issuance";
  readonly issuanceState: "not_issued" | "fixture_structural_local_principal_id_issued";
  readonly reason:
    | "issuance_record_invalid"
    | "receiver_issuance_proof_incomplete"
    | "all_issuance_checks_satisfied";
  readonly issuedRefPosture:
    | "not_issued"
    | "receiver_held_ref_declared_issued_no_second_identity";
  readonly issuanceCredentialScopePosture: "local_identity_label_only_no_credential_no_authenticator_no_session";
  readonly satisfiedChecks: readonly PondLocalPrincipalIdIssuanceCheck[];
  readonly unsatisfiedChecks: readonly PondLocalPrincipalIdIssuanceCheck[];
  readonly credentialAdmitted: false;
  readonly authenticationPerformed: false;
  readonly observedIdentityAcceptedAsPrincipalId: false;
  readonly erc8004IdentityAcceptedAsPrincipalId: false;
  readonly walletAddressAcceptedAsPrincipalId: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const issuanceChecks = Object.freeze([
  "principal_ref_well_formed",
  "issued_ref_is_receiver_held_ref",
  "issuance_explicitly_receiver_owned",
  "principal_id_distinct_from_agent_onchain_wallet_and_grant_ids",
  "binding_established_before_issuance",
  "issuance_excludes_memory_and_lane_content",
  "issuance_grants_no_authority_and_stays_revocable",
] as const satisfies readonly PondLocalPrincipalIdIssuanceCheck[]);

// Keys whose presence in an issuance record would mean the identity became
// a credential, secret, authenticator, transport, memory, or identity
// collapse entered the issuance as data. Same inventory the frozen Stage D
// contracts carry, with key-ownership keys added.
export const POND_STAGE_DP9_FORBIDDEN_ISSUANCE_KEYS = Object.freeze([
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
] as const);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;

const exactKeys = (
  value: Record<string, unknown>,
  expected: readonly string[],
) =>
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

const validIssuanceRecord = (value: unknown): boolean => {
  const issuance = record(value);
  const distinctnessClaims = record(issuance?.issuanceDistinctnessClaims);
  return (
    issuance !== null &&
    exactKeys(issuance, [
      "contractVersion",
      "kind",
      "principalRef",
      "issuanceBasis",
      "issuedRefPosture",
      "issuanceDistinctnessClaims",
      "bindingEstablishmentPosture",
      "memoryLaneExclusionPosture",
      "authorityPosture",
      "revocabilityPosture",
      "authority",
    ]) &&
    issuance.contractVersion === "pond-local-principal-id-issuance-d-p9" &&
    issuance.kind === "pond-local-principal-id-issuance" &&
    wellFormedPrincipalRef(issuance.principalRef) &&
    [
      "not_issued",
      "receiver_issued_local_principal_id",
      "inferred_from_presence",
      "derived_from_wallet_address",
      "derived_from_observed_onchain_identity",
      "derived_from_erc8004_binding",
    ].includes(String(issuance.issuanceBasis)) &&
    [
      "not_issued",
      "receiver_held_ref_declared_issued_no_second_identity",
    ].includes(String(issuance.issuedRefPosture)) &&
    distinctnessClaims !== null &&
    exactKeys(distinctnessClaims, [
      "isAgentId",
      "isErc8004AgentId",
      "isWalletAddress",
      "isGrantId",
      "isAttestationId",
      "isProviderSessionId",
      "isDisplayName",
    ]) &&
    distinctnessClaims.isAgentId === false &&
    distinctnessClaims.isErc8004AgentId === false &&
    distinctnessClaims.isWalletAddress === false &&
    distinctnessClaims.isGrantId === false &&
    distinctnessClaims.isAttestationId === false &&
    distinctnessClaims.isProviderSessionId === false &&
    distinctnessClaims.isDisplayName === false &&
    [
      "not_established",
      "receiver_binding_established_before_issuance",
    ].includes(String(issuance.bindingEstablishmentPosture)) &&
    [
      "not_established",
      "issuance_excludes_memory_narrative_transcript_lanes",
    ].includes(String(issuance.memoryLaneExclusionPosture)) &&
    issuance.authorityPosture ===
      "issuance_grants_no_authority_membership_or_capability" &&
    [
      "not_established",
      "issued_principal_id_revocable_by_receiver_replacement",
    ].includes(String(issuance.revocabilityPosture)) &&
    issuance.authority === "none" &&
    !hasForbiddenKey(issuance, POND_STAGE_DP9_FORBIDDEN_ISSUANCE_KEYS)
  );
};

const issuanceAssessment = (
  reason: PondLocalPrincipalIdIssuanceAssessment["reason"],
  issuanceRecordVersion: PondLocalPrincipalIdIssuanceAssessment["issuanceRecordVersion"],
  issuedRefPosture: PondLocalPrincipalIdIssuanceAssessment["issuedRefPosture"],
  satisfiedChecks: readonly PondLocalPrincipalIdIssuanceCheck[],
  unsatisfiedChecks: readonly PondLocalPrincipalIdIssuanceCheck[],
): PondLocalPrincipalIdIssuanceAssessment => {
  const issued = reason === "all_issuance_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-local-principal-id-issuance-d-p9",
    issuanceRecordVersion,
    assessmentKind: "deterministic_supplied_local_principal_id_issuance",
    issuanceState: issued
      ? "fixture_structural_local_principal_id_issued"
      : "not_issued",
    reason,
    issuedRefPosture: issued
      ? issuedRefPosture
      : issuanceRecordVersion === "invalid"
        ? "not_issued"
        : issuedRefPosture,
    issuanceCredentialScopePosture:
      "local_identity_label_only_no_credential_no_authenticator_no_session",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The issuance proves identity vocabulary only: it never becomes a
    // credential admission, an authentication, memory admission, or
    // authority. The frozen D-P0…D-P8 `principalIdIssued: false` literals
    // stay the carriers of that name; this cut's honesty lives in its own
    // state vocabulary, so no field here flips the frozen tuple.
    credentialAdmitted: false,
    authenticationPerformed: false,
    observedIdentityAcceptedAsPrincipalId: false,
    erc8004IdentityAcceptedAsPrincipalId: false,
    walletAddressAcceptedAsPrincipalId: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondLocalPrincipalIdIssuance(
  input: PondLocalPrincipalIdIssuanceInput,
): PondLocalPrincipalIdIssuanceAssessment {
  if (!validIssuanceRecord(input.issuanceRecord))
    return issuanceAssessment(
      "issuance_record_invalid",
      "invalid",
      "not_issued",
      [],
      issuanceChecks,
    );
  const issuance = input.issuanceRecord as Record<string, unknown>;
  const values = [
    wellFormedPrincipalRef(issuance.principalRef),
    // The issued PrincipalId is the receiver's own already-held ref
    // declared issued in place — one binding, one ref; no second identity
    // artifact is created.
    wellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
      issuance.principalRef === input.receiverHeldPrincipalRef &&
      issuance.issuedRefPosture ===
        "receiver_held_ref_declared_issued_no_second_identity",
    issuance.issuanceBasis === "receiver_issued_local_principal_id",
    // The all-false distinctness tuple is validated at record level; the
    // check restates that the receiver affirmed the cross-class
    // distinctness with the satisfied postures around it.
    issuance.authorityPosture ===
      "issuance_grants_no_authority_membership_or_capability",
    issuance.bindingEstablishmentPosture ===
      "receiver_binding_established_before_issuance",
    issuance.memoryLaneExclusionPosture ===
      "issuance_excludes_memory_narrative_transcript_lanes",
    issuance.revocabilityPosture ===
      "issued_principal_id_revocable_by_receiver_replacement",
  ];
  const satisfied = issuanceChecks.filter((_, index) => values[index]);
  const unsatisfied = issuanceChecks.filter((_, index) => !values[index]);
  return issuanceAssessment(
    unsatisfied.length === 0
      ? "all_issuance_checks_satisfied"
      : "receiver_issuance_proof_incomplete",
    "pond-local-principal-id-issuance-d-p9",
    issuance.issuedRefPosture as PondLocalPrincipalIdIssuanceAssessment["issuedRefPosture"],
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The issuance proves local identity
// vocabulary only: no credential, no authenticator, no session, no memory
// admission, no authority, no second identity.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP9Invariant_IssuanceChecksExact = Assert<
  Equal<
    PondLocalPrincipalIdIssuanceCheck,
    | "principal_ref_well_formed"
    | "issued_ref_is_receiver_held_ref"
    | "issuance_explicitly_receiver_owned"
    | "principal_id_distinct_from_agent_onchain_wallet_and_grant_ids"
    | "binding_established_before_issuance"
    | "issuance_excludes_memory_and_lane_content"
    | "issuance_grants_no_authority_and_stays_revocable"
  >
>;
export type PondStageDP9Invariant_IssuanceStatesExact = Assert<
  Equal<
    PondLocalPrincipalIdIssuanceAssessment["issuanceState"],
    "not_issued" | "fixture_structural_local_principal_id_issued"
  >
>;
export type PondStageDP9Invariant_IssuanceReasonsExact = Assert<
  Equal<
    PondLocalPrincipalIdIssuanceAssessment["reason"],
    | "issuance_record_invalid"
    | "receiver_issuance_proof_incomplete"
    | "all_issuance_checks_satisfied"
  >
>;
export type PondStageDP9Invariant_IssuanceNeverBecomesCredentialOrAuthority =
  Assert<
    Equal<
      [
        PondLocalPrincipalIdIssuanceAssessment["credentialAdmitted"],
        PondLocalPrincipalIdIssuanceAssessment["authenticationPerformed"],
        PondLocalPrincipalIdIssuanceAssessment["observedIdentityAcceptedAsPrincipalId"],
        PondLocalPrincipalIdIssuanceAssessment["erc8004IdentityAcceptedAsPrincipalId"],
        PondLocalPrincipalIdIssuanceAssessment["walletAddressAcceptedAsPrincipalId"],
        PondLocalPrincipalIdIssuanceAssessment["personalMemoryContentAdmitted"],
        PondLocalPrincipalIdIssuanceAssessment["currentTruthAdmitted"],
        PondLocalPrincipalIdIssuanceAssessment["runtimeActivationPosture"],
        PondLocalPrincipalIdIssuanceAssessment["authority"],
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
export type PondStageDP9Invariant_NoForbiddenIssuanceRecordKeys = Assert<
  HasAnyKey<PondLocalPrincipalIdIssuanceRecord, (typeof POND_STAGE_DP9_FORBIDDEN_ISSUANCE_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP9Invariant_NoForbiddenIssuanceAssessmentKeys = Assert<
  HasAnyKey<PondLocalPrincipalIdIssuanceAssessment, (typeof POND_STAGE_DP9_FORBIDDEN_ISSUANCE_KEYS)[number]> extends false
    ? true
    : false
>;