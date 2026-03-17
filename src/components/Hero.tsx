import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <>
      <section className='hero-section'>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">iPhone 15 Pro</h1>
            <video src="https://iphone-doc.vercel.app/assets/videos/hero.mp4" autoPlay muted className='hero-video'></video>
            <div className="hero-text">
              <button className='hero-button'>Buy</button>
              <div className='hero-buy'>From $199/month or $999</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
