// Stage D-P12 knowledge-forge-bound declared-mode composition.
//
// The endpoint composition ties the cut's two legs to the desk's frozen
// source binding: the forge surface binding (contract 1), the declared
// agent operational mode (contract 2), and the frozen D-P1 source
// binding the D-P0 desk presence records still carry. The
// evidence-activation contract's independent-inspection rule (L109)
// demands the composition re-run every leg through its own assessor —
// no trust in any prior assessment — so all three legs re-run here on
// every arm, and every arm carries honest mapped sub-states for each
// leg regardless of which leg refused.
//
// The composed state is a provenance-and-declaration record: forge
// surfaces bound + declared profile recorded + desk source binding still
// admissible. The ceiling stays exactly what the law wall requires
// (GOVERNANCE.md L5-7; governed-ecosystem-architecture.md L291-293
// authority.monotonicity; agent-identity L153): it establishes no grant,
// capability, authority, admission, lane access, or skill-content
// loading, and no forge lifecycle mutation — the lifecycle literal set
// carries EXTERNAL_REQUIRED_NOT_ESTABLISHED untouched. No assessment
// here carries a frozen D-P0…D-P11 tuple name.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import { assessPondKnowledgeForgeSurfaceBinding } from "./pond-knowledge-forge-surface-binding.ts";
import { assessPondAgentDeclaredOperationalMode } from "./pond-agent-declared-operational-mode.ts";
import { assessPondAgentPresenceSourceBinding } from "./pond-agent-presence-source-binding.ts";
import type { PondKnowledgeForgeSurfaceBindingCheck } from "./pond-knowledge-forge-surface-binding.js";
import type { PondAgentDeclaredOperationalModeCheck } from "./pond-agent-declared-operational-mode.js";
import type { PondAgentPresenceSourceBindingCheck } from "./pond-agent-presence-source-binding.js";

export type PondKnowledgeForgeBoundDeclaredModeCompositionCheck =
  | "forge_surface_binding_fully_satisfied_dp12"
  | "declared_operational_mode_recorded_dp12"
  | "declaration_fresh_within_declared_maximum_age_dp12"
  | "desk_source_binding_still_admissible_dp1"
  | "composition_ceiling_held_no_capability_grant_or_authority";

export type PondKnowledgeForgeBoundDeclaredModeCompositionState =
  | "not_composed"
  | "forge_bound_declared_profile_recorded";

export interface PondKnowledgeForgeBoundDeclaredModeCompositionInput {
  readonly forgeBindingRecord: unknown;
  readonly modeDeclarationRecord: unknown;
  readonly deskSourceContractFixture: unknown;
  readonly deskPresenceProjection: unknown;
  readonly receiverHeldAgentRef: unknown;
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export interface PondKnowledgeForgeBoundDeclaredModeCompositionAssessment {
  readonly contractVersion: "pond-knowledge-forge-bound-declared-mode-composition-d-p12";
  readonly assessmentKind: "deterministic_supplied_knowledge_forge_bound_declared_mode_composition";
  readonly compositionState: PondKnowledgeForgeBoundDeclaredModeCompositionState;
  readonly reason:
    | "forge_binding_record_invalid"
    | "declared_mode_record_invalid"
    | "desk_source_binding_not_established"
    | "declared_mode_not_established"
    | "composition_proof_incomplete"
    | "all_composition_checks_satisfied";
  readonly mappedForgeBindingState:
    | "not_established"
    | "fixture_bound_forge_surface_provenance";
  readonly mappedForgeBindingReason:
    | "binding_record_invalid"
    | "forge_surface_provenance_incomplete"
    | "forge_surface_binding_structurally_recorded";
  readonly mappedDeclaredModeState:
    | "not_established"
    | "receiver_recorded_declared_mode_evidence_only";
  readonly mappedDeclaredModeReason:
    | "declaration_record_invalid"
    | "declared_profile_out_of_vocabulary"
    | "declaration_basis_inference_refused"
    | "declaration_not_fresh_within_declared_maximum_age"
    | "all_declared_mode_checks_satisfied";
  readonly mappedDeskSourceBindingState:
    | "not_established"
    | "fixture_bound_committed_source_contract";
  readonly mappedDeskSourceBindingReason:
    | "source_contract_fixture_invalid"
    | "projection_invalid"
    | "receiver_live_verification_incomplete"
    | "fixture_source_binding_structurally_admissible";
  readonly mappedForgeUnsatisfiedChecks: readonly PondKnowledgeForgeSurfaceBindingCheck[];
  readonly mappedDeclaredModeUnsatisfiedChecks: readonly PondAgentDeclaredOperationalModeCheck[];
  readonly mappedDeskSourceUnsatisfiedChecks: readonly PondAgentPresenceSourceBindingCheck[];
  readonly declarationFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly satisfiedChecks: readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[];
  readonly unsatisfiedChecks: readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[];
  readonly forgeBoundDeclaredProfileEstablishesGrant: false;
  readonly forgeBoundDeclaredProfileEstablishesCapability: false;
  readonly declaredProfileEstablishesAuthority: false;
  readonly declaredProfileEstablishesGrant: false;
  readonly declaredProfileEstablishesCapability: false;
  readonly declaredProfileEstablishesAdmission: false;
  readonly skillContentAdmitted: false;
  readonly forgeLifecycleMutationAvailable: false;
  readonly knowledgeContentLoadedIntoAgentContext: false;
  readonly credentialAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const compositionChecks = Object.freeze([
  "forge_surface_binding_fully_satisfied_dp12",
  "declared_operational_mode_recorded_dp12",
  "declaration_fresh_within_declared_maximum_age_dp12",
  "desk_source_binding_still_admissible_dp1",
  "composition_ceiling_held_no_capability_grant_or_authority",
] as const satisfies readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[]);

const compositionAssessment = (
  reason: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["reason"],
  forge: ReturnType<typeof assessPondKnowledgeForgeSurfaceBinding>,
  mode: ReturnType<typeof assessPondAgentDeclaredOperationalMode>,
  desk: ReturnType<typeof assessPondAgentPresenceSourceBinding>,
  satisfiedChecks: readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[],
  unsatisfiedChecks: readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[],
): PondKnowledgeForgeBoundDeclaredModeCompositionAssessment =>
  Object.freeze({
    contractVersion:
      "pond-knowledge-forge-bound-declared-mode-composition-d-p12",
    assessmentKind:
      "deterministic_supplied_knowledge_forge_bound_declared_mode_composition",
    compositionState:
      reason === "all_composition_checks_satisfied"
        ? "forge_bound_declared_profile_recorded"
        : "not_composed",
    reason,
    mappedForgeBindingState: forge.bindingState,
    mappedForgeBindingReason: forge.reason,
    mappedDeclaredModeState: mode.declaredModeState,
    mappedDeclaredModeReason: mode.reason,
    mappedDeskSourceBindingState: desk.bindingState,
    mappedDeskSourceBindingReason: desk.reason,
    mappedForgeUnsatisfiedChecks: Object.freeze([...forge.unsatisfiedChecks]),
    mappedDeclaredModeUnsatisfiedChecks: Object.freeze([
      ...mode.unsatisfiedChecks,
    ]),
    mappedDeskSourceUnsatisfiedChecks: Object.freeze([
      ...desk.unsatisfiedChecks,
    ]),
    declarationFreshnessDiagnosis: mode.declarationFreshnessDiagnosis,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The composed state is provenance-and-declaration evidence: it
    // never becomes a grant, a capability, authority, an admission, lane
    // access, admitted skill content, an available lifecycle mutation,
    // content loaded into an agent context, or a current-truth claim.
    // The frozen D-P0…D-P11 tuple names stay with their own contracts.
    forgeBoundDeclaredProfileEstablishesGrant: false,
    forgeBoundDeclaredProfileEstablishesCapability: false,
    declaredProfileEstablishesAuthority: false,
    declaredProfileEstablishesGrant: false,
    declaredProfileEstablishesCapability: false,
    declaredProfileEstablishesAdmission: false,
    skillContentAdmitted: false,
    forgeLifecycleMutationAvailable: false,
    knowledgeContentLoadedIntoAgentContext: false,
    credentialAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondKnowledgeForgeBoundDeclaredModeComposition(
  input: PondKnowledgeForgeBoundDeclaredModeCompositionInput,
): PondKnowledgeForgeBoundDeclaredModeCompositionAssessment {
  // Every leg re-runs on every arm: the D-P1 frozen desk source binding
  // and this cut's two assessors. No leg trusts a prior assessment.
  const desk = assessPondAgentPresenceSourceBinding({
    sourceContractFixture: input.deskSourceContractFixture,
    projection: input.deskPresenceProjection,
  });
  const forge = assessPondKnowledgeForgeSurfaceBinding({
    forgeBindingRecord: input.forgeBindingRecord,
  });
  const mode = assessPondAgentDeclaredOperationalMode({
    modeDeclarationRecord: input.modeDeclarationRecord,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  });

  // The declaration must name the receiver-held agent ref, not just any
  // agent's record — the D-P10 held-principal binding restated for the
  // agent side.
  const declarationAgentRef =
    input.modeDeclarationRecord !== null &&
    typeof input.modeDeclarationRecord === "object"
      ? (input.modeDeclarationRecord as Record<string, unknown>).agentRef
      : undefined;

  if (forge.reason === "binding_record_invalid")
    return compositionAssessment(
      "forge_binding_record_invalid",
      forge,
      mode,
      desk,
      [],
      compositionChecks,
    );
  if (mode.reason === "declaration_record_invalid")
    return compositionAssessment(
      "declared_mode_record_invalid",
      forge,
      mode,
      desk,
      ["forge_surface_binding_fully_satisfied_dp12"],
      [
        "declared_operational_mode_recorded_dp12",
        "declaration_fresh_within_declared_maximum_age_dp12",
        "desk_source_binding_still_admissible_dp1",
        "composition_ceiling_held_no_capability_grant_or_authority",
      ],
    );

  const values = [
    forge.reason === "forge_surface_binding_structurally_recorded",
    mode.reason === "all_declared_mode_checks_satisfied" &&
      declarationAgentRef === input.receiverHeldAgentRef,
    mode.declarationFreshnessDiagnosis.state === "fresh",
    desk.reason === "fixture_source_binding_structurally_admissible",
    true,
  ];
  const satisfied = compositionChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = compositionChecks.filter(
    (_, index) => values[index] !== true,
  );

  // Cause-ordered refusal, per the D-P10 short-circuit mold: an
  // incomplete (but valid) forge binding is not a ladder reason — it
  // lands in the mapped forge sub-state and, if nothing else refused,
  // in `composition_proof_incomplete`.
  const reason: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["reason"] =
    !values[3]
      ? "desk_source_binding_not_established"
      : mode.reason !== "all_declared_mode_checks_satisfied"
        ? "declared_mode_not_established"
        : unsatisfied.length > 0
          ? "composition_proof_incomplete"
          : "all_composition_checks_satisfied";

  return compositionAssessment(reason, forge, mode, desk, satisfied, unsatisfied);
}

// Compile-time invariants for this cut.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondCompositionDP12Invariant_CompositionChecksExact = Assert<
  Equal<
    PondKnowledgeForgeBoundDeclaredModeCompositionCheck,
    | "forge_surface_binding_fully_satisfied_dp12"
    | "declared_operational_mode_recorded_dp12"
    | "declaration_fresh_within_declared_maximum_age_dp12"
    | "desk_source_binding_still_admissible_dp1"
    | "composition_ceiling_held_no_capability_grant_or_authority"
  >
>;
export type PondCompositionDP12Invariant_CompositionStatesExact = Assert<
  Equal<
    PondKnowledgeForgeBoundDeclaredModeCompositionState,
    "not_composed" | "forge_bound_declared_profile_recorded"
  >
>;
export type PondCompositionDP12Invariant_CompositionNeverBecomesGrantCapabilityContentOrAuthority =
  Assert<
    Equal<
      [
        PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["forgeBoundDeclaredProfileEstablishesGrant"],
        PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["forgeBoundDeclaredProfileEstablishesCapability"],
        PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["skillContentAdmitted"],
        PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["forgeLifecycleMutationAvailable"],
        PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["knowledgeContentLoadedIntoAgentContext"],
        PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["currentTruthAdmitted"],
        PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["runtimeActivationPosture"],
        PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["authority"],
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
export type PondCompositionDP12Invariant_NoFrozenNamesOnCompositionAssessment = Assert<
  HasAnyKey<
    PondKnowledgeForgeBoundDeclaredModeCompositionAssessment,
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