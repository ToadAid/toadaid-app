# Stage C-P3 — Bridge repository-status intake refusal

## Binding

Parent commit: `9cd94712aa2ed761d18ddd06de688bab2efdcd0c`

Feature branch: `feat/stage-c-p3-repo-status-intake-refusal`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

Mirror Desktop Bridge source commit inherited through C-P2:
`ea86681f2db2113c40911c2d585b19f41be1a124` on `main`.

## Goal

Define deterministic fail-closed Pond intake behavior for every state in the
bound Bridge `LiveRepoStatusIntegrationResult`: `blocked`, `client_error`, and
`ready`.

Because the C-P2 source contract has no observation timestamp or freshness
field, no state may admit a current repository snapshot. Every case presents a
degraded posture, withholds the snapshot, and forbids fallback to direct Git,
filesystem, or an alternate source.

## Explicit non-goals

- no Bridge result payload, repository snapshot, status line, path, file,
  command receipt preview, evidence body, or receipt body;
- no Bridge connection, result ingestion, transport, MCP tool, local listener,
  Git invocation, filesystem read, polling, caching, or persistence;
- no invented observation time, freshness interval, currentness inference,
  source precedence, conflict winner, or reconciliation;
- no automatic retry or fallback around a blocked or failed source;
- no identity, membership, admission, Release, capability, Grant, approval,
  authority, mutation, execution, deployment, or activation;
- no UI change.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-c-p3-bridge-repo-status-intake-refusal.md`
- `src/contracts/pond-bridge-repo-status-intake-refusal.ts`
- `src/fixtures/stage-c-p3-bridge-repo-status-intake-refusal.ts`

Runtime scope: TypeScript contract and deterministic fixture compilation only.

Tool scope: canonical and local repository inspection, local file mutation,
locked dependency installation, TypeScript validation, existing JavaScript
self-tests, locked Rust check, Git, and GitHub pull-request workflow.

Network scope: package installation and GitHub repository workflow operations
only. No Pond runtime network capability is added.

## Canonical and local dependencies

Canonical Failure Outcome Taxonomy distinguishes `blocked` from
`insufficient_evidence`. Verification Applicability law says proof valid then
does not imply proof applicable now and requires fail-closed behavior where
current applicability cannot be established.

C-P2 owns the exact Bridge source-contract binding and proves that the bound
result has no observation timestamp or freshness field. C-P3 reuses that exact
binding. It does not revise the owner schema or substitute a Pond-owned source.

## Intake matrix

The matrix contains exactly three cases:

- Bridge `blocked` maps to canonical `blocked`;
- Bridge `client_error` maps to `insufficient_evidence` because no usable
  observation exists;
- Bridge `ready` without source-owned freshness also maps to
  `insufficient_evidence`, and its nominal snapshot remains withheld.

All cases use `degraded` presentation, admit no current truth, expose no result
payload, and carry authority `none`.

This does not claim `client_error` and `ready` are semantically equivalent. It
only records that neither can support Pond's current-truth claim under the
present source contract.

## Trusted sources, failure, and precedence

Canonical architecture at the bound commit owns failure and verification
semantics. C-P2 owns the local exact source binding. C-P3 owns only the
fixture-level intake refusal mapping.

No trusted runtime channel is established. Missing or unusable source evidence
cannot be repaired by silently reading Git, reading the filesystem, selecting
another source, trusting a provider statement, or treating an old receipt as
current state.

## Authority ceiling and forbidden capabilities

Authority: `none`.

The contract contains no result payload, snapshot, observation time, freshness,
endpoint, transport, connector, fetch, read, approval, Grant, execution,
mutation, authorization, credential, secret, token, or session field.

Polling, persistence, approval, mutation, and execution remain explicitly not
performed. Direct Git, direct filesystem, and alternate-source fallback remain
forbidden.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact changed-path and whitespace review.

This cut proves deterministic type/fixture refusal behavior only. It provides
no live source, freshness, transport, current-state, or runtime-presentation
proof.

## Activation

Three-state fail-closed intake/refusal fixture: **INCLUDED**.

Bridge access, repository reads, freshness evaluation, snapshot presentation,
runtime UI, mutation, execution, deployment, or activation: **NOT_INCLUDED**.
