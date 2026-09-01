# Stage B2-P1 — Desktop-First Static Pond Shell

**Status:** static fixture UI

**Activation:** `NOT_INCLUDED`

## Purpose

B2-P1 creates the first visible Pond shell as directly viewable, dependency-free HTML and CSS. It presents the exact Stage B1 fixture context in a calm desktop-first cockpit while remaining static, inert, accessible, and non-authoritative.

## Exact B1 dependency

The shell consumes the presentation semantics established by `docs/stage-b1-host-neutral-state-contract.md`, `src/contracts/pond-host-neutral-state.ts`, and `src/fixtures/stage-b1-host-neutral-state.ts` at canonical parent `11c21529f13ddc60921ac4e6f7410442985fe46e` (tree `1d2154ba38377073e98cb5ae062217667e133df5`). It renders only:

- fixture snapshot `fixture:snapshot-b1-001`;
- principal `fixture:principal-a`, labeled Principal A;
- project scope `fixture:scope-project-x`, labeled Project X;
- agent `fixture:agent-specialist-a`, labeled Specialist Agent A;
- host binding `none_host_neutral` and authority `none`;
- all B1 static gates as false.

The UI does not reinterpret `Snapshot` as canonical truth, `Event` as a runtime event stream, or `CommandIntent` as dispatch.

## Exact canonical architecture ref

Canonical `ToadAid/toadaid-architecture` `main` was confirmed at commit `bc7a971dfb243f0aa4417da6cef85cc56204f783`, tree `648029785b4dbe4b58d914ea19cbae7296ec6d24`. Pond remains a governed presentation front door, not an identity, relationship, release, approval, or authority owner.

## Desktop-first but host-neutral

Desktop-first describes layout priority, not runtime binding or packaging. The HTML can be viewed directly in a desktop browser, but its fixture semantics do not belong to a browser, desktop host, operating system, provider, or session. Host choice creates no principal, membership, admission, release, Grant, approval, or authority.

## Three-column shell

At comfortable desktop widths, the shell uses three regions: left navigation, a central workspace, and a Context & Safety inspector. A top context bar and bottom disabled composer span the shell. The composition is visual presentation only and contains no application runtime.

## Left navigation semantics

Home is the only current location and is a real in-page anchor marked with `aria-current="page"`. Chats, Agents, Scopes, Projects, Inbox, Footprints, Evidence, and Connections are semantic text labeled Later, not fake-working controls.

```text
navigation label != implemented feature
```

## Center workspace semantics

Pond Home presents the B1 active context, host-neutral presentation boundaries, six static false gates, and product-orientation placeholders. It fabricates no counts, events, connectivity, provider, repository, or runtime health state.

## Context & Safety inspector boundary

The inspector shows only the B1 principal, scope, scope kind, agent, host-neutral binding, authority, and static gates. It is deliberately not called a full Truth inspector. B3 owns later source, freshness, refusal, evidence, and sanitized receipt presentation.

## Disabled agent composer

The footer previews the eventual agent-composer shape with a visibly labeled disabled textarea and disabled Send button. It has no action, handler, JavaScript, endpoint, CommandIntent creation, dispatch, or delivery.

```text
disabled composer != live chat
visual affordance != capability
capability != authority
```

## Accessibility properties

The document uses `header`, labeled `nav`, `main`, `aside`, and `footer` landmarks; one `h1`; logical heading levels; a semantic current-page state; visible labels and disabled states; explicit OFF text in addition to color; strong contrast; visible `:focus-visible` styling; reasonable touch targets; and a reduced-motion media query. No click handler is attached to non-interactive content.

## Responsive behavior

CSS uses a three-column desktop grid, a two-column medium-width layout with the inspector spanning below, and a single-column narrow layout. Navigation becomes a wrapping horizontal region on small screens. No JavaScript is required for responsiveness.

## Fixture binding

The primary shell element carries exact `data-snapshot-ref`, `data-principal-ref`, `data-scope-ref`, `data-agent-ref`, and `data-authority` attributes from B1. These attributes preserve fixture identity and provenance for inspection only; they are not runtime proof or canonical-current evidence.

## No B3 freshness/evidence/receipt claims

The shell shows no source freshness, freshness timestamp, evidence count, receipt, refusal status, verified-source claim, runtime health, fake GitHub state, Bridge state, provider state, or connectivity state. Those claims require later governed truth and presentation cuts.

## No live tools or host integration

All B1 gates remain visibly OFF: live tools, network, persistence, delivery, approval recording, and execution. There is no provider, Bridge, MCP, ChatGPT Apps SDK, loopback, browser API, local storage, service worker, route, endpoint, or host adapter.

## No native desktop packaging

Desktop presentation does not imply Electron, Tauri, a native bundle, installer, background process, local server, or operating-system capability. The artifact is plain HTML and CSS.

## Presentation and release

The shell preserves the B1 source-scope posture and performs no audience change or cross-scope release.

```text
presentation != release
```

## Explicit non-goals

B2-P1 adds no JavaScript, framework, dependency, live chat, agent invocation, event stream, state reducer, routing, dispatch, delivery, authentication, membership/admission mutation, release, Grant, approval, execution, network, persistence, repository integration, provider status, evidence or receipt presentation, native packaging, deployment, or activation.

## Activation

`NOT_INCLUDED`. Opening the static file presents an inert fixture only.
