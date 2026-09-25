export const KNOWLEDGE_FORGE_P5E_WORKFLOW_CONTRACT = Object.freeze({
  schemaVersion: "0.1",
  surfaceId: "knowledge-forge-p5e-governed-workflow-console",
  sourceBinding: Object.freeze({
    forgeRepository: "ToadAid/knowledge-forge",
    forgeCommit: "368077ee22b692f6879659d47b276f5edda5c113",
    forgeTree: "d346931179979e34fe9a37b2d85aa0276ca04c2c",
    pondRepository: "ToadAid/toadaid-app",
    pondCommit: "8de15239a150f5433d3b8c41f4a4c0dcfa66d8c4",
    pondTree: "f513da15a0c9f56d47a3137acd3ccc841f8da8b3",
    projectionPosture: "workflow_preview_not_live_mutation",
  }),
  posture: Object.freeze({
    authority: "KNOWLEDGE_ONLY",
    instructionAuthority: "NONE",
    executionAuthority: "NONE",
    lifecycleAuthority: "EXTERNAL_REQUIRED_NOT_ESTABLISHED",
    runtimeConnection: "NOT_INCLUDED",
    hostIntegration: "NOT_INCLUDED",
    mutation: "NONE",
    activation: "NOT_INCLUDED",
    persistence: "NONE",
  }),
  operations: Object.freeze({
    COMPILE: Object.freeze({
      label: "Compile",
      allowedFrom: Object.freeze(["SOURCE_MATERIAL"]),
      targetState: "COMPILED_CANDIDATE",
      requiredEvidence: Object.freeze([
        "knowledge_id",
        "compiler_profile_id",
        "source_ids",
      ]),
      decisionClass: "COMPILER_INPUT_PREVIEW",
      note: "Compilation preview only. Package emission and lifecycle genesis are not invoked.",
    }),
    VALIDATE: Object.freeze({
      label: "Validate",
      allowedFrom: Object.freeze(["COMPILED_CANDIDATE"]),
      targetState: "VALIDATED",
      requiredEvidence: Object.freeze([
        "package_receipt_sha256",
        "validation_report_sha256",
        "faithfulness_report_sha256",
        "validator_id",
      ]),
      decisionClass: "VALIDATION_EVIDENCE_PREVIEW",
      note: "Validation requires package-bound validation and faithfulness evidence.",
    }),
    PROMOTE: Object.freeze({
      label: "Promote",
      allowedFrom: Object.freeze(["VALIDATED"]),
      targetState: "PROMOTED",
      requiredEvidence: Object.freeze(["decision_ref"]),
      decisionClass: "EXTERNAL_PROMOTION_DECISION_REQUIRED",
      note: "A decision_ref is provenance only; authorization remains external.",
    }),
    DISPUTE: Object.freeze({
      label: "Dispute",
      allowedFrom: Object.freeze(["PROMOTED", "SUSPENDED"]),
      targetState: "DISPUTED",
      requiredEvidence: Object.freeze(["incident_ref", "reason"]),
      decisionClass: "INCIDENT_EVIDENCE_REQUIRED",
      note: "Dispute preview records an incident reference and reason; it does not mutate lifecycle truth.",
    }),
    REVOKE: Object.freeze({
      label: "Revoke",
      allowedFrom: Object.freeze([
        "PROMOTED",
        "SUSPENDED",
        "DISPUTED",
        "SUPERSEDED",
      ]),
      targetState: "REVOKED",
      requiredEvidence: Object.freeze([
        "incident_ref",
        "reason",
        "decision_ref",
      ]),
      decisionClass: "EXTERNAL_REVOCATION_DECISION_REQUIRED",
      note: "Revocation is terminal in Forge lifecycle truth and requires external decision evidence.",
    }),
  }),
});

const normalizeEvidence = (requiredEvidence, evidence = {}) => {
  const provided = {};
  const missing = [];

  for (const field of requiredEvidence) {
    const raw = evidence[field];
    const value = Array.isArray(raw)
      ? raw.map((item) => String(item).trim()).filter(Boolean)
      : String(raw ?? "").trim();

    const present = Array.isArray(value) ? value.length > 0 : value.length > 0;
    if (present) provided[field] = value;
    else missing.push(field);
  }

  return { provided, missing };
};

export const buildWorkflowPreview = (
  operationId,
  skillId,
  evidence = {},
  contract = KNOWLEDGE_FORGE_P5E_WORKFLOW_CONTRACT,
) => {
  const operation = contract.operations[operationId];
  if (!operation) throw new Error(`unknown workflow operation: ${operationId}`);

  const selectedSkillId = String(skillId ?? "").trim();
  const normalized = normalizeEvidence(operation.requiredEvidence, evidence);

  return Object.freeze({
    schemaVersion: contract.schemaVersion,
    packetType: "KNOWLEDGE_FORGE_WORKFLOW_PREVIEW",
    operation: operationId,
    selectedSkillId: selectedSkillId || "NO_SKILL_SELECTED",
    allowedFrom: [...operation.allowedFrom],
    targetState: operation.targetState,
    decisionClass: operation.decisionClass,
    requiredEvidence: [...operation.requiredEvidence],
    providedEvidence: normalized.provided,
    missingEvidence: normalized.missing,
    readyForExternalHandoff: normalized.missing.length === 0,
    authority: contract.posture.authority,
    instructionAuthority: contract.posture.instructionAuthority,
    executionAuthority: contract.posture.executionAuthority,
    lifecycleAuthority: contract.posture.lifecycleAuthority,
    mutation: contract.posture.mutation,
    activation: contract.posture.activation,
    runtimeConnection: contract.posture.runtimeConnection,
    executable: false,
    note: operation.note,
  });
};

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const renderEvidenceFields = (documentRef, target, operation, values = {}) => {
  target.replaceChildren();

  for (const field of operation.requiredEvidence) {
    const label = documentRef.createElement("label");
    label.className = "forge-workflow-field";

    const caption = text(
      documentRef,
      "span",
      "forge-workflow-field-label",
      field.replaceAll("_", " "),
    );

    const input = documentRef.createElement("input");
    input.type = "text";
    input.autocomplete = "off";
    input.dataset.workflowEvidence = field;
    input.value = Array.isArray(values[field])
      ? values[field].join(", ")
      : String(values[field] ?? "");
    input.placeholder =
      field === "source_ids"
        ? "source:sha256:… , source:sha256:…"
        : `${field}…`;

    label.append(caption, input);
    target.append(label);
  }
};

const collectEvidence = (documentRef) => {
  const values = {};
  for (const input of documentRef.querySelectorAll("[data-workflow-evidence]")) {
    const field = input.dataset.workflowEvidence;
    if (!field) continue;
    values[field] =
      field === "source_ids"
        ? input.value.split(",").map((item) => item.trim()).filter(Boolean)
        : input.value;
  }
  return values;
};

const renderPreview = (documentRef, preview) => {
  const target = documentRef.querySelector("[data-forge-workflow-preview]");
  const status = documentRef.querySelector("[data-forge-workflow-status]");
  if (!target || !status) return;

  target.textContent = JSON.stringify(preview, null, 2);

  status.textContent = preview.readyForExternalHandoff
    ? "Preview complete · external authority still required"
    : `Missing evidence · ${preview.missingEvidence.join(", ")}`;
  status.dataset.ready = preview.readyForExternalHandoff ? "true" : "false";
};

export const renderKnowledgeForgeWorkflow = (
  documentRef = globalThis.document,
  contract = KNOWLEDGE_FORGE_P5E_WORKFLOW_CONTRACT,
) => {
  if (!documentRef) return false;

  const root = documentRef.querySelector("[data-forge-workflow]");
  const operationButtons = [
    ...documentRef.querySelectorAll("[data-workflow-operation]"),
  ];
  const evidenceTarget = documentRef.querySelector("[data-forge-workflow-fields]");
  const selectedSkill = documentRef.querySelector("[data-forge-workflow-skill]");
  const operationTitle = documentRef.querySelector("[data-forge-workflow-operation-title]");
  const operationNote = documentRef.querySelector("[data-forge-workflow-note]");
  const allowedFrom = documentRef.querySelector("[data-forge-workflow-from]");
  const targetState = documentRef.querySelector("[data-forge-workflow-target]");
  const previewButton = documentRef.querySelector("[data-forge-workflow-build-preview]");

  if (
    !root ||
    !operationButtons.length ||
    !evidenceTarget ||
    !selectedSkill ||
    !operationTitle ||
    !operationNote ||
    !allowedFrom ||
    !targetState ||
    !previewButton
  ) return false;

  let activeOperation = "COMPILE";
  let activeSkillId = "skill:fixture:approval-governance";

  const refreshOperation = () => {
    const operation = contract.operations[activeOperation];
    operationTitle.textContent = operation.label;
    operationNote.textContent = operation.note;
    allowedFrom.textContent = operation.allowedFrom.join(" | ");
    targetState.textContent = operation.targetState;
    selectedSkill.textContent = activeSkillId;

    for (const button of operationButtons) {
      button.setAttribute(
        "aria-pressed",
        button.dataset.workflowOperation === activeOperation ? "true" : "false",
      );
    }

    renderEvidenceFields(documentRef, evidenceTarget, operation);
    renderPreview(
      documentRef,
      buildWorkflowPreview(activeOperation, activeSkillId, {}),
    );
  };

  for (const button of operationButtons) {
    button.addEventListener("click", () => {
      const next = button.dataset.workflowOperation;
      if (!contract.operations[next]) return;
      activeOperation = next;
      refreshOperation();
    });
  }

  previewButton.addEventListener("click", () => {
    renderPreview(
      documentRef,
      buildWorkflowPreview(
        activeOperation,
        activeSkillId,
        collectEvidence(documentRef),
      ),
    );
  });

  documentRef.addEventListener("knowledge-forge-skill-selected", (event) => {
    activeSkillId = String(event.detail?.skillId ?? "NO_SKILL_SELECTED");
    selectedSkill.textContent = activeSkillId;
    renderPreview(
      documentRef,
      buildWorkflowPreview(
        activeOperation,
        activeSkillId,
        collectEvidence(documentRef),
      ),
    );
  });

  refreshOperation();
  root.dataset.workflowRendered = "true";
  return true;
};

if (typeof document !== "undefined") {
  renderKnowledgeForgeWorkflow(document);
}
