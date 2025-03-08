import React from 'react';

const Built = () => {
  return (
    <div>
      <div className="portfolio" id="Portfolio">
        <div className="portfoliotext mtg">
          <h2 className="for-marg">
            Why We Built
            <br />
            <span className="highlight">VideoCrafter.io</span>
          </h2>
          <p className="highlight-p for-margg">We Know How Frustrating It Can Be To Create High-Conversion Video Ads.</p>
          <p className="highlight-p for-margin">Here's Why</p>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-box">
            <div className="portfolio-text">
              <div className="portfolio-head">
                <h1>1</h1>
                <div className="border"></div>
              </div>
              <div className="sub-text">
                <h1>Delays Are Costly</h1>
                <p>
                  Waiting On Video Editors Can Take Days (Sometimes Weeks) - Slowing Down Your Campaigns And
                  Hurting Your Bottom Line.
                </p>
              </div>
            </div>
          </div>

          <div className="portfolio-box">
            <div className="portfolio-text">
              <div className="portfolio-head">
                <h1>2</h1>
                <div className="border"></div>
              </div>
              <div className="sub-text">
                <h1>Missed Deadlines Hurt</h1>
                <p>
                  Editors often disappear mid-project, leaving you scrambling for solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="portfolio-box">
            <div className="portfolio-text">
              <div className="portfolio-head">
                <h1>3</h1>
                <div className="border"></div>
              </div>
              <div className="sub-text">
                <h1>Costs Add Up Fast</h1>
                <p>
                  Hiring professionals for every ad is expensive – and revision fees only make it worse.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-bottom-text">
          <p>We were fed up relying on editors who couldn’t keep up, so we created VideoCrafter.io – a tool that puts
            you in control.</p>
        </div>
      </div>
    </div>
  );
};

export default Built;