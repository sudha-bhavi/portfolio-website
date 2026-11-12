import { createContext, useContext, useId } from "react";

// Shared building blocks for the architecture diagrams. Class names are written out in full so
// Tailwind can see them (it cannot detect names built from string pieces).
const TONES = {
  neutral: { box: "fill-slate-900 stroke-slate-600", title: "fill-slate-100", sub: "fill-slate-400" },
  blue: { box: "fill-blue-500/10 stroke-blue-400/60", title: "fill-blue-100", sub: "fill-blue-200/70" },
  green: { box: "fill-emerald-500/10 stroke-emerald-400/60", title: "fill-emerald-100", sub: "fill-emerald-200/70" },
  amber: { box: "fill-amber-500/10 stroke-amber-400/60", title: "fill-amber-100", sub: "fill-amber-200/70" },
};

const LINES = {
  slate: { stroke: "stroke-slate-500", head: "fill-slate-500" },
  blue: { stroke: "stroke-blue-400", head: "fill-blue-400" },
  green: { stroke: "stroke-emerald-400", head: "fill-emerald-400" },
  amber: { stroke: "stroke-amber-400", head: "fill-amber-400" },
};

const MarkerScope = createContext("");

export function Box({ x, y, w, h, title, sub, tone = "neutral" }) {
  const t = TONES[tone];
  const lines = Array.isArray(sub) ? sub : sub ? [sub] : [];
  const titleY = lines.length ? y + 27 : y + h / 2 + 5;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={12} strokeWidth={1.5} className={t.box} />
      <text x={x + w / 2} y={titleY} textAnchor="middle" className={`${t.title} font-semibold`} style={{ fontSize: 14 }}>
        {title}
      </text>
      {lines.map((line, i) => (
        <text key={line} x={x + w / 2} y={y + 47 + i * 16} textAnchor="middle" className={t.sub} style={{ fontSize: 11.5 }}>
          {line}
        </text>
      ))}
    </g>
  );
}

// A line with an arrowhead. Solid lines carry a slow "flow" animation; dashed ones are quiet links.
export function Arrow({ d, tone = "slate", dashed = false }) {
  const scope = useContext(MarkerScope);
  const l = LINES[tone];
  return (
    <path
      d={d}
      fill="none"
      strokeWidth={1.8}
      strokeLinejoin="round"
      className={`${l.stroke} ${dashed ? "" : "flow-line"}`}
      strokeDasharray={dashed ? "3 5" : undefined}
      markerEnd={`url(#${scope}-${tone})`}
    />
  );
}

export function Label({ x, y, children, anchor = "middle", className = "fill-slate-400" }) {
  return (
    <text x={x} y={y} textAnchor={anchor} className={className} style={{ fontSize: 11.5 }}>
      {children}
    </text>
  );
}

export function DiagramFrame({ title, desc, viewBox, caption, children }) {
  const id = useId().replace(/:/g, "");
  return (
    <figure className="mt-6 rounded-xl border border-slate-800 bg-slate-950/60 p-3 sm:p-4">
      <p className="mb-2 text-[11px] text-slate-500 lg:hidden">Swipe sideways to see the whole diagram →</p>
      {/* Scrolls sideways on a phone instead of shrinking the text to nothing. */}
      <div className="overflow-x-auto">
        <svg viewBox={viewBox} role="img" aria-labelledby={`${id}-t ${id}-d`} className="h-auto w-full min-w-[760px]">
          <title id={`${id}-t`}>{title}</title>
          <desc id={`${id}-d`}>{desc}</desc>
          <defs>
            {Object.entries(LINES).map(([tone, l]) => (
              <marker
                key={tone}
                id={`${id}-${tone}`}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M0 0 L10 5 L0 10 z" className={l.head} />
              </marker>
            ))}
          </defs>
          <MarkerScope.Provider value={id}>{children}</MarkerScope.Provider>
        </svg>
      </div>
      {caption && <figcaption className="mt-2 text-xs text-slate-500">{caption}</figcaption>}
    </figure>
  );
}
