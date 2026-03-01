import { AnimatedFadeIn } from "../../components/fadeIn/AnimatedFadeIn"
import ProjectCard from "./ProjectCard"
import ProjectsInfo from "./ProjectsInfo"

interface ProjectsProps {
  onSelectProject: (project: any) => void
}

function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <AnimatedFadeIn>
      <div className="pt-24 select-none" id="projects">
        <h2 className="pb-6 text-[2.438rem] text-white font-medium select-none">
          Projetos
        </h2>

        <div className="grid gap-5.5 max-md:justify-center md:grid-cols-2 justify-items-center select-none">
          {ProjectsInfo.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={() => onSelectProject(project)}
            />
          ))}
        </div>
      </div>
    </AnimatedFadeIn>
  )
}

export default Projects
