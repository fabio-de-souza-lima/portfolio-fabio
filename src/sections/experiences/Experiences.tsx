import { AnimatedFadeIn } from "../../components/fadeIn/AnimatedFadeIn"
import ExperienceCard from "./ExperienceCard"
import ExperiencesInfo from "./ExperiencesInfo"

function Experiences() {
  return (
    <AnimatedFadeIn>
      <div className="pt-24 select-none" id="experiences">
        <h2 className="pb-6 text-[2.438rem] text-white font-medium select-none">
          Experiência
        </h2>
        <div className="gap-15 flex flex-col select-none">
          {ExperiencesInfo.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </AnimatedFadeIn>
  )
}

export default Experiences
