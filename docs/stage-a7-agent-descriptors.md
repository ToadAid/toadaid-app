# Stage A7 — Versioned Agent Descriptors

**Status:** fixture-only projection slice

**Activation:** `NOT_INCLUDED`

## 1. Purpose

Stage A7 adds versioned, non-authoritative Pond descriptor projections for the profiles required before a future `RouteCandidateProposal`.

```text
descriptor != admission
descriptor != Grant
descriptor != current authority
visibility != admission
reachability != authority
declared capability != granted capability
```

## 2. Canonical architecture exact ref reviewed

Canonical `ToadAid/toadaid-architecture` `main`:

```text
commit bc7a971dfb243f0aa4417da6cef85cc56204f783
tree   648029785b4dbe4b58d914ea19cbae7296ec6d24
```

The Agent Identity and Specialist Admission Contract governs profile, admission, remote-external, and service/tool distinctions. The Community Agent Fabric and Social Control Plane preserve scope isolation and non-collapse.

## 3. Descriptor boundary

A7 is fixture presentation vocabulary only. It creates no AgentId, service identity, directory, registry, admission decision, Grant, route, transport, endpoint, credential, provider binding, or current-authority evaluator.

Every descriptor carries:

```text
authority: none
admissionDecisionPosture: not_performed
currentAuthorityPosture: not_evaluated_descriptor_cannot_authorize
```

## 4. Six descriptor profiles

The primary matrix contains exactly:

```text
personal_agent
community_agent
project_agent
specialist_agent
remote_external_agent
service_tool
```

The first five are agent profiles. `service_tool` is deliberately a different subject class, uses `PondServiceToolRef`, has no `agentRef`, and has no agent-admission context.

## 5. A4 owns source, version, digest, freshness, evidence, and refusal

Every descriptor composes the existing A4 `PondProjectionEnvelope`.

```text
versioningPosture =
  a4_subject_revision_digest_is_descriptor_version
```

A4 remains the owner of source, source scope, trust, revision, digest, freshness, applicability, evidence references, redaction, conflict handling, and `insufficient_evidence`. Fixture digests are identity values, not runtime integrity proof.

## 6. Visibility is not admission

The remote-external fixture is intentionally:

```text
visibility         = fixture_visible
reachability       = fixture_advertised
admission          = not_established
descriptor authority = none
```

Discovery/presentation does not create admission and does not widen A4 audience or establish Release.

## 7. Declared capability is not granted capability

Every declared capability carries:

```text
declarationPosture = declared_not_granted
```

The personal descriptor declares a proposal capability while its admission context remains `not_established`. Capability inventory is design/advertisement, not a Grant or authority.

## 8. Admission context and revocation

Agent descriptors may carry an A5 `PondAgentAdmissionProjection` only as context:

```text
admissionContextPosture =
  a5_projection_context_only_not_admission_decision
```

The revoked-specialist fixture is:

```text
descriptor projection = fresh
reachability           = fixture_advertised
admission               = revoked
declared capability     = present
descriptor authority    = none
```

Fresh visibility/reachability/capability cannot reverse revocation.

## 9. Reachability is not authority

Reachability carries:

```text
posture         = fixture_declaration_not_transport_proof
endpointPosture = not_included
authority       = none
```

A7 establishes no live transport, A2A/MCP/HTTP endpoint, delivery right, invocation right, or availability proof.

## 10. Scope relationships do not create membership, admission, or Release

Descriptor scope relationships are declared relationships only:

```text
declared_relationship_not_membership_admission_or_release
```

A7 does not create membership, admission, Release, personal-memory access, or authority. A6 scope isolation remains unchanged.

## 11. Explicit denials

A7 fixtures include bounded denials for execution, approval, Grant authority, member-personal-memory inheritance, repository mutation, local direct authority, and autonomous-agent status where applicable. These are projection constraints, not a policy engine.

## 12. Remote external profile

Remote external remains:

```text
NO LOCAL DIRECT AUTHORITY
```

It may be visible and may advertise a candidate capability while local admission remains not established. Evidence references remain `reference_only_not_verified`.

## 13. Service/tool is not an autonomous agent

The service/tool fixture preserves:

```text
agent != service/tool != provider != principal
```

A service/tool may expose a declared capability without acquiring AgentId, autonomous initiative, agent admission, or authority.

## 14. Stale and conflicting descriptors fail closed

The stale specialist descriptor keeps active A5 admission context but its A4 descriptor projection is stale:

```text
descriptor freshness = stale
admission projection = active
canonicalOutcome      = insufficient_evidence
authority             = none
```

The conflicting project descriptor carries:

```text
observation = conflicting
reconciliationPosture =
  canonical_source_required_no_winner_selected
canonicalOutcome = insufficient_evidence
```

Pond chooses no optimistic descriptor winner.

## 15. Current authority is deliberately not evaluated

A fresh descriptor with visible profile, active admission context, declared capability, advertised reachability, and evidence still carries:

```text
currentAuthorityPosture =
  not_evaluated_descriptor_cannot_authorize
authority = none
```

Future authority must come from proper canonical governance at consequence time.

## 16. A6 isolation and provenance remain unchanged

A7 does not wire descriptors into front-agent state, cache, index, directory, search, persistence, routing, or hosts. It does not merge scopes. Any future scope-bearing descriptor store/index/cache must independently re-prove A6 isolation.

## 17. Explicit non-goals and Activation

A7 implements no authentication, identity creation, canonical identity format, membership/admission/Grant store or evaluator, Release, directory, cache/index/search, persistence, transport, reachability probe, A2A, MCP/Bridge integration, provider inference, credential/secret handling, `RouteCandidateProposal`, routing, delivery, invocation, approval, execution, wallet/signing/trading, publication, UI, network, or deployment.

**Activation:** `NOT_INCLUDED`
