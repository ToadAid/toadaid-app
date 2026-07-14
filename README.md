# ToadAid App

**Product name:** ToadAid Pond  
**Repository:** `ToadAid/toadaid-app`  
**Visibility:** Private

ToadAid Pond is the planned unified operator cockpit for the ToadAid ecosystem. Its primary host is ChatGPT through a ToadAid App UI, while the frontend and contracts should remain portable enough to support a loopback browser host and an optional desktop host later.

## Architecture

```text
Primary interface
ChatGPT + ToadAid Pond App

Reusable frontend
Pond UI Core

Reasoning
ChatGPT

Governance
Mirror Core

Local authority boundary
Mirror Desktop Bridge

Specialists
ToadAid Coder
ToadAid Trader
ToadAid Zora Agent
Frog-to-Toad Agent
Future governed ToadAid plugins

Native and recovery surfaces
Specialist TUI / WebUI / desktop apps
Small local Bridge CLI
Minimal loopback Pond fallback
```

## Doctrine

- ChatGPT reasons, coordinates, explains, and proposes.
- Mirror Core owns durable governance doctrine, agent identity, policy, and memory.
- Mirror Desktop Bridge verifies state, exposes bounded capabilities, enforces approval and execution gates, dispatches approved actions, and records receipts.
- Specialist agents provide narrow domain capabilities through stable governed contracts.
- Tommy remains the final human authority for meaningful actions.
- The Pond frontend is never approval, signing, wallet, or execution authority by itself.
- Existing specialist repositories and their TUI, WebUI, desktop, CLI, and runtime development continue independently.
- One backend truth may support multiple operator surfaces.
- Trader keys, signing material, credentials, and unrestricted execution access must never enter ChatGPT or the Pond frontend.

## Current State

Stage 0A is documentation-only:

- no MCP server
- no Apps SDK runtime
- no React application
- no Bridge connection
- no plugin loading
- no authentication
- no approval recording
- no execution
- no wallet or trading access
- no credentials
- no deployment

## Repository Map

```text
README.md
BUILD_LIST.md
docs/
  authority-and-host-boundaries.md
  openai-app-reference.md
  toadaid-pond-blueprint.md
```

See [`BUILD_LIST.md`](BUILD_LIST.md) for the staged roadmap and [`docs/toadaid-pond-blueprint.md`](docs/toadaid-pond-blueprint.md) for the product architecture.
