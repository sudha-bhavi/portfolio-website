import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-slate-800/80 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {profile.name} · {profile.location} · Built with React, Vite and Tailwind CSS
    </footer>
  );
}
