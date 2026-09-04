import './About.component.css'
import BrandIcon from 'images/Brand.svg?react'

function About() {
  return (
    <div id="about__container" className="about__container">
      <BrandIcon className="about__icon"/>
      <div className="aboutText__container">
        <h2 className="about__heading">About me</h2>
        <p className="about__text">
          <mark className="highlight-1">Professionally?</mark><br />
          I'm an IT professional with several years of experience across a variety of industries
          including Healthcare and Education. I started my career in high school working in my school
          IT department as an intern. Since then, I've graduated from Northern Michigan University with
          a B.S. in Computer Science and actively wear many hats:
        </p>
        <ul>
          <li>IT Director</li>
          <li>Media Director</li>
          <li>Web Designer</li>
          <li>Software Developer</li>
        </ul>
        <p className="about__text">
          <mark className="highlight-2">Casually?</mark><br />
          I'm just a guy who likes computers. I build custom PCs,
          mess around with old laptops, and build silly programs.
          I got into the hobby thanks to gaming, and now I'm in the
          deep end.
          As of late, my focus has been on:
        </p>
        <ul>
          <li>Learning graphic design</li>
          <li>Learning Rust</li>
          <li>Restoring an Apple PowerBook 180</li>
          <li>Creating a custom Linux GUI for an underpowered netbook</li>
        </ul>
      </div>
    </div>
  )
};
export default About;
