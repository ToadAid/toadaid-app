# Pond Builder Orientation

This file is a local anti-drift guide. It does not own or redefine ToadAid architecture.

## Architecture preflight

Before architecture-sensitive design or mutation, establish and read the current canonical ToadAid architecture in [`ToadAid/toadaid-architecture`](https://github.com/ToadAid/toadaid-architecture):

1. bind the current canonical branch, ref, and commit;
2. read canonical `AGENTS.md`, `README.md`, `ECOSYSTEM.md`, and `GOVERNANCE.md`;
3. read every applicable canonical blueprint, map, and contract;
4. then read this repository's `README.md`, `BUILD_LIST.md`, and applicable local docs and source.

A remembered or cached architecture summary is insufficient when the relevant canonical state may have changed.

For Pond work involving principal identity, scope, membership, audience, release, agent identity, admission, capability, grants or delegation, revocation, routing, messaging, evidence or attestations, memory or provenance, approval, or consequence/execution, read the applicable canonical owner before proposing semantics or implementing behavior.

If local implementation or documentation conflicts with canonical architecture, do not silently "fix" architecture locally or optimize away the boundary. Stop, identify the conflict, and surface it for deliberate architecture reconciliation.

## Ecosystem placement

- Canonical architecture defines ecosystem law.
- Mirror Core provides reusable governed substrate and shared foundations where architecture assigns them.
- Pond presents and coordinates through host-neutral projections and UI semantics.
- Mirror Desktop Bridge exposes a bounded local trusted-channel and capability boundary where assigned.
- Living Agent, community agents, project agents, and specialists own separately governed continuity or domain behavior.

Before inventing a local Pond implementation, determine whether the required reusable governed substrate already belongs in Mirror Core. Prefer reuse and composition over duplicated governance infrastructure.

Pond presents governed truth; it does not clone the governance substrate. Do not silently assign unresolved community or Social Control Plane ownership to Mirror Core, Pond, Bridge, or another repository. If ownership is unclear, stop and surface the architecture question.

## Local non-drift laws

- Humans remain sovereign.
- Capability is not authority.
- A projection is not canonical current state.
- Identity is not membership.
- Membership is not admission.
- Admission is not capability.
- Routing is not authorization.
- A message is not a grant.
- Evidence or attestation is not authority.
- Approval is not execution.
- Personal, shared, project, and public scopes do not collapse.
- Providers, hosts, sessions, and transports do not own ToadAid identity or authority.
- Pond projects and presents; it does not own canonical relationship authority.

## Agent taxonomy

- ToadAid Living Agent is the current personal-agent and continuity direction.
- Community agents and project agents are separate canonical profiles bound to explicit shared/project scopes.
- Coder, Zora Agent, Trader, lore/oracle, and future bounded domain agents are specialist directions.
- Remote external agents require separate identity and admission and default to no local authority.
- A service or tool may expose capability without being an autonomous agent.
- Frog-to-Toad is not active and is not an alias for Living Agent.

## Implementation planning

Every architecture-sensitive plan must identify:

- goal and explicit non-goals;
- exact file, tool, runtime, and network scope;
- authority ceiling and forbidden capabilities;
- canonical basis and dependencies;
- trusted sources, channels, and precedence assumptions;
- validation and evidence required for completion;
- whether activation is `INCLUDED` or `NOT_INCLUDED`.

## Repository-operation discipline

- Establish repository root, branch, HEAD, tree, worktree/index status, and origin before mutation.
- When explicit shell strict-mode setup is used, use `set -uo pipefail` only; never use `set -e` or `set -euo pipefail`.
- Never force push or use force-with-lease.
- Never amend reviewed history.
- Do not blind-retry a failure; classify it first.
- Do not silently widen scope after failure.
- Do not activate runtime behavior unless the task explicitly includes activation.
