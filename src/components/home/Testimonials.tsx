
import React from "react";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    quote: "Faisal rebuilt our entire booking platform in React and it cut our page load time in half. Our customers actually complete checkouts now.",
    author: "Sarah Johnson",
    position: "Owner, Nexus Wellness Studio",
  },
  {
    quote: "We needed a new website fast and Mosivant delivered a clean, modern site in under three weeks. Communication was straightforward the whole time.",
    author: "Michael Chen",
    position: "Marketing Lead, GrowthForce Media",
  },
  {
    quote: "Mosivant helped us migrate off a legacy system we'd been stuck on for years. The transition was smooth and our team picked up the new tools quickly.",
    author: "David Rodriguez",
    position: "Operations Manager, Evolve Logistics",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lemon">What Our Clients Say</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Hear from businesses who have experienced tangible results from our IT consultancy services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black border border-gray-800 rounded-lg p-8 shadow-lg">
              <svg 
                className="h-8 w-8 text-coral mb-4" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6 text-white">{testimonial.quote}</p>
              <Separator className="bg-gray-700 mb-6" />
              <div>
                <h4 className="font-bold text-white">{testimonial.author}</h4>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
