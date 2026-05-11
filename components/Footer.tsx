import Image from "next/image";
import Link from "next/link";
import { AppStoreButton, GooglePlayButton } from "./StoreButton";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-12">
        {/* Top Row: Brand & Store Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4 w-full">
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <Image src="/logo.png" alt="SnappTracker" width={40} height={40} className="rounded-xl shadow-md" />
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">SnappTracker</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
              Time tracking for anything you do.
            </p>
          </div>

          <div className="h-px w-full bg-gray-200 dark:bg-gray-800 md:hidden" />

          <div className="flex flex-col items-center md:items-end gap-3 w-full">
            <p className="text-sm text-gray-500 dark:text-gray-400 px-2">
              Download SnappTracker Today!
            </p>
            <div className="flex flex-row items-center justify-center md:justify-end gap-2 w-full flex-wrap">
              <AppStoreButton variant="compact" />
              <GooglePlayButton variant="compact" />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-200 dark:bg-gray-800" />

        {/* Bottom Row: Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-2 text-sm  text-gray-500 dark:text-gray-400">
            <Link href="/faq" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              FAQs
            </Link>
            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Terms
            </Link>
          </nav>

          <p className="text-sm text-gray-400 dark:text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} SnappTracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
