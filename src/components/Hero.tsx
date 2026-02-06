import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] px-6 pb-24 pt-28 lg:px-20 lg:pt-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16 lg:items-center">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Igor Lohan
            </h1>

            <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">
              Sou desenvolvedor web com experiência em front-end e back-end,
              atuando na criação e manutenção de aplicações web. Tenho como
              objetivo consolidar minha carreira na área de tecnologia,
              ampliando conhecimentos técnicos e contribuindo de forma
              consistente para o sucesso dos projetos, com dedicação, disciplina
              e propósito.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl border-2 border-indigo-500 px-8 py-4 text-base font-semibold text-indigo-500 transition-colors hover:bg-indigo-500/10"
              >
                Entre em Contato
              </a>
            </div>
          </div>

          <div className="relative shrink-0">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-indigo-500/50 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
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
