// Stage D-P7 live shell wiring selftest. Drives the shell's local
// authentication observation three ways — the committed generated bundle
// (tie against the directly-imported TS contract), the pure observation
// step with pinned times, and the documentRef-injected render with a
// minimal DOM stub — then pins the static markup contract on
// ui/pond-desktop.html and the module-text hygiene bans. Every assessment
// is expected to carry the frozen contract's refused tuple: the shell
// observes the fact of the event and never performs an authentication,
// issues a PrincipalId, or grants authority.

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import {
  observeLocalAuthenticationEvent,
  renderPondLocalAuthentication,
} from "../ui/pond-local-authentication.js";
import {
  assessPondLocalPrincipalAuthenticationObservation as tsAssessObservation,
  POND_STAGE_DP6_FORBIDDEN_OBSERVATION_KEYS,
} from "../src/contracts/pond-local-principal-authentication-observation.ts";
import { stageDP0LocalPrincipalRef as tsStageDP0LocalPrincipalRef } from "../src/fixtures/stage-d-p0-agent-presence.ts";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS as tsMaximumAgeMs } from "../src/contracts/pond-agent-presence-observation-intake.ts";
import {
  POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
  assessPondLocalPrincipalAuthenticationObservation,
  stageDP0LocalPrincipalRef,
} from "../ui/generated/pond-stage-d-local-authentication.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const html = await readFile(path.join(root, "ui", "pond-desktop.html"), "utf8");
const moduleText = await readFile(
  path.join(root, "ui", "pond-local-authentication.js"),
  "utf8",
);
const packageJson = JSON.parse(
  await readFile(path.join(root, "package.json"), "utf8"),
);

// ---------------------------------------------------------------------------
// Block 1 — generated-bundle tie: the committed artifact is the only bridge
// between the shell and the frozen contract code, so the selftest imports it
// directly and proves ref identity and behavioral parity against the TS
// sources.
// ---------------------------------------------------------------------------

assert.equal(
  stageDP0LocalPrincipalRef,
  "principal:fixture:stage-d-p0:local-principal",
);
assert.equal(stageDP0LocalPrincipalRef, tsStageDP0LocalPrincipalRef);
assert.equal(POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS, 60_000);
assert.equal(POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS, tsMaximumAgeMs);
assert.equal(typeof assessPondLocalPrincipalAuthenticationObservation, "function");

const pinnedObservedAt = 1_800_000_030_000;
const pinnedEvaluatedAt = 1_800_000_060_000;

const tsObservation = observeLocalAuthenticationEvent({
  observedAtEpochMs: pinnedObservedAt,
  evaluatedAtEpochMs: pinnedEvaluatedAt,
});
const bundleAssessment = assessPondLocalPrincipalAuthenticationObservation({
  observationRecord: tsObservation.observationRecord,
  receiverHeldPrincipalRef: tsStageDP0LocalPrincipalRef,
  evaluatedAtEpochMs: pinnedEvaluatedAt,
  maximumAgeMs: tsMaximumAgeMs,
});
assert.deepEqual(bundleAssessment, tsObservation.assessment);
assert.deepEqual(
  tsAssessObservation({
    observationRecord: tsObservation.observationRecord,
    receiverHeldPrincipalRef: tsStageDP0LocalPrincipalRef,
    evaluatedAtEpochMs: pinnedEvaluatedAt,
    maximumAgeMs: tsMaximumAgeMs,
  }),
  tsObservation.assessment,
);

// ---------------------------------------------------------------------------
// Block 2 — pure-logic drive with pinned times: the shell-built record is
// the complete-arm D-P6 record, the assessment is all-satisfied yet
// structurally only, and the refused tuple is pinned.
// ---------------------------------------------------------------------------

const { observationRecord, assessment } = tsObservation;

assert.deepEqual(Object.keys(observationRecord).sort(), [
  "authenticationPosture",
  "authority",
  "authorityPosture",
  "contractVersion",
  "eventState",
  "kind",
  "memoryLaneExclusionPosture",
  "observationChannel",
  "observationMetadata",
  "principalRef",
  "secretFreeFieldInventoryPosture",
]);
assert.equal(
  observationRecord.contractVersion,
  "pond-local-principal-authentication-observation-d-p6",
);
assert.equal(
  observationRecord.kind,
  "pond-local-principal-authentication-observation",
);
assert.equal(observationRecord.principalRef, stageDP0LocalPrincipalRef);
assert.equal(
  observationRecord.eventState,
  "receiver_observed_local_authentication_event",
);
assert.equal(
  observationRecord.observationChannel,
  "receiver_owned_local_shell_channel",
);
assert.equal(
  observationRecord.secretFreeFieldInventoryPosture,
  "inventory_secret_free_no_credential_field_observed",
);
assert.equal(
  observationRecord.memoryLaneExclusionPosture,
  "observation_excludes_memory_narrative_transcript_lanes",
);
assert.equal(
  observationRecord.authenticationPosture,
  "fixture_structural_only_no_live_authentication",
);
assert.equal(observationRecord.authority, "none");
assert.equal(
  observationRecord.observationMetadata.observed_at_epoch_ms,
  pinnedObservedAt,
);
assert.equal(
  observationRecord.observationMetadata.freshness_basis,
  "source_observation_time_only",
);
assert.equal(
  observationRecord.observationMetadata.currentness_posture,
  "not_established_consumer_must_evaluate",
);

// The gesture contributes only the clock: no operator-authored content
// entered the record, and the forbidden-key walk passes.
for (const key of [
  ...Object.keys(observationRecord),
  ...Object.keys(observationRecord.observationMetadata),
]) {
  assert.equal(
    POND_STAGE_DP6_FORBIDDEN_OBSERVATION_KEYS.includes(key),
    false,
    `shell-built record must not carry forbidden key: ${key}`,
  );
}

assert.deepEqual(assessment.satisfiedChecks, [
  "authentication_event_receiver_observed",
  "authentication_event_bound_to_receiver_held_principal",
  "authentication_observation_channel_receiver_owned",
  "authentication_observation_secret_free",
  "authentication_observation_fresh",
  "authentication_observation_excludes_memory_and_lane_content",
  "authentication_observation_grants_no_authority",
]);
assert.deepEqual(assessment.unsatisfiedChecks, []);
assert.equal(
  assessment.authenticationObservationState,
  "fixture_observed_local_authentication",
);
assert.equal(assessment.reason, "all_observation_checks_satisfied");
assert.deepEqual(assessment.freshnessDiagnosis, {
  state: "fresh",
  reason: "within_declared_maximum_age",
  observationAgeMs: 30_000,
});
assert.equal(
  assessment.authenticationPosture,
  "fixture_structural_only_no_live_authentication",
);
assert.equal(assessment.liveAuthenticationPerformed, false);
assert.equal(assessment.observedPresenceAcceptedAsAuthentication, false);
assert.equal(assessment.observedIdentityAcceptedAsPrincipalId, false);
assert.equal(assessment.principalIdIssued, false);
assert.equal(assessment.personalMemoryContentAdmitted, false);
assert.equal(assessment.currentTruthAdmitted, false);
assert.equal(assessment.runtimeActivationPosture, "not_included");
assert.equal(assessment.authority, "none");

assert.equal(Object.isFrozen(observationRecord), true);
assert.equal(Object.isFrozen(observationRecord.observationMetadata), true);
assert.equal(Object.isFrozen(assessment), true);
assert.equal(Object.isFrozen(assessment.satisfiedChecks), true);

// Same-instant observation: the browser tail reads the clock once, so the
// age is exactly zero and still inclusive-fresh.
const sameInstant = observeLocalAuthenticationEvent({
  observedAtEpochMs: pinnedEvaluatedAt,
  evaluatedAtEpochMs: pinnedEvaluatedAt,
});
assert.deepEqual(sameInstant.assessment.freshnessDiagnosis, {
  state: "fresh",
  reason: "within_declared_maximum_age",
  observationAgeMs: 0,
});
assert.equal(
  sameInstant.assessment.authenticationObservationState,
  "fixture_observed_local_authentication",
);

// JSON round-trip: the observation is plain serializable data.
assert.deepEqual(
  JSON.parse(JSON.stringify(tsObservation)),
  {
    observationRecord,
    assessment,
  },
);

// ---------------------------------------------------------------------------
// Block 3 — fail-closed drives: a stale evaluation, a mismatched
// receiver-held ref, and invalid timestamps all fail closed through the
// same frozen vocabulary, without throwing.
// ---------------------------------------------------------------------------

const stale = observeLocalAuthenticationEvent({
  observedAtEpochMs: pinnedObservedAt,
  evaluatedAtEpochMs: pinnedObservedAt + 80_000,
});
assert.deepEqual(stale.assessment.freshnessDiagnosis, {
  state: "stale",
  reason: "declared_maximum_age_expired",
  observationAgeMs: 80_000,
});
assert.equal(
  stale.assessment.satisfiedChecks.includes("authentication_observation_fresh"),
  false,
);
assert.deepEqual(stale.assessment.unsatisfiedChecks, [
  "authentication_observation_fresh",
]);
assert.equal(
  stale.assessment.authenticationObservationState,
  "not_observed",
);
assert.equal(stale.assessment.reason, "receiver_authentication_proof_incomplete");
assert.equal(stale.assessment.liveAuthenticationPerformed, false);

const futureObservation = observeLocalAuthenticationEvent({
  observedAtEpochMs: pinnedEvaluatedAt,
  evaluatedAtEpochMs: pinnedObservedAt,
});
assert.deepEqual(futureObservation.assessment.freshnessDiagnosis, {
  state: "unknown",
  reason: "observation_time_in_future",
  observationAgeMs: null,
});
assert.equal(
  futureObservation.assessment.reason,
  "receiver_authentication_proof_incomplete",
);

const invalidTimestamps = observeLocalAuthenticationEvent({
  observedAtEpochMs: "not-a-clock",
  evaluatedAtEpochMs: Number.NaN,
});
assert.equal(invalidTimestamps.assessment.reason, "observation_record_invalid");
assert.equal(
  invalidTimestamps.assessment.observationRecordVersion,
  "invalid",
);
assert.deepEqual(invalidTimestamps.assessment.satisfiedChecks, []);
assert.deepEqual(
  invalidTimestamps.assessment.unsatisfiedChecks,
  assessment.satisfiedChecks,
);
assert.equal(invalidTimestamps.assessment.liveAuthenticationPerformed, false);

const invalidEvaluationTime = observeLocalAuthenticationEvent({
  observedAtEpochMs: pinnedObservedAt,
  evaluatedAtEpochMs: Number.NaN,
});
assert.equal(
  invalidEvaluationTime.assessment.reason,
  "receiver_authentication_proof_incomplete",
);
assert.deepEqual(invalidEvaluationTime.assessment.freshnessDiagnosis, {
  state: "unknown",
  reason: "evaluation_time_invalid",
  observationAgeMs: null,
});

const mismatchedReceiver = assessPondLocalPrincipalAuthenticationObservation({
  observationRecord,
  receiverHeldPrincipalRef: "principal:fixture:stage-d-p0:someone-else",
  evaluatedAtEpochMs: pinnedEvaluatedAt,
  maximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
});
assert.equal(
  mismatchedReceiver.reason,
  "receiver_authentication_proof_incomplete",
);
assert.deepEqual(mismatchedReceiver.unsatisfiedChecks, [
  "authentication_event_bound_to_receiver_held_principal",
]);

// ---------------------------------------------------------------------------
// Block 4 — render drive with a minimal DOM stub: fail-closed on missing
// document or elements, and the bound click runs the pure observation and
// renders the refused assessment verbatim.
// ---------------------------------------------------------------------------

assert.equal(renderPondLocalAuthentication(undefined), false);

const elementStub = () => {
  const element = {
    className: "",
    textContent: "",
    children: [],
    listeners: {},
    dataset: {},
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
    root: elementStub(),
    gestureButton: elementStub(),
    status: elementStub(),
  };
  const created = [];
  return {
    nodes,
    created,
    querySelector(selector) {
      if (selector === "[data-local-authentication]") return nodes.root;
      if (selector === "[data-local-authentication-gesture]")
        return nodes.gestureButton;
      if (selector === "[data-local-authentication-status]") return nodes.status;
      return null;
    },
    createElement() {
      const node = elementStub();
      created.push(node);
      return node;
    },
  };
};

const missingElementDocument = documentStub();
missingElementDocument.nodes.status = null;
assert.equal(renderPondLocalAuthentication(missingElementDocument), false);

const renderedDocument = documentStub();
assert.equal(renderPondLocalAuthentication(renderedDocument), true);
assert.equal(
  renderedDocument.nodes.root.dataset.localAuthenticationRendered,
  "true",
);
assert.equal(
  renderedDocument.nodes.status.children.length,
  1,
  "initial render must show the not-observed posture",
);
assert.match(
  renderedDocument.nodes.status.children[0].textContent,
  /Not observed — the shell has not observed a local authentication event in this session\./,
);

const collectText = (node) =>
  [node.textContent, ...node.children.map(collectText)].join("\n");

renderedDocument.nodes.gestureButton.listeners.click[0]();
const observedText = collectText(renderedDocument.nodes.status);
assert.match(
  observedText,
  /Observed local authentication event · fixture_observed_local_authentication/,
);
assert.match(observedText, /Reason\nall_observation_checks_satisfied/);
assert.match(
  observedText,
  /Freshness\nfresh · within_declared_maximum_age · age 0ms/,
);
assert.match(
  observedText,
  /Posture\nfixture_structural_only_no_live_authentication/,
);
assert.match(
  observedText,
  /Satisfied checks\nauthentication_event_receiver_observed, authentication_event_bound_to_receiver_held_principal, authentication_observation_channel_receiver_owned, authentication_observation_secret_free, authentication_observation_fresh, authentication_observation_excludes_memory_and_lane_content, authentication_observation_grants_no_authority/,
);
assert.match(observedText, /Live authentication performed\nfalse/);
assert.match(observedText, /PrincipalId issued\nfalse/);
assert.match(observedText, /Authority\nnone/);
assert.match(observedText, /no credential requested, checked, or stored/);

// A second click is a fresh observation — still refused-tuple, still no
// state kept anywhere.
renderedDocument.nodes.gestureButton.listeners.click[0]();
assert.match(
  collectText(renderedDocument.nodes.status),
  /fixture_observed_local_authentication/,
);

// The `typeof document` tail guard is a no-op under node — importing this
// module here already proves the guard skipped the auto-mount.

// ---------------------------------------------------------------------------
// Block 5 — static markup contract on ui/pond-desktop.html: the new panel
// exists additively and the D-P1 pinned block is intact.
// ---------------------------------------------------------------------------

assert.match(html, /data-local-authentication>/);
assert.match(html, /agents-local-authentication-title/);
assert.match(html, /Local authentication — live shell observation/);
assert.match(
  html,
  /id="pond-local-authentication-gesture" data-local-authentication-gesture/,
);
assert.match(html, /data-local-authentication-status/);
assert.match(
  html,
  /<script type="module" src="pond-local-authentication\.js"><\/script>/,
);
// The D-P1 panel's pinned principal-binding block stays intact.
assert.match(html, /data-agents-value="principalBinding\.principalRef"/);
assert.match(html, /data-agents-value="principalBinding\.bindingState"/);
assert.match(html, /data-agents-value="principalBinding\.authenticationPerformed"/);
assert.match(html, /data-agents-value="principalBinding\.ceremonyPosture"/);
assert.match(
  html,
  /Fixture projection only — Stage D stays blocked on real authentication and local principal binding\./,
);

// ---------------------------------------------------------------------------
// Block 6 — module-text hygiene and package.json wiring.
// ---------------------------------------------------------------------------

assert.match(
  moduleText,
  /from "\.\/generated\/pond-stage-d-local-authentication\.js"/,
);

for (const forbidden of [
  "__TAURI__",
  "invoke(",
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "localStorage",
  "sessionStorage",
  "password",
  "passphrase",
]) {
  assert.equal(
    moduleText.includes(forbidden),
    false,
    `shell wiring module must not carry ${forbidden}`,
  );
}

assert.equal(
  packageJson.scripts["test:stage-d-p7"],
  "node scripts/pond-stage-d-p7-shell-wiring-selftest.mjs",
);

console.log("POND_STAGE_DP7_SHELL_WIRING_SELFTEST_PASS");