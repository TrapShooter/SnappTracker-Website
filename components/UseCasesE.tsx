"use client";

import { useEffect, useRef, useState } from "react";
import { useDragScroll } from "@/hooks/useDragScroll";
import { useSwipeNav } from "@/hooks/useSwipeNav";
import Badge from "./Badge";
import { BoxedIcon, BoxedIconVariant } from "@/components/BoxedIcon";
import Icon from "./Icon";
import { useCases } from "./useCasesData";

const checkVariantClasses: Record<string, string> = {
  emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
  orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  primary: "bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400",
  red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  amber: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
};

// --- Preview Components ---

const FreelancersPreview = () => (
  <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl p-5 flex flex-col gap-3">
    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">This week</p>
    {[
      { label: "Design Work", time: "3h 15m", amount: "$162.50" },
      { label: "Client Calls", time: "1h 30m", amount: "$75.00" },
      { label: "Code Review", time: "2h 00m", amount: "$100.00" },
    ].map(row => (
      <div key={row.label} className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-xl px-4 py-3 shadow-sm">
        <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
        <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">{row.label}</span>
        <span className="text-xs text-gray-400 tabular-nums">{row.time}</span>
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">{row.amount}</span>
      </div>
    ))}
    <div className="flex items-center justify-between bg-emerald-600 text-white rounded-xl px-4 py-3">
      <span className="text-sm font-semibold">Total Billable</span>
      <span className="font-bold tabular-nums">$337.50</span>
    </div>
  </div>
);

const FocusPreview = () => (
  <div className="bg-orange-50 dark:bg-orange-950/30 rounded-2xl p-5 flex flex-col items-center gap-5">
    <div className="flex gap-2">
      {[1, 2, 3, 4].map(n => (
        <div key={n} className={`w-3 h-3 rounded-full ${n <= 3 ? "bg-orange-400" : "bg-gray-200 dark:bg-gray-700"}`} />
      ))}
    </div>
    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Focus Session 3 of 4</p>
    <div className="text-6xl font-black tabular-nums text-gray-900 dark:text-white tracking-tight">24:12</div>
    <div className="w-full bg-white dark:bg-gray-900 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
      <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Deep Work Session</span>
      <span className="ml-auto text-xs font-bold text-orange-500 dark:text-orange-400">RUNNING</span>
    </div>
  </div>
);

const StudentsPreview = () => (
  <div className="bg-purple-50 dark:bg-purple-950/30 rounded-2xl p-5 flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <span className="text-lg">🔥</span>
      <span className="text-sm font-semibold text-purple-700 dark:text-purple-400">14-day study streak</span>
    </div>
    {[
      { label: "Mathematics", time: "1h 30m", pct: 100 },
      { label: "Physics", time: "45m", pct: 60 },
      { label: "History", time: "30m", pct: 40 },
    ].map(row => (
      <div key={row.label} className="bg-white dark:bg-gray-900 rounded-xl px-4 py-3 flex flex-col gap-2 shadow-sm">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{row.label}</span>
          <span className="text-xs text-gray-400 tabular-nums">{row.time}</span>
        </div>
        <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-purple-400 rounded-full" style={{ width: `${row.pct}%` }} />
        </div>
      </div>
    ))}
  </div>
);

const DevelopersPreview = () => (
  <div className="bg-accent-100 dark:bg-accent-900/20 rounded-2xl p-5 flex flex-col gap-3">
    <p className="text-xs font-semibold text-accent-700 dark:text-accent-400 uppercase tracking-wide">Today</p>
    {[
      { label: "Feature #421", tag: "frontend", time: "2h 10m" },
      { label: "Code Review", tag: "review", time: "45m" },
      { label: "Bug Fix #88", tag: "backend", time: "1h 20m" },
      { label: "Stand-up", tag: "meeting", time: "15m" },
    ].map(row => (
      <div key={row.label} className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-xl px-4 py-3 shadow-sm">
        <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">{row.label}</span>
        <span className="text-[10px] font-medium px-2 py-0.5 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-full">{row.tag}</span>
        <span className="text-xs text-gray-400 tabular-nums">{row.time}</span>
      </div>
    ))}
  </div>
);

const FitnessPreview = () => (
  <div className="bg-red-50 dark:bg-red-950/30 rounded-2xl p-5 flex flex-col gap-4">
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 flex flex-col items-center gap-2 shadow-sm">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Morning Run</p>
      <div className="text-5xl font-black tabular-nums text-gray-900 dark:text-white tracking-tight">42:18</div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
        <span className="text-xs font-medium text-red-500 dark:text-red-400">Running</span>
      </div>
    </div>
    <div className="flex gap-1.5">
      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div className={`w-full h-1.5 rounded-full ${i < 4 ? "bg-red-400" : "bg-gray-200 dark:bg-gray-700"}`} />
          <span className="text-[9px] text-gray-400">{d}</span>
        </div>
      ))}
    </div>
  </div>
);

const LifePreview = () => (
  <div className="bg-amber-50 dark:bg-amber-950/30 rounded-2xl p-5 flex flex-col gap-3">
    <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">This week</p>
    {([
      { icon: "auto_stories", label: "Reading", time: "4h 20m", variant: "amber" },
      { icon: "coffee", label: "Cooking", time: "3h 10m", variant: "orange" },
      { icon: "code", label: "Side Project", time: "6h 45m", variant: "primary" },
      { icon: "fitness_center", label: "Yoga", time: "1h 30m", variant: "emerald" },
    ] as { icon: string; label: string; time: string; variant: BoxedIconVariant }[]).map(row => (
      <div key={row.label} className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-xl px-4 py-3 shadow-sm">
        <BoxedIcon icon={row.icon} size={14} variant={row.variant} />
        <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">{row.label}</span>
        <span className="text-xs text-gray-400 tabular-nums">{row.time}</span>
      </div>
    ))}
  </div>
);

const previewComponents = [
  FreelancersPreview,
  FocusPreview,
  StudentsPreview,
  DevelopersPreview,
  FitnessPreview,
  LifePreview,
];

// --- Main Component ---

export default function UseCasesE({
  disableTopPadding = false,
  disableBottomPadding = false,
}: {
  disableTopPadding?: boolean;
  disableBottomPadding?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { ref: scrollContainerRef, dragProps, didDrag } = useDragScroll();
  const Preview = previewComponents[active];
  const current = useCases[active];

  const { swipeProps } = useSwipeNav(
    () => setActive(i => Math.max(0, i - 1)),
    () => setActive(i => Math.min(useCases.length - 1, i + 1)),
  );

  const scrollPillIntoView = (i: number) => {
    const btn = pillRefs.current[i];
    const container = scrollContainerRef.current;
    if (!btn || !container) return;
    container.scrollTo({ left: btn.offsetLeft - 24, behavior: "smooth" });
  };

  useEffect(() => { scrollPillIntoView(active); }, [active]);

  return (
    <section
      className={`bg-gray-50 dark:bg-gray-950 px-6 md:px-12 ${disableTopPadding ? "pt-0" : "pt-24"} ${disableBottomPadding ? "pb-0" : "pb-24"}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="mb-4">Built for Everyone</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            However you track,{" "}
            <br className="hidden md:block" />
            SnappTracker fits.
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mx-auto">
            From billing clients to building habits, it adapts to the way you
            work and live.
          </p>
        </div>

        {/* Segmented Tab Bar */}
        <div ref={scrollContainerRef} {...dragProps} className="overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing -mx-6 md:-mx-12 lg:mx-0">
          <div className="flex gap-2 w-max px-6 md:px-12 lg:px-0 mx-auto lg:flex-wrap lg:w-auto lg:justify-center lg:max-w-4xl my-6">
            {useCases.map((uc, i) => (
              <button
                key={uc.title}
                ref={el => { pillRefs.current[i] = el; }}
                onClick={() => {
                  if (didDrag()) return;
                  setActive(i);
                  scrollPillIntoView(i);
                }}
                onPointerEnter={e => { if (e.pointerType !== "touch") setHovered(i); }}
                onPointerLeave={e => { if (e.pointerType !== "touch") setHovered(null); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-md font-medium whitespace-nowrap transition-all duration-200 shrink-0 border ${i === active
                  ? "bg-white dark:bg-gray-800 shadow-xl/5 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
                  : i === hovered
                    ? "border-transparent text-gray-800 dark:text-gray-100"
                    : "text-gray-500 dark:text-gray-400 border-transparent"
                  }`}
              >
                <BoxedIcon
                  icon={uc.icon}
                  size={14}
                  variant={i === active || i === hovered ? uc.variant : "default"}
                />
                {uc.title}
              </button>
            ))}
          </div>
        </div>


        {/* Content Panel */}
        <div {...swipeProps} className="-mx-6 md:-mx-12 lg:mx-0 px-6 md:px-12 lg:px-0 cursor-grab active:cursor-grabbing select-none">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 lg:p-10 shadow-xl/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left: App Preview */}
              <div key={`preview-${active}`} className="animate-in fade-in duration-200">
                <Preview />
              </div>

              {/* Right: Details */}
              <div key={`text-${active}`} className="flex flex-col animate-in fade-in duration-200">
                <BoxedIcon
                  icon={current.icon}
                  size={28}
                  variant={current.variant}
                  className="hidden lg:flex mb-5"
                  ariaLabel={`${current.title} icon`}
                />
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {current.headline}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                  {current.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {current.highlights.map(h => (
                    <li key={h} className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${checkVariantClasses[current.variant]}`}
                      >
                        <Icon name="check" size={12} weight={700} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
