"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Icon from "./Icon";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 w-9 h-9" />; // Spacer to avoid layout shift during hydration
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center w-11 h-11 rounded-xl border border-gray-900/10 dark:border-white/10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 shadow-sm cursor-pointer"
      aria-label="Toggle theme"
    >
      <Icon name={isDark ? "light_mode" : "dark_mode"} size={20} />
    </button>
  );
}
