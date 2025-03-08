import React from 'react'
import Background from '@/components/Landing/Background'
import Header from '@/components/Header/index'
import Footer from '@/components/Footer/Footer'
import '/styles/terms.css'
const page = () => {
  return (
    <div>
        <Background/>
        <Header/>
      <div className="container-two">
          <h1>Privacy Policy for VideoCrafter.io</h1>
        
          <h2>1. Introduction</h2>
          <p>At VideoCrafter.io, we are committed to protecting your privacy. This Privacy Policy outlines the types of information we collect, how we use it, and your rights regarding your data. By using VideoCrafter.io, you agree to the terms of this Privacy Policy.</p>
        
          <h2>2. Data Collection</h2>
          <ul className="ul-lst">
            <li><strong>Account Information:</strong> We collect information provided during account creation, including your name, email address, and billing information.</li>
            <li><strong>Usage Data:</strong> We gather data on how you interact with the platform, such as IP addresses, cookies, and device information, to enhance your experience.</li>
            <li><strong>Payment Information:</strong> We use Stripe for secure payment processing and do not store payment details directly on our servers.</li>
          </ul>
        
          <h2>3. Data Storage and Processing</h2>
          <p>Data is securely stored on cloud servers and is processed following industry standards. We partner with third-party providers, like Stripe, to handle sensitive information securely. Access to your data is limited to authorized personnel who require it to perform their duties.</p>
        
          <h2>4. Use of Collected Data</h2>
          <ul className="ul-lst">
            <li><strong>Service Improvement:</strong> To personalize your experience, enhance features, and ensure the platform functions smoothly.</li>
            <li><strong>Customer Support:</strong> To assist with issues, answer questions, and provide necessary customer service.</li>
            <li><strong>Marketing:</strong> We may send promotional content or updates. You can opt out at any time by contacting <a className="link-st" href="mailto:support@VideoCrafter.io">support@VideoCrafter.io</a>.</li>
          </ul>
        
          <h2>5. User Rights</h2>
          <ul className="ul-lst">
            <li><strong>Access:</strong> You have the right to access any personal information we hold about you.</li>
            <li><strong>Modification:</strong> You may request corrections to your personal data.</li>
            <li><strong>Deletion:</strong> You can request deletion of your data, subject to certain retention requirements for legal compliance.</li>
          </ul>
          <p>To exercise these rights, contact us at <a className="link-st" href="mailto:support@VideoCrafter.io">support@VideoCrafter.io</a>.</p>
        
          <h2>6. Cookie Policy</h2>
          <p>Cookies are used to improve functionality and personalize content. Users can control cookie settings through their browser. For details, refer to our full Cookie Policy.</p>
        
          <h2>7. Data Security Measures</h2>
          <p>VideoCrafter.io uses industry-standard encryption and security protocols to protect your information. While no system is 100% secure, we continuously monitor and upgrade our protections.</p>
        
          <h2>8. Changes to the Privacy Policy</h2>
          <p>We reserve the right to update this policy and will notify users of significant changes. Continued use of the platform constitutes acceptance of the revised policy.</p>
        
          <h2>Contact Us</h2>
          <p>For further assistance or questions regarding our Privacy Policy, please contact us at <a className="link-st" href="mailto:support@VideoCrafter.io">support@VideoCrafter.io</a>.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default page
