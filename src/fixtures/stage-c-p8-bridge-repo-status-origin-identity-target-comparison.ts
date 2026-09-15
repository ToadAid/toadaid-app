import { comparePondBridgeRepoStatusOriginIdentityTarget } from "../contracts/pond-bridge-repo-status-origin-identity-target-comparison.js";
import { stageCP1ReadOnlyRepositoryTarget } from "./stage-c-p1-read-only-repository-target.js";
import { stageCP6FreshObservationAge } from "./stage-c-p6-bridge-repo-status-target-comparison.js";
import { stageCP8BridgeRepoStatusOriginIdentitySourceBinding } from "./stage-c-p8-bridge-repo-status-origin-identity-source-binding.js";

export const stageCP8OriginIdentityTargetComparison =
  comparePondBridgeRepoStatusOriginIdentityTarget({
    sourceBinding: stageCP8BridgeRepoStatusOriginIdentitySourceBinding,
    expectedTarget: stageCP1ReadOnlyRepositoryTarget,
    snapshotCandidate: {
      repo_root_label: "toadaid-app",
      configured_origin_identity: {
        host: "github.com",
        owner: "ToadAid",
        name: "toadaid-app",
        observation_basis: "parsed_local_git_origin_url",
        remote_verification: "not_performed",
        raw_origin_url_projected: false,
        authority: "none",
      },
      origin_identity_posture: "parsed_supported_origin",
      branch_name: "main",
      head_sha_short: "adda2fc",
      head_sha_full: "adda2fc7807a504b5621c18a3aa84ce8f3004440",
    },
    ageAssessment: stageCP6FreshObservationAge,
  });
