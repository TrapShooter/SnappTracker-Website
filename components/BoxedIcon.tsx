import React from 'react';
import Icon from './Icon';

export type BoxedIconVariant = 'default' | 'primary' | 'purple' | 'red' | 'orange' | 'amber' | 'emerald' | 'accent-solid' | 'accent-light';

interface BoxedIconProps {
  icon: string; // Material Symbol name
  size?: number; // Icon size
  variant?: BoxedIconVariant;
  className?: string; // Container overrides (padding, rounded, etc)
  fill?: boolean;
}

export const BoxedIcon: React.FC<BoxedIconProps> = ({
  icon,
  size = 20,
  variant = 'default',
  className = '',
  fill = true
}) => {
  const variants = {
    default: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300",
    primary: "bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400", // Light blue (Headers)
    purple: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    red: "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400",
    orange: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
    amber: "bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    emerald: "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    'accent-solid': "bg-accent-200 dark:bg-accent-800 text-accent-700 dark:text-accent-200", // Group active
    'accent-light': "bg-accent-100 dark:bg-accent-800 text-accent-600 dark:text-accent-300", // Export session
  };

  const baseClasses = "flex items-center justify-center shrink-0 p-2 rounded-lg";

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      <Icon name={icon} size={size} fill={fill} />
    </div>
  );
};
