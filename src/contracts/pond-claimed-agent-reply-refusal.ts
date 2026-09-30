// Stage D-P21: the claimed-reply wall — a standing fail-closed refusal
// ceremony for claims of an agent reply. Companion contracts: pond-reply-
// request-decision.ts and pond-cognition-provider-decision.ts (one lane,
// three contracts).
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/agent-identity-and-specialist-admission-
// contract.md L73-78 (esp. L77 — "Provider session is not agent. ChatGPT,
// Codex, Claude, API, local-model, and other reasoning sessions do not
// automatically create an AgentId"), L112 ("Declared capability is not
// granted capability"), L116-118 (no authority inheritance from a
// provider session, a prior receipt, an A2A message, or model output —
// a claimed agent reply is model-output authority inheritance, refused
// by shape), contracts/governed-runtime-component-allocation.md L101
// ("reasoning != authorization") and L498 (advisory outputs are never
// state-changing outputs — a claimed reply is an advisory output),
// contracts/community-agent-fabric.md L305-312 and L321 ("informational
// responses and bounded summaries" — the ONLY law vocabulary for a
// conversational agent response, and it lives in the community fabric
// profile, not here) and L329, contracts/agent-to-agent-messaging-and-
// delivery-contract.md L29 (requests grant nothing), L102 (no authority-
// bearing message type — a claimed reply cannot be one), L131-141
// (untrusted external input: authentication or self-declared framing
// never makes content authoritative), L176 ("recipient reasoning" —
// unowned; the only cognition-adjacent law term), and L189 ("The two
// lifecycles must not collapse"), contracts/trusted-channel-separation-
// contract.md L23-33 (the declared channel classes — provider output is
// one, re-declared verbatim below) and L35 (unknown names fail closed),
// contracts/scope-sovereignty-contract.md L15 and L209 (a provider,
// model, session, or harness is NOT a principal — a claimed responder is
// not an agent identity this cut admits), and L49-55 of
// contracts/evidence-activation-contract.md (receiver-owned checks,
// evaluated honestly even where nothing can pass).
//
// Recorded law silences. No canonical law defines an agent-reply
// lifecycle, a composer, a REPLY message class, a claimed-reply refusal
// ceremony, or a cognition owner; the messaging deferral list (L236-250)
// does not name reply composition at all — reply composition is
// unaddressed by law, NOT deferred. Every literal below is a
// receiver-recorded app-side decision, recorded here rather than in a
// law amendment.
//
// What the wall performs. The wall assesses ONE claimed agent reply and
// refuses it — every path refuses, no open branch exists. The wall's
// source-class vocabulary is a claim-RECOGNITION vocabulary, never a
// declared intake: naming the three classes a claim can honestly present
// declares no intake lane, no runtime, and no composition authority. No
// cognition runtime exists in app or law, so nothing composes replies —
// a claimed receiver composition IS a receiver composition, not a reply
// (and it is echoed NOWHERE, not even the D-P16 composed text a claim
// might quote verbatim); a claimed agent-runtime composition claims a
// runtime that does not exist; a claimed provider output is the honest
// class and still refuses terminally — provider output is not an agent
// reply, and no composition authority is admitted. The claim deliberately
// carries no envelope, model-output id, or provider identifier field (the
// L240/L241 deferrals are honored at the shape level), and the assessment
// echoes NOTHING about the claim — no reply text, no responder identity,
// no source class: a claim asserts, and a refusal is not a record of
// what arrived.

import {
  POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS,
} from "./pond-reply-request-decision.ts";

// The declared claimed-reply source-class vocabulary: the three classes
// a claim can honestly present about where its text came from. This is a
// claim-RECOGNITION vocabulary — declaring it declares NO intake lane
// (the D-P20 wall's standing intake declaration is unchanged; no channel
// class, trusted or otherwise, admits a claimed reply here).
// `receiver_session` — the text of a receiver-side composition, a D-P16
// fact that is never a reply; `agent_runtime` — a claim that SOME runtime
// composed it, and no cognition runtime exists in app or law;
// `provider_output` — the only honest class: model output, which is not
// an agent reply (messaging L102; admission L77).
export type PondClaimedReplySourceClass =
  | "receiver_session"
  | "agent_runtime"
  | "provider_output";

const sourceClassVocabulary = [
  "receiver_session",
  "agent_runtime",
  "provider_output",
];

export const POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES =
  Object.freeze([
    "receiver_session",
    "agent_runtime",
    "provider_output",
  ] as const);

// The claim a counterpart may put forward: three exact string keys — the
// reply text it CLAIMS was composed, the class it claims the text came
// from, and the responder it claims composed it. NO envelope,
// model-output id, or provider-identifier field exists at the shape
// level (the L240/L241 deferrals are honored at the shape level), so no
// claimed infrastructure can ever enter an assessment field.
export interface PondClaimedAgentReply {
  readonly claimedReplyText: string;
  readonly claimedReplySourceClass: string;
  readonly claimedResponderRef: string;
}

// The claimed-reply refusal input: ONE exact key. No session legs, no
// evaluation pair, no clock — the wall stands outside any session, and
// nothing about any claim is stored anywhere.
export interface PondClaimedAgentReplyDecisionInput {
  readonly claimedAgentReply: unknown;
}

// Receiver-owned claimed-reply checks (L49-55): the conditions under
// which composing a claimed reply could be lawful, evaluated honestly
// even where nothing passes. The last two CAN NEVER PASS this cut: no
// cognition runtime exists, so no claimed text is composable, and no
// claimed reply can carry agent identity, authority, or admission
// (admission L77, L116-118; allocation L498). A responder's
// declaredness folds into the terminal arm's honest readout as data,
// never as a third state or a separate vocabulary.
export type PondClaimedAgentReplyCheck =
  | "claimed_agent_reply_claim_well_formed"
  | "claimed_reply_source_class_of_the_declared_claim_vocabulary"
  | "claimed_reply_text_composible_by_an_established_cognition_runtime"
  | "claimed_reply_carries_no_agent_identity_authority_or_admission";

// The refusal assessment. The state set is ONE literal (the D-P20 wall
// deviation mold): refusals are not records, and no composed state
// exists this cut.
export interface PondClaimedAgentReplyAssessment {
  readonly contractVersion: "pond-claimed-agent-reply-refusal-d-p21";
  readonly claimedReplyRefusalVersion:
    | "pond-claimed-agent-reply-refusal-d-p21"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_claimed_agent_reply_refusal";
  readonly claimedReplyState: "claimed_reply_not_composed";
  readonly reason:
    | "claimed_agent_reply_claim_invalid"
    | "claimed_reply_source_class_unknown_fail_closed"
    | "claimed_reply_receiver_composition_is_not_a_reply"
    | "claimed_reply_agent_runtime_claim_refused_no_cognition_runtime"
    | "claimed_reply_provider_output_not_agent_reply_no_composition_authority";
  readonly claimedReplyWallPosture: "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut";
  readonly satisfiedChecks: readonly PondClaimedAgentReplyCheck[];
  readonly unsatisfiedChecks: readonly PondClaimedAgentReplyCheck[];
  // The all-false ceiling: a claimed reply is evidence of nothing and
  // echoes nothing. It establishes no reply composition, no agent
  // identity, no admission, no authority, and no provider-session-as-
  // agent; the text, the responder identity, and the source class are
  // echoed and stored NOWHERE and a claimed responder is never accepted
  // as an identity; it establishes no conversation record, grant,
  // consequence or execution, or membership; and the standing inherited
  // ceiling holds (admission L77, L112, L116-118; allocation L101, L498;
  // fabric L305-312, L321, L329; messaging L29, L102, L131-141, L176,
  // L189; scope-sov L15, L209).
  readonly claimedReplyEstablishesAgentReplyComposition: false;
  readonly claimedReplyEstablishesAgentIdentity: false;
  readonly claimedReplyEstablishesAdmission: false;
  readonly claimedReplyEstablishesAuthority: false;
  readonly claimedReplyEstablishesProviderSessionAsAgent: false;
  readonly claimedReplyTextEchoed: false;
  readonly claimedReplyTextStored: false;
  readonly claimedResponderIdentityEchoed: false;
  readonly claimedResponderIdentityAcceptedAsIdentity: false;
  readonly claimedReplySourceClassEchoed: false;
  readonly claimedReplyEstablishesConversationRecord: false;
  readonly claimedReplyEstablishesGrant: false;
  readonly claimedReplyEstablishesConsequenceOrExecution: false;
  readonly claimedReplyEstablishesMembership: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const claimedReplyChecks = Object.freeze([
  "claimed_agent_reply_claim_well_formed",
  "claimed_reply_source_class_of_the_declared_claim_vocabulary",
  "claimed_reply_text_composible_by_an_established_cognition_runtime",
  "claimed_reply_carries_no_agent_identity_authority_or_admission",
] as const satisfies readonly PondClaimedAgentReplyCheck[]);

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

// Valid claim SHAPE only — stringness of the three declared fields,
// never vocabulary membership (an unknown class name is a well-formed
// claim that fail-closes at its own cause below) and never validity of
// what the claim asserts (a claim asserts; it is never authoritative).
// The claimed responder's presence keeps the claim coherent about WHO it
// claims composed; the ref itself is never echoed anywhere.
const validClaimedAgentReply = (value: unknown): boolean => {
  const claimValue = record(value);
  return (
    claimValue !== null &&
    exactKeys(claimValue, [
      "claimedReplyText",
      "claimedReplySourceClass",
      "claimedResponderRef",
    ]) &&
    nonEmptyString(claimValue.claimedReplyText) &&
    nonEmptyString(claimValue.claimedReplySourceClass) &&
    nonEmptyString(claimValue.claimedResponderRef) &&
    !hasForbiddenKey(
      claimValue,
      POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS,
    )
  );
};

// The refusal assessment builder: identical shape on every arm — one
// state, one posture, all-false ceiling, zero claimed-* echo. `satisfied`
// is nonempty only on the terminal arm, where the honest fold makes the
// shape- and vocabulary-side checks readable alongside the two that can
// never pass.
const refusalAssessment = (
  reason: PondClaimedAgentReplyAssessment["reason"],
  claimedReplyRefusalVersion: PondClaimedAgentReplyAssessment["claimedReplyRefusalVersion"],
  satisfiedChecks: readonly PondClaimedAgentReplyCheck[],
  unsatisfiedChecks: readonly PondClaimedAgentReplyCheck[],
): PondClaimedAgentReplyAssessment => {
  return Object.freeze({
    contractVersion: "pond-claimed-agent-reply-refusal-d-p21",
    claimedReplyRefusalVersion,
    assessmentKind: "deterministic_supplied_claimed_agent_reply_refusal",
    claimedReplyState: "claimed_reply_not_composed" as const,
    reason,
    // The standing posture: the wall is standing and fail-closed on
    // every arm — nothing this cut assesses composes a reply.
    claimedReplyWallPosture:
      "standing_claimed_reply_wall_refused_no_cognition_runtime_established_this_cut" as const,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The all-false ceiling: a refusal is evidence of nothing and echoes
    // nothing (admission L77, L112, L116-118; allocation L101, L498;
    // fabric L305-312, L321, L329; messaging L29, L102, L131-141, L176,
    // L189; scope-sov L15, L209).
    claimedReplyEstablishesAgentReplyComposition: false,
    claimedReplyEstablishesAgentIdentity: false,
    claimedReplyEstablishesAdmission: false,
    claimedReplyEstablishesAuthority: false,
    claimedReplyEstablishesProviderSessionAsAgent: false,
    claimedReplyTextEchoed: false,
    claimedReplyTextStored: false,
    claimedResponderIdentityEchoed: false,
    claimedResponderIdentityAcceptedAsIdentity: false,
    claimedReplySourceClassEchoed: false,
    claimedReplyEstablishesConversationRecord: false,
    claimedReplyEstablishesGrant: false,
    claimedReplyEstablishesConsequenceOrExecution: false,
    claimedReplyEstablishesMembership: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondClaimedAgentReplyRefusal(
  input: PondClaimedAgentReplyDecisionInput,
): PondClaimedAgentReplyAssessment {
  // The fail-closed gate on the input object itself: garbage never
  // throws — a non-object input degrades to an empty record the claim
  // validation refuses as shape-invalid (the D-P8 fail-closed
  // discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondClaimedAgentReplyDecisionInput;
  if (!validClaimedAgentReply(input.claimedAgentReply))
    return refusalAssessment(
      "claimed_agent_reply_claim_invalid",
      "invalid",
      [],
      claimedReplyChecks,
    );
  const claimValue = input.claimedAgentReply as Record<string, unknown>;
  const claimedClass = String(claimValue["claimedReplySourceClass"]);

  // Cause 2: the class name is not of the declared claim-recognition
  // vocabulary at all — unknown names FAIL CLOSED rather than inherit
  // recognition from a neighboring class (trusted-channel L35).
  if (!sourceClassVocabulary.includes(claimedClass))
    return refusalAssessment(
      "claimed_reply_source_class_unknown_fail_closed",
      "pond-claimed-agent-reply-refusal-d-p21",
      [],
      claimedReplyChecks,
    );

  // Cause 3: a claimed receiver composition — the text of a receiver-
  // side D-P16 composition is a receiver composition fact, not a reply;
  // a claim recasting it as one collapses the two lifecycles (messaging
  // L189). Refused without echoing the text — even text this receiver
  // itself composed is echoed nowhere.
  if (claimedClass === "receiver_session")
    return refusalAssessment(
      "claimed_reply_receiver_composition_is_not_a_reply",
      "pond-claimed-agent-reply-refusal-d-p21",
      [],
      claimedReplyChecks,
    );

  // Cause 4: a claimed agent-runtime composition — some runtime is
  // claimed to have composed the text, and NO cognition runtime exists
  // in app or law (the request posture's own honesty; allocation L715-717
  // — Wave 8 is a future home, not this cut).
  if (claimedClass === "agent_runtime")
    return refusalAssessment(
      "claimed_reply_agent_runtime_claim_refused_no_cognition_runtime",
      "pond-claimed-agent-reply-refusal-d-p21",
      [],
      claimedReplyChecks,
    );

  // Cause 5 — terminal: the claim is well-formed and honestly declared
  // (`provider_output` is the only class left), and still refuses:
  // provider output is not an agent reply, a provider session is not
  // agent (admission L77), and no composition authority is admitted
  // this cut (messaging L102; allocation L101, L498). The honest fold
  // makes the shape- and vocabulary-side checks readable alongside the
  // two that can never pass; the claimed responder's declaredness rides
  // this readout as data (a well-formed claim carries it by shape, so
  // the fold's honest readout is the shape-side checks green against
  // the two never-passing ceiling checks — no third-state vocabulary
  // exists and none is invented).
  const values = [
    true,
    POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES.includes(
      claimedClass as (typeof POND_STAGE_DP21_DECLARED_CLAIMED_REPLY_SOURCE_CLASSES)[number],
    ),
    false,
    false,
  ];
  const satisfied = claimedReplyChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = claimedReplyChecks.filter(
    (_, index) => values[index] !== true,
  );
  return refusalAssessment(
    "claimed_reply_provider_output_not_agent_reply_no_composition_authority",
    "pond-claimed-agent-reply-refusal-d-p21",
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The wall is standing and
// fail-closed: one state, every path refusing, zero claimed-* echo,
// nothing established.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP21Invariant_ClaimedReplyChecksExact = Assert<
  Equal<
    PondClaimedAgentReplyCheck,
    | "claimed_agent_reply_claim_well_formed"
    | "claimed_reply_source_class_of_the_declared_claim_vocabulary"
    | "claimed_reply_text_composible_by_an_established_cognition_runtime"
    | "claimed_reply_carries_no_agent_identity_authority_or_admission"
  >
>;
export type PondStageDP21Invariant_ClaimedReplyStateSingleLiteral = Assert<
  Equal<PondClaimedAgentReplyAssessment["claimedReplyState"], "claimed_reply_not_composed">
>;
export type PondStageDP21Invariant_ClaimedReplyReasonsExact = Assert<
  Equal<
    PondClaimedAgentReplyAssessment["reason"],
    | "claimed_agent_reply_claim_invalid"
    | "claimed_reply_source_class_unknown_fail_closed"
    | "claimed_reply_receiver_composition_is_not_a_reply"
    | "claimed_reply_agent_runtime_claim_refused_no_cognition_runtime"
    | "claimed_reply_provider_output_not_agent_reply_no_composition_authority"
  >
>;
export type PondStageDP21Invariant_SourceClassesExact = Assert<
  Equal<
    PondClaimedReplySourceClass,
    | "receiver_session"
    | "agent_runtime"
    | "provider_output"
  >
>;
export type PondStageDP21Invariant_ClaimedReplyEstablishesNothing = Assert<
  Equal<
    [
      PondClaimedAgentReplyAssessment["claimedReplyEstablishesAgentReplyComposition"],
      PondClaimedAgentReplyAssessment["claimedReplyEstablishesAgentIdentity"],
      PondClaimedAgentReplyAssessment["claimedReplyEstablishesAdmission"],
      PondClaimedAgentReplyAssessment["claimedReplyEstablishesAuthority"],
      PondClaimedAgentReplyAssessment["claimedReplyEstablishesProviderSessionAsAgent"],
      PondClaimedAgentReplyAssessment["claimedReplyTextEchoed"],
      PondClaimedAgentReplyAssessment["claimedReplyTextStored"],
      PondClaimedAgentReplyAssessment["claimedResponderIdentityEchoed"],
      PondClaimedAgentReplyAssessment["claimedResponderIdentityAcceptedAsIdentity"],
      PondClaimedAgentReplyAssessment["claimedReplySourceClassEchoed"],
      PondClaimedAgentReplyAssessment["claimedReplyEstablishesConversationRecord"],
      PondClaimedAgentReplyAssessment["claimedReplyEstablishesGrant"],
      PondClaimedAgentReplyAssessment["claimedReplyEstablishesConsequenceOrExecution"],
      PondClaimedAgentReplyAssessment["claimedReplyEstablishesMembership"],
      PondClaimedAgentReplyAssessment["credentialAdmitted"],
      PondClaimedAgentReplyAssessment["principalIdAcceptedAsAuthorization"],
      PondClaimedAgentReplyAssessment["runtimeActivationPosture"],
      PondClaimedAgentReplyAssessment["authority"],
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
export type PondStageDP21Invariant_NoForbiddenClaimKeys = Assert<
  HasAnyKey<PondClaimedAgentReply, (typeof POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP21Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondClaimedAgentReplyAssessment, (typeof POND_STAGE_DP21_FORBIDDEN_REPLY_KEYS)[number]> extends false
    ? true
    : false
>;