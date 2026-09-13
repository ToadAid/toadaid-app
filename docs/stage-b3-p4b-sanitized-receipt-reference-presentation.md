# Stage B3-P4B — Sanitized receipt-reference presentation

## Binding

Parent commit: `a1a02b56f18a236b47ed30824506d751df926382`

Feature branch:
`feat/stage-b3-p4b-sanitized-receipt-reference-presentation`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Complete the planned B3 receipt-reference presentation by rendering the bounded
B3-P4A fixture in the existing inert Context and Safety inspector.

The instrument presents only the opaque fixture reference, its A4-preserved
source scope, structural no-body posture, unevaluated receipt state,
unperformed verification and applicability evaluation, unestablished
acceptance, and authority-none posture.

## Explicit non-goals

- no receipt lookup, retrieval, refresh, body rendering, parsing, verification,
  proof binding, applicability evaluation, acceptance, correction,
  supersession, or revocation;
- no new receipt, ReceiptId format, receipt schema, claim, result, approval
  record, signature, persistence, storage owner, or sanitization service;
- no interaction, control, route, selection, delivery, dispatch, invocation,
  capability, Grant, approval, mutation, or execution;
- no Bridge, MCP, provider, network, wallet, signing, trading, publication,
  deployment, or runtime activation.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-b3-p4b-sanitized-receipt-reference-presentation.md`
- `ui/pond-desktop.css`
- `ui/pond-desktop.html`

Runtime surface: the existing static HTML/CSS inspector only.

Network scope: package installation and GitHub repository workflow operations
only. The Pond runtime receives no network capability.

## Canonical and local dependencies

Canonical receipt/evidence, scope, verification, and authority law remains
bound at the architecture commit above. B3-P4A owns the exact host-neutral
Pond-local reference projection and deterministic fixture rendered here. A4
owns its source-scope and projection posture.

The displayed values are a static transcription of
`stageB3P4ASanitizedReceiptReference`:

- receipt reference: `receipt:fixture:stage-b3-p4a:reference-001`;
- source scope: `scope:fixture:stage-a7:project-x`;
- sanitization posture:
  `structurally_bounded_reference_only_no_receipt_body`;
- receipt state: `not_evaluated`;
- verification: `not_performed`;
- applicability evaluation: `not_performed`;
- acceptance: `not_established`;
- authority: `none`.

Inspectable data attributes bind the instrument to those exact fixture values.
They are presentation provenance, not a live fixture import, receipt truth, or
performed evaluation.

## Presentation boundary

The receipt instrument is a semantic, non-interactive section nested after the
existing evidence-reference instrument. It contains no receipt body, link,
button, event handler, transport, or state.

At wide widths it remains inside the scrollable inspector. At medium widths the
inspector spans beneath the existing safety columns. At narrow widths the fact
grid collapses to one column in normal document flow.

## Trusted sources, channels, and precedence

Canonical architecture governs receipt/evidence meaning. P4A owns the local
projection vocabulary and fixture. The B3 renderer may transcribe those values
only; it cannot inspect a receipt, author a stronger posture, or override the
fixture.

There is no receipt source channel, body channel, verifier channel, approval
channel, or authority-bearing channel in this cut.

## Authority ceiling and forbidden capabilities

Authority: `none`.

The instrument can display static fixture labels only. It cannot retrieve,
reveal, verify, accept, correct, route, invoke, grant, approve, mutate, execute,
or activate anything.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact fixture-to-markup, changed-path, and whitespace review;
- native Linux full-profile visual observation for hierarchy, wrapping,
  inspector scrolling, and responsive single-column fallback when a browser or
  desktop observation surface is available.

Visual observation is qualitative evidence only. It is not receipt access,
verification, applicability, acceptance, authority, or cross-platform proof.

## Activation

Static fixture receipt-reference presentation: **INCLUDED**.

Receipt access, verification, persistence, host integration, or consequence
activation: **NOT_INCLUDED**.
