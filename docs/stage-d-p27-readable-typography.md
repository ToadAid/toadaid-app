# Stage D-P27 — the readable desktop (the shell typography lifts onto the recorded 10px-or-above ladder; the microfilm scale, 211 declarations, goes to the floor and beyond)

## Binding

- Parent: toadaid-app main `cdc7a4f` (PR #93, the D-P26 Agents shell view).
- Canonical ecosystem law: ToadAid/toadaid-architecture at `53de8698a6da1c14da752b637b825ca80ebd9d0f` — unchanged this cut; re-verified locally. **Law silence recorded (none new):** a stylesheet readability lift carries no semantic content — no new vocabulary, no new assessment, and no presentation seam moves; this is the same shell at readable sizes.

## Law anchors

- Canonical law is silent on frontend typography; the silence stands. Nothing here changes what any panel asserts: the read-only seals, authority-posture lines, truth-boundary notes, and every ceiling stay verbatim in place.
- The desk's standing doctrine that a projection is not canonical current state is untouched — this cut changes how large the projection text renders, not what the projection says.

## Goal

The desktop's fronts were drawn as a mock and never revisited: ~160 declarations sat at 6–10px (with 30 below 8px), microfilm against a 1220px shell. The desk said plainly: the fronts are so small they are very hard to read. This cut lifts **every** authored font declaration in `ui/pond-desktop.css` onto one recorded ladder so the shell reads like a product.

## Load-bearing mechanism

- **One single-pass ladder, applied by a one-off script, never chained.** A single regex pass rewrote `font-size: Xpx` and the `font: Xpx…` shorthand (line-height suffixes preserved verbatim) through the recorded mapping: 6, 6.5, 7, 7.5 → 10 (the micro floor); 8 → 11; 9, 9.5 → 12; 10, 10.5 → 13; 11 → 14; 12 → 15; 13 and 14 (the body baseline) → 16; **15px and above unchanged** (the display/hero scale was already readable and keeps the hierarchy's top rungs fixed). 211 declarations moved; no tier re-hits its own output because the pass reads each value once.
- **Hierarchy preserved at the floor, collapsed only at 13→16.** The micro-label tier (was 6–7.5px) and the code-reference tier (was 7–9px) now sit at 10–12px — still the smallest voice on the page; body text moved 8→11 and 9→12; the `letter-spacing`/em-relative rules scale themselves with the text.
- **Nothing HTML-side changed.** The shell HTML, every module, and every lane contract file are byte-untouched; the layout engines (grids, `min-width: 0`, `max-width` caps at 1220px/760px) reflow exactly as designed because only glyph metrics moved.

## Frozen-seam exemptions

NONE — zero frozen D-P0…D-P26 contract, fixture, record, or renderer files are edited, and two selftest seams are recorded here (see deviations): `scripts/pond-agents-shell-view-selftest.mjs` (a CI-order window widened 120 → 400) and `scripts/pond-knowledge-forge-surface-selftest.mjs` (a pin the merged D-P26 cut had already left stale). The stylesheet itself is not a frozen seam — it is the cut.

## Scope

1. `ui/pond-desktop.css` — the 211-assertion ladder lift; nothing else changes.
2. `scripts/pond-readable-typography-selftest.mjs` — 7 blocks (floor enforced / old tiers absent + new-tier counts / rule spot checks with line-heights kept / display scale preserved / frozen HTML markers / package + CI / stylesheet-only scope), terminal `POND_STAGE_DP27_READABLE_TYPOGRAPHY_SELFTEST_PASS · 7 blocks`.
3. `package.json` (one script) and `.github/workflows/ci.yml` (both verify jobs, D-P27 step ordered after D-P26 and before the whitespace gate).
4. `BUILD_LIST.md`, `README.md`, this doc.

## Recorded deviations

1. **The D-P26 selftest's CI-order window widened (120 → 400 chars).** The additive D-P27 CI steps land between the D-P26 steps and the whitespace gate that selftest's order regex pins; widening the window keeps every lane D-P24 → P25 → P26 → D-P27 → gate asserted and loosens nothing but the gap the new step necessarily occupies.
2. **The 13px tier and the body's 14px collapse onto the same 16px rung.** The ladder is monotone-in, equal-out there; strictly monotone output would have split hairs (16 vs 16.5) for no readable difference. 15px-and-above is untouched, so the display top of the scale still dominates.
3. **The D-P26 cut left the p5b knowledge-forge selftest stale and #93's CI could not see it** (the workflow never runs that script): its `supportedViews` pin still expected exactly `["home", "world", "knowledge"]` while D-P26 had already added `"agents"`. This cut widens the pin to the additive form (`["home", "world", "knowledge"` + whatever later cuts add), which keeps the knowledge view's own membership asserted and is the honest repair rather than a fresh failure being shipped onward.
4. **No per-rule retuning pass this cut.** Dense grids (voice dock columns, cockpit chains, gallery captions) reflow taller where text grows; the chat-surface cut (D-P28) reshapes the footer's internals next, and further dot-polish belongs to the desk's live click-through rather than to this mechanical lift.

## Authority ceiling

No new assessment objects, vocabularies, keys, or literals exist anywhere in this cut — it is a glyph-metrics cut. Nothing is admitted, connected, delivered, invoked, activated, persisted, or consumed by making text larger; every ceiling, seal, and truth-boundary line renders verbatim, only larger. Presentation-only; activation `NOT_INCLUDED`; authority `NONE`.

## Explicit non-goals

No chat-surface reshape (D-P28), no Home stock cleanup (D-P29), no panel relocation, no module wiring change, no live observation, no transport, no admission, no agent reply, no voice activation (the mic stays literally dead), no new contract/fixture vocabulary, no re-run of any frozen assessor, and no canonical law change. Presentation-only; activation `NOT_INCLUDED`; authority `NONE`.