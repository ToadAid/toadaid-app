# Stage A5 — Fixture Relationship Projections

**Status:** fixture-only contract slice

**Activation:** `NOT_INCLUDED`

## 1. Purpose

Stage A5 adds standalone, non-authoritative Pond projections for five relationship classes and their narrow fixture lifecycle states. Pond may present what an A4-bounded fixture observation says; it does not create, store, evaluate, mutate, grant, revoke, or enforce the canonical relationship.

## 2. Canonical architecture exact ref reviewed

Canonical `ToadAid/toadaid-architecture` `main` was freshly reviewed at commit `bc7a971dfb243f0aa4417da6cef85cc56204f783`, tree `648029785b4dbe4b58d914ea19cbae7296ec6d24`. The scope-sovereignty, agent-identity/admission, delegated-authority/Grant, capability/authority, failure-outcome, derived-evidence, verification-applicability contracts and Social Control Plane map govern this projection cut.

## 3. Pond-local projection ownership boundary

Pond owns this fixture presentation vocabulary only. Canonical relationship identity, state, storage, evaluation, mutation, revocation, release, Grant applicability, and effective-authority decisions remain outside Pond and with their future deliberately assigned canonical owners.

Every A5 value composes the existing `PondProjectionEnvelope`. A5 introduces no parallel source, trust, observation, freshness, evidence, redaction, or canonical-outcome subsystem.

## 4. Relationship state != projection freshness != authority

Relationship lifecycle, A4 observation state, and current authority are independent axes:

```text
relationship state != projection observation/freshness != current authority
```

The fixture demonstrates:

```text
membership = revoked
projection = fresh
```

This is valid because a current fixture observation may freshly report revocation. Freshness never means permission.

```text
membership = active
projection = stale
canonicalOutcome = insufficient_evidence
```

This is valid historical presentation: the observation says membership was active, but its stale A4 envelope cannot support a current membership claim.

```text
grant = expired
projection = fresh
```

This is valid because Grant expiry is relationship lifecycle state, while freshness says how recently the fixture observed that lifecycle state. Grant expiry is not projection staleness.

Every A5 projection has `authority: none`.

## 5. Principal-agent binding projection

The principal-agent class binds a `PondPrincipalRef` and `PondAgentRef` and presents only `not_established`, `observed_fixture_binding`, `revoked`, or `unknown`. `observed_fixture_binding` is an inert fixture claim. It is not authentication, a live `PrincipalId` or `AgentId` binding, membership, admission, capability, a Grant, or authority.

## 6. Membership projection

Membership binds one principal reference to one scope reference and presents exactly `not_established`, `active`, `revoked`, or `unknown`. `active` is projected relationship state only; it establishes no admission, capability, Grant, release, repository permission, or authority. Membership has no `expired` lifecycle state in A5.

## 7. Admission projection

Admission binds one agent reference to one governing scope reference and presents exactly `not_established`, `active`, `revoked`, or `unknown`. Admission recognition and eligibility remain separate from membership, capability, a Grant, and effective authority.

## 8. Cross-scope release projection

The narrow A5 release class binds one source scope and one destination scope and presents `not_established`, `established`, or `unknown`. It deliberately omits exact-principal and public-audience forms and does not introduce a speculative release-revocation lifecycle.

## 9. Grant applicability/lifecycle projection

The Grant class uses a Pond-local opaque `PondGrantRef`, one scope reference, and a discriminated principal-or-agent grantee. It presents `not_established`, `applicable`, `not_applicable`, `expired`, `revoked`, or `unknown`. The reference does not define canonical `GrantId` format, and A5 introduces no capability or target taxonomy.

## 10. Revocation semantics

Fresh fixtures separately demonstrate revoked membership, admission, and Grant state. Revocation narrows future access or authority without rewriting legitimate history. A historical receipt, evidence reference, message, cached projection, or earlier action cannot restore a revoked relationship.

## 11. Grant expiry semantics

`expired` is projected Grant lifecycle state. It is not A4 `stale`, canonical `proof_expired`, or an emitted `authority_denied` outcome. A5 evaluates no consequential request. Historical evidence remains history and cannot restore an expired Grant.

## 12. Stale/unknown/conflicting projection handling

A4 remains the sole owner of `fresh`, `stale`, `missing`, `unknown`, and `conflicting` observation states. Stale, missing, unknown, and conflicting envelopes use the existing `insufficient_evidence` outcome for a consequential current-state claim.

The conflicting membership fixture presents relationship state `unknown`; its A4 envelope carries `canonical_source_required_no_winner_selected`. Pond chooses no optimistic winner and requires canonical reconciliation.

## 13. Historical evidence does not restore current relationship

Evidence references are reference-only and unverified under A4. Neither old evidence nor a historical active projection establishes current membership, admission, release, Grant applicability, or authority. Current claims require fresh canonical state from the proper owner; A5 performs no such read.

## 14. Provider/host/transport switching does not reverse revocation

Changing provider, model, harness, host, session, route, or transport cannot restore revoked membership, admission, or a Grant. Telegram, WhatsApp, web, desktop, mobile, MCP, A2A, and direct transport would remain presentation or transport surfaces, not relationship or authority roots.

## 15. Why `applicable` Grant != effective authority

The applicable Grant fixture explicitly carries `effectiveAuthorityEvaluation: not_performed`. Future effective-authority evaluation still requires the exact current actor and admission, scope, capability and target, constraints, policy, state, approval where required, revocation, expiry, one-use consumption, e-stop, and other canonical terms as applicable. A5 implements none of that evaluation.

## 16. Why `established` release projection != release operation

`established` says only that the fixture projection represents an explicit release record. Every release fixture carries `releaseOperation: not_performed`. Rendering the fixture does not release, publish, route, deliver, change source-scope provenance, widen the rendering audience, or authorize forwarding.

```text
projection of release != release operation
copying or displaying != release
```

## 17. Current front-agent relationship claims remain untouched/not established

Stage A5 is standalone and is not wired into `PondFrontAgentState`. The existing front-agent fixture truth remains unchanged: membership, agent admission, cross-scope release, and delegated authority are each `not_established`.

## 18. Explicit non-goals

A5 provides no canonical relationship store or evaluator; authentication or live identity binding; membership or admission mutation; agent registration; runtime revocation engine; current Grant evaluator; Release operation; current canonical read; runtime freshness clock; cache, index, network, persistence, routing, delivery, provider integration, inference, Bridge/MCP/A2A integration, approval, execution, wallet/signing/trading, publication, UI, or deployment.

## 19. Activation: NOT_INCLUDED

No runtime behavior, relationship authority, effect, integration, or deployment is activated by Stage A5.
