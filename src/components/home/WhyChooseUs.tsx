
import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Enterprise Experience",
    description: "We've helped Fortune 500 companies and leading enterprises solve complex technology challenges."
  },
  {
    title: "Innovation-First Approach",
    description: "Our solutions leverage the latest technologies and methodologies to give you a competitive edge."
  },
  {
    title: "Industry Expertise",
    description: "Deep domain knowledge across multiple industries enables us to deliver contextual solutions."
  },
  {
    title: "Global Talent Network",
    description: "Access to our global pool of skilled technology professionals and specialized expertise."
  },
  {
    title: "Proven Methodologies",
    description: "Time-tested frameworks and methodologies that ensure predictable outcomes and risk mitigation."
  },
  {
    title: "Strategic Partnerships",
    description: "Strategic alliances with leading technology providers to deliver best-in-class solutions."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-positivus-light dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-positivus-dark dark:text-white">Why Choose Mosivant</h2>
            <p className="text-xl text-positivus-dark dark:text-gray-300">
              We combine technology expertise with industry insights to deliver impactful business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow dark:text-white"
              >
                <div className="p-2 bg-positivus-green rounded-full mr-4 flex-shrink-0">
                  <CheckCircle className="text-positivus-dark h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-positivus-dark dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
