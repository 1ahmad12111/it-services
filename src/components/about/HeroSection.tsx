
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">A Small Team That Ships and Stays Accountable</h1>
          <p className="text-xl text-lemon mb-8 leading-relaxed">
            Founded in 2022 by Faisal in Columbus, OH, Mosivant has delivered 50+ projects with a 100% completion rate.
          </p>
          <Button className="bg-coral hover:bg-coral/90 text-black" asChild>
            <Link to="/booking">Book a Free 15-Minute Intro Call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
