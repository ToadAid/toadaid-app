// Stage D-P14 counterpart join declaration.
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture: scope
// sovereignty law 9 ("A shared scope is an explicitly joined collaborative
// scope", L74; L83) makes any collaborative reading an explicitly joined
// scope, and L205 reserves every future exceptional administrative read to
// "separately defined authority, scope, audience, audit, and human-
// governed policy". Social-control-plane L102 holds that joining does not
// merge scopes; L255-257 hold that agents may collaborate while humans
// remain sovereign and shared scopes own only what is explicitly theirs;
// L195 holds that routing is not authorization. Trusted-channel L100: the
// request is not itself the grant. Community-agent-fabric L260: an
// authenticated peer is not an authorized peer; L437 permits a future
// collaboration to remain entirely informational. Agent-identity L173:
// agent-to-agent communication is a later contract — so this declaration
// joins NO agent communication and NO memory or truth vocabulary; it
// declares a session-scoped, receiver-owned structural-counterparty join.
//
// The counterpart principal here is the first Stage D fixture to name a
// second principal ref: `principal:fixture:stage-d-p14:counterpart-
// principal`. The ref is receiver-recorded and pre-existing-by-declaration
// — the counterpart carries NO D-P9 issuance, NO ERC-8004 mapping, NO
// D-P10 activation, and this cut issues none of them. A claimed-issued
// counterpart posture is a refused sibling: the join's own issued-id check
// refuses it, and the D-P14 gate's chain re-run refuses a smuggled
// issuance record independently (the no-second-identity widening proof).
//
// Consent is never claimed: the fixed consent posture records a
// receiver-owned session join only. The counterpart's personal state is
// not merged and not read by this join; memory/narrative/transcript lanes
// are structurally excluded; the join requires no grant and establishes
// no grant. No assessment here carries any frozen D-P0…D-P13 state name —
// the frozen tuples stay the only carriers of those names, and this cut's
// honesty lives in its own state vocabulary.

import { POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS } from "./pond-private-read-activation.ts";

export type PondCounterpartJoinBasis =
  | "receiver_declared_explicit_collaborative_session_join"
  // Valid-but-unsatisfied fail-closed literals: a join claimed from any of
  // these bases is exactly what this ceremony exists to refuse. Shared
  // project presence, agent membership, scope composition, and
  // conversation participation are inference, not declaration (agent law:
  // declared capability is not granted capability; trusted-channel law:
  // no ambient join is a grant).
  | "inferred_from_shared_project_presence"
  | "inferred_from_agent_membership"
  | "inferred_from_shared_scope_composition"
  | "inferred_from_conversation_participation";

export interface PondCollaborativeReadCounterpartDeclarationRecord {
  readonly contractVersion: "pond-collaborative-read-counterpart-declaration-d-p14";
  readonly kind: "pond-collaborative-read-counterpart-declaration";
  readonly receiverHeldPrincipalRef: string;
  readonly counterpartPrincipalRef: string;
  readonly joinBasis: PondCounterpartJoinBasis;
  readonly heldRefPosture:
    | "not_established"
    | "receiver_recorded_pre_existing_ref_never_issued";
  readonly issuedIdPosture:
    // Refused sibling: a counterpart PrincipalId issuance claim is exactly
    // what this posture exists to refuse — the counterpart carries no
    // issued principal id, and this cut does not issue one.
    | "counterpart_carries_no_issued_principal_id"
    | "counterpart_principal_id_issued_claim";
  readonly sessionScopePosture:
    | "not_established"
    | "session_scoped_receiver_restart_ends_join";
  readonly revocabilityPosture:
    | "not_established"
    | "join_revocable_by_receiver_retraction";
  readonly consentPosture: "receiver_recorded_session_join_only_no_counterpart_consent_claim";
  readonly grantSufficiencyPosture: "join_requires_no_grant_and_establishes_no_grant";
  readonly personalStateIsolationPosture: "counterpart_personal_state_not_merged_and_not_read_by_this_join";
  readonly memoryLaneExclusionPosture:
    | "not_established"
    | "join_excludes_memory_narrative_transcript_lanes";
  readonly authorityPosture: "join_grants_no_authority_membership_or_capability";
  readonly authority: "none";
}

export type PondCounterpartJoinCheck =
  | "counterpart_declaration_well_formed"
  | "join_pairwise_distinct_refs"
  | "join_basis_explicitly_receiver_declared_not_inferred"
  | "counterpart_held_ref_pre_existing_never_issued"
  | "join_session_scoped_and_revocable"
  | "join_excludes_memory_and_personal_state_isolation"
  | "join_requires_no_grant_and_no_consent_claim";

export interface PondCounterpartJoinDeclarationInput {
  readonly counterpartDeclarationRecord: unknown;
  readonly receiverHeldPrincipalRef: unknown;
}

export interface PondCounterpartJoinDeclarationAssessment {
  readonly contractVersion: "pond-collaborative-read-counterpart-declaration-d-p14";
  readonly counterpartDeclarationRecordVersion:
    | "pond-collaborative-read-counterpart-declaration-d-p14"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_counterpart_join_declaration";
  readonly joinDeclarationState:
    | "join_not_established"
    | "fixture_structural_receiver_declared_counterpart_join";
  readonly reason:
    | "counterpart_declaration_record_invalid"
    | "receiver_join_declaration_proof_incomplete"
    | "all_counterpart_join_checks_satisfied";
  readonly satisfiedChecks: readonly PondCounterpartJoinCheck[];
  readonly unsatisfiedChecks: readonly PondCounterpartJoinCheck[];
  readonly joinEstablishesGrant: false;
  readonly counterpartConsentEstablished: false;
  readonly counterpartPrincipalIdIssuedByThisCut: false;
  readonly credentialAdmitted: false;
  readonly authenticationPerformed: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const counterpartJoinChecks = Object.freeze([
  "counterpart_declaration_well_formed",
  "join_pairwise_distinct_refs",
  "join_basis_explicitly_receiver_declared_not_inferred",
  "counterpart_held_ref_pre_existing_never_issued",
  "join_session_scoped_and_revocable",
  "join_excludes_memory_and_personal_state_isolation",
  "join_requires_no_grant_and_no_consent_claim",
] as const satisfies readonly PondCounterpartJoinCheck[]);

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

const validCounterpartDeclarationRecord = (value: unknown): boolean => {
  const declaration = record(value);
  return (
    declaration !== null &&
    exactKeys(declaration, [
      "contractVersion",
      "kind",
      "receiverHeldPrincipalRef",
      "counterpartPrincipalRef",
      "joinBasis",
      "heldRefPosture",
      "issuedIdPosture",
      "sessionScopePosture",
      "revocabilityPosture",
      "consentPosture",
      "grantSufficiencyPosture",
      "personalStateIsolationPosture",
      "memoryLaneExclusionPosture",
      "authorityPosture",
      "authority",
    ]) &&
    declaration.contractVersion ===
      "pond-collaborative-read-counterpart-declaration-d-p14" &&
    declaration.kind === "pond-collaborative-read-counterpart-declaration" &&
    wellFormedPrincipalRef(declaration.receiverHeldPrincipalRef) &&
    wellFormedPrincipalRef(declaration.counterpartPrincipalRef) &&
    [
      "receiver_declared_explicit_collaborative_session_join",
      "inferred_from_shared_project_presence",
      "inferred_from_agent_membership",
      "inferred_from_shared_scope_composition",
      "inferred_from_conversation_participation",
    ].includes(String(declaration.joinBasis)) &&
    [
      "not_established",
      "receiver_recorded_pre_existing_ref_never_issued",
    ].includes(String(declaration.heldRefPosture)) &&
    [
      "counterpart_carries_no_issued_principal_id",
      "counterpart_principal_id_issued_claim",
    ].includes(String(declaration.issuedIdPosture)) &&
    [
      "not_established",
      "session_scoped_receiver_restart_ends_join",
    ].includes(String(declaration.sessionScopePosture)) &&
    [
      "not_established",
      "join_revocable_by_receiver_retraction",
    ].includes(String(declaration.revocabilityPosture)) &&
    declaration.consentPosture ===
      "receiver_recorded_session_join_only_no_counterpart_consent_claim" &&
    declaration.grantSufficiencyPosture ===
      "join_requires_no_grant_and_establishes_no_grant" &&
    declaration.personalStateIsolationPosture ===
      "counterpart_personal_state_not_merged_and_not_read_by_this_join" &&
    [
      "not_established",
      "join_excludes_memory_narrative_transcript_lanes",
    ].includes(String(declaration.memoryLaneExclusionPosture)) &&
    declaration.authorityPosture ===
      "join_grants_no_authority_membership_or_capability" &&
    declaration.authority === "none" &&
    !hasForbiddenKey(
      declaration,
      POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS,
    )
  );
};

const counterpartJoinAssessment = (
  reason: PondCounterpartJoinDeclarationAssessment["reason"],
  counterpartDeclarationRecordVersion: PondCounterpartJoinDeclarationAssessment["counterpartDeclarationRecordVersion"],
  satisfiedChecks: readonly PondCounterpartJoinCheck[],
  unsatisfiedChecks: readonly PondCounterpartJoinCheck[],
): PondCounterpartJoinDeclarationAssessment => {
  const established = reason === "all_counterpart_join_checks_satisfied";
  return Object.freeze({
    contractVersion: "pond-collaborative-read-counterpart-declaration-d-p14",
    counterpartDeclarationRecordVersion,
    assessmentKind: "deterministic_supplied_counterpart_join_declaration",
    joinDeclarationState: established
      ? "fixture_structural_receiver_declared_counterpart_join"
      : "join_not_established",
    reason,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The join is a session-scoped, receiver-owned declaration only: it
    // never becomes a grant, opens counterpart consent, issues a second
    // PrincipalId, admits a credential, performs an authentication,
    // admits memory content, claims current truth, or becomes authority.
    joinEstablishesGrant: false,
    counterpartConsentEstablished: false,
    counterpartPrincipalIdIssuedByThisCut: false,
    credentialAdmitted: false,
    authenticationPerformed: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondCounterpartJoinDeclaration(
  input: PondCounterpartJoinDeclarationInput,
): PondCounterpartJoinDeclarationAssessment {
  if (!validCounterpartDeclarationRecord(input.counterpartDeclarationRecord))
    return counterpartJoinAssessment(
      "counterpart_declaration_record_invalid",
      "invalid",
      [],
      counterpartJoinChecks,
    );
  const declaration = input.counterpartDeclarationRecord as Record<
    string,
    unknown
  >;

  const values = [
    true,
    wellFormedPrincipalRef(declaration.counterpartPrincipalRef) &&
      String(declaration.counterpartPrincipalRef) !==
        String(declaration.receiverHeldPrincipalRef) &&
      wellFormedPrincipalRef(input.receiverHeldPrincipalRef) &&
      declaration.receiverHeldPrincipalRef ===
        input.receiverHeldPrincipalRef,
    declaration.joinBasis ===
      "receiver_declared_explicit_collaborative_session_join",
    declaration.heldRefPosture ===
      "receiver_recorded_pre_existing_ref_never_issued" &&
      declaration.issuedIdPosture ===
        "counterpart_carries_no_issued_principal_id",
    declaration.sessionScopePosture ===
      "session_scoped_receiver_restart_ends_join" &&
      declaration.revocabilityPosture ===
        "join_revocable_by_receiver_retraction",
    declaration.memoryLaneExclusionPosture ===
      "join_excludes_memory_narrative_transcript_lanes" &&
      declaration.personalStateIsolationPosture ===
        "counterpart_personal_state_not_merged_and_not_read_by_this_join",
    declaration.grantSufficiencyPosture ===
      "join_requires_no_grant_and_establishes_no_grant" &&
      declaration.consentPosture ===
        "receiver_recorded_session_join_only_no_counterpart_consent_claim",
  ];
  const satisfied = counterpartJoinChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = counterpartJoinChecks.filter(
    (_, index) => values[index] !== true,
  );
  const established = unsatisfied.length === 0;
  return counterpartJoinAssessment(
    established
      ? "all_counterpart_join_checks_satisfied"
      : "receiver_join_declaration_proof_incomplete",
    "pond-collaborative-read-counterpart-declaration-d-p14",
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The join is explicit, pairwise
// distinct, session-scoped, non-grant, consent-free, and never becomes a
// credential, an authentication, a second identity, memory admission, or
// authority.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP14Invariant_CounterpartJoinChecksExact = Assert<
  Equal<
    PondCounterpartJoinCheck,
    | "counterpart_declaration_well_formed"
    | "join_pairwise_distinct_refs"
    | "join_basis_explicitly_receiver_declared_not_inferred"
    | "counterpart_held_ref_pre_existing_never_issued"
    | "join_session_scoped_and_revocable"
    | "join_excludes_memory_and_personal_state_isolation"
    | "join_requires_no_grant_and_no_consent_claim"
  >
>;
export type PondStageDP14Invariant_CounterpartJoinStatesExact = Assert<
  Equal<
    PondCounterpartJoinDeclarationAssessment["joinDeclarationState"],
    | "join_not_established"
    | "fixture_structural_receiver_declared_counterpart_join"
  >
>;
export type PondStageDP14Invariant_CounterpartJoinReasonsExact = Assert<
  Equal<
    PondCounterpartJoinDeclarationAssessment["reason"],
    | "counterpart_declaration_record_invalid"
    | "receiver_join_declaration_proof_incomplete"
    | "all_counterpart_join_checks_satisfied"
  >
>;
export type PondStageDP14Invariant_CounterpartJoinNeverBecomesGrantConsentIdentityOrAuthority =
  Assert<
    Equal<
      [
        PondCounterpartJoinDeclarationAssessment["joinEstablishesGrant"],
        PondCounterpartJoinDeclarationAssessment["counterpartConsentEstablished"],
        PondCounterpartJoinDeclarationAssessment["counterpartPrincipalIdIssuedByThisCut"],
        PondCounterpartJoinDeclarationAssessment["credentialAdmitted"],
        PondCounterpartJoinDeclarationAssessment["authenticationPerformed"],
        PondCounterpartJoinDeclarationAssessment["personalMemoryContentAdmitted"],
        PondCounterpartJoinDeclarationAssessment["currentTruthAdmitted"],
        PondCounterpartJoinDeclarationAssessment["runtimeActivationPosture"],
        PondCounterpartJoinDeclarationAssessment["authority"],
      ],
      [
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
export type PondStageDP14Invariant_JoinBasisVocabularyExact = Assert<
  Equal<
    PondCounterpartJoinBasis,
    | "receiver_declared_explicit_collaborative_session_join"
    | "inferred_from_shared_project_presence"
    | "inferred_from_agent_membership"
    | "inferred_from_shared_scope_composition"
    | "inferred_from_conversation_participation"
  >
>;
export type PondStageDP14Invariant_NoForbiddenJoinRecordKeys = Assert<
  HasAnyKey<
    PondCollaborativeReadCounterpartDeclarationRecord,
    (typeof POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS)[number]
  > extends false
    ? true
    : false
>;
export type PondStageDP14Invariant_NoForbiddenJoinAssessmentKeys = Assert<
  HasAnyKey<
    PondCounterpartJoinDeclarationAssessment,
    (typeof POND_STAGE_DP10_FORBIDDEN_PRIVATE_READ_KEYS)[number]
  > extends false
    ? true
    : false
>;