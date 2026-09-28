// Stage D-P3 fixture: the trusted-channel establishment ceremony matrix.
// Two arms — a structurally complete ceremony (all seven receiver-owned
// checks satisfied, yet still a fixture: no live channel, no observation)
// and an incomplete one (channel kind and process ownership unproven).
// Zero value imports: every import is type-only, so the selftest imports
// this file directly under node type-stripping. `satisfies` typing keeps
// arm-level literals sharp so the fixture invariants can pin the
// complete-yet-refused pairing.

import type {
  PondAgentPresenceChannelEstablishmentAssessment,
  PondAgentPresenceChannelEstablishmentRecord,
} from "../contracts/pond-agent-presence-channel-establishment.js";

export interface PondStageDP3ChannelEstablishmentFixtureEntry {
  readonly fixtureLabel: string;
  readonly establishmentRecord: PondAgentPresenceChannelEstablishmentRecord;
  readonly assessment: PondAgentPresenceChannelEstablishmentAssessment;
}

// The desk's committed source-contract SHA, carried from the D-P1 binding:
// a claim the receiver binds the channel to, never a moving main.
const deskCommit = "57b5c8b966d3eb58cf239b2f3f1598f09f24b296";

const ceremonyRecord = (
  channelKind: PondAgentPresenceChannelEstablishmentRecord["channelKind"],
  processOwnership: PondAgentPresenceChannelEstablishmentRecord["ownershipProof"]["processOwnership"],
  parentRuntime: PondAgentPresenceChannelEstablishmentRecord["ownershipProof"]["parentRuntime"],
  precedencePosture: PondAgentPresenceChannelEstablishmentRecord["precedencePosture"],
) =>
  Object.freeze({
    contractVersion: "pond-agent-presence-channel-establishment-d-p3",
    kind: "pond-agent-presence-channel-establishment",
    channelKind,
    ownershipProof: Object.freeze({ processOwnership, parentRuntime }),
    establishesSemanticClasses: Object.freeze([
      "observed_agent_presence",
    ] as const),
    forbiddenSemanticCrossings: Object.freeze({
      trustedRuntimeConfiguration: "forbidden",
      canonicalMemory: "forbidden",
      authorityDecisions: "forbidden",
      operatorInput: "forbidden",
    }),
    channelAuthorityStatement:
      "channel_authoritative_for_presence_semantic_class_only",
    precedencePosture,
    sourceContractCommit: deskCommit,
    secretFreeChannelInventoryPosture:
      "inventory_secret_free_not_observed_by_receiver",
    authority: "none",
  }) satisfies PondAgentPresenceChannelEstablishmentRecord;

const satisfiedChecks = Object.freeze([
  "exact_channel_kind_receiver_owned",
  "process_ownership_observed_exact_direct_child",
  "channel_authoritative_only_for_presence_semantic_class",
  "channel_cannot_write_trusted_configuration",
  "secret_free_channel_inventory",
  "source_contract_commit_binding_carried",
  "no_conflicting_upstream_channel_precedence",
] as const);

const incompleteSatisfiedChecks = Object.freeze([
  "channel_authoritative_only_for_presence_semantic_class",
  "channel_cannot_write_trusted_configuration",
  "secret_free_channel_inventory",
  "source_contract_commit_binding_carried",
  "no_conflicting_upstream_channel_precedence",
] as const);

const incompleteUnsatisfiedChecks = Object.freeze([
  "exact_channel_kind_receiver_owned",
  "process_ownership_observed_exact_direct_child",
] as const);

// Complete arm: a structurally complete ceremony — every receiver-owned
// check satisfied — that still never becomes a live channel or authority.
export const stageDP3ChannelEstablishmentComplete = Object.freeze({
  fixtureLabel: "complete_ceremony",
  establishmentRecord: ceremonyRecord(
    "stdio_direct_child_process",
    "exact_direct_child",
    "pond_desktop_shell",
    "receiver_authoritative_no_conflicting_upstream_configuration_observed",
  ),
  assessment: Object.freeze({
    contractVersion: "pond-agent-presence-channel-establishment-d-p3",
    establishmentRecordVersion: "pond-agent-presence-channel-establishment-d-p3",
    assessmentKind: "deterministic_supplied_channel_establishment",
    channelEstablishmentState: "fixture_established_receiver_owned_channel",
    reason: "all_ceremony_checks_satisfied",
    trustedChannelPosture: "fixture_structural_only_no_live_channel",
    satisfiedChecks,
    unsatisfiedChecks: Object.freeze([] as const),
    liveObservationPerformed: false,
    observedPresenceAcceptedAsAuthentication: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondAgentPresenceChannelEstablishmentAssessment,
}) satisfies PondStageDP3ChannelEstablishmentFixtureEntry;

// Incomplete arm: channel kind not established and process ownership not
// observed — the receiver proof is incomplete even though the structural
// semantic-class, crossing, inventory, commit, and precedence fields hold.
export const stageDP3ChannelEstablishmentIncomplete = Object.freeze({
  fixtureLabel: "incomplete_ceremony",
  establishmentRecord: ceremonyRecord(
    "not_established",
    "not_observed",
    "not_observed",
    "receiver_authoritative_no_conflicting_upstream_configuration_observed",
  ),
  assessment: Object.freeze({
    contractVersion: "pond-agent-presence-channel-establishment-d-p3",
    establishmentRecordVersion: "pond-agent-presence-channel-establishment-d-p3",
    assessmentKind: "deterministic_supplied_channel_establishment",
    channelEstablishmentState: "not_established",
    reason: "receiver_channel_proof_incomplete",
    trustedChannelPosture: "not_established",
    satisfiedChecks: incompleteSatisfiedChecks,
    unsatisfiedChecks: incompleteUnsatisfiedChecks,
    liveObservationPerformed: false,
    observedPresenceAcceptedAsAuthentication: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondAgentPresenceChannelEstablishmentAssessment,
}) satisfies PondStageDP3ChannelEstablishmentFixtureEntry;

export const stageDP3ChannelEstablishmentMatrix: readonly PondStageDP3ChannelEstablishmentFixtureEntry[] =
  Object.freeze([
    stageDP3ChannelEstablishmentComplete,
    stageDP3ChannelEstablishmentIncomplete,
  ]);

// Compile-time fixture invariants: the complete ceremony is all-satisfied
// yet structurally only; the incomplete arm stays not_established.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP3FixtureInvariant_CompleteArmAllSatisfiedYetFixtureOnly =
  Assert<
    Equal<
      [
        typeof stageDP3ChannelEstablishmentComplete["assessment"]["trustedChannelPosture"],
        typeof stageDP3ChannelEstablishmentComplete["assessment"]["liveObservationPerformed"],
        typeof stageDP3ChannelEstablishmentComplete["assessment"]["authority"],
      ],
      ["fixture_structural_only_no_live_channel", false, "none"]
    >
  >;
export type PondStageDP3FixtureInvariant_IncompleteArmNotEstablished = Assert<
  Equal<
    typeof stageDP3ChannelEstablishmentIncomplete["assessment"]["channelEstablishmentState"],
    "not_established"
  >
>;
export type PondStageDP3FixtureInvariant_ForbiddenCrossingsLiteral = Assert<
  Equal<
    typeof stageDP3ChannelEstablishmentComplete["establishmentRecord"]["forbiddenSemanticCrossings"]["canonicalMemory"],
    "forbidden"
  >
>;