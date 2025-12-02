import React, { useState } from "react";
import { ChevronDown, ChevronUp, Clock, Video, BookOpen, Calendar, Share2, Sun, FileText, Briefcase } from "lucide-react";

const ScheduleTabs = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const dailySchedule = [
    {
      time: "9 AM - 10 AM",
      activity: "Quick Review & Class Prep",
      icon: BookOpen,
      category: { tag: "Morning Prep", bgColor: "#e83f25", color: "#ffffff" },
      short: "Review previous content and prepare for today's session",
      details: "Go through yesterday's notes, review AutoCAD/Revit concepts, prepare questions for class. Set daily learning goals and organize materials for the session.",
      deliverables: "AutoCAD, Revit, PM, BOQ, AI mini-week prep",
    },
    {
      time: "2 PM - 4 PM",
      activity: "Class / Practical Lab",
      icon: Clock,
      category: { tag: "Active Learning", bgColor: "#2b2b2b", color: "#ffffff" },
      short: "Structured learning with practical applications",
      details: "Attend instructor-led sessions, follow along with demonstrations, complete hands-on exercises. Practice with industry-standard tools and get real-time feedback.",
      deliverables: "Hands-on training with industry tools",
    },
    {
      time: "4 PM - 5 PM",
      activity: "Daily Reflection Video",
      icon: Video,
      category: { tag: "Reflection", bgColor: "#f5f5f5", color: "#2b2b2b" },
      short: "Create 1-minute video explaining today's learning",
      details: "Record a brief video summarizing what you learned, challenges faced, and key takeaways. Practice articulating technical concepts in simple terms.",
      deliverables: "Upload by 10 PM daily",
    },
    {
      time: "5 PM - 6 PM",
      activity: "Optional Practice / Assignment",
      icon: BookOpen,
      category: { tag: "Practice", bgColor: "#e83f25", color: "#ffffff" },
      short: "Refine drawings, schedules, or BOQ assignments",
      details: "Work on assigned projects, practice commands, refine your work quality. Complete mini-project tasks and prepare submissions for review.",
      deliverables: "Complete assigned mini-project tasks",
    },
  ];

  const weeklySchedule = [
    {
      day: "Sunday",
      task: "Weekly Goals Planning",
      deadline: "Submit by 12 PM",
      icon: Calendar,
      category: { tag: "Planning", bgColor: "#e83f25", color: "#ffffff" },
      short: "List goals and objectives for the upcoming week",
      details: "Set clear, measurable goals for the week ahead. Review last week's progress, identify areas for improvement, and plan your learning focus areas.",
    },
    {
      day: "Wednesday",
      task: "Weekly Video Update",
      deadline: "By 8 PM",
      icon: Video,
      category: { tag: "Update", bgColor: "#2b2b2b", color: "#ffffff" },
      short: "2-3 minute video summarizing learning & mini-project progress",
      details: "Create a comprehensive video update covering your weekly learnings, project progress, challenges overcome, and next steps. Practice professional presentation skills.",
    },
    {
      day: "Thursday",
      task: "Social Media Update",
      deadline: "By 10 PM",
      icon: Share2,
      category: { tag: "Social", bgColor: "#f5f5f5", color: "#2b2b2b" },
      short: "Post on LinkedIn/Twitter/X about learning progress",
      details: "Share your journey publicly. Post about new skills learned, projects completed, or interesting insights. Build your professional brand and network with industry professionals.",
    },
    {
      day: "Friday - Saturday",
      task: "Off Days / Catch-up",
      deadline: "Flexible",
      icon: Sun,
      category: { tag: "Rest", bgColor: "#e83f25", color: "#ffffff" },
      short: "Use for catch-up if needed or optional practice/reflection",
      details: "Take a break to recharge, or use this time to catch up on pending tasks. Optional: work on portfolio projects, explore advanced topics, or review weak areas.",
    }
  ];

  const monthlyDeliverables = [
    {
      month: "Month 1",
      category: { tag: "Software Mastery", bgColor: "#e83f25", color: "#ffffff" },
      items: [
        {
          title: "AutoCAD/Revit Project",
          deadline: "End of Week 4 (Thursday 4 PM)",
          icon: FileText,
          description: "Complete 2BHK floor plan project using AutoCAD & Revit",
          details: "Submit complete floor plans with proper layers, annotations, sections, and elevations. Include Revit model with schedules and families."
        },
        {
          title: "Personality Videos & Self-Intro",
          deadline: "Every Wednesday 8 PM",
          icon: Video,
          description: "Weekly personality development and self-introduction videos",
          details: "Record professional self-introduction videos, practice communication skills, and document your personality development journey."
        }
      ]
    },
    {
      month: "Month 2",
      category: { tag: "Industry Tools", bgColor: "#2b2b2b", color: "#ffffff" },
      items: [
        {
          title: "Progress Report",
          deadline: "End of Week 8 (Thursday 4 PM)",
          icon: FileText,
          description: "Detailed progress report on project management learning",
          details: "Submit comprehensive report covering MS Project learnings, Gantt charts, resource allocation, and Critical Path Method understanding."
        },
        {
          title: "AI Mini-Project",
          deadline: "End of Week 9 (Thursday 4 PM)",
          icon: FileText,
          description: "AI integration slides & demo video submission",
          details: "Present your AI integration project with slides and demo video. Show practical application of AI in civil engineering workflows."
        }
      ]
    },
    {
      month: "Month 3",
      category: { tag: "Career Ready", bgColor: "#f5f5f5", color: "#2b2b2b" },
      items: [
        {
          title: "Internship Documentation",
          deadline: "Every Thursday 10 PM",
          icon: Briefcase,
          description: "Weekly logs, on-field videos, and reflection videos",
          details: "Document your internship experience with detailed logs, on-site videos, and weekly reflections on real-world project exposure."
        },
        {
          title: "Final Portfolio",
          deadline: "Week 13 Thursday 4 PM",
          icon: FileText,
          description: "Complete professional portfolio submission",
          details: "Compile all projects, certifications, and work samples into a professional portfolio. Include floor plans, BOQ reports, schedules, and AI projects."
        },
        {
          title: "90-Day Journey Video",
          deadline: "Week 13 Thursday 10 PM",
          icon: Video,
          description: "Final video documenting entire learning journey",
          details: "Create a comprehensive video showcasing your complete transformation from beginner to job-ready professional over 90 days."
        }
      ]
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderDaily = () => (
    <div className="relative my-10 flex flex-col after:absolute after:left-[20px] after:h-full after:w-1 after:bg-border after:content-['']">
      {dailySchedule.map((data, idx) => {
        const isExpanded = expandedIndex === idx;

        return (
          <div
            key={idx}
            className="group relative my-[10px] flex w-full pl-[50px]"
          >
            <div
              className="relative flex w-full flex-col rounded-xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-all items-start text-left after:absolute after:top-[calc(50%-7.5px)] after:left-[-7.5px] after:shadow-[-1px_1px_1px_rgba(0,0,0,0.1)] after:h-4 after:w-4 after:rotate-45 after:bg-card after:border-l after:border-t after:border-border after:content-['']"
            >
              <span
                className="absolute top-4 px-3 py-1.5 text-xs font-bold tracking-wider uppercase rounded-md left-4"
                style={{
                  backgroundColor: data.category.bgColor,
                  color: data.category.color,
                }}
              >
                {data.category.tag}
              </span>

              <time
                className="mt-12 text-sm font-semibold text-[#e83f25] self-start font-[Oswald]"
              >
                {data.time}
              </time>

              <h3
                className="my-3 text-xl font-bold text-left font-[Antonio]"
              >
                {data.activity}
              </h3>

              <p
                className="mb-3 text-sm text-muted-foreground leading-relaxed text-left font-[Inter]"
              >
                {data.short}
              </p>

              {isExpanded && (
                <>
                  <p
                    className="mb-3 text-sm text-muted-foreground leading-relaxed text-left font-[Inter]"
                  >
                    {data.details}
                  </p>
                  <div
                    className="mb-4 bg-muted rounded-lg p-4 border border-border/50 w-full"
                  >
                    <p className="text-xs font-semibold text-[#e83f25] uppercase tracking-wide mb-1">
                      Deliverable
                    </p>
                    <p className="text-sm text-foreground font-[Inter]">
                      {data.deliverables}
                    </p>
                  </div>
                </>
              )}

              <button
                onClick={() => toggleExpand(idx)}
                className="flex items-center gap-2 text-sm font-medium text-[#e83f25] hover:text-[#d63620] transition-colors self-start font-[Inter]"
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

              <span
                className="absolute top-[calc(50%-10px)] z-10 h-5 w-5 rounded-full border-4 border-[#e83f25] bg-background -left-[42px]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderWeekly = () => (
    <div className="relative my-10 flex flex-col after:absolute after:left-[20px] after:h-full after:w-1 after:bg-border after:content-['']">
      {weeklySchedule.map((data, idx) => {
        const isExpanded = expandedIndex === idx;

        return (
          <div
            key={idx}
            className="group relative my-[10px] flex w-full pl-[50px]"
          >
            <div
              className="relative flex w-full flex-col rounded-xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-all items-start text-left after:absolute after:top-[calc(50%-7.5px)] after:left-[-7.5px] after:shadow-[-1px_1px_1px_rgba(0,0,0,0.1)] after:h-4 after:w-4 after:rotate-45 after:bg-card after:border-l after:border-t after:border-border after:content-['']"
            >
              <span
                className="absolute top-4 px-3 py-1.5 text-xs font-bold tracking-wider uppercase rounded-md left-4"
                style={{
                  backgroundColor: data.category.bgColor,
                  color: data.category.color,
                }}
              >
                {data.category.tag}
              </span>

              <time
                className="mt-12 text-sm font-semibold text-[#e83f25] self-start font-[Oswald]"
              >
                {data.day}
              </time>

              <h3
                className="my-3 text-xl font-bold text-left font-[Antonio]"
              >
                {data.task}
              </h3>

              <p
                className="mb-3 text-sm text-muted-foreground leading-relaxed text-left font-[Inter]"
              >
                {data.short}
              </p>

              {isExpanded && (
                <>
                  <p
                    className="mb-3 text-sm text-muted-foreground leading-relaxed text-left font-[Inter]"
                  >
                    {data.details}
                  </p>
                  <div
                    className="mb-4 bg-muted rounded-lg p-4 border border-border/50 w-full"
                  >
                    <p className="text-xs font-semibold text-[#e83f25] uppercase tracking-wide mb-1">
                      Deadline
                    </p>
                    <p className="text-sm text-foreground font-[Inter]">
                      {data.deadline}
                    </p>
                  </div>
                </>
              )}

              <button
                onClick={() => toggleExpand(idx)}
                className="flex items-center gap-2 text-sm font-medium text-[#e83f25] hover:text-[#d63620] transition-colors self-start font-[Inter]"
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

              <span
                className="absolute top-[calc(50%-10px)] z-10 h-5 w-5 rounded-full border-4 border-[#e83f25] bg-background -left-[42px]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderMonthly = () => (
    <div className="relative my-10 flex flex-col after:absolute after:left-[20px] after:h-full after:w-1 after:bg-border after:content-['']">
      {monthlyDeliverables.map((monthData, idx) => {
        const isExpanded = expandedIndex === idx;

        return (
          <div
            key={idx}
            className="group relative my-[10px] flex w-full pl-[50px]"
          >
            <div
              className="relative flex w-full flex-col rounded-xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-all items-start text-left after:absolute after:top-[calc(50%-7.5px)] after:left-[-7.5px] after:shadow-[-1px_1px_1px_rgba(0,0,0,0.1)] after:h-4 after:w-4 after:rotate-45 after:bg-card after:border-l after:border-t after:border-border after:content-['']"
            >
              <span
                className="absolute top-4 px-3 py-1.5 text-xs font-bold tracking-wider uppercase rounded-md left-4"
                style={{
                  backgroundColor: monthData.category.bgColor,
                  color: monthData.category.color,
                }}
              >
                {monthData.category.tag}
              </span>

              <time
                className="mt-12 text-sm font-semibold text-[#e83f25] self-start font-[Oswald]"
              >
                {monthData.month}
              </time>

              <h3
                className="my-3 text-xl font-bold text-left font-[Antonio] mb-4"
              >
                Monthly Deliverables
              </h3>

              <div className="space-y-4 w-full">
                {monthData.items.slice(0, isExpanded ? monthData.items.length : 1).map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-[#e83f25] pl-4 py-2">
                    <div className="flex items-start gap-3 mb-2">
                      <item.icon className="w-5 h-5 text-[#e83f25] mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-left">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 text-left">{item.description}</p>
                        {isExpanded && (
                          <p className="text-xs text-muted-foreground mt-2 text-left">{item.details}</p>
                        )}
                      </div>
                    </div>
                    <div className="bg-muted rounded px-3 py-1 inline-block">
                      <span className="text-xs font-semibold">{item.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => toggleExpand(idx)}
                className="flex items-center gap-2 text-sm font-medium text-[#e83f25] hover:text-[#d63620] transition-colors self-start font-[Inter] mt-4"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show All ({monthData.items.length}) <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>

              <span
                className="absolute top-[calc(50%-10px)] z-10 h-5 w-5 rounded-full border-4 border-[#e83f25] bg-background -left-[42px]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e83f25] rounded-full opacity-10 -translate-y-32 translate-x-32"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-[#2b2b2b] rounded-full opacity-8"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 border-4 border-[#e83f25] rounded-full opacity-10"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-[#2b2b2b] opacity-6 rotate-45"></div>
      <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-[#e83f25] opacity-8"></div>
      <div className="absolute top-2/3 right-10 w-16 h-16 border-4 border-[#2b2b2b] opacity-8 rotate-12"></div>
      <div className="absolute bottom-1/3 left-1/3 w-28 h-28 rounded-full bg-[#e83f25] opacity-6"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold font-[Antonio]">
            YOUR <span className="text-[#e83f25]">SCHEDULE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[Inter]">
            A structured learning path designed to transform you from beginner to job-ready professional
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => {
              setActiveTab("daily");
              setExpandedIndex(null);
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition-all font-[Antonio] ${
              activeTab === "daily"
                ? "bg-[#e83f25] text-white"
                : "bg-card border border-border text-foreground hover:border-[#e83f25]"
            }`}
          >
            Daily Schedule
          </button>
          <button
            onClick={() => {
              setActiveTab("weekly");
              setExpandedIndex(null);
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition-all font-[Antonio] ${
              activeTab === "weekly"
                ? "bg-[#e83f25] text-white"
                : "bg-card border border-border text-foreground hover:border-[#e83f25]"
            }`}
          >
            Weekly Tasks
          </button>
          <button
            onClick={() => {
              setActiveTab("monthly");
              setExpandedIndex(null);
            }}
            className={`px-6 py-3 rounded-lg font-semibold transition-all font-[Antonio] ${
              activeTab === "monthly"
                ? "bg-[#e83f25] text-white"
                : "bg-card border border-border text-foreground hover:border-[#e83f25]"
            }`}
          >
            Monthly Deliverables
          </button>
        </div>

        {activeTab === "daily" && renderDaily()}
        {activeTab === "weekly" && renderWeekly()}
        {activeTab === "monthly" && renderMonthly()}
      </div>
    </section>
  );
};

export default ScheduleTabs;