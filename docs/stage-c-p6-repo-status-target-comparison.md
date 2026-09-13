# Stage C-P6 — Repository-status target comparison

## Binding

Parent commit: `6e85b827c35f165ed1428ea2d7d08f8643af3875`

Feature branch: `feat/stage-c-p6-repo-status-target-comparison`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

Mirror Desktop Bridge source commit inherited through C-P4:
`dfc9b59084e36324b1d97c0e8f9f1f72441970d7` on `main`.

## Goal

Derive a deterministic comparison between an age-fresh sanitized Bridge
repository-status candidate and the exact C-P1 fixture target.

The comparison identifies disagreements in repository-root label, branch, and
short-HEAD prefix. It also makes the evidence ceiling structural: the bound
Bridge snapshot exposes neither repository owner nor a full-commit identity,
so even matching projected fields cannot establish an exact target match.

## Explicit non-goals

- no claim that a fixture object originated from Bridge or that C-P1 is the
  live current repository target;
- no canonical repository conflict, exact target match, applicability, or
  current-truth admission;
- no remote URL, repository owner observation, full-HEAD observation, raw
  workspace path, target resolution, or source binding comparison;
- no trusted channel, precedence proof, Bridge connection, result ingestion,
  endpoint, IPC, MCP, STDIO, HTTP, listener, transport, polling, cache, or retry;
- no direct Git or filesystem read and no alternate-source fallback;
- no snapshot presentation, UI change, persistence, approval, Grant, mutation,
  execution, deployment, or activation.

## Exact scope

Files:

- `.github/workflows/ci.yml`
- `BUILD_LIST.md`
- `docs/stage-c-p6-repo-status-target-comparison.md`
- `package.json`
- `scripts/pond-bridge-repo-status-target-comparison-selftest.mjs`
- `src/contracts/pond-bridge-repo-status-target-comparison.ts`
- `src/fixtures/stage-c-p6-bridge-repo-status-target-comparison.ts`

Runtime scope: one pure deterministic comparison classifier, one fixture
composition, and one local/CI self-test. No I/O or product wiring is added.

Tool scope: current canonical, Pond, and Bridge inspection; local Pond mutation;
locked dependency installation; TypeScript and deterministic self-tests;
existing renderer checks; locked Rust check; Git; and GitHub workflow.

Network scope: source verification, dependency installation, and GitHub
repository workflow only. No Pond runtime network capability is added.

## Canonical and local dependencies

Canonical Derived Evidence law requires comparison claims to come from the
comparison mechanism. Canonical current-state law requires source, ref,
revision, freshness, and the expected/actual comparison where applicable.
Trusted Channel law separately requires a structural source path with verified
authority and precedence.

C-P1 supplies the exact fixture target: `ToadAid/toadaid-app`, branch `main`,
parent HEAD `adda2fc7807a504b5621c18a3aa84ce8f3004440`, and repository-root
path class. C-P5 supplies the observation-age assessment. C-P6 composes those
fixtures without relabeling either as live proof.

## Comparison behavior

Target comparison occurs only when the C-P5 assessment is structurally
age-fresh and its emitted age equals the supplied evaluation-minus-observation
comparison. Stale, unknown, contradictory, malformed, or non-C-P5 age input maps to
`observation_age_not_fresh`, performs no target comparison, and preserves
`insufficient_evidence`.

The classifier validates the exact C-P1 target postures and bounded Bridge
candidate fields. Invalid target or candidate input performs no comparison.

For valid inputs it compares:

- `repo_root_label` with the expected repository name;
- `branch_name` with the expected branch;
- `head_sha_short` as a prefix candidate for the expected full commit.

Any disagreement produces a `conflicting` projected-field assessment and an
exact list of differing dimensions. This is not a canonical repository
conflict because fixture provenance and trusted delivery are unproved.

If all three fields agree, the result remains `insufficient_evidence`. A
sanitized root basename is not repository-owner/name identity, and a short SHA
is not guaranteed full-commit identity. The only truthful reason is
`exact_repository_owner_and_full_head_not_observable`.

## Currentness and authority ceiling

Every result records:

- source binding comparison not performed, fixture dependency only;
- canonical conflict not established;
- exact target match not established;
- current truth not admitted;
- snapshot presentation withheld and presentation degraded;
- trusted channel not established;
- canonical `insufficient_evidence`;
- authority `none`.

The contract exposes no endpoint, transport, fetch, polling, cache,
persistence, approval, Grant, execution, mutation, authorization, credential,
secret, token, or session field.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- `npm run test:stage-c-p5`;
- `npm run test:stage-c-p6` locally and in both CI paths;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact changed-path and whitespace review.

The C-P6 self-test proves partial agreement, each individual projected-field
conflict, combined conflict, stale-age refusal, invalid-target refusal, and
invalid-candidate refusal. This is typed and local deterministic classifier
evidence only, not Bridge wiring or live proof.

## Activation

Pure projected-field comparison, fixture composition, and deterministic
self-test: **INCLUDED**.

Bridge enablement, Pond transport, live intake, source/trusted-channel proof,
exact target match, current-truth admission, snapshot presentation, mutation,
execution, deployment, or runtime activation: **NOT_INCLUDED**.
