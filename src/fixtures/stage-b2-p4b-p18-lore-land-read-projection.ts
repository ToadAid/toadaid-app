import type { PondLoreLandReadProjection } from
  "../contracts/pond-lore-land-read-projection.js";

export const stageB2P4BP18LoreLandReadProjection = {
  contractVersion: "pond-lore-land-read-projection-b2-p4b-p18",
  kind: "lore_land_read_projection",
  posture: "fixture_only_not_live_observation",
  source: {
    chain: "base",
    contractAddress: "0x0495601af6f86efb14c9d478ea46b2aa09cb164a",
    collectionName: "Tobyworld Canonical Lore Land Deeds",
    onchainSourcePosture: "future_primary_ownership_evidence_source",
    indexedPresentationSource: {
      provider: "opensea",
      collectionUrl:
        "https://opensea.io/collection/tobyworld-canonical-lore-land-deeds/overview",
      posture: "secondary_indexed_projection_may_lag",
    },
  },
  fixtureCards: [
    {
      tokenId: "715",
      imagePath: "ui/assets/tobyworld/lore-land-715.png",
      imageProvenance: "user_supplied_real_deed_capture",
      metadataState: "not_retrieved",
      ownershipState: "not_evaluated",
      observedOwnerAddress: null,
      authority: "none",
    },
    {
      tokenId: "717",
      imagePath: "ui/assets/tobyworld/lore-land-717.png",
      imageProvenance: "user_supplied_real_deed_capture",
      metadataState: "not_retrieved",
      ownershipState: "not_evaluated",
      observedOwnerAddress: null,
      authority: "none",
    },
    {
      tokenId: "890",
      imagePath: "ui/assets/tobyworld/lore-land-890.png",
      imageProvenance: "user_supplied_real_deed_capture",
      metadataState: "not_retrieved",
      ownershipState: "not_evaluated",
      observedOwnerAddress: null,
      authority: "none",
    },
  ],
  publicAddressInput: {
    localFormatValidation: true,
    networkLookup: false,
    persistence: false,
  },
  wallet: {
    connectionRequired: false,
    connectionAvailable: false,
    signatureRequested: false,
    authenticationPerformed: false,
  },
  relationshipClaims: {
    addressIsPrincipalIdentity: false,
    ownershipEstablishesMembership: false,
    ownershipEstablishesAuthority: false,
  },
  observation: {
    state: "not_performed",
    blockNumber: null,
    observedAt: null,
    freshness: "not_available",
  },
  authority: "none",
} as const satisfies PondLoreLandReadProjection;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;

export type PondStageB2P4BP18Invariant_ThreeFixtureCards = Assert<
  Equal<typeof stageB2P4BP18LoreLandReadProjection.fixtureCards["length"], 3>
>;
export type PondStageB2P4BP18Invariant_NoObservedOwner = Assert<
  Equal<
    typeof stageB2P4BP18LoreLandReadProjection.fixtureCards[number]["observedOwnerAddress"],
    null
  >
>;
export type PondStageB2P4BP18Invariant_ObservationNotPerformed = Assert<
  Equal<
    typeof stageB2P4BP18LoreLandReadProjection.observation.state,
    "not_performed"
  >
>;
