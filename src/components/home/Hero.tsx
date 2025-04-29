
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-consulting-950 to-consulting-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in">
            IT Solutions That Drive Business Growth
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0 animate-fade-in animate-delay-200">
            We provide tailored technology consulting and solutions to help your business innovate and thrive in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in animate-delay-300">
            <Button className="bg-consulting-600 hover:bg-consulting-500 text-white px-8 py-6 text-lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg">
              Explore Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
