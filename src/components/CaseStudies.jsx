import { caseStudies } from "../data";
import { GithubIcon, ArrowIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Block({ label, children }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">{label}</h4>
      <p className="text-sm text-slate-300 leading-relaxed">{children}</p>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-6 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Case studies" title="How I think through a problem">
          Two projects in more depth: the problem, the decisions I made and why, and what came out of it.
        </SectionHeading>

        <div className="space-y-8">
          {caseStudies.map((cs) => (
            <Reveal key={cs.id}>
              <article
                id={cs.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-wider">
                  <span className="text-blue-400 font-semibold">{cs.kind}</span>
                  <span className="text-slate-500">{cs.role}</span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-white">{cs.title}</h3>

                {cs.facts?.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cs.facts.map((f) => (
                      <li
                        key={f}
                        className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-200 text-xs font-medium"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 space-y-6">
                  {cs.problem && <Block label="The problem">{cs.problem}</Block>}

                  {cs.decisions?.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
                        Decisions
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cs.decisions.map((d) => (
                          <li key={d.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                            <p className="text-sm font-semibold text-white">{d.title}</p>
                            <p className="mt-1 text-sm text-slate-400 leading-relaxed">{d.body}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {cs.testing && <Block label="Testing it">{cs.testing}</Block>}
                  {cs.outcome && <Block label="Where it stands">{cs.outcome}</Block>}
                  {cs.lesson && <Block label="What I took from it">{cs.lesson}</Block>}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {cs.stack.map((t) => (
                    <span key={t} className="bg-slate-950 text-xs px-2.5 py-1 rounded text-slate-400 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                {cs.repo && (
                  <a
                    href={cs.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200"
                  >
                    <GithubIcon /> Source on GitHub <ArrowIcon width={14} height={14} />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
