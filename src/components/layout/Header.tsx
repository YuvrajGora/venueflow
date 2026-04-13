"use client";

import { Bell, UserCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-dark-900/60 border-b border-white/5"
    >
      <div className="flex flex-col">
        <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          Venue<span className="text-brand-500">Flow</span>
        </h1>
        <span className="text-xs text-brand-100/60 font-medium">
          Section 114 • Row G
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
          <Bell className="w-5 h-5 text-gray-300" />
          <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_8px_rgba(176,38,255,0.8)]" />
        </button>
        <button className="p-1 rounded-full bg-gradient-to-tr from-brand-500 to-neon-blue">
          <UserCircle className="w-8 h-8 text-white rounded-full bg-dark-900 p-[2px]" />
        </button>
      </div>
    </motion.header>
  );
}
