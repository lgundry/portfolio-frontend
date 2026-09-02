import './Footer.component.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const contactEmail = 'logangundry1+porfolio@gmail.com'
  const githubUrl = 'https://github.com/lgundry'
  const resumeUrl = '/Logan_Gundry_Resume.pdf'

  return (
    <footer className="footer__container">
      <div className="footer__content">
        <div className="footer__section">
          <h3>Get in Touch</h3>
          <a href={`mailto:${contactEmail}`} className="footer__link">
            {contactEmail}
          </a>
        </div>

        <div className="footer__section">
          <h3>My Work</h3>
          <a href={githubUrl} className="footer__link" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>

        <div className="footer__section">
          <h3>Resume</h3>
          <a href={resumeUrl} className="footer__link" download>
            Download Resume
          </a>
        </div>
      </div>

      <div className="footer__divider"></div>

      <div className="footer__bottom">
        <p className="footer__copyright">&copy; {currentYear} Logan Gundry. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
