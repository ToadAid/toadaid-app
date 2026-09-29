// Stage D-P11 live receiver onchain observation — read-only JSON-RPC
// client.
//
// No keys, no signing, no transactions. This client performs read-only
// eth_call/eth_chainId/eth_blockNumber requests against two admitted
// keyless public Base mainnet RPC endpoints (the ui/pond-deed-lookup.js
// pattern). It is imported by the live observation runner
// (scripts/pond-erc8004-identity-observation-live.mjs) and by the
// selftest's env-gated live block — ONE code path, so the exercised
// verification path is exactly the performed observation path
// (derived-evidence: the claim must be derived from the mechanism it
// describes). Per-endpoint loops never rotate endpoints mid-observation:
// rotation would destroy the two-endpoint agreement reading. The two real
// network constants (endpoint hosts, registry address) live only in this
// file under scripts/ — never in src/ (hygiene-pinned by the selftest).

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const RPC_URLS = [
  "https://mainnet.base.org",
  "https://base-rpc.publicnode.com",
];
const RETRY_DELAYS_MS = [600, 1800, 3600];
export const BASE_MAINNET_CHAIN_ID_DECIMAL = "8453";
export const ERC8004_IDENTITY_REGISTRY =
  "0x8004A169FB4a3325136EB29fA0ceB6D2e539a432";
export const OWNEROF_SELECTOR = "0x6352211e";

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// POST JSON-RPC to one endpoint, retrying transport-shaped failures with
// backoff. RPC-level errors (reverts, bad params) do not improve on retry
// and are thrown immediately.
export const rpcRequestOn = async (url, method, params) => {
  let lastError = null;
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt += 1) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
      });
      if (response.status === 429 || response.status >= 500) {
        throw new Error("HTTP " + response.status);
      }
      if (!response.ok) throw new Error("HTTP " + response.status);
      const payload = await response.json();
      if (payload.error) throw new Error(payload.error.message || "call error");
      return payload.result;
    } catch (error) {
      lastError = error;
      const message = error && error.message ? String(error.message) : "";
      const retryable =
        message.startsWith("HTTP") ||
        message === "Failed to fetch" ||
        message === "Load failed" ||
        message === "NetworkError when attempting to fetch resource.";
      if (!retryable) throw error;
      if (attempt < RETRY_DELAYS_MS.length) await pause(RETRY_DELAYS_MS[attempt]);
    }
  }
  throw lastError || new Error("read-only Base RPC request failed");
};

// ownerOf(uint256) at an explicit pinned block. Returns the 0x-hex owner
// address, or null when the call reverts (an unregistered agent id has no
// owner) or the endpoint returns empty data. A revert is an honest
// observation outcome — no owner observed — never retried away.
export const callOwnerOfOn = async (
  url,
  registryAddress,
  agentId,
  blockHex,
) => {
  const word = (value) => value.toString(16).padStart(64, "0");
  const data = OWNEROF_SELECTOR + word(BigInt(agentId));
  const result = await rpcRequestOn(url, "eth_call", [
    { to: registryAddress, data },
    blockHex,
  ]);
  if (!result || result === "0x") return null;
  const hex = result.startsWith("0x") ? result.slice(2) : result;
  if (hex.length < 40) return null;
  return "0x" + hex.slice(hex.length - 40);
};

export const readChainIdOn = async (url) => {
  const result = await rpcRequestOn(url, "eth_chainId", []);
  if (!result) return null;
  const hex = result.startsWith("0x") ? result.slice(2) : result;
  if (!/^[0-9a-fA-F]+$/.test(hex)) return null;
  return String(parseInt(hex, 16));
};

export const readBlockNumberOn = async (url) => {
  const result = await rpcRequestOn(url, "eth_blockNumber", []);
  if (!result) return null;
  const hex = result.startsWith("0x") ? result.slice(2) : result;
  if (!/^[0-9a-fA-F]+$/.test(hex)) return null;
  return parseInt(hex, 16);
};

// Clients import nothing mutable and sign nothing. This self-audit is
// invoked by the selftest's hygiene block: the module text is read back
// and the absence of every transport-shaped forbidden token is asserted.
// spellings are built from parts so the audit never matches its own list.
export const assertClientShape = () => {
  const modulePath = fileURLToPath(import.meta.url);
  const text = readFileSync(modulePath, "utf8");
  const forbidden = [
    ["eth_", "send"],
    ["eth_", "sign"],
    ["private", "Key"],
    ["mnemo", "nic"],
    ["wallet_", "connect"],
  ].map((parts) => parts.join(""));
  const found = forbidden.filter((needle) => text.includes(needle));
  if (found.length > 0) {
    throw new Error("rpc-client self-audit failed: found " + found.join(","));
  }
  return true;
};