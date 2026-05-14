"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { AppStoreButton, GooglePlayButton } from "./StoreButton";
import Button from "./Button";
import { GlobeIcon } from "./BrandIcons";
import { APP_URL } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6 pointer-events-none">
        <nav className="
          pointer-events-auto
          flex items-center justify-between
          w-full max-w-7xl
          bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm shadow-lg 
          py-2 pl-4 pr-2 rounded-2xl border border-gray-200 dark:border-gray-800
        ">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="SnappTracker" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">SnappTracker</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="flex items-center justify-center w-11 h-11 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-60 bg-white dark:bg-gray-950 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex flex-col h-full pt-4 px-4">
          {/* Top Bar - Content areas wrapped in h-11 (44px) to match ThemeToggle height in main nav */}
          <div className="flex items-center justify-between py-2 pl-4 pr-2 border border-transparent mb-8">
            <div className="flex items-center h-11">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image src="/logo.png" alt="SnappTracker" width={32} height={32} className="rounded-lg" />
                <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">SnappTracker</span>
              </Link>
            </div>
            <div className="flex items-center h-11">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="flex items-center justify-center w-11 h-11 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>

          {/* Links List */}
          <div className="px-4 flex flex-col gap-1">
            <Link
              href="/download"
              onClick={() => setIsOpen(false)}
              className="py-4 text-lg font-medium text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-800"
            >
              Download
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="py-4 text-lg font-medium text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-800"
            >
              Pricing
            </Link>
          </div>

          {/* Bottom Actions */}
          <div className="mt-auto pb-8 px-4 flex flex-col gap-3">
            <Button
              href={APP_URL}
              variant="ghost-secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 group w-full justify-center"
            >
              <GlobeIcon />
              Launch Web App
            </Button>
            <div className="flex flex-row flex-wrap gap-3 justify-center">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
