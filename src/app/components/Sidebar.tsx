import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  Rocket,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="
        flex
        min-h-screen
        flex-col
        justify-between
        border-r
        border-zinc-800
        bg-zinc-950
        p-6
      "
    >
      <div>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Next-Gen
            <br />
            Learning
          </h1>

          <p className="mt-4 text-zinc-500">
            Learning Dashboard
          </p>
        </div>

        <nav>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-zinc-400
                  transition-all
                  hover:bg-zinc-900
                  hover:text-white
                "
              >
                <LayoutDashboard size={18} />
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="#"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-zinc-400
                  transition-all
                  hover:bg-zinc-900
                  hover:text-white
                "
              >
                <BookOpen size={18} />
                Courses
              </a>
            </li>

            <li>
              <a
                href="#"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-zinc-400
                  transition-all
                  hover:bg-zinc-900
                  hover:text-white
                "
              >
                <BarChart3 size={18} />
                Analytics
              </a>
            </li>

            <li>
              <a
                href="#"
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-zinc-400
                  transition-all
                  hover:bg-zinc-900
                  hover:text-white
                "
              >
                <Settings size={18} />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className="
          rounded-2xl
          border
          border-cyan-500/20
          bg-gradient-to-br
          from-cyan-500/10
          to-blue-500/10
          p-4
        "
      >
        <div className="flex items-center gap-2">
          <Rocket
            size={18}
            className="text-cyan-400"
          />
          <p className="font-medium text-white">
            Keep your learning streak alive!
          </p>
        </div>

        <p className="mt-3 text-sm text-zinc-400">
          Complete one lesson today.
        </p>
      </div>
    </aside>
  );
}