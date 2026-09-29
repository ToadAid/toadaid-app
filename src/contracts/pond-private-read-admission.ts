// Stage D-P10 private-read admission.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture: the
// capability-authority boundary makes every read a capability
// (Invariant 1: can_do(X) does not imply may_do(X)), and admission of a
// read is an authority decision bounded by the activated scope — not a
// consequence of the activation existing. Scope laws 1/6/7 hold as
// postures ("Memory never grants permission", "Personal state is private
// by default", "Release is explicit"): an admitted read never crosses a
// memory or narrative lane, never reads authority or credential records,
// never reads another principal's records, and never admits content. The
// derived-evidence law's current-truth requirement (canonical source →
// ref/revision → direct read) is not met by session-carried structural
// records, so the truth posture is honest:
// structural_presence_only_no_current_truth_claim. Admission re-validates
// the activation record structurally — kind, version, explicit basis,
// capability, scope postures — and binds the read inside the
// session-scoped activation without re-deriving identity-chain currency,
// which is the D-P10 composition's exclusive job (D-P9 layered-partiality
// precedent). No assessment here carries a `privateReadsActivated` key —
// the frozen D-P0…D-P9 tuples remain the only carriers of that name.

import type { PondPrivateReadActivationCheck } from "./pond-private-read-activation.js";
import {
  POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS,
} from "./pond-private-read-activation.ts";

// The one read class this cut admits, plus the read shapes it exists to
// refuse. Lane content, authority records, credential records, and
// cross-principal records are valid-but-unsatisfied: claiming any of them
// is exactly what admission exists to refuse.
export type PondPrivateReadClass =
  | "principal_structural_record_read"
  | "lane_content_read"
  | "authority_record_read"
  | "credential_record_read"
  | "cross_principal_record_read";

// The only read targets within the activated session scope: the
// receiver's own already-carried principal-structural records, named by
// their receiver-record labels. The table is fail-closed — a target
// outside it is a breach.
export type PondPrivateReadTargetRef =
  | "receiver-record:pond-local-principal-binding-establishment-d-p5"
  | "receiver-record:pond-local-authentication-mechanic-d-p8"
  | "receiver-record:pond-local-principal-id-issuance-d-p9"
  | "receiver-record:pond-erc8004-identity-mapping-d-p9"
  | "receiver-record:pond-principal-identity-readiness-composition-d-p9"
  | "receiver-record:pond-private-read-activation-d-p10";

export const POND_STAGE_DP10_PRIVATE_READ_TARGET_REFS = Object.freeze([
  "receiver-record:pond-local-principal-binding-establishment-d-p5",
  "receiver-record:pond-local-authentication-mechanic-d-p8",
  "receiver-record:pond-local-principal-id-issuance-d-p9",
  "receiver-record:pond-erc8004-identity-mapping-d-p9",
  "receiver-record:pond-principal-identity-readiness-composition-d-p9",
  "receiver-record:pond-private-read-activation-d-p10",
] as const satisfies readonly PondPrivateReadTargetRef[]);

export type PondPrivateReadBasis =
  | "receiver_requested_own_record_read"
  // Valid-but-unsatisfied fail-closed literals: a read claimed from any
  // of these bases is exactly what admission exists to refuse. The
  // activation existing does not read anything on the receiver's behalf
  // (inferred_from_activation); lane, authority, credential, and
  // cross-principal reads are outside the activated scope by posture.
  | "inferred_from_activation"
  | "lane_content_read_requested"
  | "authority_record_read_requested"
  | "credential_record_read_requested"
  | "cross_principal_record_read_requested";

export interface PondPrivateReadAdmissionRecord {
  readonly contractVersion: "pond-private-read-admission-d-p10";
  readonly kind: "pond-private-read-admission";
  readonly principalRef: string;
  readonly readClass: PondPrivateReadClass;
  readonly readTargetRefs: readonly string[];
  readonly readBasis: PondPrivateReadBasis;
  readonly activationBindingPosture: "read_admitted_only_within_session_scoped_activation";
  readonly inspectionPosture: "receiver_upstream_assessors_recomputed_at_composition";
  readonly readScopePosture: "single_principal_own_structural_records_only";
  readonly truthPosture: "structural_presence_only_no_current_truth_claim";
  readonly grantSufficiencyPosture: "read_requires_no_grant_receiver_trusted_policy_scope";
  readonly laneExclusionPosture: "admission_excludes_memory_narrative_transcript_lanes";
  readonly revocabilityPosture:
    | "not_established"
    | "read_revocable_by_activation_retraction";
  readonly authority: "none";
}

// Receiver-owned admission checks. A check is satisfied only when the
// record's own proof field carries the receiver-owned literal; an
// activation-inferred or lane-shaped read never satisfies any of them.
export type PondPrivateReadAdmissionCheck =
  | "principal_ref_well_formed"
  | "read_admission_bound_to_receiver_held_principal"
  | "read_basis_explicitly_receiver_owned_not_inferred"
  | "read_class_structural_records_only"
  | "read_targets_within_activated_session_scope"
  | "read_admission_excludes_memory_and_lane_content"
  | "read_admission_requires_no_grant_and_stays_revocable";

export interface PondPrivateReadAdmissionInput {
  readonly readAdmissionRecord: unknown;
  readonly activationRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
}

export interface PondPrivateReadAdmissionAssessment {
  readonly contractVersion: "pond-private-read-admission-d-p10";
  readonly admissionRecordVersion:
    | "pond-private-read-admission-d-p10"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_private_read_admission";
  readonly readAdmissionState:
    | "not_admitted"
    | "fixture_structural_structural_record_read_admitted";
  readonly reason:
    | "admission_record_invalid"
    | "activation_record_invalid"
    | "receiver_read_admission_proof_incomplete"
    | "all_read_admission_checks_satisfied";
  readonly admittedTargetRefs: readonly string[];
  readonly admissionSessionScopePosture:
    | "not_established"
    | "session_scoped_receiver_restart_ends_activation";
  readonly effectiveReadScopePosture: "single_principal_own_structural_records_only";
  readonly readTruthPosture: "structural_presence_only_no_current_truth_claim";
  readonly satisfiedChecks: readonly PondPrivateReadAdmissionCheck[];
  readonly unsatisfiedChecks: readonly PondPrivateReadAdmissionCheck[];
  readonly readEstablishesGrant: false;
  readonly credentialAdmitted: false;
  readonly authenticationPerformed: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const admissionChecks = Object.freeze([
  "principal_ref_well_formed",
  "read_admission_bound_to_receiver_held_principal",
  "read_basis_explicitly_receiver_owned_not_inferred",
  "read_class_structural_records_only",
  "read_targets_within_activated_session_scope",
  "read_admission_excludes_memory_and_lane_content",
  "read_admission_requires_no_grant_and_stays_revocable",
] as const satisfies readonly PondPrivateReadAdmissionCheck[]);

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

const wellFormedPrincipalRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("principal:") &&
  value.length > "principal:".length;

const safeNonNegativeInteger = (value: unknown): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0;

// The activation record, re-validated structurally: kind, version,
// explicit activation basis, fixed capability, the scope and non-grant
// postures, and session-facing metadata well-formedness. Identity-chain
// currency and freshness are NOT derived here — that is the D-P10
// composition's exclusive job.
const validActivationStructure = (value: unknown): boolean => {
  const activation = record(value);
  const metadata = record(activation?.activationMetadata);
  return (
    activation !== null &&
    exactKeys(activation, [
      "contractVersion",
      "kind",
      "principalRef",
      "activationBasis",
      "activatedCapability",
      "activationMetadata",
      "effectiveCapabilityScopePosture",
      "activationScopePosture",
      "revocabilityPosture",
      "trustedPolicyAttributionPosture",
      "grantSufficiencyPosture",
      "identityChainPosture",
      "collaborativeReadPosture",
      "memoryLaneAuthorityPosture",
      "authorityPosture",
      "authority",
    ]) &&
    activation.contractVersion === "pond-private-read-activation-d-p10" &&
    activation.kind === "pond-private-read-activation" &&
    wellFormedPrincipalRef(activation.principalRef) &&
    activation.activationBasis === "receiver_explicit_activation_not_inferred" &&
    activation.activatedCapability ===
      "receiver_private_read_of_own_structural_records" &&
    metadata !== null &&
    exactKeys(metadata, [
      "activated_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadata.activated_at_epoch_ms) &&
    metadata.freshness_basis === "activation_event_time_only" &&
    metadata.currentness_posture ===
      "not_established_consumer_must_evaluate" &&
    activation.effectiveCapabilityScopePosture ===
      "read_only_single_principal_own_structural_records_no_write_no_send_no_sign" &&
    activation.activationScopePosture ===
      "session_scoped_receiver_restart_ends_activation" &&
    activation.revocabilityPosture ===
      "activation_revocable_by_receiver_retraction" &&
    activation.trustedPolicyAttributionPosture ===
      "activation_attributable_to_receiver_trusted_runtime_policy_no_grant" &&
    activation.grantSufficiencyPosture === "activation_requires_no_grant" &&
    activation.identityChainPosture ===
      "activation_requires_current_verified_principal_identity_chain" &&
    activation.collaborativeReadPosture ===
      "not_included_single_principal_reads_only" &&
    activation.memoryLaneAuthorityPosture ===
      "activation_authorizes_no_memory_lane_crossing_or_release" &&
    activation.authorityPosture ===
      "activation_grants_no_authority_beyond_activated_read_scope" &&
    activation.authority === "none" &&
    !hasForbiddenKey(activation, POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS)
  );
};

const validReadAdmissionRecord = (value: unknown): boolean => {
  const admission = record(value);
  if (admission === null) return false;
  if (
    !exactKeys(admission, [
      "contractVersion",
      "kind",
      "principalRef",
      "readClass",
      "readTargetRefs",
      "readBasis",
      "activationBindingPosture",
      "inspectionPosture",
      "readScopePosture",
      "truthPosture",
      "grantSufficiencyPosture",
      "laneExclusionPosture",
      "revocabilityPosture",
      "authority",
    ])
  )
    return false;
  if (
    admission.contractVersion !== "pond-private-read-admission-d-p10" ||
    admission.kind !== "pond-private-read-admission" ||
    !wellFormedPrincipalRef(admission.principalRef)
  )
    return false;
  if (
    ![
      "principal_structural_record_read",
      "lane_content_read",
      "authority_record_read",
      "credential_record_read",
      "cross_principal_record_read",
    ].includes(String(admission.readClass))
  )
    return false;
  const targets = admission.readTargetRefs;
  if (
    !Array.isArray(targets) ||
    targets.length === 0 ||
    !targets.every(
      (target) =>
        typeof target === "string" &&
        (POND_STAGE_DP10_PRIVATE_READ_TARGET_REFS as readonly string[]).includes(target),
    )
  )
    return false;
  if (
    ![
      "receiver_requested_own_record_read",
      "inferred_from_activation",
      "lane_content_read_requested",
      "authority_record_read_requested",
      "credential_record_read_requested",
      "cross_principal_record_read_requested",
    ].includes(String(admission.readBasis))
  )
    return false;
  return (
    admission.activationBindingPosture ===
      "read_admitted_only_within_session_scoped_activation" &&
    admission.inspectionPosture ===
      "receiver_upstream_assessors_recomputed_at_composition" &&
    admission.readScopePosture ===
      "single_principal_own_structural_records_only" &&
    admission.truthPosture ===
      "structural_presence_only_no_current_truth_claim" &&
    admission.grantSufficiencyPosture ===
      "read_requires_no_grant_receiver_trusted_policy_scope" &&
    admission.laneExclusionPosture ===
      "admission_excludes_memory_narrative_transcript_lanes" &&
    [
      "not_established",
      "read_revocable_by_activation_retraction",
    ].includes(String(admission.revocabilityPosture)) &&
    admission.authority === "none" &&
    !hasForbiddenKey(admission, POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS)
  );
};

const admissionAssessment = (
  reason: PondPrivateReadAdmissionAssessment["reason"],
  admissionRecordVersion: PondPrivateReadAdmissionAssessment["admissionRecordVersion"],
  admissionSessionScopePosture: PondPrivateReadAdmissionAssessment["admissionSessionScopePosture"],
  admittedTargetRefs: readonly string[],
  satisfiedChecks: readonly PondPrivateReadAdmissionCheck[],
  unsatisfiedChecks: readonly PondPrivateReadAdmissionCheck[],
): PondPrivateReadAdmissionAssessment => {
  const admitted = reason === "all_read_admission_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-private-read-admission-d-p10",
    admissionRecordVersion,
    assessmentKind: "deterministic_supplied_private_read_admission",
    readAdmissionState: admitted
      ? "fixture_structural_structural_record_read_admitted"
      : "not_admitted",
    reason,
    admittedTargetRefs: Object.freeze([...admittedTargetRefs]),
    admissionSessionScopePosture,
    effectiveReadScopePosture: "single_principal_own_structural_records_only",
    readTruthPosture: "structural_presence_only_no_current_truth_claim",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The admitted read is non-grant receiver trusted-policy scope only:
    // it never becomes a grant, a credential admission, an
    // authentication, memory admission, a current-truth claim, or
    // authority. The frozen D-P0…D-P9 `privateReadsActivated: false`
    // literal stays the only carrier of that name.
    readEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

const allAdmissionChecks = admissionChecks;

const admittedTargetRefsOf = (
  targets: readonly string[],
  inScope: boolean,
): readonly string[] => (inScope ? targets : []);

export function assessPondPrivateReadAdmission(
  input: PondPrivateReadAdmissionInput,
): PondPrivateReadAdmissionAssessment {
  if (!validReadAdmissionRecord(input.readAdmissionRecord))
    return admissionAssessment(
      "admission_record_invalid",
      "invalid",
      "not_established",
      [],
      [],
      allAdmissionChecks,
    );
  if (!validActivationStructure(input.activationRecord))
    return admissionAssessment(
      "activation_record_invalid",
      "pond-private-read-admission-d-p10",
      "not_established",
      [],
      [],
      allAdmissionChecks,
    );
  const admission = input.readAdmissionRecord as Record<string, unknown>;
  const activation = input.activationRecord as Record<string, unknown>;
  const targets = (admission.readTargetRefs as readonly unknown[]).map(
    (target) => String(target),
  );

  // The read is admitted only inside the session-scoped activation: the
  // activation must name the same principal, carry the restart-ending
  // session posture, and every target must sit inside the literal table.
  const targetsInScope =
    activation.principalRef === admission.principalRef &&
    activation.activationScopePosture ===
      "session_scoped_receiver_restart_ends_activation" &&
    targets.every(
      (target) =>
        (POND_STAGE_DP10_PRIVATE_READ_TARGET_REFS as readonly string[]).includes(
          target,
        ),
    );

  const values = [
    wellFormedPrincipalRef(admission.principalRef),
    wellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
      admission.principalRef === input.receiverHeldPrincipalRef,
    admission.readBasis === "receiver_requested_own_record_read",
    admission.readClass === "principal_structural_record_read",
    targetsInScope,
    admission.laneExclusionPosture ===
      "admission_excludes_memory_narrative_transcript_lanes" &&
      admission.truthPosture ===
        "structural_presence_only_no_current_truth_claim",
    admission.grantSufficiencyPosture ===
      "read_requires_no_grant_receiver_trusted_policy_scope" &&
      admission.revocabilityPosture ===
        "read_revocable_by_activation_retraction",
  ];
  const satisfied = admissionChecks.filter((_, index) => values[index] === true);
  const unsatisfied = admissionChecks.filter((_, index) => values[index] !== true);
  const admitted = unsatisfied.length === 0;
  return admissionAssessment(
    admitted
      ? "all_read_admission_checks_satisfied"
      : "receiver_read_admission_proof_incomplete",
    "pond-private-read-admission-d-p10",
    "session_scoped_receiver_restart_ends_activation",
    admittedTargetRefsOf(targets, admitted),
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The admission is explicit,
// session-scoped, non-grant, and never becomes a content read, a
// credential, an authentication, memory admission, or authority.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP10Invariant_AdmissionChecksExact = Assert<
  Equal<
    PondPrivateReadAdmissionCheck,
    | "principal_ref_well_formed"
    | "read_admission_bound_to_receiver_held_principal"
    | "read_basis_explicitly_receiver_owned_not_inferred"
    | "read_class_structural_records_only"
    | "read_targets_within_activated_session_scope"
    | "read_admission_excludes_memory_and_lane_content"
    | "read_admission_requires_no_grant_and_stays_revocable"
  >
>;
export type PondStageDP10Invariant_AdmissionTargetTableExact = Assert<
  Equal<
    PondPrivateReadTargetRef,
    (typeof POND_STAGE_DP10_PRIVATE_READ_TARGET_REFS)[number]
  >
>;
export type PondStageDP10Invariant_AdmissionStatesExact = Assert<
  Equal<
    PondPrivateReadAdmissionAssessment["readAdmissionState"],
    "not_admitted" | "fixture_structural_structural_record_read_admitted"
  >
>;
export type PondStageDP10Invariant_AdmissionReasonsExact = Assert<
  Equal<
    PondPrivateReadAdmissionAssessment["reason"],
    | "admission_record_invalid"
    | "activation_record_invalid"
    | "receiver_read_admission_proof_incomplete"
    | "all_read_admission_checks_satisfied"
  >
>;
export type PondStageDP10Invariant_AdmissionNeverBecomesGrantContentOrAuthority =
  Assert<
    Equal<
      [
        PondPrivateReadAdmissionAssessment["readEstablishesGrant"],
        PondPrivateReadAdmissionAssessment["credentialAdmitted"],
        PondPrivateReadAdmissionAssessment["authenticationPerformed"],
        PondPrivateReadAdmissionAssessment["principalIdAcceptedAsAuthorization"],
        PondPrivateReadAdmissionAssessment["personalMemoryContentAdmitted"],
        PondPrivateReadAdmissionAssessment["currentTruthAdmitted"],
        PondPrivateReadAdmissionAssessment["runtimeActivationPosture"],
        PondPrivateReadAdmissionAssessment["authority"],
      ],
      [
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
export type PondStageDP10Invariant_NoForbiddenAdmissionRecordKeys = Assert<
  HasAnyKey<PondPrivateReadAdmissionRecord, (typeof POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP10Invariant_NoForbiddenAdmissionAssessmentKeys = Assert<
  HasAnyKey<PondPrivateReadAdmissionAssessment, (typeof POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP10Invariant_AdmissionBasisVocabularyExact = Assert<
  Equal<
    PondPrivateReadBasis,
    | "receiver_requested_own_record_read"
    | "inferred_from_activation"
    | "lane_content_read_requested"
    | "authority_record_read_requested"
    | "credential_record_read_requested"
    | "cross_principal_record_read_requested"
  >
>;
export type PondStageDP10Invariant_ActivationCheckVocabularyReusedExact = Assert<
  Equal<
    PondPrivateReadActivationCheck,
    | "principal_ref_well_formed"
    | "activation_bound_to_receiver_held_principal"
    | "activation_basis_explicitly_receiver_owned_not_inferred_from_readiness"
    | "identity_chain_structurally_ready_and_current"
    | "activation_session_scoped_fresh_and_restart_expiring"
    | "activation_requires_no_grant_trusted_policy_attributed_and_stays_revocable"
    | "activation_excludes_memory_lanes_and_multi_principal_scope"
  >
>;
export type PondStageDP10Invariant_ActivationBasisVocabularyIsNonEmpty = Assert<
  PondPrivateReadActivationCheck extends never ? false : true
>;