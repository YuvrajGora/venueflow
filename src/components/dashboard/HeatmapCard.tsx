"use client";

import { motion } from "framer-motion";
import { Navigation, Users } from "lucide-react";

export function HeatmapCard() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="p-1 rounded-3xl bg-gradient-to-b from-dark-700/50 to-dark-800 border border-white/5 shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      <div className="p-5 rounded-[1.4rem] bg-dark-900/40 relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Navigation className="w-5 h-5 text-brand-400" />
              Live Venue Map
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Find shortest routes & avoid crowds
            </p>
          </div>
          <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-green-400">Live</span>
          </div>
        </div>

        {/* Abstract Heatmap Visualization */}
        <div className="h-40 w-full rounded-2xl bg-dark-800 border border-white/5 relative overflow-hidden flex items-center justify-center">
          {/* Simulated zones */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-[20%] left-[20%] w-24 h-24 rounded-full bg-red-500/20 blur-2xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full bg-brand-500/20 blur-2xl"
          />

          <div className="relative z-10 flex flex-col items-center gap-2 bg-dark-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
            <Users className="w-6 h-6 text-gray-300" />
            <span className="text-sm font-medium text-white">Zone C: Heavy Traffic</span>
            <span className="text-xs text-brand-400">Rerouting suggested</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
