// Render ceremony for the Stage D-P20 message-transport lane. Bundles the
// D-P20 transport-policy assessor (which re-runs the frozen D-P17 delivery-
// candidate decision, which itself re-runs the frozen D-P16 record
// admission, the D-P15 read gate, and the establishment) and the D-P20
// inbound-wall assessor (the standing fail-closed remote-message refusal),
// the D-P0 receiver-held principal and agent refs, and the D-P2 declared-
// maximum-age constant into one committed ESM file under ui/generated/,
// and writes a deterministic provenance stamp. Mirrors
// scripts/render-stage-d-live-session-receipts.mjs: argument-free,
// repository-root-relative, the produced artifacts are committed directly
// — CI does not run this script (pass --check to byte-verify the
// committed artifacts against a rebuild).
//
// Artifact naming: the committed artifacts ride the owner-approved Stage
// D-P15 exemption substring (`pond-stage-d-live-session-transport`) so the
// frozen D-P9/D-P10 hygiene walks treat the bundle exactly like the
// D-P15–D-P19 bundles — it unavoidably inlines the frozen assessors
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
  // sources. The transport-policy template is built right here — the
  // receiver-own identity fields (the held principal ref and the
  // policy-event instant) stay open — every posture literal and the
  // policy selection are receiver-recorded and frozen — so the
  // hand-written ui module never restates a posture literal.
  stdin: {
    contents:
      'import { assessPondTransportPolicyDecision, POND_STAGE_DP20_PERFORMABLE_TRANSPORT_POLICIES, POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS } from "./src/contracts/pond-transport-policy-decision.js";\n' +
      'import { assessPondRemoteMessageIntakeRefusal, POND_STAGE_DP20_DECLARED_INTAKE_CHANNEL_CLASSES } from "./src/contracts/pond-remote-message-refusal.js";\n' +
      'import { assessPondDeliveryCandidateDecision, POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS, POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS } from "./src/contracts/pond-delivery-candidate-decision.js";\n' +
      'import { assessPondConversationRecordAdmission, POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS, POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS } from "./src/contracts/pond-conversation-record-admission.js";\n' +
      'import { stageDP0LocalPrincipalRef, stageDP0Agent0Ref, stageDP0CommunityAgentSlotRef, stageDP0ProjectAgentSlotRef } from "./src/fixtures/stage-d-p0-agent-presence.js";\n' +
      'import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./src/contracts/pond-agent-presence-observation-intake.js";\n' +
      "// The transport-policy template: the receiver-own identity fields\n" +
      "// (the held principal ref and the policy-event instant) stay open —\n" +
      "// filled at recording time — and every posture literal and the\n" +
      "// policy selection are receiver-recorded and frozen. The L220\n" +
      "// transport list is declared as ONE performable in-process policy;\n" +
      "// every external policy refuses. No endpoint, queue, AgentCard,\n" +
      "// runtime schema, grant, consequence, acceptance, reply, or\n" +
      "// authority field exists on the template at all.\n" +
      "const pondStageDP20TransportPolicyTemplate = Object.freeze({\n" +
      '  contractVersion: "pond-transport-policy-decision-d-p20",\n' +
      '  kind: "pond-transport-policy",\n' +
      "  principalRef: \"\",\n" +
      '  policyBasis: "receiver_recorded_transport_policy_not_inferred",\n' +
      "  transportPolicy:\n" +
      '    "in_process_local_conversation_context_delivery_only",\n' +
      "  transportPolicyMetadata: Object.freeze({\n" +
      "    recorded_at_epoch_ms: 0,\n" +
      '    freshness_basis: "transport_policy_event_time_only",\n' +
      "    currentness_posture:\n" +
      '      "receiver_recorded_policy_not_consumed_by_any_transport_stage_this_cut",\n' +
      "  }),\n" +
      "  policyTransportPosture:\n" +
      '    "in_process_local_conversation_context_delivery_only_external_transport_policies_declared_not_performable",\n' +
      "  policyRuntimePosture:\n" +
      '    "no_transport_runtime_endpoint_or_queue_established",\n' +
      "  policyChannelAuthorityPosture:\n" +
      '    "no_channel_class_authority_established_trusted_channel_taxonomy_unchanged",\n' +
      "  policyAcceptancePosture:\n" +
      '    "policy_establishes_no_acceptance_agreement_or_reply",\n' +
      "  policyEvidencePosture:\n" +
      '    "policy_is_not_evidence_and_claims_no_receipt",\n' +
      "  policyAuthorityPosture:\n" +
      '    "policy_grants_no_authority_membership_or_admission",\n' +
      '  authority: "none",\n' +
      "});\n" +
      "export { assessPondTransportPolicyDecision, POND_STAGE_DP20_PERFORMABLE_TRANSPORT_POLICIES, POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS, assessPondRemoteMessageIntakeRefusal, POND_STAGE_DP20_DECLARED_INTAKE_CHANNEL_CLASSES, assessPondDeliveryCandidateDecision, POND_STAGE_DP17_DECLARED_DELIVERY_DESTINATION_REFS, POND_STAGE_DP17_FORBIDDEN_DELIVERY_KEYS, assessPondConversationRecordAdmission, POND_STAGE_DP16_DECLARED_CONVERSATION_AGENT_REFS, POND_STAGE_DP16_MAXIMUM_COMPOSED_TEXT_CHARACTERS, stageDP0LocalPrincipalRef, stageDP0Agent0Ref, stageDP0CommunityAgentSlotRef, stageDP0ProjectAgentSlotRef, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS, pondStageDP20TransportPolicyTemplate };\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-d-live-session-transport-entry.ts",
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
    resolveFromRoot("ui/generated/pond-stage-d-live-session-transport.js")
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
  record: "src/contracts/pond-transport-policy-decision.ts",
  inputs: [
    "src/contracts/pond-remote-message-refusal.ts",
    "src/contracts/pond-delivery-candidate-decision.ts",
    "src/contracts/pond-conversation-record-admission.ts",
    "src/contracts/pond-live-session-establishment.ts",
    "src/contracts/pond-live-session-read-gate.ts",
    "src/contracts/pond-agent-presence-observation-intake.ts",
    "src/fixtures/stage-d-p0-agent-presence.ts",
  ],
  renderedStages: ["D-P0", "D-P1", "D-P2", "D-P15", "D-P16", "D-P17", "D-P20"],
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
    "Message-transport-lane support only: the bundle carries the D-P20 " +
    "transport-policy assessor — the receiver-recorded in-process policy " +
    "over a currently prepared D-P17 candidate, re-running the frozen " +
    "D-P17 delivery-candidate decision (and transitively the D-P16 record " +
    "admission, the D-P15 read gate, and the establishment) through its " +
    "own seam — plus the D-P20 inbound-wall assessor (a standing fail-" +
    "closed refusal of every remote external message-intake claim), the " +
    "receiver-held D-P0 principal and agent refs, the D-P2 declared " +
    "maximum age, and the frozen transport-policy template (the hand-" +
    "written ui module never restates a frozen shape). The policy " +
    "consumes no transport stage this cut; the L220 external transport " +
    "list is declared verbatim and refuses everywhere; the wall echoes " +
    "nothing about any claim. No endpoint, socket, queue, AgentCard, " +
    "runtime schema, serialization, intake log, channel authority, " +
    "grant, membership, admission, consequence, acceptance, reply, or " +
    "persistence exists here. The bundle name rides the owner-approved " +
    "Stage D-P15 exemption substring so the frozen walk sees the same " +
    "re-run plumbing rationale: the leg assessors are carried because " +
    "the law's independent inspection IS the re-run through each " +
    "consumer's own seam.",
};
const provenanceText = JSON.stringify(provenance, null, 2) + "\n";

const provenancePath = resolveFromRoot(
  "ui/generated/pond-stage-d-live-session-transport-provenance.json"
);
if (checkOnly) {
  const committedBundle = await readFile(
    resolveFromRoot("ui/generated/pond-stage-d-live-session-transport.js"),
    "utf8"
  );
  const committedProvenance = await readFile(provenancePath, "utf8");
  if (committedBundle !== bundleText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-transport.js differs from a fresh render."
    );
    process.exit(1);
  }
  if (committedProvenance !== provenanceText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-transport-provenance.json differs from a fresh render."
    );
    process.exit(1);
  }
  console.log("POND_STAGE_DP20_TRANSPORT_RENDER_CHECK_PASS");
} else {
  await mkdir(dirname(fileURLToPath(provenancePath)), { recursive: true });
  await writeFile(provenancePath, provenanceText);
  console.log("POND_STAGE_DP20_TRANSPORT_RENDERED");
}