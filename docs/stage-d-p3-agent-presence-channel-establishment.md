# Stage D-P3 — receiver-owned trusted-channel establishment ceremony

## Binding

- Parent: toadaid-app main `39c0e07` (D-P2 merged).
- Branch: `feat/stage-d-p3-agent-presence-channel-establishment`.
- Canonical ecosystem law: ToadAid/toadaid-architecture at `bc7a971dfb243f0aa4417da6cef85cc56204f783` — re-verified locally this cut; the cut is shaped directly by `contracts/trusted-channel-separation-contract.md`: trust is a property of the path by which information entered the system, a channel is authoritative only for the semantic classes the receiver verifies it can govern, conflicting upstream configuration must be detected rather than ignored, and unknown precedence fails closed.
- Desk source contract: bound by committed SHA `57b5c8b966d3eb58cf239b2f3f1598f09f24b296` only. The desk's main has moved since the D-P1 binding (`10572a61f2562277a0c5804edfa979b71b539397` as of this cut) — which is exactly why the ceremony carries the bound committed SHA and never a moving main.

## Goal

Establish the ceremony that D-P0's `receiver_owned_presence_observation_channel` check and D-P2's intake seam wait for: the deterministic proof contract for a Pond-owned presence-observation channel. The ceremony record proves channel kind, direct-child process ownership, semantic-class-bounded authority, secret-free inventory, carried source-contract binding, and precedence — and never authentication, memory admission, or authority. No channel is opened this cut; the fixture ceremony completes structurally only.

## Scope

1. `src/contracts/pond-agent-presence-channel-establishment.ts` — the ceremony contract and its one classifier.
2. `src/fixtures/stage-d-p3-agent-presence-channel-establishment.ts` — the two-arm frozen ceremony matrix.
3. `scripts/pond-agent-presence-channel-establishment-selftest.mjs` — the selftest.
4. `package.json` — `test:stage-d-p3`.
5. `.github/workflows/ci.yml` — one additive step in each verify job.
6. `docs/stage-d-p3-agent-presence-channel-establishment.md` — this document.
7. `BUILD_LIST.md` — the `D-P3 — COMPLETE` bullet.

## Source contracts

- **Trusted-channel-separation law** (`bc7a971…`): per-semantic-class authority; the channel map must state who controls the channel, what it may establish, how precedence is verified, and what happens on conflict; unknown precedence yields `unknown_channel_precedence`, not success. D-P3's ceremony vocabulary encodes exactly this: `channel_authoritative_for_presence_semantic_class_only`, `unknown_channel_precedence` as a fail-closed valid record, and structurally forbidden crossings.
- **D-P0 receiverObservation vocabulary**: `validReceiverObservation` already accepts `presenceObservationChannel: "receiver_owned_channel_observed"` — the ceremony is the proof object whose satisfaction that literal will encode in a future live cut, demonstrated deterministically in the selftest.
- **D-P1 desk source binding** and the D-P2 intake seam (`refused_no_trusted_observation_channel`): D-P3 defines what would eventually prove the channel; D-P2's refusal is untouched — its own contract version keeps refusing every candidate.

## Ceremony posture

- Channel kinds: `not_established` | `stdio_direct_child_process` — the only receiver-owned kind contemplated (Pond spawns and holds the desk child process; C-P9 stdio precedent). Unknown kinds fail closed.
- Semantic-class authority: the channel establishes exactly `["observed_agent_presence"]`; the type vocabulary is pinned exact so a new class requires a new contract version.
- Forbidden crossings — structural, every record: trusted runtime configuration, canonical memory, authority decisions, operator input (all `"forbidden"`).
- Precedence: `receiver_authoritative_no_conflicting_upstream_configuration_observed` satisfies the ceremony check; `unknown_channel_precedence` is a *valid* record whose ceremony check stays unsatisfied — unknown precedence fails closed without erroring.
- Seven receiver-owned checks; a check is satisfied only when the record's own proof field carries the receiver-observed literal; a self-assertion (`processOwnership: "self_asserted_by_producer"`) never satisfies any of them.

## Behavior

Deterministic and frozen: `assessPondAgentPresenceChannelEstablishment({ establishmentRecord })` re-validates the typed-`unknown` input (exact keys, literal membership, 40-hex commit, forbidden-key walk over `POND_STAGE_DP3_FORBIDDEN_CHANNEL_KEYS` + `POND_STAGE_DP3_FORBIDDEN_LIVE_CONNECTION_KEYS`), computes satisfied/unsatisfied per check, and returns a deep-frozen assessment. The fixture ceremony completes (`channelEstablishmentState: "fixture_established_receiver_owned_channel"`, `trustedChannelPosture: "fixture_structural_only_no_live_channel"`) only when all seven pass.

## Authority ceiling

The ceremony never becomes a live channel, authentication, memory admission, or authority. `liveObservationPerformed: false`, `observedPresenceAcceptedAsAuthentication: false`, `personalMemoryContentAdmitted: false`, `currentTruthAdmitted: false`, `runtimeActivationPosture: "not_included"`, `authority: "none"` — pinned on every arm, type-level and runtime.

## Explicit non-goals

No channel opened, no desk process spawned, no transport, no live observation, no D-P2 intake flip (D-P2 stays refused by its own contract version), no UI change, no persistence, no runtime activation, no principal binding, no AgentId issuance, no onchain read.

## Validation evidence

- `npm run typecheck` clean.
- `npm run test:stage-d-p3` → `POND_STAGE_DP3_CHANNEL_ESTABLISHMENT_SELFTEST_PASS` (matrix recomputation, invalid-record table, valid-unknown-precedence fail-closed case, D-P0 tie with satisfied-channel-check demonstration and control, posture loop, JSON round-trip).
- All other stage suites unchanged and passing; `stage-d:render-agents -- --check` byte-parity maintained; `git diff --check` clean.

## Activation

- INCLUDED: the ceremony contract, the fixture matrix, the selftest, the npm script, the CI steps, this document, the BUILD_LIST bullet.
- NOT_INCLUDED: live channel establishment, transport, authentication, UI presentation of the ceremony, persistence, runtime activation.