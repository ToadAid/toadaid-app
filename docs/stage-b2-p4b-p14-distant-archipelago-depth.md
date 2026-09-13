# Stage B2-P4B-P14 — Distant archipelago depth

## Binding

Parent commit: `9f5a41a6a5b46613a0782c3ca1de3802e46a7556`

Feature branch: `feat/stage-b2-p4b-p14-distant-archipelago-depth`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Deepen the existing Tobyworld presentation by adding a sparse far-background
archipelago behind the six primary procedural lands. The added silhouettes
should communicate scale while leaving the central guide, primary islands,
and cockpit presentation hierarchy intact.

This is decorative depth only. A distant island is not a discovered world,
Lore Land holding, project scope, member, admitted agent, route, destination,
or canonical current-state claim.

## Explicit non-goals

- no fixture, contract, descriptor, scope, relationship, or UI text change;
- no world selection, discovery, membership, admission, route, or navigation;
- no repository asset admission or use of operator reference pixels;
- no Bridge, MCP, provider, network, persistence, message, delivery, approval,
  execution, wallet, signing, trading, publication, or deployment behavior.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-b2-p4b-p14-distant-archipelago-depth.md`
- `ui/pond-world.js`

Runtime surface: existing deterministic Three.js presentation inside the
bounded local Pond stage.

Network scope: package installation and GitHub repository workflow operations
only. The Pond runtime receives no network capability.

## Procedural composition

The cut adds a single far-background group containing:

- nine simplified organic floating-land silhouettes;
- one small spire and luminous beacon on each silhouette;
- three low-detail grove crowns on each silhouette;
- five faint orbit rings across the nearer background silhouettes;
- slow bounded bob, yaw, orbit, and beacon-pulse choreography.

The new geometry reuses the existing deterministic organic-island constructor
and existing grass, foliage, and tower materials where appropriate. Dedicated
far-depth rock, rim, beacon, and ring materials use reduced contrast and
opacity so atmospheric fog preserves foreground dominance.

No bitmap, model, texture, loader, dependency, repository asset, or reference
pixel is added.

## Lifecycle and performance boundary

The P4B-P8 render policy remains unchanged:

- desktop, narrower, and reduced-motion frame/pixel profiles are unchanged;
- actual-stage resize observation is unchanged;
- hidden/offscreen pause and resume are unchanged;
- pointer neutral reset, disposal, and WebGL-loss fallback are unchanged.

All new motion uses the existing elapsed-time path and therefore inherits the
established reduced-motion scale. This cut makes no measured FPS, GPU, memory,
mobile, or cross-platform claim.

## Trusted sources and precedence

Canonical ToadAid architecture at the bound commit governs ecosystem law. The
exact B1 fixture and local presentation contracts govern rendered facts.
Operator images under `/home/tommy/Pictures/toadaid-app/` remain visual
direction only and cannot establish runtime truth, ownership, scope,
membership, discovery, or authority. Their pixels remain outside the
repository.

## Authority ceiling

Authority: `none`.

The renderer emits decorative pixels only. It cannot establish identity,
scope, membership, admission, audience, release, reachability, route,
capability, grant, approval, execution, or canonical current state. All static
gates remain OFF.

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

Procedural background-depth presentation: **INCLUDED**.

Live capability, agent, host integration, or consequence activation:
**NOT_INCLUDED**.

Repository asset admission or loading: **NOT_INCLUDED**.
