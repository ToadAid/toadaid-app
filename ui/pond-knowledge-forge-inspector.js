export const KNOWLEDGE_FORGE_P5D_INSPECTOR_FIXTURE = Object.freeze({
  schemaVersion: "0.1",
  surfaceId: "knowledge-forge-p5d-evidence-inspector",
  sourceBinding: Object.freeze({
    forgeRepository: "ToadAid/knowledge-forge",
    forgeCommit: "d4cf038eb188975e9ac4a5d875c15998e366a8ee",
    forgeTree: "60e7b36b61c4ac9617c2ef1df0a787b56e7eef0f",
    pondRepository: "ToadAid/toadaid-app",
    pondCommit: "3117bb66c7ab88f6e1abcac6e0101ff07fe68506",
    pondTree: "12903cb30a0184c3e253752fb945ef88b8b155c5",
    projectionPosture: "fixture_evidence_not_live_registry_truth",
  }),
  posture: Object.freeze({
    authority: "KNOWLEDGE_ONLY",
    executionAuthority: "NONE",
    runtimeConnection: "NOT_INCLUDED",
    mutation: "NONE",
    activation: "NOT_INCLUDED",
    sourceBodiesVisible: false,
    claimBodiesVisible: false,
    exactSupportTextVisible: false,
  }),
  inspections: Object.freeze({
  "skill:fixture:approval-governance": {
    "skillId": "skill:fixture:approval-governance",
    "knowledgeId": "knowledge:fixture:approval-governance",
    "title": "Approval Governance Reference",
    "authority": "KNOWLEDGE_ONLY",
    "executionAuthority": "NONE",
    "sourceBindings": [
      {
        "sourceId": "source:sha256:f07304a474be79f07dd076a4ce626c5d0b5821b05b95f85196d074c5766133b0",
        "mediaType": "text/markdown",
        "exactBytesSha256": "bae2b0f203d54654bee1c4b65cf24fb4589856669c7a636b2e6f68d2705c810a",
        "sectionRefs": [
          "section:fixture:approval:1:1"
        ]
      },
      {
        "sourceId": "source:sha256:79d771510eb473ebc7678d622e92529b5d014d9a70ae49e9f8648ba5ecb2e16e",
        "mediaType": "application/pdf",
        "exactBytesSha256": "62d6dc14561e86abc7f0fc29cf4e2455bd08bca968dcd7e1051879bbb2cf0352",
        "sectionRefs": [
          "section:fixture:approval:2:1"
        ]
      }
    ],
    "versionLineage": [
      {
        "version": 2,
        "state": "SUPERSEDED",
        "relation": "SUPERSEDED_BY_V3"
      },
      {
        "version": 3,
        "state": "PROMOTED",
        "relation": "CURRENT_REGISTRY_VERSION"
      }
    ],
    "provenance": {
      "compilerProfileId": "compiler-profile:sha256:228daf51a29c68dfd5c2505241ce107dcd47febd470aeef5e2d774a23dd86ee4",
      "compilerAdapter": "fixture.provider-neutral.v1",
      "candidateSha256": "c023a4b0df94312a72ce8f8f7f7b98bd1176ea92034ccda9e6693bc5bce71538",
      "packageReceiptSha256": "14424cec82b6f0582bb989acb7b5a9500b99fc1b68b8ba20a15015be5e4bfbfd",
      "claimIndexSha256": "eacb811c0ca5c663564f8dbfc9f5cf91f28afb0f2bd36ba3c275f0fc370a8685"
    },
    "faithfulness": {
      "state": "VALIDATED",
      "valid": true,
      "judgeId": "fixture.faithfulness.v1",
      "candidateSha256": "c023a4b0df94312a72ce8f8f7f7b98bd1176ea92034ccda9e6693bc5bce71538",
      "unitResults": [
        {
          "unitId": "unit:fixture:approval:1",
          "kind": "REFERENCE",
          "claimSha256": "ad13098d275282cb9bde9a7e649c186b1aa8f087dc83e439b4f37431f5c41f0a",
          "entailment": "SUPPORTED",
          "qualifiersPreserved": true,
          "supportCount": 1,
          "supportSpanSha256": "d1d2d9cb41695397a834152774cf6b09783ce9b70e87d5f67d27bdae1d877187"
        },
        {
          "unitId": "unit:fixture:approval:2",
          "kind": "REFERENCE",
          "claimSha256": "40f39168b40bd9e7e8e810c7f9fb22f65beedf8fcc7ab0e324289628c83be82a",
          "entailment": "SUPPORTED",
          "qualifiersPreserved": true,
          "supportCount": 1,
          "supportSpanSha256": "b51693dbf55ea79d3d44f2fba5199d6b9b11d047e8f5214a1884b32c3e636c83"
        }
      ]
    }
  },
  "skill:fixture:deployment-window": {
    "skillId": "skill:fixture:deployment-window",
    "knowledgeId": "knowledge:fixture:deployment-window",
    "title": "Deployment Window Procedure",
    "authority": "KNOWLEDGE_ONLY",
    "executionAuthority": "NONE",
    "sourceBindings": [
      {
        "sourceId": "source:sha256:c903a1932d2dc435c2a3e130d49a6b1d55c81d090ece9453825b210b6db3ec6d",
        "mediaType": "text/markdown",
        "exactBytesSha256": "2114d8e48c376041b6312c43eabccb2d5abda567de11a7f1e955d1dd5e37a5aa",
        "sectionRefs": [
          "section:fixture:deployment:1:1"
        ]
      }
    ],
    "versionLineage": [
      {
        "version": 1,
        "state": "SUPERSEDED",
        "relation": "SUPERSEDED_BY_V2"
      },
      {
        "version": 2,
        "state": "PROMOTED",
        "relation": "CURRENT_REGISTRY_VERSION"
      }
    ],
    "provenance": {
      "compilerProfileId": "compiler-profile:sha256:812f7f4152e11786668bc2f975612eff0a0d9222acaa6293c3d6b21d2da67841",
      "compilerAdapter": "fixture.provider-neutral.v1",
      "candidateSha256": "2e043bc326ad01280b0263ef7a68a36dd98917fade9bd92d6456cd9d2c1411c2",
      "packageReceiptSha256": "855df08368d6e780e3f6f1cab1456ac8e773af9965b281d5f283b1dc7bd29a76",
      "claimIndexSha256": "2af31d7a510f192f2507d4b8d9c450e43728ab4f4e70de5cf2095187168b2fca"
    },
    "faithfulness": {
      "state": "VALIDATED",
      "valid": true,
      "judgeId": "fixture.faithfulness.v1",
      "candidateSha256": "2e043bc326ad01280b0263ef7a68a36dd98917fade9bd92d6456cd9d2c1411c2",
      "unitResults": [
        {
          "unitId": "unit:fixture:deployment:1",
          "kind": "PROCEDURE",
          "claimSha256": "9c3137fcdfea4c3ae92e9ee602a55525ff12cb9cb179b8032d062e4e486c80a6",
          "entailment": "SUPPORTED",
          "qualifiersPreserved": true,
          "supportCount": 1,
          "supportSpanSha256": "de2d6678aff16f7fccd58668361bc21a2e30074ec6dcb7f83ae814b21e3a38de"
        }
      ]
    }
  },
  "skill:fixture:base-weth9": {
    "skillId": "skill:fixture:base-weth9",
    "knowledgeId": "knowledge:fixture:base-weth9",
    "title": "Base WETH9 Contract Reference",
    "authority": "KNOWLEDGE_ONLY",
    "executionAuthority": "NONE",
    "sourceBindings": [
      {
        "sourceId": "source:sha256:01f47b3f1a95223b84c4c2e129544b4e430b8e9b1f3ae1d39f3fe6c462a078d6",
        "mediaType": "application/json",
        "exactBytesSha256": "897234cf8fba33827a00369628aab9a35124bd36b003389002b6a926c7ff539f",
        "sectionRefs": [
          "section:fixture:weth:1:1"
        ]
      },
      {
        "sourceId": "source:sha256:430598dabc2a6d31e124cbc7c1e195bfbba99ed3390b5547b9e9acd6ccb61006",
        "mediaType": "text/plain",
        "exactBytesSha256": "0350c787d6b38c81bdc2c6278c6e327d6df7c6b867c4063c618f734eed4d3102",
        "sectionRefs": [
          "section:fixture:weth:2:1"
        ]
      },
      {
        "sourceId": "source:sha256:37b98848999967233e2a3202ecb883d4ee11e03c3d9604a20579a55deb600b07",
        "mediaType": "text/markdown",
        "exactBytesSha256": "d47cbcda6daef2ab484e344a92514a25298126ba6245ea868b4f9d7d4ddbc691",
        "sectionRefs": [
          "section:fixture:weth:3:1"
        ]
      }
    ],
    "versionLineage": [
      {
        "version": 1,
        "state": "PROMOTED",
        "relation": "CURRENT_REGISTRY_VERSION"
      }
    ],
    "provenance": {
      "compilerProfileId": "compiler-profile:sha256:6a6a7bb31321be4a50f5c9fa00757e38024f502c008c79d84f0f5aaa7f357010",
      "compilerAdapter": "fixture.provider-neutral.v1",
      "candidateSha256": "7f2513583a3147048781022a038c0970bbf69aac57ee879c1f3f0ce27d3769c5",
      "packageReceiptSha256": "2d555522dbe31dd157cc9a2f3e2b283e48644672509d1abb766542c3fab3dffe",
      "claimIndexSha256": "52d3a765af7dc19c4054a576ceaa58419443ed0dfc1468a9f4f4172aa3a8270f"
    },
    "faithfulness": {
      "state": "VALIDATED",
      "valid": true,
      "judgeId": "fixture.faithfulness.v1",
      "candidateSha256": "7f2513583a3147048781022a038c0970bbf69aac57ee879c1f3f0ce27d3769c5",
      "unitResults": [
        {
          "unitId": "unit:fixture:weth:1",
          "kind": "REFERENCE",
          "claimSha256": "07ee37d2f99e046c00f22849d73f543735c27a3a599f796dac93f9f2b9a9b2a5",
          "entailment": "SUPPORTED",
          "qualifiersPreserved": true,
          "supportCount": 1,
          "supportSpanSha256": "16ec91fb4644d805b650921309bb33f89f0f4f5beeecb8d9904ce8dfa0655420"
        },
        {
          "unitId": "unit:fixture:weth:2",
          "kind": "REFERENCE",
          "claimSha256": "43df53a14c541dfd52e1ca78e7bbcd19bba9ed91ed8c59353037533d2524d857",
          "entailment": "SUPPORTED",
          "qualifiersPreserved": true,
          "supportCount": 1,
          "supportSpanSha256": "e8b4cf4c84fc1b686bac95ebb5d61202618611d61df4b529e14b4c8bd49f42c3"
        }
      ]
    }
  },
  "skill:fixture:incident-example": {
    "skillId": "skill:fixture:incident-example",
    "knowledgeId": "knowledge:fixture:incident-example",
    "title": "Incident-Stopped Reference",
    "authority": "KNOWLEDGE_ONLY",
    "executionAuthority": "NONE",
    "sourceBindings": [
      {
        "sourceId": "source:sha256:a20c51010b375b185701714616f392588ad639e9b740e5063ac953c07e69d3f8",
        "mediaType": "text/markdown",
        "exactBytesSha256": "5ef89300e50b9388885bd07ccf4d3b33fb495ec6d79e4ec2ecad30ca3313d773",
        "sectionRefs": [
          "section:fixture:incident:1:1"
        ]
      }
    ],
    "versionLineage": [
      {
        "version": 3,
        "state": "SUPERSEDED",
        "relation": "SUPERSEDED_BY_V4"
      },
      {
        "version": 4,
        "state": "SUSPENDED",
        "relation": "CURRENT_REGISTRY_VERSION",
        "incidentRef": "incident:fixture:source-review"
      }
    ],
    "provenance": {
      "compilerProfileId": "compiler-profile:sha256:08b4ec54517d2bc0d3c1050f9d1b6990fc46300c8006740a0525fa4138fb99e1",
      "compilerAdapter": "fixture.provider-neutral.v1",
      "candidateSha256": "5122b58a31489da70f1ca7c013a0d34c77c015b93eae042d7587f839a5d5935d",
      "packageReceiptSha256": "176d9393ea9d9ace434e05e5ad351119bfc7513a4b0ae0ecf377d857f20ccac1",
      "claimIndexSha256": "a7db986b9cf7fb2ec1544ef8bf59fa5040d6c27d7be34d0321ff09205144d2e0"
    },
    "faithfulness": {
      "state": "VALIDATED",
      "valid": true,
      "judgeId": "fixture.faithfulness.v1",
      "candidateSha256": "5122b58a31489da70f1ca7c013a0d34c77c015b93eae042d7587f839a5d5935d",
      "unitResults": [
        {
          "unitId": "unit:fixture:incident:1",
          "kind": "REFERENCE",
          "claimSha256": "2646d4acb60b264b13ff914b53f9730d54dcf752f218c43c01fdad255fe195a2",
          "entailment": "SUPPORTED",
          "qualifiersPreserved": true,
          "supportCount": 1,
          "supportSpanSha256": "472b156f5fc00b22af3cd189e15dd65a9ac336ab9a3b759a83154220bf1de9bf"
        }
      ]
    }
  }
}),
});

const text = (documentRef, tag, className, value) => {
  const node = documentRef.createElement(tag);
  if (className) node.className = className;
  node.textContent = String(value);
  return node;
};

const fact = (documentRef, label, value, code = false) => {
  const row = documentRef.createElement("div");
  const dt = text(documentRef, "dt", "", label);
  const dd = documentRef.createElement("dd");
  if (code) dd.append(text(documentRef, "code", "", value));
  else dd.textContent = String(value);
  row.append(dt, dd);
  return row;
};

export const getInspectionForSkill = (
  skillId,
  fixture = KNOWLEDGE_FORGE_P5D_INSPECTOR_FIXTURE,
) => fixture.inspections[skillId] ?? null;

const renderSources = (documentRef, target, inspection) => {
  target.replaceChildren();
  for (const source of inspection.sourceBindings) {
    const card = documentRef.createElement("article");
    card.className = "forge-inspector-record";
    const facts = documentRef.createElement("dl");
    facts.append(
      fact(documentRef, "Source ID", source.sourceId, true),
      fact(documentRef, "Media", source.mediaType),
      fact(documentRef, "Exact bytes", source.exactBytesSha256, true),
      fact(documentRef, "Sections", source.sectionRefs.join(", "), true),
    );
    card.append(facts);
    target.append(card);
  }
};

const renderLineage = (documentRef, target, inspection) => {
  target.replaceChildren();
  for (const version of inspection.versionLineage) {
    const card = documentRef.createElement("article");
    card.className = "forge-inspector-record";
    const facts = documentRef.createElement("dl");
    facts.append(
      fact(documentRef, "Version", `v${version.version}`),
      fact(documentRef, "State", version.state),
      fact(documentRef, "Relation", version.relation),
    );
    if (version.incidentRef) facts.append(fact(documentRef, "Incident", version.incidentRef, true));
    card.append(facts);
    target.append(card);
  }
};

const renderProvenance = (documentRef, target, inspection) => {
  target.replaceChildren();
  const facts = documentRef.createElement("dl");
  facts.append(
    fact(documentRef, "Compiler profile", inspection.provenance.compilerProfileId, true),
    fact(documentRef, "Compiler adapter", inspection.provenance.compilerAdapter),
    fact(documentRef, "Candidate SHA-256", inspection.provenance.candidateSha256, true),
    fact(documentRef, "Package receipt", inspection.provenance.packageReceiptSha256, true),
    fact(documentRef, "Claim index", inspection.provenance.claimIndexSha256, true),
  );
  target.append(facts);
};

const renderFaithfulness = (documentRef, target, inspection) => {
  target.replaceChildren();
  const summary = documentRef.createElement("dl");
  summary.className = "forge-inspector-faith-summary";
  summary.append(
    fact(documentRef, "Validation state", inspection.faithfulness.state),
    fact(documentRef, "Valid", inspection.faithfulness.valid ? "TRUE" : "FALSE"),
    fact(documentRef, "Judge", inspection.faithfulness.judgeId),
    fact(documentRef, "Candidate binding", inspection.faithfulness.candidateSha256, true),
  );
  target.append(summary);

  for (const unit of inspection.faithfulness.unitResults) {
    const card = documentRef.createElement("article");
    card.className = "forge-inspector-record is-faithfulness";
    const facts = documentRef.createElement("dl");
    facts.append(
      fact(documentRef, "Unit", unit.unitId, true),
      fact(documentRef, "Kind", unit.kind),
      fact(documentRef, "Claim digest", unit.claimSha256, true),
      fact(documentRef, "Entailment", unit.entailment),
      fact(documentRef, "Qualifiers preserved", unit.qualifiersPreserved ? "TRUE" : "FALSE"),
      fact(documentRef, "Support count", unit.supportCount),
      fact(documentRef, "Support span hash", unit.supportSpanSha256, true),
    );
    card.append(facts);
    target.append(card);
  }
};

export const renderKnowledgeForgeInspector = (
  skillId,
  documentRef = globalThis.document,
  fixture = KNOWLEDGE_FORGE_P5D_INSPECTOR_FIXTURE,
) => {
  if (!documentRef) return false;
  const root = documentRef.querySelector("[data-forge-inspector]");
  const title = documentRef.querySelector("[data-forge-inspector-title]");
  const identity = documentRef.querySelector("[data-forge-inspector-identity]");
  const sources = documentRef.querySelector("[data-forge-inspector-sources]");
  const versions = documentRef.querySelector("[data-forge-inspector-versions]");
  const provenance = documentRef.querySelector("[data-forge-inspector-provenance]");
  const faithfulness = documentRef.querySelector("[data-forge-inspector-faithfulness]");
  if (!root || !title || !identity || !sources || !versions || !provenance || !faithfulness) return false;

  const inspection = getInspectionForSkill(skillId, fixture);
  if (!inspection) {
    title.textContent = "Inspection unavailable";
    identity.textContent = String(skillId ?? "NO_SKILL_SELECTED");
    sources.replaceChildren();
    versions.replaceChildren();
    provenance.replaceChildren();
    faithfulness.replaceChildren();
    root.dataset.inspectionState = "unavailable";
    return false;
  }

  title.textContent = inspection.title;
  identity.textContent = inspection.skillId;
  renderSources(documentRef, sources, inspection);
  renderLineage(documentRef, versions, inspection);
  renderProvenance(documentRef, provenance, inspection);
  renderFaithfulness(documentRef, faithfulness, inspection);
  root.dataset.selectedSkillId = inspection.skillId;
  root.dataset.inspectionState = "fixture-rendered";
  return true;
};

if (typeof document !== "undefined") {
  document.addEventListener("knowledge-forge-skill-selected", (event) => {
    renderKnowledgeForgeInspector(event.detail?.skillId, document);
  });
  const firstSkillId = Object.keys(KNOWLEDGE_FORGE_P5D_INSPECTOR_FIXTURE.inspections)[0];
  renderKnowledgeForgeInspector(firstSkillId, document);
}
