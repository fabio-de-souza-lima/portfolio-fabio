import { HiDocumentDownload } from "react-icons/hi"
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si"
import { FaEnvelope } from "react-icons/fa";
import "../../assets/responsive.css"; 

function Home() {
  return (
    <>
      <div 
        className="flex justify-center bg-(--card-background) py-16 max-sm:px-6 select-none" 
        id="hero"
        onContextMenu={(e) => e.preventDefault()} // bloqueia clique direito no container
        onDragStart={(e) => e.preventDefault()}   // bloqueia arrastar
        onTouchStart={(e) => e.preventDefault()}  // bloqueia toque longo em mobile
        onMouseDown={(e) => e.preventDefault()}   // reforço extra contra copiar
      >
        {/* Grid principal */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-0 items-center select-none">
          
          {/* Foto de Perfil */}
          <img 
            src="https://i.ibb.co/JR9wWVZ9/minha-foto.jpg"
            alt="Foto Fabio de Souza"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            onTouchStart={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
            className="max-h-52 w-52 aspect-square object-cover rounded-full place-self-center sm:place-self-start lg:place-self-center sm:col-span-2 lg:col-span-1 pointer-events-none select-none"
          />

          {/* Textos de Apresentação e Botão CV */}
          <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left select-none">
            <h1 className="font-semibold text-white text-2xl select-none">
              Olá! Eu sou o <br />
              <span className="text-blue-400 text-4xl leading-9 select-none">Fabio de Souza</span>
            </h1>

            <h2 className="py-4.5 text-[1.375rem] text-(--text-color) select-none">
              Desenvolvedor Full Stack
            </h2>

            <a 
              href="https://drive.google.com/file/d/1b-chgLFCpeo9aEG2X_yfxkidYRf8bQ2V/view?usp=sharing" 
              target="_blank" 
              rel="noreferrer"
              className="flex py-3 px-6 bg-(--blue) gap-2 text-white rounded-lg max-w-[12rem] transition duration-200 hover:bg-(--dark-blue) cursor-pointer items-center justify-center select-none"
            >
              <HiDocumentDownload size={24} />
              <span className="font-medium select-none">Ver CV</span>
            </a>
          </div>

          {/* Seção de Contatos Social */}
          <div className="flex items-center justify-center lg:justify-start w-full select-none">
            <div className="flex flex-col gap-6 text-(--text-color) font-medium items-start min-w-[240px] sm:min-w-0 select-none">
              
              {/* GitHub */}
              <a className="flex gap-4 transition duration-200 hover:text-white cursor-pointer hover:scale-105 items-center w-full select-none"
                href="https://github.com/fabio-de-souza-lima" target="_blank" rel="noreferrer">
                <div className="w-6 flex justify-center shrink-0">
                  <SiGithub size={24} className="text-(--light-blue)" />
                </div>
                <span className="text-base select-none">fabio-de-souza-lima</span>
              </a>

              {/* LinkedIn */}
              <a className="flex gap-4 transition duration-200 hover:text-white cursor-pointer hover:scale-105 items-center w-full select-none"
                href="https://www.linkedin.com/in/souzal-fabio/" target="_blank" rel="noreferrer">
                <div className="w-6 flex justify-center shrink-0">
                  <SiLinkedin size={24} className="text-(--light-blue)" />
                </div>
                <span className="text-base select-none">Fabio de Souza</span>
              </a>

              {/* E-mail */}
              <a className="flex gap-4 transition duration-200 hover:text-white cursor-pointer hover:scale-105 items-center w-full select-none"
                href="mailto:lima-f@outlook.com">
                <div className="w-6 flex justify-center shrink-0">
                  <FaEnvelope size={24} className="text-(--light-blue)" />
                </div>
                <span className="text-base select-none">lima-f@outlook.com</span>
              </a>

              {/* WhatsApp */}
              <a 
                className="flex gap-4 transition duration-200 hover:text-white cursor-pointer hover:scale-105 items-center w-full select-none"
                href="https://wa.me/5511945295086?text=Olá%20Fábio!%20Vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20saber%20se%20você%20está%20disponível%20para%20conversar."
                rel="noopener noreferrer"
              >
                <div className="w-6 flex justify-center shrink-0">
                  <SiWhatsapp size={24} className="text-(--light-blue)" />
                </div>
                <span className="text-base select-none">WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home;
