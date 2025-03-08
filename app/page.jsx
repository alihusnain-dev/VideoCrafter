import React from 'react'
import Header from '@/components/Header'
import '/styles/landing.css'
import '/styles/landing_style.css'
import '/styles/landing-bck.css'
import '/styles/landing_style-bck.css'
import Banner from '@/components/Landing/Banner'
import Placeholder from '@/components/Landing/Placeholder'
import Built from '@/components/Landing/Built'
import Story from '@/components/Landing/Story'
import Work from '@/components/Landing/Work'
import Beats from '@/components/Landing/Beats'
import Tutorial from '@/components/Landing/Tutorial'
import Plans from '@/components/Landing/Plans'
import Free from '@/components/Landing/Free'
import Commissions from '@/components/Landing/Commissions'
import GetInTouch from '@/components/Landing/GetInTouch'
import Background from '@/components/Landing/Background'
import Footer from '@/components/Footer/Footer'
const Page = () => {
  return (
    <div>
      <Background/>
      <Header />
      <Banner/>
      <Placeholder/>
      <Built/>
      <Story/>
      <Work/>
      <Beats/>
      <Tutorial/>
      <Plans/>
      <Free/>
      <Commissions/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default Page
