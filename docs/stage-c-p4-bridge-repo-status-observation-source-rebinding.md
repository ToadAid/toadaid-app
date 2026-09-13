# Stage C-P4 — Bridge repository-status observation source rebinding

## Binding

Parent commit: `39f089b7d72aba2857db69a82cd4e6faa2f4aef8`

Feature branch: `feat/stage-c-p4-bridge-observation-source-rebinding`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

Mirror Desktop Bridge source commit:
`dfc9b59084e36324b1d97c0e8f9f1f72441970d7` on `main`.

## Goal

Rebind Pond's repository-status source projection to the exact merged Bridge
Stage 1I-R1 contract that now preserves source-owned observation time.

The cut admits only the new sanitized `observation_metadata` container and its
exact source semantics. It does not translate an observation timestamp into a
freshness or currentness claim.

## Explicit non-goals

- no freshness duration, stale threshold, future-clock tolerance, clock source,
  age calculation, currentness decision, target comparison, or conflict winner;
- no live Bridge result, result ingestion, endpoint, connection, IPC, MCP,
  STDIO, HTTP, listener, transport, polling, cache, persistence, or retry;
- no direct Git or filesystem read and no alternate-source fallback;
- no bounded status lines, command receipt preview, raw paths, file contents,
  evidence body, receipt body, credential, secret, token, or session;
- no identity, membership, admission, Release, capability, Grant, approval,
  authority, mutation, execution, deployment, or activation;
- no UI change.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-c-p4-bridge-repo-status-observation-source-rebinding.md`
- `src/contracts/pond-bridge-repo-status-observation-source-binding.ts`
- `src/fixtures/stage-c-p4-bridge-repo-status-observation-source-binding.ts`

Runtime scope: TypeScript contract and deterministic fixture compilation only.

Tool scope: current canonical, Pond, and Bridge repository inspection; local
Pond mutation; locked dependency installation; TypeScript validation; existing
JavaScript self-tests; locked Rust check; Git; and GitHub pull-request workflow.

Network scope: source verification, package installation, and GitHub repository
workflow only. No Pond runtime network capability is added.

## Canonical and owner-contract basis

Canonical Derived Evidence law requires current-state claims to bind source,
revision, and a freshness basis. Trusted Channel law separately requires a
structural path whose authority and precedence are verified. An observation
timestamp alone satisfies neither currentness nor trusted delivery.

Bridge Stage 1I-R1 now records `observed_at_epoch_ms` after its configured
bounded Git reads complete. Its snapshot labels that evidence basis
`source_observation_time_only` and explicitly states
`not_established_consumer_must_evaluate`. Blocked, failed, or invalid-clock
paths provide no observation metadata.

C-P4 binds that owner contract by exact merged commit, module, result type,
snapshot type, stage, mode, and integration identifier. It preserves the
source's currentness ceiling rather than manufacturing Pond-local freshness.

## Projection boundary

The C-P2 result-field allowlist is reused unchanged. The C-P2 snapshot-field
allowlist is extended by exactly one container: `observation_metadata`.

Inside that container, Pond recognizes only:

- `observed_at_epoch_ms` in Unix epoch milliseconds;
- `freshness_basis: source_observation_time_only`;
- `currentness_posture: not_established_consumer_must_evaluate`.

`bounded_status_lines` and `command_receipt_preview` remain withheld. The
historical C-P2 binding remains explicit as the superseded source contract.

## Failure, currentness, and precedence

Observation time permits a later consumer-owned age comparison. This cut does
not define or perform that comparison. Current repository truth remains blocked
until Pond separately binds:

- a deterministic freshness policy and evaluation time;
- the expected repository, branch, and HEAD comparison;
- a trusted channel and verified precedence posture;
- stale, invalid, conflicting, and degraded outcomes.

Missing metadata, invalid timestamps, future observations, stale observations,
and target conflicts are therefore not classified by this cut. None may be
optimistically treated as current.

## Authority ceiling and forbidden capabilities

Authority: `none`.

The contract exposes no endpoint, transport, connector, fetch, polling, cache,
persistence, approval, Grant, execution, mutation, authorization, credential,
secret, token, or session field. Source implementation and source observation
do not imply source activation, currentness, or authority.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact changed-path and whitespace review.

This cut proves an exact source-contract rebinding and a narrow observation
metadata projection at the typed fixture layer only. It provides no live source,
transport, freshness evaluation, target comparison, or runtime presentation
proof.

## Activation

Exact Bridge Stage 1I-R1 source rebinding and sanitized observation-metadata
allowlist: **INCLUDED**.

Bridge enablement, Pond transport, live intake, freshness/currentness
evaluation, snapshot presentation, mutation, execution, deployment, or runtime
activation: **NOT_INCLUDED**.
