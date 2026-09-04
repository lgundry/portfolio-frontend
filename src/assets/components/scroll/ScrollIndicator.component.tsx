import './ScrollIndicator.component.css'
import ScrollArrow from 'images/arrow.svg?react'

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
      <ScrollArrow className="scroll-indicator__arrow" />
    </button>
  )
}

export default ScrollIndicator
