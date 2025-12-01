import React, { useState } from "react";
import CourseOverview from "@/components/pages/explore/civil/CourseOverview";
import Features from "@/components/pages/explore/civil/Features";
import SocialMediaSchedule from "@/components/pages/explore/civil/SocialMediaSchedule";
import InternshipDocumentation from "@/components/pages/explore/civil/InternshipDocumentation";
import CertificationMetrics from "@/components/pages/explore/civil/CertificationMetrics";
import SkillsMastered from "@/components/pages/explore/civil/SkillsMastered";

const CivilEngineering = () => {
  return (
    <div className="civil-engineering-page">
      <CourseOverview />
      <SkillsMastered />
      <Features />
      <SocialMediaSchedule />
      <InternshipDocumentation />
      <CertificationMetrics />
    </div>
  );
};

export default CivilEngineering;
