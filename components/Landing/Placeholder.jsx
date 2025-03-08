import React from 'react'
import '/styles/video-js.css'

const Placeholder = () => {
  return (
    <div>
      <div className="PlaceholderContainer">
        <div className="intro-container">
          <video
            id="intro-video"
            className="video-js vjs-default-skin vjs-big-play-centered"
            controls
            preload="auto"
            data-setup='{ "fluid" : true }'
            width="100%"
            poster="https://vlsmlsaker.s3.amazonaws.com/videos/home-video/intro-poster.png"
          >
            <source src="https://vlsmlsaker.s3.amazonaws.com/videos/home-video/intro.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Placeholder
