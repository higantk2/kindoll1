'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AutoGame() {
  // Simple "Ball" animation bouncing around
  return (
    <div className="w-full max-w-md mx-auto mt-12 p-4 border border-white/10 rounded-xl bg-slate-900/50 backdrop-blur-sm overflow-hidden relative" style={{ height: '150px' }}>
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <span className="text-4xl font-bold tracking-widest">LOADING SKILLS...</span>
      </div>
      
      {/* Paddle Left */}
      <motion.div 
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute left-4 top-4 w-2 h-12 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"
      />

      {/* Paddle Right */}
      <motion.div 
        animate={{ y: [60, 0, 60] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute right-4 top-4 w-2 h-12 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"
      />

      {/* Ball */}
      <motion.div
        animate={{ 
          x: [-150, 150, -150], 
          y: [0, 40, -40, 0],
          backgroundColor: ["#6366f1", "#a855f7", "#6366f1"]
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full shadow-[0_0_20px_currentColor]"
      />
    </div>
  );
}