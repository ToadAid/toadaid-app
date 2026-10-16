// Stage D-P32: the agent docking lane — Pond-side admission-evidence
// presentation.
//
// This is an inert, frontend-only fixture seam. It presents HOW a community
// or remote-external agent would dock into ToadAid — the canonical
// admission sequence, the evidence it must present, who may admit, what an
// admission record must describe, and the standing-intake refusal wall —
// as declared fixture law over docking briefs. It performs no step,
// verifies no evidence, makes no admission decision, issues no AgentId,
// opens no intake channel, and holds no receiver. Admission remains a
// human-sovereign, scope-governed decision; the connection provider (the
// real intake boundary) remains separately assigned and unimplemented.
//
// Canonical basis (ToadAid/toadaid-architecture at
// 53de8698a6da1c14da752b637b825ca80ebd9d0f): agent-identity-and-specialist-
// admission-contract.md L136-146 (the remote-agent admission sequence and
// the NO LOCAL DIRECT AUTHORITY default), L151-158 (who may admit; evidence
// and decision separate), L161-172 (the minimum admission-record shape),
// L176-184 (admission is not joining), L190-194 (the community-agent
// constraint classes and the remote-external posture), L206-218 (the
// profile interlock and the standing-intake precondition — refusal is the
// default, not a configurable choice), L226-234 (revocation and e-stop
// dominance), delegated-authority-and-capability-grant-contract.md
// L611-619 (NO LOCAL DIRECT AUTHORITY; the full bounded-consequence
// sequence; advertisement is not a Grant), and the runtime-component
// allocation blueprint (transport plane: the real intake boundary is MCP,
// Bridge, or another conforming trusted host — never Pond).

export const POND_STAGE_DP32_AGENT_DOCKING_LANE_CONTRACT_VERSION =
  "pond-agent-docking-lane-d-p32" as const;

export const POND_STAGE_DP32_DOCKING_PROFILES = Object.freeze([
  "community_agent",
  "remote_external_agent",
] as const);

export const POND_STAGE_DP32_EVIDENCE_CLASSES = Object.freeze([
  "a2a_agent_card",
  "cryptographic_signature",
  "mcp_or_service_identity",
  "wallet_address",
  "erc8004_identity",
  "dns_or_domain_binding",
  "provider_identity",
  "deployment_identity",
] as const);

export const POND_STAGE_DP32_ADMISSION_STATES = Object.freeze([
  "not_established",
  "active",
  "revoked",
  "unknown",
] as const);

export const POND_STAGE_DP32_SEQUENCE_STEPS = Object.freeze([
  "external_identity_evidence",
  "evidence_verification",
  "local_agentid_and_binding_decision",
  "explicit_scope_relationship",
  "capability_eligibility",
  "separate_current_capability_authorization",
] as const);

export type PondStageDP32DockingProfile =
  (typeof POND_STAGE_DP32_DOCKING_PROFILES)[number];
export type PondStageDP32EvidenceClass =
  (typeof POND_STAGE_DP32_EVIDENCE_CLASSES)[number];
export type PondStageDP32AdmissionState =
  (typeof POND_STAGE_DP32_ADMISSION_STATES)[number];
export type PondStageDP32SequenceStep =
  (typeof POND_STAGE_DP32_SEQUENCE_STEPS)[number];

export interface PondStageDP32PresentedEvidence {
  readonly evidenceClass: PondStageDP32EvidenceClass;
  readonly presentedRef: string;
  readonly verificationBasis: "declared_not_verified";
}

export interface PondStageDP32DockingBrief {
  readonly contractVersion: typeof POND_STAGE_DP32_AGENT_DOCKING_LANE_CONTRACT_VERSION;
  readonly kind: "pond-agent-docking-brief";
  readonly agentId: string;
  readonly displayName: string;
  readonly profile: PondStageDP32DockingProfile;
  readonly admissionState: PondStageDP32AdmissionState;
  readonly presentedEvidence: readonly PondStageDP32PresentedEvidence[];
  readonly requestedScopeRelationshipRef: string;
  readonly declaredCapabilityRefs: readonly string[];
  readonly dockingPosture:
    "fixture_dock_brief_not_a_dock_operation_admission_decision_or_intake";
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

export interface PondStageDP32SequencePresentation {
  readonly stepId: PondStageDP32SequenceStep;
  readonly stepLabel: string;
  readonly stepPosture: "declared_not_performed";
}

export interface PondStageDP32EvidencePresentation {
  readonly evidenceClass: PondStageDP32EvidenceClass;
  readonly evidenceClassLabel: string;
  readonly presentedRef: string;
  readonly verificationBasis: "declared_not_verified";
}

export interface PondStageDP32DockingWalls {
  readonly whoMayAdmitPosture:
    "human_governing_authority_of_the_relevant_scope_no_agent_provider_transport_message_attestation_or_automated_rule";
  readonly admissionDecisionPosture: "not_made_human_sovereign_decision_required";
  readonly standingIntakePosture:
    "refused_no_standing_intake_path_for_an_unadmitted_sender_the_default_not_a_configurable_choice";
  readonly profileInterlockPosture:
    "admitted_remote_origin_serves_as_a_community_agent_profile_instance_under_the_same_law";
  readonly consequencePathPosture:
    "identity_admitted_scope_grant_policy_approval_sequence_unchanged_and_untouched";
  readonly revocationEstopPosture:
    "revocation_and_external_estop_dominant_across_providers_and_transports";
}

export interface PondStageDP32DockingAssessment {
  readonly contractVersion: typeof POND_STAGE_DP32_AGENT_DOCKING_LANE_CONTRACT_VERSION;
  readonly dockingLaneState:
    | "agent_docking_lane_presented_fixture_only"
    | "agent_docking_lane_refused";
  readonly reason:
    | "docking_brief_input_invalid"
    | "agent_docking_lane_fixture_projection_satisfied";
  readonly presentedBrief: {
    readonly agentId: string;
    readonly displayName: string;
    readonly profile: PondStageDP32DockingProfile;
    readonly admissionState: PondStageDP32AdmissionState;
    readonly requestedScopeRelationshipRef: string;
  } | null;
  readonly sequence: readonly PondStageDP32SequencePresentation[];
  readonly presentedEvidence: readonly PondStageDP32EvidencePresentation[];
  readonly walls: PondStageDP32DockingWalls;
  readonly dockingChangesPresentationOnly: true;
  readonly admissionDecisionMade: false;
  readonly admissionRecordIssued: false;
  readonly evidenceVerified: false;
  readonly agentIdIssued: false;
  readonly scopeRelationshipEstablished: false;
  readonly standingIntakeOpened: false;
  readonly membershipCreated: false;
  readonly grantIssued: false;
  readonly capabilityAuthorized: false;
  readonly credentialStoredOrProjected: false;
  readonly messageComposedOrDelivered: false;
  readonly agentInvoked: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

export interface PondStageDP32DockingInput {
  readonly brief: unknown;
}

const stepLabels: Readonly<Record<PondStageDP32SequenceStep, string>> =
  Object.freeze({
    external_identity_evidence: "external identity evidence",
    evidence_verification: "verification",
    local_agentid_and_binding_decision: "local AgentId and binding decision",
    explicit_scope_relationship: "explicit scope relationship where admitted",
    capability_eligibility: "capability eligibility",
    separate_current_capability_authorization:
      "separate current capability authorization",
  });

export const evidenceClassLabelOf = (value: PondStageDP32EvidenceClass): string =>
  ({
    a2a_agent_card: "A2A AgentCard",
    cryptographic_signature: "cryptographic signature",
    mcp_or_service_identity: "MCP or service identity",
    wallet_address: "wallet address",
    erc8004_identity: "ERC-8004 identity",
    dns_or_domain_binding: "DNS or domain binding",
    provider_identity: "provider identity",
    deployment_identity: "deployment identity",
  })[value];

const briefKeys = Object.freeze([
  "contractVersion",
  "kind",
  "agentId",
  "displayName",
  "profile",
  "admissionState",
  "presentedEvidence",
  "requestedScopeRelationshipRef",
  "declaredCapabilityRefs",
  "dockingPosture",
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

const validEvidence = (value: unknown): value is PondStageDP32PresentedEvidence => {
  const candidate = record(value);
  return candidate !== null &&
    exactKeys(candidate, ["evidenceClass", "presentedRef", "verificationBasis"]) &&
    POND_STAGE_DP32_EVIDENCE_CLASSES.includes(
      candidate.evidenceClass as PondStageDP32EvidenceClass,
    ) &&
    boundedString(candidate.presentedRef, 256) &&
    candidate.verificationBasis === "declared_not_verified";
};

const validBrief = (value: unknown): value is PondStageDP32DockingBrief => {
  const candidate = record(value);
  return candidate !== null &&
    exactKeys(candidate, briefKeys) &&
    candidate.contractVersion === POND_STAGE_DP32_AGENT_DOCKING_LANE_CONTRACT_VERSION &&
    candidate.kind === "pond-agent-docking-brief" &&
    boundedString(candidate.agentId, 256) &&
    boundedString(candidate.displayName, 80) &&
    POND_STAGE_DP32_DOCKING_PROFILES.includes(candidate.profile as PondStageDP32DockingProfile) &&
    POND_STAGE_DP32_ADMISSION_STATES.includes(candidate.admissionState as PondStageDP32AdmissionState) &&
    Array.isArray(candidate.presentedEvidence) &&
    candidate.presentedEvidence.length <= 8 &&
    candidate.presentedEvidence.every(validEvidence) &&
    new Set(
      (candidate.presentedEvidence as PondStageDP32PresentedEvidence[])
        .map((entry) => entry.presentedRef),
    ).size === candidate.presentedEvidence.length &&
    boundedString(candidate.requestedScopeRelationshipRef, 256) &&
    distinctBoundedStrings(candidate.declaredCapabilityRefs, 32, 128) &&
    candidate.dockingPosture ===
      "fixture_dock_brief_not_a_dock_operation_admission_decision_or_intake" &&
    candidate.runtimeActivationPosture === "not_included" &&
    candidate.authority === "none";
};

const walls = Object.freeze({
  whoMayAdmitPosture:
    "human_governing_authority_of_the_relevant_scope_no_agent_provider_transport_message_attestation_or_automated_rule",
  admissionDecisionPosture: "not_made_human_sovereign_decision_required",
  standingIntakePosture:
    "refused_no_standing_intake_path_for_an_unadmitted_sender_the_default_not_a_configurable_choice",
  profileInterlockPosture:
    "admitted_remote_origin_serves_as_a_community_agent_profile_instance_under_the_same_law",
  consequencePathPosture:
    "identity_admitted_scope_grant_policy_approval_sequence_unchanged_and_untouched",
  revocationEstopPosture:
    "revocation_and_external_estop_dominant_across_providers_and_transports",
} as const);

const refused = (): PondStageDP32DockingAssessment => Object.freeze({
  contractVersion: POND_STAGE_DP32_AGENT_DOCKING_LANE_CONTRACT_VERSION,
  dockingLaneState: "agent_docking_lane_refused",
  reason: "docking_brief_input_invalid",
  presentedBrief: null,
  sequence: Object.freeze([]),
  presentedEvidence: Object.freeze([]),
  walls,
  dockingChangesPresentationOnly: true,
  admissionDecisionMade: false,
  admissionRecordIssued: false,
  evidenceVerified: false,
  agentIdIssued: false,
  scopeRelationshipEstablished: false,
  standingIntakeOpened: false,
  membershipCreated: false,
  grantIssued: false,
  capabilityAuthorized: false,
  credentialStoredOrProjected: false,
  messageComposedOrDelivered: false,
  agentInvoked: false,
  runtimeActivationPosture: "not_included",
  authority: "none",
});

export function assessPondAgentDockingBrief(
  input: PondStageDP32DockingInput,
): PondStageDP32DockingAssessment {
  if (!validBrief(input.brief)) return refused();

  const brief = input.brief;
  return Object.freeze({
    contractVersion: POND_STAGE_DP32_AGENT_DOCKING_LANE_CONTRACT_VERSION,
    dockingLaneState: "agent_docking_lane_presented_fixture_only",
    reason: "agent_docking_lane_fixture_projection_satisfied",
    presentedBrief: Object.freeze({
      agentId: brief.agentId,
      displayName: brief.displayName,
      profile: brief.profile,
      admissionState: brief.admissionState,
      requestedScopeRelationshipRef: brief.requestedScopeRelationshipRef,
    }),
    sequence: Object.freeze(
      POND_STAGE_DP32_SEQUENCE_STEPS.map((stepId) => Object.freeze({
        stepId,
        stepLabel: stepLabels[stepId],
        stepPosture: "declared_not_performed",
      })),
    ),
    presentedEvidence: Object.freeze(
      brief.presentedEvidence.map((entry) => Object.freeze({
        evidenceClass: entry.evidenceClass,
        evidenceClassLabel: evidenceClassLabelOf(entry.evidenceClass),
        presentedRef: entry.presentedRef,
        verificationBasis: entry.verificationBasis,
      })),
    ),
    walls,
    dockingChangesPresentationOnly: true,
    admissionDecisionMade: false,
    admissionRecordIssued: false,
    evidenceVerified: false,
    agentIdIssued: false,
    scopeRelationshipEstablished: false,
    standingIntakeOpened: false,
    membershipCreated: false,
    grantIssued: false,
    capabilityAuthorized: false,
    credentialStoredOrProjected: false,
    messageComposedOrDelivered: false,
    agentInvoked: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
}

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

export type PondStageDP32Invariant_AllEffectCeilingsFalse = Assert<Equal<[
  PondStageDP32DockingAssessment["admissionDecisionMade"],
  PondStageDP32DockingAssessment["admissionRecordIssued"],
  PondStageDP32DockingAssessment["evidenceVerified"],
  PondStageDP32DockingAssessment["agentIdIssued"],
  PondStageDP32DockingAssessment["scopeRelationshipEstablished"],
  PondStageDP32DockingAssessment["standingIntakeOpened"],
  PondStageDP32DockingAssessment["membershipCreated"],
  PondStageDP32DockingAssessment["grantIssued"],
  PondStageDP32DockingAssessment["capabilityAuthorized"],
  PondStageDP32DockingAssessment["credentialStoredOrProjected"],
  PondStageDP32DockingAssessment["messageComposedOrDelivered"],
  PondStageDP32DockingAssessment["agentInvoked"],
], [false, false, false, false, false, false, false, false, false, false, false, false]>>;

export type PondStageDP32Invariant_ActivationAndAuthorityRemainAbsent = Assert<
  Equal<[
    PondStageDP32DockingAssessment["runtimeActivationPosture"],
    PondStageDP32DockingAssessment["authority"],
  ], ["not_included", "none"]>
>;