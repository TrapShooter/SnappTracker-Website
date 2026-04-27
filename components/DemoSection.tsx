import DemoWidget from "@/components/demo/DemoWidget";

export default function DemoSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-24 px-6 md:px-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-24 gap-8">
          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-medium text-accent-600 tracking-tight mb-2">
              Try it now
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
              Time tracking, right here
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              Pick a mode and hit play. No account needed, just the timer, working exactly as it does in the app.
            </p>
            <ul className="space-y-3 text-md text-gray-500 dark:text-gray-400 mx-auto lg:mx-0">
              {[
                { icon: "timer", title: "Timer", desc: "Counts up, no limits", bgClass: "bg-cyan-100 dark:bg-cyan-900/30", textClass: "text-cyan-600 dark:text-cyan-400" },
                { icon: "hourglass_bottom", title: "Countdown", desc: "Set a target and wind down", bgClass: "bg-purple-100 dark:bg-purple-900/30", textClass: "text-purple-600 dark:text-purple-400" },
                { icon: "bolt", title: "Pomodoro", desc: "Focus and break cycles", bgClass: "bg-orange-100 dark:bg-orange-900/30", textClass: "text-orange-600 dark:text-orange-400" },
              ].map(({ icon, title, desc, bgClass, textClass }) => (
                <li key={title} className="flex items-center justify-center lg:justify-start gap-3 text-left">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${bgClass} ${textClass}`}>
                    <span
                      className="material-symbols-rounded"
                      style={{ fontSize: 18, fontVariationSettings: "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 20" }}
                    >
                      {icon}
                    </span>
                  </div>
                  <span>
                    <span className="font-bold text-gray-900 dark:text-white">{title}</span>. {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: live widget */}
          <div className="flex-1 w-full">
            <DemoWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
