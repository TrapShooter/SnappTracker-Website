import Link from "next/link";
import Icon from "./Icon";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost" | "ghost-secondary";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  icon?: string;
  className?: string;
  target?: string;
  rel?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
  target,
  rel,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${fullWidth ? "w-full" : ""
    }`;

  const variants = {
    primary:
      "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200",
    secondary:
      "border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-white hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800",
    accent:
      "bg-accent-600 text-white hover:bg-accent-700 shadow-lg shadow-accent-600/20",
    ghost:
      "text-accent-600 dark:text-accent-400 border border-transparent hover:bg-white hover:border-gray-300 dark:hover:bg-white/5 dark:hover:border-gray-700 font-semibold",
    "ghost-secondary":
      "text-gray-700 dark:text-white border border-transparent hover:bg-white hover:border-gray-300 dark:hover:bg-white/5 dark:hover:border-gray-700 font-semibold",
  };

  const content = (
    <>
      {icon && <Icon name={icon} size={20} />}
      {children}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} type="button">
      {content}
    </button>
  );
}
