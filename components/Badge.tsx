import React from 'react';
import Icon from './Icon';

type BadgeVariant = 'accent' | 'dark';

interface BadgeProps {
  children: React.ReactNode;
  icon?: string;
  className?: string;
  variant?: BadgeVariant;
}

export default function Badge({
  children,
  icon,
  className = "",
  variant = "accent"
}: BadgeProps) {
  const variantStyles = {
    accent: "bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-white border border-accent-200 dark:border-accent-900",
    dark: "bg-gray-950 dark:bg-white text-white dark:text-gray-950 border border-gray-900 dark:border-gray-200"
  };

  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium border transition-colors ${variantStyles[variant]} ${className}`}>
      {icon && (
        <Icon name={icon} size={18} weight={700} />
      )}
      <span className="leading-none">{children}</span>
    </div>
  );
}
