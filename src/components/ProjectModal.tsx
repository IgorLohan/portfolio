"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { ProjectImageCarousel } from "./ProjectImageCarousel";

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string | string[];
  technologies: string[];
}

interface ProjectModalProps {
  project: Project | null;
  gradientClass: string;
  onClose: () => void;
  /** Projetos reais: exibe "Ver documentação" em vez de "Ver projeto". */
  isRealProject?: boolean;
}

export function ProjectModal({ project, gradientClass, onClose, isRealProject = false }: ProjectModalProps) {
  const t = useTranslations("modal");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      aria-modal
      aria-labelledby="modal-title"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#8b4040]/50 bg-[#0f0a0a] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
          aria-label={t("close")}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          <div className="shrink-0 p-4">
            <div className="relative h-[48vh] min-h-[280px] overflow-hidden rounded-lg">
              {Array.isArray(project.image) ? (
                <ProjectImageCarousel
                  images={project.image}
                  alt={project.title}
                  gradientClass="from-[#0f0a0a] to-[#0f0a0a]"
                  fill
                  priority
                  containerClassName="!min-h-0 h-full"
                />
              ) : (
                <div className="relative h-full min-h-[280px] w-full overflow-hidden bg-[#0f0a0a]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    quality={95}
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6 pt-10">
            <h2 id="modal-title" className="text-2xl font-bold text-white lg:text-3xl">
              {project.title}
            </h2>
            <p className="mt-3 text-zinc-400">{project.description}</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-[#8b4040]/40 px-3 py-1.5 text-xs font-medium text-[#c08080]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5c2a2a] to-[#8b4040] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
              >
                {isRealProject ? t("viewDocumentation") : t("viewProject")}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document !== "undefined" ? createPortal(modalContent, document.body) : null;
}
