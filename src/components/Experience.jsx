import { experience } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Experience" title="Where I've shipped">
          Six-plus years across healthcare and data platforms, growing from trainee programmer to technical lead.
        </SectionHeading>

        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.company} className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-10">
              <Reveal>
                <h3 className="text-lg font-bold text-white">{job.company}</h3>
                <p className="text-sm text-slate-500">{job.place}</p>
              </Reveal>

              <ol className="relative border-l border-slate-800 pl-8 space-y-9">
                {job.roles.map((role, i) => (
                  <Reveal as="li" key={role.title} delay={i * 80} className="relative">
                    <span
                      className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full border-2 ${
                        i === 0 ? "bg-blue-400 border-blue-300 shadow-[0_0_12px_rgba(96,165,250,0.8)]" : "bg-slate-950 border-slate-600"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h4 className="text-base font-semibold text-slate-100">{role.title}</h4>
                      <span className="text-sm text-blue-300/90 font-medium">{role.dates}</span>
                    </div>
                    <ul className="mt-2.5 space-y-2 text-sm text-slate-400 leading-relaxed">
                      {role.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5">
                          <span className="mt-2 w-1 h-1 rounded-full bg-slate-600 shrink-0" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
