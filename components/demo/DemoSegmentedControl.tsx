"use client";

import React, { useRef, useState, useEffect, useLayoutEffect } from "react";

export interface SegmentedControlOption<T extends string | number> {
  value: T;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  activeBgClassName?: string;
  activeTextClassName?: string;
}

interface DemoSegmentedControlProps<T extends string | number> {
  options: SegmentedControlOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  buttonClassName?: string;
  size?: "sm" | "md" | "lg";
  showLabelOnlyOnActive?: boolean;
  isCollapsed?: boolean;
  variant?: "primary" | "secondary";
}

export default function DemoSegmentedControl<T extends string | number>({
  options,
  value,
  onChange,
  className = "",
  buttonClassName = "",
  size = "md",
  showLabelOnlyOnActive = false,
  isCollapsed = false,
  variant = "secondary",
}: DemoSegmentedControlProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });
  const [ready, setReady] = useState(false);

  const currentIndex = options.findIndex((o) => o.value === value);
  const activeIndex = currentIndex === -1 ? 0 : currentIndex;

  const computeSliderStyle = () => {
    const container = containerRef.current;
    if (!container) return null;

    const CONTAINER_PADDING = 4;
    const CONTAINER_BORDER = 1;
    const INACTIVE_WIDTH = 80;

    const containerWidth = container.offsetWidth;
    const availableWidth = containerWidth - 2 * CONTAINER_PADDING - 2 * CONTAINER_BORDER;

    let activeWidth: number;
    let targetLeft: number;

    if (showLabelOnlyOnActive || isCollapsed) {
      if (isCollapsed) {
        activeWidth = availableWidth;
        targetLeft = CONTAINER_PADDING;
      } else {
        const inactiveCount = options.length - 1;
        const totalInactiveWidth = inactiveCount * INACTIVE_WIDTH;
        activeWidth = availableWidth - totalInactiveWidth;
        targetLeft = CONTAINER_PADDING + activeIndex * INACTIVE_WIDTH;
      }
    } else {
      const buttonWidth = availableWidth / options.length;
      activeWidth = buttonWidth;
      targetLeft = CONTAINER_PADDING + activeIndex * buttonWidth;
    }

    return { width: activeWidth, left: targetLeft };
  };

  useLayoutEffect(() => {
    const style = computeSliderStyle();
    if (style) setSliderStyle(style);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const rafId = requestAnimationFrame(() => {
      const style = computeSliderStyle();
      if (style) setSliderStyle(style);
    });
    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, options.length, showLabelOnlyOnActive, isCollapsed, ready]);

  const containerBg = variant === "primary" ? "bg-white" : "bg-gray-50";
  const containerBorder = variant === "primary" ? "border-gray-100" : "border-gray-200";
  const paddingY = size === "sm" ? "py-1.5" : size === "lg" ? "py-3" : "py-2";
  const textSize = size === "sm" ? "text-xs" : size === "lg" ? "text-md" : "text-sm";

  return (
    <div
      ref={containerRef}
      className={`${containerBg} border ${containerBorder} p-1 rounded-full relative isolate flex items-center justify-between transition-all duration-200 ${className}`}
    >
      {/* Sliding background */}
      <div
        className={`absolute inset-y-1 left-0 rounded-full shadow-sm z-0
          ${ready ? "transition-[width,transform,background-color] duration-200 ease-out-smooth" : ""}
          ${options[activeIndex]?.activeBgClassName ?? "bg-[#11aed7]"}
        `}
        style={{
          width: `${sliderStyle.width}px`,
          transform: `translateX(${sliderStyle.left}px)`,
        }}
      />

      {options.map((option, index) => {
        const isActive = value === option.value;
        const shouldExpand = (!showLabelOnlyOnActive && !isCollapsed) || isActive;
        const isActuallyCollapsed = isCollapsed && !isActive;

        return (
          <button
            key={String(option.value)}
            ref={(el) => { itemRefs.current[index] = el; }}
            type="button"
            onClick={() => !option.disabled && onChange(option.value)}
            disabled={option.disabled}
            className={`
              relative z-10 font-medium transition-all duration-200 ease-out-smooth rounded-full flex items-center justify-center overflow-hidden
              ${paddingY}
              ${isActuallyCollapsed ? "w-0 min-w-0 px-0 opacity-0 pointer-events-none" : shouldExpand ? "flex-1 px-2 gap-2" : "w-20 px-0 gap-0"}
              ${!isActuallyCollapsed ? "min-w-20" : ""}
              ${textSize}
              ${isActive
                ? option.activeTextClassName ?? "text-white"
                : "text-gray-400 hover:text-gray-600"
              }
              ${option.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
              ${buttonClassName}
            `}
          >
            {option.icon && (
              <div className={`flex items-center justify-center transition-all duration-200 ${isActuallyCollapsed ? "scale-0" : "scale-100"}`}>
                {option.icon}
              </div>
            )}

            <div
              className={`grid transition-[grid-template-columns] duration-200 ease-out-smooth ${shouldExpand ? "grid-cols-[1fr]" : "grid-cols-[0fr]"}`}
            >
              <span className={`overflow-hidden whitespace-nowrap transition-opacity duration-200 ${shouldExpand ? "opacity-100" : "opacity-0"}`}>
                {option.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
