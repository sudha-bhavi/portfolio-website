export default function Hero() {
  return (
    <section className="relative py-28 px-6 bg-slate-950 text-slate-100 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto text-center">
        {/* Experience Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          6+ Years Enterprise Experience
        </div>

        {/* Executive Name & Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
          Sudharani Bhavi
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-blue-400 mb-6">
          Lead Software Engineer & Cloud Systems Architect
        </p>

        {/* Bio Pitch */}
        <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
          Specializing in .NET 8/9, React JS, Microservices, and Event-Driven
          Cloud Architectures. Experienced in architecting HIPAA-compliant
          healthcare engines, high-throughput real-time streaming platforms, and
          multi-cloud integrations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/sudha-bhavi"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all duration-200"
          >
            GitHub Profile
          </a>
          <a
            href="https://linkedin.com/in/sudharani-bhavi-cincinnati"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold border border-slate-700/80 transition-all duration-200"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
