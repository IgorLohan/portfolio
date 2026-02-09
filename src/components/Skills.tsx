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

export function Skills() {
  return (
    <section
      id="tecnologias"
      className="bg-[#0a0808]/85 px-6 py-24 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-white lg:text-5xl">
          Tecnologias e Utilitários
        </h2>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <div className="mb-6 border-l-2 border-[#8b4040] pl-4">
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
                <p className="text-sm text-zinc-500">{category.description}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
