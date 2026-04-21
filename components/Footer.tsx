import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL = "#"; // TODO: replace with real App Store link
const GOOGLE_PLAY_URL = "#"; // TODO: replace with real Google Play link

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="SnappTracker" width={28} height={28} className="rounded-lg" />
          <span className="text-sm font-semibold text-zinc-700">SnappTracker</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
          <Link href="https://app.snapptracker.com" className="hover:text-zinc-900 transition-colors">
            Web App
          </Link>
          <Link href={APP_STORE_URL} className="hover:text-zinc-900 transition-colors">
            App Store
          </Link>
          <Link href={GOOGLE_PLAY_URL} className="hover:text-zinc-900 transition-colors">
            Google Play
          </Link>
          <Link href="/privacy" className="hover:text-zinc-900 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-zinc-900 transition-colors">
            Terms
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} SnappTracker
        </p>
      </div>
    </footer>
  );
}
