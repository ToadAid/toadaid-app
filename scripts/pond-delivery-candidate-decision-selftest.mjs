// Stage D-P17 selftest: the Pond delivery lane. The matrix block proves the
// delivery-candidate decision arms agree with the real assessor deep-equal
// and deep-frozen; the identity ties prove the legs cannot drift from the
// frozen D-P15 read-gate entry, the declared destination vocabulary from
// the frozen D-P16 constant and the D-P0 exports, the delivered record from
// the D-P16 admitted fixture arm, and the clock ties from the D-P16 pins;
// the negatives block proves every recompute break lands on its mapped
// cause with honest echoes through green legs — including the delivered-
// record re-run echo; the lifecycle block proves the retraction
// confinement, the session-scope binding, and the two expiry instants by
// pure parameter arithmetic (the gate trips at establishment + max + 1,
// the intent's own freshness trips when its own event goes over the age);
// the fail-closed block refuses garbage without throwing; the ceiling block
// proves the all-false families and the widened inventory; the
// destination-tie block proves the destination is the record's own
// addressed agent and the declared vocabulary exactly; the hygiene block
// walks the banned vocabulary and the env names; and the ui wiring block
// proves the committed generated bundle, the shell module, and the
// fixture-clock shell drive — establish, compose, prepare delivery,
// refused preparations, retract, confined — with no transport or dispatch
// ever performed. Offline structural; no env-gated block exists in this
// cut (it holds no secret-bearing ceremony).

import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  stageDP17DecisionMatrix,
  stageDP17ReceiverRef,
  stageDP17Agent0Ref,
  stageDP17CommunitySlotRef,
  stageDP17ProjectSlotRef,
  stageDP17UndeclaredDestinationRef,
  stageDP17EstablishedAtEpochMs,
  stageDP17ComposedAtEpochMs,
  stageDP17RecordedIntentAtEpochMs,
  stageDP17EvaluatedAtEpochMs,
  stageDP17GateExpiryEvaluatedAtEpochMs,
  stageDP17IntentExpiryEvaluatedAtEpochMs,
  stageDP17RetractedEvaluatedAtEpochMs,
  stageDP17StaleComposedAtEpochMs,
  stageDP17ReceiverMaximumAgeMs,
  stageDP17ReadGateRecord,
} from "../src/fixtures/stage-d-p17-pond-delivery.ts";
import {
  assessPondDeliveryCandidateDecision,
  POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS,
  POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS,
} from "../src/contracts/pond-delivery-candidate-decision.ts";

import {
  stageDP16RecordMatrix,
  stageDP16ReceiverRef,
  stageDP16Agent0Ref,
  stageDP16CommunitySlotRef,
  stageDP16ProjectSlotRef,
  stageDP16ComposedAtEpochMs,
  stageDP16EstablishedAtEpochMs,
  stageDP16ExpiredEvaluationEpochMs,
  stageDP16RetractedAtEpochMs,
  stageDP16EvaluatedAtEpochMs,
  stageDP16ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p16-pond-conversation.ts";
import {
  assessPondConversationRecordAdmission,
  POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS,
  POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS,
} from "../src/contracts/pond-conversation-record-admission.ts";

import {
  stageDP15ReadGateEntryActivated,
  stageDP15ReceiverRef,
  stageDP15ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p15-live-session.ts";
import { POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS as DP15_INVENTORY_CONTRACT } from "../src/contracts/pond-live-session-establishment.ts";
import {
  stageDP0LocalPrincipalRef,
  stageDP0Agent0Ref,
  stageDP0CommunityAgentSlotRef,
  stageDP0ProjectAgentSlotRef,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "../src/contracts/pond-agent-presence-observation-intake.ts";
import { stageDP6AuthenticationObservationComplete } from "../src/fixtures/stage-d-p6-local-principal-authentication-observation.ts";

import {
  assessPondDeliveryCandidateDecision as assessGeneratedDeliveryDecision,
  assessPondConversationRecordAdmission as assessGeneratedRecordAdmission,
  POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS as GENERATED_DECLARED_DESTINATIONS,
  pondStageDP17DeliveryCandidateTemplate,
  pondStageDP16ConversationRecordTemplate as GENERATED_DP16_RECORD_TEMPLATE,
} from "../ui/generated/pond-stage-d-live-session-delivery.js";
import {
  assessPondConversationRecordAdmission as assessGeneratedRecordAdmissionFromConversationBundle,
  pondStageDP16ConversationRecordTemplate as CONVERSATION_BUNDLE_DP16_RECORD_TEMPLATE,
} from "../ui/generated/pond-stage-d-live-session-conversation.js";
import {
  currentDeliveryPosture,
  renderPondDelivery,
  recordDeliveryCandidatePreparation,
} from "../ui/pond-delivery.js";
import {
  currentConversationSurfacePosture,
  heldConversationRecordEntries,
  recordConversationComposedText,
} from "../ui/pond-conversation.js";
import {
  establishLiveSession,
  heldLiveSessionRecords,
  retractLiveSession,
} from "../ui/pond-live-session.js";
import {
  stageDP15SessionEntryLiveSessionEstablished,
  stageDP15EvaluatedAtEpochMs,
} from "../src/fixtures/stage-d-p15-live-session.ts";

const repoRoot = new URL("..", import.meta.url).pathname;
const deepClone = (value) => JSON.parse(JSON.stringify(value));
const assertDeepFrozen = (value, path) => {
  if (value === null || typeof value !== "object") return;
  assert.ok(Object.isFrozen(value), `not frozen: ${path}`);
  for (const key of Object.keys(value))
    assertDeepFrozen(value[key], `${path}.${key}`);
};
const assertLacksKeys = (value, banned, path) => {
  if (value === null || typeof value !== "object") return;
  for (const key of Object.keys(value)) {
    assert.ok(!banned.includes(key), `banned key ${key} at ${path}`);
    assertLacksKeys(value[key], banned, `${path}.${key}`);
  }
};
const walkFiles = (root) => {
  const paths = [];
  const walk = (directory) => {
    for (const name of readdirSync(directory)) {
      const current = join(directory, name);
      if (statSync(current).isDirectory()) walk(current);
      else paths.push(current);
    }
  };
  walk(root);
  return paths;
};
const readModule = (path) => readFileSync(join(repoRoot, path), "utf8");

let blocks = 0;
const block = (label, run) => {
  blocks += 1;
  console.log(`block ${blocks}: ${label}`);
  run();
};

// Input-shape helper: the fixture entries carry exactly the assessor input
// the contract demands — the input builder re-assembles it in the
// contract's exact key order so the recompute is a clean re-run.
const DECISION_INPUT_KEYS = [
  "deliveryCandidate",
  "receiverHeldPrincipalRef",
  "readGateRecord",
  "establishmentRecord",
  "dp5CeremonyRecord",
  "dp6ObservationRecord",
  "dp8VerifierRecord",
  "dp8ProofRecord",
  "dp9IssuanceRecord",
  "dp9MappingRecord",
  "dp10ActivationRecord",
  "receiverRetractionRecord",
  "receiverEvaluatedAtEpochMs",
  "receiverMaximumAgeMs",
];

const decisionInputOf = (entry) => {
  const input = {};
  for (const key of DECISION_INPUT_KEYS) input[key] = entry[key];
  return input;
};

const byLabel = (matrix, label) => {
  const entry = matrix.find((candidate) => candidate.fixtureLabel === label);
  assert.ok(entry, `missing fixture arm: ${label}`);
  return entry;
};

const evaluated = stageDP17EvaluatedAtEpochMs;
const maximumAge = stageDP17ReceiverMaximumAgeMs;
const recordedIntentAt = stageDP17RecordedIntentAtEpochMs;

const admittedArm = byLabel(stageDP17DecisionMatrix, "delivery_candidate_admitted");

// The cut's own fresh runs — only D-P17 assessments ever land here.
const dp17FreshRuns = [];
const runDecision = (entry) => {
  const fresh = assessPondDeliveryCandidateDecision(decisionInputOf(entry));
  dp17FreshRuns.push(fresh);
  return fresh;
};

// ---------------------------------------------------------------
// Block 1: matrix recompute — every decision arm deep-equals its pinned
// assessment, every arm and assessment is deep-frozen, the satisfied arm
// carries the exact satisfied-check list, and every assessment's ceiling
// stays all-false.
// ---------------------------------------------------------------
block("matrix", () => {
  assert.equal(stageDP17DecisionMatrix.length, 18, "the decision matrix is pinned at 18 arms");
  const deliveredState =
    "delivery_candidate_prepared_session_scoped_no_dispatch";
  for (const arm of stageDP17DecisionMatrix) {
    assert.ok(arm.fixtureLabel, "every arm carries a fixture label");
    const fresh = runDecision(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `arm ${arm.fixtureLabel}`);
    assert.equal(fresh.contractVersion, "pond-delivery-candidate-decision-d-p17", arm.fixtureLabel);
    assert.ok(
      fresh.deliveryCandidateState === "delivery_candidate_not_prepared" ||
        fresh.deliveryCandidateState === deliveredState,
      arm.fixtureLabel,
    );
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.satisfiedChecks), arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.unsatisfiedChecks), arm.fixtureLabel);
  }

  // The satisfied arm carries the full positive verdict.
  const satisfiedArm = admittedArm;
  assert.equal(satisfiedArm.assessment.deliveryCandidateState, deliveredState);
  assert.equal(satisfiedArm.assessment.reason, "all_delivery_candidate_checks_satisfied");
  assert.deepEqual(satisfiedArm.assessment.unsatisfiedChecks, []);
  assert.equal(satisfiedArm.assessment.deliveryPerformsTransportOrDispatch, false);
  assert.equal(satisfiedArm.assessment.deliveryReceiptAdmitted, false);
  assert.equal(satisfiedArm.assessment.deliveryEstablishesConsequenceOrExecution, false);
  assert.equal(satisfiedArm.assessment.deliveryEstablishesAcceptanceOrTaskAgreement, false);
  assert.equal(
    satisfiedArm.assessment.mappedDeliveredRecordAdmissionState,
    "conversation_record_admitted_session_scoped_no_delivery",
  );
  assert.equal(
    satisfiedArm.assessment.deliveryIntentFreshnessDiagnosis.observationAgeMs,
    9000,
    "the intent event is 9 seconds fresh at the lane evaluation instant",
  );
});

// ---------------------------------------------------------------
// Block 2: identity ties — the legs cannot drift from the frozen D-P15
// read-gate entry; the delivered record cannot drift from the frozen
// D-P16 admitted fixture arm; the declared destination vocabulary is the
// D-P16 constant by identity; the clock ties descend arithmetically from
// the frozen pins; the inventory is the D-P16 union plus four keys.
// ---------------------------------------------------------------
block("identityTies", () => {
  const frozenGateEntry = stageDP15ReadGateEntryActivated;
  assert.deepEqual(
    deepClone(stageDP17ReadGateRecord),
    deepClone(frozenGateEntry.readGateRecord),
    "the delivery gate record drifted from the frozen D-P15 read-gate entry",
  );
  for (const [label, key] of [
    ["establishment", "establishmentRecord"],
    ["dp5", "dp5CeremonyRecord"],
    ["dp6", "dp6ObservationRecord"],
    ["dp8 verifier", "dp8VerifierRecord"],
    ["dp8 proof", "dp8ProofRecord"],
    ["dp9 issuance", "dp9IssuanceRecord"],
    ["dp9 mapping", "dp9MappingRecord"],
    ["dp10", "dp10ActivationRecord"],
  ]) {
    assert.deepEqual(
      deepClone(admittedArm[key]),
      deepClone(frozenGateEntry[key]),
      `the decision arm's D-P15 ${label} leg drifted from the frozen read-gate entry`,
    );
  }
  assert.equal(admittedArm.receiverHeldPrincipalRef, frozenGateEntry.receiverHeldPrincipalRef);
  assert.equal(stageDP17ReceiverRef, stageDP16ReceiverRef);
  assert.equal(stageDP17ReceiverRef, stageDP15ReceiverRef);
  assert.equal(stageDP17ReceiverMaximumAgeMs, stageDP15ReceiverMaximumAgeMs);
  assert.equal(stageDP17ReceiverMaximumAgeMs, stageDP16ReceiverMaximumAgeMs);
  assert.equal(stageDP17ReceiverMaximumAgeMs, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS);

  // The declared delivered-record copy is exactly the frozen D-P16
  // admitted fixture arm's record — D-P16 dv and kind preserved verbatim.
  const dp16AdmittedArm = byLabel(stageDP16RecordMatrix, "conversation_record_admitted");
  assert.deepEqual(
    deepClone(admittedArm.deliveryCandidate.deliveredConversationRecord),
    deepClone(dp16AdmittedArm.conversationRecord),
    "the delivered record copy drifted from the admitted D-P16 fixture record",
  );
  assert.equal(
    admittedArm.deliveryCandidate.deliveredConversationRecord.contractVersion,
    "pond-conversation-record-admission-d-p16",
    "the delivered copy keeps the D-P16 dv verbatim",
  );
  assert.equal(
    admittedArm.deliveryCandidate.deliveredConversationRecord.kind,
    "pond-conversation-record",
  );
  assert.equal(
    admittedArm.deliveryCandidate.addressedAgentRef,
    stageDP17Agent0Ref,
  );
  assert.equal(
    admittedArm.deliveryCandidate.addressedAgentRef,
    admittedArm.deliveryCandidate.deliveredConversationRecord.addressedAgentRef,
    "the destination ties the delivered record's own addressed agent",
  );

  // The declared destination vocabulary is the D-P16 constant by
  // identity, and its content is exactly the D-P0 agent family.
  assert.equal(
    POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS,
    POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS,
    "the delivery-destination vocabulary is the frozen D-P16 constant re-exported by identity",
  );
  assert.deepEqual(deepClone(GENERATED_DECLARED_DESTINATIONS), [
    stageDP0Agent0Ref,
    stageDP0CommunityAgentSlotRef,
    stageDP0ProjectAgentSlotRef,
  ]);
  assert.equal(
    stageDP17Agent0Ref,
    stageDP0Agent0Ref,
  );
  assert.equal(stageDP17CommunitySlotRef, stageDP0CommunityAgentSlotRef);
  assert.equal(stageDP17ProjectSlotRef, stageDP0ProjectAgentSlotRef);

  // The clock ties descend from the frozen D-P16 pins: the intent event
  // postdates both the establishment event and the composition; the lane
  // evaluation instant is fresh over the intent; the gate-expiry instant
  // is exactly the D-P16 expired instant; the intent-expiry instant is
  // recorded + max + 1.
  assert.equal(
    stageDP17RecordedIntentAtEpochMs,
    stageDP16ComposedAtEpochMs + 20000,
    "the intent event postdates the composition by the pinned 20 seconds",
  );
  assert.equal(
    stageDP17EstablishedAtEpochMs,
    stageDP16EstablishedAtEpochMs,
    "the session-scope binding event is the D-P15 establishment event",
  );
  assert.equal(
    stageDP17ComposedAtEpochMs,
    stageDP16ComposedAtEpochMs,
    "the delivered composition is the D-P16 fixture composition",
  );
  assert.ok(
    stageDP17RecordedIntentAtEpochMs >= stageDP17EstablishedAtEpochMs &&
      stageDP17RecordedIntentAtEpochMs >= stageDP17ComposedAtEpochMs,
    "the intent event sits inside the session scope it delivers from",
  );
  assert.ok(
    stageDP17EvaluatedAtEpochMs - stageDP17RecordedIntentAtEpochMs <=
      stageDP17ReceiverMaximumAgeMs,
    "the lane evaluation instant stays fresh over the intent event",
  );
  assert.equal(
    stageDP17GateExpiryEvaluatedAtEpochMs,
    stageDP17EstablishedAtEpochMs + stageDP17ReceiverMaximumAgeMs + 1,
    "the gate-expiry instant is establishment + declared maximum age + 1",
  );
  assert.equal(
    stageDP17GateExpiryEvaluatedAtEpochMs,
    stageDP16ExpiredEvaluationEpochMs,
    "the gate-expiry instant is exactly the frozen D-P16 expired instant",
  );
  assert.equal(
    stageDP17IntentExpiryEvaluatedAtEpochMs,
    stageDP17RecordedIntentAtEpochMs + stageDP17ReceiverMaximumAgeMs + 1,
    "the intent-expiry instant is recorded + declared maximum age + 1",
  );
  assert.ok(
    stageDP17RetractedEvaluatedAtEpochMs > stageDP17RecordedIntentAtEpochMs,
    "the retracted arm evaluates after the intent event so its own diagnosis stays honest",
  );
  assert.ok(
    stageDP17StaleComposedAtEpochMs < stageDP17EstablishedAtEpochMs,
    "the stale delivered composition predates the session scope",
  );

  // The forbidden-key inventory: exactly the frozen D-P16 union plus the
  // four delivery keys this lane exists to refuse.
  assert.equal(
    POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS.length,
    DP15_INVENTORY_CONTRACT.length + 8,
    "the D-P17 inventory is exactly the D-P15 union plus eight keys",
  );
  assert.deepEqual(
    POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS.slice(DP15_INVENTORY_CONTRACT.length),
    [
      "agentReply",
      "agentReplyComposition",
      "deliveredMessage",
      "replyComposition",
      "dispatchedMessage",
      "sentMessage",
      "deliveryReceipt",
      "agentTaskAcceptance",
    ],
  );
});

// ---------------------------------------------------------------
// Block 3: recompute-agreement negatives — every refused basis fails on
// its own basis check alone with every leg echo green (L49-55); the
// declarative and shape refusals land on their dedicated causes; the
// delivered-record re-run breaks land on the delivered-record cause with
// the mapped echo honest; gate-leg breakage lands on the gate cause
// without unbinding the echoes.
// ---------------------------------------------------------------
block("recomputeAgreementNegatives", () => {
  const refusedBasisArms = [
    "delivery_candidate_refused_inferred_from_message_composition",
    "delivery_candidate_refused_inferred_from_channel_visibility",
    "delivery_candidate_refused_asserted_by_model_completion",
    "delivery_candidate_refused_inferred_from_room_presence",
    "delivery_candidate_refused_replayed_from_prior_delivery_decision",
  ];
  for (const label of refusedBasisArms) {
    const arm = byLabel(stageDP17DecisionMatrix, label);
    const fresh = runDecision(arm);
    assert.equal(fresh.deliveryCandidateState, "delivery_candidate_not_prepared", label);
    assert.equal(fresh.reason, "receiver_delivery_candidate_proof_incomplete", label);
    assert.deepEqual(
      fresh.unsatisfiedChecks,
      ["delivery_basis_receiver_recorded_not_inferred"],
      label,
    );
    assert.equal(fresh.satisfiedChecks.length, 9, label);
    // Every leg echo stays green (L49-55): the basis is the only failure.
    assert.equal(
      fresh.mappedEstablishmentState,
      "live_session_scoped_authentication_established",
      label,
    );
    assert.equal(
      fresh.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      label,
    );
    assert.equal(fresh.mappedReadGateFreshnessDiagnosis.state, "fresh", label);
    assert.equal(fresh.deliveryIntentFreshnessDiagnosis.state, "fresh", label);
    assert.equal(
      fresh.mappedDeliveredRecordAdmissionState,
      "conversation_record_admitted_session_scoped_no_delivery",
      label,
    );
  }

  // The undeclared destination refuses at its dedicated cause (an
  // audience is never inferred — scope-sov L54-60); the
  // destination-vs-record tie break folds to proof-incomplete with the
  // bound check unsatisfied while the declared check stays green.
  const undeclaredArm = byLabel(stageDP17DecisionMatrix, "delivery_candidate_refused_destination_undeclared");
  const undeclaredRun = runDecision(undeclaredArm);
  assert.equal(undeclaredRun.deliveryCandidateState, "delivery_candidate_not_prepared");
  assert.equal(undeclaredRun.reason, "delivery_destination_not_declared");
  assert.equal(undeclaredRun.satisfiedChecks.length, 0);
  assert.equal(
    undeclaredRun.mappedEstablishmentState,
    "live_session_scoped_authentication_established",
  );
  assert.equal(
    undeclaredRun.deliveryIntentFreshnessDiagnosis.state,
    "fresh",
  );
  const unboundArm = byLabel(stageDP17DecisionMatrix, "delivery_candidate_refused_destination_not_bound_to_record");
  const unboundRun = runDecision(unboundArm);
  assert.equal(unboundRun.reason, "receiver_delivery_candidate_proof_incomplete");
  assert.deepEqual(
    unboundRun.unsatisfiedChecks,
    ["delivery_destination_bound_to_delivered_record"],
  );
  assert.equal(unboundRun.satisfiedChecks.length, 9);

  // The delivered-record re-run breaks land on the delivered-record cause
  // with the mapped echo carrying the honest re-run reason.
  const staleRecordArm = byLabel(stageDP17DecisionMatrix, "delivery_candidate_refused_delivered_record_stale");
  const staleRecordRun = runDecision(staleRecordArm);
  assert.equal(staleRecordRun.reason, "delivered_record_not_currently_admitted");
  assert.equal(
    staleRecordRun.mappedDeliveredRecordAdmissionReason,
    "conversation_record_not_session_current",
  );
  assert.equal(staleRecordRun.satisfiedChecks.length, 0);
  assert.equal(staleRecordRun.deliveryIntentFreshnessDiagnosis.state, "fresh", "the intent diagnosis stays honest while the delivered record refuses");
  const reStampedArm = byLabel(stageDP17DecisionMatrix, "delivery_candidate_refused_delivered_record_re_stamped");
  const reStampedRun = runDecision(reStampedArm);
  assert.equal(reStampedRun.reason, "delivered_record_not_currently_admitted");
  assert.equal(
    reStampedRun.mappedDeliveredRecordAdmissionReason,
    "conversation_record_invalid",
    "a re-stamped delivered copy refuses at the re-run, never reformed",
  );

  // The intent-future arm refuses on its own freshness with the diagnosis
  // honestly unknown; the pre-scope arm refuses at the scope cause.
  const futureArm = byLabel(stageDP17DecisionMatrix, "delivery_candidate_refused_intent_event_in_future");
  assert.equal(
    futureArm.assessment.reason,
    "delivery_intent_not_session_current",
  );
  assert.equal(futureArm.assessment.deliveryIntentFreshnessDiagnosis.state, "unknown");
  assert.equal(
    futureArm.assessment.deliveryIntentFreshnessDiagnosis.reason,
    "observation_time_in_future",
  );
  const preScopeArm = byLabel(stageDP17DecisionMatrix, "delivery_candidate_refused_intent_before_session_scope");
  assert.equal(
    preScopeArm.assessment.reason,
    "delivery_intent_not_of_the_current_session_scope",
  );
  assert.equal(preScopeArm.assessment.deliveryIntentFreshnessDiagnosis.state, "fresh");

  // Shape refusals: tampered postures and missing/forbidden keys refuse
  // at the invalid cause.
  const shapeRefusals = {
    delivery_candidate_refused_tampered_delivery_posture:
      "delivery_candidate_invalid",
    delivery_candidate_refused_missing_key: "delivery_candidate_invalid",
    delivery_candidate_refused_extra_key_dispatched_message:
      "delivery_candidate_invalid",
  };
  for (const [label, expectedCause] of Object.entries(shapeRefusals)) {
    const fresh = runDecision(byLabel(stageDP17DecisionMatrix, label));
    assert.equal(fresh.deliveryCandidateState, "delivery_candidate_not_prepared", label);
    assert.equal(fresh.reason, expectedCause, label);
    assert.equal(fresh.satisfiedChecks.length, 0, label);
  }

  // Gate-leg breakage: a swapped receiver ref breaks the re-run chain at
  // the gate cause while the intent diagnosis stays honest.
  const brokenLegsRun = assessPondDeliveryCandidateDecision({
    ...decisionInputOf(admittedArm),
    receiverHeldPrincipalRef: "principal:fixture:stage-d-p14:not-the-receiver",
  });
  assert.equal(brokenLegsRun.deliveryCandidateState, "delivery_candidate_not_prepared");
  assert.equal(
    brokenLegsRun.reason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
  );
  assert.equal(brokenLegsRun.deliveryIntentFreshnessDiagnosis.state, "fresh");
  assert.notEqual(
    brokenLegsRun.mappedEstablishmentState,
    "live_session_scoped_authentication_established",
  );
});

// ---------------------------------------------------------------
// Block 4: lifecycle — retraction confines honestly; the session-scope
// binding refuses earlier-scope intents; the two expiry instants refuse
// separately and honestly (the gate at establishment + max + 1 with the
// other diagnoses still fresh; the intent's own freshness when its event
// goes over the age).
// ---------------------------------------------------------------
block("lifecycle", () => {
  // The retracted-session arm: a present retraction fact refuses the
  // decision at the gate cause, the intent diagnosis stays honest, and
  // the delivered-record echo honestly refuses with it.
  const confinementArm = byLabel(stageDP17DecisionMatrix, "delivery_candidate_confined_after_retraction");
  const confinementRun = runDecision(confinementArm);
  assert.equal(confinementRun.deliveryCandidateState, "delivery_candidate_not_prepared");
  assert.equal(
    confinementRun.reason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
  );
  assert.equal(confinementRun.deliveryIntentFreshnessDiagnosis.state, "fresh");
  assert.equal(
    confinementRun.mappedEstablishmentState,
    "not_established",
  );
  assert.equal(
    confinementRun.mappedEstablishmentReason,
    "receiver_retraction_on_record",
  );
  assert.equal(
    confinementRun.mappedDeliveredRecordAdmissionState,
    "conversation_record_not_admitted",
  );

  // A re-run of the satisfied arm over a fresh evaluation pair but a
  // present retraction record refuses too — retraction dominates
  // regardless of the intent's freshness (messaging L197-199).
  const retractionInput = {
    ...decisionInputOf(admittedArm),
    receiverRetractionRecord: {
      contractVersion: "pond-live-session-retraction-d-p15",
      kind: "pond-live-session-retraction",
      retracted_at_epoch_ms: stageDP16RetractedAtEpochMs,
      retractionPosture: "receiver_recorded_live_session_retraction_no_grant",
      authority: "none",
    },
    receiverEvaluatedAtEpochMs: evaluated,
  };
  const retractionRun = assessPondDeliveryCandidateDecision(retractionInput);
  assert.equal(retractionRun.reason, "live_session_read_gate_not_live_activated_refused_or_not_fresh");
  assert.equal(retractionRun.deliveryIntentFreshnessDiagnosis.state, "fresh");

  // Gate expiry: evaluate at establishment + max + 1 — the gate trips on
  // arithmetic alone while the intent diagnosis and the delivered
  // record's own freshness diagnosis stay honestly fresh.
  const gateExpiryArm = byLabel(stageDP17DecisionMatrix, "delivery_candidate_confined_at_gate_expiry");
  const gateExpiryRun = runDecision(gateExpiryArm);
  assert.equal(gateExpiryRun.reason, "live_session_read_gate_not_live_activated_refused_or_not_fresh");
  assert.equal(gateExpiryRun.satisfiedChecks.length, 0);
  assert.equal(
    gateExpiryRun.deliveryIntentFreshnessDiagnosis.state,
    "fresh",
    "the intent event is still fresh at gate expiry",
  );
  assert.equal(gateExpiryRun.deliveryIntentFreshnessDiagnosis.observationAgeMs, 39001);
  const deliveredAtGateExpiry = assessPondConversationRecordAdmission({
    conversationRecord: gateExpiryArm.deliveryCandidate.deliveredConversationRecord,
    receiverHeldPrincipalRef: gateExpiryArm.receiverHeldPrincipalRef,
    readGateRecord: gateExpiryArm.readGateRecord,
    establishmentRecord: gateExpiryArm.establishmentRecord,
    dp5CeremonyRecord: gateExpiryArm.dp5CeremonyRecord,
    dp6ObservationRecord: gateExpiryArm.dp6ObservationRecord,
    dp8VerifierRecord: gateExpiryArm.dp8VerifierRecord,
    dp8ProofRecord: gateExpiryArm.dp8ProofRecord,
    dp9IssuanceRecord: gateExpiryArm.dp9IssuanceRecord,
    dp9MappingRecord: gateExpiryArm.dp9MappingRecord,
    dp10ActivationRecord: gateExpiryArm.dp10ActivationRecord,
    receiverRetractionRecord: null,
    receiverEvaluatedAtEpochMs: stageDP17GateExpiryEvaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAge,
  });
  assert.equal(
    deliveredAtGateExpiry.conversationRecordFreshnessDiagnosis.state,
    "fresh",
    "the delivered record's own composition event is still fresh at gate expiry",
  );
  assert.equal(
    deliveredAtGateExpiry.conversationRecordFreshnessDiagnosis.observationAgeMs,
    59001,
  );
  assert.equal(
    deliveredAtGateExpiry.reason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
    "the delivered re-run refuses on the same expired gate, never on its own composition",
  );

  // Intent expiry: evaluate at recorded + max + 1 — the intent's own
  // freshness trips first in the ladder, with the mapped leg echoes
  // honestly stale alongside (the intent event is the newest event, so
  // under one shared declared maximum age its expiry implies the older
  // events are staler: the cause is isolated by ladder order, and the
  // echoes never hide it).
  const intentExpiryArm = byLabel(stageDP17DecisionMatrix, "delivery_candidate_refused_intent_expired");
  const intentExpiryRun = runDecision(intentExpiryArm);
  assert.equal(intentExpiryRun.reason, "delivery_intent_not_session_current");
  assert.deepEqual(intentExpiryRun.deliveryIntentFreshnessDiagnosis, {
    state: "stale",
    reason: "declared_maximum_age_expired",
    observationAgeMs: 60001,
  });
  assert.equal(intentExpiryRun.mappedReadGateFreshnessDiagnosis.state, "stale");
  assert.equal(intentExpiryRun.satisfiedChecks.length, 0);

  // The intent recorded after the establishment but before the
  // composition it would deliver refuses the scope binding too — the
  // intent must postdate the delivered composition, not just the session.
  const postEstablishmentPreCompositionRun = assessPondDeliveryCandidateDecision({
    ...decisionInputOf(admittedArm),
    deliveryCandidate: {
      ...admittedArm.deliveryCandidate,
      deliveryIntentMetadata: {
        ...admittedArm.deliveryCandidate.deliveryIntentMetadata,
        recorded_at_epoch_ms: stageDP17EstablishedAtEpochMs + 500,
      },
    },
  });
  assert.equal(
    postEstablishmentPreCompositionRun.reason,
    "delivery_intent_not_of_the_current_session_scope",
  );
  assert.equal(
    postEstablishmentPreCompositionRun.deliveryIntentFreshnessDiagnosis.state,
    "fresh",
  );
});

// ---------------------------------------------------------------
// Block 5: fail-closed garbage — nulls, wrong types, and broken shapes
// refuse without throwing, with both honest diagnoses still present.
// ---------------------------------------------------------------
block("failClosed", () => {
  const garbageInputs = [
    null,
    undefined,
    0,
    "string",
    [],
    {},
    { deliveryCandidate: null },
  ];
  for (const garbage of garbageInputs) {
    const fresh = assessPondDeliveryCandidateDecision(garbage);
    assert.equal(
      fresh.deliveryCandidateState,
      "delivery_candidate_not_prepared",
      `garbage candidate ${String(garbage).slice(0, 20)}`,
    );
    assert.equal(fresh.authority, "none");
    assert.equal(fresh.runtimeActivationPosture, "not_included");
    assertLacksKeys(fresh, POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS, "fail-closed decision");
    // The honest diagnoses stay present on every garbage arm.
    assert.ok(fresh.deliveryIntentFreshnessDiagnosis !== null);
    assert.ok(fresh.mappedDeliveredRecordAdmissionState !== null);
    assert.ok(fresh.mappedEstablishmentState !== null);
    assert.ok(fresh.mappedReadGateState !== null);
  }
  const garbageInputState = assessPondDeliveryCandidateDecision(null);
  assert.equal(
    garbageInputState.reason,
    "delivery_candidate_invalid",
    "garbage input degrades to the honest invalid cause, never a throw",
  );
  assert.equal(
    garbageInputState.mappedDeliveredRecordAdmissionReason,
    "conversation_record_invalid",
  );
  // A deep-walk garbage probe: a forbidden key nested inside a posture
  // object never admits through the walk.
  const nestedGarbageRun = assessPondDeliveryCandidateDecision({
    ...decisionInputOf(admittedArm),
    deliveryCandidate: {
      ...admittedArm.deliveryCandidate,
      deliveryIntentMetadata: {
        ...admittedArm.deliveryCandidate.deliveryIntentMetadata,
        nested: { dispatchedMessage: "reachable" },
      },
    },
  });
  assert.equal(nestedGarbageRun.reason, "delivery_candidate_invalid");
});

// ---------------------------------------------------------------
// Block 6: ceiling and widen — the all-false family pinned on every fresh
// run; the widened inventory is the D-P16 union plus four delivery keys;
// add-key widens refuse through the deep walk.
// ---------------------------------------------------------------
block("ceilingAndWiden", () => {
  assert.deepEqual(
    POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS.slice(
      POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS.length,
    ),
    ["dispatchedMessage", "sentMessage", "deliveryReceipt", "agentTaskAcceptance"],
  );
  for (const [index, key] of POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS.entries()) {
    assert.equal(POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS[index], key);
  }

  // Add-key widen probes: a candidate carrying a dispatched, sent,
  // receipt, or acceptance payload key refuses at the invalid cause —
  // the widening never greens.
  const widenOf = (extraKey) =>
    assessPondDeliveryCandidateDecision({
      ...decisionInputOf(admittedArm),
      deliveryCandidate: {
        ...admittedArm.deliveryCandidate,
        [extraKey]: "widened-through-prose",
      },
    });
  for (const extraKey of [
    "dispatchedMessage",
    "sentMessage",
    "deliveryReceipt",
    "agentTaskAcceptance",
    "agentReply",
    "agentReplyComposition",
    "deliveredMessage",
    "replyComposition",
    "chatMessage",
    "agentSession",
    "agentSecret",
    "agentAdmission",
  ]) {
    const widened = widenOf(extraKey);
    assert.equal(widened.deliveryCandidateState, "delivery_candidate_not_prepared", extraKey);
    assert.equal(widened.reason, "delivery_candidate_invalid", extraKey);
  }

  // The all-false ceiling family walked over every fresh run collected
  // across the blocks so far.
  for (const fresh of dp17FreshRuns) {
    assertLacksKeys(fresh, POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS, "fresh-run ceiling");
    for (const key of [
      "deliveryPerformsTransportOrDispatch",
      "deliveryEstablishesGrant",
      "deliveryEstablishesConsequenceOrExecution",
      "deliveryEstablishesAcceptanceOrTaskAgreement",
      "deliveryEstablishesAuthorityFromProse",
      "deliveryEstablishesMembershipOrAdmission",
      "deliveryEstablishesAgentCognitionRuntime",
      "deliveryReceiptAdmitted",
      "deliveryEstablishesScope",
      "credentialAdmitted",
      "principalIdAcceptedAsAuthorization",
      "personalMemoryContentAdmitted",
      "currentTruthAdmitted",
      "runtimeActivationPosture",
      "authority",
    ]) {
      if (!(key in fresh)) continue;
      assert.equal(fresh[key], key === "runtimeActivationPosture" ? "not_included" : key === "authority" ? "none" : false, `ceiling key ${key} must stay pinned`);
    }
  }
});

// ---------------------------------------------------------------
// Block 7: the destination tie — the declared destination vocabulary is
// exactly the D-P0 agent family; the destination ties the delivered
// record's own addressed agent on the satisfied arm; the community-slot
// record's candidate prepares honestly; the undeclared destination never
// prepares.
// ---------------------------------------------------------------
block("destinationTie", () => {
  assert.deepEqual(deepClone(POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS), [
    stageDP17Agent0Ref,
    stageDP17CommunitySlotRef,
    stageDP17ProjectSlotRef,
  ]);

  // The destination-vs-record tie holds on the satisfied arm.
  const satisfiedCandidate = admittedArm.deliveryCandidate;
  assert.equal(
    satisfiedCandidate.addressedAgentRef,
    satisfiedCandidate.deliveredConversationRecord.addressedAgentRef,
  );
  assert.equal(satisfiedCandidate.addressedAgentRef, stageDP0Agent0Ref);

  // The community-slot record admits as a D-P16 conversation record (the
  // slot ref is declared for composition), so its delivery candidate
  // prepares honestly with no transport: the destination ties the
  // record's own addressed agent.
  const dp16CommunityArm = byLabel(stageDP16RecordMatrix, "conversation_record_admitted_community_slot");
  const communityCandidate = {
    ...satisfiedCandidate,
    deliveredConversationRecord: dp16CommunityArm.conversationRecord,
    addressedAgentRef: dp16CommunityArm.conversationRecord.addressedAgentRef,
  };
  const communityRun = assessPondDeliveryCandidateDecision({
    ...decisionInputOf(admittedArm),
    deliveryCandidate: communityCandidate,
  });
  assert.equal(
    communityRun.deliveryCandidateState,
    "delivery_candidate_prepared_session_scoped_no_dispatch",
  );
  assert.equal(communityRun.reason, "all_delivery_candidate_checks_satisfied");
  assert.equal(communityRun.deliveryPerformsTransportOrDispatch, false);
  assert.equal(communityRun.deliveryPerformsTransportOrDispatch, communityRun.deliveryPerformsTransportOrDispatch && false);

  // The undeclared destination ref: the delivery lane refuses — an
  // audience outside the declared vocabulary is never inferred, and the
  // dedicated cause names it.
  const undeclaredRun = assessPondDeliveryCandidateDecision({
    ...decisionInputOf(admittedArm),
    deliveryCandidate: {
      ...satisfiedCandidate,
      addressedAgentRef: stageDP17UndeclaredDestinationRef,
    },
  });
  assert.equal(undeclaredRun.reason, "delivery_destination_not_declared");
  assert.equal(undeclaredRun.deliveryCandidateState, "delivery_candidate_not_prepared");
});

// ---------------------------------------------------------------
// Block 8: hygiene — the banned frozen vocabulary stays out of the cut's
// own sources, the contract and fixture carry no DOM/network needles, the
// fixture is import-free, the inventory union and env prefixes pin, and
// the hand-written delivery module stays walked.
// ---------------------------------------------------------------
block("hygiene", () => {
  const contractPaths = [
    "src/contracts/pond-delivery-candidate-decision.ts",
    "src/fixtures/stage-d-p17-pond-delivery.ts",
  ];
  const texts = contractPaths.map((path) => readModule(path));

  // (a) DOM-shaped needles and transport text stay out of the cut's
  // contract and fixture files.
  const domNeedles = [
    "document.",
    "window.",
    "localStorage",
    "createElement",
    "innerHTML",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "WebSocket",
  ];
  contractPaths.forEach((path, index) => {
    for (const needle of domNeedles) {
      assert.ok(!texts[index].includes(needle), `${path} carries the DOM/transport needle ${needle}`);
    }
  });

  // (b) network constants stay out of the cut's contract files.
  const networkNeedles = ["wss://", "https://", "http://", "eth_node", "json_rpc", "0x"];
  contractPaths.forEach((path, index) => {
    for (const needle of networkNeedles) {
      assert.ok(!texts[index].includes(needle), `${path} carries the network constant ${needle}`);
    }
  });

  // (c) the fixture is value-import-free (type-only imports only).
  const fixtureText = texts[1];
  for (const line of fixtureText.split("\n")) {
    if (line.startsWith("import")) {
      assert.ok(
        line.startsWith("import type {"),
        `the fixture carries a non-type import: ${line.trim()}`,
      );
    }
  }

  // (d) the banned-name source walk over the contract file: quoted-index
  // reads of frozen fields and import lines are the tie/leg plumbing (the
  // established exemption) and are stripped before matching; the needle
  // then catches this cut re-declaring a frozen name as its own.
  const nameNeedles = [
    "privateReadsActivated",
    "principalIdIssued",
    "mappingEstablishmentState",
    "onchainVerificationState",
    "collaborativeReadPosture",
    "collaborativeReadScopePosture",
    "readScopePosture",
    "activationState",
    "readAdmissionState",
    "privateReadActivationState",
    "sessionScopePosture",
    "authenticationPerformed",
    "POND_STAGE_DP12",
    "POND_STAGE_DP13",
    "pond-knowledge-forge",
    "fixture_structural_session_scoped_private_read_activation",
    "fixture_structural_session_scoped_collaborative_structural_read_activation",
    "all_activation_checks_satisfied",
  ];
  const stripQuotedIndexReads = (text) =>
    text.replace(/\[\s*["'][A-Za-z_$][\w$]*["']\s*\]/g, "[]");
  const stripImports = (text) =>
    text.split("\n").filter((line) => !line.startsWith("import")).join("\n");
  const normalized = stripImports(
    stripQuotedIndexReads(texts[0]),
  );
  for (const needle of nameNeedles) {
    assert.ok(!normalized.includes(needle), `the contract carries frozen name ${needle} outside the leg plumbing`);
  }

  // (e) the inventory union stays intact: the D-P16 inventory is the
  // imported base, and this cut's four delivery keys are quoted in full —
  // the composed walk is exactly one key longer per addition.
  const contractText = texts[0];
  assert.ok(
    contractText.includes("POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS"),
    "the composed inventory must import the frozen D-P16 base",
  );
  for (const key of ["dispatchedMessage", "sentMessage", "deliveryReceipt", "agentTaskAcceptance"]) {
    assert.ok(contractText.includes(`"${key}"`), `forbidden key ${key} missing from the contract inventory`);
  }

  // (f) the env-needle family stays out of every non-sanctioned file: this
  // cut has no secret-bearing ceremony, so no first-stage env name appears
  // in any file of this cut. The ban matches the shared env prefix —
  // strictly wider than either full needle, and this walk itself never
  // carries one.
  for (const path of [
    "src/contracts/pond-delivery-candidate-decision.ts",
    "src/fixtures/stage-d-p17-pond-delivery.ts",
    "docs/stage-d-p17-pond-delivery-lane.md",
    "ui/pond-delivery.js",
    "ui/pond-conversation.js",
  ]) {
    const fileText = readModule(path);
    assert.ok(
      !fileText.includes("TOADAID_LIVE_"),
      `${path} carries a first-stage live-session env name`,
    );
  }

  // (g) the hand-written delivery module stays walked: no D-P9/D-P10
  // vocabulary, no src import, no banned transport/store needle.
  const moduleText = readModule("ui/pond-delivery.js");
  assert.ok(
    !moduleText.includes("pond-local-principal-id-issuance") &&
      !moduleText.includes("pond-erc8004-identity-mapping") &&
      !moduleText.includes("pond-principal-identity-readiness-composition") &&
      !moduleText.includes("d-p9") &&
      !moduleText.includes("pond-private-read-activation") &&
      !moduleText.includes("pond-private-read-admission") &&
      !moduleText.includes("d-p10"),
    "the hand-written delivery module carries frozen D-P9/D-P10 vocabulary",
  );
  assert.ok(!moduleText.includes('from "../src/'), "the module must never import src contracts directly");
  for (const forbidden of [
    "__TAURI__",
    "invoke(",
    "fetch(",
    "XMLHttpRequest",
    "WebSocket",
    "EventSource",
    "localStorage",
    "sessionStorage",
  ]) {
    assert.ok(!moduleText.includes(forbidden), `the module must not carry ${forbidden}`);
  }
});

// ---------------------------------------------------------------
// Block 9: ui wiring — the committed generated bundle ties to the src
// contracts; the shell renders fail-closed; the fixture-clock shell drive
// runs the honest decision-store lifecycle (establish → compose → prepare
// delivery → refused preparations → confined); the markup contract holds
// with the mic still disabled and the modules in lane order; the module
// texts and the package wiring hold.
// ---------------------------------------------------------------
block("uiWiring", () => {
  // (a) generated-bundle tie: the committed artifact is the only bridge
  // from the shell module to the contracts; its assessors recompute the
  // established arms identically to the src contracts, and the D-P16
  // assessors tie three ways as the plumbing proof.
  const srcDecisionRun = assessPondDeliveryCandidateDecision(decisionInputOf(admittedArm));
  const genDecisionRun = assessGeneratedDeliveryDecision(decisionInputOf(admittedArm));
  assert.deepEqual(deepClone(genDecisionRun), deepClone(srcDecisionRun));
  const refusedArm = byLabel(stageDP17DecisionMatrix, "delivery_candidate_refused_inferred_from_channel_visibility");
  const srcRefusedRun = assessPondDeliveryCandidateDecision(decisionInputOf(refusedArm));
  const genRefusedRun = assessGeneratedDeliveryDecision(decisionInputOf(refusedArm));
  assert.deepEqual(deepClone(genRefusedRun), deepClone(srcRefusedRun));
  const dp16AdmittedArm = byLabel(stageDP16RecordMatrix, "conversation_record_admitted");
  const recordInputKeys = [
    "conversationRecord",
    "receiverHeldPrincipalRef",
    "readGateRecord",
    "establishmentRecord",
    "dp5CeremonyRecord",
    "dp6ObservationRecord",
    "dp8VerifierRecord",
    "dp8ProofRecord",
    "dp9IssuanceRecord",
    "dp9MappingRecord",
    "dp10ActivationRecord",
    "receiverRetractionRecord",
    "receiverEvaluatedAtEpochMs",
    "receiverMaximumAgeMs",
  ];
  const recordInputOf = (entry) => {
    const input = {};
    for (const key of recordInputKeys) input[key] = entry[key];
    return input;
  };
  const srcRecordRun = assessPondConversationRecordAdmission(recordInputOf(dp16AdmittedArm));
  const genRecordRunFromDeliveryBundle = assessGeneratedRecordAdmission(
    recordInputOf(dp16AdmittedArm),
  );
  assert.deepEqual(
    deepClone(genRecordRunFromDeliveryBundle),
    deepClone(srcRecordRun),
    "the delivery bundle carries the frozen D-P16 assessors as the plumbing",
  );
  const genRecordRunFromConversationBundle =
    assessGeneratedRecordAdmissionFromConversationBundle(recordInputOf(dp16AdmittedArm));
  assert.deepEqual(
    deepClone(genRecordRunFromConversationBundle),
    deepClone(srcRecordRun),
    "the conversation bundle's D-P16 assessor ties to the same src run",
  );

  // The bundle's re-inlined D-P16 record template ties to the
  // conversation bundle's frozen template field for field.
  assert.deepEqual(
    deepClone(GENERATED_DP16_RECORD_TEMPLATE),
    deepClone(CONVERSATION_BUNDLE_DP16_RECORD_TEMPLATE),
    "the delivery entry re-inlines the frozen D-P16 record template verbatim",
  );

  // The bundle's candidate template plus the receiver-own fields equals
  // the pinned admitted candidate — the shell never restates a posture
  // literal, and the delivered copy keeps the D-P16 dv verbatim.
  const templateTie = {
    ...pondStageDP17DeliveryCandidateTemplate,
    deliveredConversationRecord: dp16AdmittedArm.conversationRecord,
    addressedAgentRef: admittedArm.deliveryCandidate.addressedAgentRef,
    deliveryIntentMetadata: {
      ...pondStageDP17DeliveryCandidateTemplate.deliveryIntentMetadata,
      recorded_at_epoch_ms:
        admittedArm.deliveryCandidate.deliveryIntentMetadata.recorded_at_epoch_ms,
    },
  };
  assert.deepEqual(deepClone(templateTie), deepClone(admittedArm.deliveryCandidate));
  assert.equal(
    templateTie.deliveredConversationRecord.contractVersion,
    "pond-conversation-record-admission-d-p16",
  );

  // (b) render drive — fail-closed on missing document/nodes.
  assert.equal(renderPondDelivery(undefined), false);
  const elementStub = () => {
    const element = {
      className: "",
      textContent: "",
      children: [],
      listeners: {},
      dataset: {},
      attributes: {},
      type: "",
      disabled: false,
      value: "",
      setAttribute(name, value) {
        element.attributes[name] = String(value);
      },
      addEventListener(type, handler) {
        (element.listeners[type] ??= []).push(handler);
      },
      append(...nodes) {
        element.children.push(...nodes);
      },
      replaceChildren(...nodes) {
        element.children = nodes;
      },
      get selectedOptions() {
        return element.options ?? [];
      },
      options: [],
    };
    return element;
  };
  const documentStub = () => {
    const nodes = {
      note: elementStub(),
      status: elementStub(),
      list: elementStub(),
    };
    const created = [];
    return {
      nodes,
      created,
      querySelector(selector) {
        if (selector === "[data-delivery-note]") return nodes.note;
        if (selector === "[data-delivery-status]") return nodes.status;
        if (selector === "[data-delivery-list]") return nodes.list;
        return null;
      },
      createElement(tag) {
        const node = elementStub();
        node.tagName = tag;
        created.push(node);
        return node;
      },
    };
  };
  const missingStatus = documentStub();
  missingStatus.nodes.status = null;
  assert.equal(renderPondDelivery(missingStatus), false);
  const missingList = documentStub();
  missingList.nodes.list = null;
  assert.equal(renderPondDelivery(missingList), false);
  const missingNote = documentStub();
  missingNote.nodes.note = null;
  assert.equal(renderPondDelivery(missingNote), false);

  // The render drive on the empty shell state: the honest empty posture.
  const collectText = (node) =>
    [node.textContent, ...node.children.map(collectText)].join("\n");
  const liveDocument = documentStub();
  assert.equal(renderPondDelivery(liveDocument), true);
  assert.equal(liveDocument.nodes.note.dataset.deliveryRendered, "true");
  assert.match(collectText(liveDocument.nodes.list), /No delivery candidates prepared/);

  // (c2) the shell drive on the fixture clock — the full decision-store
  // lifecycle: establish → compose → prepare delivery → refused
  // preparations → retract → confined. Determinism comes from the
  // contract's purity, never from the wall clock.
  const establishedArmyD15 = stageDP15SessionEntryLiveSessionEstablished;
  const nowMs = stageDP15EvaluatedAtEpochMs;
  const verifierRecord = deepClone(establishedArmyD15.dp8VerifierRecord);
  const proofRecord = deepClone(establishedArmyD15.dp8ProofRecord);
  const observationRecord = deepClone(
    stageDP6AuthenticationObservationComplete.observationRecord,
  );
  const establishment = establishLiveSession({
    verifierRecord,
    proofRecord,
    observationRecord,
    evaluatedAtEpochMs: nowMs,
    maximumAgeMs: maximumAge,
  });
  assert.equal(
    establishment.sessionState,
    "live_session_scoped_authentication_established",
    "the shell-drive establishment must succeed over the healthy legs",
  );
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs: nowMs });
  assert.equal(held.held, true);

  // Compose once: a real composition records.
  const composeEpoch = nowMs + 1000;
  const composed = recordConversationComposedText({
    composedText: "Desk, we ride at dawn. Ready your structural reads.",
    addressedAgentRef: stageDP0Agent0Ref,
    composedAtEpochMs: composeEpoch,
    evaluatedAtEpochMs: composeEpoch,
  });
  assert.equal(composed.recorded, true, "the healthy composition must record");
  const conversationHold = heldConversationRecordEntries();
  assert.equal(conversationHold.held, true);
  assert.equal(conversationHold.entries.length, 1);

  // Prepare the delivery candidate: the destination ties the record's own
  // addressed agent, the intent event postdates the composition, and the
  // decision prepares session-scoped with no dispatch. The whole drive
  // stays inside the shared freshness window — the D-P6 observation event
  // is pinned at 1_800_000_030_000, so every evaluation instant used below
  // stays at or below the D-P16 drive's own 65_000 horizon.
  const recordAt = composeEpoch + 500;
  const preparedAt = recordAt + 500;
  const prepared = recordDeliveryCandidatePreparation({
    conversationRecordIndex: 0,
    recordedAtEpochMs: recordAt,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(prepared.recorded, true, "the healthy preparation must record");
  assert.equal(
    prepared.assessment.deliveryCandidateState,
    "delivery_candidate_prepared_session_scoped_no_dispatch",
  );
  assert.equal(prepared.assessment.reason, "all_delivery_candidate_checks_satisfied");
  assert.equal(prepared.assessment.deliveryPerformsTransportOrDispatch, false);
  assert.equal(prepared.assessment.deliveryReceiptAdmitted, false);
  const postureRun = currentDeliveryPosture({ evaluatedAtEpochMs: preparedAt });
  assert.equal(postureRun.assessments.length, 1);
  assert.equal(
    postureRun.assessments[0].reason,
    "all_delivery_candidate_checks_satisfied",
  );
  assert.equal(
    postureRun.deliveredTexts[0].composedText,
    "Desk, we ride at dawn. Ready your structural reads.",
    "the delivered text renders from shell state, index-paired",
  );
  assert.equal(postureRun.decidedFacts[0].conversationRecordIndex, 0);

  // Refused preparations store nothing: an out-of-range record index
  // refuses the candidate's own validity; the decision count stays 1.
  const refusedIndex = recordDeliveryCandidatePreparation({
    conversationRecordIndex: 5,
    recordedAtEpochMs: recordAt,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(refusedIndex.recorded, false);
  assert.equal(refusedIndex.assessment.reason, "delivery_candidate_invalid");
  assert.equal(currentDeliveryPosture({ evaluatedAtEpochMs: preparedAt }).assessments.length, 1);

  // A preparation whose intent event is in the future relative to the
  // evaluation refuses its own freshness and stores nothing.
  const refusedFuture = recordDeliveryCandidatePreparation({
    conversationRecordIndex: 0,
    recordedAtEpochMs: recordAt,
    evaluatedAtEpochMs: recordAt - 1,
  });
  assert.equal(refusedFuture.recorded, false);
  assert.equal(refusedFuture.assessment.reason, "delivery_intent_not_session_current");
  assert.equal(currentDeliveryPosture({ evaluatedAtEpochMs: preparedAt }).assessments.length, 1);

  // Retract: the recorded decision re-reads confined; a further
  // preparation refuses at the gate cause and stores nothing. The
  // retraction and confinement instants mirror the D-P16 drive's own
  // (nowMs + 4000 / nowMs + 5000) so every leg echo stays honest.
  const retraction = retractLiveSession({ retractedAtEpochMs: nowMs + 4000 });
  assert.equal(retraction.retracted, true);
  const confinedAt = nowMs + 5000;
  const confinedRun = currentDeliveryPosture({ evaluatedAtEpochMs: confinedAt });
  assert.equal(confinedRun.assessments.length, 1);
  assert.equal(
    confinedRun.assessments[0].deliveryCandidateState,
    "delivery_candidate_not_prepared",
    "the recorded decision re-reads confined after retraction",
  );
  assert.equal(
    confinedRun.assessments[0].reason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
  );
  const postRetractionPrep = recordDeliveryCandidatePreparation({
    conversationRecordIndex: 0,
    recordedAtEpochMs: confinedAt,
    evaluatedAtEpochMs: confinedAt,
  });
  assert.equal(postRetractionPrep.recorded, false);
  assert.equal(
    postRetractionPrep.assessment.reason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
  );
  // The decision count stays exactly 1 through every refusal.
  assert.equal(currentDeliveryPosture({ evaluatedAtEpochMs: confinedAt }).assessments.length, 1);

  // (d) markup contract on ui/pond-desktop.html — the delivery region is
  // additive, the mic stays disabled, and the modules load in lane order.
  const html = readModule("ui/pond-desktop.html");
  assert.match(html, /data-delivery-note/);
  assert.match(html, /data-delivery-status/);
  assert.match(html, /data-delivery-list/);
  assert.match(html, /mic-button" type="button" disabled/);
  const liveSessionTag = html.indexOf('src="pond-live-session.js"');
  const conversationTag = html.indexOf('src="pond-conversation.js"');
  const deliveryTag = html.indexOf('src="pond-delivery.js"');
  const shellTag = html.indexOf('src="pond-shell.js"');
  assert.ok(liveSessionTag !== -1 && conversationTag !== -1 && deliveryTag !== -1 && shellTag !== -1);
  assert.ok(liveSessionTag < conversationTag, "the conversation module loads after the live session module");
  assert.ok(conversationTag < deliveryTag, "the delivery module loads after the conversation module");
  assert.ok(deliveryTag < shellTag, "the delivery module loads before the shell module");

  // (e) module-text hygiene and package/CI wiring.
  const conversationText = readModule("ui/pond-conversation.js");
  assert.match(
    conversationText,
    /export const heldConversationRecordEntries = \(\)/,
    "the additive held-entries export is present on the conversation module",
  );
  const deliveryModuleText = readModule("ui/pond-delivery.js");
  assert.match(
    deliveryModuleText,
    /from "\.\/generated\/pond-stage-d-live-session-delivery\.js"/,
    "the delivery module imports only through the committed generated artifact",
  );
  assert.match(
    deliveryModuleText,
    /if \(typeof document !== "undefined"\) \{\s*renderPondDelivery\(document\);\s*\}/,
    "the delivery module self-mounts like its sibling lane modules",
  );
  const packageJson = JSON.parse(readModule("package.json"));
  assert.equal(
    packageJson.scripts["test:stage-d-p17"],
    "node scripts/pond-delivery-candidate-decision-selftest.mjs",
  );
  assert.equal(
    packageJson.scripts["stage-d:render-live-session-delivery"],
    "node scripts/render-stage-d-live-session-delivery.mjs",
  );
  const ci = readModule(".github/workflows/ci.yml");
  assert.equal(ci.split("Verify Stage D-P17 pond delivery lane").length - 1, 2);
});

console.log(`POND_STAGE_DP17_POND_DELIVERY_LANE_SELFTEST_PASS · ${blocks} blocks`);