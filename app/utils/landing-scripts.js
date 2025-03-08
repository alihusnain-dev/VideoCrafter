// app/utils/landing-scripts.js
import videojs from 'video.js';
import 'video.js/dist/video-js.css'; // Import video.js styles

export const handlePreloader = () => {
  const loader = document.getElementById('preloader');

  window.addEventListener('load', () => {
    loader.style.display = 'none';
  });
};

export const initializeVideoJs = () => {
  if (typeof window !== 'undefined') {
    const videoIds = [
      'youtube-video-1', 'youtube-video-2', 'youtube-video-3',
      'facebook-video-1', 'facebook-video-2', 'facebook-video-3',
      'tiktok-video-1', 'tiktok-video-2',
      'intro-video',
      'step-video-1', 'step-video-2', 'step-video-3',
      'step-video-4', 'step-video-5', 'step-video-6',
      'tutorial-video'
    ];

    videoIds.forEach((videoId) => {
      const videoElement = document.getElementById(videoId);
      if (videoElement) {
        videojs(videoElement, {
          autoplay: true, // Optional: set autoplay if needed
          controls: true, // Optional: enable controls
          preload: 'auto' // Optional: preload the video
        });
      }
    });
  }
};

export const toggleMenu = () => {
  const topbar = document.getElementById('topbar');
  const hamburger = document.getElementById('hamburger');

  const open = topbar.style.top === '0px';

  if (open) {
    topbar.style.top = '-497px';
    hamburger.src = '/assets/icons/Hamburger.svg';
  } else {
    topbar.style.top = '0';
    hamburger.src = '/assets/icons/x.svg';
  }
};

export const initializeSlider = () => {
  // Your slider initialization code goes here
};
