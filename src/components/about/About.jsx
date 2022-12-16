import React from 'react'
import './about.css'
import ME from '../../assets/portfolio1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">

        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

          <article className="about_card">
            <FaAward className="about_icon" />
            <h5>Experience</h5>
            <small>
              1+ Year Working
            </small>
          </article>


          <article className="about_card">
            <FiUsers className="about_icon" />
            <h5>Clients</h5>
            <small>
              10+ hours worked
            </small>
          </article>

          <article className="about_card">
            <VscFolderLibrary classname="about_icon" />
            <h5>Projects</h5>
            <small>
              10+ Projects Completed
            </small>
          </article>  

          <p>
            I am not very experienced, but am always open to learning new things!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
          </div>
        </div>
      </div>
    </section>
  )
}

export default About