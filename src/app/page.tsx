import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MatrixBackground } from "@/components/MatrixBackground";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0808]">
      <MatrixBackground />
      <div className="relative z-10">
        <Header />
      <main className="m-0 p-0">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      </div>
    </div>
  );
}
