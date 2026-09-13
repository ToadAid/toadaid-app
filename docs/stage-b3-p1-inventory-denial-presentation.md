# Stage B3-P1 — Inventory and denial presentation

## Binding

Parent commit: `53724d090b3c1c39f22955f1f3b519e06c680005`

Feature branch: `feat/stage-b3-p1-inventory-denial-presentation`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Begin B3 with one inert, accessible inspector instrument that presents the
already-governed A7 primary descriptor inventory and makes the featured
specialist fixture's declared-capability and explicit-denial posture legible.

This cut closes the completed B2 visual-refinement stage and does not create a
new descriptor, admission decision, capability, Grant, or authority fact.

## Explicit non-goals

- no live inventory, registry, directory, discovery, selection, invocation, or
  agent presence;
- no claim that the A7 specialist descriptor is the B1 active-context agent;
- no source-freshness, refusal, evidence, attestation, or receipt presentation;
- no admission, membership, Release, capability, Grant, approval, or current
  authority evaluation;
- no Bridge, MCP, provider, network, persistence, delivery, execution,
  repository mutation, wallet, signing, trading, publication, or deployment.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-b3-p1-inventory-denial-presentation.md`
- `ui/pond-desktop.css`
- `ui/pond-desktop.html`

Runtime surface: the existing static HTML/CSS inspector only.

Network scope: package installation and GitHub repository workflow operations
only. The Pond runtime receives no network capability.

## Canonical and local dependencies

Canonical Agent Identity and Specialist Admission law owns specialist profile,
inventory, admission, and explicit-denial meaning. Canonical Capability /
Authority law owns the distinction between declared, available, granted, and
effective capability. Scope law preserves the source scope and audience.

The displayed fixture content is a static transcription of
`stageA7PrimaryDescriptorMatrix` and `stageA7SpecialistDescriptor` from
`src/fixtures/stage-a7-agent-descriptors.ts`:

- six primary profiles: personal, community, project, specialist, remote
  external, and service/tool;
- specialist domain: bounded repository analysis;
- declared capabilities: Repository analysis and Patch proposal, each
  `declared_not_granted`;
- exact specialist denials: no execution authority, no approval authority, no
  Grant authority, declared capability not granted, and no repository mutation
  authority.

The instrument binds its fixture source, featured A7 descriptor subject, and
authority-none posture through inspectable data attributes. Those attributes
are fixture provenance for presentation inspection, not runtime or
canonical-current proof.

## Presentation boundary

The A7 descriptor inventory remains separate from the B1 active context. The
featured specialist fixture is not represented as selected, invoked, current,
or identical to `fixture:agent-specialist-a`.

The instrument uses semantic headings and lists and has no interactive
controls, event handlers, transport, or state. At wide widths it remains in the
scrollable Context and Safety inspector; at medium widths it spans beneath the
existing safety columns; at narrow widths it follows normal document flow.

## Trusted sources and precedence

Canonical architecture at the bound commit governs ecosystem law. A7 owns the
local fixture descriptor vocabulary and exact inventory values. B1 continues
to own active-context and static-gate presentation. The new instrument cannot
override either source or infer an authority relationship between them.

## Authority ceiling

Authority: `none`.

Visibility is not admission. Declared capability is not granted capability.
The instrument can present fixture labels and denials only; it cannot discover,
select, route to, message, invoke, admit, grant, approve, or execute an agent or
service.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact changed-path and whitespace review;
- native Linux full-profile visual observation for hierarchy, legibility,
  scrolling, and collision with the existing safety panel.

The native observation is qualitative Linux evidence only. It is not proof of
live inventory, source freshness, cross-platform layout, or runtime authority.

## Activation

Static fixture inventory/denial presentation: **INCLUDED**.

Live agent, capability, host integration, or consequence activation:
**NOT_INCLUDED**.
