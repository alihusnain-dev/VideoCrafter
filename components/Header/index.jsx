"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Index = () => {
  // State to manage the hamburger menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <Link href="/" className="logo" style={{ padding: '20px' }}>
            <img src="/images/logo-small.svg" alt="Logo" />
          </Link>

          <Link href="/" className="logo-small">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>

          {/* Desktop Links */}
          <div className="links">
            <div className="link">
              <Link href="/#">Home</Link>
              <Link href="/#Portfolio">Portfolio</Link>
              <Link href="/#HowItWorks">Features</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/#contact">Contact</Link>
            </div>

            <div className="line"></div>

            <div className="buttons">
              <Link href="/accounts/login">Login</Link>
              <Link href="#pricing" className="getStarted">Get started</Link>
            </div>
          </div>

          {/* Hamburger Icon */}
          <img
            src="/images/hamburger.svg"
            alt="menu"
            id="hamburger"
            className="hamburger"
            onClick={toggleMenu} // Toggle menu on click
          />

          {/* Mobile Menu */}
          <div
            className={`topbar ${isMenuOpen ? 'open' : ''}`} // Add 'open' class when menu is open
            id="topbar"
            style={{ background: 'white', height: 'fit-content' }}
          >
            <div
              className="hamburger-menu"
              style={{ background: 'white', height: 'fit-content' }}
            >
              <div className="topbar-grey"></div>
              <div className="links-topbar">
                <Link href="#" onClick={toggleMenu}>Home</Link>
                <Link href="#Portfolio" onClick={toggleMenu}>Portfolio</Link>
                <Link href="#HowItWorks" onClick={toggleMenu}>Features</Link>
                <Link href="#pricing" onClick={toggleMenu}>Pricing</Link>
                <Link href="#contact" onClick={toggleMenu}>Contact</Link>
                <hr className="separator" />
                <Link href="/accounts/login" onClick={toggleMenu}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add some basic CSS for the mobile menu */}
      <style jsx>{`
        .hamburger {
          display: none; /* Hide by default on desktop */
          cursor: pointer;
        }

        .topbar {
          display: none; /* Hide by default */
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: white;
          transition: transform 0.3s ease-in-out;
        }

        .topbar.open {
          display: block; /* Show when menu is open */
        }

        /* Media Query for Mobile */
        @media (max-width: 768px) {
          .hamburger {
            display: block; /* Show hamburger icon on mobile */
          }

          .links {
            display: none; /* Hide desktop links on mobile */
          }
        }
      `}</style>
    </>
  );
};

export default Index;