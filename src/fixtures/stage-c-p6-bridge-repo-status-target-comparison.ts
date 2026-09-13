import { classifyPondBridgeRepoStatusObservationAge } from "../contracts/pond-bridge-repo-status-observation-age.js";
import { comparePondBridgeRepoStatusTarget } from "../contracts/pond-bridge-repo-status-target-comparison.js";
import { stageCP1ReadOnlyRepositoryTarget } from "./stage-c-p1-read-only-repository-target.js";

const evaluatedAtEpochMs = 1_800_000_060_000;

export const stageCP6FreshObservationAge =
  classifyPondBridgeRepoStatusObservationAge({
    observationMetadata: {
      observed_at_epoch_ms: evaluatedAtEpochMs - 30_000,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    },
    evaluatedAtEpochMs,
    maximumAgeMs: 60_000,
  });

export const stageCP6PartialTargetComparison =
  comparePondBridgeRepoStatusTarget({
    expectedTarget: stageCP1ReadOnlyRepositoryTarget,
    snapshotCandidate: {
      repo_root_label: "toadaid-app",
      branch_name: "main",
      head_sha_short: "adda2fc",
    },
    ageAssessment: stageCP6FreshObservationAge,
  });
