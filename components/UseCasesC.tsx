"use client";

import { useState } from "react";
import Badge from "./Badge";
import { BoxedIcon } from "@/components/BoxedIcon";
import Icon from "./Icon";
import { useCases } from "./useCasesData";

const badgeVariantClasses: Record<string, string> = {
  emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
  orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  primary: "bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400",
  red: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
  amber: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
};

export default function UseCasesC({
  disableTopPadding = false,
  disableBottomPadding = false,
}: {
  disableTopPadding?: boolean;
  disableBottomPadding?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const current = useCases[active];

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

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-xl/5 lg:flex lg:flex-row">

          {/* Mobile: stacked accordions */}
          <div className="lg:hidden divide-y divide-gray-200 dark:divide-gray-800">
            {useCases.map((uc, i) => (
              <div key={uc.title}>
                <button
                  onClick={() => setActive(active === i ? -1 : i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center gap-3 w-full px-5 py-6 text-left"
                >
                  <BoxedIcon
                    icon={uc.icon}
                    size={16}
                    variant={uc.variant}
                    ariaLabel={`${uc.title} icon`}
                  />
                  <span className="flex-1 text-md font-medium text-gray-900 dark:text-white">
                    {uc.title}
                  </span>
                  <Icon
                    name="expand_more"
                    size={20}
                    className={`text-gray-400 transition-transform duration-200 ${i === active ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${i === active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className={`px-5 pt-2 pb-8 transition-opacity duration-200 ${i === active ? "opacity-100" : "opacity-0"}`}>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{uc.headline}</p>
                      <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                        {uc.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {uc.highlights.map(h => (
                          <li
                            key={h}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium ${badgeVariantClasses[uc.variant]}`}
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: vertical sidebar */}
          <ul className="hidden lg:block w-64 shrink-0 border-r border-gray-200 dark:border-gray-800">
            {useCases.map((uc, i) => (
              <li key={uc.title} className="border-b border-gray-200 dark:border-gray-800 last:border-0">
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`flex items-center gap-3 px-5 py-4 w-full text-left ${i === active
                    ? "bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                    : i === hovered
                      ? "bg-gray-50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-100"
                      : "text-gray-500 dark:text-gray-400"
                    }`}
                >
                  <BoxedIcon
                    icon={uc.icon}
                    size={16}
                    variant={i === active || i === hovered ? uc.variant : "default"}
                    ariaLabel={`${uc.title} icon`}
                  />
                  <span className="text-md font-medium">{uc.title}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop: detail panel */}
          {active >= 0 && (
            <div key={active} className="hidden lg:block flex-1 p-10">
              <BoxedIcon
                icon={current.icon}
                size={28}
                variant={current.variant}
                className="mb-5"
                ariaLabel={`${current.title} icon`}
              />
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {current.headline}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-lg">
                {current.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {current.highlights.map(h => (
                  <li
                    key={h}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${badgeVariantClasses[current.variant]}`}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
