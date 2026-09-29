# Stage D-P7 — live shell wiring: the desktop shell observes and feeds the local authentication event

## Binding

- Parent: toadaid-app main `cc7999d` (D-P6 merged).
- Branch: `feat/stage-d-p7-shell-wiring`.
- Canonical ecosystem law: ToadAid/toadaid-architecture at `bc7a971dfb243f0aa4417da6cef85cc56204f783` — re-verified locally this cut. The wiring is shaped by: the trusted-channel-separation law (inputs with different trust semantics travel through different structural channels; operator input expresses requests and may not directly rewrite agent identity, runtime policy, capability grants, proof status, authority state, or trusted memory classification — "An operator request may trigger a governed authority decision. The request is not itself the grant."); D-P3's forbidden-crossings inventory (`operatorInput: "forbidden"` — the shell-built record carries zero operator-authored content); the Agent Identity & Specialist Admission Contract ("Authentication is not authorization"); and the Scope Sovereignty Contract (no credential backend, key format, or identity provider is decided by this cut).
- Desk source contract: unchanged — bound by committed SHA `57b5c8b966d3eb58cf239b2f3f1598f09f24b296` only; the shell observation is receiver-local and carries no desk SHA.

## Goal

Wire the live shell: the pond desktop shell — the receiver's own `pond_desktop_shell` runtime, D-P3's only local-shell literal — gets a local authentication gesture affordance, and performing it makes the shell *observe the event and build the D-P6 observation record itself*, then feed the frozen D-P6 performer classifier and render the resulting assessment verbatim. This is the shell event emission and shell/UI wiring that D-P6's doc deferred explicitly — the first Stage D cut that touches the shell.

## Law posture

- The gesture contributes only the clock. The shell builds the 11-key observation record entirely from shell-vocabulary posture literals plus the observation timestamp; no operator-authored content enters the record, so the trusted-channel law's operator-input restrictions and D-P3's `operatorInput: "forbidden"` crossing stay clean. The gesture triggers a governed decision (the frozen classifier's assessment); it is not itself a grant, a credential, or a proof.
- The shell observes its own channel directly: the event state `receiver_observed_local_authentication_event` is the receiver's own observation in its own `receiver_owned_local_shell_channel` — not a producer's self-assertion (D-P3's channel-ceremony refusal precedent covers self-asserted ownership; direct receiver observation of its own channel is what the D-P6 checks require).
- Precedents: the wallet helper's observation-only operator action (no signature, transaction, authentication, membership, or authority requested); the D-P1 Agents view panel's fixture-rendered posture.

## Honesty mechanism — no vocabulary widening

The frozen D-P6 complete-state literal remains `fixture_observed_local_authentication` with posture `fixture_structural_only_no_live_authentication`, and the classifier's refused tuple (`liveAuthenticationPerformed: false`, `principalIdIssued: false`, `authority: "none"`, `runtimeActivationPosture: "not_included"`, …) is pinned on every arm. A live gesture therefore still never claims real authentication — no authentication mechanic exists anywhere, deliberately deferred. The UI renders the assessment verbatim, including the refusal tuple. The Stage D heading stays `— BLOCKED`; the blocker narrows to the deferred authentication mechanic, PrincipalId issuance, and private-read activation. Zero frozen widening this cut.

## Scope

1. `scripts/render-stage-d-local-authentication.mjs` — the render ceremony (esbuild bundle + provenance stamp + `--check` byte-parity gate).
2. `ui/generated/pond-stage-d-local-authentication.js` and its provenance JSON — the committed generated artifacts.
3. `ui/pond-local-authentication.js` — the wiring module (pure logic + documentRef-injected render + `typeof document` tail guard).
4. `ui/pond-desktop.html` — the additive live-shell panel and module script tag.
5. `scripts/pond-stage-d-p7-shell-wiring-selftest.mjs` — the selftest.
6. `package.json` — `stage-d:render-local-authentication` and `test:stage-d-p7`.
7. `.github/workflows/ci.yml` — one additive step in each verify job.
8. `docs/stage-d-p7-shell-wiring.md` — this document.
9. `BUILD_LIST.md` — the `D-P7 — COMPLETE` bullet.

## Shell posture

- Import direction: the wiring module imports the committed generated artifact only (`ui/generated/pond-stage-d-local-authentication.js`, bundling the D-P6 classifier, the D-P0 held-principal ref, and the D-P2 declared-maximum-age constant) — never `src/` directly. The render ceremony mirrors `render-stage-d-agents-fixture.mjs`; the produced artifacts are committed, with `--check` as the byte-parity gate.
- Module pattern: the P5E interactive pattern — pure logic export (`observeLocalAuthenticationEvent({ observedAtEpochMs, evaluatedAtEpochMs })`), `documentRef`-injected render (`renderPondLocalAuthentication(documentRef)`, fail-closed `false` on missing document or elements), and a `if (typeof document !== "undefined")` tail auto-mount guard. `textContent`-only DOM writes; no persistence, no state flip; each click is a fresh observation.
- The clock is read once per gesture: observation time and evaluation time are the same instant, so the observation is fresh by construction (age 0, inclusive boundary) and never diagnosed as a future observation. `maximumAgeMs` is the D-P2 fixture constant (60_000) carried in the generated bundle.
- The HTML panel is additive and separate from the D-P1 panel: its own data attributes, so the D-P1 pinned `principalBinding` block and the agents render ceremony are untouched (`stage-d:render-agents -- --check` byte-parity maintained).

## Authority ceiling

The shell observes the fact of the event and nothing else: no credential requested, checked, or stored; no PrincipalId issued; no memory admitted; no authority granted; no persistence; no state mutation. The frozen classifier's refusal tuple arrives from the contract and is restated nowhere — the UI renders it verbatim on every observation.

## Explicit non-goals

No credential backend, no key format, no identity provider, no PrincipalId issuance, no private-read or multi-principal-read activation, no persistence, no state flip, no frozen-contract widening, no ERC-8004 or AgentId identity mapping, no memory admission, no changes to the D-P1 panel or the agents render ceremony, no runtime activation, no onchain read, no transport.

## Validation evidence

- `npm run typecheck` clean.
- `npm run test:stage-d-p7` → `POND_STAGE_DP7_SHELL_WIRING_SELFTEST_PASS` (generated-bundle tie against the directly-imported TS contract, pure-logic drive with pinned times, fail-closed drives — stale, future, invalid timestamps, mismatched receiver-held ref, forbidden-key walk — DOM-stub render drive, static markup contract with the D-P1 pinned block verified intact, module-text hygiene bans, package.json pin).
- All other stage suites unchanged and passing; `stage-d:render-agents -- --check` byte-parity maintained; `stage-d:render-local-authentication -- --check` byte-parity passes; `git diff --check` clean.

## Activation

- INCLUDED: the render ceremony, the committed generated artifacts, the wiring module, the shell panel, the selftest, the npm scripts, the CI steps, this document, the BUILD_LIST bullet.
- NOT_INCLUDED: the authentication mechanic (credential backend, key format, identity provider — a later, separately planned architecture cut), PrincipalId issuance, private-read activation, persistence, runtime activation, transport.