import { personalProjects, projects } from "../../data";

// Counts how many featured projects list each technology. It reads the same `tech` tags that appear on
// the project cards, so the chart always matches them. A few spellings are merged so ".NET Core"
// and ".NET 10" count as one technology.
const SAME_AS = {
  ".NET Core": ".NET",
  ".NET 10": ".NET",
  "ASP.NET Core": ".NET",
  "ASP.NET Core Web API": ".NET",
  "React JS": "React",
  "JavaScript (ES6+)": "JavaScript",
};

const counts = new Map();
for (const project of [...projects, ...personalProjects]) {
  const seen = new Set(project.tech.map((t) => SAME_AS[t] ?? t)); // once per project
  for (const tech of seen) counts.set(tech, (counts.get(tech) ?? 0) + 1);
}

const top = [...counts.entries()]
  .filter(([, n]) => n >= 2)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .slice(0, 8);

const biggest = top[0]?.[1] ?? 1;

export default function TechUsageChart() {
  if (top.length === 0) return null;

  return (
    <figure className="mb-8 rounded-xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
      <figcaption>
        <span className="text-lg font-semibold text-blue-400">Across my projects</span>
        <span className="mt-1 block text-sm text-slate-400">
          How many of my featured projects, work and personal, use each technology.
        </span>
      </figcaption>

      <ul className="mt-5 space-y-3">
        {top.map(([tech, n]) => (
          <li key={tech} className="grid grid-cols-[7rem_1fr_2rem] items-center gap-3 text-sm sm:grid-cols-[9rem_1fr_2rem]">
            <span className="truncate text-slate-200">{tech}</span>
            <span className="h-2.5 overflow-hidden rounded-full bg-slate-800">
              <span
                className="bar-grow block h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                style={{ width: `${(n / biggest) * 100}%` }}
              />
            </span>
            <span className="text-right tabular-nums text-slate-400">{n}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
