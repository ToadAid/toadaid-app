// Stage D-P5 receiver-owned local principal binding establishment ceremony.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture
// (contracts/scope-sovereignty-contract.md owns PrincipalId; contracts/
// agent-identity-and-specialist-admission-contract.md owns principal-agent
// binding): a principal is the explicitly identified actor to which identity
// may bind — never a provider, model, browser, session, wallet, repository,
// or conversation; "Principal is not agent"; "Authentication is not
// authorization"; external identity is evidence only; the binding is
// revocable independently of provider session, transport, or external
// registry; and the binding must not be writable through operator messages,
// documents, provider output, or conversation history. This cut establishes
// the deterministic ceremony for what it takes to prove the receiver's own
// local principal binding — a well-formed principal ref bound to the
// receiver-held principal, an explicitly receiver-owned binding that never
// arrives inferred from presence, provider session, wallet, memory, or
// conversation, a receiver-observed local authentication observation,
// verified identity separation from the observed agent, memory-lane
// exclusion, and a no-authority independently-revocable posture. The
// fixture ceremony can complete structurally, and even then it never
// becomes a real authentication, a PrincipalId issuance, memory admission,
// or authority: no key format, credential backend, or identity provider is
// chosen by this contract — those decisions stay deliberately deferred.

export type PondLocalPrincipalBindingBasis =
  | "not_established"
  | "receiver_owned_explicit_binding"
  // Valid-but-unsatisfied fail-closed literals: a binding claimed from any
  // of these bases is exactly what the ceremony exists to refuse. A
  // presence, provider session, wallet, memory, or conversation never
  // establishes a principal (scope-sovereignty law); the record stays valid
  // and its binding checks stay unsatisfied.
  | "inferred_from_presence"
  | "inferred_from_provider_session"
  | "inferred_from_wallet"
  | "inferred_from_memory"
  | "inferred_from_conversation";

export type PondLocalPrincipalAuthenticationObservation =
  | "not_observed"
  | "receiver_observed_local_authentication";

export type PondLocalPrincipalIdentitySeparationPosture =
  | "not_verified"
  | "receiver_verified_agent_identity_distinct_from_principal";

export type PondLocalPrincipalMemoryLaneExclusionPosture =
  | "not_established"
  | "binding_excludes_memory_narrative_transcript_lanes";

export type PondLocalPrincipalRevocabilityPosture =
  | "not_established"
  | "binding_revocable_independently_of_transport_provider_or_registry";

export interface PondLocalPrincipalBindingEstablishmentRecord {
  readonly contractVersion: "pond-local-principal-binding-establishment-d-p5";
  readonly kind: "pond-local-principal-binding-establishment";
  readonly principalRef: string;
  readonly bindingBasis: PondLocalPrincipalBindingBasis;
  readonly authenticationObservation: PondLocalPrincipalAuthenticationObservation;
  readonly identitySeparationPosture: PondLocalPrincipalIdentitySeparationPosture;
  readonly memoryLaneExclusionPosture: PondLocalPrincipalMemoryLaneExclusionPosture;
  readonly authorityPosture: "binding_grants_no_authority_membership_or_capability";
  readonly revocabilityPosture: PondLocalPrincipalRevocabilityPosture;
  readonly authenticationPosture:
    | "not_established"
    | "fixture_structural_only_no_real_authentication";
  readonly authority: "none";
}

// Receiver-owned ceremony checks. A check is satisfied only when the
// record's own proof field carries the receiver-observed literal; a
// self-assertion or an inferred basis never satisfies any of them.
export type PondLocalPrincipalBindingEstablishmentCheck =
  | "principal_ref_well_formed"
  | "binding_bound_to_receiver_held_principal"
  | "binding_explicitly_receiver_owned"
  | "local_authentication_observed_by_receiver"
  | "identity_separation_from_observed_agent_verified"
  | "binding_excludes_memory_and_lane_content"
  | "binding_grants_no_authority_and_stays_revocable";

export interface PondLocalPrincipalBindingEstablishmentInput {
  readonly ceremonyRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
}

export interface PondLocalPrincipalBindingEstablishmentAssessment {
  readonly contractVersion: "pond-local-principal-binding-establishment-d-p5";
  readonly ceremonyRecordVersion:
    | "pond-local-principal-binding-establishment-d-p5"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_local_principal_binding";
  readonly bindingEstablishmentState:
    | "not_established"
    | "fixture_established_local_principal_binding";
  readonly reason:
    | "ceremony_record_invalid"
    | "receiver_binding_proof_incomplete"
    | "all_ceremony_checks_satisfied";
  readonly authenticationPosture:
    | "not_established"
    | "fixture_structural_only_no_real_authentication";
  readonly satisfiedChecks: readonly PondLocalPrincipalBindingEstablishmentCheck[];
  readonly unsatisfiedChecks: readonly PondLocalPrincipalBindingEstablishmentCheck[];
  readonly authenticationPerformed: false;
  readonly principalIdIssued: false;
  readonly observedPresenceAcceptedAsAuthentication: false;
  readonly observedIdentityAcceptedAsPrincipalId: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const ceremonyChecks = Object.freeze([
  "principal_ref_well_formed",
  "binding_bound_to_receiver_held_principal",
  "binding_explicitly_receiver_owned",
  "local_authentication_observed_by_receiver",
  "identity_separation_from_observed_agent_verified",
  "binding_excludes_memory_and_lane_content",
  "binding_grants_no_authority_and_stays_revocable",
] as const satisfies readonly PondLocalPrincipalBindingEstablishmentCheck[]);

// Keys whose presence in a ceremony record would mean an identity-binding
// collapse (a PrincipalId field), desk personal memory, a credential, or an
// effect/transport channel entered the ceremony as data.
export const POND_STAGE_DP5_FORBIDDEN_BINDING_KEYS = Object.freeze([
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
  "session",
  "wallet",
  "address",
  "credential",
] as const);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;

const exactArray = (value: unknown, expected: readonly string[]) =>
  Array.isArray(value) &&
  value.length === expected.length &&
  value.every((entry, index) => entry === expected[index]);

const exactKeys = (
  value: Record<string, unknown>,
  expected: readonly string[],
) => exactArray(Object.keys(value).sort(), [...expected].sort());

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
  typeof value === "string" && value.startsWith("principal:") && value.length > "principal:".length;

const validCeremonyRecord = (value: unknown): boolean => {
  const ceremony = record(value);
  return (
    ceremony !== null &&
    exactKeys(ceremony, [
      "contractVersion",
      "kind",
      "principalRef",
      "bindingBasis",
      "authenticationObservation",
      "identitySeparationPosture",
      "memoryLaneExclusionPosture",
      "authorityPosture",
      "revocabilityPosture",
      "authenticationPosture",
      "authority",
    ]) &&
    ceremony.contractVersion ===
      "pond-local-principal-binding-establishment-d-p5" &&
    ceremony.kind === "pond-local-principal-binding-establishment" &&
    wellFormedPrincipalRef(ceremony.principalRef) &&
    [
      "not_established",
      "receiver_owned_explicit_binding",
      "inferred_from_presence",
      "inferred_from_provider_session",
      "inferred_from_wallet",
      "inferred_from_memory",
      "inferred_from_conversation",
    ].includes(String(ceremony.bindingBasis)) &&
    ["not_observed", "receiver_observed_local_authentication"].includes(
      String(ceremony.authenticationObservation),
    ) &&
    [
      "not_verified",
      "receiver_verified_agent_identity_distinct_from_principal",
    ].includes(String(ceremony.identitySeparationPosture)) &&
    [
      "not_established",
      "binding_excludes_memory_narrative_transcript_lanes",
    ].includes(String(ceremony.memoryLaneExclusionPosture)) &&
    ceremony.authorityPosture ===
      "binding_grants_no_authority_membership_or_capability" &&
    [
      "not_established",
      "binding_revocable_independently_of_transport_provider_or_registry",
    ].includes(String(ceremony.revocabilityPosture)) &&
    ["not_established", "fixture_structural_only_no_real_authentication"].includes(
      String(ceremony.authenticationPosture),
    ) &&
    ceremony.authority === "none" &&
    !hasForbiddenKey(ceremony, POND_STAGE_DP5_FORBIDDEN_BINDING_KEYS)
  );
};

const assessment = (
  reason: PondLocalPrincipalBindingEstablishmentAssessment["reason"],
  ceremonyRecordVersion: PondLocalPrincipalBindingEstablishmentAssessment["ceremonyRecordVersion"],
  satisfiedChecks: readonly PondLocalPrincipalBindingEstablishmentCheck[],
  unsatisfiedChecks: readonly PondLocalPrincipalBindingEstablishmentCheck[],
): PondLocalPrincipalBindingEstablishmentAssessment =>
  Object.freeze({
    contractVersion: "pond-local-principal-binding-establishment-d-p5",
    ceremonyRecordVersion,
    assessmentKind: "deterministic_supplied_local_principal_binding",
    bindingEstablishmentState:
      reason === "all_ceremony_checks_satisfied"
        ? "fixture_established_local_principal_binding"
        : "not_established",
    reason,
    authenticationPosture:
      reason === "all_ceremony_checks_satisfied"
        ? "fixture_structural_only_no_real_authentication"
        : "not_established",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The ceremony proves binding vocabulary only: it never becomes a real
    // authentication, a PrincipalId issuance, memory admission, or
    // authority. authenticationPerformed stays false even on the complete
    // fixture arm — the real credential event is a later, separately
    // planned cut.
    authenticationPerformed: false,
    principalIdIssued: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondLocalPrincipalBindingEstablishment(
  input: PondLocalPrincipalBindingEstablishmentInput,
): PondLocalPrincipalBindingEstablishmentAssessment {
  if (!validCeremonyRecord(input.ceremonyRecord))
    return assessment("ceremony_record_invalid", "invalid", [], ceremonyChecks);
  const ceremony = input.ceremonyRecord as Record<string, unknown>;
  const values = [
    wellFormedPrincipalRef(ceremony.principalRef),
    // The binding must land on the receiver's own held principal — the
    // same ref the receiver's D-P0 projection binds — never an invented or
    // externally observed one.
    wellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
      ceremony.principalRef === input.receiverHeldPrincipalRef,
    // An explicitly receiver-owned binding satisfies; an inferred basis
    // (presence, provider session, wallet, memory, conversation) is a
    // valid record whose binding check stays unsatisfied — fail closed
    // without erroring, mirroring D-P3's unknown_channel_precedence.
    ceremony.bindingBasis === "receiver_owned_explicit_binding",
    ceremony.authenticationObservation ===
      "receiver_observed_local_authentication",
    ceremony.identitySeparationPosture ===
      "receiver_verified_agent_identity_distinct_from_principal",
    ceremony.memoryLaneExclusionPosture ===
      "binding_excludes_memory_narrative_transcript_lanes",
    // The no-authority posture is the structural fact itself (already
    // validated); the revocability literal restates the receiver's own
    // satisfied proof.
    ceremony.revocabilityPosture ===
      "binding_revocable_independently_of_transport_provider_or_registry",
  ];
  const satisfied = ceremonyChecks.filter((_, index) => values[index]);
  const unsatisfied = ceremonyChecks.filter((_, index) => !values[index]);
  // The fixture ceremony can complete structurally, but it never becomes a
  // real authentication or authority.
  return assessment(
    unsatisfied.length === 0
      ? "all_ceremony_checks_satisfied"
      : "receiver_binding_proof_incomplete",
    "pond-local-principal-binding-establishment-d-p5",
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The ceremony proves local principal
// binding vocabulary only: it never becomes a real authentication, a
// PrincipalId issuance, memory admission, or authority.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP5Invariant_ChecksExact = Assert<
  Equal<
    PondLocalPrincipalBindingEstablishmentCheck,
    | "principal_ref_well_formed"
    | "binding_bound_to_receiver_held_principal"
    | "binding_explicitly_receiver_owned"
    | "local_authentication_observed_by_receiver"
    | "identity_separation_from_observed_agent_verified"
    | "binding_excludes_memory_and_lane_content"
    | "binding_grants_no_authority_and_stays_revocable"
  >
>;
export type PondStageDP5Invariant_StatesExact = Assert<
  Equal<
    PondLocalPrincipalBindingEstablishmentAssessment["bindingEstablishmentState"],
    "not_established" | "fixture_established_local_principal_binding"
  >
>;
export type PondStageDP5Invariant_ReasonsExact = Assert<
  Equal<
    PondLocalPrincipalBindingEstablishmentAssessment["reason"],
    "ceremony_record_invalid" | "receiver_binding_proof_incomplete" | "all_ceremony_checks_satisfied"
  >
>;
export type PondStageDP5Invariant_BindingNeverBecomesPrincipalIdOrAuthority =
  Assert<
    Equal<
      [
        PondLocalPrincipalBindingEstablishmentAssessment["authenticationPerformed"],
        PondLocalPrincipalBindingEstablishmentAssessment["principalIdIssued"],
        PondLocalPrincipalBindingEstablishmentAssessment["observedPresenceAcceptedAsAuthentication"],
        PondLocalPrincipalBindingEstablishmentAssessment["observedIdentityAcceptedAsPrincipalId"],
        PondLocalPrincipalBindingEstablishmentAssessment["personalMemoryContentAdmitted"],
        PondLocalPrincipalBindingEstablishmentAssessment["currentTruthAdmitted"],
        PondLocalPrincipalBindingEstablishmentAssessment["runtimeActivationPosture"],
        PondLocalPrincipalBindingEstablishmentAssessment["authority"],
      ],
      [false, false, false, false, false, false, "not_included", "none"]
    >
  >;
export type PondStageDP5Invariant_NoForbiddenRecordKeys = Assert<
  HasAnyKey<PondLocalPrincipalBindingEstablishmentRecord, (typeof POND_STAGE_DP5_FORBIDDEN_BINDING_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP5Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondLocalPrincipalBindingEstablishmentAssessment, (typeof POND_STAGE_DP5_FORBIDDEN_BINDING_KEYS)[number]> extends false
    ? true
    : false
>;