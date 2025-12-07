import CourseOverview from "@/components/pages/civil/CourseOverview";
import SkillsMastered from "@/components/pages/civil/SkillsMastered";
import Features from "@/components/pages/civil/Features";
import React, { useState, useEffect } from "react";
import RequirementsGameMap from "@/components/pages/civil/RequirementsGameMap";

const CivilEngineering = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="civil-engineering-page overflow-x-hidden">
      {/* EXACT SAME scroll bar as LandingPage */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-[60]">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <CourseOverview />
      <SkillsMastered />
      <Features />
      <RequirementsGameMap />
    </div>
  );
};

export default CivilEngineering;