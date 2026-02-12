"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { ProjectImageCarousel } from "./ProjectImageCarousel";
import { ProjectModal, type Project } from "./ProjectModal";
import { ScrollRevealItem } from "./ScrollReveal";

const GRADIENTS = [
  "from-[#2d1010] to-[#5c2a2a]",
  "from-[#1a0a0a] to-[#4a2020]",
  "from-[#3d1515] to-[#6b3030]",
  "from-[#2d1010] to-[#5c2a2a]",
  "from-[#1a0a0a] to-[#4a2020]",
  "from-[#3d1515] to-[#6b3030]",
];

type ProjectCategory = "personal" | "real";

const PROJECTS_BASE: (Omit<Project, "title" | "description"> & { category: ProjectCategory })[] = [
  // Projetos pessoais
  {
    id: "barbertip",
    category: "personal",
    url: "https://github.com/IgorLohan/barbertip",
    image: [
      "/projetos/barbertip.png",
      "/projetos/barbertip-2.png",
      "/projetos/barbertip-3.png",
      "/projetos/barbertip-4.png",
      "/projetos/barbertip-5.png",
    ],
    technologies: ["Next.js", "Tailwind CSS", "NestJS", "Swagger", "MongoDB"],
  },
  {
    id: "chefia",
    category: "personal",
    url: "https://github.com/IgorLohan/chefia",
    image: [
      "/projetos/chefia.png",
      "/projetos/chefia-2.png",
      "/projetos/chefia-3.png",
      "/projetos/chefia-4.png",
      "/projetos/chefia-5.png",
    ],
    technologies: ["Vue.js", "Vuetify", "JavaScript"],
  },
  {
    id: "api-chefia",
    category: "personal",
    url: "https://github.com/IgorLohan/api-chefia",
    image: "/projetos/chefia-6.png",
    technologies: ["LoopBack", "MongoDB", "JavaScript", "Node.js"],
  },
  // Projetos reais (clientes/empresas)
  {
    id: "paginacao-dashboard",
    category: "real",
    url: "https://docs.google.com/document/d/1P92eIvVdj6gG6vbEwofwT8pYOwWQuRYgIFFdGJBbWEY/edit?usp=sharing",
    image: [
      "/projetos/paginacao.png",
      "/projetos/paginacao-2.png",
      "/projetos/paginacao-3.png",
    ],
    technologies: ["React", "Node.js", "LoopBack"],
  },
];

export function Projects() {
  const t = useTranslations("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: (Project & { category: ProjectCategory })[] = useMemo(
    () =>
      PROJECTS_BASE.map((p) => ({
        ...p,
        title: t(`items.${p.id}.title`),
        description: t(`items.${p.id}.description`),
      })),
    [t]
  );

  const personalProjects = projects.filter((p) => p.category === "personal");
  const realProjects = projects.filter((p) => p.category === "real");
  const allProjects = [...personalProjects, ...realProjects];

  const getGradientIndex = (projectId: string) =>
    allProjects.findIndex((p) => p.id === projectId) % GRADIENTS.length;

  const renderProjectCard = (project: Project, index: number) => (
    <ScrollRevealItem key={project.id} delay={index * 100} className="h-full">
      <button
        type="button"
        onClick={() => setSelectedProject(project)}
        className="group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#1a1212] text-left transition-colors hover:bg-[#1e1515]"
      >
        {Array.isArray(project.image) ? (
          <ProjectImageCarousel
            images={project.image}
            alt={project.title}
            gradientClass={GRADIENTS[getGradientIndex(project.id)]}
          />
        ) : (
          <div
            className={`relative h-52 shrink-0 overflow-hidden bg-gradient-to-r ${GRADIENTS[getGradientIndex(project.id)]}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="h-full w-full object-cover opacity-90"
            />
          </div>
        )}
        <div className="flex min-h-0 flex-1 flex-col space-y-4 p-6">
          <h3 className="shrink-0 text-xl font-bold text-white">{project.title}</h3>
          <p className="min-h-[2.5rem] line-clamp-2 text-zinc-400">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-[#8b4040]/40 px-3 py-1.5 text-xs font-medium text-[#c08080]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </button>
    </ScrollRevealItem>
  );

  return (
    <section
      id="projetos"
      className="bg-[#150a0a]/85 px-6 py-24 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollRevealItem>
          <h2 className="mb-14 text-center text-4xl font-bold text-white lg:text-5xl">
            {t("sectionTitle")}
          </h2>
        </ScrollRevealItem>

        <div className="space-y-16">
          <div>
            <ScrollRevealItem delay={50}>
              <h3 className="mb-8 border-l-4 border-[#8b4040] pl-4 text-2xl font-semibold text-white">
                {t("realProjectsTitle")}
              </h3>
            </ScrollRevealItem>
            {realProjects.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {realProjects.map((project, index) => renderProjectCard(project, index))}
              </div>
            ) : (
              <p className="rounded-xl border border-white/10 bg-[#1a1212]/50 px-6 py-8 text-center text-zinc-500">
                {t("realProjectsEmpty")}
              </p>
            )}
          </div>

          <div>
            <ScrollRevealItem delay={50}>
              <h3 className="mb-8 border-l-4 border-[#8b4040] pl-4 text-2xl font-semibold text-white">
                {t("myProjectsTitle")}
              </h3>
            </ScrollRevealItem>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {personalProjects.map((project, index) =>
                renderProjectCard(project, realProjects.length + index)
              )}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        gradientClass={
          selectedProject
            ? GRADIENTS[getGradientIndex(selectedProject.id)]
            : GRADIENTS[0]
        }
        onClose={() => setSelectedProject(null)}
        isRealProject={selectedProject ? realProjects.some((p) => p.id === selectedProject.id) : false}
      />
    </section>
  );
}
