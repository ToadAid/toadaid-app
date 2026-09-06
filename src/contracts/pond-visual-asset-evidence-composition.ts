// Stage B2-P4B-P6 visual-asset evidence composition boundary.
//
// This contract composes already-observed local file facts with separately
// supplied independently verified provenance. It does not observe files,
// verify provenance, admit repository assets, load runtime assets, or create
// authority.

import type {
  PondVisualAssetObservedImageEvidence,
  PondVisualAssetObservedProvenanceEvidence,
} from "./pond-visual-asset-admission.js";

export type PondVisualAssetRequestedImageKind = "raster" | "texture";

export interface PondLocalVisualAssetFileFactsP4BP5 {
  readonly contractVersion: "pond-local-visual-asset-observer-b2-p4b-p5";
  readonly outcome: "observed_file_facts";
  readonly repositoryPath: string;
  readonly sha256: string;
  readonly byteSize: number;
  readonly format: "png";
  readonly mimeType: "image/png";
  readonly width: number;
  readonly height: number;
  readonly posture: "stable_local_file_facts_observed";
  readonly provenancePosture: "not_observed_by_this_layer";
  readonly admissionPosture: "not_admitted";
  readonly authority: "none";
}

export type PondVisualAssetEvidenceCompositionRefusalReason =
  | "invalid_file_facts"
  | "file_facts_posture_mismatch"
  | "invalid_provenance"
  | "provenance_not_independently_verified"
  | "invalid_requested_kind";

export type PondVisualAssetEvidenceComposition =
  | {
      readonly contractVersion:
        "pond-visual-asset-evidence-composition-b2-p4b-p6";
      readonly outcome: "composed_observed_image_evidence";
      readonly evidence: PondVisualAssetObservedImageEvidence;
      readonly posture:
        "stable_file_facts_plus_independently_verified_provenance";
      readonly admissionPosture: "not_admitted";
      readonly runtimeLoadPosture: "not_loaded";
      readonly authority: "none";
    }
  | {
      readonly contractVersion:
        "pond-visual-asset-evidence-composition-b2-p4b-p6";
      readonly outcome: "refused";
      readonly repositoryPath: string | null;
      readonly reasons:
        readonly PondVisualAssetEvidenceCompositionRefusalReason[];
      readonly posture: "fail_closed_not_composed";
      readonly admissionPosture: "not_admitted";
      readonly runtimeLoadPosture: "not_loaded";
      readonly authority: "none";
    };

type JsonRecord = Record<string, unknown>;

const isRecord = (value: unknown): value is JsonRecord =>
  typeof value === "object" &&
  value !== null &&
  !Array.isArray(value);

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" &&
  value.trim().length > 0 &&
  value === value.trim();

const isPositiveInteger = (value: unknown): value is number =>
  typeof value === "number" &&
  Number.isSafeInteger(value) &&
  value > 0;

const isSha256 = (value: unknown): value is string =>
  typeof value === "string" &&
  /^[0-9a-f]{64}$/.test(value);

const nonEmptyStringArray = (
  value: unknown,
): value is readonly string[] =>
  Array.isArray(value) &&
  value.length > 0 &&
  value.every(isNonEmptyString);

const refusal = (
  repositoryPath: string | null,
  reason: PondVisualAssetEvidenceCompositionRefusalReason,
): PondVisualAssetEvidenceComposition => ({
  contractVersion:
    "pond-visual-asset-evidence-composition-b2-p4b-p6",
  outcome: "refused",
  repositoryPath,
  reasons: [reason],
  posture: "fail_closed_not_composed",
  admissionPosture: "not_admitted",
  runtimeLoadPosture: "not_loaded",
  authority: "none",
});

const readRepositoryPath = (
  value: unknown,
): string | null =>
  isRecord(value) && isNonEmptyString(value.repositoryPath)
    ? value.repositoryPath
    : null;

const readFileFacts = (
  input: unknown,
):
  | { readonly facts: PondLocalVisualAssetFileFactsP4BP5 }
  | {
      readonly reason:
        | "invalid_file_facts"
        | "file_facts_posture_mismatch";
    } => {
  if (!isRecord(input)) {
    return { reason: "invalid_file_facts" };
  }

  if (
    input.contractVersion !==
      "pond-local-visual-asset-observer-b2-p4b-p5" ||
    input.outcome !== "observed_file_facts" ||
    !isNonEmptyString(input.repositoryPath) ||
    !isSha256(input.sha256) ||
    !isPositiveInteger(input.byteSize) ||
    input.format !== "png" ||
    input.mimeType !== "image/png" ||
    !isPositiveInteger(input.width) ||
    !isPositiveInteger(input.height)
  ) {
    return { reason: "invalid_file_facts" };
  }

  if (
    input.posture !== "stable_local_file_facts_observed" ||
    input.provenancePosture !== "not_observed_by_this_layer" ||
    input.admissionPosture !== "not_admitted" ||
    input.authority !== "none"
  ) {
    return { reason: "file_facts_posture_mismatch" };
  }

  return {
    facts: input as unknown as PondLocalVisualAssetFileFactsP4BP5,
  };
};

const readProvenance = (
  input: unknown,
):
  | {
      readonly provenance:
        PondVisualAssetObservedProvenanceEvidence;
    }
  | {
      readonly reason:
        | "invalid_provenance"
        | "provenance_not_independently_verified";
    } => {
  if (!isRecord(input)) {
    return { reason: "invalid_provenance" };
  }

  if (
    input.verificationPosture !== "independently_verified"
  ) {
    return {
      reason: "provenance_not_independently_verified",
    };
  }

  if (
    !isNonEmptyString(input.sourceReference) ||
    !isNonEmptyString(input.creatorOrOwner) ||
    !isNonEmptyString(input.attribution) ||
    !isRecord(input.license)
  ) {
    return { reason: "invalid_provenance" };
  }

  const license = input.license;
  if (
    license.verificationPosture !== "independently_verified"
  ) {
    return {
      reason: "provenance_not_independently_verified",
    };
  }

  if (
    !isNonEmptyString(license.identifier) ||
    !nonEmptyStringArray(license.evidenceReferences)
  ) {
    return { reason: "invalid_provenance" };
  }

  return {
    provenance: {
      sourceReference: input.sourceReference,
      creatorOrOwner: input.creatorOrOwner,
      attribution: input.attribution,
      license: {
        verificationPosture: "independently_verified",
        identifier: license.identifier,
        evidenceReferences: [...license.evidenceReferences],
      },
    },
  };
};

export const composePondVisualAssetObservedImageEvidence = ({
  fileFacts,
  provenance,
  requestedKind,
}: {
  readonly fileFacts: unknown;
  readonly provenance: unknown;
  readonly requestedKind: unknown;
}): PondVisualAssetEvidenceComposition => {
  const repositoryPath = readRepositoryPath(fileFacts);

  const readFacts = readFileFacts(fileFacts);
  if ("reason" in readFacts) {
    return refusal(repositoryPath, readFacts.reason);
  }

  if (
    requestedKind !== "raster" &&
    requestedKind !== "texture"
  ) {
    return refusal(
      readFacts.facts.repositoryPath,
      "invalid_requested_kind",
    );
  }

  const readObservedProvenance = readProvenance(provenance);
  if ("reason" in readObservedProvenance) {
    return refusal(
      readFacts.facts.repositoryPath,
      readObservedProvenance.reason,
    );
  }

  return {
    contractVersion:
      "pond-visual-asset-evidence-composition-b2-p4b-p6",
    outcome: "composed_observed_image_evidence",
    evidence: {
      kind: requestedKind,
      repositoryPath: readFacts.facts.repositoryPath,
      sha256: readFacts.facts.sha256,
      byteSize: readFacts.facts.byteSize,
      provenance: readObservedProvenance.provenance,
      format: readFacts.facts.format,
      mimeType: readFacts.facts.mimeType,
      width: readFacts.facts.width,
      height: readFacts.facts.height,
    },
    posture:
      "stable_file_facts_plus_independently_verified_provenance",
    admissionPosture: "not_admitted",
    runtimeLoadPosture: "not_loaded",
    authority: "none",
  };
};
