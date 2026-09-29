// Stage D-P11 live receiver onchain observation runner.
//
// No keys, no signing, no transactions. Performs the receiver's live
// read-only observation of the ERC-8004 identity registry on Base mainnet
// through the shared keyless RPC client, assembles the full
// pond-erc8004-identity-observation-d-p11 record, self-validates it
// through the observation contract's own classifier before printing, and
// prints exactly one JSON line (the observation record) to stdout.
//
// NEVER run by CI — CI never sets TOADAID_LIVE_ERC8004_VERIFY and never
// invokes this script. The live read observes a real registered agent on
// the real registry as a production-equivalent exercise of the observation
// mechanic: evidence only, no admission, no authority, no registration,
// no signing, no transaction. The receiver's own fixture mapping names no
// real NFT and cannot be verified live — that honesty is pinned by the
// selftest's live block, which feeds the live record to the verification
// contract and expects the honest refusal.
//
// Real observed values (owner, block tag) pin only here — never in src/.

import { createHash } from "node:crypto";
import { pathToFileURL } from "node:url";
import {
  BASE_MAINNET_CHAIN_ID_DECIMAL,
  ERC8004_IDENTITY_REGISTRY,
  assertClientShape,
  callOwnerOfOn,
  readBlockNumberOn,
  readChainIdOn,
} from "./pond-erc8004-identity-rpc-client.mjs";
import {
  assessPondErc8004OnchainObservation,
  pondErc8004CanonicalObservationDigestLines,
} from "../src/contracts/pond-erc8004-identity-observation.ts";

const LIVE_OBSERVATION_MAX_AGE_MS = 600_000;

// One code path with the selftest's live block: the exercised observation
// is exactly this performed read (derived-evidence core law).
export const performErc8004IdentityObservation = async (agentId) => {
  const endpoints = [
    "https://mainnet.base.org",
    "https://base-rpc.publicnode.com",
  ];

  // Both endpoints, independently, no rotation: chain first, then one
  // owner read per endpoint at one pinned block.
  const chainByHost = [];
  for (const endpoint of endpoints) {
    try {
      const chainId = await readChainIdOn(endpoint);
      chainByHost.push({ host: endpoint, chainId, failure: null });
    } catch (error) {
      chainByHost.push({
        host: endpoint,
        chainId: null,
        failure: error && error.message ? String(error.message) : "unknown",
      });
    }
  }

  const reachable = chainByHost.filter((entry) => entry.chainId !== null);
  if (reachable.length === 0)
    throw new Error("both read-only Base RPC endpoints failed on eth_chainId");

  // The pinned block comes from the first reachable endpoint's head. Both
  // owner reads land at this same explicit block — the observation reads
  // one revision of canonical state, not two different ones.
  const blockNumber = await readBlockNumberOn(reachable[0].host);
  if (blockNumber === null || blockNumber <= 0)
    throw new Error("failed to read the pinned block number");
  const blockHex = "0x" + blockNumber.toString(16);
  const observedBlockTag = String(blockNumber);

  const ownerByHost = [];
  for (const endpoint of endpoints) {
    try {
      const owner = await callOwnerOfOn(
        endpoint,
        ERC8004_IDENTITY_REGISTRY,
        agentId,
        blockHex,
      );
      ownerByHost.push({ host: endpoint, owner, failure: null });
    } catch (error) {
      ownerByHost.push({
        host: endpoint,
        owner: null,
        failure: error && error.message ? String(error.message) : "unknown",
      });
    }
  }

  const chainIdAgreed =
    chainByHost[0] !== undefined &&
    chainByHost[1] !== undefined &&
    chainByHost[0].chainId !== null &&
    chainByHost[0].chainId === chainByHost[1].chainId &&
    chainByHost[0].chainId === BASE_MAINNET_CHAIN_ID_DECIMAL;
  const bothOwners =
    ownerByHost[0] !== undefined &&
    ownerByHost[1] !== undefined &&
    ownerByHost[0].owner !== null &&
    ownerByHost[1].owner !== null;
  const ownerAgreed =
    bothOwners &&
    ownerByHost[0].owner.toLowerCase() === ownerByHost[1].owner.toLowerCase();
  const endpointAgreement = chainIdAgreed && ownerAgreed
    ? "agreed"
    : "disagreed";
  const agreementDetail =
    endpointAgreement === "agreed"
      ? null
      : JSON.stringify({ chainByHost, ownerByHost });

  const observedOwner = bothOwners ? ownerByHost[0].owner.toLowerCase() : null;

  const record = {
    contractVersion: "pond-erc8004-identity-observation-d-p11",
    kind: "pond-erc8004-onchain-identity-observation",
    observationBasis: "performed_receiver_observation",
    observationSurface: "live_base_mainnet_read_only_rpc",
    canonicalSource: {
      chainId: BASE_MAINNET_CHAIN_ID_DECIMAL,
      registryAddress: ERC8004_IDENTITY_REGISTRY,
      registryKind: "erc8004_identity_registry",
    },
    observedAgentId: String(agentId),
    performedOwnerRead: {
      method: "ownerOf(uint256)",
      readBasis: "direct_eth_call_at_explicit_pinned_block",
      observedOwner,
      readOutcome: observedOwner
        ? "observed_owner"
        : "owner_read_reverted_no_owner_observed",
    },
    retrievalProvenance: {
      queriedRpcEndpointHosts: endpoints,
      endpointsQueriedCount: endpoints.length,
      endpointAgreement,
      agreementDetail,
    },
    observationMetadata: {
      observed_at_epoch_ms: Date.now(),
      observedBlockTag,
      observedBlockHash: null,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    },
    observedEvidenceDigest: {
      claimedDigestHex: "",
      digestBasis: "sha256_canonical_observation_lines_v1",
    },
    trustReviewState: "receiver_performed_two_endpoint_self_reviewed",
    evidencePosture: "observed_evidence_only_no_local_authority",
    observedClaimPosture:
      "historical_point_in_time_observation_not_current_truth_not_future_ownership",
    scopePosture:
      "read_only_observation_evidence_only_no_admission_no_grant_no_registration_no_signing",
    observationDistinctnessClaims: {
      onchainIdentityIsPrincipalIdentity: false,
      onchainIdentityEstablishesLocalAdmission: false,
      onchainIdentityEstablishesAuthority: false,
      onchainIdentityIsLocalAgentId: false,
    },
    authorityPosture: "observation_grants_no_authority_membership_or_capability",
    authority: "none",
  };

  // The digest is recomputed over the record's own canonical lines (the
  // contract exported the one definition); the claimed field is then
  // filled in. The classifier below cannot trust the claimed digest — it
  // is compared against this recomputed value.
  const recomputedDigestHex = createHash("sha256")
    .update(pondErc8004CanonicalObservationDigestLines(record))
    .digest("hex");
  record.observedEvidenceDigest.claimedDigestHex = recomputedDigestHex;

  // The runner prints only a record its own contract accepts — and prints
  // the refusal honestly when it does not, so the consumer fails loudly.
  const assessment = assessPondErc8004OnchainObservation({
    observationRecord: record,
    receiverRecomputedDigestHex: recomputedDigestHex,
    receiverEvaluatedAtEpochMs: record.observationMetadata.observed_at_epoch_ms,
    receiverMaximumAgeMs: LIVE_OBSERVATION_MAX_AGE_MS,
  });

  return { record, assessment, recomputedDigestHex };
};

export const liveObservationConfig = {
  maximumAgeMs: LIVE_OBSERVATION_MAX_AGE_MS,
  defaultAgentId: 1,
};

export const main = async () => {
  assertClientShape();
  const configuredMatch = process.argv
    .map((arg) =>
      typeof arg === "string" ? arg.match(/^--agent-id=([0-9]+)$/) : null,
    )
    .find((match) => match !== null);
  const agentId =
    configuredMatch !== undefined && configuredMatch !== null
      ? Number(configuredMatch[1])
      : 1;
  const { record, assessment } =
    await performErc8004IdentityObservation(agentId);
  process.stdout.write(JSON.stringify(record) + "\n");
  if (assessment.reason !== "all_observation_checks_satisfied") {
    // The honest record prints either way; the exit code carries the
    // refusal so the caller cannot miss it.
    console.error("observation refused: " + assessment.reason);
    return 1;
  }
  return 0;
};

const invokedAsScript =
  typeof process.argv[1] === "string" &&
  import.meta.url === pathToFileURL(process.argv[1]).href;
if (invokedAsScript) {
  main()
    .then((code) => {
      if (code !== 0) process.exit(code);
    })
    .catch(() => {
      process.exit(1);
    });
}