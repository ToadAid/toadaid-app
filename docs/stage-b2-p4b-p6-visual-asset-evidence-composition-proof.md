# Stage B2-P4B-P6 — Visual asset evidence composition proof

## Binding

Parent commit: `8c246310aa143b2ce0b7ddb8740c12746c8272b9`

Parent tree: `2bd9d21c8e233da00b6068814ff4d81871be30c5`

Feature branch:
`feat/stage-b2-p4b-p6-visual-asset-evidence-composition-proof`

## Purpose

P4B-P5 establishes stable local file facts but explicitly does not establish
provenance or admission.

P4B-P4 evaluates a candidate only against evidence that includes separately
independently verified provenance.

P4B-P6 introduces the narrow composition seam between those two boundaries.

It answers only:

> Can exact P4B-P5 image file facts and separately supplied independently
> verified provenance be composed into the observed-image evidence shape
> consumed by the P4B-P4 gate without upgrading admission, runtime loading, or
> authority?

## Composition inputs

The composer accepts three inputs:

1. P4B-P5 image file facts;
2. separately supplied provenance evidence;
3. the requested image classification: `raster` or `texture`.

The P4B-P5 input must retain every lower-layer posture:

- `outcome: observed_file_facts`;
- `posture: stable_local_file_facts_observed`;
- `provenancePosture: not_observed_by_this_layer`;
- `admissionPosture: not_admitted`;
- `authority: none`.

A caller cannot turn P4B-P5 facts into admission by changing one of those
postures. Such input is refused before composition.

## Provenance boundary

P4B-P6 does not discover, research, fetch, or verify provenance.

The provenance input must already state
`verificationPosture: independently_verified` at both the provenance envelope
and license evidence boundary.

Missing, malformed, or self-asserted provenance is refused.

This posture is an input requirement, not a claim that P4B-P6 independently
performed verification.

## Successful composition

Successful composition produces P4B-P4 observed image evidence containing:

- requested image kind;
- exact repository-relative path;
- exact P4B-P5 SHA-256;
- exact P4B-P5 byte size;
- separately supplied independently verified provenance;
- PNG format and MIME type;
- exact P4B-P5 width and height.

The composition result remains:

- `admissionPosture: not_admitted`;
- `runtimeLoadPosture: not_loaded`;
- `authority: none`.

Composition is therefore not admission.

## P4B-P4 gate proof

The deterministic fixture passes successfully composed evidence to the
existing P4B-P4 evaluator.

The proof covers:

1. P4B-P5 file facts without provenance refuse before composition;
2. self-asserted provenance refuses before composition;
3. P4B-P5 facts that already claim admission refuse;
4. P4B-P5 facts that claim authority refuse;
5. exact file facts plus matching independently verified provenance compose;
6. exact composition reaches only
   `eligible_for_repository_admission`;
7. independently verified but mismatched provenance fails closed at P4B-P4;
8. hash mismatch fails closed at P4B-P4;
9. size mismatch fails closed at P4B-P4;
10. image metadata mismatch fails closed at P4B-P4;
11. model classification is refused by the image-only P4B-P6 composer.

`eligible_for_repository_admission` remains the existing P4B-P4 posture:
evidence matched and policy checked, not runtime loaded.

It does not write an asset into the repository and it does not activate a
loader.

## Authority ceiling

Actual visual asset import: NOT_INCLUDED.

Repository asset admission write: NOT_INCLUDED.

Provenance discovery or license research: NOT_INCLUDED.

Independent provenance verification implementation: NOT_INCLUDED.

Runtime asset loading: NOT_INCLUDED.

GLB/GLTF/model evidence composition: NOT_INCLUDED.

Model loader admission: NOT_INCLUDED.

Network/CDN/localhost access: NOT_INCLUDED.

Desktop visual change: NOT_INCLUDED.

Wallet/signing, tools, agent invocation, approval recording, execution, and
authority: NOT_INCLUDED.
