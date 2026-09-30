// Stage D-P18 selftest: the Pond dispatch lane. The matrix block proves the
// in-process dispatch arms agree with the real assessor deep-equal and
// deep-frozen; the identity ties prove the legs cannot drift from the
// frozen D-P15 read-gate entry, the dispatched candidate from the frozen
// D-P17 admitted fixture arm, the declared destination vocabulary from the
// frozen D-P17/D-P16 constants and the D-P0 exports, and the clock ties
// from the D-P17 pins; the negatives block proves every recompute break
// lands on its mapped cause with honest two-depth echoes — the D-P17
// re-run's own verdict carried verbatim; the lifecycle block proves the
// retraction confinement, the session-scope binding, the dispatch event's
// own freshness, and the two expiry confinements where the reassessment
// refuses while the dispatch event itself stays honestly fresh; the
// fail-closed block refuses garbage without throwing; the ceiling block
// proves the all-false families and the widened inventory; the
// destination-tie block proves no separate dispatch destination field
// exists and the declared vocabulary is exactly the D-P17 chain; the
// hygiene block walks the banned vocabulary and the env names; and the ui
// wiring block proves the committed generated bundle, the shell module,
// and the fixture-clock shell drive — establish, compose, prepare
// delivery, dispatch once, refused replay, out-of-range index, retract,
// confined — with no external transport ever performed. Offline
// structural; no env-gated block exists in this cut (it holds no
// secret-bearing ceremony).

import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  stageDP18DispatchMatrix,
  stageDP18ReceiverRef,
  stageDP18Agent0Ref,
  stageDP18CommunitySlotRef,
  stageDP18EvaluatedAtEpochMs,
  stageDP18DispatchedAtEpochMs,
  stageDP18DispatchFutureEventAtEpochMs,
  stageDP18PreScopeDispatchAtEpochMs,
  stageDP18PreEstablishmentDispatchAtEpochMs,
  stageDP18RetractedDispatchAtEpochMs,
  stageDP18RetractedEvaluatedAtEpochMs,
  stageDP18GateExpiryEvaluatedAtEpochMs,
  stageDP18IntentExpiryEvaluatedAtEpochMs,
  stageDP18ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p18-pond-dispatch.ts";
import {
  assessPondDispatchDecision,
  POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS,
  POND_STAGE_DP18_DECLARED_DISPATCH_DESTINATION_REFS,
} from "../src/contracts/pond-dispatch-decision.ts";

import {
  stageDP17DecisionMatrix,
  stageDP17ReceiverRef,
  stageDP17Agent0Ref,
  stageDP17CommunitySlotRef,
  stageDP17ProjectSlotRef,
  stageDP17EvaluatedAtEpochMs,
  stageDP17RecordedIntentAtEpochMs,
  stageDP17GateExpiryEvaluatedAtEpochMs,
  stageDP17IntentExpiryEvaluatedAtEpochMs,
  stageDP17RetractedEvaluatedAtEpochMs,
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
  stageDP16ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p16-pond-conversation.ts";
import {
  POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS,
  POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS,
} from "../src/contracts/pond-conversation-record-admission.ts";

import {
  stageDP15ReadGateEntryActivated,
  stageDP15ReceiverRef,
  stageDP15ReceiverMaximumAgeMs,
  stageDP15SessionEntryLiveSessionEstablished,
  stageDP15EvaluatedAtEpochMs,
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
  assessPondDispatchDecision as assessGeneratedDispatchDecision,
  assessPondDeliveryCandidateDecision as assessGeneratedDeliveryDecisionFromDispatchBundle,
  POND_STAGE_DP18_DECLARED_DISPATCH_DESTINATION_REFS as GENERATED_DECLARED_DESTINATIONS,
  pondStageDP18DispatchMetadataTemplate,
} from "../ui/generated/pond-stage-d-live-session-dispatch.js";
import {
  pondStageDP17DeliveryCandidateTemplate,
} from "../ui/generated/pond-stage-d-live-session-delivery.js";
import {
  currentDeliveryPosture,
  heldDeliveryDecisions,
  renderPondDelivery,
  recordDeliveryCandidatePreparation,
} from "../ui/pond-delivery.js";
import {
  currentDispatchPosture,
  performReceiverDispatch,
  renderPondDispatch,
} from "../ui/pond-dispatch.js";
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
const DISPATCH_INPUT_KEYS = [
  "deliveryCandidate",
  "dispatchMetadata",
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

const dispatchInputOf = (entry) => {
  const input = {};
  for (const key of DISPATCH_INPUT_KEYS) input[key] = entry[key];
  return input;
};

const byLabel = (matrix, label) => {
  const entry = matrix.find((candidate) => candidate.fixtureLabel === label);
  assert.ok(entry, `missing fixture arm: ${label}`);
  return entry;
};

const evaluated = stageDP18EvaluatedAtEpochMs;
const maximumAge = stageDP18ReceiverMaximumAgeMs;
const dispatchedAt = stageDP18DispatchedAtEpochMs;

const admittedArm = byLabel(stageDP18DispatchMatrix, "dispatch_admitted_over_prepared_candidate");

// The cut's own fresh runs — only D-P18 assessments ever land here.
const dp18FreshRuns = [];
const runDispatch = (entry) => {
  const fresh = assessPondDispatchDecision(dispatchInputOf(entry));
  dp18FreshRuns.push(fresh);
  return fresh;
};

// ---------------------------------------------------------------
// Block 1: matrix recompute — every dispatch arm deep-equals its pinned
// assessment, every arm and assessment is deep-frozen, the satisfied arm
// carries the exact satisfied-check list, and every assessment's ceiling
// stays all-false.
// ---------------------------------------------------------------
block("matrix", () => {
  assert.equal(stageDP18DispatchMatrix.length, 19, "the dispatch matrix is pinned at 19 arms");
  const performedState =
    "dispatch_performed_session_scoped_in_process_no_receipt";
  for (const arm of stageDP18DispatchMatrix) {
    assert.ok(arm.fixtureLabel, "every arm carries a fixture label");
    const fresh = runDispatch(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `arm ${arm.fixtureLabel}`);
    assert.equal(fresh.contractVersion, "pond-dispatch-decision-d-p18", arm.fixtureLabel);
    assert.ok(
      fresh.dispatchState === "dispatch_not_performed" ||
        fresh.dispatchState === performedState,
      arm.fixtureLabel,
    );
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.satisfiedChecks), arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.unsatisfiedChecks), arm.fixtureLabel);
    assertLacksKeys(fresh, POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS, `arm ${arm.fixtureLabel}`);
  }

  // The satisfied arm carries the full positive verdict, honestly
  // in-process.
  const satisfiedArm = admittedArm;
  assert.equal(satisfiedArm.assessment.dispatchState, performedState);
  assert.equal(satisfiedArm.assessment.reason, "all_dispatch_checks_satisfied");
  assert.deepEqual(satisfiedArm.assessment.unsatisfiedChecks, []);
  assert.equal(satisfiedArm.assessment.dispatchPerformsExternalTransport, false);
  assert.equal(satisfiedArm.assessment.dispatchQueuedOrRetriedOrScheduled, false);
  assert.equal(satisfiedArm.assessment.dispatchReceiptAdmitted, false);
  assert.equal(satisfiedArm.assessment.dispatchEstablishesAcceptanceOrAgentReply, false);
  assert.equal(satisfiedArm.assessment.dispatchEstablishesGrant, false);
  assert.equal(
    satisfiedArm.assessment.mappedCandidateState,
    "delivery_candidate_prepared_session_scoped_no_dispatch",
  );
  assert.equal(
    satisfiedArm.assessment.mappedReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
  );
  assert.equal(
    satisfiedArm.assessment.dispatchEventFreshnessDiagnosis.observationAgeMs,
    5000,
    "the dispatch event is 5 seconds fresh at the lane evaluation instant",
  );
});

// ---------------------------------------------------------------
// Block 2: identity ties — the legs cannot drift from the frozen D-P15
// read-gate entry; the dispatched candidate cannot drift from the frozen
// D-P17 admitted fixture arm; the community-slot candidate keeps the
// D-P17 dv verbatim; the declared destination vocabulary is the D-P17
// chain by identity; the clock ties descend arithmetically from the
// frozen pins; the inventory is the D-P17 union plus four keys.
// ---------------------------------------------------------------
block("identityTies", () => {
  const frozenGateEntry = stageDP15ReadGateEntryActivated;
  assert.deepEqual(
    deepClone(admittedArm.readGateRecord),
    deepClone(frozenGateEntry.readGateRecord),
    "the dispatch gate record drifted from the frozen D-P15 read-gate entry",
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
      `the dispatch arm's D-P15 ${label} leg drifted from the frozen read-gate entry`,
    );
  }
  assert.equal(admittedArm.receiverHeldPrincipalRef, frozenGateEntry.receiverHeldPrincipalRef);
  assert.equal(stageDP18ReceiverRef, stageDP17ReceiverRef);
  assert.equal(stageDP18ReceiverRef, stageDP16ReceiverRef);
  assert.equal(stageDP18ReceiverRef, stageDP15ReceiverRef);
  assert.equal(stageDP18ReceiverMaximumAgeMs, stageDP17ReceiverMaximumAgeMs);
  assert.equal(stageDP18ReceiverMaximumAgeMs, stageDP16ReceiverMaximumAgeMs);
  assert.equal(stageDP18ReceiverMaximumAgeMs, stageDP15ReceiverMaximumAgeMs);
  assert.equal(stageDP18ReceiverMaximumAgeMs, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS);

  // The dispatched candidate is exactly the frozen D-P17 admitted fixture
  // arm's candidate — the D-P17 dv and kind preserved verbatim, the
  // dispatch never re-stamps the candidate it rides.
  assert.deepEqual(
    deepClone(admittedArm.deliveryCandidate),
    deepClone(byLabel(stageDP17DecisionMatrix, "delivery_candidate_admitted").deliveryCandidate),
    "the dispatched candidate drifted from the prepared D-P17 fixture candidate",
  );
  assert.equal(
    admittedArm.deliveryCandidate.contractVersion,
    "pond-delivery-candidate-decision-d-p17",
    "the dispatched candidate keeps the D-P17 dv verbatim",
  );
  assert.equal(admittedArm.deliveryCandidate.kind, "pond-delivery-candidate");
  assert.equal(admittedArm.deliveryCandidate.addressedAgentRef, stageDP18Agent0Ref);

  // The community-slot candidate keeps the D-P17 shape and the D-P16
  // community record's own addressed agent.
  const communityArm = byLabel(stageDP18DispatchMatrix, "dispatch_admitted_community_slot");
  assert.equal(communityArm.deliveryCandidate.contractVersion, "pond-delivery-candidate-decision-d-p17");
  assert.equal(communityArm.deliveryCandidate.addressedAgentRef, stageDP18CommunitySlotRef);
  assert.deepEqual(
    deepClone(communityArm.deliveryCandidate.deliveredConversationRecord),
    deepClone(byLabel(stageDP16RecordMatrix, "conversation_record_admitted_community_slot").conversationRecord),
    "the community-slot delivered copy drifted from the admitted D-P16 community record",
  );
  assert.equal(
    communityArm.deliveryCandidate.addressedAgentRef,
    communityArm.deliveryCandidate.deliveredConversationRecord.addressedAgentRef,
    "the dispatched destination stays the candidate's own bound destination",
  );

  // The declared destination vocabulary is the D-P17 constant by identity,
  // and its content is exactly the D-P0 agent family.
  assert.equal(
    POND_STAGE_DP18_DECLARED_DISPATCH_DESTINATION_REFS,
    POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS,
    "the dispatch-destination vocabulary is the frozen D-P17 constant re-exported by identity",
  );
  assert.equal(
    POND_STAGE_DP18_DECLARED_DISPATCH_DESTINATION_REFS,
    POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS,
  );
  assert.deepEqual(deepClone(GENERATED_DECLARED_DESTINATIONS), [
    stageDP0Agent0Ref,
    stageDP0CommunityAgentSlotRef,
    stageDP0ProjectAgentSlotRef,
  ]);
  assert.equal(stageDP18Agent0Ref, stageDP0Agent0Ref);
  assert.equal(stageDP18CommunitySlotRef, stageDP0CommunityAgentSlotRef);

  // The clock ties descend from the frozen D-P17 pins: the dispatch event
  // postdates the establishment, the composition, and the intent event;
  // the lane evaluation instant is the D-P17 lane's own instant, fresh
  // over the dispatch event; the retracted evaluation instant is the
  // D-P17 retracted instant with the dispatch event before the retraction;
  // the gate-expiry instant is exactly the frozen D-P16 expired instant;
  // the intent-expiry instant is intent + max + 1.
  assert.equal(stageDP18EvaluatedAtEpochMs, stageDP17EvaluatedAtEpochMs);
  assert.ok(
    stageDP18PreEstablishmentDispatchAtEpochMs <
      stageDP16EstablishedAtEpochMs,
    "the pre-establishment dispatch event predates the session",
  );
  assert.ok(
    stageDP18PreScopeDispatchAtEpochMs >= stageDP16EstablishedAtEpochMs &&
      stageDP18PreScopeDispatchAtEpochMs < stageDP16ComposedAtEpochMs,
    "the pre-scope dispatch event sits after establishment but before the composition",
  );
  assert.ok(
    stageDP16EstablishedAtEpochMs < stageDP16ComposedAtEpochMs &&
      stageDP16ComposedAtEpochMs < stageDP17RecordedIntentAtEpochMs &&
      stageDP17RecordedIntentAtEpochMs < stageDP18DispatchedAtEpochMs &&
      stageDP18DispatchedAtEpochMs < stageDP18EvaluatedAtEpochMs,
    "the delivered composition, the intent event, and the dispatch event all sit inside the session scope, in order",
  );
  assert.equal(
    stageDP18DispatchFutureEventAtEpochMs,
    stageDP18EvaluatedAtEpochMs + 100,
    "the future dispatch event is pinned just past the lane evaluation instant",
  );
  assert.ok(
    stageDP18RetractedDispatchAtEpochMs < stageDP16RetractedAtEpochMs,
    "the retracted arm's dispatch event predates the retraction event",
  );
  assert.equal(
    stageDP18RetractedEvaluatedAtEpochMs,
    stageDP17RetractedEvaluatedAtEpochMs,
    "the retracted arm evaluates at the D-P17 retracted instant",
  );
  assert.ok(
    stageDP18RetractedEvaluatedAtEpochMs - stageDP18RetractedDispatchAtEpochMs <= maximumAge,
    "the retracted arm's dispatch event stays within the freshness window",
  );
  assert.equal(
    stageDP18GateExpiryEvaluatedAtEpochMs,
    stageDP17GateExpiryEvaluatedAtEpochMs,
    "the gate-expiry instant is the D-P17 gate-expiry instant",
  );
  assert.equal(
    stageDP18GateExpiryEvaluatedAtEpochMs,
    stageDP16ExpiredEvaluationEpochMs,
    "the gate-expiry instant is exactly the frozen D-P16 expired instant",
  );
  assert.equal(
    stageDP18IntentExpiryEvaluatedAtEpochMs,
    stageDP17IntentExpiryEvaluatedAtEpochMs,
    "the intent-expiry instant is the D-P17 intent-expiry instant",
  );
  assert.equal(
    stageDP18IntentExpiryEvaluatedAtEpochMs,
    stageDP17RecordedIntentAtEpochMs + stageDP18ReceiverMaximumAgeMs + 1,
    "the intent-expiry instant is intent + declared maximum age + 1",
  );

  // The forbidden-key inventory: exactly the frozen D-P17 union plus the
  // four dispatch keys this lane exists to refuse.
  assert.equal(
    POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS.length,
    DP15_INVENTORY_CONTRACT.length + 12,
    "the D-P18 inventory is exactly the D-P15 union plus twelve keys",
  );
  assert.deepEqual(
    POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS.slice(0, POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS.length),
    [...POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS],
    "the D-P18 inventory keeps the frozen D-P17 union verbatim",
  );
  assert.deepEqual(
    POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS.slice(POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS.length),
    [
      "dispatchReceipt",
      "dispatchQueueEntry",
      "dispatchRetryRecord",
      "externalTransportRecord",
    ],
  );
});

// ---------------------------------------------------------------
// Block 3: recompute-agreement negatives — every refused dispatch basis
// fails on its own basis check alone with every leg echo green and the
// reassessment verdict green (L49-55); the shape refusals land on the
// invalid cause; the reassessment breakage lands on the re-run's own
// cause with the two-depth mapped echo honest; the dispatch event's own
// freshness and scope refusals land on their dedicated causes.
// ---------------------------------------------------------------
block("recomputeAgreementNegatives", () => {
  const refusedBasisArms = [
    "dispatch_refused_basis_inferred_from_delivery_preparation",
    "dispatch_refused_basis_asserted_by_model_completion",
    "dispatch_refused_basis_replayed_from_prior_dispatch_decision",
    "dispatch_refused_basis_inferred_from_channel_visibility",
    "dispatch_refused_basis_scheduled_or_queued_automatically",
  ];
  for (const label of refusedBasisArms) {
    const arm = byLabel(stageDP18DispatchMatrix, label);
    const fresh = runDispatch(arm);
    assert.equal(fresh.dispatchState, "dispatch_not_performed", label);
    assert.equal(fresh.reason, "receiver_dispatch_proof_incomplete", label);
    assert.deepEqual(
      fresh.unsatisfiedChecks,
      ["dispatch_basis_receiver_performed_not_inferred"],
      label,
    );
    assert.equal(fresh.satisfiedChecks.length, 6, label);
    // Every leg echo stays green (L49-55): the basis is the only failure.
    assert.equal(
      fresh.mappedCandidateState,
      "delivery_candidate_prepared_session_scoped_no_dispatch",
      label,
    );
    assert.equal(
      fresh.mappedCandidateReassessmentReason,
      "all_delivery_candidate_checks_satisfied",
      label,
    );
    assert.equal(
      fresh.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      label,
    );
    assert.equal(fresh.mappedReadGateFreshnessDiagnosis.state, "fresh", label);
    assert.equal(fresh.dispatchEventFreshnessDiagnosis.state, "fresh", label);
  }

  // The replayed dispatch arm is a refusal vocabulary element like any
  // other inferred basis: the ceremony refuses it at the declarative
  // check and records nothing about consumption here.
  const replayArm = byLabel(stageDP18DispatchMatrix, "dispatch_refused_basis_replayed_from_prior_dispatch_decision");
  assert.equal(
    replayArm.deliveryCandidate.deliveryBasis,
    "receiver_recorded_delivery_intent_not_inferred",
    "the replay refusal refuses the DISPATCH basis, never the candidate's own basis",
  );

  // Shape refusals: tampered postures and missing/forbidden keys refuse
  // at the invalid cause with the fallback diagnosis honest.
  const shapeRefusals = {
    dispatch_refused_tampered_dispatch_posture: "dispatch_decision_invalid",
    dispatch_refused_missing_key: "dispatch_decision_invalid",
    dispatch_refused_extra_key_dispatch_queue_entry: "dispatch_decision_invalid",
  };
  for (const [label, expectedCause] of Object.entries(shapeRefusals)) {
    const fresh = runDispatch(byLabel(stageDP18DispatchMatrix, label));
    assert.equal(fresh.dispatchState, "dispatch_not_performed", label);
    assert.equal(fresh.reason, expectedCause, label);
    assert.equal(fresh.satisfiedChecks.length, 0, label);
    assert.ok(fresh.dispatchEventFreshnessDiagnosis !== null, label);
    assert.ok(fresh.mappedCandidateState !== null, label);
  }

  // The reassessment breakage lands on the re-run's own cause with the
  // two-depth mapped echo honest: a stale delivered copy, a re-stamped
  // copy, and an invalid candidate each map the D-P17 reason verbatim.
  const staleArm = byLabel(stageDP18DispatchMatrix, "dispatch_refused_delivered_record_stale_in_reassessment");
  const staleRun = runDispatch(staleArm);
  assert.equal(staleRun.reason, "delivery_candidate_not_currently_prepared");
  assert.equal(
    staleRun.mappedCandidateReassessmentReason,
    "delivered_record_not_currently_admitted",
    "the stale delivered copy maps the D-P17 re-run's own delivered-record cause",
  );
  assert.equal(staleRun.satisfiedChecks.length, 0);
  assert.equal(staleRun.dispatchEventFreshnessDiagnosis.state, "fresh", "the dispatch event's own diagnosis says fresh while the reassessment refuses");
  const reStampedRun = runDispatch(byLabel(stageDP18DispatchMatrix, "dispatch_refused_delivered_record_re_stamped_in_reassessment"));
  assert.equal(reStampedRun.reason, "delivery_candidate_not_currently_prepared");
  assert.equal(
    reStampedRun.mappedCandidateReassessmentReason,
    "delivered_record_not_currently_admitted",
    "the re-stamped copy maps the D-P17 re-run's cause — the third-depth refusals stay inside the D-P17 echo",
  );
  // The third depth (the D-P17 mapped delivered-record echo) is proven by
  // running the D-P17 assessor directly over the reassessment legs. The
  // D-P18 cut mirrors the whole reassessment instead of re-declaring its
  // cause vocabulary, so the stale arm's third-depth echo is the
  // freshness cause and the re-stamp arm's is the dv-mismatch cause —
  // each carried only one level deeper than the D-P18 map shows.
  const directReassessmentLegsOf = (arm) => ({
    deliveryCandidate: arm.deliveryCandidate,
    receiverHeldPrincipalRef: arm.receiverHeldPrincipalRef,
    readGateRecord: arm.readGateRecord,
    establishmentRecord: arm.establishmentRecord,
    dp5CeremonyRecord: arm.dp5CeremonyRecord,
    dp6ObservationRecord: arm.dp6ObservationRecord,
    dp8VerifierRecord: arm.dp8VerifierRecord,
    dp8ProofRecord: arm.dp8ProofRecord,
    dp9IssuanceRecord: arm.dp9IssuanceRecord,
    dp9MappingRecord: arm.dp9MappingRecord,
    dp10ActivationRecord: arm.dp10ActivationRecord,
    receiverRetractionRecord: arm.receiverRetractionRecord,
    receiverEvaluatedAtEpochMs: arm.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: arm.receiverMaximumAgeMs,
  });
  const directStaleReassessment = assessPondDeliveryCandidateDecision(directReassessmentLegsOf(staleArm));
  assert.equal(
    directStaleReassessment.mappedDeliveredRecordAdmissionReason,
    "conversation_record_not_session_current",
    "the stale arm's third-depth delivered-record echo is the freshness cause",
  );
  assert.equal(
    directStaleReassessment.reason,
    staleRun.mappedCandidateReassessmentReason,
    "the D-P18 mapped reason is the D-P17 re-run's own reason verbatim",
  );
  const reStampedArm = byLabel(stageDP18DispatchMatrix, "dispatch_refused_delivered_record_re_stamped_in_reassessment");
  const directReStampedReassessment = assessPondDeliveryCandidateDecision(directReassessmentLegsOf(reStampedArm));
  assert.equal(
    directReStampedReassessment.mappedDeliveredRecordAdmissionReason,
    "conversation_record_invalid",
    "the re-stamp arm's third-depth delivered-record echo is the dv-mismatch cause",
  );
  const invalidCandidateRun = runDispatch(byLabel(stageDP18DispatchMatrix, "dispatch_refused_candidate_invalid_in_reassessment"));
  assert.equal(invalidCandidateRun.reason, "delivery_candidate_not_currently_prepared");
  assert.equal(
    invalidCandidateRun.mappedCandidateReassessmentReason,
    "delivery_candidate_invalid",
  );

  // The dispatch event's own freshness refusal: a future event refuses on
  // its own diagnosis while the reassessment verdict stays prepared.
  const futureArm = byLabel(stageDP18DispatchMatrix, "dispatch_event_refused_in_future");
  assert.equal(futureArm.assessment.reason, "dispatch_event_not_session_current");
  assert.equal(futureArm.assessment.dispatchEventFreshnessDiagnosis.state, "unknown");
  assert.equal(
    futureArm.assessment.dispatchEventFreshnessDiagnosis.reason,
    "observation_time_in_future",
  );
  assert.equal(
    futureArm.assessment.mappedCandidateState,
    "delivery_candidate_prepared_session_scoped_no_dispatch",
  );

  // The session-scope refusals on the dispatch event: pre-composition and
  // pre-establishment events refuse at the scope cause with the event's
  // own diagnosis honestly fresh.
  for (const label of [
    "dispatch_event_refused_before_session_scope",
    "dispatch_event_refused_before_establishment",
  ]) {
    const arm = byLabel(stageDP18DispatchMatrix, label);
    assert.equal(arm.assessment.reason, "dispatch_event_not_of_the_current_session_scope", label);
    assert.equal(arm.assessment.dispatchEventFreshnessDiagnosis.state, "fresh", label);
    assert.equal(arm.assessment.satisfiedChecks.length, 0, label);
  }

  // Gate-leg breakage: a swapped receiver ref breaks the reassessment at
  // the gate cause — the D-P17 reason maps verbatim, never re-declared.
  const brokenLegsRun = assessPondDispatchDecision({
    ...dispatchInputOf(admittedArm),
    receiverHeldPrincipalRef: "principal:fixture:stage-d-p14:not-the-receiver",
  });
  assert.equal(brokenLegsRun.dispatchState, "dispatch_not_performed");
  assert.equal(
    brokenLegsRun.reason,
    "delivery_candidate_not_currently_prepared",
  );
  assert.equal(
    brokenLegsRun.mappedCandidateReassessmentReason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
  );
  assert.equal(brokenLegsRun.dispatchEventFreshnessDiagnosis.state, "fresh");
  assert.notEqual(
    brokenLegsRun.mappedEstablishmentState,
    "live_session_scoped_authentication_established",
  );
});

// ---------------------------------------------------------------
// Block 4: lifecycle — the retracted-session confinement maps the gate
// cause through the reassessment while the dispatch event's own
// diagnosis stays honestly fresh; the session-scope binding refuses
// earlier events; the two expiry confinements split honestly (the
// reassessment refuses first in both, and the gate-expiry and
// intent-expiry mapped reasons contrast); the community-slot dispatch
// admits honestly with no transport flags anywhere.
// ---------------------------------------------------------------
block("lifecycle", () => {
  // The retracted-session arm: retraction dominates through the D-P17
  // re-run's own verdict, the mapped establishment echo carrying the
  // retraction reason.
  const confinementArm = byLabel(stageDP18DispatchMatrix, "dispatch_confined_after_retraction");
  const confinementRun = runDispatch(confinementArm);
  assert.equal(confinementRun.dispatchState, "dispatch_not_performed");
  assert.equal(
    confinementRun.reason,
    "delivery_candidate_not_currently_prepared",
  );
  assert.equal(
    confinementRun.mappedCandidateReassessmentReason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
    "the retracted candidate re-reads confined through the reassessment's own cause",
  );
  assert.equal(confinementRun.dispatchEventFreshnessDiagnosis.state, "fresh");
  assert.equal(confinementRun.dispatchEventFreshnessDiagnosis.observationAgeMs, 17000);
  assert.equal(confinementRun.mappedEstablishmentState, "not_established");
  assert.equal(confinementRun.mappedEstablishmentReason, "receiver_retraction_on_record");

  // A re-run of the satisfied arm over a fresh evaluation pair but a
  // present retraction record refuses too — retraction dominates the
  // delivery stage regardless of the dispatch event's freshness
  // (messaging L197-199).
  const retractionInput = {
    ...dispatchInputOf(admittedArm),
    receiverRetractionRecord: {
      contractVersion: "pond-live-session-retraction-d-p15",
      kind: "pond-live-session-retraction",
      retracted_at_epoch_ms: stageDP16RetractedAtEpochMs,
      retractionPosture: "receiver_recorded_live_session_retraction_no_grant",
      authority: "none",
    },
    receiverEvaluatedAtEpochMs: evaluated,
  };
  const retractionRun = assessPondDispatchDecision(retractionInput);
  assert.equal(
    retractionRun.reason,
    "delivery_candidate_not_currently_prepared",
  );
  assert.equal(retractionRun.dispatchEventFreshnessDiagnosis.state, "fresh");

  // Gate expiry: evaluate at the D-P17 gate-expiry instant — the
  // reassessment refuses on its own expired gate while the dispatch
  // event's own diagnosis stays honestly fresh (age 35 001).
  const gateExpiryRun = runDispatch(byLabel(stageDP18DispatchMatrix, "dispatch_confined_at_gate_expiry"));
  assert.equal(gateExpiryRun.reason, "delivery_candidate_not_currently_prepared");
  assert.equal(
    gateExpiryRun.mappedCandidateReassessmentReason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
  );
  assert.equal(gateExpiryRun.dispatchEventFreshnessDiagnosis.state, "fresh");
  assert.equal(gateExpiryRun.dispatchEventFreshnessDiagnosis.observationAgeMs, 35001);
  assert.equal(gateExpiryRun.satisfiedChecks.length, 0);

  // Intent expiry: evaluate at the D-P17 intent-expiry instant — the
  // reassessment refuses on the intent's own freshness, and the mapped
  // reason contrasts honestly with the gate-expiry arm above while the
  // dispatch event's own diagnosis stays fresh (age 56 001): the ladder-
  // order isolation of the newest-event arithmetic, one depth up.
  const intentExpiryRun = runDispatch(byLabel(stageDP18DispatchMatrix, "dispatch_refused_intent_expired_in_reassessment"));
  assert.equal(intentExpiryRun.reason, "delivery_candidate_not_currently_prepared");
  assert.equal(
    intentExpiryRun.mappedCandidateReassessmentReason,
    "delivery_intent_not_session_current",
  );
  assert.equal(intentExpiryRun.dispatchEventFreshnessDiagnosis.state, "fresh");
  assert.equal(intentExpiryRun.dispatchEventFreshnessDiagnosis.observationAgeMs, 56001);
  assert.equal(intentExpiryRun.satisfiedChecks.length, 0);

  // The community-slot dispatch admits honestly: same checks, same
  // refusal-free ceiling.
  const communityRun = runDispatch(byLabel(stageDP18DispatchMatrix, "dispatch_admitted_community_slot"));
  assert.equal(communityRun.dispatchState, "dispatch_performed_session_scoped_in_process_no_receipt");
  assert.equal(communityRun.reason, "all_dispatch_checks_satisfied");
  assert.equal(communityRun.dispatchPerformsExternalTransport, false);
  assert.equal(communityRun.dispatchEstablishesGrant, false);
  assert.equal(communityRun.dispatchEstablishesConsequenceOrExecution, false);
  assert.equal(communityRun.dispatchEstablishesAcceptanceOrAgentReply, false);
  assert.equal(communityRun.dispatchReceiptAdmitted, false);
});

// ---------------------------------------------------------------
// Block 5: fail-closed garbage — nulls, wrong types, and broken shapes
// refuse without throwing, with every honest echo still present.
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
    { deliveryCandidate: admittedArm.deliveryCandidate, dispatchMetadata: null },
  ];
  for (const garbage of garbageInputs) {
    const fresh = assessPondDispatchDecision(garbage);
    assert.equal(
      fresh.dispatchState,
      "dispatch_not_performed",
      `garbage dispatch ${String(garbage).slice(0, 20)}`,
    );
    assert.equal(fresh.authority, "none");
    assert.equal(fresh.runtimeActivationPosture, "not_included");
    assertLacksKeys(fresh, POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS, "fail-closed dispatch");
    // The honest echoes stay present on every garbage arm.
    assert.ok(fresh.dispatchEventFreshnessDiagnosis !== null);
    assert.ok(fresh.mappedCandidateState !== null);
    assert.ok(fresh.mappedCandidateReassessmentReason !== null);
    assert.ok(fresh.mappedEstablishmentState !== null);
    assert.ok(fresh.mappedReadGateState !== null);
  }
  const garbageInputState = assessPondDispatchDecision(null);
  assert.equal(
    garbageInputState.reason,
    "dispatch_decision_invalid",
    "garbage input degrades to the honest invalid cause, never a throw",
  );
  // A candidate that is garbage rather than the dispatch metadata still
  // refuses through the reassessment's own invalid cause.
  const garbageCandidateRun = assessPondDispatchDecision({
    ...dispatchInputOf(admittedArm),
    deliveryCandidate: null,
  });
  assert.equal(garbageCandidateRun.reason, "delivery_candidate_not_currently_prepared");
  assert.equal(garbageCandidateRun.mappedCandidateReassessmentReason, "delivery_candidate_invalid");
  // A deep-walk garbage probe: a forbidden key nested inside the metadata
  // never admits through the walk.
  const nestedGarbageRun = assessPondDispatchDecision({
    ...dispatchInputOf(admittedArm),
    dispatchMetadata: {
      ...admittedArm.dispatchMetadata,
      nested: { dispatchReceipt: "reachable" },
    },
  });
  assert.equal(nestedGarbageRun.reason, "dispatch_decision_invalid");
});

// ---------------------------------------------------------------
// Block 6: ceiling and widen — the all-false family pinned on every fresh
// run; the widened inventory is the D-P17 union plus four dispatch keys;
// add-key widens refuse through the deep walk.
// ---------------------------------------------------------------
block("ceilingAndWiden", () => {
  assert.deepEqual(
    POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS.slice(
      POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS.length,
    ),
    ["dispatchReceipt", "dispatchQueueEntry", "dispatchRetryRecord", "externalTransportRecord"],
  );
  for (const [index, key] of POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS.entries()) {
    assert.equal(POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS[index], key);
  }

  // Add-key widen probes: a dispatch event carrying a receipt, queue,
  // retry, transport, or any older-session payload key refuses at the
  // invalid cause — the widening never greens.
  const widenOf = (extraKey) =>
    assessPondDispatchDecision({
      ...dispatchInputOf(admittedArm),
      dispatchMetadata: {
        ...admittedArm.dispatchMetadata,
        [extraKey]: "widened-through-prose",
      },
    });
  for (const extraKey of [
    "dispatchReceipt",
    "dispatchQueueEntry",
    "dispatchRetryRecord",
    "externalTransportRecord",
    "deliveryReceipt",
    "dispatchedMessage",
    "sentMessage",
    "agentTaskAcceptance",
    "agentReply",
    "chatMessage",
    "agentSecret",
  ]) {
    const widened = widenOf(extraKey);
    assert.equal(widened.dispatchState, "dispatch_not_performed", extraKey);
    assert.equal(widened.reason, "dispatch_decision_invalid", extraKey);
  }

  // The all-false ceiling family walked over every fresh run collected
  // across the blocks so far.
  for (const fresh of dp18FreshRuns) {
    assertLacksKeys(fresh, POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS, "fresh-run ceiling");
    for (const key of [
      "dispatchPerformsExternalTransport",
      "dispatchEstablishesGrant",
      "dispatchEstablishesConsequenceOrExecution",
      "dispatchEstablishesAcceptanceOrAgentReply",
      "dispatchEstablishesAgentCognitionRuntime",
      "dispatchEstablishesAuthorityFromProse",
      "dispatchEstablishesMembershipOrAdmission",
      "dispatchQueuedOrRetriedOrScheduled",
      "dispatchReceiptAdmitted",
      "dispatchEstablishesScope",
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
// Block 7: the destination tie — the declared dispatch-destination
// vocabulary is exactly the D-P17 chain and the D-P0 agent family; the
// dispatched destination stays the candidate's own bound destination on
// both satisfied arms; and no separate dispatch destination field exists
// — the input shape is pinned and the contract never names one.
// ---------------------------------------------------------------
block("destinationTie", () => {
  assert.deepEqual(deepClone(POND_STAGE_DP18_DECLARED_DISPATCH_DESTINATION_REFS), [
    stageDP18Agent0Ref,
    stageDP18CommunitySlotRef,
    stageDP17ProjectSlotRef === undefined ? stageDP0ProjectAgentSlotRef : stageDP17ProjectSlotRef,
  ]);

  // The destination-vs-candidate tie holds on both satisfied arms.
  for (const label of [
    "dispatch_admitted_over_prepared_candidate",
    "dispatch_admitted_community_slot",
  ]) {
    const arm = byLabel(stageDP18DispatchMatrix, label);
    assert.equal(
      arm.deliveryCandidate.addressedAgentRef,
      arm.deliveryCandidate.deliveredConversationRecord.addressedAgentRef,
      `${label}: the destination ties the delivered record's own addressed agent`,
    );
  }

  // No separate dispatch destination field exists: the input shape is
  // exactly these 15 keys and none of them is a destination; the contract
  // text never declares a dispatch-destination key (the destination flows
  // only through the prepared candidate's own addressedAgentRef).
  assert.deepEqual(DISPATCH_INPUT_KEYS, [
    "deliveryCandidate",
    "dispatchMetadata",
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
  ]);
  const contractText = readModule("src/contracts/pond-dispatch-decision.ts");
  assert.ok(!contractText.includes("dispatch_destination"), "the contract must not name a dispatch-destination input key");
  assert.ok(!contractText.includes("dispatchDestination"), "the contract must not name a dispatch-destination input key");

  // An undeclared destination stays unreachable at dispatch level: a
  // candidate addressed outside the vocabulary never prepares, so the
  // D-P17 refusal is what keeps the dispatch audience honest — proven by
  // re-running the D-P17 assessor directly over the community legs.
  const undeclaredCandidateRun = assessPondDeliveryCandidateDecision({
    deliveryCandidate: {
      ...admittedArm.deliveryCandidate,
      addressedAgentRef: "agent:stage-d-p18:undeclared-dispatch-destination",
    },
    receiverHeldPrincipalRef: admittedArm.receiverHeldPrincipalRef,
    readGateRecord: admittedArm.readGateRecord,
    establishmentRecord: admittedArm.establishmentRecord,
    dp5CeremonyRecord: admittedArm.dp5CeremonyRecord,
    dp6ObservationRecord: admittedArm.dp6ObservationRecord,
    dp8VerifierRecord: admittedArm.dp8VerifierRecord,
    dp8ProofRecord: admittedArm.dp8ProofRecord,
    dp9IssuanceRecord: admittedArm.dp9IssuanceRecord,
    dp9MappingRecord: admittedArm.dp9MappingRecord,
    dp10ActivationRecord: admittedArm.dp10ActivationRecord,
    receiverRetractionRecord: null,
    receiverEvaluatedAtEpochMs: evaluated,
    receiverMaximumAgeMs: maximumAge,
  });
  assert.equal(undeclaredCandidateRun.reason, "delivery_destination_not_declared");
  assert.equal(undeclaredCandidateRun.deliveryCandidateState, "delivery_candidate_not_prepared");
});

// ---------------------------------------------------------------
// Block 8: hygiene — the banned frozen vocabulary stays out of the cut's
// own sources, the contract and fixture carry no DOM/network needles, the
// fixture is import-free, the inventory union and env prefixes pin, and
// the hand-written dispatch module stays walked.
// ---------------------------------------------------------------
block("hygiene", () => {
  const contractPaths = [
    "src/contracts/pond-dispatch-decision.ts",
    "src/fixtures/stage-d-p18-pond-dispatch.ts",
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
    text.replace(/[[\s]*["'][A-Za-z_$][\w$]*["']\s*\]/g, "[]");
  const stripImports = (text) =>
    text.split("\n").filter((line) => !line.startsWith("import")).join("\n");
  const normalized = stripImports(
    stripQuotedIndexReads(texts[0]),
  );
  for (const needle of nameNeedles) {
    assert.ok(!normalized.includes(needle), `the contract carries frozen name ${needle} outside the leg plumbing`);
  }

  // (e) the inventory union stays intact: the D-P17 inventory is the
  // imported base, and this cut's four dispatch keys are quoted in full —
  // the composed walk is exactly one key longer per addition.
  assert.ok(
    texts[0].includes("POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS"),
    "the composed inventory must import the frozen D-P17 base",
  );
  for (const key of ["dispatchReceipt", "dispatchQueueEntry", "dispatchRetryRecord", "externalTransportRecord"]) {
    assert.ok(texts[0].includes(`"${key}"`), `forbidden key ${key} missing from the contract inventory`);
  }

  // (f) the env-needle family stays out of every non-sanctioned file: this
  // cut has no secret-bearing ceremony, so no first-stage env name appears
  // in any file of this cut. The ban matches the shared env prefix —
  // strictly wider than either full needle, and this walk itself never
  // carries one.
  for (const path of [
    "src/contracts/pond-dispatch-decision.ts",
    "src/fixtures/stage-d-p18-pond-dispatch.ts",
    "docs/stage-d-p18-pond-dispatch-lane.md",
    "ui/pond-dispatch.js",
    "ui/pond-delivery.js",
  ]) {
    const fileText = readModule(path);
    assert.ok(
      !fileText.includes("TOADAID_LIVE_"),
      `${path} carries a first-stage live-session env name`,
    );
  }

  // (g) the hand-written dispatch module stays walked: no D-P9/D-P10
  // vocabulary, no src import, no banned transport/store needle.
  const moduleText = readModule("ui/pond-dispatch.js");
  assert.ok(
    !moduleText.includes("pond-local-principal-id-issuance") &&
      !moduleText.includes("pond-erc8004-identity-mapping") &&
      !moduleText.includes("pond-principal-identity-readiness-composition") &&
      !moduleText.includes("pond-private-read-activation") &&
      !moduleText.includes("pond-private-read-admission"),
    "the hand-written dispatch module carries frozen vocabulary",
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
// runs the honest dispatch-store lifecycle (establish → compose → prepare
// delivery → dispatch once → refused replay → out-of-range index →
// retract → confined); the delivery lane stays untouched; the markup
// contract holds with the mic still disabled and the modules in lane
// order; the module texts and the package wiring hold.
// ---------------------------------------------------------------
block("uiWiring", () => {
  // (a) generated-bundle tie: the committed artifact is the only bridge
  // from the shell module to the contracts; its assessors recompute the
  // established arms identically to the src contracts, and the D-P17
  // assessor plumbed through this bundle ties the same way.
  const srcDispatchRun = assessPondDispatchDecision(dispatchInputOf(admittedArm));
  const genDispatchRun = assessGeneratedDispatchDecision(dispatchInputOf(admittedArm));
  assert.deepEqual(deepClone(genDispatchRun), deepClone(srcDispatchRun));
  const refusedArm = byLabel(stageDP18DispatchMatrix, "dispatch_refused_basis_replayed_from_prior_dispatch_decision");
  const srcRefusedRun = assessPondDispatchDecision(dispatchInputOf(refusedArm));
  const genRefusedRun = assessGeneratedDispatchDecision(dispatchInputOf(refusedArm));
  assert.deepEqual(deepClone(genRefusedRun), deepClone(srcRefusedRun));
  const srcDeliveryRun = assessPondDeliveryCandidateDecision(
    (() => {
      const entry = byLabel(stageDP17DecisionMatrix, "delivery_candidate_admitted");
      return {
        deliveryCandidate: entry.deliveryCandidate,
        receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
        readGateRecord: entry.readGateRecord,
        establishmentRecord: entry.establishmentRecord,
        dp5CeremonyRecord: entry.dp5CeremonyRecord,
        dp6ObservationRecord: entry.dp6ObservationRecord,
        dp8VerifierRecord: entry.dp8VerifierRecord,
        dp8ProofRecord: entry.dp8ProofRecord,
        dp9IssuanceRecord: entry.dp9IssuanceRecord,
        dp9MappingRecord: entry.dp9MappingRecord,
        dp10ActivationRecord: entry.dp10ActivationRecord,
        receiverRetractionRecord: entry.receiverRetractionRecord,
        receiverEvaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
        receiverMaximumAgeMs: entry.receiverMaximumAgeMs,
      };
    })(),
  );
  assert.deepEqual(
    deepClone(assessGeneratedDeliveryDecisionFromDispatchBundle(
      (() => {
        const entry = byLabel(stageDP17DecisionMatrix, "delivery_candidate_admitted");
        return {
          deliveryCandidate: entry.deliveryCandidate,
          receiverHeldPrincipalRef: entry.receiverHeldPrincipalRef,
          readGateRecord: entry.readGateRecord,
          establishmentRecord: entry.establishmentRecord,
          dp5CeremonyRecord: entry.dp5CeremonyRecord,
          dp6ObservationRecord: entry.dp6ObservationRecord,
          dp8VerifierRecord: entry.dp8VerifierRecord,
          dp8ProofRecord: entry.dp8ProofRecord,
          dp9IssuanceRecord: entry.dp9IssuanceRecord,
          dp9MappingRecord: entry.dp9MappingRecord,
          dp10ActivationRecord: entry.dp10ActivationRecord,
          receiverRetractionRecord: entry.receiverRetractionRecord,
          receiverEvaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
          receiverMaximumAgeMs: entry.receiverMaximumAgeMs,
        };
      })(),
    )),
    deepClone(srcDeliveryRun),
    "the dispatch bundle carries the frozen D-P17 assessor as plumbing",
  );

  // The bundle's dispatch metadata template plus the receiver-own fields
  // equals the pinned admitted arm's metadata — the shell never restates
  // a posture literal.
  const templateTie = {
    ...pondStageDP18DispatchMetadataTemplate,
    dispatch_basis: admittedArm.dispatchMetadata.dispatch_basis,
    dispatched_at_epoch_ms: admittedArm.dispatchMetadata.dispatched_at_epoch_ms,
  };
  assert.deepEqual(deepClone(templateTie), deepClone(admittedArm.dispatchMetadata));

  // (b) render drive — fail-closed on missing document/nodes.
  assert.equal(renderPondDispatch(undefined), false);
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
    return {
      nodes,
      querySelector(selector) {
        if (selector === "[data-dispatch-note]") return nodes.note;
        if (selector === "[data-dispatch-status]") return nodes.status;
        if (selector === "[data-dispatch-list]") return nodes.list;
        return null;
      },
      createElement(tag) {
        const node = elementStub();
        node.tagName = tag;
        return node;
      },
    };
  };
  const missingStatus = documentStub();
  missingStatus.nodes.status = null;
  assert.equal(renderPondDispatch(missingStatus), false);
  const missingList = documentStub();
  missingList.nodes.list = null;
  assert.equal(renderPondDispatch(missingList), false);
  const missingNote = documentStub();
  missingNote.nodes.note = null;
  assert.equal(renderPondDispatch(missingNote), false);

  // The render drive on the empty shell state: the honest empty posture.
  const collectText = (node) =>
    [node.textContent, ...node.children.map(collectText)].join("\n");
  const liveDocument = documentStub();
  assert.equal(renderPondDispatch(liveDocument), true);
  assert.equal(liveDocument.nodes.note.dataset.dispatchRendered, "true");
  assert.match(collectText(liveDocument.nodes.list), /No in-process dispatches performed/);

  // (c) the shell drive on the fixture clock — the full dispatch-store
  // lifecycle: establish → compose → prepare delivery → dispatch once →
  // refused replay → out-of-range index → retract → confined.
  // Determinism comes from the contract's purity, never from the wall
  // clock. The D-P6 observation event is pinned at 1_800_000_030_000, so
  // every evaluation instant used below stays at or below the D-P16
  // drive's own 65_000 horizon.
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

  // Compose once: a real composition records.
  const composeEpoch = nowMs + 1000;
  const composed = recordConversationComposedText({
    composedText: "Desk, we ride at dawn. Ready your structural reads.",
    addressedAgentRef: stageDP0Agent0Ref,
    composedAtEpochMs: composeEpoch,
    evaluatedAtEpochMs: composeEpoch,
  });
  assert.equal(composed.recorded, true, "the healthy composition must record");

  // Prepare the delivery candidate (the D-P17 drive's own sequencing).
  const recordAt = composeEpoch + 500;
  const preparedAt = recordAt + 500;
  const prepared = recordDeliveryCandidatePreparation({
    conversationRecordIndex: 0,
    recordedAtEpochMs: recordAt,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(prepared.recorded, true, "the healthy preparation must record");
  const deliveryHold = heldDeliveryDecisions();
  assert.equal(deliveryHold.held, true);
  assert.equal(deliveryHold.decisions.length, 1);

  // Dispatch once: the receiver-performed basis, the dispatch event
  // between the intent and the evaluation, in-process and receipt-free.
  const dispatchEventAt = recordAt + 250;
  assert.ok(
    dispatchEventAt > recordAt &&
      dispatchEventAt >= nowMs &&
      dispatchEventAt >= composeEpoch,
    "the dispatch event postdates the intent, the composition, and the establishment",
  );
  const dispatched = performReceiverDispatch({
    deliveryDecisionIndex: 0,
    dispatchedAtEpochMs: dispatchEventAt,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(dispatched.recorded, true, "the healthy dispatch must record");
  assert.equal(
    dispatched.assessment.dispatchState,
    "dispatch_performed_session_scoped_in_process_no_receipt",
  );
  assert.equal(dispatched.assessment.reason, "all_dispatch_checks_satisfied");
  assert.equal(dispatched.assessment.dispatchPerformsExternalTransport, false);
  assert.equal(dispatched.assessment.dispatchQueuedOrRetriedOrScheduled, false);
  assert.equal(dispatched.assessment.dispatchReceiptAdmitted, false);
  assert.equal(dispatched.assessment.dispatchEstablishesAcceptanceOrAgentReply, false);
  assert.equal(dispatched.assessment.authority, "none");
  const postureRun = currentDispatchPosture({ evaluatedAtEpochMs: preparedAt });
  assert.equal(postureRun.assessments.length, 1);
  assert.equal(postureRun.assessments[0].reason, "all_dispatch_checks_satisfied");
  assert.equal(
    postureRun.dispatchedTexts[0].dispatchedText,
    "Desk, we ride at dawn. Ready your structural reads.",
    "the dispatched text renders from shell state, index-paired",
  );
  assert.equal(postureRun.decidedFacts[0].deliveryDecisionIndex, 0);
  assert.equal(postureRun.decidedFacts[0].dispatchedAtEpochMs, dispatchEventAt);

  // Re-dispatch of the same candidate: the replayed basis is recorded by
  // the module and the ceremony refuses it at its own declarative check —
  // nothing is stored, and the dispatch count stays exactly 1.
  const replayed = performReceiverDispatch({
    deliveryDecisionIndex: 0,
    dispatchedAtEpochMs: dispatchEventAt + 100,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(replayed.recorded, false, "a replayed dispatch refuses");
  assert.equal(replayed.assessment.reason, "receiver_dispatch_proof_incomplete");
  assert.deepEqual(
    replayed.assessment.unsatisfiedChecks,
    ["dispatch_basis_receiver_performed_not_inferred"],
    "the replay refuses on the basis check alone, every leg echo green",
  );
  assert.equal(currentDispatchPosture({ evaluatedAtEpochMs: preparedAt }).assessments.length, 1);

  // An out-of-range decision index refuses before any input exists.
  const outOfRange = performReceiverDispatch({
    deliveryDecisionIndex: 5,
    dispatchedAtEpochMs: dispatchEventAt,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(outOfRange.recorded, false);
  assert.equal(outOfRange.assessment, null);
  assert.equal(outOfRange.refusalReason, "delivery_decision_index_out_of_range");
  assert.equal(currentDispatchPosture({ evaluatedAtEpochMs: preparedAt }).assessments.length, 1);

  // The delivery lane stays untouched by the dispatch lane: its recorded
  // decision still reads prepared at the same instant, and its module
  // imports nothing from the dispatch module.
  const deliveryAfterDispatch = currentDeliveryPosture({ evaluatedAtEpochMs: preparedAt });
  assert.equal(deliveryAfterDispatch.assessments.length, 1);
  assert.equal(
    deliveryAfterDispatch.assessments[0].deliveryCandidateState,
    "delivery_candidate_prepared_session_scoped_no_dispatch",
  );
  const deliveryModuleText = readModule("ui/pond-delivery.js");
  assert.ok(!deliveryModuleText.includes("pond-dispatch"), "the delivery module must not import the dispatch module");
  assert.match(
    deliveryModuleText,
    /export const heldDeliveryDecisions = \(\)/,
    "the additive held-decisions export is present on the delivery module",
  );

  // Retract: the recorded dispatch re-reads confined through the
  // reassessment's own cause; a further dispatch refuses at the same
  // mapped cause and stores nothing; the dispatch count stays exactly 1.
  const retraction = retractLiveSession({ retractedAtEpochMs: nowMs + 4000 });
  assert.equal(retraction.retracted, true);
  const confinedAt = nowMs + 5000;
  const confinedRun = currentDispatchPosture({ evaluatedAtEpochMs: confinedAt });
  assert.equal(confinedRun.assessments.length, 1);
  assert.equal(
    confinedRun.assessments[0].dispatchState,
    "dispatch_not_performed",
    "the recorded dispatch re-reads not-performed after retraction",
  );
  assert.equal(
    confinedRun.assessments[0].reason,
    "delivery_candidate_not_currently_prepared",
  );
  assert.equal(
    confinedRun.assessments[0].mappedCandidateReassessmentReason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
  );
  const postRetractionDispatch = performReceiverDispatch({
    deliveryDecisionIndex: 0,
    dispatchedAtEpochMs: confinedAt,
    evaluatedAtEpochMs: confinedAt,
  });
  assert.equal(postRetractionDispatch.recorded, false);
  assert.equal(
    postRetractionDispatch.assessment.reason,
    "delivery_candidate_not_currently_prepared",
  );
  // The dispatch count stays exactly 1 through every refusal.
  assert.equal(currentDispatchPosture({ evaluatedAtEpochMs: confinedAt }).assessments.length, 1);
  assert.equal(heldDeliveryDecisions().decisions.length, 1);

  // (d) markup contract on ui/pond-desktop.html — the dispatch region is
  // additive, the mic stays disabled, and the modules load in lane order.
  const html = readModule("ui/pond-desktop.html");
  assert.match(html, /data-dispatch-note/);
  assert.match(html, /data-dispatch-status/);
  assert.match(html, /data-dispatch-list/);
  assert.match(html, /mic-button" type="button" disabled/);
  const liveSessionTag = html.indexOf('src="pond-live-session.js"');
  const conversationTag = html.indexOf('src="pond-conversation.js"');
  const deliveryTag = html.indexOf('src="pond-delivery.js"');
  const dispatchTag = html.indexOf('src="pond-dispatch.js"');
  const shellTag = html.indexOf('src="pond-shell.js"');
  assert.ok(
    liveSessionTag !== -1 && conversationTag !== -1 && deliveryTag !== -1 &&
      dispatchTag !== -1 && shellTag !== -1,
  );
  assert.ok(liveSessionTag < conversationTag, "the conversation module loads after the live session module");
  assert.ok(conversationTag < deliveryTag, "the delivery module loads after the conversation module");
  assert.ok(deliveryTag < dispatchTag, "the dispatch module loads after the delivery module");
  assert.ok(dispatchTag < shellTag, "the dispatch module loads before the shell module");

  // (e) module-text hygiene and package/CI wiring.
  const dispatchModuleText = readModule("ui/pond-dispatch.js");
  assert.match(
    dispatchModuleText,
    /from "\.\/generated\/pond-stage-d-live-session-dispatch\.js"/,
    "the dispatch module imports only through the committed generated artifact",
  );
  assert.match(
    dispatchModuleText,
    /if \(typeof document !== "undefined"\) \{\s*renderPondDispatch\(document\);\s*\}/,
    "the dispatch module self-mounts like its sibling lane modules",
  );
  const packageJson = JSON.parse(readModule("package.json"));
  assert.equal(
    packageJson.scripts["test:stage-d-p18"],
    "node scripts/pond-dispatch-decision-selftest.mjs",
  );
  assert.equal(
    packageJson.scripts["stage-d:render-live-session-dispatch"],
    "node scripts/render-stage-d-live-session-dispatch.mjs",
  );
  const ci = readModule(".github/workflows/ci.yml");
  assert.equal(ci.split("Verify Stage D-P18 pond dispatch lane").length - 1, 2);
});

console.log(`POND_STAGE_DP18_POND_DISPATCH_LANE_SELFTEST_PASS · ${blocks} blocks`);