// Stage D-P24: the agent registration evidence lane — receiver-recorded
// presentation of agent registration documents as DERIVED EVIDENCE,
// inspection-first. Template one is the trading-desk frog's ERC-8004-style
// registration-v1 file (a file-only registration: no chain coordinate of
// any kind). The desk's own no-invention and not-runtime-identity
// doctrines are adopted verbatim as contract postures.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): the lane's own law anchors are composed, because no
// canonical law defines a first-class "registration" evidence class — the
// law speaks only in inequalities, and this contract carries them as a
// ceiling rather than resolving the silence. Identity contract L14-19
// (a ToadAid AgentId is minted only by the identity service; external
// identities may be recorded as evidence or bindings, and none
// automatically establishes a ToadAid AgentId), L93-95 (external identity
// is evidence and may provide evidence only — never a claim of
// authority), L108-109 (onchain identity is not local authority), L126
// (no inheritance of trust including ERC-8004 reputation or validation),
// L156 (public discovery is a projection, not canonical authority).
// Attestation L419-430 (the four ERC-8004 inequalities: onchain identity
// is evidence not PrincipalId; validation is not acceptance; reputation
// is not authority; a registry record is not local admission — and "This
// contract authorizes no registration, validation transaction, or other
// chain activity"), L485 (derived evidence must identify its source,
// preserve provenance, and never silently broaden or become canonical
// current state or authority). Trusted-channel L13 (presented evidence
// carries source, provenance, freshness, trust basis, scope, and
// result-digest), L120-131 (a provider must not silently transform
// untrusted material into verified evidence), L254 (unknown channels fail
// closed — contacting the desk's status server would be a channel, so
// this cut opens none and never contacts it). Verification-applicability
// L184 (source-verified is never wiring-verified and never
// live-verified). Delegated-authority L130 (an external registry record
// must not act as an authoritative Grantee identity), L315.
// Community-agent-fabric ("Agents may collaborate. Humans remain
// sovereign."): the front face presents the community's agents; they are
// admitted through the separate upstream-governed admission lane,
// nothing this cut performs.
//
// Recorded law silences. No canonical law defines a "registration
// evidence" presentation class, a registration-digest anchor, or a
// registration-derived ui panel: "registration" appears in canonical law
// only inside the ERC-8004 inequality sentences (a registry record is not
// local admission; no chain activity authorized). The receiver-recorded
// choice this lane records in that silence: a supplied registration
// document is presented as digest-anchored derived evidence with honest
// all-null onchain slots — exactly the D-P0 null-identityClaim vocabulary,
// one lane later. Every literal below is a receiver-recorded app-side
// decision exercising refusal law, not new authority.
//
// What the cut performs. The receiver presents ONE agent registration
// evidence record for inspection: the registration's self-describing
// content transcribed WITHOUT its url-shaped values (the source file's
// exact bytes are pinned by the sha256 digest; the values live in the
// source, never in this repository), provenance naming the source and the
// observation instant, and an onchain evidence slot that is honestly
// all-null. The presentation admits nobody, opens no channel, reads
// nothing live, and consumes nothing: `registrationEvidenceConsumedThisCut`
// is false on every arm, the standing D-P0 forbidden-key inventory stays
// banned, and no record of any kind is read. The desk's status HTTP
// server is never contacted — presentation is not a connection.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import {
  POND_STAGE_D_P0_FORBIDDEN_LIVE_CONNECTION_KEYS,
  POND_STAGE_D_P0_FORBIDDEN_PRESENCE_RECORD_KEYS,
} from "./pond-agent-presence-projection.ts";

export const POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION =
  "pond-agent-registration-evidence-d-p24" as const;

// The desk's file declares its type with a full URL; the URL never enters
// this repository. The receiver records the class of the type value with
// its own vocabulary instead.
export const POND_STAGE_DP24_AGENT_REGISTRATION_TYPE_KINDS = Object.freeze([
  "eip_8004_registration_v1_style_self_describing_document",
  "unrecognized_self_describing_registration_document",
] as const);

// Single-value basis: the digest is taken over the exact source-file
// bytes. Any other basis refuses at its dedicated rung.
export const POND_STAGE_DP24_REGISTRATION_DIGEST_BASES = Object.freeze([
  "sha256_registration_file_bytes_v1",
] as const);

// Single-value status: nothing onchain is observed, so no onchain
// coordinate is invented. A claimed observation refuses at its dedicated
// rung with the claim echoed.
export const POND_STAGE_DP24_ONCHAIN_EVIDENCE_SLOT_STATUSES = Object.freeze([
  "not_observed_no_registration_coordinate_is_invented",
] as const);

// Deterministic supply only: the receiver presents what was actually
// supplied. A claim of a registration that was never supplied is refused
// — exactly like every other claimed-performed basis in this program.
export const POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_BASES = Object.freeze([
  "receiver_presented_registration_evidence_from_a_supplied_registration_document",
  "claimed_observed_registration_not_supplied",
] as const);

// The receiver-recorded refusal postures: one source of truth for the
// record's posture block, the assessment's echo, and the selftest's
// verbatim pins.
export const POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_POSTURES = Object.freeze({
  evidencePosture:
    "registration_metadata_presented_as_derived_evidence_not_canonical_current_state",
  notRuntimeIdentityPosture:
    "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim",
  noInventionPosture:
    "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence",
  admissionPosture: "registration_evidence_does_not_establish_local_admission",
  channelPosture: "no_channel_is_opened_presentation_is_not_a_connection",
  erc8004CeilingPosture:
    "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission",
  verificationApplicabilityPosture:
    "source_verified_never_presented_as_wiring_or_live_verified",
} as const);

export type PondAgentRegistrationEvidencePostures =
  typeof POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_POSTURES;

export interface PondAgentRegistrationDigest {
  readonly claimedDigestHex: string;
  readonly digestBasis: (typeof POND_STAGE_DP24_REGISTRATION_DIGEST_BASES)[number];
}

export interface PondAgentRegistrationEvidenceProvenance {
  readonly registrationSourceRef: string;
  readonly observedAtEpochMs: number;
  readonly observedBy: string;
}

export interface PondAgentRegistrationOnchainEvidenceSlot {
  readonly status: string;
  readonly chainIdObserved: string | null;
  readonly registryAddress: string | null;
  readonly agentIdObserved: string | null;
  readonly ownerObserved: string | null;
}

export interface PondAgentRegistrationEvidenceRecord
  extends PondAgentRegistrationEvidencePostures {
  readonly contractVersion: typeof POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION;
  readonly kind: "pond-agent-registration-evidence-record";
  readonly agentEvidenceRef: string;
  readonly evidenceBasis: (typeof POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_BASES)[number];
  readonly registrationName: string;
  readonly registrationTypeKind: (typeof POND_STAGE_DP24_AGENT_REGISTRATION_TYPE_KINDS)[number];
  readonly registrationServiceCount: number;
  readonly registrationServiceNames: readonly string[];
  readonly registrationActive: boolean;
  readonly x402Support: boolean;
  readonly supportedTrust: readonly string[];
  readonly registrationDigest: PondAgentRegistrationDigest;
  readonly evidenceProvenance: PondAgentRegistrationEvidenceProvenance;
  readonly onchainEvidenceSlot: PondAgentRegistrationOnchainEvidenceSlot;
  readonly registrationEvidenceConsumedThisCut: false;
  readonly authority: "none";
}

export const POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_RECORD_KEYS = Object.freeze([
  "admissionPosture",
  "agentEvidenceRef",
  "authority",
  "channelPosture",
  "contractVersion",
  "evidenceBasis",
  "evidencePosture",
  "erc8004CeilingPosture",
  "evidenceProvenance",
  "kind",
  "noInventionPosture",
  "notRuntimeIdentityPosture",
  "onchainEvidenceSlot",
  "registrationActive",
  "registrationDigest",
  "registrationEvidenceConsumedThisCut",
  "registrationName",
  "registrationServiceCount",
  "registrationServiceNames",
  "registrationTypeKind",
  "supportedTrust",
  "verificationApplicabilityPosture",
  "x402Support",
] as const);

export type PondAgentRegistrationEvidenceCheck =
  | "agent_registration_evidence_record_well_formed"
  | "presentation_digest_sha256_recomputed_and_agrees"
  | "registration_digest_basis_declared_file_bytes"
  | "onchain_evidence_slot_honestly_not_observed"
  | "agent_registration_evidence_refusal_postures_complete"
  | "agent_registration_evidence_fresh_by_provenance_observation_time"
  | "registration_evidence_consumed_by_nothing_and_authority_none";

export const POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CHECKS = Object.freeze([
  "agent_registration_evidence_record_well_formed",
  "presentation_digest_sha256_recomputed_and_agrees",
  "registration_digest_basis_declared_file_bytes",
  "onchain_evidence_slot_honestly_not_observed",
  "agent_registration_evidence_refusal_postures_complete",
  "agent_registration_evidence_fresh_by_provenance_observation_time",
  "registration_evidence_consumed_by_nothing_and_authority_none",
] as const satisfies readonly PondAgentRegistrationEvidenceCheck[]);

export const POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_REASONS = Object.freeze([
  "agent_registration_evidence_record_invalid",
  "registration_digest_agreement_not_proven",
  "onchain_coordinate_claimed_without_onchain_evidence",
  "agent_registration_evidence_not_fresh",
  "receiver_registration_evidence_proof_incomplete",
  "agent_registration_evidence_derived_evidence_only_presentation_satisfied",
] as const);

export interface PondAgentRegistrationEvidenceInput {
  readonly registrationEvidenceRecord: unknown;
  readonly receiverRecomputedDigestHex: unknown;
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export interface PondAgentRegistrationEvidenceAssessment
  extends PondAgentRegistrationEvidencePostures {
  readonly contractVersion: typeof POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION;
  readonly agentRegistrationEvidenceState: PondAgentRegistrationEvidenceState;
  readonly reason: (typeof POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_REASONS)[number];
  readonly satisfiedChecks: readonly PondAgentRegistrationEvidenceCheck[];
  readonly unsatisfiedChecks: readonly PondAgentRegistrationEvidenceCheck[];
  readonly agentRegistrationEvidenceVersion: string;
  readonly evidenceBasis: string | null;
  readonly evidenceFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly registrationDigestClaimedHex: string | null;
  readonly presentationDigestRecomputeAgrees: boolean | null;
  readonly onchainEvidenceSlotStatus: string | null;
  readonly agentRegistrationEvidenceEstablishesAdmission: false;
  readonly agentRegistrationEvidenceEstablishesMembership: false;
  readonly agentRegistrationEvidenceEstablishesChannel: false;
  readonly agentRegistrationEvidenceEstablishesAuthority: false;
  readonly agentRegistrationEvidenceEstablishesCapability: false;
  readonly agentRegistrationEvidenceEstablishesGrant: false;
  readonly agentRegistrationEvidenceEstablishesConsequenceOrExecution: false;
  readonly registrationPresentedEstablishesRuntimeIdentity: false;
  readonly registrationDigestAcceptedAsPrincipalId: false;
  readonly erc8004IdentityAcceptedAsPrincipalId: false;
  readonly erc8004ValidationAcceptedAsAcceptance: false;
  readonly erc8004ReputationAcceptedAsAuthority: false;
  readonly erc8004RegistryRecordAcceptedAsLocalAdmission: false;
  readonly presentedEvidencePromotedToCanonicalCurrentState: false;
  readonly admissionWidenedByPresentation: false;
  readonly sourceVerifiedPresentedAsWiringOrLiveVerified: false;
  readonly registrationEvidenceConsumedThisCut: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

export type PondAgentRegistrationEvidenceState =
  | "agent_registration_evidence_not_presentation_ready"
  | "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel";

// The receiver-recorded forbidden-key inventory: the standing D-P0
// presence and liveness forbidden keys plus this lane's own four — an
// admission record, a channel binding record, an offered agent card, and
// any registration write (an ERC-8004 registration or validation
// transaction is chain activity, which no law here authorizes).
export const POND_STAGE_DP24_FORBIDDEN_AGENT_IDENTITY_EVIDENCE_KEYS = Object.freeze([
  ...POND_STAGE_D_P0_FORBIDDEN_PRESENCE_RECORD_KEYS,
  ...POND_STAGE_D_P0_FORBIDDEN_LIVE_CONNECTION_KEYS,
  "admissionRecord",
  "channelBindingRecord",
  "agentCardOffer",
  "registrationWrite",
] as const);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object" && !Array.isArray(value)
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

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.length > 0;

// Hex-plain 64: lowercase sha256 over raw bytes, no prefix characters
// before the hex run; a hex digest needs no prefix.
const validDigestHex = (value: unknown): value is string =>
  typeof value === "string" && /^[0-9a-f]{64}$/.test(value);

const distinctNonEmptyStrings = (value: unknown): value is readonly string[] =>
  Array.isArray(value) &&
  value.every((entry) => typeof entry === "string" && entry.length > 0) &&
  new Set(value as readonly string[]).size === (value as readonly string[]).length;

// The D-P2 freshness diagnosis, reimplemented with the same ordering and
// literals over the registration evidence's own provenance metadata:
// metadata, then evaluation time, then maximum age, then future time; the
// fresh boundary is inclusive. A diagnosis is a diagnosis, never an
// admission.
const diagnoseRegistrationEvidenceFreshness = (
  provenance: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(provenance);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.observedAtEpochMs) ||
    !isNonEmptyString(checked.registrationSourceRef) ||
    !isNonEmptyString(checked.observedBy)
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
  const observedAtEpochMs = checked["observedAtEpochMs"] as number;
  if (observedAtEpochMs > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - observedAtEpochMs;
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

export function assessPondAgentRegistrationEvidence(
  input: unknown,
): PondAgentRegistrationEvidenceAssessment {
  const inputRecord = record(input);
  const inputWellFormed =
    inputRecord !== null &&
    exactKeys(inputRecord, [
      "registrationEvidenceRecord",
      "receiverRecomputedDigestHex",
      "receiverEvaluatedAtEpochMs",
      "receiverMaximumAgeMs",
    ]);

  const candidate = inputWellFormed
    ? record(inputRecord["registrationEvidenceRecord"])
    : null;

  // Check 1 — structural: exact record keys, string/number/boolean field
  // types, digest nested shape (hex shape, basis a nonempty string —
  // strictness at its own rung), provenance shape, onchain slot shape
  // (values null-or-nonempty-string, status nonempty — honesty at its
  // own rung), service count agreement.
  const wellFormed =
    candidate !== null &&
    exactKeys(candidate, [
      ...POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_RECORD_KEYS,
    ]) &&
    candidate["contractVersion"] ===
      POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION &&
    candidate["kind"] === "pond-agent-registration-evidence-record" &&
    isNonEmptyString(candidate["agentEvidenceRef"]) &&
    (POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_BASES as readonly string[]).includes(
      String(candidate["evidenceBasis"]),
    ) &&
    isNonEmptyString(candidate["registrationName"]) &&
    (POND_STAGE_DP24_AGENT_REGISTRATION_TYPE_KINDS as readonly string[]).includes(
      String(candidate["registrationTypeKind"]),
    ) &&
    safeNonNegativeInteger(candidate["registrationServiceCount"]) &&
    distinctNonEmptyStrings(candidate["registrationServiceNames"]) &&
    (candidate["registrationServiceNames"] as readonly string[]).length ===
      candidate["registrationServiceCount"] &&
    typeof candidate["registrationActive"] === "boolean" &&
    typeof candidate["x402Support"] === "boolean" &&
    distinctNonEmptyStrings(candidate["supportedTrust"]) &&
    (() => {
      const digest = record(candidate["registrationDigest"]);
      return (
        digest !== null &&
        exactKeys(digest, ["claimedDigestHex", "digestBasis"]) &&
        validDigestHex(digest["claimedDigestHex"]) &&
        isNonEmptyString(digest["digestBasis"])
      );
    })() &&
    (() => {
      const provenance = record(candidate["evidenceProvenance"]);
      return (
        provenance !== null &&
        exactKeys(provenance, [
          "registrationSourceRef",
          "observedAtEpochMs",
          "observedBy",
        ]) &&
        isNonEmptyString(provenance["registrationSourceRef"]) &&
        safeNonNegativeInteger(provenance["observedAtEpochMs"]) &&
        isNonEmptyString(provenance["observedBy"])
      );
    })() &&
    (() => {
      const slot = record(candidate["onchainEvidenceSlot"]);
      return (
        slot !== null &&
        exactKeys(slot, [
          "status",
          "chainIdObserved",
          "registryAddress",
          "agentIdObserved",
          "ownerObserved",
        ]) &&
        isNonEmptyString(slot["status"]) &&
        (slot["chainIdObserved"] === null || isNonEmptyString(slot["chainIdObserved"])) &&
        (slot["registryAddress"] === null || isNonEmptyString(slot["registryAddress"])) &&
        (slot["agentIdObserved"] === null || isNonEmptyString(slot["agentIdObserved"])) &&
        (slot["ownerObserved"] === null || isNonEmptyString(slot["ownerObserved"]))
      );
    })();

  const provenance = wellFormed
    ? candidate !== null
      ? (record(candidate["evidenceProvenance"]))
      : null
    : null;
  const receiverRecomputedDigestHex =
    inputWellFormed && inputRecord !== null
      ? inputRecord["receiverRecomputedDigestHex"]
      : null;
  const receiverEvaluatedAtEpochMs =
    inputWellFormed && inputRecord !== null
      ? inputRecord["receiverEvaluatedAtEpochMs"]
      : null;
  const receiverMaximumAgeMs =
    inputWellFormed && inputRecord !== null
      ? inputRecord["receiverMaximumAgeMs"]
      : null;
  const freshness = diagnoseRegistrationEvidenceFreshness(
    provenance,
    receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs,
  );

  // Check 2 — the receiver's own sha256 recompute over the source-file
  // bytes agrees with the presented digest. Not computed (null) unless
  // both sides are valid hex-plain digests.
  const claimedDigestHex =
    wellFormed &&
    (() => {
      const digest = record(candidate["registrationDigest"]);
      return digest !== null ? digest["claimedDigestHex"] : null;
    })();
  const digestBasis =
    wellFormed
      ? (record(candidate["registrationDigest"]) as Record<string, unknown>)[
          "digestBasis"
        ]
      : null;
  const digestRecomputeAgrees =
    claimedDigestHex !== null &&
    validDigestHex(receiverRecomputedDigestHex) &&
    claimedDigestHex === receiverRecomputedDigestHex;

  // Check 3 — the declared digest basis is the source-file-bytes basis.
  const basisProven =
    wellFormed &&
    digestBasis === POND_STAGE_DP24_REGISTRATION_DIGEST_BASES[0];

  // Check 4 — the onchain evidence slot is honestly all-null under the
  // not-observed status: no chain coordinate of any kind is claimed. A
  // nonnull slot, or a status that claims observation, refuses here with
  // the claim echoed, never normalized into green.
  const onchainSlotStatus =
    wellFormed
      ? (record(candidate["onchainEvidenceSlot"]) as Record<string, unknown>)["status"]
      : null;
  const onchainSlotClaimed =
    wellFormed &&
    (() => {
      const slot = record(candidate["onchainEvidenceSlot"]) as Record<string, unknown>;
      return (
        slot["status"] !== POND_STAGE_DP24_ONCHAIN_EVIDENCE_SLOT_STATUSES[0] ||
        slot["chainIdObserved"] !== null ||
        slot["registryAddress"] !== null ||
        slot["agentIdObserved"] !== null ||
        slot["ownerObserved"] !== null
      );
    })();

  // Check 5 — every receiver-recorded refusal posture is carried
  // verbatim, from the single postures source of truth.
  const posturesComplete =
    wellFormed &&
    Object.entries(POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_POSTURES).every(
      ([postureKey, postureLiteral]) => candidate[postureKey] === postureLiteral,
    );

  // Check 6 — the provenance observation instant is fresh in the
  // receiver's own evaluation pair (inclusive boundary).
  const fresh = freshness.state === "fresh";

  // Check 7 — nothing is consumed and no authority exists: the record
  // declares not-consumed and authority none, and carries no forbidden
  // key anywhere inside (the standing D-P0 inventory plus this lane's
  // four refuses).
  const consumedNothing =
    wellFormed &&
    candidate["registrationEvidenceConsumedThisCut"] === false &&
    candidate["authority"] === "none" &&
    !hasForbiddenKey(candidate, POND_STAGE_DP24_FORBIDDEN_AGENT_IDENTITY_EVIDENCE_KEYS);

  const suppliedBasisProven =
    wellFormed &&
    candidate["evidenceBasis"] === POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_BASES[0];

  const checkValues: readonly boolean[] = [
    wellFormed,
    digestRecomputeAgrees,
    basisProven,
    wellFormed && !onchainSlotClaimed,
    posturesComplete,
    fresh,
    consumedNothing && suppliedBasisProven,
  ];
  const satisfied = POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CHECKS.filter(
    (_, index) => checkValues[index] === true,
  );
  const unsatisfied = POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CHECKS.filter(
    (_, index) => checkValues[index] !== true,
  );

  // The refusal ladder, evaluated in order; each rung owns its cause and
  // the record carries the echo of exactly what was refused.
  let reason: (typeof POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_REASONS)[number];
  if (!wellFormed) reason = "agent_registration_evidence_record_invalid";
  else if (!digestRecomputeAgrees || !basisProven)
    reason = "registration_digest_agreement_not_proven";
  else if (onchainSlotClaimed)
    reason = "onchain_coordinate_claimed_without_onchain_evidence";
  else if (!fresh) reason = "agent_registration_evidence_not_fresh";
  else if (unsatisfied.length > 0)
    reason = "receiver_registration_evidence_proof_incomplete";
  else reason = "agent_registration_evidence_derived_evidence_only_presentation_satisfied";

  const green = unsatisfied.length === 0 && suppliedBasisProven && fresh;

  return Object.freeze({
    contractVersion: POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION,
    agentRegistrationEvidenceState: green
      ? "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel"
      : "agent_registration_evidence_not_presentation_ready",
    reason,
    satisfiedChecks: Object.freeze(satisfied),
    unsatisfiedChecks: Object.freeze(unsatisfied),
    agentRegistrationEvidenceVersion: wellFormed
      ? POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_CONTRACT_VERSION
      : "invalid",
    evidenceBasis:
      candidate !== null && isNonEmptyString(candidate["evidenceBasis"])
        ? (candidate["evidenceBasis"] as string)
        : null,
    evidenceFreshnessDiagnosis: freshness,
    registrationDigestClaimedHex:
      typeof claimedDigestHex === "string" ? claimedDigestHex : null,
    presentationDigestRecomputeAgrees: digestRecomputeAgrees,
    onchainEvidenceSlotStatus:
      typeof onchainSlotStatus === "string" ? onchainSlotStatus : null,
    agentRegistrationEvidenceEstablishesAdmission: false,
    agentRegistrationEvidenceEstablishesMembership: false,
    agentRegistrationEvidenceEstablishesChannel: false,
    agentRegistrationEvidenceEstablishesAuthority: false,
    agentRegistrationEvidenceEstablishesCapability: false,
    agentRegistrationEvidenceEstablishesGrant: false,
    agentRegistrationEvidenceEstablishesConsequenceOrExecution: false,
    registrationPresentedEstablishesRuntimeIdentity: false,
    registrationDigestAcceptedAsPrincipalId: false,
    erc8004IdentityAcceptedAsPrincipalId: false,
    erc8004ValidationAcceptedAsAcceptance: false,
    erc8004ReputationAcceptedAsAuthority: false,
    erc8004RegistryRecordAcceptedAsLocalAdmission: false,
    presentedEvidencePromotedToCanonicalCurrentState: false,
    admissionWidenedByPresentation: false,
    sourceVerifiedPresentedAsWiringOrLiveVerified: false,
    registrationEvidenceConsumedThisCut: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
    ...POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_POSTURES,
  } satisfies PondAgentRegistrationEvidenceAssessment);
}

// Compile-time invariants for this cut. A presented registration is
// derived evidence only: it never establishes admission, membership, a
// channel, authority, a capability, a grant, a consequence or execution,
// runtime identity, a PrincipalId, ERC-8004 acceptance or authority or
// local admission, canonical current state, a widened admission, and is
// never presented as wiring- or live-verified.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP24Invariant_ChecksExact = Assert<
  Equal<
    PondAgentRegistrationEvidenceCheck,
    | "agent_registration_evidence_record_well_formed"
    | "presentation_digest_sha256_recomputed_and_agrees"
    | "registration_digest_basis_declared_file_bytes"
    | "onchain_evidence_slot_honestly_not_observed"
    | "agent_registration_evidence_refusal_postures_complete"
    | "agent_registration_evidence_fresh_by_provenance_observation_time"
    | "registration_evidence_consumed_by_nothing_and_authority_none"
  >
>;

export type PondStageDP24Invariant_StatesExact = Assert<
  Equal<
    PondAgentRegistrationEvidenceAssessment["agentRegistrationEvidenceState"],
    | "agent_registration_evidence_not_presentation_ready"
    | "agent_registration_evidence_presented_derived_evidence_only_no_admission_no_channel"
  >
>;

export type PondStageDP24Invariant_ReasonsExact = Assert<
  Equal<
    PondAgentRegistrationEvidenceAssessment["reason"],
    | "agent_registration_evidence_record_invalid"
    | "registration_digest_agreement_not_proven"
    | "onchain_coordinate_claimed_without_onchain_evidence"
    | "agent_registration_evidence_not_fresh"
    | "receiver_registration_evidence_proof_incomplete"
    | "agent_registration_evidence_derived_evidence_only_presentation_satisfied"
  >
>;

export type PondStageDP24Invariant_BasisVocabularyExact = Assert<
  Equal<
    (typeof POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_BASES)[number],
    | "receiver_presented_registration_evidence_from_a_supplied_registration_document"
    | "claimed_observed_registration_not_supplied"
  >
>;

export type PondStageDP24Invariant_ConsumedByNothing = Assert<
  Equal<
    [
      PondAgentRegistrationEvidenceAssessment["agentRegistrationEvidenceEstablishesAdmission"],
      PondAgentRegistrationEvidenceAssessment["agentRegistrationEvidenceEstablishesMembership"],
      PondAgentRegistrationEvidenceAssessment["agentRegistrationEvidenceEstablishesChannel"],
      PondAgentRegistrationEvidenceAssessment["agentRegistrationEvidenceEstablishesAuthority"],
      PondAgentRegistrationEvidenceAssessment["agentRegistrationEvidenceEstablishesCapability"],
      PondAgentRegistrationEvidenceAssessment["agentRegistrationEvidenceEstablishesGrant"],
      PondAgentRegistrationEvidenceAssessment["agentRegistrationEvidenceEstablishesConsequenceOrExecution"],
      PondAgentRegistrationEvidenceAssessment["registrationPresentedEstablishesRuntimeIdentity"],
      PondAgentRegistrationEvidenceAssessment["registrationDigestAcceptedAsPrincipalId"],
      PondAgentRegistrationEvidenceAssessment["erc8004IdentityAcceptedAsPrincipalId"],
      PondAgentRegistrationEvidenceAssessment["erc8004ValidationAcceptedAsAcceptance"],
      PondAgentRegistrationEvidenceAssessment["erc8004ReputationAcceptedAsAuthority"],
      PondAgentRegistrationEvidenceAssessment["erc8004RegistryRecordAcceptedAsLocalAdmission"],
      PondAgentRegistrationEvidenceAssessment["presentedEvidencePromotedToCanonicalCurrentState"],
      PondAgentRegistrationEvidenceAssessment["admissionWidenedByPresentation"],
      PondAgentRegistrationEvidenceAssessment["sourceVerifiedPresentedAsWiringOrLiveVerified"],
      PondAgentRegistrationEvidenceAssessment["registrationEvidenceConsumedThisCut"],
      PondAgentRegistrationEvidenceAssessment["runtimeActivationPosture"],
      PondAgentRegistrationEvidenceAssessment["authority"],
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      "not_included",
      "none",
    ]
  >
>;

export type PondStageDP24Invariant_PosturesExact = Assert<
  Equal<
    PondAgentRegistrationEvidencePostures,
    {
      readonly evidencePosture: "registration_metadata_presented_as_derived_evidence_not_canonical_current_state";
      readonly notRuntimeIdentityPosture: "registration_metadata_is_not_runtime_identity_the_file_never_supplies_defaults_to_any_runtime_claim";
      readonly noInventionPosture: "no_onchain_coordinate_is_invented_the_registrations_field_is_added_only_from_onchain_evidence";
      readonly admissionPosture: "registration_evidence_does_not_establish_local_admission";
      readonly channelPosture: "no_channel_is_opened_presentation_is_not_a_connection";
      readonly erc8004CeilingPosture: "erc8004_identity_is_evidence_only_validation_is_not_acceptance_reputation_is_not_authority_registry_record_is_not_local_admission";
      readonly verificationApplicabilityPosture: "source_verified_never_presented_as_wiring_or_live_verified";
    }
  >
>;

export type PondStageDP24Invariant_RecordKeysExact = Assert<
  Equal<
    keyof PondAgentRegistrationEvidenceRecord,
    (typeof POND_STAGE_DP24_AGENT_REGISTRATION_EVIDENCE_RECORD_KEYS)[number]
  >
>;

export type PondStageDP24Invariant_NoForbiddenRecordKeys = Assert<
  HasAnyKey<
    PondAgentRegistrationEvidenceRecord,
    (typeof POND_STAGE_DP24_FORBIDDEN_AGENT_IDENTITY_EVIDENCE_KEYS)[number]
  > extends false
    ? true
    : false
>;

export type PondStageDP24Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<
    PondAgentRegistrationEvidenceAssessment,
    (typeof POND_STAGE_DP24_FORBIDDEN_AGENT_IDENTITY_EVIDENCE_KEYS)[number]
  > extends false
    ? true
    : false
>;