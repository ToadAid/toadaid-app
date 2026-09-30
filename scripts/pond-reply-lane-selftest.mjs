// Stage D-P21 selftest: the Pond agent-reply lane — one selftest over
// the three contracts of the cut. The matrix block proves every reply-
// request arm, every provider-selection arm, and every claimed-reply
// wall arm agrees with its real assessor deep-equal and deep-frozen
// with all-false ceilings on every arm; the identity ties prove the
// request's gate legs cannot drift from the frozen D-P20 policy arms
// (the D-P18-arm subtraction) and the requested copy cannot drift from
// the frozen D-P16 record arms, that the requested copy keeps the D-P16
// dv and kind verbatim (never re-stamped), that the clock pins descend
// arithmetically with the full lifecycle-order proof and the
// staleness-unreachability honesty (the request event must postdate the
// composition it requests a reply to, so its own staleness cause is
// reachable on this clock only via a future event), that the exactly-one
// performable provider selection is the local runtime, and the assessor
// plumbing ties through the committed bundle; the negatives block
// refuses every refused request and provider basis on its own check
// alone with every leg echo green, every incoherent provider selection
// at its dedicated cause with the selection echoed, every invalid,
// freshness, and scope arm, and every wall class at its own cause; the
// lifecycle block proves the ladder-order freshness honesty — the
// future request event refuses on its own diagnosis while the D-P16
// re-run stays green, a stale evaluation makes the D-P16 re-run refuse
// FIRST while the request's own diagnosis still carries its honest
// verdict, and the re-assess-after-retraction honesty for BOTH records
// against the D-P19 receipt's frozen-at-issuance contrast (the D-P20
// policy posture continues one lane deeper); the fail-closed block
// refuses garbage without throwing on all three contracts; the ceiling
// block proves the inventory slices and the widen probes (the D-P20
// union plus exactly four reply-lane keys); the claim-tie block proves
// no reply-destination field exists, the wall echoes NOTHING about any
// claim (zero claimed-* fields and no claim value anywhere in a refusal
// — not even text this receiver composed), the provider record carries
// no model or harness reference, and the request echoes no reply text;
// the hygiene block walks DOM needles, network constants, banned frozen
// names, and the env-prefix family; and the ui wiring block proves the
// committed generated bundle, the shell module's walks, and the
// fixture-clock shell drive — establish, compose, RECORD THE REPLY
// REQUEST, record the provider decision, refused replay for both,
// out-of-range index for both, the delivery lanes asserted untouched,
// then retract with BOTH rows confined verbatim (count-stable, never
// deleted) and the wall holding unchanged. Offline structural; no
// env-gated block exists in this cut (it holds no secret-bearing
// ceremony).

import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  stageDP21ReplyRequestMatrix,
  stageDP21ProviderDecisionMatrix,
  stageDP21ClaimedReplyMatrix,
  stageDP21ReceiverRef,
  stageDP21Agent0Ref,
  stageDP21CommunitySlotRef,
  stageDP21ReplyRequestEvaluatedAtEpochMs,
  stageDP21ReplyRequestEventAtEpochMs,
  stageDP21ProviderDecisionEventAtEpochMs,
  stageDP21FutureReplyRequestEventAtEpochMs,
  stageDP21FutureProviderDecisionEventAtEpochMs,
  stageDP21PreScopeRequestEventAtEpochMs,
  stageDP21PreEstablishmentRequestEventAtEpochMs,
  stageDP21RetractedRequestEventAtEpochMs,
  stageDP21RetractedProviderDecisionEventAtEpochMs,
  stageDP21RetractedRequestEvaluatedAtEpochMs,
  stageDP21PreRequestProviderDecisionEventAtEpochMs,
  stageDP21GateExpiryReassessmentEvaluatedAtEpochMs,
  stageDP21ConversationExpiryReassessmentEvaluatedAtEpochMs,
  stageDP21RequestExpiryReassessmentEvaluatedAtEpochMs,
  stageDP21ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p21-pond-replies.ts";
import {
  assessPondReplyRequestDecision,
  POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS,
} from "../src/contracts/pond-reply-request-decision.ts";
import {
  assessPondCognitionProviderDecision,
  POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS,
} from "../src/contracts/pond-cognition-provider-decision.ts";
import {
  assessPondClaimedAgentReplyRefusal,
  POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES,
} from "../src/contracts/pond-claimed-agent-reply-refusal.ts";

import {
  stageDP20TransportPolicyMatrix,
  stageDP20PolicyEventAtEpochMs,
  stageDP20PolicyEvaluatedAtEpochMs,
  stageDP20GateExpiryPolicyEvaluatedAtEpochMs,
  stageDP20ReceiverMaximumAgeMs,
  stageDP17ReadGateRecord,
} from "../src/fixtures/stage-d-p20-pond-transport.ts";
import { POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS } from "../src/contracts/pond-transport-policy-decision.ts";

import {
  stageDP19ReceiptMatrix,
} from "../src/fixtures/stage-d-p19-pond-receipts.ts";

import {
  stageDP16RecordMatrix,
} from "../src/fixtures/stage-d-p16-pond-conversation.ts";

import {
  stageDP15SessionEntryLiveSessionEstablished,
  stageDP15EvaluatedAtEpochMs,
} from "../src/fixtures/stage-d-p15-live-session.ts";
import { stageDP6AuthenticationObservationComplete } from "../src/fixtures/stage-d-p6-local-principal-authentication-observation.ts";

import {
  assessPondReplyRequestDecision as assessGeneratedReplyRequestDecision,
  assessPondCognitionProviderDecision as assessGeneratedProviderDecision,
  assessPondClaimedAgentReplyRefusal as assessGeneratedClaimedReplyRefusal,
  pondStageDP21ReplyRequestTemplate,
  pondStageDP21ProviderDecisionTemplate,
} from "../ui/generated/pond-stage-d-live-session-replies.js";
import {
  currentClaimedReplyWallPosture,
  currentReplyPosture,
  heldReplyRequestEntries,
  recordCognitionProviderDecision,
  recordReplyRequest,
  renderPondReplies,
} from "../ui/pond-replies.js";
import { recordConversationComposedText } from "../ui/pond-conversation.js";
import { establishLiveSession, retractLiveSession } from "../ui/pond-live-session.js";
import { heldDeliveryDecisions } from "../ui/pond-delivery.js";
import { heldDispatchDecisions } from "../ui/pond-dispatch.js";

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

// Input-shape helpers: the reply-fixture entries carry exactly the
// assessor input the contract demands — the input builder re-assembles
// it in the contract's exact key order so the recompute is a clean
// re-run.
const REPLY_REQUEST_INPUT_KEYS = [
  "replyRequest",
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

// The 13 shared gate legs (request legs minus the request) tie against
// the frozen D-P20 policy arms.
const GATE_LEG_KEYS = REPLY_REQUEST_INPUT_KEYS.filter(
  (key) => key !== "replyRequest",
);

// The 15-key provider input: the request's 14 keys plus the decision.
const PROVIDER_INPUT_KEYS = [...REPLY_REQUEST_INPUT_KEYS, "providerDecision"];

const requestInputOf = (entry) => {
  const input = {};
  for (const key of REPLY_REQUEST_INPUT_KEYS) input[key] = entry[key];
  return input;
};
const providerInputOf = (entry) => {
  const input = {};
  for (const key of PROVIDER_INPUT_KEYS) input[key] = entry[key];
  return input;
};
const wallInputOf = (entry) => ({
  claimedAgentReply: entry.claimedAgentReply,
});

const byLabel = (matrix, label) => {
  const entry = matrix.find((candidate) => candidate.fixtureLabel === label);
  assert.ok(entry, `missing fixture arm: ${label}`);
  return entry;
};

const evaluated = stageDP21ReplyRequestEvaluatedAtEpochMs;
const maximumAge = stageDP21ReceiverMaximumAgeMs;

const requestAdmittedArm = byLabel(
  stageDP21ReplyRequestMatrix,
  "reply_request_recorded_session_scoped_agent0",
);
const requestCommunityArm = byLabel(
  stageDP21ReplyRequestMatrix,
  "reply_request_recorded_session_scoped_community_slot",
);
const providerRecordedArm = byLabel(
  stageDP21ProviderDecisionMatrix,
  "provider_decision_recorded_local_runtime_ollama",
);
const providerCommunityArm = byLabel(
  stageDP21ProviderDecisionMatrix,
  "provider_decision_recorded_local_runtime_ollama_over_community_slot_request",
);

// The cut's own fresh runs — only D-P21 assessments ever land here.
const freshRuns = [];
const runRequest = (entry) => {
  const fresh = assessPondReplyRequestDecision(requestInputOf(entry));
  freshRuns.push(fresh);
  return fresh;
};
const runFreshRequest = (input) => assessPondReplyRequestDecision(input);
const runProvider = (entry) => {
  const fresh = assessPondCognitionProviderDecision(providerInputOf(entry));
  freshRuns.push(fresh);
  return fresh;
};
const runFreshProvider = (input) => assessPondCognitionProviderDecision(input);
const wallFreshRuns = [];
const runWall = (entry) => {
  const fresh = assessPondClaimedAgentReplyRefusal(wallInputOf(entry));
  wallFreshRuns.push(fresh);
  return fresh;
};
const runFreshWall = (input) => assessPondClaimedAgentReplyRefusal(input);

// The all-false ceiling families of this cut — all THREE contracts
// walked literally on every arm: the request ceiling (a sender-side ask
// that grants nothing), the provider ceiling (a declaration of what a
// future runtime would ride, consumed by nothing this cut), and the
// wall ceiling (a refusal echoes nothing about any claim).
const REQUEST_CEILING_KEYS = [
  "replyRequestEstablishesReplyComposition",
  "replyRequestEstablishesCognitionRuntime",
  "replyRequestEstablishesProviderSelection",
  "replyRequestEstablishesAgentIdentityOrAdmission",
  "replyRequestEstablishesGrant",
  "replyRequestEstablishesConsequenceOrExecution",
  "replyRequestEstablishesAcceptanceOrTaskAgreement",
  "replyRequestEstablishesAuthorityFromProse",
  "replyRequestEstablishesMembershipOrRoomPresence",
  "replyRequestEstablishesScope",
  "replyRequestEchoesReplyText",
  "replyRequestConsumedByAnyRuntimeOrComposerThisCut",
  "credentialAdmitted",
  "principalIdAcceptedAsAuthorization",
  "personalMemoryContentAdmitted",
  "currentTruthAdmitted",
];

const PROVIDER_CEILING_KEYS = [
  "providerDecisionEstablishesCognitionRuntimeOrModelAccess",
  "providerDecisionEstablishesAgentReplyComposition",
  "providerDecisionEstablishesAgentIdentityOrAdmission",
  "providerDecisionPerformsInference",
  "providerDecisionPerformsAuthenticationOrProviderContact",
  "providerDecisionRoutesSendsOrStoresReplyText",
  "providerDecisionPerformsSilentFallback",
  "providerDecisionEstablishesGrant",
  "providerDecisionEstablishesConsequenceOrExecution",
  "providerDecisionEstablishesAuthorityFromProse",
  "providerDecisionEstablishesMembershipOrAdmission",
  "providerDecisionEstablishesScope",
  "providerDecisionConsumedThisCut",
  "credentialAdmitted",
  "principalIdAcceptedAsAuthorization",
  "currentTruthAdmitted",
];

const WALL_CEILING_KEYS = [
  "claimedReplyEstablishesAgentReplyComposition",
  "claimedReplyEstablishesAgentIdentity",
  "claimedReplyEstablishesAdmission",
  "claimedReplyEstablishesAuthority",
  "claimedReplyEstablishesProviderSessionAsAgent",
  "claimedReplyTextEchoed",
  "claimedReplyTextStored",
  "claimedResponderIdentityEchoed",
  "claimedResponderIdentityAcceptedAsIdentity",
  "claimedReplySourceClassEchoed",
  "claimedReplyEstablishesConversationRecord",
  "claimedReplyEstablishesGrant",
  "claimedReplyEstablishesConsequenceOrExecution",
  "claimedReplyEstablishesMembership",
  "credentialAdmitted",
  "principalIdAcceptedAsAuthorization",
];

// The recorded reply-request record's exact key set — pinned here so the
// claim-tie block and the ceiling block can lean on the shape. No
// destination field and no reply-text field exist: the addressed agent
// flows through the requested copy's own addressedAgentRef.
const REQUEST_RECORD_KEYS = [
  "contractVersion",
  "kind",
  "principalRef",
  "replyRequestBasis",
  "requestedConversationRecord",
  "replyRequestMetadata",
  "replyRequestCompositionPosture",
  "replyRequestCognitionPosture",
  "replyRequestProviderPosture",
  "replyRequestRunwayPosture",
  "replyRequestLifecyclePosture",
  "replyRequestEvidencePosture",
  "replyRequestAuthorityPosture",
  "authority",
];

// The provider-decision record's exact key set — 20 keys, no model or
// harness reference, no credential, no reply text, no composition
// output.
const PROVIDER_RECORD_KEYS = [
  "contractVersion",
  "kind",
  "principalRef",
  "providerDecisionBasis",
  "backendClass",
  "selectedBackendId",
  "accessMechanism",
  "credentialCustodyClass",
  "dataBoundaryClass",
  "supportTier",
  "providerDecisionMetadata",
  "providerDecisionRuntimePosture",
  "providerDecisionInferencePosture",
  "providerDecisionIdentityPosture",
  "providerDecisionAccessPosture",
  "providerDecisionBoundaryPosture",
  "providerDecisionFallbackPosture",
  "providerDecisionReplyPosture",
  "providerDecisionConsumptionPosture",
  "authority",
];

// Walk a value's strings against a probe — the zero-echo proof leans on
// it for every wall arm.
const carriesString = (value, probe) => {
  if (typeof value === "string") return value.includes(probe);
  if (value === null || typeof value !== "object") return false;
  return Object.values(value).some((entry) => carriesString(entry, probe));
};

// The five refused reply-request bases; each refuses on the basis check
// alone, every leg echo green.
const REFUSED_REQUEST_BASES = [
  "inferred_from_conversation_composition",
  "asserted_by_model_completion",
  "inferred_from_delivered_receipt",
  "inferred_from_provider_session",
  "replayed_from_prior_reply_request",
];

// The seven declared provider vocabularies re-declared verbatim — the
// external selections probed fresh in the negatives block.
const CLOUD_PROVIDER_IDS = ["openai", "google", "xai", "anthropic", "deepseek"];
const ACCESS_MECHANISMS = [
  "api_key",
  "delegated_oauth",
  "interactive_subscription",
  "workload_identity",
  "local_runtime",
  "community_gateway",
];
const CUSTODY_CLASSES = [
  "toadaid_managed",
  "principal_managed",
  "delegated",
  "local_operator",
  "community_managed",
];
const DATA_BOUNDARIES = [
  "external_cloud",
  "local_operator_controlled",
  "community_governed",
];
const SUPPORT_TIERS = [
  "launch_primary",
  "premium",
  "standard",
  "experimental",
  "preview",
  "community",
  "sovereign_local",
];

// The three declared claimed-reply source classes — a claim-recognition
// vocabulary, never declared intake (the D-P20 intake constant declared
// a channel for intake; this declares where a claim SAYS text came
// from, and every class still refuses).
const CLAIMED_REPLY_SOURCE_CLASSES = [
  "receiver_session",
  "agent_runtime",
  "provider_output",
];

// ---------------------------------------------------------------
// Block 1: matrix recompute — every reply-request arm deep-equals its
// pinned assessment, every arm and assessment is deep-frozen, the two
// recorded request arms carry the exact positive verdicts with the
// honest freshness arithmetic, every arm's ceiling stays all-false;
// every provider arm likewise; every wall arm refuses with the wall
// ceiling all-false and the single refusing state.
// ---------------------------------------------------------------
block("matrix", () => {
  assert.equal(
    stageDP21ReplyRequestMatrix.length,
    19,
    "the reply-request matrix is pinned at 19 arms",
  );
  assert.equal(
    stageDP21ProviderDecisionMatrix.length,
    19,
    "the provider-decision matrix is pinned at 19 arms",
  );
  assert.equal(
    stageDP21ClaimedReplyMatrix.length,
    10,
    "the claimed-reply matrix is pinned at 10 arms",
  );
  for (const arm of stageDP21ReplyRequestMatrix) {
    assert.ok(arm.fixtureLabel, "every arm carries a fixture label");
    const fresh = runRequest(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `arm ${arm.fixtureLabel}`);
    assert.equal(
      fresh.contractVersion,
      "pond-reply-request-decision-d-p21",
      arm.fixtureLabel,
    );
    assert.ok(
      fresh.replyRequestState === "reply_request_not_recorded" ||
        fresh.replyRequestState ===
          "reply_request_recorded_session_scoped_no_reply_composed",
      arm.fixtureLabel,
    );
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.satisfiedChecks), arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.unsatisfiedChecks), arm.fixtureLabel);
    assertLacksKeys(
      fresh,
      POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS,
      `arm ${arm.fixtureLabel}`,
    );
    for (const ceilingKey of REQUEST_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }

  // Both recorded request arms carry the full positive verdict with the
  // request recorded as session-scoped governance that grants nothing.
  for (const satisfiedArm of [requestAdmittedArm, requestCommunityArm]) {
    assert.equal(
      satisfiedArm.assessment.replyRequestState,
      "reply_request_recorded_session_scoped_no_reply_composed",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.reason,
      "all_reply_request_checks_satisfied",
      satisfiedArm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(satisfiedArm.assessment.replyRequestEventFreshnessDiagnosis),
      { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 2000 },
      `${satisfiedArm.fixtureLabel}: the request event's freshness arithmetic is exact`,
    );
    assert.equal(
      satisfiedArm.assessment.mappedConversationState,
      "conversation_record_admitted_session_scoped_no_delivery",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.replyRequestRetentionPosture,
      "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      satisfiedArm.fixtureLabel,
    );
    assert.deepEqual(
      Object.keys(satisfiedArm.replyRequest).sort(),
      [...REQUEST_RECORD_KEYS].sort(),
      `${satisfiedArm.fixtureLabel}: the request record has exactly the pinned keys`,
    );
    assert.equal(satisfiedArm.replyRequest.authority, "none", satisfiedArm.fixtureLabel);
    // The event time is the pinned instant on both recorded arms.
    assert.equal(
      satisfiedArm.replyRequest.replyRequestMetadata.requested_at_epoch_ms,
      stageDP21ReplyRequestEventAtEpochMs,
      `${satisfiedArm.fixtureLabel}: the request event is the pinned instant`,
    );
  }
  assert.equal(
    requestAdmittedArm.assessment.mappedConversationReassessmentReason,
    "all_conversation_record_checks_satisfied",
    "the agent-0 request re-inspects its D-P16 record green verbatim",
  );

  for (const arm of stageDP21ProviderDecisionMatrix) {
    assert.ok(arm.fixtureLabel, "every provider arm carries a fixture label");
    const fresh = runProvider(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `provider arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `provider arm ${arm.fixtureLabel}`);
    assert.equal(
      fresh.contractVersion,
      "pond-cognition-provider-decision-d-p21",
      arm.fixtureLabel,
    );
    assert.ok(
      fresh.providerDecisionState === "provider_decision_not_recorded" ||
        fresh.providerDecisionState ===
          "provider_decision_recorded_session_scoped_no_runtime_established",
      arm.fixtureLabel,
    );
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.equal(fresh.providerDecisionConsumedThisCut, false, arm.fixtureLabel);
    assert.equal(fresh.providerDecisionPerformsInference, false, arm.fixtureLabel);
    assert.equal(fresh.providerDecisionPerformsSilentFallback, false, arm.fixtureLabel);
    assertLacksKeys(
      fresh,
      POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS,
      `provider arm ${arm.fixtureLabel}`,
    );
    for (const ceilingKey of PROVIDER_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `provider ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }

  // Both recorded provider arms carry the full positive verdict with the
  // ONE performable selection echoed verbatim.
  for (const satisfiedArm of [providerRecordedArm, providerCommunityArm]) {
    assert.equal(
      satisfiedArm.assessment.providerDecisionState,
      "provider_decision_recorded_session_scoped_no_runtime_established",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.reason,
      "all_provider_decision_checks_satisfied",
      satisfiedArm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(satisfiedArm.assessment.recordedProviderSelection),
      deepClone(POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS[0]),
      `${satisfiedArm.fixtureLabel}: the ONE performable selection is echoed verbatim`,
    );
    assert.equal(
      satisfiedArm.assessment.mappedReplyRequestState,
      "reply_request_recorded_session_scoped_no_reply_composed",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.mappedReplyRequestReassessmentReason,
      "all_reply_request_checks_satisfied",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.mappedConversationState,
      "conversation_record_admitted_session_scoped_no_delivery",
      satisfiedArm.fixtureLabel,
    );
    assert.equal(
      satisfiedArm.assessment.providerDecisionRetentionPosture,
      "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
      satisfiedArm.fixtureLabel,
    );
    assert.deepEqual(
      Object.keys(satisfiedArm.providerDecision).sort(),
      [...PROVIDER_RECORD_KEYS].sort(),
      `${satisfiedArm.fixtureLabel}: the provider record has exactly the pinned keys`,
    );
    assert.equal(
      satisfiedArm.providerDecision.providerDecisionMetadata.recorded_at_epoch_ms,
      stageDP21ProviderDecisionEventAtEpochMs,
      `${satisfiedArm.fixtureLabel}: the decision event is the pinned instant`,
    );
  }

  // Every wall arm refuses — one state, the standing posture, the wall
  // ceiling all-false, and zero claim echo on every arm (not even of the
  // receiver-composed text arm whose text is a known D-P16 fact).
  for (const arm of stageDP21ClaimedReplyMatrix) {
    assert.ok(arm.fixtureLabel, "every wall arm carries a fixture label");
    const fresh = runWall(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `wall arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `wall arm ${arm.fixtureLabel}`);
    assert.equal(
      fresh.claimedReplyState,
      "claimed_reply_not_composed",
      arm.fixtureLabel,
    );
    // The version marks the refusal's own declarative state: a
    // well-shaped claim keeps the cut's version; an invalid claim
    // refuses as invalid (the honest fallback).
    assert.ok(
      fresh.claimedReplyRefusalVersion ===
      (fresh.reason === "claimed_agent_reply_claim_invalid"
        ? "invalid"
        : "pond-claimed-agent-reply-refusal-d-p21"),
      arm.fixtureLabel,
    );
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assertLacksKeys(
      fresh,
      POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS,
      `wall arm ${arm.fixtureLabel}`,
    );
    for (const ceilingKey of WALL_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `wall ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
    const claim = arm.claimedAgentReply ?? {};
    // The zero-echo probe walks the claim's VALUES (the text and the
    // responder). The declared source-class literal is not probed as a
    // value: the terminal cause names the declared vocabulary literal
    // by way of its own cause name — an honest vocabulary reference,
    // never the echo of a claim.
    const claimValues = [
      claim.claimedReplyText,
      claim.claimedResponderRef,
    ].filter((value) => typeof value === "string" && value.length > 0);
    for (const value of claimValues) {
      assert.ok(
        !carriesString(fresh, value),
        `wall arm ${arm.fixtureLabel} echoes a claimed value: ${value}`,
      );
    }
  }
});

// ---------------------------------------------------------------
// Block 2: identity ties — the request's gate legs cannot drift from the
// frozen D-P20 policy arms; the requested copy cannot drift from the
// frozen D-P16 record arms and keeps the D-P16 dv and kind verbatim;
// the exactly-one performable selection is the local runtime; the clock
// pins descend arithmetically with the full lifecycle-order proof and
// the staleness-unreachability honesty; and the assessor plumbing ties
// through the committed bundle.
// ---------------------------------------------------------------
block("identityTies", () => {
  const dp20RecordedArm = byLabel(
    stageDP20TransportPolicyMatrix,
    "transport_policy_recorded_in_process_agent0",
  );
  // The 13 shared gate legs tie against the frozen D-P20 recorded arm's
  // legs by subtraction. A drifted leg is a silently widened session —
  // the tie refuses it whole.
  for (const key of GATE_LEG_KEYS) {
    assert.deepEqual(
      deepClone(requestAdmittedArm[key]),
      deepClone(dp20RecordedArm[key]),
      `the reply-request leg ${key} refuses to drift from the frozen D-P20 policy arm`,
    );
  }

  // The requested copy cannot drift from the frozen D-P16 record arm.
  const dp16Agent0Arm = byLabel(
    stageDP16RecordMatrix,
    "conversation_record_admitted",
  );
  const dp16CommunityArm = byLabel(
    stageDP16RecordMatrix,
    "conversation_record_admitted_community_slot",
  );
  assert.deepEqual(
    deepClone(
      requestAdmittedArm.replyRequest.requestedConversationRecord,
    ),
    deepClone(dp16Agent0Arm.conversationRecord),
    "the agent-0 request's requested copy refuses to drift from the frozen D-P16 record",
  );
  assert.deepEqual(
    deepClone(
      requestCommunityArm.replyRequest.requestedConversationRecord,
    ),
    deepClone(dp16CommunityArm.conversationRecord),
    "the community request's requested copy refuses to drift from the frozen D-P16 record",
  );
  // The requested copy keeps the D-P16 dv and kind verbatim — never
  // re-stamped.
  assert.equal(
    requestAdmittedArm.replyRequest.requestedConversationRecord.contractVersion,
    "pond-conversation-record-admission-d-p16",
    "the requested copy keeps the D-P16 contract version verbatim",
  );
  assert.equal(
    requestAdmittedArm.replyRequest.requestedConversationRecord.kind,
    "pond-conversation-record",
    "the requested copy keeps the D-P16 kind verbatim",
  );
  // The provider lane's legs tie against the same frozen D-P20 arm.
  for (const key of GATE_LEG_KEYS) {
    assert.deepEqual(
      deepClone(providerRecordedArm[key]),
      deepClone(dp20RecordedArm[key]),
      `the provider-entry leg ${key} refuses to drift from the frozen D-P20 policy arm`,
    );
  }

  // The ONE performable selection is exactly the local runtime — no
  // cloud id, no gateway, no credential path anywhere in the list.
  assert.deepEqual(deepClone(POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS), [
    {
      backendClass: "local_runtime",
      selectedBackendId: "ollama",
      accessMechanism: "local_runtime",
      credentialCustodyClass: "local_operator",
      dataBoundaryClass: "local_operator_controlled",
      supportTier: "sovereign_local",
    },
  ]);

  // The declared vocabularies' breadth — claimed from the frozen probe
  // walk in the negatives block; the declared source classes tie here.
  assert.deepEqual(
    [...POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES],
    CLAIMED_REPLY_SOURCE_CLASSES,
  );
  assert.equal(POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES.length, 3);

  // The clock pins: full lifecycle-order proof over the frozen chain and
  // this cut's two events.
  assert.ok(
    stageDP20PolicyEventAtEpochMs === 1800000084500 &&
      stageDP21ReplyRequestEventAtEpochMs === 1800000088000 &&
      stageDP21ProviderDecisionEventAtEpochMs === 1800000088500 &&
      evaluated === 1800000090000,
    "this cut's two events ride after the frozen D-P20 policy event and before the shared evaluation",
  );
  assert.ok(
    stageDP20PolicyEventAtEpochMs <
      stageDP21ReplyRequestEventAtEpochMs <
      stageDP21ProviderDecisionEventAtEpochMs <=
      evaluated,
    "the lifecycle order is arithmetic: policy, request, provider, evaluation",
  );
  assert.ok(
    stageDP21FutureReplyRequestEventAtEpochMs > evaluated &&
      stageDP21FutureProviderDecisionEventAtEpochMs > evaluated,
    "the future events sit beyond the evaluation instant",
  );
  assert.ok(
    stageDP21PreScopeRequestEventAtEpochMs === 1800000060500 &&
      stageDP21PreScopeRequestEventAtEpochMs > 1800000060000 &&
      stageDP21PreScopeRequestEventAtEpochMs < 1800000061000,
    "the pre-scope request event sits between the establishment and the composition",
  );
  assert.ok(
    stageDP21PreEstablishmentRequestEventAtEpochMs < 1800000060000,
    "the pre-establishment request event precedes the session",
  );
  assert.ok(
    stageDP21RetractedRequestEventAtEpochMs === 1800000068000 &&
      stageDP21RetractedProviderDecisionEventAtEpochMs === 1800000068500 &&
      stageDP21RetractedRequestEvaluatedAtEpochMs === 1800000082000 &&
      stageDP21PreRequestProviderDecisionEventAtEpochMs === 1800000087900,
    "the retracted and pre-request pins are the declared instants",
  );
  assert.ok(
    stageDP21GateExpiryReassessmentEvaluatedAtEpochMs === 1800000120001 &&
      stageDP21ConversationExpiryReassessmentEvaluatedAtEpochMs ===
        1800000121001 &&
      stageDP21RequestExpiryReassessmentEvaluatedAtEpochMs === 1800000148001,
    "the reassessment-refusal pins are past their own lane instant",
  );
  assert.ok(
    stageDP20GateExpiryPolicyEvaluatedAtEpochMs === 1800000120001,
    "the pinned read-gate expiry ties the frozen D-P20 pin",
  );
  // Both freshness windows are exact arithmetic from the frozen pins.
  assert.deepEqual(
    deepClone(requestAdmittedArm.assessment.replyRequestEventFreshnessDiagnosis),
    {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: evaluated - stageDP21ReplyRequestEventAtEpochMs,
    },
    "the request event's freshness arithmetic is the declared pins",
  );
  assert.deepEqual(
    deepClone(providerRecordedArm.assessment.providerDecisionEventFreshnessDiagnosis),
    {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: evaluated - stageDP21ProviderDecisionEventAtEpochMs,
    },
    "the decision event's freshness arithmetic is the declared pins",
  );

  // The staleness-unreachability honesty: the request event must
  // postdate the composition it requests a reply to (88000 > 61000) and
  // the composition postdates the establishment, so the earliest
  // in-scope request event is 61000 — while the staleness boundary is
  // evaluated − 60000 = 30000. No in-scope event can ever be stale on
  // this clock: the request's own staleness cause is reachable ONLY via
  // a future event (and the future arm proves exactly that path).
  const stalenessBoundary = evaluated - maximumAge;
  assert.equal(stalenessBoundary, 1800000030000, "the staleness boundary");
  assert.ok(
    stalenessBoundary < 1800000061000,
    "the staleness boundary precedes the earliest in-scope request event — the staleness refusal is a future-event-only cause on this clock",
  );
  assert.ok(
    stageDP21ReplyRequestEventAtEpochMs > 1800000061000,
    "the request event postdates the composition it requests a reply to",
  );

  // The D-P21 receiver and agent refs tie the frozen D-P0 family.
  assert.equal(stageDP21ReceiverRef, "principal:fixture:stage-d-p0:local-principal");
  assert.equal(stageDP21Agent0Ref, "agent:fixture:stage-d-p0:trading-desk-agent0");
  assert.equal(
    stageDP21CommunitySlotRef,
    "agent:fixture:stage-d-p0:community-agent-slot",
  );
  assert.equal(requestAdmittedArm.replyRequest.principalRef, stageDP21ReceiverRef);
  assert.equal(providerRecordedArm.providerDecision.principalRef, stageDP21ReceiverRef);
  assert.equal(maximumAge, stageDP20ReceiverMaximumAgeMs, "the maximum age ties the frozen D-P2 machinery");
  assert.equal(stageDP17ReadGateRecord !== null, true, "the D-P20 fixture's riding read-gate copy stays readable");
});

// ---------------------------------------------------------------
// Block 3: recompute-agreement negatives — every refused request basis
// on its own check alone with every leg echo green; every refused
// provider basis alike; every incoherent provider selection at its
// dedicated cause with the selection echoed and the request re-run
// green; every invalid, future, pre-scope, and non-object arm; and
// every wall class at its own cause.
// ---------------------------------------------------------------
block("recomputeAgreementNegatives", () => {
  for (const basis of REFUSED_REQUEST_BASES) {
    const arm = byLabel(
      stageDP21ReplyRequestMatrix,
      `reply_request_refused_basis_${basis}`,
    );
    const fresh = runRequest(arm);
    assert.equal(fresh.replyRequestState, "reply_request_not_recorded", arm.fixtureLabel);
    assert.equal(fresh.reason, "receiver_reply_request_proof_incomplete", arm.fixtureLabel);
    assert.deepEqual(
      fresh.unsatisfiedChecks,
      ["reply_request_basis_receiver_recorded_not_inferred"],
      arm.fixtureLabel,
    );
    assert.equal(fresh.satisfiedChecks.length, 7, arm.fixtureLabel);
    // Every leg echo stays green (L49-55): the basis is the only failure.
    assert.equal(
      fresh.mappedConversationState,
      "conversation_record_admitted_session_scoped_no_delivery",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedConversationReassessmentReason,
      "all_conversation_record_checks_satisfied",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedEstablishmentState,
      "live_session_scoped_authentication_established",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      arm.fixtureLabel,
    );
    assert.equal(fresh.replyRequestEventFreshnessDiagnosis.state, "fresh", arm.fixtureLabel);
  }

  // The future request event: the request's OWN freshness cause fires
  // while the D-P16 re-run stays green (the ladder-order honesty —
  // proven against the staleness-unreachability arithmetic in block 2
  // that no in-scope event can be stale on this clock).
  const futureRun = runRequest(
    byLabel(stageDP21ReplyRequestMatrix, "reply_request_event_in_future"),
  );
  assert.equal(futureRun.reason, "reply_request_event_not_session_current");
  assert.equal(
    futureRun.mappedConversationState,
    "conversation_record_admitted_session_scoped_no_delivery",
    "the D-P16 re-run stays green while the request event is in the future",
  );
  assert.deepEqual(
    deepClone(futureRun.replyRequestEventFreshnessDiagnosis),
    { state: "unknown", reason: "observation_time_in_future", observationAgeMs: null },
  );

  // The pre-scope and pre-establishment request events refuse at the
  // scope cause with the D-P16 re-run still green.
  for (const label of [
    "reply_request_event_before_the_requested_composition",
    "reply_request_event_before_session_establishment",
  ]) {
    const fresh = runRequest(byLabel(stageDP21ReplyRequestMatrix, label));
    assert.equal(fresh.reason, "reply_request_event_not_of_the_current_session_scope", label);
    assert.equal(
      fresh.mappedConversationState,
      "conversation_record_admitted_session_scoped_no_delivery",
      label,
    );
  }

  // The invalid-cause arms: a missing key, an extra forbidden key, and
  // a tampered posture literal — all refuse at the invalid cause with
  // the version marked invalid, the honest fallback diagnosis, and the
  // leg echoes still green. The garbage and deep-planted classes in this
  // list ride malformed inputs, so their echoes honestly refuse too —
  // the non-object arm's legs are garbage, the mapped echo carries the
  // re-run's own honest verdict, and nothing is fabricated either way.
  for (const label of [
    "reply_request_record_missing_key",
    "reply_request_record_extra_forbidden_key",
    "reply_request_record_tampered_posture_literal",
    "reply_request_refused_non_object_record",
  ]) {
    const fresh = runRequest(byLabel(stageDP21ReplyRequestMatrix, label));
    assert.equal(fresh.reason, "reply_request_record_invalid", label);
    assert.equal(fresh.replyRequestState, "reply_request_not_recorded", label);
    assert.equal(fresh.replyRequestDecisionVersion, "invalid", label);
    assert.deepEqual(
      deepClone(fresh.replyRequestEventFreshnessDiagnosis),
      {
        state: "unknown",
        reason: "observation_metadata_missing_or_invalid",
        observationAgeMs: null,
      },
      label,
    );
    assert.ok(fresh.mappedConversationState !== null, `${label}: echoes always carried`);
    assert.ok(fresh.mappedEstablishmentState !== null, `${label}: echoes always carried`);
    assert.ok(fresh.mappedReadGateState !== null, `${label}: echoes always carried`);
    if (label !== "reply_request_refused_non_object_record") {
      assert.equal(
        fresh.mappedConversationState,
        "conversation_record_admitted_session_scoped_no_delivery",
        `${label}: the leg echoes stay readable through an invalid record`,
      );
    }
  }

  // The provider refused bases refuse on the basis check alone.
  for (const basis of ["asserted_by_model_completion", "replayed_from_prior_provider_decision"]) {
    const arm = byLabel(
      stageDP21ProviderDecisionMatrix,
      `provider_decision_refused_basis_${basis}`,
    );
    const fresh = runProvider(arm);
    assert.equal(fresh.providerDecisionState, "provider_decision_not_recorded", arm.fixtureLabel);
    assert.equal(fresh.reason, "receiver_provider_decision_proof_incomplete", arm.fixtureLabel);
    assert.deepEqual(
      fresh.unsatisfiedChecks,
      ["provider_decision_basis_receiver_recorded_not_inferred"],
      arm.fixtureLabel,
    );
    // The request re-run echo stays green: the refusal is the decision's
    // alone.
    assert.equal(
      fresh.mappedReplyRequestState,
      "reply_request_recorded_session_scoped_no_reply_composed",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedReplyRequestReassessmentReason,
      "all_reply_request_checks_satisfied",
      arm.fixtureLabel,
    );
  }

  // The per-class cause walk: every incoherent or external selection
  // refuses at its dedicated cause with the selection echoed and the
  // request re-run green.
  const selectionCases = [
    ["provider_decision_refused_selection_unknown_backend_class", "provider_backend_class_unknown_fail_closed", "future_sovereign_runtime", "ollama"],
    ["provider_decision_refused_selection_cloud_unknown_provider_id", "provider_backend_id_unknown_or_not_of_declared_backend_class", "cloud_provider", "mistral"],
    ["provider_decision_refused_selection_ollama_under_cloud_provider", "provider_backend_id_unknown_or_not_of_declared_backend_class", "cloud_provider", "ollama"],
    ["provider_decision_refused_selection_local_runtime_with_api_key_mechanism", "provider_access_mechanism_not_compatible_with_declared_backend_class", "local_runtime", "ollama"],
    ["provider_decision_refused_selection_cloud_openai_with_local_operator_custody", "provider_credential_custody_not_compatible_with_declared_backend_class", "cloud_provider", "openai"],
    ["provider_decision_refused_selection_local_runtime_with_external_cloud_boundary", "provider_data_boundary_not_compatible_with_declared_backend_class", "local_runtime", "ollama"],
    ["provider_decision_refused_selection_cloud_openai", "provider_selection_declared_not_performable_this_cut", "cloud_provider", "openai"],
    ["provider_decision_refused_selection_cloud_anthropic", "provider_selection_declared_not_performable_this_cut", "cloud_provider", "anthropic"],
    ["provider_decision_refused_selection_community_gateway", "provider_selection_declared_not_performable_this_cut", "community_gateway", ""],
  ];
  for (const [label, expectedReason, expectedClass, expectedId] of selectionCases) {
    const arm = byLabel(stageDP21ProviderDecisionMatrix, label);
    const fresh = runProvider(arm);
    assert.equal(fresh.reason, expectedReason, arm.fixtureLabel);
    assert.equal(fresh.providerDecisionState, "provider_decision_not_recorded", arm.fixtureLabel);
    assert.ok(fresh.recordedProviderSelection !== null, arm.fixtureLabel);
    assert.equal(fresh.recordedProviderSelection.backendClass, expectedClass, arm.fixtureLabel);
    assert.equal(fresh.recordedProviderSelection.selectedBackendId, expectedId, arm.fixtureLabel);
    // The request re-run echo stays green — the refusal is the
    // selection's alone.
    assert.equal(
      fresh.mappedReplyRequestState,
      "reply_request_recorded_session_scoped_no_reply_composed",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedReplyRequestReassessmentReason,
      "all_reply_request_checks_satisfied",
      arm.fixtureLabel,
    );
  }
  // The unknown class is echoed too (fail-closed is honest): the
  // assessment carries what the receiver named.
  assert.equal(
    runProvider(byLabel(stageDP21ProviderDecisionMatrix, "provider_decision_refused_selection_unknown_backend_class"))
      .recordedProviderSelection.backendClass,
    "future_sovereign_runtime",
    "the unknown backend class echoes what the receiver named",
  );

  // The provider invalid arms: missing key with a null selection echo
  // and the honest fallback, the extra forbidden key, and a non-object
  // record.
  const providerMissing = runProvider(
    byLabel(stageDP21ProviderDecisionMatrix, "provider_decision_record_missing_key"),
  );
  assert.equal(providerMissing.reason, "provider_decision_record_invalid");
  assert.equal(providerMissing.providerDecisionVersion, "invalid");
  assert.equal(providerMissing.recordedProviderSelection, null);
  assert.equal(
    providerMissing.mappedReplyRequestState,
    "reply_request_recorded_session_scoped_no_reply_composed",
    "the request echo stays readable through an invalid provider record",
  );
  for (const label of [
    "provider_decision_record_extra_forbidden_key",
    "provider_decision_refused_non_object_record",
  ]) {
    const fresh = runProvider(byLabel(stageDP21ProviderDecisionMatrix, label));
    assert.equal(fresh.reason, "provider_decision_record_invalid", label);
    assert.equal(fresh.recordedProviderSelection, null, label);
  }

  // The provider future arm: the decision's own freshness cause on its
  // own diagnosis while the request re-run stays green.
  const providerFuture = runProvider(
    byLabel(stageDP21ProviderDecisionMatrix, "provider_decision_event_in_future"),
  );
  assert.equal(providerFuture.reason, "provider_decision_event_not_session_current");
  assert.deepEqual(
    deepClone(providerFuture.providerDecisionEventFreshnessDiagnosis),
    { state: "unknown", reason: "observation_time_in_future", observationAgeMs: null },
  );
  assert.equal(
    providerFuture.mappedReplyRequestState,
    "reply_request_recorded_session_scoped_no_reply_composed",
  );
  // The before-the-request arm: the scope cause — a decision before its
  // request is out of the session scope.
  assert.equal(
    runProvider(byLabel(stageDP21ProviderDecisionMatrix, "provider_decision_event_before_the_reply_request"))
      .reason,
    "provider_decision_event_not_of_the_current_session_scope",
  );

  // The wall per-cause walk: each class refuses at its own cause.
  const wallCauseCases = [
    ["claimed_reply_refused_provider_output_terminal_declared_responder", "claimed_reply_provider_output_not_agent_reply_no_composition_authority", 0],
    ["claimed_reply_refused_receiver_composition_is_not_a_reply", "claimed_reply_receiver_composition_is_not_a_reply", 0],
    ["claimed_reply_refused_agent_runtime_claim_no_cognition_runtime", "claimed_reply_agent_runtime_claim_refused_no_cognition_runtime", 0],
    ["claimed_reply_source_class_unknown_fail_closed", "claimed_reply_source_class_unknown_fail_closed", 0],
    ["claimed_reply_refused_provider_output_terminal_undeclared_responder", "claimed_agent_reply_claim_invalid", 0],
    ["claimed_reply_refused_missing_claimed_reply_text", "claimed_agent_reply_claim_invalid", 0],
    ["claimed_reply_refused_empty_claimed_reply_text", "claimed_agent_reply_claim_invalid", 0],
    ["claimed_reply_refused_extra_forbidden_key", "claimed_agent_reply_claim_invalid", 0],
    ["claimed_reply_refused_non_object_claim", "claimed_agent_reply_claim_invalid", 0],
    ["claimed_reply_refused_responder_ref_never_echoed", "claimed_reply_provider_output_not_agent_reply_no_composition_authority", 0],
  ];
  for (const [label, expectedReason] of wallCauseCases) {
    const arm = byLabel(stageDP21ClaimedReplyMatrix, label);
    const fresh = runWall(arm);
    assert.equal(fresh.reason, expectedReason, arm.fixtureLabel);
    assert.equal(fresh.claimedReplyState, "claimed_reply_not_composed", arm.fixtureLabel);
  }

  // The terminal arms carry the honest fold: the shape and vocabulary
  // checks green, the two never-passing checks unsatisfied.
  for (const label of [
    "claimed_reply_refused_provider_output_terminal_declared_responder",
    "claimed_reply_refused_responder_ref_never_echoed",
  ]) {
    const fresh = runWall(byLabel(stageDP21ClaimedReplyMatrix, label));
    assert.deepEqual(
      [...fresh.satisfiedChecks],
      [
        "claimed_agent_reply_claim_well_formed",
        "claimed_reply_source_class_of_the_declared_claim_vocabulary",
      ],
      label,
    );
    assert.deepEqual(
      [...fresh.unsatisfiedChecks],
      [
        "claimed_reply_text_composible_by_an_established_cognition_runtime",
        "claimed_reply_carries_no_agent_identity_authority_or_admission",
      ],
      label,
    );
  }
});

// ---------------------------------------------------------------
// Block 4: lifecycle — ladder-order freshness honesty beyond the matrix
// arms: a far-future evaluation makes the request's own event stale too
// while the D-P16 re-run refuses FIRST (the request's own diagnosis
// still carries its honest stale state verbatim); the re-assess-after-
// retraction honesty for BOTH records (the D-P20 policy posture, one
// lane deeper than the frozen D-P19 receipts — the postures split
// deliberately); and the wall unchanged through retraction (no session
// legs).
// ---------------------------------------------------------------
block("lifecycle", () => {
  // The base-arm age arithmetic is exact.
  assert.equal(
    requestAdmittedArm.assessment.replyRequestEventFreshnessDiagnosis.observationAgeMs,
    evaluated - stageDP21ReplyRequestEventAtEpochMs,
  );

  // A far-future evaluation: the request's OWN event goes stale
  // (150 000 − 88 000 = 62 001 > 60 000) — but the legs are STALER, so
  // the D-P16 re-run refuses FIRST while the request's own diagnosis
  // carries its honest stale state verbatim at the ladder's deeper
  // position. Ladder order, never newest-event arithmetic.
  const staleRun = assessPondReplyRequestDecision({
    ...requestInputOf(requestAdmittedArm),
    receiverEvaluatedAtEpochMs: 1800000150001,
  });
  assert.equal(staleRun.reason, "requested_conversation_record_not_currently_admitted");
  assert.equal(
    staleRun.mappedConversationReassessmentReason,
    "conversation_record_not_session_current",
    "the reassessment outranks the request event — the D-P16 re-run refuses first",
  );
  assert.equal(
    staleRun.replyRequestEventFreshnessDiagnosis.state,
    "stale",
    "the request event's own diagnosis never lies even when the ladder never reaches it",
  );
  assert.equal(staleRun.replyRequestEventFreshnessDiagnosis.observationAgeMs, 62001);

  // The three expiry arms: the request event stays honestly fresh while
  // the reassessment refuses — the ages are exact arithmetic from the
  // frozen pins. The gate-expiry refusal rides the mapped read-gate
  // echo; the conversation-expiry refusal rides the mapped conversation
  // echo; the request-expiry arm is where BOTH refuse and the reassess-
  // ment still outranks.
  assert.equal(
    stageDP21GateExpiryReassessmentEvaluatedAtEpochMs - stageDP21ReplyRequestEventAtEpochMs,
    32001,
  );
  assert.equal(
    stageDP21ConversationExpiryReassessmentEvaluatedAtEpochMs - stageDP21ReplyRequestEventAtEpochMs,
    33001,
  );
  assert.equal(
    stageDP21RequestExpiryReassessmentEvaluatedAtEpochMs - stageDP21ReplyRequestEventAtEpochMs,
    60001,
    "one tick past the declared maximum age — the request's own staleness at a past-event evaluation",
  );
  const gateExpiryRun = runRequest(
    byLabel(stageDP21ReplyRequestMatrix, "reply_request_reassessment_refused_at_gate_expiry"),
  );
  assert.equal(gateExpiryRun.reason, "requested_conversation_record_not_currently_admitted");
  assert.equal(
    gateExpiryRun.replyRequestEventFreshnessDiagnosis.state,
    "fresh",
    "the request event stays honestly fresh while the reassessment refuses",
  );
  assert.equal(
    gateExpiryRun.mappedReadGateState,
    "no_active_live_session",
    "the gate-expiry refusal reads through the mapped read-gate echo",
  );
  const conversationExpiryRun = runRequest(
    byLabel(stageDP21ReplyRequestMatrix, "reply_request_reassessment_refused_at_conversation_expiry"),
  );
  assert.equal(conversationExpiryRun.reason, "requested_conversation_record_not_currently_admitted");
  assert.equal(
    conversationExpiryRun.mappedConversationReassessmentReason,
    "conversation_record_not_session_current",
    "the D-P16 re-run refuses first at the conversation-record expiry",
  );
  assert.equal(
    conversationExpiryRun.replyRequestEventFreshnessDiagnosis.state,
    "fresh",
  );
  assert.equal(
    conversationExpiryRun.replyRequestEventFreshnessDiagnosis.observationAgeMs,
    33001,
  );

  // THE RE-ASSESS-AFTER-RETRACTION HONESTY — recorded deviation: BOTH
  // records confine honestly after retraction, deliberately opposite to
  // the D-P19 receipt's frozen-at-issuance presentation. The two
  // retention postures pin the split.
  assert.equal(
    byLabel(stageDP21ReplyRequestMatrix, "reply_request_confined_after_retraction").assessment.replyRequestRetentionPosture,
    "reply_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    "the request's retention posture names the reassessment honesty verbatim",
  );
  assert.equal(
    byLabel(stageDP21ReplyRequestMatrix, "reply_request_confined_after_retraction").assessment.reason,
    "requested_conversation_record_not_currently_admitted",
  );
  assert.equal(
    runRequest(byLabel(stageDP21ReplyRequestMatrix, "reply_request_confined_after_retraction"))
      .replyRequestEventFreshnessDiagnosis.observationAgeMs,
    14000,
    "the confined request event stays honestly fresh — its staleness is not the refusal",
  );
  assert.equal(
    byLabel(stageDP21ProviderDecisionMatrix, "provider_decision_confined_after_retraction").assessment.providerDecisionRetentionPosture,
    "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    "the decision's retention posture names the reassessment honesty verbatim",
  );
  assert.equal(
    runProvider(byLabel(stageDP21ProviderDecisionMatrix, "provider_decision_confined_after_retraction")).reason,
    "reply_request_not_currently_recorded",
    "the confined decision refuses through the confined request — two depths of honest echo",
  );
  assert.equal(
    runProvider(byLabel(stageDP21ProviderDecisionMatrix, "provider_decision_confined_after_retraction"))
      .mappedReplyRequestReassessmentReason,
    "requested_conversation_record_not_currently_admitted",
    "the confined decision reads the request's confinement verbatim, two depths down",
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
  assert.notEqual(
    dp19AdmittedArm.deliveryReceipt.receiptRetentionPosture,
    "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    "the receipt is frozen at issuance; the D-P21 records are not — the postures split deliberately",
  );

  // The wall unchanged through retraction — it never had session legs to
  // lose: the wall input carries no clock and no session leg, so the
  // same call before and after any session state gives one deep-equal
  // posture.
  const wallArm = byLabel(
    stageDP21ClaimedReplyMatrix,
    "claimed_reply_refused_provider_output_terminal_declared_responder",
  );
  const wallBefore = runFreshWall(wallInputOf(wallArm));
  const wallAfter = runFreshWall(wallInputOf(wallArm));
  assert.deepEqual(deepClone(wallBefore), deepClone(wallAfter));
  assert.equal(wallBefore.claimedReplyWallPosture,
    "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut");

  // Both recorded provider arms carry the selection posture verbatim —
  // no runtime, no fallback, no consumption this cut.
  for (const arm of [providerRecordedArm, providerCommunityArm]) {
    assert.equal(
      arm.providerDecision.providerDecisionRuntimePosture,
      "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",
    );
    assert.equal(
      arm.providerDecision.providerDecisionInferencePosture,
      "performs_no_inference_no_authentication_no_provider_contact_no_fallback",
    );
    assert.equal(
      arm.providerDecision.providerDecisionIdentityPosture,
      "provider_session_is_not_agent_no_agentid_created",
    );
    assert.equal(
      arm.providerDecision.providerDecisionConsumptionPosture,
      "consumed_by_no_runtime_composer_or_transport_this_cut",
    );
    assert.equal(arm.providerDecision.authority, "none");
    // The request postures ride both recorded request arms verbatim.
    assert.equal(
      arm.replyRequest.replyRequestCompositionPosture,
      "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",
    );
    assert.equal(
      arm.replyRequest.replyRequestRunwayPosture,
      "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",
    );
    assert.equal(
      arm.replyRequest.replyRequestLifecyclePosture,
      "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",
    );
    assert.equal(
      arm.replyRequest.replyRequestProviderPosture,
      "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",
    );
  }

  // The declared vocabulary probes: every cloud id and every external
  // mechanism/custody/boundary/tier literal exists in the frozen probe
  // lists — the declared breadth the negatives block walks behaviorally.
  assert.deepEqual(CLOUD_PROVIDER_IDS, ["openai", "google", "xai", "anthropic", "deepseek"]);
  assert.equal(ACCESS_MECHANISMS.length, 6);
  assert.equal(CUSTODY_CLASSES.length, 5);
  assert.equal(DATA_BOUNDARIES.length, 3);
  assert.equal(SUPPORT_TIERS.length, 7);
});

// ---------------------------------------------------------------
// Block 5: fail-closed — garbage inputs refuse without throwing on all
// ---------------------------------------------------------------
block("failClosed", () => {
  const validRequest = deepClone(requestAdmittedArm.replyRequest);
  const validLegs = requestInputOf(requestAdmittedArm);
  const garbageRequestInputs = [
    null,
    undefined,
    0,
    "a reply, please",
    [],
    {},
    { replyRequest: null },
    { replyRequest: "not a record" },
    { replyRequest: [] },
    { replyRequest: validRequest },
    { ...validLegs, establishmentRecord: null, replyRequest: validRequest },
    { ...validLegs, replyRequest: { ...validRequest, replyRequestMetadata: null } },
    { ...validLegs, replyRequest: { ...validRequest, replyRequestMetadata: 42 } },
    {
      ...validLegs,
      replyRequest: { ...validRequest, replyRequestBasis: "inferred_from_vibes" },
    },
    {
      ...validLegs,
      replyRequest: { ...validRequest, replyRequestRunwayPosture: "a reply runtime exists hereafter" },
    },
  ];
  for (const input of garbageRequestInputs) {
    let assessment = null;
    assert.doesNotThrow(() => {
      assessment = assessPondReplyRequestDecision(input);
    });
    assert.equal(assessment.replyRequestState, "reply_request_not_recorded", "garbage refuses");
    assert.ok(assessment.mappedConversationState !== null, "conversation echoes always carried");
    assert.ok(assessment.mappedEstablishmentState !== null, "establishment echoes always carried");
    assert.ok(assessment.mappedReadGateState !== null, "read-gate echoes always carried");
    assert.ok(assessment.replyRequestEventFreshnessDiagnosis !== null, "diagnosis always carried");
    assertLacksKeys(assessment, POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS, "garbage request assessment");
    for (const ceilingKey of REQUEST_CEILING_KEYS) {
      assert.equal(assessment[ceilingKey], false, `request ceiling ${ceilingKey} on garbage input`);
    }
  }
  // The exact breakage classes: everything without a valid reply-request
  // record is invalid; the valid request over healthy legs keeps the
  // cut's version.
  assert.doesNotThrow(() => {
    const healthy = assessPondReplyRequestDecision(validLegs);
    assert.equal(healthy.contractVersion, "pond-reply-request-decision-d-p21");
    assert.equal(healthy.replyRequestDecisionVersion, "pond-reply-request-decision-d-p21");
  });

  // A valid request whose metadata carries a nested forbidden key deep
  // inside: the deep walk refuses.
  const nestedForbidden = assessPondReplyRequestDecision({
    ...validLegs,
    replyRequest: {
      ...validRequest,
      replyRequestMetadata: {
        ...validRequest.replyRequestMetadata,
        requested_at_epoch_ms: { outer: { claimedAgentReply: "would_go_here" } },
      },
    },
  });
  assert.equal(nestedForbidden.reason, "reply_request_record_invalid");

  // Provider garbage: the same garbage classes over the provider input.
  const validProvider = deepClone(providerRecordedArm.providerDecision);
  const validProviderLegs = providerInputOf(providerRecordedArm);
  const garbageProviderInputs = [
    null,
    undefined,
    7,
    "select ollama forever",
    [],
    {},
    { providerDecision: null },
    { providerDecision: [] },
    { providerDecision: validProvider },
    { ...validProviderLegs, replyRequest: null, providerDecision: validProvider },
    {
      ...validProviderLegs,
      providerDecision: { ...validProvider, supportTier: "beyond_sovereign" },
    },
  ];
  for (const input of garbageProviderInputs) {
    let assessment = null;
    assert.doesNotThrow(() => {
      assessment = assessPondCognitionProviderDecision(input);
    });
    assert.equal(assessment.providerDecisionState, "provider_decision_not_recorded", "garbage refuses");
    assert.ok(assessment.mappedReplyRequestState !== null, "request echoes always carried");
    assert.ok(assessment.mappedConversationState !== null, "conversation echoes always carried");
    assert.ok(assessment.providerDecisionEventFreshnessDiagnosis !== null, "diagnosis always carried");
    assertLacksKeys(assessment, POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS, "garbage provider assessment");
    for (const ceilingKey of PROVIDER_CEILING_KEYS) {
      assert.equal(assessment[ceilingKey], false, `provider ceiling ${ceilingKey} on garbage input`);
    }
  }

  // Wall garbage: one exact key, nothing echoed, no throw.
  for (const input of [
    null,
    undefined,
    0,
    "compose me a reply",
    [],
    {},
    { claimedAgentReply: null },
    { claimedAgentReply: [] },
    { claimedAgentReply: "a text alone is not a claim" },
    {
      claimedAgentReply: {
        claimedReplyText: { nested: { claimedResponderRef: "would_go_here" } },
        claimedReplySourceClass: "provider_output",
        claimedResponderRef: "responder:probe",
      },
    },
  ]) {
    let refusal = null;
    assert.doesNotThrow(() => {
      refusal = assessPondClaimedAgentReplyRefusal(input);
    });
    assert.equal(refusal.claimedReplyState, "claimed_reply_not_composed", "garbage refuses");
    assert.equal(refusal.claimedReplyWallPosture,
      "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut");
    assert.ok(!carriesString(refusal, "would_go_here"), "the wall echoes no claim value");
    assertLacksKeys(refusal, POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS, "wall garbage assessment");
    for (const ceilingKey of WALL_CEILING_KEYS) {
      assert.equal(refusal[ceilingKey], false, `wall ceiling ${ceilingKey} on garbage input`);
    }
  }
});

// ---------------------------------------------------------------
// Block 6: ceiling and widen — the inventory slice ties (the D-P20 union
// plus exactly four reply-lane keys), the widen probes, and the
// ceilings over fresh runs.
// ---------------------------------------------------------------
block("ceilingAndWiden", () => {
  const fullDP20 = [...POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS];
  assert.deepEqual(
    POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS.slice(0, fullDP20.length),
    fullDP20,
    "the D-P21 inventory keeps the frozen D-P20 union verbatim",
  );
  assert.equal(
    POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS.length,
    fullDP20.length + 4,
    "the D-P21 inventory is exactly the D-P20 union plus four keys",
  );
  assert.deepEqual(
    POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS.slice(-4),
    ["agentReplyText", "composedAgentReply", "claimedAgentReply", "providerCredential"],
    "the four reply-lane keys are the widen, in the declared order",
  );

  // The widen probes: every reply-lane key this cut exists to refuse —
  // plus the inherited lane vocabulary — refuses the record whole. The
  // planted value is never a URL (a value is not a transport).
  const validLegs = requestInputOf(requestAdmittedArm);
  for (const key of [
    "agentReplyText",
    "composedAgentReply",
    "claimedAgentReply",
    "providerCredential",
    "transportEndpoint",
    "a2aAgentCard",
    "mcpRuntimeSchema",
    "remoteGrant",
    "agentReply",
    "chatMessage",
  ]) {
    const widened = assessPondReplyRequestDecision({
      ...validLegs,
      replyRequest: {
        ...deepClone(requestAdmittedArm.replyRequest),
        [key]: "refused_value_would_go_here",
      },
    });
    assert.equal(widened.reason, "reply_request_record_invalid", `widen probe ${key}`);
    assert.equal(widened.replyRequestState, "reply_request_not_recorded", `widen probe ${key}`);
  }

  // The provider record widens the same way: a forbidden record field
  // refuses the decision whole; a provider credential is exactly what
  // the decision must never carry.
  const validProviderLegs = providerInputOf(providerRecordedArm);
  for (const key of ["providerCredential", "agentReplyText", "composedAgentReply"]) {
    const widened = assessPondCognitionProviderDecision({
      ...validProviderLegs,
      providerDecision: {
        ...deepClone(providerRecordedArm.providerDecision),
        [key]: "refused_value_would_go_here",
      },
    });
    assert.equal(widened.reason, "provider_decision_record_invalid", `provider widen probe ${key}`);
    assert.equal(widened.recordedProviderSelection, null, `provider widen probe ${key}`);
  }

  // The wall widens the same way: a forbidden claim key refuses whole.
  for (const key of ["composedAgentReply", "agentReplyText", "providerCredential"]) {
    const widenedWall = assessPondClaimedAgentReplyRefusal({
      claimedAgentReply: {
        claimedReplyText: "I have considered your dispatch and concur.",
        claimedReplySourceClass: "provider_output",
        claimedResponderRef: "responder:probe",
        [key]: "refused_value_would_go_here",
      },
    });
    assert.equal(widenedWall.reason, "claimed_agent_reply_claim_invalid", `wall widen probe ${key}`);
    assert.equal(widenedWall.claimedReplyState, "claimed_reply_not_composed", `wall widen probe ${key}`);
  }

  // The does-not-establish family is all-false on fresh runs of the
  // recorded arms, the retention postures ride verbatim, and the
  // runtime-activation and authority postures stay pinned.
  for (const arm of [requestAdmittedArm, requestCommunityArm]) {
    const fresh = runRequest(arm);
    for (const ceilingKey of REQUEST_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `request ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
    assert.equal(fresh.replyRequestConsumedByAnyRuntimeOrComposerThisCut, false, arm.fixtureLabel);
  }
  for (const arm of [providerRecordedArm, providerCommunityArm]) {
    const fresh = runProvider(arm);
    for (const ceilingKey of PROVIDER_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `provider ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
    assert.equal(fresh.providerDecisionConsumedThisCut, false, arm.fixtureLabel);
  }
  for (const arm of stageDP21ClaimedReplyMatrix) {
    const fresh = runWall(arm);
    for (const ceilingKey of WALL_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `wall ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }
});

// ---------------------------------------------------------------
// Block 7: claim tie — no reply-destination field exists (the addressed
// agent flows only through the requested copy's own addressedAgentRef);
// the provider record carries no model or harness reference; the
// request echoes no reply text; and the wall echoes NOTHING about any
// claim — no claimed-* field exists on the assessment shape, and no
// claim value appears in any serialized refusal, including the arm
// whose claimed text is the very prose this receiver composed (a known
// D-P16 fact echoed NOWHERE by the wall) and the arm whose responder is
// a distinguishable counterparty (a different claim reads out the same
// refusal verbatim — the responder echoes nowhere).
// ---------------------------------------------------------------
block("claimTie", () => {
  assert.deepEqual(
    Object.keys(requestAdmittedArm.replyRequest).sort(),
    [...REQUEST_RECORD_KEYS].sort(),
    "the request record has exactly the pinned keys — no destination, no reply text",
  );
  assert.deepEqual(
    Object.keys(providerRecordedArm.providerDecision).sort(),
    [...PROVIDER_RECORD_KEYS].sort(),
    "the provider record has exactly the pinned keys — no model or harness reference",
  );
  assert.deepEqual(
    Object.keys(requestInputOf(requestAdmittedArm)).sort(),
    [...REPLY_REQUEST_INPUT_KEYS].sort(),
    "the request input has exactly the 14 pinned keys",
  );
  assert.deepEqual(
    Object.keys(providerInputOf(providerRecordedArm)).sort(),
    [...PROVIDER_INPUT_KEYS].sort(),
    "the provider input has exactly the 15 pinned keys",
  );

  // The addressed agent stays inside the requested copy: the assessments
  // never echo it.
  for (const arm of [requestAdmittedArm, requestCommunityArm]) {
    const fresh = runRequest(arm);
    assert.ok(
      !Object.keys(fresh).includes("addressedAgentRef") &&
        !JSON.stringify(fresh).includes(arm.replyRequest.requestedConversationRecord.addressedAgentRef),
      "the assessment never echoes the requested copy's addressed agent",
    );
  }

  // The provider record carries no model or harness reference: the exact
  // key set is the proof (a comment recording the deviation may name the
  // words, the record never carries the key).
  for (const key of Object.keys(providerRecordedArm.providerDecision)) {
    assert.ok(
      !/^(modelRef|harnessRef)$/i.test(key),
      `the provider record must never carry ${key}`,
    );
  }

  // The request echoes no reply text — no claimed or composed reply
  // string appears in any serialized request assessment; the requested
  // copy's own composed prose rides the record (a D-P16 fact), never an
  // assessment.
  const composedText = requestAdmittedArm.replyRequest.requestedConversationRecord.composedRecordText;
  for (const arm of stageDP21ReplyRequestMatrix) {
    const fresh = runRequest(arm);
    assert.ok(
      !carriesString(fresh, composedText),
      `the request assessment must never carry the composed prose (${arm.fixtureLabel})`,
    );
    assert.equal(fresh.replyRequestEchoesReplyText, false, arm.fixtureLabel);
  }
  for (const arm of stageDP21ProviderDecisionMatrix) {
    const fresh = runProvider(arm);
    assert.ok(
      !carriesString(fresh, composedText),
      `the provider assessment must never carry the composed prose (${arm.fixtureLabel})`,
    );
  }

  // The wall: every claimed-* field the assessment shape carries reads
  // out a refusal, never a claim — the state and posture are the
  // single refusing literals and every claim-echo negation is all-false.
  const wallFresh = runWall(
    byLabel(stageDP21ClaimedReplyMatrix, "claimed_reply_refused_provider_output_terminal_declared_responder"),
  );
  const claimedAssessmentKeys = Object.keys(wallFresh).filter((key) => key.startsWith("claimed"));
  for (const key of claimedAssessmentKeys) {
    const value = wallFresh[key];
    if (value === "claimed_reply_not_composed" || value === "pond-claimed-agent-reply-refusal-d-p21") continue;
    if (typeof key === "string" && key.startsWith("claimedReplyEstablishes")) {
      assert.equal(value, false, `the wall's ${key} must read out a refusal`);
      continue;
    }
    if (typeof key === "string" && (key.endsWith("Echoed") || key.endsWith("Stored") || key.endsWith("AcceptedAsIdentity"))) {
      assert.equal(value, false, `the wall's ${key} is a negation that stays false`);
      continue;
    }
    assert.ok(
      typeof value === "string" || value === false,
      `the wall's ${key} carries a refusal, never a claim value`,
    );
  }

  // The known-text arm (the wall against the receiver's own D-P16 prose)
  // and the distinguishable-responder arm: different claims, identical
  // refusals — nothing about any claim echoes anywhere.
  const composedTextArm = byLabel(
    stageDP21ClaimedReplyMatrix,
    "claimed_reply_refused_receiver_composition_is_not_a_reply",
  );
  assert.equal(composedTextArm.claimedAgentReply.claimedReplyText, composedText);
  const composedWallRun = runWall(composedTextArm);
  assert.ok(
    !carriesString(composedWallRun, composedText),
    "the wall never echoes even the text this receiver composed",
  );
  const distinctResponderArm = byLabel(
    stageDP21ClaimedReplyMatrix,
    "claimed_reply_refused_responder_ref_never_echoed",
  );
  const terminalArm = byLabel(
    stageDP21ClaimedReplyMatrix,
    "claimed_reply_refused_provider_output_terminal_declared_responder",
  );
  assert.notEqual(
    distinctResponderArm.claimedAgentReply.claimedResponderRef,
    terminalArm.claimedAgentReply.claimedResponderRef,
    "the two terminal arms carry different claimed responders",
  );
  assert.deepEqual(
    deepClone(runWall(distinctResponderArm)),
    deepClone(runWall(terminalArm)),
    "a different claimed responder reads out the same refusal verbatim — the responder echoes nowhere",
  );
  for (const serializedProbe of [...stageDP21ClaimedReplyMatrix]) {
    const serialized = JSON.stringify(runWall(serializedProbe));
    const claim = serializedProbe.claimedAgentReply ?? {};
    for (const value of [
      typeof claim.claimedReplyText === "string" ? claim.claimedReplyText : null,
      typeof claim.claimedResponderRef === "string" ? claim.claimedResponderRef : null,
    ]) {
      if (value === null || value.length === 0) continue;
      assert.ok(!serialized.includes(value), "no claim value in the serialized refusal");
    }
  }
});

// ---------------------------------------------------------------
// Block 8: hygiene — DOM-shaped needles and network constants stay out
// of the cut's contracts and fixture; the fixture stays value-import-
// free; the banned frozen names never re-declare; the env-prefix family
// stays out of every file of this cut; and the hand-written replies
// module stays walked.
// ---------------------------------------------------------------
block("hygiene", () => {
  const contractPaths = [
    "src/contracts/pond-reply-request-decision.ts",
    "src/contracts/pond-cognition-provider-decision.ts",
    "src/contracts/pond-claimed-agent-reply-refusal.ts",
    "src/fixtures/stage-d-p21-pond-replies.ts",
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

  // (b) network constants stay out of the cut's contract and fixture
  // files — fixture VALUES are never endpoints either (the planted
  // probe values are refused placeholders).
  const networkNeedles = ["wss://", "https://", "http://", "eth_node", "json_rpc", "0x"];
  contractPaths.forEach((path, index) => {
    for (const needle of networkNeedles) {
      assert.ok(!texts[index].includes(needle), `${path} carries the network constant ${needle}`);
    }
  });

  // (c) the fixture is value-import-free (type-only imports only).
  const fixtureText = texts[3];
  for (const line of fixtureText.split("\n")) {
    if (line.startsWith("import")) {
      assert.ok(
        line.startsWith("import type {"),
        `the fixture carries a non-type import: ${line.trim()}`,
      );
    }
  }

  // (d) the banned-name source walk over the three contract files:
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
  for (const contractPath of contractPaths.slice(0, 3)) {
    const normalized = stripImports(stripQuotedIndexReads(readModule(contractPath)));
    for (const needle of nameNeedles) {
      assert.ok(
        !normalized.includes(needle),
        `${contractPath} carries frozen name ${needle} outside the leg plumbing`,
      );
    }
  }

  // (e) the inventory union stays intact: the D-P21 inventory is the
  // imported D-P20 base, and the second and third contracts import the
  // D-P21 union by value — one widening per lane.
  assert.ok(
    texts[0].includes("POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS"),
    "the composed inventory must import the frozen D-P20 base",
  );
  assert.ok(
    texts[1].includes("POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS") &&
      texts[2].includes("POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS"),
    "the provider contract and the wall share the same inventory import",
  );
  for (const key of ["agentReplyText", "composedAgentReply", "claimedAgentReply", "providerCredential"]) {
    assert.ok(texts[0].includes(`"${key}"`), `forbidden key ${key} missing from the contract inventory`);
  }
  assert.ok(
    texts[1].includes('from "./pond-reply-request-decision.ts"') &&
      texts[2].includes('from "./pond-reply-request-decision.ts"'),
    "contracts 2 and 3 import contract 1's inventory via the .ts specifier",
  );

  // (f) the env-needle family stays out of every file of this cut: no
  // secret-bearing ceremony exists, so even the shared live-session env
  // prefix never appears. The ban matches the shared prefix — never the
  // full env name.
  for (const path of [
    "src/contracts/pond-reply-request-decision.ts",
    "src/contracts/pond-cognition-provider-decision.ts",
    "src/contracts/pond-claimed-agent-reply-refusal.ts",
    "src/fixtures/stage-d-p21-pond-replies.ts",
    "docs/stage-d-p21-pond-agent-reply-lane.md",
    "ui/pond-replies.js",
  ]) {
    const fileText = readModule(path);
    assert.ok(
      !fileText.includes("TOADAID_LIVE_"),
      `${path} carries a live-session env-prefixed name`,
    );
  }

  // (g) the hand-written replies module stays walked: it reaches contract
  // code only through the generated bundles and the sibling lane
  // modules — no src import, no frozen contract name, no transport or
  // store needle.
  const moduleText = readModule("ui/pond-replies.js");
  assert.ok(
    !moduleText.includes('from "../src/'),
    "the module must never import src contracts directly",
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
      "the hand-written replies module carries frozen vocabulary",
    );
  }
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
    /from "\.\/generated\/pond-stage-d-live-session-replies\.js"/,
    "the replies module imports through the committed generated artifact",
  );
  assert.match(
    moduleText,
    /from "\.\/pond-conversation\.js"/,
    "the replies module reads the sibling conversation lane's held entries",
  );
  assert.match(
    moduleText,
    /if \(typeof document !== "undefined"\) \{\s*renderPondReplies\(document\);\s*\}/,
    "the replies module self-mounts like its sibling lane modules",
  );

  // (h) package and CI wiring assert step by step.
  const packageJson = JSON.parse(readModule("package.json"));
  assert.equal(
    packageJson.scripts["test:stage-d-p21"],
    "node scripts/pond-reply-lane-selftest.mjs",
  );
  assert.equal(
    packageJson.scripts["stage-d:render-live-session-replies"],
    "node scripts/render-stage-d-live-session-replies.mjs",
  );
  const ci = readModule(".github/workflows/ci.yml");
  assert.equal(
    ci.split("Verify Stage D-P21 pond agent reply lane").length - 1,
    2,
    "the CI verify step appears exactly once in each job",
  );

  // (i) the provenance ties: the D-P21 provenance names the reply-request
  // record as its record, renders the stages through D-P21, and the
  // frozen D-P20 provenance stays untouched.
  const repliesProvenance = JSON.parse(
    readModule("ui/generated/pond-stage-d-live-session-replies-provenance.json"),
  );
  assert.equal(repliesProvenance.record, "src/contracts/pond-reply-request-decision.ts");
  assert.deepEqual(
    repliesProvenance.renderedStages.slice(-1),
    ["D-P21"],
    "the replies provenance extends the rendered stages through D-P21",
  );
  assert.ok(
    repliesProvenance.renderedStages.includes("D-P16") &&
      repliesProvenance.renderedStages.includes("D-P20"),
    "the replies provenance carries the re-run chain's rendered stages",
  );
  const transportProvenance = JSON.parse(
    readModule("ui/generated/pond-stage-d-live-session-transport-provenance.json"),
  );
  assert.ok(
    !transportProvenance.renderedStages.includes("D-P21"),
    "the frozen D-P20 provenance stays untouched",
  );
});

block("uiWiring", () => {
  // (a) the generated-bundle tie: the committed artifact is the only
  // bridge from the shell module to the contracts; the three assessors
  // recompute the established arms identically to the src contracts.
  const srcRequestRun = assessPondReplyRequestDecision(
    requestInputOf(requestAdmittedArm),
  );
  const genRequestRun = assessGeneratedReplyRequestDecision(
    requestInputOf(requestAdmittedArm),
  );
  assert.deepEqual(deepClone(genRequestRun), deepClone(srcRequestRun));
  const refusedRequestArm = byLabel(
    stageDP21ReplyRequestMatrix,
    "reply_request_refused_basis_asserted_by_model_completion",
  );
  const srcRefusedRequestRun = assessPondReplyRequestDecision(
    requestInputOf(refusedRequestArm),
  );
  assert.deepEqual(
    deepClone(assessGeneratedReplyRequestDecision(requestInputOf(refusedRequestArm))),
    deepClone(srcRefusedRequestRun),
  );
  const srcProviderRun = assessPondCognitionProviderDecision(
    providerInputOf(providerRecordedArm),
  );
  assert.deepEqual(
    deepClone(assessGeneratedProviderDecision(providerInputOf(providerRecordedArm))),
    deepClone(srcProviderRun),
  );
  const refusedProviderArm = byLabel(
    stageDP21ProviderDecisionMatrix,
    "provider_decision_refused_selection_cloud_openai",
  );
  assert.deepEqual(
    deepClone(
      assessGeneratedProviderDecision(providerInputOf(refusedProviderArm)),
    ),
    deepClone(assessPondCognitionProviderDecision(providerInputOf(refusedProviderArm))),
  );
  const wallRefusedArm = byLabel(
    stageDP21ClaimedReplyMatrix,
    "claimed_reply_refused_provider_output_terminal_declared_responder",
  );
  assert.deepEqual(
    deepClone(assessGeneratedClaimedReplyRefusal(wallInputOf(wallRefusedArm))),
    deepClone(assessPondClaimedAgentReplyRefusal(wallInputOf(wallRefusedArm))),
  );

  // The bundle's request template plus the receiver-own fields equals
  // the pinned recorded request — the shell never restates a posture
  // literal; the pinned record's requested copy is the D-P16 record
  // verbatim, filled into the template's open slot alone.
  const requestTemplateTie = {
    ...pondStageDP21ReplyRequestTemplate,
    replyRequestMetadata: {
      ...pondStageDP21ReplyRequestTemplate.replyRequestMetadata,
      requested_at_epoch_ms:
        requestAdmittedArm.replyRequest.replyRequestMetadata.requested_at_epoch_ms,
    },
    principalRef: requestAdmittedArm.replyRequest.principalRef,
    requestedConversationRecord:
      requestAdmittedArm.replyRequest.requestedConversationRecord,
  };
  assert.deepEqual(
    deepClone(requestTemplateTie),
    deepClone(requestAdmittedArm.replyRequest),
    "the re-filled request template equals the pinned recorded request verbatim",
  );
  const providerTemplateTie = {
    ...pondStageDP21ProviderDecisionTemplate,
    providerDecisionMetadata: {
      ...pondStageDP21ProviderDecisionTemplate.providerDecisionMetadata,
      recorded_at_epoch_ms:
        providerRecordedArm.providerDecision.providerDecisionMetadata.recorded_at_epoch_ms,
    },
    principalRef: providerRecordedArm.providerDecision.principalRef,
  };
  assert.deepEqual(
    deepClone(providerTemplateTie),
    deepClone(providerRecordedArm.providerDecision),
    "the re-filled provider template equals the pinned recorded decision verbatim",
  );

  // (b) render drive — fail-closed on missing document/nodes.
  assert.equal(renderPondReplies(undefined), false);
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
      replyNote: elementStub(),
      replyStatus: elementStub(),
      replyList: elementStub(),
    };
    return {
      nodes,
      querySelector(selector) {
        if (selector === "[data-reply-note]") return nodes.replyNote;
        if (selector === "[data-reply-status]") return nodes.replyStatus;
        if (selector === "[data-reply-list]") return nodes.replyList;
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
  missingStatus.nodes.replyStatus = null;
  assert.equal(renderPondReplies(missingStatus), false);
  const missingList = documentStub();
  missingList.nodes.replyList = null;
  assert.equal(renderPondReplies(missingList), false);
  const missingNote = documentStub();
  missingNote.nodes.replyNote = null;
  assert.equal(renderPondReplies(missingNote), false);

  // The render drive on the empty shell state: the honest empty posture.
  const collectText = (node) =>
    [node.textContent, ...node.children.map(collectText)].join("\n");
  const liveDocument = documentStub();
  assert.equal(renderPondReplies(liveDocument), true);
  assert.equal(liveDocument.nodes.replyNote.dataset.replyRendered, "true");
  assert.match(
    collectText(liveDocument.nodes.replyList),
    /No reply request recorded/,
  );
  assert.match(collectText(liveDocument.nodes.replyList), /Claimed-reply wall/);

  // (c) the shell drive on the fixture clock — the reply-lane lifecycle.
  // Determinism comes from the contract's purity, never from the wall
  // clock. The lane is touched by nothing the delivery lanes run: the
  // drive establishes, composes, records the request and the provider
  // decision, and never enters the delivery lanes at all.
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
    addressedAgentRef: stageDP21Agent0Ref,
    composedAtEpochMs: composeEpoch,
    evaluatedAtEpochMs: composeEpoch,
  });
  assert.equal(composed.recorded, true, "the healthy composition must record");

  // Record the reply request: the request event postdates the
  // composition it requests a reply over (its own staleness cause stays
  // locked behind that ordering — the ladder-order honesty), evaluated
  // inside its own freshness window on the held session legs.
  const requestEventAt = composeEpoch + 1000;
  const requestEvaluatedAt = requestEventAt + 500;
  assert.ok(requestEvaluatedAt - requestEventAt <= maximumAge);
  const recordedRequest = recordReplyRequest({
    conversationRecordIndex: 0,
    replyRequestedAtEpochMs: requestEventAt,
    evaluatedAtEpochMs: requestEvaluatedAt,
  });
  assert.equal(recordedRequest.recorded, true, "the healthy request must record");
  assert.equal(
    recordedRequest.assessment.replyRequestState,
    "reply_request_recorded_session_scoped_no_reply_composed",
  );
  assert.equal(
    recordedRequest.assessment.reason,
    "all_reply_request_checks_satisfied",
  );
  assert.equal(recordedRequest.assessment.authority, "none");
  assert.equal(
    recordedRequest.assessment.replyRequestEventFreshnessDiagnosis.observationAgeMs,
    requestEvaluatedAt - requestEventAt,
  );
  for (const ceilingKey of REQUEST_CEILING_KEYS) {
    assert.equal(
      recordedRequest.assessment[ceilingKey],
      false,
      `ceiling ${ceilingKey} in the drive`,
    );
  }
  const requestHold = heldReplyRequestEntries();
  assert.equal(requestHold.held, true);
  assert.equal(requestHold.entries.length, 1);
  assert.equal(
    requestHold.entries[0].conversationComposedText,
    "Desk, we ride at dawn. Ready your structural reads.",
  );
  assert.equal(requestHold.entries[0].addressedAgentRef, stageDP21Agent0Ref);
  const replyHold = currentReplyPosture({ evaluatedAtEpochMs: requestEvaluatedAt });
  assert.equal(replyHold.held, true);
  assert.equal(replyHold.requests.length, 1);
  assert.equal(replyHold.requests[0].presentationMark, "in_session");
  assert.equal(
    replyHold.requests[0].replyRequest.replyRequestMetadata.requested_at_epoch_ms,
    requestEventAt,
  );

  // Record the provider decision over the recorded request: the ONE
  // performable selection, no inference and no provider contact — and
  // the decision is consumed by nothing this cut.
  const providerEventAt = requestEvaluatedAt + 500;
  const providerEvaluatedAt = providerEventAt + 500;
  assert.ok(providerEvaluatedAt - providerEventAt <= maximumAge);
  const recordedProvider = recordCognitionProviderDecision({
    replyRequestIndex: 0,
    providerDecisionRecordedAtEpochMs: providerEventAt,
    evaluatedAtEpochMs: providerEvaluatedAt,
  });
  assert.equal(recordedProvider.recorded, true, "the healthy decision must record");
  assert.equal(
    recordedProvider.assessment.providerDecisionState,
    "provider_decision_recorded_session_scoped_no_runtime_established",
  );
  assert.equal(
    recordedProvider.assessment.reason,
    "all_provider_decision_checks_satisfied",
  );
  assert.deepEqual(
    deepClone(recordedProvider.assessment.recordedProviderSelection),
    deepClone(POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS[0]),
  );
  assert.equal(recordedProvider.assessment.providerDecisionConsumedThisCut, false);
  assert.equal(recordedProvider.assessment.credentialAdmitted, false);
  assert.equal(recordedProvider.assessment.authority, "none");
  assert.equal(
    recordedProvider.assessment.providerDecisionEventFreshnessDiagnosis.observationAgeMs,
    providerEvaluatedAt - providerEventAt,
  );
  for (const ceilingKey of PROVIDER_CEILING_KEYS) {
    assert.equal(
      recordedProvider.assessment[ceilingKey],
      false,
      `ceiling ${ceilingKey} in the drive`,
    );
  }
  const providerHold = currentReplyPosture({ evaluatedAtEpochMs: providerEvaluatedAt });
  assert.equal(providerHold.providerDecisions.length, 1);
  assert.equal(providerHold.providerDecisions[0].presentationMark, "in_session");

  // The standing claimed-reply wall: always refusing, no storage, no
  // affordance.
  const wallHold = currentClaimedReplyWallPosture();
  assert.equal(
    wallHold.reason,
    "claimed_reply_provider_output_not_agent_reply_no_composition_authority",
  );
  assert.equal(wallHold.claimedReplyState, "claimed_reply_not_composed");
  assert.deepEqual(
    deepClone(wallHold.declaredClaimSourceClasses),
    deepClone(POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES),
  );
  const wallAgain = currentClaimedReplyWallPosture();
  assert.deepEqual(deepClone(wallAgain), deepClone(wallHold), "the wall holds no state");

  // The re-recorded reply request (the replayed basis is recorded by the
  // module and the ceremony refuses it at its own declarative check —
  // nothing is stored, the counts stay exactly 1).
  const replayedRequest = recordReplyRequest({
    conversationRecordIndex: 0,
    replyRequestedAtEpochMs: requestEventAt + 50,
    evaluatedAtEpochMs: requestEvaluatedAt,
  });
  assert.equal(replayedRequest.recorded, false, "a replayed request refuses");
  assert.equal(
    replayedRequest.assessment.reason,
    "receiver_reply_request_proof_incomplete",
  );
  assert.deepEqual(
    replayedRequest.assessment.unsatisfiedChecks,
    ["reply_request_basis_receiver_recorded_not_inferred"],
    "the replay refuses on the basis check alone, every leg echo green",
  );
  assert.equal(heldReplyRequestEntries().entries.length, 1);

  // The replayed provider decision refuses the same way.
  const replayedProvider = recordCognitionProviderDecision({
    replyRequestIndex: 0,
    providerDecisionRecordedAtEpochMs: providerEventAt + 50,
    evaluatedAtEpochMs: providerEvaluatedAt,
  });
  assert.equal(replayedProvider.recorded, false, "a replayed decision refuses");
  assert.equal(
    replayedProvider.assessment.reason,
    "receiver_provider_decision_proof_incomplete",
  );
  assert.deepEqual(
    replayedProvider.assessment.unsatisfiedChecks,
    ["provider_decision_basis_receiver_recorded_not_inferred"],
  );
  assert.equal(heldReplyRequestEntries().entries.length, 1);

  // An out-of-range index refuses before any input exists.
  const outOfRangeRequest = recordReplyRequest({
    conversationRecordIndex: 5,
    replyRequestedAtEpochMs: requestEventAt,
    evaluatedAtEpochMs: requestEvaluatedAt,
  });
  assert.equal(outOfRangeRequest.recorded, false);
  assert.equal(outOfRangeRequest.assessment, null);
  assert.equal(
    outOfRangeRequest.refusalReason,
    "conversation_record_index_out_of_range",
  );
  const outOfRangeProvider = recordCognitionProviderDecision({
    replyRequestIndex: 5,
    providerDecisionRecordedAtEpochMs: providerEventAt,
    evaluatedAtEpochMs: providerEvaluatedAt,
  });
  assert.equal(outOfRangeProvider.recorded, false);
  assert.equal(outOfRangeProvider.assessment, null);
  assert.equal(outOfRangeProvider.refusalReason, "reply_request_index_out_of_range");
  assert.equal(heldReplyRequestEntries().entries.length, 1);

  // The neighboring lanes stay untouched by the reply lane throughout:
  // the drive recorded no delivery decision and no dispatch — the
  // delivery stores hold exactly nothing.
  assert.equal(heldDeliveryDecisions().decisions.length, 0);
  assert.equal(heldDispatchDecisions().decisions.length, 0);

  // Retract: both recorded rows CONFINE honestly (the D-P20 governance
  // posture — module state, process lifetime, never deleted) — unlike
  // the D-P19 receipt, which survives retraction as frozen historical
  // evidence. Each row presents its reassessment's own cause verbatim.
  const retractionAt = nowMs + 4000;
  const retraction = retractLiveSession({ retractedAtEpochMs: retractionAt });
  assert.equal(retraction.retracted, true);
  const confinedAt = nowMs + 5000;
  const confinedRun = currentReplyPosture({ evaluatedAtEpochMs: confinedAt });
  assert.equal(
    confinedRun.requests.length,
    1,
    "the request row survives as module state — confined, not deleted",
  );
  assert.equal(
    confinedRun.requests[0].presentationMark,
    "confined_reassessment_refusal",
    "the request confines honestly — the governance reassessment governs it",
  );
  assert.equal(
    confinedRun.requests[0].reassessmentReason,
    "requested_conversation_record_not_currently_admitted",
    "the confined request presents the reassessment's own cause verbatim",
  );
  assert.equal(
    confinedRun.requests[0].replyRequest.replyRequestMetadata.requested_at_epoch_ms,
    requestEventAt,
    "the recorded request facts stay verbatim after the session ends",
  );
  assert.equal(
    confinedRun.providerDecisions.length,
    1,
    "the provider row survives as module state — confined, not deleted",
  );
  assert.equal(
    confinedRun.providerDecisions[0].presentationMark,
    "confined_reassessment_refusal",
  );
  assert.equal(
    confinedRun.providerDecisions[0].reassessmentReason,
    "reply_request_not_currently_recorded",
    "the confined decision presents the reassessment's own cause verbatim",
  );
  assert.deepEqual(
    deepClone(confinedRun.providerDecisions[0].recordedProviderSelection),
    deepClone(POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS[0]),
    "the confined row's recorded selection stays verbatim",
  );

  // The wall panel holds unchanged through the retraction — the wall
  // never had session legs to lose.
  const confinedWall = currentClaimedReplyWallPosture();
  assert.deepEqual(deepClone(confinedWall), deepClone(wallHold));

  // A request over the confined lane refuses and stores nothing; the
  // provider lane refuses at the request reassessment one rung deeper.
  const postRetractionRequest = recordReplyRequest({
    conversationRecordIndex: 0,
    replyRequestedAtEpochMs: confinedAt,
    evaluatedAtEpochMs: confinedAt,
  });
  assert.equal(postRetractionRequest.recorded, false);
  assert.equal(
    postRetractionRequest.assessment.reason,
    "requested_conversation_record_not_currently_admitted",
    "a request over a confined lane refuses at the reassessment",
  );
  const postRetractionProvider = recordCognitionProviderDecision({
    replyRequestIndex: 0,
    providerDecisionRecordedAtEpochMs: confinedAt,
    evaluatedAtEpochMs: confinedAt,
  });
  assert.equal(postRetractionProvider.recorded, false);
  assert.equal(
    postRetractionProvider.assessment.reason,
    "reply_request_not_currently_recorded",
    "a decision over a confined request refuses at the request reassessment",
  );
  assert.equal(heldReplyRequestEntries().entries.length, 1);
  assert.equal(heldDeliveryDecisions().decisions.length, 0);
  assert.equal(heldDispatchDecisions().decisions.length, 0);

  // (d) markup contract on ui/pond-desktop.html — the replies region is
  // additive, the mic stays disabled, and the modules load in lane
  // order (transport < replies < shell).
  const html = readModule("ui/pond-desktop.html");
  assert.match(html, /data-reply-note/);
  assert.match(html, /data-reply-status/);
  assert.match(html, /data-reply-list/);
  assert.match(html, /mic-button" type="button" disabled/);
  const transportTag = html.indexOf('src="pond-transport.js"');
  const repliesTag = html.indexOf('src="pond-replies.js"');
  const shellTag = html.indexOf('src="pond-shell.js"');
  assert.ok(repliesTag !== -1, "the replies module script tag is present");
  assert.ok(transportTag < repliesTag, "the replies module loads after the transport module");
  assert.ok(repliesTag < shellTag, "the replies module loads before the shell module");

  // (e) the neighboring lanes stay untouched by the reply lane: the
  // frozen D-P16..D-P20 modules never mention it.
  const dispatchModuleText = readModule("ui/pond-dispatch.js");
  const receiptsModuleText = readModule("ui/pond-receipts.js");
  const deliveryModuleText = readModule("ui/pond-delivery.js");
  const conversationModuleText = readModule("ui/pond-conversation.js");
  const sessionModuleText = readModule("ui/pond-live-session.js");
  const transportModuleText = readModule("ui/pond-transport.js");
  assert.ok(!dispatchModuleText.includes("pond-replies"), "pond-dispatch.js stays untouched by the reply lane");
  assert.ok(!receiptsModuleText.includes("pond-replies"), "pond-receipts.js stays untouched by the reply lane");
  assert.ok(!deliveryModuleText.includes("pond-replies"), "pond-delivery.js stays untouched by the reply lane");
  assert.ok(!conversationModuleText.includes("pond-replies"), "pond-conversation.js stays untouched by the reply lane");
  assert.ok(!sessionModuleText.includes("pond-replies"), "pond-live-session.js stays untouched by the reply lane");
  assert.ok(!transportModuleText.includes("pond-replies"), "pond-transport.js stays untouched by the reply lane");
});

console.log(
  `POND_STAGE_DP21_POND_REPLY_LANE_SELFTEST_PASS · ${blocks} blocks`,
);
