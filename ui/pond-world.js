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
  scene.fog = new THREE.FogExp2(0x031418, 0.028);

  const camera = new THREE.PerspectiveCamera(39, 1, 0.1, 80);
  const cameraBase = new THREE.Vector3(0, 3.4, 18);
  camera.position.copy(cameraBase);
  camera.lookAt(0, 0.4, -3.5);

  renderer.setClearColor(0x02090d, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.16;
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
    new THREE.PlaneGeometry(48, 38, 36, 28),
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
          float broad = sin(p.x * .34 + time * .46) * .055;
          float cross = cos(p.y * .41 - time * .38) * .045;
          float detail = sin((p.x + p.y) * .82 + time * .63) * .018;
          wave = broad + cross + detail;
          p.z += wave;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying float wave;
        varying vec2 waterUv;
        void main() {
          vec2 centered = waterUv - vec2(.5);
          float distanceFromCenter = length(centered);
          float ripple = sin(distanceFromCenter * 92.0 - time * 1.15) * .032;
          float diagonal = sin((waterUv.x * .7 + waterUv.y) * 74.0 + time * .31) * .018;
          float edgeGlow = smoothstep(.62, .08, distanceFromCenter) * .16;
          vec3 deep = vec3(.004, .034, .058);
          vec3 teal = vec3(.018, .24, .27);
          vec3 cyan = vec3(.08, .62, .62);
          float mixValue = clamp(.16 + wave * 2.6 + ripple + diagonal + edgeGlow, 0.0, .72);
          vec3 color = mix(deep, teal, mixValue);
          color = mix(color, cyan, max(0.0, ripple + wave) * 1.35);
          gl_FragColor = vec4(color, .86);
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

  const moteCount = 220;
  const motePositions = new Float32Array(moteCount * 3);
  for (let index = 0; index < moteCount; index += 1) {
    motePositions[index * 3] = (random() - 0.5) * 24;
    motePositions[index * 3 + 1] = random() * 9 - 2.5;
    motePositions[index * 3 + 2] = -1 - random() * 16;
  }
  const moteGeometry = new THREE.BufferGeometry();
  moteGeometry.setAttribute("position", new THREE.BufferAttribute(motePositions, 3));
  const motes = new THREE.Points(
    moteGeometry,
    new THREE.PointsMaterial({
      color: 0x72ffd8,
      size: 0.038,
      transparent: true,
      opacity: 0.46,
      depthWrite: false,
    }),
  );
  scene.add(motes);

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

  const rockMaterial = new THREE.MeshStandardMaterial({
    color: 0x10292a,
    roughness: 0.93,
    metalness: 0.04,
    flatShading: false,
  });
  const edgeMaterial = new THREE.MeshStandardMaterial({
    color: 0x245c4d,
    roughness: 0.76,
    metalness: 0.08,
  });
  const grassMaterial = new THREE.MeshStandardMaterial({
    color: 0x327551,
    emissive: 0x123d30,
    emissiveIntensity: 0.72,
    roughness: 0.82,
  });
  const towerMaterial = new THREE.MeshStandardMaterial({
    color: 0x4ee3c6,
    emissive: 0x24a994,
    emissiveIntensity: 1.45,
    metalness: 0.34,
    roughness: 0.38,
  });
  const foliageMaterial = new THREE.MeshStandardMaterial({
    color: 0x236d4d,
    emissive: 0x0b3929,
    emissiveIntensity: 0.54,
    roughness: 0.9,
    metalness: 0.02,
  });
  const stoneBloomMaterial = new THREE.MeshStandardMaterial({
    color: 0x55756b,
    emissive: 0x153b34,
    emissiveIntensity: 0.25,
    roughness: 0.95,
    metalness: 0.01,
  });
  const windowMaterial = new THREE.MeshBasicMaterial({ color: 0xd3c56a });
  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x42e6ef, transparent: true, opacity: 0.44 });

  const createOrganicIslandGeometry = (radius, height, phase) => {
    const segments = 28;
    const rings = [
      { y: 0.02, radius: 0.99, drift: 0.00 },
      { y: -height * 0.14, radius: 0.97, drift: 0.02 },
      { y: -height * 0.34, radius: 0.88, drift: 0.05 },
      { y: -height * 0.56, radius: 0.74, drift: 0.08 },
      { y: -height * 0.75, radius: 0.62, drift: 0.11 },
      { y: -height * 0.90, radius: 0.54, drift: 0.13 },
      { y: -height * 0.98, radius: 0.46, drift: 0.14 },
    ];
    const positions = [];
    const indices = [];

    for (const [ringIndex, ring] of rings.entries()) {
      for (let segment = 0; segment < segments; segment += 1) {
        const angle = (segment / segments) * Math.PI * 2;
        const broad = Math.sin(angle * 3 + phase + ringIndex * 0.18) * 0.055;
        const detail = Math.cos(angle * 5 - phase * 0.7 + ringIndex * 0.31) * 0.028;
        const shelf = Math.sin(angle * 2 - phase * 0.4) * 0.018 * ringIndex;
        const contour = 1 + broad + detail + shelf;
        const driftX = Math.sin(phase + ringIndex * 0.73) * radius * ring.drift;
        const driftZ = Math.cos(phase * 0.8 + ringIndex * 0.61) * radius * ring.drift;
        positions.push(
          Math.cos(angle) * radius * ring.radius * contour + driftX,
          ring.y,
          Math.sin(angle) * radius * ring.radius * contour + driftZ,
        );
      }
    }

    for (let ringIndex = 0; ringIndex < rings.length - 1; ringIndex += 1) {
      const current = ringIndex * segments;
      const next = (ringIndex + 1) * segments;
      for (let segment = 0; segment < segments; segment += 1) {
        const following = (segment + 1) % segments;
        indices.push(
          current + segment,
          next + segment,
          next + following,
          current + segment,
          next + following,
          current + following,
        );
      }
    }

    const capIndex = positions.length / 3;
    const last = rings[rings.length - 1];
    positions.push(
      Math.sin(phase + 1.4) * radius * last.drift,
      -height * 1.035,
      Math.cos(phase * 0.8 + 1.1) * radius * last.drift,
    );
    const finalRing = (rings.length - 1) * segments;
    for (let segment = 0; segment < segments; segment += 1) {
      const following = (segment + 1) % segments;
      indices.push(finalRing + segment, capIndex, finalRing + following);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return geometry;
  };

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

  const addLandmark = (group, x, z, scale, islandIndex, featureIndex) => {
    const landmark = new THREE.Group();
    const phase = islandIndex * 0.83 + featureIndex * 1.17;

    if (featureIndex === 0 && islandIndex % 2 === 0) {
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07 * scale, 0.11 * scale, 0.62 * scale, 10),
        towerMaterial,
      );
      const lantern = new THREE.Mesh(
        new THREE.SphereGeometry(0.19 * scale, 14, 10),
        towerMaterial,
      );
      const seed = new THREE.Mesh(
        new THREE.SphereGeometry(0.06 * scale, 10, 8),
        windowMaterial,
      );
      const halo = new THREE.Mesh(
        new THREE.TorusGeometry(0.25 * scale, 0.012 * scale, 4, 28),
        ringMaterial,
      );

      stem.position.y = 0.31 * scale;
      lantern.position.y = 0.73 * scale;
      lantern.scale.set(1.0, 1.22, 1.0);
      seed.position.set(0.02 * scale, 0.76 * scale, 0.17 * scale);
      halo.position.y = 0.74 * scale;
      halo.rotation.x = Math.PI / 2;
      landmark.add(stem, lantern, seed, halo);
    } else {
      const clusterCount = 2 + ((islandIndex + featureIndex) % 2);
      for (let clusterIndex = 0; clusterIndex < clusterCount; clusterIndex += 1) {
        const angle = phase + clusterIndex * 2.2;
        const offset = 0.10 * scale + clusterIndex * 0.045 * scale;
        const stem = new THREE.Mesh(
          new THREE.CylinderGeometry(0.035 * scale, 0.055 * scale, 0.24 * scale, 8),
          stoneBloomMaterial,
        );
        const canopy = new THREE.Mesh(
          new THREE.SphereGeometry((0.16 + clusterIndex * 0.025) * scale, 12, 8),
          foliageMaterial,
        );
        const glowSeed = new THREE.Mesh(
          new THREE.SphereGeometry(0.025 * scale, 8, 6),
          windowMaterial,
        );

        const px = Math.cos(angle) * offset;
        const pz = Math.sin(angle) * offset;
        stem.position.set(px, 0.13 * scale, pz);
        canopy.position.set(px, (0.30 + clusterIndex * 0.045) * scale, pz);
        canopy.scale.set(
          1.15 + clusterIndex * 0.08,
          0.72 + ((islandIndex + clusterIndex) % 2) * 0.12,
          1.0,
        );
        glowSeed.position.set(
          px + Math.cos(angle + 0.7) * 0.08 * scale,
          canopy.position.y + 0.02 * scale,
          pz + Math.sin(angle + 0.7) * 0.08 * scale,
        );

        landmark.add(stem, canopy, glowSeed);
      }
    }

    landmark.position.set(x, 0.28, z);
    landmark.rotation.y = phase * 0.17;
    group.add(landmark);
  };

  const addWaterfall = (group, radius, drop, phase) => {
    const ribbonUniforms = {
      time: { value: 0 },
      phase: { value: phase },
    };
    const ribbon = new THREE.Mesh(
      new THREE.PlaneGeometry(Math.max(0.34, radius * 0.22), drop, 4, 24),
      new THREE.ShaderMaterial({
        uniforms: ribbonUniforms,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        vertexShader: `
          uniform float time;
          uniform float phase;
          varying vec2 ribbonUv;
          void main() {
            ribbonUv = uv;
            vec3 p = position;
            float fall = (1.0 - uv.y);
            p.x += sin(uv.y * 12.0 + time * 1.15 + phase) * .055 * fall;
            p.z += cos(uv.y * 9.0 - time * .72 + phase) * .035;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform float phase;
          varying vec2 ribbonUv;
          void main() {
            float strand = sin(ribbonUv.x * 34.0 + ribbonUv.y * 16.0 + time * 1.6 + phase) * .12;
            float center = 1.0 - abs(ribbonUv.x - .5) * 1.7;
            float fade = smoothstep(0.0, .08, ribbonUv.y) * smoothstep(0.0, .12, 1.0 - ribbonUv.y);
            vec3 teal = vec3(.08, .52, .62);
            vec3 whiteWater = vec3(.55, .95, 1.0);
            vec3 color = mix(teal, whiteWater, clamp(center + strand, 0.0, 1.0));
            gl_FragColor = vec4(color, (.34 + center * .34 + strand * .12) * fade);
          }
        `,
      }),
    );
    ribbon.position.set(radius * 0.58, -drop * 0.5, radius * 0.69);
    group.add(ribbon);

    const count = 58;
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let index = 0; index < count; index += 1) {
      phases[index] = random();
      positions[index * 3] = (random() - 0.5) * Math.max(0.34, radius * 0.24);
      positions[index * 3 + 1] = -phases[index] * drop;
      positions[index * 3 + 2] = (random() - 0.5) * 0.18;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        color: 0xb5f8ff,
        size: 0.062,
        transparent: true,
        opacity: 0.68,
        depthWrite: false,
      }),
    );
    points.position.set(radius * 0.58, 0, radius * 0.71);
    group.add(points);
    waterfalls.push({ points, positions, phases, drop, ribbonUniforms });
  };

  for (const [layoutIndex, layout] of islandLayouts.entries()) {
    const group = new THREE.Group();
    group.name = layout.name;
    group.position.set(...layout.position);

    const underside = new THREE.Mesh(
      createOrganicIslandGeometry(layout.radius, layout.height, layoutIndex * 0.83 + 0.4),
      rockMaterial,
    );
    group.add(underside);

    const rim = new THREE.Mesh(
      new THREE.CylinderGeometry(layout.radius * 0.9, layout.radius, 0.4, 24),
      edgeMaterial,
    );
    group.add(rim);

    const garden = new THREE.Mesh(
      new THREE.CylinderGeometry(layout.radius * 0.82, layout.radius * 0.9, 0.16, 24),
      grassMaterial,
    );
    garden.position.y = 0.3;
    group.add(garden);

    for (let towerIndex = 0; towerIndex < layout.towers; towerIndex += 1) {
      const angle = (towerIndex / layout.towers) * Math.PI * 2 + layoutIndex * 0.47;
      const distance = layout.radius * (towerIndex === 0 ? 0.08 : 0.48 + random() * 0.18);
      addLandmark(
        group,
        Math.cos(angle) * distance,
        Math.sin(angle) * distance,
        towerIndex === 0 ? 1.35 : 0.72 + random() * 0.42,
        layoutIndex,
        towerIndex,
      );
    }

    if (layout.waterfall) {
      addWaterfall(
        group,
        layout.radius,
        Math.max(2.8, layout.position[1] + 3.2),
        layoutIndex * 0.73 + 0.2,
      );
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
    motes.rotation.y = elapsed * -0.012;
    motes.position.y = Math.sin(elapsed * 0.17) * 0.08;
    moonHalo.rotation.z = elapsed * 0.025;

    islandGroups.forEach((group, index) => {
      group.position.y = islandLayouts[index].position[1] + Math.sin(elapsed * 0.34 + index * 1.7) * 0.11;
    });
    ringGroups.forEach((rings, index) => {
      rings.rotation.y = elapsed * (index % 2 === 0 ? 0.12 : -0.1);
      rings.rotation.z = Math.sin(elapsed * 0.18 + index) * 0.08;
    });

    for (const waterfall of waterfalls) {
      waterfall.ribbonUniforms.time.value = elapsed;
      for (let index = 0; index < waterfall.phases.length; index += 1) {
        const progress = (waterfall.phases[index] + elapsed * 0.22) % 1;
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
