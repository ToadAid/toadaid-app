# Stage B2-P4B-P15 — Atmospheric mist strata

## Binding

Parent commit: `e8008f199aaa99a6fadcc38bf101d43d23bd0591`

Feature branch: `feat/stage-b2-p4b-p15-atmospheric-mist-strata`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Add restrained atmospheric separation between the foreground ecology, six
primary lands, and distant archipelago while preserving the central guide and
cockpit as the dominant presentation hierarchy.

This is decorative atmosphere only. Mist does not indicate connectivity,
routing, delivery, reachability, world status, scope relationships, or
canonical current state.

## Explicit non-goals

- no fixture, contract, descriptor, relationship, or UI text change;
- no route, connection, transport, world discovery, membership, or admission;
- no repository asset admission or use of operator reference pixels;
- no Bridge, MCP, provider, network, persistence, messaging, delivery,
  approval, execution, wallet, signing, trading, publication, or deployment.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-b2-p4b-p15-atmospheric-mist-strata.md`
- `ui/pond-world.js`

Runtime surface: existing deterministic Three.js presentation inside the
bounded local Pond stage.

Network scope: package installation and GitHub repository workflow operations
only. The Pond runtime receives no network capability.

## Procedural composition

The cut adds:

- seven low-opacity cloud banks built from one shared low-detail sphere
  geometry and two shared additive materials;
- six translucent mist rings positioned beneath the six existing primary
  procedural islands;
- slow bounded cloud drift and lift;
- slow bounded mist scale, rotation, and opacity variation.

The clouds use flattened overlapping puffs to form soft horizontal strata.
Mist placement is derived from the existing primary-island layout values; it
does not introduce a second island-state source.

No bitmap, model, texture, loader, dependency, repository asset, or reference
pixel is added.

## Lifecycle and performance boundary

The P4B-P8 render policy remains unchanged:

- desktop, narrower, and reduced-motion frame/pixel profiles are unchanged;
- actual-stage resize observation is unchanged;
- hidden/offscreen pause and resume are unchanged;
- pointer neutral reset, disposal, and WebGL-loss fallback are unchanged.

All new motion uses the existing elapsed-time path and inherits the established
reduced-motion scale. Cloud puffs share one geometry and two materials. This
cut makes no measured FPS, GPU, memory, mobile, or cross-platform claim.

## Trusted sources and precedence

Canonical ToadAid architecture at the bound commit governs ecosystem law. The
exact B1 fixture and local presentation contracts govern rendered facts.
Operator images under `/home/tommy/Pictures/toadaid-app/` remain visual
direction only and cannot establish world state, scope, ownership,
connectivity, routing, or authority. Their pixels remain outside the
repository.

## Authority ceiling

Authority: `none`.

The renderer emits decorative pixels only. It cannot establish identity,
scope, membership, admission, audience, release, reachability, routing,
delivery, capability, grant, approval, execution, or canonical current state.
All static gates remain OFF.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax check for `ui/pond-world.js`;
- P4B-P8 deterministic render-policy self-test;
- locked Tauri Rust check;
- exact changed-path and whitespace review;
- native Linux launch and visual observation with no observed clipping,
  fallback, or launch fault.

## Activation

Procedural atmospheric presentation: **INCLUDED**.

Live capability, agent, host integration, or consequence activation:
**NOT_INCLUDED**.

Repository asset admission or loading: **NOT_INCLUDED**.
