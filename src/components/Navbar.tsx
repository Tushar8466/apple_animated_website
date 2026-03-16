'use client'
import React from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'Store', href: '/Store' },
    { name: 'Mac', href: '#' },
    { name: 'iPad', href: '#' },
    { name: 'iPhone', href: '#' },
    { name: 'Watch', href: '#' },
    { name: 'Vision', href: '#' },
    { name: 'AirPods', href: '#' },
    { name: 'TV & Home', href: '#' },
    { name: 'Entertainment', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link href="/" className="navbar-link logo">
              <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" className="navbar-icon">
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0335 3.5132 3.5132 0 0 0 2.1379 3.2223 8.3051 8.3051 0 0 1 -1.0673 2.208c-.6447.9388-1.3127 1.8722-2.3658 1.8722s-1.411-.6214-2.6288-.6214-1.61.6033-2.6083.6423c-1.0371.0389-1.8153-.9907-2.4647-1.9242a11.1517 11.1517 0 0 1 -1.9056-5.7389c-.0207-3.3444 2.5036-5.1167 4.9614-5.1556 1.0372-.0207 2.0135.698 2.6456.698s1.8211-.8547 3.0561-.7352a3.3847 3.3847 0 0 1 2.5896 1.4c-.0156.0084-.0299.0175-.0447.0271z" fill="currentColor" />
                <path d="m10.7744 14.1293a3.3 3.3 0 0 0 .7629-2.2789 3.4074 3.4074 0 0 0 -2.2154 1.1444 3.125 3.125 0 0 0 -.7914 2.1985 2.6806 2.6806 0 0 0 2.2439-1.064z" fill="currentColor" />
              </svg>
            </Link>
          </li>
          
          {navLinks.map((link) => (
            <li key={link.name} className="navbar-item">
              <Link href={link.href} className="navbar-link">
                {link.name}
              </Link>
            </li>
          ))}

          <li className="navbar-item">
            <Link href="#" className="navbar-link">
              <svg height="44" viewBox="0 0 15 44" width="15" xmlns="http://www.w3.org/2000/svg" className="navbar-icon">
                <path d="m14.298 27.2023-3.8774-3.8774a5.2924 5.2924 0 1 0 -.82.82l3.8774 3.8774a.58.58 0 0 0 .82 0 .58.58 0 0 0 0-.82zm-9.19-3.9223a4.12 4.12 0 1 1 4.12-4.12 4.1247 4.1247 0 0 1 -4.12 4.12z" fill="currentColor" />
              </svg>
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="#" className="navbar-link">
              <svg height="44" viewBox="0 0 13 44" width="13" xmlns="http://www.w3.org/2000/svg" className="navbar-icon">
                <path d="m11.3533 16.0288h-1.0206v-2.25a3.8326 3.8326 0 0 0 -7.6652 0v2.25h-1.0209a1.6463 1.6463 0 0 0 -1.6466 1.6467v10.4244a1.6466 1.6466 0 0 0 1.6466 1.6501h9.7067a1.6463 1.6463 0 0 0 1.6466-1.6467v-10.4281a1.6464 1.6464 0 0 0 -1.6466-1.6467zm-7.5192-2.25a2.666 2.666 0 0 1 5.3318 0v2.25h-5.3318zm8.0026 12.0711a.48.48 0 0 1 -.4832.4834h-9.7067a.48.48 0 0 1 -.4833-.4834v-10.4244a.48.48 0 0 1 .4833-.4834h9.7067a.48.48 0 0 1 .4832.4834z" fill="currentColor" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;