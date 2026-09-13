// Stage B3-P4A host-neutral sanitized receipt-reference projection contract.
//
// This contract makes an opaque fixture reference presentable while
// structurally excluding a receipt body. It is not a canonical receipt schema,
// receipt verification, proof binding, acceptance record, Grant, or authority.

import type {
  PondProjectionEnvelope,
  PondProjectionEvidenceRef,
  PondProjectionSubjectRef,
  PondScopeRef,
} from "./pond-projection-envelope.js";
import type { PondAgentRef, PondPrincipalRef } from "./pond-front-agent.js";
import type { PondGrantRef } from "./pond-relationship-projections.js";

declare const receiptRefBrand: unique symbol;

export type PondReceiptRef = string & {
  readonly [receiptRefBrand]: "PondReceiptRef";
};

export interface PondSanitizedReceiptReferenceProjection {
  readonly contractVersion: "pond-sanitized-receipt-reference-b3-p4a";
  readonly kind: "sanitized_receipt_reference";
  readonly receiptRef: PondReceiptRef;
  readonly receiptRefPosture: "opaque_fixture_identity_not_canonical_receipt_id_format";
  readonly sanitizationPosture: "structurally_bounded_reference_only_no_receipt_body";
  readonly sourceScopePosture: "preserved_by_a4_projection";
  readonly receiptStatePosture: "not_evaluated";
  readonly verificationPosture: "not_performed";
  readonly applicabilityEvaluationPosture: "not_performed";
  readonly acceptancePosture: "not_established";
  readonly authority: "none";
  readonly projection: PondProjectionEnvelope;
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

export type PondStageB3P4AInvariant_ReceiptRefIsString = Assert<
  Equal<PondReceiptRef extends string ? true : false, true>
>;
export type PondStageB3P4AInvariant_ReceiptRefNotScopeRef = Assert<
  Equal<Equal<PondReceiptRef, PondScopeRef>, false>
>;
export type PondStageB3P4AInvariant_ReceiptRefNotPrincipalRef = Assert<
  Equal<Equal<PondReceiptRef, PondPrincipalRef>, false>
>;
export type PondStageB3P4AInvariant_ReceiptRefNotAgentRef = Assert<
  Equal<Equal<PondReceiptRef, PondAgentRef>, false>
>;
export type PondStageB3P4AInvariant_ReceiptRefNotGrantRef = Assert<
  Equal<Equal<PondReceiptRef, PondGrantRef>, false>
>;
export type PondStageB3P4AInvariant_ReceiptRefNotProjectionSubjectRef = Assert<
  Equal<Equal<PondReceiptRef, PondProjectionSubjectRef>, false>
>;
export type PondStageB3P4AInvariant_ReceiptRefNotEvidenceRef = Assert<
  Equal<Equal<PondReceiptRef, PondProjectionEvidenceRef>, false>
>;
export type PondStageB3P4AInvariant_AuthorityNone = Assert<
  Equal<PondSanitizedReceiptReferenceProjection["authority"], "none">
>;
export type PondStageB3P4AInvariant_ComposesA4Envelope = Assert<
  Equal<
    PondSanitizedReceiptReferenceProjection["projection"],
    PondProjectionEnvelope
  >
>;
export type PondStageB3P4AInvariant_BodyStructurallyAbsent = Assert<
  Equal<
    PondSanitizedReceiptReferenceProjection["sanitizationPosture"],
    "structurally_bounded_reference_only_no_receipt_body"
  >
>;
export type PondStageB3P4AInvariant_ReceiptStateNotEvaluated = Assert<
  Equal<
    PondSanitizedReceiptReferenceProjection["receiptStatePosture"],
    "not_evaluated"
  >
>;
export type PondStageB3P4AInvariant_VerificationNotPerformed = Assert<
  Equal<
    PondSanitizedReceiptReferenceProjection["verificationPosture"],
    "not_performed"
  >
>;
export type PondStageB3P4AInvariant_ApplicabilityNotPerformed = Assert<
  Equal<
    PondSanitizedReceiptReferenceProjection["applicabilityEvaluationPosture"],
    "not_performed"
  >
>;
export type PondStageB3P4AInvariant_AcceptanceNotEstablished = Assert<
  Equal<
    PondSanitizedReceiptReferenceProjection["acceptancePosture"],
    "not_established"
  >
>;

type ForbiddenReceiptReferenceKeys =
  | "body"
  | "receiptBody"
  | "payload"
  | "content"
  | "claim"
  | "claims"
  | "result"
  | "approve"
  | "approval"
  | "approvalRef"
  | "grant"
  | "grantRef"
  | "execute"
  | "execution"
  | "mutate"
  | "mutation"
  | "authorize"
  | "authorized"
  | "isAuthorized"
  | "effectiveAuthority"
  | "credential"
  | "secret"
  | "token"
  | "signature"
  | "signer"
  | "wallet"
  | "transport"
  | "endpoint"
  | "persist"
  | "persistence";

export type PondStageB3P4AInvariant_NoBodyEffectOrAuthorityFields = Assert<
  Equal<
    HasAnyKey<
      PondSanitizedReceiptReferenceProjection,
      ForbiddenReceiptReferenceKeys
    >,
    false
  >
>;
