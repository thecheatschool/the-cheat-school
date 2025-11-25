import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Features = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const timelineData = [
    {
      text: "Foundations & Certification",
      month: "Month 1",
      category: {
        tag: "Software Mastery",
        bgColor: "#e83f25",
        color: "#ffffff",
      },
      short:
        "Master AutoCAD & Revit from scratch. Build your first 2BHK floor plan project.",
      details: (
        <>
          Learn <strong>AutoCAD</strong> (layers, annotations, sections,
          elevations) and <strong>Revit</strong> (walls, floors, families,
          schedules). Complete <strong>Certification prep</strong> for
          AutoCAD/Revit Certified User. Begin{" "}
          <strong>personality development</strong> with baseline assessment.
        </>
      ),
    },
    {
      text: "Project Management & Professional Skills",
      month: "Month 2",
      category: { tag: "Industry Tools", bgColor: "#2b2b2b", color: "#ffffff" },
      short:
        "Learn project management with MS Project. Master BOQ estimation and structural basics.",
      details: (
        <>
          Master{" "}
          <strong>
            Gantt charts, resource allocation, Critical Path Method
          </strong>
          . Understand <strong>RCC & load distribution</strong>. Practice{" "}
          <strong>quantity surveying and costing</strong>. Build communication
          skills through <strong>mock client meetings</strong>, LinkedIn profile
          setup, and presentation training.
        </>
      ),
    },
    {
      text: "AI in Civil Engineering",
      month: "Week 9",
      category: { tag: "Future Tech", bgColor: "#f5f5f5", color: "#2b2b2b" },
      short:
        "Explore AI applications in modern civil engineering and construction.",
      details: (
        <>
          Learn <strong>generative design & automation</strong> in
          AutoCAD/Revit. Understand{" "}
          <strong>AI-powered project scheduling</strong>,{" "}
          <strong>computer vision for safety</strong>, and clash detection.
          Create your own <strong>AI integration mini-project</strong>.
        </>
      ),
    },
    {
      text: "Internship & Career Launch",
      month: "Month 3",
      category: { tag: "Career Ready", bgColor: "#e83f25", color: "#ffffff" },
      short:
        "Get real site experience, build your professional portfolio, and ace interviews.",
      details: (
        <>
          Work on <strong>actual construction sites</strong> with mentor
          guidance. Compile complete portfolio with{" "}
          <strong>floor plans, BOQ reports, schedules, and AI projects</strong>.{" "}
          <strong>CV refinement, mock interviews</strong>, final personality
          assessment. Graduate with <strong>industry certification</strong> and
          job-ready skills.
        </>
      ),
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Design - Circles Top Right with more elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e83f25] rounded-full opacity-10 -translate-y-32 translate-x-32"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-[#2b2b2b] rounded-full opacity-8"></div>

      {/* Additional elements scattered around */}
      <div className="absolute bottom-1/4 left-10 w-32 h-32 border-4 border-[#e83f25] rounded-full opacity-10"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-[#2b2b2b] opacity-6 rotate-45"></div>
      <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-[#e83f25] opacity-8"></div>
      <div className="absolute top-2/3 right-10 w-16 h-16 border-4 border-[#2b2b2b] opacity-8 rotate-12"></div>
      <div className="absolute bottom-1/3 left-1/3 w-28 h-28 rounded-full bg-[#e83f25] opacity-6"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold font-[Antonio]">
            90-DAY <span className="text-[#e83f25]">CURRICULUM</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[Inter]">
            A structured learning path designed to transform you from beginner
            to job-ready professional
          </p>
        </div>

        {/* Timeline */}
        <div className="relative my-10 flex flex-col after:absolute after:left-[20px] lg:after:left-[calc(50%_-_2px)] after:h-full after:w-1 after:bg-border after:content-['']">
          {timelineData.map((data, idx) => {
            const isExpanded = expandedIndex === idx;
            const isOdd = idx % 2 !== 0;

            return (
              <div
                key={idx}
                className={`group relative my-[10px] flex w-full pl-[50px] lg:w-1/2 lg:pl-0 ${
                  isOdd
                    ? "lg:justify-start lg:self-end lg:pl-[30px]"
                    : "lg:justify-end lg:pr-[30px]"
                }`}
              >
                <div
                  className={`relative flex w-full lg:max-w-[95%] flex-col rounded-xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-all items-start text-left ${
                    isOdd
                      ? "lg:items-start lg:text-left"
                      : "lg:items-end lg:text-right"
                  } after:absolute after:top-[calc(50%-7.5px)] after:left-[-7.5px] after:shadow-[-1px_1px_1px_rgba(0,0,0,0.1)] ${
                    isOdd
                      ? "lg:after:left-[-7.5px] lg:after:shadow-[-1px_1px_1px_rgba(0,0,0,0.1)]"
                      : "lg:after:right-[-7.5px] lg:after:left-auto lg:after:shadow-[1px_-1px_1px_rgba(0,0,0,0.1)]"
                  } after:h-4 after:w-4 after:rotate-45 after:bg-card after:border-l after:border-t after:border-border after:content-['']`}
                >
                  {/* Category Tag */}
                  <span
                    className={`absolute top-4 px-3 py-1.5 text-xs font-bold tracking-wider uppercase rounded-md left-4 ${
                      isOdd ? "lg:left-4" : "lg:right-4 lg:left-auto"
                    }`}
                    style={{
                      backgroundColor: data.category.bgColor,
                      color: data.category.color,
                    }}
                  >
                    {data.category.tag}
                  </span>

                  {/* Month */}
                  <time
                    className={`mt-12 text-sm font-semibold text-[#e83f25] self-start font-[Oswald] ${
                      isOdd ? "lg:self-start" : "lg:self-end"
                    }`}
                  >
                    {data.month}
                  </time>

                  {/* Title */}
                  <h3
                    className={`my-3 text-xl font-bold text-left font-[Antonio] ${
                      isOdd ? "lg:text-left" : "lg:text-right"
                    }`}
                  >
                    {data.text}
                  </h3>

                  {/* Short Description */}
                  <p
                    className={`mb-3 text-sm text-muted-foreground leading-relaxed text-left font-[Inter] ${
                      isOdd ? "lg:text-left" : "lg:text-right"
                    }`}
                  >
                    {data.short}
                  </p>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <p
                      className={`mb-4 text-sm text-muted-foreground leading-relaxed text-left font-[Inter] ${
                        isOdd ? "lg:text-left" : "lg:text-right"
                      }`}
                    >
                      {data.details}
                    </p>
                  )}

                  {/* Learn More Button */}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className={`flex items-center gap-2 text-sm font-medium text-[#e83f25] hover:text-[#d63620] transition-colors self-start font-[Inter] ${
                      isOdd ? "lg:self-start" : "lg:self-end"
                    }`}
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Learn More <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Timeline Dot */}
                  <span
                    className={`absolute top-[calc(50%-10px)] z-10 h-5 w-5 rounded-full border-4 border-[#e83f25] bg-background -left-[42px] ${
                      isOdd
                        ? "lg:-left-[42px]"
                        : "lg:-right-[42px] lg:left-auto"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href=""
            download
            className="px-8 py-4 bg-[#e83f25] text-white rounded-lg font-semibold hover:bg-[#d63620] transition-all text-lg font-[Antonio]"
          >
            Download Complete Syllabus
          </a>

          <a
            href="/90 Days TCS Bootcamp.pdf"
            download
            className="px-8 py-4 bg-transparent border-2 border-[#e83f25] text-[#e83f25] rounded-lg font-semibold hover:bg-[#e83f25] hover:text-white transition-all text-lg font-[Antonio]"
          >
            View Detailed Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
