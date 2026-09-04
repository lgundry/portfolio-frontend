import './About.component.css'
import BouncingDots from '../bouncing_dots/BouncingDots.component.tsx'

function About() {
  return (
    <div id="about__container" className="about__container">
      <div className="aboutText__container">
        <h2 className="about__heading">About me</h2>
        <p className="about__text">I've been working with computers for most of my life, 
            and these days that usually means building software. My work is primarily 
            focused on JavaScript, React, React Native, Node.js, and Express, 
            backed by several years of experience in IT.
        </p>
        <p className="about__text">
            Outside of development, you'll usually find me running Linux, tinkering 
            with old hardware, or exploring open-source software, privacy, and 
            cybersecurity. I enjoy taking things apart, figuring out how they work, 
            and occasionally making them do something they probably weren't designed to do.
        </p>
      </div>
      <div className="loading__container">
        <BouncingDots size={32} title="Loading profile" />
      </div>
    </div>
  )
};
export default About;
