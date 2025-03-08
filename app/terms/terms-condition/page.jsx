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
          <h1>Terms of Service (ToS) for VideoCrafter.io</h1>
        
          <h2>1. Introduction</h2>
          <p>Welcome to VideoCrafter.io, a platform operated by Crown18 Limited, designed to provide users with the tools to create high-converting Video Sales Letters (VSLs) efficiently and affordably. These Terms of Service ("Terms") govern your access to and use of VideoCrafter.io, including any content, features, or functionality offered. By creating an account or accessing the site, you agree to comply with these Terms.</p>
        
          <h2>2. Eligibility</h2>
          <p>Users must be at least 18 years old and legally permitted to enter into binding agreements. By using VideoCrafter.io, you confirm that you meet these eligibility requirements.</p>
        
          <h2>3. Account Registration and Access</h2>
          <p>To use the service, you must create an account by providing accurate and complete information, including a valid email address. You are responsible for maintaining the security of your account credentials. Notify us immediately at <a className="link-st" href="mailto:support@VideoCrafter.io">support@VideoCrafter.io</a> if you suspect unauthorized access to your account.</p>
        
          <h2>4. Subscription Terms</h2>
          <p>VideoCrafter.io offers different subscription plans, including a Free Trial, Growth Plan, and Pro Plan. Subscriptions renew automatically each month, and your payment method will be charged on the renewal date unless canceled before the billing cycle ends. You may upgrade or downgrade plans; changes take effect in the next billing cycle.</p>
        
          <h2>5. Refund Policy</h2>
          <p>Refunds are available under specific conditions. Customers may request a refund within the first 7 days, provided they have used no more than one credit. Accounts that have used two or more credits are ineligible for a refund. Detailed terms are outlined in our Refund Policy.</p>
        
          <h2>6. User Conduct</h2>
          <p>Users agree not to misuse VideoCrafter.io, including but not limited to:</p>
          <ul className="ul-lst">
            <li>Reselling or redistributing software features without permission.</li>
            <li>Sharing login credentials or allowing unauthorized access.</li>
            <li>Using the platform to create misleading, fraudulent, or illegal content.</li>
          </ul>
          <p>Violation of these rules may result in account suspension or termination without a refund.</p>
        
          <h2>7. Limitation of Liability</h2>
          <p>VideoCrafter.io, its owners, and affiliates are not liable for any indirect, incidental, or consequential damages arising from the use of the platform, including data loss, service outages, or unauthorized access beyond our control.</p>
        
          <h2>8. Intellectual Property</h2>
          <p>All content, trademarks, and technology on VideoCrafter.io are the property of Crown18 Limited. Users retain rights to the video content they create, but any tools or templates provided remain the property of VideoCrafter.io.</p>
        
          <h2>9. Termination</h2>
          <p>Accounts may be suspended or terminated for violating these Terms or for non-payment. Users may terminate their account at any time, but subscription fees already paid are non-refundable.</p>
        
          <h2>10. Dispute Resolution</h2>
          <p>Any disputes will be resolved through arbitration under UK jurisdiction.</p>
        
          <h2>Contact Us</h2>
          <p>For further assistance or questions regarding our Terms of Service, please contact us at <a className="link-st" href="mailto:support@VideoCrafter.io">support@VideoCrafter.io</a>.</p>
        </div>
      <Footer/>
    </div>
  )
}

export default page
