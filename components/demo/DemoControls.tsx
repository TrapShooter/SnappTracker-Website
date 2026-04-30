"use client";

import Icon from "@/components/Icon";

interface DemoControlsProps {
  isRunning: boolean;
  hasActiveTimer: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}

export default function DemoControls({
  isRunning,
  hasActiveTimer,
  onStart,
  onPause,
  onStop,
}: DemoControlsProps) {
  // Offsets mirror TrackerControls.tsx exactly:
  // play offset = -(gap + stopW) / 2 = -(16 + 64) / 2 = -40px
  // stop offset = (gap + playW) / 2 = (16 + 80) / 2 = 48px
  const playOffset = hasActiveTimer ? -40 : 0;
  const stopOffset = 48;

  return (
    <div className="px-6 py-10">
      <div className="relative flex items-center justify-center h-20 max-w-sm mx-auto">

        {/* Stop button — slides in from the right when timer is active */}
        <button
          onClick={onStop}
          className={`absolute h-16 w-16 rounded-full text-white transition-all duration-300 ease-spring active:scale-95 cursor-pointer
            bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/40
            ${hasActiveTimer ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}
          style={{ transform: `translateX(${stopOffset}px)` }}
          aria-label="Stop tracking"
        >
          <div className="flex items-center justify-center w-full h-full">
            <Icon name="stop" size={28} />
          </div>
        </button>

        {/* Play / Pause button — slides left when timer is active */}
        <button
          onClick={isRunning ? onPause : onStart}
          className={`absolute h-20 w-20 rounded-full shadow-2xl ring-4 ring-white transition-all duration-300 ease-spring active:scale-95 z-10 cursor-pointer
            ${isRunning
              ? "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-500/40"
              : "bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-500/50"
            }`}
          style={{ transform: `translateX(${playOffset}px)` }}
          aria-label={isRunning ? "Pause tracking" : "Start tracking"}
        >
          {/* Pause icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isRunning ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
            <Icon name="pause" size={40} />
          </div>
          {/* Play icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${!isRunning ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
            <Icon name="play_arrow" size={48} />
          </div>
        </button>

      </div>
    </div>
  );
}
