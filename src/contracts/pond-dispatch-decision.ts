// Stage D-P18: the dispatch lane — receiver-recorded, in-process dispatch
// decisions over currently prepared D-P17 delivery candidates.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/agent-to-agent-messaging-and-delivery-
// contract.md L171-185 (the staged delivery-admission lifecycle — this cut
// implements its DELIVERY stage over the D-P17 decision stage; the delivery
// stage follows the delivery-policy decision, never precedes it), L186-190
// ("The two lifecycles must not collapse" — delivery informs receivers who
// evaluate independently; the consequence posture stays refused here),
// L192-195 ("a consequential request message must not be reusable
// indefinitely" — the replay/consumption law; the consumed-request marker
// implementation is explicitly deferred, so this cut realizes it as
// receiver-recorded one-dispatch-per-candidate shell state outside the
// contract, and the contract refuses a replayed dispatch at its declarative
// basis check), L196-199 (revocation before delivery denies; the stop takes
// precedence — a dispatch after retraction refuses through the re-run's
// own retraction echo), L200-205 (a receipt proves nothing beyond
// acceptance-for-delivery — none is claimed and no receipt key is carried),
// L231-239 (transport neutrality — this cut performs exactly L232's local
// in-process delivery: no A2A, MCP, network transport, queues, retries, or
// scheduling), L236-250 (the non-claims and deferrals: serialization,
// networking, queues, replay-protection implementation, delivery-state host
// are all deferred; the governing sentence "Delivery may carry governed
// information to an eligible audience. It never converts a message,
// identity, or request into authority to cause a consequence."), L100-129
// (the audience ladder — the destination audience is the already-bound
// declared audience of the prepared candidate, never re-inferred here);
// contracts/scope-sovereignty-contract.md L54-60 (an audience is never
// inferred by a model, channel visibility, or suggestion); blueprints/
// social-control-plane.md L195 (routing is not authorization); blueprints/
// delegated-authority-lifecycle.md L325-333 (message delivery consumes no
// grant); contracts/trusted-channel-separation-contract.md L28 (the
// conversation-context channel class — an in-process dispatch moves nothing
// between channel classes); contracts/evidence-activation-contract.md
// L49-55 and L109 (the independent inspection IS the re-run through the
// consumer's own seam, on every arm).
//
// Recorded law silences. No canonical law defines an app-side
// dispatch-decision vocabulary, a dispatch admission ceremony, a dispatch
// decision state set, a dispatch event freshness basis, or a
// consumed-request-marker implementation (the marker's implementation is
// explicitly deferred by L194). Every literal below is a receiver-recorded
// app-side decision, exercised as refusal vocabulary, not as new authority.
//
// What the cut performs. The receiver performs one in-process, local,
// session-scoped dispatch of a delivery candidate that is CURRENTLY
// prepared at the dispatch evaluation instant. The ceremony re-runs —
// through its own seam — the frozen D-P17 candidate decision over the same
// legs and the same re-timed evaluation pair and retraction record (the
// design-B per-assessment re-timing precedent), and that re-run itself
// re-runs the frozen D-P16 record admission, the D-P15 read gate, and the
// establishment chain. A candidate that is not currently prepared can
// never carry a dispatch, and the D-P17 re-run's own verdict is carried
// verbatim as the mapped echo. One dispatch per candidate: the shell
// module records the refused replayed basis (`replayed_from_prior_
// dispatch_decision`, an element of the refused vocabulary below) when a
// repeat is attempted, and this ceremony refuses it at the declarative
// basis check — the marker stays receiver-recorded state, per the L194
// deferral. The dispatch carries governed information to an eligible
// audience and nothing more: no external transport, no queue, no retry, no
// receipt, no consequence, no acceptance, no agent reply, no grant, no
// membership, no admission, no cognition runtime, no authority.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type { PondDeliveryCandidateDecisionAssessment } from "./pond-delivery-candidate-decision.js";
import {
  assessPondDeliveryCandidateDecision,
  POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS,
  POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS,
} from "./pond-delivery-candidate-decision.ts";

// The dispatch basis vocabulary: one true receiver-performed basis and
// five refused bases. The D-P5/L5 rule holds: a dispatch is a physical
// act of the receiving side — nothing in the delivery preparation, the
// channel, a model completion, or a scheduler may perform or record it,
// and a replay of a prior dispatch is refused outright (L192-195).
export type PondDispatchBasis =
  | "receiver_performed_in_process_dispatch_not_inferred"
  | "inferred_from_delivery_preparation"
  | "asserted_by_model_completion"
  | "replayed_from_prior_dispatch_decision"
  | "inferred_from_channel_visibility"
  | "scheduled_or_queued_automatically";

// The receiver-recorded dispatch-event metadata: the dispatch event's own
// time source, its freshness basis (event time only — the D-P2 ordering),
// and the explicit currentness posture. The seven dispatch postures ride
// beside the event fields inside this one receiver-recorded record
// (camelCase, the same field family the shell module and the delivery
// lane read): the postures are declarative refusal declarations, never
// grants.
export interface PondDispatchMetadata {
  readonly dispatch_basis: PondDispatchBasis;
  readonly dispatched_at_epoch_ms: number;
  readonly freshness_basis: "dispatch_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
  readonly dispatchTransportPosture: "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused";
  readonly dispatchPresentationPosture: "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read";
  readonly dispatchConsumptionPosture: "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required";
  readonly dispatchConsequencePosture: "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized";
  readonly dispatchAcceptancePosture: "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply";
  readonly dispatchEvidencePosture: "no_receipt_claimed_receipt_requires_its_own_governed_lane";
  readonly dispatchAuthorityPosture: "dispatch_grants_no_authority_membership_capability_or_cognition_runtime";
  readonly authority: "none";
}

// Receiver-owned dispatch checks (L49-55).
export type PondDispatchCheck =
  | "dispatch_decision_well_formed"
  | "dispatch_candidate_bound_to_receiver_held_principal"
  | "dispatch_basis_receiver_performed_not_inferred"
  | "delivery_candidate_reassessment_currently_prepared"
  | "dispatch_event_own_freshness_within_declared_maximum_age"
  | "dispatch_event_within_current_session_scope"
  | "dispatch_postures_complete";

// The dispatch-decision input: 15 exact keys. The candidate under dispatch
// is the supplied D-P17 candidate — the dispatch is OVER the candidate,
// never a re-stamp of it, and there is deliberately NO separate dispatch
// destination field: the destination flows only through the candidate's
// own addressedAgentRef (the D-P17 binding is the single source of truth;
// a second copy would create a contradictable one). The re-run below
// carries the same legs and the same re-timed evaluation pair, verbatim
// from the frozen D-P15/D-P16 input shapes.
export interface PondDispatchDecisionInput {
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
}

export interface PondDispatchDecisionAssessment {
  readonly contractVersion: "pond-dispatch-decision-d-p18";
  readonly dispatchDecisionVersion:
    | "pond-dispatch-decision-d-p18"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_dispatch_decision";
  readonly dispatchState:
    | "dispatch_not_performed"
    | "dispatch_performed_session_scoped_in_process_no_receipt";
  readonly reason:
    | "dispatch_decision_invalid"
    | "delivery_candidate_not_currently_prepared"
    | "dispatch_event_not_session_current"
    | "dispatch_event_not_of_the_current_session_scope"
    | "receiver_dispatch_proof_incomplete"
    | "all_dispatch_checks_satisfied";
  readonly dispatchEventFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // Mapped echo fields: the frozen D-P17 re-run's own fields carried
  // verbatim on every arm, through broken candidates too — including the
  // reassessment's own mapped echoes, so a refusal two depths down (a
  // stale delivered record, an unfresh gate, an expired intent) stays
  // readable at this cut without a second D-P18 literal for it. Field
  // names stay this cut's own; the frozen carrier names are never
  // re-declared here.
  readonly mappedCandidateState: PondDeliveryCandidateDecisionAssessment["deliveryCandidateState"];
  readonly mappedCandidateReassessmentReason: PondDeliveryCandidateDecisionAssessment["reason"];
  readonly mappedEstablishmentState: PondDeliveryCandidateDecisionAssessment["mappedEstablishmentState"];
  readonly mappedEstablishmentReason: PondDeliveryCandidateDecisionAssessment["mappedEstablishmentReason"];
  readonly mappedEstablishmentFreshnessDiagnosis: PondDeliveryCandidateDecisionAssessment["mappedEstablishmentFreshnessDiagnosis"];
  readonly mappedReadGateState: PondDeliveryCandidateDecisionAssessment["mappedReadGateState"];
  readonly mappedReadGateReason: PondDeliveryCandidateDecisionAssessment["mappedReadGateReason"];
  readonly mappedReadGateFreshnessDiagnosis: PondDeliveryCandidateDecisionAssessment["mappedReadGateFreshnessDiagnosis"];
  readonly satisfiedChecks: readonly PondDispatchCheck[];
  readonly unsatisfiedChecks: readonly PondDispatchCheck[];
  // The all-false ceiling: an in-process dispatch carries governed
  // information to an eligible audience and establishes nothing else.
  // It never uses external transport and is never queued, retried, or
  // scheduled; it never establishes a grant, a consequence or execution,
  // an agent acceptance, reply, or agreement, a membership or admission,
  // a cognition runtime, prose authority, a receipt, a scope, a
  // credential, a PrincipalId authorization, memory content, or current
  // truth (agent-to-agent L29, L186-190, L192-195, L200-205, L231-239,
  // L236-250; delegated-authority L325-333; runtime-allocation L481).
  readonly dispatchPerformsExternalTransport: false;
  readonly dispatchEstablishesGrant: false;
  readonly dispatchEstablishesConsequenceOrExecution: false;
  readonly dispatchEstablishesAcceptanceOrAgentReply: false;
  readonly dispatchEstablishesAgentCognitionRuntime: false;
  readonly dispatchEstablishesAuthorityFromProse: false;
  readonly dispatchEstablishesMembershipOrAdmission: false;
  readonly dispatchQueuedOrRetriedOrScheduled: false;
  readonly dispatchReceiptAdmitted: false;
  readonly dispatchEstablishesScope: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

// The declared dispatch-destination vocabulary: the D-P17 declared
// delivery destination vocabulary, re-exported by identity — the
// destination flows only through the prepared candidate's own
// addressedAgentRef, so a dispatch destination can never widen beyond
// what the delivery lane declared. Naming a ref here declares it a valid
// destination for a dispatch decision only — never an admission, never a
// capability, never membership (scope-sov L54-60; agent-to-agent
// L118-129). The selftest ties this object identity to the frozen D-P17
// constant.
export const POND_STAGE_DP18_DECLARED_DISPATCH_DESTINATION_REFS =
  POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS;

// Keys whose presence in a dispatch metadata record or its decision would
// mean a dispatch receipt, a queue entry, a retry record, an external
// transport record, or any frozen session-side class entered the decision
// as data. The frozen D-P17 inventory plus the four dispatch keys this
// lane exists to refuse. The exact-key deep walk means the cut's own
// longer key names are unaffected mechanically.
export const POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS = Object.freeze([
  ...POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS,
  "dispatchReceipt",
  "dispatchQueueEntry",
  "dispatchRetryRecord",
  "externalTransportRecord",
] as const);

const dispatchChecks = Object.freeze([
  "dispatch_decision_well_formed",
  "dispatch_candidate_bound_to_receiver_held_principal",
  "dispatch_basis_receiver_performed_not_inferred",
  "delivery_candidate_reassessment_currently_prepared",
  "dispatch_event_own_freshness_within_declared_maximum_age",
  "dispatch_event_within_current_session_scope",
  "dispatch_postures_complete",
] as const satisfies readonly PondDispatchCheck[]);

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
// literals over the dispatch-event metadata: metadata, then evaluation
// time, then maximum age, then future time; the fresh boundary is
// inclusive. A diagnosis is a diagnosis, never an admission.
const diagnoseDispatchFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.dispatched_at_epoch_ms) ||
    checked.freshness_basis !== "dispatch_event_time_only" ||
    checked.currentness_posture !== "not_established_consumer_must_evaluate"
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
  const dispatchedAt = checked.dispatched_at_epoch_ms as number;
  if (dispatchedAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - dispatchedAt;
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

const dispatchTransportVocabulary = [
  "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",
];
const dispatchPresentationVocabulary = [
  "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",
];
const dispatchConsumptionVocabulary = [
  "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",
];
const dispatchConsequenceVocabulary = [
  "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",
];
const dispatchAcceptanceVocabulary = [
  "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",
];
const dispatchEvidenceVocabulary = [
  "no_receipt_claimed_receipt_requires_its_own_governed_lane",
];
const dispatchAuthorityVocabulary = [
  "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",
];

const dispatchBasisVocabulary = [
  "receiver_performed_in_process_dispatch_not_inferred",
  "inferred_from_delivery_preparation",
  "asserted_by_model_completion",
  "replayed_from_prior_dispatch_decision",
  "inferred_from_channel_visibility",
  "scheduled_or_queued_automatically",
];

// The seven declarative-refusal posture fields: each field must carry a
// string in its own class for the dispatch event record to be validly
// shaped, and the dedicated posture check below refuses every non-complete
// arm at the proof-incomplete cause.
const refusalPosturesAllValidVocabulary = (
  metadataValue: Record<string, unknown>,
): boolean =>
  [
    [dispatchTransportVocabulary, metadataValue.dispatchTransportPosture],
    [dispatchPresentationVocabulary, metadataValue.dispatchPresentationPosture],
    [dispatchConsumptionVocabulary, metadataValue.dispatchConsumptionPosture],
    [dispatchConsequenceVocabulary, metadataValue.dispatchConsequencePosture],
    [dispatchAcceptanceVocabulary, metadataValue.dispatchAcceptancePosture],
    [dispatchEvidenceVocabulary, metadataValue.dispatchEvidencePosture],
    [dispatchAuthorityVocabulary, metadataValue.dispatchAuthorityPosture],
  ].every(([vocabulary, value]) =>
    (vocabulary as readonly string[]).includes(String(value)),
  );

const refusalPosturesComplete = (metadataValue: Record<string, unknown>) =>
  metadataValue.dispatchTransportPosture ===
    "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused" &&
  metadataValue.dispatchPresentationPosture ===
    "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read" &&
  metadataValue.dispatchConsumptionPosture ===
    "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required" &&
  metadataValue.dispatchConsequencePosture ===
    "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized" &&
  metadataValue.dispatchAcceptancePosture ===
    "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply" &&
  metadataValue.dispatchEvidencePosture ===
    "no_receipt_claimed_receipt_requires_its_own_governed_lane" &&
  metadataValue.dispatchAuthorityPosture ===
    "dispatch_grants_no_authority_membership_capability_or_cognition_runtime";

// Valid vocabulary shapes only — dispatch-event validity, not dispatch
// admission. The candidate under the dispatch is the re-run's material,
// not this check's: it must be present as a record object, and its full
// admission (currently prepared or not) happens only in the frozen D-P17
// re-run, whose conclusion is carried verbatim as the mapped echo. The
// candidate is never re-stamped here and never repaired.
const validDispatchMetadata = (value: unknown): boolean => {
  const metadataValue = record(value);
  return (
    metadataValue !== null &&
    exactKeys(metadataValue, [
      "dispatch_basis",
      "dispatched_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
      "dispatchTransportPosture",
      "dispatchPresentationPosture",
      "dispatchConsumptionPosture",
      "dispatchConsequencePosture",
      "dispatchAcceptancePosture",
      "dispatchEvidencePosture",
      "dispatchAuthorityPosture",
      "authority",
    ]) &&
    dispatchBasisVocabulary.includes(String(metadataValue.dispatch_basis)) &&
    safeNonNegativeInteger(metadataValue.dispatched_at_epoch_ms) &&
    metadataValue.freshness_basis === "dispatch_event_time_only" &&
    metadataValue.currentness_posture ===
      "not_established_consumer_must_evaluate" &&
    refusalPosturesAllValidVocabulary(metadataValue) &&
    metadataValue.authority === "none" &&
    !hasForbiddenKey(
      metadataValue,
      POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS,
    )
  );
};

const fullCandidateLegs = (input: PondDispatchDecisionInput) =>
  ({
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

// The mapped echo shapes (the D-P17 mapped precedent — typed to the frozen
// reassessment so a drift is a compile error, values carried verbatim from
// its fields, including ITS mapped echoes verbatim). Field names stay
// generic; the frozen names the echoes read are tied through quoted-index
// reads in the builder, never re-declared as this cut's own names and
// never dotted here.
interface PondMappedCandidateEcho {
  readonly state: PondDeliveryCandidateDecisionAssessment["deliveryCandidateState"];
  readonly reason: PondDeliveryCandidateDecisionAssessment["reason"];
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

const dispatchAssessment = (
  reason: PondDispatchDecisionAssessment["reason"],
  dispatchDecisionVersion: PondDispatchDecisionAssessment["dispatchDecisionVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedCandidate: PondMappedCandidateEcho,
  mappedEstablishment: PondMappedEstablishmentEcho,
  mappedReadGate: PondMappedReadGateEcho,
  satisfiedChecks: readonly PondDispatchCheck[],
  unsatisfiedChecks: readonly PondDispatchCheck[],
): PondDispatchDecisionAssessment => {
  const performed =
    reason === "all_dispatch_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-dispatch-decision-d-p18",
    dispatchDecisionVersion,
    assessmentKind: "deterministic_supplied_dispatch_decision",
    dispatchState: performed
      ? "dispatch_performed_session_scoped_in_process_no_receipt"
      : "dispatch_not_performed",
    reason,
    dispatchEventFreshnessDiagnosis: diagnosis,
    mappedCandidateState: mappedCandidate.state,
    mappedCandidateReassessmentReason: mappedCandidate.reason,
    mappedEstablishmentState: mappedEstablishment.state,
    mappedEstablishmentReason: mappedEstablishment.reason,
    mappedEstablishmentFreshnessDiagnosis: mappedEstablishment.diagnosis,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // A performed in-process dispatch records delivery of governed
    // information to an eligible audience, and it never leaves that state:
    // no external transport, no grant, no consequence or execution, no
    // agent acceptance or reply, no prose authority, no membership or
    // admission, no cognition runtime, no queue/retry/scheduling, no
    // receipt, no scope, no credential, no PrincipalId authorization, no
    // memory content, no current truth (agent-to-agent L29, L186-190,
    // L192-195, L200-205, L231-239, L236-250; delegated-authority L325-333;
    // runtime-allocation L481).
    dispatchPerformsExternalTransport: false,
    dispatchEstablishesGrant: false,
    dispatchEstablishesConsequenceOrExecution: false,
    dispatchEstablishesAcceptanceOrAgentReply: false,
    dispatchEstablishesAgentCognitionRuntime: false,
    dispatchEstablishesAuthorityFromProse: false,
    dispatchEstablishesMembershipOrAdmission: false,
    dispatchQueuedOrRetriedOrScheduled: false,
    dispatchReceiptAdmitted: false,
    dispatchEstablishesScope: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondDispatchDecision(
  input: PondDispatchDecisionInput,
): PondDispatchDecisionAssessment {
  // The fail-closed gate on the input object itself: garbage never throws
  // — a non-object input degrades to an empty record the validation and
  // re-runs refuse honestly (the D-P8 fail-closed discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondDispatchDecisionInput;
  // The echoes are computed on every arm, before any cause is chosen: a
  // broken candidate never unbinds the receiver's records, and an invalid
  // arm still diagnoses (D-P13 echo discipline). The candidate re-run
  // goes through this contract's own seam (evidence-activation L109 — the
  // independent inspection IS the re-run): the frozen D-P17 ceremony
  // re-runs itself over the SAME legs and the SAME re-timed evaluation
  // pair, and inside it the frozen D-P16 record admission, the frozen
  // D-P15 read gate, and the frozen establishment chain re-run again.
  const candidateLegs = fullCandidateLegs(input);
  const candidateReassessment = assessPondDeliveryCandidateDecision({
    deliveryCandidate: input.deliveryCandidate,
    ...candidateLegs,
  });
  const mappedCandidate: PondMappedCandidateEcho = {
    state: candidateReassessment["deliveryCandidateState"],
    reason: candidateReassessment.reason,
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
  // The D-P16 fallback pattern: diagnose the raw evaluation pair even
  // when the dispatch event never becomes valid, so every arm carries an
  // honest dispatch-event diagnosis.
  const fallbackDiagnosis = diagnoseDispatchFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validDispatchMetadata(input.dispatchMetadata))
    return dispatchAssessment(
      "dispatch_decision_invalid",
      "invalid",
      fallbackDiagnosis,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      [],
      dispatchChecks,
    );
  const metadataValue = input.dispatchMetadata as Record<string, unknown>;

  // The dispatch event's own diagnosis first as data: the metadata is
  // valid already, so the diagnosis (fresh or not) is honest on every
  // remaining arm — but the candidate reassessment outranks it in the
  // ladder (the delivery stage precedes the delivery stage's own act; L171-
  // 185), so a not-currently-prepared candidate refuses before the event's
  // freshness is even asked, with the event diagnosis still readable.
  const dispatchDiagnosis = diagnoseDispatchFreshness(
    metadataValue,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );

  // The frozen D-P17 re-run's verdict is the verdict: a candidate that is
  // not currently prepared at the dispatch evaluation instant can never
  // carry a dispatch, and the re-run's own reason (its gate cause, its
  // delivered-record cause, its intent-expiry cause, or its own invalid
  // cause) is carried verbatim as the mapped reassessment reason — a
  // two-depth honest echo.
  if (
    candidateReassessment["deliveryCandidateState"] !==
    "delivery_candidate_prepared_session_scoped_no_dispatch"
  )
    return dispatchAssessment(
      "delivery_candidate_not_currently_prepared",
      "pond-dispatch-decision-d-p18",
      dispatchDiagnosis,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      [],
      dispatchChecks,
    );

  // The dispatch event's own freshness — the newest event in the chain.
  // A future or stale dispatch event refuses here; the D-P17 lesson
  // applies verbatim (under one shared maximum age, dispatch-event
  // staleness implies every older event is staler, so the isolation of
  // this cause is by ladder order).
  if (dispatchDiagnosis.state !== "fresh")
    return dispatchAssessment(
      "dispatch_event_not_session_current",
      "pond-dispatch-decision-d-p18",
      dispatchDiagnosis,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      [],
      dispatchChecks,
    );

  // Session-scope binding for the dispatch event: the performed dispatch
  // must postdate the current session's establishment event, the
  // delivered composition event, and the delivery-intent event — a
  // dispatch performed before the session it would ride, before the
  // composition it would deliver, or before the intent it would realize
  // is not in the current scope. The candidate is validated by the
  // re-run above, so its metadata is read through that validated
  // candidate; the establishment metadata likewise through its validated
  // re-run.
  const establishmentMetadata = record(
    (input.establishmentRecord as Record<string, unknown>)["establishmentMetadata"],
  );
  const candidateValue = input.deliveryCandidate as Record<string, unknown>;
  const deliveredMetadata = record(
    (candidateValue["deliveredConversationRecord"] as Record<string, unknown>)[
      "conversationRecordMetadata"
    ],
  );
  const intentMetadata = record(candidateValue["deliveryIntentMetadata"]);
  const dispatchedAt = metadataValue["dispatched_at_epoch_ms"] as number;
  const establishedAt = establishmentMetadata?.["established_at_epoch_ms"] as
    | number
    | undefined;
  const composedAt = (deliveredMetadata ?? {})["composed_at_epoch_ms"] as
    | number
    | undefined;
  const recordedIntentAt = (intentMetadata ?? {})["recorded_at_epoch_ms"] as
    | number
    | undefined;
  if (
    typeof establishedAt !== "number" ||
    typeof composedAt !== "number" ||
    typeof recordedIntentAt !== "number" ||
    dispatchedAt < establishedAt ||
    dispatchedAt < composedAt ||
    dispatchedAt < recordedIntentAt
  )
    return dispatchAssessment(
      "dispatch_event_not_of_the_current_session_scope",
      "pond-dispatch-decision-d-p18",
      dispatchDiagnosis,
      mappedCandidate,
      mappedEstablishment,
      mappedReadGate,
      [],
      dispatchChecks,
    );

  // The remaining declarative checks, evaluated honestly over the
  // validated metadata and the re-run verdict: the refused bases and the
  // principal binding fold here with their unsatisfied check names
  // readable (L49-55 — every leg green except the declarative checks that
  // failed), never behind a defensive literal. The destination carries no
  // separate check: the candidate's own binding (its addressedAgentRef
  // against the declared vocabulary and its own delivered record) was
  // proven by the re-run's prepared verdict.
  const values = [
    true,
    candidateValue["principalRef"] === input.receiverHeldPrincipalRef &&
      wellFormedPrincipalRef(input.receiverHeldPrincipalRef),
    metadataValue.dispatch_basis ===
      "receiver_performed_in_process_dispatch_not_inferred",
    candidateReassessment["deliveryCandidateState"] ===
      "delivery_candidate_prepared_session_scoped_no_dispatch",
    dispatchDiagnosis.state === "fresh",
    typeof establishedAt === "number" &&
      typeof composedAt === "number" &&
      typeof recordedIntentAt === "number" &&
      dispatchedAt >= establishedAt &&
      dispatchedAt >= composedAt &&
      dispatchedAt >= recordedIntentAt,
    refusalPosturesComplete(metadataValue),
  ];
  const satisfied = dispatchChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = dispatchChecks.filter(
    (_, index) => values[index] !== true,
  );
  return dispatchAssessment(
    unsatisfied.length === 0
      ? "all_dispatch_checks_satisfied"
      : "receiver_dispatch_proof_incomplete",
    "pond-dispatch-decision-d-p18",
    dispatchDiagnosis,
    mappedCandidate,
    mappedEstablishment,
    mappedReadGate,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. A performed in-process dispatch is
// a delivery fact only; it never uses external transport, never queues or
// retries or schedules, never establishes a grant, consequence, execution,
// acceptance, reply, membership, admission, cognition runtime, receipt,
// scope, credential, authorization, memory content, or current truth.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP18Invariant_ChecksExact = Assert<
  Equal<
    PondDispatchCheck,
    | "dispatch_decision_well_formed"
    | "dispatch_candidate_bound_to_receiver_held_principal"
    | "dispatch_basis_receiver_performed_not_inferred"
    | "delivery_candidate_reassessment_currently_prepared"
    | "dispatch_event_own_freshness_within_declared_maximum_age"
    | "dispatch_event_within_current_session_scope"
    | "dispatch_postures_complete"
  >
>;
export type PondStageDP18Invariant_StatesExact = Assert<
  Equal<
    PondDispatchDecisionAssessment["dispatchState"],
    | "dispatch_not_performed"
    | "dispatch_performed_session_scoped_in_process_no_receipt"
  >
>;
export type PondStageDP18Invariant_ReasonsExact = Assert<
  Equal<
    PondDispatchDecisionAssessment["reason"],
    | "dispatch_decision_invalid"
    | "delivery_candidate_not_currently_prepared"
    | "dispatch_event_not_session_current"
    | "dispatch_event_not_of_the_current_session_scope"
    | "receiver_dispatch_proof_incomplete"
    | "all_dispatch_checks_satisfied"
  >
>;
export type PondStageDP18Invariant_MappedCandidateStateTiedToDP17 = Assert<
  Equal<
    PondDispatchDecisionAssessment["mappedCandidateState"],
    PondDeliveryCandidateDecisionAssessment["deliveryCandidateState"]
  >
>;
export type PondStageDP18Invariant_MappedCandidateReasonTiedToDP17 = Assert<
  Equal<
    PondDispatchDecisionAssessment["mappedCandidateReassessmentReason"],
    PondDeliveryCandidateDecisionAssessment["reason"]
  >
>;
export type PondStageDP18Invariant_MappedEstablishmentStateThroughDP17 = Assert<
  Equal<
    PondDispatchDecisionAssessment["mappedEstablishmentState"],
    PondDeliveryCandidateDecisionAssessment["mappedEstablishmentState"]
  >
>;
export type PondStageDP18Invariant_MappedEstablishmentReasonThroughDP17 = Assert<
  Equal<
    PondDispatchDecisionAssessment["mappedEstablishmentReason"],
    PondDeliveryCandidateDecisionAssessment["mappedEstablishmentReason"]
  >
>;
export type PondStageDP18Invariant_MappedReadGateStateThroughDP17 = Assert<
  Equal<
    PondDispatchDecisionAssessment["mappedReadGateState"],
    PondDeliveryCandidateDecisionAssessment["mappedReadGateState"]
  >
>;
export type PondStageDP18Invariant_MappedReadGateReasonThroughDP17 = Assert<
  Equal<
    PondDispatchDecisionAssessment["mappedReadGateReason"],
    PondDeliveryCandidateDecisionAssessment["mappedReadGateReason"]
  >
>;
export type PondStageDP18Invariant_DispatchNeverTransportsGrantsAcceptsOrClaims =
  Assert<
    Equal<
      [
        PondDispatchDecisionAssessment["dispatchPerformsExternalTransport"],
        PondDispatchDecisionAssessment["dispatchEstablishesGrant"],
        PondDispatchDecisionAssessment["dispatchEstablishesConsequenceOrExecution"],
        PondDispatchDecisionAssessment["dispatchEstablishesAcceptanceOrAgentReply"],
        PondDispatchDecisionAssessment["dispatchEstablishesAgentCognitionRuntime"],
        PondDispatchDecisionAssessment["dispatchEstablishesAuthorityFromProse"],
        PondDispatchDecisionAssessment["dispatchEstablishesMembershipOrAdmission"],
        PondDispatchDecisionAssessment["dispatchQueuedOrRetriedOrScheduled"],
        PondDispatchDecisionAssessment["dispatchReceiptAdmitted"],
        PondDispatchDecisionAssessment["dispatchEstablishesScope"],
        PondDispatchDecisionAssessment["credentialAdmitted"],
        PondDispatchDecisionAssessment["principalIdAcceptedAsAuthorization"],
        PondDispatchDecisionAssessment["personalMemoryContentAdmitted"],
        PondDispatchDecisionAssessment["currentTruthAdmitted"],
        PondDispatchDecisionAssessment["runtimeActivationPosture"],
        PondDispatchDecisionAssessment["authority"],
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
        "not_included",
        "none",
      ]
    >
  >;
export type PondStageDP18Invariant_NoForbiddenMetadataKeys = Assert<
  HasAnyKey<PondDispatchMetadata, (typeof POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP18Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondDispatchDecisionAssessment, (typeof POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP18Invariant_DeclaredDestinationsTiedToDP17 = Assert<
  Equal<
    (typeof POND_STAGE_DP18_DECLARED_DISPATCH_DESTINATION_REFS)[number],
    (typeof POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS)[number]
  >
>;