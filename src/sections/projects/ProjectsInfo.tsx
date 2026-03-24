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
    id: 9,
    name:  "Lanche do Fabão",
    about: "O Lanche do Fabão une performance extrema e UX mobile-first em uma arquitetura Vue + Vite, garantindo que a eficiência do fluxo de pedidos via WhatsApp seja tão alta quanto a qualidade da interface e a acessibilidade do código. \n\n ",
    prints: [
      "https://i.ibb.co/bM5Zzgp3/lanche-do-fabiao.png"
    ],
    technologies: addTechs([  "JavaScript","HTML5", "CSS3", "Git", "Vue", "Vite","Tailwind CSS"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    deploy: "https://lanchedofabao-6gsx.vercel.app/",
    completionDate: "23 de Março de 2026"
  },
  {
    id: 8,
    name:  "Portfólio",
    about: "Este portfólio une estética e arquitetura escalável, garantindo que a eficiência do código seja tão alta quanto a qualidade da interface. \n\n Desenvolvido com React + TypeScript e Vite, este projeto vai além da UI para demonstrar a aplicação prática de boas práticas de engenharia, como estado centralizado e separação de responsabilidades. \n\n ",
    prints: [
      "https://i.ibb.co/LDP9qSGT/potifolio-fabiao.png"
    ],
    technologies: addTechs([  "JavaScript","HTML5", "CSS3", "Git","Vite"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    deploy: "https://colegio-brr.vercel.app/index.html",
    completionDate: "26 de Fevereiro de 2026"
  },
  {
    id: 7,
    name:  "Web Escolar",
    about: " Mais do que um exercício técnico, este portal é uma ferramenta de transformação social. Ao centralizar as trilhas de aprendizado do Governo do Paraná, o projeto remove barreiras entre o estudante e o conhecimento. Ver a tecnologia servindo como ponte para o futuro de jovens do ensino público é o que realmente valida cada linha de código escrita. \n\n Tecnologia e educação unidas para transformar realidades, abrindo novas portas para o futuro jovem.",
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
    technologies: addTechs([ "React", "HTML5", "CSS3", "TypeScript", "Tailwind CSS", "Firebase", "Git","Vite"]),
    mainTechnologies: addTechs(["Spring Boot", "React", "MySQL"]),
    deploy: "https://webcarros-eosin.vercel.app/",
    github: "https://github.com/fabio-de-souza-lima/webcarros",
    completionDate: "20 de Março de 2025"
  },
  {
    id: 5,
    name: "Portfólio",
    about: "Portfólio digital moderno que apresenta competências estratégicas e projetos web de forma clara, técnica e profissional.. \n\nO que está funcionando muito bem: \n- Identidade Visual: O contraste entre o azul e o fundo escuro passa seriedade.\n- Ícones de Tecnologias: O uso dos logos (JS, HTML, CSS, Git) ajuda o recrutador a identificar seu stack instantaneamente.",
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
    about: "Jogo da Memória em JS Vanilla com lógica de estados e algoritmo Fisher-Yates. Possui interface responsiva com animações CSS 3D e deploy via Vercel. O projeto une UX intuitiva a um código limpo e modular, garantindo performance, escalabilidade e total compatibilidade entre dispositivos.",
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
    about: "O site da Sonia Bolos e Salgados une design apetitoso e navegação funcional. Com menu detalhado, depoimentos e integração ao WhatsApp, a plataforma destaca a qualidade artesanal e otimiza o atendimento. Um projeto focado em experiência digital, identidade visual e conversão comercial.",
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