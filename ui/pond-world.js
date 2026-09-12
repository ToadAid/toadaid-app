import * as THREE from "./vendor/three.module.js";
import {
  getPondRenderProfile,
  shouldPondAnimate,
  shouldRenderPondFrame,
} from "./pond-render-policy.js";

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
    color: 0x5a3c2d,
    emissive: 0x17120e,
    emissiveIntensity: 0.18,
    roughness: 0.96,
    metalness: 0.02,
    flatShading: false,
  });
  const edgeMaterial = new THREE.MeshStandardMaterial({
    color: 0x8b6843,
    emissive: 0x21180e,
    emissiveIntensity: 0.16,
    roughness: 0.9,
    metalness: 0.03,
  });
  const grassMaterial = new THREE.MeshStandardMaterial({
    color: 0x4f8f55,
    emissive: 0x173f2b,
    emissiveIntensity: 0.66,
    roughness: 0.82,
  });
  const turfMaterial = new THREE.MeshStandardMaterial({
    color: 0x74b860,
    emissive: 0x1b492d,
    emissiveIntensity: 0.54,
    roughness: 0.9,
  });
  const cliffFacetMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xb07848, roughness: 0.98 }),
    new THREE.MeshStandardMaterial({ color: 0x7d4935, roughness: 0.98 }),
    new THREE.MeshStandardMaterial({ color: 0x6b6254, roughness: 0.98 }),
  ];
  const vineMaterial = new THREE.MeshStandardMaterial({
    color: 0x2f7650,
    emissive: 0x0d2f21,
    emissiveIntensity: 0.45,
    roughness: 0.9,
  });
  const basinMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x179aa7,
    emissive: 0x075b67,
    emissiveIntensity: 0.7,
    transparent: true,
    opacity: 0.82,
    roughness: 0.2,
    metalness: 0.04,
  });
  const pathStoneMaterial = new THREE.MeshStandardMaterial({
    color: 0xbba987,
    emissive: 0x2c2a20,
    emissiveIntensity: 0.2,
    roughness: 0.94,
  });
  const sanctuaryWallMaterial = new THREE.MeshStandardMaterial({
    color: 0xb9915e,
    emissive: 0x2b1d11,
    emissiveIntensity: 0.26,
    roughness: 0.94,
  });
  const sanctuaryRoofMaterial = new THREE.MeshStandardMaterial({
    color: 0x315f42,
    emissive: 0x112f21,
    emissiveIntensity: 0.5,
    roughness: 0.88,
  });
  const lanternMaterial = new THREE.MeshBasicMaterial({ color: 0xffd56a });
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
  const loreCoreMaterials = [
    new THREE.MeshBasicMaterial({ color: 0x53f5df }),
    new THREE.MeshBasicMaterial({ color: 0x9afa72 }),
    new THREE.MeshBasicMaterial({ color: 0xffa34d }),
  ];

  const guideSkinMaterial = new THREE.MeshStandardMaterial({
    color: 0x69d78f,
    emissive: 0x173d2d,
    emissiveIntensity: 0.34,
    roughness: 0.58,
    metalness: 0.03,
  });
  const guideSkinLightMaterial = new THREE.MeshStandardMaterial({
    color: 0xa5e96f,
    emissive: 0x264a25,
    emissiveIntensity: 0.28,
    roughness: 0.5,
    metalness: 0.02,
  });
  const guideEyeMaterial = new THREE.MeshStandardMaterial({
    color: 0xc7f28a,
    emissive: 0x29431d,
    emissiveIntensity: 0.2,
    roughness: 0.42,
  });
  const guidePupilMaterial = new THREE.MeshStandardMaterial({
    color: 0x03100d,
    emissive: 0x3a3212,
    emissiveIntensity: 0.5,
    roughness: 0.32,
    metalness: 0.12,
  });
  const guideRobeMaterial = new THREE.MeshStandardMaterial({
    color: 0x092b2b,
    emissive: 0x06201d,
    emissiveIntensity: 0.44,
    roughness: 0.78,
    metalness: 0.08,
  });
  const guideRobePanelMaterial = new THREE.MeshStandardMaterial({
    color: 0x0e4440,
    emissive: 0x0a2925,
    emissiveIntensity: 0.55,
    roughness: 0.7,
    metalness: 0.1,
  });
  const guideTrimMaterial = new THREE.MeshStandardMaterial({
    color: 0x60e6c2,
    emissive: 0x27a68f,
    emissiveIntensity: 1.5,
    roughness: 0.32,
    metalness: 0.28,
  });
  const guideGoldMaterial = new THREE.MeshStandardMaterial({
    color: 0xd8bf62,
    emissive: 0x756123,
    emissiveIntensity: 0.82,
    roughness: 0.3,
    metalness: 0.42,
  });
  const guideHaloMaterial = new THREE.MeshBasicMaterial({
    color: 0x54f1dc,
    transparent: true,
    opacity: 0.32,
    depthWrite: false,
  });

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

  const addLoreLandCharacter = (group, layout, islandIndex) => {
    const detailRoot = new THREE.Group();
    detailRoot.name = `${layout.name} lore-land character`;

    const cliffFacetCount = 7;
    for (let facetIndex = 0; facetIndex < cliffFacetCount; facetIndex += 1) {
      const angle = (facetIndex / cliffFacetCount) * Math.PI * 2 + islandIndex * 0.41;
      const facet = new THREE.Mesh(
        new THREE.DodecahedronGeometry(layout.radius * (0.13 + random() * 0.035), 0),
        cliffFacetMaterials[(islandIndex + facetIndex) % cliffFacetMaterials.length],
      );
      facet.position.set(
        Math.cos(angle) * layout.radius * 0.82,
        -0.38 - random() * layout.height * 0.42,
        Math.sin(angle) * layout.radius * 0.82,
      );
      facet.scale.set(1.05, 1.45 + random() * 0.7, 0.48);
      facet.rotation.set(random() * 0.25, -angle, random() * 0.2);
      detailRoot.add(facet);
    }

    const turfLip = new THREE.Mesh(
      new THREE.TorusGeometry(layout.radius * 0.91, 0.105, 7, 40),
      turfMaterial,
    );
    turfLip.rotation.x = Math.PI / 2;
    turfLip.position.y = 0.38;
    turfLip.scale.z = 0.94;
    detailRoot.add(turfLip);

    const vineCount = 5 + (islandIndex % 3);
    for (let vineIndex = 0; vineIndex < vineCount; vineIndex += 1) {
      const angle = (vineIndex / vineCount) * Math.PI * 2 + islandIndex * 0.69;
      const start = new THREE.Vector3(
        Math.cos(angle) * layout.radius * 0.86,
        0.3,
        Math.sin(angle) * layout.radius * 0.86,
      );
      const vineLength = 0.48 + random() * Math.min(1.1, layout.height * 0.34);
      const sway = (random() - 0.5) * 0.22;
      const curve = new THREE.QuadraticBezierCurve3(
        start,
        new THREE.Vector3(start.x + sway, 0.3 - vineLength * 0.48, start.z),
        new THREE.Vector3(start.x - sway * 0.35, 0.3 - vineLength, start.z + sway),
      );
      detailRoot.add(new THREE.Mesh(
        new THREE.TubeGeometry(curve, 8, 0.018, 4, false),
        vineMaterial,
      ));
    }

    const coreRoot = new THREE.Group();
    const coreMaterial = loreCoreMaterials[islandIndex % loreCoreMaterials.length];
    const portal = new THREE.Mesh(
      new THREE.TorusGeometry(layout.radius * 0.19, 0.052, 6, 30),
      guideGoldMaterial,
    );
    const portalGlow = new THREE.Mesh(
      new THREE.CircleGeometry(layout.radius * 0.165, 28),
      new THREE.MeshBasicMaterial({
        color: coreMaterial.color,
        transparent: true,
        opacity: 0.2,
        depthWrite: false,
      }),
    );
    const crystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(layout.radius * 0.115, 0),
      coreMaterial,
    );
    crystal.scale.y = 1.25;
    crystal.position.z = 0.035;
    coreRoot.add(portalGlow, portal, crystal);
    coreRoot.position.set(0, -layout.height * 0.43, layout.radius * 0.72);
    coreRoot.rotation.x = -0.08;
    detailRoot.add(coreRoot);

    for (const side of [-1, 1]) {
      const satelliteCrystal = new THREE.Mesh(
        new THREE.OctahedronGeometry(layout.radius * 0.055, 0),
        coreMaterial,
      );
      satelliteCrystal.position.set(
        side * layout.radius * 0.31,
        -layout.height * (0.47 + random() * 0.16),
        layout.radius * 0.7,
      );
      satelliteCrystal.scale.set(0.72, 1.45, 0.72);
      satelliteCrystal.rotation.z = side * 0.16;
      detailRoot.add(satelliteCrystal);
    }

    if (islandIndex === 0 || islandIndex === 2 || islandIndex === 4) {
      const basin = new THREE.Mesh(
        new THREE.CircleGeometry(layout.radius * 0.25, 30),
        basinMaterial,
      );
      basin.rotation.x = -Math.PI / 2;
      basin.position.set(-layout.radius * 0.23, 0.402, layout.radius * 0.08);
      detailRoot.add(basin);

      const basinRim = new THREE.Mesh(
        new THREE.TorusGeometry(layout.radius * 0.25, 0.045, 6, 30),
        pathStoneMaterial,
      );
      basinRim.rotation.x = Math.PI / 2;
      basinRim.position.copy(basin.position);
      detailRoot.add(basinRim);

      for (let stoneIndex = 0; stoneIndex < 3; stoneIndex += 1) {
        const stone = new THREE.Mesh(
          new THREE.SphereGeometry(layout.radius * 0.075, 12, 8),
          pathStoneMaterial,
        );
        stone.scale.set(1.35, 0.24, 0.86);
        stone.position.set(
          layout.radius * (0.12 + stoneIndex * 0.17),
          0.43,
          layout.radius * (0.02 - stoneIndex * 0.04),
        );
        stone.rotation.y = islandIndex * 0.38 + stoneIndex * 0.24;
        detailRoot.add(stone);
      }
    }

    const groveCount = Math.min(5, 3 + Math.floor(layout.radius));
    for (let groveIndex = 0; groveIndex < groveCount; groveIndex += 1) {
      const angle = (groveIndex / groveCount) * Math.PI * 2 + islandIndex * 0.52;
      const grove = new THREE.Group();
      for (let crownIndex = 0; crownIndex < 3; crownIndex += 1) {
        const crown = new THREE.Mesh(
          new THREE.SphereGeometry(layout.radius * (0.075 + crownIndex * 0.012), 10, 7),
          crownIndex === 2 ? turfMaterial : foliageMaterial,
        );
        crown.position.set(
          (crownIndex - 1) * layout.radius * 0.085,
          layout.radius * (0.09 + crownIndex * 0.025),
          Math.sin(crownIndex * 2.1) * layout.radius * 0.035,
        );
        crown.scale.y = 0.72;
        grove.add(crown);
      }
      grove.position.set(
        Math.cos(angle) * layout.radius * 0.65,
        0.39,
        Math.sin(angle) * layout.radius * 0.65,
      );
      detailRoot.add(grove);
    }

    if (islandIndex === 0 || islandIndex === 2) {
      const sanctuary = new THREE.Group();
      const width = layout.radius * 0.31;
      const walls = new THREE.Mesh(
        new THREE.CylinderGeometry(width * 0.78, width, width * 0.92, 12),
        sanctuaryWallMaterial,
      );
      walls.position.y = width * 0.46;
      const roof = new THREE.Mesh(
        new THREE.ConeGeometry(width * 1.24, width * 0.62, 14),
        sanctuaryRoofMaterial,
      );
      roof.position.y = width * 1.04;
      const door = new THREE.Mesh(
        new THREE.CircleGeometry(width * 0.26, 18, 0, Math.PI),
        guideRobeMaterial,
      );
      door.position.set(0, width * 0.36, width * 0.79);
      const windowGlow = new THREE.Mesh(
        new THREE.CircleGeometry(width * 0.12, 16),
        lanternMaterial,
      );
      windowGlow.position.set(width * 0.38, width * 0.56, width * 0.68);
      sanctuary.add(walls, roof, door, windowGlow);
      sanctuary.position.set(
        layout.radius * 0.14,
        0.4,
        -layout.radius * 0.2,
      );
      sanctuary.rotation.y = islandIndex === 0 ? 0.12 : -0.28;
      detailRoot.add(sanctuary);

      for (const side of [-1, 1]) {
        const lanternPost = new THREE.Mesh(
          new THREE.CylinderGeometry(0.018, 0.025, width * 0.72, 6),
          edgeMaterial,
        );
        lanternPost.position.set(
          layout.radius * (0.43 + side * 0.08),
          0.4 + width * 0.36,
          layout.radius * (0.08 + side * 0.16),
        );
        const lantern = new THREE.Mesh(
          new THREE.SphereGeometry(width * 0.075, 10, 7),
          lanternMaterial,
        );
        lantern.position.copy(lanternPost.position);
        lantern.position.y += width * 0.34;
        detailRoot.add(lanternPost, lantern);
      }
    }

    group.add(detailRoot);
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

    addLoreLandCharacter(group, layout, layoutIndex);

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

  const guideRoot = new THREE.Group();
  guideRoot.name = "Procedural specialist-agent guide";
  const guideBaseY = -1.52;
  guideRoot.position.set(0, guideBaseY, 3.32);
  guideRoot.scale.setScalar(1.08);
  scene.add(guideRoot);

  const robeProfile = [
    new THREE.Vector2(0.94, 0.00),
    new THREE.Vector2(0.91, 0.16),
    new THREE.Vector2(0.82, 0.46),
    new THREE.Vector2(0.70, 0.82),
    new THREE.Vector2(0.59, 1.18),
    new THREE.Vector2(0.54, 1.50),
    new THREE.Vector2(0.58, 1.72),
    new THREE.Vector2(0.48, 1.88),
  ];
  const robe = new THREE.Mesh(
    new THREE.LatheGeometry(robeProfile, 32),
    guideRobeMaterial,
  );
  robe.position.y = -0.48;
  robe.scale.z = 0.82;
  guideRoot.add(robe);

  const frontDrapeShape = new THREE.Shape();
  frontDrapeShape.moveTo(-0.46, 1.12);
  frontDrapeShape.lineTo(0.46, 1.12);
  frontDrapeShape.lineTo(0.66, 0.18);
  frontDrapeShape.lineTo(0.82, -0.43);
  frontDrapeShape.lineTo(-0.82, -0.43);
  frontDrapeShape.lineTo(-0.66, 0.18);
  frontDrapeShape.closePath();

  const frontDrape = new THREE.Mesh(
    new THREE.ShapeGeometry(frontDrapeShape, 8),
    guideRobePanelMaterial,
  );
  frontDrape.position.set(0, 0.02, 0.76);
  guideRoot.add(frontDrape);

  const mantle = new THREE.Mesh(
    new THREE.SphereGeometry(0.76, 26, 16),
    guideRobeMaterial,
  );
  mantle.position.set(0, 1.17, 0.03);
  mantle.scale.set(1.08, 0.28, 0.78);
  guideRoot.add(mantle);

  const shoulderDrape = new THREE.Mesh(
    new THREE.SphereGeometry(0.67, 24, 14),
    guideRobePanelMaterial,
  );
  shoulderDrape.position.set(0, 1.05, 0.23);
  shoulderDrape.scale.set(1.0, 0.22, 0.66);
  guideRoot.add(shoulderDrape);

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.66, 30, 20),
    guideSkinMaterial,
  );
  head.position.set(0, 1.84, 0.14);
  head.scale.set(1.16, 0.76, 0.84);
  guideRoot.add(head);

  const muzzle = new THREE.Mesh(
    new THREE.SphereGeometry(0.43, 26, 16),
    guideSkinLightMaterial,
  );
  muzzle.position.set(0, 1.67, 0.52);
  muzzle.scale.set(1.24, 0.42, 0.48);
  guideRoot.add(muzzle);

  const eyeRoots = [];
  for (const side of [-1, 1]) {
    const eyeRoot = new THREE.Group();
    eyeRoot.position.set(side * 0.34, 2.12, 0.62);

    const eye = new THREE.Mesh(
      new THREE.SphereGeometry(0.195, 22, 14),
      guideEyeMaterial,
    );
    eye.scale.set(1.0, 0.96, 0.84);

    const pupil = new THREE.Mesh(
      new THREE.SphereGeometry(0.068, 16, 10),
      guidePupilMaterial,
    );
    pupil.position.set(side * -0.008, -0.002, 0.176);
    pupil.scale.set(0.78, 1.08, 0.58);

    const catchlight = new THREE.Mesh(
      new THREE.SphereGeometry(0.018, 8, 6),
      guideGoldMaterial,
    );
    catchlight.position.set(side * -0.026, 0.045, 0.218);

    eyeRoot.add(eye, pupil, catchlight);
    guideRoot.add(eyeRoot);
    eyeRoots.push(eyeRoot);
  }

  const mouthCurve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(-0.24, 1.60, 0.755),
    new THREE.Vector3(0, 1.53, 0.79),
    new THREE.Vector3(0.24, 1.60, 0.755),
  );
  const mouth = new THREE.Mesh(
    new THREE.TubeGeometry(mouthCurve, 18, 0.017, 6, false),
    guidePupilMaterial,
  );
  guideRoot.add(mouth);

  const guideSleeves = [];
  for (const side of [-1, 1]) {
    const sleeve = new THREE.Mesh(
      new THREE.SphereGeometry(0.32, 20, 14),
      guideRobePanelMaterial,
    );
    sleeve.position.set(side * 0.52, 0.74, 0.31);
    sleeve.scale.set(0.72, 1.36, 0.72);
    sleeve.rotation.z = side * -0.43;
    sleeve.rotation.x = side * 0.04;
    guideRoot.add(sleeve);
    guideSleeves.push(sleeve);

    const hand = new THREE.Mesh(
      new THREE.SphereGeometry(0.13, 18, 12),
      guideSkinLightMaterial,
    );
    hand.position.set(side * 0.30, 0.76, 0.73);
    hand.scale.set(1.08, 0.66, 0.84);
    guideRoot.add(hand);
  }

  const collar = new THREE.Mesh(
    new THREE.TorusGeometry(0.41, 0.032, 8, 40),
    guideTrimMaterial,
  );
  collar.position.set(0, 1.19, 0.31);
  collar.rotation.x = 0.28;
  guideRoot.add(collar);

  const leafSigilShape = new THREE.Shape();
  leafSigilShape.moveTo(0, -0.20);
  leafSigilShape.bezierCurveTo(-0.18, -0.10, -0.19, 0.08, 0, 0.23);
  leafSigilShape.bezierCurveTo(0.19, 0.08, 0.18, -0.10, 0, -0.20);

  const leafSigil = new THREE.Mesh(
    new THREE.ShapeGeometry(leafSigilShape, 8),
    guideTrimMaterial,
  );
  leafSigil.position.set(0, 0.92, 0.82);
  leafSigil.scale.setScalar(0.78);
  guideRoot.add(leafSigil);

  const sigilStemCurve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(0, 0.74, 0.835),
    new THREE.Vector3(-0.022, 0.91, 0.845),
    new THREE.Vector3(0, 1.08, 0.835),
  );
  const sigilStem = new THREE.Mesh(
    new THREE.TubeGeometry(sigilStemCurve, 12, 0.014, 5, false),
    guideGoldMaterial,
  );
  guideRoot.add(sigilStem);

  const guideHalo = new THREE.Mesh(
    new THREE.TorusGeometry(0.86, 0.011, 5, 72),
    guideHaloMaterial,
  );
  guideHalo.position.set(0, 1.83, -0.40);
  guideHalo.scale.set(1.0, 1.08, 1.0);
  guideRoot.add(guideHalo);

  const guideHaloInner = new THREE.Mesh(
    new THREE.TorusGeometry(0.66, 0.007, 4, 64),
    guideHaloMaterial,
  );
  guideHaloInner.position.set(0, 1.83, -0.38);
  guideHaloInner.scale.set(1.0, 1.08, 1.0);
  guideHaloInner.rotation.z = Math.PI / 8;
  guideRoot.add(guideHaloInner);

  const guideLight = new THREE.PointLight(0x67ffd4, 4.1, 4.0, 2);
  guideLight.position.set(0, 1.55, 1.22);
  guideRoot.add(guideLight);

  const pointerTarget = new THREE.Vector2();
  const pointerCurrent = new THREE.Vector2();
  const neutralPointer = new THREE.Vector2();
  const clock = new THREE.Clock();
  let animationFrame = 0;
  let elapsed = 0;
  let disposed = false;
  let stageVisible = true;
  let currentPixelRatio = 0;
  let lastRenderedAt = 0;
  let renderProfile = getPondRenderProfile({
    width: Math.max(stage.clientWidth, 1),
    devicePixelRatio: window.devicePixelRatio || 1,
    reducedMotion: reducedMotion.matches,
  });

  const resize = () => {
    const width = Math.max(stage.clientWidth, 1);
    const height = Math.max(stage.clientHeight, 1);
    renderProfile = getPondRenderProfile({
      width,
      devicePixelRatio: window.devicePixelRatio || 1,
      reducedMotion: reducedMotion.matches,
    });
    if (renderProfile.pixelRatio !== currentPixelRatio) {
      currentPixelRatio = renderProfile.pixelRatio;
      renderer.setPixelRatio(currentPixelRatio);
    }
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    lastRenderedAt = 0;
  };

  const onPointerMove = (event) => {
    const bounds = stage.getBoundingClientRect();
    pointerTarget.set(
      THREE.MathUtils.clamp(((event.clientX - bounds.left) / bounds.width - 0.5) * 2, -1, 1),
      THREE.MathUtils.clamp(((event.clientY - bounds.top) / bounds.height - 0.5) * 2, -1, 1),
    );
  };

  const onPointerLeave = () => {
    pointerTarget.copy(neutralPointer);
  };

  const render = (timestamp) => {
    if (!shouldPondAnimate({
      disposed,
      documentHidden: document.hidden,
      stageVisible,
    })) {
      animationFrame = 0;
      return;
    }

    if (!shouldRenderPondFrame({
      nowMs: timestamp,
      lastFrameMs: lastRenderedAt,
      maxFps: renderProfile.maxFps,
    })) {
      animationFrame = window.requestAnimationFrame(render);
      return;
    }
    lastRenderedAt = timestamp;

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

    guideRoot.position.y = guideBaseY + Math.sin(elapsed * 0.46) * 0.028;
    guideRoot.rotation.y = Math.sin(elapsed * 0.16) * 0.012;
    head.rotation.y = Math.sin(elapsed * 0.21) * 0.025;
    head.rotation.x = Math.sin(elapsed * 0.15) * 0.009;
    eyeRoots[0].rotation.y = Math.sin(elapsed * 0.28) * 0.018;
    eyeRoots[1].rotation.y = Math.sin(elapsed * 0.28) * 0.018;
    guideSleeves[0].rotation.z = 0.43 + Math.sin(elapsed * 0.19) * 0.012;
    guideSleeves[1].rotation.z = -0.43 - Math.sin(elapsed * 0.19) * 0.012;
    guideHalo.rotation.z = elapsed * 0.042;
    guideHaloInner.rotation.z = Math.PI / 8 - elapsed * 0.031;

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

  const syncAnimationState = () => {
    const shouldAnimate = shouldPondAnimate({
      disposed,
      documentHidden: document.hidden,
      stageVisible,
    });

    if (!shouldAnimate) {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      lastRenderedAt = 0;
      clock.stop();
      return;
    }

    clock.start();
    lastRenderedAt = 0;
    if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
  };

  const onVisibilityChange = () => {
    syncAnimationState();
  };

  const onReducedMotionChange = () => {
    resize();
    syncAnimationState();
  };

  const resizeObserver = typeof ResizeObserver === "function"
    ? new ResizeObserver(() => resize())
    : null;

  const intersectionObserver = typeof IntersectionObserver === "function"
    ? new IntersectionObserver((entries) => {
      const entry = entries[0];
      stageVisible = Boolean(entry?.isIntersecting && entry.intersectionRatio > 0);
      syncAnimationState();
    }, { threshold: 0.01 })
    : null;

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    window.removeEventListener("resize", resize);
    stage.removeEventListener("pointermove", onPointerMove);
    stage.removeEventListener("pointerleave", onPointerLeave);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    if (typeof reducedMotion.removeEventListener === "function") {
      reducedMotion.removeEventListener("change", onReducedMotionChange);
    } else {
      reducedMotion.removeListener?.(onReducedMotionChange);
    }
    resizeObserver?.disconnect();
    intersectionObserver?.disconnect();
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
  stage.addEventListener("pointerleave", onPointerLeave, { passive: true });
  document.addEventListener("visibilitychange", onVisibilityChange);
  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", onReducedMotionChange);
  } else {
    reducedMotion.addListener?.(onReducedMotionChange);
  }
  resizeObserver?.observe(stage);
  intersectionObserver?.observe(stage);

  resize();
  syncAnimationState();
}
