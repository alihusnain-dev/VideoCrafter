"use client"
import React, { useState } from 'react';
import '/styles/reset.css';
import Link from 'next/link';

const Page = () => {
    // State variable to manage email input value
    const [email, setEmail] = useState('');

    // Handle change in email input
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        // Here you can handle the form submission, like sending data to an API
    };

    return (
        <div className="body">
            <div className="password-reset_container">
                <img
                    src="/images/elipse.svg"
                    alt="Background decoration"
                    className="password-reset_backgroundImage"
                />
                <div className="password-reset_formContainer">
                    <form onSubmit={handleSubmit} method="post" className="password-reset_form">
                        <div className="password-reset_logo">
                            <div>
                                <Link href='/'>
                                    <img
                                        src="/images/logo.svg"
                                        alt="Company logo"
                                        className="signup_logoSvg"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="password-reset_form">
                            <div className="password-reset_formGroup">
                                <label htmlFor="email" className="password-reset_label">Email address:</label>
                                <input
                                    className="password-reset_input"
                                    type="email"
                                    id="email"
                                    required
                                    placeholder="Enter your email address"
                                    name="email"
                                    value={email} // Two-way binding
                                    onChange={handleChange} // Update state on input change
                                />
                            </div>
                            <Link href='/accounts/password-reset/reset-done'>
                            <button type="submit" className="password-reset_button">Reset Password</button>
                            </Link>
                        </div>
                        <div className="link-container">
                            <Link href="/accounts/login/" style={{ color: '#864AF9' }}>Back to login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
