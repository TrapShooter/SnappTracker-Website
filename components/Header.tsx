"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6 pointer-events-none">
      <nav className="
        pointer-events-auto
        flex items-center justify-between
        w-full max-w-6xl
        bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-lg 
        py-2 pl-4 pr-2 rounded-2xl border border-gray-200 dark:border-gray-800
      ">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="SnappTracker" width={32} height={32} className="rounded-lg" />
          <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">SnappTracker</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/download"
            className="text-md font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Download
          </Link>
          <Link
            href="/pricing"
            className="text-md font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
