import './Navigation.component.css'
import BrandIcon from 'images/Brand.svg?react'
import NavCard from './NavCard.component.tsx'

function Navigation() {
  const sections = [
    { title: "About", destination: "about__container"},
    { title: "Skills", destination: "skills__heading"},
    { title: "Contact", destination: "contact__container"},
  ]

  const resumeUrl = '/Logan_Gundry_Resume.pdf'

  const handleResumeClick = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="nav__container">
      <NavCard 
        className="nav__left" 
        destination="intro__container" 
        icon={BrandIcon} 
        iconClassName="nav__icon"
      />
      <div className="nav__right">
        {sections.map((section, index) =>
          <NavCard 
            key={index}
            title={section.title}
            destination={section.destination}
          />
        )} 
        <NavCard
          title="Resume" 
          className="nav__resume-card"
          customStyle={{
            backgroundColor: "var(--text-accent-1)",
            color: "black",
          }}
          onResume={handleResumeClick}
        />
      </div>
    </div>
  )
}
export default Navigation;
