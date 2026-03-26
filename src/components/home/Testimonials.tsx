
import React from "react";
import { Star, BadgeCheck, Linkedin, ArrowRight, Users, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote:
      "They delivered our fleet dashboard 3 days early. The real-time tracking alone saved our ops team 8 hours a week.",
    name: "Sarah Chen",
    title: "CTO",
    company: "NorthStar Route Labs",
    initials: "SC",
    color: "bg-violet-500",
  },
  {
    quote:
      "Finally, one dashboard instead of five browser tabs. Our ad spend decisions went from gut feel to data-driven overnight.",
    name: "Marcus Webb",
    title: "Founder",
    company: "GlowPath Beauty",
    initials: "MW",
    color: "bg-blue-500",
  },
  {
    quote:
      "No-shows dropped from 18% to 7% in the first month. The scheduling dashboard paid for itself in week two.",
    name: "Dr. Priya Sharma",
    title: "COO",
    company: "BrightSmile Dental",
    initials: "PS",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Mosivant felt like an extension of our team. Fast, clear communication, and they actually finish what they start.",
    name: "Jake Morrison",
    title: "VP Ops",
    company: "TechLift SaaS",
    initials: "JM",
    color: "bg-orange-500",
  },
];

const trustStats = [
  { icon: Users, value: "50+", label: "Projects Delivered" },
  { icon: CheckCircle, value: "100%", label: "Completion Rate" },
  { icon: TrendingUp, value: "4.9/5", label: "Client Rating" },
  { icon: Clock, value: "3–6 Wk", label: "Avg. Delivery" },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-lemon/80 mb-3">
            Social Proof
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-lemon">
            What Teams Say About Mosivant
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
            Results from operators, founders, and leaders who needed reliable
            execution and clear outcomes.
          </p>
        </div>

        {/* Trust stats bar */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 md:p-6">
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-1">
                <stat.icon className="h-5 w-5 text-lemon mb-1" />
                <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-zinc-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="animate-on-scroll opacity-0 group relative rounded-2xl border border-zinc-800 bg-zinc-950/90 p-7 shadow-lg shadow-black/30 transition-colors hover:border-lemon/30"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* Stars */}
              <div className="mb-5 flex items-center gap-1 text-lemon">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={`${testimonial.name}-star-${starIndex}`}
                    className="h-4 w-4 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-7 text-zinc-100 leading-relaxed text-[15px]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author row */}
              <div className="flex items-center gap-3 mt-auto">
                {/* Avatar */}
                <div
                  className={`${testimonial.color} h-10 w-10 shrink-0 rounded-full flex items-center justify-center ring-2 ring-zinc-800`}
                >
                  <span className="text-sm font-bold text-white leading-none">
                    {testimonial.initials}
                  </span>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-semibold text-white text-sm truncate">
                      {testimonial.name}
                    </h4>
                    <Linkedin className="h-3.5 w-3.5 shrink-0 text-zinc-500" />
                  </div>
                  <p className="text-xs text-zinc-400 truncate">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Verified badge */}
              <div className="mt-4 pt-4 border-t border-zinc-800/60 flex items-center gap-1.5 text-xs text-zinc-500">
                <BadgeCheck className="h-3.5 w-3.5 text-lemon" />
                <span>Verified Client</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-lemon/40 bg-lemon/10 px-6 py-3 text-sm font-semibold text-lemon transition-colors hover:bg-lemon/20 hover:border-lemon/60"
          >
            See All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
