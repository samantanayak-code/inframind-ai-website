"use client";

import { motion } from "framer-motion";

const CENTER_X = 400;
const ADMIN_Y = 160;
const CC_Y = 55;
const DEPT_Y = 320;

const departments = [
  { label: "Quality", x: 80 },
  { label: "Safety", x: 171 },
  { label: "Design", x: 263 },
  { label: "Execution", x: 354 },
  { label: "Planning", x: 446 },
  { label: "Contracts", x: 537 },
  { label: "Accounts", x: 629 },
  { label: "Finance", x: 720 },
];

export function NotificationNetwork() {
  return (
    <div className="w-full aspect-video bg-[var(--color-surface-subtle)] rounded-[var(--radius-xl)] border border-[var(--color-border)] relative overflow-hidden group">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--color-primary),transparent)]" />

      <svg viewBox="0 0 800 400" className="w-full h-full relative z-10 p-10">
        {/* Connection lines: ADMIN → each department */}
        {departments.map((dept, i) => (
          <motion.line
            key={`conn-adm-${i}`}
            x1={CENTER_X}
            y1={ADMIN_Y}
            x2={dept.x}
            y2={DEPT_Y}
            stroke="var(--color-primary)"
            strokeWidth="1"
            strokeOpacity="0.15"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: i * 0.08 }}
          />
        ))}

        {/* Connection line: CC TO MANAGEMENT → ADMIN */}
        <motion.line
          x1={CENTER_X}
          y1={CC_Y}
          x2={CENTER_X}
          y2={ADMIN_Y}
          stroke="var(--color-primary)"
          strokeWidth="1"
          strokeOpacity="0.15"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        {/* Data particles: ADMIN → department → ADMIN */}
        {departments.map((dept, i) => (
          <motion.circle
            key={`particle-${i}`}
            r="2.5"
            fill="var(--color-primary)"
            initial={{ opacity: 0, cx: CENTER_X, cy: ADMIN_Y }}
            animate={{
              cx: [CENTER_X, dept.x, CENTER_X],
              cy: [ADMIN_Y, DEPT_Y, ADMIN_Y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "linear",
            }}
            style={{ filter: "drop-shadow(0 0 4px var(--color-primary))" }}
          />
        ))}

        {/* Data particle: CC → ADMIN → CC */}
        <motion.circle
          r="2.5"
          fill="var(--color-primary)"
          initial={{ opacity: 0, cx: CENTER_X, cy: CC_Y }}
          animate={{
            cx: [CENTER_X, CENTER_X, CENTER_X],
            cy: [CC_Y, ADMIN_Y, CC_Y],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 2.0,
            ease: "linear",
          }}
          style={{ filter: "drop-shadow(0 0 4px var(--color-primary))" }}
        />

        {/* CC TO MANAGEMENT node */}
        <g>
          <motion.circle
            cx={CENTER_X}
            cy={CC_Y}
            r="5"
            fill="var(--color-primary)"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.text
            x={CENTER_X}
            y={CC_Y - 14}
            textAnchor="middle"
            fill="var(--color-text-secondary)"
            fontSize="8"
            fontWeight="bold"
            className="uppercase tracking-widest pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            CC to Management
          </motion.text>
        </g>

        {/* ADMIN node — notification orchestration engine */}
        <g>
          <motion.circle
            cx={CENTER_X}
            cy={ADMIN_Y}
            r="7"
            fill="var(--color-primary)"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 8px var(--color-primary))" }}
          />
          <motion.text
            x={CENTER_X}
            y={ADMIN_Y + 20}
            textAnchor="middle"
            fill="var(--color-text-secondary)"
            fontSize="10"
            fontWeight="bold"
            className="uppercase tracking-widest pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Admin
          </motion.text>
        </g>

        {/* Department nodes */}
        {departments.map((dept, i) => (
          <g key={`dept-${i}`}>
            <motion.circle
              cx={dept.x}
              cy={DEPT_Y}
              r="4"
              fill="var(--color-primary)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
            />
            <motion.text
              x={dept.x}
              y={DEPT_Y + 18}
              textAnchor="middle"
              fill="var(--color-text-secondary)"
              fontSize="8"
              fontWeight="bold"
              className="uppercase tracking-widest pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.5 }}
            >
              {dept.label}
            </motion.text>
          </g>
        ))}
      </svg>

      {/* Panel title */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-white font-bold opacity-60">Live Notification Network</span>
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-primary)] font-bold">– NCR Automation Engine</span>
      </div>

      {/* Description */}
      <div className="absolute bottom-5 left-6 right-6">
        <p className="text-[10px] leading-relaxed text-[var(--color-text-secondary)] opacity-60">
          Every stakeholder gets the right email at the right stage — automatically — so no one misses a deadline, no one manually forwards emails, and management always has visibility.
        </p>
      </div>
    </div>
  );
}
