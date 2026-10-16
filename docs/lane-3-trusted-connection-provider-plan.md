# Lane 3 plan — the trusted connection-provider for admitted-agent intake (planning cut, docs-only: no code, no runtime, no activation)

## Binding

- Parent: toadaid-app main `d948c7a` (D-P32 the docking bay merged as PR #99, 2026-10-16).
- Canonical ecosystem law: ToadAid/toadaid-architecture at `53de8698a6da1c14da752b637b825ca80ebd9d0f` ("docs: define community and remote external agent admission", #11) — re-verified locally when this plan was recorded; the four owner documents this plan composes were read in full at this commit (admission contract; community-agent-fabric blueprint; delegated-authority contract; runtime-component-allocation blueprint), plus the trusted-channel-separation, agent-to-agent-messaging-and-delivery, and delegated-authority contracts re-read this cut.
- **What this cut is:** a plan, per the local implementation-planning law. Nothing in it is implemented, activated, or wired. Its validation evidence is reviewability, not behavior.
- **Law silence recorded (one):** the canonical law defines admission (decision law, records, standing-intake precondition), messaging (envelope, delivery lifecycle, transport neutrality), delegated authority (the bounded-consequence sequence), and trusted-channel separation (channel classes, authority, precedence, forbidden collapses) — but the canonical allocation deliberately DEFERS where the intake/delivery state lives ("whether Core, MCP, Bridge, or Living hosts delivery state" — messaging Non-claims L245–246) and any intake runtime ("implementations … must refuse to hold an intake channel open" — admission L212–218, with the intake-transport backend explicitly deferred L279). Lane 3 therefore cannot be fully assigned from canonical text alone. **This plan does not resolve those deferrals; it maps them, proposes an assignment hypothesis for human reconciliation, and lists every unanswered question as an open architecture item.**

## Role in the docking path

- **Lane 1 — DONE (D-P24):** identity-evidence presentation (the registry panel; registration metadata is not runtime identity).
- **Lane 2 — DONE (D-P32, presentation; canonical law complete at `53de8698`):** the admission-evidence presentation lane (the docking bay: two fixture briefs over the exact-shape seam).
- **Lane 3 — THIS PLAN:** the real door. A trusted connection-provider that (a) holds a real intake boundary for admitted senders only, (b) feeds real projections into the D-P25 exact-shape seam, (c) composes the delivery lifecycle of the messaging contract, and (d) routes every requested consequence into the delegated-authority sequence instead of executing anything itself. Only after Lane 3 exists do the parked frontend successors become possible at all: the D-P16 conversation extension (live inbound) and the D-P21 reply cause-swap.

## Goal

A written, reviewable, human-approved plan for ONE conforming trusted connection-provider establishing admitted-agent intake and projection feed, correct by construction against the four owners, with every deferred canonical decision surfaced rather than silently taken, and with Pond's side reduced to what it may already do: present projections that arrive through a structural channel it does not own.

## Explicit non-goals

- No implementation, in this repository or any other, is authorized by this plan's acceptance.
- No admission decision is made, no admission backend is specified in the concrete sense (that remains canonical-deferred: "admission-implementation backends, … intake class vocabularies and transports, any intake runtime, and any sender-admission interface" — admission L279).
- No membership, join, Grant, capability activation, credential custody, wallet, signing, payment, publishing, repository mutation, deployment, or trading path exists anywhere in the plan.
- No hardcoding of a provider into Pond: Pond stays projection-consuming and provider-neutral (fabric §27; the D-P25 `providerBoundaryPosture`).
- No reassignment of Social Control Plane or community ownership to Mirror Core, Pond, Bridge, or any single repository.
- No prompt-injection surface widened: remote messages stay untrusted external content (messaging L132–135); nothing in the plan makes message text, AgentCard advertisement, or attestation prose authoritative (messaging L137–141; delegated-authority L619).

## Canonical basis, dependency map, and who owns what

The plan composes exactly these owners and takes no law from any of them:

- `agent-identity-and-specialist-admission-contract.md` (the admission decision, records, profiles, profile interlock, standing intake precondition, revocation/e-stop dominance);
- `agent-to-agent-messaging-and-delivery-contract.md` (AgentMessage envelope, delivery lifecycle, untrusted remote content, replay/revocation law, delivery state ownership deferred);
- `delegated-authority-and-capability-grant-contract.md` (NO LOCAL DIRECT AUTHORITY; the bounded-consequence sequence; message ≠ Grant; provider neutrality);
- `trusted-channel-separation-contract.md` (the required channel map — channels, writers, readers, semantic classes, precedence, forbidden crossings);
- `scope-sovereignty-contract.md` (PrincipalId, ScopeId, membership, audience, release — referenced, never redefined);
- `failure-outcome-taxonomy.md` (all refusals named canonically);
- `blueprints/community-agent-fabric.md` (§13 trusted-channel input map; §18 coordination vs consequence plane; §27 provider/client neutrality; §31 the abstract future production path; §36 deferred decisions);
- `blueprints/governed-runtime-component-allocation.md` (Mirror Core = governance kernel; Mirror Desktop Bridge = the local trusted-channel/consequence boundary host, Wave 2; MCP = transport only, Wave 7; No Giant Orchestrator).

## The assignment map (the plan's central claim, stated carefully)

1. The provider is NOT part of toadaid-app. Pond presents and coordinates; it does not own canonical relationship authority, and any local implementation of intake, admission, or delivery in Pond would clone governance substrate the local anti-drift laws and the allocation blueprint both forbid.
2. **Hypothesis for human reconciliation (not a decision):** the provider boundary fits Mirror Desktop Bridge (Wave 2, the local trusted-channel host) where assigned. Two conforming alternatives remain structurally valid: (a) Mirror Core if the provider turns out to be pure governance-kernel work, and (b) any other conforming trusted host. The choice is an explicit, separately governed assignment that this plan only prepares.
3. Pond's role in the plan is fixed and small: declare the D-P25 seam's `projectionSourceKind` posture (already provider-neutral), present whatever a conforming provider projects, refuse what fails shape, and display intake/admission posture honestly when real projections arrive.
4. **Open architecture questions this plan surfaces (each requires canonical-owner reconciliation before Lane 3 code):**
   - Which repository accepts the assignment (Bridge per Wave 2? Core? a new governed host)?
   - Where does delivery state live (messaging L245–246 defers the owner) and who owns the intake-transport vocabulary (admission L279 defers intake class vocabularies and transports)?
   - Which transports are admitted for a first slice (A2A peer-agent vs MCP tool/resource exposure are distinct — messaging L232: "Delivering a message must not automatically invoke an MCP tool, and MCP must not become an agent-chat authority protocol")?
   - Who can write and read each trusted channel in the chosen host, and what upstream (provider- or harness-owned) configuration can conflict (trusted-channel L57–64, L19, L154)?

## The provider's required shape (composition-literal, no new law)

- **Admission-first intake:** no standing intake path for a sender without an admission record-backed, human-sovereign admission decision in the relevant scope (admission L212–218). Refusal is the default posture, not a config flag. Unadmitted senders get canonical refusals (`refused`/`authority_denied` per the failure taxonomy) and no held-open channel.
- **Typed trusted channels only:** identity/admission/authorization state travels through structurally separate channels from message content, with a written precedence model; unknown precedence or a conflicting upstream framing fails closed to `unknown_channel_precedence` / `unsupported_trusted_framing` / `provider_incompatible` (trusted-channel §Channel authority and precedence, §Required verification).
- **Delivery, never consequence:** inbound messages flow the delivery lifecycle (candidate → sender identity/admission evaluation → source-scope validation → release check → destination/audience resolution → current membership/revocation policy → delivery-policy decision → delivery → delivery evidence) and stop there (messaging L149–189). Requested consequences re-enter governance as proposals; the two lifecycles never collapse.
- **Projection feed to Pond through the exact-shape seam:** every projection is the 16-key D-P25 shape with vocabulary-only connection/admission labels, `projectionSourceKind` from the conforming host, `in_memory_fixture_only` replaced only by a host-identified bounded source kind — still a frontend projection, never canonical current state. The D-P32 docking briefs remain fixture law until any provider can present a real, admitted dossier; the seam's validation does not change.
- **Revocation and e-stop dominance across transports** (admission L226–234; messaging L192–199); no stale projection, cached receipt, or alternate transport resurrects anything.
- **Ecosystem shape:** a narrow provider composing the governance kernel's decisions — no giant orchestrator, no admission engine inside the transport, no capability judgment inside Pond.

## Pond-side consumption plan (future Pond stages, each its own cut, planned first, `Activation: NOT_INCLUDED` throughout)

- **L3-P1 (Pond):** intake/admission posture presentation — once a conforming provider exists, the D-P25 seam consumes real projections and the Agents view presents live admission posture against the same frozen vocabulary (display only; the D-P32 bay keeps presenting the ceremony).
- **L3-P2 (Pond):** the D-P16 conversation extension for live inbound (gated exactly by the frozen D-P15/D-P16 live-session law — nothing opens without an established live session).
- **L3-P3 (Pond):** the D-P21 reply cause-swap, only when a real reply path exists behind the provider.
- None of these re-run or re-shape the D-P15/D-P16 receiver machinery; each is additive and presentation-first.

## Exact scope of THIS cut

- `docs/lane-3-trusted-connection-provider-plan.md` (this file) — the only artifact.
- `BUILD_LIST.md` and `README.md` — pointer lines only.
- No source, fixture, ui, script, package, CI, or workflow change of any kind.

## Authority ceiling and forbidden capabilities

Authority `NONE`; activation `NOT_INCLUDED`; runtime behavior `none` — this cut has no runtime at all. Forbidden: admission decisions or backends, intake runtime or transports, delivery-state ownership, Grant issuance or a policy engine, credential custody, wallet/signing/payment, publishing or repository mutation, deployment, and any provider-specific wiring in Pond.

## Trusted sources, channels, and precedence assumptions

- The only trusted source this plan binds is the canonical architecture repo at the commit above.
- The plan records no channel claims of its own — it only requires the future provider to ship a channel map per trusted-channel §Blueprint requirement as its first deliverable, with precedence stated and every unknown class failing closed.
- Pond's projections remain presentation-only regardless of source; a "projection is not canonical current state."

## Validation and evidence required for completion

1. The plan document exists and names every canonical anchor with line references at `53de8698`.
2. Zero runtime or contract/fixture/ui diffs in the tree (`git show --stat` of the cut shows docs + meta only).
3. The full local selftest suite stays green unchanged (46 scripts) — nothing consumed this cut.
4. Human review (the user) of the assignment hypothesis and the open architecture questions — the human-sovereign gate before any Lane 3 implementation work is proposed anywhere.

**activation: NOT_INCLUDED**