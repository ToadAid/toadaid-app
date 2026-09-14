# Stage C-P7 — Full-HEAD repository target comparison

## Binding

Parent commit: `42fa97f04a169f1cd0766a2169ec37d3dea424b5`

Feature branch: `feat/stage-c-p7-full-head-target-comparison`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

Mirror Desktop Bridge source commit:
`c9be94541406571eaea034aa61678e912f088cb8` on `main`.

## Goal

Rebind Pond's repository-status fixture contract to the merged Bridge Stage
1I-R2 source shape and derive an exact full-HEAD comparison against the C-P1
fixture target.

This resolves C-P6's short-SHA evidence limitation. It does not resolve exact
repository identity because the sanitized Bridge snapshot still does not
establish repository owner, and no trusted Pond delivery channel exists.

## Explicit non-goals

- no claim that supplied fixture data originated from Bridge or represents the
  live current repository;
- no repository-owner inference from root label, path, Git remote, provider,
  host, session, or transport;
- no exact repository identity, exact target match, canonical conflict,
  applicability, or current-truth admission;
- no trusted channel, precedence proof, Bridge connection, result ingestion,
  endpoint, IPC, MCP, STDIO, HTTP, listener, transport, polling, cache, or retry;
- no direct Git, remote, or filesystem read and no alternate-source fallback;
- no UI change, snapshot presentation, persistence, approval, Grant, mutation,
  execution, deployment, or activation.

## Exact scope

Files:

- `.github/workflows/ci.yml`
- `BUILD_LIST.md`
- `docs/stage-c-p7-full-head-target-comparison.md`
- `package.json`
- `scripts/pond-bridge-repo-status-full-head-target-comparison-selftest.mjs`
- `src/contracts/pond-bridge-repo-status-full-head-source-binding.ts`
- `src/contracts/pond-bridge-repo-status-full-head-target-comparison.ts`
- `src/fixtures/stage-c-p7-bridge-repo-status-full-head-source-binding.ts`
- `src/fixtures/stage-c-p7-bridge-repo-status-full-head-target-comparison.ts`

Runtime scope: two fixture contracts, two deterministic fixture compositions,
and one local/CI self-test. No I/O or product wiring is added.

Tool scope: current canonical, Pond, and Bridge inspection; local Pond mutation;
locked dependency installation; TypeScript and deterministic self-tests;
existing renderer checks; locked Rust check; Git; and GitHub workflow.

Network scope: source verification, dependency installation, and GitHub
repository workflow only. No Pond runtime network capability is added.

## Canonical and local dependencies

Canonical Derived Evidence law requires the full-HEAD equality claim to be
derived from the comparison mechanism. Canonical current-state law requires
source, ref, revision, freshness, and an expected/actual comparison where
applicable. Trusted Channel law separately requires structural delivery with
verified authority and precedence.

C-P1 supplies the exact fixture target and full parent commit. C-P5 supplies
the deterministic age assessment. C-P7 supersedes only the C-P4 source binding,
binding the merged Bridge commit whose `IntegratedRepoStatusAdapterSnapshot`
adds validated `head_sha_full`. C-P6 remains historical evidence for the prior
short-SHA-only source contract.

## Source rebinding

The C-P7 source fixture binds:

- repository `ToadAid/mirror-desktop-bridge`;
- branch `main`;
- commit `c9be94541406571eaea034aa61678e912f088cb8`;
- module `src/liveReadOnlyRepoStatusAdapterIntegration.ts`;
- result `LiveRepoStatusIntegrationResult`;
- snapshot `IntegratedRepoStatusAdapterSnapshot`;
- exact added projected field `head_sha_full`;
- source format `lowercase_hex_40` and fail-closed validation before `ready`.

The previous C-P4 result-field and snapshot-field allowlists are reused; only
`head_sha_full` is appended to the snapshot allowlist. Observation metadata is
preserved unchanged.

## Comparison behavior

Comparison occurs only when the complete C-P7 source binding is exact,
including its identity, result and snapshot allowlists, observation metadata,
full-HEAD contract, and disabled/no-authority postures; when the C-P5 age
assessment is structurally fresh; when the C-P1 target is valid; and when the
sanitized snapshot candidate contains bounded root and branch labels plus
consistent short and full SHA values. Invalid or contradictory inputs perform
no target comparison and return canonical `insufficient_evidence`.

For valid inputs the classifier compares:

- `repo_root_label` with expected repository name;
- `branch_name` with expected branch;
- `head_sha_full` with the exact expected 40-hex commit.

Disagreements produce a deterministic projected-field conflict list. They do
not establish a canonical repository conflict because fixture origin and
trusted delivery remain unproved.

When all projected fields agree, the reason is
`exact_repository_owner_not_observable`. Full-HEAD equality is established for
the supplied fixture values only; exact target match remains false because the
source exposes no repository owner.

## Currentness and authority ceiling

Every result records:

- exact fixture source binding validated, with no live-origin proof, or an
  explicit not-performed posture when that binding is invalid;
- canonical conflict not established;
- exact target match not established;
- current truth not admitted;
- snapshot presentation withheld and presentation degraded;
- trusted channel not established;
- canonical `insufficient_evidence`;
- authority `none`.

The contracts expose no endpoint, transport, fetch, polling, cache,
persistence, approval, Grant, execution, mutation, authorization, credential,
secret, token, or session field.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- `npm run test:stage-c-p5`;
- `npm run test:stage-c-p6`;
- `npm run test:stage-c-p7` locally and in both CI paths;
- JavaScript syntax and deterministic render-policy self-tests;
- locked Tauri Rust check;
- exact changed-path and whitespace review.

The C-P7 self-test proves exact source rebinding, matching full HEAD, each
individual projected-field conflict, combined conflict, invalid-source
refusal, stale-age refusal, invalid-target refusal, malformed-full-HEAD
refusal, and short/full inconsistency refusal. This is typed and deterministic
fixture evidence only, not Bridge wiring or live proof.

## Activation

Exact source rebinding, full-HEAD projection, fixture comparison, and
deterministic self-test: **INCLUDED**.

Bridge enablement, Pond transport, live intake, repository-owner resolution,
trusted-channel proof, exact target match, current-truth admission, snapshot
presentation, mutation, execution, deployment, or runtime activation:
**NOT_INCLUDED**.
