// Stage D-P25 — generic-agent frontend projection.
// Native select, keyboard-operable; textContent-only; no network, storage,
// credential, admission, message, invocation, or add-on activation path.
import record, {
  assessPondGenericAgentFrontFace,
} from "./generated/pond-stage-d-generic-agent-front-face.js";

const connectionLabels = Object.freeze({
  fixture_disconnected: "Disconnected fixture",
  fixture_discovered: "Discovered fixture",
  fixture_not_admitted: "Not admitted fixture",
  fixture_available: "Available fixture",
  fixture_busy: "Busy fixture",
  fixture_unavailable: "Unavailable fixture",
  fixture_failed: "Failed fixture",
});

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

const renderExtension = (doc, extension) => {
  const item = doc.createElement("li");
  item.className = "generic-agent-extension";
  item.dataset.extensionState = extension.state;
  item.append(
    text(doc, "strong", null, extension.label),
    text(doc, "span", null, extension.state.replaceAll("_", " ")),
    text(doc, "small", null, extension.posture.replaceAll("_", " ")),
  );
  return item;
};

export const renderPondGenericAgentFrontFace = (
  doc = (typeof document !== "undefined" ? document : undefined),
  projectionSource = record,
) => {
  if (!doc || typeof doc.querySelector !== "function") return false;
  const root = doc.querySelector("[data-generic-agent-front-face]");
  const selector = root?.querySelector("[data-generic-agent-select]");
  const status = root?.querySelector("[data-generic-agent-status]");
  const facts = root?.querySelector("[data-generic-agent-facts]");
  const capabilities = root?.querySelector("[data-generic-agent-capabilities]");
  const extensions = root?.querySelector("[data-generic-agent-extensions]");
  if (!root || !selector || !status || !facts || !capabilities || !extensions)
    return false;

  const failClosed = (reason) => {
    selector.disabled = true;
    status.textContent = `Unavailable — ${reason}`;
    facts.replaceChildren();
    capabilities.replaceChildren(text(doc, "li", null, "Withheld"));
    extensions.replaceChildren(text(doc, "li", null, "Withheld"));
    root.dataset.genericAgentRenderPosture = "fail_closed";
    root.dataset.authority = "none";
    return false;
  };

  if (
    projectionSource === null ||
    typeof projectionSource !== "object" ||
    root.dataset.genericAgentRecordVersion !== projectionSource.contractVersion ||
    projectionSource.runtimeActivationPosture !== "not_included" ||
    projectionSource.authority !== "none" ||
    !Array.isArray(projectionSource.projections) ||
    projectionSource.projections.length === 0
  ) return failClosed("projection record failed validation");

  selector.replaceChildren(...projectionSource.projections.map((projection) => {
    const option = doc.createElement("option");
    option.value = projection.agentId;
    option.textContent = `${projection.displayName} · ${projection.profile.replaceAll("_", " ")}`;
    return option;
  }));
  selector.value = projectionSource.initialSelectedAgentId;

  const renderSelection = () => {
    const assessment = assessPondGenericAgentFrontFace({
      projections: projectionSource.projections,
      selectedAgentId: selector.value,
    });
    if (
      assessment.projectionState !==
        "generic_agent_front_face_presented_fixture_only" ||
      assessment.selectedAgent === null ||
      assessment.authority !== "none" ||
      assessment.runtimeActivationPosture !== "not_included"
    ) return failClosed(assessment.reason);

    const selected = assessment.selectedAgent;
    status.textContent =
      `${selected.displayName} selected for frontend preview only. ` +
      `${connectionLabels[selected.connectionState] ?? selected.connectionState}; ` +
      `admission ${selected.admissionState}. No connection opened.`;
    facts.replaceChildren(
      fact(doc, "Agent ID", selected.agentId),
      fact(doc, "Installation", selected.installationId ?? "Not projected"),
      fact(doc, "Projection source", selected.projectionSourceId),
      fact(doc, "Connection", connectionLabels[selected.connectionState] ?? selected.connectionState),
      fact(doc, "Admission", selected.admissionState),
      fact(doc, "Authority", assessment.authority),
    );
    capabilities.replaceChildren(...(
      selected.declaredCapabilityRefs.length > 0
        ? selected.declaredCapabilityRefs.map((capability) =>
            text(doc, "li", null, `${capability} · declared, not granted`))
        : [text(doc, "li", null, "No declared capabilities projected")]
    ));
    extensions.replaceChildren(...assessment.extensions.map((extension) =>
      renderExtension(doc, extension)));
    root.dataset.genericAgentRenderPosture = "rendered_fixture_only";
    root.dataset.selectedAgentId = selected.agentId;
    root.dataset.authority = "none";
    return true;
  };

  selector.addEventListener("change", renderSelection);
  return renderSelection();
};

if (typeof document !== "undefined") renderPondGenericAgentFrontFace(document);
