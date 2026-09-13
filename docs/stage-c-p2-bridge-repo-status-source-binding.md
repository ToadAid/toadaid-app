# Stage C-P2 — Bridge repository-status source binding

## Binding

Parent commit: `4223c4a9f84e6d0e0e2024c1117f435208fe74e1`

Feature branch: `feat/stage-c-p2-bridge-repo-status-source-binding`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

Mirror Desktop Bridge source commit:
`ea86681f2db2113c40911c2d585b19f41be1a124` on `main`.

## Goal

Bind Pond's first repository-status source projection to the existing merged
Mirror Desktop Bridge `LiveRepoStatusIntegrationResult` contract instead of
inventing a Pond-owned repository observer or governance path.

The cut records an exact source repository, commit, module, result type,
snapshot type, stage, mode, and integration identifier. It also defines the
minimum result and snapshot field allowlists Pond may later project.

The source contract does not carry an observation timestamp or freshness field.
C-P2 therefore makes that absence structural and blocks every claim that the
future projection is current until an owner contract supplies sufficient
freshness semantics.

## Explicit non-goals

- no source-code copy, Bridge package dependency, cross-repository import, API,
  IPC, MCP, STDIO, HTTP, listener, process, or transport integration;
- no Bridge runtime enablement or request construction;
- no live repository status read or result ingestion;
- no observation timestamp, freshness inference, cache lifetime, polling,
  precedence, conflict winner, or reconciliation policy;
- no bounded status-line or command-receipt-preview projection in the first
  allowlist;
- no raw workspace path, file contents, diff, command, credential, secret,
  process, or provider-session projection;
- no Grant, approval, authority, mutation, execution, persistence, deployment,
  or activation;
- no UI change.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-c-p2-bridge-repo-status-source-binding.md`
- `src/contracts/pond-bridge-repo-status-source-binding.ts`
- `src/fixtures/stage-c-p2-bridge-repo-status-source-binding.ts`

Runtime scope: TypeScript contract and deterministic fixture compilation only.

Tool scope: canonical, Pond, and adjacent source-owner repository inspection;
local Pond file mutation; locked dependency installation; TypeScript
validation; existing JavaScript self-tests; locked Rust check; Git; and GitHub
pull-request workflow.

Network scope: canonical and Bridge source verification, package installation,
and GitHub repository workflow operations only. No Pond runtime network
capability is added.

## Canonical and source-owner basis

Canonical Governed Runtime Component Allocation assigns workspace identity and
repository target resolution, bounded local consequence-edge behavior, refusal
propagation, and receipt/evidence capture to Mirror Desktop Bridge. Pond remains
a consumer and presenter.

Bridge `main` at the bound commit contains
`src/liveReadOnlyRepoStatusAdapterIntegration.ts`, whose source contract:

- identifies `stage_1i_live_readonly_repo_status_adapter_integration` and
  `integration.live-repo-status.adapter`;
- defines `LiveRepoStatusIntegrationResult` and
  `IntegratedRepoStatusAdapterSnapshot`;
- is implemented but disabled by default;
- is not exposed through MCP;
- preserves safe-to-display, approval-required, receipts-required, redaction,
  truncation, prompt-injection, and authority-blocking postures;
- exposes no observation timestamp or freshness property.

C-P2 references that owner contract by exact identity. It does not clone the
Bridge implementation or reinterpret Bridge governance.

## Pond projection allowlist

The initial result allowlist retains state, safe-display posture, the sanitized
snapshot, evidence/receipt references, redaction and truncation reports,
blocked reasons, and the source's authority-boundary statement.

The initial snapshot allowlist retains repository-root label, branch and short
HEAD, upstream label/availability, clean-or-dirty booleans, ahead/behind counts,
bounded summary, evidence reference, truncation report, and prompt-injection
boundary.

`bounded_status_lines` and `command_receipt_preview` are withheld. This keeps
the first projection narrow while their path/detail disclosure policy remains
unreviewed for Pond.

## Freshness, failure, and precedence

The bound Bridge result distinguishes `blocked`, `ready`, and `client_error`,
but supplies no observation time or freshness interval. `ready` therefore must
not be translated into `fresh` or canonical current truth.

Until an owner contract provides a sufficient timestamp/freshness basis and a
trusted Pond channel is separately established:

- current truth is blocked;
- no stale-versus-fresh decision can be made;
- no source conflict can select a winner;
- no cached result can be treated as current;
- missing transport cannot trigger fallback to direct Git or filesystem reads.

## Authority ceiling and forbidden capabilities

Authority: `none`.

The binding contains no endpoint, transport, connector, fetch, polling, cache,
persistence, approval, Grant, execution, mutation, authorization, credential,
secret, token, or session field. Source implementation does not imply source
activation, and source data cannot authorize a follow-up action.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact changed-path and whitespace review.

This cut proves only an exact, reviewable source-contract identity and Pond
projection allowlist. It provides no cross-repository compile-time compatibility
proof, live transport proof, freshness proof, or runtime result.

## Activation

Exact Bridge source-contract binding and sanitized Pond field allowlist:
**INCLUDED**.

Bridge enablement, Pond transport, live result ingestion, freshness evaluation,
runtime presentation, mutation, execution, deployment, or activation:
**NOT_INCLUDED**.
