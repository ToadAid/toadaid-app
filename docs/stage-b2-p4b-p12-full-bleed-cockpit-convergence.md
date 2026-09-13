# Stage B2-P4B-P12 — Full-bleed cockpit convergence

## Binding

Parent commit: `2e6bc6ccbd06a5ea92d6ecee1352253f3f7b1a2f`

Feature branch: `feat/stage-b2-p4b-p12-full-bleed-cockpit-convergence`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Converge the wide-screen Pond shell toward the approved sci-fi desktop
composition by making the existing procedural world the continuous visual
ground and presenting the existing navigation, context, and voice regions as
floating cockpit instruments.

This cut changes visual hierarchy only. Pond remains the scope-aware front door
and non-authoritative projection surface. It does not become an orchestrator,
agent runtime, governance kernel, canonical state owner, or consequence host.

## Explicit non-goals

- no new fixture fact, count, status, relationship, or agent claim;
- no navigation, message, voice, approval, or agent interaction;
- no canonical scope, identity, membership, admission, Release, grant, or
  authority semantics;
- no repository asset admission or use of operator reference pixels;
- no Bridge, MCP, provider, network, persistence, route, delivery, mutation,
  execution, wallet, signing, trading, publication, or deployment behavior.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-b2-p4b-p12-full-bleed-cockpit-convergence.md`
- `ui/pond-desktop.css`

Runtime surface: existing local static Pond shell and existing procedural
renderer presentation only.

Tools used for verification: local dependency install, TypeScript compiler,
JavaScript syntax/self-test commands, locked Rust compiler check, Git diff
inspection, and the already-bounded native Tauri development host.

Network scope: package install and GitHub repository workflow operations only;
the Pond runtime receives no network capability.

## Visual composition

At wide desktop widths, the cut:

- extends the existing procedural stage across the complete shell;
- keeps the top identity bar translucent over the world;
- turns the left navigation into a detached rounded glass rail;
- turns the right context and authority region into a detached glass panel;
- turns the disabled voice/composer footer into a floating capsule;
- adds quiet outer cockpit registration lines and deeper edge vignetting;
- repositions the stage heading, active-scope beacon, guide presence overlay,
  and tagline around the floating shell regions.

Below the established wide-screen breakpoint, explicit overrides restore the
existing two-column and single-column document flow. The semantic landmarks,
visible labels, disabled controls, keyboard focus treatment, and textual
CURRENT/LATER/OFF states are unchanged.

## Trusted sources and precedence

Canonical ToadAid architecture at the bound commit governs ecosystem law.
The exact B1 fixture and existing local presentation contracts govern every
rendered fact. The operator-supplied image at
`/home/tommy/Pictures/toadaid-app.jpg` is visual direction only. It cannot
establish runtime state or override canonical or fixture truth, and none of its
pixels are copied into the repository.

## Authority ceiling and forbidden capabilities

Authority: `none`.

The CSS may arrange and decorate existing presentation regions. It cannot
establish identity, membership, admission, audience, release, reachability,
capability, approval, execution, or canonical current state. All existing
static gates remain OFF.

## Validation and completion evidence

- dependency installation completes from the committed lock;
- TypeScript typecheck passes;
- the existing P4B-P8 render-policy self-test passes;
- locked Tauri Rust check passes;
- CSS contains balanced blocks under source inspection;
- whitespace and exact changed-path review pass;
- native Linux launch renders the continuous world and floating shell without
  visible clipping or fallback at the observed host window size.

This cut makes no measured accessibility, FPS, GPU, memory, mobile, or
cross-platform claim beyond the stated source and observation evidence.

## Activation

Wide-screen presentation refinement: **INCLUDED**.

Live capability, agent, host integration, or consequence activation:
**NOT_INCLUDED**.

Repository asset admission or loading: **NOT_INCLUDED**.
