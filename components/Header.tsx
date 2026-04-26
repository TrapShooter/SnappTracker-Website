import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const APP_URL = "https://app.snapptracker.com";

interface HeaderProps {
  sticky?: boolean;
}

export default function Header({ sticky = false }: HeaderProps) {
  return (
    <nav className={`${sticky ? 'sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-300 dark:border-gray-700' : 'relative z-10'} flex items-center justify-between px-6 py-5 max-w-6xl mx-auto w-full`}>
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <Image src="/logo.png" alt="SnappTracker" width={36} height={36} className="rounded-xl" />
        <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">SnappTracker</span>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}
