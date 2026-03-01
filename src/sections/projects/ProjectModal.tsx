import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Project } from "./ProjectsInfo"
import { SiGithub } from "react-icons/si";
import { HiExternalLink, HiX } from "react-icons/hi";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (project.id) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [project.id, onClose]);

  return createPortal(
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
        e.stopPropagation();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center 
        bg-black/50 backdrop-blur-sm animate-fadeIn select-none"
    >
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        className="relative bg-(--card-background)/90 rounded-2xl shadow-xl max-w-4xl w-full animate-scaleIn overflow-hidden m-6 select-none"
      >
        <HiX
          size={32}
          fill="white"
          className="cursor-pointer transition duration-150 hover:bg-white/20 rounded-full absolute z-10
          top-4 right-4 select-none"
          onClick={onClose}
        />

        <div className="relative w-full h-40 lg:h-50 overflow-hidden max-sm:hidden">
          <img
            src={project.prints[0]}
            alt={project.name}
            className="w-full pointer-events-none select-none"
          />
          <div
            className="
              absolute inset-0
              bg-gradient-to-t from-card-background/100 via-card-background/50 to-transparent
            "
          ></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center py-3.5 px-6 gap-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold select-none">
            {project.name}
          </h2>

          <div className="max-sm:hidden">
            <h4 className="font-medium text-(--light-blue) pb-3 select-none">
              Tecnologias:
            </h4>
            <div className="flex gap-3 flex-wrap select-none">
              {project.technologies.map((tech) => (
                <img
                  key={tech.name}
                  src={tech.image}
                  alt={tech.name}
                  title={tech.name}
                  className="h-8 hover:scale-110 transition-all duration-250 pointer-events-none select-none"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 flex flex-col gap-4">
          <p className="text-(--text-color) whitespace-pre-line select-none">
            {project.about}
          </p>

          <div className="flex gap-6 justify-center select-none">
            {project.deploy && (
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center text-white p-2 bg-(--blue) hover:bg-(--dark-blue) rounded-lg transition duration-200 max-sm:text-center select-none"
              >
                <HiExternalLink size={24} className="max-sm:hidden" />
                Acessar projeto
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-white p-2 bg-violet-800 hover:bg-violet-950 rounded-lg transition duration-200 max-sm:text-center select-none"
            >
              <SiGithub size={24} className="max-sm:hidden" />
              Acessar repositório
            </a>
          </div>

          <span className="flex justify-center text-(--text-color) select-none">
            {project.completionDate === undefined
              ? "9 de abril de 2023"
              : project.completionDate}
          </span>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ProjectModal;
