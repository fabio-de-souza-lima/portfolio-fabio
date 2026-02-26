import Techs from "../sections/habilities/HabilitiesInfo"
import type { Technology } from "../sections/habilities/HabilitiesInfo";

export const addTechs = (techNames: string[]): Technology[] => {
  const allTechs = Techs.flatMap((t) => t.list);
  return allTechs.filter((tech) => techNames.includes(tech.name))
}