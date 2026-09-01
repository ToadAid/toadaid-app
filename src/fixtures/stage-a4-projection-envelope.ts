import type {
  PondProjectionEnvelope,
  PondProjectionEvidenceRef,
  PondProjectionSourceRef,
  PondProjectionSubjectRef,
  PondScopeRef,
} from "../contracts/pond-projection-envelope.js";

const projectScopeRef = "scope:fixture:project-alpha" as PondScopeRef;
const projectionSourceRef = "projection-source:fixture:project-alpha" as PondProjectionSourceRef;
const subjectRef = "subject:fixture:project-alpha:status" as PondProjectionSubjectRef;
const evidenceRefA = "evidence:fixture:project-alpha:a" as PondProjectionEvidenceRef;
const evidenceRefB = "evidence:fixture:project-alpha:b" as PondProjectionEvidenceRef;

export const stageA4FreshProjectionEnvelopeFixture = {
  contractVersion: "pond-projection-envelope-a4",
  authority: "none",
  sourceClass: "fixture",
  sourceRef: projectionSourceRef,
  projectionMechanism: "fixture",
  trustPosture: "non_authoritative_fixture",
  sourceScopeRef: projectScopeRef,
  audiencePosture: "not_established",
  disclosurePosture: "fixture_only_no_release_established",
  subject: {
    subjectRef,
    subjectRevision: "fixture-r3",
    subjectDigest: "fixture-digest-r3",
    digestPosture: "fixture_identity_value_not_runtime_proof",
    bindingComparison: "not_performed_fixture_only",
  },
  observation: {
    state: "fresh",
    observedAt: "2026-01-15T12:00:00.000Z",
    freshUntil: "2026-01-15T12:05:00.000Z",
    freshnessBasis: "fixture_declared_interval",
  },
  applicability: "applicable",
  evidenceReferences: [
    {
      evidenceRef: evidenceRefA,
      posture: "reference_only_not_verified",
    },
  ],
  redactionPosture: "none",
  canonicalOutcome: null,
} satisfies PondProjectionEnvelope;

export const stageA4StaleProjectionEnvelopeFixture = {
  contractVersion: "pond-projection-envelope-a4",
  authority: "none",
  sourceClass: "fixture",
  sourceRef: projectionSourceRef,
  projectionMechanism: "fixture",
  trustPosture: "non_authoritative_fixture",
  sourceScopeRef: projectScopeRef,
  audiencePosture: "not_established",
  disclosurePosture: "fixture_only_no_release_established",
  subject: {
    subjectRef,
    subjectRevision: "fixture-r2",
    subjectDigest: "fixture-digest-r2",
    digestPosture: "fixture_identity_value_not_runtime_proof",
    bindingComparison: "not_performed_fixture_only",
  },
  observation: {
    state: "stale",
    observedAt: "2026-01-15T11:00:00.000Z",
    expiredAt: "2026-01-15T11:05:00.000Z",
    freshnessBasis: "fixture_declared_interval_expired",
  },
  applicability: "applicable",
  evidenceReferences: [
    {
      evidenceRef: evidenceRefA,
      posture: "reference_only_not_verified",
    },
  ],
  redactionPosture: "none",
  canonicalOutcome: "insufficient_evidence",
} satisfies PondProjectionEnvelope;

export const stageA4MissingProjectionEnvelopeFixture = {
  contractVersion: "pond-projection-envelope-a4",
  authority: "none",
  sourceClass: "fixture",
  sourceRef: projectionSourceRef,
  projectionMechanism: "fixture",
  trustPosture: "non_authoritative_fixture",
  sourceScopeRef: projectScopeRef,
  audiencePosture: "not_established",
  disclosurePosture: "fixture_only_no_release_established",
  subject: {
    subjectRef,
    subjectRevision: "fixture-expected-r3",
    subjectDigest: "fixture-expected-digest-r3",
    digestPosture: "fixture_identity_value_not_runtime_proof",
    bindingComparison: "not_performed_fixture_only",
  },
  observation: {
    state: "missing",
    freshnessBasis: "fixture_subject_not_observed",
  },
  applicability: "unknown",
  evidenceReferences: [],
  redactionPosture: "withheld",
  canonicalOutcome: "insufficient_evidence",
} satisfies PondProjectionEnvelope;

export const stageA4UnknownProjectionEnvelopeFixture = {
  contractVersion: "pond-projection-envelope-a4",
  authority: "none",
  sourceClass: "fixture",
  sourceRef: projectionSourceRef,
  projectionMechanism: "fixture",
  trustPosture: "non_authoritative_fixture",
  sourceScopeRef: projectScopeRef,
  audiencePosture: "not_established",
  disclosurePosture: "fixture_only_no_release_established",
  subject: {
    subjectRef,
    subjectRevision: "fixture-r3",
    subjectDigest: "fixture-digest-r3",
    digestPosture: "fixture_identity_value_not_runtime_proof",
    bindingComparison: "not_performed_fixture_only",
  },
  observation: {
    state: "unknown",
    freshnessBasis: "fixture_freshness_not_observable",
  },
  applicability: "unknown",
  evidenceReferences: [
    {
      evidenceRef: evidenceRefA,
      posture: "reference_only_not_verified",
    },
  ],
  redactionPosture: "redacted",
  canonicalOutcome: "insufficient_evidence",
} satisfies PondProjectionEnvelope;

export const stageA4ConflictingProjectionEnvelopeFixture = {
  contractVersion: "pond-projection-envelope-a4",
  authority: "none",
  sourceClass: "fixture",
  sourceRef: projectionSourceRef,
  projectionMechanism: "fixture",
  trustPosture: "non_authoritative_fixture",
  sourceScopeRef: projectScopeRef,
  audiencePosture: "not_established",
  disclosurePosture: "fixture_only_no_release_established",
  subject: {
    subjectRef,
    subjectRevision: "fixture-expected-r3",
    subjectDigest: "fixture-expected-digest-r3",
    digestPosture: "fixture_identity_value_not_runtime_proof",
    bindingComparison: "not_performed_fixture_only",
  },
  observation: {
    state: "conflicting",
    observations: [
      {
        observedAt: "2026-01-15T12:00:00.000Z",
        subjectRevision: "fixture-r2",
        subjectDigest: "fixture-digest-r2",
      },
      {
        observedAt: "2026-01-15T12:01:00.000Z",
        subjectRevision: "fixture-r3",
        subjectDigest: "fixture-digest-r3",
      },
    ],
    freshnessBasis: "fixture_conflict_requires_canonical_reconciliation",
    reconciliationPosture: "canonical_source_required_no_winner_selected",
  },
  applicability: "applicable",
  evidenceReferences: [
    {
      evidenceRef: evidenceRefA,
      posture: "reference_only_not_verified",
    },
    {
      evidenceRef: evidenceRefB,
      posture: "reference_only_not_verified",
    },
  ],
  redactionPosture: "none",
  canonicalOutcome: "insufficient_evidence",
} satisfies PondProjectionEnvelope;

export const stageA4ProjectionEnvelopeFixtureMatrix = [
  stageA4FreshProjectionEnvelopeFixture,
  stageA4StaleProjectionEnvelopeFixture,
  stageA4MissingProjectionEnvelopeFixture,
  stageA4UnknownProjectionEnvelopeFixture,
  stageA4ConflictingProjectionEnvelopeFixture,
] as const satisfies readonly PondProjectionEnvelope[];
