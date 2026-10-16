export default function Projects() {
  const projects = [
    {
      title: "Bridge: SYNC - Remote Patient Monitoring (RPM)",
      category: "Healthcare Device & RPM Platform (The Garage India)",
      summary:
        "Led and architected the SYNC platform empowering home-based care. Built real-time device data transmission tracking, historical reading plots, customizable care team alerts, and device inventory management.",
      tech: [
        ".NET Core",
        "ASP.NET Core Web API",
        "React JS",
        "Azure App Service",
        "SQL Server",
        "HIPAA Compliance",
      ],
    },
    {
      title: "Bridge: eCQM, Public Reporting & ONC Compliance",
      category: "Regulatory & Quality Certification Suite (The Garage India)",
      summary:
        "Managed technical delivery for Bridge eCQM, public reporting workflows, export documentation, and ONC Real World Testing compliance (2023–2025 Test Plans & Results) ensuring certification readiness.",
      tech: [
        ".NET Core",
        "eCQM",
        "ONC Testing",
        "Public Reporting",
        "Export Engine",
        "SQL Server",
      ],
    },
    {
      title: "Bridge: Population Health & Care Gaps Platform",
      category: "Value-Based Care Suite (The Garage India)",
      summary:
        "Architected microservices for HEDIS quality measures, Bridge Ignite, TCM (Transitional Care Management), DeRisk, and Scorecards to close care gaps across Provider and Payer workflows.",
      tech: [
        ".NET Core",
        "Microservices",
        "Azure",
        "Jenkins CI/CD",
        "SQL Server",
      ],
    },
    {
      title: "Application Portfolio Manager (PWA)",
      category: "DevOps & Mobile Utility (Softtrends)",
      summary:
        "Spearheaded frontend architecture, transforming the Heroku Add-on into a high-performance PWA with Service Workers for offline-first asset delivery, allowing teams to tag and manage server clusters on mobile.",
      tech: [
        "React JS",
        "PWA",
        "Service Workers",
        "JavaScript (ES6+)",
        "REST APIs",
      ],
    },
    {
      title: "Marketing Connector & Cloud Sync Engine",
      category: "Data Streaming & Integration (Softtrends)",
      summary:
        "Engineered cloud-data integration bridging Postgres, SQL databases, and Amazon Redshift with Salesforce Marketing Cloud/CDP, ingesting data extensions into a Heroku data lake for real-time streaming analytics.",
      tech: [
        "PostgreSQL",
        "Amazon Redshift",
        "Apache Kafka",
        "Salesforce CDP",
        "C#",
      ],
    },
    {
      title: "DeDup - Cloud Database Utility",
      category: "Database Engineering & Add-on (Softtrends)",
      summary:
        "Engineered database utility using exact match (AND/OR) and fuzzy similarity algorithms to identify, simulate, and resolve duplicate records across PostgreSQL tables to establish a single 'golden record'.",
      tech: ["PostgreSQL", "C#", "Web API", "Fuzzy Matching", "Heroku Add-on"],
    },
    {
      title: "HDrive & MSSQL Add-on",
      category: "Cloud Storage & Database Infrastructure (Softtrends)",
      summary:
        "Engineered cross-platform cloud storage utility integrating Amazon S3, Azure Blob, and Google Cloud with direct Heroku access, along with a plug-and-play managed Microsoft SQL Server add-on.",
      tech: [
        "C#",
        "Amazon S3",
        "Azure Blob",
        "Google Cloud",
        "SQL Server",
        "Heroku",
      ],
    },
    {
      title: "OASYS - Healthcare PWA",
      category: "Healthcare Portals (Softtrends)",
      summary:
        "Implemented a Progressive Web App (PWA) in React JS for doctor and patient portals ('Crossfire Inflow') with real-time AJAX data visualization for health metrics.",
      tech: ["React JS", "PWA", "AJAX", "RESTful APIs", "JavaScript"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Engineering Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  {proj.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{proj.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {proj.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-slate-900 text-xs px-2.5 py-1 rounded text-slate-400 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
