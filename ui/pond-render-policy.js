const positiveFiniteOr = (value, fallback) => (
  Number.isFinite(value) && value > 0 ? value : fallback
);

export const getPondRenderProfile = ({
  width,
  devicePixelRatio,
  reducedMotion,
}) => {
  const safeWidth = positiveFiniteOr(width, 1);
  const safeDevicePixelRatio = positiveFiniteOr(devicePixelRatio, 1);

  let pixelRatioCap = 1.5;
  let maxFps = 60;

  if (safeWidth <= 800) {
    pixelRatioCap = 1.25;
    maxFps = 30;
  }

  if (safeWidth <= 540) {
    pixelRatioCap = 1;
  }

  if (reducedMotion) {
    pixelRatioCap = 1;
    maxFps = 12;
  }

  return Object.freeze({
    pixelRatio: Math.min(safeDevicePixelRatio, pixelRatioCap),
    maxFps,
  });
};

export const shouldPondAnimate = ({
  disposed,
  documentHidden,
  stageVisible,
}) => !disposed && !documentHidden && stageVisible;

export const shouldRenderPondFrame = ({
  nowMs,
  lastFrameMs,
  maxFps,
}) => {
  if (!Number.isFinite(nowMs)) return false;
  if (!Number.isFinite(lastFrameMs) || lastFrameMs <= 0) return true;

  const safeMaxFps = positiveFiniteOr(maxFps, 60);
  const minimumIntervalMs = 1000 / safeMaxFps;

  return nowMs - lastFrameMs + 0.75 >= minimumIntervalMs;
};
