import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import {
  KNOWLEDGE_FORGE_P5C_LIBRARY_FIXTURE,
  filterSkillLibrary,
  renderKnowledgeForgeLibrary,
} from "../ui/pond-knowledge-forge-library.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const html = await readFile(path.join(root, "ui", "pond-desktop.html"), "utf8");
const css = await readFile(path.join(root, "ui", "pond-desktop.css"), "utf8");
const moduleText = await readFile(
  path.join(root, "ui", "pond-knowledge-forge-library.js"),
  "utf8",
);
const packageJson = JSON.parse(
  await readFile(path.join(root, "package.json"), "utf8"),
);

const fixture = KNOWLEDGE_FORGE_P5C_LIBRARY_FIXTURE;

assert.equal(fixture.schemaVersion, "0.1");
assert.equal(
  fixture.sourceBinding.forgeCommit,
  "caa4bdf3b4fbd95a9d8f0a2686798cc9e1a6f0ad",
);
assert.equal(
  fixture.sourceBinding.forgeTree,
  "1ef8fe116e65bd0ac4eb832451d195831c2c396e",
);
assert.equal(
  fixture.sourceBinding.pondCommit,
  "d0c10d0a22054837fa583381132c60be0cef7f15",
);
assert.equal(fixture.posture.authority, "KNOWLEDGE_ONLY");
assert.equal(fixture.posture.executionAuthority, "NONE");
assert.equal(fixture.posture.runtimeConnection, "NOT_INCLUDED");
assert.equal(fixture.posture.mutation, "NONE");
assert.equal(fixture.posture.activation, "NOT_INCLUDED");
assert.equal(fixture.posture.claimBodiesInCatalog, false);
assert.equal(fixture.posture.sourceBodiesInCatalog, false);

assert.equal(fixture.skills.length, 4);
assert.equal(
  fixture.skills.filter((skill) => skill.state === "SUSPENDED").length,
  1,
);
assert.equal(
  fixture.skills.filter((skill) => skill.state === "PROMOTED").length,
  3,
);

assert.deepEqual(
  filterSkillLibrary(fixture.skills, { query: "weth" }).map(
    (skill) => skill.skillId,
  ),
  ["skill:fixture:base-weth9"],
);
assert.deepEqual(
  filterSkillLibrary(fixture.skills, { state: "SUSPENDED" }).map(
    (skill) => skill.skillId,
  ),
  ["skill:fixture:incident-example"],
);
assert.deepEqual(
  filterSkillLibrary(fixture.skills, { kind: "PROCEDURE" }).map(
    (skill) => skill.skillId,
  ),
  ["skill:fixture:deployment-window"],
);
assert.deepEqual(
  filterSkillLibrary(fixture.skills, { query: "no-such-skill" }),
  [],
);

for (const skill of fixture.skills) {
  assert.equal(skill.authority, "KNOWLEDGE_ONLY");
  assert.ok(!Object.hasOwn(skill, "content"));
  assert.ok(!Object.hasOwn(skill, "body"));
  assert.ok(!Object.hasOwn(skill, "claim"));
  assert.ok(!Object.hasOwn(skill, "claimValue"));
  assert.ok(!Object.hasOwn(skill, "sourceText"));
}

assert.equal(renderKnowledgeForgeLibrary(undefined), false);

assert.match(html, /data-forge-library/);
assert.match(html, /data-forge-library-search/);
assert.match(html, /data-forge-library-state/);
assert.match(html, /data-forge-library-kind/);
assert.match(html, /data-forge-library-results/);
assert.match(html, /data-forge-library-detail/);
assert.match(html, /pond-knowledge-forge-library\.js/);

assert.match(css, /\.forge-library-shell/);
assert.match(css, /\.forge-skill-card/);
assert.match(css, /\.forge-library-detail/);

assert.equal(
  packageJson.scripts["test:p5c-knowledge-forge-library"],
  "node scripts/pond-knowledge-forge-library-selftest.mjs",
);

for (const forbidden of [
  "__TAURI__",
  "invoke(",
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
]) {
  assert.equal(
    moduleText.includes(forbidden),
    false,
    `P5C library module must not activate ${forbidden}`,
  );
}

console.log("P5C_KNOWLEDGE_FORGE_SKILL_LIBRARY_SELFTEST_GREEN");
