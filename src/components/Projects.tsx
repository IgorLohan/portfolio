"use client";

import Image from "next/image";
import { useState } from "react";
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

const PROJECTS: Project[] = [
  {
    id: "barbertip",
    title: "BarberTip - Fullstack",
    description: "Aplicação para barbearias com agendamento e gestão.",
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
    title: "Chefia - Frontend",
    description: "Sistema de gestão para restaurantes e lanchonetes com foco em autoatendimento na mesa e controle de estoque.",
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
    title: "Api Chefia - Backend",
    description: "API backend para o sistema Chefia.",
    url: "https://github.com/IgorLohan/api-chefia",
    image: "/projetos/chefia-6.png",
    technologies: ["LoopBack", "MongoDB","JavaScript", "Node.js"],
  },
  
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projetos"
      className="bg-[#150a0a]/85 px-6 py-24 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollRevealItem>
          <h2 className="mb-14 text-center text-4xl font-bold text-white lg:text-5xl">
            Projetos em Destaque
          </h2>
        </ScrollRevealItem>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
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
                    gradientClass={GRADIENTS[index % GRADIENTS.length]}
                  />
                ) : (
                  <div
                    className={`relative h-52 shrink-0 overflow-hidden bg-gradient-to-r ${GRADIENTS[index % GRADIENTS.length]}`}
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
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        gradientClass={
          selectedProject
            ? GRADIENTS[PROJECTS.findIndex((p) => p.id === selectedProject.id) % GRADIENTS.length]
            : GRADIENTS[0]
        }
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
