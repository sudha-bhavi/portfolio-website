import { experience } from "../../data";

// A Gantt-style view of the roles in data.js. Nothing here is typed in separately: bars and
// years come from the "Feb 2024 – May 2025" strings, so the chart cannot drift from the text below it.
const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

function monthStart(text) {
  const [month, year] = text.trim().split(/\s+/);
  const m = MONTHS[month];
  return m === undefined ? NaN : new Date(Number(year), m, 1).getTime();
}

function parseRange(dates) {
  const [from, to] = dates.split(/[–-]/).map((s) => s.trim());
  const start = monthStart(from);
  // "Present" (or anything unparseable) means still ongoing; otherwise include the whole end month.
  const endMonth = monthStart(to ?? "");
  const end = Number.isNaN(endMonth) ? Date.now() : new Date(new Date(endMonth).getFullYear(), new Date(endMonth).getMonth() + 1, 1).getTime();
  return [start, end];
}

const BAR_COLORS = [
  "from-blue-500 to-cyan-400",
  "from-violet-500 to-fuchsia-400",
  "from-emerald-500 to-teal-300",
];

const rows = experience.flatMap((job, jobIndex) =>
  job.roles.map((role) => {
    const [start, end] = parseRange(role.dates);
    return { company: job.company, title: role.title, dates: role.dates, start, end, color: BAR_COLORS[jobIndex % BAR_COLORS.length] };
  }),
).filter((r) => !Number.isNaN(r.start));

const min = Math.min(...rows.map((r) => r.start));
const max = Math.max(...rows.map((r) => r.end));
const pct = (t) => ((t - min) / (max - min)) * 100;

const firstYear = new Date(min).getFullYear() + 1;
const lastYear = new Date(max).getFullYear();
const ticks = Array.from({ length: Math.max(0, lastYear - firstYear + 1) }, (_, i) => {
  const year = firstYear + i;
  return { year, pos: pct(new Date(year, 0, 1).getTime()) };
}).filter((t) => t.pos > 0 && t.pos < 100);

export default function CareerTimeline() {
  if (rows.length === 0) return null;

  return (
    // The roles are listed in full text right below, so this picture is hidden from screen readers.
    <figure aria-hidden="true" className="mb-12 rounded-xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5">
      <figcaption className="text-xs font-semibold uppercase tracking-widest text-blue-400">Career timeline</figcaption>

      <div className="mt-4 grid grid-cols-[minmax(0,8.5rem)_1fr] items-center gap-x-3 gap-y-2 sm:grid-cols-[13rem_1fr]">
        {rows.map((r) => {
          const left = pct(r.start);
          const width = Math.max(1.5, pct(r.end) - left);
          return (
            <div key={`${r.company}-${r.title}`} className="contents">
              <div className="truncate text-right text-xs text-slate-300 sm:text-sm" title={r.title}>
                {r.title}
              </div>
              <div className="relative h-5 rounded bg-slate-950/70" title={`${r.title}, ${r.dates}`}>
                {ticks.map((t) => (
                  <span key={t.year} className="absolute inset-y-0 w-px bg-slate-800" style={{ left: `${t.pos}%` }} />
                ))}
                <span
                  className={`absolute inset-y-0.5 rounded bg-gradient-to-r ${r.color} shadow-[0_0_10px_rgba(96,165,250,0.35)]`}
                  style={{ left: `${left}%`, width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}

        {/* year axis */}
        <div />
        <div className="relative h-5 text-[11px] text-slate-500">
          {ticks.map((t, i) => (
            // Every other year on a phone, so the labels do not run into each other.
            <span key={t.year} className={`absolute -translate-x-1/2 ${i % 2 === 1 ? "hidden sm:block" : ""}`} style={{ left: `${t.pos}%` }}>
              {t.year}
            </span>
          ))}
        </div>
      </div>

      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-400">
        {experience.map((job, i) => (
          <li key={job.company} className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-sm bg-gradient-to-r ${BAR_COLORS[i % BAR_COLORS.length]}`} />
            {job.company}
          </li>
        ))}
      </ul>
    </figure>
  );
}
