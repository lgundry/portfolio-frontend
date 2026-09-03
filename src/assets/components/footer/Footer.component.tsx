import './Footer.component.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const contactEmail = 'logangundry1+porfolio@gmail.com'
  const githubUrl = 'https://github.com/lgundry'
  const resumeUrl = '/Logan_Gundry_Resume.pdf'

  return (
    <footer id="contact__container" className="footer__text footer__container">
      <div className="footer__content">
        <div className="footer__section">
          <a href={`mailto:${contactEmail}`} className="footer__link">
            <p className="">Contact</p>
          </a>
        </div>

        <div className="footer__section">
          <a href={githubUrl} className="footer__text" target="_blank" rel="noopener noreferrer">
            <p className="">GitHub Profile</p>
          </a>
        </div>

        <div className="footer__section">
          <a href={resumeUrl} target="_blank" className="footer__text">
            <p className="">Resume</p>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
