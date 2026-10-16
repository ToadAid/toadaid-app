<!-- Activation: NOT_INCLUDED · Authority: NONE -->

# Stage D-P30 — Presentation touch-ups

## Binding

- Repository: `ToadAid/toadaid-app` (Pond).
- Stage lineage: D-P29 (home posture block) → D-P30 (presentation touch-ups
  from the user's live click-through of the merged D-P26…D-P29 shell).
- Scope class: presentation-only shell touch-up (CSS + one markup removal).

## Law anchors

Canonical ecosystem law lives in
[`ToadAid/toadaid-architecture`](https://github.com/ToadAid/toadaid-architecture);
this stage re-presents and removes existing presentation only. Non-drift
laws applied verbatim:

- Humans remain sovereign.
- Capability is not authority.
- A projection is not canonical current state.
- Personal, shared, project, and public scopes do not collapse.
- Pond projects and presents; it does not own canonical relationship
  authority.

Canonical law is silent about desktop label decoration and per-view text
run sizes; the silence is recorded (Load-bearing mechanism). No governance
semantics are introduced, and no scope fact is removed from the surfaces
that present them honestly.

## Goal

Two touch-ups from the user's live click-through:

1. **The Home scope beacon leaves the stage.** The floating
   "Active context / Project X / Project" section
   (`<section class="scope-beacon">`) on the Home lore-world stage is
   removed from the markup, together with its now-dead stylesheet rules
   (base `.scope-beacon` / `.scope-pulse` block and two media-query
   positioning lines). The scope facts themselves stay honestly presented
   in the two sources that already carried them — the context panel's
   fixture-context list (Scope / Scope type) and the topbar context
   ("Project X · Project · static fixture"); the beacon was a duplicate
   fixture label, not a scope source.
2. **The Agents stage lifts off the micro floor.** The fourth view's dense
   machinery — fact tables (`cockpit-facts` dt/dd/code), long
   `cockpit-note` prose walls, tool lists and checks, panel sub-headings
   (h4) and intro lines, agent-card labels, collaborative-read rows and
   affordances, and the generic front-face extension subtitles —
   overrides from the 10px micro floor onto the shell's 12px reading rung
   (agent-card names to 13px). Every override is scoped to `.agents-stage`,
   so the Home, World, and Knowledge views byte-keep the sizes the
   click-through called good.
3. **The agents affordances stop rendering as user-agent defaults.** The
   local-authentication and live-session controls (enrollment input, label,
   enroll / observe / establish / retract buttons) gain the same
   transparent gold-mono idiom the lane affordances already use,
   `.agents-stage` scoped.

## Load-bearing mechanism

Pure presentation. (1) removes a static duplicate label and its dead rules;
no scope-selection mechanism, module, or selftest read the beacon (checked:
zero references in any script or module). (2)/(3) are `.agents-stage`
descendant overrides appended at the stylesheet end, strictly above the
10px rung floor and at or above the sizes the base rules carry, so the
shared base rules (`cockpit-facts`, `cockpit-note`, `cockpit-tool-list`)
keep their global micro values untouched — the scoped-ness is pinned by the
D-P30 selftest. No new claim is written anywhere: every fact the lifted
text renders is the same frozen fixture projection text, only larger.

## Frozen-seam exemptions

- `ui/pond-desktop.html`: removal of the scope-beacon section (four lines)
  is the only markup change. (Verified: no D-P selftest pins the beacon.)
- `ui/pond-desktop.css`: the scope-beacon rule block and its two
  media-query lines are removed (dead-code, recorded); the overrides are
  purely additive and `.agents-stage` scoped.
- `scripts/pond-agents-shell-view-selftest.mjs`: the D-P26 CI-order window
  widens 400 → 500 characters (the additive `test:stage-d-p30` step lands
  after D-P29).
- `scripts/pond-readable-typography-selftest.mjs`: the D-P27 CI-order
  window widens 300 → 500 characters (same reason).
- `scripts/pond-chat-surface-selftest.mjs`: the D-P26→gate window widens
  400 → 500 characters (same reason).

## Scope

Everything else stays untouched:

- `ui/pond-desktop.html` — scope-beacon removal only.
- `ui/pond-desktop.css` — beacon rule removal + additive
  `.agents-stage` overrides.
- `scripts/pond-agents-legibility-selftest.mjs` — new D-P30 selftest.
- `package.json` — `test:stage-d-p30`.
- `.github/workflows/ci.yml` — D-P30 step in both verify jobs, ordered
  after the D-P29 step and before the whitespace gate.
- `docs/stage-d-p30-presentation-touch-ups.md` (this file),
  `BUILD_LIST.md`, `README.md`.

## Recorded deviations

1. **The beacon's dead stylesheet rules are removed, not left.** Markup
   removal would otherwise strand four rules; recorded rather than done
   silently, since removal (not only addition) of CSS lines is new for
   this program.
2. **The lift is a scoped override layer, not a base-rule lift.** D-P27
   moved base declarations; D-P30 appends `.agents-stage`-prefixed
   overrides so the other views byte-keep their sizes. Future cuts that
   redesign the base rules must rebase this layer.
3. **The D-P30 selftest doubles as a ladder guard** (block 5 asserts the
   10px floor over the whole stylesheet), overlapping D-P27's block 1 as a
   redundancy — deliberate, since the lift itself could otherwise drift
   below the floor.
4. **The `collab-read` / extension overrides include 11px→12px moves** for
   rows the click-through did not explicitly name; the stage principle is
   "the Agents view's reading text sits at the 12px rung or above," so
   partial lifting would leave the view internally inconsistent.
5. **The window widenings touch three prior selftests** (D-P26's, D-P27's,
   and D-P28's), each additive and commented — the standard recorded seam
   for inserting a CI step mid-sequence.

## Authority ceiling

None. Presentation-only shell touch-up; `Activation: NOT_INCLUDED`; no
module, contract, record, or renderer file touched; no behavior, channel,
admission, grant, or activation anywhere. The mic stays literally dead.

## Explicit non-goals

- No change to the context panel's fixture-context list, the topbar
  context, or any scope-selection semantics — removing a duplicate label
  is not a scope change.
- No lift of the World view's Stage C cockpit, the Home collapsed
  panels, the voice dock, the composer, the eyebrows, or the seals.
- No redesign of the agents stage layout, columns, or panel order.
- No new affordance for anything the shell refuses (the live-session
  controls stay existing affordances — styled, not added).
- No persistence, network, transport, or re-render change.