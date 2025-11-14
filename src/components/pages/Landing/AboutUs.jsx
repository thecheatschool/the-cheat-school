import React from "react";
import {
  BookOpen,
  Users,
  Award,
  Code,
  Monitor,
  Palette,
  Briefcase,
  Target,
} from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <h2
            className="text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            WHY CHOOSE US
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            We're committed to delivering excellence in education through our
            comprehensive programs designed to transform your career in just 90
            days.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto text-center">
          <div>
            <div
              className="text-4xl font-bold mb-1"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              1 Years
            </div>
            <div
              className="text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              Experience
            </div>
          </div>
          <div>
            <div
              className="text-4xl font-bold mb-1"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              50+
            </div>
            <div
              className="text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              Graduates
            </div>
          </div>
          <div>
            <div
              className="text-4xl font-bold mb-1"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              000+
            </div>
            <div
              className="text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              Partner Companies
            </div>
          </div>
        </div>

        {/* Main Layout - Features Around Center Image */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* LEFT SIDE - 2 Features */}
            <div className="space-y-8 lg:space-y-12">
              {/* Feature 1 - Top Left */}
              <div className="text-left lg:text-right space-y-3">
                <div className="flex items-center gap-3 lg:flex-row-reverse lg:justify-end">
                  <div className="w-12 h-12 rounded-full bg-[#e83f25]/10 flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-[#e83f25]" />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-primary)" }}
                  >
                    Skillset
                  </h3>
                </div>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  olor sit amet consectetur adipisicing elit. Error
                  dorupti aspernatur similique ad animi
                  in voluptates, quaerat optio.
                </p>
              </div>

              {/* Feature 2 - Bottom Left */}
              <div className="text-left lg:text-right space-y-3">
                <div className="flex items-center gap-3 lg:flex-row-reverse lg:justify-end">
                  <div className="w-12 h-12 rounded-full bg-[#e83f25]/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#e83f25]" />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-primary)" }}
                  >
                    skillset
                  </h3>
                </div>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                   olor sit amet consectetur adipisicing elit. Error
                  dorupti aspernatur similique ad animi
                  in voluptates, quaerat optio.
                </p>
              </div>
            </div>

            {/* CENTER - Image with Circle Background */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                {/* Blue/Red Circle Background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#e83f25]/20 to-[#e83f25]/5"></div>

                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-end justify-center bg-gradient-to-b from-transparent to-[#e83f25]/10">
                  {/* Demo Image - Replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="https://img.freepik.com/premium-photo/asian-two-business-man-construction-engineers-supervising-progress-construction-project-construction-site_61243-1493.jpg?w=2000"
                      alt="Education"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* For actual image use:
                  <img 
                    src="your-image-url.jpg" 
                    alt="Education" 
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - 2 Features */}
            <div className="space-y-8 lg:space-y-12">
              {/* Feature 3 - Top Right */}
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#e83f25]/10 flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-[#e83f25]" />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-primary)" }}
                  >
                    skillset
                  </h3>
                </div>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                   olor sit amet consectetur adipisicing elit. Error
                  dorupti aspernatur similique ad animi
                  in voluptates, quaerat optio.
                </p>
              </div>

              {/* Feature 4 - Bottom Right */}
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#e83f25]/10 flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-[#e83f25]" />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-primary)" }}
                  >
                    skill set
                  </h3>
                </div>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                   olor sit amet consectetur adipisicing elit. Error
                  dorupti aspernatur similique ad animi
                  in voluptates, quaerat optio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
