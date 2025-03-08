"use client";
import React, { useState } from "react";
import "/styles/reset.css";
import Link from "next/link";

const Page = () => {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    // Prevent form submission or handle any action
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className="password-reset_container">
                <img
                    src="/images/elipse.svg"
                    alt="Background"
                    className="password-reset_backgroundImage"
                />
                <div className="password-reset_formContainer">
                    <form
                        onSubmit={handleSubmit}
                        method="post"
                        className="password-reset_form"
                    >
                        <div className="password-reset_logo">
                            <div>
                                <Link href="/">
                                    <img
                                        src="/images/logo.svg"
                                        alt="Company logo"
                                        className="signup_logoSvg"
                                    />
                                </Link>
                            </div>
                            <span className="password-reset_logoText">
                                Password Reset Sent
                            </span>
                            <p>
                                A link to reset your password has been sent to
                                your email. Please check your inbox and follow
                                the instructions.
                            </p>
                            <p>
                                Once you've reset your password, you can
                                <Link
                                    href="/accounts/login"
                                    style={{ color: "#007BFF" }}
                                >
                                    {" "}
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
