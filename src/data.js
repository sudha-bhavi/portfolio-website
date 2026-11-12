// All site content lives here. Edit this file to update the site.

export const profile = {
  name: "Sudharani Bhavi",
  // Use the exact titles from your resume everywhere.
  title: "Associate Technical Lead · Senior Software Engineer",
  headline: "I build software that holds up when it matters, at any scale.",
  bio: "6+ years building enterprise and HIPAA-compliant systems with .NET 8/9, React and Azure, from remote patient monitoring microservices to eCQM reporting.",
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
          "Supported eCQM reporting; optimized HEDIS care-gap pipelines with EF Core and Redis, reducing API latency by 35%.",
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
    title: "Bridge: eCQM & Public Reporting",
    category: "Quality Reporting",
    org: "The Garage India",
    group: "Healthcare",
    summary:
      "Managed technical delivery for Bridge eCQM, public reporting workflows and export documentation.",
    tech: [".NET Core", "eCQM", "Public Reporting", "Export Engine", "SQL Server"],
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

// Personal projects, shown above the work projects. `liveUrl` adds a "Live" link when it is set; leave it empty to hide the link.
export const personalProjects = [
  {
    title: "VeilGate",
    status: "Completed",
    deployed: false,
    summary:
      "A multi-tenant gateway that masks PHI before text reaches a language model, built to HIPAA-style security practices. .NET 10 API and a React console on PostgreSQL with row-level security, a Kafka event pipeline, a hash-chained audit log, MFA, and CI with dependency and secret scanning. I ran my own penetration tests against it and fixed the five flaws they found, each with a regression test. Synthetic data only; not certified for real PHI and not deployed.",
    repo: "https://github.com/sudha-bhavi/veilgate",
    liveUrl: "",
    demoUrl: "https://youtu.be/4_N9H2Wub1o",
    // Stills from the demo video. Synthetic data only. The address bar in the showcase says so.
    imageHost: "localhost · read-only demo, sample data",
    images: [
      {
        // A slide with `video` opens the video instead of the enlarge view.
        src: "/projects/veilgate-demo-poster.jpg",
        alt: "Title card of the VeilGate demo video: Stop patient data from reaching an AI model",
        caption: "Demo video",
        video: "https://youtu.be/4_N9H2Wub1o",
        width: 1280,
        height: 720,
      },
      {
        src: "/projects/veilgate-policy.jpg",
        alt: "VeilGate policy editor showing a HIPAA Safe Harbor policy written as YAML",
        caption: "Policies as versioned YAML",
        width: 1280,
        height: 719,
      },
      {
        src: "/projects/veilgate-playground.jpg",
        alt: "VeilGate playground showing sensitive items found in a made-up patient note, and the masked text that leaves the gateway",
        caption: "Detected, then masked by policy",
        width: 1280,
        height: 719,
      },
      {
        src: "/projects/veilgate-audit.jpg",
        alt: "VeilGate audit log with a message confirming all 65 events are in order and unchanged",
        caption: "Tamper-evident audit log",
        width: 1280,
        height: 719,
      },
      {
        src: "/projects/veilgate-dashboard.jpg",
        alt: "VeilGate dashboard with request counts, items protected, latency and a requests-over-time chart",
        caption: "Counts-only dashboard",
        width: 1280,
        height: 719,
      },
      {
        src: "/projects/veilgate-security.jpg",
        alt: "VeilGate security page listing active sign-in sessions with options to revoke them",
        caption: "Session control and MFA",
        width: 1280,
        height: 719,
      },
    ],
    tech: [".NET 10", "React", "PostgreSQL", "Kafka", "Docker", "GitHub Actions"],
  },
  {
    title: "CareerCopilot",
    status: "Completed",
    deployed: true,
    summary:
      "A job-search workspace: a drag-and-drop application pipeline with follow-up reminders and a dashboard, a resume-to-job-description skill matcher, and a city job search through Adzuna's API that ranks open jobs by how well they fit a pasted resume, with one-click save to the tracker. .NET 10 minimal API with EF Core and PostgreSQL, JWT sign-in with rate limiting, and a React and TypeScript UI, shipped as one Docker image on Render with GitHub Actions CI. Single-user app, so the hosted demo sits behind a login.",
    repo: "https://github.com/sudha-bhavi/careercopilot",
    liveUrl: "https://careercopilot-lsm4.onrender.com",
    // Screenshots use made-up sample data and a fictional resume.
    images: [
      {
        src: "/projects/careercopilot-board.png",
        alt: "CareerCopilot pipeline board with applications in Saved, Applied, Interview, Offer and Rejected columns, and a summary row of counts",
        caption: "Drag-and-drop pipeline with follow-up reminders",
        width: 1440,
        height: 1247,
      },
      {
        src: "/projects/careercopilot-jobs.png",
        alt: "CareerCopilot job search results for Cincinnati ranked by how well each posting fits a resume, with matched and missing skill tags",
        caption: "City job search, ranked against your resume",
        width: 1440,
        height: 1200,
      },
      {
        src: "/projects/careercopilot-match.png",
        alt: "CareerCopilot resume match showing a 65 percent partial match with matched and missing skills",
        caption: "Resume match: matched and missing skills",
        width: 1440,
        height: 770,
      },
    ],
    tech: [".NET 10", "React", "TypeScript", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    title: "JobTracker",
    status: "Completed and deployed",
    deployed: true,
    summary:
      "A full-stack job application tracker: an ASP.NET Core API (JobTrackerApi) and a JavaScript UI (JobTrackerUi), built and shipped end to end.",
    repo: "https://github.com/sudha-bhavi/JobTracker",
    liveUrl: "https://jobtrackerui.netlify.app/",
    // Add more shots to this list and a carousel appears automatically.
    images: [
      {
        src: "/projects/jobtracker.png",
        alt: "JobTracker dashboard showing application totals and a pipeline of tracked jobs with their statuses",
        caption: "Dashboard and application pipeline",
        width: 1440,
        height: 640,
      },
    ],
    tech: ["ASP.NET Core", "JavaScript", "SQL"],
  },
];

// Case studies. Each section is optional: a heading is shown only when its field has content.
// `facts` is a short list of numbers or limits shown as chips.
export const caseStudies = [
  {
    id: "veilgate",
    diagram: "veilgate",
    title: "VeilGate: keeping PHI away from a language model",
    kind: "Personal project",
    role: "Sole designer and developer",
    stack: [".NET 10", "React", "PostgreSQL", "Kafka", "Docker"],
    facts: ["207 commits", "1,200+ automated tests", "6 pen-test findings, 5 fixed and retested", "Synthetic data only"],
    // The same six findings the "Testing it" paragraph describes: one High, two Medium, two Low, one Info.
    findings: {
      levels: [
        { label: "High", count: 1 },
        { label: "Medium", count: 2 },
        { label: "Low", count: 2 },
        { label: "Info", count: 1 },
      ],
      note: "Five were fixed and retested. The Info finding was accepted with an owner and a reason.",
    },
    problem:
      "Clinics want to use LLMs on clinical notes, but sending names, dates and ID numbers to an outside model provider is a HIPAA risk. I wanted to see what it takes to put a safety layer in front of the model: find the PHI, replace it by policy, send only the sanitized text, and restore the original values in the answer.",
    decisions: [
      {
        title: "Tenant isolation lives in the database",
        body: "Every tenant table uses PostgreSQL row-level security, so a bug in application code cannot read another organisation's rows. The pen tests check this from both sides.",
      },
      {
        title: "Protection is reversible, and keys are per tenant",
        body: "Values are encrypted with AES-256-GCM under a per-tenant data key and swapped for tokens, so the model never sees them but the user still gets a complete answer.",
      },
      {
        title: "Policies need a second person",
        body: "A policy goes draft, validate, submit, approve by a different person, publish. Every version is kept, can be compared and can be rolled back.",
      },
      {
        title: "Audit log you can check for tampering",
        body: "An append-only, hash-chained log records counts and ids, never text, so reviewers can verify the chain without the log becoming a second copy of PHI.",
      },
      {
        title: "Gateway calls do not wait on reporting",
        body: "Each call is announced through a transactional outbox to Kafka, with retries, a dead-letter topic and an idempotent consumer that builds the dashboard.",
      },
    ],
    testing:
      "I wrote my own penetration test scripts and ran them against my own build. Six findings, one High, two Medium, two Low and one Info that I accepted with an owner and reason. The High one: sending many wrong authenticator codes at the same instant got past the five-attempts-then-lock rule. Most findings were races, where two requests read the same state before either saved. The fix pattern was the same each time: let the database decide the winner with one atomic statement. The regression test fires 20 simultaneous requests at a real PostgreSQL and requires exactly one winner.",
    outcome:
      "CI builds and tests the backend and console, builds the container images, validates the deployment files and runs a backup-and-restore drill. Limits, stated plainly: all data is synthetic, it is not certified for real PHI, it runs on one machine, and the pen test is only partly run.",
    lesson:
      "Check-then-act in application code is not safe under concurrency. Anything that must happen once, such as a one-time code or a token rotation, should be decided by the database.",
    repo: "https://github.com/sudha-bhavi/veilgate",
  },
  {
    id: "bridge-sync",
    diagram: "bridge-sync",
    title: "Bridge SYNC: remote patient monitoring for home-based care",
    kind: "Work project, The Garage India",
    role: "Associate Technical Lead, architecture and delivery",
    stack: [".NET Core", "ASP.NET Core Web API", "React JS", "Azure App Service", "SQL Server", "HIPAA"],
    facts: ["Multi-tenant platform", "Real-time device readings", "HIPAA-compliant"],
    problem:
      "Bridge is a multi-tenant population health and value-based care platform. Care teams who look after patients at home needed to know whether each patient's devices were actually sending readings, see how the readings changed over time, and be alerted when something needed attention.",
    decisions: [
      {
        title: "Small services, not one large API",
        body: "I architected SYNC as .NET Core microservices on Azure App Service with SQL Server, so device data, patient messaging and alerts could change and scale on their own.",
      },
      {
        title: "Transmission tracking as a feature",
        body: "Real-time tracking of whether each device is transmitting, next to historical reading plots, so a silent device is noticed as quickly as an abnormal reading.",
      },
      {
        title: "Alerts the care team can tune",
        body: "Customizable care team alerts, plus device inventory management, so clinics set their own thresholds instead of living with fixed rules.",
      },
      {
        title: "Built for PHI from day one",
        body: "Patient data and device readings sit under HIPAA requirements, in a platform shared by many organisations, so tenant separation and access control shaped the design.",
      },
    ],
    outcome:
      "I led the engineering delivery for SYNC from early patient messaging services through to the full home-care workflow, and mentored the engineers on microservice design, SOLID and clean-code practices. Employer details are kept at a high level.",
  },
];

export const skillCategories = [
  {
    title: "Back-End & Architecture",
    skills: [".NET 8/9/10", ".NET Core", "ASP.NET Core Web API", "C#", "Entity Framework Core", "Dapper", "Microservices", "Event-Driven Architecture", "Kafka"],
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
    skills: ["eCQM / HEDIS", "Transitional Care Management (TCM)", "HIPAA", "RPM", "EHR/EMR integration", "Technical team leadership", "Mentoring", "Code reviews"],
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
