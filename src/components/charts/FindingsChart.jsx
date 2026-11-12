// Severity split of the pen-test findings, straight from the case-study numbers.
const COLORS = {
  High: "bg-red-500",
  Medium: "bg-orange-500",
  Low: "bg-yellow-400",
  Info: "bg-slate-400",
};

export default function FindingsChart({ levels, note }) {
  const total = levels.reduce((sum, l) => sum + l.count, 0);

  return (
    <figure className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5">
      <figcaption className="text-xs font-semibold uppercase tracking-widest text-blue-400">
        Pen-test findings by severity
      </figcaption>

      <div className="mt-4 flex h-8 w-full overflow-hidden rounded-lg" role="img"
        aria-label={`${total} findings: ${levels.map((l) => `${l.count} ${l.label}`).join(", ")}`}>
        {levels.map((l) => (
          <div
            key={l.label}
            className={`${COLORS[l.label]} flex items-center justify-center border-r border-slate-950 text-xs font-bold text-slate-950 last:border-r-0`}
            style={{ flexGrow: l.count, flexBasis: 0 }}
            title={`${l.count} ${l.label}`}
          >
            {l.count}
          </div>
        ))}
      </div>

      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-300">
        {levels.map((l) => (
          <li key={l.label} className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-sm ${COLORS[l.label]}`} aria-hidden="true" />
            {l.label} <span className="text-slate-500">· {l.count}</span>
          </li>
        ))}
      </ul>

      {note && <p className="mt-3 text-xs text-slate-500">{note}</p>}
    </figure>
  );
}
