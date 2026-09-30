// Stage D-P20 — the message-transport lane: the receiver records one
// transport policy — the in-process policy, the only performable policy
// this cut — over a currently prepared D-P17 delivery candidate, and a
// standing fail-closed inbound wall refuses every remote external
// message-intake claim. The L220 transport list (A2A, MCP, HTTP,
// websockets, queues, Slack, Telegram, Discord, and future transports) is
// declared verbatim; every external policy refuses.
//
// What this module never does: no transport runtime exists — no
// endpoint, socket, network, queue, AgentCard, runtime schema, or
// serialization; the policy is consumed by no transport stage this cut
// (the D-P18 dispatch stays frozen; the decision point is inherited, not
// exercised); no channel-class authority is established; no intake log
// exists — a refused claim stores nothing (a refusal is not a record);
// and nothing is persisted.
//
// The policy is session-scoped governance whose applicability the
// reassessment governs: unlike a D-P19 receipt (frozen at issuance,
// inspection-only), a policy re-assesses honestly after retraction and
// confines when the certified candidate is no longer currently prepared
// — frozen survival would dress a dead policy as live governance.
//
// Contract code reaches this module only through the committed generated
// artifact (ui/generated/), never directly from src/.

import {
  assessPondTransportPolicyDecision,
  assessPondRemoteMessageIntakeRefusal,
  POND_STAGE_DP20_DECLARED_INTAKE_CHANNEL_CLASSES,
  pondStageDP20TransportPolicyTemplate,
} from "./generated/pond-stage-d-live-session-transport.js";
import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./generated/pond-stage-d-live-session.js";
import { heldDeliveryDecisions } from "./pond-delivery.js";
import { heldLiveSessionRecords } from "./pond-live-session.js";

// ---------------------------------------------------------------------------
// Recorded transport-policy decisions: module scope only. Each entry
// carries the policy record and its own recording facts beside the held
// delivery entry's honest facts (the delivered text stays beside the entry
// in shell state only — the assessments never carry text). A refused
// policy stores nothing.
// ---------------------------------------------------------------------------

const recordedPolicyDecisions = [];

// The receiver records one in-process transport policy over a delivery
// decision whose re-run is currently prepared at the policy's own
// evaluation instant. The candidate legs come from the held delivery
// entries — never restated, never copied with altered shape — and the
// policy record is built from the frozen template with the receiver-own
// identity fields filled (the principal ref stays the held session's own
// principal; the policy-event instant keeps the policy its own event-time
// freshness). Selecting an external policy, a policy over a not-currently-
// prepared candidate, or a replayed policy attempt all refuse honestly
// and store nothing.
export const recordTransportPolicy = ({
  deliveryDecisionIndex,
  policyRecordedAtEpochMs,
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const deliveryHold = heldDeliveryDecisions();
  const decisionIndex =
    typeof deliveryDecisionIndex === "number" &&
    Number.isSafeInteger(deliveryDecisionIndex) &&
    deliveryDecisionIndex >= 0 &&
    deliveryDecisionIndex < deliveryHold.decisions.length
      ? deliveryDecisionIndex
      : null;
  // Out-of-range delivery decisions refuse before any input exists —
  // there is no candidate to govern, so no assessment is fabricated here.
  if (decisionIndex === null) {
    return Object.freeze({
      recorded: false,
      assessment: null,
      refusalReason: "delivery_decision_index_out_of_range",
    });
  }
  const heldDecision = deliveryHold.decisions[decisionIndex];
  const replayed = recordedPolicyDecisions.some(
    (decision) => decision.deliveryDecisionIndex === decisionIndex,
  );
  const policy = Object.freeze({
    ...pondStageDP20TransportPolicyTemplate,
    transportPolicyMetadata: Object.freeze({
      ...pondStageDP20TransportPolicyTemplate.transportPolicyMetadata,
      recorded_at_epoch_ms: policyRecordedAtEpochMs,
    }),
    principalRef: heldDecision.input.receiverHeldPrincipalRef,
    policyBasis: replayed
      ? "replayed_from_prior_policy_decision"
      : "receiver_recorded_transport_policy_not_inferred",
  });
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  const input = Object.freeze({
    ...heldDecision.input,
    receiverRetractionRecord: held.retractionRecord,
    receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
    receiverMaximumAgeMs: maximumAgeMs,
    transportPolicy: policy,
  });
  const assessment = assessPondTransportPolicyDecision(input);
  const recorded =
    assessment.transportPolicyState ===
    "transport_policy_recorded_session_scoped_no_external_transport";
  if (recorded) {
    recordedPolicyDecisions.push(
      Object.freeze({
        input,
        policy,
        deliveredText: heldDecision.composedText,
        addressedAgentRef: heldDecision.addressedAgentRef,
        deliveryDecisionIndex: decisionIndex,
        policyRecordedAtEpochMs,
      }),
    );
  }
  return Object.freeze({
    recorded,
    assessment,
  });
};

// The policy posture: the recorded policies re-assess honestly per call
// (the deliberate contrast with the D-P19 receipts' frozen-at-issuance
// presentation) — while the certified candidate is still currently
// prepared the policy stands; once the session has ended or the
// reassessment refuses, the row presents the reassessment's verbatim
// refusal. Staleness never deletes the policy; it just stops being
// live governance.
export const currentTransportPosture = ({
  evaluatedAtEpochMs,
  maximumAgeMs = POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
}) => {
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs });
  const policies = recordedPolicyDecisions.map((decision) => {
    const reassessment = assessPondTransportPolicyDecision({
      ...decision.input,
      receiverRetractionRecord: held.retractionRecord,
      receiverEvaluatedAtEpochMs: evaluatedAtEpochMs,
      receiverMaximumAgeMs: maximumAgeMs,
    });
    const stillInSession =
      reassessment.transportPolicyState ===
      "transport_policy_recorded_session_scoped_no_external_transport";
    return Object.freeze({
      policy: decision.policy,
      deliveredText: decision.deliveredText,
      addressedAgentRef: decision.addressedAgentRef,
      deliveryDecisionIndex: decision.deliveryDecisionIndex,
      policyRecordedAtEpochMs: decision.policyRecordedAtEpochMs,
      presentationMark: stillInSession
        ? "in_session"
        : "confined_reassessment_refusal",
      reassessmentReason: reassessment.reason,
    });
  });
  return Object.freeze({
    held: policies.length > 0,
    policies,
  });
};

// The standing inbound-wall posture: evaluated against the fixture-clock
// evaluation instant the shell supplies (the wall accepts a claim and
// always refuses — no claim, no clock, and no storage ever enters the
// wall's module state; this helper exists only so the rendered panel can
// present the wall's own verified refusal posture verbatim rather than
// restated prose).
export const currentRemoteMessageWallPosture = () => {
  const sample = assessPondRemoteMessageIntakeRefusal({
    remoteMessageClaim: {
      claimedTransport: "a2a",
      claimedChannelClass: "untrusted_external_input",
      senderEvidenceRef: "evidence:sample:sender-key-thumbprint",
    },
  });
  return Object.freeze({
    reason: sample.reason,
    intakeState: sample.intakeState,
    declaredIntakeChannelClasses: POND_STAGE_DP20_DECLARED_INTAKE_CHANNEL_CLASSES.map((cls) => cls),
  });
};

// ---------------------------------------------------------------------------
// Rendering: textContent only, refusal-first, verbatim assessment values.
// The policy rows present the recorded facts verbatim with the honest
// reassessment mark; the policy affordance is offered only over a held
// delivery decision whose re-run is still currently prepared and not yet
// policy-recorded. The inbound-wall panel is static prose — no wall
// affordance exists, because nothing can be offered.
// ---------------------------------------------------------------------------

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const factsList = (documentRef, facts) => {
  const list = documentRef.createElement("dl");
  list.className = "transport-facts";
  for (const [label, value] of facts) {
    const row = documentRef.createElement("div");
    row.append(
      text(documentRef, "dt", null, label),
      text(documentRef, "dd", null, value),
    );
    list.append(row);
  }
  return list;
};

const presentationLabel = (mark, reassessmentReason) =>
  mark === "in_session"
    ? "transport policy recorded · session-scoped governance"
    : `transport policy confined — ${reassessmentReason}`;

export const renderPondTransport = (documentRef = globalThis.document) => {
  if (!documentRef) return false;

  const root = documentRef.querySelector("[data-transport-note]");
  const statusTarget = documentRef.querySelector("[data-transport-status]");
  const listTarget = documentRef.querySelector("[data-transport-list]");
  if (!root || !statusTarget || !listTarget) return false;

  const nowMs = Date.now();
  const transportHold = currentTransportPosture({
    evaluatedAtEpochMs: nowMs,
  });
  const deliveryHold = heldDeliveryDecisions();
  const policyRecordedIndexes = new Set(
    transportHold.policies.map((row) => row.deliveryDecisionIndex),
  );
  const held = heldLiveSessionRecords({ evaluatedAtEpochMs: nowMs });
  const wallPosture = currentRemoteMessageWallPosture();

  const recordList = documentRef.createElement("div");
  recordList.className = "transport-list";
  transportHold.policies.forEach((row) => {
    const item = documentRef.createElement("div");
    item.className = "transport-record";
    item.append(
      text(documentRef, "p", "transport-record-verdict", presentationLabel(row.presentationMark, row.reassessmentReason)),
      text(documentRef, "p", "transport-record-destination", row.addressedAgentRef),
      factsList(documentRef, [
        ["Policy", row.policy.transportPolicy],
        ["Basis", row.policy.policyBasis],
        ["Recorded at", row.policy.transportPolicyMetadata.recorded_at_epoch_ms],
        ["Transport posture", row.policy.policyTransportPosture],
        ["Runtime posture", row.policy.policyRuntimePosture],
        ["Channel authority", row.policy.policyChannelAuthorityPosture],
        ["Policy consumption", row.policy.transportPolicyMetadata.currentness_posture],
        ["Authority", row.policy.authority],
      ]),
    );
    item.append(
      text(documentRef, "p", "transport-record-text", row.deliveredText),
    );
    recordList.append(item);
  });
  if (transportHold.policies.length === 0) {
    recordList.append(
      text(
        documentRef,
        "p",
        "cockpit-note",
        "No transport policy recorded — recording a policy requires a currently prepared delivery candidate. No endpoint, queue, AgentCard, or external transport exists here.",
      ),
    );
  }

  // The policy affordances ride the prepared delivery entries: one policy
  // per candidate, offered only while the certified candidate re-runs
  // currently prepared at the live evaluation time; replayed and
  // out-of-session candidates present inspection-only honest refusal
  // text.
  deliveryHold.decisions.forEach((decision, index) => {
    const recorded = policyRecordedIndexes.has(index);
    const reassessment = assessPondTransportPolicyDecision({
      ...decision.input,
      receiverRetractionRecord: held.retractionRecord,
      receiverEvaluatedAtEpochMs: nowMs,
      receiverMaximumAgeMs: POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS,
    });
    const prepared =
      reassessment.transportPolicyState ===
      "transport_policy_recorded_session_scoped_no_external_transport";
    const item = documentRef.createElement("div");
    item.className = "transport-record";
    item.append(
      text(documentRef, "p", "transport-record-destination", decision.addressedAgentRef),
      text(documentRef, "p", "transport-record-text", decision.composedText),
    );
    const affordance = documentRef.createElement("button");
    affordance.type = "button";
    affordance.className = "transport-affordance";
    if (!recorded && prepared) {
      affordance.textContent = "Record transport policy · in-process delivery only";
      affordance.addEventListener("click", () => {
        const recordNow = Date.now();
        const result = recordTransportPolicy({
          deliveryDecisionIndex: index,
          policyRecordedAtEpochMs: recordNow,
          evaluatedAtEpochMs: recordNow,
        });
        if (!result.recorded) {
          // Nothing stored — the honest refusal is the whole update.
          statusTarget.replaceChildren(
            text(
              documentRef,
              "p",
              "cockpit-note",
              `Transport policy refused — ${result.refusalReason ?? result.assessment.reason}. Refused policies store nothing.`,
            ),
          );
          return;
        }
        // The policy posture rows re-assess honestly per render: the
        // whole render re-runs, the list stays index-paired, and the new
        // row presents its reassessment honestly.
        renderPondTransport(documentRef);
      });
    } else if (recorded) {
      affordance.disabled = true;
      affordance.textContent = "Recorded — reuse refused as a replayed policy";
      affordance.setAttribute("data-transport-refused-replay", "true");
    } else {
      affordance.disabled = true;
      affordance.textContent = `Policy not admissible — ${reassessment.reason}`;
      affordance.setAttribute("data-transport-refused-entry", "true");
    }
    item.append(affordance);
    recordList.append(item);
  });

  // The standing inbound-wall panel: static prose with no affordance —
  // every remote external message-intake claim refuses, so the panel can
  // never offer anything. The wall's own verified standing refusal
  // posture is presented verbatim; nothing about any claim is echoed.
  const wallPanel = documentRef.createElement("div");
  wallPanel.className = "transport-wall";
  wallPanel.setAttribute("data-transport-wall", "true");
  wallPanel.append(
    text(documentRef, "p", "transport-wall-verdict", `Inbound wall · ${wallPosture.reason}`),
    factsList(documentRef, [
      ["Intake state", wallPosture.intakeState],
      [
        "Declared intake channel classes",
        wallPosture.declaredIntakeChannelClasses.join(", "),
      ],
      [
        "Wall posture",
        "standing fail-closed — untrusted external input is refused; no admitted remote agent, no trusted channel class, no intake log; a refusal stores nothing",
      ],
    ]),
  );

  const renderWallNow = () =>
    wallPanel.setAttribute(
      "data-transport-wall-presented",
      String(wallPosture.intakeState === "remote_message_not_intaked"),
    );
  renderWallNow();

  const renderPondTransportNow = () => {
    const liveHold = currentTransportPosture({ evaluatedAtEpochMs: Date.now() });
    statusTarget.replaceChildren(
      text(
        documentRef,
        "p",
        "cockpit-note",
        `Transport posture · ${liveHold.policies.length} recorded polic${liveHold.policies.length === 1 ? "y" : "ies"} · re-assessed honestly — the policy stands while its certified candidate is currently prepared, confines verbatim otherwise; the policy consumes no transport stage this cut`,
      ),
    );
  };
  listTarget.replaceChildren(recordList, wallPanel);
  renderPondTransportNow();
  root.replaceChildren(
    text(
      documentRef,
      "p",
      "cockpit-note",
      "The transport-policy stage makes the delivery-policy decision the lifecycle requires: the receiver records the in-process policy over a prepared candidate, external transport policies are declared verbatim only to refuse, and the standing inbound wall refuses every remote external message-intake claim — no endpoint, socket, queue, AgentCard, or intake log exists.",
    ),
  );
  root.dataset.transportRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderPondTransport(document);
}