// Stage D-P3 receiver-owned trusted-channel establishment ceremony.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture
// (contracts/trusted-channel-separation-contract.md): trust is a property
// of the path by which information entered the system, and a channel is
// authoritative only for the semantic classes the receiver verifies it can
// govern. This cut establishes the deterministic ceremony for what it takes
// to prove a Pond-owned presence-observation channel — exact channel kind,
// direct-child process ownership, semantic-class-bounded authority with the
// dangerous crossings structurally forbidden, secret-free inventory,
// carried desk source-contract binding, and precedence verification. The
// fixture ceremony can complete structurally, and even then it never
// becomes a live channel, authentication, memory admission, or authority:
// liveObservationPerformed stays false and authority stays none.

export type PondAgentPresenceChannelKind =
  | "not_established"
  | "stdio_direct_child_process";

// The one semantic class a presence channel may establish. The vocabulary
// is pinned exact: a new class requires a new contract version.
export type PondAgentPresenceChannelSemanticClass =
  | "observed_agent_presence";

// Structural crossings the presence channel must never make: a presence
// observation channel is not trusted runtime configuration, not canonical
// memory, not an authority decision, and not operator input.
export interface PondAgentPresenceForbiddenSemanticCrossings {
  readonly trustedRuntimeConfiguration: "forbidden";
  readonly canonicalMemory: "forbidden";
  readonly authorityDecisions: "forbidden";
  readonly operatorInput: "forbidden";
}

export interface PondAgentPresenceChannelOwnershipProof {
  readonly processOwnership: "exact_direct_child" | "not_observed";
  readonly parentRuntime: "pond_desktop_shell" | "not_observed";
}

export interface PondAgentPresenceChannelEstablishmentRecord {
  readonly contractVersion: "pond-agent-presence-channel-establishment-d-p3";
  readonly kind: "pond-agent-presence-channel-establishment";
  readonly channelKind: PondAgentPresenceChannelKind;
  readonly ownershipProof: PondAgentPresenceChannelOwnershipProof;
  readonly establishesSemanticClasses: readonly PondAgentPresenceChannelSemanticClass[];
  readonly forbiddenSemanticCrossings: PondAgentPresenceForbiddenSemanticCrossings;
  readonly channelAuthorityStatement: "channel_authoritative_for_presence_semantic_class_only";
  readonly precedencePosture:
    | "receiver_authoritative_no_conflicting_upstream_configuration_observed"
    | "unknown_channel_precedence"
    | "not_observed";
  readonly sourceContractCommit: string;
  readonly secretFreeChannelInventoryPosture: "inventory_secret_free_not_observed_by_receiver";
  readonly authority: "none";
}

// Receiver-owned ceremony checks. A check is satisfied only when the
// record's own proof field carries the receiver-observed literal; a
// self-assertion never satisfies any of them.
export type PondAgentPresenceChannelEstablishmentCheck =
  | "exact_channel_kind_receiver_owned"
  | "process_ownership_observed_exact_direct_child"
  | "channel_authoritative_only_for_presence_semantic_class"
  | "channel_cannot_write_trusted_configuration"
  | "secret_free_channel_inventory"
  | "source_contract_commit_binding_carried"
  | "no_conflicting_upstream_channel_precedence";

export interface PondAgentPresenceChannelEstablishmentInput {
  readonly establishmentRecord: unknown;
}

export interface PondAgentPresenceChannelEstablishmentAssessment {
  readonly contractVersion: "pond-agent-presence-channel-establishment-d-p3";
  readonly establishmentRecordVersion:
    | "pond-agent-presence-channel-establishment-d-p3"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_channel_establishment";
  readonly channelEstablishmentState:
    | "not_established"
    | "fixture_established_receiver_owned_channel";
  readonly reason:
    | "establishment_record_invalid"
    | "receiver_channel_proof_incomplete"
    | "all_ceremony_checks_satisfied";
  readonly trustedChannelPosture:
    | "not_established"
    | "fixture_structural_only_no_live_channel";
  readonly satisfiedChecks: readonly PondAgentPresenceChannelEstablishmentCheck[];
  readonly unsatisfiedChecks: readonly PondAgentPresenceChannelEstablishmentCheck[];
  readonly liveObservationPerformed: false;
  readonly observedPresenceAcceptedAsAuthentication: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const ceremonyChecks = Object.freeze([
  "exact_channel_kind_receiver_owned",
  "process_ownership_observed_exact_direct_child",
  "channel_authoritative_only_for_presence_semantic_class",
  "channel_cannot_write_trusted_configuration",
  "secret_free_channel_inventory",
  "source_contract_commit_binding_carried",
  "no_conflicting_upstream_channel_precedence",
] as const satisfies readonly PondAgentPresenceChannelEstablishmentCheck[]);

// Keys whose presence in a ceremony record would mean a credential, an
// effect channel, desk personal memory, or an identity-binding collapse
// entered the ceremony as data.
export const POND_STAGE_DP3_FORBIDDEN_CHANNEL_KEYS = Object.freeze([
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "endpoint",
  "apiKey",
  "secret",
  "token",
  "session",
  "credential",
  "approve",
  "grant",
  "execute",
  "canExecute",
  "mayMutate",
  "PrincipalId",
  "principalId",
] as const);

// Live-connection fields. A ceremony record observes ownership; it never
// dials.
export const POND_STAGE_DP3_FORBIDDEN_LIVE_CONNECTION_KEYS = Object.freeze([
  "connect",
  "listen",
  "poll",
  "subscribe",
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

const validEstablishmentRecord = (value: unknown): boolean => {
  const establishment = record(value);
  if (
    establishment === null ||
    !exactKeys(establishment, [
      "contractVersion",
      "kind",
      "channelKind",
      "ownershipProof",
      "establishesSemanticClasses",
      "forbiddenSemanticCrossings",
      "channelAuthorityStatement",
      "precedencePosture",
      "sourceContractCommit",
      "secretFreeChannelInventoryPosture",
      "authority",
    ]) ||
    establishment.contractVersion !==
      "pond-agent-presence-channel-establishment-d-p3" ||
    establishment.kind !== "pond-agent-presence-channel-establishment" ||
    !["not_established", "stdio_direct_child_process"].includes(
      String(establishment.channelKind),
    ) ||
    !exactArray(establishment.establishesSemanticClasses, [
      "observed_agent_presence",
    ]) ||
    establishment.channelAuthorityStatement !==
      "channel_authoritative_for_presence_semantic_class_only" ||
    ![
      "receiver_authoritative_no_conflicting_upstream_configuration_observed",
      "unknown_channel_precedence",
      "not_observed",
    ].includes(String(establishment.precedencePosture)) ||
    typeof establishment.sourceContractCommit !== "string" ||
    !/^[0-9a-f]{40}$/.test(establishment.sourceContractCommit) ||
    establishment.secretFreeChannelInventoryPosture !==
      "inventory_secret_free_not_observed_by_receiver" ||
    establishment.authority !== "none" ||
    hasForbiddenKey(establishment, POND_STAGE_DP3_FORBIDDEN_CHANNEL_KEYS) ||
    hasForbiddenKey(establishment, POND_STAGE_DP3_FORBIDDEN_LIVE_CONNECTION_KEYS)
  )
    return false;
  const crossings = record(establishment.forbiddenSemanticCrossings);
  if (
    crossings === null ||
    !exactKeys(crossings, [
      "trustedRuntimeConfiguration",
      "canonicalMemory",
      "authorityDecisions",
      "operatorInput",
    ]) ||
    ["trustedRuntimeConfiguration", "canonicalMemory", "authorityDecisions", "operatorInput"].some(
      (key) => crossings[key] !== "forbidden",
    )
  )
    return false;
  const ownership = record(establishment.ownershipProof);
  if (
    ownership === null ||
    !exactKeys(ownership, ["processOwnership", "parentRuntime"]) ||
    !["exact_direct_child", "not_observed"].includes(
      String(ownership.processOwnership),
    ) ||
    !["pond_desktop_shell", "not_observed"].includes(
      String(ownership.parentRuntime),
    )
  )
    return false;
  return true;
};

const assessment = (
  reason: PondAgentPresenceChannelEstablishmentAssessment["reason"],
  establishmentRecordVersion: PondAgentPresenceChannelEstablishmentAssessment["establishmentRecordVersion"],
  satisfiedChecks: readonly PondAgentPresenceChannelEstablishmentCheck[],
  unsatisfiedChecks: readonly PondAgentPresenceChannelEstablishmentCheck[],
): PondAgentPresenceChannelEstablishmentAssessment =>
  Object.freeze({
    contractVersion: "pond-agent-presence-channel-establishment-d-p3",
    establishmentRecordVersion,
    assessmentKind: "deterministic_supplied_channel_establishment",
    channelEstablishmentState:
      reason === "all_ceremony_checks_satisfied"
        ? "fixture_established_receiver_owned_channel"
        : "not_established",
    reason,
    trustedChannelPosture:
      reason === "all_ceremony_checks_satisfied"
        ? "fixture_structural_only_no_live_channel"
        : "not_established",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    liveObservationPerformed: false,
    observedPresenceAcceptedAsAuthentication: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondAgentPresenceChannelEstablishment(
  input: PondAgentPresenceChannelEstablishmentInput,
): PondAgentPresenceChannelEstablishmentAssessment {
  if (!validEstablishmentRecord(input.establishmentRecord))
    return assessment("establishment_record_invalid", "invalid", [], ceremonyChecks);
  const establishment = input.establishmentRecord as Record<string, unknown>;
  const ownership = establishment.ownershipProof as {
    readonly processOwnership: string;
    readonly parentRuntime: string;
  };
  const values = [
    establishment.channelKind === "stdio_direct_child_process",
    ownership.processOwnership === "exact_direct_child" &&
      ownership.parentRuntime === "pond_desktop_shell",
    exactArray(establishment.establishesSemanticClasses, [
      "observed_agent_presence",
    ]),
    // The crossing refusal is the structural fact itself: every dangerous
    // crossing literal stays "forbidden" (already validated) — this check
    // restates it as the receiver's own satisfied proof.
    (
      ["trustedRuntimeConfiguration", "canonicalMemory", "authorityDecisions", "operatorInput"] as const
    ).every(
      (key) =>
        (establishment.forbiddenSemanticCrossings as Record<string, unknown>)[
          key
        ] === "forbidden",
    ),
    establishment.secretFreeChannelInventoryPosture ===
      "inventory_secret_free_not_observed_by_receiver",
    /^[0-9a-f]{40}$/.test(establishment.sourceContractCommit as string),
    establishment.precedencePosture ===
      "receiver_authoritative_no_conflicting_upstream_configuration_observed",
  ];
  const satisfied = ceremonyChecks.filter((_, index) => values[index]);
  const unsatisfied = ceremonyChecks.filter((_, index) => !values[index]);
  // The fixture ceremony can complete structurally, but it never becomes a
  // live channel: liveObservationPerformed stays false and authority none.
  return assessment(
    unsatisfied.length === 0
      ? "all_ceremony_checks_satisfied"
      : "receiver_channel_proof_incomplete",
    "pond-agent-presence-channel-establishment-d-p3",
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The ceremony proves channel
// ownership vocabulary only: it never becomes a live channel,
// authentication, memory admission, or authority.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP3Invariant_ChannelKindsExact = Assert<
  Equal<
    PondAgentPresenceChannelKind,
    "not_established" | "stdio_direct_child_process"
  >
>;
export type PondStageDP3Invariant_SemanticClassExact = Assert<
  Equal<PondAgentPresenceChannelSemanticClass, "observed_agent_presence">
>;
export type PondStageDP3Invariant_CeremonyReasonsExact = Assert<
  Equal<
    PondAgentPresenceChannelEstablishmentAssessment["reason"],
    "establishment_record_invalid" | "receiver_channel_proof_incomplete" | "all_ceremony_checks_satisfied"
  >
>;
export type PondStageDP3Invariant_ChannelCeremonyNeverBecomesLiveChannelOrAuthority =
  Assert<
    Equal<
      [
        PondAgentPresenceChannelEstablishmentAssessment["liveObservationPerformed"],
        PondAgentPresenceChannelEstablishmentAssessment["observedPresenceAcceptedAsAuthentication"],
        PondAgentPresenceChannelEstablishmentAssessment["personalMemoryContentAdmitted"],
        PondAgentPresenceChannelEstablishmentAssessment["currentTruthAdmitted"],
        PondAgentPresenceChannelEstablishmentAssessment["runtimeActivationPosture"],
        PondAgentPresenceChannelEstablishmentAssessment["authority"],
      ],
      [false, false, false, false, "not_included", "none"]
    >
  >;
export type PondStageDP3Invariant_NoForbiddenRecordKeys = Assert<
  HasAnyKey<PondAgentPresenceChannelEstablishmentRecord, (typeof POND_STAGE_DP3_FORBIDDEN_CHANNEL_KEYS)[number] | (typeof POND_STAGE_DP3_FORBIDDEN_LIVE_CONNECTION_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP3Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondAgentPresenceChannelEstablishmentAssessment, (typeof POND_STAGE_DP3_FORBIDDEN_CHANNEL_KEYS)[number] | (typeof POND_STAGE_DP3_FORBIDDEN_LIVE_CONNECTION_KEYS)[number]> extends false
    ? true
    : false
>;