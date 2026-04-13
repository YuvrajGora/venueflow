"use client";

import { motion } from "framer-motion";
import { Coffee, Clock, ArrowRight } from "lucide-react";

export function ConcessionsCard() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="p-5 rounded-3xl bg-dark-800/80 border border-white/5 shadow-lg flex flex-col gap-4 backdrop-blur-sm"
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-400">
            <Coffee className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-white font-bold">Smart Order</h2>
            <p className="text-sm text-gray-400">Skip the lines</p>
          </div>
        </div>
      </div>

      <div className="bg-dark-900/60 rounded-2xl p-4 border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-dark-900/80 transition-colors">
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=200&auto=format&fit=crop" 
            alt="Burger and Fries" 
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-white">Classic Burger Combo</p>
            <div className="flex items-center gap-1 mt-1 text-xs text-brand-400">
              <Clock className="w-3 h-3" />
              <span>Est. completion: 4 mins</span>
            </div>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
        </div>
      </div>
    </motion.div>
  );
}
