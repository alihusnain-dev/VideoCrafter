import React from 'react'

const Beats = () => {
  return (
    <div>
      <div className="portfolio main-eature-container" id="Portfolio">
        <div className="portfoliotext">
          <h2 className="marg">
            Why <span className="highlight">VideoCrafter.io</span><span style={{ textTransform: 'capitalize' }}> beats any video Editor</span>
          </h2>
        </div>
        <div className="feature-container">
          <div className="feature-card">
            <div className="circle">1</div>
            <div className="circle-border"></div>
            <h3>Create Videos Fast</h3>
            <p>Stop Wasting Time On Complex Tools And Endless Revisions. With VideoCrafter.io, You Can Create
              Professional, Eye-Catching Videos In Record Time.</p>
          </div>
          <div className="feature-card">
            <div className="circle">2</div>
            <div className="circle-border"></div>
            <h3>No Missed Deadlines</h3>
            <p>Tired Of Freelancers Vanishing When You Need Them Most? VideoCrafter.io Puts YOU In Control.</p>
          </div>
          <div className="feature-card">
            <div className="circle">3</div>
            <div className="circle-border"></div>
            <h3>VA-Friendly</h3>
            <p>Unlock The Full Potential Of Your Team By Equipping Them With VideoCrafter.io. Empower Your Virtual
              Assistants (VAs) To Handle Video Creation At A Fraction Of The Cost.</p>
          </div>
          <div className="feature-card">
            <div className="circle">4</div>
            <div className="circle-border"></div>
            <h3>Control Your Ads</h3>
            <p>Stop Wasting Time On Complex Tools And Endless Revisions. With VideoCrafter.io, You Can Create
              Professional, Eye-Catching Videos In Record Time.</p>
          </div>
        </div>
        <div className="portfolio-bottom-text for-m">
          <p className="for-marg-c" style={{ marginBottom: '40px' }}>We Were Fed Up Relying On Editors Who Couldn't Keep Up,
            So We Created VideoCrafter.io - A Tool That Puts You In Control.</p>
        </div>
        <div className="portfolio-border"></div>
      </div>
    </div>
  )
}

export default Beats
