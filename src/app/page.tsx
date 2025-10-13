import Footer from '@/components/Footer'
import Hero from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import AchievementsSection from '@/components/OurAchievements'
import OurFriendshipSection from '@/components/OurFriendship'
import WhatMakesUsDifferent from '@/components/WhatDifferent'
import WhyUs from '@/components/WhyUs'
import React from 'react'

const Home = () => {
  return (
    <div className='overflow-x-hidden '>
    <Navbar/>
    <Hero/>
    {/* <TeamSection/> */}

    <WhyUs/>
    <AchievementsSection/>
    <WhatMakesUsDifferent/>

    <OurFriendshipSection/>

    <Footer/>
    </div>
  )
}

export default Home