import Badge from "./Badge";
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
    icon: "cloud_upload",
    title: "Cloud Sync",
    description:
      "Keep your data in sync across iOS, Android, and Web. Seamless real-time updates with full offline support.",
    highlight: false,
    variant: "purple",
  },
  {
    icon: "payments",
    title: "Billable Tracking",
    description:
      "Track hourly earnings with custom rates and currencies, and export professional billable reports.",
    highlight: false,
    variant: "emerald",
  },
  {
    icon: "leaderboard",
    title: "Analytics & Stats",
    description:
      "Analyze activity patterns, histograms, and labels. Track billable revenue and goals with detailed visual reports.",
    highlight: false,
    variant: "primary",
  },
  {
    icon: "calculate",
    title: "Rounding Rules",
    description:
      "Snap logs to custom intervals with rounding and minimum durations. Apply per entry or session.",
    highlight: false,
    variant: "amber",
  },
  {
    icon: "flag",
    title: "Session Goals",
    description:
      "Set session targets and track your consistency with streaks. Reach your productivity milestones with ease.",
    highlight: false,
    variant: "red",
  },
  {
    icon: "file_export",
    title: "CSV & JSON Export",
    description:
      "Export your complete history to CSV for spreadsheets and invoicing, or create full JSON backups.",
    highlight: false,
    variant: "orange",
  },

];

export default function Features({
  disableTopPadding = false,
  disableBottomPadding = false,
}: {
  disableTopPadding?: boolean;
  disableBottomPadding?: boolean;
}) {
  return (
    <section className={`bg-gray-50 dark:bg-gray-950 px-6 md:px-12 ${disableTopPadding ? 'pt-0' : 'pt-24'} ${disableBottomPadding ? 'pb-0' : 'pb-24'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="dark" className="mb-4">
            SnappTracker Pro
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Everything you need{" "}
            <br className="hidden md:block" />
            to understand where your time goes
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mx-auto">
            Unlock advanced features for serious tracking and deeper insights.
          </p>
        </div>
        {/* 
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <li
              key={feature.title}
              className={`rounded-2xl p-6 transition-all duration-700 shadow-xl/5 hover:shadow-2xl/30 hover:shadow-accent-600 hover:scale-[103%] ${feature.highlight
                ? "bg-accent-700 text-white"
                : "bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white"
                }`}
            >
              <BoxedIcon
                icon={feature.icon}
                size={20}
                variant={feature.highlight ? "ghost" : feature.variant}
                className="mb-4"
                ariaLabel={`${feature.title} icon`}
              />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p
                className={`text-md leading-relaxed ${feature.highlight ? "text-white/80" : "text-gray-500 dark:text-gray-400"
                  }`}
              >
                {feature.description}
              </p>
            </li>
          ))}
        </ul> */}


        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-xl/5 rounded-2xl overflow-hidden gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
          {features.map((feature) => (
            <li
              key={feature.title}
              className={`p-8 transition-all duration-700 ${feature.highlight
                ? "bg-accent-700 text-white"
                : "bg-white dark:bg-gray-900  text-gray-900 dark:text-white"
                }`}
            >
              <BoxedIcon
                icon={feature.icon}
                size={20}
                variant={feature.highlight ? "ghost" : feature.variant}
                className="mb-4"
                ariaLabel={`${feature.title} icon`}
              />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p
                className={`text-md leading-relaxed ${feature.highlight ? "text-white/80" : "text-gray-500 dark:text-gray-400"
                  }`}
              >
                {feature.description}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
