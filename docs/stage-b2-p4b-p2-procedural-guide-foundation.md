# Stage B2-P4B-P2 — Procedural 3D guide foundation

## Binding

Parent commit: `0dba29db3b4f3b3dc3e265417ca7430b38376063`

Parent tree: `5970153331335d61b1915431a0f7c42a040266f5`

Feature branch: `feat/stage-b2-p4b-p2-detailed-guide-foundation`

P4B final-goal visual reference:

`/home/tommy/Downloads/toadaid-pond-p4b-final-goal-reference.png`

SHA-256: `8aa49f1206ab294f770c5761a752d89e5813e9a2c12b01e585709ebebac111ef`

The final-goal PNG is visual intent only. It is not repository runtime truth and
is not copied into this cut.

## Purpose

P4B-P2 begins detailed guide refinement without admitting a binary model,
texture, or other external visual asset.

The flat SVG frog is removed from the HTML presentation. A bounded procedural
Three.js frog guide is rendered by the already-admitted local Three.js runtime.

The guide remains presentation only. It is not an AgentId authority source, a
live agent process, an invocation surface, a grant, an approval, or execution.

## Procedural guide composition

The first 3D guide foundation uses only local deterministic geometry/materials:

- tapered 24-segment robe body plus separate front robe panel;
- rounded shoulder mantle;
- scaled frog head and muzzle volumes;
- two raised eye assemblies with pupils and bounded catchlights;
- a static curved mouth built from one quadratic curve and TubeGeometry;
- two robed arms with rounded hands;
- luminous collar, chest sigil, and sigil core;
- two lightweight holographic halo rings;
- one bounded local guide accent light.

No model loader, texture loader, image texture, font asset, physics, shadow, or
postprocessing path is introduced.

## Motion and accessibility

Guide motion is deliberately subtle:

- bounded vertical presentation drift;
- slight head orientation drift;
- slight eye-root orientation drift;
- slow counter-rotating halo rings.

The existing global reduced-motion scale applies to this motion, hidden-document
pause remains intact, and existing WebGL fallback behavior is unchanged.

The HTML retains the semantic specialist-agent identity and explicit
`not a live invocation` wording even though the visual body moves into the
Three.js canvas.

## Performance boundary

The guide adds a small fixed geometry set and one additional point light.

It adds no per-frame geometry/material allocation, no shadows, no
postprocessing, no external runtime assets, and keeps device pixel ratio
clamped to the existing 1.5 ceiling.

## Deferred P4B guide fidelity

This is not the final north-star frog.

Later asset-based refinement remains separately gated. Any GLB/GLTF, PNG,
WebP, KTX2, texture, or other binary visual asset requires explicit provenance,
license, exact hash, size, and performance admission before repository use.

## Authority ceiling

Activation: INCLUDED — local real-time visual rendering only.

Live capability activation: NOT_INCLUDED.

This cut does not add live Tobyworld state, network access, persistence,
wallet/signing, deed discovery, tools, agent invocation, approval recording,
publishing, delivery, or execution.
