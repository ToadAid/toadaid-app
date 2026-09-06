// Stage B2-P4B-P4 deterministic visual-asset admission gate proof fixtures.
//
// These are synthetic evidence records. They do not represent an actual
// repository asset and do not load or admit any runtime visual file.

import {
  evaluatePondVisualAssetAdmission,
  POND_VISUAL_ASSET_ADMISSION_POLICY_P4B_P4,
  type PondVisualAssetAdmissionCandidate,
  type PondVisualAssetAdmissionEvaluation,
  type PondVisualAssetAdmissionRefusalReason,
  type PondVisualAssetObservedEvidence,
} from "../contracts/pond-visual-asset-admission.js";

const syntheticSha =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

export const stageB2P4BP4Policy =
  POND_VISUAL_ASSET_ADMISSION_POLICY_P4B_P4;

export const syntheticRasterCandidate = {
  contractVersion: "pond-visual-asset-admission-b2-p4b-p4",
  recordState: "candidate_not_admitted",
  repositoryPath: "ui/assets/synthetic/guide-reference.png",
  kind: "raster",
  presentationRole: "guide_texture",
  provenance: {
    sourceReference: "fixture:synthetic-source",
    creatorOrOwner: "fixture:synthetic-creator",
    attribution: "Synthetic fixture only",
    license: {
      status: "verified",
      identifier: "Apache-2.0",
      evidenceReferences: ["fixture:license-evidence"],
    },
  },
  digest: {
    algorithm: "sha256",
    value: syntheticSha,
  },
  byteSize: 512_000,
  metadata: {
    kind: "raster",
    format: "png",
    mimeType: "image/png",
    width: 1024,
    height: 1024,
  },
  authority: "none",
} as const satisfies PondVisualAssetAdmissionCandidate;

const syntheticObservedProvenance = {
  sourceReference: "fixture:synthetic-source",
  creatorOrOwner: "fixture:synthetic-creator",
  attribution: "Synthetic fixture only",
  license: {
    verificationPosture: "independently_verified",
    identifier: "Apache-2.0",
    evidenceReferences: ["fixture:license-evidence"],
  },
} as const;

export const syntheticRasterEvidence = {
  kind: "raster",
  repositoryPath: "ui/assets/synthetic/guide-reference.png",
  sha256: syntheticSha,
  byteSize: 512_000,
  provenance: syntheticObservedProvenance,
  format: "png",
  mimeType: "image/png",
  width: 1024,
  height: 1024,
} as const satisfies PondVisualAssetObservedEvidence;

const evaluate = (
  candidate: unknown,
  observed: unknown = syntheticRasterEvidence,
): PondVisualAssetAdmissionEvaluation =>
  evaluatePondVisualAssetAdmission(
    candidate,
    observed,
  );

const requireEligible = (
  evaluation: PondVisualAssetAdmissionEvaluation,
  label: string,
): void => {
  if (evaluation.outcome !== "eligible_for_repository_admission") {
    throw new Error(
      `${label}: expected eligible, got ${evaluation.reasons.join(",")}`,
    );
  }
};

const requireRefusal = (
  evaluation: PondVisualAssetAdmissionEvaluation,
  reason: PondVisualAssetAdmissionRefusalReason,
  label: string,
): void => {
  if (
    evaluation.outcome !== "refused" ||
    !evaluation.reasons.includes(reason)
  ) {
    throw new Error(`${label}: expected refusal ${reason}`);
  }
};

const cloneCandidate = (): Record<string, unknown> =>
  structuredClone(
    syntheticRasterCandidate,
  ) as unknown as Record<string, unknown>;

export const runStageB2P4BP4AdmissionGateProof = (): void => {
  if (
    !Object.isFrozen(POND_VISUAL_ASSET_ADMISSION_POLICY_P4B_P4) ||
    !Object.isFrozen(POND_VISUAL_ASSET_ADMISSION_POLICY_P4B_P4.image) ||
    !Object.isFrozen(POND_VISUAL_ASSET_ADMISSION_POLICY_P4B_P4.model) ||
    !Object.isFrozen(
      POND_VISUAL_ASSET_ADMISSION_POLICY_P4B_P4.model.allowedLoaderPaths,
    )
  ) {
    throw new Error("canonical P4B-P4 policy must be deeply runtime-frozen");
  }

  requireEligible(
    evaluate(syntheticRasterCandidate),
    "matching synthetic raster evidence",
  );

  const missingEvidence = cloneCandidate();
  missingEvidence.provenance = {
    sourceReference: "",
    creatorOrOwner: "",
    attribution: "",
    license: {
      status: "verified",
      identifier: "Apache-2.0",
      evidenceReferences: [],
    },
  };
  requireRefusal(
    evaluate(missingEvidence),
    "missing_evidence",
    "missing provenance/license evidence",
  );

  const unknownLicense = cloneCandidate();
  unknownLicense.provenance = {
    sourceReference: "fixture:source",
    creatorOrOwner: "fixture:creator",
    attribution: "fixture",
    license: {
      status: "unknown",
      identifier: "unknown",
      evidenceReferences: ["fixture:unverified"],
    },
  };
  requireRefusal(
    evaluate(unknownLicense),
    "unknown_license",
    "unknown license",
  );

  const escapedPath = cloneCandidate();
  escapedPath.repositoryPath = "../outside/guide.png";
  requireRefusal(
    evaluate(escapedPath),
    "path_escape_or_outside_asset_root",
    "path escape",
  );

  const missingPresentationRole = cloneCandidate();
  delete missingPresentationRole.presentationRole;
  requireRefusal(
    evaluate(missingPresentationRole),
    "invalid_presentation_role",
    "missing presentation role",
  );

  const mismatchedPresentationRole = cloneCandidate();
  mismatchedPresentationRole.presentationRole = "guide_model";
  requireRefusal(
    evaluate(mismatchedPresentationRole),
    "role_kind_mismatch",
    "presentation role kind mismatch",
  );

  const encodedTraversal = cloneCandidate();
  encodedTraversal.repositoryPath =
    "ui/assets/%2e%2e/guide-reference.png";
  requireRefusal(
    evaluate(encodedTraversal, {
      ...syntheticRasterEvidence,
      repositoryPath: encodedTraversal.repositoryPath,
    }),
    "path_escape_or_outside_asset_root",
    "percent encoded dot segment",
  );

  const querySemanticPath = cloneCandidate();
  querySemanticPath.repositoryPath =
    "ui/assets/guide-reference?variant=.png";
  requireRefusal(
    evaluate(querySemanticPath, {
      ...syntheticRasterEvidence,
      repositoryPath: querySemanticPath.repositoryPath,
    }),
    "path_escape_or_outside_asset_root",
    "query semantic path",
  );

  const unsupportedKind = cloneCandidate();
  unsupportedKind.kind = "audio";
  requireRefusal(
    evaluate(unsupportedKind),
    "unsupported_kind",
    "unsupported kind",
  );

  const hashMismatchEvidence = {
    ...syntheticRasterEvidence,
    sha256:
      "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  };
  requireRefusal(
    evaluate(syntheticRasterCandidate, hashMismatchEvidence),
    "hash_mismatch",
    "hash mismatch",
  );

  const sizeMismatchEvidence = {
    ...syntheticRasterEvidence,
    byteSize: 512_001,
  };
  requireRefusal(
    evaluate(syntheticRasterCandidate, sizeMismatchEvidence),
    "size_mismatch",
    "size mismatch",
  );

  const metadataMismatchEvidence = {
    ...syntheticRasterEvidence,
    width: 2048,
  };
  requireRefusal(
    evaluate(syntheticRasterCandidate, metadataMismatchEvidence),
    "metadata_mismatch",
    "metadata mismatch",
  );

  const overBudget = cloneCandidate();
  overBudget.byteSize = 9_000_000;
  requireRefusal(
    evaluate(overBudget),
    "budget_violation",
    "byte budget violation",
  );

  const selfAssertedLicense = cloneCandidate();
  selfAssertedLicense.provenance = {
    sourceReference: "candidate:invented-source",
    creatorOrOwner: "candidate:invented-owner",
    attribution: "candidate supplied assertion",
    license: {
      status: "verified",
      identifier: "Totally-Made-Up-License-1.0",
      evidenceReferences: ["candidate:invented-evidence-reference"],
    },
  };
  requireRefusal(
    evaluate(selfAssertedLicense),
    "provenance_mismatch",
    "candidate self asserted verified license",
  );

  const missingObservedProvenance = {
    ...syntheticRasterEvidence,
  } as Record<string, unknown>;
  delete missingObservedProvenance.provenance;
  requireRefusal(
    evaluate(syntheticRasterCandidate, missingObservedProvenance),
    "missing_evidence",
    "missing independently observed provenance",
  );

  const modelCandidate = {
    contractVersion: "pond-visual-asset-admission-b2-p4b-p4",
    recordState: "candidate_not_admitted",
    repositoryPath: "ui/assets/synthetic/guardian.glb",
    kind: "model",
    presentationRole: "guide_model",
    provenance: syntheticRasterCandidate.provenance,
    digest: syntheticRasterCandidate.digest,
    byteSize: 1_000_000,
    metadata: {
      kind: "model",
      format: "glb",
      vertexCount: 20_000,
      triangleCount: 18_000,
      materialCount: 4,
      textureCount: 2,
      declaredLoaderPath: "ui/vendor/model-loader-not-admitted.js",
    },
    authority: "none",
  } as const satisfies PondVisualAssetAdmissionCandidate;

  const modelEvidence = {
    kind: "model",
    repositoryPath: "ui/assets/synthetic/guardian.glb",
    sha256: syntheticSha,
    byteSize: 1_000_000,
    provenance: syntheticObservedProvenance,
    format: "glb",
    vertexCount: 20_000,
    triangleCount: 18_000,
    materialCount: 4,
    textureCount: 2,
  } as const satisfies PondVisualAssetObservedEvidence;

  requireRefusal(
    evaluatePondVisualAssetAdmission(
      modelCandidate,
      modelEvidence,
    ),
    "unsupported_loader",
    "model loader not yet admitted",
  );
};

runStageB2P4BP4AdmissionGateProof();

export const stageB2P4BP4ProofPosture = {
  syntheticOnly: true,
  actualAssetsAdmitted: 0,
  runtimeAssetsLoaded: 0,
  networkFetches: 0,
  authority: "none",
} as const;
