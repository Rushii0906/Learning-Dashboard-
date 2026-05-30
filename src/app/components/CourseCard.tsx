import { Course } from "../types/course";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">
          {course.title}
        </h2>

        <span className="text-sm text-zinc-400">
          {course.icon_name}
        </span>
      </div>

      <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full"
          style={{
            width: `${course.progress}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm text-zinc-400">
        {course.progress}% Complete
      </p>
    </article>
  );
}