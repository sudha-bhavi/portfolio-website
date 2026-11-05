import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <CaseStudies />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
