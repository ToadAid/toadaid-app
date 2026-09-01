// Stage A4 common non-authoritative Pond projection envelope.
//
// This contract carries fixture projection truth for presentation. It is not
// canonical ecosystem state, verified evidence, release, or authority.

declare const scopeRefBrand: unique symbol;
declare const projectionSourceRefBrand: unique symbol;
declare const projectionSubjectRefBrand: unique symbol;
declare const projectionEvidenceRefBrand: unique symbol;

// Located here so the common envelope and front-agent contract share one
// Pond-local scope reference type without a type-import cycle.
export type PondScopeRef = string & { readonly [scopeRefBrand]: "PondScopeRef" };
export type PondProjectionSourceRef = string & {
  readonly [projectionSourceRefBrand]: "PondProjectionSourceRef";
};
export type PondProjectionSubjectRef = string & {
  readonly [projectionSubjectRefBrand]: "PondProjectionSubjectRef";
};
export type PondProjectionEvidenceRef = string & {
  readonly [projectionEvidenceRefBrand]: "PondProjectionEvidenceRef";
};

export type PondProjectionApplicability = "applicable" | "not_applicable" | "unknown";
export type PondProjectionRedactionPosture = "none" | "redacted" | "withheld";

export interface PondFreshProjectionObservation {
  readonly state: "fresh";
  readonly observedAt: string;
  readonly freshUntil: string;
  readonly freshnessBasis: "fixture_declared_interval";
}

export interface PondStaleProjectionObservation {
  readonly state: "stale";
  readonly observedAt: string;
  readonly expiredAt: string;
  readonly freshnessBasis: "fixture_declared_interval_expired";
}

export interface PondMissingProjectionObservation {
  readonly state: "missing";
  readonly freshnessBasis: "fixture_subject_not_observed";
}

export interface PondUnknownProjectionObservation {
  readonly state: "unknown";
  readonly freshnessBasis: "fixture_freshness_not_observable";
}

export interface PondConflictingProjectionObservationItem {
  readonly observedAt: string;
  readonly subjectRevision: string;
  readonly subjectDigest: string;
}

export interface PondConflictingProjectionObservation {
  readonly state: "conflicting";
  readonly observations: readonly [
    PondConflictingProjectionObservationItem,
    PondConflictingProjectionObservationItem,
  ];
  readonly freshnessBasis: "fixture_conflict_requires_canonical_reconciliation";
  readonly reconciliationPosture: "canonical_source_required_no_winner_selected";
}

export type PondProjectionObservation =
  | PondFreshProjectionObservation
  | PondStaleProjectionObservation
  | PondMissingProjectionObservation
  | PondUnknownProjectionObservation
  | PondConflictingProjectionObservation;

export type PondProjectionObservationState = PondProjectionObservation["state"];

export interface PondProjectionEvidenceReference {
  readonly evidenceRef: PondProjectionEvidenceRef;
  readonly posture: "reference_only_not_verified";
}

export type PondProjectionEvidenceReferences =
  | readonly []
  | readonly [PondProjectionEvidenceReference]
  | readonly [PondProjectionEvidenceReference, PondProjectionEvidenceReference];

interface PondProjectionEnvelopeBase {
  readonly contractVersion: "pond-projection-envelope-a4";
  readonly authority: "none";
  readonly sourceClass: "fixture";
  readonly sourceRef: PondProjectionSourceRef;
  readonly projectionMechanism: "fixture";
  readonly trustPosture: "non_authoritative_fixture";
  readonly sourceScopeRef: PondScopeRef;
  readonly audiencePosture: "not_established";
  readonly disclosurePosture: "fixture_only_no_release_established";
  readonly subject: {
    readonly subjectRef: PondProjectionSubjectRef;
    readonly subjectRevision: string;
    readonly subjectDigest: string;
    readonly digestPosture: "fixture_identity_value_not_runtime_proof";
    readonly bindingComparison: "not_performed_fixture_only";
  };
  readonly applicability: PondProjectionApplicability;
  readonly evidenceReferences: PondProjectionEvidenceReferences;
  readonly redactionPosture: PondProjectionRedactionPosture;
}

export type PondProjectionEnvelope = PondProjectionEnvelopeBase &
  (
    | {
        readonly observation: PondFreshProjectionObservation;
        readonly canonicalOutcome: null;
      }
    | {
        readonly observation: Exclude<
          PondProjectionObservation,
          PondFreshProjectionObservation
        >;
        readonly canonicalOutcome: "insufficient_evidence";
      }
  );

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasKey<T, K extends PropertyKey> = K extends keyof T ? true : false;

export type PondStageA4Invariant_ObservationStatesExact = Assert<
  Equal<
    PondProjectionObservationState,
    "fresh" | "stale" | "missing" | "unknown" | "conflicting"
  >
>;
export type PondStageA4Invariant_ApplicabilityExact = Assert<
  Equal<PondProjectionApplicability, "applicable" | "not_applicable" | "unknown">
>;
export type PondStageA4Invariant_SourceClassFixtureOnly = Assert<
  Equal<PondProjectionEnvelope["sourceClass"], "fixture">
>;
export type PondStageA4Invariant_ProjectionMechanismFixtureOnly = Assert<
  Equal<PondProjectionEnvelope["projectionMechanism"], "fixture">
>;
export type PondStageA4Invariant_AuthorityNone = Assert<
  Equal<PondProjectionEnvelope["authority"], "none">
>;
export type PondStageA4Invariant_TrustPostureFixtureOnly = Assert<
  Equal<PondProjectionEnvelope["trustPosture"], "non_authoritative_fixture">
>;
export type PondStageA4Invariant_NoExecuteField = Assert<
  Equal<HasKey<PondProjectionEnvelope, "execute">, false>
>;
export type PondStageA4Invariant_NoApproveField = Assert<
  Equal<HasKey<PondProjectionEnvelope, "approve">, false>
>;
export type PondStageA4Invariant_NoAuthorizeField = Assert<
  Equal<HasKey<PondProjectionEnvelope, "authorize">, false>
>;
export type PondStageA4Invariant_NoIsAuthorizedField = Assert<
  Equal<HasKey<PondProjectionEnvelope, "isAuthorized">, false>
>;
export type PondStageA4Invariant_NoMembershipField = Assert<
  Equal<HasKey<PondProjectionEnvelope, "membership">, false>
>;
export type PondStageA4Invariant_NoAdmissionField = Assert<
  Equal<HasKey<PondProjectionEnvelope, "admission">, false>
>;
export type PondStageA4Invariant_NoGrantField = Assert<
  Equal<HasKey<PondProjectionEnvelope, "grant">, false>
>;
export type PondStageA4Invariant_NoReleaseField = Assert<
  Equal<HasKey<PondProjectionEnvelope, "release">, false>
>;
