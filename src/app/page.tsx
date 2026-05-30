import { getCourses } from "@/app/lib/getCourses";

export default async function Home() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen p-10 bg-black-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Learning Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          Total Courses: {courses.length}
        </p>

        <div className="grid gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">
                  {course.title}
                </h2>

                <span className="text-sm text-gray-500">
                  {course.icon_name}
                </span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{
                    width: `${course.progress}%`,
                  }}
                />
              </div>

              <p className="mt-3 text-sm font-medium">
                {course.progress}% Complete
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}