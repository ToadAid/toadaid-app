# Stage D-P4 — live-observation admission composition (readiness gate)

## Binding

- Parent: toadaid-app main `ae668cd` (D-P3 merged).
- Branch: `feat/stage-d-p4-agent-presence-live-observation-admission`.
- Canonical ecosystem law: ToadAid/toadaid-architecture at `bc7a971dfb243f0aa4417da6cef85cc56204f783` — the cut composes the trusted-channel-separation ceremony with the identity binding and the fresh-observation seam into one deterministic readiness assessment; trust stays a property of the path, and readiness is never a performed live observation.
- Desk source contract: bound by committed SHA `57b5c8b966d3eb58cf239b2f3f1598f09f24b296` only. The desk's main has moved (`10572a61f2562277a0c5804edfa979b71b539397` as of this cut) — the composition binds the committed SHA carried by the ceremony record, never a moving main.

## Goal

Compose the Stage D chain into one deterministic readiness assessment: the fully satisfied receiver-owned channel ceremony (D-P3), the carried desk source-contract identity binding (D-P1/D-P0), a structurally admissible presence projection (D-P0), and a fresh well-formed observation candidate (D-P2) — producing `structurally_ready_pending_actual_observation` when all four hold and `not_ready` otherwise. The composition maps exactly two D-P0 receiver checks to satisfied — `exact_source_contract_identity` and `receiver_owned_presence_observation_channel` — and restates the other six as the live proof still owed. No live observation is performed; the refused tuple is pinned on every arm.

## Scope

1. `tsconfig.json` — additive `"allowImportingTsExtensions": true` (legal under `noEmit`; node 24 strips `.ts` specifiers natively), so the composition classifier can value-import the D-P0/D-P2/D-P3 classifiers with explicit `.ts` specifiers while every file stays node-importable.
2. `src/contracts/pond-agent-presence-live-observation-admission.ts` — the composition contract and its one classifier.
3. `src/fixtures/stage-d-p4-agent-presence-live-observation-admission.ts` — the two-arm frozen matrix (zero value imports; the D-P0 projection is supplied by the selftest's direct import and referenced by label).
4. `scripts/pond-agent-presence-live-observation-admission-selftest.mjs` — the selftest.
5. `package.json` — `test:stage-d-p4`.
6. `.github/workflows/ci.yml` — one additive step in each verify job.
7. `docs/stage-d-p4-agent-presence-live-observation-admission.md` — this document.
8. `BUILD_LIST.md` — the `D-P4 — COMPLETE` bullet.

## Source contracts

- **D-P3 ceremony** (`pond-agent-presence-channel-establishment.ts`): check 1 is satisfied iff the D-P3 classifier returns `all_ceremony_checks_satisfied` — all seven ceremony checks over the receiver's own record.
- **D-P1/D-P0 identity binding** (`pond-agent-presence-source-binding.ts`, `pond-agent-presence-projection.ts`): check 2 is satisfied iff a valid desk source-contract fixture (exact 4 keys, `pond-agent-presence-source-contract-d-p0`, trading-desk, 40-hex commit, exact 2 read-only tools, `authority: "none"`) carries a `boundSourceCommit` equal to the ceremony record's carried `sourceContractCommit`. The comparison is orthogonal to ceremony completion — the receiver matches the carried commit against its own independently held binding; ceremony completeness is reported separately as check 1.
- **D-P0 admission**: the projection check is proven by running D-P0's own `assessPondAgentPresenceAdmission` with a mapped receiver observation — `sourceContractIdentityMatch` and `presenceObservationChannel` mapped from checks 2 and 1, every other field still `not_observed`/`not_established`/`not_performed`. `mappedDp0SatisfiedChecks`/`mappedDp0UnsatisfiedChecks` carry the result verbatim: on the ready arm exactly `["exact_source_contract_identity", "receiver_owned_presence_observation_channel"]` satisfied, the other six owed in D-P0 canonical order.
- **D-P2 intake** (`pond-agent-presence-observation-intake.ts`): check 4 is satisfied iff the intake assessment is well-formed with `freshnessDiagnosis.state === "fresh"`. D-P2 still refuses — a diagnosis is not an admission — so freshness is carried here as a readiness fact only, verbatim in the assessment.

## Composition posture

- Four receiver-owned readiness checks in canonical order: `channel_ceremony_fully_satisfied`, `desk_source_contract_commit_identity_bound`, `presence_projection_structurally_admissible`, `observation_candidate_fresh_and_well_formed`.
- Readiness states: `not_ready` | `structurally_ready_pending_actual_observation`. No frozen contract is widened — D-P0, D-P2, and D-P3 are untouched; D-P4 is a new contract version composing over them.
- Every input is validated by the frozen classifier of the stage that owns it; a broken composition (invalid ceremony record, identity mismatch with a different valid 40-hex commit, tampered projection, stale or invalid candidate, NaN evaluation time) fails closed to `not_ready` with the exact unsatisfied checks still visible.

## Behavior

Deterministic and frozen: `assessPondAgentPresenceLiveObservationAdmission(input)` validates the ceremony record through D-P3's classifier, the desk fixture locally in D-P1's shape, the projection through D-P0's admission under the mapped observation, and the candidate through D-P2's intake — then returns a deep-frozen assessment with the carried `freshnessDiagnosis`, the mapped D-P0 check lists, satisfied/unsatisfied readiness checks, `livePresencePresentation: "withheld_no_live_observation_performed"`, and the refused tuple.

## Authority ceiling

Structural readiness never becomes a performed live observation, authentication, memory admission, local principal binding, current truth, runtime activation, or authority: `liveObservationPerformed: false`, `observedPresenceAcceptedAsAuthentication: false`, `observedIdentityAcceptedAsPrincipalId: false`, `personalMemoryContentAdmitted: false`, `localPrincipalBindingEstablished: false`, `currentTruthAdmitted: false`, `runtimeActivationPosture: "not_included"`, `authority: "none"` — pinned on every arm, type-level and runtime.

## Explicit non-goals

No live observation performed, no transport, no desk invocation, no widening of the frozen D-P0/D-P2/D-P3 contracts, no D-P2 intake flip, no UI change, no persistence, no runtime activation, no principal binding, no AgentId issuance, no onchain read.

## Validation evidence

- `npm run typecheck` clean (with the additive `allowImportingTsExtensions` option).
- `npm run test:stage-d-p4` → `POND_STAGE_DP4_LIVE_OBSERVATION_ADMISSION_SELFTEST_PASS` (matrix recomputation over the directly-imported D-P0 projection fixture, invalid-composition table incl. identity mismatch and NaN freshness, ready-arm D-P0 mapping pins, shared posture loop, JSON round-trip).
- All other stage suites unchanged and passing; `stage-d:render-agents -- --check` byte-parity maintained; `git diff --check` clean.

## Activation

- INCLUDED: the composition contract, the fixture matrix, the selftest, the tsconfig option, the npm script, the CI steps, this document, the BUILD_LIST bullet.
- NOT_INCLUDED: actual live observation, transport, desk invocation, authentication, principal binding, UI presentation, persistence, runtime activation.