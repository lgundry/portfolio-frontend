import './Intro.component.css'
import Headshot from 'images/IMG_4838.jpeg'
import ScrollIndicator from './ScrollIndicator.component'

function Intro() {
  return (
    <div id="intro__container" className="intro__container">
      <div className="intro">
        <div className="intro__text">
          <h1 className="intro__supertext">The name's Logan</h1>
          <h3 className="intro__subtext">I make software</h3>
        </div>
        <img className="intro__headshot" src={Headshot} alt="headshot" />
      </div>
      <ScrollIndicator />
    </div>
  )
};
export default Intro;