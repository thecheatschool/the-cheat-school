import React from "react";
import { Wrench, Cpu, ArrowRight } from "lucide-react";

const Features = () => {
  const courses = [
    {
      id: 1,
      number: "01",
      title: "Civil Engineering Bootcamp",
      description:
        "Master AutoCAD, Revit, BIM, and construction management. From structural design to site execution in 90 days.",
      icon: Wrench,
      link: "/civil-engineering",
      bgColor: "#e83f25",
      cta: "Learn More"
    },
    {
      id: 2,
      number: "02",
      title: "AI Engineering Bootcamp",
      description:
        "Learn Machine Learning, AI tools, and intelligent systems. Build real-world AI projects and deploy production models.",
      icon: Cpu,
      link: "/ai-engineering",
      bgColor: "#2b2b2b",
      cta: "Coming Soon"
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Design - Circles and shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full opacity-10 -translate-y-32 translate-x-32"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-secondary rounded-full opacity-8"></div>

      <div className="absolute bottom-1/4 left-10 w-32 h-32 border-4 border-primary rounded-full opacity-10"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-secondary opacity-6 rotate-45"></div>
      <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-primary opacity-8"></div>
      <div className="absolute top-2/3 right-10 w-16 h-16 border-4 border-secondary opacity-8 rotate-12"></div>
      <div className="absolute bottom-1/3 left-1/3 w-28 h-28 rounded-full bg-primary opacity-6"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold font-primary">
            EXPLORE OUR <span className="text-primary">COURSES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-secondary">
            Choose your path to becoming an industry-ready professional in just 90 days
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="bg-card shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-4 relative overflow-hidden rounded-lg hover:shadow-[0px_0px_25px_rgba(232,63,37,0.15)] transition-all duration-300 group"
              >
                {/* Number Badge */}
                <div
                  className="w-24 h-24 rounded-full absolute -right-5 -top-7 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: course.bgColor }}
                >
                  <p className="absolute bottom-6 left-7 text-white text-2xl font-bold font-primary">
                    {course.number}
                  </p>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent 
                    className="w-full h-full" 
                    style={{ color: course.bgColor }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-foreground font-primary">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-6 font-secondary">
                  {course.description}
                </p>

                {/* Learn More Link */}
                
                 <a href={course.link}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300 font-secondary"
                  style={{ color: course.bgColor }}
                >
                  {course.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          
           <a href="/The Cheatcamp – Student Schedule & Responsibilities.pdf"
            download
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-[#d63620] transition-all text-lg font-primary shadow-lg hover:shadow-xl"
          >
            Download Complete Syllabus
          </a>

          
           <a href="/90 Days TCS Bootcamp.pdf"
            download
            className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-lg font-primary"
          >
            View Detailed Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;