import { addTechs } from "../../utils/AddTechs"

const ExperiencesInfo = [
  {
    id: 1,
    companyLogo: "https://i.ibb.co/Gv8tTL1w/rodape.png",
    companyName: "Colégio Estadual Professora Benedita Rosa Rezende",
    beginningDate: "Abr/2025",
    endingDate: "Jun/2025",
    role: "Desenvolvedor Full Stack Junior & Impacto Social",
    description: "Desenvolvi um portal moderno para o Colégio Estadual Professora Benedita Rosa Rezende, focado em centralizar informações escolares e facilitar o acesso a cursos gratuitos do Governo do Paraná. Tecnologias: HTML5, CSS3, JavaScript e Bootstrap 5. Destaque: Interface 100% responsiva e curadoria de conteúdos educacionais. Objetivo: Reduzir a barreira de informação para estudantes da rede pública.",
    technologies: addTechs(["HTML5", "CSS3", "VS Code", "JavaScript", "Bootstrap5"]),
    className: "select-none" // bloqueio aplicado
  },
  {
    id: 2,
    companyLogo: "https://i.ibb.co/8DZTmydM/Copilot-20260220-121236.png",
    companyName: "GRUPO KSL ASSOCIADOS",
    beginningDate: "Ago/2004",
    endingDate: "Jan/2022",
    role: "Assistente de Supervisor de Atendimento",
    description: "Suporte à Gestão Operacional: Auxílio direto na supervisão das rotinas de atendimento, garantindo a fluidez dos processos e o cumprimento de metas estabelecidas. Análise e Melhoria de Processos: Colaboração na análise de controles internos, identificação de gargalos e apoio no desenvolvimento de ações para otimização de fluxos de trabalho. Inteligência de Dados: Extração, tratamento e elaboração de relatórios analíticos e gerenciais para suporte à tomada de decisão e mitigação de riscos operacionais. Rotinas Financeiras: Atuação ativa em conciliações financeiras e suporte técnico nos processos de fechamento mensal da área. Monitoramento de Indicadores: Acompanhamento de KPIs do setor, fornecendo insumos precisos para a coordenação e diretoria.",
    skills: "Liderança de Apoio: Capacidade de orientar a equipe de operadores, tirar dúvidas técnicas e manter a motivação para atingir metas. Resiliência e Negociação: Habilidade para lidar com situações de conflito e objeções de clientes inadimplentes. Visão Analítica: Não apenas ver os números, mas entender o porquê da queda na recuperação e sugerir melhorias. Comunicação Assertiva: Essencial para reportar resultados à supervisão e dar feedbacks claros aos assistentes/operadores. Organização e Gestão de Tempo: Capacidade de lidar com múltiplos prazos (fechamento mensal, relatórios diários e suporte à equipe).",
    className: "select-none" // bloqueio aplicado
  }
]

export default ExperiencesInfo
