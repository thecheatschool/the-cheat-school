import React from "react";
import {
  Cpu,
  DraftingCompass,
  Building,
  Calculator,
  Calendar,
  User,
} from "lucide-react";

const SkillsMastered = () => {
  const skills = [
    {
      category: "Design & Drafting",
      icon: DraftingCompass,
      skills: [
        "AutoCAD Basics & Advanced",
        "Revit Modeling",
        "2BHK Floor Plans",
        "Sections & Elevations",
        "Layers & Annotations",
      ],
    },
    {
      category: "Project Management",
      icon: Calendar,
      skills: [
        "MS Project/Primavera",
        "Gantt Charts",
        "Critical Path Method",
        "Resource Allocation",
        "Manpower Planning",
      ],
    },
    {
      category: "Quantity Surveying",
      icon: Calculator,
      skills: [
        "BOQ Estimation",
        "Material Takeoff",
        "Costing",
        "2BHK Project Estimation",
        "Professional Reporting",
      ],
    },
    {
      category: "AI in Civil Engineering",
      icon: Cpu,
      skills: [
        "Generative Design",
        "AI Automation",
        "Predictive Scheduling",
        "Computer Vision Safety",
        "Clash Detection",
      ],
    },
    {
      category: "Structural Basics",
      icon: Building,
      skills: [
        "RCC Design",
        "Load Distribution",
        "Structural Elements",
        "Construction Materials",
        "Building Codes",
      ],
    },
    {
      category: "Professional Development",
      icon: User,
      skills: [
        "Communication Skills",
        "Presentation Skills",
        "LinkedIn Profile",
        "CV Refinement",
        "Interview Preparation",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold font-[Antonio]">
            SKILLS YOU'LL <span className="text-[#e83f25]">MASTER</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[Inter]">
            Comprehensive 90-day skill development across civil engineering
            domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border hover:border-primary duration-300 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#e83f25] rounded-lg">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold font-[Antonio]">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#e83f25] rounded-full"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-left mt-12">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6 max-w-3xl">
            <p className="text-sm font-semibold text-green-800">
              <span className="font-bold text-green-700">BONUS:</span> Weekly
              personality development, mock client meetings, teamwork exercises,
              and professional communication skills integrated throughout all 3
              months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMastered;
