#!/usr/bin/env node
// Stage D-P29 — the Home posture block: the A7/A8/B3/C fixture stock on the
// Home side panel presents as one coherent posture section — an honest
// one-line roster up front and the two full established panels (A7 inventory
// with its nested A4/A8/B3-P4A reference panels, and the Stage C-P10 bridge
// cockpit) collapsed into two default-closed details. Presentation-only
// markup+CSS cut: every established panel is carried verbatim and gains no
// behavior, no affordance, and no channel.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const readRepo = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const html = await readRepo("ui/pond-desktop.html");
const css = await readRepo("ui/pond-desktop.css");
const packageJson = JSON.parse(await readRepo("package.json"));

// 1. The posture block exists as one coherent section: an honest roster of
// all five establishable-projection fixtures, in stage order, each carrying
// its own honest posture line.
assert.match(html, /<section\s+class="posture-block"\s+aria-labelledby="posture-block-title"\s+data-authority="none"\s*>/);
assert.match(html, /<h3 id="posture-block-title">Projection posture<\/h3>/);
const lanes = [...html.matchAll(/<span class="posture-lane">([^<]+)<\/span><span>([^<]+)<\/span><small>([^<]+)<\/small>/g)].map(
  (match) => match.slice(1),
);
assert.deepEqual(
  lanes.map(([, name]) => name),
  [
    "Evidence reference",
    "Agent inventory",
    "Source &amp; refusal state",
    "Sanitized receipt reference",
    "Bridge cockpit posture",
  ],
  "the roster must list the five fixture projections in stage order",
);
assert.deepEqual(
  lanes.map(([lane]) => lane),
  ["A4", "A7", "A4+A8", "B3-P4A", "C-P10"],
);
// Every roster line's small carries only honest posture prose — none of the
// fixture projections is promoted into an established fact or a grant.
// (Honest negatives like "not verified" / "declared, not granted" stay fine;
// the assertion forbids only affirmative promotions.)
for (const [, , small] of lanes) {
  assert.doesNotMatch(small, /(?<!not )\b(granted|verified|connected)\b/i);
  assert.doesNotMatch(small, /\bdelivered receipt\b/i);
}
assert.match(lanes[0][2], /^reference only · /);
assert.match(lanes[1][2], /capability declared, not granted/);
assert.match(lanes[3][2], /^reference-only · /);
assert.match(lanes[4][2], /no transport · current truth withheld/);

// 2. The two collapsed stacks exist, default-closed, and no other details is
// nested inside the posture block.
assert.equal((html.match(/data-home-lane-stack="(a7|cockpit)"/g) || []).length, 2);
assert.equal((html.match(/<details class="lane-stack home-lane-stack"[^>]* open>/g) || []).length, 0,
  "both home posture stacks must default to closed");
assert.match(html, /<details class="lane-stack home-lane-stack" data-home-lane-stack="a7">\s*<summary>Agent inventory<small>Stage A7 · six profiles · declared, not granted<\/small><\/summary>/);
assert.match(html, /<details class="lane-stack home-lane-stack" data-home-lane-stack="cockpit">\s*<summary>Bridge cockpit<small>Stage C-P10 · fixture-rendered · no transport<\/small><\/summary>/);

// 3. Every established panel sits inside its own collapsed stack, verbatim:
// the A7 inventory (with its nested A8 projection-state, A4 evidence
// reference, and B3-P4A receipt reference) inside the a7 stack, and the
// Stage C-P10 cockpit record inside the cockpit stack. Presence counts stay
// exactly one each — the panels moved, nothing was duplicated.
const bounds = {
  a7: html.indexOf('data-home-lane-stack="a7"'),
  inventory: html.indexOf('data-inventory-source="stage-a7-primary-descriptor-matrix"'),
  cockpit: html.indexOf('data-home-lane-stack="cockpit"'),
  cockpitRecord: html.indexOf('data-cockpit-record-version="pond-stage-c-cockpit-record-c-p10"'),
  agents: html.indexOf('class="agents-summary-panel"'),
};
assert.ok(
  bounds.a7 < bounds.inventory && bounds.inventory < bounds.cockpit &&
    bounds.cockpit < bounds.cockpitRecord && bounds.cockpitRecord < bounds.agents,
  "order: a7 stack → inventory → cockpit stack → cockpit record → agents summary",
);
assert.equal((html.match(/data-inventory-source="stage-a7-primary-descriptor-matrix"/g) || []).length, 1);
assert.equal((html.match(/data-cockpit-record-version="pond-stage-c-cockpit-record-c-p10"/g) || []).length, 1);
assert.equal((html.match(/data-receipt-ref="receipt:fixture:stage-b3-p4a:reference-001"/g) || []).length, 1,
  "the B3-P4A receipt reference panel moved with the inventory, not duplicated");
assert.equal((html.match(/data-featured-subject-ref="descriptor:fixture:stage-a7:specialist"/g) || []).length, 2,
  "the featured pin rides the inventory and its nested A8 projection panel, both inside the a7 stack");

// 4. The rest of the Home surface kept its shape: welcome header, authority
// seal, and the static gates precede the posture block; the agents summary
// stays after it, closing the aside.
assert.equal((html.match(/class="agents-summary-panel"/g) || []).length, 1);
const asideClose = html.indexOf("</aside>", bounds.agents);
assert.ok(asideClose !== -1 && asideClose - bounds.agents < 800,
  "the agents summary is the last part of the Home context panel before its close");
assert.ok(html.slice(asideClose, asideClose + 300).includes('class="voice-dock"'),
  "the voice dock still follows the Home aside");

// 5. The cut is presentation-only markup: no behavior, no new affordances,
// and no hand-written script tags.
assert.doesNotMatch(html, /onclick=/);
assert.doesNotMatch(html, /onchange=/);
assert.equal((html.match(/<script type="module"/g) || []).length, 23,
  "the module script set is unchanged — widened in D-P32: the additive docking-lane renderer joins it (frozen files untouched on disk preserved)");

// 6. The stylesheet carries the posture-block rules and reuses the D-P28
// lane-stack affordance; the pre-ladder typography ladder stays intact.
for (const rule of [
  /\.posture-block \{/,
  /\.posture-block header h3 \{[^}]*font-size: 15px;/,
  /\.posture-roster \{/,
  /\.posture-lane \{[^}]*font: 10px var\(--mono\);/,
  /\.home-posture-stacks \{/,
  /\.home-lane-stack > summary small \{ text-transform: none; \}/,
]) {
  assert.match(css, rule);
}
assert.match(css, /\.evidence-reference-panel > code \{[^}]*font: 10px\/1\.5 var\(--mono\);/,
  "the D-P27 spot check on the carried panel's stylesheet rule still holds");
const declarations = [...css.matchAll(/font(?:-size)?: ?(\d+(?:\.\d+)?)px/g)].map(
  (match) => Number.parseFloat(match[1]),
);
for (const size of declarations) {
  assert.ok(size >= 10, `every font size must sit on the 10px-or-above ladder: found ${size}`);
}

// 7. Package script and CI presence (both verify jobs), ordered after D-P28
// and before the whitespace gate.
assert.equal(
  packageJson.scripts["test:stage-d-p29"],
  "node scripts/pond-home-posture-block-selftest.mjs",
);
const ci = await readRepo(".github/workflows/ci.yml");
const steps = (ci.match(/Verify Stage D-P29 home posture block/g) || []).length;
assert.equal(steps, 2, "the D-P29 step must run in both verify jobs");
assert.match(
  ci,
  // The D-P29→gate window is a floor, not an exact total: later
  // presentation cuts land between D-P29 and the gate. Widened in D-P32
  // (the additive test:stage-d-p32 step lands after D-P31).
  /Verify Stage D-P28 chat surface[\s\S]{0,300}Verify Stage D-P29 home posture block[\s\S]{0,600}Check committed diff whitespace/,
);

// 8. Nothing outside the presentation surface moved: the frozen lane and
// renderer modules are untouched files on disk (the cut never imports or
// edits them), and the shell still mounts its view set.
for (const untouched of [
  "ui/pond-shell.js",
  "ui/pond-conversation.js",
  "ui/pond-delivery.js",
  "ui/pond-dispatch.js",
  "ui/pond-receipts.js",
  "ui/pond-transport.js",
  "ui/pond-replies.js",
  "ui/pond-voice.js",
  "ui/pond-chat-surface.js",
]) {
  assert.ok(await readRepo(untouched), "present");
}

console.log("POND_STAGE_DP29_HOME_POSTURE_BLOCK_SELFTEST_PASS · 8 blocks");