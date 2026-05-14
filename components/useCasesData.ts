import { BoxedIconVariant } from "@/components/BoxedIcon";

export type UseCase = {
  icon: string;
  title: string;
  headline: string;
  description: string;
  variant: BoxedIconVariant;
  highlights: string[];
};

export const useCases: UseCase[] = [
  {
    icon: "work",
    title: "Freelancers & Consultants",
    headline: "Bill accurately, get paid faster.",
    description:
      "Log billable hours accurately with custom hourly rates, rounding rules, and one-click CSV export ready for invoicing.",
    variant: "emerald",
    highlights: ["Billable Time Tracking", "Rounding Rules", "CSV Export"],
  },
  {
    icon: "bolt",
    title: "Deep Focus & Flow",
    headline: "Do your best work, session by session.",
    description:
      "Stay in the zone with Pomodoro cycles, countdown sessions, and daily goals that build lasting streaks.",
    variant: "orange",
    highlights: ["Pomodoro Mode", "Session Goals", "Countdown Timer"],
  },
  {
    icon: "school",
    title: "Students & Learners",
    headline: "Build the study habit that sticks.",
    description:
      "Build a study habit with Pomodoro blocks, session targets, and streaks that keep you accountable across every subject.",
    variant: "purple",
    highlights: ["Pomodoro Blocks", "Habit Streaks", "Session Targets"],
  },
  {
    icon: "code",
    title: "Developers & Creatives",
    headline: "Know exactly where your time goes.",
    description:
      "Track work by project and label, surface your productive patterns in analytics, and see exactly where time goes.",
    variant: "primary",
    highlights: ["Labeled Sessions", "Analytics & Stats", "History Filters"],
  },
  {
    icon: "fitness_center",
    title: "Fitness & Wellness",
    headline: "Track every rep, every run, every rest.",
    description:
      "Time every workout and rest interval, organize by activity, and build momentum with habit streaks.",
    variant: "red",
    highlights: ["Unlimited Trackers", "Habit Streaks", "Groups"],
  },
  {
    icon: "auto_stories",
    title: "Life Logging",
    headline: "See the full picture of how you spend your days.",
    description:
      "From reading to cooking to side projects. Log anything and get a clear picture of how you actually spend your days.",
    variant: "amber",
    highlights: ["Custom Groups", "Manual Entry", "Full History"],
  },
];
