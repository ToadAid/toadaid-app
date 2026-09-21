# Stage B2-P4B-P21 — World view in-app WalletConnect read-only address observation

## Binding

Parent commit: `2f37625` (World view live read-only deed observation, PR #52)

Canonical architecture repository: `ToadAid/toadaid-architecture`

Canonical branch: `main`

Canonical commit: `bc7a971dfb243f0aa4417da6cef85cc56204f783`

## Goal

Cut the deferred own-user feature: an optional in-app wallet connection for
the World view. The user pairs a mobile wallet — Tangem included — through a
QR modal rendered in-page over the WalletConnect relay, and the connected
address feeds the existing read-only deed lookup exactly as a pasted address
would. The pairing is admitted with a read-only methods allowlist only, so
signing, transactions, and message signatures are not merely unused but
structurally unavailable under the pairing. The connection, the address it
reveals, and its display carry no authority.

## Explicit non-goals

- no signing, transaction, message signature (`personal_sign`,
  `signTypedData_*`), authentication claim, or authorization of any kind; the
  pairing methods allowlist is exactly `eth_accounts`,
  `eth_requestAccounts`, `eth_chainId`, enforced at pairing time;
- no deep-link to an external helper app; the pairing modal renders in-page;
- no server, backend, or host-side transport; the pairing is made by the
  page itself against the WalletConnect relay;
- no API keys beyond the already-public WalletConnect projectId reused from
  the lore-activation helper (`c86752a13a29b19d308dc10fb72b820f`);
- no membership, admission, `PrincipalId`, identity, approval, or execution
  semantics from a connected address: it carries exactly the epistemic status
  of the paste-address path, and Stage D (identity-bound reads) remains
  BLOCKED;
- no change to Home, the guide, navigation, or the specialist fixture;
- no activation; presentation is not authority.

## Scope

Files:

- `ui/vendor/walletconnect-provider.js` (new, vendored bundle, committed)
- `ui/vendor/walletconnect-LICENSE.txt` (new, committed)
- `ui/vendor/walletconnect-provenance.json` (new, committed)
- `ui/pond-wallet-connect-policy.js` (new)
- `ui/pond-wallet-connect.js` (new)
- `scripts/vendor-walletconnect.mjs` (new)
- `scripts/pond-wallet-connect-policy-selftest.mjs` (new)
- `ui/pond-desktop.html`
- `ui/pond-desktop.css`
- `ui/pond-deed-lookup.js` (header comment only)
- `package.json`, `package-lock.json`
- `.gitattributes`
- `.github/workflows/ci.yml`
- `src-tauri/tauri.conf.json`
- `docs/stage-b2-p4b-p21-world-walletconnect-observation.md`
- `BUILD_LIST.md`

Runtime surface: the existing World view (`#pond-world`) only.

## Pairing and network-scope admission

The pairing is admitted with exactly the read-only methods allowlist
`eth_accounts`, `eth_requestAccounts`, and `eth_chainId` (asserted by the
policy module before `EthereumProvider.init` and by the selftest). The
underlying `@walletconnect/ethereum-provider` is pinned exactly at
`2.25.0` as a development dependency; a fixed, argument-free
`scripts/vendor-walletconnect.mjs` bundles it — with the in-page QR modal —
into one committed ESM file `ui/vendor/walletconnect-provider.js` via the
exactly pinned esbuild, records versions in
`ui/vendor/walletconnect-provenance.json`, and copies the upstream LICENSE.
The bundle may textually contain signing-method names from shared upstream
code; the enforceable read-only guarantee is the pairing-time methods
allowlist, and grep of the bundle is recorded in the validation evidence, not
substituted for it.

Persistence classification:

- the WalletConnect SDK persists its own relay-transport material under its
  own `wc@2:*` localStorage keys — pairing/session symmetric transport keys
  owned by the SDK. They contain no ToadAid signing material, no private
  wallet keys, no identity, and no membership data; Pond code never reads
  them; `provider.disconnect()` deletes them;
- Pond's own persistence is exactly one record,
  `localStorage["pond-wallet-observation-v1"]` = `{version, posture:
  "observation_only", address, chainId, connectedAt}`, structurally
  validated on read (any mismatch fails closed to disconnected) and cleared
  on disconnect. It is a display cache of pairing facts, never the session
  itself: on load the SDK's own session must still exist, else the record is
  cleared.

Network admission: the host CSP `connect-src` is amended to admit exactly
the WalletConnect relay and support origins — `wss://relay.walletconnect.org`,
`wss://relay.walletconnect.com`, `https://verify.walletconnect.org`,
`https://verify.walletconnect.com`, `https://rpc.walletconnect.org`,
`https://echo.walletconnect.com`, `https://pulse.walletconnect.org`, and
`https://api.web3modal.org`. `img-src` is not widened: wallet-list imagery
inside the pairing modal degrades to fallback glyphs by design. `frame-src
'none'` stays (the modal is in-page DOM, not an iframe). Every other
connection target remains fail-closed at the host layer. The runtime host
set observed during validation is recorded in the validation evidence; any
future host requires a separate admission.

## Behavior record

- a "Connect wallet" control in the World view's address-observer section
  opens the read-only pairing modal; approving the pairing in the wallet
  displays the connected address, chain, and connection time in a bounded
  facts panel;
- `data-wallet-connection` moves to `optional_observation_only_connection`;
  the read-only seal note honestly reflects the state ("Observation only" /
  "Observing 0x…abr");
- "Use connected address" fills the existing paste input and runs the
  existing P20 lookup through the same submit path; the paste path itself is
  unchanged;
- an empty `accountsChanged` (wallet locked or session revoked) is treated as
  an explicit disconnect, never as an empty address;
- a `chainChanged` off Base mainnet fail-closes: the address stays visibly
  displayed with a `chain_not_admitted` copy, "Use connected address" is
  disabled, and no lookup is silently switched; returning to Base mainnet
  (8453) re-admits;
- a relaunch restores the pairing from the validated record without opening
  the modal; a corrupt record fails closed to disconnected;
- "Disconnect" clears Pond's record and the SDK's `wc@2:*` transport keys and
  restores the resting posture;
- pairing refusal, relay failure, or any pairing error degrades visibly in
  `#wallet-connect-status` and never widens the posture.

## Authority ceiling

A connected wallet address is not authentication, not a `PrincipalId`, not
membership, not admission, not release, grant, approval, routing, or
execution authority, and it must never be interpreted as any of them. The
WalletConnect pairing is transport-layer capability only — the admitted
methods cannot sign, send, or authenticate. Presentation is not authority.
Nothing in this cut moves Stage D.

## Validation evidence

- `scripts/pond-wallet-connect-policy-selftest.mjs` passes (`npm run
  test:stage-b2-p4b-p21`), asserting the methods allowlist rejects every
  signing/transaction method, chain admission, address extraction, record
  corruption cases, and all connection states;
- `npm run typecheck` clean; `node --check` clean on the new scripts and on
  the generated bundle;
- the vendored bundle is 4,014,002 bytes (unminified for reviewability),
  esbuild 0.28.2 in 355 ms; provenance in
  `ui/vendor/walletconnect-provenance.json` records the exact dependency
  versions (`@reown/appkit` 1.8.19, `@walletconnect/universal-provider`
  2.25.0, …) and the build shape;
- the bundle textually contains signing-method names from shared upstream
  code (`eth_sendTransaction` ×11, `personal_sign` ×9); as stated in the
  admission section, the enforceable read-only guarantee is the pairing-time
  methods allowlist, not the bundle text;
- the vendor script strips per-line trailing whitespace from the generated
  bundle before it is committed (the gitattributes `whitespace` attribute was
  measured not to suppress `git diff --check` detection on current git);
  staged `git diff --check --cached` is clean;
- `npm ci --ignore-scripts` followed by a working esbuild binary (optional
  dependency resolution, no postinstall);
- live verification in the running desktop app: the in-page QR modal renders
  and a mobile wallet pairing succeeds — verified live with an OKX wallet
  (no signing methods presented at pairing), and the connected address
  renders the block-stamped deed cards through the existing lookup;
- the runtime host set observed in devtools during pairing reconciles against
  the CSP admission above;
- committed-range whitespace validation clean.

## Activation

`NOT_INCLUDED`

This cut adds a bounded read-only pairing transport to the World view only.
It does not start a server, Bridge, or provider integration, does not
authenticate anyone, does not broaden the pairing beyond the read-only
methods allowlist, and grants no authority.