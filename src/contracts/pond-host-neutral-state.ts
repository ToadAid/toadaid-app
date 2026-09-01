// Stage B1 host-neutral static Pond state contract.
//
// These are fixture presentation contracts only. Snapshot, Event, and
// CommandIntent do not create canonical truth, release, delivery, or authority.

import type {
  PondAgentRef,
  PondPrincipalRef,
  PondScopeKind,
} from "./pond-front-agent.js";
import type {
  PondProjectionEnvelope,
  PondScopeRef,
} from "./pond-projection-envelope.js";

declare const snapshotRefBrand: unique symbol;
declare const eventRefBrand: unique symbol;
declare const commandIntentRefBrand: unique symbol;

export type PondSnapshotRef = string & {
  readonly [snapshotRefBrand]: "PondSnapshotRef";
};
export type PondEventRef = string & {
  readonly [eventRefBrand]: "PondEventRef";
};
export type PondCommandIntentRef = string & {
  readonly [commandIntentRefBrand]: "PondCommandIntentRef";
};

export type PondStaticViewRef = "pond.home" | "pond.scope" | "pond.agent";

export interface PondHostNeutralPresentationPosture {
  readonly hostBinding: "none_host_neutral";
  readonly sourceScopePosture: "preserved_from_projection";
  readonly audienceChangePosture: "not_performed";
  readonly crossScopeReleasePosture: "not_performed";
  readonly authority: "none";
}

export interface PondStageB1ActiveContextProjection {
  readonly principalRef: PondPrincipalRef;
  readonly scopeRef: PondScopeRef;
  readonly scopeKind: PondScopeKind;
  readonly agentRef: PondAgentRef | null;
  readonly posture: "fixture_active_context_reference_only";
  readonly authority: "none";
}

export interface PondStageB1StaticGates {
  readonly liveTools: false;
  readonly network: false;
  readonly persistence: false;
  readonly delivery: false;
  readonly approvalRecording: false;
  readonly execution: false;
}

export interface PondSnapshot {
  readonly contractVersion: "pond-host-neutral-state-b1";
  readonly kind: "snapshot";
  readonly snapshotRef: PondSnapshotRef;
  readonly activeContext: PondStageB1ActiveContextProjection;
  readonly presentation: PondHostNeutralPresentationPosture;
  readonly projection: PondProjectionEnvelope;
  readonly gates: PondStageB1StaticGates;
  readonly authority: "none";
}

export type PondEventClass =
  | "fixture_snapshot_presented"
  | "fixture_scope_context_presented"
  | "fixture_agent_identity_presented";

export interface PondEvent {
  readonly contractVersion: "pond-host-neutral-state-b1";
  readonly kind: "event";
  readonly eventRef: PondEventRef;
  readonly snapshotRef: PondSnapshotRef;
  readonly eventClass: PondEventClass;
  readonly scopeRef: PondScopeRef;
  readonly agentRef: PondAgentRef | null;
  readonly posture: "fixture_presentation_event_not_runtime_event";
  readonly presentation: PondHostNeutralPresentationPosture;
  readonly projection: PondProjectionEnvelope;
  readonly authority: "none";
}

export type PondCommandIntentClass =
  | "navigate"
  | "select_scope"
  | "select_agent";

export type PondCommandIntentTarget =
  | {
      readonly kind: "view";
      readonly viewRef: PondStaticViewRef;
    }
  | {
      readonly kind: "scope";
      readonly scopeRef: PondScopeRef;
    }
  | {
      readonly kind: "agent";
      readonly agentRef: PondAgentRef;
    };

export interface PondCommandIntent {
  readonly contractVersion: "pond-host-neutral-state-b1";
  readonly kind: "command_intent";
  readonly commandIntentRef: PondCommandIntentRef;
  readonly sourceSnapshotRef: PondSnapshotRef;
  readonly principalRef: PondPrincipalRef;
  readonly sourceScopeRef: PondScopeRef;
  readonly intentClass: PondCommandIntentClass;
  readonly target: PondCommandIntentTarget;
  readonly posture: "ui_intent_only_not_command_dispatch";
  readonly dispatchPosture: "not_performed";
  readonly deliveryPosture: "not_performed";
  readonly approvalRecordingPosture: "not_performed";
  readonly executionPosture: "not_performed";
  readonly authority: "none";
}

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasKey<T, K extends PropertyKey> = K extends keyof T ? true : false;

type ForbiddenEffectKey =
  | "execute"
  | "canExecute"
  | "mayExecute"
  | "approve"
  | "canApprove"
  | "mayApprove"
  | "authorize"
  | "authorized"
  | "isAuthorized"
  | "grant"
  | "grantRef"
  | "release"
  | "route"
  | "send"
  | "dispatch"
  | "invoke"
  | "mutate"
  | "wallet"
  | "signer"
  | "secret"
  | "credential";

export type PondStageB1Invariant_SnapshotAuthorityNone = Assert<
  Equal<PondSnapshot["authority"], "none">
>;
export type PondStageB1Invariant_EventAuthorityNone = Assert<
  Equal<PondEvent["authority"], "none">
>;
export type PondStageB1Invariant_CommandIntentAuthorityNone = Assert<
  Equal<PondCommandIntent["authority"], "none">
>;
export type PondStageB1Invariant_HostBindingNone = Assert<
  Equal<PondHostNeutralPresentationPosture["hostBinding"], "none_host_neutral">
>;
export type PondStageB1Invariant_SourceScopePreserved = Assert<
  Equal<
    PondHostNeutralPresentationPosture["sourceScopePosture"],
    "preserved_from_projection"
  >
>;
export type PondStageB1Invariant_NoReleaseByPresentation = Assert<
  Equal<
    PondHostNeutralPresentationPosture["crossScopeReleasePosture"],
    "not_performed"
  >
>;
export type PondStageB1Invariant_AllStaticGatesFalse = Assert<
  Equal<PondStageB1StaticGates[keyof PondStageB1StaticGates], false>
>;
export type PondStageB1Invariant_CommandIntentDoesNotDispatch = Assert<
  Equal<PondCommandIntent["dispatchPosture"], "not_performed">
>;
export type PondStageB1Invariant_CommandIntentDoesNotExecute = Assert<
  Equal<PondCommandIntent["executionPosture"], "not_performed">
>;
export type PondStageB1Invariant_NoEffectAuthorityOrTransportFields = Assert<
  Equal<HasKey<PondCommandIntent, ForbiddenEffectKey>, false>
>;
