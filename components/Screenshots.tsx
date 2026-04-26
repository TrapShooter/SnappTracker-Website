import Image from "next/image";

// Add your screenshot files to /public/screenshots/ and list them here.
// If no screenshots are present, a placeholder layout is shown.
const screenshots: { src: string; alt: string }[] = [
  // { src: "/screenshots/timer.png", alt: "Timer screen" },
  // { src: "/screenshots/history.png", alt: "History screen" },
  // { src: "/screenshots/stats.png", alt: "Stats screen" },
];

export default function Screenshots() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Clean. Precise. Effortless.
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            An interface designed around how you actually work — not the other way around.
          </p>
        </div>

        {screenshots.length > 0 ? (
          <div className="flex gap-6 overflow-x-auto pb-4 justify-center">
            {screenshots.map((s) => (
              <div
                key={s.src}
                className="shrink-0 w-64 rounded-3xl overflow-hidden shadow-xl border border-gray-100"
              >
                <Image src={s.src} alt={s.alt} width={256} height={512} className="w-full h-auto" />
              </div>
            ))}
          </div>
        ) : (
          /* Placeholder UI mockups — replace with real screenshots */
          <div className="flex gap-6 justify-center flex-wrap">
            <MockScreen title="Timer" color="#11aed7">
              <MockTimerContent />
            </MockScreen>
            <MockScreen title="History" color="#6366f1">
              <MockHistoryContent />
            </MockScreen>
            <MockScreen title="Stats" color="#10b981">
              <MockStatsContent />
            </MockScreen>
          </div>
        )}
      </div>
    </section>
  );
}

function MockScreen({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-56 shrink-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-white">
      {/* Status bar */}
      <div className="bg-gray-900 h-7 flex items-center justify-center">
        <div className="w-16 h-3 bg-gray-700 rounded-full" />
      </div>
      {/* Header */}
      <div style={{ backgroundColor: color + "15" }} className="px-4 py-3 border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</p>
      </div>
      {/* Body */}
      <div className="bg-white p-4 min-h-72">{children}</div>
      {/* Tab bar */}
      <div className="border-t border-gray-100 bg-white h-12 flex items-center justify-around px-4">
        {["⏱", "📋", "📊", "⚙️"].map((icon) => (
          <span key={icon} className="text-lg">{icon}</span>
        ))}
      </div>
    </div>
  );
}

function MockTimerContent() {
  return (
    <div className="flex flex-col items-center gap-4 pt-4">
      <div className="text-3xl font-mono font-bold text-gray-900">00:23:47</div>
      <div className="w-16 h-16 rounded-full bg-[#11aed7] flex items-center justify-center shadow-lg">
        <span className="text-white text-2xl">⏸</span>
      </div>
      <div className="w-full mt-2">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Session 1</span>
          <span>12:30 PM</span>
        </div>
        <div className="h-1 bg-gray-100 rounded-full">
          <div className="h-1 w-3/5 bg-[#11aed7] rounded-full" />
        </div>
      </div>
      <div className="w-full rounded-xl bg-gray-50 p-3 text-center">
        <p className="text-xs text-gray-400">Cut</p>
        <p className="text-sm font-semibold text-gray-700">✂ Mark session</p>
      </div>
    </div>
  );
}

function MockHistoryContent() {
  const items = ["Design review", "Client call", "Code review", "Documentation"];
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <div key={item} className="flex items-center gap-3 rounded-xl bg-gray-50 p-2.5">
          <div className="h-2 w-2 rounded-full bg-[#6366f1]" />
          <div className="flex-1">
            <p className="text-xs font-medium text-gray-800">{item}</p>
            <p className="text-[10px] text-gray-400">{`${i + 1}h ${15 + i * 7}m`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MockStatsContent() {
  const bars = [60, 80, 45, 90, 70, 55, 85];
  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <p className="text-2xl font-bold text-gray-900">32h 14m</p>
        <p className="text-xs text-gray-400">This week</p>
      </div>
      <div className="flex items-end gap-1.5 h-20 justify-center">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md"
            style={{ height: `${h}%`, backgroundColor: i === 3 ? "#10b981" : "#d1fae5" }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-gray-400">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
    </div>
  );
}
