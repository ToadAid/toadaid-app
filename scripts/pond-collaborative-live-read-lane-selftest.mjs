// Stage D-P23 selftest: the Pond collaborative multi-principal live read
// lane — one selftest over the three contracts of the cut. The matrix
// block proves every session-request arm, every collaborative live-read
// admission arm, and every claimed-collaborative wall arm agrees with
// its real assessor deep-equal and deep-frozen with all-false ceilings
// on every arm; the identity ties prove the request's gate legs cannot
// drift from the frozen D-P22 voice arms, that the counterpart bundle's
// seven legs re-inline the frozen D-P14 counterpart material except the
// lane's one recorded deviation (the re-timed counterpart D-P6
// observation) with the salts and verifier digests pinned at digest
// level (no secret anywhere), that the frozen D-P15 gate still re-runs
// byte-green over the held legs and still refuses the collaborative
// widening verbatim, that the retracted request predates the whole
// D-P20 / D-P21 / D-P22 downstream chain (the lane's scope binds only
// the establishment — the transport, reply, and voice lanes are not
// parents), that the counterpart's inclusive-boundary expiry is exact
// arithmetic (fresh at sixty thousand, stale one tick past — the
// co-read dies its own death while the session lives), and the clock
// pins descend arithmetically with the staleness-unreachability
// honesty; the negatives block refuses every refused basis on its own
// check alone with every leg echo green, every invalid, freshness, and
// scope arm at its honest cause with the mapped echoes readable, the
// ladder-order and smuggle and expiry arms at their dedicated causes
// with the whole mapped chains readable, and every wall class at its
// own cause (the terminal fold honest); the lifecycle block proves the
// ladder-order freshness honesty (the legs refuse FIRST while the
// request's own diagnosis still carries its honest stale state), the
// counterpart-expiry isolation, the re-assess-after-retraction honesty
// for BOTH records against the D-P19 receipt's frozen-at-issuance
// contrast (the wall unchanged, it never had session legs to lose); the
// fail-closed block refuses garbage without throwing on all three
// contracts (the deep-planted forbidden keys included); the ceiling
// block proves the inventory slices (the frozen D-P22 union plus
// exactly four collaborative-lane keys) and the widen probes; the
// claim-tie block proves the lane carries no agent identity of any
// kind, no counterpart live-leg or shared-scope material anywhere, and
// the wall echoes NOTHING about any claim (zero claimed-* values, not
// even text this receiver composed); the hygiene block walks DOM
// needles, network constants, the banned frozen names, the frozen
// refusal phrase's exclusivity, the inventory-union import ties, the
// env-prefix family, the digest-level secret posture, the hand-written
// module's walk, and the package, CI, and provenance ties; and the ui
// wiring block proves the committed generated bundle, the shell
// module's walks, and the fixture-clock shell drive — establish,
// RECORD THE COLLABORATIVE READ REQUEST, perform the collaborative
// live-read activation, refused replay for both, out-of-range index,
// the counterpart's own-death reassessment, then retract with BOTH
// rows confined verbatim (count-stable, never deleted) and the wall
// holding unchanged. Offline structural; no env-gated block exists in
// this cut (it holds no secret-bearing ceremony — the shell drive
// establishes the session from fixture legs).

import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  stageDP23CollaborativeReadSessionRequestMatrix,
  stageDP23CollaborativeLiveReadMatrix,
  stageDP23ClaimedCollaborativeReadMatrix,
  stageDP23ReceiverRef,
  stageDP23CounterpartRef,
  stageDP23EstablishedAtEpochMs,
  stageDP23ReceiverDp6ObservedAtEpochMs,
  stageDP23CounterpartDp6RetimedObservedAtEpochMs,
  stageDP23CollaborativeReadRequestEventAtEpochMs,
  stageDP23CollaborativeReadRequestEvaluatedAtEpochMs,
  stageDP23CollaborativeLiveReadEventAtEpochMs,
  stageDP23CollaborativeLiveReadEvaluatedAtEpochMs,
  stageDP23CounterpartExpiredEvaluatedAtEpochMs,
  stageDP23ReceiverExpiredEvaluatedAtEpochMs,
  stageDP23FutureCollaborativeReadRequestEventAtEpochMs,
  stageDP23FutureCollaborativeLiveReadEventAtEpochMs,
  stageDP23PreEstablishmentRequestEventAtEpochMs,
  stageDP23FarFutureLadderOrderEvaluatedAtEpochMs,
  stageDP23RetractedRequestEventAtEpochMs,
  stageDP23RetractedLiveReadEventAtEpochMs,
  stageDP23RetractionRecordedAtEpochMs,
  stageDP23ConfinedReassessmentEvaluatedAtEpochMs,
  stageDP23ReceiverMaximumAgeMs,
  stageDP23DP14ActivationActivatedAtEpochMs,
  stageDP23DP14StaleActivationActivatedAtEpochMs,
  stageDP23ClaimedCollaborativeReadText,
  stageDP23ClaimedCollaborativeReadSourceRef,
  stageDP23ClaimedCollaborativeReadSourceRefDistinct,
  stageDP23ComposedProseClaimText,
  stageDP23ReceiverSaltHex,
  stageDP23ReceiverVerifierDigestHex,
  stageDP23CounterpartSaltHex,
  stageDP23CounterpartVerifierDigestHex,
  stageDP23AllThirteenTargetRefs,
  pondStageDP23CollaborativeReadSessionRequestTemplate,
  pondStageDP23CollaborativeLiveAdmissionTemplate,
  pondStageDP14CollaborativeActivationRecordTemplate,
  pondStageDP14CollaborativeAdmissionRecordTemplate,
  pondStageDP23CounterpartLegsBundle,
  stageDP23HealthyCounterpartJoinRecord,
} from "../src/fixtures/stage-d-p23-collaborative-live-read.ts";
import {
  assessPondCollaborativeReadSessionRequestDecision,
  POND_STAGE_DP23_COLLABORATIVE_READ_SESSION_REQUEST_INPUT_KEYS,
  POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS,
} from "../src/contracts/pond-collaborative-read-session-request-decision.ts";
import {
  assessPondCollaborativeReadLiveAdmissionDecision,
  POND_STAGE_DP23_COLLABORATIVE_READ_LIVE_ADMISSION_DECISION_INPUT_KEYS,
} from "../src/contracts/pond-collaborative-read-live-admission-decision.ts";
import {
  assessPondClaimedCollaborativeReadRefusal,
  POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES,
} from "../src/contracts/pond-claimed-collaborative-read-refusal.ts";

// The frozen lanes this lane's chain ties against or deliberately does
// NOT touch: the D-P22 voice arm set (the no-drift leg tie), the
// D-P21/D-P22 event instants (the do-not-postdate proof), the D-P20
// policy instant and gate-expiry pin, the D-P19 receipt's retention
// contrast, the D-P14 counterpart structural material re-inlined, and
// the frozen D-P15 establishment and read-gate entries the gate is
// re-run against.
import {
  stageDP22VoiceRequestMatrix,
  stageDP22VoiceRequestEventAtEpochMs,
  stageDP22TranscriptionDecisionEventAtEpochMs,
} from "../src/fixtures/stage-d-p22-pond-voice.ts";
import { POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS } from "../src/contracts/pond-voice-input-request-decision.ts";
import {
  stageDP21ReplyRequestEventAtEpochMs,
  stageDP21ProviderDecisionEventAtEpochMs,
} from "../src/fixtures/stage-d-p21-pond-replies.ts";
import {
  stageDP20PolicyEventAtEpochMs,
  stageDP20GateExpiryPolicyEvaluatedAtEpochMs,
  stageDP20ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p20-pond-transport.ts";
import {
  stageDP19ReceiptMatrix,
} from "../src/fixtures/stage-d-p19-pond-receipts.ts";
import {
  stageDP14GateEntryComplete,
  stageDP14CounterpartRef,
  stageDP14ReceiverSaltHex,
  stageDP14ReceiverVerifierDigestHex,
  stageDP14CounterpartSaltHex,
  stageDP14CounterpartVerifierDigestHex,
  stageDP14AllThirteenTargetRefs,
} from "../src/fixtures/stage-d-p14-collaborative-structural-reads.ts";
import {
  stageDP15SessionEntryLiveSessionEstablished,
  stageDP15ReadGateEntryActivated,
  stageDP15ReadGateEntryCollaborativeWideningRefused,
  stageDP15EvaluatedAtEpochMs,
} from "../src/fixtures/stage-d-p15-live-session.ts";
import { stageDP6AuthenticationObservationComplete } from "../src/fixtures/stage-d-p6-local-principal-authentication-observation.ts";
import { assessPondLiveSessionReadGate } from "../src/contracts/pond-live-session-read-gate.ts";

import {
  assessPondCollaborativeReadSessionRequestDecision as assessGeneratedCollaborativeReadSessionRequestDecision,
  assessPondCollaborativeReadLiveAdmissionDecision as assessGeneratedCollaborativeReadLiveAdmissionDecision,
  assessPondClaimedCollaborativeReadRefusal as assessGeneratedClaimedCollaborativeReadRefusal,
  pondStageDP23CollaborativeReadSessionRequestTemplate as generatedSessionRequestTemplate,
  pondStageDP23CollaborativeLiveAdmissionTemplate as generatedLiveAdmissionTemplate,
  pondStageDP14CollaborativeActivationRecordTemplate as generatedActivationTemplate,
  pondStageDP14CollaborativeAdmissionRecordTemplate as generatedAdmissionTemplate,
} from "../ui/generated/pond-stage-d-live-session-collaborative-read.js";
import {
  currentClaimedCollaborativeReadWallPosture,
  currentCollaborativeReadPosture,
  heldCollaborativeLiveReadEntries,
  heldCollaborativeReadRequestEntries,
  performCollaborativeLiveReadActivation,
  recordCollaborativeReadSessionRequest,
  renderPondCollaborativeRead,
} from "../ui/pond-collaborative-read.js";
import { establishLiveSession, retractLiveSession } from "../ui/pond-live-session.js";
import { heldDeliveryDecisions } from "../ui/pond-delivery.js";
import { heldDispatchDecisions } from "../ui/pond-dispatch.js";
import { heldReplyRequestEntries } from "../ui/pond-replies.js";
import { heldConversationRecordEntries } from "../ui/pond-conversation.js";
import { heldVoiceRequestEntries } from "../ui/pond-voice.js";

const repoRoot = new URL("..", import.meta.url).pathname;
const deepClone = (value) => JSON.parse(JSON.stringify(value));
const assertDeepFrozen = (value, path) => {
  if (value === null || typeof value === "object") {
    if (value === null) return;
    assert.ok(Object.isFrozen(value), `not frozen: ${path}`);
    for (const key of Object.keys(value))
      assertDeepFrozen(value[key], `${path}.${key}`);
  }
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
// input the contract demands — the input builder re-assembles it in the
// contract's exact key order so the recompute is a clean re-run.
const REQUEST_INPUT_KEYS = [
  "collaborativeReadSessionRequest",
  "counterpartJoinDeclarationRecord",
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

// The 13 shared gate legs (the request input minus the two lane keys)
// — exactly the frozen D-P15 read-gate input, so the gate re-run uses
// the held legs verbatim.
const GATE_LEG_KEYS = REQUEST_INPUT_KEYS.filter(
  (key) => key !== "collaborativeReadSessionRequest" &&
    key !== "counterpartJoinDeclarationRecord",
);

// The 26-key live-read input: the 26 exact keys of the second
// contract's declared input.
const LIVE_READ_INPUT_KEYS = [
  "collaborativeReadLiveAdmission",
  "receiverHeldPrincipalRef",
  "counterpartPrincipalRef",
  "collaborativeReadSessionRequest",
  "counterpartJoinDeclarationRecord",
  "collaborativeActivationRecord",
  "readAdmissionRecord",
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
  "counterpartDp5CeremonyRecord",
  "counterpartDp6ObservationRecord",
  "counterpartDp8VerifierRecord",
  "counterpartDp8ProofRecord",
  "counterpartDp9IssuanceRecord",
  "counterpartDp9MappingRecord",
  "counterpartDp10ActivationRecord",
  "evaluatedAtEpochMs",
  "maximumAgeMs",
];

// The 11 record legs shared between the lanes' recorded arms — the
// no-drift tie excludes ONLY the two cross-lane evaluation instants
// (the lanes deliberately evaluate on different clocks).
const SHARED_LEG_KEYS = [
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
];

const requestInputOf = (entry) => {
  const input = {};
  for (const key of REQUEST_INPUT_KEYS) input[key] = entry[key];
  return input;
};
const liveReadInputOf = (entry) => {
  const input = {};
  for (const key of LIVE_READ_INPUT_KEYS) input[key] = entry[key];
  return input;
};
const wallInputOf = (entry) => ({
  claimedCollaborativeRead: entry.claimedCollaborativeRead,
});

const byLabel = (matrix, label) => {
  const entry = matrix.find((candidate) => candidate.fixtureLabel === label);
  assert.ok(entry, `missing fixture arm: ${label}`);
  return entry;
};

const evaluated = stageDP23CollaborativeLiveReadEvaluatedAtEpochMs;
const maximumAge = stageDP23ReceiverMaximumAgeMs;

const requestRecordedArm = byLabel(
  stageDP23CollaborativeReadSessionRequestMatrix,
  "collaborative_read_request_recorded_session_scoped_no_scope_object",
);
const liveReadRecordedArm = byLabel(
  stageDP23CollaborativeLiveReadMatrix,
  "collaborative_live_read_recorded_both_chains_green_at_inclusive_boundary",
);

// The cut's own fresh runs — only D-P23 assessments ever land here.
const freshRuns = [];
const runRequest = (entry) => {
  const fresh = assessPondCollaborativeReadSessionRequestDecision(
    requestInputOf(entry),
  );
  freshRuns.push(fresh);
  return fresh;
};
const runFreshRequest = (input) =>
  assessPondCollaborativeReadSessionRequestDecision(input);
const runLiveRead = (entry) => {
  const fresh = assessPondCollaborativeReadLiveAdmissionDecision(
    liveReadInputOf(entry),
  );
  freshRuns.push(fresh);
  return fresh;
};
const runFreshLiveRead = (input) =>
  assessPondCollaborativeReadLiveAdmissionDecision(input);
const wallFreshRuns = [];
const runWall = (entry) => {
  const fresh = assessPondClaimedCollaborativeReadRefusal(wallInputOf(entry));
  wallFreshRuns.push(fresh);
  return fresh;
};
const runFreshWall = (input) => assessPondClaimedCollaborativeReadRefusal(input);

// The all-false ceiling families of this cut — all THREE contracts
// walked literally on every arm: the request ceiling (a receiver-side
// ask that reads nothing, creates no scope object, and grants
// nothing), the live-read ceiling (an admitted structural-inspection
// scope consumed by nothing this cut), and the wall ceiling (a refusal
// echoes nothing about any claim).
const REQUEST_CEILING_KEYS = [
  "collaborativeReadRequestEstablishesReadOrRecordRead",
  "collaborativeReadRequestEstablishesReadResult",
  "collaborativeReadRequestEstablishesScopeObjectOrMembershipRegistry",
  "collaborativeReadRequestEstablishesLiveCounterpartOrChain",
  "collaborativeReadRequestEstablishesAgentIdentityOrAdmission",
  "collaborativeReadRequestEstablishesGrant",
  "collaborativeReadRequestEstablishesConsequenceOrExecution",
  "collaborativeReadRequestEstablishesAuthorityFromProse",
  "collaborativeReadRequestEstablishesMembershipOrRoomPresence",
  "collaborativeReadRequestEstablishesScope",
  "collaborativeReadRequestCrossesScopeOrAdmitsPersonalState",
  "collaborativeReadRequestAcceptsErc8004IdentityAsPrincipalId",
  "collaborativeReadRequestConsumedThisCut",
  "credentialAdmitted",
  "principalIdAcceptedAsAuthorization",
  "currentTruthAdmitted",
];

const LIVE_READ_CEILING_KEYS = [
  "collaborativeLiveReadEstablishesReadResultOrContent",
  "collaborativeLiveReadEstablishesScopeObjectOrMembershipRegistry",
  "collaborativeLiveReadEstablishesLiveCounterpartOrChain",
  "collaborativeLiveReadEstablishesAgentIdentityOrAdmission",
  "collaborativeLiveReadEstablishesGrant",
  "collaborativeLiveReadEstablishesConsequenceOrExecution",
  "collaborativeLiveReadEstablishesAuthorityFromProse",
  "collaborativeLiveReadEstablishesMembershipOrRoomPresence",
  "collaborativeLiveReadEstablishesScope",
  "collaborativeLiveReadCrossesScopeOrAdmitsPersonalState",
  "collaborativeLiveReadAdmitsMemoryOrCounterpartMemoryContent",
  "collaborativeLiveReadAcceptsErc8004IdentityAsPrincipalId",
  "collaborativeLiveReadConsumedThisCut",
  "credentialAdmitted",
  "principalIdAcceptedAsAuthorization",
  "currentTruthAdmitted",
];

const WALL_CEILING_KEYS = [
  "claimedCollaborativeReadEstablishesReadResult",
  "claimedCollaborativeReadEstablishesStructuralRecordEvidence",
  "claimedCollaborativeReadEstablishesCounterpartIdentity",
  "claimedCollaborativeReadEstablishesAdmission",
  "claimedCollaborativeReadEstablishesAuthority",
  "claimedCollaborativeReadContentEchoed",
  "claimedCollaborativeReadContentStored",
  "claimedCollaborativeReadSourceRefEchoed",
  "claimedCollaborativeReadSourceRefAcceptedAsIdentity",
  "claimedCollaborativeReadClassEchoed",
  "claimedCollaborativeReadEstablishesLiveSessionOrReadGate",
  "claimedCollaborativeReadEstablishesGrant",
  "claimedCollaborativeReadEstablishesConsequenceOrExecution",
  "claimedCollaborativeReadEstablishesMembership",
  "credentialAdmitted",
  "principalIdAcceptedAsAuthorization",
];

// The recorded request record's exact key set — 15 keys (one wider than
// the D-P22 voice request: the declared counterpartPrincipalRef slot —
// the audience law demands the request name its exact declared set).
const REQUEST_RECORD_KEYS = [
  "contractVersion",
  "kind",
  "principalRef",
  "counterpartPrincipalRef",
  "collaborativeReadRequestBasis",
  "collaborativeReadRequestMetadata",
  "collaborativeRequestLanePosture",
  "collaborativeRequestAudiencePosture",
  "collaborativeRequestScopePosture",
  "collaborativeRequestPersonalStatePosture",
  "counterpartIdentityPosture",
  "sessionScopePosture",
  "memoryLaneExclusionPosture",
  "authorityPosture",
  "authority",
];

// The live-read admission record's exact key set — 17 keys, no record
// content of any principal, no scope object, no grant field.
const LIVE_READ_RECORD_KEYS = [
  "contractVersion",
  "kind",
  "receiverHeldPrincipalRef",
  "counterpartPrincipalRef",
  "collaborativeLiveReadBasis",
  "collaborativeLiveReadMetadata",
  "requestedCollaborativeReadScope",
  "audienceBindingPosture",
  "counterpartChainPosture",
  "scopeCrossingPosture",
  "scopeObjectPosture",
  "truthPosture",
  "sessionScopePosture",
  "revocabilityPosture",
  "erc8004EvidencePosture",
  "authorityPosture",
  "authority",
];

// Walk a value's strings against a probe — the zero-echo proof leans on
// it for every wall arm.
const carriesString = (value, probe) => {
  if (typeof value === "string") return value.includes(probe);
  if (value === null || typeof value !== "object") return false;
  return Object.values(value).some((entry) => carriesString(entry, probe));
};

// The five refused session-request bases; each refuses on the basis
// check alone, every leg echo green.
const REFUSED_REQUEST_BASES = [
  "inferred_from_room_or_conversation_presence",
  "inferred_from_agent_or_provider_membership",
  "inferred_from_two_principals_in_view",
  "asserted_by_counterpart_declaration",
  "replayed_from_prior_collaborative_read_request",
];

// The five refused live-read bases.
const REFUSED_LIVE_READ_BASES = [
  "derived_from_single_principal_activations",
  "inferred_from_counterpart_presence",
  "inferred_from_structural_chain_readiness",
  "asserted_by_counterpart",
  "replayed_from_prior_collaborative_live_read",
];

// The three declared claimed-collaborative content classes — a
// claim-recognition vocabulary, never declared intake (the D-P22
// deviation-8 mold). Every class still refuses — the terminal class is
// the honest one: the product of a joint read never performed.
const CLAIMED_COLLABORATIVE_CONTENT_CLASSES = [
  "receiver_structural_record_content",
  "counterpart_structural_record_content",
  "joint_collaborative_read_content",
];

const terminalArm = byLabel(
  stageDP23ClaimedCollaborativeReadMatrix,
  "claimed_joint_collaborative_read_content_refused_no_result_exists",
);

// ---------------------------------------------------------------
// Block 1: matrix recompute — every session-request arm deep-equals
// its pinned assessment, every arm and assessment is deep-frozen, the
// recorded request arm carries the exact positive verdict with the
// honest freshness arithmetic and the full mapped echo set, every
// arm's ceiling stays all-false; every live-read arm likewise with the
// admitted 13-label target table on the performed arm and both mapped
// chains readable; every wall arm refuses with the single literal
// state, the wall ceiling all-false, and the refusal version marked
// invalid exactly on invalid claims.
// ---------------------------------------------------------------
block("matrix", () => {
  assert.equal(
    stageDP23CollaborativeReadSessionRequestMatrix.length,
    15,
    "the session-request matrix is pinned at 15 arms",
  );
  assert.equal(
    stageDP23CollaborativeLiveReadMatrix.length,
    15,
    "the live-read matrix is pinned at 15 arms",
  );
  assert.equal(
    stageDP23ClaimedCollaborativeReadMatrix.length,
    9,
    "the claimed-collaborative matrix is pinned at 9 arms",
  );
  for (const arm of stageDP23CollaborativeReadSessionRequestMatrix) {
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
      "pond-collaborative-read-session-request-decision-d-p23",
      arm.fixtureLabel,
    );
    assert.ok(
      fresh.collaborativeReadSessionRequestState ===
        "collaborative_read_session_request_not_recorded" ||
        fresh.collaborativeReadSessionRequestState ===
          "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
      arm.fixtureLabel,
    );
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.satisfiedChecks), arm.fixtureLabel);
    assert.ok(Array.isArray(fresh.unsatisfiedChecks), arm.fixtureLabel);
    assertLacksKeys(
      fresh,
      POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS,
      `arm ${arm.fixtureLabel}`,
    );
    for (const ceilingKey of REQUEST_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }

  // The recorded request arm carries the full positive verdict with the
  // request recorded as session-scoped governance that creates no scope
  // object, no membership registry, and reads nothing.
  assert.equal(
    requestRecordedArm.assessment.collaborativeReadSessionRequestState,
    "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.reason,
    "all_collaborative_read_request_checks_satisfied",
    requestRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    deepClone(requestRecordedArm.assessment.collaborativeReadRequestEventFreshnessDiagnosis),
    { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 500 },
    `${requestRecordedArm.fixtureLabel}: the request event's freshness arithmetic is exact`,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedCounterpartJoinState,
    "fixture_structural_receiver_declared_counterpart_join",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedCounterpartJoinReason,
    "all_counterpart_join_checks_satisfied",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedReadGateReassessmentReason,
    "all_read_gate_checks_satisfied",
    requestRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    deepClone(requestRecordedArm.assessment.mappedReadGateFreshnessDiagnosis),
    {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: 5500,
    },
    `${requestRecordedArm.fixtureLabel}: the read-gate echo's own arithmetic is exact`,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedEstablishmentState,
    "live_session_scoped_authentication_established",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedEstablishmentReason,
    "all_session_establishment_checks_satisfied",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedDp10ActivationState,
    "fixture_structural_session_scoped_private_read_activation",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedDp10Reason,
    "all_activation_checks_satisfied",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.mappedDp10SessionScopePosture,
    "session_scoped_receiver_restart_ends_activation",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.assessment.collaborativeReadRequestRetentionPosture,
    "collaborative_read_session_request_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    requestRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    Object.keys(requestRecordedArm.collaborativeReadSessionRequest).sort(),
    [...REQUEST_RECORD_KEYS].sort(),
    `${requestRecordedArm.fixtureLabel}: the request record has exactly the pinned keys`,
  );
  assert.equal(
    requestRecordedArm.collaborativeReadSessionRequest.authority,
    "none",
    requestRecordedArm.fixtureLabel,
  );
  assert.equal(
    requestRecordedArm.collaborativeReadSessionRequest.collaborativeReadRequestMetadata
      .collaborative_read_requested_at_epoch_ms,
    stageDP23CollaborativeReadRequestEventAtEpochMs,
    `${requestRecordedArm.fixtureLabel}: the request event is the pinned instant`,
  );
  assert.equal(
    requestRecordedArm.collaborativeReadSessionRequest.principalRef,
    stageDP23ReceiverRef,
    `${requestRecordedArm.fixtureLabel}: the request binds the receiver-held principal`,
  );
  assert.equal(
    requestRecordedArm.collaborativeReadSessionRequest.counterpartPrincipalRef,
    stageDP23CounterpartRef,
    `${requestRecordedArm.fixtureLabel}: the request names the declared counterpart`,
  );

  for (const arm of stageDP23CollaborativeLiveReadMatrix) {
    assert.ok(arm.fixtureLabel, "every live-read arm carries a fixture label");
    const fresh = runLiveRead(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `live-read arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `live-read arm ${arm.fixtureLabel}`);
    assert.equal(
      fresh.contractVersion,
      "pond-collaborative-read-live-admission-decision-d-p23",
      arm.fixtureLabel,
    );
    assert.ok(
      fresh.collaborativeLiveReadState === "collaborative_live_read_not_recorded" ||
        fresh.collaborativeLiveReadState ===
          "collaborative_live_structural_records_read_admitted_session_scoped_no_scope_object_no_content",
      arm.fixtureLabel,
    );
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.equal(fresh.collaborativeLiveReadConsumedThisCut, false, arm.fixtureLabel);
    assertLacksKeys(
      fresh,
      POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS,
      `live-read arm ${arm.fixtureLabel}`,
    );
    for (const ceilingKey of LIVE_READ_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `live-read ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
  }

  // The recorded live-read arm carries the full positive verdict at the
  // inclusive counterpart boundary — the admitted 13-label structural
  // table echoed verbatim, both mapped chains green, and the request
  // re-run echo readable one depth deeper.
  assert.equal(
    liveReadRecordedArm.assessment.collaborativeLiveReadState,
    "collaborative_live_structural_records_read_admitted_session_scoped_no_scope_object_no_content",
    liveReadRecordedArm.fixtureLabel,
  );
  assert.equal(
    liveReadRecordedArm.assessment.reason,
    "all_collaborative_live_read_checks_satisfied",
    liveReadRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    deepClone(liveReadRecordedArm.assessment.recordedAdmittedTargetRefs),
    deepClone(stageDP23AllThirteenTargetRefs),
    `${liveReadRecordedArm.fixtureLabel}: the admitted table is the full 13-label structural table`,
  );
  assert.deepEqual(
    deepClone(liveReadRecordedArm.assessment.mappedCollaborativeReadRequestState),
    "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
    `${liveReadRecordedArm.fixtureLabel}: the request re-run echo is the recorded state one depth down`,
  );
  assert.equal(
    liveReadRecordedArm.assessment.mappedReadRequestReassessmentReason,
    "all_collaborative_read_request_checks_satisfied",
    liveReadRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    deepClone(liveReadRecordedArm.assessment.mappedReadRequestFreshnessDiagnosis),
    { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 15000 },
    `${liveReadRecordedArm.fixtureLabel}: the request echo's own diagnosis rides verbatim`,
  );
  assert.equal(
    liveReadRecordedArm.assessment.mappedReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
    liveReadRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    deepClone(liveReadRecordedArm.assessment.mappedReadGateFreshnessDiagnosis),
    { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 20000 },
    `${liveReadRecordedArm.fixtureLabel}: the gate echo's own diagnosis rides verbatim`,
  );
  assert.equal(
    liveReadRecordedArm.assessment.mappedDp14ActivationState,
    "fixture_structural_session_scoped_collaborative_structural_read_activation",
    liveReadRecordedArm.fixtureLabel,
  );
  assert.equal(
    liveReadRecordedArm.assessment.mappedDp14ActivationReason,
    "all_collaborative_read_gate_checks_satisfied",
    liveReadRecordedArm.fixtureLabel,
  );
  assert.equal(
    liveReadRecordedArm.assessment.mappedDp14AdmissionState,
    "fixture_structural_collaborative_structural_record_read_admitted",
    liveReadRecordedArm.fixtureLabel,
  );
  assert.equal(
    liveReadRecordedArm.assessment.mappedDp14AdmissionReason,
    "all_collaborative_read_admission_checks_satisfied",
    liveReadRecordedArm.fixtureLabel,
  );
  assert.equal(
    liveReadRecordedArm.assessment.collaborativeLiveReadRetentionPosture,
    "collaborative_live_read_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction",
    liveReadRecordedArm.fixtureLabel,
  );
  assert.deepEqual(
    Object.keys(liveReadRecordedArm.collaborativeReadLiveAdmission).sort(),
    [...LIVE_READ_RECORD_KEYS].sort(),
    `${liveReadRecordedArm.fixtureLabel}: the live-read record has exactly the pinned keys`,
  );
  assert.equal(
    liveReadRecordedArm.collaborativeReadLiveAdmission.authority,
    "none",
    liveReadRecordedArm.fixtureLabel,
  );
  assert.equal(
    liveReadRecordedArm.collaborativeReadLiveAdmission.collaborativeLiveReadMetadata
      .collaborative_live_read_recorded_at_epoch_ms,
    stageDP23CollaborativeLiveReadEventAtEpochMs,
    `${liveReadRecordedArm.fixtureLabel}: the live-read event is the pinned instant`,
  );

  // Every wall arm refuses — one state, the standing posture, the wall
  // ceiling all-false, the version marked invalid exactly on invalid
  // claims, and zero claim echo on every arm (not even of the
  // receiver-composed prose arm whose text is a known D-P16 fact).
  for (const arm of stageDP23ClaimedCollaborativeReadMatrix) {
    assert.ok(arm.fixtureLabel, "every wall arm carries a fixture label");
    const fresh = runWall(arm);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(arm.assessment),
      `wall arm ${arm.fixtureLabel} recomputes to a different assessment`,
    );
    assertDeepFrozen(arm, `wall arm ${arm.fixtureLabel}`);
    assert.equal(
      fresh.claimedCollaborativeReadState,
      "claimed_collaborative_read_content_not_composed",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.claimedCollaborativeReadWallPosture,
      "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut",
      arm.fixtureLabel,
    );
    // The version marks the refusal's own declarative state: a
    // well-shaped claim keeps the cut's version; an invalid claim
    // refuses as invalid (the honest fallback).
    assert.ok(
      fresh.claimedCollaborativeReadRefusalVersion ===
        (fresh.reason === "pond_claimed_collaborative_read_claim_invalid"
          ? "invalid"
          : "pond-claimed-collaborative-read-refusal-d-p23"),
      arm.fixtureLabel,
    );
    assert.equal(fresh.authority, "none", arm.fixtureLabel);
    assert.equal(fresh.runtimeActivationPosture, "not_included", arm.fixtureLabel);
    assertLacksKeys(
      fresh,
      POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS,
      `wall arm ${arm.fixtureLabel}`,
    );
    for (const ceilingKey of WALL_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `wall ceiling ${ceilingKey} on ${arm.fixtureLabel}`);
    }
    const claim = arm.claimedCollaborativeRead ?? {};
    // The zero-echo probe walks the claim's VALUES (the text, the
    // source, and the class). The declared class literal is not probed
    // as a value: the terminal cause names the declared vocabulary
    // literal by way of its own cause name — an honest vocabulary
    // reference, never the echo of a claim. The text and source are
    // probed on every arm.
    const claimValues = [
      claim.claimedCollaborativeReadText,
      claim.claimedCollaborativeReadSourceRef,
    ].filter((value) => typeof value === "string" && value.length > 0);
    for (const value of claimValues) {
      assert.ok(
        !carriesString(fresh, value),
        `wall arm ${arm.fixtureLabel} echoes a claimed value: ${value}`,
      );
    }
  }
});// ---------------------------------------------------------------
// Block 2: identity ties — the request's held legs cannot drift from
// the frozen D-P22 voice arms; the live-read re-runs the SAME legs;
// the counterpart bundle re-inlines the frozen D-P14 counterpart
// structural material with exactly one recorded deviation (the
// re-timed counterpart D-P6 observation) at the digest level with no
// secret anywhere; the frozen D-P15 gate re-runs green over the held
// legs and still refuses the collaborative widening with its frozen
// literal verbatim; the lane's clock pins descend arithmetically with
// the do-not-postdate proof against the whole downstream chain; and
// the inclusive-boundary expiry is exact arithmetic.
// ---------------------------------------------------------------
block("identityTies", () => {
  // Clock pins with the epoch prefix, pinned numerically.
  assert.equal(stageDP23EstablishedAtEpochMs, 1800000060000);
  assert.equal(stageDP23ReceiverDp6ObservedAtEpochMs, 1800000030000);
  assert.equal(stageDP23CounterpartDp6RetimedObservedAtEpochMs, 1800000020000);
  assert.equal(stageDP23CollaborativeReadRequestEventAtEpochMs, 1800000065000);
  assert.equal(stageDP23CollaborativeReadRequestEvaluatedAtEpochMs, 1800000065500);
  assert.equal(stageDP23CollaborativeLiveReadEventAtEpochMs, 1800000066000);
  assert.equal(stageDP23CollaborativeLiveReadEvaluatedAtEpochMs, 1800000080000);
  assert.equal(stageDP23CounterpartExpiredEvaluatedAtEpochMs, 1800000080001);
  assert.equal(stageDP23ReceiverExpiredEvaluatedAtEpochMs, 1800000090001);
  assert.equal(stageDP23FutureCollaborativeReadRequestEventAtEpochMs, 1800000090000);
  assert.equal(stageDP23FutureCollaborativeLiveReadEventAtEpochMs, 1800000080100);
  assert.equal(stageDP23PreEstablishmentRequestEventAtEpochMs, 1800000059000);
  assert.equal(stageDP23FarFutureLadderOrderEvaluatedAtEpochMs, 1800000200000);
  assert.equal(stageDP23RetractedRequestEventAtEpochMs, 1800000068000);
  assert.equal(stageDP23RetractedLiveReadEventAtEpochMs, 1800000068500);
  assert.equal(stageDP23RetractionRecordedAtEpochMs, 1800000082000);
  assert.equal(stageDP23ConfinedReassessmentEvaluatedAtEpochMs, 1800000083000);
  assert.equal(stageDP23ReceiverMaximumAgeMs, 60000);
  assert.equal(stageDP23DP14ActivationActivatedAtEpochMs, 1800000066000);
  assert.equal(stageDP23DP14StaleActivationActivatedAtEpochMs, 1800000010000);
  assert.equal(stageDP20ReceiverMaximumAgeMs, maximumAge);

  // The lane's request event postdates the establishment; the
  // pre-establishment arm's event predates it (that is its refusal).
  assert.ok(
    stageDP23CollaborativeReadRequestEventAtEpochMs > stageDP23EstablishedAtEpochMs,
    "the recorded request postdates the establishment",
  );
  assert.ok(
    stageDP23PreEstablishmentRequestEventAtEpochMs < stageDP23EstablishedAtEpochMs,
    "the pre-establishment arm's event predates the session",
  );

  // Do-not-postdate: the retracted request predates the ENTIRE
  // downstream chain — the transport policy, the reply pair, the voice
  // pair — so this lane's scope binds only the establishment, and the
  // other lanes are never parents of this request.
  assert.ok(
    stageDP23RetractedRequestEventAtEpochMs < stageDP20PolicyEventAtEpochMs,
    "the retracted request predates the D-P20 policy event",
  );
  assert.ok(stageDP20PolicyEventAtEpochMs < stageDP21ReplyRequestEventAtEpochMs);
  assert.ok(stageDP21ReplyRequestEventAtEpochMs < stageDP21ProviderDecisionEventAtEpochMs);
  assert.ok(stageDP21ProviderDecisionEventAtEpochMs < stageDP22VoiceRequestEventAtEpochMs);
  assert.ok(stageDP22VoiceRequestEventAtEpochMs < stageDP22TranscriptionDecisionEventAtEpochMs);

  // The no-drift tie: the recorded request's held legs are the frozen
  // D-P22 voice arm's legs, key-by-key, with both cross-lane
  // evaluation instants excluded (the lanes deliberately evaluate on
  // different clocks but share the structural legs verbatim).
  const voiceArm = byLabel(
    stageDP22VoiceRequestMatrix,
    "voice_request_recorded_session_scoped",
  );
  for (const key of SHARED_LEG_KEYS) {
    assert.deepEqual(
      deepClone(requestRecordedArm[key]),
      deepClone(voiceArm[key]),
      `leg ${key} drifted between the collaborative request and the frozen D-P22 voice arm`,
    );
  }
  assert.equal(
    requestRecordedArm.receiverMaximumAgeMs,
    voiceArm.receiverMaximumAgeMs,
    "the declared maximum age drifted between the lanes",
  );

  // The lane-internal tie: the live-read arm runs over the SAME held
  // legs the request ran over — key-by-key, plus the maximum age.
  for (const key of SHARED_LEG_KEYS) {
    assert.deepEqual(
      deepClone(requestRecordedArm[key]),
      deepClone(liveReadRecordedArm[key]),
      `leg ${key} drifted between the request and the live-read decision`,
    );
  }
  assert.equal(
    requestRecordedArm.receiverMaximumAgeMs,
    liveReadRecordedArm.maximumAgeMs,
    "the declared maximum age drifted inside the lane",
  );

  // The counterpart digest-level drift pins: every counterpart leg in
  // the bundle re-inlines the frozen D-P14 structural material —
  // deep-equal except the ONE recorded deviation, the re-timed
  // counterpart D-P6 observation (the lane's honest re-timing),
  // reverted-and-compared so the re-timing is the only difference.
  const p14CounterpartKeys = [
    "counterpartDp5CeremonyRecord",
    "counterpartDp6ObservationRecord",
    "counterpartDp8VerifierRecord",
    "counterpartDp8ProofRecord",
    "counterpartDp9IssuanceRecord",
    "counterpartDp9MappingRecord",
    "counterpartDp10ActivationRecord",
  ];
  for (const key of p14CounterpartKeys) {
    const laneRecord = pondStageDP23CounterpartLegsBundle[key];
    const frozenRecord = stageDP14GateEntryComplete[key];
    if (key === "counterpartDp6ObservationRecord") {
      assert.equal(
        frozenRecord.observationMetadata.observed_at_epoch_ms,
        stageDP23ReceiverDp6ObservedAtEpochMs,
        "the frozen D-P14 counterpart observation should hold the original instant",
      );
      assert.equal(
        laneRecord.observationMetadata.observed_at_epoch_ms,
        stageDP23CounterpartDp6RetimedObservedAtEpochMs,
        "the lane's counterpart observation should hold the re-timed instant",
      );
      const reverted = deepClone(frozenRecord);
      reverted.observationMetadata.observed_at_epoch_ms =
        stageDP23CounterpartDp6RetimedObservedAtEpochMs;
      assert.deepEqual(
        deepClone(laneRecord),
        reverted,
        "the counterpart observation differs beyond the recorded re-timing",
      );
      continue;
    }
    assert.deepEqual(
      deepClone(laneRecord),
      deepClone(frozenRecord),
      `counterpart leg ${key} drifted from the frozen D-P14 structural record`,
    );
  }

  // The counterpart pair is pinned at DIGEST level only — no secret
  // anywhere in this cut; the four constants equal the frozen D-P14
  // exports exactly.
  assert.equal(stageDP23ReceiverSaltHex, stageDP14ReceiverSaltHex);
  assert.equal(stageDP23ReceiverVerifierDigestHex, stageDP14ReceiverVerifierDigestHex);
  assert.equal(stageDP23CounterpartSaltHex, stageDP14CounterpartSaltHex);
  assert.equal(
    stageDP23CounterpartVerifierDigestHex,
    stageDP14CounterpartVerifierDigestHex,
  );
  assert.ok(
    carriesString(
      pondStageDP23CounterpartLegsBundle.counterpartDp8VerifierRecord,
      stageDP14CounterpartVerifierDigestHex,
    ),
    "the counterpart verifier record should carry the frozen digest",
  );

  // The healthy join record and both principal refs re-inline the
  // frozen D-P14 values verbatim; the 13-label structural table is the
  // frozen table.
  assert.deepEqual(
    deepClone(stageDP23HealthyCounterpartJoinRecord),
    deepClone(stageDP14GateEntryComplete.counterpartJoinDeclarationRecord),
    "the healthy join record drifted from the frozen D-P14 join",
  );
  assert.equal(stageDP23CounterpartRef, stageDP14CounterpartRef);
  assert.deepEqual(
    deepClone(stageDP23AllThirteenTargetRefs),
    deepClone(stageDP14AllThirteenTargetRefs),
    "the 13-label structural table drifted from the frozen table",
  );

  // The frozen D-P15 gate STILL runs green over the held legs (the
  // request's gate echo is a live re-run, not a memory) and its
  // freshness diagnosis is the exact arithmetic the mapped echo rides.
  const gateOverHeldLegs = assessPondLiveSessionReadGate({
    readGateRecord: requestRecordedArm.readGateRecord,
    receiverHeldPrincipalRef: requestRecordedArm.receiverHeldPrincipalRef,
    establishmentRecord: requestRecordedArm.establishmentRecord,
    dp5CeremonyRecord: requestRecordedArm.dp5CeremonyRecord,
    dp6ObservationRecord: requestRecordedArm.dp6ObservationRecord,
    dp8VerifierRecord: requestRecordedArm.dp8VerifierRecord,
    dp8ProofRecord: requestRecordedArm.dp8ProofRecord,
    dp9IssuanceRecord: requestRecordedArm.dp9IssuanceRecord,
    dp9MappingRecord: requestRecordedArm.dp9MappingRecord,
    dp10ActivationRecord: requestRecordedArm.dp10ActivationRecord,
    receiverRetractionRecord: requestRecordedArm.receiverRetractionRecord,
    receiverEvaluatedAtEpochMs: requestRecordedArm.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: requestRecordedArm.receiverMaximumAgeMs,
  });
  assert.equal(
    gateOverHeldLegs.liveSessionReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
    "the frozen gate should stay green over the lane's held legs",
  );
  assert.equal(gateOverHeldLegs.reason, "all_read_gate_checks_satisfied");
  assert.deepEqual(
    deepClone(gateOverHeldLegs.readGateFreshnessDiagnosis),
    deepClone(requestRecordedArm.assessment.mappedReadGateFreshnessDiagnosis),
    "the mapped gate diagnosis should ride the frozen gate's own",
  );

  // The frozen-refusal tie: the D-P15 gate over the collaborative
  // widening entry still yields the frozen refusal — the frozen D-P15
  // literals did not move, byte for byte.
  const widened = stageDP15ReadGateEntryCollaborativeWideningRefused;
  const gateOverWidening = assessPondLiveSessionReadGate({
    readGateRecord: widened.readGateRecord,
    receiverHeldPrincipalRef: widened.receiverHeldPrincipalRef,
    establishmentRecord: widened.establishmentRecord,
    dp5CeremonyRecord: widened.dp5CeremonyRecord,
    dp6ObservationRecord: widened.dp6ObservationRecord,
    dp8VerifierRecord: widened.dp8VerifierRecord,
    dp8ProofRecord: widened.dp8ProofRecord,
    dp9IssuanceRecord: widened.dp9IssuanceRecord,
    dp9MappingRecord: widened.dp9MappingRecord,
    dp10ActivationRecord: widened.dp10ActivationRecord,
    receiverRetractionRecord: widened.receiverRetractionRecord,
    receiverEvaluatedAtEpochMs: widened.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: widened.receiverMaximumAgeMs,
  });
  assert.deepEqual(
    deepClone(gateOverWidening),
    deepClone(widened.assessment),
    "the frozen widening entry should recompute byte-equal",
  );
  assert.equal(
    gateOverWidening.reason,
    "collaborative_or_agent_scope_refused",
    "the frozen D-P15 refusal literal must remain verbatim",
  );

  // Inclusive-boundary arithmetic: the performed eval sits EXACTLY at
  // the counterpart's inclusive boundary (fresh), one tick past it the
  // counterpart chain is stale (its own death), and the D-P15 gate
  // still has runway — the co-read dies its own death while the
  // session lives.
  const cpBoundaryAge =
    stageDP23CollaborativeLiveReadEvaluatedAtEpochMs -
    stageDP23CounterpartDp6RetimedObservedAtEpochMs;
  assert.equal(cpBoundaryAge, 60000);
  assert.ok(cpBoundaryAge <= maximumAge, "the boundary age is inclusive-fresh");
  const cpExpiredAge =
    stageDP23CounterpartExpiredEvaluatedAtEpochMs -
    stageDP23CounterpartDp6RetimedObservedAtEpochMs;
  assert.equal(cpExpiredAge, 60001);
  assert.ok(cpExpiredAge > maximumAge, "one tick past the boundary the chain stales");
  assert.ok(
    stageDP23CounterpartExpiredEvaluatedAtEpochMs < stageDP20GateExpiryPolicyEvaluatedAtEpochMs,
    "the D-P15 gate still has runway at the counterpart's expiry",
  );
  assert.equal(stageDP20GateExpiryPolicyEvaluatedAtEpochMs, 1800000120001);

  // Staleness-arity: the recorded arms' freshness diagnoses are exact
  // arithmetic against the pinned event instants.
  assert.equal(
    requestRecordedArm.assessment.collaborativeReadRequestEventFreshnessDiagnosis
      .observationAgeMs,
    stageDP23CollaborativeReadRequestEvaluatedAtEpochMs -
      stageDP23CollaborativeReadRequestEventAtEpochMs,
    "the request diagnosis is the exact event age",
  );
  assert.equal(
    liveReadRecordedArm.assessment.collaborativeLiveReadEventFreshnessDiagnosis
      .observationAgeMs,
    stageDP23CollaborativeLiveReadEvaluatedAtEpochMs -
      stageDP23CollaborativeLiveReadEventAtEpochMs,
    "the live-read diagnosis is the exact event age",
  );
  assert.equal(
    liveReadRecordedArm.assessment.mappedReadRequestFreshnessDiagnosis.observationAgeMs,
    stageDP23CollaborativeLiveReadEvaluatedAtEpochMs -
      stageDP23CollaborativeReadRequestEventAtEpochMs,
    "the request echo's diagnosis is the exact event age under the live-read eval",
  );
  assert.equal(
    liveReadRecordedArm.assessment.mappedReadGateFreshnessDiagnosis.observationAgeMs,
    stageDP23CollaborativeLiveReadEvaluatedAtEpochMs - stageDP23EstablishedAtEpochMs,
    "the gate echo's diagnosis is the exact event age under the live-read eval",
  );

  // dv pins over the recorded arms; the claimed-collaborative
  // The recorded arms carry their kind on the record, never on the
  // assessment — the assessment is the decision, the record the event.
  assert.equal(
    requestRecordedArm.collaborativeReadSessionRequest.kind,
    "pond-collaborative-read-session-request",
  );
  assert.equal(
    liveReadRecordedArm.collaborativeReadLiveAdmission.kind,
    "pond-collaborative-read-live-admission",
  );
  assert.deepEqual(
    deepClone(POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES),
    deepClone(CLAIMED_COLLABORATIVE_CONTENT_CLASSES),
    "the declared claimed-collaborative class vocabulary drifted",
  );
  // No ad-hoc pair: the request's audience law demands pairwise
  // distinct declared principals.
  assert.notEqual(stageDP23ReceiverRef, stageDP23CounterpartRef);
  assert.ok(stageDP23ReceiverRef.startsWith("principal:fixture:"));
  assert.ok(stageDP23CounterpartRef.startsWith("principal:fixture:"));
});

// ---------------------------------------------------------------
// Block 3: recompute-agreement negatives — every refused basis
// refuses on its own check alone with every leg echo green; the
// structural join, freshness, scope, and invalid arms refuse at their
// honest causes with the mapped echoes readable; the live-read ladder
// arms (request rung, smuggle, own-death expiry, admission, activation
// staleness, confined) refuse at their dedicated causes with the
// mapped chains readable; and every claimed wall class refuses at its
// own cause with the terminal fold honest.
// ---------------------------------------------------------------
block("recomputeAgreementNegatives", () => {
  // The five refused session-request bases: the basis check alone is
  // the unsatisfied set, all seven other checks satisfied, all leg
  // echoes green (the gate, the establishment, the join, the D-P10
  // activation — nothing else moved).
  for (const basis of REFUSED_REQUEST_BASES) {
    const arm = byLabel(
      stageDP23CollaborativeReadSessionRequestMatrix,
      `collaborative_read_request_refused_basis_${basis}`,
    );
    const fresh = runRequest(arm);
    assert.equal(
      fresh.collaborativeReadSessionRequestState,
      "collaborative_read_session_request_not_recorded",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.reason,
      "receiver_collaborative_read_request_proof_incomplete",
      arm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(fresh.unsatisfiedChecks),
      deepClone(["collaborative_read_request_basis_receiver_recorded_not_inferred"]),
      `arm ${arm.fixtureLabel}: exactly the basis check unsatisfied`,
    );
    assert.equal(fresh.satisfiedChecks.length, 7, arm.fixtureLabel);
    assert.deepEqual(
      deepClone(fresh.collaborativeReadRequestEventFreshnessDiagnosis),
      {
        state: "fresh",
        reason: "within_declared_maximum_age",
        observationAgeMs: 500,
      },
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedEstablishmentState,
      "live_session_scoped_authentication_established",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedCounterpartJoinState,
      "fixture_structural_receiver_declared_counterpart_join",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedDp10ActivationState,
      "fixture_structural_session_scoped_private_read_activation",
      arm.fixtureLabel,
    );
  }

  // The counterpart self-join: the request records the receiver as its
  // own counterpart — the join re-run refuses at the join rung with
  // the join echo carrying the refusal verbatim; nothing else moved
  // except the checks downstream of that rung.
  {
    const arm = byLabel(
      stageDP23CollaborativeReadSessionRequestMatrix,
      "collaborative_read_request_counterpart_self_join_refused",
    );
    const fresh = runRequest(arm);
    assert.equal(
      fresh.reason,
      "counterpart_join_binding_not_established",
      arm.fixtureLabel,
    );
    assert.equal(fresh.satisfiedChecks.length, 0, arm.fixtureLabel);
    assert.equal(fresh.unsatisfiedChecks.length, 8, arm.fixtureLabel);
    assert.equal(
      fresh.mappedCounterpartJoinState,
      "join_not_established",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedCounterpartJoinReason,
      "receiver_join_declaration_proof_incomplete",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      `${arm.fixtureLabel}: the gate echo stays green at the join rung`,
    );
  }

  // Confined after retraction: the request re-runs against a retracted
  // session — the gate rung refuses first with the establishment echo
  // carrying the retraction verbatim, while the D-P10 activation echo
  // stays honest per its own frozen record.
  {
    const arm = byLabel(
      stageDP23CollaborativeReadSessionRequestMatrix,
      "collaborative_read_request_confined_after_retraction",
    );
    const fresh = runRequest(arm);
    assert.equal(
      fresh.reason,
      "live_session_read_gate_not_currently_live",
      arm.fixtureLabel,
    );
    assert.equal(fresh.satisfiedChecks.length, 0, arm.fixtureLabel);
    assert.equal(fresh.unsatisfiedChecks.length, 8, arm.fixtureLabel);
    assert.deepEqual(
      deepClone(fresh.collaborativeReadRequestEventFreshnessDiagnosis),
      { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 15000 },
      arm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(fresh.mappedReadGateFreshnessDiagnosis),
      { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 23000 },
      arm.fixtureLabel,
    );
    assert.equal(fresh.mappedEstablishmentState, "not_established", arm.fixtureLabel);
    assert.equal(
      fresh.mappedEstablishmentReason,
      "receiver_retraction_on_record",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedReadGateState,
      "no_active_live_session",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedReadGateReassessmentReason,
      "live_session_not_established_refused_or_not_fresh",
      arm.fixtureLabel,
    );
  }

  // Before the establishment: the request event predates the session —
  // the scope rung refuses with every leg echo green.
  {
    const arm = byLabel(
      stageDP23CollaborativeReadSessionRequestMatrix,
      "collaborative_read_request_event_before_session_establishment",
    );
    const fresh = runRequest(arm);
    assert.equal(
      fresh.reason,
      "collaborative_read_request_event_not_of_the_current_session_scope",
      arm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(fresh.collaborativeReadRequestEventFreshnessDiagnosis),
      { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 6500 },
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      arm.fixtureLabel,
    );
  }

  // In the future: the request's own staleness is reachable ONLY via a
  // future event — the diagnosis carries the future-instant state with
  // a null age.
  {
    const arm = byLabel(
      stageDP23CollaborativeReadSessionRequestMatrix,
      "collaborative_read_request_event_in_future",
    );
    const fresh = runRequest(arm);
    assert.equal(
      fresh.reason,
      "collaborative_read_request_event_not_session_current",
      arm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(fresh.collaborativeReadRequestEventFreshnessDiagnosis),
      { state: "unknown", reason: "observation_time_in_future", observationAgeMs: null },
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      arm.fixtureLabel,
    );
  }

  // Ladder order, far future: the LEGS refuse FIRST (the gate rung)
  // while the request's own diagnosis still carries its honest stale
  // state verbatim — the freshness honesty never hides behind the
  // ladder.
  {
    const arm = byLabel(
      stageDP23CollaborativeReadSessionRequestMatrix,
      "collaborative_read_request_ladder_order_far_future_eval",
    );
    const fresh = runRequest(arm);
    assert.equal(fresh.reason, "live_session_read_gate_not_currently_live", arm.fixtureLabel);
    assert.deepEqual(
      deepClone(fresh.collaborativeReadRequestEventFreshnessDiagnosis),
      {
        state: "stale",
        reason: "declared_maximum_age_expired",
        observationAgeMs: 135000,
      },
      `${arm.fixtureLabel}: the request's own diagnosis stays honest past its rung`,
    );
    assert.deepEqual(
      deepClone(fresh.mappedReadGateFreshnessDiagnosis),
      { state: "stale", reason: "declared_maximum_age_expired", observationAgeMs: 140000 },
      arm.fixtureLabel,
    );
    assert.equal(fresh.mappedEstablishmentState, "not_established", arm.fixtureLabel);
    assert.equal(
      fresh.mappedEstablishmentReason,
      "session_establishment_not_session_current",
      arm.fixtureLabel,
    );
    assert.equal(fresh.mappedDp10ActivationState, "not_activated", arm.fixtureLabel);
    assert.equal(
      fresh.mappedDp10Reason,
      "identity_chain_not_structurally_ready",
      arm.fixtureLabel,
    );
    assert.equal(fresh.mappedReadGateState, "no_active_live_session", arm.fixtureLabel);
  }

  // The four invalid request arms: the record rung refuses first, the
  // version marks itself invalid, the fallback diagnosis names the
  // missing metadata, and the join + gate echoes stay honest and green
  // — the legs never borrow the record's failure.
  for (const label of [
    "collaborative_read_request_record_missing_key",
    "collaborative_read_request_record_extra_forbidden_key",
    "collaborative_read_request_record_tampered_posture_literal",
    "collaborative_read_request_refused_non_object_record",
  ]) {
    const arm = byLabel(stageDP23CollaborativeReadSessionRequestMatrix, label);
    const fresh = runRequest(arm);
    assert.equal(fresh.reason, "collaborative_read_request_record_invalid", label);
    assert.equal(
      fresh.collaborativeReadRequestDecisionVersion,
      "invalid",
      `${label}: the version marks the refusal's own invalidity`,
    );
    assert.deepEqual(
      deepClone(fresh.collaborativeReadRequestEventFreshnessDiagnosis),
      {
        state: "unknown",
        reason: "observation_metadata_missing_or_invalid",
        observationAgeMs: null,
      },
      label,
    );
    assert.equal(
      fresh.mappedCounterpartJoinState,
      "fixture_structural_receiver_declared_counterpart_join",
      `${label}: the join echo stays green at the record rung`,
    );
    assert.equal(
      fresh.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      `${label}: the gate echo stays green at the record rung`,
    );
    assert.equal(fresh.satisfiedChecks.length, 0, label);
    assert.equal(fresh.unsatisfiedChecks.length, 8, label);
  }

  // Live-read: the replayed basis refuses on the basis check alone
  // with the full 13-label table still echoed and both mapped chains
  // readable.
  {
    const arm = byLabel(
      stageDP23CollaborativeLiveReadMatrix,
      "collaborative_live_read_refused_basis_replayed_from_prior_collaborative_live_read",
    );
    const fresh = runLiveRead(arm);
    assert.equal(
      fresh.collaborativeLiveReadState,
      "collaborative_live_read_not_recorded",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.reason,
      "receiver_collaborative_live_read_proof_incomplete",
      arm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(fresh.unsatisfiedChecks),
      deepClone(["collaborative_live_read_basis_receiver_performed_not_inferred"]),
      `${arm.fixtureLabel}: exactly the basis check unsatisfied`,
    );
    assert.equal(fresh.satisfiedChecks.length, 9, arm.fixtureLabel);
    assert.deepEqual(
      deepClone(fresh.recordedAdmittedTargetRefs),
      deepClone(stageDP23AllThirteenTargetRefs),
      `${arm.fixtureLabel}: the structural table echo survives the basis refusal`,
    );
    assert.equal(
      fresh.mappedDp14ActivationState,
      "fixture_structural_session_scoped_collaborative_structural_read_activation",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedDp14AdmissionState,
      "fixture_structural_collaborative_structural_record_read_admitted",
      arm.fixtureLabel,
    );
  }

  // The request rung: with the request not currently recorded the
  // live-read refuses at its own rung — the request echo carries the
  // request's refusal verbatim one depth down while the request's own
  // diagnosis still rides fresh.
  {
    const arm = byLabel(
      stageDP23CollaborativeLiveReadMatrix,
      "collaborative_live_read_request_not_currently_recorded_rung",
    );
    const fresh = runLiveRead(arm);
    assert.equal(
      fresh.reason,
      "collaborative_read_request_not_currently_recorded",
      arm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(fresh.mappedCollaborativeReadRequestState),
      "collaborative_read_session_request_not_recorded",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedReadRequestReassessmentReason,
      "receiver_collaborative_read_request_proof_incomplete",
      arm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(fresh.mappedReadRequestFreshnessDiagnosis),
      { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 15000 },
      `${arm.fixtureLabel}: the request's own diagnosis still rides`,
    );
    assert.deepEqual(fresh.recordedAdmittedTargetRefs, [], `${arm.fixtureLabel}: nothing admitted at the request rung`);
    assert.equal(fresh.satisfiedChecks.length, 0, arm.fixtureLabel);
    assert.equal(fresh.unsatisfiedChecks.length, 10, arm.fixtureLabel);
  }

  // The identity smuggle: a claimed-issued counterpart paired with the
  // smuggled frozen-issuance record — the frozen D-P14 issuance
  // assessor runs GREEN over the smuggled record (that is the honest
  // echo) while the lane's never-issued pin still wins at its own
  // cause; nothing is admitted.
  {
    const arm = byLabel(
      stageDP23CollaborativeLiveReadMatrix,
      "collaborative_live_read_counterpart_issued_identity_smuggle_refused",
    );
    const fresh = runLiveRead(arm);
    assert.equal(
      fresh.reason,
      "counterpart_chain_refused_structural_never_issued_or_not_current",
      arm.fixtureLabel,
    );
    assert.equal(fresh.satisfiedChecks.length, 0, arm.fixtureLabel);
    assert.equal(fresh.unsatisfiedChecks.length, 10, arm.fixtureLabel);
    assert.equal(fresh.mappedDp14ActivationState, "not_activated", arm.fixtureLabel);
    assert.deepEqual(
      fresh.mappedDp14CounterpartChain.mappedDp9Issuance.state,
      "fixture_structural_local_principal_id_issued",
      `${arm.fixtureLabel}: the claimed-issued frozen assessor echo stays honest`,
    );
    assert.equal(
      fresh.mappedDp14CounterpartChain.mappedDp9Issuance.reason,
      "all_issuance_checks_satisfied",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedDp14CounterpartChain.mappedDp9Mapping.state,
      "not_established",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedDp14CounterpartChain.mappedDp10.state,
      "not_activated",
      arm.fixtureLabel,
    );
  }

  // The receiver chain stale at the SHARED pair: the gate rung refuses
  // FIRST — the request re-runs against the same staled pair and stales
  // with it (the shared-pair rule made visible), nothing admitted.
  {
    const arm = byLabel(
      stageDP23CollaborativeLiveReadMatrix,
      "collaborative_live_read_receiver_chain_stale_refused_at_gate_rung_first",
    );
    const fresh = runLiveRead(arm);
    assert.equal(fresh.reason, "live_session_read_gate_not_currently_live", arm.fixtureLabel);
    assert.equal(fresh.satisfiedChecks.length, 0, arm.fixtureLabel);
    assert.equal(fresh.unsatisfiedChecks.length, 10, arm.fixtureLabel);
    assert.deepEqual(
      deepClone(fresh.collaborativeLiveReadEventFreshnessDiagnosis),
      { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 24001 },
      arm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(fresh.mappedCollaborativeReadRequestState),
      "collaborative_read_session_request_not_recorded",
      `${arm.fixtureLabel}: the request re-runs against the same staled pair`,
    );
    assert.equal(fresh.mappedReadGateState, "no_active_live_session", arm.fixtureLabel);
  }

  // The counterpart's own death: ONE eval tick past the boundary the
  // gate stays GREEN and the co-read dies at the lane's own counterpart
  // cause with the stale counterpart D-P6 diagnosis echoed — while the
  // receiver chain still runs fresh.
  {
    const arm = byLabel(
      stageDP23CollaborativeLiveReadMatrix,
      "collaborative_live_read_counterpart_chain_expired_own_death",
    );
    const fresh = runLiveRead(arm);
    assert.equal(
      fresh.reason,
      "counterpart_chain_refused_structural_never_issued_or_not_current",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedReadGateState,
      "live_session_scoped_single_principal_structural_reads_live_activated",
      `${arm.fixtureLabel}: the session outlives the counterpart boundary`,
    );
    assert.deepEqual(
      deepClone(fresh.collaborativeLiveReadEventFreshnessDiagnosis),
      { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 14001 },
      arm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(fresh.mappedReadRequestFreshnessDiagnosis),
      { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 15001 },
      arm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(fresh.mappedReadGateFreshnessDiagnosis),
      { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 20001 },
      arm.fixtureLabel,
    );
    assert.deepEqual(
      fresh.mappedDp14ReceiverChain.mappedDp6.diagnosis,
      { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 50001 },
      `${arm.fixtureLabel}: the receiver chain still runs fresh`,
    );
    assert.equal(
      fresh.mappedDp14CounterpartChain.mappedDp6.state,
      "not_observed",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedDp14CounterpartChain.mappedDp6.reason,
      "receiver_authentication_proof_incomplete",
      arm.fixtureLabel,
    );
    assert.deepEqual(
      fresh.mappedDp14CounterpartChain.mappedDp6.diagnosis,
      {
        state: "stale",
        reason: "declared_maximum_age_expired",
        observationAgeMs: 60001,
      },
      `${arm.fixtureLabel}: the stale counterpart D-P6 diagnosis echoed verbatim`,
    );
  }

  // The D-P14 admission rung arms: an out-of-table target and an
  // invalid-shaped admission record both refuse at the frozen
  // D-P14 admission rung with nothing admitted.
  {
    const outOfTable = byLabel(
      stageDP23CollaborativeLiveReadMatrix,
      "collaborative_live_read_admission_target_out_of_table_refused",
    );
    const invalid = byLabel(
      stageDP23CollaborativeLiveReadMatrix,
      "collaborative_live_read_frozen_dp14_admission_record_invalid",
    );
    for (const arm of [outOfTable, invalid]) {
      const fresh = runLiveRead(arm);
      assert.equal(fresh.reason, "frozen_dp14_admission_refused", arm.fixtureLabel);
      assert.equal(fresh.satisfiedChecks.length, 0, arm.fixtureLabel);
      assert.equal(fresh.unsatisfiedChecks.length, 10, arm.fixtureLabel);
      assert.deepEqual(fresh.recordedAdmittedTargetRefs, [], arm.fixtureLabel);
      assert.equal(
        fresh.mappedDp14ActivationState,
        "fixture_structural_session_scoped_collaborative_structural_read_activation",
        `${arm.fixtureLabel}: the activation echo stays green at the admission rung`,
      );
    }
    const invalidRun = runLiveRead(invalid);
    assert.equal(
      invalidRun.mappedDp14AdmissionState,
      "not_admitted",
      `${invalid.fixtureLabel}: the invalid-shaped record's echo`,
    );
    assert.equal(
      invalidRun.mappedDp14AdmissionReason,
      "admission_record_invalid",
      invalid.fixtureLabel,
    );
  }

  // The D-P14 activation staleness: the activation echo carries the
  // not-session-current cause verbatim while the admission echo stays
  // green (the admission re-ran over its own record).
  {
    const arm = byLabel(
      stageDP23CollaborativeLiveReadMatrix,
      "collaborative_live_read_dp14_activation_stale_refused",
    );
    const fresh = runLiveRead(arm);
    assert.equal(
      fresh.reason,
      "frozen_dp14_collaborative_activation_not_session_current",
      arm.fixtureLabel,
    );
    assert.equal(fresh.mappedDp14ActivationState, "not_activated", arm.fixtureLabel);
    assert.equal(
      fresh.mappedDp14ActivationReason,
      "collaborative_activation_not_session_current",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedDp14AdmissionState,
      "fixture_structural_collaborative_structural_record_read_admitted",
      `${arm.fixtureLabel}: the admission echo stays green at the activation rung`,
    );
  }

  // Live-read confined after retraction: the gate rung refuses first
  // and the request re-run stales with the shared pair.
  {
    const arm = byLabel(
      stageDP23CollaborativeLiveReadMatrix,
      "collaborative_live_read_confined_after_retraction",
    );
    const fresh = runLiveRead(arm);
    assert.equal(fresh.reason, "live_session_read_gate_not_currently_live", arm.fixtureLabel);
    assert.deepEqual(
      deepClone(fresh.collaborativeLiveReadEventFreshnessDiagnosis),
      { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 14500 },
      arm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(fresh.mappedCollaborativeReadRequestState),
      "collaborative_read_session_request_not_recorded",
      arm.fixtureLabel,
    );
    assert.equal(fresh.mappedReadGateState, "no_active_live_session", arm.fixtureLabel);
  }

  // The future live-read event: the event's OWN staleness — reachable
  // only via a future event — with every echo green and nothing
  // admitted.
  {
    const arm = byLabel(
      stageDP23CollaborativeLiveReadMatrix,
      "collaborative_live_read_event_in_future",
    );
    const fresh = runLiveRead(arm);
    assert.equal(
      fresh.reason,
      "collaborative_live_read_event_not_session_current",
      arm.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(fresh.collaborativeLiveReadEventFreshnessDiagnosis),
      { state: "unknown", reason: "observation_time_in_future", observationAgeMs: null },
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedDp14ActivationState,
      "fixture_structural_session_scoped_collaborative_structural_read_activation",
      arm.fixtureLabel,
    );
    assert.equal(
      fresh.mappedDp14AdmissionState,
      "fixture_structural_collaborative_structural_record_read_admitted",
      arm.fixtureLabel,
    );
    assert.deepEqual(fresh.recordedAdmittedTargetRefs, [], arm.fixtureLabel);
  }

  // The four invalid live-read arms: the record rung refuses first,
  // the version marks itself invalid, the fallback diagnosis carries,
  // and every echo stays honest and green.
  for (const label of [
    "collaborative_live_read_record_missing_key",
    "collaborative_live_read_record_extra_forbidden_key",
    "collaborative_live_read_record_tampered_posture_literal",
    "collaborative_live_read_refused_non_object_record",
  ]) {
    const arm = byLabel(stageDP23CollaborativeLiveReadMatrix, label);
    const fresh = runLiveRead(arm);
    assert.equal(fresh.reason, "collaborative_live_read_record_invalid", label);
    assert.equal(fresh.collaborativeLiveReadDecisionVersion, "invalid", label);
    assert.deepEqual(
      deepClone(fresh.collaborativeLiveReadEventFreshnessDiagnosis),
      {
        state: "unknown",
        reason: "observation_metadata_missing_or_invalid",
        observationAgeMs: null,
      },
      label,
    );
    assert.equal(
      fresh.mappedDp14ActivationState,
      "fixture_structural_session_scoped_collaborative_structural_read_activation",
      `${label}: the activation echo stays green at the record rung`,
    );
    assert.equal(
      fresh.mappedDp14AdmissionState,
      "fixture_structural_collaborative_structural_record_read_admitted",
      `${label}: the admission echo stays green at the record rung`,
    );
    assert.equal(fresh.satisfiedChecks.length, 0, label);
    assert.equal(fresh.unsatisfiedChecks.length, 10, label);
  }

  // The claimed wall: every class and every malformed claim refuses at
  // its own cause. The terminal class carries the honest fold — the
  // shape and class checks satisfied, the two never-passing checks
  // honestly unsatisfied; the structural causes refuse everything.
  const terminalLabel =
    "claimed_joint_collaborative_read_content_refused_no_result_exists";
  {
    const fresh = runWall(terminalArm);
    assert.equal(
      fresh.reason,
      "pond_claimed_collaborative_joint_read_content_refused_no_collaborative_read_result_exists_this_cut",
      terminalLabel,
    );
    assert.deepEqual(
      deepClone(fresh.satisfiedChecks),
      deepClone([
        "pond_claimed_collaborative_read_claim_well_formed",
        "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary",
      ]),
      `${terminalLabel}: the honest terminal fold`,
    );
    assert.deepEqual(
      deepClone(fresh.unsatisfiedChecks),
      deepClone([
        "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime",
        "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership",
      ]),
      `${terminalLabel}: the never-passing checks stay unsatisfied`,
    );
  }
  {
    // The source-ref-distinct arm recomputes byte-equal to the
    // terminal run — a different claim never changes the wall's
    // verdict, only the claim would and no claim does.
    const arm = byLabel(
      stageDP23ClaimedCollaborativeReadMatrix,
      "claimed_refused_source_ref_distinct_never_echoed",
    );
    assert.deepEqual(
      deepClone(runWall(arm)),
      deepClone(runWall(terminalArm)),
      `${arm.fixtureLabel}: distinct source, identical refusal`,
    );
  }
  {
    // The receiver-composed prose: text this very receiver composed in
    // the D-P16 lane is still never echoed — the wall's verdict is
    // the terminal one.
    const arm = byLabel(
      stageDP23ClaimedCollaborativeReadMatrix,
      "claimed_refused_receiver_composed_prose",
    );
    const fresh = runWall(arm);
    assert.equal(
      fresh.reason,
      "pond_claimed_collaborative_joint_read_content_refused_no_collaborative_read_result_exists_this_cut",
      arm.fixtureLabel,
    );
    assert.ok(
      !carriesString(fresh, stageDP23ComposedProseClaimText),
      `${arm.fixtureLabel}: the composed prose is echoed NOWHERE`,
    );
  }
  // The three structural causes — each carries its own dedicated
  // literal and refuses all four checks.
  {
    const arm = byLabel(
      stageDP23ClaimedCollaborativeReadMatrix,
      "claimed_counterpart_record_content_refused",
    );
    const fresh = runWall(arm);
    assert.equal(
      fresh.reason,
      "pond_claimed_collaborative_counterpart_record_content_refused_the_counterpart_is_structural_never_issued_no_live_counterpart_chain_exists",
      arm.fixtureLabel,
    );
    assert.equal(fresh.satisfiedChecks.length, 0, arm.fixtureLabel);
    assert.equal(fresh.unsatisfiedChecks.length, 4, arm.fixtureLabel);
  }
  {
    const arm = byLabel(
      stageDP23ClaimedCollaborativeReadMatrix,
      "claimed_receiver_record_content_refused",
    );
    const fresh = runWall(arm);
    assert.equal(
      fresh.reason,
      "pond_claimed_collaborative_receiver_record_content_refused_no_record_read_is_performed_this_cut",
      arm.fixtureLabel,
    );
    assert.equal(fresh.unsatisfiedChecks.length, 4, arm.fixtureLabel);
  }
  {
    const arm = byLabel(
      stageDP23ClaimedCollaborativeReadMatrix,
      "claimed_class_unknown_fail_closed",
    );
    const fresh = runWall(arm);
    assert.equal(
      fresh.reason,
      "pond_claimed_collaborative_read_class_unknown_fail_closed",
      arm.fixtureLabel,
    );
    assert.equal(fresh.unsatisfiedChecks.length, 4, arm.fixtureLabel);
  }
  // The three invalid claims: the shape rung refuses first with the
  // version marked invalid.
  for (const label of [
    "claimed_refused_missing_claim_key",
    "claimed_refused_extra_forbidden_key",
    "claimed_refused_non_object_claim",
  ]) {
    const arm = byLabel(stageDP23ClaimedCollaborativeReadMatrix, label);
    const fresh = runWall(arm);
    assert.equal(
      fresh.reason,
      "pond_claimed_collaborative_read_claim_invalid",
      label,
    );
    assert.equal(fresh.claimedCollaborativeReadRefusalVersion, "invalid", label);
    assert.equal(fresh.unsatisfiedChecks.length, 4, label);
    assert.equal(fresh.satisfiedChecks.length, 0, label);
  }
});

// ---------------------------------------------------------------
// Block 4: lifecycle — the ladder-order freshness honesty reproduced
// on the recorded arm's own legs (the legs refuse FIRST while the
// request's own diagnosis stays stale verbatim); the counterpart's
// own-death isolation reproduced from the recorded arm's legs with
// the gate green; the confined reassessments for BOTH records
// (D-P20 governance) against the D-P19 receipt's frozen-at-issuance
// contrast; and the wall deep-equal unchanged (no session legs to
// lose).
// ---------------------------------------------------------------
block("lifecycle", () => {
  // Far-future honesty reproduced: the RECORDED request input re-run at
  // the far-future ladder eval refuses at the gate rung FIRST while
  // the request's own diagnosis still carries stale verbatim.
  const farFutureRequest = runFreshRequest({
    ...requestInputOf(requestRecordedArm),
    receiverEvaluatedAtEpochMs: stageDP23FarFutureLadderOrderEvaluatedAtEpochMs,
  });
  assert.equal(
    farFutureRequest.reason,
    "live_session_read_gate_not_currently_live",
    "the legs refuse first at the far-future eval",
  );
  assert.deepEqual(
    deepClone(farFutureRequest.collaborativeReadRequestEventFreshnessDiagnosis),
    { state: "stale", reason: "declared_maximum_age_expired", observationAgeMs: 135000 },
    "the request's own stale diagnosis is still carried honestly",
  );
  assert.equal(farFutureRequest.mappedReadGateState, "no_active_live_session");
  assert.equal(
    farFutureRequest.mappedEstablishmentReason,
    "session_establishment_not_session_current",
  );
  assert.equal(farFutureRequest.mappedDp10ActivationState, "not_activated");

  // The counterpart's own death reproduced from the RECORDED live-read
  // input at the expired eval: gate GREEN, the lane's counterpart cause
  // fires, the stale D-P6 diagnosis echoed — the co-read's own death,
  // not the session's.
  const counterpartExpired = runFreshLiveRead({
    ...liveReadInputOf(liveReadRecordedArm),
    evaluatedAtEpochMs: stageDP23CounterpartExpiredEvaluatedAtEpochMs,
  });
  assert.equal(
    counterpartExpired.reason,
    "counterpart_chain_refused_structural_never_issued_or_not_current",
    "the co-read dies its own death",
  );
  assert.equal(
    counterpartExpired.mappedReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
    "the session outlives the counterpart boundary",
  );
  assert.deepEqual(
    counterpartExpired.mappedDp14CounterpartChain.mappedDp6.diagnosis,
    { state: "stale", reason: "declared_maximum_age_expired", observationAgeMs: 60001 },
    "the stale counterpart D-P6 diagnosis echoed",
  );
  assert.deepEqual(
    counterpartExpired.mappedDp14ReceiverChain.mappedDp6.diagnosis,
    { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 50001 },
    "the receiver chain still runs fresh at the expired eval",
  );

  // Confined reassessment honesty for BOTH records: the retracted
  // session re-assesses its recorded rows honestly (D-P20 governance)
  // — count-stable, never deleted — and this posture is precisely the
  // OPPOSITE of the D-P19 receipt's frozen-at-issuance law.
  const confinedRequestArm = byLabel(
    stageDP23CollaborativeReadSessionRequestMatrix,
    "collaborative_read_request_confined_after_retraction",
  );
  const confinedLiveReadArm = byLabel(
    stageDP23CollaborativeLiveReadMatrix,
    "collaborative_live_read_confined_after_retraction",
  );
  assert.equal(
    confinedRequestArm.assessment.mappedEstablishmentReason,
    "receiver_retraction_on_record",
    "the confined request's retraction echo carries verbatim",
  );
  assert.equal(
    confinedLiveReadArm.assessment.mappedReadGateState,
    "no_active_live_session",
    "the confined live-read reassesses through the dead gate",
  );
  const dp19RetentionLiteral =
    "receipt_is_module_state_process_lifetime_no_indefinite_retention_delivery_does_not_grant_retention";
  assert.notEqual(
    confinedRequestArm.assessment.collaborativeReadRequestRetentionPosture,
    dp19RetentionLiteral,
    "the D-P20 governance posture is deliberately NOT the D-P19 freeze",
  );
  assert.notEqual(
    confinedLiveReadArm.assessment.collaborativeLiveReadRetentionPosture,
    dp19RetentionLiteral,
    "the D-P20 governance posture is deliberately NOT the D-P19 freeze",
  );
  assert.equal(
    confinedRequestArm.assessment.collaborativeReadRequestRetentionPosture,
    requestRecordedArm.assessment.collaborativeReadRequestRetentionPosture,
    "the retention posture is shared across the request's life and death",
  );

  // The D-P19 receipt arm still recomputes byte-green with its own
  // frozen-at-issuance posture — the contrast is real, not rhetorical.
  const dp19Arm = byLabel(stageDP19ReceiptMatrix, "receipt_recorded_over_performed_dispatch");
  assertDeepFrozen(dp19Arm, "the D-P19 receipt arm stays pinned and frozen");
  assert.ok(
    JSON.stringify(dp19Arm).includes(dp19RetentionLiteral),
    "the D-P19 arm's pinned assessment carries the frozen-at-issuance posture this lane deliberately refuses",
  );

  // The wall holds BEFORE and AFTER: no session legs, no clock, no
  // storage — the wall's verdict is the same object content after the
  // whole lifecycle above.
  const wallBefore = runFreshWall(wallInputOf(terminalArm));
  const wallAfter = runFreshWall(wallInputOf(terminalArm));
  assert.deepEqual(
    deepClone(wallBefore),
    deepClone(wallAfter),
    "the wall verdict is stable across the lifecycle",
  );
  assert.deepEqual(
    deepClone(wallAfter),
    deepClone(terminalArm.assessment),
    "the wall verdict stays byte-equal to its pinned assessment",
  );
});// ---------------------------------------------------------------
// Block 5: fail-closed — garbage walks on all three assessors without
// throwing; every garbage input carries the honest diagnosis and the
// ceilings stay all-false; forbidden keys planted deep are refused
// whole.
// ---------------------------------------------------------------
block("failClosed", () => {
  const garbageInputs = [
    null,
    undefined,
    0,
    "garbage",
    [],
    {},
    { nonsense: true, nested: { deep: { deeper: { deeper: 1 } } } },
  ];
  for (const garbage of garbageInputs) {
    const requestRun = runFreshRequest(garbage);
    assert.equal(requestRun.contractVersion, "pond-collaborative-read-session-request-decision-d-p23");
    assert.equal(requestRun.collaborativeReadSessionRequestState, "collaborative_read_session_request_not_recorded");
    assert.equal(requestRun.authority, "none");
    for (const ceilingKey of REQUEST_CEILING_KEYS) {
      assert.equal(requestRun[ceilingKey], false, `garbage ceiling ${ceilingKey}`);
    }
    assert.ok(requestRun.unsatisfiedChecks.length > 0);
    const liveReadRun = runFreshLiveRead(garbage);
    assert.equal(liveReadRun.contractVersion, "pond-collaborative-read-live-admission-decision-d-p23");
    assert.equal(liveReadRun.collaborativeLiveReadState, "collaborative_live_read_not_recorded");
    assert.equal(liveReadRun.authority, "none");
    assert.equal(liveReadRun.collaborativeLiveReadConsumedThisCut, false);
    for (const ceilingKey of LIVE_READ_CEILING_KEYS) {
      assert.equal(liveReadRun[ceilingKey], false, `garbage live-read ceiling ${ceilingKey}`);
    }
    const wallRun = runFreshWall(garbage);
    assert.equal(wallRun.claimedCollaborativeReadState, "claimed_collaborative_read_content_not_composed");
    assert.equal(
      wallRun.claimedCollaborativeReadWallPosture,
      "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut",
    );
    assert.equal(wallRun.authority, "none");
    for (const ceilingKey of WALL_CEILING_KEYS) {
      assert.equal(wallRun[ceilingKey], false, `garbage wall ceiling ${ceilingKey}`);
    }
  }

  // Wrong slot types on an otherwise well-formed input refuse without
  // throwing, and the echoes stay carried.
  const wrongSlotBase = requestInputOf(requestRecordedArm);
  const wrongSlots = [
    { receiverEvaluatedAtEpochMs: "not-a-number" },
    { receiverMaximumAgeMs: null },
    { receiverEvaluatedAtEpochMs: Number.NaN },
    { readGateRecord: 7 },
    { establishmentRecord: "not-a-record" },
    { receiverRetractionRecord: Math.PI },
  ];
  for (const wrongSlot of wrongSlots) {
    const fresh = runFreshRequest({ ...wrongSlotBase, ...wrongSlot });
    assert.equal(fresh.contractVersion, "pond-collaborative-read-session-request-decision-d-p23");
    assert.ok(typeof fresh.reason === "string" && fresh.reason.length > 0);
    assert.ok(fresh.collaborativeReadRequestEventFreshnessDiagnosis !== undefined);
    assert.equal(fresh.authority, "none");
    for (const ceilingKey of REQUEST_CEILING_KEYS) {
      assert.equal(fresh[ceilingKey], false, `wrong-slot ceiling ${ceilingKey}`);
    }
  }

  // Every forbidden key of the inventory planted deep is refused whole
  // on every contract — the sample here is the full loop over the
  // inventory; the widen block proves it exhaustively.
  const plantBaseRequest = requestInputOf(requestRecordedArm);
  const plantedRequest = {
    ...plantBaseRequest,
    collaborativeReadSessionRequest: {
      ...plantBaseRequest.collaborativeReadSessionRequest,
      decorativeNestedPlant: { veryDeep: { [POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS[71]]: true } },
    },
  };
  assert.equal(
    runFreshRequest(plantedRequest).collaborativeReadSessionRequestState,
    "collaborative_read_session_request_not_recorded",
    "a forbidden key planted deep refuses the request",
  );
  for (const ceilingKey of REQUEST_CEILING_KEYS) {
    assert.equal(
      runFreshRequest(plantedRequest)[ceilingKey],
      false,
      `planted ceiling ${ceilingKey}`,
    );
  }
});

// ---------------------------------------------------------------
// Block 6: ceiling and widen — the shared inventory is the frozen
// D-P22 voice inventory plus exactly four collaborative-lane keys in
// declared order; every inventory key planted in a nested position of
// every contract's input refuses whole; the near-miss never trips the
// inventory for legitimate lane vocabulary; and the four templates
// re-fill to byte-equal the pinned records.
// ---------------------------------------------------------------
block("ceilingAndWiden", () => {
  const inventory = POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS;
  assert.equal(inventory.length, 74, "the inventory widens 70 to exactly 74");
  assert.deepEqual(
    deepClone(inventory.slice(0, 70)),
    deepClone(POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS),
    "the first 70 keys are the frozen D-P22 voice inventory verbatim",
  );
  assert.deepEqual(
    deepClone(inventory.slice(-4)),
    deepClone([
      "collaborativeReadResult",
      "claimedCollaborativeReadContent",
      "counterpartLiveLegs",
      "sharedScopeObject",
    ]),
    "the widening adds exactly the four collaborative-lane keys in declared order",
  );

  // The widen probes: every inventory key planted as a nested extra in
  // each contract's input refuses whole — never a partial pass.
  const requestRefillBase = deepClone(requestInputOf(requestRecordedArm));
  for (const key of inventory) {
    const planted = {
      ...requestRefillBase,
      collaborativeReadSessionRequest: {
        ...requestRefillBase.collaborativeReadSessionRequest,
        collaborativeReadRequestMetadata: {
          ...requestRefillBase.collaborativeReadSessionRequest
            .collaborativeReadRequestMetadata,
          [key]: 1,
        },
      },
    };
    const fresh = runFreshRequest(planted);
    assert.equal(
      fresh.collaborativeReadSessionRequestState,
      "collaborative_read_session_request_not_recorded",
      `widen probe ${key} must keep the request unrecorded`,
    );
  }
  const liveReadRefillBase = deepClone(liveReadInputOf(liveReadRecordedArm));
  for (const key of inventory) {
    const planted = {
      ...liveReadRefillBase,
      collaborativeReadLiveAdmission: {
        ...liveReadRefillBase.collaborativeReadLiveAdmission,
        collaborativeLiveReadMetadata: {
          ...liveReadRefillBase.collaborativeReadLiveAdmission
            .collaborativeLiveReadMetadata,
          [key]: 1,
        },
      },
    };
    const fresh = runFreshLiveRead(planted);
    assert.equal(
      fresh.collaborativeLiveReadState,
      "collaborative_live_read_not_recorded",
      `widen probe ${key} must keep the live-read unrecorded`,
    );
  }
  for (const key of inventory) {
    const planted = {
      claimedCollaborativeRead: {
        claimedCollaborativeReadText: stageDP23ClaimedCollaborativeReadText,
        claimedCollaborativeReadClass: "joint_collaborative_read_content",
        claimedCollaborativeReadSourceRef: stageDP23ClaimedCollaborativeReadSourceRef,
        plant: { [key]: true },
      },
    };
    const fresh = runFreshWall(planted);
    assert.equal(
      fresh.reason,
      "pond_claimed_collaborative_read_claim_invalid",
      `widen probe ${key} must make the claim refuse at its shape rung`,
    );
  }
  assert.equal(
    freshRuns.length + wallFreshRuns.length > 0,
    true,
    "the probe runs accumulate as fresh evidence only",
  );

  // The near-miss: legitimate lane vocabulary never trips the
  // inventory — the declared counterpart Ref form, the request's own
  // postures, and the wall's class vocabulary are not banned keys.
  const legitimateKeys = [
    "counterpartPrincipalRef",
    "sessionScopePosture",
    "collaborativeLiveReadBasis",
    "claimed_collaborative_read_content_not_composed",
  ];
  for (const legitimateKey of legitimateKeys) {
    assert.ok(
      !inventory.includes(legitimateKey),
      `legitimate key ${legitimateKey} must never be banned`,
    );
  }
  // An unknown non-inventory extra key still refuses at the record's
  // own well-formedness (the refusal is shape-driven, honest, and
  // exactly where it always was).
  assert.equal(
    runFreshRequest({
      ...requestRefillBase,
      collaborativeReadSessionRequest: {
        ...requestRefillBase.collaborativeReadSessionRequest,
        innocuousPresentationNote: 1,
      },
    }).collaborativeReadSessionRequestState,
    "collaborative_read_session_request_not_recorded",
  );

  // Template re-fill ties: each of the four templates fills its open
  // slots and lands byte-equal on the pinned record — the ui never
  // restates a posture literal.
  const requestRefill = {
    ...deepClone(pondStageDP23CollaborativeReadSessionRequestTemplate),
    collaborativeReadRequestMetadata: {
      ...deepClone(
        pondStageDP23CollaborativeReadSessionRequestTemplate
          .collaborativeReadRequestMetadata,
      ),
      collaborative_read_requested_at_epoch_ms:
        stageDP23CollaborativeReadRequestEventAtEpochMs,
    },
    principalRef: requestRecordedArm.collaborativeReadSessionRequest.principalRef,
  };
  assert.deepEqual(
    deepClone(requestRefill),
    deepClone(requestRecordedArm.collaborativeReadSessionRequest),
    "the re-filled request template equals the pinned recorded request verbatim",
  );
  const liveReadRefill = {
    ...deepClone(pondStageDP23CollaborativeLiveAdmissionTemplate),
    collaborativeLiveReadMetadata: {
      ...deepClone(
        pondStageDP23CollaborativeLiveAdmissionTemplate.collaborativeLiveReadMetadata,
      ),
      collaborative_live_read_recorded_at_epoch_ms:
        stageDP23CollaborativeLiveReadEventAtEpochMs,
    },
    receiverHeldPrincipalRef:
      liveReadRecordedArm.collaborativeReadLiveAdmission.receiverHeldPrincipalRef,
  };
  assert.deepEqual(
    deepClone(liveReadRefill),
    deepClone(liveReadRecordedArm.collaborativeReadLiveAdmission),
    "the re-filled live-read template equals the pinned recorded record verbatim",
  );
  const activationRefill = {
    ...deepClone(pondStageDP14CollaborativeActivationRecordTemplate),
    activationMetadata: {
      ...deepClone(
        pondStageDP14CollaborativeActivationRecordTemplate.activationMetadata,
      ),
      activated_at_epoch_ms: stageDP23DP14ActivationActivatedAtEpochMs,
    },
  };
  assert.deepEqual(
    deepClone(activationRefill),
    deepClone(liveReadRecordedArm.collaborativeActivationRecord),
    "the re-filled D-P14 activation template equals the pinned record verbatim",
  );
  assert.deepEqual(
    deepClone(pondStageDP14CollaborativeAdmissionRecordTemplate),
    deepClone(liveReadRecordedArm.readAdmissionRecord),
    "the fully-baked D-P14 admission template equals the pinned record verbatim",
  );
});

// ---------------------------------------------------------------
// Block 7: claim tie — the lane carries no agent identity of any
// kind, the wall's input carries exactly one key, the claim shape has
// exactly three keys, and the four widening keys never appear in any
// input, record, or assessment of this cut.
// ---------------------------------------------------------------
block("claimTie", () => {
  // The claim shape: exactly three string keys — the content rides the
  // Text field; the banned Content spelling is the inventory key the
  // inputs must never carry.
  const claim = { ...terminalArm.claimedCollaborativeRead };
  assert.deepEqual(
    Object.keys(claim).sort(),
    [
      "claimedCollaborativeReadClass",
      "claimedCollaborativeReadSourceRef",
      "claimedCollaborativeReadText",
    ],
    "the wall claims exactly the three declared keys",
  );
  assert.ok(
    Object.values(claim).every((value) => typeof value === "string" && value.length > 0),
  );
  const wallInput = wallInputOf(terminalArm);
  assert.deepEqual(Object.keys(wallInput), ["claimedCollaborativeRead"]);

  // The four widening keys never appear anywhere in this cut's own
  // inputs, records, or assessments — the request, the live-read, and
  // the wall included.
  const wideningKeys = [
    "collaborativeReadResult",
    "claimedCollaborativeReadContent",
    "counterpartLiveLegs",
    "sharedScopeObject",
  ];
  for (const fresh of freshRuns) {
    assertLacksKeys(fresh, wideningKeys, "a D-P23 assessment carries a widening key");
  }
  for (const fresh of wallFreshRuns) {
    assertLacksKeys(fresh, wideningKeys, "a wall assessment carries a widening key");
  }
  assertLacksKeys(
    requestRecordedArm.collaborativeReadSessionRequest,
    wideningKeys,
    "the request record",
  );
  assertLacksKeys(
    liveReadRecordedArm.collaborativeReadLiveAdmission,
    wideningKeys,
    "the live-read record",
  );
  assertLacksKeys(
    requestInputOf(requestRecordedArm),
    wideningKeys,
    "the request input",
  );
  assertLacksKeys(
    liveReadInputOf(liveReadRecordedArm),
    wideningKeys,
    "the live-read input",
  );

  // No agent identity of any kind: no `agent:`-prefixed reference
  // rides any recorded record, mapped echo, or wall posture — the
  // counterpart is a declared principal, never an agent identity.
  const agentProbe = "agent:";
  for (const fresh of freshRuns) {
    assert.ok(!carriesString(fresh, agentProbe), "an assessment carries an agent reference");
  }
  for (const fresh of wallFreshRuns) {
    assert.ok(!carriesString(fresh, agentProbe), "a wall assessment carries an agent reference");
  }
  assert.ok(
    !carriesString(requestRecordedArm.collaborativeReadSessionRequest, agentProbe),
  );
  assert.ok(
    !carriesString(liveReadRecordedArm.collaborativeReadLiveAdmission, agentProbe),
  );

  // The wall echoes nothing about any claim: not the declared text, not
  // any source ref — the sample source in the wall's sample refusal is
  // never a real claim's source.
  for (const arm of stageDP23ClaimedCollaborativeReadMatrix) {
    const fresh = runFreshWall(wallInputOf(arm));
    for (const probe of [
      stageDP23ClaimedCollaborativeReadText,
      stageDP23ClaimedCollaborativeReadSourceRef,
      stageDP23ClaimedCollaborativeReadSourceRefDistinct,
      stageDP23ComposedProseClaimText,
    ]) {
      assert.ok(!carriesString(fresh, probe), `wall arm ${arm.fixtureLabel} echoes ${probe}`);
    }
  }
  // Even the module's standing-wall sample source differs from every
  // fixture source ref — the wall's echo carries nothing of any claim
  // surface.
  const wallPosture = currentClaimedCollaborativeReadWallPosture();
  assert.equal(
    wallPosture.claimedCollaborativeReadState,
    "claimed_collaborative_read_content_not_composed",
  );
  assert.deepEqual(
    deepClone(wallPosture.declaredClaimCollaborativeReadClasses),
    deepClone(POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES),
  );
});

// ---------------------------------------------------------------
// Block 8: hygiene — DOM and network needles, the fixture's type-only
// imports, the banned-name walk with the leg plumbing stripped, the
// inventory-union import ties, the frozen-refusal phrase exclusivity,
// the env-prefix family, the digest-level secret posture, the
// hand-written module's walk, and the package, CI, and provenance
// ties.
// ---------------------------------------------------------------
block("hygiene", () => {
  const contractPaths = [
    "src/contracts/pond-collaborative-read-session-request-decision.ts",
    "src/contracts/pond-collaborative-read-live-admission-decision.ts",
    "src/contracts/pond-claimed-collaborative-read-refusal.ts",
    "src/fixtures/stage-d-p23-collaborative-live-read.ts",
  ];
  const texts = contractPaths.map((path) => readModule(path));

  // (a) DOM-shaped needles stay out of the cut's contract and fixture
  // files — presenting happens in the ui layer only.
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

  // Network constants stay out of the cut's contract and fixture
  // files — fixture VALUES are never endpoints (the digests are
  // hex-plain, never endpoint-shaped).
  const networkNeedles = ["wss://", "https://", "http://", "eth_node", "json_rpc", "0x"];
  contractPaths.forEach((path, index) => {
    for (const needle of networkNeedles) {
      assert.ok(!texts[index].includes(needle), `${path} carries the network constant ${needle}`);
    }
  });

  // (b) the fixture is value-import-free (type-only imports only).
  const fixtureText = texts[3];
  for (const line of fixtureText.split("\n")) {
    if (line.startsWith("import")) {
      assert.ok(
        line.startsWith("import type {"),
        `the fixture carries a non-type import: ${line.trim()}`,
      );
    }
  }

  // (b2) the frozen D-P15 refusal phrase stays EXCLUSIVELY the frozen
  // gate's vocabulary: it rides only through the generated bundle's
  // inlined D-P15 gate code — never declared as a lane literal, and
  // never present in any hand-written file of this cut.
  const frozenRefusalPhrase = ["collaborative", "_multi", "_principal", "_read"].join("");
  for (const path of [
    ...contractPaths.slice(0, 3),
    "src/fixtures/stage-d-p23-collaborative-live-read.ts",
    "ui/pond-collaborative-read.js",
    "scripts/render-stage-d-live-session-collaborative-read.mjs",
    "docs/stage-d-p23-pond-collaborative-read-lane.md",
    "scripts/pond-collaborative-live-read-lane-selftest.mjs",
  ]) {
    const fileText = readModule(path);
    assert.ok(
      !fileText.includes(frozenRefusalPhrase),
      `${path} carries the frozen D-P15 refusal phrase outside its echo`,
    );
  }
  assert.ok(
    readModule("ui/generated/pond-stage-d-live-session-collaborative-read.js")
      .includes(frozenRefusalPhrase),
    "the generated bundle carries the frozen D-P15 gate code verbatim",
  );

  // (c) the banned-name source walk over the three contract files:
  // quoted-index reads of frozen fields and import lines are the
  // tie/leg plumbing (the established exemption) and are stripped
  // before matching.
  const nameNeedles = [
    "privateReadsActivated",
    "principalIdIssued",
    "mappingEstablishmentState",
    "onchainVerificationState",
    "collaborativeReadPosture",
    "readScopePosture",
    "privateReadActivationState",
    "authenticationPerformed",
    "POND_STAGE_DP12",
    "POND_STAGE_DP13",
    "POND_STAGE_DP14",
    "POND_STAGE_DP15",
    "POND_STAGE_DP20",
    "POND_STAGE_DP21",
    "pond-knowledge-forge",
    "pond-declared-mode-routing",
    "fixture_structural_session_scoped_private_read_activation",
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

  // (d) the inventory union stays intact: the D-P23 inventory is the
  // imported D-P22 base, and the second and third contracts import the
  // D-P23 union by value — one widening per lane.
  assert.ok(
    texts[0].includes("POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS"),
    "the composed inventory must import the frozen D-P22 base",
  );
  assert.ok(
    texts[1].includes("POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS") &&
      texts[2].includes("POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS"),
    "the live-read contract and the wall share the same inventory import",
  );
  for (const key of [
    "collaborativeReadResult",
    "claimedCollaborativeReadContent",
    "counterpartLiveLegs",
    "sharedScopeObject",
  ]) {
    assert.ok(texts[0].includes(`"${key}"`), `forbidden key ${key} missing from the contract inventory`);
  }
  assert.ok(
    texts[1].includes('from "./pond-collaborative-read-session-request-decision.ts"') &&
      texts[2].includes('from "./pond-collaborative-read-session-request-decision.ts"'),
    "contracts 2 and 3 import contract 1's inventory via the .ts specifier",
  );

  // (e) the env-needle family stays out of every file of this cut: no
  // secret-bearing ceremony exists, so even the shared live-session env
  // prefix never appears. The ban matches the shared prefix — never the
  // full env name.
  for (const path of [
    ...contractPaths,
    "docs/stage-d-p23-pond-collaborative-read-lane.md",
    "ui/pond-collaborative-read.js",
    "scripts/render-stage-d-live-session-collaborative-read.mjs",
    "ui/pond-desktop.html",
    "ui/pond-desktop.css",
  ]) {
    const fileText = readModule(path);
    assert.ok(
      !fileText.includes(["TOADAID", "_LIVE_", ""].join("")),
      `${path} carries a live-session env-prefixed name`,
    );
  }

  // (f) the counterpart secret literal stays out of EVERY file of this
  // cut — the D-P14 hygiene ban forces the digest-level posture here:
  // both needles are assembled at runtime so this walking cut never
  // carries the literal itself.
  const counterpartSecretNeedle = ["pond", "-stage-d-p8", "-fixture", "-secret", "-counterpart"].join("");
  const fixtureSecretNeedle = ["-fixture", "-secret"].join("");
  for (const path of [
    ...contractPaths,
    "docs/stage-d-p23-pond-collaborative-read-lane.md",
    "ui/pond-collaborative-read.js",
    "scripts/render-stage-d-live-session-collaborative-read.mjs",
    "scripts/pond-collaborative-live-read-lane-selftest.mjs",
    "ui/pond-desktop.html",
    "ui/pond-desktop.css",
    "package.json",
    ".github/workflows/ci.yml",
  ]) {
    const fileText = readModule(path);
    assert.ok(!fileText.includes(counterpartSecretNeedle), `${path} carries the counterpart fixture secret literal`);
    assert.ok(!fileText.includes(fixtureSecretNeedle), `${path} carries the fixture-secret substring`);
  }

  // (g) the hand-written collaborative module stays walked: it reaches
  // contract code only through the generated bundles and the sibling
  // live-session module — no src import, no frozen contract filename,
  // no transport or store needle.
  const moduleText = readModule("ui/pond-collaborative-read.js");
  assert.ok(
    !moduleText.includes('from "../src/'),
    "the module must never import src contracts directly",
  );
  for (const frozenName of [
    "pond-collaborative-structural-read-gate",
    "pond-collaborative-read-activation",
    "pond-collaborative-read-admission",
    "pond-live-session-read-gate",
    "pond-knowledge-forge",
  ]) {
    assert.ok(
      !moduleText.includes(frozenName),
      "the hand-written module carries frozen vocabulary",
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
    "getUserMedia",
    "mediaDevices",
  ]) {
    assert.ok(!moduleText.includes(forbidden), `the module must not carry ${forbidden}`);
  }
  assert.match(
    moduleText,
    /from "\.\/generated\/pond-stage-d-live-session-collaborative-read\.js"/,
    "the collaborative module imports through the committed generated artifact",
  );
  assert.match(
    moduleText,
    /from "\.\/generated\/pond-stage-d-live-session\.js"/,
    "the module reads the declared maximum age through the frozen session bundle",
  );
  assert.match(
    moduleText,
    /from "\.\/pond-live-session\.js"/,
    "the module reads the sibling live-session lane's held records",
  );
  assert.match(
    moduleText,
    /if \(typeof document !== "undefined"\) \{\s*renderPondCollaborativeRead\(document\);\s*\}/,
    "the module self-mounts like its sibling lane modules",
  );

  // (h) package and CI wiring assert step by step.
  const packageJson = JSON.parse(readModule("package.json"));
  assert.equal(
    packageJson.scripts["test:stage-d-p23"],
    "node scripts/pond-collaborative-live-read-lane-selftest.mjs",
  );
  assert.equal(
    packageJson.scripts["stage-d:render-live-session-collaborative-read"],
    "node scripts/render-stage-d-live-session-collaborative-read.mjs",
  );
  const ci = readModule(".github/workflows/ci.yml");
  assert.equal(
    ci.split("Verify Stage D-P23 pond collaborative live read lane").length - 1,
    2,
    "the CI verify step appears exactly once in each job",
  );

  // (i) the provenance ties: the D-P23 provenance names the session-
  // request record as its record, renders the stages through D-P23,
  // carries the re-run chain's rendered stages, never names the
  // transport, reply, or voice contracts as its inputs (the lane's
  // chain never re-runs them), and the frozen upstream provenances
  // stay untouched.
  const provenance = JSON.parse(
    readModule("ui/generated/pond-stage-d-live-session-collaborative-read-provenance.json"),
  );
  assert.equal(
    provenance.record,
    "src/contracts/pond-collaborative-read-session-request-decision.ts",
  );
  assert.deepEqual(
    provenance.renderedStages.slice(-1),
    ["D-P23"],
    "the provenance extends the rendered stages through D-P23",
  );
  assert.ok(
    provenance.renderedStages.includes("D-P15"),
    "the provenance carries the re-run chain's rendered stages",
  );
  const provenanceInputsText = JSON.stringify(provenance.inputs);
  for (const notAnInput of [
    "pond-transport-policy",
    "pond-reply-lane",
    "pond-cognition-provider-decision",
    "pond-voice",
  ]) {
    assert.ok(
      !provenanceInputsText.includes(notAnInput),
      `the provenance must not name ${notAnInput} as an input`,
    );
  }
  const voiceProvenance = JSON.parse(
    readModule("ui/generated/pond-stage-d-live-session-voice-provenance.json"),
  );
  assert.ok(
    !voiceProvenance.renderedStages.includes("D-P23"),
    "the frozen D-P22 provenance stays untouched",
  );
});// ---------------------------------------------------------------
// Block 9: ui wiring — the committed generated bundle recomputes the
// established arms identically to the src contracts; the bundle's
// templates re-fill byte-equal to the source fixture's; the render is
// fail-closed per missing node and renders the honest empty posture;
// the shell drive on the fixture clock records the collaborative read
// request over the established session, performs the live-read
// activation with BOTH mapped chains green and the full 13-label
// table, refuses every replay on its basis check alone, refuses the
// out-of-range index before any input exists, re-assesses the
// counterpart's own death honestly, confines BOTH rows verbatim after
// the retraction with counts stable, and holds the wall; the
// neighboring lanes stay untouched; and the markup contract stays
// additive with the mic invariant intact.
// ---------------------------------------------------------------
block("uiWiring", () => {
  // (a) the generated-bundle tie: the committed artifact is the only
  // bridge from the shell module to the contracts; the three assessors
  // recompute the established and refused arms identically.
  const generatedBundle =
    readModule("ui/generated/pond-stage-d-live-session-collaborative-read.js");
  assert.ok(generatedBundle.length > 0);
  assert.deepEqual(
    deepClone(assessGeneratedCollaborativeReadSessionRequestDecision(
      requestInputOf(requestRecordedArm),
    )),
    deepClone(runFreshRequest(requestInputOf(requestRecordedArm))),
    "the generated request assessor recomputes identically",
  );
  const refusedRequestArm = byLabel(
    stageDP23CollaborativeReadSessionRequestMatrix,
    "collaborative_read_request_refused_basis_asserted_by_counterpart_declaration",
  );
  assert.deepEqual(
    deepClone(assessGeneratedCollaborativeReadSessionRequestDecision(
      requestInputOf(refusedRequestArm),
    )),
    deepClone(runFreshRequest(requestInputOf(refusedRequestArm))),
  );
  assert.deepEqual(
    deepClone(assessGeneratedCollaborativeReadLiveAdmissionDecision(
      liveReadInputOf(liveReadRecordedArm),
    )),
    deepClone(runFreshLiveRead(liveReadInputOf(liveReadRecordedArm))),
    "the generated live-read assessor recomputes identically",
  );
  const refusedLiveReadArm = byLabel(
    stageDP23CollaborativeLiveReadMatrix,
    "collaborative_live_read_counterpart_chain_expired_own_death",
  );
  assert.deepEqual(
    deepClone(assessGeneratedCollaborativeReadLiveAdmissionDecision(
      liveReadInputOf(refusedLiveReadArm),
    )),
    deepClone(runFreshLiveRead(liveReadInputOf(refusedLiveReadArm))),
  );
  assert.deepEqual(
    deepClone(assessGeneratedClaimedCollaborativeReadRefusal(wallInputOf(terminalArm))),
    deepClone(runFreshWall(wallInputOf(terminalArm))),
    "the generated wall assessor recomputes identically",
  );

  // The bundle's templates and inventory are the committed copies of
  // the source fixture's exports — the four templates and the shared
  // inventory stay byte-equal in value.
  assert.deepEqual(
    deepClone(generatedSessionRequestTemplate),
    deepClone(pondStageDP23CollaborativeReadSessionRequestTemplate),
  );
  assert.deepEqual(
    deepClone(generatedLiveAdmissionTemplate),
    deepClone(pondStageDP23CollaborativeLiveAdmissionTemplate),
  );
  assert.deepEqual(
    deepClone(generatedActivationTemplate),
    deepClone(pondStageDP14CollaborativeActivationRecordTemplate),
  );
  assert.deepEqual(
    deepClone(generatedAdmissionTemplate),
    deepClone(pondStageDP14CollaborativeAdmissionRecordTemplate),
  );

  // (b) render drive — fail-closed on missing document/nodes.
  assert.equal(renderPondCollaborativeRead(undefined), false);
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
      collabReadNote: elementStub(),
      collabReadStatus: elementStub(),
      collabReadList: elementStub(),
      collabReadWall: elementStub(),
    };
    const collectText = (node) =>
      [node.textContent, ...node.children.map(collectText)].join("\n");
    return {
      nodes,
      collectText,
      querySelector(selector) {
        if (selector === "[data-collab-read-note]") return nodes.collabReadNote;
        if (selector === "[data-collab-read-status]") return nodes.collabReadStatus;
        if (selector === "[data-collab-read-list]") return nodes.collabReadList;
        if (selector === "[data-collab-read-wall]") return nodes.collabReadWall;
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
  missingStatus.nodes.collabReadStatus = null;
  assert.equal(renderPondCollaborativeRead(missingStatus), false);
  const missingList = documentStub();
  missingList.nodes.collabReadList = null;
  assert.equal(renderPondCollaborativeRead(missingList), false);
  const missingNote = documentStub();
  missingNote.nodes.collabReadNote = null;
  assert.equal(renderPondCollaborativeRead(missingNote), false);
  const missingWall = documentStub();
  missingWall.nodes.collabReadWall = null;
  assert.equal(renderPondCollaborativeRead(missingWall), false);

  // The render drive on the empty shell state — the honest empty
  // posture with the fail-closed wall presented.
  const liveDocument = documentStub();
  assert.equal(renderPondCollaborativeRead(liveDocument), true);
  assert.equal(
    liveDocument.nodes.collabReadNote.dataset.collabReadRendered,
    "true",
    "the render marks its note node",
  );
  assert.match(
    liveDocument.collectText(liveDocument.nodes.collabReadList),
    /No collaborative read request recorded/,
  );
  assert.match(
    liveDocument.collectText(liveDocument.nodes.collabReadWall),
    /Claimed-collaborative wall · pond_claimed_collaborative_joint_read_content_refused_no_collaborative_read_result_exists_this_cut/,
  );

  // (c) the shell drive on the fixture clock — the collaborative lane
  // lifecycle. Determinism comes from the contract's purity, never
  // from the wall clock. No record content is read by anything in this
  // drive; the counterpart stays structural never-issued throughout.
  const establishedArmD15 = stageDP15SessionEntryLiveSessionEstablished;
  const nowMs = stageDP15EvaluatedAtEpochMs;
  assert.equal(nowMs, stageDP23EstablishedAtEpochMs);
  const verifierRecord = deepClone(establishedArmD15.dp8VerifierRecord);
  const proofRecord = deepClone(establishedArmD15.dp8ProofRecord);
  const observationRecord = deepClone(
    stageDP6AuthenticationObservationComplete.observationRecord,
  );

  // Before any establishment: even the session-held lane refuses a
  // record without held live-session records — nothing is fabricated.
  assert.equal(
    recordCollaborativeReadSessionRequest({
      collaborativeReadRequestedAtEpochMs: stageDP23PreEstablishmentRequestEventAtEpochMs,
      evaluatedAtEpochMs: stageDP23PreEstablishmentRequestEventAtEpochMs + 500,
      maximumAgeMs: maximumAge,
    }).refusalReason,
    "live_session_records_not_held",
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

  // Record the collaborative read request over the established session:
  // the request declares the counterpart on the recorded basis, creates
  // no scope object, and reads nothing.
  const recordedRequest = recordCollaborativeReadSessionRequest({
    collaborativeReadRequestedAtEpochMs: stageDP23CollaborativeReadRequestEventAtEpochMs,
    evaluatedAtEpochMs: stageDP23CollaborativeReadRequestEvaluatedAtEpochMs,
    maximumAgeMs: maximumAge,
  });
  assert.equal(recordedRequest.recorded, true, "the healthy request must record");
  assert.equal(
    recordedRequest.assessment.collaborativeReadSessionRequestState,
    "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
  );
  assert.equal(
    recordedRequest.assessment.reason,
    "all_collaborative_read_request_checks_satisfied",
  );
  // The held-module gate record opens at the caller's evaluation time
  // (the module re-times the projection; the fixture arms pin the
  // establishment instant — the difference is exactly the projection's
  // own freshness, zero), so the drive's echoes pin the module-actual
  // values honestly: the request's own diagnosis at 500, the gate
  // re-run green at zero age.
  assert.equal(
    recordedRequest.assessment.collaborativeReadRequestEventFreshnessDiagnosis
      .observationAgeMs,
    stageDP23CollaborativeReadRequestEvaluatedAtEpochMs -
      stageDP23CollaborativeReadRequestEventAtEpochMs,
  );
  assert.equal(
    recordedRequest.assessment.mappedReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
  );
  assert.equal(
    recordedRequest.assessment.mappedReadGateReassessmentReason,
    "all_read_gate_checks_satisfied",
  );
  assert.deepEqual(
    deepClone(recordedRequest.assessment.mappedReadGateFreshnessDiagnosis),
    { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 0 },
  );
  assert.equal(
    recordedRequest.assessment.mappedCounterpartJoinState,
    "fixture_structural_receiver_declared_counterpart_join",
  );
  assert.equal(
    recordedRequest.assessment.mappedEstablishmentState,
    "live_session_scoped_authentication_established",
  );
  assert.equal(
    recordedRequest.assessment.mappedDp10ActivationState,
    "fixture_structural_session_scoped_private_read_activation",
  );
  assert.equal(recordedRequest.assessment.authority, "none");
  assert.equal(heldCollaborativeReadRequestEntries().entries.length, 1);

  // The lane posture reads the recorded request in-session.
  const requestPosture = currentCollaborativeReadPosture({
    evaluatedAtEpochMs: stageDP23CollaborativeReadRequestEvaluatedAtEpochMs,
    maximumAgeMs: maximumAge,
  });
  assert.equal(requestPosture.held, true);
  assert.equal(requestPosture.requests.length, 1);
  assert.equal(requestPosture.requests[0].presentationMark, "in_session");
  assert.equal(requestPosture.liveReads.length, 0, "no live-read exists before the activation");

  // Perform the collaborative live-read activation: BOTH mapped chains
  // re-run green at the inclusive counterpart boundary, the full
  // 13-label structural table is admitted by nothing but recorded
  // honestly, no content of any record is read.
  const performedRead = performCollaborativeLiveReadActivation({
    collaborativeReadRequestIndex: 0,
    collaborativeLiveReadRecordedAtEpochMs: stageDP23CollaborativeLiveReadEventAtEpochMs,
    evaluatedAtEpochMs: stageDP23CollaborativeLiveReadEvaluatedAtEpochMs,
    maximumAgeMs: maximumAge,
  });
  assert.equal(performedRead.recorded, true, "the healthy activation must record");
  assert.equal(
    performedRead.assessment.collaborativeLiveReadState,
    "collaborative_live_structural_records_read_admitted_session_scoped_no_scope_object_no_content",
  );
  assert.equal(
    performedRead.assessment.reason,
    "all_collaborative_live_read_checks_satisfied",
  );
  // BOTH mapped chains re-run green at the inclusive counterpart
  // boundary — the receiver chain fresh, the counterpart chain exactly
  // at its inclusive boundary — over the drive's held legs.
  assert.deepEqual(
    performedRead.assessment.mappedDp14ReceiverChain.mappedDp6.diagnosis,
    { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 50000 },
  );
  assert.deepEqual(
    performedRead.assessment.mappedDp14CounterpartChain.mappedDp6.diagnosis,
    { state: "fresh", reason: "within_declared_maximum_age", observationAgeMs: 60000 },
  );
  assert.deepEqual(
    deepClone(performedRead.assessment.recordedAdmittedTargetRefs),
    deepClone(stageDP23AllThirteenTargetRefs),
  );
  assert.equal(
    performedRead.assessment.mappedDp14ActivationState,
    "fixture_structural_session_scoped_collaborative_structural_read_activation",
  );
  assert.equal(
    performedRead.assessment.mappedDp14AdmissionState,
    "fixture_structural_collaborative_structural_record_read_admitted",
  );
  assert.equal(
    performedRead.assessment.mappedCollaborativeReadRequestState,
    "collaborative_read_session_request_recorded_session_scoped_no_scope_object_no_read",
  );
  assert.equal(
    performedRead.assessment.mappedReadGateState,
    "live_session_scoped_single_principal_structural_reads_live_activated",
  );
  assert.equal(performedRead.assessment.collaborativeLiveReadConsumedThisCut, false);
  assert.equal(performedRead.assessment.authority, "none");
  assert.equal(heldCollaborativeLiveReadEntries().entries.length, 1);

  // The read-admitted record carries no content of any record — the
  // zero-echo probe over the drive's actual stored input.
  for (const claimProbe of [
    stageDP23ClaimedCollaborativeReadText,
    stageDP23ComposedProseClaimText,
  ]) {
    assert.ok(
      !carriesString(
        heldCollaborativeLiveReadEntries().entries[0].input,
        claimProbe,
      ),
      "the performed activation's stored input carries no claim content",
    );
  }

  // A replayed request refuses on the basis check alone — counts stay
  // exactly 1.
  const replayedRequest = recordCollaborativeReadSessionRequest({
    collaborativeReadRequestedAtEpochMs: stageDP23CollaborativeReadRequestEventAtEpochMs + 50,
    evaluatedAtEpochMs: stageDP23CollaborativeReadRequestEvaluatedAtEpochMs,
    maximumAgeMs: maximumAge,
  });
  assert.equal(replayedRequest.recorded, false, "a replayed request refuses");
  assert.equal(
    replayedRequest.assessment.reason,
    "receiver_collaborative_read_request_proof_incomplete",
  );
  assert.deepEqual(
    replayedRequest.assessment.unsatisfiedChecks,
    ["collaborative_read_request_basis_receiver_recorded_not_inferred"],
    "the replay refuses on the basis check alone, every leg echo green",
  );
  assert.equal(heldCollaborativeReadRequestEntries().entries.length, 1);

  // A replayed activation refuses the same way.
  const replayedRead = performCollaborativeLiveReadActivation({
    collaborativeReadRequestIndex: 0,
    collaborativeLiveReadRecordedAtEpochMs: stageDP23CollaborativeLiveReadEventAtEpochMs + 50,
    evaluatedAtEpochMs: stageDP23CollaborativeLiveReadEvaluatedAtEpochMs,
    maximumAgeMs: maximumAge,
  });
  assert.equal(replayedRead.recorded, false, "a replayed activation refuses");
  assert.equal(
    replayedRead.assessment.reason,
    "receiver_collaborative_live_read_proof_incomplete",
  );
  assert.deepEqual(
    replayedRead.assessment.unsatisfiedChecks,
    ["collaborative_live_read_basis_receiver_performed_not_inferred"],
  );
  assert.equal(heldCollaborativeLiveReadEntries().entries.length, 1);

  // An out-of-range request index refuses before any input exists.
  const outOfRangeRead = performCollaborativeLiveReadActivation({
    collaborativeReadRequestIndex: 9,
    collaborativeLiveReadRecordedAtEpochMs: stageDP23CollaborativeLiveReadEventAtEpochMs,
    evaluatedAtEpochMs: stageDP23CollaborativeLiveReadEvaluatedAtEpochMs,
    maximumAgeMs: maximumAge,
  });
  assert.equal(outOfRangeRead.recorded, false);
  assert.equal(outOfRangeRead.assessment, null);
  assert.equal(
    outOfRangeRead.refusalReason,
    "collaborative_read_request_index_out_of_range",
  );
  assert.equal(heldCollaborativeLiveReadEntries().entries.length, 1);

  // The counterpart's OWN death: one tick past the boundary the
  // re-assessment confines the live-read row at the lane's own
  // counterpart cause while the request row stays in-session — the
  // session outlives the co-read.
  const expiryPosture = currentCollaborativeReadPosture({
    evaluatedAtEpochMs: stageDP23CounterpartExpiredEvaluatedAtEpochMs,
    maximumAgeMs: maximumAge,
  });
  assert.equal(expiryPosture.requests.length, 1);
  assert.equal(expiryPosture.liveReads.length, 1);
  assert.equal(expiryPosture.requests[0].presentationMark, "in_session");
  assert.equal(
    expiryPosture.liveReads[0].presentationMark,
    "confined_reassessment_refusal",
    "the co-read confines honestly at its own counterpart cause",
  );
  assert.equal(
    expiryPosture.liveReads[0].reassessmentReason,
    "counterpart_chain_refused_structural_never_issued_or_not_current",
  );
  assert.equal(heldCollaborativeReadRequestEntries().entries.length, 1);
  assert.equal(heldCollaborativeLiveReadEntries().entries.length, 1);

  // The standing claimed-collaborative wall holds throughout the drive.
  const wallHold = currentClaimedCollaborativeReadWallPosture();
  assert.equal(
    wallHold.reason,
    "pond_claimed_collaborative_joint_read_content_refused_no_collaborative_read_result_exists_this_cut",
  );
  assert.equal(wallHold.claimedCollaborativeReadState, "claimed_collaborative_read_content_not_composed");
  assert.deepEqual(
    deepClone(wallHold.declaredClaimCollaborativeReadClasses),
    deepClone(POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES),
  );

  // Retract: BOTH recorded rows CONFINE honestly (the D-P20 governance
  // posture — module state, process lifetime, never deleted). Each
  // row presents its reassessment's own cause verbatim through the
  // dead gate.
  const retraction = retractLiveSession({
    retractedAtEpochMs: stageDP23RetractionRecordedAtEpochMs,
  });
  assert.equal(retraction.retracted, true);
  const confinedAt = stageDP23ConfinedReassessmentEvaluatedAtEpochMs;
  assert.ok(confinedAt > stageDP23RetractionRecordedAtEpochMs);
  const confinedRun = currentCollaborativeReadPosture({
    evaluatedAtEpochMs: confinedAt,
    maximumAgeMs: maximumAge,
  });
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
    "live_session_read_gate_not_currently_live",
    "the confined request presents the reassessment's own cause verbatim",
  );
  assert.equal(
    confinedRun.requests[0].collaborativeReadSessionRequest.collaborativeReadRequestMetadata
      .collaborative_read_requested_at_epoch_ms,
    stageDP23CollaborativeReadRequestEventAtEpochMs,
    "the recorded request facts stay verbatim after the session ends",
  );
  assert.equal(
    confinedRun.liveReads.length,
    1,
    "the live-read row survives as module state — confined, not deleted",
  );
  assert.equal(
    confinedRun.liveReads[0].presentationMark,
    "confined_reassessment_refusal",
  );
  assert.equal(
    confinedRun.liveReads[0].reassessmentReason,
    "live_session_read_gate_not_currently_live",
  );

  // A post-retraction request refuses at the dead gate re-run and
  // stores nothing; the recorded rows never grow.
  const postRetractionRequest = recordCollaborativeReadSessionRequest({
    collaborativeReadRequestedAtEpochMs: confinedAt,
    evaluatedAtEpochMs: confinedAt,
    maximumAgeMs: maximumAge,
  });
  assert.equal(postRetractionRequest.recorded, false);
  assert.equal(
    postRetractionRequest.assessment.reason,
    "live_session_read_gate_not_currently_live",
    "a request over a confined session refuses at the gate re-run",
  );
  assert.equal(heldCollaborativeReadRequestEntries().entries.length, 1);
  assert.equal(heldCollaborativeLiveReadEntries().entries.length, 1);

  // The wall panel holds unchanged through the retraction — the wall
  // never had session legs to lose.
  const confinedWall = currentClaimedCollaborativeReadWallPosture();
  assert.deepEqual(deepClone(confinedWall), deepClone(wallHold));

  // The neighboring lanes stay untouched by the collaborative lane
  // throughout: the drive recorded no delivery decision, no dispatch,
  // no reply request, no conversation record — and the voice lane
  // stays untouched by this lane entirely.
  assert.equal(heldDeliveryDecisions().decisions.length, 0);
  assert.equal(heldDispatchDecisions().decisions.length, 0);
  assert.equal(heldReplyRequestEntries().entries.length, 0);
  assert.equal(heldConversationRecordEntries().entries.length, 0);
  assert.equal(
    heldVoiceRequestEntries().entries.length,
    0,
    "the voice lane stays untouched by the collaborative drive",
  );

  // (d) markup contract on ui/pond-desktop.html — the collaborative
  // region is additive, the mic stays disabled (the B2 invariant),
  // and the modules load in lane order (transport < replies < voice <
  // collaborative-read < shell).
  const html = readModule("ui/pond-desktop.html");
  assert.match(html, /data-collab-read-note/);
  assert.match(html, /data-collab-read-status/);
  assert.match(html, /data-collab-read-list/);
  assert.match(html, /data-collab-read-wall/);
  assert.match(html, /mic-button" type="button" disabled/);
  const transportTag = html.indexOf('src="pond-transport.js"');
  const repliesTag = html.indexOf('src="pond-replies.js"');
  const voiceTag = html.indexOf('src="pond-voice.js"');
  const collaborativeTag = html.indexOf('src="pond-collaborative-read.js"');
  const shellTag = html.indexOf('src="pond-shell.js"');
  assert.ok(collaborativeTag !== -1, "the collaborative module script tag is present");
  assert.ok(transportTag < repliesTag, "the replies module loads after the transport module");
  assert.ok(repliesTag < voiceTag, "the voice module loads after the replies module");
  assert.ok(voiceTag < collaborativeTag, "the collaborative module loads after the voice module");
  assert.ok(collaborativeTag < shellTag, "the collaborative module loads before the shell module");

  // (e) the neighboring lanes stay untouched by the collaborative lane:
  // the frozen D-P16..D-P22 modules never mention it.
  const dispatchModuleText = readModule("ui/pond-dispatch.js");
  const receiptsModuleText = readModule("ui/pond-receipts.js");
  const deliveryModuleText = readModule("ui/pond-delivery.js");
  const conversationModuleText = readModule("ui/pond-conversation.js");
  const sessionModuleText = readModule("ui/pond-live-session.js");
  const transportModuleText = readModule("ui/pond-transport.js");
  const repliesModuleText = readModule("ui/pond-replies.js");
  const voiceModuleText = readModule("ui/pond-voice.js");
  for (const [name, text] of [
    ["pond-dispatch.js", dispatchModuleText],
    ["pond-receipts.js", receiptsModuleText],
    ["pond-delivery.js", deliveryModuleText],
    ["pond-conversation.js", conversationModuleText],
    ["pond-live-session.js", sessionModuleText],
    ["pond-transport.js", transportModuleText],
    ["pond-replies.js", repliesModuleText],
    ["pond-voice.js", voiceModuleText],
  ]) {
    assert.ok(
      !text.includes("pond-collaborative-read"),
      `${name} stays untouched by the collaborative lane`,
    );
  }
});

console.log(
  `POND_STAGE_DP23_POND_COLLABORATIVE_LIVE_READ_LANE_SELFTEST_PASS · ${blocks} blocks`,
);