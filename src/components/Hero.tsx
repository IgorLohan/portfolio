"use client";

import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-gradient-to-b from-[#0a0808]/90 to-[#1a0f0f]/90 px-6 pt-20 pb-24 lg:px-20 lg:pt-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="hero-animate text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {t("name")}
          </h1>

          <p className="hero-animate hero-animate-delay-1 text-lg leading-relaxed text-zinc-400 sm:text-xl">
            {t("subtitle")}
          </p>

          <div className="hero-animate hero-animate-delay-2 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#5c2a2a] to-[#8b4040] px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              {t("ctaProjects")}
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-xl border-2 border-[#8b4040] px-8 py-4 text-base font-semibold text-[#a85555] transition-colors hover:bg-[#8b4040]/10"
            >
              {t("ctaContact")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
