<!-- Activation: NOT_INCLUDED · Authority: NONE -->

# Stage D-P31 — The chat surface gets its room

## Binding

- Repository: `ToadAid/toadaid-app` (Pond).
- Stage lineage: D-P28 (chat surface) → D-P29 → D-P30 → D-P31 (follow-up
  from the user's click-through verdict: "the chat surface is not there
  yet").
- Scope class: presentation-only shell restructure (one markup wrapper +
  CSS; no module, contract, fixture, record, or frozen renderer change).

## Law anchors

Canonical ecosystem law lives in
[`ToadAid/toadaid-architecture`](https://github.com/ToadAid/toadaid-architecture);
this stage re-presents existing fixtures only. Non-drift laws applied
verbatim:

- Humans remain sovereign.
- Capability is not authority.
- A message is not a grant.
- A projection is not canonical current state.
- Pond projects and presents; it does not own canonical relationship
  authority.

Canonical law is silent about the desktop voice dock's internal column
structure, transcript panel chrome, and shell grid row sizing; the silence
is recorded (Load-bearing mechanism). The D-P15/D-P16 conversation law is
untouched: composition still requires an established live session, non-live
compositions still record nothing, and the empty state still refuses
honestly — the cut only makes those honest states presentable.

## Goal

Three problems from the click-through, one fix:

1. **The transcript reads as a panel.** The bubble transcript region
   `.chat-transcript-region` gains visible chrome — border, radius, padding,
   and a background — with a content min-height (218px) under the existing
   scroll ceiling (300px → 320px), so the chat is a visible surface even
   when nothing is composed or when composition is refused. The transcript
   header and its honest empty-state note lift off the 10px floor onto the
   11px rung, and the note gains a divider that anchors it inside the panel.
2. **The voice rail stops wasting half the dock.** `div.dock-side-rail`
   wraps the waveform and the voice control (same markup content — the
   literally dead mic included), and the dock's three columns collapse to
   two: a centered narrow rail column and a wide chat column
   (`minmax(210px, 0.72fr) minmax(420px, 2.1fr)`). The rail centers
   vertically; the voice control stacks (waveform above, mic and label
   below) inside it.
3. **The composer stops clipping below the shell.** The shell grid's voice
   row was fixed at `128px` (base) / `132px` (`<=1180px`) — the D-P28
   composer (label + transcript + input row + status + seven lane stacks +
   honesty note) never fit in it and silently clipped. Both rows become
   `auto`, so the dock takes its content height and the page presents the
   full chat surface by scrolling.

## Load-bearing mechanism

Pure presentation. The rail wrapper is markup only — D-P28's pins are
location-free inside the composer and none pinned the dock's children, so
every marker, order pin, and the frozen renderer file keep their exact
values (checked: zero selftest references to `waveform` / `voice-control`
/ the dock's column template). The empty state renders the same frozen
posture (header line + honest note) the D-P28 module always produced; only
its container is now visible. `display: contents` on narrow breakpoints
unwraps the rail so the existing media-query layout orders keep working,
with the folding rules appended at the stylesheet end in their own trailing
media blocks so they win the source order against the appended base block
(equal specificity — the earlier dock media blocks would lose otherwise).
No new claim is written anywhere: every rendered fact is the same frozen
lane posture.

## Frozen-seam exemptions

- `ui/pond-desktop.html`: one structural wrapper (`dock-side-rail` around
  the waveform + voice-control children) is the only markup change; the
  composer's contents are untouched byte-for-byte.
- `ui/pond-desktop.css`: the D-P31 base block, three dock media-query lines
  updated to the two-column template, both shell voice-rows `auto`, and the
  trailing rail-folding media blocks — all recorded.
- `scripts/pond-agents-shell-view-selftest.mjs`: the D-P26→gate CI-order
  window widens 500 → 800 characters (the additive `test:stage-d-p31` step
  lands after D-P30).
- `scripts/pond-chat-surface-selftest.mjs`: its two gate-bound windows
  widen 500 → 800 and 300 → 600 characters (same reason).
- `scripts/pond-agents-legibility-selftest.mjs`: the block 4 scoped-ness
  region scan binds at the D-P31 stylesheet marker (recorded seam) — the
  D-P31 block sits after the D-P30 lift region and its rules are
  voice-dock-scoped, not `.agents-stage`.

## Scope

Everything else stays untouched:

- `ui/pond-desktop.html` — the rail wrapper only.
- `ui/pond-desktop.css` — the D-P31 block, three media lines, two shell
  rows, trailing folding media.
- `scripts/pond-chat-surface-room-selftest.mjs` — new D-P31 selftest.
- `package.json` — `test:stage-d-p31`.
- `.github/workflows/ci.yml` — D-P31 step in both verify jobs, ordered
  after the D-P30 step and before the whitespace gate.
- `docs/stage-d-p31-chat-surface-room.md` (this file), `BUILD_LIST.md`,
  `README.md`.

## Recorded deviations

1. **The shell grid rows are part of the cut.** A voice row sized like a
   one-line bar (`128px`/`132px`) was a pre-D-P28 fact that made the whole
   D-P28 composer clip as dead space; `auto` reflows the page (the shell
   scrolls to present the dock) instead of hiding it. Recorded because the
   fix touches `.pond-shell` layout, not just the dock.
2. **The rail-folding overrides live in trailing media blocks at the
   stylesheet end** rather than inside the existing dock media blocks —
   duplicate media queries are unusual but the source-order win against the
   appended base block is otherwise unobtainable without editing the base
   block to a narrower scope. Recorded as a deliberate structural choice.
3. **The transcript header and empty-state note lift to 11px**, not the
   12px rung D-P30 used for the agents stage — 11px is a reading rung the
   ladder records, and chat meta text sits between micro and body by design.
   The bubble head/trust/posture rows byte-keep 10px (lane posture rows are
   deliberately micro).
4. **Three prior selftests are touched** (D-P26, D-P28, D-P30), each
   additive or bound-widening and commented — the standard recorded seam.
   The D-P30 touch is a bounding change (it stops scanning at the D-P31
   marker), not a window widening; recorded because its assertion
   previously assumed end-of-file.
5. **Verified against headless screenshots** at 1440/900/700/480 widths
   (dock-isolated and full-page): the empty transcript reads as a bordered
   panel, the rail centers, the narrow breakpoints keep their old orders
   via `display: contents`, and the Agents view is unaffected.

## Authority ceiling

None. Presentation-only shell restructure; `Activation: NOT_INCLUDED`; no
module, contract, fixture, record, or renderer file touched; no behavior,
channel, admission, grant, or activation anywhere. The mic stays literally
dead; compositions without a live session still record nothing; agents
never reply.

## Explicit non-goals

- No conversation-law change: composition still refuses without an
  established live session; nothing persists anywhere.
- No new affordance for the mic or the voice lane; the waveform stays a
  decoration.
- No lane-stack redesign (they stay default-closed details in lane order
  inside the composer); no new transcript bubble type or reply path.
- No change to the other three views' layout, sizes, or panel order (the
  shell row change is layout-neutral there — the dock is Home-only).
- No persistence, network, transport, or re-render change.