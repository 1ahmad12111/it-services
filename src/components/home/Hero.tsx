import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, LineChart, ShieldCheck, Cpu } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-slate-900 text-white pt-28 pb-24 overflow-hidden">
      {/* Enhanced abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-coral/30 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-lemon/20 blur-[150px] animate-pulse-slow" />
        <div className="absolute top-60 right-40 w-80 h-80 rounded-full bg-coral/20 blur-[100px] animate-pulse-slow" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMGwuMDAxIDYwSDBWMGg2MHpNNTkgMUgxdjU4aDU4VjF6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
              <span className="bg-gradient-to-r from-coral to-coral/70 px-4 py-1.5 rounded-full text-black text-sm font-medium mb-4 md:mb-0 shadow-lg">
                50+ Projects Shipped Since 2022
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
              Ship Your Next Web App
              <span className="relative ml-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-lemon to-lemon/80">
                  In 3 To 6 Weeks
                </span>
                {/* Subtle underline effect that doesn't affect readability */}
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-lemon to-coral rounded-full transform-gpu scale-x-[0.98] opacity-70" style={{ filter: "blur(0.5px)" }}></span>
                <span className="absolute -bottom-2 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-coral to-lemon rounded-full transform-gpu opacity-60"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fade-in animate-delay-200 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              We build dashboards, portals, and internal tools that save hours every week. You get fixed milestones, weekly demos, and a team that finishes what it starts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 animate-fade-in animate-delay-300 justify-center md:justify-start">
              <Button 
                className="bg-gradient-to-r from-coral to-coral/90 hover:from-coral/90 hover:to-coral text-black px-8 py-7 text-lg shadow-xl shadow-black/30 transition-all duration-300 hover:translate-y-[-2px] font-medium rounded-xl border border-coral/20"
                asChild
              >
                <RouterLink to="/contact">
                  Get Your Build Plan
                </RouterLink>
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-white/20 hover:bg-lemon/10 text-white px-8 py-7 text-lg group transition-all duration-300 hover:translate-y-[-2px] rounded-xl backdrop-blur-sm"
                asChild
              >
                <RouterLink to="/booking">
                  Book a Free 15-Minute Call <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </RouterLink>
              </Button>
            </div>

            <p className="mt-8 text-sm md:text-base text-gray-200/90 animate-fade-in animate-delay-300">
              ✓ 50+ projects delivered &nbsp;&nbsp; ✓ 100% completion rate &nbsp;&nbsp; ✓ Based in Columbus, OH
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg transform transition-all hover:translate-y-[-5px] hover:bg-white/10">
                <div className="bg-coral/20 p-3 rounded-lg w-fit mb-4">
                  <ShieldCheck className="h-6 w-6 text-coral" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fewer Manual Tasks</h3>
                <p className="text-gray-300">We replace spreadsheet-heavy workflows with tools your team can use on day one.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg transform transition-all hover:translate-y-[-5px] hover:bg-white/10">
                <div className="bg-lemon/20 p-3 rounded-lg w-fit mb-4">
                  <Cpu className="h-6 w-6 text-lemon" />
                </div>
                <h3 className="text-xl font-bold mb-2">Faster Team Decisions</h3>
                <p className="text-gray-300">Live dashboards give your team one source of truth, instead of chasing updates in chat.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg transform transition-all hover:translate-y-[-5px] hover:bg-white/10">
                <div className="bg-coral/20 p-3 rounded-lg w-fit mb-4">
                  <LineChart className="h-6 w-6 text-coral" />
                </div>
                <h3 className="text-xl font-bold mb-2">Revenue-Focused Builds</h3>
                <p className="text-gray-300">Every screen and flow is built to increase booked calls, retention, or repeat sales.</p>
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
