"use client";

import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

export default function MobileNav() {
  return (
    <nav
      aria-label="Mobile Navigation"
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        flex
        items-center
        justify-around
        border-t
        border-zinc-800
        bg-zinc-950/95
        backdrop-blur
        p-4
        md:hidden
      "
    >
      <button
        aria-label="Dashboard"
        className="text-blue-400"
      >
        <LayoutDashboard size={22} />
      </button>

      <button
        aria-label="Courses"
        className="text-zinc-400"
      >
        <BookOpen size={22} />
      </button>

      <button
        aria-label="Analytics"
        className="text-zinc-400"
      >
        <BarChart3 size={22} />
      </button>

      <button
        aria-label="Settings"
        className="text-zinc-400"
      >
        <Settings size={22} />
      </button>
    </nav>
  );
}