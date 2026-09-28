# Stage D-P5 — receiver-owned local principal binding establishment ceremony

## Binding

- Parent: toadaid-app main `01f9f89` (D-P4 merged).
- Branch: `feat/stage-d-p5-local-principal-binding`.
- Canonical ecosystem law: ToadAid/toadaid-architecture at `bc7a971dfb243f0aa4417da6cef85cc56204f783` — re-verified locally this cut. The ceremony is shaped directly by two canonical owners: the Scope Sovereignty Contract (owner of `PrincipalId`: a principal is the explicitly identified actor to which identity may bind; a provider, model, browser, device, session, room, repository, wallet, or conversation is not automatically a principal; "Memory never grants permission"; personal state is private by default) and the Agent Identity & Specialist Admission Contract (owner of principal-agent binding: "Principal is not agent"; "Authentication is not authorization"; external identity is evidence only; the binding is revocable independently of provider session, transport, external registry, or wallet).
- Desk source contract: unchanged — bound by committed SHA `57b5c8b966d3eb58cf239b2f3f1598f09f24b296` only. The desk's main has moved (`10572a61f2562277a0c5804edfa979b71b539397` as of this cut); the principal binding is receiver-local and carries no desk SHA.

## Goal

Establish the ceremony that D-P0's `local_principal_binding_established_before_private_reads` and `observed_identity_kept_separate_from_principal_id` checks wait for: the deterministic proof contract for the receiver's own explicitly bound local principal. The ceremony record proves a well-formed principal ref bound to the receiver-held Stage D principal, an explicitly receiver-owned binding that never arrives inferred from presence, provider session, wallet, memory, or conversation, a receiver-observed local authentication observation, verified identity separation from the observed agent, memory-lane exclusion, and a no-authority independently-revocable posture. No real authentication is performed this cut; the fixture ceremony completes structurally only — exactly as D-P3's channel ceremony completed structurally only.

## Scope

1. `src/contracts/pond-local-principal-binding-establishment.ts` — the ceremony contract and its one classifier.
2. `src/fixtures/stage-d-p5-local-principal-binding.ts` — the two-arm frozen ceremony matrix.
3. `scripts/pond-local-principal-binding-selftest.mjs` — the selftest.
4. `package.json` — `test:stage-d-p5`.
5. `.github/workflows/ci.yml` — one additive step in each verify job.
6. `docs/stage-d-p5-local-principal-binding.md` — this document.
7. `BUILD_LIST.md` — the `D-P5 — COMPLETE` bullet.

## Source contracts

- **Scope Sovereignty law** (`bc7a971…`): PrincipalId semantics; presence/provider-session/wallet/memory/conversation never establish a principal; multi-principal isolation (`scope relationship != shared runtime trust`).
- **Agent identity law** (`bc7a971…`): "Principal is not agent. An agent cannot silently absorb the sovereignty of its principal"; "Authentication is not authorization"; admission is revocable independently of provider session, transport, external registry, or wallet. No key format, credential backend, or identity provider is defined anywhere in the architecture — D-P5 encodes none and defers all three deliberately.
- **D-P0 principal vocabulary** (`pond-agent-presence-projection.ts`): the 8-key closed `receiverObservation` already contains the satisfiable literals `principalBindingEstablished: "receiver_authenticated_local_binding"` and `identitySeparationFromPrincipal: "receiver_verified_identity_separation"` — the ceremony is the proof object whose satisfaction those literals encode, demonstrated deterministically in the selftest (checks 6 and 7 of 8 — the first two of the six D-P4 left owed). The D-P0 projection's own `localPrincipalBinding` block stays frozen at `authenticationPerformed: false` / `ceremonyPosture: "not_defined_this_cut"`.
- **D-P4 owed-checks list**: D-P4's mapped observation hardcodes `principalBindingEstablished: "not_established"` and stays frozen — D-P5 does not recompose the readiness gate; the tie is demonstrated at the D-P0 layer.

## Ceremony posture

- Principal ref: `principal:`-prefixed, non-empty, and bound to the receiver-held Stage D principal (`principal:fixture:stage-d-p0:local-principal` — the same literal the D-P0 fixture carries; one binding, one ref). A wallet, session, or provider ref is not a principal ref.
- Binding bases: `receiver_owned_explicit_binding` satisfies; the claimed forbidden bases (`inferred_from_presence`, `inferred_from_provider_session`, `inferred_from_wallet`, `inferred_from_memory`, `inferred_from_conversation`) are *valid* records whose binding checks stay unsatisfied — unknown or inferred precedence fails closed without erroring, mirroring D-P3's `unknown_channel_precedence`.
- Seven receiver-owned checks; a check is satisfied only when the record's own proof field carries the receiver-observed literal; a self-assertion or inferred basis never satisfies any of them.
- `POND_STAGE_DP5_FORBIDDEN_BINDING_KEYS`: `PrincipalId`/`principalId` variants (an identity-binding collapse) plus journal/memory/narrative/transcript/conversation/endpoint/transport/connect/fetch/poll/subscribe/secret/token/apiKey/session/wallet/address/credential — stack-walked over the whole record.

## Behavior

Deterministic and frozen: `assessPondLocalPrincipalBindingEstablishment({ ceremonyRecord, receiverHeldPrincipalRef })` re-validates the typed-`unknown` record (exact keys, literal membership, `principal:` prefix, forbidden-key walk), computes satisfied/unsatisfied per check, and returns a deep-frozen assessment. The fixture ceremony completes (`bindingEstablishmentState: "fixture_established_local_principal_binding"`, `authenticationPosture: "fixture_structural_only_no_real_authentication"`) only when all seven pass.

## Authority ceiling

The ceremony never becomes a real authentication, a PrincipalId issuance, memory admission, or authority. `authenticationPerformed: false`, `principalIdIssued: false`, `observedPresenceAcceptedAsAuthentication: false`, `observedIdentityAcceptedAsPrincipalId: false`, `personalMemoryContentAdmitted: false`, `currentTruthAdmitted: false`, `runtimeActivationPosture: "not_included"`, `authority: "none"` — pinned on every arm, type-level and runtime.

## Explicit non-goals

No real authentication event, no credential backend, no key format, no identity provider, no PrincipalId issuance, no ERC-8004 or AgentId identity mapping (explicitly deferred to a dedicated architecture cut), no memory admission, no private-read or multi-principal-read activation, no D-P0/D-P3/D-P4 widening, no UI change, no persistence, no runtime activation, no onchain read.

## Validation evidence

- `npm run typecheck` clean.
- `npm run test:stage-d-p5` → `POND_STAGE_DP5_LOCAL_PRINCIPAL_BINDING_SELFTEST_PASS` (matrix recomputation over the directly-imported D-P0 local principal ref, invalid-record table, valid-but-unsatisfied inferred-basis table, D-P0 tie with exactly the two principal checks satisfied and control, posture loop, JSON round-trip).
- All other stage suites unchanged and passing; `stage-d:render-agents -- --check` byte-parity maintained; `git diff --check` clean.

## Activation

- INCLUDED: the ceremony contract, the fixture matrix, the selftest, the npm script, the CI steps, this document, the BUILD_LIST bullet.
- NOT_INCLUDED: real authentication, credential backend, key format, identity provider, PrincipalId issuance, private-read activation, UI presentation of the binding, persistence, runtime activation.