import React from "react";
import { CheckCircle } from "lucide-react";

const CertificationMetrics = () => {
  const metrics = [
    "Completion of all technical assignments & mini-projects",
    "Weekly social media updates & engagement",
    "Daily & weekly reflection videos",
    "Internship documentation & on-field videos",
    "Final 90-day video documenting entire journey",
    "Improvement in communication, presentation, and professionalism"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold font-[Antonio]">
            CERTIFICATION <span className="text-[#e83f25]">METRICS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[Inter]">
            Your final certificate depends on completing all requirements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 inline-block">
                <p className="text-sm font-semibold text-red-800">
                  ⚠️ Important: Your final certification depends on completing all assignments, 
                  social media posts, videos, and internship documentation on time.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-center font-[Antonio]">
              Evaluation Criteria
            </h3>
            
            <div className="grid gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-[#e83f25] mt-1 flex-shrink-0" />
                  <span className="text-sm">{metric}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                All deliverables must be submitted by their respective deadlines to qualify for certification
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationMetrics;