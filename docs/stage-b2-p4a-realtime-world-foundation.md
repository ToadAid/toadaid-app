# Stage B2-P4A — Real-time Pond world foundation

## Binding and recovery

This bounded cut is based on `ToadAid/toadaid-app` parent commit
`b9b52ae04ec2dfa4472824df84db796d7d89abf5`, tree
`b2bebf2593c6117a2fcd8e181bdbbb0e9f23adbe`.

The first P4A attempt correctly refused implementation because the required
canonical architecture checkout was not present as a Git repository. The
separate prerequisite established `/home/tommy/toadaid-architecture` as a clean
`main` checkout at commit `bc7a971dfb243f0aa4417da6cef85cc56204f783`,
tree `648029785b4dbe4b58d914ea19cbae7296ec6d24`, with matching
`origin/main`. This resumed cut independently verified that binding before
mutation.

## Hybrid visual responsibility

The local references inspected for this cut are:

- `/home/tommy/Downloads/toadaid-pond-b2-p4a-floating-lands-reference.png`
  — SHA-256 `ab03631d9ebfda9ee7716ad134426239a247c9a16b457e443dfbd53b8a88ae52`;
- `/home/tommy/Downloads/toadaid-pond-jarvis-new-frog-concept-v1.png`
  — SHA-256 `c2cc569febb077d762ae97e0ce3fe1dbf8be149cb10b2aa1f7960bb2084f03e7`.

The floating-lands reference owns the world composition: independently placed
islands, vertical waterfalls, layered pond depth, and a larger elevated land.
The JARVIS/new-frog reference owns the luminous cyan/green science-fiction
material language and the later detailed-guide direction. Neither image is
runtime truth, and neither is committed to the repository.

P4A is an intermediate foundation, not the intended final visual. Its current
HTML/SVG frog remains a temporary decorative guide and not a live invocation.
P4B owns the detailed guide, high-fidelity local island/world assets, refined
water and waterfall materials, premium atmosphere and lighting, and final
performance polish.

## Local runtime and scene

Three.js is pinned exactly at `0.185.1` as a development dependency. The
fixed, argument-free `scripts/vendor-three.mjs` copies the browser module
closure required by Three.js 0.185.1 — `node_modules/three/build/three.core.js`,
`node_modules/three/build/three.module.js` — plus its upstream `LICENSE` into
`ui/vendor/`. `ui/pond-world.js` imports only that local module. There is no
CDN, remote import, localhost server, texture loader, model loader, or network
fallback.

The deterministic scene uses one seeded layout of six independent island
groups across foreground, middle, and background depth. One large elevated
background island anchors the composition. Modest cylinder/cone geometry forms
rock undersides, green rims, luminous towers and spires. Five waterfall systems
update fixed particle buffers, while a small shader animates the local pond
plane. A bounded point field, moon, exponential fog, and four paired
holographic rings supply atmospheric depth.

The renderer uses antialiasing and transparency, clamps device pixel ratio to
1.5, and enables no shadows. The cut stays beneath its ceilings: six islands,
five waterfalls, 1,050 star points, three accent point lights, modest geometry,
no postprocessing, no physics, and no external assets. Pointer parallax is
bounded to a visually small camera offset with no orbit control, zoom, or
selection.

`prefers-reduced-motion` reduces world motion to four percent and recenters
parallax. Rendering pauses while the document is hidden and resumes through
the same animation loop. Resize work updates only renderer dimensions and
camera projection. On renderer construction or WebGL-context failure, the
canvas is hidden and the accessible shell shows `3D world unavailable on this
host.` No image or network fallback is attempted.

## Presentation and authority ceiling

The exact static fixture remains accessible outside the canvas:

```text
Principal A
Project X
Project
Specialist Agent A
Authority NONE
```

Live tools, network, persistence, delivery, approval recording, and execution
remain visibly OFF. Voice and message controls remain disabled. The right panel
continues to identify itself as `STATIC FIXTURE`.

This cut adds no canonical world state, identity, membership, admission,
release, grant, approval, routing, agent invocation, tool access, persistence,
network capability, wallet/signing/trading, mutation, or deployment. A moving
projection is still a projection; visual presence does not establish an agent
or authority. The desktop proof is Linux-only and claims no Windows, macOS,
Android, iOS, or accelerated-rendering proof.

Activation: INCLUDED — local real-time visual rendering only.

Live capability activation: NOT_INCLUDED.
