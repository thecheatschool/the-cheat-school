import React, { useState } from "react";
import {
  Calendar,
  User,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import WebinarStatus from "./WebinarStatus";

const HeroSection = () => {
  return (
    <div className="relative h-screen mt-26 w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 backdrop-blur-lg">
        <img
          src="https://www.aaschool.ac.uk/assets/woodworkshop-1582219182.jpg"
          alt="Workshop"
          className="w-full h-full object-cover blur-[2px]"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Social Media Icons - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        <a href="#" className="text-white hover:text-primary transition-colors">
          <Instagram size={24} />
        </a>
        <a href="#" className="text-white hover:text-primary transition-colors">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-white hover:text-primary transition-colors">
          <Twitter size={24} />
        </a>
      </div>

      {/* Scroll Indicator - Right Side Bottom */}
      <div className="absolute right-8 bottom-12 flex flex-col items-center gap-2 z-20">
        <div className="w-px h-20 bg-white/50" />
        <ChevronDown className="text-white animate-bounce" size={24} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Top Label */}
        <div className=" mt-17">
          <p className="text-white text-sm md:text-base tracking-[0.3em] uppercase font-secondary">
            EXPLORE
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-bold font-primary tracking-tight mb-16">
          Learning
        </h1>

        {/* Tagline */}
        <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-secondary mb-12 max-w-3xl text-center px-4">
          Empowering minds through hands-on education and innovative learning
          experiences
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="px-8 py-4 bg-[#e83f25] text-white font-semibold font-secondary rounded-lg hover:bg-[#d63820] transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore Courses
          </button>
          <button className="px-8 py-4 bg-transparent text-white font-semibold font-secondary rounded-lg border-2 border-white hover:bg-white hover:text-[#2b2b2b] transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="fixed bottom-0 mb-10 z-50">
          <WebinarStatus isLive={true} />
        </div>

        {/* Stats */}
        <div className="flex flex-row gap-8 md:gap-16 text-center">
          <div>
            <p className="text-white text-3xl md:text-4xl font-bold font-primary mb-1">
              500+
            </p>
            <p className="text-white/80 text-sm md:text-base font-secondary tracking-wide">
              Students
            </p>
          </div>
          <div className="hidden sm:block w-px bg-white/30"></div>
          <div>
            <p className="text-white text-3xl md:text-4xl font-bold font-primary mb-1">
              50+
            </p>
            <p className="text-white/80 text-sm md:text-base font-secondary tracking-wide">
              Courses
            </p>
          </div>
          <div className="hidden sm:block w-px bg-white/30"></div>
          <div>
            <p className="text-white text-3xl md:text-4xl font-bold font-primary mb-1">
              Expert
            </p>
            <p className="text-white/80 text-sm md:text-base font-secondary tracking-wide">
              Instructors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
