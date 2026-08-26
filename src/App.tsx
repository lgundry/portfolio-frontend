import { useState } from 'react'
import './App.css'
import { COLORS } from 'constants/colors.ts'
import Intro from 'components/intro/Intro.component.tsx'
import Navigation from 'components/navigation/Navigation.component.tsx'
import About from 'components/about/About.component.tsx'
import ParallaxBackground from 'components/parallax/ParallaxBackground.component.tsx'

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
