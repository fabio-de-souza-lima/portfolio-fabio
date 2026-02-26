
interface HabilityInfo {
  name: string;
  image: string;
}

interface HabilityProps {
  hability: HabilityInfo;
}

function HabilityBox({ hability }: HabilityProps) {
  return (
    <div className="flex flex-col items-center py-3 w-[7rem] bg-(--card-background) rounded-lg gap-2
      transition-all duration-250 hover:scale-115 shadow-lg/40">
      <img className="h-16" src={hability.image} alt={hability.name} />
      <span className="text-white text-sm">{hability.name}</span>
    </div>
  )
}

export default HabilityBox