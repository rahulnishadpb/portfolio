import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useReveal } from './hooks/useReveal'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggle } = useTheme()
  useReveal()

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
