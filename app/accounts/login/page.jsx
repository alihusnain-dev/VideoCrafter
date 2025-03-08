"use client"
import React, { useState } from 'react';
import styles from '/styles/login.module.css'; // Import the CSS module
import Link from 'next/link';

const Page = () => {
    // State for form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Handle form submission (prevent page reload)
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted:', { email, password });
        // Handle the form data here (e.g., send it to an API)
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <div className={styles.container}>
            <img src="https://vlsmlsaker.s3.amazonaws.com/assets/background/Ellipse%202.svg" alt="background" className={styles.backgroundImage}/>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.logo}>
                        <div>
                            <img src="/images/logo.svg" alt="Logo" />
                        </div>
                        <span className={styles.span}>Sign In</span>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email address:</label>
                            <input
                                className={styles.input}
                                type="email"
                                id="email"
                                name="email"
                                value={email} // Two-way binding for email
                                onChange={(e) => setEmail(e.target.value)} // Update email state
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className={`${styles.formGroup} ${styles.formGroupPassword}`}>
                            <label htmlFor="password" className={styles.label}>Password:</label>
                            <input
                                className={styles.input}
                                type={isPasswordVisible ? "text" : "password"} // Toggle password visibility
                                id="password"
                                name="password"
                                value={password} // Two-way binding for password
                                onChange={(e) => setPassword(e.target.value)} // Update password state
                                placeholder="Password"
                                required
                            />
                            <div className={styles.toggleIcon} onClick={togglePasswordVisibility}>
                                <img
                                    src={isPasswordVisible ? "https://vlsmlsaker.s3.amazonaws.com/assets/icons/eye-open.svg" : "https://vlsmlsaker.s3.amazonaws.com/assets/icons/eye-off.svg"}
                                    alt={isPasswordVisible ? "eye-open" : "eye-off"}
                                    className="eye"
                                />
                            </div>
                        </div>
                        <Link href="/accounts/password-reset/reset" className={styles.forgotPassword}>
                            Forgot Password?
                        </Link>
                        <Link href='/home'>
                        <button type="submit" className={styles.button}>
                            Sign In
                        </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
