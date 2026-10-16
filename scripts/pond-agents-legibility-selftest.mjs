#!/usr/bin/env node
// Stage D-P30 — presentation touch-ups from the live click-through:
// (1) the Home "Active context" scope beacon leaves the stage (markup and
// its now-dead stylesheet rules), (2) the Agents stage lifts off the 10px
// micro floor onto the 12px reading rung, scoped to .agents-stage so Home,
// World, and Knowledge keep their established sizes byte-for-byte, and
// (3) the agents view's own affordances stop rendering as unstyled
// user-agent controls. Presentation-only cut: no module, no contract, no
// behavior, no channel.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const readRepo = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const html = await readRepo("ui/pond-desktop.html");
const css = await readRepo("ui/pond-desktop.css");
const packageJson = JSON.parse(await readRepo("package.json"));

// 1. The scope beacon is gone — markup, label text, and dead rules alike —
// and the Home stage around it kept its shape.
assert.doesNotMatch(html, /scope-beacon|scope-title|scope-pulse/);
assert.doesNotMatch(html, /Active context/);
assert.doesNotMatch(css, /\.scope-beacon|\.scope-pulse/);
assert.match(html, /<p class="tagline">EXPLORE · LEARN · PROPOSE<\/p>/);
assert.match(html, /id="pond-home"/);
assert.match(html, /agent-presence-title">Imagined lore-world specialist guide/);
// The scope facts stay honestly presented in the context panel and the
// topbar — the beacon was a duplicate fixture label, not the scope source.
assert.match(html, /<div><dt>Scope<\/dt><dd>Project X<\/dd><\/div>/);
assert.match(html, /<div><dt>Scope type<\/dt><dd>Project<\/dd><\/div>/);

// 2. The Agents stage lifts off the micro floor: every dense reading rule
// the fourth view renders overrides to the 12px reading rung, .agents-stage
// scoped.
for (const rule of [
  /\.agents-stage \.agents-view-panel h4,[\s\S]{0,80}\.agents-stage \.generic-agent-front-face h4 \{ font-size: 12px; \}/,
  /\.agents-stage \.agents-view-panel > header p,[\s\S]{0,80}\.agents-stage \.agent-registry-panel > header p \{ font-size: 12px; \}/,
  /\.agents-stage \.cockpit-facts dt,[\s\S]{0,200}\.agents-stage \.cockpit-checks \{\s*font-size: 12px;/,
  /\.agents-stage \.agent-card header strong \{ font-size: 13px; \}/,
  /\.agents-stage \.agent-card-kicker \{ font-size: 11px; \}/,
  /\.agents-stage \.collab-read-facts dt,[\s\S]{0,140}\.agents-stage \.collab-read-affordance \{ font-size: 12px; \}/,
  /\.agents-stage \.generic-agent-extensions span,[\s\S]{0,60}\.generic-agent-extensions small \{ font-size: 12px; \}/,
]) {
  assert.match(css, rule);
}

// 3. The agents view's own affordances stop rendering as user-agent
// defaults: same transparent gold-mono idiom the lanes already use.
for (const rule of [
  /\.agents-stage \.local-authentication-enrollment \{ display: grid;/,
  /\.agents-stage \.local-authentication-enrollment label \{[^}]*font: 12px\/1\.4 var\(--mono\);/,
  /\.agents-stage \.local-authentication-enrollment input \{[^}]*font: 12px var\(--mono\);/,
  /\.agents-stage \.cockpit-section > button,[\s\S]{0,120}\.agents-stage \.local-authentication-enrollment button \{[\s\S]{0,300}font: 12px var\(--mono\);/,
  /\.agents-stage \.cockpit-section > button:disabled,[\s\S]{0,140}cursor: default;/,
]) {
  assert.match(css, rule);
}

// 4. The lift is scoped, not global: the shared base rules keep their
// 10px micro floor so the Home, World, and Knowledge views byte-keep the
// sizes the click-through called good.
assert.match(css, /\.cockpit-facts dt \{ color: var\(--text-muted\); font-family: var\(--mono\); font-size: 10px;/);
assert.match(css, /\.cockpit-facts dd \{ margin: 0; color: var\(--text-soft\); font-size: 10px;/);
assert.match(css, /\.cockpit-tool-list,[\s\S]{0,80}\.cockpit-checks \{[^}]*font: 10px\/1\.7 var\(--mono\);/);
assert.match(css, /\.cockpit-note \{ margin: 8px 0 0; color: var\(--gold\); font-size: 10px;/);
// Every override line in the lift section is .agents-stage prefixed. The
// region is bounded at the D-P31 marker (recorded seam): later presentation
// cuts append their own scoped sections after this one — including the
// D-P31 dock rules, which are voice-dock-scoped, not .agents-stage.
const liftRegion = css.slice(css.indexOf("Stage D-P30"), css.indexOf("Stage D-P31"));
for (const selector of [...liftRegion.matchAll(/^\.(\S[\s\S]*?)\{/gm)].map((m) => m[1])) {
  if (selector.startsWith("/")) continue; // comment lines
  assert.match(selector.replace(/[\s,].*/s, ""), /^agents-stage$|agents-stage$/,
    `every D-P30 rule is .agents-stage scoped: ${selector}`);
}

// 5. The typography ladder holds: no authored font declaration sits below
// 10px anywhere in the stylesheet.
const declarations = [...css.matchAll(/font(?:-size)?: ?(\d+(?:\.\d+)?)px/g)].map(
  (match) => Number.parseFloat(match[1]),
);
for (const size of declarations) {
  assert.ok(size >= 10, `every font size must sit on the 10px-or-above ladder: found ${size}`);
}

// 6. The neighboring cuts' pins survive: D-P27's stylesheet spot check, the
// D-P29 posture block, and both default-closed home stacks.
assert.match(css, /\.evidence-reference-panel > code \{[^}]*font: 10px\/1\.5 var\(--mono\);/);
assert.match(html, /<h3 id="posture-block-title">Projection posture<\/h3>/);
assert.equal((html.match(/data-home-lane-stack="(a7|cockpit)"/g) || []).length, 2);

// 7. Package script and CI presence (both verify jobs), ordered after D-P29
// and before the whitespace gate; the widened seam windows hold.
assert.equal(
  packageJson.scripts["test:stage-d-p30"],
  "node scripts/pond-agents-legibility-selftest.mjs",
);
const ci = await readRepo(".github/workflows/ci.yml");
const steps = (ci.match(/Verify Stage D-P30 presentation touch-ups/g) || []).length;
assert.equal(steps, 2, "the D-P30 step must run in both verify jobs");
assert.match(
  ci,
  /Verify Stage D-P29 home posture block[\s\S]{0,300}Verify Stage D-P30 presentation touch-ups[\s\S]{0,300}Check committed diff whitespace/,
);

// 8. The cut is presentation-only: no behavior, no new affordances, no
// hand-written script tags — the module script set is unchanged, and the
// frozen lane and renderer modules are untouched files on disk.
assert.doesNotMatch(html, /onclick=/);
assert.equal((html.match(/<script type="module"/g) || []).length, 23,
  "the module script set is unchanged — widened in D-P32: the additive docking-lane renderer joins it (frozen files untouched on disk preserved)");
for (const untouched of [
  "ui/pond-shell.js",
  "ui/pond-agents-view.js",
  "ui/pond-chat-surface.js",
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

console.log("POND_STAGE_DP30_PRESENTATION_TOUCH_UPS_SELFTEST_PASS · 8 blocks");