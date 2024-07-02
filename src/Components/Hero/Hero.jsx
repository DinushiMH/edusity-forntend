import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h2>We Ensure better education for a better world</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui fugit incidunt minima neque saepe est consequuntur sit recusandae cupiditate deleniti! Cumque, temporibus aliquid inventore facere modi maxime iusto odit perspiciatis.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Hero
