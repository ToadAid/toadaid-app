// Stage D-P11 ERC-8004 onchain identity observation contract.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture: the
// trusted-channel-separation contract (L120-131) requires retrieved
// evidence to "arrive through typed, bounded adapters that identify:
// source / provenance / freshness / trust / review state / scope / result
// digest"; the derived-evidence contract's core law (L11-13) requires a
// security-relevant evidence claim to be "derived from the observation or
// enforcement mechanism it describes" — "A type-safe literal can still be
// false" (L39) — and binds current-truth-adjacent claims to
// `canonical source identity → explicit ref/revision → direct current
// read → derived claim` (L164-174), with the two-projection rule "When two
// projections disagree, do not choose the convenient one. Resolve the
// canonical source identity and freshness before asserting current
// truth" (L186). The attestation contract's narrow-claim precedent
// (L455-462: "Wallet W was observed as owner of Lore Land N at block or
// time B") marks the observation as historical point-in-time evidence —
// never current truth, never future ownership, never authority — and
// agent-identity law 8 holds: onchain identity is not local authority.
// This contract is that typed bounded observation adapter and its
// fail-closed classifier. No crypto in this contract: the observed-evidence
// digest is a supplied input compared claimed-vs-receiver-recomputed (the
// D-P8 mechanic digest precedent); the canonical serialization is exported
// here as pure lines so the receiver's script-side recompute and this
// contract's inputs share one definition. No network in this contract: the
// performed reads happen in scripts/ only — no fetch, no RPC endpoints, no
// chain constants, no registry address exists in this file. The record
// deliberately carries no `principalRef`: the observation is subject-scoped
// evidence, and binding it to the receiver's principal happens only
// through the separately governed D-P9 mapping record.

import type {
  PondAgentPresenceObservationFreshnessDiagnosis,
} from "./pond-agent-presence-observation-intake.js";
import type { PondErc8004MappingDistinctnessClaims } from "./pond-erc8004-identity-mapping.js";
import { POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS } from "./pond-private-read-activation.ts";

// The observation basis: only a receiver-performed read satisfies. Every
// refused literal is the vocabulary of what this contract exists to
// refuse — a developer-authored claim literal is exactly the
// derived-evidence L29-37 invalid path; a third-party report is not the
// receiver's observation; a cached projection assumed current is the
// derived-evidence L176-184 insufficient path; a replayed prior
// observation is the attestation L343 replay trap.
export type PondErc8004ObservationBasis =
  | "not_performed"
  | "performed_receiver_observation"
  | "claimed_receiver_observation_not_performed"
  | "reported_by_third_party"
  | "inferred_from_cached_projection"
  | "replayed_from_prior_observation";

// The surface the read happened on. Fixture observation records carry the
// structural surface; a live read through the keysless read-only RPC
// client carries the live surface. The surface is recorded, never assumed.
export type PondErc8004OnchainObservationSurface =
  | "structural_fixture"
  | "live_base_mainnet_read_only_rpc";

// Receiver-owned observation checks. The digest check is the
// recomputed-comparison leg (D-P8): the receiver recomputes the sha256 of
// this record's own canonical observation lines and the classifier
// compares the recomputed digest against the recorded claimed digest.
export type PondErc8004OnchainObservationCheck =
  | "observation_record_well_formed"
  | "observation_basis_explicitly_receiver_performed"
  | "two_endpoint_agreement_recorded_and_self_reviewed"
  | "owner_read_outcome_observed"
  | "digest_claim_matches_recomputed_digest"
  | "observation_fresh_and_not_future"
  | "distinctness_claims_all_false_and_scopes_held"
  | "observation_names_no_principal_and_grants_no_authority";

export interface PondErc8004ObservationCanonicalSource {
  readonly chainId: string;
  readonly registryAddress: string;
  readonly registryKind: "erc8004_identity_registry";
}

export interface PondErc8004ObservationPerformedOwnerRead {
  readonly method: "ownerOf(uint256)";
  readonly readBasis: "direct_eth_call_at_explicit_pinned_block";
  readonly observedOwner: string | null;
  readonly readOutcome:
    | "observed_owner"
    | "owner_read_reverted_no_owner_observed";
}

export interface PondErc8004ObservationRetrievalProvenance {
  readonly queriedRpcEndpointHosts: readonly string[];
  readonly endpointsQueriedCount: number;
  readonly endpointAgreement: "agreed" | "disagreed" | "not_established";
  readonly agreementDetail: string | null;
}

export interface PondErc8004ObservationMetadata {
  readonly observed_at_epoch_ms: number;
  readonly observedBlockTag: string;
  readonly observedBlockHash: string | null;
  readonly freshness_basis: "source_observation_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

export interface PondErc8004ObservationEvidenceDigest {
  readonly claimedDigestHex: string;
  readonly digestBasis: "sha256_canonical_observation_lines_v1";
}

export interface PondErc8004OnchainObservationRecord {
  readonly contractVersion: "pond-erc8004-identity-observation-d-p11";
  readonly kind: "pond-erc8004-onchain-identity-observation";
  readonly observationBasis: PondErc8004ObservationBasis;
  readonly observationSurface: PondErc8004OnchainObservationSurface;
  readonly canonicalSource: PondErc8004ObservationCanonicalSource;
  readonly observedAgentId: string;
  readonly performedOwnerRead: PondErc8004ObservationPerformedOwnerRead;
  readonly retrievalProvenance: PondErc8004ObservationRetrievalProvenance;
  readonly observationMetadata: PondErc8004ObservationMetadata;
  readonly observedEvidenceDigest: PondErc8004ObservationEvidenceDigest;
  readonly trustReviewState:
    | "not_established"
    | "receiver_performed_two_endpoint_self_reviewed";
  readonly evidencePosture: "observed_evidence_only_no_local_authority";
  readonly observedClaimPosture: "historical_point_in_time_observation_not_current_truth_not_future_ownership";
  readonly scopePosture: "read_only_observation_evidence_only_no_admission_no_grant_no_registration_no_signing";
  readonly observationDistinctnessClaims: PondErc8004MappingDistinctnessClaims;
  readonly authorityPosture: "observation_grants_no_authority_membership_or_capability";
  readonly authority: "none";
}

export interface PondErc8004OnchainObservationInput {
  readonly observationRecord: unknown;
  readonly receiverRecomputedDigestHex: unknown;
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export interface PondErc8004OnchainObservationAssessment {
  readonly contractVersion: "pond-erc8004-identity-observation-d-p11";
  readonly observationRecordVersion:
    | "pond-erc8004-identity-observation-d-p11"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_erc8004_onchain_observation";
  readonly observationState:
    | "not_observed"
    | "performed_receiver_onchain_observation_recorded";
  readonly reason:
    | "observation_record_invalid"
    | "observation_not_performed_by_receiver"
    | "owner_not_observed"
    | "digest_claim_mismatch"
    | "observation_not_fresh"
    | "two_endpoint_agreement_not_recorded"
    | "observation_proof_incomplete"
    | "all_observation_checks_satisfied";
  readonly observationFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly mappedEndpointAgreement:
    | "agreed"
    | "disagreed"
    | "not_established"
    | "invalid";
  readonly satisfiedChecks: readonly PondErc8004OnchainObservationCheck[];
  readonly unsatisfiedChecks: readonly PondErc8004OnchainObservationCheck[];
  readonly observationAcceptsOwnerAsPrincipalId: false;
  readonly observationEstablishesAdmission: false;
  readonly credentialAdmitted: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const observationChecks = Object.freeze([
  "observation_record_well_formed",
  "observation_basis_explicitly_receiver_performed",
  "two_endpoint_agreement_recorded_and_self_reviewed",
  "owner_read_outcome_observed",
  "digest_claim_matches_recomputed_digest",
  "observation_fresh_and_not_future",
  "distinctness_claims_all_false_and_scopes_held",
  "observation_names_no_principal_and_grants_no_authority",
] as const satisfies readonly PondErc8004OnchainObservationCheck[]);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;

const exactArray = (value: unknown, expected: readonly string[]) =>
  Array.isArray(value) &&
  value.length === expected.length &&
  value.every((entry, index) => entry === expected[index]);

const exactKeys = (
  value: Record<string, unknown>,
  expected: readonly string[],
) =>
  exactArray(Object.keys(value).sort(), [...expected].sort());

const hasForbiddenKey = (
  value: unknown,
  forbidden: readonly string[],
): boolean => {
  const stack: unknown[] = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
};

const safeNonNegativeInteger = (value: unknown): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0;

// The D-P2 freshness diagnosis, reimplemented with the same ordering and
// literals over the observation metadata: metadata, then evaluation time,
// then maximum age, then future time; the fresh boundary is inclusive. A
// diagnosis is a diagnosis, never an admission.
const diagnoseObservationFreshness = (
  observationMetadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const metadata = record(observationMetadata);
  if (
    metadata === null ||
    !safeNonNegativeInteger(metadata.observed_at_epoch_ms) ||
    metadata.freshness_basis !== "source_observation_time_only" ||
    metadata.currentness_posture !== "not_established_consumer_must_evaluate"
  )
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null,
    });
  if (!safeNonNegativeInteger(evaluatedAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "evaluation_time_invalid",
      observationAgeMs: null,
    });
  if (!safeNonNegativeInteger(maximumAgeMs))
    return Object.freeze({
      state: "unknown",
      reason: "maximum_age_invalid",
      observationAgeMs: null,
    });
  const observed_at_epoch_ms = metadata.observed_at_epoch_ms as number;
  if (observed_at_epoch_ms > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - observed_at_epoch_ms;
  return Object.freeze(
    age <= (maximumAgeMs as number)
      ? {
          state: "fresh",
          reason: "within_declared_maximum_age",
          observationAgeMs: age,
        }
      : {
          state: "stale",
          reason: "declared_maximum_age_expired",
          observationAgeMs: age,
        },
  );
};

// The digest comparison is a supplied-vs-supplied equality in this
// contract (D-P8, no crypto in this contract); the claimed digest must
// equal the receiver's independently recomputed digest over this record's
// own canonical observation lines. The formula is pinned below: the
// canonical lines over the observed-fact fields in fixed order, sha256'd
// by the receiver's script-side helper — mirrored by node:crypto in the
// selftest and by the live runner before any record is emitted.
export const pondErc8004CanonicalObservationDigestLines = (
  observationRecord: unknown,
): string | null => {
  const observation = record(observationRecord);
  if (observation === null) return null;
  const canonicalSource = record(observation.canonicalSource);
  const performedOwnerRead = record(observation.performedOwnerRead);
  const retrievalProvenance = record(observation.retrievalProvenance);
  const metadata = record(observation.observationMetadata);
  if (
    canonicalSource === null ||
    performedOwnerRead === null ||
    retrievalProvenance === null ||
    metadata === null
  )
    return null;
  const hosts = retrievalProvenance.queriedRpcEndpointHosts;
  if (!Array.isArray(hosts)) return null;
  const line = (key: string, value: unknown): string =>
    `${key}=${typeof value === "string" ? value : String(value)}`;
  return [
    line("canonicalSource.chainId", canonicalSource.chainId),
    line("canonicalSource.registryAddress", canonicalSource.registryAddress),
    line("canonicalSource.registryKind", canonicalSource.registryKind),
    line("observedAgentId", observation.observedAgentId),
    line("performedOwnerRead.method", performedOwnerRead.method),
    line("performedOwnerRead.readBasis", performedOwnerRead.readBasis),
    line(
      "performedOwnerRead.observedOwner",
      performedOwnerRead.observedOwner === null
        ? "null"
        : performedOwnerRead.observedOwner,
    ),
    line("performedOwnerRead.readOutcome", performedOwnerRead.readOutcome),
    line(
      "retrievalProvenance.queriedRpcEndpointHosts",
      hosts.join(","),
    ),
    line(
      "retrievalProvenance.endpointsQueriedCount",
      retrievalProvenance.endpointsQueriedCount,
    ),
    line(
      "retrievalProvenance.endpointAgreement",
      retrievalProvenance.endpointAgreement,
    ),
    line("observationMetadata.observed_at_epoch_ms", metadata.observed_at_epoch_ms),
    line("observationMetadata.observedBlockTag", metadata.observedBlockTag),
    line(
      "observationMetadata.observedBlockHash",
      metadata.observedBlockHash === null
        ? "null"
        : metadata.observedBlockHash,
    ),
    line("observationSurface", observation.observationSurface),
  ].join("\n");
};

const stringOrNull = (value: unknown): boolean =>
  value === null || typeof value === "string";

const hex40 = (value: unknown): value is string =>
  typeof value === "string" && /^0x[0-9a-fA-F]{40}$/.test(value);

const hexLower64 = (value: unknown): value is string =>
  typeof value === "string" && /^[0-9a-f]{64}$/.test(value);

const decimalAgentId = (value: unknown): value is string =>
  typeof value === "string" && /^[0-9]+$/.test(value);

const validObservationRecord = (value: unknown): boolean => {
  const observation = record(value);
  const canonicalSource = record(observation?.canonicalSource);
  const performedOwnerRead = record(observation?.performedOwnerRead);
  const retrievalProvenance = record(observation?.retrievalProvenance);
  const metadata = record(observation?.observationMetadata);
  const digest = record(observation?.observedEvidenceDigest);
  const distinctness = record(observation?.observationDistinctnessClaims);
  return (
    observation !== null &&
    exactKeys(observation, [
      "contractVersion",
      "kind",
      "observationBasis",
      "observationSurface",
      "canonicalSource",
      "observedAgentId",
      "performedOwnerRead",
      "retrievalProvenance",
      "observationMetadata",
      "observedEvidenceDigest",
      "trustReviewState",
      "evidencePosture",
      "observedClaimPosture",
      "scopePosture",
      "observationDistinctnessClaims",
      "authorityPosture",
      "authority",
    ]) &&
    observation.contractVersion ===
      "pond-erc8004-identity-observation-d-p11" &&
    observation.kind === "pond-erc8004-onchain-identity-observation" &&
    [
      "not_performed",
      "performed_receiver_observation",
      "claimed_receiver_observation_not_performed",
      "reported_by_third_party",
      "inferred_from_cached_projection",
      "replayed_from_prior_observation",
    ].includes(String(observation.observationBasis)) &&
    ["structural_fixture", "live_base_mainnet_read_only_rpc"].includes(
      String(observation.observationSurface),
    ) &&
    canonicalSource !== null &&
    exactKeys(canonicalSource, ["chainId", "registryAddress", "registryKind"]) &&
    typeof canonicalSource.chainId === "string" &&
    canonicalSource.chainId.length > 0 &&
    hex40(canonicalSource.registryAddress) &&
    canonicalSource.registryKind === "erc8004_identity_registry" &&
    decimalAgentId(observation.observedAgentId) &&
    performedOwnerRead !== null &&
    exactKeys(performedOwnerRead, [
      "method",
      "readBasis",
      "observedOwner",
      "readOutcome",
    ]) &&
    performedOwnerRead.method === "ownerOf(uint256)" &&
    performedOwnerRead.readBasis ===
      "direct_eth_call_at_explicit_pinned_block" &&
    ["observed_owner", "owner_read_reverted_no_owner_observed"].includes(
      String(performedOwnerRead.readOutcome),
    ) &&
    ((performedOwnerRead.readOutcome === "observed_owner" &&
      typeof performedOwnerRead.observedOwner === "string" &&
      performedOwnerRead.observedOwner.length > 0) ||
      (performedOwnerRead.readOutcome ===
        "owner_read_reverted_no_owner_observed" &&
        performedOwnerRead.observedOwner === null)) &&
    retrievalProvenance !== null &&
    exactKeys(retrievalProvenance, [
      "queriedRpcEndpointHosts",
      "endpointsQueriedCount",
      "endpointAgreement",
      "agreementDetail",
    ]) &&
    Array.isArray(retrievalProvenance.queriedRpcEndpointHosts) &&
    (retrievalProvenance.queriedRpcEndpointHosts as unknown[]).length > 0 &&
    (retrievalProvenance.queriedRpcEndpointHosts as unknown[]).every(
      (host) => typeof host === "string" && host.length > 0,
    ) &&
    safeNonNegativeInteger(retrievalProvenance.endpointsQueriedCount) &&
    retrievalProvenance.endpointsQueriedCount > 0 &&
    retrievalProvenance.endpointsQueriedCount ===
      (retrievalProvenance.queriedRpcEndpointHosts as unknown[]).length &&
    // The two-endpoint rule is record-level: an "agreed" agreement over
    // fewer than two endpoints is a malformed record, not a satisfied
    // check (derived-evidence L186: two agreeing projections or honest
    // refusal — one projection can never "agree" with itself).
    (retrievalProvenance.endpointAgreement !== "agreed" ||
      (retrievalProvenance.queriedRpcEndpointHosts as unknown[]).length >= 2) &&
    ["agreed", "disagreed", "not_established"].includes(
      String(retrievalProvenance.endpointAgreement),
    ) &&
    stringOrNull(retrievalProvenance.agreementDetail) &&
    metadata !== null &&
    exactKeys(metadata, [
      "observed_at_epoch_ms",
      "observedBlockTag",
      "observedBlockHash",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadata.observed_at_epoch_ms) &&
    typeof metadata.observedBlockTag === "string" &&
    metadata.observedBlockTag.length > 0 &&
    stringOrNull(metadata.observedBlockHash) &&
    metadata.freshness_basis === "source_observation_time_only" &&
    metadata.currentness_posture ===
      "not_established_consumer_must_evaluate" &&
    digest !== null &&
    exactKeys(digest, ["claimedDigestHex", "digestBasis"]) &&
    hexLower64(digest.claimedDigestHex) &&
    digest.digestBasis === "sha256_canonical_observation_lines_v1" &&
    [
      "not_established",
      "receiver_performed_two_endpoint_self_reviewed",
    ].includes(String(observation.trustReviewState)) &&
    observation.evidencePosture ===
      "observed_evidence_only_no_local_authority" &&
    observation.observedClaimPosture ===
      "historical_point_in_time_observation_not_current_truth_not_future_ownership" &&
    observation.scopePosture ===
      "read_only_observation_evidence_only_no_admission_no_grant_no_registration_no_signing" &&
    distinctness !== null &&
    exactKeys(distinctness, [
      "onchainIdentityIsPrincipalIdentity",
      "onchainIdentityEstablishesLocalAdmission",
      "onchainIdentityEstablishesAuthority",
      "onchainIdentityIsLocalAgentId",
    ]) &&
    distinctness.onchainIdentityIsPrincipalIdentity === false &&
    distinctness.onchainIdentityEstablishesLocalAdmission === false &&
    distinctness.onchainIdentityEstablishesAuthority === false &&
    distinctness.onchainIdentityIsLocalAgentId === false &&
    observation.authorityPosture ===
      "observation_grants_no_authority_membership_or_capability" &&
    observation.authority === "none" &&
    !hasForbiddenKey(observation, POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS)
  );
};

const observationAssessment = (
  reason: PondErc8004OnchainObservationAssessment["reason"],
  observationRecordVersion: PondErc8004OnchainObservationAssessment["observationRecordVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  mappedEndpointAgreement: PondErc8004OnchainObservationAssessment["mappedEndpointAgreement"],
  satisfiedChecks: readonly PondErc8004OnchainObservationCheck[],
  unsatisfiedChecks: readonly PondErc8004OnchainObservationCheck[],
): PondErc8004OnchainObservationAssessment => {
  const observed = reason === "all_observation_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-erc8004-identity-observation-d-p11",
    observationRecordVersion,
    assessmentKind: "deterministic_supplied_erc8004_onchain_observation",
    observationState: observed
      ? "performed_receiver_onchain_observation_recorded"
      : "not_observed",
    reason,
    observationFreshnessDiagnosis: diagnosis,
    mappedEndpointAgreement,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The observation is evidence only: the observed owner never becomes a
    // PrincipalId, an admission, a credential, memory admission, a
    // current-truth claim, or authority. No field here flips any frozen
    // tuple — the frozen D-P9 names stay the only carriers.
    observationAcceptsOwnerAsPrincipalId: false,
    observationEstablishesAdmission: false,
    credentialAdmitted: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondErc8004OnchainObservation(
  input: PondErc8004OnchainObservationInput,
): PondErc8004OnchainObservationAssessment {
  // D-P8 fallback pattern: diagnose the raw evaluation pair even when the
  // record never becomes valid, so every arm carries an honest diagnosis.
  const fallbackDiagnosis = diagnoseObservationFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validObservationRecord(input.observationRecord))
    return observationAssessment(
      "observation_record_invalid",
      "invalid",
      fallbackDiagnosis,
      "invalid",
      [],
      observationChecks,
    );
  const observation = input.observationRecord as PondErc8004OnchainObservationRecord;

  const diagnosis = diagnoseObservationFreshness(
    observation.observationMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  const fresh = diagnosis.state === "fresh";

  const mappedEndpointAgreement = observation.retrievalProvenance.endpointAgreement;

  const basisPerformed =
    observation.observationBasis === "performed_receiver_observation";
  const agreementEstablished =
    observation.retrievalProvenance.endpointAgreement === "agreed" &&
    observation.trustReviewState ===
      "receiver_performed_two_endpoint_self_reviewed";
  const ownerObserved =
    observation.performedOwnerRead.readOutcome === "observed_owner" &&
    observation.performedOwnerRead.observedOwner !== null &&
    observation.performedOwnerRead.observedOwner.length > 0;
  const digestClaimMatches =
    hexLower64(input.receiverRecomputedDigestHex) &&
    (input.receiverRecomputedDigestHex as string) ===
      observation.observedEvidenceDigest.claimedDigestHex;

  if (!basisPerformed)
    return observationAssessment(
      "observation_not_performed_by_receiver",
      "pond-erc8004-identity-observation-d-p11",
      diagnosis,
      mappedEndpointAgreement,
      [],
      observationChecks,
    );
  if (!agreementEstablished)
    return observationAssessment(
      "two_endpoint_agreement_not_recorded",
      "pond-erc8004-identity-observation-d-p11",
      diagnosis,
      mappedEndpointAgreement,
      [],
      observationChecks,
    );
  if (!ownerObserved)
    return observationAssessment(
      "owner_not_observed",
      "pond-erc8004-identity-observation-d-p11",
      diagnosis,
      mappedEndpointAgreement,
      [],
      observationChecks,
    );
  if (!digestClaimMatches)
    return observationAssessment(
      "digest_claim_mismatch",
      "pond-erc8004-identity-observation-d-p11",
      diagnosis,
      mappedEndpointAgreement,
      [],
      observationChecks,
    );
  if (!fresh)
    return observationAssessment(
      "observation_not_fresh",
      "pond-erc8004-identity-observation-d-p11",
      diagnosis,
      mappedEndpointAgreement,
      [],
      observationChecks,
    );

  const values = [
    true,
    basisPerformed,
    agreementEstablished,
    ownerObserved,
    digestClaimMatches,
    fresh,
    // Check 7: the four-false distinctness tuple plus the evidence and
    // scope postures are record-validated; the check restates them as the
    // receiver's held ceiling.
    observation.observationDistinctnessClaims.onchainIdentityIsPrincipalIdentity === false &&
      observation.evidencePosture ===
        "observed_evidence_only_no_local_authority" &&
      observation.scopePosture ===
        "read_only_observation_evidence_only_no_admission_no_grant_no_registration_no_signing",
    // Check 8: the observation carries no principal ref (record-validated)
    // and its own postures refuse current-truth and future-ownership —
    // the attestation L462 narrow-claim precedent.
    observation.observedClaimPosture ===
      "historical_point_in_time_observation_not_current_truth_not_future_ownership" &&
      observation.authority === "none",
  ];
  const satisfied = observationChecks.filter((_, index) => values[index] === true);
  const unsatisfied = observationChecks.filter((_, index) => values[index] !== true);
  return observationAssessment(
    unsatisfied.length === 0
      ? "all_observation_checks_satisfied"
      : "observation_proof_incomplete",
    "pond-erc8004-identity-observation-d-p11",
    diagnosis,
    mappedEndpointAgreement,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The observation is a historical
// point-in-time evidence record only: it never becomes a PrincipalId, an
// admission, a memory admission, a current-truth claim, or authority; no
// frozen D-P9 verification name appears on this assessment.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP11Invariant_ObservationChecksExact = Assert<
  Equal<
    PondErc8004OnchainObservationCheck,
    | "observation_record_well_formed"
    | "observation_basis_explicitly_receiver_performed"
    | "two_endpoint_agreement_recorded_and_self_reviewed"
    | "owner_read_outcome_observed"
    | "digest_claim_matches_recomputed_digest"
    | "observation_fresh_and_not_future"
    | "distinctness_claims_all_false_and_scopes_held"
    | "observation_names_no_principal_and_grants_no_authority"
  >
>;
export type PondStageDP11Invariant_ObservationStatesExact = Assert<
  Equal<
    PondErc8004OnchainObservationAssessment["observationState"],
    "not_observed" | "performed_receiver_onchain_observation_recorded"
  >
>;
export type PondStageDP11Invariant_ObservationReasonsExact = Assert<
  Equal<
    PondErc8004OnchainObservationAssessment["reason"],
    | "observation_record_invalid"
    | "observation_not_performed_by_receiver"
    | "owner_not_observed"
    | "digest_claim_mismatch"
    | "observation_not_fresh"
    | "two_endpoint_agreement_not_recorded"
    | "observation_proof_incomplete"
    | "all_observation_checks_satisfied"
  >
>;
export type PondStageDP11Invariant_ObservationNeverBecomesPrincipalAdmissionOrAuthority =
  Assert<
    Equal<
      [
        PondErc8004OnchainObservationAssessment["observationAcceptsOwnerAsPrincipalId"],
        PondErc8004OnchainObservationAssessment["observationEstablishesAdmission"],
        PondErc8004OnchainObservationAssessment["credentialAdmitted"],
        PondErc8004OnchainObservationAssessment["personalMemoryContentAdmitted"],
        PondErc8004OnchainObservationAssessment["currentTruthAdmitted"],
        PondErc8004OnchainObservationAssessment["runtimeActivationPosture"],
        PondErc8004OnchainObservationAssessment["authority"],
      ],
      [false, false, false, false, false, "not_included", "none"]
    >
  >;
export type PondStageDP11Invariant_NoFrozenVerificationKeysOnObservationAssessment =
  Assert<
    HasAnyKey<
      PondErc8004OnchainObservationAssessment,
      "onchainVerificationState" | "mappingEstablishesGrant" | "privateReadsActivated"
    > extends false
      ? true
      : false
  >;