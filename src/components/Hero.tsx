"use client";
import React, { useRef } from 'react'
import './Hero.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Hero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to('#hero-title', {
      opacity: 1,
      y: 0,
      delay: 0.5,
      duration: 1,
      ease: 'power2.out'
    });

    gsap.to('.hero-video', {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      delay: 0.2,
      ease: 'power1.inOut'
    });

    gsap.to('.hero-text', {
      opacity: 1,
      y: 0,
      delay: 1.5,
      duration: 1,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <section className='hero-section' ref={containerRef}>
        <div className="hero-container">
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">iPhone 15 Pro</h1>
            <video 
              src="https://iphone-doc.vercel.app/assets/videos/hero.mp4" 
              autoPlay 
              muted 
              className='hero-video'
              playsInline
            ></video>
            <div className="hero-text">
              <button className='hero-button'>Buy</button>
              <div className='hero-buy'>From $199/month or $999</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero
