"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface PhoneMockupProps {
  images: string[];
  intervalMs?: number;
  className?: string;
  priority?: boolean;
}

export default function PhoneMockup({ images, intervalMs = 3000, className = "w-[350px]", priority = false }: PhoneMockupProps) {
  const zValues = useRef<number[]>(images.map((_, i) => (i === 0 ? 1 : 0)));
  const zCounter = useRef(1);

  const [{ activeIndex, prevIndex }, setState] = useState({ activeIndex: 0, prevIndex: -1 });

  const safeActive = activeIndex >= images.length ? 0 : activeIndex;

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setState(({ activeIndex }) => {
        const nextIndex = (activeIndex + 1) % images.length;
        zValues.current[nextIndex] = ++zCounter.current;
        return { prevIndex: activeIndex, activeIndex: nextIndex };
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className={className}>
      <div className="relative">
        <Image
          src="/mockups/iPhone-body.png"
          alt="iPhone Mockup"
          width={350}
          height={700}
          className="relative z-10 w-full h-auto drop-shadow-2xl pointer-events-none"
          priority
        />

        <div className="absolute top-0 bottom-0 left-0 right-0 z-0 overflow-hidden">
          {images.map((src, index) => {
            const label = src.split("/").pop()?.split(".")[0] ?? `Screenshot ${index + 1}`;
            const isActive = index === safeActive;
            const isPrev = !isActive && index === prevIndex;
            return (
              <Image
                key={src}
                src={src}
                alt={label}
                fill
                sizes="(max-width: 768px) 260px, 280px"
                priority={priority && index === 0}
                style={{ zIndex: zValues.current[index] }}
                className={`object-cover transition-opacity ${isActive || isPrev ? "opacity-100" : "opacity-0"
                  }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
