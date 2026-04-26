"use client";

export type TimerMode = "timer" | "countdown" | "pomodoro";

export const POMODORO_FOCUS = 25 * 60;
export const POMODORO_BREAK = 5 * 60;
export const POMODORO_LONG_BREAK = 15 * 60;
export const POMODORO_CYCLES_BEFORE_LONG_BREAK = 4;

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function formatDigital(totalSeconds: number): string {
  const abs = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(abs / 3600);
  const m = Math.floor((abs % 3600) / 60);
  const s = abs % 60;
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

export function getPomodoroPhase(elapsedSeconds: number): { label: string; remaining: number; isFocus: boolean; cycle: number } {
  const shortCycle = POMODORO_FOCUS + POMODORO_BREAK;
  const longCycle = POMODORO_FOCUS + POMODORO_LONG_BREAK;
  const megaCycleDuration = shortCycle * (POMODORO_CYCLES_BEFORE_LONG_BREAK - 1) + longCycle;

  const posInMegaCycle = elapsedSeconds % megaCycleDuration;
  const lastCycleStart = shortCycle * (POMODORO_CYCLES_BEFORE_LONG_BREAK - 1);

  if (posInMegaCycle < lastCycleStart) {
    // Normal cycles (1 to N-1)
    const cycle = Math.floor(posInMegaCycle / shortCycle) + 1;
    const posInCycle = posInMegaCycle % shortCycle;
    if (posInCycle < POMODORO_FOCUS) {
      return { label: "Focus", remaining: POMODORO_FOCUS - posInCycle, isFocus: true, cycle };
    }
    return { label: "Break", remaining: shortCycle - posInCycle, isFocus: false, cycle };
  } else {
    // Last cycle with long break
    const posInCycle = posInMegaCycle - lastCycleStart;
    if (posInCycle < POMODORO_FOCUS) {
      return { label: "Focus", remaining: POMODORO_FOCUS - posInCycle, isFocus: true, cycle: POMODORO_CYCLES_BEFORE_LONG_BREAK };
    }
    return { label: "Long Break", remaining: longCycle - posInCycle, isFocus: false, cycle: POMODORO_CYCLES_BEFORE_LONG_BREAK };
  }
}

export function getDisplaySeconds(mode: TimerMode, elapsedSeconds: number, countdownDuration = 30 * 60): number {
  if (mode === "timer") return elapsedSeconds;
  if (mode === "countdown") return Math.max(0, countdownDuration - elapsedSeconds);
  return getPomodoroPhase(elapsedSeconds).remaining;
}

interface DemoTimerDisplayProps {
  mode: TimerMode;
  elapsedSeconds: number;
  countdownDuration?: number;
  isRunning?: boolean;
}

export default function DemoTimerDisplay({ mode, elapsedSeconds, countdownDuration = 30 * 60, isRunning = false }: DemoTimerDisplayProps) {
  const displaySeconds = getDisplaySeconds(mode, elapsedSeconds, countdownDuration);
  const pomodoro = mode === "pomodoro" ? getPomodoroPhase(elapsedSeconds) : null;
  const showBadge = pomodoro && (isRunning || elapsedSeconds > 0);

  return (
    <div className="flex flex-col items-center gap-3 px-6 pt-12 pb-2 select-none">
      {/* Pomodoro phase badge — only while running */}
      {showBadge && (
        <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-500 ${pomodoro.isFocus
          ? "bg-orange-100 text-orange-600"
          : "bg-emerald-100 text-emerald-600"
          }`}>
          <span
            className="material-symbols-rounded"
            style={{ fontSize: 12, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}
          >
            {pomodoro.isFocus ? "bolt" : "coffee"}
          </span>
          {pomodoro.label}
          <span className="opacity-50">·</span>
          Cycle {pomodoro.cycle}/{POMODORO_CYCLES_BEFORE_LONG_BREAK}
        </div>
      )}

      {!showBadge && <div className="h-6" />}

      {/* Clock */}
      <div className="text-6xl font-bold tabular-nums tracking-tighter text-gray-900 leading-none">
        {formatDigital(displaySeconds)}
      </div>

      <div className="h-5" />
    </div>
  );
}
