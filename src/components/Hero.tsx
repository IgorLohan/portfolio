import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#0a0808]/90 to-[#1a0f0f]/90 px-6 pb-24 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16 lg:items-center">
          <div className="order-2 flex-1 space-y-8 text-center lg:order-1 lg:text-left">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Igor Lohan
            </h1>

            <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">
              Desenvolvedor especializado em aplicações web modernas, com forte foco em arquitetura de software, escalabilidade e boas práticas de desenvolvimento. Atuo na criação de soluções robustas, performáticas e bem estruturadas, transformando ideias em produtos digitais confiáveis e eficientes.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#5c2a2a] to-[#8b4040] px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#8b4040] px-8 py-4 text-base font-semibold text-[#a85555] transition-colors hover:bg-[#8b4040]/10"
              >
                Entre em Contato
              </a>
            </div>
          </div>

          <div className="order-1 relative shrink-0 lg:order-2">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#8b4040]/50 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <Image
                src="/igor.png"
                alt="Igor Lohan - Desenvolvedor"
                width={320}
                height={320}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
