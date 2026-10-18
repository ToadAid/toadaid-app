# ToadAid Pond

**Product:** ToadAid Pond
**Repository:** `ToadAid/toadaid-app`
**Status:** Public Work in Progress
**Activation:** `NOT_INCLUDED`

ToadAid Pond is the governed, scope-aware front door through which humans understand, coordinate, and propose across ToadAid agents without transferring sovereignty or manufacturing authority.

Pond is one coherent product, not one universal agent, shared brain, or memory pool. The active scope matters: `personal`, `shared`, `project`, and `public` remain distinct, and personal memory is private by default. Selecting a scope establishes presentation context only; it does not establish membership, agent admission, cross-scope release, a grant, approval, or authority.

## Agent directions

- **Human principal:** the sovereign human.
- **Personal agent:** ToadAid Living Agent is the current principal-bound continuity direction.
- **Community and project agents:** future agents bound to explicit shared or project scopes; they do not inherit member personal memory.
- **Specialist agents:** bounded domain directions including ToadAid Coder, ToadAid Zora Agent, ToadAid Trader, lore/oracle specialists, and future governed specialists.
- **Remote external agents:** separately identified and admitted, with no local authority by default.
- **Services and tools:** capability exposure that may not be an autonomous agent.

Frog-to-Toad is not an active specialist and is not an alias for Living Agent. It would return only as a future, separately defined specialist if a genuinely distinct lifecycle or transformation job emerges.

## Architecture placement

```text
ToadAid Architecture
  canonical cross-ecosystem law
        |
        v
Mirror Core
  reusable governed substrate and shared foundations
        |
        +------------------------------+
        v                              v
ToadAid Pond                    Mirror Desktop Bridge
  front door, projections, UI     bounded local trusted-channel /
                                  capability boundary where assigned
        |
        v
Living Agent / community agent / project agent / specialists
  separately governed continuity and domain implementations
```

- [`ToadAid/toadaid-architecture`](https://github.com/ToadAid/toadaid-architecture) owns canonical ecosystem law.
- **Mirror Core** provides reusable governed substrate for shared governance, provenance, continuity and memory foundations, policy, evidence, and agent foundations where canonical architecture assigns those responsibilities.
- **Pond** owns host-neutral projections, view state, UI semantics, and presentation. Pond does not duplicate Mirror Core governance semantics or own canonical membership, admission, grant, revocation, release, routing, or authority mechanics.
- **Mirror Desktop Bridge** is a bounded local capability and trusted-channel boundary where assigned. It does not invent ecosystem law.
- **Living Agent, community agents, project agents, and specialists** own separately governed continuity or domain behavior in their respective repositories and runtimes.
- **ChatGPT, Mirror Desktop, loopback, and specialist-native interfaces** may become conforming surfaces over the same governed truth; they are not separate authority systems.

Mirror Core is central reusable substrate, but it does not automatically own every future Social Control Plane runtime, database, membership store, routing service, admission store, or grant store. Canonical architecture intentionally defers several implementation-ownership decisions.

## Current state

The implemented foundation includes:

- **Stage 0B-P1:** host-neutral Pond front-agent projection;
- **Stage 0B-P2:** singular scope-context invariants, merged at `c02caab2d95fd9ae0741cbe29d4e53bec498f860`.
- **Stage D-P25 (merged as PR #91; stage doc:
  `docs/stage-d-p25-generic-agent-front-face.md`):** a transport-neutral generic-agent
  front-face fixture seam that presents Agent0, Agent1, and a non-ToadAid
  community agent through one selector. Selection is presentation-only;
  connection, admission acceptance, delivery, invocation, credentials, and
  add-on activation remain absent.
- **Stage D-P26 (stage doc:** `docs/stage-d-p26-agents-shell-view.md`**):**
  the desktop Agents tab is a live read-only view; the Stage D agent panels
  present there and the Home context panel keeps a slim posture summary.
  Presentation-only shell reorganization; no admission, connection, agent
  reply, or voice activation.
- **Stage D-P27 (stage doc:** `docs/stage-d-p27-readable-typography.md`**):**
  the desktop's microfilm typography lifts onto a readable ladder (floor
  10px, body 11–12px, display scale preserved) across the whole shell.
  Presentation-only CSS cut; no module, contract, or panel change.
- **Stage D-P28 (stage doc:** `docs/stage-d-p28-chat-surface.md`**):** the
  footer voice dock reads as a chat: one bubble transcript over the frozen
  lane postures (compositions as bubbles with honest posture rows beneath),
  the seven debug lane stacks collapsed into default-closed details. The
  module records nothing, mutates no lane, and owns no affordances.
  Presentation-only projection cut; no admission, channel, agent reply, or
  voice activation.
- **Stage D-P29 (stage doc:** `docs/stage-d-p29-home-posture-block.md`**):**
  the Home side panel's A7/A8/B3/C fixture stock slims into one coherent
  posture block — a one-line honest roster per fixture projection with the
  full established panels collapsed into two default-closed details.
  Presentation-only markup+CSS cut; no admission, channel, agent reply, or
  voice activation.
- **Stage D-P30 (stage doc:** `docs/stage-d-p30-presentation-touch-ups.md`**):**
  touch-ups from the live click-through: the floating "Active context"
  scope beacon leaves the Home stage (the scope facts stay in the context
  panel and topbar), and the Agents stage lifts off the 10px micro floor
  onto the 12px reading rung with its affordances properly styled.
  Presentation-only cut; no admission, channel, agent reply, or voice
  activation.
- **Stage D-P31 (stage doc:** `docs/stage-d-p31-chat-surface-room.md`**):**
  follow-up from the click-through verdict "the chat surface is not there
  yet": the Home voice dock folds to two columns (a centered voice rail,
  then the wide chat column), the bubble transcript reads as a bordered
  panel even when nothing is composed (218‑320px scroll region with chrome,
  meta text lifted to the 11px rung), and the shell's voice row stops
  clipping the composer (`auto` instead of a one-line bar, so the full chat
  surface is presentable by scrolling).
  Presentation-only cut; no admission, channel, agent reply, or voice
  activation.
- **Stage D-P32 (stage doc:**
  `docs/stage-d-p32-agent-docking-lane.md`**):** the docking bay — a fifth
  additive panel on the Agents view presenting the canonical admission
  ceremony over two fixture docking briefs (Community Scout, Lore Mason):
  the identity evidence they present (`declared, not verified`), the six
  canonical admission-sequence steps (`declared, not performed`), the
  requested scope relationship and declared capabilities (`declared, not
  granted`), and the standing walls (who may admit, no decision here, the
  unadmitted-sender standing-intake refusal as the default, the profile
  interlock, the untouched consequence path, revocation/e-stop dominance).
  Nothing docks — no listener, no intake channel, no admission backend, no
  docking operation control; presentation only.
- **Lane 3 plan (plan doc:**
  `docs/lane-3-trusted-connection-provider-plan.md`**):** the docs-only plan
  for the trusted connection-provider that would own admitted-agent intake
  and feed the D-P25 seam with real projections — the provider lives
  OUTSIDE this repository (Mirror Desktop Bridge is the Wave-2 hypothesis
  for human reconciliation; Pond must never hardcode it), admission-first
  intake, typed trusted channels with stated precedence, delivery without
  consequence, and every canonical deferral surfaced as an open
  architecture question rather than silently taken.
  Planning cut; no code, no activation, authority none.
- **L3-P1 plan (plan doc:**
  `docs/lane-3-p1-admission-posture-projection-plan.md`**):** the docs-only
  plan for Pond's first consumption stage — once the assigned provider
  (ADR-0001, Bridge) exists, the D-P25/D-P32 seam accepts real projections
  through one additive host-identified source kind and presents live
  admission posture against the frozen vocabulary, with real projections
  arriving only as committed records (Pond never opens a transport) and
  every ceiling still all-false. Gated on the provider boundary; display
  only, provider-neutral, no admission decision in Pond.
  Planning cut; no code, no activation, authority none.

The implementation remains fixture/contract foundation only:

- exactly one active scope context;
- membership, agent admission, cross-scope release, and delegated authority are `not_established`;
- projected capability effects are limited to `read` and `proposal`;
- all Stage 0B effect gates, including execution, are disabled.

The repository does not currently provide or activate:

- live specialist invocation or dynamic plugin loading;
- routing or dispatch;
- network access or persistence;
- Bridge or MCP connectivity;
- authentication;
- approval recording;
- repository mutation;
- wallet access, signing, or trading;
- autonomous execution;
- deployment.

The D-P25 seam is intentionally a replaceable frontend projection source, not
a transport API. A future trusted connection provider may supply equivalent
projections only after its own governed channel and admission implementation
are established. Pond will continue to consume host-neutral projections rather
than hardcode Trading Desk, Agent0, or Mirror Desktop Bridge.

Public source visibility does not create public authority or public access to private state. The `"private": true` field in `package.json` prevents accidental npm publication; it does not describe this GitHub repository's visibility.

## Contributor orientation

Read [`AGENTS.md`](AGENTS.md) first. [`BUILD_LIST.md`](BUILD_LIST.md) records current repository truth, permanent boundaries, and the evidence-bounded roadmap. Canonical ecosystem semantics live in [`ToadAid/toadaid-architecture`](https://github.com/ToadAid/toadaid-architecture); local Pond code and documentation project those semantics and must not redefine them.

## Validation

```bash
npm ci --ignore-scripts --no-audit --no-fund
npm run typecheck
npm run test:stage-d-p25
npm run test:stage-d-p27
npm run test:stage-d-p28
npm run test:stage-d-p29
npm run test:stage-d-p30
npm run test:stage-d-p31
npm run test:stage-d-p32
npm run stage-d:render-generic-agent-front-face -- --check
npm run stage-d:render-agent-docking-lane -- --check
git diff --check
```

There is no application start command or production deployment in this cut.

## License

ToadAid Pond is licensed under the [Apache License 2.0](LICENSE).
