"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Float,
  Text,
  MeshDistortMaterial,
  GradientTexture,
  AdaptiveDpr,
  AdaptiveEvents,
  Edges,
} from "@react-three/drei";
import * as THREE from "three";

// --- Components ---

function HighSpeedTrain() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Subtle float and vibration
    meshRef.current.position.y = Math.sin(t * 2) * 0.05;
  });

  return (
    <group ref={meshRef}>
      {/* Main Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 0.8, 1]} />
        <meshStandardMaterial color="#0A0D10" metalness={0.8} roughness={0.2} transparent opacity={0.9} />
        <Edges color="#00D1FF" threshold={15} />
      </mesh>
      
      {/* Front Nose */}
      <mesh position={[2.5, -0.1, 0]} rotation={[0, 0, -Math.PI / 8]}>
        <boxGeometry args={[1.5, 0.6, 0.95]} />
        <meshStandardMaterial color="#0A0D10" metalness={0.8} roughness={0.2} transparent opacity={0.9} />
        <Edges color="#00D1FF" threshold={15} />
      </mesh>

      {/* Windows / Detail */}
      <mesh position={[0.5, 0.2, 0.51]}>
        <planeGeometry args={[3, 0.2]} />
        <meshBasicMaterial color="#00D1FF" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0.5, 0.2, -0.51]}>
        <planeGeometry args={[3, 0.2]} />
        <meshBasicMaterial color="#00D1FF" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function GlowingRails() {
  const lineRef = useRef<THREE.LineSegments>(null);
  
  useFrame((state) => {
    if (!lineRef.current) return;
    // Scroll the texture offset to simulate movement if we used a texture, 
    // but here we just animate the group for simplicity in this pass
  });

  return (
    <group position={[0, -0.6, 0]}>
      {/* Left Rail */}
      <mesh position={[0, 0, 0.4]}>
        <boxGeometry args={[20, 0.05, 0.05]} />
        <meshStandardMaterial emissive="#00D1FF" emissiveIntensity={2} color="#00D1FF" />
      </mesh>
      {/* Right Rail */}
      <mesh position={[0, 0, -0.4]}>
        <boxGeometry args={[20, 0.05, 0.05]} />
        <meshStandardMaterial emissive="#00D1FF" emissiveIntensity={2} color="#00D1FF" />
      </mesh>
      
      {/* Sleepers */}
      {useMemo(() => [...Array(20)].map((_, i) => (
        <mesh key={i} position={[-10 + i * 1.5, -0.05, 0]}>
          <boxGeometry args={[0.1, 0.02, 1.2]} />
          <meshStandardMaterial color="#252D38" transparent opacity={0.5} />
        </mesh>
      )), [])}
    </group>
  );
}

function DataStreams() {
  const count = 40;
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < count; i++) {
      p.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 10
        ),
        speed: 0.05 + Math.random() * 0.1,
      });
    }
    return p;
  }, []);

  const refs = useRef<THREE.Group[]>([]);

  useFrame(() => {
    refs.current.forEach((ref, i) => {
      if (ref) {
        ref.position.x -= points[i].speed;
        if (ref.position.x < -10) ref.position.x = 10;
      }
    });
  });

  return (
    <group>
      {points.map((p, i) => (
        <group key={i} ref={(el) => (refs.current[i] = el!)} position={p.pos}>
          <mesh>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="#00D1FF" transparent opacity={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function OperationalNodes() {
  const labels = [
    { text: "CONTRACT", pos: [2, 1.5, 2] },
    { text: "QUALITY", pos: [-1, 2, -3] },
    { text: "SCHEDULE", pos: [-4, 1.2, 1] },
    { text: "DOCUMENTS", pos: [5, 2.5, -2] },
  ];

  return (
    <group>
      {labels.map((l, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Text
            position={l.pos as any}
            fontSize={0.2}
            color="#00D1FF"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/t64vAd_S_K-vVxFxsByv5q8.woff"
            anchorX="center"
            anchorY="middle"
          >
            {l.text}
          </Text>
          <mesh position={[l.pos[0], l.pos[1] - 0.3, l.pos[2]]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial emissive="#00D1FF" emissiveIntensity={1} color="#00D1FF" />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function SceneContent() {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Subtle mouse parallax
    const x = (state.mouse.x * viewport.width) / 20;
    const y = (state.mouse.y * viewport.height) / 20;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.1, 0.1);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.1, 0.1);
  });

  return (
    <group ref={groupRef}>
      <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />
      
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D1FF" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#3A7AB8" />

      {/* Main Elements */}
      <HighSpeedTrain />
      <GlowingRails />
      <DataStreams />
      <OperationalNodes />
      
      {/* Floor Grid */}
      <gridHelper args={[100, 50, "#252D38", "#14181D"]} position={[0, -0.65, 0]} />
    </group>
  );
}

export function TrainIntelligenceSystem() {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 2, 8], fov: 50 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#0A0D10"]} />
        <fog attach="fog" args={["#0A0D10", 5, 20]} />
        
        <React.Suspense fallback={null}>
          <SceneContent />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
        </React.Suspense>
      </Canvas>
      
      {/* Overlay Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-transparent to-[#0A0D10] opacity-50" />
    </div>
  );
}
