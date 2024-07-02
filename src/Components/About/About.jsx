import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leader Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero consequuntur aliquam nihil numquam officiis iste dolores non dolorum eius eos quia odit, cum et quos, fuga nulla quasi eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi illo delectus quas numquam dolorem nisi, neque labore quibusdam dolor quos cupiditate a, voluptatibus facilis perspiciatis, fuga officia libero reiciendis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa in maxime vel adipisci modi hic eligendi voluptates, nam molestias odit quis ratione temporibus dolorem.</p>
        </div>
    </div>
  )
}
export default About
