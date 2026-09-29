// Stage D-P12 selftest: the knowledge-forge surface binding and the
// declared agent operational-mode vocabulary. Offline structural
// throughout — this cut performs no network read, so there is no
// env-gated live block (recorded in the stage doc). The matrix
// recomputation proves the fixtures and the three classifiers agree;
// the identity ties prove the binding record, the contract's frozen
// commitment table, and the four ui forge modules cannot drift apart,
// plus that the composition's desk-side structural copies equal the
// actual frozen D-P0 exports; the forge-binding fail-closed block proves
// every provenance tamper — a single flipped hex character, a kind
// mislabel, a lifecycle literal flip, a forbidden-key injection —
// refuses; the declared-mode fail-closed block proves all five inference
// bases, out-of-vocabulary profiles, an unbindable agent ref, staleness,
// and every unknown diagnosis stay refused while the stricter-lane
// refusal posture stays mandatory; the composition fail-closed block
// proves every broken leg refuses with an honest mapped sub-state and
// the forge leg's invalid record outranks the mode leg's; the
// frozen-widening block proves the frozen D-P5…D-P11 pins did not move
// and no D-P12 assessment carries a frozen tuple name; the freshness tie
// proves the inclusive D-P2 boundary and the diagnosis carriage; the
// hygiene block proves type-only fixture imports and that the ui stays
// untouched by this cut's vocabulary.

import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import {
  stageDP12ForgeBindingMatrix,
  stageDP12ModeMatrix,
  stageDP12CompositionMatrix,
  stageDP12AgentRef,
} from "../src/fixtures/stage-d-p12-knowledge-forge-binding-and-declared-mode.ts";
import {
  assessPondKnowledgeForgeSurfaceBinding,
  POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS,
  POND_STAGE_DP12_KNOWLEDGE_FORGE_SURFACE_IDS,
  POND_STAGE_DP12_ARCHITECTURE_COMMIT,
  POND_STAGE_DP12_KNOWLEDGE_LAW_ANCHOR,
  POND_STAGE_DP12_FORBIDDEN_FORGE_BINDING_KEYS,
} from "../src/contracts/pond-knowledge-forge-surface-binding.ts";
import {
  assessPondAgentDeclaredOperationalMode,
  diagnoseDeclarationFreshness,
} from "../src/contracts/pond-agent-declared-operational-mode.ts";
import { assessPondKnowledgeForgeBoundDeclaredModeComposition } from "../src/contracts/pond-knowledge-forge-bound-declared-mode-composition.ts";
import { assessPondAgentPresenceSourceBinding } from "../src/contracts/pond-agent-presence-source-binding.ts";
import {
  stageDP0Agent0Ref,
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

// Fresh D-P12 runs collected across the blocks, reused by the
// frozen-widening block's frozen-name walk and ceiling walk. Only D-P12
// assessments land here — never a frozen family assessment.
let dp12FreshRuns = [];
const collectForge = (record) => {
  const fresh = assessPondKnowledgeForgeSurfaceBinding({
    forgeBindingRecord: record,
  });
  dp12FreshRuns.push(fresh);
  return fresh;
};
const collectMode = (record, evalValue, maxAge) => {
  const fresh = assessPondAgentDeclaredOperationalMode({
    modeDeclarationRecord: record,
    receiverEvaluatedAtEpochMs: evalValue,
    receiverMaximumAgeMs: maxAge,
  });
  dp12FreshRuns.push(fresh);
  return fresh;
};
const collectComposition = (input) => {
  const fresh = assessPondKnowledgeForgeBoundDeclaredModeComposition(input);
  dp12FreshRuns.push(fresh);
  return fresh;
};

// A deep-cloned working copy of the complete forge binding record for the
// tamper arms; the surfaces map keeps all four ids and a tamper edits its
// fields in place on the clone.
const cloneCompleteForgeRecord = () =>
  JSON.parse(JSON.stringify(stageDP12ForgeBindingMatrix[0].forgeBindingRecord));

const evaluated = stageDP12ModeMatrix[0].receiverEvaluatedAtEpochMs;
const maximumAge = stageDP12ModeMatrix[0].receiverMaximumAgeMs;

const ALL_UNSATISFIED_FORGE_CHECKS = [
  "binding_record_well_formed_frozen_vocabulary",
  "exact_forge_source_identity_per_surface",
  "forge_surface_posture_literals_held",
  "knowledge_law_anchor_held",
  "surface_inventory_exact_and_receiver_recorded",
  "no_live_connection_lifecycle_or_mutation_posture",
];
const ALL_UNSATISFIED_MODE_CHECKS = [
  "declaration_record_well_formed",
  "one_agent_one_profile_binding",
  "declaration_basis_receiver_recorded_only",
  "declared_profile_in_vocabulary",
  "declaration_fresh_within_declared_maximum_age",
  "stricter_lane_refusal_posture_held",
  "declaration_is_evidence_only_ceiling_held",
];
const ALL_COMPOSITION_CHECKS = [
  "forge_surface_binding_fully_satisfied_dp12",
  "declared_operational_mode_recorded_dp12",
  "declaration_fresh_within_declared_maximum_age_dp12",
  "desk_source_binding_still_admissible_dp1",
  "composition_ceiling_held_no_capability_grant_or_authority",
];
const ALL_UNSATISFIED_DP1_CHECKS = [
  "exact_repository_identity",
  "exact_committed_source_commit_binding",
  "exact_observed_tool_inventory",
  "read_only_source_posture",
  "presence_records_sourced_from_bound_contract",
  "no_live_connection_in_binding",
];

// ---------------------------------------------------------------
// Block 1: fixture matrix recompute — every pinned assessment equals a
// fresh run of its classifier, and every assessment arrives deep-frozen.
// ---------------------------------------------------------------
block("matrix recompute", () => {
  for (const entry of stageDP12ForgeBindingMatrix) {
    const fresh = collectForge(entry.forgeBindingRecord);
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(fresh, `forge:${entry.fixtureLabel}`);
  }
  for (const entry of stageDP12ModeMatrix) {
    const fresh = collectMode(
      entry.modeDeclarationRecord,
      entry.receiverEvaluatedAtEpochMs,
      entry.receiverMaximumAgeMs,
    );
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(fresh, `mode:${entry.fixtureLabel}`);
    assert.equal(
      entry.assessment.contractVersion,
      "pond-agent-declared-operational-mode-d-p12",
    );
  }
  for (const entry of stageDP12CompositionMatrix) {
    const fresh = collectComposition(entry);
    assert.deepEqual(deepClone(fresh), deepClone(entry.assessment), entry.fixtureLabel);
    assertDeepFrozen(fresh, `composition:${entry.fixtureLabel}`);
    assert.equal(
      entry.assessment.contractVersion,
      "pond-knowledge-forge-bound-declared-mode-composition-d-p12",
    );
  }
  // The positive arms' honest positive literals, pinned.
  assert.equal(
    stageDP12ForgeBindingMatrix[0].assessment.bindingState,
    "fixture_bound_forge_surface_provenance",
  );
  assert.equal(
    stageDP12ForgeBindingMatrix[0].assessment.reason,
    "forge_surface_binding_structurally_recorded",
  );
  assert.equal(
    stageDP12ForgeBindingMatrix[1].assessment.reason,
    "forge_surface_provenance_incomplete",
  );
  assert.deepEqual(
    deepClone(stageDP12ForgeBindingMatrix[1].assessment.unsatisfiedChecks),
    ["exact_forge_source_identity_per_surface"],
  );
  assert.equal(
    stageDP12ModeMatrix[0].assessment.declaredModeState,
    "receiver_recorded_declared_mode_evidence_only",
  );
  assert.equal(stageDP12ModeMatrix[0].assessment.declaredProfile, "TRADING");
  assert.equal(stageDP12ModeMatrix[1].assessment.declaredProfile, "HELPER");
  assert.equal(
    stageDP12ModeMatrix[2].assessment.reason,
    "declaration_basis_inference_refused",
  );
  assert.equal(
    stageDP12ModeMatrix[2].assessment.refusedDeclarationBasis,
    "inferred_from_purpose",
  );
  assert.deepEqual(
    deepClone(stageDP12ModeMatrix[3].assessment.declarationFreshnessDiagnosis),
    { state: "stale", reason: "declared_maximum_age_expired", observationAgeMs: 60_001 },
  );
  assert.equal(
    stageDP12CompositionMatrix[0].assessment.compositionState,
    "forge_bound_declared_profile_recorded",
  );
});

// ---------------------------------------------------------------
// Block 2: identity ties — the binding, the contract table, and the ui
// it binds cannot drift apart; the composition's desk-side copies equal
// the actual frozen D-P0 exports.
// ---------------------------------------------------------------
block("identity ties", () => {
  assert.equal(stageDP12AgentRef, stageDP0Agent0Ref, "one agent ref");

  // The contract's frozen commitment table pin.
  assert.equal(
    POND_STAGE_DP12_ARCHITECTURE_COMMIT,
    "bc7a971dfb243f0aa4417da6cef85cc56204f783",
  );
  assert.equal(
    POND_STAGE_DP12_KNOWLEDGE_LAW_ANCHOR,
    "Build capability. Never manufacture authority.",
  );
  assert.deepEqual(
    [...POND_STAGE_DP12_KNOWLEDGE_FORGE_SURFACE_IDS],
    [
      "knowledge-forge-p5b-desktop-projection",
      "knowledge-forge-p5c-skill-library-browser",
      "knowledge-forge-p5d-evidence-inspector",
      "knowledge-forge-p5e-governed-workflow-console",
    ],
  );
  assert.equal(POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS.length, 4);

  // Re-extract the provenance straight from the four ui module texts —
  // the binding travels through the receiver's record, and this tie is
  // what keeps record, table, and ui honest about each other.
  const uiFiles = {
    "knowledge-forge-p5b-desktop-projection": "ui/pond-knowledge-forge.js",
    "knowledge-forge-p5c-skill-library-browser": "ui/pond-knowledge-forge-library.js",
    "knowledge-forge-p5d-evidence-inspector": "ui/pond-knowledge-forge-inspector.js",
    "knowledge-forge-p5e-governed-workflow-console": "ui/pond-knowledge-forge-workflow.js",
  };
  const match = (body, pattern, label) => {
    const found = body.match(pattern);
    assert.ok(found !== null, `ui extraction failed for ${label}`);
    return found[1];
  };
  // p5b binds the law repository under `sourceBinding.{commit,tree}` with
  // the architecture binding as its companion; the other three bind the
  // forge repository under `forgeCommit/forgeTree` with this app's Pond
  // commit as the companion.
  const extractUi = (surfaceId) => {
    const body = readFileSync(join(repoRoot, uiFiles[surfaceId]), "utf8");
    const isP5b = surfaceId === "knowledge-forge-p5b-desktop-projection";
    return {
      forgeCommit: isP5b
        ? match(body, /sourceBinding:\s*Object\.freeze\(\{[\s\S]{0,400}?commit:\s*"([0-9a-f]{40})"/, `${surfaceId} commit`)
        : match(body, /forgeCommit:\s*"([0-9a-f]{40})"/, `${surfaceId} forgeCommit`),
      forgeTree: isP5b
        ? match(body, /sourceBinding:\s*Object\.freeze\(\{[\s\S]{0,400}?tree:\s*"([0-9a-f]{40})"/, `${surfaceId} tree`)
        : match(body, /forgeTree:\s*"([0-9a-f]{40})"/, `${surfaceId} forgeTree`),
      companionRepository: isP5b
        ? match(body, /architectureBinding:\s*Object\.freeze\(\{[\s\S]{0,200}?repository:\s*"([^"]+)"/, `${surfaceId} companion repo`)
        : match(body, /pondRepository:\s*"([^"]+)"/, `${surfaceId} pondRepository`),
      companionCommit: isP5b
        ? match(body, /architectureBinding:\s*Object\.freeze\(\{[\s\S]{0,200}?commit:\s*"([0-9a-f]{40})"/, `${surfaceId} companion commit`)
        : match(body, /pondCommit:\s*"([0-9a-f]{40})"/, `${surfaceId} pondCommit`),
    };
  };
  // The posture block's five normalized authority literals, straight
  // from each ui module's own posture object.
  const postureLiteralsFromUi = (surfaceId) => {
    const body = readFileSync(join(repoRoot, uiFiles[surfaceId]), "utf8");
    const postureBlock = body.match(/posture:\s*Object\.freeze\(\{([\s\S]{0,700}?)\}\)/);
    assert.ok(postureBlock !== null, `${surfaceId} posture block missing`);
    const posture = postureBlock[1];
    const knowledge = posture.match(/(?:knowledgeAuthority|authority):\s*"([^"]+)"/);
    assert.ok(knowledge !== null && knowledge[1] === "KNOWLEDGE_ONLY", `${surfaceId} knowledge authority`);
    const literal = (name, expected) => {
      const found = posture.match(new RegExp(`${name}:\\s*"([^"]+)"`));
      assert.ok(found !== null, `${surfaceId} posture ${name} missing`);
      assert.equal(found[1], expected, `${surfaceId} ${name}`);
    };
    literal("executionAuthority", "NONE");
    literal("runtimeConnection", "NOT_INCLUDED");
    literal("mutation", "NONE");
    literal("activation", "NOT_INCLUDED");
  };

  const completeRecord = stageDP12ForgeBindingMatrix[0].forgeBindingRecord;
  const fixtureSurfaces = completeRecord.surfaces;
  for (const commitment of POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS) {
    const ui = extractUi(commitment.surfaceId);
    assert.equal(ui.forgeCommit, commitment.forgeCommit, `${commitment.surfaceId}: ui forgeCommit tie`);
    assert.equal(ui.forgeTree, commitment.forgeTree, `${commitment.surfaceId}: ui forgeTree tie`);
    assert.equal(
      ui.companionRepository,
      commitment.companionRepository,
      `${commitment.surfaceId}: ui companionRepository tie`,
    );
    assert.equal(
      ui.companionCommit,
      commitment.companionCommit,
      `${commitment.surfaceId}: ui companionCommit tie`,
    );
    const entry = fixtureSurfaces[commitment.surfaceId];
    assert.ok(
      entry !== null && typeof entry === "object",
      `${commitment.surfaceId} missing from the fixture record`,
    );
    assert.equal(entry.forgeCommit, commitment.forgeCommit, `${commitment.surfaceId}: fixture commit tie`);
    assert.equal(entry.forgeTree, commitment.forgeTree, `${commitment.surfaceId}: fixture tree tie`);
    assert.equal(
      entry.companionRepository,
      commitment.companionRepository,
      `${commitment.surfaceId}: fixture companion repository tie`,
    );
    assert.equal(
      entry.companionCommit,
      commitment.companionCommit,
      `${commitment.surfaceId}: fixture companion commit tie`,
    );
    assert.equal(
      entry.surfaceProjectionPosture,
      commitment.surfaceProjectionPosture,
      `${commitment.surfaceId}: fixture posture tie`,
    );
    assert.equal(entry.surfaceKind, commitment.surfaceKind, `${commitment.surfaceId}: fixture kind tie`);
    postureLiteralsFromUi(commitment.surfaceId);
  }

  // The law anchor travels from the p5b ui's architecture binding, and
  // the complete record carries both pinned literals.
  const p5bBody = readFileSync(
    join(repoRoot, uiFiles["knowledge-forge-p5b-desktop-projection"]),
    "utf8",
  );
  assert.equal(
    match(p5bBody, /law:\s*"([^"]+)"/, "p5b law"),
    POND_STAGE_DP12_KNOWLEDGE_LAW_ANCHOR,
    "law anchor tie",
  );
  assert.equal(
    completeRecord.lawAnchor,
    POND_STAGE_DP12_KNOWLEDGE_LAW_ANCHOR,
    "record law anchor tie",
  );
  assert.equal(
    completeRecord.architectureCommit,
    POND_STAGE_DP12_ARCHITECTURE_COMMIT,
    "record architectureCommit tie",
  );

  // The p5e lifecycle literals carried untouched, in the ui and in the
  // record — workflow-console authority stays refused at both ends.
  const p5eBody = readFileSync(
    join(repoRoot, uiFiles["knowledge-forge-p5e-governed-workflow-console"]),
    "utf8",
  );
  assert.equal(
    match(p5eBody, /lifecycleAuthority:\s*"([^"]+)"/, "p5e lifecycleAuthority"),
    "EXTERNAL_REQUIRED_NOT_ESTABLISHED",
  );
  assert.equal(
    match(p5eBody, /persistence:\s*"([^"]+)"/, "p5e persistence"),
    "NONE",
  );
  assert.ok(/executable:\s*false/.test(p5eBody), "p5e executable false literal");
  assert.equal(
    completeRecord.workflowConsoleLifecycle.lifecycleAuthority,
    "EXTERNAL_REQUIRED_NOT_ESTABLISHED",
  );
  assert.equal(completeRecord.workflowConsoleLifecycle.persistence, "NONE");
  assert.strictEqual(completeRecord.workflowConsoleLifecycle.executable, false);
  assert.equal(
    completeRecord.workflowConsoleLifecycle.surfaceId,
    "knowledge-forge-p5e-governed-workflow-console",
  );

  // The composition desk-side copies equal the actual frozen D-P0 exports.
  const complete = stageDP12CompositionMatrix[0];
  assert.deepEqual(
    deepClone(complete.deskSourceContractFixture),
    deepClone(stageDP0TradingDeskSourceContract),
    "desk source contract copy equals D-P0 export",
  );
  assert.deepEqual(
    deepClone(complete.deskPresenceProjection),
    deepClone(stageDP0AgentPresenceProjection),
    "desk presence projection copy equals D-P0 export",
  );
});

// ---------------------------------------------------------------
// Block 3: forge-binding fail-closed — every provenance tamper refuses
// with an attributable check, a single flipped hex character never
// passes, and the ceiling stays refused on every arm.
// ---------------------------------------------------------------
block("forge-binding fail-closed", () => {
  const base = () => cloneCompleteForgeRecord();
  const p5d = (work) => work.surfaces["knowledge-forge-p5d-evidence-inspector"];
  const p5c = (work) => work.surfaces["knowledge-forge-p5c-skill-library-browser"];
  const p5b = (work) => work.surfaces["knowledge-forge-p5b-desktop-projection"];

  // A single flipped hex commit character: the record stays well-formed,
  // the identity check refuses.
  const flipped = base();
  p5d(flipped).forgeCommit = "d4cf038eb188975e9ac4a5d875c15998e366a8e0";
  const flippedFresh = collectForge(flipped);
  assert.equal(flippedFresh.reason, "forge_surface_provenance_incomplete");
  assert.deepEqual(deepClone(flippedFresh.unsatisfiedChecks), [
    "exact_forge_source_identity_per_surface",
  ]);
  assert.deepEqual(deepClone(flippedFresh.satisfiedChecks), [
    "binding_record_well_formed_frozen_vocabulary",
    "forge_surface_posture_literals_held",
    "knowledge_law_anchor_held",
    "surface_inventory_exact_and_receiver_recorded",
    "no_live_connection_lifecycle_or_mutation_posture",
  ]);
  assert.strictEqual(flippedFresh.forgeSurfaceProvenanceReverifiedByReceiver, false);
  assert.strictEqual(flippedFresh.forgeSurfaceAcceptedAsCurrentRegistryTruth, false);
  assert.strictEqual(flippedFresh.skillContentAdmitted, false);
  assert.strictEqual(flippedFresh.forgeLifecycleMutationAvailable, false);

  // Tree and companion tamper: identity refuses.
  const treeFlip = base();
  p5d(treeFlip).forgeTree = String(p5d(treeFlip).forgeTree).slice(0, 39) + "0";
  assert.equal(
    collectForge(treeFlip).reason,
    "forge_surface_provenance_incomplete",
  );
  const companionFlip = base();
  p5d(companionFlip).companionRepository = "ToadAid/not-the-architecture";
  assert.equal(
    collectForge(companionFlip).reason,
    "forge_surface_provenance_incomplete",
  );

  // A surface kind mislabeling its surface: identity refuses — the kind
  // is pinned to the same frozen table the commits are.
  const kindFlip = base();
  p5d(kindFlip).surfaceKind = "desktop_projection";
  const kindFresh = collectForge(kindFlip);
  assert.equal(kindFresh.reason, "forge_surface_provenance_incomplete");
  assert.deepEqual(deepClone(kindFresh.unsatisfiedChecks), [
    "exact_forge_source_identity_per_surface",
  ]);

  // A missing surface: incomplete inventory on a well-formed record.
  const missingSurface = base();
  delete missingSurface.surfaces["knowledge-forge-p5e-governed-workflow-console"];
  const missingFresh = collectForge(missingSurface);
  assert.equal(missingFresh.reason, "forge_surface_provenance_incomplete");
  assert.deepEqual(deepClone(missingFresh.unsatisfiedChecks), [
    "exact_forge_source_identity_per_surface",
    "forge_surface_posture_literals_held",
    "surface_inventory_exact_and_receiver_recorded",
  ]);
  assert.deepEqual(deepClone(missingFresh.satisfiedChecks), [
    "binding_record_well_formed_frozen_vocabulary",
    "knowledge_law_anchor_held",
    "no_live_connection_lifecycle_or_mutation_posture",
  ]);

  // A surface key outside the frozen id vocabulary is a frozen-vocabulary
  // breach: malformed record.
  const extraSurface = base();
  extraSurface.surfaces["knowledge-forge-p5x-wormhole"] = deepClone(
    extraSurface.surfaces["knowledge-forge-p5d-evidence-inspector"],
  );
  assert.equal(collectForge(extraSurface).reason, "binding_record_invalid");

  // An entry whose surfaceId does not match its map key: inventory check.
  const keyMismatch = base();
  p5b(keyMismatch).surfaceId = "knowledge-forge-p5c-skill-library-browser";
  assert.equal(
    collectForge(keyMismatch).reason,
    "forge_surface_provenance_incomplete",
  );
  const keyMismatch2 = base();
  p5c(keyMismatch2).surfaceId = "knowledge-forge-p5b-desktop-projection";
  const keyMismatch2Fresh = collectForge(keyMismatch2);
  assert.equal(keyMismatch2Fresh.reason, "forge_surface_provenance_incomplete");
  assert.deepEqual(deepClone(keyMismatch2Fresh.unsatisfiedChecks), [
    "surface_inventory_exact_and_receiver_recorded",
  ]);

  // Tampered projection postures and authority literals: posture check
  // refuses — the posture is not a dial.
  const postureTampers = [
    (work) => {
      p5d(work).surfaceProjectionPosture = "workflow_preview_not_live_mutation";
    },
    (work) => {
      p5d(work).authorityPosture.activation = "INCLUDED";
    },
    (work) => {
      p5d(work).authorityPosture.knowledgeAuthority = "EXECUTION";
    },
  ];
  for (const tamper of postureTampers) {
    const work = base();
    tamper(work);
    const fresh = collectForge(work);
    assert.equal(fresh.reason, "forge_surface_provenance_incomplete");
    assert.deepEqual(deepClone(fresh.unsatisfiedChecks), [
      "forge_surface_posture_literals_held",
    ]);
  }

  // The law anchor and the architecture commit are pinned: any drift
  // refuses on the law-anchor check alone.
  const lawFlip = base();
  lawFlip.lawAnchor = "Build capability. Manufacture authority when useful.";
  const lawFresh = collectForge(lawFlip);
  assert.equal(lawFresh.reason, "forge_surface_provenance_incomplete");
  assert.deepEqual(deepClone(lawFresh.unsatisfiedChecks), [
    "knowledge_law_anchor_held",
  ]);
  const archFlip = base();
  archFlip.architectureCommit = "d".repeat(40);
  const archFresh = collectForge(archFlip);
  assert.equal(archFresh.reason, "forge_surface_provenance_incomplete");
  assert.deepEqual(deepClone(archFresh.unsatisfiedChecks), [
    "knowledge_law_anchor_held",
  ]);

  // The workflow-console lifecycle is frozen: executable true is a
  // malformed record; a persistence tamper keeps the shape but refuses
  // the no-live-connection check.
  const lifecycleFlip = base();
  lifecycleFlip.workflowConsoleLifecycle.executable = true;
  assert.equal(collectForge(lifecycleFlip).reason, "binding_record_invalid");
  const persistenceFlip = base();
  persistenceFlip.workflowConsoleLifecycle.persistence = "FILESYSTEM";
  const persistenceFresh = collectForge(persistenceFlip);
  assert.equal(persistenceFresh.reason, "forge_surface_provenance_incomplete");
  assert.deepEqual(deepClone(persistenceFresh.unsatisfiedChecks), [
    "no_live_connection_lifecycle_or_mutation_posture",
  ]);

  // Forbidden keys injected anywhere in the record: malformed record.
  const grantInjection = base();
  grantInjection.grant = "grantId:sneaky";
  assert.equal(collectForge(grantInjection).reason, "binding_record_invalid");
  const fetchInjection = base();
  p5d(fetchInjection).fetch = "not-a-transport";
  assert.equal(collectForge(fetchInjection).reason, "binding_record_invalid");
  const walletInjection = base();
  p5c(walletInjection).wallet = "0x0000000000000000000000000000000000000000";
  assert.equal(collectForge(walletInjection).reason, "binding_record_invalid");

  // Key-count and kind tampering: extra and missing top-level keys are
  // malformed records too.
  const extraTopKey = base();
  extraTopKey.runtimeConnection = "included";
  assert.equal(collectForge(extraTopKey).reason, "binding_record_invalid");
  const missingTopKey = base();
  delete missingTopKey.workflowConsoleLifecycle;
  assert.equal(collectForge(missingTopKey).reason, "binding_record_invalid");

  // Non-record inputs: malformed record, the full check ladder
  // unsatisfied in declaration order.
  for (const junk of [null, 42, "binding", [], true]) {
    const fresh = collectForge(junk);
    assert.equal(fresh.reason, "binding_record_invalid");
    assert.equal(fresh.satisfiedChecks.length, 0);
    assert.deepEqual(deepClone(fresh.unsatisfiedChecks), ALL_UNSATISFIED_FORGE_CHECKS);
    assert.equal(fresh.bindingState, "not_established");
  }

  // The ceiling family stays refused on every fresh forge run so far.
  for (const fresh of dp12FreshRuns.filter(
    (entry) =>
      entry.contractVersion === "pond-knowledge-forge-surface-binding-d-p12",
  )) {
    assert.strictEqual(fresh.forgeSurfaceProvenanceReverifiedByReceiver, false);
    assert.strictEqual(fresh.forgeSurfaceAcceptedAsCurrentRegistryTruth, false);
    assert.strictEqual(fresh.skillContentAdmitted, false);
    assert.strictEqual(fresh.forgeLifecycleMutationAvailable, false);
    assert.strictEqual(fresh.runtimeActivationPosture, "not_included");
    assert.strictEqual(fresh.authority, "none");
  }
});

// ---------------------------------------------------------------
// Block 4: declared-mode fail-closed — refused bases carry their exact
// literal; vocabulary, agent-ref binding, staleness, unknown diagnoses,
// and the mandatory stricter-lane refusal posture all stay closed.
// ---------------------------------------------------------------
block("declared-mode fail-closed", () => {
  const base = () =>
    JSON.parse(JSON.stringify(stageDP12ModeMatrix[0].modeDeclarationRecord));

  // All five refused bases are valid-but-unsatisfied with their exact
  // literal carried in refusedDeclarationBasis — the vocabulary of "a
  // specialist must not infer its own permissions from its purpose."
  const refusedBases = [
    "inferred_from_purpose",
    "inferred_from_operator_prompt",
    "inferred_from_forge_surface_provenance",
    "model_self_selected",
    "derived_from_skill_library_state",
  ];
  for (const basis of refusedBases) {
    const record = base();
    record.declarationBasis = basis;
    const fresh = collectMode(record, evaluated, maximumAge);
    assert.equal(fresh.declaredModeState, "not_established", basis);
    assert.equal(fresh.reason, "declaration_basis_inference_refused", basis);
    assert.equal(fresh.refusedDeclarationBasis, basis);
    assert.deepEqual(deepClone(fresh.unsatisfiedChecks), [
      "declaration_basis_receiver_recorded_only",
    ]);
    assert.equal(fresh.declaredProfile, "TRADING");
    assert.deepEqual(deepClone(fresh.declarationFreshnessDiagnosis), {
      state: "fresh",
      reason: "within_declared_maximum_age",
      observationAgeMs: 0,
    });
    assert.ok(fresh.stricterLaneRefusalPosture !== null, basis);
    assert.strictEqual(fresh.stricterLaneRefusalPosture.laneAdmissionEstablished, false);
    assert.strictEqual(fresh.declaredProfileEstablishesAuthority, false);
    assert.strictEqual(fresh.declaredProfileEstablishesGrant, false);
    assert.strictEqual(fresh.declaredProfileEstablishesCapability, false);
    assert.strictEqual(fresh.declaredProfileEstablishesAdmission, false);
  }

  // Out-of-vocabulary profiles: reason 2, profile check unsatisfied, the
  // profile never recorded.
  for (const profile of ["TRADER", "EXECUTOR", "AUTOPILOT"]) {
    const record = base();
    record.declaredProfile = profile;
    const fresh = collectMode(record, evaluated, maximumAge);
    assert.equal(fresh.declaredModeState, "not_established", profile);
    assert.equal(fresh.reason, "declared_profile_out_of_vocabulary", profile);
    assert.equal(fresh.declaredProfile, "not_recorded");
    assert.deepEqual(deepClone(fresh.unsatisfiedChecks), [
      "declared_profile_in_vocabulary",
    ]);
    assert.strictEqual(fresh.refusedDeclarationBasis, null);
  }

  // Non-record and shape-invalid inputs: malformed record with the full
  // check ladder unsatisfied, posture dropped (null), the diagnosis
  // unknown.
  const malformedFresh = collectMode(
    (() => {
      const record = base();
      record.declaredProfile = 42;
      return record;
    })(),
    evaluated,
    maximumAge,
  );
  assert.equal(malformedFresh.reason, "declaration_record_invalid");
  assert.deepEqual(deepClone(malformedFresh.unsatisfiedChecks), ALL_UNSATISFIED_MODE_CHECKS);
  assert.equal(malformedFresh.satisfiedChecks.length, 0);
  assert.strictEqual(malformedFresh.stricterLaneRefusalPosture, null);
  assert.deepEqual(deepClone(malformedFresh.declarationFreshnessDiagnosis), {
    state: "unknown",
    reason: "observation_metadata_missing_or_invalid",
    observationAgeMs: null,
  });

  // An agent ref outside the agent: prefix is malformed — the declaration
  // cannot bind a principal ref or an empty agent ref.
  for (const foreignAgentRef of [
    "principal:fixture:stage-d-p0:local-principal",
    "agent:",
  ]) {
    const record = base();
    record.agentRef = foreignAgentRef;
    assert.equal(
      collectMode(record, evaluated, maximumAge).reason,
      "declaration_record_invalid",
      foreignAgentRef,
    );
  }

  // A record attempting two profile fields smuggles an unknown key.
  const twoProfiles = base();
  twoProfiles.declaredProfileAlias = "HELPER";
  assert.equal(
    collectMode(twoProfiles, evaluated, maximumAge).reason,
    "declaration_record_invalid",
  );

  // Staleness recomputed one ms past the declared maximum age.
  const stale = JSON.parse(
    JSON.stringify(stageDP12ModeMatrix[3].modeDeclarationRecord),
  );
  const staleFresh = collectMode(stale, evaluated, maximumAge);
  assert.equal(
    staleFresh.reason,
    "declaration_not_fresh_within_declared_maximum_age",
  );
  assert.deepEqual(deepClone(staleFresh.unsatisfiedChecks), [
    "declaration_fresh_within_declared_maximum_age",
  ]);
  assert.deepEqual(deepClone(staleFresh.declarationFreshnessDiagnosis), {
    state: "stale",
    reason: "declared_maximum_age_expired",
    observationAgeMs: 60_001,
  });
  assert.strictEqual(staleFresh.declaredProfile, "TRADING");

  // Unknown-diagnosis arms through the assessor: every invalid pair
  // renders a D-P2 unknown literal with observationAgeMs null, and the
  // declaration still refuses — unknown never passes.
  const unknownAssessorArms = [
    ["evaluated_invalid", "not-a-number", maximumAge, "evaluation_time_invalid"],
    ["maximum_age_negative", evaluated, -1, "maximum_age_invalid"],
    ["maximum_age_fractional", evaluated, 1.5, "maximum_age_invalid"],
  ];
  for (const [label, evalValue, maxAge, expectedReason] of unknownAssessorArms) {
    const fresh = collectMode(base(), evalValue, maxAge);
    assert.equal(
      fresh.reason,
      "declaration_not_fresh_within_declared_maximum_age",
      label,
    );
    assert.deepEqual(deepClone(fresh.declarationFreshnessDiagnosis), {
      state: "unknown",
      reason: expectedReason,
      observationAgeMs: null,
    });
  }
  const futureDeclared = base();
  futureDeclared.declarationEvent.declared_at_epoch_ms = evaluated + 1;
  const futureFresh = collectMode(futureDeclared, evaluated, maximumAge);
  assert.equal(futureFresh.reason, "declaration_not_fresh_within_declared_maximum_age");
  assert.deepEqual(deepClone(futureFresh.declarationFreshnessDiagnosis), {
    state: "unknown",
    reason: "observation_time_in_future",
    observationAgeMs: null,
  });

  // Metadata posture literals are declaration-time only: a tampered
  // posture literal is a malformed record, not a reinterpretable field.
  const metadataTampers = [
    (record) => {
      record.declarationEvent.currentness_posture = "established_receiver";
    },
    (record) => {
      record.declarationEvent.freshness_basis = "runtime_continuous";
    },
  ];
  for (const tamper of metadataTampers) {
    const record = base();
    tamper(record);
    assert.equal(
      collectMode(record, evaluated, maximumAge).reason,
      "declaration_record_invalid",
    );
  }

  // The stricter-lane refusal posture is mandatory: a literal flip stays
  // a held-posture refusal on check 6, with the tampered values echoed —
  // never silently normalized.
  const postureFlip = base();
  postureFlip.stricterLaneRefusalPosture.walletOrSigningAuthorityRefused = false;
  const postureFresh = collectMode(postureFlip, evaluated, maximumAge);
  assert.equal(
    postureFresh.reason,
    "declaration_not_fresh_within_declared_maximum_age",
  );
  assert.deepEqual(deepClone(postureFresh.unsatisfiedChecks), [
    "stricter_lane_refusal_posture_held",
  ]);
  assert.ok(postureFresh.stricterLaneRefusalPosture !== null);
  assert.strictEqual(
    postureFresh.stricterLaneRefusalPosture.walletOrSigningAuthorityRefused,
    false,
  );
  assert.strictEqual(
    postureFresh.stricterLaneRefusalPosture.laneAdmissionEstablished,
    false,
  );

  // A posture key removed entirely: malformed record and a null posture.
  const postureMissing = base();
  delete postureMissing.stricterLaneRefusalPosture.tradingExecutionRefused;
  const postureMissingFresh = collectMode(postureMissing, evaluated, maximumAge);
  assert.equal(postureMissingFresh.reason, "declaration_record_invalid");
  assert.strictEqual(postureMissingFresh.stricterLaneRefusalPosture, null);

  // Every collector mode run so far keeps the declaration evidence-only:
  // no authority, no admission, no lane, no content.
  for (const fresh of dp12FreshRuns.filter(
    (entry) =>
      entry.contractVersion === "pond-agent-declared-operational-mode-d-p12",
  )) {
    assert.strictEqual(fresh.currentTruthAdmitted, false);
    assert.strictEqual(fresh.credentialAdmitted, false);
    assert.strictEqual(fresh.runtimeActivationPosture, "not_included");
    assert.strictEqual(fresh.authority, "none");
    if (fresh.stricterLaneRefusalPosture !== null) {
      assert.strictEqual(fresh.stricterLaneRefusalPosture.laneAdmissionEstablished, false);
    }
  }
});

// ---------------------------------------------------------------
// Block 5: composition fail-closed — every broken leg refuses with honest
// mapped sub-states; the forge leg's invalid record outranks the mode
// leg's; a valid-but-unbound declaration is not a ladder reason.
// ---------------------------------------------------------------
block("composition fail-closed", () => {
  const base = () => JSON.parse(JSON.stringify(stageDP12CompositionMatrix[0]));

  // Forge invalid outranks the mode leg's refusal: the short-circuit
  // order holds even when both legs are broken at once.
  const forgeAndModeBroken = base();
  forgeAndModeBroken.forgeBindingRecord = "not-a-record";
  forgeAndModeBroken.modeDeclarationRecord.declaredProfile = "TRADER";
  const orderFresh = collectComposition(forgeAndModeBroken);
  assert.equal(orderFresh.reason, "forge_binding_record_invalid");
  assert.deepEqual(deepClone(orderFresh.satisfiedChecks), []);
  assert.deepEqual(deepClone(orderFresh.unsatisfiedChecks), ALL_COMPOSITION_CHECKS);
  assert.equal(orderFresh.mappedForgeBindingReason, "binding_record_invalid");
  assert.equal(orderFresh.mappedDeclaredModeReason, "declared_profile_out_of_vocabulary");

  // Mode record invalid, forge complete: the second short-circuit arm.
  const modeBroken = base();
  modeBroken.modeDeclarationRecord = null;
  const modeBrokenFresh = collectComposition(modeBroken);
  assert.equal(modeBrokenFresh.reason, "declared_mode_record_invalid");
  assert.deepEqual(deepClone(modeBrokenFresh.satisfiedChecks), [
    "forge_surface_binding_fully_satisfied_dp12",
  ]);
  assert.equal(
    modeBrokenFresh.mappedForgeBindingState,
    "fixture_bound_forge_surface_provenance",
  );
  assert.equal(modeBrokenFresh.mappedDeclaredModeReason, "declaration_record_invalid");

  // Desk leg broken: the frozen D-P1 assessor honestly refuses the
  // projection, and the mapped sub-state carries its refusal verbatim.
  const deskBroken = base();
  deskBroken.deskPresenceProjection = {
    ...deepClone(deskBroken.deskPresenceProjection),
    posture: "tampered_projection_posture",
  };
  const deskFresh = collectComposition(deskBroken);
  assert.equal(deskFresh.reason, "desk_source_binding_not_established");
  assert.equal(deskFresh.mappedDeskSourceBindingState, "not_established");
  assert.equal(deskFresh.mappedDeskSourceBindingReason, "projection_invalid");
  assert.deepEqual(
    deepClone(deskFresh.mappedDeskSourceUnsatisfiedChecks),
    ALL_UNSATISFIED_DP1_CHECKS,
  );
  assert.equal(deskFresh.mappedForgeBindingState, "fixture_bound_forge_surface_provenance");
  assert.equal(
    deskFresh.mappedDeclaredModeState,
    "receiver_recorded_declared_mode_evidence_only",
  );
  assert.deepEqual(deepClone(deskFresh.mappedDeclaredModeUnsatisfiedChecks), []);

  // A source-contract-side desk break refuses too, mapped honestly.
  const deskContractBroken = base();
  deskContractBroken.deskSourceContractFixture = {
    ...deepClone(deskContractBroken.deskSourceContractFixture),
    repository: "trading-desk-broken",
  };
  const deskContractFresh = collectComposition(deskContractBroken);
  assert.equal(deskContractFresh.reason, "desk_source_binding_not_established");
  assert.equal(
    deskContractFresh.mappedDeskSourceBindingReason,
    "source_contract_fixture_invalid",
  );

  // Mode leg refused on an inference basis: the ladder reason declares
  // the refusal and the mapped sub-state carries the exact basis.
  const modeRefused = base();
  modeRefused.modeDeclarationRecord = stageDP12ModeMatrix[2].modeDeclarationRecord;
  const modeRefusedFresh = collectComposition(modeRefused);
  assert.equal(modeRefusedFresh.reason, "declared_mode_not_established");
  assert.equal(
    modeRefusedFresh.mappedDeclaredModeReason,
    "declaration_basis_inference_refused",
  );
  assert.deepEqual(deepClone(modeRefusedFresh.mappedDeclaredModeUnsatisfiedChecks), [
    "declaration_basis_receiver_recorded_only",
  ]);
  assert.equal(
    modeRefusedFresh.mappedForgeBindingState,
    "fixture_bound_forge_surface_provenance",
  );
  assert.equal(
    modeRefusedFresh.mappedDeskSourceBindingState,
    "fixture_bound_committed_source_contract",
  );

  // A foreign receiver-held agent ref unbinds the declaration: the mode
  // leg itself stays satisfied, so the refusal is the honest incomplete
  // proof — with the agent-ref tie named in the composition ladder.
  const foreignHeld = base();
  foreignHeld.receiverHeldAgentRef = "agent:fixture:stage-d-p0:community-agent-slot";
  const foreignHeldFresh = collectComposition(foreignHeld);
  assert.equal(foreignHeldFresh.reason, "composition_proof_incomplete");
  assert.deepEqual(deepClone(foreignHeldFresh.unsatisfiedChecks), [
    "declared_operational_mode_recorded_dp12",
  ]);
  assert.deepEqual(deepClone(foreignHeldFresh.mappedDeclaredModeUnsatisfiedChecks), []);
  assert.equal(
    foreignHeldFresh.mappedDeclaredModeState,
    "receiver_recorded_declared_mode_evidence_only",
  );

  // Staleness maps through the declared-mode leg, diagnosis carried.
  const staleComp = base();
  staleComp.modeDeclarationRecord = stageDP12ModeMatrix[3].modeDeclarationRecord;
  const staleCompFresh = collectComposition(staleComp);
  assert.equal(staleCompFresh.reason, "declared_mode_not_established");
  assert.deepEqual(deepClone(staleCompFresh.mappedDeclaredModeUnsatisfiedChecks), [
    "declaration_fresh_within_declared_maximum_age",
  ]);
  assert.deepEqual(deepClone(staleCompFresh.declarationFreshnessDiagnosis), {
    state: "stale",
    reason: "declared_maximum_age_expired",
    observationAgeMs: 60_001,
  });

  // An invalid evaluation pair maps as an unknown diagnosis and refuses.
  const unknownPair = base();
  unknownPair.receiverEvaluatedAtEpochMs = "invalid";
  const unknownPairFresh = collectComposition(unknownPair);
  assert.equal(unknownPairFresh.reason, "declared_mode_not_established");
  assert.deepEqual(deepClone(unknownPairFresh.declarationFreshnessDiagnosis), {
    state: "unknown",
    reason: "evaluation_time_invalid",
    observationAgeMs: null,
  });

  // The ceiling never lifts: forgeBoundDeclaredProfileEstablishes* stays
  // false on every collected composition run, and no content ever loads.
  for (const fresh of dp12FreshRuns.filter(
    (entry) =>
      entry.contractVersion ===
      "pond-knowledge-forge-bound-declared-mode-composition-d-p12",
  )) {
    assert.strictEqual(fresh.forgeBoundDeclaredProfileEstablishesGrant, false);
    assert.strictEqual(
      fresh.forgeBoundDeclaredProfileEstablishesCapability,
      false,
    );
    assert.strictEqual(fresh.declaredProfileEstablishesAuthority, false);
    assert.strictEqual(fresh.declaredProfileEstablishesGrant, false);
    assert.strictEqual(fresh.declaredProfileEstablishesCapability, false);
    assert.strictEqual(fresh.declaredProfileEstablishesAdmission, false);
    assert.strictEqual(fresh.knowledgeContentLoadedIntoAgentContext, false);
    assert.strictEqual(fresh.skillContentAdmitted, false);
    assert.strictEqual(fresh.forgeLifecycleMutationAvailable, false);
    assert.strictEqual(fresh.credentialAdmitted, false);
    assert.strictEqual(fresh.currentTruthAdmitted, false);
    assert.strictEqual(fresh.runtimeActivationPosture, "not_included");
    assert.strictEqual(fresh.authority, "none");
  }
});

// ---------------------------------------------------------------
// Block 6: frozen widening proof — the frozen D-P5…D-P11 pins did not
// move, the composed input re-run through the frozen D-P1 assessor still
// yields its frozen literal set, and no D-P12 assessment carries a
// frozen tuple name.
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

  // The frozen D-P9 mapping assessor over the D-P11 positive arm's
  // non-null claim: the seam stays exactly as it froze — a held receiver
  // verification literal still hardcodes onchain verification false, in
  // the frozen vocabulary, forever.
  const mappingSeamRun = assessPondErc8004IdentityMapping({
    mappingRecord: stageDP11VerificationComplete.dp9MappingRecord,
    receiverHeldPrincipalRef,
    receiverVerification: "receiver_observed_onchain_identity_evidence",
  });
  assert.equal(mappingSeamRun.reason, "onchain_verification_not_performed", "frozen seam");
  assert.equal(mappingSeamRun.onchainVerificationState, "not_verified", "frozen seam");
  assert.equal(
    mappingSeamRun.mappingEstablishmentState,
    "fixture_structural_receiver_owned_mapping",
    "frozen seam establishment",
  );
  assert.deepEqual(
    deepClone(mappingSeamRun.unsatisfiedChecks),
    ["onchain_verification_evidence_independently_observed"],
    "frozen seam unsatisfied",
  );
  // The frozen D-P9 mapping over its own established fixture record
  // refuses all the same.
  const frozenFixtureRun = assessPondErc8004IdentityMapping({
    mappingRecord: stageDP9MappingEstablished.mappingRecord,
    receiverHeldPrincipalRef,
    receiverVerification: "not_performed",
  });
  assert.equal(frozenFixtureRun.reason, "onchain_verification_not_performed");

  // The D-P9 readiness composition still hardcodes receiverVerification
  // "not_performed" — a declared profile widens readiness nothing.
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

  // The composed input re-run through the frozen D-P1 assessor still
  // yields its frozen literal set — the composition's third leg is the
  // frozen assessor itself, untouched, and the mapped sub-state equals
  // the live re-run.
  const complete = stageDP12CompositionMatrix[0];
  const deskFresh = assessPondAgentPresenceSourceBinding({
    sourceContractFixture: complete.deskSourceContractFixture,
    projection: complete.deskPresenceProjection,
  });
  assert.equal(deskFresh.reason, "fixture_source_binding_structurally_admissible");
  assert.deepEqual(deepClone(deskFresh.unsatisfiedChecks), []);
  assert.equal(deskFresh.bindingState, "fixture_bound_committed_source_contract");
  assert.equal(
    stageDP12CompositionMatrix[0].assessment.mappedDeskSourceBindingState,
    deskFresh.bindingState,
  );
  assert.equal(
    stageDP12CompositionMatrix[0].assessment.mappedDeskSourceBindingReason,
    deskFresh.reason,
  );

  // No D-P12 assessment carries any frozen tuple name; the frozen
  // D-P0…D-P11 family's names stay the frozen family's only carriers.
  const frozenNames = [
    "privateReadsActivated",
    "mappingEstablishmentState",
    "onchainVerificationState",
    "mappingEstablishesGrant",
    "erc8004IdentityAcceptedAsPrincipalId",
    "onchainIdentityAcceptedAsAuthentication",
  ];
  for (const entry of stageDP12ForgeBindingMatrix) {
    assertLacksKeys(entry.assessment, frozenNames, `forge:${entry.fixtureLabel}`);
  }
  for (const entry of stageDP12ModeMatrix) {
    assertLacksKeys(entry.assessment, frozenNames, `mode:${entry.fixtureLabel}`);
  }
  for (const entry of stageDP12CompositionMatrix) {
    assertLacksKeys(entry.assessment, frozenNames, `composition:${entry.fixtureLabel}`);
  }
  for (const fresh of dp12FreshRuns) {
    assertLacksKeys(fresh, frozenNames, "fresh D-P12 assessment");
  }

  // The five uppercase forge posture literals carried untouched on the
  // complete binding's every surface, plus the p5e lifecycle set.
  const completeRecordUppercase = stageDP12ForgeBindingMatrix[0].forgeBindingRecord;
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
// Block 7: freshness tie — the D-P2 boundary is inclusive; the
// composition's carried diagnosis deep-equals its mode leg's on every
// composition arm.
// ---------------------------------------------------------------
block("freshness tie", () => {
  // Exactly at the declared maximum age: fresh, inclusive, and the
  // carried observation age is the maximum itself.
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
  assert.equal(pastBoundary.reason, "declared_maximum_age_expired");
  assert.strictEqual(pastBoundary.observationAgeMs, maximumAge + 1);

  // The composition's carried diagnosis deep-equals its mode leg's on
  // every arm, recomputed or pinned.
  for (const entry of stageDP12CompositionMatrix) {
    const fresh = assessPondKnowledgeForgeBoundDeclaredModeComposition(entry);
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
// carry no D-P12 vocabulary (the binding travels through the receiver's
// record, never into the ui); the frozen network constants stay banned
// under src/.
// ---------------------------------------------------------------
block("hygiene", () => {
  const fixturePath = join(
    repoRoot,
    "src/fixtures/stage-d-p12-knowledge-forge-binding-and-declared-mode.ts",
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
    "src/contracts/pond-knowledge-forge-surface-binding.ts",
    "src/contracts/pond-agent-declared-operational-mode.ts",
    "src/contracts/pond-knowledge-forge-bound-declared-mode-composition.ts",
    "src/fixtures/stage-d-p12-knowledge-forge-binding-and-declared-mode.ts",
  ]) {
    const body = readFileSync(join(repoRoot, relativePath), "utf8");
    for (const needle of bannedTextNeedles) {
      assert.ok(
        !body.includes(needle),
        `banned text ${needle} in ${relativePath}`,
      );
    }
  }

  // The four ui forge modules stay untouched by this cut: no D-P12
  // vocabulary, no contract names, no "d-p12" marker — the binding is
  // receiver-owned vocabulary about the ui, never ui vocabulary.
  for (const relativePath of [
    "ui/pond-knowledge-forge.js",
    "ui/pond-knowledge-forge-library.js",
    "ui/pond-knowledge-forge-inspector.js",
    "ui/pond-knowledge-forge-workflow.js",
  ]) {
    const body = readFileSync(join(repoRoot, relativePath), "utf8");
    for (const needle of [
      "d-p12",
      "pond-knowledge-forge-surface-binding",
      "declared-operational-mode",
      "forge-bound-declared-mode",
      "PondStageDP12",
    ]) {
      assert.ok(
        !body.includes(needle),
        `ui file carries D-P12 vocabulary ${needle}: ${relativePath}`,
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

  // The forbidden forge-binding inventory is intact and its keys appear
  // in the assessor's vocabulary; the count is pinned.
  assert.equal(POND_STAGE_DP12_FORBIDDEN_FORGE_BINDING_KEYS.length, 16);
  const contractText = readFileSync(
    join(repoRoot, "src/contracts/pond-knowledge-forge-surface-binding.ts"),
    "utf8",
  );
  for (const key of POND_STAGE_DP12_FORBIDDEN_FORGE_BINDING_KEYS) {
    assert.ok(
      contractText.includes(`"${key}"`),
      `forbidden key ${key} missing from the contract inventory`,
    );
  }
});

console.log(
  "POND_STAGE_DP12_KNOWLEDGE_FORGE_BINDING_AND_DECLARED_MODE_SELFTEST_PASS",
);