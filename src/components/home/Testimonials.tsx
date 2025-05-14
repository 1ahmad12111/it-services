
import React from "react";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    quote: "Mosivant transformed our outdated systems, significantly improving our operational efficiency. Their expertise and dedication were invaluable.",
    author: "Sarah Johnson",
    position: "CTO, Nexus Innovations",
  },
  {
    quote: "The team at Mosivant delivered our new website ahead of schedule and exceeded our expectations. Their attention to detail is outstanding.",
    author: "Michael Chen",
    position: "Marketing Director, GrowthForce",
  },
  {
    quote: "We've been working with Mosivant for over three years now. Their IT support has been consistently excellent, with quick response times.",
    author: "David Rodriguez",
    position: "Operations Manager, Evolve Systems",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-positivus-dark text-white relative overflow-hidden">
      {/* Add subtle animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-consulting-800 blur-[120px] animate-pulse-slow opacity-30" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-consulting-700 blur-[150px] animate-pulse-slow opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-positivus-green">What Our Clients Say</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Hear from businesses who have experienced tangible results from our IT consultancy services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-positivus-dark border border-gray-800 rounded-lg p-8 shadow-lg backdrop-blur-sm bg-opacity-70 hover:bg-opacity-90 transition-all"
            >
              <svg 
                className="h-8 w-8 text-positivus-green mb-4" 
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
