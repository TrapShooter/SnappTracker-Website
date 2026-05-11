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
  variant?: "default" | "compact";
}

interface BaseStoreButtonProps extends Omit<StoreButtonProps, "href"> {
  href: string;
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
  variant = "default",
}: BaseStoreButtonProps) {
  const isCompact = variant === "compact";

  return (
    <Link
      href={href || "#"}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl transition-all hover:bg-gray-700 dark:hover:bg-gray-200 shadow-md shrink-0 w-full ${isCompact ? "px-3 py-2 max-w-[155px]" : "px-4 py-2 max-w-[175px]"
        } ${className}`}
    >
      <div className="shrink-0 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col items-start leading-tight">
        <span className={`${isCompact ? "text-[10px]" : "text-[11px]"} font-normal opacity-80`}>
          {upperText}
        </span>
        <span className={`${isCompact ? "text-base" : "text-lg"} font-semibold -mt-1 whitespace-nowrap`}>
          {lowerText}
        </span>
      </div>
    </Link>
  );
}

export function AppStoreButton({ href = APP_STORE_URL, variant = "default", ...props }: StoreButtonProps) {
  const isCompact = variant === "compact";
  return (
    <BaseStoreButton
      {...props}
      href={href}
      variant={variant}
      icon={<AppleIcon className={`${isCompact ? "w-7 h-7" : "w-8 h-8"} -mt-1`} />}
      upperText="Download on the"
      lowerText="App Store"
    />
  );
}

export function GooglePlayButton({ href = GOOGLE_PLAY_URL, variant = "default", ...props }: StoreButtonProps) {
  const isCompact = variant === "compact";
  return (
    <BaseStoreButton
      {...props}
      href={href}
      variant={variant}
      icon={<GooglePlayIcon className={isCompact ? "w-6 h-6" : "w-7 h-7"} />}
      upperText="Get it on"
      lowerText="Google Play"
    />
  );
}
