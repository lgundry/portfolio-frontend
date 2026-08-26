import './intro.component.css'
import Headshot from 'images/IMG_4838.JPEG'

function Intro() {
  return (
    <div className="intro__container">
      <div className="intro">
        <div className="intro__text">
          <h1 className="intro__supertext">The name's Logan</h1>
          <h4 className="intro__subtext">I write code and stuff</h4>
        </div>
        <img className="intro__headshot" src={Headshot} alt="headshot" />
      </div>
    </div>
  )
};
export default Intro;
