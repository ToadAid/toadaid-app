import * as THREE from "./vendor/three.module.js";

const canvas = document.querySelector(".pond-world-canvas");
const fallback = document.querySelector(".pond-world-fallback");
const stage = document.querySelector(".spatial-stage");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const showFallback = () => {
  canvas.hidden = true;
  fallback.hidden = false;
  stage.classList.add("world-unavailable");
};

if (!canvas || !fallback || !stage) {
  throw new Error("Pond world mount is incomplete.");
}

let renderer;

try {
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
} catch (error) {
  console.warn("Pond real-time presentation is unavailable.", error);
  showFallback();
}

if (renderer) {
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x031418, 0.038);

  const camera = new THREE.PerspectiveCamera(39, 1, 0.1, 80);
  const cameraBase = new THREE.Vector3(0, 3.4, 18);
  camera.position.copy(cameraBase);
  camera.lookAt(0, 0.4, -3.5);

  renderer.setClearColor(0x02090d, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.shadowMap.enabled = false;

  const world = new THREE.Group();
  world.position.y = -0.35;
  scene.add(world);

  scene.add(new THREE.HemisphereLight(0x6cefff, 0x07100c, 1.6));
  const moonLight = new THREE.DirectionalLight(0xb9dfff, 1.35);
  moonLight.position.set(-6, 10, 7);
  scene.add(moonLight);

  for (const [color, intensity, position] of [
    [0x55f3dd, 14, [-6, 1, -1]],
    [0x7cff8c, 12, [6, 0, -5]],
    [0x41cfff, 11, [0, 5, -10]],
  ]) {
    const light = new THREE.PointLight(color, intensity, 8, 2);
    light.position.set(...position);
    scene.add(light);
  }

  const random = (() => {
    let state = 0x50ad2026;
    return () => {
      state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
      return state / 4294967296;
    };
  })();

  const waterUniforms = { time: { value: 0 } };
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(48, 38, 30, 24),
    new THREE.ShaderMaterial({
      uniforms: waterUniforms,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      vertexShader: `
        uniform float time;
        varying float wave;
        varying vec2 waterUv;
        void main() {
          waterUv = uv;
          vec3 p = position;
          wave = sin(p.x * .55 + time * .7) * .08 + cos(p.y * .42 - time * .52) * .06;
          p.z += wave;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        varying float wave;
        varying vec2 waterUv;
        void main() {
          float rings = sin((waterUv.x + waterUv.y) * 62.0) * .025;
          vec3 deep = vec3(.005, .055, .075);
          vec3 glow = vec3(.035, .42, .42);
          vec3 color = mix(deep, glow, clamp(.2 + wave * 2.2 + rings, 0.0, .62));
          gl_FragColor = vec4(color, .82);
        }
      `,
    }),
  );
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, -3.15, -5);
  world.add(water);

  const starCount = 1050;
  const starPositions = new Float32Array(starCount * 3);
  for (let index = 0; index < starCount; index += 1) {
    starPositions[index * 3] = (random() - 0.5) * 52;
    starPositions[index * 3 + 1] = random() * 22 - 1;
    starPositions[index * 3 + 2] = -5 - random() * 34;
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
  const stars = new THREE.Points(
    starGeometry,
    new THREE.PointsMaterial({ color: 0x8deff2, size: 0.055, transparent: true, opacity: 0.82 }),
  );
  scene.add(stars);

  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(1.15, 20, 14),
    new THREE.MeshBasicMaterial({ color: 0xcdebf1, transparent: true, opacity: 0.8 }),
  );
  moon.position.set(-9.5, 8.5, -20);
  scene.add(moon);

  const moonHalo = new THREE.Mesh(
    new THREE.RingGeometry(1.35, 1.8, 32),
    new THREE.MeshBasicMaterial({ color: 0x56dfe8, transparent: true, opacity: 0.15, side: THREE.DoubleSide }),
  );
  moonHalo.position.copy(moon.position);
  scene.add(moonHalo);

  const rockMaterial = new THREE.MeshStandardMaterial({ color: 0x132d2e, roughness: 0.9, metalness: 0.08 });
  const edgeMaterial = new THREE.MeshStandardMaterial({ color: 0x285f50, roughness: 0.72, metalness: 0.12 });
  const grassMaterial = new THREE.MeshStandardMaterial({ color: 0x2c6b48, emissive: 0x123d30, emissiveIntensity: 0.65 });
  const towerMaterial = new THREE.MeshStandardMaterial({ color: 0x4ee3c6, emissive: 0x24a994, emissiveIntensity: 1.6, metalness: 0.48, roughness: 0.3 });
  const windowMaterial = new THREE.MeshBasicMaterial({ color: 0xd3c56a });
  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x42e6ef, transparent: true, opacity: 0.44 });

  const islandLayouts = [
    { name: "Cloud Sanctuary", position: [0, 3.25, -10], radius: 3.25, height: 3.5, towers: 6, waterfall: true },
    { name: "Echo Meadow", position: [-6.1, 0.6, -4.5], radius: 2.25, height: 2.65, towers: 4, waterfall: true },
    { name: "Lotus Archipelago", position: [6.2, 0.1, -5.5], radius: 2.45, height: 2.9, towers: 4, waterfall: true },
    { name: "Mist Gardens", position: [-7.4, -1.15, 1.4], radius: 1.75, height: 2.2, towers: 3, waterfall: true },
    { name: "Deep Reflection", position: [0, -0.7, 1.1], radius: 2.75, height: 3.1, towers: 3, waterfall: false },
    { name: "Starfall Shores", position: [7.2, -1.55, 1.1], radius: 1.85, height: 2.35, towers: 3, waterfall: true },
  ];

  const islandGroups = [];
  const ringGroups = [];
  const waterfalls = [];

  const addTower = (group, x, z, scale) => {
    const tower = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.13 * scale, 0.22 * scale, 0.8 * scale, 6), towerMaterial);
    const spire = new THREE.Mesh(new THREE.ConeGeometry(0.13 * scale, 0.55 * scale, 6), towerMaterial);
    const window = new THREE.Mesh(new THREE.SphereGeometry(0.055 * scale, 6, 4), windowMaterial);
    base.position.y = 0.43 * scale;
    spire.position.y = 1.08 * scale;
    window.position.set(0, 0.7 * scale, 0.19 * scale);
    tower.add(base, spire, window);
    tower.position.set(x, 0.28, z);
    group.add(tower);
  };

  const addWaterfall = (group, radius, drop) => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let index = 0; index < count; index += 1) {
      phases[index] = random();
      positions[index * 3] = (random() - 0.5) * 0.38;
      positions[index * 3 + 1] = -phases[index] * drop;
      positions[index * 3 + 2] = (random() - 0.5) * 0.14;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ color: 0x78efff, size: 0.075, transparent: true, opacity: 0.8, depthWrite: false }),
    );
    points.position.set(radius * 0.58, 0, radius * 0.67);
    group.add(points);
    waterfalls.push({ points, positions, phases, drop });
  };

  for (const [layoutIndex, layout] of islandLayouts.entries()) {
    const group = new THREE.Group();
    group.name = layout.name;
    group.position.set(...layout.position);

    const underside = new THREE.Mesh(
      new THREE.CylinderGeometry(layout.radius * 0.12, layout.radius * 0.93, layout.height, 9, 3),
      rockMaterial,
    );
    underside.position.y = -layout.height * 0.5;
    group.add(underside);

    const rim = new THREE.Mesh(
      new THREE.CylinderGeometry(layout.radius * 0.9, layout.radius, 0.46, 12),
      edgeMaterial,
    );
    group.add(rim);

    const garden = new THREE.Mesh(
      new THREE.CylinderGeometry(layout.radius * 0.82, layout.radius * 0.9, 0.16, 12),
      grassMaterial,
    );
    garden.position.y = 0.3;
    group.add(garden);

    for (let towerIndex = 0; towerIndex < layout.towers; towerIndex += 1) {
      const angle = (towerIndex / layout.towers) * Math.PI * 2 + layoutIndex * 0.47;
      const distance = layout.radius * (towerIndex === 0 ? 0.08 : 0.48 + random() * 0.18);
      addTower(group, Math.cos(angle) * distance, Math.sin(angle) * distance, towerIndex === 0 ? 1.6 : 0.75 + random() * 0.55);
    }

    if (layout.waterfall) {
      addWaterfall(group, layout.radius, Math.max(2.8, layout.position[1] + 3.2));
    }

    if (layoutIndex < 4) {
      const rings = new THREE.Group();
      for (const scale of [1, 1.17]) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(layout.radius * scale, 0.018, 4, 64), ringMaterial);
        ring.rotation.x = Math.PI / 2;
        rings.add(ring);
      }
      rings.position.y = -0.15;
      group.add(rings);
      ringGroups.push(rings);
    }

    world.add(group);
    islandGroups.push(group);
  }

  const pointerTarget = new THREE.Vector2();
  const pointerCurrent = new THREE.Vector2();
  const neutralPointer = new THREE.Vector2();
  const clock = new THREE.Clock();
  let animationFrame = 0;
  let elapsed = 0;
  let disposed = false;

  const resize = () => {
    const width = Math.max(stage.clientWidth, 1);
    const height = Math.max(stage.clientHeight, 1);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const onPointerMove = (event) => {
    const bounds = stage.getBoundingClientRect();
    pointerTarget.set(
      THREE.MathUtils.clamp(((event.clientX - bounds.left) / bounds.width - 0.5) * 2, -1, 1),
      THREE.MathUtils.clamp(((event.clientY - bounds.top) / bounds.height - 0.5) * 2, -1, 1),
    );
  };

  const render = () => {
    if (disposed || document.hidden) {
      animationFrame = 0;
      return;
    }

    const delta = Math.min(clock.getDelta(), 0.05);
    const motionScale = reducedMotion.matches ? 0.04 : 1;
    elapsed += delta * motionScale;
    pointerCurrent.lerp(reducedMotion.matches ? neutralPointer : pointerTarget, 0.025);
    camera.position.x = cameraBase.x + pointerCurrent.x * 0.34;
    camera.position.y = cameraBase.y - pointerCurrent.y * 0.24;
    camera.lookAt(pointerCurrent.x * 0.16, 0.35 - pointerCurrent.y * 0.12, -3.5);

    waterUniforms.time.value = elapsed;
    stars.rotation.y = elapsed * 0.006;
    moonHalo.rotation.z = elapsed * 0.025;

    islandGroups.forEach((group, index) => {
      group.position.y = islandLayouts[index].position[1] + Math.sin(elapsed * 0.34 + index * 1.7) * 0.11;
    });
    ringGroups.forEach((rings, index) => {
      rings.rotation.y = elapsed * (index % 2 === 0 ? 0.12 : -0.1);
      rings.rotation.z = Math.sin(elapsed * 0.18 + index) * 0.08;
    });

    for (const waterfall of waterfalls) {
      for (let index = 0; index < waterfall.phases.length; index += 1) {
        const progress = (waterfall.phases[index] + elapsed * 0.19) % 1;
        waterfall.positions[index * 3 + 1] = -progress * waterfall.drop;
      }
      waterfall.points.geometry.attributes.position.needsUpdate = true;
    }

    renderer.render(scene, camera);
    animationFrame = window.requestAnimationFrame(render);
  };

  const onVisibilityChange = () => {
    if (document.hidden) {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      clock.stop();
      return;
    }
    clock.start();
    if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
  };

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    window.removeEventListener("resize", resize);
    stage.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    scene.traverse((object) => {
      object.geometry?.dispose();
      if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
      else object.material?.dispose();
    });
    renderer.dispose();
  };

  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    dispose();
    showFallback();
  }, { once: true });
  window.addEventListener("resize", resize);
  window.addEventListener("pagehide", dispose, { once: true });
  stage.addEventListener("pointermove", onPointerMove, { passive: true });
  document.addEventListener("visibilitychange", onVisibilityChange);

  resize();
  animationFrame = window.requestAnimationFrame(render);
}
