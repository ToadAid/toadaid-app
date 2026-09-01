# ToadAid Pond

**Product:** ToadAid Pond
**Repository:** `ToadAid/toadaid-app`
**Status:** Public Work in Progress
**Activation:** `NOT_INCLUDED`

ToadAid Pond is the governed, scope-aware front door through which humans understand, coordinate, and propose across ToadAid agents without transferring sovereignty or manufacturing authority.

Pond is one coherent product, not one universal agent, shared brain, or memory pool. The active scope matters: `personal`, `shared`, `project`, and `public` remain distinct, and personal memory is private by default. Selecting a scope establishes presentation context only; it does not establish membership, agent admission, cross-scope release, a grant, approval, or authority.

## Agent directions

- **Human principal:** the sovereign human.
- **Personal agent:** ToadAid Living Agent is the current principal-bound continuity direction.
- **Community and project agents:** future agents bound to explicit shared or project scopes; they do not inherit member personal memory.
- **Specialist agents:** bounded domain directions including ToadAid Coder, ToadAid Zora Agent, ToadAid Trader, lore/oracle specialists, and future governed specialists.
- **Remote external agents:** separately identified and admitted, with no local authority by default.
- **Services and tools:** capability exposure that may not be an autonomous agent.

Frog-to-Toad is not an active specialist and is not an alias for Living Agent. It would return only as a future, separately defined specialist if a genuinely distinct lifecycle or transformation job emerges.

## Architecture placement

```text
ToadAid Architecture
  canonical cross-ecosystem law
        |
        v
Mirror Core
  reusable governed substrate and shared foundations
        |
        +------------------------------+
        v                              v
ToadAid Pond                    Mirror Desktop Bridge
  front door, projections, UI     bounded local trusted-channel /
                                  capability boundary where assigned
        |
        v
Living Agent / community agent / project agent / specialists
  separately governed continuity and domain implementations
```

- [`ToadAid/toadaid-architecture`](https://github.com/ToadAid/toadaid-architecture) owns canonical ecosystem law.
- **Mirror Core** provides reusable governed substrate for shared governance, provenance, continuity and memory foundations, policy, evidence, and agent foundations where canonical architecture assigns those responsibilities.
- **Pond** owns host-neutral projections, view state, UI semantics, and presentation. Pond does not duplicate Mirror Core governance semantics or own canonical membership, admission, grant, revocation, release, routing, or authority mechanics.
- **Mirror Desktop Bridge** is a bounded local capability and trusted-channel boundary where assigned. It does not invent ecosystem law.
- **Living Agent, community agents, project agents, and specialists** own separately governed continuity or domain behavior in their respective repositories and runtimes.
- **ChatGPT, Mirror Desktop, loopback, and specialist-native interfaces** may become conforming surfaces over the same governed truth; they are not separate authority systems.

Mirror Core is central reusable substrate, but it does not automatically own every future Social Control Plane runtime, database, membership store, routing service, admission store, or grant store. Canonical architecture intentionally defers several implementation-ownership decisions.

## Current state

The merged foundation includes:

- **Stage 0B-P1:** host-neutral Pond front-agent projection;
- **Stage 0B-P2:** singular scope-context invariants, merged at `c02caab2d95fd9ae0741cbe29d4e53bec498f860`.

The implementation remains fixture/contract foundation only:

- exactly one active scope context;
- membership, agent admission, cross-scope release, and delegated authority are `not_established`;
- projected capability effects are limited to `read` and `proposal`;
- all Stage 0B effect gates, including execution, are disabled.

The repository does not currently provide or activate:

- live specialist invocation or dynamic plugin loading;
- routing or dispatch;
- network access or persistence;
- Bridge or MCP connectivity;
- authentication;
- approval recording;
- repository mutation;
- wallet access, signing, or trading;
- autonomous execution;
- deployment.

Public source visibility does not create public authority or public access to private state. The `"private": true` field in `package.json` prevents accidental npm publication; it does not describe this GitHub repository's visibility.

## Contributor orientation

Read [`AGENTS.md`](AGENTS.md) first. [`BUILD_LIST.md`](BUILD_LIST.md) records current repository truth, permanent boundaries, and the evidence-bounded roadmap. Canonical ecosystem semantics live in [`ToadAid/toadaid-architecture`](https://github.com/ToadAid/toadaid-architecture); local Pond code and documentation project those semantics and must not redefine them.

## Validation

```bash
npm ci --ignore-scripts --no-audit --no-fund
npm run typecheck
git diff --check
```

There is no application start command or production deployment in this cut.

## License

ToadAid Pond is licensed under the [Apache License 2.0](LICENSE).
