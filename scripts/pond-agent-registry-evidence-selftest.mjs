#!/usr/bin/env node
// Stage D-P24 selftest — the agent registration evidence lane
// (registration evidence only, desk template one).
//
// Seven blocks, fully offline:
//   1. matrix          — pinned counts; every arm recompute deep-equal +
//                        deep-frozen; ceilings/state sets; postures verbatim.
//   2. identityTies    — transcription digest recompute; the desk's pins;
//                        all-null onchain slots; the D-P0 inventory union.
//   3. negatives       — every refused arm at its dedicated cause.
//   4. lifecycle       — staleness/future arms; re-presentation stability;
//                        inventory widen probes.
//   5. failClosed      — garbage never throws; ceilings stay all-false.
//   6. hygiene         — needles, frozen names, env/secret ban, ui walk,
//                        package/CI wiring, provenance ties.
//   7. uiWiring        — generated-vs-src agreement; fail-closed render
//                        drives; the empty-stub drive; shell integration and
//                        neighbor isolation.
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { readdir } from "node:fs/promises";

// ---------------------------------------------------------------------------
// Imports: the real contract (source), the real fixture (source), the
// committed ui bundle, the hand-written ui module, and the neighbor lanes.
// ---------------------------------------------------------------------------
import {
  POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_BASES,
  POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CHECKS,
  POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION,
  POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_POSTURES,
  POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_RECORD_KEYS,
  POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_REASONS,
  POND_STAGE_DP24_AGENT_REGISTRATION_TYPE_KINDS,
  POND_STAGE_DP24_FORBIDDEN_AGENT_IDENTITY_EVIDENCE_KEYS,
  POND_STAGE_DP24_ONCHAIN_EVIDENCE_SLOT_STATUSES,
  POND_STAGE_DP24_REGISTRATION_DIGEST_BASES,
  assessPondAgentRegistrationEvidence,
} from "../src/contracts/pond-agent-registration-evidence.ts";
import {
  pondStageDP24AgentRegistrationEvidenceTemplate,
  stageDP24AgentRegistrationEvidenceMatrix,
  stageDP24CanonicalTranscriptionDigestHex,
  stageDP24CanonicalTranscriptionLines,
  stageDP24DeskRegistrationActive,
  stageDP24DeskRegistrationAgentEvidenceRef,
  stageDP24DeskRegistrationDigestHex,
  stageDP24DeskRegistrationName,
  stageDP24DeskRegistrationObservedAtEpochMs,
  stageDP24DeskRegistrationObservedBy,
  stageDP24DeskRegistrationServiceCount,
  stageDP24DeskRegistrationServiceNames,
  stageDP24DeskRegistrationSourceRef,
  stageDP24DeskRegistrationSupportedTrust,
  stageDP24DeskRegistrationTypeKind,
  stageDP24DeskRegistrationX402Support,
  stageDP24ReceiverEvaluatedAtEpochMs,
  stageDP24ReceiverMaximumAgeMs,
} from "../src/fixtures/stage-d-p24-agent-identity-evidence.ts";
import {
  POND_STAGE_D_P0_FORBIDDEN_LIVE_CONNECTION_KEYS,
  POND_STAGE_D_P0_FORBIDDEN_PRESENCE_RECORD_KEYS,
} from "../src/contracts/pond-agent-presence-projection.ts";
import {
  pondStageDAgentRegistryRecord as generatedRegistryRecord,
  default as generatedDefault,
} from "../ui/generated/pond-stage-d-agent-registry.js";
import {
  renderPondAgentRegistry,
} from "../ui/pond-agent-registry.js";
import { heldDeliveryDecisions } from "../ui/pond-delivery.js";
import { heldDispatchDecisions } from "../ui/pond-dispatch.js";
import { heldReplyRequestEntries } from "../ui/pond-replies.js";
import { heldConversationRecordEntries } from "../ui/pond-conversation.js";
import { heldVoiceRequestEntries } from "../ui/pond-voice.js";
import { heldLiveSessionRecords } from "../ui/pond-live-session.js";

const repoRoot = new URL("..", import.meta.url).pathname;
const readModule = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const deepClone = (value) => JSON.parse(JSON.stringify(value));

const assertDeepFrozen = (value, path) => {
  if (value === null || typeof value === "object") {
    if (value === null) return;
    assert.ok(Object.isFrozen(value), `not frozen: ${path}`);
    if (Array.isArray(value)) {
      for (const item of value) assertDeepFrozen(item, `${path}[]`);
    } else {
      for (const key of Object.keys(value)) assertDeepFrozen(value[key], `${path}.${key}`);
    }
  }
};

const walkFiles = async (root) => {
  const paths = [];
  const walk = async (directory) => {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const full = `${directory}/${entry.name}`;
      if (entry.isDirectory()) await walk(full);
      else paths.push(full);
    }
  };
  await walk(root);
  return paths.sort();
};

const assessArm = (arm) =>
  assessPondAgentRegistrationEvidence({
    registrationEvidenceRecord: arm.registrationEvidenceRecord,
    receiverRecomputedDigestHex: arm.receiverRecomputedDigestHex,
    receiverEvaluatedAtEpochMs: arm.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: arm.receiverMaximumAgeMs,
  });

const byLabel = (matrix, label) => {
  const entry = matrix.find((arm) => arm.fixtureLabel === label);
  assert.ok(entry !== undefined, `missing fixture arm: ${label}`);
  return entry;
};

const assertAllCeilingsHold = (assessment) => {
  for (const key of [
    "agentRegistrationEvidenceEstablishesAdmission",
    "agentRegistrationEvidenceEstablishesMembership",
    "agentRegistrationEvidenceEstablishesChannel",
    "agentRegistrationEvidenceEstablishesAuthority",
    "agentRegistrationEvidenceEstablishesCapability",
    "agentRegistrationEvidenceEstablishesGrant",
    "agentRegistrationEvidenceEstablishesConsequenceOrExecution",
    "registrationPresentedEstablishesRuntimeIdentity",
    "registrationDigestAcceptedAsPrincipalId",
    "erc8004IdentityAcceptedAsPrincipalId",
    "erc8004ValidationAcceptedAsAcceptance",
    "erc8004ReputationAcceptedAsAuthority",
    "erc8004RegistryRecordAcceptedAsLocalAdmission",
    "presentedEvidencePromotedToCanonicalCurrentState",
    "admissionWidenedByPresentation",
    "sourceVerifiedPresentedAsWiringOrLiveVerified",
  ]) {
    assert.equal(assessment[key], false, `ceiling ${key} drifted`);
  }
  assert.equal(assessment.registrationEvidenceConsumedThisCut, false);
  assert.equal(assessment.runtimeActivationPosture, "not_included");
  assert.equal(assessment.authority, "none");
};

const greenArm = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "desk-registration-presented-green");
const unrecognizedArm = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "unrecognized-type-kind-presented");
const staleArm = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "stale-observation");
const futureArm = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "future-observation");

// ---------------------------------------------------------------------------
// Block 1 — matrix: counts, recompute agreement, freeze, state sets.
// ---------------------------------------------------------------------------
{
  assert.equal(stageDP24AgentRegistrationEvidenceMatrix.length, 13);
  assert.equal(POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CHECKS.length, 7);
  assert.equal(POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_REASONS.length, 6);
  assert.equal(POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_RECORD_KEYS.length, 23);
  assert.equal(POND_STAGE_DP24_FORBIDDEN_AGENT_IDENTITY_EVIDENCE_KEYS.length, 23);
  assert.equal(POND_STAGE_DP24_AGENT_REGISTRATION_TYPE_KINDS.length, 2);
  assert.equal(POND_STAGE_DP24_REGISTRATION_DIGEST_BASES.length, 1);
  assert.equal(POND_STAGE_DP24_ONCHAIN_EVIDENCE_SLOT_STATUSES.length, 1);
  assert.equal(POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_BASES.length, 2);

  for (const arm of stageDP24AgentRegistrationEvidenceMatrix) {
    const rerun = assessArm(arm);
    assert.deepEqual(deepClone(rerun), deepClone(arm.assessment), `recompute drift: ${arm.fixtureLabel}`);
    assertDeepFrozen(arm.assessment, `assessment:${arm.fixtureLabel}`);
    assertDeepFrozen(arm.registrationEvidenceRecord, `record:${arm.fixtureLabel}`);

    assertAllCeilingsHold(rerun);
    assert.equal(
      rerun.agentRegistrationEvidenceState ===
        "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel",
      rerun.reason === "agent_registration_evidence_derived_evidence_only_presentation_satisfied",
      `state/reason coherence: ${arm.fixtureLabel}`,
    );
    assert.equal(
      rerun.agentRegistrationEvidenceState ===
        "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel",
      rerun.satisfiedChecks.length === 7 && rerun.unsatisfiedChecks.length === 0,
      `check coherence: ${arm.fixtureLabel}`,
    );
    for (const postureKey of Object.keys(POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_POSTURES)) {
      assert.equal(
        rerun[postureKey],
        POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_POSTURES[postureKey],
        `posture ${postureKey} drifted`,
      );
    }
  }

  // Exactly one green arm (plus the unrecognized-type presentation twin):
  // every other arm refuses at not_presentation_ready.
  const greenArms = stageDP24AgentRegistrationEvidenceMatrix.filter(
    (arm) =>
      arm.assessment.agentRegistrationEvidenceState ===
      "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel",
  );
  assert.equal(greenArms.length, 2);
  assert.deepEqual(
    greenArms.map((arm) => arm.fixtureLabel).sort(),
    ["desk-registration-presented-green", "unrecognized-type-kind-presented"],
  );

  // The green arms satisfy all seven checks in the pinned canonical order.
  assert.deepEqual(greenArm.assessment.satisfiedChecks, [
    "agent_registration_evidence_record_well_formed",
    "presentation_digest_sha256_recomputed_and_agrees",
    "registration_digest_basis_declared_file_bytes",
    "onchain_evidence_slot_honestly_not_observed",
    "agent_registration_evidence_refusal_postures_complete",
    "agent_registration_evidence_fresh_by_provenance_observation_time",
    "registration_evidence_consumed_by_nothing_and_authority_none",
  ]);
}

// ---------------------------------------------------------------------------
// Block 2 — identityTies: the transcription digest recompute, the desk's
// pins, the all-null onchain slots, and the D-P0 inventory union.
// ---------------------------------------------------------------------------
{
  // The canonical transcription digest: sha256 over the exact pinned lines,
  // each newline-terminated, hex-plain.
  const hash = createHash("sha256");
  for (const line of stageDP24CanonicalTranscriptionLines) hash.update(line + "\n");
  assert.equal(hash.digest("hex"), stageDP24CanonicalTranscriptionDigestHex);

  // The desk transcription pins: the real values, pinned verbatim.
  assert.equal(stageDP24DeskRegistrationName, "ToadAid Trading Desk");
  assert.equal(stageDP24DeskRegistrationServiceCount, 2);
  assert.deepEqual([...stageDP24DeskRegistrationServiceNames], ["github", "home"]);
  assert.equal(stageDP24DeskRegistrationActive, true);
  assert.equal(stageDP24DeskRegistrationX402Support, false);
  assert.deepEqual([...stageDP24DeskRegistrationSupportedTrust], ["reputation"]);
  assert.equal(
    stageDP24DeskRegistrationAgentEvidenceRef,
    "agent:fixture:stage-d-p24:trading-desk-registration-evidence",
  );
  assert.equal(
    stageDP24DeskRegistrationSourceRef,
    "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json",
  );
  assert.ok(stageDP24DeskRegistrationSourceRef.includes("73229a7"));
  assert.match(stageDP24DeskRegistrationDigestHex, /^[0-9a-f]{64}$/);
  assert.equal(
    stageDP24DeskRegistrationDigestHex,
    "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
  );
  assert.equal(greenArm.assessment.registrationDigestClaimedHex, stageDP24DeskRegistrationDigestHex);

  // The green onchain slot is honestly all-null under the not-observed
  // status — the desk's no-invention doctrine carried as data.
  const greenSlot = greenArm.registrationEvidenceRecord.onchainEvidenceSlot;
  assert.equal(greenSlot.status, POND_STAGE_DP24_ONCHAIN_EVIDENCE_SLOT_STATUSES[0]);
  assert.equal(greenSlot.status, "not_observed_no_registration_coordinate_is_invented");
  for (const slotKey of ["chainIdObserved", "registryAddress", "agentIdObserved", "ownerObserved"]) {
    assert.equal(greenSlot[slotKey], null, `onchain slot ${slotKey} must stay null`);
  }
  // The observedBy pin: the receiver observed by its own local inspection.
  assert.equal(greenArm.registrationEvidenceRecord.evidenceProvenance.observedBy,
    stageDP24DeskRegistrationObservedBy);

  // The D-P0 inventory union stays intact: the first 19 keys are exactly the
  // imported D-P0 presence and liveness forbidden keys, then the lane's four.
  const baseKeys = [
    ...POND_STAGE_D_P0_FORBIDDEN_PRESENCE_RECORD_KEYS,
    ...POND_STAGE_D_P0_FORBIDDEN_LIVE_CONNECTION_KEYS,
  ];
  assert.ok(baseKeys.length >= 19);
  const laneKeys = [...POND_STAGE_DP24_FORBIDDEN_AGENT_IDENTITY_EVIDENCE_KEYS];
  assert.deepEqual(laneKeys.slice(0, baseKeys.length), baseKeys);
  assert.deepEqual(laneKeys.slice(baseKeys.length), [
    "admissionRecord",
    "channelBindingRecord",
    "agentCardOffer",
    "registrationWrite",
  ]);

  // The record key set is exactly the interface's 23 keys.
  const greenRecordKeys = [...Object.keys(greenArm.registrationEvidenceRecord)].sort();
  const pinnedKeys = [...POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_RECORD_KEYS].sort();
  assert.deepEqual(greenRecordKeys, pinnedKeys);

  // The template opens exactly the toadgang-fillable slots.
  assert.equal(pondStageDP24AgentRegistrationEvidenceTemplate.registrationName, "");
  assert.equal(pondStageDP24AgentRegistrationEvidenceTemplate.agentEvidenceRef, "");
  assert.equal(pondStageDP24AgentRegistrationEvidenceTemplate.registrationServiceCount, 0);
  assert.deepEqual(pondStageDP24AgentRegistrationEvidenceTemplate.onchainEvidenceSlot, {
    status: "not_observed_no_registration_coordinate_is_invented",
    chainIdObserved: null,
    registryAddress: null,
    agentIdObserved: null,
    ownerObserved: null,
  });
}

// ---------------------------------------------------------------------------
// Block 3 — recompute-agreement negatives: refused arms at their dedicated
// causes, echoes carried, never normalized into green.
// ---------------------------------------------------------------------------
{
  const nonObject = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "registration-record-non-object");
  const missingKey = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "registration-record-missing-key");
  const extraKey = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "registration-record-extra-forbidden-key");
  const deepPlanted = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "registration-record-deep-planted-forbidden-key");
  const tampered = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "tampered-digest");
  const wrongBasis = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "wrong-digest-basis");
  const onchainClaimed = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "onchain-slot-claimed");
  const claimedBasis = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "claimed-observed-basis-refused");
  const garbage = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "garbage-input");

  for (const [label, arm] of [
    ["non-object", nonObject],
    ["missing-key", missingKey],
    ["extra-forbidden-key", extraKey],
    ["deep-planted", deepPlanted],
    ["garbage-input", garbage],
  ]) {
    assert.equal(arm.assessment.reason, "agent_registration_evidence_record_invalid", label);
    assert.equal(arm.assessment.agentRegistrationEvidenceVersion, "invalid", label);
    assert.equal(arm.assessment.satisfiedChecks.length, 0, label);
    assert.equal(arm.assessment.unsatisfiedChecks.length, 7, label);
  }
  // Only the never-shaped arms carry a null basis; the structurally-typed
  // refusals still echo the basis the presenter supplied.
  assert.equal(nonObject.assessment.evidenceBasis, null);
  assert.equal(garbage.assessment.evidenceBasis, null);
  assert.equal(missingKey.assessment.evidenceBasis,
    "receiver_presented_registration_evidence_from_a_supplied_registration_document");

  // The tampered digest: the receiver's recompute stays honest, the claim
  // disagrees, and the digest fields carry the disagreement.
  assert.equal(tampered.assessment.reason, "registration_digest_agreement_not_proven");
  assert.equal(tampered.assessment.presentationDigestRecomputeAgrees, false);
  assert.equal(tampered.assessment.registrationDigestClaimedHex,
    "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb8f");
  assert.equal(tampered.assessment.evidenceFreshnessDiagnosis.state, "fresh");
  assert.deepEqual(tampered.assessment.satisfiedChecks, [
    "agent_registration_evidence_record_well_formed",
    "registration_digest_basis_declared_file_bytes",
    "onchain_evidence_slot_honestly_not_observed",
    "agent_registration_evidence_refusal_postures_complete",
    "agent_registration_evidence_fresh_by_provenance_observation_time",
    "registration_evidence_consumed_by_nothing_and_authority_none",
  ]);
  assert.deepEqual(tampered.assessment.unsatisfiedChecks, [
    "presentation_digest_sha256_recomputed_and_agrees",
  ]);

  // The wrong basis: same rung, the basis check refused this time.
  assert.equal(wrongBasis.assessment.reason, "registration_digest_agreement_not_proven");
  assert.equal(wrongBasis.assessment.presentationDigestRecomputeAgrees, true);
  assert.deepEqual(wrongBasis.assessment.unsatisfiedChecks, [
    "registration_digest_basis_declared_file_bytes",
  ]);

  // The onchain claim: its dedicated cause, with the claimed status echoed
  // verbatim — never normalized into green.
  assert.equal(onchainClaimed.assessment.reason, "onchain_coordinate_claimed_without_onchain_evidence");
  assert.equal(
    onchainClaimed.assessment.onchainEvidenceSlotStatus,
    "claimed_observed_by_the_presenting_party",
  );
  const claimedRecord = onchainClaimed.registrationEvidenceRecord;
  assert.equal(claimedRecord.onchainEvidenceSlot.agentIdObserved, "1");
  assert.deepEqual(onchainClaimed.assessment.unsatisfiedChecks, [
    "onchain_evidence_slot_honestly_not_observed",
  ]);

  // The claimed-observed basis: the refusable basis literal is carried as
  // data and refused — the receiver never adopts a claimed observation.
  assert.equal(claimedBasis.assessment.reason, "receiver_registration_evidence_proof_incomplete");
  assert.equal(claimedBasis.assessment.evidenceBasis, "claimed_observed_registration_not_supplied");
  assert.deepEqual(claimedBasis.assessment.unsatisfiedChecks, [
    "registration_evidence_consumed_by_nothing_and_authority_none",
  ]);
}

// ---------------------------------------------------------------------------
// Block 4 — lifecycle: staleness and future diagnosis; re-presentation
// stability; inventory widen probes.
// ---------------------------------------------------------------------------
{
  // Stale: the age exceeds the declared maximum inclusive boundary.
  assert.equal(staleArm.assessment.evidenceFreshnessDiagnosis.state, "stale");
  assert.equal(staleArm.assessment.evidenceFreshnessDiagnosis.reason, "declared_maximum_age_expired");
  assert.equal(staleArm.assessment.evidenceFreshnessDiagnosis.observationAgeMs, 71000);
  assert.equal(staleArm.assessment.reason, "agent_registration_evidence_not_fresh");
  assert.equal(staleArm.assessment.satisfiedChecks.length, 6);
  assert.deepEqual(staleArm.assessment.unsatisfiedChecks, [
    "agent_registration_evidence_fresh_by_provenance_observation_time",
  ]);

  // Future: unknown, honest.
  assert.equal(futureArm.assessment.evidenceFreshnessDiagnosis.state, "unknown");
  assert.equal(futureArm.assessment.evidenceFreshnessDiagnosis.reason, "observation_time_in_future");
  assert.equal(futureArm.assessment.evidenceFreshnessDiagnosis.observationAgeMs, null);
  assert.equal(futureArm.assessment.reason, "agent_registration_evidence_not_fresh");

  // Re-presentation with a NEW observation instant: a fresh re-presented
  // record stays green, and the matrix inventory stays count-stable.
  const reObservedRecord = deepClone(deepClone(greenArm.registrationEvidenceRecord));
  assert.equal(reObservedRecord.contractVersion, POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION);
  const rePresented = assessPondAgentRegistrationEvidence({
    registrationEvidenceRecord: {
      ...reObservedRecord,
      evidenceProvenance: {
        registrationSourceRef: reObservedRecord.evidenceProvenance.registrationSourceRef,
        observedAtEpochMs: stageDP24DeskRegistrationObservedAtEpochMs + 1000,
        observedBy: reObservedRecord.evidenceProvenance.observedBy,
      },
    },
    receiverRecomputedDigestHex: stageDP24DeskRegistrationDigestHex,
    receiverEvaluatedAtEpochMs: stageDP24ReceiverEvaluatedAtEpochMs + 1000,
    receiverMaximumAgeMs: stageDP24ReceiverMaximumAgeMs,
  });
  assert.equal(rePresented.agentRegistrationEvidenceState,
    "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel");
  assert.equal(rePresented.evidenceFreshnessDiagnosis.observationAgeMs, 1000);
  assert.equal(
    stageDP24AgentRegistrationEvidenceMatrix.length,
    13,
    "the matrix stays count-stable across re-presentation",
  );

  // The freshness helper is a diagnosis, never an admission: the inclusive
  // boundary is fresh at exactly the maximum age.
  const boundaryRecord = deepCopyGreenWithObservedAt(stageDP24DeskRegistrationObservedAtEpochMs);
  const boundaryFresh = assessPondAgentRegistrationEvidence({
    registrationEvidenceRecord: boundaryRecord,
    receiverRecomputedDigestHex: stageDP24DeskRegistrationDigestHex,
    receiverEvaluatedAtEpochMs: stageDP24DeskRegistrationObservedAtEpochMs + stageDP24ReceiverMaximumAgeMs,
    receiverMaximumAgeMs: stageDP24ReceiverMaximumAgeMs,
  });
  assert.equal(boundaryFresh.agentRegistrationEvidenceState,
    "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel");
  assert.equal(boundaryFresh.evidenceFreshnessDiagnosis.observationAgeMs, stageDP24ReceiverMaximumAgeMs);
}

function deepCopyGreenWithObservedAt(observedAt) {
  const green = byLabel(stageDP24AgentRegistrationEvidenceMatrix, "desk-registration-presented-green");
  const record = deepClone(green.registrationEvidenceRecord);
  return {
    ...record,
    evidenceProvenance: {
      ...record.evidenceProvenance,
      observedAtEpochMs: observedAt,
    },
  };
}

// ---------------------------------------------------------------------------
// Block 5 — fail-closed: garbage never throws, ceilings hold, version
// invalid, all checks unsatisfied.
// ---------------------------------------------------------------------------
{
  const garbageInputs = [
    null,
    undefined,
    0,
    "string",
    [],
    {},
    { registrationEvidenceRecord: {} },
    { nope: 1 },
    {
      registrationEvidenceRecord: null,
      receiverRecomputedDigestHex: null,
      receiverEvaluatedAtEpochMs: null,
      receiverMaximumAgeMs: null,
    },
    {
      registrationEvidenceRecord: "not-a-record",
      receiverRecomputedDigestHex: "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83",
      receiverEvaluatedAtEpochMs: 1800000071000,
      receiverMaximumAgeMs: 60000,
    },
  ];
  for (const garbageInput of garbageInputs) {
    const refused = assessPondAgentRegistrationEvidence(garbageInput);
    assert.equal(refused.reason, "agent_registration_evidence_record_invalid");
    assert.equal(refused.agentRegistrationEvidenceState, "agent_registration_evidence_not_presentation_ready");
    assert.equal(refused.agentRegistrationEvidenceVersion, "invalid");
    assert.equal(refused.satisfiedChecks.length, 0);
    assert.equal(refused.unsatisfiedChecks.length, 7);
    assertAllCeilingsHold(refused);
  }

  // Wrong-shape records: every structural hole refuses at rung one, never
  // throws, and never partially presents.
  const wrongShapes = [
    () => ({ ...deepClone(greenArm.registrationEvidenceRecord), contractVersion: "pond-agent-registration-evidence-d-p23" }),
    () => ({ ...deepClone(greenArm.registrationEvidenceRecord), kind: "unknown-kind" }),
    () => {
      const record = deepClone(greenArm.registrationEvidenceRecord);
      record.evidenceProvenance = {
        registrationSourceRef: "x",
        observedAtEpochMs: "1800000070000",
        observedBy: "receiver",
      };
      return record;
    },
    () => {
      const record = deepClone(greenArm.registrationEvidenceRecord);
      record.registrationServiceCount = 3;
      return record;
    },
    () => {
      const record = deepClone(greenArm.registrationEvidenceRecord);
      record.registrationDigest = {
        claimedDigestHex: ["0", "x"].join("") + "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65e",
        digestBasis: "sha256_registration_file_bytes_v1",
      };
      return record;
    },
    () => {
      const record = deepClone(greenArm.registrationEvidenceRecord);
      record.onchainEvidenceSlot = {
        status: "not_observed_no_registration_coordinate_is_invented",
        chainIdObserved: "1",
        registryAddress: null,
        agentIdObserved: null,
        ownerObserved: null,
      };
      return record;
    },
    () => {
      const record = deepClone(greenArm.registrationEvidenceRecord);
      record.evidencePosture = "admission_established";
      return record;
    },
    () => {
      const record = deepClone(greenArm.registrationEvidenceRecord);
      record.registrationEvidenceConsumedThisCut = true;
      return record;
    },
    () => {
      const record = deepClone(greenArm.registrationEvidenceRecord);
      record.authority = "some";
      return record;
    },
  ];
  for (const buildWrongShape of wrongShapes) {
    const refused = assessPondAgentRegistrationEvidence({
      registrationEvidenceRecord: buildWrongShape(),
      receiverRecomputedDigestHex: stageDP24DeskRegistrationDigestHex,
      receiverEvaluatedAtEpochMs: stageDP24ReceiverEvaluatedAtEpochMs,
      receiverMaximumAgeMs: stageDP24ReceiverMaximumAgeMs,
    });
    assert.equal(refused.agentRegistrationEvidenceState, "agent_registration_evidence_not_presentation_ready");
    assert.equal(refused.registrationEvidenceConsumedThisCut, false);
    assertAllCeilingsHold(refused);
    assert.ok(refused.unsatisfiedChecks.length >= 1);
  }
}

// ---------------------------------------------------------------------------
// Block 6 — hygiene.
// ---------------------------------------------------------------------------
{
  const contractPaths = [
    "src/contracts/pond-agent-registration-evidence.ts",
    "src/agents/pond-stage-d-agent-registry-record.ts",
  ];
  const fixturePath = "src/fixtures/stage-d-p24-agent-identity-evidence.ts";
  const texts = await Promise.all([...contractPaths, fixturePath].map(readModule));

  // (a) DOM-shaped and network-shaped needles stay out of the cut's
  // contract, fixture, and record-module files — presenting happens in the
  // ui layer only, and fixture values are never endpoints.
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
  const networkNeedles = ["wss://", "https://", "http://", "eth_node", "json_rpc", "0x"];
  [...contractPaths, fixturePath].forEach((path, index) => {
    for (const needle of domNeedles) {
      assert.ok(!texts[index].includes(needle), `${path} carries the DOM needle ${needle}`);
    }
    for (const needle of networkNeedles) {
      assert.ok(!texts[index].includes(needle), `${path} carries the network constant ${needle}`);
    }
  });

  // (b) the fixture is value-import-free (type-only imports only).
  const fixtureText = texts[2];
  for (const line of fixtureText.split("\n")) {
    if (line.startsWith("import")) {
      assert.ok(
        line.startsWith("import type {"),
        `the fixture carries a non-type import: ${line.trim()}`,
      );
    }
  }

  // (c) the banned frozen-name walk over the contract and the record
  // module: quoted-index reads and import lines are the tie/leg plumbing
  // (the established exemption) and are stripped before matching. The
  // lane re-runs no other lane's machinery — no other stage's frozen
  // vocabulary may appear.
  const nameNeedles = [
    "POND_STAGE_DP11",
    "POND_STAGE_DP12",
    "POND_STAGE_DP13",
    "POND_STAGE_DP14",
    "POND_STAGE_DP15",
    "POND_STAGE_DP20",
    "POND_STAGE_DP21",
    "POND_STAGE_DP22",
    "POND_STAGE_DP23",
    "pond-knowledge-forge",
    "pond-declared-mode-routing",
    "liveSessionReadGateState",
    "counterpartJoinState",
    "onchainVerificationState",
    "privateReadsActivated",
    "principalIdIssued",
    "all_activation_checks_satisfied",
  ];
  const stripQuotedIndexReads = (text) =>
    text.replace(/[[\s]*["'][A-Za-z_$][\w$]*["']\s*\]/g, "[]");
  const stripImports = (text) =>
    text.split("\n").filter((line) => !line.startsWith("import")).join("\n");
  for (const path of contractPaths) {
    const normalized = stripImports(stripQuotedIndexReads(await readModule(path)));
    for (const needle of nameNeedles) {
      assert.ok(!normalized.includes(needle), `${path} carries frozen name ${needle}`);
    }
  }

  // (d) the inventory union stays intact: the D-P24 contract imports both
  // D-P0 frozen arrays by value via the .ts specifier, widens once.
  const contractText = texts[0];
  assert.ok(
    contractText.includes('from "./pond-agent-presence-projection.ts"') &&
      contractText.includes("POND_STAGE_D_P0_FORBIDDEN_PRESENCE_RECORD_KEYS") &&
      contractText.includes("POND_STAGE_D_P0_FORBIDDEN_LIVE_CONNECTION_KEYS"),
    "the composed inventory must import the frozen D-P0 bases",
  );
  for (const key of [
    "admissionRecord",
    "channelBindingRecord",
    "agentCardOffer",
    "registrationWrite",
  ]) {
    assert.ok(contractText.includes(`"${key}"`), `forbidden key ${key} missing from the inventory`);
  }

  // (e) the env-needle family stays out of every file of this cut: no
  // secret-bearing ceremony exists, so even the shared live-session env
  // prefix never appears (the ban matches the shared prefix, never the
  // full env name).
  const envNeedle = ["TOADAID", "_LIVE_", ""].join("");
  const counterpartSecretNeedle = ["pond", "-stage-d-p8", "-fixture", "-secret", "-counterpart"].join("");
  const fixtureSecretNeedle = ["-fixture", "-secret"].join("");
  for (const path of [
    ...contractPaths,
    fixturePath,
    "ui/pond-agent-registry.js",
    "ui/generated/pond-stage-d-agent-registry.js",
    "ui/pond-desktop.html",
    "ui/pond-desktop.css",
    "scripts/render-stage-d-agent-registry.mjs",
    "scripts/pond-agent-registry-live-check.mjs",
    "docs/stage-d-p24-pond-agent-registry-evidence.md",
    "package.json",
    ".github/workflows/ci.yml",
  ]) {
    const fileText = await readModule(path);
    assert.ok(!fileText.includes(envNeedle), `${path} carries a live-session env-prefixed name`);
    assert.ok(!fileText.includes(counterpartSecretNeedle), `${path} carries the counterpart fixture secret literal`);
    assert.ok(!fileText.includes(fixtureSecretNeedle), `${path} carries the fixture-secret substring`);
  }

  // (f) the hand-written ui module walk: fresh naming (no identity-lane
  // machinery vocabulary and no foreign stage marker as a substring), no
  // src import, no frozen contract filename, no transport/store needle,
  // import through the committed generated artifact, and the self-mount.
  const moduleText = await readModule("ui/pond-agent-registry.js");
  const dP11Needle = ["d", "-p", "11"].join("");
  const observationNeedle = ["pond-erc8004-identity-", "observation"].join("");
  const verificationNeedle = ["pond-erc8004-identity-", "verification"].join("");
  assert.ok(!moduleText.includes(dP11Needle), "the ui module carries the foreign stage marker");
  assert.ok(!moduleText.includes(observationNeedle), "the ui module carries identity-lane machinery vocabulary");
  assert.ok(!moduleText.includes(verificationNeedle), "the ui module carries identity-lane machinery vocabulary");
  assert.ok(
    !moduleText.includes('from "../src/'),
    "the module must never import src contracts directly",
  );
  for (const frozenName of [
    "pond-agent-presence-projection",
    "pond-knowledge-forge",
    "pond-declared-mode-routing",
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
    /from "\.\/generated\/pond-stage-d-agent-registry\.js"/,
    "the module imports through the committed generated artifact",
  );
  assert.match(
    moduleText,
    /if \(typeof document !== "undefined"\) \{\s*renderPondAgentRegistry\(document\);\s*\}/,
    "the module self-mounts like its sibling lane modules",
  );

  // (g) the package and CI wiring assert step by step.
  const packageJson = JSON.parse(await readModule("package.json"));
  assert.equal(
    packageJson.scripts["test:stage-d-p24"],
    "node scripts/pond-agent-registry-evidence-selftest.mjs",
  );
  assert.equal(
    packageJson.scripts["stage-d:render-agent-registry"],
    "node scripts/render-stage-d-agent-registry.mjs",
  );
  const ci = await readModule(".github/workflows/ci.yml");
  assert.equal(
    ci.split("Verify Stage D-P24 pond agent registry evidence").length - 1,
    2,
    "the CI verify step appears exactly once in each job",
  );
  assert.ok(ci.includes("npm run test:stage-d-p24"));

  // (h) the provenance ties: the stamp names the presented record, carries
  // the lane's inputs (NEITHER any foreign lane's contract nor any other
  // lane's fixture beyond the declared D-P0 base), and stays deterministic
  // (no timestamp).
  const provenance = JSON.parse(
    await readModule("ui/generated/pond-stage-d-agent-registry-provenance.json"),
  );
  assert.equal(provenance.record, "src/agents/pond-stage-d-agent-registry-record.ts");
  assert.deepEqual(provenance.inputs, [
    "src/fixtures/stage-d-p24-agent-identity-evidence.ts",
    "src/contracts/pond-agent-registration-evidence.ts",
    "src/fixtures/stage-d-p0-agent-presence.ts",
  ]);
  assert.deepEqual(provenance.renderedStages, ["D-P0", "D-P24"]);
  assert.equal(provenance.authority, "none");
  assert.equal(provenance.mutationPosture, "none_read_only");
  assert.equal(provenance.runtimeActivationPosture, "not_included");
  assert.equal("timestamp" in provenance, false);
  assert.equal(provenance.contractVersions.includes("pond-agent-registration-evidence-d-p24"), true);
  for (const foreignContract of [
    "pond-agent-presence-observation-intake",
    "pond-agent-presence-channel-establishment",
    "pond-agent-presence-live-observation-admission",
    "pond-agent-presence-source-binding",
    "pond-agent-presence-observation",
  ]) {
    assert.ok(
      !provenance.contractVersions.some((version) => version.includes(foreignContract)),
      `the bundle renders foreign contract machinery: ${foreignContract}`,
    );
  }
}

// ---------------------------------------------------------------------------
// Block 7 — uiWiring: generated-vs-src agreement, fail-closed render
// drives, the empty-stub drive, and shell integration with neighbor
// isolation.
// ---------------------------------------------------------------------------
{
  // (a) generated-vs-src agreement: the committed bundle's presented record
  // deep-equals a recomputation from the source fixture constants and the
  // real assessor (the record module is bundled, not importable under node).
  const sourceGreenAssessment = greenArm.assessment;
  const recomputedRegistryRecord = {
    contractVersion: POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION,
    kind: "pond-agent-registry-evidence-presentation",
    agentEvidenceRef: stageDP24DeskRegistrationAgentEvidenceRef,
    registrationName: stageDP24DeskRegistrationName,
    registrationTypeKind: stageDP24DeskRegistrationTypeKind,
    registrationServiceCount: stageDP24DeskRegistrationServiceCount,
    registrationServiceNames: [...stageDP24DeskRegistrationServiceNames],
    registrationActive: stageDP24DeskRegistrationActive,
    x402Support: stageDP24DeskRegistrationX402Support,
    supportedTrust: [...stageDP24DeskRegistrationSupportedTrust],
    registrationDigestHex: stageDP24DeskRegistrationDigestHex,
    registrationDigestBasis: "sha256_registration_file_bytes_v1",
    canonicalTranscriptionDigestHex: stageDP24CanonicalTranscriptionDigestHex,
    registrationSourceRef: stageDP24DeskRegistrationSourceRef,
    observedAtEpochMs: stageDP24DeskRegistrationObservedAtEpochMs,
    observedBy: stageDP24DeskRegistrationObservedBy,
    presentationState: sourceGreenAssessment.agentRegistrationEvidenceState,
    presentationReason: sourceGreenAssessment.reason,
    satisfiedChecks: [...sourceGreenAssessment.satisfiedChecks],
    unsatisfiedChecks: [...sourceGreenAssessment.unsatisfiedChecks],
    freshnessState: sourceGreenAssessment.evidenceFreshnessDiagnosis.state,
    onchainEvidenceSlotStatus: "not_observed_no_registration_coordinate_is_invented",
    evidencePostures: { ...POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_POSTURES },
    registryEvidenceStandingLine:
      "community agents' registrations present here as evidence only — presentation is not admission, opens no channel, grants no authority",
    authority: "none",
    runtimeActivationPosture: "not_included",
  };
  assert.deepEqual(deepClone(generatedRegistryRecord), deepClone(recomputedRegistryRecord));

  // (b) fail-closed render on missing document and missing panel.
  assert.equal(renderPondAgentRegistry(undefined), false);
  const emptyDoc = { querySelector: () => null };
  assert.equal(renderPondAgentRegistry(emptyDoc), false);

  const buildPanelStub = () => {
    const listStub = () => {
      const list = { textContent: "", children: [] };
      list.append = (...nodes) => list.children.push(...nodes);
      return list;
    };
    const itemStub = () => ({
      textContent: "",
      classList: { add() {} },
    });
    const valuePaths = [
      "agentEvidenceRef",
      "registrationName",
      "registrationTypeKind",
      "registrationActive",
      "x402Support",
      "registrationSourceRef",
      "observedBy",
      "registrationDigestHex",
      "registrationDigestBasis",
      "registrationServiceCount",
      "presentationState",
      "presentationReason",
      "freshnessState",
      "authority",
      "registryEvidenceStandingLine",
    ];
    const valueNodes = valuePaths.map((path) => {
      const node = { textContent: "", dataset: { agentRegistryValue: path } };
      return node;
    });
    const lists = {
      services: listStub(),
      trust: listStub(),
      postures: listStub(),
      checks: listStub(),
    };
    const onchainNode = { textContent: "" };
    const collectText = (node) =>
      [node.textContent, ...node.children.map((child) => child.textContent)].join("\n");
    const createdTags = [];
    const panel = {
      dataset: { agentRegistryRecordVersion: POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION },
      querySelectorAll(selector) {
        if (selector === "[data-agent-registry-value]") return valueNodes;
        return [];
      },
      querySelector(selector) {
        if (selector === "[data-agent-registry-list='services']") return lists.services;
        if (selector === "[data-agent-registry-list='trust']") return lists.trust;
        if (selector === "[data-agent-registry-list='postures']") return lists.postures;
        if (selector === "[data-agent-registry-list='checks']") return lists.checks;
        if (selector === "[data-agent-registry-onchain]") return onchainNode;
        return null;
      },
      createElement(tag) {
        createdTags.push(tag);
        return itemStub();
      },
      __createdTags: createdTags,
      __valueNodes: valueNodes,
      __lists: lists,
      __onchainNode: onchainNode,
      __collectText: collectText,
      __itemStub: itemStub,
    };
    return panel;
  };

  // A record-version mismatch fails closed.
  const wrongVersionPanel = buildPanelStub();
  wrongVersionPanel.dataset.agentRegistryRecordVersion = "some-other-version";
  assert.equal(
    renderPondAgentRegistry({
      querySelector: () => wrongVersionPanel,
      createElement: (tag) => wrongVersionPanel.createElement(tag),
    }),
    false,
  );
  assert.equal(wrongVersionPanel.dataset.agentRegistryRenderPosture, "fail_closed");
  for (const node of wrongVersionPanel.__valueNodes) {
    assert.equal(node.textContent, "unavailable");
  }
  // Even the fail-closed lists are rendered, each carrying one withheld
  // row — no empty, half-drawn panel.
  for (const list of Object.values(wrongVersionPanel.__lists)) {
    assert.equal(list.children.length, 1);
    assert.equal(list.children[0].textContent, "unavailable");
  }

  // A missing value path fails closed.
  const missingPathPanel = buildPanelStub();
  missingPathPanel.querySelectorAll("[data-agent-registry-value]")[0].dataset.agentRegistryValue =
    "no.such.path";
  assert.equal(
    renderPondAgentRegistry({
      querySelector: () => missingPathPanel,
      createElement: (tag) => missingPathPanel.createElement(tag),
    }),
    false,
  );
  assert.equal(missingPathPanel.dataset.agentRegistryRenderPosture, "fail_closed");

  // (c) the render drive on the empty shell state — the panel renders the
  // desk evidence row verbatim over the generated record, with no
  // affordances of any kind.
  const registryDocument = (() => {
    const panel = buildPanelStub();
    return {
      __panel: panel,
      querySelector: (selector) => (selector === ".agent-registry-panel" ? panel : null),
    };
  })();
  const docStub = {
    querySelector: registryDocument.querySelector,
    createElement: (tag) => registryDocument.__panel.createElement(tag),
  };
  assert.equal(renderPondAgentRegistry(docStub), true);
  const active = registryDocument.__panel;
  assert.equal(active.dataset.agentRegistryRenderPosture, "rendered");
  assert.equal(active.dataset.agentRegistryAuthority, "none");
  const valueByPath = (path) =>
    active.__valueNodes.find((node) => node.dataset.agentRegistryValue === path).textContent;
  assert.equal(valueByPath("registrationName"), "ToadAid Trading Desk");
  assert.equal(valueByPath("registrationTypeKind"), "eip_8004_registration_v1_style_self_describing_document");
  assert.equal(valueByPath("x402Support"), "false");
  assert.equal(valueByPath("registrationDigestHex"), stageDP24DeskRegistrationDigestHex);
  assert.equal(valueByPath("registrationSourceRef"), "fixture:trading-desk-main-73229a7:erc8004/desk-registration.json");
  assert.equal(valueByPath("agentEvidenceRef"), "agent:fixture:stage-d-p24:trading-desk-registration-evidence");
  assert.equal(valueByPath("authority"), "none");
  assert.match(valueByPath("registryEvidenceStandingLine"), /presentation is not admission/);
  assert.match(
    active.__onchainNode.textContent,
    /none observed — registration_metadata_is_not_runtime_identity/,
  );
  assert.equal(active.__lists.services.children.length, 2);
  assert.equal(active.__lists.trust.children.length, 1);
  assert.equal(active.__lists.postures.children.length, 7);
  assert.equal(active.__lists.checks.children.length, 7);
  assert.match(active.__collectText(active.__lists.checks), /registration_evidence_consumed_by_nothing_and_authority_none/);
  // No affordances: the render only creates list rows, never buttons or
  // form controls, and never wires listeners.
  assert.ok(active.__createdTags.every((tag) => tag === "li"));

  // (d) shell integration — the real markup carries the additive region,
  // the mic stays dead (the B2 invariant) byte-identical, and the Agents
  // view panel is untouched (neighbor isolation in markup).
  const html = await readModule("ui/pond-desktop.html");
  assert.match(html, /class="agent-registry-panel"/);
  assert.match(html, /data-agent-registry-record-version="pond-agent-registration-evidence-d-p24"/);
  assert.match(html, /data-agent-registry-onchain/);
  assert.match(html, /data-agent-registry-list="services"/);
  assert.match(html, /data-agent-registry-list="trust"/);
  assert.match(html, /data-agent-registry-list="postures"/);
  assert.match(html, /data-agent-registry-list="checks"/);
  assert.match(html, /mic-button" type="button" disabled/);
  const agentsTag = html.indexOf('src="pond-agents-view.js"');
  const registryTag = html.indexOf('src="pond-agent-registry.js"');
  const shellTag = html.indexOf('src="pond-shell.js"');
  assert.ok(registryTag !== -1, "the registry module script tag is present");
  assert.ok(agentsTag === -1 || agentsTag < shellTag, "the agents module loads before the shell module");
  assert.ok(registryTag < shellTag, "the registry module loads before the shell module");
  assert.match(html, /data-agents-record-version="pond-stage-d-agents-record-d-p1"/);
  assert.match(html, /class="agents-view-panel"/);

  // (e) neighbor isolation in stores: the render drive created no records
  // anywhere — every neighbor lane's held store stays empty.
  assert.equal(heldDeliveryDecisions().decisions.length, 0);
  assert.equal(heldDispatchDecisions().decisions.length, 0);
  assert.equal(heldReplyRequestEntries().entries.length, 0);
  assert.equal(heldConversationRecordEntries().entries.length, 0);
  assert.equal(heldVoiceRequestEntries().entries.length, 0);
  assert.equal(
    heldLiveSessionRecords({ evaluatedAtEpochMs: stageDP24ReceiverEvaluatedAtEpochMs }).held,
    false,
    "no live-session record is established by this lane",
  );
}

const blocks = 7;
console.log(
  `POND_STAGE_DP24_POND_AGENT_REGISTRY_EVIDENCE_SELFTEST_PASS · ${blocks} blocks`,
);