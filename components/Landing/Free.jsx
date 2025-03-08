import React from 'react'

const Free = () => {
  return (
    <div>
      <div className="cta" id="cta">
        <img src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg" alt="circle 1" className="cta-circle cc1" />
        <img src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg" alt="circle 2" className="cta-circle cc2" />
        <img src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg" alt="circle 3" className="cta-circle cc3" />
        <img src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg" alt="circle 4" className="cta-circle cc1" />
        <img src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg" alt="circle 5" className="cta-circle cc4" />
        <img src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg" alt="circle 6" className="cta-circle cc5" />
        <img src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg" alt="circle 7" className="cta-circle cc6" />
        <img src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg" alt="circle 8" className="cta-circle cc7" />
        <img src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg" alt="circle 9" className="cta-circle cc8" />

        <div className="cta-content-wrapper for-disp">
          <div className="cta-content">
            <span className="cta-text">
              Try VideoCrafter.io FREE
              <br />
              No Credit Card Required
              <br />
            </span>
            <a href="#pricing" className="cta-button">Sign Up for Free</a>
          </div>
          <p style={{ textAlign: 'left' }}>
            Get hands-on with VideoCrafter.io and experience the speed and 
            <br />
            simplicity for yourself. Stop waiting. Start creating.
          </p>
        </div>

        <div className="cta-main" style={{ backgroundColor: 'white', zIndex: 100 }}>
          <div className="cta-box">
            <h1>Try VideoCrafter.io FREE<br />No Credit Card Required</h1>
            <p style={{ margin: '0 auto' }}>
              Get hands-on with VideoCrafter.io and experience the speed and simplicity for yourself. Stop waiting.
              Start creating.
            </p>
          </div>
          <button className="cta-button">Get VideoCrafter Now</button>
        </div>
      </div>
    </div>
  )
}

export default Free
