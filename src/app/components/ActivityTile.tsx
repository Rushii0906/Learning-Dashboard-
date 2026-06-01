"use client";

import { motion } from "framer-motion";
import { Activity, Zap } from "lucide-react";

export default function ActivityTile() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const heatmap = Array.from(
    { length: 84 },
    (_, i) => {
      const values = [0, 1, 2, 3, 4];
      return values[(i * 7) % values.length];
    }
  );

  const colors = [
    "bg-zinc-800",
    "bg-emerald-950",
    "bg-emerald-800",
    "bg-emerald-600",
    "bg-emerald-400",
  ];

  return (
    <motion.section
      aria-label="Learning Activity"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-black
        bg-zinc-950
        p-6
        transition-all
        duration-300
        hover:border-emerald-500/30
        hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]
      "
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Learning Activity
          </h2>

          <p className="text-zinc-400 mt-1">
            Last 12 Months
          </p>
        </div>

        <Activity
          size={24}
          className="text-emerald-400"
        />
      </div>

      <p className="text-zinc-400 mb-6">
        124 Study Sessions This Year
      </p>

      <div>
        <div className="flex justify-between text-zinc-500 text-sm mb-4">
          {months.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col justify-around text-zinc-500 text-sm py-1">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          <div className="grid grid-cols-12 gap-1">
            {heatmap.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.003,
                }}
                className={`
                  h-5
                  w-5
                  rounded-sm
                  ${colors[level]}
                  transition-all
                  duration-200
                  hover:scale-110
                `}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-end items-center gap-2 text-sm text-zinc-500">
          <span>Less</span>

          <div className="h-3 w-3 rounded-sm bg-zinc-800" />
          <div className="h-3 w-3 rounded-sm bg-emerald-950" />
          <div className="h-3 w-3 rounded-sm bg-emerald-800" />
          <div className="h-3 w-3 rounded-sm bg-emerald-600" />
          <div className="h-3 w-3 rounded-sm bg-emerald-400" />

          <span>More</span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div
          className="
            rounded-3xl
            border
            border-zinc-900
            bg-black
            p-6
            transition-all
            duration-300
            hover:border-emerald-500/30
            hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]
          "
        >
          <p className="text-zinc-400 text-sm">
            Lessons Completed
          </p>

          <p className="mt-2 text-2xl font-bold text-white">
            48
          </p>
        </div>

        <div
          className="
            rounded-xl
            border
            border-zinc-800
            bg-zinc-950/50
            p-4
          "
        >
          <p className="text-zinc-400 text-sm">
            Study Hours
          </p>

          <p className="mt-2 text-2xl font-bold text-white">
            124h
          </p>
        </div>

        <div
          className="
            rounded-xl
            border
            border-zinc-800
            bg-zinc-950/50
            p-4
          "
        >
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