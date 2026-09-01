# Stage B2-P2 — JARVIS / New-Age Pond Static Visual Cut

**Status:** static visual and accessibility refinement

**Activation:** `NOT_INCLUDED`

## Exact bindings

This cut is based on canonical `ToadAid/toadaid-app` parent commit `4f57d13f373ad1c28edb59667e06b122df598ff8`, tree `9b5e2465afe1ab2c73ac28fadd6fd5382ad96866`.

Canonical `ToadAid/toadaid-architecture` `main` was confirmed at commit `bc7a971dfb243f0aa4417da6cef85cc56204f783`, tree `648029785b4dbe4b58d914ea19cbae7296ec6d24`.

The human-approved local design reference was inspected at:

```text
/home/tommy/Downloads/toadaid-pond-jarvis-new-frog-concept-v1.png
```

The image is a design reference only. It is not canonical runtime truth, is not copied into this repository, and does not establish a current Tobyworld, principal binding, world membership, voice runtime, agent runtime, wallet, provider, Bridge, host, or connected-system state.

## Purpose and visual composition

B2-P2 moves the dependency-free B2-P1 shell toward a cinematic spatial Pond using HTML, inline decorative SVG, and CSS only. The composition includes:

- a luminous POND and lotus identity;
- a dark cyan/green holographic pond environment;
- a central lily-pad stage and static specialist-agent presence;
- a vertical navigation rail with Home as the only current location;
- a holographic right-side fixture context panel;
- a large disabled voice affordance;
- the exact tagline `EXPLORE · LEARN · PROPOSE`.

The spatial frog/guide silhouette is decorative. Its adjacent accessible label is `Static specialist-agent presence`, and the presentation explicitly says that it is not a live invocation.

## Navigation boundary

Home is the only active anchor and carries `aria-current="page"`. Worlds, Agents, Scopes, Voice, and Footprints are visibly marked Later and remain non-interactive. Projects, Inbox, Evidence, and Connections remain lower-rail orientation labels for later stages.

```text
navigation label != implemented feature
world visualization != membership
```

## Exact B1 fixture identity

The shell preserves the exact B1 binding:

```text
snapshot   fixture:snapshot-b1-001
principal  fixture:principal-a       Principal A
scope      fixture:scope-project-x   Project X
scope type project                   Project
agent      fixture:agent-specialist-a Specialist Agent A
authority  none                      NONE
```

All six static B1 gates remain visibly OFF: live tools, network, persistence, delivery, approval recording, and execution. The visual cut does not modify the B1 contract or fixture.

## Right context panel

The right panel presents only B1 fixture context and static gates. It does not claim B3 freshness, receipts, evidence counts, verified sources, runtime health, or connectivity. Its holographic appearance is presentation, not a truth or authority signal.

## Disabled voice and composer

The footer presents `SPEAK TO POND` beside a disabled microphone and immediately states `Voice is not active in this static stage.` The message textarea and Send button also remain disabled. There is no recording, Web Audio, browser permission request, JavaScript, endpoint, dispatch, delivery, or agent invocation.

```text
voice affordance != recording
disabled composer != live chat
spatial agent presence != live agent invocation
```

## Accessibility and responsive behavior

The document preserves one `h1`, semantic `header`, labeled `nav`, `main`, `aside`, and `footer` landmarks, logical headings, visible labels, explicit disabled controls, text-based CURRENT/LATER and OFF states, and visible `:focus-visible` treatment. Decorative holographic layers and the guide illustration are hidden from assistive technology. Text remains legible independently of glow and color.

Wide screens use the rail / spatial stage / context panel composition. Medium widths move the context panel below the stage. Narrow screens use a horizontal navigation strip and single-column content. `prefers-reduced-motion` remains present even though this static cut adds no required motion.

## Runtime and authority boundary

This cut adds no runtime 3D, canvas, WebGL, Three.js, JavaScript, live voice, live chat, native desktop host, host adapter, tools, network, persistence, delivery, approval recording, execution, or deployment.

The explicit laws are:

```text
visual affordance != capability
capability != authority
voice affordance != recording
spatial agent presence != live agent invocation
world visualization != membership
presentation != release
```

## Next cut

B2-P3 is the launchable desktop host seam. It will choose and prove a minimal desktop host for this existing static shell while preserving host-neutral state semantics. Merely adding a host will not enable tools, network, persistence, agent invocation, or authority.

**Activation:** `NOT_INCLUDED`
