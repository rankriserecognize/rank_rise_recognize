"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// Individual Architectural Ascending Step
function SpiralStep({
  index,
  total,
  radius,
  stepHeight,
}: {
  index: number;
  total: number;
  radius: number;
  stepHeight: number;
}) {
  const angle = (index / total) * Math.PI * 1.5;
  const x = Math.cos(angle) * (radius + index * 0.08);
  const z = Math.sin(angle) * (radius + index * 0.08);
  const y = (index - total / 2) * stepHeight;

  // Materials: Alabaster Stone + Inlaid Antique Bronze Edge
  const stoneMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#F3EEE6"),
        roughness: 0.38,
        metalness: 0.06,
      }),
    []
  );

  const bronzeInlay = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#C5A458"),
        roughness: 0.22,
        metalness: 0.88,
      }),
    []
  );

  return (
    <group position={[x, y, z]} rotation={[0, -angle + Math.PI / 2, 0]}>
      {/* Stone Plinth Step */}
      <mesh material={stoneMaterial} castShadow receiveShadow>
        <boxGeometry args={[1.1, stepHeight * 0.85, 0.45]} />
      </mesh>

      {/* Muted Antique Gold Trim Inlay */}
      <mesh
        material={bronzeInlay}
        position={[0, stepHeight * 0.43, 0.22]}
        castShadow
      >
        <boxGeometry args={[1.12, 0.02, 0.03]} />
      </mesh>
    </group>
  );
}

// Sculptural Composition: Ascending Spiral + Dual Recognition Rings + Apex Monolith
function SculptureContent() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const apexRef = useRef<THREE.Mesh>(null);

  const stepsCount = 9;

  // Antique Gold / Bronze Ring Material
  const goldRingMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#C9A658"),
        metalness: 0.92,
        roughness: 0.2,
      }),
    []
  );

  const bronzeRingMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#9C7D38"),
        metalness: 0.85,
        roughness: 0.28,
      }),
    []
  );

  const apexMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#E2C682"),
        metalness: 0.75,
        roughness: 0.18,
      }),
    []
  );

  useFrame((state, delta) => {
    // Smooth pointer damping
    if (groupRef.current) {
      const targetRotationY = state.pointer.x * 0.4;
      const targetRotationX = -state.pointer.y * 0.25;

      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotationY + state.clock.getElapsedTime() * 0.12,
        2.5,
        delta
      );

      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotationX + 0.15,
        2.5,
        delta
      );
    }

    // Elegant secondary rotations
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.18;
      ringRef.current.rotation.x += delta * 0.08;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.14;
      ring2Ref.current.rotation.z -= delta * 0.06;
    }

    if (apexRef.current) {
      apexRef.current.rotation.y += delta * 0.25;
      apexRef.current.rotation.x += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      {/* Central Axis Core: Column of Authority */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <cylinderGeometry args={[0.18, 0.25, 2.8, 32]} />
        <meshStandardMaterial
          color="#ECE6DC"
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* 9 Ascending Steps: Representing Rank & Rise */}
      {Array.from({ length: stepsCount }).map((_, i) => (
        <SpiralStep
          key={i}
          index={i}
          total={stepsCount}
          radius={0.8}
          stepHeight={0.24}
        />
      ))}

      {/* Primary Recognition Orbit Ring: AI Citations (ChatGPT/Gemini/Overviews) */}
      <mesh
        ref={ringRef}
        material={goldRingMaterial}
        position={[0, 0.1, 0]}
        rotation={[Math.PI / 3.5, 0.4, 0]}
        castShadow
      >
        <torusGeometry args={[1.85, 0.035, 24, 80]} />
      </mesh>

      {/* Secondary Orbital Meridian Ring */}
      <mesh
        ref={ring2Ref}
        material={bronzeRingMaterial}
        position={[0, 0.1, 0]}
        rotation={[-Math.PI / 4, -0.5, 0.3]}
        castShadow
      >
        <torusGeometry args={[1.5, 0.022, 20, 72]} />
      </mesh>

      {/* Floating Apex Zenith Monolith (Prism of Visibility) */}
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh
          ref={apexRef}
          material={apexMaterial}
          position={[0, 1.45, 0]}
          castShadow
        >
          <octahedronGeometry args={[0.3, 0]} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroSculpture() {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] relative select-none">
      <Canvas
        camera={{ position: [0, 1.2, 4.2], fov: 42 }}
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.8]}
      >
        {/* Warm Classical Studio Lighting */}
        <ambientLight intensity={1.1} color="#FAF6EE" />

        {/* Key Warm Sunlight / Tungsten Studio Light */}
        <directionalLight
          position={[4.5, 7, 4]}
          intensity={2.4}
          color="#FFF2DC"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />

        {/* Antique Bronze Rim Light */}
        <directionalLight
          position={[-4.5, 3.5, -3.5]}
          intensity={1.6}
          color="#D4AF57"
        />

        {/* Soft Under-fill for Sculptural Depth */}
        <pointLight position={[0, -2, 2]} intensity={0.5} color="#FAF7F2" />

        {/* The 3D Composition */}
        <SculptureContent />

        {/* Realistic Ambient Contact Shadow on Ivory Ground */}
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={8}
          blur={2.4}
          far={4}
          color="#524434"
        />
      </Canvas>
    </div>
  );
}
