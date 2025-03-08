import React from 'react';
import Link from 'next/link'; // Import Link for client-side navigation

const Banner = () => {
  return (
    <div>
      <div className="top"> {/* Use className for JSX */}
        <div className="typography">
          <h1 className="h1hero">
            Create <span className="highlight"> High-Converting Video Ads </span>Within An Hour – No
            Video Editor Required
          </h1>

          <p className="phero">
            Why leave your ad performance in someone else’s hands when you can do it yourself?<br />
            Introducing VideoCrafter.io – the fastest, easiest way to create scroll-stopping video ads <br />
            for Facebook, Instagram, YouTube, and TikTok – without needing a video editor.
          </p>
        </div>

        <div className="heroButton">
          <img
            src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/Arrow.svg"
            alt="arrow"
            className="arrow"
          />
          {/* Use Link component for client-side routing */}
          <Link href="#pricing" passHref>
            <div className="getStarted" id="heroButton">
              Get Started
              <img
                src="https://vlsmlsaker.s3.amazonaws.com/assets/icons/arrow-right.svg"
                alt="arrow-right"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
