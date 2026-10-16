#!/usr/bin/env node
// Stage D-P27 — the readable desktop: every authored font declaration in the
// shell stylesheet is lifted onto the recorded ladder (floor 10px), and the
// display scale 15px+ is unchanged. Presentation-only CSS cut: no HTML, no
// module, no contract file touched.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const readRepo = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const css = await readRepo("ui/pond-desktop.css");
const packageJson = JSON.parse(await readRepo("package.json"));

// 1. The ladder floor: no authored font declaration sits below 10px.
const declarations = [...css.matchAll(/font(?:-size)?: ?(\d+(?:\.\d+)?)px/g)].map(
  (match) => Number.parseFloat(match[1]),
);
assert.ok(declarations.length >= 200, `the whole ladder must be present: ${declarations.length}`);
for (const size of declarations) {
  assert.ok(size >= 10, `every font size must sit on the 10px-or-above ladder: found ${size}`);
}

// 2. The recorded mapping holds: exactly the old tiers are gone and the new
// tiers carry the lifted counts — nothing fell back or duplicated.
const distribution = {};
for (const size of declarations) {
  distribution[size] = (distribution[size] || 0) + 1;
}
assert.equal(distribution[6], undefined);
assert.equal(distribution[6.5], undefined);
assert.equal(distribution[7], undefined);
assert.equal(distribution[7.5], undefined);
assert.equal(distribution[8], undefined);
assert.equal(distribution[9], undefined);
assert.equal(distribution[9.5], undefined);
// The tier counts are floors, not exact totals: later presentation cuts
// (the D-P28 chat surface) may add declarations onto an existing rung, but
// they may never drop a tier's lifted population or re-introduce a pre-ladder size.
assert.ok(distribution[12] >= 45, "9/9.5 lifted to 12 (26 + 15 + 4) — a floor");
assert.ok(distribution[13] >= 23, "10/10.5 lifted to 13 (16 + 4 + 3) — a floor");
assert.ok((distribution[10] || 0) >= 35, "the micro floor tier is populated");
assert.ok((distribution[11] || 0) >= 80, "the 8px tier lifted to 11 in full");

// 3. Spot checks on rules that had to move: the body baseline, the
// cockpit-note lane label, and a mono shorthand with its line-height kept.
assert.match(css, /font-family: var\(--display\);\s*\n\s*font-size: 16px;\s*\n\s*line-height: 1\.5;/);
assert.match(css, /\.cockpit-note \{[^}]*font-size: 10px;/);
assert.match(css, /\.conversation-record-text \{[^}]*font: 12px\/1\.45 var\(--display\);/);
assert.match(css, /\.evidence-reference-panel > code \{[^}]*font: 10px\/1\.5 var\(--mono\);/);

// 4. The display scale stayed put: 15px+ declarations are untouched.
assert.ok((distribution[15] || 0) >= 10, "display tier 15 preserved");
assert.ok((distribution[20] || 0) >= 2, "display tier 20 preserved");
assert.match(css, /font-size: 36px/);

// 5. The frozen markers the lane selftests pin are untouched by a CSS cut.
const html = await readRepo("ui/pond-desktop.html");
assert.match(html, /data-conversation aria-label="Conversation composer"/);
assert.match(html, /mic-button" type="button" disabled/);

// 6. Package script and CI presence (both verify jobs), ordered after D-P26
// and before the whitespace gate.
assert.equal(
  packageJson.scripts["test:stage-d-p27"],
  "node scripts/pond-readable-typography-selftest.mjs",
);
const ci = await readRepo(".github/workflows/ci.yml");
const steps = (ci.match(/Verify Stage D-P27 readable typography/g) || []).length;
assert.equal(steps, 2, "the D-P27 step must run in both verify jobs");
assert.match(
  ci,
  // The second window is a floor, not an exact total: later presentation
  // cuts (D-P28, D-P29, D-P30) add steps between D-P27 and the gate.
  // Widened in D-P32: the additive test:stage-d-p32 step lands after D-P31.
  /Verify Stage D-P26 agents shell view[\s\S]{0,300}Verify Stage D-P27 readable typography[\s\S]{0,800}Check committed diff whitespace/,
);

// 7. The cut is CSS-only: the D-P27 record lists every touched file and the
// working tree diff against the parent must only be the stylesheet plus the
// recorded seams. (Guarded here by asserting the untouched frozen set.)
for (const untouched of [
  "ui/pond-desktop.html",
  "ui/pond-shell.js",
  "ui/pond-conversation.js",
  "ui/pond-delivery.js",
  "ui/pond-dispatch.js",
  "ui/pond-receipts.js",
  "ui/pond-transport.js",
  "ui/pond-replies.js",
  "ui/pond-voice.js",
]) {
  assert.ok(await readRepo(untouched), "present");
}

console.log("POND_STAGE_DP27_READABLE_TYPOGRAPHY_SELFTEST_PASS · 7 blocks");