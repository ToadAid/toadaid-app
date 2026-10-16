#!/usr/bin/env node
// Stage D-P26 — the Agents shell view: the Agents nav item is a live view,
// the three Stage D agent panels live on it (moved verbatim out of the Home
// context panel), and Home carries a slim posture summary instead.
// Presentation-only shell polish: no contract, fixture, or frozen cut change.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const readRepo = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const html = await readRepo("ui/pond-desktop.html");
const shellJs = await readRepo("ui/pond-shell.js");
const packageJson = await readRepo("package.json");

// 1. The Agents nav item is a live view link, not a Later placeholder.
assert.match(
  html,
  /<li><a class="nav-item" href="#pond-agents" data-pond-view-link="agents" data-resting-label="Read-only"><span class="nav-symbol"[^>]*>♙<\/span>/,
);
assert.doesNotMatch(html, /nav-item is-later">\s*<span[^>]*>♙/);
assert.equal(
  /<li>Agents\s*<small>Later<\/small>/.test(html),
  false,
  "agents nav must not stay a Later placeholder",
);

// 2. The Agents view is a real main view with the read-only posture.
assert.match(
  html,
  /<main\s*\n*\s*class="world-stage agents-stage"\s*\n\s*id="pond-agents"\s*\n\s*tabindex="-1"\s*\n\s*data-pond-view="agents"/,
);
assert.match(html, /data-runtime-connection="not_included"\s*\n\s*hidden\s*\n\s*>\s*\n\s*<div class="world-stage-glow"/);

// 3. The three Stage D agent panels live INSIDE the Agents view, before the
// context-panel aside, and nowhere else.
const agentsOpen = html.indexOf('id="pond-agents"');
const asideOpen = html.indexOf('class="context-panel"');
assert.ok(agentsOpen > -1 && asideOpen > agentsOpen, "agents main must precede the context panel");
for (const marker of [
  'class="agents-view-panel"',
  'class="agent-registry-panel"',
  "data-generic-agent-front-face",
  "data-agents-record-version",
  "data-agent-registry-record-version",
  "data-generic-agent-record-version",
]) {
  const at = html.indexOf(marker);
  assert.ok(
    at > agentsOpen && at < asideOpen,
    `${marker} must sit inside the Agents view`,
  );
  assert.equal(
    html.slice(asideOpen).includes(marker),
    false,
    `${marker} must not remain on the Home context panel`,
  );
}

// 4. Home carries the slim summary card with the live view link.
assert.match(html, /class="agents-summary-panel"/);
assert.match(html, /agents-summary-title/);
assert.match(
  html,
  /<a class="agents-summary-link" href="#pond-agents" data-pond-view-link="agents" data-resting-label="Read-only">Open the Agents view<small>Read-only<\/small><\/a>/,
);
const summaryAt = html.indexOf('class="agents-summary-panel"');
assert.ok(summaryAt > asideOpen, "summary card must sit on the Home context panel");

// 5. The shell wires the fourth view: supported view, hash map, title, and
// context, with the agents case additive to the existing three.
assert.match(shellJs, /new Set\(\["home", "world", "knowledge", "agents"\]\)/);
assert.match(shellJs, /"#pond-agents": "agents"/);
assert.match(shellJs, /view === "agents"\s*\n\s*\? "Agents"/);
assert.match(shellJs, /<span>Governed agents<\/span><small>Fixture projection · authority none<\/small>/);
assert.match(shellJs, /view === "agents"\s*\n\s*\? "#pond-agents"/);

// 6. The moved panels keep every frozen marker the lane selftests pin, and
// the frozen D-P16 conversation composer stays on the Home voice dock.
for (const marker of [
  'data-conversation aria-label="Conversation composer"',
  "data-delivery-note",
  "data-dispatch-list",
  "data-receipt-status",
  "data-transport-note",
  "data-reply-list",
  "data-voice-wall",
  /mic-button" type="button" disabled/,
  'data-local-authentication-secret',
  "data-live-session-establish",
  "data-collab-read-wall",
]) {
  assert.equal(
    marker instanceof RegExp ? marker.test(html) : html.includes(marker),
    true,
    `frozen marker must survive the move: ${marker}`,
  );
}
const dockStart = html.indexOf('class="voice-dock"');
for (const marker of ["data-conversation", "data-delivery-note", "data-voice-wall"]) {
  const at = html.indexOf(String(marker));
  assert.ok(at > dockStart, `${marker} must remain within the Home voice dock`);
}

// 7. Package script and CI presence: the D-P26 selftest and the D-P25 CI step
// Codex's cut omitted (both verify jobs).
assert.match(packageJson, /"test:stage-d-p26"/);
const ci = await readRepo(".github/workflows/ci.yml");
assert.ok(ci.includes("npm run test:stage-d-p25"), "CI must run the D-P25 selftest Codex omitted");
assert.ok(ci.includes("npm run test:stage-d-p26"), "CI must run the D-P26 selftest");
assert.match(
  ci,
  /Verify Stage D-P25 generic agent front face[\s\S]{0,120}Verify Stage D-P26 agents shell view/,
  "the new CI steps must be ordered after the existing Stage D steps",
);
assert.match(
  ci,
  // The window to the whitespace gate widened again in D-P30 (the additive
  // test:stage-d-p30 step lands after D-P29 in both verify jobs).
  /Verify Stage D-P24[\s\S]{0,160}Verify Stage D-P25[\s\S]{0,120}Verify Stage D-P26[\s\S]{0,500}Check committed diff whitespace/,
  "the Stage D steps must keep their lane order (the D-P27 steps land after D-P26)",
);

// 8. Hygiene: no transport or storage primitive enters the new shell code.
for (const forbidden of ["fetch(", "WebSocket", "localStorage", "sessionStorage"]) {
  assert.equal(shellJs.includes(forbidden), false, forbidden);
}

console.log("POND_STAGE_DP26_AGENTS_SHELL_VIEW_SELFTEST_PASS · 8 blocks");