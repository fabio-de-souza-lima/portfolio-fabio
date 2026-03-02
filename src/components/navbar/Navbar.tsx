import { useRef } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import { HiMenu, HiX } from 'react-icons/hi';

type MenuState = 'closed' | 'open'

interface NavbarProps {
  menuState: MenuState
  onMenuToggle: () => void
  onMenuClose: () => void
}

function Navbar({ menuState, onMenuToggle, onMenuClose }: Readonly<NavbarProps>) {
  const menuRef = useRef<HTMLDivElement>(null)

  const handleMenuToggle = (): void => {
    onMenuToggle()
  }

  const handleMenuClose = (): void => {
    onMenuClose()
  }

  return (
    <>
      {menuState === 'closed' && (
        <header 
          className='fixed z-10 w-full bg-(--card-background)/40 flex justify-around items-center backdrop-blur-sm border-b-1 border-(--blue) **select-none**'>
          
          <a href="#hero">
            <img 
              src={logo} 
              alt="Logo com iniciais LQ" 
              className='max-h-16 **pointer-events-none select-none**' 
            />
          </a>

          <nav>
            <ul className='hidden lg:flex flex-row text-xl text-white font-medium **select-none**'>
              <li><a href="#about" className="**select-none**">Sobre mim</a></li>
              <li><a href="#habilities" className="**select-none**">Habilidades</a></li>
              <li><a href="#experiences" className="**select-none**">Experiências</a></li>
              <li><a href="#projects" className="**select-none**">Projetos</a></li>
              <li><a href="#contact" className="**select-none**">Contato</a></li>
            </ul>
          </nav>

          <button 
            className='lg:hidden cursor-pointer **select-none**' 
            onClick={handleMenuToggle} 
            aria-label='Abrir menu'
          >
            <HiMenu size={24} color='white' className="**pointer-events-none select-none**" />
          </button>
        </header>
      )}

      {menuState === 'open' && (
        <header 
          ref={menuRef} 
          className='fixed z-10 w-full bg-(--card-background)/40 backdrop-blur-sm border-b-1 border-(--blue) **select-none**'
        >
          <div className="w-full flex justify-around">
            <a href="#hero">
              <img 
                src={logo} 
                alt="Logo com iniciais LQ" 
                className='max-h-16 **pointer-events-none select-none**' 
              />
            </a>

            <br />  

            <button 
              className='lg:hidden cursor-pointer **select-none**' 
              onClick={handleMenuToggle} 
              aria-label='Abrir menu'
            >
              <HiX size={24} color='white' className="**pointer-events-none select-none**" />
            </button>
          </div>

          <nav>
            <ul className='flex flex-col text-xl text-white font-medium **select-none**'>
              <li><a href="#about" onClick={handleMenuClose} className="**select-none**">Sobre mim</a></li>
              <li><a href="#habilities" onClick={handleMenuClose} className="**select-none**">Habilidades</a></li>
              <li><a href="#experiences" onClick={handleMenuClose} className="**select-none**">Experiências</a></li>
              <li><a href="#projects" onClick={handleMenuClose} className="**select-none**">Projetos</a></li>
              <li><a href="#contact" onClick={handleMenuClose} className="**select-none**">Contato</a></li>
            </ul>
          </nav>
        </header>
      )}
    </>
  )
}

export default Navbar
