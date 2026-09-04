import './Navigation.component.css'
import {
  LuUser,
  LuWrench,
  LuMail
} from "react-icons/lu"
import BrandIcon from 'images/Brand.svg?react'
import NavCard from './NavCard.component.tsx'

function Navigation() {
  const sections = [
    { title: "Home", destination: "intro__container", icon: BrandIcon, iconClassName: "brandIcon" },
    { title: "About", destination: "about__container", icon: LuUser },
    { title: "Skills", destination: "skills__heading", icon: LuWrench },
    /* { title: "Projects", destination: "projects__container", icon: LuFolder }, */
    { title: "Contact", destination: "contact__container", icon: LuMail },
  ]

  return (
    <div className="nav__container">
      {sections.map((section, index) =>
        <NavCard 
          key={ index }
          title={ section.title }
          destination={ section.destination }
          icon={ section.icon }
          iconClassName={ section.iconClassName ?? ''}
        />
      )}
    </div>
  )
}
export default Navigation;
