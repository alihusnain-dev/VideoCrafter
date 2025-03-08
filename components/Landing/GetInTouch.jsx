"use client"
import React from 'react';
import Head from 'next/head';

const GetInTouch = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div>
      <Head>
        {/* Add any necessary meta tags, stylesheets, or scripts here */}
        <title>Contact Us - VideoCrafter</title>
        <meta name="description" content="Get in touch with us. We’d love to hear from you. Please fill out this form." />
      </Head>

      <div className="contact-section-wrapper" id="contact">
        <div className="contact-section">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Please fill out this form.</p>
          <form className="contact-form" id="contactForm" autoComplete="on" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First name</label>
                <input
                  type="text"
                  id="first-name"
                  name="first_name"
                  placeholder="First name"
                  autoComplete="given-name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last name</label>
                <input
                  type="text"
                  id="last-name"
                  name="last_name"
                  placeholder="Last name"
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="" required></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;