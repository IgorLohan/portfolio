import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MatrixBackground } from "@/components/MatrixBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="relative min-h-screen bg-[#0a0808]">
      <MatrixBackground />
      <div className="relative z-10">
        <Header />
        <main className="m-0 p-0">
          <Hero />
          <ScrollReveal>
            <Skills />
          </ScrollReveal>
          <ScrollReveal>
            <Projects />
          </ScrollReveal>
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
          <ScrollReveal>
            <Footer />
          </ScrollReveal>
        </main>
      </div>
    </div>
  );
}
