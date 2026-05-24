import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { COLORS } from 'constants/colors.ts'
import VertComponent from 'components/section-vert/section.tsx'
import HorComponent from 'components/section-hor/section.tsx'
import Nav from 'components/nav/nav.tsx';
import Landing from 'components/landing/landing.tsx'
import { useResponsive } from "hooks/useResponsive"

document.documentElement.style.setProperty("--grey", COLORS.grey);
document.documentElement.style.setProperty("--dark-purple", COLORS.dark_purple);
document.documentElement.style.setProperty("--purple", COLORS.purple);
document.documentElement.style.setProperty("--blue", COLORS.blue);
document.documentElement.style.setProperty("--gunmetal", COLORS .gunmetal);
document.documentElement.style.setProperty("--grey-bg", COLORS.grey_bg);
document.documentElement.style.setProperty("--dark-purple-bg", COLORS.dark_purple_bg);
document.documentElement.style.setProperty("--purple-bg", COLORS.purple_bg);
document.documentElement.style.setProperty("--blue-bg", COLORS.blue_bg);
document.documentElement.style.setProperty("--gunmetal-bg", COLORS .gunmetal_bg);

function App() {
  return (
    <div id="container"> 
      <Nav />
      <Landing />
    </div>
  )
}

export default App
