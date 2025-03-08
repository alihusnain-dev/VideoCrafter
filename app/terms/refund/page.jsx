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
          <h1>Refund Policy for VideoCrafter.io</h1>
      
          <h2>1. Overview</h2>
          <p>At VideoCrafter.io, we strive to provide high-quality tools for creating effective Video Sales Letters (VSLs) and value customer satisfaction. Our Refund Policy is designed to offer fair consideration to customers who may find the platform does not meet their expectations, while also protecting against misuse of our services.</p>
      
          <h2>2. Eligibility for Refunds</h2>
          <p>To qualify for a refund, customers must meet the following criteria:</p>
          <ul className="ul-lst">
            <li><strong>Initial Satisfaction Guarantee:</strong> Refund requests are considered within the first <b>3 days</b> of subscription. After this period, all sales are considered final.</li>
            <li><strong>Usage Limitations:</strong> Refunds are only available to customers who have not used more than 1 credit on their account. Customers who have used <b>2 or more credits</b> are ineligible for a refund, as this level of usage indicates a significant experience with the platform.</li>
          </ul>
      
          <h2>3. Refund Process</h2>
          <p>To initiate a refund, customers must follow these steps:</p>
          <ul  className="ul-lst">
            <li><strong>Submission of Request:</strong> Customers seeking a refund must submit their request by contacting our support team at <a className="link-st" href="mailto:support@VideoCrafter.io">support@VideoCrafter.io</a>. Please include your account email, a brief explanation of your refund request, and confirmation that you meet the eligibility criteria.</li>
            <li><strong>Review and Processing:</strong> Refund requests are reviewed and processed within 7 business days. Approved refunds are issued to the original payment method and may take additional time to appear, depending on the customer’s financial institution.</li>
          </ul>
      
          <h2>4. Limitations</h2>
          <p><strong>Non-Refundable Situations:</strong></p>
          <ul  className="ul-lst">
            <li>Accounts that have used <b>2 or more credits</b>.</li>
            <li>Situations where customers have misused the platform or breached the Terms of Service.</li>
            <li>Refund requests made after the initial <b>3-day</b> satisfaction guarantee period.</li>
          </ul>
          <p><strong>Improper Use of Platform:</strong> Refunds will not be granted if the platform has been misused, including attempts to exploit credits, manipulate subscription terms, or otherwise abuse the platform's functionalities.</p>
      
          <h2>5. Changes to the Refund Policy</h2>
          <p>VideoCrafter.io reserves the right to modify this Refund Policy. Customers will be informed of any significant changes, and continued use of the platform constitutes acceptance of any revisions to the policy.</p>
      
          <h2>Contact Us</h2>
          <p>For further assistance or questions regarding our Refund Policy, please contact us at <a className="link-st" href="mailto:support@VideoCrafter.io">support@VideoCrafter.io</a>.</p>
        </div>

      <Footer/>
    </div>
  )
}

export default page
