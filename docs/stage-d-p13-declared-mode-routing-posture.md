# Stage D-P13 — declared-mode advisory routing posture

## Binding

- Parent: toadaid-app main `5deb343` (D-P12 merged).
- Branch: `feat/stage-d-p13-declared-mode-routing`.
- Canonical ecosystem law: ToadAid/toadaid-architecture at `bc7a971dfb243f0aa4417da6cef85cc56204f783` — re-verified locally this cut. **Law silence recorded:** no law in the architecture repo establishes routing-by-declared-mode, and none establishes a role/mode selection taxonomy at all (agent-identity L179 defers the role/administrator taxonomy entirely). The per-profile advisory routing table below is a **receiver-recorded app-side decision** exercising existing refusal law, not new authority — recorded here rather than in a law amendment.
- Desk source contract: unchanged — bound by committed SHA `57b5c8b966d3eb58cf239b2f3f1598f09f24b296` only; D-P13 carries no desk SHA.

## Law anchors

- `social-control-plane.md` **L199 "Routing is not authorization. A correctly routed request may still be refused."** — this cut's anchor. L181-201 the routing model demands routing preserve the source principal, source scope, destination scope, agent identity, and applicable policy boundaries — the routing table carries none of them; each stays with its own frozen contract.
- `governed-agent-forge.md` L299 "A model or specialist may recommend its own activation. It cannot authorize it." — the governed workflow console's lifecycle is `EXTERNAL_REQUIRED_NOT_ESTABLISHED` with `executable: false` (frozen D-P12 commitment) for **every** receiver profile, so p5e is `advisory_excluded` on every table row. L150 refusal-of-inference — the five D-P12 refused bases stay refused and only refine, never route.
- `agent-identity-and-specialist-admission-contract.md` L108 (the capability inventory "is not a grant"), L110-114 "Declared capability is not granted capability", L153 the stricter specialist lanes, L179 (deferred taxonomy — the law-silence anchor).
- `governed-ecosystem-architecture.md` L321-327 esp. L325 "Each specialist receives only the effective capabilities required for its role." — the advisory rows posture toward role-scoped relevance without granting any capability; L291-293 authority.monotonicity — routing widens nothing.
- `trusted-channel-separation-contract.md` L87-100 with L100 "The request is not itself the grant" — the routing table is not a trusted channel and never rewrites a protected class.
- `evidence-activation-contract.md` **L109 independent inspection** — the consumer re-runs the D-P12 composition itself (which re-runs all three of its legs, including the frozen D-P1 desk binding) on every arm; no trust in any prior assessment.
- `GOVERNANCE.md` L190-204 governance-review triggers — this cut trips none (it activates nothing, authorizes nothing, adds no trusted channel, loads no content; recorded below).

## Goal

Make the D-P12 declared-mode vocabulary do exactly one thing, one cut, zero ui changes: consume it. A receiver-owned **routing consumer** re-runs the D-P12 composition (forge surface binding + declared operational mode + the frozen D-P1 desk source binding), independently **joins the declared agent ref to the D-P0-observed agent**, and consults a frozen **receiver-recorded per-profile routing table** over the four knowledge-forge surfaces — producing an **advisory per-surface routing posture** (`advisory_relevant | advisory_excluded`) and nothing else. Routing is not authorization: no content loaded, no capability, no grant, no admission, no authority, no lifecycle mutation, on any outcome.

## Proof model

- **The composition leg re-runs everything (evidence-activation L109).** The routing consumer forwards its seven unknown-typed inputs verbatim to `assessPondKnowledgeForgeBoundDeclaredModeComposition`, whose own three legs re-run on every arm. The consumer's mapped sub-states (`mappedCompositionState/Reason/UnsatisfiedChecks`, `mappedDeclaredModeReason/UnsatisfiedChecks`, `mappedForgeBindingReason`, `mappedDeskSourceBindingReason`) are the D-P12 assessment's own fields, pinned verbatim by `Equal` invariants — mapped sub-states are never new vocabulary and never new authority.
- **The join leg is this cut's own contribution.** The declared agent ref must name an agent record in the desk presence projection (`PondObservedAgentPresenceRecord.agentRef` / `.presenceStatus`, projection `.observedAgents`) whose presence status is one of two **receiver-recorded presence-establishing statuses** — `fixture_observed_not_live` (the desk's own structural record posture, not a live read) or `live_observed`. The remaining D-P0 statuses (`not_observed`, `unavailable`, `unknown`) map `agent_record_presence_not_established`. **Recorded from probing:** the frozen D-P1 leg does **not** pin the presence-status vocabulary — a projection with a status outside the D-P0 vocabulary stays `fixture_source_binding_structurally_admissible` at the composition — so the D-P13 join's `agent_record_status_unrecognized` is the sole vocabulary guard, and it lands as `declared_agent_not_observed`. A frozen arm exercises exactly this.
- **Mode-leg refinements reuse the D-P12 literals verbatim.** When the composition refuses `declared_mode_not_established`, the D-P13 reason is the composition's mapped mode reason itself — `declared_profile_out_of_vocabulary`, `declaration_basis_inference_refused`, or `declaration_not_fresh_within_declared_maximum_age` — verbatim, never a wrapper. No defensive ladder literal exists: `declaration_record_invalid` always returns early as the composition's own second reason, so on `declared_mode_not_established` the mapped reason is exhausted by exactly the three refinement literals (totality argued at the code level and probed in the selftest over constructed stale/inferred/OOV/posture-flip arms — none collapses to `composition_not_complete`).
- **Cause order.** A composition refusal outranks everything: both the mode refinement and the join. `composition_not_complete` → refinement → `declared_agent_not_observed` → `declared_mode_routing_established`.
- **Echoes are honesty, never unrecordings.** A profile stays readable (`declaredProfile`, `refusedDeclarationBasis`, `advisoryPostureBySurfaceId`) through a broken forge or desk leg and even through a refused declaration — an echo is a raw-record fact, never a permission. Only an out-of-vocabulary or unreadable profile renders `not_recorded` with a null posture. The join likewise maps `agent_record_observed` honestly on the desk-broken arm: a posture flip does not unobserve the agent.
- **D-P2 freshness, verbatim.** `declarationFreshnessDiagnosis` is carried from the re-run mode leg (D-P2 machinery unchanged); the inclusive fresh boundary (`age ≤ maximumAge`, `observationAgeMs === maximumAge` at the boundary), staleness at +1, unknown on invalid inputs with `observationAgeMs: null`, and a future declaration time (`observation_time_in_future`) are all reachable through the full routing composition and asserted.

### The routing table (receiver-recorded; law silence)

| Surface | TRADING | HELPER | BUILDER |
|---|---|---|---|
| p5b desktop projection | excluded | relevant | relevant |
| p5c skill library browser | relevant | excluded | relevant |
| p5d evidence inspector | relevant | relevant | excluded |
| p5e governed workflow console | **excluded** | **excluded** | **excluded** |

- p5e never routes, for any profile (forge L299 + the frozen `EXTERNAL_REQUIRED_NOT_ESTABLISHED` / `executable: false` lifecycle).
- The three non-lifecycle rows are pairwise distinct — each profile excludes exactly one different surface — so a profile is distinguishable from its echo.
- Substantive reading, recorded as an app-side decision: TRADING excludes the desk-mirror projection (its own mirror is not consulted knowledge for the agent holding it) and routes skill-library + evidence-inspector; HELPER excludes the skill library and routes the desk mirror + evidence inspector; BUILDER excludes the evidence inspector and routes the desk mirror + skill library. **No law backs the specific assignment and no authority consequence follows from it** — social-control-plane L199: a correctly routed surface may still refuse everything.
- The table carries no authority literal: the D-P12 commitment table's per-surface `KNOWLEDGE_ONLY / NONE / NOT_INCLUDED` postures stay theirs alone, untouched (re-proved every run).

## Honesty mechanism

The honest positive state is this cut's own vocabulary: `declared_mode_routing_established` with an advisory posture echo per surface. The frozen-seam discipline holds: no D-P13 assessment carries any frozen tuple name (`privateReadsActivated`, `mappingEstablishmentState`, `onchainVerificationState`, `mappingEstablishesGrant`, `erc8004IdentityAcceptedAsPrincipalId`, `onchainIdentityAcceptedAsAuthentication`) — proven by `hasOwnProperty` over every matrix arm and every fresh fail-closed run. The frozen D-P5/D-P6/D-P8/D-P9-readiness/D-P11 pins are recomputed and deep-equal; all three D-P12 matrices recompute deep-equal through their own assessors; the D-P9 readiness composition still hardcodes `receiverVerification: "not_performed"` — a routing posture widens readiness nothing. The uppercase forge posture literals and the p5e lifecycle set stay untouched. Stage D's heading stays `— BLOCKED`: collaborative and multi-principal reads keep the explicitly named deferred lane.

## Scope

1. `src/contracts/pond-declared-mode-routing.ts` — the routing consumer: the frozen receiver-recorded table, the 2-literal advisory posture vocabulary, the 6-state join vocabulary, 4 checks, the 6-literal reason ladder (no defensive literal — refinement totality argued and probed), the all-false ceiling family, and the compile-time invariants (including `Equal` ties of every mapped field to the D-P12 vocabularies). *(The implementation plan named this file with a `d-p13` suffix; it lands without the suffix to match the house contract-file-naming convention — the cut identity stays in `contractVersion: "pond-declared-mode-routing-d-p13"` and every literal.)*
2. `src/fixtures/stage-d-p13-declared-mode-routing.ts` — zero-value-import fixture: 8 arms (TRADING/HELPER/BUILDER complete, stale declaration, `inferred_from_purpose` refusal, forge leg broken, the declared agent not observed via the community slot, desk leg broken), desk-side structural copies deep-equal to the actual D-P0 exports, the forge re-inline deep-equal to the D-P12 fixture's record.
3. `scripts/pond-declared-mode-routing-selftest.mjs` — the selftest: 8 blocks (matrix recompute; identity ties; routing fail-closed; declared-mode folding; frozen-widening proof; routing-table tie; freshness tie; hygiene). No env-gated live block — this cut performs no network read (mirrors D-P12's recorded posture).
4. `package.json` — `test:stage-d-p13`.
5. `.github/workflows/ci.yml` — one additive step in each verify job (diff verified purely additive; run line appears exactly twice).
6. `docs/stage-d-p13-declared-mode-routing-posture.md` — this document.
7. `BUILD_LIST.md` — the `D-P13 — COMPLETE` bullet.

No ui/, no `ui/generated/`, no render ceremony changes: all three render `--check` gates stay untouched. No frozen file touched.

## Authority ceiling

The routing posture establishes exactly nothing outside its own vocabulary: on every arm the consumer carries `routingEstablishesCapability / routingEstablishesGrant / routingEstablishesAdmission / routingEstablishesAuthority: false`, `skillContentAdmitted: false`, `knowledgeContentLoadedIntoAgentContext: false`, `forgeLifecycleMutationAvailable: false`, `credentialAdmitted: false`, `currentTruthAdmitted: false`, `runtimeActivationPosture: "not_included"`, `authority: "none"` — pinned by tuple `Equal` on the assessment type and walked on every matrix arm and fresh run. An advisory row is relevance vocabulary about which forge surfaces matter to which receiver-recorded operational profile; it loads no content, admits nothing, opens nothing, and authorizes nothing. The D-P12 ceilings (binding and declaration) sit beneath it untouched.

## Explicit non-goals

Skill content loaded into any agent context; knowledge content admitted; any forge lifecycle operation invoked (p5e never routes, any profile); capability/grant/admission/authority from routing; runtime activation; inference-based mode selection (the five refused bases stay refused and only refine); lane admission on any profile including TRADING; routing-as-authorization or any trusted channel; mode-consumer ui surfacing; frozen-contract widening (zero changes to any D-P0…D-P12 file); grant machinery; current-truth claims; CI network access; law-repo amendment; ADR — the governance-review triggers (GOVERNANCE L190-204) trip none because the cut activates nothing, widens nothing, loads nothing, and adds no trusted channel; that absence is recorded here rather than in a new ADR. Collaborative/multi-principal reads stay the Stage D heading blocker.

## Validation evidence

- `npm run typecheck` clean (all compile-time invariants green).
- `npm run test:stage-d-p13` → `POND_STAGE_DP13_DECLARED_MODE_ROUTING_SELFTEST_PASS` offline (matrix recompute over all 8 arms deep-equal and deep-frozen; identity ties — agent refs and epochs tied to the actual D-P0/D-P12 exports, row keys tied to the frozen D-P12 surface-id vocabulary, the forge re-inline deep-equal to the D-P12 fixture's record, desk copies deep-equal to the D-P0 exports, every uppercase commitment posture intact; routing fail-closed — forge+mode both broken, desk-broken-plus-stale cause order, foreign held ref, all four join sub-states probed beyond the matrix, the sole-guard note proven (D-P1 admits a vocabulary-external status; the join refuses it), a posture-key removal landing malformed, the ceiling family all-false everywhere; declared-mode folding — stale/inferred/oov/posture-flip/refused-basis arms all refining verbatim, no collapse to `composition_not_complete`; frozen-widening proof — D-P5/D-P6/D-P8/the D-P9 seam (held verification still refuses)/D-P9 readiness hardcode/all three D-P12 matrices recomputed deep-equal, no frozen name on any assessment, uppercase postures and the p5e lifecycle untouched; routing-table tie — hand-written literal table deep-equal, routed profiles = the D-P12 vocabulary, p5e excluded everywhere, rows pairwise distinct, posture vocabulary length 2, the presence decision covering exactly the D-P0 vocabulary as pinned in the frozen D-P0 contract text; freshness tie — inclusive boundary fresh / +1 stale through the full routing composition, future time unknown with `observationAgeMs: null`, carried diagnosis tied to the mode leg on every arm; hygiene — type-only fixture imports, banned needles, no ui file carrying any D-P13 vocabulary, network constants banned under src/, the 16-key forbidden inventory intact).
- Full sweep green: `test:stage-c-p5`…`p10`, `test:stage-d-p0`…`p13`, `test:p5b`…`p5e-knowledge-forge`, `test:stage-b2-p4b-p21`/`p22`, `typecheck`, and the three render `--check` gates all pass.
- `git diff --check` clean; the CI diff is purely additive with the run line appearing exactly twice.

## Activation

- INCLUDED: the D-P13 contract, the fixture matrix, the selftest, the npm script, the CI steps, this document, the BUILD_LIST bullet.
- NOT_INCLUDED: skill-content admission into any agent context, knowledge-content loading, forge lifecycle mutation (p5e never routes), lane admission on any declared profile, collaborative/multi-principal reads (the Stage D heading blocker that remains), runtime/MCP/provider activation, grant machinery, inference-based mode selection, ui surfacing of the routing posture, the law-repo amendment recording this cut — each stays refused until its own planned cut.