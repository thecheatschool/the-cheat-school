import React from "react";
// import HeroSection from '@/components/pages/Landing/HeroSection'
// import AboutUs from '@/components/pages/Landing/AboutUs'
// import Features from '@/components/pages/Landing/Features'
// import CTA from '@/components/pages/Landing/CTA'
// import FAQ from '@/components/pages/Landing/FAQ'
// import Pricing from '@/components/pages/Landing/Pricing'

//REPLACE ALL THESE PLACEHOLDERS WITH ACTUAL COMPONENTS LATER
//JUST UNCOMMENT THE IMPORTS AND THE COMPONENT
//DELETE THE PLACEHOLDERS AFTER REPLACING WITH ACTUAL COMPONENTS

const HeroSectionPlaceholder = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/5 flex items-center justify-center">
    <div className="text-center space-y-4 p-8">
      <div className="text-6xl font-primary font-bold text-foreground">
        Hero Section
      </div>
      <div className="text-xl text-muted-foreground font-secondary">
        Main headline and CTA goes here
      </div>
    </div>
  </div>
);

const AboutUsPlaceholder = () => (
  <div className="min-h-screen bg-dark-grey flex items-center justify-center">
    <div className="text-center space-y-4 p-8">
      <div className="text-5xl font-primary font-bold text-foreground">
        About Us
      </div>
      <div className="text-lg text-muted-foreground font-secondary">
        Company story and mission
      </div>
    </div>
  </div>
);

const FeaturesPlaceholder = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4 p-8">
      <div className="text-5xl font-primary font-bold text-foreground">
        Features
      </div>
      <div className="text-lg text-muted-foreground font-secondary">
        Product features grid
      </div>
    </div>
  </div>
);

const CTAPlaceholder = () => (
  <div className="min-h-[60vh] bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
    <div className="text-center space-y-4 p-8">
      <div className="text-5xl font-primary font-bold text-primary-foreground">
        Call To Action
      </div>
      <div className="text-lg text-primary-foreground/80 font-secondary">
        Bold conversion section
      </div>
    </div>
  </div>
);

const FAQPlaceholder = () => (
  <div className="min-h-screen bg-light-grey flex items-center justify-center">
    <div className="text-center space-y-4 p-8">
      <div className="text-5xl font-primary font-bold text-foreground">FAQ</div>
      <div className="text-lg text-muted-foreground font-secondary">
        Questions and answers
      </div>
    </div>
  </div>
);

const PricingPlaceholder = () => (
  <div className="min-h-screen bg-gradient-to-br from-secondary/5 via-background to-primary/5 flex items-center justify-center">
    <div className="text-center space-y-4 p-8">
      <div className="text-5xl font-primary font-bold text-foreground">
        Pricing
      </div>
      <div className="text-lg text-muted-foreground font-secondary">
        Plans and pricing tiers
      </div>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div>
      <HeroSectionPlaceholder />
      <AboutUsPlaceholder />
      <FeaturesPlaceholder />
      <CTAPlaceholder />
      <FAQPlaceholder />
      <PricingPlaceholder />

      {/* <HeroSection /> */}
      {/* <AboutUs /> */}
      {/* <Features /> */}
      {/* <CTA /> */}
      {/* <FAQ /> */}
      {/* <Pricing /> */}
    </div>
  );
};

export default LandingPage;
