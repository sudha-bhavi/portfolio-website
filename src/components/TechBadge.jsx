// Small coloured monograms next to skills. They are simple letter badges in a brand-like colour,
// not official logos, so they look consistent and need no outside images. Skills without an entry
// get no badge.
const BADGES = {
  ".NET 8/9/10": [".N", "#6d4fe0"],
  ".NET Core": [".N", "#6d4fe0"],
  "ASP.NET Core Web API": ["AS", "#7c5cf0"],
  "C#": ["C#", "#9b4f96"],
  "Entity Framework Core": ["EF", "#6d4fe0"],
  Dapper: ["Dp", "#0ea5e9"],
  Microservices: ["µS", "#0891b2"],
  "Event-Driven Architecture": ["ED", "#0d9488"],
  Kafka: ["Kf", "#64748b"],
  "React JS": ["Re", "#0891b2"],
  "JavaScript (ES6+)": ["JS", "#ca8a04"],
  TypeScript: ["TS", "#2563eb"],
  "Progressive Web Apps": ["PW", "#7c3aed"],
  HTML5: ["H5", "#ea580c"],
  "CSS3 / Tailwind": ["Cs", "#0284c7"],
  "SQL Server": ["SQ", "#dc2626"],
  PostgreSQL: ["Pg", "#336791"],
  Redis: ["Rd", "#dc2626"],
  "Azure App Services": ["Az", "#0078d4"],
  "Azure Blob Storage": ["Az", "#0078d4"],
  "AWS S3": ["S3", "#d97706"],
  Docker: ["Dk", "#0db7ed"],
  Nginx: ["Nx", "#16a34a"],
  Jenkins: ["Jk", "#d24939"],
  "GitHub Actions": ["GA", "#64748b"],
  "Azure DevOps": ["AD", "#0078d4"],
};

export default function TechBadge({ skill }) {
  const badge = BADGES[skill];
  if (!badge) return null;
  const [label, color] = badge;
  return (
    <span
      aria-hidden="true"
      className="mr-2 inline-flex h-5 min-w-5 items-center justify-center rounded px-1 text-[10px] font-bold leading-none text-white"
      style={{ backgroundColor: color }}
    >
      {label}
    </span>
  );
}
