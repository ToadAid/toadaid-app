// Stage C-P1 exact read-only repository target projection contract.
//
// This is fixture target identity only. It is not a live workspace observation,
// an authoritative target resolution, a Grant target, or repository authority.

import type { PondScopeRef } from "./pond-projection-envelope.js";
import type { PondReadOnlyTruthSourceResponsibilityBinding } from "./pond-read-only-truth-source-responsibility.js";

declare const repositoryHeadCommitBrand: unique symbol;

export type PondRepositoryHeadCommit = string & {
  readonly [repositoryHeadCommitBrand]: "PondRepositoryHeadCommit";
};

export type PondWorkspaceTargetSourceResponsibilityBinding =
  PondReadOnlyTruthSourceResponsibilityBinding & {
    readonly concern: "workspace_repository_target_resolution";
    readonly runtimeResponsibility: "mirror_desktop_bridge";
  };

export interface PondReadOnlyRepositoryTargetFixture {
  readonly contractVersion: "pond-read-only-repository-target-c-p1";
  readonly repository: {
    readonly owner: string;
    readonly name: string;
    readonly identityPosture: "fixture_exact_owner_name_not_remote_verified";
  };
  readonly branch: {
    readonly name: string;
    readonly bindingPosture: "fixture_branch_name_not_live_resolved";
  };
  readonly head: {
    readonly commit: PondRepositoryHeadCommit;
    readonly bindingPosture: "fixture_parent_commit_not_live_head";
  };
  readonly path: {
    readonly pathClass: "repository_root";
    readonly repositoryRelativePath: ".";
    readonly bindingPosture: "fixture_exact_repository_root";
  };
  readonly operationClass: "read";
  readonly operationPosture: "identity_only_not_performed";
  readonly projectScopeBinding: {
    readonly scopeRef: PondScopeRef;
    readonly posture:
      "fixture_explicit_association_not_membership_ownership_or_authority";
  };
  readonly sourceResponsibility: PondWorkspaceTargetSourceResponsibilityBinding;
  readonly targetPosture:
    "fixture_identity_only_not_grant_or_authoritative_runtime_target";
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

export type PondStageCP1Invariant_RepositoryHeadCommitIsString = Assert<
  Equal<PondRepositoryHeadCommit extends string ? true : false, true>
>;
export type PondStageCP1Invariant_PathClassRepositoryRoot = Assert<
  Equal<
    PondReadOnlyRepositoryTargetFixture["path"]["pathClass"],
    "repository_root"
  >
>;
export type PondStageCP1Invariant_OperationReadOnly = Assert<
  Equal<PondReadOnlyRepositoryTargetFixture["operationClass"], "read">
>;
export type PondStageCP1Invariant_BridgeOwnsTargetResolutionResponsibility = Assert<
  Equal<
    [
      PondReadOnlyRepositoryTargetFixture["sourceResponsibility"]["concern"],
      PondReadOnlyRepositoryTargetFixture["sourceResponsibility"]["runtimeResponsibility"],
    ],
    ["workspace_repository_target_resolution", "mirror_desktop_bridge"]
  >
>;
export type PondStageCP1Invariant_ScopeBindingDoesNotEstablishRelationshipOrAuthority = Assert<
  Equal<
    PondReadOnlyRepositoryTargetFixture["projectScopeBinding"]["posture"],
    "fixture_explicit_association_not_membership_ownership_or_authority"
  >
>;
export type PondStageCP1Invariant_AuthorityNone = Assert<
  Equal<PondReadOnlyRepositoryTargetFixture["authority"], "none">
>;

type ForbiddenRepositoryTargetKeys =
  | "workspacePath"
  | "absolutePath"
  | "remoteUrl"
  | "membership"
  | "grant"
  | "grantRef"
  | "approve"
  | "approval"
  | "write"
  | "commit"
  | "push"
  | "merge"
  | "execute"
  | "mutate"
  | "authorize"
  | "credential"
  | "secret"
  | "token"
  | "session";

export type PondStageCP1Invariant_NoAmbientPathRelationshipOrMutationFields = Assert<
  Equal<
    HasAnyKey<PondReadOnlyRepositoryTargetFixture, ForbiddenRepositoryTargetKeys>,
    false
  >
>;
