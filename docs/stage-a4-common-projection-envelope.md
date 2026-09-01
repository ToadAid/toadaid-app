# Stage A4 — Common Non-Authoritative Projection Envelope

**Status:** fixture-only contract slice

**Activation:** `NOT_INCLUDED`

## Purpose and authority ceiling

Stage A4 adds a host-neutral, transport-neutral Pond projection/view contract for carrying source, scope, subject identity, freshness, applicability, evidence references, redaction, and fail-closed outcome metadata. It is not canonical ecosystem law, a canonical state store, or an authority record.

Canonical architecture was reviewed at `ToadAid/toadaid-architecture` `main` commit `bc7a971dfb243f0aa4417da6cef85cc56204f783`, including the derived-evidence, failure-outcome, verification-applicability, trusted-channel, scope-sovereignty, and capability/authority contracts and the Social Control Plane map.

The governing distinction is:

```text
projection != canonical current state
```

The A4 source class and projection mechanism are both fixture-only. `authority` is always `none`, and the trust posture is explicitly `non_authoritative_fixture`. A fixture declared fresh is fresh only for its declared fixture interval; it does not establish canonical-current state, production truth, verified authority, or a performed binding comparison.

## Source, subject, freshness, and evidence

The envelope preserves:

- a stable fixture source reference and the source scope;
- a projected subject reference, revision, and digest identity;
- the observation state and available observation/freshness times;
- applicability to the declared subject as a separate posture;
- up to two bounded evidence identities, never evidence bodies;
- a rendering redaction posture;
- a canonical fail-closed outcome where the projection cannot support a consequential current-state claim.

Fixture digest strings identify fixture revisions only. They are not cryptographic or runtime proof. `bindingComparison: not_performed_fixture_only` truthfully records that A4 performs no expected-versus-actual source comparison. An evidence reference records only an identity; it does not establish that evidence exists, was retrieved, was verified, remains applicable, or grants authority.

## Five observation states

- `fresh` — observed within the declared fixture interval. This is not canonical-current verification.
- `stale` — an observation time exists, but the declared fixture interval expired.
- `missing` — the declared fixture subject was not observed; no timestamp is fabricated.
- `unknown` — freshness is not observable in the fixture; unknown does not serialize as success, false, or zero.
- `conflicting` — two fixture observations disagree. No winner is selected; canonical-source reconciliation is required.

Stale, missing, unknown, and conflicting projections carry the canonical `insufficient_evidence` outcome and fail closed for consequential current-state use. A fresh fixture carries no failure outcome. Conflicting projections require reconciliation against the canonical source rather than optimistic selection.

## Scope, audience, applicability, and disclosure

The envelope reuses the existing Pond-local `PondScopeRef` and preserves `sourceScopeRef`. It establishes neither an audience nor a cross-scope release:

```text
source scope != destination audience
rendering != release
channel visibility != membership
presentation != public publication
```

Applicability says whether a projection concerns its declared subject. It is independent of freshness and is never authority to act. Redaction is presentation metadata; `none`, `redacted`, or `withheld` does not authorize disclosure or release.

No provider, browser, device, session, channel, room, phone number, or platform identity becomes a `PrincipalId`, `ScopeId`, membership, audience, or authority through this contract.

## Front-agent composition

The existing singular `PondScopeContextProjection` composes one fresh A4 fixture under `scopeContext.projection`. The Stage 0B-P2 negatives remain unchanged: one active scope, relationship claims `not_established`, read/proposal effects only, no execute field, execution gate `false`, and every live-effect gate disabled.

Moving the existing branded `PondScopeRef` definition into the common envelope module avoids a type-import cycle. The front-agent contract re-exports that same type, preserving its existing import surface.

## Future presentation surfaces

Future renderers may include Web/PWA, ChatGPT, desktop, loopback, mobile, Telegram, WhatsApp, or other surfaces. A4 implements none of them. Future host or transport provenance should compose around or beside the projection without overwriting its canonical source, source scope, subject, or freshness provenance.

```text
presentedThrough != source
```

A4 adds no routing, delivery, dispatch, plugin invocation, Bridge or MCP integration, network access, persistence, authentication, approval recording, mutation, execution, wallet access, signing, trading, publication, deployment, or activation.
