#!/usr/bin/env node
// Stage D-P28 — the chat surface: one bubble transcript over the frozen
// lane postures in the Home voice dock's composer, with the seven debug
// lane stacks collapsed into default-closed details. Presentation-only
// projection cut: no contract, fixture, record, or frozen renderer change.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const readRepo = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const html = await readRepo("ui/pond-desktop.html");
const chatJs = await readRepo("ui/pond-chat-surface.js");
const css = await readRepo("ui/pond-desktop.css");
const packageJson = JSON.parse(await readRepo("package.json"));
// The renderer itself, imported the lane-selftest way (the module's top-level
// document guard is false under Node, so importing never auto-renders).
const { renderPondChatSurface } = await import("../ui/pond-chat-surface.js");

// 1. Markup contract: the transcript region lives inside the conversation
// composer, above the input row, and the composer's own frozen markers are
// untouched.
const formStart = html.indexOf('data-conversation aria-label="Conversation composer"');
assert.ok(formStart > -1);
const transcriptAt = html.indexOf('data-chat-transcript', formStart);
const inputRowAt = html.indexOf('class="composer-input-row"', formStart);
const statusAt = html.indexOf("data-conversation-status", formStart);
assert.ok(transcriptAt > -1, "the transcript target must exist");
assert.ok(inputRowAt > transcriptAt, "the transcript presents above the input row");
assert.ok(statusAt > inputRowAt, "the frozen conversation status stays below");
assert.match(html, /Message a specialist agent/);
assert.match(html, /data-conversation-address/);
assert.match(html, /data-conversation-composed-text/);
assert.match(html, /data-conversation-send/);
assert.match(html, /data-conversation-surface/);
assert.match(html, /mic-button" type="button" disabled/);

// 2. The seven lane stacks are default-closed details wrapping each frozen
// lane's targets, in lane order, inside the composer.
const stacksStart = html.indexOf('class="chat-lane-stacks"', formStart);
assert.ok(stacksStart > statusAt, "the lane stacks live below the status line");
const stackOrder = ["conversation", "delivery", "dispatch", "receipt", "transport", "reply", "voice"];
let cursor = stacksStart;
for (const lane of stackOrder) {
  const at = html.indexOf(`data-lane-stack="${lane}"`, cursor);
  assert.ok(at > cursor, `the ${lane} stack must follow the lane order`);
  cursor = at;
}
const stacksHtml = html.slice(stacksStart, html.indexOf("</div>\n          <p class=\"cockpit-note\">Compositions inform only", stacksStart));
for (const marker of [
  "data-delivery-note", "data-delivery-status", "data-delivery-list",
  "data-dispatch-note", "data-dispatch-status", "data-dispatch-list",
  "data-receipt-note", "data-receipt-status", "data-receipt-list",
  "data-transport-note", "data-transport-status", "data-transport-list",
  "data-reply-note", "data-reply-status", "data-reply-list",
  "data-voice-note", "data-voice-status", "data-voice-list", "data-voice-wall",
]) {
  assert.ok(stacksHtml.includes(marker), `${marker} must survive inside the collapsed stacks`);
}

// 3. The transcript module imports the frozen lane postures by their exact
// export names, in lane order, and never through a later-lane back door.
const chatImports = [
  'import { currentConversationSurfacePosture } from "./pond-conversation.js";',
  'import { currentDeliveryPosture } from "./pond-delivery.js";',
  'import { currentDispatchPosture } from "./pond-dispatch.js";',
  'import { currentReceiptPosture } from "./pond-receipts.js";',
  'import { currentTransportPosture } from "./pond-transport.js";',
  'import { currentReplyPosture } from "./pond-replies.js";',
  'import { currentVoicePosture } from "./pond-voice.js";',
];
let importCursor = 0;
for (const line of chatImports) {
  const at = chatJs.indexOf(line, importCursor);
  assert.ok(at >= importCursor, `the frozen lane import must sit in lane order: ${line}`);
  importCursor = at + line.length;
}

// 4. The transcript records nothing and triggers nothing: no lane record
// call, no pushed entry, no transport or storage primitive, and innerHTML
// never appears (textContent discipline).
for (const forbidden of [
  "recordConversationComposedText(",
  "recordDeliveryCandidatePreparation(",
  "performReceiverDispatch(",
  "recordDeliveryReceipt(",
  "recordTransportPolicy(",
  "recordReplyRequest(",
  "recordCognitionProviderDecision(",
  "recordVoiceInputRequest(",
  "recordTranscriptionDecision(",
  "fetch(",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "innerHTML",
]) {
  assert.equal(chatJs.includes(forbidden), false, forbidden);
}
// The transcript owns no record state: no module-scope record/decision array
// (every lane renderer's hazard) exists — render arrays are function-local.
assert.doesNotMatch(chatJs, /const (\w*[Rr]ecord\w*|\w*[Dd]ecision\w*) = \[\]/);

// 5. Fail-closed render drive over stub documents, exactly like the frozen
// lane selftests drive their renderers.
assert.equal(renderPondChatSurface(undefined), false);
const missingTargetDocument = () => ({ querySelector: () => null });
assert.equal(renderPondChatSurface(missingTargetDocument()), false);
const addEventListenerCalls = [];
const stubElement = () => ({
  className: "",
  textContent: "",
  append: () => {},
  replaceChildren: () => {},
});
const liveDocument = () => {
  const transcriptTarget = stubElement();
  return {
    querySelector: (selector) =>
      selector === "[data-chat-transcript]" ? transcriptTarget : null,
    addEventListener: (name, handler) => addEventListenerCalls.push({ name, handler }),
    createElement: () => stubElement(),
  };
};
const globalRefs = { addEventListener: (name, handler) => addEventListenerCalls.push({ name: `window:${name}`, handler }) };
const previousGlobal = globalThis.addEventListener;
globalThis.addEventListener = globalRefs.addEventListener;
try {
  assert.equal(renderPondChatSurface(liveDocument()), true);
} finally {
  globalThis.addEventListener = previousGlobal;
}
assert.deepEqual(
  addEventListenerCalls.map(({ name }) => name.replace(/^window:/, "")).sort(),
  ["click", "focus", "popstate"].sort(),
  "the transcript re-presents on clicks, focus, and shell navigation",
);

// 6. Presentation honesty: every verdict label maps a frozen vocabulary
// value or renders the raw value verbatim — the fixed mappings appear with
// the exact frozen literals, and the mapping helper falls back to the value
// itself.
for (const vocabulary of [
  "delivery_candidate_prepared_session_scoped_no_dispatch",
  "dispatch_performed_session_scoped_in_process_no_receipt",
  "transport_policy_recorded_session_scoped_no_external_transport",
  "in_session_verified_boundary_session_scoped",
  "out_of_session_untrusted_epoch_inspection_only_never_consumer_admissible",
  "out_of_session_record_not_admissible",
]) {
  assert.ok(chatJs.includes(vocabulary), `the frozen vocabulary value must exist in the label map: ${vocabulary}`);
}
assert.match(chatJs, /const labelOf = \(labels, value\) => labels\[value\] \?\? value;/);
assert.match(chatJs, /delivered: "delivered receipt recorded"/);
assert.match(chatJs, /reply_request_recorded_session_scoped_no_reply_composed:/);

// 7. Script tag order: after the last lane module it reads, before the shell.
const voiceTag = html.indexOf('src="pond-voice.js"');
const chatTag = html.indexOf('src="pond-chat-surface.js"');
const shellTag = html.indexOf('src="pond-shell.js"');
assert.ok(voiceTag !== -1 && chatTag !== -1 && shellTag !== -1);
assert.ok(chatTag > voiceTag, "the transcript loads after the voice module");
assert.ok(shellTag > chatTag, "the transcript loads before the shell module");

// 8. The frozen lane modules stay untouched by the chat lane: none of them
// ever mentions the transcript module, and the shell doesn't either.
for (const lane of [
  "ui/pond-conversation.js",
  "ui/pond-delivery.js",
  "ui/pond-dispatch.js",
  "ui/pond-receipts.js",
  "ui/pond-transport.js",
  "ui/pond-replies.js",
  "ui/pond-voice.js",
  "ui/pond-collaborative-read.js",
  "ui/pond-live-session.js",
  "ui/pond-shell.js",
]) {
  const laneText = await readRepo(lane);
  assert.equal(laneText.includes("pond-chat"), false, lane);
}

// 9. CSS presence and package + CI wiring, ordered after D-P27 in both jobs.
for (const rule of [".chat-transcript {", ".chat-bubble {", ".chat-posture-row {", ".chat-lane-stacks {", ".lane-stack > summary {", ".composer > p {"]) {
  assert.ok(css.includes(rule), rule);
}
assert.equal(
  packageJson.scripts["test:stage-d-p28"],
  "node scripts/pond-chat-surface-selftest.mjs",
);
const ci = await readRepo(".github/workflows/ci.yml");
const chatSteps = (ci.match(/Verify Stage D-P28 chat surface/g) || []).length;
assert.equal(chatSteps, 2, "the D-P28 step must run in both verify jobs");
assert.match(
  ci,
  /Verify Stage D-P27 readable typography[\s\S]{0,300}Verify Stage D-P28 chat surface[\s\S]{0,300}Check committed diff whitespace/,
);
assert.match(
  ci,
  // Widened in D-P30: the additive test:stage-d-p30 step lands after D-P29.
  /Verify Stage D-P26 agents shell view[\s\S]{0,500}Check committed diff whitespace/,
  "the D-P26 order pin survives with the D-P27 and D-P28 steps inserted",
);

console.log("POND_STAGE_DP28_CHAT_SURFACE_SELFTEST_PASS · 9 blocks");