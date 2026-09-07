# Stage B2-P4B-P8 — Responsive render lifecycle

## Binding

Parent commit: `765f74b47ff656c42fbe1024015aa11f78ca34cd`

Parent tree: `d5c64841cd0f190e99e317385f4521cfcc793109`

Feature branch:
`feat/stage-b2-p4b-p8-responsive-render-lifecycle`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

Canonical architecture tree:
`648029785b4dbe4b58d914ea19cbae7296ec6d24`

## Goal

Bound the already-admitted procedural Pond presentation to a deterministic local
render profile that reduces avoidable GPU/CPU work on narrower displays,
honors reduced-motion preference more strongly, responds to actual stage-size
changes, and stops rendering while the stage is not currently visible.

This is a presentation-runtime refinement only.

It does not introduce a new source of truth, capability, authority, asset,
network path, tool path, persistence path, or agent invocation.

## Architectural basis

The canonical ToadAid architecture remains:

`capability != authority`

`evidence != authority`

`projection != canonical current state`

Pond remains a presentation and coordination surface. This cut does not assign
Pond ownership of governance, identity, scope, admission, approval, execution,
or consequence.

The P4B-P7 admission boundary remains intact:

`eligible_for_repository_admission != admitted`

P4B-P8 does not perform repository asset admission and does not create a
runtime loader.

## Exact source scope

Included paths:

- `BUILD_LIST.md`
- `docs/stage-b2-p4b-p8-responsive-render-lifecycle.md`
- `scripts/pond-render-policy-selftest.mjs`
- `ui/pond-render-policy.js`
- `ui/pond-world.js`

No dependency file changes are included.

## Render policy

The pure render policy derives a bounded profile from only:

- current stage width;
- current browser-reported device pixel ratio;
- current `prefers-reduced-motion` state.

The profile is deterministic:

| Condition | Pixel-ratio cap | Maximum render rate |
| --- | ---: | ---: |
| width > 800px | 1.5 | 60 fps |
| width <= 800px | 1.25 | 30 fps |
| width <= 540px | 1.0 | 30 fps |
| reduced motion | 1.0 | 12 fps |

Invalid/non-positive width or device-pixel-ratio input fails to conservative
local defaults rather than increasing work.

These values are local Pond presentation budgets. They are not asset-admission
performance evidence and do not modify the P4B-P4 visual-asset performance
policy.

## Lifecycle behavior

The existing hidden-document pause is generalized to one derived animation
predicate:

- disposed => do not animate;
- document hidden => do not animate;
- stage not intersecting the viewport => do not animate;
- otherwise => animation may run under the current render profile.

A `ResizeObserver` updates render size and profile when the actual stage
dimensions change. The existing window resize listener remains as a bounded
fallback/secondary signal.

An `IntersectionObserver` pauses the render loop when the stage is scrolled
out of view and resumes it when visible again. Absence of the observer API does
not invent an offscreen state; the stage remains conservatively treated as
visible.

Pointer leave now returns the presentation target toward neutral rather than
preserving a stale edge parallax target.

Reduced-motion changes update both resolution and frame budget without
reloading the application.

## Authority ceiling

Authority: `none`.

The render profile cannot:

- authorize tools;
- dispatch commands;
- create grants or approvals;
- alter principal, scope, membership, audience, or agent identity;
- load or admit visual assets;
- access wallets or sign;
- create network requests;
- persist state;
- mutate repositories at runtime;
- invoke agents;
- execute consequences.

## Activation boundary

Presentation runtime change: **INCLUDED**.

This means only that the already-existing local Pond visual renderer uses the
new bounded render lifecycle when this repository change is launched.

Live tool/capability activation: **NOT_INCLUDED**.

Repository asset admission: **NOT_INCLUDED**.

Runtime model/texture loading: **NOT_INCLUDED**.

## Verification

Required source verification for this cut:

- exact parent HEAD/tree and clean-main binding;
- canonical architecture binding recorded above;
- no package or dependency change;
- Node syntax check for the policy, self-test, and Pond world;
- deterministic render-policy self-test;
- repository TypeScript typecheck;
- locked Tauri Rust check;
- exact changed-path check;
- `git diff --check`;
- draft PR only.

A native visual/performance observation is intentionally a later evidence
ceremony after source review. This cut does not claim measured FPS, GPU savings,
mobile-device performance, or cross-platform proof.

## Explicit exclusions

Real visual asset import: NOT_INCLUDED.

Visual asset approval/admission: NOT_INCLUDED.

GLB/GLTF/model loader: NOT_INCLUDED.

Texture/HDR/KTX2 loader: NOT_INCLUDED.

Network/CDN/localhost behavior: NOT_INCLUDED.

Persistence: NOT_INCLUDED.

Wallet/signing: NOT_INCLUDED.

Tools or agent invocation: NOT_INCLUDED.

Approval recording: NOT_INCLUDED.

Execution/consequence: NOT_INCLUDED.

Deployment/publication: NOT_INCLUDED.
