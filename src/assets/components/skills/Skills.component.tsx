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
import Cpp from 'images/cpp.svg'

const skills = [
     { label: "Python", icon: PythonLogo },
     { label: "JavaScript", icon: PythonLogo },
     { label: "HTML", icon: PythonLogo },
     { label: "CSS", icon: PythonLogo },
     { label: "C#", icon: PythonLogo },
     { label: "C++", icon: PythonLogo },
     { label: ".NET", icon: PythonLogo },
     { label: "Wordpress", icon: PythonLogo },
     { label: "React", icon: PythonLogo },
]

function Skills() {
  return (
    <div id="skills__container" className="skills__container">
      {skills.map((skill, index) =>
        <SkillCard 
          key={ index }
          label={ skill.label }
<<<<<<< Updated upstream
          image={ skill.icon }
=======
          icon={ skill.icon }
>>>>>>> Stashed changes
        />
      )}
    </div>
  )
}
export default Skills;
