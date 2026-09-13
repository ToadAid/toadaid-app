# Stage B3-P2 — Projection source, freshness, and refusal presentation

## Binding

Parent commit: `d934240f95cc4150011fcd46ba4a27cab94eb0a4`

Feature branch: `feat/stage-b3-p2-projection-state-presentation`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Extend the inert B3 inspector with one bounded presentation of the featured A7
specialist descriptor's A4 source and freshness posture beside the existing A8
stale-descriptor route-candidate refusal.

The cut makes the fixture boundary and fail-closed refusal legible without
performing a current-state lookup, freshness evaluation, route selection, or
delivery decision.

## Explicit non-goals

- no live projection source, freshness clock, refresh, canonical lookup, or
  binding comparison;
- no new descriptor, observation, refusal, evidence, or route-candidate fact;
- no evidence-reference inspection, verification, attestation, or receipt
  presentation;
- no routing, selection, delivery, dispatch, invocation, admission, membership,
  Release, capability, Grant, approval, mutation, or execution;
- no Bridge, MCP, provider, network, persistence, wallet, signing, trading,
  publication, deployment, or runtime activation.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-b3-p2-projection-state-presentation.md`
- `ui/pond-desktop.css`
- `ui/pond-desktop.html`

Runtime surface: the existing static HTML/CSS inspector only.

Network scope: package installation and GitHub repository workflow operations
only. The Pond runtime receives no network capability.

## Canonical and local dependencies

Canonical derived-evidence law owns the distinction between a projection and
canonical current state. Canonical failure taxonomy owns
`insufficient_evidence`. Scope law owns the source-scope, audience, and Release
boundaries. Agent Identity and Specialist Admission law preserves identity,
admission, capability, and authority as separate facts.

The displayed values are a static transcription of existing fixtures:

- `stageA7SpecialistDescriptor.projection` supplies the fixture source,
  Project X source scope, non-authoritative trust posture, not-established
  audience, no-release disclosure posture, fixture-declared `fresh`
  observation, `applicable` applicability, null canonical outcome, and
  `fixture-a7-specialist-r1` revision;
- `stageA8StaleDescriptorRefusal` supplies the refused assessment,
  `target_descriptor_not_current` condition, and canonical
  `insufficient_evidence` outcome over `stageA7StaleSpecialistDescriptor`.

Inspectable data attributes bind the instrument to those fixture references.
They are presentation provenance, not canonical-current proof.

## Trusted sources and precedence

Canonical architecture at the bound commit governs ecosystem law. A4 owns the
local projection envelope and freshness vocabulary. A7 owns the descriptor
fixture. A8 owns the inert route-candidate refusal fixture. The B3 renderer may
present those facts but cannot override, recompute, refresh, or authorize them.

## Authority ceiling and forbidden capabilities

Authority: `none`.

The instrument may display static fixture labels only. It cannot resolve a
canonical source, determine current freshness, select or deliver a route,
verify evidence, admit or invoke an agent, record a decision, or execute an
effect.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact changed-path and whitespace review;
- native Linux full-profile visual observation for hierarchy, legibility,
  inspector scrolling, and responsive single-column fallback.

The native observation is qualitative Linux evidence only. It is not proof of
live freshness, canonical state, route behavior, or cross-platform layout.

## Activation

Static fixture source/freshness/refusal presentation: **INCLUDED**.

Live truth integration, routing, evidence, receipt, or consequence activation:
**NOT_INCLUDED**.
