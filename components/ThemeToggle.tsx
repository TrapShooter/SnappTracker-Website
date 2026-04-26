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
      className="flex items-center justify-center w-11 h-11 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-white hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Toggle theme"
    >
      <Icon name={isDark ? "light_mode" : "dark_mode"} size={20} />
    </button>
  );
}
