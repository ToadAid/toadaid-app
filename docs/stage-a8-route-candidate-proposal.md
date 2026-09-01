# Stage A8 — Deterministic RouteCandidateProposal

**Status:** fixture-only inert route-candidate slice

**Activation:** `NOT_INCLUDED`

## 1. Purpose

Stage A8 adds a deterministic Pond `RouteCandidateProposal` projection for review before any future routing or delivery implementation exists.

The central law is:

```text
route candidate != selected route
route candidate != delivery eligibility
route candidate != delivery decision
route candidate != Grant
route candidate != approval
route candidate != consequence authorization
route candidate != execution
```

A candidate is only a structurally complete fixture proposal carrying enough governed context to be reviewed or refused.

## 2. Canonical architecture exact ref reviewed

Canonical `ToadAid/toadaid-architecture` `main` is reviewed at:

```text
commit bc7a971dfb243f0aa4417da6cef85cc56204f783
tree   648029785b4dbe4b58d914ea19cbae7296ec6d24
```

Relevant canonical owners remain:

- Agent-to-Agent Messaging and Delivery Contract;
- Social Control Plane map;
- Scope Sovereignty Contract;
- Agent Identity and Specialist Admission Contract;
- Failure Outcome Taxonomy;
- existing A4/A5/A6/A7 Pond foundations.

A8 does not become the canonical owner for messaging, delivery, routing policy, identity, audience, release, admission, grants, or authority.

## 3. Routing is not authorization

Canonical architecture states that routing is not authorization.

A correctly formed route candidate may still be refused because current membership, admission, release, target binding, approval, Grant applicability, freshness, revocation, or another governing condition is absent or stale.

A8 therefore carries:

```text
routeSelectionPosture = candidate_not_selected
deliveryEligibilityPosture = not_evaluated
deliveryDecisionPosture = not_performed
consequenceAuthorizationPosture = not_evaluated
authority = none
```

## 4. Source preservation

Every A8 proposal preserves one explicit source:

```text
source principal
source scope
optional source agent reference
```

The source agent reference may be `null`; A8 does not invent a principal-agent binding.

The source posture is:

```text
fixture_source_identity_reference_only
```

Source identity does not manufacture membership, admission, Release, capability, Grant, or authority.

## 5. Destination and audience preservation

Every proposal preserves an exact destination scope plus one fixture audience reference.

A8 fixture audience forms are limited to:

```text
exact_agent
scope
```

These are Pond fixture destination references only. They do not redefine canonical audience semantics and do not constitute a delivery decision.

A visible target or destination does not imply recipient eligibility.

## 6. Target preservation and A7 reuse

A8 reuses A7 descriptor types.

A target is exactly one of:

```text
agent
service_tool
```

The target carries the A7 descriptor projection as context with:

```text
a7_descriptor_context_only_not_admission_grant_or_authority
```

The descriptor remains non-authoritative.

A service/tool remains a service/tool and does not become an autonomous agent merely because it is a route target.

## 7. Cross-scope Release context

A8 does not perform Release.

Its release context is either:

```text
same_scope
  -> releaseProjection = null

cross_scope
  -> A5 cross-scope-release projection context only
```

For cross-scope fixtures:

```text
releaseOperation = not_performed
```

An A5 state of `established` is only fixture relationship projection context. It does not itself deliver data.

A known `not_established` cross-scope release causes the corresponding A8 route candidate to fail closed.

## 8. A4 provenance chain

A8 reuses A4 instead of inventing a competing provenance/freshness system.

Each route candidate carries:

- an A4 projection for the route-candidate record itself;
- the A4 source projection;
- the target descriptor's A4 projection.

The provenance posture is:

```text
a4_projection_chain_fixture_only_not_trusted_route_authority
```

A fresh route-candidate projection does not make a stale or conflicting target descriptor current.

## 9. Candidate state is not delivery eligibility

The A8 `candidate` assessment means only:

> this deterministic fixture record is structurally complete enough to remain a route candidate for later governed review.

It explicitly does **not** mean:

- selected route;
- live target;
- delivery eligible;
- policy approved;
- Release performed;
- capability granted;
- consequence authorized.

A candidate has no refusal outcome and no refusal evidence.

## 10. Refused state and canonical outcomes

A8 uses a bounded local refusal-evidence condition vocabulary while mapping its result to existing canonical Failure Outcome Taxonomy names.

The only A8 canonical refusal outcomes are:

```text
insufficient_evidence
refused
revoked
```

A8 does not redefine those meanings.

Every refused fixture carries at least one exact projection evidence item.

Failure remains bounded and non-escalating; it does not authorize retry, fallback, alternate transport, wider scope, or execution.

## 11. Deterministic fixture matrix

The matrix contains exactly seven route-candidate proposals:

```text
1. specialist candidate
2. service/tool candidate
3. cross-scope Release not established -> refused
4. stale specialist descriptor -> insufficient_evidence
5. conflicting project descriptor -> insufficient_evidence
6. revoked specialist admission -> revoked
7. remote external admission not established -> refused
```

Exactly two remain `candidate`.

Exactly five are `refused`.

Every one carries:

```text
authority = none
routeSelectionPosture = candidate_not_selected
deliveryDecisionPosture = not_performed
consequenceAuthorizationPosture = not_evaluated
```

## 12. Specialist candidate

The specialist candidate preserves:

```text
source principal A
source Personal A scope
destination Project X scope
exact specialist agent audience
exact specialist target
A5 established Release projection context
A7 specialist descriptor provenance
```

Even then:

```text
deliveryEligibilityPosture = not_evaluated
authority = none
```

This is a proposal for later review only.

## 13. Service/tool candidate

The service/tool fixture proves that a service/tool can be a proposed target without becoming an agent.

It retains:

```text
target kind = service_tool
descriptor subject kind = service_tool
agent admission context = null
destination audience = scope
authority = none
```

No invocation occurs.

## 14. Stale and conflicting targets fail closed

A7 already proves descriptor freshness/refusal semantics.

A8 consumes those descriptors without rewriting them.

The stale-descriptor route candidate carries:

```text
canonicalRefusalOutcome = insufficient_evidence
condition = target_descriptor_not_current
```

The conflicting-descriptor route candidate carries:

```text
canonicalRefusalOutcome = insufficient_evidence
condition = target_descriptor_conflicting
```

No optimistic descriptor winner is selected.

## 15. Revocation and remote-external refusal

A fresh descriptor does not reverse revoked admission.

The revoked-specialist fixture therefore maps to:

```text
canonicalRefusalOutcome = revoked
condition = target_admission_revoked
```

The remote-external fixture remains visible/advertised at A7 but has admission `not_established` and explicit no-local-direct-authority posture.

A8 therefore maps it to:

```text
canonicalRefusalOutcome = refused
condition = target_admission_not_established
```

Changing transport would not change that result.

## 16. A6 isolation remains cross-cutting

A8 carries exactly one source scope and one destination scope per proposal.

It does not merge source and destination state.

It does not copy personal memory into project/shared/public state.

The A6 law remains:

> A scope-bearing layer does not inherit A6's proof merely because it reuses A6 types. Every later cache, index, event, host, persistence, retrieval, or synchronization layer must independently prove that its keys, queries, projections, and invalidation behavior preserve scope isolation.

Any future route store, queue, index, cache, transport, or delivery implementation must independently re-prove isolation.

## 17. Delivery and consequence remain separate lifecycles

Canonical messaging law separates delivery from consequence authority.

A8 is earlier than both.

```text
RouteCandidateProposal
  -> future route review / eligibility
  -> future delivery decision
  -> future delivery

separately:

delivered request
  -> reasoning
  -> capability proposal
  -> governance
  -> current-state verification
  -> separate authorization
  -> consequence
```

A8 implements none of the arrows.

## 18. Explicit non-goals

A8 adds no:

- runtime router;
- route selection engine;
- recipient resolver;
- delivery eligibility evaluator;
- delivery decision;
- message send;
- dispatch;
- queue;
- replay mechanism;
- transport;
- A2A;
- MCP/Bridge integration;
- networking;
- endpoint;
- persistence;
- cache/index/search;
- Release operation;
- membership/admission mutation;
- Grant creation or evaluation;
- human-decision recording;
- approval;
- capability invocation;
- repository mutation;
- execution;
- wallet/signing/trading;
- publication;
- provider inference;
- credentials/secrets;
- UI;
- deployment.

**Activation:** `NOT_INCLUDED`
