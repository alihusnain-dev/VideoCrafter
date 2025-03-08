"use client"
import React, { useState } from 'react';
import '/styles/signup.css';
import Link from 'next/link';

const Page = () => {
  // State variables to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form data, e.g., submit it to an API
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <div className="signup_container">
        <img 
          src="/images/elipse.svg" 
          alt="Background decoration" 
          className="signup_backgroundImage"
        />
        <div className="signup_formContainer">
          <form onSubmit={handleSubmit} className="signup_form">
            <div className="signup_logo">
              <div>
                <Link href='/'>
                <img 
                  src="/images/logo.svg" 
                  alt="Company logo" 
                  className="signup_logoSvg"
                />
                </Link>
              </div>
              <span className="signup_logoText">
                Your Payment Has Been Completed Successfully
              </span>
              <small className="small">Set Up Your Account Details Below</small>
            </div>
            <div className="signup_form">
              <div className="signup_formGroup">
                <label htmlFor="name" className="signup_label">Name:</label>
                <input 
                  className="signup_input" 
                  type="text" 
                  id="name" 
                  required 
                  placeholder="Name" 
                  name="name"
                  value={formData.name} // Two-way binding
                  onChange={handleChange} // Handle changes
                />
              </div>
              <div className="signup_formGroup">
                <label htmlFor="email" className="signup_label">Email address:</label>
                <input 
                  className="signup_input" 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="Email"
                  name="email"
                  value={formData.email} // Two-way binding
                  onChange={handleChange} // Handle changes
                />
              </div>
              <div className="signup_formGroup">
                <label htmlFor="password" className="signup_label">Password:</label>
                <input 
                  className="signup_input" 
                  type="password" 
                  id="password" 
                  required 
                  placeholder="Password"
                  name="password"
                  value={formData.password} // Two-way binding
                  onChange={handleChange} // Handle changes
                />
              </div>
              <div className="signup_formGroup">
                <label htmlFor="confirmPassword" className="signup_label">Confirm Password:</label>
                <input 
                  className="signup_input" 
                  type="password" 
                  id="confirmPassword" 
                  required 
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword} // Two-way binding
                  onChange={handleChange} // Handle changes
                />
              </div>
              <button type="submit" className="signup_button">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
