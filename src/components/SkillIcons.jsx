// One simple line icon per skill group. They are matched on the group title in data.js.
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const ServerIcon = () => (
  <svg {...base}>
    <rect x="3" y="4" width="18" height="6" rx="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <path d="M7 7h.01M7 17h.01" />
  </svg>
);

const BrowserIcon = () => (
  <svg {...base}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
  </svg>
);

const CloudIcon = () => (
  <svg {...base}>
    <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8.5a4.5 4.5 0 0 1 .5 9z" />
  </svg>
);

const HeartPulseIcon = () => (
  <svg {...base}>
    <path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 21.8l8.8-8.8a5.2 5.2 0 0 0 0-7.4z" />
    <path d="M3.5 12h4l1.5-3 3 6 1.5-3h3" />
  </svg>
);

export default function SkillIcon({ title }) {
  const t = title.toLowerCase();
  if (t.includes("back-end")) return <ServerIcon />;
  if (t.includes("front-end")) return <BrowserIcon />;
  if (t.includes("cloud") || t.includes("data")) return <CloudIcon />;
  if (t.includes("health")) return <HeartPulseIcon />;
  return null;
}
