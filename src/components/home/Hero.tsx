
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-consulting-950 to-consulting-900 text-white py-24 overflow-hidden">
      {/* Abstract background elements with enhanced design */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-consulting-600 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-consulting-400 blur-[150px] animate-pulse-slow" />
        <div className="absolute top-60 right-40 w-48 h-48 rounded-full bg-consulting-300 blur-[80px] animate-pulse-slow" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMGwuMDAxIDYwSDBWMGg2MHpNNTkgMUgxdjU4aDU4VjF6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-3">
              <span className="bg-consulting-600/20 text-consulting-300 px-3 py-1 rounded-full text-sm font-medium mb-4 md:mb-0">Leading Digital Innovation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in leading-tight">
              Innovation-Led <br className="hidden md:block" />
              <span className="text-consulting-300 relative">
                Digital Transformation
                <span className="absolute bottom-2 left-0 w-full h-1 bg-consulting-500/30 rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0 animate-fade-in animate-delay-200 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              We help enterprises thrive in the digital age with technology consulting and innovative IT solutions tailored to your strategic goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animate-delay-300 justify-center md:justify-start">
              <Button className="bg-consulting-600 hover:bg-consulting-500 text-white px-8 py-6 text-lg shadow-lg shadow-consulting-800/20 transition-all duration-300 hover:translate-y-[-2px]">
                Explore Our Solutions
              </Button>
              <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg group transition-all duration-300 hover:translate-y-[-2px]">
                Our Success Stories <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced gradient overlay */}
      <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
