# Stage D-P1 — Agents view fixture presentation

Stage D-P1 is the Stage D presentation cut, mirroring the landed Stage C-P10 cockpit pattern: the complete Stage D posture established by D-P0 is presented as one fixture-rendered, read-only **Agents view panel** in the Home context panel of the desktop app, with the trading-desk source contract bound as a D-P1 structural fixture source binding. No connection is made to the running desk, no live observation is performed, no transport is opened, no authentication ceremony is defined, and no onchain read happens. The panel renders the same refused posture the D-P0 contract pins: observed presence, transport, and identity-claim vocabulary are evidence only — the vocabulary is bound, not the observation.

## Binding

- Parent commit: `4905d14f2101c7821ba1901fa686e684bf2b348f` on `main`; branch `feat/stage-d-p1-agents-view-fixture-presentation`.
- Canonical architecture: `ToadAid/toadaid-architecture` at `bc7a971dfb243f0aa4417da6cef85cc56204f783`, re-verified at implementation time (same commit pinned through Stages C and D-P0).
- Trading-desk source contract: `main` at `57b5c8b966d3eb58cf239b2f3f1598f09f24b296`, bound by committed SHA only.

## Goal

1. **Desk presence source binding** (`src/contracts/pond-agent-presence-source-binding.ts`): a receiver-owned six-check binding contract that binds the D-P0 presence projection to its trading-desk source contract — exact repository identity, exact committed SHA binding, exact observed tool inventory, read-only source posture, presence records sourced from the bound contract, and no live-connection channel anywhere in the binding. The fixture-level structural binding is admissible; the refused tuple (`liveSourceContractVerifiedByReceiver: false`, `presenceRecordsAcceptedAsLiveObservation: false`, `currentTruthAdmitted: false`, `runtimeActivationPosture: "not_included"`, `authority: "none"`) holds on every outcome, so a fixture source binding never graduates to receiver live verification.
2. **Agents view fixture presentation**: the Stage D posture rendered beside the Stage C cockpit panel — source binding, unauthenticated local principal binding, three observed-agent cards (trading-desk Agent0 plus the inert community and project slots), the all-unsatisfied eight-check live-presence admission, and the structural memory-lane exclusion.

## Scope

- `src/contracts/pond-agent-presence-source-binding.ts` — pure deterministic binding contract with `PondStageDP1Invariant_*` compile-time invariants.
- `src/agents/pond-stage-d-agents-record.ts` — the presentation record (single source of truth, fail-closed fixture-drift guards, picked fields, deep-frozen).
- `scripts/render-stage-d-agents-fixture.mjs` — the esbuild render ceremony; writes both committed artifacts; `--check` byte-verifies.
- `ui/generated/pond-stage-d-agents-fixture.js` + `ui/generated/pond-stage-d-agents-fixture-provenance.json` — committed generated artifacts (no timestamp; CI runs the selftest, not the render).
- `scripts/pond-agents-view-fixture-selftest.mjs` — parity selftest (recompute vs committed artifact) plus binding-classification, record-invariant, artifact-hygiene, and provenance blocks.
- `ui/pond-agents-view.js` — vanilla-DOM, textContent-only renderer with the same fail-closed mechanics as the cockpit renderer.
- `ui/pond-desktop.html` / `ui/pond-desktop.css` — the static Agents view panel and its styles in the cockpit vocabulary.

## Source contracts

- **D-P0 presence projection** (`src/fixtures/stage-d-p0-agent-presence.ts`): the canonical identity-bound observed-agent presence fixture — Agent0 (`personal_agent`, `fixture_observed_not_live`, Telegram, seven secret-free `runtime_status` fact labels with brain/execution transcribed from the desk's source-contract defaults), the two inert relationship slots, and the unauthenticated fixture local principal binding.
- **Trading-desk source contract** (`pond-agent-presence-source-contract-d-p0`): `repository: "trading-desk"`, committed `boundSourceCommit`, `observedTools: ["runtime_status", "identity_status"]`, read-only posture. Configuration supplied the desk's claim; in Pond's projection it remains evidence only, and this cut performs no onchain read of its own — the vocabulary is bound, not the observation.

## Admission posture

All eight receiver-owned live-presence admission checks stay unsatisfied in canonical order in the rendered record: `exact_source_contract_identity`, `exact_secret_free_runtime_fact_inventory`, `receiver_owned_presence_observation_channel`, `runtime_facts_separated_from_personal_memory_channels`, `identity_claim_evidence_independently_reproduced`, `local_principal_binding_established_before_private_reads`, `observed_identity_kept_separate_from_principal_id`, `live_presence_observation_observed`. Producer self-attestation satisfies none of them; the D-P1 source binding is a fixture-level structural classification and is explicitly capped by its refused tuple.

## Behavior record

- The renderer fills `[data-agents-value]` nodes by dotted-path resolution against the record, renders the agent cards' fact lists from the record's own arrays, and presents the admission checks strictly from the record's arrays (unsatisfied first) — each check's state carried by the record, never inferred.
- Fail-closed: a record-version mismatch (`data-agents-record-version`), any missing node, any non-primitive resolution, or any invalid array sets every presented value to `"unavailable"` and marks the panel `data-render-posture="fail_closed"`. Fallback or partial rendering is forbidden.

## Authority ceiling

The Agents view proves no authentication, no membership, no admission, and no authority. The local principal binding is presented as `fixture_local_projection` with `authenticationPerformed: false` and `ceremonyPosture: "not_defined_this_cut"`; observed agent identity, transport, wallet address, and onchain evidence never become a PrincipalId; the desk's journal, memory, narrative, and transcript lanes are structurally excluded (all four boundary flags `false` in the record, and no forbidden key exists anywhere in the frozen record — the selftest walks it).

## Explicit non-goals

- No connection to the running trading-desk process, no transport, no MCP/A2A wiring.
- No live `runtime_status` or `identity_status` invocation, no onchain ERC-8004 read, no wallet connection.
- No authentication ceremony, no PrincipalId issuance, no agent admission decision, no capability grant, no e-stop surface.
- No desk personal-memory content admission, no persistence, no runtime activation, no interactive agent actions.

## Validation evidence

- `npm run typecheck` — clean (strict, `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`).
- `npm run test:stage-d-p1` — the `POND_STAGE_DP1_AGENTS_VIEW_FIXTURE_SELFTEST_PASS` parity and invariants selftest.
- `npm run test:stage-d-p0` and the stage-c-p5…p10 and stage-b2-p4b-p21/p22 suites — unchanged and passing.
- `npm run stage-d:render-agents -- --check` — committed artifacts byte-verified against a fresh render.

## Activation

- **INCLUDED:** the source-binding contract, the Stage D Agents record, the render ceremony, the committed generated artifacts and provenance stamp, the Agents view renderer, the static panel, the selftest, the npm scripts, and the additive CI steps in both verify jobs.
- **NOT_INCLUDED:** live observation of the running desk, any transport, any authentication or principal-binding ceremony, onchain ERC-8004 re-verification, interactive agent actions, runtime activation of any authority.