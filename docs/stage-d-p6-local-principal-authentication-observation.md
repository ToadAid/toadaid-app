# Stage D-P6 — receiver-owned local principal authentication observation performer seam

## Binding

- Parent: toadaid-app main `29e3397` (D-P5 merged).
- Branch: `feat/stage-d-p6-local-principal-authentication-observation`.
- Canonical ecosystem law: ToadAid/toadaid-architecture at `bc7a971dfb243f0aa4417da6cef85cc56204f783` — re-verified locally this cut. The seam is shaped by: the Scope Sovereignty Contract (a provider, model, browser, device, session, room, repository, wallet, or conversation is not automatically a principal); the Agent Identity & Specialist Admission Contract ("Authentication is not authorization"; external identity is evidence only; the binding is revocable independently of provider session, transport, or external registry); and the trusted-channel-separation law (the binding must not be writable through operator messages, documents, provider output, or conversation history).
- Desk source contract: unchanged — bound by committed SHA `57b5c8b966d3eb58cf239b2f3f1598f09f24b296` only. The desk's main has moved (`10572a61f2562277a0c5804edfa979b71b539397` as of this cut); the authentication observation is receiver-local and carries no desk SHA.

## Goal

Establish the performer seam for the one thing every prior Stage D cut deferred: the receiver's own observed local authentication event. D-P5 proved the principal binding structurally, with its `local_authentication_observed_by_receiver` check satisfied by a record field nobody yet defined. D-P6 defines what it takes for the receiver to accept a real local authentication observation: a receiver-observed event state that never arrives producer-asserted or inferred from session presence or wallet connection, bound to the receiver-held Stage D principal over a receiver-owned local shell channel, a secret-free field inventory carrying the fact of the event and never a credential, a D-P2-vocabulary freshness diagnosis, exclusion of memory and lane content, and a no-authority posture. No live authentication event is performed this cut; the fixture observation completes structurally only — exactly as D-P3's channel ceremony and D-P5's binding ceremony completed structurally only.

## Scope

1. `src/contracts/pond-local-principal-authentication-observation.ts` — the performer contract and its one classifier.
2. `src/fixtures/stage-d-p6-local-principal-authentication-observation.ts` — the two-arm frozen observation matrix.
3. `scripts/pond-local-principal-authentication-observation-selftest.mjs` — the selftest.
4. `package.json` — `test:stage-d-p6`.
5. `.github/workflows/ci.yml` — one additive step in each verify job.
6. `docs/stage-d-p6-local-principal-authentication-observation.md` — this document.
7. `BUILD_LIST.md` — the `D-P6 — COMPLETE` bullet.

## Source contracts

- **D-P2 freshness vocabulary** (`pond-agent-presence-observation-intake.ts`), reused verbatim: `fresh | stale | unknown` states; the six reasons in fixed order (`within_declared_maximum_age`, `declared_maximum_age_expired`, `observation_metadata_missing_or_invalid`, `evaluation_time_invalid`, `maximum_age_invalid`, `observation_time_in_future`); inclusive `<=` fresh boundary; `safeNonNegativeInteger` time validation; the 3-key observation metadata (`observed_at_epoch_ms`, `freshness_basis: "source_observation_time_only"`, `currentness_posture: "not_established_consumer_must_evaluate"`). The diagnosis is a diagnosis, never an admission — reimplemented locally with identical literals and ordering, type-structurally pinned equal to D-P2's diagnosis.
- **D-P5 upgrade target** (`pond-local-principal-binding-establishment.ts`): the ceremony's check-4 literal `receiver_observed_local_authentication` — the performer-complete observation is the proof object whose acceptance upgrades it. Demonstrated in the selftest: the upgraded ceremony completes with all seven checks satisfied; the control stays incomplete.
- **D-P0 principal literals** (`pond-agent-presence-projection.ts`): the receiver-held principal ref (`principal:fixture:stage-d-p0:local-principal`) and the observation literal `principalBindingEstablished: "receiver_authenticated_local_binding"` — one binding, one ref across D-P0/D-P5/D-P6.
- **D-P3 anchor** (`pond-agent-presence-channel-establishment.ts`): `pond_desktop_shell` is the only existing local-shell runtime literal; the performer's `receiver_owned_local_shell_channel` extends the receiver-owned channel vocabulary for the local shell channel kind. Operator input remains expressly not a channel into ceremony records.
- **B2 posture**: a wallet address does not authenticate — `inferred_from_wallet_connection` is a valid-but-unsatisfied fail-closed event state.

## Performer posture

- Event states: `receiver_observed_local_authentication_event` satisfies; `asserted_by_producer`, `inferred_from_session_presence`, and `inferred_from_wallet_connection` are *valid* records whose event checks stay unsatisfied — producer assertion, session presence, and wallet inference fail closed without erroring, mirroring D-P3's `unknown_channel_precedence` and D-P5's inferred bases.
- Secret-free by construction: the record carries the *fact* of the event, never a credential — `POND_STAGE_DP6_FORBIDDEN_OBSERVATION_KEYS` stack-walks the whole record for `PrincipalId`/`principalId`, memory-lane keys, credential keys (`secret`, `token`, `apiKey`, `password`, `passphrase`, `credential`, `wallet`, `address`), and live-connection keys.
- Seven receiver-owned checks; a check is satisfied only when the record's own proof field carries the receiver-observed literal.
- Freshness: a stale observation (valid metadata, expired age) keeps the record valid with the freshness check unsatisfied and the diagnosis carried verbatim; NaN evaluation time and future observation time diagnose `unknown`, never error.

## Behavior

Deterministic and frozen: `assessPondLocalPrincipalAuthenticationObservation({ observationRecord, receiverHeldPrincipalRef, evaluatedAtEpochMs, maximumAgeMs })` re-validates the typed-`unknown` record (exact 11 keys, literal membership, `principal:` prefix, D-P2 metadata, forbidden-key walk), computes the freshness diagnosis with D-P2's exact ordering, computes satisfied/unsatisfied per check, and returns a deep-frozen assessment. The fixture observation completes (`authenticationObservationState: "fixture_observed_local_authentication"`, `authenticationPosture: "fixture_structural_only_no_live_authentication"`) only when all seven pass.

## Authority ceiling

The performer seam never becomes a live authentication event, a credential admission, a PrincipalId issuance, memory admission, or authority. `liveAuthenticationPerformed: false`, `observedPresenceAcceptedAsAuthentication: false`, `observedIdentityAcceptedAsPrincipalId: false`, `principalIdIssued: false`, `personalMemoryContentAdmitted: false`, `currentTruthAdmitted: false`, `runtimeActivationPosture: "not_included"`, `authority: "none"` — pinned on every arm, type-level and runtime.

## Explicit non-goals

No live authentication event performed, no shell/UI wiring, no credential backend, no key format, no identity provider, no PrincipalId issuance, no ERC-8004 or AgentId identity mapping, no memory admission, no private-read or multi-principal-read activation, no D-P0/D-P2/D-P3/D-P4/D-P5 widening, no UI change, no persistence, no runtime activation, no onchain read.

## Validation evidence

- `npm run typecheck` clean.
- `npm run test:stage-d-p6` → `POND_STAGE_DP6_LOCAL_PRINCIPAL_AUTHENTICATION_OBSERVATION_SELFTEST_PASS` (matrix recomputation over the directly-imported D-P0 local principal ref, invalid-record table, valid-but-unsatisfied event-state table with stale/NaN/future freshness diagnoses, D-P5 upgrade tie with control, D-P0 tie, posture loop, JSON round-trip).
- All other stage suites unchanged and passing; `stage-d:render-agents -- --check` byte-parity maintained; `git diff --check` clean.

## Activation

- INCLUDED: the performer contract, the fixture matrix, the selftest, the npm script, the CI steps, this document, the BUILD_LIST bullet.
- NOT_INCLUDED: the live shell event emission, shell/UI wiring, credential backend, key format, identity provider, PrincipalId issuance, private-read activation, UI presentation, persistence, runtime activation.