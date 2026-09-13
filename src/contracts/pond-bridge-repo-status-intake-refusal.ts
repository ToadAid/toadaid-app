// Stage C-P3 Bridge repo-status intake refusal contract.
//
// Source-state fixtures prove fail-closed presentation behavior only. They do
// not ingest Bridge output, evaluate freshness, select a fallback, or activate
// any repository, filesystem, transport, or authority-bearing behavior.

import type { PondBridgeRepoStatusSourceBindingFixture } from "./pond-bridge-repo-status-source-binding.js";

export type PondBridgeRepoStatusSourceState =
  | "blocked"
  | "ready"
  | "client_error";

export type PondBridgeRepoStatusIntakeCanonicalOutcome =
  | "blocked"
  | "insufficient_evidence";

interface PondBridgeRepoStatusIntakeAssessmentBase {
  readonly contractVersion: "pond-bridge-repo-status-intake-refusal-c-p3";
  readonly sourceBinding: PondBridgeRepoStatusSourceBindingFixture;
  readonly sourceResultPayloadPosture: "not_included_fixture_state_only";
  readonly presentationState: "degraded";
  readonly currentTruthAdmitted: false;
  readonly snapshotPresentation: "withheld";
  readonly fallbackPosture: {
    readonly directGitRead: "forbidden";
    readonly directFilesystemRead: "forbidden";
    readonly alternateSourceSelection: "forbidden";
  };
  readonly effectPosture: {
    readonly polling: "not_performed";
    readonly persistence: "not_performed";
    readonly approval: "not_performed";
    readonly mutation: "not_performed";
    readonly execution: "not_performed";
  };
  readonly authority: "none";
}

export type PondBridgeRepoStatusIntakeAssessmentFixture =
  | (PondBridgeRepoStatusIntakeAssessmentBase & {
      readonly sourceState: "blocked";
      readonly sourceSnapshotPosture: "absent";
      readonly refusalReason: "bridge_source_blocked";
      readonly canonicalOutcome: "blocked";
    })
  | (PondBridgeRepoStatusIntakeAssessmentBase & {
      readonly sourceState: "client_error";
      readonly sourceSnapshotPosture: "absent";
      readonly refusalReason: "bridge_source_client_error";
      readonly canonicalOutcome: "insufficient_evidence";
    })
  | (PondBridgeRepoStatusIntakeAssessmentBase & {
      readonly sourceState: "ready";
      readonly sourceSnapshotPosture:
        "present_but_withheld_without_freshness";
      readonly refusalReason: "bridge_source_freshness_unavailable";
      readonly canonicalOutcome: "insufficient_evidence";
    });

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type KeysOfUnion<T> = T extends unknown ? keyof T : never;
type HasAnyKey<T, K extends PropertyKey> =
  Extract<KeysOfUnion<T>, K> extends never ? false : true;

export type PondStageCP3Invariant_SourceStatesExact = Assert<
  Equal<PondBridgeRepoStatusSourceState, "blocked" | "ready" | "client_error">
>;
export type PondStageCP3Invariant_AssessmentSourceStatesExact = Assert<
  Equal<
    PondBridgeRepoStatusIntakeAssessmentFixture["sourceState"],
    PondBridgeRepoStatusSourceState
  >
>;
export type PondStageCP3Invariant_CanonicalOutcomesExact = Assert<
  Equal<
    PondBridgeRepoStatusIntakeAssessmentFixture["canonicalOutcome"],
    PondBridgeRepoStatusIntakeCanonicalOutcome
  >
>;
export type PondStageCP3Invariant_AllPresentDegraded = Assert<
  Equal<
    PondBridgeRepoStatusIntakeAssessmentFixture["presentationState"],
    "degraded"
  >
>;
export type PondStageCP3Invariant_NoCurrentTruthAdmitted = Assert<
  Equal<
    PondBridgeRepoStatusIntakeAssessmentFixture["currentTruthAdmitted"],
    false
  >
>;
export type PondStageCP3Invariant_AllSnapshotsWithheld = Assert<
  Equal<
    PondBridgeRepoStatusIntakeAssessmentFixture["snapshotPresentation"],
    "withheld"
  >
>;
export type PondStageCP3Invariant_FallbacksForbidden = Assert<
  Equal<
    PondBridgeRepoStatusIntakeAssessmentFixture["fallbackPosture"][keyof PondBridgeRepoStatusIntakeAssessmentFixture["fallbackPosture"]],
    "forbidden"
  >
>;
export type PondStageCP3Invariant_AuthorityNone = Assert<
  Equal<PondBridgeRepoStatusIntakeAssessmentFixture["authority"], "none">
>;

type ForbiddenRepoStatusIntakeKeys =
  | "sourceResult"
  | "snapshot"
  | "observedAt"
  | "freshUntil"
  | "freshness"
  | "endpoint"
  | "transport"
  | "connect"
  | "fetch"
  | "read"
  | "approve"
  | "grant"
  | "execute"
  | "mutate"
  | "authorize"
  | "credential"
  | "secret"
  | "token"
  | "session";

export type PondStageCP3Invariant_NoPayloadFreshnessTransportOrEffectFields = Assert<
  Equal<
    HasAnyKey<
      PondBridgeRepoStatusIntakeAssessmentFixture,
      ForbiddenRepoStatusIntakeKeys
    >,
    false
  >
>;
