import React from "react";
import HeroSection from "@/components/pages/Landing/HeroSection";
import AboutUs from "@/components/pages/Landing/AboutUs";
import Features from "@/components/pages/Landing/Features";
import CTA from "@/components/pages/Landing/CTA";
import FAQ from "@/components/pages/Landing/FAQ";
import Pricing from "@/components/pages/Landing/Pricing";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
};

export default LandingPage;
