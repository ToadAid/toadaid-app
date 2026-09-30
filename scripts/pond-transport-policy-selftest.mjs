// Stage D-P20 selftest: the Pond message-transport lane — one selftest
// over both contracts of the cut. The matrix block proves every transport-
// policy arm and every inbound-wall arm agrees with its real assessor
// deep-equal and deep-frozen with BOTH ceilings all-false on every arm;
// the identity ties prove the policy's candidate legs cannot drift from
// the frozen D-P19 delivery arms (the D-P18-arm subtraction), the policy
// record keeps this cut's dv and kind verbatim, the declared
// intake-channel-class constant ties, the clock pins descend
// arithmetically with the lifecycle-order proof, and the inventory is the
// D-P19 union plus four transport keys; the negatives block refuses every
// refused basis on its own check alone with every echo green, every
// external policy at its dedicated cause with the selection echoed, every
// freshness/scope/invalid/refusal arm, and every wall class at its own
// cause; the lifecycle block proves the ladder-order freshness honesty —
// the policy event is NOT the newest event and staleness isolates by
// ladder order, not newest-event arithmetic — and the post-retraction
// contrast: the policy confines honestly after retraction while the
// D-P19 receipt is frozen-at-issuance historical evidence; the
// fail-closed block refuses garbage without throwing on both contracts;
// the ceiling block proves the inventory slices and the widen probes; the
// destination-tie block proves no policy destination field exists and the
// wall echoes nothing about any claim; the hygiene block walks DOM
// needles, network constants, banned frozen names, and the env-prefix
// family; and the ui wiring block proves the committed generated bundle,
// the shell module, and the fixture-clock shell drive — establish,
// compose, prepare, RECORD THE POLICY FIRST (the lifecycle order the
// frozen chain does not enforce), dispatch once, receipt, refused replay,
// out-of-range index, then retract with the dispatch confined, the
// receipt surviving inspection-only, and the POLICY confined-refusing
// honestly (the deliberate contrast). Offline structural; no env-gated
// block exists in this cut (it holds no secret-bearing ceremony).

import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  stageDP20TransportPolicyMatrix,
  stageDP20RemoteMessageMatrix,
  stageDP20ReceiverRef,
  stageDP20Agent0Ref,
  stageDP20CommunitySlotRef,
  stageDP20PolicyEvaluatedAtEpochMs,
  stageDP20PolicyEventAtEpochMs,
  stageDP20FuturePolicyEventAtEpochMs,
  stageDP20PreScopePolicyEventAtEpochMs,
  stageDP20PreEstablishmentPolicyEventAtEpochMs,
  stageDP20RetractedPolicyEventAtEpochMs,
  stageDP20RetractedPolicyEvaluatedAtEpochMs,
  stageDP20GateExpiryPolicyEvaluatedAtEpochMs,
  stageDP20IntentExpiryPolicyEvaluatedAtEpochMs,
  stageDP20ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p20-pond-transport.ts";
import {
  assessPondTransportPolicyDecision,
  POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS,
  POND_STAGE_DP20_PERFORMABLE_TRANSPORT_POLICIES,
} from "../src/contracts/pond-transport-policy-decision.ts";
import {
  assessPondRemoteMessageIntakeRefusal,
  POND_STAGE_DP20_DECLARED_INTAKE_CHANNEL_CLASSES,
} from "../src/contracts/pond-remote-message-refusal.ts";

import {
  stageDP19ReceiptMatrix,
  stageDP19ReceiverRef,
  stageDP19Agent0Ref,
  stageDP19CommunitySlotRef,
  stageDP19EvaluatedAtEpochMs,
  stageDP19DispatchedAtEpochMs,
  stageDP19ReceiptEventAtEpochMs,
  stageDP19ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p19-pond-receipts.ts";
import { POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS } from "../src/contracts/pond-delivery-receipt.ts";

import {
  stageDP18ReceiverRef,
  stageDP18DispatchedAtEpochMs,
  stageDP18RetractedDispatchAtEpochMs,
  stageDP18RetractedEvaluatedAtEpochMs,
  stageDP18GateExpiryEvaluatedAtEpochMs,
  stageDP18IntentExpiryEvaluatedAtEpochMs,
  stageDP18ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p18-pond-dispatch.ts";

import {
  stageDP17ReceiverRef,
  stageDP17Agent0Ref,
  stageDP17CommunitySlotRef,
  stageDP17RecordedIntentAtEpochMs,
  stageDP17ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p17-pond-delivery.ts";

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
import {
  stageDP0Agent0Ref,
  stageDP0CommunityAgentSlotRef,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "../src/contracts/pond-agent-presence-observation-intake.ts";
import { stageDP6AuthenticationObservationComplete } from "../src/fixtures/stage-d-p6-local-principal-authentication-observation.ts";

import {
  assessPondTransportPolicyDecision as assessGeneratedTransportPolicyDecision,
  assessPondRemoteMessageIntakeRefusal as assessGeneratedRemoteMessageRefusal,
  pondStageDP20TransportPolicyTemplate,
} from "../ui/generated/pond-stage-d-live-session-transport.js";
import {
  currentRemoteMessageWallPosture,
  currentTransportPosture,
  recordTransportPolicy,
  renderPondTransport,
} from "../ui/pond-transport.js";
import {
  currentReceiptPosture,
  recordDeliveryReceipt,
} from "../ui/pond-receipts.js";
import {
  currentDispatchPosture,
  heldDispatchDecisions,
  performReceiverDispatch,
} from "../ui/pond-dispatch.js";
import {
  currentDeliveryPosture,
  heldDeliveryDecisions,
  recordDeliveryCandidatePreparation,
} from "../ui/pond-delivery.js";
import { recordConversationComposedText } from "../ui/pond-conversation.js";
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

// Input-shape helpers: the policy-fixture entries carry exactly the
// assessor input the contract demands — the input builder re-assembles it
// in the contract's exact key order so the recompute is a clean re-run.
const TRANSPORT_INPUT_KEYS = [
  "transportPolicy",
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

// The 14-key candidate input the re-run consumes: fullCandidateLegs'
// projection — never spread the wider 15-key input.
const CANDIDATE_INPUT_KEYS = TRANSPORT_INPUT_KEYS.filter(
  (key) => key !== "transportPolicy",
);

// The 13 shared legs (candidate legs minus the candidate) tie against the
// frozen D-P19 receipt arms.
const LEG_KEYS = CANDIDATE_INPUT_KEYS.filter(
  (key) => key !== "deliveryCandidate",
);

const transportInputOf = (entry) => {
  const input = {};
  for (const key of TRANSPORT_INPUT_KEYS) input[key] = entry[key];
  return input;
};
const candidateInputOf = (entry) => {
  const input = {};
  for (const key of CANDIDATE_INPUT_KEYS) input[key] = entry[key];
  return input;
};
const wallInputOf = (entry) => ({
  remoteMessageClaim: entry.remoteMessageClaim,
});

const byLabel = (matrix, label) => {
  const entry = matrix.find((candidate) => candidate.fixtureLabel === label);
  assert.ok(entry, `missing fixture arm: ${label}`);
  return entry;
};

const evaluated = stageDP20PolicyEvaluatedAtEpochMs;
const maximumAge = stageDP20ReceiverMaximumAgeMs;

const admittedArm = byLabel(
  stageDP20TransportPolicyMatrix,
  "transport_policy_recorded_in_process_agent0",
);
const communityArm = byLabel(
  stageDP20TransportPolicyMatrix,
  "transport_policy_recorded_in_process_community_slot",
);

// The cut's own fresh runs — only D-P20 assessments ever land here.
const dp20FreshRuns = [];
const runPolicy = (entry) => {
  const fresh = assessPondTransportPolicyDecision(transportInputOf(entry));
  dp20FreshRuns.push(fresh);
  return fresh;
};
const runFreshPolicy = (input) =>
  assessPondTransportPolicyDecision(input);
const wallFreshRuns = [];
const runWall = (entry) => {
  const fresh = assessPondRemoteMessageIntakeRefusal(wallInputOf(entry));
  wallFreshRuns.push(fresh);
  return fresh;
};

// The all-false ceiling families of this cut — BOTH contracts walked
// literally on every arm: the policy ceiling (governance-only, consumed
// by nothing this cut) and the wall ceiling (a refusal is evidence of
// nothing and echoes nothing).
const POLICY_CEILING_KEYS = [
  "policyEstablishesExternalTransportRuntime",
  "policyEstablishesChannelAuthority",
  "policyEstablishesAgentIdentityOrAdmission",
  "policyEstablishesGrant",
  "policyEstablishesConsequenceOrExecution",
  "policyEstablishesAcceptanceOrTaskAgreement",
  "policyEstablishesAuthorityFromProse",
  "policyEstablishesMembershipOrAdmission",
  "policyEstablishesAgentCognitionRuntime",
  "policyEstablishesScope",
  "transportAcceptedAsAgentIdentity",
  "transportPolicyConsumedThisCut",
  "credentialAdmitted",
  "principalIdAcceptedAsAuthorization",
  "personalMemoryContentAdmitted",
  "currentTruthAdmitted",
];

const WALL_CEILING_KEYS = [
  "remoteMessageEstablishesAuthority",
  "remoteMessageEstablishesAdmission",
  "remoteMessageEstablishesAgentIdentity",
  "remoteMessageEstablishesMembership",
  "remoteMessageEstablishesCapabilityOrGrant",
  "remoteMessageCredentialsAdmitted",
  "remoteMessageGrantClaimAdmitted",
  "claimContentEchoed",
  "claimContentStored",
  "senderIdentityEchoed",
  "senderIdentityAcceptedAsIdentity",
  "remoteMessageEstablishesChannelAuthority",
  "credentialAdmitted",
  "principalIdAcceptedAsAuthorization",
  "personalMemoryContentAdmitted",
  "currentTruthAdmitted",
];

// The recorded policy record's exact key set — pinned here so the
// destination-tie block and the ceiling block can lean on the shape.
const POLICY_RECORD_KEYS = [
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
];

// The L220 transport list declared verbatim as ONE performable policy and
// EIGHT external refusal policies (MCP kept as a tool-adapter to honor
// L232's split; `undeclared_future` keeps "and future transports"
// verbatim). The external literals are probed fresh against the real
// assessor — the decomposition is behavioral, not just typed.
const EXTERNAL_TRANSPORT_POLICIES = [
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

// The nine-literal class vocabulary: the trusted-channel L23-33 classes
// snake-cased plus messaging L131's untrusted external input. The eight
// trusted classes refuse at their own dedicated cause fresh; the unknown
// class fail-closes; only the honestly self-declared untrusted class
// reaches the terminal refusal.
const TRUSTED_CHANNEL_CLASSES = [
  "trusted_runtime_configuration",
  "operator",
  "task_input",
  "conversation_context",
  "retrieved_evidence",
  "canonical_memory",
  "provider_output",
  "authority_decision",
];

// ---------------------------------------------------------------
// Block 1: matrix recompute — every policy arm deep-equals its pinned
// assessment, every arm and assessment is deep-frozen, the two recorded
// arms carry the exact positive verdicts, every arm's policy ceiling
// stays all-false; every wall arm refuses with the wall ceiling
// all-false.
// ---------------------------------------------------------------
block("matrix", () => {
  assert.equal(
    stageDP20TransportPolicyMatrix.length,
    19,
    "the transport-policy matrix is pinned at 19 arms",
  );
  assert.equal(
    stageDP20RemoteMessageMatrix.length,
    10,
    "the inbound-wall matrix is pinned at 10 arms",
  );
  for (const arm of stageDP20TransportPolicyMatrix) {
    assert.ok(arm.fixtureLabel, "every arm carries a fixture label");
    const fresh = runPolicy(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `arm ${arm.fixtureLabel}`);
    assert.equal(
      fresh.contractVersion,
      "pond-transport-policy-decision-d-p20",
      arm.fixtureLabel,
    );
    assert.ok(
      fresh.transportPolicyState === "transport_policy_not_recorded" ||
        fresh.transportPolicyState ===
          "transport_policy_recorded_session_scoped_no_external_transport",
      arm.fixtureLabel,
    );
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.satisfiedChecks), arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.unsatisfiedChecks), arm.fixtureLabel);
    assertLacksKeys(
      fresh,
      POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS,
      `arm ${arm.fixtureLabel}`,
    );
    for (const ceilingKey of POLICY_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }

  // Both recorded arms carry the full positive verdict with the policy
  // recorded as session-scoped governance that consumes nothing.
  for (const satisfiedArm of [admittedArm, communityArm]) {
    assert.equal(
      satisfiedArm.assessment.transportPolicyState,
      "transport_policy_recorded_session_scoped_no_external_transport",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.reason,
      "all_transport_policy_checks_satisfied",
      satisfiedArm.fixtureLabel,
    );
    assert.deepEqual(satisfiedArm.assessment.unsatisfiedChecks, [], satisfiedArm.fixtureLabel);
    assert.equal(satisfiedArm.assessment.satisfiedChecks.length, 9, satisfiedArm.fixtureLabel);
    assert.equal(
      satisfiedArm.assessment.recordedTransportPolicy,
      "in_process_local_conversation_context_delivery_only",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(satisfiedArm.assessment.transportPolicyConsumedThisCut, false);
    // The four mapped candidate-side echoes stay green on the recorded
    // arms — the three-depth honest echo chain intact.
    assert.equal(
      satisfiedArm.assessment.mappedCandidateState,
      "delivery_candidate_prepared_session_scoped_no_dispatch",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.mappedCandidateReassessmentReason,
      "all_delivery_candidate_checks_satisfied",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.mappedCandidateIntentDiagnosis.state,
      "fresh",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.mappedEstablishmentState,
      "live_session_scoped_authentication_established",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.mappedDeliveredRecordAdmissionReason,
      "all_conversation_record_checks_satisfied",
      satisfiedArm.fixtureLabel,
    );
    // The policy event is 5 seconds old at the lane evaluation instant —
    // its OWN honesty, not the newest-event arithmetic.
    assert.equal(
      satisfiedArm.assessment.transportPolicyEventFreshnessDiagnosis.observationAgeMs,
      5500,
      `${satisfiedArm.fixtureLabel}: the policy event is 5500ms fresh at the lane evaluation instant`,
    );
    // The mapped intent/establishment diagnosis ages tie the frozen chain.
    assert.equal(
      satisfiedArm.assessment.mappedCandidateIntentDiagnosis.observationAgeMs,
      9000,
      `${satisfiedArm.fixtureLabel}: the mapped intent diagnosis age ties the frozen re-run`,
    );
    assert.equal(
      satisfiedArm.assessment.mappedEstablishmentFreshnessDiagnosis.observationAgeMs,
      30000,
      `${satisfiedArm.fixtureLabel}: the mapped establishment diagnosis age ties the frozen re-run`,
    );
  }

  // Every wall arm refuses: one state literal, four causes, the standing
  // posture, and both ceilings all-false — no open branch exists.
  for (const arm of stageDP20RemoteMessageMatrix) {
    assert.ok(arm.fixtureLabel, "every wall arm carries a fixture label");
    const fresh = runWall(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `wall arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `wall arm ${arm.fixtureLabel}`);
    assert.equal(
      fresh.intakeState,
      "remote_message_not_intaked",
      `wall arm ${arm.fixtureLabel} must refuse — refusals are records of nothing`,
    );
    assert.ok(
      [
        "remote_message_claim_invalid",
        "remote_message_claimed_trusted_channel_class",
        "remote_message_channel_class_unknown_fail_closed",
        "remote_message_intake_refused_no_remote_agent_admission",
      ].includes(fresh.reason),
      `wall arm ${arm.fixtureLabel} reason not in the refusal ladder`,
    );
    assert.equal(
      fresh.remoteMessageIntakePosture,
      "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.contractVersion,
      "pond-remote-message-refusal-d-p20",
      arm.fixtureLabel,
    );
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assertLacksKeys(
      fresh,
      POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS,
      `wall arm ${arm.fixtureLabel}`,
    );
    for (const ceilingKey of WALL_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `wall ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }
});

// ---------------------------------------------------------------
// Block 2: identity ties — the policy's candidate legs cannot drift from
// the frozen D-P19 delivery arms; the policy record keeps the D-P20 dv
// and kind verbatim; the declared intake constant ties; the clock pins
// descend arithmetically with the lifecycle-order proof; the inventory is
// the D-P19 union plus four transport keys.
// ---------------------------------------------------------------
block("identityTies", () => {
  const frozenGateEntry = stageDP15ReadGateEntryActivated;
  assert.deepEqual(
    deepClone(admittedArm.readGateRecord),
    deepClone(frozenGateEntry.readGateRecord),
    "the policy gate record drifted from the frozen D-P15 read-gate entry",
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
      `the policy arm's D-P15 ${label} leg drifted from the frozen read-gate entry`,
    );
  }
  assert.equal(admittedArm.receiverHeldPrincipalRef, frozenGateEntry.receiverHeldPrincipalRef);
  assert.equal(stageDP20ReceiverRef, stageDP19ReceiverRef);
  assert.equal(stageDP20ReceiverRef, stageDP18ReceiverRef);
  assert.equal(stageDP20ReceiverRef, stageDP17ReceiverRef);
  assert.equal(stageDP20ReceiverRef, stageDP16ReceiverRef);
  assert.equal(stageDP20ReceiverRef, stageDP15ReceiverRef);
  assert.equal(stageDP20ReceiverMaximumAgeMs, stageDP19ReceiverMaximumAgeMs);
  assert.equal(stageDP20ReceiverMaximumAgeMs, stageDP18ReceiverMaximumAgeMs);
  assert.equal(stageDP20ReceiverMaximumAgeMs, stageDP17ReceiverMaximumAgeMs);
  assert.equal(stageDP20ReceiverMaximumAgeMs, stageDP16ReceiverMaximumAgeMs);
  assert.equal(stageDP20ReceiverMaximumAgeMs, stageDP15ReceiverMaximumAgeMs);
  assert.equal(stageDP20ReceiverMaximumAgeMs, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS);

  // The policy material is exactly the frozen D-P19 admitted delivery
  // arm's legs — the D-P18-arm subtraction: all 13 shared leg keys deep,
  // the D-P17 dv-preserved candidate verbatim. The community policy rides
  // the frozen D-P19 community arm the same way.
  const dp19AdmittedArm = byLabel(
    stageDP19ReceiptMatrix,
    "receipt_recorded_over_performed_dispatch",
  );
  const dp19CommunityArm = byLabel(
    stageDP19ReceiptMatrix,
    "receipt_recorded_over_community_slot_dispatch",
  );
  for (const key of LEG_KEYS) {
    assert.deepEqual(
      deepClone(admittedArm[key]),
      deepClone(dp19AdmittedArm[key]),
      `the policy arm's leg key ${key} drifted from the frozen D-P19 delivery arm`,
    );
    assert.deepEqual(
      deepClone(communityArm[key]),
      deepClone(dp19CommunityArm[key]),
      `the community policy's leg key ${key} drifted from the frozen D-P19 delivery arm`,
    );
  }
  assert.deepEqual(
    deepClone(transportInputOf(admittedArm).deliveryCandidate),
    deepClone(dp19AdmittedArm.deliveryCandidate),
    "the policy-riding candidate is the frozen D-P17 candidate verbatim",
  );
  assert.equal(
    admittedArm.deliveryCandidate.contractVersion,
    "pond-delivery-candidate-decision-d-p17",
    "the policy-riding candidate keeps the D-P17 dv verbatim",
  );
  assert.equal(admittedArm.deliveryCandidate.kind, "pond-delivery-candidate");
  assert.equal(admittedArm.deliveryCandidate.addressedAgentRef, stageDP20Agent0Ref);
  assert.equal(communityArm.deliveryCandidate.addressedAgentRef, stageDP20CommunitySlotRef);
  assert.equal(stageDP20CommunitySlotRef, stageDP0CommunityAgentSlotRef);
  assert.equal(stageDP20Agent0Ref, stageDP0Agent0Ref);
  assert.equal(stageDP20Agent0Ref, stageDP19Agent0Ref);
  assert.equal(stageDP20CommunitySlotRef, stageDP19CommunitySlotRef);

  // The policy record keeps this cut's dv and kind verbatim.
  assert.equal(admittedArm.transportPolicy.contractVersion, "pond-transport-policy-decision-d-p20");
  assert.equal(admittedArm.transportPolicy.kind, "pond-transport-policy");

  // The policy-event metadata keeps the policy its own freshness basis
  // and the not-consumed currentness posture.
  assert.equal(
    admittedArm.transportPolicy.transportPolicyMetadata.freshness_basis,
    "transport_policy_event_time_only",
  );
  assert.equal(
    admittedArm.transportPolicy.transportPolicyMetadata.currentness_posture,
    "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut",
  );

  // The declared intake-class constant ties — the one declared receiver
  // intake class, frozen.
  assert.deepEqual(deepClone(POND_STAGE_DP20_DECLARED_INTAKE_CHANNEL_CLASSES), [
    "conversation_context",
  ]);

  // The clock ties descend from the frozen pins — THE LIFECYCLE-ORDER
  // PROOF: the establishment, composition, delivery intent, TRANSPORT
  // POLICY, dispatch, receipt, and evaluation all sit in order inside
  // the session scope. The policy event sits between the delivery
  // intent and the dispatch — the delivery stage follows the
  // delivery-policy decision (messaging L171-185).
  assert.equal(stageDP20PolicyEvaluatedAtEpochMs, stageDP19EvaluatedAtEpochMs);
  assert.equal(stageDP16EstablishedAtEpochMs, 1800000060000);
  assert.equal(
    stageDP16EstablishedAtEpochMs < stageDP16ComposedAtEpochMs &&
      stageDP16ComposedAtEpochMs < stageDP17RecordedIntentAtEpochMs &&
      stageDP17RecordedIntentAtEpochMs < stageDP20PolicyEventAtEpochMs &&
      stageDP20PolicyEventAtEpochMs < stageDP18DispatchedAtEpochMs &&
      stageDP18DispatchedAtEpochMs < stageDP19ReceiptEventAtEpochMs &&
      stageDP19ReceiptEventAtEpochMs <= stageDP20PolicyEvaluatedAtEpochMs,
    true,
    "the composition, the intent, THE POLICY, the dispatch, and the receipt all sit inside the session scope, in order — the fixture arm ordering itself proves the lifecycle order",
  );
  assert.equal(
    stageDP20PolicyEventAtEpochMs,
    1800000084500,
    "the policy event sits between the intent (81 000) and the dispatch (85 000)",
  );
  // The policy event is NOT the newest event in the chain — the honest
  // deviation from the D-P18/D-P19 newest-event arithmetic.
  assert.ok(
    stageDP20PolicyEventAtEpochMs < stageDP18DispatchedAtEpochMs &&
      stageDP20PolicyEventAtEpochMs < stageDP19ReceiptEventAtEpochMs,
    "the policy event is not the newest event — staleness isolates by ladder order",
  );
  assert.equal(
    stageDP20FuturePolicyEventAtEpochMs,
    stageDP20PolicyEvaluatedAtEpochMs + 100,
    "the future policy event is pinned just past the lane evaluation instant",
  );
  assert.ok(
    stageDP20PreScopePolicyEventAtEpochMs > stageDP16ComposedAtEpochMs &&
      stageDP20PreScopePolicyEventAtEpochMs < stageDP17RecordedIntentAtEpochMs,
    "the pre-scope policy event postdates the composition but predates the delivery intent",
  );
  assert.ok(
    stageDP20PreEstablishmentPolicyEventAtEpochMs < stageDP16EstablishedAtEpochMs,
    "the pre-establishment policy event predates the establishment itself",
  );
  assert.ok(
    stageDP20RetractedPolicyEventAtEpochMs > stageDP18RetractedDispatchAtEpochMs &&
      stageDP20RetractedPolicyEventAtEpochMs < stageDP16RetractedAtEpochMs,
    "the retracted arm's policy event postdates its dispatch and predates the retraction event",
  );
  assert.equal(
    stageDP20RetractedPolicyEvaluatedAtEpochMs,
    stageDP18RetractedEvaluatedAtEpochMs,
    "the retracted policy instant is the D-P18 retracted instant",
  );
  assert.equal(
    stageDP20GateExpiryPolicyEvaluatedAtEpochMs,
    stageDP18GateExpiryEvaluatedAtEpochMs,
    "the gate-expiry policy instant is the D-P18 gate-expiry instant",
  );
  assert.equal(
    stageDP20IntentExpiryPolicyEvaluatedAtEpochMs,
    stageDP18IntentExpiryEvaluatedAtEpochMs,
    "the intent-expiry policy instant is the D-P18 intent-expiry instant",
  );

  // The policy record's own scope binding on the recorded arms:
  // recorded_at ≥ established_at AND ≥ composed_at AND ≥ intent_at.
  assert.ok(
    stageDP20PolicyEventAtEpochMs >= stageDP16EstablishedAtEpochMs &&
      stageDP20PolicyEventAtEpochMs >= stageDP16ComposedAtEpochMs &&
      stageDP20PolicyEventAtEpochMs >= stageDP17RecordedIntentAtEpochMs,
    "the policy event postdates the establishment, the composition, and the intent",
  );

  // The forbidden-key inventory: exactly the frozen D-P19 union plus the
  // four transport keys this lane exists to refuse — SHARED by both
  // contracts (contract 2 imports it; one widening per lane).
  assert.equal(
    POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS.length,
    POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS.length + 4,
    "the D-P20 inventory is exactly the D-P19 union plus four keys",
  );
  assert.deepEqual(
    POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS.slice(0, POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS.length),
    [...POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS],
    "the D-P20 inventory keeps the frozen D-P19 union verbatim",
  );
  assert.deepEqual(
    POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS.slice(-4),
    ["transportEndpoint", "a2aAgentCard", "mcpRuntimeSchema", "remoteGrant"],
    "the four transport keys this lane exists to refuse close the inventory",
  );

  // The recorded policy record's shape is pinned.
  assert.deepEqual(
    Object.keys(admittedArm.transportPolicy).sort(),
    [...POLICY_RECORD_KEYS].sort(),
  );
});

// ---------------------------------------------------------------
// Block 3: recompute-agreement negatives — every refused policy basis
// fails on its own basis check alone with every leg echo green; ALL
// EIGHT external policies probed fresh refuse at the dedicated cause
// with the selection echoed; the future and pre-scope and
// pre-establishment events refuse at theirs; the invalid records land on
// the invalid cause; the reassessment breakage lands on the re-run's own
// cause with the three-depth mapped echo honest; and the wall arms land
// on their own causes class by class.
// ---------------------------------------------------------------
block("recomputeAgreementNegatives", () => {
  const refusedBasisArms = [
    "transport_policy_refused_basis_inferred_from_prepared_candidate",
    "transport_policy_refused_basis_inferred_from_receipt",
    "transport_policy_refused_basis_asserted_by_model_completion",
    "transport_policy_refused_basis_inferred_from_channel_visibility",
    "transport_policy_refused_basis_replayed_from_prior_policy_decision",
  ];
  for (const label of refusedBasisArms) {
    const arm = byLabel(stageDP20TransportPolicyMatrix, label);
    const fresh = runPolicy(arm);
    assert.equal(fresh.transportPolicyState, "transport_policy_not_recorded", label);
    assert.equal(fresh.reason, "receiver_transport_policy_proof_incomplete", label);
    assert.deepEqual(
      fresh.unsatisfiedChecks,
      ["policy_basis_receiver_recorded_not_inferred"],
      label,
    );
    assert.equal(fresh.satisfiedChecks.length, 8, label);
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
    assert.equal(
      fresh.transportPolicyEventFreshnessDiagnosis.state,
      "fresh",
      label,
    );
  }

  // ALL EIGHT external policies probed fresh — the L220 decomposition is
  // behavioral: every external selection refuses at the dedicated cause
  // with the selected literal echoed, nothing else changed.
  const validAdmittedInput = transportInputOf(admittedArm);
  for (const external of EXTERNAL_TRANSPORT_POLICIES) {
    const fresh = runFreshPolicy({
      ...validAdmittedInput,
      transportPolicy: {
        ...deepClone(admittedArm.transportPolicy),
        transportPolicy: external,
      },
    });
    assert.equal(fresh.transportPolicyState, "transport_policy_not_recorded", external);
    assert.equal(fresh.reason, "transport_policy_not_performable_this_cut", external);
    assert.equal(fresh.recordedTransportPolicy, external, `${external}: the selection is echoed`);
    assert.equal(fresh.satisfiedChecks.length, 0, external);
    assert.equal(fresh.unsatisfiedChecks.length, 9, external);
    // The reassessment stays green — the refusal is the policy's alone.
    assert.equal(
      fresh.mappedCandidateState,
      "delivery_candidate_prepared_session_scoped_no_dispatch",
      external,
    );
    assert.equal(
      fresh.transportPolicyEventFreshnessDiagnosis.observationAgeMs,
      5500,
      external,
    );
  }

  // A selection outside the ten-literal vocabulary is not a policy at
  // all: the record is invalid, nothing is echoed, and the dedicated
  // external cause is never reached.
  const outOfVocabulary = runFreshPolicy({
    ...validAdmittedInput,
    transportPolicy: {
      ...deepClone(admittedArm.transportPolicy),
      transportPolicy: "external_transport_policy_pigeon_post",
    },
  });
  assert.equal(outOfVocabulary.reason, "transport_policy_record_invalid");
  assert.equal(outOfVocabulary.transportPolicyDecisionVersion, "invalid");
  assert.equal(outOfVocabulary.recordedTransportPolicy, null);

  // A policy basis outside the six-literal basis vocabulary is likewise
  // invalid — refusal vocabulary membership is at the declarative check,
  // not the shape.
  const badBasis = runFreshPolicy({
    ...validAdmittedInput,
    transportPolicy: {
      ...deepClone(admittedArm.transportPolicy),
      policyBasis: "assumed_because_candidate_happened",
    },
  });
  assert.equal(badBasis.reason, "transport_policy_record_invalid");
  assert.equal(badBasis.recordedTransportPolicy, null);

  // Bad metadata shape — the fallback diagnosis is honest and nothing is
  // echoed for a record that never became a record.
  for (const brokenMetadata of [null, 42, "instant", {}, { recorded_at_epoch_ms: 1 }]) {
    const brokenRun = runFreshPolicy({
      ...validAdmittedInput,
      transportPolicy: {
        ...deepClone(admittedArm.transportPolicy),
        transportPolicyMetadata: brokenMetadata,
      },
    });
    assert.equal(brokenRun.reason, "transport_policy_record_invalid");
    assert.equal(brokenRun.transportPolicyEventFreshnessDiagnosis.reason, "observation_metadata_missing_or_invalid");
    assert.equal(brokenRun.recordedTransportPolicy, null);
    assert.equal(brokenRun.satisfiedChecks.length, 0);
  }

  // The future policy event refuses on its own diagnosis while the
  // reassessment verdict stays green.
  const futureArm = byLabel(stageDP20TransportPolicyMatrix, "transport_policy_event_in_future");
  assert.equal(futureArm.assessment.reason, "transport_policy_event_not_session_current");
  assert.equal(futureArm.assessment.transportPolicyEventFreshnessDiagnosis.state, "unknown");
  assert.equal(
    futureArm.assessment.transportPolicyEventFreshnessDiagnosis.reason,
    "observation_time_in_future",
  );
  assert.equal(
    futureArm.assessment.mappedCandidateState,
    "delivery_candidate_prepared_session_scoped_no_dispatch",
  );

  // The pre-scope and pre-establishment arms refuse at the scope cause
  // with the event's own diagnosis honestly fresh.
  const preScopeArm = byLabel(
    stageDP20TransportPolicyMatrix,
    "transport_policy_event_before_delivery_intent",
  );
  assert.equal(preScopeArm.assessment.reason, "transport_policy_event_not_of_the_current_session_scope");
  assert.equal(preScopeArm.assessment.transportPolicyEventFreshnessDiagnosis.state, "fresh");
  assert.equal(preScopeArm.assessment.satisfiedChecks.length, 0);
  const preEstablishmentArm = byLabel(
    stageDP20TransportPolicyMatrix,
    "transport_policy_event_before_session_establishment",
  );
  assert.equal(
    preEstablishmentArm.assessment.reason,
    "transport_policy_event_not_of_the_current_session_scope",
  );
  assert.equal(preEstablishmentArm.assessment.transportPolicyEventFreshnessDiagnosis.state, "fresh");

  // Shape refusals: missing and forbidden policy keys refuse at the
  // invalid cause with the fallback diagnosis honest and the version
  // honest (invalid), and nothing echoed.
  for (const label of ["transport_policy_record_missing_key", "transport_policy_record_extra_forbidden_key"]) {
    const fresh = runPolicy(byLabel(stageDP20TransportPolicyMatrix, label));
    assert.equal(fresh.transportPolicyState, "transport_policy_not_recorded", label);
    assert.equal(fresh.reason, "transport_policy_record_invalid", label);
    assert.equal(fresh.transportPolicyDecisionVersion, "invalid", label);
    assert.equal(fresh.satisfiedChecks.length, 0, label);
    assert.equal(fresh.recordedTransportPolicy, null, label);
    assert.equal(
      fresh.transportPolicyEventFreshnessDiagnosis.reason,
      "observation_metadata_missing_or_invalid",
      label,
    );
    assert.ok(fresh.mappedCandidateState !== null, label);
  }

  // The reassessment breakage lands on the re-run's own cause with the
  // three-depth mapped echo honest: the retracted, gate-expiry, and
  // intent-expiry confinements each refuse the candidate re-run first,
  // and the policy-event diagnosis stays honestly fresh (the ladder-order
  // honesty: the reassessment outranks the policy event's own freshness).
  const retractedArm = byLabel(
    stageDP20TransportPolicyMatrix,
    "transport_policy_confined_after_retraction",
  );
  const retractedRun = runPolicy(retractedArm);
  assert.equal(retractedRun.reason, "delivery_candidate_not_currently_prepared");
  assert.equal(
    retractedRun.mappedCandidateReassessmentReason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
    "the retracted confinement maps the D-P17 re-run's own cause",
  );
  assert.equal(
    retractedRun.mappedEstablishmentReason,
    "receiver_retraction_on_record",
    "the retracted confinement maps the establishment-leg cause — retraction confines the session",
  );
  assert.equal(
    retractedRun.mappedReadGateReason,
    "live_session_not_established_refused_or_not_fresh",
    "the third-depth refusal stays readable through the candidate echo",
  );
  assert.equal(retractedRun.satisfiedChecks.length, 0);
  assert.equal(
    retractedRun.transportPolicyEventFreshnessDiagnosis.observationAgeMs,
    16500,
    "the retracted arm's policy event keeps its own honest freshness — not deleted, confined",
  );
  const gateExpiryArm = byLabel(
    stageDP20TransportPolicyMatrix,
    "transport_policy_reassessment_refused_at_gate_expiry",
  );
  const gateExpiryRun = runPolicy(gateExpiryArm);
  assert.equal(gateExpiryRun.reason, "delivery_candidate_not_currently_prepared");
  assert.equal(
    gateExpiryRun.transportPolicyEventFreshnessDiagnosis.observationAgeMs,
    35501,
    "the gate-expiry arm's policy event is 35 501ms fresh — honestly inside the window while the reassessment refuses",
  );
  const intentExpiryArm = byLabel(
    stageDP20TransportPolicyMatrix,
    "transport_policy_reassessment_refused_at_intent_expiry",
  );
  const intentExpiryRun = runPolicy(intentExpiryArm);
  assert.equal(intentExpiryRun.reason, "delivery_candidate_not_currently_prepared");
  assert.equal(
    intentExpiryRun.mappedCandidateReassessmentReason,
    "delivery_intent_not_session_current",
    "the intent-expiry arm maps the D-P17 re-run's own cause",
  );
  assert.equal(
    intentExpiryRun.transportPolicyEventFreshnessDiagnosis.observationAgeMs,
    56501,
    "the intent-expiry arm's policy event is 56 501ms fresh — honestly inside the window while the reassessment refuses",
  );
  // The delivered-record re-stamp breaks at the third depth: the D-P16
  // re-run's own refusal surfaces through the candidate echo.
  const reStampArm = byLabel(
    stageDP20TransportPolicyMatrix,
    "transport_policy_reassessment_refused_delivered_record_restamped",
  );
  const reStampRun = runPolicy(reStampArm);
  assert.equal(reStampRun.reason, "delivery_candidate_not_currently_prepared");
  assert.equal(
    reStampRun.mappedCandidateReassessmentReason,
    "delivered_record_not_currently_admitted",
    "the re-stamp surfaces one depth down, through the candidate echo",
  );
  assert.equal(
    reStampRun.mappedDeliveredRecordAdmissionReason,
    "conversation_record_not_session_current",
    "the delivered-record refusal surfaces at the second depth verbatim",
  );

  // Gate-leg breakage: a swapped receiver ref breaks the reassessment at
  // the gate cause — the D-P17 reason maps verbatim, never re-declared.
  const swappedRun = assessPondTransportPolicyDecision({
    ...transportInputOf(admittedArm),
    receiverHeldPrincipalRef: "principal:fixture:stage-d-p14:not-the-receiver",
  });
  assert.equal(swappedRun.transportPolicyState, "transport_policy_not_recorded");
  assert.equal(swappedRun.reason, "delivery_candidate_not_currently_prepared");
  assert.equal(
    swappedRun.mappedReadGateReason,
    "live_session_not_established_refused_or_not_fresh",
    "the swapped receiver's third-depth refusal stays readable — the gate leg's own cause, mapped verbatim",
  );

  // The wall class by class: the eight trusted classes refuse at the
  // dedicated false-authority cause (fresh probes — the trusted-8
  // tie is behavioral), the unknown class fail-closes, the honestly
  // self-declared untrusted class reaches the terminal refusal with the
  // two honest satisfactions readable, and the malformed shapes land at
  // the claim-invalid cause with the version honest (invalid).
  for (const trustedClass of TRUSTED_CHANNEL_CLASSES) {
    const fresh = assessPondRemoteMessageIntakeRefusal({
      remoteMessageClaim: {
        claimedTransport: "a2a",
        claimedChannelClass: trustedClass,
        senderEvidenceRef: "evidence:probe",
      },
    });
    assert.equal(fresh.intakeState, "remote_message_not_intaked", trustedClass);
    assert.equal(fresh.reason, "remote_message_claimed_trusted_channel_class", trustedClass);
    // Even the declared intake class refuses wholesale when a REMOTE
    // claim self-declares it: the check never opens (satisfied stays
    // empty, all four refuse at the false-authority cause).
    assert.equal(fresh.satisfiedChecks.length, 0, trustedClass);
    assert.deepEqual(
      fresh.unsatisfiedChecks,
      [
        "remote_message_claim_well_formed",
        "claimed_channel_class_of_the_declared_message_vocabulary",
        "claimed_channel_class_declared_for_receiver_intake",
        "remote_message_sender_locally_admitted",
      ],
      trustedClass,
    );
  }

  const unknownClass = byLabel(
    stageDP20RemoteMessageMatrix,
    "remote_message_refused_unknown_channel_class_fail_closed",
  );
  assert.equal(unknownClass.assessment.reason, "remote_message_channel_class_unknown_fail_closed");

  // The terminal refusal: an honestly self-declared untrusted claim
  // still refuses — two checks pass (well-formed, in vocabulary), the
  // declared-intake and sender-admission checks never open.
  const terminalArm = byLabel(
    stageDP20RemoteMessageMatrix,
    "remote_message_refused_honest_untrusted_self_declaration",
  );
  assert.deepEqual(terminalArm.assessment.satisfiedChecks, [
    "remote_message_claim_well_formed",
    "claimed_channel_class_of_the_declared_message_vocabulary",
  ]);
  assert.deepEqual(terminalArm.assessment.unsatisfiedChecks, [
    "claimed_channel_class_declared_for_receiver_intake",
    "remote_message_sender_locally_admitted",
  ]);
  for (const label of [
    "remote_message_refused_missing_claimed_transport",
    "remote_message_refused_extra_forbidden_key",
    "remote_message_refused_non_object_claim",
    "remote_message_refused_empty_sender_evidence_ref",
  ]) {
    const fresh = runWall(byLabel(stageDP20RemoteMessageMatrix, label));
    assert.equal(fresh.reason, "remote_message_claim_invalid", label);
    assert.equal(fresh.remoteMessageRefusalVersion, "invalid", label);
    assert.equal(fresh.satisfiedChecks.length, 0, label);
    assert.deepEqual(
      fresh.unsatisfiedChecks,
      [
        "remote_message_claim_well_formed",
        "claimed_channel_class_of_the_declared_message_vocabulary",
        "claimed_channel_class_declared_for_receiver_intake",
        "remote_message_sender_locally_admitted",
      ],
      label,
    );
  }

  // Tampered claim shape probed fresh: a non-string field refuses at the
  // same cause.
  const tamperedShape = assessPondRemoteMessageIntakeRefusal({
    remoteMessageClaim: {
      claimedTransport: ["a2a"],
      claimedChannelClass: "untrusted_external_input",
      senderEvidenceRef: "evidence:probe",
    },
  });
  assert.equal(tamperedShape.reason, "remote_message_claim_invalid");
});

// ---------------------------------------------------------------
// Block 4: lifecycle — the ladder-order freshness honesty (the policy
// event is NOT the newest event), the reassessment outranking the policy
// event while the event's own diagnosis never lies, and the
// post-retraction CONTRAST: the policy confines honestly after
// retraction while the D-P19 receipt is frozen-at-issuance historical
// evidence.
// ---------------------------------------------------------------
block("lifecycle", () => {
  // The base-arm age arithmetic is exact: eval 90 000 − event 84 500.
  assert.equal(
    admittedArm.assessment.transportPolicyEventFreshnessDiagnosis.observationAgeMs,
    stageDP20PolicyEvaluatedAtEpochMs - stageDP20PolicyEventAtEpochMs,
  );

  // Direction one (a future policy event): the policy's OWN freshness
  // cause fires on the arm — while the leg echoes stay green, because
  // the re-run uses the fixture's own evaluation instant.
  const futureRun = runPolicy(
    byLabel(stageDP20TransportPolicyMatrix, "transport_policy_event_in_future"),
  );
  assert.equal(futureRun.reason, "transport_policy_event_not_session_current");
  assert.equal(
    futureRun.mappedCandidateState,
    "delivery_candidate_prepared_session_scoped_no_dispatch",
    "the leg echoes stay green while the policy event is in the future",
  );

  // Direction two (a stale policy event): staleness isolates by ladder
  // order, not by newest-event arithmetic. A far-future evaluation makes
  // the policy event stale too (65 501ms > 60 000) — but the legs are
  // STALER, so the reassessment refuses FIRST and its own cause lands,
  // while the policy's own diagnosis still carries the honest stale state
  // verbatim. No newest-event arithmetic ever decides here.
  const staleRun = assessPondTransportPolicyDecision({
    ...transportInputOf(admittedArm),
    receiverEvaluatedAtEpochMs: 1800000150000,
  });
  assert.equal(staleRun.reason, "delivery_candidate_not_currently_prepared");
  assert.equal(
    staleRun.mappedEstablishmentReason,
    "session_establishment_not_session_current",
    "the reassessment outranks the policy event — the legs refuse first",
  );
  assert.equal(
    staleRun.transportPolicyEventFreshnessDiagnosis.state,
    "stale",
    "the policy event's own diagnosis never lies even when the ladder never reaches it",
  );
  assert.equal(
    staleRun.transportPolicyEventFreshnessDiagnosis.observationAgeMs,
    65500,
  );

  // The expiry arms: the policy event stays honestly fresh while the
  // reassessment refuses — the ages are exact arithmetic from the frozen
  // pins.
  assert.equal(
    stageDP20GateExpiryPolicyEvaluatedAtEpochMs - stageDP20PolicyEventAtEpochMs,
    35501,
  );
  assert.equal(
    stageDP20IntentExpiryPolicyEvaluatedAtEpochMs - stageDP20PolicyEventAtEpochMs,
    56501,
  );
  assert.equal(
    stageDP20RetractedPolicyEvaluatedAtEpochMs - stageDP20RetractedPolicyEventAtEpochMs,
    16500,
  );

  // THE POST-RETRACTION CONTRAST — recorded deviation (5): a policy
  // re-assesses after retraction and confines honestly, deliberately
  // opposite to the D-P19 receipt's frozen-at-issuance presentation.
  // The two posture literals pin the split.
  assert.equal(
    byLabel(stageDP20TransportPolicyMatrix, "transport_policy_confined_after_retraction").assessment.reason,
    "delivery_candidate_not_currently_prepared",
    "the policy confines honestly — the reassessment's own cause, not a frozen survival",
  );
  assert.equal(
    runPolicy(byLabel(stageDP20TransportPolicyMatrix, "transport_policy_confined_after_retraction"))
      .transportPolicyRetentionPosture,
    "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    "the policy's retention posture names the reassessment honesty verbatim",
  );
  const dp19AdmittedArm = byLabel(
    stageDP19ReceiptMatrix,
    "receipt_recorded_over_performed_dispatch",
  );
  assert.equal(
    dp19AdmittedArm.deliveryReceipt.receiptRetentionPosture,
    "receipt_is_module_state_process_lifetime_no_indefinite_retention_delivery_does_not_grant_retention",
    "the D-P19 receipt's retention posture never claims the reassessment honesty",
  );
  assert.equal(
    dp19AdmittedArm.deliveryReceipt.deliveryReceiptMetadata.currentness_posture,
    "historical_evidence_at_issuance_not_current_truth",
    "the D-P19 receipt is frozen at issuance; the D-P20 policy is not — the postures split deliberately",
  );
  assert.notEqual(
    dp19AdmittedArm.deliveryReceipt.receiptRetentionPosture,
    "transport_policy_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
  );

  // The community policy records through the same ceremony: no endpoint,
  // no queue, no runtime, no channel authority anywhere in its record.
  const communityFresh = runPolicy(communityArm);
  assert.equal(
    communityFresh.transportPolicyState,
    "transport_policy_recorded_session_scoped_no_external_transport",
  );
  assertDeepFrozen(communityArm.transportPolicy, "community policy");
  assertLacksKeys(communityArm.transportPolicy, POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS, "community policy");
  assert.equal(
    communityArm.transportPolicy.policyRuntimePosture,
    "no_transport_runtime_endpoint_or_queue_established",
  );
  assert.equal(
    communityArm.transportPolicy.policyChannelAuthorityPosture,
    "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",
  );

  // The recorded policy is governance-only — evidence of nothing, a
  // grant of nothing, a receipt of nothing: the postures ride the record
  // verbatim on both recorded arms, and the selection is the only
  // performable policy.
  for (const arm of [admittedArm, communityArm]) {
    assert.equal(arm.transportPolicy.policyEvidencePosture, "policy_is_not_evidence_and_claims_no_receipt");
    assert.equal(arm.transportPolicy.policyAcceptancePosture, "policy_establishes_no_acceptance_agreement_or_reply");
    assert.equal(arm.transportPolicy.policyAuthorityPosture, "policy_grants_no_authority_membership_or_admission");
    assert.equal(arm.transportPolicy.authority, "none");
    assert.deepEqual(deepClone(POND_STAGE_DP20_PERFORMABLE_TRANSPORT_POLICIES), [
      "in_process_local_conversation_context_delivery_only",
    ]);
    assert.equal(arm.transportPolicy.transportPolicy, "in_process_local_conversation_context_delivery_only");
    assert.equal(
      arm.transportPolicy.transportPolicyMetadata.recorded_at_epoch_ms,
      stageDP20PolicyEventAtEpochMs,
      "the policy event time is the pinned instant on both recorded arms",
    );
  }
});

// ---------------------------------------------------------------
// Block 5: fail-closed — garbage inputs refuse without throwing on BOTH
// contracts, with honest echoes and honest fallbacks, and nested
// forbidden keys refuse deep.
// ---------------------------------------------------------------
block("failClosed", () => {
  const validPolicy = deepClone(admittedArm.transportPolicy);
  const validLegs = transportInputOf(admittedArm);
  const garbageInputs = [
    null,
    undefined,
    0,
    "policy?",
    [],
    {},
    { transportPolicy: null },
    { transportPolicy: "not a record" },
    { transportPolicy: [] },
    { transportPolicy: validPolicy },
    { ...validLegs, deliveryCandidate: null, transportPolicy: validPolicy },
    { ...validLegs, transportPolicy: { ...validPolicy, transportPolicyMetadata: null } },
    { ...validLegs, transportPolicy: { ...validPolicy, transportPolicyMetadata: 42 } },
    {
      ...validLegs,
      transportPolicy: { ...validPolicy, policyBasis: "inferred_from_vibes" },
    },
    {
      ...validLegs,
      transportPolicy: { ...validPolicy, transportPolicy: "external_transport_policy_a2a" },
    },
    {
      ...validLegs,
      transportPolicy: { ...validPolicy, authority: "receiver" },
    },
    {
      ...validLegs,
      transportPolicy: {
        ...validPolicy,
        policyRuntimePosture: "endpoint_established_looking_forward",
      },
    },
  ];
  for (const input of garbageInputs) {
    let assessment = null;
    assert.doesNotThrow(() => {
      assessment = assessPondTransportPolicyDecision(input);
    });
    assert.equal(assessment.transportPolicyState, "transport_policy_not_recorded", "garbage refuses");
    assert.ok(assessment.mappedCandidateState !== null, "echoes always carried");
    assert.ok(assessment.mappedEstablishmentState !== null, "echoes always carried");
    assert.ok(assessment.mappedReadGateState !== null, "echoes always carried");
    assert.ok(assessment.mappedDeliveredRecordAdmissionState !== null, "echoes always carried");
    assert.ok(assessment.mappedCandidateIntentDiagnosis !== null, "diagnosis always carried");
    assert.ok(assessment.transportPolicyEventFreshnessDiagnosis !== null, "diagnosis always carried");
    assertLacksKeys(assessment, POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS, "garbage assessment");
    for (const ceilingKey of POLICY_CEILING_KEYS) {
      assert.equal(assessment[ceilingKey], false, `ceiling ${ceilingKey} on garbage input`);
    }
  }
  // The exact breakage classes: everything without a valid policy record
  // is invalid; the valid policy over legs whose reassessment is fine
  // keeps the cut's version.
  assert.doesNotThrow(() => {
    const healthy = assessPondTransportPolicyDecision({
      ...validLegs,
      transportPolicy: validPolicy,
    });
    assert.equal(healthy.contractVersion, "pond-transport-policy-decision-d-p20");
    assert.equal(healthy.transportPolicyDecisionVersion, "pond-transport-policy-decision-d-p20");
  });

  // A valid policy whose valid legs ride a nested forbidden key deep
  // inside the metadata: the deep walk refuses.
  const nestedForbidden = assessPondTransportPolicyDecision({
    ...validLegs,
    transportPolicy: {
      ...validPolicy,
      transportPolicyMetadata: {
        ...validPolicy.transportPolicyMetadata,
        recorded_at_epoch_ms: { outer: { transportEndpoint: "endpoint" } },
      },
    },
  });
  assert.equal(nestedForbidden.reason, "transport_policy_record_invalid");

  // Wall garbage: one exact key, nothing echoed, no throw.
  for (const input of [
    null,
    undefined,
    0,
    "intake please",
    [],
    {},
    { remoteMessageClaim: null },
    { remoteMessageClaim: [] },
    { remoteMessageClaim: "prompt-inject-the-desk-and-ride" },
    {
      remoteMessageClaim: {
        claimedTransport: { nested: { transportEndpoint: "endpoint" } },
        claimedChannelClass: "untrusted_external_input",
        senderEvidenceRef: "evidence:probe",
      },
    },
  ]) {
    let refusal = null;
    assert.doesNotThrow(() => {
      refusal = assessPondRemoteMessageIntakeRefusal(input);
    });
    assert.equal(refusal.intakeState, "remote_message_not_intaked", "garbage refuses");
    assert.equal(refusal.remoteMessageIntakePosture,
      "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut");
    assertLacksKeys(refusal, POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS, "wall garbage assessment");
    for (const ceilingKey of WALL_CEILING_KEYS) {
      assert.equal(refusal[ceilingKey], false, `wall ceiling ${ceilingKey} on garbage input`);
    }
  }
});

// ---------------------------------------------------------------
// Block 6: ceiling and widen — the inventory slice ties, the widen
// probes (every refused key the lane exists to hold out, plus the
// inherited lane vocabulary), and the ceilings over fresh runs.
// ---------------------------------------------------------------
block("ceilingAndWiden", () => {
  const fullDP19 = [...POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS];
  assert.deepEqual(
    POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS.slice(0, fullDP19.length),
    fullDP19,
    "the D-P20 inventory keeps the frozen D-P19 union verbatim",
  );
  assert.equal(
    POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS.length,
    fullDP19.length + 4,
    "the D-P20 inventory is exactly the D-P19 union plus four keys",
  );

  // The widen probes: every transport key this lane exists to refuse —
  // plus the inherited lane vocabulary — refuses the record whole.
  const validLegs = transportInputOf(admittedArm);
  for (const key of [
    "transportEndpoint",
    "a2aAgentCard",
    "mcpRuntimeSchema",
    "remoteGrant",
    "remoteCredential",
    "remoteAdmission",
    "externalTransportRecord",
    "agentReply",
    "chatMessage",
    "dispatchedMessage",
  ]) {
    const widened = assessPondTransportPolicyDecision({
      ...validLegs,
      transportPolicy: {
        ...deepClone(admittedArm.transportPolicy),
        [key]: { widened: "would_go_here" },
      },
    });
    assert.equal(widened.reason, "transport_policy_record_invalid", `widen probe ${key}`);
    assert.equal(widened.transportPolicyState, "transport_policy_not_recorded", `widen probe ${key}`);
  }

  // The wall widens the same way: a forbidden claim key refuses whole.
  for (const key of ["transportEndpoint", "remoteGrant", "chatMessage"]) {
    const widenedWall = assessPondRemoteMessageIntakeRefusal({
      remoteMessageClaim: {
        claimedTransport: "a2a",
        claimedChannelClass: "untrusted_external_input",
        senderEvidenceRef: "evidence:probe",
        [key]: { widened: "would_go_here" },
      },
    });
    assert.equal(widenedWall.reason, "remote_message_claim_invalid", `wall widen probe ${key}`);
    assert.equal(widenedWall.satisfiedChecks.length, 0, `wall widen probe ${key}`);
  }

  // The does-not-establish family is all-false on fresh runs of the
  // recorded arms, and the retention posture rides the assessment
  // verbatim.
  for (const arm of [admittedArm, communityArm]) {
    const fresh = runPolicy(arm);
    for (const ceilingKey of POLICY_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }
});

// ---------------------------------------------------------------
// Block 7: destination tie — no policy destination field exists (the
// destination flows only through the certified candidate's own addressed
// agent); and the wall echoes NOTHING about any claim — no claimed-*
// field exists on the assessment shape and no claim value appears in
// any serialized assessment.
// ---------------------------------------------------------------
block("destinationTie", () => {
  assert.deepEqual(
    Object.keys(admittedArm.transportPolicy).sort(),
    [...POLICY_RECORD_KEYS].sort(),
    "the policy record has exactly the pinned keys — no separate destination field",
  );
  assert.deepEqual(
    Object.keys(transportInputOf(admittedArm)).sort(),
    [...TRANSPORT_INPUT_KEYS].sort(),
    "the policy input has exactly the 15 pinned keys — no destination input",
  );
  const contractText = readModule("src/contracts/pond-transport-policy-decision.ts");
  assert.ok(
    !contractText.includes("transportDestination") &&
      !contractText.includes("transport_destination") &&
      !contractText.includes("deliveryDestination"),
    "the contract never declares a policy-destination key",
  );

  // The addressed agent stays inside the candidate: the assessment never
  // echoes it.
  const fresh = runPolicy(admittedArm);
  assert.ok(
    !Object.keys(fresh).includes("addressedAgentRef") &&
      !JSON.stringify(fresh).includes(stageDP20Agent0Ref),
    "the assessment never echoes the certified candidate's addressed agent",
  );

  // The wall assessment carries zero claimed-* fields and echoes no
  // claim value: the assessment shape is pinned by walk, and the
  // serialization of a refusal over a distinguishing claim never
  // contains the claim's transport or sender evidence.
  const wallFresh = runWall(byLabel(stageDP20RemoteMessageMatrix, "remote_message_refused_a2a_transport_claim_not_echoed"));
  const claimedAssessmentKeys = Object.keys(wallFresh).filter((key) => key.startsWith("claimed"));
  assert.deepEqual(
    claimedAssessmentKeys,
    [],
    "the wall assessment carries no claimed-* field — transport is not agent (admission L78)",
  );
  assert.equal(wallFresh.senderIdentityEchoed, false);
  assert.equal(wallFresh.claimContentEchoed, false);
  assert.equal(wallFresh.claimContentStored, false);
  const wallArm = byLabel(stageDP20RemoteMessageMatrix, "remote_message_refused_a2a_transport_claim_not_echoed");
  const serialized = JSON.stringify(runWall(wallArm));
  assert.ok(
    !serialized.includes(wallArm.remoteMessageClaim.claimedTransport),
    "the refusal never echoes the claimed transport",
  );
  assert.ok(
    !serialized.includes(wallArm.remoteMessageClaim.senderEvidenceRef),
    "the refusal never echoes the sender evidence ref",
  );
});

// ---------------------------------------------------------------
// Block 8: hygiene — DOM-shaped needles and network constants stay out
// of the cut's contracts and fixture; the fixture stays value-import-
// free; the banned frozen names never re-declare; the env-prefix family
// stays out of every file of this cut; and the hand-written transport
// module stays walked.
// ---------------------------------------------------------------
block("hygiene", () => {
  const contractPaths = [
    "src/contracts/pond-transport-policy-decision.ts",
    "src/contracts/pond-remote-message-refusal.ts",
    "src/fixtures/stage-d-p20-pond-transport.ts",
  ];
  const texts = contractPaths.map((path) => readModule(path));

  // (a) DOM-shaped needles stay out of the cut's contract and fixture
  // files.
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
      assert.ok(!texts[index].includes(needle), `${path} carries the DOM needle ${needle}`);
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
  const fixtureText = texts[2];
  for (const line of fixtureText.split("\n")) {
    if (line.startsWith("import")) {
      assert.ok(
        line.startsWith("import type {"),
        `the fixture carries a non-type import: ${line.trim()}`,
      );
    }
  }

  // (d) the banned-name source walk over both contract files:
  // quoted-index reads of frozen fields and import lines are the tie/leg
  // plumbing (the established exemption) and are stripped before
  // matching.
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
  for (const contractPath of contractPaths.slice(0, 2)) {
    const normalized = stripImports(stripQuotedIndexReads(readModule(contractPath)));
    for (const needle of nameNeedles) {
      assert.ok(
        !normalized.includes(needle),
        `${contractPath} carries frozen name ${needle} outside the leg plumbing`,
      );
    }
  }

  // (e) the inventory union stays intact: the D-P20 inventory is the
  // imported D-P19 base, and contract 2 imports contract 1's union by
  // value — one widening per lane. The composed walk is exactly one key
  // longer per addition.
  assert.ok(
    texts[0].includes("POND_STAGE_DP19_FORBIDDEN_RECEIPT_KEYS"),
    "the composed inventory must import the frozen D-P19 base",
  );
  assert.ok(
    texts[1].includes("POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS"),
    "the wall shares the same inventory import",
  );
  for (const key of ["transportEndpoint", "a2aAgentCard", "mcpRuntimeSchema", "remoteGrant"]) {
    assert.ok(texts[0].includes(`"${key}"`), `forbidden key ${key} missing from the contract inventory`);
  }
  assert.ok(
    texts[1].includes('from "./pond-transport-policy-decision.ts"'),
    "contract 2 imports contract 1's inventory via the .ts specifier",
  );

  // (f) the env-needle family stays out of every file of this cut: no
  // secret-bearing ceremony exists, so even the shared live-session env
  // prefix never appears. The ban matches the shared prefix — never the
  // full env name.
  for (const path of [
    "src/contracts/pond-transport-policy-decision.ts",
    "src/contracts/pond-remote-message-refusal.ts",
    "src/fixtures/stage-d-p20-pond-transport.ts",
    "docs/stage-d-p20-pond-message-transport-lane.md",
    "ui/pond-transport.js",
  ]) {
    const fileText = readModule(path);
    assert.ok(
      !fileText.includes("TOADAID_LIVE_"),
      `${path} carries a live-session env-prefixed name`,
    );
  }

  // (g) the hand-written transport module stays walked: no frozen
  // contract names, no src import, no banned transport/store needle.
  const moduleText = readModule("ui/pond-transport.js");
  assert.ok(
    !moduleText.includes("pond-transport-policy-decision") ||
      moduleText.includes("generated/pond-stage-d-live-session-transport.js"),
    "the module reaches contract code only through the generated bundle",
  );
  for (const frozenName of [
    "pond-local-principal-id-issuance",
    "pond-erc8004-identity-mapping",
    "pond-principal-identity-readiness-composition",
    "pond-private-read-activation",
    "pond-private-read-admission",
    "pond-knowledge-forge",
  ]) {
    assert.ok(
      !moduleText.includes(frozenName),
      "the hand-written transport module carries frozen vocabulary",
    );
  }
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
  assert.match(
    moduleText,
    /from "\.\/generated\/pond-stage-d-live-session-transport\.js"/,
    "the transport module imports through the committed generated artifact",
  );
  assert.match(
    moduleText,
    /if \(typeof document !== "undefined"\) \{\s*renderPondTransport\(document\);\s*\}/,
    "the transport module self-mounts like its sibling lane modules",
  );

  // (h) package and CI wiring assert step by step.
  const packageJson = JSON.parse(readModule("package.json"));
  assert.equal(
    packageJson.scripts["test:stage-d-p20"],
    "node scripts/pond-transport-policy-selftest.mjs",
  );
  assert.equal(
    packageJson.scripts["stage-d:render-live-session-transport"],
    "node scripts/render-stage-d-live-session-transport.mjs",
  );
  const ci = readModule(".github/workflows/ci.yml");
  assert.equal(
    ci.split("Verify Stage D-P20 pond message transport lane").length - 1,
    2,
    "the CI verify step appears exactly once in each job",
  );

  // (i) the provenance ties: the D-P20 provenance names the policy
  // record as its record, extends the rendered stages through D-P20, and
  // the frozen D-P19 provenance stays untouched.
  const transportProvenance = JSON.parse(
    readModule("ui/generated/pond-stage-d-live-session-transport-provenance.json"),
  );
  assert.equal(transportProvenance.record, "src/contracts/pond-transport-policy-decision.ts");
  assert.deepEqual(
    transportProvenance.renderedStages.slice(-1),
    ["D-P20"],
    "the transport provenance extends the rendered stages through D-P20",
  );
  const receiptsProvenance = JSON.parse(
    readModule("ui/generated/pond-stage-d-live-session-receipts-provenance.json"),
  );
  assert.ok(
    !receiptsProvenance.renderedStages.includes("D-P20"),
    "the frozen D-P19 provenance stays untouched",
  );
});

// ---------------------------------------------------------------
// Block 9: ui wiring — the committed generated bundle ties to the src
// contracts on both assessors; the template tie; the shell renders
// fail-closed; the fixture-clock shell drive runs the honest policy
// lifecycle (establish → compose → prepare → Record the policy FIRST →
// dispatch once → receipt → refused replay → out-of-range index →
// retract → the dispatch confined, the receipt surviving inspection-
// only, and the policy confined-refusing); the neighboring lanes stay
// untouched; the markup contract holds; the module texts and the
// package/CI wiring hold.
// ---------------------------------------------------------------
block("uiWiring", () => {
  // (a) generated-bundle tie: the committed artifact is the only bridge
  // from the shell module to the contracts; both assessors recompute the
  // established arms identically to the src contracts.
  const srcPolicyRun = assessPondTransportPolicyDecision(transportInputOf(admittedArm));
  const genPolicyRun = assessGeneratedTransportPolicyDecision(transportInputOf(admittedArm));
  assert.deepEqual(deepClone(genPolicyRun), deepClone(srcPolicyRun));
  const refusedArm = byLabel(
    stageDP20TransportPolicyMatrix,
    "transport_policy_refused_external_a2a",
  );
  const srcRefusedRun = assessPondTransportPolicyDecision(transportInputOf(refusedArm));
  const genRefusedRun = assessGeneratedTransportPolicyDecision(transportInputOf(refusedArm));
  assert.deepEqual(deepClone(genRefusedRun), deepClone(srcRefusedRun));
  const srcWallRun = assessPondRemoteMessageIntakeRefusal(
    wallInputOf(byLabel(stageDP20RemoteMessageMatrix, "remote_message_refused_honest_untrusted_self_declaration")),
  );
  const genWallRun = assessGeneratedRemoteMessageRefusal(
    wallInputOf(byLabel(stageDP20RemoteMessageMatrix, "remote_message_refused_honest_untrusted_self_declaration")),
  );
  assert.deepEqual(deepClone(genWallRun), deepClone(srcWallRun));
  const srcTrustedRun = assessPondRemoteMessageIntakeRefusal(
    wallInputOf(byLabel(stageDP20RemoteMessageMatrix, "remote_message_refused_claims_trusted_class_operator")),
  );
  const genTrustedRun = assessGeneratedRemoteMessageRefusal(
    wallInputOf(byLabel(stageDP20RemoteMessageMatrix, "remote_message_refused_claims_trusted_class_operator")),
  );
  assert.deepEqual(deepClone(genTrustedRun), deepClone(srcTrustedRun));

  // The bundle's policy template plus the receiver-own fields equals the
  // pinned recorded policy — the shell never restates a posture literal.
  const templateTie = {
    ...pondStageDP20TransportPolicyTemplate,
    transportPolicyMetadata: {
      ...pondStageDP20TransportPolicyTemplate.transportPolicyMetadata,
      recorded_at_epoch_ms:
        admittedArm.transportPolicy.transportPolicyMetadata.recorded_at_epoch_ms,
    },
    principalRef: admittedArm.transportPolicy.principalRef,
  };
  assert.deepEqual(
    deepClone(templateTie),
    deepClone(admittedArm.transportPolicy),
    "the re-filled template equals the pinned recorded policy verbatim",
  );

  // (b) render drive — fail-closed on missing document/nodes.
  assert.equal(renderPondTransport(undefined), false);
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
      transportNote: elementStub(),
      transportStatus: elementStub(),
      transportList: elementStub(),
      receiptNote: elementStub(),
      receiptStatus: elementStub(),
      receiptList: elementStub(),
    };
    return {
      nodes,
      querySelector(selector) {
        if (selector === "[data-transport-note]") return nodes.transportNote;
        if (selector === "[data-transport-status]") return nodes.transportStatus;
        if (selector === "[data-transport-list]") return nodes.transportList;
        if (selector === "[data-receipt-note]") return nodes.receiptNote;
        if (selector === "[data-receipt-status]") return nodes.receiptStatus;
        if (selector === "[data-receipt-list]") return nodes.receiptList;
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
  missingStatus.nodes.transportStatus = null;
  assert.equal(renderPondTransport(missingStatus), false);
  const missingList = documentStub();
  missingList.nodes.transportList = null;
  assert.equal(renderPondTransport(missingList), false);
  const missingNote = documentStub();
  missingNote.nodes.transportNote = null;
  assert.equal(renderPondTransport(missingNote), false);

  // The render drive on the empty shell state: the honest empty posture.
  const collectText = (node) =>
    [node.textContent, ...node.children.map(collectText)].join("\n");
  const liveDocument = documentStub();
  assert.equal(renderPondTransport(liveDocument), true);
  assert.equal(liveDocument.nodes.transportNote.dataset.transportRendered, "true");
  assert.match(
    collectText(liveDocument.nodes.transportList),
    /No transport policy recorded/,
  );
  assert.match(collectText(liveDocument.nodes.transportList), /Inbound wall/);

  // (c) the shell drive on the fixture clock — the full policy lifecycle.
  // Determinism comes from the contract's purity, never from the wall
  // clock. THE LIFECYCLE ORDER THE FROZEN CHAIN DOES NOT ENFORCE: the
  // policy is recorded AFTER the candidate preparation and BEFORE the
  // dispatch, so a future transport lane inherits a real decision point
  // — while nothing here gates or consumes it.
  const establishedArmD15 = stageDP15SessionEntryLiveSessionEstablished;
  const nowMs = stageDP15EvaluatedAtEpochMs;
  const verifierRecord = deepClone(establishedArmD15.dp8VerifierRecord);
  const proofRecord = deepClone(establishedArmD15.dp8ProofRecord);
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

  // Record the transport policy FIRST: the policy event between the
  // intent and any dispatch, its own event time, the in-process
  // selection.
  const policyEventAt = composeEpoch + 600;
  assert.ok(
    policyEventAt > recordAt && preparedAt - policyEventAt <= maximumAge,
    "the policy event postdates the intent and stays within its own freshness window",
  );
  const recordedPolicy = recordTransportPolicy({
    deliveryDecisionIndex: 0,
    policyRecordedAtEpochMs: policyEventAt,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(recordedPolicy.recorded, true, "the healthy policy must record");
  assert.equal(
    recordedPolicy.assessment.transportPolicyState,
    "transport_policy_recorded_session_scoped_no_external_transport",
  );
  assert.equal(
    recordedPolicy.assessment.reason,
    "all_transport_policy_checks_satisfied",
  );
  assert.equal(
    recordedPolicy.assessment.recordedTransportPolicy,
    "in_process_local_conversation_context_delivery_only",
  );
  assert.equal(recordedPolicy.assessment.transportPolicyConsumedThisCut, false);
  assert.equal(recordedPolicy.assessment.authority, "none");
  assert.equal(
    recordedPolicy.assessment.transportPolicyEventFreshnessDiagnosis.observationAgeMs,
    preparedAt - policyEventAt,
  );
  for (const ceilingKey of POLICY_CEILING_KEYS) {
    assert.equal(recordedPolicy.assessment[ceilingKey], false, `ceiling ${ceilingKey} in the drive`);
  }
  const policyHold = currentTransportPosture({ evaluatedAtEpochMs: preparedAt });
  assert.equal(policyHold.held, true);
  assert.equal(policyHold.policies.length, 1);
  assert.equal(
    policyHold.policies[0].deliveredText,
    "Desk, we ride at dawn. Ready your structural reads.",
  );
  assert.equal(policyHold.policies[0].deliveryDecisionIndex, 0);
  assert.equal(policyHold.policies[0].presentationMark, "in_session");
  assert.equal(
    policyHold.policies[0].policy.transportPolicyMetadata.recorded_at_epoch_ms,
    policyEventAt,
  );

  // The standing inbound wall: always refusing, no storage, no
  // affordance.
  const wallHold = currentRemoteMessageWallPosture();
  assert.equal(wallHold.reason, "remote_message_intake_refused_no_remote_agent_admission");
  assert.equal(wallHold.intakeState, "remote_message_not_intaked");
  const wallAgain = currentRemoteMessageWallPosture();
  assert.deepEqual(deepClone(wallAgain), deepClone(wallHold), "the wall holds no state");

  // Dispatch once AFTER the policy: the frozen D-P18 chain still runs —
  // no transport stage consumes the policy this cut (the honest
  // deviation), yet the drive already honors the lifecycle order.
  const dispatchEventAt = recordAt + 250;
  assert.ok(dispatchEventAt > policyEventAt, "the dispatch follows the policy in the drive");
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

  // Record one receipt.
  const receiptEventAt = recordAt + 400;
  assert.ok(
    receiptEventAt > dispatchEventAt && receiptEventAt <= preparedAt,
    "the receipt event postdates the policy, the dispatch, and predates the evaluation",
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
  const receiptHold = currentReceiptPosture({ evaluatedAtEpochMs: preparedAt });
  assert.equal(receiptHold.held, true);
  assert.equal(receiptHold.receipts.length, 1);

  // The re-recorded transport-policy attempt (the replayed basis is
  // recorded by the module and the ceremony refuses it at its own
  // declarative check — nothing is stored, the count stays exactly 1).
  const replayedPolicy = recordTransportPolicy({
    deliveryDecisionIndex: 0,
    policyRecordedAtEpochMs: policyEventAt + 50,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(replayedPolicy.recorded, false, "a replayed policy refuses");
  assert.equal(replayedPolicy.assessment.reason, "receiver_transport_policy_proof_incomplete");
  assert.deepEqual(
    replayedPolicy.assessment.unsatisfiedChecks,
    ["policy_basis_receiver_recorded_not_inferred"],
    "the replay refuses on the basis check alone, every leg echo green",
  );
  assert.equal(currentTransportPosture({ evaluatedAtEpochMs: preparedAt }).policies.length, 1);

  // An out-of-range delivery index refuses before any input exists.
  const outOfRange = recordTransportPolicy({
    deliveryDecisionIndex: 5,
    policyRecordedAtEpochMs: policyEventAt,
    evaluatedAtEpochMs: preparedAt,
  });
  assert.equal(outOfRange.recorded, false);
  assert.equal(outOfRange.assessment, null);
  assert.equal(outOfRange.refusalReason, "delivery_decision_index_out_of_range");
  assert.equal(currentTransportPosture({ evaluatedAtEpochMs: preparedAt }).policies.length, 1);

  // The neighboring lanes stay untouched by the transport lane
  // throughout: the delivery, dispatch, and receipt stores hold exactly
  // their own entries.
  assert.equal(heldDeliveryDecisions().decisions.length, 1);
  assert.equal(heldDispatchDecisions().decisions.length, 1);
  const deliveryAfter = currentDeliveryPosture({ evaluatedAtEpochMs: preparedAt });
  assert.equal(deliveryAfter.assessments.length, 1);
  assert.equal(
    deliveryAfter.assessments[0].deliveryCandidateState,
    "delivery_candidate_prepared_session_scoped_no_dispatch",
  );

  // Retract: the recorded dispatch re-reads confined and the recorded
  // receipt SURVIVES as inspection-only historical evidence — while the
  // transport policy CONFINES honestly (the deliberate contrast): its
  // row re-reads the reassessment's own refusal verbatim and stays
  // count-stable (module state, process lifetime — never deleted).
  const retractionAt = nowMs + 4000;
  const retraction = retractLiveSession({ retractedAtEpochMs: retractionAt });
  assert.equal(retraction.retracted, true);
  const confinedAt = nowMs + 5000;
  const confinedRun = currentDispatchPosture({ evaluatedAtEpochMs: confinedAt });
  assert.equal(
    confinedRun.assessments[0].dispatchState,
    "dispatch_not_performed",
    "the recorded dispatch re-reads not-performed after retraction",
  );
  const confinedReceipts = currentReceiptPosture({ evaluatedAtEpochMs: confinedAt });
  assert.equal(
    confinedReceipts.receipts.length,
    1,
    "the receipt survives retraction as historical evidence — never deleted",
  );
  assert.equal(confinedReceipts.receipts[0].presentationMark, "inspection_only");
  const confinedTransport = currentTransportPosture({ evaluatedAtEpochMs: confinedAt });
  assert.equal(
    confinedTransport.policies.length,
    1,
    "the policy row survives as module state — confined, not deleted",
  );
  assert.equal(
    confinedTransport.policies[0].presentationMark,
    "confined_reassessment_refusal",
    "the policy confines honestly — the contrast with the receipt's frozen survival",
  );
  assert.equal(
    confinedTransport.policies[0].reassessmentReason,
    "delivery_candidate_not_currently_prepared",
    "the confined policy presents the reassessment's own cause verbatim",
  );
  assert.equal(
    confinedTransport.policies[0].policy.transportPolicyMetadata.recorded_at_epoch_ms,
    policyEventAt,
    "the recorded policy facts stay verbatim after the session ends",
  );
  assert.equal(
    confinedTransport.policies[0].policy.transportPolicy,
    "in_process_local_conversation_context_delivery_only",
  );

  // The wall panel holds unchanged through the retraction — the wall
  // never had session legs to lose.
  const confinedWall = currentRemoteMessageWallPosture();
  assert.deepEqual(deepClone(confinedWall), deepClone(wallHold));

  // A policy attempt over the confined lane refuses and stores nothing.
  const postRetractionPolicy = recordTransportPolicy({
    deliveryDecisionIndex: 0,
    policyRecordedAtEpochMs: confinedAt,
    evaluatedAtEpochMs: confinedAt,
  });
  assert.equal(postRetractionPolicy.recorded, false);
  assert.equal(
    postRetractionPolicy.assessment.reason,
    "delivery_candidate_not_currently_prepared",
    "a policy over a confined lane refuses at the reassessment",
  );
  assert.equal(currentTransportPosture({ evaluatedAtEpochMs: confinedAt }).policies.length, 1);
  assert.equal(heldDeliveryDecisions().decisions.length, 1);

  // (d) markup contract on ui/pond-desktop.html — the transport region
  // is additive, the mic stays disabled, and the modules load in lane
  // order (receipts < transport < shell).
  const html = readModule("ui/pond-desktop.html");
  assert.match(html, /data-transport-note/);
  assert.match(html, /data-transport-status/);
  assert.match(html, /data-transport-list/);
  assert.match(html, /mic-button" type="button" disabled/);
  const liveSessionTag = html.indexOf('src="pond-live-session.js"');
  const conversationTag = html.indexOf('src="pond-conversation.js"');
  const deliveryTag = html.indexOf('src="pond-delivery.js"');
  const dispatchTag = html.indexOf('src="pond-dispatch.js"');
  const receiptsTag = html.indexOf('src="pond-receipts.js"');
  const transportTag = html.indexOf('src="pond-transport.js"');
  const shellTag = html.indexOf('src="pond-shell.js"');
  assert.ok(
    transportTag !== -1,
    "the transport module script tag is present",
  );
  assert.ok(receiptsTag < transportTag, "the transport module loads after the receipts module");
  assert.ok(transportTag < shellTag, "the transport module loads before the shell module");
  assert.ok(receiptsTag < shellTag && dispatchTag < receiptsTag && deliveryTag < dispatchTag && conversationTag < deliveryTag && liveSessionTag < conversationTag);

  // (e) the neighboring lanes stay untouched by the transport lane: the
  // frozen D-P16..D-P19 modules never mention it.
  const dispatchModuleText = readModule("ui/pond-dispatch.js");
  const receiptsModuleText = readModule("ui/pond-receipts.js");
  const deliveryModuleText = readModule("ui/pond-delivery.js");
  const conversationModuleText = readModule("ui/pond-conversation.js");
  const sessionModuleText = readModule("ui/pond-live-session.js");
  assert.ok(!dispatchModuleText.includes("pond-transport"), "pond-dispatch.js stays untouched by the transport lane");
  assert.ok(!receiptsModuleText.includes("pond-transport"), "pond-receipts.js stays untouched by the transport lane");
  assert.ok(!deliveryModuleText.includes("pond-transport"), "pond-delivery.js stays untouched by the transport lane");
  assert.ok(!conversationModuleText.includes("pond-transport"), "pond-conversation.js stays untouched by the transport lane");
  assert.ok(!sessionModuleText.includes("pond-transport"), "pond-live-session.js stays untouched by the transport lane");
});

console.log(
  `POND_STAGE_DP20_POND_MESSAGE_TRANSPORT_LANE_SELFTEST_PASS · ${blocks} blocks`,
);