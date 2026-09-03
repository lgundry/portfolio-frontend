import './Intro.component.css'
import Headshot from 'images/IMG_4838.jpeg'

function Intro() {
  return (
    <div id="intro__container" className="intro__container">
      <div className="intro">
        <div className="intro__text">
          <h1 className="intro__supertext">The name's Logan</h1>
          <h4 className="intro__subtext">I make software</h4>
        </div>
        <img className="intro__headshot" src={Headshot} alt="headshot" />
      </div>
    </div>
  )
};
export default Intro;
