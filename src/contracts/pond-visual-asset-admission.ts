// Stage B2-P4B-P4 fail-closed visual-asset admission contract.
//
// This contract evaluates evidence only. It does not import files, fetch
// network resources, load runtime assets, or create authority.

export type PondVisualAssetKind = "raster" | "texture" | "model";

export type PondVisualAssetPresentationRole =
  | "guide_model"
  | "guide_texture"
  | "world_model"
  | "world_texture"
  | "environment_texture";

export type PondVisualAssetLicenseStatus = "verified" | "unknown";

export interface PondVisualAssetProvenance {
  readonly sourceReference: string;
  readonly creatorOrOwner: string;
  readonly attribution: string;
  readonly license: {
    readonly status: PondVisualAssetLicenseStatus;
    readonly identifier: string;
    readonly evidenceReferences: readonly string[];
  };
}

export interface PondVisualAssetDigest {
  readonly algorithm: "sha256";
  readonly value: string;
}

export interface PondVisualAssetImageMetadata {
  readonly kind: "raster" | "texture";
  readonly format: "png" | "jpeg" | "webp" | "ktx2" | "hdr" | "exr";
  readonly mimeType:
    | "image/png"
    | "image/jpeg"
    | "image/webp"
    | "image/ktx2"
    | "image/vnd.radiance"
    | "image/x-exr";
  readonly width: number;
  readonly height: number;
}

export interface PondVisualAssetModelMetadata {
  readonly kind: "model";
  readonly format: "glb" | "gltf";
  readonly vertexCount: number;
  readonly triangleCount: number;
  readonly materialCount: number;
  readonly textureCount: number;
  readonly declaredLoaderPath: string;
}

export type PondVisualAssetMetadata =
  | PondVisualAssetImageMetadata
  | PondVisualAssetModelMetadata;

export interface PondVisualAssetAdmissionCandidate {
  readonly contractVersion: "pond-visual-asset-admission-b2-p4b-p4";
  readonly recordState: "candidate_not_admitted";
  readonly repositoryPath: string;
  readonly kind: PondVisualAssetKind;
  readonly presentationRole: PondVisualAssetPresentationRole;
  readonly provenance: PondVisualAssetProvenance;
  readonly digest: PondVisualAssetDigest;
  readonly byteSize: number;
  readonly metadata: PondVisualAssetMetadata;
  readonly authority: "none";
}

export interface PondVisualAssetObservedProvenanceEvidence {
  readonly sourceReference: string;
  readonly creatorOrOwner: string;
  readonly attribution: string;
  readonly license: {
    readonly verificationPosture: "independently_verified";
    readonly identifier: string;
    readonly evidenceReferences: readonly string[];
  };
}

export interface PondVisualAssetObservedImageEvidence {
  readonly kind: "raster" | "texture";
  readonly repositoryPath: string;
  readonly sha256: string;
  readonly byteSize: number;
  readonly provenance: PondVisualAssetObservedProvenanceEvidence;
  readonly format: PondVisualAssetImageMetadata["format"];
  readonly mimeType: PondVisualAssetImageMetadata["mimeType"];
  readonly width: number;
  readonly height: number;
}

export interface PondVisualAssetObservedModelEvidence {
  readonly kind: "model";
  readonly repositoryPath: string;
  readonly sha256: string;
  readonly byteSize: number;
  readonly provenance: PondVisualAssetObservedProvenanceEvidence;
  readonly format: PondVisualAssetModelMetadata["format"];
  readonly vertexCount: number;
  readonly triangleCount: number;
  readonly materialCount: number;
  readonly textureCount: number;
}

export type PondVisualAssetObservedEvidence =
  | PondVisualAssetObservedImageEvidence
  | PondVisualAssetObservedModelEvidence;

export interface PondVisualAssetAdmissionPolicy {
  readonly policyVersion: "pond-visual-asset-policy-b2-p4b-p4";
  readonly repositoryAssetRoot: "ui/assets/";
  readonly maxBytes: number;
  readonly image: {
    readonly maxWidth: number;
    readonly maxHeight: number;
    readonly maxPixels: number;
  };
  readonly model: {
    readonly maxVertices: number;
    readonly maxTriangles: number;
    readonly maxMaterials: number;
    readonly maxTextures: number;
    readonly allowedLoaderPaths: readonly string[];
  };
  readonly authority: "none";
}

const POND_VISUAL_ASSET_ALLOWED_LOADER_PATHS_P4B_P4 =
  Object.freeze([]) as readonly string[];

const POND_VISUAL_ASSET_IMAGE_POLICY_P4B_P4 = Object.freeze({
  maxWidth: 4096,
  maxHeight: 4096,
  maxPixels: 16_777_216,
});

const POND_VISUAL_ASSET_MODEL_POLICY_P4B_P4 = Object.freeze({
  maxVertices: 60_000,
  maxTriangles: 60_000,
  maxMaterials: 24,
  maxTextures: 16,
  allowedLoaderPaths: POND_VISUAL_ASSET_ALLOWED_LOADER_PATHS_P4B_P4,
});

export const POND_VISUAL_ASSET_ADMISSION_POLICY_P4B_P4 =
  Object.freeze({
    policyVersion: "pond-visual-asset-policy-b2-p4b-p4",
    repositoryAssetRoot: "ui/assets/",
    maxBytes: 8_000_000,
    image: POND_VISUAL_ASSET_IMAGE_POLICY_P4B_P4,
    model: POND_VISUAL_ASSET_MODEL_POLICY_P4B_P4,
    authority: "none",
  }) satisfies PondVisualAssetAdmissionPolicy;

export type PondVisualAssetAdmissionRefusalReason =
  | "invalid_record"
  | "missing_evidence"
  | "unknown_license"
  | "provenance_mismatch"
  | "invalid_presentation_role"
  | "role_kind_mismatch"
  | "path_escape_or_outside_asset_root"
  | "unsupported_kind"
  | "unsupported_format"
  | "hash_mismatch"
  | "size_mismatch"
  | "metadata_mismatch"
  | "budget_violation"
  | "unsupported_loader";

export type PondVisualAssetAdmissionEvaluation =
  | {
      readonly contractVersion: "pond-visual-asset-admission-b2-p4b-p4";
      readonly outcome: "eligible_for_repository_admission";
      readonly repositoryPath: string;
      readonly posture: "evidence_matched_policy_checked_not_runtime_loaded";
      readonly authority: "none";
    }
  | {
      readonly contractVersion: "pond-visual-asset-admission-b2-p4b-p4";
      readonly outcome: "refused";
      readonly repositoryPath: string | null;
      readonly reasons: readonly PondVisualAssetAdmissionRefusalReason[];
      readonly posture: "fail_closed_not_admitted";
      readonly authority: "none";
    };

type JsonRecord = Record<string, unknown>;

const imageExtensions = {
  png: ".png",
  jpeg: ".jpg",
  webp: ".webp",
  ktx2: ".ktx2",
  hdr: ".hdr",
  exr: ".exr",
} as const;

const modelExtensions = {
  glb: ".glb",
  gltf: ".gltf",
} as const;

const imageMimeByFormat = {
  png: "image/png",
  jpeg: "image/jpeg",
  webp: "image/webp",
  ktx2: "image/ktx2",
  hdr: "image/vnd.radiance",
  exr: "image/x-exr",
} as const;

const isRecord = (value: unknown): value is JsonRecord =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const isPositiveInteger = (value: unknown): value is number =>
  typeof value === "number" &&
  Number.isSafeInteger(value) &&
  value > 0;

const isNonNegativeInteger = (value: unknown): value is number =>
  typeof value === "number" &&
  Number.isSafeInteger(value) &&
  value >= 0;

const isSha256 = (value: unknown): value is string =>
  typeof value === "string" && /^[0-9a-f]{64}$/.test(value);

const addReason = (
  reasons: PondVisualAssetAdmissionRefusalReason[],
  reason: PondVisualAssetAdmissionRefusalReason,
): void => {
  if (!reasons.includes(reason)) {
    reasons.push(reason);
  }
};

const safeRepositoryPath = (
  value: unknown,
  assetRoot: string,
): value is string => {
  if (!isNonEmptyString(value) || value !== value.trim()) {
    return false;
  }

  if (
    value.startsWith("/") ||
    value.includes("\\") ||
    value.includes("://") ||
    value.includes("%") ||
    value.includes("?") ||
    value.includes("#") ||
    /[\u0000-\u001f\u007f]/.test(value)
  ) {
    return false;
  }

  const segments = value.split("/");
  if (
    segments.some(
      (segment) =>
        segment.length === 0 ||
        segment === "." ||
        segment === "..",
    )
  ) {
    return false;
  }

  return value.startsWith(assetRoot);
};

const nonEmptyStringArray = (value: unknown): value is readonly string[] =>
  Array.isArray(value) &&
  value.length > 0 &&
  value.every(isNonEmptyString);

interface PondVisualAssetProvenanceBinding {
  readonly sourceReference: string;
  readonly creatorOrOwner: string;
  readonly attribution: string;
  readonly licenseIdentifier: string;
  readonly licenseEvidenceReferences: readonly string[];
}

const sameStringArray = (
  left: readonly string[],
  right: readonly string[],
): boolean =>
  left.length === right.length &&
  left.every((value, index) => value === right[index]);

const readCandidateProvenance = (
  value: unknown,
  reasons: PondVisualAssetAdmissionRefusalReason[],
): PondVisualAssetProvenanceBinding | null => {
  if (!isRecord(value)) {
    addReason(reasons, "missing_evidence");
    return null;
  }

  if (
    !isNonEmptyString(value.sourceReference) ||
    !isNonEmptyString(value.creatorOrOwner) ||
    !isNonEmptyString(value.attribution) ||
    !isRecord(value.license)
  ) {
    addReason(reasons, "missing_evidence");
    return null;
  }

  const license = value.license;
  if (
    license.status !== "verified" ||
    !isNonEmptyString(license.identifier) ||
    license.identifier.trim().toLowerCase() === "unknown" ||
    license.identifier.trim().toLowerCase() === "none"
  ) {
    addReason(reasons, "unknown_license");
    return null;
  }

  if (!nonEmptyStringArray(license.evidenceReferences)) {
    addReason(reasons, "missing_evidence");
    return null;
  }

  return {
    sourceReference: value.sourceReference,
    creatorOrOwner: value.creatorOrOwner,
    attribution: value.attribution,
    licenseIdentifier: license.identifier,
    licenseEvidenceReferences: license.evidenceReferences,
  };
};

const readObservedProvenance = (
  value: unknown,
  reasons: PondVisualAssetAdmissionRefusalReason[],
): PondVisualAssetProvenanceBinding | null => {
  if (!isRecord(value)) {
    addReason(reasons, "missing_evidence");
    return null;
  }

  if (
    !isNonEmptyString(value.sourceReference) ||
    !isNonEmptyString(value.creatorOrOwner) ||
    !isNonEmptyString(value.attribution) ||
    !isRecord(value.license)
  ) {
    addReason(reasons, "missing_evidence");
    return null;
  }

  const license = value.license;
  if (
    license.verificationPosture !== "independently_verified" ||
    !isNonEmptyString(license.identifier) ||
    license.identifier.trim().toLowerCase() === "unknown" ||
    license.identifier.trim().toLowerCase() === "none"
  ) {
    addReason(reasons, "unknown_license");
    return null;
  }

  if (!nonEmptyStringArray(license.evidenceReferences)) {
    addReason(reasons, "missing_evidence");
    return null;
  }

  return {
    sourceReference: value.sourceReference,
    creatorOrOwner: value.creatorOrOwner,
    attribution: value.attribution,
    licenseIdentifier: license.identifier,
    licenseEvidenceReferences: license.evidenceReferences,
  };
};

const sameProvenanceBinding = (
  candidate: PondVisualAssetProvenanceBinding,
  observed: PondVisualAssetProvenanceBinding,
): boolean =>
  candidate.sourceReference === observed.sourceReference &&
  candidate.creatorOrOwner === observed.creatorOrOwner &&
  candidate.attribution === observed.attribution &&
  candidate.licenseIdentifier === observed.licenseIdentifier &&
  sameStringArray(
    candidate.licenseEvidenceReferences,
    observed.licenseEvidenceReferences,
  );

const readPresentationRole = (
  value: unknown,
): PondVisualAssetPresentationRole | null =>
  value === "guide_model" ||
  value === "guide_texture" ||
  value === "world_model" ||
  value === "world_texture" ||
  value === "environment_texture"
    ? value
    : null;

const readAssetKind = (value: unknown): PondVisualAssetKind | null =>
  value === "raster" || value === "texture" || value === "model"
    ? value
    : null;

const presentationRoleMatchesKind = (
  role: PondVisualAssetPresentationRole,
  kind: PondVisualAssetKind,
): boolean => {
  if (role === "guide_model" || role === "world_model") {
    return kind === "model";
  }

  return kind === "raster" || kind === "texture";
};

const admissionRefusal = (
  repositoryPath: string | null,
  reasons: readonly PondVisualAssetAdmissionRefusalReason[],
): PondVisualAssetAdmissionEvaluation => ({
  contractVersion: "pond-visual-asset-admission-b2-p4b-p4",
  outcome: "refused",
  repositoryPath,
  reasons,
  posture: "fail_closed_not_admitted",
  authority: "none",
});

export const evaluatePondVisualAssetAdmission = (
  candidateInput: unknown,
  observedInput: unknown,
): PondVisualAssetAdmissionEvaluation => {
  const reasons: PondVisualAssetAdmissionRefusalReason[] = [];

  if (
    !isRecord(candidateInput) ||
    !isRecord(observedInput)
  ) {
    return admissionRefusal(null, ["invalid_record"]);
  }

  const candidate = candidateInput;
  const observed = observedInput;
  const policy = POND_VISUAL_ASSET_ADMISSION_POLICY_P4B_P4;
  const imagePolicy = policy.image;
  const modelPolicy = policy.model;

  const repositoryPath = isNonEmptyString(candidate.repositoryPath)
    ? candidate.repositoryPath
    : null;

  if (
    candidate.contractVersion !==
      "pond-visual-asset-admission-b2-p4b-p4" ||
    candidate.recordState !== "candidate_not_admitted" ||
    candidate.authority !== "none"
  ) {
    addReason(reasons, "invalid_record");
  }

  if (
    !safeRepositoryPath(
      candidate.repositoryPath,
      policy.repositoryAssetRoot,
    )
  ) {
    addReason(reasons, "path_escape_or_outside_asset_root");
  }

  if (
    !isNonEmptyString(observed.repositoryPath) ||
    observed.repositoryPath !== candidate.repositoryPath
  ) {
    addReason(reasons, "metadata_mismatch");
  }

  const candidateProvenance = readCandidateProvenance(
    candidate.provenance,
    reasons,
  );
  const observedProvenance = readObservedProvenance(
    observed.provenance,
    reasons,
  );

  if (
    candidateProvenance !== null &&
    observedProvenance !== null &&
    !sameProvenanceBinding(candidateProvenance, observedProvenance)
  ) {
    addReason(reasons, "provenance_mismatch");
  }

  if (
    !isRecord(candidate.digest) ||
    candidate.digest.algorithm !== "sha256" ||
    !isSha256(candidate.digest.value) ||
    !isSha256(observed.sha256)
  ) {
    addReason(reasons, "invalid_record");
  } else if (candidate.digest.value !== observed.sha256) {
    addReason(reasons, "hash_mismatch");
  }

  if (
    !isPositiveInteger(candidate.byteSize) ||
    !isPositiveInteger(observed.byteSize)
  ) {
    addReason(reasons, "invalid_record");
  } else if (candidate.byteSize !== observed.byteSize) {
    addReason(reasons, "size_mismatch");
  }

  if (
    isPositiveInteger(candidate.byteSize) &&
    candidate.byteSize > policy.maxBytes
  ) {
    addReason(reasons, "budget_violation");
  }

  const assetKind = readAssetKind(candidate.kind);
  if (assetKind === null) {
    addReason(reasons, "unsupported_kind");
  }

  const presentationRole = readPresentationRole(
    candidate.presentationRole,
  );
  if (presentationRole === null) {
    addReason(reasons, "invalid_presentation_role");
  } else if (
    assetKind !== null &&
    !presentationRoleMatchesKind(presentationRole, assetKind)
  ) {
    addReason(reasons, "role_kind_mismatch");
  }

  if (!isRecord(candidate.metadata)) {
    addReason(reasons, "invalid_record");
  } else if (
    candidate.kind === "raster" ||
    candidate.kind === "texture"
  ) {
    const metadata = candidate.metadata;

    if (
      metadata.kind !== candidate.kind ||
      observed.kind !== candidate.kind
    ) {
      addReason(reasons, "metadata_mismatch");
    }

    const format =
      metadata.format === "png" ||
      metadata.format === "jpeg" ||
      metadata.format === "webp" ||
      metadata.format === "ktx2" ||
      metadata.format === "hdr" ||
      metadata.format === "exr"
        ? metadata.format
        : null;

    if (format === null) {
      addReason(reasons, "unsupported_format");
    } else {
      const expectedExtension = imageExtensions[format];
      const pathLower =
        typeof candidate.repositoryPath === "string"
          ? candidate.repositoryPath.toLowerCase()
          : "";

      const jpegPathMatches =
        format === "jpeg" &&
        (pathLower.endsWith(".jpg") || pathLower.endsWith(".jpeg"));

      if (
        !jpegPathMatches &&
        !pathLower.endsWith(expectedExtension)
      ) {
        addReason(reasons, "unsupported_format");
      }

      if (
        metadata.mimeType !== imageMimeByFormat[format] ||
        observed.format !== format ||
        observed.mimeType !== imageMimeByFormat[format]
      ) {
        addReason(reasons, "metadata_mismatch");
      }
    }

    if (
      !isPositiveInteger(metadata.width) ||
      !isPositiveInteger(metadata.height) ||
      !isPositiveInteger(observed.width) ||
      !isPositiveInteger(observed.height)
    ) {
      addReason(reasons, "invalid_record");
    } else {
      if (
        metadata.width !== observed.width ||
        metadata.height !== observed.height
      ) {
        addReason(reasons, "metadata_mismatch");
      }

      const maxWidth = imagePolicy.maxWidth;
      const maxHeight = imagePolicy.maxHeight;
      const maxPixels = imagePolicy.maxPixels;

      if (
        !isPositiveInteger(maxWidth) ||
        !isPositiveInteger(maxHeight) ||
        !isPositiveInteger(maxPixels)
      ) {
        addReason(reasons, "invalid_record");
      } else if (
        metadata.width > maxWidth ||
        metadata.height > maxHeight ||
        metadata.width * metadata.height > maxPixels
      ) {
        addReason(reasons, "budget_violation");
      }
    }
  } else if (candidate.kind === "model") {
    const metadata = candidate.metadata;

    if (metadata.kind !== "model" || observed.kind !== "model") {
      addReason(reasons, "metadata_mismatch");
    }

    const format =
      metadata.format === "glb" || metadata.format === "gltf"
        ? metadata.format
        : null;

    if (format === null) {
      addReason(reasons, "unsupported_format");
    } else {
      const pathLower =
        typeof candidate.repositoryPath === "string"
          ? candidate.repositoryPath.toLowerCase()
          : "";
      if (!pathLower.endsWith(modelExtensions[format])) {
        addReason(reasons, "unsupported_format");
      }
      if (observed.format !== format) {
        addReason(reasons, "metadata_mismatch");
      }
    }

    const counters = [
      metadata.vertexCount,
      metadata.triangleCount,
      metadata.materialCount,
      metadata.textureCount,
      observed.vertexCount,
      observed.triangleCount,
      observed.materialCount,
      observed.textureCount,
    ];

    if (!counters.every(isNonNegativeInteger)) {
      addReason(reasons, "invalid_record");
    } else if (
      metadata.vertexCount !== observed.vertexCount ||
      metadata.triangleCount !== observed.triangleCount ||
      metadata.materialCount !== observed.materialCount ||
      metadata.textureCount !== observed.textureCount
    ) {
      addReason(reasons, "metadata_mismatch");
    }

    const allowedLoaderPaths = modelPolicy.allowedLoaderPaths;

    if (
      !isNonEmptyString(metadata.declaredLoaderPath) ||
      !Array.isArray(allowedLoaderPaths) ||
      !allowedLoaderPaths.every(isNonEmptyString)
    ) {
      addReason(reasons, "invalid_record");
    } else if (
      !allowedLoaderPaths.includes(metadata.declaredLoaderPath)
    ) {
      addReason(reasons, "unsupported_loader");
    }

    const maxVertices = modelPolicy.maxVertices;
    const maxTriangles = modelPolicy.maxTriangles;
    const maxMaterials = modelPolicy.maxMaterials;
    const maxTextures = modelPolicy.maxTextures;

    if (
      !isNonNegativeInteger(maxVertices) ||
      !isNonNegativeInteger(maxTriangles) ||
      !isNonNegativeInteger(maxMaterials) ||
      !isNonNegativeInteger(maxTextures)
    ) {
      addReason(reasons, "invalid_record");
    } else if (
      isNonNegativeInteger(metadata.vertexCount) &&
      isNonNegativeInteger(metadata.triangleCount) &&
      isNonNegativeInteger(metadata.materialCount) &&
      isNonNegativeInteger(metadata.textureCount) &&
      (
        metadata.vertexCount > maxVertices ||
        metadata.triangleCount > maxTriangles ||
        metadata.materialCount > maxMaterials ||
        metadata.textureCount > maxTextures
      )
    ) {
      addReason(reasons, "budget_violation");
    }
  }

  if (reasons.length > 0) {
    return admissionRefusal(repositoryPath, reasons);
  }

  return {
    contractVersion: "pond-visual-asset-admission-b2-p4b-p4",
    outcome: "eligible_for_repository_admission",
    repositoryPath: candidate.repositoryPath as string,
    posture: "evidence_matched_policy_checked_not_runtime_loaded",
    authority: "none",
  };
};

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondVisualAssetAdmissionInvariant_AuthorityNone = Assert<
  Equal<PondVisualAssetAdmissionEvaluation["authority"], "none">
>;

export type PondVisualAssetAdmissionInvariant_CandidateNotAdmitted = Assert<
  Equal<
    PondVisualAssetAdmissionCandidate["recordState"],
    "candidate_not_admitted"
  >
>;
