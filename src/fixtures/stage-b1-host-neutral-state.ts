// Stage B1 deterministic host-neutral static-state fixtures.

import type {
  PondAgentRef,
  PondPrincipalRef,
} from "../contracts/pond-front-agent.js";
import type {
  PondCommandIntent,
  PondCommandIntentRef,
  PondEvent,
  PondEventRef,
  PondHostNeutralPresentationPosture,
  PondSnapshot,
  PondSnapshotRef,
} from "../contracts/pond-host-neutral-state.js";
import type {
  PondProjectionEnvelope,
  PondProjectionSourceRef,
  PondProjectionSubjectRef,
  PondScopeRef,
} from "../contracts/pond-projection-envelope.js";

const principalRef = (value: string) => value as PondPrincipalRef;
const agentRef = (value: string) => value as PondAgentRef;
const scopeRef = (value: string) => value as PondScopeRef;
const snapshotRef = (value: string) => value as PondSnapshotRef;
const eventRef = (value: string) => value as PondEventRef;
const commandIntentRef = (value: string) => value as PondCommandIntentRef;
const projectionSourceRef = (value: string) => value as PondProjectionSourceRef;
const projectionSubjectRef = (value: string) => value as PondProjectionSubjectRef;

const principalA = principalRef("fixture:principal-a");
const projectX = scopeRef("fixture:scope-project-x");
const specialistAgent = agentRef("fixture:agent-specialist-a");
const sourceRef = projectionSourceRef("fixture:stage-b1-source");

const noEvidence = [] as const;

const freshEnvelope = <
  const TSubjectRef extends PondProjectionSubjectRef,
  const TRevision extends string,
  const TDigest extends string,
>(
  subjectRef: TSubjectRef,
  revision: TRevision,
  digest: TDigest,
) => {
  const envelope = {
    contractVersion: "pond-projection-envelope-a4",
    authority: "none",
    sourceClass: "fixture",
    sourceRef,
    projectionMechanism: "fixture",
    trustPosture: "non_authoritative_fixture",
    sourceScopeRef: projectX,
    audiencePosture: "not_established",
    disclosurePosture: "fixture_only_no_release_established",
    subject: {
      subjectRef,
      subjectRevision: revision,
      subjectDigest: digest,
      digestPosture: "fixture_identity_value_not_runtime_proof",
      bindingComparison: "not_performed_fixture_only",
    },
    observation: {
      state: "fresh",
      observedAt: "2026-01-15T12:00:00.000Z",
      freshUntil: "2026-01-15T12:05:00.000Z",
      freshnessBasis: "fixture_declared_interval",
    },
    applicability: "applicable",
    evidenceReferences: noEvidence,
    redactionPosture: "none",
    canonicalOutcome: null,
  } as const;

  return envelope satisfies PondProjectionEnvelope;
};

const presentation = {
  hostBinding: "none_host_neutral",
  sourceScopePosture: "preserved_from_projection",
  audienceChangePosture: "not_performed",
  crossScopeReleasePosture: "not_performed",
  authority: "none",
} as const satisfies PondHostNeutralPresentationPosture;

export const stageB1Snapshot = {
  contractVersion: "pond-host-neutral-state-b1",
  kind: "snapshot",
  snapshotRef: snapshotRef("fixture:snapshot-b1-001"),
  activeContext: {
    principalRef: principalA,
    scopeRef: projectX,
    scopeKind: "project",
    agentRef: specialistAgent,
    posture: "fixture_active_context_reference_only",
    authority: "none",
  },
  presentation,
  projection: freshEnvelope(
    projectionSubjectRef("fixture:subject-b1-snapshot"),
    "fixture-b1-snapshot-r1",
    "fixture-digest:b1-snapshot-r1",
  ),
  gates: {
    liveTools: false,
    network: false,
    persistence: false,
    delivery: false,
    approvalRecording: false,
    execution: false,
  },
  authority: "none",
} as const satisfies PondSnapshot;

export const stageB1Events = [
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "event",
    eventRef: eventRef("fixture:event-b1-snapshot-presented"),
    snapshotRef: stageB1Snapshot.snapshotRef,
    eventClass: "fixture_snapshot_presented",
    scopeRef: projectX,
    agentRef: specialistAgent,
    posture: "fixture_presentation_event_not_runtime_event",
    presentation,
    projection: freshEnvelope(
      projectionSubjectRef("fixture:subject-b1-event-snapshot"),
      "fixture-b1-event-snapshot-r1",
      "fixture-digest:b1-event-snapshot-r1",
    ),
    authority: "none",
  },
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "event",
    eventRef: eventRef("fixture:event-b1-scope-presented"),
    snapshotRef: stageB1Snapshot.snapshotRef,
    eventClass: "fixture_scope_context_presented",
    scopeRef: projectX,
    agentRef: specialistAgent,
    posture: "fixture_presentation_event_not_runtime_event",
    presentation,
    projection: freshEnvelope(
      projectionSubjectRef("fixture:subject-b1-event-scope"),
      "fixture-b1-event-scope-r1",
      "fixture-digest:b1-event-scope-r1",
    ),
    authority: "none",
  },
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "event",
    eventRef: eventRef("fixture:event-b1-agent-presented"),
    snapshotRef: stageB1Snapshot.snapshotRef,
    eventClass: "fixture_agent_identity_presented",
    scopeRef: projectX,
    agentRef: specialistAgent,
    posture: "fixture_presentation_event_not_runtime_event",
    presentation,
    projection: freshEnvelope(
      projectionSubjectRef("fixture:subject-b1-event-agent"),
      "fixture-b1-event-agent-r1",
      "fixture-digest:b1-event-agent-r1",
    ),
    authority: "none",
  },
] as const satisfies readonly PondEvent[];

export const stageB1CommandIntents = [
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "command_intent",
    commandIntentRef: commandIntentRef("fixture:intent-b1-navigate-home"),
    sourceSnapshotRef: stageB1Snapshot.snapshotRef,
    principalRef: principalA,
    sourceScopeRef: projectX,
    intentClass: "navigate",
    target: {
      kind: "view",
      viewRef: "pond.home",
    },
    posture: "ui_intent_only_not_command_dispatch",
    dispatchPosture: "not_performed",
    deliveryPosture: "not_performed",
    approvalRecordingPosture: "not_performed",
    executionPosture: "not_performed",
    authority: "none",
  },
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "command_intent",
    commandIntentRef: commandIntentRef("fixture:intent-b1-select-scope"),
    sourceSnapshotRef: stageB1Snapshot.snapshotRef,
    principalRef: principalA,
    sourceScopeRef: projectX,
    intentClass: "select_scope",
    target: {
      kind: "scope",
      scopeRef: projectX,
    },
    posture: "ui_intent_only_not_command_dispatch",
    dispatchPosture: "not_performed",
    deliveryPosture: "not_performed",
    approvalRecordingPosture: "not_performed",
    executionPosture: "not_performed",
    authority: "none",
  },
  {
    contractVersion: "pond-host-neutral-state-b1",
    kind: "command_intent",
    commandIntentRef: commandIntentRef("fixture:intent-b1-select-agent"),
    sourceSnapshotRef: stageB1Snapshot.snapshotRef,
    principalRef: principalA,
    sourceScopeRef: projectX,
    intentClass: "select_agent",
    target: {
      kind: "agent",
      agentRef: specialistAgent,
    },
    posture: "ui_intent_only_not_command_dispatch",
    dispatchPosture: "not_performed",
    deliveryPosture: "not_performed",
    approvalRecordingPosture: "not_performed",
    executionPosture: "not_performed",
    authority: "none",
  },
] as const satisfies readonly PondCommandIntent[];

export const stageB1HostNeutralStaticBundle = {
  snapshot: stageB1Snapshot,
  events: stageB1Events,
  commandIntents: stageB1CommandIntents,
  posture: "fixture_static_host_neutral_bundle_not_runtime_state",
  authority: "none",
} as const;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageB1FixtureInvariant_SnapshotScopeProjectX = Assert<
  Equal<typeof stageB1Snapshot.activeContext.scopeRef, typeof projectX>
>;
export type PondStageB1FixtureInvariant_SnapshotAgentExact = Assert<
  Equal<typeof stageB1Snapshot.activeContext.agentRef, typeof specialistAgent>
>;
export type PondStageB1FixtureInvariant_HostBindingNone = Assert<
  Equal<typeof stageB1Snapshot.presentation.hostBinding, "none_host_neutral">
>;
export type PondStageB1FixtureInvariant_NoReleaseByPresentation = Assert<
  Equal<
    typeof stageB1Snapshot.presentation.crossScopeReleasePosture,
    "not_performed"
  >
>;
export type PondStageB1FixtureInvariant_EventCountThree = Assert<
  Equal<typeof stageB1Events["length"], 3>
>;
export type PondStageB1FixtureInvariant_CommandIntentCountThree = Assert<
  Equal<typeof stageB1CommandIntents["length"], 3>
>;
export type PondStageB1FixtureInvariant_EventClassesExact = Assert<
  Equal<
    typeof stageB1Events[number]["eventClass"],
    | "fixture_snapshot_presented"
    | "fixture_scope_context_presented"
    | "fixture_agent_identity_presented"
  >
>;
export type PondStageB1FixtureInvariant_IntentClassesExact = Assert<
  Equal<
    typeof stageB1CommandIntents[number]["intentClass"],
    "navigate" | "select_scope" | "select_agent"
  >
>;
export type PondStageB1FixtureInvariant_AllEventsAuthorityNone = Assert<
  Equal<typeof stageB1Events[number]["authority"], "none">
>;
export type PondStageB1FixtureInvariant_AllIntentsAuthorityNone = Assert<
  Equal<typeof stageB1CommandIntents[number]["authority"], "none">
>;
export type PondStageB1FixtureInvariant_AllIntentsNoDispatch = Assert<
  Equal<typeof stageB1CommandIntents[number]["dispatchPosture"], "not_performed">
>;
export type PondStageB1FixtureInvariant_AllIntentsNoExecution = Assert<
  Equal<typeof stageB1CommandIntents[number]["executionPosture"], "not_performed">
>;
export type PondStageB1FixtureInvariant_StaticGatesFalse = Assert<
  Equal<
    typeof stageB1Snapshot.gates[keyof typeof stageB1Snapshot.gates],
    false
  >
>;
export type PondStageB1FixtureInvariant_BundleAuthorityNone = Assert<
  Equal<typeof stageB1HostNeutralStaticBundle.authority, "none">
>;
