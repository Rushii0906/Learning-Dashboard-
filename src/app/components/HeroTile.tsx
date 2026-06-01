import {
  Flame,
  Trophy,
  BookOpen,
} from "lucide-react";

export default function HeroTile() {
  return (
    <section
      aria-labelledby="dashboard-heading"
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-900
        p-8
        hover:border-emerald-500/30
        hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]
        transition-all
        duration-300
      "
    >

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Welcome back, Student👋
        </h1>

        <p className="mt-4 text-lg text-zinc-400">
          Continue building your skills and stay consistent.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-orange-500/20
              bg-orange-500/10
              px-4
              py-3
            "
          >
            <Flame
              size={18}
              className="text-orange-400"
            />

            <span className="text-white">
              15 Day Streak
            </span>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-blue-500/20
              bg-blue-500/10
              px-4
              py-3
            "
          >
            <BookOpen
              size={18}
              className="text-blue-400"
            />

            <span className="text-white">
              4 Active Courses
            </span>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-3
            "
          >
            <Trophy
              size={18}
              className="text-cyan-400"
            />

            <span className="text-white">
              Top Learner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}