
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Ship, Not Just Plan?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Tell us your goal, timeline, and budget range. We will send a clear execution plan, not a generic proposal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-[#ea384c] text-white hover:bg-[#d73246]"
            size="lg"
            asChild
          >
            <Link to="/services">
              View Services
            </Link>
          </Button>
          <Button
            className="bg-[#ea384c] text-white hover:bg-[#d73246]"
            size="lg"
            asChild
          >
            <Link to="/booking">
              Book a Free 15-Minute Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
