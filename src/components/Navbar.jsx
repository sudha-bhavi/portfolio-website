import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-slate-950/85 backdrop-blur border-b border-slate-800/80" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main">
        <a href="#top" className="font-extrabold tracking-tight text-white text-lg">
          S<span className="gradient-text">B</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold px-4 py-2 rounded-lg border border-blue-500/40 text-blue-300 hover:bg-blue-500/10 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-slate-300 p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden px-6 pb-5 space-y-1">
          {[...links, { href: profile.resume, label: "Resume" }].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-slate-300 hover:text-white font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
