# Stage B2-P4B-P16 — Adaptive world density

## Binding

Parent commit: `9c2d250f8658636e9a2987031fdcdc284a7b0e87`

Feature branch: `feat/stage-b2-p4b-p16-adaptive-world-density`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Extend the existing P4B-P8 deterministic render profile so narrower Pond
stages avoid drawing nonessential visual-depth layers while preserving the
central guide, six primary lands, procedural water, exact fixture content,
accessible document flow, and explicit safety states.

This is presentation-performance policy only. A visual-density tier is not a
device identity, capability class, authority state, host trust level, or source
of canonical truth.

## Explicit non-goals

- no measured FPS, GPU, memory, power, mobile-device, or cross-platform claim;
- no change to fixture, contract, descriptor, relationship, or UI copy;
- no change to semantic responsive layout or accessibility landmarks;
- no asset admission, loader, texture, model, or dependency change;
- no Bridge, MCP, provider, network, persistence, message, delivery, approval,
  execution, wallet, signing, trading, publication, or deployment.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-b2-p4b-p16-adaptive-world-density.md`
- `scripts/pond-render-policy-selftest.mjs`
- `ui/pond-render-policy.js`
- `ui/pond-world.js`

Runtime surface: existing local deterministic render-profile selection and
procedural Three.js presentation only.

Network scope: package installation and GitHub repository workflow operations
only. The Pond runtime receives no network capability.

## Deterministic density policy

The existing width, pixel-ratio, frame-rate, reduced-motion, resize, visibility,
and pause/resume inputs remain the only policy inputs. The cut adds one closed
`worldDetail` value to the returned frozen profile:

| Stage width | World detail |
| --- | --- |
| greater than 1180px | `full` |
| 541px through 1180px | `balanced` |
| 540px or less | `essential` |

Invalid or non-positive width continues to fall back to the existing
conservative width and therefore selects `essential` detail.

Reduced-motion preference continues to control motion speed, pixel-ratio cap,
and frame rate exactly as established by P4B-P8. It does not silently change
the width-derived visual-density tier.

## Layer visibility

Every tier retains the guide, primary island composition, waterfalls, water,
stars, and the complete HTML fixture/safety interface.

- `full` retains every decorative layer;
- `balanced` suppresses celestial arcs, cloud banks, and primary-island mist,
  while retaining the distant archipelago, foreground ecology, water-light
  pools, and atmospheric motes;
- `essential` suppresses all optional groups named above while retaining the
  core composition.

An unexpected direct input to the pure decorative-visibility function fails
to the `essential` matrix instead of increasing work.

Setting a Three.js group or mesh invisible prevents it from entering rendering
for that profile. Geometry is still constructed during this cut; lazy
construction, measured savings, and device-specific proof are not claimed.

## Lifecycle boundary

The P4B-P8 lifecycle remains intact:

- current stage width is observed by the existing resize paths;
- profile and decorative visibility update together on resize;
- document-hidden and offscreen states still pause rendering;
- reduced-motion changes still refresh the profile;
- pointer neutral reset, disposal, and WebGL-loss fallback are unchanged.

## Trusted sources and precedence

Canonical ToadAid architecture at the bound commit governs ecosystem law. The
existing pure render policy governs local visual budgeting only. The exact B1
fixture and local presentation contracts govern rendered facts. No visual tier
may alter, hide, or reinterpret a safety or authority-relevant fixture fact.

## Authority ceiling

Authority: `none`.

The profile can select pixel ratio, maximum render rate, and decorative layer
visibility only. It cannot establish identity, scope, membership, admission,
audience, release, reachability, routing, delivery, capability, grant,
approval, execution, or canonical current state. All static gates remain OFF.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax checks for policy, self-test, and renderer;
- deterministic assertions for full, compact-desktop, tablet, phone,
  reduced-motion, invalid-input, and unexpected-tier cases;
- locked Tauri Rust check;
- exact changed-path and whitespace review;
- native Linux full-profile launch and visual regression observation with no
  observed clipping, fallback, or launch fault.

## Activation

Adaptive presentation-density policy: **INCLUDED**.

Live capability, agent, host integration, or consequence activation:
**NOT_INCLUDED**.

Repository asset admission or loading: **NOT_INCLUDED**.
