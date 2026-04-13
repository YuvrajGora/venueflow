"use client";

import { motion } from "framer-motion";
import { AlertCircle, Flame, ShieldAlert } from "lucide-react";

export function QuickAlerts() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="p-4 rounded-3xl bg-dark-800/80 border border-white/5 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 mb-3">
        <AlertCircle className="w-4 h-4 text-brand-400" />
        <h3 className="text-sm font-semibold text-white">Live Updates</h3>
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-3 p-3 rounded-2xl bg-gradient-to-r from-neon-purple/10 to-transparent border border-neon-purple/20">
          <Flame className="w-5 h-5 text-neon-purple shrink-0" />
          <div>
            <p className="text-sm text-white font-medium">Half-time Show Starting Soon</p>
            <p className="text-xs text-gray-400 mt-1">Get back to your seats in 5 minutes!</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-2xl bg-red-500/10 border border-red-500/20">
          <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
          <div>
             <p className="text-sm text-white font-medium">Exit B is congested</p>
             <p className="text-xs text-red-300 mt-1">Please use Exit C or A for a faster departure.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
