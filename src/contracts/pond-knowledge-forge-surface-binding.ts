// Stage D-P12 knowledge-forge surface binding.
//
// The knowledge-forge suite has so far lived only as four receiver ui
// surfaces (p5b desktop projection, p5c skill library browser, p5d
// evidence inspector, p5e governed workflow console), each pinning an
// exact ToadAid/knowledge-forge commit and a fixture-bound posture. This
// cut brings those surfaces into the house source-binding pattern
// (Stage D-P1 mold): a receiver-owned structural binding over the forge
// surfaces' provenance commitments — exact surface identity per surface
// (commits and trees pinned exactly, a single flipped hex character is a
// refusal), exact posture literals, the knowledge law anchor — as a
// fixture-level structural binding only. It refuses, on every outcome,
// that the binding was live-reverified by the receiver, that the surface
// provenance is current registry truth, that skill content was admitted,
// or that any forge lifecycle mutation became available.
//
// Law anchors (ToadAid/toadaid-architecture at
// bc7a971dfb243f0aa4417da6cef85cc56204f783): GOVERNANCE.md L5-7
// "Capability may be created. Authority may not be self-created." — the
// binding records provenance, never authority; governed-ecosystem-
// architecture.md L291-293 authority.monotonicity — a forge-side view
// may reduce or hold authority, never broaden it; agent-identity
// L110-114 "Declared capability is not granted capability". Law is
// silent on knowledge-forge binding mechanics; every mechanic here is an
// app-side decision recorded in the stage document.
//
// The normalized per-surface authority posture is the intersection all
// four ui posture objects already carry: KNOWLEDGE_ONLY / NONE /
// NOT_INCLUDED — normalized naming, ui modules untouched; the module
// literals are proven identical in the selftest's identity-ties block.
// Unlike the D-P1 desk binding, which validated its commit by 40-hex
// regex only, this binding pins the exact commits and trees per surface
// in the frozen commitment table — forge provenance must refuse a single
// flipped hex character.

export type PondKnowledgeForgeSurfaceId =
  | "knowledge-forge-p5b-desktop-projection"
  | "knowledge-forge-p5c-skill-library-browser"
  | "knowledge-forge-p5d-evidence-inspector"
  | "knowledge-forge-p5e-governed-workflow-console";

export type PondKnowledgeForgeSurfaceKind =
  | "desktop_projection"
  | "skill_library_browser"
  | "evidence_inspector"
  | "governed_workflow_console";

export type PondKnowledgeForgeSurfaceProjectionPosture =
  | "fixture_bound_snapshot_not_current_truth"
  | "fixture_metadata_not_live_registry_truth"
  | "fixture_evidence_not_live_registry_truth"
  | "workflow_preview_not_live_mutation";

export interface PondKnowledgeForgeSurfaceAuthorityPosture {
  readonly knowledgeAuthority: "KNOWLEDGE_ONLY";
  readonly executionAuthority: "NONE";
  readonly runtimeConnection: "NOT_INCLUDED";
  readonly mutation: "NONE";
  readonly activation: "NOT_INCLUDED";
}

export interface PondKnowledgeForgeSurfaceCommitment {
  readonly surfaceId: PondKnowledgeForgeSurfaceId;
  readonly surfaceKind: PondKnowledgeForgeSurfaceKind;
  readonly forgeRepository: "ToadAid/knowledge-forge";
  readonly forgeCommit: string;
  readonly forgeTree: string;
  readonly companionRepository: string;
  readonly companionCommit: string;
  readonly surfaceProjectionPosture: PondKnowledgeForgeSurfaceProjectionPosture;
  readonly authorityPosture: PondKnowledgeForgeSurfaceAuthorityPosture;
}

export const POND_STAGE_DP12_ARCHITECTURE_COMMIT = "bc7a971dfb243f0aa4417da6cef85cc56204f783";

export const POND_STAGE_DP12_KNOWLEDGE_LAW_ANCHOR =
  "Build capability. Never manufacture authority.";

export const POND_STAGE_DP12_KNOWLEDGE_FORGE_SURFACE_IDS = Object.freeze([
  "knowledge-forge-p5b-desktop-projection",
  "knowledge-forge-p5c-skill-library-browser",
  "knowledge-forge-p5d-evidence-inspector",
  "knowledge-forge-p5e-governed-workflow-console",
] as const satisfies readonly PondKnowledgeForgeSurfaceId[]);

// The contract-pinned provenance table. These commitments were extracted
// from the four ui/pond-knowledge-forge*.js module texts; the selftest
// re-extracts them from the modules directly so the binding and the ui
// it binds cannot drift apart.
export const POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS = Object.freeze([
  {
    surfaceId: "knowledge-forge-p5b-desktop-projection",
    surfaceKind: "desktop_projection",
    forgeRepository: "ToadAid/knowledge-forge",
    forgeCommit: "41a15164f091f63e9a4d3b06c5ac4e43c9d4755b",
    forgeTree: "53bc0ef4a92dc65fe83cd26c28df0ee4a0152bb1",
    companionRepository: "ToadAid/toadaid-architecture",
    companionCommit: "bc7a971dfb243f0aa4417da6cef85cc56204f783",
    surfaceProjectionPosture: "fixture_bound_snapshot_not_current_truth",
    authorityPosture: {
      knowledgeAuthority: "KNOWLEDGE_ONLY",
      executionAuthority: "NONE",
      runtimeConnection: "NOT_INCLUDED",
      mutation: "NONE",
      activation: "NOT_INCLUDED",
    },
  },
  {
    surfaceId: "knowledge-forge-p5c-skill-library-browser",
    surfaceKind: "skill_library_browser",
    forgeRepository: "ToadAid/knowledge-forge",
    forgeCommit: "caa4bdf3b4fbd95a9d8f0a2686798cc9e1a6f0ad",
    forgeTree: "1ef8fe116e65bd0ac4eb832451d195831c2c396e",
    companionRepository: "ToadAid/toadaid-app",
    companionCommit: "d0c10d0a22054837fa583381132c60be0cef7f15",
    surfaceProjectionPosture: "fixture_metadata_not_live_registry_truth",
    authorityPosture: {
      knowledgeAuthority: "KNOWLEDGE_ONLY",
      executionAuthority: "NONE",
      runtimeConnection: "NOT_INCLUDED",
      mutation: "NONE",
      activation: "NOT_INCLUDED",
    },
  },
  {
    surfaceId: "knowledge-forge-p5d-evidence-inspector",
    surfaceKind: "evidence_inspector",
    forgeRepository: "ToadAid/knowledge-forge",
    forgeCommit: "d4cf038eb188975e9ac4a5d875c15998e366a8ee",
    forgeTree: "60e7b36b61c4ac9617c2ef1df0a787b56e7eef0f",
    companionRepository: "ToadAid/toadaid-app",
    companionCommit: "3117bb66c7ab88f6e1abcac6e0101ff07fe68506",
    surfaceProjectionPosture: "fixture_evidence_not_live_registry_truth",
    authorityPosture: {
      knowledgeAuthority: "KNOWLEDGE_ONLY",
      executionAuthority: "NONE",
      runtimeConnection: "NOT_INCLUDED",
      mutation: "NONE",
      activation: "NOT_INCLUDED",
    },
  },
  {
    surfaceId: "knowledge-forge-p5e-governed-workflow-console",
    surfaceKind: "governed_workflow_console",
    forgeRepository: "ToadAid/knowledge-forge",
    forgeCommit: "368077ee22b692f6879659d47b276f5edda5c113",
    forgeTree: "d346931179979e34fe9a37b2d85aa0276ca04c2c",
    companionRepository: "ToadAid/toadaid-app",
    companionCommit: "8de15239a150f5433d3b8c41f4a4c0dcfa66d8c4",
    surfaceProjectionPosture: "workflow_preview_not_live_mutation",
    authorityPosture: {
      knowledgeAuthority: "KNOWLEDGE_ONLY",
      executionAuthority: "NONE",
      runtimeConnection: "NOT_INCLUDED",
      mutation: "NONE",
      activation: "NOT_INCLUDED",
    },
  },
] as const satisfies readonly PondKnowledgeForgeSurfaceCommitment[]);

export type PondKnowledgeForgeSurfaceBindingCheck =
  | "binding_record_well_formed_frozen_vocabulary"
  | "exact_forge_source_identity_per_surface"
  | "forge_surface_posture_literals_held"
  | "knowledge_law_anchor_held"
  | "surface_inventory_exact_and_receiver_recorded"
  | "no_live_connection_lifecycle_or_mutation_posture";

export type PondKnowledgeForgeSurfaceBindingState =
  | "not_established"
  | "fixture_bound_forge_surface_provenance";

export interface PondKnowledgeForgeSurfaceBindingInput {
  readonly forgeBindingRecord: unknown;
}

export interface PondKnowledgeForgeSurfaceBindingAssessment {
  readonly contractVersion: "pond-knowledge-forge-surface-binding-d-p12";
  readonly assessmentKind: "deterministic_supplied_knowledge_forge_surface_binding";
  readonly bindingState: PondKnowledgeForgeSurfaceBindingState;
  readonly reason:
    | "binding_record_invalid"
    | "forge_surface_provenance_incomplete"
    | "forge_surface_binding_structurally_recorded";
  readonly satisfiedChecks: readonly PondKnowledgeForgeSurfaceBindingCheck[];
  readonly unsatisfiedChecks: readonly PondKnowledgeForgeSurfaceBindingCheck[];
  readonly forgeSurfaceProvenanceReverifiedByReceiver: false;
  readonly forgeSurfaceAcceptedAsCurrentRegistryTruth: false;
  readonly skillContentAdmitted: false;
  readonly forgeLifecycleMutationAvailable: false;
  readonly runtimeActivationPosture: "not_included";
  readonly authority: "none";
}

// Keys whose presence anywhere in the binding record would mean a live
// connection channel, a lifecycle dial, or an authority surface entered
// the binding as data. The binding is read-only provenance vocabulary,
// never a dial.
export const POND_STAGE_DP12_FORBIDDEN_FORGE_BINDING_KEYS = Object.freeze([
  "connect",
  "listen",
  "poll",
  "subscribe",
  "fetch",
  "execute",
  "canExecute",
  "mayMutate",
  "approve",
  "grant",
  "apiKey",
  "secret",
  "token",
  "credential",
  "wallet",
  "privateKey",
] as const);

const bindingChecks = Object.freeze([
  "binding_record_well_formed_frozen_vocabulary",
  "exact_forge_source_identity_per_surface",
  "forge_surface_posture_literals_held",
  "knowledge_law_anchor_held",
  "surface_inventory_exact_and_receiver_recorded",
  "no_live_connection_lifecycle_or_mutation_posture",
] as const satisfies readonly PondKnowledgeForgeSurfaceBindingCheck[]);

const surfaceIds = POND_STAGE_DP12_KNOWLEDGE_FORGE_SURFACE_IDS;

const record = (value: unknown): Record<string, unknown> | null =>
  value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;

const exactArray = (value: unknown, expected: readonly string[]) =>
  Array.isArray(value) &&
  value.length === expected.length &&
  value.every((entry, index) => entry === expected[index]);

const exactKeys = (
  value: Record<string, unknown>,
  expected: readonly string[],
) => exactArray(Object.keys(value).sort(), [...expected].sort());

const hasForbiddenKey = (
  value: unknown,
  forbidden: readonly string[],
): boolean => {
  const stack: unknown[] = [value];
  while (stack.length > 0) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    const currentRecord = record(current);
    if (currentRecord === null) continue;
    for (const key of Object.keys(currentRecord)) {
      if (forbidden.includes(key)) return true;
      stack.push(currentRecord[key]);
    }
  }
  return false;
};

const hex40 = (value: unknown): value is string =>
  typeof value === "string" && /^[0-9a-f]{40}$/.test(value);

// Structural well-formedness only — exact keys at every level, the frozen
// vocabulary membership of each key, the 40-hex format of every commit and
// tree, and the forbidden-key walk. Exact-value equality with the pinned
// commitment table belongs to the checks, so a tampered commit or posture
// literal is a provenance refusal, never a malformed record.
const validBindingShape = (value: unknown): boolean => {
  const binding = record(value);
  if (
    binding === null ||
    !exactKeys(binding, [
      "contractVersion",
      "kind",
      "architectureCommit",
      "lawAnchor",
      "surfaces",
      "workflowConsoleLifecycle",
      "authority",
    ]) ||
    binding.contractVersion !==
      "pond-knowledge-forge-surface-binding-d-p12" ||
    binding.kind !== "pond-knowledge-forge-surface-binding" ||
    typeof binding.architectureCommit !== "string" ||
    !hex40(binding.architectureCommit) ||
    typeof binding.lawAnchor !== "string" ||
    binding.authority !== "none"
  )
    return false;
  const surfaces = record(binding.surfaces);
  if (surfaces === null) return false;
  const surfaceKeys = Object.keys(surfaces);
  // A surface key outside the frozen id vocabulary is a frozen-vocabulary
  // breach (invalid); a missing id leaves the record well-formed but with
  // an incomplete inventory (provenance refusal below).
  if (
    surfaceKeys.length === 0 ||
    !surfaceKeys.every((key) => (surfaceIds as readonly string[]).includes(key))
  )
    return false;
  for (const surfaceId of surfaceKeys) {
    const entry = record(surfaces[surfaceId]);
    const authorityPosture = record(entry?.authorityPosture);
    if (
      entry === null ||
      !exactKeys(entry, [
        "surfaceId",
        "surfaceKind",
        "forgeRepository",
        "forgeCommit",
        "forgeTree",
        "companionRepository",
        "companionCommit",
        "surfaceProjectionPosture",
        "authorityPosture",
      ]) ||
      typeof entry.surfaceId !== "string" ||
      typeof entry.surfaceKind !== "string" ||
      typeof entry.forgeRepository !== "string" ||
      !hex40(entry.forgeCommit) ||
      !hex40(entry.forgeTree) ||
      typeof entry.companionRepository !== "string" ||
      typeof entry.companionCommit !== "string" ||
      typeof entry.surfaceProjectionPosture !== "string" ||
      authorityPosture === null ||
      !exactKeys(authorityPosture, [
        "knowledgeAuthority",
        "executionAuthority",
        "runtimeConnection",
        "mutation",
        "activation",
      ]) ||
      typeof authorityPosture.knowledgeAuthority !== "string" ||
      typeof authorityPosture.executionAuthority !== "string" ||
      typeof authorityPosture.runtimeConnection !== "string" ||
      typeof authorityPosture.mutation !== "string" ||
      typeof authorityPosture.activation !== "string"
    )
      return false;
  }
  // The workflow-console lifecycle literal set is p5e-only in the ui; it
  // travels as its own top-level record so the surfaces map stays uniform.
  const lifecycle = record(binding.workflowConsoleLifecycle);
  return (
    lifecycle !== null &&
    exactKeys(lifecycle, [
      "surfaceId",
      "lifecycleAuthority",
      "persistence",
      "executable",
    ]) &&
    lifecycle.surfaceId === "knowledge-forge-p5e-governed-workflow-console" &&
    typeof lifecycle.lifecycleAuthority === "string" &&
    typeof lifecycle.persistence === "string" &&
    lifecycle.executable === false &&
    !hasForbiddenKey(binding, POND_STAGE_DP12_FORBIDDEN_FORGE_BINDING_KEYS)
  );
};

const commitmentById = new Map(
  POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS.map(
    (commitment) => [commitment.surfaceId, commitment],
  ),
);

const postureHeld = (
  entry: Record<string, unknown>,
  commitment: (typeof POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS)[number],
): boolean => {
  const authorityPosture = record(entry.authorityPosture);
  return (
    entry.surfaceProjectionPosture === commitment.surfaceProjectionPosture &&
    authorityPosture !== null &&
    authorityPosture.knowledgeAuthority === "KNOWLEDGE_ONLY" &&
    authorityPosture.executionAuthority === "NONE" &&
    authorityPosture.runtimeConnection === "NOT_INCLUDED" &&
    authorityPosture.mutation === "NONE" &&
    authorityPosture.activation === "NOT_INCLUDED"
  );
};

const everySurfaceHolds = (
  surfaces: Record<string, unknown>,
  holds: (
    entry: Record<string, unknown>,
    commitment: (typeof POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS)[number],
  ) => boolean,
): boolean =>
  POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS.every((commitment) => {
    const entry = commitmentById.get(commitment.surfaceId) === undefined
      ? null
      : record(surfaces[commitment.surfaceId]);
    return entry !== null && holds(entry, commitment);
  });

const bindingAssessment = (
  reason: PondKnowledgeForgeSurfaceBindingAssessment["reason"],
  satisfiedChecks: readonly PondKnowledgeForgeSurfaceBindingCheck[],
  unsatisfiedChecks: readonly PondKnowledgeForgeSurfaceBindingCheck[],
): PondKnowledgeForgeSurfaceBindingAssessment =>
  Object.freeze({
    contractVersion: "pond-knowledge-forge-surface-binding-d-p12",
    assessmentKind: "deterministic_supplied_knowledge_forge_surface_binding",
    bindingState:
      reason === "forge_surface_binding_structurally_recorded"
        ? "fixture_bound_forge_surface_provenance"
        : "not_established",
    reason,
    satisfiedChecks: Object.freeze([...satisfiedChecks]),
    unsatisfiedChecks: Object.freeze([...unsatisfiedChecks]),
    // The binding records provenance the receiver already holds in its
    // own ui surfaces; the receiver never re-performed the read that
    // would prove these commits are the forge repository's current
    // state, so the refused tuple stays on every outcome.
    forgeSurfaceProvenanceReverifiedByReceiver: false,
    forgeSurfaceAcceptedAsCurrentRegistryTruth: false,
    skillContentAdmitted: false,
    forgeLifecycleMutationAvailable: false,
    runtimeActivationPosture: "not_included",
    authority: "none",
  });

const bindingCheckValues = (
  bindingInput: unknown,
): readonly boolean[] => {
  const binding = record(bindingInput);
  if (binding === null) return [false, false, false, false, false, false];
  const surfaces = record(binding.surfaces);
  if (surfaces === null) return [false, false, false, false, false, false];
  const identityHeld = POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS.every(
    (commitment) => {
      const entry = record(surfaces[commitment.surfaceId]);
      return (
        entry !== null &&
        entry.forgeRepository === "ToadAid/knowledge-forge" &&
        entry.surfaceKind === commitment.surfaceKind &&
        entry.forgeCommit === commitment.forgeCommit &&
        entry.forgeTree === commitment.forgeTree &&
        entry.companionRepository === commitment.companionRepository &&
        entry.companionCommit === commitment.companionCommit
      );
    },
  );
  const posturesHeld = everySurfaceHolds(surfaces, postureHeld);
  const lawAnchorHeld =
    binding.lawAnchor === POND_STAGE_DP12_KNOWLEDGE_LAW_ANCHOR &&
    binding.architectureCommit === POND_STAGE_DP12_ARCHITECTURE_COMMIT;
  const inventoryExact =
    exactKeys(surfaces, surfaceIds) &&
    POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS.every((commitment) => {
      const entry = record(surfaces[commitment.surfaceId]);
      return entry !== null && entry.surfaceId === commitment.surfaceId;
    });
  const lifecycle = record(binding.workflowConsoleLifecycle);
  const lifecycleNoLive =
    lifecycle !== null &&
    lifecycle.lifecycleAuthority === "EXTERNAL_REQUIRED_NOT_ESTABLISHED" &&
    lifecycle.persistence === "NONE" &&
    lifecycle.executable === false;
  return [
    true,
    identityHeld,
    posturesHeld,
    lawAnchorHeld,
    inventoryExact,
    lifecycleNoLive,
  ];
};

export function assessPondKnowledgeForgeSurfaceBinding(
  input: PondKnowledgeForgeSurfaceBindingInput,
): PondKnowledgeForgeSurfaceBindingAssessment {
  const binding = record(input.forgeBindingRecord);
  if (!validBindingShape(binding))
    return bindingAssessment(
      "binding_record_invalid",
      [],
      bindingChecks,
    );

  const values = bindingCheckValues(binding);
  const satisfied = bindingChecks.filter((_, index) => values[index]);
  const unsatisfied = bindingChecks.filter((_, index) => !values[index]);
  return bindingAssessment(
    unsatisfied.length === 0
      ? "forge_surface_binding_structurally_recorded"
      : "forge_surface_provenance_incomplete",
    satisfied,
    unsatisfied,
  );
}

// Compile-time invariants for this cut. The surface binding is a
// provenance record — it never becomes receiver re-verification, current
// registry truth, admitted skill content, an available lifecycle mutation,
// or authority, and it carries none of the frozen D-P0…D-P11 tuple names.
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasAnyKey<T, K extends string> = K extends keyof T ? true : false;

export type PondStageDP12Invariant_BindingChecksExact = Assert<
  Equal<
    PondKnowledgeForgeSurfaceBindingCheck,
    | "binding_record_well_formed_frozen_vocabulary"
    | "exact_forge_source_identity_per_surface"
    | "forge_surface_posture_literals_held"
    | "knowledge_law_anchor_held"
    | "surface_inventory_exact_and_receiver_recorded"
    | "no_live_connection_lifecycle_or_mutation_posture"
  >
>;
export type PondStageDP12Invariant_BindingStatesExact = Assert<
  Equal<
    PondKnowledgeForgeSurfaceBindingState,
    "not_established" | "fixture_bound_forge_surface_provenance"
  >
>;
export type PondStageDP12Invariant_BindingReasonsExact = Assert<
  Equal<
    PondKnowledgeForgeSurfaceBindingAssessment["reason"],
    | "binding_record_invalid"
    | "forge_surface_provenance_incomplete"
    | "forge_surface_binding_structurally_recorded"
  >
>;
export type PondStageDP12Invariant_CommitmentTableMatchesSurfaceIds = Assert<
  Equal<
    (typeof POND_STAGE_DP12_KNOWLEDGE_FORGE_SURFACE_IDS)[number],
    (typeof POND_STAGE_DP12_FORGE_SURFACE_COMMITMENTS)[number]["surfaceId"]
  >
>;
export type PondStageDP12Invariant_BindingNeverBecomesReverificationTruthContentMutationOrAuthority =
  Assert<
    Equal<
      [
        PondKnowledgeForgeSurfaceBindingAssessment["forgeSurfaceProvenanceReverifiedByReceiver"],
        PondKnowledgeForgeSurfaceBindingAssessment["forgeSurfaceAcceptedAsCurrentRegistryTruth"],
        PondKnowledgeForgeSurfaceBindingAssessment["skillContentAdmitted"],
        PondKnowledgeForgeSurfaceBindingAssessment["forgeLifecycleMutationAvailable"],
        PondKnowledgeForgeSurfaceBindingAssessment["runtimeActivationPosture"],
        PondKnowledgeForgeSurfaceBindingAssessment["authority"],
      ],
      [false, false, false, false, "not_included", "none"]
    >
  >;
export type PondStageDP12Invariant_NoFrozenNamesOnBindingAssessment = Assert<
  HasAnyKey<
    PondKnowledgeForgeSurfaceBindingAssessment,
    | "privateReadsActivated"
    | "mappingEstablishmentState"
    | "onchainVerificationState"
    | "mappingEstablishesGrant"
    | "erc8004IdentityAcceptedAsPrincipalId"
    | "onchainIdentityAcceptedAsAuthentication"
  > extends false
    ? true
    : false
>;