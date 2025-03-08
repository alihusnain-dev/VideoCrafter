import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Work = () => {
  return (
    <div>
        {/* Font Awesome CDN Link */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      <div className="howitworks" id="HowItWorks">
        {/* Static images */}
        <Image
          src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg"
          alt=""
          width={100}
          height={100}
          className=""
        />
        <Image
          src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg"
          alt=""
          width={100}
          height={100}
          className=""
        />
        <Image
          src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg"
          alt=""
          width={100}
          height={100}
          className=""
        />
        <Image
          src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg"
          alt=""
          width={100}
          height={100}
          className=""
        />
        <Image
          src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg"
          alt=""
          width={100}
          height={100}
          className=""
        />

        {/* Heading */}
        <div className="hiw-heading-text">
          How <span className="highlight">VideoCrafter<span style={{ fontSize: '16px' }}>.io</span></span>
          <span style={{ color: '#000000' }} className="workk"> Works:</span>
        </div>

        {/* Steps Container */}
        <div className="hiw-container">
          {/* Step 1 */}
          <div className="hiw-element">
            <div className="hiw-element-text-container">
              <div className="hiw-element-heading">1. Pick Video Dimensions:</div>
              <div className="hiw-element-text">
                <i className="fa-solid fa-check" style={{ marginRight: '10px' }}></i>
                Select the format that fits your platform:
              </div>
              <div className="dimensions-container">
                <div className="aspect-box">1:1</div>
                <div className="aspect-box">4:5</div>
                <div className="aspect-box">16:9</div>
                <div className="aspect-box tall">9:16</div>
              </div>
            </div>
            <div className="hiw-element-placeholder">
              <video
                id="step-video-1"
                className="video-js vjs-default-skin vjs-big-play-centered"
                controls
                preload="auto"
                data-setup='{ "fluid" : true }'
                width="100%"
              >
                <source src="https://vlsmlsaker.s3.amazonaws.com/videos/home-video/steps/step-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="sep-border"></div>
          </div>

          {/* Step 2 */}
          <div className="hiw-element">
            <div className="hiw-element-text-container">
              <div className="hiw-element-heading">2. Add AI Voiceover:</div>
              <div className="hiw-element-text">
                <i className="fa-solid fa-check" style={{ marginRight: '10px' }}></i>
                Paste your API key and voice ID, and let AI create realistic, human-like voiceovers—no robotic
                tones here.
              </div>
            </div>
            <div className="hiw-element-placeholder">
              <video
                id="step-video-2"
                className="video-js vjs-default-skin vjs-big-play-centered"
                controls
                preload="auto"
                data-setup='{ "fluid" : true }'
                width="100%"
              >
                <source src="https://vlsmlsaker.s3.amazonaws.com/videos/home-video/steps/step-2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="sep-border"></div>
          </div>

          {/* Step 3 */}
          <div className="hiw-element">
            <div className="hiw-element-text-container">
              <div className="hiw-element-heading">3. Upload Your Script:</div>
              <div className="hiw-element-text">
                <i className="fa-solid fa-check" style={{ marginRight: '10px' }}></i>
                Simply upload your script, then highlight the words you want to pair with video clips.
              </div>
            </div>
            <div className="hiw-element-placeholder">
              <video
                id="step-video-3"
                className="video-js vjs-default-skin vjs-big-play-centered"
                controls
                preload="auto"
                data-setup='{ "fluid" : true }'
                width="100%"
              >
                <source src="https://vlsmlsaker.s3.amazonaws.com/videos/home-video/steps/step-3.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="sep-border"></div>
          </div>

          {/* Step 4 */}
          <div className="hiw-element">
            <div className="hiw-element-text-container">
              <div className="hiw-element-heading">4. Build Your Asset Library:</div>
              <div className="hiw-element-text">
                <i className="fa-solid fa-check" style={{ marginRight: '10px' }}></i>
                Organize your clips into folders for easy reuse across multiple projects.
              </div>
            </div>
            <div className="hiw-element-placeholder">
              <video
                id="step-video-4"
                className="video-js vjs-default-skin vjs-big-play-centered"
                controls
                preload="auto"
                data-setup='{ "fluid" : true }'
                width="100%"
              >
                <source src="https://vlsmlsaker.s3.amazonaws.com/videos/home-video/steps/step-4.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="sep-border"></div>
          </div>

          {/* Step 5 */}
          <div className="hiw-element">
            <div className="hiw-element-text-container">
              <div className="hiw-element-heading">5. Match Clips To Script:</div>
              <div className="hiw-element-text">
                <i className="fa-solid fa-check" style={{ marginRight: '10px' }}></i>
                Highlight text, select a clip, and let VideoCrafter handle cropping, syncing, and alignment.
              </div>
            </div>
            <div className="hiw-element-placeholder">
              <video
                id="step-video-5"
                className="video-js vjs-default-skin vjs-big-play-centered"
                controls
                preload="auto"
                data-setup='{ "fluid" : true }'
                width="100%"
              >
                <source src="https://vlsmlsaker.s3.amazonaws.com/videos/home-video/steps/step-5.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="sep-border"></div>
          </div>

          {/* Step 6 */}
          <div className="hiw-element">
            <div className="hiw-element-text-container">
              <div className="hiw-element-heading">6. Add Background Music:</div>
              <div className="hiw-element-text">
                <i className="fa-solid fa-check" style={{ marginRight: '10px' }}></i>
                Upload your favorite MP3 tracks, set start/end points, and adjust volume for the perfect vibe.
              </div>
            </div>
            <div className="hiw-element-placeholder">
              <video
                id="step-video-6"
                className="video-js vjs-default-skin vjs-big-play-centered"
                controls
                preload="auto"
                data-setup='{ "fluid" : true }'
                width="100%"
              >
                <source src="https://vlsmlsaker.s3.amazonaws.com/videos/home-video/steps/step-6.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;