// A tiny, synthetic picture of what VeilGate does. The example is made up, same as the demo data.
export default function MaskDemo() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        What VeilGate does · synthetic example
      </p>

      <div className="mt-3 space-y-2 font-mono text-[13px] leading-relaxed">
        <p className="text-slate-400">
          <span className="mr-2 font-sans text-[10px] uppercase tracking-wider text-slate-600">in</span>
          Patient <mark className="mask-token mask-before">Jane Roe</mark>, born{" "}
          <mark className="mask-token mask-before">03/14/1962</mark>, MRN{" "}
          <mark className="mask-token mask-before">4481920</mark>
        </p>

        <p className="flex items-center gap-2 pl-6 font-sans text-xs text-slate-500">
          <span className="mask-arrow" aria-hidden="true">↓</span> masked by policy before it reaches the model
        </p>

        <p className="text-slate-200">
          <span className="mr-2 font-sans text-[10px] uppercase tracking-wider text-slate-600">out</span>
          Patient <mark className="mask-token mask-after">[PERSON_JSBG]</mark>, born{" "}
          <mark className="mask-token mask-after">01/22/1962</mark>, MRN{" "}
          <mark className="mask-token mask-after">[REDACTED]</mark>
        </p>
      </div>
    </div>
  );
}
