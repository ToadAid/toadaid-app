// Vendor ceremony for the World view's WalletConnect observation pairing.
// Bundles the exactly pinned @walletconnect/ethereum-provider (which carries
// the in-page QR modal) into one committed ESM file under ui/vendor/, copies
// its upstream LICENSE, and writes a deterministic provenance stamp. Mirrors
// scripts/vendor-three.mjs: argument-free, repository-root-relative, and the
// produced artifacts are committed directly — CI does not run this script.
import { build } from "esbuild";
import { copyFile, readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const resolveFromRoot = (path) => new URL(path, `file://${repositoryRoot}/`);

const providerPackage = JSON.parse(
  await readFile(resolveFromRoot("node_modules/@walletconnect/ethereum-provider/package.json"), "utf8")
);

await build({
  // A tiny stdin entry re-exports the provider as both a named and a default
  // export, so the UI module's import shape is guaranteed regardless of what
  // the upstream package's export map looks like.
  stdin: {
    contents:
      'import { EthereumProvider } from "@walletconnect/ethereum-provider";\n' +
      "export { EthereumProvider };\n" +
      "export default EthereumProvider;\n",
    resolveDir: repositoryRoot,
    sourcefile: "walletconnect-entry.js",
  },
  bundle: true,
  format: "esm",
  platform: "browser",
  target: ["es2022"],
  // splitting: false inlines the modal's dynamic imports into the single file.
  splitting: false,
  // The repo treats vendored code as a reviewable committed artifact; the
  // bundle is written once and re-committed only on a deliberate re-vendor.
  minify: false,
  keepNames: true,
  legalComments: "inline",
  charset: "utf8",
  define: { "process.env.NODE_ENV": '"production"' },
  outfile: fileURLToPath(resolveFromRoot("ui/vendor/walletconnect-provider.js")),
  logLevel: "info",
});

// Strip per-line trailing whitespace from the generated bundle: generated
// output can carry it, the committed-range `git diff --check` gate flags it,
// and the gitattributes `whitespace` attribute does not suppress `--check`
// detection on current git. Strip-in-place keeps the artifact deterministic.
const bundlePath = fileURLToPath(resolveFromRoot("ui/vendor/walletconnect-provider.js"));
const bundle = await readFile(bundlePath, "utf8");
const stripped = bundle.replace(/[ \t]+$/gm, "");
if (stripped !== bundle) {
  await writeFile(bundlePath, stripped);
}

await copyFile(
  resolveFromRoot("node_modules/@walletconnect/ethereum-provider/LICENSE.md"),
  resolveFromRoot("ui/vendor/walletconnect-LICENSE.txt")
);

// Provenance stamp: versions read from the installed packages, never from
// literals here, and no timestamp, so identical inputs produce identical bytes.
const transitive = {};
for (const name of Object.keys(providerPackage.dependencies || {})) {
  try {
    const pkg = JSON.parse(await readFile(resolveFromRoot(`node_modules/${name}/package.json`), "utf8"));
    transitive[name] = pkg.version;
  } catch {
    transitive[name] = "unresolved";
  }
}
const esbuildPackage = JSON.parse(
  await readFile(resolveFromRoot("node_modules/esbuild/package.json"), "utf8")
);
const provenance = {
  source: providerPackage.name,
  version: providerPackage.version,
  license: providerPackage.license,
  transitive,
  bundler: { name: "esbuild", version: esbuildPackage.version },
  build: { format: "esm", platform: "browser", target: "es2022", minify: false, splitting: false },
  methodsAllowlist: ["eth_accounts", "eth_requestAccounts", "eth_chainId"],
  note:
    "Pairing-time methods enforcement, not this bundle, is the read-only guarantee; " +
    "the bundle may contain unrelated signing-method names from shared upstream code.",
};
await mkdir(dirname(fileURLToPath(resolveFromRoot("ui/vendor/walletconnect-provenance.json"))), { recursive: true });
await writeFile(
  resolveFromRoot("ui/vendor/walletconnect-provenance.json"),
  JSON.stringify(provenance, null, 2) + "\n"
);