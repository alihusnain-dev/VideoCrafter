'use client'; // Add this for Next.js client-side component

import React, { useState, useEffect } from 'react';
import 'video.js/dist/video-js.css'; // Import video.js styles

const Story = () => {
  // State for each slider's current index
  const [tiktokIndex, setTiktokIndex] = useState(0);
  const [facebookIndex, setFacebookIndex] = useState(0);
  const [youtubeIndex, setYoutubeIndex] = useState(0);

  // Video data arrays
  const tiktokVideos = [
    { src: 'https://vlsmlsaker.s3.amazonaws.com/videos/tiktok/tiktok1.mp4', poster: 'https://vlsmlsaker.s3.amazonaws.com/videos/tiktok/snap/tk-1.png' },
    { src: 'https://vlsmlsaker.s3.amazonaws.com/videos/tiktok/tiktok1.mp4', poster: 'https://vlsmlsaker.s3.amazonaws.com/videos/tiktok/snap/tk-1.png' },
    { src: 'https://vlsmlsaker.s3.amazonaws.com/videos/tiktok/tiktok1.mp4', poster: 'https://vlsmlsaker.s3.amazonaws.com/videos/tiktok/snap/tk-1.png' },
  ];

  const facebookVideos = [
    { src: 'https://vlsmlsaker.s3.amazonaws.com/videos/facebook/facebook1.mp4', poster: 'https://vlsmlsaker.s3.amazonaws.com/videos/facebook/snap/fb-1.png' },
    { src: 'https://vlsmlsaker.s3.amazonaws.com/videos/facebook/facebook1.mp4', poster: 'https://vlsmlsaker.s3.amazonaws.com/videos/facebook/snap/fb-1.png' },
    { src: 'https://vlsmlsaker.s3.amazonaws.com/videos/facebook/facebook1.mp4', poster: 'https://vlsmlsaker.s3.amazonaws.com/videos/facebook/snap/fb-1.png' },
  ];

  const youtubeVideos = [
    { src: 'https://vlsmlsaker.s3.amazonaws.com/videos/youtube/youtube1.mp4', poster: 'https://vlsmlsaker.s3.amazonaws.com/videos/youtube/snap/yt-1.png' },
    { src: 'https://vlsmlsaker.s3.amazonaws.com/videos/youtube/youtube1.mp4', poster: 'https://vlsmlsaker.s3.amazonaws.com/videos/youtube/snap/yt-1.png' },
    { src: 'https://vlsmlsaker.s3.amazonaws.com/videos/youtube/youtube1.mp4', poster: 'https://vlsmlsaker.s3.amazonaws.com/videos/youtube/snap/yt-1.png' },
  ];

  // Slider navigation functions
  const handleNext = (currentIndex, setIndex, arrayLength) => {
    setIndex((prev) => (prev + 1) % arrayLength); // Loop back to start
  };

  const handlePrev = (currentIndex, setIndex, arrayLength) => {
    setIndex((prev) => (prev - 1 + arrayLength) % arrayLength); // Loop to end
  };

  // Slider component
  const Slider = ({ title, videos, currentIndex, setIndex, className }) => (
    <div className={`mobi-slider ${className}`}>
      <h2 className="subtitle mobile-sub-head">{title}</h2>
      <div className="slider">
        <button 
          className="prev" 
          onClick={() => handlePrev(currentIndex, setIndex, videos.length)}
        >
          &lt;
        </button>
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {videos.map((video, idx) => (
            <div className="slide" key={idx}>
              <div className="Placeholder-mob">
                <video
                  className={`video-js vjs-default-skin vjs-big-play-centered ${className}-video`}
                  controls
                  preload="auto"
                  width="100%"
                  poster={video.poster}
                  data-setup='{ "fluid": true }'
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
        <button 
          className="next" 
          onClick={() => handleNext(currentIndex, setIndex, videos.length)}
        >
          &gt;
        </button>
        <div className="slider-dots">
          {videos.map((_, idx) => (
            <span 
              key={idx} 
              className={`dot ${currentIndex === idx ? 'active' : ''}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="portfolio" id="Portfolio">
        <div className="portfoliotext">
          <h2>
            See What
            <br />
            <span className="highlight">VideoCrafter.io</span> Has Done
          </h2>
        </div>

        {/* Desktop Grid Layout */}
        <div className="grid">
          <h2 className="subtitle">TikTok Ad Examples</h2>
          <div className="grid-container">
            {tiktokVideos.map((video, idx) => (
              <div className="grid-item" key={idx}>
                <video 
                  src={video.src} 
                  className="tiktok-video" 
                  controls 
                />
              </div>
            ))}
          </div>

          <h2 className="subtitle">Facebook/Instagram Ad Examples</h2>
          <div className="grid-container">
            {facebookVideos.map((video, idx) => (
              <div className="grid-item" key={idx}>
                <video 
                  src={video.src} 
                  className="facebook-video" 
                  controls 
                />
              </div>
            ))}
          </div>

          <h2 className="subtitle">YouTube Ad Examples</h2>
          <div className="grid-container">
            {youtubeVideos.map((video, idx) => (
              <div className="grid-item" key={idx}>
                <video 
                  src={video.src} 
                  className="youtube-video" 
                  controls 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Sliders */}
        <Slider 
          title="TikTok Ad Examples" 
          videos={tiktokVideos} 
          currentIndex={tiktokIndex} 
          setIndex={setTiktokIndex} 
          className="tiktok" 
        />
        <Slider 
          title="Facebook Ad Examples" 
          videos={facebookVideos} 
          currentIndex={facebookIndex} 
          setIndex={setFacebookIndex} 
          className="facebook" 
        />
        <Slider 
          title="YouTube Ad Examples" 
          videos={youtubeVideos} 
          currentIndex={youtubeIndex} 
          setIndex={setYoutubeIndex} 
          className="youtube" 
        />
      </div>
    </div>
  );
};

export default Story;