import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
      {children && <p className="mt-3 text-slate-400 leading-relaxed">{children}</p>}
    </Reveal>
  );
}
