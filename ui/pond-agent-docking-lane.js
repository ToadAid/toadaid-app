// Stage D-P32 — the agent docking lane.
// Fill-once fixture presentation of the canonical admission ceremony over two
// docking briefs: textContent-only, no network, storage, credential,
// admission decision, intake channel, grant, message, or invocation path.
import record, {
  assessPondAgentDockingBrief,
} from "./generated/pond-stage-d-agent-docking-lane.js";

const text = (doc, tag, className, value) => {
  const node = doc.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const fact = (doc, label, value) => {
  const row = doc.createElement("div");
  row.append(text(doc, "dt", null, label), text(doc, "dd", null, value));
  return row;
};

export const renderPondAgentDockingLane = (
  doc = (typeof document !== "undefined" ? document : undefined),
  projectionSource = record,
) => {
  if (!doc || typeof doc.querySelector !== "function") return false;
  const root = doc.querySelector("[data-agent-docking-lane]");
  const briefs = root?.querySelector("[data-docking-briefs]");
  const wallFacts = root?.querySelector("[data-docking-wall-facts]");
  const standingLine = root?.querySelector("[data-docking-standing-line]");
  if (!root || !briefs || !wallFacts || !standingLine) return false;

  const failClosed = (reason) => {
    briefs.replaceChildren(text(doc, "p", "cockpit-note", "Withheld"));
    wallFacts.replaceChildren();
    standingLine.textContent = `Unavailable — ${reason}`;
    root.dataset.dockingRenderPosture = "fail_closed";
    root.dataset.authority = "none";
    return false;
  };

  if (
    projectionSource === null ||
    typeof projectionSource !== "object" ||
    root.dataset.dockingRecordVersion !== projectionSource.contractVersion ||
    projectionSource.runtimeActivationPosture !== "not_included" ||
    projectionSource.authority !== "none" ||
    !Array.isArray(projectionSource.briefs) ||
    projectionSource.briefs.length === 0
  ) return failClosed("projection record failed validation");

  briefs.replaceChildren(...projectionSource.briefs.map((dockBrief) => {
    const assessment = assessPondAgentDockingBrief({ brief: dockBrief });
    const panel = doc.createElement("article");
    panel.className = "docking-brief";
    if (
      assessment.dockingLaneState !==
        "agent_docking_lane_presented_fixture_only" ||
      assessment.presentedBrief === null
    ) {
      panel.classList.add("docking-brief-refused");
      panel.append(text(
        doc, "p", "cockpit-note",
        `Docking brief refused — ${assessment.reason}. No brief is held, no intake opens.`,
      ));
      return panel;
    }

    const presented = assessment.presentedBrief;
    const identity = doc.createElement("header");
    identity.append(
      text(doc, "strong", "docking-brief-name", presented.displayName),
      text(doc, "span", "docking-brief-meta",
        `${presented.agentId} · ${presented.profile.replaceAll("_", " ")} · admission ${presented.admissionState.replaceAll("_", " ")}`),
    );
    panel.append(identity);

    const evidence = doc.createElement("section");
    evidence.append(text(doc, "h5", null, "Presented identity evidence"));
    evidence.append(text(
      doc, "p", "docking-basis",
      "evidence basis: presented refs, declared — never verified",
    ));
    const evidenceList = doc.createElement("ul");
    evidenceList.className = "docking-evidence-list";
    evidenceList.replaceChildren(...(
      assessment.presentedEvidence.length > 0
        ? assessment.presentedEvidence.map((entry) => text(
            doc, "li", null,
            `${entry.evidenceClassLabel} — ${entry.presentedRef} · declared, not verified`,
          ))
        : [text(doc, "li", null, "No identity evidence presented")]
    ));
    evidence.append(evidenceList);
    panel.append(evidence);

    const sequence = doc.createElement("section");
    sequence.append(text(doc, "h5", null, "Canonical admission sequence"));
    const sequenceList = doc.createElement("ol");
    sequenceList.className = "docking-sequence-list";
    sequenceList.replaceChildren(...assessment.sequence.map((step) =>
      text(doc, "li", null, `${step.stepLabel} — declared, not performed`)));
    sequence.append(sequenceList);
    panel.append(sequence);

    const requested = doc.createElement("section");
    requested.append(
      text(doc, "h5", null, "Requested scope relationship"),
      text(doc, "p", null, `${presented.requestedScopeRelationshipRef} · declared, not granted — a request is not admission and not membership`),
    );
    panel.append(requested);

    const capabilities = doc.createElement("section");
    capabilities.append(text(doc, "h5", null, "Declared capabilities"));
    const capabilityList = doc.createElement("ul");
    capabilityList.className = "docking-capability-list";
    capabilityList.replaceChildren(...(
      dockBrief.declaredCapabilityRefs.length > 0
        ? dockBrief.declaredCapabilityRefs.map((capability) =>
            text(doc, "li", null, `${capability} · declared, not granted`))
        : [text(doc, "li", null, "No declared capabilities projected")]
    ));
    capabilities.append(capabilityList);
    panel.append(capabilities);

    panel.dataset.dockingBriefState = "presented_fixture_only";
    panel.dataset.admissionState = presented.admissionState;
    return panel;
  }));

  wallFacts.replaceChildren(
    fact(doc, "Who may admit", "the human governing authority of the relevant scope — no agent, provider, transport, message, attestation, or automated rule holds or exercises it"),
    fact(doc, "Admission decision", "not made here — human-sovereign, scope-governed, recorded"),
    fact(doc, "Standing intake", "refused for an unadmitted sender — no standing intake path; the default, not a configurable choice"),
    fact(doc, "Profile interlock", "an admitted remote origin serves as a community-agent profile instance under the same law"),
    fact(doc, "Consequence path", "identity → admitted → scope → grant → policy → approval — unchanged and untouched by docking"),
    fact(doc, "Revocation and e-stop", "dominant across providers and transports; docking cannot route around them"),
  );
  standingLine.textContent = projectionSource.standingLine;

  root.dataset.dockingRenderPosture = "rendered_fixture_only";
  root.dataset.authority = "none";
  return true;
};

if (typeof document !== "undefined") renderPondAgentDockingLane(document);