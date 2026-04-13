"use client";

import { Home, Map, Coffee, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const NAV_ITEMS = [
  { id: "home", icon: Home, label: "Home" },
  { id: "map", icon: Map, label: "Map" },
  { id: "food", icon: Coffee, label: "Food" },
  { id: "settings", icon: Settings, label: "Settings" },
];

function BottomNavContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "home";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 py-4 pb-8 bg-gradient-to-t from-dark-900 via-dark-900/95 to-transparent pointer-events-none">
      <nav className="mx-auto max-w-sm bg-dark-800/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => router.push(`/?tab=${item.id}`, { scroll: false })}
              className={cn(
                "relative flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all duration-300",
                isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
              )}
              aria-label={item.label}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 bg-white/5 rounded-2xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon className="w-6 h-6 z-10" />
              {isActive && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -bottom-1 w-1 h-1 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export function BottomNav() {
  return (
    <Suspense fallback={<div />}>
      <BottomNavContent />
    </Suspense>
  );
}
