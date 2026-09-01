# Provider-Sovereign Cognition Boundary

**Status:** Pond-local fixture/policy foundation

**Activation:** `NOT_INCLUDED`

## 1. Purpose

This cut freezes the separation between ToadAid-governed identity and replaceable cognition before any provider integration begins. It declares an inert Pond product-policy vocabulary only. It selects no production provider and performs no inference, authentication, routing, fallback, or credential handling.

## 2. Canonical architecture basis

Canonical `ToadAid/toadaid-architecture` `main` was reviewed at commit `bc7a971dfb243f0aa4417da6cef85cc56204f783` (tree `648029785b4dbe4b58d914ea19cbae7296ec6d24`). The applicable provider-neutrality, scope-sovereignty, capability/authority, trusted-channel, derived-evidence, failure-outcome, and verification-applicability laws remain canonical. This Pond contract projects product policy; it does not amend ecosystem law.

## 3. Provider sovereignty law

ToadAid is provider-sovereign. Providers supply replaceable cognition. They do not supply ToadAid principal or agent identity, memory ownership, membership, scope, admission, grants, approval, execution permission, or authority. No reasoning provider owns `MAY`, and provider completion is not ToadAid acceptance.

## 4. Vendor, model, harness/runtime, and access mechanism

These axes remain distinct:

```text
vendor/provider      OpenAI, Google, xAI, Anthropic, DeepSeek
model reference      opaque Pond model-family identity
harness/runtime      Codex, provider adapter, Ollama, future community gateway
access mechanism     potential API key, delegated OAuth, interactive subscription,
                     workload identity, local runtime, or community gateway
```

OpenAI is a provider and Codex is a harness. Google is a provider and Gemini is a model-family label. xAI is a provider and Grok is a model-family label. Anthropic is a provider and Claude is a model-family label. Ollama is an explicit local runtime, not a cloud-provider vendor.

## 5. Current launch-profile direction

The fixture records a changeable Pond-local product direction, not canonical architecture or a production commitment:

- OpenAI: launch primary direction;
- Google/Gemini: launch primary alternate direction;
- xAI/Grok: specialist/integration direction;
- Anthropic/Claude: evaluation/additional governed direction;
- DeepSeek: experimental direction after separate review;
- Ollama: sovereign local-runtime direction;
- future Toadgang gateway: community-hosted direction.

Changing this ordering must not change Pond UI semantics, a principal, agent, scope, memory owner, membership, grant, approval, or authority.

## 6. Ollama is first-class and local

Ollama is represented explicitly as `local_runtime` with runtime identity `ollama`, a declared `local_operator_controlled` data boundary, `local_runtime` access mechanism, and `local_operator` custody. It is not hidden under a generic local/open-weight vendor.

These are declared fixture-policy classes, not proof that a process, model, network path, or data boundary is actually local. Local execution through Ollama supplies cognition only and grants no ToadAid authority.

## 7. Three non-collapsing identity axes

```text
ToadAid login / PrincipalId binding
    != provider account or credential
    != governed ToadAid AgentId
```

Conceptually:

```text
principal
  -> governed agent
       -> provider policy
            -> provider / model / harness / runtime
```

Changing the final layer does not mutate the principal, AgentId, scope, memory ownership, membership, admission, grants, approval state, or authority in the earlier layers. Provider account login never silently establishes a ToadAid identity or authority relationship.

## 8. Access mechanism is not credential custody

An access mechanism describes a potential connection class. Custody describes who would govern separately held material or local access. Neither field contains material, proves current support, or authorizes use. This cut stores no credential reference or value; any future opaque reference belongs behind a separately governed secret boundary.

## 9. Data-boundary policy

The closed declared classes are `external_cloud`, `local_operator_controlled`, and `community_governed`. They make data-exposure policy visible but do not prove privacy, security, deployment location, transport behavior, or runtime enforcement. Those claims require later source, wiring, and live evidence.

## 10. No-silent-fallback law

Every fixture profile declares `no_silent_fallback`:

```text
OpenAI failure
  != automatic Gemini / Grok / DeepSeek fallback
```

A future transition requires an explicit applicable policy bound to the task, scope, and data class. Data-boundary compatibility remains a separate required consideration.

## 11. Provider failure grants no transition permission

Failure is an outcome, not authorization. It does not allow provider roulette, broader data exposure, new credential use, a new network destination, or a different harness. This cut contains no selector or fallback route.

## 12. Cognition only

Provider, model, harness, and runtime selection supplies cognition only. Every profile carries `semanticAuthority: none`. The contract intentionally has no authority, approval, execution, mutation, membership, admission, grant, release, principal, or secret-material field.

## 13. Ollama does not gain authority by locality

A locally controlled process can still return untrusted model output. Locality does not turn output into identity, memory, evidence, approval, or permission. A later Ollama adapter must remain governed by the same capability, data-boundary, and authority rules as any other cognition backend.

## 14. Mutable provider authentication facts are not timeless law

The access taxonomy describes mechanisms ToadAid may need; it is not a support matrix. Each fixture marks provider support as `not_established_by_fixture`. As one current example, official OpenAI documentation reviewed on 2026-09-01 says local Codex clients support ChatGPT subscription sign-in and API-key sign-in while Codex cloud requires ChatGPT sign-in. That fact is deliberately not encoded as a timeless provider capability invariant. See [OpenAI Codex authentication](https://learn.chatgpt.com/docs/auth).

No current access-support claim is made here for Google, xAI, Anthropic, DeepSeek, Ollama, or a future community gateway.

## 15. Future adapter evidence

Before an adapter admits an access mechanism, it must establish current support from official provider/runtime documentation and bind the applicable adapter, version, configuration, data boundary, credential custody, and verification evidence. Unknown or changed support remains unresolved rather than guessed.

## 16. Mirror Core and reuse

Current Mirror Core was inspected at `a8e317516611a14fd6fb9ed65148cf13eb7a8108`. Its provider plane is a runtime-specific OpenAI-compatible transport with direct material and ordered fallback behavior; it is not the inert no-secret/no-silent-fallback Pond policy declaration required here. This cut does not copy that runtime or claim ownership of reusable inference, credential, or governance substrate. Future shared governed primitives must be reused from Mirror Core when deliberately established there.

## 17. Living Agent and specialists

Living Agent was inspected at `df051a33e22c6b3b1cf1b7a0cf74ef6c23f9df13`; its provider-neutral inference kernel is a strong implementation reference owned by that agent. Coder was inspected at `7b23e430560c47ff9cdf6d7459c0441d28fac241`; its Codex/Grok and provider adapters are specialist construction infrastructure. Pond imports or integrates neither runtime. Living Agent and specialists retain their separately governed identities, continuity, and domain responsibilities.

## 18. Explicit non-goals

This cut adds no provider call, model selection, inference, adapter, health check, pricing/budget enforcement, routing, fallback, load balancing, API/OAuth/subscription login, BYOK input, credential storage, vault, network, persistence, authentication, Mirror Core/Bridge/MCP/Living Agent/Coder integration, approval, execution, Telegram/WhatsApp, UI, deployment, or activation.

## 19. Activation

`NOT_INCLUDED`. The fixture and contract declare product policy only; nothing is live, reachable, authenticated, authorized, or activated.
