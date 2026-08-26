import { useState } from 'react'
import './App.css'
import { COLORS } from 'constants/colors.ts'
import Intro from 'components/intro/Intro.component.tsx'
import Navigation from 'components/navigation/Navigation.component.tsx'

function App() {
  return (
    <>
      <Navigation />
      <Intro />
    </>
  )
}

export default App
