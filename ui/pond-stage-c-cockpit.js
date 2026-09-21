// Stage C-P10 — Bridge cockpit fixture presentation renderer.
//
// Fills the static cockpit panel in the Home context panel from the generated
// fixture record (ui/generated/pond-stage-c-fixture.js). textContent-only,
// no fetch, no storage, no transport. Fail-closed: if any expected node is
// missing or any record field fails to resolve, every presented value is
// withheld ("unavailable") and the panel is marked data-render-posture=
// "fail_closed" — fallback or partial rendering is forbidden by the record's
// denial posture.

import pondStageCCockpitRecord from "./generated/pond-stage-c-fixture.js";

const panel = document.querySelector(".stage-c-cockpit-panel");

if (panel) {
  const UNAVAILABLE = "unavailable";
  const valueNodes = [...panel.querySelectorAll("[data-cockpit-value]")];
  const toolList = panel.querySelector("[data-cockpit-list='tool-inventory']");
  const checkList = panel.querySelector("[data-cockpit-list='delivery-checks']");
  const chainItems = [...panel.querySelectorAll("[data-cockpit-chain]")];

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
    // Refusal first: the eight receiver-owned admission checks are presented
    // strictly from the record's own arrays, unsatisfied checks before any
    // satisfied ones, each check's state carried by the record — never inferred.
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

  const renderList = (list, values) => {
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
    for (const item of chainItems) {
      item.classList.remove("is-fresh", "is-refused");
      item.classList.add("is-refused");
    }
    panel.dataset.renderPosture = "fail_closed";
  };

  // Presentation is bound to the record revision: a mismatch is a drift
  // signal, never something to paper over with the static markup.
  if (panel.dataset.cockpitRecordVersion !== pondStageCCockpitRecord.cockpitRecordVersion) {
    failClosed();
  } else {
    const resolved = new Map();
    let complete = true;
    for (const node of valueNodes) {
      const value = resolveValue(pondStageCCockpitRecord, node.dataset.cockpitValue);
      if (value === null) {
        complete = false;
        break;
      }
      resolved.set(node, value);
    }

    const toolsOk = renderList(toolList, pondStageCCockpitRecord.sourceBinding.readOnlyToolInventory);
    const checksOk = renderChecks(checkList, pondStageCCockpitRecord.deliveryAdmission);

    if (complete && toolsOk && checksOk) {
      for (const [node, value] of resolved) node.textContent = value;

      for (const item of chainItems) {
        const entry = resolveValue(
          pondStageCCockpitRecord,
          `${item.dataset.cockpitChain}.targetComparisonState`,
        );
        if (entry === null) {
          complete = false;
          break;
        }
        item.classList.add(entry === "matched" ? "is-fresh" : "is-refused");
      }

      if (complete) {
        panel.dataset.renderPosture = "rendered";
        panel.dataset.presentationPosture = pondStageCCockpitRecord.presentationPosture;
      } else {
        failClosed();
      }
    } else {
      failClosed();
    }
  }
}