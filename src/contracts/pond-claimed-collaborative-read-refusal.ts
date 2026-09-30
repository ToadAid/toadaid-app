// Stage D-P23: the claimed-collaborative wall — a standing fail-closed
// refusal ceremony for claims of a collaborative read result. Companion
// contracts: pond-collaborative-read-session-request-decision.ts and
// pond-collaborative-read-live-admission-decision.ts (one lane, three
// contracts).
//
// Canonical ecosystem law lives in ToadAid/toadaid-architecture (pin
// bc7a971dfb243f0a): contracts/trusted-channel-separation-contract.md
// L7 (channels must never become interchangeable because they serialize
// as text — the lane's own anchor: a claimed read result recasting a
// structural admission into content is exactly that collapse), L23-33
// (the declared channel classes — no collaborative-read-result class
// exists among them), and L35 (unknown names fail closed);
// contracts/scope-sovereignty-contract.md L72-79 (shared membership
// grants no capability — a claimed joint read confers no member
// capability), L52-60 (the audience is the exact declared membership,
// never an ad-hoc pair a claim presents), L104 (no Release is recorded —
// scope never crosses), and L15/L21 (identity and membership postures
// hold); contracts/attestation-evidence-contract.md L419-427 (ERC-8004
// identity is evidence only, validation is not acceptance, reputation is
// not authority, a registry record is not local admission — a claimed
// counterpart provenance is never a PrincipalId); and L49-55 of
// contracts/evidence-activation-contract.md (receiver-owned checks,
// evaluated honestly even where nothing can pass), with the evidence
// law's core refusal: observations alone are never canonical evidence, a
// typed literal is not itself evidence, and an optimistic zero is never
// serialized in their place (a claimed collaborative read result of a
// read that was never performed this cut is an observation of an event
// that never happened).
//
// Recorded law silences. No canonical law defines live-session semantics
// for more than one principal, and the words for a joint or
// multi-principal read, a shared session, or a counterpart have zero law
// hits — collaborative live-session semantics are unaddressed by law,
// NOT deferred (the messaging deferral list and the allocation waves name
// community/project runtime and external interop; the room model is a
// declared deferral, and a room is never a scope — membership is never
// inferred from presence). "Two principals" appears once in law demanding
// isolation, not a protocol. Every literal below is a receiver-recorded
// app-side decision, recorded here rather than in a law amendment.
//
// What the wall performs. The wall assesses ONE claimed collaborative
// read result and refuses it — every path refuses, no open branch exists.
// The wall's content-class vocabulary is a claim-RECOGNITION vocabulary,
// never a declared intake: naming the three classes a claim can honestly
// present declares no read lane, no record surface, and no counterpart
// channel (the D-P15 widening posture stands — the frozen single-
// principal gate refused collaborative reads as out of its scope, and
// THE FROZEN GATE'S REFUSAL PHRASE NEVER APPEARS AS A LANE POSITIVE
// LITERAL anywhere in this cut: it is reachable only through mapped
// echoes). The performed rung of this lane ADMITS a structural-records
// inspection scope only — NO record content is read by any arm of any
// contract this cut, NO live counterpart authentication exists, and the
// counterpart chain is structural and never-issued — so every claimed
// read result, of every class, composes nothing. The assessment echoes
// NOTHING about the claim — no content text, no source identity, no
// content class: a claim asserts, and a refusal is not a record of what
// arrived. Not even text this receiver itself composed is echoed (the
// composed-prose precedent).
//
// The forbidden-inventory closure. The lane's widened inventory carries
// the claimed-content KEY itself, so any record anywhere that carries a
// nested claimed-content field is refused wholesale — a stronger closure
// than the companion-lane wall, which closed the hole only at its object
// key. The claim shape below therefore uses field names OUTSIDE the
// inventory (its content key is a distinct name), so the wall can
// validate a well-formed claim at all; the wall's ONE input-object key is
// likewise not an inventory key, because the wall itself must be able to
// reach the claim — the hole closes because a claim's content key can
// only live under SOME wrapper, and any wrapper carrying it refuses.

import {
  POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS,
} from "./pond-collaborative-read-session-request-decision.ts";

// The declared claimed-collaborative-read content-class vocabulary: the
// three classes a claim can honestly present ABOUT WHAT IT CLAIMS TO
// CARRY. This is a claim-RECOGNITION vocabulary — declaring it declares
// NO read lane, NO record surface, and NO joint read authority (no
// channel class, trusted or otherwise, admits a claimed read result
// here). `receiver_structural_record_content` — a claim that the
// RECEIVER's own structural records were read and content returned, and
// no record read is performed this cut;
// `counterpart_structural_record_content` — a claim that a COUNTERPART's
// records were read through the declared join, and the counterpart is
// structural and never-issued, with no live counterpart chain anywhere;
// `joint_collaborative_read_content` — the terminal honest class: text
// claimed to be the joint product of a collaborative read never
// performed, which still refuses terminally.
export type PondClaimedCollaborativeReadContentClass =
  | "receiver_structural_record_content"
  | "counterpart_structural_record_content"
  | "joint_collaborative_read_content";

const contentClassVocabulary = [
  "receiver_structural_record_content",
  "counterpart_structural_record_content",
  "joint_collaborative_read_content",
];

export const POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES =
  Object.freeze([
    "receiver_structural_record_content",
    "counterpart_structural_record_content",
    "joint_collaborative_read_content",
  ] as const);

// The claim a counterpart may put forward: three exact string keys — the
// content text it CLAIMS a collaborative read produced, the class it
// claims produced it, and the source it claims produced it. The content
// key's name is deliberately OUTSIDE the lane's forbidden inventory (the
// inventory carries the generic claimed-content key, see the closure
// commentary above) — naming it here declares no read lane. NO envelope,
// counterpart id, or chain-material field exists at the shape level, so
// no claimed counterpart infrastructure can ever enter an assessment
// field.
export interface PondClaimedCollaborativeRead {
  readonly claimedCollaborativeReadText: string;
  readonly claimedCollaborativeReadClass: string;
  readonly claimedCollaborativeReadSourceRef: string;
}

// The claimed-collaborative refusal input: ONE exact key. No session
// legs, no evaluation pair, no clock — the wall stands outside any
// session, and nothing about any claim is stored anywhere.
export interface PondClaimedCollaborativeReadDecisionInput {
  readonly claimedCollaborativeRead: unknown;
}

// Receiver-owned claimed-collaborative checks (L49-55): the conditions
// under which composing a claimed collaborative read result could be
// lawful, evaluated honestly even where nothing passes. The last two CAN
// NEVER PASS this cut: no record-read runtime exists over the admitted
// structural inspection scope (content is read by nothing this cut), so
// no claimed text is composable, and no claimed read result can carry
// counterpart authority or membership (scope-sov L72-79; the shared
// membership grants no capability). A source's declaredness folds into
// the terminal arm's honest readout as data, never as a third state or a
// separate vocabulary.
export type PondClaimedCollaborativeReadCheck =
  | "pond_claimed_collaborative_read_claim_well_formed"
  | "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary"
  | "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime"
  | "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership";

// The refusal assessment. The state set is ONE literal (the standing
// wall deviation mold): refusals are not records, and no composed state
// exists this cut.
export interface PondClaimedCollaborativeReadRefusalAssessment {
  readonly contractVersion: "pond-claimed-collaborative-read-refusal-d-p23";
  readonly claimedCollaborativeReadRefusalVersion:
    | "pond-claimed-collaborative-read-refusal-d-p23"
    | "invalid";
  readonly assessmentKind: "deterministic_supplied_claimed_collaborative_read_refusal";
  readonly claimedCollaborativeReadState: "claimed_collaborative_read_content_not_composed";
  readonly reason:
    | "pond_claimed_collaborative_read_claim_invalid"
    | "pond_claimed_collaborative_read_class_unknown_fail_closed"
    | "pond_claimed_collaborative_receiver_record_content_refused_no_record_read_is_performed_this_cut"
    | "pond_claimed_collaborative_counterpart_record_content_refused_the_counterpart_is_structural_never_issued_no_live_counterpart_chain_exists"
    | "pond_claimed_collaborative_joint_read_content_refused_no_collaborative_read_result_exists_this_cut";
  readonly claimedCollaborativeReadWallPosture: "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut";
  readonly satisfiedChecks: readonly PondClaimedCollaborativeReadCheck[];
  readonly unsatisfiedChecks: readonly PondClaimedCollaborativeReadCheck[];
  // The all-false ceiling: a claimed collaborative read result is
  // evidence of nothing and echoes nothing. It establishes no read
  // result, no structural record evidence, no counterpart identity, no
  // admission, and no authority; the content, the source identity, and
  // the content class are echoed and stored NOWHERE and a claimed source
  // is never accepted as an identity; it establishes no live session or
  // read gate, no grant, no consequence or execution, and no membership;
  // and the standing inherited ceiling holds (evidence law: an
  // observation alone is never canonical evidence, a typed literal is
  // not evidence, no optimistic zero; trusted-channel L7, L35; scope-sov
  // L72-79, L104; attestation L419-427).
  readonly claimedCollaborativeReadEstablishesReadResult: false;
  readonly claimedCollaborativeReadEstablishesStructuralRecordEvidence: false;
  readonly claimedCollaborativeReadEstablishesCounterpartIdentity: false;
  readonly claimedCollaborativeReadEstablishesAdmission: false;
  readonly claimedCollaborativeReadEstablishesAuthority: false;
  readonly claimedCollaborativeReadContentEchoed: false;
  readonly claimedCollaborativeReadContentStored: false;
  readonly claimedCollaborativeReadSourceRefEchoed: false;
  readonly claimedCollaborativeReadSourceRefAcceptedAsIdentity: false;
  readonly claimedCollaborativeReadClassEchoed: false;
  readonly claimedCollaborativeReadEstablishesLiveSessionOrReadGate: false;
  readonly claimedCollaborativeReadEstablishesGrant: false;
  readonly claimedCollaborativeReadEstablishesConsequenceOrExecution: false;
  readonly claimedCollaborativeReadEstablishesMembership: false;
  readonly credentialAdmitted: false;
  readonly principalIdAcceptedAsAuthorization: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

const claimedCollaborativeReadChecks = Object.freeze([
  "pond_claimed_collaborative_read_claim_well_formed",
  "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary",
  "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime",
  "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership",
] as const satisfies readonly PondClaimedCollaborativeReadCheck[]);

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
// The claimed source's presence keeps the claim coherent about WHAT
// produced it; the ref itself is never echoed anywhere.
const validClaimedCollaborativeRead = (value: unknown): boolean => {
  const claimValue = record(value);
  return (
    claimValue !== null &&
    exactKeys(claimValue, [
      "claimedCollaborativeReadText",
      "claimedCollaborativeReadClass",
      "claimedCollaborativeReadSourceRef",
    ]) &&
    nonEmptyString(claimValue.claimedCollaborativeReadText) &&
    nonEmptyString(claimValue.claimedCollaborativeReadClass) &&
    nonEmptyString(claimValue.claimedCollaborativeReadSourceRef) &&
    !hasForbiddenKey(
      claimValue,
      POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS,
    )
  );
};

// The refusal assessment builder: identical shape on every arm — one
// state, one posture, all-false ceiling, zero claimed-* echo. `satisfied`
// is nonempty only on the terminal arm, where the honest fold makes the
// shape- and vocabulary-side checks readable alongside the two that can
// never pass.
const refusalAssessment = (
  reason: PondClaimedCollaborativeReadRefusalAssessment["reason"],
  claimedCollaborativeReadRefusalVersion: PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadRefusalVersion"],
  satisfiedChecks: readonly PondClaimedCollaborativeReadCheck[],
  unsatisfiedChecks: readonly PondClaimedCollaborativeReadCheck[],
): PondClaimedCollaborativeReadRefusalAssessment => {
  return Object.freeze({
    contractVersion: "pond-claimed-collaborative-read-refusal-d-p23",
    claimedCollaborativeReadRefusalVersion,
    assessmentKind:
      "deterministic_supplied_claimed_collaborative_read_refusal",
    claimedCollaborativeReadState:
      "claimed_collaborative_read_content_not_composed" as const,
    reason,
    // The standing posture: the wall is standing and fail-closed on
    // every arm — nothing this cut assesses composes a collaborative
    // read result.
    claimedCollaborativeReadWallPosture:
      "standing_claimed_collaborative_wall_refused_no_collaborative_read_result_exists_this_cut" as const,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The all-false ceiling: a refusal is evidence of nothing and echoes
    // nothing (evidence law; trusted-channel L7, L35; scope-sov L72-79,
    // L104; attestation L419-427).
    claimedCollaborativeReadEstablishesReadResult: false,
    claimedCollaborativeReadEstablishesStructuralRecordEvidence: false,
    claimedCollaborativeReadEstablishesCounterpartIdentity: false,
    claimedCollaborativeReadEstablishesAdmission: false,
    claimedCollaborativeReadEstablishesAuthority: false,
    claimedCollaborativeReadContentEchoed: false,
    claimedCollaborativeReadContentStored: false,
    claimedCollaborativeReadSourceRefEchoed: false,
    claimedCollaborativeReadSourceRefAcceptedAsIdentity: false,
    claimedCollaborativeReadClassEchoed: false,
    claimedCollaborativeReadEstablishesLiveSessionOrReadGate: false,
    claimedCollaborativeReadEstablishesGrant: false,
    claimedCollaborativeReadEstablishesConsequenceOrExecution: false,
    claimedCollaborativeReadEstablishesMembership: false,
    credentialAdmitted: false,
    principalIdAcceptedAsAuthorization: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });
};

export function assessPondClaimedCollaborativeReadRefusal(
  input: PondClaimedCollaborativeReadDecisionInput,
): PondClaimedCollaborativeReadRefusalAssessment {
  // The fail-closed gate on the input object itself: garbage never
  // throws — a non-object input degrades to an empty record the claim
  // validation refuses as shape-invalid (the D-P8 fail-closed
  // discipline).
  const normalizedInput = record(input);
  input = (
    normalizedInput === null
      ? {}
      : normalizedInput
  ) as unknown as PondClaimedCollaborativeReadDecisionInput;
  if (!validClaimedCollaborativeRead(input.claimedCollaborativeRead))
    return refusalAssessment(
      "pond_claimed_collaborative_read_claim_invalid",
      "invalid",
      [],
      claimedCollaborativeReadChecks,
    );
  const claimValue = input.claimedCollaborativeRead as Record<string, unknown>;
  const claimedClass = String(claimValue["claimedCollaborativeReadClass"]);

  // Cause 2: the class name is not of the declared claim-recognition
  // vocabulary at all — unknown names FAIL CLOSED rather than inherit
  // recognition from a neighboring class (trusted-channel L35).
  if (!contentClassVocabulary.includes(claimedClass))
    return refusalAssessment(
      "pond_claimed_collaborative_read_class_unknown_fail_closed",
      "pond-claimed-collaborative-read-refusal-d-p23",
      [],
      claimedCollaborativeReadChecks,
    );

  // Cause 3: a claimed receiver-record read — no record read is
  // performed anywhere this cut: the performed rung ADMITS an inspection
  // scope of structural targets and reads nothing, so a claimed read of
  // even the receiver's own records is an observation of an event that
  // never happened. Refused without echoing the text or the claimed
  // read.
  if (claimedClass === "receiver_structural_record_content")
    return refusalAssessment(
      "pond_claimed_collaborative_receiver_record_content_refused_no_record_read_is_performed_this_cut",
      "pond-claimed-collaborative-read-refusal-d-p23",
      [],
      claimedCollaborativeReadChecks,
    );

  // Cause 4: claimed counterpart-record or any claimed live-counterpart
  // content — the counterpart chain is structural and NEVER-ISSUED, and
  // no live counterpart authentication or channel exists anywhere in
  // this lane, so no content can have come from a counterpart at all.
  if (claimedClass === "counterpart_structural_record_content")
    return refusalAssessment(
      "pond_claimed_collaborative_counterpart_record_content_refused_the_counterpart_is_structural_never_issued_no_live_counterpart_chain_exists",
      "pond-claimed-collaborative-read-refusal-d-p23",
      [],
      claimedCollaborativeReadChecks,
    );

  // Cause 5 — terminal: the claim is well-formed and honestly declared
  // (`joint_collaborative_read_content` is the only class left), and
  // still refuses: the content is claimed to be the joint product of a
  // collaborative read NEVER performed this cut, and a claimed result
  // must never collapse a structural admission into content (trusted-
  // channel L7 — channels never become interchangeable because they
  // serialize as text). The honest fold makes the shape- and vocabulary-
  // side checks readable alongside the two that can never pass; the
  // claimed source's declaredness rides this readout as data (a
  // well-formed claim carries it by shape, so the fold's honest readout
  // is the shape-side checks green against the two never-passing ceiling
  // checks — no third-state vocabulary exists and none is invented).
  const values = [
    true,
    POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES.includes(
      claimedClass as (typeof POND_STAGE_DP23_DECLARED_CLAIMED_COLLABORATIVE_READ_CONTENT_CLASSES)[number],
    ),
    false,
    false,
  ];
  const satisfied = claimedCollaborativeReadChecks.filter(
    (_, index) => values[index] === true,
  );
  const unsatisfied = claimedCollaborativeReadChecks.filter(
    (_, index) => values[index] !== true,
  );
  return refusalAssessment(
    "pond_claimed_collaborative_joint_read_content_refused_no_collaborative_read_result_exists_this_cut",
    "pond-claimed-collaborative-read-refusal-d-p23",
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

export type PondStageDP23Invariant_ClaimedCollaborativeReadChecksExact = Assert<
  Equal<
    PondClaimedCollaborativeReadCheck,
    | "pond_claimed_collaborative_read_claim_well_formed"
    | "pond_claimed_collaborative_read_class_of_the_declared_claim_vocabulary"
    | "pond_claimed_collaborative_read_content_composible_by_an_established_collaborative_read_runtime"
    | "pond_claimed_collaborative_read_carries_no_counterpart_authority_or_membership"
  >
>;
export type PondStageDP23Invariant_ClaimedCollaborativeReadStateSingleLiteral =
  Assert<
    Equal<
      PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadState"],
      "claimed_collaborative_read_content_not_composed"
    >
  >;
export type PondStageDP23Invariant_ClaimedCollaborativeReadReasonsExact = Assert<
  Equal<
    PondClaimedCollaborativeReadRefusalAssessment["reason"],
    | "pond_claimed_collaborative_read_claim_invalid"
    | "pond_claimed_collaborative_read_class_unknown_fail_closed"
    | "pond_claimed_collaborative_receiver_record_content_refused_no_record_read_is_performed_this_cut"
    | "pond_claimed_collaborative_counterpart_record_content_refused_the_counterpart_is_structural_never_issued_no_live_counterpart_chain_exists"
    | "pond_claimed_collaborative_joint_read_content_refused_no_collaborative_read_result_exists_this_cut"
  >
>;
export type PondStageDP23Invariant_ContentClassesExact = Assert<
  Equal<
    PondClaimedCollaborativeReadContentClass,
    | "receiver_structural_record_content"
    | "counterpart_structural_record_content"
    | "joint_collaborative_read_content"
  >
>;
export type PondStageDP23Invariant_ClaimedCollaborativeReadEstablishesNothing =
  Assert<
    Equal<
      [
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadEstablishesReadResult"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadEstablishesStructuralRecordEvidence"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadEstablishesCounterpartIdentity"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadEstablishesAdmission"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadEstablishesAuthority"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadContentEchoed"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadContentStored"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadSourceRefEchoed"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadSourceRefAcceptedAsIdentity"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadClassEchoed"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadEstablishesLiveSessionOrReadGate"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadEstablishesGrant"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadEstablishesConsequenceOrExecution"],
        PondClaimedCollaborativeReadRefusalAssessment["claimedCollaborativeReadEstablishesMembership"],
        PondClaimedCollaborativeReadRefusalAssessment["credentialAdmitted"],
        PondClaimedCollaborativeReadRefusalAssessment["principalIdAcceptedAsAuthorization"],
        PondClaimedCollaborativeReadRefusalAssessment["runtimeActivationPosture"],
        PondClaimedCollaborativeReadRefusalAssessment["authority"],
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
export type PondStageDP23Invariant_NoForbiddenClaimKeys = Assert<
  HasAnyKey<PondClaimedCollaborativeRead, (typeof POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS)[number]> extends false
    ? true
    : false
>;
export type PondStageDP23Invariant_NoForbiddenAssessmentKeys = Assert<
  HasAnyKey<PondClaimedCollaborativeReadRefusalAssessment, (typeof POND_STAGE_DP23_FORBIDDEN_COLLABORATIVE_LIVE_READ_KEYS)[number]> extends false
    ? true
    : false
>;