// Render ceremony for the Stage D-P7 live shell local authentication
// surface. Bundles the frozen D-P6 authentication-observation performer
// classifier, the D-P0 receiver-held principal ref, and the D-P2
// declared-maximum-age constant into one committed ESM file under
// ui/generated/, and writes a deterministic provenance stamp. Mirrors
// scripts/render-stage-d-agents-fixture.mjs: argument-free,
// repository-root-relative, the produced artifacts are committed directly —
// CI does not run this script (pass --check to byte-verify the committed
// artifacts against a rebuild).
import { build } from "esbuild";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const checkOnly = process.argv.includes("--check");

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const resolveFromRoot = (path) => new URL(path, `file://${repositoryRoot}/`);

const esbuildPackage = JSON.parse(
  await readFile(resolveFromRoot("node_modules/esbuild/package.json"), "utf8")
);

const buildOptions = {
  // A tiny stdin entry re-exports the frozen contract code the shell
  // wiring module runs in the browser. The .ts sourcefile name lets
  // esbuild resolve the contract chain's `.js` specifiers to their `.ts`
  // sources.
  stdin: {
    contents:
      'import { assessPondLocalPrincipalAuthenticationObservation } from "./src/contracts/pond-local-principal-authentication-observation.js";\n' +
      'import { stageDP0LocalPrincipalRef } from "./src/fixtures/stage-d-p0-agent-presence.js";\n' +
      'import { POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS } from "./src/contracts/pond-agent-presence-observation-intake.js";\n' +
      "export { assessPondLocalPrincipalAuthenticationObservation, stageDP0LocalPrincipalRef, POND_STAGE_DP2_FIXTURE_MAXIMUM_AGE_MS };\n",
    resolveDir: repositoryRoot,
    sourcefile: "pond-stage-d-local-authentication-entry.ts",
  },
  bundle: true,
  format: "esm",
  platform: "browser",
  target: ["es2022"],
  splitting: false,
  minify: false,
  keepNames: true,
  legalComments: "none",
  charset: "utf8",
  logLevel: "info",
};

// Strip per-line trailing whitespace from the generated bundle: generated
// output can carry it, the committed-range `git diff --check` gate flags it,
// and the gitattributes `whitespace` attribute does not suppress `--check`
// detection on current git. Strip-in-place keeps the artifact deterministic.
const stripTrailingWhitespace = (text) => {
  const stripped = text.replace(/[ \t]+$/gm, "");
  return stripped.endsWith("\n") ? stripped : stripped + "\n";
};

let bundleText;
if (checkOnly) {
  const result = await build({ ...buildOptions, write: false });
  bundleText = stripTrailingWhitespace(result.outputFiles[0].text);
} else {
  const outfile = fileURLToPath(
    resolveFromRoot("ui/generated/pond-stage-d-local-authentication.js")
  );
  await build({ ...buildOptions, outfile });
  const bundle = await readFile(outfile, "utf8");
  bundleText = stripTrailingWhitespace(bundle);
  await writeFile(outfile, bundleText);
}

// Provenance stamp: the bundler version is read from the installed package,
// never from a literal here, and there is no timestamp, so identical inputs
// produce identical bytes. The rendered contract versions are extracted from
// the produced bundle itself rather than restated by hand.
const contractVersions = [
  ...new Set(bundleText.match(/pond-[a-z0-9-]+-d-p[0-9]+/g) || []),
].sort();

const provenance = {
  record: "src/contracts/pond-local-principal-authentication-observation.ts",
  inputs: [
    "src/fixtures/stage-d-p0-agent-presence.ts",
    "src/contracts/pond-agent-presence-observation-intake.ts",
  ],
  renderedStages: ["D-P0", "D-P2", "D-P6"],
  contractVersions,
  bundler: { name: "esbuild", version: esbuildPackage.version },
  build: {
    format: "esm",
    platform: "browser",
    target: "es2022",
    minify: false,
    splitting: false,
  },
  authority: "none",
  mutationPosture: "none_read_only",
  runtimeActivationPosture: "not_included",
  note:
    "Live shell observation support only; the bundle carries the frozen " +
    "D-P6 performer classifier, the receiver-held D-P0 principal ref, and " +
    "the D-P2 declared maximum age, and performs no authentication, admits " +
    "no credential, issues no PrincipalId, and grants no authority.",
};
const provenanceText = JSON.stringify(provenance, null, 2) + "\n";

const provenancePath = resolveFromRoot(
  "ui/generated/pond-stage-d-local-authentication-provenance.json"
);
if (checkOnly) {
  const committedBundle = await readFile(
    resolveFromRoot("ui/generated/pond-stage-d-local-authentication.js"),
    "utf8"
  );
  const committedProvenance = await readFile(provenancePath, "utf8");
  if (committedBundle !== bundleText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-local-authentication.js differs from a fresh render."
    );
    process.exit(1);
  }
  if (committedProvenance !== provenanceText) {
    console.error(
      "STALE: ui/generated/pond-stage-d-local-authentication-provenance.json differs from a fresh render."
    );
    process.exit(1);
  }
  console.log("POND_STAGE_D_LOCAL_AUTHENTICATION_RENDER_CHECK_PASS");
} else {
  await mkdir(dirname(fileURLToPath(provenancePath)), { recursive: true });
  await writeFile(provenancePath, provenanceText);
  console.log("POND_STAGE_D_LOCAL_AUTHENTICATION_RENDERED");
}