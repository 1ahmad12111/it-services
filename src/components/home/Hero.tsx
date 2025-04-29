
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, LineChart, ShieldCheck, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-consulting-950 via-consulting-900 to-consulting-800 text-white py-24 overflow-hidden">
      {/* Enhanced abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-consulting-500 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-consulting-400 blur-[150px] animate-pulse-slow" />
        <div className="absolute top-60 right-40 w-80 h-80 rounded-full bg-blue-400 blur-[100px] animate-pulse-slow" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMGwuMDAxIDYwSDBWMGg2MHpNNTkgMUgxdjU4aDU4VjF6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
              <span className="bg-gradient-to-r from-consulting-400 to-consulting-500 px-4 py-1.5 rounded-full text-white text-sm font-medium mb-4 md:mb-0 shadow-lg">
                Next-Gen Digital Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
              Transform Your Business With 
              <span className="relative ml-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-consulting-300 to-blue-300">
                  Intelligent Technology
                </span>
                <span className="absolute bottom-1 left-0 w-full h-1 bg-consulting-400/40 rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fade-in animate-delay-200 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Driving innovation with AI, cloud solutions, and strategic IT consulting for forward-thinking enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 animate-fade-in animate-delay-300 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-consulting-500 to-consulting-600 hover:from-consulting-600 hover:to-consulting-700 text-white px-8 py-7 text-lg shadow-xl shadow-consulting-800/30 transition-all duration-300 hover:translate-y-[-2px] font-medium rounded-xl border border-consulting-400/20">
                Explore Our Solutions
              </Button>
              <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white px-8 py-7 text-lg group transition-all duration-300 hover:translate-y-[-2px] rounded-xl backdrop-blur-sm">
                Schedule a Consultation <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg transform transition-all hover:translate-y-[-5px] hover:bg-white/10">
                <div className="bg-consulting-500/20 p-3 rounded-lg w-fit mb-4">
                  <ShieldCheck className="h-6 w-6 text-consulting-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Advanced protection for your critical business assets and data</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg transform transition-all hover:translate-y-[-5px] hover:bg-white/10">
                <div className="bg-consulting-500/20 p-3 rounded-lg w-fit mb-4">
                  <Cpu className="h-6 w-6 text-consulting-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Integration</h3>
                <p className="text-gray-300">Leverage cutting-edge AI to drive decision-making and automation</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg transform transition-all hover:translate-y-[-5px] hover:bg-white/10">
                <div className="bg-consulting-500/20 p-3 rounded-lg w-fit mb-4">
                  <LineChart className="h-6 w-6 text-consulting-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Analytics</h3>
                <p className="text-gray-300">Transform raw data into actionable business intelligence</p>
              </div>
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
