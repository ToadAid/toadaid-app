// Stage D-P20: the message transport lane — receiver-recorded transport-
// policy decisions over prepared D-P17 delivery candidates, plus the
// standing inbound wall declared in pond-remote-message-refusal.ts.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/agent-to-agent-messaging-and-delivery-
// contract.md L164 and L171-185 (the staged delivery lifecycle — the
// delivery stage FOLLOWS the delivery-policy decision: this cut is that
// missing policy stage, cut one lane earlier than the D-P18 dispatch with
// the same re-run mechanism), L220 (the transport list, declared verbatim
// below as the policy vocabulary — "This contract remains valid over
// local in-process delivery, MCP-related adapters where appropriate, A2A,
// HTTP, websocket, queues, Slack, Telegram, Discord, and future
// transports. A transport change must not widen authority."), L232 ("MCP
// remains tool/resource capability exposure, while A2A concerns peer-
// agent collaboration" — MCP is declared as a tool-adapter policy, never
// a peer-agent one), L186-190 (the two lifecycles must not collapse — a
// policy is a delivery-side decision and never a consequence
// authorization), L197-199 (revocation before delivery denies; the stop
// takes precedence — the policy re-assesses through its own re-run's
// verdict and confines honestly), L131-141 (remote messages are untrusted
// external input — the wall's law), L236-250 (the non-claims and
// deferrals: serialization, networking, endpoints, queues, persistence,
// and delivery-state hosting remain deferred wholesale; the governing
// sentence: "Delivery may carry governed information to an eligible
// audience. It never converts a message, identity, or request into
// authority to cause a consequence."), contracts/agent-admission-
// contract.md L76-78 ("External identity is evidence … it may provide
// evidence only"; "Transport is not agent" — no transport, policy or
// otherwise, defines agent identity or admission; remote external agents
// default to no local direct authority), contracts/trusted-channel-
// separation-contract.md L23-33 and L35 (the declared channel classes;
// unknown channels FAIL CLOSED rather than inherit trust from a
// neighboring class — honored by the wall beside this contract) and L66
// (channel authority requires a production receiver contract plus
// verification — none is established here; the taxonomy is left
// unchanged), contracts/scope-sovereignty-contract.md L54-60 (an
// audience is never inferred — the policy establishes no audience of its
// own; destination flows only through the certified candidate's own
// addressed agent), blueprints/delegated-authority-lifecycle.md L325-333
// (message delivery consumes no grant — a policy over a prepared
// candidate consumes less than that) and L609-619 (no local direct
// authority; A2A discovery or remote message is not a Grant), and L49-55
// and L109 of contracts/evidence-activation-contract.md (the independent
// inspection IS the re-run — on every arm).
//
// Recorded law silences. No canonical law defines an app-side transport-
// policy vocabulary, a transport-policy decision record, a policy-event
// freshness basis, a delivery-decision-point implementation, or the
// decomposition of L220's transport list into refusal vocabulary (L220
// is transport vocabulary, NOT policy vocabulary — the external-policy
// literals below are a receiver-recorded decomposition of that list,
// exercised as refusal, not as new transport authority). Every literal
// of that kind below is a receiver-recorded app-side decision, recorded
// here rather than in a law amendment.
//
// What the cut performs. The receiver records one transport policy —
// `in_process_local_conversation_context_delivery_only`, the only
// performable policy this cut — over a delivery candidate that is
// CURRENTLY prepared at the policy evaluation instant. The ceremony
// re-runs — through its own seam — the frozen D-P17 delivery-candidate
// decision over the SAME candidate legs and the SAME re-timed evaluation
// pair (the D-P19 receipt mechanism one lane earlier), and that re-run
// re-runs the frozen D-P16/D-P15 establishment chain inside it. A
// candidate that is not currently prepared can never carry a policy.
// Selecting any external policy refuses at its dedicated cause with the
// selected literal echoed. The policy is governance-only: nothing
// consumes it this cut (`transportPolicyConsumedThisCut: false` pins the
// non-consumption in the ceiling below — the frozen D-P18 dispatch is
// untouched), but the shell drive keeps the lifecycle order so a future
// transport lane inherits a real decision point. Unlike a D-P19 receipt
// (frozen at issuance, inspection-only), a policy is a session-scoped
// decision whose applicability the reassessment governs: it re-assesses
// after retraction and confines honestly — frozen survival would dress a
// dead policy as live governance.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type { PondDeliveryCandidateDecisionAssessment } from "./pond-delivery-candidate-decision.js";
import { assessPondDeliveryCandidateDecision } from "./pond-delivery-candidate-decision.ts";
import { POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS } from "./pond-delivery-receipt.ts";

// The transport-policy basis vocabulary: one true receiver-recorded basis
// and five refused bases. The D-P5/L5 rule holds one level up: a
// transport policy is a current policy decision of the receiving side —
// nothing in the prepared candidate, a receipt, a model completion,
// channel visibility, or a prior policy may record it here.
export type PondTransportPolicyBasis =
  | "receiver_recorded_transport_policy_not_inferred"
  | "inferred_from_prepared_candidate"
  | "inferred_from_receipt"
  | "asserted_by_model_completion"
  | "inferred_from_channel_visibility"
  | "replayed_from_prior_policy_decision";

// The transport-policy vocabulary: the agent-to-agent L220 transport
// list, declared verbatim as ONE performable policy and EIGHT external
// refusal policies. MCP is declared as a tool-adapter policy to honor
// L232's tool-exposure-versus-peer-collaboration split; `undeclared_future`
// keeps L220's "and future transports" verbatim. The external literals
// are a receiver-recorded decomposition of L220's TRANSPORT list into
// policy vocabulary — naming them declares them as what the receiver
// REFUSES, never as what any transport performs.
export type PondTransportPolicyDeclaration =
  | "in_process_local_conversation_context_delivery_only"
  | "external_transport_policy_a2a"
  | "external_transport_policy_mcp_tool_adapter"
  | "external_transport_policy_http"
  | "external_transport_policy_websocket"
  | "external_transport_policy_queue"
  | "external_transport_policy_slack"
  | "external_transport_policy_telegram"
  | "external_transport_policy_discord"
  | "external_transport_policy_undeclared_future";

export const POND_STAGE_DP20_PERFORMABLE_TRANSPORT_POLICIES = Object.freeze([
  "in_process_local_conversation_context_delivery_only",
] as const);

const transportPolicyVocabulary = [
  "in_process_local_conversation_context_delivery_only",
  "external_transport_policy_a2a",
  "external_transport_policy_mcp_tool_adapter",
  "external_transport_policy_http",
  "external_transport_policy_websocket",
  "external_transport_policy_queue",
  "external_transport_policy_slack",
  "external_transport_policy_telegram",
  "external_transport_policy_discord",
  "external_transport_policy_undeclared_future",
];

// The receiver-recorded policy-event metadata: the policy event's own
// time source, its freshness basis (event time only — the D-P2 ordering),
// and the explicit currentness posture: a recorded policy is NOT consumed
// by any transport stage this cut.
export interface PondTransportPolicyEventMetadata {
  readonly recorded_at_epoch_ms: number;
  readonly freshness_basis: "transport_policy_event_time_only";
  readonly currentness_posture: "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut";
}

// The receiver-recorded transport policy: 13 exact keys. No destination
// field exists here — the destination flows only through the certified
// candidate's own addressed agent; no endpoint, queue, or runtime field
// exists — the runtime posture below refuses them declaratively.
export interface PondTransportPolicy {
  readonly contractVersion: "pond-transport-policy-decision-d-p20";
  readonly kind: "pond-transport-policy";
  readonly principalRef: string;
  readonly policyBasis: PondTransportPolicyBasis;
  readonly transportPolicy: PondTransportPolicyDeclaration;
  readonly transportPolicyMetadata: PondTransportPolicyEventMetadata;
  readonly policyTransportPosture: "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable";
  readonly policyRuntimePosture: "no_transport_runtime_endpoint_or_queue_established";
  readonly policyChannelAuthorityPosture: "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged";
  readonly policyAcceptancePosture: "policy_establishes_no_acceptance_agreement_or_reply";
  readonly policyEvidencePosture: "policy_is_not_evidence_and_claims_no_receipt";
  readonly policyAuthorityPosture: "policy_grants_no_authority_membership_or_admission";
  readonly authority: "none";
}

// Receiver-owned transport-policy checks (L49-55).
export type PondTransportPolicyCheck =
  | "transport_policy_record_well_formed"
  | "transport_policy_bound_to_receiver_held_principal"
  | "policy_basis_receiver_recorded_not_inferred"
  | "transport_policy_in_performable_vocabulary"
  | "transport_policy_declares_no_external_transport"
  | "delivery_candidate_currently_prepared_reassessed_session_scoped"
  | "transport_policy_event_within_current_session_scope"
  | "transport_policy_event_own_freshness_within_declared_maximum_age"
  | "transport_policy_refusal_postures_complete";

// The transport-policy decision input: 15 exact keys — the full D-P17
// delivery-candidate decision input (the shape the delivery module
// stores, verbatim) plus the policy record. One evaluation pair serves
// the policy event's freshness and every leg's re-run inside the
// reassessment.
export interface PondTransportPolicyDecisionInput {
  readonly transportPolicy: unknown;
  readonly deliveryCandidate: unknown;
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
}

// The transport-policy decision assessment.
export interface PondTransportPolicyDecisionAssessment {
  readonly contractVersion: "pond-transport-policy-decision-d-p20";
  readonly transportPolicyDecisionVersion:
    | "pond-transport-policy-decision-d-p20"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_transport_policy_decision";
  readonly transportPolicyState:
    | "transport_policy_not_recorded"
    | "transport_policy_recorded_session_scoped_no_external_transport";
  readonly reason:
    | "transport_policy_record_invalid"
    | "delivery_candidate_not_currently_prepared"
    | "transport_policy_not_performable_this_cut"
    | "transport_policy_event_not_session_current"
    | "transport_policy_event_not_of_the_current_session_scope"
    | "receiver_transport_policy_proof_incomplete"
    | "all_transport_policy_checks_satisfied";
  readonly transportPolicyEventFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // The selected-policy echo, computed on every arm where the record is
  // validly shaped (null on an invalid record — nothing is echoed for a
  // record that never became a record). An external selection is echoed
  // at its dedicated cause; this echo carries what the receiver named,
  // never what any transport performed.
  readonly recordedTransportPolicy: PondTransportPolicyDeclaration | null;
  // Mapped echo fields: the frozen D-P17 re-run's own fields carried
  // verbatim on every arm — its candidate state and reason, its OWN
  // delivery-intent diagnosis, and ITS mapped echoes (the D-P15 read
  // gate, the establishment chain, and the delivered-record admission
  // conclusion), so a refusal three depths down stays readable at this
  // cut without new literals for it. Field names stay this cut's own;
  // the frozen carrier names are never re-declared here.
  readonly mappedCandidateState: PondDeliveryCandidateDecisionAssessment["deliveryCandidateState"];
  readonly mappedCandidateReassessmentReason: PondDeliveryCandidateDecisionAssessment["reason"];
  readonly mappedCandidateIntentDiagnosis: PondDeliveryCandidateDecisionAssessment["deliveryIntentFreshnessDiagnosis"];
  readonly mappedEstablishmentState: PondDeliveryCandidateDecisionAssessment["mappedEstablishmentState"];
  readonly mappedEstablishmentReason: PondDeliveryCandidateDecisionAssessment["mappedEstablishmentReason"];
  readonly mappedEstablishmentFreshnessDiagnosis: PondDeliveryCandidateDecisionAssessment["mappedEstablishmentFreshnessDiagnosis"];
  readonly mappedReadGateState: PondDeliveryCandidateDecisionAssessment["mappedReadGateState"];
  readonly mappedReadGateReason: PondDeliveryCandidateDecisionAssessment["mappedReadGateReason"];
  readonly mappedReadGateFreshnessDiagnosis: PondDeliveryCandidateDecisionAssessment["mappedReadGateFreshnessDiagnosis"];
  readonly mappedDeliveredRecordAdmissionState: PondDeliveryCandidateDecisionAssessment["mappedDeliveredRecordAdmissionState"];
  readonly mappedDeliveredRecordAdmissionReason: PondDeliveryCandidateDecisionAssessment["mappedDeliveredRecordAdmissionReason"];
  readonly satisfiedChecks: readonly PondTransportPolicyCheck[];
  readonly unsatisfiedChecks: readonly PondTransportPolicyCheck[];
  // The retention posture: a policy is module state of process lifetime
  // with no indefinite retention, and it re-assesses honestly after
  // retraction — the deliberate contrast with the D-P19 receipt's
  // frozen-at-issuance presentation (a policy is a session-scoped
  // decision whose applicability the reassessment governs; nothing
  // downstream reads it, and frozen survival would dress a dead policy
  // as live governance).
  readonly transportPolicyRetentionPosture: "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction";
  // The all-false ceiling: a recorded policy is a decision about HOW an
  // in-process delivery may travel, nothing more. It never establishes
  // external-transport runtime, channel-class authority, agent identity
  // or admission, a grant, a consequence or execution, an acceptance or
  // agreement, prose authority, membership, a cognition runtime, or a
  // scope; no transport is accepted as agent identity; the policy is
  // consumed by no transport stage this cut; and it admits no
  // credential, no PrincipalId authorization, no personal memory
  // content, and no current truth (agent-to-agent L186-190, L197-199,
  // L220, L232, L236-250; admission L76-78; trusted-channel L66;
  // delegated-authority L325-333, L609-619).
  readonly policyEstablishesExternalTransportRuntime: false;
  readonly policyEstablishesChannelAuthority: false;
  readonly policyEstablishesAgentIdentityOrAdmission: false;
  readonly policyEstablishesGrant: false;
  readonly policyEstablishesConsequenceOrExecution: false;
  readonly policyEstablishesAcceptanceOrTaskAgreement: false;
  readonly policyEstablishesAuthorityFromProse: false;
  readonly policyEstablishesMembershipOrAdmission: false;
  readonly policyEstablishesAgentCognitionRuntime: false;
  readonly policyEstablishesScope: false;
  readonly transportAcceptedAsAgentIdentity: false;
  readonly transportPolicyConsumedThisCut: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

// The forbidden-key inventory: the frozen D-P19 union plus the four
// transport keys this lane exists to refuse — an endpoint, an AgentCard,
// an MCP runtime schema, and a remote grant would each be exactly what
// L220 forbids widening through a transport change.
export const POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS = Object.freeze([
  ...POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS,
  "transportEndpoint",
  "a2aAgentCard",
  "mcpRuntimeSchema",
  "remoteGrant",
] as const);

const transportPolicyChecks = Object.freeze([
  "transport_policy_record_well_formed",
  "transport_policy_bound_to_receiver_held_principal",
  "policy_basis_receiver_recorded_not_inferred",
  "transport_policy_in_performable_vocabulary",
  "transport_policy_declares_no_external_transport",
  "delivery_candidate_currently_prepared_reassessed_session_scoped",
  "transport_policy_event_within_current_session_scope",
  "transport_policy_event_own_freshness_within_declared_maximum_age",
  "transport_policy_refusal_postures_complete",
] as const satisfies readonly PondTransportPolicyCheck[]);

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

const wellFormedPrincipalRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("principal:") &&
  value.length > "principal:".length;

const safeNonNegativeInteger = (value: unknown): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0;

// The D-P2 freshness diagnosis, reimplemented with the same ordering and
// literals over the policy-event metadata: metadata, then evaluation
// time, then maximum age, then future time; the fresh boundary is
// inclusive. A diagnosis is a diagnosis, never an admission.
const diagnoseTransportPolicyFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.recorded_at_epoch_ms) ||
    checked.freshness_basis !== "transport_policy_event_time_only" ||
    checked.currentness_posture !==
      "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
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

const policyBasisVocabulary = [
  "receiver_recorded_transport_policy_not_inferred",
  "inferred_from_prepared_candidate",
  "inferred_from_receipt",
  "asserted_by_model_completion",
  "inferred_from_channel_visibility",
  "replayed_from_prior_policy_decision",
];

// The six declarative-refusal posture fields: each field must carry its
// exact posture literal for the policy record to be validly shaped, and
// the posture completeness rides inside the well-formed check and the
// declarative check below.
const refusalPosturesComplete = (recordValue: Record<string, unknown>) =>
  recordValue.policyTransportPosture ===
    "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable" &&
  recordValue.policyRuntimePosture ===
    "no_transport_runtime_endpoint_or_queue_established" &&
  recordValue.policyChannelAuthorityPosture ===
    "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged" &&
  recordValue.policyAcceptancePosture ===
    "policy_establishes_no_acceptance_agreement_or_reply" &&
  recordValue.policyEvidencePosture ===
    "policy_is_not_evidence_and_claims_no_receipt" &&
  recordValue.policyAuthorityPosture ===
    "policy_grants_no_authority_membership_or_admission";

const exactTransportPolicyEventMetadata = (value: unknown): boolean => {
  const metadataValue = record(value);
  return (
    metadataValue !== null &&
    exactKeys(metadataValue, [
      "recorded_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadataValue.recorded_at_epoch_ms) &&
    metadataValue.freshness_basis === "transport_policy_event_time_only" &&
    metadataValue.currentness_posture ===
      "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut"
  );
};

// Valid vocabulary shapes only — policy-record validity, not policy
// admission. The candidate under the policy is the re-run's material,
// not this check's: it must be present as an input leg, and its full
// admission (currently prepared or not) happens only in the frozen D-P17
// re-run, whose conclusion is carried verbatim as the mapped echo. The
// candidate is never re-stamped here and never repaired. Validity of the
// DECLARED policy checks membership in the full nine-literal vocabulary —
// an external selection is real vocabulary and refuses at its dedicated
// cause below; only an undeclared literal renders the whole record
// invalid.
const validTransportPolicyRecord = (value: unknown): boolean => {
  const policyValue = record(value);
  return (
    policyValue !== null &&
    exactKeys(policyValue, [
      "contractVersion",
      "kind",
      "principalRef",
      "policyBasis",
      "transportPolicy",
      "transportPolicyMetadata",
      "policyTransportPosture",
      "policyRuntimePosture",
      "policyChannelAuthorityPosture",
      "policyAcceptancePosture",
      "policyEvidencePosture",
      "policyAuthorityPosture",
      "authority",
    ]) &&
    policyValue.contractVersion === "pond-transport-policy-decision-d-p20" &&
    policyValue.kind === "pond-transport-policy" &&
    policyBasisVocabulary.includes(String(policyValue.policyBasis)) &&
    transportPolicyVocabulary.includes(String(policyValue.transportPolicy)) &&
    exactTransportPolicyEventMetadata(policyValue.transportPolicyMetadata) &&
    wellFormedPrincipalRef(policyValue.principalRef) &&
    refusalPosturesComplete(policyValue) &&
    policyValue.authority === "none" &&
    !hasForbiddenKey(policyValue, POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS)
  );
};

// The D-P17 candidate legs, verbatim: the policy's re-run consumes the
// canonical classifier over the SAME candidate input the delivery module
// stored — the 14 candidate keys, never the policy key (spreading the
// 15-key input would pass the policy into the re-run; the projection is
// the type-tie seam).
const fullCandidateLegs = (input: PondTransportPolicyDecisionInput) =>
  ({
    deliveryCandidate: input.deliveryCandidate,
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
interface PondMappedCandidateEcho {
  readonly state: PondDeliveryCandidateDecisionAssessment["deliveryCandidateState"];
  readonly reason: PondDeliveryCandidateDecisionAssessment["reason"];
  readonly intentDiagnosis: PondDeliveryCandidateDecisionAssessment["deliveryIntentFreshnessDiagnosis"];
}

interface PondMappedEstablishmentEcho {
  readonly state: PondDeliveryCandidateDecisionAssessment["mappedEstablishmentState"];
  readonly reason: PondDeliveryCandidateDecisionAssessment["mappedEstablishmentReason"];
  readonly diagnosis: PondDeliveryCandidateDecisionAssessment["mappedEstablishmentFreshnessDiagnosis"];
}

interface PondMappedReadGateEcho {
  readonly state: PondDeliveryCandidateDecisionAssessment["mappedReadGateState"];
  readonly reason: PondDeliveryCandidateDecisionAssessment["mappedReadGateReason"];
  readonly diagnosis: PondDeliveryCandidateDecisionAssessment["mappedReadGateFreshnessDiagnosis"];
}

interface PondMappedDeliveredRecordEcho {
  readonly state: PondDeliveryCandidateDecisionAssessment["mappedDeliveredRecordAdmissionState"];
  readonly reason: PondDeliveryCandidateDecisionAssessment["mappedDeliveredRecordAdmissionReason"];
}

const policyAssessment = (
  reason: PondTransportPolicyDecisionAssessment["reason"],
  transportPolicyDecisionVersion: PondTransportPolicyDecisionAssessment["transportPolicyDecisionVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  recordedTransportPolicy: PondTransportPolicyDeclaration | null,
  mappedCandidate: PondMappedCandidateEcho,
  mappedEstablishment: PondMappedEstablishmentEcho,
  mappedReadGate: PondMappedReadGateEcho,
  mappedDeliveredRecord: PondMappedDeliveredRecordEcho,
  satisfiedChecks: readonly PondTransportPolicyCheck[],
  unsatisfiedChecks: readonly PondTransportPolicyCheck[],
): PondTransportPolicyDecisionAssessment => {
  const recorded = reason === "all_transport_policy_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-transport-policy-decision-d-p20",
    transportPolicyDecisionVersion,
    assessmentKind: "deterministic_supplied_transport_policy_decision",
    transportPolicyState: recorded
      ? "transport_policy_recorded_session_scoped_no_external_transport"
      : "transport_policy_not_recorded",
    reason,
    transportPolicyEventFreshnessDiagnosis: diagnosis,
    recordedTransportPolicy,
    mappedCandidateState: mappedCandidate.state,
    mappedCandidateReassessmentReason: mappedCandidate.reason,
    mappedCandidateIntentDiagnosis: mappedCandidate.intentDiagnosis,
    mappedEstablishmentState: mappedEstablishment.state,
    mappedEstablishmentReason: mappedEstablishment.reason,
    mappedEstablishmentFreshnessDiagnosis: mappedEstablishment.diagnosis,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    mappedDeliveredRecordAdmissionState: mappedDeliveredRecord.state,
    mappedDeliveredRecordAdmissionReason: mappedDeliveredRecord.reason,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The retention posture: honest re-assessment after retraction — the
    // deliberate contrast with the D-P19 receipt's frozen-at-issuance
    // presentation.
    transportPolicyRetentionPosture:
      "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction" as const,
    // A recorded policy is a decision about HOW an in-process delivery
    // may travel, nothing more: no external-transport runtime, no
    // channel-class authority, no agent identity or admission, no grant,
    // no consequence, no acceptance, no prose authority, no membership,
    // no cognition runtime, no scope; no transport is agent identity;
    // and the policy is consumed by no transport stage this cut (D-P18
    // is frozen; the decision point is inherited, not exercised). No
    // credential, PrincipalId authorization, memory content, or current
    // truth is admitted (agent-to-agent L186-190, L197-199, L220, L232,
    // L236-250; admission L76-78; trusted-channel L66; delegated-
    // authority L325-333, L609-619).
    policyEstablishesExternalTransportRuntime: false,
    policyEstablishesChannelAuthority: false,
    policyEstablishesAgentIdentityOrAdmission: false,
    policyEstablishesGrant: false,
    policyEstablishesConsequenceOrExecution: false,
    policyEstablishesAcceptanceOrTaskAgreement: false,
    policyEstablishesAuthorityFromProse: false,
    policyEstablishesMembershipOrAdmission: false,
    policyEstablishesAgentCognitionRuntime: false,
    policyEstablishesScope: false,
    transportAcceptedAsAgentIdentity: false,
    transportPolicyConsumedThisCut: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondTransportPolicyDecision(
  input: PondTransportPolicyDecisionInput,
): PondTransportPolicyDecisionAssessment {
  // The fail-closed gate on the input object itself: garbage never throws
  // — a non-object input degrades to an empty record the validation and
  // re-runs refuse honestly (the D-P8 fail-closed discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondTransportPolicyDecisionInput;
  // The echoes are computed on every arm, before any cause is chosen: a
  // broken policy never unbinds the receiver's records, and an invalid
  // arm still diagnoses (D-P13 echo discipline). The candidate re-run
  // goes through this contract's own seam (evidence-activation L109 —
  // the independent inspection IS the re-run; derived-evidence
  // single-source — the policy consumes the canonical classifier's
  // result): the frozen D-P17 ceremony re-runs itself over the SAME
  // candidate legs and the SAME re-timed evaluation pair, and inside it
  // the frozen D-P16 record admission, the D-P15 read gate, and the
  // establishment chain re-run again.
  const candidateReassessment = assessPondDeliveryCandidateDecision(
    fullCandidateLegs(input),
  );
  const mappedCandidate: PondMappedCandidateEcho = {
    state: candidateReassessment["deliveryCandidateState"],
    reason: candidateReassessment["reason"],
    intentDiagnosis: candidateReassessment["deliveryIntentFreshnessDiagnosis"],
  };
  const mappedEstablishment: PondMappedEstablishmentEcho = {
    state: candidateReassessment["mappedEstablishmentState"],
    reason: candidateReassessment["mappedEstablishmentReason"],
    diagnosis: candidateReassessment["mappedEstablishmentFreshnessDiagnosis"],
  };
  const mappedReadGate: PondMappedReadGateEcho = {
    state: candidateReassessment["mappedReadGateState"],
    reason: candidateReassessment["mappedReadGateReason"],
    diagnosis: candidateReassessment["mappedReadGateFreshnessDiagnosis"],
  };
  const mappedDeliveredRecord: PondMappedDeliveredRecordEcho = {
    state: candidateReassessment["mappedDeliveredRecordAdmissionState"],
    reason: candidateReassessment["mappedDeliveredRecordAdmissionReason"],
  };
  // The D-P16 fallback pattern: diagnose the raw evaluation pair even when
  // the policy event never becomes valid, so every arm carries an honest
  // policy-event diagnosis.
  const fallbackDiagnosis = diagnoseTransportPolicyFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validTransportPolicyRecord(input.transportPolicy))
    return policyAssessment(
      "transport_policy_record_invalid",
      "invalid",
      fallbackDiagnosis,
      null,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      mappedDeliveredRecord,
      [],
      transportPolicyChecks,
    );
  const policyValue = input.transportPolicy as Record<string, unknown>;
  const policyEventMetadata = record(policyValue["transportPolicyMetadata"]);
  const selectedPolicy = String(
    policyValue["transportPolicy"],
  ) as PondTransportPolicyDeclaration;

  // The policy event's own diagnosis first as data: the metadata is valid
  // already, so the diagnosis (fresh or not) is honest on every remaining
  // arm — but the candidate reassessment outranks it in the ladder (a
  // policy is a transport-policy stage whose candidate must be currently
  // prepared; L171-185 — the delivery stage follows the delivery-policy
  // decision), so a not-currently-prepared candidate refuses before the
  // event's freshness is even asked, with the event diagnosis still
  // readable.
  const policyDiagnosis = diagnoseTransportPolicyFreshness(
    policyEventMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );

  // The frozen D-P17 re-run's verdict is the verdict: a candidate that is
  // not currently prepared at the policy evaluation instant can never
  // carry a policy, and the re-run's own reason (its intent cause, its
  // gate cause, its admission cause, or its own invalid cause) is carried
  // verbatim as the mapped reassessment reason — the honest echo.
  if (
    candidateReassessment["deliveryCandidateState"] !==
    "delivery_candidate_prepared_session_scoped_no_dispatch"
  )
    return policyAssessment(
      "delivery_candidate_not_currently_prepared",
      "pond-transport-policy-decision-d-p20",
      policyDiagnosis,
      selectedPolicy,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      mappedDeliveredRecord,
      [],
      transportPolicyChecks,
    );

  // Policy selection: the declared vocabulary is wide, this cut is
  // narrow. Only the in-process policy records here — everything external
  // (including MCP TOOL-adapters and L220's "future transports") refuses
  // at its dedicated cause with the selected literal echoed. No
  // machinery for external transport exists this cut, and L236-246
  // defer it wholesale.
  if (
    selectedPolicy !== "in_process_local_conversation_context_delivery_only"
  )
    return policyAssessment(
      "transport_policy_not_performable_this_cut",
      "pond-transport-policy-decision-d-p20",
      policyDiagnosis,
      selectedPolicy,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      mappedDeliveredRecord,
      [],
      transportPolicyChecks,
    );

  // The policy event's own freshness. The newest-event arithmetic of the
  // later lanes does not hold here (dispatch and receipt events postdate
  // the policy event on the frozen chain — the policy stage comes FIRST
  // in the lifecycle), so freshness is evaluated honestly on the policy
  // event alone against the shared evaluation pair, and the selftest
  // proves the isolation by ladder order rather than by age arithmetic.
  if (policyDiagnosis.state !== "fresh")
    return policyAssessment(
      "transport_policy_event_not_session_current",
      "pond-transport-policy-decision-d-p20",
      policyDiagnosis,
      selectedPolicy,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      mappedDeliveredRecord,
      [],
      transportPolicyChecks,
    );

  // Session-scope binding for the policy event: the recorded policy must
  // postdate the current session's establishment event, the delivered
  // composition event, and the delivery-intent event — a policy recorded
  // before the session it would ride, before the composition it would
  // deliver, or before the intent it would realize is not in the current
  // scope. The candidate and establishment are validated by the re-run
  // above, so their metadata is read through those validated forms (the
  // D-P18 scope pattern one lane earlier).
  const establishmentMetadata = record(
    (input.establishmentRecord as Record<string, unknown>)[
      "establishmentMetadata"
    ],
  );
  const candidateValue = input.deliveryCandidate as Record<string, unknown>;
  const deliveredMetadata = record(
    (candidateValue["deliveredConversationRecord"] as Record<string, unknown>)[
      "conversationRecordMetadata"
    ],
  );
  const intentMetadata = record(candidateValue["deliveryIntentMetadata"]);
  const establishedAt = establishmentMetadata?.[
    "established_at_epoch_ms"
  ] as number | undefined;
  const composedAt = (deliveredMetadata ?? {})["composed_at_epoch_ms"] as
    | number
    | undefined;
  const recordedIntentAt = (intentMetadata ?? {})["recorded_at_epoch_ms"] as
    | number
    | undefined;
  const policyRecordedAt = policyEventMetadata?.[
    "recorded_at_epoch_ms"
  ] as number | undefined;
  if (
    typeof establishedAt !== "number" ||
    typeof composedAt !== "number" ||
    typeof recordedIntentAt !== "number" ||
    typeof policyRecordedAt !== "number" ||
    policyRecordedAt < establishedAt ||
    policyRecordedAt < composedAt ||
    policyRecordedAt < recordedIntentAt
  )
    return policyAssessment(
      "transport_policy_event_not_of_the_current_session_scope",
      "pond-transport-policy-decision-d-p20",
      policyDiagnosis,
      selectedPolicy,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      mappedDeliveredRecord,
      [],
      transportPolicyChecks,
    );

  // The remaining declarative checks, evaluated honestly over the
  // validated record and the re-run verdict: the refused bases fold here
  // with the unsatisfied check names readable (L49-55 — every leg green
  // except the declarative checks that failed), never behind a defensive
  // literal.
  const values = [
    true,
    policyValue["principalRef"] === input.receiverHeldPrincipalRef &&
      wellFormedPrincipalRef(input.receiverHeldPrincipalRef),
    policyValue["policyBasis"] ===
      "receiver_recorded_transport_policy_not_inferred",
    selectedPolicy === "in_process_local_conversation_context_delivery_only",
    String(policyValue["transportPolicy"]).startsWith(
      "external_transport_policy_",
    ) === false,
    candidateReassessment["deliveryCandidateState"] ===
      "delivery_candidate_prepared_session_scoped_no_dispatch",
    typeof establishedAt === "number" &&
      typeof composedAt === "number" &&
      typeof recordedIntentAt === "number" &&
      typeof policyRecordedAt === "number" &&
      policyRecordedAt >= establishedAt &&
      policyRecordedAt >= composedAt &&
      policyRecordedAt >= recordedIntentAt,
    policyDiagnosis.state === "fresh",
    refusalPosturesComplete(policyValue),
  ];
  const satisfied = transportPolicyChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = transportPolicyChecks.filter(
    (_, index) => values[index] !== true,
  );
  return policyAssessment(
    unsatisfied.length === 0
      ? "all_transport_policy_checks_satisfied"
      : "receiver_transport_policy_proof_incomplete",
    "pond-transport-policy-decision-d-p20",
    policyDiagnosis,
    selectedPolicy,
    mappedCandidate,
    mappedEstablishment,
    mappedReadGate,
    mappedDeliveredRecord,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. A recorded policy is transport
// governance only: it never establishes external-transport runtime,
// channel-class authority, agent identity or admission, a grant, a
// consequence or execution, an acceptance or agreement, prose authority,
// membership, a cognition runtime, or a scope; no transport is accepted
// as agent identity; the policy is consumed by no transport stage this
// cut; and it admits no credential, no PrincipalId authorization, no
// personal memory content, and no current truth.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP20Invariant_ChecksExact = Assert<
  Equal<
    PondTransportPolicyCheck,
    | "transport_policy_record_well_formed"
    | "transport_policy_bound_to_receiver_held_principal"
    | "policy_basis_receiver_recorded_not_inferred"
    | "transport_policy_in_performable_vocabulary"
    | "transport_policy_declares_no_external_transport"
    | "delivery_candidate_currently_prepared_reassessed_session_scoped"
    | "transport_policy_event_within_current_session_scope"
    | "transport_policy_event_own_freshness_within_declared_maximum_age"
    | "transport_policy_refusal_postures_complete"
  >
>;
export type PondStageDP20Invariant_StatesExact = Assert<
  Equal<
    PondTransportPolicyDecisionAssessment["transportPolicyState"],
    | "transport_policy_not_recorded"
    | "transport_policy_recorded_session_scoped_no_external_transport"
  >
>;
export type PondStageDP20Invariant_ReasonsExact = Assert<
  Equal<
    PondTransportPolicyDecisionAssessment["reason"],
    | "transport_policy_record_invalid"
    | "delivery_candidate_not_currently_prepared"
    | "transport_policy_not_performable_this_cut"
    | "transport_policy_event_not_session_current"
    | "transport_policy_event_not_of_the_current_session_scope"
    | "receiver_transport_policy_proof_incomplete"
    | "all_transport_policy_checks_satisfied"
  >
>;
export type PondStageDP20Invariant_PerformablePoliciesExact = Assert<
  Equal<
    (typeof POND_STAGE_DP20_PERFORMABLE_TRANSPORT_POLICIES)[number],
    "in_process_local_conversation_context_delivery_only"
  >
>;
export type PondStageDP20Invariant_TransportPoliciesExact = Assert<
  Equal<
    PondTransportPolicyDeclaration,
    | "in_process_local_conversation_context_delivery_only"
    | "external_transport_policy_a2a"
    | "external_transport_policy_mcp_tool_adapter"
    | "external_transport_policy_http"
    | "external_transport_policy_websocket"
    | "external_transport_policy_queue"
    | "external_transport_policy_slack"
    | "external_transport_policy_telegram"
    | "external_transport_policy_discord"
    | "external_transport_policy_undeclared_future"
  >
>;
export type PondStageDP20Invariant_EventMetadataExact = Assert<
  Equal<
    PondTransportPolicyEventMetadata,
    {
      readonly recorded_at_epoch_ms: number;
      readonly freshness_basis: "transport_policy_event_time_only";
      readonly currentness_posture: "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut";
    }
  >
>;
export type PondStageDP20Invariant_PosturesExact = Assert<
  Equal<
    PondTransportPolicy,
    {
      readonly contractVersion: "pond-transport-policy-decision-d-p20";
      readonly kind: "pond-transport-policy";
      readonly principalRef: string;
      readonly policyBasis: PondTransportPolicyBasis;
      readonly transportPolicy: PondTransportPolicyDeclaration;
      readonly transportPolicyMetadata: PondTransportPolicyEventMetadata;
      readonly policyTransportPosture: "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable";
      readonly policyRuntimePosture: "no_transport_runtime_endpoint_or_queue_established";
      readonly policyChannelAuthorityPosture: "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged";
      readonly policyAcceptancePosture: "policy_establishes_no_acceptance_agreement_or_reply";
      readonly policyEvidencePosture: "policy_is_not_evidence_and_claims_no_receipt";
      readonly policyAuthorityPosture: "policy_grants_no_authority_membership_or_admission";
      readonly authority: "none";
    }
  >
>;
export type PondStageDP20Invariant_MappedCandidateStateTiedToDP17 = Assert<
  Equal<
    PondTransportPolicyDecisionAssessment["mappedCandidateState"],
    PondDeliveryCandidateDecisionAssessment["deliveryCandidateState"]
  >
>;
export type PondStageDP20Invariant_MappedCandidateReasonTiedToDP17 = Assert<
  Equal<
    PondTransportPolicyDecisionAssessment["mappedCandidateReassessmentReason"],
    PondDeliveryCandidateDecisionAssessment["reason"]
  >
>;
export type PondStageDP20Invariant_MappedCandidateIntentDiagnosisTiedToDP17 = Assert<
  Equal<
    PondTransportPolicyDecisionAssessment["mappedCandidateIntentDiagnosis"],
    PondDeliveryCandidateDecisionAssessment["deliveryIntentFreshnessDiagnosis"]
  >
>;
export type PondStageDP20Invariant_MappedEstablishmentThroughDP17 = Assert<
  Equal<
    PondTransportPolicyDecisionAssessment["mappedEstablishmentState"],
    PondDeliveryCandidateDecisionAssessment["mappedEstablishmentState"]
  > extends true
    ? Equal<
        PondTransportPolicyDecisionAssessment["mappedEstablishmentReason"],
        PondDeliveryCandidateDecisionAssessment["mappedEstablishmentReason"]
      > extends true
      ? Equal<
          PondTransportPolicyDecisionAssessment["mappedEstablishmentFreshnessDiagnosis"],
          PondDeliveryCandidateDecisionAssessment["mappedEstablishmentFreshnessDiagnosis"]
        >
      : false
    : false
>;
export type PondStageDP20Invariant_MappedReadGateThroughDP17 = Assert<
  Equal<
    PondTransportPolicyDecisionAssessment["mappedReadGateState"],
    PondDeliveryCandidateDecisionAssessment["mappedReadGateState"]
  > extends true
    ? Equal<
        PondTransportPolicyDecisionAssessment["mappedReadGateReason"],
        PondDeliveryCandidateDecisionAssessment["mappedReadGateReason"]
      > extends true
      ? Equal<
          PondTransportPolicyDecisionAssessment["mappedReadGateFreshnessDiagnosis"],
          PondDeliveryCandidateDecisionAssessment["mappedReadGateFreshnessDiagnosis"]
        >
      : false
    : false
>;
export type PondStageDP20Invariant_MappedDeliveredRecordThroughDP17 = Assert<
  Equal<
    PondTransportPolicyDecisionAssessment["mappedDeliveredRecordAdmissionState"],
    PondDeliveryCandidateDecisionAssessment["mappedDeliveredRecordAdmissionState"]
  > extends true
    ? Equal<
        PondTransportPolicyDecisionAssessment["mappedDeliveredRecordAdmissionReason"],
        PondDeliveryCandidateDecisionAssessment["mappedDeliveredRecordAdmissionReason"]
      >
    : false
>;
export type PondStageDP20Invariant_PolicyEstablishesNothing = Assert<
  Equal<
    [
      PondTransportPolicyDecisionAssessment["policyEstablishesExternalTransportRuntime"],
      PondTransportPolicyDecisionAssessment["policyEstablishesChannelAuthority"],
      PondTransportPolicyDecisionAssessment["policyEstablishesAgentIdentityOrAdmission"],
      PondTransportPolicyDecisionAssessment["policyEstablishesGrant"],
      PondTransportPolicyDecisionAssessment["policyEstablishesConsequenceOrExecution"],
      PondTransportPolicyDecisionAssessment["policyEstablishesAcceptanceOrTaskAgreement"],
      PondTransportPolicyDecisionAssessment["policyEstablishesAuthorityFromProse"],
      PondTransportPolicyDecisionAssessment["policyEstablishesMembershipOrAdmission"],
      PondTransportPolicyDecisionAssessment["policyEstablishesAgentCognitionRuntime"],
      PondTransportPolicyDecisionAssessment["policyEstablishesScope"],
      PondTransportPolicyDecisionAssessment["transportAcceptedAsAgentIdentity"],
      PondTransportPolicyDecisionAssessment["transportPolicyConsumedThisCut"],
      PondTransportPolicyDecisionAssessment["credentialAdmitted"],
      PondTransportPolicyDecisionAssessment["principalIdAcceptedAsAuthorization"],
      PondTransportPolicyDecisionAssessment["personalMemoryContentAdmitted"],
      PondTransportPolicyDecisionAssessment["currentTruthAdmitted"],
      PondTransportPolicyDecisionAssessment["runtimeActivationPosture"],
      PondTransportPolicyDecisionAssessment["authority"],
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
export type PondStageDP20Invariant_NoForbiddenRecordKeys = Assert<
  HasAnyKey<PondTransportPolicy, (typeof POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP20Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondTransportPolicyDecisionAssessment, (typeof POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS)[number]> extends false
    ? true
    : false
>;