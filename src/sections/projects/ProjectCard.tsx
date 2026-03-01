import { AnimatedFadeIn } from "../../components/fadeIn/AnimatedFadeIn"
import type { Project } from "./ProjectsInfo"

interface ProjectCardProps {
  project: Project
  onSelect: () => void
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <AnimatedFadeIn>
      <div
        onClick={onSelect}
        className="group cursor-pointer flex flex-col w-60 transition-all duration-250 hover:scale-110 bg-(--card-background) shadow-lg/40 rounded-lg overflow-hidden select-none"
      >
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={project.prints[0]}
            className="w-full object-cover pointer-events-none select-none"
            alt={project.name}
          />

          {/* Camada de degradê fixa na parte de baixo */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t from-black/60 via-black/45 to-transparent
              transition-opacity duration-300
              opacity-100
              group-hover:opacity-0"
          ></div>

          {/* Camada escura OVERLAY para o hover */}
          <div
            className="
              absolute inset-0
              bg-black/60
              opacity-0
              transition-opacity duration-300
              group-hover:opacity-100"
          ></div>
        </div>

        <div className="mx-3 mb-4 -mt-10 z-0 h-8 overflow-hidden">
          <p className="font-semibold text-white text-2xl transition duration-300 group-hover:-translate-y-8 select-none">
            {project.name}
          </p>
          <p className="font-semibold text-white text-2xl transition duration-300 group-hover:-translate-y-8 select-none">
            Ver detalhes
          </p>
        </div>

        <div className="flex justify-center gap-3 pb-2 select-none">
          {project.mainTechnologies.map((tech) => (
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
    </AnimatedFadeIn>
  )
}

export default ProjectCard
