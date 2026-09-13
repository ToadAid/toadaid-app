# Stage B3-P4A — Sanitized receipt-reference projection foundation

## Binding

Parent commit: `7ee8a8bbaf73df0b8788972cd981027048782821`

Feature branch:
`feat/stage-b3-p4a-sanitized-receipt-reference-foundation`

Canonical architecture commit:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Establish one host-neutral, fixture-only Pond projection for an opaque sanitized
receipt reference before B3 attempts to present receipt state in the UI.

For this cut, sanitized means the contract is structurally reference-only and
contains no receipt body, payload, claims, result, private operator material,
credential material, or authority-bearing field. It does not mean a live
receipt or external sanitization process was inspected or verified.

## Explicit non-goals

- no receipt body, payload, claim, result, approval record, private operator
  text, signature, credential, secret, endpoint, or transport;
- no canonical receipt schema, universal ReceiptId format, receipt database,
  storage owner, retention policy, retrieval API, or sanitization service;
- no receipt lookup, parsing, verification, proof binding, applicability
  evaluation, acceptance, correction, supersession, or revocation;
- no UI presentation; B3-P4B remains a separate future cut;
- no Bridge, MCP, provider, network, persistence, routing, delivery, invocation,
  capability, Grant, approval, mutation, execution, wallet, signing, trading,
  publication, deployment, or runtime activation.

## Exact scope

Files:

- `BUILD_LIST.md`
- `docs/stage-b3-p4a-sanitized-receipt-reference-foundation.md`
- `src/contracts/pond-sanitized-receipt-reference.ts`
- `src/fixtures/stage-b3-p4a-sanitized-receipt-reference.ts`

Runtime scope: TypeScript contract and deterministic fixture compilation only.

Tool scope: repository inspection, local file mutation, locked dependency
installation, TypeScript validation, existing JavaScript self-tests, locked
Rust check, Git, and GitHub pull-request workflow.

Network scope: package installation and GitHub repository workflow operations
only. No Pond runtime network capability is added.

## Canonical basis and dependencies

Canonical Derived Evidence law requires receipt claims to derive from actual
observations and forbids hardcoded proof identifiers from becoming performed
bindings. Evidence and Activation law keeps receipts separate from activation.
Scope Sovereignty law requires receipts to preserve relevant scope and
provenance without becoming broader disclosure. Governed Runtime Component
Allocation selects no universal receipt database or storage owner.

Pond's local blueprint assigns typed receipt presentation contracts to the
host-neutral `pond-contracts` direction. This cut therefore defines only a
Pond-local projection shape over the existing A4 envelope. It does not define
canonical receipt lifecycle or storage semantics.

## Contract and fixture

`PondReceiptRef` is an opaque Pond-local fixture reference. It is explicitly not
a canonical ReceiptId format and remains distinct from scope, projection
subject, evidence-reference, principal, agent, and Grant identities.

`PondSanitizedReceiptReferenceProjection` provides only:

- the opaque receipt reference;
- structural reference-only/no-body posture;
- A4-preserved source-scope posture;
- unevaluated receipt state;
- unperformed verification and applicability evaluation;
- unestablished acceptance;
- authority `none`;
- the common A4 fixture projection envelope.

The deterministic fixture binds one opaque reference to the existing A7 Project
X fixture scope. Its A4 envelope is a fixture projection of the reference, not
proof that a receipt exists, is correct, is currently applicable, or was
externally sanitized.

## Trusted sources, channels, and precedence

Canonical architecture at the bound commit governs receipt/evidence, scope,
verification, and authority law. A4 owns the local projection envelope. This
new contract owns only Pond's host-neutral reference presentation vocabulary.

The fixture provides no receipt source channel, receipt body channel, verifier
channel, approval channel, or authority-bearing channel. Its authored values
cannot override canonical receipt state or establish a live receipt fact.

## Authority ceiling and forbidden capabilities

Authority: `none`.

The contract forbids body, payload, content, claims, results, approval, Grant,
mutation, execution, authorization, credential, secret, token, signature,
signer, wallet, transport, endpoint, and persistence fields.

The cut cannot retrieve, reveal, verify, accept, correct, route, invoke, mutate,
execute, or activate anything.

## Validation and completion evidence

- `npm ci --ignore-scripts --no-audit --no-fund`;
- `npm run typecheck`;
- JavaScript syntax and deterministic render-policy self-tests remain green;
- locked Tauri Rust check;
- exact changed-path and whitespace review.

This cut provides typed/structural fixture proof only. It provides no production
wiring proof, live proof, receipt truth, sanitization verification, or
cross-host conformance proof.

## Activation

Host-neutral fixture receipt-reference contract: **INCLUDED**.

UI, receipt access, verification, persistence, host integration, or consequence
activation: **NOT_INCLUDED**.
