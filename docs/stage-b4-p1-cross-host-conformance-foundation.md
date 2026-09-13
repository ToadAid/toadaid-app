# Stage B4-P1 — Cross-host conformance fixture foundation

## Binding

Parent commit: `bf96b442d68501c3478cdb8d11f8d338933798ee`

Feature branch: `feat/stage-b4-p1-cross-host-conformance-foundation`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Begin B4 with one deterministic type/fixture proof that the ChatGPT App,
loopback web, and Tauri desktop directions reuse the exact B1 host-neutral
snapshot, event tuple, and command-intent tuple without host-specific semantic
overrides.

This cut closes the completed B3 presentation stage. It introduces direction
labels for conformance proof only; it does not implement or activate a host
adapter.

## Explicit non-goals

- no ChatGPT Apps SDK, MCP App, connector, widget, authentication, provider
  session, or ChatGPT runtime binding;
- no loopback server, listener, HTTP endpoint, browser adapter, transport, or
  network access;
- no Tauri command, IPC, desktop adapter, native capability, notification, or
  host integration;
- no host discovery, selection, routing, fallback, synchronization, persistence,
  or runtime conformance claim;
- no new principal, scope, agent, membership, admission, Release, capability,
  Grant, approval, authority, delivery, mutation, or execution semantics;
- no UI change, deployment, publication, or activation.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-b4-p1-cross-host-conformance-foundation.md`
- `src/contracts/pond-cross-host-conformance.ts`
- `src/fixtures/stage-b4-p1-cross-host-conformance.ts`

Runtime scope: TypeScript contract and deterministic fixture compilation only.

Tool scope: repository inspection, local file mutation, locked dependency
installation, TypeScript validation, existing JavaScript self-tests, locked
Rust check, Git, and GitHub pull-request workflow.

Network scope: package installation and GitHub repository workflow operations
only. No Pond runtime network capability is added.

## Canonical and local dependencies

Canonical provider neutrality prevents ChatGPT or another provider from owning
ToadAid identity, scope, policy, or authority. Trusted Channel Separation law
requires runtime proof of channel authority and precedence before trusted host
framing may be claimed. Governed Runtime Component Allocation keeps host
placement separate from governance ownership.

B1 owns the local host-neutral `Snapshot`, `Event`, and `CommandIntent`
contracts and the exact static fixture reused here. A6 scope-isolation law
remains cross-cutting. B4 adds no competing identity, scope, authority, or
failure vocabulary.

## Contract and fixture

`PondHostDirection` contains exactly three direction labels:

- `chatgpt_app`;
- `loopback_web`;
- `tauri_desktop`.

`PondCrossHostConformanceFixture` carries a host direction plus the B1 snapshot,
events, and command intents. Its postures state that the label is not a runtime
host binding, the exact B1 fixture is reused without override, runtime adapters
are not included, and authority is `none`.

The deterministic three-entry matrix reuses the same imported B1 values for all
directions. Type assertions bind every matrix entry to the exact inferred B1
snapshot and tuples rather than separately authored copies. Existing B1 type
invariants continue to prove singular scope, preserved source scope, no release,
all gates false, no dispatch, no execution, and authority `none`.

## Trusted sources, channels, and precedence

Canonical architecture at the bound commit governs host/provider neutrality,
trusted channels, scope, and authority. B1 owns the local fixture semantics.
B4-P1 owns only the three direction labels and equality proof.

This cut creates no host channel. It therefore makes no claim that a ChatGPT,
loopback, or desktop surface can authoritatively carry trusted identity,
capability, policy, evidence, or authority state. Channel precedence remains
unevaluated because no adapter exists.

## Authority ceiling and forbidden capabilities

Authority: `none`.

The contract forbids adapter, connection, endpoint, transport, listener,
serving, network, authentication, principal binding, membership, admission,
Release, Grant, approval, invocation, routing, delivery, mutation, execution,
authorization, credential, secret, token, and session fields.

The cut cannot connect, authenticate, serve, route, deliver, invoke, approve,
grant, mutate, execute, deploy, or activate anything.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact changed-path and whitespace review.

This cut provides typed/structural fixture proof only. It provides no host
adapter wiring proof, live host proof, trusted-channel authority proof,
cross-process proof, or cross-platform proof.

## Activation

Three-direction host-neutral conformance fixture: **INCLUDED**.

Host adapters, SDKs, listeners, transport, network, authentication, or runtime
activation: **NOT_INCLUDED**.
