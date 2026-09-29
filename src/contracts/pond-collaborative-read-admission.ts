// Stage D-P14 collaborative structural-read admission.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture: the
// capability-authority boundary makes every read a capability
// (Invariant 1: can_do(X) does not imply may_do(X)), and admission of a
// read inside a collaborative activation is an authority decision bounded
// by the activated scope — not a consequence of the gate completing
// (evidence-activation L49-55). Scope laws 1/6/7 hold as postures
// ("Memory never grants permission", "Personal state is private by
// default", "Release is explicit"): an admitted collaborative read never
// crosses either principal's memory or narrative lanes, never reads
// authority or credential records, never reads a private-state lane, and
// never admits content. The derived-evidence current-truth requirement is
// not met by session-carried structural records, so the truth posture is
// honest: structural_presence_only_no_current_truth_claim.
// Community-agent-fabric L449-451: a consequence-bearing collaboration is
// a different boundary and stays outside this cut. L205: the 13-label
// target table below is a receiver-recorded app-side decision — it names
// NO authority, carries NO routing or capability law, and its law
// silence is deliberate (the D-P13 mode-routing law-silence posture).
//
// Admission re-validates the collaborative activation record
// structurally — version, kind, explicit basis, capability, dual
// principal binding, pairwise distinctness, scope postures — and binds
// the read inside the session-scoped activation without re-deriving
// identity-chain currency, which is the D-P14 gate's exclusive job
// (D-P9/D-P10 layered-partiality precedent). Counterpart labels live only
// in the 4 receiver-recorded `counterpart-record:` classes — no
// counterpart D-P9 labels exist because the counterpart honestly carries
// no issuance and no mapping. No assessment here carries any frozen
// D-P0…D-P13 state name — the frozen tuples stay the only carriers of
// those names; this admission's honesty lives in its state vocabulary.

import type {
  PondCounterpartJoinDeclarationAssessment,
} from "./pond-collaborative-read-counterpart-declaration.js";
import {
  assessPondCounterpartJoinDeclaration,
} from "./pond-collaborative-read-counterpart-declaration.ts";
import {
  POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS,
} from "./pond-collaborative-read-activation.ts";

// The one read class this cut admits, plus the read shapes it exists to
// refuse. Lane content, authority records, credential records, and
// counterpart private-state reads are valid-but-unsatisfied: claiming any
// of them is exactly what admission exists to refuse.
export type PondCollaborativeReadClass =
  | "principal_structural_record_read"
  | "lane_content_read"
  | "authority_record_read"
  | "credential_record_read"
  | "counterpart_private_state_read";

// The 13 read targets within the activated session scope: the receiver's
// own principal-structural records (the D-P10 six classes plus the D-P6
// observation class the D-P10 chain predated), the counterpart's four
// structural classes, and this cut's own two records. Per-principal
// scoping is carried by the prefix — `receiver-record:` labels are
// audience-bound to the receiver, `counterpart-record:` labels to the
// counterpart, `collaborative-record:` labels to the declaring pair
// jointly. The table is fail-closed: a target outside it is a breach.
// There are NO counterpart D-P9 labels: the counterpart carries no
// issuance and no mapping, honestly.
export type PondCollaborativeReadTargetRef =
  | "receiver-record:pond-local-principal-binding-establishment-d-p5"
  | "receiver-record:pond-local-principal-authentication-observation-d-p6"
  | "receiver-record:pond-local-authentication-mechanic-d-p8"
  | "receiver-record:pond-local-principal-id-issuance-d-p9"
  | "receiver-record:pond-erc8004-identity-mapping-d-p9"
  | "receiver-record:pond-principal-identity-readiness-composition-d-p9"
  | "receiver-record:pond-private-read-activation-d-p10"
  | "counterpart-record:pond-local-principal-binding-establishment-d-p5"
  | "counterpart-record:pond-local-principal-authentication-observation-d-p6"
  | "counterpart-record:pond-local-authentication-mechanic-d-p8"
  | "counterpart-record:pond-collaborative-read-counterpart-declaration-d-p14"
  | "collaborative-record:pond-collaborative-read-activation-d-p14"
  | "collaborative-record:pond-collaborative-read-admission-d-p14";

export const POND_STAGE_DP14_COLLABORATIVE_READ_TARGET_REFS = Object.freeze([
  "receiver-record:pond-local-principal-binding-establishment-d-p5",
  "receiver-record:pond-local-principal-authentication-observation-d-p6",
  "receiver-record:pond-local-authentication-mechanic-d-p8",
  "receiver-record:pond-local-principal-id-issuance-d-p9",
  "receiver-record:pond-erc8004-identity-mapping-d-p9",
  "receiver-record:pond-principal-identity-readiness-composition-d-p9",
  "receiver-record:pond-private-read-activation-d-p10",
  "counterpart-record:pond-local-principal-binding-establishment-d-p5",
  "counterpart-record:pond-local-principal-authentication-observation-d-p6",
  "counterpart-record:pond-local-authentication-mechanic-d-p8",
  "counterpart-record:pond-collaborative-read-counterpart-declaration-d-p14",
  "collaborative-record:pond-collaborative-read-activation-d-p14",
  "collaborative-record:pond-collaborative-read-admission-d-p14",
] as const satisfies readonly PondCollaborativeReadTargetRef[]);

export type PondCollaborativeReadBasis =
  | "receiver_requested_collaborative_structural_records_read"
  // Valid-but-unsatisfied fail-closed literals: a read claimed from any
  // of these bases is exactly what admission exists to refuse. The join
  // and the two single-principal activations existing does not read
  // anything on the receiver's behalf; lane, authority, credential, and
  // counterpart-private-state reads are outside the activated scope by
  // posture.
  | "inferred_from_joint_session_join"
  | "derived_from_single_principal_activations"
  | "inferred_from_chain_completion"
  | "lane_content_read_requested"
  | "authority_record_read_requested"
  | "credential_record_read_requested"
  | "counterpart_private_state_read_requested";

export interface PondCollaborativeReadAdmissionRecord {
  readonly contractVersion: "pond-collaborative-read-admission-d-p14";
  readonly kind: "pond-collaborative-read-admission";
  readonly receiverHeldPrincipalRef: string;
  readonly counterpartPrincipalRef: string;
  readonly readClass: PondCollaborativeReadClass;
  readonly readTargetRefs: readonly string[];
  readonly readBasis: PondCollaborativeReadBasis;
  readonly activationBindingPosture: "read_admitted_only_within_session_scoped_collaborative_activation";
  readonly inspectionPosture: "receiver_upstream_assessors_recomputed_by_the_d_p14_gate";
  readonly scopingPosture: "audience_bound_to_the_two_declared_principals_only";
  readonly truthPosture: "structural_presence_only_no_current_truth_claim";
  readonly grantSufficiencyPosture: "read_requires_no_grant_receiver_trusted_policy_scope";
  readonly laneExclusionPosture: "admission_excludes_memory_narrative_transcript_lanes";
  readonly counterpartScopeExclusionPosture: "counterpart_records_structural_only_no_counterpart_private_state_read";
  readonly revocabilityPosture:
    | "not_established"
    | "read_revocable_by_activation_retraction";
  readonly authority: "none";
}

// Receiver-owned admission checks. A check is satisfied only when the
// record's own proof field carries the receiver-owned literal; an
// inferred or lane-shaped read never satisfies any of them.
export type PondCollaborativeReadAdmissionCheck =
  | "read_admission_bound_to_both_declared_principals"
  | "read_basis_explicitly_receiver_owned_not_inferred"
  | "read_class_structural_records_only"
  | "read_targets_within_collaborative_activation_scope"
  | "read_admission_excludes_memory_and_lane_content"
  | "read_admission_requires_no_grant_and_stays_revocable"
  | "read_admission_inspection_is_the_gate_recomputation";

export interface PondCollaborativeReadAdmissionInput {
  readonly readAdmissionRecord: unknown;
  readonly collaborativeActivationRecord: unknown;
  readonly counterpartJoinDeclarationRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly counterpartPrincipalRef: unknown;
}

export interface PondCollaborativeReadAdmissionAssessment {
  readonly contractVersion: "pond-collaborative-read-admission-d-p14";
  readonly admissionRecordVersion:
    | "pond-collaborative-read-admission-d-p14"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_collaborative_read_admission";
  readonly collaborativeReadAdmissionState:
    | "not_admitted"
    | "fixture_structural_collaborative_structural_record_read_admitted";
  readonly reason:
    | "admission_record_invalid"
    | "collaborative_activation_record_invalid"
    | "counterpart_join_binding_not_established"
    | "receiver_read_admission_proof_incomplete"
    | "all_collaborative_read_admission_checks_satisfied";
  readonly admittedTargetRefs: readonly string[];
  readonly mappedCounterpartJoin: {
    readonly joinDeclarationState: PondCounterpartJoinDeclarationAssessment["joinDeclarationState"];
    readonly reason: PondCounterpartJoinDeclarationAssessment["reason"];
  };
  readonly admissionSessionScopePosture:
    | "not_established"
    | "session_scoped_receiver_restart_ends_activation";
  readonly effectiveReadScopePosture: "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory";
  readonly readTruthPosture: "structural_presence_only_no_current_truth_claim";
  readonly satisfiedChecks: readonly PondCollaborativeReadAdmissionCheck[];
  readonly unsatisfiedChecks: readonly PondCollaborativeReadAdmissionCheck[];
  readonly collaborativeReadEstablishesGrant: false;
  readonly credentialAdmitted: false;
  readonly authenticationPerformed: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly counterpartMemoryContentAdmitted: false;
  readonly counterpartConsentEstablished: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const admissionChecks = Object.freeze([
  "read_admission_bound_to_both_declared_principals",
  "read_basis_explicitly_receiver_owned_not_inferred",
  "read_class_structural_records_only",
  "read_targets_within_collaborative_activation_scope",
  "read_admission_excludes_memory_and_lane_content",
  "read_admission_requires_no_grant_and_stays_revocable",
  "read_admission_inspection_is_the_gate_recomputation",
] as const satisfies readonly PondCollaborativeReadAdmissionCheck[]);

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

// The collaborative activation record, re-validated structurally here:
// version, kind, the explicit receiver-owned basis, the fixed capability,
// the dual principal binding pairwise distinct against the admission's
// own refs, the scope and non-grant postures, and session-facing metadata
// well-formedness. Identity-chain currency is NOT derived here — that is
// the D-P14 gate's exclusive job.
const validCollaborativeActivationStructure = (
  value: unknown,
  receiverHeldPrincipalRef: string,
  counterpartPrincipalRef: string,
): boolean => {
  const activation = record(value);
  const metadata = record(activation?.activationMetadata);
  return (
    activation !== null &&
    exactKeys(activation, [
      "contractVersion",
      "kind",
      "receiverHeldPrincipalRef",
      "counterpartPrincipalRef",
      "activationBasis",
      "activatedCapability",
      "activationMetadata",
      "effectiveCapabilityScopePosture",
      "multiPrincipalReadScopePosture",
      "sessionScopePosture",
      "revocabilityPosture",
      "trustedPolicyAttributionPosture",
      "grantSufficiencyPosture",
      "counterpartIdentityPosture",
      "consentPosture",
      "memoryLaneExclusionPosture",
      "authority",
    ]) &&
    activation.contractVersion === "pond-collaborative-read-activation-d-p14" &&
    activation.kind === "pond-collaborative-read-activation" &&
    activation.receiverHeldPrincipalRef === receiverHeldPrincipalRef &&
    activation.counterpartPrincipalRef === counterpartPrincipalRef &&
    activation.activationBasis ===
      "receiver_explicit_collaborative_activation_not_inferred" &&
    activation.activatedCapability ===
      "collaborative_structural_records_read_of_both_declared_principals" &&
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
      "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory" &&
    activation.multiPrincipalReadScopePosture ===
      "session_scoped_collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory" &&
    activation.sessionScopePosture ===
      "session_scoped_receiver_restart_ends_activation" &&
    activation.revocabilityPosture ===
      "collaborative_activation_revocable_by_receiver_retraction" &&
    activation.trustedPolicyAttributionPosture ===
      "activation_attributable_to_receiver_trusted_runtime_policy_no_grant" &&
    activation.grantSufficiencyPosture === "activation_requires_no_grant" &&
    activation.counterpartIdentityPosture ===
      "counterpart_ref_pre_existing_receiver_recorded_never_issued_no_second_identity" &&
    activation.consentPosture ===
      "receiver_recorded_session_join_only_no_counterpart_consent_claim" &&
    activation.memoryLaneExclusionPosture ===
      "activation_excludes_memory_narrative_transcript_lanes" &&
    activation.authority === "none" &&
    !hasForbiddenKey(
      activation,
      POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS,
    )
  );
};

const validReadAdmissionRecord = (value: unknown): boolean => {
  const admission = record(value);
  if (admission === null) return false;
  if (
    !exactKeys(admission, [
      "contractVersion",
      "kind",
      "receiverHeldPrincipalRef",
      "counterpartPrincipalRef",
      "readClass",
      "readTargetRefs",
      "readBasis",
      "activationBindingPosture",
      "inspectionPosture",
      "scopingPosture",
      "truthPosture",
      "grantSufficiencyPosture",
      "laneExclusionPosture",
      "counterpartScopeExclusionPosture",
      "revocabilityPosture",
      "authority",
    ])
  )
    return false;
  if (
    admission.contractVersion !== "pond-collaborative-read-admission-d-p14" ||
    admission.kind !== "pond-collaborative-read-admission" ||
    !wellFormedPrincipalRef(admission.receiverHeldPrincipalRef) ||
    !wellFormedPrincipalRef(admission.counterpartPrincipalRef) ||
    String(admission.receiverHeldPrincipalRef) ===
      String(admission.counterpartPrincipalRef)
  )
    return false;
  if (
    ![
      "principal_structural_record_read",
      "lane_content_read",
      "authority_record_read",
      "credential_record_read",
      "counterpart_private_state_read",
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
        (
          POND_STAGE_DP14_COLLABORATIVE_READ_TARGET_REFS as readonly string[]
        ).includes(target),
    )
  )
    return false;
  if (
    ![
      "receiver_requested_collaborative_structural_records_read",
      "inferred_from_joint_session_join",
      "derived_from_single_principal_activations",
      "inferred_from_chain_completion",
      "lane_content_read_requested",
      "authority_record_read_requested",
      "credential_record_read_requested",
      "counterpart_private_state_read_requested",
    ].includes(String(admission.readBasis))
  )
    return false;
  return (
    admission.activationBindingPosture ===
      "read_admitted_only_within_session_scoped_collaborative_activation" &&
    admission.inspectionPosture ===
      "receiver_upstream_assessors_recomputed_by_the_d_p14_gate" &&
    admission.scopingPosture ===
      "audience_bound_to_the_two_declared_principals_only" &&
    admission.truthPosture ===
      "structural_presence_only_no_current_truth_claim" &&
    admission.grantSufficiencyPosture ===
      "read_requires_no_grant_receiver_trusted_policy_scope" &&
    admission.laneExclusionPosture ===
      "admission_excludes_memory_narrative_transcript_lanes" &&
    admission.counterpartScopeExclusionPosture ===
      "counterpart_records_structural_only_no_counterpart_private_state_read" &&
    [
      "not_established",
      "read_revocable_by_activation_retraction",
    ].includes(String(admission.revocabilityPosture)) &&
    admission.authority === "none" &&
    !hasForbiddenKey(
      admission,
      POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS,
    )
  );
};

const admissionAssessment = (
  reason: PondCollaborativeReadAdmissionAssessment["reason"],
  admissionRecordVersion: PondCollaborativeReadAdmissionAssessment["admissionRecordVersion"],
  mappedCounterpartJoin: PondCollaborativeReadAdmissionAssessment["mappedCounterpartJoin"],
  admissionSessionScopePosture: PondCollaborativeReadAdmissionAssessment["admissionSessionScopePosture"],
  admittedTargetRefs: readonly string[],
  satisfiedChecks: readonly PondCollaborativeReadAdmissionCheck[],
  unsatisfiedChecks: readonly PondCollaborativeReadAdmissionCheck[],
): PondCollaborativeReadAdmissionAssessment => {
  const admitted =
    reason === "all_collaborative_read_admission_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-collaborative-read-admission-d-p14",
    admissionRecordVersion,
    assessmentKind: "deterministic_supplied_collaborative_read_admission",
    collaborativeReadAdmissionState: admitted
      ? "fixture_structural_collaborative_structural_record_read_admitted"
      : "not_admitted",
    reason,
    admittedTargetRefs: Object.freeze([
      ...(admitted ? admittedTargetRefs : []),
    ]),
    mappedCounterpartJoin,
    admissionSessionScopePosture,
    effectiveReadScopePosture:
      "collaborative_structural_records_read_only_no_write_no_send_no_sign_no_memory",
    readTruthPosture: "structural_presence_only_no_current_truth_claim",
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The admitted collaborative read is non-grant receiver
    // trusted-policy scope only: it never becomes a grant, a credential
    // admission, an authentication, an authorization by PrincipalId,
    // either principal's memory content, an opened counterpart consent, a
    // current-truth claim, or authority.
    collaborativeReadEstablishesGrant: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    counterpartMemoryContentAdmitted: false,
    counterpartConsentEstablished: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

const allAdmissionChecks = admissionChecks;

const neverAdmittedJoinEcho = Object.freeze({
  joinDeclarationState: "join_not_established",
  reason: "counterpart_declaration_record_invalid",
}) as PondCollaborativeReadAdmissionAssessment["mappedCounterpartJoin"];

export function assessPondCollaborativeReadAdmission(
  input: PondCollaborativeReadAdmissionInput,
): PondCollaborativeReadAdmissionAssessment {
  const receiverHeldPrincipalRef = input.receiverHeldPrincipalRef;
  const counterpartPrincipalRef = input.counterpartPrincipalRef;
  const refsWellFormedAndDistinct =
    wellFormedPrincipalRef(receiverHeldPrincipalRef) &&
    wellFormedPrincipalRef(counterpartPrincipalRef) &&
    String(receiverHeldPrincipalRef) !== String(counterpartPrincipalRef);

  if (!validReadAdmissionRecord(input.readAdmissionRecord))
    return admissionAssessment(
      "admission_record_invalid",
      "invalid",
      neverAdmittedJoinEcho,
      "not_established",
      [],
      [],
      allAdmissionChecks,
    );
  if (
    !refsWellFormedAndDistinct ||
    !validCollaborativeActivationStructure(
      input.collaborativeActivationRecord,
      receiverHeldPrincipalRef as string,
      counterpartPrincipalRef as string,
    )
  )
    return admissionAssessment(
      "collaborative_activation_record_invalid",
      "pond-collaborative-read-admission-d-p14",
      neverAdmittedJoinEcho,
      "not_established",
      [],
      [],
      allAdmissionChecks,
    );

  // The join is re-read through its own ceremony — bound reads need a
  // standing join. The chains are NOT re-derived here: that is the
  // D-P14 gate's exclusive job.
  const jointAssessment = assessPondCounterpartJoinDeclaration({
    counterpartDeclarationRecord: input.counterpartJoinDeclarationRecord,
    receiverHeldPrincipalRef: receiverHeldPrincipalRef,
  });
  const joinEcho = Object.freeze({
    joinDeclarationState: jointAssessment.joinDeclarationState,
    reason: jointAssessment.reason,
  });
  if (
    jointAssessment.joinDeclarationState !==
    "fixture_structural_receiver_declared_counterpart_join"
  )
    return admissionAssessment(
      "counterpart_join_binding_not_established",
      "pond-collaborative-read-admission-d-p14",
      joinEcho,
      "not_established",
      [],
      [],
      allAdmissionChecks,
    );

  const admission = input.readAdmissionRecord as Record<string, unknown>;
  const targets = (admission.readTargetRefs as readonly unknown[]).map(
    (target) => String(target),
  );

  // The read is admitted only inside the session-scoped collaborative
  // activation: the activation must name both declared principals, carry
  // the restart-ending session posture, and every target must sit inside
  // the 13-label table.
  const targetsInScope =
    activationBindingValid(admission, input.collaborativeActivationRecord) &&
    targets.every(
      (target) =>
        (
          POND_STAGE_DP14_COLLABORATIVE_READ_TARGET_REFS as readonly string[]
        ).includes(target),
    );

  const values = [
    // read_admission_bound_to_both_declared_principals
    admission.receiverHeldPrincipalRef === receiverHeldPrincipalRef &&
      admission.counterpartPrincipalRef === counterpartPrincipalRef,
    // read_basis_explicitly_receiver_owned_not_inferred
    admission.readBasis ===
      "receiver_requested_collaborative_structural_records_read",
    // read_class_structural_records_only
    admission.readClass === "principal_structural_record_read",
    // read_targets_within_collaborative_activation_scope
    targetsInScope,
    // read_admission_excludes_memory_and_lane_content
    admission.laneExclusionPosture ===
      "admission_excludes_memory_narrative_transcript_lanes" &&
      admission.counterpartScopeExclusionPosture ===
        "counterpart_records_structural_only_no_counterpart_private_state_read" &&
      admission.truthPosture ===
        "structural_presence_only_no_current_truth_claim",
    // read_admission_requires_no_grant_and_stays_revocable
    admission.grantSufficiencyPosture ===
      "read_requires_no_grant_receiver_trusted_policy_scope" &&
      admission.revocabilityPosture ===
        "read_revocable_by_activation_retraction",
    // read_admission_inspection_is_the_gate_recomputation
    admission.inspectionPosture ===
      "receiver_upstream_assessors_recomputed_by_the_d_p14_gate",
  ];
  const satisfied = admissionChecks.filter((_, index) => values[index] === true);
  const unsatisfied = admissionChecks.filter((_, index) => values[index] !== true);
  const admitted = unsatisfied.length === 0;
  return admissionAssessment(
    admitted
      ? "all_collaborative_read_admission_checks_satisfied"
      : "receiver_read_admission_proof_incomplete",
    "pond-collaborative-read-admission-d-p14",
    joinEcho,
    "session_scoped_receiver_restart_ends_activation",
    targets,
    satisfied,
    unsatisfied,
  );
}

// The activation binding the admission depends on: same dual refs, the
// restart-ending session posture, and the session-facing metadata
// well-formedness. The gate's activation record carries the activated
// capability; the admission carries none of it forward.
const activationBindingValid = (
  admission: Record<string, unknown>,
  collaborativeActivationRecord: unknown,
): boolean => {
  const activation = record(collaborativeActivationRecord);
  if (activation === null) return false;
  const metadata = record(activation.activationMetadata);
  return (
    activation.receiverHeldPrincipalRef ===
      admission.receiverHeldPrincipalRef &&
    activation.counterpartPrincipalRef ===
      admission.counterpartPrincipalRef &&
    activation.sessionScopePosture ===
      "session_scoped_receiver_restart_ends_activation" &&
    metadata !== null &&
    safeNonNegativeInteger(metadata.activated_at_epoch_ms)
  );
};

// Compile-time invariants for this cut. The admission is explicit,
// dual-bound, session-scoped, non-grant, consent-free, memory-free, and
// authority-none, and its target table is pairwise distinct with its
// three prefixes.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP14Invariant_AdmissionChecksExact = Assert<
  Equal<
    PondCollaborativeReadAdmissionCheck,
    | "read_admission_bound_to_both_declared_principals"
    | "read_basis_explicitly_receiver_owned_not_inferred"
    | "read_class_structural_records_only"
    | "read_targets_within_collaborative_activation_scope"
    | "read_admission_excludes_memory_and_lane_content"
    | "read_admission_requires_no_grant_and_stays_revocable"
    | "read_admission_inspection_is_the_gate_recomputation"
  >
>;
export type PondStageDP14Invariant_AdmissionTargetTableExact = Assert<
  Equal<
    PondCollaborativeReadTargetRef,
    (typeof POND_STAGE_DP14_COLLABORATIVE_READ_TARGET_REFS)[number]
  >
>;
export type PondStageDP14Invariant_AdmissionStatesExact = Assert<
  Equal<
    PondCollaborativeReadAdmissionAssessment["collaborativeReadAdmissionState"],
    | "not_admitted"
    | "fixture_structural_collaborative_structural_record_read_admitted"
  >
>;
export type PondStageDP14Invariant_AdmissionReasonsExact = Assert<
  Equal<
    PondCollaborativeReadAdmissionAssessment["reason"],
    | "admission_record_invalid"
    | "collaborative_activation_record_invalid"
    | "counterpart_join_binding_not_established"
    | "receiver_read_admission_proof_incomplete"
    | "all_collaborative_read_admission_checks_satisfied"
  >
>;
export type PondStageDP14Invariant_AdmissionNeverBecomesGrantContentOrAuthority =
  Assert<
    Equal<
      [
        PondCollaborativeReadAdmissionAssessment["collaborativeReadEstablishesGrant"],
        PondCollaborativeReadAdmissionAssessment["credentialAdmitted"],
        PondCollaborativeReadAdmissionAssessment["authenticationPerformed"],
        PondCollaborativeReadAdmissionAssessment["principalIdAcceptedAsAuthorization"],
        PondCollaborativeReadAdmissionAssessment["personalMemoryContentAdmitted"],
        PondCollaborativeReadAdmissionAssessment["counterpartMemoryContentAdmitted"],
        PondCollaborativeReadAdmissionAssessment["counterpartConsentEstablished"],
        PondCollaborativeReadAdmissionAssessment["currentTruthAdmitted"],
        PondCollaborativeReadAdmissionAssessment["runtimeActivationPosture"],
        PondCollaborativeReadAdmissionAssessment["authority"],
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
        "not_included",
        "none",
      ]
    >
  >;
export type PondStageDP14Invariant_AdmissionBasisVocabularyExact = Assert<
  Equal<
    PondCollaborativeReadBasis,
    | "receiver_requested_collaborative_structural_records_read"
    | "inferred_from_joint_session_join"
    | "derived_from_single_principal_activations"
    | "inferred_from_chain_completion"
    | "lane_content_read_requested"
    | "authority_record_read_requested"
    | "credential_record_read_requested"
    | "counterpart_private_state_read_requested"
  >
>;
export type PondStageDP14Invariant_NoForbiddenAdmissionRecordKeys = Assert<
  HasAnyKey<
    PondCollaborativeReadAdmissionRecord,
    (typeof POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS)[number]
  > extends false
    ? true
    : false
>;
export type PondStageDP14Invariant_NoForbiddenAdmissionAssessmentKeys = Assert<
  HasAnyKey<
    PondCollaborativeReadAdmissionAssessment,
    (typeof POND_STAGE_DP14_FORBIDDEN_COLLABORATIVE_READ_KEYS)[number]
  > extends false
    ? true
    : false
>;