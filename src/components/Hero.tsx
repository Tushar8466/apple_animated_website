'use client'
import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">iPhone 15 Pro</h1>
        <p className="hero-subtitle">Titanium. So strong. So light. So Pro.</p>
        <div className="hero-cta">
          <Link href="#" className="hero-button">Buy</Link>
          <Link href="#" className="hero-link">Learn more &gt;</Link>
        </div>
      </div>
      <div className="hero-media">
        {/* Placeholder for video or image */}
        <div className="hero-placeholder-gradient"></div>
      </div>
    </section>
  );
};

import Link from 'next/link';
export default Hero;
