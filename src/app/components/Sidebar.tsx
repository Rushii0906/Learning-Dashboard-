export default function Sidebar() {
  return (
    <nav className="min-h-screen border-r border-zinc-800 bg-zinc-950 p-6">
      <h2 className="text-3xl font-bold text-white">
        Next-Gen Learning
      </h2>

      <ul className="mt-10 space-y-6 text-zinc-400">
        <li className="hover:text-white cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-white cursor-pointer">
          Courses
        </li>

        <li className="hover:text-white cursor-pointer">
          Analytics
        </li>

        <li className="hover:text-white cursor-pointer">
          Settings
        </li>
      </ul>
    </nav>
  );
}