# Stage B2-P4B-P7 — Visual asset admission decision boundary

## Binding

Parent commit: `291c5c2e618a413838c548728421b53b1f111ede`

Parent tree: `5750ac7db269e2d53967bd0b98b71078c07b5214`

Feature branch:
`feat/stage-b2-p4b-p7-visual-asset-admission-decision-boundary`

Canonical architecture reviewed at:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Purpose

P4B-P4 can return:

`eligible_for_repository_admission`

P4B-P6 can compose stable local file facts and separately independently
verified provenance into the evidence consumed by P4B-P4.

Neither layer performs actual repository admission.

P4B-P7 records the governance boundary that must exist before any later cut
may convert gate eligibility into repository admission.

The core distinction is permanent:

`eligible_for_repository_admission != admitted`

## Recon conclusion

The current Pond repository contains no reusable canonical approval recorder,
human-decision evidence contract, admission mutation primitive, or admission
receipt primitive suitable for this visual-asset boundary.

The closest existing Pond proposal pattern is the Stage A8
RouteCandidateProposal. It deliberately remains inert and records:

- approval: not performed;
- mutation: not performed;
- execution: not performed;
- authority: none.

It therefore cannot be repurposed as visual-asset approval.

The existing Pond relationship projections likewise do not evaluate effective
authority. They preserve that current evaluation may require exact actor,
scope, capability, target, constraints, policy, state, approval where
required, revocation, expiry, consumption, e-stop, and other governing terms.

## Canonical architecture constraints

The Delegated Authority and Capability Grant Contract preserves:

`grant != approval`

A Grant, capability declaration, candidate, successful gate result, model
output, message, attestation, or repository path cannot manufacture approval.

Where an action requires approval, effective-authority evaluation must include
the required approval as a distinct current term.

The Attestation and Evidence Exchange Contract also preserves:

`evidence != authority`

`receipt != authority`

`attestation != authority`

Private human or operator approval text must not be copied, paraphrased,
hashed, embedded, signed, committed, or published merely to create evidence.

A later governed layer may expose only a permitted value-free fact such as
"required human-decision evidence is present", and only when the applicable
canonical proof contract actually permits that statement.

## P4B-P7 ownership rule

Pond does not become the approval authority for visual assets.

Pond does not invent:

- an approver identity format;
- an approval token;
- a hidden approval string;
- an approval signature schema;
- an admission receipt format;
- a reusable human-decision evidence format;
- a current-authority evaluator;
- a repository mutation authority.

The canonical owner and trusted-channel semantics for any reusable approval or
human-decision evidence primitive must be assigned outside this presentation
layer before Pond may consume such a primitive.

## Future admission input boundary

A future implemented admission decision may be evaluated only when its
canonical dependencies are defined.

At minimum, the decision boundary must preserve exact binding to:

1. the exact visual-asset candidate;
2. the exact successful P4B-P4 gate evaluation;
3. the exact repository-relative asset path;
4. the exact digest and size represented by the admitted candidate/evidence;
5. the exact applicable policy or policy reference;
6. current applicability/freshness for every evidence item that requires it;
7. the separately governed human or governance decision evidence when policy
   requires approval;
8. the canonical authority of the decision-maker or decision mechanism,
   established by its proper owner rather than by Pond;
9. revocation, invalidation, supersession, replacement, or e-stop conditions
   that apply at decision time.

This list is a boundary checklist, not an implementation schema.

Exact field names, identifiers, receipt serialization, signatures,
timestamps, trusted-channel transport, and persistence mechanics remain
deferred to their canonical owner.

## Required fail-closed behavior for a future implementation

A later implementation must refuse rather than infer admission when any
required term is missing, stale, mismatched, revoked, invalidated, or
unverifiable.

In particular:

- a P4 refusal cannot become admission;
- an old eligible result cannot govern a changed candidate;
- path, digest, size, provenance, or metadata mismatch cannot be ignored;
- evidence presence cannot be upgraded into approval;
- an attestation cannot be upgraded into authority;
- a message saying "approved" cannot become approval;
- provider completion cannot become acceptance;
- UI state cannot become repository authority;
- a prior receipt cannot restore revoked or expired authority;
- a host, provider, wallet, session, or transport cannot become an approver by
  implication.

## Repository ceremony boundary

Actual repository admission is a repository mutation.

For a specifically authorized real-asset cut, the human-reviewed repository
workflow may itself perform that concrete mutation after all required evidence
is reviewed.

That one repository ceremony must not be reinterpreted as a reusable Pond
runtime approval primitive or standing authority.

The asset becomes present in the repository because the governed repository
change is accepted, not because Pond generated an "approved" field.

## P4B-P7 first-cut result

This cut is intentionally design-only.

It defines the seam and refuses to implement a fake approval owner.

No TypeScript approval/admission-decision contract is introduced in P4B-P7
until canonical decision evidence and ownership are sufficiently assigned to
implement without semantic invention.

## Unblock conditions

A later implementation cut may proceed by one of two bounded paths:

1. **Reusable governed decision path:** canonical architecture/runtime ownership
   defines the approval or human-decision evidence primitive, its trusted
   channel, current-applicability rules, and authority checks; or
2. **Specific repository admission path:** one exact real asset is reviewed
   under an explicitly authorized repository ceremony with exact provenance,
   license, hash, size, metadata, performance evidence, and current P4/P5/P6
   evidence, without claiming a reusable runtime approval mechanism.

Either path must preserve:

`approval != authority amplification`

`admission != runtime loading`

`repository presence != execution authority`

## Explicit exclusions

Actual visual asset import: NOT_INCLUDED.

Repository mutation: NOT_INCLUDED.

Approval recording: NOT_INCLUDED.

Reusable human-decision evidence implementation: NOT_INCLUDED.

Admission receipt implementation: NOT_INCLUDED.

Current-authority evaluator: NOT_INCLUDED.

Provenance discovery or license research: NOT_INCLUDED.

Runtime asset loading or rendering: NOT_INCLUDED.

GLB/GLTF/model-loader admission: NOT_INCLUDED.

Network/CDN/localhost behavior: NOT_INCLUDED.

Wallet/signing, tools, agent invocation, execution, publication, deployment,
and authority: NOT_INCLUDED.
