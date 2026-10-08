import './Intro.component.css'
import Headshot from 'images/IMG_4838.jpeg'
import Button from 'components/button/Button.component'

function Intro() {
  const handleViewWork = () => {
    const element = document.getElementById('projects__container')
    if (element) {
      const navHeight = document.querySelector('.nav__container')?.clientHeight ?? 0
      const offsetTop = element.offsetTop - navHeight
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  const handleContact = () => {
    const element = document.getElementById('contact__container')
    if (element) {
      const navHeight = document.querySelector('.nav__container')?.clientHeight ?? 0
      const offsetTop = element.offsetTop - navHeight
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div id="intro__container" className="intro__container">
        <div className="intro">
          <div className="intro__content">
            <div className="intro__text">
              <h1 className="intro__supertext">The name's Logan</h1>
              <h3 className="intro__subtext">I make <span className="highlight-1">software</span></h3>
            </div>
            <div className="intro__buttons">
              <Button className="intro__button intro__button--primary" onPress={handleViewWork}>
                View my work
              </Button>
              <Button className="intro__button intro__button--secondary" onPress={handleContact}>
                Get in touch
              </Button>
            </div>
          </div>
          <img className="intro__headshot" src={Headshot} alt="headshot" />
        </div>
      </div>
    </>
  )
}

export default Intro
