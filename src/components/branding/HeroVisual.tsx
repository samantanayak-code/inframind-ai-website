"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Float,
  Text,
  AdaptiveDpr,
  AdaptiveEvents,
  Edges,
} from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// --- 3D Components ---

function HighSpeedTrain() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 1.5) * 0.03;
  });

  const bodyMaterial = <meshStandardMaterial color="#0A0D10" metalness={0.9} roughness={0.1} transparent opacity={0.95} />;
  const windowMaterial = <meshStandardMaterial emissive="#00D1FF" emissiveIntensity={2} color="#00D1FF" transparent opacity={0.8} />;
  const accentMaterial = <meshStandardMaterial color="#14181D" metalness={1} />;

  return (
    <group ref={groupRef}>
      {/* --- LEAD CAR --- */}
      <group position={[1.5, 0, 0]}>
        {/* Main Body (Lead) */}
        <mesh position={[-0.5, 0, 0]}>
          <boxGeometry args={[2.5, 0.65, 0.85]} />
          {bodyMaterial}
          <Edges color="#00D1FF" threshold={15} />
        </mesh>
        
        {/* Aerodynamic Nose (Shinkansen Style) */}
        <group position={[0.75, -0.05, 0]}>
          {/* Base Taper */}
          <mesh position={[0.5, 0, 0]} rotation={[0, 0, -Math.PI / 12]}>
            <boxGeometry args={[1.5, 0.5, 0.8]} />
            {bodyMaterial}
            <Edges color="#00D1FF" threshold={10} />
          </mesh>
          {/* Tip (Extreme Taper) */}
          <mesh position={[1.4, -0.15, 0]} rotation={[0, 0, -Math.PI / 8]}>
            <boxGeometry args={[0.8, 0.25, 0.7]} />
            {bodyMaterial}
            <Edges color="#00D1FF" threshold={5} />
          </mesh>
        </group>

        {/* Window Band (Lead) */}
        <mesh position={[-0.4, 0.15, 0.43]}>
          <planeGeometry args={[2.2, 0.12]} />
          {windowMaterial}
        </mesh>
        <mesh position={[-0.4, 0.15, -0.43]}>
          <planeGeometry args={[2.2, 0.12]} />
          {windowMaterial}
        </mesh>

        {/* Cockpit Window */}
        <mesh position={[1.2, 0.2, 0.35]} rotation={[0, 0.4, 0]}>
          <planeGeometry args={[0.4, 0.15]} />
          {windowMaterial}
        </mesh>
        <mesh position={[1.2, 0.2, -0.35]} rotation={[0, -0.4, 0]}>
          <planeGeometry args={[0.4, 0.15]} />
          {windowMaterial}
        </mesh>
      </group>

      {/* --- SECOND COACH --- */}
      <group position={[-1.7, 0, 0]}>
        <mesh>
          <boxGeometry args={[3.2, 0.65, 0.85]} />
          {bodyMaterial}
          <Edges color="#00D1FF" threshold={15} />
        </mesh>
        {/* Window Band */}
        <mesh position={[0, 0.15, 0.43]}>
          <planeGeometry args={[3, 0.12]} />
          {windowMaterial}
        </mesh>
        <mesh position={[0, 0.15, -0.43]}>
          <planeGeometry args={[3, 0.12]} />
          {windowMaterial}
        </mesh>
        {/* Roof Detail (Pantograph Base) */}
        <mesh position={[0, 0.35, 0]}>
          <boxGeometry args={[1.5, 0.05, 0.6]} />
          {accentMaterial}
          <Edges color="#3A7AB8" />
        </mesh>
      </group>

      {/* --- REAR COACH (Partial) --- */}
      <group position={[-4.8, 0, 0]}>
        <mesh>
          <boxGeometry args={[2.8, 0.65, 0.85]} />
          {bodyMaterial}
          <Edges color="#00D1FF" threshold={15} />
        </mesh>
        <mesh position={[0, 0.15, 0.43]}>
          <planeGeometry args={[2.5, 0.12]} />
          {windowMaterial}
        </mesh>
      </group>

      {/* --- BOGIES (Simplified) --- */}
      <group position={[0, -0.35, 0]}>
        {[2, 0, -2, -4].map((x) => (
          <group key={x} position={[x, 0, 0]}>
            <mesh position={[0, 0, 0.3]}>
              <boxGeometry args={[0.6, 0.15, 0.2]} />
              <meshBasicMaterial color="#14181D" />
            </mesh>
            <mesh position={[0, 0, -0.3]}>
              <boxGeometry args={[0.6, 0.15, 0.2]} />
              <meshBasicMaterial color="#14181D" />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

function GlowingRails() {
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
    { text: "CONTRACT_INTEL", pos: [2.5, 2, 2] },
    { text: "QUALITY_MIS", pos: [-2.5, 2, -1] },
    { text: "SCHEDULE_SYNC", pos: [-3, 1, 3] },
    { text: "DOC_ENGINE", pos: [3, 2, -2] },
  ];

  return (
    <group>
      {labels.map((l, i) => (
        <Float key={i} speed={3} rotationIntensity={0.5} floatIntensity={2}>
          <Text
            position={l.pos as any}
            fontSize={0.25}
            color="#00D1FF"
            anchorX="center"
            anchorY="middle"
          >
            {l.text}
          </Text>
          <mesh position={[l.pos[0], l.pos[1] - 0.4, l.pos[2]]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial emissive="#00D1FF" emissiveIntensity={5} color="#00D1FF" />
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
    // Subtle mouse parallax for the model only
    const x = state.mouse.x * 0.4;
    const y = state.mouse.y * 0.4;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y, 0.05);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={35} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#00D1FF" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={3} color="#3A7AB8" />

      <group ref={groupRef} position={[0, 1.3, 0]}>
        <HighSpeedTrain />
        <GlowingRails />
        <DataStreams />
        <OperationalNodes />
        <gridHelper args={[100, 50, "#252D38", "#14181D"]} position={[0, -0.65, 0]} />
      </group>
    </>
  );
}

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto rounded-[var(--radius-xl)] overflow-hidden border border-white/10 bg-[#0A0D10] shadow-2xl">
      <div className="absolute inset-0 z-0">
        <Canvas
          shadows
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <color attach="background" args={["#0A0D10"]} />
          <fog attach="fog" args={["#0A0D10", 10, 30]} />
          
          <Suspense fallback={null}>
            <SceneContent />
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay UI elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0A0D10] opacity-50" />
        
        {/* Animated HUD Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute top-6 left-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-white font-bold opacity-60">System Online</span>
          </div>
          <div className="text-xs font-mono text-[var(--color-primary)] uppercase tracking-tighter">Track_Pkg_T3_Active</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-right"
        >
          <div className="text-[10px] uppercase tracking-widest text-white font-bold opacity-60 mb-1">Intelligence Layer</div>
          <div className="text-xs font-mono text-[var(--color-primary)] uppercase tracking-tighter">FIDIC_Clause_Monitor_V2</div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-20 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
    </div>
  );
}
