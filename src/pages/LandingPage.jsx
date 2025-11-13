import React, { useState, useEffect } from "react";
import { Home, Info, Zap, DollarSign, HelpCircle, Rocket } from "lucide-react";
import HeroSection from "@/components/pages/Landing/HeroSection";
import AboutUs from "@/components/pages/Landing/AboutUs";
import Features from "@/components/pages/Landing/Features";
import CTA from "@/components/pages/Landing/CTA";
import FAQ from "@/components/pages/Landing/FAQ";
import Pricing from "@/components/pages/Landing/Pricing";

const LandingPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("Hero");
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const sections = [
    { id: "hero", name: "Hero", icon: Home },
    { id: "about", name: "About Us", icon: Info },
    { id: "features", name: "Features", icon: Zap },
    { id: "pricing", name: "Pricing", icon: DollarSign },
    { id: "faq", name: "FAQ", icon: HelpCircle },
    { id: "cta", name: "Get Started", icon: Rocket },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section.name);
            setActiveSectionIndex(index);
          }
        }
      });
    };

    handleScroll(); // Initial call
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="relative">
      {/* DESKTOP - Vertical Progress Indicator (Left Side) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden  lg:block">
        <div className="flex items-center  gap-6">
          {/* Section Icons Navigation */}
          <div className="relative flex bg-black/40 p-3 rounded-lg flex-col gap-6">
            {/* Background line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full text-black dark:text-white" />

            {/* Progress fill line */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5  bg-[#e83f25] transition-all duration-500 ease-out"
              style={{
                height: `${
                  (activeSectionIndex / (sections.length - 1)) * 100
                }%`,
              }}
            />

            {/* Icons for each section */}
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="relative group z-10"
                  aria-label={`Go to ${section.name}`}
                >
                  {/* Icon */}
                  <div
                    className={`p-1.5 rounded-lg transition-all duration-300 ${
                      index <= activeSectionIndex
                        ? "bg-[#e83f25] text-white scale-110"
                        : "bg-white/10 text-white/40 hover:bg-white/20 hover:text-white/80"
                    }`}
                  >
                    <Icon
                      className="cursor-pointer"
                      size={16}
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Tooltip on hover */}
                  <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    <div className="bg-[#2b2b2b]  px-3 py-2 rounded-lg text-sm font-secondary  shadow-lg">
                      {section.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Section Info Panel */}
          <div className="ml-2">
            {/* Section Name */}
            <div className="font-secondary right-3 text-sm text-pink tracking-wider uppercase transition-all duration-300">
              {activeSection}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar - Very top */}
      <div className="fixed top-0 left-0 right-0 h-1 md:hidden bg-white/10 z-[60]">
        <div
          className="h-full bg-[#e83f25] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sections with IDs */}
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="cta">
        <CTA />
      </section>
    </div>
  );
};

export default LandingPage;
