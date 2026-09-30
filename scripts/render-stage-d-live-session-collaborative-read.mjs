// Render ceremony for the Stage D-P23 collaborative multi-principal live
// read lane. Bundles the D-P23 collaborative-read session-request
// assessor (which re-runs the frozen D-P15 read gate, the frozen D-P14
// counterpart join, and transitively the establishment chain through its
// own seam), the D-P23 collaborative live-read admission assessor (which
// re-runs the recorded request through its own seam plus the frozen D-P14
// collaborative activation and admission assessors unchanged over live
// receiver legs and the structural never-issued counterpart legs), the
// D-P23 claimed-collaborative wall assessor (the standing fail-closed
// refusal of every claimed collaborative read result), the receiver-held
// D-P0 principal ref, the D-P2 declared-maximum-age constant, and the
// frozen lane templates into one committed ESM file under ui/generated/,
// and writes a deterministic provenance stamp. Mirrors
// scripts/render-stage-d-live-session-voice.mjs: argument-free,
// repository-root-relative, the produced artifacts are committed
// directly — CI does not run this script (pass --check to byte-verify
// the committed artifacts against a rebuild).
//
// Artifact naming: the committed artifacts ride the owner-approved Stage
// D-P15 exemption substring (`pond-stage-d-live-session-collaborative-`)
// via the `pond-stage-d-live-session-collaborative-read` bundle name so
// the frozen D-P9/D-P10 hygiene walks treat the bundle exactly like the
// D-P15–D-P22 bundles — it unavoidably inlines the frozen assessors
// because the law's independent inspection IS the re-run through each
// consumer's own seam. The hand-written ui module stays fully walked and
// never restates any frozen shape.
//
// The lane templates and the structural counterpart material (the
// counterpart legs bundle, the healthy declared join record, and the
// declared counterpart ref) are serialized verbatim, at build time, from
// the committed fixture files — the same deep-equal copies the lane
// selftest ties against the pinned fixture matrices — so no posture
// literal is restated by hand in this script either.
import { build } from "esbuild";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import {
  pondStageDP23CollaborativeReadSessionRequestTemplate,
  pondStageDP23CollaborativeLiveAdmissionTemplate,
  pondStageDP14CollaborativeActivationRecordTemplate,
  pondStageDP14CollaborativeAdmissionRecordTemplate,
  pondStageDP23CounterpartLegsBundle,
  stageDP23HealthyCounterpartJoinRecord,
  stageDP23CounterpartRef,
} from "../src/fixtures/stage-d-p23-collaborative-live-read.ts";

const checkOnly = process.argv.includes("--check");

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const resolveFromRoot = (path) => new URL(path, `file://${repositoryRoot}/`);

const esbuildPackage = JSON.parse(
  await readFile(resolveFromRoot("node_modules/esbuild/package.json"), "utf8")
);

// A frozen-literal render of a committed fixture record: the serialized
// form is passed through Object.freeze so the runtime copy is as closed
// as the fixture copy it was tied against.
const frozenLiteral = (value) => `Object.freeze(${JSON.stringify(value, null, 2)})`;

const buildOptions = {
  // A tiny stdin entry re-exports the frozen contract code the shell
  // wiring module runs in the browser. The .ts sourcefile name lets
  // esbuild resolve the contract chain's `.js` specifiers to their
  // `.ts` sources. The lane templates, the counterpart legs bundle, and
  // the healthy declared join record are built right here — the
  // receiver-own identity fields (the held principal ref and the event
  // instants) stay open — every posture literal and the frozen 13-label
  // structural table are receiver-recorded and frozen — so the
  // hand-written ui module never restates a frozen shape.
  stdin: {
    contents:
      'import { assessPondCollaborativeReadSessionRequestDecision, POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS } from "./src/contracts/pond-collaborative-read-session-request-decision.js";\n' +
      'import { assessPondCollaborativeReadLiveAdmissionDecision } from "./src/contracts/pond-collaborative-read-live-admission-decision.js";\n' +
      'import { assessPondClaimedCollaborativeReadRefusal, POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES } from "./src/contracts/pond-claimed-collaborative-read-refusal.js";\n' +
      'import { stageDP0LocalPrincipalRef } from "./src/fixtures/stage-d-p0-agent-presence.js";\n' +
      'import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./src/contracts/pond-agent-presence-observation-intake.js";\n' +
      "// The collaborative-read session-request template: the receiver-own\n" +
      "// identity fields (the held principal ref, the declared counterpart\n" +
      "// ref, and the request-event instant) stay open — filled at\n" +
      "// recording time — and every posture literal is receiver-recorded\n" +
      "// and frozen. A collaborative read session request asks to read\n" +
      "// structural records jointly with the ONE declared counterpart of\n" +
      "// the D-P14 join; it creates no scope object and no membership\n" +
      "// registry (the recorded request + the declared join pair ARE the\n" +
      "// explicit scope and membership), admits nothing, crosses no\n" +
      "// scope, excludes the memory lanes, and grants nothing. No record\n" +
      "// content, read result, grant, consequence, acceptance, or\n" +
      "// authority field exists on the template at all.\n" +
      `const pondStageDP23CollaborativeReadSessionRequestTemplate = ${frozenLiteral(pondStageDP23CollaborativeReadSessionRequestTemplate)};\n` +
      "// The collaborative live-read activation template: the receiver-\n" +
      "// own identity fields (the held principal ref, the declared\n" +
      "// counterpart ref, and the live-read event instant) stay open;\n" +
      "// every posture literal is receiver-recorded and frozen. The\n" +
      "// performed live read is an admitted structural-records inspection\n" +
      "// scope only: no record content, no scope crossing, no Release, no\n" +
      "// counterpart contact, no grant, consequence, acceptance, or\n" +
      "// authority field exists on the template at all.\n" +
      `const pondStageDP23CollaborativeLiveAdmissionTemplate = ${frozenLiteral(pondStageDP23CollaborativeLiveAdmissionTemplate)};\n` +
      "// The frozen D-P14-shaped collaborative activation record\n" +
      "// template: the activated_at instant stays open (re-timed at\n" +
      "// recording time to the performed live-read event time); every\n" +
      "// D-P14 posture literal rides frozen verbatim.\n" +
      `const pondStageDP14CollaborativeActivationRecordTemplate = ${frozenLiteral(pondStageDP14CollaborativeActivationRecordTemplate)};\n` +
      "// The frozen D-P14-shaped collaborative admission record template:\n" +
      "// the declared 13-label structural table rides frozen verbatim;\n" +
      "// the admitted scope never widens.\n" +
      `const pondStageDP14CollaborativeAdmissionRecordTemplate = ${frozenLiteral(pondStageDP14CollaborativeAdmissionRecordTemplate)};\n` +
      "// The structural counterpart legs bundle: the healthy D-P5–D-P9\n" +
      "// counterpart records re-inlined from the frozen D-P14 structural\n" +
      "// fixture with the lane's recorded D-P6 re-timing, the D-P9\n" +
      "// issuance in the not-issued shape, and null mapping/activation\n" +
      "// slots — the counterpart is structural never-issued at every\n" +
      "// rung of this lane, and no counterpart mapping, activation, or\n" +
      "// live legs are minted anywhere in it.\n" +
      `const pondStageDP23CounterpartLegsBundle = ${frozenLiteral(pondStageDP23CounterpartLegsBundle)};\n` +
      "// The healthy declared counterpart join record: the receiver-\n" +
      "// declared explicit session join naming the one structural\n" +
      "// never-issued counterpart — the D-P14 join shape frozen verbatim.\n" +
      `const pondStageDP23HealthyCounterpartJoinRecord = ${frozenLiteral(stageDP23HealthyCounterpartJoinRecord)};\n` +
      `const pondStageDP23CounterpartPrincipalRef = ${JSON.stringify(stageDP23CounterpartRef)};\n` +
      "export { assessPondCollaborativeReadSessionRequestDecision, assessPondCollaborativeReadLiveAdmissionDecision, assessPondClaimedCollaborativeReadRefusal, POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS, POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES, stageDP0LocalPrincipalRef, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS, pondStageDP23CollaborativeReadSessionRequestTemplate, pondStageDP23CollaborativeLiveAdmissionTemplate, pondStageDP14CollaborativeActivationRecordTemplate, pondStageDP14CollaborativeAdmissionRecordTemplate, pondStageDP23CounterpartLegsBundle, pondStageDP23HealthyCounterpartJoinRecord, pondStageDP23CounterpartPrincipalRef };\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-d-live-session-collaborative-read-entry.ts",
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
    resolveFromRoot("ui/generated/pond-stage-d-live-session-collaborative-read.js")
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
  record: "src/contracts/pond-collaborative-read-session-request-decision.ts",
  inputs: [
    "src/contracts/pond-collaborative-read-live-admission-decision.ts",
    "src/contracts/pond-claimed-collaborative-read-refusal.ts",
    "src/contracts/pond-collaborative-read-activation.ts",
    "src/contracts/pond-collaborative-read-admission.ts",
    "src/contracts/pond-collaborative-read-counterpart-declaration.ts",
    "src/contracts/pond-private-read-activation.ts",
    "src/contracts/pond-live-session-establishment.ts",
    "src/contracts/pond-live-session-read-gate.ts",
    "src/contracts/pond-agent-presence-observation-intake.ts",
    "src/fixtures/stage-d-p0-agent-presence.ts",
    "src/fixtures/stage-d-p14-collaborative-structural-reads.ts",
    "src/fixtures/stage-d-p23-collaborative-live-read.ts",
  ],
  renderedStages: [
    "D-P0",
    "D-P1",
    "D-P2",
    "D-P14",
    "D-P15",
    "D-P16",
    "D-P17",
    "D-P20",
    "D-P21",
    "D-P22",
    "D-P23",
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
    "Collaborative-read-lane support only: the bundle carries the D-P23 " +
    "collaborative-read session-request assessor — the receiver-recorded " +
    "request to read structural records jointly with the ONE declared " +
    "counterpart of the D-P14 join over a currently live D-P15 session, " +
    "re-running the frozen D-P15 read gate (and transitively the " +
    "establishment chain) and the frozen D-P14 counterpart join through " +
    "its own seam — plus the D-P23 collaborative live-read admission " +
    "assessor over a currently recorded request (re-running the request " +
    "through its own seam AND the frozen D-P14 collaborative activation " +
    "and admission assessors unchanged over live receiver legs + the " +
    "structural never-issued counterpart legs; the counterpart chain " +
    "cause is this lane's own), the D-P23 claimed-collaborative wall " +
    "assessor (a standing fail-closed refusal of every claimed " +
    "collaborative read result — zero echo, not even text the receiver " +
    "itself composed), the receiver-held D-P0 principal ref, the D-P2 " +
    "declared maximum age, and the frozen lane templates plus the " +
    "structural counterpart material (the hand-written ui module never " +
    "restates a frozen shape). NO record content of any principal is " +
    "read, no scope object or membership registry is created, no Release " +
    "is recorded, no counterpart is authenticated, issued, mapped, or " +
    "activated, no write, send, sign, grant, consequence, acceptance, or " +
    "authority exists here; no memory, narrative, or transcript lane is " +
    "read. The forbidden-inventory chain rides along inside the session-" +
    "request contract's own import (the frozen D-P22 union widened once " +
    "by this lane), so the D-P16, D-P17, D-P20, and D-P22 stages are " +
    "rendered here too, and the D-P14 activation/admission/join assessors " +
    "are carried because the law's independent inspection IS the re-run " +
    "through each consumer's own seam. The lane never re-runs the D-P20 " +
    "transport-policy, D-P21 reply, or D-P22 voice contracts as causes; " +
    "their inventories ride along only. The bundle name rides the " +
    "owner-approved Stage D-P15 exemption substring so the frozen walk " +
    "sees the same re-run plumbing rationale.",
};
const provenanceText = JSON.stringify(provenance, null, 2) + "\n";

const provenancePath = resolveFromRoot(
  "ui/generated/pond-stage-d-live-session-collaborative-read-provenance.json"
);
if (checkOnly) {
  const committedBundle = await readFile(
    resolveFromRoot("ui/generated/pond-stage-d-live-session-collaborative-read.js"),
    "utf8"
  );
  const committedProvenance = await readFile(provenancePath, "utf8");
  if (committedBundle !== bundleText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-collaborative-read.js differs from a fresh render."
    );
    process.exit(1);
  }
  if (committedProvenance !== provenanceText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-live-session-collaborative-read-provenance.json differs from a fresh render."
    );
    process.exit(1);
  }
  console.log("POND_STAGE_DP23_COLLABORATIVE_READ_RENDER_CHECK_PASS");
} else {
  await mkdir(dirname(fileURLToPath(provenancePath)), { recursive: true });
  await writeFile(provenancePath, provenanceText);
  console.log("POND_STAGE_DP23_COLLABORATIVE_READ_RENDERED");
}