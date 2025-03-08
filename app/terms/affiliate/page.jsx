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
          <h1>Affiliate Program Terms for VideoCrafter.io</h1>
        
          <h2>1. Introduction</h2>
          <p>By joining the VideoCrafter.io Affiliate Program, you agree to promote our platform responsibly in exchange for a <b>30% recurring commission</b> on customer subscriptions.</p>
        
          <h2>2. Eligibility and Enrollment</h2>
          <p>To join, affiliates must complete an application. Acceptance into the program is at our discretion, and we may revoke membership if terms are violated.</p>
        
          <h2>3. Commission Structure</h2>
          <ul className="ul-lst">
            <li><strong>Payout Rate:</strong> Affiliates earn <b>30%</b> of each payment made by referred customers.</li>
            <li><strong>Payout Schedule:</strong> Commissions are paid monthly, provided the minimum threshold of <b>$50</b> is met.</li>
            <li><strong>Lifetime Earnings:</strong> Commissions are recurring as long as referred customers remain subscribed.</li>
          </ul>
        
          <h2>4. Affiliate Responsibilities</h2>
          <ul className="ul-lst">
            <li><strong>Promotional Conduct:</strong> Affiliates agree not to misrepresent VideoCrafter.io, engage in spam, or use misleading claims. Affiliates may only use authorized branding and logos as provided by VideoCrafter.io.</li>
            <li><strong>Compliance with Laws:</strong> Affiliates must comply with applicable advertising regulations and not engage in deceptive practices.</li>
          </ul>
        
          <h2>5. Termination of Affiliate Status</h2>
          <p>VideoCrafter.io reserves the right to terminate affiliate accounts for policy violations, including unauthorized marketing practices, non-compliance with terms, or fraud. Upon termination, no further commissions will be earned.</p>
        
          <h2>Contact Us</h2>
          <p>For further assistance or questions regarding our Affiliate Program Terms, please contact us at <a className="link-st" href="mailto:support@VideoCrafter.io">support@VideoCrafter.io</a>.</p>
        </div>
      <Footer/>
    </div>
  )
}

export default page
