// Stage D-P0 identity-bound observed-agent presence projection.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture
// (contracts/agent-identity-and-specialist-admission-contract.md,
// contracts/scope-sovereignty-contract.md). This cut establishes the
// identity-bound read vocabulary for observed agents and the first
// observed-agent presence record — the locally running trading-desk
// Agent0 as the first fixture-observed agent — while refusing, on every
// outcome, that observed presence, transport, or onchain identity-claim
// evidence is authentication, PrincipalId, membership, admission, or
// authority. No live observation, transport, or onchain read is performed.

import type { PondAgentRef, PondPrincipalRef } from "./pond-front-agent.js";

export type PondLocalPrincipalBindingState =
  | "not_established"
  | "fixture_local_projection";

export type PondObservedAgentProfileClass =
  | "personal_agent"
  | "community_agent"
  | "project_agent"
  | "specialist_agent"
  | "remote_external_agent";

export type PondObservedAgentPresenceStatus =
  | "not_observed"
  | "fixture_observed_not_live"
  | "live_observed"
  | "unavailable"
  | "unknown";

// Trading-desk identity_status statuses mirrored with an `observed_` prefix:
// the vocabulary is bound, not the observation. A desk vocabulary change can
// therefore never silently re-enter Pond as a trusted fact.
export type PondObservedIdentityClaimStatus =
  | "not_observed"
  | "observed_unconfigured"
  | "observed_verified"
  | "observed_mismatch"
  | "observed_unverified"
  | "observed_unavailable"
  | "observed_refused";

export interface PondObservedIdentityClaimEvidence {
  readonly chainIdObserved: string | null;
  readonly registryAddress: string | null;
  readonly agentId: string | null;
  readonly ownerObserved: string | null;
  readonly blockTag: string | null;
}

export interface PondObservedIdentityClaimProjection {
  readonly claimStatus: PondObservedIdentityClaimStatus;
  readonly evidence: PondObservedIdentityClaimEvidence;
  readonly evidencePosture: "observed_evidence_only_no_local_authority";
  readonly relationshipClaims: {
    readonly onchainIdentityIsPrincipalIdentity: false;
    readonly onchainIdentityEstablishesLocalAdmission: false;
    readonly onchainIdentityEstablishesAuthority: false;
  };
}

export type PondObservedAgentRuntimeFactLabel =
  | "brain"
  | "provider"
  | "model"
  | "execution"
  | "trading_state"
  | "hands"
  | "doctor_cheap_check";

export interface PondObservedAgentRuntimeFact {
  readonly factLabel: PondObservedAgentRuntimeFactLabel;
  readonly sourceTool: "runtime_status";
  readonly observedValue: string | null;
  readonly valuePosture: "transcribed_from_source_contract" | "not_observed";
}

export interface PondObservedTransportProjection {
  readonly transport:
    | "telegram"
    | "stdio"
    | "mcp"
    | "a2a"
    | "http"
    | "not_observed";
  readonly transportIsAgentIdentity: false;
  readonly transportEstablishesAdmission: false;
  readonly liveConnectionPosture: "not_included";
}

export interface PondObservedAgentSourceContract {
  readonly repository: "trading-desk";
  readonly boundSourceCommit: string;
  readonly observedTools: readonly ("runtime_status" | "identity_status")[];
  readonly sourcePosture: "read_only_tool_contract_only_no_live_connection";
}

export interface PondObservedAgentRelationshipState {
  readonly membership: "not_established";
  readonly agentAdmission: "not_established";
  readonly scopeBinding: "not_established";
  readonly delegatedAuthority: "not_established";
}

export interface PondObservedAgentPersonalMemoryBoundary {
  readonly deskJournalLaneAdmitted: false;
  readonly deskMemoryLaneAdmitted: false;
  readonly deskNarrativeLaneAdmitted: false;
  readonly deskTranscriptLaneAdmitted: false;
}

export interface PondObservedAgentPresenceRecord {
  readonly agentRef: string;
  readonly label: string;
  readonly profileClass: PondObservedAgentProfileClass;
  readonly presenceStatus: PondObservedAgentPresenceStatus;
  readonly observedAt: string;
  readonly transport: PondObservedTransportProjection;
  readonly runtimeFacts: readonly PondObservedAgentRuntimeFact[];
  readonly identityClaim: PondObservedIdentityClaimProjection;
  readonly relationshipState: PondObservedAgentRelationshipState;
  readonly personalMemoryBoundary: PondObservedAgentPersonalMemoryBoundary;
  readonly authority: "none";
}

export interface PondLocalPrincipalBindingProjection {
  readonly principalRef: string;
  readonly bindingState: PondLocalPrincipalBindingState;
  readonly authenticationPerformed: false;
  readonly ceremonyPosture: "not_defined_this_cut";
}

export interface PondAgentPresenceProjection {
  readonly contractVersion: "pond-agent-presence-projection-d-p0";
  readonly kind: "pond-agent-presence-projection";
  readonly posture: "fixture_observed_presence_projection_authority_none";
  readonly localPrincipalBinding: PondLocalPrincipalBindingProjection;
  readonly observedAgents: readonly PondObservedAgentPresenceRecord[];
  readonly communityRelationshipState: "not_established";
  readonly projectRelationshipState: "not_established";
  readonly personalMemoryBoundary: PondObservedAgentPersonalMemoryBoundary;
  readonly authority: "none";
}

export interface PondObservedAgentSourceContractFixture {
  readonly contractVersion: "pond-agent-presence-source-contract-d-p0";
  readonly kind: "pond-agent-presence-source-contract";
  readonly sourceContract: PondObservedAgentSourceContract;
  readonly authority: "none";
}

// Receiver-owned admission checks. Every check stays unsatisfied until a
// later cut independently observes the fact it names through a Pond-owned
// channel; producer self-attestation never satisfies any of them.
export type PondAgentPresenceAdmissionCheck =
  | "exact_source_contract_identity"
  | "exact_secret_free_runtime_fact_inventory"
  | "receiver_owned_presence_observation_channel"
  | "runtime_facts_separated_from_personal_memory_channels"
  | "identity_claim_evidence_independently_reproduced"
  | "local_principal_binding_established_before_private_reads"
  | "observed_identity_kept_separate_from_principal_id"
  | "live_presence_observation_observed";

export interface PondAgentPresenceAdmissionInput {
  readonly projection: unknown;
  readonly receiverObservation: unknown;
}

export interface PondAgentPresenceAdmissionAssessment {
  readonly contractVersion: "pond-agent-presence-admission-d-p0";
  readonly projectionContractVersion:
    | "pond-agent-presence-projection-d-p0"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_presence_projection";
  readonly admissionState:
    | "insufficient_evidence"
    | "structurally_admissible_fixture";
  readonly reason:
    | "presence_projection_invalid"
    | "admission_observation_invalid"
    | "receiver_proof_incomplete"
    | "all_required_fixture_checks_satisfied";
  readonly satisfiedChecks: readonly PondAgentPresenceAdmissionCheck[];
  readonly unsatisfiedChecks: readonly PondAgentPresenceAdmissionCheck[];
  readonly observedPresenceAcceptedAsAuthentication: false;
  readonly observedIdentityAcceptedAsPrincipalId: false;
  readonly personalMemoryContentAdmitted: false;
  readonly localPrincipalBindingEstablished: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const admissionChecks = Object.freeze([
  "exact_source_contract_identity",
  "exact_secret_free_runtime_fact_inventory",
  "receiver_owned_presence_observation_channel",
  "runtime_facts_separated_from_personal_memory_channels",
  "identity_claim_evidence_independently_reproduced",
  "local_principal_binding_established_before_private_reads",
  "observed_identity_kept_separate_from_principal_id",
  "live_presence_observation_observed",
] as const satisfies readonly PondAgentPresenceAdmissionCheck[]);

// Keys whose presence in a presence record would mean desk personal memory
// (journal / memory / narrative / transcript lanes), an effect channel, a
// credential, or an identity-binding collapse entered Pond as presence data.
export const POND_STAGE_D_P0_FORBIDDEN_PRESENCE_RECORD_KEYS = Object.freeze([
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "execute",
  "canExecute",
  "mayMutate",
  "approve",
  "grant",
  "apiKey",
  "secret",
  "token",
  "PrincipalId",
  "principalId",
] as const);

// Live-connection fields. A presence projection observes; it never dials.
export const POND_STAGE_D_P0_FORBIDDEN_LIVE_CONNECTION_KEYS = Object.freeze([
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

const validIdentityClaimEvidence = (value: unknown) => {
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
    ["chainIdObserved", "registryAddress", "agentId", "ownerObserved", "blockTag"].every(
      (key) => evidence[key] === null || typeof evidence[key] === "string",
    )
  );
};

const validRuntimeFact = (value: unknown): boolean => {
  const fact = record(value);
  return (
    fact !== null &&
    exactKeys(fact, ["factLabel", "sourceTool", "observedValue", "valuePosture"]) &&
    admissionRuntimeFactLabels.includes(String(fact.factLabel)) &&
    fact.sourceTool === "runtime_status" &&
    (fact.observedValue === null || typeof fact.observedValue === "string") &&
    ["transcribed_from_source_contract", "not_observed"].includes(
      String(fact.valuePosture),
    ) &&
    // A transcribed fact must carry a value; a not_observed fact must not.
    (fact.valuePosture === "transcribed_from_source_contract"
      ? typeof fact.observedValue === "string" && fact.observedValue !== ""
      : fact.observedValue === null)
  );
};

const admissionRuntimeFactLabels: readonly string[] = [
  "brain",
  "provider",
  "model",
  "execution",
  "trading_state",
  "hands",
  "doctor_cheap_check",
] as const;

const admissionProfileClasses: readonly string[] = [
  "personal_agent",
  "community_agent",
  "project_agent",
  "specialist_agent",
  "remote_external_agent",
] as const;

const admissionPresenceStatuses: readonly string[] = [
  "not_observed",
  "fixture_observed_not_live",
  "live_observed",
  "unavailable",
  "unknown",
] as const;

const admissionClaimStatuses: readonly string[] = [
  "not_observed",
  "observed_unconfigured",
  "observed_verified",
  "observed_mismatch",
  "observed_unverified",
  "observed_unavailable",
  "observed_refused",
] as const;

const admissionTransports: readonly string[] = [
  "telegram",
  "stdio",
  "mcp",
  "a2a",
  "http",
  "not_observed",
] as const;

const validProjection = (value: unknown): boolean => {
  const projection = record(value);
  if (projection === null) return false;
  if (
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
    ])
  )
    return false;
  if (projection.contractVersion !== "pond-agent-presence-projection-d-p0")
    return false;
  if (projection.kind !== "pond-agent-presence-projection") return false;
  if (
    projection.posture !==
    "fixture_observed_presence_projection_authority_none"
  )
    return false;
  const binding = record(projection.localPrincipalBinding);
  if (
    binding === null ||
    !exactKeys(binding, [
      "principalRef",
      "bindingState",
      "authenticationPerformed",
      "ceremonyPosture",
    ]) ||
    typeof binding.principalRef !== "string" ||
    !binding.principalRef.startsWith("principal:") ||
    !["not_established", "fixture_local_projection"].includes(
      String(binding.bindingState),
    ) ||
    binding.authenticationPerformed !== false ||
    binding.ceremonyPosture !== "not_defined_this_cut"
  )
    return false;
  if (!Array.isArray(projection.observedAgents)) return false;
  for (const entry of projection.observedAgents) {
    const agent = record(entry);
    if (agent === null) return false;
    if (
      !exactKeys(agent, [
        "agentRef",
        "label",
        "profileClass",
        "presenceStatus",
        "observedAt",
        "transport",
        "runtimeFacts",
        "identityClaim",
        "relationshipState",
        "personalMemoryBoundary",
        "authority",
      ])
    )
      return false;
    if (
      typeof agent.agentRef !== "string" ||
      !agent.agentRef.startsWith("agent:") ||
      agent.agentRef.startsWith("principal:")
    )
      return false;
    if (typeof agent.label !== "string" || agent.label === "") return false;
    if (!admissionProfileClasses.includes(String(agent.profileClass)))
      return false;
    if (!admissionPresenceStatuses.includes(String(agent.presenceStatus)))
      return false;
    if (typeof agent.observedAt !== "string" || agent.observedAt === "")
      return false;
    const transport = record(agent.transport);
    if (
      transport === null ||
      !exactKeys(transport, [
        "transport",
        "transportIsAgentIdentity",
        "transportEstablishesAdmission",
        "liveConnectionPosture",
      ]) ||
      !admissionTransports.includes(String(transport.transport)) ||
      transport.transportIsAgentIdentity !== false ||
      transport.transportEstablishesAdmission !== false ||
      transport.liveConnectionPosture !== "not_included"
    )
      return false;
    if (!Array.isArray(agent.runtimeFacts)) return false;
    const labels = new Set<string>();
    for (const entryFact of agent.runtimeFacts) {
      if (!validRuntimeFact(entryFact)) return false;
      const fact = entryFact as unknown as PondObservedAgentRuntimeFact;
      if (labels.has(fact.factLabel)) return false;
      labels.add(fact.factLabel);
    }
    const claim = record(agent.identityClaim);
    if (
      claim === null ||
      !exactKeys(claim, [
        "claimStatus",
        "evidence",
        "evidencePosture",
        "relationshipClaims",
      ]) ||
      !admissionClaimStatuses.includes(String(claim.claimStatus)) ||
      !validIdentityClaimEvidence(claim.evidence) ||
      claim.evidencePosture !== "observed_evidence_only_no_local_authority"
    )
      return false;
    const relationshipClaims = record(claim.relationshipClaims);
    if (
      relationshipClaims === null ||
      !exactKeys(relationshipClaims, [
        "onchainIdentityIsPrincipalIdentity",
        "onchainIdentityEstablishesLocalAdmission",
        "onchainIdentityEstablishesAuthority",
      ]) ||
      relationshipClaims.onchainIdentityIsPrincipalIdentity !== false ||
      relationshipClaims.onchainIdentityEstablishesLocalAdmission !== false ||
      relationshipClaims.onchainIdentityEstablishesAuthority !== false
    )
      return false;
    const relationshipState = record(agent.relationshipState);
    if (
      relationshipState === null ||
      !exactKeys(relationshipState, [
        "membership",
        "agentAdmission",
        "scopeBinding",
        "delegatedAuthority",
      ]) ||
      ["membership", "agentAdmission", "scopeBinding", "delegatedAuthority"].some(
        (key) => relationshipState[key] !== "not_established",
      )
    )
      return false;
    if (!validMemoryBoundary(agent.personalMemoryBoundary)) return false;
    if (agent.authority !== "none") return false;
    // The record's own key inventory is the structural memory boundary: any
    // forbidden key anywhere in the record fails the projection closed.
    if (hasForbiddenKey(agent, POND_STAGE_D_P0_FORBIDDEN_PRESENCE_RECORD_KEYS))
      return false;
  }
  if (
    projection.communityRelationshipState !== "not_established" ||
    projection.projectRelationshipState !== "not_established" ||
    projection.authority !== "none"
  )
    return false;
  if (!validMemoryBoundary(projection.personalMemoryBoundary)) return false;
  return !hasForbiddenKey(projection, POND_STAGE_D_P0_FORBIDDEN_LIVE_CONNECTION_KEYS);
};

const validMemoryBoundary = (value: unknown) => {
  const boundary = record(value);
  return (
    boundary !== null &&
    exactKeys(boundary, [
      "deskJournalLaneAdmitted",
      "deskMemoryLaneAdmitted",
      "deskNarrativeLaneAdmitted",
      "deskTranscriptLaneAdmitted",
    ]) &&
    ["deskJournalLaneAdmitted", "deskMemoryLaneAdmitted", "deskNarrativeLaneAdmitted", "deskTranscriptLaneAdmitted"].every(
      (key) => boundary[key] === false,
    )
  );
};

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

// The receiver observation is the Pond-owned side of the admission. Its
// satisfied fields must be observed by the receiver, never asserted by the
// producer — which is why a supplied "identity_separation" literal is
// refused as a producer-authored claim.
const validReceiverObservation = (value: unknown): boolean => {
  const observation = record(value);
  if (observation === null) return false;
  if (
    !exactKeys(observation, [
      "sourceContractIdentityMatch",
      "runtimeFactInventoryMatch",
      "presenceObservationChannel",
      "runtimeFactChannelSeparation",
      "identityClaimReproduction",
      "principalBindingEstablished",
      "identitySeparationFromPrincipal",
      "liveObservation",
    ])
  )
    return false;
  const literalMembership: readonly (readonly [string, readonly string[]])[] = [
    ["sourceContractIdentityMatch", ["not_observed", "exact_source_contract_match"]],
    ["runtimeFactInventoryMatch", ["not_observed", "exact_seven_fact_inventory_match"]],
    ["presenceObservationChannel", ["not_observed", "receiver_owned_channel_observed"]],
    ["runtimeFactChannelSeparation", ["not_observed", "runtime_facts_channel_separated"]],
    ["identityClaimReproduction", ["not_observed", "evidence_independently_reproduced"]],
    ["principalBindingEstablished", ["not_established", "receiver_authenticated_local_binding"]],
    ["identitySeparationFromPrincipal", ["not_observed", "receiver_verified_identity_separation"]],
    ["liveObservation", ["not_performed", "observed"]],
  ];
  return literalMembership.every(([field, allowed]) =>
    allowed.includes(String(observation[field])),
  );
};

const assessment = (
  reason: PondAgentPresenceAdmissionAssessment["reason"],
  projectionContractVersion: PondAgentPresenceAdmissionAssessment["projectionContractVersion"],
  satisfiedChecks: readonly PondAgentPresenceAdmissionCheck[],
  unsatisfiedChecks: readonly PondAgentPresenceAdmissionCheck[],
): PondAgentPresenceAdmissionAssessment =>
  Object.freeze({
    contractVersion: "pond-agent-presence-admission-d-p0",
    projectionContractVersion,
    assessmentKind: "deterministic_supplied_presence_projection",
    admissionState:
      reason === "all_required_fixture_checks_satisfied"
        ? "structurally_admissible_fixture"
        : "insufficient_evidence",
    reason,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    personalMemoryContentAdmitted: false,
    localPrincipalBindingEstablished: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondAgentPresenceAdmission(
  input: PondAgentPresenceAdmissionInput,
): PondAgentPresenceAdmissionAssessment {
  if (!validProjection(input.projection))
    return assessment("presence_projection_invalid", "invalid", [], admissionChecks);
  const observation = validReceiverObservation(input.receiverObservation)
    ? (input.receiverObservation as {
        readonly sourceContractIdentityMatch: string;
        readonly runtimeFactInventoryMatch: string;
        readonly presenceObservationChannel: string;
        readonly runtimeFactChannelSeparation: string;
        readonly identityClaimReproduction: string;
        readonly principalBindingEstablished: string;
        readonly identitySeparationFromPrincipal: string;
        readonly liveObservation: string;
      })
    : null;
  if (observation === null)
    return assessment(
      "admission_observation_invalid",
      "pond-agent-presence-projection-d-p0",
      [],
      admissionChecks,
    );

  const values = [
    observation.sourceContractIdentityMatch === "exact_source_contract_match",
    observation.runtimeFactInventoryMatch === "exact_seven_fact_inventory_match",
    observation.presenceObservationChannel === "receiver_owned_channel_observed",
    observation.runtimeFactChannelSeparation === "runtime_facts_channel_separated",
    observation.identityClaimReproduction === "evidence_independently_reproduced",
    observation.principalBindingEstablished === "receiver_authenticated_local_binding",
    observation.identitySeparationFromPrincipal === "receiver_verified_identity_separation",
    observation.liveObservation === "observed",
  ];
  const satisfied = admissionChecks.filter((_, index) => values[index]);
  const unsatisfied = admissionChecks.filter((_, index) => !values[index]);
  return assessment(
    unsatisfied.length === 0
      ? "all_required_fixture_checks_satisfied"
      : "receiver_proof_incomplete",
    "pond-agent-presence-projection-d-p0",
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. Canonical identity laws 1-8
// (agent-identity-and-specialist-admission-contract.md) are pinned at the
// type level: observed identity is not principal identity, transport is not
// agent identity, onchain evidence is not local authority, and the refused
// tuple holds on every assessment outcome.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasKey<T, K extends PropertyKey> = K extends keyof T ? true : false;

export type PondStageDP0Invariant_LocalPrincipalBindingStatesExact = Assert<
  Equal<PondLocalPrincipalBindingState, "not_established" | "fixture_local_projection">
>;
export type PondStageDP0Invariant_ProfileClassesExact = Assert<
  Equal<
    PondObservedAgentProfileClass,
    "personal_agent" | "community_agent" | "project_agent" | "specialist_agent" | "remote_external_agent"
  >
>;
export type PondStageDP0Invariant_PresenceStatusesExact = Assert<
  Equal<
    PondObservedAgentPresenceStatus,
    "not_observed" | "fixture_observed_not_live" | "live_observed" | "unavailable" | "unknown"
  >
>;
export type PondStageDP0Invariant_IdentityClaimStatusesExact = Assert<
  Equal<
    PondObservedIdentityClaimStatus,
    "not_observed" | "observed_unconfigured" | "observed_verified" | "observed_mismatch" | "observed_unverified" | "observed_unavailable" | "observed_refused"
  >
>;
export type PondStageDP0Invariant_AdmissionChecksExact = Assert<
  Equal<
    PondAgentPresenceAdmissionCheck,
    "exact_source_contract_identity" | "exact_secret_free_runtime_fact_inventory" | "receiver_owned_presence_observation_channel" | "runtime_facts_separated_from_personal_memory_channels" | "identity_claim_evidence_independently_reproduced" | "local_principal_binding_established_before_private_reads" | "observed_identity_kept_separate_from_principal_id" | "live_presence_observation_observed"
  >
>;
export type PondStageDP0Invariant_OnchainIdentityIsNotPrincipalIdentity = Assert<
  Equal<
    PondObservedIdentityClaimProjection["relationshipClaims"]["onchainIdentityIsPrincipalIdentity"],
    false
  >
>;
export type PondStageDP0Invariant_TransportIsNotAgentIdentity = Assert<
  Equal<PondObservedTransportProjection["transportIsAgentIdentity"], false>
>;
export type PondStageDP0Invariant_TransportEstablishesNoAdmission = Assert<
  Equal<PondObservedTransportProjection["transportEstablishesAdmission"], false>
>;
export type PondStageDP0Invariant_AuthenticationNotPerformed = Assert<
  Equal<PondLocalPrincipalBindingProjection["authenticationPerformed"], false>
>;
export type PondStageDP0Invariant_PresenceNotAuthentication = Assert<
  Equal<PondAgentPresenceAdmissionAssessment["observedPresenceAcceptedAsAuthentication"], false>
>;
export type PondStageDP0Invariant_ObservedIdentityNotPrincipalId = Assert<
  Equal<PondAgentPresenceAdmissionAssessment["observedIdentityAcceptedAsPrincipalId"], false>
>;
export type PondStageDP0Invariant_NoPersonalMemoryAdmitted = Assert<
  Equal<PondAgentPresenceAdmissionAssessment["personalMemoryContentAdmitted"], false>
>;
export type PondStageDP0Invariant_NoJournalLaneField = Assert<
  Equal<HasKey<PondObservedAgentPresenceRecord, "journal">, false>
>;
export type PondStageDP0Invariant_NoMemoryLaneField = Assert<
  Equal<HasKey<PondObservedAgentPresenceRecord, "memory">, false>
>;
export type PondStageDP0Invariant_NoNarrativeLaneField = Assert<
  Equal<HasKey<PondObservedAgentPresenceRecord, "narrative">, false>
>;
export type PondStageDP0Invariant_NoTranscriptLaneField = Assert<
  Equal<HasKey<PondObservedAgentPresenceRecord, "transcript">, false>
>;
export type PondStageDP0Invariant_NoExecuteField = Assert<
  Equal<HasKey<PondObservedAgentPresenceRecord, "execute">, false>
>;
export type PondStageDP0Invariant_NoPrincipalIdField = Assert<
  Equal<HasKey<PondObservedAgentPresenceRecord, "principalId">, false>
>;
export type PondStageDP0Invariant_NoLiveConnectionFields = Assert<
  Equal<HasKey<PondAgentPresenceProjection, "connect">, false>
>;
export type PondStageDP0Invariant_NoPollField = Assert<
  Equal<HasKey<PondAgentPresenceProjection, "poll">, false>
>;
// "Observed identity is not a PrincipalId" at the type level: the two
// branded refs are mutually non-assignable despite both being strings.
type RefsMutuallyNonAssignable<A, B> =
  A extends B ? false : B extends A ? false : true;
export type PondStageDP0Invariant_AgentRefNotPrincipalRef = Assert<
  RefsMutuallyNonAssignable<PondAgentRef, PondPrincipalRef>
>;
export type PondStageDP0Invariant_FixturePresenceNeverBecomesIdentityProof =
  Assert<
    Equal<
      [
        PondAgentPresenceAdmissionAssessment["observedPresenceAcceptedAsAuthentication"],
        PondAgentPresenceAdmissionAssessment["observedIdentityAcceptedAsPrincipalId"],
        PondAgentPresenceAdmissionAssessment["personalMemoryContentAdmitted"],
        PondAgentPresenceAdmissionAssessment["localPrincipalBindingEstablished"],
        PondAgentPresenceAdmissionAssessment["currentTruthAdmitted"],
        PondAgentPresenceAdmissionAssessment["runtimeActivationPosture"],
        PondAgentPresenceAdmissionAssessment["authority"],
      ],
      [false, false, false, false, false, "not_included", "none"]
    >
  >;