
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Partner with Mosivant for innovative technology solutions that drive growth and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-coral text-black hover:bg-coral/90"
            size="lg"
            asChild
          >
            <Link to="/services">
              Explore Our Services
            </Link>
          </Button>
          <Button
            className="bg-lemon text-black hover:bg-lemon/90 border-2 border-white"
            size="lg"
            asChild
          >
            <Link to="/booking">
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
