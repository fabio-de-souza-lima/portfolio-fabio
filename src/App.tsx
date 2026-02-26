import { useState } from 'react'
import './styles/App.css'
import About from './sections/about/About'
import Habilities from './sections/habilities/Habilities'
import Home from './sections/home/Home'
import Navbar from './components/navbar/Navbar'
import Masonry from 'react-masonry-css'
import Projects from './sections/projects/Projects'
import type { Project } from './sections/projects/ProjectsInfo'
import ProjectModal from './sections/projects/ProjectModal'
import Contact from './sections/contact/Contact'
import Footer from './components/footer/Footer'
import Experiences from './sections/experiences/Experiences'

type MenuState = 'closed' | 'open'

function App() {

  const [menuState, setMenuState] = useState<MenuState>('closed')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const toggleMenu = (): void => {
    setMenuState(prevState => prevState === 'closed' ? 'open' : 'closed')
  }

  const closeMenu = (): void => {
    setMenuState('closed')
  }

  return (
    <>
      <Navbar
        menuState={menuState}
        onMenuToggle={toggleMenu}
        onMenuClose={closeMenu}
      />
      <main className='pt-[4.061rem]'>
        <Home />
        <Masonry breakpointCols={{ default: 2, 1280: 1 }} className='flex container max-xl:max-w-fit mx-auto gap-x-[6.875rem] px-5'>
          <About />
          <Habilities />
          <Experiences />
          <Projects onSelectProject={setSelectedProject} />
        </Masonry>
        <Contact />
        <Footer />
      </main>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  )
}

export default App
