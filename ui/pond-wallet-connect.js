// Optional in-app WalletConnect pairing for the World view (Stage B2-P4B-P21).
// Observation only: the pairing admits the read-only methods allowlist from
// pond-wallet-connect-policy.js — never signing, transactions, or message
// signatures — and the connected address is treated exactly like a pasted
// address. It is not authentication, membership, a PrincipalId, or authority.
// The WalletConnect SDK persists its own relay-transport material under its
// own storage keys; Pond's only persistence is the single observation record
// written below, cleared on disconnect.
import EthereumProvider from "./vendor/walletconnect-provider.js";
import {
  BASE_MAINNET_CHAIN_ID,
  WALLET_CONNECT_METHODS,
  OBSERVATION_STORAGE_KEY,
  isMethodsAllowlistSafe,
  extractConnectedAddress,
  parseObservationRecord,
  resolveConnectionState,
} from "./pond-wallet-connect-policy.js";

// Already public in the lore-activation helper; recorded in the stage doc.
const WALLET_CONNECT_PROJECT_ID = "c86752a13a29b19d308dc10fb72b820f";

const connectButton = document.querySelector("#wallet-connect-button");
const disconnectButton = document.querySelector("#wallet-disconnect-button");
const useAddressButton = document.querySelector("#wallet-use-address-button");
const disconnectedPanel = document.querySelector("#wallet-connection-disconnected");
const connectedPanel = document.querySelector("#wallet-connection-connected");
const addressCode = document.querySelector("#wallet-connection-address");
const chainCell = document.querySelector("#wallet-connection-chain");
const sinceCell = document.querySelector("#wallet-connection-since");
const statusNote = document.querySelector("#wallet-connect-status");
const sealNote = document.querySelector("#read-only-seal-note");
const walletInput = document.querySelector("#viewed-wallet");
const walletLookupForm = document.querySelector(".wallet-lookup-form");

const sealNoteResting = sealNote ? sealNote.textContent : "";
const shortAddress = (address) => address.slice(0, 6) + "…" + address.slice(-4);

let provider = null;
// state: { status, address, chainId, connectedAt } — address/chainId/connectedAt
// are null while disconnected.
let state = { status: "disconnected", address: null, chainId: null, connectedAt: null };

const setStatus = (message, stateClass) => {
  if (!statusNote) return;
  statusNote.textContent = message;
  statusNote.classList.toggle("is-error", stateClass === "error");
  statusNote.classList.toggle("is-valid", stateClass === "valid");
};

const readObservationRecord = () => {
  try {
    return parseObservationRecord(window.localStorage.getItem(OBSERVATION_STORAGE_KEY));
  } catch {
    return null;
  }
};

const writeObservationRecord = (record) => {
  try {
    window.localStorage.setItem(OBSERVATION_STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* the record is a convenience only; pairing still works without it */
  }
};

const clearObservationRecord = () => {
  try {
    window.localStorage.removeItem(OBSERVATION_STORAGE_KEY);
  } catch {
    /* nothing further to do */
  }
};

const persistCurrent = () => {
  if (state.status !== "connected") return;
  writeObservationRecord({
    version: 1,
    posture: "observation_only",
    address: state.address,
    chainId: state.chainId,
    connectedAt: state.connectedAt,
  });
};

const render = () => {
  const resolved = resolveConnectionState({ address: state.address, chainId: state.chainId });
  const isConnected = state.address !== null;
  if (disconnectedPanel) disconnectedPanel.hidden = isConnected;
  if (connectedPanel) connectedPanel.hidden = !isConnected;
  if (addressCode) addressCode.textContent = state.address || "";
  if (chainCell) {
    chainCell.classList.toggle("chain-not-admitted", isConnected && resolved.status === "chain_not_admitted");
    chainCell.textContent = isConnected
      ? (resolved.status === "chain_not_admitted"
        ? "Not admitted (chain " + state.chainId + ")"
        : "Base mainnet (8453)")
      : "";
  }
  if (sinceCell) sinceCell.textContent = state.connectedAt ? new Date(state.connectedAt).toLocaleString() : "";
  if (useAddressButton) useAddressButton.disabled = !resolved.lookupAdmissible;
  if (sealNote) {
    if (isConnected && resolved.status === "chain_not_admitted") {
      sealNote.textContent = "Observation paused";
    } else if (isConnected) {
      sealNote.textContent = "Observing " + shortAddress(state.address);
    } else {
      sealNote.textContent = sealNoteResting;
    }
  }
};

const applyProviderState = ({ connectedAtFallback } = {}) => {
  const address = extractConnectedAddress(provider && provider.accounts);
  const chainId = provider && provider.chainId ? Number(provider.chainId) : null;
  if (address && state.connectedAt === null) {
    state.connectedAt = connectedAtFallback || new Date().toISOString();
  }
  state = {
    status: resolveConnectionState({ address, chainId }).status,
    address,
    chainId,
    connectedAt: address ? state.connectedAt : null,
  };
  render();
  persistCurrent();
};

const getProvider = async () => {
  if (provider) return provider;
  if (!isMethodsAllowlistSafe(WALLET_CONNECT_METHODS)) {
    throw new Error("the pairing methods allowlist is not the read-only set; refusing to pair");
  }
  const initialized = await EthereumProvider.init({
    projectId: WALLET_CONNECT_PROJECT_ID,
    chains: [BASE_MAINNET_CHAIN_ID],
    optionalChains: [],
    methods: [...WALLET_CONNECT_METHODS],
    events: ["accountsChanged", "chainChanged"],
    showQrModal: true,
    metadata: {
      name: "ToadAid Pond",
      description: "ToadAid Pond — read-only deed observation",
      url: "https://toadaid.github.io",
      icons: [],
    },
  });
  initialized.on("accountsChanged", onAccountsChanged);
  initialized.on("chainChanged", onChainChanged);
  provider = initialized;
  return provider;
};

const onAccountsChanged = (accounts) => {
  if (!Array.isArray(accounts) || accounts.length === 0) {
    // The wallet locked or revoked the session: an explicit disconnect, not
    // an empty address to render.
    clearObservationRecord();
    provider = null;
    state = { status: "disconnected", address: null, chainId: null, connectedAt: null };
    render();
    setStatus("The wallet ended the session. Observation is disconnected.", "");
    return;
  }
  applyProviderState();
  const resolved = resolveConnectionState({ address: state.address, chainId: state.chainId });
  if (resolved.status === "connected") {
    setStatus("Observed address updated to " + shortAddress(state.address) + ". Read-only posture unchanged.", "valid");
  }
};

const onChainChanged = (chainId) => {
  applyProviderState();
  const resolved = resolveConnectionState({ address: state.address, chainId: state.chainId });
  if (resolved.status === "chain_not_admitted") {
    setStatus(
      "The wallet switched to chain " + state.chainId + ". Only Base mainnet (8453) is admitted; " +
      "the connected address is not admissible until it returns to Base.",
      "error"
    );
  } else if (resolved.status === "connected") {
    setStatus("Back on Base mainnet. The connected address is admissible again.", "valid");
  }
};

const connect = async () => {
  if (state.address) return;
  try {
    if (connectButton) connectButton.disabled = true;
    setStatus("Opening the read-only pairing modal…", "");
    await getProvider();
    await provider.connect();
    applyProviderState({ connectedAtFallback: new Date().toISOString() });
    const resolved = resolveConnectionState({ address: state.address, chainId: state.chainId });
    if (resolved.status === "chain_not_admitted") {
      setStatus(resolved.reason.charAt(0).toUpperCase() + resolved.reason.slice(1) + ".", "error");
    } else {
      setStatus(
        "Connected for observation as " + shortAddress(state.address) +
        ". Nothing was signed; presentation is not authority.",
        "valid"
      );
    }
  } catch (error) {
    const message = error && error.message ? String(error.message) : "unknown pairing error";
    setStatus("Pairing did not complete: " + message + " The observation posture is unchanged.", "error");
  } finally {
    if (connectButton) connectButton.disabled = false;
  }
};

const disconnect = async () => {
  try {
    if (provider) await provider.disconnect();
  } catch {
    /* a failed relay disconnect must never trap local state; clear below */
  } finally {
    clearObservationRecord();
    provider = null;
    state = { status: "disconnected", address: null, chainId: null, connectedAt: null };
    render();
    setStatus("Disconnected. The pairing and its stored observation record were removed.", "");
  }
};

const useConnectedAddress = () => {
  const resolved = resolveConnectionState({ address: state.address, chainId: state.chainId });
  if (!resolved.lookupAdmissible || !walletInput) return;
  walletInput.value = state.address;
  if (walletLookupForm && typeof walletLookupForm.requestSubmit === "function") {
    walletLookupForm.requestSubmit();
  } else if (window.pondDeedLookup && typeof window.pondDeedLookup.lookup === "function") {
    window.pondDeedLookup.lookup(state.address);
  }
};

// Restore on load: the record is a display cache of pairing facts, never the
// session itself. If the SDK's own session is gone or expired, fail closed.
const restore = async () => {
  const record = readObservationRecord();
  if (!record) return;
  try {
    await getProvider();
    if (!provider || !provider.session) {
      clearObservationRecord();
      return;
    }
    state = {
      status: "connected",
      address: record.address,
      chainId: record.chainId,
      connectedAt: record.connectedAt,
    };
    render();
    setStatus(
      "Restored the observation pairing from the previous session" +
      (resolveConnectionState({ address: record.address, chainId: record.chainId }).lookupAdmissible
        ? ". Read-only posture unchanged."
        : "; the wallet's current chain is not admitted."),
      ""
    );
  } catch {
    clearObservationRecord();
    state = { status: "disconnected", address: null, chainId: null, connectedAt: null };
    render();
    setStatus("The stored observation record could not be restored; pairing again is required.", "error");
  }
};

if (connectButton) connectButton.addEventListener("click", connect);
if (disconnectButton) disconnectButton.addEventListener("click", disconnect);
if (useAddressButton) useAddressButton.addEventListener("click", useConnectedAddress);

window.pondWalletConnect = { connect, disconnect, useConnectedAddress, getState: () => state };
restore();