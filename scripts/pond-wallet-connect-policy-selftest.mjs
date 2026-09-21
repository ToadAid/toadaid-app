// Selftest for the World view's WalletConnect observation policy.
// Run: npm run test:stage-b2-p4b-p21
import assert from "node:assert/strict";
import {
  BASE_MAINNET_CHAIN_ID,
  WALLET_CONNECT_METHODS,
  OBSERVATION_STORAGE_KEY,
  isMethodsAllowlistSafe,
  allowlistHasNoForbiddenMarkers,
  isChainAdmitted,
  extractConnectedAddress,
  parseObservationRecord,
  resolveConnectionState,
} from "../ui/pond-wallet-connect-policy.js";

// --- pairing methods allowlist ---------------------------------------------

assert.deepEqual([...WALLET_CONNECT_METHODS], ["eth_accounts", "eth_requestAccounts", "eth_chainId"]);
assert.equal(Object.isFrozen(WALLET_CONNECT_METHODS), true);
assert.equal(BASE_MAINNET_CHAIN_ID, 8453);
assert.equal(OBSERVATION_STORAGE_KEY, "pond-wallet-observation-v1");

assert.equal(isMethodsAllowlistSafe(["eth_accounts", "eth_requestAccounts", "eth_chainId"]), true);
assert.equal(isMethodsAllowlistSafe(["eth_accounts"]), true);
assert.equal(isMethodsAllowlistSafe([]), false);
assert.equal(isMethodsAllowlistSafe(null), false);
assert.equal(isMethodsAllowlistSafe("eth_accounts"), false);
assert.equal(isMethodsAllowlistSafe(["eth_sendTransaction"]), false);
assert.equal(isMethodsAllowlistSafe(["personal_sign"]), false);
assert.equal(isMethodsAllowlistSafe(["eth_signTypedData_v4"]), false);
assert.equal(isMethodsAllowlistSafe(["eth_accounts", "eth_sendTransaction"]), false);
assert.equal(isMethodsAllowlistSafe(["eth_getBalance"]), false);

// Belt-and-braces: the admitted constant itself carries no forbidden marker.
assert.equal(allowlistHasNoForbiddenMarkers(WALLET_CONNECT_METHODS), true);
assert.equal(allowlistHasNoForbiddenMarkers(["eth_sendTransaction"]), false);
assert.equal(allowlistHasNoForbiddenMarkers(["personal_sign"]), false);
assert.equal(allowlistHasNoForbiddenMarkers([]), false);

// --- chain admission ---------------------------------------------------------

assert.equal(isChainAdmitted(8453), true);
assert.equal(isChainAdmitted(1), false);
assert.equal(isChainAdmitted(84532), false);
assert.equal(isChainAdmitted(8453.5), false);
assert.equal(isChainAdmitted("8453"), false);
assert.equal(isChainAdmitted(Number.NaN), false);
assert.equal(isChainAdmitted(undefined), false);

// --- connected-address extraction -------------------------------------------

const mixedCase = "0xf44Fd4B85a4B37841b39EafDEd8e8CC7056e8AeC";
assert.equal(extractConnectedAddress([mixedCase]), mixedCase);
assert.equal(extractConnectedAddress(["0x" + "ab".repeat(20)]), "0x" + "ab".repeat(20));
assert.equal(extractConnectedAddress([]), null);
assert.equal(extractConnectedAddress(null), null);
assert.equal(extractConnectedAddress(undefined), null);
assert.equal(extractConnectedAddress("0x123"), null);
assert.equal(extractConnectedAddress(["0x" + "ab".repeat(20) + "cd"]), null); // 41 hex chars
assert.equal(extractConnectedAddress(["0x" + "zz".repeat(20)]), null);
assert.equal(extractConnectedAddress([42]), null);

// --- persisted observation record -------------------------------------------

const validRecord = {
  version: 1,
  posture: "observation_only",
  address: mixedCase,
  chainId: 8453,
  connectedAt: "2026-09-20T12:00:00.000Z",
};
const encoded = JSON.stringify(validRecord);
assert.deepEqual(parseObservationRecord(encoded), validRecord);

const expectNull = (raw) => assert.equal(parseObservationRecord(raw), null);
expectNull("not json");
expectNull("{}");
expectNull("null");
expectNull("[]");
expectNull(JSON.stringify({ ...validRecord, version: 2 }));
expectNull(JSON.stringify({ ...validRecord, posture: "authenticated" }));
expectNull(JSON.stringify({ ...validRecord, posture: null }));
expectNull(JSON.stringify({ ...validRecord, address: "0x123" }));
expectNull(JSON.stringify({ ...validRecord, address: null }));
expectNull(JSON.stringify({ ...validRecord, chainId: "8453" }));
expectNull(JSON.stringify({ ...validRecord, chainId: 8453.5 }));
expectNull(JSON.stringify({ ...validRecord, connectedAt: "yesterday" }));
expectNull(JSON.stringify({ ...validRecord, connectedAt: 12 }));
// Unknown extra fields are tolerated (cache-pattern convenience), shape still valid:
assert.deepEqual(parseObservationRecord(JSON.stringify({ ...validRecord, extra: true })), validRecord);

// --- connection-state resolution ---------------------------------------------

assert.deepEqual(resolveConnectionState({ address: mixedCase, chainId: 8453 }), {
  status: "connected",
  lookupAdmissible: true,
  reason: "base_mainnet",
});
assert.deepEqual(resolveConnectionState({ address: mixedCase, chainId: 1 }), {
  status: "chain_not_admitted",
  lookupAdmissible: false,
  reason: "chain 1 is not admitted; only Base mainnet (8453) is",
});
assert.deepEqual(resolveConnectionState({ address: null, chainId: 8453 }), {
  status: "disconnected",
  lookupAdmissible: false,
  reason: "no_address",
});
assert.deepEqual(resolveConnectionState({ address: undefined, chainId: undefined }), {
  status: "disconnected",
  lookupAdmissible: false,
  reason: "no_address",
});

console.log("pond-wallet-connect-policy selftest: all assertions passed");