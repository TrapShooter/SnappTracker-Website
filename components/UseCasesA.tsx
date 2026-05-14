import Badge from "./Badge";
import { BoxedIcon } from "@/components/BoxedIcon";
import { useCases } from "./useCasesData";

const colSpanClass = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-2", "lg:col-span-1", "lg:col-span-2"];

export default function UseCasesA({
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

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {useCases.map((uc, i) => (
            <li
              key={uc.title}
              className={`${colSpanClass[i]} rounded-2xl p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl/5`}
            >
              <BoxedIcon
                icon={uc.icon}
                size={20}
                variant={uc.variant}
                className="mb-4"
                ariaLabel={`${uc.title} icon`}
              />
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {uc.title}
              </h3>
              <p className="text-md leading-relaxed text-gray-500 dark:text-gray-400">
                {uc.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
