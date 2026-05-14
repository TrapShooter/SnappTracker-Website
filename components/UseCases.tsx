import Badge from "./Badge";
import { BoxedIcon, BoxedIconVariant } from "@/components/BoxedIcon";

type UseCase = {
  icon: string;
  title: string;
  description: string;
  variant: BoxedIconVariant;
};

const useCases: UseCase[] = [
  {
    icon: "work",
    title: "Freelancers & Consultants",
    description:
      "Log billable hours accurately with custom hourly rates, rounding rules, and one-click CSV export ready for invoicing.",
    variant: "emerald",
  },
  {
    icon: "bolt",
    title: "Deep Focus & Flow",
    description:
      "Stay in the zone with Pomodoro cycles, countdown sessions, and daily goals that build lasting streaks.",
    variant: "orange",
  },
  {
    icon: "school",
    title: "Students & Learners",
    description:
      "Build a study habit with Pomodoro blocks, session targets, and streaks that keep you accountable across every subject.",
    variant: "purple",
  },
  {
    icon: "code",
    title: "Developers & Creatives",
    description:
      "Track work by project and label, surface your productive patterns in analytics, and see exactly where time goes.",
    variant: "primary",
  },
  {
    icon: "fitness_center",
    title: "Fitness & Wellness",
    description:
      "Time every workout and rest interval, organize by activity, and build momentum with habit streaks.",
    variant: "red",
  },
  {
    icon: "auto_stories",
    title: "Life Logging",
    description:
      "From reading to cooking to side projects. Log anything and get a clear picture of how you actually spend your days.",
    variant: "amber",
  },
];

export default function UseCases({
  disableTopPadding = false,
  disableBottomPadding = false,
}: {
  disableTopPadding?: boolean;
  disableBottomPadding?: boolean;
}) {
  return (
    <section
      className={`bg-gray-50 dark:bg-gray-950 px-6 md:px-12 ${disableTopPadding ? "pt-0" : "pt-24"} ${disableBottomPadding ? "pb-0" : "pb-24"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
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

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-xl/5 rounded-2xl overflow-hidden gap-px bg-gray-200 dark:bg-black border border-gray-200">
          {useCases.map((useCase) => (
            <li
              key={useCase.title}
              className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            >
              <BoxedIcon
                icon={useCase.icon}
                size={20}
                variant={useCase.variant}
                className="mb-4"
                ariaLabel={`${useCase.title} icon`}
              />
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-md leading-relaxed text-gray-500 dark:text-gray-400">
                {useCase.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
