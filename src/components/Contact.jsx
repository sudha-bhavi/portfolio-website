import { profile } from "../data";
import { MailIcon, LinkedinIcon, GithubIcon, DownloadIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/40 border-t border-slate-800/80">
      <Reveal className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let's build something reliable.</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          I'm looking for senior .NET and full-stack roles, especially in healthcare IT. The fastest way to reach me is email.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/25 transition-colors"
        >
          <MailIcon /> {profile.email}
        </a>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white text-sm font-medium transition-colors"
          >
            <LinkedinIcon width={16} height={16} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white text-sm font-medium transition-colors"
          >
            <GithubIcon width={16} height={16} /> GitHub
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white text-sm font-medium transition-colors"
          >
            <DownloadIcon width={16} height={16} /> Resume (PDF)
          </a>
        </div>
      </Reveal>
    </section>
  );
}
