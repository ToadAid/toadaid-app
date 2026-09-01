# Stage 0B-P1 — Pond Front Agent Scope Envelope

**Status:** fixture-only contract slice

**Activation:** `NOT_INCLUDED`

## Goal

Establish the smallest host-neutral contract that lets the future ToadAid Pond front-facing agent carry three things without acquiring authority:

1. an opaque principal reference;
2. an opaque current scope reference and scope kind;
3. an inert projection of specialist plugins visible in that scope.

This cut does not implement routing, plugin loading, MCP calls, Bridge calls, persistence, authentication, approval recording, or execution.

## Architectural basis

Canonical ecosystem law remains in `ToadAid/toadaid-architecture`, especially:

- `maps/social-control-plane.md`;
- `blueprints/community-agent-fabric.md`;
- `contracts/scope-sovereignty-contract.md`;
- `contracts/agent-identity-and-specialist-admission-contract.md`;
- `contracts/delegated-authority-and-capability-grant-contract.md`;
- `contracts/capability-authority-boundary.md`.

The types in this repository are projections for Pond. They do not become a second owner of principal, scope, membership, admission, grant, revocation, or authority semantics.

## Front-facing agent boundary

The Pond front agent is modeled as:

```text
human intent
    ↓
Pond front agent
  - coordinate
  - explain
  - propose
  - show current scope projection
  - show inert specialist inventory
    ↓
NO LIVE EFFECT IN THIS CUT
```

The front agent is not a specialist and is not an execution authority.

## Scope context envelope

`PondScopeContextProjection` carries only:

```text
principalRef
scopeRef
scopeKind
source = fixture
authority = none
```

The identifiers are opaque references. Pond does not infer identity, membership, admission, or authority from their string values.

A scope kind is limited to the canonical four-type projection:

```text
personal
shared
project
public
```

## Inert specialist boundary

A specialist projection may advertise read or proposal capabilities for fixture rendering, but every plugin carries this fixed authority posture:

```text
posture = disabled
mayApprove = false
mayExecute = false
mayMutate = false
reason = stage0b_fixture_only
```

A plugin appearing in Pond does not prove that the corresponding real specialist is installed, admitted, reachable, authenticated, authorized, or executable.

## Stage 0B-P1 gates

All live-effect gates are typed as literal `false`:

```text
liveTools = false
network = false
persistence = false
approvalRecording = false
execution = false
```

The contract intentionally contains no `execute` field on either the Pond front-agent state or a plugin projection. Compile-time invariant aliases fail type checking if those specific boundary assumptions drift.

## Fixture

`src/fixtures/stage0b-p1-front-agent.ts` provides one project-scope fixture and one inert Coder-style specialist projection.

The fixture is demonstration state only. It does not claim any live Coder admission, repository access, Bridge connection, or authority.

## Verification target

The only executable verification intended by this cut is TypeScript contract checking:

```bash
npm install
npm run typecheck
```

There are no runtime dependencies and no application start command.

## Non-goals

This cut adds no:

- social-control-plane runtime;
- membership store;
- grant store;
- revocation engine;
- routing engine;
- MCP server or client;
- Mirror Bridge connection;
- specialist invocation;
- authentication;
- persistence;
- approval ceremony;
- repository mutation;
- wallet or signing material;
- network access;
- deployment.

## Core invariant

> **Pond may know what context and specialists to present without acquiring the authority to act through them.**
