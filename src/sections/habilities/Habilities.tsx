import { AnimatedFadeIn } from "../../components/fadeIn/AnimatedFadeIn";
import Techs from "./HabilitiesInfo";
import HabilityBox from "./HabilityBox";

function Habilities() {
  return (
    <AnimatedFadeIn>
      <div 
        className="pt-24 px-4 sm:px-0 max-w-7xl mx-auto select-none" 
        id="habilities"
      >
        <h2 className="text-4xl text-white font-semibold mb-2 select-none">
          Habilidades
        </h2>
        <p className="text-base text-gray-400 mb-12 select-none">
          Tecnologias que utilizo no dia a dia
        </p>

        {Techs.map((section) => (
          <div key={section.name} className="mb-12 w-full select-none">
            {/* Barrinha azul removida aqui: limpei as classes border e pl-4 */}
            <h3 className="text-white text-2xl font-medium mb-6 select-none">
              {section.name}
            </h3>
            
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-start items-start select-none">
              {section.list.map((hability) => (
                <HabilityBox key={hability.id} hability={hability} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedFadeIn>
  );
}

export default Habilities;
