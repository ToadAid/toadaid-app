// Stage D-P19: the delivery-receipt lane — receiver-recorded, in-process
// delivery-evidence decisions over performed D-P18 dispatches.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/agent-to-agent-messaging-and-delivery-
// contract.md L200-205 ("Delivery evidence, retention, and disclosure" —
// this cut implements that law as its own governed lane: a delivery
// receipt or evidence record may prove that a message was accepted for
// delivery, refused, destination-resolved, delivered, or failed; it does
// not prove recipient agreement, task acceptance, capability
// authorization, action, payment, or result correctness — the declared
// receipt-state vocabulary below is that sentence's five states verbatim,
// and the does-not-prove family below is that sentence's refusal list
// verbatim), L204-205 ("Messages remain subject to … retention policy.
// Delivery does not grant indefinite retention" — the retention posture
// below), L186-190 (the two lifecycles must not collapse — a receipt is a
// delivery fact and never a consequence authorization), L192-195 (the
// replay/consumption law — one receipt per dispatch; a repeat is refused
// as the declarative basis `replayed_from_prior_receipt_decision`), L196-
// 199 (revocation before delivery denies — a receipt over a retracted
// session refuses through the dispatch re-run's own verdict), L231-239
// (transport neutrality — the receipt consumes L232's local in-process
// delivery; no transport is performed or evidenced here), L236-250 (the
// non-claims and deferrals: retention policy, attestation schema, and
// delivery-state host remain deferred wholesale; the governing sentence:
// "Delivery may carry governed information to an eligible audience. It
// never converts a message, identity, or request into authority to cause
// a consequence."), L28 of trusted-channel-separation-contract.md (the
// conversation-context channel class — a receipt records an in-process
// presentation fact and moves nothing between channel classes), L54-60 of
// scope-sovereignty-contract.md (an audience is never inferred — the
// receipt's subject agent is an identity echo of the certified candidate's
// own addressed agent, never a receipt-side audience field), L325-333 of
// delegated-authority-lifecycle.md (message delivery consumes no grant —
// a receipt consumes even less), and L49-55 and L109 of evidence-
// activation-contract.md (the independent inspection IS the re-run — on
// every arm).
//
// The derivation law lives in contracts/derived-evidence-contract.md and
// is load-bearing for this cut: the core law (a security-relevant evidence
// claim must be derived from the observation or enforcement mechanism it
// describes — this receipt certifies a dispatch by re-running the frozen
// D-P18 ceremony itself, never from a developer-authored value plus an
// author-authored basis), the single-source requirement (where a canonical
// classifier or observation already exists, downstream receipts must
// consume that result — the frozen D-P18 assessor is that classifier), the
// contradiction refusal ("a proof binding is asserted without a performed
// comparison" fails closed — the proof-binding check below refuses a
// record whose comparison fields do not establish the comparison), the
// proof-binding minimum (expected proof identity, actual subject identity,
// comparison performed, comparison result — the record's proofBinding
// carries exactly that), and the historical-correction law (a historical
// receipt is preserved, never silently rewritten or deleted; it is
// evidence of what the software recorded at issuance and is not
// automatically evidence that every recorded claim was true — this cut
// freezes receipts at issuance and re-presents them verbatim on every
// later read, marked honest: never re-assessed for validity, never
// staleness-denied, never deleted).
//
// Recorded law silences. No canonical law defines an app-side
// delivery-receipt record shape, a receipt issuance ceremony, a receipt
// state selection policy (which states are performable), a receipt event
// freshness basis, or a receipt presentation mark (retention policy itself
// is deferred wholesale by L250). Every literal below is a
// receiver-recorded app-side decision, exercised as refusal vocabulary,
// not as new authority.
//
// What the cut performs. The receiver records one receipt — state
// `delivered`, the only performable state this cut — over a dispatch
// decision that is CURRENTLY performed at the receipt evaluation instant.
// The ceremony re-runs — through its own seam — the frozen D-P18 dispatch
// decision over the SAME dispatch input and the SAME re-timed evaluation
// pair (the design-B per-assessment re-timing precedent), and that re-run
// re-runs the frozen D-P17/D-P16/D-P15 chain inside it. A dispatch that is
// not currently performed can never carry a receipt, and the re-run's own
// verdict is carried verbatim as the mapped echo. One receipt per
// dispatch: the shell module records the refused replayed basis
// (`replayed_from_prior_receipt_decision`, an element of the refused
// vocabulary below) when a repeat is attempted, and this ceremony refuses
// it at the declarative basis check. The receipt proves delivery happened
// — at issuance — and nothing else: no recipient agreement, no task
// acceptance, no capability authorization, no action, no payment, no
// result correctness, no grant, no consequence, no membership, no
// admission, no cognition runtime, no authority. A receipt recorded in
// the live session is historical evidence from that moment on: its facts
// are preserved verbatim on every later read even after the session ends,
// presented inspection-only out of session, never re-assessed for
// validity, never deleted.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type { PondDispatchDecisionAssessment } from "./pond-dispatch-decision.js";
import {
  assessPondDispatchDecision,
  POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS,
} from "./pond-dispatch-decision.ts";

// The receipt basis vocabulary: one true receiver-observed basis and four
// refused bases. The receipt is a receiver-recorded observation of the
// in-process delivery completing — nothing in the dispatch posture, a
// model completion, a third party, or a replay of a prior receipt may
// issue it (derived-evidence core law; the replay is refused per the
// replay/consumption law L192-195).
export type PondDeliveryReceiptBasis =
  | "receiver_observed_in_process_delivery_completed_not_inferred"
  | "inferred_from_dispatch_posture"
  | "asserted_by_model_completion"
  | "claimed_by_third_party_observer"
  | "replayed_from_prior_receipt_decision";

// The receipt-state vocabulary: the canonical five states of
// agent-to-agent L203, declared VERBATIM — receipt and evidence records
// "may prove that a message was accepted for delivery, refused,
// destination-resolved, delivered, or failed". Exactly one state is
// performable this cut (`delivered` — the receiver observed the in-process
// presentation complete); nothing outside `delivered` records here, and
// the declared vocabulary stays complete because a wider later state is a
// state of THIS vocabulary, not a new one.
export type PondDeliveryReceiptState =
  | "accepted_for_delivery"
  | "refused"
  | "destination_resolved"
  | "delivered"
  | "failed";

export const POND_STAGE_DP19_DECLARED_RECEIPT_STATES = Object.freeze([
  "accepted_for_delivery",
  "refused",
  "destination_resolved",
  "delivered",
  "failed",
] as const);

// The performable-state selection: receiver-recorded (the law is silent on
// which states are performable per cut; only `delivered` exists to record
// over an in-process delivery this cut).
export const POND_STAGE_DP19_PERFORMABLE_RECEIPT_STATES = Object.freeze([
  "delivered",
] as const);

const receiptStateVocabulary = [
  "accepted_for_delivery",
  "refused",
  "destination_resolved",
  "delivered",
  "failed",
];

// The receiver-recorded receipt-event metadata: the receipt event's own
// time source, its freshness basis (event time only — the D-P2 ordering),
// and the explicit currentness posture: a receipt is historical evidence
// at issuance, never current truth.
export interface PondDeliveryReceiptEventMetadata {
  readonly recorded_at_epoch_ms: number;
  readonly freshness_basis: "delivery_receipt_event_time_only";
  readonly currentness_posture: "historical_evidence_at_issuance_not_current_truth";
}

// The proof binding (derived-evidence "Proof bindings"): a receipt claim
// bound to a proof must record enough information to establish that the
// comparison occurred — expected proof identity, actual subject identity,
// comparison performed, comparison result. A bare reference string is not
// itself evidence of a binding; these fields are.
export interface PondDeliveryReceiptProofBinding {
  readonly expectedDispatchDecisionVersion: "pond-dispatch-decision-d-p18";
  readonly expectedDispatchState: "dispatch_performed_session_scoped_in_process_no_receipt";
  readonly actualSubjectCandidateVersion: "pond-delivery-candidate-decision-d-p17";
  readonly comparisonPerformed: true;
  readonly comparisonResult:
    | "dispatch_reassessment_agrees_with_the_recorded_dispatch_identity"
    | "dispatch_reassessment_refuses_the_recorded_dispatch_identity";
}

// The receiver-recorded delivery receipt: 12 exact keys. The subject
// agent (`deliveredToAgentRef`) and the dispatch event instant are
// identity echoes the proof-binding check verifies against the reassessed
// dispatch — never a receipt-side audience field (the audience flows only
// through the certified candidate's own addressedAgentRef).
export interface PondDeliveryReceipt {
  readonly contractVersion: "pond-delivery-receipt-d-p19";
  readonly kind: "pond-delivery-receipt";
  readonly receiptBasis: PondDeliveryReceiptBasis;
  readonly receiptState: PondDeliveryReceiptState;
  readonly deliveryReceiptMetadata: PondDeliveryReceiptEventMetadata;
  readonly proofBinding: PondDeliveryReceiptProofBinding;
  readonly deliveredToAgentRef: string;
  readonly dispatchedAtEventEpochMs: number;
  readonly receiptRetentionPosture: "receipt_is_module_state_process_lifetime_no_indefinite_retention_delivery_does_not_grant_retention";
  readonly receiptPresentationPosture: "receipt_presented_as_historical_evidence_at_issuance_out_of_session_rows_show_inspection_only";
  readonly receiptAuthorityPosture: "receipt_establishes_no_authority_agreement_acceptance_or_rights";
  readonly authority: "none";
}

// Receiver-owned receipt checks (L49-55).
export type PondDeliveryReceiptCheck =
  | "receipt_record_well_formed"
  | "receipt_derives_from_currently_performed_dispatch"
  | "receipt_state_performable_this_cut"
  | "receipt_basis_receiver_observed_not_inferred"
  | "receipt_proof_binding_agrees_with_dispatch_reassessment"
  | "receipt_event_own_freshness_within_declared_maximum_age"
  | "receipt_event_after_the_dispatch_it_certifies";

// The receipt-decision input: 16 exact keys — the full D-P18 dispatch
// decision input (the shape the dispatch module stores, verbatim) plus the
// receipt record. One evaluation pair serves the receipt event's freshness,
// the dispatch event's re-diagnosed freshness, and every leg's re-run
// inside the reassessment.
export interface PondDeliveryReceiptDecisionInput {
  readonly deliveryCandidate: unknown;
  readonly dispatchMetadata: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly readGateRecord: unknown;
  readonly establishmentRecord: unknown;
  readonly dp5CeremonyRecord: unknown;
  readonly dp6ObservationRecord: unknown;
  readonly dp8VerifierRecord: unknown;
  readonly dp8ProofRecord: unknown;
  readonly dp9IssuanceRecord: unknown;
  readonly dp9MappingRecord: unknown;
  readonly dp10ActivationRecord: unknown;
  readonly receiverRetractionRecord: unknown;
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
  readonly deliveryReceipt: unknown;
}

// The receipt decision assessment.
export interface PondDeliveryReceiptAssessment {
  readonly contractVersion: "pond-delivery-receipt-d-p19";
  readonly receiptDecisionVersion: "pond-delivery-receipt-d-p19" | "invalid";
  readonly assessmentKind: "deterministic_supplied_delivery_receipt";
  readonly receiptState:
    | "receipt_not_recorded"
    | "receipt_recorded_session_scoped_historical_evidence";
  readonly reason:
    | "receipt_record_invalid"
    | "dispatch_reassessment_not_performed"
    | "receipt_state_not_performable_this_cut"
    | "receipt_event_not_session_current"
    | "receipt_event_not_of_the_current_dispatch_scope"
    | "receipt_proof_binding_disagrees_with_dispatch_reassessment"
    | "receiver_receipt_proof_incomplete"
    | "all_receipt_checks_satisfied";
  readonly receiptEventFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // Mapped echo fields: the frozen D-P18 re-run's own fields carried
  // verbatim on every arm — its dispatch state and reason, and ITS OWN
  // mapped echoes (the D-P17 candidate verdict and the D-P15/D-P16 leg
  // echoes), so a refusal three depths down stays readable at this cut
  // without new literals for it. Field names stay this cut's own; the
  // frozen carrier names are never re-declared here.
  readonly mappedDispatchState: PondDispatchDecisionAssessment["dispatchState"];
  readonly mappedDispatchReason: PondDispatchDecisionAssessment["reason"];
  readonly mappedCandidateState: PondDispatchDecisionAssessment["mappedCandidateState"];
  readonly mappedCandidateReassessmentReason: PondDispatchDecisionAssessment["mappedCandidateReassessmentReason"];
  readonly mappedEstablishmentState: PondDispatchDecisionAssessment["mappedEstablishmentState"];
  readonly mappedEstablishmentReason: PondDispatchDecisionAssessment["mappedEstablishmentReason"];
  readonly mappedReadGateState: PondDispatchDecisionAssessment["mappedReadGateState"];
  readonly mappedReadGateReason: PondDispatchDecisionAssessment["mappedReadGateReason"];
  readonly satisfiedChecks: readonly PondDeliveryReceiptCheck[];
  readonly unsatisfiedChecks: readonly PondDeliveryReceiptCheck[];
  // The does-not-prove ceiling: the agent-to-agent L203 refusal list
  // verbatim — a receipt never proves recipient agreement, task
  // acceptance, capability authorization, action, payment, or result
  // correctness — plus the inherited ceiling: the receipt establishes no
  // grant, consequence or execution, membership or admission, scope,
  // cognition runtime, or prose authority, and admits no credential, no
  // PrincipalId authorization, no personal memory content, and no current
  // truth (agent-to-agent L186-190, L200-205, L236-250; delegated-
  // authority L325-333; runtime-allocation L481). Admitting the receipt is
  // THIS lane's own job — the assessment carries no "no receipt" literal;
  // the D-P18 assessment's own `dispatchReceiptAdmitted: false` pin is
  // untouched above it.
  readonly receiptProvesRecipientAgreement: false;
  readonly receiptProvesTaskAcceptance: false;
  readonly receiptProvesCapabilityAuthorization: false;
  readonly receiptProvesAction: false;
  readonly receiptProvesPayment: false;
  readonly receiptProvesResultCorrectness: false;
  readonly receiptEstablishesGrant: false;
  readonly receiptEstablishesConsequenceOrExecution: false;
  readonly receiptEstablishesMembershipOrAdmission: false;
  readonly receiptEstablishesScope: false;
  readonly receiptEstablishesAgentCognitionRuntime: false;
  readonly receiptEstablishesAuthorityFromProse: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

// The forbidden-key inventory: the frozen D-P18 union plus the four
// receipt keys this lane exists to refuse — signed, chained, and payment
// receipts are evidence classes with their own deferred lanes, and a
// result proof would prove exactly what L203 forbids.
export const POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS = Object.freeze([
  ...POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS,
  "receiptSignature",
  "receiptChain",
  "paymentReceipt",
  "resultProof",
] as const);

const receiptChecks = Object.freeze([
  "receipt_record_well_formed",
  "receipt_derives_from_currently_performed_dispatch",
  "receipt_state_performable_this_cut",
  "receipt_basis_receiver_observed_not_inferred",
  "receipt_proof_binding_agrees_with_dispatch_reassessment",
  "receipt_event_own_freshness_within_declared_maximum_age",
  "receipt_event_after_the_dispatch_it_certifies",
] as const satisfies readonly PondDeliveryReceiptCheck[]);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;

const exactArray = (value: unknown, expected: readonly string[]) =>
  Array.isArray(value) &&
  value.length === expected.length &&
  value.every((entry, index) => entry === expected[index]);

const exactKeys = (
  value: Record<string, unknown>,
  expected: readonly string[],
) => exactArray(Object.keys(value).sort(), [...expected].sort());

const hasForbiddenKey = (
  value: unknown,
  forbidden: readonly string[],
): boolean => {
  const stack: unknown[] = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
};

const wellFormedAgentRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("agent:") &&
  value.length > "agent:".length;

const safeNonNegativeInteger = (value: unknown): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0;

// The D-P2 freshness diagnosis, reimplemented with the same ordering and
// literals over the receipt-event metadata: metadata, then evaluation
// time, then maximum age, then future time; the fresh boundary is
// inclusive. A diagnosis is a diagnosis, never an admission.
const diagnoseReceiptFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.recorded_at_epoch_ms) ||
    checked.freshness_basis !== "delivery_receipt_event_time_only" ||
    checked.currentness_posture !==
      "historical_evidence_at_issuance_not_current_truth"
  )
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null,
    });
  if (!safeNonNegativeInteger(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null,
    });
  if (!safeNonNegativeInteger(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null,
    });
  const recordedAt = checked.recorded_at_epoch_ms as number;
  if (recordedAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - recordedAt;
  return Object.freeze(
    age <= (maximumAgeMs as number)
      ? {
          state: "fresh",
          reason: "within_declared_maximum_age",
          observationAgeMs: age,
        }
      : {
          state: "stale",
          reason: "declared_maximum_age_expired",
          observationAgeMs: age,
        },
  );
};

const receiptBasisVocabulary = [
  "receiver_observed_in_process_delivery_completed_not_inferred",
  "inferred_from_dispatch_posture",
  "asserted_by_model_completion",
  "claimed_by_third_party_observer",
  "replayed_from_prior_receipt_decision",
];

const receiptRetentionVocabulary = [
  "receipt_is_module_state_process_lifetime_no_indefinite_retention_delivery_does_not_grant_retention",
];
const receiptPresentationVocabulary = [
  "receipt_presented_as_historical_evidence_at_issuance_out_of_session_rows_show_inspection_only",
];
const receiptAuthorityVocabulary = [
  "receipt_establishes_no_authority_agreement_acceptance_or_rights",
];

// The three declarative-refusal posture fields: each field must carry a
// string in its own class for the receipt record to be validly shaped, and
// the posture completeness rides inside the well-formed check below.
const refusalPosturesAllValidVocabulary = (
  recordValue: Record<string, unknown>,
): boolean =>
  [
    [receiptRetentionVocabulary, recordValue.receiptRetentionPosture],
    [receiptPresentationVocabulary, recordValue.receiptPresentationPosture],
    [receiptAuthorityVocabulary, recordValue.receiptAuthorityPosture],
  ].every(([vocabulary, value]) =>
    (vocabulary as readonly string[]).includes(String(value)),
  );

const refusalPosturesComplete = (recordValue: Record<string, unknown>) =>
  recordValue.receiptRetentionPosture ===
    "receipt_is_module_state_process_lifetime_no_indefinite_retention_delivery_does_not_grant_retention" &&
  recordValue.receiptPresentationPosture ===
    "receipt_presented_as_historical_evidence_at_issuance_out_of_session_rows_show_inspection_only" &&
  recordValue.receiptAuthorityPosture ===
    "receipt_establishes_no_authority_agreement_acceptance_or_rights";

const exactReceiptEventMetadata = (value: unknown): boolean => {
  const metadataValue = record(value);
  return (
    metadataValue !== null &&
    exactKeys(metadataValue, [
      "recorded_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadataValue.recorded_at_epoch_ms) &&
    metadataValue.freshness_basis === "delivery_receipt_event_time_only" &&
    metadataValue.currentness_posture ===
      "historical_evidence_at_issuance_not_current_truth"
  );
};

const exactProofBinding = (value: unknown): boolean => {
  const bindingValue = record(value);
  return (
    bindingValue !== null &&
    exactKeys(bindingValue, [
      "expectedDispatchDecisionVersion",
      "expectedDispatchState",
      "actualSubjectCandidateVersion",
      "comparisonPerformed",
      "comparisonResult",
    ]) &&
    bindingValue.expectedDispatchDecisionVersion ===
      "pond-dispatch-decision-d-p18" &&
    bindingValue.expectedDispatchState ===
      "dispatch_performed_session_scoped_in_process_no_receipt" &&
    bindingValue.actualSubjectCandidateVersion ===
      "pond-delivery-candidate-decision-d-p17" &&
    bindingValue.comparisonPerformed === true &&
    ["dispatch_reassessment_agrees_with_the_recorded_dispatch_identity", "dispatch_reassessment_refuses_the_recorded_dispatch_identity"].includes(
      String(bindingValue.comparisonResult),
    )
  );
};

// Valid vocabulary shapes only — receipt-record validity, not receipt
// admission. The dispatch under the receipt is the re-run's material, not
// this check's. Validity of the DECLARED state checks membership in the
// canonical five-state vocabulary — a state outside the vocabulary never
// becomes the dedicated not-performable cause below, it renders the whole
// record invalid: only real states of the canonical vocabulary are states
// of a receipt record.
const validReceiptRecord = (value: unknown): boolean => {
  const receiptValue = record(value);
  return (
    receiptValue !== null &&
    exactKeys(receiptValue, [
      "contractVersion",
      "kind",
      "receiptBasis",
      "receiptState",
      "deliveryReceiptMetadata",
      "proofBinding",
      "deliveredToAgentRef",
      "dispatchedAtEventEpochMs",
      "receiptRetentionPosture",
      "receiptPresentationPosture",
      "receiptAuthorityPosture",
      "authority",
    ]) &&
    receiptValue.contractVersion === "pond-delivery-receipt-d-p19" &&
    receiptValue.kind === "pond-delivery-receipt" &&
    receiptBasisVocabulary.includes(String(receiptValue.receiptBasis)) &&
    receiptStateVocabulary.includes(String(receiptValue.receiptState)) &&
    exactReceiptEventMetadata(receiptValue.deliveryReceiptMetadata) &&
    exactProofBinding(receiptValue.proofBinding) &&
    wellFormedAgentRef(receiptValue.deliveredToAgentRef) &&
    safeNonNegativeInteger(receiptValue.dispatchedAtEventEpochMs) &&
    refusalPosturesAllValidVocabulary(receiptValue) &&
    refusalPosturesComplete(receiptValue) &&
    receiptValue.authority === "none" &&
    !hasForbiddenKey(receiptValue, POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS)
  );
};

// The D-P18 dispatch legs, verbatim: the receipt's re-run consumes the
// canonical classifier over the SAME dispatch input the shell module
// stored — the 15 dispatch keys, never the receipt key.
const fullDispatchLegs = (input: PondDeliveryReceiptDecisionInput) =>
  ({
    deliveryCandidate: input.deliveryCandidate,
    dispatchMetadata: input.dispatchMetadata,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    readGateRecord: input.readGateRecord,
    establishmentRecord: input.establishmentRecord,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp6ObservationRecord: input.dp6ObservationRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    dp10ActivationRecord: input.dp10ActivationRecord,
    receiverRetractionRecord: input.receiverRetractionRecord,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  }) as const;

// The mapped echo shapes (the D-P18 mapped precedent — typed to the frozen
// reassessment so a drift is a compile error, values carried verbatim from
// its fields, including ITS mapped echoes verbatim). Field names stay
// generic; the frozen names the echoes read are tied through quoted-index
// reads in the builder, never re-declared as this cut's own names and
// never dotted here.
interface PondMappedDispatchEcho {
  readonly state: PondDispatchDecisionAssessment["dispatchState"];
  readonly reason: PondDispatchDecisionAssessment["reason"];
}

interface PondMappedCandidateEcho {
  readonly state: PondDispatchDecisionAssessment["mappedCandidateState"];
  readonly reason: PondDispatchDecisionAssessment["mappedCandidateReassessmentReason"];
}

interface PondMappedEstablishmentEcho {
  readonly state: PondDispatchDecisionAssessment["mappedEstablishmentState"];
  readonly reason: PondDispatchDecisionAssessment["mappedEstablishmentReason"];
}

interface PondMappedReadGateEcho {
  readonly state: PondDispatchDecisionAssessment["mappedReadGateState"];
  readonly reason: PondDispatchDecisionAssessment["mappedReadGateReason"];
}

const receiptAssessment = (
  reason: PondDeliveryReceiptAssessment["reason"],
  receiptDecisionVersion: PondDeliveryReceiptAssessment["receiptDecisionVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedDispatch: PondMappedDispatchEcho,
  mappedCandidate: PondMappedCandidateEcho,
  mappedEstablishment: PondMappedEstablishmentEcho,
  mappedReadGate: PondMappedReadGateEcho,
  satisfiedChecks: readonly PondDeliveryReceiptCheck[],
  unsatisfiedChecks: readonly PondDeliveryReceiptCheck[],
): PondDeliveryReceiptAssessment => {
  const recorded = reason === "all_receipt_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-delivery-receipt-d-p19",
    receiptDecisionVersion,
    assessmentKind: "deterministic_supplied_delivery_receipt",
    receiptState: recorded
      ? "receipt_recorded_session_scoped_historical_evidence"
      : "receipt_not_recorded",
    reason,
    receiptEventFreshnessDiagnosis: diagnosis,
    mappedDispatchState: mappedDispatch.state,
    mappedDispatchReason: mappedDispatch.reason,
    mappedCandidateState: mappedCandidate.state,
    mappedCandidateReassessmentReason: mappedCandidate.reason,
    mappedEstablishmentState: mappedEstablishment.state,
    mappedEstablishmentReason: mappedEstablishment.reason,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReason: mappedReadGate.reason,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // A recorded receipt proves delivery happened at issuance and nothing
    // else: the L203 refusal list verbatim, plus the inherited ceiling.
    // No grant, consequence, membership, admission, scope, cognition
    // runtime, prose authority, credential, PrincipalId authorization,
    // memory content, or current truth is established (agent-to-agent
    // L186-190, L200-205, L236-250; delegated-authority L325-333;
    // runtime-allocation L481).
    receiptProvesRecipientAgreement: false,
    receiptProvesTaskAcceptance: false,
    receiptProvesCapabilityAuthorization: false,
    receiptProvesAction: false,
    receiptProvesPayment: false,
    receiptProvesResultCorrectness: false,
    receiptEstablishesGrant: false,
    receiptEstablishesConsequenceOrExecution: false,
    receiptEstablishesMembershipOrAdmission: false,
    receiptEstablishesScope: false,
    receiptEstablishesAgentCognitionRuntime: false,
    receiptEstablishesAuthorityFromProse: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondDeliveryReceiptDecision(
  input: PondDeliveryReceiptDecisionInput,
): PondDeliveryReceiptAssessment {
  // The fail-closed gate on the input object itself: garbage never throws
  // — a non-object input degrades to an empty record the validation and
  // re-runs refuse honestly (the D-P8 fail-closed discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondDeliveryReceiptDecisionInput;
  // The echoes are computed on every arm, before any cause is chosen: a
  // broken receipt never unbinds the receiver's records, and an invalid
  // arm still diagnoses (D-P13 echo discipline). The dispatch re-run goes
  // through this contract's own seam (evidence-activation L109 — the
  // independent inspection IS the re-run; derived-evidence single-source —
  // the receipt consumes the canonical classifier's result): the frozen
  // D-P18 ceremony re-runs itself over the SAME dispatch input and the
  // SAME re-timed evaluation pair, and inside it the frozen D-P17
  // candidate decision, the frozen D-P16 record admission, the D-P15 read
  // gate, and the establishment chain re-run again.
  const dispatchReassessment = assessPondDispatchDecision(
    fullDispatchLegs(input),
  );
  const mappedDispatch: PondMappedDispatchEcho = {
    state: dispatchReassessment["dispatchState"],
    reason: dispatchReassessment["reason"],
  };
  const mappedCandidate: PondMappedCandidateEcho = {
    state: dispatchReassessment["mappedCandidateState"],
    reason: dispatchReassessment["mappedCandidateReassessmentReason"],
  };
  const mappedEstablishment: PondMappedEstablishmentEcho = {
    state: dispatchReassessment["mappedEstablishmentState"],
    reason: dispatchReassessment["mappedEstablishmentReason"],
  };
  const mappedReadGate: PondMappedReadGateEcho = {
    state: dispatchReassessment["mappedReadGateState"],
    reason: dispatchReassessment["mappedReadGateReason"],
  };
  // The D-P16 fallback pattern: diagnose the raw evaluation pair even when
  // the receipt event never becomes valid, so every arm carries an honest
  // receipt-event diagnosis.
  const fallbackDiagnosis = diagnoseReceiptFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validReceiptRecord(input.deliveryReceipt))
    return receiptAssessment(
      "receipt_record_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedDispatch,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      [],
      receiptChecks,
    );
  const receiptValue = input.deliveryReceipt as Record<string, unknown>;
  const receiptEventMetadata = record(receiptValue["deliveryReceiptMetadata"]);
  const bindingValue = record(receiptValue["proofBinding"]);

  // The receipt event's own diagnosis first as data: the metadata is valid
  // already, so the diagnosis (fresh or not) is honest on every remaining
  // arm — but the dispatch reassessment outranks it in the ladder (a
  // receipt is evidence of a delivery stage whose dispatch must be
  // currently performed; L200-205), so a not-currently-performed dispatch
  // refuses before the event's freshness is even asked, with the event
  // diagnosis still readable.
  const receiptDiagnosis = diagnoseReceiptFreshness(
    receiptEventMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );

  // The frozen D-P18 re-run's verdict is the verdict: a dispatch that is
  // not currently performed at the receipt evaluation instant can never
  // carry a receipt, and the re-run's own reason (its candidate cause, its
  // gate cause, its event cause, or its own invalid cause) is carried
  // verbatim as the mapped reassessment reason — the honest echo.
  if (
    dispatchReassessment["dispatchState"] !==
    "dispatch_performed_session_scoped_in_process_no_receipt"
  )
    return receiptAssessment(
      "dispatch_reassessment_not_performed",
      "pond-delivery-receipt-d-p19",
      receiptDiagnosis,
      mappedDispatch,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      [],
      receiptChecks,
    );

  // Receipt-state selection: the canonical vocabulary is wide, this cut is
  // narrow. Only `delivered` records here — the receiver observed the
  // in-process delivery complete — and any other state of the declared
  // vocabulary refuses at its dedicated cause (no machinery for
  // acceptance-refusal, destination resolution, or failure exists
  // in-process this cut).
  if (receiptValue["receiptState"] !== "delivered")
    return receiptAssessment(
      "receipt_state_not_performable_this_cut",
      "pond-delivery-receipt-d-p19",
      receiptDiagnosis,
      mappedDispatch,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      [],
      receiptChecks,
    );

  // The receipt event's own freshness — the newest event in the chain.
  // A future or stale receipt event refuses here; the D-P18 lesson
  // applies verbatim (under one shared maximum age, receipt-event
  // staleness implies every older event is staler, so the isolation of
  // this cause is by ladder order).
  if (receiptDiagnosis.state !== "fresh")
    return receiptAssessment(
      "receipt_event_not_session_current",
      "pond-delivery-receipt-d-p19",
      receiptDiagnosis,
      mappedDispatch,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      [],
      receiptChecks,
    );

  // Dispatch-scope binding for the receipt event: the receipt must
  // postdate the dispatch event it certifies — a receipt recorded before
  // the dispatch it would certify is not in the dispatch's scope. The
  // dispatch event instant is read through the validated dispatch
  // metadata; the receipt's own declared echo of it must agree (the
  // subject identity of the proof binding).
  const dispatchMetadata = record(input.dispatchMetadata);
  const dispatchedAt = (dispatchMetadata ?? {})[
    "dispatched_at_epoch_ms"
  ] as number | undefined;
  const receiptRecordedAt = receiptEventMetadata?.[
    "recorded_at_epoch_ms"
  ] as number | undefined;
  if (
    typeof dispatchedAt !== "number" ||
    typeof receiptRecordedAt !== "number" ||
    receiptRecordedAt < dispatchedAt
  )
    return receiptAssessment(
      "receipt_event_not_of_the_current_dispatch_scope",
      "pond-delivery-receipt-d-p19",
      receiptDiagnosis,
      mappedDispatch,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      [],
      receiptChecks,
    );

  // The proof-binding agreement (derived-evidence "Proof bindings"): the
  // receipt's performed comparison must agree with the reassessed
  // dispatch — the expected proof identity against the re-run's own
  // contract version and dispatch state, the actual subject candidate
  // version against the certified candidate's own dv, and the subject
  // identity fields against the reassessed candidate's own addressed
  // agent and the validated dispatch event's own instant. A receipt whose
  // comparison does not establish this agreement fails closed.
  const candidateValue = input.deliveryCandidate as Record<string, unknown>;
  const proofBindingAgrees =
    bindingValue?.["expectedDispatchDecisionVersion"] ===
      dispatchReassessment["contractVersion"] &&
    bindingValue?.["expectedDispatchState"] ===
      dispatchReassessment["dispatchState"] &&
    bindingValue?.["actualSubjectCandidateVersion"] ===
      candidateValue["contractVersion"] &&
    bindingValue?.["comparisonResult"] ===
      "dispatch_reassessment_agrees_with_the_recorded_dispatch_identity" &&
    receiptValue["deliveredToAgentRef"] ===
      candidateValue["addressedAgentRef"] &&
    receiptValue["dispatchedAtEventEpochMs"] === dispatchedAt;
  if (!proofBindingAgrees)
    return receiptAssessment(
      "receipt_proof_binding_disagrees_with_dispatch_reassessment",
      "pond-delivery-receipt-d-p19",
      receiptDiagnosis,
      mappedDispatch,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      [],
      receiptChecks,
    );

  // The remaining declarative check, evaluated honestly over the
  // validated record and the re-run verdict: the refused bases fold here
  // with the unsatisfied check name readable (L49-55 — every leg green
  // except the declarative check that failed), never behind a defensive
  // literal.
  const values = [
    true,
    dispatchReassessment["dispatchState"] ===
      "dispatch_performed_session_scoped_in_process_no_receipt",
    receiptValue["receiptState"] === "delivered",
    receiptValue["receiptBasis"] ===
      "receiver_observed_in_process_delivery_completed_not_inferred",
    proofBindingAgrees,
    receiptDiagnosis.state === "fresh",
    typeof dispatchedAt === "number" &&
      typeof receiptRecordedAt === "number" &&
      receiptRecordedAt >= dispatchedAt,
  ];
  const satisfied = receiptChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = receiptChecks.filter(
    (_, index) => values[index] !== true,
  );
  return receiptAssessment(
    unsatisfied.length === 0
      ? "all_receipt_checks_satisfied"
      : "receiver_receipt_proof_incomplete",
    "pond-delivery-receipt-d-p19",
    receiptDiagnosis,
    mappedDispatch,
    mappedCandidate,
    mappedEstablishment,
    mappedReadGate,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. A recorded receipt is delivery
// evidence only; it never proves recipient agreement, task acceptance,
// capability authorization, action, payment, or result correctness; it
// never establishes a grant, a consequence or execution, a membership or
// admission, a scope, a cognition runtime, or prose authority; and it
// admits no credential, no PrincipalId authorization, no personal memory
// content, and no current truth.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP19Invariant_ChecksExact = Assert<
  Equal<
    PondDeliveryReceiptCheck,
    | "receipt_record_well_formed"
    | "receipt_derives_from_currently_performed_dispatch"
    | "receipt_state_performable_this_cut"
    | "receipt_basis_receiver_observed_not_inferred"
    | "receipt_proof_binding_agrees_with_dispatch_reassessment"
    | "receipt_event_own_freshness_within_declared_maximum_age"
    | "receipt_event_after_the_dispatch_it_certifies"
  >
>;
export type PondStageDP19Invariant_StatesExact = Assert<
  Equal<
    PondDeliveryReceiptAssessment["receiptState"],
    | "receipt_not_recorded"
    | "receipt_recorded_session_scoped_historical_evidence"
  >
>;
export type PondStageDP19Invariant_ReasonsExact = Assert<
  Equal<
    PondDeliveryReceiptAssessment["reason"],
    | "receipt_record_invalid"
    | "dispatch_reassessment_not_performed"
    | "receipt_state_not_performable_this_cut"
    | "receipt_event_not_session_current"
    | "receipt_event_not_of_the_current_dispatch_scope"
    | "receipt_proof_binding_disagrees_with_dispatch_reassessment"
    | "receiver_receipt_proof_incomplete"
    | "all_receipt_checks_satisfied"
  >
>;
export type PondStageDP19Invariant_PerformableStatesExact = Assert<
  Equal<
    (typeof POND_STAGE_DP19_PERFORMABLE_RECEIPT_STATES)[number],
    "delivered"
  >
>;
export type PondStageDP19Invariant_ProofBindingExact = Assert<
  Equal<
    PondDeliveryReceiptProofBinding,
    {
      readonly expectedDispatchDecisionVersion: "pond-dispatch-decision-d-p18";
      readonly expectedDispatchState: "dispatch_performed_session_scoped_in_process_no_receipt";
      readonly actualSubjectCandidateVersion: "pond-delivery-candidate-decision-d-p17";
      readonly comparisonPerformed: true;
      readonly comparisonResult:
        | "dispatch_reassessment_agrees_with_the_recorded_dispatch_identity"
        | "dispatch_reassessment_refuses_the_recorded_dispatch_identity";
    }
  >
>;
export type PondStageDP19Invariant_MappedDispatchStateTiedToDP18 = Assert<
  Equal<
    PondDeliveryReceiptAssessment["mappedDispatchState"],
    PondDispatchDecisionAssessment["dispatchState"]
  >
>;
export type PondStageDP19Invariant_MappedDispatchReasonTiedToDP18 = Assert<
  Equal<
    PondDeliveryReceiptAssessment["mappedDispatchReason"],
    PondDispatchDecisionAssessment["reason"]
  >
>;
export type PondStageDP19Invariant_MappedCandidateStateThroughDP18 = Assert<
  Equal<
    PondDeliveryReceiptAssessment["mappedCandidateState"],
    PondDispatchDecisionAssessment["mappedCandidateState"]
  >
>;
export type PondStageDP19Invariant_MappedCandidateReasonThroughDP18 = Assert<
  Equal<
    PondDeliveryReceiptAssessment["mappedCandidateReassessmentReason"],
    PondDispatchDecisionAssessment["mappedCandidateReassessmentReason"]
  >
>;
export type PondStageDP19Invariant_MappedEstablishmentThroughDP18 = Assert<
  Equal<
    PondDeliveryReceiptAssessment["mappedEstablishmentState"],
    PondDispatchDecisionAssessment["mappedEstablishmentState"]
  > extends true
    ? Equal<
        PondDeliveryReceiptAssessment["mappedEstablishmentReason"],
        PondDispatchDecisionAssessment["mappedEstablishmentReason"]
      >
    : false
>;
export type PondStageDP19Invariant_MappedReadGateThroughDP18 = Assert<
  Equal<
    PondDeliveryReceiptAssessment["mappedReadGateState"],
    PondDispatchDecisionAssessment["mappedReadGateState"]
  > extends true
    ? Equal<
        PondDeliveryReceiptAssessment["mappedReadGateReason"],
        PondDispatchDecisionAssessment["mappedReadGateReason"]
      >
    : false
>;
export type PondStageDP19Invariant_ReceiptProvesNothingBeyondDelivery = Assert<
  Equal<
    [
      PondDeliveryReceiptAssessment["receiptProvesRecipientAgreement"],
      PondDeliveryReceiptAssessment["receiptProvesTaskAcceptance"],
      PondDeliveryReceiptAssessment["receiptProvesCapabilityAuthorization"],
      PondDeliveryReceiptAssessment["receiptProvesAction"],
      PondDeliveryReceiptAssessment["receiptProvesPayment"],
      PondDeliveryReceiptAssessment["receiptProvesResultCorrectness"],
      PondDeliveryReceiptAssessment["receiptEstablishesGrant"],
      PondDeliveryReceiptAssessment["receiptEstablishesConsequenceOrExecution"],
      PondDeliveryReceiptAssessment["receiptEstablishesMembershipOrAdmission"],
      PondDeliveryReceiptAssessment["receiptEstablishesScope"],
      PondDeliveryReceiptAssessment["receiptEstablishesAgentCognitionRuntime"],
      PondDeliveryReceiptAssessment["receiptEstablishesAuthorityFromProse"],
      PondDeliveryReceiptAssessment["credentialAdmitted"],
      PondDeliveryReceiptAssessment["principalIdAcceptedAsAuthorization"],
      PondDeliveryReceiptAssessment["personalMemoryContentAdmitted"],
      PondDeliveryReceiptAssessment["currentTruthAdmitted"],
      PondDeliveryReceiptAssessment["runtimeActivationPosture"],
      PondDeliveryReceiptAssessment["authority"],
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      "not_included",
      "none",
    ]
  >
>;
export type PondStageDP19Invariant_NoForbiddenRecordKeys = Assert<
  HasAnyKey<PondDeliveryReceipt, (typeof POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP19Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondDeliveryReceiptAssessment, (typeof POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS)[number]> extends false
    ? true
    : false
>;