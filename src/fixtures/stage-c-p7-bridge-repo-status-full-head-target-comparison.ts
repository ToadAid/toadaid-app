import { comparePondBridgeRepoStatusFullHeadTarget } from "../contracts/pond-bridge-repo-status-full-head-target-comparison.js";
import { stageCP1ReadOnlyRepositoryTarget } from "./stage-c-p1-read-only-repository-target.js";
import { stageCP6FreshObservationAge } from "./stage-c-p6-bridge-repo-status-target-comparison.js";
import { stageCP7BridgeRepoStatusFullHeadSourceBinding } from "./stage-c-p7-bridge-repo-status-full-head-source-binding.js";

export const stageCP7FullHeadTargetComparison =
  comparePondBridgeRepoStatusFullHeadTarget({
    sourceBinding: stageCP7BridgeRepoStatusFullHeadSourceBinding,
    expectedTarget: stageCP1ReadOnlyRepositoryTarget,
    snapshotCandidate: {
      repo_root_label: "toadaid-app",
      branch_name: "main",
      head_sha_short: "adda2fc",
      head_sha_full: "adda2fc7807a504b5621c18a3aa84ce8f3004440",
    },
    ageAssessment: stageCP6FreshObservationAge,
  });
