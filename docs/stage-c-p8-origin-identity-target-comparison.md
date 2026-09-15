# Stage C-P8 — Configured-origin repository target comparison

## Binding

Parent commit: `e3e83556ff7c5d1e45231ddc924bf517b9e8108b`

Feature branch: `feat/stage-c-p8-origin-identity-target-comparison`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

Mirror Desktop Bridge source commit:
`56bae7363b18e180cfb5bb95da67803b2f847080` on `main`.

## Goal

Rebind Pond's repository-status fixture contract to the merged Bridge Stage
1I-R3 shape and deterministically compare its sanitized configured-origin
owner/name, branch, and exact full HEAD with the C-P1 fixture target.

An exact supplied-fixture match is now expressible. It is not current truth:
the origin is parsed from local Git configuration without remote verification,
and no trusted Bridge-to-Pond delivery channel exists.

## Explicit non-goals

- no claim that supplied fixture data originated from Bridge or describes the
  live current repository;
- no remote GitHub lookup, ownership proof, repository-existence proof, or
  interpretation of configured origin as authority;
- no canonical conflict, applicability, or current-truth admission;
- no Bridge connection, result ingestion, endpoint, IPC, MCP, STDIO, HTTP,
  listener, transport, polling, cache, retry, or alternate-source fallback;
- no direct Git, remote, or filesystem read by Pond;
- no raw origin URL, credential, secret, token, or session projection;
- no UI change, snapshot presentation, persistence, approval, Grant, mutation,
  execution, deployment, or activation.

## Exact scope

Files:

- `.github/workflows/ci.yml`
- `BUILD_LIST.md`
- `docs/stage-c-p8-origin-identity-target-comparison.md`
- `package.json`
- `scripts/pond-bridge-repo-status-origin-identity-target-comparison-selftest.mjs`
- `src/contracts/pond-bridge-repo-status-origin-identity-source-binding.ts`
- `src/contracts/pond-bridge-repo-status-origin-identity-target-comparison.ts`
- `src/fixtures/stage-c-p8-bridge-repo-status-origin-identity-source-binding.ts`
- `src/fixtures/stage-c-p8-bridge-repo-status-origin-identity-target-comparison.ts`

Runtime scope: two fixture contracts, two deterministic fixture compositions,
and one local/CI self-test. No I/O or product wiring is added.

Network scope: source verification, dependency installation, and GitHub
repository workflow only. No Pond runtime network capability is added.

## Canonical and local dependencies

Canonical Derived Evidence law requires comparison claims to be derived from
the comparison mechanism. Current-state law requires source, ref, revision,
freshness, and expected/actual comparison where applicable. Trusted Channel
law separately requires structural delivery with verified authority and
precedence.

C-P1 supplies the exact fixture repository owner/name, branch, and full parent
commit. C-P5 supplies deterministic observation-age assessment. C-P8
supersedes the C-P7 source binding by pinning the merged Bridge commit whose
snapshot adds sanitized configured-origin identity. C-P7 remains historical
evidence for the prior full-HEAD-only source contract.

## Source rebinding

The C-P8 source fixture binds:

- repository `ToadAid/mirror-desktop-bridge`;
- branch `main`;
- commit `56bae7363b18e180cfb5bb95da67803b2f847080`;
- module `src/liveReadOnlyRepoStatusAdapterIntegration.ts`;
- result `LiveRepoStatusIntegrationResult`;
- snapshot `IntegratedRepoStatusAdapterSnapshot`;
- configured-origin identity fields `host`, `owner`, `name`,
  `observation_basis`, `remote_verification`, `raw_origin_url_projected`, and
  `authority`;
- supported host `github.com`, observation basis
  `parsed_local_git_origin_url`, remote verification `not_performed`, raw URL
  projection `false`, and authority `none`.

The C-P7 allowlists and full-HEAD contract are preserved. Only
`configured_origin_identity` and `origin_identity_posture` are appended to the
snapshot allowlist.

## Comparison behavior

Comparison runs only when the complete C-P8 source binding is exact, the C-P5
age assessment is structurally fresh, the C-P1 target is valid, and the
candidate supplies a bounded supported GitHub identity plus consistent short
and full SHA values. Extra configured-origin keys—including a raw URL—fail
closed. Missing, unsupported, malformed, or contradictory inputs perform no
comparison and return canonical `insufficient_evidence`.

For valid input the classifier compares:

- configured-origin owner with expected repository owner;
- configured-origin name and the corroborating root label with expected name;
- branch with expected branch;
- full 40-hex HEAD with expected commit.

Disagreements produce deterministic projection-level conflict dimensions but
do not establish a canonical conflict. When every supplied value agrees, the
result establishes `exact_supplied_fixture_values_only`; it does not establish
remote identity, live origin, trusted delivery, or current state.

## Currentness and authority ceiling

Every result records canonical conflict `false`, current truth `false`,
snapshot presentation `withheld`, presentation `degraded`, remote verification
`not_performed`, trusted channel `not_established`, canonical outcome
`insufficient_evidence`, and authority `none`.

The contracts expose no endpoint, transport, fetch, polling, cache,
persistence, approval, Grant, execution, mutation, authorization, credential,
secret, token, session, or raw-origin-URL field.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- `npm run test:stage-c-p5` through `npm run test:stage-c-p8`;
- JavaScript syntax and existing deterministic render-policy self-tests;
- locked Tauri Rust check;
- exact changed-path and whitespace review.

The C-P8 self-test proves the exact source commit and identity allowlist,
matching fixture result, each individual and combined projected conflict,
invalid-source refusal, stale-age refusal, invalid-target refusal, absent or
unsupported identity refusal, raw-URL-field refusal, malformed full-HEAD
refusal, and short/full inconsistency refusal.

## Activation

Exact source rebinding, sanitized configured-origin fixture projection, target
comparison, and deterministic self-test: **INCLUDED**.

Bridge enablement, Pond transport, live intake, remote verification,
trusted-channel proof, current-truth admission, snapshot presentation,
mutation, execution, deployment, or runtime activation: **NOT_INCLUDED**.
