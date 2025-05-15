
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const benefits = [
  "Strategic IT roadmap development",
  "Custom digital solutions",
  "Enterprise system optimization",
  "24/7 technical support"
];

const CtaSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-10 md:p-16 text-white shadow-2xl max-w-6xl mx-auto relative overflow-hidden border border-gray-800">
          {/* Enhanced abstract background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-coral blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-lemon blur-[120px] animate-pulse-slow" />
            <div className="absolute top-40 left-40 w-60 h-60 rounded-full bg-coral blur-[80px] animate-pulse-slow" />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMGwuMDAxIDYwSDBWMGg2MHpNNTkgMUgxdjU4aDU4VjF6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/2 text-center md:text-left">
                <div className="inline-flex bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                  Strategic Partnership
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Ready to Accelerate Your <span className="text-gradient bg-gradient-to-r from-coral to-lemon">Digital Transformation?</span></h2>
                <p className="text-xl text-white mb-8 leading-relaxed">
                  Partner with MOSIVANT to unlock new opportunities for growth, innovation, and operational excellence.
                </p>
                <div className="space-y-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-coral mr-4 mt-0.5 flex-shrink-0" />
                      <p className="text-white text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5">
                  <Button 
                    className="bg-gradient-to-r from-coral to-coral/90 hover:from-coral/90 hover:to-coral text-black px-8 py-7 text-lg shadow-xl shadow-black/30 transition-all duration-300 hover:translate-y-[-2px] rounded-xl border border-coral/20"
                    asChild
                  >
                    <RouterLink to="/booking">
                      Schedule a Consultation
                    </RouterLink>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-white/20 hover:bg-lemon/10 text-white px-8 py-7 text-lg group transition-all duration-300 hover:translate-y-[-2px] rounded-xl"
                    asChild
                  >
                    <RouterLink to="/services">
                      Explore Our Solutions <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </RouterLink>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative hidden md:block">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
                    <div className="h-2 w-full bg-gradient-to-r from-coral via-lemon to-coral"></div>
                    <div className="p-6 flex flex-col h-[calc(100%-2px)]">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-coral rounded-full"></div>
                          <div className="w-3 h-3 bg-lemon rounded-full"></div>
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="h-6 w-24 bg-gray-800 rounded-md"></div>
                      </div>
                      
                      <div className="flex-1 overflow-hidden flex flex-col justify-center items-center">
                        <div className="animate-pulse-slow">
                          <div className="h-24 w-24 mx-auto mb-6">
                            <img 
                              src="/lovable-uploads/34880202-0804-4af2-a75d-b60725da0d26.png" 
                              alt="MOSIVANT logo"
                              className="h-full w-full"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-3 w-full max-w-xs">
                          <div className="h-4 bg-gray-700/60 rounded w-full"></div>
                          <div className="h-4 bg-gray-700/60 rounded w-5/6"></div>
                          <div className="h-4 bg-gray-700/60 rounded w-3/4"></div>
                        </div>
                        
                        <div className="mt-8">
                          <div className="h-10 w-32 bg-gradient-to-r from-coral to-lemon rounded-lg"></div>
                        </div>
                      </div>
                      
                      <div className="mt-6 h-16 bg-gray-800/30 rounded-lg w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
