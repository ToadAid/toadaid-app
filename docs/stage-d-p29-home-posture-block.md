<!-- Activation: NOT_INCLUDED · Authority: NONE -->

# Stage D-P29 — Home posture block

## Binding

- Repository: `ToadAid/toadaid-app` (Pond).
- Stage lineage: D-P28 (chat surface) → D-P29 (home posture block).
- Scope class: presentation-only shell reorganization.

## Law anchors

Canonical ecosystem law lives in
[`ToadAid/toadaid-architecture`](https://github.com/ToadAid/toadaid-architecture);
this stage only reorganizes how already-established fixture projections are
presented on the Home side panel. Non-drift laws applied verbatim:

- Humans remain sovereign.
- Capability is not authority.
- A projection is not canonical current state.
- Evidence or attestation is not authority.
- Personal, shared, project, and public scopes do not collapse.
- Pond projects and presents; it does not own canonical relationship
  authority.

Where canonical law is silent about the presentation shape of the A7/A8/B3/C
fixture stock, the silence is recorded (Load-bearing mechanism, below); no
governance semantics are introduced here.

## Goal

The remaining A7/A8/B3/C fixture stack on the Home side panel
(`Welcome, New Frog` context panel: A7 inventory with its nested A8
projection-state panel, the nested A4 evidence-reference and B3-P4A
receipt-reference panels, plus the Stage C-P10 bridge cockpit) presented as
one long always-expanded run of panels. D-P29 slims it into one coherent
posture block:

- a `posture-block` section with a short header stating the honest posture —
  five establishable-projection fixtures, none granting authority;
- a one-line `posture-roster` per fixture (A4 · A7 · A4+A8 · B3-P4A · C-P10)
  whose posture prose is the honest negative only ("reference only · not
  verified", "capability declared, not granted", "no transport · current
  truth withheld");
- both full established panels collapse into two default-closed
  `<details class="lane-stack home-lane-stack">` elements
  (`data-home-lane-stack="a7"` and `"cockpit"`), reusing the D-P28
  `lane-stack` affordance; each carries its established panel verbatim.

## Load-bearing mechanism

The established panels are **carried verbatim**: the A7 inventory's
`data-inventory-source`, featured-descriptor, capability list, denial list,
nested A8 `projection-state-panel` (with its A4 `evidence-reference-panel`
and B3-P4A `receipt-reference-panel`, `data-receipt-ref` intact), and the
Stage C cockpit (`data-cockpit-record-version
="pond-stage-c-cockpit-record-c-p10"`, `data-cockpit-value` spans,
`data-cockpit-list` and `data-cockpit-chain` hooks) move byte-for-byte —
only a `<details>` wrapper opens above and closes below each. The static
renderers and the D-P26/D-P27/D-P28 modules never read that markup
structurally (no D-P selftest pins the stock panels' positions; verified
before the cut), so the collapse changes no evaluated state. The roster's
posture prose re-presents each panel's own established claims as honest
negatives; it introduces no new claim, grant, verification, or admission.

## Frozen-seam exemptions

- `ui/pond-desktop.html`: the stock panel region inside the Home context
  panel is wrapped in the new posture-block section and two details
  elements; no other region of the file moves. (This seam is additive
  markup-only; no frozen D-P selftest pins the stock panels' markup or
  position.)
- `scripts/pond-readable-typography-selftest.mjs`: the D-P27 stylesheet
  spot check on `.evidence-reference-panel > code` still runs unchanged —
  the panel moved but its stylesheet rule did not. No widening needed.

## Scope

Implementation scope — everything else stays untouched:

- `ui/pond-desktop.html` — the Home context panel's fixture-stock region
  (posture block + roster + two default-closed details).
- `ui/pond-desktop.css` — additive `.posture-block`, `.posture-roster`,
  `.posture-lane`, `.home-posture-stacks`, `.home-lane-stack` rules; one
  mobile media-query line (see Recorded deviations).
- `scripts/pond-home-posture-block-selftest.mjs` — new D-P29 selftest.
- `package.json` — `test:stage-d-p29`.
- `.github/workflows/ci.yml` — D-P29 step in both verify jobs, ordered
  after the D-P28 step and before the whitespace gate.
- `docs/stage-d-p29-home-posture-block.md` (this file), `BUILD_LIST.md`,
  `README.md`.

## Recorded deviations

1. **Mobile media-query line edit (CSS, non-additive but dead-code
   corrective):** the wide-layout rule
   `.inventory-panel { grid-column: 1 / -1; }` went dead the moment the
   inventory panel stopped being a direct grid child of `.context-panel`.
   It is replaced by `.posture-block { grid-column: 1 / -1; }` so the
   collapsed block spans the full wide-layout row the stock used to span.
   Recorded rather than silently done: it is the only non-additive CSS
   line in the cut.
2. **The roster's `A4+A8` line spans two lanes in one row.** The A7 stack
   contains the A8 projection-state panel (which itself carries the A4
   evidence reference), so one collapsed detail stands for three stage
   cuts; the roster names this explicitly (`A4+A8`) instead of
   pretending one detail equals one stage.
3. **The roster's posture prose is hand-written honest negatives**, not a
   re-presentation of stored values: unlike D-P28's transcript rows
   (which re-present frozen lane exports), the fixture stock stores no
   posture export — the roster lines paraphrase each panel's own
   established claim ("reference only · not verified",
   "capability declared, not granted", …) and never promote an
   established negative. The D-P29 selftest forbids the affirmative
   forms ("granted", "verified", "connected" — except after "not").

## Authority ceiling

None. Presentation-only shell reorganization; `Activation: NOT_INCLUDED`;
no module, contract, record, or renderer file touched; no behavior, no
channel, no admission, no grant, no activation anywhere.

## Explicit non-goals

- No change to any established panel's content, data attributes, or
  rendered values — the panels are carried verbatim inside details.
- No restyle of the welcome header, fixture-context definition list,
  authority seal, gate panel, or the agents summary panel.
- No new renderer module, script tag, or event listener; nothing is
  persisted or re-rendered.
- No evaluation of any "current" truth, no live check, no network.
- No restyle of the mobile/wide layouts beyond the single recorded
  media-query correction.