import { BoxedIcon, BoxedIconVariant } from "@/components/BoxedIcon";

type Feature = {
  icon: string;
  title: string;
  description: string;
  highlight: boolean;
  variant?: BoxedIconVariant;
};

const features: Feature[] = [
  {
    icon: "content_cut",
    title: "The Cut Feature",
    description:
      "Switch contexts instantly without losing your flow. Cut creates a session boundary and resets the visual tracker. No stopping, no losing history.",
    highlight: true,
  },
  {
    icon: "stopwatch",
    title: "Three Tracking Modes",
    description:
      "Stopwatch for standard tracking, Countdown with auto-stop, and Pomodoro with customizable focus and break cycles.",
    highlight: false,
    variant: "primary",
  },
  {
    icon: "add_2",
    title: "Manual Entries",
    description:
      "Forgot to start the stopwatch? Log any past activity with a custom start and end time. Your history stays accurate.",
    highlight: false,
    variant: "emerald",
  },
  {
    icon: "folder_open",
    title: "Unlimited Organization",
    description:
      "Create as many trackers as you need, organized into customizable groups. Find anything instantly.",
    highlight: false,
    variant: "amber",
  },
  {
    icon: "bar_chart",
    title: "Analytics & Stats",
    description:
      "Charts, streaks, session goals, and billable time tracking. Understand exactly where your time goes. Pro feature.",
    highlight: false,
    variant: "red",
  },
  {
    icon: "cloud_upload",
    title: "Cloud Sync",
    description:
      "Your data synced seamlessly across all devices, iOS, Android, and web. Export as CSV or JSON anytime. Pro feature.",
    highlight: false,
    variant: "purple",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Designed for professionals who need precision without administrative overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-2xl p-6 transition-all duration-700 shadow-xl/5 hover:shadow-2xl/30 hover:shadow-accent-600 hover:scale-[103%] ${feature.highlight
                ? "bg-accent-700 text-white"
                : "bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white"
                }`}
            >
              <BoxedIcon
                icon={feature.icon}
                size={20}
                variant={feature.highlight ? "accent-solid" : feature.variant}
                className={`mb-4 !w-10 !h-10 !rounded-xl ${feature.highlight ? "!bg-white/20 !text-white" : ""
                  }`}
              />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p
                className={`text-md leading-relaxed ${feature.highlight ? "text-white/80" : "text-gray-500 dark:text-gray-400"
                  }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
