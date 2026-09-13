// Stage B4-P1 cross-host conformance projection contract.
//
// Host direction labels organize fixture proof only. They do not identify a
// live adapter, host session, transport, authenticated principal, or authority.

import type {
  PondCommandIntent,
  PondEvent,
  PondSnapshot,
} from "./pond-host-neutral-state.js";

export type PondHostDirection =
  | "chatgpt_app"
  | "loopback_web"
  | "tauri_desktop";

export interface PondCrossHostConformanceFixture {
  readonly contractVersion: "pond-cross-host-conformance-b4-p1";
  readonly hostDirection: PondHostDirection;
  readonly hostDirectionPosture: "fixture_label_only_not_runtime_host_binding";
  readonly snapshot: PondSnapshot;
  readonly events: readonly PondEvent[];
  readonly commandIntents: readonly PondCommandIntent[];
  readonly semanticPosture: "exact_b1_fixture_reuse_without_host_override";
  readonly runtimeAdapterPosture: "not_included";
  readonly authority: "none";
}

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends PropertyKey> = Extract<keyof T, K> extends never
  ? false
  : true;

export type PondStageB4P1Invariant_HostDirectionsExact = Assert<
  Equal<PondHostDirection, "chatgpt_app" | "loopback_web" | "tauri_desktop">
>;
export type PondStageB4P1Invariant_HostLabelsNotBindings = Assert<
  Equal<
    PondCrossHostConformanceFixture["hostDirectionPosture"],
    "fixture_label_only_not_runtime_host_binding"
  >
>;
export type PondStageB4P1Invariant_RuntimeAdaptersNotIncluded = Assert<
  Equal<PondCrossHostConformanceFixture["runtimeAdapterPosture"], "not_included">
>;
export type PondStageB4P1Invariant_AuthorityNone = Assert<
  Equal<PondCrossHostConformanceFixture["authority"], "none">
>;

type ForbiddenCrossHostFixtureKeys =
  | "adapter"
  | "connect"
  | "connection"
  | "endpoint"
  | "transport"
  | "listener"
  | "serve"
  | "network"
  | "authenticate"
  | "authentication"
  | "principalBinding"
  | "membership"
  | "admission"
  | "release"
  | "grant"
  | "grantRef"
  | "approve"
  | "approval"
  | "execute"
  | "execution"
  | "invoke"
  | "dispatch"
  | "deliver"
  | "route"
  | "mutate"
  | "authorize"
  | "authorized"
  | "isAuthorized"
  | "effectiveAuthority"
  | "credential"
  | "secret"
  | "token"
  | "session";

export type PondStageB4P1Invariant_NoAdapterEffectOrAuthorityFields = Assert<
  Equal<
    HasAnyKey<PondCrossHostConformanceFixture, ForbiddenCrossHostFixtureKeys>,
    false
  >
>;
