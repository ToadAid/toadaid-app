# Stage C-P0 — Read-only truth source-responsibility foundation

## Binding

Parent commit: `58c7af3e648d8ad79257d98c4e0aede3980b54a5`

Feature branch: `feat/stage-c-p0-source-responsibility-foundation`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Close the completed B4 fixture stage and begin Stage C by recording which
canonical logical runtime component is responsible for each truth concern in
the first read-only project/Bridge/Coder slice. This foundation prevents Pond
from becoming a competing source of governance, repository, target, or receipt
truth.

It deliberately stops before choosing a concrete runtime source, storage owner,
API, protocol, or trusted channel. Those bindings require later bounded work
before any live truth integration.

## Explicit non-goals

- no Mirror Core, Mirror Desktop Bridge, Coder, MCP, or host connection;
- no concrete source identifier, endpoint, request, response, schema, transport,
  authentication, or trusted-channel claim;
- no storage owner or universal receipt database selection;
- no live repository, workspace, branch, HEAD, path, governance, gate,
  freshness, denial, refusal, receipt, or evidence observation;
- no source precedence, reconciliation, caching, polling, persistence, routing,
  or fallback behavior;
- no identity, membership, admission, Release, capability, Grant, approval,
  authority, mutation, execution, deployment, or activation.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-c-p0-source-responsibility-foundation.md`
- `src/contracts/pond-read-only-truth-source-responsibility.ts`
- `src/fixtures/stage-c-p0-source-responsibility.ts`

Runtime scope: TypeScript contract and deterministic fixture compilation only.

Tool scope: canonical and local repository inspection, local file mutation,
locked dependency installation, TypeScript validation, existing JavaScript
self-tests, locked Rust check, Git, and GitHub pull-request workflow.

Network scope: canonical architecture verification, package installation, and
GitHub repository workflow operations only. No Pond runtime network capability
is added.

## Canonical basis and responsibility allocation

Canonical architecture separates semantic ownership, runtime responsibility,
process placement, and storage ownership. The Governed Runtime Component
Allocation assigns these logical responsibilities:

- Mirror Core evaluates current consequence eligibility from authoritative
  structured state;
- Mirror Desktop Bridge resolves workspace identity and repository targets at
  the local governed edge;
- ToadAid Coder performs repository analysis and produces source-specific
  evidence;
- Mirror Desktop Bridge captures and forwards receipts and evidence at the
  local consequence edge.

The same canonical blueprint selects no universal evidence database and defers
exact storage ownership, APIs, protocols, and Bridge/Core or specialist adapter
formats. The fixture therefore binds only the four logical responsibilities.
Pond remains the consumer and presenter.

## Contract and fixture

`PondReadOnlyTruthSourceResponsibilityBinding` distinguishes:

- the concern being allocated;
- canonical architecture as semantic owner;
- the responsible logical runtime component;
- Pond's consumer/presenter-only role;
- unbound concrete source identity;
- unselected storage ownership and API/protocol;
- unestablished trusted channel;
- unperformed freshness observation;
- excluded runtime integration;
- authority `none`.

The deterministic four-entry matrix binds governance eligibility to Mirror
Core, workspace/repository target resolution and receipt capture/forwarding to
Mirror Desktop Bridge, and repository analysis/source evidence to ToadAid
Coder. Compile-time assertions preserve the exact mapping and all exclusion
postures.

## Trusted sources, channels, and precedence

Canonical architecture at the bound commit is the trusted semantic source for
this allocation. C-P0 identifies logical responsibilities only. No concrete
runtime source or trusted channel exists in this cut, so runtime source
precedence and reconciliation remain unestablished.

A later integration cut must bind exact source identity, target identity,
freshness semantics, channel trust, and failure behavior without treating a
projection, cached result, provider claim, or historical receipt as canonical
current state.

## Authority ceiling and forbidden capabilities

Authority: `none`.

The contract carries no source reference, endpoint, transport, connection,
request, response, current state, freshness observation, decision, allow/deny,
approval, execution, mutation, authorization, credential, secret, token, or
session field.

This cut cannot connect, fetch, evaluate, decide, approve, mutate, execute, or
activate anything.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact changed-path and whitespace review.

This cut provides typed/structural allocation proof only. It does not prove any
source exists, is reachable, is authoritative, is current, or can be integrated
safely.

## Activation

Canonical logical source-responsibility fixture: **INCLUDED**.

Concrete source binding, storage selection, API/protocol, trusted channel,
freshness observation, runtime integration, or activation: **NOT_INCLUDED**.
