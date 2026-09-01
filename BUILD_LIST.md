# ToadAid Pond Build List

## Pond North Stars

1. **Humans remain sovereign.** Agents may possess initiative; they never possess sovereignty.
2. **Pond is the front door, not the authority.** It helps humans understand, coordinate, and propose; it cannot manufacture permission.
3. **Scopes remain sovereign and distinct.** `personal != shared != project != public`. Shared and project state own only explicitly admitted state; membership never exposes personal memory.
4. **Relationships do not collapse.** Identity, membership, admission, visibility, capability, grant, approval, routing, and execution remain distinct governed facts.
5. **Projection is not authority.** Pond shows sourced, scoped, versioned, freshness-bounded state. Stale, missing, unknown, or conflicting authority-relevant projections fail closed.
6. **Coordination and consequence remain separate.** Messages, routes, proposals, attestations, receipts, or approvals do not themselves authorize execution. Activation advances only through separately proven boundaries.
7. **One governed truth may support many conforming surfaces.** No host may invent identity, scope, policy, or authority semantics. Public code and open law never make private memory, credentials, trust state, or authority public.

> ToadAid Pond is the governed, scope-aware front door through which humans understand, coordinate, and propose across ToadAid agents without transferring sovereignty or manufacturing authority.

Permanent presentation law:

> Copying, summarizing, embedding, indexing, routing, or displaying information never changes its source scope or audience.

## Ecosystem placement

```text
ToadAid Architecture
  canonical ecosystem law

Mirror Core
  reusable governed substrate and shared foundations

ToadAid Pond
  host-neutral front door and bounded projections

Mirror Desktop Bridge
  bounded local trusted-channel and capability boundary where assigned

Living / community / project / specialist agents
  separately governed actors and domain implementations
```

Pond must reuse governed substrate and must not reimplement Mirror Core governance semantics. Deferred Social Control Plane implementation ownership must not be assigned to Mirror Core, Pond, Bridge, or another repository without current canonical architecture support.

## Current repository truth

```text
Repository: ToadAid/toadaid-app
Product: ToadAid Pond
GitHub visibility: Public
Activation: NOT_INCLUDED

Stage 0B-P1 front-agent projection: COMPLETE
Stage 0B-P2 scope-context invariants: COMPLETE
Stage 0B-P2 canonical merge: c02caab2d95fd9ae0741cbe29d4e53bec498f860
```

The current implementation is fixture/contract foundation only. It presents one active scope context with membership, admission, release, and delegated authority not established. Capability effects remain read/proposal only and execution remains disabled.

It does not provide live tools, routing or dispatch, plugin invocation or loading, Bridge/MCP connectivity, network access, persistence, authentication, approval recording, mutation, execution, wallet/signing/trading, or deployment.

Current agent direction:

- ToadAid Living Agent is the principal-bound personal-continuity direction.
- Community agents and project agents are separate future canonical profiles bound to explicit shared/project scopes.
- Coder, Zora Agent, Trader, lore/oracle, and future bounded domain agents are specialist directions.
- Remote external agents require separate identity and admission and have no local authority by default.
- A service or tool may expose capability without being an autonomous agent.
- Frog-to-Toad is not active and is not a Living Agent alias. It may return only if a distinct future lifecycle/transformation job is deliberately defined.

## Status vocabulary

- `COMPLETE`: merged and verified repository truth.
- `CURRENT`: the only active bounded cut.
- `NEXT`: approved ordering, not yet started.
- `FUTURE`: directional work, not approved for implementation or activation.
- `BLOCKED`: requires separate architecture, security, authority, or activation decisions.

## Stage A — Foundation projections

### A0 — Doctrine seed — COMPLETE

- initial Pond product and authority-boundary documentation;
- no runtime activation.

### A1 — Front-agent projection — COMPLETE

- opaque principal, scope, agent, and plugin references;
- inert specialist inventory;
- no live effects.

### A2 — Singular scope-context invariants — COMPLETE

- one active scope context, not a union of scopes;
- membership, admission, cross-scope release, and delegated authority not established;
- no execution surface.

### A3 — Public foundation, local builder law, reproducible lock, and minimal CI — COMPLETE

- truthful public product/current-state documentation;
- seven durable North Stars and minimal roadmap;
- architecture-preflight `AGENTS.md`;
- reproducible TypeScript 5.8.3 dependency lock;
- read-only GitHub CI for dependency installation, typechecking, and committed-range whitespace validation;
- `Activation: NOT_INCLUDED`.

### A4 — Common non-authoritative projection envelope — CURRENT

- source and trust class;
- source scope and audience/disclosure;
- contract version and canonical subject revision/digest;
- observation time, freshness/expiry, and applicability;
- evidence references, redaction posture, and canonical refusal outcomes;
- explicit stale, missing, unknown, and conflicting states;
- fixture-only; no relationship authority or live integration.

### A5 — Fixture relationship and revocation/stale/conflict projections — NEXT

- non-authoritative identity, membership, admission, release, grant-applicability, revocation, and expiry projections;
- reuse canonical outcome names;
- no canonical relationship store or evaluator in Pond.

### A6 — Multi-principal and scope-isolation proof — FUTURE

- deterministic personal/shared/project/public isolation fixtures;
- prove shared/project state is not a union of personal scopes;
- establish a cross-cutting test law for later caches, indexes, events, hosts, and persistence; this proof is not "once forever."

### A7 — Versioned agent descriptors — FUTURE

- distinguish personal, community, project, specialist, remote-external, and service/tool profiles;
- separate visibility, declared capability, admission, reachability, and current authority;
- include explicit denials, scope relationships, freshness, revocation, refusal, evidence, and version/digest posture;
- descriptor is not admission or a grant.

### A8 — Deterministic `RouteCandidateProposal` — FUTURE

- only after source/freshness/applicability/refusal, revocation/stale/conflict, isolation, and descriptor foundations;
- preserve source principal/scope, destination scope/audience, target, provenance, and refusal evidence;
- inert and non-authorizing;
- no delivery, dispatch, invocation, release, grant, approval, mutation, or execution.

Dependency law:

```text
projection source / freshness / applicability / refusal
  BEFORE relationship-sensitive UI or route eligibility

revocation / stale / conflict representation
  BEFORE RouteCandidateProposal

versioned descriptor
  BEFORE RouteCandidateProposal
```

Multi-principal isolation remains cross-cutting across every later stage.

## Stage B — Host-neutral static Pond — FUTURE

- shared `Snapshot` / `Event` / `CommandIntent` direction;
- static accessible fixture UI;
- active scope and agent identity;
- inventory, explicit denials, source/freshness/refusals, evidence, and receipts;
- cross-host conformance direction for ChatGPT, desktop, and loopback surfaces;
- no live tools.

## Stage C — First read-only truth slice — FUTURE

- deliberate canonical source-owner assignment before integration;
- one bounded read-only project/Bridge/Coder cockpit;
- exact repository and target identity;
- source, freshness, gates, denial/refusal posture, and sanitized receipts;
- stale, conflict, and degraded behavior before mutation;
- no mutation.

## Stage D — Identity-bound personal and collaborative reads — BLOCKED

- real authentication and local principal binding before private or multi-principal live state;
- authentication is not membership or authority;
- read-only Living Agent presence;
- read-only community/project agent relationships;
- no personal-memory leakage.

## Stage E — Inert proposals — BLOCKED

- exact proposal envelopes;
- cross-scope release proposals;
- no human-decision recording;
- no grant creation;
- no execution.

## Stage F — Decisions and consequences — BLOCKED

Any future consequence path must preserve separate ceremonies:

```text
informational / current-state projection
  -> inert draft
  -> exact proposal
  -> read-only review
  -> exact human-decision evidence
  -> separate grant / current-authority applicability
  -> fresh deterministic preflight + revocation / e-stop
  -> one bounded domain-specific execution
  -> result / uncertainty receipt + reconciliation
  -> separate acceptance where applicable
```

No stage may both record the human decision and execute the effect. Trading, signing, payment, publication, deployment, and destructive mutation remain domain-specific and separately authorized. Pond promises no generic executor.

Everything beyond the first read-only truth slice remains directional until preceding exit evidence exists.

## Permanent boundaries

Until later architecture and separately authorized evidence prove otherwise:

- no broad or ambient authority;
- no model-owned approval;
- no authority from memory;
- no authority from visibility or discovery;
- no authority from membership alone;
- no provider, browser, or session identity as canonical `PrincipalId` by itself;
- no private-memory union across scopes;
- no secrets, private keys, or signing material in Pond;
- no automatic trading;
- no automatic publishing;
- no implicit repository mutation;
- no silent fallback to shell, broader tools, providers, transports, or scopes;
- no stale or cached authority treated as current;
- no host-specific policy semantics;
- no public code implying public access to private state;
- no consequence activation without later explicit authorization;
- no duplicated Mirror Core governance semantics in Pond;
- no assignment of deferred Social Control Plane ownership without canonical architecture support.

Public source visibility is not production service activation and grants no access to private memory, credentials, trust state, or authority.
