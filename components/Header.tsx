"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const APP_URL = "https://app.snapptracker.com";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6 pointer-events-none">
        <nav className="
          pointer-events-auto
          flex items-center justify-between
          w-full max-w-6xl
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
            <Link
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-5 py-4 text-gray-700 dark:text-white text-md font-semibold hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <GlobeIcon />
              Launch Web App
            </Link>
            <Link
              href="/download"
              className="flex items-center justify-center gap-3 w-full py-4 text-md font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-2xl hover:opacity-90 shadow-lg shadow-gray-200 dark:shadow-none transition-all"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </Link>
            <Link
              href="/download"
              className="flex items-center justify-center gap-3 w-full py-4 text-md font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-2xl hover:opacity-90 shadow-lg shadow-gray-200 dark:shadow-none transition-all"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.22.99.14l12.12-6.99-2.81-2.81-10.3 9.66zm-1.43-1.09V1.33c0-.48.26-.89.66-1.11L14.1 12 2.41 23.78c-.4-.22-.63-.63-.66-1.11zM20.49 10.46L17.9 9l-3.05 3.05 3.05 3.05 2.62-1.51c.75-.43.75-1.6-.03-2.13zM4.17.23L16.29 7.22l-2.81 2.81L3.18.37C3.48.2 3.82.16 4.17.23z" />
              </svg>
              Get it on Google Play
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
