import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header> 

      {/* Top of header */}
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Abishek Satnur</h1>
        <h5 className="text-light"> Fullstack Developer</h5>

        {/* Button components */}
        <CTA />

        <HeaderSocials />

        {/* Picture of me */}
        <div className="me">
          <img src={ME} alt="Picture of me"></img>
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>    
  )
}

export default Header