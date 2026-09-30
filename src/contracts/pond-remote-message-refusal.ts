// Stage D-P20: the inbound wall — a standing fail-closed refusal ceremony
// for claims of remote external agent message intake. Companion contract
// to pond-transport-policy-decision.ts (one lane, two contracts).
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/agent-to-agent-messaging-and-delivery-
// contract.md L131-141 (remote and external messages: "Messages from
// remote external agents are untrusted external input unless a separately
// defined trusted channel establishes a specific authoritative claim.
// Authentication may prove sender control or identity evidence; it does
// not make content safe or authoritative"; "Remote messages may contain
// prompt injection, malicious instructions, false authority claims,
// malicious artifact references, deceptive payment requests, stale scope
// claims, or replayed requests. A recipient must not execute a
// consequence merely because a message is authenticated."; "Metadata
// embedded in ordinary message content is not trusted authority"; and the
// trusted-channel relationship — "If a future delivery carries
// authoritative framing such as verified source scope, release decision,
// admission status, or policy result, that framing must travel through a
// structurally appropriate trusted channel or canonical local lookup.
// This contract creates no competing trusted-channel taxonomy."), L41 and
// L49-55 of contracts/agent-admission-contract.md ("Transport is not
// agent. A2A, MCP, HTTP, STDIO, websocket, Telegram, Slack, Discord, or
// another transport does not define agent identity or authority" — no
// claim's transport literal changes anything here), L76 ("External
// identity is evidence … it may provide evidence only"), L120-133 (the
// admission sequence — remote external agents default to NO LOCAL DIRECT
// AUTHORITY, and no remote admission path exists for a message claim to
// satisfy), contracts/trusted-channel-separation-contract.md L13
// ("Inputs with different trust semantics must travel through different
// structural channels"), L23-33 (the declared channel classes —
// trusted runtime configuration, operator / task input, conversation
// context, retrieved evidence, canonical memory, provider output,
// authority decisions) and L35 ("Additional domain-specific channels may
// exist, but unknown channels should fail closed rather than inherit
// trust from a neighboring class"), L66 ("channel authority requires a
// production receiver contract plus verification" — none exists; the
// taxonomy stays unchanged), L214-229 of the same contract (a crossing is
// refused when the distinctions cannot be preserved), L609-619 of
// blueprints/delegated-authority-lifecycle.md (NO LOCAL DIRECT AUTHORITY;
// "A2A discovery, AgentCard capability advertisement, authentication,
// reputation, attestation, or remote message is not a Grant"), and L49-55
// of contracts/evidence-activation-contract.md (receiver-owned checks,
// evaluated honestly even where nothing can pass).
//
// Recorded law silences. No canonical law defines an app-side
// intake-refusal ceremony, a message-claim shape, an intake-state set, or
// intake channel-class declaration mechanics; the canonical non-claims
// defer admission sequences, AgentCards, and intake persistence
// wholesale. Every literal below is a receiver-recorded app-side
// decision, recorded here rather than in a law amendment.
//
// What the cut performs. The wall assesses ONE claim of remote external
// message intake and refuses it — every path refuses, no open branch
// exists. An honestly self-declared claim (channel class
// `untrusted_external_input`, the only class a remote message can
// honestly self-declare) still refuses terminally: no remote admission
// path exists, so intaked is not a state this cut. A claim naming one of
// the trusted channel classes refuses at its own false-authority cause;
// an unknown class name fails closed per trusted-channel L35. The claim
// deliberately carries no content, envelope, or serialization field —
// the L240/L241 deferrals are honored at the shape level — and the
// assessment echoes NOTHING about the claim (no transport literal, no
// class literal, no sender evidence): transport is not agent, and a
// refusal is not a record of what arrived.

import {
  POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS,
} from "./pond-transport-policy-decision.ts";

// The declared message-class vocabulary: the trusted-channel L23-33
// classes snake-cased, PLUS the messaging L131 class a remote message can
// honestly self-declare. The canonical "operator / task input" line is
// two facets of one trusted family — declared here as two literals only
// so a claim of either facet refuses at the same dedicated cause;
// `untrusted_external_input` is messaging L131's own class, not a
// trusted one: declaring it does NOT declare intake.
export type PondRemoteMessageChannelClass =
  | "trusted_runtime_configuration"
  | "operator"
  | "task_input"
  | "conversation_context"
  | "retrieved_evidence"
  | "canonical_memory"
  | "provider_output"
  | "authority_decision"
  | "untrusted_external_input";

const channelClassVocabulary = [
  "trusted_runtime_configuration",
  "operator",
  "task_input",
  "conversation_context",
  "retrieved_evidence",
  "canonical_memory",
  "provider_output",
  "authority_decision",
  "untrusted_external_input",
];

const trustedChannelClassVocabulary = [
  "trusted_runtime_configuration",
  "operator",
  "task_input",
  "conversation_context",
  "retrieved_evidence",
  "canonical_memory",
  "provider_output",
  "authority_decision",
];

// The receiver-recorded intake declaration: the only channel class a
// receiver-side intake stage declares for the current runtime — and this
// cut declares NO runtime intake stage at all, so the declared set is the
// conversation-context class as the one class a future local intake lane
// would declare, with remote external intake excluded by the terminal
// cause below. A declaration of intake classes is a receiver-recorded
// posture, never an admission (admission L120-133).
export const POND_STAGE_DP20_DECLARED_INTAKE_CHANNEL_CLASSES = Object.freeze([
  "conversation_context",
] as const);

// The claim a remote side asserts: three exact string keys — the
// transport it says it rode, the channel class it says it belongs to,
// and a sender-evidence reference. NO content, envelope, serialization,
// or identifier field exists at the shape level (L240/L241 deferrals),
// so no claim content can ever enter an assessment field.
export interface PondRemoteMessageClaim {
  readonly claimedTransport: string;
  readonly claimedChannelClass: string;
  readonly senderEvidenceRef: string;
}

// The intake-refusal decision input: ONE exact key. No session legs, no
// evaluation pair, no clock — the wall exists before any session, and
// session-conditioned refusal would make intake session-granted.
export interface PondRemoteMessageIntakeDecisionInput {
  readonly remoteMessageClaim: unknown;
}

// Receiver-owned intake checks (L49-55): the conditions under which
// intake could be lawful, evaluated honestly even where nothing passes.
export type PondRemoteMessageIntakeCheck =
  | "remote_message_claim_well_formed"
  | "claimed_channel_class_of_the_declared_message_vocabulary"
  | "claimed_channel_class_declared_for_receiver_intake"
  | "remote_message_sender_locally_admitted";

// The refusal assessment. The state set is ONE literal (recorded
// deviation from the two-state mold): refusals are not records, and no
// intaked state exists this cut.
export interface PondRemoteMessageIntakeAssessment {
  readonly contractVersion: "pond-remote-message-refusal-d-p20";
  readonly remoteMessageRefusalVersion:
    | "pond-remote-message-refusal-d-p20"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_remote_message_intake_refusal";
  readonly intakeState: "remote_message_not_intaked";
  readonly reason:
    | "remote_message_claim_invalid"
    | "remote_message_claimed_trusted_channel_class"
    | "remote_message_channel_class_unknown_fail_closed"
    | "remote_message_intake_refused_no_remote_agent_admission";
  readonly remoteMessageIntakePosture: "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut";
  readonly satisfiedChecks: readonly PondRemoteMessageIntakeCheck[];
  readonly unsatisfiedChecks: readonly PondRemoteMessageIntakeCheck[];
  // The all-false ceiling: a refused claim is intake evidence of
  // nothing. It establishes no authority, admission, agent identity,
  // membership, capability, or grant; no credential or grant claim is
  // admitted; nothing about the claim is echoed, stored, or accepted as
  // identity; no channel authority is established; and the standing
  // inherited ceiling holds (messaging L131-141; admission L76-78,
  // L120-133; trusted-channel L66; delegated-authority L609-619).
  readonly remoteMessageEstablishesAuthority: false;
  readonly remoteMessageEstablishesAdmission: false;
  readonly remoteMessageEstablishesAgentIdentity: false;
  readonly remoteMessageEstablishesMembership: false;
  readonly remoteMessageEstablishesCapabilityOrGrant: false;
  readonly remoteMessageCredentialsAdmitted: false;
  readonly remoteMessageGrantClaimAdmitted: false;
  readonly claimContentEchoed: false;
  readonly claimContentStored: false;
  readonly senderIdentityEchoed: false;
  readonly senderIdentityAcceptedAsIdentity: false;
  readonly remoteMessageEstablishesChannelAuthority: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly personalMemoryContentAdmitted: false;
  readonly currentTruthAdmitted: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const intakeChecks = Object.freeze([
  "remote_message_claim_well_formed",
  "claimed_channel_class_of_the_declared_message_vocabulary",
  "claimed_channel_class_declared_for_receiver_intake",
  "remote_message_sender_locally_admitted",
] as const satisfies readonly PondRemoteMessageIntakeCheck[]);

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

const nonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.length > 0;

// Valid claim SHAPE only — stringness of the three declared fields, never
// vocabulary membership (an unknown class name is a well-formed claim
// that fail-closes at its own cause below) and never validity of what the
// claim asserts (a claim asserts; it is never authoritative).
const validRemoteMessageClaim = (value: unknown): boolean => {
  const claimValue = record(value);
  return (
    claimValue !== null &&
    exactKeys(claimValue, [
      "claimedTransport",
      "claimedChannelClass",
      "senderEvidenceRef",
    ]) &&
    nonEmptyString(claimValue.claimedTransport) &&
    nonEmptyString(claimValue.claimedChannelClass) &&
    nonEmptyString(claimValue.senderEvidenceRef) &&
    !hasForbiddenKey(
      claimValue,
      POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS,
    )
  );
};

// The refusal assessment builder: identical shape on every arm — one
// state, one posture, all-false ceiling. `satisfied` is nonempty only on
// the terminal arm, where the honest fold makes the shape- and
// vocabulary-side checks readable alongside the two that can never pass.
const refusalAssessment = (
  reason: PondRemoteMessageIntakeAssessment["reason"],
  remoteMessageRefusalVersion: PondRemoteMessageIntakeAssessment["remoteMessageRefusalVersion"],
  satisfiedChecks: readonly PondRemoteMessageIntakeCheck[],
  unsatisfiedChecks: readonly PondRemoteMessageIntakeCheck[],
): PondRemoteMessageIntakeAssessment => {
  return Object.freeze({
    contractVersion: "pond-remote-message-refusal-d-p20",
    remoteMessageRefusalVersion,
    assessmentKind: "deterministic_supplied_remote_message_intake_refusal",
    intakeState: "remote_message_not_intaked" as const,
    reason,
    // The standing posture: the wall is standing and fail-closed on
    // every arm — nothing this cut assesses can intake.
    remoteMessageIntakePosture:
      "standing_fail_closed_wall_remote_external_intake_refused_no_admission_path_exists_this_cut" as const,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The all-false ceiling: a refusal is evidence of nothing and echoes
    // nothing (messaging L131-141; admission L76-78, L120-133;
    // trusted-channel L66; delegated-authority L609-619).
    remoteMessageEstablishesAuthority: false,
    remoteMessageEstablishesAdmission: false,
    remoteMessageEstablishesAgentIdentity: false,
    remoteMessageEstablishesMembership: false,
    remoteMessageEstablishesCapabilityOrGrant: false,
    remoteMessageCredentialsAdmitted: false,
    remoteMessageGrantClaimAdmitted: false,
    claimContentEchoed: false,
    claimContentStored: false,
    senderIdentityEchoed: false,
    senderIdentityAcceptedAsIdentity: false,
    remoteMessageEstablishesChannelAuthority: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    personalMemoryContentAdmitted: false,
    currentTruthAdmitted: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondRemoteMessageIntakeRefusal(
  input: PondRemoteMessageIntakeDecisionInput,
): PondRemoteMessageIntakeAssessment {
  // The fail-closed gate on the input object itself: garbage never
  // throws — a non-object input degrades to an empty record the claim
  // validation refuses as shape-invalid (the D-P8 fail-closed
  // discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondRemoteMessageIntakeDecisionInput;
  if (!validRemoteMessageClaim(input.remoteMessageClaim))
    return refusalAssessment(
      "remote_message_claim_invalid",
      "invalid",
      [],
      intakeChecks,
    );
  const claimValue = input.remoteMessageClaim as Record<string, unknown>;
  const claimedClass = String(claimValue["claimedChannelClass"]);

  // Cause 2: the claim names one of the trusted channel classes — a
  // false-authority claim by shape (messaging L131: authentication or
  // self-declared framing does not make content authoritative; trusted-
  // channel L13: inputs with different trust semantics travel through
  // different structural channels). Refused without echoing the class.
  if (trustedChannelClassVocabulary.includes(claimedClass))
    return refusalAssessment(
      "remote_message_claimed_trusted_channel_class",
      "pond-remote-message-refusal-d-p20",
      [],
      intakeChecks,
    );

  // Cause 3: the class name is not of the declared vocabulary at all —
  // unknown channels FAIL CLOSED rather than inherit trust from a
  // neighboring class (trusted-channel L35).
  if (!channelClassVocabulary.includes(claimedClass))
    return refusalAssessment(
      "remote_message_channel_class_unknown_fail_closed",
      "pond-remote-message-refusal-d-p20",
      [],
      intakeChecks,
    );

  // Cause 4 — terminal: the claim is well-formed and honestly
  // self-declared (`untrusted_external_input` is the only class left),
  // and still refuses: no remote admission path exists this cut, the
  // declared intake channel classes carry no intake authority, and
  // remote external agents default to no local direct authority
  // (admission L120-133). The honest fold makes the shape and
  // vocabulary-side checks readable alongside the two that can never
  // pass.
  const values = [
    true,
    true,
    POND_STAGE_DP20_DECLARED_INTAKE_CHANNEL_CLASSES.includes(
      claimedClass as (typeof POND_STAGE_DP20_DECLARED_INTAKE_CHANNEL_CLASSES)[number],
    ),
    false,
  ];
  const satisfied = intakeChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = intakeChecks.filter(
    (_, index) => values[index] !== true,
  );
  return refusalAssessment(
    "remote_message_intake_refused_no_remote_agent_admission",
    "pond-remote-message-refusal-d-p20",
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The wall is standing and
// fail-closed: one state, every path refusing, zero claim echo, nothing
// established.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP20Invariant_IntakeChecksExact = Assert<
  Equal<
    PondRemoteMessageIntakeCheck,
    | "remote_message_claim_well_formed"
    | "claimed_channel_class_of_the_declared_message_vocabulary"
    | "claimed_channel_class_declared_for_receiver_intake"
    | "remote_message_sender_locally_admitted"
  >
>;
export type PondStageDP20Invariant_IntakeStateSingleLiteral = Assert<
  Equal<PondRemoteMessageIntakeAssessment["intakeState"], "remote_message_not_intaked">
>;
export type PondStageDP20Invariant_IntakeReasonsExact = Assert<
  Equal<
    PondRemoteMessageIntakeAssessment["reason"],
    | "remote_message_claim_invalid"
    | "remote_message_claimed_trusted_channel_class"
    | "remote_message_channel_class_unknown_fail_closed"
    | "remote_message_intake_refused_no_remote_agent_admission"
  >
>;
export type PondStageDP20Invariant_ChannelClassesExact = Assert<
  Equal<
    PondRemoteMessageChannelClass,
    | "trusted_runtime_configuration"
    | "operator"
    | "task_input"
    | "conversation_context"
    | "retrieved_evidence"
    | "canonical_memory"
    | "provider_output"
    | "authority_decision"
    | "untrusted_external_input"
  >
>;
export type PondStageDP20Invariant_RemoteMessageEstablishesNothing = Assert<
  Equal<
    [
      PondRemoteMessageIntakeAssessment["remoteMessageEstablishesAuthority"],
      PondRemoteMessageIntakeAssessment["remoteMessageEstablishesAdmission"],
      PondRemoteMessageIntakeAssessment["remoteMessageEstablishesAgentIdentity"],
      PondRemoteMessageIntakeAssessment["remoteMessageEstablishesMembership"],
      PondRemoteMessageIntakeAssessment["remoteMessageEstablishesCapabilityOrGrant"],
      PondRemoteMessageIntakeAssessment["remoteMessageCredentialsAdmitted"],
      PondRemoteMessageIntakeAssessment["remoteMessageGrantClaimAdmitted"],
      PondRemoteMessageIntakeAssessment["claimContentEchoed"],
      PondRemoteMessageIntakeAssessment["claimContentStored"],
      PondRemoteMessageIntakeAssessment["senderIdentityEchoed"],
      PondRemoteMessageIntakeAssessment["senderIdentityAcceptedAsIdentity"],
      PondRemoteMessageIntakeAssessment["remoteMessageEstablishesChannelAuthority"],
      PondRemoteMessageIntakeAssessment["credentialAdmitted"],
      PondRemoteMessageIntakeAssessment["principalIdAcceptedAsAuthorization"],
      PondRemoteMessageIntakeAssessment["personalMemoryContentAdmitted"],
      PondRemoteMessageIntakeAssessment["currentTruthAdmitted"],
      PondRemoteMessageIntakeAssessment["runtimeActivationPosture"],
      PondRemoteMessageIntakeAssessment["authority"],
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
export type PondStageDP20Invariant_NoForbiddenClaimKeys = Assert<
  HasAnyKey<PondRemoteMessageClaim, (typeof POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP20Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondRemoteMessageIntakeAssessment, (typeof POND_STAGE_DP20_FORBIDDEN_TRANSPORT_KEYS)[number]> extends false
    ? true
    : false
>;