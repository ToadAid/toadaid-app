// Stage D-P8: the real local authentication mechanic — a receiver-owned
// local knowledge-factor challenge-response.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture
// (contracts/agent-identity-and-specialist-admission-contract.md:
// "Authentication is not authorization" — a valid proof of control never
// establishes membership, capability, or authority; contracts/
// scope-sovereignty-contract.md: credentials are separately admitted,
// narrowly scoped, and revocable; contracts/trusted-channel-separation-
// contract.md: operator input may trigger a governed decision but is never
// itself the grant, and never a channel into ceremony records). This cut
// is the first implementation of the deliberately deferred authentication
// mechanic, app-side and under the existing negative law: the receiver's
// real local authentication is a local knowledge-factor challenge-response.
// The operator sets a local secret once per session; the receiver stores
// only a salt-bound sha256 verifier digest — the secret is never stored,
// transported, or rendered — and the shell computes the response digest
// and discards the secret. The proof records carry digests only, and the
// classifier recomputes the comparison itself, refusing a claimed
// comparison that disagrees with its own recomputation. A verified
// knowledge factor is never a PrincipalId, a credential admission, or
// authority.

// No crypto in this contract: digests are supplied inputs, format-validated
// only (the C-P9 digest precedent). The digest formula is pinned in the
// stage doc and mirrored by both sides: sha256(bytes(saltHex) || utf8(secret)).

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";

export type PondLocalAuthenticationMechanicClass =
  "local_knowledge_factor_challenge_response";

export type PondLocalAuthenticationDigestAlgorithm = "sha256";

export type PondLocalAuthenticationComparison =
  | "not_compared"
  | "exact_digest_match"
  | "digest_mismatch";

// The D-P2 freshness vocabulary, reused verbatim: the diagnosis is a
// diagnosis, never an admission.
export type PondLocalAuthenticationFreshnessState =
  | "fresh"
  | "stale"
  | "unknown";

export type PondLocalAuthenticationFreshnessReason =
  | "within_declared_maximum_age"
  | "declared_maximum_age_expired"
  | "observation_metadata_missing_or_invalid"
  | "evaluation_time_invalid"
  | "maximum_age_invalid"
  | "observation_time_in_future";

export interface PondLocalAuthenticationComparisonMetadata {
  readonly observed_at_epoch_ms: number;
  readonly freshness_basis: "source_observation_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

// The enrolled verifier binding: salt + digest only. The secret is never a
// record field — the verifier is revocable by re-enrollment and admits no
// credential material.
export interface PondLocalAuthenticationVerifierBinding {
  readonly algorithm: "sha256";
  readonly saltHex: string;
  readonly verifierDigestHex: string;
}

export interface PondLocalAuthenticationVerifierRecord {
  readonly contractVersion: "pond-local-authentication-mechanic-d-p8";
  readonly kind: "pond-local-authentication-verifier";
  readonly principalRef: string;
  readonly mechanicClass: PondLocalAuthenticationMechanicClass;
  readonly verifierBinding: PondLocalAuthenticationVerifierBinding;
  readonly secretFreeInventoryPosture: "verifier_digest_only_no_secret_material";
  readonly memoryLaneExclusionPosture: "binding_excludes_memory_narrative_transcript_lanes";
  readonly authorityPosture: "verifier_grants_no_authority_membership_or_capability";
  readonly revocabilityPosture: "verifier_revocable_by_re_enrollment";
  readonly authority: "none";
}

// The challenge round: the verifier binding echoed, the response digest (the
// digest of the supplied secret — the secret itself never enters the record),
// and the claimed comparison, which the receiver recomputes.
export interface PondLocalAuthenticationChallengeDigestBinding {
  readonly algorithm: "sha256";
  readonly saltHex: string;
  readonly verifierDigestHex: string;
  readonly responseDigestHex: string;
}

export interface PondLocalAuthenticationChallengeProofRecord {
  readonly contractVersion: "pond-local-authentication-mechanic-d-p8";
  readonly kind: "pond-local-authentication-challenge-proof";
  readonly principalRef: string;
  readonly mechanicClass: PondLocalAuthenticationMechanicClass;
  readonly challengeDigestBinding: PondLocalAuthenticationChallengeDigestBinding;
  readonly comparison: PondLocalAuthenticationComparison;
  readonly comparisonMetadata: PondLocalAuthenticationComparisonMetadata;
  readonly secretFreeInventoryPosture: "response_digest_only_no_secret_material";
  readonly memoryLaneExclusionPosture: "proof_excludes_memory_narrative_transcript_lanes";
  readonly authorityPosture: "challenge_grants_no_authority_membership_or_capability";
  readonly authority: "none";
}

export interface PondLocalAuthenticationVerifierAssessmentInput {
  readonly verifierRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
}

export interface PondLocalAuthenticationChallengeProofInput {
  readonly proofRecord: unknown;
  readonly verifierRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly evaluatedAtEpochMs: unknown;
  readonly maximumAgeMs: unknown;
}

export interface PondLocalAuthenticationVerifierAssessment {
  readonly contractVersion: "pond-local-authentication-mechanic-d-p8";
  readonly verifierRecordVersion:
    | "pond-local-authentication-mechanic-d-p8"
    | "invalid";
  readonly assessmentKind: "deterministic_supplier_verifier_record";
  readonly verifierState: "not_established" | "receiver_enrolled_knowledge_verifier";
  readonly reason:
    | "verifier_record_invalid"
    | "receiver_held_principal_not_bound"
    | "verifier_enrolled";
  readonly secretFreeInventoryPosture:
    | "not_established"
    | "verifier_digest_only_no_secret_material";
  readonly revocabilityPosture:
    | "not_established"
    | "verifier_revocable_by_re_enrollment";
  readonly satisfiedChecks: readonly PondLocalAuthenticationVerifierCheck[];
  readonly unsatisfiedChecks: readonly PondLocalAuthenticationVerifierCheck[];
  // Enrollment acceptance is vocabulary proof only: it never admits a
  // credential, issues a PrincipalId, admits memory, or grants authority.
  readonly credentialAdmitted: false;
  readonly observedPresenceAcceptedAsAuthentication: false;
  readonly observedIdentityAcceptedAsPrincipalId: false;
  readonly principalIdIssued: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

export type PondLocalAuthenticationVerifierCheck =
  | "verifier_well_formed"
  | "verifier_bound_to_receiver_held_principal"
  | "verifier_secret_free"
  | "verifier_excludes_memory_and_lane_content"
  | "verifier_grants_no_authority";

export interface PondLocalAuthenticationChallengeAssessment {
  readonly contractVersion: "pond-local-authentication-mechanic-d-p8";
  readonly proofRecordVersion:
    | "pond-local-authentication-mechanic-d-p8"
    | "invalid";
  readonly verifierRecordVersion:
    | "pond-local-authentication-mechanic-d-p8"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_challenge_round";
  readonly authenticationMechanicState:
    | "not_verified"
    | "receiver_verified_knowledge_factor";
  readonly reason:
    | "proof_record_invalid"
    | "verifier_record_invalid"
    | "receiver_challenge_proof_incomplete"
    | "all_challenge_checks_satisfied";
  readonly comparison: PondLocalAuthenticationComparison;
  readonly recomputedComparison: PondLocalAuthenticationComparison;
  readonly freshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly authenticationPosture:
    | "not_established"
    | "receiver_verified_local_knowledge_factor";
  readonly satisfiedChecks: readonly PondLocalAuthenticationChallengeCheck[];
  readonly unsatisfiedChecks: readonly PondLocalAuthenticationChallengeCheck[];
  // A verified knowledge factor proves control and nothing else: it never
  // becomes a credential admission, a PrincipalId issuance, memory
  // admission, or authority. Private-read activation stays refused.
  readonly credentialAdmitted: false;
  readonly observedPresenceAcceptedAsAuthentication: false;
  readonly observedIdentityAcceptedAsPrincipalId: false;
  readonly principalIdIssued: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

export type PondLocalAuthenticationChallengeCheck =
  | "mechanic_class_receiver_owned"
  | "challenge_bound_to_receiver_held_principal"
  | "verifier_binding_exact_match"
  | "comparison_recomputed"
  | "comparison_fresh"
  | "proof_excludes_memory_and_lane_content"
  | "challenge_grants_no_authority";

// Keys whose presence in a mechanic record would mean the secret itself, a
// credential, desk personal memory, an effect/transport channel, or an
// identity-binding collapse entered the mechanic as data. The verifier and
// proof records carry digests only — never the secret.
export const POND_STAGE_DP8_FORBIDDEN_MECHANIC_KEYS = Object.freeze([
  "PrincipalId",
  "principalId",
  "journal",
  "memory",
  "narrative",
  "transcript",
  "conversation",
  "endpoint",
  "transport",
  "connect",
  "fetch",
  "poll",
  "subscribe",
  "secret",
  "token",
  "apiKey",
  "password",
  "passphrase",
  "session",
  "wallet",
  "address",
  "credential",
  "plaintext",
  "answer",
] as const);

const verifierChecks = Object.freeze([
  "verifier_well_formed",
  "verifier_bound_to_receiver_held_principal",
  "verifier_secret_free",
  "verifier_excludes_memory_and_lane_content",
  "verifier_grants_no_authority",
] as const satisfies readonly PondLocalAuthenticationVerifierCheck[]);

const challengeChecks = Object.freeze([
  "mechanic_class_receiver_owned",
  "challenge_bound_to_receiver_held_principal",
  "verifier_binding_exact_match",
  "comparison_recomputed",
  "comparison_fresh",
  "proof_excludes_memory_and_lane_content",
  "challenge_grants_no_authority",
] as const satisfies readonly PondLocalAuthenticationChallengeCheck[]);

const isSha256DigestHex = (value: unknown): value is string =>
  typeof value === "string" && /^[0-9a-f]{64}$/.test(value);

const isSaltHex = (value: unknown): value is string =>
  typeof value === "string" &&
  value.length >= 32 &&
  value.length % 2 === 0 &&
  /^[0-9a-f]+$/.test(value);

const isWellFormedPrincipalRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("principal:") &&
  value.length > "principal:".length;

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
) => exactArray(Object.keys(value).sort(), [...expected].sort());

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
// literals: metadata, then evaluation time, then maximum age, then future
// time; the fresh boundary is inclusive. A diagnosis is never an admission.
const diagnoseFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.observed_at_epoch_ms) ||
    checked.freshness_basis !== "source_observation_time_only" ||
    checked.currentness_posture !== "not_established_consumer_must_evaluate"
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
  const comparisonAt = checked.observed_at_epoch_ms as number;
  if (comparisonAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - comparisonAt;
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

const validVerifierBinding = (value: unknown): boolean => {
  const binding = record(value);
  return (
    binding !== null &&
    exactKeys(binding, ["algorithm", "saltHex", "verifierDigestHex"]) &&
    binding.algorithm === "sha256" &&
    isSaltHex(binding.saltHex) &&
    isSha256DigestHex(binding.verifierDigestHex)
  );
};

const validChallengeDigestBinding = (value: unknown): boolean => {
  const binding = record(value);
  return (
    binding !== null &&
    exactKeys(binding, [
      "algorithm",
      "saltHex",
      "verifierDigestHex",
      "responseDigestHex",
    ]) &&
    binding.algorithm === "sha256" &&
    isSaltHex(binding.saltHex) &&
    isSha256DigestHex(binding.verifierDigestHex) &&
    isSha256DigestHex(binding.responseDigestHex)
  );
};

const validVerifierRecord = (value: unknown): boolean => {
  const verifier = record(value);
  if (
    verifier === null ||
    !exactKeys(verifier, [
      "contractVersion",
      "kind",
      "principalRef",
      "mechanicClass",
      "verifierBinding",
      "secretFreeInventoryPosture",
      "memoryLaneExclusionPosture",
      "authorityPosture",
      "revocabilityPosture",
      "authority",
    ]) ||
    verifier.contractVersion !== "pond-local-authentication-mechanic-d-p8" ||
    verifier.kind !== "pond-local-authentication-verifier" ||
    !isWellFormedPrincipalRef(verifier.principalRef) ||
    verifier.mechanicClass !== "local_knowledge_factor_challenge_response" ||
    !validVerifierBinding(verifier.verifierBinding) ||
    verifier.secretFreeInventoryPosture !==
      "verifier_digest_only_no_secret_material" ||
    verifier.memoryLaneExclusionPosture !==
      "binding_excludes_memory_narrative_transcript_lanes" ||
    verifier.authorityPosture !==
      "verifier_grants_no_authority_membership_or_capability" ||
    verifier.revocabilityPosture !== "verifier_revocable_by_re_enrollment" ||
    verifier.authority !== "none" ||
    hasForbiddenKey(verifier, POND_STAGE_DP8_FORBIDDEN_MECHANIC_KEYS)
  )
    return false;
  return true;
};

const validComparisonMetadata = (value: unknown): boolean => {
  const metadata = record(value);
  return (
    metadata !== null &&
    exactKeys(metadata, [
      "observed_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadata.observed_at_epoch_ms) &&
    metadata.freshness_basis === "source_observation_time_only" &&
    metadata.currentness_posture === "not_established_consumer_must_evaluate"
  );
};

const validProofRecord = (value: unknown): boolean => {
  const proof = record(value);
  if (
    proof === null ||
    !exactKeys(proof, [
      "contractVersion",
      "kind",
      "principalRef",
      "mechanicClass",
      "challengeDigestBinding",
      "comparison",
      "comparisonMetadata",
      "secretFreeInventoryPosture",
      "memoryLaneExclusionPosture",
      "authorityPosture",
      "authority",
    ]) ||
    proof.contractVersion !== "pond-local-authentication-mechanic-d-p8" ||
    proof.kind !== "pond-local-authentication-challenge-proof" ||
    !isWellFormedPrincipalRef(proof.principalRef) ||
    proof.mechanicClass !== "local_knowledge_factor_challenge_response" ||
    !validChallengeDigestBinding(proof.challengeDigestBinding) ||
    ![
      "not_compared",
      "exact_digest_match",
      "digest_mismatch",
    ].includes(String(proof.comparison)) ||
    !validComparisonMetadata(proof.comparisonMetadata) ||
    proof.secretFreeInventoryPosture !==
      "response_digest_only_no_secret_material" ||
    proof.memoryLaneExclusionPosture !==
      "proof_excludes_memory_narrative_transcript_lanes" ||
    proof.authorityPosture !==
      "challenge_grants_no_authority_membership_or_capability" ||
    proof.authority !== "none" ||
    hasForbiddenKey(proof, POND_STAGE_DP8_FORBIDDEN_MECHANIC_KEYS)
  )
    return false;
  return true;
};

const recognizedComparison = (value: unknown): PondLocalAuthenticationComparison =>
  [
    "not_compared",
    "exact_digest_match",
    "digest_mismatch",
  ].includes(String(value))
    ? (value as PondLocalAuthenticationComparison)
    : "not_compared";

const verifierAssessment = (
  reason: PondLocalAuthenticationVerifierAssessment["reason"],
  verifierRecordVersion: PondLocalAuthenticationVerifierAssessment["verifierRecordVersion"],
  secretFreeInventoryPosture: PondLocalAuthenticationVerifierAssessment["secretFreeInventoryPosture"],
  revocabilityPosture: PondLocalAuthenticationVerifierAssessment["revocabilityPosture"],
  satisfiedChecks: readonly PondLocalAuthenticationVerifierCheck[],
  unsatisfiedChecks: readonly PondLocalAuthenticationVerifierCheck[],
): PondLocalAuthenticationVerifierAssessment =>
  Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    verifierRecordVersion,
    assessmentKind: "deterministic_supplier_verifier_record",
    verifierState:
      reason === "verifier_enrolled"
        ? "receiver_enrolled_knowledge_verifier"
        : "not_established",
    reason,
    secretFreeInventoryPosture,
    revocabilityPosture,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    credentialAdmitted: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    principalIdIssued: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondLocalAuthenticationVerifierRecord(
  input: PondLocalAuthenticationVerifierAssessmentInput,
): PondLocalAuthenticationVerifierAssessment {
  if (!validVerifierRecord(input.verifierRecord)) {
    return verifierAssessment(
      "verifier_record_invalid",
      "invalid",
      "not_established",
      "not_established",
      [],
      verifierChecks,
    );
  }
  const verifier = input.verifierRecord as Record<string, unknown>;
  // For a valid verifier record, every check except the binding is a fixed
  // literal of the record kind; only the binding to the receiver-held
  // principal can be unsatisfied.
  const bound =
    isWellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
    verifier.principalRef === input.receiverHeldPrincipalRef;
  const values = [
    verifier.mechanicClass === "local_knowledge_factor_challenge_response",
    bound,
    verifier.secretFreeInventoryPosture ===
      "verifier_digest_only_no_secret_material",
    verifier.memoryLaneExclusionPosture ===
      "binding_excludes_memory_narrative_transcript_lanes",
    verifier.authorityPosture ===
      "verifier_grants_no_authority_membership_or_capability",
  ];
  const satisfied = verifierChecks.filter((_, index) => values[index]);
  const unsatisfied = verifierChecks.filter((_, index) => !values[index]);
  return verifierAssessment(
    bound ? "verifier_enrolled" : "receiver_held_principal_not_bound",
    "pond-local-authentication-mechanic-d-p8",
    bound
      ? "verifier_digest_only_no_secret_material"
      : "not_established",
    bound ? "verifier_revocable_by_re_enrollment" : "not_established",
    satisfied,
    unsatisfied,
  );
}

const challengeAssessment = (
  reason: PondLocalAuthenticationChallengeAssessment["reason"],
  proofRecordVersion: PondLocalAuthenticationChallengeAssessment["proofRecordVersion"],
  verifierRecordVersion: PondLocalAuthenticationChallengeAssessment["verifierRecordVersion"],
  comparison: PondLocalAuthenticationComparison,
  recomputedComparison: PondLocalAuthenticationComparison,
  freshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  satisfiedChecks: readonly PondLocalAuthenticationChallengeCheck[],
  unsatisfiedChecks: readonly PondLocalAuthenticationChallengeCheck[],
): PondLocalAuthenticationChallengeAssessment => {
  const allSatisfied = unsatisfiedChecks.length === 0;
  return Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    proofRecordVersion,
    verifierRecordVersion,
    assessmentKind: "deterministic_supplied_challenge_round",
    authenticationMechanicState:
      allSatisfied ? "receiver_verified_knowledge_factor" : "not_verified",
    reason,
    comparison,
    recomputedComparison,
    freshnessDiagnosis,
    authenticationPosture: allSatisfied
      ? "receiver_verified_local_knowledge_factor"
      : "not_established",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    credentialAdmitted: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    principalIdIssued: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondLocalAuthenticationChallengeProof(
  input: PondLocalAuthenticationChallengeProofInput,
): PondLocalAuthenticationChallengeAssessment {
  const verifierIsValid = validVerifierRecord(input.verifierRecord);
  const proofIsValid = validProofRecord(input.proofRecord);
  const proofRecordVersion: PondLocalAuthenticationChallengeAssessment["proofRecordVersion"] =
    proofIsValid ? "pond-local-authentication-mechanic-d-p8" : "invalid";
  const verifierRecordVersion: PondLocalAuthenticationChallengeAssessment["verifierRecordVersion"] =
    verifierIsValid ? "pond-local-authentication-mechanic-d-p8" : "invalid";
  const fallbackDiagnosis = diagnoseFreshness(
    record(input.proofRecord)?.comparisonMetadata,
    input.evaluatedAtEpochMs,
    input.maximumAgeMs,
  );
  if (!verifierIsValid || !proofIsValid) {
    return challengeAssessment(
      !verifierIsValid
        ? "verifier_record_invalid"
        : "proof_record_invalid",
      proofRecordVersion,
      verifierRecordVersion,
      proofIsValid
        ? recognizedComparison(record(input.proofRecord)?.comparison)
        : "not_compared",
      "not_compared",
      fallbackDiagnosis,
      [],
      challengeChecks,
    );
  }
  const proof = input.proofRecord as Record<string, unknown>;
  const proofBinding = proof.challengeDigestBinding as Record<string, string>;
  const verifier = input.verifierRecord as Record<string, unknown>;
  const verifierBinding = verifier.verifierBinding as Record<string, string>;

  const comparison = proof.comparison as PondLocalAuthenticationComparison;
  const freshnessDiagnosis = diagnoseFreshness(
    proof.comparisonMetadata,
    input.evaluatedAtEpochMs,
    input.maximumAgeMs,
  );
  // The receiver recomputes the comparison from the two digests itself and
  // refuses the record's claimed comparison when it disagrees — a self-
  // asserted match or mismatch is not proof; only the digests are. The
  // check requires BOTH: the recomputation matches the digests AND the
  // claimed comparison agrees with it — an honestly-claimed mismatch is a
  // valid record whose verification still fails closed.
  const digestMatch =
    proofBinding.responseDigestHex === verifierBinding.verifierDigestHex;
  const recomputedComparison: PondLocalAuthenticationComparison = digestMatch
    ? "exact_digest_match"
    : "digest_mismatch";
  const claimedComparisonAgrees =
    comparison === recomputedComparison && digestMatch;

  const values = [
    proof.mechanicClass === "local_knowledge_factor_challenge_response",
    isWellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
      proof.principalRef === input.receiverHeldPrincipalRef,
    proofBinding.saltHex === verifierBinding.saltHex &&
      proofBinding.verifierDigestHex === verifierBinding.verifierDigestHex &&
      verifier.principalRef === proof.principalRef,
    claimedComparisonAgrees,
    freshnessDiagnosis.state === "fresh",
    proof.memoryLaneExclusionPosture ===
      "proof_excludes_memory_narrative_transcript_lanes",
    proof.authorityPosture ===
      "challenge_grants_no_authority_membership_or_capability",
  ];
  const satisfied = challengeChecks.filter((_, index) => values[index]);
  const unsatisfied = challengeChecks.filter((_, index) => !values[index]);
  return challengeAssessment(
    unsatisfied.length === 0
      ? "all_challenge_checks_satisfied"
      : "receiver_challenge_proof_incomplete",
    proofRecordVersion,
    verifierRecordVersion,
    comparison,
    recomputedComparison,
    freshnessDiagnosis,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The mechanic proves vocabulary only:
// it never becomes a credential admission, a PrincipalId issuance, memory
// admission, or authority. Authentication is not authorization.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP8Invariant_ComparisonExact = Assert<
  Equal<
    PondLocalAuthenticationChallengeAssessment["comparison"],
    "not_compared" | "exact_digest_match" | "digest_mismatch"
  >
>;
export type PondStageDP8Invariant_StatesExact = Assert<
  Equal<
    PondLocalAuthenticationChallengeAssessment["authenticationMechanicState"],
    "not_verified" | "receiver_verified_knowledge_factor"
  >
>;
export type PondStageDP8Invariant_ReasonsExact = Assert<
  Equal<
    PondLocalAuthenticationChallengeAssessment["reason"],
    | "proof_record_invalid"
    | "verifier_record_invalid"
    | "receiver_challenge_proof_incomplete"
    | "all_challenge_checks_satisfied"
  >
>;
export type PondStageDP8Invariant_FreshnessVocabularyMatchesDP2 = Assert<
  Equal<
    PondLocalAuthenticationChallengeAssessment["freshnessDiagnosis"],
    PondAgentPresenceObservationFreshnessDiagnosis
  >
>;
export type PondStageDP8Invariant_VerificationNeverBecomesPrincipalIdCredentialOrAuthority =
  Assert<
    Equal<
      [
        PondLocalAuthenticationChallengeAssessment["credentialAdmitted"],
        PondLocalAuthenticationChallengeAssessment["observedPresenceAcceptedAsAuthentication"],
        PondLocalAuthenticationChallengeAssessment["observedIdentityAcceptedAsPrincipalId"],
        PondLocalAuthenticationChallengeAssessment["principalIdIssued"],
        PondLocalAuthenticationChallengeAssessment["personalMemoryContentAdmitted"],
        PondLocalAuthenticationChallengeAssessment["currentTruthAdmitted"],
        PondLocalAuthenticationChallengeAssessment["runtimeActivationPosture"],
        PondLocalAuthenticationChallengeAssessment["authority"],
      ],
      [false, false, false, false, false, false, "not_included", "none"]
    >
  >;
export type PondStageDP8Invariant_NoForbiddenVerifierKeys = Assert<
  HasAnyKey<PondLocalAuthenticationVerifierRecord, (typeof POND_STAGE_DP8_FORBIDDEN_MECHANIC_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP8Invariant_NoForbiddenProofKeys = Assert<
  HasAnyKey<PondLocalAuthenticationChallengeProofRecord, (typeof POND_STAGE_DP8_FORBIDDEN_MECHANIC_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP8Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondLocalAuthenticationChallengeAssessment, (typeof POND_STAGE_DP8_FORBIDDEN_MECHANIC_KEYS)[number]> extends false
    ? true
    : false
>;