// app/page.js
"use client";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Script from "next/script";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "/styles/style.css";
import "/styles/scene-style.css";
import "/styles/scene.css";
import "/styles/main-scenes.css";
import "/styles/add-scene-style.css";
import Header from "@/components/Home/Header";
import ProgressBar from "@/components/Home/ProgressBar";
import Link from "next/link";

export default function Home() {
    const [tutorialModalOpen, setTutorialModalOpen] = useState(false);
    const [uploadModalOpen, setUploadModalOpen] = useState(false);
    const [scriptFile, setScriptFile] = useState(null);
    const [scriptFileName, setScriptFileName] = useState("No file chosen");
    const [folderFiles, setFolderFiles] = useState(null);
    const [folderFileName, setFolderFileName] = useState("No folder chosen");
    const [slides, setSlides] = useState([
        {
            id: 1,
            subtitle: "Subtitle 1",
            text: "",
            originalText: "",
            isEditing: true,
        },
    ]);
    const [slideCount, setSlideCount] = useState(1);
    const [isPfpDropdownOpen, setIsPfpDropdownOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [selectedSlideId, setSelectedSlideId] = useState(null);
    const [selectedText, setSelectedText] = useState("");
    const tableRef = useRef(null);

    useEffect(() => {
        setIsMounted(true);
        if (tableRef.current) {
            tableRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const togglePfpDropdown = () => {
        setIsPfpDropdownOpen((prev) => !prev);
    };

    const handleScriptFileChange = async (event) => {
        const file = event.target.files[0];
        setScriptFile(file);
        if (file) {
            const text = await file.text();
            if (text.length <= 5000) {
                setScriptFileName(`${file.name.slice(0, 15)}`);
            } else {
                alert("The text file exceeds the 5000-character limit!");
                setScriptFileName("No file chosen");
                setScriptFile(null);
                event.target.value = "";
            }
        } else {
            setScriptFileName("No file chosen");
        }
    };

    const loadScript = async () => {
        if (scriptFile) {
            const text = await scriptFile.text();
            const lines = text.split("\n").filter((line) => line.trim() !== "");
            const newSlides = lines.map((line, index) => ({
                id: index + 1,
                subtitle: `Subtitle ${index + 1}`,
                text: line.trim(),
                originalText: line.trim(),
                isEditing: false,
            }));
            setSlides(newSlides);
            setSlideCount(newSlides.length);
            if (tableRef.current) {
                tableRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleFolderFileChange = (event) => {
        const files = event.target.files;
        setFolderFiles(files);
        const folderName = files?.[0]?.webkitRelativePath.split("/")[0];
        if (folderName) {
            setFolderFileName(folderName.slice(0, 15));
        } else {
            setFolderFileName("No folder chosen");
        }
    };

    const toggleContent = (id, headerElement) => {
        const content = document.getElementById(id);
        const span = headerElement.querySelector("span");
        const otherSections = document.querySelectorAll(".section");
        otherSections.forEach((section) => {
            const header = section.querySelector(".section-header");
            header.style.backgroundColor = "#fff";
            header.style.color = "#6c25be";
        });
        content.classList.toggle("open");
        if (content.classList.contains("open")) {
            span.classList.add("rotate");
            headerElement.style.backgroundColor = "#6c25be";
            headerElement.style.color = "#fff";
        } else {
            span.classList.remove("rotate");
        }
    };

    const openModal = (modalId) => {
        if (modalId === "tutorial-video") setTutorialModalOpen(true);
        else setUploadModalOpen(true);
    };

    const closeModal = () => {
        setTutorialModalOpen(false);
        setUploadModalOpen(false);
    };

    const addSlide = (e) => {
        e.preventDefault();
        const newSlide = {
            id: slideCount + 1,
            subtitle: `Subtitle ${slideCount + 1}`,
            text: "",
            originalText: "",
            isEditing: true,
        };
        setSlides([...slides, newSlide]);
        setSlideCount(slideCount + 1);
    };

    const deleteSlide = (id) => {
        const updatedSlides = slides
            .filter((slide) => slide.id !== id)
            .map((slide, index) => ({
                ...slide,
                subtitle: `Subtitle ${index + 1}`,
            }));
        setSlides(updatedSlides);
        setSlideCount(updatedSlides.length);
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const reorderedSlides = Array.from(slides);
        const [movedSlide] = reorderedSlides.splice(result.source.index, 1);
        reorderedSlides.splice(result.destination.index, 0, movedSlide);
        const updatedSlides = reorderedSlides.map((slide, index) => ({
            ...slide,
            subtitle: `Subtitle ${index + 1}`,
        }));
        setSlides(updatedSlides);
    };

    const handleTextSelection = (slideId) => {
        const selection = window.getSelection();
        const selected = selection.toString().trim();
        if (selected) {
            setSelectedSlideId(slideId);
            setSelectedText(selected);
            setPopupOpen(true);
        }
    };

    const handlePopupSubmit = (shouldHighlight) => {
        if (shouldHighlight) {
            const updatedSlides = slides.map((slide) =>
                slide.id === selectedSlideId
                    ? {
                          ...slide,
                          text: slide.text.replace(
                              selectedText,
                              `<mark className="handlePopupSubmit">${selectedText}</mark>`
                          ),
                          isEditing: false,
                      }
                    : slide
            );
            setSlides(updatedSlides);
        }
        setPopupOpen(false);
    };

    const toggleEdit = (slideId) => {
        const updatedSlides = slides.map((slide) =>
            slide.id === slideId
                ? { ...slide, isEditing: !slide.isEditing }
                : slide
        );
        setSlides(updatedSlides);
    };

    const handleKeyPress = (e, slideId) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const textarea = e.target;
            const updatedSlides = slides.map((slide) =>
                slide.id === slideId
                    ? { ...slide, text: textarea.value, isEditing: false }
                    : slide
            );
            setSlides(updatedSlides);
            textarea.blur();
        }
    };

    const handleUndo = (slideId) => {
        if (confirm("Are You Sure You Want To Reset This Sentence?")) {
            const updatedSlides = slides.map((slide) =>
                slide.id === slideId
                    ? { ...slide, text: slide.originalText, isEditing: false }
                    : slide
            );
            setSlides(updatedSlides);
        }
    };

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>VideoCrafter.io</title>
                <link
                    rel="stylesheet"
                    href="https://vlsmlsaker.s3.amazonaws.com/css/style.css"
                />
                <link
                    rel="stylesheet"
                    href="https://vlsmlsaker.s3.amazonaws.com/sceneselection/style.css"
                />
                <link
                    rel="stylesheet"
                    href="https://vlsmlsaker.s3.amazonaws.com/sceneselection/scene.css"
                />
                <link rel="stylesheet" href="/temp.css" />
            </Head>
            <Header />
            <ProgressBar />
            <div className="body-container">
                <div id="pfp" onClick={togglePfpDropdown}></div>
                <div
                    id="pfpdropdown"
                    className={isPfpDropdownOpen ? "present" : "not-present"}
                ></div>

                <div className="card-container">
                    <div className="card">
                        <div className="card-header">
                            <div id="previousButton">
                                <Link href="/home">
                                    <img src="/images/back.svg" alt="Back" />
                                </Link>
                            </div>
                            <span className="card-header-span">
                                Upload Your Script
                            </span>
                            <h5></h5>
                        </div>
                        <div className="card-body">
                            <div className="Script-text-file-text">
                                <div className="Script-text-file-text-sub">
                                    <div className="script-text">
                                        Script Text File:
                                    </div>
                                    <div className="vh-parent">
                                        <div className="vh-child">
                                            <span className="text3">
                                                Please Make Sure Your Script Is
                                                On Txt File
                                            </span>
                                        </div>
                                        ?
                                    </div>
                                </div>
                                <a
                                    href="/text/media/logos/VideoCrafter.txt/"
                                    download=""
                                    className="download-btn"
                                    style={{ marginRight: "6px" }}
                                >
                                    Click Here To Download An Empty Template
                                </a>
                            </div>
                            <div className="Script-text-file-Upload">
                                <div className="script-upload-sub">
                                    <img
                                        src="/images/choose-icon.svg"
                                        alt="Choose file"
                                    />
                                    <span className="text2 choosefile-heading">
                                        Choose file
                                    </span>
                                    <input
                                        required
                                        type="file"
                                        id="fileUpload"
                                        accept=".txt"
                                        onChange={handleScriptFileChange}
                                    />
                                </div>
                                <div
                                    className="text2"
                                    id="fileName"
                                    style={{ color: "#00000080" }}
                                >
                                    {scriptFileName}
                                </div>
                            </div>
                            <div className="center-container">
                                <button
                                    id="scriptUploadButton"
                                    className="file-button"
                                    onClick={loadScript}
                                >
                                    Load Script
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className="card"
                        id="uploadCard"
                        style={{ position: "relative" }}
                    >
                        <div className="card-header">
                            <span className="card-header-span">
                                Upload To Your Asset Folder
                            </span>
                            <h5>
                                These Files Will be Saved In Your Asset Library
                                Which You Can Manage Through The Profile Icon
                                Above
                            </h5>
                        </div>
                        <div className="card-body upload">
                            <div className="Script-text-file-text">
                                <div className="upload-folder-heading">
                                    <div className="Script-text-file-text-sub">
                                        <div className="script-text">
                                            Upload Folder:
                                        </div>
                                        <div className="vh-parent">
                                            <div className="vh-child">
                                                <span className="text3">
                                                    Please Make Sure Your Script
                                                    Is On Txt File
                                                </span>
                                            </div>
                                            ?
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Script-text-file-Upload">
                                <div className="script-upload-sub">
                                    <img
                                        src="/images/choose-icon.svg"
                                        alt="Choose file"
                                    />
                                    <span className="text2 choosefile-heading">
                                        Choose file
                                    </span>
                                    <input
                                        id="fileInput"
                                        type="file"
                                        webkitdirectory="true"
                                        multiple
                                        onChange={handleFolderFileChange}
                                    />
                                </div>
                                <div
                                    className="text2"
                                    id="fileName2"
                                    style={{ color: "#00000080" }}
                                >
                                    {folderFileName}
                                </div>
                            </div>
                            <div id="centered-c" className="center-containered">
                                <div
                                    id="uploadStatus"
                                    style={{ textAlign: "center" }}
                                ></div>
                                <div
                                    id="progressWrapper"
                                    style={{ display: "none" }}
                                >
                                    <div id="progressBar"></div>
                                    <div id="percent"></div>
                                </div>
                                <button
                                    className="file-button"
                                    id="videoUploadButton"
                                >
                                    Upload and Process
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-container2">
                    <div className="section">
                        <div
                            className="section-header"
                            onClick={(e) =>
                                toggleContent("instructions", e.currentTarget)
                            }
                        >
                            Instructions <span>▶</span>
                        </div>
                        <div className="section-content" id="instructions">
                            <div
                                className="bor"
                                style={{ border: "1px solid #cccccc" }}
                            ></div>
                            <h3>Step 1: Upload Your Script</h3>
                            <p>
                                Each line of your script represents a subtitle
                                box in the video. For example:
                            </p>
                            <div className="highlight">
                                <p>
                                    If your script says, "Hello, my name is
                                    Steve," on the first line of your text file,
                                    the first subtitle box will display Hello,
                                    my name is Steve.
                                </p>
                            </div>
                            <h3>Step 2: Highlight And Assign Clips</h3>
                            <p className="highlight-words">Highlight words:</p>
                            <p>
                                Simply highlight the words in your script that
                                you want to match with a video clip and assign a
                                video clip.
                            </p>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    openModal("upload-video");
                                }}
                            >
                                Watch Video Tutorial
                            </a>
                        </div>
                    </div>

                    <div className="section">
                        <div
                            className="section-header"
                            onClick={(e) =>
                                toggleContent("tips", e.currentTarget)
                            }
                        >
                            How To Upload Files To The Asset Folder{" "}
                            <span>▶</span>
                        </div>
                        <div className="section-content" id="tips">
                            <div
                                className="bor"
                                style={{
                                    border: "1px solid #cccccc",
                                    marginBottom: "1rem",
                                }}
                            ></div>
                            <div
                                className="tips-background"
                                style={{
                                    backgroundColor: "#f0eeee",
                                    padding: "4px 20px 20px 20px",
                                    lineHeight: "162%",
                                }}
                            >
                                <h3>Step 1</h3>
                                <p>
                                    <strong>Create a main folder:</strong>
                                </p>
                                <p>
                                    On your computer, create one main folder
                                    (e.g., MyVideoAssets). This folder will
                                    contain all your subfolders and video clips.
                                </p>
                                <h4>Add Subfolders Inside The Main Folder:</h4>
                                <p>
                                    Within the main folder, create subfolders to
                                    categorize your videos. For example:
                                </p>
                                <ul>
                                    <li>Back Pain Clips</li>
                                    <li>Fitness Clips</li>
                                    <li>Testimonials</li>
                                </ul>
                                <h4>Add Video Files To Each Subfolder:</h4>
                                <p>
                                    Inside each subfolder, add the relevant
                                    video clips. For example:
                                </p>
                                <ul className="ul-cl">
                                    <li>
                                        Back Pain Clips{" "}
                                        <span style={{ color: "#333" }}></span>{" "}
                                        <span className="vid">
                                            Clip1.mp4, Clip2.mp4
                                        </span>
                                    </li>
                                    <li>
                                        Fitness Clips{" "}
                                        <span style={{ color: "#333" }}></span>{" "}
                                        <span className="vid">
                                            Workout1.mp4, Workout2.mp4
                                        </span>
                                    </li>
                                </ul>
                                <h3>Step 2</h3>
                                <p>
                                    <strong>Upload to VideoCrafter.io:</strong>
                                </p>
                                <ul>
                                    <li>
                                        Go to the "Upload To Your Asset Folder"
                                        section.
                                    </li>
                                    <li>
                                        Click "Choose File" and select the main
                                        folder (not individual subfolders).
                                    </li>
                                    <li>
                                        Click "Upload And Process" to start the
                                        upload.
                                    </li>
                                </ul>
                            </div>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    openModal("upload-video");
                                }}
                            >
                                Watch Video Tutorial
                            </a>
                        </div>
                    </div>

                    {tutorialModalOpen && (
                        <div
                            id="tutorial-modal"
                            className="modal"
                            style={{ display: "block" }}
                        >
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>
                                    ×
                                </span>
                                <iframe
                                    src="https://vlsmlsaker.s3.amazonaws.com/videos/youtube/youtube2.mp4"
                                    frameBorder="0"
                                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}

                    {uploadModalOpen && (
                        <div
                            id="upload-modal"
                            className="modal"
                            style={{ display: "block" }}
                        >
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>
                                    ×
                                </span>
                                <iframe
                                    src="https://vlsmlsaker.s3.amazonaws.com/videos/youtube/youtube2.mp4"
                                    frameBorder="0"
                                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className="lead-container lead-details"
                    style={{ maxWidth: "96%", margin: "0 auto" }}
                >
                    <DragDropContext onDragEnd={onDragEnd}>
                        <table
                            id="leadsTable"
                            className="lead-table"
                            style={{ width: "100%", display: "table" }}
                            ref={tableRef}
                        >
                            <thead>
                                <tr style={{ height: "fit-content" }}>
                                    <th
                                        className="slide-first"
                                        style={{ fontSize: "1.4rem" }}
                                    >
                                        Subtitle
                                    </th>
                                    <th style={{ fontSize: "1.4rem" }}>
                                        Subtitle Text
                                    </th>
                                    <th className="slide-last">Edit</th>
                                    <th className="slide-last">Undo</th>
                                    <th className="slide-last">Delete</th>
                                </tr>
                            </thead>
                            <Droppable droppableId="slides">
                                {(provided) => (
                                    <tbody
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {slides.map((slide, index) => (
                                            <Draggable
                                                key={slide.id}
                                                draggableId={String(slide.id)}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <tr
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        style={{
                                                            height: "5rem",
                                                            ...provided
                                                                .draggableProps
                                                                .style,
                                                        }}
                                                    >
                                                        <td
                                                            className="slide-first"
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                fontSize:
                                                                    "1.4rem",
                                                                position:
                                                                    "relative",
                                                            }}
                                                            title="Drag to move"
                                                        >
                                                            {slide.subtitle}
                                                        </td>
                                                        <td
                                                            id={`highlightable_${slide.id}`}
                                                            onMouseUp={() =>
                                                                handleTextSelection(
                                                                    slide.id
                                                                )
                                                            }
                                                        >
                                                            <div className="highlight-sub">
                                                                {slide.isEditing ? (
                                                                    <textarea
                                                                        className="textarea-class"
                                                                        id={`slide_text_${slide.id}`}
                                                                        name="slide_text"
                                                                        placeholder="Type Your Script Here"
                                                                        value={
                                                                            slide.text
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            const updatedSlides =
                                                                                slides.map(
                                                                                    (
                                                                                        s
                                                                                    ) =>
                                                                                        s.id ===
                                                                                        slide.id
                                                                                            ? {
                                                                                                  ...s,
                                                                                                  text: e
                                                                                                      .target
                                                                                                      .value,
                                                                                              }
                                                                                            : s
                                                                                );
                                                                            setSlides(
                                                                                updatedSlides
                                                                            );
                                                                        }}
                                                                        onMouseUp={() =>
                                                                            handleTextSelection(
                                                                                slide.id
                                                                            )
                                                                        }
                                                                        onKeyDown={(
                                                                            e
                                                                        ) =>
                                                                            handleKeyPress(
                                                                                e,
                                                                                slide.id
                                                                            )
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <span
                                                                        dangerouslySetInnerHTML={{
                                                                            __html:
                                                                                slide.text ||
                                                                                "",
                                                                        }}
                                                                    />
                                                                )}
                                                                <div
                                                                    // id="error-message_1"
                                                                    className="error-message"
                                                                    style={{
                                                                        display:
                                                                            "none",
                                                                    }}
                                                                >
                                                                    Assign Clips
                                                                    To All Of
                                                                    The
                                                                    Subtitle&nbsp;Text
                                                                </div>
                                                                <div
                                                                    className="error-message"
                                                                    style={{
                                                                        display:
                                                                            "none",
                                                                    }}
                                                                >
                                                                    Highlighting
                                                                    Must Start
                                                                    From The
                                                                    First
                                                                    Unassigned
                                                                    Word Of The
                                                                    Sentence.
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="slide-last">
                                                            <a
                                                                href="#"
                                                                className="above-del"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    toggleEdit(
                                                                        slide.id
                                                                    );
                                                                }}
                                                            >
                                                                <img
                                                                    src="/images/edit.svg"
                                                                    alt="Edit"
                                                                    style={{
                                                                        width: "1.5rem",
                                                                        height: "3rem",
                                                                        cursor: "pointer",
                                                                    }}
                                                                />
                                                            </a>
                                                        </td>
                                                        <td className="slide-last">
                                                            <a
                                                                href="#"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    handleUndo(
                                                                        slide.id
                                                                    );
                                                                }}
                                                                className="above-del"
                                                            >
                                                                <img
                                                                    src="/images/undo.svg"
                                                                    alt="Undo"
                                                                    style={{
                                                                        width: "1.2rem",
                                                                        height: "3rem",
                                                                        cursor: "pointer",
                                                                    }}
                                                                />
                                                            </a>
                                                        </td>
                                                        <td
                                                            className="slide-last"
                                                            id={`action_${slide.id}`}
                                                        >
                                                            <a
                                                                href="#"
                                                                className="delete-row-btn"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.preventDefault();
                                                                    deleteSlide(
                                                                        slide.id
                                                                    );
                                                                }}
                                                            >
                                                                <img
                                                                    src="https://leadeditor.s3.amazonaws.com/lead-maker/images/delete-icn.svg"
                                                                    alt="delete"
                                                                    style={{
                                                                        width: "1.5rem",
                                                                        height: "3rem",
                                                                        cursor: "pointer",
                                                                    }}
                                                                />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </tbody>
                                )}
                            </Droppable>
                        </table>
                    </DragDropContext>

                    <div className="add-new-sub">
                        <div className="d-flex justify-content-start">
                            <a
                                href="#"
                                id="createLeadBtn"
                                className="btn proceed-btn"
                                onClick={addSlide}
                            >
                                Add New Subtitle +
                            </a>
                        </div>
                    </div>

                    <input
                        type="number"
                        name="no_of_slides"
                        id="no_of_slides"
                        hidden
                        value={slideCount}
                    />

                    <div className="button-container">
                        <a
                            href="/background-music"
                            style={{ textDecoration: "none" }}
                        >
                            <button
                                type="button"
                                className="button-container-btn"
                            >
                                <span id="button-text">
                                    Proceed To Background Music Selection
                                </span>
                                <img src="/images/arrow.svg" alt="Arrow" />
                            </button>
                        </a>
                    </div>
                </div>

                {popupOpen && (
                    <PopupModal
                        selectedText={selectedText}
                        onClose={() => setPopupOpen(false)}
                        onSubmit={handlePopupSubmit}
                    />
                )}

                {isMounted && (
                    <>
                        <Script
                            src="https://code.jquery.com/jquery-3.6.0.min.js"
                            strategy="afterInteractive"
                        />
                        <Script
                            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
                            strategy="afterInteractive"
                        />
                        <Script
                            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
                            strategy="afterInteractive"
                        />
                        <Script
                            src="https://vlsmlsaker.s3.amazonaws.com/add_scene/script.js"
                            strategy="afterInteractive"
                        />
                    </>
                )}
            </div>
        </>
    );
}
function PopupModal({ selectedText, onClose, onSubmit }) {
    const [file, setFile] = useState(null);
    const [topic, setTopic] = useState("");
    const [videoClip, setVideoClip] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        document.getElementById("upload-text").textContent =
            e.target.files[0]?.name || "Choose File";
    };

    const clearFileInput = () => {
        setFile(null);
        document.getElementById("upload-text").textContent = "Choose File";
        document.getElementById("clear-file").style.display = "none";
    };

    const handleTopicChange = (e) => {
        setTopic(e.target.value);
        setVideoClip("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const shouldHighlight = file || (topic && videoClip); // Highlight only if file or topic+clip is selected
        onSubmit(shouldHighlight);
    };

    const handleClose = () => {
        onClose(); // Close without highlighting
    };

    return (
        <div className="popup-form popup-modal" style={{ display: "flex" }}>
            <div className="popup-container">
                <div className="close-btnx close-btn">
                    <button className="close-popup" onClick={handleClose}>
                        X
                    </button>
                </div>
                <div id="modal-cont">
                    <form
                        className="popup-content"
                        onSubmit={handleSubmit}
                        style={{
                            gridTemplateColumns: "0.7fr 1fr",
                            width: "100%",
                        }}
                    >
                        <br />
                        <input
                            type="hidden"
                            name="csrfmiddlewaretoken"
                            value="A5buGtEYdhFBwcSjly8DyqOl74FAQup1aN4GP3T3oXJ8TmIqNygPUvogqZ22B52d"
                            readOnly
                        />
                        <div id="submit-cont">
                            <div className="form-group">
                                <input
                                    id="slide_text"
                                    hidden
                                    name="slide_text"
                                    value={selectedText}
                                    readOnly
                                    className="form-input"
                                />
                            </div>
                            <input
                                id="clipId"
                                type="number"
                                hidden
                                name="clipId"
                                value="2298"
                                readOnly
                            />
                            <input
                                type="text"
                                hidden
                                id="remaining"
                                name="remaining"
                                value="starting with a tingling sensation in my back."
                                readOnly
                            />
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "0.7fr 1fr",
                                    borderRadius: "8px",
                                    border: "1px solid #00000080",
                                    overflow: "hidden",
                                }}
                                className="form-grid-cont"
                            >
                                <div className="grid-item title form-grid-item begin column-1">
                                    <span
                                        style={{
                                            height: "50px",
                                            alignItems: "center",
                                        }}
                                    >
                                        Upload Scene
                                    </span>
                                </div>
                                <div className="grid-item title form-grid-item end column-2">
                                    <span
                                        style={{
                                            height: "50px",
                                            alignItems: "center",
                                            marginLeft: "-18px",
                                        }}
                                    >
                                        Upload Scene From Assets Folder
                                    </span>
                                </div>
                                <div className="form-grid-item main-item">
                                    <div
                                        className="form-group"
                                        style={{ height: "100%" }}
                                    >
                                        <div className="upload-container">
                                            <label
                                                htmlFor="slide_file"
                                                className="upload-label"
                                            >
                                                <img
                                                    src="images/upload.svg"
                                                    alt=""
                                                />
                                                <span id="upload-text">
                                                    Choose File
                                                </span>
                                            </label>
                                            <i
                                                id="clear-file"
                                                style={{
                                                    display: file
                                                        ? "inline"
                                                        : "none",
                                                }}
                                                onClick={clearFileInput}
                                                className="ri-close-circle-line"
                                            ></i>
                                            <input
                                                type="file"
                                                id="slide_file"
                                                name="slide_file"
                                                className="upload-input"
                                                accept="video/*"
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                        <p id="currentFile">
                                            {file?.name || ""}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        borderLeft: "0.8px solid #864AF9",
                                    }}
                                    className="form-grid-item"
                                >
                                    <div className="form-group">
                                        <select
                                            id="selected_topic"
                                            name="selected_topic"
                                            className="form-select"
                                            value={topic}
                                            onChange={handleTopicChange}
                                        >
                                            <option value="">
                                                Select Topic
                                            </option>
                                            <option value="17">
                                                Male Thinking Clips
                                            </option>
                                            <option value="18">
                                                Male Crying Clips
                                            </option>
                                            <option value="19">
                                                Male Desperation Clips
                                            </option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            id="videoSelect"
                                            name="selected_video"
                                            className="form-select"
                                            value={videoClip}
                                            onChange={(e) =>
                                                setVideoClip(e.target.value)
                                            }
                                        >
                                            <option value="" disabled>
                                                Select A Video Clip
                                            </option>
                                            {topic && (
                                                <>
                                                    <option value="clip1">
                                                        Clip 1
                                                    </option>
                                                    <option value="clip2">
                                                        Clip 2
                                                    </option>
                                                </>
                                            )}
                                        </select>
                                        <p
                                            style={{
                                                color: "red",
                                                fontSize: "13px",
                                            }}
                                            id="error-slide"
                                        ></p>
                                    </div>
                                    <input
                                        type="number"
                                        hidden
                                        id="is_tiktok"
                                        name="is_tiktok"
                                        value="0"
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            style={{ alignItems: "end" }}
                            className="form-group"
                        >
                            <button
                                type="submit"
                                id="submit-clip"
                                className="submit-btn"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
