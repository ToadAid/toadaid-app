# Stage B2-P4B-P22 — World view deed viewer polish (detail modal, direct id lookup, gallery states)

## Binding

Parent commit: `da850b6` (docs: record P21 live pairing verification (OKX wallet), PR #56)

Canonical architecture repository: `ToadAid/toadaid-architecture`

Canonical branch: `main`

Canonical commit: `bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Polish the World view's deed observation surface in three presentation-only
ways on the already-admitted endpoints: resolved deed cards open a per-deed
detail modal (artwork, description, traits, observed owner, observed block,
external links); a direct id lookup observes any single deed id 1–6000
straight from the Base contract without pasting an address; and the gallery
gains honest skeleton and fail-visible error states with run-token-guarded
retries, replacing the previous placeholder-card flow.

## Explicit non-goals

- no signing, transaction, message signature, authentication claim, or
  authorization of any kind; the P21 read-only pairing posture is untouched;
- no new network origins, selectors, or CSP admission of any kind (see the
  network-scope admission below);
- no persistence change: the direct-id path never reads or writes the
  deed-index cache (`pond-deed-index-…`), which must keep its block-stamped
  complete-scan shape; a point-in-time single-id read must never poison it;
- no `innerHTML` rendering of fetched metadata in the modal: every fetched
  value is rendered through `textContent` only;
- fixture gallery cards stay static and non-activatable — a fixture card
  must never present unobserved artwork as observation;
- no activation, no server, no Bridge, no provider integration.

## Scope

Files:

- `ui/pond-deed-detail-policy.js` (new)
- `scripts/pond-deed-detail-policy-selftest.mjs` (new)
- `ui/pond-deed-lookup.js` (IIFE classic script converted to an ES module;
  behavior extended)
- `ui/pond-desktop.html` (id-lookup form, static modal markup, script tag
  becomes `type="module"`)
- `ui/pond-desktop.css`
- `ui/pond-shell.js` (one line: `setView` closes the modal)
- `package.json`, `.github/workflows/ci.yml` (selftest wired)
- `docs/stage-b2-p4b-p22-world-deed-detail-modal.md`
- `BUILD_LIST.md`

Runtime surface: the existing World view (`#pond-world`) only.

## Network-scope admission

**No change.** Every read in this cut uses an endpoint and selector already
admitted and in active use since P20: `eth_call` with `ownerOf`
(`0x6352211e`) and `tokenURI` (`0xc87b56dd`) and `eth_blockNumber` against
`mainnet.base.org` / `base-rpc.publicnode.com`, metadata through
`gateway.pinata.cloud` with the `base.blockscout.com` mirror fallback, and
the OpenSea link target. No `tauri.conf.json` edit accompanies this cut; the
host CSP is untouched. The direct-id lookup reuses the single-call path —
one plain `eth_call` `ownerOf`, deliberately not Multicall3 — because a
one-element aggregate saves nothing.

## Domain admission

- The observed owner shown in the detail modal carries exactly the epistemic
  status it had in P20: informational, point-in-time, bound to the block
  shown with it. Presentation is not authority.
- The direct-id result is a point-in-time observation of one id. It is
  deliberately not written into the index cache, never presented as index
  data, and stamps no block on any gallery surface.
- An unminted id is reported honestly: the copy says the `ownerOf` read
  reverted on the Base contract at the latest block and that the read is
  point-in-time — it never claims definitive absence beyond doubt.

## Behavior record

- **Detail modal**: a resolved live card is activatable (`role="button"`,
  `tabindex="0"`, `aria-haspopup="dialog"`; click or Enter/Space — the repo
  `.lore-island` idiom — with clicks on the card's own links excluded). The
  modal is one static element at the end of `#pond-world`, `hidden` until a
  record passes `validateDetailRecord` fail-closed; every populated value is
  `textContent`-only. A null description renders an explicit
  "No description was provided…" line; a failed metadata read on the id path
  renders a degraded modal (owner and block only) with a fail-visible note.
- **Dismissal matrix**: Escape, backdrop click, and the Close button all
  dismiss; `setView` (navigation) closes the modal; Tab is trapped inside
  the dialog while open; focus returns to the triggering card on close, or
  nowhere if the trigger left the DOM. Opening locks the page scroller
  (`body.is-modal-open`); closing removes it.
- **Direct id lookup**: strict policy parsing (`parseDeedId`: digits-only
  ASCII integers 1–6000, leading zeros normalized) rejects malformed input
  with fixed human messages and **no network request**. Valid ids run one
  `ownerOf` call: revert-shaped failures report the unminted-honest copy,
  transport failures report the error; minted ids read the block number and
  metadata, then open the modal. The id path and the wallet scan share one
  `runToken` — starting one cancels the other, extending the existing
  single-run cancellation semantics instead of inventing a second token.
- **Gallery states**: metadata resolution now shows a fixed-aspect shimmer
  skeleton per id (`aria-busy`) instead of a fake-metadata placeholder;
  failures render a fail-visible error card with a Retry button. A Retry is
  guarded by the run token captured when its card attached — a stale Retry
  from a superseded run is refused and never resurrects a card. Retries
  drive no results stamp. Empty-state and fixture-restore behavior from P20
  is unchanged.

## Authority ceiling

Nothing in this cut grants, implies, or stores authority. The deed detail
modal and the direct id lookup are presentation over public read-only chain
data; the displayed owner is not authentication, not a `PrincipalId`, not
membership, not admission, release, grant, approval, routing, or execution
authority. Stage D (identity-bound reads) remains BLOCKED and is not moved.

## Validation evidence

- `scripts/pond-deed-detail-policy-selftest.mjs` passes
  (`npm run test:stage-b2-p4b-p22`, 8 test cases): strict id parsing
  (accepts 1/6000/padded/whitespace-padded, rejects empty, non-string,
  `abc`, `12.5`, `+7`, `-1`, `1e3`, `0x10`, full-width digits, `0`,
  `6001`, and 20-digit monsters; reason messages distinct and total;
  ownerOf outcome classification minted/revert-shaped/failed;
  `validateDetailRecord` fail-closed on every malformed field, including
  null/non-object inputs, with owner lowercasing and null-tolerant optional
  fields);
- `npm run test:stage-b2-p4b-p21` still passes; `npm run typecheck` clean;
  `node --check` clean on all touched scripts and modules;
- headless-Chrome smoke over a local static server: the page loads with the
  module script chain (`pond-deed-lookup.js` ESM → policy module) executing
  without a single console error, and the new id-lookup form and modal
  markup are present in the rendered DOM;
- live desktop verification (`npm run desktop:dev`): recorded in the PR
  description once the user exercises the click-through (modal open/dismiss
  matrix, keyboard activation, id lookup happy and rejection paths, retry
  flow, narrow-width layout);
- committed-range whitespace validation clean.

## Activation

`NOT_INCLUDED`

This cut adds presentation polish to the World view only. It starts no
server, Bridge, or provider integration, admits no new network origin,
writes no new persistence, and grants no authority.