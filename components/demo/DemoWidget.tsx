"use client";

import { useState, useEffect, useRef } from "react";
import DemoTimerDisplay, { TimerMode, POMODORO_FOCUS, POMODORO_BREAK, POMODORO_LONG_BREAK, getPomodoroPhase } from "@/components/demo/DemoTimerDisplay";
import DemoControls from "@/components/demo/DemoControls";
import DemoSegmentedControl, { SegmentedControlOption } from "@/components/demo/DemoSegmentedControl";
import Icon from "@/components/Icon";

// Mirrors the app's formatDuration 'natural' format for seconds values
function formatSecs(s: number): string {
  if (s >= 3600) {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }
  if (s >= 60) return `${Math.floor(s / 60)}m`;
  return `${s}s`;
}

const PRESETS = [
  { label: "5m", seconds: 5 * 60 },
  { label: "15m", seconds: 15 * 60 },
  { label: "30m", seconds: 30 * 60 },
  { label: "45m", seconds: 45 * 60 },
  { label: "1h", seconds: 60 * 60 },
];

const modeOptions: SegmentedControlOption<TimerMode>[] = [
  {
    value: "stopwatch",
    label: "Stopwatch",
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
  const [mode, setMode] = useState<TimerMode>("stopwatch");
  const [countdownDuration, setCountdownDuration] = useState(30 * 60);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [accumulatedSeconds, setAccumulatedSeconds] = useState(0);
  const [now, setNow] = useState(Date.now());

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const soundFiredRef = useRef(false);
  const pomodoroPhaseRef = useRef<string | null>(null);

  const playRadar = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const t = ctx.currentTime;
      for (let i = 0; i < 3; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.25, t + i * 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.2 + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t + i * 0.2);
        osc.stop(t + i * 0.2 + 0.1);
      }
    } catch (e) {
      console.error("[DemoWidget] Radar sound failed:", e);
    }
  };

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

  // Play the Radar sound once when countdown reaches zero
  useEffect(() => {
    if (mode !== "countdown" || !isRunning) return;
    const hasJustCrossedZero = elapsedSeconds >= countdownDuration;
    if (hasJustCrossedZero && !soundFiredRef.current) {
      soundFiredRef.current = true;
      playRadar();
    }
    // Reset the guard when elapsed drops back below duration (e.g. timer reset)
    if (!hasJustCrossedZero) soundFiredRef.current = false;
  }, [elapsedSeconds, countdownDuration, mode, isRunning]);

  // Play the Radar sound on every Pomodoro phase change
  useEffect(() => {
    if (mode !== "pomodoro" || !isRunning) {
      pomodoroPhaseRef.current = null;
      return;
    }
    const phase = getPomodoroPhase(elapsedSeconds).label;
    if (pomodoroPhaseRef.current !== null && pomodoroPhaseRef.current !== phase) {
      playRadar();
    }
    pomodoroPhaseRef.current = phase;
  }, [elapsedSeconds, mode, isRunning]);

  const handleStart = () => setStartTime(Date.now());

  const handlePause = () => {
    if (!startTime) return;
    setAccumulatedSeconds((prev) => prev + (Date.now() - startTime) / 1000);
    setStartTime(null);
  };

  const handleModeChange = (newMode: TimerMode) => {
    if (newMode === mode) return;
    setMode(newMode);
    setStartTime(null);
    setAccumulatedSeconds(0);
    soundFiredRef.current = false;
  };

  const handleStop = () => {
    setStartTime(null);
    setAccumulatedSeconds(0);
    soundFiredRef.current = false;
  };

  return (
    <div className="w-full max-w-[400px] mx-auto rounded-3xl bg-white shadow-2xl shadow-gray-900/10 border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out">
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
                  Focus {formatSecs(POMODORO_FOCUS)}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-rounded" style={{ fontSize: 13, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>coffee</span>
                  Short {formatSecs(POMODORO_BREAK)}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-rounded" style={{ fontSize: 13, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>coffee</span>
                  Long {formatSecs(POMODORO_LONG_BREAK)}
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
