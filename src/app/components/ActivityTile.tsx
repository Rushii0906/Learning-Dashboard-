"use client";

import { motion } from "framer-motion";
import { Activity, Zap } from "lucide-react";

export default function ActivityTile() {
  const activityLevels = [
    20, 40, 60, 80, 100,
    60, 40, 20, 80, 100,
    60, 40, 20, 80, 100,
    40, 20, 60, 100, 80,
    20, 40, 60, 80, 100,
    40, 20, 60, 100, 80,
    20, 40, 60, 80, 100,
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-gradient-to-br
        from-zinc-900
        via-zinc-900
        to-black
        p-6
        shadow-[0_0_25px_rgba(16,185,129,0.08)]
      "
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Learning Activity
          </h2>

          <p className="text-zinc-400 mt-1">
            Last 35 Days
          </p>
        </div>

        <Activity
          size={24}
          className="text-emerald-400"
        />
      </div>

      <div className="grid grid-cols-7 gap-3">
        {activityLevels.map((level, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.02,
            }}
            className="h-6 w-6 rounded-md"
            style={{
              backgroundColor: `rgba(16,185,129,${
                level / 100
              })`,
            }}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-zinc-800 p-4">
          <p className="text-zinc-400 text-sm">
            Lessons Completed
          </p>

          <p className="mt-2 text-2xl font-bold text-white">
            48
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 p-4">
          <p className="text-zinc-400 text-sm">
            Study Hours
          </p>

          <p className="mt-2 text-2xl font-bold text-white">
            124h
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 p-4">
          <div className="flex items-center gap-2">
            <Zap
              size={16}
              className="text-yellow-400"
            />

            <p className="text-zinc-400 text-sm">
              Current Streak
            </p>
          </div>

          <p className="mt-2 text-2xl font-bold text-white">
            15 Days
          </p>
        </div>
      </div>
    </motion.section>
  );
}