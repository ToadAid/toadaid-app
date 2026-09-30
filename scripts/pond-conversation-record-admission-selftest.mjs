// Stage D-P16 selftest: the Pond conversation lane. The matrix block proves
// the composed-record admission arms and the conversation-surface arms
// agree with the real assessors deep-equal and deep-frozen; the identity
// ties prove the legs cannot drift from the frozen D-P15 read-gate entry
// and the frozen D-P13 trading-complete routing entry, the declared agent
// vocabulary from the D-P0 exports, and the clock pair from the D-P15 pair;
// the negatives block proves every recompute break lands on its mapped
// cause with honest echoes through green legs; the lifecycle block proves
// the session-scope binding, retraction confinement, expiry by pure
// parameter arithmetic, and the earlier-session refusal; the fail-closed
// block refuses garbage without throwing; the ceiling block proves the
// all-false families and the widened inventory; the agent-posture block
// proves the reflection is the frozen routing truth; the hygiene block
// walks the banned vocabulary and the env names; and the ui wiring block
// proves the committed generated bundle, the composer revival, and the
// fixture-clock shell drive — establish, compose, refused compose, surface
// presented, retract, confined — with the mic still disabled. Offline
// structural; no env-gated block exists in this cut (it holds no
// secret-bearing ceremony).

import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  stageDP16RecordMatrix,
  stageDP16SurfaceMatrix,
  stageDP16ReceiverRef,
  stageDP16Agent0Ref,
  stageDP16CommunitySlotRef,
  stageDP16ProjectSlotRef,
  stageDP16UndeclaredAgentRef,
  stageDP16ComposedAtEpochMs,
  stageDP16EstablishedAtEpochMs,
  stageDP16ExpiredEvaluationEpochMs,
  stageDP16StaleEpochMs,
  stageDP16RetractedAtEpochMs,
  stageDP16RetractedEvaluatedEpochMs,
  stageDP16EvaluatedAtEpochMs,
  stageDP16ReceiverMaximumAgeMs,
  stageDP16ReadGateRecord,
} from "../src/fixtures/stage-d-p16-pond-conversation.ts";
import {
  assessPondConversationRecordAdmission,
  POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS,
  POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS,
  POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS,
} from "../src/contracts/pond-conversation-record-admission.ts";
import {
  assessPondConversationSurfacePosture,
} from "../src/contracts/pond-conversation-surface-posture.ts";

import {
  stageDP15ReadGateEntryActivated,
  stageDP15SessionEntryLiveSessionEstablished,
  stageDP15ReceiverRef,
  stageDP15EvaluatedAtEpochMs,
  stageDP15ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p15-live-session.ts";
import { POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS as DP15_INVENTORY_CONTRACT } from "../src/contracts/pond-live-session-establishment.ts";
import { stageDP13RoutingMatrix, stageDP13AgentRef } from "../src/fixtures/stage-d-p13-declared-mode-routing.ts";
import { assessPondDeclaredModeRouting } from "../src/contracts/pond-declared-mode-routing.ts";
import {
  stageDP0LocalPrincipalRef,
  stageDP0Agent0Ref,
  stageDP0CommunityAgentSlotRef,
  stageDP0ProjectAgentSlotRef,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "../src/contracts/pond-agent-presence-observation-intake.ts";

import {
  assessPondConversationRecordAdmission as assessGeneratedRecordAdmission,
  assessPondConversationSurfacePosture as assessGeneratedSurfacePosture,
  pondStageDP13ForgeBindingRecord,
  pondStageDP13ModeDeclarationRecord,
  pondStageDP13DeskSourceContractFixture,
  pondStageDP13DeskPresenceProjection,
  pondStageDP16ConversationRecordTemplate,
  pondStageDP16ConversationSurfaceTemplate,
  POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS as GENERATED_DECLARED_REFS,
} from "../ui/generated/pond-stage-d-live-session-conversation.js";
import {
  currentConversationSurfacePosture,
  recordConversationComposedText,
  renderPondConversation,
} from "../ui/pond-conversation.js";
import {
  currentLiveSessionPosture,
  establishLiveSession,
  heldLiveSessionRecords,
  retractLiveSession,
} from "../ui/pond-live-session.js";
import { stageDP6AuthenticationObservationComplete } from "../src/fixtures/stage-d-p6-local-principal-authentication-observation.ts";

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

// Input-shape helpers: the fixture entries carry exactly the assessor
// inputs the contracts demand — the input builders re-assemble them in
// the contract's exact key order so the recompute is a clean re-run.
const RECORD_INPUT_KEYS = [
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
const SURFACE_INPUT_KEYS = [
  "conversationSurfaceRecord",
  "conversationRecordInputs",
  "receiverHeldPrincipalRef",
  "receiverHeldAgentRef",
  "forgeBindingRecord",
  "modeDeclarationRecord",
  "deskSourceContractFixture",
  "deskPresenceProjection",
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
  for (const key of RECORD_INPUT_KEYS) input[key] = entry[key];
  return input;
};
const surfaceInputOf = (entry) => {
  const input = {};
  for (const key of SURFACE_INPUT_KEYS) input[key] = entry[key];
  return input;
};

const byLabel = (matrix, label) => {
  const entry = matrix.find((candidate) => candidate.fixtureLabel === label);
  assert.ok(entry, `missing fixture arm: ${label}`);
  return entry;
};

const evaluated = stageDP16EvaluatedAtEpochMs;
const maximumAge = stageDP16ReceiverMaximumAgeMs;

const admittedArm = byLabel(stageDP16RecordMatrix, "conversation_record_admitted");
const surfacePresentedArm = byLabel(
  stageDP16SurfaceMatrix,
  "conversation_surface_presented_with_records",
);

// The cut's own fresh runs — only D-P16 assessments ever land here.
const dp16FreshRuns = [];
const runRecordAdmission = (entry) => {
  const fresh = assessPondConversationRecordAdmission(recordInputOf(entry));
  dp16FreshRuns.push(fresh);
  return fresh;
};
const runSurfacePosture = (entry) => {
  const fresh = assessPondConversationSurfacePosture(surfaceInputOf(entry));
  dp16FreshRuns.push(fresh);
  return fresh;
};

// ---------------------------------------------------------------
// Block 1: matrix recompute — every record arm and surface arm
// deep-equal their pinned assessments, every arm and assessment is
// deep-frozen, the positive arms carry the exact satisfied-check lists,
// and every assessment's ceiling stays all-false.
// ---------------------------------------------------------------
block("matrix", () => {
  assert.equal(stageDP16RecordMatrix.length, 20, "the record matrix is pinned at 20 arms");
  assert.equal(stageDP16SurfaceMatrix.length, 12, "the surface matrix is pinned at 12 arms");
  for (const entry of stageDP16RecordMatrix) {
    const fresh = runRecordAdmission(entry);
    assert.equal(fresh.contractVersion, "pond-conversation-record-admission-d-p16", entry.fixtureLabel);
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(entry, `record-matrix:${entry.fixtureLabel}`);
    assertLacksKeys(fresh, POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS, `fresh:${entry.fixtureLabel}`);
    assert.equal(fresh.runtimeActivationPosture, "not_included", entry.fixtureLabel);
    assert.equal(fresh.authority, "none", entry.fixtureLabel);
    if (
      fresh.conversationRecordState ===
      "conversation_record_admitted_session_scoped_no_delivery"
    ) {
      assert.equal(fresh.reason, "all_conversation_record_checks_satisfied");
      assert.equal(fresh.unsatisfiedChecks.length, 0);
      assert.ok(fresh.satisfiedChecks.length > 0, entry.fixtureLabel);
      assert.ok(entry.assessment.satisfiedChecks.includes(
        "live_session_read_gate_not_live_activated_refused_or_not_fresh" === "never"
      ) === false, "satisfied checks never carry a refusal cause");
    }
  }
  for (const entry of stageDP16SurfaceMatrix) {
    const fresh = runSurfacePosture(entry);
    assert.equal(fresh.contractVersion, "pond-conversation-surface-posture-d-p16", entry.fixtureLabel);
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(entry, `surface-matrix:${entry.fixtureLabel}`);
    assertLacksKeys(fresh, POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS, `fresh-surface:${entry.fixtureLabel}`);
    for (const flag of [
      fresh.surfaceEstablishesGrant,
      fresh.surfaceEstablishesDeliveryOrDispatch,
      fresh.surfaceEstablishesAgentReplyComposition,
      fresh.surfaceEstablishesAuthorityFromProse,
      fresh.surfaceEstablishesMembershipOrRoomPresence,
      fresh.surfaceEstablishesAgentAccess,
      fresh.surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence,
      fresh.surfaceEstablishesCurrentTruth,
      fresh.credentialAdmitted,
      fresh.personalMemoryContentAdmitted,
      fresh.currentTruthAdmitted,
    ]) {
      assert.equal(flag, false, entry.fixtureLabel);
    }
  }
});

// ---------------------------------------------------------------
// Block 2: identity ties — the re-inlined legs cannot drift from the
// frozen D-P15 read-gate entry and the frozen D-P13 trading-complete
// routing entry; the declared agent vocabulary is the D-P0 exports; the
// clock pair descends honestly from the D-P15 pair.
// ---------------------------------------------------------------
block("identityTies", () => {
  const frozenGateEntry = stageDP15ReadGateEntryActivated;
  assert.deepEqual(
    deepClone(stageDP16ReadGateRecord),
    deepClone(frozenGateEntry.readGateRecord),
    "the conversation gate record drifted from the frozen D-P15 read-gate entry",
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
      `the record arm's D-P15 ${label} leg drifted from the frozen read-gate entry`,
    );
  }
  assert.equal(admittedArm.receiverHeldPrincipalRef, frozenGateEntry.receiverHeldPrincipalRef);
  assert.equal(
    admittedArm.receiverMaximumAgeMs,
    stageDP15ReceiverMaximumAgeMs,
    "the maximum-age pair must equal the frozen D-P15 declared maximum",
  );
  assert.equal(admittedArm.receiverMaximumAgeMs, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS);

  // The frozen D-P13 trading-complete routing legs carry verbatim.
  const tradingEntry = byLabel(
    stageDP13RoutingMatrix,
    "stage-d-p13:routing:trading-complete",
  );
  assert.deepEqual(deepClone(surfacePresentedArm.forgeBindingRecord), deepClone(tradingEntry.forgeBindingRecord));
  assert.deepEqual(deepClone(surfacePresentedArm.modeDeclarationRecord), deepClone(tradingEntry.modeDeclarationRecord));
  assert.deepEqual(deepClone(surfacePresentedArm.deskSourceContractFixture), deepClone(tradingEntry.deskSourceContractFixture));
  assert.deepEqual(deepClone(surfacePresentedArm.deskPresenceProjection), deepClone(tradingEntry.deskPresenceProjection));
  assert.equal(surfacePresentedArm.receiverHeldAgentRef, tradingEntry.receiverHeldAgentRef);
  assert.equal(surfacePresentedArm.receiverHeldAgentRef, stageDP13AgentRef);

  // The declared vocabulary is exactly the D-P0 agent family.
  assert.deepEqual(deepClone(POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS), [
    stageDP0Agent0Ref,
    stageDP0CommunityAgentSlotRef,
    stageDP0ProjectAgentSlotRef,
  ]);
  assert.equal(GENERATED_DECLARED_REFS.length, 3);

  // The clock pair descends from the D-P15 pair: the receiver's own ref,
  // the D-P15 establishment event, and a lane evaluation instant strictly
  // after every frozen leg event.
  assert.equal(stageDP16ReceiverRef, stageDP15ReceiverRef);
  assert.deepEqual(admittedArm.conversationRecord, {
    contractVersion: "pond-conversation-record-admission-d-p16",
    kind: "pond-conversation-record",
    principalRef: stageDP0LocalPrincipalRef,
    recordBasis: "receiver_composed_into_live_session_not_inferred",
    composedRecordText: "Desk, we ride at dawn. Ready your structural reads.",
    addressedAgentRef: stageDP0Agent0Ref,
    conversationRecordMetadata: {
      composed_at_epoch_ms: stageDP16ComposedAtEpochMs,
      freshness_basis: "record_event_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    },
    conversationTrustEpochPosture: "verified_boundary_session_scoped",
    conversationProvenancePosture:
      "receiver_authored_composed_in_session_not_agent_authored_not_remote",
    conversationScopePosture:
      "session_scoped_module_state_never_persisted_scope_never_created_from_prose",
    conversationDeliveryPosture:
      "message_informed_not_delivered_delivery_refused_until_its_own_lane",
    conversationReplyPosture:
      "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",
    conversationMemoryPosture:
      "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",
    conversationAuthorityPosture:
      "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
    authority: "none",
  });
  assert.equal(
    stageDP16ComposedAtEpochMs,
    stageDP15EvaluatedAtEpochMs + 1000,
    "the composition event sits inside the session the D-P15 pair opened",
  );
  assert.equal(
    stageDP16EstablishedAtEpochMs,
    stageDP15EvaluatedAtEpochMs,
    "the session-scope binding event is the D-P15 establishment event",
  );
  assert.ok(
    stageDP16EvaluatedAtEpochMs > stageDP16ComposedAtEpochMs,
    "the lane evaluation instant must postdate the composition (otherwise every record is future-time refused)",
  );
  assert.equal(stageDP16ExpiredEvaluationEpochMs - stageDP16EstablishedAtEpochMs, stageDP16ReceiverMaximumAgeMs + 1);

  // The composed-text bound and its boundary probes.
  assert.equal(POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS, 2000);
  const boundaryArm = byLabel(stageDP16RecordMatrix, "conversation_record_admitted_boundary_text_2000");
  assert.equal(boundaryArm.conversationRecord.composedRecordText.length, 2000);
  const overArm = byLabel(stageDP16RecordMatrix, "conversation_record_refused_text_over_maximum");
  assert.equal(overArm.conversationRecord.composedRecordText.length, 2001);
});

// ---------------------------------------------------------------
// Block 3: recompute-agreement negatives — every refused-basis arm fails
// on its own basis check alone with every leg echo green (L49-55); the
// declarative and shape refusals land on their dedicated causes; gate-leg
// breakage lands on the gate cause without unbinding the echoes.
// ---------------------------------------------------------------
block("recomputeAgreementNegatives", () => {
  const refusedBasisArms = [
    "conversation_record_refused_inferred_from_provider_session",
    "conversation_record_refused_asserted_by_model_completion",
    "conversation_record_refused_inferred_from_room_presence",
    "conversation_record_refused_inferred_from_conversation_summary",
    "conversation_record_refused_replayed_from_prior_conversation_history",
  ];
  for (const label of refusedBasisArms) {
    const arm = byLabel(stageDP16RecordMatrix, label);
    const fresh = runRecordAdmission(arm);
    assert.equal(fresh.conversationRecordState, "conversation_record_not_admitted", label);
    assert.equal(fresh.reason, "receiver_conversation_record_proof_incomplete", label);
    assert.deepEqual(fresh.unsatisfiedChecks, ["conversation_record_basis_receiver_composed_not_inferred"], label);
    assert.equal(fresh.satisfiedChecks.length, 8, label);
    // Every leg echo stays green (L49-55): the basis is the only failure.
    assert.equal(fresh.mappedEstablishmentState, "live_session_scoped_authentication_established", label);
    assert.equal(fresh.mappedReadGateState, "live_session_scoped_single_principal_structural_reads_live_activated", label);
    assert.equal(fresh.mappedReadGateFreshnessDiagnosis.state, "fresh", label);
    assert.equal(fresh.conversationRecordFreshnessDiagnosis.state, "fresh", label);
  }

  // Declarative failures land on their dedicated causes with the exact
  // unsatisfied check name:
  const dedicatedCauses = {
    conversation_record_refused_empty_text:
      "conversation_record_composed_text_empty_or_over_recorded_maximum",
    conversation_record_refused_text_over_maximum:
      "conversation_record_composed_text_empty_or_over_recorded_maximum",
    conversation_record_refused_undeclared_agent_ref:
      "conversation_record_addressed_agent_not_declared",
    conversation_record_refused_confined_but_unverified_epoch:
      "conversation_record_trust_epoch_not_admissible",
    conversation_record_refused_legacy_epoch:
      "conversation_record_trust_epoch_not_admissible",
    conversation_record_refused_missing_key: "conversation_record_invalid",
    conversation_record_refused_extra_key_agent_reply: "conversation_record_invalid",
    conversation_record_refused_future_composed_at: "conversation_record_not_session_current",
    conversation_record_refused_stale_composition: "conversation_record_not_session_current",
    conversation_record_refused_composed_before_scope:
      "conversation_record_not_of_the_current_session_scope",
    conversation_record_refused_tampered_delivery_posture: "conversation_record_invalid",
  };
  for (const [label, expectedCause] of Object.entries(dedicatedCauses)) {
    const arm = byLabel(stageDP16RecordMatrix, label);
    const fresh = runRecordAdmission(arm);
    assert.equal(fresh.conversationRecordState, "conversation_record_not_admitted", label);
    assert.equal(fresh.reason, expectedCause, label);
    assert.equal(fresh.runtimeActivationPosture, "not_included", label);
    assert.equal(fresh.authority, "none", label);
  }
  // The future arm's own diagnosis is honestly unknown (event after
  // evaluation), and the stale arm's diagnosis is honestly past.
  const futureArm = byLabel(stageDP16RecordMatrix, "conversation_record_refused_future_composed_at");
  assert.equal(futureArm.assessment.conversationRecordFreshnessDiagnosis.state, "unknown");
  const staleArm = byLabel(stageDP16RecordMatrix, "conversation_record_refused_stale_composition");
  assert.equal(staleArm.assessment.conversationRecordFreshnessDiagnosis.state, "stale");

  // Gate-leg breakage: a swapped receiver ref breaks the re-run chain at
  // the gate cause while the record's own diagnosis stays honest.
  const brokenLegsInput = {
    ...recordInputOf(admittedArm),
    receiverHeldPrincipalRef: "principal:fixture:stage-d-p14:not-the-receiver",
  };
  const brokenLegsRun = assessPondConversationRecordAdmission(brokenLegsInput);
  assert.equal(brokenLegsRun.conversationRecordState, "conversation_record_not_admitted");
  assert.equal(
    brokenLegsRun.reason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
  );
  assert.equal(brokenLegsRun.conversationRecordFreshnessDiagnosis.state, "fresh");
  // And the broken chain is readable down the mapped echoes.
  assert.notEqual(
    brokenLegsRun.mappedEstablishmentState,
    "live_session_scoped_authentication_established",
  );

  // Surface refused bases: each fails on its own basis check alone with
  // every surface-level leg echo green (L49-55).
  const refusedSurfaceBases = [
    "conversation_surface_refused_inferred_from_live_session_establishment",
    "conversation_surface_refused_inferred_from_conversation_history",
    "conversation_surface_refused_asserted_by_shell_producer",
    "conversation_surface_refused_inferred_from_room_presence",
  ];
  for (const label of refusedSurfaceBases) {
    const arm = byLabel(stageDP16SurfaceMatrix, label);
    const fresh = runSurfacePosture(arm);
    assert.equal(fresh.conversationSurfaceState, "conversation_surface_not_presented", label);
    assert.equal(fresh.reason, "receiver_conversation_surface_proof_incomplete", label);
    assert.deepEqual(
      fresh.unsatisfiedChecks,
      ["conversation_surface_basis_receiver_recorded_not_inferred"],
      label,
    );
    assert.equal(fresh.mappedEstablishmentState, "live_session_scoped_authentication_established", label);
    assert.equal(fresh.mappedReadGateState, "live_session_scoped_single_principal_structural_reads_live_activated", label);
  }

  // The tampered surface posture refuses at the record cause with the
  // tampered literal carried verbatim in the echoed posture.
  const tamperedSurface = byLabel(stageDP16SurfaceMatrix, "conversation_surface_refused_tampered_posture");
  assert.equal(tamperedSurface.assessment.surfaceRecordVersion, "invalid");
  assert.equal(tamperedSurface.assessment.reason, "conversation_surface_record_invalid");

  // The earlier-session surface refusal: a record outside the scope
  // binding refuses the presentation with the scope check named, while
  // the honest per-record echo still computes alongside.
  const earlierSession = byLabel(stageDP16SurfaceMatrix, "conversation_surface_refused_records_from_earlier_session_scope");
  assert.equal(earlierSession.assessment.reason, "receiver_conversation_surface_proof_incomplete");
  assert.deepEqual(
    earlierSession.assessment.unsatisfiedChecks,
    ["presented_records_all_within_current_session_scope"],
  );
});

// ---------------------------------------------------------------
// Block 4: lifecycle — retraction confines honestly, expiry is pure
// parameter arithmetic, and records from an earlier session instance
// never re-enter a re-established scope.
// ---------------------------------------------------------------
block("lifecycle", () => {
  // The retraction arm: a present retraction fact refuses every
  // assessment — the record admission at the retracted refusal's own
  // cause, and the surface confined with its records presented
  // inspection-only (nothing consumer-admissible).
  const retractionArm = byLabel(stageDP16RecordMatrix, "conversation_record_admitted");
  const retractionInput = {
    ...recordInputOf(retractionArm),
    receiverRetractionRecord: {
      contractVersion: "pond-live-session-retraction-d-p15",
      kind: "pond-live-session-retraction",
      retracted_at_epoch_ms: stageDP16RetractedAtEpochMs,
      retractionPosture: "receiver_recorded_live_session_retraction_no_grant",
      authority: "none",
    },
    receiverEvaluatedAtEpochMs: stageDP16RetractedEvaluatedEpochMs,
  };
  const retractionRun = assessPondConversationRecordAdmission(retractionInput);
  assert.equal(retractionRun.conversationRecordState, "conversation_record_not_admitted", "post-retraction records refuse");
  assert.equal(retractionRun.reason, "live_session_read_gate_not_live_activated_refused_or_not_fresh");

  // Expiry by pure parameter arithmetic: evaluate at established + max +
  // 1 — the D-P2 machinery refuses on arithmetic alone, no sleeping.
  const expiredInput = {
    ...recordInputOf(admittedArm),
    receiverEvaluatedAtEpochMs: stageDP16ExpiredEvaluationEpochMs,
  };
  const expiredRun = assessPondConversationRecordAdmission(expiredInput);
  assert.equal(expiredRun.conversationRecordState, "conversation_record_not_admitted");
  assert.equal(expiredRun.reason, "live_session_read_gate_not_live_activated_refused_or_not_fresh");
  assert.deepEqual(expiredRun.conversationRecordFreshnessDiagnosis, {
    state: "fresh",
    reason: "within_declared_maximum_age",
    observationAgeMs: 59001,
  }, "the record's own composed event may still be fresh while the session it rode is expired");
  assert.ok(expiredRun.mappedReadGateFreshnessDiagnosis !== null);

  // The retraction surface state: the confined record set presents
  // inspection-only with honest trust marks.
  const retractionSurface = byLabel(stageDP16SurfaceMatrix, "conversation_surface_scope_ended_retracted_with_records");
  assert.equal(retractionSurface.assessment.conversationSurfaceState, "conversation_surface_scope_ended_records_inspection_only");
  assert.equal(retractionSurface.assessment.reason, "live_session_not_established_refused_or_not_fresh");
  for (const entry of retractionSurface.assessment.recordEntries) {
    assert.notEqual(entry.presentationTrustMark, "in_session_verified_boundary_session_scoped");
    assert.ok(
      entry.presentationTrustMark ===
        "out_of_session_record_not_admissible" ||
        entry.presentationTrustMark ===
          "out_of_session_untrusted_epoch_inspection_only_never_consumer_admissible",
    );
  }
  // Retraction is readable down the mapped establishment echo.
  assert.equal(retractionSurface.assessment.mappedEstablishmentState, "not_established");
  assert.equal(retractionSurface.assessment.mappedEstablishmentReason, "receiver_retraction_on_record");

  // The expired surface state: retraction-free expiry confines the same
  // way, with the staleness honest on the establishment echo.
  const expiredSurfaceInput = {
    ...surfaceInputOf(byLabel(stageDP16SurfaceMatrix, "conversation_surface_presented_with_records")),
    receiverEvaluatedAtEpochMs: stageDP16ExpiredEvaluationEpochMs,
    receiverMaximumAgeMs: stageDP16ReceiverMaximumAgeMs,
  };
  const expiredSurface = assessPondConversationSurfacePosture(expiredSurfaceInput);
  assert.equal(expiredSurface.conversationSurfaceState, "conversation_surface_scope_ended_records_inspection_only");
  assert.equal(expiredSurface.mappedEstablishmentReason, "session_establishment_not_session_current");
});

// ---------------------------------------------------------------
// Block 5: fail-closed garbage — nulls, wrong types, and broken shapes
// refuse without throwing, and the surface refuses with it.
// ---------------------------------------------------------------
block("failClosed", () => {
  const garbageInputs = [null, undefined, 0, "string", [], {}, { conversationRecord: null }];
  for (const garbage of garbageInputs) {
    const fresh = assessPondConversationRecordAdmission(garbage);
    assert.equal(fresh.conversationRecordState, "conversation_record_not_admitted", `garbage record ${String(garbage).slice(0, 20)}`);
    assert.equal(fresh.authority, "none");
    assert.equal(fresh.runtimeActivationPosture, "not_included");
    assertLacksKeys(fresh, POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS, "fail-closed record");
  }
  for (const garbage of garbageInputs) {
    const fresh = assessPondConversationSurfacePosture(garbage);
    assert.equal(fresh.conversationSurfaceState, "conversation_surface_not_presented", "garbage surface");
    assert.equal(fresh.surfaceRecordVersion, "invalid");
    assert.equal(fresh.authority, "none");
    assert.equal(fresh.runtimeActivationPosture, "not_included");
  }
  // A surface-level garbage record input degrades to not-presented, not a
  // throw — the surface's echo wall holds.
  const garbageRecordInputSurface = assessPondConversationSurfacePosture({
    ...surfaceInputOf(byLabel(stageDP16SurfaceMatrix, "conversation_surface_presented_with_records")),
    conversationRecordInputs: [null, 0, "junk"],
  });
  assert.equal(garbageRecordInputSurface.conversationSurfaceState, "conversation_surface_not_presented");
  assert.equal(garbageRecordInputSurface.reason, "receiver_conversation_surface_proof_incomplete");
});

// ---------------------------------------------------------------
// Block 6: ceiling and widen — the all-false families pinned on every
// positive arm; the widened inventory is the D-P15 union plus four
// agent-reach keys; add-key widens refuse through the deep walk.
// ---------------------------------------------------------------
block("ceilingAndWiden", () => {
  assert.equal(
    POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS.length,
    DP15_INVENTORY_CONTRACT.length + 4,
    "the D-P16 inventory is exactly the D-P15 union plus four keys",
  );
  assert.deepEqual(
    POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS.slice(
      DP15_INVENTORY_CONTRACT.length,
    ),
    ["agentReply", "agentReplyComposition", "deliveredMessage", "replyComposition"],
  );
  // (The inventory base itself is the frozen D-P15 export imported into
  // the contract — the length tie above proves the composition exactly.)

  // Add-key widen probes: a record carrying an agent reply or a delivery
  // payload key refuses at the invalid cause — the widening never greens.
  const widenRecordOf = (extraKey) => {
    const arm = admittedArm;
    return assessPondConversationRecordAdmission({
      ...recordInputOf(arm),
      conversationRecord: {
        ...arm.conversationRecord,
        [extraKey]: "widened-through-prose",
      },
    });
  };
  for (const extraKey of ["agentReply", "agentReplyComposition", "deliveredMessage", "replyComposition", "agentSession", "agentSecret", "agentAdmission", "chatMessage", "principalIds", "membership"]) {
    const widened = widenRecordOf(extraKey);
    assert.equal(widened.conversationRecordState, "conversation_record_not_admitted", extraKey);
    assert.equal(widened.reason, "conversation_record_invalid", extraKey);
  }

  // A surface record carrying a delivery key refuses at the surface
  // invalid cause.
  const widenedSurface = assessPondConversationSurfacePosture({
    ...surfaceInputOf(surfacePresentedArm),
    conversationSurfaceRecord: {
      ...surfacePresentedArm.conversationSurfaceRecord,
      surfaceEstablishesDeliveryOrDispatch: true,
      deliveredMessage: "widened",
    },
  });
  assert.equal(widenedSurface.conversationSurfaceState, "conversation_surface_not_presented");
  assert.equal(widenedSurface.reason, "conversation_surface_record_invalid");

  // The all-false ceiling family walked over every fresh run collected
  // across the blocks so far — every record ceiling member false, every
  // surface ceiling member false.
  for (const fresh of dp16FreshRuns) {
    assertLacksKeys(fresh, POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS, "fresh-run ceiling");
    for (const key of [
      "messageEstablishesDeliveryOrDispatch",
      "messageEstablishesAgentReplyComposition",
      "messageEstablishesAuthorityFromProse",
      "messageEstablishesScope",
      "messageEstablishesMembershipOrRoomPresence",
      "messagePromotedToCanonicalMemoryOrVerifiedEvidence",
      "messageEstablishesCurrentTruth",
    ]) {
      if (!(key in fresh)) continue;
      assert.equal(fresh[key], false, `ceiling key ${key} must stay false`);
    }
    if ("surfaceEstablishesGrant" in fresh) {
      assert.equal(fresh.surfaceEstablishesGrant, false);
      assert.equal(fresh.surfaceEstablishesDeliveryOrDispatch, false);
      assert.equal(fresh.surfaceEstablishesAgentReplyComposition, false);
    }
    if ("messageEstablishesGrant" in fresh) {
      assert.equal(fresh.messageEstablishesGrant, false);
    }
    if ("credentialAdmitted" in fresh) assert.equal(fresh.credentialAdmitted, false);
    if ("personalMemoryContentAdmitted" in fresh)
      assert.equal(fresh.personalMemoryContentAdmitted, false);
    if ("currentTruthAdmitted" in fresh) assert.equal(fresh.currentTruthAdmitted, false);
  }
});

// ---------------------------------------------------------------
// Block 7: agent-posture reflection — the presented echo is the frozen
// routing truth field for field; the declared slot refs echo the honest
// refusal; nothing undeclared ever reaches an echo.
// ---------------------------------------------------------------
block("agentPostureTie", () => {
  const presented = surfacePresentedArm;
  const agent0Echo = presented.assessment.agentPostureEchoes.find(
    (echo) => echo.presentationAgentRef === stageDP0Agent0Ref,
  );
  assert.ok(agent0Echo, "the trading-desk agent posture echo must present");
  const directRouting = assessPondDeclaredModeRouting({
    forgeBindingRecord: presented.forgeBindingRecord,
    modeDeclarationRecord: presented.modeDeclarationRecord,
    deskSourceContractFixture: presented.deskSourceContractFixture,
    deskPresenceProjection: presented.deskPresenceProjection,
    receiverHeldAgentRef: presented.receiverHeldAgentRef,
    receiverEvaluatedAtEpochMs: presented.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: presented.receiverMaximumAgeMs,
  });
  assert.equal(agent0Echo.echoedRoutingState, directRouting.routingState);
  assert.equal(agent0Echo.echoedRoutingReason, directRouting.reason);
  assert.equal(agent0Echo.echoedDeclaredProfile, directRouting.declaredProfile);
  assert.equal(agent0Echo.echoedRefusedDeclarationBasis, directRouting.refusedDeclarationBasis);
  assert.equal(agent0Echo.echoedDeskAgentJoinState, directRouting.mappedDeskAgentJoinState);
  assert.deepEqual(
    deepClone(agent0Echo.echoedDeclarationFreshnessDiagnosis),
    deepClone(directRouting.declarationFreshnessDiagnosis),
  );
  assert.equal(agent0Echo.presentedAgentPosture, "addressed_agent_structural_posture_presented");

  // The declared slot refs echo the honest refusal — the routing truth is
  // still the frozen one (the desk's declared profile is profiled
  // regardless of who is addressed).
  for (const arm of stageDP16SurfaceMatrix) {
    for (const echo of arm.assessment.agentPostureEchoes) {
      if (echo.presentationAgentRef === stageDP0Agent0Ref) continue;
      assert.equal(
        echo.presentedAgentPosture,
        "addressed_agent_structural_posture_refused_no_declared_mode_structural_record",
        `${arm.fixtureLabel}:${echo.presentationAgentRef}`,
      );
      assert.equal(echo.echoedRoutingState, "routing_not_established");
    }
  }

  // The community-slot record admission: a declared-but-not-receiver-held
  // ref still admits as a conversation record — the refusal lives in the
  // posture echo, honest either way.
  const communityArm = byLabel(stageDP16RecordMatrix, "conversation_record_admitted_community_slot");
  assert.equal(
    communityArm.assessment.conversationRecordState,
    "conversation_record_admitted_session_scoped_no_delivery",
  );
  const communitySurface = byLabel(stageDP16SurfaceMatrix, "conversation_surface_presented_with_records");
  const communityEcho = communitySurface.assessment.agentPostureEchoes.find(
    (echo) => echo.presentationAgentRef === stageDP16CommunitySlotRef,
  );
  assert.ok(communityEcho, "the community-slot posture echo must present a refusal");
  assert.equal(communityEcho.echoedDeclaredProfile, "TRADING");
  assert.equal(communityEcho.echoedRefusedDeclarationBasis, null);
});

// ---------------------------------------------------------------
// Block 8: hygiene — the banned frozen vocabulary stays out of the cut's
// own sources, the records and fixture carry no DOM/network needles, the
// fixture is import-free, the inventory union pins, the env names stay
// out of every non-sanctioned file, and the D-P9/D-P10 ui walks stay
// intact over the hand-written module.
// ---------------------------------------------------------------
block("hygiene", () => {
  const contractPaths = [
    "src/contracts/pond-conversation-record-admission.ts",
    "src/contracts/pond-conversation-surface-posture.ts",
    "src/fixtures/stage-d-p16-pond-conversation.ts",
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
  for (const path of contractPaths) {
    if (!path.includes("fixtures")) continue;
    for (const line of texts[contractPaths.indexOf(path)].split("\n")) {
      if (line.startsWith("import")) {
        assert.ok(
          line.startsWith("import type {"),
          `${path}: non-type import ${line.trim()}`,
        );
      }
    }
  }

  // (d) the banned-name source walk over the two contract files: quoted-
  // index reads of frozen fields and import lines are the tie/leg
  // plumbing (the established exemption) and are stripped before
  // matching; the needle then catches this cut re-declaring a frozen name
  // as its own.
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
  contractPaths.forEach((path, index) => {
    if (!path.includes("contracts")) return;
    const normalized = stripImports(
      stripQuotedIndexReads(texts[index]),
    );
    for (const needle of nameNeedles) {
      assert.ok(!normalized.includes(needle), `${path} carries frozen name ${needle} outside the leg plumbing`);
    }
  });

  // (e) the inventory union stays intact: the D-P15 inventory is the
  // imported base, and this cut's four agent-reach keys are quoted in
  // full — the composed walk is exactly one key longer per addition.
  const recordContractText = texts[0];
  assert.ok(
    recordContractText.includes("POND_STAGE_DP15_FORBIDDEN_SESSION_KEYS"),
    "the composed inventory must import the frozen D-P15 base",
  );
  for (const key of ["agentReply", "agentReplyComposition", "deliveredMessage", "replyComposition"]) {
    assert.ok(recordContractText.includes(`"${key}"`), `forbidden key ${key} missing from the contract inventory`);
  }

  // (f) the env-needle family stays out of every non-sanctioned file: this
  // cut has no secret-bearing ceremony, so no D-P15 env name appears in
  // any file of this cut. The ban matches the shared env prefix — strictly
  // wider than either full needle, and this walk itself never carries one.
  for (const path of [...contractPaths, "docs/stage-d-p16-pond-conversation-lane.md", "ui/pond-conversation.js"]) {
    const fileText = readModule(path);
    assert.ok(
      !fileText.includes("TOADAID_LIVE_"),
      `${path} carries a first-stage live-session env name`,
    );
  }

  // (g) the hand-written conversation module stays walked: no D-P9/D-P10
  // vocabulary (the established exemption names its files precisely), no
  // src import, no banned transport/store needle.
  const moduleText = readModule("ui/pond-conversation.js");
  assert.ok(
    !moduleText.includes("pond-local-principal-id-issuance") &&
      !moduleText.includes("pond-erc8004-identity-mapping") &&
      !moduleText.includes("pond-principal-identity-readiness-composition") &&
      !moduleText.includes("d-p9") &&
      !moduleText.includes("pond-private-read-activation") &&
      !moduleText.includes("pond-private-read-admission") &&
      !moduleText.includes("d-p10"),
    "the hand-written conversation module carries frozen D-P9/D-P10 vocabulary",
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
// contracts; the composer renders fail-closed; the fixture-clock shell
// drive runs the honest record-store lifecycle (establish → compose →
// refused compose → surface presented → retract → confined); the markup
// contract holds with the mic still disabled; the module texts and the
// package wiring hold.
// ---------------------------------------------------------------
block("uiWiring", () => {
  // (a) generated-bundle tie: the committed artifact is the only bridge
  // from the shell module to the contracts; its assessors recompute the
  // established arms identically to the src contracts.
  const srcRecordRun = assessPondConversationRecordAdmission(recordInputOf(admittedArm));
  const genRecordRun = assessGeneratedRecordAdmission(recordInputOf(admittedArm));
  assert.deepEqual(deepClone(genRecordRun), deepClone(srcRecordRun));
  const srcSurfaceRun = assessPondConversationSurfacePosture(surfaceInputOf(surfacePresentedArm));
  const genSurfaceRun = assessGeneratedSurfacePosture(surfaceInputOf(surfacePresentedArm));
  assert.deepEqual(deepClone(genSurfaceRun), deepClone(srcSurfaceRun));

  // The bundle's frozen leg records tie three ways: bundle ≡ fixture
  // ≡ the frozen D-P13 export entry.
  const tradingEntry = byLabel(stageDP13RoutingMatrix, "stage-d-p13:routing:trading-complete");
  assert.deepEqual(deepClone(pondStageDP13ForgeBindingRecord), deepClone(tradingEntry.forgeBindingRecord));
  assert.deepEqual(deepClone(pondStageDP13ModeDeclarationRecord), deepClone(tradingEntry.modeDeclarationRecord));
  assert.deepEqual(deepClone(pondStageDP13DeskSourceContractFixture), deepClone(tradingEntry.deskSourceContractFixture));
  assert.deepEqual(deepClone(pondStageDP13DeskPresenceProjection), deepClone(tradingEntry.deskPresenceProjection));

  // The bundle's record template plus the receiver-own fields equals the
  // pinned admitted record — the shell never restates a posture literal.
  const templateTie = {
    ...pondStageDP16ConversationRecordTemplate,
    composedRecordText: admittedArm.conversationRecord.composedRecordText,
    addressedAgentRef: admittedArm.conversationRecord.addressedAgentRef,
    conversationRecordMetadata: {
      ...pondStageDP16ConversationRecordTemplate.conversationRecordMetadata,
      composed_at_epoch_ms: admittedArm.conversationRecord.conversationRecordMetadata
        .composed_at_epoch_ms,
    },
  };
  assert.deepEqual(deepClone(templateTie), deepClone(admittedArm.conversationRecord));
  assert.deepEqual(
    deepClone(pondStageDP16ConversationSurfaceTemplate),
    deepClone(surfacePresentedArm.conversationSurfaceRecord),
  );

  // (b) render drive — fail-closed on missing document/nodes.
  assert.equal(renderPondConversation(undefined), false);
  const elementStub = () => {
    const element = {
      className: "",
      textContent: "",
      children: [],
      listeners: {},
      dataset: {},
      value: "",
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
      root: elementStub(),
      select: elementStub(),
      message: elementStub(),
      send: elementStub(),
      status: elementStub(),
      surface: elementStub(),
    };
    const created = [];
    return {
      nodes,
      created,
      querySelector(selector) {
        if (selector === "[data-conversation]") return nodes.root;
        if (selector === "[data-conversation-address]") return nodes.select;
        if (selector === "[data-conversation-composed-text]") return nodes.message;
        if (selector === "[data-conversation-send]") return nodes.send;
        if (selector === "[data-conversation-status]") return nodes.status;
        if (selector === "[data-conversation-surface]") return nodes.surface;
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
  assert.equal(renderPondConversation(missingStatus), false);
  const missingSurface = documentStub();
  missingSurface.nodes.surface = null;
  assert.equal(renderPondConversation(missingSurface), false);
  const missingSelect = documentStub();
  missingSelect.nodes.select = null;
  assert.equal(renderPondConversation(missingSelect), false);

  // (c) the render drive on the empty shell state: the honest
  // not-established posture, the empty composition refusal.
  const collectText = (node) =>
    [node.textContent, ...node.children.map(collectText)].join("\n");
  const liveDocument = documentStub();
  assert.equal(renderPondConversation(liveDocument), true);
  assert.equal(liveDocument.nodes.root.dataset.conversationRendered, "true");
  assert.match(collectText(liveDocument.nodes.status), /Conversation surface not presented/);
  assert.match(collectText(liveDocument.nodes.surface), /Conversation surface not presented/);
  // The select filled deterministically from the declared vocabulary.
  assert.deepEqual(
    liveDocument.created
      .filter((node) => node.tagName === "option")
      .map((node) => node.value),
    [
      stageDP0Agent0Ref,
      stageDP0CommunityAgentSlotRef,
      stageDP0ProjectAgentSlotRef,
    ]);
  // The empty-send refusal is a synchronous render.
  const sendClick = liveDocument.nodes.send.listeners.click[0];
  liveDocument.nodes.message.value = "";
  liveDocument.nodes.select.value = stageDP0Agent0Ref;
  assert.equal(typeof sendClick(), "undefined");
  assert.match(collectText(liveDocument.nodes.status), /Refused — an empty composition/);

  // (c2) the shell drive on the fixture clock — the full record-store
  // lifecycle: establish → compose → refused compose → presented surface
  // → retract → confined surface. Determinism comes from the contract's
  // purity, never from the wall clock.
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
  assert.equal(held.principalRef, stageDP0LocalPrincipalRef);

  // Compose once: a real composition records.
  const composeEpoch = nowMs + 1000;
  const composed = recordConversationComposedText({
    composedText: "Desk, we ride at dawn. Ready your structural reads.",
    addressedAgentRef: stageDP0Agent0Ref,
    composedAtEpochMs: composeEpoch,
    evaluatedAtEpochMs: composeEpoch,
  });
  assert.equal(composed.recorded, true, "the healthy composition must record");
  assert.equal(composed.assessment.reason, "all_conversation_record_checks_satisfied");
  assert.equal(
    composed.assessment.conversationRecordState,
    "conversation_record_admitted_session_scoped_no_delivery",
  );

  // Refused compositions store nothing: empty text, then an undeclared
  // agent address.
  const refusedEmpty = recordConversationComposedText({
    composedText: "",
    addressedAgentRef: stageDP0Agent0Ref,
    composedAtEpochMs: nowMs + 2000,
    evaluatedAtEpochMs: nowMs + 2000,
  });
  assert.equal(refusedEmpty.recorded, false);
  assert.equal(
    refusedEmpty.assessment.reason,
    "conversation_record_composed_text_empty_or_over_recorded_maximum",
  );
  const refusedUndeclared = recordConversationComposedText({
    composedText: "Addressed to nobody in particular.",
    addressedAgentRef: "agent:stage-d-p16:undeclared-agent",
    composedAtEpochMs: nowMs + 3000,
    evaluatedAtEpochMs: nowMs + 3000,
  });
  assert.equal(refusedUndeclared.recorded, false);
  assert.equal(
    refusedUndeclared.assessment.reason,
    "conversation_record_addressed_agent_not_declared",
  );

  // The presented surface: one recorded composition, the agent posture
  // presented from the receiver's own records.
  const surfaceRun = currentConversationSurfacePosture({
    evaluatedAtEpochMs: nowMs + 3000,
  });
  assert.equal(
    surfaceRun.assessment.conversationSurfaceState,
    "live_session_conversation_surface_presented",
  );
  assert.equal(surfaceRun.assessment.recordEntries.length, 1);
  assert.equal(
    surfaceRun.assessment.recordEntries[0].presentationTrustMark,
    "in_session_verified_boundary_session_scoped",
  );
  assert.equal(surfaceRun.recordTexts[0].composedText, "Desk, we ride at dawn. Ready your structural reads.");
  const agent0Echo = surfaceRun.assessment.agentPostureEchoes[0];
  assert.equal(agent0Echo.presentationAgentRef, stageDP0Agent0Ref);
  assert.equal(agent0Echo.echoedRoutingState, "declared_mode_routing_established");
  assert.equal(agent0Echo.echoedDeclaredProfile, "TRADING");
  assert.equal(surfaceRun.maximumComposedTextCharacters, 2000);

  // Retract: the surface ends; the recorded composition presents
  // inspection-only with its honest trust mark and never admits again.
  const retraction = retractLiveSession({ retractedAtEpochMs: nowMs + 4000 });
  assert.equal(retraction.retracted, true);
  const confinedRun = currentConversationSurfacePosture({
    evaluatedAtEpochMs: nowMs + 5000,
  });
  assert.equal(
    confinedRun.assessment.conversationSurfaceState,
    "conversation_surface_scope_ended_records_inspection_only",
  );
  assert.equal(
    confinedRun.assessment.reason,
    "live_session_not_established_refused_or_not_fresh",
  );
  assert.equal(
    confinedRun.assessment.mappedEstablishmentReason,
    "receiver_retraction_on_record",
  );
  assert.equal(
    confinedRun.assessment.recordEntries[0].presentationTrustMark,
    "out_of_session_record_not_admissible",
  );
  assert.equal(
    confinedRun.assessment.recordEntries[0].echoedRecordState,
    "conversation_record_not_admitted",
  );
  const reCompose = recordConversationComposedText({
    composedText: "Composing after retraction refuses.",
    addressedAgentRef: stageDP0Agent0Ref,
    composedAtEpochMs: nowMs + 6000,
    evaluatedAtEpochMs: nowMs + 6000,
  });
  assert.equal(reCompose.recorded, false);
  assert.equal(
    reCompose.assessment.reason,
    "live_session_read_gate_not_live_activated_refused_or_not_fresh",
  );
  // The confined surface still carries exactly one recorded entry.
  assert.equal(confinedRun.assessment.recordEntries.length, 1);

  // (d) markup contract on ui/pond-desktop.html — the composer revival is
  // additive and the mic stays disabled.
  const html = readModule("ui/pond-desktop.html");
  assert.match(html, /data-conversation aria-label="Conversation composer">/);
  assert.match(html, /Message a specialist agent/);
  assert.match(html, /data-conversation-address/);
  assert.match(html, /data-conversation-composed-text/);
  assert.match(html, /data-conversation-send/);
  assert.match(html, /data-conversation-status/);
  assert.match(html, /data-conversation-surface/);
  assert.match(html, /mic-button" type="button" disabled/);
  const liveSessionTag = html.indexOf('src="pond-live-session.js"');
  const conversationTag = html.indexOf('src="pond-conversation.js"');
  const shellTag = html.indexOf('src="pond-shell.js"');
  assert.ok(liveSessionTag !== -1 && conversationTag !== -1 && shellTag !== -1);
  assert.ok(liveSessionTag < conversationTag, "the conversation module loads after the live session module");
  assert.ok(conversationTag < shellTag, "the conversation module loads before the shell module");

  // (e) module-text hygiene and package.json wiring.
  const liveSessionText = readModule("ui/pond-live-session.js");
  assert.match(liveSessionText, /export const heldLiveSessionRecords = \(\{\s*evaluatedAtEpochMs \}\)/);
  const packageJson = JSON.parse(readModule("package.json"));
  assert.equal(
    packageJson.scripts["test:stage-d-p16"],
    "node scripts/pond-conversation-record-admission-selftest.mjs",
  );
  assert.equal(
    packageJson.scripts["stage-d:render-live-session-conversation"],
    "node scripts/render-stage-d-live-session-conversation.mjs",
  );
  const ci = readModule(".github/workflows/ci.yml");
  assert.equal(ci.split("Verify Stage D-P16 pond conversation lane").length - 1, 2);
});

console.log(`POND_STAGE_DP16_POND_CONVERSATION_LANE_SELFTEST_PASS · ${blocks} blocks`);