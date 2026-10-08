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
    { title: "About", destination: "about__container"},
    { title: "Skills", destination: "skills__heading"},
    { title: "Contact", destination: "contact__container"},
  ]

  return (
    <div className="nav__container">
      <NavCard className="nav__left" destination="intro__container" icon={BrandIcon} iconClassName="nav__icon"/>
      <div className="nav__right">
        {sections.map((section, index) =>
          <NavCard 
            key={ index }
            title={ section.title }
            destination={ section.destination }
            icon={ section.icon }
            iconClassName={ section.iconClassName ?? ''}
          />
        )} 
        <NavCard
          title="Resume" 
          className="resume__card"
          customStyle={{
            backgroundColor: "var(--text-accent-1)",
            color: "black",
          }}
        />
      </div>
    </div>
  )
}
export default Navigation;
