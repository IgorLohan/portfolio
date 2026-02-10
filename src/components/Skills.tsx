import { ScrollRevealItem } from "./ScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    description: "Interfaces e experiências visuais",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Vuetify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg" },
    ],
  },
  {
    title: "Backend",
    description: "APIs e lógica de servidor",
    skills: [
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
      { name: "LoopBack", icon: "https://loopback.io/images/global/loopback-mark-frame-white.svg" },
      { name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    title: "Utilitários",
    description: "Ferramentas de desenvolvimento",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
      { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" },
      { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor/ffffff" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
    ],
  },
];

const aboutText = `Desenvolvedor Full Stack com foco em criar soluções completas, do front ao back-end. Gosto de código limpo, boas práticas e de aprender novas tecnologias para entregar projetos que fazem a diferença.`;

const experiences = [
  {
    role: "Desenvolvedor Web júnior",
    period: "02/2024 – 02/2026",
    company: "Intelite Tecnologia",
    responsibilities:
      "Atuação no desenvolvimento de aplicações web, tanto no front-end quanto no back-end. Identificação e correção de bugs e falhas no sistema. Integração e manutenção de APIs. Consulta, edição e gerenciamento de dados em bancos NoSQL.",
  },
  {
    role: "Suporte - Setor de desenvolvimento",
    period: "04/2022 – 01/2024",
    company: "Intelite Tecnologia",
    responsibilities:
      "Realizar alterações em cadastros de usuários dos clientes. Analisar e executar pequenas correções e ajustes nas páginas (front-end e back-end). Participar de reuniões para levantamento de demandas e solicitações dos clientes. Monitorar aplicações e reportar possíveis inconsistências ou falhas.",
  },
  {
    role: "Suporte ao usuário - Helpdesk",
    period: "05/2021 – 03/2022",
    company: "Fundação Napoleão Laureano",
    responsibilities:
      "Realizar alterações e atualizações nos cadastros dos colaboradores. Fazer manutenção preventiva e corretiva nos sistemas instalados nas máquinas dos usuários. Monitorar o funcionamento dos equipamentos e garantir a estabilidade dos sistemas. Instalar e configurar mecanismos de segurança e proteção (antivírus, firewalls, etc.). Prestar suporte técnico presencial e remoto aos colaboradores.",
  },
];
export function Skills() {
  return (
    <section
      id="sobre"
      className="bg-[#0a0808]/85 px-6 py-24 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollRevealItem>
          <h2 className="mb-14 text-center text-4xl font-bold text-white lg:text-5xl">
            Sobre mim & Tecnologias
          </h2>
        </ScrollRevealItem>

        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:gap-0">
          {/* Esquerda da linha: Sobre mim */}
          <div className="lg:col-start-1 lg:row-start-1 lg:pr-10">
            <ScrollRevealItem delay={80}>
              <h3 className="mb-4 border-l-2 border-[#8b4040] pl-4 text-xl font-semibold text-white">
                Sobre mim
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {aboutText}
              </p>
            </ScrollRevealItem>

            <div className="mt-14">
              <h3 className="mb-4 border-l-2 border-[#8b4040] pl-4 text-xl font-semibold text-white">
                Experiências
              </h3>
              <div className="flex flex-col gap-4">
                {experiences.map((exp, index) => (
                  <ScrollRevealItem key={index} delay={100 + index * 60}>
                    <div className="group rounded-xl border border-white/5 bg-[#121210] px-5 py-4 transition-all hover:border-[#8b4040]/30 hover:bg-[#1a1212]">
                      <p className="font-semibold text-white">
                        {exp.role} <span className="text-zinc-500 font-normal">({exp.period})</span>
                      </p>
                      <p className="mt-1 text-sm text-[#c08080]">Empresa: {exp.company}</p>
                      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                        {exp.responsibilities}
                      </p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>
          </div>

          {/* Direita da linha: Tecnologias (linha = borda esquerda desta coluna) */}
          <div className="lg:col-start-2 lg:row-start-1 lg:border-l-4 lg:border-white/20 lg:pl-10">
            <div className="space-y-16">
              {skillCategories.map((category, catIndex) => (
                <ScrollRevealItem key={category.title} delay={catIndex * 80}>
                  <div>
                    <div className="mb-6 border-l-2 border-[#8b4040] pl-4">
                      <h3 className="text-lg font-semibold text-white">
                        {category.title}
                      </h3>
                      <p className="text-sm text-zinc-500">{category.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <ScrollRevealItem key={skill.name} delay={skillIndex * 60}>
                          <div
                            className="group flex items-center gap-4 rounded-xl border border-white/5 bg-[#121210] px-5 py-4 transition-all hover:border-[#8b4040]/30 hover:bg-[#1a1212]"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="h-8 w-8 object-contain"
                              />
                            </div>
                            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
                              {skill.name}
                            </span>
                          </div>
                        </ScrollRevealItem>
                      ))}
                    </div>
                  </div>
                </ScrollRevealItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
