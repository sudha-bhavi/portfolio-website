import { profile, stats } from "../data";
import StatRing from "./charts/StatRing";
import { GithubIcon, LinkedinIcon, DownloadIcon, ArrowIcon, PinIcon } from "./Icons";
import MaskDemo from "./MaskDemo";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 px-6">
      <div className="hero-bg absolute inset-0 -z-0" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.25fr_1fr] gap-12 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to new opportunities
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Hi, I'm {profile.name.split(" ")[0]}.
              {/* The headline is a step down from the name, so the eye reads name first, then what you do. */}
              <span className="block gradient-text mt-4 text-2xl sm:text-[2rem] font-bold tracking-tight leading-snug max-w-xl">
                {profile.headline}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-lg font-medium text-slate-200">{profile.title}</p>
            <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">{profile.bio}</p>
            <p className="mt-4 flex items-center gap-1.5 text-sm text-slate-500">
              <PinIcon width={15} height={15} /> {profile.location}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/25 transition-colors"
              >
                View projects <ArrowIcon width={16} height={16} />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold border border-slate-700 transition-colors"
              >
                <DownloadIcon width={16} height={16} /> Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              >
                <LinkedinIcon />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="space-y-4">
        <Reveal delay={200}>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur p-6 shadow-2xl shadow-blue-950/40">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">At a glance</p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-slate-500">Focus</dt>
                <dd className="text-slate-200 font-medium">.NET and full-stack engineering</dd>
              </div>
              <div>
                <dt className="text-slate-500">Core stack</dt>
                <dd className="mt-1.5 flex flex-wrap gap-1.5">
                  {[".NET 8/9", "C#", "React", "Azure", "SQL Server", "Docker"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Domain experience</dt>
                <dd className="text-slate-200 font-medium">RPM · eCQM/HEDIS · TCM · HIPAA</dd>
              </div>
              <div>
                <dt className="text-slate-500">Personal projects</dt>
                <dd>
                  <a href="#projects" className="text-blue-300 hover:text-blue-200 font-medium">
                    VeilGate, CareerCopilot and JobTracker, all completed →
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
        <Reveal delay={280}>
          <MaskDemo />
        </Reveal>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => {
          // Stats that are already percentages (35%, 40%) get a ring; the rest stay as plain numbers.
          const percent = /^(\d+)%$/.exec(s.value)?.[1];
          return (
          <Reveal key={s.label} delay={i * 80}>
            <div className="relative h-full rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              {percent && (
                <div className="absolute right-4 top-4">
                  <StatRing percent={Number(percent)} />
                </div>
              )}
              <p className="text-3xl sm:text-4xl font-extrabold gradient-text">{s.value}</p>
              <p className="mt-1.5 text-sm text-slate-400 leading-snug">{s.label}</p>
            </div>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}
