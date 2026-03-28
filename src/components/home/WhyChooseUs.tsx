
import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "You talk to the founder, not a project manager",
    description: "Faisal runs every project. No hand-off to a junior team you've never met. You get the same engineer from kick-off to launch."
  },
  {
    title: "Fixed milestones, not open-ended retainers",
    description: "Every project has a defined scope, timeline, and price before we write a line of code. No surprise invoices, no scope creep on our end."
  },
  {
    title: "We've shipped 50+ projects since 2022",
    description: "Dashboards, internal tools, SaaS portals, e-commerce platforms. All finished. 100% completion rate across every client we've worked with."
  },
  {
    title: "React and TypeScript are all we do",
    description: "We don't spread across 12 stacks. Deep specialization means faster builds, cleaner code, and fewer bugs in production."
  },
  {
    title: "You own everything when we're done",
    description: "Full source code, deployment access, documentation. No vendor lock-in. You can take the codebase and hand it to any engineer in the future."
  },
  {
    title: "Weekly demos, not monthly updates",
    description: "You see working software every week. If something's off, we catch it early — not two days before launch."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Why Teams Work With Mosivant</h2>
            <p className="text-xl text-black">
              Not the agency pitch. The honest version.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-2 bg-coral rounded-full mr-4 flex-shrink-0">
                  <CheckCircle className="text-black h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-black">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
