
import React from "react";
import { Award, Globe, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Company milestones data
const milestones = [
  {
    year: "2022",
    title: "Mosivant Started",
    description: "Faisal launched Mosivant in Columbus, OH with a focus on practical web delivery for SMB teams.",
    icon: <Briefcase className="w-6 h-6 text-coral" />,
  },
  {
    year: "2023",
    title: "First 20 Projects Delivered",
    description: "Early client work validated our model: short scopes, weekly demos, and direct founder communication.",
    icon: <Globe className="w-6 h-6 text-coral" />,
  },
  {
    year: "2024",
    title: "Process Tightened",
    description: "We standardized delivery checklists and QA flow to protect timeline and handoff quality.",
    icon: <Users className="w-6 h-6 text-coral" />,
  },
  {
    year: "2025",
    title: "50+ Projects, 100% Completion Rate",
    description: "We crossed 50 delivered projects and kept our completion record intact.",
    icon: <Award className="w-6 h-6 text-coral" />,
  },
  {
    year: "2026",
    title: "Growing with Focus",
    description: "We stayed intentionally small so clients still work with builders, not a sales layer.",
    icon: <Globe className="w-6 h-6 text-coral" />,
  },
];

const JourneySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex mb-8 last:mb-0">
              <div className="mr-6 relative">
                <div className="w-12 h-12 bg-white rounded-full border-2 border-coral flex items-center justify-center">
                  {milestone.icon}
                </div>
                {index < milestones.length - 1 && (
                  <div className="absolute top-12 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-lemon/50"></div>
                )}
              </div>
              <div className="pt-2">
                <div className="flex items-center mb-1">
                  <span className="text-coral font-semibold mr-3">{milestone.year}</span>
                  <h3 className="text-xl font-bold">{milestone.title}</h3>
                </div>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
          <div className="text-center mt-10">
            <Button className="bg-coral hover:bg-coral/90 text-black" asChild>
              <Link to="/booking">Talk to the Founder</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
