// Stage D-P1 identity-bound observed-agent presence source binding.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture
// (contracts/agent-identity-and-specialist-admission-contract.md). This cut
// binds the D-P0 observed-agent presence projection to its trading-desk
// source contract — exact repository identity, exact committed SHA binding,
// exact observed tool inventory, read-only posture — as a fixture-level
// structural binding only. It refuses, on every outcome, that the binding
// was live-verified by the receiver or that the presence records are live
// observation. The source contract is bound, not the observation.

export type PondAgentPresenceSourceBindingCheck =
  | "exact_repository_identity"
  | "exact_committed_source_commit_binding"
  | "exact_observed_tool_inventory"
  | "read_only_source_posture"
  | "presence_records_sourced_from_bound_contract"
  | "no_live_connection_in_binding";

export type PondAgentPresenceSourceBindingState =
  | "not_established"
  | "fixture_bound_committed_source_contract";

export interface PondAgentPresenceSourceBindingInput {
  readonly sourceContractFixture: unknown;
  readonly projection: unknown;
}

export interface PondAgentPresenceSourceBindingAssessment {
  readonly contractVersion: "pond-agent-presence-source-binding-d-p1";
  readonly sourceContractFixtureVersion:
    | "pond-agent-presence-source-contract-d-p0"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_source_binding";
  readonly bindingState: PondAgentPresenceSourceBindingState;
  readonly reason:
    | "source_contract_fixture_invalid"
    | "projection_invalid"
    | "receiver_live_verification_incomplete"
    | "fixture_source_binding_structurally_admissible";
  readonly satisfiedChecks: readonly PondAgentPresenceSourceBindingCheck[];
  readonly unsatisfiedChecks: readonly PondAgentPresenceSourceBindingCheck[];
  readonly liveSourceContractVerifiedByReceiver: false;
  readonly presenceRecordsAcceptedAsLiveObservation: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const bindingChecks = Object.freeze([
  "exact_repository_identity",
  "exact_committed_source_commit_binding",
  "exact_observed_tool_inventory",
  "read_only_source_posture",
  "presence_records_sourced_from_bound_contract",
  "no_live_connection_in_binding",
] as const satisfies readonly PondAgentPresenceSourceBindingCheck[]);

// Keys whose presence in the source-contract fixture or projection would
// mean a live-connection channel or an authority surface entered the
// binding as data. The binding is read-only vocabulary, never a dial.
export const POND_STAGE_D_P1_FORBIDDEN_BINDING_KEYS = Object.freeze([
  "connect",
  "listen",
  "poll",
  "subscribe",
  "execute",
  "canExecute",
  "mayMutate",
  "approve",
  "grant",
  "apiKey",
  "secret",
  "token",
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
  value: Record<string, unknown>,
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

const validSourceContractFixture = (value: unknown): boolean => {
  const fixture = record(value);
  const source = record(record(value)?.sourceContract);
  return (
    fixture !== null &&
    source !== null &&
    exactKeys(fixture, ["contractVersion", "kind", "sourceContract", "authority"]) &&
    fixture.contractVersion ===
      "pond-agent-presence-source-contract-d-p0" &&
    fixture.kind === "pond-agent-presence-source-contract" &&
    exactKeys(source, [
      "repository",
      "boundSourceCommit",
      "observedTools",
      "sourcePosture",
    ]) &&
    source.repository === "trading-desk" &&
    typeof source.boundSourceCommit === "string" &&
    /^[0-9a-f]{40}$/.test(source.boundSourceCommit) &&
    exactArray(source.observedTools, ["runtime_status", "identity_status"]) &&
    source.sourcePosture === "read_only_tool_contract_only_no_live_connection" &&
    fixture.authority === "none" &&
    !hasForbiddenKey(fixture, POND_STAGE_D_P1_FORBIDDEN_BINDING_KEYS)
  );
};

// The projection side re-checks the D-P0 structural literals the binding is
// sourced from. It mirrors the D-P0 admission classifier's vocabulary checks
// (not its receiver observation, which is a separate D-P0 concern): the
// binding proves the projection carries the bound source contract's shape,
// never that the records were live-observed.
const validProjectionForBinding = (value: unknown): boolean => {
  const projection = record(value);
  if (
    projection === null ||
    !exactKeys(projection, [
      "contractVersion",
      "kind",
      "posture",
      "localPrincipalBinding",
      "observedAgents",
      "communityRelationshipState",
      "projectRelationshipState",
      "personalMemoryBoundary",
      "authority",
    ]) ||
    projection.contractVersion !== "pond-agent-presence-projection-d-p0" ||
    projection.kind !== "pond-agent-presence-projection" ||
    projection.posture !==
      "fixture_observed_presence_projection_authority_none" ||
    !Array.isArray(projection.observedAgents) ||
    projection.observedAgents.length === 0 ||
    projection.communityRelationshipState !== "not_established" ||
    projection.projectRelationshipState !== "not_established" ||
    projection.authority !== "none"
  )
    return false;
  const boundary = record(projection.personalMemoryBoundary);
  if (
    boundary === null ||
    !exactKeys(boundary, [
      "deskJournalLaneAdmitted",
      "deskMemoryLaneAdmitted",
      "deskNarrativeLaneAdmitted",
      "deskTranscriptLaneAdmitted",
    ]) ||
    ["deskJournalLaneAdmitted", "deskMemoryLaneAdmitted", "deskNarrativeLaneAdmitted", "deskTranscriptLaneAdmitted"].some(
      (key) => boundary[key] !== false,
    )
  )
    return false;
  const binding = record(projection.localPrincipalBinding);
  if (
    binding === null ||
    binding.authenticationPerformed !== false ||
    binding.ceremonyPosture !== "not_defined_this_cut"
  )
    return false;
  for (const entry of projection.observedAgents) {
    const agent = record(entry);
    if (
      agent === null ||
      typeof agent.agentRef !== "string" ||
      !agent.agentRef.startsWith("agent:") ||
      agent.authority !== "none"
    )
      return false;
  }
  return !hasForbiddenKey(projection, POND_STAGE_D_P1_FORBIDDEN_BINDING_KEYS);
};

const assessment = (
  reason: PondAgentPresenceSourceBindingAssessment["reason"],
  sourceContractFixtureVersion: PondAgentPresenceSourceBindingAssessment["sourceContractFixtureVersion"],
  satisfiedChecks: readonly PondAgentPresenceSourceBindingCheck[],
  unsatisfiedChecks: readonly PondAgentPresenceSourceBindingCheck[],
): PondAgentPresenceSourceBindingAssessment =>
  Object.freeze({
    contractVersion: "pond-agent-presence-source-binding-d-p1",
    sourceContractFixtureVersion,
    assessmentKind: "deterministic_supplied_source_binding",
    bindingState:
      reason === "fixture_source_binding_structurally_admissible"
        ? "fixture_bound_committed_source_contract"
        : "not_established",
    reason,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    liveSourceContractVerifiedByReceiver: false,
    presenceRecordsAcceptedAsLiveObservation: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondAgentPresenceSourceBinding(
  input: PondAgentPresenceSourceBindingInput,
): PondAgentPresenceSourceBindingAssessment {
  const sourceFixtureValid = validSourceContractFixture(input.sourceContractFixture);
  if (!sourceFixtureValid)
    return assessment(
      "source_contract_fixture_invalid",
      "invalid",
      [],
      bindingChecks,
    );
  if (!validProjectionForBinding(input.projection))
    return assessment(
      "projection_invalid",
      "pond-agent-presence-source-contract-d-p0",
      [],
      bindingChecks,
    );

  const source = (input.sourceContractFixture as {
    readonly sourceContract: {
      readonly repository: string;
      readonly boundSourceCommit: string;
      readonly observedTools: readonly string[];
      readonly sourcePosture: string;
    };
  }).sourceContract;
  const values = [
    source.repository === "trading-desk",
    /^[0-9a-f]{40}$/.test(source.boundSourceCommit),
    exactArray(source.observedTools, ["runtime_status", "identity_status"]),
    source.sourcePosture === "read_only_tool_contract_only_no_live_connection",
    Array.isArray(
      (input.projection as { readonly observedAgents: readonly unknown[] })
        .observedAgents,
    ) &&
      (
        (input.projection as { readonly observedAgents: readonly unknown[] })
          .observedAgents
      ).length > 0,
    !hasForbiddenKey(
      input.sourceContractFixture as Record<string, unknown>,
      POND_STAGE_D_P1_FORBIDDEN_BINDING_KEYS,
    ) &&
      !hasForbiddenKey(
        input.projection as Record<string, unknown>,
        POND_STAGE_D_P1_FORBIDDEN_BINDING_KEYS,
      ),
  ];
  const satisfied = bindingChecks.filter((_, index) => values[index]);
  const unsatisfied = bindingChecks.filter((_, index) => !values[index]);
  // The structural fixture binding can be fully satisfied, but the refused
  // tuple stays: no receiver live verification has occurred, so the binding
  // never graduates to a live source contract.
  return assessment(
    unsatisfied.length === 0
      ? "fixture_source_binding_structurally_admissible"
      : "receiver_live_verification_incomplete",
    "pond-agent-presence-source-contract-d-p0",
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The fixture-level source binding
// never becomes receiver live verification, admission, or authority.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP1Invariant_SourceBindingChecksExact = Assert<
  Equal<
    PondAgentPresenceSourceBindingCheck,
    "exact_repository_identity" | "exact_committed_source_commit_binding" | "exact_observed_tool_inventory" | "read_only_source_posture" | "presence_records_sourced_from_bound_contract" | "no_live_connection_in_binding"
  >
>;
export type PondStageDP1Invariant_BindingStateVocabularyExact = Assert<
  Equal<
    PondAgentPresenceSourceBindingState,
    "not_established" | "fixture_bound_committed_source_contract"
  >
>;
export type PondStageDP1Invariant_FixtureSourceBindingNeverBecomesLiveVerification =
  Assert<
    Equal<
      [
        PondAgentPresenceSourceBindingAssessment["liveSourceContractVerifiedByReceiver"],
        PondAgentPresenceSourceBindingAssessment["presenceRecordsAcceptedAsLiveObservation"],
        PondAgentPresenceSourceBindingAssessment["currentTruthAdmitted"],
        PondAgentPresenceSourceBindingAssessment["runtimeActivationPosture"],
        PondAgentPresenceSourceBindingAssessment["authority"],
      ],
      [false, false, false, "not_included", "none"]
    >
  >;