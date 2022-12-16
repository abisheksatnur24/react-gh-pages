import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
      <section id="experience">
        <h5> Other Skills </h5>
        <h2>Non-CS projects</h2>
        <h3> Besides CS, I've always enjoyed music, food, and sport. <br /> Here are how some of my interests take form</h3>

        {/* <div className="container experience_container"
        style={"background: transparent;border-color: var(--color-primary-variant);"}>
          <div className="experience_frontend">
            <h3> Digital Media Projects</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsPatchCheckFill />
                <h4> Blog Post</h4>  
              </article>                            
            </div>          
          </div>
          </div> */}

        <br />
        <br />

        <div className='blog-link'><a href='https://medium.com/@abishek24/death-by-diet-b91d26f64616'><BsPatchCheckFill /> Death by Diet - A small blog written by me on dangers of common foods</a> <br /> </div>

        <div className='blog-link'><a href='https://soundcloud.com/wowsopurple/vine-vs-tiktok/s-NjONuxwkj6j?si=7421aefc36a54c4cb578d4e2d6bb67a5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'><BsPatchCheckFill /> Vine vs TikTok - A small podcast on the failure of Vine and success of TikTok</a> <br /> </div>

        <div className='blog-link'><a href='https://youtu.be/0df4TNClkPU'><BsPatchCheckFill /> How to Kick a Ball - World Cup Edition</a> <br /> </div>

      </section>


  )
}

export default Experience