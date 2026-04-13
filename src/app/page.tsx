import { HeatmapCard } from "@/components/dashboard/HeatmapCard";
import { ConcessionsCard } from "@/components/dashboard/ConcessionsCard";
import { QuickAlerts } from "@/components/dashboard/QuickAlerts";
import * as motion from "framer-motion/client";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const resolvedParams = await searchParams;
  const currentTab = resolvedParams.tab || "home";

  return (
    <motion.div 
      key={currentTab}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6 py-6 max-w-lg px-4 mx-auto"
    >
      {currentTab === "home" && (
        <>
          <section>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Welcome back, <br/> <span className="text-brand-400">Alex</span>
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              National Championship Game • 45 mins to kickoff
            </p>
          </section>
          <section className="space-y-4">
            <HeatmapCard />
            <ConcessionsCard />
            <QuickAlerts />
          </section>
        </>
      )}

      {currentTab === "map" && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">Stadium Map</h2>
          <HeatmapCard />
          <div className="p-4 rounded-2xl bg-dark-800 border border-white/5">
             <h3 className="font-semibold text-white mb-2">Navigation Legend</h3>
             <ul className="text-sm text-gray-400 space-y-2">
               <li className="flex gap-2 items-center"><span className="w-3 h-3 bg-red-500/80 rounded-full" /> Heavy Congestion</li>
               <li className="flex gap-2 items-center"><span className="w-3 h-3 bg-brand-500/80 rounded-full" /> Minor Traffic</li>
               <li className="flex gap-2 items-center"><span className="w-3 h-3 bg-green-500/80 rounded-full" /> Clear Path</li>
             </ul>
          </div>
        </section>
      )}

      {currentTab === "food" && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">Concessions</h2>
          <ConcessionsCard />
          <div className="p-5 rounded-3xl bg-dark-800/50 border border-white/5">
            <h3 className="font-bold text-white mb-2">Previous Orders</h3>
            <p className="text-sm text-gray-400">Section 114 - Seat Delivery not available.</p>
          </div>
        </section>
      )}

      {currentTab === "settings" && (
        <section className="space-y-4 pt-10 text-center">
          <h2 className="text-2xl font-bold text-brand-400">Venue Profile</h2>
          <p className="text-gray-400">Alex - Ticket Holder</p>
        </section>
      )}

      {/* Spacer for bottom nav */}
      <div className="h-20" />
    </motion.div>
  );
}
