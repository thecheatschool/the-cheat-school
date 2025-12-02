import React from "react";
import { Video, Camera, FileVideo } from "lucide-react";

const InternshipDocumentation = () => {
  const tasks = [
    {
      task: "Short on-field videos",
      frequency: "2 per week",
      deadline: "Every Thursday 10 PM",
      icon: Video,
      description: "1-3 minutes maximum, focus on learning & application"
    },
    {
      task: "Photos of tasks & work",
      frequency: "Daily or 3-4 times/week",
      deadline: "Upload weekly Thursday 10 PM",
      icon: Camera,
      description: "Document daily work and progress visually"
    },
    {
      task: "Internship reflection video",
      frequency: "Weekly",
      deadline: "Thursday 10 PM",
      icon: FileVideo,
      description: "Weekly summary of internship experiences and learnings"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold font-[Antonio]">
            INTERNSHIP <span className="text-[#e83f25]">DOCUMENTATION</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[Inter]">
            Comprehensive documentation during Month 3 internship phase
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {tasks.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#e83f25] rounded-lg">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">{item.task}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Frequency:</span>
                  <span className="text-sm text-[#e83f25]">{item.frequency}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Deadline:</span>
                  <span className="text-sm text-[#e83f25]">{item.deadline}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h4 className="font-bold text-lg mb-3 text-yellow-800">📹 Video Guidelines</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Keep videos 1-3 minutes maximum</li>
            <li>• Focus on learning outcomes and practical applications</li>
            <li>• Show real work environment and tasks</li>
            <li>• Maintain professional presentation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InternshipDocumentation;