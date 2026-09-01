# Stage A6 — Multi-Principal and Scope-Isolation Proof

**Status:** fixture/type proof slice (no runtime proof)

**Activation:** `NOT_INCLUDED`

## 1. Purpose

Stage A6 proves, with deterministic inert TypeScript fixtures and compile-time non-collapse assertions, that:

```text
personal scope A
  != personal scope B
  != shared scope Y
  != project scope X
  != public scope Z
```

and, critically, that two principals participating in the same shared or project scope does NOT make that shared/project state a union of their personal-scope state.

A6 establishes a reprovable isolation law for later implementations. It is not a claim that isolation has been proven forever: every future cache, index, event stream, host adapter, persistence layer, retrieval layer, synchronization layer, or other state-bearing surface that could cross scopes must independently preserve and re-prove the same law.

A6 is fixture-only. No real personal memory, real user data, runtime storage, Release operation, or authority is used or created.

## 2. Canonical architecture exact ref reviewed

Canonical `ToadAid/toadaid-architecture` `main` was freshly reviewed for this cut at commit `bc7a971dfb243f0aa4417da6cef85cc56204f783`, tree `648029785b4dbe4b58d914ea19cbae7296ec6d24`. The governing canonical owners read were:

- `contracts/scope-sovereignty-contract.md` — principal, scope types, membership, audience, scope-owned data, cross-scope release, "Administration is not private omniscience";
- `contracts/agent-identity-and-specialist-admission-contract.md` — admission, membership, capability, and authority distinctions;
- `contracts/capability-authority-boundary.md` — capability != authority;
- `blueprints/community-agent-fabric.md` — "Personal Scope A and Personal Scope B do not merge merely because their humans join Project Scope X or Shared Scope Y. A shared or project scope has its own governed state; it is not a union of member personal scopes";
- `blueprints/governed-runtime-component-allocation.md` — "Community membership != personal-memory access";
- `maps/social-control-plane.md` — the explicit non-result `Project Scope X = Personal Scope A + Personal Scope B`.

The canonical architecture fully supports this cut; no conflict was found. Pond proves and presents isolation semantics here; defining this fixture proof does not make Pond the canonical scope-state store.

## 3. Proof boundary

A6 is a deterministic fixture/type proof under the current typecheck-only Stage A foundation. It uses readonly fixture structures, `as const`, `satisfies`, and narrow compile-time `Equal`/`Assert` laws with literal-preserving fixture identities, so the record-set assertions are real type distinctions rather than five values collapsed into one generic branded type.

The proof case says:

> "Given this inert fixture topology, this exact scope view contains only its scope-owned fixture records."

It does NOT say:

> "the viewer is runtime-authorized to read this scope."

A6 performs no read-authorization evaluation. `membershipContext` is A5 projection context only; it is not authentication, a canonical membership store, admission, Release, capability, or authority.

```text
proof fixture != authority
membership context projection != membership store
```

## 4. Exact two-principal/five-scope topology

Exactly two fixture principals and exactly five fixture scopes:

```text
Principal A
  └─ Personal Scope A
       └─ A-owned fixture record

Principal B
  └─ Personal Scope B
       └─ B-owned fixture record

Shared Scope Y
  ├─ A active membership projection
  ├─ B active membership projection
  └─ Shared-Y-owned fixture record

Project Scope X
  ├─ A active membership projection
  ├─ B active membership projection
  └─ Project-X-owned fixture record

Public Scope Z
  └─ Public-Z-owned fixture record
```

Each record is identity-only (`contentPosture: identity_only_no_content_body`, `authority: none`). No record body, fake secrets, fake credentials, wallet data, email, phone number, conversation text, personal profile details, or memory text exists anywhere in the fixture.

Membership projections exist only for Shared Y and Project X, reused from A5 (`PondScopeMembershipProjection`, each composing a fresh A4 fixture envelope, `authority: none`). No personal-scope membership projections are created and no public membership is inferred.

The core non-result this topology proves:

```text
Project Scope X view for A
  = { project X record }

Project Scope X view for B
  = { project X record }

NOT:
  { project X record + A personal + B personal }
```

and equivalently:

```text
Shared Scope Y view for A
  = { shared Y record }

Shared Scope Y view for B
  = { shared Y record }

NOT:
  { shared Y record + A personal + B personal }
```

## 5. Personal-scope isolation

Principal A's personal view includes exactly the personal-A record and excludes the personal-B, shared-Y, project-X, and public-Z records. Principal B's personal view includes exactly the personal-B record and excludes the other four. Both personal views carry no membership context. The two personal included-record sets are provably different types (`PondStageA6Invariant_PersonalAAndBIncludeDifferentSets`), and no shared or project participation changes that: Principal A's viewer identity is the same literal branded type in the personal-A and shared-Y views, yet the included sets differ (`PondStageA6Invariant_SameViewerDifferentViewDifferentSet`, `PondStageA6Invariant_SameViewerSetChangesWithScope`).

## 6. Shared-scope isolation

Both principals hold active A5 membership projections in Shared Scope Y. Yet both shared-Y views include exactly the shared-Y-owned record and exclude both personal records. Shared state is its own governed state, not "all memories of all members."

## 7. Project-scope isolation

Both principals hold active A5 membership projections in Project Scope X. Yet both project-X views include exactly the project-X-owned record and exclude both personal records. Project-owned state arises within the project scope; no member personal data was imported, and a project/community agent could not silently import member personal data under this law.

## 8. Public-scope isolation

Public Scope Z views for both principals include exactly the deliberately public-scope-owned record and exclude both personal records and the shared/project records. Public does not mean everything: visibility in a provider, model, conversation, or room does not make data public, and this fixture implements no publication or Release. It proves only exact public-scope ownership in the fixture.

## 9. Membership does not union personal state

A and B see the same scope-owned fixture set in Project X and the same set in Shared Y (`PondStageA6Invariant_SharedAAndBIncludeSameSet`, `PondStageA6Invariant_ProjectAAndBIncludeSameSet`). Their personal records remain different and absent from those views. Every included set is a single-element set of the viewing scope's own record, so no included set contains an ambient union of multiple scope owners.

```text
same human across scopes != merged scope state
same members in shared/project scope != union of member personal state
membership != visibility into personal memory
```

## 10. No Release was performed

Every view carries `crossScopeReleaseApplied: false` (proven for all eight views at once by `PondStageA6Invariant_CorpusViewsReleaseFalse`). No Release operation, release evaluator, or release record exists in A6. Rendering, copying, indexing, retrieval, or presentation never constitutes a Release, and source-scope provenance survives: each record keeps its `ownerScopeRef`/`ownerScopeKind` identity wherever it is referenced.

## 11. Source/provenance preservation law

Copying, summarizing, embedding, indexing, routing, retrieving, or displaying information never changes its source scope or audience. Every A6 fixture record permanently carries its owning scope identity, and provenance posture is `fixture_scope_owned`. Any later layer that moves scoped state must preserve source-scope provenance through rendering and copying.

## 12. Authority remains none

Every record, view, and membership relationship projection carries `authority: none` (`PondStageA6Invariant_CorpusRecordsAuthorityNone`, `PondStageA6Invariant_CorpusViewsAuthorityNone`, `PondStageA6Invariant_MembershipProjectionsAuthorityNone`). Proof is not authority; no administrative omniscience is implied; membership is not admission, capability, or authority; memory is not permission.

## 13. Why this is not a production privacy proof

A6 proves the deterministic fixture/type law only. It does not prove, and must not be cited as proving:

- database row-level security;
- cache key safety;
- search-index isolation;
- event-stream isolation;
- retrieval isolation;
- vector-database isolation;
- filesystem isolation;
- browser isolation;
- process isolation;
- network isolation;
- multi-tenant cloud isolation;
- authorization correctness;
- production privacy.

Those layers do not exist in Pond yet. A6 is the invariant seed.

## 14. Cross-cutting re-proof law for future layers

> A scope-bearing layer does not inherit A6's proof merely because it reuses A6 types. Every later cache, index, event, host, persistence, retrieval, or synchronization layer must independently prove that its keys, queries, projections, and invalidation behavior preserve scope isolation.

This is the permanent cross-cutting law recorded in the fixture itself (`reproofRequiredForLaterScopeBearingLayers: true`).

## 15. Existing A4/A5/provider foundations remain unchanged

`pond-front-agent.ts`, `pond-projection-envelope.ts`, `pond-relationship-projections.ts`, `pond-cognition-provider.ts`, and all existing fixture files are untouched. A6 reuses `PondPrincipalRef`, `PondScopeRef`, `PondScopeKind`, and `PondScopeMembershipProjection` without redefining them, and composes the A4 envelope for every membership projection. The only new Pond-local identity is the opaque `PondIsolationRecordRef`, which is the identity of an inert fixture record only — not a memory ID, database key standard, canonical content ID, Release record, receipt, or evidence identity.

## 16. Explicit non-goals

A6 implements no authentication, real `PrincipalId` creation, account/provider login, membership store or evaluator, admission store, Grant store, Release operation or evaluator, personal/project/shared/community memory, public publication, database, vector database, cache, index, event store or stream, persistence, filesystem storage, browser state, synchronization, retrieval engine, search, authorization evaluator, Mirror Core/Bridge/MCP/provider/Ollama integration, network, agent descriptors, `RouteCandidateProposal`, routing, delivery, A2A, Telegram/WhatsApp, approval, execution, wallet/signing/trading, UI, deployment, or activation. No dependencies were added and no test runner was introduced; future runtime/state-bearing layers must add their own executable isolation tests when they are introduced.

## 17. Activation: NOT_INCLUDED

No runtime behavior, storage, isolation enforcement, effect, integration, or deployment is activated by Stage A6.