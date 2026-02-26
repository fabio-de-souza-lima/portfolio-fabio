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
      <header className='fixed z-10 w-full bg-(--card-background)/40 flex justify-around items-center backdrop-blur-sm border-b-1 border-(--blue)'>

        <a href="#hero">
          <img src={logo} alt="Logo com iniciais LQ" className='max-h-16' />
        </a>

        <nav>
          <ul className='hidden lg:flex flex-row text-xl text-white font-medium'>
            <li>
              <a href="#about">Sobre mim</a>
            </li>
            <li>
              <a href="#habilities">Habilidades</a>
            </li>
            <li>
              <a href="#experiences">Experiências</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>

        
          <button className='lg:hidden cursor-pointer' onClick={handleMenuToggle} aria-label='Abrir menu'>
            <HiMenu size={24} color='white' />
          </button>
        
      </header>
      )}

      {menuState === 'open' && (
        <header ref={menuRef} className='fixed z-10 w-full bg-(--card-background)/40 backdrop-blur-sm border-b-1 border-(--blue)'>

          <div className="w-full flex justify-around">
            <a href="#hero">
              <img src={logo} alt="Logo com iniciais LQ" className='max-h-16' />
            </a>

            <br />  

            <button className='lg:hidden cursor-pointer' onClick={handleMenuToggle} aria-label='Abrir menu'>
              <HiX size={24} color='white' />
            </button>
          </div>

          <nav>
            <ul className='flex flex-col text-xl text-white font-medium'>
              <li>
                <a href="#about" onClick={handleMenuClose}>Sobre mim</a>
              </li>
              <li>
                <a href="#habilities" onClick={handleMenuClose}>Habilidades</a>
              </li>
              <li>
                <a href="#experiences" onClick={handleMenuClose}>Experiências</a>
              </li>
              <li>
                <a href="#projects" onClick={handleMenuClose}>Projetos</a>
              </li>
              <li>
                <a href="#contact" onClick={handleMenuClose}>Contato</a>
              </li>
            </ul>
          </nav>
        </header>
      )}

    </>
  )
}

export default Navbar