import React from 'react'

const Commissions = () => {
  return (
    <div>
      <div id="earning" className="earning-section">
    <h1 className="earning-title">
      Become a VideoCrafter.io Affiliate And
      <br />
      Earn 30% Recurring Commissions!
    </h1>

    <p className="earning-paragraph">
      Join the VideoCrafter.io affiliate program and start earning 30% recurring commissions on every customer you
      refer.
      Build a steady stream of passive income by helping others create high-converting
      Videos without relying on expensive editors!
    </p>

    <div className="cards-container">
      <div className="card">
        <span className="number">1</span>
        <p className="title">Sign Up</p>
        <p className="text">
          Click the sign-up button below to join our affiliate program and start earning commissions!
        </p>
      </div>

      <div className="card">
        <span className="number">2</span>
        <p className="title">Share Link</p>
        <p className="text">
          Promote VideoCrafter.io via your blog, website, or social media.
        </p>
      </div>

      <div className="card">
        <span className="number">3</span>
        <p className="title">Earn Commissions</p>
        <p className="text">
          Earn 30% of every payment made by your referred customers for as long as they stay with us.
        </p>
      </div>
    </div>
    <button>Sign Up Now</button>
  </div>
    </div>
  )
}

export default Commissions
