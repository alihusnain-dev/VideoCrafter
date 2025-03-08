import Link from 'next/link'
import React from 'react'

const Plans = () => {
  return (
    <div>
      <div className="pricing" id="pricing">
        <div className="tutorial-border"></div>
        <div className="top">
          <p className="ptop-text">Pricing:</p>
          <p className="ptop-text-mobile">Plans that <span className="highlight">scale</span> with business</p>

          <p className="ptop-p">Simple. Transparent. Powerful.</p>
          <p className="ptop-p-mobile">
            Think about how much you’re currently paying your video editor. With VSLMaker.io, you can create VSLs in minutes, saving both time and money.
          </p>
        </div>

        <div className="middle">
          <div className="p-cards-grid">
            <div className="p-cards-grid-container">
              <div className="p-cards-grid-item">
                <span className="highlight g-head g-head-margin">Free Trial Plan</span>
                <div className="price">
                  <span><span className="bold-size">Free</span></span>
                  <br />
                  <span className="price-promo">&nbsp;</span>
                  <p className="under-free" style={{ marginBottom: '0px' }}>Test The Waters Before You Commit.</p>
                </div>

                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Create 1 Video Creative</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Upload and Match Video Clips</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">No Credit Card Required</span>
                </div>

                <Link href="/accounts/register/signup/" className="p-button">Get Started</Link>
              </div>

              <div className="p-cards-grid-item mid">
                <div className="mp">
                  <span className="highlight g-head">Growth Plan</span>
                  <span className="hype">Most Popular</span>
                </div>

                <div className="price">
                  <span><span className="bold-size">$497</span> <span className="font" style={{ color: 'rgba(0, 0, 0, 0.5)', fontWeight: 'bold' }}>/Month</span></span>
                  <br />
                  <span className="price-promo">Just $19.88 Per Video</span>
                </div>

                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Create up to 25 Videos Per Month</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Full Access to All Tools</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Upload and Match Video Clips</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Organize and Reuse Clips</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Background Music Control</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Priority Support</span>
                </div>

                <Link href="/accounts/register/after-payment" className="p-button">Get Started</Link>
              </div>

              <div className="p-cards-grid-item">
                <span className="highlight g-head g-head-margin">Pro Plan</span>
                <div className="price">
                  <span><span className="bold-size">$997</span> <span className="font" style={{ color: 'rgba(0, 0, 0, 0.5)', fontWeight: 'bold' }}>/Month</span></span>
                  <br />
                  <span className="price-promo">Just $16.62 Per Video</span>
                </div>

                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Create Up To 60 Videos Per Month</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Everything in Growth Plan</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Upload and Match Video Clips</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Organize and Reuse Clips</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Background Music Control</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Advanced Clip Management</span>
                </div>
                <div className="benefits">
                  <img src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/check.svg" alt="check icon" />
                  <span className="benefits-text">Dedicated Support</span>
                </div>

                <Link href="/accounts/register/after-payment" className="p-button">Get Started</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans
