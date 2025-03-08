import React from "react";
import ManageHeader from "@/components/Home/ManageHeader";
import "/styles/manage-asset-library.css";

const Page = () => {
    return (
        <div>
            <ManageHeader/>
            <div className="loader" style={{ display: "none" }}></div>
            <main>
                <div className="content">
                    <div className="box">
                        <div className="boxHeader">
                            <div className="folderpath">
                                <a href="/video/assets/" className="link-tag">
                                    Assets Library
                                </a>
                                <img
                                    src="https://vlsmlsaker.s3.amazonaws.com/resources/assets/assets1/Chevron-down.svg"
                                    alt="Chevron Icon"
                                />
                            </div>
                            <div className="newFolder">
                                <a
                                    href="/video/upload-folder/"
                                    className="import-folder-link link-tag"
                                >
                                    <img
                                        src="https://vlsmlsaker.s3.amazonaws.com/resources/assets/assets1/create.svg"
                                        alt="Create Folder Icon"
                                    />
                                    <span style={{ paddingLeft: "5px" }}>
                                        Import Folder
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="log">
                            <div className="log-header">
                                <div>
                                    <input
                                        type="checkbox"
                                        name="selectall"
                                        id="selectall"
                                        style={{ opacity: 0 }}
                                    />
                                    <div>Folder Name</div>
                                </div>
                                <div>Items</div>
                                <div>Modified At</div>
                            </div>

                            <div className="log-item">
                                <div>
                                    <input
                                        type="checkbox"
                                        name="selectall"
                                        id="selectall2"
                                        style={{ opacity: 0 }}
                                    />
                                    <div>
                                        <a
                                            href="/video/assets/36/"
                                            className="link-tag"
                                        >
                                            hook_videos (4)
                                        </a>
                                    </div>
                                </div>
                                <div>5</div>
                                <div>Feb. 13, 2025, 2:34 p.m.</div>
                                <img
                                    src="https://vlsmlsaker.s3.amazonaws.com/resources/assets/assets1/dots.svg"
                                    className="menu"
                                    alt="Menu Options"
                                    // You can add a toggle for the actions here if needed
                                />
                                <div className="actions">
                                    <div>
                                        <a
                                            href="/video/rename-folder/36/"
                                            className="rename-folder-link link-tag"
                                        >
                                            <img
                                                src="https://vlsmlsaker.s3.amazonaws.com/resources/assets/assets1/rename.svg"
                                                alt="Rename Icon"
                                            />
                                            Rename
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="/video/categories/delete/36/"
                                            className="delete-folder-link link-tag"
                                        >
                                            <img
                                                src="https://vlsmlsaker.s3.amazonaws.com/resources/assets/assets1/delete.svg"
                                                alt="Delete Icon"
                                            />
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Page;
