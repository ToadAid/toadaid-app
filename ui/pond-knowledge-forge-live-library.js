const HOST_BINDING_FIELDS = Object.freeze([
  "schema_version", "binding_id", "project_id", "mode", "adapter_id",
  "expected_executable_identity_sha256", "expected_registry_sha256",
  "host_configuration_sha256", "max_output_bytes", "max_duration_ms",
  "max_observation_age_ms", "authority", "instruction_authority",
  "execution_authority", "tool_grants",
]);

const DELIVERY_FIELDS = Object.freeze([
  "schema_version", "delivery_kind", "adapter_id", "binding_id", "project_id",
  "host_configuration_sha256", "executable_identity_sha256",
  "registry_identity_sha256", "command_id", "data_origin", "observed_at",
  "duration_ms", "stdout_sha256", "stdout",
]);

const INDEX_FIELDS = Object.freeze([
  "schema_version", "index_kind", "surface", "registry_sha256",
  "skills_sha256", "hard_max_skills_per_query", "skill_count",
  "selection_requires_current_registry_revalidation", "authority",
  "execution_authority", "tool_grants", "skills",
]);

const SKILL_FIELDS = Object.freeze([
  "skill_id", "skill_version", "knowledge_id", "title", "purpose",
  "compiler_profile_id", "package_ref", "claim_index_sha256",
  "lifecycle_head_sha256", "source_ids", "route_aliases", "route_terms",
  "unit_routes", "authority", "execution_authority", "tool_grants",
]);

const ROUTE_FIELDS = Object.freeze([
  "unit_id", "claim_key", "kind", "subject", "predicate", "executable",
]);

export const KNOWLEDGE_FORGE_LIVE_LIBRARY_CONTRACT = Object.freeze({
  bindingSchema: "toadaid.knowledge-forge.library-host-binding.v1",
  deliverySchema: "toadaid.knowledge-forge.library-delivery.v1",
  deliveryKind: "BOUNDED_INDEX_BUILD_STDOUT",
  adapterId: "mirror-desktop-bridge:knowledge-forge-library:index-build:v1",
  commandId: "knowledge-forge.index-build",
  dataOrigin: "HOST_CONFIGURED_LOCAL_KNOWLEDGE_FORGE_REGISTRY",
  indexSchema: "0.1",
  indexKind: "ROUTING_HINT_ONLY_NOT_LIFECYCLE_OR_KNOWLEDGE_TRUTH",
  indexSurface: "GOVERNED_KNOWLEDGE_DISCOVERY",
  hardMaxSkillsPerQuery: 3,
  maximumOutputBytes: 262144,
  maximumDurationMs: 10000,
  maximumObservationAgeMs: 300000,
  authority: "KNOWLEDGE_ONLY",
  instructionAuthority: "NONE",
  executionAuthority: "NONE",
  supportedRelationships: Object.freeze(["COMPILED_AS", "CONTAINS", "USES_SOURCE"]),
  unsupportedRelationships: Object.freeze([
    "CLAIM_TO_SOURCE", "CONTRADICTION", "DEPENDENCY", "SEMANTIC_SIMILARITY",
    "SOURCE_SECTION", "HISTORICAL_VERSION",
  ]),
});

const admittedAssessments = new WeakSet();
const sha256Pattern = /^sha256:[0-9a-f]{64}$/;
const rfc3339Pattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
const nonEmpty = (value) => typeof value === "string" && value.trim().length > 0;
const positiveInteger = (value) => Number.isInteger(value) && value > 0;
const exactFields = (value, fields) => (
  value !== null
  && typeof value === "object"
  && !Array.isArray(value)
  && Object.keys(value).sort().join("\0") === [...fields].sort().join("\0")
);
const shaRef = (value) => typeof value === "string" && sha256Pattern.test(value);

const canonicalize = (value) => {
  if (Array.isArray(value)) return `[${value.map(canonicalize).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => (
      `${JSON.stringify(key)}:${canonicalize(value[key])}`
    )).join(",")}}`;
  }
  return JSON.stringify(value);
};

export const canonicalKnowledgeForgeJson = (value) => `${canonicalize(value)}\n`;

export const knowledgeForgeSha256 = async (value) => {
  const bytes = typeof value === "string" ? new TextEncoder().encode(value) : value;
  const digest = await globalThis.crypto.subtle.digest("SHA-256", bytes);
  return `sha256:${[...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("")}`;
};

const refusal = (reason, detail = reason) => Object.freeze({
  accepted: false,
  reason,
  detail,
});

export const validateKnowledgeForgeHostBinding = (binding) => {
  const c = KNOWLEDGE_FORGE_LIVE_LIBRARY_CONTRACT;
  if (!exactFields(binding, HOST_BINDING_FIELDS)) return refusal("host_binding_fields_mismatch");
  if (binding.schema_version !== c.bindingSchema) return refusal("host_binding_schema_mismatch");
  if (!["OFF", "DRY_RUN", "ON"].includes(binding.mode)) return refusal("host_binding_mode_invalid");
  if (binding.adapter_id !== c.adapterId) return refusal("host_adapter_not_allowlisted");
  if (![binding.binding_id, binding.project_id].every(nonEmpty)) return refusal("host_binding_identity_invalid");
  if (![binding.expected_executable_identity_sha256, binding.expected_registry_sha256,
    binding.host_configuration_sha256].every(shaRef)) return refusal("host_binding_digest_invalid");
  if (!positiveInteger(binding.max_output_bytes) || binding.max_output_bytes > c.maximumOutputBytes) return refusal("host_output_limit_invalid");
  if (!positiveInteger(binding.max_duration_ms) || binding.max_duration_ms > c.maximumDurationMs) return refusal("host_time_limit_invalid");
  if (!positiveInteger(binding.max_observation_age_ms) || binding.max_observation_age_ms > c.maximumObservationAgeMs) return refusal("host_freshness_limit_invalid");
  if (binding.authority !== c.authority || binding.instruction_authority !== c.instructionAuthority
    || binding.execution_authority !== c.executionAuthority) return refusal("host_authority_mismatch");
  if (!Array.isArray(binding.tool_grants) || binding.tool_grants.length !== 0) return refusal("host_tool_grants_refused");
  return Object.freeze({ accepted: true, reason: "host_binding_valid" });
};

const validateRoute = (route) => {
  if (!exactFields(route, ROUTE_FIELDS)) return "unit_route_fields_mismatch";
  if (![route.unit_id, route.claim_key, route.kind, route.subject, route.predicate].every(nonEmpty)) return "unit_route_identity_invalid";
  if (route.executable !== false) return "executable_unit_route_refused";
  return null;
};

const validateSkill = (skill) => {
  const c = KNOWLEDGE_FORGE_LIVE_LIBRARY_CONTRACT;
  if (!exactFields(skill, SKILL_FIELDS)) return "skill_descriptor_fields_mismatch";
  if (![skill.skill_id, skill.knowledge_id, skill.title, skill.purpose,
    skill.compiler_profile_id, skill.package_ref].every(nonEmpty)) return "skill_identity_invalid";
  if (!positiveInteger(skill.skill_version)) return "skill_version_invalid";
  if (![skill.claim_index_sha256, skill.lifecycle_head_sha256].every(shaRef)) return "skill_digest_invalid";
  if (skill.authority !== c.authority || skill.execution_authority !== c.executionAuthority) return "skill_authority_mismatch";
  if (!Array.isArray(skill.tool_grants) || skill.tool_grants.length !== 0) return "skill_tool_grants_refused";
  for (const field of ["source_ids", "route_aliases", "route_terms"]) {
    if (!Array.isArray(skill[field]) || skill[field].some((item) => !nonEmpty(item))) return `skill_${field}_invalid`;
  }
  if (skill.source_ids.join("\0") !== [...new Set(skill.source_ids)].sort().join("\0")) return "skill_source_ids_not_unique_sorted";
  if (skill.route_terms.length === 0 || skill.route_terms.join("\0") !== [...new Set(skill.route_terms)].sort().join("\0")) return "skill_route_terms_not_unique_sorted";
  if (!Array.isArray(skill.unit_routes) || skill.unit_routes.length === 0) return "skill_unit_routes_invalid";
  for (const route of skill.unit_routes) {
    const error = validateRoute(route);
    if (error) return error;
  }
  const unitIds = skill.unit_routes.map((route) => route.unit_id);
  const claimKeys = skill.unit_routes.map((route) => route.claim_key);
  if (unitIds.join("\0") !== [...new Set(unitIds)].sort().join("\0")) return "unit_ids_not_unique_sorted";
  if (claimKeys.length !== new Set(claimKeys).size) return "claim_keys_not_unique";
  return null;
};

const validateIndex = async (index, binding) => {
  const c = KNOWLEDGE_FORGE_LIVE_LIBRARY_CONTRACT;
  if (!exactFields(index, INDEX_FIELDS)) return refusal("index_fields_mismatch");
  if (index.schema_version !== c.indexSchema || index.index_kind !== c.indexKind
    || index.surface !== c.indexSurface) return refusal("index_schema_mismatch");
  if (index.registry_sha256 !== binding.expected_registry_sha256) return refusal("registry_digest_mismatch");
  if (!shaRef(index.skills_sha256)) return refusal("skill_index_digest_invalid");
  if (index.hard_max_skills_per_query !== c.hardMaxSkillsPerQuery
    || index.selection_requires_current_registry_revalidation !== true) return refusal("index_safety_posture_mismatch");
  if (index.authority !== c.authority || index.execution_authority !== c.executionAuthority) return refusal("index_authority_mismatch");
  if (!Array.isArray(index.tool_grants) || index.tool_grants.length !== 0) return refusal("index_tool_grants_refused");
  if (!Array.isArray(index.skills) || index.skill_count !== index.skills.length) return refusal("index_skill_count_mismatch");
  const ids = [];
  for (const skill of index.skills) {
    const error = validateSkill(skill);
    if (error) return refusal(error);
    ids.push(skill.skill_id);
  }
  if (ids.join("\0") !== [...new Set(ids)].sort().join("\0")) return refusal("duplicate_or_unsorted_skill_identity");
  const calculated = await knowledgeForgeSha256(canonicalKnowledgeForgeJson(index.skills));
  if (calculated !== index.skills_sha256) return refusal("skill_index_digest_mismatch");
  return Object.freeze({ accepted: true, reason: "index_valid" });
};

const graphNode = (id, type, identity) => Object.freeze({ id, type, identity: Object.freeze(identity) });
const graphEdge = (from, type, to, evidence) => Object.freeze({
  from, type, to,
  evidence: Object.freeze({ status: "EXPLICIT_INDEX_METADATA", ...evidence }),
});

export const projectKnowledgeForgeGraph = (index) => {
  const nodes = new Map();
  const edges = [];
  for (const skill of index.skills) {
    const skillNode = `skill:${skill.skill_id}@${skill.skill_version}`;
    const knowledgeNode = `knowledge:${skill.knowledge_id}`;
    nodes.set(knowledgeNode, graphNode(knowledgeNode, "KNOWLEDGE_IDENTITY", { knowledge_id: skill.knowledge_id }));
    nodes.set(skillNode, graphNode(skillNode, "SKILL", {
      skill_id: skill.skill_id,
      skill_version: skill.skill_version,
      compiler_profile_id: skill.compiler_profile_id,
      claim_index_sha256: skill.claim_index_sha256,
      lifecycle_head_sha256: skill.lifecycle_head_sha256,
      registry_sha256: index.registry_sha256,
    }));
    edges.push(graphEdge(knowledgeNode, "COMPILED_AS", skillNode, {
      fields: Object.freeze(["knowledge_id", "skill_id", "skill_version"]),
    }));
    for (const route of skill.unit_routes) {
      const claimNode = `${skillNode}:claim:${route.claim_key}`;
      nodes.set(claimNode, graphNode(claimNode, "CLAIM", {
        unit_id: route.unit_id,
        claim_key: route.claim_key,
      }));
      edges.push(graphEdge(skillNode, "CONTAINS", claimNode, {
        fields: Object.freeze(["unit_routes.unit_id", "unit_routes.claim_key"]),
      }));
    }
    for (const sourceId of skill.source_ids) {
      const sourceNode = `source:${sourceId}`;
      nodes.set(sourceNode, graphNode(sourceNode, "SOURCE", { source_id: sourceId }));
      edges.push(graphEdge(skillNode, "USES_SOURCE", sourceNode, {
        fields: Object.freeze(["source_ids"]),
        scope: "SKILL_LEVEL_ASSOCIATION_ONLY",
        claim_to_source_established: false,
      }));
    }
  }
  return Object.freeze({
    schemaVersion: "toadaid.knowledge-forge.graph-projection.v1",
    nodes: Object.freeze([...nodes.values()].sort((a, b) => a.id.localeCompare(b.id))),
    edges: Object.freeze(edges.sort((a, b) => `${a.from}\0${a.type}\0${a.to}`.localeCompare(`${b.from}\0${b.type}\0${b.to}`))),
    unsupportedRelationships: KNOWLEDGE_FORGE_LIVE_LIBRARY_CONTRACT.unsupportedRelationships,
  });
};

const projectSkills = (index) => Object.freeze(index.skills.map((skill) => Object.freeze({
  skillId: skill.skill_id,
  title: skill.title,
  version: skill.skill_version,
  state: "PROMOTED",
  knowledgeId: skill.knowledge_id,
  authority: skill.authority,
  unitKinds: Object.freeze([...new Set(skill.unit_routes.map((route) => route.kind))].sort()),
  sourceCount: skill.source_ids.length,
  unitCount: skill.unit_routes.length,
  conflictCount: "UNAVAILABLE",
  temporalCondition: "REGISTRY_REVALIDATION_REQUIRED_FOR_USE",
  catalogNote: "Validated host projection · metadata only · selection is not load authority",
})));

const assessment = (values) => {
  const result = Object.freeze(values);
  admittedAssessments.add(result);
  return result;
};

export const assessKnowledgeForgeLibraryDelivery = async ({ binding, candidate, nowMs = Date.now() }) => {
  const bindingResult = validateKnowledgeForgeHostBinding(binding);
  if (!bindingResult.accepted) return assessment({ runtimeState: "BLOCKED", sourceMode: "none", skills: Object.freeze([]), reason: bindingResult.reason });
  if (binding.mode === "OFF") return assessment({ runtimeState: "OFF", sourceMode: "fixture", skills: Object.freeze([]), reason: "production_delivery_off" });
  if (!exactFields(candidate, DELIVERY_FIELDS)) return assessment({ runtimeState: "BLOCKED", sourceMode: "none", skills: Object.freeze([]), reason: "delivery_fields_mismatch" });
  const c = KNOWLEDGE_FORGE_LIVE_LIBRARY_CONTRACT;
  const exact = [
    [candidate.schema_version, c.deliverySchema, "delivery_schema_mismatch"],
    [candidate.delivery_kind, c.deliveryKind, "delivery_kind_mismatch"],
    [candidate.adapter_id, binding.adapter_id, "adapter_binding_mismatch"],
    [candidate.binding_id, binding.binding_id, "binding_identity_mismatch"],
    [candidate.project_id, binding.project_id, "cross_project_substitution_refused"],
    [candidate.host_configuration_sha256, binding.host_configuration_sha256, "host_configuration_changed"],
    [candidate.executable_identity_sha256, binding.expected_executable_identity_sha256, "executable_identity_mismatch"],
    [candidate.registry_identity_sha256, binding.expected_registry_sha256, "registry_identity_mismatch"],
    [candidate.command_id, c.commandId, "operator_or_unknown_command_refused"],
    [candidate.data_origin, c.dataOrigin, "data_origin_mismatch"],
  ];
  for (const [actual, expected, reason] of exact) {
    if (actual !== expected) return assessment({ runtimeState: "BLOCKED", sourceMode: "none", skills: Object.freeze([]), reason });
  }
  if (!positiveInteger(candidate.duration_ms) || candidate.duration_ms > binding.max_duration_ms) return assessment({ runtimeState: "BLOCKED", sourceMode: "none", skills: Object.freeze([]), reason: "delivery_time_limit_exceeded" });
  if (!nonEmpty(candidate.stdout) || new TextEncoder().encode(candidate.stdout).byteLength > binding.max_output_bytes) return assessment({ runtimeState: "BLOCKED", sourceMode: "none", skills: Object.freeze([]), reason: "delivery_output_limit_exceeded" });
  if (!shaRef(candidate.stdout_sha256) || await knowledgeForgeSha256(candidate.stdout) !== candidate.stdout_sha256) return assessment({ runtimeState: "BLOCKED", sourceMode: "none", skills: Object.freeze([]), reason: "stdout_digest_mismatch" });
  const observedMs = Date.parse(candidate.observed_at);
  if (!nonEmpty(candidate.observed_at) || !rfc3339Pattern.test(candidate.observed_at)
    || !Number.isFinite(observedMs) || observedMs > nowMs + 1000) return assessment({ runtimeState: "BLOCKED", sourceMode: "none", skills: Object.freeze([]), reason: "observation_timestamp_invalid" });
  if (nowMs - observedMs > binding.max_observation_age_ms) return assessment({ runtimeState: "STALE", sourceMode: "none", skills: Object.freeze([]), reason: "observation_stale", observedAt: candidate.observed_at });
  let index;
  try {
    index = JSON.parse(candidate.stdout);
  } catch {
    return assessment({ runtimeState: "BLOCKED", sourceMode: "none", skills: Object.freeze([]), reason: "stdout_json_invalid" });
  }
  const indexResult = await validateIndex(index, binding);
  if (!indexResult.accepted) return assessment({ runtimeState: "BLOCKED", sourceMode: "none", skills: Object.freeze([]), reason: indexResult.reason });
  const projected = projectSkills(index);
  const common = {
    sourceMode: binding.mode === "DRY_RUN" ? "fixture" : "live",
    skills: binding.mode === "DRY_RUN" ? Object.freeze([]) : projected,
    reason: binding.mode === "DRY_RUN" ? "validated_but_not_activated" : "validated_current_projection",
    observedAt: candidate.observed_at,
    dataOrigin: candidate.data_origin,
    selectionEvidence: Object.freeze({
      registrySha256: index.registry_sha256,
      skillsSha256: index.skills_sha256,
      observedAt: candidate.observed_at,
      dataOrigin: candidate.data_origin,
    }),
    graphProjection: projectKnowledgeForgeGraph(index),
  };
  if (binding.mode === "DRY_RUN") return assessment({ runtimeState: "DRY_RUN", ...common });
  return assessment({ runtimeState: projected.length === 0 ? "EMPTY" : "LIVE_CURRENT", ...common });
};

export const libraryModelFromKnowledgeForgeAssessment = (candidate, fixture) => {
  if (!admittedAssessments.has(candidate)) throw new Error("untrusted_library_assessment_refused");
  if (["OFF", "DRY_RUN"].includes(candidate.runtimeState)) return Object.freeze({
    runtimeState: candidate.runtimeState,
    sourceMode: "fixture",
    sourceLabel: "fixture",
    statusDetail: candidate.reason,
    selectionEvidence: Object.freeze({}),
    skills: fixture.skills,
  });
  return Object.freeze({
    runtimeState: candidate.runtimeState,
    sourceMode: candidate.runtimeState === "LIVE_CURRENT" ? "live" : "none",
    sourceLabel: candidate.runtimeState === "LIVE_CURRENT" ? "validated live metadata" : "no current metadata",
    statusDetail: candidate.reason,
    selectionEvidence: candidate.selectionEvidence ?? Object.freeze({}),
    skills: candidate.runtimeState === "LIVE_CURRENT" ? candidate.skills : Object.freeze([]),
  });
};
