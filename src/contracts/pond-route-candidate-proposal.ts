// Stage A8 deterministic RouteCandidateProposal contract.
//
// Fixture-only, inert proposal vocabulary. A route candidate preserves
// governed context for review; it does not select, deliver, authorize, or execute.

import type {
  PondAgentProfileDescriptorProjection,
  PondServiceToolProfileDescriptorProjection,
  PondServiceToolRef,
} from "./pond-agent-descriptor.js";
import type { PondAgentRef, PondPrincipalRef } from "./pond-front-agent.js";
import type {
  PondProjectionEnvelope,
  PondScopeRef,
} from "./pond-projection-envelope.js";
import type { PondCrossScopeReleaseProjection } from "./pond-relationship-projections.js";

declare const routeCandidateRefBrand: unique symbol;

export type PondRouteCandidateRef = string & {
  readonly [routeCandidateRefBrand]: "PondRouteCandidateRef";
};

export type PondRouteCandidateCanonicalRefusalOutcome =
  | "insufficient_evidence"
  | "refused"
  | "revoked";

export type PondRouteCandidateAudience =
  | {
      readonly kind: "exact_agent";
      readonly agentRef: PondAgentRef;
      readonly posture: "fixture_destination_reference_not_delivery_decision";
    }
  | {
      readonly kind: "scope";
      readonly scopeRef: PondScopeRef;
      readonly posture: "fixture_destination_reference_not_delivery_decision";
    };

export type PondRouteCandidateTarget =
  | {
      readonly kind: "agent";
      readonly agentRef: PondAgentRef;
      readonly descriptor: PondAgentProfileDescriptorProjection;
      readonly posture: "a7_descriptor_context_only_not_admission_grant_or_authority";
    }
  | {
      readonly kind: "service_tool";
      readonly serviceToolRef: PondServiceToolRef;
      readonly descriptor: PondServiceToolProfileDescriptorProjection;
      readonly posture: "a7_descriptor_context_only_not_admission_grant_or_authority";
    };

export type PondRouteCandidateReleaseContext =
  | {
      readonly kind: "same_scope";
      readonly releaseProjection: null;
      readonly posture: "release_not_required_for_same_scope_fixture";
    }
  | {
      readonly kind: "cross_scope";
      readonly releaseProjection: PondCrossScopeReleaseProjection;
      readonly posture: "a5_projection_context_only_not_release_operation";
    };

export type PondRouteCandidateRefusalCondition =
  | "source_projection_not_current"
  | "target_descriptor_not_current"
  | "target_descriptor_conflicting"
  | "target_admission_not_established"
  | "target_admission_revoked"
  | "cross_scope_release_not_established";

export interface PondRouteCandidateRefusalEvidence {
  readonly condition: PondRouteCandidateRefusalCondition;
  readonly canonicalOutcome: PondRouteCandidateCanonicalRefusalOutcome;
  readonly projection: PondProjectionEnvelope;
  readonly posture: "fixture_projection_evidence_only_not_route_authority";
}

export type PondRouteCandidateRefusalEvidenceNonEmpty =
  | readonly [PondRouteCandidateRefusalEvidence]
  | readonly [PondRouteCandidateRefusalEvidence, PondRouteCandidateRefusalEvidence];

export type PondRouteCandidateAssessment =
  | {
      readonly state: "candidate";
      readonly posture: "structurally_complete_fixture_candidate_not_delivery_eligible";
      readonly canonicalRefusalOutcome: null;
      readonly refusalEvidence: readonly [];
    }
  | {
      readonly state: "refused";
      readonly posture: "fail_closed_fixture_route_candidate_refusal";
      readonly canonicalRefusalOutcome: PondRouteCandidateCanonicalRefusalOutcome;
      readonly refusalEvidence: PondRouteCandidateRefusalEvidenceNonEmpty;
    };

export interface PondRouteCandidateProposal {
  readonly contractVersion: "pond-route-candidate-proposal-a8";
  readonly routeCandidateRef: PondRouteCandidateRef;
  readonly proposalPosture: "deterministic_fixture_inert_route_candidate";
  readonly source: {
    readonly principalRef: PondPrincipalRef;
    readonly scopeRef: PondScopeRef;
    readonly agentRef: PondAgentRef | null;
    readonly posture: "fixture_source_identity_reference_only";
  };
  readonly destination: {
    readonly scopeRef: PondScopeRef;
    readonly audience: PondRouteCandidateAudience;
    readonly posture: "fixture_destination_reference_only";
  };
  readonly target: PondRouteCandidateTarget;
  readonly releaseContext: PondRouteCandidateReleaseContext;
  readonly provenance: {
    readonly sourceProjection: PondProjectionEnvelope;
    readonly targetDescriptorProjection: PondProjectionEnvelope;
    readonly posture: "a4_projection_chain_fixture_only_not_trusted_route_authority";
  };
  readonly routeSelectionPosture: "candidate_not_selected";
  readonly deliveryEligibilityPosture: "not_evaluated";
  readonly deliveryDecisionPosture: "not_performed";
  readonly consequenceAuthorizationPosture: "not_evaluated";
  readonly effectPosture: {
    readonly delivery: "not_performed";
    readonly dispatch: "not_performed";
    readonly invocation: "not_performed";
    readonly release: "not_performed";
    readonly grant: "not_performed";
    readonly approval: "not_performed";
    readonly mutation: "not_performed";
    readonly execution: "not_performed";
  };
  readonly assessment: PondRouteCandidateAssessment;
  readonly authority: "none";
  readonly projection: PondProjectionEnvelope;
}

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;
type KeysOfUnion<T> = T extends unknown ? keyof T : never;
type HasAnyKey<T, K extends PropertyKey> =
  Extract<KeysOfUnion<T>, K> extends never ? false : true;

export type PondStageA8Invariant_TargetKindsExact = Assert<
  Equal<PondRouteCandidateTarget["kind"], "agent" | "service_tool">
>;
export type PondStageA8Invariant_AudienceKindsExact = Assert<
  Equal<PondRouteCandidateAudience["kind"], "exact_agent" | "scope">
>;
export type PondStageA8Invariant_AssessmentStatesExact = Assert<
  Equal<PondRouteCandidateAssessment["state"], "candidate" | "refused">
>;
export type PondStageA8Invariant_RefusalOutcomesExact = Assert<
  Equal<
    PondRouteCandidateCanonicalRefusalOutcome,
    "insufficient_evidence" | "refused" | "revoked"
  >
>;
export type PondStageA8Invariant_AuthorityNone = Assert<
  Equal<PondRouteCandidateProposal["authority"], "none">
>;
export type PondStageA8Invariant_RouteNotSelected = Assert<
  Equal<PondRouteCandidateProposal["routeSelectionPosture"], "candidate_not_selected">
>;
export type PondStageA8Invariant_DeliveryDecisionNotPerformed = Assert<
  Equal<PondRouteCandidateProposal["deliveryDecisionPosture"], "not_performed">
>;
export type PondStageA8Invariant_ConsequenceAuthorizationNotEvaluated = Assert<
  Equal<PondRouteCandidateProposal["consequenceAuthorizationPosture"], "not_evaluated">
>;
export type PondStageA8Invariant_ComposesA4Envelope = Assert<
  Equal<PondRouteCandidateProposal["projection"], PondProjectionEnvelope>
>;
export type PondStageA8Invariant_CandidateHasNoRefusalEvidence = Assert<
  Equal<
    Extract<PondRouteCandidateAssessment, { state: "candidate" }>["refusalEvidence"],
    readonly []
  >
>;
export type PondStageA8Invariant_CandidateHasNoRefusalOutcome = Assert<
  Equal<
    Extract<PondRouteCandidateAssessment, { state: "candidate" }>["canonicalRefusalOutcome"],
    null
  >
>;
export type PondStageA8Invariant_RefusedHasNonEmptyEvidence = Assert<
  Equal<
    Extract<PondRouteCandidateAssessment, { state: "refused" }>["refusalEvidence"],
    PondRouteCandidateRefusalEvidenceNonEmpty
  >
>;

type ForbiddenRouteCandidateKeys =
  | "deliver"
  | "dispatch"
  | "invoke"
  | "execute"
  | "approve"
  | "mutate"
  | "grant"
  | "authorize"
  | "authorized"
  | "isAuthorized"
  | "selectedRoute"
  | "transport"
  | "endpoint"
  | "wallet"
  | "signer"
  | "credential"
  | "secret";

export type PondStageA8Invariant_NoEffectAuthorityOrTransportFields = Assert<
  Equal<HasAnyKey<PondRouteCandidateProposal, ForbiddenRouteCandidateKeys>, false>
>;
