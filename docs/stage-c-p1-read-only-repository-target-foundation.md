# Stage C-P1 — Exact read-only repository target foundation

## Binding

Parent commit: `adda2fc7807a504b5621c18a3aa84ce8f3004440`

Feature branch: `feat/stage-c-p1-read-only-repository-target`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Establish one exact fixture-only repository target identity for the first Stage
C read-only project cockpit. The target binds repository owner and name,
applicable branch, the merged parent HEAD, repository-root path class, and read
operation class.

This cut composes the existing B1 project-scope reference and C-P0 Bridge target
resolution responsibility without claiming that a live Bridge, checkout,
remote repository, or target-resolution channel was observed.

## Explicit non-goals

- no live workspace, checkout, remote, repository, branch, HEAD, path, file,
  status, diff, CI, or source observation;
- no filesystem path discovery, Git invocation, GitHub request, polling, cache,
  persistence, transport, Bridge connection, Coder connection, or MCP tool;
- no proof that the named repository exists, is reachable, belongs to the
  fixture project scope, or is current at presentation time;
- no principal identity, membership, repository ownership, agent admission,
  Release, capability, Grant, approval, or authority establishment;
- no repository write, commit, push, merge, mutation, execution, deployment, or
  activation;
- no UI change.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-c-p1-read-only-repository-target-foundation.md`
- `src/contracts/pond-read-only-repository-target.ts`
- `src/fixtures/stage-c-p1-read-only-repository-target.ts`

Runtime scope: TypeScript contract and deterministic fixture compilation only.

Tool scope: canonical and local repository inspection, local file mutation,
locked dependency installation, TypeScript validation, existing JavaScript
self-tests, locked Rust check, Git, and GitHub pull-request workflow.

Network scope: canonical architecture verification, package installation, and
GitHub repository workflow operations only. No Pond runtime network capability
is added.

## Canonical and local dependencies

Canonical Scope Sovereignty law keeps project membership separate from
workspace or repository binding and states that checkout presence does not
create scope membership, ownership, or mutation authority.

The Delegated Authority and Capability Grant Contract requires repository
targets to bind owner/name plus branch, path class, and operation class where
applicable. This fixture borrows that exactness discipline but is not a Grant
target and cannot establish authority.

The Governed Runtime Component Allocation assigns workspace identity and
repository target resolution to Mirror Desktop Bridge and describes the future
governed repository flow as an exact repository/branch/HEAD/path binding. It
does not activate that flow.

Locally, B1 owns the project-scope fixture reference reused here. C-P0 owns the
logical Bridge responsibility fixture reused here. C-P1 adds no competing scope
or source-responsibility semantics.

## Contract and fixture

`PondReadOnlyRepositoryTargetFixture` carries:

- repository owner `ToadAid` and name `toadaid-app`;
- branch `main`;
- parent HEAD `adda2fc7807a504b5621c18a3aa84ce8f3004440`;
- repository-root path class and repository-relative path `.`;
- operation class `read`, with no operation performed;
- the exact B1 project-scope reference under an explicit fixture-association
  posture;
- the exact C-P0 Bridge workspace-target responsibility;
- fixture-identity-only target posture and authority `none`.

The parent HEAD is a deterministic fixture identity, not a claim about live
current HEAD after this cut. Compile-time assertions preserve the exact
repository identity, target dimensions, reused scope and responsibility, and
authority-none posture.

## Trusted sources, channels, and precedence

Canonical architecture at the bound commit governs scope and target-binding
semantics. The local Git parent commit supplies the deterministic fixture value.
B1 and C-P0 supply the reused local scope and responsibility fixtures.

No runtime source channel is established. The repository name, branch, commit,
and path are fixture values rather than live observations. Runtime source
precedence, freshness, conflict handling, and reconciliation remain for later
bounded cuts.

## Authority ceiling and forbidden capabilities

Authority: `none`.

The contract exposes no absolute workspace path, remote URL, membership, Grant,
approval, write, commit, push, merge, execution, mutation, authorization,
credential, secret, token, or session field.

Repository access, project association, target identity, and read capability
remain distinct. This cut performs no read and cannot mutate anything.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact changed-path and whitespace review.

This cut provides typed/structural fixture proof only. It does not provide a
live repository observation, Bridge/Coder integration proof, trusted-channel
proof, or current-state proof.

## Activation

Exact fixture-only read-only repository target identity: **INCLUDED**.

Live repository access, source integration, Bridge/Coder/MCP connectivity,
mutation, execution, deployment, or activation: **NOT_INCLUDED**.
