// Stage D-P24 — Agent registry evidence renderer (fill-once, inspection-first).
//
// Fills the static agent-registry panel from the presented registration-
// evidence record (ui/generated/pond-stage-d-agent-registry.js).
// textContent-only, no fetch, no storage, no transport, no listeners, no
// affordances: the panel is an inspection surface over derived evidence.
// Fail-closed: if any expected node is missing or any record field fails to
// resolve, every presented value is withheld ("unavailable") and the panel is
// marked data-agent-registry-render-posture="fail_closed" — fallback or
// partial rendering is forbidden by the record's denial posture.

import pondStageDAgentRegistryRecord from "./generated/pond-stage-d-agent-registry.js";

export const renderPondAgentRegistry = (
  doc = (typeof document !== "undefined" ? document : undefined),
) => {
  if (!doc || typeof doc.querySelector !== "function") return false;
  const panel = doc.querySelector(".agent-registry-panel");
  if (!panel) return false;

  const UNAVAILABLE = "unavailable";
  const valueNodes = [...panel.querySelectorAll("[data-agent-registry-value]")];
  const serviceList = panel.querySelector("[data-agent-registry-list='services']");
  const trustList = panel.querySelector("[data-agent-registry-list='trust']");
  const postureList = panel.querySelector("[data-agent-registry-list='postures']");
  const checkList = panel.querySelector("[data-agent-registry-list='checks']");
  const onchainSlotNode = panel.querySelector("[data-agent-registry-onchain]");

  const resolveValue = (record, path) => {
    let cursor = record;
    for (const segment of path.split(".")) {
      if (cursor === null || typeof cursor !== "object") return null;
      cursor = cursor[segment];
    }
    if (typeof cursor === "string" || typeof cursor === "number" || typeof cursor === "boolean") {
      return String(cursor);
    }
    return null;
  };

  const renderStringList = (list, values, prefix = "") => {
    if (!list || !Array.isArray(values) || values.length === 0) return false;
    if (!values.every((value) => typeof value === "string" && value.length > 0)) return false;
    list.textContent = "";
    for (const value of values) {
      const item = doc.createElement("li");
      item.textContent = prefix.length > 0 ? `${prefix}${value}` : value;
      list.append(item);
    }
    return true;
  };

  const renderPostures = (list, postures) => {
    if (!list || postures === null || typeof postures !== "object") return false;
    const entries = Object.entries(postures);
    if (entries.length !== 7) return false;
    list.textContent = "";
    for (const [key, value] of entries) {
      if (typeof value !== "string" || value.length === 0) return false;
      const item = doc.createElement("li");
      item.textContent = `${key} · ${value}`;
      list.append(item);
    }
    return true;
  };

  const renderChecks = (list, checks) => {
    if (!list || !Array.isArray(checks) || checks.length === 0) return false;
    if (!checks.every((check) => typeof check === "string" && check.length > 0)) return false;
    list.textContent = "";
    for (const check of checks) {
      const item = doc.createElement("li");
      item.classList.add("is-satisfied");
      item.textContent = `satisfied · ${check}`;
      list.append(item);
    }
    return true;
  };

  const onchainSlotText = (status, notRuntimeIdentityPosture) => {
    if (typeof status !== "string" || status.length === 0) return null;
    if (typeof notRuntimeIdentityPosture !== "string" || notRuntimeIdentityPosture.length === 0) {
      return null;
    }
    return `none observed — ${notRuntimeIdentityPosture}`;
  };

  const failClosed = () => {
    for (const node of valueNodes) node.textContent = UNAVAILABLE;
    for (const list of [serviceList, trustList, postureList, checkList]) {
      if (list) {
        list.textContent = "";
        const item = doc.createElement("li");
        item.textContent = UNAVAILABLE;
        list.append(item);
      }
    }
    if (onchainSlotNode) onchainSlotNode.textContent = UNAVAILABLE;
    panel.dataset.agentRegistryRenderPosture = "fail_closed";
    return false;
  };

  // Presentation binds to the record version: a mismatch is a drift signal,
  // never something to paper over with the static markup.
  if (panel.dataset.agentRegistryRecordVersion !== pondStageDAgentRegistryRecord.contractVersion) {
    return failClosed();
  }

  let complete = true;
  const resolved = new Map();
  for (const node of valueNodes) {
    const value = resolveValue(pondStageDAgentRegistryRecord, node.dataset.agentRegistryValue);
    if (value === null) {
      complete = false;
      break;
    }
    resolved.set(node, value);
  }
  if (!complete) return failClosed();

  const servicesOk = renderStringList(serviceList, pondStageDAgentRegistryRecord.registrationServiceNames);
  const trustOk = renderStringList(trustList, pondStageDAgentRegistryRecord.supportedTrust);
  const posturesOk = renderPostures(postureList, pondStageDAgentRegistryRecord.evidencePostures);
  const checksOk = renderChecks(checkList, pondStageDAgentRegistryRecord.satisfiedChecks);
  const onchainOk = onchainSlotNode
    ? (() => {
        const text = onchainSlotText(
          pondStageDAgentRegistryRecord.onchainEvidenceSlotStatus,
          pondStageDAgentRegistryRecord.evidencePostures.notRuntimeIdentityPosture,
        );
        if (text === null) return false;
        onchainSlotNode.textContent = text;
        return true;
      })()
    : true;

  if (!servicesOk || !trustOk || !posturesOk || !checksOk || !onchainOk) {
    return failClosed();
  }

  for (const [node, value] of resolved) node.textContent = value;
  panel.dataset.agentRegistryRenderPosture = "rendered";
  panel.dataset.agentRegistryAuthority = pondStageDAgentRegistryRecord.authority;
  return true;
};

if (typeof document !== "undefined") { renderPondAgentRegistry(document); }