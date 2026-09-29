// Stage D-P13 selftest: the declared-mode advisory routing posture. Offline
// structural throughout — this cut performs no network read, so there is
// no env-gated live block (recorded in the stage doc). The matrix
// recomputation proves the eight fixture arms and the routing classifier
// agree; the identity ties prove the routing table's surface ids, the agent
// refs, the evaluation pair, the desk-side structural copies, and the
// forge re-inline cannot drift from the frozen D-P0/D-P12 exports; the
// routing fail-closed block proves every broken leg refuses with an honest
// mapped sub-state — including the join leg, this cut's own contribution,
// alone guarding the D-P0 presence-status vocabulary; the mode-folding
// block proves the three D-P12 refinement literals travel verbatim and the
// refinement branch never collapses; the frozen-widening block proves the
// frozen D-P5…D-P12 pins did not move and no D-P13 assessment carries a
// frozen tuple name; the routing-table tie proves the receiver-recorded
// table cannot drift; the freshness tie proves the inclusive D-P2
// boundary; the hygiene block proves type-only fixture imports and that
// the ui stays untouched by this cut's vocabulary.

import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  stageDP13RoutingMatrix,
  stageDP13AgentRef,
  stageDP13NotObservedAgentRef,
  stageDP13EvaluatedAtEpochMs,
  stageDP13MaximumAgeMs,
  stageDP13StaleDeclaredAtEpochMs,
} from "../src/fixtures/stage-d-p13-declared-mode-routing.ts";
import {
  assessPondDeclaredModeRouting,
  POND_STAGE_DP13_DECLARED_MODE_ROUTING_TABLE,
  POND_STAGE_DP13_ADVISORY_POSTURE_VOCABULARY,
  POND_STAGE_DP13_ROUTED_PROFILES,
  POND_STAGE_DP13_PRESENCE_ESTABLISHING_STATUSES,
  POND_STAGE_DP13_PRESENCE_REFUSED_STATUSES,
} from "../src/contracts/pond-declared-mode-routing.ts";
import {
  stageDP12ForgeBindingMatrix,
  stageDP12ModeMatrix,
  stageDP12CompositionMatrix,
  stageDP12EvaluatedAtEpochMs,
  stageDP12MaximumAgeMs,
  stageDP12StaleDeclaredAtEpochMs,
} from "../src/fixtures/stage-d-p12-knowledge-forge-binding-and-declared-mode.ts";
import {
  assessPondKnowledgeForgeSurfaceBinding,
  POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS,
  POND_STAGE_DP12_KNOWLEDGE_FORGE_SURFACE_IDS,
  POND_STAGE_DP12_FORBIDDEN_FORGE_BINDING_KEYS,
} from "../src/contracts/pond-knowledge-forge-surface-binding.ts";
import {
  assessPondAgentDeclaredOperationalMode,
  diagnoseDeclarationFreshness,
} from "../src/contracts/pond-agent-declared-operational-mode.ts";
import { assessPondKnowledgeForgeBoundDeclaredModeComposition } from "../src/contracts/pond-knowledge-forge-bound-declared-mode-composition.ts";
import {
  stageDP0Agent0Ref,
  stageDP0CommunityAgentSlotRef,
  stageDP0LocalPrincipalRef,
  stageDP0TradingDeskSourceContract,
  stageDP0AgentPresenceProjection,
} from "../src/fixtures/stage-d-p0-agent-presence.ts";
import { stageDP5LocalPrincipalBindingComplete } from "../src/fixtures/stage-d-p5-local-principal-binding.ts";
import { stageDP6AuthenticationObservationComplete } from "../src/fixtures/stage-d-p6-local-principal-authentication-observation.ts";
import { stageDP8MechanicComplete } from "../src/fixtures/stage-d-p8-local-authentication-mechanic.ts";
import {
  stageDP9CompositionComplete,
  stageDP9MappingEstablished,
} from "../src/fixtures/stage-d-p9-principal-identity.ts";
import { stageDP11VerificationComplete } from "../src/fixtures/stage-d-p11-erc8004-identity-verification.ts";
import { assessPondLocalPrincipalBindingEstablishment } from "../src/contracts/pond-local-principal-binding-establishment.ts";
import { assessPondLocalPrincipalAuthenticationObservation } from "../src/contracts/pond-local-principal-authentication-observation.ts";
import { assessPondLocalAuthenticationChallengeProof } from "../src/contracts/pond-local-authentication-mechanic.ts";
import { assessPondErc8004IdentityMapping } from "../src/contracts/pond-erc8004-identity-mapping.ts";
import { assessPondPrincipalIdentityReadinessComposition } from "../src/contracts/pond-principal-identity-readiness-composition.ts";

const repoRoot = new URL("..", import.meta.url).pathname;

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const assertDeepFrozen = (value, path) => {
  assert.ok(Object.isFrozen(value), `not frozen: ${path}`);
  for (const entry of Object.values(value)) {
    if (entry !== null && typeof entry === "object") {
      assertDeepFrozen(entry, `${path}.*`);
    }
  }
};

const assertLacksKeys = (value, banned, path) => {
  if (value === null || typeof value !== "object") return;
  for (const key of Object.keys(value)) {
    assert.ok(
      !banned.includes(key),
      `assessment carries frozen name ${key} at ${path}`,
    );
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

let blocks = 0;
const block = (label, run) => {
  blocks += 1;
  console.log(`block ${blocks}: ${label}`);
  run();
};

// Fresh D-P13 runs collected across the blocks, reused by the
// frozen-widening block's frozen-name walk and the fail-closed block's
// ceiling walk. Only D-P13 assessments land here — never a frozen family
// assessment.
let dp13FreshRuns = [];
const collectRouting = (input) => {
  const fresh = assessPondDeclaredModeRouting(input);
  dp13FreshRuns.push(fresh);
  return fresh;
};

// Working copies of the complete arm's records for the tamper probes.
const completeArm = stageDP13RoutingMatrix[0];
const cloneCompleteForgeRecord = () =>
  deepClone(completeArm.forgeBindingRecord);
const cloneCompleteDeclaration = () =>
  deepClone(completeArm.modeDeclarationRecord);
const cloneCompleteProjection = () =>
  deepClone(completeArm.deskPresenceProjection);
const completeInput = () => ({
  forgeBindingRecord: cloneCompleteForgeRecord(),
  modeDeclarationRecord: cloneCompleteDeclaration(),
  deskSourceContractFixture: deepClone(completeArm.deskSourceContractFixture),
  deskPresenceProjection: cloneCompleteProjection(),
  receiverHeldAgentRef: completeArm.receiverHeldAgentRef,
  receiverEvaluatedAtEpochMs: stageDP13EvaluatedAtEpochMs,
  receiverMaximumAgeMs: stageDP13MaximumAgeMs,
});

const evaluated = stageDP13EvaluatedAtEpochMs;
const maximumAge = stageDP13MaximumAgeMs;

const CEILING_FIELDS = [
  "routingEstablishesCapability",
  "routingEstablishesGrant",
  "routingEstablishesAdmission",
  "routingEstablishesAuthority",
  "skillContentAdmitted",
  "knowledgeContentLoadedIntoAgentContext",
  "forgeLifecycleMutationAvailable",
  "credentialAdmitted",
  "currentTruthAdmitted",
];
const FROZEN_NAMES = [
  "privateReadsActivated",
  "mappingEstablishmentState",
  "onchainVerificationState",
  "mappingEstablishesGrant",
  "erc8004IdentityAcceptedAsPrincipalId",
  "onchainIdentityAcceptedAsAuthentication",
];
const REFINEMENT_REASONS = [
  "declared_profile_out_of_vocabulary",
  "declaration_basis_inference_refused",
  "declaration_not_fresh_within_declared_maximum_age",
];

// ---------------------------------------------------------------
// Block 1: matrix recompute — every pinned assessment equals a fresh
// run of the routing classifier, and every fresh result is deep
// frozen.
// ---------------------------------------------------------------
block("matrix recompute", () => {
  for (const entry of stageDP13RoutingMatrix) {
    const fresh = collectRouting(entry);
    assert.deepEqual(
      deepClone(fresh),
      deepClone(entry.assessment),
      entry.fixtureLabel,
    );
    assertDeepFrozen(fresh, `routing:${entry.fixtureLabel}`);
  }

  // The three positive arms carry their exact profiles and advisory
  // posture echoes; every refusal keeps routing_not_established.
  for (const entry of stageDP13RoutingMatrix) {
    if (
      entry.assessment.reason === "declared_mode_routing_established"
    ) {
      assert.equal(entry.assessment.routingState, "declared_mode_routing_established");
      assert.deepEqual(
        deepClone(entry.assessment.advisoryPostureBySurfaceId),
        deepClone(
          POND_STAGE_DP13_DECLARED_MODE_ROUTING_TABLE[
            entry.assessment.declaredProfile
          ],
        ),
        `echo row: ${entry.fixtureLabel}`,
      );
    } else {
      assert.equal(
        entry.assessment.routingState,
        "routing_not_established",
        entry.fixtureLabel,
      );
    }
    assert.equal(
      entry.assessment.contractVersion,
      "pond-declared-mode-routing-d-p13",
    );
  }

  // Terminal hygiene: the ceiling family is all-false on every pinned
  // arm too.
  for (const entry of stageDP13RoutingMatrix) {
    for (const field of CEILING_FIELDS) {
      assert.equal(entry.assessment[field], false, `${entry.fixtureLabel}:${field}`);
    }
    assert.equal(entry.assessment.runtimeActivationPosture, "not_included");
    assert.equal(entry.assessment.authority, "none");
  }
});

// ---------------------------------------------------------------
// Block 2: identity ties — the routing table's surface ids, the agent
// refs, the evaluation pair, the forge re-inline, and the desk-side
// structural copies cannot drift from the frozen D-P0/D-P12 exports.
// ---------------------------------------------------------------
block("identity ties", () => {
  assert.equal(stageDP13AgentRef, stageDP0Agent0Ref);
  assert.equal(stageDP13NotObservedAgentRef, stageDP0CommunityAgentSlotRef);
  assert.equal(stageDP13EvaluatedAtEpochMs, stageDP12EvaluatedAtEpochMs);
  assert.equal(stageDP13MaximumAgeMs, stageDP12MaximumAgeMs);
  assert.equal(
    stageDP13StaleDeclaredAtEpochMs,
    stageDP12StaleDeclaredAtEpochMs,
  );

  // The routing table is keyed over the frozen D-P12 surface-id
  // vocabulary — sorted deep-equal, every row.
  const surfaceIds = [...POND_STAGE_DP12_KNOWLEDGE_FORGE_SURFACE_IDS].sort();
  for (const profile of POND_STAGE_DP13_ROUTED_PROFILES) {
    assert.deepEqual(
      Object.keys(POND_STAGE_DP13_DECLARED_MODE_ROUTING_TABLE[profile]).sort(),
      surfaceIds,
      `row keys: ${profile}`,
    );
  }
  // The frozen commitment table stays length 4 with every uppercase
  // authority posture per surface.
  assert.equal(POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS.length, 4);
  for (const commitment of POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS) {
    assert.equal(commitment.authorityPosture.knowledgeAuthority, "KNOWLEDGE_ONLY");
    assert.equal(commitment.authorityPosture.executionAuthority, "NONE");
    assert.equal(commitment.authorityPosture.runtimeConnection, "NOT_INCLUDED");
    assert.equal(commitment.authorityPosture.mutation, "NONE");
    assert.equal(commitment.authorityPosture.activation, "NOT_INCLUDED");
  }

  // The forge binding re-inlined in the fixture deep-equals the D-P12
  // fixture's complete record — the same literals, never a drift.
  assert.deepEqual(
    deepClone(completeArm.forgeBindingRecord),
    deepClone(stageDP12ForgeBindingMatrix[0].forgeBindingRecord),
  );

  // The desk-side structural copies deep-equal the actual frozen D-P0
  // exports on every arm.
  for (const entry of stageDP13RoutingMatrix) {
    assert.deepEqual(
      deepClone(entry.deskSourceContractFixture),
      deepClone(stageDP0TradingDeskSourceContract),
      `desk source contract: ${entry.fixtureLabel}`,
    );
  }
  assert.deepEqual(
    deepClone(completeArm.deskPresenceProjection),
    deepClone(stageDP0AgentPresenceProjection),
  );
});

// ---------------------------------------------------------------
// Block 3: routing fail-closed — every broken leg refuses with an
// honest mapped sub-state; the composition's refusal outranks both the
// mode refinement and the join; the join sub-states are probed beyond
// the matrix; and the ceiling family stays all-false on every fresh
// run.
// ---------------------------------------------------------------
block("routing fail-closed", () => {
  // Forge record invalid AND declaration invalid together: the forge
  // leg's early reason outranks; the ladder's top cause holds.
  const bothBroken = collectRouting({
    ...completeInput(),
    forgeBindingRecord: "garbage",
    modeDeclarationRecord: "garbage",
  });
  assert.equal(bothBroken.mappedCompositionReason, "forge_binding_record_invalid");
  assert.equal(bothBroken.reason, "composition_not_complete");
  // The composition and the join both refuse on this arm (the garbage
  // declaration's ref is unreadable), so checks 1 and 2 are unsatisfied.
  assert.deepEqual(bothBroken.unsatisfiedChecks, [
    "composition_fully_satisfied_dp12",
    "declared_agent_observed_in_desk_projection",
    "declared_profile_routing_row_recorded",
  ]);
  assert.deepEqual(bothBroken.satisfiedChecks, [
    "routing_ceiling_held_no_authority_grant_or_admission",
  ]);
  assert.equal(bothBroken.mappedDeskAgentJoinState, "declared_ref_unreadable");

  // Desk broken together with a stale declaration: the composition's
  // desk cause outranks the mode refinement, but the mapped mode
  // sub-state stays honest (stale), never rewritten.
  const deskBrokenStale = collectRouting({
    ...completeInput(),
    deskPresenceProjection: {
      ...completeInput().deskPresenceProjection,
      posture: "tampered_projection_posture",
    },
    modeDeclarationRecord: {
      ...cloneCompleteDeclaration(),
      declarationEvent: {
        ...cloneCompleteDeclaration().declarationEvent,
        declared_at_epoch_ms: stageDP13StaleDeclaredAtEpochMs,
      },
    },
  });
  assert.equal(deskBrokenStale.reason, "composition_not_complete");
  assert.equal(
    deskBrokenStale.mappedCompositionReason,
    "desk_source_binding_not_established",
  );
  assert.equal(
    deskBrokenStale.mappedDeclaredModeReason,
    "declaration_not_fresh_within_declared_maximum_age",
    "desk cause outranks the refinement; mapped mode sub-state stays honest",
  );

  // A foreign held agent ref lands as the composition's own incomplete
  // proof with the mode leg honestly mapped all-satisfied — the D-P12
  // behavior verbatim, refined to composition_not_complete here, never a
  // join refusal.
  const foreignHeld = collectRouting({
    ...completeInput(),
    receiverHeldAgentRef: "agent:fixture:stage-d-p13:foreign-held-ref",
  });
  assert.equal(foreignHeld.reason, "composition_not_complete");
  assert.equal(foreignHeld.mappedCompositionReason, "composition_proof_incomplete");
  assert.deepEqual(foreignHeld.mappedDeclaredModeUnsatisfiedChecks, []);

  // Join sub-state probes beyond the matrix:
  // agent_record_absent — a well-formed ref that names no projection
  // record, with the held ref equal to it, so the composition is
  // all-satisfied and the join is what refuses.
  const unlistedRef = "agent:fixture:stage-d-p13:unlisted-agent";
  const absentJoin = collectRouting({
    ...completeInput(),
    modeDeclarationRecord: {
      ...cloneCompleteDeclaration(),
      agentRef: unlistedRef,
    },
    receiverHeldAgentRef: unlistedRef,
  });
  assert.equal(absentJoin.mappedCompositionReason, "all_composition_checks_satisfied");
  assert.equal(absentJoin.mappedDeskAgentJoinState, "agent_record_absent");
  assert.equal(absentJoin.reason, "declared_agent_not_observed");

  // desk_projection_unusable — the projection raw input unusable; the
  // composition's desk leg refuses too.
  const unusableProjection = collectRouting({
    ...completeInput(),
    deskPresenceProjection: "garbage",
  });
  assert.equal(unusableProjection.mappedDeskAgentJoinState, "desk_projection_unusable");
  assert.equal(unusableProjection.reason, "composition_not_complete");
  assert.equal(unusableProjection.mappedDeskSourceBindingReason, "projection_invalid");

  // declared_ref_unreadable — a null declaration raw input; the mode
  // leg is malformed and the join honestly maps it.
  const unreadableRef = collectRouting({
    ...completeInput(),
    modeDeclarationRecord: null,
  });
  assert.equal(unreadableRef.mappedCompositionReason, "declared_mode_record_invalid");
  assert.equal(unreadableRef.mappedDeskAgentJoinState, "declared_ref_unreadable");
  assert.equal(unreadableRef.reason, "composition_not_complete");
  assert.equal(unreadableRef.declaredProfile, "not_recorded");
  assert.equal(unreadableRef.advisoryPostureBySurfaceId, null);

  // agent_record_status_unrecognized — a presence status outside the
  // D-P0 vocabulary. The frozen D-P1 leg does NOT pin the status
  // vocabulary, so the composition stays all-satisfied and the join,
  // this cut's own join check, is the sole vocabulary guard.
  const statusBad = collectRouting({
    ...completeInput(),
    deskPresenceProjection: (() => {
      const projection = cloneCompleteProjection();
      projection.observedAgents[0].presenceStatus = "bogus_status";
      return projection;
    })(),
  });
  assert.equal(
    statusBad.mappedCompositionReason,
    "all_composition_checks_satisfied",
    "D-P1 does not pin the presence-status vocabulary",
  );
  assert.equal(statusBad.mappedDeskAgentJoinState, "agent_record_status_unrecognized");
  assert.equal(statusBad.reason, "declared_agent_not_observed");

  // A malformed declaration (the mandatory posture key removed) lands
  // as declared_mode_record_invalid, refined to composition_not_complete —
  // never a refinement literal.
  const missingPostureKey = collectRouting((() => {
    const input = completeInput();
    const declaration = input.modeDeclarationRecord;
    delete declaration.stricterLaneRefusalPosture;
    return input;
  })());
  assert.equal(
    missingPostureKey.mappedCompositionReason,
    "declared_mode_record_invalid",
  );
  assert.equal(missingPostureKey.reason, "composition_not_complete");

  // Out-of-vocabulary presence statuses are unreachable through honest
  // fixtures: the refusal arm's join state is presence_not_established,
  // the honest refusal vocabulary the desk carries.
  const notObservedArm = stageDP13RoutingMatrix[6];
  assert.equal(notObservedArm.fixtureLabel, "stage-d-p13:routing:declared-agent-not-observed");
  assert.equal(
    notObservedArm.assessment.mappedDeskAgentJoinState,
    "agent_record_presence_not_established",
  );
  assert.equal(
    notObservedArm.assessment.reason,
    "declared_agent_not_observed",
  );

  // Ceiling family all-false on every fresh run so far.
  for (const fresh of dp13FreshRuns) {
    for (const field of CEILING_FIELDS) {
      assert.equal(fresh[field] === false, true, `ceiling ${field}`);
    }
    assert.equal(fresh.runtimeActivationPosture, "not_included");
    assert.equal(fresh.authority, "none");
    // No frozen tuple name on any fresh run either.
    assertLacksKeys(fresh, FROZEN_NAMES, "fresh D-P13 assessment");
  }
});

// ---------------------------------------------------------------
// Block 4: declared-mode fail-closed folding — the D-P12 mode-leg
// literals are carried verbatim as routing reasons, never rewritten;
// the refinement branch stays total; out-of-vocabulary profiles render
// not_recorded with a null posture.
// ---------------------------------------------------------------
block("declared-mode fail-closed folding", () => {
  // The stale and the inference-refused fixture arms carry exactly the
  // D-P12 mode leg's literal as the routing reason.
  const staleArm = stageDP13RoutingMatrix[3];
  assert.equal(staleArm.assessment.reason, "declaration_not_fresh_within_declared_maximum_age");
  assert.equal(
    staleArm.assessment.reason,
    stageDP12ModeMatrix[3].assessment.reason,
    "stale literal is the D-P12 literal verbatim",
  );
  assert.deepEqual(staleArm.assessment.declarationFreshnessDiagnosis, {
    state: "stale",
    reason: "declared_maximum_age_expired",
    observationAgeMs: 60_001,
  });

  const inferredArm = stageDP13RoutingMatrix[4];
  assert.equal(inferredArm.assessment.reason, "declaration_basis_inference_refused");
  assert.equal(
    inferredArm.assessment.reason,
    stageDP12ModeMatrix[2].assessment.reason,
    "inference-refused literal is the D-P12 literal verbatim",
  );
  assert.equal(inferredArm.assessment.refusedDeclarationBasis, "inferred_from_purpose");
  assert.deepEqual(inferredArm.assessment.mappedDeclaredModeUnsatisfiedChecks, [
    "declaration_basis_receiver_recorded_only",
  ]);
  // Even a refused declaration keeps its readable profile echo — the
  // echo is honesty, never an unrecording.
  assert.equal(inferredArm.assessment.declaredProfile, "TRADING");
  assert.deepEqual(
    deepClone(inferredArm.assessment.advisoryPostureBySurfaceId),
    deepClone(POND_STAGE_DP13_DECLARED_MODE_ROUTING_TABLE.TRADING),
  );

  // Constructed out-of-vocabulary profile: declared_profile_out_of_
  // vocabulary, profile not_recorded, posture null, refused basis null.
  const oov = collectRouting({
    ...completeInput(),
    modeDeclarationRecord: {
      ...cloneCompleteDeclaration(),
      declaredProfile: "EXECUTOR",
    },
  });
  assert.equal(oov.reason, "declared_profile_out_of_vocabulary");
  assert.equal(oov.declaredProfile, "not_recorded");
  assert.equal(oov.advisoryPostureBySurfaceId, null);
  assert.equal(oov.refusedDeclarationBasis, null);
  assert.equal(oov.mappedDeskAgentJoinState, "agent_record_observed");

  // Every refused basis folds to its own verbatim refinement — five
  // constructed arms, none collapsing to composition_not_complete.
  for (const refusedBasis of [
    "inferred_from_purpose",
    "inferred_from_operator_prompt",
    "inferred_from_forge_surface_provenance",
    "model_self_selected",
    "derived_from_skill_library_state",
  ]) {
    const fresh = collectRouting({
      ...completeInput(),
      modeDeclarationRecord: {
        ...cloneCompleteDeclaration(),
        declarationBasis: refusedBasis,
      },
    });
    assert.equal(fresh.reason, "declaration_basis_inference_refused", refusedBasis);
    assert.equal(fresh.refusedDeclarationBasis, refusedBasis);
  }

  // The posture-value flip folds behind the freshness literal (the
  // mode leg's catch-all), never composition_not_complete — the
  // tampered posture stays visible in the D-P12 leg, not here.
  const postureFlip = collectRouting((() => {
    const input = completeInput();
    input.modeDeclarationRecord = {
      ...input.modeDeclarationRecord,
      stricterLaneRefusalPosture: {
        ...input.modeDeclarationRecord.stricterLaneRefusalPosture,
        laneAdmissionEstablished: true,
      },
    };
    return input;
  })());
  assert.equal(
    postureFlip.reason,
    "declaration_not_fresh_within_declared_maximum_age",
    "posture flip folds behind the refinement, never a new cause",
  );

  // Refinement totality: whenever the routing reason is a refinement
  // literal it equals the mapped D-P12 reason, on every fresh run.
  for (const fresh of dp13FreshRuns) {
    if (REFINEMENT_REASONS.includes(fresh.reason)) {
      assert.equal(fresh.reason, fresh.mappedDeclaredModeReason);
    }
    // And the composition never hands this cut a mode-leg refinement
    // it cannot name: on declared_mode_not_established the mapped
    // reason is always one of the three refinement literals.
    if (fresh.mappedCompositionReason === "declared_mode_not_established") {
      assert.ok(
        REFINEMENT_REASONS.includes(fresh.reason),
        `composition reason ${fresh.mappedCompositionReason} must refine`,
      );
    }
  }
});

// ---------------------------------------------------------------
// Block 5: frozen widening proof — the frozen D-P5…D-P11 pins did not
// move, all three D-P12 matrices still recompute deep-equal against
// their pinned arms, and no D-P13 assessment carries a frozen tuple
// name.
// ---------------------------------------------------------------
block("frozen widening proof", () => {
  const receiverHeldPrincipalRef = stageDP0LocalPrincipalRef;

  const dp5Fresh = assessPondLocalPrincipalBindingEstablishment({
    ceremonyRecord: stageDP5LocalPrincipalBindingComplete.ceremonyRecord,
    receiverHeldPrincipalRef,
  });
  assert.deepEqual(
    deepClone(dp5Fresh),
    deepClone(stageDP5LocalPrincipalBindingComplete.assessment),
  );
  assert.equal(dp5Fresh.principalIdIssued, false);

  const dp6Fresh = assessPondLocalPrincipalAuthenticationObservation({
    observationRecord: stageDP6AuthenticationObservationComplete.observationRecord,
    receiverHeldPrincipalRef,
    evaluatedAtEpochMs: stageDP6AuthenticationObservationComplete.evaluatedAtEpochMs,
    maximumAgeMs: stageDP6AuthenticationObservationComplete.maximumAgeMs,
  });
  assert.deepEqual(
    deepClone(dp6Fresh),
    deepClone(stageDP6AuthenticationObservationComplete.assessment),
  );
  assert.equal(dp6Fresh.principalIdIssued, false);

  const dp8Fresh = assessPondLocalAuthenticationChallengeProof({
    proofRecord: stageDP8MechanicComplete.proofRecord,
    verifierRecord: stageDP8MechanicComplete.verifierRecord,
    receiverHeldPrincipalRef,
    evaluatedAtEpochMs: stageDP8MechanicComplete.evaluatedAtEpochMs,
    maximumAgeMs: stageDP8MechanicComplete.maximumAgeMs,
  });
  assert.deepEqual(
    deepClone(dp8Fresh),
    deepClone(stageDP8MechanicComplete.assessment),
  );
  assert.equal(
    dp8Fresh.authenticationMechanicState,
    "receiver_verified_knowledge_factor",
  );

  // The frozen D-P9 mapping seam: a held receiver verification literal
  // still hardcodes onchain verification false, in the frozen
  // vocabulary, forever.
  const mappingSeamRun = assessPondErc8004IdentityMapping({
    mappingRecord: stageDP11VerificationComplete.dp9MappingRecord,
    receiverHeldPrincipalRef,
    receiverVerification: "receiver_observed_onchain_identity_evidence",
  });
  assert.equal(mappingSeamRun.reason, "onchain_verification_not_performed", "frozen seam");
  assert.equal(mappingSeamRun.onchainVerificationState, "not_verified", "frozen seam");
  assert.deepEqual(
    deepClone(mappingSeamRun.unsatisfiedChecks),
    ["onchain_verification_evidence_independently_observed"],
    "frozen seam unsatisfied",
  );
  const frozenFixtureRun = assessPondErc8004IdentityMapping({
    mappingRecord: stageDP9MappingEstablished.mappingRecord,
    receiverHeldPrincipalRef,
    receiverVerification: "not_performed",
  });
  assert.equal(frozenFixtureRun.reason, "onchain_verification_not_performed");

  // The D-P9 readiness composition still hardcodes receiverVerification
  // "not_performed" — a routing posture widens readiness nothing.
  const compositionContractText = readFileSync(
    join(repoRoot, "src/contracts/pond-principal-identity-readiness-composition.ts"),
    "utf8",
  );
  assert.ok(
    compositionContractText.includes('receiverVerification: "not_performed"'),
    "readiness composition hardcode moved",
  );
  const dp9CompositionFresh = assessPondPrincipalIdentityReadinessComposition({
    dp5CeremonyRecord: stageDP9CompositionComplete.dp5CeremonyRecord,
    dp8VerifierRecord: stageDP9CompositionComplete.dp8VerifierRecord,
    dp8ProofRecord: stageDP9CompositionComplete.dp8ProofRecord,
    dp9IssuanceRecord: stageDP9CompositionComplete.dp9IssuanceRecord,
    dp9MappingRecord: stageDP9CompositionComplete.dp9MappingRecord,
    receiverHeldPrincipalRef,
    receiverVerifiedAtEpochMs: stageDP9CompositionComplete.receiverVerifiedAtEpochMs,
    receiverMaximumAgeMs: stageDP9CompositionComplete.receiverMaximumAgeMs,
  });
  assert.deepEqual(
    deepClone(dp9CompositionFresh),
    deepClone(stageDP9CompositionComplete.assessment),
  );
  assert.equal(dp9CompositionFresh.privateReadsActivated, false);
  assert.equal(
    dp9CompositionFresh.readinessState,
    "structurally_ready_private_reads_still_refused",
  );

  // All three D-P12 matrices still recompute deep-equal against their
  // pinned assessments through their own assessors.
  for (const entry of stageDP12ForgeBindingMatrix) {
    const fresh = assessPondKnowledgeForgeSurfaceBinding({
      forgeBindingRecord: entry.forgeBindingRecord,
    });
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
  }
  for (const entry of stageDP12ModeMatrix) {
    const fresh = assessPondAgentDeclaredOperationalMode({
      modeDeclarationRecord: entry.modeDeclarationRecord,
      receiverEvaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
      receiverMaximumAgeMs: entry.receiverMaximumAgeMs,
    });
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
  }
  for (const entry of stageDP12CompositionMatrix) {
    const fresh = assessPondKnowledgeForgeBoundDeclaredModeComposition(entry);
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
  }

  // No D-P13 assessment carries any frozen tuple name; the frozen
  // D-P0…D-P12 family's names stay the frozen family's only carriers.
  for (const entry of stageDP13RoutingMatrix) {
    assertLacksKeys(entry.assessment, FROZEN_NAMES, `routing:${entry.fixtureLabel}`);
  }
  for (const fresh of dp13FreshRuns) {
    assertLacksKeys(fresh, FROZEN_NAMES, "fresh D-P13 assessment");
  }

  // The five uppercase forge posture literals carried untouched on the
  // complete binding's every surface, plus the p5e lifecycle set; the
  // routing table overrides none of them.
  const completeRecordUppercase = cloneCompleteForgeRecord();
  for (const surfaceId of POND_STAGE_DP12_KNOWLEDGE_FORGE_SURFACE_IDS) {
    const surface = completeRecordUppercase.surfaces[surfaceId];
    assert.ok(surface !== null && typeof surface === "object", surfaceId);
    assert.equal(surface.authorityPosture.knowledgeAuthority, "KNOWLEDGE_ONLY");
    assert.equal(surface.authorityPosture.executionAuthority, "NONE");
    assert.equal(surface.authorityPosture.runtimeConnection, "NOT_INCLUDED");
    assert.equal(surface.authorityPosture.mutation, "NONE");
    assert.equal(surface.authorityPosture.activation, "NOT_INCLUDED");
  }
  assert.equal(
    completeRecordUppercase.workflowConsoleLifecycle.lifecycleAuthority,
    "EXTERNAL_REQUIRED_NOT_ESTABLISHED",
  );
  assert.equal(
    completeRecordUppercase.workflowConsoleLifecycle.persistence,
    "NONE",
  );
  assert.strictEqual(
    completeRecordUppercase.workflowConsoleLifecycle.executable,
    false,
  );
});

// ---------------------------------------------------------------
// Block 6: routing-table tie — the receiver-recorded table cannot
// drift from a hand-written literal; the routed profiles tie to the
// D-P12 mode vocabulary; p5e never routes; the rows stay pairwise
// distinct; the presence-status decision ties to the D-P0 vocabulary.
// ---------------------------------------------------------------
block("routing-table tie", () => {
  // A hand-written literal copy: any accidental row edit fails here.
  const handWrittenTable = {
    TRADING: {
      "knowledge-forge-p5b-desktop-projection": "advisory_excluded",
      "knowledge-forge-p5c-skill-library-browser": "advisory_relevant",
      "knowledge-forge-p5d-evidence-inspector": "advisory_relevant",
      "knowledge-forge-p5e-governed-workflow-console": "advisory_excluded",
    },
    HELPER: {
      "knowledge-forge-p5b-desktop-projection": "advisory_relevant",
      "knowledge-forge-p5c-skill-library-browser": "advisory_excluded",
      "knowledge-forge-p5d-evidence-inspector": "advisory_relevant",
      "knowledge-forge-p5e-governed-workflow-console": "advisory_excluded",
    },
    BUILDER: {
      "knowledge-forge-p5b-desktop-projection": "advisory_relevant",
      "knowledge-forge-p5c-skill-library-browser": "advisory_relevant",
      "knowledge-forge-p5d-evidence-inspector": "advisory_excluded",
      "knowledge-forge-p5e-governed-workflow-console": "advisory_excluded",
    },
  };
  assert.deepEqual(
    deepClone(POND_STAGE_DP13_DECLARED_MODE_ROUTING_TABLE),
    handWrittenTable,
  );

  // The routed profiles tie to the frozen D-P12 mode vocabulary (the
  // D-P12 vocabulary has no fourth literal, so neither does the table).
  assert.deepEqual([...POND_STAGE_DP13_ROUTED_PROFILES], ["TRADING", "HELPER", "BUILDER"]);

  // Every row: exactly the four surface ids; p5e advisory_excluded on
  // every profile; every posture value in the two-literal vocabulary.
  const surfaceIds = [...POND_STAGE_DP12_KNOWLEDGE_FORGE_SURFACE_IDS].sort();
  const rows = Object.values(POND_STAGE_DP13_DECLARED_MODE_ROUTING_TABLE);
  for (const row of rows) {
    assert.deepEqual(Object.keys(row).sort(), surfaceIds);
    for (const posture of Object.values(row)) {
      assert.ok(
        [...POND_STAGE_DP13_ADVISORY_POSTURE_VOCABULARY].includes(posture),
        `posture ${posture} out of vocabulary`,
      );
    }
    assert.equal(row["knowledge-forge-p5e-governed-workflow-console"], "advisory_excluded");
  }
  assert.equal(POND_STAGE_DP13_ADVISORY_POSTURE_VOCABULARY.length, 2);

  // The rows stay pairwise distinct — a profile is distinguishable from
  // its echo.
  const [tradingRow, helperRow, builderRow] = rows;
  assert.notDeepEqual(deepClone(tradingRow), deepClone(helperRow));
  assert.notDeepEqual(deepClone(helperRow), deepClone(builderRow));
  assert.notDeepEqual(deepClone(builderRow), deepClone(tradingRow));

  // The receiver-recorded presence decision covers exactly the D-P0
  // presence-status vocabulary, whose five literals are pinned in the
  // frozen D-P0 contract text.
  assert.deepEqual([...POND_STAGE_DP13_PRESENCE_ESTABLISHING_STATUSES], [
    "fixture_observed_not_live",
    "live_observed",
  ]);
  assert.deepEqual([...POND_STAGE_DP13_PRESENCE_REFUSED_STATUSES], [
    "not_observed",
    "unavailable",
    "unknown",
  ]);
  const presenceContractText = readFileSync(
    join(repoRoot, "src/contracts/pond-agent-presence-projection.ts"),
    "utf8",
  );
  for (const status of [
    ...POND_STAGE_DP13_PRESENCE_ESTABLISHING_STATUSES,
    ...POND_STAGE_DP13_PRESENCE_REFUSED_STATUSES,
  ]) {
    assert.ok(
      presenceContractText.includes(`"${status}"`),
      `status vocabulary drifted from D-P0: ${status}`,
    );
  }
});

// ---------------------------------------------------------------
// Block 7: freshness tie — the D-P2 boundary is inclusive; the routing
// assessment's carried diagnosis deep-equals its mode leg's on every
// arm, recomputed and pinned; a future declaration time renders an
// unknown diagnosis with a null observation age.
// ---------------------------------------------------------------
block("freshness tie", () => {
  // Exactly at the declared maximum age: fresh, inclusive.
  const atBoundary = diagnoseDeclarationFreshness(
    evaluated - maximumAge,
    evaluated,
    maximumAge,
  );
  assert.deepEqual(deepClone(atBoundary), {
    state: "fresh",
    reason: "within_declared_maximum_age",
    observationAgeMs: maximumAge,
  });
  // One ms past: stale.
  const pastBoundary = diagnoseDeclarationFreshness(
    evaluated - maximumAge - 1,
    evaluated,
    maximumAge,
  );
  assert.equal(pastBoundary.state, "stale");
  assert.strictEqual(pastBoundary.observationAgeMs, maximumAge + 1);

  // The boundary is reachable through the full routing composition:
  // at the boundary the declaration is fresh and routing establishes;
  // past it the refinement literal is the routing reason.
  const boundaryRun = collectRouting({
    ...completeInput(),
    modeDeclarationRecord: (() => {
      const declaration = cloneCompleteDeclaration();
      declaration.declarationEvent = {
        ...declaration.declarationEvent,
        declared_at_epoch_ms: evaluated - maximumAge,
      };
      return declaration;
    })(),
  });
  assert.deepEqual(deepClone(boundaryRun.declarationFreshnessDiagnosis), {
    state: "fresh",
    reason: "within_declared_maximum_age",
    observationAgeMs: maximumAge,
  });
  assert.equal(boundaryRun.reason, "declared_mode_routing_established");

  const pastBoundaryRun = collectRouting((() => {
    const input = completeInput();
    input.modeDeclarationRecord = {
      ...input.modeDeclarationRecord,
      declarationEvent: {
        ...input.modeDeclarationRecord.declarationEvent,
        declared_at_epoch_ms: evaluated - maximumAge - 1,
      },
    };
    return input;
  })());
  assert.equal(pastBoundaryRun.reason, "declaration_not_fresh_within_declared_maximum_age");
  assert.strictEqual(
    pastBoundaryRun.declarationFreshnessDiagnosis.observationAgeMs,
    maximumAge + 1,
  );

  // A future declaration time: unknown diagnosis, null observation age,
  // folded behind the freshness refinement literal.
  const futureRun = collectRouting((() => {
    const input = completeInput();
    input.modeDeclarationRecord = {
      ...input.modeDeclarationRecord,
      declarationEvent: {
        ...input.modeDeclarationRecord.declarationEvent,
        declared_at_epoch_ms: evaluated + 1,
      },
    };
    return input;
  })());
  assert.deepEqual(deepClone(futureRun.declarationFreshnessDiagnosis), {
    state: "unknown",
    reason: "observation_time_in_future",
    observationAgeMs: null,
  });
  assert.equal(futureRun.reason, "declaration_not_fresh_within_declared_maximum_age");

  // The carried diagnosis deep-equals a direct fresh mode-leg run's on
  // every matrix arm, recomputed and pinned.
  for (const entry of stageDP13RoutingMatrix) {
    const fresh = assessPondDeclaredModeRouting(entry);
    const modeLeg = assessPondAgentDeclaredOperationalMode({
      modeDeclarationRecord: entry.modeDeclarationRecord,
      receiverEvaluatedAtEpochMs: entry.receiverEvaluatedAtEpochMs,
      receiverMaximumAgeMs: entry.receiverMaximumAgeMs,
    });
    assert.deepEqual(
      deepClone(fresh.declarationFreshnessDiagnosis),
      deepClone(modeLeg.declarationFreshnessDiagnosis),
      entry.fixtureLabel,
    );
    assert.deepEqual(
      deepClone(entry.assessment.declarationFreshnessDiagnosis),
      deepClone(modeLeg.declarationFreshnessDiagnosis),
      entry.fixtureLabel,
    );
  }
});

// ---------------------------------------------------------------
// Block 8: hygiene — type-only fixture imports; banned transport and
// store text absent from this cut's files; the four ui forge modules
// carry no D-P13 vocabulary; the frozen network constants stay banned
// under src/; the D-P12 forbidden-key inventory stays intact.
// ---------------------------------------------------------------
block("hygiene", () => {
  const fixturePath = join(
    repoRoot,
    "src/fixtures/stage-d-p13-declared-mode-routing.ts",
  );
  const fixtureText = readFileSync(fixturePath, "utf8");
  const importLines = fixtureText
    .split("\n")
    .filter((line) => /^\s*import\s/.test(line));
  assert.ok(importLines.length >= 4, "fixture has import lines");
  for (const line of importLines) {
    assert.ok(
      line.trimStart().startsWith("import type "),
      `value import in the fixture: ${line}`,
    );
  }

  const bannedTextNeedles = [
    "fetch(",
    "localStorage",
    "sessionStorage",
    "XMLHttpRequest",
    "WebSocket(",
    "EventSource(",
    "document.createElement",
    "document.getElementById",
    "document.querySelector",
    "window.addEventListener",
    "window.location",
  ];
  for (const relativePath of [
    "src/contracts/pond-declared-mode-routing.ts",
    "src/fixtures/stage-d-p13-declared-mode-routing.ts",
  ]) {
    const body = readFileSync(join(repoRoot, relativePath), "utf8");
    for (const needle of bannedTextNeedles) {
      assert.ok(
        !body.includes(needle),
        `banned text ${needle} in ${relativePath}`,
      );
    }
  }

  // The four ui forge modules stay untouched by this cut: no D-P13
  // vocabulary, no contract names, no "d-p13" marker — the routing
  // posture is receiver-owned vocabulary about the ui, never ui
  // vocabulary.
  for (const relativePath of [
    "ui/pond-knowledge-forge.js",
    "ui/pond-knowledge-forge-library.js",
    "ui/pond-knowledge-forge-inspector.js",
    "ui/pond-knowledge-forge-workflow.js",
  ]) {
    const body = readFileSync(join(repoRoot, relativePath), "utf8");
    for (const needle of [
      "d-p13",
      "declared-mode-routing",
      "POND_STAGE_DP13",
      "advisory_relevant",
      "PondDeclaredModeRouting",
    ]) {
      assert.ok(
        !body.includes(needle),
        `ui file carries D-P13 vocabulary ${needle}: ${relativePath}`,
      );
    }
  }

  // This cut performs no network read, and the frozen ERC-8004 network
  // constants remain scripts/-only: banned under every file in src/.
  const networkNeedles = [
    "0x8004A169FB4a3325136EB29fA0ceB6D2e539a432",
    "mainnet.base.org",
    "base-rpc.publicnode.com",
  ];
  for (const filePath of walkFiles(join(repoRoot, "src"))) {
    if (!filePath.endsWith(".ts")) continue;
    const body = readFileSync(filePath, "utf8");
    for (const needle of networkNeedles) {
      assert.ok(
        !body.includes(needle),
        `network constant ${needle} under src/: ${filePath}`,
      );
    }
  }

  // The forbidden forge-binding inventory is intact; the count is
  // pinned.
  assert.equal(POND_STAGE_DP12_FORBIDDEN_FORGE_BINDING_KEYS.length, 16);
  const forgeContractText = readFileSync(
    join(repoRoot, "src/contracts/pond-knowledge-forge-surface-binding.ts"),
    "utf8",
  );
  for (const key of POND_STAGE_DP12_FORBIDDEN_FORGE_BINDING_KEYS) {
    assert.ok(
      forgeContractText.includes(`"${key}"`),
      `forbidden key ${key} missing from the contract inventory`,
    );
  }
});

console.log("POND_STAGE_DP13_DECLARED_MODE_ROUTING_SELFTEST_PASS");