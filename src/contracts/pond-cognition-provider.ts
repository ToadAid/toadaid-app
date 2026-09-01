// Provider-sovereign cognition foundation contract.
//
// This is a Pond-local fixture policy declaration. It performs no provider
// selection, authentication, inference, routing, fallback, or authority work.

declare const cognitionModelRefBrand: unique symbol;
declare const cognitionHarnessRefBrand: unique symbol;

export type PondCognitionBackendClass =
  | "cloud_provider"
  | "local_runtime"
  | "community_gateway";

export type PondCloudProviderId =
  | "openai"
  | "google"
  | "xai"
  | "anthropic"
  | "deepseek";

export type PondLocalRuntimeId = "ollama";

export type PondCognitionModelRef = string & {
  readonly [cognitionModelRefBrand]: "PondCognitionModelRef";
};

export type PondCognitionHarnessRef = string & {
  readonly [cognitionHarnessRefBrand]: "PondCognitionHarnessRef";
};

export type PondCognitionAccessMechanism =
  | "api_key"
  | "delegated_oauth"
  | "interactive_subscription"
  | "workload_identity"
  | "local_runtime"
  | "community_gateway";

export type PondCredentialCustodyClass =
  | "toadaid_managed"
  | "principal_managed"
  | "delegated"
  | "local_operator"
  | "community_managed";

export type PondCognitionDataBoundaryClass =
  | "external_cloud"
  | "local_operator_controlled"
  | "community_governed";

export type PondCognitionSupportTier =
  | "launch_primary"
  | "launch_primary_alternate"
  | "specialist_direction"
  | "evaluation_candidate"
  | "experimental"
  | "sovereign_local"
  | "future_community";

export interface PondCognitionAccessDeclaration {
  readonly potentialMechanism: PondCognitionAccessMechanism;
  readonly credentialCustody: PondCredentialCustodyClass;
  readonly providerSupportPosture: "not_established_by_fixture";
  readonly materialPosture: "not_included";
}

export interface PondCognitionDataBoundaryDeclaration {
  readonly boundaryClass: PondCognitionDataBoundaryClass;
  readonly verificationPosture: "declared_policy_not_verified_runtime_evidence";
}

export interface PondCognitionFallbackDeclaration {
  readonly posture: "no_silent_fallback";
  readonly providerFailureAuthorizesTransition: false;
  readonly futureTransitionRequiresExplicitApplicablePolicy: true;
  readonly futureTransitionRequiresDataBoundaryCompatibility: true;
}

interface PondCognitionBackendProfileBase {
  readonly contractVersion: "pond-provider-sovereign-cognition-foundation";
  readonly contractStatus: "fixture_policy_declaration_only";
  readonly modelRef: PondCognitionModelRef;
  readonly modelFamilyLabel: string;
  readonly harnessRef: PondCognitionHarnessRef;
  readonly supportTier: PondCognitionSupportTier;
  readonly access: PondCognitionAccessDeclaration;
  readonly dataBoundary: PondCognitionDataBoundaryDeclaration;
  readonly fallback: PondCognitionFallbackDeclaration;
  readonly semanticAuthority: "none";
}

export interface PondCloudCognitionBackendProfile
  extends PondCognitionBackendProfileBase {
  readonly backendClass: "cloud_provider";
  readonly providerId: PondCloudProviderId;
}

export interface PondLocalCognitionBackendProfile
  extends PondCognitionBackendProfileBase {
  readonly backendClass: "local_runtime";
  readonly localRuntimeId: PondLocalRuntimeId;
}

export interface PondCommunityCognitionBackendProfile
  extends PondCognitionBackendProfileBase {
  readonly backendClass: "community_gateway";
  readonly communityGatewayPosture: "future_toadgang_gateway_no_endpoint";
}

export type PondCognitionBackendProfile =
  | PondCloudCognitionBackendProfile
  | PondLocalCognitionBackendProfile
  | PondCommunityCognitionBackendProfile;

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
type Assert<T extends true> = T;
type KeysOfUnion<T> = T extends unknown ? keyof T : never;
type HasAnyKey<T, K extends PropertyKey> = Extract<KeysOfUnion<T>, K> extends never
  ? false
  : true;

export type PondCognitionInvariant_BackendClassesExact = Assert<
  Equal<
    PondCognitionBackendClass,
    "cloud_provider" | "local_runtime" | "community_gateway"
  >
>;
export type PondCognitionInvariant_ProfileBackendClassesExact = Assert<
  Equal<PondCognitionBackendProfile["backendClass"], PondCognitionBackendClass>
>;
export type PondCognitionInvariant_CloudProviderIdsExact = Assert<
  Equal<PondCloudProviderId, "openai" | "google" | "xai" | "anthropic" | "deepseek">
>;
export type PondCognitionInvariant_OllamaLocalOnly = Assert<
  Equal<PondLocalRuntimeId, "ollama">
>;
export type PondCognitionInvariant_OllamaNotCloudProvider = Assert<
  Equal<Extract<PondCloudProviderId, "ollama">, never>
>;
export type PondCognitionInvariant_AccessMechanismsExact = Assert<
  Equal<
    PondCognitionAccessMechanism,
    | "api_key"
    | "delegated_oauth"
    | "interactive_subscription"
    | "workload_identity"
    | "local_runtime"
    | "community_gateway"
  >
>;
export type PondCognitionInvariant_CredentialCustodyExact = Assert<
  Equal<
    PondCredentialCustodyClass,
    | "toadaid_managed"
    | "principal_managed"
    | "delegated"
    | "local_operator"
    | "community_managed"
  >
>;
export type PondCognitionInvariant_DataBoundariesExact = Assert<
  Equal<
    PondCognitionDataBoundaryClass,
    "external_cloud" | "local_operator_controlled" | "community_governed"
  >
>;
export type PondCognitionInvariant_SemanticAuthorityNone = Assert<
  Equal<PondCognitionBackendProfile["semanticAuthority"], "none">
>;

type ForbiddenProviderProfileKeys =
  | "authority"
  | "canExecute"
  | "mayExecute"
  | "canApprove"
  | "mayApprove"
  | "canMutate"
  | "mayMutate"
  | "apiKey"
  | "secret"
  | "token"
  | "password"
  | "refreshToken"
  | "accessToken"
  | "PrincipalId"
  | "PondPrincipalRef"
  | "principalId"
  | "membership"
  | "admission"
  | "grant"
  | "release";

export type PondCognitionInvariant_NoAuthorityIdentityRelationshipOrMaterialKeys = Assert<
  Equal<HasAnyKey<PondCognitionBackendProfile, ForbiddenProviderProfileKeys>, false>
>;
export type PondCognitionInvariant_ProviderAndModelTypesDiffer = Assert<
  Equal<Equal<PondCloudProviderId, PondCognitionModelRef>, false>
>;
export type PondCognitionInvariant_ModelRefIsNotProviderId = Assert<
  Equal<PondCognitionModelRef extends PondCloudProviderId ? true : false, false>
>;
export type PondCognitionInvariant_ProviderIdIsNotModelRef = Assert<
  Equal<PondCloudProviderId extends PondCognitionModelRef ? true : false, false>
>;
