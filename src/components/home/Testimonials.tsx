
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "They delivered our fleet dashboard 3 days early. The real-time tracking alone saved our ops team 8 hours a week.",
    name: "Sarah Chen",
    title: "CTO",
    company: "NorthStar Route Labs",
  },
  {
    quote:
      "Finally, one dashboard instead of five browser tabs. Our ad spend decisions went from gut feel to data-driven overnight.",
    name: "Marcus Webb",
    title: "Founder",
    company: "GlowPath Beauty",
  },
  {
    quote:
      "No-shows dropped from 18% to 7% in the first month. The scheduling dashboard paid for itself in week two.",
    name: "Dr. Priya Sharma",
    title: "COO",
    company: "BrightSmile Dental",
  },
  {
    quote:
      "Mosivant felt like an extension of our team. Fast, clear communication, and they actually finish what they start.",
    name: "Jake Morrison",
    title: "VP Ops",
    company: "TechLift SaaS",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lemon">What Teams Say About Mosivant</h2>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto">
            Results from operators, founders, and leaders who needed reliable execution and clear outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="animate-on-scroll opacity-0 rounded-xl border border-zinc-800 bg-zinc-950/90 p-6 shadow-lg shadow-black/30"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="mb-4 flex items-center gap-1 text-lemon">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={`${testimonial.name}-star-${starIndex}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-6 text-zinc-100 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-zinc-300">{testimonial.title}</p>
                <p className="text-sm text-zinc-400">{testimonial.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
