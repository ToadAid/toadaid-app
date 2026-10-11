// Stage D-P25: generic-agent front-face projection foundation.
//
// This is an inert, frontend-only projection seam. It proves that Pond can
// present agents supplied by a replaceable connection-provider projection
// without knowing Trading Desk, Agent0, Mirror Desktop Bridge, HTTP, STDIO,
// credentials, or an agent runtime. The source in this cut is an in-memory
// fixture only. Selection changes presentation only.
//
// Canonical basis: agent identity is not admission; admission is not
// capability or authority; declared capability is not granted capability;
// transport is not identity; a message does not grant authority. Pond
// presents and coordinates governed truth but does not host or authorize an
// agent brain. No admission backend, intake transport, delivery-state owner,
// credential custody, or add-on activation is selected here.

export const POND_STAGE_DP25_GENERIC_AGENT_FRONT_FACE_CONTRACT_VERSION =
  "pond-generic-agent-front-face-d-p25" as const;

export const POND_STAGE_DP25_AGENT_PROFILES = Object.freeze([
  "personal_agent",
  "community_agent",
  "project_agent",
  "specialist_agent",
  "remote_external_agent",
] as const);

export const POND_STAGE_DP25_CONNECTION_STATES = Object.freeze([
  "fixture_disconnected",
  "fixture_discovered",
  "fixture_not_admitted",
  "fixture_available",
  "fixture_busy",
  "fixture_unavailable",
  "fixture_failed",
] as const);

export const POND_STAGE_DP25_ADMISSION_STATES = Object.freeze([
  "not_established",
  "active",
  "revoked",
  "unknown",
] as const);

export const POND_STAGE_DP25_EXTENSION_IDS = Object.freeze([
  "toadaid.front-face.base-chat",
  "toadaid.addon.knowledge-forge",
] as const);

export type PondStageDP25AgentProfile =
  (typeof POND_STAGE_DP25_AGENT_PROFILES)[number];
export type PondStageDP25ConnectionState =
  (typeof POND_STAGE_DP25_CONNECTION_STATES)[number];
export type PondStageDP25AdmissionState =
  (typeof POND_STAGE_DP25_ADMISSION_STATES)[number];
export type PondStageDP25ExtensionId =
  (typeof POND_STAGE_DP25_EXTENSION_IDS)[number];

export interface PondStageDP25AgentProjection {
  readonly contractVersion: typeof POND_STAGE_DP25_GENERIC_AGENT_FRONT_FACE_CONTRACT_VERSION;
  readonly kind: "pond-generic-agent-front-face-projection";
  readonly projectionSourceId: string;
  readonly projectionSourceKind: "in_memory_fixture_only";
  readonly agentId: string;
  readonly displayName: string;
  readonly profile: PondStageDP25AgentProfile;
  readonly installationId: string | null;
  readonly connectionState: PondStageDP25ConnectionState;
  readonly admissionState: PondStageDP25AdmissionState;
  readonly declaredCapabilityRefs: readonly string[];
  readonly projectionPosture:
    "frontend_fixture_projection_not_discovery_identity_proof_or_current_truth";
  readonly declaredCapabilityPosture: "declared_not_granted";
  readonly admissionPosture:
    "projected_state_not_an_admission_decision_or_admission_backend";
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

export interface PondStageDP25ExtensionPresentation {
  readonly extensionId: PondStageDP25ExtensionId;
  readonly label: string;
  readonly declaredBySelectedAgent: boolean;
  readonly state:
    | "preview_available_no_transport"
    | "declared_but_withheld_no_activation"
    | "not_declared";
  readonly posture:
    | "base_chat_target_preview_only_no_message_composition_or_delivery"
    | "addon_surface_withheld_no_live_activation"
    | "capability_not_declared_by_projection";
}

export interface PondStageDP25SelectedAgentPresentation {
  readonly agentId: string;
  readonly displayName: string;
  readonly profile: PondStageDP25AgentProfile;
  readonly installationId: string | null;
  readonly projectionSourceId: string;
  readonly connectionState: PondStageDP25ConnectionState;
  readonly admissionState: PondStageDP25AdmissionState;
  readonly declaredCapabilityRefs: readonly string[];
}

export interface PondStageDP25FrontFaceAssessment {
  readonly contractVersion: typeof POND_STAGE_DP25_GENERIC_AGENT_FRONT_FACE_CONTRACT_VERSION;
  readonly projectionState:
    | "generic_agent_front_face_presented_fixture_only"
    | "generic_agent_front_face_refused";
  readonly reason:
    | "generic_agent_projection_input_invalid"
    | "selected_agent_not_found"
    | "generic_agent_front_face_fixture_projection_satisfied";
  readonly selectedAgent: PondStageDP25SelectedAgentPresentation | null;
  readonly extensions: readonly PondStageDP25ExtensionPresentation[];
  readonly selectionChangesPresentationOnly: true;
  readonly agentIdentityAcceptedAsAdmission: false;
  readonly projectedAdmissionAcceptedAsAdmissionDecision: false;
  readonly declaredCapabilityAcceptedAsGrant: false;
  readonly connectionOpened: false;
  readonly credentialStoredOrProjected: false;
  readonly messageComposedOrDelivered: false;
  readonly agentInvoked: false;
  readonly addonActivated: false;
  readonly currentTruthEstablished: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

export interface PondStageDP25FrontFaceInput {
  readonly projections: unknown;
  readonly selectedAgentId: unknown;
}

const projectionKeys = Object.freeze([
  "contractVersion",
  "kind",
  "projectionSourceId",
  "projectionSourceKind",
  "agentId",
  "displayName",
  "profile",
  "installationId",
  "connectionState",
  "admissionState",
  "declaredCapabilityRefs",
  "projectionPosture",
  "declaredCapabilityPosture",
  "admissionPosture",
  "runtimeActivationPosture",
  "authority",
] as const);

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : null;

const exactKeys = (value: Record<string, unknown>, expected: readonly string[]) =>
  Object.keys(value).length === expected.length &&
  [...expected].every((key) => Object.hasOwn(value, key));

const boundedString = (value: unknown, maximum: number): value is string =>
  typeof value === "string" && value.length > 0 && value.length <= maximum;

const distinctBoundedStrings = (
  value: unknown,
  maximumEntries: number,
  maximumLength: number,
): value is readonly string[] =>
  Array.isArray(value) &&
  value.length <= maximumEntries &&
  value.every((entry) => boundedString(entry, maximumLength)) &&
  new Set(value).size === value.length;

const validProjection = (value: unknown): value is PondStageDP25AgentProjection => {
  const candidate = record(value);
  return candidate !== null &&
    exactKeys(candidate, projectionKeys) &&
    candidate.contractVersion === POND_STAGE_DP25_GENERIC_AGENT_FRONT_FACE_CONTRACT_VERSION &&
    candidate.kind === "pond-generic-agent-front-face-projection" &&
    boundedString(candidate.projectionSourceId, 128) &&
    candidate.projectionSourceKind === "in_memory_fixture_only" &&
    boundedString(candidate.agentId, 256) &&
    boundedString(candidate.displayName, 80) &&
    POND_STAGE_DP25_AGENT_PROFILES.includes(candidate.profile as PondStageDP25AgentProfile) &&
    (candidate.installationId === null || boundedString(candidate.installationId, 256)) &&
    POND_STAGE_DP25_CONNECTION_STATES.includes(candidate.connectionState as PondStageDP25ConnectionState) &&
    POND_STAGE_DP25_ADMISSION_STATES.includes(candidate.admissionState as PondStageDP25AdmissionState) &&
    distinctBoundedStrings(candidate.declaredCapabilityRefs, 32, 128) &&
    candidate.projectionPosture ===
      "frontend_fixture_projection_not_discovery_identity_proof_or_current_truth" &&
    candidate.declaredCapabilityPosture === "declared_not_granted" &&
    candidate.admissionPosture ===
      "projected_state_not_an_admission_decision_or_admission_backend" &&
    candidate.runtimeActivationPosture === "not_included" &&
    candidate.authority === "none";
};

const extensionsFor = (
  selected: PondStageDP25AgentProjection,
): readonly PondStageDP25ExtensionPresentation[] => Object.freeze([
  Object.freeze({
    extensionId: "toadaid.front-face.base-chat",
    label: "Base Chat",
    declaredBySelectedAgent: selected.declaredCapabilityRefs.includes(
      "toadaid.front-face.base-chat",
    ),
    state: "preview_available_no_transport",
    posture: "base_chat_target_preview_only_no_message_composition_or_delivery",
  }),
  Object.freeze(
    selected.declaredCapabilityRefs.includes("toadaid.addon.knowledge-forge")
      ? {
          extensionId: "toadaid.addon.knowledge-forge",
          label: "Knowledge Forge",
          declaredBySelectedAgent: true,
          state: "declared_but_withheld_no_activation",
          posture: "addon_surface_withheld_no_live_activation",
        }
      : {
          extensionId: "toadaid.addon.knowledge-forge",
          label: "Knowledge Forge",
          declaredBySelectedAgent: false,
          state: "not_declared",
          posture: "capability_not_declared_by_projection",
        },
  ),
]);

const refused = (
  reason: PondStageDP25FrontFaceAssessment["reason"],
): PondStageDP25FrontFaceAssessment => Object.freeze({
  contractVersion: POND_STAGE_DP25_GENERIC_AGENT_FRONT_FACE_CONTRACT_VERSION,
  projectionState: "generic_agent_front_face_refused",
  reason,
  selectedAgent: null,
  extensions: Object.freeze([]),
  selectionChangesPresentationOnly: true,
  agentIdentityAcceptedAsAdmission: false,
  projectedAdmissionAcceptedAsAdmissionDecision: false,
  declaredCapabilityAcceptedAsGrant: false,
  connectionOpened: false,
  credentialStoredOrProjected: false,
  messageComposedOrDelivered: false,
  agentInvoked: false,
  addonActivated: false,
  currentTruthEstablished: false,
  runtimeActivationPosture: "not_included",
  authority: "none",
});

export function assessPondGenericAgentFrontFace(
  input: PondStageDP25FrontFaceInput,
): PondStageDP25FrontFaceAssessment {
  if (
    !Array.isArray(input.projections) ||
    input.projections.length === 0 ||
    input.projections.length > 32 ||
    !input.projections.every(validProjection) ||
    !boundedString(input.selectedAgentId, 256)
  ) return refused("generic_agent_projection_input_invalid");

  const projections = input.projections as readonly PondStageDP25AgentProjection[];
  if (new Set(projections.map((entry) => entry.agentId)).size !== projections.length)
    return refused("generic_agent_projection_input_invalid");

  const selected = projections.find((entry) => entry.agentId === input.selectedAgentId);
  if (selected === undefined) return refused("selected_agent_not_found");

  return Object.freeze({
    contractVersion: POND_STAGE_DP25_GENERIC_AGENT_FRONT_FACE_CONTRACT_VERSION,
    projectionState: "generic_agent_front_face_presented_fixture_only",
    reason: "generic_agent_front_face_fixture_projection_satisfied",
    selectedAgent: Object.freeze({
      agentId: selected.agentId,
      displayName: selected.displayName,
      profile: selected.profile,
      installationId: selected.installationId,
      projectionSourceId: selected.projectionSourceId,
      connectionState: selected.connectionState,
      admissionState: selected.admissionState,
      declaredCapabilityRefs: Object.freeze([...selected.declaredCapabilityRefs]),
    }),
    extensions: extensionsFor(selected),
    selectionChangesPresentationOnly: true,
    agentIdentityAcceptedAsAdmission: false,
    projectedAdmissionAcceptedAsAdmissionDecision: false,
    declaredCapabilityAcceptedAsGrant: false,
    connectionOpened: false,
    credentialStoredOrProjected: false,
    messageComposedOrDelivered: false,
    agentInvoked: false,
    addonActivated: false,
    currentTruthEstablished: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
}

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

export type PondStageDP25Invariant_AllEffectCeilingsFalse = Assert<Equal<[
  PondStageDP25FrontFaceAssessment["agentIdentityAcceptedAsAdmission"],
  PondStageDP25FrontFaceAssessment["projectedAdmissionAcceptedAsAdmissionDecision"],
  PondStageDP25FrontFaceAssessment["declaredCapabilityAcceptedAsGrant"],
  PondStageDP25FrontFaceAssessment["connectionOpened"],
  PondStageDP25FrontFaceAssessment["credentialStoredOrProjected"],
  PondStageDP25FrontFaceAssessment["messageComposedOrDelivered"],
  PondStageDP25FrontFaceAssessment["agentInvoked"],
  PondStageDP25FrontFaceAssessment["addonActivated"],
  PondStageDP25FrontFaceAssessment["currentTruthEstablished"],
], [false, false, false, false, false, false, false, false, false]>>;

export type PondStageDP25Invariant_ActivationAndAuthorityRemainAbsent = Assert<
  Equal<[
    PondStageDP25FrontFaceAssessment["runtimeActivationPosture"],
    PondStageDP25FrontFaceAssessment["authority"],
  ], ["not_included", "none"]>
>;
