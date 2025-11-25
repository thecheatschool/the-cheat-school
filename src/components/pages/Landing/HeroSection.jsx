import React, { useState, useEffect } from "react";
import {
  Calendar,
  User,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Linkedin,
  Contact,
  Phone,
  MessageCircle,
} from "lucide-react";
import WebinarStatus from "./WebinarStatus";
import { GOOGLE_FORM_URL } from "@/utils/google-form-redirect";

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Theory", "Classroom", "Concepts", "Learning"];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "Real Projects",
    "Site Experience",
    "Industry Skills",
    "Practical Work",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen mt-26 w-full overflow-hidden">
      {/* Grid & Blocks Background */}
      <div className="absolute inset-0 bg-background dark:bg-background">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-100 dark:opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(var(--light-grey) 1px, transparent 1px), linear-gradient(90deg, var(--light-grey) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Large blocks */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-dark-grey dark:bg-dark-grey"></div>
        <div className="absolute bottom-0 left-0 w-2/5 h-2/5 bg-dark-grey dark:bg-dark-grey"></div>

        {/* Red accent blocks */}
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary"
          style={{ opacity: 0.15 }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-primary"
          style={{ opacity: 0.08 }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-primary"
          style={{ opacity: 0.2 }}
        ></div>

        {/* Lines */}
        <div
          className="absolute top-1/3 left-0 w-full h-3 bg-primary"
          style={{ opacity: 0.15 }}
        ></div>
        <div
          className="absolute top-0 left-1/2 w-3 h-full bg-primary"
          style={{ opacity: 0.1 }}
        ></div>

        {/* Small accent squares */}
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary"></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 rotate-45 bg-primary"></div>
      </div>

      {/* Social Media Icons - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        <a
          href="https://www.instagram.com/thecheatschool/"
          className="text-foreground hover:text-primary transition-colors"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/the-cheat-school/posts/?feedView=all"
          className="text-foreground hover:text-primary transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="#"
          className="text-foreground hover:text-primary transition-colors"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Scroll Indicator - Right Side Bottom */}
      <div className="absolute right-8 bottom-12 flex flex-col items-center gap-2 z-20">
        <div className="w-px h-20 bg-foreground/30" />
        <ChevronDown className="text-foreground animate-bounce" size={24} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Top Label */}
        <div className="mt-17">
          <p className="text-foreground/70 text-sm md:text-base tracking-[0.3em] uppercase font-secondary">
            CIVIL ENGINEERING EXCELLENCE
          </p>
        </div>

        {/* Main Heading with Animation */}
        <div className="mb-16 text-center">
          <h1 className="text-foreground text-5xl md:text-7xl lg:text-8xl font-bold font-primary tracking-tight">
            <span className="block md:inline">From </span>
            <span
              key={currentWord}
              className="inline-block animate-[fadeIn_0.5s_ease-in-out] text-primary min-w-[280px] md:min-w-[320px]"
            >
              {words[currentWord]}
            </span>
          </h1>
          <h1 className="text-foreground text-5xl md:text-7xl lg:text-8xl font-bold font-primary tracking-tight mt-4">
            <span className="block md:inline">to </span>
            <span
              key={currentPhrase}
              className="inline-block animate-[fadeIn_0.5s_ease-in-out] text-primary min-w-[320px] md:min-w-[400px]"
            >
              {phrases[currentPhrase]}
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-foreground/80 text-lg md:text-xl lg:text-2xl font-secondary mb-12 max-w-3xl text-center px-4">
          From classroom to construction site. Gain hands-on experience and
          become industry-ready with practical civil engineering training.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href={GOOGLE_FORM_URL}>
            <button className="px-8 py-4 bg-[#e83f25] cursor-pointer text-white font-semibold font-secondary rounded-lg hover:bg-[#d63820] transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Learning
            </button>
          </a>

          <div className="flex">
            <a href={``}>
              <button className="px-8 py-4 bg-accent-foreground cursor-pointer text-white font-semibold font-secondary rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                Join Us
                <ArrowRight />
              </button>
            </a>
          </div>
        </div>

        {/* <div className="fixed bottom-0 mb-10 z-50">
          <WebinarStatus isLive={true} />
        </div> */}

        {/* Stats */}
        <div className="flex flex-row gap-8 md:gap-16 text-center">
          <div>
            <p className="text-foreground text-3xl md:text-4xl font-bold font-primary mb-1">
              90 Days
            </p>
            <p className="text-foreground/70 text-sm md:text-base font-secondary tracking-wide">
              Job-Ready Transform
            </p>
          </div>
          <div className="hidden sm:block w-px bg-foreground/20"></div>
          <div>
            <p className="text-foreground text-3xl md:text-4xl font-bold font-primary mb-1">
              3+
            </p>
            <p className="text-foreground/70 text-sm md:text-base font-secondary tracking-wide">
              Live Projects
            </p>
          </div>
          <div className="hidden sm:block w-px bg-foreground/20"></div>
          <div>
            <p className="text-foreground text-3xl md:text-4xl font-bold font-primary mb-1">
              1:1
            </p>
            <p className="text-foreground/70 text-sm md:text-base font-secondary tracking-wide">
              Personality Coaching
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
