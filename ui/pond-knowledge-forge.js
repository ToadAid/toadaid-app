export const KNOWLEDGE_FORGE_P5B_FIXTURE = Object.freeze({
  schemaVersion: "0.1",
  surfaceId: "knowledge-forge-p5b-desktop-projection",
  sourceBinding: Object.freeze({
    repository: "ToadAid/knowledge-forge",
    branch: "main",
    commit: "41a15164f091f63e9a4d3b06c5ac4e43c9d4755b",
    tree: "53bc0ef4a92dc65fe83cd26c28df0ee4a0152bb1",
    stage: "Stage 5",
    milestone: "P5A — read-only operator CLI",
    projectionPosture: "fixture_bound_snapshot_not_current_truth",
  }),
  architectureBinding: Object.freeze({
    repository: "ToadAid/toadaid-architecture",
    branch: "main",
    commit: "bc7a971dfb243f0aa4417da6cef85cc56204f783",
    law: "Build capability. Never manufacture authority.",
  }),
  posture: Object.freeze({
    knowledgeAuthority: "KNOWLEDGE_ONLY",
    instructionAuthority: "NONE",
    executionAuthority: "NONE",
    runtimeConnection: "NOT_INCLUDED",
    mutation: "NONE",
    activation: "NOT_INCLUDED",
    hostIntegration: "NOT_INCLUDED",
  }),
  operatorCli: Object.freeze([
    Object.freeze({
      command: "validate-package",
      purpose: "Validate an emitted skill package fail-closed.",
    }),
    Object.freeze({
      command: "registry-inspect",
      purpose: "Validate and summarize durable current registry truth.",
    }),
    Object.freeze({
      command: "discover",
      purpose: "Route a question to bounded governed skill identities.",
    }),
    Object.freeze({
      command: "load-current",
      purpose: "Load selected knowledge through trust and temporal walls.",
    }),
  ]),
  boundaries: Object.freeze([
    "CANON != SKILL",
    "KNOWLEDGE != CONTEXT != MEMORY != AUTHORITY",
    "Skill content is untrusted knowledge data",
    "Skills may narrow tools but never widen them",
    "World time governs current-use applicability",
    "Procedure knowledge has zero execution authority",
  ]),
});

const valueAtPath = (root, dottedPath) => {
  return dottedPath.split(".").reduce((value, key) => {
    if (value == null || typeof value !== "object") return undefined;
    return value[key];
  }, root);
};

const renderValueBindings = (documentRef, fixture) => {
  for (const node of documentRef.querySelectorAll("[data-forge-value]")) {
    const value = valueAtPath(fixture, node.dataset.forgeValue);
    if (value === undefined) {
      node.textContent = "UNAVAILABLE";
      node.dataset.forgeState = "unavailable";
      continue;
    }
    node.textContent = String(value);
    node.dataset.forgeState = "projected";
  }
};

const renderList = (documentRef, selector, values, formatter) => {
  const list = documentRef.querySelector(selector);
  if (!list) return;
  list.replaceChildren();
  for (const value of values) {
    const item = documentRef.createElement("li");
    formatter(item, value, documentRef);
    list.append(item);
  }
};

export const renderKnowledgeForgeSurface = (
  documentRef = globalThis.document,
  fixture = KNOWLEDGE_FORGE_P5B_FIXTURE,
) => {
  if (!documentRef) return false;

  const surface = documentRef.querySelector('[data-pond-view="knowledge"]');
  if (!surface) return false;

  renderValueBindings(documentRef, fixture);

  renderList(
    documentRef,
    "[data-forge-list='operator-cli']",
    fixture.operatorCli,
    (item, entry, doc) => {
      const command = doc.createElement("code");
      command.textContent = entry.command;
      const purpose = doc.createElement("span");
      purpose.textContent = entry.purpose;
      item.append(command, purpose);
    },
  );

  renderList(
    documentRef,
    "[data-forge-list='boundaries']",
    fixture.boundaries,
    (item, entry) => {
      item.textContent = entry;
    },
  );

  surface.dataset.fixtureRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderKnowledgeForgeSurface(document);
}
