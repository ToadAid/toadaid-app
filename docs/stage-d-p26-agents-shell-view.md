# Stage D-P26 — the Agents shell view (the Agents tab goes live as a read-only fourth view and the three Stage D agent panels move to it verbatim, Home keeps a slim posture summary, and the D-P25 CI step Codex's cut omitted is restored)

## Binding

- Parent: toadaid-app main `4236a07` (PR #92, the D-P25 stage-doc reconciliation; D-P25 itself merged as PR #91).
- Canonical ecosystem law: ToadAid/toadaid-architecture at `53de8698a6da1c14da752b637b825ca80ebd9d0f` — unchanged this cut; re-verified locally. **Law silence recorded (none new):** this is a desktop shell presentation cut over already-established Stage D projections (D-P1, D-P8, D-P15, D-P23, D-P24, D-P25); it defines no new semantic vocabulary and redefines nothing — it reorganizes where the established panels present.

## Law anchors

- `community-agent-fabric.md` **§27 provider and client neutrality (L597–603)** — the shell reorganization keeps Pond frontend-neutral: the moved panels are the same established projections at a new presentation address, and no provider, host, or transport is hardcoded anywhere closer to them.
- `agent-identity-and-specialist-admission-contract.md` **L151–154** — no agent, provider, transport, or message may hold or exercise the admission decision: the Agents nav item's resting label is `Read-only`, the view's own `data-runtime-connection="not_included"`, the view-level hero states the posture, and the view-closing truth-boundary line repeats it — presentation is not admission, opens no channel, establishes no authority.
- The frozen D-P25 record posture `replaceable_frontend_projection_source_no_transport_interface_activated` — preserved verbatim; the generic front face moves but its record version tie, fail-closed renderer, and every ceiling key are unchanged (byte-identical moved bytes).

## Goal

The desk has said the desktop's shape lags its own truths: the Agents nav item was a `Later` placeholder while every Stage D agent panel was stacked at the bottom of the Home context panel under the Stage A/B/C stock. This cut activates the Agents tab as the shell's fourth view (`#pond-agents`, `data-pond-view="agents"`) and moves the Stage D agent machinery — the D-P1 agents view panel (with its D-P8 local authentication and D-P15/D-P23 live session + collaborative read sections inside it), the D-P24 agent registry evidence panel, and the D-P25 generic-agent front-face panel — onto it **verbatim** (byte-identical moved bytes). Home's context panel keeps a slim posture summary card whose link opens the new view; the frozen D-P16 conversation composer stays in the Home voice dock unchanged.

## Load-bearing mechanism

- **The established shell pattern, not a new one.** `pond-shell.js` gains `"agents"` in `supportedViews`, `viewByHash["#pond-agents"]`, the hash mapping, the topbar title case ("Agents"), and the topbar context case ("Governed agents · fixture projection · authority none"); the new `main.world-stage.agents-stage` reuses the `.world-stage` grid slot and `[hidden]` toggle machinery with zero new layout law. The Agents nav item becomes the same `nav-item` link shape as World and Knowledge (`data-pond-view-link="agents"`, resting label `Read-only`), so `setView` current/resting bookkeeping and focus behavior carry over untouched; the deed-detail modal close guard runs for the agents view exactly as for world.
- **Verbatim move.** The three sections were relocated byte-for-byte by a one-off script against the exact section boundaries; every marker the lane selftests pin (`data-agents-record-version`, `data-agent-registry-record-version`, `data-generic-agent-record-version`, `data-local-authentication-secret`, `data-live-session-establish`, `data-collab-read-wall`, …) is asserted to sit inside the new view and to have left the Home context panel. The runtime modules self-mount by document-scoped queries, so no mounting code changes.
- **Home slim summary.** The context panel gains one `agents-summary-panel` card: the posture line, an `agents-summary-link` that is itself a `data-pond-view-link="agents"` element (so `setView`'s current/resting state machinery manages its small label too), and the authority-none note. Nothing else on Home changed in this cut — the stock cleanup is the NEXT cut (D-P28) and is deliberately not started here.
- **Frozen markers preserved.** The moving panels remain inside the document shell that `pond-agents-view.js`, `pond-local-authentication.js`, `pond-live-session.js`, `pond-collaborative-read.js`, `pond-agent-registry.js`, and `pond-generic-agent-front-face.js` fill; all Stage D lane selftests (marker-presence based) re-run green against the moved HTML; the voice dock's `mic-button … disabled` and the D-P16 composer markers stay in place verbatim.

## Frozen-seam exemptions

NONE — zero frozen D-P0…D-P25 contract, fixture, record, or renderer files are edited. The cut edits only `ui/pond-desktop.html` (nav item + moved sections verbatim + one new summary section + one new view hero/main wrapper + one new view-closing truth-boundary line), `ui/pond-shell.js` (additive fourth-view wiring), `ui/pond-desktop.css` (additive summary panel + link styles and one max-width accent for the moved panels), `scripts/pond-agents-shell-view-selftest.mjs` (new), `package.json` (`test:stage-d-p26`), and `.github/workflows/ci.yml` (see deviations).

## Scope

1. `ui/pond-desktop.html` — the Agents nav link, the `#pond-agents` stage (hero, seal, moved panels, truth-boundary line), the Home slim summary card.
2. `ui/pond-shell.js` — the fourth-view wiring.
3. `ui/pond-desktop.css` — additive `.agents-stage` accent + `.agents-summary-*` styles.
4. `scripts/pond-agents-shell-view-selftest.mjs` — 8 blocks (nav link / view posture / panel placement in-and-out / summary card / shell wiring / frozen markers + voice dock invariants / package + CI presence / no-transport hygiene), terminal `POND_STAGE_DP26_AGENTS_SHELL_VIEW_SELFTEST_PASS · 8 blocks`.
5. `package.json` (one script) and `.github/workflows/ci.yml` (additive steps).
6. `BUILD_LIST.md`, `README.md`, this doc.

## Recorded deviations

1. **The D-P25 CI step was missing and is added here.** Codex's D-P25 cut (#91) added `test:stage-d-p25` to package.json and README's validation list but never added the CI step — the workflow ran p23, p24, then the whitespace gate. This cut adds the two steps (`Verify Stage D-P25 generic agent front face`, `Verify Stage D-P26 agents shell view`) to **both** verify jobs, ordered after D-P24 and before the whitespace gate; they also close the D-P25 record's own omission rather than leaving the D-P25 stage file's validation list describing a CI run that did not exist.
2. **The moved panels are byte-identical but their `max-width` is new CSS** — one additive style (`760px` cap on the Agents stage) to keep the newly-widthed panels readable; no panel content, attribute, or marker changes.
3. **The voice dock (`data-home-surface`) and the D-P16 composer stay on Home** — the D-P27 chat-surface cut will reshape them; this cut only asserts they survived the move untouched, because the Stage D lane selftests pin their markers and the shell must keep passing the whole suite mid-staged-polish.

## Authority ceiling

No new assessment objects, vocabularies, keys, or literals exist anywhere in this cut — it is a placement cut. Every panel's own authority posture carries over unchanged (`authority: "none"`, `runtimeActivationPosture: "not_included"`, all lane ceilings all-false); the Agents view inherits `data-authority="none"` + `data-runtime-connection="not_included"`; nothing is admitted, connected, delivered, invoked, activated, persisted, or consumed by moving it.

## Explicit non-goals

No chat-surface reshape (D-P27), no Home stock cleanup (D-P28), no live observation, no transport, no admission, no agent reply, no voice activation (the mic stays literally dead), no new contract/fixture vocabulary, no re-run of any frozen assessor, and no canonical law change. Presentation-only; activation `NOT_INCLUDED`; authority `NONE`.