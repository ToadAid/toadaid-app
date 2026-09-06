# Stage B2-P4B-P4 — Visual asset admission gate

## Binding

Parent commit: `a62cc227c03f98239996a76d1a9f90e93d2c3a94`

Parent tree: `ed17d00a4dd5785b3c6465a3543f9759109ad55b`

Feature branch: `feat/stage-b2-p4b-p4-visual-asset-admission-gate`

Final-goal visual reference:

`/home/tommy/Downloads/toadaid-pond-p4b-final-goal-reference.png`

SHA-256: `8aa49f1206ab294f770c5761a752d89e5813e9a2c12b01e585709ebebac111ef`

The final-goal PNG remains **visual intent only**. It is not an admitted runtime
asset and is not copied into this cut.

## Purpose

P4B-P4 creates the fail-closed evidence gate that must exist before a binary
model, raster image, texture, or environment asset may enter the Pond runtime.

This first cut admits **zero actual visual assets**.

The gate is a pure evaluator. It performs no filesystem mutation, no network
fetch, no CDN access, no localhost serving, and no runtime loading.

## Candidate record

An admission candidate binds:

- exact repository-relative path;
- asset kind and intended presentation role;
- provenance/source reference;
- creator or owner attribution;
- attribution text;
- verified license identifier plus evidence references;
- SHA-256 digest;
- exact byte size;
- kind-specific metadata;
- explicit `authority: none`.

The record state is always `candidate_not_admitted`. A record cannot declare
itself admitted.

## Observed evidence

Admission evaluation compares the candidate to separately supplied observed
evidence.

All observed evidence also binds independently verified provenance:

- source reference;
- creator or owner;
- attribution;
- independently verified license identifier;
- independently verified license evidence references.

Raster/texture evidence additionally binds:

- path;
- SHA-256;
- byte size;
- format and MIME type;
- width and height.

Model evidence additionally binds:

- path;
- SHA-256;
- byte size;
- GLB/GLTF format;
- vertex and triangle counts;
- material and texture counts.

Candidate provenance must exactly match the separately observed provenance
binding. Candidate-declared `verified` status is insufficient by itself.

The evaluator does not fabricate or infer missing observations. The caller is
responsible for supplying the independently established observed evidence; the
pure evaluator checks that the candidate matches it.

## Performance policy

The P4B-P4 contract owns one exact reviewed policy. The evaluator does not
accept a caller-supplied policy object.

That canonical policy binds:

- byte size;
- image width, height, and pixel count;
- model vertices, triangles, materials, and textures;
- explicitly admitted model loader paths.

Neither a candidate nor an evaluator caller can raise those ceilings or add
loader paths. The canonical policy is also deeply frozen at JavaScript runtime:
the top-level policy, image policy, model policy, and loader allowlist are all
`Object.freeze(...)` protected.

The canonical P4B-P4 policy intentionally admits **no model loader paths**.
Therefore even a synthetic model within geometry budgets is refused until a
separate reviewed policy-change / loader-admission cut changes the contract.

## Fail-closed outcomes

The evaluator refuses on:

- structurally invalid records;
- missing provenance/license evidence;
- unknown or unverified license;
- candidate/observed provenance mismatch;
- missing or unsupported presentation role;
- presentation-role / asset-kind mismatch;
- path escape or path outside `ui/assets/`;
- URL-semantic path characters (`%`, `?`, `#`) and control characters;
- unsupported kind or format;
- SHA-256 mismatch;
- byte-size mismatch;
- metadata mismatch;
- performance-budget violation;
- model loader not explicitly admitted.

Successful evaluation means only:

`eligible_for_repository_admission`

It does **not** mean the asset is loaded, active, canonical world truth, or
authority.

## Deterministic fixture proof

The synthetic fixture proves:

1. the fixture references the contract-owned canonical P4B-P4 policy rather than defining a caller-controlled security policy;
2. the top-level policy, image policy, model policy, and loader allowlist are runtime-frozen;
3. matching synthetic raster metadata plus independently observed provenance is eligible;
4. missing provenance/license evidence refuses;
5. unknown license refuses;
6. path escape refuses;
7. missing presentation role refuses;
8. presentation-role / asset-kind mismatch refuses;
9. percent-encoded dot-segment path refuses;
10. query-semantic path refuses;
11. unsupported kind refuses;
12. hash mismatch refuses;
13. size mismatch refuses;
14. metadata mismatch refuses;
15. byte budget violation refuses;
16. candidate-self-asserted verified license/provenance mismatch refuses;
17. missing independently observed provenance refuses;
18. a synthetic GLB is refused because no model loader is yet admitted.

The fixture imports no asset file and performs no network access.

## Authority ceiling

Activation: NOT_INCLUDED.

Actual asset admission: NOT_INCLUDED.

Runtime asset loading: NOT_INCLUDED.

Live Tobyworld state: NOT_INCLUDED.

Wallet/signing, tools, agent invocation, approval recording, execution, and
authority remain NOT_INCLUDED.
