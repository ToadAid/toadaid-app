import type { PondBridgeRepoStatusIntakeAssessmentFixture } from "../contracts/pond-bridge-repo-status-intake-refusal.js";
import { stageCP2BridgeRepoStatusSourceBinding } from "./stage-c-p2-bridge-repo-status-source-binding.js";

const intakeBase = {
  contractVersion: "pond-bridge-repo-status-intake-refusal-c-p3",
  sourceBinding: stageCP2BridgeRepoStatusSourceBinding,
  sourceResultPayloadPosture: "not_included_fixture_state_only",
  presentationState: "degraded",
  currentTruthAdmitted: false,
  snapshotPresentation: "withheld",
  fallbackPosture: {
    directGitRead: "forbidden",
    directFilesystemRead: "forbidden",
    alternateSourceSelection: "forbidden",
  },
  effectPosture: {
    polling: "not_performed",
    persistence: "not_performed",
    approval: "not_performed",
    mutation: "not_performed",
    execution: "not_performed",
  },
  authority: "none",
} as const;

export const stageCP3BridgeBlockedIntake = {
  ...intakeBase,
  sourceState: "blocked",
  sourceSnapshotPosture: "absent",
  refusalReason: "bridge_source_blocked",
  canonicalOutcome: "blocked",
} as const satisfies PondBridgeRepoStatusIntakeAssessmentFixture;

export const stageCP3BridgeClientErrorIntake = {
  ...intakeBase,
  sourceState: "client_error",
  sourceSnapshotPosture: "absent",
  refusalReason: "bridge_source_client_error",
  canonicalOutcome: "insufficient_evidence",
} as const satisfies PondBridgeRepoStatusIntakeAssessmentFixture;

export const stageCP3BridgeReadyWithoutFreshnessIntake = {
  ...intakeBase,
  sourceState: "ready",
  sourceSnapshotPosture: "present_but_withheld_without_freshness",
  refusalReason: "bridge_source_freshness_unavailable",
  canonicalOutcome: "insufficient_evidence",
} as const satisfies PondBridgeRepoStatusIntakeAssessmentFixture;

export const stageCP3BridgeRepoStatusIntakeMatrix = [
  stageCP3BridgeBlockedIntake,
  stageCP3BridgeClientErrorIntake,
  stageCP3BridgeReadyWithoutFreshnessIntake,
] as const satisfies readonly [
  PondBridgeRepoStatusIntakeAssessmentFixture,
  PondBridgeRepoStatusIntakeAssessmentFixture,
  PondBridgeRepoStatusIntakeAssessmentFixture,
];

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageCP3FixtureInvariant_ThreeSourceStatesExact = Assert<
  Equal<
    [
      typeof stageCP3BridgeRepoStatusIntakeMatrix[0]["sourceState"],
      typeof stageCP3BridgeRepoStatusIntakeMatrix[1]["sourceState"],
      typeof stageCP3BridgeRepoStatusIntakeMatrix[2]["sourceState"],
    ],
    ["blocked", "client_error", "ready"]
  >
>;
export type PondStageCP3FixtureInvariant_OutcomesExact = Assert<
  Equal<
    [
      typeof stageCP3BridgeRepoStatusIntakeMatrix[0]["canonicalOutcome"],
      typeof stageCP3BridgeRepoStatusIntakeMatrix[1]["canonicalOutcome"],
      typeof stageCP3BridgeRepoStatusIntakeMatrix[2]["canonicalOutcome"],
    ],
    ["blocked", "insufficient_evidence", "insufficient_evidence"]
  >
>;
export type PondStageCP3FixtureInvariant_AllReuseCP2SourceBinding = Assert<
  Equal<
    typeof stageCP3BridgeRepoStatusIntakeMatrix[number]["sourceBinding"],
    typeof stageCP2BridgeRepoStatusSourceBinding
  >
>;
export type PondStageCP3FixtureInvariant_AllDegradeAndWithhold = Assert<
  Equal<
    [
      typeof stageCP3BridgeRepoStatusIntakeMatrix[number]["presentationState"],
      typeof stageCP3BridgeRepoStatusIntakeMatrix[number]["currentTruthAdmitted"],
      typeof stageCP3BridgeRepoStatusIntakeMatrix[number]["snapshotPresentation"],
      typeof stageCP3BridgeRepoStatusIntakeMatrix[number]["authority"],
    ],
    ["degraded", false, "withheld", "none"]
  >
>;
export type PondStageCP3FixtureInvariant_AllFallbacksForbidden = Assert<
  Equal<
    typeof stageCP3BridgeRepoStatusIntakeMatrix[number]["fallbackPosture"][keyof typeof stageCP3BridgeRepoStatusIntakeMatrix[number]["fallbackPosture"]],
    "forbidden"
  >
>;
export type PondStageCP3FixtureInvariant_AllEffectsNotPerformed = Assert<
  Equal<
    typeof stageCP3BridgeRepoStatusIntakeMatrix[number]["effectPosture"][keyof typeof stageCP3BridgeRepoStatusIntakeMatrix[number]["effectPosture"]],
    "not_performed"
  >
>;
