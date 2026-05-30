import AnimatedProgress from "./AnimatedProgress";
import {
  BookOpen,
  Code2,
  FileCode,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

interface CourseCardProps {
  course: Course;
}

const icons = {
  BookOpen,
  Code: Code2,
  FileCode,
  Cpu,
};

export default function CourseCard({
  course,
}: CourseCardProps) {
  const Icon =
    icons[course.icon_name as keyof typeof icons] ||
    BookOpen;

  return (
    <article
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-gradient-to-br
        from-zinc-900
        via-zinc-900
        to-black
        p-6
        shadow-[0_0_25px_rgba(59,130,246,0.08)]
        hover:border-blue-500/40
        hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]
        transition-all
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-500/5
          via-transparent
          to-cyan-500/5
          pointer-events-none
        "
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div
            className="
              p-3
              rounded-xl
              bg-blue-500/10
              border
              border-blue-500/20
            "
          >
            <Icon
              size={22}
              className="text-blue-400"
            />
          </div>

          <ArrowUpRight
            size={18}
            className="text-zinc-500"
          />
        </div>

        <h2 className="text-xl font-semibold text-white mb-4">
          {course.title}
        </h2>

        <AnimatedProgress
          value={course.progress}
        />

        <div className="mt-4 flex justify-between items-center">
          <span className="text-zinc-400 text-sm">
            Progress
          </span>

          <span className="font-semibold text-white">
            {course.progress}%
          </span>
        </div>
      </div>
    </article>
  );
}