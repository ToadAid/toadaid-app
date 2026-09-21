# Stage C-P10 — Bridge cockpit fixture presentation

## Binding

- Pond parent: `main` at `2365444` ("feat: polish World deed viewer with detail modal, direct id lookup, gallery states (B2-P4B-P22)").
- Pond canonical fixture chain: C-P1 `adda2fc7807a504b5621c18a3aa84ce8f3004440` lineage — `pond-read-only-repository-target-c-p1`, `pond-bridge-repo-status-observation-age-c-p5`, `pond-bridge-repo-status-target-comparison-c-p6`, `pond-bridge-repo-status-full-head-target-comparison-c-p7`, `pond-bridge-repo-status-origin-identity-target-comparison-c-p8`.
- Bridge source identity (displayed, not connected): Mirror Desktop Bridge Stage 39A-R1, commit `595016262507d21aa34997277b9197ce89fda378`, `src/stage39PortableReadOnlyMcpVisibility.ts`, tool `mirror_repo_status`, transport `stdio` — bound per `src/fixtures/stage-c-p9-bridge-stage39a-repo-status-source-binding.ts`.

## Goal

Present the complete Stage C posture as one fixture-rendered, read-only cockpit panel in the Home context panel, generated from the canonical C-P1..C-P9 fixture chain so the fixtures remain the single source of truth, and give the presentation the same fail-closed discipline as the contracts it presents.

## Explicit non-goals

- No transport: no `src-tauri` changes, no shell plugin, no capabilities, no fetch/invoke/WebSocket from the panel. C-P9's `runtimeActivationPosture: "not_included"` is preserved and displayed, not advanced.
- No live repository read, no remote verification, no network activity of any kind.
- No mutation, no grants, no approval recording, no authority anywhere.
- No receipt body: the receipt reference is structural only (`receiptBodyPresentation: "not_present"`); the body is never present in the record and therefore never presentable.
- No current-truth admission: every section keeps `canonicalOutcome: "insufficient_evidence"` and `snapshotPresentation: "withheld"`.

## Scope

- `src/cockpit/pond-stage-c-cockpit-record.ts` — new deep-frozen record that picks (never re-exports wholesale) values from the seven canonical fixture exports (C-P1 target; C-P5 freshness; C-P6 prefix-only comparison; C-P7 full-HEAD comparison; C-P8 configured-origin comparison; C-P9 Stage 39A source binding; C-P9 STDIO delivery admission), plus renderer-denial posture and a sanitized receipt reference. `Assert<Equal<…>>` invariants pin `authority === "none"`, `mutationPosture === "none_read_only"`, the C-P9 refused-proof field tuple, the receipt-body-never-presented bound, and that the C-P8 exact match stays `exact_supplied_fixture_values_only`. Fail-closed guards throw on any fixture-chain drift from the performed branches.
- `scripts/render-stage-c-cockpit-fixture.mjs` — esbuild render ceremony (mirrors `scripts/vendor-walletconnect.mjs`): stdin entry bundling the record to `ui/generated/pond-stage-c-fixture.js` (ESM, browser, es2022, unminified), per-line trailing-whitespace strip, deterministic provenance JSON with versions read from installed packages and no timestamp, and a `--check` mode that byte-compares a rebuild against the committed artifacts. Argument-free, repository-root-relative; CI does not run it.
- `ui/generated/pond-stage-c-fixture.js` + `ui/generated/pond-stage-c-fixture-provenance.json` — generated artifacts, committed.
- `scripts/pond-stage-c-cockpit-fixture-selftest.mjs` — parity + invariants selftest: recomputes the record in Node via the five Stage C contracts over the same inlined fixture inputs the C-P8/C-P9 selftests pin, then requires exact `deepStrictEqual` parity with the committed artifact (fixture-chain, contract, or record-pick drift fails loudly); identity constants (Bridge `5950162…`, target `adda2fc7…`, C-P7 `c9be945…`, C-P8 `56bae73…`); freshness numbers; the refused target-identity chain (C-P6 prefix-only refused → C-P7 full-HEAD refused with `headCommitFull: "matched"` → C-P8 matched-with-refusal posture); the eight C-P9 admission checks unsatisfied in canonical order with every refused-proof invariant false/withheld/not-included/none; receipt bounds; freeze and JSON round-trip safety; artifact hygiene (no `console.`, single trailing newline, no per-line trailing whitespace, provenance completeness).
- `ui/pond-stage-c-cockpit.js` — textContent-only renderer: binds presentation to `cockpitRecordVersion` (mismatch ⇒ fail-closed), resolves every `data-cockpit-value` path against the record (non-primitive ⇒ fail-closed), derives the tool-inventory and delivery-check lists strictly from the record's own arrays (never inferred), and on any missing node, unresolvable field, or invalid array withholds every value (`"unavailable"`) and marks the panel `data-render-posture="fail_closed"`. Fallback or partial rendering is forbidden by the record's denial posture.
- `ui/pond-desktop.html` — static `stage-c-cockpit-panel` section in the Home `.context-panel` (five cockpit sections: Source binding / Freshness / Target identity / Delivery admission / Denial & receipt posture, with a receipt sub-panel reusing the B3-P4A reference-panel idiom, `data-authority="none"`), plus the module script tag.
- `ui/pond-desktop.css` — cockpit panel styles in the existing projection-card vocabulary (fresh-green / refused-gold state classes, mono microcopy, `overflow-wrap: anywhere` on long hex), narrow-width `1fr` collapse at 540px.
- `package.json` — `test:stage-c-p10` and `stage-c:render-cockpit` scripts. `.github/workflows/ci.yml` — C-P10 selftest step in both jobs after the C-P9 step; CI runs the selftest, not the render (the artifact is committed).

## Admission

- Fixture-only: every presented value is picked from the canonical fixture chain; nothing is hard-coded in the UI markup beyond empty value nodes and the record-version binding attribute.
- Authority-none: `authority: "none"` at the record root and in every sub-record; the panel carries `data-authority="none"`.
- Presentation is not authority: the panel labels itself a Stage C fixture projection and never claims current truth, admission, grants, or activation.

## Behavior record

- The panel presents: the Bridge Stage 39A-R1 source binding (repo/branch/commit/module/tool/transport/structural channel, producer-authority posture, 4-tool read-only inventory, 14 required evidence fields, `pondClientRuntimePosture: "not_included"`); the C-P5 freshness classification (fresh within the fixture-declared 60 s maximum, freshness basis, snapshot still withheld); the target-identity chain against the C-P1 expected target (`adda2fc7807a504b5621c18a3aa84ce8f3004440`, `fixture_parent_commit_not_live_head`): C-P6 prefix-only `insufficient_evidence` (`exact_repository_owner_and_full_head_not_observable`), C-P7 full-HEAD `insufficient_evidence` (`exact_repository_owner_not_observable`, HEAD comparison matched), C-P8 configured-origin `matched` with `exactTargetMatchEstablished: true` but `exactTargetMatchPosture: "exact_supplied_fixture_values_only"` and `exact_fixture_values_match_trusted_delivery_not_established`, remote verification `not_performed`; and the C-P9 delivery admission (`insufficient_evidence` / `receiver_proof_incomplete`, all eight receiver-owned checks unsatisfied in canonical order, producer authority not accepted as proof, production proof not established, current truth not admitted, snapshot withheld, runtime activation not included).
- Degraded behavior: any missing node, unresolvable field, invalid array, or record-version mismatch withholds every presented value and marks the panel fail-closed; nothing partially renders.
- Matched values are shown honestly: the C-P8 row says matched and simultaneously says the match is exact supplied fixture values only, remote verification not performed, current truth withheld.

## Authority ceiling

- Authority: **none** — everywhere in the record, the renderer, and the panel markup. No transport, no mutation, no runtime activation, no receipt body, no current truth.

## Validation evidence

- `npm run typecheck` — clean (record module typechecked under `src/**/*.ts`; `Assert<Equal<…>>` invariants pin the authority/mutation/refused-proof/posture literals).
- `npm run test:stage-c-p5` … `test:stage-c-p9` — all still pass.
- `npm run test:stage-c-p10` — parity selftest passes: recomputed record deep-equals the committed artifact; identity constants, chain states, canonical check order, refusal invariants, receipt bounds, freeze/JSON safety, and artifact hygiene all asserted.
- `node scripts/render-stage-c-cockpit-fixture.mjs --check` — deterministic rebuild byte-matches both committed artifacts.
- `git diff --check --cached` — clean (per-line trailing whitespace stripped in the render ceremony).
- Headless-Chrome smoke (`--headless=new --dump-dom` over `pond-desktop.html`): panel present with 47 resolved `data-cockpit-value` nodes, `data-render-posture="rendered"`, zero `unavailable` values, all eight unsatisfied checks rendered, Bridge commit `5950162…` and C-P8 match posture visible in the DOM, zero console errors.

## Activation

**NOT_INCLUDED** — no runtime activation of any kind: the panel is fixture-rendered presentation of a refused posture (`runtimeActivationPosture: "not_included"`), and no Pond-side transport, process, or live invocation exists after this cut.