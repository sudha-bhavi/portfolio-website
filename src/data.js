// All site content lives here. Edit this file to update the site.

export const profile = {
  name: "Sudharani Bhavi",
  // Use the exact titles from your resume everywhere.
  title: "Associate Technical Lead · Senior Software Engineer",
  headline: "I build healthcare platforms that scale.",
  bio: "6+ years building HIPAA-compliant healthcare and FinTech systems with .NET 8/9, React and Azure, from remote patient monitoring microservices to eCQM and ONC compliance reporting.",
  location: "Cincinnati, OH",
  email: "sudhabhavi383@gmail.com",
  github: "https://github.com/sudha-bhavi",
  linkedin: "https://www.linkedin.com/in/sudharani-bhavi-cincinnati/",
  resume: "/Sudharani_Bhavi_Resume.pdf",
};

export const stats = [
  { value: "6+", label: "Years building enterprise .NET systems" },
  { value: "35%", label: "API latency reduction on HEDIS care-gap pipelines" },
  { value: "40%", label: "Faster deployments after CI/CD automation" },
  { value: "6+", label: "Engineers mentored on microservices and clean code" },
];

export const experience = [
  {
    company: "Garage Platform India Pvt Ltd",
    place: "Bengaluru, India",
    roles: [
      {
        title: "Associate Technical Lead",
        dates: "Feb 2024 – May 2025",
        bullets: [
          "Led technical architecture and engineering delivery for Bridge, a multi-tenant population health and value-based care platform.",
          "Architected SYNC remote patient monitoring microservices (.NET Core, Azure, SQL Server) for real-time medical device readings.",
          "Supported ONC Real World Testing and eCQM reporting; optimized HEDIS care-gap pipelines with EF Core and Redis, reducing API latency by 35%.",
        ],
      },
      {
        title: "Senior Software Engineer",
        dates: "Jun 2023 – Feb 2024",
        bullets: [
          "Built RESTful APIs for Transitional Care Management, DeRisk and Scorecards, including HEDIS/eCQM workflows.",
          "Implemented Azure DevOps and Jenkins CI/CD pipelines, reducing deployment time by 40%.",
          "Mentored 6+ engineers on microservice design patterns, SOLID principles and clean-code practices.",
        ],
      },
      {
        title: "Software Product Engineer",
        dates: "Feb 2022 – Jun 2023",
        bullets: [
          "Developed .NET Core Web APIs and optimized SQL schemas for early-stage SYNC patient messaging services.",
        ],
      },
    ],
  },
  {
    company: "Sofftrends Software Pvt. Ltd.",
    place: "Bengaluru, India",
    roles: [
      {
        title: "Junior Programmer",
        dates: "Jul 2020 – Feb 2022",
        bullets: [
          "Built DeDup, a Heroku Marketplace add-on, using C#/.NET SDK utilities and PostgreSQL for exact and fuzzy data deduplication.",
          "Developed cloud data management tools for AWS S3 and Azure Blob Storage, automating bucket creation, folder management and large-scale file operations.",
          "Contributed PostgreSQL to Amazon Redshift pipelines integrated with Salesforce CDP.",
        ],
      },
      {
        title: "Associate Programmer / Trainee",
        dates: "Dec 2018 – Jun 2020",
        bullets: [
          "Modernized doctor/patient portals as React PWAs with Service Workers and offline sync.",
          "Built ASP.NET MVC endpoints and optimized SQL stored procedures.",
        ],
      },
    ],
  },
];

// group: "Healthcare" or "Cloud & Data" (drives the filter tabs)
export const projects = [
  {
    title: "Bridge: SYNC, Remote Patient Monitoring (RPM)",
    category: "Healthcare Device & RPM Platform",
    org: "The Garage India",
    group: "Healthcare",
    summary:
      "Led and architected the SYNC platform for home-based care: real-time device data transmission tracking, historical reading plots, customizable care team alerts and device inventory management.",
    tech: [".NET Core", "ASP.NET Core Web API", "React JS", "Azure App Service", "SQL Server", "HIPAA"],
  },
  {
    title: "Bridge: eCQM, Public Reporting & ONC Compliance",
    category: "Regulatory & Quality Certification",
    org: "The Garage India",
    group: "Healthcare",
    summary:
      "Managed technical delivery for Bridge eCQM, public reporting workflows, export documentation and ONC Real World Testing compliance (2023–2025 test plans and results) for certification readiness.",
    tech: [".NET Core", "eCQM", "ONC Testing", "Public Reporting", "Export Engine", "SQL Server"],
  },
  {
    title: "Bridge: Population Health & Care Gaps",
    category: "Value-Based Care Suite",
    org: "The Garage India",
    group: "Healthcare",
    summary:
      "Architected microservices for HEDIS quality measures, Bridge Ignite, Transitional Care Management, DeRisk and Scorecards to close care gaps across provider and payer workflows.",
    tech: [".NET Core", "Microservices", "Azure", "Jenkins CI/CD", "SQL Server"],
  },
  {
    title: "OASYS: Healthcare PWA",
    category: "Healthcare Portals",
    org: "Sofftrends",
    group: "Healthcare",
    summary:
      "Implemented a Progressive Web App in React JS for doctor and patient portals with real-time AJAX data visualization of health metrics and offline-capable sync.",
    tech: ["React JS", "PWA", "AJAX", "RESTful APIs", "JavaScript"],
  },
  {
    title: "Marketing Connector & Cloud Sync Engine",
    category: "Data Streaming & Integration",
    org: "Sofftrends",
    group: "Cloud & Data",
    summary:
      "Built cloud-data integration bridging Postgres, SQL databases and Amazon Redshift with Salesforce Marketing Cloud/CDP, ingesting data extensions into a Heroku data lake for streaming analytics.",
    tech: ["PostgreSQL", "Amazon Redshift", "Salesforce CDP", "C#"],
  },
  {
    title: "DeDup: Cloud Database Utility",
    category: "Database Engineering & Add-on",
    org: "Sofftrends",
    group: "Cloud & Data",
    summary:
      "Engineered a Heroku Marketplace add-on using exact-match (AND/OR) and fuzzy-similarity algorithms to find, simulate and resolve duplicate PostgreSQL records into a single golden record.",
    tech: ["PostgreSQL", "C#", "Web API", "Fuzzy Matching", "Heroku Add-on"],
  },
  {
    title: "HDrive & MSSQL Add-on",
    category: "Cloud Storage & Database Infrastructure",
    org: "Sofftrends",
    group: "Cloud & Data",
    summary:
      "Built a cross-platform cloud storage utility over Amazon S3 and Azure Blob with direct Heroku access, plus a plug-and-play managed Microsoft SQL Server add-on.",
    tech: ["C#", "Amazon S3", "Azure Blob", "SQL Server", "Heroku"],
  },
  {
    title: "Application Portfolio Manager (PWA)",
    category: "DevOps & Mobile Utility",
    org: "Sofftrends",
    group: "Cloud & Data",
    summary:
      "Led frontend architecture to turn a Heroku add-on into a high-performance PWA with Service Workers for offline-first delivery, so teams can tag and manage server clusters from mobile.",
    tech: ["React JS", "PWA", "Service Workers", "JavaScript (ES6+)", "REST APIs"],
  },
];

export const building = {
  title: "JobTracker",
  summary:
    "A full-stack job application tracker I'm building in public: an ASP.NET Core API and a JavaScript UI in one repository.",
  repo: "https://github.com/sudha-bhavi/JobTracker",
  tech: ["ASP.NET Core", "JavaScript", "SQL"],
};

export const skillCategories = [
  {
    title: "Back-End & Architecture",
    skills: [".NET 8/9", ".NET Core", "ASP.NET Core Web API", "C#", "Entity Framework Core", "Dapper", "Microservices", "Event-Driven Architecture"],
  },
  {
    title: "Front-End",
    skills: ["React JS", "JavaScript (ES6+)", "TypeScript", "Progressive Web Apps", "HTML5", "CSS3 / Tailwind"],
  },
  {
    title: "Data, Cloud & DevOps",
    skills: ["SQL Server", "PostgreSQL", "Redis", "Azure App Services", "Azure Blob Storage", "AWS S3", "Docker", "Nginx", "Jenkins", "GitHub Actions", "Azure DevOps"],
  },
  {
    title: "Healthcare & Leadership",
    skills: ["ONC Real World Testing", "eCQM / HEDIS", "HIPAA", "RPM", "EHR/EMR integration", "Technical team leadership", "Mentoring", "Code reviews"],
  },
];

export const awards = [
  { title: "Best Coordinator", detail: "The Garage India" },
  { title: "Out-of-the-Box Thinker", detail: "Recognized at The Garage India" },
  { title: "HIPAA Compliance Certification", detail: "Earned annually through company-administered examinations" },
];

export const education = [
  { school: "Dr. Ambedkar Institute of Technology, Bangalore", degree: "B.E., Computer Science", year: "2018" },
  { school: "B.V.V.S. Polytechnic, Bagalkot", degree: "Diploma, Computer Science and Engineering", year: "2015" },
];
