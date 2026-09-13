import type {
  PondProjectionEnvelope,
  PondProjectionSourceRef,
  PondProjectionSubjectRef,
} from "../contracts/pond-projection-envelope.js";
import type {
  PondReceiptRef,
  PondSanitizedReceiptReferenceProjection,
} from "../contracts/pond-sanitized-receipt-reference.js";
import { stageA7ProjectScopeXRef } from "./stage-a7-agent-descriptors.js";

const asReceiptRef = <T extends string>(value: T): T & PondReceiptRef =>
  value as T & PondReceiptRef;
const asProjectionSourceRef = <T extends string>(
  value: T,
): T & PondProjectionSourceRef => value as T & PondProjectionSourceRef;
const asProjectionSubjectRef = <T extends string>(
  value: T,
): T & PondProjectionSubjectRef => value as T & PondProjectionSubjectRef;

export const stageB3P4AReceiptRef = asReceiptRef(
  "receipt:fixture:stage-b3-p4a:reference-001",
);

const projection = {
  contractVersion: "pond-projection-envelope-a4",
  authority: "none",
  sourceClass: "fixture",
  sourceRef: asProjectionSourceRef(
    "projection-source:fixture:stage-b3-p4a:sanitized-receipt-reference",
  ),
  projectionMechanism: "fixture",
  trustPosture: "non_authoritative_fixture",
  sourceScopeRef: stageA7ProjectScopeXRef,
  audiencePosture: "not_established",
  disclosurePosture: "fixture_only_no_release_established",
  subject: {
    subjectRef: asProjectionSubjectRef(
      "sanitized-receipt-reference:fixture:stage-b3-p4a:001",
    ),
    subjectRevision: "fixture-b3-p4a-sanitized-receipt-reference-r1",
    subjectDigest: "fixture-digest:b3-p4a-sanitized-receipt-reference-r1",
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
  evidenceReferences: [],
  redactionPosture: "none",
  canonicalOutcome: null,
} as const satisfies PondProjectionEnvelope;

export const stageB3P4ASanitizedReceiptReference = {
  contractVersion: "pond-sanitized-receipt-reference-b3-p4a",
  kind: "sanitized_receipt_reference",
  receiptRef: stageB3P4AReceiptRef,
  receiptRefPosture: "opaque_fixture_identity_not_canonical_receipt_id_format",
  sanitizationPosture: "structurally_bounded_reference_only_no_receipt_body",
  sourceScopePosture: "preserved_by_a4_projection",
  receiptStatePosture: "not_evaluated",
  verificationPosture: "not_performed",
  applicabilityEvaluationPosture: "not_performed",
  acceptancePosture: "not_established",
  authority: "none",
  projection,
} as const satisfies PondSanitizedReceiptReferenceProjection;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageB3P4AFixtureInvariant_ReceiptIdentityExact = Assert<
  Equal<
    typeof stageB3P4ASanitizedReceiptReference["receiptRef"],
    typeof stageB3P4AReceiptRef
  >
>;
export type PondStageB3P4AFixtureInvariant_SourceScopeProjectX = Assert<
  Equal<
    typeof stageB3P4ASanitizedReceiptReference["projection"]["sourceScopeRef"],
    typeof stageA7ProjectScopeXRef
  >
>;
export type PondStageB3P4AFixtureInvariant_NoEvidenceReferences = Assert<
  Equal<
    typeof stageB3P4ASanitizedReceiptReference["projection"]["evidenceReferences"],
    readonly []
  >
>;
export type PondStageB3P4AFixtureInvariant_PosturesExact = Assert<
  Equal<
    [
      typeof stageB3P4ASanitizedReceiptReference["sanitizationPosture"],
      typeof stageB3P4ASanitizedReceiptReference["receiptStatePosture"],
      typeof stageB3P4ASanitizedReceiptReference["verificationPosture"],
      typeof stageB3P4ASanitizedReceiptReference["applicabilityEvaluationPosture"],
      typeof stageB3P4ASanitizedReceiptReference["acceptancePosture"],
      typeof stageB3P4ASanitizedReceiptReference["authority"],
    ],
    [
      "structurally_bounded_reference_only_no_receipt_body",
      "not_evaluated",
      "not_performed",
      "not_performed",
      "not_established",
      "none",
    ]
  >
>;
export type PondStageB3P4AFixtureInvariant_A4PosturesExact = Assert<
  Equal<
    [
      typeof stageB3P4ASanitizedReceiptReference["projection"]["observation"]["state"],
      typeof stageB3P4ASanitizedReceiptReference["projection"]["applicability"],
      typeof stageB3P4ASanitizedReceiptReference["projection"]["canonicalOutcome"],
      typeof stageB3P4ASanitizedReceiptReference["projection"]["authority"],
    ],
    ["fresh", "applicable", null, "none"]
  >
>;
