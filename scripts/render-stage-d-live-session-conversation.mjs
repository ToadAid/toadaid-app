// Render ceremony for the Stage D-P16 conversation lane. Bundles the two
// D-P16 conversation assessors, the D-P0 receiver-held principal and agent
// refs, the D-P2 declared-maximum-age constant, and the frozen D-P13
// trading-complete routing leg records into one committed ESM file under
// ui/generated/, and writes a deterministic provenance stamp. Mirrors
// scripts/render-stage-d-live-session.mjs: argument-free,
// repository-root-relative, the produced artifacts are committed directly —
// CI does not run this script (pass --check to byte-verify the committed
// artifacts against a rebuild).
//
// Artifact naming: the committed artifacts ride the owner-approved Stage
// D-P15 exemption substring (`pond-stage-d-live-session-conversation`) so
// the frozen D-P9/D-P10 hygiene walks treat the bundle exactly like the
// D-P15 bundle — it unavoidably inlines the frozen assessors because the
// law's independent inspection IS the re-run through each consumer's own
// seam. The hand-written ui module stays fully walked and never restates
// any frozen shape.
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
  // sources. The conversation record and surface templates are built right
  // here so the hand-written ui module never restates the posture
  // literals — only the receiver-own fields (composed text, addressed
  // agent ref, event time) are filled in at composition time.
  stdin: {
    contents:
      'import { assessPondConversationRecordAdmission, POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS, POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS } from "./src/contracts/pond-conversation-record-admission.js";\n' +
      'import { assessPondConversationSurfacePosture } from "./src/contracts/pond-conversation-surface-posture.js";\n' +
      'import { stageDP0LocalPrincipalRef, stageDP0Agent0Ref, stageDP0CommunityAgentSlotRef, stageDP0ProjectAgentSlotRef } from "./src/fixtures/stage-d-p0-agent-presence.js";\n' +
      'import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./src/contracts/pond-agent-presence-observation-intake.js";\n' +
      'import { stageDP13RoutingMatrix } from "./src/fixtures/stage-d-p13-declared-mode-routing.js";\n' +
      "// The frozen D-P13 trading-complete routing legs the shell side\n" +
      "// receives verbatim: the hand-written ui module never restates the\n" +
      "// D-P12/D-P13 record shapes (the frozen hygiene walks refuse their\n" +
      "// vocabulary outside generated artifacts).\n" +
      'const pondStageDP13TradingLegs = stageDP13RoutingMatrix.find((entry) => entry.fixtureLabel === "stage-d-p13:routing:trading-complete");\n' +
      "const pondStageDP13ForgeBindingRecord = pondStageDP13TradingLegs.forgeBindingRecord;\n" +
      "const pondStageDP13ModeDeclarationRecord = pondStageDP13TradingLegs.modeDeclarationRecord;\n" +
      "const pondStageDP13DeskSourceContractFixture = pondStageDP13TradingLegs.deskSourceContractFixture;\n" +
      "const pondStageDP13DeskPresenceProjection = pondStageDP13TradingLegs.deskPresenceProjection;\n" +
      "// The composed-record template: receiver-own fields left open, every\n" +
      "// posture literal receiver-recorded and frozen. The assessors\n" +
      "// re-inspect it on every admission and refuse with mapped causes on\n" +
      "// any break.\n" +
      "const pondStageDP16ConversationRecordTemplate = Object.freeze({\n" +
      '  contractVersion: "pond-conversation-record-admission-d-p16",\n' +
      '  kind: "pond-conversation-record",\n' +
      '  principalRef: stageDP0LocalPrincipalRef,\n' +
      '  recordBasis: "receiver_composed_into_live_session_not_inferred",\n' +
      '  composedRecordText: "",\n' +
      '  addressedAgentRef: "",\n' +
      '  conversationRecordMetadata: Object.freeze({\n' +
      '    composed_at_epoch_ms: 0,\n' +
      '    freshness_basis: "record_event_time_only",\n' +
      '    currentness_posture: "not_established_consumer_must_evaluate",\n' +
      "  }),\n" +
      '  conversationTrustEpochPosture: "verified_boundary_session_scoped",\n' +
      '  conversationProvenancePosture: "receiver_authored_composed_in_session_not_agent_authored_not_remote",\n' +
      '  conversationScopePosture: "session_scoped_module_state_never_persisted_scope_never_created_from_prose",\n' +
      '  conversationDeliveryPosture: "message_informed_not_delivered_delivery_refused_until_its_own_lane",\n' +
      '  conversationReplyPosture: "agent_reply_composition_not_established_no_cognition_runtime_in_app_or_law",\n' +
      '  conversationMemoryPosture: "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",\n' +
      '  conversationAuthorityPosture: "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",\n' +
      '  authority: "none",\n' +
      "});\n" +
      "// The surface template: receiver-recorded presentation basis, every\n" +
      "// refusal posture literal in place, no event time of its own —\n" +
      "// currency is owned by the re-run surface-level gate.\n" +
      "const pondStageDP16ConversationSurfaceTemplate = Object.freeze({\n" +
      '  contractVersion: "pond-conversation-surface-posture-d-p16",\n' +
      '  kind: "pond-conversation-surface",\n' +
      '  principalRef: stageDP0LocalPrincipalRef,\n' +
      '  surfaceBasis: "receiver_recorded_conversation_surface_presentation_not_inferred",\n' +
      '  surfacePresentationPosture:\n' +
      '    "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence",\n' +
      '  conversationTrustEpochPosture: "verified_boundary_session_scoped",\n' +
      '  agentPosturePresentationPosture:\n' +
      '    "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",\n' +
      '  surfaceEndPosture:\n' +
      '    "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible",\n' +
      '  conversationScopePosture: "session_scoped_module_state_never_persisted_scope_never_created_from_prose",\n' +
      '  surfaceDeliveryRefusalPosture:\n' +
      '    "surface_informs_nothing_is_delivered_dispatched_or_replied",\n' +
      '  surfaceMemoryPosture:\n' +
      '    "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence",\n' +
      '  surfaceAuthorityPosture:\n' +
      '    "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",\n' +
      '  authority: "none",\n' +
      "});\n" +
      "export { assessPondConversationRecordAdmission, assessPondConversationSurfacePosture, POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS, POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS, stageDP0LocalPrincipalRef, stageDP0Agent0Ref, stageDP0CommunityAgentSlotRef, stageDP0ProjectAgentSlotRef, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS, pondStageDP13ForgeBindingRecord, pondStageDP13ModeDeclarationRecord, pondStageDP13DeskSourceContractFixture, pondStageDP13DeskPresenceProjection, pondStageDP16ConversationRecordTemplate, pondStageDP16ConversationSurfaceTemplate };\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-d-live-session-conversation-entry.ts",
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
    resolveFromRoot("ui/generated/pond-stage-d-live-session-conversation.js")
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
  record: "src/contracts/pond-conversation-record-admission.ts",
  inputs: [
    "src/contracts/pond-conversation-surface-posture.ts",
    "src/fixtures/stage-d-p0-agent-presence.ts",
    "src/contracts/pond-agent-presence-observation-intake.ts",
    "src/fixtures/stage-d-p13-declared-mode-routing.ts",
  ],
  renderedStages: ["D-P0", "D-P1", "D-P2", "D-P12", "D-P13", "D-P15", "D-P16"],
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
    "Conversation-lane support only: the bundle carries the two D-P16 " +
    "assessors — the session-scoped composed-record admission over the live " +
    "D-P15 read gate, and the conversation surface presentation posture " +
    "that re-runs each held record and the addressed agents' frozen D-P13 " +
    "declared-mode routing — plus the receiver-held D-P0 principal and " +
    "agent refs, the D-P2 declared maximum age, the frozen D-P13 " +
    "trading-complete routing leg records, and the frozen record and " +
    "surface templates (the hand-written ui module never restates frozen " +
    "shapes). No delivery, dispatch, agent reply composition, " +
    "persistence, memory promotion, grant, membership, admission, or " +
    "authority; composed prose grants nothing. The bundle name rides the " +
    "owner-approved Stage D-P15 exemption substring so the frozen walk " +
    "sees the same re-run plumbing rationale: the leg assessors are " +
    "carried because the law's independent inspection IS the re-run " +
    "through each consumer's own seam.",
};
const provenanceText = JSON.stringify(provenance, null, 2) + "\n";

const provenancePath = resolveFromRoot(
  "ui/generated/pond-stage-d-live-session-conversation-provenance.json"
);
if (checkOnly) {
  const committedBundle = await readFile(
    resolveFromRoot("ui/generated/pond-stage-d-live-session-conversation.js"),
    "utf8"
  );
  const committedProvenance = await readFile(provenancePath, "utf8");
  if (committedBundle !== bundleText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-conversation.js differs from a fresh render."
    );
    process.exit(1);
  }
  if (committedProvenance !== provenanceText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-conversation-provenance.json differs from a fresh render."
    );
    process.exit(1);
  }
  console.log("POND_STAGE_DP16_CONVERSATION_RENDER_CHECK_PASS");
} else {
  await mkdir(dirname(fileURLToPath(provenancePath)), { recursive: true });
  await writeFile(provenancePath, provenanceText);
  console.log("POND_STAGE_DP16_CONVERSATION_RENDERED");
}