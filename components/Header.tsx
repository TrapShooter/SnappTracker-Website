"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When in overlay mode and not scrolled, we use absolute positioning so it doesn't push content.
  // Otherwise we use sticky so it follows the scroll.
  const isSticky = !overlay || isScrolled;

  return (
    <nav className={`${isSticky ? "sticky" : "absolute"} top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-300 dark:border-gray-700 py-3" 
        : "bg-transparent border-b border-transparent py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="SnappTracker" width={36} height={36} className="rounded-xl" />
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
      </div>
    </nav>
  );
}
