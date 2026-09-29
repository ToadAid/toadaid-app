// Stage D-P12 declared agent operational mode.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture. This cut
// establishes the receiver-recorded declared operational-profile
// vocabulary — TRADING / HELPER / BUILDER — as evidence-only
// declarations. Law anchors:
//
// - governed-agent-forge.md L150: "A specialist must not infer its own
//   permissions from its purpose." — the five refused inference bases
//   below are type-safe literal vocabulary whose entire purpose is to be
//   refused by this classifier.
// - governed-agent-forge.md L292-303, L297-305: a generated specialist
//   begins inert; passing tests does not activate; a specialist may
//   recommend its own activation but cannot authorize it.
// - agent-identity-and-specialist-admission-contract.md L110-114
//   "Declared capability is not granted capability"; L153 "Wallet/
//   signing, payments, trading, public publishing, social posting,
//   deployment, credential use, and destructive mutation remain stricter
//   specialist lanes. Admission alone never activates them."
// - trusted-channel-separation-contract.md L87-100: an operator request
//   may trigger a governed authority decision; the request is not itself
//   the grant — inference from an operator prompt is refused, not a
//   recording channel.
//
// A declared profile is a receiver-recorded fact about which operational
// profile the receiver explicitly recorded for one agent. It establishes
// no authority, grant, capability, admission, or lane access on any
// outcome. TRADING is the profile whose very declaration carries the
// mandatory stricter-lane refusal posture — the declaration itself
// refuses, in type-safe literals, every authority a trading lane would
// need. Law is silent on a declared-profile taxonomy; every literal here
// is an app-side decision recorded in the stage document.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";

export type PondAgentDeclaredOperationalMode =
  | "TRADING"
  | "HELPER"
  | "BUILDER";

// Exactly six basis vocabulary literals. The first is the only
// satisfiable basis: the receiver recorded the profile themselves,
// explicitly. The remaining five are valid-but-unsatisfied refusal
// literals — claiming a mode from any of them is exactly what this cut
// exists to refuse (governed-agent-forge.md L150; trusted-channel-
// separation.md L87-100).
export type PondAgentDeclaredOperationalModeBasis =
  | "receiver_recorded_explicit_declared_profile"
  | "inferred_from_purpose"
  | "inferred_from_operator_prompt"
  | "inferred_from_forge_surface_provenance"
  | "model_self_selected"
  | "derived_from_skill_library_state";

export interface PondAgentDeclaredOperationalModeStricterLaneRefusalPosture {
  readonly laneAdmissionEstablished: false;
  readonly walletOrSigningAuthorityRefused: true;
  readonly tradingExecutionRefused: true;
  readonly credentialUseRefused: true;
  readonly deploymentOrDestructiveMutationRefused: true;
  readonly publicPublishingOrSocialPostingRefused: true;
}

export interface PondAgentDeclaredOperationalModeRecord {
  readonly contractVersion: "pond-agent-declared-operational-mode-d-p12";
  readonly kind: "pond-agent-declared-operational-mode-declaration";
  readonly agentRef: string;
  readonly declaredProfile: PondAgentDeclaredOperationalMode;
  readonly declarationBasis: PondAgentDeclaredOperationalModeBasis;
  readonly declarationEvent: {
    readonly declared_at_epoch_ms: number;
    readonly freshness_basis: "source_observation_time_only";
    readonly currentness_posture: "not_established_consumer_must_evaluate";
  };
  readonly stricterLaneRefusalPosture: PondAgentDeclaredOperationalModeStricterLaneRefusalPosture;
  readonly authority: "none";
}

export type PondAgentDeclaredOperationalModeCheck =
  | "declaration_record_well_formed"
  | "one_agent_one_profile_binding"
  | "declaration_basis_receiver_recorded_only"
  | "declared_profile_in_vocabulary"
  | "declaration_fresh_within_declared_maximum_age"
  | "stricter_lane_refusal_posture_held"
  | "declaration_is_evidence_only_ceiling_held";

export interface PondAgentDeclaredOperationalModeInput {
  readonly modeDeclarationRecord: unknown;
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export interface PondAgentDeclaredOperationalModeAssessment {
  readonly contractVersion: "pond-agent-declared-operational-mode-d-p12";
  readonly assessmentKind: "deterministic_supplied_declared_operational_mode";
  readonly declaredModeState:
    | "not_established"
    | "receiver_recorded_declared_mode_evidence_only";
  readonly reason:
    | "declaration_record_invalid"
    | "declared_profile_out_of_vocabulary"
    | "declaration_basis_inference_refused"
    | "declaration_not_fresh_within_declared_maximum_age"
    | "all_declared_mode_checks_satisfied";
  readonly refusedDeclarationBasis: PondAgentDeclaredOperationalModeBasis | null;
  readonly declaredProfile: PondAgentDeclaredOperationalMode | "not_recorded";
  readonly declarationFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly stricterLaneRefusalPosture:
    | PondAgentDeclaredOperationalModeStricterLaneRefusalPosture
    | null;
  readonly satisfiedChecks: readonly PondAgentDeclaredOperationalModeCheck[];
  readonly unsatisfiedChecks: readonly PondAgentDeclaredOperationalModeCheck[];
  readonly declaredProfileEstablishesAuthority: false;
  readonly declaredProfileEstablishesGrant: false;
  readonly declaredProfileEstablishesCapability: false;
  readonly declaredProfileEstablishesAdmission: false;
  readonly credentialAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const modeVocabulary = Object.freeze([
  "TRADING",
  "HELPER",
  "BUILDER",
] as const satisfies readonly PondAgentDeclaredOperationalMode[]);

const basisVocabulary = Object.freeze([
  "receiver_recorded_explicit_declared_profile",
  "inferred_from_purpose",
  "inferred_from_operator_prompt",
  "inferred_from_forge_surface_provenance",
  "model_self_selected",
  "derived_from_skill_library_state",
] as const satisfies readonly PondAgentDeclaredOperationalModeBasis[]);

const refusedBases = Object.freeze([
  "inferred_from_purpose",
  "inferred_from_operator_prompt",
  "inferred_from_forge_surface_provenance",
  "model_self_selected",
  "derived_from_skill_library_state",
] as const satisfies readonly Exclude<
  PondAgentDeclaredOperationalModeBasis,
  "receiver_recorded_explicit_declared_profile"
>[]);

const declaredModeChecks = Object.freeze([
  "declaration_record_well_formed",
  "one_agent_one_profile_binding",
  "declaration_basis_receiver_recorded_only",
  "declared_profile_in_vocabulary",
  "declaration_fresh_within_declared_maximum_age",
  "stricter_lane_refusal_posture_held",
  "declaration_is_evidence_only_ceiling_held",
] as const satisfies readonly PondAgentDeclaredOperationalModeCheck[]);

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

const wellFormedAgentRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("agent:") &&
  value.length > "agent:".length;

const safeNonNegativeInteger = (value: unknown): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0;

const stricterLaneRefusalKeys = Object.freeze([
  "laneAdmissionEstablished",
  "walletOrSigningAuthorityRefused",
  "tradingExecutionRefused",
  "credentialUseRefused",
  "deploymentOrDestructiveMutationRefused",
  "publicPublishingOrSocialPostingRefused",
] as const);

// Shape level: exact keys and boolean types only. The exact refusal
// literal values are demanded by check 6, so a value tamper is a
// held-posture refusal, never a malformed record.
const stricterLaneRefusalPostureWellShaped = (value: unknown): boolean => {
  const posture = record(value);
  return (
    posture !== null &&
    exactKeys(posture, stricterLaneRefusalKeys) &&
    stricterLaneRefusalKeys.every(
      (key) => typeof posture[key] === "boolean",
    )
  );
};

// Check-6 level: every refused-literal value exactly as the law posture
// holds it — no lane admission, every stricter-lane authority refused
// (agent-identity L153).
const stricterLaneRefusalPostureLiteralsHeld = (value: unknown): boolean => {
  const posture = record(value);
  return (
    posture !== null &&
    posture.laneAdmissionEstablished === false &&
    posture.walletOrSigningAuthorityRefused === true &&
    posture.tradingExecutionRefused === true &&
    posture.credentialUseRefused === true &&
    posture.deploymentOrDestructiveMutationRefused === true &&
    posture.publicPublishingOrSocialPostingRefused === true
  );
};

// Structural well-formedness: exact keys, the fixed kind/version,
// vocabulary membership of the record's declared fields, the
// declaration-event metadata shape (D-P2 intake metadata posture
// verbatim), and the mandatory stricter-lane refusal posture.
const validDeclarationShape = (value: unknown): boolean => {
  const declaration = record(value);
  const event = record(declaration?.declarationEvent);
  const posture = record(declaration?.stricterLaneRefusalPosture);
  return (
    declaration !== null &&
    exactKeys(declaration, [
      "contractVersion",
      "kind",
      "agentRef",
      "declaredProfile",
      "declarationBasis",
      "declarationEvent",
      "stricterLaneRefusalPosture",
      "authority",
    ]) &&
    declaration.contractVersion ===
      "pond-agent-declared-operational-mode-d-p12" &&
    declaration.kind ===
      "pond-agent-declared-operational-mode-declaration" &&
    wellFormedAgentRef(declaration.agentRef) &&
    typeof declaration.declaredProfile === "string" &&
    (basisVocabulary as readonly string[]).includes(
      String(declaration.declarationBasis),
    ) &&
    event !== null &&
    exactKeys(event, [
      "declared_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(event.declared_at_epoch_ms) &&
    event.freshness_basis === "source_observation_time_only" &&
    event.currentness_posture ===
      "not_established_consumer_must_evaluate" &&
    stricterLaneRefusalPostureWellShaped(posture) &&
    declaration.authority === "none"
  );
};

// D-P2 freshness diagnosis, reimplemented identically per cut: unknowns in
// → metadata → evaluation time → maximum age → future time → the inclusive
// fresh boundary; an invalid declaration time is an unknown diagnosis, and
// observationAgeMs is null exactly on unknown.
export function diagnoseDeclarationFreshness(
  declaredAtEpochMs: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis {
  if (!safeNonNegativeInteger(declaredAtEpochMs))
    return Object.freeze({
      state: "unknown",
      reason: "observation_metadata_missing_or_invalid",
      observationAgeMs: null,
    });
  if (
    typeof evaluatedAtEpochMs !== "number" ||
    !Number.isSafeInteger(evaluatedAtEpochMs)
  )
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
  if (declaredAtEpochMs > evaluatedAtEpochMs)
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = evaluatedAtEpochMs - declaredAtEpochMs;
  return age <= maximumAgeMs
    ? Object.freeze({
        state: "fresh",
        reason: "within_declared_maximum_age",
        observationAgeMs: age,
      })
    : Object.freeze({
        state: "stale",
        reason: "declared_maximum_age_expired",
        observationAgeMs: age,
      });
}

const declaredModeAssessment = (
  reason: PondAgentDeclaredOperationalModeAssessment["reason"],
  refusedDeclarationBasis: PondAgentDeclaredOperationalModeAssessment["refusedDeclarationBasis"],
  declaredProfileOut: PondAgentDeclaredOperationalModeAssessment["declaredProfile"],
  declarationFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  stricterLaneRefusalPostureOut: PondAgentDeclaredOperationalModeAssessment["stricterLaneRefusalPosture"],
  satisfiedChecks: readonly PondAgentDeclaredOperationalModeCheck[],
  unsatisfiedChecks: readonly PondAgentDeclaredOperationalModeCheck[],
): PondAgentDeclaredOperationalModeAssessment =>
  Object.freeze({
    contractVersion: "pond-agent-declared-operational-mode-d-p12",
    assessmentKind: "deterministic_supplied_declared_operational_mode",
    declaredModeState:
      reason === "all_declared_mode_checks_satisfied"
        ? "receiver_recorded_declared_mode_evidence_only"
        : "not_established",
    reason,
    refusedDeclarationBasis,
    declaredProfile: declaredProfileOut,
    declarationFreshnessDiagnosis,
    stricterLaneRefusalPosture: stricterLaneRefusalPostureOut,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The declared profile is evidence only: it never establishes
    // authority, a grant, a capability, or an admission — and never
    // crosses into a stricter lane (agent-identity L153).
    declaredProfileEstablishesAuthority: false,
    declaredProfileEstablishesGrant: false,
    declaredProfileEstablishesCapability: false,
    declaredProfileEstablishesAdmission: false,
    credentialAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondAgentDeclaredOperationalMode(
  input: PondAgentDeclaredOperationalModeInput,
): PondAgentDeclaredOperationalModeAssessment {
  if (!validDeclarationShape(input.modeDeclarationRecord)) {
    return declaredModeAssessment(
      "declaration_record_invalid",
      null,
      "not_recorded",
      diagnoseDeclarationFreshness(null, 0, 0),
      null,
      [],
      declaredModeChecks,
    );
  }

  const declaration = input.modeDeclarationRecord as Record<string, unknown>;
  const event = record(declaration.declarationEvent) as Record<string, unknown>;
  const postureIn = record(declaration.stricterLaneRefusalPosture) as
    unknown as PondAgentDeclaredOperationalModeStricterLaneRefusalPosture;

  const profileInVocabulary = (modeVocabulary as readonly string[]).includes(
    declaration.declaredProfile as string,
  );
  const basisIsReceiverRecorded =
    declaration.declarationBasis ===
    "receiver_recorded_explicit_declared_profile";
  const refusedBasis = refusedBases.includes(
    declaration.declarationBasis as Exclude<
      PondAgentDeclaredOperationalModeBasis,
      "receiver_recorded_explicit_declared_profile"
    >,
  )
    ? (declaration.declarationBasis as PondAgentDeclaredOperationalModeBasis)
    : null;
  const diagnosis = diagnoseDeclarationFreshness(
    event.declared_at_epoch_ms,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  const postureWellShaped = stricterLaneRefusalPostureWellShaped(postureIn);
  const postureHeld = stricterLaneRefusalPostureLiteralsHeld(postureIn);

  const values = [
    true,
    wellFormedAgentRef(declaration.agentRef),
    basisIsReceiverRecorded,
    profileInVocabulary,
    diagnosis.state === "fresh",
    postureHeld,
    declaration.authority === "none",
  ];
  const satisfied = declaredModeChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = declaredModeChecks.filter(
    (_, index) => values[index] !== true,
  );

  // Reason selection mirrors the ladder's ordering: an out-of-vocabulary
  // profile outranks a refused basis; a refused basis outranks staleness.
  const reason: PondAgentDeclaredOperationalModeAssessment["reason"] = !profileInVocabulary
    ? "declared_profile_out_of_vocabulary"
    : !basisIsReceiverRecorded
      ? "declaration_basis_inference_refused"
      : diagnosis.state !== "fresh" || !postureHeld
        ? "declaration_not_fresh_within_declared_maximum_age"
        : "all_declared_mode_checks_satisfied";

  // The stricter-lane refusal posture travels on every assessment whose
  // record is well-formed enough to carry it — including a value-tampered
  // posture, so the tampered literals stay visible. Only a posture that
  // lost its exact key set renders as null.
  const postureOut = postureWellShaped
    ? (postureIn as unknown as PondAgentDeclaredOperationalModeStricterLaneRefusalPosture)
    : null;

  return declaredModeAssessment(
    reason,
    refusedBasis,
    profileInVocabulary
      ? (declaration.declaredProfile as PondAgentDeclaredOperationalMode)
      : "not_recorded",
    diagnosis,
    postureOut,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. A declaration is evidence only:
// it never establishes authority, a grant, a capability, an admission, or
// lane access, and it carries none of the frozen D-P0…D-P11 tuple names.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP12Invariant_ModeChecksExact = Assert<
  Equal<
    PondAgentDeclaredOperationalModeCheck,
    | "declaration_record_well_formed"
    | "one_agent_one_profile_binding"
    | "declaration_basis_receiver_recorded_only"
    | "declared_profile_in_vocabulary"
    | "declaration_fresh_within_declared_maximum_age"
    | "stricter_lane_refusal_posture_held"
    | "declaration_is_evidence_only_ceiling_held"
  >
>;
export type PondStageDP12Invariant_ModeStatesExact = Assert<
  Equal<
    PondAgentDeclaredOperationalModeAssessment["declaredModeState"],
    "not_established" | "receiver_recorded_declared_mode_evidence_only"
  >
>;
export type PondStageDP12Invariant_ModeReasonsExact = Assert<
  Equal<
    PondAgentDeclaredOperationalModeAssessment["reason"],
    | "declaration_record_invalid"
    | "declared_profile_out_of_vocabulary"
    | "declaration_basis_inference_refused"
    | "declaration_not_fresh_within_declared_maximum_age"
    | "all_declared_mode_checks_satisfied"
  >
>;
export type PondStageDP12Invariant_ModeBasisVocabularyExact = Assert<
  Equal<
    PondAgentDeclaredOperationalModeBasis,
    | "receiver_recorded_explicit_declared_profile"
    | "inferred_from_purpose"
    | "inferred_from_operator_prompt"
    | "inferred_from_forge_surface_provenance"
    | "model_self_selected"
    | "derived_from_skill_library_state"
  >
>;
export type PondStageDP12Invariant_ModeProfileVocabularyExact = Assert<
  Equal<
    PondAgentDeclaredOperationalMode,
    "TRADING" | "HELPER" | "BUILDER"
  >
>;
export type PondStageDP12Invariant_DeclarationNeverEstablishesAnything = Assert<
  Equal<
    [
      PondAgentDeclaredOperationalModeAssessment["declaredProfileEstablishesAuthority"],
      PondAgentDeclaredOperationalModeAssessment["declaredProfileEstablishesGrant"],
      PondAgentDeclaredOperationalModeAssessment["declaredProfileEstablishesCapability"],
      PondAgentDeclaredOperationalModeAssessment["declaredProfileEstablishesAdmission"],
      PondAgentDeclaredOperationalModeAssessment["credentialAdmitted"],
      PondAgentDeclaredOperationalModeAssessment["currentTruthAdmitted"],
      PondAgentDeclaredOperationalModeAssessment["runtimeActivationPosture"],
      PondAgentDeclaredOperationalModeAssessment["authority"],
    ],
    [false, false, false, false, false, false, "not_included", "none"]
  >
>;
export type PondStageDP12Invariant_NoFrozenNamesOnModeAssessment = Assert<
  HasAnyKey<
    PondAgentDeclaredOperationalModeAssessment,
    | "privateReadsActivated"
    | "mappingEstablishmentState"
    | "onchainVerificationState"
    | "mappingEstablishesGrant"
    | "erc8004IdentityAcceptedAsPrincipalId"
    | "onchainIdentityAcceptedAsAuthentication"
  > extends false
    ? true
    : false
>;