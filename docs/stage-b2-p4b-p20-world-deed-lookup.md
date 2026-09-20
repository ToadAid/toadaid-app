# Stage B2-P4B-P20 — World live read-only deed lookup

## Binding

Parent commit: `9834bfe6189e889d310de3e1bb34e27d7869189b`

Canonical architecture repository: `ToadAid/toadaid-architecture`

Canonical branch: `main`

Canonical commit: `bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Cut the World view's public-address observer live for visitors who do not
connect a wallet: pasting any Base address observes the Canonical Lore Land
Deeds held by that address and presents each deed OpenSea-style — image,
name, token id, and the five metadata trait rows — bound to the observed
block. Wallet connection remains a separate future own-user feature; this cut
is paste-address read-only observation only.

## Explicit non-goals

- no wallet connection, signing, transaction, or authentication of any kind;
- no API keys, accounts, or paid services;
- no server, backend, or host-side transport; the read is made by the page
  itself against public endpoints;
- no persistence beyond the page's localStorage deed-index cache;
- no change to Home, the guide, navigation, or the specialist fixture;
- no authority, membership, identity, approval, or execution semantics from
  observed ownership; presentation is not authority.

## Scope

Files:

- `ui/pond-deed-lookup.js` (new)
- `ui/pond-shell.js`
- `ui/pond-desktop.html`
- `ui/pond-desktop.css`
- `src-tauri/tauri.conf.json`
- `docs/stage-b2-p4b-p20-world-deed-lookup.md`
- `BUILD_LIST.md`

Runtime surface: the existing World view (`#pond-world`) only.

## Network-scope admission (read-only, keyless)

The page itself performs exactly two classes of GET/POST read:

1. JSON-RPC `eth_call` / `eth_blockNumber` against one of exactly two
   keyless, CORS-open public Base endpoints —
   `https://mainnet.base.org` primary, `https://base-rpc.publicnode.com`
   failover — retried with backoff on HTTP 429/5xx transport-shaped
   failures:
   - `ownerOf(uint256)` batched through Multicall3
     `aggregate3` (`0xcA11bde05977b3631167028862bE2a173976CA11`, selector
     `0x82ad56cb`) over the id range 1–3000 in 300-id chunks, stopping after
     the first fully-unminted chunk (cap 6000) because the contract is ERC-721
     Metadata without Enumerable supply;
   - `tokenURI(uint256)` on the deed contract
     `0x0495601af6f86efb14c9d478ea46b2aa09cb164a`;
   - `eth_blockNumber` to stamp the observed block.
2. Metadata and image reads against the public IPFS gateway
   `https://gateway.pinata.cloud/ipfs/` (CORS-open; the ipfs.io/dweb.link
   gateways are retired). When the gateway is unreachable, metadata falls
   back to the keyless Blockscout token-instance mirror
   (`https://base.blockscout.com/api/v2/tokens/…/instances/<id>`), the same
   failover tier the sibling Tobyworld lore-land deed viewer uses; mirror
   image fields are normalized through the same gateway before display.

No other network access exists. No request carries a credential, signature,
wallet connection, or identifying data beyond the pasted public address and
the contract's own reads.

The host CSP is amended from `connect-src 'none'` to admit exactly these
four origins — `connect-src https://mainnet.base.org
https://base-rpc.publicnode.com https://gateway.pinata.cloud
https://base.blockscout.com` and `img-src …
https://gateway.pinata.cloud` (the gateway answers image reads directly
with no redirect). Every other connection target remains
fail-closed at the host layer: any future code path that attempted a
different origin would be blocked by the CSP itself, not merely by policy.

## Behavior record

- the deed index (id → owner at the observed block) is cached in
  `localStorage["pond-deed-index-<contract>"]` with its block and fetch time;
  a "Refresh index" control forces a rescan and "Clear results" restores the
  resting fixture preview;
- results replace the fixture cards only while a lookup is active; each card
  shows the gateway image, deed name and number, the metadata trait table
  (Background, Land, Core, Relic, Keeper), and OpenSea / Tobyworld links;
- the results bar stamps the observed block and time; a zero-result state is
  explicit rather than silent; failures degrade visibly in the existing
  `#wallet-status` element and never fall back to fixture data presented as
  live;
- `data-observation-posture` moves to `live_read_only_observation`.

## Authority ceiling

Observed ownership is a public-chain fact bound to the stamped block. It is
not identity, membership, admission, release, grant, approval, routing, or
execution authority, and it must never be interpreted as any of them. The
page transmits nothing and stores nothing beyond the read-only cache; the
paste-address flow requests no connection and proves nothing about the
person pasting.

## Validation evidence

- `node --check` clean on the new module and `pond-shell.js`;
- the Multicall3 `aggregate3` encoding and `Result[]` decoding were verified
  against the live Base endpoint before implementation: deeds 715, 716, and
  890 decode to one owner, an unminted id returns `success = false` with the
  ERC-721 revert payload, and a 300-id batch answers in ~0.15 s;
- live verification in the running desktop app: pasting the address that held
  715/716/890 observed **16 deeds** at block 51549456 and rendered each card
  with its gateway-resolved artwork, deed name, and the five trait rows
  (Background, Land, Core, Relic, Keeper) plus OpenSea/Tobyworld links; the
  results bar stamps the observed block and time; a deed-less address
  renders the explicit zero-result state; the cached second lookup is
  instant and "Refresh index" rescans;
- committed-range whitespace validation clean.

## Activation

`NOT_INCLUDED`

This cut changes World-view presentation and adds a bounded read-only fetch
path only. It does not start a server, transport, provider, Bridge, wallet,
or other integration, and grants no authority.