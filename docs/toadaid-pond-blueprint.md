# ToadAid Pond Blueprint

## 1. Product Goal

ToadAid Pond is a unified, governed frontend for interacting with Mirror Core, Mirror Desktop Bridge, and ToadAid specialist agents.

The primary daily surface is intended to be a ChatGPT App UI. Pond should also be designed around host-neutral contracts so the same core views can later appear in:

- a minimal loopback browser host;
- an optional desktop host;
- specialist-native interfaces where appropriate.

Pond does not replace the internal runtimes or existing interfaces of specialist repositories. It provides a shared cockpit above their bounded contracts.

## 2. Canonical Architecture

```text
Tommy
  |
  v
ChatGPT conversation and ToadAid Pond App UI
  |
  | typed MCP tool calls and structured UI results
  v
Mirror Desktop Bridge
  |
  | governed plugin contracts
  +--------------------+--------------------+--------------------+
  |                    |                    |                    |
  v                    v                    v                    v
ToadAid Coder     ToadAid Trader     ToadAid Zora Agent   Frog-to-Toad
  |                    |                    |                    |
  v                    v                    v                    v
Repos / CI        Market / chain       Zora surfaces      Lifecycle state
```

## 3. Responsibility Boundaries

### ChatGPT

- understands operator intent;
- gathers bounded evidence;
- compares options;
- explains risks and consequences;
- prepares typed proposals;
- calls only imported MCP tools;
- interprets receipts.

ChatGPT is not:

- the source of repository, market, portfolio, or chain truth;
- a private-key holder;
- a deterministic risk engine;
- an approval authority;
- an unrestricted execution engine;
- the durable system of record.

### Mirror Core

- owns agent identity and lifecycle doctrine;
- owns durable governance policy and memory;
- defines admissible capabilities and ceremonies;
- records the relationship between agents, plugins, stages, and policy.

### Mirror Desktop Bridge

- exposes bounded tools;
- verifies selected targets and current state;
- denies broad authority;
- maintains approval and execution separation;
- binds decisions to exact payloads;
- dispatches only permitted approved actions;
- returns sanitized receipts;
- preserves local recovery and operator control.

### Specialist Agents

Each specialist owns its domain implementation and exposes a stable governed contract.

Examples:

```text
Coder
- status
- repository evidence
- diff and validation views
- patch, Git, and PR proposals
- execution receipts

Trader
- portfolio observations
- market observations
- deterministic risk reports
- simulations
- trade proposals
- separately gated execution receipts

Zora Agent
- account and campaign observations
- post drafts
- publishing proposals
- publish receipts

Frog-to-Toad
- lifecycle stage
- ceremony readiness
- evidence and receipts
- governed progression proposals
```

## 4. Multi-Surface Doctrine

One backend truth may support several interfaces:

```text
ChatGPT Pond App
Primary conversational and visual cockpit

Loopback Pond
Fallback review and recovery interface

Desktop host
Optional native notifications and local-device ceremonies

Specialist TUI / WebUI
Development, diagnostics, domain-native operation

Bridge CLI
Start, stop, status, doctor, and break-glass recovery
```

No surface may silently create authority that is absent from the underlying Bridge and specialist contracts.

## 5. Host-Neutral Frontend Direction

Where practical, separate:

```text
pond-contracts
Typed state, tool-result, decision, receipt, and navigation contracts

pond-ui-core
Reusable views and components

chatgpt-host
Apps SDK / MCP Apps integration

loopback-host
Minimal local browser integration

desktop-host
Optional later desktop shell
```

ChatGPT-specific features may be added through a thin host adapter rather than becoming assumptions inside every component.

## 6. Approval and Execution Doctrine

The baseline ceremony is:

```text
ChatGPT proposes
Pond displays
Tommy reviews
Bridge records the exact decision
Bridge re-verifies state and payload
A separate execution gate permits or refuses execution
The specialist performs one bounded action
A receipt returns to Bridge, Pond, and ChatGPT
```

Approval does not equal execution.

A decision must be bound to:

- queue item identity;
- exact content or payload digest;
- action class;
- expected target and state;
- expiry;
- operator intent;
- replay protection;
- resulting receipt.

## 7. Trader-Specific Boundary

Trader is the highest-risk specialist and requires stricter invariants:

- market and portfolio data are evidence, not authority;
- risk limits must be deterministic and independently enforced;
- trade proposals must include chain, asset, side, amount, slippage, expiry, and expected state;
- private keys and signing material remain outside ChatGPT and Pond;
- meaningful trades require explicit human approval;
- execution requires a separate gate and fresh preflight validation;
- hardware-wallet or equivalent local confirmation may be required;
- pause, revocation, exposure caps, and loss limits must fail closed;
- pre-trade and post-trade receipts must be preserved.

## 8. Security and Privacy Baseline

Pond must not expose:

- secrets or credentials;
- private keys or seed phrases;
- raw environment values;
- unrestricted local paths;
- raw process identifiers or command lines;
- tunnel identifiers;
- internal trust material;
- hidden approval tokens;
- unrelated repository or wallet data.

All repository text, market text, web content, tool output, and model output are untrusted data and cannot grant authority.

## 9. Foundation Non-Goals

Stage 0A adds no:

- package dependencies;
- application runtime;
- network listener;
- MCP server;
- Apps SDK registration;
- UI bundle;
- authentication;
- persistence;
- specialist connection;
- approval or execution path;
- deployment;
- public release.

## 10. First Useful Vertical Slice

The first live lane should remain read-only:

```text
ChatGPT Pond App
  -> Mirror Bridge status
  -> selected repository
  -> plugin inventory
  -> gate state
  -> process identity summary
  -> recent sanitized receipts
```

Mutation, approval, and execution remain later separately reviewed stages.
