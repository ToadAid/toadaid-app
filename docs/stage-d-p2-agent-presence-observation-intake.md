# Stage D-P2 — receiver-owned live-presence observation intake seam

## Binding

- Parent: toadaid-app main `8e295de` (D-P1 merged).
- Branch: `feat/stage-d-p2-agent-presence-observation-intake`.
- Canonical ecosystem law: ToadAid/toadaid-architecture at `bc7a971dfb243f0aa4417da6cef85cc56204f783` (agent-identity-and-specialist-admission-contract, scope-sovereignty-contract, trusted-channel-separation-contract) — re-verified locally this cut.
- Desk source contract: trading-desk main `57b5c8b966d3eb58cf239b2f3f1598f09f24b296`, bound by committed SHA only. The running desk was never invoked; the desk is running with untracked scratch, and only the committed tree is ever named.

## Goal

Establish the seam that D-P0's `receiver_owned_presence_observation_channel` and `live_presence_observation_observed` checks point at: the deterministic intake vocabulary a future live desk observation would flow through. The intake refuses every candidate — including a fresh, well-formed one — because no trusted receiver-owned channel exists. A source-owned-time freshness diagnosis is computed and never admitted: a diagnosis is not an admission. The refusal posture is the completion of this cut, not a gap in it.

## Scope

1. `src/contracts/pond-agent-presence-observation-intake.ts` — the intake contract and its one classifier.
2. `src/fixtures/stage-d-p2-agent-presence-observation-intake.ts` — the four-arm frozen candidate matrix.
3. `scripts/pond-agent-presence-observation-intake-selftest.mjs` — the selftest.
4. `package.json` — `test:stage-d-p2`.
5. `.github/workflows/ci.yml` — one additive step in each verify job.
6. `docs/stage-d-p2-agent-presence-observation-intake.md` — this document.
7. `BUILD_LIST.md` — the `D-P2 — COMPLETE` bullet.

## Source contracts

- `pond-agent-presence-projection-d-p0` (D-P0): the observed-agent presence vocabulary and the eight receiver-owned admission checks, two of which name the channel this seam reserves.
- `pond-agent-presence-source-binding-d-p1` (D-P1): the fixture-bound committed desk source contract; the desk SHA appears in the intake candidates only as a receiver-unverified claim.
- C-P4 observation-metadata vocabulary (`observed_at_epoch_ms` / `freshness_basis: "source_observation_time_only"` / `currentness_posture: "not_established_consumer_must_evaluate"`), reused so a future live observation carries the same shape the Bridge cut already bound.
- The desk source contract fixture (`pond-agent-presence-source-contract-d-p0`, tools `runtime_status` + `identity_status`).

## Intake posture

- Candidate states: `no_observation_present`, `claim_without_observation_metadata`, `claim_with_stale_observation`, `claim_with_fresh_observation` — state vocabulary only, `candidatePayloadPosture: "not_included_fixture_state_only"`. No real payload, no self-attestation accepted.
- Seven receiver-owned intake checks (`receiver_owned_observation_channel_established`, `desk_source_contract_commit_verified_by_receiver`, `observation_metadata_reproduced_from_bound_contract`, `observation_freshness_within_declared_maximum_age`, `secret_free_observation_field_inventory`, `personal_memory_lanes_excluded`, `no_effect_or_transport_requested`) are unsatisfied on every outcome; the assessment type-level pins `satisfiedChecks: readonly []`.
- Freshness is diagnosed deterministically from source-owned observation time against an explicit evaluation time and a declared maximum age (inclusive boundary, future-time and invalid-input arms), reusing the C-P5 classifier shape. `fresh` is a diagnosis, never an admission.
- Refusal is unconditional: `intakeState: "refused_no_trusted_observation_channel"`, `canonicalOutcome: "refused"`. Invalid candidates fail closed with `refusalReason: "observation_candidate_invalid"`; well-formed candidates refuse with `refusalReason: "receiver_owned_channel_not_established"`.

## Behavior

Deterministic and frozen: `assessPondAgentPresenceObservationIntake({ candidate, evaluatedAtEpochMs, maximumAgeMs })` re-validates every input typed `unknown` (exact keys, literal membership, safe non-negative integers, 40-hex commit claims, forbidden-key stack-walk over `POND_STAGE_D_P2_FORBIDDEN_INTAKE_KEYS`), enforces metadata/state-label agreement, and returns a deep-frozen assessment. `POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS = 60_000` is the fixture-declared maximum age.

## Authority ceiling

The intake seam proves no authentication, membership, admission, or authority. `livePresenceObservationAdmitted: false`, `observedPresenceAcceptedAsAuthentication: false`, `personalMemoryContentAdmitted: false`, `currentTruthAdmitted: false`, `snapshotPresentation: "withheld"`, `runtimeActivationPosture: "not_included"`, `authority: "none"` — pinned on every arm, type-level and runtime. Fallback to direct desk invocation, alternate-channel selection, or credential use is forbidden on every arm; every effect posture is `not_performed`.

## Explicit non-goals

No trusted-channel establishment, no transport, no desk invocation, no polling or listening, no credential use, no UI change, no persistence, no runtime activation, no widening of the D-P0 or D-P1 refused tuples, no AgentId issuance, no onchain read.

## Validation evidence

- `npm run typecheck` clean.
- `npm run test:stage-d-p2` → `POND_STAGE_DP2_OBSERVATION_INTAKE_SELFTEST_PASS` (fixture recomputation, inclusive freshness boundary, invalid-time and invalid-candidate tables, shared posture loop, D-P0 tie, JSON round-trip).
- All other stage suites unchanged and passing (stage-c-p5…p10, stage-d-p0, stage-d-p1, p5 knowledge-forge, stage-b2-p4b-p21/p22).
- `npm run stage-d:render-agents -- --check` byte-parity maintained.
- `git diff --check` clean.

## Activation

- INCLUDED: the intake contract, the fixture matrix, the selftest, the npm script, the CI steps, this document, the BUILD_LIST bullet.
- NOT_INCLUDED: a trusted receiver-owned observation channel, live observation, transport, authentication, memory-lane content, UI presentation of the seam, persistence, runtime activation.