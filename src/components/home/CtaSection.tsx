
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";

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
        <div className="bg-gradient-to-br from-consulting-800 via-consulting-900 to-consulting-950 rounded-3xl p-10 md:p-16 text-white shadow-2xl max-w-6xl mx-auto relative overflow-hidden border border-consulting-700/20">
          {/* Enhanced abstract background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-consulting-400 blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-400 blur-[120px] animate-pulse-slow" />
            <div className="absolute top-40 left-40 w-60 h-60 rounded-full bg-consulting-300 blur-[80px] animate-pulse-slow" />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMGwuMDAxIDYwSDBWMGg2MHpNNTkgMUgxdjU4aDU4VjF6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/2 text-center md:text-left">
                <div className="inline-flex bg-white/10 text-consulting-100 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
                  Strategic Partnership
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Ready to Accelerate Your <span className="text-gradient bg-gradient-to-r from-consulting-300 to-blue-300">Digital Transformation?</span></h2>
                <p className="text-xl text-consulting-100 mb-8 leading-relaxed">
                  Partner with us to unlock new opportunities for growth, innovation, and operational excellence.
                </p>
                <div className="space-y-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-consulting-400 mr-4 mt-0.5 flex-shrink-0" />
                      <p className="text-consulting-50 text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5">
                  <Button className="bg-gradient-to-r from-consulting-500 to-consulting-600 hover:from-consulting-600 hover:to-consulting-700 text-white px-8 py-7 text-lg shadow-xl shadow-consulting-950/30 transition-all duration-300 hover:translate-y-[-2px] rounded-xl border border-consulting-400/20">
                    Schedule a Consultation
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white px-8 py-7 text-lg group transition-all duration-300 hover:translate-y-[-2px] rounded-xl">
                    Explore Our Solutions <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative hidden md:block">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-consulting-800/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
                    <div className="h-2 w-full bg-gradient-to-r from-consulting-400 via-blue-400 to-consulting-500"></div>
                    <div className="p-6 flex flex-col h-[calc(100%-2px)]">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="h-6 w-24 bg-consulting-700/50 rounded-md"></div>
                      </div>
                      
                      <div className="flex-1 overflow-hidden flex flex-col justify-center items-center">
                        <div className="animate-pulse-slow">
                          <div className="h-24 w-24 mx-auto mb-6">
                            <div className="bg-gradient-to-br from-consulting-400 to-blue-400 h-full w-full rounded-full flex items-center justify-center text-white text-3xl font-bold">
                              T
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3 w-full max-w-xs">
                          <div className="h-4 bg-consulting-700/60 rounded w-full"></div>
                          <div className="h-4 bg-consulting-700/60 rounded w-5/6"></div>
                          <div className="h-4 bg-consulting-700/60 rounded w-3/4"></div>
                        </div>
                        
                        <div className="mt-8">
                          <div className="h-10 w-32 bg-gradient-to-r from-consulting-500 to-blue-500 rounded-lg"></div>
                        </div>
                      </div>
                      
                      <div className="mt-6 h-16 bg-consulting-700/30 rounded-lg w-full"></div>
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
