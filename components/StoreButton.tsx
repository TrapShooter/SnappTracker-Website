"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { AppleIcon, GooglePlayIcon } from "./BrandIcons";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";

interface StoreButtonProps {
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

interface BaseStoreButtonProps extends StoreButtonProps {
  icon: ReactNode;
  upperText: string;
  lowerText: string;
}

function BaseStoreButton({
  href,
  icon,
  upperText,
  lowerText,
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
}: BaseStoreButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-xl transition-all hover:bg-gray-800 dark:hover:bg-gray-100 shadow-md w-full max-w-[175px] shrink-0 ${className}`}
    >
      <div className="shrink-0">
        {icon}
      </div>
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[11px] font-normal opacity-80">{upperText}</span>
        <span className="text-lg font-semibold -mt-1">{lowerText}</span>
      </div>
    </Link>
  );
}

export function AppStoreButton({ href = APP_STORE_URL, ...props }: StoreButtonProps) {
  return (
    <BaseStoreButton
      {...props}
      href={href}
      icon={<AppleIcon className="w-8 h-8 -mt-1" />}
      upperText="Download on the"
      lowerText="App Store"
    />
  );
}

export function GooglePlayButton({ href = GOOGLE_PLAY_URL, ...props }: StoreButtonProps) {
  return (
    <BaseStoreButton
      {...props}
      href={href}
      icon={<GooglePlayIcon className="w-7 h-7" />}
      upperText="Get it on"
      lowerText="Google Play"
    />
  );
}
