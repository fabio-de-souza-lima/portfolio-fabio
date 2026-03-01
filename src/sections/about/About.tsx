import { AnimatedFadeIn } from "../../components/fadeIn/AnimatedFadeIn"

function About() {
  return (
    <AnimatedFadeIn>
      <div 
        className="pt-24 col-span-1 text-(--text-color) flex flex-col gap-3 select-none" 
        id="about"
      >
        <h2 className="text-[2.438rem] text-white font-medium select-none">
          Sobre mim
        </h2>

        <p className="select-none">
          Profissional em transição de carreira para a área de Desenvolvimento de Tecnologia, 
          com foco no crescimento contínuo e na criação de soluções digitais que gerem valor. 
          Perfil proativo, adaptável e orientado a resultados, com grande interesse em atuar em projetos de inovação,
          desenvolvimento de sistemas e melhoria de processos.
          Em busca de oportunidades para aplicar conhecimentos adquiridos, 
          contribuir com equipes dinâmicas e evoluir profissionalmente dentro do setor de tecnologia.
        </p>

        <p className="select-none">
          Profissional em transição de carreira para a área de Desenvolvimento de Tecnologia, 
          com formação técnica em Eletrônica pela ETEC Teresa Nunes (2012–2014)
          e certificado registrado no CRT do Estado de São Paulo.
          Minha trajetória combina experiência técnica, disciplina e capacidade analítica adquirida na eletrônica, 
          agora direcionadas para o setor de tecnologia e desenvolvimento de sistemas. 
          Perfil proativo, adaptável e orientado a resultados, com grande interesse em atuar em projetos de inovação, 
          soluções digitais e melhoria de processos.
        </p>

        <p className="select-none">
          Atualmente, estou concluindo a graduação em Ciência da Computação, cursando o oitavo semestre,
          o que reforça meu compromisso com a evolução profissional e a consolidação de conhecimentos na área de tecnologia.
        </p>
      </div>
    </AnimatedFadeIn>
  )
}

export default About
