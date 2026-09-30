// Stage D-P16: the conversation surface — session-scoped presentation
// posture over admitted composed records and the addressed agents' live
// structural postures.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/trusted-channel-separation-contract.md
// L28 (the conversation-context channel is one of the seven channel
// classes), L102-107 (conversation history presented to a consumer
// carries provenance and a trust epoch; history outside the verified
// boundary stays confined — preserved for human inspection but excluded
// from provider replay), L146 (legacy promotion to canonical memory or
// verified evidence requires an explicit governed transformation —
// refused here outright), L160 ("No prompt, retrieved document,
// conversation summary, or model completion may directly grant
// authority"), and L170 (memory and conversation stay separate stores);
// contracts/agent-to-agent-messaging-contract.md L29 ("A message may
// inform. A message does not authorize a consequence."), L133-136, and
// L207-216 (room presence is not ToadAid membership); social-control-
// plane L199 ("Routing is not authorization. A correctly routed request
// may still be refused.") — the agent-posture presentation is advisory
// reflection only; contracts/agent-identity-and-specialist-admission-
// contract.md L112 and L75; contracts/evidence-activation-contract.md
// L49-55 and L109 (every leg re-runs through the surface's own seam);
// blueprints/governed-runtime-component-allocation.md L481 (operator
// input may never establish identity, a Grant, an approval, policy, or
// authority by prose alone).
//
// Recorded law silences. No canonical law defines a conversation-surface
// presentation contract, a per-record presentation trust mark over
// session conversation records, the reflection of a declared agent's
// routing posture on a conversation surface, or the inspection-only
// confinement vocabulary — every literal below is a receiver-recorded
// app-side decision, exercised as refusal vocabulary, not as new
// authority.
//
// What the cut performs. The surface posture is a receiver-owned
// presentation assessment: the surface-level D-P15 read gate re-runs
// through this contract's own seam; every held record re-runs the
// D-P16 record admission through this contract's own seam, in input
// order, and carries an honest presentation trust mark (admitted-in-
// session records presentable; refused-but-shape-valid records marked
// inspection-only with the trust-epoch refusal distinguished; shape-
// invalid records marked not admissible — the composed text itself is
// NEVER carried in any assessment; the shell pairs records to entries
// by input order); every distinct declared addressed agent ref among the
// held records re-runs the frozen D-P13 declared-mode routing through
// this contract's own seam, over the same frozen D-P12 leg records the
// desk carries, so the presented posture is the reflected routing truth
// of the receiver's own D-P0/D-P13 records — no memory lane, no record
// read. Where the live session has ended (retraction, expiry, refusal),
// every re-run refuses: shape-valid records surface the honest confined
// state (inspection-only presentation marks), a surface without any
// shape-valid record simply does not present. This is a projection of
// the held facts re-assessed on every evaluation, never canonical state;
// nothing here delivers, dispatches, replies, persists, promotes, or
// grants.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type { PondLiveSessionEstablishmentAssessment } from "./pond-live-session-establishment.js";
import { assessPondLiveSessionEstablishment } from "./pond-live-session-establishment.ts";
import type { PondLiveSessionReadGateAssessment } from "./pond-live-session-read-gate.js";
import { assessPondLiveSessionReadGate } from "./pond-live-session-read-gate.ts";
import type { PondConversationRecordAdmissionAssessment } from "./pond-conversation-record-admission.js";
import type {
  PondConversationRecordAdmissionInput,
} from "./pond-conversation-record-admission.js";
import { POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS } from "./pond-conversation-record-admission.ts";
import { assessPondConversationRecordAdmission } from "./pond-conversation-record-admission.ts";
import type { PondDeclaredModeRoutingAssessment } from "./pond-declared-mode-routing.js";
import { assessPondDeclaredModeRouting } from "./pond-declared-mode-routing.ts";
import type {
  PondAgentDeclaredOperationalMode,
  PondAgentDeclaredOperationalModeBasis,
} from "./pond-agent-declared-operational-mode.js";

// The basis vocabulary: one true receiver-recorded presentation basis and
// four refused inference bases. A surface driven from any refused basis
// is exactly what this ceremony exists to refuse — no establishment
// inference, no history inference, no shell-producer self-assertion, no
// room-presence inference ever presents the surface (trusted-channel
// L87-100; agent-to-agent L207-216).
export type PondConversationSurfaceBasis =
  | "receiver_recorded_conversation_surface_presentation_not_inferred"
  | "inferred_from_live_session_establishment"
  | "inferred_from_conversation_history"
  | "asserted_by_shell_producer"
  | "inferred_from_room_presence";

export type PondConversationSurfaceCheck =
  | "conversation_surface_record_well_formed"
  | "conversation_surface_bound_to_receiver_held_principal"
  | "conversation_surface_basis_receiver_recorded_not_inferred"
  | "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority"
  | "presented_records_all_within_current_session_scope"
  | "agent_postures_presented_from_receiver_records_no_memory_or_lane_read"
  | "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh";

export type PondConversationSurfacePresentationTrustMark =
  | "in_session_verified_boundary_session_scoped"
  | "out_of_session_untrusted_epoch_inspection_only_never_consumer_admissible"
  | "out_of_session_record_not_admissible";

export interface PondConversationSurfaceRecord {
  readonly contractVersion: "pond-conversation-surface-posture-d-p16";
  readonly kind: "pond-conversation-surface";
  readonly principalRef: string;
  readonly surfaceBasis: PondConversationSurfaceBasis;
  readonly surfacePresentationPosture: "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence";
  readonly conversationTrustEpochPosture: "verified_boundary_session_scoped";
  readonly agentPosturePresentationPosture: "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read";
  readonly surfaceEndPosture: "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible";
  readonly conversationScopePosture: "session_scoped_module_state_never_persisted_scope_never_created_from_prose";
  readonly surfaceDeliveryRefusalPosture: "surface_informs_nothing_is_delivered_dispatched_or_replied";
  readonly surfaceMemoryPosture: "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence";
  readonly surfaceAuthorityPosture: "composed_prose_grants_no_authority_membership_or_capability_no_room_membership";
  readonly authority: "none";
}

export interface PondConversationSurfacePostureInput {
  readonly conversationSurfaceRecord: unknown;
  readonly conversationRecordInputs: unknown;
  readonly receiverHeldPrincipalRef: unknown;
  readonly receiverHeldAgentRef: unknown;
  readonly forgeBindingRecord: unknown;
  readonly modeDeclarationRecord: unknown;
  readonly deskSourceContractFixture: unknown;
  readonly deskPresenceProjection: unknown;
  readonly readGateRecord: unknown;
  readonly establishmentRecord: unknown;
  readonly dp5CeremonyRecord: unknown;
  readonly dp6ObservationRecord: unknown;
  readonly dp8VerifierRecord: unknown;
  readonly dp8ProofRecord: unknown;
  readonly dp9IssuanceRecord: unknown;
  readonly dp9MappingRecord: unknown;
  readonly dp10ActivationRecord: unknown;
  readonly receiverRetractionRecord: unknown;
  readonly receiverEvaluatedAtEpochMs: unknown;
  readonly receiverMaximumAgeMs: unknown;
}

export interface PondConversationSurfacePostureAssessment {
  readonly contractVersion: "pond-conversation-surface-posture-d-p16";
  readonly surfaceRecordVersion:
    | "pond-conversation-surface-posture-d-p16"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_conversation_surface_posture";
  readonly conversationSurfaceState:
    | "conversation_surface_not_presented"
    | "live_session_conversation_surface_presented"
    | "conversation_surface_scope_ended_records_inspection_only";
  readonly reason:
    | "conversation_surface_record_invalid"
    | "live_session_not_established_refused_or_not_fresh"
    | "receiver_conversation_surface_proof_incomplete"
    | "all_conversation_surface_checks_satisfied";
  // Mapped echo fields: the surface-level legs re-run through this
  // contract's own seam, carrying the frozen literals verbatim on every
  // arm, through broken legs too. Field names stay this cut's own.
  readonly mappedEstablishmentState: PondLiveSessionEstablishmentAssessment["sessionEstablishmentState"];
  readonly mappedEstablishmentReason: PondLiveSessionEstablishmentAssessment["reason"];
  readonly mappedReadGateState: PondLiveSessionReadGateAssessment["liveSessionReadGateState"];
  readonly mappedReadGateReason: PondLiveSessionReadGateAssessment["reason"];
  readonly mappedReadGateFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // One honest entry per record input, in input order (the shell pairs
  // composed texts to entries by index; the composed text itself is
  // never carried here).
  readonly recordEntries: readonly PondConversationSurfaceRecordEntry[];
  readonly agentPostureEchoes: readonly PondConversationSurfaceAgentPostureEcho[];
  readonly satisfiedChecks: readonly PondConversationSurfaceCheck[];
  readonly unsatisfiedChecks: readonly PondConversationSurfaceCheck[];
  // The all-false ceiling: the surface is an informative reflection of
  // the receiver's own records. It never delivers, dispatches, replies,
  // grants, or establishes agent access, a scope, membership or room
  // presence, canonical memory or verified evidence, current truth, a
  // credential, or a PrincipalId authorization (trusted-channel L87-100,
  // L146, L160; agent-to-agent L29; runtime-allocation L481).
  readonly surfaceEstablishesGrant: false;
  readonly surfaceEstablishesDeliveryOrDispatch: false;
  readonly surfaceEstablishesAgentReplyComposition: false;
  readonly surfaceEstablishesAuthorityFromProse: false;
  readonly surfaceEstablishesMembershipOrRoomPresence: false;
  readonly surfaceEstablishesAgentAccess: false;
  readonly surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence: false;
  readonly surfaceEstablishesCurrentTruth: false;
  readonly credentialAdmitted: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

export interface PondConversationSurfaceRecordEntry {
  readonly presentationTrustMark: PondConversationSurfacePresentationTrustMark;
  readonly echoedRecordState: PondConversationRecordAdmissionAssessment["conversationRecordState"];
  readonly echoedRecordReason: PondConversationRecordAdmissionAssessment["reason"];
}

export interface PondConversationSurfaceAgentPostureEcho {
  readonly presentationAgentRef: string;
  readonly presentedAgentPosture:
    | "addressed_agent_structural_posture_presented"
    | "addressed_agent_structural_posture_refused_no_declared_mode_structural_record";
  readonly echoedRoutingState: PondDeclaredModeRoutingAssessment["routingState"];
  readonly echoedRoutingReason: PondDeclaredModeRoutingAssessment["reason"];
  readonly echoedDeclaredProfile:
    | PondAgentDeclaredOperationalMode
    | "not_recorded";
  readonly echoedRefusedDeclarationBasis:
    | PondAgentDeclaredOperationalModeBasis
    | null;
  readonly echoedDeskAgentJoinState: PondDeclaredModeRoutingAssessment["mappedDeskAgentJoinState"];
  readonly echoedDeclarationFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
}

const surfaceChecks = Object.freeze([
  "conversation_surface_record_well_formed",
  "conversation_surface_bound_to_receiver_held_principal",
  "conversation_surface_basis_receiver_recorded_not_inferred",
  "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority",
  "presented_records_all_within_current_session_scope",
  "agent_postures_presented_from_receiver_records_no_memory_or_lane_read",
  "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh",
] as const satisfies readonly PondConversationSurfaceCheck[]);

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

const wellFormedPrincipalRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("principal:") &&
  value.length > "principal:".length;

// Valid vocabulary shapes only — surface validity, not presentation. The
// surface record carries no event time of its own: currency is owned by
// the re-run surface-level gate.
const validSurfaceRecord = (value: unknown): boolean => {
  const surface = record(value);
  return (
    surface !== null &&
    exactKeys(surface, [
      "contractVersion",
      "kind",
      "principalRef",
      "surfaceBasis",
      "surfacePresentationPosture",
      "conversationTrustEpochPosture",
      "agentPosturePresentationPosture",
      "surfaceEndPosture",
      "conversationScopePosture",
      "surfaceDeliveryRefusalPosture",
      "surfaceMemoryPosture",
      "surfaceAuthorityPosture",
      "authority",
    ]) &&
    surface.contractVersion === "pond-conversation-surface-posture-d-p16" &&
    surface.kind === "pond-conversation-surface" &&
    wellFormedPrincipalRef(surface.principalRef) &&
    [
      "receiver_recorded_conversation_surface_presentation_not_inferred",
      "inferred_from_live_session_establishment",
      "inferred_from_conversation_history",
      "asserted_by_shell_producer",
      "inferred_from_room_presence",
    ].includes(String(surface.surfaceBasis)) &&
    surface.surfacePresentationPosture ===
      "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence" &&
    surface.conversationTrustEpochPosture ===
      "verified_boundary_session_scoped" &&
    surface.agentPosturePresentationPosture ===
      "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read" &&
    surface.surfaceEndPosture ===
      "records_confined_out_of_session_after_scope_end_inspection_only_never_consumer_admissible" &&
    surface.conversationScopePosture ===
      "session_scoped_module_state_never_persisted_scope_never_created_from_prose" &&
    surface.surfaceDeliveryRefusalPosture ===
      "surface_informs_nothing_is_delivered_dispatched_or_replied" &&
    surface.surfaceMemoryPosture ===
      "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence" &&
    surface.surfaceAuthorityPosture ===
      "composed_prose_grants_no_authority_membership_or_capability_no_room_membership" &&
    surface.authority === "none" &&
    !hasForbiddenKey(surface, POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS)
  );
};

const recordInputArray = (value: unknown): readonly unknown[] =>
  Array.isArray(value) ? value : [];

const wellFormedAdmissionInput = (value: unknown): boolean => {
  const candidate = record(value);
  if (candidate === null) return false;
  return exactKeys(candidate, [
    "conversationRecord",
    "receiverHeldPrincipalRef",
    "readGateRecord",
    "establishmentRecord",
    "dp5CeremonyRecord",
    "dp6ObservationRecord",
    "dp8VerifierRecord",
    "dp8ProofRecord",
    "dp9IssuanceRecord",
    "dp9MappingRecord",
    "dp10ActivationRecord",
    "receiverRetractionRecord",
    "receiverEvaluatedAtEpochMs",
    "receiverMaximumAgeMs",
  ]);
};

const surfaceAssessment = (
  reason: PondConversationSurfacePostureAssessment["reason"],
  surfaceRecordVersion: PondConversationSurfacePostureAssessment["surfaceRecordVersion"],
  conversationSurfaceState: PondConversationSurfacePostureAssessment["conversationSurfaceState"],
  mappedEstablishment: PondMappedSurfaceEstablishmentEcho,
  mappedReadGate: PondMappedSurfaceReadGateEcho,
  recordEntries: readonly PondConversationSurfaceRecordEntry[],
  agentPostureEchoes: readonly PondConversationSurfaceAgentPostureEcho[],
  satisfiedChecks: readonly PondConversationSurfaceCheck[],
  unsatisfiedChecks: readonly PondConversationSurfaceCheck[],
): PondConversationSurfacePostureAssessment => {
  const presented =
    reason === "all_conversation_surface_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-conversation-surface-posture-d-p16",
    surfaceRecordVersion,
    assessmentKind: "deterministic_supplied_conversation_surface_posture",
    conversationSurfaceState,
    reason,
    mappedEstablishmentState: mappedEstablishment.state,
    mappedEstablishmentReason: mappedEstablishment.reason,
    mappedReadGateState: mappedReadGate.state,
    mappedReadGateReason: mappedReadGate.reason,
    mappedReadGateFreshnessDiagnosis: mappedReadGate.diagnosis,
    recordEntries: Object.freeze(
      recordEntries.map((entry) => Object.freeze({ ...entry })),
    ),
    agentPostureEchoes: Object.freeze(
      agentPostureEchoes.map((entry) => Object.freeze({ ...entry })),
    ),
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The surface is an informative reflection only: no delivery, no
    // dispatch, no reply, no grant, no agent access, no membership or
    // room presence, no memory or evidence promotion, no current truth,
    // no credential, no PrincipalId authorization (trusted-channel
    // L87-100, L146, L160; agent-to-agent L29; runtime-allocation L481).
    surfaceEstablishesGrant: false,
    surfaceEstablishesDeliveryOrDispatch: false,
    surfaceEstablishesAgentReplyComposition: false,
    surfaceEstablishesAuthorityFromProse: false,
    surfaceEstablishesMembershipOrRoomPresence: false,
    surfaceEstablishesAgentAccess: false,
    surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence: false,
    surfaceEstablishesCurrentTruth: false,
    credentialAdmitted: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

// The mapped echo shapes (the D-P15 mapped precedent — typed to the
// frozen contracts so a drift is a compile error, values carried
// verbatim from the frozen assessments, quoted-index reads only).
interface PondMappedSurfaceEstablishmentEcho {
  readonly state: PondLiveSessionEstablishmentAssessment["sessionEstablishmentState"];
  readonly reason: PondLiveSessionEstablishmentAssessment["reason"];
}

interface PondMappedSurfaceReadGateEcho {
  readonly state: PondLiveSessionReadGateAssessment["liveSessionReadGateState"];
  readonly reason: PondLiveSessionReadGateAssessment["reason"];
  readonly diagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
}

export function assessPondConversationSurfacePosture(
  input: PondConversationSurfacePostureInput,
): PondConversationSurfacePostureAssessment {
  // The fail-closed gate on the input object itself: garbage never throws
  // — a non-object input degrades to an empty record the validation and
  // every re-run refuses honestly (the D-P8 fail-closed discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondConversationSurfacePostureInput;
  // The echoes are computed on every arm, before any cause is chosen: a
  // broken leg never unbinds the receiver's records, and an invalid arm
  // still diagnoses (D-P13 echo discipline). The surface-level gate
  // re-runs through this contract's own seam (L109).
  const surfaceGateLegs = {
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    establishmentRecord: input.establishmentRecord,
    dp5CeremonyRecord: input.dp5CeremonyRecord,
    dp6ObservationRecord: input.dp6ObservationRecord,
    dp8VerifierRecord: input.dp8VerifierRecord,
    dp8ProofRecord: input.dp8ProofRecord,
    dp9IssuanceRecord: input.dp9IssuanceRecord,
    dp9MappingRecord: input.dp9MappingRecord,
    dp10ActivationRecord: input.dp10ActivationRecord,
    receiverRetractionRecord: input.receiverRetractionRecord,
    receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
    receiverMaximumAgeMs: input.receiverMaximumAgeMs,
  };
  const establishmentLeg = assessPondLiveSessionEstablishment({
    ...surfaceGateLegs,
  });
  const readGateLeg = assessPondLiveSessionReadGate({
    readGateRecord: input.readGateRecord,
    ...surfaceGateLegs,
  });
  const mappedEstablishment: PondMappedSurfaceEstablishmentEcho = {
    state: establishmentLeg["sessionEstablishmentState"],
    reason: establishmentLeg.reason,
  };
  const mappedReadGate: PondMappedSurfaceReadGateEcho = {
    state: readGateLeg["liveSessionReadGateState"],
    reason: readGateLeg.reason,
    diagnosis: readGateLeg["readGateFreshnessDiagnosis"],
  };

  // Every record input re-runs the D-P16 record admission through this
  // contract's own seam, in input order, on every arm — re-timed to
  // this surface's own current evaluation pair and retraction record
  // (the D-P15 reassessment precedent: held records are the facts, the
  // evaluation parameters are supplied fresh per assessment, so
  // staleness, retraction, and expiry are always the honest verdict and
  // a confined surface never carries an in-session mark). The marks and
  // echoes stay honest even when the surface refuses outright.
  const recordInputs = recordInputArray(input.conversationRecordInputs);
  const recordEntries: PondConversationSurfaceRecordEntry[] = recordInputs.map(
    (candidate) => {
      // The re-run validates every field itself — a malformed entry
      // refuses, it never throws (the D-P8 fail-closed discipline).
      const admission = assessPondConversationRecordAdmission({
        ...(candidate as PondConversationRecordAdmissionInput),
        receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
        receiverMaximumAgeMs: input.receiverMaximumAgeMs,
        receiverRetractionRecord: input.receiverRetractionRecord,
      });
      const mark: PondConversationSurfacePresentationTrustMark =
        admission["conversationRecordState"] ===
        "conversation_record_admitted_session_scoped_no_delivery"
          ? "in_session_verified_boundary_session_scoped"
          : admission.reason === "conversation_record_trust_epoch_not_admissible"
            ? "out_of_session_untrusted_epoch_inspection_only_never_consumer_admissible"
            : "out_of_session_record_not_admissible";
      return {
        presentationTrustMark: mark,
        echoedRecordState: admission["conversationRecordState"],
        echoedRecordReason: admission.reason,
      };
    },
  );

  // Every distinct declared addressed agent ref among the held records
  // re-runs the frozen D-P13 declared-mode routing through this
  // contract's own seam — the reflection of the receiver's own D-P12/D-P0
  // records, no memory lane, no record read.
  const distinctAgentRefs: string[] = [];
  for (const candidate of recordInputs) {
    const candidateRecord = record(candidate)?.["conversationRecord"];
    const addressedAgentRef = record(candidateRecord)?.["addressedAgentRef"];
    if (
      typeof addressedAgentRef === "string" &&
      !distinctAgentRefs.includes(addressedAgentRef)
    )
      distinctAgentRefs.push(addressedAgentRef);
  }
  const agentPostureEchoes: PondConversationSurfaceAgentPostureEcho[] =
    distinctAgentRefs.map((agentRef) => {
      const routing = assessPondDeclaredModeRouting({
        forgeBindingRecord: input.forgeBindingRecord,
        modeDeclarationRecord: input.modeDeclarationRecord,
        deskSourceContractFixture: input.deskSourceContractFixture,
        deskPresenceProjection: input.deskPresenceProjection,
        receiverHeldAgentRef: agentRef,
        receiverEvaluatedAtEpochMs: input.receiverEvaluatedAtEpochMs,
        receiverMaximumAgeMs: input.receiverMaximumAgeMs,
      });
      return {
        presentationAgentRef: agentRef,
        presentedAgentPosture:
          routing.routingState === "declared_mode_routing_established"
            ? "addressed_agent_structural_posture_presented"
            : "addressed_agent_structural_posture_refused_no_declared_mode_structural_record",
        echoedRoutingState: routing.routingState,
        echoedRoutingReason: routing.reason,
        echoedDeclaredProfile: routing.declaredProfile,
        echoedRefusedDeclarationBasis: routing.refusedDeclarationBasis,
        echoedDeskAgentJoinState: routing.mappedDeskAgentJoinState,
        echoedDeclarationFreshnessDiagnosis:
          routing.declarationFreshnessDiagnosis,
      };
    });

  const gateLive =
    readGateLeg["liveSessionReadGateState"] ===
      "live_session_scoped_single_principal_structural_reads_live_activated" &&
    readGateLeg["readGateFreshnessDiagnosis"].state === "fresh";

  if (!validSurfaceRecord(input.conversationSurfaceRecord))
    return surfaceAssessment(
      "conversation_surface_record_invalid",
      "invalid",
      "conversation_surface_not_presented",
      mappedEstablishment,
      mappedReadGate,
      recordEntries,
      agentPostureEchoes,
      [],
      surfaceChecks,
    );
  const surface = input.conversationSurfaceRecord as Record<string, unknown>;

  // The surface-level session currency: the live gate must be up right
  // now, not was established once. Where it is down and at least one
  // shape-valid record is held, the surface ends with the honest
  // inspection-only confinement — otherwise it simply does not present.
  if (!gateLive) {
    const anyValidRecordInput = recordInputs.some((candidate) =>
      wellFormedAdmissionInput(candidate),
    );
    return surfaceAssessment(
      "live_session_not_established_refused_or_not_fresh",
      "pond-conversation-surface-posture-d-p16",
      anyValidRecordInput
        ? "conversation_surface_scope_ended_records_inspection_only"
        : "conversation_surface_not_presented",
      mappedEstablishment,
      mappedReadGate,
      recordEntries,
      agentPostureEchoes,
      [],
      surfaceChecks,
    );
  }

  // The scope binding, re-derived here (the establishment leg was
  // already re-run positive and honestly diagnosed above): every held
  // record input whose conversation record is an object must carry a
  // readable composed event time at or after the current session's
  // establishment event — a record from an earlier session instance
  // polluting the held inventory refuses the presentation, and a
  // garbage input refuses it with the record shaped unreadably (the
  // fail-closed wall; the honest per-record mark is still computed for
  // the echo alongside).
  const reestablishmentMetadata = record(
    (input.establishmentRecord as Record<string, unknown>)["establishmentMetadata"],
  );
  const establishmentEvent = reestablishmentMetadata?.["established_at_epoch_ms"];
  const inputsInScope = recordInputs.map((candidate) => {
    const candidateConversationRecord = record(candidate)?.["conversationRecord"];
    const conversationRecordObject =
      candidateConversationRecord === null || candidateConversationRecord === undefined
        ? null
        : record(candidateConversationRecord);
    if (conversationRecordObject === null) return false;
    const candidateMetadata = record(conversationRecordObject["conversationRecordMetadata"]);
    const composedAt = candidateMetadata?.["composed_at_epoch_ms"];
    if (typeof composedAt !== "number" || !Number.isSafeInteger(composedAt) || composedAt < 0)
      return false;
    if (typeof establishmentEvent !== "number") return false;
    return composedAt >= establishmentEvent;
  });

  const values = [
    true,
    surface.principalRef === input.receiverHeldPrincipalRef &&
      wellFormedPrincipalRef(input.receiverHeldPrincipalRef),
    surface.surfaceBasis ===
      "receiver_recorded_conversation_surface_presentation_not_inferred",
    surface.surfacePresentationPosture ===
      "receiver_composed_records_presented_in_session_no_delivery_no_agent_reply_no_persistence" &&
      surface.surfaceDeliveryRefusalPosture ===
        "surface_informs_nothing_is_delivered_dispatched_or_replied" &&
      surface.surfaceMemoryPosture ===
        "conversation_context_never_promoted_to_canonical_memory_or_verified_evidence" &&
      surface.surfaceAuthorityPosture ===
        "composed_prose_grants_no_authority_membership_or_capability_no_room_membership",
    inputsInScope.every((inScope) => inScope === true),
    surface.agentPosturePresentationPosture ===
      "addressed_agent_structural_postures_presented_from_receiver_records_only_no_memory_or_lane_read",
    true,
  ];
  const satisfied = surfaceChecks.filter((_, index) => values[index] === true);
  const unsatisfied = surfaceChecks.filter(
    (_, index) => values[index] !== true,
  );

  // The declarative failures fold here with their unsatisfied check
  // names readable (L49-55 — every leg green except the declarative one
  // that failed), never behind a defensive literal.
  return surfaceAssessment(
    unsatisfied.length === 0
      ? "all_conversation_surface_checks_satisfied"
      : "receiver_conversation_surface_proof_incomplete",
    "pond-conversation-surface-posture-d-p16",
    unsatisfied.length === 0
      ? "live_session_conversation_surface_presented"
      : "conversation_surface_not_presented",
    mappedEstablishment,
    mappedReadGate,
    recordEntries,
    agentPostureEchoes,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The surface is a reflection of
// the receiver's own records; it never delivers, replies, persists,
// promotes, or grants.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP16Invariant_SurfaceChecksExact = Assert<
  Equal<
    PondConversationSurfaceCheck,
    | "conversation_surface_record_well_formed"
    | "conversation_surface_bound_to_receiver_held_principal"
    | "conversation_surface_basis_receiver_recorded_not_inferred"
    | "conversation_surface_refusal_postures_complete_no_delivery_no_reply_no_memory_no_prose_authority"
    | "presented_records_all_within_current_session_scope"
    | "agent_postures_presented_from_receiver_records_no_memory_or_lane_read"
    | "live_session_surface_level_read_gate_reinspected_live_activated_and_fresh"
  >
>;
export type PondStageDP16Invariant_SurfaceStatesExact = Assert<
  Equal<
    PondConversationSurfacePostureAssessment["conversationSurfaceState"],
    | "conversation_surface_not_presented"
    | "live_session_conversation_surface_presented"
    | "conversation_surface_scope_ended_records_inspection_only"
  >
>;
export type PondStageDP16Invariant_SurfaceReasonsExact = Assert<
  Equal<
    PondConversationSurfacePostureAssessment["reason"],
    | "conversation_surface_record_invalid"
    | "live_session_not_established_refused_or_not_fresh"
    | "receiver_conversation_surface_proof_incomplete"
    | "all_conversation_surface_checks_satisfied"
  >
>;
export type PondStageDP16Invariant_SurfaceTrustMarksExact = Assert<
  Equal<
    PondConversationSurfacePresentationTrustMark,
    | "in_session_verified_boundary_session_scoped"
    | "out_of_session_untrusted_epoch_inspection_only_never_consumer_admissible"
    | "out_of_session_record_not_admissible"
  >
>;
export type PondStageDP16Invariant_MappedReadGateStateTiedToDP15GateSurface =
  Assert<
    Equal<
      PondConversationSurfacePostureAssessment["mappedReadGateState"],
      PondLiveSessionReadGateAssessment["liveSessionReadGateState"]
    >
  >;
export type PondStageDP16Invariant_RecordEntryEchoesTiedToRecordAdmission =
  Assert<
    Equal<
      PondConversationSurfaceRecordEntry["echoedRecordState"],
      PondConversationRecordAdmissionAssessment["conversationRecordState"]
    > extends true
      ? Equal<
          PondConversationSurfaceRecordEntry["echoedRecordReason"],
          PondConversationRecordAdmissionAssessment["reason"]
        >
      : false
  >;
export type PondStageDP16Invariant_AgentEchoesTiedToRouting = Assert<
  Equal<
    PondConversationSurfaceAgentPostureEcho["echoedRoutingState"],
    PondDeclaredModeRoutingAssessment["routingState"]
  >
>;
export type PondStageDP16Invariant_SurfaceNeverEstablishesDeliveryReplyGrantOrMemory =
  Assert<
    Equal<
      [
        PondConversationSurfacePostureAssessment["surfaceEstablishesGrant"],
        PondConversationSurfacePostureAssessment["surfaceEstablishesDeliveryOrDispatch"],
        PondConversationSurfacePostureAssessment["surfaceEstablishesAgentReplyComposition"],
        PondConversationSurfacePostureAssessment["surfaceEstablishesAuthorityFromProse"],
        PondConversationSurfacePostureAssessment["surfaceEstablishesMembershipOrRoomPresence"],
        PondConversationSurfacePostureAssessment["surfaceEstablishesAgentAccess"],
        PondConversationSurfacePostureAssessment["surfacePromotedRecordsToCanonicalMemoryOrVerifiedEvidence"],
        PondConversationSurfacePostureAssessment["surfaceEstablishesCurrentTruth"],
        PondConversationSurfacePostureAssessment["credentialAdmitted"],
        PondConversationSurfacePostureAssessment["personalMemoryContentAdmitted"],
        PondConversationSurfacePostureAssessment["currentTruthAdmitted"],
        PondConversationSurfacePostureAssessment["runtimeActivationPosture"],
        PondConversationSurfacePostureAssessment["authority"],
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
        "not_included",
        "none",
      ]
    >
  >;
export type PondStageDP16Invariant_NoForbiddenSurfaceRecordKeys = Assert<
  HasAnyKey<PondConversationSurfaceRecord, (typeof POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP16Invariant_NoForbiddenSurfaceAssessmentKeys = Assert<
  HasAnyKey<PondConversationSurfacePostureAssessment, (typeof POND_STAGE_DP16_FORBIDDEN_CONVERSATION_KEYS)[number]> extends false
    ? true
    : false
>;