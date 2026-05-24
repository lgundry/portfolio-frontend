import React from "react";
import './landing.css';
import HorComponent from 'components/section-hor/section.tsx';
import VertComponent from 'components/section-vert/section.tsx';
import { COLORS } from 'constants/colors.ts';
import profileImage from 'images/pfp.png';

const Landing: React.FC = () => {
  return (
    <div id="landing">
      <Intro />
      <About />
    </div>
  )
}

const Intro: React.FC = () => {
  return (
    <div id="intro">
      <div id="lightbar" style={{ marginTop: "2rem" }} />
      <HorComponent>
        <img src={ profileImage } id="profileImage" />
        <div id="introTextContainer">
          <h1 id="introText">Call me Logan</h1>
          <h4 id="introSubtext">Tamer of machines, conjurer of code, sculptor of domains</h4>
        </div>
      </HorComponent>
      <div id="lightbar" style={{ marginBottom: "2rem" }} />
    </div>
  )
}

const About: React.FC = () => {
  return (
    <div id="about">
      <div id="aboutTextContainer">
        <h5 id="aboutText">
          I’m a software developer and systems administrator with a passion for building efficient, 
          user-friendly applications and infrastructure. I enjoy crafting full-stack solutions in JavaScript, 
          React, Python, and C++, designing custom neural networks, and turning hardware into interactive tools. 
          Beyond code, I draw inspiration from winter adventures, fantasy games, D&D campaigns, and the worlds 
          of art and anime, always looking for new ways to combine creativity with technology.
        </h5>
      </div>
      <div id="jobExperience">
      </div>
    </div>
  )
}

export default Landing;
