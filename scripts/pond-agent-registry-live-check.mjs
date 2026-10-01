// Manual-only live check for Stage D-P24 (NOT in CI, never env-gated).
// Reads the trading-desk frog's actual registration file from the local
// temple and proves the pinned file-bytes digest matches it — the loop the
// CI selftest cannot close, because CI has no temple and the file's
// url-shaped values never enter this repository. Refuses honestly on any
// mismatch or absence: the desk's staleness honesty, receiver-side.
//
// Usage: node scripts/pond-agent-registry-live-check.mjs
// Runs offline (a filesystem read, not a network call); the desk's status
// HTTP server is never contacted.
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { homedir } from "node:os";

const pinnedDigestHex = "fda3de234c1775250a7bea5b3d2014deb4392715f2746d2cb92faddf8e65eb83";
const deskRegistrationPath =
  homedir() + "/trading-desk" + "/" + "erc8004" + "/" + "desk-registration.json";

let fileBytes;
try {
  fileBytes = await readFile(deskRegistrationPath);
} catch {
  console.error(
    "POND_STAGE_DP24_LIVE_CHECK_NO_FILE: the trading-desk registration file is not present at " +
      deskRegistrationPath
  );
  process.exit(1);
}

const observedDigestHex = createHash("sha256").update(fileBytes).digest("hex");

if (observedDigestHex !== pinnedDigestHex) {
  console.error(
    "POND_STAGE_DP24_LIVE_CHECK_DIGEST_MISMATCH: the desk's registration file changed (" +
      observedDigestHex +
      " observed, " +
      pinnedDigestHex +
      " pinned). The presented evidence row in the Pond is now stale — " +
      "re-present the registration before trusting the panel."
  );
  process.exit(1);
}

const registration = JSON.parse(fileBytes.toString("utf8"));
const serviceNames = Array.isArray(registration.services)
  ? registration.services.map((service) => service.name)
  : [];

const checks = [
  ["digest agrees", true],
  ["service count agrees", registration.services?.length === 2],
  ["service names agree", serviceNames.join(",") === "github,home"],
  ["active agrees", registration.active === true],
  ["x402Support agrees", registration.x402Support === false],
  ["supportedTrust agrees", registration.supportedTrust?.[0] === "reputation"],
  ["type value is the ERC-8004 registration class", String(registration.type).includes("eip-8004")],
];

let allGreen = true;
for (const [label, ok] of checks) {
  console.log((ok ? "ok   " : "FAIL ") + label);
  if (!ok) allGreen = false;
}

if (!allGreen) {
  console.error("POND_STAGE_DP24_LIVE_CHECK_CONTENT_MISMATCH");
  process.exit(1);
}

console.log(
  "POND_STAGE_DP24_LIVE_CHECK_PASS: the presented registration evidence row anchors the desk's current file bytes"
);