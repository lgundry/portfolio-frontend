import './Skills.component.css'
import SkillCard from './SkillCard.component'
import PythonLogo from 'images/python.svg'
import JavascriptLogo from 'images/javascript.svg'
import HTMLLogo from 'images/html.svg'
import CSSLogo from 'images/css.svg'
import CsharpLogo from 'images/csharp.svg'
import NETLogo from 'images/net.svg'
import WordpressLogo from 'images/wordpress.svg'
import ReactLogo from 'images/react.svg'
import CppLogo from 'images/cpp.svg'

const skills = [
     { label: "Python", icon: PythonLogo },
     { label: "JavaScript", icon: JavascriptLogo },
     { label: "HTML", icon: HTMLLogo },
     { label: "CSS", icon: CSSLogo},
     { label: "C#", icon: CsharpLogo},
     { label: "C++", icon: CppLogo},
     { label: ".NET", icon: NETLogo},
     { label: "Wordpress", icon: WordpressLogo},
     { label: "React", icon: ReactLogo},
]

function Skills() {
  return (
    <>
      <h2 className="skills__heading">Skills</h2>
      <div id="skills__container" className="skills__container">
        {skills.map((skill, index) =>
          <SkillCard 
            key={ index }
            label={ skill.label }
            image={ skill.icon }
          />
        )}
      </div>
    </>
  )
}
export default Skills;
