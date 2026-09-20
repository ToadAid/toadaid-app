# Stage B2-P4B-P19 — Home visual hierarchy

## Binding

Parent commit: `9480062f5586ddf8394a492ce74f41b98b844426`

Canonical architecture repository: `ToadAid/toadaid-architecture`

Canonical branch: `main`

Canonical commit: `bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Build a full-page imagined Lore Land archipelago around a central transparent
hero slightly larger than its companion lands. Three transparent secondary
lands derive from the user's already admitted deed references and establish
foreground, middle-distance, and far-distance depth. The constructed
procedural Three.js world is retired from the Home runtime so it no longer
competes with the artwork. The existing specialist-agent fixture identity
remains a quiet presentation label.

## Explicit non-goals

- no change to the World view, deed fixtures, or public-address observer;
- no new loader, package, API, storage, or network dependency;
- no live Tobyworld, ownership, metadata, wallet, agent, or repository state;
- no authentication, wallet connection, signing, persistence, proposal,
  approval, grant, authority, mutation, or execution;
- no change to canonical or Mirror Core governance semantics.

## Scope

Files:

- `BUILD_LIST.md`
- `docs/stage-b2-p4b-p19-home-visual-hierarchy.md`
- `ui/pond-desktop.css`
- `ui/pond-desktop.html`
- `ui/assets/tobyworld/imagined-lore-land-715.png`
- `ui/assets/tobyworld/imagined-lore-land-717.png`
- `ui/assets/tobyworld/imagined-lore-land-890.png`
- `ui/assets/tobyworld/imagined-lore-world-03-cutout.png`

Runtime surface: the existing static Home presentation only. `pond-world.js`
remains in the repository but is no longer loaded by Home.

Network scope: none. The runtime receives no network capability.

## Authority ceiling and forbidden capabilities

The cut remains presentation-only and authority-none. The image remains an
admitted imagined composition, not current world truth. The imagined guide
label remains a fixture presentation, not an agent invocation or identity
authority.
No visibility, visual prominence, label, or motion may be interpreted as
membership, admission, capability, grant, approval, or execution authority.

## Composition decision

Visual north star: `docs/north-star-desktop.jpg` — a one-screen desktop
composition with the nav rail, welcome/authority panel, distant lands around a
centered focus, voice dock, and tagline row all visible without scrolling.
This cut moves Home toward that structure on wide viewports; the imagined
cutout hero remains the centered focus in place of any guide hologram, and no
live guide, simulation, or authority presence is implied.

- the admitted imagined composition is presented as a transparent Home hero
  cutout, one visual step larger than the secondary lands, matching their
  cutout style so no painted sky card or orbit ring ornament remains;
- three transparent imagined lands cluster tightly around the hero as one
  archipelago band at deliberately different scales, brightness levels, and
  depth positions; the whole cluster is anchored to the stage center in fixed
  pixel offsets so a tall desktop window no longer stretches it toward the
  corners;
- clicking or keyboard-activating a side land swaps its artwork with the
  centered hero artwork as a presentation-only arrangement change; no
  preference, world state, or ownership meaning is stored or implied;
- on wide viewports the Home shell is locked to one screen height and the long
  fixture panel scrolls inside its rail, so the front page no longer stretches
  the stage; below the desktop breakpoint the page scrolls as before;
- the procedural canvas and its Three.js module are not loaded by Home;
- redundant DOM aura and platform ornament are removed from presentation;
- the specialist fixture wording remains visible in a compact projection label;
- responsive positioning centers the cluster within the available stage rather
  than underneath the desktop context rail;
- reduced-motion behavior and all existing accessible navigation remain intact.

## Generated asset record

The built-in image-generation tool produced three new project assets from the
user-supplied deed captures as reference images. Each final prompt requested a
single isolated, transparent, hand-painted watercolor sky island matching the
existing imagined hero, with no text, UI, border, logo, watermark, machinery,
or additional character:

- deed `715`: retain its grove, stepping-stone path, golden-brown toad, and
  emerald lore core; enrich it as an inhabited distant island;
- deed `717`: retain its lotus pond, tiered rise, gray toad, and green seed
  relic; add one delicate narrow waterfall;
- deed `890`: retain its log-step pond, golden-brown toad, chest, and ember
  sigil; add hanging vines and small lanterns.

| Repository path | Reference | SHA-256 | Bytes | Dimensions |
|---|---|---|---:|---:|
| `ui/assets/tobyworld/imagined-lore-land-715.png` | deed `715` | `467bde40b31129baa46e9a02e12028be6c3c78f57ce39a53511774ae5021b299` | 2,824,002 | 1254 × 1254 |
| `ui/assets/tobyworld/imagined-lore-land-717.png` | deed `717` | `50a7eef7f08520c986c52b072787760c50af26784beb0b5f21dd26c2174193f7` | 2,342,150 | 1254 × 1254 |
| `ui/assets/tobyworld/imagined-lore-land-890.png` | deed `890` | `de9f6d38154033997b77c8c503ddfe291a103216ceae4a479fc34b27af029f9f` | 2,730,324 | 1254 × 1254 |
| `ui/assets/tobyworld/imagined-lore-world-03-cutout.png` | derived from admitted `imagined-lore-world-03.png` | `27fa38759a960987707b6275f52bf09d99d465a05c4adc5c86a1bc9e462d13b2` | 3,275,731 | 1254 × 1254 |

All four are RGBA, non-interlaced PNG files with transparent backgrounds. The
hero cutout is a local, deterministic alpha extraction from the already
admitted imagined composition, recorded as
`scripts/extract-lore-world-cutout.py`: a border-seeded flood fill removes
only the painted sky and cloud background, protects and alpha-fades the
waterfall so it dissolves like the secondary lands, and feathers the remaining
edges. No island content was added, removed, redesigned, or repositioned, and
no network or external generation service was used.
The user's instruction to forge imagined Home lands from their owned deed
references is the repository-use authorization for this bounded cut. It is not
a reusable approval primitive or a grant of rights beyond this project use.

## Validation and completion evidence

- HTML structure and local asset references remain intact;
- JavaScript syntax checks remain clean;
- the render-policy self-test remains green;
- generated file hashes, sizes, dimensions, and RGBA pixel format are recorded;
- responsive source rules preserve centered hero composition at desktop,
  tablet, and narrow breakpoints;
- desktop and narrow visual inspection remains required when a connected
  graphical browser host is available;
- Home retains its explicit fixture-only and non-invocation wording;
- World behavior and source posture remain unchanged;
- committed-range whitespace validation remains clean.

## Activation

`NOT_INCLUDED`

This cut changes local presentation only. It does not start a server, desktop
host, transport, provider, Bridge, wallet, or other integration.
