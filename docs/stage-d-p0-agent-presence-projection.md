# Stage D-P0 — identity-bound observed-agent presence projection

Stage D-P0 is the first cut of Stage D. It establishes the identity-bound read vocabulary for observed agents and the first observed-agent presence record, with the locally running trading-desk Agent0 (the Telegram-controlled trading frog at `~/trading-desk`) as the first fixture-observed agent. It is a pure deterministic contract plus frozen fixture and selftest: no connection is made to the running desk, no transport is opened, no onchain read is performed, and no authentication ceremony is defined. The refusal posture this cut lands is the completion, not a gap in it: observed presence, observed transport, and bound identity-claim vocabulary are evidence only, and never authentication, PrincipalId, membership, admission, or authority.

## Binding

- Parent commit: `ec6097ccdd2a95ee03bd043190c3ef40d667f847` on `main`; branch `feat/stage-d-p0-agent-presence-projection`.
- Canonical architecture: `ToadAid/toadaid-architecture` at `bc7a971dfb243f0aa4417da6cef85cc56204f783`, re-verified at implementation time. Contracts read before this cut's semantics were fixed: `contracts/agent-identity-and-specialist-admission-contract.md` (AgentId, principal-agent binding, agent profiles, identity laws 1–8), `contracts/scope-sovereignty-contract.md` (PrincipalId, scope sovereignty, memory-never-grants-permission), `contracts/verification-applicability-contract.md`, `contracts/trusted-channel-separation-contract.md`.
- Trading-desk source contract: `main` at `57b5c8b966d3eb58cf239b2f3f1598f09f24b296`, bound by committed SHA only. The desk is a live running process with untracked scratch files; only its committed source contract is consumed, and only through its two secret-free read-only tool surfaces (`runtime_status`, `identity_status`).

## Goal

Give Pond (toadaid-app) the receiver-owned vocabulary a later live-observation cut needs for identity-bound agent reads, and bind the first observed agent into it:

1. **Observed-agent presence vocabulary** — profile classes (`personal_agent`, `community_agent`, `project_agent`, `specialist_agent`, `remote_external_agent`), presence statuses (`live_observed` exists in the vocabulary and is unreachable this cut), local principal binding states, identity-claim statuses, transport vocabulary, and runtime-fact labels.
2. **Trading-desk Agent0 as the first fixture-observed agent** — a `personal_agent` record with `fixture_observed_not_live` presence, Telegram transport observation, exactly the seven secret-free `runtime_status` fact labels (brain and execution transcribed from the desk's source-contract defaults; the remaining five honestly `not_observed`), and the ERC-8004 identity-claim vocabulary bound without any observation.
3. **Structural refusal law at the type level** — `PondAgentRef` and `PondPrincipalRef` branded refs are provably mutually non-assignable, so observed agent identity is not a PrincipalId even before any runtime runs; transport-is-not-agent-identity, onchain-is-not-principal-identity, and authentication-not-performed are pinned as `Assert<Equal<…>>` invariants.

## Source contracts

- **`runtime_status` runtime facts.** The desk's secret-free runtime identity labels — `brain`, `provider`, `model`, `execution`, `trading_state`, `hands`, `doctor_cheap_check` — are bound as `PondObservedAgentRuntimeFact` with `sourceTool: "runtime_status"`. This cut transcribes two values from the desk's source-contract defaults (`brain: "glm"`, `execution: "dry_run"`) with `valuePosture: "transcribed_from_source_contract"`. Pond never invoked the running desk, so the other five facts are `observedValue: null` / `valuePosture: "not_observed"`.
- **`identity_status` identity-claim vocabulary.** The desk's ERC-8004 verification statuses (`UNCONFIGURED|VERIFIED|MISMATCH|UNVERIFIED|UNAVAILABLE|REFUSED`) are mirrored into Pond with an `observed_` prefix (`observed_verified`, …) so a desk vocabulary change can never silently re-enter Pond as a trusted fact. Configuration supplied the desk's claim; in Pond's projection it remains evidence only, and this cut performs no onchain read of its own — the vocabulary is bound, not the observation. The fixture pins `claimStatus: "not_observed"` with all-null evidence: no VERIFIED claim is fabricated from the desk's configuration.
- **Read-only posture.** `PondObservedAgentSourceContract` binds `repository: "trading-desk"`, the committed `boundSourceCommit`, `observedTools: ["runtime_status", "identity_status"]`, and `sourcePosture: "read_only_tool_contract_only_no_live_connection"`.

## Identity laws admitted

Canonical identity laws 1–8 from `agent-identity-and-specialist-admission-contract.md` map to this cut's structural facts:

1. **Principal is not agent** — the fixture's local principal ref and Agent0's agent ref live in disjoint namespaces and disjoint branded types (`PondStageDP0Invariant_AgentRefNotPrincipalRef`).
2. **Agent identity is not authority** — every presence record and the projection carry `authority: "none"`, and the admission assessment can never widen it.
3. **Authentication is not authorization** — `localPrincipalBinding.authenticationPerformed` is a hard `false`, and the refused tuple holds `observedPresenceAcceptedAsAuthentication: false` on every outcome.
4. **External identity is evidence** — the ERC-8004 projection is `observed_evidence_only_no_local_authority` with all three relationship claims hard-false.
5. **Provider session is not agent** — runtime facts are recorded as observed values from a named tool; no fact establishes the agent.
6. **Transport is not agent** — `transportIsAgentIdentity: false` and `transportEstablishesAdmission: false` are pinned invariants on the transport projection.
7. **Wallet is not agent** — wallet/owner evidence fields (`ownerObserved`) are evidence-only and never grant admission.
8. **Onchain identity is not local authority** — `onchainIdentityEstablishesLocalAdmission: false` and `onchainIdentityEstablishesAuthority: false` are pinned invariants.

Governing sentence, at the type level: observed ≠ registered ≠ granted ≠ authorized.

## Admission checks

The receiver-owned admission check set (`PondAgentPresenceAdmissionCheck`, eight names) follows the Stage C-P9 structural template: each check names an independently observed receiver fact, and producer self-attestation satisfies none of them.

1. `exact_source_contract_identity`
2. `exact_secret_free_runtime_fact_inventory`
3. `receiver_owned_presence_observation_channel`
4. `runtime_facts_separated_from_personal_memory_channels`
5. `identity_claim_evidence_independently_reproduced`
6. `local_principal_binding_established_before_private_reads`
7. `observed_identity_kept_separate_from_principal_id`
8. `live_presence_observation_observed`

Every check is unsatisfied in this cut. The all-`not_observed` receiver observation classifies the fixture `insufficient_evidence` / `receiver_proof_incomplete`; the fully satisfied observation is `structurally_admissible_fixture` — a fixture-only classification — and the refused tuple still holds on it: `observedPresenceAcceptedAsAuthentication: false`, `observedIdentityAcceptedAsPrincipalId: false`, `personalMemoryContentAdmitted: false`, `localPrincipalBindingEstablished: false`, `currentTruthAdmitted: false`, `runtimeActivationPosture: "not_included"`, `authority: "none"`.

## Proof ceiling

Observing agent presence, runtime facts, transport vocabulary, or identity-claim status vocabulary proves no authentication, no membership, no admission, and no authority. The desk's journal, memory, narrative, and transcript lanes — its personal memory — are structurally excluded from presence records: the boundary object carries all four lanes as `false`, the record key inventory fails closed on any forbidden key (`journal`, `memory`, `narrative`, `transcript`, effect and credential keys), and the projection carries no live-connection fields (`connect`, `listen`, `poll`, `subscribe` are structurally absent). The receiver observation's satisfied fields are receiver-owned literals; a producer-authored separation or binding literal is refused as invalid.

## Non-goals

- No connection to the running trading-desk process, no transport, no MCP/A2A wiring.
- No live `runtime_status` or `identity_status` invocation, no onchain ERC-8004 read, no wallet connection.
- No authentication ceremony, no PrincipalId issuance, no local principal binding beyond the fixture projection.
- No desk journal/memory/narrative/transcript content admission of any kind.
- No AgentId issuance, no agent admission decision, no capability grant, no e-stop surface.
- No UI presentation, no persistence, no runtime activation.

## Validation

- `npm run typecheck` — clean (strict, `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`).
- `npm run test:stage-d-p0` — the `POND_STAGE_DP0_AGENT_PRESENCE_PROJECTION_SELFTEST_PASS` selftest: default refusal posture, per-check independence, fully-satisfied fixture classification, fail-closed projection and observation invalids, frozen results, and fixture truths (Agent0 exact shape, all-null identity claim, seven-fact inventory, inert relationship slots, unauthenticated local binding, memory boundaries, ref-namespace disjointness, source-commit binding).
- Existing stage suites (`test:stage-c-p5` … `test:stage-c-p10`, `test:stage-b2-p4b-p21/p22`) unchanged and passing.

## Activation

- **INCLUDED:** the presence-projection contract (`src/contracts/pond-agent-presence-projection.ts`), the frozen fixture (`src/fixtures/stage-d-p0-agent-presence.ts`), the selftest (`scripts/pond-agent-presence-projection-selftest.mjs`), the npm script, and the additive CI steps in both verify jobs.
- **NOT_INCLUDED:** live observation of the running desk, any transport, any authentication or principal-binding ceremony, onchain ERC-8004 re-verification, UI presentation, runtime activation of any authority.