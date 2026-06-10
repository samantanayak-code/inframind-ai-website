"use client";

import { motion } from "framer-motion";

export function InfrastructureNetwork() {
  const nodes = [
    { x: 100, y: 100, label: "Live Site" },
    { x: 400, y: 50, label: "Digital Twin" },
    { x: 700, y: 100, label: "Contract Engine" },
    { x: 400, y: 250, label: "Insight Hub" },
    { x: 100, y: 200, label: "Employer" },
    { x: 700, y: 200, label: "Contractor" },
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 0], [1, 3], [4, 1], [5, 2], [3, 4], [3, 5]
  ];

  return (
    <div className="w-full aspect-video bg-[var(--color-surface-subtle)] rounded-[var(--radius-xl)] border border-[var(--color-border)] relative overflow-hidden group">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--color-primary),transparent)]" />
      
      <svg viewBox="0 0 800 300" className="w-full h-full relative z-10 p-10">
        {/* Connections */}
        {connections.map(([start, end], i) => (
          <motion.line
            key={i}
            x1={nodes[start].x}
            y1={nodes[start].y}
            x2={nodes[end].x}
            y2={nodes[end].y}
            stroke="var(--color-primary)"
            strokeWidth="1"
            strokeOpacity="0.2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
          />
        ))}

        {/* Pulsing Beams */}
        {connections.slice(0, 4).map(([start, end], i) => (
          <motion.circle
            key={`beam-${i}`}
            r="2"
            fill="var(--color-primary)"
            initial={{ opacity: 0 }}
            animate={{ 
              cx: [nodes[start].x, nodes[end].x],
              cy: [nodes[start].y, nodes[end].y],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "linear"
            }}
            style={{ filter: "drop-shadow(0 0 5px var(--color-primary))" }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="var(--color-primary)"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: i * 0.1 }}
            />
            <motion.text
              x={node.x}
              y={node.y + 20}
              textAnchor="middle"
              fill="var(--color-text-secondary)"
              fontSize="10"
              fontWeight="bold"
              className="uppercase tracking-widest pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.5 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
      </svg>
      
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-white font-bold opacity-60">Live Intelligence Network</span>
      </div>
    </div>
  );
}
