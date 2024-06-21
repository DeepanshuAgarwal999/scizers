import React from 'react'
import { HeroSection } from './components/sections/HeroSection'
import FeatureBanner from './components/FeatureBanner'
import HarbourLight from './components/sections/HarbourLight'
import Gallery from './components/sections/Gallery'
import Footer from './components/shared/Footer'

const Home = () => {
  return (
    <><HeroSection />
      <FeatureBanner />
      <HarbourLight />
      <Gallery />
      <Footer />
    </>
  )
}

export default Home