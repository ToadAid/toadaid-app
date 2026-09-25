export const KNOWLEDGE_FORGE_P5C_LIBRARY_FIXTURE = Object.freeze({
  schemaVersion: "0.1",
  surfaceId: "knowledge-forge-p5c-skill-library-browser",
  sourceBinding: Object.freeze({
    forgeRepository: "ToadAid/knowledge-forge",
    forgeCommit: "caa4bdf3b4fbd95a9d8f0a2686798cc9e1a6f0ad",
    forgeTree: "1ef8fe116e65bd0ac4eb832451d195831c2c396e",
    pondRepository: "ToadAid/toadaid-app",
    pondCommit: "d0c10d0a22054837fa583381132c60be0cef7f15",
    pondTree: "ac808f62f0272654741cb60fd10f9b933e8057c1",
    projectionPosture: "fixture_metadata_not_live_registry_truth",
  }),
  posture: Object.freeze({
    authority: "KNOWLEDGE_ONLY",
    executionAuthority: "NONE",
    runtimeConnection: "NOT_INCLUDED",
    mutation: "NONE",
    activation: "NOT_INCLUDED",
    claimBodiesInCatalog: false,
    sourceBodiesInCatalog: false,
  }),
  skills: Object.freeze([
    Object.freeze({
      skillId: "skill:fixture:approval-governance",
      title: "Approval Governance Reference",
      version: 3,
      state: "PROMOTED",
      knowledgeId: "knowledge:fixture:approval-governance",
      authority: "KNOWLEDGE_ONLY",
      unitKinds: Object.freeze(["REFERENCE"]),
      sourceCount: 2,
      unitCount: 5,
      conflictCount: 1,
      temporalCondition: "CURRENT",
      catalogNote: "Representative metadata fixture · no claim bodies",
    }),
    Object.freeze({
      skillId: "skill:fixture:deployment-window",
      title: "Deployment Window Procedure",
      version: 2,
      state: "PROMOTED",
      knowledgeId: "knowledge:fixture:deployment-window",
      authority: "KNOWLEDGE_ONLY",
      unitKinds: Object.freeze(["PROCEDURE"]),
      sourceCount: 1,
      unitCount: 3,
      conflictCount: 0,
      temporalCondition: "CURRENT",
      catalogNote: "Representative metadata fixture · procedure remains non-executable",
    }),
    Object.freeze({
      skillId: "skill:fixture:base-weth9",
      title: "Base WETH9 Contract Reference",
      version: 1,
      state: "PROMOTED",
      knowledgeId: "knowledge:fixture:base-weth9",
      authority: "KNOWLEDGE_ONLY",
      unitKinds: Object.freeze(["REFERENCE"]),
      sourceCount: 3,
      unitCount: 6,
      conflictCount: 0,
      temporalCondition: "CURRENT",
      catalogNote: "Representative metadata fixture · read-only contract knowledge",
    }),
    Object.freeze({
      skillId: "skill:fixture:incident-example",
      title: "Incident-Stopped Reference",
      version: 4,
      state: "SUSPENDED",
      knowledgeId: "knowledge:fixture:incident-example",
      authority: "KNOWLEDGE_ONLY",
      unitKinds: Object.freeze(["REFERENCE"]),
      sourceCount: 1,
      unitCount: 2,
      conflictCount: 0,
      temporalCondition: "CURRENT",
      catalogNote: "Representative stopped-state metadata fixture · not discoverable for current use",
    }),
  ]),
});

const normalize = (value) => String(value ?? "").trim().toLowerCase();

export const filterSkillLibrary = (
  skills,
  {
    query = "",
    state = "ALL",
    kind = "ALL",
  } = {},
) => {
  const needle = normalize(query);
  const wantedState = String(state || "ALL").toUpperCase();
  const wantedKind = String(kind || "ALL").toUpperCase();

  return skills.filter((skill) => {
    const stateMatch = wantedState === "ALL" || skill.state === wantedState;
    const kindMatch = wantedKind === "ALL" || skill.unitKinds.includes(wantedKind);
    const haystack = [
      skill.title,
      skill.skillId,
      skill.knowledgeId,
      skill.state,
      skill.temporalCondition,
      ...skill.unitKinds,
    ].map(normalize).join(" ");
    const queryMatch = !needle || haystack.includes(needle);
    return stateMatch && kindMatch && queryMatch;
  });
};

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const fact = (documentRef, label, value) => {
  const row = documentRef.createElement("div");
  row.append(
    text(documentRef, "dt", "", label),
    text(documentRef, "dd", "", value),
  );
  return row;
};

const emitSkillSelection = (documentRef, skillId) => {
  const EventCtor = documentRef.defaultView?.CustomEvent ?? globalThis.CustomEvent;
  if (!EventCtor || !skillId) return;
  documentRef.dispatchEvent(
    new EventCtor("knowledge-forge-skill-selected", {
      detail: { skillId },
    }),
  );
};

const renderSkillDetail = (documentRef, skill) => {
  const panel = documentRef.querySelector("[data-forge-library-detail]");
  if (!panel) return;

  panel.replaceChildren();

  if (!skill) {
    panel.append(
      text(
        documentRef,
        "p",
        "forge-library-empty",
        "No skill matches the current library filters.",
      ),
    );
    return;
  }

  const eyebrow = text(documentRef, "span", "eyebrow", "Selected library metadata");
  const title = text(documentRef, "h3", "", skill.title);
  const state = text(
    documentRef,
    "span",
    `forge-skill-state is-${skill.state.toLowerCase()}`,
    skill.state,
  );
  const heading = documentRef.createElement("div");
  heading.className = "forge-library-detail-heading";
  heading.append(title, state);

  const note = text(documentRef, "p", "", skill.catalogNote);
  const facts = documentRef.createElement("dl");
  facts.className = "forge-library-detail-facts";
  facts.append(
    fact(documentRef, "Skill ID", skill.skillId),
    fact(documentRef, "Knowledge ID", skill.knowledgeId),
    fact(documentRef, "Version", `v${skill.version}`),
    fact(documentRef, "Authority", skill.authority),
    fact(documentRef, "Unit kinds", skill.unitKinds.join(", ")),
    fact(documentRef, "Units", skill.unitCount),
    fact(documentRef, "Sources", skill.sourceCount),
    fact(documentRef, "Conflicts", skill.conflictCount),
    fact(documentRef, "Temporal", skill.temporalCondition),
  );

  const boundary = text(
    documentRef,
    "p",
    "forge-library-boundary",
    skill.state === "PROMOTED"
      ? "Library visibility does not itself load this skill into agent context."
      : "Stopped-state knowledge remains visible for operator inspection but is not current-use discoverable.",
  );

  panel.append(eyebrow, heading, note, facts, boundary);
  panel.dataset.selectedSkillId = skill.skillId;
};

const renderSkillCards = (
  documentRef,
  skills,
  selectedSkillId,
  onSelect,
) => {
  const list = documentRef.querySelector("[data-forge-library-results]");
  if (!list) return;
  list.replaceChildren();

  for (const skill of skills) {
    const button = documentRef.createElement("button");
    button.type = "button";
    button.className = "forge-skill-card";
    button.dataset.skillId = skill.skillId;
    button.setAttribute(
      "aria-pressed",
      skill.skillId === selectedSkillId ? "true" : "false",
    );

    const head = documentRef.createElement("span");
    head.className = "forge-skill-card-head";
    head.append(
      text(documentRef, "strong", "", skill.title),
      text(
        documentRef,
        "span",
        `forge-skill-state is-${skill.state.toLowerCase()}`,
        skill.state,
      ),
    );

    const identity = text(documentRef, "code", "", skill.skillId);
    const meta = text(
      documentRef,
      "span",
      "forge-skill-card-meta",
      `v${skill.version} · ${skill.unitKinds.join(" + ")} · ${skill.unitCount} units · ${skill.sourceCount} sources`,
    );
    const authority = text(
      documentRef,
      "span",
      "forge-skill-card-authority",
      `${skill.authority} · execution NONE`,
    );

    button.append(head, identity, meta, authority);
    button.addEventListener("click", () => onSelect(skill.skillId));
    list.append(button);
  }
};

export const renderKnowledgeForgeLibrary = (
  documentRef = globalThis.document,
  fixture = KNOWLEDGE_FORGE_P5C_LIBRARY_FIXTURE,
) => {
  if (!documentRef) return false;

  const root = documentRef.querySelector("[data-forge-library]");
  if (!root) return false;

  const search = documentRef.querySelector("[data-forge-library-search]");
  const state = documentRef.querySelector("[data-forge-library-state]");
  const kind = documentRef.querySelector("[data-forge-library-kind]");
  const count = documentRef.querySelector("[data-forge-library-count]");

  if (!search || !state || !kind || !count) return false;

  let selectedSkillId = fixture.skills[0]?.skillId ?? null;

  const rerender = () => {
    const filtered = filterSkillLibrary(fixture.skills, {
      query: search.value,
      state: state.value,
      kind: kind.value,
    });

    if (!filtered.some((skill) => skill.skillId === selectedSkillId)) {
      selectedSkillId = filtered[0]?.skillId ?? null;
    }

    count.textContent = `${filtered.length} of ${fixture.skills.length} fixture skills`;

    const select = (skillId) => {
      selectedSkillId = skillId;
      rerender();
    };

    renderSkillCards(documentRef, filtered, selectedSkillId, select);
    renderSkillDetail(
      documentRef,
      filtered.find((skill) => skill.skillId === selectedSkillId) ?? null,
    );
    emitSkillSelection(documentRef, selectedSkillId);
  };

  search.addEventListener("input", rerender);
  state.addEventListener("change", rerender);
  kind.addEventListener("change", rerender);
  rerender();

  root.dataset.fixtureRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderKnowledgeForgeLibrary(document);
}
