# Stage B2-P4B-P5 — Local visual asset evidence observer

## Binding

Parent commit: `4200547a158cc44bb7a7d38d203a77fa16fd4d54`

Parent tree: `d92b8b6844162f585a2255ad8cff80bda7c3d659`

Feature branch:
`feat/stage-b2-p4b-p5-local-asset-evidence-observer`

P4B-P5 sits immediately in front of the P4B-P4 visual-asset admission
evaluator. P4B-P4 intentionally does not establish filesystem observations
itself.

## Purpose

This cut adds a local, read-only file-facts observer.

It answers only:

> What stable file bytes and PNG header facts were observed at this exact
> repository-relative path?

It does **not** answer:

- who created or owns the asset;
- whether the license is valid;
- whether provenance is independently verified;
- whether the asset should be admitted;
- whether the asset should be loaded;
- whether the asset represents live or canonical world truth;
- whether any authority exists.

Those are separate boundaries.

## Repository confinement

The observer accepts a repository root and a repository-relative path.

The path must:

- be under `ui/assets/`;
- be relative;
- contain no empty, `.` or `..` segments;
- contain no backslash;
- contain no scheme marker;
- contain no `%`, `?`, or `#` URL-semantic characters;
- contain no ASCII control character.

The canonical `ui/assets/` directory and target must remain inside the
canonical repository root.

The first security-complete observer is Linux/procfs-bound. It requires
`O_NOFOLLOW`, `O_DIRECTORY`, and `/proc/self/fd`; if those primitives are not
available, observation refuses as `host_boundary_unavailable`.

Traversal is descriptor-anchored rather than repeatedly reopening the original
pathname. The canonical repository directory is opened first. Each child
directory is then opened through the pinned parent descriptor at
`/proc/self/fd/<fd>/<segment>` with `O_DIRECTORY | O_NOFOLLOW`. The final file
is opened through the pinned final parent descriptor with `O_NOFOLLOW`.

Each segment is also inspected with `lstat(...)` through the pinned parent and
must match the inode/device identity of the descriptor that was actually
opened. Symlinks are refused. Intermediate components must be directories and
the final component must be a regular file.

## Stable-file observation

The observer binds the opened regular-file descriptor to the exact canonical
target path using `/proc/self/fd/<fd>`. This closes the proven gap in which an
already-checked intermediate directory could otherwise be replaced by a
symlink before a later path-based `open(...)`.

It then:

1. captures the pinned open-handle stat;
2. requires the descriptor's canonical path to equal the exact target path;
3. reads and hashes the full file;
4. captures an intermediate stat;
5. reads and hashes the same open handle a second time from byte zero;
6. captures a final open-handle stat;
7. rechecks the descriptor's canonical path;
8. performs a second descriptor-anchored walk of the exact repository path;
9. requires that second walk to resolve to the same device/inode;
10. requires unchanged file identity, size, mtime, and ctime;
11. requires both passes to have identical SHA-256 and byte count.

A mismatch refuses as `changed_during_observation` or
`file_identity_changed`.

A directory rename/symlink replacement cannot redirect an already pinned
parent descriptor. A path changed during observation also fails the second
descriptor walk or exact canonical-path binding.

This remains a bounded local filesystem proof. It does not claim protection
against a privileged host that can subvert procfs, file descriptors, or the
mount namespace itself.

## First admitted observation format

P4B-P5 observes **PNG file facts only**.

A PNG observation requires:

- `.png` repository path;
- exact eight-byte PNG signature;
- first chunk length `13`;
- first chunk type `IHDR`;
- non-zero big-endian width and height.

This cut does not decode pixels, validate every PNG chunk, or claim that the
image is safe to render. Full decoding/rendering remains outside this cut.

Successful output contains:

- repository-relative path;
- SHA-256;
- exact byte size;
- `format: png`;
- `mimeType: image/png`;
- IHDR width and height;
- `provenancePosture: not_observed_by_this_layer`;
- `admissionPosture: not_admitted`;
- `authority: none`.

These file facts may later be composed with separately and independently
established provenance evidence before the P4B-P4 gate is called.

## Fail-closed refusal taxonomy

The first observer cut refuses on:

- `unsafe_or_outside_asset_root`;
- `symlink_refused`;
- `non_regular_file`;
- `file_identity_changed`;
- `changed_during_observation`;
- `unsupported_format`;
- `malformed_png_header`;
- `unsupported_file_size`;
- `host_boundary_unavailable`;
- `io_failure`.

## Deterministic proof

The observer's self-test creates a temporary synthetic repository under the
operating-system temporary directory. It does not add assets to the real Pond
repository.

The proof covers:

1. valid synthetic PNG file facts;
2. lexical traversal refusal;
3. percent-encoded path refusal;
4. symlink refusal;
5. deterministic intermediate-directory rename/symlink namespace-swap refusal;
6. non-regular-file refusal;
7. malformed PNG-header refusal;
8. unsupported-format refusal;
9. missing-file / I/O refusal;
10. deterministic mutation-during-observation refusal.

The namespace-swap and mutation proofs use private self-test hooks inside the
module. Neither hook is exposed by the public observation function.

## Authority ceiling

Actual visual asset import: NOT_INCLUDED.

Provenance or license verification: NOT_INCLUDED.

P4B-P4 admission composition: NOT_INCLUDED.

Runtime asset loading: NOT_INCLUDED.

GLB/GLTF/model loader admission: NOT_INCLUDED.

Network/CDN/localhost access: NOT_INCLUDED.

Desktop visual change: NOT_INCLUDED.

Wallet/signing, tools, agent invocation, approval recording, execution, and
authority: NOT_INCLUDED.
