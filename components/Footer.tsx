import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="SnappTracker" width={36} height={36} className="rounded-xl" />
          <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">SnappTracker</span>
        </Link>

        {/* Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-gray-100">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-900 dark:hover:text-gray-100">
            Terms
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} SnappTracker
        </p>
      </div>
    </footer>
  );
}
