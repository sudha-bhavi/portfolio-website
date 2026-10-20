import { skillCategories, awards, education } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Skills" title="Technical expertise">
          The tools I use day to day, grouped by what they do.
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <Reveal key={cat.title} delay={(idx % 2) * 80}>
              <div className="h-full bg-slate-900 p-6 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-800 px-3 py-1 rounded-full text-sm font-medium text-slate-300 border border-slate-700 hover:border-blue-500/50 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full bg-slate-900/60 p-6 rounded-xl border border-slate-800">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Recognition</h3>
              <ul className="space-y-3">
                {awards.map((a) => (
                  <li key={a.title} className="text-sm">
                    <span className="font-semibold text-slate-100">{a.title}</span>
                    <span className="text-slate-400">, {a.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full bg-slate-900/60 p-6 rounded-xl border border-slate-800">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Education</h3>
              <ul className="space-y-3">
                {education.map((e) => (
                  <li key={e.degree} className="text-sm">
                    <span className="font-semibold text-slate-100">{e.degree}</span>
                    <span className="text-slate-500"> · {e.year}</span>
                    <p className="text-slate-400">{e.school}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
