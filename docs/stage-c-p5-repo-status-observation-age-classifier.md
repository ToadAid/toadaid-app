# Stage C-P5 — Repository-status observation-age classifier

## Binding

Parent commit: `34dc7263da37734dd458c130ef57b28e307b8427`

Feature branch: `feat/stage-c-p5-repo-status-observation-age-classifier`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

Mirror Desktop Bridge source commit inherited through C-P4:
`dfc9b59084e36324b1d97c0e8f9f1f72441970d7` on `main`.

## Goal

Derive deterministic `fresh`, `stale`, and `unknown` observation-age
classifications from the exact C-P4 Bridge metadata shape, an explicit
evaluation time, and an explicit fixture maximum-age interval.

The classifier is pure and fail-closed. Its output is the single source for the
self-test's age, state, reason, and evidence-basis assertions; fixture claims
are not independently hand-authored beside the comparison mechanism.

## Explicit non-goals

- no wall-clock read, production clock source, runtime freshness configuration,
  polling interval, cache lifetime, retry, or scheduler;
- no repository owner/name, branch, HEAD, root-path, target, revision, digest,
  or applicability comparison;
- no trusted channel, precedence proof, Bridge connection, result ingestion,
  endpoint, IPC, MCP, STDIO, HTTP, listener, transport, or live source;
- no direct Git or filesystem read and no alternate-source fallback;
- no snapshot presentation, UI change, persistence, approval, Grant, mutation,
  execution, deployment, or activation.

## Exact scope

Files:

- `.github/workflows/ci.yml`
- `BUILD_LIST.md`
- `docs/stage-c-p5-repo-status-observation-age-classifier.md`
- `package.json`
- `scripts/pond-bridge-repo-status-observation-age-selftest.mjs`
- `src/contracts/pond-bridge-repo-status-observation-age.ts`

Runtime scope: one pure deterministic classifier and its local/CI self-test.
The classifier performs no I/O and is not connected to Pond presentation or a
Bridge transport.

Tool scope: current canonical, Pond, and Bridge repository inspection; local
Pond mutation; locked dependency installation; TypeScript and deterministic
self-test validation; existing renderer checks; locked Rust check; Git; and
GitHub pull-request workflow.

Network scope: source verification, dependency installation, and GitHub
repository workflow only. No Pond runtime network capability is added.

## Canonical and local dependencies

Canonical Derived Evidence law requires a claim to be produced by the
observation or comparison mechanism it describes. Canonical current-state law
requires source/ref/revision and freshness to be established before a
consequential current-state claim. Trusted Channel law separately requires a
structural channel with verified authority and precedence.

C-P4 binds the exact source metadata:

- `observed_at_epoch_ms` as a non-negative safe Unix epoch millisecond value;
- `freshness_basis: source_observation_time_only`;
- `currentness_posture: not_established_consumer_must_evaluate`.

C-P5 consumes that exact metadata shape. It does not weaken the source's
currentness posture. Shape validation does not prove that an object originated
from Bridge, so the result records source binding comparison as
`not_performed_fixture_dependency_only` until a trusted channel exists.

## Classification policy

The deterministic fixture policy declares a maximum age of 60,000
milliseconds. The evaluation time is supplied explicitly; the classifier does
not read the wall clock.

For valid exact metadata, evaluation time, and maximum age:

- age less than or equal to the declared maximum is `fresh`;
- age greater than the declared maximum is `stale`;
- an observation later than the evaluation time is `unknown` and no age is
  emitted.

Missing metadata, wrong source literals, negative or unsafe timestamps, invalid
evaluation time, and invalid maximum age also produce `unknown`. Invalid paths
emit no numeric age and use
`comparison_not_performed_invalid_input` rather than inventing zero.

## Currentness and presentation ceiling

`fresh` means only that the source observation falls within the supplied
fixture age interval. It does not mean the repository target matches, the
projection is applicable, the channel is trusted, or the snapshot is canonical
current truth.

Every classification therefore:

- keeps `currentTruthAdmitted: false`;
- keeps snapshot presentation `withheld` and presentation `degraded`;
- records target comparison as not performed;
- records source binding comparison as fixture dependency only, not performed;
- records trusted channel as not established;
- maps to canonical `insufficient_evidence`;
- carries authority `none`.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- `npm run test:stage-c-p5` locally and in both CI paths;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact changed-path and whitespace review.

The self-test proves within-interval, inclusive boundary, expired, future,
missing, malformed-literal, invalid-time, and invalid-policy behavior. This is
typed and local deterministic classifier evidence only, not Bridge wiring or
live proof.

## Activation

Pure observation-age classifier and deterministic self-test: **INCLUDED**.

Runtime clock policy, Bridge enablement, Pond transport, live intake, target or
trusted-channel comparison, current-truth admission, snapshot presentation,
mutation, execution, deployment, or runtime activation: **NOT_INCLUDED**.
