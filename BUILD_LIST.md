# ToadAid Pond Build List

## Pond North Stars

1. **Humans remain sovereign.** Agents may possess initiative; they never possess sovereignty.
2. **Pond is the front door, not the authority.** It helps humans understand, coordinate, and propose; it cannot manufacture permission.
3. **Scopes remain sovereign and distinct.** `personal != shared != project != public`. Shared and project state own only explicitly admitted state; membership never exposes personal memory.
4. **Relationships do not collapse.** Identity, membership, admission, visibility, capability, grant, approval, routing, and execution remain distinct governed facts.
5. **Projection is not authority.** Pond shows sourced, scoped, versioned, freshness-bounded state. Stale, missing, unknown, or conflicting authority-relevant projections fail closed.
6. **Coordination and consequence remain separate.** Messages, routes, proposals, attestations, receipts, or approvals do not themselves authorize execution. Activation advances only through separately proven boundaries.
7. **One governed truth may support many conforming surfaces.** No host may invent identity, scope, policy, or authority semantics. Public code and open law never make private memory, credentials, trust state, or authority public.

> ToadAid Pond is the governed, scope-aware front door through which humans understand, coordinate, and propose across ToadAid agents without transferring sovereignty or manufacturing authority.

Permanent presentation law:

> Copying, summarizing, embedding, indexing, routing, or displaying information never changes its source scope or audience.

## Ecosystem placement

```text
ToadAid Architecture
  canonical ecosystem law

Mirror Core
  reusable governed substrate and shared foundations

ToadAid Pond
  host-neutral front door and bounded projections

Mirror Desktop Bridge
  bounded local trusted-channel and capability boundary where assigned

Living / community / project / specialist agents
  separately governed actors and domain implementations
```

Pond must reuse governed substrate and must not reimplement Mirror Core governance semantics. Deferred Social Control Plane implementation ownership must not be assigned to Mirror Core, Pond, Bridge, or another repository without current canonical architecture support.

## Current repository truth

```text
Repository: ToadAid/toadaid-app
Product: ToadAid Pond
GitHub visibility: Public
Activation: NOT_INCLUDED

Stage 0B-P1 front-agent projection: COMPLETE
Stage 0B-P2 scope-context invariants: COMPLETE
Stage 0B-P2 canonical merge: c02caab2d95fd9ae0741cbe29d4e53bec498f860
```

The current implementation is fixture/contract foundation only. It presents one active scope context with membership, admission, release, and delegated authority not established. Capability effects remain read/proposal only and execution remains disabled.

It does not provide live tools, routing or dispatch, plugin invocation or loading, Bridge/MCP connectivity, network access, persistence, authentication, approval recording, mutation, execution, wallet/signing/trading, or deployment.

Current agent direction:

- ToadAid Living Agent is the principal-bound personal-continuity direction.
- Community agents and project agents are separate future canonical profiles bound to explicit shared/project scopes.
- Coder, Zora Agent, Trader, lore/oracle, and future bounded domain agents are specialist directions.
- Remote external agents require separate identity and admission and have no local authority by default.
- A service or tool may expose capability without being an autonomous agent.
- Frog-to-Toad is not active and is not a Living Agent alias. It may return only if a distinct future lifecycle/transformation job is deliberately defined.

## Status vocabulary

- `COMPLETE`: merged and verified repository truth.
- `CURRENT`: the only active bounded cut.
- `NEXT`: approved ordering, not yet started.
- `FUTURE`: directional work, not approved for implementation or activation.
- `BLOCKED`: requires separate architecture, security, authority, or activation decisions.

## Stage A — Foundation projections

### A0 — Doctrine seed — COMPLETE

- initial Pond product and authority-boundary documentation;
- no runtime activation.

### A1 — Front-agent projection — COMPLETE

- opaque principal, scope, agent, and plugin references;
- inert specialist inventory;
- no live effects.

### A2 — Singular scope-context invariants — COMPLETE

- one active scope context, not a union of scopes;
- membership, admission, cross-scope release, and delegated authority not established;
- no execution surface.

### A3 — Public foundation, local builder law, reproducible lock, and minimal CI — COMPLETE

- truthful public product/current-state documentation;
- seven durable North Stars and minimal roadmap;
- architecture-preflight `AGENTS.md`;
- reproducible TypeScript 5.8.3 dependency lock;
- read-only GitHub CI for dependency installation, typechecking, and committed-range whitespace validation;
- `Activation: NOT_INCLUDED`.

### A4 — Common non-authoritative projection envelope — COMPLETE

- source and trust class;
- source scope and audience/disclosure;
- contract version and canonical subject revision/digest;
- observation time, freshness/expiry, and applicability;
- evidence references, redaction posture, and canonical refusal outcomes;
- explicit stale, missing, unknown, and conflicting states;
- fixture-only; no relationship authority or live integration.

### Cross-cutting foundation — Provider-sovereign cognition boundary — COMPLETE

- vendor, model, harness/runtime, and credential-mechanism distinctions;
- explicit OpenAI, Google, xAI, Anthropic, and DeepSeek product directions;
- Ollama as a first-class local runtime direction;
- future Toadgang/community gateway direction;
- ToadAid authentication, provider credential, and AgentId remain distinct;
- declared external-cloud, local-operator-controlled, and community-governed data-boundary classes;
- no silent fallback and no provider semantic authority;
- fixture/policy only; no live inference, authentication, API, credentials, or routing;
- `Activation: NOT_INCLUDED`.

### A5 — Fixture relationship and revocation/stale/conflict projections — COMPLETE

- non-authoritative identity, membership, admission, release, grant-applicability, revocation, and expiry projections;
- reuse canonical outcome names;
- no canonical relationship store or evaluator in Pond.

### A6 — Multi-principal and scope-isolation proof — COMPLETE

- deterministic personal/shared/project/public isolation fixtures;
- fixture/type proof that shared/project state is not a union of personal scopes;
- establish a cross-cutting test law for later caches, indexes, events, hosts, and persistence; this fixture/type proof is not "once forever."

### A7 — Versioned agent descriptors — COMPLETE

- distinguish personal, community, project, specialist, remote-external, and service/tool profiles;
- separate visibility, declared capability, admission, reachability, and current authority;
- include explicit denials, scope relationships, freshness, revocation, refusal, evidence, and version/digest posture;
- descriptor is not admission or a grant.

### A8 — Deterministic `RouteCandidateProposal` — COMPLETE

- only after source/freshness/applicability/refusal, revocation/stale/conflict, isolation, and descriptor foundations;
- preserve source principal/scope, destination scope/audience, target, provenance, and refusal evidence;
- inert and non-authorizing;
- no delivery, dispatch, invocation, release, grant, approval, mutation, or execution.

Dependency law:

```text
projection source / freshness / applicability / refusal
  BEFORE relationship-sensitive UI or route eligibility

revocation / stale / conflict representation
  BEFORE RouteCandidateProposal

versioned descriptor
  BEFORE RouteCandidateProposal
```

Multi-principal isolation remains cross-cutting across every later stage.

## Stage B — Host-neutral Pond presentation — CURRENT

Stage B remains non-authoritative. It introduces host-neutral presentation contracts and a local visual runtime before any live truth integration.

### B1 — Host-neutral `Snapshot` / `Event` / `CommandIntent` contract — COMPLETE

- one typed host-neutral static-state boundary;
- singular active scope plus exact principal and agent identity references;
- presentation preserves source scope and does not perform audience change or cross-scope release;
- deterministic fixture-only events, not a runtime event stream;
- `CommandIntent` is UI intent only, not dispatch, delivery, approval, or execution;
- all live-tool, network, persistence, delivery, approval-recording, and execution gates remain false.

### B2 — Static accessible fixture UI — COMPLETE

- **B2-P1 — COMPLETE:** desktop-first, responsive static shell rendering the exact B1 fixture without inventing new semantics;
- visible active scope and agent identity;
- keyboard-accessible, semantic static presentation;
- no live tools, host integration, network, persistence, or mutation.

### B2-P2 — JARVIS / new-age Pond static visual cut — COMPLETE

- approved JARVIS/new-age visual north star applied;
- exact B1 fixture conformance retained;
- voice, world, and agent spatial affordances remain static and inert;
- no live tools or host integration.

### B2-P3 — Launchable desktop host seam — COMPLETE

- Tauri 2 provides the bounded local desktop host seam;
- the existing B2-P2 UI launches unchanged;
- the desktop host uses the human-selected Pond lotus artwork as its local icon;
- bounded Linux launch hygiene removes only allowlisted inherited Snap-path GTK/GIO/XDG entries from the child environment;
- observed launch proof is Linux-only; the host choice is cross-platform-capable, but Windows, macOS, Android, and iOS proof is not claimed;
- no live tools, network, persistence, agent invocation, or other live capability activation;
- host presence does not create authority.

### B2-P4A — Real-time Pond world foundation — COMPLETE

- explicitly intermediate foundation, not the intended final visual;
- local, exactly pinned and vendored Three.js visual runtime with no CDN or localhost;
- deterministic procedural moving floating lands, waterfalls, water, stars, fog, and holographic depth;
- at P4A completion, the HTML/SVG guide was explicitly temporary and not a live invocation;
- presentation only: no live Tobyworld state, tools, authority, or other capability activation.

### B2-P4B — High-fidelity hybrid world/guide refinement — COMPLETE

- **P4B-P1 — COMPLETE:** organic non-toothed island silhouettes, ribbon waterfalls, richer water response, layered atmospheric motes, and repaired rounded landmark silhouettes;
- **P4B-P2 — COMPLETE:** the temporary flat SVG guide was retired and replaced with a bounded procedural Three.js robed frog foundation while preserving explicit presentation-only and non-invocation semantics;
- **P4B-P3 — COMPLETE:** the procedural guide was refined into a calmer cinematic robed-guardian silhouette with repaired eye visibility, draped robe presentation, integrated hands, and organic sigil language;
- **P4B-P4 — COMPLETE:** the fail-closed visual-asset admission contract now binds path, role, independently observed provenance, hash, size, metadata, frozen performance policy, and an empty model-loader allowlist while admitting zero actual assets;
- **P4B-P5 — COMPLETE:** the bounded local read-only visual-asset file-facts observer now proves stable repository path, regular-file identity, SHA-256, byte size, and first-cut PNG header dimensions while preserving `not_observed_by_this_layer`, `not_admitted`, and authority-none postures;
- **P4B-P6 — COMPLETE:** exact P4B-P5 image file facts can now be deterministically composed with separately supplied independently verified provenance into P4B-P4 observed-image evidence while preserving not-admitted, not-loaded, and authority-none postures;
- **P4B-P7 — COMPLETE (DESIGN BOUNDARY):** the explicit visual-asset repository-admission decision seam is defined without inventing an approval token, human-decision evidence format, admission receipt, repository mutation authority, or Pond-owned approval semantics;
- **P4B-P8 — COMPLETE:** bound the existing procedural Pond renderer to a deterministic responsive pixel-ratio/frame budget, actual-stage resize observation, hidden/offscreen pause-resume lifecycle, reduced-motion updates, and neutral pointer reset without changing authority or asset admission;
- **P4B-P9 — COMPLETE:** translate operator-supplied Lore Land visual references into original procedural island character: warm faceted cliff strata, living turf rims, bounded vine curtains, glowing lore cores and satellite crystals, small reflective basins, stepping paths, clustered groves, and two miniature sanctuary/lantern silhouettes; reference pixels remain outside the repository and no asset is copied, loaded, admitted, or assigned authority;
- **P4B-P10 — COMPLETE:** deepen the procedural Tobyworld composition with bounded cinematic illumination, multi-color stellar depth, celestial framing arcs, layered water caustics, reflected island light pools, waterfall splash rings, and gently animated lore cores while preserving the P4B-P8 render lifecycle and authority-none posture;
- **P4B-P11 — COMPLETE:** strengthen the procedural central guide as a ceremonial presentation anchor through a layered lily dais, luminous concentric choreography, a clearer hooded silhouette, articulated fingertips, and bounded blink motion while preserving the P4B-P8 render lifecycle and authority-none posture;
- **P4B-P12 — COMPLETE:** converge the wide-screen shell toward the approved sci-fi desktop composition by extending the procedural world behind the full interface and presenting navigation, context, and voice regions as bounded floating glass instruments while preserving the established accessible medium/narrow flow and authority-none posture;
- **P4B-P13 — COMPLETE:** add bounded procedural foreground pond ecology through notched lily pads, layered lotus blooms, instanced reeds, and restrained near-field parallax while preserving the P4B-P8 lifecycle, reduced-motion behavior, and authority-none posture;
- **P4B-P14 — COMPLETE:** establish distant procedural archipelago depth through nine simplified floating-land silhouettes, small beacon spires, sparse groves, and faint orbit rings while preserving foreground hierarchy, the P4B-P8 lifecycle, and authority-none posture;
- **P4B-P15 — COMPLETE:** introduce restrained procedural atmosphere through seven low-opacity cloud banks and six under-island mist rings while preserving waterfall legibility, foreground hierarchy, the P4B-P8 lifecycle, and authority-none posture;
- **P4B-P16 — COMPLETE:** extend the deterministic P4B-P8 render profile with full, balanced, and essential visual-density tiers so narrower stages suppress only nonessential depth layers while retaining the guide, primary world, fixture content, and authority-none posture;
- **P4B-P17 — COMPLETE:** improve the procedural central guide's desktop-scale facial legibility through soft brow ridges, eye rims, cheek planes, nostrils, mouth corners, and a restrained throat/bib plane while preserving the P4B-P8 lifecycle, reduced-motion behavior, presentation-only role, and authority-none posture;
- asset-based guide refinement remains deferred until explicit provenance, license, hash, size, and performance admission;
- high-fidelity local island/world assets remain admissible only after explicit provenance, license, hash, size, and performance review;
- further guide, world, atmosphere, lighting, ecology, and shell refinement requires a separately approved future bounded cut;
- further measured performance and responsive-composition proof remains future;
- remains presentation only and creates no authority or live world state.

### B3 — Inventory / denial / evidence / refusal / receipt presentation — CURRENT

- **B3-P1 — CURRENT:** present the existing A7 six-profile descriptor inventory and the specialist fixture's exact declared-not-granted capabilities and explicit denials in one inert inspector instrument;
- source/freshness/refusal state, evidence references, and sanitized receipt references remain future B3 cuts bound to their existing canonical owners;
- presentation is not authority and does not widen source scope or audience.

### B4 — Cross-host conformance fixture — FUTURE

- prove the same host-neutral fixture semantics across ChatGPT, loopback, and desktop adapter directions;
- host choice must not invent identity, scope, release, grant, approval, or authority.

## Stage C — First read-only truth slice — FUTURE

- deliberate canonical source-owner assignment before integration;
- one bounded read-only project/Bridge/Coder cockpit;
- exact repository and target identity;
- source, freshness, gates, denial/refusal posture, and sanitized receipts;
- stale, conflict, and degraded behavior before mutation;
- no mutation.

## Stage D — Identity-bound personal and collaborative reads — BLOCKED

- real authentication and local principal binding before private or multi-principal live state;
- authentication is not membership or authority;
- read-only Living Agent presence;
- read-only community/project agent relationships;
- no personal-memory leakage.

## Stage E — Inert proposals — BLOCKED

- exact proposal envelopes;
- cross-scope release proposals;
- no human-decision recording;
- no grant creation;
- no execution.

## Stage F — Decisions and consequences — BLOCKED

Any future consequence path must preserve separate ceremonies:

```text
informational / current-state projection
  -> inert draft
  -> exact proposal
  -> read-only review
  -> exact human-decision evidence
  -> separate grant / current-authority applicability
  -> fresh deterministic preflight + revocation / e-stop
  -> one bounded domain-specific execution
  -> result / uncertainty receipt + reconciliation
  -> separate acceptance where applicable
```

No stage may both record the human decision and execute the effect. Trading, signing, payment, publication, deployment, and destructive mutation remain domain-specific and separately authorized. Pond promises no generic executor.

Everything beyond the first read-only truth slice remains directional until preceding exit evidence exists.

## Permanent boundaries

Until later architecture and separately authorized evidence prove otherwise:

- no broad or ambient authority;
- no model-owned approval;
- no authority from memory;
- no authority from visibility or discovery;
- no authority from membership alone;
- no provider, browser, or session identity as canonical `PrincipalId` by itself;
- no private-memory union across scopes;
- no secrets, private keys, or signing material in Pond;
- no automatic trading;
- no automatic publishing;
- no implicit repository mutation;
- no silent fallback to shell, broader tools, providers, transports, or scopes;
- no stale or cached authority treated as current;
- no host-specific policy semantics;
- no public code implying public access to private state;
- no consequence activation without later explicit authorization;
- no duplicated Mirror Core governance semantics in Pond;
- no assignment of deferred Social Control Plane ownership without canonical architecture support.

Public source visibility is not production service activation and grants no access to private memory, credentials, trust state, or authority.
