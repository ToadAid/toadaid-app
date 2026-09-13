import type { PondCrossHostConformanceFixture } from "../contracts/pond-cross-host-conformance.js";
import {
  stageB1CommandIntents,
  stageB1Events,
  stageB1Snapshot,
} from "./stage-b1-host-neutral-state.js";

const conformanceBase = {
  contractVersion: "pond-cross-host-conformance-b4-p1",
  hostDirectionPosture: "fixture_label_only_not_runtime_host_binding",
  snapshot: stageB1Snapshot,
  events: stageB1Events,
  commandIntents: stageB1CommandIntents,
  semanticPosture: "exact_b1_fixture_reuse_without_host_override",
  runtimeAdapterPosture: "not_included",
  authority: "none",
} as const;

export const stageB4P1ChatGptAppConformance = {
  ...conformanceBase,
  hostDirection: "chatgpt_app",
} as const satisfies PondCrossHostConformanceFixture;

export const stageB4P1LoopbackWebConformance = {
  ...conformanceBase,
  hostDirection: "loopback_web",
} as const satisfies PondCrossHostConformanceFixture;

export const stageB4P1TauriDesktopConformance = {
  ...conformanceBase,
  hostDirection: "tauri_desktop",
} as const satisfies PondCrossHostConformanceFixture;

export const stageB4P1CrossHostConformanceMatrix = [
  stageB4P1ChatGptAppConformance,
  stageB4P1LoopbackWebConformance,
  stageB4P1TauriDesktopConformance,
] as const satisfies readonly [
  PondCrossHostConformanceFixture,
  PondCrossHostConformanceFixture,
  PondCrossHostConformanceFixture,
];

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageB4P1FixtureInvariant_ThreeHostDirectionsExact = Assert<
  Equal<
    [
      typeof stageB4P1CrossHostConformanceMatrix[0]["hostDirection"],
      typeof stageB4P1CrossHostConformanceMatrix[1]["hostDirection"],
      typeof stageB4P1CrossHostConformanceMatrix[2]["hostDirection"],
    ],
    ["chatgpt_app", "loopback_web", "tauri_desktop"]
  >
>;
export type PondStageB4P1FixtureInvariant_ExactSnapshotReuse = Assert<
  Equal<
    typeof stageB4P1CrossHostConformanceMatrix[number]["snapshot"],
    typeof stageB1Snapshot
  >
>;
export type PondStageB4P1FixtureInvariant_ExactEventTupleReuse = Assert<
  Equal<
    typeof stageB4P1CrossHostConformanceMatrix[number]["events"],
    typeof stageB1Events
  >
>;
export type PondStageB4P1FixtureInvariant_ExactCommandIntentTupleReuse = Assert<
  Equal<
    typeof stageB4P1CrossHostConformanceMatrix[number]["commandIntents"],
    typeof stageB1CommandIntents
  >
>;
export type PondStageB4P1FixtureInvariant_PosturesExact = Assert<
  Equal<
    [
      typeof stageB4P1CrossHostConformanceMatrix[number]["hostDirectionPosture"],
      typeof stageB4P1CrossHostConformanceMatrix[number]["semanticPosture"],
      typeof stageB4P1CrossHostConformanceMatrix[number]["runtimeAdapterPosture"],
      typeof stageB4P1CrossHostConformanceMatrix[number]["authority"],
    ],
    [
      "fixture_label_only_not_runtime_host_binding",
      "exact_b1_fixture_reuse_without_host_override",
      "not_included",
      "none",
    ]
  >
>;
export type PondStageB4P1FixtureInvariant_B1SemanticsExact = Assert<
  Equal<
    [
      typeof stageB4P1CrossHostConformanceMatrix[number]["snapshot"]["snapshotRef"],
      typeof stageB4P1CrossHostConformanceMatrix[number]["snapshot"]["activeContext"],
      typeof stageB4P1CrossHostConformanceMatrix[number]["snapshot"]["presentation"],
      typeof stageB4P1CrossHostConformanceMatrix[number]["snapshot"]["gates"],
      typeof stageB4P1CrossHostConformanceMatrix[number]["snapshot"]["authority"],
    ],
    [
      typeof stageB1Snapshot["snapshotRef"],
      typeof stageB1Snapshot["activeContext"],
      typeof stageB1Snapshot["presentation"],
      typeof stageB1Snapshot["gates"],
      typeof stageB1Snapshot["authority"],
    ]
  >
>;
