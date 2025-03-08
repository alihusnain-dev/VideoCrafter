"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Home/Header";
import ProgressBar from "@/components/Home/ProgressBar";
import "/styles/bg-music-selection.css";

const Page = () => {
    const [mp3Templates, setMp3Templates] = useState([
        { id: 1, file: null, startTime: "00:00", endTime: "00:00", volume: 50 },
        { id: 2, file: null, startTime: "00:00", endTime: "00:00", volume: 50 },
    ]);

    const handleAddMp3 = () => {
        const newId = mp3Templates.length + 1;
        setMp3Templates([
            ...mp3Templates,
            {
                id: newId,
                file: null,
                startTime: "00:00",
                endTime: "00:00",
                volume: 50,
            },
        ]);
    };

    const handleDeleteMp3 = (id) => {
        if (mp3Templates.length > 1) {
            const updatedTemplates = mp3Templates
                .filter((template) => template.id !== id)
                .map((template, index) => ({
                    ...template,
                    id: index + 1,
                }));
            setMp3Templates(updatedTemplates);
        }
    };

    const handleInputChange = (id, field, value) => {
        const updatedTemplates = mp3Templates.map((template) =>
            template.id === id ? { ...template, [field]: value } : template
        );
        setMp3Templates(updatedTemplates);
    };

    const handleFileChange = (id, event) => {
        const file = event.target.files[0];
        handleInputChange(id, "file", file);
    };

    return (
        <div className="bg">
            <Header />
            <ProgressBar />
            <div className="content bg-content ">
                <div className="bg-content-sub">
                    <div className="cont">
                        <div className="cont-sub">
                            <Link href="/scene" className="bg-button">
                                <span>Go Back To Change Scenes</span>
                            </Link>
                        </div>
                        <div className="bg-heading">
                            <span className="bg-heading-span">
                                Select Your Background Music
                            </span>
                        </div>
                    </div>
                    <div className="bg-video">
                        <div id="video-container-box">
                            <div id="videoPreviewContainer">
                                <video
                                    id="my-video"
                                    className="video-js vjs-default-skin vjs-big-play-centered"
                                    controls
                                    preload="auto"
                                    data-setup='{ "fluid": true }'
                                >
                                    <source
                                        src="https://vlsmlsaker.s3.amazonaws.com/generated_watermarked_video/watermarked_output_jPqrp-370.mp4"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                    <form
                        method="POST"
                        id="bg_form"
                        encType="multipart/form-data"
                    >
                        <div className="file-upload-container" id="targetDiv">
                            <input
                                type="hidden"
                                name="csrfmiddlewaretoken"
                                value=""
                            />
                            <div id="musicContainer">
                                <input
                                    type="hidden"
                                    name="purpose"
                                    value="new"
                                />

                                {mp3Templates.map((template) => (
                                    <div
                                        key={template.id}
                                        className="uploadmp3"
                                    >
                                        <div className="uploadmp3-sub">
                                            <div className="text">
                                                <span>
                                                    Upload MP3{" "}
                                                    <span>{template.id}</span>:
                                                </span>
                                            </div>
                                            {template.id !== 1 &&
                                                mp3Templates.length > 1 && (
                                                    <button
                                                        type="button"
                                                        className="delete"
                                                        onClick={() =>
                                                            handleDeleteMp3(
                                                                template.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                )}
                                        </div>
                                        <div className="choose-file-sty">
                                            <img
                                                src="/images/upload-icon.svg"
                                                alt=""
                                            />
                                            <input
                                                className="fileInput"
                                                name={`bg_music_${template.id}`}
                                                type="file"
                                                accept="audio/mpeg"
                                                onChange={(e) =>
                                                    handleFileChange(
                                                        template.id,
                                                        e
                                                    )
                                                }
                                            />
                                            <div className="output">
                                                {template.file
                                                    ? template.file.name
                                                    : "Choose File"}
                                            </div>
                                        </div>
                                        <div className="text">
                                            <span>
                                                What Second Should This MP3 Play
                                                From?{" "}
                                                <span className="text-span">
                                                    In Minutes
                                                </span>
                                            </span>
                                        </div>
                                        <div className="start-main-div">
                                            <div className="start-sub-div">
                                                <span className="text start-text">
                                                    Start:
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="00:00"
                                                    className="time startTime"
                                                    name={`from_when_${template.id}`}
                                                    value={template.startTime}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            template.id,
                                                            "startTime",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="start-sub-div">
                                                <span className="text start-text">
                                                    End:
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="00:00"
                                                    className="time endTime"
                                                    name={`to_when_${template.id}`}
                                                    value={template.endTime}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            template.id,
                                                            "endTime",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="Font-Size-text">
                                                <div className="mp3-volume">
                                                    MP3 {template.id} Volume:
                                                </div>
                                                <span>{template.volume}%</span>
                                            </div>
                                            <div className="Font-Size-Slider">
                                                <input
                                                    type="range"
                                                    name={`bg_level_${template.id}`}
                                                    min="0"
                                                    max="100"
                                                    value={template.volume}
                                                    className="slider"
                                                    onChange={(e) => {
                                                        handleInputChange(
                                                            template.id,
                                                            "volume",
                                                            parseInt(
                                                                e.target.value
                                                            )
                                                        );
                                                        e.target.style.setProperty(
                                                            "--value",
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    id="addMusicBtn"
                                    className="button"
                                    onClick={handleAddMp3}
                                >
                                    <img src="/images/add.svg" alt="" />
                                    Upload Another MP3
                                </button>
                                <div id="proceed">
                                    <a
                                        href="/download-scene"
                                        className="button button-proceed"
                                    >
                                        Proceed Without Background Music
                                        <img src="/images/arrow.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
