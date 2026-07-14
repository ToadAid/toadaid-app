# Authority and Host Boundaries

## Core Rule

A user interface can request and display actions. It cannot manufacture authority.

## Authority Matrix

| Component | May reason | May display | May propose | May record human decision | May verify gates | May execute |
|---|---:|---:|---:|---:|---:|---:|
| ChatGPT | Yes | Yes | Yes | No | No | No |
| Pond UI | No independent model authority | Yes | Request only | Through governed Bridge ceremony only | No | No |
| Mirror Core | Policy and governance logic | Yes | Policy outputs | Governance record only | Policy-level | No direct specialist execution |
| Mirror Desktop Bridge | Bounded orchestration | Yes | Queue intake | Yes, exact human-bound decisions | Yes | Only through explicit narrow executors |
| Specialist agent | Domain logic | Domain views | Domain proposals | No, unless delegated through Bridge contract | Domain preflight | Only its bounded gated operations |
| Tommy | Human judgment | Yes | Yes | Final meaningful approval | May inspect | Authorizes, but does not bypass gates |

## Host Boundaries

### ChatGPT Host

The ChatGPT host provides:

- conversation;
- model reasoning;
- tool selection;
- structured tool invocation;
- embedded app rendering.

It must not receive unrestricted local authority or sensitive signing material.

### Loopback Host

The loopback host exists for:

- recovery;
- local approval fallback;
- diagnostics;
- operation when ChatGPT connectivity is unavailable.

It remains loopback-only and should become minimal after the ChatGPT App is mature.

### Desktop Host

A future desktop host may provide:

- native notifications;
- hardware-wallet interaction;
- tray and startup controls;
- offline local state;
- operating-system integration.

It must reuse the same governed contracts rather than inventing a parallel authority model.

### Specialist-Native Hosts

Coder, Trader, Zora, and Frog-to-Toad may retain their own:

- TUI;
- WebUI;
- desktop app;
- CLI;
- test harness.

These surfaces remain useful for development, diagnostics, domain-specific workflows, and recovery.

## Failure Doctrine

When a host, connector, profile, plugin, or authority binding is unavailable:

- fail closed;
- preserve truthful state;
- do not silently fall back to a broader mechanism;
- do not reuse unrelated credentials;
- do not infer approval;
- do not execute;
- provide a sanitized refusal and recovery path.
