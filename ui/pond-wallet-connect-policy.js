// Pure decision logic for the World view's optional WalletConnect observation
// pairing. DOM-free ESM so scripts/pond-wallet-connect-policy-selftest.mjs can
// exercise it in node. The pairing itself is read-only by construction: the
// methods allowlist admitted at pairing time contains no signing, transaction,
// or message-signature capability, and a connected address carries exactly the
// epistemic status of a pasted address — never authentication, membership, or
// authority.
export const BASE_MAINNET_CHAIN_ID = 8453;

export const WALLET_CONNECT_METHODS = Object.freeze([
  "eth_accounts",
  "eth_requestAccounts",
  "eth_chainId",
]);

// Belt-and-braces: no allowlisted method name may contain a signing- or
// transaction-shaped marker. Checked by the selftest against the constant.
const FORBIDDEN_METHOD_MARKERS = Object.freeze([
  "sign",
  "send",
  "transaction",
  "switch",
  "watchasset",
  "permissions",
]);

export const OBSERVATION_STORAGE_KEY = "pond-wallet-observation-v1";

const ADDRESS_PATTERN = /^0x[a-fA-F0-9]{40}$/;

export const isMethodsAllowlistSafe = (methods) => {
  if (!Array.isArray(methods) || methods.length === 0) return false;
  return methods.every((method) => WALLET_CONNECT_METHODS.includes(method));
};

export const allowlistHasNoForbiddenMarkers = (methods) => {
  if (!Array.isArray(methods) || methods.length === 0) return false;
  return methods.every((method) => {
    const lowered = String(method).toLowerCase();
    return !FORBIDDEN_METHOD_MARKERS.some((marker) => lowered.includes(marker));
  });
};

export const isChainAdmitted = (chainId) =>
  typeof chainId === "number" && Number.isInteger(chainId) && chainId === BASE_MAINNET_CHAIN_ID;

export const extractConnectedAddress = (accounts) => {
  if (!Array.isArray(accounts)) return null;
  const first = accounts[0];
  return typeof first === "string" && ADDRESS_PATTERN.test(first) ? first : null;
};

// Shape: { version: 1, posture: "observation_only", address, chainId,
// connectedAt }. Returns null on any mismatch — corrupted storage is treated
// as a miss, never as a session.
export const parseObservationRecord = (raw) => {
  let parsed = null;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
  if (parsed.version !== 1) return null;
  if (parsed.posture !== "observation_only") return null;
  if (typeof parsed.address !== "string" || !ADDRESS_PATTERN.test(parsed.address)) return null;
  if (typeof parsed.chainId !== "number" || !Number.isInteger(parsed.chainId)) return null;
  if (typeof parsed.connectedAt !== "string" || Number.isNaN(Date.parse(parsed.connectedAt))) return null;
  return {
    version: 1,
    posture: "observation_only",
    address: parsed.address,
    chainId: parsed.chainId,
    connectedAt: parsed.connectedAt,
  };
};

export const resolveConnectionState = ({ address, chainId }) => {
  if (!address) {
    return Object.freeze({ status: "disconnected", lookupAdmissible: false, reason: "no_address" });
  }
  if (!isChainAdmitted(chainId)) {
    return Object.freeze({
      status: "chain_not_admitted",
      lookupAdmissible: false,
      reason: "chain " + String(chainId) + " is not admitted; only Base mainnet (8453) is",
    });
  }
  return Object.freeze({ status: "connected", lookupAdmissible: true, reason: "base_mainnet" });
};