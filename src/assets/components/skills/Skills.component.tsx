import './Skills.component.css'
import PythonLogo from 'images/python.svg'
import JavascriptLogo from 'images/javascript.svg'
import HTMLLogo from 'images/html.svg'
import CSSLogo from 'images/css.svg'
import CsharpLogo from 'images/csharp.svg'
import NETLogo from 'images/net.svg'

function Skills() {
  return (
    <div className="skills__container">
      <h2 className="skills__heading">Skills</h2>
      <div className="skillsLogo__container">
        <img src={PythonLogo} alt="python" className="skill__logo" /> 
        <img src={JavascriptLogo} alt="python" className="skill__logo" />
        <img src={HTMLLogo} alt="python" className="skill__logo" />
        <img src={CSSLogo} alt="python" className="skill__logo" />
        <img src={CsharpLogo} alt="python" className="skill__logo" />
        <img src={NETLogo} alt="python" className="skill__logo" />
      </div>
    </div>
  )
}
export default Skills;
