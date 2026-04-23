import React from "react";

interface DemoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost" | "custom";
  size?: "sm" | "md" | "lg" | "icon";
}

const variants = {
  primary: "bg-[#11aed7] text-white shadow-lg hover:bg-[#0a8db3] border-transparent",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 border-transparent",
  danger: "bg-red-500 text-white shadow-lg hover:bg-red-600 border-transparent",
  ghost: "bg-transparent text-gray-600 hover:bg-gray-200 border-transparent",
  custom: "border-transparent",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-6 py-4 text-lg",
  icon: "w-12 h-12 p-0 rounded-full",
};

const DemoButton = React.forwardRef<HTMLButtonElement, DemoButtonProps>(
  ({ children, className = "", variant = "primary", size = "md", onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-2xl border gap-2 ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DemoButton.displayName = "DemoButton";

export default DemoButton;
