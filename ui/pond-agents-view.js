// Stage D-P1 — Agents view fixture presentation renderer.
//
// Fills the static Agents view panel in the Home context panel from the
// generated fixture record (ui/generated/pond-stage-d-agents-fixture.js).
// textContent-only, no fetch, no storage, no transport. Fail-closed: if any
// expected node is missing or any record field fails to resolve, every
// presented value is withheld ("unavailable") and the panel is marked
// data-render-posture="fail_closed" — fallback or partial rendering is
// forbidden by the record's denial posture.

import pondStageDAgentsRecord from "./generated/pond-stage-d-agents-fixture.js";

const panel = document.querySelector(".agents-view-panel");

if (panel) {
  const UNAVAILABLE = "unavailable";
  const valueNodes = [...panel.querySelectorAll("[data-agents-value]")];
  const toolList = panel.querySelector("[data-agents-list='observed-tools']");
  const checkList = panel.querySelector("[data-agents-list='presence-checks']");
  const agentCards = [...panel.querySelectorAll("[data-agents-agent]")];

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

  const renderChecks = (list, admission) => {
    if (!list) return false;
    const satisfied = admission?.satisfiedChecks;
    const unsatisfied = admission?.unsatisfiedChecks;
    const valid =
      Array.isArray(satisfied) &&
      Array.isArray(unsatisfied) &&
      [...satisfied, ...unsatisfied].every(
        (check) => typeof check === "string" && check.length > 0,
      );
    if (!valid) return false;

    list.textContent = "";
    // Refusal first: the eight receiver-owned live-presence admission checks
    // are presented strictly from the record's own arrays, unsatisfied checks
    // before any satisfied ones, each check's state carried by the record —
    // never inferred.
    for (const check of unsatisfied) {
      const item = document.createElement("li");
      item.classList.add("is-refused");
      item.textContent = `not satisfied · ${check}`;
      list.append(item);
    }
    for (const check of satisfied) {
      const item = document.createElement("li");
      item.classList.add("is-satisfied");
      item.textContent = `satisfied · ${check}`;
      list.append(item);
    }
    return true;
  };

  const renderAgents = () => {
    if (!Array.isArray(pondStageDAgentsRecord.agents)) return false;
    if (pondStageDAgentsRecord.agents.length !== agentCards.length) return false;
    for (const card of agentCards) {
      const index = Number(card.dataset.agentsAgent);
      if (!Number.isInteger(index) || index < 0 || index >= pondStageDAgentsRecord.agents.length) {
        return false;
      }
      const agent = pondStageDAgentsRecord.agents[index];
      for (const node of card.querySelectorAll("[data-agents-value]")) {
        const value = resolveValue(agent, node.dataset.agentsValue);
        if (value === null) return false;
        node.textContent = value;
      }
      const factList = card.querySelector("[data-agents-facts]");
      if (factList) {
        if (!Array.isArray(agent.runtimeFacts)) return false;
        factList.textContent = "";
        for (const fact of agent.runtimeFacts) {
          if (
            typeof fact?.factLabel !== "string" ||
            fact.factLabel.length === 0 ||
            (fact.observedValue !== null && typeof fact.observedValue !== "string") ||
            (fact.valuePosture !== "transcribed_from_source_contract" && fact.valuePosture !== "not_observed")
          ) {
            return false;
          }
          const item = document.createElement("li");
          item.textContent =
            fact.valuePosture === "transcribed_from_source_contract"
              ? `${fact.factLabel} · ${fact.observedValue}`
              : `${fact.factLabel} · not observed`;
          factList.append(item);
        }
      }
    }
    return true;
  };

  const failClosed = () => {
    for (const node of valueNodes) node.textContent = UNAVAILABLE;
    if (toolList) {
      toolList.textContent = "";
      const item = document.createElement("li");
      item.textContent = UNAVAILABLE;
      toolList.append(item);
    }
    if (checkList) {
      checkList.textContent = "";
      const item = document.createElement("li");
      item.textContent = UNAVAILABLE;
      checkList.append(item);
    }
    for (const card of agentCards) {
      for (const node of card.querySelectorAll("[data-agents-value]")) {
        node.textContent = UNAVAILABLE;
      }
      const factList = card.querySelector("[data-agents-facts]");
      if (factList) {
        factList.textContent = "";
        const item = document.createElement("li");
        item.textContent = UNAVAILABLE;
        factList.append(item);
      }
    }
    panel.dataset.renderPosture = "fail_closed";
  };

  // Presentation is bound to the record revision: a mismatch is a drift
  // signal, never something to paper over with the static markup.
  if (panel.dataset.agentsRecordVersion !== pondStageDAgentsRecord.agentsRecordVersion) {
    failClosed();
  } else {
    const resolved = new Map();
    let complete = true;
    for (const node of valueNodes) {
      const value = resolveValue(pondStageDAgentsRecord, node.dataset.agentsValue);
      if (value === null) {
        complete = false;
        break;
      }
      resolved.set(node, value);
    }

    const toolsOk = renderList(toolList, pondStageDAgentsRecord.sourceBinding.observedTools);
    const checksOk = renderChecks(checkList, pondStageDAgentsRecord.admission);
    const agentsOk = renderAgents();

    if (complete && toolsOk && checksOk && agentsOk) {
      for (const [node, value] of resolved) node.textContent = value;
      panel.dataset.renderPosture = "rendered";
      panel.dataset.presentationPosture = pondStageDAgentsRecord.presentationPosture;
    } else {
      failClosed();
    }
  }
}

function renderList(list, values) {
  if (!list || !Array.isArray(values)) return false;
  if (!values.every((value) => typeof value === "string" && value.length > 0)) {
    return false;
  }
  list.textContent = "";
  for (const value of values) {
    const item = document.createElement("li");
    item.textContent = value;
    list.append(item);
  }
  return true;
}