"use client";

import { useTranslations } from "next-intl";
import { ScrollRevealItem } from "./ScrollReveal";

const categoryKeys = ["frontend", "backend", "utilities"] as const;

const skillCategories = [
  {
    key: "frontend" as const,
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
    key: "backend" as const,
    skills: [
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
      { name: "LoopBack", icon: "https://loopback.io/images/global/loopback-mark-frame-white.svg" },
      { name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    key: "utilities" as const,
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
  const t = useTranslations("skills");
  const experiencesCount = 3;

  return (
    <section
      id="sobre"
      className="bg-[#0a0808]/85 px-6 py-24 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollRevealItem>
          <h2 className="mb-14 text-center text-4xl font-bold text-white lg:text-5xl">
            {t("sectionTitle")}
          </h2>
        </ScrollRevealItem>

        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:gap-0">
          <div className="lg:col-start-1 lg:row-start-1 lg:pr-10">
            <ScrollRevealItem delay={80}>
              <h3 className="mb-4 border-l-2 border-[#8b4040] pl-4 text-xl font-semibold text-white">
                {t("aboutTitle")}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {t("aboutText")}
              </p>
            </ScrollRevealItem>

            <div className="mt-14">
              <h3 className="mb-4 border-l-2 border-[#8b4040] pl-4 text-xl font-semibold text-white">
                {t("experiencesTitle")}
              </h3>
              <div className="flex flex-col gap-4">
                {Array.from({ length: experiencesCount }).map((_, index) => (
                  <ScrollRevealItem key={index} delay={100 + index * 60}>
                    <div className="group rounded-xl border border-white/5 bg-[#121210] px-5 py-4 transition-all hover:border-[#8b4040]/30 hover:bg-[#1a1212]">
                      <p className="font-semibold text-white">
                        {t(`experiences.${index}.role`)}{" "}
                        <span className="text-zinc-500 font-normal">
                          ({t(`experiences.${index}.period`)})
                        </span>
                      </p>
                      <p className="mt-1 text-sm text-[#c08080]">
                        {t("companyLabel")}: {t(`experiences.${index}.company`)}
                      </p>
                      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                        {t(`experiences.${index}.responsibilities`)}
                      </p>
                    </div>
                  </ScrollRevealItem>
                ))}
              </div>
            </div>

            <ScrollRevealItem delay={280}>
              <a
                href="/api/download-curriculo"
                download="curriculo.pdf"
                className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#8b4040] bg-[#8b4040]/10 px-6 py-4 font-semibold text-[#a85555] transition-colors hover:bg-[#8b4040]/20"
              >
                <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t("downloadResume")}
              </a>
            </ScrollRevealItem>
          </div>

          <div className="lg:col-start-2 lg:row-start-1 lg:border-l-4 lg:border-white/20 lg:pl-10">
            <div className="space-y-16">
              {skillCategories.map((category, catIndex) => (
                <ScrollRevealItem key={category.key} delay={catIndex * 80}>
                  <div>
                    <div className="mb-6 border-l-2 border-[#8b4040] pl-4">
                      <h3 className="text-lg font-semibold text-white">
                        {t(`categories.${category.key}`)}
                      </h3>
                      <p className="text-sm text-zinc-500">
                        {t(`categories.${category.key}Desc`)}
                      </p>
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
