'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '/styles/download-scene.css';
import '/styles/music.css';
import Header from '@/components/Home/Header';
import ProgressBar from '@/components/Home/ProgressBar';

const DownloadPage = () => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    // Initialize Video.js and handle aspect ratio adjustments
    useEffect(() => {
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            playerRef.current = videojs(videoElement, {
                fluid: true,
                controls: true,
                preload: 'auto',
            });

            playerRef.current.ready(() => {
                playerRef.current.on('loadedmetadata', () => {
                    const video = playerRef.current.el().querySelector('video');
                    const aspectRatio = video.videoWidth / video.videoHeight;

                    const videoContainer = document.getElementById('video-container-box');
                    if (Math.abs(aspectRatio - 16 / 9) < 0.01) {
                        videoContainer.style.width = '500px';
                    } else if (Math.abs(aspectRatio - 9 / 16) < 0.01) {
                        videoContainer.style.width = '350px';
                    }
                });
            });
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    return (
        <div>
            <Header />
            <ProgressBar />
            <div className="down-container">
                <div className="down-sub-container">
                    <a href="/background-music" className="go-to-change">
                        <span style={{ lineHeight: '24px' }}>Go Back To Change Background Music</span>
                    </a>
                    <div>
                        <span className="successfully-text">Your Video Has Been Generated Successfully</span>
                    </div>
                    <div id="video-container-box">
                        <div id="videoPreviewContainer">
                            <video
                                ref={videoRef}
                                id="download-video"
                                className="video-js vjs-default-skin vjs-big-play-centered"
                                controls
                                preload="auto"
                            >
                                <source
                                    src="https://vlsmlsaker.s3.amazonaws.com/generated_watermarked_video/watermarked_output_jPqrp-370.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <Link href="/manage/manage-video" className="draft">
                        <span className="draft-heading">Save as Draft</span>
                    </Link>
                    <a
                        id="downloadButton"
                        href="/text/media/generated_final_video/final_370_1740501973.mp4/370/"
                        download
                        className="download-link"
                    >
                        <img src="/images/download-icon.svg" alt="Download Icon" />
                        <span id="download_text">Download</span>
                    </a>
                    <p className="watermark">
                        *Please Note That When You Click Download, Watermark Will Be Removed
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DownloadPage;