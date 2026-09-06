// Stage B2-P4B-P6 deterministic evidence-composition proof.
//
// Synthetic records only. No real visual asset is imported, admitted, loaded,
// rendered, fetched, or granted authority.

import {
  evaluatePondVisualAssetAdmission,
  type PondVisualAssetAdmissionCandidate,
  type PondVisualAssetAdmissionEvaluation,
  type PondVisualAssetAdmissionRefusalReason,
} from "../contracts/pond-visual-asset-admission.js";
import {
  composePondVisualAssetObservedImageEvidence,
  type PondLocalVisualAssetFileFactsP4BP5,
  type PondVisualAssetEvidenceComposition,
  type PondVisualAssetEvidenceCompositionRefusalReason,
} from "../contracts/pond-visual-asset-evidence-composition.js";

const syntheticSha =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

const syntheticFileFacts = {
  contractVersion: "pond-local-visual-asset-observer-b2-p4b-p5",
  outcome: "observed_file_facts",
  repositoryPath: "ui/assets/synthetic/guide-reference.png",
  sha256: syntheticSha,
  byteSize: 512_000,
  format: "png",
  mimeType: "image/png",
  width: 1024,
  height: 1024,
  posture: "stable_local_file_facts_observed",
  provenancePosture: "not_observed_by_this_layer",
  admissionPosture: "not_admitted",
  authority: "none",
} as const satisfies PondLocalVisualAssetFileFactsP4BP5;

const syntheticIndependentProvenance = {
  verificationPosture: "independently_verified",
  sourceReference: "fixture:synthetic-source",
  creatorOrOwner: "fixture:synthetic-creator",
  attribution: "Synthetic fixture only",
  license: {
    verificationPosture: "independently_verified",
    identifier: "Apache-2.0",
    evidenceReferences: ["fixture:license-evidence"],
  },
} as const;

const syntheticCandidate = {
  contractVersion: "pond-visual-asset-admission-b2-p4b-p4",
  recordState: "candidate_not_admitted",
  repositoryPath: syntheticFileFacts.repositoryPath,
  kind: "raster",
  presentationRole: "guide_texture",
  provenance: {
    sourceReference: syntheticIndependentProvenance.sourceReference,
    creatorOrOwner: syntheticIndependentProvenance.creatorOrOwner,
    attribution: syntheticIndependentProvenance.attribution,
    license: {
      status: "verified",
      identifier:
        syntheticIndependentProvenance.license.identifier,
      evidenceReferences:
        syntheticIndependentProvenance.license.evidenceReferences,
    },
  },
  digest: {
    algorithm: "sha256",
    value: syntheticFileFacts.sha256,
  },
  byteSize: syntheticFileFacts.byteSize,
  metadata: {
    kind: "raster",
    format: syntheticFileFacts.format,
    mimeType: syntheticFileFacts.mimeType,
    width: syntheticFileFacts.width,
    height: syntheticFileFacts.height,
  },
  authority: "none",
} as const satisfies PondVisualAssetAdmissionCandidate;

const requireCompositionRefusal = (
  label: string,
  result: PondVisualAssetEvidenceComposition,
  reason: PondVisualAssetEvidenceCompositionRefusalReason,
): void => {
  if (
    result.outcome !== "refused" ||
    !result.reasons.includes(reason) ||
    result.admissionPosture !== "not_admitted" ||
    result.runtimeLoadPosture !== "not_loaded" ||
    result.authority !== "none"
  ) {
    throw new Error(
      `${label}: expected composition refusal ${reason}`,
    );
  }
};

const requireGateRefusal = (
  label: string,
  evaluation: PondVisualAssetAdmissionEvaluation,
  reason: PondVisualAssetAdmissionRefusalReason,
): void => {
  if (
    evaluation.outcome !== "refused" ||
    !evaluation.reasons.includes(reason) ||
    evaluation.posture !== "fail_closed_not_admitted" ||
    evaluation.authority !== "none"
  ) {
    throw new Error(
      `${label}: expected gate refusal ${reason}`,
    );
  }
};

const compose = ({
  fileFacts = syntheticFileFacts,
  provenance = syntheticIndependentProvenance,
}: {
  readonly fileFacts?: unknown;
  readonly provenance?: unknown;
} = {}): PondVisualAssetEvidenceComposition =>
  composePondVisualAssetObservedImageEvidence({
    fileFacts,
    provenance,
    requestedKind: "raster",
  });

const evaluateComposition = (
  result: PondVisualAssetEvidenceComposition,
): PondVisualAssetAdmissionEvaluation => {
  if (result.outcome !== "composed_observed_image_evidence") {
    throw new Error(
      "fixture attempted gate evaluation without composed evidence",
    );
  }

  return evaluatePondVisualAssetAdmission(
    syntheticCandidate,
    result.evidence,
  );
};

export const runStageB2P4BP6VisualAssetEvidenceCompositionProof =
  (): void => {
    requireCompositionRefusal(
      "file facts without provenance",
      composePondVisualAssetObservedImageEvidence({
        fileFacts: syntheticFileFacts,
        provenance: undefined,
        requestedKind: "raster",
      }),
      "invalid_provenance",
    );

    requireCompositionRefusal(
      "self asserted provenance",
      compose({
        provenance: {
          ...syntheticIndependentProvenance,
          verificationPosture: "self_asserted",
        },
      }),
      "provenance_not_independently_verified",
    );

    requireCompositionRefusal(
      "file facts already claiming admission",
      compose({
        fileFacts: {
          ...syntheticFileFacts,
          admissionPosture: "admitted",
        },
      }),
      "file_facts_posture_mismatch",
    );

    requireCompositionRefusal(
      "file facts claiming authority",
      compose({
        fileFacts: {
          ...syntheticFileFacts,
          authority: "asset_admin",
        },
      }),
      "file_facts_posture_mismatch",
    );

    const exact = compose();
    if (
      exact.outcome !== "composed_observed_image_evidence" ||
      exact.admissionPosture !== "not_admitted" ||
      exact.runtimeLoadPosture !== "not_loaded" ||
      exact.authority !== "none"
    ) {
      throw new Error(
        "exact composition must remain not admitted, not loaded, authority none",
      );
    }

    const eligible = evaluateComposition(exact);
    if (
      eligible.outcome !== "eligible_for_repository_admission" ||
      eligible.posture !==
        "evidence_matched_policy_checked_not_runtime_loaded" ||
      eligible.authority !== "none"
    ) {
      throw new Error(
        "exact independently verified composition must be gate-eligible only",
      );
    }

    const provenanceMismatch = compose({
      provenance: {
        ...syntheticIndependentProvenance,
        creatorOrOwner: "fixture:different-creator",
      },
    });
    requireGateRefusal(
      "provenance mismatch",
      evaluateComposition(provenanceMismatch),
      "provenance_mismatch",
    );

    const hashMismatch = compose({
      fileFacts: {
        ...syntheticFileFacts,
        sha256:
          "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      },
    });
    requireGateRefusal(
      "hash mismatch",
      evaluateComposition(hashMismatch),
      "hash_mismatch",
    );

    const sizeMismatch = compose({
      fileFacts: {
        ...syntheticFileFacts,
        byteSize: syntheticFileFacts.byteSize + 1,
      },
    });
    requireGateRefusal(
      "size mismatch",
      evaluateComposition(sizeMismatch),
      "size_mismatch",
    );

    const metadataMismatch = compose({
      fileFacts: {
        ...syntheticFileFacts,
        width: syntheticFileFacts.width + 1,
      },
    });
    requireGateRefusal(
      "metadata mismatch",
      evaluateComposition(metadataMismatch),
      "metadata_mismatch",
    );

    const invalidKind =
      composePondVisualAssetObservedImageEvidence({
        fileFacts: syntheticFileFacts,
        provenance: syntheticIndependentProvenance,
        requestedKind: "model",
      });
    requireCompositionRefusal(
      "invalid image kind",
      invalidKind,
      "invalid_requested_kind",
    );
  };

runStageB2P4BP6VisualAssetEvidenceCompositionProof();

export const stageB2P4BP6ProofPosture = {
  syntheticOnly: true,
  actualAssetsImported: 0,
  actualAssetsAdmitted: 0,
  runtimeAssetsLoaded: 0,
  networkFetches: 0,
  provenanceDiscoveryOrVerification: 0,
  authority: "none",
} as const;
