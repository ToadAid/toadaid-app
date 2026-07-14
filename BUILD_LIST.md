# ToadAid App Build List

## Status Vocabulary

- `COMPLETE`: merged and verified repository truth.
- `CURRENT`: the only active planned cut.
- `NEXT`: approved ordering, not yet started.
- `FUTURE`: designed direction, not approved for implementation.
- `BLOCKED`: requires a separate explicit security or authority decision.

## Product Lock

```text
Product name: ToadAid Pond
Repository: ToadAid/toadaid-app
Visibility: private

Primary interface:
ChatGPT + ToadAid Pond App

Reasoning:
ChatGPT

Governance:
Mirror Core

Local authority boundary:
Mirror Desktop Bridge

Specialists:
ToadAid Coder
ToadAid Trader
ToadAid Zora Agent
Frog-to-Toad Agent
Future governed ToadAid plugins

Recovery:
small local Bridge CLI
minimal loopback Pond
specialist-native interfaces
```

## Stage 0 — Foundation and Read-Only Shell

### Stage 0A — Private Repository and Doctrine Seed — COMPLETE

- private repository;
- README;
- Pond blueprint;
- authority and host boundaries;
- official OpenAI Apps SDK reference map;
- staged build list;
- no runtime, dependencies, connection, approval, or execution.

### Stage 0B — Host-Neutral Pond Contracts and Fixture State — CURRENT

- define typed fixture-only contracts for:
  - navigation;
  - runtime status;
  - plugin inventory;
  - selected target;
  - gates;
  - approvals;
  - receipts;
- no MCP calls;
- no network;
- no persistence;
- no live Bridge dependency.

### Stage 0C — Static Pond Navigation and Component Shell — NEXT

- static Overview, Coder, Trader, Agents, Approval Queue, Receipts, and Settings views;
- fixture-only rendering;
- accessibility and responsive layout;
- no live tools or mutations.

### Stage 0D — Apps SDK Development Harness — FUTURE

- minimal MCP Apps-compatible development host;
- static tool results only;
- no local Bridge connection;
- no authentication or deployment.

### Stage 0E — Read-Only Mirror Bridge Status Integration — FUTURE

- Bridge runtime status;
- selected repository;
- gate states;
- process identity summary;
- recent sanitized receipts;
- read-only only.

### Stage 0F — Plugin Inventory and Capability Projection — FUTURE

- list admitted specialist plugins;
- show bounded capabilities and disabled authority;
- no dynamic plugin loading or execution.

## Stage 1 — ToadAid Coder Cockpit

### Stage 1A — Coder Read-Only Repository Cockpit — FUTURE

- repository status;
- tree;
- history;
- bounded text reads;
- capability profile.

### Stage 1B — Coder Diff and Validation Views — FUTURE

- sanitized diffs;
- deterministic validation descriptions;
- validation results and receipts.

### Stage 1C — Governed Coder Draft Submission — BLOCKED

- patch, validation, Git, and PR draft intake;
- exact schema proof required;
- no approval or execution in the same cut.

## Stage 2 — Approval Ceremonies

### Stage 2A — Approval Queue Display — FUTURE

- read-only queue and detail views;
- integrity-bound packet presentation;
- no decision controls.

### Stage 2B — Exact Human Decision Ceremony — BLOCKED

- explicit operator interaction;
- exact payload binding;
- expiry and replay protection;
- separate decision receipt.

### Stage 2C — Decision and Execution Separation Proof — BLOCKED

- prove approval cannot execute;
- prove gate and preflight remain independently required;
- preserve local fallback approval.

## Stage 3 — ToadAid Trader Cockpit

### Stage 3A — Read-Only Portfolio Cockpit — FUTURE

- balances;
- positions;
- exposure;
- source and freshness evidence;
- no wallet authority.

### Stage 3B — Market and Risk Views — FUTURE

- market observations;
- deterministic risk limits;
- concentration and liquidity views;
- no model-owned risk override.

### Stage 3C — Trade Simulation and Proposal Packets — BLOCKED

- chain, asset, side, amount, price boundary, slippage, expiry, and expected state;
- simulation only;
- no signing or broadcast.

### Stage 3D — Human-Gated Trade Ceremony — BLOCKED

- explicit operator approval;
- fresh deterministic preflight;
- hardware-wallet or equivalent local confirmation where required.

### Stage 3E — Separately Gated Trade Execution and Receipts — BLOCKED

- narrow allowlisted adapters;
- pause and revocation;
- exposure and loss limits;
- pre-trade and post-trade receipts;
- no keys in ChatGPT or Pond.

## Stage 4 — Additional Specialist Cockpits

### Stage 4A — Frog-to-Toad Lifecycle Cockpit — FUTURE

- stage status;
- ceremony readiness;
- evidence and receipts;
- progression proposals.

### Stage 4B — ToadAid Zora Agent Cockpit — FUTURE

- profile and campaign state;
- post drafts;
- governed publishing proposals;
- publishing receipts.

### Stage 4C — Mirror Core Governance Views — FUTURE

- agent identity;
- plugin admission;
- governance policy;
- lifecycle and memory summaries.

## Stage 5 — Reusable Hosts

### Stage 5A — Shared Pond UI Core — FUTURE

- reusable components and contracts;
- host adapters;
- no duplicated authority logic.

### Stage 5B — Minimal Loopback Fallback Host — FUTURE

- recovery and local review;
- loopback-only;
- no broad runtime management.

### Stage 5C — Optional Desktop Host — FUTURE

- native notifications;
- local-device ceremonies;
- optional hardware-wallet integration;
- same governed contracts.

## Stage 6 — Identity, Security, and Private Release

### Stage 6A — Authentication and Identity Linking — BLOCKED

- explicit ToadAid identity;
- least-privilege scopes;
- server-side token handling;
- no reuse of ChatGPT browser cookies.

### Stage 6B — Security and Privacy Review — BLOCKED

- prompt injection;
- data minimization;
- auth and session review;
- CSP and frontend isolation;
- threat model and red-team evidence.

### Stage 6C — ChatGPT Connection and UI Proof — BLOCKED

- fresh-thread tool import;
- connector-visible schemas;
- structured UI rendering;
- no unintended authority.

### Stage 6D — Trusted Toadgang Private Release — BLOCKED

- private distribution only;
- operator onboarding;
- rollback and recovery;
- no public release until separately approved.

## Permanent Boundaries

Until a later stage explicitly proves otherwise:

- no broad authority;
- no model-owned approval;
- no secrets in tool output;
- no private keys in ChatGPT or Pond;
- no automatic trading;
- no automatic publishing;
- no implicit repository mutation;
- no silent fallback from bounded tools to shell access;
- no removal of the small local recovery CLI;
- no public release.
