
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Strategic IT roadmap development",
  "Custom digital solutions",
  "Enterprise system optimization",
  "24/7 technical support"
];

const CtaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-consulting-800 to-consulting-900 rounded-2xl p-10 md:p-16 text-white shadow-xl max-w-6xl mx-auto relative overflow-hidden">
          {/* Enhanced abstract background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-consulting-400 blur-[80px] animate-pulse-slow" />
            <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-consulting-200 blur-[100px] animate-pulse-slow" />
            <div className="absolute top-40 left-40 w-40 h-40 rounded-full bg-consulting-300 blur-[60px] animate-pulse-slow" />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMGwuMDAxIDYwSDBWMGg2MHpNNTkgMUgxdjU4aDU4VjF6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <div className="inline-block bg-white/10 text-consulting-100 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Strategic Partnership
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Digital Transformation?</h2>
                <p className="text-xl text-consulting-100 mb-6 leading-relaxed">
                  Partner with us to unlock new opportunities for growth, innovation, and operational excellence.
                </p>
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-consulting-300 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-consulting-50">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                  <Button className="bg-white text-consulting-800 hover:bg-gray-100 hover:text-consulting-900 px-8 py-6 text-lg shadow-lg shadow-consulting-900/20 transition-all duration-300 hover:translate-y-[-2px]">
                    Schedule a Consultation
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg group transition-all duration-300 hover:translate-y-[-2px]">
                    Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative hidden md:block">
                <div className="absolute inset-0 bg-consulting-600/20 backdrop-blur-sm rounded-xl border border-white/10"></div>
                <div className="absolute inset-10 bg-gradient-to-br from-consulting-700/50 to-consulting-900/50 backdrop-blur-md rounded-lg border border-white/10 shadow-2xl"></div>
                <div className="absolute inset-20 bg-gradient-to-tr from-consulting-800/70 to-consulting-900/70 backdrop-blur-lg rounded-md border border-white/10 flex items-center justify-center">
                  <div className="text-white text-opacity-90 text-center p-4">
                    <div className="text-5xl font-bold mb-2">98%</div>
                    <div className="text-xl">Client Satisfaction</div>
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
