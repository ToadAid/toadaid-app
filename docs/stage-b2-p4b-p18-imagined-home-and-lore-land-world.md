# Stage B2-P4B-P18 — Imagined Home and Lore Land World

## Binding

Parent commit: `e3e83556ff7c5d1e45231ddc924bf517b9e8108b`

Canonical architecture reviewed at:
`bc7a971dfb243f0aa4417da6cef85cc56204f783`

Activation: `NOT_INCLUDED`

## Goal

Admit one exact user-supplied imagined Lore Land composition as Home
atmosphere and three exact user-supplied real deed captures as fixture cards in
a new read-only World presentation.

The World view preserves the future public-address lookup shape while making
clear that this cut performs only local EVM-address format validation.

## Explicit non-goals

- no live Base RPC, OpenSea API, indexer, or metadata request;
- no ownership or holder claim;
- no wallet connection, signature, authentication, or identity binding;
- no membership, admission, grant, approval, or authority inference;
- no persistence, analytics, cache, transport, execution, or deployment;
- no claim that an OpenSea projection is canonical current ownership;
- no reuse license granted to third parties by this repository record.

## Exact scope

Files admitted under the user-authorized repository ceremony:

| Repository path | Role | SHA-256 | Bytes | Dimensions |
|---|---|---|---:|---:|
| `ui/assets/tobyworld/imagined-lore-world-03.png` | Home imagined atmosphere | `9c150a820884fd52d6612d4957639cba767429e7bb3067f6eb9c1c15e7d7e8f3` | 3,269,457 | 1254 × 1254 |
| `ui/assets/tobyworld/lore-land-715.png` | Real-deed fixture capture | `2372ba608557aba570999d717f9aeabf6307bc838e29f6b5a6c57928bfbdca28` | 3,132,864 | 1254 × 1254 |
| `ui/assets/tobyworld/lore-land-717.png` | Real-deed fixture capture | `508aeb9434c028026c62f1d480c8ac4806925cef67e0c1af4a7d3d4d800ded7c` | 2,760,434 | 1254 × 1254 |
| `ui/assets/tobyworld/lore-land-890.png` | Real-deed fixture capture | `538ae722f3be433492730b450ec8520a3ec608f32b69820a554141d8de56b3d4` | 3,004,855 | 1254 × 1254 |

All four are PNG, RGBA, non-interlaced, and remain inside the P4B-P4
per-file image limits.

Runtime scope is limited to static local HTML, CSS, and JavaScript loaded by
the existing Tauri/web seam. `pond-shell.js` switches between two local views
and validates address syntax. It has no fetch, WebSocket, storage, wallet, or
host API call.

Network scope is none.

## Provenance and permission record

The human repository owner supplied the four source files from
`/home/tommy/Pictures/toadaid-app/` and stated in this workspace conversation
that:

- the three numbered captures are real Lore Land deed NFTs they own/minted;
- the imagined composition was created with ChatGPT using their own deeds;
- the images should be used for the ToadAid desktop Home and World designs;
- this repository cut should proceed.

This is a specific repository-use authorization, not a reusable Pond approval
primitive and not a representation about rights beyond the supplied assets
and this project use.

## Canonical and source basis

Canonical law preserves:

- wallet address is not principal identity;
- identity is not membership;
- ownership evidence is not membership or authority;
- evidence and indexed projections are not authority;
- a narrow future observation may state that a wallet was observed as owner
  of a deed at a bound block and time.

The view binds the future ownership source to Base contract:

`0x0495601af6f86efb14c9d478ea46b2aa09cb164a`

OpenSea collection:

`https://opensea.io/collection/tobyworld-canonical-lore-land-deeds/overview`

The contract is the future primary ownership-evidence source. OpenSea is a
secondary indexed presentation source that may lag.

## Authority ceiling and forbidden capabilities

Authority ceiling: `none`.

The cut forbids live retrieval, owner claims, metadata claims, identity
binding, membership inference, wallet connection, signing, authentication,
persistence, mutation, approval, and execution.

## UI behavior

- Home layers the admitted imagined composition beneath existing cockpit
  instruments and above the procedural world.
- Home and World are real keyboard-reachable local views.
- route changes move focus to the destination main region.
- World uses visible address labeling, blur/submit validation, stable inline
  status, 48px controls, descriptive image alternatives, responsive layouts,
  view-activated lazy deed-image loading, and existing reduced-motion behavior.
- valid address input remains local and produces no deed result while live
  truth is inactive.
- deed cards explicitly say owner not evaluated.

## Completion evidence

Required validation:

- exact admitted hashes, sizes, formats, and dimensions;
- TypeScript typecheck;
- JavaScript syntax checks;
- HTML asset/link/script integrity;
- existing render-policy self-test;
- `git diff --check`;
- desktop visual inspection when a graphical host is available.

## Future live-read dependency

A later cut may activate read-only lookup only after exact source identity,
trusted delivery, metadata rules, block/time observation, freshness policy,
error/degraded behavior, and evidence presentation are separately proven.

That later result must remain a public observation and must not be upgraded
into principal identity, login, membership, admission, capability, or
authority.
