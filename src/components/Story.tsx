"use client";
import React, { useRef } from 'react'
import './Story.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Story() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to('#story-title', {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '#story-title',
        start: 'top 85%',
      }
    });

    gsap.to('.g_grow', {
      scale: 1,
      opacity: 1,
      ease: 'power1',
      scrollTrigger: {
        trigger: '.g_grow',
        start: 'top 85%',
        scrub: 5.5,
      }
    });

    gsap.to('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.g_fadeIn',
        start: 'top 85%',
      }
    });
  }, { scope: containerRef });

  return (
    <section className='section-story' ref={containerRef}>
        <div className="screen-max-width">
            <h1 id="story-title" className='story-heading'>iPhone. <br />Forged in titanium.</h1>
            
            <div className="story-video-container">
                <div className="story-video-main">
                    <video src="https://iphone-doc.vercel.app/assets/videos/explore.mp4" autoPlay muted className="story-video g_grow"></video>
                </div>
                <div className="story-video-grid">
                    <div className="story-video-small">
                        <img src="https://iphone-doc.vercel.app/assets/images/explore1.jpg" className="story-video g_grow" alt="titanium detail" />
                    </div>
                    <div className="story-video-small">
                        <img src="https://iphone-doc.vercel.app/assets/images/explore2.jpg" className="story-video g_grow" alt="titanium detail" />
                    </div>
                </div>
            </div>

            <div className="story-text-container">
                <div className="story-text-item">
                    <p className="story-text-p g_fadeIn">
                        iPhone 15 Pro is <b>the first iPhone to feature an aerospace‑grade titanium design</b>, using the same alloy that spacecraft use for missions to Mars.
                    </p>
                </div>
                <div className="story-text-item">
                    <p className="story-text-p g_fadeIn">
                        Titanium has one of the best strength‑to‑weight ratios of any metal, making these our <b>lightest Pro models ever.</b> You'll notice the difference the moment you pick one up.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story