import { copyFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));

const copies = [
  ["node_modules/three/build/three.core.js", "ui/vendor/three.core.js"],
  ["node_modules/three/build/three.module.js", "ui/vendor/three.module.js"],
  ["node_modules/three/LICENSE", "ui/vendor/three-LICENSE.txt"],
];

for (const [source, destination] of copies) {
  const sourcePath = new URL(source, `file://${repositoryRoot}/`);
  const destinationPath = new URL(destination, `file://${repositoryRoot}/`);
  await mkdir(dirname(fileURLToPath(destinationPath)), { recursive: true });
  await copyFile(sourcePath, destinationPath);
}
