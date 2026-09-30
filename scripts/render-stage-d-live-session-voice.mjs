// Render ceremony for the Stage D-P22 voice lane. Bundles the D-P22
// voice-input-request assessor (which re-runs the frozen D-P15 read
// gate, and transitively the establishment), the D-P22
// transcription-selection assessor (which re-runs the frozen D-P22
// voice-input-request decision through its own seam), the D-P22
// claimed-voice wall assessor (the standing fail-closed refusal of every
// claimed voice transcript), the D-P0 receiver-held principal ref, and
// the D-P2 declared-maximum-age constant into one committed ESM file
// under ui/generated/, and writes a deterministic provenance stamp.
// Mirrors scripts/render-stage-d-live-session-replies.mjs: argument-free,
// repository-root-relative, the produced artifacts are committed
// directly — CI does not run this script (pass --check to byte-verify
// the committed artifacts against a rebuild).
//
// Artifact naming: the committed artifacts ride the owner-approved Stage
// D-P15 exemption substring (`pond-stage-d-live-session-voice`) so the
// frozen D-P9/D-P10 hygiene walks treat the bundle exactly like the
// D-P15–D-P21 bundles — it unavoidably inlines the frozen assessors
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
  // receiver-own identity fields (the held principal ref and the event
  // instants) stay open — every posture literal and the ONE performable
  // transcription selection are receiver-recorded and frozen — so the
  // hand-written ui module never restates a posture literal.
  stdin: {
    contents:
      'import { assessPondVoiceInputRequestDecision, POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS } from "./src/contracts/pond-voice-input-request-decision.js";\n' +
      'import { assessPondVoiceTranscriptionProviderDecision, POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS } from "./src/contracts/pond-voice-transcription-provider-decision.js";\n' +
      'import { assessPondClaimedVoiceRefusal, POND_STAGE_DP22_DECLARED_CLAIMED_VOICE_CAPTURE_CLASSES } from "./src/contracts/pond-claimed-voice-refusal.js";\n' +
      'import { stageDP0LocalPrincipalRef } from "./src/fixtures/stage-d-p0-agent-presence.js";\n' +
      'import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./src/contracts/pond-agent-presence-observation-intake.js";\n' +
      "// The voice-input-request template: the receiver-own identity\n" +
      "// fields (the held principal ref and the request-event instant)\n" +
      "// stay open — filled at recording time — and every posture literal\n" +
      "// is receiver-recorded and frozen. A voice-input request asks to\n" +
      "// PROVIDE voice input; it captures no audio (the mic stays\n" +
      "// disabled), composes no transcription (the provider decision lane\n" +
      "// exists separately), carries no destination, agent ref, device\n" +
      "// identity, or transcript text, and grants nothing. No captured\n" +
      "// audio, waveform, transcript, runtime, grant, consequence,\n" +
      "// acceptance, or authority field exists on the template at all.\n" +
      "const pondStageDP22VoiceRequestTemplate = Object.freeze({\n" +
      '  contractVersion: "pond-voice-input-request-decision-d-p22",\n' +
      '  kind: "pond-voice-input-request",\n' +
      '  principalRef: "",\n' +
      '  voiceInputRequestBasis:\n' +
      '    "receiver_recorded_voice_request_not_inferred",\n' +
      "  voiceInputRequestMetadata: Object.freeze({\n" +
      "    voice_requested_at_epoch_ms: 0,\n" +
      '    freshness_basis: "voice_request_event_time_only",\n' +
      "    currentness_posture:\n" +
      '      "not_established_consumer_must_evaluate",\n' +
      "  }),\n" +
      "  voiceRequestCapturePosture:\n" +
      '    "voice_input_request_requests_no_capture_the_mic_stays_disabled_this_cut",\n' +
      "  voiceRequestTranscriptionPosture:\n" +
      '    "no_transcription_composed_by_a_request_transcription_is_the_provider_decision_lane",\n' +
      "  voiceRequestRunwayPosture:\n" +
      '    "voice_runway_only_no_capture_or_transcription_runtime_cut_exists_a_future_runtime_cut_swaps_the_refusal_causes",\n' +
      "  voiceRequestChannelPosture:\n" +
      '    "spoken_operator_input_is_not_the_typed_channel_the_channels_never_become_interchangeable_because_they_serialize_as_text",\n' +
      "  voiceRequestScopePosture:\n" +
      '    "a_microphone_device_is_not_a_principal_scope_is_never_created_from_physical_presence_or_a_channel",\n' +
      "  voiceRequestEvidencePosture:\n" +
      '    "voice_request_is_not_evidence_an_observation_alone_is_never_canonical_evidence_uncertainty_is_never_serialized_as_a_zero",\n' +
      "  voiceRequestAuthorityPosture:\n" +
      '    "voice_request_grants_no_authority_membership_or_admission",\n' +
      '  authority: "none",\n' +
      "});\n" +
      "// The transcription-decision template: the receiver-own identity\n" +
      "// fields (the held principal ref and the decision-event instant)\n" +
      "// stay open; the ONE performable selection (the local ASR tuple)\n" +
      "// and every posture literal are receiver-recorded and frozen. No\n" +
      "// runtime, model or ASR reference, capture, audio I/O, credential,\n" +
      "// transcription output, grant, consequence, or authority field\n" +
      "// exists on the template at all.\n" +
      "const pondStageDP22TranscriptionDecisionTemplate = Object.freeze({\n" +
      '  contractVersion: "pond-voice-transcription-provider-decision-d-p22",\n' +
      '  kind: "pond-voice-transcription-provider-decision",\n' +
      '  principalRef: "",\n' +
      '  transcriptionDecisionBasis:\n' +
      '    "receiver_recorded_transcription_decision_not_inferred",\n' +
      '  transcriptionBackendClass: "local_asr",\n' +
      '  selectedTranscriptionBackendId: "local_asr_engine",\n' +
      '  transcriptionAccessMechanism: "local_asr",\n' +
      '  credentialCustodyClass: "local_operator",\n' +
      '  dataBoundaryClass: "local_operator_controlled",\n' +
      '  supportTier: "sovereign_local",\n' +
      "  transcriptionDecisionMetadata: Object.freeze({\n" +
      "    recorded_at_epoch_ms: 0,\n" +
      '    freshness_basis: "transcription_decision_event_time_only",\n' +
      "    currentness_posture:\n" +
      '      "not_established_consumer_must_evaluate",\n' +
      "  }),\n" +
      "  transcriptionDecisionRuntimePosture:\n" +
      '    "no_transcription_runtime_established_the_decision_records_a_selection_not_a_runtime",\n' +
      "  transcriptionDecisionCapturePosture:\n" +
      '    "performs_no_capture_no_audio_io_no_recording",\n' +
      "  transcriptionDecisionIdentityPosture:\n" +
      '    "provider_session_is_not_agent_no_agentid_created",\n' +
      "  transcriptionDecisionAccessPosture:\n" +
      '    "declared_capability_not_granted_no_credential_admitted_no_authentication_performed",\n' +
      "  transcriptionDecisionBoundaryPosture:\n" +
      '    "declared_policy_not_verified_runtime_evidence",\n' +
      "  transcriptionDecisionFallbackPosture:\n" +
      '    "no_silent_fallback_no_failure_transition_authorized",\n' +
      "  transcriptionDecisionVoicePosture:\n" +
      '    "no_transcription_composed_the_decision_rides_a_currently_recorded_voice_request_only",\n' +
      "  transcriptionDecisionConsumptionPosture:\n" +
      '    "consumed_by_no_runtime_composer_or_transport_this_cut",\n' +
      '  authority: "none",\n' +
      "});\n" +
      "export { assessPondVoiceInputRequestDecision, POND_STAGE_DP22_FORBIDDEN_VOICE_KEYS, assessPondVoiceTranscriptionProviderDecision, POND_STAGE_DP22_PERFORMABLE_TRANSCRIPTION_SELECTIONS, assessPondClaimedVoiceRefusal, POND_STAGE_DP22_DECLARED_CLAIMED_VOICE_CAPTURE_CLASSES, stageDP0LocalPrincipalRef, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS, pondStageDP22VoiceRequestTemplate, pondStageDP22TranscriptionDecisionTemplate };\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-d-live-session-voice-entry.ts",
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
    resolveFromRoot("ui/generated/pond-stage-d-live-session-voice.js")
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
  record: "src/contracts/pond-voice-input-request-decision.ts",
  inputs: [
    "src/contracts/pond-voice-transcription-provider-decision.ts",
    "src/contracts/pond-claimed-voice-refusal.ts",
    "src/contracts/pond-reply-request-decision.ts",
    "src/contracts/pond-conversation-record-admission.ts",
    "src/contracts/pond-transport-policy-decision.ts",
    "src/contracts/pond-delivery-candidate-decision.ts",
    "src/contracts/pond-private-read-activation.ts",
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
    "D-P22",
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
    "Voice-lane support only: the bundle carries the D-P22 " +
    "voice-input-request assessor — the receiver-recorded request to " +
    "PROVIDE voice input over a currently live D-P15 session, re-running " +
    "the frozen D-P15 read gate (and transitively the establishment " +
    "chain) through its own seam — plus the D-P22 transcription-selection " +
    "assessor over a currently recorded voice request (re-running the " +
    "voice request through its own seam; the only performable selection " +
    "is the local ASR tuple, and every cloud or community selection " +
    "refuses at its dedicated performability cause), the D-P22 claimed-" +
    "voice wall assessor (a standing fail-closed refusal of every claimed " +
    "voice transcript — captured, synthesized, or transcribed), the " +
    "receiver-held D-P0 principal ref, the D-P2 declared maximum age, and " +
    "the two frozen lane templates (the hand-written ui module never " +
    "restates a frozen shape). NO audio is captured (the mic stays " +
    "disabled — the B2 invariant voice affordance != recording stands), " +
    "no transcription inference or output exists, no model or ASR " +
    "reference is carried, no credential path, no external boundary, no " +
    "grant, consequence, acceptance, or authority exists here; the " +
    "claimed-voice wall echoes nothing about any claim, not even text " +
    "the receiver itself composed. The forbidden-inventory chain rides " +
    "along inside the voice-request contract's own import (the frozen " +
    "D-P21 union widened once by this lane), so the D-P16, D-P17, and " +
    "D-P20 stages are rendered here too. The transcription vocabularies " +
    "are MINTED by this lane (no voice provider substrate exists; the " +
    "fabric input-class table has no audio row), while the custody, " +
    "data-boundary, and support-tier sets are re-declared verbatim from " +
    "the frozen D-P21 provider decision. The bundle name rides the " +
    "owner-approved Stage D-P15 exemption substring so the frozen walk " +
    "sees the same re-run plumbing rationale: the leg assessors are " +
    "carried because the law's independent inspection IS the re-run " +
    "through each consumer's own seam.",
};
const provenanceText = JSON.stringify(provenance, null, 2) + "\n";

const provenancePath = resolveFromRoot(
  "ui/generated/pond-stage-d-live-session-voice-provenance.json"
);
if (checkOnly) {
  const committedBundle = await readFile(
    resolveFromRoot("ui/generated/pond-stage-d-live-session-voice.js"),
    "utf8"
  );
  const committedProvenance = await readFile(provenancePath, "utf8");
  if (committedBundle !== bundleText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-voice.js differs from a fresh render."
    );
    process.exit(1);
  }
  if (committedProvenance !== provenanceText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-voice-provenance.json differs from a fresh render."
    );
    process.exit(1);
  }
  console.log("POND_STAGE_DP22_VOICE_RENDER_CHECK_PASS");
} else {
  await mkdir(dirname(fileURLToPath(provenancePath)), { recursive: true });
  await writeFile(provenancePath, provenanceText);
  console.log("POND_STAGE_DP22_VOICE_RENDERED");
}