# Stage B2-P4B-P1 — Organic world refinement

## Binding

Parent commit: `993ab0e92e84b5374f0ce7f26519cbc0aed61558`

Parent tree: `4b5c4dcbf6c8e394e7ad6cc50cb6d092f41968b9`

Feature branch: `feat/stage-b2-p4b-high-fidelity-world-refinement`

P4B implementation-time final-goal visual reference:

`/home/tommy/Downloads/toadaid-pond-p4b-final-goal-reference.png`

SHA-256: `8aa49f1206ab294f770c5761a752d89e5813e9a2c12b01e585709ebebac111ef`

The final-goal PNG is visual intent only. It is not runtime truth, is not copied
into the repository by this cut, and is not used wholesale as a background.

## Purpose

P4B-P1 improves the existing local Three.js world without admitting any new
binary model or texture asset. The first visual defect addressed is the angular,
tooth-like floating-island underside created by the P4A low-segment tapered
cylinders.

This subcut deliberately addresses the world before the detailed frog guide.

## Changes

- replace the angular island underside primitive with deterministic 24-segment
  multi-ring organic geometry that tapers smoothly toward a bounded lower tip;
- raise rim and garden radial segmentation from 12 to 24;
- replace point-only waterfalls with animated translucent waterfall ribbons plus
  a smaller bounded spray particle layer;
- enrich the pond shader with slower broad waves, center ripples, cross-wave
  highlights, and a deeper cyan/teal response;
- add 220 bounded atmospheric motes for foreground/midground depth;
- slightly relax fog density and increase tone-mapping exposure;
- preserve the six existing independently moving land groups, moon, stars,
  holographic rings, bounded pointer parallax, reduced-motion behavior, hidden
  document pause, fallback, and disposal lifecycle.

## Performance boundaries

P4B-P1 remains comfortably inside the P4A ceilings:

- six floating-land groups;
- five waterfall ribbons;
- five spray systems, 58 points each;
- 1,050 star points;
- 220 atmospheric mote points;
- no shadows;
- no postprocessing;
- no physics;
- no texture/model loader;
- no external runtime asset;
- DPR remains clamped to 1.5;
- no per-frame geometry creation.

## P4B-P1R1 visual silhouette repair

The first native P4B-P1 proof established a healthy runtime and materially
improved water and waterfall presentation, but visual review still found two
presentation defects: the island undersides retained a pointed inverted-cone
read, and the repeated cone landmarks on top read as rows of sharp teeth.

P4B-P1R1 therefore changes only those silhouettes:

- the underside profile now uses seven broad, laterally drifting contour rings
  and a shallow terminal cap instead of a long taper toward a sharp tip;
- repeated cylinder-plus-cone landmarks are removed entirely;
- most surface landmarks become low rounded grove/stone-bloom clusters;
- only a bounded subset of islands receive one rounded luminous beacon with a
  spherical lantern and holographic halo;
- the working P4B-P1 water shader, ribbon waterfalls, spray particles, motes,
  six-island layout, motion, lifecycle, shell, and governance are unchanged.

This is a presentation-only repair. It does not admit a model, texture, binary
asset, live world state, agent activation, or authority.

## Deferred P4B work

The detailed frog guide is deferred to a later P4B subcut. Any GLB/GLTF, PNG,
WebP, KTX2, texture, or other binary visual asset remains inadmissible until a
separate provenance, license, exact-hash, size, and performance review is
completed.

## Authority ceiling

Activation: INCLUDED — local real-time visual rendering only.

Live capability activation: NOT_INCLUDED.

This cut does not add live Tobyworld state, network access, persistence, wallet
or signing, deed discovery, tool execution, agent invocation, approval,
publishing, delivery, or other authority.
