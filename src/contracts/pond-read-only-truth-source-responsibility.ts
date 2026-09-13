// Stage C-P0 read-only truth source-responsibility projection contract.
//
// This contract records canonical logical runtime allocation only. It does not
// identify a concrete source, endpoint, protocol, storage owner, trusted
// channel, or live integration, and it performs no governance evaluation.

export type PondReadOnlyTruthConcern =
  | "current_governance_eligibility_evaluation"
  | "workspace_repository_target_resolution"
  | "repository_analysis_and_source_evidence"
  | "receipt_evidence_capture_and_forwarding";

export type PondCanonicalRuntimeResponsibility =
  | "mirror_core"
  | "mirror_desktop_bridge"
  | "toadaid_coder";

export interface PondReadOnlyTruthSourceResponsibilityBinding {
  readonly contractVersion: "pond-read-only-truth-source-responsibility-c-p0";
  readonly concern: PondReadOnlyTruthConcern;
  readonly semanticOwner: "canonical_architecture";
  readonly runtimeResponsibility: PondCanonicalRuntimeResponsibility;
  readonly responsibilityPosture:
    "canonical_logical_allocation_not_concrete_runtime_source";
  readonly pondRole: "consumer_presenter_only";
  readonly concreteSourceIdentityPosture: "not_bound";
  readonly storageOwnerPosture: "not_selected_by_canonical_architecture";
  readonly apiProtocolPosture: "not_selected";
  readonly trustedChannelPosture: "not_established";
  readonly freshnessObservationPosture: "not_performed";
  readonly runtimeIntegrationPosture: "not_included";
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

export type PondStageCP0Invariant_ConcernsExact = Assert<
  Equal<
    PondReadOnlyTruthConcern,
    | "current_governance_eligibility_evaluation"
    | "workspace_repository_target_resolution"
    | "repository_analysis_and_source_evidence"
    | "receipt_evidence_capture_and_forwarding"
  >
>;
export type PondStageCP0Invariant_RuntimeResponsibilitiesExact = Assert<
  Equal<
    PondCanonicalRuntimeResponsibility,
    "mirror_core" | "mirror_desktop_bridge" | "toadaid_coder"
  >
>;
export type PondStageCP0Invariant_PondOnlyConsumesAndPresents = Assert<
  Equal<
    PondReadOnlyTruthSourceResponsibilityBinding["pondRole"],
    "consumer_presenter_only"
  >
>;
export type PondStageCP0Invariant_ConcreteSourceNotBound = Assert<
  Equal<
    PondReadOnlyTruthSourceResponsibilityBinding["concreteSourceIdentityPosture"],
    "not_bound"
  >
>;
export type PondStageCP0Invariant_RuntimeIntegrationNotIncluded = Assert<
  Equal<
    PondReadOnlyTruthSourceResponsibilityBinding["runtimeIntegrationPosture"],
    "not_included"
  >
>;
export type PondStageCP0Invariant_AuthorityNone = Assert<
  Equal<PondReadOnlyTruthSourceResponsibilityBinding["authority"], "none">
>;

type ForbiddenSourceResponsibilityKeys =
  | "sourceRef"
  | "endpoint"
  | "transport"
  | "connection"
  | "request"
  | "response"
  | "currentState"
  | "freshnessObservation"
  | "decision"
  | "allow"
  | "deny"
  | "approve"
  | "execute"
  | "mutate"
  | "authorize"
  | "credential"
  | "secret"
  | "token"
  | "session";

export type PondStageCP0Invariant_NoSourceTransportDecisionOrEffectFields = Assert<
  Equal<
    HasAnyKey<
      PondReadOnlyTruthSourceResponsibilityBinding,
      ForbiddenSourceResponsibilityKeys
    >,
    false
  >
>;
