import DemoWidget from "@/components/demo/DemoWidget";

export default function DemoSection() {
  return (
    <section className="bg-white py-24 px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-medium text-accent-600 tracking-tight mb-2">
              Try it now
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-5">
              Time tracking, right here
            </h2>
            <p className="text-lg text-zinc-500 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              Pick a mode and hit play. No account needed — just the timer, working exactly as it does in the app.
            </p>
            <ul className="space-y-3 text-sm text-zinc-500 max-w-xs mx-auto lg:mx-0">
              {[
                { icon: "timer", text: "Timer — counts up, no limits" },
                { icon: "hourglass_bottom", text: "Countdown — set a target and wind down" },
                { icon: "bolt", text: "Pomodoro — focus and break cycles" },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span
                    className="material-symbols-rounded text-accent-600 shrink-0"
                    style={{ fontSize: 18, fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}
                  >
                    {icon}
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: live widget */}
          <div className="flex-1 w-full max-w-sm lg:max-w-none">
            <DemoWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
