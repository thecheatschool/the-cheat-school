import { ArrowRight, BookOpen } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen mt-6 bg-background flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-39 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-[#e83f25]/10 rounded-full border border-[#e83f25]/20">
            <span className="text-[#e83f25] text-sm font-medium" style={{fontFamily: 'var(--font-secondary)'}}>
              3-Month Intensive Program
            </span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight" style={{fontFamily: 'var(--font-primary)'}}>
            MASTER YOUR
            <span className="block text-[#e83f25]">CRAFT IN 90 DAYS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl" style={{fontFamily: 'var(--font-secondary)'}}>
            Transform your career with industry-leading courses designed by experts. Learn, build, and launch your future.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-[#e83f25] text-white rounded-lg font-semibold hover:bg-[#d63620] transition-all flex items-center gap-2 group">
              Start Learning <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-border rounded-lg font-semibold hover:border-[#e83f25] transition-all">
              View Courses
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-[#e83f25]" style={{fontFamily: 'var(--font-primary)'}}>5000+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#e83f25]" style={{fontFamily: 'var(--font-primary)'}}>94%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#e83f25]" style={{fontFamily: 'var(--font-primary)'}}>50+</div>
              <div className="text-sm text-muted-foreground">Expert Mentors</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#e83f25]/20 to-transparent rounded-3xl blur-3xl"></div>
          <div className="relative bg-card border border-border rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-border">
              <div className="w-12 h-12 bg-[#e83f25]/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#e83f25]" />
              </div>
              <div>
                <div className="font-semibold">Next Batch Starts</div>
                <div className="text-sm text-muted-foreground">December 1, 2025</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-semibold">12 Weeks</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Format</span>
                <span className="font-semibold">Online + Live</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Projects</span>
                <span className="font-semibold">5 Real-World</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Certificate</span>
                <span className="font-semibold">Industry Recognized</span>
              </div>
            </div>
            <button className="w-full py-3 bg-[#e83f25] text-white rounded-lg font-semibold hover:bg-[#3a3a3a] transition-all">
              Reserve Your Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
