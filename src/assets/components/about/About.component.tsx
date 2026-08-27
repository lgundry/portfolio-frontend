import './About.component.css'
import BouncingDots from '../bouncing_dots/BouncingDots.component.tsx'

function About() {
  return (
    <div className="about__container">
      <div className="aboutText__container">
        <h2 className="about__heading">About me</h2>
        <p className="about__text">Lorem Ipsum or something like that. Really not sure what I'm gonna put here</p>
      </div>
      <div className="loading__container">
        <BouncingDots size={32} title="Loading profile" />
      </div>
    </div>
  )
};
export default About;
