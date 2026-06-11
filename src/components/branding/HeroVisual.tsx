"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Text,
  AdaptiveDpr,
  AdaptiveEvents,
  Edges,
} from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// --- 3D Components ---

const HighSpeedTrain = React.forwardRef<THREE.Group>((_, ref) => {
  const groupRef = useRef<THREE.Group>(null);
  const scanRef = useRef<THREE.Mesh>(null);
  const bodyMeshRef = useRef<THREE.Mesh>(null);
  
  React.useImperativeHandle(ref, () => groupRef.current!, []);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 1.5) * 0.03;

    // PHASE 1 — Digital Inspection Scan
    // Cyan scanning line, nose to rear, 2.5s duration, every 9s
    if (scanRef.current) {
      const scanCycle = 9;
      const scanProgress = (t % scanCycle) / scanCycle;
      if (scanProgress < 0.28) {
        const normalizedProgress = scanProgress / 0.28;
        const trainLength = 8.5;
        const startX = 2.5;
        const endX = startX - trainLength;
        scanRef.current.position.x = THREE.MathUtils.lerp(startX, endX, normalizedProgress);
        const scanMat = scanRef.current.material as THREE.MeshBasicMaterial;
        scanMat.opacity = Math.sin(normalizedProgress * Math.PI) * 0.08;
        scanRef.current.visible = true;
      } else {
        scanRef.current.visible = false;
      }
    }

    // PHASE 4 — Train Presence: subtle body shimmer
    // Very slow metalness variation suggesting active digital twin processing
    if (bodyMeshRef.current && bodyMeshRef.current.material) {
      const shimmer = Math.sin(t * 0.15) * 0.02;
      const bodyMat = bodyMeshRef.current.material as THREE.MeshStandardMaterial;
      bodyMat.metalness = 0.85 + shimmer;
      bodyMat.roughness = 0.15 - shimmer * 0.5;
    }
  });

  // --- Profile Shapes ---
  const leadShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-1.8, -0.32);
    s.lineTo(-1.8, 0.35);
    s.lineTo(0.2, 0.35);
    s.bezierCurveTo(1.8, 0.35, 2.8, 0.05, 3.2, -0.22);
    s.lineTo(3.2, -0.32);
    s.closePath();
    return s;
  }, []);

  const coachShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-1.6, -0.32);
    s.lineTo(-1.6, 0.35);
    s.lineTo(1.6, 0.35);
    s.lineTo(1.6, -0.32);
    s.closePath();
    return s;
  }, []);

  const extrudeSettings = { depth: 0.75, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 3 };
  
  const bodyMaterial = <meshStandardMaterial color="#0E1216" metalness={0.85} roughness={0.15} />;
  const windshieldMaterial = <meshStandardMaterial color="#060E12" emissive="#00D1FF" emissiveIntensity={2} metalness={0.9} roughness={0.05} transparent opacity={0.85} />;
  const blueprintLineMaterial = <meshBasicMaterial color="#00D1FF" transparent opacity={0.6} />;
  const separationLineMaterial = <meshBasicMaterial color="#00D1FF" transparent opacity={0.6} />;
  const equipmentMaterial = <meshStandardMaterial color="#14181D" metalness={0.8} roughness={0.4} />;

  return (
    <group ref={groupRef} position={[-1.5, 0, 0]}>
      {/* --- LEAD CAR --- */}
      <group position={[1.2, 0, -0.375]}>
        <mesh ref={bodyMeshRef}>
          <extrudeGeometry args={[leadShape, extrudeSettings]} />
          {bodyMaterial}
          <Edges color="#00D1FF" threshold={20} />
        </mesh>
        
        {/* Lead Car Passenger Windows - Individual CAD blueprint outlines */}
        {/* Right side (camera-facing) - 8 windows */}
        {[-1.25, -0.9, -0.55, -0.2, 0.15, 0.5, 0.85, 1.2].map((x) => (
          <mesh key={`lead-window-r-${x}`} position={[x, 0.18, 0.768]}>
            <planeGeometry args={[0.28, 0.22]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges color="#00D1FF" />
          </mesh>
        ))}
        {/* Left side - 8 windows */}
        {[-1.25, -0.9, -0.55, -0.2, 0.15, 0.5, 0.85, 1.2].map((x) => (
          <mesh key={`lead-window-l-${x}`} position={[x, 0.18, -0.018]}>
            <planeGeometry args={[0.28, 0.22]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges color="#00D1FF" />
          </mesh>
        ))}

        {/* Aerodynamic Cockpit Windshield - Dark graphite with thin cyan outline */}
        <group position={[1.6, 0.22, 0.375]} rotation={[0, 0, -Math.PI / 10]}>
          <mesh>
            <boxGeometry args={[0.85, 0.22, 0.7]} />
            {windshieldMaterial}
            <Edges color="#00D1FF" />
          </mesh>
          {/* Thin cyan outline only */}
          <mesh>
            <boxGeometry args={[0.87, 0.24, 0.72]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges color="#00D1FF" />
          </mesh>
        </group>

        {/* Coach Door Outlines - Blueprint linework only (right side) */}
        <group position={[-1.3, -0.02, 0.77]}>
          {/* Door frame rectangle */}
          <mesh>
            <planeGeometry args={[0.45, 0.55]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges color="#00D1FF" />
          </mesh>
          {/* Vertical divider */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <planeGeometry args={[0.55, 0.015]} />
            {blueprintLineMaterial}
          </mesh>
          {/* Horizontal divider */}
          <mesh position={[0, 0.12, 0]}>
            <planeGeometry args={[0.45, 0.015]} />
            {blueprintLineMaterial}
          </mesh>
        </group>
      </group>

      {/* --- SECOND COACH --- */}
      <group position={[-2.1, 0, -0.375]}>
        <mesh>
          <extrudeGeometry args={[coachShape, extrudeSettings]} />
          {bodyMaterial}
          <Edges color="#00D1FF" threshold={20} />
        </mesh>
        
        {/* Coach Separation Line - Distinct articulation joint */}
        <mesh position={[-3.7, -0.2, 0]}>
          <boxGeometry args={[0.1, 0.75, 0.85]} />
          {separationLineMaterial}
          <Edges color="#00D1FF" />
        </mesh>
        
        {/* Second Coach Passenger Windows - Individual CAD blueprint outlines */}
        {/* Right side (camera-facing) - 10 windows */}
        {[-1.45, -1.1, -0.75, -0.4, -0.05, 0.3, 0.65, 1.0, 1.35, 1.7].map((x) => (
          <mesh key={`coach2-window-r-${x}`} position={[x, 0.18, 0.768]}>
            <planeGeometry args={[0.28, 0.22]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges color="#00D1FF" />
          </mesh>
        ))}
        {/* Left side - 10 windows */}
        {[-1.45, -1.1, -0.75, -0.4, -0.05, 0.3, 0.65, 1.0, 1.35, 1.7].map((x) => (
          <mesh key={`coach2-window-l-${x}`} position={[x, 0.18, -0.018]}>
            <planeGeometry args={[0.28, 0.22]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges color="#00D1FF" />
          </mesh>
        ))}

        {/* Coach Door Outlines - Blueprint linework only (right side, 2 doors) */}
        <group position={[-1.3, -0.02, 0.77]}>
          <mesh>
            <planeGeometry args={[0.45, 0.55]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges color="#00D1FF" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <planeGeometry args={[0.55, 0.015]} />
            {blueprintLineMaterial}
          </mesh>
          <mesh position={[0, 0.12, 0]}>
            <planeGeometry args={[0.45, 0.015]} />
            {blueprintLineMaterial}
          </mesh>
        </group>
        <group position={[1.3, -0.02, 0.77]}>
          <mesh>
            <planeGeometry args={[0.45, 0.55]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges color="#00D1FF" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <planeGeometry args={[0.55, 0.015]} />
            {blueprintLineMaterial}
          </mesh>
          <mesh position={[0, 0.12, 0]}>
            <planeGeometry args={[0.45, 0.015]} />
            {blueprintLineMaterial}
          </mesh>
        </group>

        {/* Roof Equipment Layer (HVAC + Pantograph Base) */}
        <group position={[0, 0.38, 0.375]}>
          {/* Main Equipment Hatch */}
          <mesh>
            <boxGeometry args={[2.5, 0.08, 0.55]} />
            {equipmentMaterial}
            <Edges color="#3A7AB8" />
          </mesh>
          {/* HVAC Outlines */}
          <mesh position={[-0.8, 0.05, 0]}>
            <boxGeometry args={[0.6, 0.05, 0.4]} />
            {equipmentMaterial}
            <Edges color="#3A7AB8" />
          </mesh>
          <mesh position={[0.8, 0.05, 0]}>
            <boxGeometry args={[0.6, 0.05, 0.4]} />
            {equipmentMaterial}
            <Edges color="#3A7AB8" />
          </mesh>
        </group>
      </group>

      {/* Coach Separation Line - Distinct articulation joint (between 2nd and 3rd) */}
      <mesh position={[-5.0, -0.2, 0]}>
        <boxGeometry args={[0.1, 0.75, 0.85]} />
        {separationLineMaterial}
        <Edges color="#00D1FF" />
      </mesh>

      {/* --- REAR COACH (Partial) --- */}
      <group position={[-5.4, 0, -0.375]}>
        <mesh>
          <extrudeGeometry args={[coachShape, extrudeSettings]} />
          {bodyMaterial}
          <Edges color="#00D1FF" threshold={20} />
        </mesh>
        {/* Rear Coach Passenger Windows - Individual CAD blueprint outlines */}
        {/* Right side (camera-facing) - 6 windows */}
        {[-0.8, -0.4, 0.0, 0.4, 0.8, 1.2].map((x) => (
          <mesh key={`rear-window-r-${x}`} position={[x, 0.18, 0.768]}>
            <planeGeometry args={[0.28, 0.22]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges color="#00D1FF" />
          </mesh>
        ))}
        {/* Left side - 6 windows */}
        {[-0.8, -0.4, 0.0, 0.4, 0.8, 1.2].map((x) => (
          <mesh key={`rear-window-l-${x}`} position={[x, 0.18, -0.018]}>
            <planeGeometry args={[0.28, 0.22]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges color="#00D1FF" />
          </mesh>
        ))}
      </group>

      {/* --- BOGIES (Mechanical Grounding) --- */}
      <group position={[0, -0.38, 0]}>
        {[2.5, 0, -2.5, -5].map((x) => (
          <group key={x} position={[x, 0, 0]}>
            {/* Main Bogie Frame */}
            <mesh>
              <boxGeometry args={[0.8, 0.15, 0.7]} />
              <meshBasicMaterial color="#07090C" />
              <Edges color="#14181D" />
            </mesh>
            {/* Wheel Indication */}
            <mesh position={[0.25, -0.05, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 0.1, 8]} />
              <meshBasicMaterial color="#14181D" />
            </mesh>
            <mesh position={[-0.25, -0.05, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 0.1, 8]} />
              <meshBasicMaterial color="#14181D" />
            </mesh>
          </group>
        ))}
      </group>

      {/* Train Scan Effect - subtle cyan scan line */}
      <mesh
        ref={scanRef}
        position={[2.5, 0.45, 0]}
        visible={false}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[0.12, 0.8]} />
        <meshBasicMaterial
          color="#00D1FF"
          transparent
          opacity={0}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
});

const GlowingRails = React.forwardRef<THREE.Group>((_, ref) => {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef<(THREE.Mesh | null)[]>([null, null]);
  
  React.useImperativeHandle(ref, () => groupRef.current!, []);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // PHASE 2 — Rail Data Flow
    // Small cyan pulse along rail alignment, every 6s, very subtle
    const pulseCycle = 6;
    const pulseProgress = (t % pulseCycle) / pulseCycle;
    if (pulseProgress < 0.33) {
      const normalizedProgress = pulseProgress / 0.33;
      const startX = 10;
      const endX = -10;
      const currentX = THREE.MathUtils.lerp(startX, endX, normalizedProgress);
      const opacity = Math.sin(normalizedProgress * Math.PI) * 0.12;
      pulseRef.current.forEach((pulse, i) => {
        if (pulse) {
          pulse.position.x = currentX;
          pulse.position.z = i === 0 ? 0.4 : -0.4;
          const pulseMat = pulse.material as THREE.MeshBasicMaterial;
          pulseMat.opacity = opacity;
          pulse.visible = true;
        }
      });
    } else {
      pulseRef.current.forEach((pulse) => {
        if (pulse) pulse.visible = false;
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* Left Rail */}
      <mesh position={[0, 0, 0.4]}>
        <boxGeometry args={[20, 0.05, 0.05]} />
        <meshStandardMaterial emissive="#00D1FF" emissiveIntensity={2.2} color="#00D1FF" />
      </mesh>
      {/* Right Rail */}
      <mesh position={[0, 0, -0.4]}>
        <boxGeometry args={[20, 0.05, 0.05]} />
        <meshStandardMaterial emissive="#00D1FF" emissiveIntensity={2.2} color="#00D1FF" />
      </mesh>
      
      {/* Rail Data Pulses - small intelligence flow indicators */}
      <mesh
        ref={(el) => (pulseRef.current[0] = el!)}
        position={[10, 0.03, 0.4]}
        visible={false}
      >
        <boxGeometry args={[0.3, 0.06, 0.06]} />
        <meshBasicMaterial color="#00D1FF" transparent opacity={0} depthWrite={false} />
      </mesh>
      <mesh
        ref={(el) => (pulseRef.current[1] = el!)}
        position={[10, 0.03, -0.4]}
        visible={false}
      >
        <boxGeometry args={[0.3, 0.06, 0.06]} />
        <meshBasicMaterial color="#00D1FF" transparent opacity={0} depthWrite={false} />
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
});

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

const OperationalNodes = React.forwardRef<THREE.Group>((_, ref) => {
  const groupRef = useRef<THREE.Group>(null);
  const labels = [
    { text: "CONTRACT_INTEL", pos: [2.5, 2, 2] },
    { text: "QUALITY_MIS", pos: [-2.5, 2, -1] },
    { text: "SCHEDULE_SYNC", pos: [-3, 1, 3] },
    { text: "DOC_ENGINE", pos: [3, 2, -2] },
  ];
  const textRefs = useRef<(THREE.Mesh | null)[]>([]);
  const sphereRefs = useRef<(THREE.Mesh | null)[]>([]);
  
  React.useImperativeHandle(ref, () => groupRef.current!, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // PHASE 3 — Node Breathing
    // Opacity pulse only, ±12%, very slow (6s cycle), no scaling
    const breathCycle = 6;
    const breathProgress = (t % breathCycle) / breathCycle;
    const breathFactor = 1 + Math.sin(breathProgress * Math.PI * 2) * 0.12;
    
    textRefs.current.forEach((ref) => {
      if (ref) {
        const mat = ref.material as THREE.Material;
        if ('opacity' in mat) mat.opacity = 0.7225 * breathFactor;
      }
    });
    sphereRefs.current.forEach((ref) => {
      if (ref) {
        const mat = ref.material as THREE.MeshStandardMaterial;
        mat.opacity = 0.7225 * breathFactor;
        mat.emissiveIntensity = 4.25 * breathFactor;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {labels.map((l, i) => (
        <group key={i}>
          <Text
            ref={(el) => (textRefs.current[i] = el!)}
            position={l.pos as any}
            fontSize={0.17}
            color="#00D1FF"
            anchorX="center"
            anchorY="middle"
            {...({ opacity: 0.7225 } as any)}
          >
            {l.text}
          </Text>
          <mesh
            ref={(el) => (sphereRefs.current[i] = el!)}
            position={[l.pos[0], l.pos[1] - 0.4, l.pos[2]]}
          >
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial emissive="#00D1FF" emissiveIntensity={4.25} color="#00D1FF" transparent opacity={0.7225} />
          </mesh>
        </group>
      ))}
    </group>
  );
});

function SceneContent() {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const gridRef = useRef<THREE.GridHelper>(null);
  const railsRef = useRef<THREE.Group>(null);
  const trainRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Group>(null);
  const [entryProgress, setEntryProgress] = React.useState(0);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Subtle mouse parallax for the model only
    const x = state.mouse.x * 0.4;
    const y = state.mouse.y * 0.4;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y, 0.05);

    // PHASE 5 — Hero Entry Animation
    // Staggered fade-in over 1.8s: grid → rails → train → labels → HUD
    if (entryProgress < 1) {
      const newProgress = Math.min(1, t / 1.8);
      setEntryProgress(newProgress);
    }

    // Animate entry opacity for each element group
    const gridOpacity = THREE.MathUtils.clamp((entryProgress - 0.0) / 0.25, 0, 1);
    const railsOpacity = THREE.MathUtils.clamp((entryProgress - 0.15) / 0.3, 0, 1);
    const trainOpacity = THREE.MathUtils.clamp((entryProgress - 0.35) / 0.35, 0, 1);
    const nodesOpacity = THREE.MathUtils.clamp((entryProgress - 0.6) / 0.3, 0, 1);

    if (gridRef.current) {
      const gridMat = gridRef.current.material as THREE.Material;
      gridMat.opacity = gridOpacity * 0.5;
    }
    if (railsRef.current) railsRef.current.children.forEach((child) => {
      if ('material' in child) {
        const childMat = (child as THREE.Mesh).material as THREE.Material;
        if ('opacity' in childMat) childMat.opacity = railsOpacity;
      }
      if (child.children) child.children.forEach((c) => {
        if ('material' in c) {
          const cMat = (c as THREE.Mesh).material as THREE.Material;
          if ('opacity' in cMat) cMat.opacity = railsOpacity;
        }
      });
    });
    if (trainRef.current) trainRef.current.traverse((obj) => {
      if ('material' in obj) {
        const objMat = (obj as THREE.Mesh).material as THREE.Material;
        if ('opacity' in objMat) objMat.opacity = trainOpacity;
      }
    });
    if (nodesRef.current) nodesRef.current.traverse((obj) => {
      if ('material' in obj) {
        const objMat = (obj as THREE.Mesh).material as THREE.Material;
        if ('opacity' in objMat) objMat.opacity = nodesOpacity * 0.7225;
      }
    });
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={35} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#00D1FF" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={3} color="#3A7AB8" />

      {/* Ambient Depth - subtle atmospheric separation layers */}
      <mesh position={[0, 0, -15]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[60, 60]} />
        <meshBasicMaterial
          color="#0A0D10"
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[0, -5, -20]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[80, 80]} />
        <meshBasicMaterial
          color="#0A0D10"
          transparent
          opacity={0.1}
          depthWrite={false}
        />
      </mesh>

      <group ref={groupRef} position={[0, 1.38, 0]}>
        <gridHelper 
          ref={gridRef} 
          args={[100, 50, "#252D38", "#14181D"]} 
          position={[0, -0.65, 0]} 
        />
        <GlowingRails ref={railsRef} />
        <HighSpeedTrain ref={trainRef} />
        <DataStreams />
        <OperationalNodes ref={nodesRef} />
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
