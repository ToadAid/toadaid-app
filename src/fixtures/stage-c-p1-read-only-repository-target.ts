import type {
  PondReadOnlyRepositoryTargetFixture,
  PondRepositoryHeadCommit,
} from "../contracts/pond-read-only-repository-target.js";
import { stageB1Snapshot } from "./stage-b1-host-neutral-state.js";
import { stageCP0WorkspaceTargetResponsibility } from "./stage-c-p0-source-responsibility.js";

const repositoryHeadCommit = <const T extends string>(value: T) =>
  value as T & PondRepositoryHeadCommit;

export const stageCP1ReadOnlyRepositoryTarget = {
  contractVersion: "pond-read-only-repository-target-c-p1",
  repository: {
    owner: "ToadAid",
    name: "toadaid-app",
    identityPosture: "fixture_exact_owner_name_not_remote_verified",
  },
  branch: {
    name: "main",
    bindingPosture: "fixture_branch_name_not_live_resolved",
  },
  head: {
    commit: repositoryHeadCommit(
      "adda2fc7807a504b5621c18a3aa84ce8f3004440",
    ),
    bindingPosture: "fixture_parent_commit_not_live_head",
  },
  path: {
    pathClass: "repository_root",
    repositoryRelativePath: ".",
    bindingPosture: "fixture_exact_repository_root",
  },
  operationClass: "read",
  operationPosture: "identity_only_not_performed",
  projectScopeBinding: {
    scopeRef: stageB1Snapshot.activeContext.scopeRef,
    posture:
      "fixture_explicit_association_not_membership_ownership_or_authority",
  },
  sourceResponsibility: stageCP0WorkspaceTargetResponsibility,
  targetPosture:
    "fixture_identity_only_not_grant_or_authoritative_runtime_target",
  authority: "none",
} as const satisfies PondReadOnlyRepositoryTargetFixture;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageCP1FixtureInvariant_RepositoryExact = Assert<
  Equal<
    [
      typeof stageCP1ReadOnlyRepositoryTarget["repository"]["owner"],
      typeof stageCP1ReadOnlyRepositoryTarget["repository"]["name"],
    ],
    ["ToadAid", "toadaid-app"]
  >
>;
export type PondStageCP1FixtureInvariant_BranchAndParentHeadExact = Assert<
  Equal<
    [
      typeof stageCP1ReadOnlyRepositoryTarget["branch"]["name"],
      typeof stageCP1ReadOnlyRepositoryTarget["head"]["commit"],
    ],
    [
      "main",
      "adda2fc7807a504b5621c18a3aa84ce8f3004440" & PondRepositoryHeadCommit,
    ]
  >
>;
export type PondStageCP1FixtureInvariant_RepositoryRootReadIdentityOnly = Assert<
  Equal<
    [
      typeof stageCP1ReadOnlyRepositoryTarget["path"]["pathClass"],
      typeof stageCP1ReadOnlyRepositoryTarget["path"]["repositoryRelativePath"],
      typeof stageCP1ReadOnlyRepositoryTarget["operationClass"],
      typeof stageCP1ReadOnlyRepositoryTarget["operationPosture"],
    ],
    ["repository_root", ".", "read", "identity_only_not_performed"]
  >
>;
export type PondStageCP1FixtureInvariant_ProjectScopeReusesB1 = Assert<
  Equal<
    typeof stageCP1ReadOnlyRepositoryTarget["projectScopeBinding"]["scopeRef"],
    typeof stageB1Snapshot["activeContext"]["scopeRef"]
  >
>;
export type PondStageCP1FixtureInvariant_TargetResponsibilityReusesCP0 = Assert<
  Equal<
    typeof stageCP1ReadOnlyRepositoryTarget["sourceResponsibility"],
    typeof stageCP0WorkspaceTargetResponsibility
  >
>;
export type PondStageCP1FixtureInvariant_NoTargetAuthority = Assert<
  Equal<
    [
      typeof stageCP1ReadOnlyRepositoryTarget["targetPosture"],
      typeof stageCP1ReadOnlyRepositoryTarget["authority"],
    ],
    [
      "fixture_identity_only_not_grant_or_authoritative_runtime_target",
      "none",
    ]
  >
>;
