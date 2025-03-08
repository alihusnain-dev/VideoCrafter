import React from 'react';
import Head from 'next/head';

const Tutorial = () => {
  return (
    <div>
      <Head>
        {/* Add any necessary meta tags, stylesheets, or scripts here */}
        <title>VideoCrafter Tutorial</title>
        <meta name="description" content="Learn how to use VideoCrafter.io to create high-converting video sales letters with ease." />
      </Head>

      <div className="tutorial-container" style={{ height: 'auto' }}>
        <h1 className="tutorial-title">
          <span className="title-bold">VideoCrafter</span>
          <span className="title-highlight">Tutorial</span>
        </h1>
        <p className="tutorial-description">
          In This Tutorial, We'll Walk You Through How To Use VideoCrafter.Io To Create
          High-Converting Video Sales Letters With Ease.
        </p>
        <div className="video-placeholder">
          <video
            id="tutorial-video"
            className="video-js vjs-default-skin vjs-big-play-centered"
            controls
            preload="auto"
            data-setup='{ "fluid" : true }'
            width="100%"
            poster="https://vlsmlsaker.s3.amazonaws.com/videos/home-video/intro-poster.png"
          >
            <source src="https://vlsmlsaker.s3.amazonaws.com/videos/home-video/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;