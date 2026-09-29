// Stage D-P13 declared-mode routing posture — the mode-consumption cut.
//
// The D-P12 vocabulary exists but nothing consumes it: a declared
// TRADING / HELPER / BUILDER profile feeds nothing. This cut makes a
// declared profile do exactly one thing — produce an ADVISORY
// per-surface routing posture over the four receiver-owned knowledge-forge
// surfaces — by re-running the D-P12 composition itself (evidence-
// activation L109: the consumer re-runs every leg through its own
// assessor; no trust in any prior assessment), independently joining the
// declared agent ref to the D-P0-observed agent, and consulting a frozen
// receiver-recorded routing table. The composition's own D-P1 desk leg
// comes free inside the re-run.
//
// Law anchors (ToadAid/toadaid-architecture at
// bc7a971dfb243f0aa4417da6cef85cc56204f783):
//
// - social-control-plane.md L199: "Routing is not authorization. A
//   correctly routed request may still be refused." — this cut's anchor.
//   The routing posture recorded here is advisory relevance only: a
//   correctly routed surface may still refuse everything.
// - social-control-plane.md L181-201: routing preserves the source
//   principal, source scope, destination scope, agent identity, and
//   applicable policy boundaries — the routing table carries none of
//   them; each stays with its own frozen contract.
// - governed-agent-forge.md L299: "A model or specialist may recommend
//   its own activation. It cannot authorize it." — the governed workflow
//   console's lifecycle is EXTERNAL_REQUIRED_NOT_ESTABLISHED with
//   executable: false for every receiver profile, so p5e never routes.
// - governed-agent-forge.md L150: a specialist must not infer its own
//   permissions from its purpose — the routing table consumes
//   receiver-recorded declarations only; the five D-P12 refused bases
//   stay refused and refine, never route.
// - agent-identity-and-specialist-admission-contract.md L110-114
//   "Declared capability is not granted capability"; L108 the
//   capability inventory "is not a grant"; L153 the stricter lanes; and
//   L179, which defers the role/administrator taxonomy entirely — LAW IS
//   SILENT on routing-by-declared-mode and on any role/mode selection
//   taxonomy. The per-profile table below is a receiver-recorded
//   app-side decision exercising existing refusal law, recorded in the
//   stage document, never new authority.
// - governed-ecosystem-architecture.md L321-327 esp. L325 "Each
//   specialist receives only the effective capabilities required for
//   its role." — the advisory rows posture toward role-scoped relevance
//   without granting any capability.
// - trusted-channel-separation-contract.md L100: "The request is not
//   itself the grant" — the routing table is not a trusted channel and
//   never rewrites a protected class.
//
// The positive state is an advisory posture echo: per-surface
// `advisory_relevant` | `advisory_excluded` over the frozen table — no
// content, no capability, no authority, no lifecycle, on any outcome.
// No assessment here carries a frozen D-P0…D-P12 tuple name.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import { assessPondKnowledgeForgeBoundDeclaredModeComposition } from "./pond-knowledge-forge-bound-declared-mode-composition.ts";
import type {
  PondKnowledgeForgeBoundDeclaredModeCompositionAssessment,
  PondKnowledgeForgeBoundDeclaredModeCompositionCheck,
} from "./pond-knowledge-forge-bound-declared-mode-composition.js";
import type { PondKnowledgeForgeSurfaceId } from "./pond-knowledge-forge-surface-binding.js";
import type {
  PondAgentDeclaredOperationalMode,
  PondAgentDeclaredOperationalModeBasis,
} from "./pond-agent-declared-operational-mode.js";

export type PondDeclaredModeRoutingAdvisoryPosture =
  | "advisory_relevant"
  | "advisory_excluded";

export type PondDeclaredModeRoutingCheck =
  | "composition_fully_satisfied_dp12"
  | "declared_agent_observed_in_desk_projection"
  | "declared_profile_routing_row_recorded"
  | "routing_ceiling_held_no_authority_grant_or_admission";

export type PondDeclaredModeRoutingState =
  | "routing_not_established"
  | "declared_mode_routing_established";

export type PondDeclaredModeRoutingDeskAgentJoinState =
  | "declared_ref_unreadable"
  | "desk_projection_unusable"
  | "agent_record_absent"
  | "agent_record_presence_not_established"
  | "agent_record_status_unrecognized"
  | "agent_record_observed";

export interface PondDeclaredModeRoutingInput {
  // The same seven unknown-typed keys the D-P12 composition takes;
  // forwarded verbatim to the re-run composition leg.
  readonly forgeBindingRecord: unknown;
  readonly modeDeclarationRecord: unknown;
  readonly deskSourceContractFixture: unknown;
  readonly deskPresenceProjection: unknown;
  readonly receiverHeldAgentRef: unknown;
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export interface PondDeclaredModeRoutingAssessment {
  readonly contractVersion: "pond-declared-mode-routing-d-p13";
  readonly assessmentKind: "deterministic_supplied_declared_mode_routing_posture";
  readonly routingState: PondDeclaredModeRoutingState;
  readonly reason:
    // The D-P12 composition refused for any of its non-mode-leg causes.
    | "composition_not_complete"
    // Mode-leg refinements: the D-P12 literals verbatim, never new
    // authority — the composition folds them behind
    // `declared_mode_not_established`; the mode-consumption cut
    // refines them off the honest mapped sub-state.
    | "declared_profile_out_of_vocabulary"
    | "declaration_basis_inference_refused"
    | "declaration_not_fresh_within_declared_maximum_age"
    // The join leg's own refusal: the declared agent is not an
    // observed agent in the desk projection.
    | "declared_agent_not_observed"
    | "declared_mode_routing_established";
  readonly mappedCompositionState: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["compositionState"];
  readonly mappedCompositionReason: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["reason"];
  readonly mappedCompositionUnsatisfiedChecks: readonly PondKnowledgeForgeBoundDeclaredModeCompositionCheck[];
  readonly mappedDeclaredModeReason: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["mappedDeclaredModeReason"];
  readonly mappedDeclaredModeUnsatisfiedChecks: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["mappedDeclaredModeUnsatisfiedChecks"];
  readonly mappedForgeBindingReason: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["mappedForgeBindingReason"];
  readonly mappedDeskSourceBindingReason: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["mappedDeskSourceBindingReason"];
  readonly declaredProfile: PondAgentDeclaredOperationalMode | "not_recorded";
  readonly refusedDeclarationBasis: PondAgentDeclaredOperationalModeBasis | null;
  readonly declarationFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  readonly mappedDeskAgentJoinState: PondDeclaredModeRoutingDeskAgentJoinState;
  readonly advisoryPostureBySurfaceId:
    | Readonly<
        Record<PondKnowledgeForgeSurfaceId, PondDeclaredModeRoutingAdvisoryPosture>
      >
    | null;
  readonly satisfiedChecks: readonly PondDeclaredModeRoutingCheck[];
  readonly unsatisfiedChecks: readonly PondDeclaredModeRoutingCheck[];
  // The routing posture is advisory only: it never establishes a
  // capability, a grant, an admission, authority, admitted skill
  // content, an available lifecycle mutation, content loaded into an
  // agent context, or a current-truth claim (social-control-plane
  // L199). The frozen D-P0…D-P12 tuple names stay with their own
  // contracts.
  readonly routingEstablishesCapability: false;
  readonly routingEstablishesGrant: false;
  readonly routingEstablishesAdmission: false;
  readonly routingEstablishesAuthority: false;
  readonly skillContentAdmitted: false;
  readonly knowledgeContentLoadedIntoAgentContext: false;
  readonly forgeLifecycleMutationAvailable: false;
  readonly credentialAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

// The frozen receiver-recorded routing table: one advisory row per
// declared profile, one posture per forge surface. Law is silent on
// routing-by-declared-mode; this table is a receiver-recorded app-side
// decision. The p5e row is advisory_excluded on every profile — the
// workflow console's lifecycle authority is EXTERNAL_REQUIRED_NOT_
// ESTABLISHED with executable: false, and forge law L299 keeps the
// lifecycle out of every agent's reach, so it never routes. The rows
// stay pairwise distinct on the three non-lifecycle surfaces so a
// profile is distinguishable from its echo. No authority literal is
// carried or overridden here: the D-P12 commitment table's
// KNOWLEDGE_ONLY / NONE / NOT_INCLUDED postures stay theirs alone.
export const POND_STAGE_DP13_DECLARED_MODE_ROUTING_TABLE =
  Object.freeze({
    TRADING: Object.freeze({
      "knowledge-forge-p5b-desktop-projection": "advisory_excluded",
      "knowledge-forge-p5c-skill-library-browser": "advisory_relevant",
      "knowledge-forge-p5d-evidence-inspector": "advisory_relevant",
      "knowledge-forge-p5e-governed-workflow-console": "advisory_excluded",
    } satisfies Record<
      PondKnowledgeForgeSurfaceId,
      PondDeclaredModeRoutingAdvisoryPosture
    >),
    HELPER: Object.freeze({
      "knowledge-forge-p5b-desktop-projection": "advisory_relevant",
      "knowledge-forge-p5c-skill-library-browser": "advisory_excluded",
      "knowledge-forge-p5d-evidence-inspector": "advisory_relevant",
      "knowledge-forge-p5e-governed-workflow-console": "advisory_excluded",
    } satisfies Record<
      PondKnowledgeForgeSurfaceId,
      PondDeclaredModeRoutingAdvisoryPosture
    >),
    BUILDER: Object.freeze({
      "knowledge-forge-p5b-desktop-projection": "advisory_relevant",
      "knowledge-forge-p5c-skill-library-browser": "advisory_relevant",
      "knowledge-forge-p5d-evidence-inspector": "advisory_excluded",
      "knowledge-forge-p5e-governed-workflow-console": "advisory_excluded",
    } satisfies Record<
      PondKnowledgeForgeSurfaceId,
      PondDeclaredModeRoutingAdvisoryPosture
    >),
  } satisfies Record<
    PondAgentDeclaredOperationalMode,
    Readonly<
      Record<PondKnowledgeForgeSurfaceId, PondDeclaredModeRoutingAdvisoryPosture>
    >
  >);

export const POND_STAGE_DP13_ADVISORY_POSTURE_VOCABULARY = Object.freeze([
  "advisory_relevant",
  "advisory_excluded",
] as const satisfies readonly PondDeclaredModeRoutingAdvisoryPosture[]);

export const POND_STAGE_DP13_ROUTED_PROFILES = Object.freeze([
  "TRADING",
  "HELPER",
  "BUILDER",
] as const satisfies readonly PondAgentDeclaredOperationalMode[]);

// The receiver-recorded presence-establishing statuses: only these two
// D-P0 presence statuses count as the declared agent being observed in
// the desk projection. Live-connection law is silent on which statuses
// establish presence; this is the receiver's recorded decision
// (`fixture_observed_not_live` is the desk's own record posture — a
// structural presence fact, not a live read). The remaining D-P0
// statuses are presence facts that do not establish the join.
export const POND_STAGE_DP13_PRESENCE_ESTABLISHING_STATUSES = Object.freeze([
  "fixture_observed_not_live",
  "live_observed",
] as const satisfies readonly string[]);

export const POND_STAGE_DP13_PRESENCE_REFUSED_STATUSES = Object.freeze([
  "not_observed",
  "unavailable",
  "unknown",
] as const satisfies readonly string[]);

const routingChecks = Object.freeze([
  "composition_fully_satisfied_dp12",
  "declared_agent_observed_in_desk_projection",
  "declared_profile_routing_row_recorded",
  "routing_ceiling_held_no_authority_grant_or_admission",
] as const satisfies readonly PondDeclaredModeRoutingCheck[]);

// The D-P12 refused basis vocabulary, restated locally so the echo can
// classify the raw record's basis. The Equal invariant below pins this
// list to the frozen D-P12 type — these literals never gain authority by
// being echoed.
const refusedDeclarationBases = Object.freeze([
  "inferred_from_purpose",
  "inferred_from_operator_prompt",
  "inferred_from_forge_surface_provenance",
  "model_self_selected",
  "derived_from_skill_library_state",
] as const satisfies readonly string[]);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;

const routingAssessment = (
  reason: PondDeclaredModeRoutingAssessment["reason"],
  composition: PondKnowledgeForgeBoundDeclaredModeCompositionAssessment,
  declaredProfileOut: PondDeclaredModeRoutingAssessment["declaredProfile"],
  refusedDeclarationBasisOut: PondDeclaredModeRoutingAssessment["refusedDeclarationBasis"],
  joinState: PondDeclaredModeRoutingDeskAgentJoinState,
  advisoryPostureBySurfaceId: PondDeclaredModeRoutingAssessment["advisoryPostureBySurfaceId"],
  satisfiedChecks: readonly PondDeclaredModeRoutingCheck[],
  unsatisfiedChecks: readonly PondDeclaredModeRoutingCheck[],
): PondDeclaredModeRoutingAssessment =>
  Object.freeze({
    contractVersion: "pond-declared-mode-routing-d-p13",
    assessmentKind: "deterministic_supplied_declared_mode_routing_posture",
    routingState:
      reason === "declared_mode_routing_established"
        ? "declared_mode_routing_established"
        : "routing_not_established",
    reason,
    mappedCompositionState: composition.compositionState,
    mappedCompositionReason: composition.reason,
    mappedCompositionUnsatisfiedChecks: Object.freeze([
      ...composition.unsatisfiedChecks,
    ]),
    mappedDeclaredModeReason: composition.mappedDeclaredModeReason,
    mappedDeclaredModeUnsatisfiedChecks: Object.freeze([
      ...composition.mappedDeclaredModeUnsatisfiedChecks,
    ]),
    mappedForgeBindingReason: composition.mappedForgeBindingReason,
    mappedDeskSourceBindingReason: composition.mappedDeskSourceBindingReason,
    declaredProfile: declaredProfileOut,
    refusedDeclarationBasis: refusedDeclarationBasisOut,
    declarationFreshnessDiagnosis: composition.declarationFreshnessDiagnosis,
    mappedDeskAgentJoinState: joinState,
    advisoryPostureBySurfaceId,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    routingEstablishesCapability: false,
    routingEstablishesGrant: false,
    routingEstablishesAdmission: false,
    routingEstablishesAuthority: false,
    skillContentAdmitted: false,
    knowledgeContentLoadedIntoAgentContext: false,
    forgeLifecycleMutationAvailable: false,
    credentialAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

export function assessPondDeclaredModeRouting(
  input: PondDeclaredModeRoutingInput,
): PondDeclaredModeRoutingAssessment {
  // The composition leg re-runs every leg through its own assessor
  // (evidence-activation L109) — the forge binding leg, the declared-mode
  // leg, and the frozen D-P1 desk source binding leg — on every arm.
  const composition = assessPondKnowledgeForgeBoundDeclaredModeComposition({
    forgeBindingRecord: input.forgeBindingRecord,
    modeDeclarationRecord: input.modeDeclarationRecord,
    deskSourceContractFixture: input.deskSourceContractFixture,
    deskPresenceProjection: input.deskPresenceProjection,
    receiverHeldAgentRef: input.receiverHeldAgentRef,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  });

  // Raw echo reads off the supplied records. These echoes stay honest on
  // every arm — a broken forge leg does not unrecord the profile — and
  // they are echoes only: no echo widens the ladder.
  const declaration = record(input.modeDeclarationRecord);
  const declaredAgentRef = declaration?.agentRef;
  const declaredProfileRaw = declaration?.declaredProfile;
  const declarationBasisRaw = declaration?.declarationBasis;

  const declaredProfileOut = (
    POND_STAGE_DP13_ROUTED_PROFILES as readonly string[]
  ).includes(declaredProfileRaw as string)
    ? (declaredProfileRaw as PondAgentDeclaredOperationalMode)
    : "not_recorded";

  const refusedDeclarationBasisOut =
    declarationBasisRaw !== undefined &&
    typeof declarationBasisRaw === "string" &&
    (refusedDeclarationBases as readonly string[]).includes(declarationBasisRaw)
      ? (declarationBasisRaw as PondAgentDeclaredOperationalModeBasis)
      : null;

  // The join leg — this cut's own contribution. The declared agent ref
  // must name an agent record in the desk presence projection whose
  // presence status is one of the receiver-recorded establishing
  // statuses. The composition's D-P1 leg already validated the
  // projection structurally; the join reads it independently here and
  // stays mapped honestly on every arm, whatever the composition did.
  const projection = record(input.deskPresenceProjection);
  const observedAgents = Array.isArray(projection?.observedAgents)
    ? projection.observedAgents
    : null;

  let joinState: PondDeclaredModeRoutingDeskAgentJoinState;
  if (
    declaration === null ||
    typeof declaredAgentRef !== "string" ||
    declaredAgentRef === ""
  )
    joinState = "declared_ref_unreadable";
  else if (observedAgents === null)
    joinState = "desk_projection_unusable";
  else {
    const joinedRecord = observedAgents.find(
      (candidate) => record(candidate)?.agentRef === declaredAgentRef,
    );
    if (joinedRecord === undefined) {
      joinState = "agent_record_absent";
    } else {
      const presenceStatus = record(joinedRecord)?.presenceStatus;
      if (
        (POND_STAGE_DP13_PRESENCE_ESTABLISHING_STATUSES as readonly string[]).includes(
          presenceStatus as string,
        )
      )
        joinState = "agent_record_observed";
      else if (
        (POND_STAGE_DP13_PRESENCE_REFUSED_STATUSES as readonly string[]).includes(
          presenceStatus as string,
        )
      )
        joinState = "agent_record_presence_not_established";
      else joinState = "agent_record_status_unrecognized";
    }
  }

  const advisoryPostureBySurfaceId =
    declaredProfileOut === "not_recorded"
      ? null
      : Object.freeze({
          ...(POND_STAGE_DP13_DECLARED_MODE_ROUTING_TABLE[declaredProfileOut] as Readonly<
            Record<PondKnowledgeForgeSurfaceId, PondDeclaredModeRoutingAdvisoryPosture>
          >),
        });

  const values = [
    composition.reason === "all_composition_checks_satisfied",
    joinState === "agent_record_observed",
    declaredProfileOut !== "not_recorded",
    true,
  ];
  const satisfied = routingChecks.filter((_, index) => values[index] === true);
  const unsatisfied = routingChecks.filter(
    (_, index) => values[index] !== true,
  );

  // Cause-ordered refusal. On `declared_mode_not_established` the
  // composition's mapped mode reason is exhausted by exactly the three
  // refinement literals — `declaration_record_invalid` always returns
  // early as the composition's own second reason — so the refinement
  // branch is total by construction and no defensive ladder literal
  // exists (probed in the selftest).
  let reason: PondDeclaredModeRoutingAssessment["reason"];
  if (composition.reason === "declared_mode_not_established") {
    const refinement = composition.mappedDeclaredModeReason;
    reason =
      refinement === "declared_profile_out_of_vocabulary" ||
      refinement === "declaration_basis_inference_refused" ||
      refinement === "declaration_not_fresh_within_declared_maximum_age"
        ? refinement
        : "composition_not_complete";
  } else if (composition.reason !== "all_composition_checks_satisfied") {
    reason = "composition_not_complete";
  } else if (joinState !== "agent_record_observed") {
    reason = "declared_agent_not_observed";
  } else {
    reason = "declared_mode_routing_established";
  }

  return routingAssessment(
    reason,
    composition,
    declaredProfileOut,
    refusedDeclarationBasisOut,
    joinState,
    advisoryPostureBySurfaceId,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The routing posture is advisory
// only; the mapped D-P12 sub-states stay the D-P12 vocabularies verbatim;
// no frozen tuple name ever lands here.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP13Invariant_RoutingChecksExact = Assert<
  Equal<
    PondDeclaredModeRoutingCheck,
    | "composition_fully_satisfied_dp12"
    | "declared_agent_observed_in_desk_projection"
    | "declared_profile_routing_row_recorded"
    | "routing_ceiling_held_no_authority_grant_or_admission"
  >
>;
export type PondStageDP13Invariant_RoutingStatesExact = Assert<
  Equal<
    PondDeclaredModeRoutingState,
    "routing_not_established" | "declared_mode_routing_established"
  >
>;
export type PondStageDP13Invariant_RoutingReasonsExact = Assert<
  Equal<
    PondDeclaredModeRoutingAssessment["reason"],
    | "composition_not_complete"
    | "declared_profile_out_of_vocabulary"
    | "declaration_basis_inference_refused"
    | "declaration_not_fresh_within_declared_maximum_age"
    | "declared_agent_not_observed"
    | "declared_mode_routing_established"
  >
>;
export type PondStageDP13Invariant_JoinStatesExact = Assert<
  Equal<
    PondDeclaredModeRoutingDeskAgentJoinState,
    | "declared_ref_unreadable"
    | "desk_projection_unusable"
    | "agent_record_absent"
    | "agent_record_presence_not_established"
    | "agent_record_status_unrecognized"
    | "agent_record_observed"
  >
>;
export type PondStageDP13Invariant_AdvisoryPostureVocabularyExact = Assert<
  Equal<
    (typeof POND_STAGE_DP13_ADVISORY_POSTURE_VOCABULARY)[number],
    PondDeclaredModeRoutingAdvisoryPosture
  >
>;
export type PondStageDP13Invariant_RoutingTableKeysExactAgainstProfileVocabulary =
  Assert<
    Equal<
      keyof typeof POND_STAGE_DP13_DECLARED_MODE_ROUTING_TABLE,
      PondAgentDeclaredOperationalMode
    >
  >;
export type PondStageDP13Invariant_RoutingTableRowKeysExactAgainstSurfaceIds =
  Assert<
    Equal<
      | keyof (typeof POND_STAGE_DP13_DECLARED_MODE_ROUTING_TABLE)["TRADING"]
      | keyof (typeof POND_STAGE_DP13_DECLARED_MODE_ROUTING_TABLE)["HELPER"]
      | keyof (typeof POND_STAGE_DP13_DECLARED_MODE_ROUTING_TABLE)["BUILDER"],
      PondKnowledgeForgeSurfaceId
    >
  >;
export type PondStageDP13Invariant_RoutedProfilesExactAgainstModeVocabulary =
  Assert<
    Equal<
      (typeof POND_STAGE_DP13_ROUTED_PROFILES)[number],
      PondAgentDeclaredOperationalMode
    >
  >;
export type PondStageDP13Invariant_MappedCompositionReasonTiedToDp12Composition =
  Assert<
    Equal<
      PondDeclaredModeRoutingAssessment["mappedCompositionReason"],
      PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["reason"]
    >
  >;
export type PondStageDP13Invariant_MappedDeclaredModeReasonTiedToDp12 =
  Assert<
    Equal<
      PondDeclaredModeRoutingAssessment["mappedDeclaredModeReason"],
      PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["mappedDeclaredModeReason"]
    >
  >;
export type PondStageDP13Invariant_MappedForgeReasonTiedToDp12ForgeAssessment =
  Assert<
    Equal<
      PondDeclaredModeRoutingAssessment["mappedForgeBindingReason"],
      PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["mappedForgeBindingReason"]
    >
  >;
export type PondStageDP13Invariant_MappedDeskReasonTiedToDp12DeskAssessment =
  Assert<
    Equal<
      PondDeclaredModeRoutingAssessment["mappedDeskSourceBindingReason"],
      PondKnowledgeForgeBoundDeclaredModeCompositionAssessment["mappedDeskSourceBindingReason"]
    >
  >;
export type PondStageDP13Invariant_RoutingNeverEstablishesAnything = Assert<
  Equal<
    [
      PondDeclaredModeRoutingAssessment["routingEstablishesCapability"],
      PondDeclaredModeRoutingAssessment["routingEstablishesGrant"],
      PondDeclaredModeRoutingAssessment["routingEstablishesAdmission"],
      PondDeclaredModeRoutingAssessment["routingEstablishesAuthority"],
      PondDeclaredModeRoutingAssessment["skillContentAdmitted"],
      PondDeclaredModeRoutingAssessment["knowledgeContentLoadedIntoAgentContext"],
      PondDeclaredModeRoutingAssessment["forgeLifecycleMutationAvailable"],
      PondDeclaredModeRoutingAssessment["credentialAdmitted"],
      PondDeclaredModeRoutingAssessment["currentTruthAdmitted"],
      PondDeclaredModeRoutingAssessment["runtimeActivationPosture"],
      PondDeclaredModeRoutingAssessment["authority"],
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
      "not_included",
      "none",
    ]
  >
>;
export type PondStageDP13Invariant_NoFrozenNamesOnRoutingAssessment = Assert<
  HasAnyKey<
    PondDeclaredModeRoutingAssessment,
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