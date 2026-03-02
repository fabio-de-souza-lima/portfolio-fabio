import type { Technology } from "../habilities/HabilitiesInfo";
import { addTechs } from "../../utils/AddTechs"


export type Project = {
  id: number;
  name: string;
  about: string;
  prints: string[];
  technologies: Technology[];
  mainTechnologies: Technology[];
  deploy?: string;
  github: string;
  completionDate?: string;
}

const ProjectsInfo = [
  {
    id: 8,
    name:  "Portfólio",
    about: "Este portfólio é a materialização da minha filosofia de trabalho: onde a excelência visual encontra uma arquitetura escalável, garantindo que cada linha de código seja tão performática quanto a interface que o usuário vê. \n\n Desenvolvido com React + TypeScript e Vite, este projeto vai além da UI para demonstrar a aplicação prática de boas práticas de engenharia, como estado centralizado e separação de responsabilidades. \n\n ",
    prints: [
      "https://i.ibb.co/LDP9qSGT/potifolio-fabiao.png"
    ],
    technologies: addTechs([  "JavaScript","HTML5", "CSS3", "Git"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    deploy: "https://colegio-brr.vercel.app/index.html",
    completionDate: "26 de Fevereiro de 2026"
  },
  {
    id: 7,
    name:  "Web Escolar",
    about: "Desenvolvido com React + TypeScript e Vite, este projeto vai além da simples construção de uma interface de usuário. Ele demonstra, de forma prática e detalhada, a aplicação consistente de boas práticas de engenharia de software, como o uso de estado centralizado, a separação clara de responsabilidades entre componentes e camadas, além de uma arquitetura escalável que garante performance e manutenibilidade. O objetivo é mostrar não apenas a estética visual, mas também a robustez técnica que sustenta cada funcionalidade, evidenciando como design e código podem caminhar juntos para criar soluções modernas, eficientes e duradouras. \n\n ",
    prints: [
      "https://i.ibb.co/fVWjQKKk/escola.png"
    ],
    technologies: addTechs([  "JavaScript","HTML5", "CSS3", "Git"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    deploy: "https://colegio-brr.vercel.app/index.html",
    completionDate: "8 de Junho de 2025"
  },
  {
    id: 6,
    name: "WebCarros",
    about: "Marketplace automotivo completo para compra e venda de veículos, com foco em filtros inteligentes, navegabilidade fluida e uma interface moderna e responsiva. \n\n- Busca e Filtros: Sistema inteligente de pesquisa por categoria e detalhes técnicos. \n-Tecnologias: React, Next.js, Firebase e Tailwind CSS. \n-Destaque: Interface focada na conversão e facilidade de navegação para o usuário.",
    prints: [
      "https://i.ibb.co/m55GPYGs/webcarros.png"
    ],
    technologies: addTechs([ "React", "HTML5", "CSS3", "TypeScript", "Tailwind CSS", "Firebase", "Git"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    deploy: "https://webcarros-eosin.vercel.app/",
    github: "https://github.com/fabio-de-souza-lima/webcarros",
    completionDate: "20 de Março de 2025"
  },
  {
    id: 5,
    name: "Portfólio",
    about: "Portfólio digital moderno que apresenta competências estratégicas e projetos web de forma clara, técnica e profissional.. \n\nO que está funcionando muito bem: \n- Identidade Visual: O contraste entre o azul e o fundo escuro passa seriedade.\n- Ícones de Tecnologias: O uso dos logos (JS, HTML, CSS, Git) ajuda o recrutador a identificar seu stack instantaneamente. \n- Chamada para Ação: Os botões Acessar projeto e Acessar repositório estão bem destacados.",
    prints: [
      "https://i.ibb.co/60JwRr5p/potifolio1.png"
    ],
    technologies: addTechs(["HTML5", "CSS3", "CSS","JavaScript", "Git"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    deploy: "https://fabio-de-souza-lima.github.io/curriculo_profissional/",
    github: "https://github.com/fabio-de-souza-lima/curriculo_profissional",
    completionDate: "28 de Julho de 2024"
  },
  {
    id: 4,
    name: "Site Veterinario",
    about: "Desenvolvimento de interface afetiva e responsiva, focada em uma experiência de usuário leve e acolhedora.\n\nRecursos principais:🐾 \n-Design Responsivo: Adaptado para qualquer tela com visual personalizado;\n-Alta Performance: Carregamento otimizado de imagens e elementos; \n-UX Intuitiva: Navegação clara, fluida e totalmente funcional.",
    prints: [
      "https://i.ibb.co/FLLqYBnh/petmelzinha.png",
    ],
    technologies: addTechs(["JavaScript", "HTML5", "CSS3", "Git"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    deploy: "https://doguinho-melzinha.vercel.app/",
    github: "https://github.com/fabio-de-souza-lima/doguinho_melzinha",
    completionDate: "31 de Março de 2023"
  },
  {
    id: 3,
    name: "Jogo da Memória",
    about: "Desenvolvi um Jogo da Memória temático utilizando JavaScript Vanilla, implementando lógica de estado para validação de pares, algoritmo de baralhamento Fisher-Yates e interface responsiva com animações CSS 3D, tudo publicado via Vercel para garantir uma experiência de utilizador fluida e moderna. \n\nO projeto une UX intuitiva e temática nostálgica a um código limpo e modular, garantindo alta performance, escalabilidade e total compatibilidade responsiva entre dispositivos.",
    prints: [
      "https://i.ibb.co/M5BvkKbJ/jogo-da-memoria.png"
    ],
    technologies: addTechs([ "JavaScript", "HTML5", "CSS3", "Git", ]),
    mainTechnologies: addTechs(["ASP.NET", "React", "MySQL"]),
    deploy:"https://jogo-do-chaves-e-dofabiao.vercel.app/",
    github: "https://github.com/fabio-de-souza-lima/jogo-do-chaves-e-dofabiao",
    completionDate: "9 de Abril de 2023"
  },
  {
    id: 2,
    name: "Igreja Adoração",
    about: "Desenvolvimento de plataforma institucional para a IEAPP, focada na digitalização da comunicação e facilitação do acesso a eventos e informações da comunidade. \n\nConstruído com uma estrutura responsiva e otimizada, o portal garante um carregamento rápido e uma visualização perfeita em qualquer dispositivo, desde smartphones até computadores de mesa.",
    prints: [
      "https://i.ibb.co/qMqPMBfc/igreja.png"
    ],
    technologies: addTechs([ "JavaScript", "HTML5", "CSS3", "Git", ]),
    mainTechnologies: addTechs(["ASP.NET", "React", "MySQL"]),
    deploy:"https://fabio-de-souza-lima.github.io/ieapp_igreja/",
    github: "https://github.com/fabio-de-souza-lima/ieapp_igreja",
    completionDate: "15 de Fevereiro de 2023"
  },
  {
    id: 1,
    name: "Sonia Bolos",
    about: "O site institucional desenvolvido para a Sonia Bolos e Salgados é uma plataforma gastronômica completa que une um design apetitoso a uma navegação funcional. Focada em destacar a qualidade artesanal dos produtos, a interface conta com um menu detalhado de bolos, salgados e doces, além de seções de depoimentos e integração direta com o WhatsApp para encomendas. O projeto demonstra expertise em criar experiências digitais que valorizam a identidade visual do cliente e otimizam o atendimento comercial no ambiente web.",
    prints: [
      "https://i.ibb.co/tPTgNgkF/soniabolos.png"
    ],
    technologies: addTechs([ "JavaScript", "HTML5", "CSS3", "Git", ]),
    mainTechnologies: addTechs(["ASP.NET", "React", "MySQL"]),
    deploy:"https://fabio-de-souza-lima.github.io/sonia_bolos/",
    github: "https://github.com/fabio-de-souza-lima/sonia_bolos",
    completionDate: "11 de Março de 2022"
  }
]

export default ProjectsInfo;