"use client";
import React, { useRef } from 'react'
import './Highlights.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Highlights() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#title',
        start: 'top 85%',
      }
    });

    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: '.link',
        start: 'top 85%',
      }
    });
  }, { scope: containerRef });

  return (
    <section className='highlight-section' ref={containerRef}>
        <div className='section-content'>
            <h1 id="title" className='hightlight-heading'>Get the highlights.</h1>
            <div className='section-video'>
                <div className='film link'>
                  Watch the film 
                  <img src="https://iphone-doc.vercel.app/assets/images/watch.svg" alt="watch icon" />
                </div>
                <div className='event link'>
                  Watch the event 
                  <img src="https://iphone-doc.vercel.app/assets/images/right.svg" alt="right icon" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights