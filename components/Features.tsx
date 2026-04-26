import Icon from "@/components/Icon";

const features = [
  {
    icon: "content_cut",
    title: "The Cut Feature",
    description:
      "Switch contexts instantly without losing your flow. Cut creates a session boundary and resets the visual timer — no stopping, no losing history.",
    highlight: true,
  },
  {
    icon: "timer",
    title: "Three Timer Modes",
    description:
      "Stopwatch for standard tracking, Countdown with auto-stop, and Pomodoro with customizable focus and break cycles.",
    highlight: false,
  },
  {
    icon: "add_2",
    title: "Manual Entries",
    description:
      "Forgot to start the timer? Log any past activity with a custom start and end time. Your history stays accurate.",
    highlight: false,
  },
  {
    icon: "folder_open",
    title: "Unlimited Organization",
    description:
      "Create as many trackers as you need, organized into customizable groups. Find anything instantly.",
    highlight: false,
  },
  {
    icon: "bar_chart",
    title: "Analytics & Stats",
    description:
      "Charts, streaks, session goals, and billable time tracking. Understand exactly where your time goes. Pro feature.",
    highlight: false,
  },
  {
    icon: "cloud_upload",
    title: "Cloud Sync",
    description:
      "Your data synced seamlessly across all devices — iOS, Android, and web. Export as CSV or JSON anytime. Pro feature.",
    highlight: false,
  },
];

export default function Features() {
  return (
    <section className="bg-zinc-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-lg text-zinc-500 max-w-xl mx-auto">
            Designed for professionals who need precision without administrative overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-2xl p-6 ${feature.highlight
                ? "bg-[#11aed7] text-white"
                : "bg-white border border-zinc-100 text-zinc-900"
                }`}
            >
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${feature.highlight ? "bg-white/20" : "bg-[#e0f5fe]"
                  }`}
              >
                <Icon
                  name={feature.icon}
                  size={20}
                  className={feature.highlight ? "text-white" : "text-[#11aed7]"}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p
                className={`text-sm leading-relaxed ${feature.highlight ? "text-white/80" : "text-zinc-500"
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
