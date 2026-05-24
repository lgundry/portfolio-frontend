import React from "react"
import Button from "components/custombutton/custombutton.tsx"
import logoImage from "images/logo-cropped.png"
import "./nav.css"

const Nav: React.FC = () => {
  return (
    <div id="nav">
      <Button><img src={ logoImage } id="logoImage" alt="logo"/></Button>
      <Button><h4>About</h4></Button>
      <Button><h4>Contact Me</h4></Button>
    </div>
  )
}

export default Nav;
