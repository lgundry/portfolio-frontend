import './App.css'
import Intro from 'components/intro/Intro.component'
import Navigation from 'components/navigation/Navigation.component'
import About from 'components/about/About.component'
import ParallaxBackground from 'components/parallax/ParallaxBackground.component'

function App() {
  return (
    <>
      <ParallaxBackground speed={1.2} />
      <Navigation />
      <Intro />
      <About />
    </>
  )
}

export default App
