
import React from "react";
import { Award, Globe, Users, Briefcase } from "lucide-react";

// Company milestones data
const milestones = [
  {
    year: "2010",
    title: "Founded",
    description: "Mosivant was established with a vision to provide tailored technology solutions.",
    icon: <Briefcase className="w-6 h-6 text-coral" />,
  },
  {
    year: "2015",
    title: "Major Expansion",
    description: "Expanded services to include cloud solutions and digital transformation consulting.",
    icon: <Globe className="w-6 h-6 text-coral" />,
  },
  {
    year: "2018",
    title: "50+ Enterprise Clients",
    description: "Reached a milestone of serving over 50 enterprise clients across multiple industries.",
    icon: <Users className="w-6 h-6 text-coral" />,
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Named as one of the top IT consulting firms by Industry Today magazine.",
    icon: <Award className="w-6 h-6 text-coral" />,
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Expanded operations to serve clients across North America, Europe, and Asia.",
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
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
