import './Navigation.component.css'
import BrandIcon from 'images/Brand.svg?react'
import Button from '../button/Button.component'

function Navigation() {
  const sections = [
    { title: 'About', destination: 'about__container' },
    { title: 'Skills', destination: 'skills__heading' },
    { title: 'Contact', destination: 'contact__container' },
  ]

  const handleNavigate = (destination: string) => {
    const element = document.getElementById(destination)
    if (!element) return

    const navHeight = document.querySelector('.nav__container')?.clientHeight ?? 0
    const offsetTop = element.offsetTop - navHeight

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleResumeClick = () => {
    window.open('/Logan_Gundry_Resume.pdf', '_blank', 'noopener,noreferrer')
  }

  return (
    <header className="nav__container">
      <div className="nav__brand" onClick={handleLogoClick} role="button" tabIndex={0}>
        <BrandIcon className="nav__brand-icon" />
      </div>

      <nav className="nav__menu" aria-label="Main navigation">
        {sections.map((section) => (
          <button
            key={section.destination}
            type="button"
            className="nav__link"
            onClick={() => handleNavigate(section.destination)}
          >
            {section.title}
          </button>
        ))}
        <Button className="nav__resume-button" onPress={handleResumeClick}>
          Resume
        </Button>
      </nav>
    </header>
  )
}

export default Navigation
