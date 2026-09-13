import assert from "node:assert/strict";
import {
  getPondDecorativeVisibility,
  getPondRenderProfile,
  shouldPondAnimate,
  shouldRenderPondFrame,
} from "../ui/pond-render-policy.js";

const desktop = getPondRenderProfile({
  width: 1440,
  devicePixelRatio: 2,
  reducedMotion: false,
});
assert.deepEqual(desktop, { pixelRatio: 1.5, maxFps: 60, worldDetail: "full" });

const compactDesktop = getPondRenderProfile({
  width: 1000,
  devicePixelRatio: 2,
  reducedMotion: false,
});
assert.deepEqual(compactDesktop, {
  pixelRatio: 1.5,
  maxFps: 60,
  worldDetail: "balanced",
});

const tablet = getPondRenderProfile({
  width: 760,
  devicePixelRatio: 2,
  reducedMotion: false,
});
assert.deepEqual(tablet, { pixelRatio: 1.25, maxFps: 30, worldDetail: "balanced" });

const phone = getPondRenderProfile({
  width: 420,
  devicePixelRatio: 3,
  reducedMotion: false,
});
assert.deepEqual(phone, { pixelRatio: 1, maxFps: 30, worldDetail: "essential" });

const reduced = getPondRenderProfile({
  width: 1600,
  devicePixelRatio: 3,
  reducedMotion: true,
});
assert.deepEqual(reduced, { pixelRatio: 1, maxFps: 12, worldDetail: "full" });

const invalidInput = getPondRenderProfile({
  width: Number.NaN,
  devicePixelRatio: 0,
  reducedMotion: false,
});
assert.deepEqual(invalidInput, {
  pixelRatio: 1,
  maxFps: 30,
  worldDetail: "essential",
});

assert.deepEqual(getPondDecorativeVisibility("full"), {
  celestialDepth: true,
  cloudStrata: true,
  mistStrata: true,
  distantArchipelago: true,
  foregroundEcology: true,
  waterLightPools: true,
  atmosphericMotes: true,
});
assert.deepEqual(getPondDecorativeVisibility("balanced"), {
  celestialDepth: false,
  cloudStrata: false,
  mistStrata: false,
  distantArchipelago: true,
  foregroundEcology: true,
  waterLightPools: true,
  atmosphericMotes: true,
});
assert.deepEqual(getPondDecorativeVisibility("essential"), {
  celestialDepth: false,
  cloudStrata: false,
  mistStrata: false,
  distantArchipelago: false,
  foregroundEcology: false,
  waterLightPools: false,
  atmosphericMotes: false,
});
assert.deepEqual(
  getPondDecorativeVisibility("unexpected"),
  getPondDecorativeVisibility("essential"),
);

assert.equal(
  shouldPondAnimate({
    disposed: false,
    documentHidden: false,
    stageVisible: true,
  }),
  true,
);
assert.equal(
  shouldPondAnimate({
    disposed: true,
    documentHidden: false,
    stageVisible: true,
  }),
  false,
);
assert.equal(
  shouldPondAnimate({
    disposed: false,
    documentHidden: true,
    stageVisible: true,
  }),
  false,
);
assert.equal(
  shouldPondAnimate({
    disposed: false,
    documentHidden: false,
    stageVisible: false,
  }),
  false,
);

assert.equal(
  shouldRenderPondFrame({
    nowMs: 100,
    lastFrameMs: 0,
    maxFps: 60,
  }),
  true,
);
assert.equal(
  shouldRenderPondFrame({
    nowMs: 108,
    lastFrameMs: 100,
    maxFps: 60,
  }),
  false,
);
assert.equal(
  shouldRenderPondFrame({
    nowMs: 117,
    lastFrameMs: 100,
    maxFps: 60,
  }),
  true,
);
assert.equal(
  shouldRenderPondFrame({
    nowMs: 120,
    lastFrameMs: 100,
    maxFps: 30,
  }),
  false,
);
assert.equal(
  shouldRenderPondFrame({
    nowMs: 134,
    lastFrameMs: 100,
    maxFps: 30,
  }),
  true,
);
assert.equal(
  shouldRenderPondFrame({
    nowMs: Number.NaN,
    lastFrameMs: 100,
    maxFps: 60,
  }),
  false,
);

console.log("POND_RENDER_POLICY_SELFTEST_PASS");
