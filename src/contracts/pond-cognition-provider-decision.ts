// Stage D-P21: the agent-reply lane — the receiver-recorded cognition
// provider-selection decision, over a currently recorded reply request.
// Companion contracts: pond-reply-request-decision.ts (the request the
// decision rides) and pond-claimed-agent-reply-refusal.ts (the standing
// claimed-reply wall).
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): the frozen substrate contracts/pond-cognition-
// provider.ts in THIS repo (the provider-sovereign cognition foundation
// — backend classes, cloud provider ids, the local runtime id, access
// mechanisms, credential custody classes, data-boundary classes,
// support tiers, and the two load-bearing literals `declared_policy_
// not_verified_runtime_evidence` and `no_silent_fallback`), whose own
// contract says it "performs no provider selection, authentication,
// inference, routing, fallback, or authority work" and whose frozen
// invariants this cut consumes verbatim. The law side: contracts/agent-
// identity-and-specialist-admission-contract.md L77 ("Provider session
// is not agent. ChatGPT, Codex, Claude, API, local-model, and other
// reasoning sessions do not automatically create an AgentId"), L112
// ("Declared capability is not granted capability"), L116-118 (no
// authority from provider session, model output, or attestation),
// blueprints/governed-runtime-component-allocation.md L101 (reasoning
// != authorization), L448 (a reasoning-client row must not own
// authority, identity, or consequence permission — the decision below
// declares a selection, never permission), L498 (advisory outputs are
// never state-changing outputs), L715-717 (Wave 8 — community/project
// runtime — is the future home of a multi-agent runtime; this cut is
// the runway, not the wave), contracts/scope-sovereignty-contract.md
// L15 and L209 (a provider/model/session/harness is NOT a principal),
// contracts/agent-to-agent-messaging-and-delivery-contract.md L176
// ("recipient reasoning" — unowned), L189 (the two lifecycles must not
// collapse), L236-250 (the deferral list omits reply composition and
// cognition ownership entirely — reply composition is unaddressed by
// law, not deferred), and L49-55 and L109 of contracts/evidence-
// activation-contract.md (the independent inspection IS the re-run).
//
// Recorded law silences. No canonical law defines a provider-selection
// vocabulary, a provider-selection decision record, or a cognition
// owner; the substrate is a fixture policy declaration whose own text
// refuses selection/inference/authentication/routing/fallback work.
// Every literal below is a receiver-recorded app-side decision, recorded
// here rather than in a law amendment, and consumed verbatim FROM the
// substrate — the vocabularies are re-declared and Equal-pinned to the
// frozen types so a substrate drift is a compile error here.
//
// What the cut performs. The receiver records ONE provider-selection
// decision — the selection a future reply runtime WOULD ride, if one
// existed — over a reply request that is CURRENTLY recorded at the
// decision's own evaluation instant. The ceremony re-runs — through its
// own seam — the frozen D-P21 reply-request decision over the SAME
// legs and the SAME re-timed evaluation pair (the D-P20 mechanism one
// lane earlier: D-P20 re-ran D-P17; D-P21's provider lane re-runs
// pond-reply-request-decision), and inside that the frozen D-P16/D-P15
// chain re-runs again. The decision performs NO inference, no
// authentication, no provider contact, no routing, and no fallback —
// the ceiling below pins each refusal — and it is consumed by nothing
// this cut. Exactly ONE selection is performable: local_runtime /
// ollama / local_runtime / local_operator / local_operator_controlled /
// sovereign_local — the only selection touching no external provider,
// no credential path, and no external boundary. NO backend profile is
// constructed and no modelRef/harnessRef is carried: a model or harness
// reference without a performed provider contact is an unverified
// claim, and this decision performs no contact.

import type { PondAgentPresenceObservationFreshnessDiagnosis } from "./pond-agent-presence-observation-intake.js";
import type { PondReplyRequestDecisionAssessment } from "./pond-reply-request-decision.js";
import {
  assessPondReplyRequestDecision,
  POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS,
} from "./pond-reply-request-decision.ts";
// Type-only consumption of the frozen provider-sovereign cognition
// foundation: the module declares vocabulary, never values — so the
// literals are re-declared below and Equal-pinned to these frozen types
// (a substrate drift is a compile error in this contract's invariants).
import type {
  PondCognitionBackendClass,
  PondCloudProviderId,
  PondCognitionAccessMechanism,
  PondCredentialCustodyClass,
  PondCognitionDataBoundaryClass,
  PondCognitionSupportTier,
  PondLocalRuntimeId,
} from "./pond-cognition-provider.js";

// The re-declared vocabularies, verbatim from the frozen substrate and
// Equal-pinned to it in the invariants block below.
export type PondCognitionBackendClassDeclaration =
  | "cloud_provider"
  | "local_runtime"
  | "community_gateway";

export type PondCloudProviderIdDeclaration =
  | "openai"
  | "google"
  | "xai"
  | "anthropic"
  | "deepseek";

export type PondLocalRuntimeIdDeclaration = "ollama";

export type PondCognitionAccessMechanismDeclaration =
  | "api_key"
  | "delegated_oauth"
  | "interactive_subscription"
  | "workload_identity"
  | "local_runtime"
  | "community_gateway";

export type PondCredentialCustodyClassDeclaration =
  | "toadaid_managed"
  | "principal_managed"
  | "delegated"
  | "local_operator"
  | "community_managed";

export type PondCognitionDataBoundaryClassDeclaration =
  | "external_cloud"
  | "local_operator_controlled"
  | "community_governed";

export type PondCognitionSupportTierDeclaration =
  | "launch_primary"
  | "launch_primary_alternate"
  | "specialist_direction"
  | "evaluation_candidate"
  | "experimental"
  | "sovereign_local"
  | "future_community";

// A selected backend id: a cloud provider id, the local runtime id, or
// the empty literal — the community gateway has NO backend id in the
// substrate (its profile carries a posture, "future_toadgang_gateway_
// no_endpoint", never an id), so the empty literal is the verbatim
// no-id-exists declaration for community selections.
export type PondBackendSelectionId =
  | PondCloudProviderIdDeclaration
  | PondLocalRuntimeIdDeclaration
  | "";

const backendClassVocabulary: readonly PondCognitionBackendClassDeclaration[] = [
  "cloud_provider",
  "local_runtime",
  "community_gateway",
];

const cloudProviderIdVocabulary: readonly PondCloudProviderIdDeclaration[] = [
  "openai",
  "google",
  "xai",
  "anthropic",
  "deepseek",
];

const localRuntimeVocabulary: readonly PondLocalRuntimeIdDeclaration[] = [
  "ollama",
];

const accessMechanismVocabulary: readonly PondCognitionAccessMechanismDeclaration[] = [
  "api_key",
  "delegated_oauth",
  "interactive_subscription",
  "workload_identity",
  "local_runtime",
  "community_gateway",
];

const credentialCustodyVocabulary: readonly PondCredentialCustodyClassDeclaration[] = [
  "toadaid_managed",
  "principal_managed",
  "delegated",
  "local_operator",
  "community_managed",
];

const dataBoundaryVocabulary: readonly PondCognitionDataBoundaryClassDeclaration[] = [
  "external_cloud",
  "local_operator_controlled",
  "community_governed",
];

const supportTierVocabulary: readonly PondCognitionSupportTierDeclaration[] = [
  "launch_primary",
  "launch_primary_alternate",
  "specialist_direction",
  "evaluation_candidate",
  "experimental",
  "sovereign_local",
  "future_community",
];

// The per-class compatibility matrix: which access mechanics, custody
// classes, and data boundary each backend class admits. Cloud backends
// consume a credential path (an external cloud boundary); the local
// runtime consumes none; the community gateway rides the future
// community governance. Frozen vocabulary, deterministic — an
// incoherent selection refuses at its own incoherence cause.
const classMechanismVocabulary = {
  cloud_provider: [
    "api_key",
    "delegated_oauth",
    "interactive_subscription",
    "workload_identity",
  ],
  local_runtime: ["local_runtime"],
  community_gateway: ["community_gateway"],
} as const;

const classCustodyVocabulary = {
  cloud_provider: ["toadaid_managed", "principal_managed", "delegated"],
  local_runtime: ["local_operator"],
  community_gateway: ["community_managed"],
} as const;

const classDataBoundary = {
  cloud_provider: "external_cloud",
  local_runtime: "local_operator_controlled",
  community_gateway: "community_governed",
} as const;

// The ONE performable selection this cut: the only one touching no
// external provider, no credential path, and no external boundary.
export const POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS = Object.freeze(
  [
    Object.freeze({
      backendClass: "local_runtime",
      selectedBackendId: "ollama",
      accessMechanism: "local_runtime",
      credentialCustodyClass: "local_operator",
      dataBoundaryClass: "local_operator_controlled",
      supportTier: "sovereign_local",
    }),
  ] as const,
);

// The selection echo's shape: what the receiver NAMED, carried as the
// named strings themselves — an echoed selection may name an id outside
// the declared vocabulary (that is exactly what the refusals surface),
// so the echo never claims declared-vocabulary membership; the declared
// vocabulary types live on the record interface, the re-declared unions
// above, and the performable-selection constant below.
export interface PondStageDP21RecordedProviderSelection {
  readonly backendClass: string;
  readonly selectedBackendId: string;
  readonly accessMechanism: string;
  readonly credentialCustodyClass: string;
  readonly dataBoundaryClass: string;
  readonly supportTier: string;
}

// The reply-request basis vocabulary and the provider-decision basis
// vocabulary: one true receiver-recorded basis and five refused bases
// (the D-P20 basis mold). A provider decision is a current stance of
// the receiving side — nothing in the reply request, a model
// completion, a provider session, available credentials, or a prior
// decision may record it here.
export type PondProviderDecisionBasis =
  | "receiver_recorded_provider_decision_not_inferred"
  | "inferred_from_reply_request"
  | "asserted_by_model_completion"
  | "inferred_from_provider_session"
  | "inferred_from_credential_availability"
  | "replayed_from_prior_provider_decision";

export interface PondProviderDecisionEventMetadata {
  readonly recorded_at_epoch_ms: number;
  readonly freshness_basis: "provider_decision_event_time_only";
  readonly currentness_posture: "not_established_consumer_must_evaluate";
}

// The receiver-recorded provider decision: 21 exact keys. NO backend
// profile is constructed here and no modelRef/harnessRef is carried —
// a model or harness reference without a performed provider contact is
// an unverified claim, and this decision performs no contact.
export interface PondProviderDecision {
  readonly contractVersion: "pond-cognition-provider-decision-d-p21";
  readonly kind: "pond-cognition-provider-decision";
  readonly principalRef: string;
  readonly providerDecisionBasis: PondProviderDecisionBasis;
  readonly backendClass: PondCognitionBackendClassDeclaration;
  readonly selectedBackendId: PondBackendSelectionId;
  readonly accessMechanism: PondCognitionAccessMechanismDeclaration;
  readonly credentialCustodyClass: PondCredentialCustodyClassDeclaration;
  readonly dataBoundaryClass: PondCognitionDataBoundaryClassDeclaration;
  readonly supportTier: PondCognitionSupportTierDeclaration;
  readonly providerDecisionMetadata: PondProviderDecisionEventMetadata;
  readonly providerDecisionRuntimePosture: "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime";
  readonly providerDecisionInferencePosture: "performs_no_inference_no_authentication_no_provider_contact_no_fallback";
  readonly providerDecisionIdentityPosture: "provider_session_is_not_agent_no_agentid_created";
  readonly providerDecisionAccessPosture: "declared_capability_not_granted_no_credential_admitted_no_authentication_performed";
  readonly providerDecisionBoundaryPosture: "declared_policy_not_verified_runtime_evidence";
  readonly providerDecisionFallbackPosture: "no_silent_fallback_no_failure_transition_authorized";
  readonly providerDecisionReplyPosture: "no_reply_composed_the_decision_rides_a_recorded_reply_request_only";
  readonly providerDecisionConsumptionPosture: "consumed_by_no_runtime_composer_or_transport_this_cut";
  readonly authority: "none";
}

// Receiver-owned provider-decision checks (L49-55).
export type PondProviderDecisionCheck =
  | "provider_decision_record_well_formed"
  | "provider_decision_bound_to_receiver_held_principal"
  | "provider_decision_basis_receiver_recorded_not_inferred"
  | "reply_request_currently_recorded_reassessed_session_scoped"
  | "provider_selection_in_declared_verbatim_vocabulary"
  | "provider_backend_id_of_declared_backend_class"
  | "provider_access_custody_and_boundary_compatible_with_backend_class"
  | "provider_selection_performable_this_cut"
  | "provider_decision_event_within_current_session_scope"
  | "provider_decision_event_own_freshness_within_declared_maximum_age"
  | "provider_decision_refusal_postures_complete";

// The provider-decision input: 15 exact keys — the reply-request
// decision input verbatim (the shape the reply module stores) plus the
// provider decision. One evaluation pair serves the decision event's
// freshness and every leg's re-run inside the reassessment.
export interface PondProviderDecisionInput {
  readonly providerDecision: unknown;
  readonly replyRequest: unknown;
  readonly receiverHeldPrincipalRef: unknown;
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

// The provider-decision assessment.
export interface PondProviderDecisionAssessment {
  readonly contractVersion: "pond-cognition-provider-decision-d-p21";
  readonly providerDecisionVersion:
    | "pond-cognition-provider-decision-d-p21"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_provider_decision";
  readonly providerDecisionState:
    | "provider_decision_not_recorded"
    | "provider_decision_recorded_session_scoped_no_runtime_established";
  readonly reason:
    | "provider_decision_record_invalid"
    | "reply_request_not_currently_recorded"
    | "provider_backend_class_unknown_fail_closed"
    | "provider_backend_id_unknown_or_not_of_declared_backend_class"
    | "provider_access_mechanism_not_compatible_with_declared_backend_class"
    | "provider_credential_custody_not_compatible_with_declared_backend_class"
    | "provider_data_boundary_not_compatible_with_declared_backend_class"
    | "provider_selection_declared_not_performable_this_cut"
    | "provider_decision_event_not_session_current"
    | "provider_decision_event_not_of_the_current_session_scope"
    | "receiver_provider_decision_proof_incomplete"
    | "all_provider_decision_checks_satisfied";
  readonly providerDecisionEventFreshnessDiagnosis: PondAgentPresenceObservationFreshnessDiagnosis;
  // The selection echo, computed on every arm where the record is
  // validly shaped (null on an invalid record — nothing is echoed for a
  // record that never became a record). A declared-not-performable
  // selection is echoed at its dedicated cause; this echo carries what
  // the receiver named, never what any runtime contacted.
  readonly recordedProviderSelection: PondStageDP21RecordedProviderSelection | null;
  // Mapped echo fields: the frozen reply-request re-run's own fields
  // carried verbatim on every arm, and THROUGH them the conversation
  // record's verdict — the request's mapped echoes are readable two
  // depths down (the D-P20 mapped precedent, now four depths deep into
  // the D-P15 chain).
  readonly mappedReplyRequestState: PondReplyRequestDecisionAssessment["replyRequestState"];
  readonly mappedReplyRequestReassessmentReason: PondReplyRequestDecisionAssessment["reason"];
  readonly mappedReplyRequestDiagnosis: PondReplyRequestDecisionAssessment["replyRequestEventFreshnessDiagnosis"];
  readonly mappedConversationState: PondReplyRequestDecisionAssessment["mappedConversationState"];
  readonly mappedConversationReassessmentReason: PondReplyRequestDecisionAssessment["mappedConversationReassessmentReason"];
  readonly satisfiedChecks: readonly PondProviderDecisionCheck[];
  readonly unsatisfiedChecks: readonly PondProviderDecisionCheck[];
  // The retention posture: the D-P20 policy posture (a decision is
  // session-scoped stance whose applicability the reassessment governs).
  readonly providerDecisionRetentionPosture: "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction";
  // The all-false ceiling: a recorded decision is a declaration of WHAT
  // a future runtime WOULD ride, nothing more. It never establishes a
  // cognition runtime or model access, reply composition, agent identity
  // or admission; it performs no inference, no authentication or
  // provider contact, no routing/sending/storage of any reply text, and
  // no silent fallback; it never establishes a grant, a consequence or
  // execution, prose authority, membership or admission, or a scope; it
  // is consumed by nothing this cut; and it admits no credential, no
  // PrincipalId authorization, and no current truth (admission L77,
  // L112, L116-118; allocation L101, L448, L498, L715-717; scope-sov
  // L15, L209; agent-to-agent L176, L189, L236-250).
  readonly providerDecisionEstablishesCognitionRuntimeOrModelAccess: false;
  readonly providerDecisionEstablishesAgentReplyComposition: false;
  readonly providerDecisionEstablishesAgentIdentityOrAdmission: false;
  readonly providerDecisionPerformsInference: false;
  readonly providerDecisionPerformsAuthenticationOrProviderContact: false;
  readonly providerDecisionRoutesSendsOrStoresReplyText: false;
  readonly providerDecisionPerformsSilentFallback: false;
  readonly providerDecisionEstablishesGrant: false;
  readonly providerDecisionEstablishesConsequenceOrExecution: false;
  readonly providerDecisionEstablishesAuthorityFromProse: false;
  readonly providerDecisionEstablishesMembershipOrAdmission: false;
  readonly providerDecisionEstablishesScope: false;
  readonly providerDecisionConsumedThisCut: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const providerDecisionChecks = Object.freeze([
  "provider_decision_record_well_formed",
  "provider_decision_bound_to_receiver_held_principal",
  "provider_decision_basis_receiver_recorded_not_inferred",
  "reply_request_currently_recorded_reassessed_session_scoped",
  "provider_selection_in_declared_verbatim_vocabulary",
  "provider_backend_id_of_declared_backend_class",
  "provider_access_custody_and_boundary_compatible_with_backend_class",
  "provider_selection_performable_this_cut",
  "provider_decision_event_within_current_session_scope",
  "provider_decision_event_own_freshness_within_declared_maximum_age",
  "provider_decision_refusal_postures_complete",
] as const satisfies readonly PondProviderDecisionCheck[]);

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

const wellFormedPrincipalRef = (value: unknown): value is string =>
  typeof value === "string" &&
  value.startsWith("principal:") &&
  value.length > "principal:".length;

const safeNonNegativeInteger = (value: unknown): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0;

// The D-P2 freshness diagnosis over the decision-event metadata (same
// ordering: metadata, then evaluation time, then maximum age, then
// future time; the fresh boundary is inclusive).
const diagnoseProviderDecisionFreshness = (
  metadata: unknown,
  evaluatedAtEpochMs: unknown,
  maximumAgeMs: unknown,
): PondAgentPresenceObservationFreshnessDiagnosis => {
  const checked = record(metadata);
  if (
    checked === null ||
    !safeNonNegativeInteger(checked.recorded_at_epoch_ms) ||
    checked.freshness_basis !== "provider_decision_event_time_only" ||
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
  const recordedAt = checked.recorded_at_epoch_ms as number;
  if (recordedAt > (evaluatedAtEpochMs as number))
    return Object.freeze({
      state: "unknown",
      reason: "observation_time_in_future",
      observationAgeMs: null,
    });
  const age = (evaluatedAtEpochMs as number) - recordedAt;
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

const providerBasisVocabulary = [
  "receiver_recorded_provider_decision_not_inferred",
  "inferred_from_reply_request",
  "asserted_by_model_completion",
  "inferred_from_provider_session",
  "inferred_from_credential_availability",
  "replayed_from_prior_provider_decision",
];

// The eight declarative-refusal posture fields.
const posturesComplete = (recordValue: Record<string, unknown>) =>
  recordValue.providerDecisionRuntimePosture ===
    "no_cognition_runtime_established_the_decision_records_a_selection_not_a_runtime" &&
  recordValue.providerDecisionInferencePosture ===
    "performs_no_inference_no_authentication_no_provider_contact_no_fallback" &&
  recordValue.providerDecisionIdentityPosture ===
    "provider_session_is_not_agent_no_agentid_created" &&
  recordValue.providerDecisionAccessPosture ===
    "declared_capability_not_granted_no_credential_admitted_no_authentication_performed" &&
  recordValue.providerDecisionBoundaryPosture ===
    "declared_policy_not_verified_runtime_evidence" &&
  recordValue.providerDecisionFallbackPosture ===
    "no_silent_fallback_no_failure_transition_authorized" &&
  recordValue.providerDecisionReplyPosture ===
    "no_reply_composed_the_decision_rides_a_recorded_reply_request_only" &&
  recordValue.providerDecisionConsumptionPosture ===
    "consumed_by_no_runtime_composer_or_transport_this_cut";

const exactProviderDecisionEventMetadata = (value: unknown): boolean => {
  const metadataValue = record(value);
  return (
    metadataValue !== null &&
    exactKeys(metadataValue, [
      "recorded_at_epoch_ms",
      "freshness_basis",
      "currentness_posture",
    ]) &&
    safeNonNegativeInteger(metadataValue.recorded_at_epoch_ms) &&
    metadataValue.freshness_basis === "provider_decision_event_time_only" &&
    metadataValue.currentness_posture ===
      "not_established_consumer_must_evaluate"
  );
};

// Valid decision-record shape only — record validity, not admission.
// The reply request under the decision is the re-run's material, not
// this check's: the re-run validates the request and its requested
// composition wholesale, and its conclusion is carried verbatim as the
// mapped echo. Selection validity rides the SELECTION-VALIDITY check
// (`provider_selection_in_declared_verbatim_vocabulary` — membership in
// the declared vocabularies), the id check, the compatibility check,
// and the performability check below — never here.
const validProviderDecisionRecord = (value: unknown): boolean => {
  const decisionValue = record(value);
  return (
    decisionValue !== null &&
    exactKeys(decisionValue, [
      "contractVersion",
      "kind",
      "principalRef",
      "providerDecisionBasis",
      "backendClass",
      "selectedBackendId",
      "accessMechanism",
      "credentialCustodyClass",
      "dataBoundaryClass",
      "supportTier",
      "providerDecisionMetadata",
      "providerDecisionRuntimePosture",
      "providerDecisionInferencePosture",
      "providerDecisionIdentityPosture",
      "providerDecisionAccessPosture",
      "providerDecisionBoundaryPosture",
      "providerDecisionFallbackPosture",
      "providerDecisionReplyPosture",
      "providerDecisionConsumptionPosture",
      "authority",
    ]) &&
    decisionValue.contractVersion ===
      "pond-cognition-provider-decision-d-p21" &&
    decisionValue.kind === "pond-cognition-provider-decision" &&
    providerBasisVocabulary.includes(String(decisionValue.providerDecisionBasis)) &&
    typeof decisionValue.backendClass === "string" &&
    typeof decisionValue.selectedBackendId === "string" &&
    typeof decisionValue.accessMechanism === "string" &&
    typeof decisionValue.credentialCustodyClass === "string" &&
    typeof decisionValue.dataBoundaryClass === "string" &&
    typeof decisionValue.supportTier === "string" &&
    exactProviderDecisionEventMetadata(decisionValue.providerDecisionMetadata) &&
    wellFormedPrincipalRef(decisionValue.principalRef) &&
    posturesComplete(decisionValue) &&
    decisionValue.authority === "none" &&
    !hasForbiddenKey(decisionValue, POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS)
  );
};

// The reply-request legs, verbatim: the decision's re-run consumes the
// frozen classifier over the SAME request legs the reply module stored
// — the 14 request keys, never the provider key (spreading the 15-key
// input would pass the decision into the re-run; the projection is the
// type-tie seam).
const fullReplyRequestLegs = (input: PondProviderDecisionInput) =>
  ({
    replyRequest: input.replyRequest,
    receiverHeldPrincipalRef: input.receiverHeldPrincipalRef,
    readGateRecord: input.readGateRecord,
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
  }) as const;

// The mapped echo shapes (typed to the frozen reassessment so a drift
// is a compile error, values carried verbatim from its fields).
interface PondMappedReplyRequestEcho {
  readonly state: PondReplyRequestDecisionAssessment["replyRequestState"];
  readonly reason: PondReplyRequestDecisionAssessment["reason"];
  readonly eventDiagnosis: PondReplyRequestDecisionAssessment["replyRequestEventFreshnessDiagnosis"];
}

interface PondMappedConversationEcho {
  readonly state: PondReplyRequestDecisionAssessment["mappedConversationState"];
  readonly reason: PondReplyRequestDecisionAssessment["mappedConversationReassessmentReason"];
}

const providerAssessment = (
  reason: PondProviderDecisionAssessment["reason"],
  providerDecisionVersion: PondProviderDecisionAssessment["providerDecisionVersion"],
  diagnosis: PondAgentPresenceObservationFreshnessDiagnosis,
  recordedProviderSelection: PondProviderDecisionAssessment["recordedProviderSelection"],
  mappedReplyRequest: PondMappedReplyRequestEcho,
  mappedConversation: PondMappedConversationEcho,
  satisfiedChecks: readonly PondProviderDecisionCheck[],
  unsatisfiedChecks: readonly PondProviderDecisionCheck[],
): PondProviderDecisionAssessment => {
  const recorded = reason === "all_provider_decision_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-cognition-provider-decision-d-p21",
    providerDecisionVersion,
    assessmentKind: "deterministic_supplied_provider_decision",
    providerDecisionState: recorded
      ? "provider_decision_recorded_session_scoped_no_runtime_established"
      : "provider_decision_not_recorded",
    reason,
    providerDecisionEventFreshnessDiagnosis: diagnosis,
    recordedProviderSelection,
    mappedReplyRequestState: mappedReplyRequest.state,
    mappedReplyRequestReassessmentReason: mappedReplyRequest.reason,
    mappedReplyRequestDiagnosis: mappedReplyRequest.eventDiagnosis,
    mappedConversationState: mappedConversation.state,
    mappedConversationReassessmentReason: mappedConversation.reason,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The retention posture: honest re-assessment after retraction — the
    // D-P20 policy posture.
    providerDecisionRetentionPosture:
      "provider_decision_is_module_state_process_lifetime_no_indefinite_retention_reassessment_honest_after_retraction" as const,
    // A recorded decision is a declaration of WHAT a future runtime
    // would ride, nothing more (see the ceiling commentary on the
    // interface for the law anchors).
    providerDecisionEstablishesCognitionRuntimeOrModelAccess: false,
    providerDecisionEstablishesAgentReplyComposition: false,
    providerDecisionEstablishesAgentIdentityOrAdmission: false,
    providerDecisionPerformsInference: false,
    providerDecisionPerformsAuthenticationOrProviderContact: false,
    providerDecisionRoutesSendsOrStoresReplyText: false,
    providerDecisionPerformsSilentFallback: false,
    providerDecisionEstablishesGrant: false,
    providerDecisionEstablishesConsequenceOrExecution: false,
    providerDecisionEstablishesAuthorityFromProse: false,
    providerDecisionEstablishesMembershipOrAdmission: false,
    providerDecisionEstablishesScope: false,
    providerDecisionConsumedThisCut: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

// The selection echo built from a validated-shape record (valid
// vocabulary membership or not — the echo carries what the receiver
// NAMED once the record shape is valid; an invalid record echoes null).
const selectionOf = (
  decisionValue: Record<string, unknown>,
): PondStageDP21RecordedProviderSelection =>
  Object.freeze({
    backendClass: String(decisionValue["backendClass"]),
    selectedBackendId: String(decisionValue["selectedBackendId"]),
    accessMechanism: String(decisionValue["accessMechanism"]),
    credentialCustodyClass: String(decisionValue["credentialCustodyClass"]),
    dataBoundaryClass: String(decisionValue["dataBoundaryClass"]),
    supportTier: String(decisionValue["supportTier"]),
  });

export function assessPondCognitionProviderDecision(
  input: PondProviderDecisionInput,
): PondProviderDecisionAssessment {
  // The fail-closed gate on the input object itself: garbage never throws
  // — a non-object input degrades to an empty record the validation and
  // re-runs refuse honestly (the D-P8 fail-closed discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondProviderDecisionInput;
  // The echoes are computed on every arm, before any cause is chosen: a
  // broken decision never unbinds the receiver's requests, and an
  // invalid arm still diagnoses (D-P13 echo discipline). The reply-
  // request re-run goes through this contract's own seam (evidence-
  // activation L109 — the independent inspection IS the re-run):
  // the frozen pond-reply-request ceremony re-runs itself over the SAME
  // request legs and the SAME re-timed evaluation pair, and inside it
  // the frozen D-P16 record admission and D-P15 establishment chain
  // re-run again.
  const requestReassessment = assessPondReplyRequestDecision(
    fullReplyRequestLegs(input),
  );
  const mappedReplyRequest: PondMappedReplyRequestEcho = {
    state: requestReassessment["replyRequestState"],
    reason: requestReassessment["reason"],
    eventDiagnosis: requestReassessment["replyRequestEventFreshnessDiagnosis"],
  };
  const mappedConversation: PondMappedConversationEcho = {
    state: requestReassessment["mappedConversationState"],
    reason: requestReassessment["mappedConversationReassessmentReason"],
  };
  // The D-P16 fallback pattern: diagnose the raw evaluation pair even
  // when the decision never becomes valid, so every arm carries an
  // honest decision-event diagnosis.
  const fallbackDiagnosis = diagnoseProviderDecisionFreshness(
    null,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );
  if (!validProviderDecisionRecord(input.providerDecision))
    return providerAssessment(
      "provider_decision_record_invalid",
      "invalid",
      fallbackDiagnosis,
      null,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks,
    );
  const decisionValue = input.providerDecision as Record<string, unknown>;
  const decisionEventMetadata = record(
    decisionValue["providerDecisionMetadata"],
  );
  const selection = selectionOf(decisionValue);
  const backendClass = String(decisionValue["backendClass"]);
  const selectedBackendId = String(decisionValue["selectedBackendId"]);
  const accessMechanism = String(decisionValue["accessMechanism"]);
  const credentialCustody = String(decisionValue["credentialCustodyClass"]);
  const dataBoundary = String(decisionValue["dataBoundaryClass"]);
  const supportTier = String(decisionValue["supportTier"]);

  // The decision event's own diagnosis first as data — but the
  // reply-request re-run's verdict outranks it in the ladder (a
  // provider decision rides a CURRENTLY recorded reply request; a
  // selection in a vacuum would be a floating cognition declaration
  // with no composition to ride), so it refuses before the event's
  // freshness is even asked, with the event diagnosis still readable.
  const decisionDiagnosis = diagnoseProviderDecisionFreshness(
    decisionEventMetadata,
    input.receiverEvaluatedAtEpochMs,
    input.receiverMaximumAgeMs,
  );

  // The frozen reply-request re-run's verdict is the verdict.
  if (
    requestReassessment["replyRequestState"] !==
    "reply_request_recorded_session_scoped_no_reply_composed"
  )
    return providerAssessment(
      "reply_request_not_currently_recorded",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks,
    );

  // Coherence refusals BEFORE performability: an incoherent selection
  // refuses at its own incoherence even though it would refuse anyway —
  // the refusal must honestly name WHY it cannot be performed.
  if (!backendClassVocabulary.includes(
      backendClass as PondCognitionBackendClassDeclaration,
    ))
    return providerAssessment(
      "provider_backend_class_unknown_fail_closed",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks,
    );
  const expectedBackendId: readonly string[] =
    backendClass === "cloud_provider"
      ? cloudProviderIdVocabulary
      : backendClass === "local_runtime"
        ? localRuntimeVocabulary
        : [""];
  if (!expectedBackendId.includes(selectedBackendId))
    return providerAssessment(
      "provider_backend_id_unknown_or_not_of_declared_backend_class",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks,
    );
  // The per-class rows are widened to readonly string[] at the read
  // site: the aliased performability narrowing later would otherwise
  // make the tuple `.includes` casts degenerate to `never`.
  const classMechanisms: readonly string[] =
    classMechanismVocabulary[
      backendClass as keyof typeof classMechanismVocabulary
    ];
  if (accessMechanismVocabulary.indexOf(
      accessMechanism as PondCognitionAccessMechanismDeclaration,
    ) === -1 ||
    !classMechanisms.includes(accessMechanism))
    return providerAssessment(
      "provider_access_mechanism_not_compatible_with_declared_backend_class",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks,
    );
  const classCustody: readonly string[] =
    classCustodyVocabulary[
      backendClass as keyof typeof classCustodyVocabulary
    ];
  if (credentialCustodyVocabulary.indexOf(
      credentialCustody as PondCredentialCustodyClassDeclaration,
    ) === -1 ||
    !classCustody.includes(credentialCustody))
    return providerAssessment(
      "provider_credential_custody_not_compatible_with_declared_backend_class",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks,
    );
  const expectedBoundary = classDataBoundary[
    backendClass as keyof typeof classDataBoundary
  ];
  if (dataBoundary !== expectedBoundary)
    return providerAssessment(
      "provider_data_boundary_not_compatible_with_declared_backend_class",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks,
    );
  // A support tier OUTSIDE the declared vocabulary makes the declared
  // selection non-performable (no tier exists to stand under) — the
  // refusal is honest at the performability cause with the selection
  // echoed: the tier is not class-scoped, so it is not a coherence
  // refusal, and no third cause exists for it (plan deviation).
  if (!supportTierVocabulary.includes(
      supportTier as PondCognitionSupportTierDeclaration,
    ))
    return providerAssessment(
      "provider_selection_declared_not_performable_this_cut",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks,
    );

  // Performability: only the local-runtime selection records here —
  // every cloud or community selection is declared vocabulary that
  // refuses at its dedicated cause with the selection echoed. No
  // credential path exists, no gateway endpoint exists, and a model or
  // harness reference without a performed provider contact is an
  // unverified claim.
  const performable = POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS[0];
  const selectionIsPerformable =
    backendClass === performable.backendClass &&
    selectedBackendId === performable.selectedBackendId &&
    accessMechanism === performable.accessMechanism &&
    credentialCustody === performable.credentialCustodyClass &&
    dataBoundary === performable.dataBoundaryClass &&
    supportTier === performable.supportTier;
  if (!selectionIsPerformable)
    return providerAssessment(
      "provider_selection_declared_not_performable_this_cut",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks,
    );

  // The decision event's own freshness. The decision must postdate the
  // request it rides (a selection before its request is a floating
  // declaration — the scope check below carries that), so on the frozen
  // chain the decision event is YOUNGER than every leg event — the
  // newest-event arithmetic of the later lanes does not hold here too,
  // freshness is evaluated honestly on the decision event alone against
  // the shared evaluation pair (the D-P20 policy-event honesty).
  if (decisionDiagnosis.state !== "fresh")
    return providerAssessment(
      "provider_decision_event_not_session_current",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks,
    );

  // Session-scope binding for the decision event: the recorded decision
  // must postdate the current session's establishment event, the
  // composition event it rides, and the reply-request event it rides —
  // a decision recorded before the session, the composition, or the
  // request is not in the current scope. The re-run validated the
  // request above, and the request's re-run validated the composition,
  // so their metadata is read through those validated forms (the
  // D-P18 scope pattern one lane earlier).
  const establishmentMetadata = record(
    (input.establishmentRecord as Record<string, unknown>)[
      "establishmentMetadata"
    ],
  );
  const requestValue = input.replyRequest as Record<string, unknown>;
  const requestedMetadata = record(
    (record(requestValue["requestedConversationRecord"]) ??
      {})["conversationRecordMetadata"] as Record<string, unknown>,
  );
  const requestEventMetadata = record(requestValue["replyRequestMetadata"]);
  const establishedAt = establishmentMetadata?.[
    "established_at_epoch_ms"
  ] as number | undefined;
  const composedAt = (requestedMetadata ?? {})[
    "composed_at_epoch_ms"
  ] as number | undefined;
  const requestedAt = (requestEventMetadata ?? {})[
    "requested_at_epoch_ms"
  ] as number | undefined;
  const decisionRecordedAt = decisionEventMetadata?.[
    "recorded_at_epoch_ms"
  ] as number | undefined;
  if (
    typeof establishedAt !== "number" ||
    typeof composedAt !== "number" ||
    typeof requestedAt !== "number" ||
    typeof decisionRecordedAt !== "number" ||
    decisionRecordedAt < establishedAt ||
    decisionRecordedAt < composedAt ||
    decisionRecordedAt < requestedAt
  )
    return providerAssessment(
      "provider_decision_event_not_of_the_current_session_scope",
      "pond-cognition-provider-decision-d-p21",
      decisionDiagnosis,
      selection,
      mappedReplyRequest,
      mappedConversation,
      [],
      providerDecisionChecks,
    );

  // The remaining declarative checks, evaluated honestly over the
  // validated record and the re-run verdict: the refused bases fold here
  // with the unsatisfied check names readable (L49-55 — every leg green
  // except the declarative checks that failed), never behind a defensive
  // literal.
  const values = [
    true,
    decisionValue["principalRef"] === input.receiverHeldPrincipalRef &&
      wellFormedPrincipalRef(input.receiverHeldPrincipalRef),
    decisionValue["providerDecisionBasis"] ===
      "receiver_recorded_provider_decision_not_inferred",
    requestReassessment["replyRequestState"] ===
      "reply_request_recorded_session_scoped_no_reply_composed",
    backendClassVocabulary.includes(
      backendClass as PondCognitionBackendClassDeclaration,
    ) && expectedBackendId.includes(selectedBackendId),
    expectedBackendId.includes(selectedBackendId),
    classMechanisms.includes(accessMechanism) &&
      classCustody.includes(credentialCustody) &&
      dataBoundary === expectedBoundary &&
      supportTierVocabulary.includes(
        supportTier as PondCognitionSupportTierDeclaration,
      ),
    selectionIsPerformable,
    typeof establishedAt === "number" &&
      typeof composedAt === "number" &&
      typeof requestedAt === "number" &&
      typeof decisionRecordedAt === "number" &&
      decisionRecordedAt >= establishedAt &&
      decisionRecordedAt >= composedAt &&
      decisionRecordedAt >= requestedAt,
    decisionDiagnosis.state === "fresh",
    posturesComplete(decisionValue),
  ];
  const satisfied = providerDecisionChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = providerDecisionChecks.filter(
    (_, index) => values[index] !== true,
  );
  return providerAssessment(
    unsatisfied.length === 0
      ? "all_provider_decision_checks_satisfied"
      : "receiver_provider_decision_proof_incomplete",
    "pond-cognition-provider-decision-d-p21",
    decisionDiagnosis,
    selection,
    mappedReplyRequest,
    mappedConversation,
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for the lane's substrate consumption: the
// re-declared vocabularies are Equal-pinned to the frozen substrate
// types, so a substrate vocabulary drift is a compile error here — the
// substrate stays the declared source of the selection vocabulary, this
// contract only consumes it verbatim (no backend profile, no model or
// harness reference, no runtime).
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageDP21Invariant_BackendClassesVocabularyVerbatim = Assert<
  Equal<PondCognitionBackendClassDeclaration, PondCognitionBackendClass>
>;
export type PondStageDP21Invariant_CloudProviderIdsVerbatim = Assert<
  Equal<PondCloudProviderIdDeclaration, PondCloudProviderId>
>;
export type PondStageDP21Invariant_LocalRuntimeIdVerbatim = Assert<
  Equal<PondLocalRuntimeIdDeclaration, PondLocalRuntimeId>
>;
export type PondStageDP21Invariant_AccessMechanismsVerbatim = Assert<
  Equal<PondCognitionAccessMechanismDeclaration, PondCognitionAccessMechanism>
>;
export type PondStageDP21Invariant_CredentialCustodyClassesVerbatim = Assert<
  Equal<PondCredentialCustodyClassDeclaration, PondCredentialCustodyClass>
>;
export type PondStageDP21Invariant_DataBoundaryClassesVerbatim = Assert<
  Equal<PondCognitionDataBoundaryClassDeclaration, PondCognitionDataBoundaryClass>
>;
export type PondStageDP21Invariant_SupportTiersVerbatim = Assert<
  Equal<PondCognitionSupportTierDeclaration, PondCognitionSupportTier>
>;
// The performable-selection constant carries exactly the one selection.
export type PondStageDP21Invariant_PerformableSelectionsExactlyOne = Assert<
  Equal<
    typeof POND_STAGE_DP21_PERFORMABLE_PROVIDER_SELECTIONS,
    readonly [
      Readonly<{
        backendClass: "local_runtime";
        selectedBackendId: "ollama";
        accessMechanism: "local_runtime";
        credentialCustodyClass: "local_operator";
        dataBoundaryClass: "local_operator_controlled";
        supportTier: "sovereign_local";
      }>,
    ]
  >
>;