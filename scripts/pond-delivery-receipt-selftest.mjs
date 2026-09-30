// Stage D-P19 selftest: the Pond delivery-receipt lane. The matrix block
// proves the receipt arms agree with the real assessor deep-equal and
// deep-frozen and the ceiling stays all-false on every arm; the identity
// ties prove the receipt's dispatch input cannot drift from the frozen
// D-P18 dispatch arms, the receipt vocabulary from the canonical five
// states and the single performable state, the clock ties from the frozen
// pins, and the inventory from the D-P18 union plus four receipt keys; the
// negatives block proves every refusal lands on its own cause with the
// three-depth honest echo chain — the D-P18 re-run's own verdict carried
// verbatim, and inside it the D-P17 verdict and the D-P15 gate verdict; the
// lifecycle block proves the newest-event freshness honesty, the reassess-
// ment outranking the receipt event, and the historical-evidence posture;
// the fail-closed block refuses garbage without throwing; the ceiling block
// proves the does-not-prove family, the widened inventory, and the proof
// binding's performed comparison; the destination-tie block proves the
// receipt carries no separate destination field — the subject agent is the
// certified candidate's own addressed agent; the hygiene block walks the
// banned vocabulary and the env names; and the ui wiring block proves the
// committed generated bundle, the shell module, and the fixture-clock
// shell drive — establish, compose, prepare, dispatch once, record one
// receipt, refused replay, out-of-range index, retracted receipt attempt,
// retract, the receipt surviving as historical evidence — with the
// dispatch confined and the receipt never deleted. Offline structural; no
// env-gated block exists in this cut (it holds no secret-bearing
// ceremony).

import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  stageDP19ReceiptMatrix,
  stageDP19ReceiverRef,
  stageDP19Agent0Ref,
  stageDP19CommunitySlotRef,
  stageDP19EvaluatedAtEpochMs,
  stageDP19DispatchedAtEpochMs,
  stageDP19ReceiptEventAtEpochMs,
  stageDP19FutureReceiptEventAtEpochMs,
  stageDP19PreScopeReceiptEventAtEpochMs,
  stageDP19RetractedReceiptEventAtEpochMs,
  stageDP19RetractedReceiptEvaluatedAtEpochMs,
  stageDP19LateReceiptEventAtEpochMs,
  stageDP19GateExpiryReceiptEvaluatedAtEpochMs,
  stageDP19IntentExpiryReceiptEvaluatedAtEpochMs,
  stageDP19ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p19-pond-receipts.ts";
import {
  assessPondDeliveryReceiptDecision,
  POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS,
  POND_STAGE_DP19_DECLARED_RECEIPT_STATES,
  POND_STAGE_DP19_PERFORMABLE_RECEIPT_STATES,
} from "../src/contracts/pond-delivery-receipt.ts";

import {
  stageDP18DispatchMatrix,
  stageDP18ReceiverRef,
  stageDP18Agent0Ref,
  stageDP18CommunitySlotRef,
  stageDP18EvaluatedAtEpochMs,
  stageDP18DispatchedAtEpochMs,
  stageDP18RetractedDispatchAtEpochMs,
  stageDP18RetractedEvaluatedAtEpochMs,
  stageDP18GateExpiryEvaluatedAtEpochMs,
  stageDP18IntentExpiryEvaluatedAtEpochMs,
  stageDP18ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p18-pond-dispatch.ts";
import { assessPondDispatchDecision, POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS } from "../src/contracts/pond-dispatch-decision.ts";

import {
  stageDP17ReceiverRef,
  stageDP17Agent0Ref,
  stageDP17CommunitySlotRef,
  stageDP17RecordedIntentAtEpochMs,
  stageDP17ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p17-pond-delivery.ts";
import { POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS } from "../src/contracts/pond-delivery-candidate-decision.ts";

import {
  stageDP16ReceiverRef,
  stageDP16EstablishedAtEpochMs,
  stageDP16ComposedAtEpochMs,
  stageDP16RetractedAtEpochMs,
  stageDP16ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p16-pond-conversation.ts";

import {
  stageDP15ReadGateEntryActivated,
  stageDP15ReceiverRef,
  stageDP15ReceiverMaximumAgeMs,
  stageDP15SessionEntryLiveSessionEstablished,
  stageDP15EvaluatedAtEpochMs,
} from "../src/fixtures/stage-d-p15-live-session.ts";
import { POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS as DP15_INVENTORY_CONTRACT } from "../src/contracts/pond-live-session-establishment.ts";
import {
  stageDP0Agent0Ref,
  stageDP0CommunityAgentSlotRef,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "../src/contracts/pond-agent-presence-observation-intake.ts";
import { stageDP6AuthenticationObservationComplete } from "../src/fixtures/stage-d-p6-local-principal-authentication-observation.ts";

import {
  assessPondDeliveryReceiptDecision as assessGeneratedReceiptDecision,
  assessPondDispatchDecision as assessGeneratedDispatchFromReceiptBundle,
  pondStageDP19DeliveryReceiptTemplate,
} from "../ui/generated/pond-stage-d-live-session-receipts.js";
import {
  currentReceiptPosture,
  recordDeliveryReceipt,
  renderPondReceipt,
} from "../ui/pond-receipts.js";
import {
  currentDispatchPosture,
  heldDispatchDecisions,
  performReceiverDispatch,
  renderPondDispatch,
} from "../ui/pond-dispatch.js";
import {
  currentDeliveryPosture,
  heldDeliveryDecisions,
  recordDeliveryCandidatePreparation,
} from "../ui/pond-delivery.js";
import {
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

// Input-shape helper: the receipt-fixture entries carry exactly the
// assessor input the contract demands — the input builder re-assembles it
// in the contract's exact key order so the recompute is a clean re-run.
const RECEIPT_INPUT_KEYS = [
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
  "deliveryReceipt",
];

const receiptInputOf = (entry) => {
  const input = {};
  for (const key of RECEIPT_INPUT_KEYS) input[key] = entry[key];
  return input;
};

const DISPATCH_INPUT_KEYS = RECEIPT_INPUT_KEYS.filter(
  (key) => key !== "deliveryReceipt",
);
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

const evaluated = stageDP19EvaluatedAtEpochMs;
const maximumAge = stageDP19ReceiverMaximumAgeMs;
const receiptEventAt = stageDP19ReceiptEventAtEpochMs;

const admittedArm = byLabel(stageDP19ReceiptMatrix, "receipt_recorded_over_performed_dispatch");
const communityArm = byLabel(stageDP19ReceiptMatrix, "receipt_recorded_over_community_slot_dispatch");

// The cut's own fresh runs — only D-P19 assessments ever land here.
const dp19FreshRuns = [];
const runReceipt = (entry) => {
  const fresh = assessPondDeliveryReceiptDecision(receiptInputOf(entry));
  dp19FreshRuns.push(fresh);
  return fresh;
};

// The all-false ceiling family of this cut: the L203 does-not-prove list,
// the inheritance family, the activation posture, and the authority.
const RECEIPT_CEILING_KEYS = [
  "receiptProvesRecipientAgreement",
  "receiptProvesTaskAcceptance",
  "receiptProvesCapabilityAuthorization",
  "receiptProvesAction",
  "receiptProvesPayment",
  "receiptProvesResultCorrectness",
  "receiptEstablishesGrant",
  "receiptEstablishesConsequenceOrExecution",
  "receiptEstablishesMembershipOrAdmission",
  "receiptEstablishesScope",
  "receiptEstablishesAgentCognitionRuntime",
  "receiptEstablishesAuthorityFromProse",
  "credentialAdmitted",
  "principalIdAcceptedAsAuthorization",
  "personalMemoryContentAdmitted",
  "currentTruthAdmitted",
];

// The recorded receipt record's exact key set — pinned here so the
// destination-tie block and the ceiling block can lean on the shape.
const RECEIPT_RECORD_KEYS = [
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
];

// ---------------------------------------------------------------
// Block 1: matrix recompute — every receipt arm deep-equals its pinned
// assessment, every arm and assessment is deep-frozen, the two recorded
// arms carry the exact positive verdicts, and every arm's ceiling stays
// all-false.
// ---------------------------------------------------------------
block("matrix", () => {
  assert.equal(stageDP19ReceiptMatrix.length, 20, "the receipt matrix is pinned at 20 arms");
  for (const arm of stageDP19ReceiptMatrix) {
    assert.ok(arm.fixtureLabel, "every arm carries a fixture label");
    const fresh = runReceipt(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `arm ${arm.fixtureLabel}`);
    assert.equal(fresh.contractVersion, "pond-delivery-receipt-d-p19", arm.fixtureLabel);
    assert.ok(
      fresh.receiptState === "receipt_not_recorded" ||
        fresh.receiptState ===
          "receipt_recorded_session_scoped_historical_evidence",
      arm.fixtureLabel,
    );
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.satisfiedChecks), arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.unsatisfiedChecks), arm.fixtureLabel);
    assertLacksKeys(
      fresh,
      POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS,
      `arm ${arm.fixtureLabel}`,
    );
    for (const ceilingKey of RECEIPT_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }

  // Both recorded arms carry the full positive verdict, honestly
  // historical-evidence from issuance.
  for (const satisfiedArm of [admittedArm, communityArm]) {
    assert.equal(
      satisfiedArm.assessment.receiptState,
      "receipt_recorded_session_scoped_historical_evidence",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.reason,
      "all_receipt_checks_satisfied",
      satisfiedArm.fixtureLabel,
    );
    assert.deepEqual(satisfiedArm.assessment.unsatisfiedChecks, [], satisfiedArm.fixtureLabel);
    assert.equal(satisfiedArm.assessment.satisfiedChecks.length, 7, satisfiedArm.fixtureLabel);
    assert.equal(
      satisfiedArm.assessment.mappedDispatchState,
      "dispatch_performed_session_scoped_in_process_no_receipt",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.mappedDispatchReason,
      "all_dispatch_checks_satisfied",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.mappedCandidateState,
      "delivery_candidate_prepared_session_scoped_no_dispatch",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.receiptEventFreshnessDiagnosis.observationAgeMs,
      3000,
      `${satisfiedArm.fixtureLabel}: the receipt event is 3 seconds fresh at the lane evaluation instant`,
    );
    // The recorded receipt proves delivery alone: the L203 does-not-prove
    // list walked literally on the recorded arms.
    assert.equal(satisfiedArm.assessment.receiptProvesTaskAcceptance, false);
    assert.equal(satisfiedArm.assessment.receiptProvesPayment, false);
    assert.equal(satisfiedArm.assessment.receiptProvesResultCorrectness, false);
    // The proof binding records the performed comparison.
    assert.equal(satisfiedArm.deliveryReceipt.proofBinding.comparisonPerformed, true);
    assert.equal(
      satisfiedArm.deliveryReceipt.proofBinding.comparisonResult,
      "dispatch_reassessment_agrees_with_the_recorded_dispatch_identity",
    );
  }
});

// ---------------------------------------------------------------
// Block 2: identity ties — the receipt's dispatch input cannot drift from
// the frozen D-P18 dispatch arms (all 15 dispatch keys deep); the receipt
// record keeps the D-P19 dv and kind verbatim; the receipt vocabulary is
// the canonical five states with only `delivered` performable; the clock
// ties descend arithmetically from the frozen pins; the inventory is the
// D-P18 union plus four receipt keys.
// ---------------------------------------------------------------
block("identityTies", () => {
  const frozenGateEntry = stageDP15ReadGateEntryActivated;
  assert.deepEqual(
    deepClone(admittedArm.readGateRecord),
    deepClone(frozenGateEntry.readGateRecord),
    "the receipt gate record drifted from the frozen D-P15 read-gate entry",
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
      `the receipt arm's D-P15 ${label} leg drifted from the frozen read-gate entry`,
    );
  }
  assert.equal(admittedArm.receiverHeldPrincipalRef, frozenGateEntry.receiverHeldPrincipalRef);
  assert.equal(stageDP19ReceiverRef, stageDP18ReceiverRef);
  assert.equal(stageDP19ReceiverRef, stageDP17ReceiverRef);
  assert.equal(stageDP19ReceiverRef, stageDP16ReceiverRef);
  assert.equal(stageDP19ReceiverRef, stageDP15ReceiverRef);
  assert.equal(stageDP19ReceiverMaximumAgeMs, stageDP18ReceiverMaximumAgeMs);
  assert.equal(stageDP19ReceiverMaximumAgeMs, stageDP17ReceiverMaximumAgeMs);
  assert.equal(stageDP19ReceiverMaximumAgeMs, stageDP16ReceiverMaximumAgeMs);
  assert.equal(stageDP19ReceiverMaximumAgeMs, stageDP15ReceiverMaximumAgeMs);
  assert.equal(stageDP19ReceiverMaximumAgeMs, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS);

  // The receipt'sdispatch material is exactly the frozen D-P18 admitted
  // dispatch arm's input — all 15 dispatch keys deep, the D-P18/D-P17
  // dv-preserved candidate and metadata verbatim, the receipt re-run
  // consuming the canonical classifier's own result.
  const dp18AdmittedArm = stageDP18DispatchMatrix.find(
    (arm) => arm.fixtureLabel === "dispatch_admitted_over_prepared_candidate",
  );
  assert.ok(dp18AdmittedArm, "the frozen D-P18 admitted dispatch arm is present");
  for (const key of DISPATCH_INPUT_KEYS) {
    assert.deepEqual(
      deepClone(admittedArm[key]),
      deepClone(dp18AdmittedArm[key]),
      `the receipt arm's dispatch key ${key} drifted from the frozen D-P18 dispatch arm`,
    );
  }
  assert.equal(
    admittedArm.deliveryCandidate.contractVersion,
    "pond-delivery-candidate-decision-d-p17",
    "the receipt-riding candidate keeps the D-P17 dv verbatim",
  );
  assert.equal(admittedArm.deliveryCandidate.kind, "pond-delivery-candidate");
  assert.equal(admittedArm.deliveryCandidate.addressedAgentRef, stageDP19Agent0Ref);

  // The community receipt rides exactly the frozen D-P18 community
  // dispatch arm, and its subject agent keeps the D-P16 community slot.
  const dp18CommunityArm = stageDP18DispatchMatrix.find(
    (arm) => arm.fixtureLabel === "dispatch_admitted_community_slot",
  );
  assert.ok(dp18CommunityArm, "the frozen D-P18 community dispatch arm is present");
  for (const key of DISPATCH_INPUT_KEYS) {
    assert.deepEqual(
      deepClone(communityArm[key]),
      deepClone(dp18CommunityArm[key]),
      `the community receipt's dispatch key ${key} drifted from the frozen D-P18 dispatch arm`,
    );
  }
  assert.equal(communityArm.deliveryCandidate.addressedAgentRef, stageDP19CommunitySlotRef);
  assert.equal(stageDP19CommunitySlotRef, stageDP0CommunityAgentSlotRef);
  assert.equal(stageDP19Agent0Ref, stageDP0Agent0Ref);

  // The receipt record keeps this cut's dv and kind verbatim.
  assert.equal(admittedArm.deliveryReceipt.contractVersion, "pond-delivery-receipt-d-p19");
  assert.equal(admittedArm.deliveryReceipt.kind, "pond-delivery-receipt");

  // The receipt vocabulary is the canonical five states declared verbatim,
  // and exactly one is performable.
  assert.deepEqual(deepClone(POND_STAGE_DP19_DECLARED_RECEIPT_STATES), [
    "accepted_for_delivery",
    "refused",
    "destination_resolved",
    "delivered",
    "failed",
  ]);
  assert.deepEqual(deepClone(POND_STAGE_DP19_PERFORMABLE_RECEIPT_STATES), [
    "delivered",
  ]);

  // The receipt-event metadata keeps the receipt its own freshness basis
  // and the historical-evidence currentness posture.
  assert.equal(admittedArm.deliveryReceipt.deliveryReceiptMetadata.freshness_basis, "delivery_receipt_event_time_only");
  assert.equal(
    admittedArm.deliveryReceipt.deliveryReceiptMetadata.currentness_posture,
    "historical_evidence_at_issuance_not_current_truth",
  );
  assert.equal(communityArm.deliveryReceipt.deliveryReceiptMetadata.freshness_basis, "delivery_receipt_event_time_only");

  // The clock ties descend from the frozen pins: the receipt event
  // postdates the dispatch event it certifies and predates the evaluation
  // instant; the future receipt event sits just past the lane evaluation
  // instant; the pre-scope receipt event postdates the composition and the
  // intent but predates the dispatch; the retracted arm keeps the D-P18
  // retracted pair with its receipt event before the retraction event; the
  // gate-expiry and intent-expiry instants are the frozen D-P18 instants;
  // the late receipt event sits 100ms past the dispatch event.
  assert.equal(stageDP19EvaluatedAtEpochMs, stageDP18EvaluatedAtEpochMs);
  assert.equal(stageDP19DispatchedAtEpochMs, stageDP18DispatchedAtEpochMs);
  assert.equal(
    stageDP19GateExpiryReceiptEvaluatedAtEpochMs,
    stageDP18GateExpiryEvaluatedAtEpochMs,
    "the gate-expiry receipt instant is the D-P18 gate-expiry instant",
  );
  assert.equal(
    stageDP19IntentExpiryReceiptEvaluatedAtEpochMs,
    stageDP18IntentExpiryEvaluatedAtEpochMs,
    "the intent-expiry receipt instant is the D-P18 intent-expiry instant",
  );
  assert.equal(
    stageDP19RetractedReceiptEvaluatedAtEpochMs,
    stageDP18RetractedEvaluatedAtEpochMs,
    "the retracted receipt instant is the D-P18 retracted instant",
  );
  assert.equal(stageDP16EstablishedAtEpochMs, 1800000060000);
  assert.equal(
    stageDP16EstablishedAtEpochMs < stageDP16ComposedAtEpochMs &&
      stageDP16ComposedAtEpochMs < stageDP17RecordedIntentAtEpochMs &&
      stageDP17RecordedIntentAtEpochMs < stageDP19DispatchedAtEpochMs &&
      stageDP19DispatchedAtEpochMs < stageDP19ReceiptEventAtEpochMs &&
      stageDP19ReceiptEventAtEpochMs <= stageDP19EvaluatedAtEpochMs,
    true,
    "the composition, the intent, the dispatch, and the receipt all sit inside the session scope, in order",
  );
  assert.equal(
    stageDP19FutureReceiptEventAtEpochMs,
    stageDP19EvaluatedAtEpochMs + 100,
    "the future receipt event is pinned just past the lane evaluation instant",
  );
  assert.ok(
    stageDP19PreScopeReceiptEventAtEpochMs > stageDP17RecordedIntentAtEpochMs &&
      stageDP19PreScopeReceiptEventAtEpochMs < stageDP19DispatchedAtEpochMs,
    "the pre-scope receipt event postdates the intent but predates the dispatch it would certify",
  );
  assert.ok(
    stageDP19RetractedReceiptEventAtEpochMs > stageDP18RetractedDispatchAtEpochMs &&
      stageDP19RetractedReceiptEventAtEpochMs < stageDP16RetractedAtEpochMs,
    "the retracted arm's receipt event postdates its dispatch and predates the retraction event",
  );
  assert.equal(
    stageDP19LateReceiptEventAtEpochMs,
    stageDP19DispatchedAtEpochMs + 100,
    "the late receipt event sits 100ms past the dispatch event",
  );
  assert.ok(
    stageDP19GateExpiryReceiptEvaluatedAtEpochMs - stageDP19LateReceiptEventAtEpochMs < maximumAge &&
      stageDP19IntentExpiryReceiptEvaluatedAtEpochMs - stageDP19LateReceiptEventAtEpochMs < maximumAge,
    "the late receipt events stay honestly fresh inside the expiry confinements",
  );
  assert.ok(
    stageDP19RetractedReceiptEvaluatedAtEpochMs - stageDP19RetractedReceiptEventAtEpochMs <= maximumAge,
    "the retracted arm's receipt event stays within the freshness window",
  );

  // The receipt record's own scope binding: recorded_at ≥ dispatched_at on
  // the recorded arms.
  assert.ok(
    admittedArm.deliveryReceipt.deliveryReceiptMetadata.recorded_at_epoch_ms >=
      admittedArm.dispatchMetadata.dispatched_at_epoch_ms,
    "the receipt event postdates the dispatch it certifies",
  );
  assert.equal(
    admittedArm.deliveryReceipt.dispatchedAtEventEpochMs,
    admittedArm.dispatchMetadata.dispatched_at_epoch_ms,
    "the receipt's subject-dispatch-instant echo agrees with the validated dispatch metadata",
  );

  // The forbidden-key inventory: exactly the frozen D-P18 union plus the
  // four receipt keys this lane exists to refuse.
  assert.equal(
    POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS.length,
    DP15_INVENTORY_CONTRACT.length + 16,
    "the D-P19 inventory is exactly the D-P15 union plus sixteen keys",
  );
  assert.deepEqual(
    POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS.slice(0, POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS.length),
    [...POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS],
    "the D-P19 inventory keeps the frozen D-P17 union verbatim",
  );
  const dp18Union = [...POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS];
  assert.deepEqual(
    POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS.slice(0, dp18Union.length),
    dp18Union,
    "the D-P19 inventory keeps the frozen D-P18 union verbatim",
  );
  assert.deepEqual(
    POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS.slice(
      POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS.length,
      dp18Union.length,
    ),
    dp18Union.slice(POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS.length),
    "the D-P19 inventory keeps the D-P18 tail (the D-P18-only keys) verbatim",
  );
  assert.deepEqual(
    POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS.slice(-4),
    ["receiptSignature", "receiptChain", "paymentReceipt", "resultProof"],
    "the four receipt keys this lane exists to refuse close the inventory",
  );

  // The recorded receipt's record shape is pinned.
  assert.deepEqual(
    Object.keys(admittedArm.deliveryReceipt).sort(),
    [...RECEIPT_RECORD_KEYS].sort(),
  );
});

// ---------------------------------------------------------------
// Block 3: recompute-agreement negatives — every refused receipt basis
// fails on its own basis check alone with every leg echo green and the
// reassessment verdict green (L49-55); the non-performable states refuse
// at their dedicated cause; the proof-binding disagreements refuse at
// their dedicated cause; the future and pre-scope receipt events refuse
// at theirs; the shape refusals land on the invalid cause; the reassess-
// ment breakage lands on the re-run's own cause with the three-depth
// mapped echo honest.
// ---------------------------------------------------------------
block("recomputeAgreementNegatives", () => {
  const refusedBasisArms = [
    "receipt_refused_basis_inferred_from_dispatch_posture",
    "receipt_refused_basis_asserted_by_model_completion",
    "receipt_refused_basis_claimed_by_third_party_observer",
    "receipt_refused_basis_replayed_from_prior_receipt_decision",
  ];
  for (const label of refusedBasisArms) {
    const arm = byLabel(stageDP19ReceiptMatrix, label);
    const fresh = runReceipt(arm);
    assert.equal(fresh.receiptState, "receipt_not_recorded", label);
    assert.equal(fresh.reason, "receiver_receipt_proof_incomplete", label);
    assert.deepEqual(
      fresh.unsatisfiedChecks,
      ["receipt_basis_receiver_observed_not_inferred"],
      label,
    );
    assert.equal(fresh.satisfiedChecks.length, 6, label);
    // Every leg echo stays green (L49-55): the basis is the only failure.
    assert.equal(
      fresh.mappedDispatchState,
      "dispatch_performed_session_scoped_in_process_no_receipt",
      label,
    );
    assert.equal(
      fresh.mappedCandidateState,
      "delivery_candidate_prepared_session_scoped_no_dispatch",
      label,
    );
    assert.equal(
      fresh.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      label,
    );
    assert.equal(fresh.receiptEventFreshnessDiagnosis.state, "fresh", label);
  }

  // The replayed receipt basis is a refusal vocabulary element like any
  // other: the ceremony refuses it at the declarative check and records
  // nothing about consumption here.
  const replayArm = byLabel(stageDP19ReceiptMatrix, "receipt_refused_basis_replayed_from_prior_receipt_decision");
  assert.equal(
    replayArm.deliveryReceipt.receiptBasis,
    "replayed_from_prior_receipt_decision",
    "the replay refusal refuses the RECEIPT basis, never the dispatch's own basis",
  );

  // The non-performable canonical states refuse at their dedicated cause:
  // the vocabulary stays declared verbatim, and no non-delivered machinery
  // is invented to record over.
  for (const label of [
    "receipt_refused_state_destination_resolved",
    "receipt_refused_state_refused",
    "receipt_refused_state_accepted_for_delivery",
    "receipt_refused_state_failed",
  ]) {
    const arm = byLabel(stageDP19ReceiptMatrix, label);
    const fresh = runReceipt(arm);
    assert.equal(fresh.receiptState, "receipt_not_recorded", label);
    assert.equal(fresh.reason, "receipt_state_not_performable_this_cut", label);
    assert.equal(fresh.satisfiedChecks.length, 0, label);
    assert.equal(
      fresh.mappedDispatchState,
      "dispatch_performed_session_scoped_in_process_no_receipt",
      `${label}: the reassessment stays green while the state refuses`,
    );
    assert.equal(fresh.receiptEventFreshnessDiagnosis.state, "fresh", label);
  }

  // The proof-binding disagreements refuse at their dedicated cause: a
  // receipt whose subject agent, subject dispatch instant, or recorded
  // comparison result disagrees with the reassessed dispatch is not
  // bound to it.
  for (const label of [
    "receipt_refused_proof_binding_agent_ref_mismatch",
    "receipt_refused_proof_binding_dispatched_at_mismatch",
    "receipt_refused_binding_result_records_disagreement",
  ]) {
    const arm = byLabel(stageDP19ReceiptMatrix, label);
    const fresh = runReceipt(arm);
    assert.equal(fresh.receiptState, "receipt_not_recorded", label);
    assert.equal(
      fresh.reason,
      "receipt_proof_binding_disagrees_with_dispatch_reassessment",
      label,
    );
    assert.equal(fresh.satisfiedChecks.length, 0, label);
    // The honest echoes stay green: the refusal is the binding's alone.
    assert.equal(
      fresh.mappedDispatchState,
      "dispatch_performed_session_scoped_in_process_no_receipt",
      label,
    );
    assert.equal(fresh.receiptEventFreshnessDiagnosis.state, "fresh", label);
  }

  // The future receipt event refuses on its own diagnosis while the
  // reassessment verdict stays performed (the newest-event inversion).
  const futureArm = byLabel(stageDP19ReceiptMatrix, "receipt_event_refused_in_future");
  assert.equal(futureArm.assessment.reason, "receipt_event_not_session_current");
  assert.equal(futureArm.assessment.receiptEventFreshnessDiagnosis.state, "unknown");
  assert.equal(
    futureArm.assessment.receiptEventFreshnessDiagnosis.reason,
    "observation_time_in_future",
  );
  assert.equal(
    futureArm.assessment.mappedDispatchState,
    "dispatch_performed_session_scoped_in_process_no_receipt",
  );

  // The receipt event before the dispatch it would certify refuses at the
  // scope cause with the event's own diagnosis honestly fresh.
  const preScopeArm = byLabel(stageDP19ReceiptMatrix, "receipt_event_refused_before_the_dispatch_it_certifies");
  assert.equal(
    preScopeArm.assessment.reason,
    "receipt_event_not_of_the_current_dispatch_scope",
  );
  assert.equal(preScopeArm.assessment.receiptEventFreshnessDiagnosis.state, "fresh");
  assert.equal(preScopeArm.assessment.satisfiedChecks.length, 0);

  // Shape refusals: missing and forbidden receipt keys refuse at the
  // invalid cause with the fallback diagnosis honest and the version
  // honest (invalid).
  for (const label of ["receipt_refused_missing_key", "receipt_refused_extra_key_payment_receipt"]) {
    const fresh = runReceipt(byLabel(stageDP19ReceiptMatrix, label));
    assert.equal(fresh.receiptState, "receipt_not_recorded", label);
    assert.equal(fresh.reason, "receipt_record_invalid", label);
    assert.equal(fresh.receiptDecisionVersion, "invalid", label);
    assert.equal(fresh.satisfiedChecks.length, 0, label);
    assert.equal(
      fresh.receiptEventFreshnessDiagnosis.reason,
      "observation_metadata_missing_or_invalid",
      label,
    );
    assert.ok(fresh.mappedDispatchState !== null, label);
  }

  // The reassessment breakage lands on the re-run's own cause with the
  // three-depth mapped echo honest: the retracted, gate-expiry, and
  // intent-expiry confinements each refuse the dispatch first, and the
  // receipt-event diagnosis stays honestly fresh (the newest-event
  // arithmetic one ladder up: the reassessment outranks the receipt
  // event in the ladder, but the event's own diagnosis never lies).
  const retractedArm = byLabel(stageDP19ReceiptMatrix, "receipt_confined_after_retraction");
  const retractedRun = runReceipt(retractedArm);
  assert.equal(retractedRun.reason, "dispatch_reassessment_not_performed");
  assert.equal(
    retractedRun.mappedDispatchReason,
    "delivery_candidate_not_currently_prepared",
    "the retracted confinement maps the D-P18 re-run's own cause",
  );
  assert.equal(
    retractedRun.mappedEstablishmentReason,
    "receiver_retraction_on_record",
    "the retracted confinement maps the establishment-leg cause — retraction confines the session",
  );
  assert.equal(
    retractedRun.mappedReadGateState,
    "no_active_live_session",
    "the third-depth gate STATE stays readable through the D-P18 echo",
  );
  assert.equal(
    retractedRun.mappedCandidateReassessmentReason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
    "the gate refusal surfaces one depth down, through the candidate echo",
  );
  assert.equal(retractedRun.satisfiedChecks.length, 0);
  assert.equal(
    retractedRun.receiptEventFreshnessDiagnosis.state,
    "fresh",
    "the retracted arm's receipt event keeps its own honest freshness",
  );
  const gateExpiryArm = byLabel(stageDP19ReceiptMatrix, "receipt_confined_at_gate_expiry");
  const gateExpiryRun = runReceipt(gateExpiryArm);
  assert.equal(gateExpiryRun.reason, "dispatch_reassessment_not_performed");
  assert.equal(
    gateExpiryRun.receiptEventFreshnessDiagnosis.observationAgeMs,
    34901,
    "the gate-expiry arm's receipt event is 34 901ms fresh — honestly inside the window while the reassessment refuses",
  );
  const intentExpiryArm = byLabel(stageDP19ReceiptMatrix, "receipt_refused_intent_expired_in_reassessment");
  const intentExpiryRun = runReceipt(intentExpiryArm);
  assert.equal(intentExpiryRun.reason, "dispatch_reassessment_not_performed");
  assert.equal(
    intentExpiryRun.mappedCandidateReassessmentReason,
    "delivery_intent_not_session_current",
    "the intent-expiry arm maps the D-P17 re-run's own cause through the D-P18 echo",
  );
  assert.equal(
    intentExpiryRun.receiptEventFreshnessDiagnosis.observationAgeMs,
    55901,
    "the intent-expiry arm's receipt event is 55 901ms fresh — honestly inside the window while the reassessment refuses",
  );

  // Gate-leg breakage: a swapped receiver ref breaks the reassessment at
  // the gate cause — the D-P18 reason maps verbatim, never re-declared.
  const swappedRun = assessPondDeliveryReceiptDecision({
    ...receiptInputOf(admittedArm),
    receiverHeldPrincipalRef: "principal:fixture:stage-d-p14:not-the-receiver",
  });
  assert.equal(swappedRun.receiptState, "receipt_not_recorded");
  assert.equal(swappedRun.reason, "dispatch_reassessment_not_performed");
  assert.equal(
    swappedRun.mappedDispatchReason,
    "delivery_candidate_not_currently_prepared",
  );
  assert.equal(
    swappedRun.mappedReadGateReason,
    "live_session_not_established_refused_or_not_fresh",
    "the swapped receiver's third-depth refusal stays readable — the gate leg's own cause, mapped verbatim",
  );
});

// ---------------------------------------------------------------
// Block 4: lifecycle — the newest-event freshness honesty, the
// reassessment outranking the event, the community receipt's transport
// silence, and the historical-evidence posture of a recorded receipt.
// ---------------------------------------------------------------
block("lifecycle", () => {
  // The base-arm age arithmetic is exact: eval 90 000 − event 87 000.
  assert.equal(
    admittedArm.assessment.receiptEventFreshnessDiagnosis.observationAgeMs,
    stageDP19EvaluatedAtEpochMs - stageDP19ReceiptEventAtEpochMs,
  );

  // The community receipt records through the same ceremony with no
  // transport, signature, chain, payment, or result-proof fact anywhere in
  // its record, and the same delivery-only proof family.
  const communityFresh = runReceipt(communityArm);
  assert.equal(
    communityFresh.receiptState,
    "receipt_recorded_session_scoped_historical_evidence",
  );
  assertDeepFrozen(communityArm.deliveryReceipt, "community receipt");
  assertLacksKeys(communityArm.deliveryReceipt, POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS, "community receipt");
  assert.equal(communityArm.deliveryReceipt.receiptRetentionPosture,
    "receipt_is_module_state_process_lifetime_no_indefinite_retention_delivery_does_not_grant_retention");
  assert.equal(communityArm.deliveryReceipt.receiptPresentationPosture,
    "receipt_presented_as_historical_evidence_at_issuance_out_of_session_rows_show_inspection_only");
  assert.equal(communityArm.deliveryReceipt.receiptAuthorityPosture,
    "receipt_establishes_no_authority_agreement_acceptance_or_rights");

  // The recorded receipt is historical evidence at issuance — the
  // currentness posture is in the recorded event metadata, and the
  // assessment state names the posture verbatim; the freshness window
  // still bounds ISSUANCE (L200-205), so the recorded state never claims
  // current truth.
  assert.equal(admittedArm.deliveryReceipt.receiptState, "delivered");
  assert.equal(
    admittedArm.deliveryReceipt.deliveryReceiptMetadata.currentness_posture,
    "historical_evidence_at_issuance_not_current_truth",
  );
  assert.equal(
    admittedArm.assessment.receiptState,
    "receipt_recorded_session_scoped_historical_evidence",
  );
  assert.equal(admittedArm.assessment.currentTruthAdmitted, false);

  // The receipt subject-identity echoes: the delivered-to agent is the
  // certified candidate's own addressed agent on both recorded arms, and
  // the dispatched-instant echo agrees with the validated metadata.
  for (const arm of [admittedArm, communityArm]) {
    assert.equal(
      arm.deliveryReceipt.deliveredToAgentRef,
      arm.deliveryCandidate.addressedAgentRef,
      `${arm.fixtureLabel}: the receipt subject is the candidate's own addressed agent`,
    );
    assert.equal(
      arm.deliveryReceipt.dispatchedAtEventEpochMs,
      arm.dispatchMetadata.dispatched_at_epoch_ms,
      `${arm.fixtureLabel}: the receipt subject instant agrees with the validated dispatch event`,
    );
    assert.equal(
      arm.deliveryReceipt.proofBinding.expectedDispatchDecisionVersion,
      "pond-dispatch-decision-d-p18",
      `${arm.fixtureLabel}: the proof binding names the frozen D-P18 ceremony`,
    );
    assert.equal(
      arm.deliveryReceipt.proofBinding.expectedDispatchState,
      "dispatch_performed_session_scoped_in_process_no_receipt",
      `${arm.fixtureLabel}: the proof binding names the performed dispatch state`,
    );
  }
});

// ---------------------------------------------------------------
// Block 5: fail-closed — garbage inputs refuse without throwing, with
// honest echoes and honest fallbacks, and nested forbidden keys refuse
// deep.
// ---------------------------------------------------------------
block("failClosed", () => {
  const validReceipt = deepClone(admittedArm.deliveryReceipt);
  const validLegs = receiptInputOf(admittedArm);
  const garbageInputs = [
    null,
    undefined,
    0,
    "receipt?",
    [],
    {},
    { deliveryReceipt: null },
    { deliveryReceipt: "not a record" },
    { deliveryReceipt: [] },
    { deliveryReceipt: validReceipt },
    { ...validLegs, dispatchMetadata: null, deliveryReceipt: validReceipt },
    { ...validLegs, deliveryReceipt: { ...validReceipt, deliveryReceiptMetadata: null } },
    { ...validLegs, deliveryReceipt: { ...validReceipt, deliveryReceiptMetadata: 42 } },
    {
      ...validLegs,
      deliveryReceipt: {
        ...validReceipt,
        proofBinding: { ...validReceipt.proofBinding, comparisonPerformed: false },
      },
    },
    {
      ...validLegs,
      deliveryReceipt: { ...validReceipt, proofBinding: [] },
    },
    {
      ...validLegs,
      deliveryReceipt: {
        ...validReceipt,
        receiptAuthorityPosture: "receipt_grants_acceptance_rights",
      },
    },
    {
      ...validLegs,
      deliveryReceipt: {
        ...validReceipt,
        receiptState: "receipt_in_wrong_vocabulary",
      },
    },
    {
      ...validLegs,
      deliveryReceipt: {
        ...validReceipt,
        receiptBasis: "assumed_because_dispatch_happened",
      },
    },
  ];
  for (const input of garbageInputs) {
    let assessment = null;
    assert.doesNotThrow(() => {
      assessment = assessPondDeliveryReceiptDecision(input);
    });
    assert.equal(assessment.receiptState, "receipt_not_recorded", "garbage refuses");
    assert.ok(assessment.mappedDispatchState !== null, "echoes always carried");
    assert.ok(assessment.mappedCandidateState !== null, "echoes always carried");
    assert.ok(assessment.mappedEstablishmentState !== null, "echoes always carried");
    assert.ok(assessment.mappedReadGateState !== null, "echoes always carried");
    assert.ok(assessment.receiptEventFreshnessDiagnosis !== null, "diagnosis always carried");
    assertLacksKeys(assessment, POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS, "garbage assessment");
    for (const ceilingKey of RECEIPT_CEILING_KEYS) {
      assert.equal(assessment[ceilingKey], false, `ceiling ${ceilingKey} on garbage input`);
    }
  }
  // The exact breakage classes: everything without a valid receipt record
  // is invalid; the valid receipt over broken dispatch legs lands at the
  // reassessment cause.
  assert.doesNotThrow(() => {
    const broken = assessPondDeliveryReceiptDecision(
      { ...validLegs, deliveryReceipt: validReceipt },
    );
    assert.equal(broken.contractVersion, "pond-delivery-receipt-d-p19");
    assert.equal(broken.receiptDecisionVersion, "pond-delivery-receipt-d-p19");
  });
  const reassessmentBroken = assessPondDeliveryReceiptDecision(
    { ...validLegs, dispatchMetadata: null, deliveryReceipt: validReceipt },
  );
  assert.equal(reassessmentBroken.reason, "dispatch_reassessment_not_performed");

  // A receipt whose valid record rides legs whose reassessment is fine
  // but whose nested extra key is forbidden deep inside the metadata:
  // the deep walk refuses.
  const nestedForbidden = assessPondDeliveryReceiptDecision(
    {
      ...validLegs,
      deliveryReceipt: {
        ...validReceipt,
        dispatchedAtEventEpochMs: {
          outer: { receiptSignature: "sig" },
        },
      },
    },
  );
  assert.equal(nestedForbidden.reason, "receipt_record_invalid");
});

// ---------------------------------------------------------------
// Block 6: ceiling and widen — the inventory slice ties, the widen probes,
// the does-not-prove family, and the proof binding's performed comparison
// fields.
// ---------------------------------------------------------------
block("ceilingAndWiden", () => {
  // The inventory slice: the D-P19 inventory keeps the D-P18 union
  // verbatim and closes with its own four receipt keys.
  const fullDP18 = [...POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS];
  assert.deepEqual(
    POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS.slice(0, fullDP18.length),
    fullDP18,
    "the D-P19 inventory keeps the frozen D-P18 union verbatim",
  );
  assert.equal(
    POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS.length,
    fullDP18.length + 4,
    "the D-P19 inventory is exactly the D-P18 union plus four keys",
  );

  // The widen probes: every receipt key this lane exists to refuse — plus
  // the inherited delivery-lane vocabulary — refuses the record whole.
  const validLegs = receiptInputOf(admittedArm);
  for (const key of [
    "receiptSignature",
    "receiptChain",
    "paymentReceipt",
    "resultProof",
    "dispatchReceipt",
    "agentReply",
    "chatMessage",
    "agentTaskAcceptance",
    "deliveredMessage",
    "deliveryReceipt",
  ]) {
    const widened = assessPondDeliveryReceiptDecision({
      ...validLegs,
      deliveryReceipt: { ...deepClone(admittedArm.deliveryReceipt), [key]: { widened: "would_go_here" } },
    });
    assert.equal(widened.reason, "receipt_record_invalid", `widen probe ${key}`);
    assert.equal(widened.receiptState, "receipt_not_recorded", `widen probe ${key}`);
  }

  // The does-not-prove family is all-false on fresh runs of the recorded
  // arms, and the retention/presentation/authority postures ride the
  // record verbatim.
  for (const arm of [admittedArm, communityArm]) {
    const fresh = runReceipt(arm);
    for (const ceilingKey of RECEIPT_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }

  // The proof binding realizes the derived-evidence minimum: identity
  // fields + the performed comparison + the recorded result, and the
  // ceremony refuses a record whose recorded result claims refusal (the
  // comparison's recorded outcome must agree with the performed one).
  assert.equal(admittedArm.deliveryReceipt.proofBinding.comparisonPerformed, true);
  const disagreeingResult = assessPondDeliveryReceiptDecision({
    ...validLegs,
    deliveryReceipt: {
      ...deepClone(admittedArm.deliveryReceipt),
      proofBinding: {
        ...deepClone(admittedArm.deliveryReceipt.proofBinding),
        comparisonResult:
          "dispatch_reassessment_refuses_the_recorded_dispatch_identity",
      },
    },
  });
  assert.equal(
    disagreeingResult.reason,
    "receipt_proof_binding_disagrees_with_dispatch_reassessment",
    "a recorded refusal result contradicts the performed agreement — it refuses",
  );
});

// ---------------------------------------------------------------
// Block 7: destination tie — no separate receipt destination field exists:
// the subject agent is an identity echo of the certified candidate's own
// addressed agent, never an input; a tampered destination refuses at the
// proof-binding disagreement cause, never widening any audience.
// ---------------------------------------------------------------
block("destinationTie", () => {
  // The record keys are pinned — there is no destination key beyond the
  // delivered-to echo.
  assert.deepEqual(
    Object.keys(admittedArm.deliveryReceipt).sort(),
    [...RECEIPT_RECORD_KEYS].sort(),
    "the receipt record has exactly the pinned keys — no separate destination field",
  );
  assert.deepEqual(
    Object.keys(receiptInputOf(admittedArm)).sort(),
    [...RECEIPT_INPUT_KEYS].sort(),
    "the receipt input has exactly the 16 pinned keys — no destination input",
  );
  const contractText = readModule("src/contracts/pond-delivery-receipt.ts");
  assert.ok(
    !contractText.includes("receiptDestination") &&
      !contractText.includes("receipt_destination"),
    "the contract never declares a receipt-destination key",
  );

  // The subject-identity echo holds on both recorded arms.
  for (const arm of [admittedArm, communityArm]) {
    assert.equal(
      arm.deliveryReceipt.deliveredToAgentRef,
      arm.deliveryCandidate.addressedAgentRef,
    );
  }

  // A tampered destination refuses at the proof-binding disagreement
  // cause — the reassessed candidate's audience is untouched and the
  // declared agent family is untouched.
  const validLegs = receiptInputOf(admittedArm);
  const tampered = assessPondDeliveryReceiptDecision({
    ...validLegs,
    deliveryReceipt: {
      ...deepClone(admittedArm.deliveryReceipt),
      deliveredToAgentRef: "agent:a-wider-audience-slot",
    },
  });
  assert.equal(
    tampered.reason,
    "receipt_proof_binding_disagrees_with_dispatch_reassessment",
    "a widened destination refuses as a binding disagreement",
  );
  assert.equal(
    tampered.mappedCandidateState,
    "delivery_candidate_prepared_session_scoped_no_dispatch",
    "the reassessed candidate's own audience is untouched",
  );
  assert.equal(
    tampered.receiptEventFreshnessDiagnosis.state,
    "fresh",
    "the tampered destination's receipt event stays honestly fresh",
  );
});

// ---------------------------------------------------------------
// Block 8: hygiene — DOM-shaped needles and transport text stay out of the
// cut's contract and fixture; the fixture stays value-import-free; the
// banned frozen names never re-declare; the env-name family stays out of
// every non-sanctioned file; and the hand-written receipts module stays
// walked.
// ---------------------------------------------------------------
block("hygiene", () => {
  const contractPaths = [
    "src/contracts/pond-delivery-receipt.ts",
    "src/fixtures/stage-d-p19-pond-receipts.ts",
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

  // (e) the inventory union stays intact: the D-P18 inventory is the
  // imported base, and this cut's four receipt keys are quoted in full —
  // the composed walk is exactly one key longer per addition.
  assert.ok(
    texts[0].includes("POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS"),
    "the composed inventory must import the frozen D-P18 base",
  );
  for (const key of ["receiptSignature", "receiptChain", "paymentReceipt", "resultProof"]) {
    assert.ok(texts[0].includes(`"${key}"`), `forbidden key ${key} missing from the contract inventory`);
  }

  // (f) the env-needle family stays out of every non-sanctioned file: this
  // cut has no secret-bearing ceremony, so no first-stage env name appears
  // in any file of this cut. The ban matches the shared env prefix —
  // strictly wider than either full needle, and this walk itself never
  // carries one.
  for (const path of [
    "src/contracts/pond-delivery-receipt.ts",
    "src/fixtures/stage-d-p19-pond-receipts.ts",
    "docs/stage-d-p19-pond-delivery-receipt-lane.md",
    "ui/pond-receipts.js",
    "ui/pond-dispatch.js",
  ]) {
    const fileText = readModule(path);
    assert.ok(
      !fileText.includes("TOADAID_LIVE_"),
      `${path} carries a first-stage live-session env name`,
    );
  }

  // (g) the hand-written receipts module stays walked: no D-P9/D-P10
  // vocabulary, no src import, no banned transport/store needle.
  const moduleText = readModule("ui/pond-receipts.js");
  assert.ok(
    !moduleText.includes("pond-local-principal-id-issuance") &&
      !moduleText.includes("pond-erc8004-identity-mapping") &&
      !moduleText.includes("pond-principal-identity-readiness-composition") &&
      !moduleText.includes("pond-private-read-activation") &&
      !moduleText.includes("pond-private-read-admission"),
    "the hand-written receipts module carries frozen vocabulary",
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
// runs the honest receipt-store lifecycle (establish → compose → prepare
// → dispatch once → record one receipt → refused replay → out-of-range
// index → receipt over a confined lane → retract → the dispatch confined
// and the receipt surviving as historical evidence); the delivery and
// dispatch lanes stay untouched; the markup contract holds with the mic
// still disabled and the modules in lane order; the module texts and the
// package wiring hold.
// ---------------------------------------------------------------
block("uiWiring", () => {
  // (a) generated-bundle tie: the committed artifact is the only bridge
  // from the shell module to the contracts; its assessors recompute the
  // established arms identically to the src contracts, and the D-P18
  // assessor plumbed through this bundle ties the same way.
  const srcReceiptRun = assessPondDeliveryReceiptDecision(receiptInputOf(admittedArm));
  const genReceiptRun = assessGeneratedReceiptDecision(receiptInputOf(admittedArm));
  assert.deepEqual(deepClone(genReceiptRun), deepClone(srcReceiptRun));
  const refusedArm = byLabel(stageDP19ReceiptMatrix, "receipt_refused_basis_replayed_from_prior_receipt_decision");
  const srcRefusedRun = assessPondDeliveryReceiptDecision(receiptInputOf(refusedArm));
  const genRefusedRun = assessGeneratedReceiptDecision(receiptInputOf(refusedArm));
  assert.deepEqual(deepClone(genRefusedRun), deepClone(srcRefusedRun));
  const genDispatchRun = assessGeneratedDispatchFromReceiptBundle(
    dispatchInputOf(byLabel(stageDP18DispatchMatrix, "dispatch_admitted_over_prepared_candidate")),
  );
  const srcDispatchRun = assessPondDispatchDecision(
    dispatchInputOf(byLabel(stageDP18DispatchMatrix, "dispatch_admitted_over_prepared_candidate")),
  );
  assert.deepEqual(
    deepClone(genDispatchRun),
    deepClone(srcDispatchRun),
    "the receipts bundle carries the frozen D-P18 assessor as plumbing",
  );

  // The bundle's receipt template plus the receiver-own fields equals the
  // pinned recorded receipt — the shell never restates a posture literal.
  const templateTie = {
    ...pondStageDP19DeliveryReceiptTemplate,
    deliveryReceiptMetadata: {
      ...pondStageDP19DeliveryReceiptTemplate.deliveryReceiptMetadata,
      recorded_at_epoch_ms:
        admittedArm.deliveryReceipt.deliveryReceiptMetadata.recorded_at_epoch_ms,
    },
    deliveredToAgentRef: admittedArm.deliveryReceipt.deliveredToAgentRef,
    dispatchedAtEventEpochMs: admittedArm.deliveryReceipt.dispatchedAtEventEpochMs,
  };
  assert.deepEqual(
    deepClone(templateTie),
    deepClone(admittedArm.deliveryReceipt),
    "the re-filled template equals the pinned recorded receipt verbatim",
  );

  // (b) render drive — fail-closed on missing document/nodes.
  assert.equal(renderPondReceipt(undefined), false);
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
        if (selector === "[data-receipt-note]") return nodes.note;
        if (selector === "[data-receipt-status]") return nodes.status;
        if (selector === "[data-receipt-list]") return nodes.list;
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
  assert.equal(renderPondReceipt(missingStatus), false);
  const missingList = documentStub();
  missingList.nodes.list = null;
  assert.equal(renderPondReceipt(missingList), false);
  const missingNote = documentStub();
  missingNote.nodes.note = null;
  assert.equal(renderPondReceipt(missingNote), false);

  // The render drive on the empty shell state: the honest empty posture.
  const collectText = (node) =>
    [node.textContent, ...node.children.map(collectText)].join("\n");
  const liveDocument = documentStub();
  assert.equal(renderPondReceipt(liveDocument), true);
  assert.equal(liveDocument.nodes.note.dataset.receiptRendered, "true");
  assert.match(collectText(liveDocument.nodes.list), /No delivery receipts recorded/);

  // (c) the shell drive on the fixture clock — the full receipt-store
  // lifecycle. Determinism comes from the contract's purity, never from
  // the wall clock. The D-P6 observation event is pinned at
  // 1_800_000_030_000, so every evaluation instant used below stays at or
  // below the D-P16 drive's own 65_000 horizon.
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

  // Prepare the delivery candidate.
  const recordAt = composeEpoch + 500;
  const preparedAt = recordAt + 500;
  const prepared = recordDeliveryCandidatePreparation({
    conversationRecordIndex: 0,
    recordedAtEpochMs: recordAt,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(prepared.recorded, true, "the healthy preparation must record");

  // Dispatch once: the dispatch event between the intent and the
  // evaluation, in-process and receipt-free.
  const dispatchEventAt = recordAt + 250;
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
  const dispatchHold = heldDispatchDecisions();
  assert.equal(dispatchHold.held, true);
  assert.equal(dispatchHold.decisions.length, 1);
  assert.deepEqual(
    Object.keys(dispatchHold.decisions[0]).sort(),
    ["addressedAgentRef", "deliveryDecisionIndex", "dispatchedAtEpochMs", "dispatchedText", "input"].sort(),
    "the held dispatch entry carries exactly the receipt-consumption shape",
  );

  // Record one receipt: the receipt event between the dispatch event and
  // the evaluation instant, receiver-observed, `delivered` only.
  const receiptEventAt = recordAt + 400;
  assert.ok(
    receiptEventAt > dispatchEventAt && receiptEventAt <= preparedAt,
    "the receipt event postdates the dispatch and predates the evaluation",
  );
  const receipted = recordDeliveryReceipt({
    dispatchDecisionIndex: 0,
    receiptEventAtEpochMs: receiptEventAt,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(receipted.recorded, true, "the healthy receipt must record");
  assert.equal(
    receipted.assessment.receiptState,
    "receipt_recorded_session_scoped_historical_evidence",
  );
  assert.equal(receipted.assessment.reason, "all_receipt_checks_satisfied");
  assert.equal(receipted.assessment.receiptProvesTaskAcceptance, false);
  assert.equal(receipted.assessment.receiptProvesPayment, false);
  assert.equal(receipted.assessment.receiptProvesResultCorrectness, false);
  assert.equal(receipted.assessment.receiptEstablishesGrant, false);
  assert.equal(receipted.assessment.authority, "none");
  assert.equal(receipted.assessment.receiptEventFreshnessDiagnosis.observationAgeMs, preparedAt - receiptEventAt);
  const receiptPosture = currentReceiptPosture({ evaluatedAtEpochMs: preparedAt });
  assert.equal(receiptPosture.held, true);
  assert.equal(receiptPosture.receipts.length, 1);
  assert.equal(receiptPosture.receipts[0].deliveredText, "Desk, we ride at dawn. Ready your structural reads.");
  assert.equal(receiptPosture.receipts[0].presentationMark, "in_session");
  assert.equal(receiptPosture.receipts[0].receiptEventAtEpochMs, receiptEventAt);
  assert.equal(receiptPosture.receipts[0].dispatchDecisionIndex, 0);
  assert.equal(receiptPosture.receipts[0].receipt.receiptState, "delivered");
  assert.equal(
    receiptPosture.receipts[0].receipt.deliveryReceiptMetadata.recorded_at_epoch_ms,
    receiptEventAt,
    "the recorded receipt's event time is verbatim — frozen at issuance",
  );

  // The dispatch lane stays untouched by the receipt lane: its recorded
  // dispatch still reads performed at the same instant.
  const dispatchAfterReceipt = currentDispatchPosture({ evaluatedAtEpochMs: preparedAt });
  assert.equal(dispatchAfterReceipt.assessments.length, 1);
  assert.equal(
    dispatchAfterReceipt.assessments[0].dispatchState,
    "dispatch_performed_session_scoped_in_process_no_receipt",
  );

  // Re-receipt of the same dispatch: the replayed basis is recorded by
  // the module and the ceremony refuses it at its own declarative check —
  // nothing is stored, and the receipt count stays exactly 1.
  const replayedReceipt = recordDeliveryReceipt({
    dispatchDecisionIndex: 0,
    receiptEventAtEpochMs: receiptEventAt + 50,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(replayedReceipt.recorded, false, "a replayed receipt refuses");
  assert.equal(replayedReceipt.assessment.reason, "receiver_receipt_proof_incomplete");
  assert.deepEqual(
    replayedReceipt.assessment.unsatisfiedChecks,
    ["receipt_basis_receiver_observed_not_inferred"],
    "the replay refuses on the basis check alone, every leg echo green",
  );
  assert.equal(currentReceiptPosture({ evaluatedAtEpochMs: preparedAt }).receipts.length, 1);

  // An out-of-range dispatch index refuses before any input exists.
  const outOfRange = recordDeliveryReceipt({
    dispatchDecisionIndex: 5,
    receiptEventAtEpochMs: receiptEventAt,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(outOfRange.recorded, false);
  assert.equal(outOfRange.assessment, null);
  assert.equal(outOfRange.refusalReason, "dispatch_decision_index_out_of_range");
  assert.equal(currentReceiptPosture({ evaluatedAtEpochMs: preparedAt }).receipts.length, 1);

  // The delivery lane stays untouched by the receipt lane throughout.
  const deliveryAfterReceipt = currentDeliveryPosture({ evaluatedAtEpochMs: preparedAt });
  assert.equal(deliveryAfterReceipt.assessments.length, 1);
  assert.equal(
    deliveryAfterReceipt.assessments[0].deliveryCandidateState,
    "delivery_candidate_prepared_session_scoped_no_dispatch",
  );
  assert.equal(heldDeliveryDecisions().decisions.length, 1);

  // Retract: the recorded dispatch re-reads confined through the
  // reassessment's own cause — while the recorded receipt SURVIVES as
  // historical evidence: count still 1, recorded facts verbatim,
  // presentation mark inspection-only, never deleted.
  const retractionAt = nowMs + 4000;
  const retraction = retractLiveSession({ retractedAtEpochMs: retractionAt });
  assert.equal(retraction.retracted, true);
  const confinedAt = nowMs + 5000;
  const confinedRun = currentDispatchPosture({ evaluatedAtEpochMs: confinedAt });
  assert.equal(confinedRun.assessments.length, 1);
  assert.equal(
    confinedRun.assessments[0].dispatchState,
    "dispatch_not_performed",
    "the recorded dispatch re-reads not-performed after retraction",
  );
  const confinedReceipts = currentReceiptPosture({ evaluatedAtEpochMs: confinedAt });
  assert.equal(
    confinedReceipts.receipts.length,
    1,
    "the receipt survives retraction as historical evidence — it is never deleted",
  );
  assert.equal(confinedReceipts.receipts[0].presentationMark, "inspection_only");
  assert.equal(confinedReceipts.receipts[0].receipt.receiptState, "delivered");
  assert.equal(
    confinedReceipts.receipts[0].receipt.deliveryReceiptMetadata.recorded_at_epoch_ms,
    receiptEventAt,
    "the recorded facts stay verbatim after the session ends",
  );
  assert.equal(confinedReceipts.receipts[0].receipt.receiptBasis, "receiver_observed_in_process_delivery_completed_not_inferred");
  assert.equal(
    confinedReceipts.receipts[0].receipt.proofBinding.comparisonResult,
    "dispatch_reassessment_agrees_with_the_recorded_dispatch_identity",
    "the recorded proof binding stays verbatim — historical evidence is never re-assessed",
  );

  // A receipt attempt over the confined lane refuses — the reassessment's
  // own cause is the honest refusal — and stores nothing.
  const postRetractionReceipt = recordDeliveryReceipt({
    dispatchDecisionIndex: 0,
    receiptEventAtEpochMs: confinedAt,
    evaluatedAtEpochMs: confinedAt,
  });
  assert.equal(postRetractionReceipt.recorded, false);
  assert.equal(
    postRetractionReceipt.assessment.reason,
    "dispatch_reassessment_not_performed",
    "a receipt over a confined dispatch refuses at the reassessment",
  );
  assert.equal(
    postRetractionReceipt.assessment.mappedDispatchReason,
    "delivery_candidate_not_currently_prepared",
  );
  assert.equal(currentReceiptPosture({ evaluatedAtEpochMs: confinedAt }).receipts.length, 1);

  // The delivery lane's store stays untouched by the receipt lane
  // throughout: the prepared rows are never removed or rewritten by a
  // receipt (the confined re-read is the reassessment's own refusal, not a
  // lane mutation).
  assert.equal(heldDeliveryDecisions().decisions.length, 1);

  // (d) markup contract on ui/pond-desktop.html — the receipt region is
  // additive, the mic stays disabled, and the modules load in lane order.
  const html = readModule("ui/pond-desktop.html");
  assert.match(html, /data-receipt-note/);
  assert.match(html, /data-receipt-status/);
  assert.match(html, /data-receipt-list/);
  assert.match(html, /mic-button" type="button" disabled/);
  const liveSessionTag = html.indexOf('src="pond-live-session.js"');
  const conversationTag = html.indexOf('src="pond-conversation.js"');
  const deliveryTag = html.indexOf('src="pond-delivery.js"');
  const dispatchTag = html.indexOf('src="pond-dispatch.js"');
  const receiptsTag = html.indexOf('src="pond-receipts.js"');
  const shellTag = html.indexOf('src="pond-shell.js"');
  assert.ok(
    liveSessionTag !== -1 && conversationTag !== -1 && deliveryTag !== -1 &&
      dispatchTag !== -1 && receiptsTag !== -1 && shellTag !== -1,
  );
  assert.ok(liveSessionTag < conversationTag, "the conversation module loads after the live session module");
  assert.ok(conversationTag < deliveryTag, "the delivery module loads after the conversation module");
  assert.ok(deliveryTag < dispatchTag, "the dispatch module loads after the delivery module");
  assert.ok(dispatchTag < receiptsTag, "the receipts module loads after the dispatch module");
  assert.ok(receiptsTag < shellTag, "the receipts module loads before the shell module");

  // (e) module-text hygiene and package/CI wiring.
  const dispatchModuleText = readModule("ui/pond-dispatch.js");
  assert.match(
    dispatchModuleText,
    /export const heldDispatchDecisions = \(\)/,
    "the additive held-decisions export is present on the dispatch module",
  );
  assert.ok(
    !dispatchModuleText.includes("pond-receipts"),
    "the dispatch module must not import the receipts module — the receipts lane consumes the dispatch lane",
  );
  assert.match(
    dispatchModuleText,
    /from "\.\/generated\/pond-stage-d-live-session-dispatch\.js"/,
    "the dispatch module's own import graph is untouched",
  );
  const receiptsModuleText = readModule("ui/pond-receipts.js");
  assert.match(
    receiptsModuleText,
    /from "\.\/generated\/pond-stage-d-live-session-receipts\.js"/,
    "the receipts module imports only through the committed generated artifact",
  );
  assert.match(
    receiptsModuleText,
    /if \(typeof document !== "undefined"\) \{\s*renderPondReceipt\(document\);\s*\}/,
    "the receipts module self-mounts like its sibling lane modules",
  );
  const packageJson = JSON.parse(readModule("package.json"));
  assert.equal(
    packageJson.scripts["test:stage-d-p19"],
    "node scripts/pond-delivery-receipt-selftest.mjs",
  );
  assert.equal(
    packageJson.scripts["stage-d:render-live-session-receipts"],
    "node scripts/render-stage-d-live-session-receipts.mjs",
  );
  const ci = readModule(".github/workflows/ci.yml");
  assert.equal(
    ci.split("Verify Stage D-P19 pond delivery receipt lane").length - 1,
    2,
    "the CI verify step appears exactly once in each job",
  );

  // The render check wires its own npm script against the committed
  // artifacts.
  const receiptsProvenance = JSON.parse(
    readModule("ui/generated/pond-stage-d-live-session-receipts-provenance.json"),
  );
  assert.equal(receiptsProvenance.record, "src/contracts/pond-delivery-receipt.ts");
  assert.deepEqual(
    receiptsProvenance.renderedStages.slice(-2),
    ["D-P18", "D-P19"],
    "the receipts provenance extends the rendered stages through D-P19",
  );
  const dispatchProvenance = JSON.parse(
    readModule("ui/generated/pond-stage-d-live-session-dispatch-provenance.json"),
  );
  assert.ok(
    !dispatchProvenance.renderedStages.includes("D-P19"),
    "the frozen D-P18 provenance stays untouched",
  );
});

console.log(
  `POND_STAGE_DP19_POND_DELIVERY_RECEIPT_LANE_SELFTEST_PASS · ${blocks} blocks`,
);