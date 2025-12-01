import React from "react";
import { TrendingUp, Calendar, Video } from "lucide-react";

const SocialMediaSchedule = () => {
  const postingSchedule = [
    {
      frequency: "2-3 times per week",
      platform: "LinkedIn / Twitter/X",
      content: "Learning updates, mini-project progress, AI insights",
      deadline: "Thursday 10 PM",
      icon: TrendingUp
    },
    {
      frequency: "Once per month",
      platform: "LinkedIn",
      content: "Detailed reflection post",
      deadline: "End of Month",
      icon: Calendar
    },
    {
      frequency: "Final Post",
      platform: "LinkedIn / Twitter/X",
      content: "90-day video journey",
      deadline: "Week 13 Thursday 10 PM",
      icon: Video
    }
  ];

  const tips = [
    "Professional tone in all posts",
    "Tag @The Cheat School in your posts",
    "Use hashtags: #Cheatcamp #CivilEngineerInMaking",
    "Focus on learning journey and practical applications"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold font-[Antonio]">
            SOCIAL MEDIA <span className="text-[#e83f25]">SCHEDULE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[Inter]">
            Building your professional online presence throughout the program
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {postingSchedule.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="p-3 bg-[#e83f25] rounded-lg inline-block mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.frequency}</h3>
              <p className="text-[#e83f25] font-semibold mb-2">{item.platform}</p>
              <p className="text-sm text-muted-foreground mb-3">{item.content}</p>
              <div className="bg-muted rounded-lg p-2">
                <span className="text-sm font-semibold">Deadline: {item.deadline}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center font-[Antonio]">
            Posting Guidelines & Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-2 h-2 bg-[#e83f25] rounded-full"></div>
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSchedule;