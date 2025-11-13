import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Features = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const timelineData = [
    {
      text: 'Master Frontend Fundamentals',
      week: 'Week 1-2',
      category: { tag: 'foundation', bgColor: '#e83f25', color: '#ffffff' },
      details: 'Deep dive into HTML5, CSS3, JavaScript ES6+, DOM manipulation, responsive design principles, and modern CSS frameworks. Build 2 responsive landing pages.',
    },
    {
      text: 'React & Component Architecture',
      week: 'Week 3-4',
      category: { tag: 'frontend', bgColor: '#2b2b2b', color: '#ffffff' },
      details: 'Learn React fundamentals, hooks, state management, component lifecycle, props, and context API. Build a dynamic single-page application with routing.',
    },
    {
      text: 'Backend Development with Node.js',
      week: 'Week 5-6',
      category: { tag: 'backend', bgColor: '#f5f5f5', color: '#2b2b2b' },
      details: 'Master Node.js, Express.js, RESTful APIs, authentication, authorization, JWT tokens, and middleware. Create a complete REST API with CRUD operations.',
    },
    {
      text: 'Database Design & Integration',
      week: 'Week 7-8',
      category: { tag: 'database', bgColor: '#e83f25', color: '#ffffff' },
      details: 'Learn MongoDB, PostgreSQL, database schema design, relationships, queries, indexing, and optimization. Integrate databases with your backend APIs.',
    },
    {
      text: 'Full Stack Integration & Deployment',
      week: 'Week 9-10',
      category: { tag: 'deployment', bgColor: '#2b2b2b', color: '#ffffff' },
      details: 'Connect frontend and backend, implement real-time features with WebSockets, deploy to cloud platforms (AWS, Heroku), CI/CD pipelines, and monitoring.',
    },
    {
      text: 'Capstone Project & Portfolio Building',
      week: 'Week 11-12',
      category: { tag: 'project', bgColor: '#f5f5f5', color: '#2b2b2b' },
      details: 'Build a complete full-stack application from scratch, implement best practices, write documentation, optimize performance, and prepare your portfolio for job applications.',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold" style={{fontFamily: 'var(--font-primary)'}}>
            12-WEEK <span className="text-[#e83f25]">CURRICULUM</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{fontFamily: 'var(--font-secondary)'}}>
            A structured learning path designed to transform you from beginner to job-ready professional
          </p>
        </div>

        {/* Timeline */}
        <div className="relative my-10 flex flex-col after:absolute after:left-[calc(50%_-_2px)] after:h-full after:w-1 after:bg-border after:content-['']">
          {timelineData.map((data, idx) => {
            const isExpanded = expandedIndex === idx;
            const isOdd = idx % 2 !== 0;

            return (
              <div
                key={idx}
                className={`group relative my-[10px] flex w-1/2 ${
                  isOdd 
                    ? 'justify-start self-end pl-[30px]' 
                    : 'justify-end pr-[30px]'
                }`}
              >
                <div className={`relative flex w-full max-w-[95%] flex-col rounded-xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-all ${
                  isOdd ? 'items-start text-left' : 'items-end text-right'
                } after:absolute after:top-[calc(50%-7.5px)] ${
                  isOdd 
                    ? 'after:left-[-7.5px] after:shadow-[-1px_1px_1px_rgba(0,0,0,0.1)]' 
                    : 'after:right-[-7.5px] after:shadow-[1px_-1px_1px_rgba(0,0,0,0.1)]'
                } after:h-4 after:w-4 after:rotate-45 after:bg-card after:border-l after:border-t after:border-border after:content-['']`}>
                  
                  {/* Category Tag */}
                  <span
                    className={`absolute top-4 px-3 py-1.5 text-xs font-bold tracking-wider uppercase rounded-md ${
                      isOdd ? 'left-4' : 'right-4'
                    }`}
                    style={{ 
                      backgroundColor: data.category.bgColor, 
                      color: data.category.color 
                    }}
                  >
                    {data.category.tag}
                  </span>

                  {/* Week */}
                  <time className={`mt-12 text-sm font-semibold text-[#e83f25] ${isOdd ? 'self-start' : 'self-end'}`} style={{fontFamily: 'var(--font-teritiary)'}}>
                    {data.week}
                  </time>

                  {/* Title */}
                  <h3 className={`my-3 text-xl font-bold ${isOdd ? 'text-left' : 'text-right'}`} style={{fontFamily: 'var(--font-primary)'}}>
                    {data.text}
                  </h3>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <p className={`mb-4 text-sm text-muted-foreground leading-relaxed ${isOdd ? 'text-left' : 'text-right'}`} style={{fontFamily: 'var(--font-secondary)'}}>
                      {data.details}
                    </p>
                  )}

                  {/* Learn More Button */}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className={`flex items-center gap-2 text-sm font-medium text-[#e83f25] hover:text-[#d63620] transition-colors ${isOdd ? 'self-start' : 'self-end'}`}
                    style={{fontFamily: 'var(--font-secondary)'}}
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
                  <span className={`absolute top-[calc(50%-10px)] z-10 h-5 w-5 rounded-full border-4 border-[#e83f25] bg-background ${
                    isOdd ? '-left-[42px]' : '-right-[42px]'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-[#e83f25] text-white rounded-lg font-semibold hover:bg-[#d63620] transition-all text-lg">
            Download Full Curriculum
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;