import './App.css'
import Intro from 'components/intro/Intro.component'
import Navigation from 'components/navigation/Navigation.component'
import About from 'components/about/About.component'
import Skills from 'components/skills/Skills.component'
import ParallaxBackground from 'components/parallax/ParallaxBackground.component'
import Projects from 'components/projects/Projects.component'
import Footer from 'components/footer/Footer.component'

// Import the two background variants and pass them into the reusable parallax component
import bgDark from 'assets/images/pexels-enginakyurt-5200063.jpg'
import bgLight from 'assets/images/pexels-enginakyurt-5200063-inverted.jpg'

function App() {
  return (
    <>
      <ParallaxBackground speed={1.25} darkImage={bgDark} lightImage={bgLight} />
      <Navigation />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
