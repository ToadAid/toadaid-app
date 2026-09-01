# Stage 0B-P2 — Pond Scope-Context Invariants

**Status:** contract/fixture foundation only

**Activation:** `NOT_INCLUDED`

## Goal

Stage 0B-P2 proves one narrow frontend invariant: a Pond scope selection establishes context only. It does not establish or imply membership, agent admission, cross-scope release, grant applicability or delegated authority, approval authority, mutation authority, or execution authority.

The fixture projects exactly one active project scope. A single active scope is a presentation context, not shared sovereignty or a union of personal, shared, and project data.

## Scope context is not authority

The scope-context projection contains explicit, non-authoritative relationship claims. Membership, agent admission, cross-scope release, and delegated authority are each `not_established`. Canonical records elsewhere would have to establish those relationships; Pond cannot derive them from scope selection.

If project membership is established elsewhere in a later cut, that membership must not expose personal memory. Scope boundaries and release rules remain independent of frontend context.

This cut introduces no routing, specialist invocation, plugin loading, Bridge or MCP connectivity, persistence, network access, approval recording, mutation, or execution. All Stage 0B effect gates remain literal `false`, and projected capabilities remain limited to read and proposal effects.

## Validation

```bash
tsc -p tsconfig.json --noEmit
git diff --check
```

## Non-goals

- defining canonical principal, scope, membership, admission, release, grant, delegation, revocation, or authority semantics;
- establishing membership, specialist admission, grant applicability, or cross-scope data release;
- adding multiple simultaneously active scopes or personal-memory projection;
- adding live routing, specialist calls, host behavior, authentication, persistence, approval, mutation, or execution.

Canonical architecture remains in `ToadAid/toadaid-architecture`; this repository contains only Pond frontend projections of that law.
