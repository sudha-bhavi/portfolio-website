export default function Skills() {
  const skillCategories = [
    {
      title: "Back-End & Architecture",
      skills: [
        ".NET 8/9",
        ".NET Core",
        "ASP.NET Core Web API",
        "C#",
        "Entity Framework Core",
        "Microservices",
        "Clean Architecture",
      ],
    },
    {
      title: "Front-End Development",
      skills: [
        "React JS",
        "JavaScript (ES6+)",
        "Progressive Web Apps (PWA)",
        "AJAX",
        "HTML5",
        "CSS3 / Tailwind",
      ],
    },
    {
      title: "Data, Messaging & Cloud",
      skills: [
        "Apache Kafka",
        "SQL Server",
        "PostgreSQL",
        "Azure (App Service)",
        "AWS (S3)",
        "Docker",
        "Jenkins (CI/CD)",
      ],
    },
    {
      title: "Leadership & Security",
      skills: [
        "Technical Team Leadership",
        "HIPAA Compliance",
        "Code Reviews",
        "Agile / Sprint Planning",
        "OAuth2 / OIDC",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-slate-800 px-3 py-1 rounded-full text-sm font-medium text-slate-300 border border-slate-700"
                  >
                    {skill}
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
