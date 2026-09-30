// Render ceremony for the Stage D-P21 agent-reply lane. Bundles the
// D-P21 reply-request assessor (which re-runs the frozen D-P16 record
// admission, the D-P15 read gate, and the establishment), the D-P21
// provider-selection assessor (which re-runs the frozen D-P21
// reply-request decision through its own seam), the D-P21 claimed-reply
// wall assessor (the standing fail-closed refusal of every claimed
// agent reply), the D-P0 receiver-held principal and agent refs, and the
// D-P2 declared-maximum-age constant into one committed ESM file under
// ui/generated/, and writes a deterministic provenance stamp. Mirrors
// scripts/render-stage-d-live-session-transport.mjs: argument-free,
// repository-root-relative, the produced artifacts are committed
// directly — CI does not run this script (pass --check to byte-verify
// the committed artifacts against a rebuild).
//
// Artifact naming: the committed artifacts ride the owner-approved Stage
// D-P15 exemption substring (`pond-stage-d-live-session-replies`) so the
// frozen D-P9/D-P10 hygiene walks treat the bundle exactly like the
// D-P15–D-P20 bundles — it unavoidably inlines the frozen assessors
// because the law's independent inspection IS the re-run through each
// consumer's own seam. The hand-written ui module stays fully walked and
// never restates any frozen shape.
import { build } from "esbuild";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const checkOnly = process.argv.includes("--check");

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const resolveFromRoot = (path) => new URL(path, `file://${repositoryRoot}/`);

const esbuildPackage = JSON.parse(
  await readFile(resolveFromRoot("node_modules/esbuild/package.json"), "utf8")
);

const buildOptions = {
  // A tiny stdin entry re-exports the frozen contract code the shell
  // wiring module runs in the browser. The .ts sourcefile name lets
  // esbuild resolve the contract chain's `.js` specifiers to their `.ts`
  // sources. The two lane templates are built right here — the
  // receiver-own identity fields (the held principal ref, the requested
  // conversation record copy, and the event instants) stay open — every
  // posture literal and the provider selection are receiver-recorded and
  // frozen — so the hand-written ui module never restates a posture
  // literal.
  stdin: {
    contents:
      'import { assessPondReplyRequestDecision, POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS } from "./src/contracts/pond-reply-request-decision.js";\n' +
      'import { assessPondCognitionProviderDecision, POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS } from "./src/contracts/pond-cognition-provider-decision.js";\n' +
      'import { assessPondClaimedAgentReplyRefusal, POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES } from "./src/contracts/pond-claimed-agent-reply-refusal.js";\n' +
      'import { assessPondConversationRecordAdmission, POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS, POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS } from "./src/contracts/pond-conversation-record-admission.js";\n' +
      'import { stageDP0LocalPrincipalRef, stageDP0Agent0Ref, stageDP0CommunityAgentSlotRef, stageDP0ProjectAgentSlotRef } from "./src/fixtures/stage-d-p0-agent-presence.js";\n' +
      'import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./src/contracts/pond-agent-presence-observation-intake.js";\n' +
      "// The reply-request template: the receiver-own identity fields\n" +
      "// (the held principal ref, the requested D-P16 conversation record\n" +
      "// copy, and the request-event instant) stay open — filled at\n" +
      "// recording time — and every posture literal is receiver-recorded\n" +
      "// and frozen. A request requests a reply; it composes none, selects\n" +
      "// no provider (the provider decision lane exists separately), and\n" +
      "// grants nothing. No reply text, provider field, runtime, grant,\n" +
      "// consequence, acceptance, or authority field exists on the\n" +
      "// template at all.\n" +
      "const pondStageDP21ReplyRequestTemplate = Object.freeze({\n" +
      '  contractVersion: "pond-reply-request-decision-d-p21",\n' +
      '  kind: "pond-reply-request",\n' +
      "  principalRef: \"\",\n" +
      '  replyRequestBasis: "receiver_recorded_reply_request_not_inferred",\n' +
      "  requestedConversationRecord: null,\n" +
      "  replyRequestMetadata: Object.freeze({\n" +
      "    requested_at_epoch_ms: 0,\n" +
      '    freshness_basis: "reply_request_event_time_only",\n' +
      "    currentness_posture:\n" +
      '      "not_established_consumer_must_evaluate",\n' +
      "  }),\n" +
      "  replyRequestCompositionPosture:\n" +
      '    "reply_request_requests_a_reply_none_is_composed_request_grants_nothing",\n' +
      "  replyRequestCognitionPosture:\n" +
      '    "no_cognition_runtime_exists_in_app_or_law_the_request_establishes_none",\n' +
      "  replyRequestProviderPosture:\n" +
      '    "no_provider_selected_by_a_request_selection_is_the_provider_decision_lane",\n' +
      "  replyRequestRunwayPosture:\n" +
      '    "reply_runway_only_no_reply_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_cause_for_a_composed_reply",\n' +
      "  replyRequestLifecyclePosture:\n" +
      '    "delivered_request_and_recipient_reasoning_lifecycles_never_collapsed_no_consequence_authorized",\n' +
      "  replyRequestEvidencePosture:\n" +
      '    "reply_request_is_not_evidence_echoes_no_reply_text_claims_no_receipt",\n' +
      "  replyRequestAuthorityPosture:\n" +
      '    "reply_request_grants_no_authority_membership_or_admission",\n' +
      '  authority: "none",\n' +
      "});\n" +
      "// The provider-decision template: the receiver-own identity fields\n" +
      "// (the held principal ref and the decision-event instant) stay open;\n" +
      "// the ONE performable selection and every posture literal are\n" +
      "// receiver-recorded and frozen. No backend profile, model or harness\n" +
      "// reference, credential, runtime, grant, consequence, or authority\n" +
      "// field exists on the template at all.\n" +
      "const pondStageDP21ProviderDecisionTemplate = Object.freeze({\n" +
      '  contractVersion: "pond-cognition-provider-decision-d-p21",\n' +
      '  kind: "pond-cognition-provider-decision",\n' +
      "  principalRef: \"\",\n" +
      '  providerDecisionBasis: "receiver_recorded_provider_decision_not_inferred",\n' +
      '  backendClass: "local_runtime",\n' +
      '  selectedBackendId: "ollama",\n' +
      '  accessMechanism: "local_runtime",\n' +
      '  credentialCustodyClass: "local_operator",\n' +
      '  dataBoundaryClass: "local_operator_controlled",\n' +
      '  supportTier: "sovereign_local",\n' +
      "  providerDecisionMetadata: Object.freeze({\n" +
      "    recorded_at_epoch_ms: 0,\n" +
      '    freshness_basis: "provider_decision_event_time_only",\n' +
      "    currentness_posture:\n" +
      '      "not_established_consumer_must_evaluate",\n' +
      "  }),\n" +
      "  providerDecisionRuntimePosture:\n" +
      '    "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime",\n' +
      "  providerDecisionInferencePosture:\n" +
      '    "performs_no_inference_no_authentication_no_provider_contact_no_fallback",\n' +
      "  providerDecisionIdentityPosture:\n" +
      '    "provider_session_is_not_agent_no_agentid_created",\n' +
      "  providerDecisionAccessPosture:\n" +
      '    "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",\n' +
      "  providerDecisionBoundaryPosture:\n" +
      '    "declared_policy_not_verified_runtime_evidence",\n' +
      "  providerDecisionFallbackPosture:\n" +
      '    "no_silent_fallback_no_failure_transition_authorized",\n' +
      "  providerDecisionReplyPosture:\n" +
      '    "no_reply_composed_the_decision_rides_a_recorded_reply_request_only",\n' +
      "  providerDecisionConsumptionPosture:\n" +
      '    "consumed_by_no_runtime_composer_or_transport_this_cut",\n' +
      '  authority: "none",\n' +
      "});\n" +
      "export { assessPondReplyRequestDecision, POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS, assessPondCognitionProviderDecision, POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS, assessPondClaimedAgentReplyRefusal, POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES, assessPondConversationRecordAdmission, POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS, POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS, stageDP0LocalPrincipalRef, stageDP0Agent0Ref, stageDP0CommunityAgentSlotRef, stageDP0ProjectAgentSlotRef, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS, pondStageDP21ReplyRequestTemplate, pondStageDP21ProviderDecisionTemplate };\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-d-live-session-replies-entry.ts",
  },
  bundle: true,
  format: "esm",
  platform: "browser",
  target: ["es2022"],
  splitting: false,
  minify: false,
  keepNames: true,
  legalComments: "none",
  charset: "utf8",
  logLevel: "info",
};

// Strip per-line trailing whitespace from the generated bundle: generated
// output can carry it, the committed-range `git diff --check` gate flags it,
// and the gitattributes `whitespace` attribute does not suppress `--check`
// detection on current git. Strip-in-place keeps the artifact deterministic.
const stripTrailingWhitespace = (text) => {
  const stripped = text.replace(/[ \t]+$/gm, "");
  return stripped.endsWith("\n") ? stripped : stripped + "\n";
};

let bundleText;
if (checkOnly) {
  const result = await build({ ...buildOptions, write: false });
  bundleText = stripTrailingWhitespace(result.outputFiles[0].text);
} else {
  const outfile = fileURLToPath(
    resolveFromRoot("ui/generated/pond-stage-d-live-session-replies.js")
  );
  await build({ ...buildOptions, outfile });
  const bundle = await readFile(outfile, "utf8");
  bundleText = stripTrailingWhitespace(bundle);
  await writeFile(outfile, bundleText);
}

// Provenance stamp: the bundler version is read from the installed package,
// never from a literal here, and there is no timestamp, so identical inputs
// produce identical bytes. The rendered contract versions are extracted from
// the produced bundle itself rather than restated by hand.
const contractVersions = [
  ...new Set(bundleText.match(/pond-[a-z0-9-]+-d-p[0-9]+/g) || []),
].sort();

const provenance = {
  record: "src/contracts/pond-reply-request-decision.ts",
  inputs: [
    "src/contracts/pond-cognition-provider-decision.ts",
    "src/contracts/pond-cognition-provider.ts",
    "src/contracts/pond-claimed-agent-reply-refusal.ts",
    "src/contracts/pond-conversation-record-admission.ts",
    "src/contracts/pond-transport-policy-decision.ts",
    "src/contracts/pond-delivery-candidate-decision.ts",
    "src/contracts/pond-live-session-establishment.ts",
    "src/contracts/pond-live-session-read-gate.ts",
    "src/contracts/pond-agent-presence-observation-intake.ts",
    "src/fixtures/stage-d-p0-agent-presence.ts",
  ],
  renderedStages: [
    "D-P0",
    "D-P1",
    "D-P2",
    "D-P15",
    "D-P16",
    "D-P17",
    "D-P20",
    "D-P21",
  ],
  contractVersions,
  bundler: { name: "esbuild", version: esbuildPackage.version },
  build: {
    format: "esm",
    platform: "browser",
    target: "es2022",
    minify: false,
    splitting: false,
  },
  authority: "none",
  mutationPosture: "none_read_only",
  runtimeActivationPosture: "not_included",
  note:
    "Agent-reply-lane support only: the bundle carries the D-P21 " +
    "reply-request assessor — the receiver-recorded reply request over a " +
    "currently admitted D-P16 conversation record, re-running the frozen " +
    "D-P16 record admission (and transitively the D-P15 read gate and the " +
    "establishment) through its own seam — plus the D-P21 " +
    "cognition-provider-selection assessor over a currently recorded " +
    "reply request (re-running the reply request through its own seam, " +
    "four echo depths deep into the D-P15 chain), the D-P21 claimed-reply " +
    "wall assessor (a standing fail-closed refusal of every claimed agent " +
    "reply), the receiver-held D-P0 principal and agent refs, the frozen " +
    "D-P16 declared conversation-agent refs, the D-P2 declared maximum " +
    "age, and the two frozen lane templates (the hand-written ui module " +
    "never restates a frozen shape). The reply request composes nothing; " +
    "the provider decision performs no inference, authentication, " +
    "provider contact, routing, or fallback, the only performable " +
    "selection being the local runtime, and the decision is consumed by " +
    "nothing this cut; no cognition runtime, composer, reply text, " +
    "credential, agent identity, admission, grant, consequence, " +
    "acceptance, receipt, persistence, or authority exists here; the " +
    "claimed-reply wall echoes nothing about any claim. The bundle name " +
    "rides the owner-approved Stage D-P15 exemption substring so the " +
    "frozen walk sees the same re-run plumbing rationale: the leg " +
    "assessors are carried because the law's independent inspection IS " +
    "the re-run through each consumer's own seam. The D-P20 forbidden-" +
    "inventory chain rides along inside the reply-request contract's own " +
    "import, so the D-P17 and D-P20 stages are rendered here too.",
};
const provenanceText = JSON.stringify(provenance, null, 2) + "\n";

const provenancePath = resolveFromRoot(
  "ui/generated/pond-stage-d-live-session-replies-provenance.json"
);
if (checkOnly) {
  const committedBundle = await readFile(
    resolveFromRoot("ui/generated/pond-stage-d-live-session-replies.js"),
    "utf8"
  );
  const committedProvenance = await readFile(provenancePath, "utf8");
  if (committedBundle !== bundleText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-replies.js differs from a fresh render."
    );
    process.exit(1);
  }
  if (committedProvenance !== provenanceText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-replies-provenance.json differs from a fresh render."
    );
    process.exit(1);
  }
  console.log("POND_STAGE_DP21_REPLIES_RENDER_CHECK_PASS");
} else {
  await mkdir(dirname(fileURLToPath(provenancePath)), { recursive: true });
  await writeFile(provenancePath, provenanceText);
  console.log("POND_STAGE_DP21_REPLIES_RENDERED");
}