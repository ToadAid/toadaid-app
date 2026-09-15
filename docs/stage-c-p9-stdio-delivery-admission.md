# Stage C-P9 — Bridge STDIO delivery admission

## Binding

Parent commit: `0b8d4df831bef969a76a5c6e02106d831d8b61a1`

Feature branch: `feat/stage-c-p9-stdio-delivery-admission`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

Mirror Desktop Bridge source commit:
`595016262507d21aa34997277b9197ce89fda378` on `main`.

## Goal

Bind the complete repository-status evidence exposed by Bridge Stage 39A-R1
and define the exact consumer-side facts a future Pond production client must
observe before treating that STDIO MCP path as an admissible evidence channel.

## Source contract

C-P9 pins the existing four-tool Stage 39A server and the
`mirror_repo_status` result fields required by C-P5 through C-P8: observation
time, full HEAD, sanitized configured-origin identity, target digest, receipt,
and explicit denied mutation/authority.

The source states `channel_authority: not_established_by_producer`. Pond must
preserve that ceiling: a producer cannot establish the receiving channel's
authority by labeling its own output trusted.

## Admission checks

The deterministic classifier requires separate receiver observations for:

- exact direct-child process ownership;
- exact Stage 39A server identity;
- completed MCP initialization;
- exact four-tool read-only inventory;
- exact startup-target digest comparison;
- structured content separated from operator/task input;
- receiver-owned evidence-channel precedence;
- an observed live tool invocation.

Each fact is independently classified. Missing facts remain visible as an
ordered unsatisfied-check list. Malformed source or delivery candidates fail
closed.

## Proof ceiling

Even a synthetically complete supplied candidate establishes only
`structurally_admissible_fixture`. It does not prove the production process,
transport, invocation, precedence, freshness, remote repository, or current
truth. Production proof must come from the later receiver implementation and
live-path tests, not from this fixture.

All outcomes therefore retain:

- producer authority accepted as proof: `false`;
- production proof established: `false`;
- current truth admitted: `false`;
- snapshot presentation: `withheld`;
- canonical outcome: `insufficient_evidence`;
- runtime activation: `not_included`;
- authority: `none`.

## Non-goals

- no Bridge process launch or MCP client;
- no STDIO, IPC, HTTP, listener, tunnel, polling, retry, or persistence runtime;
- no remote GitHub verification or configured-origin ownership claim;
- no direct Git or filesystem fallback;
- no UI presentation, mutation, approval, execution, deployment, or authority.

## Validation

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- `npm run test:stage-c-p5` through `npm run test:stage-c-p9`;
- JavaScript syntax and existing render-policy checks;
- locked Tauri Rust check;
- exact changed-path and whitespace review.

The C-P9 self-test covers an all-checks fixture, every individual missing
receiver proof, invalid source commit, altered tool inventory, invalid target
digest, and attempted producer authority escalation.
