// Render ceremony for the Stage D-P18 dispatch lane. Bundles the D-P18
// dispatch-decision assessor (which re-runs the frozen D-P17 delivery-
// candidate decision, which itself re-runs the frozen D-P16 record
// admission, the D-P15 read gate, and the establishment), the D-P0
// receiver-held principal and agent refs, the D-P2 declared-maximum-age
// constant, and the frozen D-P13 trading-complete routing leg records
// into one committed ESM file under ui/generated/, and writes a
// deterministic provenance stamp. Mirrors
// scripts/render-stage-d-live-session-delivery.mjs: argument-free,
// repository-root-relative, the produced artifacts are committed directly
// — CI does not run this script (pass --check to byte-verify the
// committed artifacts against a rebuild).
//
// Artifact naming: the committed artifacts ride the owner-approved Stage
// D-P15 exemption substring (`pond-stage-d-live-session-dispatch`) so the
// frozen D-P9/D-P10 hygiene walks treat the bundle exactly like the
// D-P15, D-P16, and D-P17 bundles — it unavoidably inlines the frozen
// assessors because the law's independent inspection IS the re-run
// through each consumer's own seam. The hand-written ui module stays
// fully walked and never restates any frozen shape.
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
  // sources. The dispatch-event metadata template is built right here —
  // the receiver-own event fields stay open and every posture literal is
  // receiver-recorded and frozen — so the hand-written ui module never
  // restates a posture literal.
  stdin: {
    contents:
      'import { assessPondDispatchDecision, POND_STAGE_DP18_DECLARED_DISPATCH_DESTINATION_REFS, POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS } from "./src/contracts/pond-dispatch-decision.js";\n' +
      'import { assessPondDeliveryCandidateDecision, POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS, POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS } from "./src/contracts/pond-delivery-candidate-decision.js";\n' +
      'import { assessPondConversationRecordAdmission, POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS, POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS } from "./src/contracts/pond-conversation-record-admission.js";\n' +
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
      "// The dispatch-event metadata template: the receiver-own fields\n" +
      "// (the basis, the event time, the freshness basis, and the\n" +
      "// currentness posture) stay open — filled at dispatch time — and\n" +
      "// every posture literal is receiver-recorded and frozen. No receipt,\n" +
      "// queue, retry, transport, consequence, acceptance, or authority\n" +
      "// field exists on the template at all.\n" +
      "const pondStageDP18DispatchMetadataTemplate = Object.freeze({\n" +
      '  dispatch_basis: "receiver_performed_in_process_dispatch_not_inferred",\n' +
      "  dispatched_at_epoch_ms: 0,\n" +
      '  freshness_basis: "dispatch_event_time_only",\n' +
      '  currentness_posture: "not_established_consumer_must_evaluate",\n' +
      "  dispatchTransportPosture:\n" +
      '    "in_process_local_dispatch_performed_no_external_transport_a2a_mcp_network_queues_all_refused",\n' +
      "  dispatchPresentationPosture:\n" +
      '    "dispatch_presents_at_the_delivery_lane_session_scoped_no_agent_runtime_read",\n' +
      "  dispatchConsumptionPosture:\n" +
      '    "one_dispatch_per_candidate_reuse_refused_fresh_preparation_required",\n' +
      "  dispatchConsequencePosture:\n" +
      '    "dispatch_carries_governed_information_to_an_eligible_audience_no_consequence_authorized",\n' +
      "  dispatchAcceptancePosture:\n" +
      '    "dispatch_establishes_no_agent_acceptance_task_agreement_or_reply",\n' +
      '  dispatchEvidencePosture: "no_receipt_claimed_receipt_requires_its_own_governed_lane",\n' +
      "  dispatchAuthorityPosture:\n" +
      '    "dispatch_grants_no_authority_membership_capability_or_cognition_runtime",\n' +
      '  authority: "none",\n' +
      "});\n" +
      "export { assessPondDispatchDecision, POND_STAGE_DP18_DECLARED_DISPATCH_DESTINATION_REFS, POND_STAGE_DP18_FORBIDDEN_DISPATCH_KEYS, assessPondDeliveryCandidateDecision, POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS, POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS, assessPondConversationRecordAdmission, POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS, POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS, stageDP0LocalPrincipalRef, stageDP0Agent0Ref, stageDP0CommunityAgentSlotRef, stageDP0ProjectAgentSlotRef, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS, pondStageDP13ForgeBindingRecord, pondStageDP13ModeDeclarationRecord, pondStageDP13DeskSourceContractFixture, pondStageDP13DeskPresenceProjection, pondStageDP18DispatchMetadataTemplate };\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-d-live-session-dispatch-entry.ts",
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
    resolveFromRoot("ui/generated/pond-stage-d-live-session-dispatch.js")
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
  record: "src/contracts/pond-dispatch-decision.ts",
  inputs: [
    "src/contracts/pond-delivery-candidate-decision.ts",
    "src/contracts/pond-conversation-record-admission.ts",
    "src/contracts/pond-live-session-establishment.ts",
    "src/contracts/pond-live-session-read-gate.ts",
    "src/fixtures/stage-d-p0-agent-presence.ts",
    "src/contracts/pond-agent-presence-observation-intake.ts",
    "src/fixtures/stage-d-p13-declared-mode-routing.ts",
  ],
  renderedStages: ["D-P0", "D-P1", "D-P2", "D-P12", "D-P13", "D-P15", "D-P16", "D-P17", "D-P18"],
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
    "Dispatch-lane support only: the bundle carries the D-P18 " +
    "dispatch-decision assessor — the receiver-performed in-process " +
    "dispatch over a currently prepared D-P17 delivery candidate, " +
    "re-running the frozen D-P17 candidate decision (and transitively " +
    "the D-P16 record admission, the D-P15 read gate, and the " +
    "establishment) through its own seam — plus the receiver-held D-P0 " +
    "principal and agent refs, the D-P2 declared maximum age, the frozen " +
    "D-P13 trading-complete routing leg records, and the frozen " +
    "dispatch-event metadata template (the hand-written ui module never " +
    "restates a frozen shape). No external transport, queue, retry, " +
    "receipt, consequence, agent acceptance, reply, dispatch-side send, " +
    "persistence, grant, membership, admission, or authority; one " +
    "dispatch per candidate, reuse refused as a replayed dispatch. The " +
    "bundle name rides the owner-approved Stage D-P15 exemption " +
    "substring so the frozen walk sees the same re-run plumbing " +
    "rationale: the leg assessors are carried because the law's " +
    "independent inspection IS the re-run through each consumer's own " +
    "seam.",
};
const provenanceText = JSON.stringify(provenance, null, 2) + "\n";

const provenancePath = resolveFromRoot(
  "ui/generated/pond-stage-d-live-session-dispatch-provenance.json"
);
if (checkOnly) {
  const committedBundle = await readFile(
    resolveFromRoot("ui/generated/pond-stage-d-live-session-dispatch.js"),
    "utf8"
  );
  const committedProvenance = await readFile(provenancePath, "utf8");
  if (committedBundle !== bundleText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-dispatch.js differs from a fresh render."
    );
    process.exit(1);
  }
  if (committedProvenance !== provenanceText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-dispatch-provenance.json differs from a fresh render."
    );
    process.exit(1);
  }
  console.log("POND_STAGE_DP18_DISPATCH_RENDER_CHECK_PASS");
} else {
  await mkdir(dirname(fileURLToPath(provenancePath)), { recursive: true });
  await writeFile(provenancePath, provenanceText);
  console.log("POND_STAGE_DP18_DISPATCH_RENDERED");
}