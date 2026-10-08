import React from 'react'

import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Stats from '../components/Stats'
import WhyJigyasa from '../components/WhyJigyasa'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Stats />
      <WhyJigyasa />
      <CTA />
    </>
  )
}

export default Home