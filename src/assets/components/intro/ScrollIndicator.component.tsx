import './ScrollIndicator.component.css'
import scrollArrow from 'images/arrow.svg'

function ScrollIndicator() {
  const handleScroll = () => {
    const element = document.getElementById('about__container');
    if (element) {
      const navHeight = document.querySelector('.nav__container')?.clientHeight || 0;
      const offsetTop = element.offsetTop - navHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <button 
      className="scroll-indicator"
      onClick={handleScroll}
      aria-label="Scroll to About section"
    >
      <img src={scrollArrow} alt="Scroll down" className="scroll-indicator__arrow" />
    </button>
  )
}

export default ScrollIndicator