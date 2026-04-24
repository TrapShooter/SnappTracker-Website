"use client";

import { useState, useEffect, useRef } from "react";
import DemoTimerDisplay, { TimerMode, POMODORO_FOCUS, POMODORO_BREAK, POMODORO_LONG_BREAK } from "@/components/demo/DemoTimerDisplay";
import DemoControls from "@/components/demo/DemoControls";
import DemoSegmentedControl, { SegmentedControlOption } from "@/components/demo/DemoSegmentedControl";
import Icon from "@/components/Icon";

const PRESETS = [
  { label: "5m", seconds: 5 * 60 },
  { label: "15m", seconds: 15 * 60 },
  { label: "30m", seconds: 30 * 60 },
  { label: "45m", seconds: 45 * 60 },
  { label: "1h", seconds: 60 * 60 },
];

const modeOptions: SegmentedControlOption<TimerMode>[] = [
  {
    value: "timer",
    label: "Timer",
    icon: <Icon name="timer" size={20} />,
    activeBgClassName: "bg-cyan-600",
    activeTextClassName: "text-white",
  },
  {
    value: "countdown",
    label: "Countdown",
    icon: <Icon name="hourglass_bottom" size={20} />,
    activeBgClassName: "bg-purple-600",
    activeTextClassName: "text-white",
  },
  {
    value: "pomodoro",
    label: "Pomodoro",
    icon: <Icon name="bolt" size={20} />,
    activeBgClassName: "bg-orange-600",
    activeTextClassName: "text-white",
  },
];

export default function DemoWidget() {
  const [mode, setMode] = useState<TimerMode>("timer");
  const [countdownDuration, setCountdownDuration] = useState(30 * 60);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [accumulatedSeconds, setAccumulatedSeconds] = useState(0);
  const [now, setNow] = useState(Date.now());

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => setNow(Date.now()), 100);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const isRunning = startTime !== null;
  const elapsedSeconds = isRunning
    ? accumulatedSeconds + (now - startTime) / 1000
    : accumulatedSeconds;

  // Timer is "active" if it's running or has been paused mid-session
  const hasActiveTimer = isRunning || accumulatedSeconds > 0;

  const handleStart = () => setStartTime(Date.now());

  const handlePause = () => {
    if (!startTime) return;
    setAccumulatedSeconds((prev) => prev + (Date.now() - startTime) / 1000);
    setStartTime(null);
  };

  const handleStop = () => {
    setStartTime(null);
    setAccumulatedSeconds(0);
  };

  const handleModeChange = (newMode: TimerMode) => {
    setMode(newMode);
    setStartTime(null);
    setAccumulatedSeconds(0);
  };

  return (
    <div className="w-full max-w-sm mx-auto rounded-3xl bg-white shadow-2xl shadow-gray-900/10 border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out">
      <div className="px-5 pt-5">
        <DemoSegmentedControl
          options={modeOptions}
          value={mode}
          onChange={handleModeChange}
          showLabelOnlyOnActive
          isCollapsed={hasActiveTimer}
          size="lg"
          variant="secondary"
          className="w-full shadow-xl"
        />
      </div>

      <DemoTimerDisplay
        mode={mode}
        elapsedSeconds={elapsedSeconds}
        countdownDuration={countdownDuration}
        isRunning={isRunning}
      />

      {/* Shared Space for Mode-Specific Settings (Countdown Presets or Pomodoro Info) */}
      <div className={`grid transition-all duration-300 ease-in-out px-5 ${(mode === "pomodoro") || (mode === "countdown" && !hasActiveTimer) ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden min-h-0">
          <div className="grid grid-cols-1 grid-rows-1">
            {/* Pomodoro info */}
            <div className={`col-start-1 row-start-1 transition-opacity duration-100 ${mode === "pomodoro" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 h-[34px]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-rounded" style={{ fontSize: 13, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>bolt</span>
                  Focus {POMODORO_FOCUS / 60}m
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-rounded" style={{ fontSize: 13, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>coffee</span>
                  Short {POMODORO_BREAK / 60}m
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-rounded" style={{ fontSize: 13, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>coffee</span>
                  Long {POMODORO_LONG_BREAK / 60}m
                </span>
              </div>
            </div>

            {/* Countdown duration picker */}
            <div className={`col-start-1 row-start-1 transition-opacity duration-100 ${mode === "countdown" && !hasActiveTimer ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <DemoSegmentedControl
                options={PRESETS.map((p) => ({
                  value: p.seconds,
                  label: p.label,
                  activeBgClassName: "bg-purple-600",
                  activeTextClassName: "text-white",
                }))}
                value={countdownDuration}
                onChange={setCountdownDuration}
                size="sm"
                buttonClassName="!min-w-0"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <DemoControls
        isRunning={isRunning}
        hasActiveTimer={hasActiveTimer}
        onStart={handleStart}
        onPause={handlePause}
        onStop={handleStop}
      />
    </div>
  );
}
