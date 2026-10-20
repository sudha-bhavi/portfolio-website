import { useState } from "react";
import { projects, building } from "../data";
import { GithubIcon, ArrowIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tabs = ["All", "Healthcare", "Cloud & Data"];

export default function Projects() {
  const [tab, setTab] = useState("All");
  const shown = tab === "All" ? projects : projects.filter((p) => p.group === tab);

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Projects" title="Featured engineering work">
          Production systems I designed and delivered. Employer projects are described at a high level.
        </SectionHeading>

        {/* Currently building */}
        <Reveal className="mb-10">
          <a
            href={building.repo}
            target="_blank"
            rel="noreferrer"
            className="card-glow group block rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-slate-900 to-cyan-500/10 p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Building now
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Personal project</span>
            </div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <GithubIcon /> {building.title}
              <ArrowIcon width={16} height={16} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
            </h3>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">{building.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {building.tech.map((t) => (
                <span key={t} className="bg-slate-950/70 text-xs px-2.5 py-1 rounded text-slate-300 border border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </a>
        </Reveal>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                tab === t
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-slate-900 border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shown.map((proj, idx) => (
            <Reveal key={proj.title} delay={(idx % 2) * 80}>
              <article className="card-glow h-full bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{proj.category}</span>
                    <span className="text-xs text-slate-500 shrink-0">{proj.org}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-2 mb-3">{proj.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{proj.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {proj.tech.map((t) => (
                    <span key={t} className="bg-slate-950 text-xs px-2.5 py-1 rounded text-slate-400 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
