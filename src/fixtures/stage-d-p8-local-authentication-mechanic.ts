// Stage D-P8 fixture: the local knowledge-factor challenge-response
// matrix. Two arms — a structurally verified round (verifier and proof
// digests match, all seven receiver-owned checks satisfied, the knowledge
// factor is genuinely verified) and an incomplete one (a different response
// digest, honestly claimed as a mismatch). Zero value imports: every
// import is type-only, so the selftest imports this file directly under
// node type-stripping. The records carry digests only — the pinned secret
// itself appears in the selftest, never in this fixture. `satisfies`
// typing keeps arm-level literals sharp for the fixture invariants.

import type {
  PondLocalAuthenticationChallengeAssessment,
  PondLocalAuthenticationChallengeProofRecord,
  PondLocalAuthenticationVerifierAssessment,
  PondLocalAuthenticationVerifierRecord,
} from "../contracts/pond-local-authentication-mechanic.js";

export interface PondStageDP8MechanicFixtureEntry {
  readonly fixtureLabel: string;
  readonly verifierRecord: PondLocalAuthenticationVerifierRecord;
  readonly proofRecord: PondLocalAuthenticationChallengeProofRecord;
  readonly evaluatedAtEpochMs: number;
  readonly maximumAgeMs: number;
  readonly verifierAssessment: PondLocalAuthenticationVerifierAssessment;
  readonly assessment: PondLocalAuthenticationChallengeAssessment;
}

// The Stage D local principal, carried from the D-P0 projection: the
// mechanic lands on exactly this ref — one binding, one ref. The selftest
// cross-checks this literal against the directly-imported
// stageDP0LocalPrincipalRef.
const principalRef = "principal:fixture:stage-d-p0:local-principal";

const saltHex = "0a1b2c3d4e5f60718293a4b5c6d7e8f9";
const verifierDigestHex =
  "1e158c65ffdf8655e982a1c208bd60c80c53b694d60739f7849dab90953b356f";
const otherResponseDigestHex =
  "b54534785d54c4046e3781a1934df25caa4db9c94ee2751dccd868b88744191c";

const comparedAtEpochMs = 1_800_000_060_000;
const evaluatedAtEpochMs = 1_800_000_060_000;
const maximumAgeMs = 60_000;

const verifierRecord = Object.freeze({
  contractVersion: "pond-local-authentication-mechanic-d-p8",
  kind: "pond-local-authentication-verifier",
  principalRef,
  mechanicClass: "local_knowledge_factor_challenge_response",
  verifierBinding: Object.freeze({
    algorithm: "sha256",
    saltHex,
    verifierDigestHex,
  }),
  secretFreeInventoryPosture: "verifier_digest_only_no_secret_material",
  memoryLaneExclusionPosture:
    "binding_excludes_memory_narrative_transcript_lanes",
  authorityPosture: "verifier_grants_no_authority_membership_or_capability",
  revocabilityPosture: "verifier_revocable_by_re_enrollment",
  authority: "none",
}) satisfies PondLocalAuthenticationVerifierRecord;

const proofRecord = (
  responseDigestHex: string,
  comparison: PondLocalAuthenticationChallengeProofRecord["comparison"],
) =>
  Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    kind: "pond-local-authentication-challenge-proof",
    principalRef,
    mechanicClass: "local_knowledge_factor_challenge_response",
    challengeDigestBinding: Object.freeze({
      algorithm: "sha256",
      saltHex,
      verifierDigestHex,
      responseDigestHex,
    }),
    comparison,
    comparisonMetadata: Object.freeze({
      observed_at_epoch_ms: comparedAtEpochMs,
      freshness_basis: "source_observation_time_only",
      currentness_posture: "not_established_consumer_must_evaluate",
    }),
    secretFreeInventoryPosture: "response_digest_only_no_secret_material",
    memoryLaneExclusionPosture:
      "proof_excludes_memory_narrative_transcript_lanes",
    authorityPosture: "challenge_grants_no_authority_membership_or_capability",
    authority: "none",
  }) satisfies PondLocalAuthenticationChallengeProofRecord;

const satisfiedChecks = Object.freeze([
  "mechanic_class_receiver_owned",
  "challenge_bound_to_receiver_held_principal",
  "verifier_binding_exact_match",
  "comparison_recomputed",
  "comparison_fresh",
  "proof_excludes_memory_and_lane_content",
  "challenge_grants_no_authority",
] as const);

const incompleteSatisfiedChecks = Object.freeze([
  "mechanic_class_receiver_owned",
  "challenge_bound_to_receiver_held_principal",
  "verifier_binding_exact_match",
  "comparison_fresh",
  "proof_excludes_memory_and_lane_content",
  "challenge_grants_no_authority",
] as const);

const incompleteUnsatisfiedChecks = Object.freeze([
  "comparison_recomputed",
] as const);

const verifierSatisfiedChecks = Object.freeze([
  "verifier_well_formed",
  "verifier_bound_to_receiver_held_principal",
  "verifier_secret_free",
  "verifier_excludes_memory_and_lane_content",
  "verifier_grants_no_authority",
] as const);

const zeroAgeDiagnosis = Object.freeze({
  state: "fresh",
  reason: "within_declared_maximum_age",
  observationAgeMs: 0,
});

// Complete arm: the response digest matches the enrolled verifier exactly
// and the claimed comparison agrees with the receiver's own recomputation —
// the knowledge factor is genuinely verified, yet it never becomes a
// PrincipalId, a credential admission, or authority.
export const stageDP8MechanicComplete = Object.freeze({
  fixtureLabel: "complete_challenge_round",
  verifierRecord,
  proofRecord: proofRecord(verifierDigestHex, "exact_digest_match"),
  evaluatedAtEpochMs,
  maximumAgeMs,
  verifierAssessment: Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    verifierRecordVersion: "pond-local-authentication-mechanic-d-p8",
    assessmentKind: "deterministic_supplier_verifier_record",
    verifierState: "receiver_enrolled_knowledge_verifier",
    reason: "verifier_enrolled",
    secretFreeInventoryPosture: "verifier_digest_only_no_secret_material",
    revocabilityPosture: "verifier_revocable_by_re_enrollment",
    satisfiedChecks: verifierSatisfiedChecks,
    unsatisfiedChecks: Object.freeze([] as const),
    credentialAdmitted: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    principalIdIssued: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondLocalAuthenticationVerifierAssessment,
  assessment: Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    proofRecordVersion: "pond-local-authentication-mechanic-d-p8",
    verifierRecordVersion: "pond-local-authentication-mechanic-d-p8",
    assessmentKind: "deterministic_supplied_challenge_round",
    authenticationMechanicState: "receiver_verified_knowledge_factor",
    reason: "all_challenge_checks_satisfied",
    comparison: "exact_digest_match",
    recomputedComparison: "exact_digest_match",
    freshnessDiagnosis: zeroAgeDiagnosis,
    authenticationPosture: "receiver_verified_local_knowledge_factor",
    satisfiedChecks,
    unsatisfiedChecks: Object.freeze([] as const),
    credentialAdmitted: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    principalIdIssued: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondLocalAuthenticationChallengeAssessment,
}) satisfies PondStageDP8MechanicFixtureEntry;

// Incomplete arm: a different response digest, honestly claimed as a
// mismatch — the record is valid and the receiver's recomputation says
// "digest_mismatch", but no digest match happened, so the
// comparison_recomputed check stays unsatisfied: a wrong knowledge factor
// is never verified.
export const stageDP8MechanicIncomplete = Object.freeze({
  fixtureLabel: "mismatch_challenge_round",
  verifierRecord,
  proofRecord: proofRecord(otherResponseDigestHex, "digest_mismatch"),
  evaluatedAtEpochMs,
  maximumAgeMs,
  verifierAssessment: Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    verifierRecordVersion: "pond-local-authentication-mechanic-d-p8",
    assessmentKind: "deterministic_supplier_verifier_record",
    verifierState: "receiver_enrolled_knowledge_verifier",
    reason: "verifier_enrolled",
    secretFreeInventoryPosture: "verifier_digest_only_no_secret_material",
    revocabilityPosture: "verifier_revocable_by_re_enrollment",
    satisfiedChecks: verifierSatisfiedChecks,
    unsatisfiedChecks: Object.freeze([] as const),
    credentialAdmitted: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    principalIdIssued: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondLocalAuthenticationVerifierAssessment,
  assessment: Object.freeze({
    contractVersion: "pond-local-authentication-mechanic-d-p8",
    proofRecordVersion: "pond-local-authentication-mechanic-d-p8",
    verifierRecordVersion: "pond-local-authentication-mechanic-d-p8",
    assessmentKind: "deterministic_supplied_challenge_round",
    authenticationMechanicState: "not_verified",
    reason: "receiver_challenge_proof_incomplete",
    comparison: "digest_mismatch",
    recomputedComparison: "digest_mismatch",
    freshnessDiagnosis: zeroAgeDiagnosis,
    authenticationPosture: "not_established",
    satisfiedChecks: incompleteSatisfiedChecks,
    unsatisfiedChecks: incompleteUnsatisfiedChecks,
    credentialAdmitted: false,
    observedPresenceAcceptedAsAuthentication: false,
    observedIdentityAcceptedAsPrincipalId: false,
    principalIdIssued: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  }) satisfies PondLocalAuthenticationChallengeAssessment,
}) satisfies PondStageDP8MechanicFixtureEntry;

export const stageDP8MechanicMatrix: readonly PondStageDP8MechanicFixtureEntry[] =
  Object.freeze([stageDP8MechanicComplete, stageDP8MechanicIncomplete]);

// Compile-time fixture invariants: the complete round verifies the factor
// yet never becomes a PrincipalId issuance or authority; the incomplete arm
// stays not_verified with the recomputed mismatch.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP8FixtureInvariant_CompleteArmVerifiedYetRefused =
  Assert<
    Equal<
      [
        typeof stageDP8MechanicComplete["assessment"]["authenticationMechanicState"],
        typeof stageDP8MechanicComplete["assessment"]["principalIdIssued"],
        typeof stageDP8MechanicComplete["assessment"]["credentialAdmitted"],
        typeof stageDP8MechanicComplete["assessment"]["authority"],
      ],
      ["receiver_verified_knowledge_factor", false, false, "none"]
    >
  >;
export type PondStageDP8FixtureInvariant_IncompleteArmNotVerified = Assert<
  Equal<
    [
      typeof stageDP8MechanicIncomplete["assessment"]["authenticationMechanicState"],
      typeof stageDP8MechanicIncomplete["assessment"]["recomputedComparison"],
    ],
    ["not_verified", "digest_mismatch"]
  >
>;
export type PondStageDP8FixtureInvariant_CompleteArmSatisfiedTuple = Assert<
  Equal<
    typeof stageDP8MechanicComplete["assessment"]["satisfiedChecks"],
    readonly [
      "mechanic_class_receiver_owned",
      "challenge_bound_to_receiver_held_principal",
      "verifier_binding_exact_match",
      "comparison_recomputed",
      "comparison_fresh",
      "proof_excludes_memory_and_lane_content",
      "challenge_grants_no_authority",
    ]
  >
>;