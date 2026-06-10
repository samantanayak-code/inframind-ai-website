"use client";

import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10 blur-[120px] rounded-full" />
      
      {/* Central "Core" */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        className="absolute inset-[15%] rounded-[var(--radius-xl)] bg-linear-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-3xl shadow-[var(--shadow-glow)] overflow-hidden"
      >
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0, 209, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 209, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Data "Pips" */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              x: [Math.random() * 100, Math.random() * 300],
              y: [Math.random() * 100, Math.random() * 300]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-[var(--color-primary)] rounded-full"
          />
        ))}

        {/* Floating "Product" Element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-1/2 h-1/2 rounded-[var(--radius-lg)] bg-[var(--color-elevated)] border border-[var(--color-primary)]/40 shadow-2xl p-4 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              <div className="h-2 w-16 bg-white/10 rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-white/10 rounded" />
              <div className="h-3 w-3/4 bg-white/10 rounded" />
            </div>
            <div className="h-8 w-full bg-[var(--color-primary)]/20 rounded border border-[var(--color-primary)]/30" />
          </motion.div>
        </div>
      </motion.div>

      {/* Orbiting Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-[var(--color-elevated)] border border-white/10 flex items-center justify-center backdrop-blur-sm">
          <div className="w-6 h-6 rounded bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/50" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-[var(--color-elevated)] border border-white/10 flex items-center justify-center backdrop-blur-sm">
          <div className="w-6 h-6 rounded bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/50" />
        </div>
      </motion.div>
    </div>
  );
}
