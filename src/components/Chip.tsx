import React from 'react'
import './Chip.css'

function Chip() {
  return (
    <>
        <section className='chip-section'>
            <div className="section-image">
                <img src="https://iphone-doc.vercel.app/assets/images/chip.jpeg" height={180} width={180} alt="chip" />
            </div>
            <div className="section-content">
                <h1 className='section-heading'>A17 Pro chip. <br />A monster win for gaming.</h1>
                <p className="section-subtext">It’s here. The biggest redesign in the history of Apple GPUs.</p>
            </div>
            <div className="frame-container">
                <div className="mobile-frame">
                    <img src="https://iphone-doc.vercel.app/assets/images/frame.png" alt="frame" className="frame-img" />
                    <div className="frame-video">
                        <video src="https://iphone-doc.vercel.app/assets/videos/frame.mp4" autoPlay muted></video>
                    </div>
                </div>
                <p className="frame-caption">Honkai: Star Rail</p>
            </div>
        </section>
    </>
  )
}

export default Chip