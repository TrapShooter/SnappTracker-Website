"use client";

import React, { useState, useEffect } from 'react';
import Icon from './Icon';

// --- Shared Internal Components (Visual Mirrors of App UI) ---
// These components match the precise logic and metrics of the Snapp Tracker native app.

const BoxedIcon = ({ icon, variant, size = 20 }: { icon: string, variant: string, size?: number }) => {
  const variants: any = {
    primary: "bg-brand-light dark:bg-brand/10 text-brand dark:text-brand",
    purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    orange: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
    emerald: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    red: "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400",
  };
  return (
    <div className={`flex items-center justify-center shrink-0 p-2 rounded-lg ${variants[variant] || 'bg-gray-100 text-gray-600'}`}>
      <Icon name={icon} size={size} />
    </div>
  );
};

const TYPE_CONFIGS = {
  timer: { label: 'Timer', icon: 'timer', bgClass: 'bg-cyan-100 dark:bg-cyan-900/30', textClass: 'text-cyan-600 dark:text-cyan-400', activeBgClass: 'bg-cyan-600' },
  countdown: { label: 'Countdown', icon: 'hourglass_bottom', bgClass: 'bg-purple-100 dark:bg-purple-900/30', textClass: 'text-purple-600 dark:text-purple-400', activeBgClass: 'bg-purple-600' },
  pomodoro: { label: 'Pomodoro', icon: 'bolt', bgClass: 'bg-orange-100 dark:bg-orange-900/30', textClass: 'text-orange-600 dark:text-orange-400', activeBgClass: 'bg-orange-600' },
  manual: { label: 'Manual', icon: 'add', bgClass: 'bg-emerald-100 dark:bg-emerald-900/30', textClass: 'text-emerald-600 dark:text-emerald-400', activeBgClass: 'bg-emerald-600' },
  cut: { label: 'Cut', icon: 'content_cut', bgClass: 'bg-gray-100 dark:bg-gray-800', textClass: 'text-gray-500 dark:text-gray-400', activeBgClass: 'bg-gray-600' }
};


const SegmentedControl = ({ value, options }: { value: string, options: any[] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });
  const [ready, setReady] = useState(false);
  const activeIndex = options.findIndex(o => o.value === value);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    if (!ready || !containerRef.current) return;
    const rafId = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;

      const CONTAINER_PADDING = 4;
      const CONTAINER_BORDER = 1;
      const INACTIVE_WIDTH = 80;

      const containerWidth = container.offsetWidth;
      const availableWidth = containerWidth - (2 * CONTAINER_PADDING) - (2 * CONTAINER_BORDER);

      const inactiveCount = options.length - 1;
      const totalInactiveWidth = inactiveCount * INACTIVE_WIDTH;
      const activeWidth = availableWidth - totalInactiveWidth;
      const targetLeft = CONTAINER_PADDING + (activeIndex * INACTIVE_WIDTH);

      setSliderStyle({ width: activeWidth, left: targetLeft });
    });
    return () => cancelAnimationFrame(rafId);
  }, [activeIndex, options.length, ready]);

  const activeOption = options[activeIndex];

  return (
    <div
      ref={containerRef}
      className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-1 rounded-full relative isolate flex items-center justify-between transition-all duration-200 w-full"
    >
      <div
        className={`absolute inset-y-1 left-0 rounded-full shadow-sm z-0 ${ready ? 'transition-[width,transform,background-color] duration-200 ease-out-smooth' : ''} ${activeOption?.activeBgClassName || 'bg-accent-600'}`}
        style={{
          width: `${sliderStyle.width}px`,
          transform: `translateX(${sliderStyle.left}px)`
        }}
      />
      {options.map((option) => {
        const isActive = value === option.value;
        const shouldExpand = isActive;
        return (
          <div
            key={String(option.value)}
            className={`relative z-10 font-medium transition-all duration-200 ease-out-smooth rounded-full flex items-center justify-center overflow-hidden py-3 ${shouldExpand ? 'flex-1 px-2 gap-2 text-white' : 'w-20 px-0 gap-0 text-gray-400'}`}
          >
            <div className="flex items-center justify-center">
              {option.icon}
            </div>
            {/* CSS Grid Animation Wrapper - Allows smooth width transition for the text label */}
            <div className={`grid transition-[grid-template-columns] duration-200 ease-out-smooth ${shouldExpand ? 'grid-cols-[1fr]' : 'grid-cols-[0fr]'}`}>
              <span className={`overflow-hidden whitespace-nowrap transition-opacity duration-200 ${shouldExpand ? 'opacity-100' : 'opacity-0'}`}>
                {option.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// --- Preview Components (Mirror of VisualOnboardingView_OLD) ---

const ModesPreview = () => {
  const [mode, setMode] = useState<'timer' | 'countdown' | 'pomodoro'>('timer');

  useEffect(() => {
    const interval = setInterval(() => {
      setMode(prev => {
        const next = prev === 'timer' ? 'countdown' : prev === 'countdown' ? 'pomodoro' : 'timer';
        return next;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const options = [
    { value: 'timer', label: 'Timer', icon: <Icon name="timer" size={20} />, activeBgClassName: 'bg-cyan-600' },
    { value: 'countdown', label: 'Countdown', icon: <Icon name="hourglass_bottom" size={20} />, activeBgClassName: 'bg-purple-600' },
    { value: 'pomodoro', label: 'Pomodoro', icon: <Icon name="bolt" size={20} />, activeBgClassName: 'bg-orange-600' },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Glow Background - Hardware accelerated radial gradient for mobile/safari compatibility */}
      <div
        key={mode}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 animate-in fade-in duration-700 fill-mode-both pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${mode === 'timer' ? '#3b82f6' : mode === 'countdown' ? '#a855f7' : '#f97316'} 0%, transparent 70%)`
        }}
      />

      <div className="relative w-full flex flex-col items-center gap-6 px-4 py-8 bg-white/30 dark:bg-white/5 rounded-3xl border border-white dark:border-white/10 shadow-xl overflow-hidden">
        <SegmentedControl
          value={mode}
          options={options}
        />
      </div>
    </div>
  );
};

const GroupsPreview = () => {
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder(prev => [prev[1], prev[2], prev[0]]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const groups = [
    { name: 'Work', icon: 'business_center', variant: 'primary' },
    { name: 'Personal', icon: 'person', variant: 'purple' },
    { name: 'Fitness', icon: 'fitness_center', variant: 'orange' },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Glow Background - Hardware accelerated radial gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)' }}
      />

      <div className="relative w-full h-[262px] bg-white/30 dark:bg-white/5 rounded-[2.5rem] border border-white dark:border-white/10 shadow-xl">
        {groups.map((group, idx) => {
          const position = order.indexOf(idx);
          return (
            <div
              key={idx}
              className="absolute left-0 right-0 flex items-center gap-4 p-4 m-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 transition-transform duration-700 ease-out-smooth will-change-transform"
              style={{
                transform: `translateY(${position * 80}px)`,
                opacity: 1,
                zIndex: 3 - position,
              }}
            >
              <BoxedIcon icon={group.icon} variant={group.variant} size={20} />
              <span className="font-bold text-gray-900 dark:text-white text-sm">{group.name}</span>
              <div className="ml-auto w-8 h-1.5 bg-gray-200 dark:bg-white/10 rounded-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const HistoryPreview = () => {
  const mockSessions = [
    {
      total: '3h 15m',
      date: 'Today',
      entries: [
        { name: 'Design Review', type: 'timer', time: '40m' },
        { name: 'Short Break', type: 'countdown', time: '15m' },
        { name: 'Morning Focus', type: 'pomodoro', time: '2h 20m' },
      ]
    },
    {
      total: '5h 30m',
      date: 'Yesterday',
      entries: [
        { name: 'Cut', type: 'cut', time: '' },
        { name: 'Evening Walk', type: 'timer', time: '1h 15m' },
        { name: 'Reading', type: 'manual', time: '1h 30m' },
        { name: 'Research', type: 'countdown', time: '2h 45m' },
      ]
    },
    {
      total: '4h 30m',
      date: 'Monday',
      entries: [
        { name: 'Cut', type: 'cut', time: '' },
        { name: 'Code Session', type: 'pomodoro', time: '3h 30m' },
        { name: 'Client Call', type: 'timer', time: '1h' },
      ]
    }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Glow Background - Hardware accelerated radial gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }}
      />

      <div className="relative flex flex-col items-center w-full h-[400px] max-h-full overflow-hidden bg-white/30 dark:bg-white/5 rounded-[2.5rem] border border-white dark:border-white/10 shadow-xl">
        {/* Scroll Container */}
        <div className="absolute top-1/2 left-1/2 w-full flex flex-col gap-4 animate-[walkthrough-scroll_12s_ease-in-out_infinite] px-4 sm:px-6 z-10">
          {mockSessions.map((session, sIdx) => (
            <div key={sIdx} className="bg-white dark:bg-gray-900 rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-white/5 shrink-0">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100 dark:border-white/5 text-left">
                <div className="flex flex-col gap-0.5 items-start">
                  <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500">Session</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{session.date}</span>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500">Total</span>
                  <span className="text-lg font-bold text-gray-900 dark:text-white tabular-nums leading-none">{session.total}</span>
                </div>
              </div>
              <div className="space-y-4">
                {session.entries.map((entry, eIdx) => {
                  const config: any = TYPE_CONFIGS[entry.type as keyof typeof TYPE_CONFIGS];
                  return (
                    <div key={eIdx} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 z-10 ring-4 ring-white dark:ring-gray-900 ${config.bgClass} ${config.textClass}`}>
                        <Icon name={config.icon} size={14} weight={700} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex-1 text-left">{entry.name}</span>
                      {entry.type !== 'cut' && (
                        <span className="text-xs font-bold text-gray-400 dark:text-gray-500 tabular-nums">{entry.time}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Walkthrough Component ---

const walkthroughSteps = [
  {
    subtitle: "Versatile Timer Modes",
    title: "Track Your Way",
    description: "Switch between Timer, Countdown, and Pomodoro modes to match your workflow exactly how you need it.",
    Preview: ModesPreview,
    reverse: false
  },
  {
    subtitle: "Groups & Reordering",
    title: "Stay Organized",
    description: "Categorize your trackers into groups and arrange them exactly how you like. Move smoothly between projects.",
    Preview: GroupsPreview,
    reverse: true
  },
  {
    subtitle: "History & Performance",
    title: "Master Your Data",
    description: "Review detailed logs, filter them, and use Cuts to segment your tracking into sessions for deep insights.",
    Preview: HistoryPreview,
    reverse: false
  }
];

export default function Walkthrough() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-24">
      <div className="max-w-6xl mx-auto space-y-16">

        {walkthroughSteps.map((step, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row lg:justify-between items-center p-10 lg:gap-24 gap-8 ${step.reverse ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-sm font-medium text-brand-dark dark:text-brand tracking-tight mb-2">
                {step.subtitle}
              </h2>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                {step.description}
              </p>
            </div>

            {/* Preview Phone/Card Container */}
            <div className="flex-1 w-full max-w-lg flex flex-col items-center justify-center">
              <step.Preview />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
