
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-consulting-950 to-consulting-900 text-white py-24 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-consulting-600 blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-consulting-400 blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in leading-tight">
              Innovation-Led <br className="hidden md:block" />
              <span className="text-consulting-300">Digital Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0 animate-fade-in animate-delay-200 max-w-2xl mx-auto md:mx-0">
              We help businesses thrive in the digital age with technology consulting and innovative IT solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animate-delay-300 justify-center md:justify-start">
              <Button className="bg-consulting-600 hover:bg-consulting-500 text-white px-8 py-6 text-lg">
                Explore Our Solutions
              </Button>
              <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg">
                Our Success Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Moving gradient overlay */}
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
