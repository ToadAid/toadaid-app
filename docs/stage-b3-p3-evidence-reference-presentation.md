# Stage B3-P3 — Evidence-reference presentation

## Binding

Parent commit: `eb8a44e199098dab88c19561d7a049eac69e95e6`

Feature branch: `feat/stage-b3-p3-evidence-reference-presentation`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Extend the inert B3 inspector with one bounded presentation of the existing A7
specialist-manifest evidence reference carried by the featured descriptor's A4
projection envelope.

The cut makes the exact reference and its `reference_only_not_verified` posture
legible while keeping the evidence body absent and verification, attestation,
approval, admission, and authority unestablished.

## Explicit non-goals

- no evidence lookup, retrieval, body rendering, parsing, verification,
  comparison, scoring, acceptance, or persistence;
- no new evidence, claim, attestation, signature, receipt, or proof record;
- no issuer, verifier, validity, expiry, supersession, revocation, reputation,
  or cross-scope release evaluation;
- no routing, selection, delivery, dispatch, invocation, admission, membership,
  capability, Grant, approval, mutation, or execution;
- no Bridge, MCP, provider, network, wallet, signing, trading, publication,
  deployment, or runtime activation.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-b3-p3-evidence-reference-presentation.md`
- `ui/pond-desktop.css`
- `ui/pond-desktop.html`

Runtime surface: the existing static HTML/CSS inspector only.

Network scope: package installation and GitHub repository workflow operations
only. The Pond runtime receives no network capability.

## Canonical and local dependencies

Canonical Derived Evidence law owns evidence grounding and projection truth.
Canonical Evidence and Activation law keeps evidence separate from activation.
Canonical Attestation and Evidence Exchange law keeps evidence, receipt,
attestation, verification, and authority distinct. Verification Applicability
law prevents a reference or hardcoded proof identifier from becoming a
performed binding comparison.

The displayed reference is a static transcription of the single entry in
`specialistEvidence`, which is carried by
`stageA7SpecialistDescriptor.projection.evidenceReferences`:

- evidence reference: `evidence:fixture:stage-a7:specialist-manifest`;
- posture: `reference_only_not_verified`.

Inspectable data attributes bind the instrument to that reference and posture.
They are fixture presentation provenance, not evidence verification or
canonical-current proof.

## Trusted sources, channels, and precedence

Canonical architecture at the bound commit governs ecosystem law. A4 owns the
local evidence-reference envelope shape. A7 owns the specialist fixture value.
The B3 renderer may transcribe the opaque reference and exact posture only. It
has no evidence channel, verifier channel, attestation channel, approval
channel, or authority-bearing input.

No displayed label may override the underlying fixture, infer evidence-body
content, or establish a stronger claim than reference presence.

## Authority ceiling and forbidden capabilities

Authority: `none`.

The instrument may display one static opaque reference and its declared fixture
posture. It cannot dereference, verify, attest, approve, admit, grant, route,
invoke, mutate, or execute.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact fixture-to-markup, changed-path, and whitespace review;
- native Linux full-profile visual observation for hierarchy, wrapping,
  inspector scrolling, and responsive single-column fallback when a browser or
  desktop observation surface is available.

Visual observation is qualitative evidence only. It is not evidence lookup,
verification, attestation, authority, or cross-platform proof.

## Activation

Static fixture evidence-reference presentation: **INCLUDED**.

Evidence access, verification, attestation, receipt, routing, or consequence
activation: **NOT_INCLUDED**.
