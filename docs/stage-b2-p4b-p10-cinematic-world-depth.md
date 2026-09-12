# Stage B2-P4B-P10 — Cinematic world depth

## Binding

Parent commit: `101afb4afc29d52baa1f7e67045581dfed055a0d`

Feature branch: `feat/stage-b2-p4b-p10-cinematic-world-depth`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Give the existing procedural Tobyworld stronger cinematic depth and visual
legibility without adding an asset, dependency, source of truth, capability,
or authority surface.

This is a presentation-only refinement over the P4B-P9 Lore Land composition.
It does not claim that the displayed world, islands, agent, light, water, or
lore cores represent live ecosystem state.

## Exact source scope

- `BUILD_LIST.md`
- `docs/stage-b2-p4b-p10-cinematic-world-depth.md`
- `ui/pond-world.js`

No dependency, host, contract, fixture, asset, or canonical-governance file
changes are included.

## Visual composition

The cut adds only deterministic, code-native presentation:

- reduced fog density and bounded front/lore directional fill for clearer
  island silhouettes;
- a modest ACES exposure adjustment;
- deterministic cyan, green, gold, and blue vertex-colored stars;
- four faint partial celestial arcs behind the world composition;
- layered radial, crossing, diagonal, horizon, and caustic terms in the
  existing procedural water shader;
- five translucent additive water-light pools beneath the foreground islands;
- two bounded splash rings at each existing procedural waterfall terminus;
- gentle deterministic pulse and rotation for lore cores and splash groups.

All motion remains driven by the existing elapsed-time path. Reduced-motion
preference continues to scale elapsed motion to the established P4B-P8 value.

## Performance and lifecycle boundary

The P4B-P8 render policy remains unchanged:

- desktop pixel ratio and frame-rate caps remain bounded;
- narrower and reduced-motion profiles remain unchanged;
- actual-stage resize observation remains unchanged;
- hidden/offscreen pause and resume remain unchanged;
- disposal and WebGL-loss fallback remain unchanged.

This cut makes no measured FPS, GPU, memory, mobile, or cross-platform claim.
Native observation proves only that the candidate launched and rendered on the
observed Linux host.

## Authority ceiling

Authority: `none`.

The cut cannot establish identity, scope, membership, admission, Release,
route, delivery, grant, approval, execution, persistence, or canonical world
state. It cannot invoke an agent, call a tool, connect to Bridge or MCP, access
a wallet, sign, trade, publish, deploy, or mutate a repository at runtime.

## Activation

Procedural presentation refinement: **INCLUDED**.

Live capability or agent activation: **NOT_INCLUDED**.

Repository asset admission or loading: **NOT_INCLUDED**.

## Verification

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax check for `ui/pond-world.js`;
- P4B-P8 deterministic render-policy self-test;
- locked Tauri Rust check;
- native Linux launch and visual observation;
- exact changed-path and whitespace review.
