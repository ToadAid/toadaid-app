#!/usr/bin/env node
// Stage D-P31 — the chat surface gets its room: the Home voice dock folds to
// two columns (a centered voice rail, then the wide chat column), the
// transcript presents as a bordered panel even when nothing is composed, and
// the dock's grid row stops clipping the composer below the shell. CSS + one
// structural wrapper only: every D-P28 marker, order pin, and the literally
// dead mic stay untouched.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const readRepo = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const html = await readRepo("ui/pond-desktop.html");
const css = await readRepo("ui/pond-desktop.css");
const packageJson = JSON.parse(await readRepo("package.json"));

// 1. The rail wrapper: the waveform and the voice control (with the still
// dead mic) fold into one rail div that precedes the composer.
const dockStart = html.indexOf('class="voice-dock"');
assert.ok(dockStart > -1);
const railAt = html.indexOf('class="dock-side-rail"', dockStart);
const composerAt = html.indexOf('data-conversation aria-label="Conversation composer"', dockStart);
assert.ok(railAt > dockStart, "the rail opens inside the voice dock");
assert.ok(railAt < composerAt, "the rail precedes the chat column");
const railClose = html.indexOf("</div>", html.indexOf('class="voice-control"'));
const railHtml = html.slice(railAt, railClose);
for (const marker of ['class="waveform"', "mic-button", "SPEAK TO POND"]) {
  assert.ok(railHtml.includes(marker), `${marker} must live inside the rail`);
}
assert.match(html, /mic-button" type="button" disabled/);
// The chat column markers keep their D-P28 order (location-free pins there
// are already enforced by the D-P28 selftest; here only the rail must not
// have wedged itself between them).
const transcriptAt = html.indexOf("data-chat-transcript", composerAt);
const stacksAt = html.indexOf('class="chat-lane-stacks"', composerAt);
assert.ok(transcriptAt > composerAt && transcriptAt < stacksAt, "the chat column order survives");

// 2. The two-column dock: the base rule pins the template and region chrome.
assert.ok(
  css.includes(".voice-dock { grid-template-columns: minmax(210px, 0.72fr) minmax(420px, 2.1fr); align-items: stretch; }"),
  "the dock folds to a rail column and a wide chat column",
);
for (const rule of [
  ".dock-side-rail { display: grid;",
  ".dock-side-rail .waveform { height: 40px; }",
  ".dock-side-rail .voice-control { flex-direction: column;",
  ".chat-transcript-region { min-height: 218px; max-height: 320px; padding: 9px 10px; border: 1px solid var(--line); border-radius: 9px;",
  ".chat-transcript { padding: 0 2px 4px; border-bottom: 0; }",
  ".chat-transcript-header { font-size: 11px; }",
  ".chat-transcript .cockpit-note { margin: 0; padding-top: 9px; border-top: 1px dashed var(--line); font-size: 11px; }",
]) {
  assert.ok(css.includes(rule), rule);
}
// The D-P28 CSS presence pins stay verbatim (this cut overrides, never erases).
for (const rule of [".chat-transcript {", ".chat-bubble {", ".chat-posture-row {", ".chat-lane-stacks {", ".lane-stack > summary {"]) {
  assert.ok(css.includes(rule), rule);
}

// 3. The dock's own grid row stops clipping: 128px/132px became auto in the
// base shell and the <=1180px shell.
assert.match(css, /grid-template-rows: 78px minmax\(650px, 1fr\) auto;/);
assert.match(css, /grid-template-rows: 72px minmax\(620px, auto\) auto auto;/);

// 4. The rail folds open on narrow docks inside their own trailing media
// blocks — they sit after the base D-P31 block so they win the source order
// (the dock media blocks sit before it and would lose to base `display: grid`).
const trailingRail = css.slice(css.indexOf("rail-folding media overrides"));
assert.match(trailingRail, /@media \(max-width: 800px\) \{\s*\n\s*\.dock-side-rail \{ display: contents; \}\s*\n\s*\.dock-side-rail \.waveform \{ height: 60px; \}\s*\n\}/);
assert.match(trailingRail, /@media \(max-width: 540px\) \{\s*\n\s*\.dock-side-rail \.waveform \{ width: 100%; height: 42px; \}\s*\n\}/);
// The wide <=1180px column template keeps the rail proportions.
assert.match(css, /\.voice-dock \{ grid-template-columns: minmax\(210px, 0\.72fr\) minmax\(420px, 2\.1fr\); margin: 0;/);

// 5. Lift rung: every size in the new block stays on or above the 10px floor
// (the whole-stylesheet ladder is D-P27's assertion; this is the block-local guard).
const block = css.slice(css.indexOf("Stage D-P31 — the chat surface gets its room"));
for (const size of [...block.matchAll(/font-size: (\d+(?:\.\d+)?)px/g)].map((m) => Number.parseFloat(m[1]))) {
  assert.ok(size >= 10, `the D-P31 block must keep the ladder floor: found ${size}`);
}

// 6. The transcript stays record-free: no new module, no store, no transport
// (the cut is HTML structure + CSS alone).
assert.equal(html.includes("pond-chat-surface-room"), false, "no renderer joins for room");
for (const forbidden of ["localStorage", "sessionStorage", "innerHTML"]) {
  assert.equal(css.includes(forbidden), false, forbidden);
}

// 7. Package script and CI wiring, ordered after D-P30 in both verify jobs.
assert.equal(
  packageJson.scripts["test:stage-d-p31"],
  "node scripts/pond-chat-surface-room-selftest.mjs",
);
const ci = await readRepo(".github/workflows/ci.yml");
const steps = (ci.match(/Verify Stage D-P31 chat surface room/g) || []).length;
assert.equal(steps, 2, "the D-P31 step must run in both verify jobs");
assert.match(
  ci,
  // The window to the whitespace gate widened again in D-P31 (the additive
  // test:stage-d-p31 step lands after D-P30 in both verify jobs).
  /Verify Stage D-P30 presentation touch-ups[\s\S]{0,600}Verify Stage D-P31 chat surface room[\s\S]{0,300}Check committed diff whitespace/,
  "the D-P31 step must land after D-P30 in lane order",
);

console.log("POND_STAGE_DP31_CHAT_SURFACE_ROOM_SELFTEST_PASS · 7 blocks");