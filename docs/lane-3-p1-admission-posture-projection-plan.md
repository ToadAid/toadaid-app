# L3-P1 plan — Pond consumes real provider projections and presents live admission posture (planning cut, docs-only: no code, no runtime, no activation)

## Binding

- Parent: toadaid-app main `7ce1997` (the Lane 3 plan merged as PR #100, 2026-10-18).
- Canonical ecosystem law: ToadAid/toadaid-architecture at `e5120b2` ("docs: assign the Lane 3 trusted connection-provider to Mirror Desktop Bridge (ADR-0001)", #12, status `accepted`). The ADR added one file and edited none, so the four owner contracts this plan composes are still cited at their `53de869` line numbers, re-verified locally before this plan was recorded (admission contract; agent-to-agent-messaging-and-delivery contract; trusted-channel-separation contract; delegated-authority contract; community-agent-fabric blueprint; governed-runtime-component-allocation blueprint), with ADR-0001 itself read in full at `e5120b2`.
- **What this cut is:** a plan, per the local implementation-planning law. Nothing in it is implemented, activated, or wired. Its validation evidence is reviewability, not behavior.
- **Law silence recorded (one, carried from D-P25/D-P32):** the canonical law defines the admission **decision**, the admission **record** shape, and the standing-intake precondition, but no canonical law defines the **frontend projection seam** a governed surface renders an agent or its admission posture through. Everything below — the proposed new source-kind and boundary-posture literals, the source-handoff shape, and the presentation change — is a **receiver-recorded app-side presentation decision** (frontend-only, authority-none) exercising refusal law in that silence, not new admission, transport, or authority mechanics, and is recorded here rather than in a law amendment. What ADR-0001 changed is narrow and specific: it assigned the provider boundary to Mirror Desktop Bridge (D1), placed delivery-state runtime with the provider and semantic ownership with the messaging contract (D2), fixed the first-slice intake transport to local STDIO/MCP not A2A (D3), and made Bridge author of the provider's channel map (D4). It assigned **no admission-decision backend, no membership/scope storage, no routing, and no governance kernel**, and it created no runtime, transport, or activation.

## Role in the docking path

- **Lane 1 — DONE (D-P24):** identity-evidence presentation (the registry panel).
- **Lane 2 — DONE (D-P32, presentation):** the admission-evidence presentation lane (the docking bay: two fixture briefs over the exact-shape seam).
- **Lane 3 — assigned (ADR-0001), not yet implemented:** the trusted connection-provider — Mirror Desktop Bridge hosts the real intake boundary for admitted senders only and feeds host-neutral projections into the D-P25 exact-shape seam. The provider is **not** part of toadaid-app.
- **L3-P1 — THIS PLAN (Pond's first consumption stage):** once a conforming provider exists and emits projections, Pond's D-P25/D-P32 seam consumes them and the Agents view presents **live admission posture** against the same frozen vocabulary — display only, provider-neutral, no transport in Pond, no admission decision in Pond. L3-P1 is the first of three Pond consumption stages; L3-P2 (the D-P16 conversation extension for live inbound) and L3-P3 (the D-P21 reply cause-swap) stay future and are each planned first.

## Goal

A written, reviewable, human-approved plan for ONE additive Pond-side consumption seam: the exact source-kind and boundary-posture change by which Pond's D-P25 front face and D-P32 docking bay accept projections supplied by a conforming connection provider (host-neutral, never hardcoded) and present live admission posture against the frozen D-P25/D-P32 vocabulary, correct by construction against the four owner contracts and ADR-0001, with every deferred or open decision surfaced rather than silently taken, and with Pond's side reduced to what it may already do: present projections that arrive through a structural channel it does not own.

## Explicit non-goals

- No implementation, in this repository or any other, is authorized by this plan's acceptance.
- No admission decision, admission backend, or admission record is created in Pond; the provider checks admission records, it does not produce them (ADR D1), and Pond does neither.
- No transport, listener, intake channel, or network surface of any kind appears in Pond. Pond stays frontend-only under its CSP no-network law; the provider's "feed" is a data handoff, not a Pond-side channel.
- No hardcoding of Bridge: the new source kind names a **host-identified bounded source**, and `projectionSourceId` carries whichever conforming host supplied it (fabric §27; the D-P25 `providerBoundaryPosture`).
- No widening of the frozen vocabularies: the 16-key D-P25 projection shape, the 12-key D-P32 docking dossier, the profile/connection/admission-state/evidence-class/sequence-step tables all stay byte-identical.
- No re-run of the D-P15/D-P16 live-session receiver machinery (that is L3-P2, gated by the frozen live-session law) and no D-P21 reply path (L3-P3).
- No membership, join, Grant, capability activation, credential custody, wallet, signing, payment, publishing, repository mutation, deployment, or trading path anywhere in the plan.

## Canonical basis, dependency map, and who owns what

The plan composes exactly these owners and takes no law from any of them:

- `agent-identity-and-specialist-admission-contract.md` (the admission decision, records, profiles, profile interlock, standing-intake precondition, revocation/e-stop dominance — L147–218, L226–234; the intake vocabularies/transports deferral L279 now narrowed by ADR D3/D4);
- `agent-to-agent-messaging-and-delivery-contract.md` (delivery lifecycle L149–189; transport neutrality L218–220; "MCP must not become an agent-chat authority protocol" L232; the delivery-state deferral L245–246 now resolved by ADR D2);
- `delegated-authority-and-capability-grant-contract.md` (NO LOCAL DIRECT AUTHORITY; the bounded-consequence sequence; message ≠ Grant; provider neutrality — L611–619);
- `trusted-channel-separation-contract.md` (§Blueprint requirement L231; §Channel authority and precedence L51, L58; canonical fail-closed outcomes L74–85) — the provider must ship its channel map as its first deliverable (ADR D4) before L3-P1 consumes anything;
- `scope-sovereignty-contract.md` (PrincipalId, ScopeId, membership, audience, release — referenced, never redefined);
- `failure-outcome-taxonomy.md` (all refusals named canonically);
- `blueprints/community-agent-fabric.md` (§13 channel map reference table; §27 provider/client neutrality; §36 deferred decisions, now narrowed to the provider boundary by ADR-0001);
- `blueprints/governed-runtime-component-allocation.md` (Mirror Core = governance kernel, Wave 1; Mirror Desktop Bridge = local trusted-channel/consequence boundary host, Wave 2; MCP = transport only, Wave 7; A2A = Wave 9 external interop);
- `adr/0001-trusted-connection-provider-assignment.md` (the assignment: D1 Bridge hosts the provider; D2 delivery-state runtime Bridge / semantics messaging contract; D3 first-slice transport local STDIO/MCP; D4 Bridge authors the channel map).

## The exact seam change (the plan's central claim, stated carefully)

The D-P25 front face and the D-P32 docking lane each carry a frozen `source` block today:

- D-P25 record: `sourceKind: "in_memory_fixture_only"`, `providerBoundaryPosture: "replaceable_frontend_projection_source_no_transport_interface_activated"`.
- D-P32 record: `sourceKind: "in_memory_fixture_only"`, `providerBoundaryPosture: "replaceable_frontend_projection_source_no_transport_or_intake_interface_activated"`.
- D-P25 contract: `projectionSourceKind: "in_memory_fixture_only"` (the sole admitted value).

L3-P1 makes exactly two additive moves and changes no frozen shape:

1. **One new `projectionSourceKind` value — a host-identified bounded source kind** (candidate literal: `"conforming_provider_projected_source"`), admitted alongside `"in_memory_fixture_only"` on the D-P25 exact-shape seam. A projection carrying it is still a frontend projection, never canonical current state: `projectionPosture` stays `frontend_fixture_projection_not_discovery_identity_proof_or_current_truth` (or a host-identified non-authoritative variant — see open question Q5), `admissionPosture` stays `projected_state_not_an_admission_decision_or_admission_backend`, `declaredCapabilityPosture` stays `declared_not_granted`, and `authority` stays `"none"`.
2. **One new `providerBoundaryPosture` literal — bounded source present, still no transport or intake in Pond** (candidate: `"conforming_provider_projection_consumed_no_transport_or_intake_interface_in_pond"`), replacing the `replaceable_…` posture on the record's `source` block. The boundary posture names that a conforming host supplied the data; it activates nothing in Pond.

Both candidate literals are **proposed presentation decisions for human review**, not canonical law and not new authority — exactly as the D-P25/D-P32 seams already record their app-side presentation decisions in the canonical silence.

### How real projections arrive (the load-bearing honesty)

Pond never opens a transport — CSP `connect-src 'none'`, no `fetch(`, no `WebSocket`, no listener. "Real projections" therefore arrive the only way Pond can lawfully receive them: as **committed records through the provider's build/render pipeline**. The provider emits host-neutral projections into Pond's exact-shape seam as data (the committed record module / fixture layer, with `projectionSourceId` + the new `projectionSourceKind` naming the bounded source); Pond renders them exactly as it renders fixtures today — fill-once, textContent-only, version-tied, fail-closed. There is no live fetch, no polling, no intake registration, and no transport in Pond. The provider's "feed" is a data handoff at the committed-record boundary, not a Pond-side channel. (This is the same mechanism ADR D3 fixes: the provider exposes a local STDIO/MCP boundary; Pond consumes its output as data and never as a live transport.)

### The presentation change (display only)

The D-P32 docking bay currently presents two **fixture** briefs (Community Scout, admission `unknown`; Lore Mason, admission `not_established`). L3-P1 lets the bay present **real admission posture** — e.g. an admitted dossier whose `admissionState` is `"active"` or `"revoked"` — against the same frozen 12-key dossier and vocabulary, while still presenting the ceremony unchanged: presented evidence `declared_not_verified`, the six sequence steps `declared_not_performed`, requested scope relationship and declared capabilities `declared_not_granted`, and the standing-walls block byte-identical. The 12-key all-false ceiling stays all-false on every arm (green and refused alike): `admissionDecisionMade: false`, `admissionRecordIssued: false`, `evidenceVerified: false`, `standingIntakeOpened: false`, `messageComposedOrDelivered: false`, `agentInvoked: false`, … — a real `admissionState` value is projected state, never a decision Pond made. The D-P32 docking briefs "remain fixture law until any provider can present a real, admitted dossier; the seam's validation does not change."

## Frozen-seam guarantees (what must not move)

- The 16-key D-P25 projection shape, the 5-value profile vocabulary, the 7-value connection-state and 4-value admission-state presentation vocabularies, and the 2-value extension-id pair are unchanged.
- The 12-key D-P32 docking dossier, the 2-value profile vocabulary, the 8-value canonical evidence-class vocabulary, the 4-value admission-state vocabulary, and the 6-value canonical sequence are unchanged.
- Every effect ceiling (the D-P25 9-key and the D-P32 12-key) stays pinned all-false by its existing compile-time invariant, and `runtimeActivationPosture: "not_included"` / `authority: "none"` stay pinned on every arm.

## Gating (implementation waits on the provider; the plan does not)

ADR-0001 unblocks Lane 3 **in order**: Bridge plans and implements the provider boundary first — its channel map as the first deliverable (D4), the admission-first intake boundary (D1), the delivery-state runtime (D2), and the host-neutral projection feed over local STDIO/MCP (D3) — and **only then** may Pond implement L3-P1 against real projections. This plan is non-gated (docs-only) and records how L3-P1 will be implemented once that boundary exists; the L3-P1 **implementation** cut is a separate future cut, itself planned first, and stays `Activation: NOT_INCLUDED` throughout.

## Open architecture questions surfaced (each requires reconciliation before L3-P1 implementation)

1. **The exact `projectionSourceKind` literal.** The candidate `"conforming_provider_projected_source"` names a host-identified bounded source; the final literal is a human-reviewed presentation decision, recorded at implementation time, not new law.
2. **The exact `providerBoundaryPosture` literal(s).** The candidate `"conforming_provider_projection_consumed_no_transport_or_intake_interface_in_pond"` must stay transport-free and intake-free; whether the D-P25 and D-P32 records share one literal or each carries a variant (as they do today) is recorded at implementation time.
3. **Which surface consumes first.** The ADR names "admission-posture presentation" as L3-P1's subject, which is the D-P32 docking bay; but the D-P25 front face carries the same `source` block and the same `projectionSourceKind`. Proposed: both surfaces gain the new source kind additively, with the docking bay the admission-posture presentation surface and the front face the generic projection surface — but the first slice may choose one.
4. **The source-handoff boundary.** How the provider's committed projection data lands in Pond's committed record layer (the provider-side build/render pipeline writes conforming records; Pond never fetches) must be confirmed against the provider's channel map, so Pond gains no transport, listener, or network surface by accident.
5. **The A4 envelope source posture.** A "real" provider projection must stay non-authoritative. The deeper A4 envelope (`pond-projection-envelope.ts`) pins `sourceClass: "fixture"` / `trustPosture: "non_authoritative_fixture"` / `projectionMechanism: "fixture"`. Whether a host-supplied projection keeps the fixture class or gains a host-identified non-authoritative source class is an open envelope question; either way it must not become canonical current state (current-state reading rule).
6. **Freshness and binding.** A "real" projection still needs an explicit source/ref/revision and freshness basis (the D-P25 shape's `projectionSourceId`/`projectionSourceKind` name the source; the A4 envelope's `observation` carries freshness). A real `admissionState` is bound to the provider's supplied source, never presented as canonical current state or as a decision Pond verified.

## Exact scope of THIS cut

- `docs/lane-3-p1-admission-posture-projection-plan.md` (this file) — the only artifact.
- `BUILD_LIST.md` and `README.md` — pointer lines only.
- No source, fixture, ui, script, package, CI, or workflow change of any kind.

## Authority ceiling and forbidden capabilities

Authority `NONE`; activation `NOT_INCLUDED`; runtime behavior `none` — this cut has no runtime at all. Forbidden: admission decisions or backends, admission records or receipts, intake runtime or transports, delivery-state ownership, credential custody, wallet/signing/payment, publishing or repository mutation, deployment, any transport or network surface in Pond, and any provider-specific (Bridge-specific) wiring in Pond.

## Trusted sources, channels, and precedence assumptions

- The only trusted source this plan binds is the canonical architecture repo at `e5120b2` (ADR-0001 accepted) with the four owner contracts still cited at their `53de869` line numbers.
- The plan records no channel claims of its own — it only requires the provider to ship its channel map per trusted-channel §Blueprint requirement as its first deliverable (ADR D4), with precedence stated and every unknown class failing closed to the canonical outcomes, before L3-P1 consumes anything.
- Pond's projections remain presentation-only regardless of source: a projection is not canonical current state, and no provider, host, session, or transport becomes authoritative for identity, admission, grant, policy, or authority state.

## Validation and evidence required for completion

1. The plan document exists and names every canonical anchor with line references (`53de869` for the four owner contracts; `e5120b2` for ADR-0001).
2. Zero runtime or contract/fixture/ui diffs in the tree (`git show --stat` of the cut shows docs + meta only).
3. The full local selftest suite stays green unchanged — nothing consumed this cut.
4. Human review (the user) of the candidate source-kind and boundary-posture literals and the six open questions — the human-sovereign gate before the L3-P1 implementation cut is proposed anywhere.

**activation: NOT_INCLUDED**
