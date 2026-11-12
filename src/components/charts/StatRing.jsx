import { useId } from "react";

// A small progress ring for a stat that is already a percentage (for example "35%").
export default function StatRing({ percent }) {
  const id = useId().replace(/:/g, "");
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const filled = (Math.min(100, Math.max(0, percent)) / 100) * circumference;

  return (
    <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <circle cx="26" cy="26" r={radius} fill="none" strokeWidth="5" className="stroke-slate-800" />
      <circle
        cx="26"
        cy="26"
        r={radius}
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
        stroke={`url(#${id})`}
        strokeDasharray={`${filled} ${circumference}`}
        transform="rotate(-90 26 26)"
        className="ring-draw"
        style={{ "--len": filled, "--c": circumference }}
      />
    </svg>
  );
}
