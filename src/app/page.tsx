import { getCourses } from "@/app/lib/getCourses";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import HeroTile from "./components/HeroTile";
import ActivityTile from "./components/ActivityTile";
import CourseCard from "./components/CourseCard";

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="grid lg:grid-cols-[240px_1fr]">
        <Sidebar />

        <main className="p-4 md:p-6 lg:p-8 pb-24 md:pb-8">
          <HeroTile />

          <section className="mt-8">
            <div className="grid gap-6 md:grid-cols-2">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}
            </div>

            <div className="mt-6">
              <ActivityTile />
            </div>
          </section>
        </main>
      </div>

      <MobileNav />
    </div>
  );
}