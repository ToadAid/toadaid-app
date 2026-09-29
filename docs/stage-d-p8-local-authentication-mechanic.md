# Stage D-P8 — the real local authentication mechanic: a receiver-owned local knowledge-factor verifier

## Binding

- Parent: toadaid-app main `2937ade` (D-P7 merged).
- Branch: `feat/stage-d-p8-local-authentication-mechanic`.
- Canonical ecosystem law: ToadAid/toadaid-architecture at `bc7a971dfb243f0aa4417da6cef85cc56204f783` — re-verified locally this cut. The mechanic is implemented app-side, under the existing negative law: the Agent Identity & Specialist Admission Contract's "Authentication is not authorization" (a valid proof of control never establishes membership, capability, or authority); the Scope Sovereignty Contract's credential posture (credentials are separately admitted, narrowly scoped, and revocable — and the contract's deferred-decision passage states what any mechanic cannot be; it does not require provider or backend decisions that this cut does not make); the trusted-channel-separation law (operator input triggers a governed decision and is not the grant, and never a channel into ceremony records); and the delegated-authority contract's `operator-granted` authority class (its proof surface is explicitly deferred to a dedicated identity-mapping architecture cut — this is not that cut, and no mapping is made).
- Desk source contract: unchanged — bound by committed SHA `57b5c8b966d3eb58cf239b2f3f1598f09f24b296` only; the mechanic is receiver-local and carries no desk SHA.

## Goal

Give the receiver its real local authentication: a **local knowledge-factor challenge-response**. The operator sets a local secret once per shell session; the receiver stores only a salt-bound sha256 verifier digest — the secret itself is never stored, transported, or rendered — and the shell gesture becomes a real challenge round whose response digest (computed and then discarded) is fed to a frozen D-P8 mechanic classifier that recomputes and compares the digests itself. This is the first implementation of the authentication-mechanic decision that five architecture contracts deliberately deferred; it is an app-side contract cut under the existing negative law, not an architecture amendment.

## Proof model

- The C-P9 STDIO delivery-admission digest pattern is the only in-repo proof model, and D-P8 mirrors it: fixed-format `^[0-9a-f]{64}$` digest fields, a receiver-held verifier binding, and a refused proof-acceptance column (`principalIdIssued: false`, `credentialAdmitted: false`, `authority: "none"`, `runtimeActivationPosture: "not_included"`, …).
- **No crypto in the contract.** Digests are supplied inputs, format-validated only (C-P9 precedent). The digest formula is pinned and mirrored on both sides: `verifierDigestHex = sha256( bytes(saltHex) ‖ utf8(secret) )` lowercase hex — `node:crypto` in the selftest, `crypto.subtle.digest("SHA-256", …)` in the shell. Zero new dependencies.
- **Two records, one classifier.** A verifier record (the enrolled binding: salt + digest, secret-free by construction, revocable by re-enrollment) and a challenge-proof record (the binding echoed, the response digest, the claimed comparison). The classifier validates both typed-`unknown` records (exact keys, literal membership, digest format, forbidden-key walk with `plaintext` and `answer` added on top of the D-P6 22-key list) and then applies seven receiver-owned checks in canonical order, including `verifier_binding_exact_match` (the proof's salt + digest echo the verifier's exactly) and `comparison_recomputed`.
- **Recomputed comparison.** The classifier recomputes the comparison from the two digests and requires BOTH the recomputation to agree with the claimed comparison literal AND the digests to match. An honestly-claimed mismatch is a valid record whose verification still fails closed — a wrong knowledge factor is never verified, and a self-asserted match without matching digests proves nothing.

## Honesty mechanism — verification is not authorization

The honest positive state is this cut's own vocabulary (`authenticationMechanicState: "receiver_verified_knowledge_factor"`, posture `receiver_verified_local_knowledge_factor`), and the refused tuple stays all-false on every arm regardless of verification: no PrincipalId, no credential admission, no memory or lane content admitted, no current-truth admission, no runtime activation, no authority. A verified knowledge factor proves control of the factor and nothing else. The frozen D-P6 vocabulary is untouched — the same round still classifies `fixture_observed_local_authentication` at the observation layer while the D-P8 layer carries the verified factor, and the shell renders both on one ref and one clock read. Stage D's heading stays `— BLOCKED`: PrincipalId issuance, ERC-8004 identity mapping, and private-read activation remain deferred.

## Scope

1. `src/contracts/pond-local-authentication-mechanic.ts` — the D-P8 contract: verifier + proof records, the two assessors, the freshness vocabulary (D-P2's, reused verbatim and structurally pinned), the forbidden-key inventory, and the type invariants.
2. `src/fixtures/stage-d-p8-local-authentication-mechanic.ts` — the frozen complete/mismatch fixture matrix (zero value imports; digests only — the pinned secrets live in the selftest alone).
3. `scripts/render-stage-d-local-authentication.mjs` — the render ceremony extended to bundle the D-P8 classifiers (`renderedStages: D-P0/D-P2/D-P6/D-P8`).
4. `ui/generated/pond-stage-d-local-authentication.js` and its provenance JSON — the regenerated committed artifacts (`--check` byte-parity re-established).
5. `ui/pond-local-authentication.js` — additive enrollment + challenge-round logic; without an enrolled verifier the D-P7 fact-of-event behavior is unchanged, and the D-P7 selftest stays untouched and green.
6. `ui/pond-desktop.html` — additive masked input + enroll affordance in the D-P7 panel (the `type="password"` input lives in the HTML; module text stays hygiene-clean).
7. `scripts/pond-local-authentication-mechanic-selftest.mjs` — the selftest: matrix recompute, digest-formula tie, bundle parity, fail-closed table, composition tie, shell drive, markup + hygiene pins.
8. `package.json` — `test:stage-d-p8`.
9. `.github/workflows/ci.yml` — one additive step in each verify job (diff verified purely additive).
10. `docs/stage-d-p8-local-authentication-mechanic.md` — this document.
11. `BUILD_LIST.md` — the `D-P8 — COMPLETE` bullet.

## Shell posture

- The verifier lives in module scope for the shell session only — no persistence, no storage, no state files — and is revoked by re-enrollment or by closing the shell. Enrollment uses a fresh random salt per session; the supplied value is hashed with the pinned formula and wiped immediately; the challenge round never sees the value, only its digest.
- Unenrolled, the gesture is today's D-P7 fact-of-event flow; enrolled with a non-empty masked input, the gesture becomes a real challenge round rendered with the D-P6 fact-of-event line beside the D-P8 assessment verbatim (state, comparison, recomputed comparison, freshness, refused tuple). The minimal-host shape (no enrollment affordances) keeps the D-P6 flow everywhere; the D-P7 stub path is unchanged.
- Import law unchanged: the module reaches the frozen contract code only through the committed generated artifact; forbidden-key discipline means no operator-authored or secret-shaped content enters any record — the records carry digests and posture literals only.

## Authority ceiling

Enrollment and verification are vocabulary facts and nothing more: no credential backend, no PrincipalId issuance, no membership, no capability, no authority, no memory admission, no private-read activation, no persistence. `revocabilityPosture: "verifier_revocable_by_re_enrollment"` on every verifier record. The frozen classifier's refusal tuple arrives from the contract and is restated nowhere — the UI renders it verbatim on every enrollment and every round.

## Explicit non-goals

No credential backend, no key format, no identity provider, no provider-derived or session-derived credentials, no PrincipalId issuance, no ERC-8004 or AgentId identity mapping, no transport, no persistence or storage of any secret, no memory admission, no private-read or multi-principal-read activation, no runtime activation, no frozen-contract widening (zero changes to any D-P0…D-P7 contract), no architecture-law amendment, no onchain read.

## Validation evidence

- `npm run typecheck` clean.
- `npm run test:stage-d-p8` → `POND_STAGE_DP8_LOCAL_AUTHENTICATION_MECHANIC_SELFTEST_PASS` (fixture-matrix recompute against the TS contract and the generated bundle, node-crypto digest-formula tie reproducing both fixture digests and matching the shell's webcrypto helper, fail-closed table — tampered kinds/versions/literals, extra keys, malformed hex, odd-length salt, forbidden-key smuggling including `plaintext`/`answer`/`secret`/`token`/`PrincipalId`, salt/digest echo mismatch, claimed-vs-recomputed disagreement in both directions, stale/future/NaN clocks — valid-but-unsatisfied arms with the record staying valid, D-P6/D-P8 composition tie on one ref and one clock read, DOM-stub shell drive through enrollment and both challenge outcomes, static markup with the D-P1 pinned block intact, module-text hygiene bans, pinned-secret-absent module check).
- `npm run test:stage-d-p7` → `POND_STAGE_DP7_SHELL_WIRING_SELFTEST_PASS` (file untouched).
- All stage-d p0…p6 suites, stage-c, knowledge-forge, and stage-b2 suites unchanged and passing; `stage-d:render-agents -- --check` kept byte-parity; `stage-d:render-local-authentication -- --check` passes; `git diff --check` clean; the CI workflow diff purely additive.

## Activation

- INCLUDED: the mechanic contract, the fixture matrix, the render ceremony update, the regenerated bundle, the shell enrollment + challenge wiring, the selftest, the npm script, the CI steps, this document, the BUILD_LIST bullet.
- NOT_INCLUDED: PrincipalId issuance and the ERC-8004 identity-mapping cut (the next queued lane), private/multi-principal read activation, persistence, transport, runtime activation — each stays refused until its own planned cut.