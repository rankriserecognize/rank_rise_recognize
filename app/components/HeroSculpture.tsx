"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// Individual Tactile Oat-Cream Stepped Plinth
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

  // Materials: Warm Oat-Cream Ceramic + Ink Black Bevel Outline
  const oatCreamMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#e9dfd2"),
        roughness: 0.35,
        metalness: 0.15,
      }),
    []
  );

  const inkEdgeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#202020"),
        roughness: 0.5,
        metalness: 0.1,
      }),
    []
  );

  return (
    <group position={[x, y, z]} rotation={[0, -angle + Math.PI / 2, 0]}>
      {/* Warm Oat Ceramic Plinth */}
      <mesh material={oatCreamMaterial} castShadow receiveShadow>
        <boxGeometry args={[1.15, stepHeight * 0.85, 0.48]} />
      </mesh>

      {/* Tactile Ink Edge Inlay */}
      <mesh
        material={inkEdgeMaterial}
        position={[0, stepHeight * 0.43, 0.235]}
        castShadow
      >
        <boxGeometry args={[1.16, 0.02, 0.025]} />
      </mesh>
    </group>
  );
}

// Ko-fi Warm Tactile Sculpture: Interactive Growth Steps + Cobalt Pop Ring
function SculptureContent() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const apexRef = useRef<THREE.Mesh>(null);

  const stepsCount = 9;

  // Signature Cobalt Pop Accent Ring (#72a4f2)
  const cobaltRingMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#72a4f2"),
        roughness: 0.25,
        metalness: 0.35,
        emissive: new THREE.Color("#2d4a7a"),
        emissiveIntensity: 0.15,
      }),
    []
  );

  // Ink Black Outline Meridian Ring (#202020)
  const inkRingMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#202020"),
        roughness: 0.4,
        metalness: 0.2,
      }),
    []
  );

  // Apex Cobalt Pop Marker
  const apexMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#72a4f2"),
        roughness: 0.2,
        metalness: 0.4,
        emissive: new THREE.Color("#355a96"),
        emissiveIntensity: 0.25,
      }),
    []
  );

  useFrame((state, delta) => {
    if (groupRef.current) {
      const targetRotationY = state.pointer.x * 0.45;
      const targetRotationX = -state.pointer.y * 0.22;

      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotationY + state.clock.getElapsedTime() * 0.14,
        2.5,
        delta
      );

      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotationX + 0.12,
        2.5,
        delta
      );
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
      ringRef.current.rotation.x += delta * 0.08;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.15;
      ring2Ref.current.rotation.z -= delta * 0.07;
    }

    if (apexRef.current) {
      apexRef.current.rotation.y += delta * 0.3;
      apexRef.current.rotation.x += delta * 0.18;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.05, 0]}>
      {/* Central Ink Axis Core */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <cylinderGeometry args={[0.16, 0.22, 2.7, 32]} />
        <meshStandardMaterial
          color="#202020"
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

      {/* 9 Ascending Plinths */}
      {Array.from({ length: stepsCount }).map((_, i) => (
        <SpiralStep
          key={i}
          index={i}
          total={stepsCount}
          radius={0.8}
          stepHeight={0.24}
        />
      ))}

      {/* Primary Cobalt Pop Accent Ring */}
      <mesh
        ref={ringRef}
        material={cobaltRingMaterial}
        position={[0, 0.1, 0]}
        rotation={[Math.PI / 3.4, 0.35, 0]}
        castShadow
      >
        <torusGeometry args={[1.88, 0.034, 24, 80]} />
      </mesh>

      {/* Secondary Ink Black Meridian Ring */}
      <mesh
        ref={ring2Ref}
        material={inkRingMaterial}
        position={[0, 0.1, 0]}
        rotation={[-Math.PI / 4, -0.45, 0.25]}
        castShadow
      >
        <torusGeometry args={[1.52, 0.022, 20, 72]} />
      </mesh>

      {/* Floating Zenith Octahedron */}
      <Float speed={2.4} rotationIntensity={0.35} floatIntensity={0.5}>
        <mesh
          ref={apexRef}
          material={apexMaterial}
          position={[0, 1.45, 0]}
          castShadow
        >
          <octahedronGeometry args={[0.32, 0]} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroSculpture() {
  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[520px] relative select-none">
      <Canvas
        camera={{ position: [0, 1.1, 4.4], fov: 38 }}
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.8]}
      >
        {/* Warm Studio Light */}
        <ambientLight intensity={1.3} color="#fbf7f0" />

        {/* Key Directional Sunlight */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={2.2}
          color="#ffffff"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        {/* Soft Cobalt Tint Fill Light */}
        <directionalLight
          position={[-6, 4, -4]}
          intensity={1.2}
          color="#aac9f7"
        />

        {/* 3D Composition */}
        <SculptureContent />

        {/* Flat Sticker Contact Ground */}
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={7}
          blur={2.2}
          far={3.5}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}
