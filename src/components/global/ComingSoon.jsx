import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Video,
  Calendar,
  TrendingUp,
  CheckCircle,
  Camera,
  FileVideo,
  ChevronDown,
} from "lucide-react";

const ComingSoon = () => {
  const [currentLayout, setCurrentLayout] = useState(0);

  const layouts = [
    // Option 1: Timeline/Progress Flow
    {
      name: "Timeline Progress Flow",
      component: (
        <div className="w-full py-16 px-6 bg-gray-50">
          <h2 className="text-4xl font-bold text-center mb-12">
            Program Journey
          </h2>

          <div className="max-w-5xl mx-auto relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-red-500/20 transform -translate-x-1/2"></div>

            {/* Stage 1 */}
            <div className="flex items-center mb-16 relative">
              <div className="w-1/2 pr-12 text-right">
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-red-500/20">
                  <TrendingUp className="w-8 h-8 text-red-500 ml-auto mb-2" />
                  <h3 className="text-xl font-bold mb-2">Social Media</h3>
                  <p className="text-sm text-gray-600">2-3 posts weekly</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-gray-50 absolute left-1/2 transform -translate-x-1/2 z-10"></div>
              <div className="w-1/2"></div>
            </div>

            {/* Stage 2 */}
            <div className="flex items-center mb-16 relative">
              <div className="w-1/2"></div>
              <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-gray-50 absolute left-1/2 transform -translate-x-1/2 z-10"></div>
              <div className="w-1/2 pl-12">
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-red-500/20">
                  <Video className="w-8 h-8 text-red-500 mb-2" />
                  <h3 className="text-xl font-bold mb-2">Internship Docs</h3>
                  <p className="text-sm text-gray-600">
                    Videos & photos weekly
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="flex items-center relative">
              <div className="w-1/2 pr-12 text-right">
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-red-500/20">
                  <CheckCircle className="w-8 h-8 text-red-500 ml-auto mb-2" />
                  <h3 className="text-xl font-bold mb-2">Certification</h3>
                  <p className="text-sm text-gray-600">Final evaluation</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-gray-50 absolute left-1/2 transform -translate-x-1/2 z-10"></div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
      ),
    },

    // Option 2: Tab System
    {
      name: "Tab System",
      component: (() => {
        const [activeTab, setActiveTab] = useState(0);
        const tabs = [
          {
            name: "Social Media",
            icon: TrendingUp,
            content: "2-3 posts per week on LinkedIn/Twitter",
          },
          {
            name: "Internship",
            icon: Video,
            content: "Videos, photos, and weekly reflections",
          },
          {
            name: "Certification",
            icon: CheckCircle,
            content: "Complete all assignments & projects",
          },
        ];

        return (
          <div className="w-full py-16 px-6 bg-white">
            <h2 className="text-4xl font-bold text-center mb-12">
              Documentation Requirements
            </h2>

            <div className="max-w-4xl mx-auto">
              {/* Tab Headers */}
              <div className="flex border-b-2 border-gray-200 mb-8">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 py-4 px-6 font-semibold transition-all ${
                      activeTab === index
                        ? "border-b-4 border-red-500 text-red-500 -mb-0.5"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <tab.icon className="w-5 h-5 inline mr-2" />
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-gray-50 rounded-xl p-8 min-h-[300px]">
                <div className="flex items-start gap-4">
                  {React.createElement(tabs[activeTab].icon, {
                    className: "w-12 h-12 text-red-500",
                  })}
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {tabs[activeTab].name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {tabs[activeTab].content}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Requirement 1</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Requirement 2</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Requirement 3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })(),
    },

    // Option 3: Accordion/Expandable Cards
    {
      name: "Accordion Expandable",
      component: (() => {
        const [expanded, setExpanded] = useState(0);
        const sections = [
          {
            title: "Social Media Schedule",
            icon: TrendingUp,
            color: "bg-blue-500",
          },
          {
            title: "Internship Documentation",
            icon: Video,
            color: "bg-purple-500",
          },
          {
            title: "Certification Metrics",
            icon: CheckCircle,
            color: "bg-green-500",
          },
        ];

        return (
          <div className="w-full py-16 px-6 bg-gray-50">
            <h2 className="text-4xl font-bold text-center mb-12">
              Program Requirements
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setExpanded(expanded === index ? -1 : index)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center`}
                      >
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{section.title}</h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform ${
                        expanded === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expanded === index && (
                    <div className="px-6 pb-6 bg-gray-50">
                      <p className="text-gray-600 mb-4">
                        Details about {section.title.toLowerCase()}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Item 1</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Item 2</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Item 3</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })(),
    },

    // Option 4: Split-Screen Layout
    {
      name: "Split-Screen Dashboard",
      component: (
        <div className="w-full h-[600px] flex bg-white">
          {/* Left Sidebar - Sticky */}
          <div className="w-1/3 bg-gray-900 text-white p-8">
            <h2 className="text-3xl font-bold mb-8">Requirements</h2>
            <nav className="space-y-4">
              <button className="w-full text-left p-4 bg-red-500 rounded-lg flex items-center gap-3">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Social Media</span>
              </button>
              <button className="w-full text-left p-4 hover:bg-gray-800 rounded-lg flex items-center gap-3">
                <Video className="w-5 h-5" />
                <span className="font-semibold">Internship</span>
              </button>
              <button className="w-full text-left p-4 hover:bg-gray-800 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Certification</span>
              </button>
            </nav>

            <div className="mt-12 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300">
                Complete all sections to earn certification
              </p>
            </div>
          </div>

          {/* Right Content Area - Scrollable */}
          <div className="flex-1 p-8 overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6">Social Media Schedule</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Frequency</p>
                <p className="text-sm text-gray-600">2-3 times per week</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Platform</p>
                <p className="text-sm text-gray-600">LinkedIn/Twitter</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm">Post learning updates</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm">Share project progress</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm">Document journey</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Option 5: Icon-First Minimal Cards
    {
      name: "Icon-First Minimal",
      component: (
        <div className="w-full py-16 px-6 bg-white">
          <h2 className="text-4xl font-bold text-center mb-16">
            What You'll Submit
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-shadow">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Social Posts</h3>
              <p className="text-4xl font-bold text-blue-500 mb-2">2-3</p>
              <p className="text-gray-600 text-sm">per week</p>
              <button className="mt-4 text-sm text-blue-500 hover:underline">
                Learn more →
              </button>
            </div>

            {/* Card 2 */}
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-shadow">
                <Video className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Videos</h3>
              <p className="text-4xl font-bold text-purple-500 mb-2">Weekly</p>
              <p className="text-gray-600 text-sm">documentation</p>
              <button className="mt-4 text-sm text-purple-500 hover:underline">
                Learn more →
              </button>
            </div>

            {/* Card 3 */}
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-shadow">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Projects</h3>
              <p className="text-4xl font-bold text-green-500 mb-2">All</p>
              <p className="text-gray-600 text-sm">assignments</p>
              <button className="mt-4 text-sm text-green-500 hover:underline">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      ),
    },

    // Option 6: Horizontal Scroll Carousel
    {
      name: "Horizontal Carousel",
      component: (() => {
        const [slide, setSlide] = useState(0);
        const slides = [
          {
            title: "Social Media",
            icon: TrendingUp,
            color: "from-blue-500 to-blue-600",
            desc: "Build your professional presence",
          },
          {
            title: "Internship Videos",
            icon: Video,
            color: "from-purple-500 to-purple-600",
            desc: "Document your learning journey",
          },
          {
            title: "Final Certification",
            icon: CheckCircle,
            color: "from-green-500 to-green-600",
            desc: "Complete all requirements",
          },
        ];

        return (
          <div className="w-full py-16 px-6 bg-gray-50 relative">
            <h2 className="text-4xl font-bold text-center mb-12">
              Your Journey Steps
            </h2>

            <div className="max-w-2xl mx-auto relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                {slides.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div
                      className={`bg-gradient-to-br ${item.color} rounded-2xl p-12 text-white text-center h-[400px] flex flex-col justify-center shadow-2xl`}
                    >
                      <item.icon className="w-20 h-20 mx-auto mb-6" />
                      <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                      <p className="text-lg opacity-90 mb-8">{item.desc}</p>
                      <div className="space-y-2">
                        <div className="bg-white/20 rounded-lg p-3 text-sm">
                          Requirement 1
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 text-sm">
                          Requirement 2
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 text-sm">
                          Requirement 3
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setSlide(Math.max(0, slide - 1))}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
                disabled={slide === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setSlide(Math.min(slides.length - 1, slide + 1))}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
                disabled={slide === slides.length - 1}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      slide === index ? "bg-gray-800 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })(),
    },
  ];

  const nextLayout = () => {
    setCurrentLayout((prev) => (prev + 1) % layouts.length);
  };

  const prevLayout = () => {
    setCurrentLayout((prev) => (prev - 1 + layouts.length) % layouts.length);
  };

  return (
    <div className="w-full min-h-screen relative bg-gray-100">
      {/* Current Layout */}
      <div className="min-h-screen">{layouts[currentLayout].component}</div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-full shadow-2xl border border-gray-200">
        <button
          onClick={prevLayout}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Previous layout"
        >
          <ChevronLeft size={24} className="text-gray-700" />
        </button>

        <div className="text-center min-w-[250px]">
          <div className="text-sm font-bold text-gray-900">
            {layouts[currentLayout].name}
          </div>
          <div className="text-xs text-gray-500">
            Option {currentLayout + 1} of {layouts.length}
          </div>
        </div>

        <button
          onClick={nextLayout}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Next layout"
        >
          <ChevronRight size={24} className="text-gray-700" />
        </button>
      </div>

      {/* Layout Selector Dots */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {layouts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentLayout(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentLayout === index
                ? "bg-red-500 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to layout ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
