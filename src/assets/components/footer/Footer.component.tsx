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
<<<<<<< Updated upstream
          <a href={githubUrl} className="footer__link" target="_blank" rel="noopener noreferrer">
            GitHub Profile
=======
          <a href={githubUrl} className="footer__text footer__link" target="_blank" rel="noopener noreferrer">
            <p className="">GitHub Profile</p>
>>>>>>> Stashed changes
          </a>
        </div>

        <div className="footer__section">
<<<<<<< Updated upstream
          <a href={resumeUrl} className="footer__link" download>
            Download Resume
=======
          <a href={resumeUrl} target="_blank" className="footer__text footer__link">
            <p className="">Resume</p>
>>>>>>> Stashed changes
          </a>
        </div>
      </div>

      <div className="footer__divider"></div>

    </footer>
  )
}

export default Footer
