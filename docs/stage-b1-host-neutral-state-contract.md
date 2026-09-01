# Stage B1 — Host-Neutral Snapshot / Event / CommandIntent Contract

**Status:** fixture-only host-neutral static-state foundation

**Activation:** `NOT_INCLUDED`

## 1. Purpose

Stage B1 enters Stage B by adding the shared host-neutral state vocabulary that later static Pond surfaces may render:

```text
Snapshot
Event
CommandIntent
```

These are presentation contracts only.

They do not create a runtime state machine, canonical event log, command bus, transport, routing layer, delivery path, approval system, or executor.

The governing distinction is:

```text
Snapshot != canonical ecosystem truth
Event != runtime event stream
CommandIntent != command dispatch
presentation != release
agent identity != authority
```

## 2. Exact canonical architecture ref

Stage B1 is reviewed against canonical `ToadAid/toadaid-architecture`:

```text
commit bc7a971dfb243f0aa4417da6cef85cc56204f783
tree   648029785b4dbe4b58d914ea19cbae7296ec6d24
```

Applicable owners include:

- Scope Sovereignty Contract;
- Agent Identity and Specialist Admission Contract;
- Social Control Plane map;
- existing Pond A4–A8 projection foundations.

Stage B1 does not become a canonical owner for principal identity, scope identity, audience, release, agent admission, grants, routing, delivery, or authority.

## 3. Stage B entry sequence

Stage B is intentionally split:

```text
B1  host-neutral Snapshot / Event / CommandIntent contract
B2  static accessible fixture UI
B3  inventory / denial / evidence / refusal / receipt presentation
B4  cross-host conformance fixture
```

B1 provides the typed state boundary only.

No UI framework or host adapter is added in this cut.

## 4. Snapshot semantics

A `PondSnapshot` carries one exact fixture active context:

```text
principal
scope
scope kind
agent identity or null
```

It also carries:

- one A4 projection envelope;
- host-neutral presentation posture;
- static gates;
- authority `none`.

The active context is a reference-only presentation projection.

It is not membership, admission, release, Grant, approval, or current authority.

## 5. Singular active scope

A B1 snapshot contains exactly one active scope reference.

It does not carry an ambient union of personal/shared/project/public state.

Stage A6 scope isolation remains cross-cutting.

Any future cache, index, event store, browser state, persistence layer, or host adapter must independently prove scope isolation.

## 6. Active agent identity

A B1 snapshot may display one exact `AgentRef` or `null`.

Canonical agent law remains:

```text
PrincipalId != AgentId
ScopeId != AgentId
agent identity != authority
admission != authority
```

Displaying an agent identity does not establish admission, capability, current authority, or execution permission.

## 7. Presentation preserves source scope

Canonical scope law states that copying, summarizing, embedding, indexing, retrieving, forwarding, or presenting data does not erase its source scope or turn a non-release into a release.

B1 therefore carries:

```text
hostBinding = none_host_neutral
sourceScopePosture = preserved_from_projection
audienceChangePosture = not_performed
crossScopeReleasePosture = not_performed
authority = none
```

A host later rendering the same snapshot does not become a source-scope owner.

## 8. Event semantics

`PondEvent` is a deterministic fixture presentation record.

B1 defines exactly three fixture event classes:

```text
fixture_snapshot_presented
fixture_scope_context_presented
fixture_agent_identity_presented
```

Each event preserves:

- source snapshot;
- scope reference;
- agent reference where applicable;
- A4 projection;
- presentation posture;
- authority `none`.

The event posture is explicitly:

```text
fixture_presentation_event_not_runtime_event
```

No persistence, append-only log, replay, subscription, polling, stream, queue, or transport exists.

## 9. CommandIntent semantics

A `PondCommandIntent` represents only a bounded UI intent candidate.

B1 defines exactly:

```text
navigate
select_scope
select_agent
```

A CommandIntent carries:

- exact source snapshot;
- exact principal reference;
- exact source scope;
- typed target;
- inert postures.

Every intent states:

```text
ui_intent_only_not_command_dispatch

dispatchPosture = not_performed
deliveryPosture = not_performed
approvalRecordingPosture = not_performed
executionPosture = not_performed
authority = none
```

No command handler exists.

## 10. CommandIntent does not mutate Snapshot

The fixture matrix does not apply intents to the snapshot.

A later UI may create local presentation-state transitions, but that future cut must distinguish:

```text
UI context change
!= scope membership change
!= release
!= admission
!= Grant
!= execution
```

B1 performs no transition.

## 11. Host neutrality

The B1 contract does not bind itself to ChatGPT, loopback, or desktop.

It says:

```text
hostBinding = none_host_neutral
```

Host-specific adapters remain later work.

This prevents a ChatGPT-specific, browser-specific, or desktop-specific assumption from becoming canonical Pond state semantics.

## 12. Static gates

The B1 snapshot mechanically fixes all of these gates to `false`:

```text
liveTools
network
persistence
delivery
approvalRecording
execution
```

This is fixture/static proof only.

It is not a permanent claim that future Pond versions can never have governed integrations.

## 13. A4 reuse

B1 reuses A4 projection envelopes for source, revision/digest, freshness, applicability, evidence-reference posture, redaction posture, and authority `none`.

B1 does not create a competing freshness or evidence system.

The fixture uses fresh A4 envelopes only.

Stale/conflicting/refusal presentation is deferred to B3, where it can be handled deliberately rather than mixed into B1.

## 14. A7 / A8 boundaries remain intact

B1 does not convert an A7 descriptor into authority.

B1 does not select or dispatch an A8 route candidate.

A8 remains:

```text
RouteCandidateProposal != selected route
RouteCandidateProposal != delivery
RouteCandidateProposal != Release
RouteCandidateProposal != Grant
RouteCandidateProposal != execution
```

B1 adds no route field or route lifecycle.

## 15. Deterministic fixture bundle

The fixture bundle contains exactly:

```text
1 Snapshot
3 Events
3 CommandIntents
```

The snapshot displays:

```text
Principal A
Project X
Specialist Agent A
```

The three events present snapshot/scope/agent identity.

The three intents cover navigate/select-scope/select-agent.

Every object carries authority `none`.

## 16. Why the visual UI is not in B1

The Stage B roadmap also requires a static accessible fixture UI.

That is **B2 NEXT**.

Separating B1 from B2 gives the UI a stable typed boundary to consume and makes it possible to review whether presentation semantics drift from the contract.

## 17. Explicit non-goals

Stage B1 adds no:

- UI framework;
- HTML application;
- React or another component runtime;
- ChatGPT Apps SDK integration;
- loopback host;
- desktop host;
- runtime state reducer;
- event stream;
- command bus;
- command handler;
- route selection;
- dispatch;
- delivery;
- A2A;
- MCP/Bridge;
- live tools;
- network;
- persistence;
- cache/index/search;
- authentication;
- membership mutation;
- admission mutation;
- cross-scope release;
- Grant creation or evaluation;
- approval recording;
- capability invocation;
- repository mutation;
- execution;
- wallet/signing/trading;
- publication;
- provider inference;
- credentials/secrets;
- deployment.

**Activation:** `NOT_INCLUDED`
