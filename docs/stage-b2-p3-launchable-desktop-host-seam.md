# Stage B2-P3 — Launchable Pond desktop host seam

## Binding and scope

This bounded continuation is based on `ToadAid/toadaid-app` parent
`c480423ac65783f3fe8d1e877d880c23843b8b4b`, tree
`0ee86edf79541354c39d2d44fde96081bb137401`. Remote truth was checked while
preserving the authorized dirty feature worktree; the branch was not switched,
pulled, rebased, reset, stashed, or cleaned.

The canonical architecture basis is `ToadAid/toadaid-architecture` main
`bc7a971dfb243f0aa4417da6cef85cc56204f783`, tree
`648029785b4dbe4b58d914ea19cbae7296ec6d24`.

This cut uses Node 24.15.0, npm 11.16.0, rustc/cargo 1.97.1, Tauri CLI 2.11.4,
Rust `tauri` 2.11.5, and `tauri-build` 2.6.3. The exact Tauri CLI remains a
development dependency for `desktop:info` and later packaging investigation.

## Host boundary

The Tauri host bundles the existing local `../ui` asset root and opens
`pond-desktop.html`. The B2-P2 HTML and CSS remain byte-identical to the parent:

- `ui/pond-desktop.html` SHA-256:
  `e7b7ec6a55ba976dc1dad76d61c8a21ace9d51a69e7875d6f8f5d3e88b360891`
- `ui/pond-desktop.css` SHA-256:
  `0dfda4a37a026f54fb66cd1401c1ece371380f7289aea6ccaca3d041dc48acc0`

There is no localhost or development server and no remote runtime URL. The host
adds no Tauri plugins, custom commands, Tauri JavaScript API package, live tool,
network, persistence, delivery, approval, execution, wallet, Bridge, provider,
microphone, or agent capability.

The desktop icon is `src-tauri/icons/icon.png`, a deterministic 256×256 RGBA PNG
downscaled with Pillow/Lanczos from the human-selected high-resolution square
artwork `/home/tommy/Downloads/pond-lotus.jpg`. The source SHA-256 is
`9dc75ae58e0d5b0ad2fabb1d928c49b37170730e788f2cf930ac8d8863e50806`; the
derived icon SHA-256 is
`9af673585452423d64aeb0411a62fce15e96aea4c8dc161412f54a9d5232abc3`.
This is a local host-format derivative, not a final cross-platform icon family.

## Evidence chain

1. Structural checks passed before the first launch.
2. The Tauri CLI development route failed once with OS error 24, “Too many open
   files,” before any Pond PID or window. It was not blindly retried.
3. A bounded resource diagnosis did not support ongoing file-descriptor,
   file-table, or inotify exhaustion.
4. The first direct `cargo run` attempt was insufficient because the initial
   native GTK/WebKit/Tauri compilation exceeded its short observation bound;
   it showed no application-level startup error.
5. A dedicated native build then revealed the exact missing
   `src-tauri/icons/icon.png` prerequisite. The prior scope prohibited icons.
6. A later repair authorized only that Lotus icon, after which the dedicated
   native build completed successfully.
7. The first compiled-binary launch inherited Snap Code GTK/GIO/XDG paths and
   failed before app startup through a Snap core20 `libpthread` versus host
   `GLIBC_PRIVATE` mismatch. Normal `ldd` and binary RPATH/RUNPATH inspection
   did not themselves point into Snap.
8. A one-off sanitized child launch removed only allowlisted GTK/GIO/XDG values
   or path entries containing `/snap/`. It preserved the parent environment,
   opened the real `toadaid-pond` process and native X11 “Pond” window, avoided
   the prior linker failure, and left no orphan process.
9. This supports the bounded inherited Snap-path contamination hypothesis. It
   does not establish that Snap, VS Code, or all Snap environments are broken.
10. `scripts/desktop-dev.mjs` applies the same narrow hygiene only on Linux and
    launches the fixed `cargo run --manifest-path src-tauri/Cargo.toml --locked`
    command without a shell. Non-Linux child environments remain unchanged.
11. The final `npm run desktop:dev` proof validates that public operator path.

The sanitized proof logged nonfatal EGL acceleration warnings on this X11 host;
the application process and window remained alive. Those warnings are not
reported as proof of accelerated rendering.

## Platform and governance posture

Tauri is a cross-platform-capable host family, but this cut proves Linux only.
Windows, macOS, Android, and iOS were not tested, and cross-platform packaging
is not claimed. The Linux Snap-path hygiene is not applied on other platforms.

- host != principal
- host != membership
- host != admission
- host != capability
- host != authority
- presentation != release
- visual affordance != capability
- voice affordance != recording
- launch-environment hygiene != authority

Activation: INCLUDED — bounded local desktop host launch only.
Live capability activation: NOT_INCLUDED.
