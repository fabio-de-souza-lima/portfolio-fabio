import { AnimatedFadeIn } from "../../components/fadeIn/AnimatedFadeIn"
import type { Technology } from "../../sections/habilities/HabilitiesInfo"

interface Experience {
  companyLogo: string,
  companyName: string,
  beginningDate: string,
  endingDate: string,
  role: string,
  description: string,
  technologies?: Technology[] | null,
  skills?: string | null
}

interface ExperienceProps {
  experience: Experience
}


function ExperienceCard({ experience }: ExperienceProps) {
  return (
    <AnimatedFadeIn>
      <div className="bg-(--card-background) rounded-2xl p-9 text-(--text-color) shadow-lg/40">
      <div className="flex gap-3 justify-between items-center max-xm:items-start max-xm:flex-col-reverse">
        <img src={experience.companyLogo} alt={`Logo ` + experience.companyName}
          className="w-32" />
        <span className="font-medium">{experience.beginningDate} - {experience.endingDate}</span>
      </div>

      <h3 className="font-semibold text-white py-6 text-xl">{experience.role}</h3>

      <p className="">{experience.description}</p>

      {
        experience.technologies ? (

          <>
            <h4 className="font-medium text-(--light-blue) pb-3 pt-5">Tecnologias:</h4>

            <div className="flex gap-3 flex-wrap">
              {
                experience.technologies.map((tech) => (
                  <img src={tech.image} alt={tech.name} title={tech.name} className="h-8 hover:scale-110 transition-all duration-250" />
                ))
              }
            </div>
          </>
        ) : (
          <p className="pt-5"><span className="font-medium text-(--light-blue) pr-2">Habilidades:</span>{experience.skills}</p>
        )
      }

    </div>
    </AnimatedFadeIn>
  )
}

export default ExperienceCard