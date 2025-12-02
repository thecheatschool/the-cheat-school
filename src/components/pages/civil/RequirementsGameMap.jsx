import React, { useState } from 'react';
import { MapPin, Award, X, TrendingUp, Video, CheckCircle, Star, Lock, Zap } from 'lucide-react';
import SocialMediaSchedule from './SocialMediaSchedule';
import InternshipDocumentation from './InternshipDocumentation';
import CertificationMetrics from './CertificationMetrics';

const RequirementsGameMap = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (checkpointId) => {
    setActiveModal(checkpointId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Game-style background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, currentColor 50px, currentColor 51px),
                         repeating-linear-gradient(90deg, transparent, transparent 50px, currentColor 50px, currentColor 51px)`
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold font-[Antonio]">
            YOUR CORE <span className="text-primary">RESPONSIBILITIES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[Inter]">
            Navigate through checkpoints and unlock your certification
          </p>
        </div>

        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden md:block relative max-w-6xl mx-auto" style={{ minHeight: '1000px' }}>
          {/* SVG Winding Path */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 800 1000"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: '100%', height: '1000px' }}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <path
              d="M 150 100 Q 250 100, 350 200 T 550 350 Q 600 400, 450 500 T 350 650 Q 300 700, 400 800 T 500 900"
              fill="none"
              stroke="#e83f25"
              strokeWidth="6"
              strokeLinecap="round"
              strokeOpacity="0.6"
              filter="url(#glow)"
            />
            
            <path
              d="M 150 100 Q 250 100, 350 200 T 550 350 Q 600 400, 450 500 T 350 650 Q 300 700, 400 800 T 500 900"
              fill="none"
              stroke="#e83f25"
              strokeWidth="2"
              strokeDasharray="15 15"
              opacity="0.3"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="30"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>

            <circle cx="150" cy="100" r="10" fill="#e83f25" opacity="0.8">
              <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="550" cy="350" r="10" fill="#e83f25" opacity="0.8" />
            <circle cx="500" cy="900" r="12" fill="#e83f25" opacity="0.8">
              <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Checkpoint 1 - Desktop */}
          <div className="absolute" style={{ 
            left: 'min(2%, 20px)', 
            top: '0', 
            width: 'min(380px, 35%)',
            minWidth: '300px'
          }}>
            <button
              onClick={() => openModal('social')}
              className="group relative w-full bg-card rounded-3xl overflow-hidden border-4 border-primary shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 hover:-rotate-2"
            >
              <div className="bg-primary h-3 w-full"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-white rounded-lg px-3 py-1 text-xs font-bold font-[Inter]">
                      LEVEL 1
                    </div>
                    <div className="flex gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-full p-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-[Antonio] mb-2 group-hover:text-primary transition-colors">
                  Social Media Quest
                </h3>
                <p className="text-sm text-muted-foreground font-[Inter] mb-4">
                  Build your professional brand across platforms
                </p>
                <div className="bg-muted rounded-lg p-3 mb-4 space-y-2">
                  <div className="flex items-center justify-between text-xs font-[Inter]">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-bold">Weeks 1-12</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-[Inter]">
                    <span className="text-muted-foreground">Frequency</span>
                    <span className="font-bold text-primary">2-3x Weekly</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-[Inter] text-primary font-bold">
                  <Zap className="w-4 h-4" />
                  <span>CLICK TO VIEW MISSIONS</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full"></div>
            </button>
          </div>

          {/* Checkpoint 2 - Desktop */}
          <div className="absolute" style={{ 
            right: 'min(2%, 20px)', 
            top: '280px', 
            width: 'min(380px, 35%)',
            minWidth: '300px'
          }}>
            <button
              onClick={() => openModal('internship')}
              className="group relative w-full bg-card rounded-3xl overflow-hidden border-4 border-secondary shadow-2xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 hover:rotate-2"
            >
              <div className="bg-secondary h-3 w-full"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-secondary text-white rounded-lg px-3 py-1 text-xs font-bold font-[Inter]">
                      LEVEL 2
                    </div>
                    <div className="flex gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                  <div className="bg-secondary/10 rounded-full p-2">
                    <Video className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-[Antonio] mb-2 group-hover:text-secondary transition-colors">
                  Field Documentation
                </h3>
                <p className="text-sm text-muted-foreground font-[Inter] mb-4">
                  Capture your real-world learning journey
                </p>
                <div className="bg-muted rounded-lg p-3 mb-4 space-y-2">
                  <div className="flex items-center justify-between text-xs font-[Inter]">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-bold">Month 3</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-[Inter]">
                    <span className="text-muted-foreground">Tasks</span>
                    <span className="font-bold text-secondary">Videos + Photos</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-[Inter] text-secondary font-bold">
                  <Zap className="w-4 h-4" />
                  <span>CLICK TO VIEW MISSIONS</span>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-20 h-20 bg-secondary/10 rounded-br-full"></div>
            </button>
          </div>

          {/* Checkpoint 3 - Desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0" style={{ 
            width: 'min(420px, 40%)',
            minWidth: '320px',
            marginLeft: 'min(-80px, -5%)'
          }}>
            <button
              onClick={() => openModal('certification')}
              className="group relative w-full bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl overflow-hidden border-4 border-primary shadow-2xl hover:shadow-primary/70 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <div className="relative p-8 text-white">
                <h3 className="text-3xl font-bold font-[Antonio] mb-3 text-center">
                  Certification Unlocked
                </h3>
                <p className="text-sm text-white/90 font-[Inter] mb-6 text-center">
                  Complete all missions to earn your legendary certificate
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 space-y-2 border border-white/20">
                  <div className="flex items-center justify-between text-sm font-[Inter]">
                    <span>Final Submission</span>
                    <span className="font-bold">Week 13</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-[Inter]">
                    <span>Requirements</span>
                    <span className="font-bold">100% Complete</span>
                  </div>
                </div>
                <div className="bg-white text-primary rounded-xl py-3 text-center font-bold text-sm font-[Inter] group-hover:scale-105 transition-transform">
                  ⚡ VIEW FINAL MISSIONS ⚡
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <Star className="w-6 h-6 text-yellow-300 fill-yellow-300 animate-pulse" />
              </div>
              <div className="absolute top-4 left-4">
                <Star className="w-6 h-6 text-yellow-300 fill-yellow-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="md:hidden relative max-w-md mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary opacity-40"></div>
          
          {/* Animated dots on line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[15%]">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[48%]">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[82%]">
            <div className="w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="space-y-8 relative z-10">
            {/* Card 1 - Mobile */}
            <button
              onClick={() => openModal('social')}
              className="group relative w-full bg-card rounded-2xl overflow-hidden border-4 border-primary shadow-xl active:scale-95 transition-all duration-200"
            >
              <div className="bg-primary h-2 w-full"></div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-white rounded-lg px-2 py-1 text-xs font-bold font-[Inter]">
                      LEVEL 1
                    </div>
                    <div className="flex gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-full p-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-[Antonio] mb-2">
                  Social Media Quest
                </h3>
                <p className="text-xs text-muted-foreground font-[Inter] mb-3">
                  Build your professional brand across platforms
                </p>
                <div className="bg-muted rounded-lg p-2 mb-3 space-y-1">
                  <div className="flex items-center justify-between text-xs font-[Inter]">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-bold">Weeks 1-12</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-[Inter]">
                    <span className="text-muted-foreground">Frequency</span>
                    <span className="font-bold text-primary">2-3x Weekly</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-[Inter] text-primary font-bold">
                  <Zap className="w-4 h-4" />
                  <span>TAP TO VIEW MISSIONS</span>
                </div>
              </div>
            </button>

            {/* Card 2 - Mobile */}
            <button
              onClick={() => openModal('internship')}
              className="group relative w-full bg-card rounded-2xl overflow-hidden border-4 border-secondary shadow-xl active:scale-95 transition-all duration-200"
            >
              <div className="bg-secondary h-2 w-full"></div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-secondary text-white rounded-lg px-2 py-1 text-xs font-bold font-[Inter]">
                      LEVEL 2
                    </div>
                    <div className="flex gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                  <div className="bg-secondary/10 rounded-full p-2">
                    <Video className="w-5 h-5 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-[Antonio] mb-2">
                  Field Documentation
                </h3>
                <p className="text-xs text-muted-foreground font-[Inter] mb-3">
                  Capture your real-world learning journey
                </p>
                <div className="bg-muted rounded-lg p-2 mb-3 space-y-1">
                  <div className="flex items-center justify-between text-xs font-[Inter]">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-bold">Month 3</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-[Inter]">
                    <span className="text-muted-foreground">Tasks</span>
                    <span className="font-bold text-secondary">Videos + Photos</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-[Inter] text-secondary font-bold">
                  <Zap className="w-4 h-4" />
                  <span>TAP TO VIEW MISSIONS</span>
                </div>
              </div>
            </button>

            {/* Card 3 - Mobile */}
            <button
              onClick={() => openModal('certification')}
              className="group relative w-full bg-gradient-to-br from-primary via-primary to-primary/80 rounded-2xl overflow-hidden border-4 border-primary shadow-xl active:scale-95 transition-all duration-200"
            >
              <div className="relative p-6 text-white">
                <h3 className="text-2xl font-bold font-[Antonio] mb-2 text-center">
                  Certification Unlocked
                </h3>
                <p className="text-xs text-white/90 font-[Inter] mb-4 text-center">
                  Complete all missions to earn your legendary certificate
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-3 space-y-1 border border-white/20">
                  <div className="flex items-center justify-between text-xs font-[Inter]">
                    <span>Final Submission</span>
                    <span className="font-bold">Week 13</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-[Inter]">
                    <span>Requirements</span>
                    <span className="font-bold">100% Complete</span>
                  </div>
                </div>
                <div className="bg-white text-primary rounded-xl py-2 text-center font-bold text-xs font-[Inter]">
                  ⚡ TAP TO VIEW MISSIONS ⚡
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300 animate-pulse" />
              </div>
              <div className="absolute top-3 left-3">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={closeModal}
          ></div>
          
          <div className="relative bg-background rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border-2 border-primary">
            <button
              onClick={closeModal}
              className="sticky top-4 right-4 float-right z-10 bg-primary text-white rounded-full p-2 hover:scale-110 transition-transform shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="clear-both">
              {activeModal === 'social' && <SocialMediaSchedule />}
              {activeModal === 'internship' && <InternshipDocumentation />}
              {activeModal === 'certification' && <CertificationMetrics />}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RequirementsGameMap;