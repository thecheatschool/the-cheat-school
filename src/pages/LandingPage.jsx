import AboutUs from '@/components/pages/Landing/AboutUs'
import CTA from '@/components/pages/Landing/CTA'
import FAQ from '@/components/pages/Landing/FAQ'
import Features from '@/components/pages/Landing/Features'
import HeroSection from '@/components/pages/Landing/HeroSection'
import Pricing from '@/components/pages/Landing/Pricing'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
        <HeroSection></HeroSection>
        <AboutUs></AboutUs>
        <Features></Features>
        <CTA></CTA>
        <FAQ></FAQ>
        <Pricing></Pricing>
    </div>
  )
}

export default LandingPage