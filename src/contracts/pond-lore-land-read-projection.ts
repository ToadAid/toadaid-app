// B2-P4B-P18 Lore Land read-projection vocabulary.
//
// This contract describes a fixture-only public presentation. It performs no
// network request, owner lookup, wallet connection, authentication, storage,
// membership decision, admission decision, grant, approval, or execution.

export type PondLoreLandCanonicalContract =
  "0x0495601af6f86efb14c9d478ea46b2aa09cb164a";

export interface PondLoreLandCollectionSource {
  readonly chain: "base";
  readonly contractAddress: PondLoreLandCanonicalContract;
  readonly collectionName: "Tobyworld Canonical Lore Land Deeds";
  readonly onchainSourcePosture: "future_primary_ownership_evidence_source";
  readonly indexedPresentationSource: {
    readonly provider: "opensea";
    readonly collectionUrl:
      "https://opensea.io/collection/tobyworld-canonical-lore-land-deeds/overview";
    readonly posture: "secondary_indexed_projection_may_lag";
  };
}

export interface PondLoreLandFixtureCard {
  readonly tokenId: string;
  readonly imagePath: string;
  readonly imageProvenance: "user_supplied_real_deed_capture";
  readonly metadataState: "not_retrieved";
  readonly ownershipState: "not_evaluated";
  readonly observedOwnerAddress: null;
  readonly authority: "none";
}

export interface PondLoreLandReadProjection {
  readonly contractVersion: "pond-lore-land-read-projection-b2-p4b-p18";
  readonly kind: "lore_land_read_projection";
  readonly posture: "fixture_only_not_live_observation";
  readonly source: PondLoreLandCollectionSource;
  readonly fixtureCards: readonly PondLoreLandFixtureCard[];
  readonly publicAddressInput: {
    readonly localFormatValidation: true;
    readonly networkLookup: false;
    readonly persistence: false;
  };
  readonly wallet: {
    readonly connectionRequired: false;
    readonly connectionAvailable: false;
    readonly signatureRequested: false;
    readonly authenticationPerformed: false;
  };
  readonly relationshipClaims: {
    readonly addressIsPrincipalIdentity: false;
    readonly ownershipEstablishesMembership: false;
    readonly ownershipEstablishesAuthority: false;
  };
  readonly observation: {
    readonly state: "not_performed";
    readonly blockNumber: null;
    readonly observedAt: null;
    readonly freshness: "not_available";
  };
  readonly authority: "none";
}

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type HasKey<T, K extends PropertyKey> = K extends keyof T ? true : false;

export type PondLoreLandInvariant_NetworkLookupFalse = Assert<
  Equal<PondLoreLandReadProjection["publicAddressInput"]["networkLookup"], false>
>;
export type PondLoreLandInvariant_NoWalletConnection = Assert<
  Equal<PondLoreLandReadProjection["wallet"]["connectionAvailable"], false>
>;
export type PondLoreLandInvariant_AddressIsNotPrincipal = Assert<
  Equal<
    PondLoreLandReadProjection["relationshipClaims"]["addressIsPrincipalIdentity"],
    false
  >
>;
export type PondLoreLandInvariant_OwnershipIsNotMembership = Assert<
  Equal<
    PondLoreLandReadProjection["relationshipClaims"]["ownershipEstablishesMembership"],
    false
  >
>;
export type PondLoreLandInvariant_NoConnectWalletEffect = Assert<
  Equal<HasKey<PondLoreLandReadProjection, "connectWallet">, false>
>;
export type PondLoreLandInvariant_AuthorityNone = Assert<
  Equal<PondLoreLandReadProjection["authority"], "none">
>;
