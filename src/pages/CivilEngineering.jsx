import CourseOverview from "@/components/pages/civil/CourseOverview";
import SkillsMastered from "@/components/pages/civil/SkillsMastered";
import Features from "@/components/pages/civil/Features";
import React from "react";
import RequirementsGameMap from "@/components/pages/civil/RequirementsGameMap";

const CivilEngineering = () => {
  return (
    <div className="civil-engineering-page">
      <CourseOverview />
      <SkillsMastered />
      <Features />
     <RequirementsGameMap/>
    </div>
  );
};

export default CivilEngineering;
