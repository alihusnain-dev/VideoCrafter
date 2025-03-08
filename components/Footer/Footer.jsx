import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <div>
      <div className="footer-wrapper" style={{height:'auto'}}>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-branding">
          <a href="/"className="logo" id="footer-logo">
            <img src="/images/footer-logo.svg" alt="" />
          </a>

          <p className="tagline">
            Revolutionary software that lets you create professional-grade Videos in just minutes, with no video editing skills required.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>COMPANY</h3>
            <ul>
              <li>
                <Link href="/#HowItWorks">Features</Link>
              </li>
              <li>
                <Link href="/#Portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>HELP</h3>
            <ul>
              <li>
                <Link href="/terms/terms-condition/">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/terms/privacy/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms/refund/">Refund Policy</Link>
              </li>
              <li>
                <Link href="/terms/affiliate/">Affiliate Program Terms</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        © Copyright 2025, All Rights Reserved by VideoCrafter.io
      </div>
    </footer>
  </div>
    </div>
  )
}

export default footer
